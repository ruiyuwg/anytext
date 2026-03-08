On this page

## Introduction[​](#introduction "Direct link to Introduction")

With Playwright you can test your app on any browser as well as emulate a real device such as a mobile phone or tablet. Simply configure the devices you would like to emulate and Playwright will simulate the browser behavior such as `"userAgent"`, `"screenSize"`, `"viewport"` and if it `"hasTouch"` enabled. You can also emulate the `"geolocation"`, `"locale"` and `"timezone"` for all tests or for a specific test as well as set the `"permissions"` to show notifications or change the `"colorScheme"`.

## Devices[​](#devices "Direct link to Devices")

Playwright comes with a [registry of device parameters](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json) using [playwright.devices](/docs/api/class-playwright#playwright-devices) for selected desktop, tablet and mobile devices. It can be used to simulate browser behavior for a specific device such as user agent, screen size, viewport and if it has touch enabled. All tests will run with the specified device parameters.

-   Test
-   Library

playwright.config.ts

```
import { defineConfig, devices } from '@playwright/test'; // import devicesexport default defineConfig({  projects: [    {      name: 'chromium',      use: {        ...devices['Desktop Chrome'],      },    },    {      name: 'Mobile Safari',      use: {        ...devices['iPhone 13'],      },    },  ],});
```

```
const { chromium, devices } = require('playwright');const browser = await chromium.launch();const iphone13 = devices['iPhone 13'];const context = await browser.newContext({  ...iphone13,});
```

![playwright.dev website emulated for iPhone 13](https://user-images.githubusercontent.com/13063165/220411073-76fe59f9-9a2d-463d-8e30-c19a7deca133.png)

## Viewport[​](#viewport "Direct link to Viewport")

The viewport is included in the device but you can override it for some tests with [page.setViewportSize()](/docs/api/class-page#page-set-viewport-size).

-   Test
-   Library

playwright.config.ts

```
import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'chromium',      use: {        ...devices['Desktop Chrome'],        // It is important to define the `viewport` property after destructuring `devices`,        // since devices also define the `viewport` for that device.        viewport: { width: 1280, height: 720 },      },    },  ]});
```

```
// Create context with given viewportconst context = await browser.newContext({  viewport: { width: 1280, height: 1024 }});
```

Test file:

-   Test
-   Library

tests/example.spec.ts

```
import { test, expect } from '@playwright/test';test.use({  viewport: { width: 1600, height: 1200 },});test('my test', async ({ page }) => {  // ...});
```

```
// Create context with given viewportconst context = await browser.newContext({  viewport: { width: 1280, height: 1024 }});// Resize viewport for individual pageawait page.setViewportSize({ width: 1600, height: 1200 });// Emulate high-DPIconst context = await browser.newContext({  viewport: { width: 2560, height: 1440 },  deviceScaleFactor: 2,});
```

The same works inside a test file.

-   Test
-   Library

tests/example.spec.ts

```
import { test, expect } from '@playwright/test';test.describe('specific viewport block', () => {  test.use({ viewport: { width: 1600, height: 1200 } });  test('my test', async ({ page }) => {    // ...  });});
```

```
// Create context with given viewportconst context = await browser.newContext({  viewport: { width: 1600, height: 1200 }});const page = await context.newPage();
```

## isMobile[​](#ismobile "Direct link to isMobile")

Whether the meta viewport tag is taken into account and touch events are enabled.

playwright.config.ts

```
import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'chromium',      use: {        ...devices['Desktop Chrome'],        // It is important to define the `isMobile` property after destructuring `devices`,        // since devices also define the `isMobile` for that device.        isMobile: false,      },    },  ]});
```

## Locale & Timezone[​](#locale--timezone "Direct link to Locale & Timezone")

Emulate the browser Locale and Timezone which can be set globally for all tests in the config and then overridden for particular tests.

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    // Emulates the browser locale.    locale: 'en-GB',    // Emulates the browser timezone.    timezoneId: 'Europe/Paris',  },});
```

-   Test
-   Library

tests/example.spec.ts

```
import { test, expect } from '@playwright/test';test.use({  locale: 'de-DE',  timezoneId: 'Europe/Berlin',});test('my test for de lang in Berlin timezone', async ({ page }) => {  await page.goto('https://www.bing.com');  // ...});
```

```
const context = await browser.newContext({  locale: 'de-DE',  timezoneId: 'Europe/Berlin',});
```

![Bing in german lang and timezone](https://user-images.githubusercontent.com/13063165/220416571-ccc96ab1-44bb-4579-8430-64502fc24a15.png)

Note that this only affects the browser timezone and locale, not the test runner timezone. To set the test runner timezone, you can use the [`TZ` environment variable](https://nodejs.org/api/cli.html#tz).

## Permissions[​](#permissions "Direct link to Permissions")

Allow app to show system notifications.

-   Test
-   Library

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    // Grants specified permissions to the browser context.    permissions: ['notifications'],  },});
```

```
const context = await browser.newContext({  permissions: ['notifications'],});
```

Allow notifications for a specific domain.

-   Test
-   Library

tests/example.spec.ts

```
import { test } from '@playwright/test';test.beforeEach(async ({ context }) => {  // Runs before each test and signs in each page.  await context.grantPermissions(['notifications'], { origin: 'https://skype.com' });});test('first', async ({ page }) => {  // page has notifications permission for https://skype.com.});
```

```
await context.grantPermissions(['notifications'], { origin: 'https://skype.com' });
```

Revoke all permissions with [browserContext.clearPermissions()](/docs/api/class-browsercontext#browser-context-clear-permissions).

```
// Libraryawait context.clearPermissions();
```

## Geolocation[​](#geolocation "Direct link to Geolocation")

Grant `"geolocation"` permissions and set geolocation to a specific area.

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    // Context geolocation    geolocation: { longitude: 12.492507, latitude: 41.889938 },    permissions: ['geolocation'],  },});
```

-   Test
-   Library

tests/example.spec.ts

```
import { test, expect } from '@playwright/test';test.use({  geolocation: { longitude: 41.890221, latitude: 12.492348 },  permissions: ['geolocation'],});test('my test with geolocation', async ({ page }) => {  // ...});
```

```
const context = await browser.newContext({  geolocation: { longitude: 41.890221, latitude: 12.492348 },  permissions: ['geolocation']});
```

![geolocation for italy on bing maps](https://user-images.githubusercontent.com/13063165/220417670-bb22d815-f5cd-47c4-8562-0b88165eac27.png)

Change the location later:

-   Test
-   Library

tests/example.spec.ts

```
import { test, expect } from '@playwright/test';test.use({  geolocation: { longitude: 41.890221, latitude: 12.492348 },  permissions: ['geolocation'],});test('my test with geolocation', async ({ page, context }) => {  // overwrite the location for this test  await context.setGeolocation({ longitude: 48.858455, latitude: 2.294474 });});
```

```
await context.setGeolocation({ longitude: 48.858455, latitude: 2.294474 });
```

**Note** you can only change geolocation for all pages in the context.

## Color Scheme and Media[​](#color-scheme-and-media "Direct link to Color Scheme and Media")

Emulate the users `"colorScheme"`. Supported values are 'light' and 'dark'. You can also emulate the media type with [page.emulateMedia()](/docs/api/class-page#page-emulate-media).

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    colorScheme: 'dark',  },});
```

-   Test
-   Library

tests/example.spec.ts

```
import { test, expect } from '@playwright/test';test.use({  colorScheme: 'dark' // or 'light'});test('my test with dark mode', async ({ page }) => {  // ...});
```

```
// Create context with dark modeconst context = await browser.newContext({  colorScheme: 'dark' // or 'light'});// Create page with dark modeconst page = await browser.newPage({  colorScheme: 'dark' // or 'light'});// Change color scheme for the pageawait page.emulateMedia({ colorScheme: 'dark' });// Change media for pageawait page.emulateMedia({ media: 'print' });
```

![playwright web in dark mode](https://user-images.githubusercontent.com/13063165/220411638-55d2b051-4678-4da7-9f0b-ed22f5a3c47c.png)

## User Agent[​](#user-agent "Direct link to User Agent")

The User Agent is included in the device and therefore you will rarely need to change it however if you do need to test a different user agent you can override it with the `userAgent` property.

-   Test
-   Library

tests/example.spec.ts

```
import { test, expect } from '@playwright/test';test.use({ userAgent: 'My user agent' });test('my user agent test', async ({ page }) => {  // ...});
```

```
const context = await browser.newContext({  userAgent: 'My user agent'});
```

## Offline[​](#offline "Direct link to Offline")

Emulate the network being offline.

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    offline: true  },});
```

## JavaScript Enabled[​](#javascript-enabled "Direct link to JavaScript Enabled")

Emulate a user scenario where JavaScript is disabled.

-   Test
-   Library

tests/example.spec.ts

```
import { test, expect } from '@playwright/test';test.use({ javaScriptEnabled: false });test('test with no JavaScript', async ({ page }) => {  // ...});
```

```
const context = await browser.newContext({  javaScriptEnabled: false});
```
