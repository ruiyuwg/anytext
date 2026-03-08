# React Native feature flag services

An overview of feature flag services available in the Expo and React Native ecosystem.

A feature flag (also known as a *feature gate*) is a mechanism that enables and disables features remotely. They are a safe way to rollout new features to your app users without deploying additional code. You can use them for testing in production, A/B testing, or to ship new app features such as UI elements.

## Feature flag services

The following libraries provide robust support for feature flag functionality and out-of-the-box compatibility with Expo apps using [Continuous Native Generation (CNG)](/workflow/continuous-native-generation) and [config plugins](/config-plugins/introduction) for seamless integration in your app.

### PostHog

[PostHog](https://posthog.com/) is an open-source product analytics platform that provides comprehensive feature flagging capabilities alongside analytics, session recordings, and A/B testing. It supports real-time feature toggles with user segmentation and the ability to roll back features instantly, making it an excellent choice for teams that want analytics and feature management in a single platform. It includes built-in A/B testing and multivariate testing functionality, allowing you to run experiments directly through feature flags while collecting detailed analytics on feature adoption and performance metrics. The service also supports bootstrap flags to eliminate loading states and improve user experience.

[PostHog React Native library](https://posthog.com/docs/libraries/react-native#feature-flags) — Learn how to integrate PostHog feature flags in your React Native and Expo projects.

[PostHog feature flags tutorial](https://posthog.com/tutorials/react-native-analytics) — Follow this step-by-step guide to implement feature flags with PostHog.

### Statsig

[Statsig](https://statsig.com/) is a feature management platform designed for data-driven product development that provides advanced statistical analysis, gradual rollouts, and sophisticated targeting capabilities with built-in metrics and performance monitoring for feature releases. The platform offers a robust SDK for React Native and Expo, with automatic event logging and dynamic configurations, making it particularly well-suited for teams focused on rigorous experimentation and data-driven decision-making.

[Statsig Expo integration](https://docs.statsig.com/client/javascript-sdk/expo/#basics-check-gate) — Learn how to integrate StatSig feature flags and experiments in your Expo project.

### LaunchDarkly

[LaunchDarkly](https://launchdarkly.com/) is an enterprise-grade feature management platform that enables instant feature toggles and targeted rollouts with comprehensive dashboard controls, advanced user targeting, and robust experimentation tools that provide real-time flag updates. The SDK includes advanced features such as hooks for React integration, context identification and modification, comprehensive logging, support for multiple environments in development workflows, private attributes for handling sensitive data, and relay proxy configuration for enhanced security and performance.

[LaunchDarkly React Native SDK](https://launchdarkly.com/docs/sdk/client-side/react/react-native) — Follow this guide to integrate LaunchDarkly feature flags in your React Native and Expo projects.

### Firebase Remote Config

[Firebase Remote Config](https://firebase.google.com/docs/remote-config) is a cloud service allows you to change the appearance and functionality of your app without requiring an app update. Remote Config values are managed through the Firebase console and accessed via a JavaScript API, which gives you full control over when and how these values affect your app. The service supports conditional targeting based on user properties, app versions, custom attributes and real-time updates.

[React Native Firebase Remote Config](https://rnfirebase.io/remote-config/usage) — Learn how to integrate Firebase Remote Config from React Native Firebase library in your React Native and Expo projects.

***

# Using in-app purchases

# Using in-app purchases

Learn about how to use in-app purchases in your Expo app.

In-app purchases (IAP) are transactions within a mobile or desktop application where users can buy digital goods or additional features. This guide provides a list of popular libraries and tutorials for implementing IAP in your Expo app.

> In-app purchase libraries require configuring custom native code. Native code is not configurable when using Expo Go. Instead, create a [development build](/develop/development-builds/introduction), which allows using a native library in your project.

## Tutorial

[Watch: How to Implement In-App Purchases in Expo](https://www.youtube.com/watch?v=R3fLKC-2Qh0)

[Expo In-App Purchase Tutorial](https://www.revenuecat.com/blog/engineering/expo-in-app-purchase-tutorial/) — The getting started guide for in-app purchases and subscriptions with react-native-purchases library and RevenueCat. — react-native-purchases

## Libraries

The following libraries provide robust support for in-app purchase functionality and out-of-the-box compatibility with Expo apps using [CNG](/workflow/continuous-native-generation) and [Config Plugins](/config-plugins/introduction) for seamless integration in your app.

[react-native-purchases](https://github.com/RevenueCat/react-native-purchases) — react-native-purchases — An open-source framework that provides a wrapper around Google Play Billing and StoreKit APIs, and integration with RevenueCat services supporting in-app purchases. It enables product management, analytics, and simplified workflows for in-app purchase requirements that may extend beyond your client code, such as validating purchases on an app's backend.

[expo-iap](https://github.com/hyochan/expo-iap) — expo-iap — A React Native library for in-app purchases that works with development builds.

***

# Using push notifications
