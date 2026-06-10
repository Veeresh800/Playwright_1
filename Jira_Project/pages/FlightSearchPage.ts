import { Page, expect } from '@playwright/test';

export class FlightSearchPage {
  readonly page: Page;

  // Locators
  readonly tripTypeSelector = '[data-testid="trip-type-selector"], [aria-label*="trip"], .trip-type-selector, select[name="tripType"]';
  readonly oneWayOption = '[data-testid="one-way"], text=One-way, [value="oneWay"]';
  readonly roundTripOption = '[data-testid="round-trip"], text=Round-trip, [value="roundTrip"]';
  readonly departureAirportInput = '[data-testid="departure-airport"], [placeholder*="departure"], [placeholder*="From"], input[name="departureAirport"]';
  readonly destinationAirportInput = '[data-testid="destination-airport"], [placeholder*="destination"], [placeholder*="To"], input[name="destinationAirport"]';
  readonly departureDate = '[data-testid="departure-date"], [placeholder*="departure date"], input[name="departureDate"]';
  readonly returnDate = '[data-testid="return-date"], [placeholder*="return date"], input[name="returnDate"]';
  readonly passengerCountSelector = '[data-testid="passenger-count"], [aria-label*="passenger"], select[name="passengers"]';
  readonly searchButton = '[data-testid="search-button"], button:has-text("Search"), button:has-text("Find flights")';
  readonly autocompleteSuggestions = '[data-testid="autocomplete-suggestions"], .autocomplete-list, ul[role="listbox"]';
  readonly suggestionItem = '[data-testid^="suggestion"], .suggestion-item';
  readonly calendarPicker = '.calendar, [role="dialog"]';
  readonly dateInput = 'input[type="date"]';

  constructor(page: Page) {
    this.page = page;
  }

  // Navigation
  async goto() {
    await this.page.goto('https://www.aircanada.com/home/ca/en/aco/flights', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await this.page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    const acceptButton = this.page.locator('button:has-text("Accept"), button:has-text("I agree"), button:has-text("Allow all cookies"), button:has-text("Got it")').first();
    if (await acceptButton.isVisible().catch(() => false)) {
      await acceptButton.click().catch(() => {});
    }
  }

  async pageLoaded() {
    const searchForm = this.page.locator(
      'form, [role="search"], .flight-search-form, input[name*="departure"], input[placeholder*="From"], input[placeholder*="Where"]'
    ).first();
    await searchForm.waitFor({ state: 'visible', timeout: 30000 });
    return true;
  }

  // Trip Type Selection
  async selectTripType(tripType: 'One-way' | 'Round-trip' | 'Multi-city') {
    try {
      // Preferred: select element (if present)
      const selectEl = this.page.locator('select[name="tripType"]').first();
      const optVal = tripType === 'One-way' ? 'oneWay' : tripType === 'Round-trip' ? 'roundTrip' : undefined;

      if (await selectEl.isVisible().catch(() => false)) {
        if (optVal) {
          try {
            await selectEl.selectOption(optVal);
            await this.page.waitForTimeout(300);
            return;
          } catch {}
        }
      }

      // Try to open any visible trip-type toggle (site uses a custom button)
      const toggleBtn = this.page.locator('button:has-text("Choose trip type"), button:has-text("Trip type"), button:has-text("Choose trip"), [aria-label*="trip"]').first();
      if (await toggleBtn.isVisible().catch(() => false)) {
        await toggleBtn.click().catch(() => {});
        await this.page.waitForTimeout(300);

        // Try regex-based text match (handles "One-way" / "One way" variations)
        const regex = tripType === 'One-way' ? 'text=/One[- ]?way/i' : tripType === 'Round-trip' ? 'text=/Round[- ]?trip/i' : `text=${tripType}`;
        const candidate = this.page.locator(regex).first();
        if (await candidate.isVisible().catch(() => false)) {
          await candidate.click().catch(() => {});
          await this.page.waitForTimeout(300);
          return;
        }
      }

      // Try radio inputs or buttons with known values
      if (optVal) {
        const radio = this.page.locator(`input[type="radio"][value="${optVal}"]`).first();
        if (await radio.isVisible().catch(() => false)) {
          await radio.click().catch(() => {});
          await this.page.waitForTimeout(300);
          return;
        }
      }

      // Generic fallback: click any visible element that contains the tripType text
      const fallback = this.page.locator(`text=${tripType}`).first();
      if (await fallback.isVisible().catch(() => false)) {
        await fallback.click().catch(() => {});
        await this.page.waitForTimeout(300);
        return;
      }

      // As last resort, try partial matches
      const partial = tripType === 'One-way' ? this.page.locator('text=/One/i').first() : this.page.locator('text=/Round|Round/i').first();
      if (await partial.isVisible().catch(() => false)) {
        await partial.click().catch(() => {});
        await this.page.waitForTimeout(300);
        return;
      }

      throw new Error(`Could not find UI to select trip type: ${tripType}`);
    } catch (e) {
      console.log(`Could not select trip type using standard methods: ${e}`);
      throw new Error(`Failed to select trip type: ${tripType}`);
    }
  }

  // Airport Selection
  async selectDepartureAirport(airport: string, airportCode: string) {
    const input = this.page.locator(this.departureAirportInput).first();
    await input.click();
    await input.fill(airport);
    
    // Wait for autocomplete suggestions
    await this.page.waitForTimeout(300);
    
    // Look for suggestion containing the airport code
    const suggestion = this.page.locator(`text=${airportCode}`).first();
    
    try {
      await suggestion.waitFor({ state: 'visible', timeout: 5000 });
      await suggestion.click();
    } catch {
      // If autocomplete didn't appear, try direct input
      await input.clear();
      await input.fill(`${airport} (${airportCode})`);
    }
  }

  async selectDestinationAirport(airport: string, airportCode: string) {
    const input = this.page.locator(this.destinationAirportInput).first();
    await input.click();
    await input.fill(airport);
    
    // Wait for autocomplete suggestions
    await this.page.waitForTimeout(300);
    
    // Look for suggestion containing the airport code
    const suggestion = this.page.locator(`text=${airportCode}`).first();
    
    try {
      await suggestion.waitFor({ state: 'visible', timeout: 5000 });
      await suggestion.click();
    } catch {
      // If autocomplete didn't appear, try direct input
      await input.clear();
      await input.fill(`${airport} (${airportCode})`);
    }
  }

  // Date Selection
  async selectDepartureDate(daysFromNow: number = 7) {
    const input = this.page.locator(this.departureDate).first();
    
    // Calculate the date
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    const formattedDate = date.toISOString().split('T')[0];
    
    await input.click();
    
    // Try HTML5 date input
    try {
      await input.fill(formattedDate);
    } catch {
      // Try clicking calendar picker
      const datePicker = this.page.locator(this.calendarPicker).first();
      if (await datePicker.isVisible()) {
        const dateButton = datePicker.locator(`button:has-text("${date.getDate()}")`).first();
        await dateButton.click();
      }
    }
  }

  async selectReturnDate(daysFromNow: number = 10) {
    const input = this.page.locator(this.returnDate).first();
    
    // Calculate the date
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    const formattedDate = date.toISOString().split('T')[0];
    
    await input.click();
    
    try {
      await input.fill(formattedDate);
    } catch {
      const datePicker = this.page.locator(this.calendarPicker).first();
      if (await datePicker.isVisible()) {
        const dateButton = datePicker.locator(`button:has-text("${date.getDate()}")`).first();
        await dateButton.click();
      }
    }
  }

  // Passenger Selection
  async selectPassengerCount(count: number = 1) {
    const selector = this.page.locator(this.passengerCountSelector).first();
    
    if (await selector.isVisible()) {
      await selector.click();
      await this.page.locator(`text=${count}`).first().click();
    }
  }

  // Search
  async clickSearchButton() {
    const button = this.page.locator(this.searchButton).first();
    await button.click();
    
    // Wait for navigation or loading
    await this.page.waitForNavigation({ waitUntil: 'networkidle' }).catch(() => {
      // Page might not navigate, just wait for results
    });
  }

  // Visibility Checks
  async isTripTypeSelectorVisible(): Promise<boolean> {
    return this.page.locator(this.tripTypeSelector).first().isVisible();
  }

  async isDepartureAirportInputVisible(): Promise<boolean> {
    return this.page.locator(this.departureAirportInput).first().isVisible();
  }

  async isDestinationAirportInputVisible(): Promise<boolean> {
    return this.page.locator(this.destinationAirportInput).first().isVisible();
  }

  async isDepartureDatePickerVisible(): Promise<boolean> {
    return this.page.locator(this.departureDate).first().isVisible();
  }

  async isReturnDatePickerVisible(): Promise<boolean> {
    return this.page.locator(this.returnDate).first().isVisible();
  }

  async isPassengerCountSelectorVisible(): Promise<boolean> {
    return this.page.locator(this.passengerCountSelector).first().isVisible();
  }

  async isSearchButtonVisible(): Promise<boolean> {
    return this.page.locator(this.searchButton).first().isVisible();
  }

  async isSearchButtonEnabled(): Promise<boolean> {
    const button = this.page.locator(this.searchButton).first();
    return await button.isEnabled();
  }

  // Error Handling
  async getErrorMessage(): Promise<string | null> {
    const errorElement = this.page.locator('[role="alert"], .error-message, .alert-danger, [data-testid="error"]').first();
    
    try {
      await errorElement.waitFor({ state: 'visible', timeout: 3000 });
      return await errorElement.textContent();
    } catch {
      return null;
    }
  }

  // Validation
  async getDepartureAirportValue(): Promise<string> {
    const input = this.page.locator(this.departureAirportInput).first();
    return await input.inputValue();
  }

  async getDestinationAirportValue(): Promise<string> {
    const input = this.page.locator(this.destinationAirportInput).first();
    return await input.inputValue();
  }

  async getDepartureDateValue(): Promise<string> {
    const input = this.page.locator(this.departureDate).first();
    return await input.inputValue();
  }

  async getReturnDateValue(): Promise<string> {
    const input = this.page.locator(this.returnDate).first();
    return await input.inputValue();
  }
}
