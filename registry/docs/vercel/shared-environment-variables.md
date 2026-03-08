# Shared environment variables

**Shared Environment Variables** are [environment variables](/docs/environment-variables "Environment variables") that you define at the team-level and can link to multiple projects. When a Shared Environment Variable is updated, the change is applied to all linked projects.

> **💡 Note:** When a project-level and a Shared Environment Variable share the same key and
> environment, the project-level environment variable always overrides the
> Shared Environment Variable.

## Creating shared environment variables

Shared Environment Variables are created on the [Team Settings page](/docs/accounts/create-a-team). To create a new Shared Environment Variable, follow these steps:

1. Go to the Vercel [dashboard](https://vercel.com/d?to=%2Fdashboard\&title=Open+Dashboard) and select your team from the team switcher. Click on the **Settings** section in the sidebar and then select **Environment Variables** from the left navigation.
2. Populate the form with your environment variable details or paste or import an `.env` file:

![Image](`/docs-assets/static/docs/concepts/projects/shared-environment-variables/shared-envs-form.png`)

- **Key**: Fill in the key of the environment variable.
- **Value**: Fill in the value of the environment variable.
- **Environment**: Select the [Environments](/docs/environment-variables#environments) where you want to include it. The environment(s) chosen for the Shared Environment Variable is used when linked to a project.
- **Link to Projects**: Select one or more [projects](/docs/projects/overview) in succession to link the new Shared Environment Variable by using the searchable drop-down. You can keep this empty and [link to projects](#linking-to-projects) later.

3. Click **Save** to save your new Shared Environment Variable.

## Linking to projects

A Shared Environment Variable is activated once it is linked to at least one project.

You can link an existing Shared Environment Variable to a project either at the project-level or the team-level.

### Project level linking

For project-level linking:

1. From your [dashboard](https://vercel.com/d?to=%2Fdashboard\&title=Open+Dashboard), select the Project you would like to link the Shared Environment Variable to and click the **Settings** section in the sidebar.
2. Select **Environment Variables** from the list, and click on the **Link Shared Environment Variables** section in the sidebar.
3. Select one or more Shared Environment Variables using the search box:

![Image](`/docs-assets/static/docs/concepts/projects/shared-environment-variables/shared-envs-project-search.png`)

1. Click the **Link** button

### Team level linking

1. From your [dashboard](https://vercel.com/d?to=%2Fdashboard\&title=Open+Dashboard), click the **Settings** section in the sidebar and go to **Environment Variables**.
2. Scroll down below the Shared Environment Variable creation form.
3. Find the variable you would like to link. You can use the **Search** box, the **Environments** drop-down filter and sort by **last updated date**, **name** or **type** to more easily find the variable.
4. Open the context menu for the specific Shared Environment Variable using the vertical ellipsis  icon on the right hand side of the row, and click **Edit**:

![Image](`/docs-assets/static/docs/concepts/projects/shared-environment-variables/shared-envs-team-link.png`)

1. From the Environment Variable form, you can link additional projects using the **Link to Projects** field
2. Click **Save** when you are done

## Removing shared environment variables

There are two ways to remove a Shared Environment Variable from a project:

- **Unlinking**: It is disassociated from the selected project(s) but continues to exist at the level of the team
- **Deleting**: It is **permanently** removed from the team and disconnected from all projects it was previously linked to.

### Unlinking at the project level

1. From your [dashboard](https://vercel.com/d?to=%2Fdashboard\&title=Open+Dashboard), select the project you would like to unlink the Shared Environment Variable from and click the **Settings** section in the sidebar.
2. Select **Environment Variables**, and scroll down to the **Shared Environment Variables** section.
3. Open the context menu for the specific shared environment variable you would like to unlink using the vertical ellipsis  icon on the right hand side.
4. Click **Unlink from this Project**:

![Image](`/docs-assets/static/docs/concepts/projects/shared-environment-variables/shared-envs-project-unlink.png`)

### Unlinking at the team level

1. From your [dashboard](https://vercel.com/d?to=%2Fdashboard\&title=Open+Dashboard), click the **Settings** section in the sidebar and go to **Environment Variables**.
2. Scroll down below the Environment Variable creation form.
3. Find the variable you would like to link. You can use the **Search** box, the **Environments** drop-down filter and sort by **last updated date**, **name** or **type** to more easily find the variable.
4. Open the context menu for the specific shared environment variable using the vertical ellipsis  icon on the right hand side of the row, and click **Edit**:

![Image](`/docs-assets/static/docs/concepts/projects/shared-environment-variables/shared-envs-team-link.png`)

1. From the Environment Variable form, click the minus  icon to unlink existing projects
2. When you are done, click the **Save** button.

### Deleting environment variables from a team

1. From your [dashboard](https://vercel.com/d?to=%2Fdashboard\&title=Open+Dashboard), click the **Settings** section in the sidebar and go to **Environment Variables**.
2. Scroll down below the Environment Variable creation form
3. Use the context menu on the specific Shared Environment Variable by clicking the vertical ellipsis  icon on the right side of the row
4. Click the **Delete** button

> **⚠️ Warning:** This action will remove the Shared Environment Variable from the Vercel Team.
> It will also unlink the Environment Variable from **ALL** previously linked
> projects.

## Known limitations

[Branch-specific variables](/docs/environment-variables#preview-environment-variables) are not currently supported with Shared Environment Variables

title: "System environment variables"
description: "System environment variables are automatically populated by Vercel, such as the URL of the deployment or the name of the Git branch deployed."
last\_updated: "2026-03-08T05:03:14.034Z"
source: "https://vercel.com/docs/environment-variables/system-environment-variables"
