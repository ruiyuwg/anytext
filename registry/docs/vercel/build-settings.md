# Build Settings

## Build Command

| Parameter       | Type     | Description                                                                                                                                                                                                                             |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `build-command` | `string` | Setting this value is equivalent to enabling the **Override** toggle for that field in the dashboard.  |

This allows you to define a custom Build command that is normally automatically configured based on your Project's framework.

The example below shows a source URL using the `build-command` parameter to set the Build command to `npm run build`:

```bash filename="source url"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&build-command=npm%20run%20build
```

## Install Command

| Parameter         | Type     | Description                                                                                                                                                                                                                               |
| ----------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `install-command` | `string` | Setting this value is equivalent to enabling the **Override** toggle for that field in the dashboard.  |

This allows you to define a custom Install command that is normally automatically configured based on the following:

| Lock File           | Install Command | Package Manager Version                                                                                                          |
| ------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm-lock.yaml`    | `pnpm install`  | `pnpm 6/7/8/9/10` See [supported package managers](/docs/package-managers#supported-package-managers) for pnpm detection details |
| `package-lock.json` | `npm install`   | `npm`                                                                                                                            |
| `bun.lockb`         | `bun install`   | `bun 1`                                                                                                                          |
| `bun.lock`          | `bun install`   | `bun 1`                                                                                                                          |
| None                | `npm install`   | N/A                                                                                                                              |

The example below shows a source URL using the `install-command` parameter to set the Install command to `npm install`:

```bash filename="source url"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&install-command=npm%20install
```

## Development Command

| Parameter     | Type     | Description                                                                                                                                                                                                                                   |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dev-command` | `string` | Setting this value is equivalent to enabling the **Override** toggle for that field in the dashboard.  |

This allows you to define a custom development command if you are using `vercel dev` to test your project locally. Each framework has its own development command and this will be set automatically based on your selected framework.

The example below shows a source URL using the `dev-command` parameter to set the Development command to `next dev --port $PORT`:

```bash filename="source url"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&dev-command=next%20dev%20--port%20%24PORT
```

## Ignored Build Command

| Parameter        | Type     | Description                                                                                                                                                                                               |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ignore-command` | `string` | Setting this value is equivalent to enabling the **Override** toggle for that field in the dashboard.  |

This allows you to define an Ignored Build Step to determine when your project should build and deploy.

The example below shows a source URL using the `ignore-command` parameter to set the Ignored Build Step command to `npx turbo-ignore`:

```bash filename="source url"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&ignore-command=npx%20turbo-ignore
```

## Root Directory

| Parameter        | Type     | Description                                                                                           |
| ---------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `root-directory` | `string` | Setting this value is equivalent to enabling the **Override** toggle for that field in the dashboard. |

This allows you to define the path of the directory relative to the root of the Project folder where your source code is located. By default it is empty and equivalent to the root of the repository.

The example below shows a source URL using the `root-directory` parameter to set the Root Directory to `apps/frontend`:

```bash filename="source url"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel-support%2Fyarn-ws-monorepo&root-directory=apps%2Ffrontend
```

## Output Directory

| Parameter          | Type     | Description                                                                                                                                                                                             |
| ------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `output-directory` | `string` | Setting this value is equivalent to enabling the **Override** toggle for that field in the dashboard.  |

This allows you to define the output directory's path relative to the Project folder's root. Usually, this is automatically configured based on your Project's framework.

The example below shows a source URL using the `output-directory` parameter for a monorepo where the application output is generated to `dist/apps/app/.next`:

```bash filename="source url"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&output-directory=dist%2Fapps%2Fapp%2F.next
```

title: "Using Callbacks with the Deploy Button"
description: "Learn how to use the Deploy Button"
last\_updated: "2026-03-08T05:03:13.055Z"
source: "https://vercel.com/docs/deploy-button/callback"
