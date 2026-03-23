# Flightcontrol

**Preset:** `flightcontrol`

:read-more{title="flightcontrol.dev" to="https://flightcontrol.dev?ref=nitro"}

## Set Up your flightcontrol account

On a high level, the steps you will need to follow to deploy a project for the first time are:

::steps{level="4"}

#### Create an account at [Flightcontrol](https://app.flightcontrol.dev/signup?ref=nitro){rel=""nofollow""}

#### Create an account at [AWS](https://portal.aws.amazon.com/billing/signup){rel=""nofollow""} (if you don't already have one)

#### Link your AWS account to the Flightcontrol

#### Authorize the Flightcontrol GitHub App to access your chosen repositories, public or private.

#### Create a Flightcontrol project with configuration via the Dashboard or with configuration via `flightcontrol.json`.

::

### Create a project with configuration via the dashboard

::steps{level="4"}

#### Create a Flightcontrol project from the Dashboard. Select a repository for the source.

#### Select the `GUI` config type.

#### Select the Nuxt preset. This preset will also work for any Nitro-based applications.

#### Select your preferred AWS server size.

#### Submit the new project form.

::

### Create a project with configuration via `flightcontrol.json`

::steps{level="4"}

#### Create a Flightcontrol project from your dashboard. Select a repository for the source.

#### Select the `flightcontrol.json` config type.

#### Add a new file at the root of your repository called `flightcontrol.json`. Here is an example configuration that creates an AWS fargate service for your app:

::

```json [flightcontrol.json]
{
  "$schema": "https://app.flightcontrol.dev/schema.json",
  "environments": [
    {
      "id": "production",
      "name": "Production",
      "region": "us-west-2",
      "source": {
        "branch": "main"
      },
      "services": [
        {
          "id": "nitro",
          "buildType": "nixpacks",
          "name": "My Nitro site",
          "type": "fargate",
          "domain": "www.yourdomain.com",
          "outputDirectory": ".output",
          "startCommand": "node .output/server/index.mjs",
          "cpu": 0.25,
          "memory": 0.5
        }
      ]
    }
  ]
}
```

4. Submit the new project form.

::read-more{to="https://www.flightcontrol.dev/docs?ref=nitro"}
Learn more about Flightcontrol's [configuration](https://www.flightcontrol.dev/docs?ref=nitro){rel=""nofollow""}.
::

# Genezio

**Preset:** `genezio`

:read-more{title="Genezio" to="https://genezio.com"}

::important
🚧 This preset is currently experimental.
::

## 1. Project Setup

Create `genezio.yaml` file:

```yaml
# The name of the project.
name: nitro-app
# The version of the Genezio YAML configuration to parse.
yamlVersion: 2
backend:
  # The root directory of the backend.
  path: .output/
  # Information about the backend's programming language.
  language:
      # The name of the programming language.
      name: js
      # The package manager used by the backend.
      packageManager: npm
  # Information about the backend's functions.
  functions:
      # The name (label) of the function.
      - name: nitroServer
      # The path to the function's code.
        path: server/
        # The name of the function handler
        handler: handler
        # The entry point for the function.
        entry: index.mjs
```

::read-more

To further customize the file to your needs, you can consult the
[official documentation](https://genezio.com/docs/project-structure/genezio-configuration-file/){rel=""nofollow""}.
::

## 2. Deploy your project

Build with the genezio nitro preset:

```bash
NITRO_PRESET=genezio npm run build
```

Deploy with [`genezio`](https://npmjs.com/package/genezio){rel=""nofollow""} cli:

:pm-x{command="genezio deploy"}

::read-more

# Backend Environment Variables

To set environment viarables, please check out [Genezio - Environment Variables](https://genezio.com/docs/project-structure/backend-environment-variables){rel=""nofollow""}.
::

## 3. Monitor your project

You can monitor and manage your application through the [Genezio App Dashboard](https://app.genez.io/dashboard){rel=""nofollow""}. The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and logs.

# GitHub Pages

**Preset:** `github_pages`

:read-more{title="GitHub Pages" to="https://pages.github.com/"}

## Setup

Follow the steps to [create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site){rel=""nofollow""}.

## Deployment

Here is an example GitHub Actions workflow to deploy your site to GitHub Pages using the `github_pages` preset:

```yaml [.github/workflows/deploy.yml]
# https://github.com/actions/deploy-pages#usage
name: Deploy to GitHub Pages

on:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - run: corepack enable
      - uses: actions/setup-node@v6
        with:
          node-version: "18"

      - run: npx nypm install
      - run: npm run build
        env:
          NITRO_PRESET: github_pages

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./.output/public

  # Deployment job
  deploy:
    # Add a dependency to the build job
    needs: build

    # Grant GITHUB_TOKEN the permissions required to make a Pages deployment
    permissions:
      pages: write      # to deploy to Pages
      id-token: write   # to verify the deployment originates from an appropriate source

    # Deploy to the github_pages environment
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    # Specify runner + deployment step
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

# GitLab Pages

**Preset:** `gitlab_pages`

:read-more{title="GitLab Pages" to="https://pages.github.com/"}

## Setup

Follow the steps to [create a GitLab Pages site](https://docs.gitlab.com/ee/user/project/pages/#getting-started){rel=""nofollow""}.

## Deployment

1. Here is an example GitLab Pages workflow to deploy your site to GitLab Pages:

```yaml [.gitlab-ci.yml]
image: node:lts
before_script:
  - npx nypm install
pages:
  cache:
    paths:
      - node_modules/
  variables:
    NITRO_PRESET: gitlab_pages
  script:
    - npm run build
  artifacts:
    paths:
      - .output/public
  publish: .output/public
  rules:
    # This ensures that only pushes to the default branch
    # will trigger a pages deploy
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
```
