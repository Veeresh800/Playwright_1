# SCRUM-6 Test Plan: Flight Search - Air Canada Website

## 1. Test Plan Overview

| Attribute | Value |
|-----------|-------|
| **Test Plan ID** | SCRUM-6-TEST-PLAN |
| **Story ID** | SCRUM-6 |
| **Story Name** | JiraStory1 - Flight Search |
| **Epic** | SCRUM-7 |
| **Sprint** | Sprint 1 |
| **Application URL** | https://www.aircanada.com/home/ca/en/aco/flights |
| **Document Version** | 1.0 |
| **Created Date** | 2026-06-08 |
| **Last Updated** | 2026-06-08 |

---

## 2. Test Objective

To validate that users can successfully search for flights on the Air Canada website by selecting trip type, entering valid airports, selecting departure dates, and viewing comprehensive flight results with accurate pricing and timing information.

---

## 3. Scope Definition

### In Scope
- Trip type selection (One-way, Round-trip, Multi-city)
- Departure airport entry and selection
- Destination airport entry and selection
- Departure date selection (future dates only)
- Return date selection (for round-trip)
- Number of passengers selection
- Search button functionality
- Flight results display with all required fields (Departure time, Arrival time, Duration, Price)
- Form validation and error handling
- Airport autocomplete functionality
- Date picker functionality
- Result accuracy and consistency

### Out of Scope
- Payment processing
- Seat selection
- Baggage selection
- Hotel or car rental booking
- Loyalty program integration
- Multi-language testing
- Mobile-specific testing (desktop only for initial scope)
- Performance/Load testing
- Third-party API integrations

---

## 4. Assumptions

1. The Air Canada flights website is publicly accessible and stable during test execution
2. Browser compatibility covers Chrome, Firefox, and Safari (WebKit)
3. Test data (valid airport codes) is available and current
4. Network connectivity is stable throughout test execution
5. No major JavaScript errors occur on the page
6. The application responds to user actions within reasonable time limits (< 10 seconds)
7. Future dates are available for flight search (no blackout dates)
8. Valid airport codes include: YYZ (Toronto), JFK (New York), YVR (Vancouver), MIA (Miami)

---

## 5. Risks and Mitigation

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| Website may be unavailable during test execution | Medium | High | Use staging environment if available; implement retry logic |
| Date picker may have UI changes | Medium | Medium | Use robust selectors; maintain element locators |
| Airport data may change or be deprecated | Low | Medium | Use valid, commonly-used airport codes; validate data |
| Third-party dependencies (Google Maps for airports) may fail | Low | High | Implement fallback scenarios; mock external calls if needed |
| Browser compatibility issues | Low | Medium | Test across Chrome, Firefox, and Safari |
| Performance degradation during peak hours | Medium | Medium | Schedule tests during off-peak hours; implement waits |

---

## 6. Test Strategy

### 6.1 Manual Testing Strategy
- Exploratory testing of the flight search interface
- Usability assessment of form elements
- Cross-browser manual testing
- Accessibility testing (keyboard navigation)

### 6.2 Automation Testing Strategy
- **Framework**: Playwright (TypeScript)
- **Pattern**: Page Object Model (POM)
- **Approach**: 
  - Create reusable page objects for flight search and results
  - Generate data-driven tests for different airport combinations
  - Implement BDD with Gherkin scenarios
  - Use Allure for test reporting
  
### 6.3 Test Types Included
1. **Positive Testing**: Valid scenarios with expected successful outcomes
2. **Negative Testing**: Invalid inputs and error handling
3. **Edge Case Testing**: Boundary conditions, same airport selection, past dates
4. **Functional Testing**: Form functionality, data entry, calculations
5. **UI Testing**: Element visibility, accessibility
6. **Data Validation Testing**: Result accuracy, pricing consistency

---

## 7. Test Environment

| Component | Specification |
|-----------|---------------|
| **Application** | Air Canada Flight Search (Production URL) |
| **Base URL** | https://www.aircanada.com/home/ca/en/aco/flights |
| **Browsers** | Chrome, Firefox, Safari (WebKit) |
| **OS** | Windows 10/11, macOS, Linux |
| **Browser Versions** | Latest versions |
| **Automation Tool** | Playwright 1.40+ |
| **Language** | TypeScript |
| **Reporting** | Allure, HTML Reports |
| **Logging** | Winston Logger |

---

## 8. Entry Criteria

✅ The story has been approved and scheduled for Sprint 1  
✅ Requirements and acceptance criteria are clearly documented  
✅ Test environment is accessible and stable  
✅ Automation framework (Playwright) is set up and configured  
✅ Base page objects and utilities are available  
✅ Test data is prepared and validated  
✅ Team has access to Jira and reporting tools  

---

## 9. Exit Criteria

✅ All positive test cases executed with Pass status (100% pass rate for acceptance criteria)  
✅ All negative test cases executed and validated  
✅ All edge cases tested  
✅ Test coverage ≥ 80% of acceptance criteria  
✅ Critical and high-priority bugs identified and logged (if any)  
✅ Non-critical issues documented for future sprints  
✅ Test reports generated and attached to story  
✅ Automation scripts committed to version control  
✅ Test execution logs archived  

---

## 10. Test Deliverables

1. **Feature File**: `features/SCRUM-6.feature` - Gherkin scenarios
2. **Test Cases Document**: `specs/SCRUM-6-TEST-CASES.md` - Detailed test cases with steps
3. **Test Plan**: `specs/SCRUM-6-TEST-PLAN.md` - This document
4. **Automation Scripts**: `tests/SCRUM-6/` - Playwright test files
5. **Page Objects**: `pages/FlightSearchPage.ts`, `pages/FlightResultsPage.ts`
6. **Test Report**: HTML and Allure reports with execution results
7. **Execution Logs**: Detailed logs with timestamps and assertions

---

## 11. Test Execution Schedule

| Phase | Duration | Start Date | End Date |
|-------|----------|-----------|---------|
| Test Planning & Design | 1 day | 2026-06-08 | 2026-06-08 |
| Test Automation Development | 2 days | 2026-06-08 | 2026-06-10 |
| Test Execution (Initial Run) | 1 day | 2026-06-10 | 2026-06-11 |
| Defect Fix & Re-execution | 1 day | 2026-06-11 | 2026-06-12 |
| Final Validation | 1 day | 2026-06-12 | 2026-06-13 |

---

## 12. Test Metrics & Reporting

### Key Metrics to Track
- **Total Test Cases**: Count of all test cases
- **Pass Rate**: Percentage of passed tests
- **Fail Rate**: Percentage of failed tests
- **Execution Time**: Average time per test
- **Defect Count**: Number of bugs found
- **Defect Severity**: Critical, High, Medium, Low
- **Code Coverage**: Percentage of code paths tested

### Reporting Frequency
- **Daily Execution Reports**: End of each test day
- **Final Report**: After all tests are executed
- **Defect Report**: During test execution and final validation

---

## 13. Roles and Responsibilities

| Role | Responsibility |
|------|-----------------|
| **QA Automation Engineer** | Design and develop test automation scripts, execute tests |
| **QA Lead** | Review test plan, oversee test execution, approve deliverables |
| **Developers** | Fix identified defects, ensure application stability |
| **Product Owner** | Clarify requirements, validate acceptance criteria |

---

## 14. Tools and Technologies

- **Automation Framework**: Playwright (TypeScript)
- **BDD Framework**: Cucumber/Gherkin
- **Test Runner**: Playwright Test Runner
- **Reporting**: Allure Report, HTML Reports
- **Logging**: Winston Logger
- **Version Control**: Git
- **CI/CD**: GitHub Actions / Jenkins
- **Jira Integration**: Jira API

---

## 15. Acceptance Criteria Mapping

| Acceptance Criteria | Test Cases | Priority |
|-------------------|-----------|----------|
| User can select trip type | TC001, TC002 | Critical |
| User can enter and select departure airport | TC001, TC002, TC003 | Critical |
| User can enter and select destination airport | TC001, TC002, TC003 | Critical |
| User can select future departure date | TC001, TC002, TC003 | Critical |
| User can click Search button | TC001, TC002, TC003 | Critical |
| Flight results show Departure time | TC001, TC002, TC003, TC009 | Critical |
| Flight results show Arrival time | TC001, TC002, TC003, TC009 | Critical |
| Flight results show Duration | TC001, TC002, TC003, TC009 | Critical |
| Flight results show Price | TC001, TC002, TC003, TC009 | Critical |

---

## 16. Approval and Sign-off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| QA Lead | - | - | - |
| Product Owner | - | - | - |
| Development Lead | - | - | - |

---

## 17. Document History

| Version | Author | Date | Changes |
|---------|--------|------|---------|
| 1.0 | AI Agent | 2026-06-08 | Initial test plan creation |

