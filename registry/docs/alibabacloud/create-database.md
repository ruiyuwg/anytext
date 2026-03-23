This topic describes how to use the CREATE DATABASE statement to create a database.

## Limits

A single instance can have a maximum of 64 databases.

## Syntax

```
CREATE DATABASE db_name
    [ [ WITH ] [ OWNER [=] user_name ]
;
```

The following table describes the parameters.

**Parameter**

**Description**

db\_name

The name of the database to create. The name can contain only letters, digits, and underscores (\_).

user\_name

The name of the database administrator account.

By default, the account that executes the statement becomes the Owner of the new database and receives Superuser permission. The Owner can then grant Superuser permission to other users.

The owner can delete the database. When a database is deleted, all objects in it, such as tables and data, are also deleted.

**Note**

After you activate a Hologres instance, the system automatically creates the **postgres** database. This database is allocated a small number of resources and is intended for management purposes only. For business development, create a new database.

A superuser can create databases for other users and grant them ownership of the new databases. This allows these users to manage and configure their own databases.

## Example

The following example shows a statement to create a new database.

```
CREATE DATABASE testdb;
```
