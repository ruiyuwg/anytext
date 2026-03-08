On this page

BrowserType provides methods to launch a specific browser instance or connect to an existing one. The following is a typical example of using Playwright to drive automation:

```
const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.(async () => {  const browser = await chromium.launch();  const page = await browser.newPage();  await page.goto('https://example.com');  // other actions...  await browser.close();})();
```

* * *

## Methods[​](#methods "Direct link to Methods")

### connect[​](#browser-type-connect "Direct link to connect")

Added before v1.9 browserType.connect

This method attaches Playwright to an existing browser instance created via `BrowserType.launchServer` in Node.js.

note

The major and minor version of the Playwright instance that connects needs to match the version of Playwright that launches the browser (1.2.3 → is compatible with 1.2.x).

**Usage**

```
await browserType.connect(wsEndpoint);await browserType.connect(wsEndpoint, options);
```

**Arguments**

-   `wsEndpoint` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") Added in: v1.10[#](#browser-type-connect-option-ws-endpoint)
    
    A Playwright browser websocket endpoint to connect to. You obtain this endpoint via `BrowserServer.wsEndpoint`.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `exposeNetwork` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.37[#](#browser-type-connect-option-expose-network)
        
        This option exposes network available on the connecting client to the browser being connected to. Consists of a list of rules separated by comma.
        
        Available rules:
        
        1.  Hostname pattern, for example: `example.com`, `*.org:99`, `x.*.y.com`, `*foo.org`.
        2.  IP literal, for example: `127.0.0.1`, `0.0.0.0:99`, `[::1]`, `[0:0::1]:99`.
        3.  `<loopback>` that matches local loopback interfaces: `localhost`, `*.localhost`, `127.0.0.1`, `[::1]`.
        
        Some common examples:
        
        1.  `"*"` to expose all network.
        2.  `"<loopback>"` to expose localhost network.
        3.  `"*.test.internal-domain,*.staging.internal-domain,<loopback>"` to expose test/staging deployments and localhost.
    -   `headers` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_ Added in: v1.11[#](#browser-type-connect-option-headers)
        
        Additional HTTP headers to be sent with web socket connect request. Optional.
        
    -   `logger` [Logger](/docs/api/class-logger "Logger") _(optional)_ Added in: v1.14[#](#browser-type-connect-option-logger)
        
        Deprecated
        
        The logs received by the logger are incomplete. Please use tracing instead.
        
        Logger sink for Playwright logging. Optional.
        
    -   `slowMo` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.10[#](#browser-type-connect-option-slow-mo)
        
        Slows down Playwright operations by the specified amount of milliseconds. Useful so that you can see what is going on. Defaults to 0.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.10[#](#browser-type-connect-option-timeout)
        
        Maximum time in milliseconds to wait for the connection to be established. Defaults to `0` (no timeout).
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Browser](/docs/api/class-browser "Browser")\>[#](#browser-type-connect-return)

* * *

### connectOverCDP[​](#browser-type-connect-over-cdp "Direct link to connectOverCDP")

Added in: v1.9 browserType.connectOverCDP

This method attaches Playwright to an existing browser instance using the Chrome DevTools Protocol.

The default browser context is accessible via [browser.contexts()](/docs/api/class-browser#browser-contexts).

note

Connecting over the Chrome DevTools Protocol is only supported for Chromium-based browsers.

note

This connection is significantly lower fidelity than the Playwright protocol connection via [browserType.connect()](/docs/api/class-browsertype#browser-type-connect). If you are experiencing issues or attempting to use advanced functionality, you probably want to use [browserType.connect()](/docs/api/class-browsertype#browser-type-connect).

**Usage**

```
const browser = await playwright.chromium.connectOverCDP('http://localhost:9222');const defaultContext = browser.contexts()[0];const page = defaultContext.pages()[0];
```

**Arguments**

-   `endpointURL` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") Added in: v1.11[#](#browser-type-connect-over-cdp-option-endpoint-url)
    
    A CDP websocket endpoint or http url to connect to. For example `http://localhost:9222/` or `ws://127.0.0.1:9222/devtools/browser/387adf4c-243f-4051-a181-46798f4a46f4`.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `endpointURL` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.14[#](#browser-type-connect-over-cdp-option-endpoint-url)
        
        Deprecated
        
        Use the first argument instead.
        
    -   `headers` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_ Added in: v1.11[#](#browser-type-connect-over-cdp-option-headers)
        
        Additional HTTP headers to be sent with connect request. Optional.
        
    -   `isLocal` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.58[#](#browser-type-connect-over-cdp-option-is-local)
        
        Tells Playwright that it runs on the same host as the CDP server. It will enable certain optimizations that rely upon the file system being the same between Playwright and the Browser.
        
    -   `logger` [Logger](/docs/api/class-logger "Logger") _(optional)_ Added in: v1.14[#](#browser-type-connect-over-cdp-option-logger)
        
        Deprecated
        
        The logs received by the logger are incomplete. Please use tracing instead.
        
        Logger sink for Playwright logging. Optional.
        
    -   `slowMo` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.11[#](#browser-type-connect-over-cdp-option-slow-mo)
        
        Slows down Playwright operations by the specified amount of milliseconds. Useful so that you can see what is going on. Defaults to 0.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.11[#](#browser-type-connect-over-cdp-option-timeout)
        
        Maximum time in milliseconds to wait for the connection to be established. Defaults to `30000` (30 seconds). Pass `0` to disable timeout.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Browser](/docs/api/class-browser "Browser")\>[#](#browser-type-connect-over-cdp-return)

* * *

### executablePath[​](#browser-type-executable-path "Direct link to executablePath")

Added before v1.9 browserType.executablePath

A path where Playwright expects to find a bundled browser executable.

**Usage**

```
browserType.executablePath();
```

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#browser-type-executable-path-return)

* * *

### launch[​](#browser-type-launch "Direct link to launch")

Added before v1.9 browserType.launch

Returns the browser instance.

**Usage**

You can use [ignoreDefaultArgs](/docs/api/class-browsertype#browser-type-launch-option-ignore-default-args) to filter out `--mute-audio` from default arguments:

```
const browser = await chromium.launch({  // Or 'firefox' or 'webkit'.  ignoreDefaultArgs: ['--mute-audio']});
```

> **Chromium-only** Playwright can also be used to control the Google Chrome or Microsoft Edge browsers, but it works best with the version of Chromium it is bundled with. There is no guarantee it will work with any other version. Use [executablePath](/docs/api/class-browsertype#browser-type-launch-option-executable-path) option with extreme caution.
> 
> If Google Chrome (rather than Chromium) is preferred, a [Chrome Canary](https://www.google.com/chrome/browser/canary.html) or [Dev Channel](https://www.chromium.org/getting-involved/dev-channel) build is suggested.
> 
> Stock browsers like Google Chrome and Microsoft Edge are suitable for tests that require proprietary media codecs for video playback. See [this article](https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/) for other differences between Chromium and Chrome. [This article](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md) describes some differences for Linux users.

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `args` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#browser-type-launch-option-args)
        
        warning
        
        Use custom browser args at your own risk, as some of them may break Playwright functionality.
        
        Additional arguments to pass to the browser instance. The list of Chromium flags can be found [here](https://peter.sh/experiments/chromium-command-line-switches/).
        
    -   `channel` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-option-channel)
        
        Browser distribution channel.
        
        Use "chromium" to [opt in to new headless mode](/docs/browsers#chromium-new-headless-mode).
        
        Use "chrome", "chrome-beta", "chrome-dev", "chrome-canary", "msedge", "msedge-beta", "msedge-dev", or "msedge-canary" to use branded [Google Chrome and Microsoft Edge](/docs/browsers#google-chrome--microsoft-edge).
        
    -   `chromiumSandbox` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-option-chromium-sandbox)
        
        Enable Chromium sandboxing. Defaults to `false`.
        
    -   `downloadsPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-option-downloads-path)
        
        If specified, accepted downloads are downloaded into this directory. Otherwise, temporary directory is created and is deleted when browser is closed. In either case, the downloads are deleted when the browser context they were created in is closed.
        
    -   `env` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | \[undefined\]> _(optional)_[#](#browser-type-launch-option-env)
        
    -   `executablePath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-option-executable-path)
        
        Path to a browser executable to run instead of the bundled one. If [executablePath](/docs/api/class-browsertype#browser-type-launch-option-executable-path) is a relative path, then it is resolved relative to the current working directory. Note that Playwright only works with the bundled Chromium, Firefox or WebKit, use at your own risk.
        
    -   `firefoxUserPrefs` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\> _(optional)_[#](#browser-type-launch-option-firefox-user-prefs)
        
        Firefox user preferences. Learn more about the Firefox user preferences at [`about:config`](https://support.mozilla.org/en-US/kb/about-config-editor-firefox).
        
        You can also provide a path to a custom [`policies.json` file](https://mozilla.github.io/policy-templates/) via `PLAYWRIGHT_FIREFOX_POLICIES_JSON` environment variable.
        
    -   `handleSIGHUP` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-option-handle-sighup)
        
        Close the browser process on SIGHUP. Defaults to `true`.
        
    -   `handleSIGINT` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-option-handle-sigint)
        
        Close the browser process on Ctrl-C. Defaults to `true`.
        
    -   `handleSIGTERM` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-option-handle-sigterm)
        
        Close the browser process on SIGTERM. Defaults to `true`.
        
    -   `headless` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-option-headless)
        
        Whether to run browser in headless mode. More details for [Chromium](https://developers.google.com/web/updates/2017/04/headless-chrome) and [Firefox](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/). Defaults to `true`.
        
    -   `ignoreDefaultArgs` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#browser-type-launch-option-ignore-default-args)
        
        If `true`, Playwright does not pass its own configurations args and only uses the ones from [args](/docs/api/class-browsertype#browser-type-launch-option-args). If an array is given, then filters out the given default arguments. Dangerous option; use with care. Defaults to `false`.
        
    -   `logger` [Logger](/docs/api/class-logger "Logger") _(optional)_[#](#browser-type-launch-option-logger)
        
        Deprecated
        
        The logs received by the logger are incomplete. Please use tracing instead.
        
        Logger sink for Playwright logging.
        
    -   `proxy` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-type-launch-option-proxy)
        
        -   `server` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example `http://myproxy.com:3128` or `socks5://myproxy.com:3128`. Short form `myproxy.com:3128` is considered an HTTP proxy.
            
        -   `bypass` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional comma-separated domains to bypass proxy, for example `".com, chromium.org, .domain.com"`.
            
        -   `username` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional username to use if HTTP proxy requires authentication.
            
        -   `password` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional password to use if HTTP proxy requires authentication.
            
        
        Network proxy settings.
        
    -   `slowMo` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#browser-type-launch-option-slow-mo)
        
        Slows down Playwright operations by the specified amount of milliseconds. Useful so that you can see what is going on.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#browser-type-launch-option-timeout)
        
        Maximum time in milliseconds to wait for the browser instance to start. Defaults to `30000` (30 seconds). Pass `0` to disable timeout.
        
    -   `tracesDir` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-option-traces-dir)
        
        If specified, traces are saved into this directory.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Browser](/docs/api/class-browser "Browser")\>[#](#browser-type-launch-return)

* * *

### launchPersistentContext[​](#browser-type-launch-persistent-context "Direct link to launchPersistentContext")

Added before v1.9 browserType.launchPersistentContext

Returns the persistent browser context instance.

Launches browser that uses persistent storage located at [userDataDir](/docs/api/class-browsertype#browser-type-launch-persistent-context-option-user-data-dir) and returns the only context. Closing this context will automatically close the browser.

**Usage**

```
await browserType.launchPersistentContext(userDataDir);await browserType.launchPersistentContext(userDataDir, options);
```

**Arguments**

-   `userDataDir` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#browser-type-launch-persistent-context-option-user-data-dir)
    
    Path to a User Data Directory, which stores browser session data like cookies and local storage. Pass an empty string to create a temporary directory.
    
    More details for [Chromium](https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md#introduction) and [Firefox](https://wiki.mozilla.org/Firefox/CommandLineOptions#User_profile). Chromium's user data directory is the **parent** directory of the "Profile Path" seen at `chrome://version`.
    
    Note that browsers do not allow launching multiple instances with the same User Data Directory.
    
    warning
    
    Chromium/Chrome: Due to recent Chrome policy changes, automating the default Chrome user profile is not supported. Pointing `userDataDir` to Chrome's main "User Data" directory (the profile used for your regular browsing) may result in pages not loading or the browser exiting. Create and use a separate directory (for example, an empty folder) as your automation profile instead. See [https://developer.chrome.com/blog/remote-debugging-port](https://developer.chrome.com/blog/remote-debugging-port) for details.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `acceptDownloads` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-persistent-context-option-accept-downloads)
        
        Whether to automatically download all the attachments. Defaults to `true` where all the downloads are accepted.
        
    -   `args` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#browser-type-launch-persistent-context-option-args)
        
        warning
        
        Use custom browser args at your own risk, as some of them may break Playwright functionality.
        
        Additional arguments to pass to the browser instance. The list of Chromium flags can be found [here](https://peter.sh/experiments/chromium-command-line-switches/).
        
    -   `baseURL` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-persistent-context-option-base-url)
        
        When using [page.goto()](/docs/api/class-page#page-goto), [page.route()](/docs/api/class-page#page-route), [page.waitForURL()](/docs/api/class-page#page-wait-for-url), [page.waitForRequest()](/docs/api/class-page#page-wait-for-request), or [page.waitForResponse()](/docs/api/class-page#page-wait-for-response) it takes the base URL in consideration by using the [`URL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) constructor for building the corresponding URL. Unset by default. Examples:
        
        -   baseURL: `http://localhost:3000` and navigating to `/bar.html` results in `http://localhost:3000/bar.html`
        -   baseURL: `http://localhost:3000/foo/` and navigating to `./bar.html` results in `http://localhost:3000/foo/bar.html`
        -   baseURL: `http://localhost:3000/foo` (without trailing slash) and navigating to `./bar.html` results in `http://localhost:3000/bar.html`
    -   `bypassCSP` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-persistent-context-option-bypass-csp)
        
        Toggles bypassing page's Content-Security-Policy. Defaults to `false`.
        
    -   `channel` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-persistent-context-option-channel)
        
        Browser distribution channel.
        
        Use "chromium" to [opt in to new headless mode](/docs/browsers#chromium-new-headless-mode).
        
        Use "chrome", "chrome-beta", "chrome-dev", "chrome-canary", "msedge", "msedge-beta", "msedge-dev", or "msedge-canary" to use branded [Google Chrome and Microsoft Edge](/docs/browsers#google-chrome--microsoft-edge).
        
    -   `chromiumSandbox` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-persistent-context-option-chromium-sandbox)
        
        Enable Chromium sandboxing. Defaults to `false`.
        
    -   `clientCertificates` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_ Added in: 1.46[#](#browser-type-launch-persistent-context-option-client-certificates)
        
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
        
    -   `colorScheme` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "light" | "dark" | "no-preference" _(optional)_[#](#browser-type-launch-persistent-context-option-color-scheme)
        
        Emulates [prefers-colors-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media feature, supported values are `'light'` and `'dark'`. See [page.emulateMedia()](/docs/api/class-page#page-emulate-media) for more details. Passing `null` resets emulation to system defaults. Defaults to `'light'`.
        
    -   `contrast` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "no-preference" | "more" _(optional)_[#](#browser-type-launch-persistent-context-option-contrast)
        
        Emulates `'prefers-contrast'` media feature, supported values are `'no-preference'`, `'more'`. See [page.emulateMedia()](/docs/api/class-page#page-emulate-media) for more details. Passing `null` resets emulation to system defaults. Defaults to `'no-preference'`.
        
    -   `deviceScaleFactor` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#browser-type-launch-persistent-context-option-device-scale-factor)
        
        Specify device scale factor (can be thought of as dpr). Defaults to `1`. Learn more about [emulating devices with device scale factor](/docs/emulation#devices).
        
    -   `downloadsPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-persistent-context-option-downloads-path)
        
        If specified, accepted downloads are downloaded into this directory. Otherwise, temporary directory is created and is deleted when browser is closed. In either case, the downloads are deleted when the browser context they were created in is closed.
        
    -   `env` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | \[undefined\]> _(optional)_[#](#browser-type-launch-persistent-context-option-env)
        
    -   `executablePath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-persistent-context-option-executable-path)
        
        Path to a browser executable to run instead of the bundled one. If [executablePath](/docs/api/class-browsertype#browser-type-launch-persistent-context-option-executable-path) is a relative path, then it is resolved relative to the current working directory. Note that Playwright only works with the bundled Chromium, Firefox or WebKit, use at your own risk.
        
    -   `extraHTTPHeaders` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#browser-type-launch-persistent-context-option-extra-http-headers)
        
        An object containing additional HTTP headers to be sent with every request. Defaults to none.
        
    -   `firefoxUserPrefs` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\> _(optional)_ Added in: v1.40[#](#browser-type-launch-persistent-context-option-firefox-user-prefs)
        
        Firefox user preferences. Learn more about the Firefox user preferences at [`about:config`](https://support.mozilla.org/en-US/kb/about-config-editor-firefox).
        
        You can also provide a path to a custom [`policies.json` file](https://mozilla.github.io/policy-templates/) via `PLAYWRIGHT_FIREFOX_POLICIES_JSON` environment variable.
        
    -   `forcedColors` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "active" | "none" _(optional)_[#](#browser-type-launch-persistent-context-option-forced-colors)
        
        Emulates `'forced-colors'` media feature, supported values are `'active'`, `'none'`. See [page.emulateMedia()](/docs/api/class-page#page-emulate-media) for more details. Passing `null` resets emulation to system defaults. Defaults to `'none'`.
        
    -   `geolocation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-type-launch-persistent-context-option-geolocation)
        
        -   `latitude` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Latitude between -90 and 90.
            
        -   `longitude` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Longitude between -180 and 180.
            
        -   `accuracy` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            Non-negative accuracy value. Defaults to `0`.
            
    -   `handleSIGHUP` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-persistent-context-option-handle-sighup)
        
        Close the browser process on SIGHUP. Defaults to `true`.
        
    -   `handleSIGINT` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-persistent-context-option-handle-sigint)
        
        Close the browser process on Ctrl-C. Defaults to `true`.
        
    -   `handleSIGTERM` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-persistent-context-option-handle-sigterm)
        
        Close the browser process on SIGTERM. Defaults to `true`.
        
    -   `hasTouch` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-persistent-context-option-has-touch)
        
        Specifies if viewport supports touch events. Defaults to false. Learn more about [mobile emulation](/docs/emulation#devices).
        
    -   `headless` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-persistent-context-option-headless)
        
        Whether to run browser in headless mode. More details for [Chromium](https://developers.google.com/web/updates/2017/04/headless-chrome) and [Firefox](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/). Defaults to `true`.
        
    -   `httpCredentials` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-type-launch-persistent-context-option-http-credentials)
        
        -   `username` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `password` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `origin` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Restrain sending http credentials on specific origin (scheme://host:port).
            
        -   `send` "unauthorized" | "always" _(optional)_
            
            This option only applies to the requests sent from corresponding [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") and does not affect requests sent from the browser. `'always'` - `Authorization` header with basic authentication credentials will be sent with the each API request. `'unauthorized` - the credentials are only sent when 401 (Unauthorized) response with `WWW-Authenticate` header is received. Defaults to `'unauthorized'`.
            
        
        Credentials for [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication). If no origin is specified, the username and password are sent to any servers upon unauthorized responses.
        
    -   `ignoreDefaultArgs` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#browser-type-launch-persistent-context-option-ignore-default-args)
        
        If `true`, Playwright does not pass its own configurations args and only uses the ones from [args](/docs/api/class-browsertype#browser-type-launch-persistent-context-option-args). If an array is given, then filters out the given default arguments. Dangerous option; use with care. Defaults to `false`.
        
    -   `ignoreHTTPSErrors` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-persistent-context-option-ignore-https-errors)
        
        Whether to ignore HTTPS errors when sending network requests. Defaults to `false`.
        
    -   `isMobile` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-persistent-context-option-is-mobile)
        
        Whether the `meta viewport` tag is taken into account and touch events are enabled. isMobile is a part of device, so you don't actually need to set it manually. Defaults to `false` and is not supported in Firefox. Learn more about [mobile emulation](/docs/emulation#ismobile).
        
    -   `javaScriptEnabled` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-persistent-context-option-java-script-enabled)
        
        Whether or not to enable JavaScript in the context. Defaults to `true`. Learn more about [disabling JavaScript](/docs/emulation#javascript-enabled).
        
    -   `locale` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-persistent-context-option-locale)
        
        Specify user locale, for example `en-GB`, `de-DE`, etc. Locale will affect `navigator.language` value, `Accept-Language` request header value as well as number and date formatting rules. Defaults to the system default locale. Learn more about emulation in our [emulation guide](/docs/emulation#locale--timezone).
        
    -   `logger` [Logger](/docs/api/class-logger "Logger") _(optional)_[#](#browser-type-launch-persistent-context-option-logger)
        
        Deprecated
        
        The logs received by the logger are incomplete. Please use tracing instead.
        
        Logger sink for Playwright logging.
        
    -   `offline` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-persistent-context-option-offline)
        
        Whether to emulate network being offline. Defaults to `false`. Learn more about [network emulation](/docs/emulation#offline).
        
    -   `permissions` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#browser-type-launch-persistent-context-option-permissions)
        
        A list of permissions to grant to all pages in this context. See [browserContext.grantPermissions()](/docs/api/class-browsercontext#browser-context-grant-permissions) for more details. Defaults to none.
        
    -   `proxy` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-type-launch-persistent-context-option-proxy)
        
        -   `server` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example `http://myproxy.com:3128` or `socks5://myproxy.com:3128`. Short form `myproxy.com:3128` is considered an HTTP proxy.
            
        -   `bypass` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional comma-separated domains to bypass proxy, for example `".com, chromium.org, .domain.com"`.
            
        -   `username` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional username to use if HTTP proxy requires authentication.
            
        -   `password` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional password to use if HTTP proxy requires authentication.
            
        
        Network proxy settings.
        
    -   `recordHar` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-type-launch-persistent-context-option-record-har)
        
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
        
    -   `recordVideo` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-type-launch-persistent-context-option-record-video)
        
        -   `dir` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Path to the directory to put videos into.
            
        -   `size` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
            
            -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
                
                Video frame width.
                
            -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
                
                Video frame height.
                
            
            Optional dimensions of the recorded videos. If not specified the size will be equal to `viewport` scaled down to fit into 800x800. If `viewport` is not configured explicitly the video size defaults to 800x450. Actual picture of each page will be scaled down if necessary to fit the specified size.
            
        
        Enables video recording for all pages into `recordVideo.dir` directory. If not specified videos are not recorded. Make sure to await [browserContext.close()](/docs/api/class-browsercontext#browser-context-close) for videos to be saved.
        
    -   `reducedMotion` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "reduce" | "no-preference" _(optional)_[#](#browser-type-launch-persistent-context-option-reduced-motion)
        
        Emulates `'prefers-reduced-motion'` media feature, supported values are `'reduce'`, `'no-preference'`. See [page.emulateMedia()](/docs/api/class-page#page-emulate-media) for more details. Passing `null` resets emulation to system defaults. Defaults to `'no-preference'`.
        
    -   `screen` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-type-launch-persistent-context-option-screen)
        
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            page width in pixels.
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            page height in pixels.
            
        
        Emulates consistent window screen size available inside web page via `window.screen`. Is only used when the [viewport](/docs/api/class-browsertype#browser-type-launch-persistent-context-option-viewport) is set.
        
    -   `serviceWorkers` "allow" | "block" _(optional)_[#](#browser-type-launch-persistent-context-option-service-workers)
        
        Whether to allow sites to register Service workers. Defaults to `'allow'`.
        
        -   `'allow'`: [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) can be registered.
        -   `'block'`: Playwright will block all registration of Service Workers.
    -   `slowMo` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#browser-type-launch-persistent-context-option-slow-mo)
        
        Slows down Playwright operations by the specified amount of milliseconds. Useful so that you can see what is going on.
        
    -   `strictSelectors` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-persistent-context-option-strict-selectors)
        
        If set to true, enables strict selectors mode for this context. In the strict selectors mode all operations on selectors that imply single target DOM element will throw when more than one element matches the selector. This option does not affect any Locator APIs (Locators are always strict). Defaults to `false`. See [Locator](/docs/api/class-locator "Locator") to learn more about the strict mode.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#browser-type-launch-persistent-context-option-timeout)
        
        Maximum time in milliseconds to wait for the browser instance to start. Defaults to `30000` (30 seconds). Pass `0` to disable timeout.
        
    -   `timezoneId` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-persistent-context-option-timezone-id)
        
        Changes the timezone of the context. See [ICU's metaZones.txt](https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1) for a list of supported timezone IDs. Defaults to the system timezone.
        
    -   `tracesDir` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-persistent-context-option-traces-dir)
        
        If specified, traces are saved into this directory.
        
    -   `userAgent` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-persistent-context-option-user-agent)
        
        Specific user agent to use in this context.
        
    -   `videoSize` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-type-launch-persistent-context-option-video-size)
        
        Deprecated
        
        Use [recordVideo](/docs/api/class-browsertype#browser-type-launch-persistent-context-option-record-video) instead.
        
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Video frame width.
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            Video frame height.
            
    -   `videosPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-persistent-context-option-videos-path)
        
        Deprecated
        
        Use [recordVideo](/docs/api/class-browsertype#browser-type-launch-persistent-context-option-record-video) instead.
        
    -   `viewport` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-type-launch-persistent-context-option-viewport)
        
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            page width in pixels.
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            page height in pixels.
            
        
        Emulates consistent viewport for each page. Defaults to an 1280x720 viewport. Use `null` to disable the consistent viewport emulation. Learn more about [viewport emulation](/docs/emulation#viewport).
        
        note
        
        The `null` value opts out from the default presets, makes viewport depend on the host window size defined by the operating system. It makes the execution of the tests non-deterministic.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[BrowserContext](/docs/api/class-browsercontext "BrowserContext")\>[#](#browser-type-launch-persistent-context-return)

* * *

### launchServer[​](#browser-type-launch-server "Direct link to launchServer")

Added before v1.9 browserType.launchServer

Returns the browser app instance. You can connect to it via [browserType.connect()](/docs/api/class-browsertype#browser-type-connect), which requires the major/minor client/server version to match (1.2.3 → is compatible with 1.2.x).

**Usage**

Launches browser server that client can connect to. An example of launching a browser executable and connecting to it later:

```
const { chromium } = require('playwright');  // Or 'webkit' or 'firefox'.(async () => {  const browserServer = await chromium.launchServer();  const wsEndpoint = browserServer.wsEndpoint();  // Use web socket endpoint later to establish a connection.  const browser = await chromium.connect(wsEndpoint);  // Close browser instance.  await browserServer.close();})();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `args` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#browser-type-launch-server-option-args)
        
        warning
        
        Use custom browser args at your own risk, as some of them may break Playwright functionality.
        
        Additional arguments to pass to the browser instance. The list of Chromium flags can be found [here](https://peter.sh/experiments/chromium-command-line-switches/).
        
    -   `channel` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-server-option-channel)
        
        Browser distribution channel.
        
        Use "chromium" to [opt in to new headless mode](/docs/browsers#chromium-new-headless-mode).
        
        Use "chrome", "chrome-beta", "chrome-dev", "chrome-canary", "msedge", "msedge-beta", "msedge-dev", or "msedge-canary" to use branded [Google Chrome and Microsoft Edge](/docs/browsers#google-chrome--microsoft-edge).
        
    -   `chromiumSandbox` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-server-option-chromium-sandbox)
        
        Enable Chromium sandboxing. Defaults to `false`.
        
    -   `downloadsPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-server-option-downloads-path)
        
        If specified, accepted downloads are downloaded into this directory. Otherwise, temporary directory is created and is deleted when browser is closed. In either case, the downloads are deleted when the browser context they were created in is closed.
        
    -   `env` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | \[undefined\]> _(optional)_[#](#browser-type-launch-server-option-env)
        
    -   `executablePath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-server-option-executable-path)
        
        Path to a browser executable to run instead of the bundled one. If [executablePath](/docs/api/class-browsertype#browser-type-launch-server-option-executable-path) is a relative path, then it is resolved relative to the current working directory. Note that Playwright only works with the bundled Chromium, Firefox or WebKit, use at your own risk.
        
    -   `firefoxUserPrefs` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\> _(optional)_[#](#browser-type-launch-server-option-firefox-user-prefs)
        
        Firefox user preferences. Learn more about the Firefox user preferences at [`about:config`](https://support.mozilla.org/en-US/kb/about-config-editor-firefox).
        
        You can also provide a path to a custom [`policies.json` file](https://mozilla.github.io/policy-templates/) via `PLAYWRIGHT_FIREFOX_POLICIES_JSON` environment variable.
        
    -   `handleSIGHUP` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-server-option-handle-sighup)
        
        Close the browser process on SIGHUP. Defaults to `true`.
        
    -   `handleSIGINT` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-server-option-handle-sigint)
        
        Close the browser process on Ctrl-C. Defaults to `true`.
        
    -   `handleSIGTERM` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-server-option-handle-sigterm)
        
        Close the browser process on SIGTERM. Defaults to `true`.
        
    -   `headless` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#browser-type-launch-server-option-headless)
        
        Whether to run browser in headless mode. More details for [Chromium](https://developers.google.com/web/updates/2017/04/headless-chrome) and [Firefox](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/). Defaults to `true`.
        
    -   `host` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.45[#](#browser-type-launch-server-option-host)
        
        Host to use for the web socket. It is optional and if it is omitted, the server will accept connections on the unspecified IPv6 address (::) when IPv6 is available, or the unspecified IPv4 address (0.0.0.0) otherwise. Consider hardening it with picking a specific interface.
        
    -   `ignoreDefaultArgs` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#browser-type-launch-server-option-ignore-default-args)
        
        If `true`, Playwright does not pass its own configurations args and only uses the ones from [args](/docs/api/class-browsertype#browser-type-launch-server-option-args). If an array is given, then filters out the given default arguments. Dangerous option; use with care. Defaults to `false`.
        
    -   `logger` [Logger](/docs/api/class-logger "Logger") _(optional)_[#](#browser-type-launch-server-option-logger)
        
        Deprecated
        
        The logs received by the logger are incomplete. Please use tracing instead.
        
        Logger sink for Playwright logging.
        
    -   `port` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#browser-type-launch-server-option-port)
        
        Port to use for the web socket. Defaults to 0 that picks any available port.
        
    -   `proxy` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#browser-type-launch-server-option-proxy)
        
        -   `server` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example `http://myproxy.com:3128` or `socks5://myproxy.com:3128`. Short form `myproxy.com:3128` is considered an HTTP proxy.
            
        -   `bypass` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional comma-separated domains to bypass proxy, for example `".com, chromium.org, .domain.com"`.
            
        -   `username` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional username to use if HTTP proxy requires authentication.
            
        -   `password` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional password to use if HTTP proxy requires authentication.
            
        
        Network proxy settings.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#browser-type-launch-server-option-timeout)
        
        Maximum time in milliseconds to wait for the browser instance to start. Defaults to `30000` (30 seconds). Pass `0` to disable timeout.
        
    -   `tracesDir` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#browser-type-launch-server-option-traces-dir)
        
        If specified, traces are saved into this directory.
        
    -   `wsPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.15[#](#browser-type-launch-server-option-ws-path)
        
        Path at which to serve the Browser Server. For security, this defaults to an unguessable string.
        
        warning
        
        Any process or web page (including those running in Playwright) with knowledge of the `wsPath` can take control of the OS user. For this reason, you should use an unguessable token when using this option.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[BrowserServer](/docs/api/class-browserserver "BrowserServer")\>[#](#browser-type-launch-server-return)

* * *

### name[​](#browser-type-name "Direct link to name")

Added before v1.9 browserType.name

Returns browser name. For example: `'chromium'`, `'webkit'` or `'firefox'`.

**Usage**

```
browserType.name();
```

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#browser-type-name-return)
