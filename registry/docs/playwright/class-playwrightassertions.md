On this page

Playwright gives you Web-First Assertions with convenience methods for creating assertions that will wait and retry until the expected condition is met.

Consider the following example:

```
import { test, expect } from '@playwright/test';test('status becomes submitted', async ({ page }) => {  // ...  await page.locator('#submit-button').click();  await expect(page.locator('.status')).toHaveText('Submitted');});
```

Playwright will be re-testing the node with the selector `.status` until fetched Node has the `"Submitted"` text. It will be re-fetching the node and checking it over and over, until the condition is met or until the timeout is reached. You can pass this timeout as an option.

By default, the timeout for assertions is set to 5 seconds.

* * *

## Methods[​](#methods "Direct link to Methods")

### expect(response)[​](#playwright-assertions-expect-api-response "Direct link to expect(response)")

Added in: v1.18 playwrightAssertions.expect(response)

Creates a [APIResponseAssertions](/docs/api/class-apiresponseassertions "APIResponseAssertions") object for the given [APIResponse](/docs/api/class-apiresponse "APIResponse").

**Usage**

**Arguments**

-   `response` [APIResponse](/docs/api/class-apiresponse "APIResponse")[#](#playwright-assertions-expect-api-response-option-response)
    
    [APIResponse](/docs/api/class-apiresponse "APIResponse") object to use for assertions.
    

**Returns**

-   [APIResponseAssertions](/docs/api/class-apiresponseassertions "APIResponseAssertions")[#](#playwright-assertions-expect-api-response-return)

* * *

### expect(value)[​](#playwright-assertions-expect-generic "Direct link to expect(value)")

Added in: v1.9 playwrightAssertions.expect(value)

Creates a [GenericAssertions](/docs/api/class-genericassertions "GenericAssertions") object for the given value.

**Usage**

```
expect(value);
```

**Arguments**

-   `value` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#playwright-assertions-expect-generic-option-value)
    
    Value that will be asserted.
    

**Returns**

-   [GenericAssertions](/docs/api/class-genericassertions "GenericAssertions")[#](#playwright-assertions-expect-generic-return)

* * *

### expect(locator)[​](#playwright-assertions-expect-locator "Direct link to expect(locator)")

Added in: v1.18 playwrightAssertions.expect(locator)

Creates a [LocatorAssertions](/docs/api/class-locatorassertions "LocatorAssertions") object for the given [Locator](/docs/api/class-locator "Locator").

**Usage**

**Arguments**

-   `locator` [Locator](/docs/api/class-locator "Locator")[#](#playwright-assertions-expect-locator-option-locator)
    
    [Locator](/docs/api/class-locator "Locator") object to use for assertions.
    

**Returns**

-   [LocatorAssertions](/docs/api/class-locatorassertions "LocatorAssertions")[#](#playwright-assertions-expect-locator-return)

* * *

### expect(page)[​](#playwright-assertions-expect-page "Direct link to expect(page)")

Added in: v1.18 playwrightAssertions.expect(page)

Creates a [PageAssertions](/docs/api/class-pageassertions "PageAssertions") object for the given [Page](/docs/api/class-page "Page").

**Usage**

**Arguments**

-   `page` [Page](/docs/api/class-page "Page")[#](#playwright-assertions-expect-page-option-page)
    
    [Page](/docs/api/class-page "Page") object to use for assertions.
    

**Returns**

-   [PageAssertions](/docs/api/class-pageassertions "PageAssertions")[#](#playwright-assertions-expect-page-return)
