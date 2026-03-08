# Manual Replication Setup

Set up replication with Airbyte, Estuary, Fivetran, and other tools.

This guide covers setting up **manual logical replication** using external tools. If you prefer a simpler, managed solution, read [the Replication setup docs](/docs/guides/database/replication/replication-setup) instead.

This guide is for replicating data to external systems using your own tools. For deploying read-only databases across multiple regions, see [Read Replicas](/docs/guides/platform/read-replicas) instead.

### Prerequisites

To set up replication, the following is recommended:

- Instance size of XL or greater
- [IPv4 add-on](/docs/guides/platform/ipv4-address) enabled

To create a replication slot, you will need to use the `postgres` user and follow the instructions in the [external replication setup guide](/docs/guides/database/postgres/setup-replication-external).

If you are running Postgres 17 or higher, you can create a new user and grant them replication permissions with the `postgres` user. For versions below 17, you will need to use the `postgres` user.

If you are replicating to an external system and using any of the tools below, check their documentation first. Additional information is provided where the setup with Supabase can vary.

```
Airbyte has the following [documentation](https://docs.airbyte.com/integrations/sources/postgres/) for setting up Postgres as a source, either in their cloud offering or by self-hosting.

You can follow those steps with the following modifications:

1.  Use the `postgres` user
2.  Select `logical replication` as the replication method (`xmin` is possible, but not recommended)

### Troubleshooting

Airbyte has a known [issue](https://discuss.airbyte.io/t/postgres-source-replication-slot-safe-wal-size-only-reset-when-a-change-occurs/3263/7) where it does not clear WAL files on each successful sync. The recommended workaround is to have a `heartbeat` table that you write changes to once an hour.>



Estuary has the following [documentation](https://docs.estuary.dev/reference/Connectors/capture-connectors/PostgreSQL/Supabase/) for setting up Postgres as a source.



Fivetran has the following [documentation](https://fivetran.com/docs/connectors/databases/postgresql/setup-guide) for setting up Postgres as a source.

You can follow those steps with the following modifications:

1.  In Step 2, choose `logical replication` as the sync mechanism
2.  In Step 3, do not create a user and use the existing `postgres` user for replication
3.  In Step 5, no need to modify any WAL settings as this has been configured



Materialize has the following [documentation](https://materialize.com/docs/sql/create-source/postgres/) on setting up Postgres as a source.

You can follow those steps with the following modifications:

1.  Follow the steps in the [external replication setup guide](/docs/guides/database/postgres/setup-replication-external) to create a publication slot



Stitch has the following [documentation](https://www.stitchdata.com/docs/integrations/databases/postgresql/v2#extract-data) on configuring Postgres as a source.

You can follow those steps with the following modifications:

1.  Use the `postgres` user for replication
2.  Skip step 3



AWS DMS has the following [documentation](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html) on configuring Postgres as a source.

DMS is notably useful if you have infrastructure running in AWS and/or you have custom networking. An additional benefit is that DMS is able to replicate schema changes.

You can follow those steps with the following modifications:

1.  Use the `postgres` user for replication (or create a new user with replication permissions: `ALTER USER <user> WITH REPLICATION;`)
2.  Set `pluginname` to `test-decoding`
3.  Depending on your databases the pre-assessment may fail. It is not required.
4.  Increase `wal_sender_timeout` and other settings (`max_wal_size`) using the [Supabase CLI](/docs/guides/platform/custom-postgres-config)
```
