# How to set up E2E testing with Playwright

Source: https://resend.com/docs/knowledge-base/end-to-end-testing-with-playwright

End to end testing ensures your entire app flow is fully functioning.

Below is a basic guide on setting up E2E testing with NextJS, Resend, and Playwright.

Prefer watching a video? Check out our video walkthrough below.

## 1. Create an endpoint.

For simplicity, we'll create a GET endpoint that sends an email to the testing account, `delivered@resend.dev` on fetch.

```ts app/api/send/route.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      html: '<h1>Hello world</h1>',
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
```

## 2. Write the test spec file

Create a test spec file at `e2e/app.spec.ts`. You can test in two ways:

### Option 1: Call the Resend API

Calling the Resend API tests the entire API flow, including Resend's API responses, but counts towards your account's sending quota.

```ts e2e/app.spec.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import { test, expect } from '@playwright/test';

test('does not mock the response and calls the Resend API', async ({
  page,
}) => {
  // Go to the page
  await page.goto('http://localhost:3000/api/send');

  // Assert that the response is visible
  await expect(page.getByText('id')).toBeVisible();
});
```

### Option 2: Mock a response

Mocking the response lets you test *your* app's flow without calling the Resend API and impacting your account's sending quota.

```ts e2e/app.spec.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import { test, expect } from '@playwright/test';

test("mocks the response and doesn't call the Resend API", async ({ page }) => {
  // Sample response from Resend
  const body = JSON.stringify({
    data: {
      id: '621f3ecf-f4d2-453a-9f82-21332409b4d2',
    },
  });

  // Mock the api call before navigating
  await page.route('*/**/api/send', async (route) => {
    await route.fulfill({
      body,
      contentType: 'application/json',
      status: 200,
    });
  });
});
```

However you test, it's important to test using a test email address (e.g.,
<delivered@resend.dev>) so your tests don't impact your deliverability. Resend's
[test accounts](/dashboard/emails/send-test-emails) run through the entire API
flow without harming your reputation.

## 3. Create a Playwright config file

Write your config file, paying special attention to a few properties:

- `testDir`: the directory containing your test files
- `outputDir`: the directory to store test results
- `webServer`: provide instructions for Playwright to run your app before starting the tests
- `projects`: an array of the browsers you want to test

```ts playwright.config.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import { defineConfig, devices } from '@playwright/test';
import path from 'path';

const baseURL = 'http://localhost:3000';

export default defineConfig({
  timeout: 30 * 1000,
  testDir: path.join(__dirname, 'e2e'),
  retries: 2,
  outputDir: 'test-results/',
  webServer: {
    command: 'npm run dev',
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    baseURL,
    // Retry a test if its failing with enabled tracing. This allows you to analyze the DOM, console logs, network traffic etc.
    trace: 'retry-with-trace',
  },

  projects: [
    // Test against desktop browsers.
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Desktop Firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'Desktop Safari',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    // Test against mobile viewports.
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 12'],
    },
  ],
});
```

[See the Playwright docs](https://playwright.dev/docs/intro) for more help.

## 4. Run the test

You can run the test by installing Playwright and running the tests.

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx playwright install
npx playwright test
```

Playwright will run the tests in the browsers of your choice and show you the results.

See the full source code.
