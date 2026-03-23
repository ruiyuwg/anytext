# Vercel fal Integration

&#x20;enables the
development of real-time AI applications with a focus on rapid inference speeds,
achieving response times under ~120ms. Specializing in diffusion models, fal has
no cold starts and a pay-for-what-you-use pricing model.

## Use cases

You can use the [Vercel and fal integration](https://vercel.com/marketplace/fal) to power a variety of AI applications, including:

- **Text-to-image applications**: Use fal to integrate real-time text-to-image generation in applications, enabling users to create complex visual content from textual descriptions instantly
- **Real-time image processing**: Use fal for applications requiring instantaneous image analysis and modification, such as real-time filters, enhancements, or object recognition in streaming video
- **Depth maps creation**: Use fal's AI models for generating depth maps from images, supporting applications in 3D modeling, augmented reality, or advanced photography editing, where understanding the spatial relationships in images is crucial

### Available models

fal provides a diverse range of AI models designed for high-performance tasks in image and text processing.

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

#### Using the CLI

1. Add the provider to your project using the [Vercel CLI `install`](/docs/cli/install) command

   During this process, you will be asked to open the dashboard to accept the
   marketplace terms if you have not installed this integration before. You can
   also choose which project(s) the provider will have access to.
2. Install the providers package
3. Connect your project using the code below:

## More resources

title: "Vercel Groq Integration"
description: "Learn how to add the Groq native integration with Vercel."
last\_updated: "2026-03-23T09:40:03.484Z"
source: "https://vercel.com/docs/agent-resources/integrations-for-models/groq"
