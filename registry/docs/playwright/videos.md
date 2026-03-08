On this page

## Introduction[​](#introduction "Direct link to Introduction")

With Playwright you can record videos for your tests.

## Record video[​](#record-video "Direct link to Record video")

Playwright Test can record videos for your tests, controlled by the `video` option in your Playwright config. By default videos are off.

-   `'off'` - Do not record video.
-   `'on'` - Record video for each test.
-   `'retain-on-failure'` - Record video for each test, but remove all videos from successful test runs.
-   `'on-first-retry'` - Record video only when retrying a test for the first time.

Video files will appear in the test output directory, typically `test-results`. See [testOptions.video](/docs/api/class-testoptions#test-options-video) for advanced video configuration.

Videos are saved upon [browser context](/docs/browser-contexts) closure at the end of a test. If you create a browser context manually, make sure to await [browserContext.close()](/docs/api/class-browsercontext#browser-context-close).

-   Test
-   Library

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    video: 'on-first-retry',  },});
```

```
const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });// Make sure to await close, so that videos are saved.await context.close();
```

You can also specify video size. The video size defaults to the viewport size scaled down to fit 800x800. The video of the viewport is placed in the top-left corner of the output video, scaled down to fit if necessary. You may need to set the viewport size to match your desired video size.

-   Test
-   Library

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    video: {      mode: 'on-first-retry',      size: { width: 640, height: 480 }    }  },});
```

```
const context = await browser.newContext({  recordVideo: {    dir: 'videos/',    size: { width: 640, height: 480 },  }});
```

For multi-page scenarios, you can access the video file associated with the page via the [page.video()](/docs/api/class-page#page-video).

```
const path = await page.video().path();
```

note

Note that the video is only available after the page or browser context is closed.
