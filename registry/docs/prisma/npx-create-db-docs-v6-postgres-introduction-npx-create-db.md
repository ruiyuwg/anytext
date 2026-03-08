# npx create-db (/docs/v6/postgres/introduction/npx-create-db)

[`create-db`](https://create-db.prisma.io/) is an open-source CLI tool that provisions temporary [Prisma Postgres](/v6/postgres) databases with a single command.

- **Fast setup:** No sign-up required to create a temporary production-ready Prisma Postgres database.
- **Lifetime:** Each database is available for *24 hours* by default.
- **Keep for free:** You can *claim* a database (via the URL provided in the CLI output) to make it permanent.

Prerequisites \[#prerequisites]

To use `npx create-db`, you need:

- **Node.js** version `16` or higher (we recommend the latest LTS version).
- **npm** (comes with Node.js) to run `npx` commands.

**A Prisma Data Platform account is not required** to create a temporary database. However, if you want to keep a database permanently, you can claim it ([details below](#claiming-your-database)).

Option 1: Using the web interface (recommended) \[#option-1-using-the-web-interface-recommended]

The [create-db web application](https://create-db.prisma.io) provides a browser-based interface for creating and managing your databases.

Key features: \[#key-features]

- No installation required - works directly in your web browser
- Visual interface for database management
- Easy connection string display and copying
- Built-in schema viewer and editor
- Direct integration with Prisma Studio
- Simple database claiming workflow

Getting started: \[#getting-started]

1. Visit [create-db.prisma.io](https://create-db.prisma.io) in your web browser
2. Click "Create with the web interface"
3. Modify your schema and interact with the Studio
4. Copy the provided connection strings for your project
5. Claim your database to make it permanent

Option 2: Using the CLI \[#option-2-using-the-cli]

You can create a database using one of the following options:

Option 1: Quick start with default settings \[#option-1-quick-start-with-default-settings]

Run the following command in your terminal:

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
    npx create-db@latest
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx create-db@latest
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx create-db@latest
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun create-db@latest
    ```
  </CodeBlockTab>
</CodeBlockTabs>

<br />

- The `@latest` tag automatically downloads and runs the latest version of the tool, hence, no global installation required.
- After a few seconds, you'll receive **connection strings** for both Prisma ORM projects and standard PostgreSQL.
- The default region is `us-east-1`. You can specify the region where you want to provision the database in using the `--region` flag. See [the section below](#available-cli-options) to view all the CLI options.

Option 2: Choose a region interactively \[#option-2-choose-a-region-interactively]

If you want to select a region manually:

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
    npx create-db@latest --interactive
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx create-db@latest --interactive
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx create-db@latest --interactive
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun create-db@latest --interactive
    ```
  </CodeBlockTab>
</CodeBlockTabs>

<br />

- This opens a region selection menu (for example, `us-east-1`, `eu-west-3`).
- Alternatively, you can use the shorthand `-i`:

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
    npx create-db@latest -i
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx create-db@latest -i
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx create-db@latest -i
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun create-db@latest -i
    ```
  </CodeBlockTab>
</CodeBlockTabs>

To view all options and regions:

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
    npx create-db@latest --help
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx create-db@latest --help
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx create-db@latest --help
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun create-db@latest --help
    ```
  </CodeBlockTab>
</CodeBlockTabs>

CLI output walkthrough \[#cli-output-walkthrough]

Here is an example output:

```
┌  🚀 Creating a Prisma Postgres database
│
│  Provisioning a temporary database in us-east-1...
│  It will be automatically deleted in 24 hours, but you can claim it.
◇  Database created successfully!
│
●  Database Connection
│    Connection String:
│    postgresql://:@db.prisma.io:5432/postgres
│
◆  Claim your database →
│    Keep your database for free:
│    https://create-db.prisma.io?projectID=proj_...
└
```

Once you have the output, take the connection string and add it to your `.env` file as `DATABASE_URL`:

```text
DATABASE_URL="postgresql://:@db.prisma.io:5432/postgres"
```

You can now follow the [Prisma Postgres quickstart guide](/v6/prisma-orm/quickstart/prisma-postgres) to connect your Prisma project to this database.

If you're using other tools or libraries, use the **standard PostgreSQL connection string** (`postgresql://...`) with any PostgreSQL-compatible client, such as `psql`, `pgAdmin`, `node-postgres`, or an ORM of your choice. Detailed instructions are available in the guide for [connecting via direct PostgreSQL connection string](/v6/postgres/database/direct-connections).

Claiming your database \[#claiming-your-database]

By default, databases created with `npx create-db` are **temporary** and will be automatically deleted after **24 hours**.

You can prevent this by **claiming the database** using the claim URL shown in the CLI output:

```
◆  Claim your database →
│
│    Want to keep your database? Claim for free:
│
│    https://create-db.prisma.io?projectID=proj_...
│
│    Your database will be deleted on 7/24/2025, 2:25:41 AM if not claimed.
```

To claim your database and make it permanent:

1. Copy the **claim URL** from the CLI output.
2. Open it in your browser and click **Claim database**.
3. Sign in to your [Prisma Data Platform account](https://console.prisma.io/) (or create one if you don’t have it yet).
4. Choose a **Workspace** that has capacity for creating new projects.
5. Click **Authorize Prisma Create DB** to confirm.
6. You’ll be redirected to a success page. Then, click **Go use your database** to view and manage the claimed database in your workspace.

When you claim a database:

- It's moved into your Prisma Data Platform account workspace.
- It's no longer auto-deleted after 24 hours.
- You can continue using it as a permanent database instance.

Available CLI options \[#available-cli-options]

Here are the CLI flags for the `npx create-db` command:

| Flag            | Shorthand | Description                                                                                                                               |
| --------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `--region`      | `-r`      | Specify a region. <br /> **Available regions:** `ap-southeast-1`, `ap-northeast-1`, `eu-central-1`, `eu-west-3`, `us-east-1`, `us-west-1` |
| `--interactive` | `-i`      | Run in interactive mode (select region from a list).                                                                                      |
| `--json`        | `-j`      | Output machine-readable JSON and exit.                                                                                                    |
| `--help`        | `-h`      | Show this help message.                                                                                                                   |

To view all CLI options use the `--help` or `-h` flag:

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
    npx create-db@latest --help
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx create-db@latest --help
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx create-db@latest --help
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun create-db@latest --help
    ```
  </CodeBlockTab>
</CodeBlockTabs>

```
npx create-db@latest [options]

Options:
  --region , -r   Specify a region
                                  Available regions:
                                  ap-southeast-1, ap-northeast-1,
                                  eu-central-1, eu-west-3,
                                  us-east-1, us-west-1

  --interactive, -i               Run in interactive mode

  --help, -h                      Show this help message
```
