# Column Level Security

PostgreSQL's [Row Level Security (RLS)](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) gives you granular control over who can access rows of data. However, it doesn't give you control over which columns they can access within rows. Sometimes you want to restrict access to specific columns in your database. Column Level Privileges allows you to do just that.

This is an advanced feature. We do not recommend using column-level privileges for most users. Instead, we recommend using RLS policies in combination with a dedicated table for handling user roles.

Restricted roles cannot use the wildcard operator (`*`) on the affected table. Instead of using `SELECT * FROM <restricted_table>;` or its API equivalent, you must specify the column names explicitly.

## Policies at the row level

Policies in Row Level Security (RLS) are used to restrict access to rows in a table. Think of them like adding a `WHERE` clause to every query.

For example, let's assume you have a `posts` table with the following columns:

- `id`
- `user_id`
- `title`
- `content`
- `created_at`
- `updated_at`

You can restrict updates to just the user who created it using [RLS](/docs/guides/auth#row-level-security), with the following policy:

```sql
create policy "Allow update for owners" on posts for
update
  using ((select auth.uid()) = user_id);
```

However, this gives the post owner full access to update the row, including all of the columns.

## Privileges at the column level

To restrict access to columns, you can use [Privileges](https://www.postgresql.org/docs/current/ddl-priv.html).

There are two types of privileges in Postgres:

1. **table-level**: Grants the privilege on all columns in the table.
2. **column-level** Grants the privilege on a specific column in the table.

You can have both types of privileges on the same table. If you have both, and you revoke the column-level privilege, the table-level privilege will still be in effect.

By default, our table will have a table-level `UPDATE` privilege, which means that the `authenticated` role can update all the columns in the table.

```sql
revoke
update
  on table public.posts
from
  authenticated;

grant
update
  (title, content) on table public.posts to authenticated;
```

In the above example, we are revoking the table-level `UPDATE` privilege from the `authenticated` role and granting a column-level `UPDATE` privilege on just the `title` and `content` columns.

If we want to restrict access to updating the `title` column:

```sql
revoke
update
  (title) on table public.posts
from
  authenticated;
```

This time, we are revoking the column-level `UPDATE` privilege of the `title` column from the `authenticated` role. We didn't need to revoke the table-level `UPDATE` privilege because it's already revoked.

## Manage column privileges in the Dashboard

Column-level privileges are a powerful tool, but they're also quite advanced and in many cases, not the best fit for common access control needs. For that reason, we've intentionally moved the UI for this feature under the Feature Preview section in the dashboard.

You can view and edit the privileges in the [Supabase Studio](/dashboard/project/_/database/column-privileges).

![Column level privileges](/docs/img/guides/privileges/column-level-privileges-2.png)

## Manage column privileges in migrations

While you can manage privileges directly from the Dashboard, as your project grows you may want to manage them in your migrations. Read about database migrations in the [Local Development](/docs/guides/deployment/database-migrations) guide.

\<StepHikeCompact.Step step={1}>
\<StepHikeCompact.Details title="Create a migration file">
To get started, generate a [new migration](/docs/reference/cli/supabase-migration-new) to store the SQL needed to create your table along with row and column-level privileges.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  ```bash
  supabase migration new create_posts_table
  ```
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={2}>
\<StepHikeCompact.Details title="Add the SQL to your migration file">
This creates a new migration: supabase/migrations/\
\_create\_posts\_table.sql.

````
  To that file, add the SQL to create this `posts` table with row and column-level privileges.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  ```sql
  create table
  posts (
  id bigint primary key generated always as identity,
  user_id text,
  title text,
  content text,
  created_at timestamptz default now()
  updated_at timestamptz default now()
  );

  -- Add row-level security
  create policy "Allow update for owners" on posts for
  update
  using ((select auth.uid()) = user_id);

  -- Add column-level security
  revoke
  update
  (title) on table public.posts
  from
  authenticated;
  ```
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

## Considerations when using column-level privileges

- If you turn off a column privilege you won't be able to use that column at all.
- All operations (insert, update, delete) as well as using `select *` will fail.

# Database configuration

Updating the default configuration for your Postgres database.

Postgres provides a set of sensible defaults for you database size. In some cases, these defaults can be updated. We do not recommend changing these defaults unless you know what you're doing.

## Timeouts

See the [Timeouts](/docs/guides/database/postgres/timeouts) section.

## Statement optimization

All Supabase projects come with the [`pg_stat_statements`](https://www.postgresql.org/docs/current/pgstatstatements.html) extension installed, which tracks planning and execution statistics for all statements executed against it. These statistics can be used in order to diagnose the performance of your project.

This data can further be used in conjunction with the [`explain`](https://www.postgresql.org/docs/current/using-explain.html) functionality of Postgres to optimize your usage.

## Managing timezones

Every Supabase database is set to UTC timezone by default. We strongly recommend keeping it this way, even if your users are in a different location. This is because it makes it much easier to calculate differences between timezones if you adopt the mental model that everything in your database is in UTC time.

### Change timezone

````
```sql
alter database postgres
set timezone to 'America/New_York';
```
````

### Full list of timezones

Get a full list of timezones supported by your database. This will return the following columns:

- `name`: Time zone name
- `abbrev`: Time zone abbreviation
- `utc_offset`: Offset from UTC (positive means east of Greenwich)
- `is_dst`: True if currently observing daylight savings

  ```sql
  select name, abbrev, utc_offset, is_dst
  from pg_timezone_names()
  order by name;
  ```

### Search for a specific timezone

Use `ilike` (case insensitive search) to find specific timezones.

````
```sql
select *
from pg_timezone_names()
where name ilike '%york%';
```
````

# Drop all tables in a PostgreSQL schema

Execute the following query to drop all tables in a given schema.
Replace `my-schema-name` with the name of your schema. In Supabase, the default schema is `public`.

This deletes all tables and their associated data. Ensure you have a recent [backup](/docs/guides/platform/backups) before proceeding.

```sql
do $$ declare
    r record;
begin
    for r in (select tablename from pg_tables where schemaname = 'my-schema-name') loop
        execute 'drop table if exists ' || quote_ident(r.tablename) || ' cascade';
    end loop;
end $$;
```

This query works by listing out all the tables in the given schema and then executing a `drop table` for each (hence the `for... loop`).

You can run this query using the [SQL Editor](/dashboard/project/_/sql) in the Supabase Dashboard, or via `psql` if you're [connecting directly to the database](/docs/guides/database/connecting-to-postgres#direct-connections).
