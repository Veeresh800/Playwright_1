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
- generic [ref=e1]:
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
                - button "Choose trip type - currently selected - Round-trip" [ref=e232] [cursor=pointer]:
                  - generic:
                    - generic:
                      - generic:
                        - strong: Round-trip
                        - generic:
                          - img
                - generic [ref=e234]:
                  - button "Passengers - currently selected - 1 Adult" [ref=e237] [cursor=pointer]:
                    - generic:
                      - generic:
                        - generic:
                          - strong: 1 Adult
                          - generic:
                            - img
                  - paragraph [ref=e239]
                - generic [ref=e245]:
                  - checkbox "Book with Aeroplan points" [ref=e246] [cursor=pointer]
                  - generic [ref=e248] [cursor=pointer]:
                    - img [ref=e250]
                    - strong [ref=e251]: Book with Aeroplan points
              - generic [ref=e254]:
                - generic [ref=e257]:
                  - button "Departing from - MAA - Chennai (Madras)" [ref=e260] [cursor=pointer]:
                    - generic [ref=e261]:
                      - paragraph [ref=e262]: MAA
                      - paragraph [ref=e263]: Chennai (Madras)
                  - button "Swap origin and destination" [ref=e265] [cursor=pointer]:
                    - img [ref=e267]: s
                  - button "Arriving in" [ref=e274] [cursor=pointer]:
                    - generic [ref=e275]:
                      - img [ref=e277]
                      - paragraph [ref=e279]: Arriving in
                - generic [ref=e280]:
                  - generic [ref=e282]:
                    - button "Show calendar" [ref=e283] [cursor=pointer]:
                      - img [ref=e285]
                    - generic [ref=e292]:
                      - generic:
                        - generic:
                          - generic: Departure date
                      - combobox "Departure date" [ref=e294]
                    - generic [ref=e300]:
                      - generic:
                        - generic:
                          - generic: Return date
                      - combobox "Return date" [ref=e302]
                  - generic:
                    - generic:
                      - definition
                  - generic [ref=e303]: "Enter the date, day and month in this format: DD/MM, or press the down arrow key button to open the calendar and select your date from there."
                - generic [ref=e307]:
                  - generic [ref=e309]:
                    - generic [ref=e310]:
                      - generic:
                        - generic:
                          - img
                    - generic [ref=e311]:
                      - generic:
                        - generic:
                          - generic: Promotion code
                      - textbox "Promotion code" [ref=e313]:
                        - /placeholder: ""
                  - generic:
                    - definition
                - button "Search" [ref=e317] [cursor=pointer]:
                  - generic [ref=e318]: Search
              - banner "You're visiting the Canada edition of our website. Based on your location, we recommend using our India edition" [ref=e325]:
                - paragraph [ref=e326]:
                  - text: You're visiting the
                  - strong [ref=e327]: Canada
                  - text: edition of our website. Based on your location, we recommend using our
                  - link "India edition" [ref=e328] [cursor=pointer]:
                    - /url: /home/in/en/aco/flights
                - img [ref=e330]
              - region
          - generic [ref=e333]:
            - generic [ref=e336]:
              - heading "Featured flight offers" [level=2] [ref=e337]
              - generic [ref=e341]:
                - heading "Your out-of-office starts here" [level=2] [ref=e342]
                - paragraph [ref=e344]: Save 25% on select base fares worldwide for travel by February 28, 2027. Book by June 8.
                - link "Book now" [ref=e346] [cursor=pointer]:
                  - /url: https://www.aircanada.com/en-ca/?acid=INT:ACO:25NtpJune2-8:PRJAC40000146:URL4720:salesbanner#worldwide-CVJU4VK1-modal
                  - generic [ref=e347]: Book now
            - generic [ref=e351]:
              - img "3d globe image" [ref=e353]
              - generic [ref=e354]:
                - paragraph [ref=e355]: A WORLD OF DEALS
                - heading "Still searching for that special somewhere? We’ll get you there." [level=2] [ref=e356]
                - link "See offers" [ref=e358] [cursor=pointer]:
                  - /url: https://www.aircanada.com/en-ca/?acid=INT:ACO:AEJanFlame2026:PRJNE4077:URL4129:homepageaebanner#aeoffer-modal
                  - generic [ref=e359]: See offers
                - generic [ref=e363]:
                  - figure "destinations" [ref=e365]:
                    - paragraph [ref=e366]: 180+
                    - generic [ref=e367]: destinations
                  - figure "daily flights" [ref=e369]:
                    - paragraph [ref=e370]: 1,000+
                    - generic [ref=e371]: daily flights
                  - figure "continents" [ref=e373]:
                    - paragraph [ref=e374]: "6"
                    - generic [ref=e375]: continents
            - generic [ref=e379]:
              - heading "New to Air Canada" [level=2] [ref=e380]
              - list [ref=e384]:
                - listitem [ref=e385]:
                  - generic [ref=e388]:
                    - heading "Welcome back to our Montréal Maple Leaf Lounge" [level=3] [ref=e389]
                    - paragraph [ref=e390]: Refreshed, reopened and ready to welcome you in the domestic terminal.
                    - link "Learn more. This link opens in a new tab." [ref=e392] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/fly/premium-services/maple-leaf-lounges/maple-leaf-lounge-details.html?acid=INT:EVE:POSCAYULDOMMLL:PRJAER40000208:URL4513::ACapp#/!lounge@montreal
                      - generic [ref=e393]: Learn more
                      - img [ref=e396]
                - listitem [ref=e398]:
                  - generic [ref=e401]:
                    - heading "More choice and support for mobility needs" [level=3] [ref=e402]
                    - paragraph [ref=e403]: New equipment options for a smoother, more comfortable journey.
                    - link "Learn more. This link opens in a new tab." [ref=e405] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/plan/accessibility/mobility-aids-and-assistance.html?acid=INT:ACO:accessibilitycampaign2026:prjac40000141:url4699:newacomobilityen
                      - generic [ref=e406]: Learn more
                      - img [ref=e409]
                - listitem [ref=e411]:
                  - generic [ref=e414]:
                    - heading "Supporting your journey with a service dog" [level=3] [ref=e415]
                    - paragraph [ref=e416]: A new program offering a certification option for owner-trained service dogs.
                    - link "Learn more. This link opens in a new tab." [ref=e418] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/plan/accessibility/service-emotional-support-dogs.html.html?acid=INT:ACO:accessibilitycampaign2026:prjac40000141:url4699:newacoservicedogen#cabin-ready
                      - generic [ref=e419]: Learn more
                      - img [ref=e422]
            - generic [ref=e425]:
              - heading "Travel news and updates" [level=2] [ref=e426]
              - generic [ref=e427]:
                - generic [ref=e428]:
                  - img "Travel news and updates" [ref=e430]
                  - generic [ref=e431]:
                    - heading "Review travel requirements for your trip" [level=3] [ref=e432]
                    - paragraph [ref=e433]: Review the latest travel requirements and find answers to your frequently asked questions.
                    - separator [ref=e434]
                    - link "Visit Travel Ready hub. Opens in a new tab" [ref=e436] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/plan/travel-requirements/travel-ready-hub.html
                      - generic:
                        - generic:
                          - text: Visit Travel Ready hub
                          - generic:
                            - generic:
                              - img
                - list [ref=e438]:
                  - listitem [ref=e439]:
                    - link "Military situation in the Middle East. Opens in a new tab" [ref=e441] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/2026/middle-east-travel.html
                      - generic:
                        - generic:
                          - text: Military situation in the Middle East
                          - generic:
                            - generic:
                              - img
                  - listitem [ref=e442]:
                    - link "Baggage fee changes. Opens in a new tab" [ref=e444] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/baggage-fee-changes.html
                      - generic:
                        - generic:
                          - text: Baggage fee changes
                          - generic:
                            - generic:
                              - img
                  - listitem [ref=e445]:
                    - link "EU Entry/Exit System – expect delays at European airports. Opens in a new tab" [ref=e447] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/2025/eu-introduces-entry-exit-system.html
                      - generic:
                        - generic:
                          - text: EU Entry/Exit System – expect delays at European airports
                          - generic:
                            - generic:
                              - img
                  - listitem [ref=e448]:
                    - link "Travelling through Montréal?. Opens in a new tab" [ref=e450] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/2026/travelling-through-montreal.html
                      - generic:
                        - generic:
                          - text: Travelling through Montréal?
                          - generic:
                            - generic:
                              - img
                  - listitem [ref=e451]:
                    - link "Travel to or from Cuba. Opens in a new tab" [ref=e453] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco//home/book/travel-news-and-updates/2026/travel-to-from-cuba.html
                      - generic:
                        - generic:
                          - text: Travel to or from Cuba
                          - generic:
                            - generic:
                              - img
                  - listitem [ref=e454]:
                    - link "More news. Opens in a new tab" [ref=e456] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates.html
                      - generic:
                        - generic:
                          - text: More news
                          - generic:
                            - generic:
                              - img
      - contentinfo [ref=e458]:
        - generic [ref=e460]:
          - link "Air Canada - Go to homepage" [ref=e462] [cursor=pointer]:
            - /url: /home/ca/en/aco/flights
            - img "Air Canada" [ref=e464]
          - link "A Star Alliance member Opens in a new tab" [ref=e479] [cursor=pointer]:
            - /url: https://www.staralliance.com/en/home
            - img "A Star Alliance member Opens in a new tab" [ref=e480]
        - generic [ref=e482]:
          - generic [ref=e483]:
            - heading "Support" [level=3] [ref=e485]
            - link "Help and contact. This link opens in a new tab." [ref=e487] [cursor=pointer]:
              - /url: /ca/en/aco/home/fly/customer-support/contact-us.html
              - text: Help And Contact
            - link "Baggage & optional service fees. This link opens in a new tab." [ref=e489] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/legal/products-and-services.html
              - text: Baggage & Optional Service Fees
            - link "Customer service plan. This link opens in a new tab." [ref=e491] [cursor=pointer]:
              - /url: /ca/en/aco/home/legal/air-canada-customer-service-plan.html
              - text: Customer Service Plan
            - link "The Air Canada Cybersecurity Centre. This link opens in a new tab." [ref=e493] [cursor=pointer]:
              - /url: /ca/en/aco/home/book/travel-news-and-updates/telephone-and-email-scams.html
              - text: The Air Canada Cybersecurity Centre
          - generic [ref=e494]:
            - heading "Air Canada" [level=3] [ref=e496]
            - link "Media centre. This link opens in a new tab." [ref=e498] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/about/media.html
              - text: Media Centre
            - link "Official languages. This link opens in a new tab." [ref=e500] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/about/official-languages.html#/
              - text: Official Languages
            - link "Leave Less. This link opens in a new tab." [ref=e502] [cursor=pointer]:
              - /url: https://leaveless.aircanada.com/ca/en/index.html
              - text: Leave Less
            - link "Our stories. This link opens in a new tab." [ref=e504] [cursor=pointer]:
              - /url: /ca/en/aco/home/video-hub.html
              - text: Our Stories
            - link "Investor relations. This link opens in a new tab." [ref=e506] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/about/investor-relations.html
              - text: Investor Relations
            - link "Careers. This link opens in a new tab." [ref=e508] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/about/careers.html
              - text: Careers
            - link "Modern slavery report. This link opens in a new tab." [ref=e510] [cursor=pointer]:
              - /url: https://content.presspage.com/uploads/3174/2b516d6a-25c7-40c1-a648-cc3c84a7712c/2025-modernslavery-report-en-final.pdf?10000
              - text: Modern Slavery Report
            - link "Diversity, Equity and Inclusion. This link opens in a new tab." [ref=e512] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/about/diversity-equity-inclusion.html
              - text: Diversity, Equity And Inclusion
          - generic [ref=e513]:
            - heading "Other services" [level=3] [ref=e515]
            - link "Air Canada for Business. This link opens in a new tab." [ref=e517] [cursor=pointer]:
              - /url: /ca/en/aco/home/book/business-travel.html
              - text: Air Canada For Business
            - link "Air Canada for travel agents. This link opens in a new tab." [ref=e519] [cursor=pointer]:
              - /url: https://acconnex.aircanada.com/home/login
              - text: Air Canada For Travel Agents
            - link "Air Canada Cargo. This link opens in a new tab." [ref=e521] [cursor=pointer]:
              - /url: http://www.aircanada.com/cargo/en/
              - text: Air Canada Cargo
            - link "Air Canada Foundation. This link opens in a new tab." [ref=e523] [cursor=pointer]:
              - /url: https://www.aircanada.com/en/about/community/foundation/index.html
              - text: Air Canada Foundation
          - generic [ref=e524]:
            - heading "Our awards" [level=3] [ref=e526]
            - generic [ref=e530]:
              - img "Skytrax" [ref=e531]
              - generic [ref=e532]: Best Airline in North America
        - generic [ref=e534]:
          - generic [ref=e536]: © 2026 Air Canada
          - generic [ref=e538]:
            - link "Terms of use. This link opens in a new tab." [ref=e540] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/legal/terms-of-use.html
              - text: "| Terms of use"
            - link "Privacy policy. This link opens in a new tab." [ref=e542] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/legal/privacy-policy.html
              - text: "| Privacy policy"
            - link "General Conditions of Carriage & Tariffs. This link opens in a new tab." [ref=e544] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/legal/conditions-carriage-tariffs.html
              - text: "| General Conditions of Carriage & Tariffs"
            - link "Cookie and tracking technologies policy. This link opens in a new tab." [ref=e546] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/legal/cookie-policy.html
              - text: Cookie and tracking technologies policy
          - generic [ref=e549]:
            - link "Facebook. This link opens in a new tab." [ref=e550] [cursor=pointer]:
              - /url: https://www.facebook.com/aircanada?src=footer
              - img [ref=e552]
            - link "Visit our X page. This link opens in a new tab." [ref=e554] [cursor=pointer]:
              - /url: https://twitter.com/aircanada?src=footer
              - img [ref=e556]
            - link "Subscribe to our YouTube channel. This link opens in a new tab." [ref=e558] [cursor=pointer]:
              - /url: https://www.youtube.com/user/aircanada?src=footer
              - img [ref=e560]
  - button "Feedback" [ref=e562] [cursor=pointer]:
    - iframe [ref=e563]:
      - img [ref=f7e2] [cursor=pointer]
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