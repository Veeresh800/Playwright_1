Feature: Flight Search - Air Canada Website
  As a user
  I want to search for flights on the Air Canada website
  So that I can find and book suitable flights

  Background:
    Given the user navigates to Air Canada flights page
    And the page loads successfully

  @positive @acceptance-criteria
  Scenario: TC001 - User selects one-way trip and searches for flights
    Given the user is on the flight search page
    When the user selects "One-way" as trip type
    And the user enters "Toronto (YYZ)" as departure airport
    And the user enters "New York (JFK)" as destination airport
    And the user selects a future departure date
    And the user clicks the Search button
    Then the flight search results page should load
    And the results should display flight options
    And each flight should show Departure time
    And each flight should show Arrival time
    And each flight should show Duration
    And each flight should show Price

  @positive @acceptance-criteria
  Scenario: TC002 - User searches with round trip option
    Given the user is on the flight search page
    When the user selects "Round-trip" as trip type
    And the user enters "Toronto (YYZ)" as departure airport
    And the user enters "Vancouver (YVR)" as destination airport
    And the user selects a future departure date
    And the user selects a return date after the departure date
    And the user clicks the Search button
    Then the flight search results page should load
    And the results should display round-trip flight options with outbound flights
    And the results should display return flights
    And each flight should display complete flight information including:
      | Field            |
      | Departure time   |
      | Arrival time     |
      | Duration         |
      | Price            |

  @positive @acceptance-criteria
  Scenario: TC003 - User searches with multiple travelers
    Given the user is on the flight search page
    When the user selects "One-way" as trip type
    And the user enters "Toronto (YYZ)" as departure airport
    And the user enters "Miami (MIA)" as destination airport
    And the user selects a future departure date
    And the user selects "2" as number of passengers
    And the user clicks the Search button
    Then the flight search results page should load
    And the results should display flight options for 2 passengers
    And each flight should show total price for all passengers

  @negative @validation
  Scenario: TC004 - User attempts search with invalid departure airport
    Given the user is on the flight search page
    When the user enters "XYZ123" as departure airport
    And the user enters "New York (JFK)" as destination airport
    And the user selects a future departure date
    And the user clicks the Search button
    Then an error message should be displayed
    Or no results should be shown

  @negative @validation
  Scenario: TC005 - User attempts to select a past date for departure
    Given the user is on the flight search page
    When the user selects "One-way" as trip type
    And the user enters "Toronto (YYZ)" as departure airport
    And the user enters "New York (JFK)" as destination airport
    And the user attempts to select a past departure date
    Then the date field should not accept the past date
    Or an error message should be displayed

  @negative @validation
  Scenario: TC006 - User attempts search with same departure and destination
    Given the user is on the flight search page
    When the user selects "One-way" as trip type
    And the user enters "Toronto (YYZ)" as both departure and destination airport
    And the user selects a future departure date
    And the user clicks the Search button
    Then an error message should be displayed indicating invalid route
    Or the search should be blocked

  @edge-case @ui
  Scenario: TC007 - All form elements are visible and accessible
    Given the user is on the flight search page
    Then the trip type selector should be visible
    And the departure airport input field should be visible
    And the destination airport input field should be visible
    And the departure date picker should be visible
    And the return date picker should be visible or hidden based on trip type
    And the passenger count selector should be visible
    And the Search button should be visible and enabled

  @edge-case @date-validation
  Scenario: TC008 - Return date must be after departure date in round-trip
    Given the user is on the flight search page
    When the user selects "Round-trip" as trip type
    And the user enters "Toronto (YYZ)" as departure airport
    And the user enters "Vancouver (YVR)" as destination airport
    And the user selects a future departure date
    And the user attempts to select a return date before the departure date
    Then the return date should not be accepted
    Or an error message should be displayed

  @positive @result-validation
  Scenario: TC009 - Flight results display accurate pricing information
    Given the user has completed a successful flight search
    When the search results are displayed
    Then each flight result should show:
      | Information      | Requirement      |
      | Departure time   | Specific time    |
      | Arrival time     | Specific time    |
      | Duration         | Calculated time  |
      | Price            | Currency format  |
    And the prices should be consistent across all results

  @edge-case @form-elements
  Scenario: TC010 - Airport selection autocomplete functionality
    Given the user is on the flight search page
    When the user starts typing "Tor" in the departure airport field
    Then autocomplete suggestions should appear
    And "Toronto (YYZ)" should be in the suggestions
    And the user should be able to select from suggestions
