# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SCRUM-6\flight-search.spec.ts >> SCRUM-6: Flight Search - Air Canada >> TC002 - Round-Trip Flight Search with Multiple Segments
- Location: tests\SCRUM-6\flight-search.spec.ts:67:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('[data-testid="departure-airport"], [placeholder*="departure"], [placeholder*="From"], input[name="departureAirport"]').first()

```

```
Error: browserContext.close: Test ended.
Browser logs:

[pid=10428][err] [0608/182338.931:INFO:CONSOLE:1] "%cINFO 
[pid=10428][err]      font-weight: 600;
[pid=10428][err]      font-size: 12px;
[pid=10428][err]    color: #005078; Asset path prefix set as https://kilo-content.aircanada.com/ac/applications/achomebeta/content/1.0.2248/assets/", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=10428][err] [0608/182339.364:INFO:CONSOLE:1] "%cSUCCESS 
[pid=10428][err]      font-weight: 600;
[pid=10428][err]      font-size: 12px;
[pid=10428][err]    color: #108C0C; AWS Amplify configured successfully", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=10428][err] [0608/182339.445:INFO:CONSOLE:1] "%cINFO 
[pid=10428][err]      font-weight: 600;
[pid=10428][err]      font-size: 12px;
[pid=10428][err]    color: #005078; No active logged in user session detected. User treated as guest.", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=10428][err] [0608/182339.803:INFO:CONSOLE:1] "%cSUCCESS 
[pid=10428][err]      font-weight: 600;
[pid=10428][err]      font-size: 12px;
[pid=10428][err]    color: #108C0C; Adobe Launch loaded successfully", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=10428][err] [0608/182340.012:INFO:CONSOLE:1] "%cINFO 
[pid=10428][err]      font-weight: 600;
[pid=10428][err]      font-size: 12px;
[pid=10428][err]    color: #005078; Asset path prefix set as https://kilo-content.aircanada.com/ac/applications/achomebeta/content/1.0.2248/assets/", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=10428][err] [0608/182340.518:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.518:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.518:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.520:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.520:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.520:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.520:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.520:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.520:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.520:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.520:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.520:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.520:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.520:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.520:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.522:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.522:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.522:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.522:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.522:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.522:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182340.522:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.523:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.523:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.525:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.525:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.525:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.525:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.525:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.525:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.525:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.525:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.525:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.525:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.525:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.525:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.527:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.527:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.527:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.527:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.528:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.528:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.528:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.528:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182341.590:ERROR:content\public\browser\web_contents_delegate.cc:309] WebContentsDelegate::CheckMediaAccessPermission: Not supported.
[pid=10428][err] [0608/182341.590:ERROR:content\public\browser\web_contents_delegate.cc:309] WebContentsDelegate::CheckMediaAccessPermission: Not supported.
[pid=10428][err] [0608/182341.598:INFO:CONSOLE:1] "Error", source: https://www.aircanada.com/59RZq6/GzS/F4K/b0YNz2JI/ch5OcrD7/Bw0MAg/JDhMNgV/PdRd5?v=5d4bfda4-ef74-bc12-766c-980e72e317c5 (1)
[pid=10428][err] [0608/182341.656:INFO:CONSOLE:1] "[object Object]", source: https://www.aircanada.com/59RZq6/GzS/F4K/b0YNz2JI/ch5OcrD7/Bw0MAg/JDhMNgV/PdRd5?v=5d4bfda4-ef74-bc12-766c-980e72e317c5 (1)
[pid=10428][err] [0608/182343.493:INFO:CONSOLE:1] "%cSUCCESS 
[pid=10428][err]      font-weight: 600;
[pid=10428][err]      font-size: 12px;
[pid=10428][err]    color: #108C0C; Google AD Manager loaded successfully", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=10428][err] [0608/182343.675:INFO:CONSOLE:1] "%cSUCCESS 
[pid=10428][err]      font-weight: 600;
[pid=10428][err]      font-size: 12px;
[pid=10428][err]    color: #108C0C; Google Tag Manager loaded successfully", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=10428][err] [0608/182343.682:INFO:CONSOLE:1032] "OTAC Custom Tag: fullurl:  https://www.aircanada.com/home/ca/en/aco/flights", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182343.682:INFO:CONSOLE:1032] "OTAC Custom Tag: userstate : guest", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182343.682:INFO:CONSOLE:1032] "OTAC Custom Tag: continentCode : non eu", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182343.682:INFO:CONSOLE:1032] "OTAC Custom Tag: Law25", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182343.689:INFO:CONSOLE:1032] "OTAC Custom Tag: Setting consentGroups  ,C0003,C0001,C0004,C0002,", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182343.713:INFO:CONSOLE:1032] "OTAC Custom Tag: fullurl:  https://www.aircanada.com/home/ca/en/aco/flights", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182343.713:INFO:CONSOLE:1032] "OTAC Custom Tag: userstate : guest", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182343.713:INFO:CONSOLE:1032] "OTAC Custom Tag: continentCode : non eu", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182343.713:INFO:CONSOLE:1032] "OTAC Custom Tag: Law25", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182343.722:INFO:CONSOLE:1032] "OTAC Custom Tag: Setting consentGroups  ,C0003,C0001,C0004,C0002,", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182343.738:INFO:CONSOLE:1032] "OTAC Custom Tag: fullurl:  https://www.aircanada.com/home/ca/en/aco/flights", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182343.742:INFO:CONSOLE:1032] "OTAC Custom Tag: userstate : guest", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182343.742:INFO:CONSOLE:1032] "OTAC Custom Tag: continentCode : non eu", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182343.742:INFO:CONSOLE:1032] "OTAC Custom Tag: Law25", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182343.742:INFO:CONSOLE:1032] "OTAC Custom Tag: Setting consentGroups  ,C0003,C0001,C0004,C0002,", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182350.332:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182350.332:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182350.334:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182350.334:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182350.334:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182350.334:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182350.334:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182350.334:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182350.959:INFO:CONSOLE:1032] "OTAC Custom Tag: fullurl:  https://www.aircanada.com/home/ca/en/aco/flights", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182350.959:INFO:CONSOLE:1032] "OTAC Custom Tag: userstate : guest", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182350.959:INFO:CONSOLE:1032] "OTAC Custom Tag: continentCode : non eu", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182350.959:INFO:CONSOLE:1032] "OTAC Custom Tag: Law25", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182350.962:INFO:CONSOLE:1032] "OTAC Custom Tag: Setting consentGroups  ,C0003,C0001,C0004,C0002,", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=10428][err] [0608/182351.082:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=10428][err] [0608/182351.088:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=10428][err] [0608/182351.088:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=10428][err] [0608/182351.088:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=10428][err] [0608/182351.088:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=10428][err] [0608/182351.088:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=10428][err] [0608/182351.088:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=10428][err] [0608/182351.088:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=10428][err] [0608/182351.152:INFO:CONSOLE:5] "OnBefore event inside try/catch", source: https://assets.adobedtm.com/14307738146c/2d72065f81e7/launch-9e3b3ffc9904.min.js (5)
[pid=10428][err] [0608/182351.152:INFO:CONSOLE:5] "OnBefore event inside try/catch", source: https://assets.adobedtm.com/14307738146c/2d72065f81e7/launch-9e3b3ffc9904.min.js (5)
[pid=10428][err] [0608/182351.152:INFO:CONSOLE:5] "OnBefore event inside try/catch", source: https://assets.adobedtm.com/14307738146c/2d72065f81e7/launch-9e3b3ffc9904.min.js (5)
[pid=10428][err] [0608/182351.152:INFO:CONSOLE:5] "OnBefore event inside try/catch", source: https://assets.adobedtm.com/14307738146c/2d72065f81e7/launch-9e3b3ffc9904.min.js (5)
[pid=10428][err] [0608/182352.828:INFO:CONSOLE:3] "MR enabled.", source:  (3)
[pid=10428][err] [0608/182352.828:INFO:CONSOLE:3] "New ATC flow enabled.", source:  (3)
[pid=10428][err] [0608/182352.902:INFO:CONSOLE:75] "-- FI Banner inserted!", source:  (75)
[pid=10428][err] [0608/182352.947:INFO:CONSOLE:5] "OnBefore event inside try/catch", source: https://assets.adobedtm.com/14307738146c/2d72065f81e7/launch-9e3b3ffc9904.min.js (5)
[pid=10428][err] [0608/182353.312:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Medium.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.316:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.316:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Medium.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.316:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.316:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Medium.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Medium.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Medium.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Medium.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Medium.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Medium.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Medium.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Medium.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Medium.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Medium.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Medium.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.335:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=10428][err] [0608/182353.408:INFO:CONSOLE:5] "OnBefore event inside try/catch", source: https://assets.adobedtm.com/14307738146c/2d72065f81e7/launch-9e3b3ffc9904.min.js (5)
[pid=10428][err] [0608/182353.904:INFO:CONSOLE:3] "MR enabled.", source:  (3)
[pid=10428][err] [0608/182353.904:INFO:CONSOLE:3] "New ATC flow enabled.", source:  (3)
[pid=10428][err] [0608/182353.912:INFO:CONSOLE:5] "OnBefore event inside try/catch", source: https://assets.adobedtm.com/14307738146c/2d72065f81e7/launch-9e3b3ffc9904.min.js (5)
```