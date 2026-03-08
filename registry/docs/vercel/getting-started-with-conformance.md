# Getting Started with Conformance

> **🔒 Permissions Required**: Conformance

To [set up Conformance](#setting-up-conformance-in-your-repository) in your repository, you must:

- Set up [Vercel's private npm registry](/docs/private-registry) to install the necessary packages
- [Install and initialize](/docs/conformance/getting-started#setting-up-conformance-in-your-repository) Conformance in your repository

If you've already set up Code Owners, you may have already completed some of these steps.

## Prerequisites

### Get access to Conformance

To enable Conformance for your Enterprise team, you'll need to request access through your Vercel account administrator.

### Setting up Vercel's private npm registry

Vercel distributes packages with the `@vercel-private` scope through our private npm registry, and requires that each user using the package authenticates through a Vercel account.

To use the private npm registry, you'll need to follow the documentation to:

- [Set up your local environment](/docs/private-registry#setting-up-your-local-environment) – This should be completed by the team owner, but each member of your team will need to log in
- [Set up Vercel](/docs/private-registry#setting-up-vercel) – This should be completed by the team owner
- [Optionally, set up Conformance for use with CI](/docs/private-registry#setting-up-your-ci-provider) – This should be completed by the team owner

## Setting up Conformance in your repository

This section guides you through setting up Conformance for your repository.

- ### Set up the Vercel CLI

  The Conformance CLI is separate to the [Vercel CLI](/docs/cli), however it
  uses the Vercel CLI for authentication.

  Before continuing, please ensure that the Vercel CLI is [installed](/docs/cli#installing-vercel-cli)
  and that you are [logged in](/docs/cli/login).

- ### Initialize Conformance

  Use the CLI to automatically initialize Conformance in your project. Start by running this command in your repository's root:

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

  > **⚠️ Warning:** `yarn dlx` only works with Yarn version 2 or newer, for Yarn v1 use&#x20;
  > `yarn -DW add @vercel-private/conformance && yarn vercel-conformance init`
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

- ### Review the generated changes
  The Conformance `init` command creates the following changes:
  - First, it installs the CLI package in your root `package.json` and every workspace `package.json`, if your monorepo uses workspaces.
  - It also adds a `conformance` script to the `scripts` field of every
    `package.json`. This script runs Conformance.
  - It adds any existing Conformance errors to allowlists, letting you start using Conformance without immediate fixes and allowing you to gradually resolve these allowlist entries over time. Learn more about Conformance Allowlists in the [documentation](/docs/conformance/allowlist).
    Once you've reviewed these, open a pull request with the changes and merge it.

- ### Add owners for allowlist files

  \*\* This step assumes you have [set up Code Owners](/docs/code-owners/getting-started).\*\*

  Conformance allows specific individuals to review modifications to allowlist files.
  Add a `.vercel.approvers` file at your repository's root:

  ```text copy filename=".vercel.approvers"
  **/*.allowlist.json @org/team:required
  ```

  Now, changes to allowlist files need a review from someone on
  `@org/team` before merging.

  Learn more about [wildcard syntax](/docs/code-owners/code-approvers#globstar-pattern)
  and [`:required` syntax](/docs/code-owners/code-approvers#required) from Code Owners.

- ### Add Conformance to your CI system
  You can integrate Conformance in your CI to avoid merging errors into your code. To learn more, see [Setting up your CI provider](/docs/private-registry#setting-up-your-ci-provider).

## More resources

- [Code Owners](/docs/code-owners)
- [Conformance](/docs/conformance)

title: "Introduction to Conformance"
description: "Learn how Conformance improves collaboration, productivity, and software quality at scale."
last\_updated: "2026-03-08T05:03:12.621Z"
source: "https://vercel.com/docs/conformance"
