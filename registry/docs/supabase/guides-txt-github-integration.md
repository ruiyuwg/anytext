# GitHub integration

Connect with GitHub to sync branches with your repository

Supabase Branching uses the Supabase GitHub integration to read files from your GitHub repository. With this integration, Supabase watches all commits, branches, and pull requests of your GitHub repository.

## Installation

In the Supabase Dashboard:

1. Go to **Project Settings** > [**Integrations**](/dashboard/project/_/settings/integrations).
2. Under **GitHub Integration**, click **Authorize GitHub**.
3. You are redirected to a GitHub authorization page. Click **Authorize Supabase**.
4. You are redirected back to the Integrations page. Choose a GitHub repository to connect your project to.
5. Fill in the relative path to the Supabase directory from your repository root.
6. Configure the other options as needed to automate your GitHub connection.
7. Click **Enable integration**.

## Preparing your Git repository

You will be using the [Supabase CLI](/docs/guides/cli) to initialise your local `./supabase` directory:

\<StepHikeCompact.Step step={1}>
\<StepHikeCompact.Details title="Initialize Supabase locally" fullWidth>
If you don't have a `./supabase` directory, you can create one:

````
  ```markdown
  supabase init
  ```
</StepHikeCompact.Details>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={2}>
\<StepHikeCompact.Details title="Pull your database migration" fullWidth>
Pull your database changes using `supabase db pull`. To get your database connection string, go to your project dashboard, click [Connect](/dashboard/project/_?showConnect=true\&method=session) and look for the Session pooler connection string.

````
  ```markdown
  supabase db pull --db-url <db_connection_string>

  # Your Database connection string will look like this:
  # postgres://postgres.xxxx:password@xxxx.pooler.supabase.com:5432/postgres
  ```

  
    If you're in an [IPv6 environment](https://github.com/orgs/supabase/discussions/27034) or have the IPv4 Add-On, you can use the direct connection string instead of Supavisor in Session mode.
  
</StepHikeCompact.Details>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Commit the `supabase` directory to Git" fullWidth>
Commit the `supabase` directory to Git, and push your changes to your remote repository.

````
  ```bash
  git add supabase
  git commit -m "Initial migration"
  git push
  ```
</StepHikeCompact.Details>
````

\</StepHikeCompact.Step>

## Syncing GitHub branches

Enable the **Automatic branching** option in your GitHub Integration configuration to automatically sync GitHub branches with Supabase branches.

When a new branch is created in GitHub, a corresponding branch is created in Supabase. (You can enable the **Supabase changes only** option to only create Supabase branches when Supabase files change.)

### Configuration

You can test configuration changes on your Preview Branch by configuring the `config.toml` file in your Supabase directory. See the [Configuration docs](/docs/guides/deployment/branching/configuration) for more information.

A comment is added to your PR with the deployment status of your preview branch.

### Migrations

The migrations in the `migrations` subdirectory of your Supabase directory are automatically run.

### Seeding

No production data is copied to your Preview branch. This is meant to protect your sensitive production data.

You can seed your Preview Branch with sample data using the `seed.sql` file in your Supabase directory. See the [Seeding docs](/docs/guides/local-development/seeding-your-database) for more information.

Data changes in your seed files are not merged to production.

## Deploying changes to production

Enable the **Deploy to production** option in your GitHub Integration configuration to automatically deploy changes when you push or merge to production branch.

The following changes are deployed:

- New migrations are applied
- Edge Functions declared in `config.toml` are deployed
- Storage buckets declared in `config.toml` are deployed

All other configurations, including API, Auth, and seed files, are ignored by default.

## Preventing migration failures

We highly recommend turning on a 'required check' for the Supabase integration. You can do this from your GitHub repository settings. This prevents PRs from being merged when migration checks fail, and stops invalid migrations from being merged into your production branch.

### Email notifications

To catch failures early, we also recommend subscribing to email notifications on your branch. Common errors include migration conflict, function deployment failure, or invalid configuration file.

You can setup a custom GitHub Action to monitor the status of any Supabase Branch.

```yaml name=.github/workflows/notify-failure.yaml
name: Branch Status

on:
  pull_request:
    types:
      - opened
      - reopened
      - synchronize
    branches:
      - main
      - develop
    paths:
      - 'supabase/**'

jobs:
  failed:
    runs-on: ubuntu-latest
    steps:
      - uses: fountainhead/action-wait-for-check@v1.2.0
        id: check
        with:
          checkName: Supabase Preview
          ref: ${{ github.event.pull_request.head.sha || github.sha }}
          token: ${{ secrets.GITHUB_TOKEN }}

      - if: ${{ steps.check.outputs.conclusion == 'failure' }}
        run: exit 1
```

# Integrations

Use Supabase branching with hosting providers and other tools

Branching works with hosting providers that support preview deployments. Learn how to integrate Supabase branching with various platforms and tools.

## Hosting providers

With the Supabase branching integration, you can sync the Git branch used by the hosting provider with the corresponding Supabase preview branch. This means that the preview deployment built by your hosting provider is matched to the correct database schema, edge functions, and other Supabase configurations.

### Vercel

Install the Vercel integration:

- From the [Vercel marketplace](https://vercel.com/integrations/supabase) or
- By clicking the blue `Deploy` button in a Supabase example app's `README` file

For branching to work with Vercel, you also need the [Vercel GitHub integration](https://vercel.com/docs/deployments/git/vercel-for-github).

And make sure you have [connected](/dashboard/org/_/integrations) your Supabase project to your Vercel project.

Supabase automatically updates your Vercel project with the correct environment variables for the corresponding preview branches. The synchronization happens at the time of Pull Request being opened, not at the time of branch creation.

As branching integration is tied to the Preview Deployments feature in Vercel, there are possible race conditions between Supabase setting correct variables, and Vercel running a deployment process. Because of that, Supabase is always automatically re-deploying the most recent deployment of the given pull request.
