# Expo Skills for AI agents

A list of official AI agent skills provided by Expo for building, deploying, and debugging Expo and React Native apps.

Expo Skills are structured instruction files that teach AI agents how to build, deploy, and debug Expo and React Native apps accurately and efficiently. They work with Claude Code, Cursor, Codex, and other AI agents.

## Install Expo Skills

Run the following command to add Expo Skills from the plugin marketplace:

```sh
/plugin marketplace add expo/skills
```

Then install a specific plugin:

```sh
/plugin install expo-app-design
/plugin install upgrading-expo
/plugin install expo-deployment
```

## Available Expo Skills

The following skills are available, organized by plugin:

| Skill | Description | Plugin |
| --- | --- | --- |
| [`building-native-ui`](https://github.com/expo/skills/tree/main/plugins/expo-app-design/skills/building-native-ui) | Use for building beautiful apps with [Expo Router](/router/introduction). Covers fundamentals, styling, components, navigation, animations, patterns, and native tabs. | `expo-app-design` |
| [`native-data-fetching`](https://github.com/expo/skills/tree/main/plugins/expo-app-design/skills/native-data-fetching) | Use to implement or debug a network request, API call, or data fetching. Covers fetch API, React Query, SWR, error handling, caching, offline support, and Expo Router data loaders. | `expo-app-design` |
| [`expo-api-routes`](https://github.com/expo/skills/tree/main/plugins/expo-app-design/skills/expo-api-routes) | Use to create [API routes](/router/web/api-routes) in Expo Router with EAS Hosting. | `expo-app-design` |
| [`expo-dev-client`](https://github.com/expo/skills/tree/main/plugins/expo-app-design/skills/expo-dev-client) | Use to build and distribute [development clients](/develop/development-builds/use-development-builds) locally or via TestFlight. | `expo-app-design` |
| [`expo-tailwind-setup`](https://github.com/expo/skills/tree/main/plugins/expo-app-design/skills/expo-tailwind-setup) | Use to set up [Tailwind CSS](/guides/tailwind) with `react-native-css` and NativeWind for universal styling. | `expo-app-design` |
| [`use-dom`](https://github.com/expo/skills/tree/main/plugins/expo-app-design/skills/use-dom) | Use Expo [DOM components](/guides/dom-components) to run web code in a webview on native or web. | `expo-app-design` |
| [`expo-ui-jetpack-compose`](https://github.com/expo/skills/tree/main/plugins/expo-app-design/skills/expo-ui-jetpack-compose) | Use for [Jetpack Compose](/versions/latest/sdk/ui/jetpack-compose) Views and modifiers in Expo apps. | `expo-app-design` |
| [`expo-ui-swift-ui`](https://github.com/expo/skills/tree/main/plugins/expo-app-design/skills/expo-ui-swift-ui) | Use for [SwiftUI](/versions/latest/sdk/ui/swift-ui) Views and modifiers in Expo apps. | `expo-app-design` |
| [`expo-deployment`](https://github.com/expo/skills/tree/main/plugins/expo-deployment/skills/expo-deployment) | Use to deploy to Google Play Store, Apple App Store, web hosting, and API routes via [EAS](/eas). | `expo-deployment` |
| [`expo-cicd-workflows`](https://github.com/expo/skills/tree/main/plugins/expo-deployment/skills/expo-cicd-workflows) | Use to create [EAS Workflows](/eas/workflows/introduction) YAML files for CI/CD automation. | `expo-deployment` |
| [`upgrading-expo`](https://github.com/expo/skills/tree/main/plugins/upgrading-expo/skills/upgrading-expo) | Use to [upgrade Expo SDK versions](/workflow/upgrading-expo-sdk-walkthrough), fix dependency issues, or handle breaking changes. | `upgrading-expo` |

## Example prompts

Try the following prompts after installing Expo Skills. Your AI agent will automatically use the appropriate skill:

| Example prompt | Skill used |
| --- | --- |
| Build a settings screen with a form and navigation | `building-native-ui` |
| Set up Tailwind CSS in my Expo project | `expo-tailwind-setup` |
| Embed a recharts chart in my native app using web code | `use-dom` |
| Add a SwiftUI picker component to my Expo app | `expo-ui-swift-ui` |
| Use Material Design 3 components with Jetpack Compose | `expo-ui-jetpack-compose` |
| How do I deploy my Expo app to the Apple App Store? | `expo-deployment` |
| Create a CI/CD workflow that builds on every PR | `expo-cicd-workflows` |
| Upgrade my project to the latest Expo SDK | `upgrading-expo` |

## Additional resources

[expo/skills GitHub repository](https://github.com/expo/skills) — expo/skills — Browse the source for all available Expo Skills, or report issues.

[Expo MCP Server](/eas/ai/mcp) — Companion AI tooling that gives coding agents direct access to Expo and EAS services.

***

# Documentation for AI agents and LLMs
