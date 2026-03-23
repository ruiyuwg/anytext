# Raycast (/docs/postgres/integrations/raycast)

Overview \[#overview]

[Raycast](https://www.raycast.com/) is a fast and extendable launcher for macOS that lets you control your tools with a few keystrokes. The [Prisma Postgres Raycast extension](https://www.raycast.com/amanvarshney01/prisma-postgres) brings database creation and management directly into your workflow.

With the Prisma Postgres extension, you can create production-ready Postgres databases in seconds without leaving Raycast, making it perfect for rapid prototyping and development.

Installation \[#installation]

Install the extension directly from the Raycast Store:

1. Open Raycast (⌘ + Space)
2. Search for "Store" or type `store`
3. Search for "Prisma Postgres"
4. Click **Install Extension**

Alternatively, visit the [extension page](https://www.raycast.com/amanvarshney01/prisma-postgres) and click **Install Extension**.

Features \[#features]

The extension provides two main commands:

Create Database \[#create-database]

Instantly create a new Prisma Postgres database with zero configuration:

1. Open Raycast and search for "Create Database"
2. Select your preferred region (defaults to US East)
3. Press Enter to create

You'll receive:

- A connection string for immediate use
- A direct URL for connecting to your database
- A claim URL to make your database permanent

  Databases created through Raycast expire after 24 hours. Use the claim URL provided after creation to keep your database permanently.

List Databases \[#list-databases]

View and manage all your previously created databases:

1. Open Raycast and search for "List Databases"
2. Browse your databases with their:
   - Connection strings
   - Expiry status
   - Claim URLs

This makes it easy to retrieve connection details or check which databases need to be claimed.

Configuration \[#configuration]

Default Region \[#default-region]

You can set your preferred default region for database creation:

1. Open Raycast Settings (⌘ + ,)
2. Navigate to **Extensions** → **Prisma Postgres**
3. Select your preferred region from the dropdown

See the [list of available regions](/postgres/faq#what-regions-is-prisma-postgres-available-in) for all supported locations.

Learn More \[#learn-more]

- [Raycast Extension Page](https://www.raycast.com/amanvarshney01/prisma-postgres)
- [Prisma Postgres Documentation](/postgres)
- [Getting Started with Prisma Postgres](/postgres)
