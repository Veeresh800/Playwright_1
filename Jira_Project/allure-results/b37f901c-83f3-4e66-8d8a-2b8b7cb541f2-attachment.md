# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SCRUM-6\flight-search.spec.ts >> SCRUM-6: Flight Search - Air Canada >> TC002 - Round-Trip Flight Search with Multiple Segments
- Location: tests\SCRUM-6\flight-search.spec.ts:67:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: Failed to select trip type: Round-trip
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
          - generic [ref=e221] [cursor=pointer]:
            - generic [ref=e225]: WELCOME OFFER
            - generic [ref=e226]:
              - generic:
                - img
            - generic [ref=e227]:
              - generic [ref=e228]:
                - img "TD Aeroplan Visa Infinite Card" [ref=e230]
                - generic [ref=e231]:
                  - text: You could earn up to 40,000 points
                  - superscript [ref=e232]: ±
                  - text: towards a trip!
                - img [ref=e233]
              - heading "Up to 40,000 points± could be yours" [level=4] [ref=e235]:
                - text: Up to 40,000 points
                - superscript [ref=e236]: ±
                - text: could be yours
              - paragraph [ref=e237]:
                - text: Plus get a
                - strong [ref=e238]: First Year Annual Fee Rebate
                - superscript [ref=e239]: "1"
                - text: with the
                - strong [ref=e240]:
                  - text: TD
                  - superscript [ref=e241]: ®
                  - text: Aeroplan
                  - superscript [ref=e242]: ®
                  - text: Visa Infinite* Card
              - generic [ref=e243]:
                - link "Apply now" [ref=e244]:
                  - /url: https://www.aircanada.com/ca/en/aco/home/aeroplan/credit-cards/td/personal.html?acid=INT:ACO::PRJNE4122:URL4586::&ccSource=infinite-homepage-mass
                  - generic [ref=e245]: Apply now
                - paragraph [ref=e246]:
                  - superscript [ref=e247]: ±
                  - text: Subject to TD offer terms and Aeroplan program terms.
                  - superscript [ref=e248]: "1"
                  - text: Conditions apply.
          - generic [ref=e253]:
            - heading "Where can we take you?" [level=1] [ref=e255]
            - generic [ref=e257]:
              - generic [ref=e258]:
                - generic [ref=e260]:
                  - button "Choose trip type - currently selected - Round-trip" [ref=e262] [cursor=pointer]:
                    - generic:
                      - generic:
                        - generic:
                          - strong: Round-trip
                          - generic:
                            - img
                  - dialog "Calendar modal open with today's date selected." [ref=e266]:
                    - generic [ref=e268]:
                      - generic [ref=e269]:
                        - heading "Trip type" [level=1]:
                          - generic [ref=e270]: Trip type
                      - generic [ref=e272]:
                        - group [ref=e273]:
                          - radiogroup [ref=e276]:
                            - generic [ref=e279]:
                              - radio "Round-trip" [checked] [ref=e280] [cursor=pointer]
                              - generic: Round-trip
                            - generic [ref=e283]:
                              - radio "One-way" [ref=e284] [cursor=pointer]
                              - generic: One-way
                            - generic [ref=e287]:
                              - radio "Multi-city" [ref=e288] [cursor=pointer]
                              - generic: Multi-city
                        - button "Close" [ref=e291] [cursor=pointer]:
                          - generic [ref=e292]: Close
                - generic [ref=e293]:
                  - button "Passengers - currently selected - 1 Adult" [ref=e296] [cursor=pointer]:
                    - generic:
                      - generic:
                        - generic:
                          - strong: 1 Adult
                          - generic:
                            - img
                  - paragraph [ref=e298]
                - generic [ref=e304]:
                  - checkbox "Book with Aeroplan points" [ref=e305] [cursor=pointer]
                  - generic [ref=e307] [cursor=pointer]:
                    - img [ref=e309]
                    - strong [ref=e310]: Book with Aeroplan points
              - generic [ref=e313]:
                - generic [ref=e316]:
                  - button "Departing from - MAA - Chennai (Madras)" [ref=e319] [cursor=pointer]:
                    - generic [ref=e320]:
                      - paragraph [ref=e321]: MAA
                      - paragraph [ref=e322]: Chennai (Madras)
                  - button "Swap origin and destination" [ref=e324] [cursor=pointer]:
                    - img [ref=e326]: s
                  - button "Arriving in" [ref=e333] [cursor=pointer]:
                    - generic [ref=e334]:
                      - img [ref=e336]
                      - paragraph [ref=e338]: Arriving in
                - generic [ref=e339]:
                  - generic [ref=e341]:
                    - button "Show calendar" [ref=e342] [cursor=pointer]:
                      - img [ref=e344]
                    - generic [ref=e351]:
                      - generic:
                        - generic:
                          - generic: Departure date
                      - combobox "Departure date" [ref=e353]
                    - generic [ref=e359]:
                      - generic:
                        - generic:
                          - generic: Return date
                      - combobox "Return date" [ref=e361]
                  - generic:
                    - generic:
                      - definition
                  - generic [ref=e362]: "Enter the date, day and month in this format: DD/MM, or press the down arrow key button to open the calendar and select your date from there."
                - generic [ref=e366]:
                  - generic [ref=e368]:
                    - generic [ref=e369]:
                      - generic:
                        - generic:
                          - img
                    - generic [ref=e370]:
                      - generic:
                        - generic:
                          - generic: Promotion code
                      - textbox "Promotion code" [ref=e372]:
                        - /placeholder: ""
                  - generic:
                    - definition
                - button "Search" [ref=e376] [cursor=pointer]:
                  - generic [ref=e377]: Search
              - banner "You're visiting the Canada edition of our website. Based on your location, we recommend using our India edition" [ref=e384]:
                - paragraph [ref=e385]:
                  - text: You're visiting the
                  - strong [ref=e386]: Canada
                  - text: edition of our website. Based on your location, we recommend using our
                  - link "India edition" [ref=e387] [cursor=pointer]:
                    - /url: /home/in/en/aco/flights
                - img [ref=e389]
              - region
          - generic [ref=e392]:
            - generic [ref=e395]:
              - heading "Featured flight offers" [level=2] [ref=e396]
              - generic [ref=e400]:
                - heading "Your out-of-office starts here" [level=2] [ref=e401]
                - paragraph [ref=e403]: Save 25% on select base fares worldwide for travel by February 28, 2027. Book by June 8.
                - link "Book now" [ref=e405] [cursor=pointer]:
                  - /url: https://www.aircanada.com/en-ca/?acid=INT:ACO:25NtpJune2-8:PRJAC40000146:URL4720:salesbanner#worldwide-CVJU4VK1-modal
                  - generic [ref=e406]: Book now
            - generic [ref=e410]:
              - img "3d globe image" [ref=e412]
              - generic [ref=e413]:
                - paragraph [ref=e414]: A WORLD OF DEALS
                - heading "Still searching for that special somewhere? We’ll get you there." [level=2] [ref=e415]
                - link "See offers" [ref=e417] [cursor=pointer]:
                  - /url: https://www.aircanada.com/en-ca/?acid=INT:ACO:AEJanFlame2026:PRJNE4077:URL4129:homepageaebanner#aeoffer-modal
                  - generic [ref=e418]: See offers
                - generic [ref=e422]:
                  - figure "destinations" [ref=e424]:
                    - paragraph [ref=e425]: 180+
                    - generic [ref=e426]: destinations
                  - figure "daily flights" [ref=e428]:
                    - paragraph [ref=e429]: 1,000+
                    - generic [ref=e430]: daily flights
                  - figure "continents" [ref=e432]:
                    - paragraph [ref=e433]: "6"
                    - generic [ref=e434]: continents
            - generic [ref=e438]:
              - heading "New to Air Canada" [level=2] [ref=e439]
              - list [ref=e443]:
                - listitem [ref=e444]:
                  - generic [ref=e447]:
                    - heading "Welcome back to our Montréal Maple Leaf Lounge" [level=3] [ref=e448]
                    - paragraph [ref=e449]: Refreshed, reopened and ready to welcome you in the domestic terminal.
                    - link "Learn more. This link opens in a new tab." [ref=e451] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/fly/premium-services/maple-leaf-lounges/maple-leaf-lounge-details.html?acid=INT:EVE:POSCAYULDOMMLL:PRJAER40000208:URL4513::ACapp#/!lounge@montreal
                      - generic [ref=e452]: Learn more
                      - img [ref=e455]
                - listitem [ref=e457]:
                  - generic [ref=e460]:
                    - heading "More choice and support for mobility needs" [level=3] [ref=e461]
                    - paragraph [ref=e462]: New equipment options for a smoother, more comfortable journey.
                    - link "Learn more. This link opens in a new tab." [ref=e464] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/plan/accessibility/mobility-aids-and-assistance.html?acid=INT:ACO:accessibilitycampaign2026:prjac40000141:url4699:newacomobilityen
                      - generic [ref=e465]: Learn more
                      - img [ref=e468]
                - listitem [ref=e470]:
                  - generic [ref=e473]:
                    - heading "Supporting your journey with a service dog" [level=3] [ref=e474]
                    - paragraph [ref=e475]: A new program offering a certification option for owner-trained service dogs.
                    - link "Learn more. This link opens in a new tab." [ref=e477] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/plan/accessibility/service-emotional-support-dogs.html.html?acid=INT:ACO:accessibilitycampaign2026:prjac40000141:url4699:newacoservicedogen#cabin-ready
                      - generic [ref=e478]: Learn more
                      - img [ref=e481]
            - generic [ref=e484]:
              - heading "Travel news and updates" [level=2] [ref=e485]
              - generic [ref=e486]:
                - generic [ref=e487]:
                  - img "Travel news and updates" [ref=e489]
                  - generic [ref=e490]:
                    - heading "Review travel requirements for your trip" [level=3] [ref=e491]
                    - paragraph [ref=e492]: Review the latest travel requirements and find answers to your frequently asked questions.
                    - separator [ref=e493]
                    - link "Visit Travel Ready hub. Opens in a new tab" [ref=e495] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/plan/travel-requirements/travel-ready-hub.html
                      - generic:
                        - generic:
                          - text: Visit Travel Ready hub
                          - generic:
                            - generic:
                              - img
                - list [ref=e497]:
                  - listitem [ref=e498]:
                    - link "Military situation in the Middle East. Opens in a new tab" [ref=e500] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/2026/middle-east-travel.html
                      - generic:
                        - generic:
                          - text: Military situation in the Middle East
                          - generic:
                            - generic:
                              - img
                  - listitem [ref=e501]:
                    - link "Baggage fee changes. Opens in a new tab" [ref=e503] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/baggage-fee-changes.html
                      - generic:
                        - generic:
                          - text: Baggage fee changes
                          - generic:
                            - generic:
                              - img
                  - listitem [ref=e504]:
                    - link "EU Entry/Exit System – expect delays at European airports. Opens in a new tab" [ref=e506] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/2025/eu-introduces-entry-exit-system.html
                      - generic:
                        - generic:
                          - text: EU Entry/Exit System – expect delays at European airports
                          - generic:
                            - generic:
                              - img
                  - listitem [ref=e507]:
                    - link "Travelling through Montréal?. Opens in a new tab" [ref=e509] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/2026/travelling-through-montreal.html
                      - generic:
                        - generic:
                          - text: Travelling through Montréal?
                          - generic:
                            - generic:
                              - img
                  - listitem [ref=e510]:
                    - link "Travel to or from Cuba. Opens in a new tab" [ref=e512] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco//home/book/travel-news-and-updates/2026/travel-to-from-cuba.html
                      - generic:
                        - generic:
                          - text: Travel to or from Cuba
                          - generic:
                            - generic:
                              - img
                  - listitem [ref=e513]:
                    - link "More news. Opens in a new tab" [ref=e515] [cursor=pointer]:
                      - /url: https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates.html
                      - generic:
                        - generic:
                          - text: More news
                          - generic:
                            - generic:
                              - img
      - contentinfo [ref=e517]:
        - generic [ref=e519]:
          - link "Air Canada - Go to homepage" [ref=e521] [cursor=pointer]:
            - /url: /home/ca/en/aco/flights
            - img "Air Canada" [ref=e523]
          - link "A Star Alliance member Opens in a new tab" [ref=e538] [cursor=pointer]:
            - /url: https://www.staralliance.com/en/home
            - img "A Star Alliance member Opens in a new tab" [ref=e539]
        - generic [ref=e541]:
          - generic [ref=e542]:
            - heading "Support" [level=3] [ref=e544]
            - link "Help and contact. This link opens in a new tab." [ref=e546] [cursor=pointer]:
              - /url: /ca/en/aco/home/fly/customer-support/contact-us.html
              - text: Help And Contact
            - link "Baggage & optional service fees. This link opens in a new tab." [ref=e548] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/legal/products-and-services.html
              - text: Baggage & Optional Service Fees
            - link "Customer service plan. This link opens in a new tab." [ref=e550] [cursor=pointer]:
              - /url: /ca/en/aco/home/legal/air-canada-customer-service-plan.html
              - text: Customer Service Plan
            - link "The Air Canada Cybersecurity Centre. This link opens in a new tab." [ref=e552] [cursor=pointer]:
              - /url: /ca/en/aco/home/book/travel-news-and-updates/telephone-and-email-scams.html
              - text: The Air Canada Cybersecurity Centre
            - link "Manage Cookies" [ref=e554] [cursor=pointer]:
              - /url: javascript:void(0)
          - generic [ref=e555]:
            - heading "Air Canada" [level=3] [ref=e557]
            - link "Media centre. This link opens in a new tab." [ref=e559] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/about/media.html
              - text: Media Centre
            - link "Official languages. This link opens in a new tab." [ref=e561] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/about/official-languages.html#/
              - text: Official Languages
            - link "Leave Less. This link opens in a new tab." [ref=e563] [cursor=pointer]:
              - /url: https://leaveless.aircanada.com/ca/en/index.html
              - text: Leave Less
            - link "Our stories. This link opens in a new tab." [ref=e565] [cursor=pointer]:
              - /url: /ca/en/aco/home/video-hub.html
              - text: Our Stories
            - link "Investor relations. This link opens in a new tab." [ref=e567] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/about/investor-relations.html
              - text: Investor Relations
            - link "Careers. This link opens in a new tab." [ref=e569] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/about/careers.html
              - text: Careers
            - link "Modern slavery report. This link opens in a new tab." [ref=e571] [cursor=pointer]:
              - /url: https://content.presspage.com/uploads/3174/2b516d6a-25c7-40c1-a648-cc3c84a7712c/2025-modernslavery-report-en-final.pdf?10000
              - text: Modern Slavery Report
            - link "Diversity, Equity and Inclusion. This link opens in a new tab." [ref=e573] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/about/diversity-equity-inclusion.html
              - text: Diversity, Equity And Inclusion
          - generic [ref=e574]:
            - heading "Other services" [level=3] [ref=e576]
            - link "Air Canada for Business. This link opens in a new tab." [ref=e578] [cursor=pointer]:
              - /url: /ca/en/aco/home/book/business-travel.html
              - text: Air Canada For Business
            - link "Air Canada for travel agents. This link opens in a new tab." [ref=e580] [cursor=pointer]:
              - /url: https://acconnex.aircanada.com/home/login
              - text: Air Canada For Travel Agents
            - link "Air Canada Cargo. This link opens in a new tab." [ref=e582] [cursor=pointer]:
              - /url: http://www.aircanada.com/cargo/en/
              - text: Air Canada Cargo
            - link "Air Canada Foundation. This link opens in a new tab." [ref=e584] [cursor=pointer]:
              - /url: https://www.aircanada.com/en/about/community/foundation/index.html
              - text: Air Canada Foundation
          - generic [ref=e585]:
            - heading "Our awards" [level=3] [ref=e587]
            - generic [ref=e591]:
              - img "Skytrax" [ref=e592]
              - generic [ref=e593]: Best Airline in North America
        - generic [ref=e595]:
          - generic [ref=e597]: © 2026 Air Canada
          - generic [ref=e599]:
            - link "Terms of use. This link opens in a new tab." [ref=e601] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/legal/terms-of-use.html
              - text: "| Terms of use"
            - link "Privacy policy. This link opens in a new tab." [ref=e603] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/legal/privacy-policy.html
              - text: "| Privacy policy"
            - link "General Conditions of Carriage & Tariffs. This link opens in a new tab." [ref=e605] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/legal/conditions-carriage-tariffs.html
              - text: "| General Conditions of Carriage & Tariffs"
            - link "Cookie and tracking technologies policy. This link opens in a new tab." [ref=e607] [cursor=pointer]:
              - /url: https://www.aircanada.com/ca/en/aco/home/legal/cookie-policy.html
              - text: Cookie and tracking technologies policy
          - generic [ref=e610]:
            - link "Facebook. This link opens in a new tab." [ref=e611] [cursor=pointer]:
              - /url: https://www.facebook.com/aircanada?src=footer
              - img [ref=e613]
            - link "Visit our X page. This link opens in a new tab." [ref=e615] [cursor=pointer]:
              - /url: https://twitter.com/aircanada?src=footer
              - img [ref=e617]
            - link "Subscribe to our YouTube channel. This link opens in a new tab." [ref=e619] [cursor=pointer]:
              - /url: https://www.youtube.com/user/aircanada?src=footer
              - img [ref=e621]
  - generic "site feedback" [ref=e623]:
    - iframe [ref=e624]:
      - img [ref=f11e2] [cursor=pointer]
  - region "Cookie banner" [active] [ref=e625]:
    - dialog "Privacy" [ref=e626]:
      - generic [ref=e628]:
        - generic [ref=e631]:
          - text: Air Canada uses cookies to make its website work, to personalize it, to analyze visitor data and to present you with more relevant ads. You can manage cookies on the Air Canada pages of this website through your browser. You may accept or reject optional cookies on the
          - strong [ref=e632]: Aeroplan
          - text: and
          - strong [ref=e633]: Air Canada Vacations
          - text: pages of this website. More about
          - link "More information about your privacy, opens in a new tab" [ref=e634] [cursor=pointer]:
            - /url: https://www.aircanada.com/ca/en/aco/home/legal/cookie-policy.html
            - text: our cookies and tracking technologies policy.
        - generic [ref=e636]:
          - button "Manage preferences" [ref=e637] [cursor=pointer]
          - button "Accept all" [ref=e638] [cursor=pointer]
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
      |             ^ Error: Failed to select trip type: Round-trip
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