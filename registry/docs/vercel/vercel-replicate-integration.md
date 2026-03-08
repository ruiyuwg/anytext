# Vercel Replicate Integration

&#x20;provides a platform for
accessing and deploying a wide range of open-source artificial intelligence
models. These models span various AI applications such as image and video
processing, natural language processing, and audio synthesis. With the Vercel
Replicate integration, you can incorporate these AI capabilities into your
applications, enabling advanced functionalities and enhancing user experiences.

## Use cases

You can use the Vercel and Replicate integration to power a variety of AI applications, including:

- **Content generation**: Use Replicate for generating text, images, and audio content in creative and marketing applications
- **Image and video processing**: Use Replicate in applications for image enhancement, style transfer, or object detection
- **NLP and chat-bots**: Use Replicate's language processing models in chat-bots and natural language interfaces

### Available models

Replicate models cover a broad spectrum of AI applications ranging from image and video processing to natural language processing and audio synthesis.

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

## Deploy a template

You can deploy a template to Vercel that uses a pre-trained model from Replicate:

## More resources

title: "Vercel Together AI Integration"
description: "Learn how to add Together AI connectable account integration with Vercel."
last\_updated: "2026-03-08T05:03:09.967Z"
source: "https://vercel.com/docs/agent-resources/integrations-for-models/togetherai"
