# Vercel Groq Integration

&#x20;is a high-performance AI inference
service with an ultra-fast Language Processing Unit (LPU) architecture. It
enables fast response times for language model inference, making it ideal for
applications requiring low latency.

## Use cases

You can use the [Vercel and Groq integration](https://vercel.com/marketplace/groq) to:

- Connect AI models such as Whisper-large-v3 for audio processing and Llama models for text generation to your Vercel projects.
- Deploy and run inference with optimized performance.

### Available models

Groq provides a diverse range of AI models designed for high-performance tasks.

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

title: "Vercel LMNT Integration"
description: "Learn how to add LMNT connectable account integration with Vercel."
last\_updated: "2026-03-08T05:03:09.895Z"
source: "https://vercel.com/docs/agent-resources/integrations-for-models/lmnt"
