# Deploy your Astro Site to Zeabur

> How to deploy your Astro site to the web on Zeabur.

[Zeabur](https://zeabur.com) offers hosting for full-stack web applications. Astro sites can be hosted as both SSR or static output.

This guide includes instructions for deploying to Zeabur through the website UI.

## Project Configuration

[Section titled “Project Configuration”](#project-configuration)

### Static Site

[Section titled “Static Site”](#static-site)

Astro outputs a static site by default. There is no need for any extra configuration to deploy a static Astro site to Zeabur.

### Adapter for SSR

[Section titled “Adapter for SSR”](#adapter-for-ssr)

To enable SSR in your Astro project and deploy on Zeabur:

1. Install [the `@zeabur/astro-adapter` adapter](https://www.npmjs.com/package/@zeabur/astro-adapter) to your project’s dependencies using your preferred package manager. If you’re using npm or aren’t sure, run this in the terminal:

   ```bash
     npm install @zeabur/astro-adapter
   ```

2. Add two new lines to your `astro.config.mjs` project configuration file.

   astro.config.mjs

   ```diff
   import { defineConfig } from 'astro/config';
   +import zeabur from '@zeabur/astro-adapter/serverless';


   export default defineConfig({
   +  output: 'server',
   +  adapter: zeabur(),
   });
   ```

## How to deploy

[Section titled “How to deploy”](#how-to-deploy)

You can deploy your Astro site to Zeabur if the project is stored in GitHub.

1. Click `Create new project` in the [Zeabur dashboard](https://dash.zeabur.com).

2. Configure GitHub installation and import the repository.

3. Zeabur will automatically detect that your project is an Astro project and will build it using the `astro build` command.

4. Once the build is complete, you can bind a domain to your site and visit it.

After your project has been imported and deployed, all subsequent pushes to branches will generate new builds.

Learn more about Zeabur’s [Deployment Guide](https://zeabur.com/docs/get-started/).
