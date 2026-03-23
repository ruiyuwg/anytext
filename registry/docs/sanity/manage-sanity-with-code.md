# Manage Sanity with code

#### Get started

[Introduction](https://www.sanity.io/docs/blueprints/blueprints-introduction)

[Create a Sanity Function](https://www.sanity.io/docs/functions/function-quickstart)

[Deploy Blueprints with GitHub Actions](https://www.sanity.io/docs/blueprints/blueprint-action)

#### Reference documentation

[Configuration reference](https://www.sanity.io/docs/blueprints/blueprint-config)

[Blueprints CLI command reference](https://www.sanity.io/docs/cli-reference/cli-blueprints)

# Introduction

Blueprints enable infrastructure-as-code level management of Sanity resources. At this time, Blueprints are limited to managing Functions.

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

## Requirements

- The latest version of Sanity CLI (`sanity@latest`) is recommended to interact with Blueprints and Functions as shown in this guide. You can always run the latest CLI commands with `npx sanity@latest`.
- Write access to your organization and project settings.
- Deploying a blueprint requires the `sanity-project` update permission.

## Core concepts

### Blueprint

Like a configuration file, a blueprint lets you define and customize Sanity resources.

[Blueprint configuration reference](https://www.sanity.io/docs/blueprints/blueprint-config)

### Resource

Core Sanity components are resources. You can create and update resources by defining them in Blueprints.

#### Define resources with Blueprints

[Functions](https://www.sanity.io/docs/functions/functions-introduction)

[Define a webhook with Blueprints](https://www.sanity.io/docs/blueprints/blueprints-webhook)

[Define a CORS origin with Blueprints](https://www.sanity.io/docs/blueprints/blueprints-cors)

[Define a robot token with Blueprints](https://www.sanity.io/docs/blueprints/blueprints-robot-tokens)

[Define a role with Blueprints](https://www.sanity.io/docs/blueprints/blueprints-role)

### Stack

A stack is a collection of resources that are managed as a single unit. These are linked to a project and can be multiple deployments of the same `sanity.blueprint.ts` configuration, or deployments for different blueprint configurations entirely.

For example, marketing might have a `sanity.blueprint.ts` that defines resources deployed to the `marketing` stack, while the commerce team may have their own `sanity.blueprint.ts` that deploys resources to the `commerce` stack.

You can view stacks with the `sanity blueprints stacks` command, and switch stacks by running `sanity blueprints init` or `sanity blueprints config --edit` in an existing blueprints project

## Limitations

### Stack limit

Projects have a limit of 3 stacks. If you reach your limit and want to remove a stack, see the *Remove a stack* steps below.

### No nested blueprints

When creating multiple blueprints in a single project, you cannot nest blueprints in subdirectories of a directory containing a `sanity.blueprint.ts` file.

❌ For example, don't do this:

**Don't do this**

```text
.
└── some-project/
    ├── sanity.blueprint.ts
    └── another-project/
        └── sanity.blueprint.ts
```

✅ Instead, do this:

**Do this**

```text
.
└── some-project/
|   └── sanity.blueprint.ts
└── another-project/
    └── sanity.blueprint.ts
```

## Troubleshooting

### View stacks for a project

If you're unsure which stacks are deployed, run the `blueprints stacks` command.

**CLI**

```sh
npx sanity@latest blueprints stacks
```

### View current stack

To view the currently selected stack, run the `blueprints info` command.

**CLI**

```sh
npx sanity@latest blueprints info
```

### Remove a stack

To remove a deployed stack, run the following commands from a directory containing a configured blueprint for the same project as the stack you want to delete.

First, retrieve the stack identifier (it starts with `ST-`):

**CLI**

```sh
npx sanity@latest blueprints info
```

Next, run the following command with the stack identifier from the previous step.

**CLI**

```sh
blueprints destroy --stack-id <ST-someid>
```
