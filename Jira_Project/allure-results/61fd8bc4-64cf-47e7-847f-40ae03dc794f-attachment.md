# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SCRUM-6\flight-search.spec.ts >> SCRUM-6: Flight Search - Air Canada >> TC006 - Input Validation: Same Departure and Destination
- Location: tests\SCRUM-6\flight-search.spec.ts:221:7

# Error details

```
Error: Failed to select trip type: One-way
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - generic:
      - generic:
        - list:
          - listitem:
            - link "Skip to book a flight":
              - /url: "javascript: void(0)"
          - listitem:
            - link "Skip to content":
              - /url: "javascript: void(0)"
          - listitem:
            - link "Skip to main navigation":
              - /url: "javascript: void(0)"
          - listitem:
            - link "Skip to footer links":
              - /url: "javascript: void(0)"
  - generic [ref=e5]:
    - banner [ref=e6]:
      - generic [ref=e9]:
        - link "Air Canada - Go to homepage" [ref=e11] [cursor=pointer]:
          - /url: /
          - img [ref=e13]
        - generic [ref=e27]:
          - search [ref=e30]:
            - generic [ref=e35] [cursor=pointer]:
              - generic [ref=e36]:
                - generic:
                  - generic:
                    - generic: Search
                - searchbox "Search" [ref=e38]
              - button "Search" [ref=e40]:
                - generic [ref=e41]: Search
                - img [ref=e43]
          - complementary "Site edition, language and currency selector" [ref=e47]:
            - button "Select your edition and language. You are currently on the Canada English edition. You will be billed in Canadian dollars" [ref=e49] [cursor=pointer]:
              - generic:
                - generic:
                  - generic:
                    - text: Select your edition and language. You are currently on the Canada English edition.
                    - generic: You will be billed in Canadian dollars - CA$
                  - generic:
                    - generic: English CA$
                    - generic:
                      - img
          - generic [ref=e52]:
            - link "Join Aeroplan" [ref=e54] [cursor=pointer]:
              - generic:
                - generic: Join Aeroplan
            - link "Sign in" [ref=e57] [cursor=pointer]:
              - generic:
                - generic: Sign in
    - navigation "Main navigation" [ref=e59]:
      - button "View less navigation section details" [expanded] [ref=e61] [cursor=pointer]:
        - img [ref=e63]
      - generic [ref=e69]:
        - generic [ref=e78]:
          - generic [ref=e79]:
            - link "Flights" [ref=e81] [cursor=pointer]:
              - /url: /home/ca/en/aco/flights
              - generic [ref=e82]:
                - img [ref=e85]
                - generic [ref=e87]: Flights
            - link "Packages" [ref=e89] [cursor=pointer]:
              - /url: /home/ca/en/aco/packages
              - generic [ref=e90]:
                - img [ref=e93]
                - generic [ref=e95]: Packages
            - link "Deals" [ref=e97] [cursor=pointer]:
              - /url: https://www.aircanada.com/en-ca/?acid=INT:ACT:specialoffer:spOffer:::home_side_nav|caen
              - generic [ref=e98]:
                - img [ref=e101]
                - generic [ref=e103]: Deals
          - generic [ref=e104]:
            - link "Trips" [ref=e108] [cursor=pointer]:
              - /url: /home/ca/en/aco/trips
              - generic [ref=e109]:
                - img [ref=e112]
                - generic [ref=e114]: Trips
            - link "Check-in" [ref=e116] [cursor=pointer]:
              - /url: /home/ca/en/aco/checkin
              - generic [ref=e117]:
                - img [ref=e120]
                - generic [ref=e122]: Check-in
            - link "Flight status" [ref=e124] [cursor=pointer]:
              - /url: /home/ca/en/aco/flight-status
              - generic [ref=e125]:
                - img [ref=e128]
                - generic [ref=e130]: Flight status
          - generic [ref=e131]:
            - link "Aeroplan" [ref=e135] [cursor=pointer]:
              - /url: /aeroplan/member/dashboard?lang=en-CA
              - generic [ref=e136]:
                - img [ref=e139]
                - generic [ref=e141]: Aeroplan
            - link "Aeroplan offers" [ref=e143] [cursor=pointer]:
              - /url: /aeroplan/member/dashboard/myoffers?lang=en-CA
              - generic [ref=e144]:
                - img [ref=e147]
                - generic [ref=e149]: Aeroplan offers
            - link "eStore. This link opens in a new tab." [ref=e151] [cursor=pointer]:
              - /url: https://aeroplan.rewardops.com/en-CA/home/for-you
              - generic [ref=e156]: eStore
          - generic [ref=e159]:
            - link "Hotels" [ref=e163] [cursor=pointer]:
              - /url: /home/ca/en/aco/hotels
              - generic [ref=e164]:
                - img [ref=e167]
                - generic [ref=e169]: Hotels
            - link "Cars" [ref=e171] [cursor=pointer]:
              - /url: /home/ca/en/aco/cars
              - generic [ref=e172]:
                - img [ref=e175]
                - generic [ref=e177]: Cars
            - link "Flight Passes" [ref=e179] [cursor=pointer]:
              - /url: /home/ca/en/aco/flight-pass
              - generic [ref=e180]:
                - img [ref=e183]
                - generic [ref=e185]: Flight Passes
          - link "More" [ref=e190]:
            - generic [ref=e191]:
              - img [ref=e194]
              - generic [ref=e196]: More
        - link "Accessibility services" [ref=e203] [cursor=pointer]:
          - /url: https://www.aircanada.com/ca/en/aco/home/plan/accessibility.html
          - img [ref=e205]
          - strong [ref=e207]: Accessibility services
  - generic [ref=e210]:
    - main [ref=e211]:
      - generic [ref=e218]:
        - generic [ref=e223]:
          - heading "Where can we take you?" [level=1] [ref=e225]
          - generic [ref=e227]:
            - generic [ref=e228]:
              - generic [ref=e230]:
                - button "Choose trip type - currently selected - Round-trip" [active] [ref=e232] [cursor=pointer]:
                  - generic:
                    - generic:
                      - generic:
                        - strong: Round-trip
                        - generic:
                          - img
                - dialog "Calendar modal open with today's date selected." [ref=e236]:
                  - generic [ref=e238]:
                    - generic [ref=e239]:
                      - heading "Trip type" [level=1]:
                        - generic [ref=e240]: Trip type
                    - generic [ref=e242]:
                      - group [ref=e243]:
                        - radiogroup [ref=e246]:
                          - generic [ref=e249]:
                            - radio "Round-trip" [checked] [ref=e250] [cursor=pointer]
                            - generic: Round-trip
                          - generic [ref=e253]:
                            - radio "One-way" [ref=e254] [cursor=pointer]
                            - generic: One-way
                          - generic [ref=e257]:
                            - radio "Multi-city" [ref=e258] [cursor=pointer]
                            - generic: Multi-city
                      - button "Close" [ref=e261] [cursor=pointer]:
                        - generic [ref=e262]: Close
              - generic [ref=e263]:
                - button "Passengers - currently selected - 1 Adult" [ref=e266] [cursor=pointer]:
                  - generic:
                    - generic:
                      - generic:
                        - strong: 1 Adult
                        - generic:
                          - img
                - paragraph [ref=e268]
              - generic [ref=e274]:
                - checkbox "Book with Aeroplan points" [ref=e275] [cursor=pointer]
                - generic [ref=e277] [cursor=pointer]:
                  - img [ref=e279]
                  - strong [ref=e280]: Book with Aeroplan points
            - generic [ref=e283]:
              - generic [ref=e286]:
                - button "Departing from - MAA - Chennai (Madras)" [ref=e289] [cursor=pointer]:
                  - generic [ref=e290]:
                    - paragraph [ref=e291]: MAA
                    - paragraph [ref=e292]: Chennai (Madras)
                - button "Swap origin and destination" [ref=e294] [cursor=pointer]:
                  - img [ref=e296]: s
                - button "Arriving in" [ref=e303] [cursor=pointer]:
                  - generic [ref=e304]:
                    - img [ref=e306]
                    - paragraph [ref=e308]: Arriving in
              - generic [ref=e309]:
                - generic [ref=e311]:
                  - button "Show calendar" [ref=e312] [cursor=pointer]:
                    - img [ref=e314]
                  - generic [ref=e321]:
                    - generic:
                      - generic:
                        - generic: Departure date
                    - combobox "Departure date" [ref=e323]
                  - generic [ref=e329]:
                    - generic:
                      - generic:
                        - generic: Return date
                    - combobox "Return date" [ref=e331]
                - generic:
                  - generic:
                    - definition
                - generic [ref=e332]: "Enter the date, day and month in this format: DD/MM, or press the down arrow key button to open the calendar and select your date from there."
              - generic [ref=e336]:
                - generic [ref=e338]:
                  - generic [ref=e339]:
                    - generic:
                      - generic:
                        - img
                  - generic [ref=e340]:
                    - generic:
                      - generic:
                        - generic: Promotion code
                    - textbox "Promotion code" [ref=e342]:
                      - /placeholder: ""
                - generic:
                  - definition
              - button "Search" [ref=e346] [cursor=pointer]:
                - generic [ref=e347]: Search
            - banner "You're visiting the Canada edition of our website. Based on your location, we recommend using our India edition" [ref=e354]:
              - paragraph [ref=e355]:
                - text: You're visiting the
                - strong [ref=e356]: Canada
                - text: edition of our website. Based on your location, we recommend using our
                - link "India edition" [ref=e357] [cursor=pointer]:
                  - /url: /home/in/en/aco/flights
              - img [ref=e359]
            - region
        - generic [ref=e362]:
          - generic [ref=e365]:
            - heading "Featured flight offers" [level=2] [ref=e366]
            - generic [ref=e370]:
              - heading "Your out-of-office starts here" [level=2] [ref=e371]
              - paragraph [ref=e373]: Save 25% on select base fares worldwide for travel by February 28, 2027. Book by June 8.
              - link "Book now" [ref=e375] [cursor=pointer]:
                - /url: https://www.aircanada.com/en-ca/?acid=INT:ACO:25NtpJune2-8:PRJAC40000146:URL4720:salesbanner#worldwide-CVJU4VK1-modal
                - generic [ref=e376]: Book now
          - generic [ref=e380]:
            - img "3d globe image" [ref=e382]
            - generic [ref=e383]:
              - paragraph [ref=e384]: A WORLD OF DEALS
              - heading "Still searching for that special somewhere? We’ll get you there." [level=2] [ref=e385]
              - link "See offers" [ref=e387] [cursor=pointer]:
                - /url: https://www.aircanada.com/en-ca/?acid=INT:ACO:AEJanFlame2026:PRJNE4077:URL4129:homepageaebanner#aeoffer-modal
                - generic [ref=e388]: See offers
              - generic [ref=e392]:
                - figure "destinations" [ref=e394]:
                  - paragraph [ref=e395]: "36"
                  - generic [ref=e396]: destinations
                - figure "daily flights" [ref=e398]:
                  - paragraph [ref=e399]: "200"
                  - generic [ref=e400]: daily flights
                - figure "continents" [ref=e402]:
                  - paragraph [ref=e403]: "1"
                  - generic [ref=e404]: continents
          - generic [ref=e408]:
            - heading "New to Air Canada" [level=2] [ref=e409]
            - list [ref=e413]:
              - listitem [ref=e414]:
                - generic [ref=e417]:
                  - heading "Welcome back to our Montréal Maple Leaf Lounge" [level=3] [ref=e418]
                  - paragraph [ref=e419]: Refreshed, reopened and ready to welcome you in the domestic terminal.
                  - link "Learn more. This link opens in a new tab." [ref=e421] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/fly/premium-services/maple-leaf-lounges/maple-leaf-lounge-details.html?acid=INT:EVE:POSCAYULDOMMLL:PRJAER40000208:URL4513::ACapp#/!lounge@montreal
                    - generic [ref=e422]: Learn more
                    - img [ref=e425]
              - listitem [ref=e427]:
                - generic [ref=e430]:
                  - heading "More choice and support for mobility needs" [level=3] [ref=e431]
                  - paragraph [ref=e432]: New equipment options for a smoother, more comfortable journey.
                  - link "Learn more. This link opens in a new tab." [ref=e434] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/plan/accessibility/mobility-aids-and-assistance.html?acid=INT:ACO:accessibilitycampaign2026:prjac40000141:url4699:newacomobilityen
                    - generic [ref=e435]: Learn more
                    - img [ref=e438]
              - listitem [ref=e440]:
                - generic [ref=e443]:
                  - heading "Supporting your journey with a service dog" [level=3] [ref=e444]
                  - paragraph [ref=e445]: A new program offering a certification option for owner-trained service dogs.
                  - link "Learn more. This link opens in a new tab." [ref=e447] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/plan/accessibility/service-emotional-support-dogs.html.html?acid=INT:ACO:accessibilitycampaign2026:prjac40000141:url4699:newacoservicedogen#cabin-ready
                    - generic [ref=e448]: Learn more
                    - img [ref=e451]
          - generic [ref=e454]:
            - heading "Travel news and updates" [level=2] [ref=e455]
            - generic [ref=e456]:
              - generic [ref=e457]:
                - img "Travel news and updates" [ref=e459]
                - generic [ref=e460]:
                  - heading "Review travel requirements for your trip" [level=3] [ref=e461]
                  - paragraph [ref=e462]: Review the latest travel requirements and find answers to your frequently asked questions.
                  - separator [ref=e463]
                  - link "Visit Travel Ready hub. Opens in a new tab" [ref=e465] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/plan/travel-requirements/travel-ready-hub.html
                    - generic:
                      - generic:
                        - text: Visit Travel Ready hub
                        - generic:
                          - generic:
                            - img
              - list [ref=e467]:
                - listitem [ref=e468]:
                  - link "Military situation in the Middle East. Opens in a new tab" [ref=e470] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/2026/middle-east-travel.html
                    - generic:
                      - generic:
                        - text: Military situation in the Middle East
                        - generic:
                          - generic:
                            - img
                - listitem [ref=e471]:
                  - link "Baggage fee changes. Opens in a new tab" [ref=e473] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/baggage-fee-changes.html
                    - generic:
                      - generic:
                        - text: Baggage fee changes
                        - generic:
                          - generic:
                            - img
                - listitem [ref=e474]:
                  - link "EU Entry/Exit System – expect delays at European airports. Opens in a new tab" [ref=e476] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/2025/eu-introduces-entry-exit-system.html
                    - generic:
                      - generic:
                        - text: EU Entry/Exit System – expect delays at European airports
                        - generic:
                          - generic:
                            - img
                - listitem [ref=e477]:
                  - link "Travelling through Montréal?. Opens in a new tab" [ref=e479] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/2026/travelling-through-montreal.html
                    - generic:
                      - generic:
                        - text: Travelling through Montréal?
                        - generic:
                          - generic:
                            - img
                - listitem [ref=e480]:
                  - link "Travel to or from Cuba. Opens in a new tab" [ref=e482] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco//home/book/travel-news-and-updates/2026/travel-to-from-cuba.html
                    - generic:
                      - generic:
                        - text: Travel to or from Cuba
                        - generic:
                          - generic:
                            - img
                - listitem [ref=e483]:
                  - link "More news. Opens in a new tab" [ref=e485] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates.html
                    - generic:
                      - generic:
                        - text: More news
                        - generic:
                          - generic:
                            - img
    - contentinfo [ref=e487]:
      - generic [ref=e489]:
        - link "Air Canada - Go to homepage" [ref=e491] [cursor=pointer]:
          - /url: /home/ca/en/aco/flights
          - img "Air Canada" [ref=e493]
        - generic:
          - link "A Star Alliance member Opens in a new tab":
            - /url: https://www.staralliance.com/en/home
            - img "A Star Alliance member Opens in a new tab"
      - generic [ref=e508]:
        - generic [ref=e509]:
          - heading "Support" [level=3] [ref=e511]
          - link "Help and contact. This link opens in a new tab." [ref=e513] [cursor=pointer]:
            - /url: /ca/en/aco/home/fly/customer-support/contact-us.html
            - text: Help And Contact
          - link "Baggage & optional service fees. This link opens in a new tab." [ref=e515] [cursor=pointer]:
            - /url: https://www.aircanada.com/ca/en/aco/home/legal/products-and-services.html
            - text: Baggage & Optional Service Fees
          - link "Customer service plan. This link opens in a new tab." [ref=e517] [cursor=pointer]:
            - /url: /ca/en/aco/home/legal/air-canada-customer-service-plan.html
            - text: Customer Service Plan
          - link "The Air Canada Cybersecurity Centre. This link opens in a new tab." [ref=e519] [cursor=pointer]:
            - /url: /ca/en/aco/home/book/travel-news-and-updates/telephone-and-email-scams.html
            - text: The Air Canada Cybersecurity Centre
        - generic [ref=e520]:
          - heading "Air Canada" [level=3] [ref=e522]
          - link "Media centre. This link opens in a new tab." [ref=e524] [cursor=pointer]:
            - /url: https://www.aircanada.com/ca/en/aco/home/about/media.html
            - text: Media Centre
          - link "Official languages. This link opens in a new tab." [ref=e526] [cursor=pointer]:
            - /url: https://www.aircanada.com/ca/en/aco/home/about/official-languages.html#/
            - text: Official Languages
          - link "Leave Less. This link opens in a new tab." [ref=e528] [cursor=pointer]:
            - /url: https://leaveless.aircanada.com/ca/en/index.html
            - text: Leave Less
          - link "Our stories. This link opens in a new tab." [ref=e530] [cursor=pointer]:
            - /url: /ca/en/aco/home/video-hub.html
            - text: Our Stories
          - link "Investor relations. This link opens in a new tab." [ref=e532] [cursor=pointer]:
            - /url: https://www.aircanada.com/ca/en/aco/home/about/investor-relations.html
            - text: Investor Relations
          - link "Careers. This link opens in a new tab." [ref=e534] [cursor=pointer]:
            - /url: https://www.aircanada.com/ca/en/aco/home/about/careers.html
            - text: Careers
          - link "Modern slavery report. This link opens in a new tab." [ref=e536] [cursor=pointer]:
            - /url: https://content.presspage.com/uploads/3174/2b516d6a-25c7-40c1-a648-cc3c84a7712c/2025-modernslavery-report-en-final.pdf?10000
            - text: Modern Slavery Report
          - link "Diversity, Equity and Inclusion. This link opens in a new tab." [ref=e538] [cursor=pointer]:
            - /url: https://www.aircanada.com/ca/en/aco/home/about/diversity-equity-inclusion.html
            - text: Diversity, Equity And Inclusion
        - generic [ref=e539]:
          - heading "Other services" [level=3] [ref=e541]
          - link "Air Canada for Business. This link opens in a new tab." [ref=e543] [cursor=pointer]:
            - /url: /ca/en/aco/home/book/business-travel.html
            - text: Air Canada For Business
          - link "Air Canada for travel agents. This link opens in a new tab." [ref=e545] [cursor=pointer]:
            - /url: https://acconnex.aircanada.com/home/login
            - text: Air Canada For Travel Agents
          - link "Air Canada Cargo. This link opens in a new tab." [ref=e547] [cursor=pointer]:
            - /url: http://www.aircanada.com/cargo/en/
            - text: Air Canada Cargo
          - link "Air Canada Foundation. This link opens in a new tab." [ref=e549] [cursor=pointer]:
            - /url: https://www.aircanada.com/en/about/community/foundation/index.html
            - text: Air Canada Foundation
        - generic [ref=e550]:
          - heading "Our awards" [level=3] [ref=e552]
          - generic [ref=e556]:
            - img "Skytrax" [ref=e557]
            - generic [ref=e558]: Best Airline in North America
      - generic [ref=e560]:
        - generic [ref=e562]: © 2026 Air Canada
        - generic [ref=e564]:
          - link "Terms of use. This link opens in a new tab." [ref=e566] [cursor=pointer]:
            - /url: https://www.aircanada.com/ca/en/aco/home/legal/terms-of-use.html
            - text: "| Terms of use"
          - link "Privacy policy. This link opens in a new tab." [ref=e568] [cursor=pointer]:
            - /url: https://www.aircanada.com/ca/en/aco/home/legal/privacy-policy.html
            - text: "| Privacy policy"
          - link "General Conditions of Carriage & Tariffs. This link opens in a new tab." [ref=e570] [cursor=pointer]:
            - /url: https://www.aircanada.com/ca/en/aco/home/legal/conditions-carriage-tariffs.html
            - text: "| General Conditions of Carriage & Tariffs"
          - link "Cookie and tracking technologies policy. This link opens in a new tab." [ref=e572] [cursor=pointer]:
            - /url: https://www.aircanada.com/ca/en/aco/home/legal/cookie-policy.html
            - text: Cookie and tracking technologies policy
        - generic [ref=e575]:
          - link "Facebook. This link opens in a new tab." [ref=e576] [cursor=pointer]:
            - /url: https://www.facebook.com/aircanada?src=footer
            - img [ref=e578]
          - link "Visit our X page. This link opens in a new tab." [ref=e580] [cursor=pointer]:
            - /url: https://twitter.com/aircanada?src=footer
            - img [ref=e582]
          - link "Subscribe to our YouTube channel. This link opens in a new tab." [ref=e584] [cursor=pointer]:
            - /url: https://www.youtube.com/user/aircanada?src=footer
            - img [ref=e586]
```

# Test source

```ts
  9   |   readonly roundTripOption = '[data-testid="round-trip"], text=Round-trip, [value="roundTrip"]';
  10  |   readonly departureAirportInput = '[data-testid="departure-airport"], [placeholder*="departure"], [placeholder*="From"], input[name="departureAirport"]';
  11  |   readonly destinationAirportInput = '[data-testid="destination-airport"], [placeholder*="destination"], [placeholder*="To"], input[name="destinationAirport"]';
  12  |   readonly departureDate = '[data-testid="departure-date"], [placeholder*="departure date"], input[name="departureDate"]';
  13  |   readonly returnDate = '[data-testid="return-date"], [placeholder*="return date"], input[name="returnDate"]';
  14  |   readonly passengerCountSelector = '[data-testid="passenger-count"], [aria-label*="passenger"], select[name="passengers"]';
  15  |   readonly searchButton = '[data-testid="search-button"], button:has-text("Search"), button:has-text("Find flights")';
  16  |   readonly autocompleteSuggestions = '[data-testid="autocomplete-suggestions"], .autocomplete-list, ul[role="listbox"]';
  17  |   readonly suggestionItem = '[data-testid^="suggestion"], .suggestion-item';
  18  |   readonly calendarPicker = '.calendar, [role="dialog"]';
  19  |   readonly dateInput = 'input[type="date"]';
  20  | 
  21  |   constructor(page: Page) {
  22  |     this.page = page;
  23  |   }
  24  | 
  25  |   // Navigation
  26  |   async goto() {
  27  |     await this.page.goto('https://www.aircanada.com/home/ca/en/aco/flights', {
  28  |       waitUntil: 'domcontentloaded',
  29  |       timeout: 60000,
  30  |     });
  31  |     await this.page.waitForLoadState('domcontentloaded', { timeout: 60000 });
  32  | 
  33  |     const acceptButton = this.page.locator('button:has-text("Accept"), button:has-text("I agree"), button:has-text("Allow all cookies"), button:has-text("Got it")').first();
  34  |     if (await acceptButton.isVisible().catch(() => false)) {
  35  |       await acceptButton.click().catch(() => {});
  36  |     }
  37  |   }
  38  | 
  39  |   async pageLoaded() {
  40  |     const searchForm = this.page.locator(
  41  |       'form, [role="search"], .flight-search-form, input[name*="departure"], input[placeholder*="From"], input[placeholder*="Where"]'
  42  |     ).first();
  43  |     await searchForm.waitFor({ state: 'visible', timeout: 30000 });
  44  |     return true;
  45  |   }
  46  | 
  47  |   // Trip Type Selection
  48  |   async selectTripType(tripType: 'One-way' | 'Round-trip' | 'Multi-city') {
  49  |     try {
  50  |       // Preferred: select element (if present)
  51  |       const selectEl = this.page.locator('select[name="tripType"]').first();
  52  |       const optVal = tripType === 'One-way' ? 'oneWay' : tripType === 'Round-trip' ? 'roundTrip' : undefined;
  53  | 
  54  |       if (await selectEl.isVisible().catch(() => false)) {
  55  |         if (optVal) {
  56  |           try {
  57  |             await selectEl.selectOption(optVal);
  58  |             await this.page.waitForTimeout(300);
  59  |             return;
  60  |           } catch {}
  61  |         }
  62  |       }
  63  | 
  64  |       // Try to open any visible trip-type toggle (site uses a custom button)
  65  |       const toggleBtn = this.page.locator('button:has-text("Choose trip type"), button:has-text("Trip type"), button:has-text("Choose trip"), [aria-label*="trip"]').first();
  66  |       if (await toggleBtn.isVisible().catch(() => false)) {
  67  |         await toggleBtn.click().catch(() => {});
  68  |         await this.page.waitForTimeout(300);
  69  | 
  70  |         // Try regex-based text match (handles "One-way" / "One way" variations)
  71  |         const regex = tripType === 'One-way' ? 'text=/One[- ]?way/i' : tripType === 'Round-trip' ? 'text=/Round[- ]?trip/i' : `text=${tripType}`;
  72  |         const candidate = this.page.locator(regex).first();
  73  |         if (await candidate.isVisible().catch(() => false)) {
  74  |           await candidate.click().catch(() => {});
  75  |           await this.page.waitForTimeout(300);
  76  |           return;
  77  |         }
  78  |       }
  79  | 
  80  |       // Try radio inputs or buttons with known values
  81  |       if (optVal) {
  82  |         const radio = this.page.locator(`input[type="radio"][value="${optVal}"]`).first();
  83  |         if (await radio.isVisible().catch(() => false)) {
  84  |           await radio.click().catch(() => {});
  85  |           await this.page.waitForTimeout(300);
  86  |           return;
  87  |         }
  88  |       }
  89  | 
  90  |       // Generic fallback: click any visible element that contains the tripType text
  91  |       const fallback = this.page.locator(`text=${tripType}`).first();
  92  |       if (await fallback.isVisible().catch(() => false)) {
  93  |         await fallback.click().catch(() => {});
  94  |         await this.page.waitForTimeout(300);
  95  |         return;
  96  |       }
  97  | 
  98  |       // As last resort, try partial matches
  99  |       const partial = tripType === 'One-way' ? this.page.locator('text=/One/i').first() : this.page.locator('text=/Round|Round/i').first();
  100 |       if (await partial.isVisible().catch(() => false)) {
  101 |         await partial.click().catch(() => {});
  102 |         await this.page.waitForTimeout(300);
  103 |         return;
  104 |       }
  105 | 
  106 |       throw new Error(`Could not find UI to select trip type: ${tripType}`);
  107 |     } catch (e) {
  108 |       console.log(`Could not select trip type using standard methods: ${e}`);
> 109 |       throw new Error(`Failed to select trip type: ${tripType}`);
      |             ^ Error: Failed to select trip type: One-way
  110 |     }
  111 |   }
  112 | 
  113 |   // Airport Selection
  114 |   async selectDepartureAirport(airport: string, airportCode: string) {
  115 |     const input = this.page.locator(this.departureAirportInput).first();
  116 |     await input.click();
  117 |     await input.fill(airport);
  118 |     
  119 |     // Wait for autocomplete suggestions
  120 |     await this.page.waitForTimeout(300);
  121 |     
  122 |     // Look for suggestion containing the airport code
  123 |     const suggestion = this.page.locator(`text=${airportCode}`).first();
  124 |     
  125 |     try {
  126 |       await suggestion.waitFor({ state: 'visible', timeout: 5000 });
  127 |       await suggestion.click();
  128 |     } catch {
  129 |       // If autocomplete didn't appear, try direct input
  130 |       await input.clear();
  131 |       await input.fill(`${airport} (${airportCode})`);
  132 |     }
  133 |   }
  134 | 
  135 |   async selectDestinationAirport(airport: string, airportCode: string) {
  136 |     const input = this.page.locator(this.destinationAirportInput).first();
  137 |     await input.click();
  138 |     await input.fill(airport);
  139 |     
  140 |     // Wait for autocomplete suggestions
  141 |     await this.page.waitForTimeout(300);
  142 |     
  143 |     // Look for suggestion containing the airport code
  144 |     const suggestion = this.page.locator(`text=${airportCode}`).first();
  145 |     
  146 |     try {
  147 |       await suggestion.waitFor({ state: 'visible', timeout: 5000 });
  148 |       await suggestion.click();
  149 |     } catch {
  150 |       // If autocomplete didn't appear, try direct input
  151 |       await input.clear();
  152 |       await input.fill(`${airport} (${airportCode})`);
  153 |     }
  154 |   }
  155 | 
  156 |   // Date Selection
  157 |   async selectDepartureDate(daysFromNow: number = 7) {
  158 |     const input = this.page.locator(this.departureDate).first();
  159 |     
  160 |     // Calculate the date
  161 |     const date = new Date();
  162 |     date.setDate(date.getDate() + daysFromNow);
  163 |     const formattedDate = date.toISOString().split('T')[0];
  164 |     
  165 |     await input.click();
  166 |     
  167 |     // Try HTML5 date input
  168 |     try {
  169 |       await input.fill(formattedDate);
  170 |     } catch {
  171 |       // Try clicking calendar picker
  172 |       const datePicker = this.page.locator(this.calendarPicker).first();
  173 |       if (await datePicker.isVisible()) {
  174 |         const dateButton = datePicker.locator(`button:has-text("${date.getDate()}")`).first();
  175 |         await dateButton.click();
  176 |       }
  177 |     }
  178 |   }
  179 | 
  180 |   async selectReturnDate(daysFromNow: number = 10) {
  181 |     const input = this.page.locator(this.returnDate).first();
  182 |     
  183 |     // Calculate the date
  184 |     const date = new Date();
  185 |     date.setDate(date.getDate() + daysFromNow);
  186 |     const formattedDate = date.toISOString().split('T')[0];
  187 |     
  188 |     await input.click();
  189 |     
  190 |     try {
  191 |       await input.fill(formattedDate);
  192 |     } catch {
  193 |       const datePicker = this.page.locator(this.calendarPicker).first();
  194 |       if (await datePicker.isVisible()) {
  195 |         const dateButton = datePicker.locator(`button:has-text("${date.getDate()}")`).first();
  196 |         await dateButton.click();
  197 |       }
  198 |     }
  199 |   }
  200 | 
  201 |   // Passenger Selection
  202 |   async selectPassengerCount(count: number = 1) {
  203 |     const selector = this.page.locator(this.passengerCountSelector).first();
  204 |     
  205 |     if (await selector.isVisible()) {
  206 |       await selector.click();
  207 |       await this.page.locator(`text=${count}`).first().click();
  208 |     }
  209 |   }
```