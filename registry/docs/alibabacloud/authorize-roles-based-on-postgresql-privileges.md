This topic describes best practices for granting permissions in Hologres using the standard PostgreSQL authorization model (also known as the expert permission model). These practices help simplify permission operations and enable fine-grained permission management.

## Background information

Hologres is compatible with the PostgreSQL ecosystem and supports the standard PostgreSQL permission model (referred to as the expert permission model). Hologres also provides a simple permission model (SPM) for authorization. For details, see [Simple permission model (SPM)](/help/en/hologres/security-and-compliance/simple-permission-model/#concept-2449386).

The simple permission model uses coarse-grained permissions and is not suitable for scenarios requiring fine-grained permission control. The standard PostgreSQL authorization model offers detailed permission granularity. If you need fine-grained permission management, follow the best practices in this topic.

## Introduction to the PostgreSQL permission model

The standard PostgreSQL authorization model provides a detailed permission management system. For more information, see [PostgreSQL authorization](https://www.postgresql.org/docs/11/sql-createuser.html).

PostgreSQL authorization has the following limitations:

-   PostgreSQL authorization applies only to existing objects and does not affect future objects. The following example illustrates this behavior.
    
    1.  User1 runs the statement `GRANT SELECT ON ALL TABLES IN SCHEMA public TO User2;` to grant User2 SELECT permission on all tables in the **public** schema.
        
    2.  User1 creates a new table named table\_new in the **public** schema.
        
    3.  When User2 runs the statement `SELECT * FROM table_new`, the system returns the error `Permission denied`.
        
        The aforementioned error occurs because when User1 granted SELECT permission to User2, the grant included only the tables that existed in the **public** schema at the time of granting and did not include tables created later in the **public** schema.
        
-   You can use the `ALTER DEFAULT PRIVILEGES` statement to set default permissions for future objects. For details, see [ALTER DEFAULT PRIVILEGES](https://www.postgresql.org/docs/11/sql-alterdefaultprivileges.html). These permissions apply only to future objects. The following example shows how to use this statement.
    
    ```
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO PUBLIC; -- Grants read permission on newly created tables in the public schema to the current user.
    ```
    
    You can also use the `ALTER DEFAULT PRIVILEGES FOR ROLE xxx` statement to create default permissions for other roles. You can successfully set the default permissions only if the current user and xxx meet the following conditions:
    
    -   The current user is a member of the group xxx.
        
    -   The current user is a superuser, and xxx is a user or group.
        
    
    You can use the psql command `\ddp` (which queries the system table `pg_catalog.pg_default_acl`) to verify whether `ALTER DEFAULT PRIVILEGES` was configured correctly.
    
    `ALTER DEFAULT PRIVILEGES` works like a trigger. When a new table is created, Hologres checks the `pg_catalog.pg_default_acl` system table for a matching rule based on the current user and schema. If a match exists, the system automatically applies the rule.
    
    **Note**
    
    -   Matching uses only the current user, not the user's groups.
        
    -   The `alter default privileges` rules are evaluated only when a table is created. Changing the table owner later (using `alter table tablename owner to`) does not trigger `alter default privileges`.
        
    
    For example, suppose User1 belongs to Group1, and you want to grant full permissions on future tables to Group1. Consider the following cases:
    
    -   If the current user is User1, no rule matches during table creation.
        
    -   If you run `set session role group1;` before creating the table to switch the current user to Group1, the rule matches, and the system automatically grants permissions on the new table.
        
    
-   Only the table owner can delete the table.
    
    In standard PostgreSQL authorization, determine whether a role can delete a table based on ownership. The following roles can delete a table:
    
    -   The table owner (the user who created the table).
        
    -   The schema owner.
        
    -   A superuser.
        
    
-   In PostgreSQL, the system automatically assigns ownership of a newly created table to the creating user, who then holds all permissions on the table, including the ability to delete it.
    
    To change the table owner, use a statement such as the following:
    
    ```
    ALTER TABLE <tablename> OWNER TO user2; // Changes the table owner from User1 to User2.
    ALTER TABLE <tablename> OWNER TO group1;// Changes the table owner to Group1.
    ```
    
    Changing the table owner is subject to the following restrictions:
    
    -   User1 must be the current table owner.
        
    -   User1 must be a direct or indirect member of Group1.
        
        For example, User1 is either a direct member of Group1 or a member of a subgroup within Group1.
        
    -   Group1 must have CREATE permission on the schema containing the table.
        
    -   A superuser can change the owner of any table.
        
    

## Planning for the PostgreSQL permission model

The standard PostgreSQL (expert permission model) provides fine-grained permissions. Before using it, plan permissions for your instance objects as follows:

-   How many permission groups are there in total?
    
-   What is the purpose of each group?
    
-   Which users belong to each group?
    
-   Which roles can delete tables, and when?
    
-   In which schemas does each group work?
    

We recommend the following steps to plan your instance objects:

-   Define permission groups and their purposes.
    
    Permission groups fall into the following types:
    
    -   XX\_DEV\_GROUP: Table owner with full permissions on tables.
        
    -   XX\_WRITE\_GROUP: Write permission to insert data into specific tables.
        
    -   XX\_VIEW\_GROUP: Read permission to view data in specific tables.
        
    
    XX represents a project. For example, the PROJ1 project includes the groups PROJ1\_DEV\_GROUP, PROJ1\_WRITE\_GROUP, and PROJ1\_VIEW\_GROUP.
    
    **Note**
    
    The naming convention for groups is a recommendation only and is not mandatory.
    
-   Determine the schema for each permission group.
    
    We recommend assigning one schema per project.
    
    A DEV\_GROUP can own multiple tables, but each table belongs to only one DEV\_GROUP. For example, if TABLE1 belongs to PROJ1\_DEV\_GROUP, it cannot belong to PROJ2\_DEV\_GROUP.
    
    A user can belong to multiple DEV\_GROUPS. For example, User1 can be a member of both PROJ1\_DEV\_GROUP and PROJ2\_DEV\_GROUP.
    

## Hologres expert permission model best practice 1

This practice uses tables as an example. You can apply the same approach to other objects.

The table owner is the corresponding XXX\_DEV\_GROUP. Therefore, any member of the DEV\_GROUP can manage or delete the table.

For example, after a user is added to the PROJ1\_DEV\_GROUP, they gain permission to manage or delete tables in the PROJ1 project. Follow these steps:

1.  Create user groups.
    
    Based on your business needs, divide permissions and have a superuser create the required groups. For the PROJ1 project, run the following statements:
    
    ```
    CREATE ROLE PROJ1_DEV_GROUP; // Table owner with full permissions on tables.
    CREATE ROLE PROJ1_WRITE_GROUP; // Write permission to insert data into specific tables.
    CREATE ROLE PROJ1_VIEW_GROUP; // Read permission to view data in specific tables.
    ```
    
2.  Grant schema permissions to user groups.
    
    Grant the newly created groups permissions on the schema. For example, if PROJ1 works in SCHEMA1, run the following statements:
    
    ```
    -- Grant relevant permissions in SCHEMA1 to PROJ1.
    GRANT CREATE,usage ON schema SCHEMA1 TO PROJ1_DEV_GROUP;
    GRANT usage ON schema SCHEMA1 TO PROJ1_WRITE_GROUP;
    GRANT usage ON schema SCHEMA1 TO PROJ1_VIEW_GROUP;
    ```
    
    **Note**
    
    -   One project can correspond to multiple schemas, and one schema can correspond to multiple projects.
        
    -   By default, all users have CREATE and USAGE permissions in the **public** schema.
        
    
3.  Create users and manage user groups.
    
    After granting schema permissions, the superuser must create users and add them to the appropriate groups. Run the following statements:
    
    ```
    CREATE USER "USER1";
    GRANT PROJ1_DEV_GROUP TO "USER1"; 
    
    CREATE USER "USER2";
    GRANT PROJ1_VIEW_GROUP TO "USER2";
    ```
    
4.  Create tables and grant permissions.
    
    When creating tables or other objects, the creator (who must be a member of PROJ1\_DEV\_GROUP) or a superuser runs the necessary grant statements. Assume the new table is named TABLE1. Run the following statements:
    
    ```
    GRANT ALL ON TABLE SCHEMA1.TABLE1 TO PROJ1_WRITE_GROUP; // Grants PROJ1_WRITE_GROUP write permission on TABLE1.
    GRANT SELECT ON TABLE SCHEMA1.TABLE1 TO PROJ1_VIEW_GROUP; // Grants PROJ1_VIEW_GROUP SELECT permission on TABLE1.
    ALTER TABLE SCHEMA1.TABLE1 owner TO PROJ1_DEV_GROUP; // Changes the owner of TABLE1 to PROJ1_DEV_GROUP.
    ```
    

## Hologres expert permission model best practice 2

This practice uses the `ALTER DEFAULT PRIVILEGES` statement to simplify per-table authorization.

Determine in advance which project a newly created table belongs to. Follow these steps:

1.  Create user groups.
    
    Based on your business needs, divide permissions and have a superuser create the required groups. For the PROJ1 project, run the following statements:
    
    ```
    CREATE ROLE PROJ1_DEV_GROUP; // Table owner with full permissions on tables.
    CREATE ROLE PROJ1_WRITE_GROUP; // Write permission to insert data into specific tables.
    CREATE ROLE PROJ1_VIEW_GROUP; // Read permission to view data in specific tables.
    ```
    
2.  Grant schema permissions to user groups.
    
    Grant the newly created groups permissions on the schema. For example, if PROJ1 works in SCHEMA1, run the following statements:
    
    ```
    -- Grant relevant permissions in SCHEMA1 to PROJ1.
    GRANT CREATE,USAGE ON SCHEMA SCHEMA1 TO PROJ1_DEV_GROUP;
    GRANT USAGE ON SCHEMA SCHEMA1 TO PROJ1_WRITE_GROUP;
    GRANT USAGE ON SCHEMA SCHEMA1 TO PROJ1_VIEW_GROUP;
    ```
    
    **Note**
    
    -   One project can correspond to multiple schemas, and one schema can correspond to multiple projects.
        
    -   By default, all users have CREATE and USAGE permissions in the **public** schema.
        
    
3.  Create users and set default permissions.
    
    After granting schema permissions, the superuser creates users, adds them to the appropriate groups, and sets default permissions for tables they create.
    
    Tables created by USER1 default to PROJ1\_DEV\_GROUP, and USER1 is a valid Alibaba Cloud account. Run the following statements:
    
    ```
    CREATE USER "USER1";
    
    ALTER DEFAULT PRIVILEGES FOR ROLE "USER1" GRANT ALL ON  TABLES TO PROJ1_DEV_GROUP; // Grants PROJ1_DEV_GROUP read and write permission by default on tables created by USER1.
    ALTER DEFAULT PRIVILEGES FOR ROLE "USER1" GRANT ALL ON TABLES TO PROJ1_WRITE_GROUP; // Grants PROJ1_WRITE_GROUP read and write permission by default on tables created by USER1.
    ALTER DEFAULT PRIVILEGES FOR ROLE "USER1" GRANT SELECT ON TABLES TO PROJ1_VIEW_GROUP; // Grants PROJ1_VIEW_GROUP read permission by default on tables created by USER1.
    
    GRANT PROJ1_DEV_GROUP TO "USER1"; // Adds USER1 to PROJ1_DEV_GROUP.
    ```
    
4.  Change the table owner.
    
    If other members of the DEV\_GROUP need to manage or delete the table, change the table owner to the project's DEV\_GROUP (for example, PROJ1\_DEV\_GROUP).
    
    Only the table creator or a superuser can run the statement to change the table owner. In this example, the creator must be a member of PROJ1\_DEV\_GROUP. Assume the new table is named TABLE1. Run the following statement:
    
    ```
    ALTER TABLE SCHEMA1.TABLE1 OWNER TO PROJ1_DEV_GROUP; // Changes the owner of TABLE1 to PROJ1_DEV_GROUP.
    ```
    
    You can change the table owner in the following situations:
    
    -   A superuser periodically changes the owner of newly created tables.
        
    -   You change the owner before managing or deleting the table.
        
    
    **Note**
    
    If you know that only the table creator or a superuser will manage or delete the table, you can skip this step.
    
5.  Change a user's default project.
    
    To change a user's default project, the superuser or the user runs the `alter default privileges` command to revoke existing default permissions and then creates new default permissions using a new `alter default privileges` statement.
    
    To change USER1's default project from PROJ1 to PROJ2 (without affecting existing tables), run the following statements:
    
    ```
    -- Revoke existing default permissions.
    ALTER DEFAULT PRIVILEGES FOR ROLE "USER1" REVOKE ALL ON TABLES FROM PROJ1_DEV_GROUP;
    ALTER DEFAULT PRIVILEGES FOR ROLE "USER1" REVOKE ALL ON TABLES FROM PROJ1_WRITE_GROUP;
    ALTER DEFAULT PRIVILEGES FOR ROLE "USER1" REVOKE SELECT ON TABLES FROM PROJ1_VIEW_GROUP;
    
    -- Create new default permissions.
    ALTER DEFAULT PRIVILEGES FOR ROLE "USER1" GRANT ALL ON TABLES TO PROJ2_DEV_GROUP;
    ALTER DEFAULT PRIVILEGES FOR ROLE "USER1" GRANT ALL ON TABLES TO PROJ2_WRITE_GROUP;
    ALTER DEFAULT PRIVILEGES FOR ROLE "USER1" GRANT SELECT ON TABLES TO PROJ2_VIEW_GROUP;
    ```
