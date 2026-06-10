import { Page, expect } from '@playwright/test';

export class FlightResultsPage {
  readonly page: Page;

  // Locators
  readonly resultContainer = '[data-testid="flight-results"], .flight-results, .results-container, main';
  readonly flightOption = '[data-testid="flight-option"], .flight-card, .flight-result, [role="article"]';
  readonly departureTime = '[data-testid="departure-time"], .departure-time, [aria-label*="departure"]';
  readonly arrivalTime = '[data-testid="arrival-time"], .arrival-time, [aria-label*="arrival"]';
  readonly duration = '[data-testid="duration"], .duration, [aria-label*="duration"]';
  readonly price = '[data-testid="price"], .price, .total-price, [aria-label*="price"]';
  readonly errorMessage = '[role="alert"], .error-message, .alert-danger, [data-testid="error"]';
  readonly noResults = 'text=No flights found, text=No results, .no-results';

  constructor(page: Page) {
    this.page = page;
  }

  // Check if results loaded
  async resultsLoaded(): Promise<boolean> {
    const results = this.page.locator(this.resultContainer).first();
    
    try {
      await results.waitFor({ state: 'visible', timeout: 10000 });
      return true;
    } catch {
      return false;
    }
  }

  // Flight Results Retrieval
  async getFlightCount(): Promise<number> {
    const flights = await this.page.locator(this.flightOption).all();
    return flights.length;
  }

  async getFirstFlightDetails(): Promise<{
    departureTime: string | null;
    arrivalTime: string | null;
    duration: string | null;
    price: string | null;
  }> {
    const flight = this.page.locator(this.flightOption).first();
    
    const departureTime = await flight.locator(this.departureTime).first().textContent().catch(() => null);
    const arrivalTime = await flight.locator(this.arrivalTime).first().textContent().catch(() => null);
    const duration = await flight.locator(this.duration).first().textContent().catch(() => null);
    const price = await flight.locator(this.price).first().textContent().catch(() => null);

    return {
      departureTime: departureTime?.trim() || null,
      arrivalTime: arrivalTime?.trim() || null,
      duration: duration?.trim() || null,
      price: price?.trim() || null,
    };
  }

  async getAllFlightDetails(): Promise<Array<{
    departureTime: string | null;
    arrivalTime: string | null;
    duration: string | null;
    price: string | null;
  }>> {
    const flights = await this.page.locator(this.flightOption).all();
    const results = [];

    for (const flight of flights) {
      const departureTime = await flight.locator(this.departureTime).first().textContent().catch(() => null);
      const arrivalTime = await flight.locator(this.arrivalTime).first().textContent().catch(() => null);
      const duration = await flight.locator(this.duration).first().textContent().catch(() => null);
      const price = await flight.locator(this.price).first().textContent().catch(() => null);

      results.push({
        departureTime: departureTime?.trim() || null,
        arrivalTime: arrivalTime?.trim() || null,
        duration: duration?.trim() || null,
        price: price?.trim() || null,
      });
    }

    return results;
  }

  // Verification Methods
  async verifyDepartureTimeVisible(): Promise<boolean> {
    const flight = this.page.locator(this.flightOption).first();
    return await flight.locator(this.departureTime).first().isVisible().catch(() => false);
  }

  async verifyArrivalTimeVisible(): Promise<boolean> {
    const flight = this.page.locator(this.flightOption).first();
    return await flight.locator(this.arrivalTime).first().isVisible().catch(() => false);
  }

  async verifyDurationVisible(): Promise<boolean> {
    const flight = this.page.locator(this.flightOption).first();
    return await flight.locator(this.duration).first().isVisible().catch(() => false);
  }

  async verifyPriceVisible(): Promise<boolean> {
    const flight = this.page.locator(this.flightOption).first();
    return await flight.locator(this.price).first().isVisible().catch(() => false);
  }

  async verifyAllRequiredFieldsVisible(): Promise<boolean> {
    const timeVisible = await this.verifyDepartureTimeVisible();
    const arrivalVisible = await this.verifyArrivalTimeVisible();
    const durationVisible = await this.verifyDurationVisible();
    const priceVisible = await this.verifyPriceVisible();

    return timeVisible && arrivalVisible && durationVisible && priceVisible;
  }

  // Error Checking
  async getErrorMessage(): Promise<string | null> {
    const error = this.page.locator(this.errorMessage).first();
    
    try {
      await error.waitFor({ state: 'visible', timeout: 3000 });
      return await error.textContent();
    } catch {
      return null;
    }
  }

  async hasNoResults(): Promise<boolean> {
    try {
      await this.page.locator(this.noResults).first().waitFor({ state: 'visible', timeout: 3000 });
      return true;
    } catch {
      return false;
    }
  }

  // Result Validation
  async validateFlightData(flight: any): Promise<{
    hasAllFields: boolean;
    errors: string[];
  }> {
    const errors: string[] = [];

    if (!flight.departureTime) {
      errors.push('Missing departure time');
    }
    if (!flight.arrivalTime) {
      errors.push('Missing arrival time');
    }
    if (!flight.duration) {
      errors.push('Missing duration');
    }
    if (!flight.price) {
      errors.push('Missing price');
    }

    // Validate format
    const timeRegex = /^\d{1,2}:\d{2}(?:\s*(?:AM|PM|am|pm))?$/;
    
    if (flight.departureTime && !timeRegex.test(flight.departureTime.trim())) {
      errors.push(`Invalid departure time format: ${flight.departureTime}`);
    }
    if (flight.arrivalTime && !timeRegex.test(flight.arrivalTime.trim())) {
      errors.push(`Invalid arrival time format: ${flight.arrivalTime}`);
    }

    // Validate price format (should contain digit and currency symbol)
    if (flight.price && !/[\d$€£¥]/.test(flight.price)) {
      errors.push(`Invalid price format: ${flight.price}`);
    }

    return {
      hasAllFields: errors.length === 0,
      errors,
    };
  }

  // Pricing Consistency
  async verifyPricingConsistency(): Promise<boolean> {
    const flights = await this.getAllFlightDetails();
    
    if (flights.length < 2) {
      return true; // Not enough flights to compare
    }

    // Check if all prices have same currency format
    const priceFormats = flights.map(f => f.price?.charAt(0)).filter(Boolean);
    const uniqueFormats = new Set(priceFormats);

    return uniqueFormats.size === 1;
  }
}
