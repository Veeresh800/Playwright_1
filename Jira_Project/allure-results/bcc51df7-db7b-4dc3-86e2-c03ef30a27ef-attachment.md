# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SCRUM-6\flight-search.spec.ts >> SCRUM-6: Flight Search - Air Canada >> TC008 - Date Logic: Return Date Must Be After Departure Date
- Location: tests\SCRUM-6\flight-search.spec.ts:290:7

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('form, [role="search"], .flight-search-form, input[name*="departure"], input[placeholder*="From"], input[placeholder*="Where"]').first() to be visible

```

```
Error: browserContext.close: Protocol error (Target.disposeBrowserContext): Failed to find context with id 6DDC2B6C458A790C0924510295EFBDAB
```