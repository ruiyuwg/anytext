On this page

## Introduction[​](#introduction "Direct link to Introduction")

note

Extensions only work in Chromium when launched with a persistent context. Use custom browser args at your own risk, as some of them may break Playwright functionality.

Google Chrome and Microsoft Edge [removed the command-line flags needed to side-load extensions](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/FxMU1TvxWWg/m/daZVTYNlBQAJ), so use Chromium that comes bundled with Playwright.

The snippet below retrieves the [service worker](https://developer.chrome.com/docs/extensions/develop/concepts/service-workers) of a [Manifest v3](https://developer.chrome.com/docs/extensions/develop/migrate) extension whose source is located in `./my-extension`.

Note the use of the `chromium` channel that allows to run extensions in headless mode. Alternatively, you can launch the browser in headed mode.

```
const { chromium } = require('playwright');(async () => {  const pathToExtension = require('path').join(__dirname, 'my-extension');  const userDataDir = '/tmp/test-user-data-dir';  const browserContext = await chromium.launchPersistentContext(userDataDir, {    channel: 'chromium',    args: [      `--disable-extensions-except=${pathToExtension}`,      `--load-extension=${pathToExtension}`    ]  });  let [serviceWorker] = browserContext.serviceWorkers();  if (!serviceWorker)    serviceWorker = await browserContext.waitForEvent('serviceworker');  // Test the service worker as you would any other worker.  await browserContext.close();})();
```

## Testing[​](#testing "Direct link to Testing")

To have the extension loaded when running tests you can use a test fixture to set the context. You can also dynamically retrieve the extension id and use it to load and test the popup page for example.

Note the use of the `chromium` channel that allows to run extensions in headless mode. Alternatively, you can launch the browser in headed mode.

First, add fixtures that will load the extension:

fixtures.ts

```
import { test as base, chromium, type BrowserContext } from '@playwright/test';import path from 'path';export const test = base.extend<{  context: BrowserContext;  extensionId: string;}>({  context: async ({ }, use) => {    const pathToExtension = path.join(__dirname, 'my-extension');    const context = await chromium.launchPersistentContext('', {      channel: 'chromium',      args: [        `--disable-extensions-except=${pathToExtension}`,        `--load-extension=${pathToExtension}`,      ],    });    await use(context);    await context.close();  },  extensionId: async ({ context }, use) => {    // for manifest v3:    let [serviceWorker] = context.serviceWorkers();    if (!serviceWorker)      serviceWorker = await context.waitForEvent('serviceworker');    const extensionId = serviceWorker.url().split('/')[2];    await use(extensionId);  },});export const expect = test.expect;
```

Then use these fixtures in a test:

```
import { test, expect } from './fixtures';test('example test', async ({ page }) => {  await page.goto('https://example.com');  await expect(page.locator('body')).toHaveText('Changed by my-extension');});test('popup page', async ({ page, extensionId }) => {  await page.goto(`chrome-extension://${extensionId}/popup.html`);  await expect(page.locator('body')).toHaveText('my-extension popup');});
```
