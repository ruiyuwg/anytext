# Vercel Pinecone Integration

&#x20;is a [vector
database](/kb/guide/vector-databases) service that handles the storage and search
of complex data. With Pinecone, you can use machine-learning models for content
recommendation systems, personalized search, image recognition, and more. The
Vercel Pinecone integration allows you to deploy your models to Vercel and use
them in your applications.

## Use cases

You can use the Vercel and Pinecone integration to power a variety of AI applications, including:

- **Personalized search**: Use Pinecone's vector database to provide personalized search results. By analyzing user behavior and preferences as vectors, search engines can suggest results that are likely to interest the user
- **Image and video retrieval**: Use Pinecone's vector database in image and video retrieval systems. They can quickly find images or videos similar to a given input by comparing embeddings that represent visual content
- **Recommendation systems**: Use Pinecone's vector database in e-commerce apps and streaming services to help power recommendation systems. By analyzing user behavior, preferences, and item characteristics as vectors, these systems can suggest products, movies, or articles that are likely to interest the user

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

You can deploy a template to Vercel that includes a pre-trained model and a sample application that uses the model:

## More resources

title: "Vercel Replicate Integration"
description: "Learn how to add Replicate connectable account integration with Vercel."
last\_updated: "2026-03-23T09:40:03.502Z"
source: "https://vercel.com/docs/agent-resources/integrations-for-models/replicate"
