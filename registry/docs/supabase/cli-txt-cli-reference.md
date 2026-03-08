# CLI Reference

Repair the migration history table

Repairs the remote migration history table.

Requires your local project to be linked to a remote database by running `supabase link`.

If your local and remote migration history goes out of sync, you can repair the remote history by marking specific migrations as `--status applied` or `--status reverted`. Marking as `reverted` will delete an existing record from the migration history table while marking as `applied` will insert a new record.

For example, your migration history may look like the table below, with missing entries in either local or remote.

```bash
$ supabase migration list
        LOCAL      │     REMOTE     │     TIME (UTC)
  ─────────────────┼────────────────┼──────────────────────
                   │ 20230103054303 │ 2023-01-03 05:43:03
   20230103054315  │                │ 2023-01-03 05:43:15
```

To reset your migration history to a clean state, first delete your local migration file.

```bash
$ rm supabase/migrations/20230103054315_remote_commit.sql

$ supabase migration list
        LOCAL      │     REMOTE     │     TIME (UTC)
  ─────────────────┼────────────────┼──────────────────────
                   │ 20230103054303 │ 2023-01-03 05:43:03
```

Then mark the remote migration `20230103054303` as reverted.

```bash
$ supabase migration repair 20230103054303 --status reverted
Connecting to remote database...
Repaired migration history: [20220810154537] => reverted
Finished supabase migration repair.

$ supabase migration list
        LOCAL      │     REMOTE     │     TIME (UTC)
  ─────────────────┼────────────────┼──────────────────────
```

Now you can run `db pull` again to dump the remote schema as a local migration file.

```bash
$ supabase db pull
Connecting to remote database...
Schema written to supabase/migrations/20240414044403_remote_schema.sql
Update remote migration history table? [Y/n]
Repaired migration history: [20240414044403] => applied
Finished supabase db pull.

$ supabase migration list
        LOCAL      │     REMOTE     │     TIME (UTC)
  ─────────────────┼────────────────┼──────────────────────
    20240414044403 │ 20240414044403 │ 2024-04-14 04:44:03
```

supabase migration repair \[version] ... \[flags]

# CLI Reference

Squash migrations to a single file

Squashes local schema migrations to a single migration file.

The squashed migration is equivalent to a schema only dump of the local database after applying existing migration files. This is especially useful when you want to remove repeated modifications of the same schema from your migration history.

However, one limitation is that data manipulation statements, such as insert, update, or delete, are omitted from the squashed migration. You will have to add them back manually in a new migration file. This includes cron jobs, storage buckets, and any encrypted secrets in vault.

By default, the latest `<timestamp>_<name>.sql` file will be updated to contain the squashed migration. You can override the target version using the `--version <timestamp>` flag.

If your `supabase/migrations` directory is empty, running `supabase squash` will do nothing.

supabase migration squash \[flags]

# CLI Reference

Apply pending migrations to local database

supabase migration up \[flags]

# CLI Reference

Resets applied migrations up to the last n versions

supabase migration down \[flags]

# CLI Reference

Seed a Supabase project from supabase/config.toml

# CLI Reference

Seed buckets declared in \[storage.buckets]

supabase seed buckets

# CLI Reference

Tools to inspect your Supabase database

# CLI Reference

Estimates space allocated to a relation that is full of dead tuples

This command displays an estimation of table "bloat" - Due to Postgres' [MVCC](https://www.postgresql.org/docs/current/mvcc.html) when data is updated or deleted new rows are created and old rows are made invisible and marked as "dead tuples". Usually the [autovaccum](https://supabase.com/docs/guides/platform/database-size#vacuum-operations) process will asynchronously clean the dead tuples. Sometimes the autovaccum is unable to work fast enough to reduce or prevent tables from becoming bloated. High bloat can slow down queries, cause excessive IOPS and waste space in your database.

Tables with a high bloat ratio should be investigated to see if there are vacuuming is not quick enough or there are other issues.

```
    TYPE  │ SCHEMA NAME │        OBJECT NAME         │ BLOAT │ WASTE
  ────────┼─────────────┼────────────────────────────┼───────┼─────────────
    table │ public      │ very_bloated_table         │  41.0 │ 700 MB
    table │ public      │ my_table                   │   4.0 │ 76 MB
    table │ public      │ happy_table                │   1.0 │ 1472 kB
    index │ public      │ happy_table::my_nice_index │   0.7 │ 880 kB
```

supabase inspect db bloat

# CLI Reference

Show queries that are holding locks and the queries that are waiting for them to be released

This command shows you statements that are currently holding locks and blocking, as well as the statement that is being blocked. This can be used in conjunction with `inspect db locks` to determine which statements need to be terminated in order to resolve lock contention.

```
    BLOCKED PID │ BLOCKING STATEMENT           │ BLOCKING DURATION │ BLOCKING PID │ BLOCKED STATEMENT                                                                      │ BLOCKED DURATION
  ──────────────┼──────────────────────────────┼───────────────────┼──────────────┼────────────────────────────────────────────────────────────────────────────────────────┼───────────────────
    253         │ select count(*) from mytable │ 00:00:03.838314   │        13495 │ UPDATE "mytable" SET "updated_at" = '2023─08─03 14:07:04.746688' WHERE "id" = 83719341 │ 00:00:03.821826
```

supabase inspect db blocking

# CLI Reference

Show queries from pg\_stat\_statements ordered by total times called

This command is much like the `supabase inspect db outliers` command, but ordered by the number of times a statement has been called.

You can use this information to see which queries are called most often, which can potentially be good candidates for optimisation.

```

                        QUERY                      │ TOTAL EXECUTION TIME │ PROPORTION OF TOTAL EXEC TIME │ NUMBER CALLS │  SYNC IO TIME
  ─────────────────────────────────────────────────┼──────────────────────┼───────────────────────────────┼──────────────┼──────────────────
    SELECT * FROM users WHERE id = $1              │ 14:50:11.828939      │ 89.8%                         │  183,389,757 │ 00:00:00.002018
    SELECT * FROM user_events                      │ 01:20:23.466633      │ 1.4%                          │       78,325 │ 00:00:00
    INSERT INTO users (email, name) VALUES ($1, $2)│ 00:40:11.616882      │ 0.8%                          │       54,003 │ 00:00:00.000322

```

supabase inspect db calls

# CLI Reference

Show stats such as cache hit rates, total sizes, and WAL size

supabase inspect db db-stats

# CLI Reference

Show combined index size, usage percent, scan counts, and unused status

supabase inspect db index-stats

# CLI Reference

Show queries which have taken out an exclusive lock on a relation

This command displays queries that have taken out an exclusive lock on a relation. Exclusive locks typically prevent other operations on that relation from taking place, and can be a cause of "hung" queries that are waiting for a lock to be granted.

If you see a query that is hanging for a very long time or causing blocking issues you may consider killing the query by connecting to the database and running `SELECT pg_cancel_backend(PID);` to cancel the query. If the query still does not stop you can force a hard stop by running `SELECT pg_terminate_backend(PID);`

```
     PID   │ RELNAME │ TRANSACTION ID │ GRANTED │                  QUERY                  │   AGE
  ─────────┼─────────┼────────────────┼─────────┼─────────────────────────────────────────┼───────────
    328112 │ null    │              0 │ t       │ SELECT * FROM logs;                     │ 00:04:20
```

supabase inspect db locks

# CLI Reference

Show currently running queries running for longer than 5 minutes

This command displays currently running queries, that have been running for longer than 5 minutes, descending by duration. Very long running queries can be a source of multiple issues, such as preventing DDL statements completing or vacuum being unable to update `relfrozenxid`.

```
  PID  │     DURATION    │                                         QUERY
───────┼─────────────────┼───────────────────────────────────────────────────────────────────────────────────────
 19578 | 02:29:11.200129 | EXPLAIN SELECT  "students".* FROM "students"  WHERE "students"."id" = 1450645 LIMIT 1
 19465 | 02:26:05.542653 | EXPLAIN SELECT  "students".* FROM "students"  WHERE "students"."id" = 1889881 LIMIT 1
 19632 | 02:24:46.962818 | EXPLAIN SELECT  "students".* FROM "students"  WHERE "students"."id" = 1581884 LIMIT 1
```

supabase inspect db long-running-queries

# CLI Reference

Show queries from pg\_stat\_statements ordered by total execution time

This command displays statements, obtained from `pg_stat_statements`, ordered by the amount of time to execute in aggregate. This includes the statement itself, the total execution time for that statement, the proportion of total execution time for all statements that statement has taken up, the number of times that statement has been called, and the amount of time that statement spent on synchronous I/O (reading/writing from the file system).

Typically, an efficient query will have an appropriate ratio of calls to total execution time, with as little time spent on I/O as possible. Queries that have a high total execution time but low call count should be investigated to improve their performance. Queries that have a high proportion of execution time being spent on synchronous I/O should also be investigated.

```

                 QUERY                   │ EXECUTION TIME   │ PROPORTION OF EXEC TIME │ NUMBER CALLS │ SYNC IO TIME
─────────────────────────────────────────┼──────────────────┼─────────────────────────┼──────────────┼───────────────
 SELECT * FROM archivable_usage_events.. │ 154:39:26.431466 │ 72.2%                   │ 34,211,877   │ 00:00:00
 COPY public.archivable_usage_events (.. │ 50:38:33.198418  │ 23.6%                   │ 13           │ 13:34:21.00108
 COPY public.usage_events (id, reporte.. │ 02:32:16.335233  │ 1.2%                    │ 13           │ 00:34:19.784318
 INSERT INTO usage_events (id, retaine.. │ 01:42:59.436532  │ 0.8%                    │ 12,328,187   │ 00:00:00
 SELECT * FROM usage_events WHERE (alp.. │ 01:18:10.754354  │ 0.6%                    │ 102,114,301  │ 00:00:00
```

supabase inspect db outliers

# CLI Reference

Show information about replication slots on the database

This command shows information about [logical replication slots](https://www.postgresql.org/docs/current/logical-replication.html) that are setup on the database. It shows if the slot is active, the state of the WAL sender process ('startup', 'catchup', 'streaming', 'backup', 'stopping') the replication client address and the replication lag in GB.

This command is useful to check that the amount of replication lag is as low as possible, replication lag can occur due to network latency issues, slow disk I/O, long running transactions or lack of ability for the subscriber to consume WAL fast enough.

```
                       NAME                    │ ACTIVE │ STATE   │ REPLICATION CLIENT ADDRESS │ REPLICATION LAG GB
  ─────────────────────────────────────────────┼────────┼─────────┼────────────────────────────┼─────────────────────
    supabase_realtime_replication_slot         │ t      │ N/A     │ N/A                        │                  0
    datastream                                 │ t      │ catchup │ 24.201.24.106              │                 45
```

supabase inspect db replication-slots

# CLI Reference

Show information about roles on the database

supabase inspect db role-stats

# CLI Reference

Show combined table size, index size, and estimated row count

supabase inspect db table-stats

# CLI Reference

Show read/write activity ratio for tables based on block I/O operations

This command analyzes table I/O patterns to show read/write activity ratios based on block-level operations. It combines data from PostgreSQL's `pg_stat_user_tables` (for tuple operations) and `pg_statio_user_tables` (for block I/O) to categorize each table's workload profile.

The command classifies tables into categories:

- **Read-Heavy** - Read operations are more than 5x write operations (e.g., 1:10, 1:50)
- **Write-Heavy** - Write operations are more than 20% of read operations (e.g., 1:2, 1:4, 2:1, 10:1)
- **Balanced** - Mixed workload where writes are between 20% and 500% of reads
- **Read-Only** - Only read operations detected
- **Write-Only** - Only write operations detected

```
SCHEMA │ TABLE        │ BLOCKS READ │ WRITE TUPLES │ BLOCKS WRITE │ ACTIVITY RATIO
───────┼──────────────┼─────────────┼──────────────┼──────────────┼────────────────────
public │ user_events  │     450,234 │     9,004,680│       23,450 │ 20:1 (Write-Heavy)
public │ users        │      89,203 │        12,451│        1,203 │ 7.2:1 (Read-Heavy)
public │ sessions     │      15,402 │        14,823│        2,341 │ ≈1:1 (Balanced)
public │ cache_data   │     123,456 │             0│            0 │ Read-Only
auth   │ audit_logs   │           0 │        98,234│       12,341 │ Write-Only
```

**Note:** This command only displays tables that have had both read and write activity. Tables with no I/O operations are not shown. The classification ratio threshold (default: 5:1) determines when a table is considered "heavy" in one direction versus balanced.

supabase inspect db traffic-profile
