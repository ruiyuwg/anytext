# Deploy your Astro Site to Google’s Firebase Hosting

> How to deploy your Astro site to the web using Google’s Firebase Hosting.

[Firebase Hosting](https://firebase.google.com/products/hosting) is a service provided by Google’s [Firebase](https://firebase.google.com/) app development platform, which can be used to deploy an Astro site.

See our separate guide for [adding Firebase backend services](/en/guides/backend/firebase/) such as databases, authentication, and storage.

## Project Configuration

[Section titled “Project Configuration”](#project-configuration)

Your Astro project can be deployed to Firebase as a static site, or as a server-side rendered site (SSR).

### Static Site

[Section titled “Static Site”](#static-site)

Your Astro project is a static site by default. You don’t need any extra configuration to deploy a static Astro site to Firebase.

### Adapter for SSR

[Section titled “Adapter for SSR”](#adapter-for-ssr)

To enable SSR in your Astro project and deploy on Firebase add the [Node.js adapter](/en/guides/integrations-guide/node/).

Note

Deploying an SSR Astro site to Firebase requires the [Blaze plan](https://firebase.google.com/pricing) or higher.

## How to deploy

[Section titled “How to deploy”](#how-to-deploy)

1. Install the [Firebase CLI](https://github.com/firebase/firebase-tools). This is a command-line tool that allows you to interact with Firebase from the terminal.

   - npm

     ```shell
     npm install firebase-tools
     ```

   - pnpm

     ```shell
     pnpm add firebase-tools
     ```

   - Yarn

     ```shell
     yarn add firebase-tools
     ```

2. Authenticate the Firebase CLI with your Google account. This will open a browser window where you can log in to your Google account.

   - npm

     ```shell
     npx firebase login
     ```

   - pnpm

     ```shell
     pnpm exec firebase login
     ```

   - Yarn

     ```shell
     yarn firebase login
     ```

3. Enable experimental web frameworks support. This is an experimental feature that allows the Firebase CLI to detect and configure your deployment settings for Astro.

   - npm

     ```shell
     npx firebase experiments:enable webframeworks
     ```

   - pnpm

     ```shell
     pnpm exec firebase experiments:enable webframeworks
     ```

   - Yarn

     ```shell
     yarn firebase experiments:enable webframeworks
     ```

4. Initialize Firebase Hosting in your project. This will create a `firebase.json` and `.firebaserc` file in your project root.

   - npm

     ```shell
     npx firebase init hosting
     ```

   - pnpm

     ```shell
     pnpm exec firebase init hosting
     ```

   - Yarn

     ```shell
     yarn firebase init hosting
     ```

5. Deploy your site to Firebase Hosting. This will build your Astro site and deploy it to Firebase.

   - npm

     ```shell
     npx firebase deploy --only hosting
     ```

   - pnpm

     ```shell
     pnpm exec firebase deploy --only hosting
     ```

   - Yarn

     ```shell
     yarn firebase deploy --only hosting
     ```

# Deploy your Astro Site to Fleek

> How to deploy your Astro site to the web on Fleek.

You can use [Fleek](http://fleek.xyz/) to deploy a static Astro site to their edge-optimized decentralized network.

This guide gives a complete walkthrough of deploying your Astro site to Fleek using the Fleek UI and CLI.

## Project Configuration

[Section titled “Project Configuration”](#project-configuration)

Your Astro project can be deployed to Fleek as a static site.

## How to deploy

[Section titled “How to deploy”](#how-to-deploy)

You can deploy to Fleek through the website UI or using Fleek’s CLI (command line interface).

### Platform UI Deployment

[Section titled “Platform UI Deployment”](#platform-ui-deployment)

1. Create a [Fleek](https://app.fleek.xyz) account.

2. Push your code to your online Git repository (GitHub).

3. Import your project into Fleek.

4. Fleek will automatically detect Astro and then you can configure the correct settings.

5. Your application is deployed!

### Fleek CLI

[Section titled “Fleek CLI”](#fleek-cli)

1. Install the Fleek CLI.

   ```bash
   # You need to have Nodejs >= 18.18.2
   npm install -g @fleek-platform/cli
   ```

2. Log in to your Fleek account from your terminal.

   ```bash
   fleek login
   ```

3. Run the build command to generate the static files. By default, these will be located in the `dist/` directory.

   ```bash
   npm run build
   ```

4. Initialize your project. This will generate a configuration file.

   ```bash
   fleek sites init
   ```

5. You will be prompted to either create a new Fleek Site or use an existing one. Give the site a name and select the directory where your project is located.

6. Deploy your site.

   ```bash
   fleek sites deploy
   ```

## Learn more

[Section titled “Learn more”](#learn-more)

[Deploy site from Fleek UI](https://fleek.xyz/docs/platform/deployments/)

[Deploy site from Fleek CLI](https://fleek.xyz/docs/cli/hosting/)
