# SCRUM-6 Test Cases: Flight Search - Air Canada Website

## Document Information
- **Test Document ID**: SCRUM-6-TEST-CASES
- **Story ID**: SCRUM-6
- **Story Name**: JiraStory1 - Flight Search
- **Application**: Air Canada Flights
- **Application URL**: https://www.aircanada.com/home/ca/en/aco/flights
- **Version**: 1.0
- **Created Date**: 2026-06-08
- **Total Test Cases**: 10

---

## Test Case Structure

Each test case includes:
- Test Case ID and Title
- Preconditions
- Test Steps
- Expected Results
- Test Data
- Priority
- Type (Positive/Negative/Edge Case)

---

## TC001 - One-Way Flight Search with Valid Inputs

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-SCRUM-6-001 |
| **Title** | User selects one-way trip and searches for flights |
| **Objective** | Verify user can perform a one-way flight search and view results |
| **Type** | Positive |
| **Priority** | Critical |
| **Preconditions** | <ul><li>Air Canada flights website is accessible</li><li>Browser is open and internet connection is active</li><li>User is on the flight search page</li></ul> |

### Test Steps

| Step No | Action | Expected Result |
|---------|--------|-----------------|
| 1 | Navigate to https://www.aircanada.com/home/ca/en/aco/flights | Page loads successfully with flight search form |
| 2 | Verify trip type selector is visible | Trip type selector is displayed |
| 3 | Select "One-way" from trip type dropdown | "One-way" is selected |
| 4 | Click on departure airport input field | Field becomes focused/active |
| 5 | Type "Toronto" in departure airport field | Autocomplete suggestions appear |
| 6 | Select "Toronto (YYZ)" from suggestions | "Toronto (YYZ)" is populated in field |
| 7 | Click on destination airport input field | Field becomes focused/active |
| 8 | Type "New York" in destination airport field | Autocomplete suggestions appear |
| 9 | Select "New York (JFK)" from suggestions | "New York (JFK)" is populated in field |
| 10 | Click on departure date picker | Calendar widget opens |
| 11 | Select a future date (7+ days from today) | Selected date is displayed in field |
| 12 | Verify Search button is enabled | Search button is visible and clickable |
| 13 | Click the Search button | Page navigates to search results |
| 14 | Verify results page loads | Search results page is displayed |
| 15 | Verify at least one flight option is displayed | Flight option(s) visible on page |
| 16 | Verify each flight shows all required fields | Departure time, Arrival time, Duration, Price are visible |

### Test Data

| Field | Value |
|-------|-------|
| Trip Type | One-way |
| Departure Airport | Toronto (YYZ) |
| Destination Airport | New York (JFK) |
| Departure Date | Current date + 7 days |
| Return Date | N/A |
| Passengers | 1 |

### Expected Results Summary
✓ Search completes successfully
✓ Results page displays with valid flight options
✓ All required information is present in results
✓ No errors or warnings displayed

---

## TC002 - Round-Trip Flight Search with Multiple Segments

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-SCRUM-6-002 |
| **Title** | User searches for round-trip flights |
| **Objective** | Verify user can search for round-trip flights and results display both outbound and return flights |
| **Type** | Positive |
| **Priority** | Critical |
| **Preconditions** | <ul><li>Air Canada flights website is accessible</li><li>Browser is open and internet connection is active</li><li>User is on the flight search page</li></ul> |

### Test Steps

| Step No | Action | Expected Result |
|---------|--------|-----------------|
| 1 | Navigate to flight search page | Page loads successfully |
| 2 | Select "Round-trip" from trip type dropdown | "Round-trip" option is selected |
| 3 | Enter "Toronto (YYZ)" as departure airport | Airport is populated correctly |
| 4 | Enter "Vancouver (YVR)" as destination airport | Airport is populated correctly |
| 5 | Select departure date (today + 7 days) | Date is selected and displayed |
| 6 | Verify return date picker is enabled | Return date picker becomes available |
| 7 | Select return date (departure date + 3 days) | Return date is displayed |
| 8 | Click Search button | Request is sent and processing begins |
| 9 | Wait for results page to load | Results page displays with flight options |
| 10 | Verify outbound flights are displayed | Outbound flight segment is visible |
| 11 | Verify return flights are displayed | Return flight segment is visible |
| 12 | Verify each segment shows required fields | Departure time, Arrival time, Duration, Price visible |
| 13 | Verify total pricing includes both segments | Price reflects round-trip cost |

### Test Data

| Field | Value |
|-------|-------|
| Trip Type | Round-trip |
| Departure Airport | Toronto (YYZ) |
| Destination Airport | Vancouver (YVR) |
| Departure Date | Current date + 7 days |
| Return Date | Current date + 10 days |
| Passengers | 1 |

### Expected Results Summary
✓ Round-trip search completes successfully
✓ Both outbound and return flights are displayed
✓ Complete pricing information is shown
✓ All required fields are present

---

## TC003 - Flight Search with Multiple Passengers

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-SCRUM-6-003 |
| **Title** | User searches for flights with multiple passengers |
| **Objective** | Verify search functionality works correctly with multiple passenger selection |
| **Type** | Positive |
| **Priority** | High |
| **Preconditions** | <ul><li>Air Canada flights website is accessible</li><li>Flight search page is loaded</li></ul> |

### Test Steps

| Step No | Action | Expected Result |
|---------|--------|-----------------|
| 1 | Navigate to flight search page | Page loads successfully |
| 2 | Select "One-way" as trip type | Trip type is set |
| 3 | Enter "Toronto (YYZ)" as departure airport | Departure airport is set |
| 4 | Enter "Miami (MIA)" as destination airport | Destination airport is set |
| 5 | Select future departure date | Date is selected |
| 6 | Locate passenger count selector | Selector is visible |
| 7 | Increase passenger count to 2 | Count shows "2 Passengers" or similar |
| 8 | Click Search button | Search initiates |
| 9 | Wait for results to load | Results page displays |
| 10 | Verify flight options are displayed for 2 passengers | Options are shown with 2 seats allocated |
| 11 | Verify total price reflects 2 passengers | Price is calculated for both passengers |
| 12 | Verify each flight segment shows pricing per passenger | Per-pax and total pricing visible |

### Test Data

| Field | Value |
|-------|-------|
| Trip Type | One-way |
| Departure Airport | Toronto (YYZ) |
| Destination Airport | Miami (MIA) |
| Departure Date | Current date + 5 days |
| Passengers | 2 |

### Expected Results Summary
✓ Search completes with 2 passengers
✓ Results show pricing for multiple passengers
✓ Total cost is accurately calculated

---

## TC004 - Error Handling: Invalid Departure Airport

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-SCRUM-6-004 |
| **Title** | System handles invalid departure airport input |
| **Objective** | Verify error handling when invalid airport codes are entered |
| **Type** | Negative |
| **Priority** | High |
| **Preconditions** | <ul><li>Flight search page is loaded and ready for input</li></ul> |

### Test Steps

| Step No | Action | Expected Result |
|---------|--------|-----------------|
| 1 | Open flight search page | Page loads successfully |
| 2 | Select "One-way" as trip type | Trip type is selected |
| 3 | Enter "XYZ123" in departure airport field | Invalid text is entered |
| 4 | Click outside the field or press Tab | Focus moves away from field |
| 5 | Enter "New York (JFK)" as destination | Destination is entered |
| 6 | Select a valid future date | Date is selected |
| 7 | Click Search button | Button is clicked |
| 8 | Observe system response | Error message appears OR search is blocked OR no results shown |
| 9 | Verify error message (if shown) | Error message is clear and actionable |
| 10 | Verify form is still editable | User can correct and retry search |

### Test Data

| Field | Value |
|-------|-------|
| Trip Type | One-way |
| Departure Airport | XYZ123 (Invalid) |
| Destination Airport | New York (JFK) |
| Departure Date | Current date + 7 days |

### Expected Results Summary
✓ System rejects invalid airport code
✓ Error message or validation is triggered
✓ User can correct and retry

---

## TC005 - Date Validation: Past Date Prevention

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-SCRUM-6-005 |
| **Title** | System prevents selection of past departure dates |
| **Objective** | Verify date picker blocks past dates from being selected |
| **Type** | Negative |
| **Priority** | Critical |
| **Preconditions** | <ul><li>Flight search page is loaded</li><li>Today's date is known and accessible</li></ul> |

### Test Steps

| Step No | Action | Expected Result |
|---------|--------|-----------------|
| 1 | Open flight search page | Page loads successfully |
| 2 | Select "One-way" as trip type | Trip type is selected |
| 3 | Enter valid departure airport | Airport is entered and selected |
| 4 | Enter valid destination airport | Destination is entered and selected |
| 5 | Click on departure date picker | Calendar widget opens |
| 6 | Locate dates from previous month/week | Past dates are visible in calendar |
| 7 | Attempt to click on a past date (e.g., yesterday) | Past dates are disabled/greyed out (if visible) |
| 8 | Verify past dates cannot be selected | Either past dates are disabled or selection is rejected |
| 9 | Observe any error message or visual indication | Clear indication that past dates are not allowed |
| 10 | Select a valid future date | Future date is accepted |
| 11 | Verify date is populated correctly | Future date shows in field |

### Test Data

| Field | Value |
|-------|-------|
| Trip Type | One-way |
| Departure Airport | Toronto (YYZ) |
| Destination Airport | New York (JFK) |
| Attempted Departure Date | Yesterday or past date |

### Expected Results Summary
✓ Past dates are prevented from selection
✓ System blocks/disables past dates in calendar
✓ User is guided toward selecting future dates

---

## TC006 - Input Validation: Same Departure and Destination

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-SCRUM-6-006 |
| **Title** | System prevents search with identical departure and destination airports |
| **Objective** | Verify validation when same airport is entered for both departure and destination |
| **Type** | Negative |
| **Priority** | High |
| **Preconditions** | <ul><li>Flight search page is loaded and ready for input</li></ul> |

### Test Steps

| Step No | Action | Expected Result |
|---------|--------|-----------------|
| 1 | Open flight search page | Page loads successfully |
| 2 | Select "One-way" as trip type | Trip type is selected |
| 3 | Enter "Toronto (YYZ)" in departure airport field | Departure airport is set |
| 4 | Enter "Toronto (YYZ)" in destination airport field | Destination field has same airport |
| 5 | Select a valid future date | Departure date is selected |
| 6 | Click Search button | Button is clicked |
| 7 | Observe system response | Error message appears or search is blocked |
| 8 | Verify error message clarity | Message indicates that airports must be different |
| 9 | Verify form remains functional | User can modify and retry |
| 10 | Change destination to different airport | User can correct the issue |

### Test Data

| Field | Value |
|-------|-------|
| Trip Type | One-way |
| Departure Airport | Toronto (YYZ) |
| Destination Airport | Toronto (YYZ) (Same) |
| Departure Date | Current date + 5 days |

### Expected Results Summary
✓ System prevents same airport selection
✓ Clear validation error is shown
✓ User can modify and retry search

---

## TC007 - UI Element Visibility and Accessibility

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-SCRUM-6-007 |
| **Title** | All form elements are visible and accessible on flight search page |
| **Objective** | Verify that all required form elements are visible and properly rendered |
| **Type** | Edge Case / UI |
| **Priority** | High |
| **Preconditions** | <ul><li>Flight search page is loaded</li><li>Browser window is at standard resolution (1024x768 or higher)</li></ul> |

### Test Steps

| Step No | Action | Expected Result |
|---------|--------|-----------------|
| 1 | Navigate to flight search page | Page loads completely |
| 2 | Verify trip type selector is visible | Dropdown/button for trip type is displayed |
| 3 | Verify trip type selector is accessible | Selector can be interacted with (clicked) |
| 4 | Verify departure airport input field is visible | Input field is displayed on page |
| 5 | Verify destination airport input field is visible | Input field is displayed on page |
| 6 | Verify departure date picker is visible | Date picker button/field is displayed |
| 7 | Verify return date picker is visible (for round-trip) | Return date picker appears when round-trip is selected |
| 8 | Verify passenger count selector is visible | Passenger selector is displayed |
| 9 | Verify Search button is visible | Button is clearly visible |
| 10 | Verify Search button is enabled (not disabled) | Button is in active state |
| 11 | Test keyboard navigation through form | All fields can be reached via Tab key |
| 12 | Test form field labels are clear | Labels are readable and descriptive |

### Test Data

| Field | Value |
|-------|-------|
| Browser Resolution | 1024x768 or higher |
| Accessibility Test | Keyboard navigation, Tab order |

### Expected Results Summary
✓ All form elements are visible
✓ All elements are interactive and accessible
✓ Keyboard navigation works properly

---

## TC008 - Date Logic: Return Date Must Be After Departure Date

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-SCRUM-6-008 |
| **Title** | System enforces return date after departure date for round-trip |
| **Objective** | Verify that return date cannot be before or equal to departure date |
| **Type** | Edge Case |
| **Priority** | Critical |
| **Preconditions** | <ul><li>Flight search page is loaded</li><li>Round-trip option is available</li></ul> |

### Test Steps

| Step No | Action | Expected Result |
|---------|--------|-----------------|
| 1 | Navigate to flight search page | Page loads successfully |
| 2 | Select "Round-trip" as trip type | Round-trip is selected |
| 3 | Enter "Toronto (YYZ)" as departure airport | Departure airport is set |
| 4 | Enter "Vancouver (YVR)" as destination airport | Destination airport is set |
| 5 | Select a future date as departure date (e.g., June 15) | Departure date is selected |
| 6 | Click on return date picker | Return date calendar opens |
| 7 | Observe dates available in calendar | Dates before/on departure date are disabled or highlighted differently |
| 8 | Attempt to select same date as departure | Return date cannot be set to same date or earlier |
| 9 | Attempt to select date before departure | Return date cannot be set to earlier date |
| 10 | Verify error message if date is selected incorrectly | Clear message about valid date range |
| 11 | Select valid return date (after departure, e.g., June 18) | Return date is accepted |
| 12 | Verify dates are now properly set | Both dates are displayed correctly |

### Test Data

| Field | Value |
|-------|-------|
| Trip Type | Round-trip |
| Departure Airport | Toronto (YYZ) |
| Destination Airport | Vancouver (YVR) |
| Departure Date | Current date + 7 days |
| Invalid Return Date | Same as departure or earlier |
| Valid Return Date | Departure date + 3 days |

### Expected Results Summary
✓ System prevents invalid return dates
✓ Return date must be after departure date
✓ Clear validation guidance provided

---

## TC009 - Result Accuracy: Flight Information Consistency

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-SCRUM-6-009 |
| **Title** | Flight results display accurate and consistent information |
| **Objective** | Verify that search results show accurate pricing, times, and duration information |
| **Type** | Positive / Validation |
| **Priority** | Critical |
| **Preconditions** | <ul><li>Successful flight search has been completed</li><li>Results page is displayed with at least one flight option</li></ul> |

### Test Steps

| Step No | Action | Expected Result |
|---------|--------|-----------------|
| 1 | Perform a successful flight search | Results page loads with flight options |
| 2 | Locate first flight result on page | Flight card/row is visible |
| 3 | Verify departure time is displayed | Departure time shown in HH:MM format |
| 4 | Verify arrival time is displayed | Arrival time shown in HH:MM format |
| 5 | Verify duration is displayed | Duration shown (e.g., 5h 30m) |
| 6 | Verify price is displayed | Price shown with currency symbol (e.g., $XXX.XX) |
| 7 | Manually calculate expected duration | Calculate: Arrival time - Departure time |
| 8 | Compare displayed duration with calculated duration | Durations match (accounting for time zones) |
| 9 | Verify second flight result if available | All fields present for second flight |
| 10 | Compare prices between results | Prices are displayed consistently |
| 11 | Verify prices are in correct format | Currency format is consistent across results |
| 12 | Check for any display anomalies | No overlapping text, truncation, or formatting issues |

### Test Data

| Field | Value |
|-------|-------|
| Trip Type | One-way |
| Departure Airport | Toronto (YYZ) |
| Destination Airport | New York (JFK) |
| Departure Date | Current date + 7 days |
| Validation Method | Manual calculation and visual inspection |

### Expected Results Summary
✓ All flight information is accurate
✓ Times and duration calculations are correct
✓ Pricing is consistent and properly formatted
✓ No display anomalies or errors

---

## TC010 - Airport Autocomplete Functionality

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-SCRUM-6-010 |
| **Title** | Airport selection autocomplete feature works correctly |
| **Objective** | Verify that autocomplete suggestions appear and function properly when typing airport names |
| **Type** | Edge Case / Functionality |
| **Priority** | Medium |
| **Preconditions** | <ul><li>Flight search page is loaded</li><li>Departure airport field is empty</li></ul> |

### Test Steps

| Step No | Action | Expected Result |
|---------|--------|-----------------|
| 1 | Click on departure airport input field | Field is focused and ready for input |
| 2 | Type "Tor" slowly | Characters are entered into field |
| 3 | Wait 1-2 seconds for autocomplete | Suggestion dropdown appears |
| 4 | Observe suggestions displayed | "Toronto (YYZ)" or similar suggestions appear |
| 5 | Verify multiple suggestions if applicable | List of relevant airports is shown |
| 6 | Verify suggestions are filtered by input | Suggestions match the typed characters |
| 7 | Click on "Toronto (YYZ)" suggestion | Suggestion is selected and populated in field |
| 8 | Verify field is populated correctly | "Toronto (YYZ)" is now in the field |
| 9 | Test with another airport name (e.g., "New") | Autocomplete works for destination field too |
| 10 | Verify autocomplete appears for destination | Suggestions filtered and displayed correctly |
| 11 | Test with partial code (e.g., "Y") | Suggestions still appear and are relevant |
| 12 | Verify user can manually type complete code | If "YYZ" is typed, it's accepted without autocomplete |

### Test Data

| Field | Value |
|-------|-------|
| Departure Partial Input | "Tor" |
| Departure Full Input | "Toronto (YYZ)" |
| Destination Partial Input | "New" |
| Destination Full Input | "New York (JFK)" |
| Alternative Input | "Y", "YYZ" |

### Expected Results Summary
✓ Autocomplete suggestions appear after typing
✓ Suggestions are filtered based on input
✓ User can select from suggestions
✓ Field is correctly populated after selection

---

## Test Case Summary Table

| TC ID | Title | Type | Priority | Status |
|-------|-------|------|----------|--------|
| TC-SCRUM-6-001 | One-Way Flight Search | Positive | Critical | Pending |
| TC-SCRUM-6-002 | Round-Trip Flight Search | Positive | Critical | Pending |
| TC-SCRUM-6-003 | Multiple Passengers Search | Positive | High | Pending |
| TC-SCRUM-6-004 | Invalid Airport Handling | Negative | High | Pending |
| TC-SCRUM-6-005 | Past Date Prevention | Negative | Critical | Pending |
| TC-SCRUM-6-006 | Same Airport Validation | Negative | High | Pending |
| TC-SCRUM-6-007 | UI Element Visibility | Edge Case | High | Pending |
| TC-SCRUM-6-008 | Return Date Validation | Edge Case | Critical | Pending |
| TC-SCRUM-6-009 | Result Accuracy | Validation | Critical | Pending |
| TC-SCRUM-6-010 | Autocomplete Functionality | Edge Case | Medium | Pending |

---

## Notes

- All test cases are designed to be automation-ready with Playwright
- Test cases reference actual Air Canada website (production URL)
- Test data uses real airport codes (YYZ=Toronto, JFK=New York, YVR=Vancouver, MIA=Miami)
- Tests should be executed in multiple browsers (Chrome, Firefox, Safari)
- Screenshots should be captured for any failed assertions
- Performance metrics (response time) should be logged

