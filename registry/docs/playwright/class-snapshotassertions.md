On this page

Playwright provides methods for comparing page and element screenshots with expected values stored in files.

```
expect(screenshot).toMatchSnapshot('landing-page.png');
```

* * *

## Methods[​](#methods "Direct link to Methods")

### toMatchSnapshot(name)[​](#snapshot-assertions-to-match-snapshot-1 "Direct link to toMatchSnapshot(name)")

Added in: v1.22 snapshotAssertions.toMatchSnapshot(name)

caution

To compare screenshots, use [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1) instead.

Ensures that passed value, either a [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") or a [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer"), matches the expected snapshot stored in the test snapshots directory.

**Usage**

```
// Basic usage.expect(await page.screenshot()).toMatchSnapshot('landing-page.png');// Pass options to customize the snapshot comparison and have a generated name.expect(await page.screenshot()).toMatchSnapshot('landing-page.png', {  maxDiffPixels: 27, // allow no more than 27 different pixels.});// Configure image matching threshold.expect(await page.screenshot()).toMatchSnapshot('landing-page.png', { threshold: 0.3 });// Bring some structure to your snapshot files by passing file path segments.expect(await page.screenshot()).toMatchSnapshot(['landing', 'step2.png']);expect(await page.screenshot()).toMatchSnapshot(['landing', 'step3.png']);
```

Learn more about [visual comparisons](/docs/test-snapshots).

Note that matching snapshots only work with Playwright test runner.

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#snapshot-assertions-to-match-snapshot-1-option-name)
    
    Snapshot name.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `maxDiffPixelRatio` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#snapshot-assertions-to-match-snapshot-1-option-max-diff-pixel-ratio)
        
        An acceptable ratio of pixels that are different to the total amount of pixels, between `0` and `1`. Default is configurable with `TestConfig.expect`. Unset by default.
        
    -   `maxDiffPixels` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#snapshot-assertions-to-match-snapshot-1-option-max-diff-pixels)
        
        An acceptable amount of pixels that could be different. Default is configurable with `TestConfig.expect`. Unset by default.
        
    -   `threshold` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#snapshot-assertions-to-match-snapshot-1-option-threshold)
        
        An acceptable perceived color difference in the [YIQ color space](https://en.wikipedia.org/wiki/YIQ) between the same pixel in compared images, between zero (strict) and one (lax), default is configurable with `TestConfig.expect`. Defaults to `0.2`.
        

* * *

### toMatchSnapshot(options)[​](#snapshot-assertions-to-match-snapshot-2 "Direct link to toMatchSnapshot(options)")

Added in: v1.22 snapshotAssertions.toMatchSnapshot(options)

caution

To compare screenshots, use [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-2) instead.

Ensures that passed value, either a [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") or a [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer"), matches the expected snapshot stored in the test snapshots directory.

**Usage**

```
// Basic usage and the file name is derived from the test name.expect(await page.screenshot()).toMatchSnapshot();// Pass options to customize the snapshot comparison and have a generated name.expect(await page.screenshot()).toMatchSnapshot({  maxDiffPixels: 27, // allow no more than 27 different pixels.});// Configure image matching threshold and snapshot name.expect(await page.screenshot()).toMatchSnapshot({  name: 'landing-page.png',  threshold: 0.3,});
```

Learn more about [visual comparisons](/docs/test-snapshots).

Note that matching snapshots only work with Playwright test runner.

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `maxDiffPixelRatio` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#snapshot-assertions-to-match-snapshot-2-option-max-diff-pixel-ratio)
        
        An acceptable ratio of pixels that are different to the total amount of pixels, between `0` and `1`. Default is configurable with `TestConfig.expect`. Unset by default.
        
    -   `maxDiffPixels` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#snapshot-assertions-to-match-snapshot-2-option-max-diff-pixels)
        
        An acceptable amount of pixels that could be different. Default is configurable with `TestConfig.expect`. Unset by default.
        
    -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#snapshot-assertions-to-match-snapshot-2-option-name)
        
        Snapshot name. If not passed, the test name and ordinals are used when called multiple times.
        
    -   `threshold` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#snapshot-assertions-to-match-snapshot-2-option-threshold)
        
        An acceptable perceived color difference in the [YIQ color space](https://en.wikipedia.org/wiki/YIQ) between the same pixel in compared images, between zero (strict) and one (lax), default is configurable with `TestConfig.expect`. Defaults to `0.2`.
