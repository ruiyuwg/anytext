This topic describes the schema-level permission model (SLPM) in Hologres.

## Background information

Hologres is compatible with PostgreSQL and allows you to use the standard PostgreSQL authorization model. For more information, see [Standard PostgreSQL authorization model](/help/en/hologres/security-and-compliance/standard-postgresql-authorization-model#task-1917508). In the standard PostgreSQL authorization model, permissions are managed in a fine-grained manner. To simplify operations, Hologres provides the following simple permission models for different business scenarios:

-   Simple permission model (SPM): allows you to grant a user database-level permissions with ease. For more information, see [Simple permission model](/help/en/hologres/security-and-compliance/simple-permission-model/#concept-2449386).
    
-   SLPM: divides permissions based on schemas. Compared with SPM, SLPM manages permissions at a finer grain than SPM. If you want to divide permissions in a strict manner and grant permissions with ease, we recommend that you use the SLPM model.
    
    **Note**
    
    In the Hologres console, you cannot grant user permissions by using SLPM. You must use a development tool to connect to a Hologres instance and execute SQL statements to grant permissions.
    

## User groups and permissions in SLPM

After you enable SLPM, the following user groups with different permissions are generated for each database:

-   Superuser
    
-   {db}.admin
    
-   {db}.{schema}.developer
    
-   {db}.{schema}.writer
    
-   {db}.{schema}.viewer
    

The following table describes the permissions of each user group.

**User group**

**Permissions**

Superuser

Serves as an administrator of a Hologres instance and has all permissions on the instance.

{db}.admin

-   Serves as an administrator of a database.
    
-   Has all permissions of the {db}.{schema}.developer, {db}.{schema}.writer, and {db}.{schema}.viewer groups of the database.
    
-   Owns the database and has permissions to delete the database.
    
-   Has permissions to manage members in the {db}.admin, {db}.{schema}.developer, {db}.{schema}.writer, and {db}.{schema}.viewer groups of the database. For example, a database administrator can add members to or remove members from these groups.
    
-   Has permissions to query, add, modify, and delete objects such as schemas in the database.
    
-   Has permissions to modify the configurations of the database.
    

{db}.{schema}.developer

-   Serves as a developer of a schema in a database.
    
-   Has all permissions of the {db}.{schema}.writer and {db}.{schema}.viewer groups.
    
-   Owns all non-system objects in the schema, including tables, foreign tables, and table-like objects such as views, functions, procedures, foreign servers, foreign data wrappers (FDWs), types, and languages. In addition, developers can query, add, modify, and delete tables in the schema.
    
-   Has permissions to use database-level foreign servers, FDWs, types, and languages.
    
-   Has the USAGE and CREATE permissions on the schema and can use data definition language (DDL) to create tables, views, and foreign tables in the schema.
    

{db}.{schema}.writer

-   Serves as a writer of a schema in a database.
    
-   Has all permissions of the {db}.{schema}.viewer group.
    
-   Has permissions to execute the SELECT, INSERT, UPDATE, and DELETE statements on all tables, foreign tables, and table-like objects such as views in the schema.
    
-   Has permissions to query, add, modify, and delete objects in the schema.
    
-   Has permissions to access or use functions and procedures in the schema.
    
-   Has permissions to use database-level foreign servers, FDWs, types, and languages.
    
-   Has the USAGE permission but cannot execute DDL statements on the schema.
    

{db}.{schema}.viewer

-   Serves as an analyst of a schema in a database.
    
-   Has the SELECT permission on all tables, foreign tables, and table-like objects such as views in the schema.
    
-   Has permissions to access or use functions and procedures in the schema.
    
-   Has permissions to use database-level foreign servers, FDWs, types, and languages.
    
-   Has the USAGE permission on the schema.
