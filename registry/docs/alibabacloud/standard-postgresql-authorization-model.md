Hologres is compatible with PostgreSQL and uses the same authorization system as standard PostgreSQL statements, also known as the standard PostgreSQL authorization model. This topic describes how to use this model to grant and revoke user permissions in Hologres.

## Grant permissions with the standard PostgreSQL authorization model

After you connect to a Hologres instance using a development tool, you can use SQL statements to grant permissions based on the standard PostgreSQL authorization model, giving the user the required permissions for the instance.

1.  Create a user.
    
    An account must be created as a Hologres user before it can access Hologres for development.
    
    The syntax to create a user is as follows:
    
    ```
    -- Create a user with permissions to log on to the Hologres instance. If you grant permissions to a Resource Access Management (RAM) user, use the RAM user format for the account.
    CREATE USER "Alibaba Cloud account ID/email"; 
    -- Create a user and grant Superuser permissions.
    CREATE USER "Alibaba Cloud account ID/email" SUPERUSER;
    ```
    
    You can create a user based on the following examples. For more information about the format for Alibaba Cloud accounts and RAM users, see [Account system](/help/en/hologres/security-and-compliance/overview-16#concept-1597881).
    
    ```
    -- Create a user with an Alibaba Cloud account ID.
    CREATE USER "11822780xxx";
    -- Grant Superuser permissions to a RAM user.
    CREATE USER "p4_1822780xxx" SUPERUSER; 
    ```
    
    For more information about creating roles, see [CREATE ROLE](https://www.postgresql.org/docs/11/sql-createrole.html).
    
2.  Grant permissions.
    
    After you create an account as a Hologres user, you must grant permissions to the user so they can use Hologres within the scope of those permissions. The standard PostgreSQL authorization model lets you control permissions at the database, table, view, and column levels. The following table describes common authorization operations in Hologres.
    
    **Note**
    
    The standard PostgreSQL authorization model only grants permissions on existing instance objects. It does not apply to objects created after the permissions are granted. For example, if user A grants user B permission to view all tables in the **public schema**, and user A later creates a new table, user B does not have permission to view this new table. You must grant the permission again.
    
    **Permission description**
    
    **Syntax example**
    
    **Required**
    
    Create a user with permissions to log on to a Hologres instance
    
    ```
    CREATE USER "Alibaba Cloud account/email";
    ```
    
    Yes
    
    Create a user and grant Superuser permissions
    
    ```
    CREATE USER "Alibaba Cloud account/email" SUPERUSER ;
    ```
    
    Optional
    
    Grant permission to create tables in a schema
    
    ```
    GRANT CREATE ON SCHEMA schema_name  TO "Alibaba Cloud account/email";
    ```
    
    Optional
    
    Grant USAGE permission on a schema
    
    ```
    GRANT USAGE ON SCHEMA schema_name  TO "Alibaba Cloud account/email";
    ```
    
    Required
    
    **Note**
    
    You must grant USAGE permission on a schema before you can grant query permissions on its tables.
    
    Grant all users the permissions to view, write to, and modify all tables in the **public schema**
    
    ```
    GRANT SELECT,INSERT,UPDATE ON ALL TABLES IN SCHEMA public to PUBLIC;
    ```
    
    Optional
    
    Grant a user the SELECT permission on a table
    
    ```
    GRANT SELECT ON TABLE <tablename> TO "Alibaba Cloud account/email";
    ```
    
    Optional
    
    Grant a user the SELECT permission on a table and allow the user to grant this permission to other users
    
    ```
    GRANT SELECT ON TABLE <tablename> TO "Alibaba Cloud account/email" WITH GRANT OPTION;
    ```
    
    Optional
    
    Grant a user the SELECT permission on all tables in the **public schema**
    
    ```
    GRANT SELECT ON ALL TABLES IN SCHEMA public TO "Alibaba Cloud account/email";
    ```
    
    Optional
    
    Allow the current authorizer to make future tables created in the `public` schema readable by everyone.
    
    ```
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO PUBLIC;
    ```
    
    Optional
    
    Change a regular user to a Superuser
    
    ```
    ALTER USER "Alibaba Cloud account/email" SUPERUSER;
    ```
    
    Optional
    
    Change a Superuser to a regular user
    
    ```
    ALTER USER "Alibaba Cloud account/email" NOSUPERUSER;
    ```
    
    Optional
    
    Grant another user the Owner permission on a table
    
    ```
    ALTER TABLE <tablename> OWNER TO "Alibaba Cloud account/email";
    ```
    
    Optional
    
    Create a role that does not have permissions to log on to a Hologres instance
    
    ```
    CREATE ROLE "Alibaba Cloud account/mailbox";
    ```
    
    Optional
    
    Grant a user the permissions of a specific role
    
    ```
    GRANT <rolename> TO "Alibaba Cloud account/email" ;
    ```
    
    Optional
    
    Grant a user the query permission on specific columns of a table
    
    ```
    GRANT SELECT (<column1>,<column2>,<column3>,...) ON TABLE <tablename> TO "Alibaba Cloud account/email" ;
    ```
    
    Optional
    
    Grant a user the query permission on a view
    
    **Note**
    
    -   To access a view with the standard PostgreSQL authorization model, you must grant the query permission on the view.
        
    -   To access a view with the SPM/SLPM permission model, the user must have the permissions of the viewer user group or a higher-level user group.
        
    
    ```
    -- Grant a user the query permission on a view with the standard PostgreSQL authorization model.
    GRANT SELECT ON <viewname> TO "Alibaba Cloud account/email" ;
    ```
    
    Optional
    
    In the standard model, you can use the following example to grant a new user query permission on a table.
    
    ```
    CREATE USER "Alibaba Cloud account/email";
    GRANT USAGE ON SCHEMA <schema_name>  TO "Alibaba Cloud account/email";
    GRANT SELECT ON TABLE <tablename> TO "Alibaba Cloud account/email";
    ```
    
    CREATE ROLE creates a role that does not have permissions to log on to a Hologres instance. Examples include a user group that represents a class of users or a virtual role. For more information about granting permissions, see [GRANT](https://www.postgresql.org/docs/11/sql-grant.html).
    
3.  Delete a table.
    
    Only a Superuser or the table Owner can delete a table. You can use one of the following methods to grant one or more users permission to delete a table:
    
    -   Replace the table Owner with the new user.
        
        ```
        ALTER TABLE TABLENAME OWNER TO "Alibaba Cloud account/email";
        ```
        
    -   Grant the new user Superuser permissions.
        
        ```
        ALTER USER "Alibaba Cloud account/email" SUPERUSER;
        ```
        
    -   Add multiple users to a user group and grant the Owner permission on the table to the group.
        
        ```
        CREATE USER "Alibaba Cloud account ID/email";
        CREATE ROLE <rolename>;
        GRANT <rolename> TO "Alibaba Cloud account/email";
        ALTER TABLE <tablename> OWNER TO <rolename>;
        ```
        
    

## Grant permissions on future tables

The standard PostgreSQL authorization model does not grant permissions on future tables. You must use the [ALTER DEFAULT PRIVILEGES](https://www.postgresql.org/docs/11/sql-alterdefaultprivileges.html) statement to grant permissions on future tables. The procedure is as follows:

**Note**

-   This command does not affect existing logical objects.
    
-   This command can only set default permissions for TABLE, SCHEMA, FUNCTION, SEQUENCE, or TYPE.
    

1.  Grant permissions.
    
    -   After you grant default permissions, future tables created by a specific user in a specific schema can be queried by specified users or all users. The following are example statements.
        
        -   After you grant the permission, future tables created by user **p4\_id1** in the **public schema** can be queried by all users.
            
            ```
            ALTER DEFAULT PRIVILEGES FOR ROLE "p4_id1" IN SCHEMA public GRANT SELECT ON TABLES TO PUBLIC;
            ```
            
        -   After you grant the permission, future tables created by user **p4\_id1** in the **public schema** can be queried by user **p4\_id2**.
            
            ```
            ALTER DEFAULT PRIVILEGES FOR ROLE "p4_id1" IN SCHEMA public GRANT SELECT ON TABLES TO "p4_id2";
            ```
            
        -   After you grant the permission, future tables created by user **p4\_id1** in the **test schema** can be queried by all users.
            
            ```
            ALTER DEFAULT PRIVILEGES FOR ROLE "p4_id1" IN SCHEMA test GRANT SELECT ON TABLES TO PUBLIC;
            ```
            
    -   To revoke default permissions that have been set, use the following SQL statements.
        
        -   Revoke the default permission that allows all users to query future tables created by user **p4\_id1** in the **public schema**.
            
            ```
            ALTER DEFAULT PRIVILEGES FOR ROLE "p4_id1" IN SCHEMA public REVOKE SELECT ON TABLES FROM PUBLIC;
            ```
            
        -   Revoke the default permission that allows user **p4\_id2** to query future tables created by user **p4\_id1** in the **public schema**.
            
            ```
            ALTER DEFAULT PRIVILEGES FOR ROLE "p4_id1" IN SCHEMA public REVOKE SELECT ON TABLES FROM "p4_id2";
            ```
            
        -   Revoke the default permission that allows all users to query future tables created by user **p4\_id1** in the **test schema**.
            
            ```
            ALTER DEFAULT PRIVILEGES FOR ROLE "p4_id1" IN SCHEMA test REVOKE SELECT ON TABLES FROM PUBLIC;
            ```
            
    
2.  Verify that the default permissions are set.
    
    -   Use the \\ddp command in the psql client to check whether ALTER DEFAULT PRIVILEGES was successful.
        
    -   Use the following SQL command to query directly in Hologres.
        
        ```
        SELECT pg_catalog.pg_get_userbyid(d.defaclrole) AS "Owner",
          n.nspname AS "Schema",
          CASE d.defaclobjtype WHEN 'r' THEN 'table' WHEN 'S' THEN 'sequence' WHEN 'f' THEN 'function' WHEN 'T' THEN 'type' WHEN 'n' THEN 'schema' END AS "Type",
          pg_catalog.array_to_string(d.defaclacl, E'\n') AS "Access privileges"
        FROM pg_catalog.pg_default_acl d
             LEFT JOIN pg_catalog.pg_namespace n ON n.oid = d.defaclnamespace
        ORDER BY 1, 2, 3;
        ```
        
    
    When a new table is created, Hologres uses the current user and schema to find a matching item in the _pg\_catalog.pg\_default\_acl_ system table. If a matching ALTER DEFAULT PRIVILEGES item is found, Hologres adds the rule from the matching item for the user. The current user is determined as follows:
    
    -   If the current user is a User, the User is used for matching when a table is created.
        
    -   If a user named User executes the `SET SESSION ROLE GROUP1;` statement before creating a table, the current user becomes GROUP1. GROUP1 is then used for matching when the table is created.
        
    
    The matching rule is executed only when a table is created. If you execute the `ALTER TABLE SET OWNER TO` statement to change the table Owner after the table is created, the corresponding matching rule is not triggered.
    

## Revoking authorization in Expert Mode

The following example shows how to use the REVOKE statement to revoke user permissions. For more information about revoking permissions, see [REVOKE](https://www.postgresql.org/docs/11/sql-revoke.html).

```
-- If you revoke permissions from a RAM user, use the RAM user format for the account.
REVOKE SELECT ON TABLE tablename FROM "Alibaba Cloud account ID/email" ; 
```

## System table permissions

Starting from Hologres V3.0, when a user connects to a database in Postgres, the user can view information about all schemas and tables in the instance through the pg\_class, pg\_attribute, and pg\_namespace system tables. This is especially true when connecting with BI or development tools. These tools automatically retrieve the schema list, table list, and table column information from these three system tables. The user can obtain this metadata information from the system tables regardless of whether they have access permissions to the tables. To address this scenario, Hologres V3.0.23 and later support row-level permissions for the pg\_class, pg\_attribute, and pg\_namespace system tables. This ensures that only users with access permissions can see the corresponding metadata. Use the following Grand Unified Configuration (GUC) parameter to enable row-level permissions:

-   This GUC parameter only controls the pg\_class, pg\_attribute, and pg\_namespace system tables.
    
-   A Superuser must set this parameter. Execute it once for each database.
    
-   After this is set, only a Superuser, a user with Owner permission on an object (table or schema), or a user with any privilege on an object (table or schema) can see the corresponding metadata. Other users do not have permission to view it.
    

```
-- Set by a Superuser
ALTER DATABASE <database_name> SET hg_experimental_enable_catalog_rls = on;
```

**Note**

For more information about system tables, see [System tables](/help/en/hologres/developer-reference/system-tables#section-01p-hgi-gjj).

## View permissions

Use the following SQL commands to view user roles and permissions.

```
SELECT ROLNAME FROM pg_roles;
SELECT user_display_name(ROLNAME) FROM pg_roles;
```

## Delete users

If you have connected to your instance with a development tool, you can use SQL statements to delete a RAM user. There are two scenarios.

-   Delete a regular user
    
    If you delete a regular user and the account has not created other objects such as tables, views, or extensions, you can execute the following command or delete the user directly in HoloWeb.
    
    ```
    drop user "Alibaba Cloud account ID/email";
    ```
    
-   Delete a Superuser or other administrator
    
    If you want to delete a Superuser, Admin, or other administrator who has created objects such as tables, views, or extensions in the instance and is the owner of these objects (especially in the standard PostgreSQL authorization model), a direct deletion will fail. You must first transfer the ownership of the objects under the account. Execute the following commands.
    
    ```
    -- Transfer objects from account A to account B
    reassign owned by "A Alibaba Cloud account ID" to "B Alibaba Cloud account ID";     
    -- Delete account A
    drop user "A Alibaba Cloud account ID";
    ```
    

You can use the following methods to delete a RAM user from an instance:

```
DROP USER "Alibaba Cloud account ID/email";
```

**Important**

After a RAM user is deleted, the user can no longer connect to the instance or access any objects within it. Proceed with caution.

Standard PostgreSQL has a very strict division of permissions. We provide best practices that you can choose from and refer to based on your business needs. For more information, see [Grant permissions based on the standard PostgreSQL permission model](/help/en/hologres/use-cases/authorize-roles-based-on-postgresql-privileges#task-2558618).
