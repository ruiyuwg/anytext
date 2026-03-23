Hologres lets you create tables across different schemas. This topic describes how to create a schema in Hologres and create tables across schemas.

## Background information

Hologres is compatible with PostgreSQL, and its schema features are the same as those in PostgreSQL.

Schemas in Hologres change the table storage structure from `database.table` to `database.schema.table`.

The current version of Hologres supports creating schemas, renaming schemas, and creating tables within a schema.

In Hologres, each table belongs to a schema. A database can contain multiple schemas to help you manage your data. This also helps prevent users from interfering with each other when they use the same database.

Different schemas can contain tables or data types with the same names.

When a database is created, a **public** schema is created by default. If you do not create other schemas, all tables created in the database are stored in the **public** schema. You can execute the following statements to view the current schema.

```
SELECT CURRENT_SCHEMA();--View the current schema.
\d tablename; --View the schema to which the target table belongs. This statement applies only to the terminal.
```

The following figure shows the hierarchy of objects in a Hologres instance.![层级关系](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0496633371/p73724.png)

## Procedure

1.  Create a schema.
    
    The following example shows the SQL statement used to create a schema in a database.
    
    ```
    CREATE SCHEMA schemaname;--Create a schema.
    SET search_path TO schemaname;--Switch to the target schema.
    CREATE TABLE blink_demo (id text); --Create a table in the target schema.
    SELECT CURRENT_SCHEMA();--View the current schema.
    ```
    
2.  Create a table across schemas.
    
    To create a table in a different schema, specify the table name in the `schema.table` format. For example:
    
    -   Create a table in the **public** schema of the target database. The following is an example SQL statement.
        
        ```
        CREATE TABLE public.mytest (
          name text,
          id INT);
        ```
        
    -   The following is an example SQL statement to create a table in a target schema from the **public** schema.
        
        ```
        SET search_path TO public;
        CREATE TABLE my_schema.mytest (
          name text,
          id INT,
          age INT
        );
        ```
        
    

## **Other operations**

You can execute the following SQL statement to view the total storage size of all tables in a specified schema.

```
SELECT table_schema, pg_size_pretty(SUM(pg_relation_size(quote_ident(table_schema) || '.' || quote_ident(table_name))::decimal)) AS schema_size
FROM information_schema.tables 
WHERE table_schema = '<schema_name>'--Replace <schema_name> with the name of your schema.
GROUP BY table_schema;
```
