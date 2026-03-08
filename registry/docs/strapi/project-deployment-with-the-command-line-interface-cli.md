# Project deployment with the Command Line Interface (CLI)

This is a step-by-step guide for deploying your project on Strapi Cloud for the first time, using the Command Line Interface.

Before you can deploy your Strapi application on Strapi Cloud using the Command Line Interface, you need to have the following prerequisites:

- Have a Google, GitHub or GitLab account.
- Have an already created Strapi project (see [Installing from CLI in the CMS Documentation](/cms/installation/cli)), stored locally. The project must be less than 100MB.
- Have available storage in your hard drive where the temporary folder of your operating system is stored.

## Logging in to Strapi Cloud

1. Open your terminal.

2. Navigate to the folder of your Strapi project, stored locally on your computer.

3. Enter the following command to log into Strapi Cloud:

4. In the browser window that opens automatically, confirm that the code displayed is the same as the one written in the terminal message.

5. Still in the browser window, choose whether to login via Google, GitHub or GitLab. The window should confirm the successful login soon after.

## Deploying your project

1. From your terminal, still from the folder of your Strapi project, enter the following command to deploy the project:

2. Follow the progression bar in the terminal until confirmation that the project was successfully deployed with Strapi Cloud.
   Deploying the project will create a new Strapi Cloud project on the Free plan.

### Automatically deploying subsequent changes

By default, when creating and deploying a project with the Cloud CLI, you need to manually deploy again all subsequent changes by running the corresponding `deploy` command everytime you make a change.

Another option is to enable automatic deployment through a git repository. To do so:

1. Host your code on a git repository, such as  or .
2. Connect your Strapi Cloud project to the repository (see the *Connected repository* setting in [Projects Settings > General](/cloud/projects/settings#general)).
3. Still in *Projects Settings > General* tab, tick the box for the "Deploy the project on every commit pushed to this branch" setting. From now on, a new deployment to Strapi Cloud will be triggered any time a commit is pushed to the connected git repository.

Automatic deployment is compatible with all other deployment methods, so once a git repository is connected, you can trigger a new deployment to Strapi Cloud [from the Cloud dashboard](/cloud/projects/deploys), [from the CLI](/cloud/cli/cloud-cli#strapi-deploy), or by pushing new commits to your connected repository.

## ⏩ What to do next?

Now that you have deployed your project via the Command Line Interface, we encourage you to explore the following ideas to have an even more complete Strapi Cloud experience:

- Visit the Cloud dashboard to follow [insightful metrics and information](/cloud/projects/overview) on your Strapi project.
- Check out the full [Command Line Interface documentation](/cloud/cli/cloud-cli) to learn about the other commands available.

# Project deployment

Source: //cloud/getting-started/deployment-options

# Project deployment with Strapi Cloud

You have 2 options to deploy your project with Strapi Cloud:

- either with the user interface (UI), meaning that you will perform all the actions directly on the Strapi Cloud dashboard,
- or using the Cloud Comment Line Interface (CLI), meaning that you will only interact with a terminal.

The guides below will guide you through all the steps for each of the deployment options.

# Welcome to the Strapi Cloud Documentation!

Source: //cloud/getting-started/intro

# Welcome to the Strapi Cloud Documentation!

<!--

-->

The Strapi Cloud documentation contains all information related to the setup, deployment, update and customization of your Strapi Cloud account and applications.

built on top of Strapi, the open-source headless CMS.

The typical workflow, which is recommended by the Strapi team, is:

1. Create your Strapi application locally (v4.8.2 or later).
2. Optionally, extend the application with plugins or custom code.
3. Version the application's codebase through your git provider (GitHub or GitLab).
4. Deploy the application with Strapi Cloud.

The Strapi Cloud documentation is organised in topics in a order that should correspond to your journey with the product. The following cards, on which you can click, will redirect you to the main topics and steps.

Strapi Cloud is built on top of Strapi, an open-source, community-oriented project. The Strapi team has at heart to share their vision and build the future of Strapi with the Strapi community. This is why the  is open: as all insights are very important and will help steer the project in the right direction. Any community member is most welcome to share ideas and opinions there.

You can also join , the , and the  and benefit from the years of experience, knowledge, and contributions by the Strapi community as a whole.

# Information on billing & usage

Source: //cloud/getting-started/usage-billing
