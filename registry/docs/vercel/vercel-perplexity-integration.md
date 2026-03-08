# Vercel Perplexity Integration

&#x20;specializes in providing
accurate, real-time answers to user questions by combining AI-powered search
with large language models, delivering concise, well-sourced, and conversational
responses. Integrating Perplexity via its [Sonar
API](https://sonar.perplexity.ai/) with Vercel allows your applications to
deliver real-time, web-wide research and question-answering
capabilities—complete with accurate citations, customizable sources, and
advanced reasoning—enabling users to access up-to-date, trustworthy information
directly within your product experience.

## Use cases

You can use the Vercel and Perplexity integration to power a variety of AI applications, including:

- **Real-time, citation-backed answers:** Integrate Perplexity to provide users with up-to-date information grounded in live web data, complete with detailed source citations for transparency and trust.
- **Customizable search and data sourcing:** Tailor your application's responses by specifying which sources Perplexity should use, ensuring compliance and relevance for your domain or industry.
- **Complex, multi-step query handling:** Leverage advanced models like Sonar Pro to process nuanced, multi-part questions, deliver in-depth research, and support longer conversational context windows.
- **Optimized speed and efficiency:** Benefit from Perplexity's lightweight, fast models that deliver nearly instant answers at scale, making them ideal for high-traffic or cost-sensitive applications.
- **Fine-grained output control:** Adjust model parameters (e.g., creativity, repetition) and manage output quality to align with your application's unique requirements and user expectations.

### Available models

The Sonar models are each optimized for tasks such as real-time search, advanced reasoning, and in-depth research. Please refer to Perplexity's list of available models [here](https://docs.perplexity.ai/models/model-cards).

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

title: "Vercel Pinecone Integration"
description: "Learn how to add Pinecone connectable account integration with Vercel."
last\_updated: "2026-03-08T05:03:09.908Z"
source: "https://vercel.com/docs/agent-resources/integrations-for-models/pinecone"
