# Getting Started with Code Owners

> **🔒 Permissions Required**: Code Owners

To [set up Code Owners](#setting-up-code-owners-in-your-repository) in your repository, you'll need to do the following:

- Set up [Vercel's private npm registry](/docs/private-registry) to install the necessary packages
- [Install and initialize](#setting-up-code-owners-in-your-repository) Code Owners in your repository
- [Add your repository](#adding-your-repository-to-the-vercel-dashboard) to your Vercel dashboard

If you've already set up Conformance, you may have already completed some of these steps.

## Prerequisites

### Get access to Code Owners

To enable Code Owners for your Enterprise team, you'll need to request access through your Vercel account administrator.

### Setting up Vercel's private npm registry

Vercel distributes packages with the `@vercel-private` scope through our private npm registry, and requires that each user using the package authenticates through a Vercel account.

To use the private npm registry, you'll need to follow the documentation to:

- [Set up your local environment](/docs/private-registry#setting-up-your-local-environment) – This should be completed by the team owner, but each member of your team will need to log in
- [Set up Vercel](/docs/private-registry#setting-up-vercel) – This should be completed by the team owner
- [Set up Code Owners for use with CI](/docs/private-registry#setting-up-your-ci-provider) – This should be completed by the team owner

## Setting up Code Owners in your repository

A GitHub App enables Code Owners functionality by adding reviewers and
enforcing review checks for merging PRs.

- ### Set up the Vercel CLI

  The Code Owners CLI is separate to the [Vercel CLI](/docs/cli), however it uses
  the Vercel CLI for authentication.

  Before continuing, please ensure that the Vercel CLI is [installed](/docs/cli#installing-vercel-cli)
  and that you are [logged in](/docs/cli/login).

- ### Initalizing Code Owners

  If you have an existing `CODEOWNERS` file in your repository, you can use the CLI to automatically migrate your repository to use Vercel Code Owners. Otherwise, you can skip this step.

  Start by running this command in your repository's root:

  ````
  ```bash
  pnpm i 
  ```


  ```bash
  yarn i 
  ```


  ```bash
  npm i 
  ```


  ```bash
  bun i 
  ```
  ````

  > **⚠️ Warning:** `yarn dlx` only works with Yarn version 2 or newer, for Yarn v1 use the npx
  > command.
  > After running, check the installation success by executing:

  ````
  ```bash
  pnpm i 
  ```


  ```bash
  yarn i 
  ```


  ```bash
  npm i 
  ```


  ```bash
  bun i 
  ```
  ````

- ### Install the GitHub App into a repository
  To install, you must be an organization owner or have the GitHub App Manager permissions.
  1. Go to https://github.com/apps/vercel/installations/new
  2. Choose your organization for the app installation.
  3. Select repositories for the app installation.
  4. Click `Install` to complete the app installation in the chosen repositories.

- ### Define Code Owners files

  After installation, define Code Owners files in your repository. Pull requests
  with changes in specified directories will automatically have reviewers added.

  Start by adding a `.vercel.approvers` file in a directory
  in your repository. List GitHub usernames or team names in the
  file, each on a new line:

  ```text copy filename=".vercel.approvers"
  @username1
  @org/team1
  ```

  Then, run the [`validate`](/docs/code-owners/cli#validate) command to check the syntax and merge your changes into your repository:

  ````
  ```bash
  pnpm i 
  ```


  ```bash
  yarn i 
  ```


  ```bash
  npm i 
  ```


  ```bash
  bun i 
  ```
  ````

- ### Test Code Owners on a new pull request
  With the `.vercel.approvers` file merged into the main branch, test the flow by modifying
  any file within the same or child directory. Create a pull request as usual, and the system
  will automatically add one of the listed users as a reviewer.

- ### Add the Code Owners check as required

  **This step is optional**

  By default, GitHub checks are optional and won't block merging. To make the Code Owners
  check mandatory, go to `Settings > Branches > [Edit] > Require status checks to pass before merging` in your repository settings.

## Adding your repository to the Vercel dashboard

Adding your repository to your team's Vercel [dashboard](https://vercel.com/d?to=%2Fdashboard\&title=Open+Dashboard), allows you to access the Conformance dashboard and see an overview of your Conformance stats.

- ### Import your repository
  1. Ensure your team is selected in the team switcher.
  2. From your [dashboard](https://vercel.com/d?to=%2Fdashboard\&title=Open+Dashboard), select the **Add New** button and from the dropdown select **Repository**.
  3. Then, from the **Add a new repository** screen, find your Git repository that you wish to import and select **Connect**.

- ### Configure your repository

  Before you can connect a repository, you must ensure that the Vercel GitHub app has been [installed for your team](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-a-third-party#installing-a-github-app). You should ensure it is installed for either all repositories or for the repository you are trying to connect.

  Once installed, you'll be able to connect your repository.

## More resources

- [Code Owners CLI](/docs/code-owners/cli)
- [Conformance](/docs/conformance)

title: "Code Owners"
description: "Use Code Owners to define users or teams that are responsible for directories and files in your codebase"
last\_updated: "2026-03-23T09:40:07.255Z"
source: "https://vercel.com/docs/code-owners"
