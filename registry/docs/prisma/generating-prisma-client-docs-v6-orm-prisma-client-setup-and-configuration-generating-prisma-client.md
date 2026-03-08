# Generating Prisma Client (/docs/v6/orm/prisma-client/setup-and-configuration/generating-prisma-client)

Prisma Client is a generated database client that's tailored to your database schema. By default, Prisma Client is generated into the `node_modules/.prisma/client` folder, but we highly recommend [you specify an output location](#using-a-custom-output-path).

<CalloutContainer type="warning">
  <CalloutDescription>
    In Prisma ORM 7, Prisma Client will no longer be generated in `node_modules` by default and will require an output path to be defined. [Learn more below on how to define an output path](#using-a-custom-output-path).
  </CalloutDescription>
</CalloutContainer>

<CalloutContainer type="info">
  <CalloutTitle>
    Use Prisma ORM without Rust binaries
  </CalloutTitle>

  <CalloutDescription>
    If Prisma ORM's Rust engine binaries cause large bundle sizes, slow builds, or deployment issues (for example, in serverless or edge environments), you can use it without them using this configuration of your `generator` block:

````
```prisma
generator client {
  provider   = "prisma-client"
  output     = "./generated"
  engineType = "client"
}
```

Prisma ORM without Rust binaries has been [Generally Available](/v6/orm/more/releases#generally-available-ga) since [v6.16.0](https://pris.ly/release/6.16.0).

Note that you need to use a [driver adapter](/v6/orm/overview/databases/database-drivers#driver-adapters) in this case.

When using this architecture:

* No Rust query engine binary is downloaded or shipped.
* The database connection pool is maintained by the native JS database driver you install (e.g., `@prisma/adapter-pg` for PostgreSQL).

This setup can simplify deployments in serverless or edge runtimes. Learn more in the [docs here](/v6/orm/prisma-client/setup-and-configuration/no-rust-engine).
````

  </CalloutDescription>
</CalloutContainer>

To generate and instantiate Prisma Client:

1. Ensure that you have [Prisma CLI installed on your machine](/v6/orm/tools/prisma-cli#installation).

   <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
     <CodeBlockTabsList>
       <CodeBlockTabsTrigger value="npm">
         npm
       </CodeBlockTabsTrigger>

   ```
   <CodeBlockTabsTrigger value="pnpm">
     pnpm
   </CodeBlockTabsTrigger>

   <CodeBlockTabsTrigger value="yarn">
     yarn
   </CodeBlockTabsTrigger>

   <CodeBlockTabsTrigger value="bun">
     bun
   </CodeBlockTabsTrigger>
   ```

     </CodeBlockTabsList>

     <CodeBlockTab value="npm">
       ```bash
       npm install prisma --save-dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="pnpm">
       ```bash
       pnpm add prisma --save-dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="yarn">
       ```bash
       yarn add prisma --dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="bun">
       ```bash
       bun add prisma --dev
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

2. Add the following `generator` definition to your Prisma schema:

   ```prisma
   generator client {
     provider = "prisma-client"
     output   = "./generated"
   }
   ```

   <CalloutContainer type="info">
     <CalloutDescription>
       Feel free to customize the output location to match your application. Common directories are `prisma`, `src`, or even the root of your project.
     </CalloutDescription>
   </CalloutContainer>

3. Install the `@prisma/client` npm package:

   <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
     <CodeBlockTabsList>
       <CodeBlockTabsTrigger value="npm">
         npm
       </CodeBlockTabsTrigger>

   ```
   <CodeBlockTabsTrigger value="pnpm">
     pnpm
   </CodeBlockTabsTrigger>

   <CodeBlockTabsTrigger value="yarn">
     yarn
   </CodeBlockTabsTrigger>

   <CodeBlockTabsTrigger value="bun">
     bun
   </CodeBlockTabsTrigger>
   ```

     </CodeBlockTabsList>

     <CodeBlockTab value="npm">
       ```bash
       npm install @prisma/client
       ```
     </CodeBlockTab>

     <CodeBlockTab value="pnpm">
       ```bash
       pnpm add @prisma/client
       ```
     </CodeBlockTab>

     <CodeBlockTab value="yarn">
       ```bash
       yarn add @prisma/client
       ```
     </CodeBlockTab>

     <CodeBlockTab value="bun">
       ```bash
       bun add @prisma/client
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

4. Generate Prisma Client with the following command:

   <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
     <CodeBlockTabsList>
       <CodeBlockTabsTrigger value="npm">
         npm
       </CodeBlockTabsTrigger>

   ```
   <CodeBlockTabsTrigger value="pnpm">
     pnpm
   </CodeBlockTabsTrigger>

   <CodeBlockTabsTrigger value="yarn">
     yarn
   </CodeBlockTabsTrigger>

   <CodeBlockTabsTrigger value="bun">
     bun
   </CodeBlockTabsTrigger>
   ```

     </CodeBlockTabsList>

     <CodeBlockTab value="npm">
       ```bash
       npx prisma generate
       ```
     </CodeBlockTab>

     <CodeBlockTab value="pnpm">
       ```bash
       pnpm dlx prisma generate
       ```
     </CodeBlockTab>

     <CodeBlockTab value="yarn">
       ```bash
       yarn dlx prisma generate
       ```
     </CodeBlockTab>

     <CodeBlockTab value="bun">
       ```bash
       bunx --bun prisma generate
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

5. You can now [instantiate Prisma Client](/v6/orm/prisma-client/setup-and-configuration/instantiate-prisma-client) in your code:

   ```ts
   import { PrismaClient } from "./prisma/generated/client";
   const prisma = new PrismaClient();
   // use `prisma` in your application to read and write data in your DB
   ```

> **Important**: You need to re-run the `prisma generate` command after every change that's made to your Prisma schema to update the generated Prisma Client code.

Here is a graphical illustration of the typical workflow for generation of Prisma Client:

<img alt="Graphical illustration of the typical workflow for generation of Prisma Client" src="/img/v6/orm/prisma-client/setup-and-configuration/prisma-client-generation-workflow.png" width="1600" height="422" />

The location of Prisma Client \[#the-location-of-prisma-client]

<CalloutContainer type="warning">
  <CalloutDescription>
    We strongly recommend you define a custom `output` path. In Prisma ORM version `6.6.0`, not defining an `output` path will result in a warning. In Prisma ORM 7, the field will be required.
  </CalloutDescription>
</CalloutContainer>

Using a custom output path \[#using-a-custom-output-path]

You can also specify a custom `output` path on the `generator` configuration, for example (assuming your `schema.prisma` file is located at the default `prisma` subfolder):

```prisma
generator client {
  provider = "prisma-client"
  output   = "../src/generated/"
}
```

After running `prisma generate` for that schema file, the Prisma Client package will be located in:

```
./src/generated/client
```

To import the `PrismaClient` from a custom location (for example, from a file named `./src/script.ts`):

```ts
import { PrismaClient } from "./generated/client";
```

<CalloutContainer type="info">
  <CalloutDescription>
    For improved compatibility with ECMAScript modules (ESM) and to ensure consistent behaviour of Prisma ORM across different Node.js runtimes, you can also use the newer [`prisma-client`](/v6/orm/prisma-schema/overview/generators#prisma-client) generator. This generator is specifically designed to handle common challenges with module resolution and runtime variations, providing a smoother integration experience and less friction with bundlers.
  </CalloutDescription>
</CalloutContainer>

Loading environment variables \[#loading-environment-variables]

To load environment variables in your Prisma application, you can use the `prisma.config.ts` file along with the `env` helper from `prisma/config`. This approach provides better type safety and configuration management.

1. First, install the required dependency:

   <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
     <CodeBlockTabsList>
       <CodeBlockTabsTrigger value="npm">
         npm
       </CodeBlockTabsTrigger>

   ```
   <CodeBlockTabsTrigger value="pnpm">
     pnpm
   </CodeBlockTabsTrigger>

   <CodeBlockTabsTrigger value="yarn">
     yarn
   </CodeBlockTabsTrigger>

   <CodeBlockTabsTrigger value="bun">
     bun
   </CodeBlockTabsTrigger>
   ```

     </CodeBlockTabsList>

     <CodeBlockTab value="npm">
       ```bash
       npm install dotenv --save-dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="pnpm">
       ```bash
       pnpm add dotenv --save-dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="yarn">
       ```bash
       yarn add dotenv --dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="bun">
       ```bash
       bun add dotenv --dev
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

2. Create a `.env` file in your project root (if it doesn't exist) and add your database connection string:

   ```text
   DATABASE_URL="your_database_connection_string_here"
   ```

3. Update your `prisma.config.ts` file in your project root:

   ```ts
   import "dotenv/config";
   import { defineConfig, env } from "prisma/config";

   export default defineConfig({
     schema: "prisma/schema.prisma",
     migrations: {
       path: "prisma/migrations",
     },
     datasource: {
       url: env("DATABASE_URL"),
     },
   });
   ```

The @prisma/client npm package \[#the-prismaclient-npm-package]

The `@prisma/client` npm package consists of two key parts:

- The `@prisma/client` module itself, which only changes when you re-install the package
- The `.prisma/client` folder, which is the [default location](#using-a-custom-output-path) for the unique Prisma Client generated from your schema

`@prisma/client/index.d.ts` exports `.prisma/client`:

```ts
export * from ".prisma/client";
```

This means that you still import `@prisma/client` in your own `.ts` files:

```ts
import { PrismaClient } from "@prisma/client";
```

Prisma Client is generated from your Prisma schema and is unique to your project. Each time you change the schema (for example, by performing a [schema migration](/v6/orm/prisma-migrate/getting-started)) and run `prisma generate`, Prisma Client's code changes:

<img alt="The .prisma and @prisma folders" src="/img/v6/orm/prisma-client/setup-and-configuration/prisma-client-node-module.png" width="1422" height="1006" />

The `.prisma` folder is unaffected by [pruning](https://docs.npmjs.com/cli/prune.html) in Node.js package managers.
