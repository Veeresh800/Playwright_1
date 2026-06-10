# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SCRUM-6\flight-search.spec.ts >> SCRUM-6: Flight Search - Air Canada >> TC007 - UI Element Visibility and Accessibility
- Location: tests\SCRUM-6\flight-search.spec.ts:253:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
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
        - link "Air Canada - Go to homepage" [ref=e11]:
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
            - button [ref=e49] [cursor=pointer]
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
        - generic [ref=e77]:
          - generic [ref=e78]:
            - link "Flights" [ref=e80]:
              - /url: /home/ca/en/aco/flights
              - generic [ref=e81]:
                - img [ref=e84]
                - generic [ref=e86]: Flights
            - link "Packages" [ref=e88]:
              - /url: /home/ca/en/aco/packages
              - generic [ref=e89]:
                - img [ref=e92]
                - generic [ref=e94]: Packages
            - link "Deals" [ref=e96]:
              - /url: https://www.aircanada.com/en-ca/?acid=INT:ACT:specialoffer:spOffer:::home_side_nav|caen
              - generic [ref=e97]:
                - img [ref=e100]
                - generic [ref=e102]: Deals
          - generic [ref=e103]:
            - link "Trips" [ref=e107]:
              - /url: /home/ca/en/aco/trips
              - generic [ref=e108]:
                - img [ref=e111]
                - generic [ref=e113]: Trips
            - link "Check-in" [ref=e115]:
              - /url: /home/ca/en/aco/checkin
              - generic [ref=e116]:
                - img [ref=e119]
                - generic [ref=e121]: Check-in
            - link "Flight status" [ref=e123]:
              - /url: /home/ca/en/aco/flight-status
              - generic [ref=e124]:
                - img [ref=e127]
                - generic [ref=e129]: Flight status
          - generic [ref=e130]:
            - link "Aeroplan" [ref=e134]:
              - /url: /aeroplan/member/dashboard?lang=en-CA
              - generic [ref=e135]:
                - img [ref=e138]
                - generic [ref=e140]: Aeroplan
            - link "Aeroplan offers" [ref=e142]:
              - /url: /aeroplan/member/dashboard/myoffers?lang=en-CA
              - generic [ref=e143]:
                - img [ref=e146]
                - generic [ref=e148]: Aeroplan offers
            - link "eStore. This link opens in a new tab." [ref=e150]:
              - /url: https://aeroplan.rewardops.com/en-CA/home/for-you
              - generic [ref=e155]: eStore
          - generic [ref=e158]:
            - link "Hotels" [ref=e162]:
              - /url: /home/ca/en/aco/hotels
              - generic [ref=e163]:
                - img [ref=e166]
                - generic [ref=e168]: Hotels
            - link "Cars" [ref=e170]:
              - /url: /home/ca/en/aco/cars
              - generic [ref=e171]:
                - img [ref=e174]
                - generic [ref=e176]: Cars
            - link "Flight Passes" [ref=e178]:
              - /url: /home/ca/en/aco/flight-pass
              - generic [ref=e179]:
                - img [ref=e182]
                - generic [ref=e184]: Flight Passes
          - link "More" [ref=e189]:
            - generic [ref=e190]:
              - img [ref=e193]
              - generic [ref=e195]: More
        - link "Accessibility services" [ref=e198]:
          - /url: https://www.aircanada.com/ca/en/aco/home/plan/accessibility.html
          - img [ref=e200]
          - strong [ref=e202]: Accessibility services
  - generic [ref=e205]:
    - main [ref=e206]:
      - generic [ref=e213]:
        - generic [ref=e218]:
          - heading "Where can we take you?" [level=1] [ref=e220]
          - generic [ref=e222]:
            - generic [ref=e223]:
              - button "Choose trip type - currently selected - Round-trip" [ref=e227] [cursor=pointer]:
                - generic:
                  - generic:
                    - generic:
                      - strong: Round-trip
                      - generic:
                        - img
              - generic [ref=e229]:
                - button "Passengers - currently selected - 1 Adult" [ref=e232] [cursor=pointer]:
                  - generic:
                    - generic:
                      - generic:
                        - strong: 1 Adult
                        - generic:
                          - img
                - paragraph [ref=e234]
              - generic [ref=e240]:
                - checkbox "Book with Aeroplan points" [ref=e241] [cursor=pointer]
                - generic [ref=e243] [cursor=pointer]:
                  - img [ref=e245]
                  - strong [ref=e246]: Book with Aeroplan points
            - generic [ref=e249]:
              - generic [ref=e252]:
                - button "Departing from" [ref=e255] [cursor=pointer]:
                  - generic [ref=e256]:
                    - img [ref=e258]
                    - paragraph [ref=e260]: Departing from
                - button "Swap origin and destination" [ref=e262] [cursor=pointer]:
                  - img [ref=e264]: s
                - button "Arriving in" [ref=e271] [cursor=pointer]:
                  - generic [ref=e272]:
                    - img [ref=e274]
                    - paragraph [ref=e276]: Arriving in
              - generic [ref=e277]:
                - generic [ref=e279]:
                  - button "Show calendar" [ref=e280] [cursor=pointer]:
                    - img [ref=e282]
                  - generic [ref=e289]:
                    - generic:
                      - generic:
                        - generic: Departure date
                    - combobox "Departure date" [ref=e291]
                  - generic [ref=e297]:
                    - generic:
                      - generic:
                        - generic: Return date
                    - combobox "Return date" [ref=e299]
                - generic:
                  - generic:
                    - definition
                - generic [ref=e300]: "Enter the date, day and month in this format: DD/MM, or press the down arrow key button to open the calendar and select your date from there."
              - generic [ref=e304]:
                - generic [ref=e306]:
                  - generic [ref=e307]:
                    - generic:
                      - generic:
                        - img
                  - generic [ref=e308]:
                    - generic:
                      - generic:
                        - generic: Promotion code
                    - textbox "Promotion code" [ref=e310]:
                      - /placeholder: ""
                - generic:
                  - definition
              - button "Search" [ref=e314] [cursor=pointer]:
                - generic [ref=e315]: Search
            - banner "You're visiting the Canada edition of our website. Based on your location, we recommend using our India edition" [ref=e322]:
              - paragraph [ref=e323]:
                - text: You're visiting the
                - strong [ref=e324]: Canada
                - text: edition of our website. Based on your location, we recommend using our
                - link "India edition" [ref=e325]:
                  - /url: /home/in/en/aco/flights
              - img [ref=e327]
            - region
        - generic [ref=e330]:
          - generic [ref=e333]:
            - heading "Featured flight offers" [level=2] [ref=e334]
            - generic [ref=e338]:
              - heading "Your out-of-office starts here" [level=2] [ref=e339]
              - paragraph [ref=e341]: Save 25% on select base fares worldwide for travel by February 28, 2027. Book by June 8.
              - link "Book now" [ref=e343] [cursor=pointer]:
                - /url: https://www.aircanada.com/en-ca/?acid=INT:ACO:25NtpJune2-8:PRJAC40000146:URL4720:salesbanner#worldwide-CVJU4VK1-modal
                - generic [ref=e344]: Book now
          - generic [ref=e348]:
            - img "3d globe image" [ref=e350]
            - generic [ref=e351]:
              - paragraph [ref=e352]: A WORLD OF DEALS
              - heading "Still searching for that special somewhere? We’ll get you there." [level=2] [ref=e353]
              - link "See offers" [ref=e355] [cursor=pointer]:
                - /url: https://www.aircanada.com/en-ca/?acid=INT:ACO:AEJanFlame2026:PRJNE4077:URL4129:homepageaebanner#aeoffer-modal
                - generic [ref=e356]: See offers
              - generic [ref=e360]:
                - figure "destinations" [ref=e362]:
                  - paragraph [ref=e363]: "18"
                  - generic [ref=e364]: destinations
                - figure "daily flights" [ref=e366]:
                  - paragraph [ref=e367]: "100"
                  - generic [ref=e368]: daily flights
                - figure "continents" [ref=e370]:
                  - paragraph [ref=e371]: "1"
                  - generic [ref=e372]: continents
          - generic [ref=e376]:
            - heading "New to Air Canada" [level=2] [ref=e377]
            - list [ref=e381]:
              - listitem [ref=e382]:
                - generic [ref=e385]:
                  - heading "Welcome back to our Montréal Maple Leaf Lounge" [level=3] [ref=e386]
                  - paragraph [ref=e387]: Refreshed, reopened and ready to welcome you in the domestic terminal.
                  - link "Learn more. This link opens in a new tab." [ref=e389] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/fly/premium-services/maple-leaf-lounges/maple-leaf-lounge-details.html?acid=INT:EVE:POSCAYULDOMMLL:PRJAER40000208:URL4513::ACapp#/!lounge@montreal
                    - generic [ref=e390]: Learn more
                    - img [ref=e393]
              - listitem [ref=e395]:
                - generic [ref=e398]:
                  - heading "More choice and support for mobility needs" [level=3] [ref=e399]
                  - paragraph [ref=e400]: New equipment options for a smoother, more comfortable journey.
                  - link "Learn more. This link opens in a new tab." [ref=e402] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/plan/accessibility/mobility-aids-and-assistance.html?acid=INT:ACO:accessibilitycampaign2026:prjac40000141:url4699:newacomobilityen
                    - generic [ref=e403]: Learn more
                    - img [ref=e406]
              - listitem [ref=e408]:
                - generic [ref=e411]:
                  - heading "Supporting your journey with a service dog" [level=3] [ref=e412]
                  - paragraph [ref=e413]: A new program offering a certification option for owner-trained service dogs.
                  - link "Learn more. This link opens in a new tab." [ref=e415] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/plan/accessibility/service-emotional-support-dogs.html.html?acid=INT:ACO:accessibilitycampaign2026:prjac40000141:url4699:newacoservicedogen#cabin-ready
                    - generic [ref=e416]: Learn more
                    - img [ref=e419]
          - generic [ref=e422]:
            - heading "Travel news and updates" [level=2] [ref=e423]
            - generic [ref=e424]:
              - generic [ref=e425]:
                - img "Travel news and updates" [ref=e427]
                - generic [ref=e428]:
                  - heading "Review travel requirements for your trip" [level=3] [ref=e429]
                  - paragraph [ref=e430]: Review the latest travel requirements and find answers to your frequently asked questions.
                  - separator [ref=e431]
                  - link "Visit Travel Ready hub. Opens in a new tab" [ref=e433] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/plan/travel-requirements/travel-ready-hub.html
                    - generic:
                      - generic:
                        - text: Visit Travel Ready hub
                        - generic:
                          - generic:
                            - img
              - list [ref=e435]:
                - listitem [ref=e436]:
                  - link "Military situation in the Middle East. Opens in a new tab" [ref=e438] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/2026/middle-east-travel.html
                    - generic:
                      - generic:
                        - text: Military situation in the Middle East
                        - generic:
                          - generic:
                            - img
                - listitem [ref=e439]:
                  - link "Baggage fee changes. Opens in a new tab" [ref=e441] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/baggage-fee-changes.html
                    - generic:
                      - generic:
                        - text: Baggage fee changes
                        - generic:
                          - generic:
                            - img
                - listitem [ref=e442]:
                  - link "EU Entry/Exit System – expect delays at European airports. Opens in a new tab" [ref=e444] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/2025/eu-introduces-entry-exit-system.html
                    - generic:
                      - generic:
                        - text: EU Entry/Exit System – expect delays at European airports
                        - generic:
                          - generic:
                            - img
                - listitem [ref=e445]:
                  - link "Travelling through Montréal?. Opens in a new tab" [ref=e447] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/2026/travelling-through-montreal.html
                    - generic:
                      - generic:
                        - text: Travelling through Montréal?
                        - generic:
                          - generic:
                            - img
                - listitem [ref=e448]:
                  - link "Travel to or from Cuba. Opens in a new tab" [ref=e450] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco//home/book/travel-news-and-updates/2026/travel-to-from-cuba.html
                    - generic:
                      - generic:
                        - text: Travel to or from Cuba
                        - generic:
                          - generic:
                            - img
                - listitem [ref=e451]:
                  - link "More news. Opens in a new tab" [ref=e453] [cursor=pointer]:
                    - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates.html
                    - generic:
                      - generic:
                        - text: More news
                        - generic:
                          - generic:
                            - img
    - contentinfo [ref=e455]:
      - generic [ref=e457]:
        - link "Air Canada - Go to homepage" [ref=e459]:
          - /url: /home/ca/en/aco/flights
          - img "Air Canada" [ref=e461]
        - generic:
          - link "A Star Alliance member Opens in a new tab":
            - /url: https://www.staralliance.com/en/home
            - img "A Star Alliance member Opens in a new tab"
      - generic [ref=e476]:
        - generic [ref=e477]:
          - heading "Support" [level=3] [ref=e479]
          - link "Help and contact. This link opens in a new tab." [ref=e481]:
            - /url: /ca/en/aco/home/fly/customer-support/contact-us.html
            - text: Help And Contact
          - link "Baggage & optional service fees. This link opens in a new tab." [ref=e483]:
            - /url: https://www.aircanada.com/ca/en/aco/home/legal/products-and-services.html
            - text: Baggage & Optional Service Fees
          - link "Customer service plan. This link opens in a new tab." [ref=e485]:
            - /url: /ca/en/aco/home/legal/air-canada-customer-service-plan.html
            - text: Customer Service Plan
          - link "The Air Canada Cybersecurity Centre. This link opens in a new tab." [ref=e487]:
            - /url: /ca/en/aco/home/book/travel-news-and-updates/telephone-and-email-scams.html
            - text: The Air Canada Cybersecurity Centre
        - generic [ref=e488]:
          - heading "Air Canada" [level=3] [ref=e490]
          - link "Media centre. This link opens in a new tab." [ref=e492]:
            - /url: https://www.aircanada.com/ca/en/aco/home/about/media.html
            - text: Media Centre
          - link "Official languages. This link opens in a new tab." [ref=e494]:
            - /url: https://www.aircanada.com/ca/en/aco/home/about/official-languages.html#/
            - text: Official Languages
          - link "Leave Less. This link opens in a new tab." [ref=e496]:
            - /url: https://leaveless.aircanada.com/ca/en/index.html
            - text: Leave Less
          - link "Our stories. This link opens in a new tab." [ref=e498]:
            - /url: /ca/en/aco/home/video-hub.html
            - text: Our Stories
          - link "Investor relations. This link opens in a new tab." [ref=e500]:
            - /url: https://www.aircanada.com/ca/en/aco/home/about/investor-relations.html
            - text: Investor Relations
          - link "Careers. This link opens in a new tab." [ref=e502]:
            - /url: https://www.aircanada.com/ca/en/aco/home/about/careers.html
            - text: Careers
          - link "Modern slavery report. This link opens in a new tab." [ref=e504]:
            - /url: https://content.presspage.com/uploads/3174/2b516d6a-25c7-40c1-a648-cc3c84a7712c/2025-modernslavery-report-en-final.pdf?10000
            - text: Modern Slavery Report
          - link "Diversity, Equity and Inclusion. This link opens in a new tab." [ref=e506]:
            - /url: https://www.aircanada.com/ca/en/aco/home/about/diversity-equity-inclusion.html
            - text: Diversity, Equity And Inclusion
        - generic [ref=e507]:
          - heading "Other services" [level=3] [ref=e509]
          - link "Air Canada for Business. This link opens in a new tab." [ref=e511]:
            - /url: /ca/en/aco/home/book/business-travel.html
            - text: Air Canada For Business
          - link "Air Canada for travel agents. This link opens in a new tab." [ref=e513]:
            - /url: https://acconnex.aircanada.com/home/login
            - text: Air Canada For Travel Agents
          - link "Air Canada Cargo. This link opens in a new tab." [ref=e515]:
            - /url: http://www.aircanada.com/cargo/en/
            - text: Air Canada Cargo
          - link "Air Canada Foundation. This link opens in a new tab." [ref=e517]:
            - /url: https://www.aircanada.com/en/about/community/foundation/index.html
            - text: Air Canada Foundation
        - generic [ref=e518]:
          - heading "Our awards" [level=3] [ref=e520]
          - generic [ref=e524]:
            - img "Skytrax" [ref=e525]
            - generic [ref=e526]: Best Airline in North America
      - generic [ref=e528]:
        - generic [ref=e530]: © 2026 Air Canada
        - generic [ref=e532]:
          - link "Terms of use. This link opens in a new tab." [ref=e534]:
            - /url: https://www.aircanada.com/ca/en/aco/home/legal/terms-of-use.html
            - text: "| Terms of use"
          - link "Privacy policy. This link opens in a new tab." [ref=e536]:
            - /url: https://www.aircanada.com/ca/en/aco/home/legal/privacy-policy.html
            - text: "| Privacy policy"
          - link "General Conditions of Carriage & Tariffs. This link opens in a new tab." [ref=e538]:
            - /url: https://www.aircanada.com/ca/en/aco/home/legal/conditions-carriage-tariffs.html
            - text: "| General Conditions of Carriage & Tariffs"
          - link "Cookie and tracking technologies policy. This link opens in a new tab." [ref=e540]:
            - /url: https://www.aircanada.com/ca/en/aco/home/legal/cookie-policy.html
            - text: Cookie and tracking technologies policy
        - generic [ref=e543]:
          - link "Facebook. This link opens in a new tab." [ref=e544]:
            - /url: https://www.facebook.com/aircanada?src=footer
            - img [ref=e546]
          - link "Visit our X page. This link opens in a new tab." [ref=e548]:
            - /url: https://twitter.com/aircanada?src=footer
            - img [ref=e550]
          - link "Subscribe to our YouTube channel. This link opens in a new tab." [ref=e552]:
            - /url: https://www.youtube.com/user/aircanada?src=footer
            - img [ref=e554]
```

# Test source

```ts
  164 |     await searchPage.selectDepartureDate(7);
  165 | 
  166 |     // Try to search
  167 |     try {
  168 |       await searchPage.clickSearchButton();
  169 | 
  170 |       // Check if error appears or no results shown
  171 |       const error = await resultsPage.getErrorMessage();
  172 |       const noResults = await resultsPage.hasNoResults();
  173 | 
  174 |       // Either error message or no results should appear
  175 |       const hasErrorIndicator = error !== null || noResults;
  176 |       expect(hasErrorIndicator).toBe(true);
  177 |     } catch {
  178 |       // Search may fail due to validation
  179 |       expect(true).toBe(true);
  180 |     }
  181 |   });
  182 | 
  183 |   test('TC005 - Date Validation: Past Date Prevention', async ({ page }) => {
  184 |     test.info().annotations.push({
  185 |       type: 'Test Case',
  186 |       description: 'TC-SCRUM-6-005: System prevents selection of past departure dates',
  187 |     });
  188 | 
  189 |     // Select one-way
  190 |     await searchPage.selectTripType('One-way');
  191 | 
  192 |     // Enter airports
  193 |     await searchPage.selectDepartureAirport('Toronto', 'YYZ');
  194 |     await searchPage.selectDestinationAirport('New York', 'JFK');
  195 | 
  196 |     // Try to set a past date (this should be prevented by the calendar)
  197 |     const dateInput = page.locator('[data-testid="departure-date"], [placeholder*="departure date"], input[name="departureDate"]').first();
  198 |     
  199 |     if (await dateInput.isVisible()) {
  200 |       // Try to set yesterday's date
  201 |       const yesterday = new Date();
  202 |       yesterday.setDate(yesterday.getDate() - 1);
  203 |       const formattedDate = yesterday.toISOString().split('T')[0];
  204 | 
  205 |       // Depending on implementation, this might be blocked
  206 |       try {
  207 |         await dateInput.fill(formattedDate);
  208 |       } catch {
  209 |         // Expected - past dates may not be settable
  210 |       }
  211 | 
  212 |       // Now set a valid future date
  213 |       await searchPage.selectDepartureDate(7);
  214 |       const value = await searchPage.getDepartureDateValue();
  215 |       
  216 |       // Verify it's not yesterday's date
  217 |       expect(value).not.toBe(formattedDate);
  218 |     }
  219 |   });
  220 | 
  221 |   test('TC006 - Input Validation: Same Departure and Destination', async ({ page }) => {
  222 |     test.info().annotations.push({
  223 |       type: 'Test Case',
  224 |       description: 'TC-SCRUM-6-006: System prevents search with identical airports',
  225 |     });
  226 | 
  227 |     // Select one-way
  228 |     await searchPage.selectTripType('One-way');
  229 | 
  230 |     // Set same airport for both
  231 |     await searchPage.selectDepartureAirport('Toronto', 'YYZ');
  232 |     await searchPage.selectDestinationAirport('Toronto', 'YYZ');
  233 | 
  234 |     // Select date
  235 |     await searchPage.selectDepartureDate(5);
  236 | 
  237 |     // Try to search
  238 |     try {
  239 |       await searchPage.clickSearchButton();
  240 | 
  241 |       // Should get error or no results
  242 |       const error = await resultsPage.getErrorMessage();
  243 |       const noResults = await resultsPage.hasNoResults();
  244 | 
  245 |       const hasErrorIndicator = error !== null || noResults;
  246 |       expect(hasErrorIndicator).toBe(true);
  247 |     } catch {
  248 |       // Expected - validation may prevent search
  249 |       expect(true).toBe(true);
  250 |     }
  251 |   });
  252 | 
  253 |   test('TC007 - UI Element Visibility and Accessibility', async ({ page }) => {
  254 |     test.info().annotations.push({
  255 |       type: 'Test Case',
  256 |       description: 'TC-SCRUM-6-007: All form elements are visible and accessible',
  257 |     });
  258 | 
  259 |     // Verify all elements are visible
  260 |     const tripTypeVisible = await searchPage.isTripTypeSelectorVisible();
  261 |     expect(tripTypeVisible).toBe(true);
  262 | 
  263 |     const depAirportVisible = await searchPage.isDepartureAirportInputVisible();
> 264 |     expect(depAirportVisible).toBe(true);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  265 | 
  266 |     const destAirportVisible = await searchPage.isDestinationAirportInputVisible();
  267 |     expect(destAirportVisible).toBe(true);
  268 | 
  269 |     const depDateVisible = await searchPage.isDepartureDatePickerVisible();
  270 |     expect(depDateVisible).toBe(true);
  271 | 
  272 |     const passengerVisible = await searchPage.isPassengerCountSelectorVisible();
  273 |     expect(passengerVisible).toBe(true);
  274 | 
  275 |     const searchVisible = await searchPage.isSearchButtonVisible();
  276 |     expect(searchVisible).toBe(true);
  277 | 
  278 |     const searchEnabled = await searchPage.isSearchButtonEnabled();
  279 |     expect(searchEnabled).toBe(true);
  280 | 
  281 |     // Test keyboard navigation
  282 |     const depInput = page.locator('[data-testid="departure-airport"], [placeholder*="departure"], [placeholder*="From"], input[name="departureAirport"]').first();
  283 |     if (await depInput.isVisible()) {
  284 |       await depInput.focus();
  285 |       const focused = await depInput.evaluate(el => document.activeElement === el);
  286 |       expect(focused).toBe(true);
  287 |     }
  288 |   });
  289 | 
  290 |   test('TC008 - Date Logic: Return Date Must Be After Departure Date', async ({ page }) => {
  291 |     test.info().annotations.push({
  292 |       type: 'Test Case',
  293 |       description: 'TC-SCRUM-6-008: System enforces return date after departure date',
  294 |     });
  295 | 
  296 |     // Select round-trip
  297 |     await searchPage.selectTripType('Round-trip');
  298 | 
  299 |     // Enter airports
  300 |     await searchPage.selectDepartureAirport('Toronto', 'YYZ');
  301 |     await searchPage.selectDestinationAirport('Vancouver', 'YVR');
  302 | 
  303 |     // Select departure date (7 days from now)
  304 |     const depDate = new Date();
  305 |     depDate.setDate(depDate.getDate() + 7);
  306 | 
  307 |     // Try to set return date before departure (should fail or be prevented)
  308 |     const invalidReturnDate = new Date(depDate);
  309 |     invalidReturnDate.setDate(invalidReturnDate.getDate() - 2);
  310 | 
  311 |     await searchPage.selectDepartureDate(7);
  312 | 
  313 |     // Set return date to valid date (after departure)
  314 |     await searchPage.selectReturnDate(10);
  315 | 
  316 |     const returnValue = await searchPage.getReturnDateValue();
  317 |     const depValue = await searchPage.getDepartureDateValue();
  318 | 
  319 |     // Return date should be greater than departure date
  320 |     expect(new Date(returnValue) > new Date(depValue)).toBe(true);
  321 |   });
  322 | 
  323 |   test('TC009 - Result Accuracy: Flight Information Consistency', async ({ page }) => {
  324 |     test.info().annotations.push({
  325 |       type: 'Test Case',
  326 |       description: 'TC-SCRUM-6-009: Flight results display accurate and consistent information',
  327 |     });
  328 | 
  329 |     // Perform successful search
  330 |     await searchPage.selectTripType('One-way');
  331 |     await searchPage.selectDepartureAirport('Toronto', 'YYZ');
  332 |     await searchPage.selectDestinationAirport('New York', 'JFK');
  333 |     await searchPage.selectDepartureDate(7);
  334 |     await searchPage.clickSearchButton();
  335 | 
  336 |     // Verify results loaded
  337 |     const loaded = await resultsPage.resultsLoaded();
  338 |     expect(loaded).toBe(true);
  339 | 
  340 |     // Get all flights and validate data
  341 |     const flights = await resultsPage.getAllFlightDetails();
  342 |     expect(flights.length).toBeGreaterThan(0);
  343 | 
  344 |     for (const flight of flights) {
  345 |       const validation = await resultsPage.validateFlightData(flight);
  346 |       expect(validation.hasAllFields).toBe(true);
  347 |       expect(validation.errors).toHaveLength(0);
  348 |     }
  349 | 
  350 |     // Check pricing consistency
  351 |     const consistent = await resultsPage.verifyPricingConsistency();
  352 |     expect(consistent).toBe(true);
  353 |   });
  354 | 
  355 |   test('TC010 - Airport Autocomplete Functionality', async ({ page }) => {
  356 |     test.info().annotations.push({
  357 |       type: 'Test Case',
  358 |       description: 'TC-SCRUM-6-010: Airport selection autocomplete works correctly',
  359 |     });
  360 | 
  361 |     // Test autocomplete for departure airport
  362 |     const depInput = page.locator('[data-testid="departure-airport"], [placeholder*="departure"], [placeholder*="From"], input[name="departureAirport"]').first();
  363 |     
  364 |     if (await depInput.isVisible()) {
```