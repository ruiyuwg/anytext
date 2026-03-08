# Deploy your Astro Site with Railway

> How to deploy your Astro site using the Railway web interface.

[Railway](https://railway.com?utm_medium=integration\&utm_source=button\&utm_campaign=astro) is a deployment platform built to simplify your infrastructure stack from servers to observability with a unified developer experience.

This guide is for deploying an Astro static site to Railway using either the web interface or Railway CLI tool.

Tip

To deploy an Astro site with on-demand rendering (SSR) using the Node adapter, you can follow [Railway’s guide to deploying an Astro site](https://docs.railway.com/guides/astro?utm_medium=integration\&utm_source=button\&utm_campaign=astro).

## Project Configuration

[Section titled “Project Configuration”](#project-configuration)

Railway’s default build system, [Railpack](https://docs.railway.com/reference/railpack), automatically builds your Astro project as a static site.

## Deploy via a Railway template

[Section titled “Deploy via a Railway template”](#deploy-via-a-railway-template)

If you do not already have an Astro project, and are starting from scratch:

1. Go to the Astro template on Railway: [railway.com/deploy/astro-starter](https://railway.com/deploy/astro-starter?utm_medium=integration\&utm_source=docs\&utm_campaign=astro).

2. Click “Deploy Now” and sign in with your GitHub account to authorize Railway. This will deploy the Astro template into your new Railway account.

3. Eject the service code into your own Github repository by following [this guide](https://docs.railway.com/guides/deploy#eject-from-template-repository?utm_medium=integration\&utm_source=docs\&utm_campaign=astro). This will allow you to keep the repo deployed but customize it with your own code.

## Deploy via the web interface

[Section titled “Deploy via the web interface”](#deploy-via-the-web-interface)

If you have an existing Astro project you would like to deploy but not a Railway account yet:

1. Create a [Railway account](https://railway.com/dashboard) and sign in.

2. From the Railway dashboard, create a new [project](https://docs.railway.com/guides/projects).

3. Select the option to deploy from a GitHub repository, and select your Astro project.

4. Generate or add a custom domain from your project’s [network settings](https://docs.railway.com/guides/public-networking#railway-provided-domain).

## Deploy via Railway CLI

[Section titled “Deploy via Railway CLI”](#deploy-via-railway-cli)

If you have an existing Astro project you would like to deploy and an existing Railway account:

1. [Install](https://docs.railway.com/guides/cli#installing-the-cli) the Railway CLI tool.

2. Login with the command `railway login`.

3. From within your Astro project, run `railway init` and choose a workspace and project name.

4. Run `railway up` to deploy your project on Railway.

5. Run `railway domain` to generate a Railway provided service domain.

## Official Resources

[Section titled “Official Resources”](#official-resources)

- [Railway guide to deploying an Astro app](https://docs.railway.com/guides/astro?utm_medium=integration\&utm_source=docs\&utm_campaign=astro)
- [Railway Astro starter template](https://railway.com/deploy/astro-starter?utm_medium=integration\&utm_source=docs\&utm_campaign=astro)

## Community Resources

[Section titled “Community Resources”](#community-resources)

[How to host an Astro site on Railway](https://jacksmith.xyz/blog/how-to-host-astro-site-on-railway)

# Deploy your Astro Site to Render

> How to deploy your Astro site to the web using Render.

You can deploy your Astro project to [Render](https://render.com/), a service to build websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploys from Git.

## How to deploy

[Section titled “How to deploy”](#how-to-deploy)

1. Create a [render.com account](https://dashboard.render.com/) and sign in

2. Click the **New +** button from your dashboard and select **Static Site**

3. Connect your [GitHub](https://github.com/) or [GitLab](https://about.gitlab.com/) repository or alternatively enter the public URL of a public repository

4. Give your website a name, select the branch and specify the build command and publish directory

   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`, for static sites; `dist/client` if you have any pages rendered on demand.

5. Click the **Create Static Site** button
