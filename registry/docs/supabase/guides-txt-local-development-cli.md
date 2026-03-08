# Local Development & CLI

Learn how to develop locally and use the Supabase CLI

Develop locally while running the Supabase stack on your machine.

As a prerequisite, you must install a container runtime compatible with Docker APIs.

- [Docker Desktop](https://docs.docker.com/desktop/) (macOS, Windows, Linux)
- [Rancher Desktop](https://rancherdesktop.io/) (macOS, Windows, Linux)
- [Podman](https://podman.io/) (macOS, Windows, Linux)
- [OrbStack](https://orbstack.dev/) (macOS)

## Quickstart

1. Install the Supabase CLI:

   ````
   ```sh
   npm install supabase --save-dev
   ```



   ```sh
   NODE_OPTIONS=--no-experimental-fetch yarn add supabase --dev
   ```



   ```sh
   pnpm add supabase --save-dev --allow-build=supabase
   ```


     The `--allow-build=supabase` flag is required on pnpm version 10 or higher. If you're using an older version of pnpm, omit this flag.




   ```sh
   brew install supabase/tap/supabase
   ```
   ````

2. In your repo, initialize the Supabase project:

   ````
   ```sh
   npx supabase init
   ```



   ```sh
   yarn supabase init
   ```



   ```sh
   pnpx supabase init
   ```



   ```sh
   supabase init
   ```
   ````

3. Start the Supabase stack:

   ````
   ```sh
   npx supabase start
   ```



   ```sh
   yarn supabase start
   ```



   ```sh
   pnpx supabase start
   ```



   ```sh
   supabase start
   ```
   ````

4. View your local Supabase instance at <http://localhost:54323>.

If your local development machine is connected to an untrusted public network, you should create a separate docker network and bind to 127.0.0.1 before starting the local development stack. This restricts network access to only your localhost machine.

```sh
docker network create -o 'com.docker.network.bridge.host_binding_ipv4=127.0.0.1' local-network
npx supabase start --network-id local-network
```

You should never expose your local development stack publicly.

## Local development

Local development with Supabase allows you to work on your projects in a self-contained environment on your local machine. Working locally has several advantages:

1. Faster development: You can make changes and see results instantly without waiting for remote deployments.
2. Offline work: You can continue development even without an internet connection.
3. Cost-effective: Local development is free and doesn't consume your project's quota.
4. Enhanced privacy: Sensitive data remains on your local machine during development.
5. Easy testing: You can experiment with different configurations and features without affecting your production environment.

To get started with local development, you'll need to install the [Supabase CLI](#cli) and Docker. The Supabase CLI allows you to start and manage your local Supabase stack, while Docker is used to run the necessary services.

Once set up, you can initialize a new Supabase project, start the local stack, and begin developing your application using local Supabase services. This includes access to a local Postgres database, Auth, Storage, and other Supabase features.

## CLI

The Supabase CLI is a powerful tool that enables developers to manage their Supabase projects directly from the terminal. It provides a suite of commands for various tasks, including:

- Setting up and managing local development environments
- Generating TypeScript types for your database schema
- Handling database migrations
- Managing environment variables and secrets
- Deploying your project to the Supabase platform

With the CLI, you can streamline your development workflow, automate repetitive tasks, and maintain consistency across different environments. It's an essential tool for both local development and CI/CD pipelines.

See the [CLI Getting Started guide](/docs/guides/local-development/cli/getting-started) for more information.

# Supabase Platform

Supabase is a hosted platform which makes it very simple to get started without needing to manage any infrastructure.

Visit [supabase.com/dashboard](/dashboard) and sign in to start creating projects.

## Projects

Each project on Supabase comes with:

- A dedicated [Postgres database](/docs/guides/database)
- [Auto-generated APIs](/docs/guides/database/api)
- [Auth and user management](/docs/guides/auth)
- [Edge Functions](/docs/guides/functions)
- [Realtime API](/docs/guides/realtime)
- [Storage](/docs/guides/storage)

## Organizations

Organizations are a way to group your projects. Each organization can be configured with different team members and billing settings.
Refer to [access control](/docs/guides/platform/access-control) for more information on how to manage team members within an organization.

## Platform status

If Supabase experiences outages, we keep you as informed as possible, as early as possible. We provide the following feedback channels:

- Status page: [status.supabase.com](https://status.supabase.com/)
- RSS Feed: [status.supabase.com/history.rss](https://status.supabase.com/history.rss)
- Atom Feed: [status.supabase.com/history.atom](https://status.supabase.com/history.atom)
- Slack Alerts: You can receive updates via the RSS feed, using Slack's [built-in RSS functionality](https://slack.com/help/articles/218688467-Add-RSS-feeds-to-Slack) `/feed subscribe https://status.supabase.com/history.atom`

Make sure to review our [SLA](/docs/company/sla) for details on our commitment to Platform Stability.

# Supabase Queues

Durable Message Queues with Guaranteed Delivery in Postgres

Supabase Queues is a Postgres-native durable Message Queue system with guaranteed delivery built on the [pgmq database extension](https://github.com/tembo-io/pgmq). It offers developers a seamless way to persist and process Messages in the background while improving the resiliency and scalability of their applications and services.

Queues couples the reliability of Postgres with the simplicity Supabase's platform and developer experience, enabling developers to manage Background Tasks with zero configuration.

## Features

- **Postgres Native**

  Built on top of the `pgmq` database extension, create and manage Queues with any Postgres tooling.
- **Guaranteed Message Delivery**

  Messages added to Queues are guaranteed to be delivered to your consumers.
- **Exactly Once Message Delivery**
  A Message is delivered exactly once to a consumer within a customizable visibility window.
- **Message Durability and Archival**

  Messages are stored in Postgres and you can choose to archive them for analytical or auditing purposes.
- **Granular Authorization**

  Control client-side consumer access to Queues with API permissions and Row Level Security (RLS) policies.
- **Queue Management and Monitoring**

  Create, manage, and monitor Queues and Messages in the Supabase Dashboard.

## Resources

- [Quickstart](/docs/guides/queues/quickstart)
- [API Reference](/docs/guides/queues/api)
- [`pgmq` GitHub Repository](https://github.com/tembo-io/pgmq)
