# Deploy Button Source

## Repository URL

| Parameter        | Type     | Value                          |
| ---------------- | -------- | ------------------------------ |
| `repository-url` | `string` | The source Git repository URL. |

Use the `repository-url` parameter to specify a Git repository URL. You can optionally include a subdirectory within the repository. Users clone this into their GitHub, GitLab, or Bitbucket account when going through the Vercel Project creation flow.

The example below shows how to set the repository URL to `hello-world`:

```bash filename="repository url"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world
```

The `repository-url` parameter is required when sending you to the Vercel Project creation flow to set up a project from a GitHub, GitLab, or Bitbucket repository.

## Project Name

| Parameter      | Type     | Value                   |
| -------------- | -------- | ----------------------- |
| `project-name` | `string` | A default project name. |

Use the `project-name` parameter to define a default project name.

This is useful when you already know what to name the project. For example, if you're sending the deploy link from an application that has already set up a project that will connect to the created Vercel project.

If a project with the specified name already exists, you'll need to define a new project name. The project is not guaranteed to have the specified name.

The example below shows how to set the project name to "my-awesome-project":

```bash filename="project name"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&project-name=my-awesome-project
```

## Repository Name

| Parameter         | Type     | Value                                  |
| ----------------- | -------- | -------------------------------------- |
| `repository-name` | `string` | A default repository name (no spaces). |

Use the `repository-name` parameter to define a default repository name.

Similar to the [Project Name](#project-name) parameter, this is useful when you already know what to name the repository.

The example below shows how to set the repository name to "my-awesome-project":

```bash filename="repository name"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&repository-name=my-awesome-project
```

## Store product integration

| Parameter | Type     | Value                                        |
| --------- | -------- | -------------------------------------------- |
| `stores`  | `string` | A default JSON object converted to a string. |

The `stores` parameter accepts a JSON array of store configurations. Each item in the array defines a store to create during deployment. You can use it to set up a Vercel Blob store or an integration-based store.

### Blob store

To create a Vercel Blob store during deployment, set `type` to `blob`:

| Property       | Type     | Required | Description                                                                                                                                                                |
| -------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`         | `string` | Yes      | Must be `blob`.                                                                                                                                                            |
| `access`       | `string` | No       | Set to `public` or `private` to fix the access level in the creation modal. When you omit this property, the modal defaults to `private` and you can choose either option. |
| `envVarPrefix` | `string` | No       | Custom prefix for the environment variables created for this store. For example, setting this to `MYBLOG` produces `MYBLOG_BLOB_READ_WRITE_TOKEN`.                         |

For example, to create a Blob store with private access:

```json
[{ "type": "blob", "access": "private" }]
```

First, encode the parameter:

```js
const jsonParam = encodeURIComponent(
  JSON.stringify([{ type: 'blob', access: 'private' }]),
);
```

Then, use it as follows:

```bash filename="stores with blob"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fexample%2Fmy-app&stores=%5B%7B%22type%22%3A%22blob%22%2C%22access%22%3A%22private%22%7D%5D
```

### Integration stores

To set up a store from a Marketplace integration, set `type` to `integration`:

| Property                      | Type      | Required | Description                                                                    |
| ----------------------------- | --------- | -------- | ------------------------------------------------------------------------------ |
| `type`                        | `string`  | Yes      | Must be `integration`.                                                         |
| `integrationSlug`             | `string`  | Yes      | The slug of the integration.                                                   |
| `productSlug`                 | `string`  | Yes      | The slug of the product.                                                       |
| `protocol`                    | `string`  | No       | The protocol type (e.g., `storage`).                                           |
| `envVarPrefix`                | `string`  | No       | Custom prefix for the environment variables.                                   |
| `allowConnectExistingProduct` | `boolean` | No       | Whether to allow connecting an existing product instead of creating a new one. |

For example:

```json
[
  {
    "type": "integration",
    "integrationSlug": "my-integration-slug",
    "productSlug": "my-product-slug",
    "protocol": "storage"
  }
]
```

First, encode the parameter:

```js
const jsonParam = encodeURIComponent(
  JSON.stringify([
    {
      type: 'integration',
      integrationSlug: 'my-integration-slug',
      productSlug: 'my-product-slug',
      protocol: 'storage',
    },
  ]),
);
```

Then, use it as follows:

```bash filename="stores with integration"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fnextjs&project-name=my-awesome-project&repository-name=my-awesome-project&stores=%5B%7B%22type%22%3A%22integration%22%2C%22integrationSlug%22%3A%22aws-marketplace-integration-demo%22%2C%22productSlug%22%3A%22vector%22%7D%5D
```

title: "Creating & Triggering Deploy Hooks"
description: "Learn how to create and trigger deploy hooks to integrate Vercel deployments with other systems."
last\_updated: "2026-03-08T05:03:13.107Z"
source: "https://vercel.com/docs/deploy-hooks"
