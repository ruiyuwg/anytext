# Deploy your Astro Site to Azion

> How to deploy your Astro site to the web using Azion.

You can deploy your Astro project on [Azion](https://console.azion.com/), a platform for frontend developers to collaborate and deploy static (JAMstack) and SSR websites.

## Prerequisites

[Section titled “Prerequisites”](#prerequisites)

To get started, you will need:

- An [Azion account](https://www.azion.com/). If you don’t have one, you can sign up for a free account.
- Your app code stored in a [GitHub](https://github.com/) repository.
- [Azion CLI](https://www.azion.com/en/documentation/products/azion-cli/overview/) installed for faster project setup and deployment.

## How to Deploy through Azion Console Dashboard

[Section titled “How to Deploy through Azion Console Dashboard”](#how-to-deploy-through-azion-console-dashboard)

To start building, follow these steps:

1. Access [Azion Console](https://console.azion.com).

2. On the homepage, click the **+ Create** button.
   - This opens a modal with the options to create new applications and resources.

3. Select the **Import from GitHub** option and click the card.
   - This action opens the settings page.

4. Connect your Azion account with GitHub.
   - A pop-up window will appear asking for authorization.

5. Select the repository you want to import from GitHub.

6. Configure the build settings:

   - **Framework preset:** Select the appropriate framework (e.g., `Astro`).
   - **Root Directory:** This refers to the directory in which your code is located. Your code must be located at the root directory, not a subdirectory. A ./ symbol appears in this field, indicating it’s a root directory.
   - **Install Command:** the command that compiles your settings to build for production. Build commands are executed through scripts. For example: npm run build or npm install for an NPM package.

7. Click **Save and Deploy**.

8. Monitor the deployment using **Azion Real-Time Metrics** and verify your site is live on the edge.

## How to Deploy a Static Site Using the Azion CLI

[Section titled “How to Deploy a Static Site Using the Azion CLI”](#how-to-deploy-a-static-site-using-the-azion-cli)

1. **Install the Azion CLI:**

   - Download and install the [Azion CLI](https://www.azion.com/en/documentation/products/azion-cli/overview/) for easier management and deployment.

   Caution

   The Azion CLI does not currently support native Windows environments. However, you can use it on Windows through the Windows Subsystem for Linux (WSL). Follow the [WSL installation guide](https://docs.microsoft.com/en-us/windows/wsl/install) to set up a Linux environment on your Windows machine.

2. **Authenticate the CLI:**

   - Run the following command to authenticate your CLI with your Azion account.

   ```bash
   azion login
   ```

3. **Set Up Your Application:**

   - Use the following commands to initialize and configure your project:

   ```bash
   azion init
   ```

4. **Build Your Astro Project:**

   - Run your build command locally:

   ```bash
   azion build
   ```

5. **Deploy Your Static Files:**

   - Deploy your static files using the Azion CLI:

   ```bash
   azion deploy
   ```

This guide provides an overview of deploying static applications.

## Enabling Local Development Using Azion CLI

[Section titled “Enabling Local Development Using Azion CLI”](#enabling-local-development-using-azion-cli)

For the preview to work, you must execute the following command:

```bash
azion dev
```

Once you’ve initialized the local development server, the application goes through the `build` process.

```bash
Building your Edge Application. This process may take a few minutes
Running build step command:
...
```

Then, when the build is complete, the access to the application is prompted:

```bash
[Azion Bundler] [Server] › ✔  success   Function running on port http://localhost:3000
```

## Troubleshooting

[Section titled “Troubleshooting”](#troubleshooting)

### Node.js runtime APIs

[Section titled “Node.js runtime APIs”](#nodejs-runtime-apis)

A project using an NPM package fails to build with an error message such as `[Error] Could not resolve "XXXX. The package "XXXX" wasn't found on the file system but is built into node.`:

This means that a package or import you are using is not compatible with Azion’s runtime APIs.

If you are directly importing a Node.js runtime API, please refer to the [Azion Node.js compatibility](https://www.azion.com/en/documentation/products/azion-edge-runtime/compatibility/node/) for further steps on how to resolve this.

If you are importing a package that imports a Node.js runtime API, check with the author of the package to see if they support the `node:*` import syntax. If they do not, you may need to find an alternative package.

# Deploy your Astro Site with Buddy

> How to deploy your Astro site to the web using Buddy.

You can deploy your Astro project using [Buddy](https://buddy.works/), a CI/CD solution that can build your site and push it to many different deploy targets including FTP servers and cloud hosting providers.

Note

Buddy itself will not host your site. Instead, it helps you manage the build process and deliver the result to a deploy platform of your choice.

## How to deploy

[Section titled “How to deploy”](#how-to-deploy)

1. [Create a **Buddy** account](https://buddy.works/sign-up).

2. Create a new project and connect it with a git repository (GitHub, GitLab, BitBucket, any private Git Repository or you can use Buddy Git Hosting).

3. Add a new pipeline.

4. In the newly created pipeline add a **[Node.js](https://buddy.works/actions/node-js)** action.

5. In this action add:

   ```bash
   npm install
   npm run build
   ```

6. Add a deployment action — there are many to choose from, you can browse them in [Buddy’s actions catalog](https://buddy.works/actions). Although their settings can differ, remember to set the **Source path** to `dist`.

7. Press the **Run** button.

# Deploy your Astro Site with Cleavr

> How to deploy your Astro site to your VPS server using Cleavr.

You can deploy your Astro project to your own Virtual Private Server (VPS) using [Cleavr](https://cleavr.io/), a server and app deployment management tool.

Tip

Check out [the Astro guide in Cleavr’s docs](https://docs.cleavr.io/guides/astro)!

## Prerequisites

[Section titled “Prerequisites”](#prerequisites)

To get started, you will need:

- A Cleavr account
- A server on your VPS provider using Cleavr

## Add your site

[Section titled “Add your site”](#add-your-site)

1. In Cleavr, navigate to the server you want to add your Astro project to.

2. Select **Add Site** and fill in the details for your application, such as domain name.

3. For **App Type**, select ‘NodeJS Static’ or ‘NodeJS SSR’ according to how you are setting up your Astro app.

4. For Static apps, set **Artifact Folder** to `dist`.

5. For SSR apps:

   - Set **Entry Point** to `entry.mjs`.
   - Set **Artifact Folder** to `dist/server`.

6. Select **Add** to add the site to your server.

## Setup and deploy

[Section titled “Setup and deploy”](#setup-and-deploy)

1. Once your new site is added, click **Setup and deploy**.

2. Select the **VC Profile**, **Repo**, and **Branch** for your Astro Project.

3. Make any additional configurations necessary for your project.

4. Click on the **Deployments** tab and then click on **Deploy**.

Congratulations, you’ve just deployed your Astro app!
