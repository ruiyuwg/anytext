On this page

Playwright Test provides many options to configure test environment, [Browser](/docs/api/class-browser "Browser"), [BrowserContext](/docs/api/class-browsercontext "BrowserContext") and more.

These options are usually provided in the [configuration file](/docs/test-configuration) through [testConfig.use](/docs/api/class-testconfig#test-config-use) and [testProject.use](/docs/api/class-testproject#test-project-use).

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    headless: false,    viewport: { width: 1280, height: 720 },    ignoreHTTPSErrors: true,    video: 'on-first-retry',  },});
```

Alternatively, with [test.use()](/docs/api/class-test#test-use) you can override some options for a file.

example.spec.ts

```
import { test, expect } from '@playwright/test';// Run tests in this file with portrait-like viewport.test.use({ viewport: { width: 600, height: 900 } });test('my portrait test', async ({ page }) => {  // ...});
```

* * *

## Properties[​](#properties "Direct link to Properties")

### acceptDownloads[​](#test-options-accept-downloads "Direct link to acceptDownloads")

Added in: v1.10 testOptions.acceptDownloads

Whether to automatically download all the attachments. Defaults to `true` where all the downloads are accepted.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    acceptDownloads: false,  },});
```

**Type**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")

* * *

### actionTimeout[​](#test-options-action-timeout "Direct link to actionTimeout")

Added in: v1.10 testOptions.actionTimeout

Default timeout for each Playwright action in milliseconds, defaults to 0 (no timeout).

This is a default timeout for all Playwright actions, same as configured via [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout).

**Usage**

```
import { defineConfig, devices } from '@playwright/test';export default defineConfig({  use: {    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */    actionTimeout: 0,  },});
```

Learn more about [various timeouts](/docs/test-timeouts).

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### baseURL[​](#test-options-base-url "Direct link to baseURL")

Added in: v1.10 testOptions.baseURL

When using [page.goto()](/docs/api/class-page#page-goto), [page.route()](/docs/api/class-page#page-route), [page.waitForURL()](/docs/api/class-page#page-wait-for-url), [page.waitForRequest()](/docs/api/class-page#page-wait-for-request), or [page.waitForResponse()](/docs/api/class-page#page-wait-for-response) it takes the base URL in consideration by using the [`URL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) constructor for building the corresponding URL. Unset by default. Examples:

-   baseURL: `http://localhost:3000` and navigating to `/bar.html` results in `http://localhost:3000/bar.html`
-   baseURL: `http://localhost:3000/foo/` and navigating to `./bar.html` results in `http://localhost:3000/foo/bar.html`
-   baseURL: `http://localhost:3000/foo` (without trailing slash) and navigating to `./bar.html` results in `http://localhost:3000/bar.html`

**Usage**

```
import { defineConfig, devices } from '@playwright/test';export default defineConfig({  use: {    /* Base URL to use in actions like `await page.goto('/')`. */    baseURL: 'http://localhost:3000',  },});
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### browserName[​](#test-options-browser-name "Direct link to browserName")

Added in: v1.10 testOptions.browserName

Name of the browser that runs tests. Defaults to `'chromium'`. Most of the time you should set `browserName` in your [TestConfig](/docs/api/class-testconfig "TestConfig"):

**Usage**

playwright.config.ts

```
import { defineConfig, devices } from '@playwright/test';export default defineConfig({  use: {    browserName: 'firefox',  },});
```

**Type**

-   "chromium" | "firefox" | "webkit"

* * *

### bypassCSP[​](#test-options-bypass-csp "Direct link to bypassCSP")

Added in: v1.10 testOptions.bypassCSP

Toggles bypassing page's Content-Security-Policy. Defaults to `false`.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    bypassCSP: true,  }});
```

**Type**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")

* * *

### channel[​](#test-options-channel "Direct link to channel")

Added in: v1.10 testOptions.channel

Browser distribution channel.

Use "chromium" to [opt in to new headless mode](/docs/browsers#chromium-new-headless-mode).

Use "chrome", "chrome-beta", "chrome-dev", "chrome-canary", "msedge", "msedge-beta", "msedge-dev", or "msedge-canary" to use branded [Google Chrome and Microsoft Edge](/docs/browsers#google-chrome--microsoft-edge).

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'Microsoft Edge',      use: {        ...devices['Desktop Edge'],        channel: 'msedge'      },    },  ]});
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### clientCertificates[​](#test-options-client-certificates "Direct link to clientCertificates")

Added in: 1.46 testOptions.clientCertificates

TLS Client Authentication allows the server to request a client certificate and verify it.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    clientCertificates: [{      origin: 'https://example.com',      certPath: './cert.pem',      keyPath: './key.pem',      passphrase: 'mysecretpassword',    }],  },});
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>
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
        

**Details**

An array of client certificates to be used. Each certificate object must have either both `certPath` and `keyPath`, a single `pfxPath`, or their corresponding direct value equivalents (`cert` and `key`, or `pfx`). Optionally, `passphrase` property should be provided if the certificate is encrypted. The `origin` property should be provided with an exact match to the request origin that the certificate is valid for.

Client certificate authentication is only active when at least one client certificate is provided. If you want to reject all client certificates sent by the server, you need to provide a client certificate with an `origin` that does not match any of the domains you plan to visit.

note

When using WebKit on macOS, accessing `localhost` will not pick up client certificates. You can make it work by replacing `localhost` with `local.playwright`.

* * *

### colorScheme[​](#test-options-color-scheme "Direct link to colorScheme")

Added in: v1.10 testOptions.colorScheme

Emulates [prefers-colors-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media feature, supported values are `'light'` and `'dark'`. See [page.emulateMedia()](/docs/api/class-page#page-emulate-media) for more details. Passing `null` resets emulation to system defaults. Defaults to `'light'`.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    colorScheme: 'dark',  },});
```

**Type**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "light" | "dark" | "no-preference"

* * *

### connectOptions[​](#test-options-connect-options "Direct link to connectOptions")

Added in: v1.10 testOptions.connectOptions

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    connectOptions: {      wsEndpoint: 'ws://localhost:5678',    },  },});
```

When connect options are specified, default [fixtures.browser](/docs/api/class-fixtures#fixtures-browser), [fixtures.context](/docs/api/class-fixtures#fixtures-context) and [fixtures.page](/docs/api/class-fixtures#fixtures-page) use the remote browser instead of launching a browser locally, and any launch options like [testOptions.headless](/docs/api/class-testoptions#test-options-headless) or [testOptions.channel](/docs/api/class-testoptions#test-options-channel) are ignored.

**Type**

-   [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
    -   `wsEndpoint` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        A browser websocket endpoint to connect to.
        
    -   `headers` [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
        Additional HTTP headers to be sent with web socket connect request. Optional.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
        
        Timeout in milliseconds for the connection to be established. Optional, defaults to no timeout.
        
    -   `exposeNetwork` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Option to expose network available on the connecting client to the browser being connected to. See [browserType.connect()](/docs/api/class-browsertype#browser-type-connect) for more details.
        

* * *

### contextOptions[​](#test-options-context-options "Direct link to contextOptions")

Added in: v1.10 testOptions.contextOptions

Options used to create the context, as passed to [browser.newContext()](/docs/api/class-browser#browser-new-context). Specific options like [testOptions.viewport](/docs/api/class-testoptions#test-options-viewport) take priority over this.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    contextOptions: {      reducedMotion: 'reduce',    },  },});
```

**Type**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")

* * *

### deviceScaleFactor[​](#test-options-device-scale-factor "Direct link to deviceScaleFactor")

Added in: v1.10 testOptions.deviceScaleFactor

Specify device scale factor (can be thought of as dpr). Defaults to `1`. Learn more about [emulating devices with device scale factor](/docs/emulation#devices).

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    viewport: { width: 2560, height: 1440 },    deviceScaleFactor: 2,  },});
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### extraHTTPHeaders[​](#test-options-extra-http-headers "Direct link to extraHTTPHeaders")

Added in: v1.10 testOptions.extraHTTPHeaders

An object containing additional HTTP headers to be sent with every request. Defaults to none.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    extraHTTPHeaders: {      'X-My-Header': 'value',    },  },});
```

**Type**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>

* * *

### geolocation[​](#test-options-geolocation "Direct link to geolocation")

Added in: v1.10 testOptions.geolocation

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    geolocation: { longitude: 12.492507, latitude: 41.889938 },  },});
```

Learn more about [geolocation](/docs/emulation#color-scheme-and-media).

**Type**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
    -   `latitude` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Latitude between -90 and 90.
        
    -   `longitude` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Longitude between -180 and 180.
        
    -   `accuracy` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
        
        Non-negative accuracy value. Defaults to `0`.
        

* * *

### hasTouch[​](#test-options-has-touch "Direct link to hasTouch")

Added in: v1.10 testOptions.hasTouch

Specifies if viewport supports touch events. Defaults to false. Learn more about [mobile emulation](/docs/emulation#devices).

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    hasTouch: true  },});
```

**Type**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")

* * *

### headless[​](#test-options-headless "Direct link to headless")

Added in: v1.10 testOptions.headless

Whether to run browser in headless mode. More details for [Chromium](https://developers.google.com/web/updates/2017/04/headless-chrome) and [Firefox](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/). Defaults to `true`.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    headless: false  },});
```

**Type**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")

* * *

### httpCredentials[​](#test-options-http-credentials "Direct link to httpCredentials")

Added in: v1.10 testOptions.httpCredentials

Credentials for [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication). If no origin is specified, the username and password are sent to any servers upon unauthorized responses.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    httpCredentials: {      username: 'user',      password: 'pass',    },  },});
```

**Type**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
    -   `username` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
    -   `password` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
    -   `origin` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Restrain sending http credentials on specific origin (scheme://host:port).
        
    -   `send` "unauthorized" | "always" _(optional)_
        
        This option only applies to the requests sent from corresponding [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") and does not affect requests sent from the browser. `'always'` - `Authorization` header with basic authentication credentials will be sent with the each API request. `'unauthorized` - the credentials are only sent when 401 (Unauthorized) response with `WWW-Authenticate` header is received. Defaults to `'unauthorized'`.
        

* * *

### ignoreHTTPSErrors[​](#test-options-ignore-https-errors "Direct link to ignoreHTTPSErrors")

Added in: v1.10 testOptions.ignoreHTTPSErrors

Whether to ignore HTTPS errors when sending network requests. Defaults to `false`.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    ignoreHTTPSErrors: true,  },});
```

**Type**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")

* * *

### isMobile[​](#test-options-is-mobile "Direct link to isMobile")

Added in: v1.10 testOptions.isMobile

Whether the `meta viewport` tag is taken into account and touch events are enabled. isMobile is a part of device, so you don't actually need to set it manually. Defaults to `false` and is not supported in Firefox. Learn more about [mobile emulation](/docs/emulation#ismobile).

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    isMobile: false,  },});
```

**Type**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")

* * *

### javaScriptEnabled[​](#test-options-java-script-enabled "Direct link to javaScriptEnabled")

Added in: v1.10 testOptions.javaScriptEnabled

Whether or not to enable JavaScript in the context. Defaults to `true`. Learn more about [disabling JavaScript](/docs/emulation#javascript-enabled).

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    javaScriptEnabled: false,  },});
```

**Type**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")

* * *

### launchOptions[​](#test-options-launch-options "Direct link to launchOptions")

Added in: v1.10 testOptions.launchOptions

Options used to launch the browser, as passed to [browserType.launch()](/docs/api/class-browsertype#browser-type-launch). Specific options [testOptions.headless](/docs/api/class-testoptions#test-options-headless) and [testOptions.channel](/docs/api/class-testoptions#test-options-channel) take priority over this.

warning

Use custom browser args at your own risk, as some of them may break Playwright functionality.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'chromium',      use: {        ...devices['Desktop Chrome'],        launchOptions: {          args: ['--start-maximized']        }      }    }  ]});
```

**Type**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")

* * *

### locale[​](#test-options-locale "Direct link to locale")

Added in: v1.10 testOptions.locale

Specify user locale, for example `en-GB`, `de-DE`, etc. Locale will affect `navigator.language` value, `Accept-Language` request header value as well as number and date formatting rules. Defaults to `en-US`. Learn more about emulation in our [emulation guide](/docs/emulation#locale--timezone).

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    locale: 'it-IT',  },});
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### navigationTimeout[​](#test-options-navigation-timeout "Direct link to navigationTimeout")

Added in: v1.10 testOptions.navigationTimeout

Timeout for each navigation action in milliseconds. Defaults to 0 (no timeout).

This is a default navigation timeout, same as configured via [page.setDefaultNavigationTimeout()](/docs/api/class-page#page-set-default-navigation-timeout).

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    navigationTimeout: 3000,  },});
```

Learn more about [various timeouts](/docs/test-timeouts).

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### offline[​](#test-options-offline "Direct link to offline")

Added in: v1.10 testOptions.offline

Whether to emulate network being offline. Defaults to `false`. Learn more about [network emulation](/docs/emulation#offline).

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    offline: true  },});
```

**Type**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")

* * *

### permissions[​](#test-options-permissions "Direct link to permissions")

Added in: v1.10 testOptions.permissions

A list of permissions to grant to all pages in this context. See [browserContext.grantPermissions()](/docs/api/class-browsercontext#browser-context-grant-permissions) for more details. Defaults to none.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    permissions: ['notifications'],  },});
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>

* * *

### proxy[​](#test-options-proxy "Direct link to proxy")

Added in: v1.10 testOptions.proxy

Network proxy settings.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    proxy: {      server: 'http://myproxy.com:3128',      bypass: 'localhost',    },  },});
```

**Type**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
    -   `server` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example `http://myproxy.com:3128` or `socks5://myproxy.com:3128`. Short form `myproxy.com:3128` is considered an HTTP proxy.
        
    -   `bypass` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Optional comma-separated domains to bypass proxy, for example `".com, chromium.org, .domain.com"`.
        
    -   `username` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Optional username to use if HTTP proxy requires authentication.
        
    -   `password` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Optional password to use if HTTP proxy requires authentication.
        

* * *

### screenshot[​](#test-options-screenshot "Direct link to screenshot")

Added in: v1.10 testOptions.screenshot

Whether to automatically capture a screenshot after each test. Defaults to `'off'`.

-   `'off'`: Do not capture screenshots.
-   `'on'`: Capture screenshot after each test.
-   `'only-on-failure'`: Capture screenshot after each test failure.
-   `'on-first-failure'`: Capture screenshot after each test's first failure.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    screenshot: 'only-on-failure',  },});
```

Learn more about [automatic screenshots](/docs/test-use-options#recording-options).

**Type**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | "off" | "on" | "only-on-failure" | "on-first-failure"
    -   `mode` "off" | "on" | "only-on-failure" | "on-first-failure"
        
        Automatic screenshot mode.
        
    -   `fullPage` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_
        
        When true, takes a screenshot of the full scrollable page, instead of the currently visible viewport. Defaults to `false`.
        
    -   `omitBackground` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_
        
        Hides default white background and allows capturing screenshots with transparency. Not applicable to `jpeg` images. Defaults to `false`.
        

* * *

### serviceWorkers[​](#test-options-service-workers "Direct link to serviceWorkers")

Added in: v1.10 testOptions.serviceWorkers

Whether to allow sites to register Service workers. Defaults to `'allow'`.

-   `'allow'`: [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) can be registered.
-   `'block'`: Playwright will block all registration of Service Workers.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    serviceWorkers: 'allow'  },});
```

**Type**

-   "allow" | "block"

* * *

### storageState[​](#test-options-storage-state "Direct link to storageState")

Added in: v1.10 testOptions.storageState

Learn more about [storage state and auth](/docs/auth).

Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via [browserContext.storageState()](/docs/api/class-browsercontext#browser-context-storage-state).

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    storageState: 'storage-state.json',  },});
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
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
            

**Details**

When storage state is set up in the config, it is possible to reset storage state for a file:

not-signed-in.spec.ts

```
import { test } from '@playwright/test';// Reset storage state for this file to avoid being authenticatedtest.use({ storageState: { cookies: [], origins: [] } });test('not signed in test', async ({ page }) => {  // ...});
```

* * *

### testIdAttribute[​](#test-options-test-id-attribute "Direct link to testIdAttribute")

Added in: v1.27 testOptions.testIdAttribute

Custom attribute to be used in [page.getByTestId()](/docs/api/class-page#page-get-by-test-id). `data-testid` is used by default.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    testIdAttribute: 'pw-test-id',  },});
```

* * *

### timezoneId[​](#test-options-timezone-id "Direct link to timezoneId")

Added in: v1.10 testOptions.timezoneId

Changes the timezone of the context. See [ICU's metaZones.txt](https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1) for a list of supported timezone IDs. Defaults to the system timezone.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    timezoneId: 'Europe/Rome',  },});
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### trace[​](#test-options-trace "Direct link to trace")

Added in: v1.10 testOptions.trace

Whether to record trace for each test. Defaults to `'off'`.

-   `'off'`: Do not record trace.
-   `'on'`: Record trace for each test.
-   `'on-first-retry'`: Record trace only when retrying a test for the first time.
-   `'on-all-retries'`: Record trace only when retrying a test.
-   `'retain-on-failure'`: Record trace for each test. When test run passes, remove the recorded trace.
-   `'retain-on-first-failure'`: Record trace for the first run of each test, but not for retries. When test run passes, remove the recorded trace.

For more control, pass an object that specifies `mode` and trace features to enable.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    trace: 'on-first-retry'  },});
```

Learn more about [recording trace](/docs/test-use-options#recording-options).

**Type**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | "off" | "on" | "retain-on-failure" | "on-first-retry" | "retain-on-first-failure"
    -   `mode` "off" | "on" | "retain-on-failure" | "on-first-retry" | "on-all-retries" | "retain-on-first-failure"
        
        Trace recording mode.
        
    -   `attachments` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_
        
        Whether to include test attachments. Defaults to true. Optional.
        
    -   `screenshots` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_
        
        Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview. Defaults to true. Optional.
        
    -   `snapshots` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_
        
        Whether to capture DOM snapshot on every action. Defaults to true. Optional.
        
    -   `sources` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_
        
        Whether to include source files for trace actions. Defaults to true. Optional.
        

* * *

### userAgent[​](#test-options-user-agent "Direct link to userAgent")

Added in: v1.10 testOptions.userAgent

Specific user agent to use in this context.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    userAgent: 'some custom ua',  },});
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### video[​](#test-options-video "Direct link to video")

Added in: v1.10 testOptions.video

Whether to record video for each test. Defaults to `'off'`.

-   `'off'`: Do not record video.
-   `'on'`: Record video for each test.
-   `'retain-on-failure'`: Record video for each test, but remove all videos from successful test runs.
-   `'on-first-retry'`: Record video only when retrying a test for the first time.

To control video size, pass an object with `mode` and `size` properties. If video size is not specified, it will be equal to [testOptions.viewport](/docs/api/class-testoptions#test-options-viewport) scaled down to fit into 800x800. If `viewport` is not configured explicitly the video size defaults to 800x450. Actual picture of each page will be scaled down if necessary to fit the specified size.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    video: 'on-first-retry',  },});
```

Learn more about [recording video](/docs/test-use-options#recording-options).

**Type**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | "off" | "on" | "retain-on-failure" | "on-first-retry"
    -   `mode` "off" | "on" | "retain-on-failure" | "on-first-retry"
        
        Video recording mode.
        
    -   `size` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
        
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        Size of the recorded video. Optional.
        

* * *

### viewport[​](#test-options-viewport "Direct link to viewport")

Added in: v1.10 testOptions.viewport

Emulates consistent viewport for each page. Defaults to an 1280x720 viewport. Use `null` to disable the consistent viewport emulation. Learn more about [viewport emulation](/docs/emulation#viewport).

note

The `null` value opts out from the default presets, makes viewport depend on the host window size defined by the operating system. It makes the execution of the tests non-deterministic.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    viewport: { width: 100, height: 100 },  },});
```

**Type**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
    -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        page width in pixels.
        
    -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        page height in pixels.
