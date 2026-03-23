# Vercel Together AI Integration

&#x20;offers models for interactive
AI experiences, focusing on collaborative and real-time engagement. Integrating
Together AI with Vercel empowers your applications with enhanced user
interaction and co-creative functionalities.

## Use cases

You can use the Vercel and Together AI integration to power a variety of AI applications, including:

- **Co-creative platforms**: Use Together AI in platforms that enable collaborative creative processes, such as design or writing
- **Interactive learning environments**: Use Together AI in educational tools for interactive and adaptive learning experiences
- **Real-time interaction tools**: Use Together AI for developing applications that require real-time user interaction and engagement

### Available models

Together AI offers models that specialize in collaborative and interactive AI experiences. These models are adept at facilitating real-time interaction, enhancing user engagement, and supporting co-creative processes.

## Getting started

The Vercel  integration can be accessed through the **AI** tab on your [Vercel dashboard](/dashboard).

### Prerequisites

To follow this guide, you'll need the following:

- An existing [Vercel project](/docs/projects/overview#creating-a-project)
- The latest version of [Vercel CLI](/docs/cli#installing-vercel-cli)

  ````
  ```bash
  pnpm i vercel
  ```


  ```bash
  yarn i vercel
  ```


  ```bash
  npm i vercel
  ```


  ```bash
  bun i vercel
  ```
  ````

### Add the provider to your project

#### Using the dashboard

1. Navigate to the **AI** tab in your [Vercel dashboard](/dashboard)
2. Select  from the list of providers, and press **Add**
3. Review the provider information, and press **Add Provider**
4. You can now select which projects the provider will have access to. You can choose from **All Projects** or **Specific Projects**
   - If you select **Specific Projects**, you'll be prompted to select the projects you want to connect to the provider. The list will display projects associated with your scoped team
   - Multiple projects can be selected during this step
5. Select the **Connect to Project** button
6. You'll be redirected to the provider's website to complete the connection process
7. Once the connection is complete, you'll be redirected back to the Vercel dashboard, and the provider integration dashboard page. From here you can manage your provider settings, view usage, and more
8. Pull the environment variables into your project using [Vercel CLI](/docs/cli/env)
   ```bash filename="terminal"
   vercel env pull
   ```
9. Install the providers package
10. Connect your project using the code below:

## More resources

title: "Vercel xAI Integration"
description: "Learn how to add the xAI native integration with Vercel."
last\_updated: "2026-03-23T09:40:03.532Z"
source: "https://vercel.com/docs/agent-resources/integrations-for-models/xai"
