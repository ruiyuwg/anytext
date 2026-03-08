# Assign custom robot tokens

Robot tokens enable your functions to authenticate API calls to Sanity without managing credentials manually. You can choose to create a token yourself as shown in this guide, or one will be created when you deploy your blueprint.

Prerequisites:

- Functions run on Node.js v24.x.
- The latest version of the Sanity CLI is recommended. Run commands with `npx sanity@latest`.
- A Sanity project ID where you have permission to create robots and deploy functions.

## Robot tokens

Robots are service accounts that provide authentication tokens for automated access. When you define a token in a blueprint:

1. The token is created during deployment with the specified roles.
2. A token is generated and managed by Sanity.
3. Functions reference the token like so: `$.resources.<robot-name>.token`.
4. The token is injected into your function to be used at function runtime.

These are similar to [robot tokens defined in your project or organization settings](https://www.sanity.io/docs/content-lake/http-auth), but they are [managed by the blueprint](https://www.sanity.io/docs/blueprints/blueprints-robot-tokens) instead.

## Define a robot token

Use the `defineRobotToken` helper to define a token in your blueprint configuration.

**sanity.blueprint.ts**

```
import {defineBlueprint, defineRobotToken} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineRobotToken({
      name: 'my-robot',
      label: 'My Robot',
      memberships: [
        {
          resourceType: 'project',
          resourceId: 'abc123',
          roleNames: ['editor'],
        },
      ],
    })
  ]
})
```

You can find a list of available roles for your project with the [Access API](https://www.sanity.io/docs/http-reference/access-api#getroles), or by viewing the roles in manage.

A complete list of configuration options is available in [the reference documentation](https://reference.sanity.io/_sanity/blueprints/defineRobotToken/).

### Using the token in Functions

Reference the robot token in your Function definition:

**sanity.blueprint.ts**

```
import {defineBlueprint, defineRobotToken, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineRobotToken({
      name: 'my-robot',
      label: 'My Robot',
      memberships: [
        {
          resourceType: 'project',
          resourceId: 'abc123',
          roleNames: ['editor'],
        },
      ],
    }),
    defineDocumentFunction({
      name: 'my-function',
      robotToken: '$.resources.my-robot.token',
      // ... rest of config
    }),
  ]
})
```

When configured like this, your function receives the token as part of the `context.clientOptions` and can be used to [configure a Sanity client](https://www.sanity.io/docs/functions/functions-js-client).

## Define custom roles

*This is a paid feature, available on the Enterprise plan.*

You can [define custom roles in the blueprint](https://www.sanity.io/docs/blueprints/blueprints-role), then use them to define a robot token. This example defines a role, `function-user`, then defines a robot with as a member of that role, and finally assigns that robot token to the function.

**sanity.blueprint.ts**

```
import {defineBlueprint, defineRobotToken, defineRole, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineRole({
      name: 'function-user',
      title: 'Function User',
      permissions: [
        {
          name: 'read-documents',
          action: 'read',
          filter: '_type == "post"',
        },
        {
          name: 'write-documents',
          action: 'update',
          filter: '_type == "post"',
        },
      ],
    }),
    
    defineRobotToken({
      name: 'my-robot',
      memberships: [
        {
          resourceType: 'project',
          resourceId: 'abc123',
          roleNames: ['function-user'],
        },
      ],
    }),
    defineDocumentFunction({
      name: 'my-function',
      robotToken: '$.resources.my-robot.token',
      // ... rest of config
    }),
  ]
})
```

## Best practices

### Apply least privilege

Create custom roles with only the permissions your function needs, as shown in the role example above.

### Keep credentials out of source control

The actual token value is managed by Blueprints and never stored in your repository.

### Match Node.js versions

Use Node.js v24.x locally to match the Functions runtime and avoid unexpected behavior.

## Troubleshooting

### Validation error: "robotToken must be a string"

Ensure the value is exactly `$.resources.<robot-name>.token` (a string, not an object or function call).

### Permission denied at runtime

The robot's roles don't permit the operation. Review `memberships.roleNames` and ensure the assigned roles grant the necessary permissions.
