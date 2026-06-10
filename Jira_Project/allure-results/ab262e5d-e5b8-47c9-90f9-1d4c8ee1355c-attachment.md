# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SCRUM-6\flight-search.spec.ts >> SCRUM-6: Flight Search - Air Canada >> TC003 - Flight Search with Multiple Passengers
- Location: tests\SCRUM-6\flight-search.spec.ts:110:7

# Error details

```
Error: Failed to select trip type: One-way
```

```
Error: browserContext.close: Test ended.
Browser logs:

[pid=11244][err] [0609/133835.574:INFO:CONSOLE:1] "Error", source: https://www.aircanada.com/c_mmkSgu1/bKJx/S-D/X7CsuY76bjw/bkaN2XuEYJaN/JDIyY3J3Bw/Nz/E-P0FuOm1N?v=e696caff-1efe-2564-d8fb-ae4f31bb1736 (1)
[pid=11244][err] [0609/133835.639:INFO:CONSOLE:1] "[object Object]", source: https://www.aircanada.com/c_mmkSgu1/bKJx/S-D/X7CsuY76bjw/bkaN2XuEYJaN/JDIyY3J3Bw/Nz/E-P0FuOm1N?v=e696caff-1efe-2564-d8fb-ae4f31bb1736 (1)
[pid=11244][err] [0609/133836.355:INFO:CONSOLE:1] "%cAC WEB APP LOGGER 
[pid=11244][err]         font-size: 16px;
[pid=11244][err]         font-weight: 600;
[pid=11244][err]       ", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=11244][err] [0609/133836.356:INFO:CONSOLE:1] "%cINFO 
[pid=11244][err]      font-weight: 600;
[pid=11244][err]      font-size: 12px;
[pid=11244][err]    color: #005078; You are running the Air Canada Web App in PRODUCTION mode", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=11244][err] [0609/133836.356:INFO:CONSOLE:1] "%cWARNING 
[pid=11244][err]      font-weight: 600;
[pid=11244][err]      font-size: 12px;
[pid=11244][err]    color: #664B23; Logging is ENABLED", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=11244][err] [0609/133836.357:INFO:CONSOLE:1] "%cINFO 
[pid=11244][err]      font-weight: 600;
[pid=11244][err]      font-size: 12px;
[pid=11244][err]    color: #005078; Asset path prefix set as https://kilo-content.aircanada.com/ac/applications/achomebeta/content/1.0.2250/assets/", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=11244][err] [0609/133836.911:INFO:CONSOLE:1] "%cSUCCESS 
[pid=11244][err]      font-weight: 600;
[pid=11244][err]      font-size: 12px;
[pid=11244][err]    color: #108C0C; AWS Amplify configured successfully", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=11244][err] [0609/133836.973:INFO:CONSOLE:1] "%cINFO 
[pid=11244][err]      font-weight: 600;
[pid=11244][err]      font-size: 12px;
[pid=11244][err]    color: #005078; No active logged in user session detected. User treated as guest.", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=11244][err] [0609/133837.446:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133837.446:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133837.529:INFO:CONSOLE:1] "%cSUCCESS 
[pid=11244][err]      font-weight: 600;
[pid=11244][err]      font-size: 12px;
[pid=11244][err]    color: #108C0C; Adobe Launch loaded successfully", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=11244][err] [0609/133837.588:INFO:CONSOLE:1] "%cINFO 
[pid=11244][err]      font-weight: 600;
[pid=11244][err]      font-size: 12px;
[pid=11244][err]    color: #005078; Asset path prefix set as https://kilo-content.aircanada.com/ac/applications/achomebeta/content/1.0.2250/assets/", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=11244][err] [0609/133838.149:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.150:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.601:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.601:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.601:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.602:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.602:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.602:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.602:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.602:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.602:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.604:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.604:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.604:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.768:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.769:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.769:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.769:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.769:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.769:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.769:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.769:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.769:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.769:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.770:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133838.770:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133839.090:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133839.090:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133839.321:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133839.322:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133839.898:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133839.898:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133839.965:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133839.965:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133839.965:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133839.966:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133840.326:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133840.326:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133840.774:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.775:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.775:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.775:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.775:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.775:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.776:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.776:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.776:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.776:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.776:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.776:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.777:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.777:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.777:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.777:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.777:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.777:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.777:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.778:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.778:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.778:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.779:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.779:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.779:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.779:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.779:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.779:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.779:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.779:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.779:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.780:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.780:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.780:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.780:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.780:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.781:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.781:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.781:INFO:CONSOLE:7] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.781:INFO:CONSOLE:7] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js (7)
[pid=11244][err] [0609/133840.829:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133840.829:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133840.830:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133840.830:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133840.830:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133840.831:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133840.831:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133840.831:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=11244][err] [0609/133841.094:INFO:CONSOLE:1] "%cSUCCESS 
[pid=11244][err]      font-weight: 600;
[pid=11244][err]      font-size: 12px;
[pid=11244][err]    color: #108C0C; Google AD Manager loaded successfully", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=11244][err] [0609/133841.316:INFO:CONSOLE:1] "%cSUCCESS 
[pid=11244][err]      font-weight: 600;
[pid=11244][err]      font-size: 12px;
[pid=11244][err]    color: #108C0C; Google Tag Manager loaded successfully", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=11244][err] [0609/133841.334:INFO:CONSOLE:1035] "OTAC Custom Tag: fullurl:  https://www.aircanada.com/home/ca/en/aco/flights", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.335:INFO:CONSOLE:1035] "OTAC Custom Tag: userstate : guest", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.335:INFO:CONSOLE:1035] "OTAC Custom Tag: continentCode : non eu", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.336:INFO:CONSOLE:1035] "OTAC Custom Tag: Law25", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.338:INFO:CONSOLE:1035] "OTAC Custom Tag: Setting consentGroups  ,C0003,C0001,C0004,C0002,", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.391:INFO:CONSOLE:1035] "OTAC Custom Tag: fullurl:  https://www.aircanada.com/home/ca/en/aco/flights", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.392:INFO:CONSOLE:1035] "OTAC Custom Tag: userstate : guest", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.392:INFO:CONSOLE:1035] "OTAC Custom Tag: continentCode : non eu", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.392:INFO:CONSOLE:1035] "OTAC Custom Tag: Law25", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.394:INFO:CONSOLE:1035] "OTAC Custom Tag: Setting consentGroups  ,C0003,C0001,C0004,C0002,", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.427:INFO:CONSOLE:1035] "OTAC Custom Tag: fullurl:  https://www.aircanada.com/home/ca/en/aco/flights", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.428:INFO:CONSOLE:1035] "OTAC Custom Tag: userstate : guest", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.428:INFO:CONSOLE:1035] "OTAC Custom Tag: continentCode : non eu", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.428:INFO:CONSOLE:1035] "OTAC Custom Tag: Law25", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.429:INFO:CONSOLE:1035] "OTAC Custom Tag: Setting consentGroups  ,C0003,C0001,C0004,C0002,", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.443:INFO:CONSOLE:1035] "OTAC Custom Tag: fullurl:  https://www.aircanada.com/home/ca/en/aco/flights", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.444:INFO:CONSOLE:1035] "OTAC Custom Tag: userstate : guest", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.445:INFO:CONSOLE:1035] "OTAC Custom Tag: continentCode : non eu", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.445:INFO:CONSOLE:1035] "OTAC Custom Tag: Law25", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
[pid=11244][err] [0609/133841.448:INFO:CONSOLE:1035] "OTAC Custom Tag: Setting consentGroups  ,C0003,C0001,C0004,C0002,", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1035)
```