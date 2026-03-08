# Database

Every Supabase project comes with a full [Postgres](https://www.postgresql.org/) database, a free and open source database which is considered one of the world's most stable and advanced databases.

## Features

### Table view

You don't have to be a database expert to start using Supabase. Our table view makes Postgres as easy to use as a spreadsheet.

![Table View.](/docs/img/table-view.png)

### Relationships

Dig into the relationships within your data.

### Clone tables

You can duplicate your tables, just like you would inside a spreadsheet.

### The SQL editor

Supabase comes with a SQL Editor. You can also save your favorite queries to run later!

### Additional features

- Supabase extends Postgres with realtime functionality using our [Realtime Server](https://github.com/supabase/realtime).
- Every project is a full Postgres database, with `postgres` level access.
- Supabase manages your database backups.
- Import data directly from a CSV or excel spreadsheet.

Database backups **do not** include objects stored via the Storage API, as the database only includes metadata about these objects. Restoring an old backup does not restore objects that have been deleted since then.

### Extensions

To expand the functionality of your Postgres database, you can use extensions.
You can enable Postgres extensions with the click of a button within the Supabase dashboard.

[Learn more](/docs/guides/database/extensions) about all the extensions provided on Supabase.

## Terminology

{/\* supa-mdx-lint-disable-next-line Rule004ExcludeWords \*/}

### Postgres or PostgreSQL?

{/\* supa-mdx-lint-disable-next-line Rule004ExcludeWords \*/}

PostgreSQL the database was derived from the POSTGRES Project, a package written at the University of California at Berkeley in 1986. This package included a query language called "PostQUEL".

In 1994, Postgres95 was built on top of POSTGRES code, adding an SQL language interpreter as a replacement for PostQUEL.

{/\* supa-mdx-lint-disable-next-line Rule004ExcludeWords \*/}

Eventually, Postgres95 was renamed to PostgreSQL to reflect the SQL query capability.
After this, many people referred to it as Postgres since it's less prone to confusion. Supabase is all about simplicity, so we also refer to it as Postgres.

## Tips

Read about resetting your database password [here](/docs/guides/database/managing-passwords) and changing the timezone of your server [here](/docs/guides/database/managing-timezones).

## Next steps

- Read more about [Postgres](https://www.postgresql.org/about/)
- Sign in: [supabase.com/dashboard](/dashboard)
