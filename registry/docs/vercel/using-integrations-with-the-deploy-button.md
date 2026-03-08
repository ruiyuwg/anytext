# Using Integrations with the Deploy Button

## Required Integrations

| Parameter         | Type       | Value                                                                                                             |
| ----------------- | ---------- | ----------------------------------------------------------------------------------------------------------------- |
| `integration-ids` | `string[]` | A comma-separated list of required Integrations IDs: `oac_4mkAfc68cuDV4suZRlgkn3R9, oac_JI9dt8xHo7UXmVV6mZTygMNZ` |

This parameter allows you to specify a list of Integration IDs. When specified, the corresponding Integrations will be required to be added before the Project can be imported. You can add up to 3 Integrations per Project.

You can find the IDs of your Integrations in the [Integrations Console](/dashboard/integrations/console).

The example below shows how to use the `integration-ids` parameter in a Deploy Button source URL:

```bash filename="integration id"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&integration-ids=oac_1mkAfc68cuDV4suZRlgkn3Re
```

## Skippable Integrations

| Parameter                | Type     | Value                                              |
| ------------------------ | -------- | -------------------------------------------------- |
| `skippable-integrations` | `number` | Mark the list of provided Integrations as optional |

If this parameter is present, the user will be able to add one of the provided Integrations or skip them entirely, instead of being forced to add all of them.

Because the user will only be able to select one (not multiple) of the optional Integrations, they should all serve the same purpose. For example, if the purpose is error tracking, the Integrations [Sentry](/marketplace/sentry) and [Datadog](/marketplace/datadog) could be defined here.

To use this parameter, you also need to specify at least one Integration.

The example below shows how to use the `skippable-integrations` parameter in a Deploy Button source URL:

```bash filename="skippable integrations"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&integration-ids=oac_1mkAfc68cuDV4suZRlgkn3Re&skippable-integrations=1
```

title: "Working with the Deploy Button"
description: "Deploy public Git projects with the Deploy Button, and set up new projects with Vercel and GitHub, GitLab, or Bitbucket"
last\_updated: "2026-03-08T05:03:13.089Z"
source: "https://vercel.com/docs/deploy-button"

# Working with the Deploy Button

The Deploy Button allows users to deploy a new project through the Vercel Project creation flow, while cloning the source Git repository to GitHub, GitLab, or Bitbucket.

You can [create your Deploy Button with the generator below](#generate-your-own).

The Vercel Project creation flow allows users to deploy a Git repository, create a project with Vercel, and clone the source repository into their GitHub, GitLab, or Bitbucket account.

## Snippets

With the Vercel Project creation flow, you can add various URL query parameters to control the experience a user will have, depending on the requirements of your project.

title: "Deploy Button Source"
description: "Learn how to use the Vercel Deploy Button source URL parameters."
last\_updated: "2026-03-08T05:03:13.098Z"
source: "https://vercel.com/docs/deploy-button/source"
