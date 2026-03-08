On this page

## Overview[​](#overview "Direct link to Overview")

With Playwright's Snapshot testing you can assert the accessibility tree of a page against a predefined snapshot template.

```
await page.goto('https://playwright.dev/');await expect(page.getByRole('banner')).toMatchAriaSnapshot(`  - banner:    - heading /Playwright enables reliable end-to-end/ [level=1]    - link "Get started"    - link "Star microsoft/playwright on GitHub"    - link /[\\d]+k\\+ stargazers on GitHub/`);
```

## Assertion testing vs Snapshot testing[​](#assertion-testing-vs-snapshot-testing "Direct link to Assertion testing vs Snapshot testing")

Snapshot testing and assertion testing serve different purposes in test automation:

### Assertion testing[​](#assertion-testing "Direct link to Assertion testing")

Assertion testing is a targeted approach where you assert specific values or conditions about elements or components. For instance, with Playwright, [expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text) verifies that an element contains the expected text, and [expect(locator).toHaveValue()](/docs/api/class-locatorassertions#locator-assertions-to-have-value) confirms that an input field has the expected value. Assertion tests are specific and generally check the current state of an element or property against an expected, predefined state. They work well for predictable, single-value checks but are limited in scope when testing the broader structure or variations.

**Advantages**

-   **Clarity**: The intent of the test is explicit and easy to understand.
-   **Specificity**: Tests focus on particular aspects of functionality, making them more robust against unrelated changes.
-   **Debugging**: Failures provide targeted feedback, pointing directly to the problematic aspect.

**Disadvantages**

-   **Verbose for complex outputs**: Writing assertions for complex data structures or large outputs can be cumbersome and error-prone.
-   **Maintenance overhead**: As code evolves, manually updating assertions can be time-consuming.

### Snapshot testing[​](#snapshot-testing "Direct link to Snapshot testing")

Snapshot testing captures a “snapshot” or representation of the entire state of an element, component, or data at a given moment, which is then saved for future comparisons. When re-running tests, the current state is compared to the snapshot, and if there are differences, the test fails. This approach is especially useful for complex or dynamic structures, where manually asserting each detail would be too time-consuming. Snapshot testing is broader and more holistic than assertion testing, allowing you to track more complex changes over time.

**Advantages**

-   **Simplifies complex outputs**: For example, testing a UI component's rendered output can be tedious with traditional assertions. Snapshots capture the entire output for easy comparison.
-   **Quick Feedback loop**: Developers can easily spot unintended changes in the output.
-   **Encourages consistency**: Helps maintain consistent output as code evolves.

**Disadvantages**

-   **Over-Reliance**: It can be tempting to accept changes to snapshots without fully understanding them, potentially hiding bugs.
-   **Granularity**: Large snapshots may be hard to interpret when differences arise, especially if minor changes affect large portions of the output.
-   **Suitability**: Not ideal for highly dynamic content where outputs change frequently or unpredictably.

### When to use[​](#when-to-use "Direct link to When to use")

-   **Snapshot testing** is ideal for:
    -   UI testing of whole pages and components.
    -   Broad structural checks for complex UI components.
    -   Regression testing for outputs that rarely change structure.
-   **Assertion testing** is ideal for:
    -   Core logic validation.
    -   Computed value testing.
    -   Fine-grained tests requiring precise conditions.

By combining snapshot testing for broad, structural checks and assertion testing for specific functionality, you can achieve a well-rounded testing strategy.

## Aria snapshots[​](#aria-snapshots "Direct link to Aria snapshots")

In Playwright, aria snapshots provide a YAML representation of the accessibility tree of a page. These snapshots can be stored and compared later to verify if the page structure remains consistent or meets defined expectations.

The YAML format describes the hierarchical structure of accessible elements on the page, detailing **roles**, **attributes**, **values**, and **text content**. The structure follows a tree-like syntax, where each node represents an accessible element, and indentation indicates nested elements.

Each accessible element in the tree is represented as a YAML node:

```
- role "name" [attribute=value]
```

-   **role**: Specifies the ARIA or HTML role of the element (e.g., `heading`, `list`, `listitem`, `button`).
-   **"name"**: Accessible name of the element. Quoted strings indicate exact values, `/patterns/` are used for regular expression.
-   **\[attribute=value\]**: Attributes and values, in square brackets, represent specific ARIA attributes, such as `checked`, `disabled`, `expanded`, `level`, `pressed`, or `selected`.

These values are derived from ARIA attributes or calculated based on HTML semantics. To inspect the accessibility tree structure of a page, use the [Chrome DevTools Accessibility Tab](https://developer.chrome.com/docs/devtools/accessibility/reference#tab).

## Snapshot matching[​](#snapshot-matching "Direct link to Snapshot matching")

The [expect(locator).toMatchAriaSnapshot()](/docs/api/class-locatorassertions#locator-assertions-to-match-aria-snapshot) assertion method in Playwright compares the accessible structure of the locator scope with a predefined aria snapshot template, helping validate the page's state against testing requirements.

For the following DOM:

```
<h1>title</h1>
```

You can match it using the following snapshot template:

```
await expect(page.locator('body')).toMatchAriaSnapshot(`  - heading "title"`);
```

When matching, the snapshot template is compared to the current accessibility tree of the page:

-   If the tree structure matches the template, the test passes; otherwise, it fails, indicating a mismatch between expected and actual accessibility states.
-   The comparison is case-sensitive and collapses whitespace, so indentation and line breaks are ignored.
-   The comparison is order-sensitive, meaning the order of elements in the snapshot template must match the order in the page's accessibility tree.

### Partial matching[​](#partial-matching "Direct link to Partial matching")

You can perform partial matches on nodes by omitting attributes or accessible names, enabling verification of specific parts of the accessibility tree without requiring exact matches. This flexibility is helpful for dynamic or irrelevant attributes.

```
<button>Submit</button>
```

_aria snapshot_

```
- button
```

In this example, the button role is matched, but the accessible name ("Submit") is not specified, allowing the test to pass regardless of the button's label.

* * *

For elements with ARIA attributes like `checked` or `disabled`, omitting these attributes allows partial matching, focusing solely on role and hierarchy.

```
<input type="checkbox" checked>
```

_aria snapshot for partial match_

```
- checkbox
```

In this partial match, the `checked` attribute is ignored, so the test will pass regardless of the checkbox state.

* * *

Similarly, you can partially match children in lists or groups by omitting specific list items or nested elements.

```
<ul>  <li>Feature A</li>  <li>Feature B</li>  <li>Feature C</li></ul>
```

_aria snapshot for partial match_

```
- list  - listitem: Feature B
```

Partial matches let you create flexible snapshot tests that verify essential page structure without enforcing specific content or attributes.

### Strict matching[​](#strict-matching "Direct link to Strict matching")

By default, a template containing the subset of children will be matched:

```
<ul>  <li>Feature A</li>  <li>Feature B</li>  <li>Feature C</li></ul>
```

_aria snapshot for partial match_

```
- list  - listitem: Feature B
```

The `/children` property can be used to control how child elements are matched:

-   `contain` (default): Matches if all specified children are present in order
-   `equal`: Matches if the children exactly match the specified list in order
-   `deep-equal`: Matches if the children exactly match the specified list in order, including nested children

```
<ul>  <li>Feature A</li>  <li>Feature B</li>  <li>Feature C</li></ul>
```

_aria snapshot will fail due to Feature C not being in the template_

```
- list  - /children: equal  - listitem: Feature A  - listitem: Feature B
```

### Matching with regular expressions[​](#matching-with-regular-expressions "Direct link to Matching with regular expressions")

Regular expressions allow flexible matching for elements with dynamic or variable text. Accessible names and text can support regex patterns.

```
<h1>Issues 12</h1>
```

_aria snapshot with regular expression_

```
- heading /Issues \d+/
```

## Generating snapshots[​](#generating-snapshots "Direct link to Generating snapshots")

Creating aria snapshots in Playwright helps ensure and maintain your application's structure. You can generate snapshots in various ways depending on your testing setup and workflow.

### Generating snapshots with the Playwright code generator[​](#generating-snapshots-with-the-playwright-code-generator "Direct link to Generating snapshots with the Playwright code generator")

If you're using Playwright's [Code Generator](/docs/codegen), generating aria snapshots is streamlined with its interactive interface:

-   **"Assert snapshot" Action**: In the code generator, you can use the "Assert snapshot" action to automatically create a snapshot assertion for the selected elements. This is a quick way to capture the aria snapshot as part of your recorded test flow.
-   **"Aria snapshot" Tab**: The "Aria snapshot" tab within the code generator interface visually represents the aria snapshot for a selected locator, letting you explore, inspect, and verify element roles, attributes, and accessible names to aid snapshot creation and review.

### Updating snapshots with `@playwright/test` and the `--update-snapshots` flag[​](#updating-snapshots-with-playwrighttest-and-the---update-snapshots-flag "Direct link to updating-snapshots-with-playwrighttest-and-the---update-snapshots-flag")

When using the Playwright test runner (`@playwright/test`), you can automatically update snapshots with the `--update-snapshots` flag, `-u` for short.

Running tests with the `--update-snapshots` flag will update snapshots that did not match. Matching snapshots will not be updated.

```
npx playwright test --update-snapshots
```

Updating snapshots is useful when application structure changes require new snapshots as a baseline. Note that Playwright will wait for the maximum expect timeout specified in the test runner configuration to ensure the page is settled before taking the snapshot. It might be necessary to adjust the `--timeout` if the test hits the timeout while generating snapshots.

#### Empty template for snapshot generation[​](#empty-template-for-snapshot-generation "Direct link to Empty template for snapshot generation")

Passing an empty string as the template in an assertion generates a snapshot on-the-fly:

```
await expect(locator).toMatchAriaSnapshot('');
```

Note that Playwright will wait for the maximum expect timeout specified in the test runner configuration to ensure the page is settled before taking the snapshot. It might be necessary to adjust the `--timeout` if the test hits the timeout while generating snapshots.

#### Snapshot patch files[​](#snapshot-patch-files "Direct link to Snapshot patch files")

When updating snapshots, Playwright creates patch files that capture differences. These patch files can be reviewed, applied, and committed to source control, allowing teams to track structural changes over time and ensure updates are consistent with application requirements.

The way source code is updated can be changed using the `--update-source-method` flag. There are several options available:

-   **"patch"** (default): Generates a unified diff file that can be applied to the source code using `git apply`.
-   **"3way"**: Generates merge conflict markers in your source code, allowing you to choose whether to accept changes.
-   **"overwrite"**: Overwrites the source code with the new snapshot values.

```
npx playwright test --update-snapshots --update-source-method=3way
```

#### Snapshots as separate files[​](#snapshots-as-separate-files "Direct link to Snapshots as separate files")

To store your snapshots in a separate file, use the `toMatchAriaSnapshot` method with the `name` option, specifying a `.aria.yml` file extension.

```
await expect(page.getByRole('main')).toMatchAriaSnapshot({ name: 'main.aria.yml' });
```

By default, snapshots from a test file `example.spec.ts` are placed in the `example.spec.ts-snapshots` directory. As snapshots should be the same across browsers, only one snapshot is saved even if testing with multiple browsers. Should you wish, you can customize the [snapshot path template](/docs/api/class-testconfig#test-config-snapshot-path-template) using the following configuration:

```
export default defineConfig({  expect: {    toMatchAriaSnapshot: {      pathTemplate: '__snapshots__/{testFilePath}/{arg}{ext}',    },  },});
```

### Using the `Locator.ariaSnapshot` method[​](#using-the-locatorariasnapshot-method "Direct link to using-the-locatorariasnapshot-method")

The [locator.ariaSnapshot()](/docs/api/class-locator#locator-aria-snapshot) method allows you to programmatically create a YAML representation of accessible elements within a locator's scope, especially helpful for generating snapshots dynamically during test execution.

**Example**:

```
const snapshot = await page.locator('body').ariaSnapshot();console.log(snapshot);
```

This command outputs the aria snapshot within the specified locator's scope in YAML format, which you can validate or store as needed.

## Accessibility tree examples[​](#accessibility-tree-examples "Direct link to Accessibility tree examples")

### Headings with level attributes[​](#headings-with-level-attributes "Direct link to Headings with level attributes")

Headings can include a `level` attribute indicating their heading level.

```
<h1>Title</h1><h2>Subtitle</h2>
```

_aria snapshot_

```
- heading "Title" [level=1]- heading "Subtitle" [level=2]
```

### Text nodes[​](#text-nodes "Direct link to Text nodes")

Standalone or descriptive text elements appear as text nodes.

```
<div>Sample accessible name</div>
```

_aria snapshot_

```
- text: Sample accessible name
```

### Inline multiline text[​](#inline-multiline-text "Direct link to Inline multiline text")

Multiline text, such as paragraphs, is normalized in the aria snapshot.

```
<p>Line 1<br>Line 2</p>
```

_aria snapshot_

```
- paragraph: Line 1 Line 2
```

### Links[​](#links "Direct link to Links")

Links display their text or composed content from pseudo-elements.

```
<a href="#more-info">Read more about Accessibility</a>
```

_aria snapshot_

```
- link "Read more about Accessibility"
```

### Text boxes[​](#text-boxes "Direct link to Text boxes")

Input elements of type `text` show their `value` attribute content.

```
<input type="text" value="Enter your name">
```

_aria snapshot_

```
- textbox: Enter your name
```

### Lists with items[​](#lists-with-items "Direct link to Lists with items")

Ordered and unordered lists include their list items.

```
<ul aria-label="Main Features">  <li>Feature 1</li>  <li>Feature 2</li></ul>
```

_aria snapshot_

```
- list "Main Features":  - listitem: Feature 1  - listitem: Feature 2
```

### Grouped elements[​](#grouped-elements "Direct link to Grouped elements")

Groups capture nested elements, such as `<details>` elements with summary content.

```
<details>  <summary>Summary</summary>  <p>Detail content here</p></details>
```

_aria snapshot_

```
- group: Summary
```

### Attributes and states[​](#attributes-and-states "Direct link to Attributes and states")

Commonly used ARIA attributes, like `checked`, `disabled`, `expanded`, `level`, `pressed`, and `selected`, represent control states.

#### Checkbox with `checked` attribute[​](#checkbox-with-checked-attribute "Direct link to checkbox-with-checked-attribute")

```
<input type="checkbox" checked>
```

_aria snapshot_

```
- checkbox [checked]
```

#### Button with `pressed` attribute[​](#button-with-pressed-attribute "Direct link to button-with-pressed-attribute")

```
<button aria-pressed="true">Toggle</button>
```

_aria snapshot_

```
- button "Toggle" [pressed=true]
```
