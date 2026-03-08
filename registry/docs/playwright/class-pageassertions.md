On this page

The [PageAssertions](/docs/api/class-pageassertions "PageAssertions") class provides assertion methods that can be used to make assertions about the [Page](/docs/api/class-page "Page") state in the tests.

```
import { test, expect } from '@playwright/test';test('navigates to login', async ({ page }) => {  // ...  await page.getByText('Sign in').click();  await expect(page).toHaveURL(/.*\/login/);});
```

* * *

## Methods[​](#methods "Direct link to Methods")

### toHaveScreenshot(name)[​](#page-assertions-to-have-screenshot-1 "Direct link to toHaveScreenshot(name)")

Added in: v1.23 pageAssertions.toHaveScreenshot(name)

This function will wait until two consecutive page screenshots yield the same result, and then compare the last screenshot with the expectation.

**Usage**

```
await expect(page).toHaveScreenshot('image.png');
```

Note that screenshot assertions only work with Playwright test runner.

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#page-assertions-to-have-screenshot-1-option-name)
    
    Snapshot name.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `animations` "disabled" | "allow" _(optional)_[#](#page-assertions-to-have-screenshot-1-option-animations)
        
        When set to `"disabled"`, stops CSS animations, CSS transitions and Web Animations. Animations get different treatment depending on their duration:
        
        -   finite animations are fast-forwarded to completion, so they'll fire `transitionend` event.
        -   infinite animations are canceled to initial state, and then played over after the screenshot.
        
        Defaults to `"disabled"` that disables animations.
        
    -   `caret` "hide" | "initial" _(optional)_[#](#page-assertions-to-have-screenshot-1-option-caret)
        
        When set to `"hide"`, screenshot will hide text caret. When set to `"initial"`, text caret behavior will not be changed. Defaults to `"hide"`.
        
    -   `clip` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#page-assertions-to-have-screenshot-1-option-clip)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            x-coordinate of top-left corner of clip area
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            y-coordinate of top-left corner of clip area
            
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            width of clipping area
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            height of clipping area
            
        
        An object which specifies clipping of the resulting image.
        
    -   `fullPage` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-assertions-to-have-screenshot-1-option-full-page)
        
        When true, takes a screenshot of the full scrollable page, instead of the currently visible viewport. Defaults to `false`.
        
    -   `mask` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Locator](/docs/api/class-locator "Locator")\> _(optional)_[#](#page-assertions-to-have-screenshot-1-option-mask)
        
        Specify locators that should be masked when the screenshot is taken. Masked elements will be overlaid with a pink box `#FF00FF` (customized by [maskColor](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1-option-mask-color)) that completely covers its bounding box. The mask is also applied to invisible elements, see [Matching only visible elements](/docs/locators#matching-only-visible-elements) to disable that.
        
    -   `maskColor` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.35[#](#page-assertions-to-have-screenshot-1-option-mask-color)
        
        Specify the color of the overlay box for masked elements, in [CSS color format](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value). Default color is pink `#FF00FF`.
        
    -   `maxDiffPixelRatio` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-assertions-to-have-screenshot-1-option-max-diff-pixel-ratio)
        
        An acceptable ratio of pixels that are different to the total amount of pixels, between `0` and `1`. Default is configurable with `TestConfig.expect`. Unset by default.
        
    -   `maxDiffPixels` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-assertions-to-have-screenshot-1-option-max-diff-pixels)
        
        An acceptable amount of pixels that could be different. Default is configurable with `TestConfig.expect`. Unset by default.
        
    -   `omitBackground` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-assertions-to-have-screenshot-1-option-omit-background)
        
        Hides default white background and allows capturing screenshots with transparency. Not applicable to `jpeg` images. Defaults to `false`.
        
    -   `scale` "css" | "device" _(optional)_[#](#page-assertions-to-have-screenshot-1-option-scale)
        
        When set to `"css"`, screenshot will have a single pixel per each css pixel on the page. For high-dpi devices, this will keep screenshots small. Using `"device"` option will produce a single pixel per each device pixel, so screenshots of high-dpi devices will be twice as large or even larger.
        
        Defaults to `"css"`.
        
    -   `stylePath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_ Added in: v1.41[#](#page-assertions-to-have-screenshot-1-option-style-path)
        
        File name containing the stylesheet to apply while making the screenshot. This is where you can hide dynamic elements, make elements invisible or change their properties to help you creating repeatable screenshots. This stylesheet pierces the Shadow DOM and applies to the inner frames.
        
    -   `threshold` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-assertions-to-have-screenshot-1-option-threshold)
        
        An acceptable perceived color difference in the [YIQ color space](https://en.wikipedia.org/wiki/YIQ) between the same pixel in compared images, between zero (strict) and one (lax), default is configurable with `TestConfig.expect`. Defaults to `0.2`.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-assertions-to-have-screenshot-1-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-assertions-to-have-screenshot-1-return)

* * *

### toHaveScreenshot(options)[​](#page-assertions-to-have-screenshot-2 "Direct link to toHaveScreenshot(options)")

Added in: v1.23 pageAssertions.toHaveScreenshot(options)

This function will wait until two consecutive page screenshots yield the same result, and then compare the last screenshot with the expectation.

**Usage**

```
await expect(page).toHaveScreenshot();
```

Note that screenshot assertions only work with Playwright test runner.

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `animations` "disabled" | "allow" _(optional)_[#](#page-assertions-to-have-screenshot-2-option-animations)
        
        When set to `"disabled"`, stops CSS animations, CSS transitions and Web Animations. Animations get different treatment depending on their duration:
        
        -   finite animations are fast-forwarded to completion, so they'll fire `transitionend` event.
        -   infinite animations are canceled to initial state, and then played over after the screenshot.
        
        Defaults to `"disabled"` that disables animations.
        
    -   `caret` "hide" | "initial" _(optional)_[#](#page-assertions-to-have-screenshot-2-option-caret)
        
        When set to `"hide"`, screenshot will hide text caret. When set to `"initial"`, text caret behavior will not be changed. Defaults to `"hide"`.
        
    -   `clip` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#page-assertions-to-have-screenshot-2-option-clip)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            x-coordinate of top-left corner of clip area
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            y-coordinate of top-left corner of clip area
            
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            width of clipping area
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            height of clipping area
            
        
        An object which specifies clipping of the resulting image.
        
    -   `fullPage` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-assertions-to-have-screenshot-2-option-full-page)
        
        When true, takes a screenshot of the full scrollable page, instead of the currently visible viewport. Defaults to `false`.
        
    -   `mask` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Locator](/docs/api/class-locator "Locator")\> _(optional)_[#](#page-assertions-to-have-screenshot-2-option-mask)
        
        Specify locators that should be masked when the screenshot is taken. Masked elements will be overlaid with a pink box `#FF00FF` (customized by [maskColor](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-2-option-mask-color)) that completely covers its bounding box. The mask is also applied to invisible elements, see [Matching only visible elements](/docs/locators#matching-only-visible-elements) to disable that.
        
    -   `maskColor` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.35[#](#page-assertions-to-have-screenshot-2-option-mask-color)
        
        Specify the color of the overlay box for masked elements, in [CSS color format](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value). Default color is pink `#FF00FF`.
        
    -   `maxDiffPixelRatio` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-assertions-to-have-screenshot-2-option-max-diff-pixel-ratio)
        
        An acceptable ratio of pixels that are different to the total amount of pixels, between `0` and `1`. Default is configurable with `TestConfig.expect`. Unset by default.
        
    -   `maxDiffPixels` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-assertions-to-have-screenshot-2-option-max-diff-pixels)
        
        An acceptable amount of pixels that could be different. Default is configurable with `TestConfig.expect`. Unset by default.
        
    -   `omitBackground` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-assertions-to-have-screenshot-2-option-omit-background)
        
        Hides default white background and allows capturing screenshots with transparency. Not applicable to `jpeg` images. Defaults to `false`.
        
    -   `scale` "css" | "device" _(optional)_[#](#page-assertions-to-have-screenshot-2-option-scale)
        
        When set to `"css"`, screenshot will have a single pixel per each css pixel on the page. For high-dpi devices, this will keep screenshots small. Using `"device"` option will produce a single pixel per each device pixel, so screenshots of high-dpi devices will be twice as large or even larger.
        
        Defaults to `"css"`.
        
    -   `stylePath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_ Added in: v1.41[#](#page-assertions-to-have-screenshot-2-option-style-path)
        
        File name containing the stylesheet to apply while making the screenshot. This is where you can hide dynamic elements, make elements invisible or change their properties to help you creating repeatable screenshots. This stylesheet pierces the Shadow DOM and applies to the inner frames.
        
    -   `threshold` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-assertions-to-have-screenshot-2-option-threshold)
        
        An acceptable perceived color difference in the [YIQ color space](https://en.wikipedia.org/wiki/YIQ) between the same pixel in compared images, between zero (strict) and one (lax), default is configurable with `TestConfig.expect`. Defaults to `0.2`.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-assertions-to-have-screenshot-2-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-assertions-to-have-screenshot-2-return)

* * *

### toHaveTitle[​](#page-assertions-to-have-title "Direct link to toHaveTitle")

Added in: v1.20 pageAssertions.toHaveTitle

Ensures the page has the given title.

**Usage**

```
await expect(page).toHaveTitle(/.*checkout/);
```

**Arguments**

-   `titleOrRegExp` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") Added in: v1.18[#](#page-assertions-to-have-title-option-title-or-reg-exp)
    
    Expected title or RegExp.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#page-assertions-to-have-title-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-assertions-to-have-title-return)

* * *

### toHaveURL[​](#page-assertions-to-have-url "Direct link to toHaveURL")

Added in: v1.20 pageAssertions.toHaveURL

Ensures the page is navigated to the given URL.

**Usage**

```
// Check for the page URL to be 'https://playwright.dev/docs/intro' (including query string)await expect(page).toHaveURL('https://playwright.dev/docs/intro');// Check for the page URL to contain 'doc', followed by an optional 's', followed by '/'await expect(page).toHaveURL(/docs?\//);// Check for the predicate to be satisfied// For example: verify query stringsawait expect(page).toHaveURL(url => {  const params = url.searchParams;  return params.has('search') && params.has('options') && params.get('id') === '5';});
```

**Arguments**

-   `url` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([URL](https://nodejs.org/api/url.html "URL")):[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") Added in: v1.18[#](#page-assertions-to-have-url-option-url)
    
    Expected URL string, RegExp, or predicate receiving [URL](https://nodejs.org/api/url.html "URL") to match. When [baseURL](/docs/api/class-browser#browser-new-context-option-base-url) is provided via the context options and the `url` argument is a string, the two values are merged via the [`new URL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) constructor and used for the comparison against the current browser URL.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `ignoreCase` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.44[#](#page-assertions-to-have-url-option-ignore-case)
        
        Whether to perform case-insensitive match. [ignoreCase](/docs/api/class-pageassertions#page-assertions-to-have-url-option-ignore-case) option takes precedence over the corresponding regular expression parameter if specified. A provided predicate ignores this flag.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#page-assertions-to-have-url-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-assertions-to-have-url-return)

* * *

## Properties[​](#properties "Direct link to Properties")

### not[​](#page-assertions-not "Direct link to not")

Added in: v1.20 pageAssertions.not

Makes the assertion check for the opposite condition. For example, this code tests that the page URL doesn't contain `"error"`:

```
await expect(page).not.toHaveURL('error');
```

**Usage**

```
expect(page).not
```

**Type**

-   [PageAssertions](/docs/api/class-pageassertions "PageAssertions")
