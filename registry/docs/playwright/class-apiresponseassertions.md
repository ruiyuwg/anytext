On this page

The [APIResponseAssertions](/docs/api/class-apiresponseassertions "APIResponseAssertions") class provides assertion methods that can be used to make assertions about the [APIResponse](/docs/api/class-apiresponse "APIResponse") in the tests.

```
import { test, expect } from '@playwright/test';test('navigates to login', async ({ page }) => {  // ...  const response = await page.request.get('https://playwright.dev');  await expect(response).toBeOK();});
```

* * *

## Methods[​](#methods "Direct link to Methods")

### toBeOK[​](#api-response-assertions-to-be-ok "Direct link to toBeOK")

Added in: v1.18 apiResponseAssertions.toBeOK

Ensures the response status code is within `200..299` range.

**Usage**

```
await expect(response).toBeOK();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#api-response-assertions-to-be-ok-return)

* * *

## Properties[​](#properties "Direct link to Properties")

### not[​](#api-response-assertions-not "Direct link to not")

Added in: v1.20 apiResponseAssertions.not

Makes the assertion check for the opposite condition. For example, this code tests that the response status is not successful:

```
await expect(response).not.toBeOK();
```

**Usage**

```
expect(response).not
```

**Type**

-   [APIResponseAssertions](/docs/api/class-apiresponseassertions "APIResponseAssertions")
