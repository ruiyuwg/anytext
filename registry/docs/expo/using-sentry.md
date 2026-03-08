# Using Sentry

A guide on installing and configuring Sentry for crash reporting.
Android, iOS, Web

[Sentry](http://getsentry.com/) is a crash reporting platform that provides you with **real-time insight into production deployments with info to reproduce and fix crashes**.

It notifies you of exceptions or errors that your users run into while using your app and organizes them for you on a web dashboard. Reported exceptions include stacktraces, device info, version, and other relevant context automatically. You can also provide additional context that is specific to your application such as the current route and user id.

## What you'll learn

This guide covers three main aspects of integrating Sentry with your Expo projects:

- [Install and configure Sentry](/guides/using-sentry#install-and-configure-sentry) in your React Native app

- Using Sentry with EAS:

  - [EAS Build](/guides/using-sentry#usage-with-eas-build) for building your app
  - [EAS Update](/guides/using-sentry#usage-with-eas-update) for over-the-air updates

- [Setting up the Sentry-Expo integration](/guides/using-sentry#sentry-integration-with-eas-dashboard) to view crash reports and session replays directly in your EAS dashboard

## Install and configure Sentry

### Sign up for a Sentry account and create a project

Before proceeding with installing Sentry, you'll need to make sure you have created a Sentry account and project:

1.1

[Sign up for Sentry](https://sentry.io/signup/) (the free tier supports up to 5,000 events per month), and create a project in your Dashboard. Take note of your **organization slug**, **project name**, and **DSN** as you'll need them later:

- **organization slug** is available in your **Organization settings** tab
- **project name** is available in your project's **Settings** > **Projects** tab (find it in the list)
- **DSN** is available in your project's **Settings** > **Projects** > **Project name** > Under **SDK Setup** section > **Client Keys (DSN)** tab.

1.2

Go to the [Developer Settings > Auth Tokens](https://sentry.io/settings/auth-tokens/) page and create a new [Organization Auth Token](https://docs.sentry.io/account/auth-tokens/#organization-auth-tokens). The token is automatically scoped for Source Map Upload and Release Creation. Save it.

Once you have each of these: **organization slug**, **project name**, **DSN**, and **auth token**, you're all set to proceed.

### Use the Sentry wizard to set up your project

The easiest way to set up Sentry in your Expo project is to use the Sentry wizard. This tool will automatically configure your project with the right settings.

Run the following command in your project directory:

```sh
npx @sentry/wizard@latest -i reactNative
```

The wizard will:

- Install the required dependencies
- Configure your project to use Sentry
- Set up the Metro configuration automatically
- Add the necessary initialization code to your app

Follow the prompts in the wizard to complete the setup process. The wizard will guide you to log in to your Sentry account and fetch all the correct information regarding your project.

### Verify the configuration

Create a new release build of your app and verify that it uploads source maps correctly. You may want to add a button in your app to test that it is working and sourcemaps are wired up as expected, for example:

```jsx
import { Button } from 'react-native';

// Inside some component
<Button title="Press me" onPress={() => { throw new Error('Hello, again, Sentry!'); }}/>
```

## Usage with EAS Build

Ensure that `SENTRY_AUTH_TOKEN` is set in your build environment, and Sentry will automatically upload source maps for you. If you use environment variables rather than properties in your app config, ensure that those are set as well.

Using the above instructions, no additional work is needed to integrate Sentry into your project when using EAS Build.

## Usage with EAS Update

After running `eas update`, upload the source maps to Sentry:

```sh
npx sentry-expo-upload-sourcemaps dist
```

That's it! Errors for your updates will now be properly symbolicated in Sentry.

Do you want to publish an update and the sourcemaps in one command?

You can chain the commands together with `&&` to publish an update and upload the sourcemaps in one step:

```sh
eas update --branch  && npx sentry-expo-upload-sourcemaps dist
```

Do you want to append additional update-related metadata to error reports?

Configuring Sentry to tag your scope with information about your update allows you to see errors happening on certain updates in the Sentry dashboard.

Add the following snippet in the global scope as early as possible in your application's lifecycle.

```js
import * as Sentry from '@sentry/react-native';
import * as Updates from 'expo-updates';

const manifest = Updates.manifest;
const metadata = 'metadata' in manifest ? manifest.metadata : undefined;
const extra = 'extra' in manifest ? manifest.extra : undefined;
const updateGroup = metadata && 'updateGroup' in metadata ? metadata.updateGroup : undefined;

Sentry.init({
  // dsn, release, dist, etc...
});

const scope = Sentry.getGlobalScope();

scope.setTag('expo-update-id', Updates.updateId);
scope.setTag('expo-is-embedded-update', Updates.isEmbeddedLaunch);

if (typeof updateGroup === 'string') {
  scope.setTag('expo-update-group-id', updateGroup);

  const owner = extra?.expoClient?.owner ?? '[account]';
  const slug = extra?.expoClient?.slug ?? '[project]';
  scope.setTag(
    'expo-update-debug-url',
    `https://expo.dev/accounts/${owner}/projects/${slug}/updates/${updateGroup}`
  );
} else if (Updates.isEmbeddedLaunch) {
  // This will be `true` if the update is the one embedded in the build, and not one downloaded from the updates server.
  scope.setTag('expo-update-debug-url', 'not applicable for embedded updates');
}
```

Once configured, information about the associated update will show up in an error's tag section:

## Sentry integration with EAS dashboard

The Sentry integration with Expo allows you to view crash reports and Session Replays for your Expo app deployments directly within your EAS dashboard. This integration provides a direct link to Sentry stack traces with full context, session replays, and debugging capabilities.

### Install

> Sentry owner, manager, or admin permissions are required to install this integration.

1. Log in to you Expo account and open [**Account settings > Overview**](https://expo.dev/accounts/%5Byour-account%5D/settings).
2. Under **Connections** and click **Connect** next to Sentry.
3. Log in to your Sentry account and accept the integration into your organization. You will be redirected back to **Account settings**.

### Link your project

After connecting your accounts, you need to link your EAS Project to your Sentry Project:

1. Open **Projects > \[Your Project] > Configuration > Project settings** in EAS.
2. Click **Link** and select your Sentry Project from the dropdown.

### Usage

To see your Sentry data in EAS dashboard, open **Projects > \[Your Project] > Updates > Deployments > \[Deployment]** to view Sentry data from a Release.

With this integration, you can:

- View crash reports directly in your EAS dashboard
- Access Session Replays to see exactly what happened before an error occurred
- Get detailed stack traces with full context
- Navigate seamlessly between EAS and Sentry for debugging

## Learn more about Sentry

Sentry does more than just catch fatal errors, learn more about how to use Sentry from their [JavaScript usage](https://docs.sentry.io/platforms/javascript/) documentation.

***

# Using BugSnag

# Using BugSnag

A guide on installing and configuring BugSnag for end-to-end error reporting and analytics.

[BugSnag](https://www.bugsnag.com) is a stability monitoring solution that provides rich, end-to-end error reporting and analytics to reproduce and fix errors with speed and precision. BugSnag supports the full stack with open-source libraries for more than [50 platforms](https://www.bugsnag.com/platforms), including [React Native](https://docs.bugsnag.com/platforms/react-native/react-native/).

With BugSnag, developers and engineering organizations can:

- **Stabilize:** Innovate faster by knowing when to build new features versus fix bugs. Use the release health dashboard, stability scores and targets, and built-in alerts via email, Slack, PagerDuty, and more.
- **Prioritize:** Improve customer experience by identifying and prioritizing bugs that have the greatest impact on app stability. Analyze issues grouped by root cause and sorted by business impact, customer segmentation, A/B testing and experiment results.
- **Fix:** Increase productivity by spending less time on reproducing and fixing bugs. Utilize powerful diagnostic data, full stacktraces and automatic breadcrumbs.

## Integration

See the integration guide below for instructions on adding BugSnag to your Expo apps to report JavaScript errors. It also includes instructions for uploading source maps for updates published with [EAS Update](/eas-update/introduction).

If you're new to BugSnag, you can [create an account](https://app.bugsnag.com/user/new/) or [request a demo](https://www.bugsnag.com/demo-request).

[Expo BugSnag integration](https://docs.bugsnag.com/platforms/react-native/expo/) — See the official guide on how to integrate BugSnag with an Expo app.

***

# Using LogRocket
