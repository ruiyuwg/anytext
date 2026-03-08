On this page

A Browser is created via [browserType.launch()](/docs/api/class-browsertype#browser-type-launch). An example of using a [Browser](/docs/api/class-browser "Browser") to create a [Page](/docs/api/class-page "Page"):

```
const { firefox } = require('playwright');  // Or 'chromium' or 'webkit'.(async () => {  const browser = await firefox.launch();  const page = await browser.newPage();  await page.goto('https://example.com');  await browser.close();})();
```

* * *

## Methods[​](#methods "Direct link to Methods")

### browserType[​](#browser-browser-type "Direct link to browserType")

Added in: v1.23 browser.browserType

Get the browser type (chromium, firefox or webkit) that the browser belongs to.

**Usage**

```
browser.browserType();
```

**Returns**

-   [BrowserType](/docs/api/class-browsertype "BrowserType")[#](#browser-browser-type-return)

* * *

### close[​](#browser-close "Direct link to close")

Added before v1.9 browser.close

In case this browser is obtained using [browserType.launch()](/docs/api/class-browsertype#browser-type-launch), closes the browser and all of its pages (if any were opened).

In case this browser is connected to, clears all created contexts belonging to this browser and disconnects from the browser server.

note

This is similar to force-quitting the browser. To close pages gracefully and ensure you receive page close events, call [browserContext.close()](/docs/api/class-browsercontext#browser-context-close) on any [BrowserContext](/docs/api/class-browsercontext "BrowserContext") instances you explicitly created earlier using [browser.newContext()](/docs/api/class-browser#browser-new-context) **before** calling [browser.close()](/docs/api/class-browser#browser-close).

The [Browser](/docs/api/class-browser "Browser") object itself is considered to be disposed and cannot be used anymore.

**Usage**

```
await browser.close();await browser.close(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `reason` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.40[#](#browser-close-option-reason)
        
        The reason to be reported to the operations interrupted by the browser closure.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#browser-close-return)

* * *

### contexts[​](#browser-contexts "Direct link to contexts")

Added before v1.9 browser.contexts

Returns an array of all open browser contexts. In a newly created browser, this will return zero browser contexts.

**Usage**

```
const browser = await pw.webkit.launch();console.log(browser.contexts().length); // prints `0`const context = await browser.newContext();console.log(browser.contexts().length); // prints `1`
```

**Returns**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[BrowserContext](/docs/api/class-browsercontext "BrowserContext")\>[#](#browser-contexts-return)

* * *

### isConnected[​](#browser-is-connected "Direct link to isConnected")

Added before v1.9 browser.isConnected

Indicates that the browser is connected.

**Usage**

```
browser.isConnected();
```

**Returns**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#browser-is-connected-return)

* * *

### newBrowserCDPSession[​](#browser-new-browser-cdp-session "Direct link to newBrowserCDPSession")

Added in: v1.11 browser.newBrowserCDPSession

note

CDP Sessions are only supported on Chromium-based browsers.

Returns the newly created browser session.

**Usage**

```
await browser.newBrowserCDPSession();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[CDPSession](/docs/api/class-cdpsession "CDPSession")\>[#](#browser-new-browser-cdp-session-return)

* * *

### newContext[​](#browser-new-context "Direct link to newContext")

Added before v1.9 browser.newContext

Creates a new browser context. It won't share cookies/cache with other browser contexts.

note

If directly using this method to create [BrowserContext](/docs/api/class-browsercontext "BrowserContext")s, it is best practice to explicitly close the returned context via [browserContext.close()](/docs/api/class-browsercontext#browser-context-close) when your code is done with the [BrowserContext](/docs/api/class-browsercontext "BrowserContext"), and before calling [browser.close()](/docs/api/class-browser#browser-close). This will ensure the `context` is closed gracefully and any artifacts—like HARs and videos—are fully flushed and saved.

**Usage**

```
(async () => {  const browser = await playwright.firefox.launch();  // Or 'chromium' or 'webkit'.  // Create a new incognito browser context.  const context = await browser.newContext();  // Create a new page in a pristine context.  const page = await context.newPage();  await page.goto('https://example.com');  // Gracefully close up everything  await context.close();  await browser.close();})();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `acceptDownloads` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-context-option-accept-downloads)
        
        Whether to automatically download all the attachments. Defaults to `true` where all the downloads are accepted.
        
    -   `baseURL` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-new-context-option-base-url)
        
        When using [page.goto()](/docs/api/class-page#page-goto), [page.route()](/docs/api/class-page#page-route), [page.waitForURL()](/docs/api/class-page#page-wait-for-url), [page.waitForRequest()](/docs/api/class-page#page-wait-for-request), or [page.waitForResponse()](/docs/api/class-page#page-wait-for-response) it takes the base URL in consideration by using the [`URL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) constructor for building the corresponding URL. Unset by default. Examples:
        
        -   baseURL: `http://localhost:3000` and navigating to `/bar.html` results in `http://localhost:3000/bar.html`
        -   baseURL: `http://localhost:3000/foo/` and navigating to `./bar.html` results in `http://localhost:3000/foo/bar.html`
        -   baseURL: `http://localhost:3000/foo` (without trailing slash) and navigating to `./bar.html` results in `http://localhost:3000/bar.html`
    -   `bypassCSP` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-context-option-bypass-csp)
        
        Toggles bypassing page's Content-Security-Policy. Defaults to `false`.
        
    -   `clientCertificates` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_ Added in: 1.46[#](#browser-new-context-option-client-certificates)
        
        -   `origin` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Exact origin that the certificate is valid for. Origin includes `https` protocol, a hostname and optionally a port.
            
        -   `certPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Path to the file with the certificate in PEM format.
            
        -   `cert` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer") _(optional)_
            
            Direct value of the certificate in PEM format.
            
        -   `keyPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Path to the file with the private key in PEM format.
            
        -   `key` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer") _(optional)_
            
            Direct value of the private key in PEM format.
            
        -   `pfxPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Path to the PFX or PKCS12 encoded private key and certificate chain.
            
        -   `pfx` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer") _(optional)_
            
            Direct value of the PFX or PKCS12 encoded private key and certificate chain.
            
        -   `passphrase` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Passphrase for the private key (PEM or PFX).
            
        
        TLS Client Authentication allows the server to request a client certificate and verify it.
        
        **Details**
        
        An array of client certificates to be used. Each certificate object must have either both `certPath` and `keyPath`, a single `pfxPath`, or their corresponding direct value equivalents (`cert` and `key`, or `pfx`). Optionally, `passphrase` property should be provided if the certificate is encrypted. The `origin` property should be provided with an exact match to the request origin that the certificate is valid for.
        
        Client certificate authentication is only active when at least one client certificate is provided. If you want to reject all client certificates sent by the server, you need to provide a client certificate with an `origin` that does not match any of the domains you plan to visit.
        
        note
        
        When using WebKit on macOS, accessing `localhost` will not pick up client certificates. You can make it work by replacing `localhost` with `local.playwright`.
        
    -   `colorScheme` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "light" | "dark" | "no-preference" _(optional)_[#](#browser-new-context-option-color-scheme)
        
        Emulates [prefers-colors-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media feature, supported values are `'light'` and `'dark'`. See [page.emulateMedia()](/docs/api/class-page#page-emulate-media) for more details. Passing `null` resets emulation to system defaults. Defaults to `'light'`.
        
    -   `contrast` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "no-preference" | "more" _(optional)_[#](#browser-new-context-option-contrast)
        
        Emulates `'prefers-contrast'` media feature, supported values are `'no-preference'`, `'more'`. See [page.emulateMedia()](/docs/api/class-page#page-emulate-media) for more details. Passing `null` resets emulation to system defaults. Defaults to `'no-preference'`.
        
    -   `deviceScaleFactor` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#browser-new-context-option-device-scale-factor)
        
        Specify device scale factor (can be thought of as dpr). Defaults to `1`. Learn more about [emulating devices with device scale factor](/docs/emulation#devices).
        
    -   `extraHTTPHeaders` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#browser-new-context-option-extra-http-headers)
        
        An object containing additional HTTP headers to be sent with every request. Defaults to none.
        
    -   `forcedColors` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "active" | "none" _(optional)_[#](#browser-new-context-option-forced-colors)
        
        Emulates `'forced-colors'` media feature, supported values are `'active'`, `'none'`. See [page.emulateMedia()](/docs/api/class-page#page-emulate-media) for more details. Passing `null` resets emulation to system defaults. Defaults to `'none'`.
        
    -   `geolocation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-context-option-geolocation)
        
        -   `latitude` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Latitude between -90 and 90.
            
        -   `longitude` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Longitude between -180 and 180.
            
        -   `accuracy` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            Non-negative accuracy value. Defaults to `0`.
            
    -   `hasTouch` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-context-option-has-touch)
        
        Specifies if viewport supports touch events. Defaults to false. Learn more about [mobile emulation](/docs/emulation#devices).
        
    -   `httpCredentials` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-context-option-http-credentials)
        
        -   `username` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `password` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `origin` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Restrain sending http credentials on specific origin (scheme://host:port).
            
        -   `send` "unauthorized" | "always" _(optional)_
            
            This option only applies to the requests sent from corresponding [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") and does not affect requests sent from the browser. `'always'` - `Authorization` header with basic authentication credentials will be sent with the each API request. `'unauthorized` - the credentials are only sent when 401 (Unauthorized) response with `WWW-Authenticate` header is received. Defaults to `'unauthorized'`.
            
        
        Credentials for [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication). If no origin is specified, the username and password are sent to any servers upon unauthorized responses.
        
    -   `ignoreHTTPSErrors` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-context-option-ignore-https-errors)
        
        Whether to ignore HTTPS errors when sending network requests. Defaults to `false`.
        
    -   `isMobile` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-context-option-is-mobile)
        
        Whether the `meta viewport` tag is taken into account and touch events are enabled. isMobile is a part of device, so you don't actually need to set it manually. Defaults to `false` and is not supported in Firefox. Learn more about [mobile emulation](/docs/emulation#ismobile).
        
    -   `javaScriptEnabled` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-context-option-java-script-enabled)
        
        Whether or not to enable JavaScript in the context. Defaults to `true`. Learn more about [disabling JavaScript](/docs/emulation#javascript-enabled).
        
    -   `locale` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-new-context-option-locale)
        
        Specify user locale, for example `en-GB`, `de-DE`, etc. Locale will affect `navigator.language` value, `Accept-Language` request header value as well as number and date formatting rules. Defaults to the system default locale. Learn more about emulation in our [emulation guide](/docs/emulation#locale--timezone).
        
    -   `logger` [Logger](/docs/api/class-logger "Logger") _(optional)_[#](#browser-new-context-option-logger)
        
        Deprecated
        
        The logs received by the logger are incomplete. Please use tracing instead.
        
        Logger sink for Playwright logging.
        
    -   `offline` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-context-option-offline)
        
        Whether to emulate network being offline. Defaults to `false`. Learn more about [network emulation](/docs/emulation#offline).
        
    -   `permissions` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#browser-new-context-option-permissions)
        
        A list of permissions to grant to all pages in this context. See [browserContext.grantPermissions()](/docs/api/class-browsercontext#browser-context-grant-permissions) for more details. Defaults to none.
        
    -   `proxy` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-context-option-proxy)
        
        -   `server` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example `http://myproxy.com:3128` or `socks5://myproxy.com:3128`. Short form `myproxy.com:3128` is considered an HTTP proxy.
            
        -   `bypass` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional comma-separated domains to bypass proxy, for example `".com, chromium.org, .domain.com"`.
            
        -   `username` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional username to use if HTTP proxy requires authentication.
            
        -   `password` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional password to use if HTTP proxy requires authentication.
            
        
        Network proxy settings to use with this context. Defaults to none.
        
    -   `recordHar` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-context-option-record-har)
        
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
        
    -   `recordVideo` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-context-option-record-video)
        
        -   `dir` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Path to the directory to put videos into.
            
        -   `size` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
            
            -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
                
                Video frame width.
                
            -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
                
                Video frame height.
                
            
            Optional dimensions of the recorded videos. If not specified the size will be equal to `viewport` scaled down to fit into 800x800. If `viewport` is not configured explicitly the video size defaults to 800x450. Actual picture of each page will be scaled down if necessary to fit the specified size.
            
        
        Enables video recording for all pages into `recordVideo.dir` directory. If not specified videos are not recorded. Make sure to await [browserContext.close()](/docs/api/class-browsercontext#browser-context-close) for videos to be saved.
        
    -   `reducedMotion` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "reduce" | "no-preference" _(optional)_[#](#browser-new-context-option-reduced-motion)
        
        Emulates `'prefers-reduced-motion'` media feature, supported values are `'reduce'`, `'no-preference'`. See [page.emulateMedia()](/docs/api/class-page#page-emulate-media) for more details. Passing `null` resets emulation to system defaults. Defaults to `'no-preference'`.
        
    -   `screen` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-context-option-screen)
        
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            page width in pixels.
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            page height in pixels.
            
        
        Emulates consistent window screen size available inside web page via `window.screen`. Is only used when the [viewport](/docs/api/class-browser#browser-new-context-option-viewport) is set.
        
    -   `serviceWorkers` "allow" | "block" _(optional)_[#](#browser-new-context-option-service-workers)
        
        Whether to allow sites to register Service workers. Defaults to `'allow'`.
        
        -   `'allow'`: [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) can be registered.
        -   `'block'`: Playwright will block all registration of Service Workers.
    -   `storageState` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-context-option-storage-state)
        
        -   `cookies` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>
            
            -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
            -   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
            -   `domain` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
                Domain and path are required. For the cookie to apply to all subdomains as well, prefix domain with a dot, like this: ".example.com"
                
            -   `path` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
                Domain and path are required
                
            -   `expires` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
                
                Unix time in seconds.
                
            -   `httpOnly` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")
                
            -   `secure` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")
                
            -   `sameSite` "Strict" | "Lax" | "None"
                
                sameSite flag
                
            
            Cookies to set for context
            
        -   `origins` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>
            
            -   `origin` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
            -   `localStorage` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>
                
                -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                    
                -   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                    
                
                localStorage to set for context
                
        
        Learn more about [storage state and auth](/docs/auth).
        
        Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via [browserContext.storageState()](/docs/api/class-browsercontext#browser-context-storage-state).
        
    -   `strictSelectors` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-context-option-strict-selectors)
        
        If set to true, enables strict selectors mode for this context. In the strict selectors mode all operations on selectors that imply single target DOM element will throw when more than one element matches the selector. This option does not affect any Locator APIs (Locators are always strict). Defaults to `false`. See [Locator](/docs/api/class-locator "Locator") to learn more about the strict mode.
        
    -   `timezoneId` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-new-context-option-timezone-id)
        
        Changes the timezone of the context. See [ICU's metaZones.txt](https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1) for a list of supported timezone IDs. Defaults to the system timezone.
        
    -   `userAgent` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-new-context-option-user-agent)
        
        Specific user agent to use in this context.
        
    -   `videoSize` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-context-option-video-size)
        
        Deprecated
        
        Use [recordVideo](/docs/api/class-browser#browser-new-context-option-record-video) instead.
        
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Video frame width.
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Video frame height.
            
    -   `videosPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-new-context-option-videos-path)
        
        Deprecated
        
        Use [recordVideo](/docs/api/class-browser#browser-new-context-option-record-video) instead.
        
    -   `viewport` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-context-option-viewport)
        
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            page width in pixels.
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            page height in pixels.
            
        
        Emulates consistent viewport for each page. Defaults to an 1280x720 viewport. Use `null` to disable the consistent viewport emulation. Learn more about [viewport emulation](/docs/emulation#viewport).
        
        note
        
        The `null` value opts out from the default presets, makes viewport depend on the host window size defined by the operating system. It makes the execution of the tests non-deterministic.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[BrowserContext](/docs/api/class-browsercontext "BrowserContext")\>[#](#browser-new-context-return)

* * *

### newPage[​](#browser-new-page "Direct link to newPage")

Added before v1.9 browser.newPage

Creates a new page in a new browser context. Closing this page will close the context as well.

This is a convenience API that should only be used for the single-page scenarios and short snippets. Production code and testing frameworks should explicitly create [browser.newContext()](/docs/api/class-browser#browser-new-context) followed by the [browserContext.newPage()](/docs/api/class-browsercontext#browser-context-new-page) to control their exact life times.

**Usage**

```
await browser.newPage();await browser.newPage(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `acceptDownloads` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-page-option-accept-downloads)
        
        Whether to automatically download all the attachments. Defaults to `true` where all the downloads are accepted.
        
    -   `baseURL` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-new-page-option-base-url)
        
        When using [page.goto()](/docs/api/class-page#page-goto), [page.route()](/docs/api/class-page#page-route), [page.waitForURL()](/docs/api/class-page#page-wait-for-url), [page.waitForRequest()](/docs/api/class-page#page-wait-for-request), or [page.waitForResponse()](/docs/api/class-page#page-wait-for-response) it takes the base URL in consideration by using the [`URL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) constructor for building the corresponding URL. Unset by default. Examples:
        
        -   baseURL: `http://localhost:3000` and navigating to `/bar.html` results in `http://localhost:3000/bar.html`
        -   baseURL: `http://localhost:3000/foo/` and navigating to `./bar.html` results in `http://localhost:3000/foo/bar.html`
        -   baseURL: `http://localhost:3000/foo` (without trailing slash) and navigating to `./bar.html` results in `http://localhost:3000/bar.html`
    -   `bypassCSP` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-page-option-bypass-csp)
        
        Toggles bypassing page's Content-Security-Policy. Defaults to `false`.
        
    -   `clientCertificates` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_ Added in: 1.46[#](#browser-new-page-option-client-certificates)
        
        -   `origin` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Exact origin that the certificate is valid for. Origin includes `https` protocol, a hostname and optionally a port.
            
        -   `certPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Path to the file with the certificate in PEM format.
            
        -   `cert` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer") _(optional)_
            
            Direct value of the certificate in PEM format.
            
        -   `keyPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Path to the file with the private key in PEM format.
            
        -   `key` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer") _(optional)_
            
            Direct value of the private key in PEM format.
            
        -   `pfxPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Path to the PFX or PKCS12 encoded private key and certificate chain.
            
        -   `pfx` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer") _(optional)_
            
            Direct value of the PFX or PKCS12 encoded private key and certificate chain.
            
        -   `passphrase` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Passphrase for the private key (PEM or PFX).
            
        
        TLS Client Authentication allows the server to request a client certificate and verify it.
        
        **Details**
        
        An array of client certificates to be used. Each certificate object must have either both `certPath` and `keyPath`, a single `pfxPath`, or their corresponding direct value equivalents (`cert` and `key`, or `pfx`). Optionally, `passphrase` property should be provided if the certificate is encrypted. The `origin` property should be provided with an exact match to the request origin that the certificate is valid for.
        
        Client certificate authentication is only active when at least one client certificate is provided. If you want to reject all client certificates sent by the server, you need to provide a client certificate with an `origin` that does not match any of the domains you plan to visit.
        
        note
        
        When using WebKit on macOS, accessing `localhost` will not pick up client certificates. You can make it work by replacing `localhost` with `local.playwright`.
        
    -   `colorScheme` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "light" | "dark" | "no-preference" _(optional)_[#](#browser-new-page-option-color-scheme)
        
        Emulates [prefers-colors-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media feature, supported values are `'light'` and `'dark'`. See [page.emulateMedia()](/docs/api/class-page#page-emulate-media) for more details. Passing `null` resets emulation to system defaults. Defaults to `'light'`.
        
    -   `contrast` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "no-preference" | "more" _(optional)_[#](#browser-new-page-option-contrast)
        
        Emulates `'prefers-contrast'` media feature, supported values are `'no-preference'`, `'more'`. See [page.emulateMedia()](/docs/api/class-page#page-emulate-media) for more details. Passing `null` resets emulation to system defaults. Defaults to `'no-preference'`.
        
    -   `deviceScaleFactor` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#browser-new-page-option-device-scale-factor)
        
        Specify device scale factor (can be thought of as dpr). Defaults to `1`. Learn more about [emulating devices with device scale factor](/docs/emulation#devices).
        
    -   `extraHTTPHeaders` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#browser-new-page-option-extra-http-headers)
        
        An object containing additional HTTP headers to be sent with every request. Defaults to none.
        
    -   `forcedColors` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "active" | "none" _(optional)_[#](#browser-new-page-option-forced-colors)
        
        Emulates `'forced-colors'` media feature, supported values are `'active'`, `'none'`. See [page.emulateMedia()](/docs/api/class-page#page-emulate-media) for more details. Passing `null` resets emulation to system defaults. Defaults to `'none'`.
        
    -   `geolocation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-page-option-geolocation)
        
        -   `latitude` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Latitude between -90 and 90.
            
        -   `longitude` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Longitude between -180 and 180.
            
        -   `accuracy` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            Non-negative accuracy value. Defaults to `0`.
            
    -   `hasTouch` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-page-option-has-touch)
        
        Specifies if viewport supports touch events. Defaults to false. Learn more about [mobile emulation](/docs/emulation#devices).
        
    -   `httpCredentials` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-page-option-http-credentials)
        
        -   `username` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `password` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `origin` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Restrain sending http credentials on specific origin (scheme://host:port).
            
        -   `send` "unauthorized" | "always" _(optional)_
            
            This option only applies to the requests sent from corresponding [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") and does not affect requests sent from the browser. `'always'` - `Authorization` header with basic authentication credentials will be sent with the each API request. `'unauthorized` - the credentials are only sent when 401 (Unauthorized) response with `WWW-Authenticate` header is received. Defaults to `'unauthorized'`.
            
        
        Credentials for [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication). If no origin is specified, the username and password are sent to any servers upon unauthorized responses.
        
    -   `ignoreHTTPSErrors` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-page-option-ignore-https-errors)
        
        Whether to ignore HTTPS errors when sending network requests. Defaults to `false`.
        
    -   `isMobile` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-page-option-is-mobile)
        
        Whether the `meta viewport` tag is taken into account and touch events are enabled. isMobile is a part of device, so you don't actually need to set it manually. Defaults to `false` and is not supported in Firefox. Learn more about [mobile emulation](/docs/emulation#ismobile).
        
    -   `javaScriptEnabled` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-page-option-java-script-enabled)
        
        Whether or not to enable JavaScript in the context. Defaults to `true`. Learn more about [disabling JavaScript](/docs/emulation#javascript-enabled).
        
    -   `locale` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-new-page-option-locale)
        
        Specify user locale, for example `en-GB`, `de-DE`, etc. Locale will affect `navigator.language` value, `Accept-Language` request header value as well as number and date formatting rules. Defaults to the system default locale. Learn more about emulation in our [emulation guide](/docs/emulation#locale--timezone).
        
    -   `logger` [Logger](/docs/api/class-logger "Logger") _(optional)_[#](#browser-new-page-option-logger)
        
        Deprecated
        
        The logs received by the logger are incomplete. Please use tracing instead.
        
        Logger sink for Playwright logging.
        
    -   `offline` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-page-option-offline)
        
        Whether to emulate network being offline. Defaults to `false`. Learn more about [network emulation](/docs/emulation#offline).
        
    -   `permissions` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#browser-new-page-option-permissions)
        
        A list of permissions to grant to all pages in this context. See [browserContext.grantPermissions()](/docs/api/class-browsercontext#browser-context-grant-permissions) for more details. Defaults to none.
        
    -   `proxy` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-page-option-proxy)
        
        -   `server` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example `http://myproxy.com:3128` or `socks5://myproxy.com:3128`. Short form `myproxy.com:3128` is considered an HTTP proxy.
            
        -   `bypass` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional comma-separated domains to bypass proxy, for example `".com, chromium.org, .domain.com"`.
            
        -   `username` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional username to use if HTTP proxy requires authentication.
            
        -   `password` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional password to use if HTTP proxy requires authentication.
            
        
        Network proxy settings to use with this context. Defaults to none.
        
    -   `recordHar` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-page-option-record-har)
        
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
        
    -   `recordVideo` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-page-option-record-video)
        
        -   `dir` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Path to the directory to put videos into.
            
        -   `size` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
            
            -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
                
                Video frame width.
                
            -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
                
                Video frame height.
                
            
            Optional dimensions of the recorded videos. If not specified the size will be equal to `viewport` scaled down to fit into 800x800. If `viewport` is not configured explicitly the video size defaults to 800x450. Actual picture of each page will be scaled down if necessary to fit the specified size.
            
        
        Enables video recording for all pages into `recordVideo.dir` directory. If not specified videos are not recorded. Make sure to await [browserContext.close()](/docs/api/class-browsercontext#browser-context-close) for videos to be saved.
        
    -   `reducedMotion` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "reduce" | "no-preference" _(optional)_[#](#browser-new-page-option-reduced-motion)
        
        Emulates `'prefers-reduced-motion'` media feature, supported values are `'reduce'`, `'no-preference'`. See [page.emulateMedia()](/docs/api/class-page#page-emulate-media) for more details. Passing `null` resets emulation to system defaults. Defaults to `'no-preference'`.
        
    -   `screen` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-page-option-screen)
        
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            page width in pixels.
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            page height in pixels.
            
        
        Emulates consistent window screen size available inside web page via `window.screen`. Is only used when the [viewport](/docs/api/class-browser#browser-new-page-option-viewport) is set.
        
    -   `serviceWorkers` "allow" | "block" _(optional)_[#](#browser-new-page-option-service-workers)
        
        Whether to allow sites to register Service workers. Defaults to `'allow'`.
        
        -   `'allow'`: [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) can be registered.
        -   `'block'`: Playwright will block all registration of Service Workers.
    -   `storageState` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-page-option-storage-state)
        
        -   `cookies` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>
            
            -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
            -   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
            -   `domain` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
                Domain and path are required. For the cookie to apply to all subdomains as well, prefix domain with a dot, like this: ".example.com"
                
            -   `path` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
                Domain and path are required
                
            -   `expires` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
                
                Unix time in seconds.
                
            -   `httpOnly` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")
                
            -   `secure` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")
                
            -   `sameSite` "Strict" | "Lax" | "None"
                
                sameSite flag
                
            
            Cookies to set for context
            
        -   `origins` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>
            
            -   `origin` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
            -   `localStorage` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>
                
                -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                    
                -   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                    
                
                localStorage to set for context
                
        
        Learn more about [storage state and auth](/docs/auth).
        
        Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via [browserContext.storageState()](/docs/api/class-browsercontext#browser-context-storage-state).
        
    -   `strictSelectors` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-new-page-option-strict-selectors)
        
        If set to true, enables strict selectors mode for this context. In the strict selectors mode all operations on selectors that imply single target DOM element will throw when more than one element matches the selector. This option does not affect any Locator APIs (Locators are always strict). Defaults to `false`. See [Locator](/docs/api/class-locator "Locator") to learn more about the strict mode.
        
    -   `timezoneId` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-new-page-option-timezone-id)
        
        Changes the timezone of the context. See [ICU's metaZones.txt](https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1) for a list of supported timezone IDs. Defaults to the system timezone.
        
    -   `userAgent` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-new-page-option-user-agent)
        
        Specific user agent to use in this context.
        
    -   `videoSize` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-page-option-video-size)
        
        Deprecated
        
        Use [recordVideo](/docs/api/class-browser#browser-new-page-option-record-video) instead.
        
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Video frame width.
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Video frame height.
            
    -   `videosPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-new-page-option-videos-path)
        
        Deprecated
        
        Use [recordVideo](/docs/api/class-browser#browser-new-page-option-record-video) instead.
        
    -   `viewport` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-new-page-option-viewport)
        
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            page width in pixels.
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            page height in pixels.
            
        
        Emulates consistent viewport for each page. Defaults to an 1280x720 viewport. Use `null` to disable the consistent viewport emulation. Learn more about [viewport emulation](/docs/emulation#viewport).
        
        note
        
        The `null` value opts out from the default presets, makes viewport depend on the host window size defined by the operating system. It makes the execution of the tests non-deterministic.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Page](/docs/api/class-page "Page")\>[#](#browser-new-page-return)

* * *

### removeAllListeners[​](#browser-remove-all-listeners "Direct link to removeAllListeners")

Added in: v1.47 browser.removeAllListeners

Removes all the listeners of the given type (or all registered listeners if no type given). Allows to wait for async listeners to complete or to ignore subsequent errors from these listeners.

**Usage**

```
await browser.removeAllListeners();await browser.removeAllListeners(type, options);
```

**Arguments**

-   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-remove-all-listeners-option-type)
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `behavior` "wait" | "ignoreErrors" | "default" _(optional)_[#](#browser-remove-all-listeners-option-behavior)
        
        Specifies whether to wait for already running listeners and what to do if they throw errors:
        
        -   `'default'` - do not wait for current listener calls (if any) to finish, if the listener throws, it may result in unhandled error
        -   `'wait'` - wait for current listener calls (if any) to finish
        -   `'ignoreErrors'` - do not wait for current listener calls (if any) to finish, all errors thrown by the listeners after removal are silently caught

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#browser-remove-all-listeners-return)

* * *

### startTracing[​](#browser-start-tracing "Direct link to startTracing")

Added in: v1.11 browser.startTracing

note

This API controls [Chromium Tracing](https://www.chromium.org/developers/how-tos/trace-event-profiling-tool) which is a low-level chromium-specific debugging tool. API to control [Playwright Tracing](/docs/trace-viewer) could be found [here](/docs/api/class-tracing).

You can use [browser.startTracing()](/docs/api/class-browser#browser-start-tracing) and [browser.stopTracing()](/docs/api/class-browser#browser-stop-tracing) to create a trace file that can be opened in Chrome DevTools performance panel.

**Usage**

```
await browser.startTracing(page, { path: 'trace.json' });await page.goto('https://www.google.com');await browser.stopTracing();
```

**Arguments**

-   `page` [Page](/docs/api/class-page "Page") _(optional)_[#](#browser-start-tracing-option-page)
    
    Optional, if specified, tracing includes screenshots of the given page.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `categories` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#browser-start-tracing-option-categories)
        
        specify custom categories to use instead of default.
        
    -   `path` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-start-tracing-option-path)
        
        A path to write the trace file to.
        
    -   `screenshots` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-start-tracing-option-screenshots)
        
        captures screenshots in the trace.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#browser-start-tracing-return)

* * *

### stopTracing[​](#browser-stop-tracing "Direct link to stopTracing")

Added in: v1.11 browser.stopTracing

note

This API controls [Chromium Tracing](https://www.chromium.org/developers/how-tos/trace-event-profiling-tool) which is a low-level chromium-specific debugging tool. API to control [Playwright Tracing](/docs/trace-viewer) could be found [here](/docs/api/class-tracing).

Returns the buffer with trace data.

**Usage**

```
await browser.stopTracing();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer")\>[#](#browser-stop-tracing-return)

* * *

### version[​](#browser-version "Direct link to version")

Added before v1.9 browser.version

Returns the browser version.

**Usage**

```
browser.version();
```

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#browser-version-return)

* * *

## Events[​](#events "Direct link to Events")

### on('disconnected')[​](#browser-event-disconnected "Direct link to on('disconnected')")

Added before v1.9 browser.on('disconnected')

Emitted when Browser gets disconnected from the browser application. This might happen because of one of the following:

-   Browser application is closed or crashed.
-   The [browser.close()](/docs/api/class-browser#browser-close) method was called.

**Usage**

```
browser.on('disconnected', data => {});
```

**Event data**

-   [Browser](/docs/api/class-browser "Browser")
