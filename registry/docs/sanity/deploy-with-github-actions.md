# Deploy with GitHub Actions

The official [Blueprints GitHub Actions](https://github.com/sanity-io/blueprints-actions) lets you add Blueprint planning and deployment to your existing GitHub workflows.

## Prerequisites

### Create a Blueprint

Before you get started, you should have a local blueprint configured and committed to the git repository you want to use. If you’re new to blueprints, you can [get started by creating a function](https://www.sanity.io/docs/functions/function-quickstart).

Before using these actions, you need **configuration values** from your project. Run the following command to retrieve your project and stack IDs.

**CLI input**

```sh
npx sanity blueprints config
```

**CLI output**

```sh
Current configuration:
  Sanity Project: <project_id>
  Deployment ID:  <stack_id>
```

### Create a Sanity API token

Next you’ll need a Sanity API token with permission to deploy the blueprint.

1. Go to [sanity.io/manage](https://www.sanity.io/manage).
2. Select your project or organization.
3. Go to **API** → **Tokens**.
4. Select **Add API token**.\*\* \*\*
5. Create a token with deploy permissions.
6. Copy the token (you won't be able to see it again).

### Add token to GitHub secrets

Next, add the API token to your GitHub secrets.

1. Go to your GitHub repository.
2. Navigate to \*\*Settings \*\*→ **Secrets and variables** → **Actions**.
3. Select **New repository secret**.
4. Name: `SANITY_TOKEN`.
5. Value: Paste your Sanity API token.
6. Select **Add secret**.

## Create your workflows

There are two actions available: deploy and plan.

The **Deploy action** executes `sanity blueprints deploy` in your GitHub workflow, automatically applying your Blueprint configuration to your Sanity project. It deploys your resources, like functions, and provides a deployment status output for use in your workflow.

Some ways you can use it are:

- On pushes to your main/production branch for continuous deployment.
- As part of a release workflow.
- For scheduled deployments.
- After manual workflow dispatch.

The **Plan action** runs `sanity blueprints plan` and automatically posts the results as a PR comment, giving your team visibility into what changes will be applied. It shows specific changes in the resources, as well as a summary of all changes.

![A Sanity Blueprints deployment plan from a GitHub Actions bot, detailing a new function, removed test resources, and the deploy command.](https://cdn.sanity.io/images/3do82whm/next/1aac0c23b5fb6293d6e9ddf060ca7903bed84a3f-1860x1040.png)

Some ways you can use it are:

- Confirm what a blueprint will do before deploying.
- Automatically post results as a collapsible PR comment.
- Keep your PR discussions clean and organized.

### Create a Deploy workflow

Create `.github/workflows/deploy-blueprints.yml`. Replace the stack and project ID placeholders with your values.

**.github/workflows/deploy-blueprints.yml**

```yaml
name: Deploy Sanity Blueprints

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v5

      - name: Install dependencies
        run: npm ci  # or pnpm/yarn

      - name: Deploy blueprints
        uses: sanity-io/blueprints-actions/deploy@deploy-v3
        with:
          sanity-token: ${{ secrets.SANITY_TOKEN }}
          stack-id: 'ST_1234xyz'
          project-id: '1234xyz'
```

### Create a Plan workflow

Create `.github/workflows/plan-blueprints.yml`. Replace the stack and project ID placeholders with your values.

**.github/workflows/plan-blueprints.yml**

```yaml
name: Sanity Blueprints Plan

on:
  pull_request:

permissions:
  contents: read
  pull-requests: write  # Required for posting comments

jobs:
  plan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v5

      - name: Install dependencies
        run: npm ci  # or pnpm/yarn

      - name: Plan blueprints changes
        uses: sanity-io/blueprints-actions/plan@plan-v3
        with:
          sanity-token: ${{ secrets.SANITY_TOKEN }}
          stack-id: 'ST_1234xyz'
          project-id: '1234xyz'
```

### Custom working directory

If your blueprint isn’t at the root of your repository, add `working-directory`.

**deploy-blueprint.yml**

```yaml
name: Sanity Blueprints Plan

on:
  pull_request:

permissions:
  contents: read
  pull-requests: write  # Required for posting comments

jobs:
  plan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v5

      - name: Install dependencies
        run: npm ci  # or pnpm/yarn

      - name: Plan blueprints changes
        uses: sanity-io/blueprints-actions/plan@plan-v3
        with:
          sanity-token: ${{ secrets.SANITY_TOKEN }}
          stack-id: 'ST_1234xyz'
          project-id: '1234xyz'
          working-directory: 'path/to/blueprints'
```

### Use deployment status in workflow

The deploy action logs the deployment progress and provides a `deployment-status` output you can use in subsequent workflow steps. For example:

**action output**

```yaml
- name: Deploy blueprints
  id: deploy
  uses: sanity-io/blueprints-actions/deploy@deploy-v3
  with:
    sanity-token: ${{ secrets.SANITY_TOKEN }}
    stack-id: 'ST_1234xyz'
    project-id: '1234xyz'

- name: Notify on success
  if: steps.deploy.outputs.deployment-status == 'success'
  run: echo "Deployment successful!"
```

## Configuration Reference

#### Properties

| Property | Description |
| --- | --- |
| sanity-token \* | A Sanity API token with deploy permissions. |
| stack-id \* | The blueprint stack ID. Find this by running sanity blueprints config to view the active stack, or sanity blueprints stacks view all current stacks. |
| project-id \* | Sanity project ID. Find this by running sanity blueprints config or in your project settings at sanity.io/manage. |
| working-directory | Path to the directory containing your blueprint config (sanity.blueprint.ts). Defaults to the repository root. |

Visit the [GitHub Actions Repository](https://github.com/sanity-io/blueprints-actions) for additional details.
