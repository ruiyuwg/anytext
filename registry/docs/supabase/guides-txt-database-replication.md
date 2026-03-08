# Database Replication

An introduction to database replication and change data capture.

Replication is the process of copying changes from your database to another location. It's also referred to as change data capture (CDC): capturing all the changes that occur to your data.

## Use cases

You might use database replication for:

- **Analytics and Data Warehousing**: Replicate your operational database to analytics platforms for complex analysis without impacting your application's performance.
- **Data Integration**: Keep your data synchronized across different systems and services in your tech stack.
- **Backup and Disaster Recovery**: Maintain up-to-date copies of your data in different locations.

## Replication methods

Supabase supports three methods for replicating your database to external destinations:

### Read Replicas

Additional databases that are kept in sync with your Primary database. These read-only databases can be deployed across multiple regions, for lower latency and better resource management.

- [Set up Read Replicas](/docs/guides/platform/read-replicas)

### Replication

Replication is currently in private alpha. Access is limited and features may change.

Replication powered by [Supabase ETL](https://github.com/supabase/etl) automatically replicates data to supported systems.

- [Set up replication](/docs/guides/database/replication/replication-setup)

### Manual replication

Configure your own replication using external tools and Postgres's native logical replication. This gives you full control over the replication process and allows you to use any tool that supports Postgres logical replication.

- [Set up Manual Replication](/docs/guides/database/replication/manual-replication-setup)

## Related features

Choose the data syncing method based on your use case:

- For realtime features and syncing data to clients (browsers, mobile apps), see [Realtime](/docs/guides/realtime)
- For deploying read-only databases across multiple regions, see [Read Replicas](/docs/guides/platform/read-replicas)

## Concepts and terms

### Write-Ahead Log (WAL)

Postgres uses a system called the Write-Ahead Log (WAL) to manage changes to the database. As you make changes, they are appended to the WAL, which is a series of files (also called "segments") where the file size can be specified. Once one segment is full, Postgres will start appending to a new segment. After a period of time, a checkpoint occurs and Postgres synchronizes the WAL with your database. Once the checkpoint is complete, then the WAL files can be removed from disk and free up space.

### Logical replication and WAL

Logical replication is a method of replication where Postgres uses the WAL files and transmit those changes to another Postgres database, or a system that supports reading WAL files.

### LSN

LSN is a Log Sequence Number that is used to identify the position of a WAL file in the WAL directory. It is often used to determine the progress of replication in subscribers and calculate the lag of a replication slot.

## Logical replication architecture

When setting up logical replication, three key components are involved:

- `publication` - A set of tables on your primary database that will be `published`
- `replication slot` - A slot used for replicating the data from a single publication. The slot, when created, will specify the output format of the changes
- `subscription` - A subscription is created from an external system (i.e. another Postgres database) and must specify the name of the `publication`. If you do not specify a replication slot, one is automatically created

## Logical replication output format

Logical replication is typically output in 2 forms, `pgoutput` and `wal2json`. The output method is how Postgres sends changes to any active replication slot.

## Logical replication configuration

When using logical replication, Postgres is then configured to keep WAL files around for longer than it needs them. If the files are removed too quickly, then your `replication slot` will become inactive and, if the database receives a large number of changes in a short time, then the `replication slot` can become lost as it was not able to keep up.

In order to mitigate this, Postgres has many options and settings that can be [tweaked](/docs/guides/database/custom-postgres-config) to manage the WAL usage effectively. Not all of these settings are user configurable as they can impact the stability of your database. For those that are, these should be considered as advanced configuration and not changed without understanding that they can cause additional disk space and resources to be used, as well as incur additional costs.

| Setting                                                                                  | Description                                            | User-facing | Default |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------ | ----------- | ------- |
| [`max_replication_slots`](https://postgresqlco.nf/doc/en/param/max_replication_slots/)   | Max count of replication slots allowed                 | No          |         |
| [`wal_keep_size`](https://postgresqlco.nf/doc/en/param/wal_keep_size/)                   | Minimum size of WAL files to keep for replication      | No          |         |
| [`max_slot_wal_keep_size`](https://postgresqlco.nf/doc/en/param/max_slot_wal_keep_size/) | Max WAL size that can be reserved by replication slots | No          |         |
| [`checkpoint_timeout`](https://postgresqlco.nf/doc/en/param/checkpoint_timeout/)         | Max time between WAL checkpoints                       | No          |         |

# Securing your data

Supabase helps you control access to your data. With access policies, you can protect sensitive data and make sure users only access what they're allowed to see.

## Connecting your app securely

Supabase allows you to access your database using the auto-generated [Data APIs](/docs/guides/database/connecting-to-postgres#data-apis). This speeds up the process of building web apps, since you don't need to write your own backend services to pass database queries and results back and forth.

You can keep your data secure while accessing the Data APIs from the frontend, so long as you:

- Turn on [Row Level Security](/docs/guides/database/postgres/row-level-security) (RLS) for your tables
- Use your Supabase **anon key** when you create a Supabase client

Your anon key is safe to expose with RLS enabled, because row access permission is checked against your access policies and the user's [JSON Web Token (JWT)](/docs/learn/auth-deep-dive/auth-deep-dive-jwts). The JWT is automatically sent by the Supabase client libraries if the user is logged in using Supabase Auth.

Unlike your anon key, your **service role key** is **never** safe to expose because it bypasses RLS. Only use your service role key on the backend. Treat it as a secret (for example, import it as a sensitive environment variable instead of hardcoding it).

## More information

Supabase and Postgres provide you with multiple ways to manage security, including but not limited to Row Level Security. See the Access and Security pages for more information:

- [Row Level Security](/docs/guides/database/postgres/row-level-security)
- [Column Level Security](/docs/guides/database/postgres/column-level-security)
- [Hardening the Data API](/docs/guides/database/hardening-data-api)
- [Managing Postgres roles](/docs/guides/database/postgres/roles)
- [Managing secrets with Vault](/docs/guides/database/vault)
