# Neon Postgres & Astro

> Add a serverless Postgres database to your Astro project with Neon

[Neon](https://neon.tech) is a fully managed serverless Postgres database. It separates storage and compute to offer autoscaling, branching, and bottomless storage.

## Adding Neon to your Astro project

[Section titled “Adding Neon to your Astro project”](#adding-neon-to-your-astro-project)

### Prerequisites

[Section titled “Prerequisites”](#prerequisites)

- A [Neon](https://console.neon.tech/signup) account with a created project
- Neon database connection string
- An Astro project with [on-demand rendering (SSR)](/en/guides/on-demand-rendering/) enabled

### Environment configuration

[Section titled “Environment configuration”](#environment-configuration)

To use Neon with Astro, you will need to set a Neon environment variable. Create or edit the `.env` file in your project root, and add the following code, replacing your own project details:

.env

```ini
NEON_DATABASE_URL="postgresql://<user>:<password>@<endpoint_hostname>.neon.tech:<port>/<dbname>?sslmode=require"
```

For better TypeScript support, define environment variables in a `src/env.d.ts` file:

src/env.d.ts

```typescript
interface ImportMetaEnv {
  readonly NEON_DATABASE_URL: string;
}


interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

Learn more about [environment variables](/en/guides/environment-variables/) and `.env` files in Astro.

### Installing dependencies

[Section titled “Installing dependencies”](#installing-dependencies)

Install the `@neondatabase/serverless` package to connect to Neon:

```bash
npm install @neondatabase/serverless
```

### Creating a Neon client

[Section titled “Creating a Neon client”](#creating-a-neon-client)

Create a new file `src/lib/neon.ts` with the following code to initialize your Neon client:

src/lib/neon.ts

```typescript
import { neon } from '@neondatabase/serverless';


export const sql = neon(import.meta.env.NEON_DATABASE_URL);
```

## Querying your Neon database

[Section titled “Querying your Neon database”](#querying-your-neon-database)

You can now use the Neon client to query your database from any `.astro` component. The following example fetches the current time from the Postgres database:

src/pages/index.astro

```astro
---
import { sql } from '../lib/neon';


const response =  await  sql`SELECT NOW() as current_time`;
const currentTime = response[0].current_time;
---


<h1>Current Time</h1>
<p>The time is: {currentTime}</p>
```

## Database branching with Neon

[Section titled “Database branching with Neon”](#database-branching-with-neon)

Neon’s branching feature lets you create copies of your database for development or testing. Use this in your Astro project by creating different environment variables for each branch:

.env.development

```ini
NEON_DATABASE_URL=your_development_branch_url
```

.env.production

```ini
NEON_DATABASE_URL=your_production_branch_url
```

## Resources

[Section titled “Resources”](#resources)

- [Neon documentation](https://neon.tech/docs/introduction)
- [Neon serverless driver GitHub](https://github.com/neondatabase/serverless)
- [Connect an Astro site or application to Neon Postgres](https://neon.tech/docs/guides/astro)
