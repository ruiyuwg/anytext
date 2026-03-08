# Deploy your Astro Site to Clever Cloud

> How to deploy your Astro site to the web on Clever Cloud.

[Clever Cloud](https://clever-cloud.com) is a European cloud platform that provides automated, scalable services.

## Project Configuration

[Section titled “Project Configuration”](#project-configuration)

You can deploy both fully static and on-demand rendered Astro projects on Clever Cloud. Regardless of your `output` mode (pre-rendered or [on-demand](/en/guides/on-demand-rendering/)), you can choose to deploy as a **static application** which runs using a post-build hook, or as a **Node.js** application, which requires some manual configuration in your `package.json`.

### Scripts

[Section titled “Scripts”](#scripts)

If you’re running an on-demand Node.js application, update your `start` script to run the Node server. Applications on Clever Cloud listen on port **8080**.

package.json

```json
"scripts": {
  "start": "node ./dist/server/entry.mjs --host 0.0.0.0 --port 8080",
}
```

## Deploy Astro from the Console

[Section titled “Deploy Astro from the Console”](#deploy-astro-from-the-console)

To deploy your Astro project to Clever Cloud, you will need to **create a new application**. The application wizard will walk you through the necessary configuration steps.

1. From the lateral menubar, click **Create** > **An application**

2. Choose how to deploy:

   - **Create a brand new app**: to deploy from a local repository with Git

   or

   - **Select a GitHub repository**: to deploy from GitHub

3. Select a **Node.js** application, or a **static** one.

4. Set up the minimal size for your instance and scalability options. Astro sites can typically be deployed using the **Nano** instance. Depending on your project’s specifications and dependencies, you may need to adjust accordingly as you watch the metrics from the **Overview** page.

5. Select a **region** to deploy your instance.

6. Skip [connecting **Add-ons** to your Clever application](https://www.clever-cloud.com/developers/doc/addons/) unless you’re using a database or Keycloak.

7. Inject **environment variables**:

   - For **Node.js**, set the following environment variables based on your package manager:

   * npm

     ```shell
     CC_NODE_BUILD_TOOL="npm"
     CC_PRE_BUILD_HOOK="npm install && npm run astro telemetry disable && npm run build"
     ```

   * pnpm

     ```shell
     CC_NODE_BUILD_TOOL="custom"
     CC_PRE_BUILD_HOOK="npm install -g pnpm && pnpm install"
     CC_CUSTOM_BUILD_TOOL="pnpm run astro telemetry disable && pnpm build"
     ```

   * Yarn

     ```shell
     CC_NODE_BUILD_TOOL="yarn"
     CC_PRE_BUILD_HOOK="yarn && yarn run astro telemetry disable && yarn build"
     ```

   - For a **static** application, add these variables:

   * npm

     ```shell
     CC_POST_BUILD_HOOK="npm run build"
     CC_PRE_BUILD_HOOK="npm install && npm run astro telemetry disable"
     CC_WEBROOT="/dist"
     ```

   * pnpm

     ```shell
     CC_POST_BUILD_HOOK="pnpm build"
     CC_PRE_BUILD_HOOK="npm install -g pnpm && pnpm install && pnpm run astro telemetry disable"
     CC_WEBROOT="/dist"
     ```

   * Yarn

     ```shell
     CC_POST_BUILD_HOOK="yarn build"
     CC_PRE_BUILD_HOOK="yarn && yarn run astro telemetry disable"
     CC_WEBROOT="/dist"
     ```

8. **Deploy!** If you’re deploying from **GitHub**, your deployment should start automatically. If you’re using **Git**, copy the remote and push on the **master** branch.

Other Branches

To deploy from branches other than `master`, use `git push clever <branch>:master`.

For example, if you want to deploy your local `main` branch without renaming it, use `git push clever main:master`.

## Official Resources

[Section titled “Official Resources”](#official-resources)

- [Clever Cloud documentation for deploying a Node.js application](https://www.clever-cloud.com/developers/doc/applications/javascript/nodejs/)
- [Clever Cloud documentation for deploying Astro as a static application](https://www.clever-cloud.com/developers/guides/astro/)
