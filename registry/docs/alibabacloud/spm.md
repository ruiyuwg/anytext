This topic describes the simple permission model (SPM) of Hologres.

## Background information

Hologres is compatible with PostgreSQL and allows you to use the standard PostgreSQL authorization model. For more information, see [Standard PostgreSQL authorization model](/help/en/hologres/security-and-compliance/standard-postgresql-authorization-model#task-1917508). The standard PostgreSQL authorization model strictly divides permissions. This model is complex to use in actual business scenarios. It has the following typical pain points:

-   If you need to grant permissions to a user, you must execute a large number of authorization statements.
    
-   Different roles require different permissions, which makes permission granting cumbersome. In addition, if an authorization statement is missing when you grant permissions to a user, the user cannot perform the corresponding operations.
    
-   You must execute the same authorization statements to authorize every new user, which is time-consuming.
    
-   Although Hologres provides standard PostgreSQL authorization statements for reference, you may fail to execute the right authorization statements for various permissions due to your own habits. This may lead to chaos in permission management and bring risks to your business as well as increased costs in management, time, and use.
    

To remove the preceding pain points, Hologres develops the SPM, which is based on the standard PostgreSQL authorization model but manages permissions in a coarse-grained manner. The SPM manages permissions on the level of databases and provides the following roles: admin, developer, writer, and viewer. You can manage the permissions on objects in a database by using a few functions in a convenient and secure way.

## SPM overview

The SPM provides the following roles for each database:

-   {db}\_admin: database administrator
    
-   {db}\_developer: developer
    
-   {db}\_writer: reader and writer
    
-   {db}\_viewer: analyst
    

The following table describes the permissions of each role.

**Role**

**Permission**

{db}\_admin

-   The administrator of a database.
    
-   Has the permissions of the {db}\_developer, {db}\_writer, and {db}\_viewer groups.
    
-   Owns the database and has the permission to delete the database.
    
-   Has the permissions to add and remove members in the {db}\_admin, {db}\_developer, {db}\_writer, and {db}\_viewer groups of the database.
    
-   Has the permissions to query, add, modify, and delete objects such as schemas in the database.
    
-   Has the permission to modify the configurations of the database.
    

{db}\_developer

-   The developer of a database.
    
-   Has the permissions of the {db}\_writer and {db}\_viewer groups.
    
-   Owns all non-system objects of all schemas in the database, including tables, foreign tables, and table-like objects such as views, functions, procedures, foreign servers, foreign data wrappers, types, and languages. In addition, developers can query, add, modify, and delete tables in all schemas.
    
-   Has the USAGE and CREATE permissions on all schemas and can execute data definition language (DDL) statements to create tables, views, and foreign tables in all non-system schemas.
    

{db}\_writer

-   The reader and writer of a database.
    
-   Has the permissions of the {db}\_viewer group.
    
-   Has the permissions to execute the SELECT, INSERT, UPDATE, and DELETE statements on all tables, foreign tables, and table-like objects such as views in all schemas.
    
-   Has the permissions to query, add, modify, and delete all schemas in the database.
    
-   Has the permissions to access and use all objects that are owned by developers of the database, including functions, procedures, foreign servers, foreign data wrappers, types, and languages.
    
-   Has the USAGE permission on all schemas but cannot execute DDL statements.
    

{db}\_viewer

-   The analysts of a database.
    
-   Has the SELECT permission on all tables, foreign tables, and table-like objects such as views in all schemas.
    
-   Has the permissions to access and use all objects that are owned by developers of the database, including functions, procedures, foreign servers, foreign data wrappers, types, and languages.
    
-   Has the USAGE permission on all schemas.
