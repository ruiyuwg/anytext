# Using Vexo

A guide on installing and configuring Vexo for real-time user analytics.

[Vexo](https://www.vexo.co/) provides real-time user analytics for your Expo application, helping you understand how users interact with your app, identify friction points, and improve engagement.

With a two-line integration, Vexo starts collecting data automatically, giving you actionable insights to optimize your app's user experience. If needed, you can also create custom events.

## Features

1. **Complete Dashboard**
   - Active Users
   - Session Time
   - Downloads
   - OS Distribution
   - Version Adoption
   - Geographic Insights
   - Popular Screens
2. **Session Replays**
   - Watch real user sessions to understand their interactions.
3. **Heatmaps**
   - Identify the most engaged areas of your app.
4. **Funnels**
   - Analyze user flows and optimize conversion rates.
5. **Custom Events and Dashboard Personalization**
   - Track specific user actions by creating custom events.
   - Customize your dashboard to visualize key metrics.

## Getting started

1. Create an account: Sign up for a [Vexo account](https://www.vexo.co/).

2. Create a new app: You'll be prompted to create a new app. Give it a name (you can change it later), and once you submit it, you'll receive an API key.

3. Install the Vexo package: Run the following command in your project:

   ```sh
   # npm
   npm install vexo-analytics

   # yarn
   yarn add vexo-analytics

   # pnpm
   pnpm add vexo-analytics

   # bun
   bun install vexo-analytics
   ```

4. Initialize Vexo: Add the following code in your app's entry file (for example, **index.js**, **App.js**, or **src/app/\_layout.tsx** if using Expo Router):

   ```tsx
   import { vexo } from 'vexo-analytics';

   // You may want to wrap this with `if (!__DEV__) { ... }` to only run Vexo in production.
   vexo('YOUR_API_KEY');
   ```

5. Rebuild and run your app: Since `vexo-analytics` includes native code, you need to rebuild your application.

6. Verify integration: Go to your app's page on Vexo and you should see your first event!

## Compatibility

- Expo: Vexo is compatible with [Development builds](/develop/development-builds/introduction) and does not require additional configuration plugins.
- Expo Go: Not supported, as Vexo requires custom native code.

## Learn more about Vexo

To learn more about using Vexo with Expo, check out the [Vexo documentation](https://docs.vexo.co/).

***

# Using authentication SDKs and libraries

# Using authentication SDKs and libraries

An overview of authentication integrations available in the Expo and React Native ecosystem.

Authentication in mobile apps refers to how you identify who a user is, manage sign-up or sign-in flows, and maintain their authenticated session across app launches and across multiple devices. Authentication SDKs and libraries help you add these flows, so you do not need to build your own custom auth backend. The guides below highlight popular SDKs and providers for your Expo and React Native projects.

> Some providers require custom native code and aren't supported in Expo Go. Use a [development build](/develop/development-builds/introduction) when needed.

[Using Clerk](/guides/using-clerk) — Add Clerk authentication and user management to your Expo and React Native projects.

[Using Facebook authentication](/guides/facebook-authentication) — Configure react-native-fbsdk-next to add Facebook authentication in your Expo project. — react-native-fbsdk-next

[Using Google authentication](/guides/google-authentication) — Configure @react-native-google-signin/google-signin to add Google authentication in your Expo project. — @react-native-google-signin/google-signin

***

# Using Clerk

# Using Clerk

Learn how to integrate Clerk authentication in your Expo and React Native projects.

[Clerk](https://clerk.com/) is a full stack authentication and user management platform that helps you add sign-up, sign-in, and account management without building your own auth backend. It supports multiple authentication strategies, session management, and organizations for multi-tenant apps.

Clerk provides hooks, UI, and control components so you can build completely custom authentication screens. Pair it with `expo-secure-store` to keep session tokens encrypted on device, and configure your projects's providers and policies in the Clerk's dashboard.

> **Note:** Clerk's [prebuilt UI components](https://clerk.com/docs/expo/reference/components/overview) are available for web only. For native platforms, Clerk recommends building custom flows.

## Features

- **Authentication flows:** Sign-up and sign-in with email verification code, magic links, passwords, social providers (20+), passkeys, phone number verification, SAML, OpenID Connect, Web3 (MetaMask), and authenticator apps for multi-factor authentication.
- **Session management:** Secure token handling with [`expo-secure-store`](/versions/latest/sdk/secure-store).
- **User management:** Profile data, account settings, and organization membership for multi-tenant apps.

## Get started

To get started, follow the instructions in the Clerk's documentation:

[Clerk Expo quickstart](https://clerk.com/docs/expo/getting-started/quickstart) — Follow the official quickstart for installing the Expo SDK, configuring secure token storage, and building sign-in and sign-up flows.

***

# Using Facebook authentication
