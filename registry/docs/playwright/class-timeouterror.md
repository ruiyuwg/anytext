-   extends: [Error](https://nodejs.org/api/errors.html#errors_class_error "Error")

TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. [locator.waitFor()](/docs/api/class-locator#locator-wait-for) or [browserType.launch()](/docs/api/class-browsertype#browser-type-launch).

```
const playwright = require('playwright');(async () => {  const browser = await playwright.chromium.launch();  const context = await browser.newContext();  const page = await context.newPage();  try {    await page.locator('text=Foo').click({      timeout: 100,    });  } catch (error) {    if (error instanceof playwright.errors.TimeoutError)      console.log('Timeout!');  }  await browser.close();})();
```
