On this page

Playwright has **experimental** support for Electron automation. You can access electron namespace via:

```
const { _electron } = require('playwright');
```

An example of the Electron automation script would be:

```
const { _electron: electron } = require('playwright');(async () => {  // Launch Electron app.  const electronApp = await electron.launch({ args: ['main.js'] });  // Evaluation expression in the Electron context.  const appPath = await electronApp.evaluate(async ({ app }) => {    // This runs in the main Electron process, parameter here is always    // the result of the require('electron') in the main app script.    return app.getAppPath();  });  console.log(appPath);  // Get the first window that the app opens, wait if necessary.  const window = await electronApp.firstWindow();  // Print the title.  console.log(await window.title());  // Capture a screenshot.  await window.screenshot({ path: 'intro.png' });  // Direct Electron console to Node terminal.  window.on('console', console.log);  // Click button.  await window.click('text=Click me');  // Exit app.  await electronApp.close();})();
```

**Supported Electron versions are:**

-   v12.2.0+
-   v13.4.0+
-   v14+

**Known issues:**

If you are not able to launch Electron and it will end up in timeouts during launch, try the following:

-   Ensure that `nodeCliInspect` ([FuseV1Options.EnableNodeCliInspectArguments](https://www.electronjs.org/docs/latest/tutorial/fuses#nodecliinspect)) fuse is **not** set to `false`.

* * *

## Methods[​](#methods "Direct link to Methods")

### launch[​](#electron-launch "Direct link to launch")

Added in: v1.9 electron.launch

Launches electron application specified with the [executablePath](/docs/api/class-electron#electron-launch-option-executable-path).

**Usage**

```
await electron.launch();await electron.launch(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `acceptDownloads` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.12[#](#electron-launch-option-accept-downloads)
        
        Whether to automatically download all the attachments. Defaults to `true` where all the downloads are accepted.
        
    -   `args` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#electron-launch-option-args)
        
        Additional arguments to pass to the application when launching. You typically pass the main script name here.
        
    -   `bypassCSP` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.12[#](#electron-launch-option-bypass-csp)
        
        Toggles bypassing page's Content-Security-Policy. Defaults to `false`.
        
    -   `colorScheme` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "light" | "dark" | "no-preference" _(optional)_ Added in: v1.12[#](#electron-launch-option-color-scheme)
        
        Emulates [prefers-colors-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media feature, supported values are `'light'` and `'dark'`. See [page.emulateMedia()](/docs/api/class-page#page-emulate-media) for more details. Passing `null` resets emulation to system defaults. Defaults to `'light'`.
        
    -   `cwd` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#electron-launch-option-cwd)
        
        Current working directory to launch application from.
        
    -   `env` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#electron-launch-option-env)
        
        Specifies environment variables that will be visible to Electron. Defaults to `process.env`.
        
    -   `executablePath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#electron-launch-option-executable-path)
        
        Launches given Electron application. If not specified, launches the default Electron executable installed in this package, located at `node_modules/.bin/electron`.
        
    -   `extraHTTPHeaders` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_ Added in: v1.12[#](#electron-launch-option-extra-http-headers)
        
        An object containing additional HTTP headers to be sent with every request. Defaults to none.
        
    -   `geolocation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.12[#](#electron-launch-option-geolocation)
        
        -   `latitude` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Latitude between -90 and 90.
            
        -   `longitude` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Longitude between -180 and 180.
            
        -   `accuracy` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            Non-negative accuracy value. Defaults to `0`.
            
    -   `httpCredentials` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.12[#](#electron-launch-option-http-credentials)
        
        -   `username` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `password` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `origin` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Restrain sending http credentials on specific origin (scheme://host:port).
            
        -   `send` "unauthorized" | "always" _(optional)_
            
            This option only applies to the requests sent from corresponding [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") and does not affect requests sent from the browser. `'always'` - `Authorization` header with basic authentication credentials will be sent with the each API request. `'unauthorized` - the credentials are only sent when 401 (Unauthorized) response with `WWW-Authenticate` header is received. Defaults to `'unauthorized'`.
            
        
        Credentials for [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication). If no origin is specified, the username and password are sent to any servers upon unauthorized responses.
        
    -   `ignoreHTTPSErrors` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.12[#](#electron-launch-option-ignore-https-errors)
        
        Whether to ignore HTTPS errors when sending network requests. Defaults to `false`.
        
    -   `locale` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.12[#](#electron-launch-option-locale)
        
        Specify user locale, for example `en-GB`, `de-DE`, etc. Locale will affect `navigator.language` value, `Accept-Language` request header value as well as number and date formatting rules. Defaults to the system default locale. Learn more about emulation in our [emulation guide](/docs/emulation#locale--timezone).
        
    -   `offline` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.12[#](#electron-launch-option-offline)
        
        Whether to emulate network being offline. Defaults to `false`. Learn more about [network emulation](/docs/emulation#offline).
        
    -   `recordHar` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.12[#](#electron-launch-option-record-har)
        
        -   `omitContent` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_
            
            Optional setting to control whether to omit request content from the HAR. Defaults to `false`. Deprecated, use `content` policy instead.
            
        -   `content` "omit" | "embed" | "attach" _(optional)_
            
            Optional setting to control resource content management. If `omit` is specified, content is not persisted. If `attach` is specified, resources are persisted as separate files or entries in the ZIP archive. If `embed` is specified, content is stored inline the HAR file as per HAR specification. Defaults to `attach` for `.zip` output files and to `embed` for all other file extensions.
            
        -   `path` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Path on the filesystem to write the HAR file to. If the file name ends with `.zip`, `content: 'attach'` is used by default.
            
        -   `mode` "full" | "minimal" _(optional)_
            
            When set to `minimal`, only record information necessary for routing from HAR. This omits sizes, timing, page, cookies, security and other types of HAR information that are not used when replaying from HAR. Defaults to `full`.
            
        -   `urlFilter` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") _(optional)_
            
            A glob or regex pattern to filter requests that are stored in the HAR. When a [baseURL](/docs/api/class-browser#browser-new-context-option-base-url) via the context options was provided and the passed URL is a path, it gets merged via the [`new URL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) constructor. Defaults to none.
            
        
        Enables [HAR](http://www.softwareishard.com/blog/har-12-spec) recording for all pages into `recordHar.path` file. If not specified, the HAR is not recorded. Make sure to await [browserContext.close()](/docs/api/class-browsercontext#browser-context-close) for the HAR to be saved.
        
    -   `recordVideo` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.12[#](#electron-launch-option-record-video)
        
        -   `dir` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Path to the directory to put videos into.
            
        -   `size` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
            
            -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
                
                Video frame width.
                
            -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
                
                Video frame height.
                
            
            Optional dimensions of the recorded videos. If not specified the size will be equal to `viewport` scaled down to fit into 800x800. If `viewport` is not configured explicitly the video size defaults to 800x450. Actual picture of each page will be scaled down if necessary to fit the specified size.
            
        
        Enables video recording for all pages into `recordVideo.dir` directory. If not specified videos are not recorded. Make sure to await [browserContext.close()](/docs/api/class-browsercontext#browser-context-close) for videos to be saved.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.15[#](#electron-launch-option-timeout)
        
        Maximum time in milliseconds to wait for the application to start. Defaults to `30000` (30 seconds). Pass `0` to disable timeout.
        
    -   `timezoneId` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.12[#](#electron-launch-option-timezone-id)
        
        Changes the timezone of the context. See [ICU's metaZones.txt](https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1) for a list of supported timezone IDs. Defaults to the system timezone.
        
    -   `tracesDir` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.36[#](#electron-launch-option-traces-dir)
        
        If specified, traces are saved into this directory.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[ElectronApplication](/docs/api/class-electronapplication "ElectronApplication")\>[#](#electron-launch-return)
