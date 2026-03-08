# Deploy your Astro Site to Zephyr Cloud

> How to deploy your Astro site to the web using Zephyr Cloud.

You can use [Zephyr Cloud](https://zephyr-cloud.io) to deploy an Astro site with intelligent asset management, comprehensive build analytics, and first-class support for Module Federation architectures.

Zephyr operates on a **Bring Your Own Cloud (BYOC)** model, deploy to your choice of [supported clouds](https://docs.zephyr-cloud.io/cloud) through a unified interface without vendor lock-in. Switch providers anytime without changing your deployment workflow.

## How to deploy

[Section titled “How to deploy”](#how-to-deploy)

### Automatic Installation

[Section titled “Automatic Installation”](#automatic-installation)

1. Add the Zephyr integration to your Astro project with the following command. This will install the integration and update your `astro.config.mjs` file automatically:

   - npm

     ```shell
     npx with-zephyr@latest
     ```

   - pnpm

     ```shell
     pnpm dlx with-zephyr@latest
     ```

   - Yarn

     ```shell
     yarn dlx with-zephyr@latest
     ```

2. Build and deploy your Astro site:

   - npm

     ```shell
     npm run build
     ```

   - pnpm

     ```shell
     pnpm run build
     ```

   - Yarn

     ```shell
     yarn run build
     ```

3. Your application is deployed! Zephyr will provide a deployment URL and comprehensive build analytics.

### Manual Installation

[Section titled “Manual Installation”](#manual-installation)

1. Install the Zephyr Astro integration:

   - npm

     ```shell
     npm install zephyr-astro-integration
     ```

   - pnpm

     ```shell
     pnpm add zephyr-astro-integration
     ```

   - Yarn

     ```shell
     yarn add zephyr-astro-integration
     ```

2. Add the integration to your `astro.config.mjs`:

   ```js
   import { defineConfig } from 'astro/config';
   import { withZephyr } from 'zephyr-astro-integration';


   export default defineConfig({
     integrations: [
       withZephyr(),
     ],
   });
   ```

3. Build and deploy your Astro site:

   - npm

     ```shell
     npm run build
     ```

   - pnpm

     ```shell
     pnpm run build
     ```

   - Yarn

     ```shell
     yarn run build
     ```

4. Your application is deployed! Zephyr will provide a deployment URL and comprehensive build analytics.

### More details

[Section titled “More details”](#more-details)

For more detailed information refer to the [Zephyr Cloud documentation on deploying with Astro](https://docs.zephyr-cloud.io/meta-frameworks/astro).

## What happens during deployment

[Section titled “What happens during deployment”](#what-happens-during-deployment)

When you build your Astro site with the Zephyr integration, the following process occurs:

1. **Build Context Extraction**: Zephyr captures Git information (commit, branch, author) and package metadata
2. **Asset Hashing**: All build outputs are hashed using SHA-256 for content-addressable storage
3. **Delta Detection**: Zephyr queries the CDN edge to identify which assets already exist
4. **Optimized Upload**: Only new or modified assets are uploaded
5. **Snapshot Creation**: An immutable deployment snapshot is created with all asset references
6. **Analytics Upload**: Build statistics, module graphs, and dependency information are sent to the dashboard
7. **CDN Deployment**: Assets are published to your configured CDN with permanent cache headers

## Official Resources

[Section titled “Official Resources”](#official-resources)

- [Zephyr Cloud Documentation](https://docs.zephyr-cloud.io)
- [Zephyr Astro Integration on GitHub](https://github.com/ZephyrCloudIO/zephyr-packages/tree/main/libs/zephyr-astro-integration)
- [Zephyr Cloud Platform](https://zephyr-cloud.io)
