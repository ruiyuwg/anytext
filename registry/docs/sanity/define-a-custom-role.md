# Define a custom role

Blueprints allow you to define [custom roles](https://www.sanity.io/docs/user-guides/roles) alongside other resources. Roles are sets of permissions that can be assigned to users and robot tokens. You can even combine roles and robot tokens with Blueprints to provide explicit access in [Functions](https://www.sanity.io/docs/functions/robot-tokens-with-functions).

*This is a paid feature, available on the Enterprise plan.*

In this guide, you’ll define a custom role resource with Blueprints and deploy the blueprint to Sanity.

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs and behavior may change at any time. Follow the [changelog](https://www.sanity.io/docs/changelog) for updates.

Prerequisites:

- The latest version of `sanity` CLI is recommended to interact with Blueprints. You can always run the latest CLI commands with `npx sanity@latest`.
- An existing project and [a role with permission](https://www.sanity.io/docs/content-lake/roles-concepts) to edit roles (requires the `sanity-project-roles` permission).
- Custom role support was first introduced in `@sanity/blueprints` v0.11.0. We recommend using the latest version of the library.

## Initialize a new blueprint

To initialize a blueprint in the current directory, run the command below. Replace the project ID with your own. Skip to the next section if you already have a blueprint set up.

**CLI**

```sh
npx sanity@latest blueprints init . --type ts --project-id <project-id> --stack-name production
```

## Configure the custom resource

Use the `defineRole` helper to define a custom role resource.

**sanity.blueprint.ts**

```
import { defineBlueprint, defineRole } from "@sanity/blueprints"

export default defineBlueprint({
  resources: [
    defineRole({
      name: 'custom-robot-role',
      title: 'Custom Robot Role',
      appliesToRobots: true,
      permissions: [{
        name: 'sanity-project-cors',
        action: 'create',
      }],
    })
  ],
})
```

A full list of available configuration options is available in the [reference documentation](https://reference.sanity.io/_sanity/blueprints/defineRole/). You can learn more about the parts that make up a role in the [roles and permissions documentation](https://www.sanity.io/docs/content-lake/roles-concepts).

## Deploy the blueprint

N, deploy the blueprint.

```sh
npx sanity blueprints deploy
```

Once the deployment finishes, the custom role is active.

If you need to make changes, update the blueprint file (`sanity.blueprint.ts`) and run the deploy command again.

## Remove the custom role resource

To remove a resources created with a blueprint, you need to either:

1. Remove the definition from the blueprint, and run the `deploy` command again.
2. Destroy the blueprint with the `destroy` command.

Destroy will “undeploy” the blueprint and remove the [stack](https://www.sanity.io/docs/blueprints/blueprints-introduction), leaving only your local files.

### Redeploy a destroyed blueprint

When you run `blueprints destroy`, it's as if you never used `blueprints init` during setup. The only difference is you still have all the files in your directory. To use this blueprint again and redeploy it, you'll need to let Sanity know about it. You can do this by running init again:

**CLI**

```sh
npx sanity blueprints init
```

This launches an editing interface that lets you reconfigure the blueprint, if needed, and it reconnects the blueprint to Sanity. Now you can add more functions or redeploy. Keep in mind that any environment variables added before destroying the blueprint will not carry over.

## Learn more about roles

#### Explore roles

[Roles and permissions](https://www.sanity.io/docs/content-lake/roles-concepts)

[Roles user guide](https://www.sanity.io/docs/user-guides/roles)
