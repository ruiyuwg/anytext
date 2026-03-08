On this page

## Introduction[​](#introduction "Direct link to Introduction")

Playwright comes with the ability to generate tests for you as you perform actions in the browser and is a great way to quickly get started with testing. Playwright will look at your page and figure out the best locator, prioritizing [role, text and test id locators](/docs/locators). If the generator finds multiple elements matching the locator, it will improve the locator to make it resilient that uniquely identify the target element.

## Generate tests in VS Code[​](#generate-tests-in-vs-code "Direct link to Generate tests in VS Code")

Install the VS Code extension and generate tests directly from VS Code. The extension is available on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright). Check out our guide on [getting started with VS Code](/docs/getting-started-vscode).

### Record a New Test[​](#record-a-new-test "Direct link to Record a New Test")

To record a test click on the **Record new** button from the Testing sidebar. This will create a `test-1.spec.ts` file as well as open up a browser window.

![record new in vs code](https://user-images.githubusercontent.com/13063165/220961665-615d0ab8-3f0b-439c-ad0b-0424d9aa154b.png)

In the browser go to the URL you wish to test and start clicking around to record your user actions.

![generating user actions](https://github.com/microsoft/playwright/assets/13063165/1d4c8f37-8325-4816-a665-d0e95e63f509)

Playwright will record your actions and generate the test code directly in VS Code. You can also generate assertions by choosing one of the icons in the toolbar and then clicking on an element on the page to assert against. The following assertions can be generated:

-   `'assert visibility'` to assert that an element is visible
-   `'assert text'` to assert that an element contains specific text
-   `'assert value'` to assert that an element has a specific value

![generating assertions](https://github.com/microsoft/playwright/assets/13063165/d131eb35-b2ca-4bf4-a8ac-88b6e40dcf07)

Once you are done recording click the **cancel** button or close the browser window. You can then inspect your `test-1.spec.ts` file and manually improve it if needed.

![code from a generated test](https://github.com/microsoft/playwright/assets/13063165/2ba4c212-4713-460a-b054-6dc6b67a9a7c)

### Record at Cursor[​](#record-at-cursor "Direct link to Record at Cursor")

To record from a specific point in your test move your cursor to where you want to record more actions and then click the **Record at cursor** button from the Testing sidebar. If your browser window is not already open then first run the test with 'Show browser' checked and then click the **Record at cursor** button.

![record at cursor in vs code](https://github.com/microsoft/playwright/assets/13063165/77948ab8-92a2-435f-9833-0944da5ae664)

In the browser window start performing the actions you want to record.

![add feed the dog to todo app](https://user-images.githubusercontent.com/13063165/220960770-6435cec7-1723-42a8-8c1f-8244e2d800c7.png)

In the test file in VS Code you will see your new generated actions added to your test at the cursor position.

![code from a generated test](https://github.com/microsoft/playwright/assets/13063165/4f4bb34e-9cda-41fe-bf65-8d8016d84c7f)

### Generating locators[​](#generating-locators "Direct link to Generating locators")

You can generate locators with the test generator.

-   Click on the **Pick locator** button from the testing sidebar and then hover over elements in the browser window to see the [locator](/docs/locators) highlighted underneath each element.
-   Click the element you require and it will now show up in the **Pick locator** box in VS Code.
-   Press Enter on your keyboard to copy the locator into the clipboard and then paste anywhere in your code. Or press 'escape' if you want to cancel.

![Pick locators in VS code](https://user-images.githubusercontent.com/13063165/220958368-95b03620-3c9b-40a8-be74-01c96ba03cad.png)

## Generate tests with the Playwright Inspector[​](#generate-tests-with-the-playwright-inspector "Direct link to Generate tests with the Playwright Inspector")

When running the `codegen` command two windows will be opened, a browser window where you interact with the website you wish to test and the Playwright Inspector window where you can record your tests and then copy them into your editor.

### Running Codegen[​](#running-codegen "Direct link to Running Codegen")

Use the `codegen` command to run the test generator followed by the URL of the website you want to generate tests for. The URL is optional and you can always run the command without it and then add the URL directly into the browser window instead.

```
npx playwright codegen demo.playwright.dev/todomvc
```

### Recording a test[​](#recording-a-test "Direct link to Recording a test")

Run the `codegen` command and perform actions in the browser window. Playwright will generate the code for the user interactions which you can see in the Playwright Inspector window. Once you have finished recording your test stop the recording and press the **copy** button to copy your generated test into your editor.

With the test generator you can record:

-   Actions like click or fill by simply interacting with the page
-   Assertions by clicking on one of the icons in the toolbar and then clicking on an element on the page to assert against. You can choose:
    -   `'assert visibility'` to assert that an element is visible
    -   `'assert text'` to assert that an element contains specific text
    -   `'assert value'` to assert that an element has a specific value

![Recording a test](https://github.com/microsoft/playwright/assets/13063165/34a79ea1-639e-4cb3-8115-bfdc78e3d34d)

###### [​](#-1 "Direct link to -1")

When you have finished interacting with the page, press the **record** button to stop the recording and use the **copy** button to copy the generated code to your editor.

Use the **clear** button to clear the code to start recording again. Once finished, close the Playwright inspector window or stop the terminal command.

### Generating locators[​](#generating-locators-1 "Direct link to Generating locators")

You can generate [locators](/docs/locators) with the test generator.

-   Press the `'Record'` button to stop the recording and the `'Pick Locator'` button will appear.
-   Click on the `'Pick Locator'` button and then hover over elements in the browser window to see the locator highlighted underneath each element.
-   To choose a locator, click on the element you would like to locate and the code for that locator will appear in the field next to the Pick Locator button.
-   You can then edit the locator in this field to fine tune it or use the copy button to copy it and paste it into your code.

###### [​](#-2 "Direct link to -2")

![picking a locator](https://github.com/microsoft/playwright/assets/13063165/2c8a12e2-4e98-4fdd-af92-1d73ae696d86)

## Emulation[​](#emulation "Direct link to Emulation")

You can use the test generator to generate tests using emulation so as to generate a test for a specific viewport, device, color scheme, as well as emulate the geolocation, language or timezone. The test generator can also generate a test while preserving authenticated state.

### Emulate viewport size[​](#emulate-viewport-size "Direct link to Emulate viewport size")

Playwright opens a browser window with its viewport set to a specific width and height and is not responsive as tests need to be run under the same conditions. Use the `--viewport` option to generate tests with a different viewport size.

```
npx playwright codegen --viewport-size="800,600" playwright.dev
```

###### [​](#-3 "Direct link to -3")

![Codegen generating code for tests for playwright.dev website with a specific viewport js](https://user-images.githubusercontent.com/13063165/220402029-f90d1c9f-d740-4c0f-acc8-95235ee83f85.png)

### Emulate devices[​](#emulate-devices "Direct link to Emulate devices")

Record scripts and tests while emulating a mobile device using the `--device` option which sets the viewport size and user agent among others.

```
npx playwright codegen --device="iPhone 13" playwright.dev
```

###### [​](#-4 "Direct link to -4")

![Codegen generating code for tests for playwright.dev website emulated for iPhone 13 js](https://user-images.githubusercontent.com/13063165/220921482-dc4f5532-9dce-40bd-8a28-e0d87d26a601.png)

### Emulate color scheme[​](#emulate-color-scheme "Direct link to Emulate color scheme")

Record scripts and tests while emulating the color scheme with the `--color-scheme` option.

```
npx playwright codegen --color-scheme=dark playwright.dev
```

###### [​](#-5 "Direct link to -5")

![Codegen generating code for tests for playwright.dev website in dark mode js](https://user-images.githubusercontent.com/13063165/220930273-f3a25bae-64dd-4bbb-99ed-1e97c0cb1ebf.png)

### Emulate geolocation, language and timezone[​](#emulate-geolocation-language-and-timezone "Direct link to Emulate geolocation, language and timezone")

Record scripts and tests while emulating timezone, language & location using the `--timezone`, `--geolocation` and `--lang` options. Once the page opens:

1.  Accept the cookies
2.  On the top right, click on the locate me button to see geolocation in action.

```
npx playwright codegen --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" bing.com/maps
```

###### [​](#-6 "Direct link to -6")

![Codegen generating code for tests for bing maps showing timezone, geolocation as Rome, Italy and in Italian language](https://user-images.githubusercontent.com/13063165/220931996-d3144421-8d3b-4f9f-896c-769c01566c01.png)

### Preserve authenticated state[​](#preserve-authenticated-state "Direct link to Preserve authenticated state")

Run `codegen` with `--save-storage` to save [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies), [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) data at the end of the session. This is useful to separately record an authentication step and reuse it later when recording more tests.

```
npx playwright codegen github.com/microsoft/playwright --save-storage=auth.json
```

###### [​](#-7 "Direct link to -7")

![github page before logging in js](https://user-images.githubusercontent.com/13063165/220929062-88dfe567-0c6d-4e49-b9f9-74ae241fb8c7.png)

#### Login[​](#login "Direct link to Login")

After performing authentication and closing the browser, `auth.json` will contain the storage state which you can then reuse in your tests.

![login to GitHub screen](https://user-images.githubusercontent.com/13063165/220561688-04b2b984-4ba6-4446-8b0a-8058876e2a02.png)

Make sure you only use the `auth.json` locally as it contains sensitive information. Add it to your `.gitignore` or delete it once you have finished generating your tests.

#### Load authenticated state[​](#load-authenticated-state "Direct link to Load authenticated state")

Run with `--load-storage` to consume the previously loaded storage from the `auth.json`. This way, all [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies), [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) data will be restored, bringing most web apps to the authenticated state without the need to login again. This means you can continue generating tests from the logged in state.

```
npx playwright codegen --load-storage=auth.json github.com/microsoft/playwright
```

###### [​](#-8 "Direct link to -8")

![github signed in showing use of load storage js](https://user-images.githubusercontent.com/13063165/220927873-9e55fdda-2def-45c1-9a1b-bcc851885f96.png)

#### Use existing userDataDir[​](#use-existing-userdatadir "Direct link to Use existing userDataDir")

Run `codegen` with `--user-data-dir` to set a fixed [user data directory](https://playwright.dev/docs/api/class-browsertype#browser-type-launch-persistent-context-option-user-data-dir) for the browser session. If you create a custom browser user data directory, codegen will use this existing browser profile and have access to any authentication state present in that profile.

warning

[As of Chrome 136, the default user data directory cannot be accessed via automated tooling](https://developer.chrome.com/blog/remote-debugging-port), such as Playwright. You must create a separate user data directory for use in testing.

```
npx playwright codegen --user-data-dir=/path/to/your/browser/data/ github.com/microsoft/playwright
```

## Record using custom setup[​](#record-using-custom-setup "Direct link to Record using custom setup")

If you would like to use codegen in some non-standard setup (for example, use [browserContext.route()](/docs/api/class-browsercontext#browser-context-route)), it is possible to call [page.pause()](/docs/api/class-page#page-pause) that will open a separate window with codegen controls.

```
const { chromium } = require('@playwright/test');(async () => {  // Make sure to run headed.  const browser = await chromium.launch({ headless: false });  // Setup context however you like.  const context = await browser.newContext({ /* pass any options */ });  await context.route('**/*', route => route.continue());  // Pause the page, and start recording manually.  const page = await context.newPage();  await page.pause();})();
```
