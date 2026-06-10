# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SCRUM-6\flight-search.spec.ts >> SCRUM-6: Flight Search - Air Canada >> TC002 - Round-Trip Flight Search with Multiple Segments
- Location: tests\SCRUM-6\flight-search.spec.ts:67:7

# Error details

```
Error: Failed to select trip type: Round-trip
```

```
Error: browserContext.close: Test ended.
Browser logs:

<launching> C:\Users\2000192702\AppData\Local\ms-playwright\chromium_headless_shell-1223\chrome-headless-shell-win64\chrome-headless-shell.exe --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,BoundaryEventDispatchTracksNodeRemoval,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=C:\Users\200019~1\AppData\Local\Temp\playwright_chromiumdev_profile-DR9uQx --remote-debugging-pipe --no-startup-window
<launched> pid=17720
[pid=17720][err] [0609/133835.265:ERROR:content\public\browser\web_contents_delegate.cc:309] WebContentsDelegate::CheckMediaAccessPermission: Not supported.
[pid=17720][err] [0609/133835.266:ERROR:content\public\browser\web_contents_delegate.cc:309] WebContentsDelegate::CheckMediaAccessPermission: Not supported.
[pid=17720][err] [0609/133835.523:INFO:CONSOLE:1] "Error", source: https://www.aircanada.com/c_mmkSgu1/bKJx/S-D/X7CsuY76bjw/bkaN2XuEYJaN/JDIyY3J3Bw/Nz/E-P0FuOm1N?v=d9a16314-c1a3-b66e-1ea0-87bfe9921736 (1)
[pid=17720][err] [0609/133835.673:INFO:CONSOLE:1] "[object Object]", source: https://www.aircanada.com/c_mmkSgu1/bKJx/S-D/X7CsuY76bjw/bkaN2XuEYJaN/JDIyY3J3Bw/Nz/E-P0FuOm1N?v=d9a16314-c1a3-b66e-1ea0-87bfe9921736 (1)
[pid=17720][err] [0609/133836.365:INFO:CONSOLE:1] "%cAC WEB APP LOGGER 
[pid=17720][err]         font-size: 16px;
[pid=17720][err]         font-weight: 600;
[pid=17720][err]       ", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=17720][err] [0609/133836.365:INFO:CONSOLE:1] "%cINFO 
[pid=17720][err]      font-weight: 600;
[pid=17720][err]      font-size: 12px;
[pid=17720][err]    color: #005078; You are running the Air Canada Web App in PRODUCTION mode", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=17720][err] [0609/133836.365:INFO:CONSOLE:1] "%cWARNING 
[pid=17720][err]      font-weight: 600;
[pid=17720][err]      font-size: 12px;
[pid=17720][err]    color: #664B23; Logging is ENABLED", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=17720][err] [0609/133836.366:INFO:CONSOLE:1] "%cINFO 
[pid=17720][err]      font-weight: 600;
[pid=17720][err]      font-size: 12px;
[pid=17720][err]    color: #005078; Asset path prefix set as https://kilo-content.aircanada.com/ac/applications/achomebeta/content/1.0.2250/assets/", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=17720][err] [0609/133837.674:INFO:CONSOLE:1] "%cSUCCESS 
[pid=17720][err]      font-weight: 600;
[pid=17720][err]      font-size: 12px;
[pid=17720][err]    color: #108C0C; AWS Amplify configured successfully", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=17720][err] [0609/133837.752:INFO:CONSOLE:1] "%cINFO 
[pid=17720][err]      font-weight: 600;
[pid=17720][err]      font-size: 12px;
[pid=17720][err]    color: #005078; No active logged in user session detected. User treated as guest.", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=17720][err] [0609/133838.170:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133838.170:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133838.486:INFO:CONSOLE:1] "%cINFO 
[pid=17720][err]      font-weight: 600;
[pid=17720][err]      font-size: 12px;
[pid=17720][err]    color: #005078; Asset path prefix set as https://kilo-content.aircanada.com/ac/applications/achomebeta/content/1.0.2250/assets/", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=17720][err] [0609/133839.235:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.237:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.558:INFO:CONSOLE:1] "%cSUCCESS 
[pid=17720][err]      font-weight: 600;
[pid=17720][err]      font-size: 12px;
[pid=17720][err]    color: #108C0C; Adobe Launch loaded successfully", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=17720][err] [0609/133839.837:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.838:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.838:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.838:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.838:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.838:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.838:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.838:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.838:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.840:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.840:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.840:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.863:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.864:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.864:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.864:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.864:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.865:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.865:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.865:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.865:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.866:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.866:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133839.866:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133840.295:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133840.296:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133840.530:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133840.530:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133840.903:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133840.904:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133841.159:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133841.159:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133841.159:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Bold.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133841.160:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133841.479:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133841.479:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133841.886:INFO:CONSOLE:1] "%cSUCCESS 
[pid=17720][err]      font-weight: 600;
[pid=17720][err]      font-size: 12px;
[pid=17720][err]    color: #108C0C; Google AD Manager loaded successfully", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=17720][err] [0609/133841.918:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133841.919:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133841.919:INFO:CONSOLE:0] "Failed to decode downloaded font: https://www.aircanada.com/assets/font/ac-nord/AC_Nord_Text-Regular.woff2", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133841.919:INFO:CONSOLE:0] "OTS parsing error: invalid sfntVersion: 1008813135", source: https://www.aircanada.com/home/ca/en/aco/flights (0)
[pid=17720][err] [0609/133842.068:INFO:CONSOLE:1] "%cSUCCESS 
[pid=17720][err]      font-weight: 600;
[pid=17720][err]      font-size: 12px;
[pid=17720][err]    color: #108C0C; Google Tag Manager loaded successfully", source: https://www.aircanada.com/home/main.bacfc0f09879ad3b.js (1)
[pid=17720][err] [0609/133842.085:INFO:CONSOLE:1032] "OTAC Custom Tag: fullurl:  https://www.aircanada.com/home/ca/en/aco/flights", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=17720][err] [0609/133842.085:INFO:CONSOLE:1032] "OTAC Custom Tag: userstate : guest", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=17720][err] [0609/133842.086:INFO:CONSOLE:1032] "OTAC Custom Tag: continentCode : non eu", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=17720][err] [0609/133842.086:INFO:CONSOLE:1032] "OTAC Custom Tag: Law25", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=17720][err] [0609/133842.090:INFO:CONSOLE:1032] "OTAC Custom Tag: Setting consentGroups  ,C0003,C0001,C0004,C0002,", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=17720][err] [0609/133842.158:INFO:CONSOLE:1032] "OTAC Custom Tag: fullurl:  https://www.aircanada.com/home/ca/en/aco/flights", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=17720][err] [0609/133842.159:INFO:CONSOLE:1032] "OTAC Custom Tag: userstate : guest", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=17720][err] [0609/133842.160:INFO:CONSOLE:1032] "OTAC Custom Tag: continentCode : non eu", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=17720][err] [0609/133842.160:INFO:CONSOLE:1032] "OTAC Custom Tag: Law25", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=17720][err] [0609/133842.160:INFO:CONSOLE:1032] "OTAC Custom Tag: Setting consentGroups  ,C0003,C0001,C0004,C0002,", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=17720][err] [0609/133842.203:INFO:CONSOLE:1032] "OTAC Custom Tag: fullurl:  https://www.aircanada.com/home/ca/en/aco/flights", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=17720][err] [0609/133842.203:INFO:CONSOLE:1032] "OTAC Custom Tag: userstate : guest", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=17720][err] [0609/133842.203:INFO:CONSOLE:1032] "OTAC Custom Tag: continentCode : non eu", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=17720][err] [0609/133842.205:INFO:CONSOLE:1032] "OTAC Custom Tag: Law25", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
[pid=17720][err] [0609/133842.207:INFO:CONSOLE:1032] "OTAC Custom Tag: Setting consentGroups  ,C0003,C0001,C0004,C0002,", source: https://www.googletagmanager.com/gtm.js?id=GTM-MHSCXD (1032)
```