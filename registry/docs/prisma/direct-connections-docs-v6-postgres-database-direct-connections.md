# Direct connections (/docs/v6/postgres/database/direct-connections)

Overview \[#overview]

Prisma Postgres is the perfect choice for your applications, whether you connect to it via [Prisma ORM](/v6/orm) or any other ORM, database library / tool of your choice. If you use it with Prisma ORM, Prisma Postgres comes with built-in connection pooling, and an integrated caching layer (powered by [Prisma Accelerate](/v6/accelerate)).

If you connect to it via another tool, you can do so with a [direct connection string](#connection-string) following the conventional PostgreSQL format.

How to connect to Prisma Postgres via direct TCP \[#how-to-connect-to-prisma-postgres-via-direct-tcp]

In order to get a direct connection string, you need to:

1. Open a project in your [Prisma Console](https://console.prisma.io) account (or create a new one)
2. Navigate to your active Prisma Postgres instance.
3. Click the **Connect to your database** button in your dashboard.
4. Click the **Generate new connection string** button.
5. If enabling connection pooling, click the toggle button
6. Copy the connection string that is generated below.

<img alt="Animated walkthrough of generating a connection string in Prisma Console: navigating to the database, clicking Connect, generating a new connection string, toggling connection pooling, and copying the result." src="/img/postgres/connection-string.gif" width="1136" height="720" />

Connection string \[#connection-string]

Format \[#format]

When you connect to Prisma Postgres via direct TCP, your [connection string](/v6/orm/reference/connection-urls) looks as follows:

```bash
DATABASE_URL="postgres://USER:PASSWORD@db.prisma.io:5432/?sslmode=require"
```

The `USER` and `PASSWORD` values are provided when you generate credentials for your Prisma Postgres instance in the [Prisma Console](https://console.prisma.io). Here is an example with sample values:

```bash
DATABASE_URL="postgres://2f9881cc7eef46f094ac913df34c1fb441502fe66cbe28cc48998d4e6b20336b:sk_QZ3u8fMPFfBzOID4ol-mV@db.prisma.io:5432/?sslmode=require"
```

SSL mode \[#ssl-mode]

SSL mode is required when connecting to Prisma Postgres via direct TCP, so you need to append `sslmode=require` to your TCP connection string.

Billing \[#billing]

When using direct TCP to connect to a Prisma Postgres instance, every request is counted as a [billable operation](/v6/postgres/introduction/overview#usage-based-pricing). Learn more on our [pricing page](https://www.prisma.io/pricing).

Temporary limitations \[#temporary-limitations]

Closing idle connections \[#closing-idle-connections]

Prisma Postgres closes idle connections after an extended period of time. If that happens in your application, you can re-open a new connection. (Most database clients re-connect automatically.)

Connection limit \[#connection-limit]

|                      | Free   | Starter | Pro    | Business |
| -------------------- | ------ | ------- | ------ | -------- |
| **Connection limit** | Max 10 | Max 10  | Max 50 | Max 100  |

Query and transaction timeouts \[#query-and-transaction-timeouts]

|                                      | Free             | Starter          | Pro              | Business         |
| ------------------------------------ | ---------------- | ---------------- | ---------------- | ---------------- |
| **Query timeout**                    | Up to 10 seconds | Up to 10 seconds | Up to 10 seconds | Up to 10 seconds |
| **Interactive transactions timeout** | Up to 15 seconds | Up to 15 seconds | Up to 15 seconds | Up to 15 seconds |

Limited user permissions \[#limited-user-permissions]

User permissions are limited to read, write and schema changes. It is not possible to create separate databases, manage users and roles, or perform other administrative actions.

TCP tunnel (deprecated) \[#tcp-tunnel-deprecated]

<CalloutContainer type="warning">
  <CalloutDescription>
    The TCP tunnel feature has been **deprecated** in favor of [direct connections](#how-to-connect-to-prisma-postgres-via-direct-tcp). Please use direct connections for all new integrations and migrate existing implementations.
  </CalloutDescription>
</CalloutContainer>

Prisma Postgres can be accessed securely via a TCP tunnel using the [`@prisma/ppg-tunnel`](https://www.npmjs.com/package/@prisma/ppg-tunnel) package, an authentication proxy designed for local database workflows. This package establishes a secure connection to Prisma Postgres through a local TCP server, enabling secure access while automatically handling traffic routing and authentication.

<CalloutContainer type="info">
  <CalloutDescription>
    This is a [Early Access](/v6/platform/maturity-levels#early-access) feature of Prisma Postgres. It is not recommended for production use and is not intended for application-level access.

```
While in Early Access, usage of the TCP tunnel will be free of charge.
```

  </CalloutDescription>
</CalloutContainer>

Prerequisites \[#prerequisites]

- Node.js installed on your machine
- A [Prisma Postgres](/v6/postgres) database connection string set as an environment variable called `DATABASE_URL`

Exporting environment variables \[#exporting-environment-variables]

The tunnel expects you to have the following `DATABASE_URL` environment variable set to the connection URL of your Prisma Postgres instance. If you are running the tunnel command from your project where an `.env` file has `DATABASE_URL` already set, you can skip this step as the tunnel will automatically pick it up.

To export the `DATABASE_URL` environment variable temporarily in a terminal session:

<CodeBlockTabs defaultValue="macOS">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="macOS">
      macOS
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Linux">
  Linux
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="Windows">
  Windows
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="macOS">
    ```bash
    export DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=API_KEY"
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Linux">
    ```bash
    export DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=API_KEY"
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Windows">
    ```bash
    set "DATABASE_URL=prisma+postgres://accelerate.prisma-data.net/?api_key=API_KEY"
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Replace the `API_KEY` placeholder with the API key value of your Prisma Postgres instance.

Starting the TCP tunnel \[#starting-the-tcp-tunnel]

To start the proxy server, run the following command:

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
    npx @prisma/ppg-tunnel
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx @prisma/ppg-tunnel
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx @prisma/ppg-tunnel
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun @prisma/ppg-tunnel
    ```
  </CodeBlockTab>
</CodeBlockTabs>

```text no-copy wrap
Prisma Postgres auth proxy listening on 127.0.0.1:52604 🚀

Your connection is authenticated using your Prisma Postgres API key.
...

==============================
hostname:  127.0.0.1
port:      52604
username:  
password:  
==============================
```

This will start the tunnel on a randomly assigned TCP port. The proxy automatically handles authentication, so any database credentials are accepted. The tunnel also encrypts traffic, meaning clients should be set to not require SSL.

You can now connect to your Prisma Postgres editor using your favorite PostgreSQL client, e.g. `psql` or a GUI like [TablePlus](/v6/postgres/integrations/viewing-data#2a-connect-to-prisma-postgres-using-tableplus) or [DataGrip](/v6/postgres/integrations/viewing-data#2b-connect-to-prisma-postgres-using-datagrip). To do so, you only need to provide the **`host`** and **`port`** from the output above. The TCP tunnel will handle authentication via the API key in your Prisma Postgres connection URL, so you can omit the values for **`username`** and **`password`.**

Customizing host and port \[#customizing-host-and-port]

By default, the tunnel listens on `127.0.0.1` and assigns a random port. Since it provides access to your Prisma Postgres database, it should only be exposed within a trusted network. You can specify a custom host and port using the `--host` and `--port` flags:

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
    npx @prisma/ppg-tunnel --host 127.0.0.1 --port 5432
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx @prisma/ppg-tunnel --host 127.0.0.1 --port 5432
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx @prisma/ppg-tunnel --host 127.0.0.1 --port 5432
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun @prisma/ppg-tunnel --host 127.0.0.1 --port 5432
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Next steps \[#next-steps]

The local tunnel enables you to access Prisma Postgres from 3rd party database editors such as Postico, DataGrip, TablePlus and pgAdmin. Learn more in this [section](/v6/postgres/integrations/viewing-data).

Security considerations \[#security-considerations]

When using the TCP tunnel, keep the following in mind:

- The tunnel does not support schema management (i.e., DDL queries outside of Prisma Migrate).
- The tunnel should not be exposed to untrusted networks.
- Always store API keys securely and avoid hardcoding them.
- Ensure that only necessary users have direct access to the Prisma Postgres database.
