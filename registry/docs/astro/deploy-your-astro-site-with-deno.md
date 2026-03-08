# Deploy your Astro Site with Deno

> How to deploy your Astro site to the web using Deno.

You can deploy a static or on-demand rendered Astro site using Deno, either on your own server, or to [Deno Deploy](https://deno.com/deploy), a distributed system that runs JavaScript, TypeScript, and WebAssembly at the edge, worldwide.

This guide includes instructions for running your Astro site on your own server with Deno, and deploying to Deno Deploy through GitHub Actions or the Deno Deploy CLI.

## Requirements

[Section titled “Requirements”](#requirements)

This guide assumes you already have [Deno](https://deno.com/) installed.

## Project Configuration

[Section titled “Project Configuration”](#project-configuration)

Your Astro project can be deployed as a static site, or as an on-demand rendered site.

### Static Site

[Section titled “Static Site”](#static-site)

Your Astro project is a static site by default. You don’t need any extra configuration to deploy a static Astro site with Deno, or to Deno Deploy.

### Adapter for on-demand rendering

[Section titled “Adapter for on-demand rendering”](#adapter-for-on-demand-rendering)

To enable on-demand rendering in your Astro project using Deno, and to deploy on Deno Deploy:

1. Install [the `@deno/astro-adapter` adapter](https://github.com/denoland/deno-astro-adapter) to your project’s dependencies using your preferred package manager:

   - npm

     ```shell
     npm install @deno/astro-adapter
     ```

   - pnpm

     ```shell
     pnpm install @deno/astro-adapter
     ```

   - Yarn

     ```shell
     yarn add @deno/astro-adapter
     ```

2. Update your `astro.config.mjs` project configuration file with the changes below.

   astro.config.mjs

   ```diff
   import { defineConfig } from 'astro/config';
   +import deno from '@deno/astro-adapter';


   export default defineConfig({
   +  output: 'server',
   +  adapter: deno(),
   });
   ```

3. Update your `preview` script in `package.json` with the change below.

   package.json

   ```diff
   {
     // ...
     "scripts": {
       "dev": "astro dev",
       "start": "astro dev",
       "build": "astro build",
       -"preview": "astro preview"
       +"preview": "deno run --allow-net --allow-read --allow-env ./dist/server/entry.mjs"
     }
   }
   ```

   You can now use this command to preview your production Astro site locally with Deno.

   - npm

     ```shell
     npm run preview
     ```

   - pnpm

     ```shell
     pnpm run preview
     ```

   - Yarn

     ```shell
     yarn run preview
     ```

## How to deploy

[Section titled “How to deploy”](#how-to-deploy)

You can run your Astro site on your own server, or deploy to Deno Deploy through GitHub Actions or using Deno Deploy’s CLI (command line interface).

### On your own server

[Section titled “On your own server”](#on-your-own-server)

1. Copy your project onto your server.

2. Install the project dependencies using your preferred package manager:

   - npm

     ```shell
     npm install
     ```

   - pnpm

     ```shell
     pnpm install
     ```

   - Yarn

     ```shell
     yarn
     ```

3. Build your Astro site with your preferred package manager:

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

4. Start your application with the following command:

   - Static

     ```bash
     deno run -A jsr:@std/http/file-server dist
     ```

   - On demand

     ```bash
     deno run -A ./dist/server/entry.mjs
     ```

### GitHub Actions Deployment

[Section titled “GitHub Actions Deployment”](#github-actions-deployment)

If your project is stored on GitHub, the [Deno Deploy website](https://dash.deno.com/) will guide you through setting up GitHub Actions to deploy your Astro site.

1. Push your code to a public or private GitHub repository.

2. Sign in on [Deno Deploy](https://dash.deno.com/) with your GitHub account, and click on [New Project](https://dash.deno.com).

3. Select your repository, the branch you want to deploy from, and select **GitHub Action** mode. (Your Astro site requires a build step, and cannot use Automatic mode.)

4. In your Astro project, create a new file at `.github/workflows/deploy.yml` and paste in the YAML below. This is similar to the YAML given by Deno Deploy, with the additional steps needed for your Astro site.

   - Static

     .github/workflows/deploy.yml

     ```yaml
     name: Deploy
     on: [push]


     jobs:
       deploy:
         name: Deploy
         runs-on: ubuntu-latest
         permissions:
           id-token: write # Needed for auth with Deno Deploy
           contents: read # Needed to clone the repository


         steps:
           - name: Clone repository
             uses: actions/checkout@v4


           # Not using npm? Change `npm ci` to `yarn install` or `pnpm i`
           - name: Install dependencies
             run: npm ci


           # Not using npm? Change `npm run build` to `yarn build` or `pnpm run build`
           - name: Build Astro
             run: npm run build


           - name: Upload to Deno Deploy
             uses: denoland/deployctl@v1
             with:
               project: my-deno-project # TODO: replace with Deno Deploy project name
               entrypoint: jsr:@std/http/file-server
               root: dist
     ```

   - On demand

     .github/workflows/deploy.yml

     ```yaml
     name: Deploy
     on: [push]


     jobs:
       deploy:
         name: Deploy
         runs-on: ubuntu-latest
         permissions:
           id-token: write # Needed for auth with Deno Deploy
           contents: read # Needed to clone the repository


         steps:
           - name: Clone repository
             uses: actions/checkout@v4


           # Not using npm? Change `npm ci` to `yarn install` or `pnpm i`
           - name: Install dependencies
             run: npm ci


           # Not using npm? Change `npm run build` to `yarn build` or `pnpm run build`
           - name: Build Astro
             run: npm run build


           - name: Upload to Deno Deploy
             uses: denoland/deployctl@v1
             with:
               project: my-deno-project # TODO: replace with Deno Deploy project name
               entrypoint: dist/server/entry.mjs
     ```

5. After committing this YAML file, and pushing to GitHub on your configured deploy branch, the deploy should begin automatically!

   You can track the progress using the “Actions” tab on your GitHub repository page, or on [Deno Deploy](https://dash.deno.com).

### CLI Deployment

[Section titled “CLI Deployment”](#cli-deployment)

1. Install the [Deno Deploy CLI](https://docs.deno.com/deploy/manual/deployctl).

   ```bash
   deno install -gArf jsr:@deno/deployctl
   ```

2. Build your Astro site with your preferred package manager:

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

3. Run `deployctl` to deploy!

   - Static

     ```bash
     cd dist && deployctl deploy jsr:@std/http/file-server
     ```

   - On demand

     ```bash
     deployctl deploy ./dist/server/entry.mjs
     ```

   You can track all your deploys on [Deno Deploy](https://dash.deno.com).

4. (Optional) To simplify the build and deploy into one command, add a `deploy-deno` script in `package.json`.

   - Static

     package.json

     ```diff
     {
       // ...
       "scripts": {
       "dev": "astro dev",
       "start": "astro dev",
       "build": "astro build",
       "preview": "astro preview",
       +"deno-deploy": "npm run build && cd dist && deployctl deploy jsr:@std/http/file-server"
       }
     }
     ```

   - On demand

     package.json

     ```diff
     {
       // ...
       "scripts": {
         "dev": "astro dev",
         "start": "astro dev",
         "build": "astro build",
         "preview": "deno run --allow-net --allow-read --allow-env ./dist/server/entry.mjs",
         +"deno-deploy": "npm run build && deployctl deploy ./dist/server/entry.mjs"
       }
     }
     ```

   Then you can use this command to build and deploy your Astro site in one step.

   ```bash
   npm run deno-deploy
   ```

# Deploy your Astro Site with DeployHQ

> How to deploy your Astro site to the web using DeployHQ.

You can deploy your Astro project to your own servers using [DeployHQ](https://www.deployhq.com/), a deployment automation platform that builds your code and pushes it to SSH/SFTP servers, FTP servers, cloud storage (e.g. Amazon S3, Cloudflare R2), and modern hosting platforms (e.g. Netlify, Heroku).

Note

DeployHQ does not host your site. It automates building your Astro project and deploying the built files to your chosen hosting provider or server.

## How to deploy

[Section titled “How to deploy”](#how-to-deploy)

1. If you do not already have one, sign up for a [DeployHQ account](https://www.deployhq.com/).

2. From the DeployHQ web interface, create a new project and connect the Git repository for your Astro project (GitHub, GitLab, Bitbucket, or any private repository). You will also need to authorize DeployHQ to access your repository.

3. Add a server and enter your server details:

   - Give your server a name.
   - Select your protocol (SSH/SFTP, FTP, or cloud platform).
   - Enter your server hostname, username, and password/SSH key.
   - Set **Deployment Path** to your web root (e.g. `public_html/`).

4. In your project settings, navigate to **Build Pipeline** and add your build commands:

   ```bash
   npm install
   npm run build
   ```

5. Click **Deploy Project**, then select your server and click **Deploy** to start your first deployment.

Your Astro site will be built and deployed to your server. You can enable automatic deployments to deploy on every Git push, or schedule deployments for specific times.

See [DeployHQ’s documentation](https://www.deployhq.com/support) for more info on advanced deployment features.

# Deploy your Astro Site to EdgeOne Pages

> How to deploy your Astro site to the web on EdgeOne Pages.

You can deploy your Astro project on [EdgeOne Pages](https://pages.edgeone.ai/), a fullstack development platform with a global edge network that can build your site from a Git connection or from the EdgeOne CLI.

## Official Resources

[Section titled “Official Resources”](#official-resources)

- [EdgeOne Astro Framework Guide](https://pages.edgeone.ai/document/framework-astro)
- [EdgeOne Astro template](https://github.com/TencentEdgeOne/astro-template)
