# Vercel ElevenLabs Integration

&#x20;specializes in advanced voice
synthesis and audio processing technologies. Its integration with Vercel allows
you to incorporate realistic voice and audio enhancements into your
applications, ideal for creating interactive media experiences.

## Use cases

You can use the Vercel and ElevenLabs integration to power a variety of AI applications, including:

- **Voice synthesis**: Use ElevenLabs for generating natural-sounding synthetic voices in applications such as virtual assistants or audio-books
- **Audio enhancement**: Use ElevenLabs to enhance audio quality in applications, including noise reduction and sound clarity improvement
- **Interactive media**: Use ElevenLabs to implement voice synthesis and audio processing in interactive media and gaming for realistic soundscapes

### Available models

ElevenLabs offers models that specialize in advanced voice synthesis and audio processing, delivering natural-sounding speech and audio enhancements suitable for various interactive media applications.

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

title: "Vercel fal Integration"
description: "Learn how to add the fal native integration with Vercel."
last\_updated: "2026-03-23T09:40:03.470Z"
source: "https://vercel.com/docs/agent-resources/integrations-for-models/fal"
