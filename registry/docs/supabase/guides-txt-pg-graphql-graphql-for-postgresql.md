# pg\_graphql: GraphQL for PostgreSQL

[pg\_graphql](https://supabase.github.io/pg_graphql/) is Postgres extension for interacting with the database using [GraphQL](https://graphql.org) instead of SQL.

The extension reflects a GraphQL schema from the existing SQL schema and exposes it through a SQL function, `graphql.resolve(...)`. This enables any programming language that can connect to Postgres to query the database via GraphQL with no additional servers, processes, or libraries.

The `pg_graphql` resolve method is designed to interop with [PostgREST](https://postgrest.org/en/stable/index.html), the tool that underpins the Supabase API, such that the `graphql.resolve` function can be called via RPC to safely and performantly expose the GraphQL API over HTTP/S.

For more information about how the SQL schema is reflected into a GraphQL schema, see the [pg\_graphql API docs](https://supabase.github.io/pg_graphql/api/).

## Enable the extension

````
1.  Go to the [Database](/dashboard/project/_/database/tables) page in the Dashboard.
2.  Click on **Extensions** in the sidebar.
3.  Search for "pg\_graphql" and enable the extension.



{/* prettier-ignore */}

```sql
-- Enable the "pg_graphql" extension
create extension pg_graphql;

-- Disable the "pg_graphql" extension
drop extension if exists pg_graphql;
```

Even though the SQL code is `create extension`, this is the equivalent of "enabling the extension".
To disable an extension you can call `drop extension`.
````

## Usage

Given a table

{/\* prettier-ignore \*/}

```sql
create table "Blog"(
  id serial primary key,
  name text not null,
  description text
);

insert into "Blog"(name)
values ('My Blog');
```

The reflected GraphQL schema can be queried immediately as

{/\* prettier-ignore \*/}

```sql
select
  graphql.resolve($$
    {
      blogCollection(first: 1) {
        edges {
          node {
            id,
            name
          }
        }
      }
    }
  $$);
```

returning the JSON

{/\* prettier-ignore \*/}

```json
{
  "data": {
    "blogCollection": {
      "edges": [
        {
          "node": {
            "id": 1
            "name": "My Blog"
          }
        }
      ]
    }
  }
}
```

Note that `pg_graphql` fully supports schema introspection so you can connect any GraphQL IDE or schema inspection tool to see the full set of fields and arguments available in the API.

## API

- [`graphql.resolve`](https://supabase.github.io/pg_graphql/sql_interface/): A SQL function for executing GraphQL queries.

## Resources

- Official [`pg_graphql` documentation](https://github.com/supabase/pg_graphql)

# pg\_hashids: Short UIDs

[pg\_hashids](https://github.com/iCyberon/pg_hashids) provides a secure way to generate short, unique, non-sequential ids from numbers. The hashes are intended to be small, easy-to-remember identifiers that can be used to obfuscate data (optionally) with a password, alphabet, and salt. For example, you may wish to hide data like user IDs, order numbers, or tracking codes in favor of `pg_hashid`'s unique identifiers.

## Enable the extension

````
1.  Go to the [Database](/dashboard/project/_/database/tables) page in the Dashboard.
2.  Click on **Extensions** in the sidebar.
3.  Search for "pg\_hashids" and enable the extension.



{/* prettier-ignore */}

```sql
-- Enable the "pg_hashids" extension
create extension pg_hashids with schema extensions;

-- Disable the "pg_hashids" extension
drop extension if exists pg_hashids;
```

Even though the SQL code is `create extension`, this is the equivalent of "enabling the extension".
To disable an extension you can call `drop extension`.

It's good practice to create the extension within a separate schema (like `extensions`) to keep your `public` schema clean.
````

## Usage

Suppose we have a table that stores order information, and we want to give customers a unique identifier without exposing the sequential `id` column. To do this, we can use `pg_hashid`'s `id_encode` function.

```sql
create table orders (
  id serial primary key,
  description text,
  price_cents bigint
);

insert into orders (description, price_cents)
values ('a book', 9095);

select
  id,
  id_encode(id) as short_id,
  description,
  price_cents
from
  orders;

  id | short_id | description | price_cents
----+----------+-------------+-------------
  1 | jR       | a book      |        9095
(1 row)
```

To reverse the `short_id` back into an `id`, there is an equivalent function named `id_decode`.

## Resources

- Official [pg\_hashids documentation](https://github.com/iCyberon/pg_hashids)
