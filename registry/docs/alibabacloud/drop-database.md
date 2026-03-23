You can execute the DROP DATABASE statement to delete a database. This topic describes how to use the DROP DATABASE statement.

## Limits

-   Only a superuser of a database or the database owner configured by a superuser can execute this statement to delete the database.
-   When you delete a database, all objects in the database are deleted.
-   After a database is deleted, you can no longer connect to it.

## Syntax

**Note** After you execute the DROP DATABASE statement, Hologres asynchronously deletes data and releases storage space at the backend. The entire process may take about 2 hours.

```
DROP DATABASE [ IF EXISTS ] db_name;
```

## Example

Execute the following statement to delete the database named mydb:

```
DROP DATABASE mydb;
```
