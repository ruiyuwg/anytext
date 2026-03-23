This topic describes how an Alibaba Cloud account can use the simple permission model and the standard PostgreSQL authorization model to grant development permissions on an instance to a Resource Access Management (RAM) user.

## Background information

By default, the Alibaba Cloud account that purchased the instance is set as the super administrator (Superuser). A Superuser has all permissions on the instance, such as creating and deleting databases, creating roles, and granting permissions to roles.

Note the following about RAM user permissions:

-   An Alibaba Cloud account must grant permissions to a RAM user before the RAM user can access an instance. A RAM user can also be granted Superuser permissions.
    
-   Even if a RAM user has permission to purchase instances, an Alibaba Cloud account must grant development permissions to the user before they can perform data development in a Hologres instance.
    

The access control for RAM permissions is different from the access control for instance development permissions. For more information, see [Grant access to Hologres for RAM users](/help/en/hologres/security-and-compliance/grant-permissions-on-hologres-to-ram-users#task-1995156).

## Grant permissions to a RAM user using the simple permission model (recommended)

1.  **Optional:** Grant permissions to the user.
    
    The simple permission model also supports using SQL statements to grant permissions to RAM users. For more information, see [Use the simple permission model](/help/en/hologres/security-and-compliance/use-the-spm#task-1961231).
    

## Grant permissions to a RAM user using the standard PostgreSQL authorization model

The following steps describe how to grant permissions to a RAM user using the expert authorization model:

1.  Create a user.
    
    Create a RAM user in the Hologres instance. The following code provides sample statements.
    
    ```
    CREATE USER "p4_AccountID"; // The ID is the UID of the Alibaba Cloud RAM user.
    CREATE USER "p4_AccountID" SUPERUSER; // Grant Superuser permissions to the RAM user.
    ```
    
2.  Grant permissions to the user.
    
    A RAM user must be granted the required permissions to access objects within their permission scope. The following code provides sample authorization statements.
    
    ```
    GRANT SELECT ON TABLE TABLENAME TO "AccountID"; // Grant the RAM user the permission to view the table.
    GRANT SELECT,INSERT,UPDATE ON ALL TABLES IN SCHEMA PUBLIC TO "p4_AccountID"; // Grant the RAM user the permissions to add, modify, and view all tables.
    ```
    
    **Note**
    
    Only a Superuser or the table owner can delete a table.
    
    For more information about authorization operations in the standard PostgreSQL authorization model, see [Standard PostgreSQL authorization model](/help/en/hologres/security-and-compliance/standard-postgresql-authorization-model#task-1917508).
    

## Use Hologres as a RAM user

After the authorization is complete, the RAM user can connect to and use the Hologres instance from a PSQL client. For more information, see [PSQL client](/help/en/hologres/user-guide/use-the-postgresql-client-to-connect-to-hologres#task-1928661).

The following shows an example statement.

```
PGUSER=<AccessID> PGPASSWORD=<AccessKey> psql -p <Port> -h <Endpoint> -d <Database>
```

## View the permissions of a RAM user

Use SQL statements to view the permissions of a RAM user.

After you connect a developer tool to a Hologres instance, you can use the following SQL statements to view the permissions of a RAM user.

```
SELECT * FROM pg_roles WHERE rolname = 'p4_ID'; //View the roles that a member has.
SELECT rolname FROM pg_roles;
SELECT user_display_name(rolname) FROM pg_roles;
```

**Note**

You can use the `SELECT * FROM pg_catalog.pg_roles;` command to view the permissions of all users.
