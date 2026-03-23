Delete a user from a Hologres instance. This topic describes how to resolve dependency errors, transfer object ownership, and remove a user.

## Prerequisites

-   You have superuser privileges or equivalent administrative access to the Hologres instance.
    
-   For RAM users, you need the user's p4\_id instead of their uid. For more information, see [User ID](/help/en/hologres/security-and-compliance/overview-16#section-o0a-mg3-w2p).
    

## Do you need to delete the user?

Before you delete a user, determine whether deletion is necessary. In some cases, you can resolve the issue without deleting the user.

### Incorrect permissions (no deletion needed)

If you want to delete a user only to re-grant the correct permissions, you do not need to delete the user. Revoke the current permissions and grant new ones instead.

-   To manage permissions in the standard PostgreSQL authorization model, see [Standard PostgreSQL authorization model](/help/en/hologres/security-and-compliance/standard-postgresql-authorization-model#task-1917508).
    
-   To manage permissions in the simple permission model, see [Use the simple permission model](/help/en/hologres/security-and-compliance/use-the-spm#task-1961231) and [Use the schema-level simple permission model](/help/en/hologres/security-and-compliance/use-the-slpm#task-2021883).
    
-   To change a regular user to a superuser:
    
    ```
    -- If the user is a RAM user, change uid to p4_id.
    alter user "<uid>" superuser;
    ```
    
-   To change a superuser to a regular user:
    
    **Note**
    
    After you change a superuser to a regular user, the user has no permissions. You must grant the required permissions to the user.
    
    ```
    -- If the user is a RAM user, change uid to p4_id.
    alter user "<uid>" nosuperuser;
    ```
    

In these statements, **uid** specifies the user ID. For more information, see [User ID](/help/en/hologres/security-and-compliance/overview-16#section-o0a-mg3-w2p).

### Business reasons (deletion required)

If the user must be deleted for business reasons, such as when an employee leaves the company or the account is no longer in use, follow the procedures below to transfer ownership and delete the user.

## Common errors when deleting a user

When you attempt to delete a user that owns database objects or has been granted permissions, Hologres returns one of the following errors:

-   **The user owns objects:**
    
    ```
    ERROR:  role "<uid>" cannot be dropped because some objects depend on it
    DETAIL:  owner of table xxx
    owner of schema yyy
    ```
    
-   **Objects in a database depend on the user:**
    
    ```
    ERROR:  role "<uid>" cannot be dropped because some objects depend on it
    DETAIL:  1 object in database xxx
    ```
    
-   **The user has permissions on objects:**
    
    ```
    ERROR: role "<uid>" cannot be dropped because some objects depend on it
    Detail: privileges for table xxx
    privileges for table yyy
    ```
    

These errors occur because the user still has dependent objects or permissions within the instance. You must resolve all dependencies before you can delete the user.

## Delete a user and keep the objects

To delete a user while preserving the objects they own (tables, views, functions, and other objects), transfer ownership to another user first.

1.  Transfer ownership of all objects to another user.
    
    ```
    REASSIGN OWNED BY "<uid>" TO "<Another_uid>" ;
    ```
    
2.  Delete the user.
    
    ```
    DROP USER "<uid>";
    ```
    

In these statements, **uid** specifies the user ID. For more information, see [User ID](/help/en/hologres/security-and-compliance/overview-16#section-o0a-mg3-w2p).

If the `REASSIGN OWNED BY` statement does not resolve all dependencies, use the following queries to identify and transfer specific objects.

## View and resolve user dependencies

Use the following queries to identify what objects a user owns and what permissions depend on them. Run these queries before deleting a user to find and resolve all dependencies.

### View all dependent objects

Run the following statement to list all dependent objects of a user. The query returns the dependency type for each object: "Permission dependency" or "Owner dependency".

```
select 'select * from ' || s.classid::regclass || ' where oid = ' || s.objid || '; (Execute in the '
 || d.datname || ' DB)' as "Query for dependent objects", case when deptype = 'a' then 'Permission dependency'
when deptype = 'o' then 'Owner dependency' else deptype::text end as "Dependency type"from pg_shdepend s
join pg_database d on (s.dbid = d.oid) join pg_roles r on (r.oid = s.refobjid) where
datname = current_database() and refclassid = 1260 and r.rolname = '<username>';
```

### Check and transfer table, view, and foreign table ownership

**View the owners of all tables, views, and foreign tables:**

```
SELECT
    n.nspname AS "Schema",
    c.relname AS "Name",
    CASE c.relkind
    WHEN 'r' THEN
        'table'
    WHEN 'v' THEN
        'view'
    WHEN 'm' THEN
        'materialized view'
    WHEN 'i' THEN
        'index'
    WHEN 'S' THEN
        'sequence'
    WHEN 's' THEN
        'special'
    WHEN 't' THEN
        'TOAST table'
    WHEN 'f' THEN
        'foreign table'
    WHEN 'p' THEN
        'partitioned table'
    WHEN 'I' THEN
        'partitioned index'
    END AS "Type",
    pg_catalog.pg_get_userbyid(c.relowner) AS "Owner",
    pg_catalog.obj_description(c.oid,'pg_class') AS "Description"
FROM
    pg_catalog.pg_class c
    LEFT JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
WHERE
    c.relkind IN ('r', 'p', 't', 'v', 'm', 'S', 's', 'f', '')
    AND pg_catalog.pg_table_is_visible(c.oid);
```

**View the tables, views, and foreign tables owned by a specific user:**

```
SELECT
    n.nspname AS "Schema",
    c.relname AS "Name",
    CASE c.relkind
    WHEN 'r' THEN
        'table'
    WHEN 'v' THEN
        'view'
    WHEN 'm' THEN
        'materialized view'
    WHEN 'i' THEN
        'index'
    WHEN 'S' THEN
        'sequence'
    WHEN 's' THEN
        'special'
    WHEN 't' THEN
        'TOAST table'
    WHEN 'f' THEN
        'foreign table'
    WHEN 'p' THEN
        'partitioned table'
    WHEN 'I' THEN
        'partitioned index'
    END AS "Type",
    pg_catalog.pg_get_userbyid(c.relowner) AS "Owner",
    pg_catalog.obj_description(c.oid, 'pg_class') AS "Description"
FROM
    pg_catalog.pg_class c
    LEFT JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
WHERE
    c.relkind IN ('r', 'p', 't', 'v', 'm', 'S', 's', 'f', '')
    AND pg_catalog.pg_table_is_visible(c.oid)
    AND pg_catalog.pg_get_userbyid(c.relowner) ='<user_name>';
```

**Transfer ownership to a new owner:**

```
-- Change the owner of a table.
ALTER TABLE schema_name.table_name OWNER TO new_owner;

-- Change the owner of a foreign table.
ALTER FOREIGN TABLE schema_name.foreign_table_name OWNER TO new_owner;

-- Change the owner of a view.
ALTER VIEW schema_name.view_name OWNER TO new_owner;
```

### Check and transfer schema ownership

**View the owners of all schemas:**

```
SELECT
    n.nspname AS "Name",
    pg_catalog.pg_get_userbyid(n.nspowner) AS "Owner",
    pg_catalog.array_to_string(n.nspacl, E'\n') AS "Access privileges",
    pg_catalog.obj_description(n.oid, 'pg_namespace') AS "Description"
FROM
    pg_catalog.pg_namespace n
ORDER BY
    1;
```

**View the schemas owned by a specific user:**

```
SELECT
    n.nspname AS "Name",
    pg_catalog.pg_get_userbyid(n.nspowner) AS "Owner",
    pg_catalog.array_to_string(n.nspacl, E'\n') AS "Access privileges",
    pg_catalog.obj_description(n.oid, 'pg_namespace') AS "Description"
FROM
    pg_catalog.pg_namespace n
WHERE pg_catalog.pg_get_userbyid(n.nspowner) ='<user_name>';
```

**Transfer ownership to a new owner:**

```
-- Change the owner of a schema.
ALTER SCHEMA schema_name OWNER TO new_owner;
```

### Check and transfer server ownership

**View the owners of all servers:**

```
SELECT
    s.srvname AS "Name",
    pg_catalog.pg_get_userbyid(s.srvowner) AS "Owner",
    f.fdwname AS "Foreign-data wrapper",
    pg_catalog.array_to_string(s.srvacl, E'\n') AS "Access privileges",
    s.srvtype AS "Type",
    s.srvversion AS "Version",
    CASE WHEN srvoptions IS NULL THEN
        ''
    ELSE
        '(' || pg_catalog.array_to_string(ARRAY (
                SELECT
                    pg_catalog.quote_ident(option_name) || ' ' || pg_catalog.quote_literal(option_value)
                FROM pg_catalog.pg_options_to_table(srvoptions)), ', ') || ')'
    END AS "FDW options",
    d.description AS "Description"
FROM
    pg_catalog.pg_foreign_server s
    JOIN pg_catalog.pg_foreign_data_wrapper f ON f.oid = s.srvfdw
    LEFT JOIN pg_catalog.pg_description d ON d.classoid = s.tableoid
        AND d.objoid = s.oid
        AND d.objsubid = 0;
```

**View the servers owned by a specific user:**

```
SELECT
    s.srvname AS "Name",
    pg_catalog.pg_get_userbyid(s.srvowner) AS "Owner",
    f.fdwname AS "Foreign-data wrapper",
    pg_catalog.array_to_string(s.srvacl, E'\n') AS "Access privileges",
    s.srvtype AS "Type",
    s.srvversion AS "Version",
    CASE WHEN srvoptions IS NULL THEN
        ''
    ELSE
        '(' || pg_catalog.array_to_string(ARRAY (
                SELECT
                    pg_catalog.quote_ident(option_name) || ' ' || pg_catalog.quote_literal(option_value)
                FROM pg_catalog.pg_options_to_table(srvoptions)), ', ') || ')'
    END AS "FDW options",
    d.description AS "Description"
FROM
    pg_catalog.pg_foreign_server s
    JOIN pg_catalog.pg_foreign_data_wrapper f ON f.oid = s.srvfdw
    LEFT JOIN pg_catalog.pg_description d ON d.classoid = s.tableoid
        AND d.objoid = s.oid
        AND d.objsubid = 0
WHERE pg_catalog.pg_get_userbyid(s.srvowner) = '<user_name>';
```

**Transfer ownership to a new owner:**

```
-- Change the owner of a server.
ALTER SERVER server_name OWNER TO new_owner;
```

### Check and remove user mappings

**View the owners of all user mappings:**

```
SELECT
    um.srvname AS "Server",
    um.usename AS "User name",
    CASE WHEN umoptions IS NULL THEN
        ''
    ELSE
        '(' || pg_catalog.array_to_string(ARRAY (
                SELECT
                    pg_catalog.quote_ident(option_name) || ' ' || pg_catalog.quote_literal(option_value)
                FROM pg_catalog.pg_options_to_table(umoptions)), ', ') || ')'
    END AS "FDW options"
FROM
    pg_catalog.pg_user_mappings um;
```

**View the user mappings owned by a specific user:**

```
SELECT
    um.srvname AS "Server",
    um.usename AS "User name",
    CASE WHEN umoptions IS NULL THEN
        ''
    ELSE
        '(' || pg_catalog.array_to_string(ARRAY (
                SELECT
                    pg_catalog.quote_ident(option_name) || ' ' || pg_catalog.quote_literal(option_value)
                FROM pg_catalog.pg_options_to_table(umoptions)), ', ') || ')'
    END AS "FDW options"
FROM
    pg_catalog.pg_user_mappings um
WHERE um.usename = '<user_name>';
```

**Delete the user mapping:**

```
-- Delete the user mapping.
DROP USER MAPPING FOR user_name SERVER server_name;
```
