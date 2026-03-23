This topic describes the functions that you can call to manage the simple permission model (SPM) in Hologres.

## Function overview

This topic describes the functions and features of the simple permission model.

-   [spm\_enable](#section-3jy-fy7-o1f): Enables the simple permission model.
    
-   [spm\_migrate](#section-kp0-48p-ykm): Migrates existing instance objects, such as tables, views, and foreign tables, to the SPM permission model.
    
-   [spm\_create\_user](#section-6gf-zbc-oon): Creates a user with only logon permissions. You must grant specific permissions to the user for development.
    
-   [spm\_grant](#section-tll-nnm-dj1): Adds a user to a user group.
    
-   [spm\_revoke](#section-ypq-e9k-v8i): Removes a user from a user group.
    
-   [spm\_disable](#section-13d-pfx-0c1): Disables the simple permission model for the current DB.
    
-   [spm\_cleanup](#section-31l-h1r-bfb): Purges the SPM-reserved user groups from a DB.
    

## spm\_enable

-   Description
    
    The spm\_enable() function enables the simple permission model.
    
    After you call the spm\_enable() function, the system automatically creates four user groups: {db}\_admin, {db}\_developer, {db}\_writer, and {db}\_viewer.
    
-   Syntax
    
    ```
    CALL spm_enable();
    ```
    
    **Note**
    
    Only a superuser of the instance can call the spm\_enable() function.
    
-   Usage notes
    
    The following changes occur after you call the spm\_enable() function to enable SPM:
    
    -   All permissions on the DB are revoked from the PUBLIC user group. As a result, users without explicit permissions cannot connect to the target DB.
        
    -   All permissions on all schemas in the DB are revoked from the PUBLIC user group.
        
    -   The {db}\_admin, {db}\_developer, {db}\_writer, and {db}\_viewer groups can all connect to the DB.
        
    -   The {db}\_admin group becomes the owner of the DB and all schemas in the DB.
        
    -   The {db}\_developer, {db}\_writer, and {db}\_viewer groups have the USAGE permission on all schemas. The {db}\_developer group also has the CREATE permission on all schemas.
        
    -   The {db}\_developer group becomes the owner of objects created by members of the {db}\_admin and {db}\_developer groups. The {db}\_writer group is granted read-write permissions, and the {db}\_viewer group is granted read-only permissions.
        
    

## spm\_migrate

-   Description
    
    The spm\_migrate() function migrates existing instance objects, such as tables, views, and foreign tables, to the SPM permission model.
    
-   Syntax
    
    ```
    CALL spm_migrate( [ batch_size ] );
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Value range**
    
    batch\_size
    
    The size of objects per batch migration.
    
    If you set this parameter to 0, the current value of [max\_locks\_per\_transaction](https://www.postgresql.org/docs/9.1/runtime-config-locks.html) is used as the batch size.
    
    The value must be within the range of \[0, max\_locks\_per\_transaction\]. Values outside this range are invalid. You can run the `show max_locks_per_transaction;` SQL command to view the actual value of max\_locks\_per\_transaction.
    
    If your instance has many objects (thousands or tens of thousands) to switch to the simple permission model, you must run the spm\_migrate() function multiple times until all objects are switched.
    
    In addition, join the Hologres real-time data warehouse communication group to request an increase of the **max\_locks\_per\_transaction** parameter value, and then perform the operation. For more information about how to join the group, see [Get more online support](/help/en/hologres/support/obtain-online-support-for-hologres).
    
-   Usage notes
    
    -   If the `DONE BUT NOT COMPLETED` message is returned after you call the spm\_migrate() function, not all objects are migrated. You must call spm\_migrate() again.
        
    -   If the `COMPLETED` message is returned, all objects are migrated.
        
-   Examples
    
    ```
    CALL spm_migrate(); // Switch a maximum of max_locks_per_transaction objects to SPM management.
    
    CALL spm_migrate(128); // Switch 128 objects to SPM management.
    ```
    

## spm\_create\_user

-   Description
    
    The spm\_create\_user() function creates a user in the simple permission model. The created user has only logon permissions. You must grant the user specific permissions for development.
    
    **Note**
    
    Only a superuser or a member of the {db}\_admin group can call this function.
    
-   Syntax
    
    ```
    CALL spm_create_user( user_name [, role_name] );
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    user\_name
    
    The username to create. The format is as follows:
    
    -   An Alibaba Cloud account, such as 13432193xxxx or x\*@aliyun.com.
        
    -   A RAM user account, such as RAM$mainaccount:subuser or p4\_202338382183xxx.
        
    
    role\_name
    
    When you create a user, you can add the user to one of the following user groups as needed:
    
    -   {db}\_admin
        
    -   {db}\_developer
        
    -   {db}\_writer
        
    -   {db}\_viewer
        
    
-   Examples
    
    ```
    CALL spm_create_user('my_t***@aliyun.com');
    CALL spm_create_user('RAM$my_test:mysubuser', 'mydb_developer');
    CALL spm_create_user('13532313103042xxx');
    CALL spm_create_user('p4_23319103042xxx', 'mydb_admin');
    ```
    

## spm\_grant

-   Description
    
    The spm\_grant() function adds a user to the {db}\_admin, {db}\_developer, {db}\_writer, or {db}\_viewer user group.
    
    **Note**
    
    Only a superuser or a member of the {db}\_admin group can call this function.
    
-   Syntax
    
    ```
    CALL spm_grant( role_name, user_name );
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    role\_name
    
    You can add the user to one of the following user groups as needed:
    
    -   {db}\_admin
        
    -   {db}\_developer
        
    -   {db}\_writer
        
    -   {db}\_viewer
        
    
    For more information about the permissions of user groups, see [Simple permission model (SPM)](/help/en/hologres/security-and-compliance/simple-permission-model/#concept-2449386).
    
    user\_name
    
    The username to add to the user group. The format is as follows:
    
    -   An Alibaba Cloud account, such as 13432193xxxx or x\*@aliyun.com.
        
    -   A RAM user account, such as RAM$mainaccount:subuser or p4\_202338382183xxx.
        
    
-   Usage notes
    
    -   You can call this function only after the simple permission model is enabled.
        
    -   The user\_name must be an Alibaba Cloud account or an Alibaba Cloud account ID.
        
    -   The role\_name must be {db}\_admin, {db}\_developer, {db}\_writer, or {db}\_viewer.
        
-   Examples
    
    ```
    CALL spm_grant('mydb_developer', 'p4_202338382183xxx');// Grant the developer permission for the mydb database to the RAM user.
    CALL spm_grant('mydb_admin', 'RAM$my_test:xxx');// Grant the admin permission for the mydb database to the RAM user.
    CALL spm_grant('otherdb_admin', '13532313103042xxx'); // Error. To add a user to a role of another DB, connect to that DB and run the spm_grant function.
    ```
    

## spm\_revoke

-   Description
    
    The spm\_revoke() function removes a user from the {db}\_admin, {db}\_developer, {db}\_writer, or {db}\_viewer user group.
    
    **Note**
    
    Only a superuser or a member of the {db}\_admin group can call this function.
    
-   Syntax
    
    ```
    CALL spm_revoke( role_name, user_name );
    ```
    
-   Usage notes
    
    -   You can call this function only after the simple permission model is enabled.
        
    -   The user\_name must be an Alibaba Cloud account or an Alibaba Cloud account ID.
        
    -   The role\_name must be {db}\_admin, {db}\_developer, {db}\_writer, or {db}\_viewer.
        
-   Examples
    
    ```
    CALL spm_revoke('mydb_developer', 'p4_202338382183xxx');// Remove the RAM user from the developer group of the mydb database.
    CALL spm_revoke('mydb_admin', 'RAM$my_test:xxx');// Remove the RAM user from the admin group of the mydb database.
    CALL spm_revoke('otherdb_admin', '13532313103042xxx'); // Error. To remove a user from a user group of another DB, connect to that DB and run spm_revoke.
    ```
    

## spm\_disable

-   Description
    
    The spm\_disable() function disables the simple permission model for the current DB.
    
    **Note**
    
    Only a superuser can call this function.
    
-   Syntax
    
    ```
    CALL spm_disable();
    ```
    
-   Usage notes
    
    The following steps describe how to shut down SPM:
    
    -   The {db}\_admin, {db}\_developer, {db}\_writer, and {db}\_viewer user groups are retained. You can use authorization statements in expert mode to add users to these user groups for permission management. The database object owner remains {db}\_developer.
        
    -   The CONNECT and TEMPORARY permissions on the DB are granted to PUBLIC.
        
    -   The USAGE and CREATE permissions on the public schema in the DB are granted to PUBLIC.
        
    -   The EXECUTE permission on functions and procedures in the public schema of the DB is granted to PUBLIC.
        
    -   The USAGE permission on user-defined LANGUAGEs is granted to PUBLIC.
        
    -   The USAGE permission on user-defined TYPEs is granted to PUBLIC.
        
    
-   Examples
    
    ```
    CALL spm_disable();
    ```
    

## spm\_cleanup

-   Description
    
    The spm\_cleanup() function purges the SPM-reserved user groups from a DB, including {db}\_admin, {db}\_developer, {db}\_writer, and {db}\_viewer.
    
    **Note**
    
    Only a superuser can call this function.
    
-   Syntax
    
    ```
    CALL spm_cleanup( db_name [, batch_size ] );
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Value range**
    
    db\_name
    
    The DB from which to purge the user group. Enclose a db\_name that contains special characters or uppercase letters in double quotation marks. For example, `"MYDB"`.
    
    None
    
    batch\_size
    
    The number of objects to migrate in a single batch.
    
    A value of 0 indicates that the current [max\_locks\_per\_transaction](https://www.postgresql.org/docs/9.1/runtime-config-locks.html) value is used as the batch\_size.
    
    \[0, max\_locks\_per\_transaction\]. Values outside this range are invalid.
    
    If your instance has many objects to migrate, such as thousands or even tens of thousands, a lock overflow may occur. If this happens, execute the spm\_migrate() function multiple times until all objects are migrated.
    
    Also, join the Hologres communication group to request an increase in the **max\_locks\_per\_transaction** parameter value, and then execute the migration. For information about how to join the group, see How can I get more online support?.
    
-   Usage notes
    
    -   If the `DONE BUT NOT COMPLETED` message is returned, the cleanup is incomplete and the reserved user groups are not deleted. You must call the spm\_cleanup() function again.
        
    -   If the `COMPLETED` message is returned, the cleanup is complete and the reserved user groups are deleted. You do not need to call this function again.
        
-   Examples
    
    ```
    CALL spm_cleanup('mydb'); // Transfer the ownership of a maximum of max_locks_per_transaction objects to the current_user at a time.
    CALL spm_cleanup('mydb', 128);// Transfer the ownership of 128 objects to the current_user at a time.
    ```
    
    -   Scenario 1: Delete the DB, and then purge the user groups.
        
        ```
        drop database mydb;
        CALL spm_cleanup('mydb');  // No retry is needed. The operation succeeds in one go.
        ```
        
    -   Scenario 2: If the DB still exists, you must connect to the DB to perform the purge.
        
        ```
         CALL spm_cleanup('otherdb');
        ERROR:  Permission Denied. execute in database otherdb, or drop database before call spm_cleanup.
        ```
        
    

## Function call permissions

The following table describes the function call permissions for different user groups.

**Function**

**Functions**

**Superuser**

**db\_admin**

**db\_developer | db\_writer | db\_viewer**

spm\_enable

Enables the simple permission model.

Yes, it is.

No

No

spm\_disable

Disables the simple permission model.

Yes.

Not granted

No

spm\_grant

Adds a user to a group.

Yes, it is.

Yes, it is.

No

spm\_revoke

Removes a user from a group.

Yes, it is.

Granted

No

spm\_migrate

Migrates existing tables or table-like objects to SPM management.

Yes.

Granted

No

spm\_cleanup

Deletes all reserved user groups of a DB.

Yes.

No

No.

spm\_create\_user

Creates a simple user that has only logon permissions.

Yes, it is.

Yes, it is.

No

## Restricted permission commands

After you enable the simple permission model, some permission-related commands are restricted. The following table describes the commands that are restricted in the simple permission model.

**Statement**

**Description**

alter table owner to xx

The owner of all tables is automatically the developer user group of the corresponding schema. The owner cannot be changed and does not need to be changed manually.

grant

After you add a user to a user group using `spm_grant`, you do not need to run the grant statement.

revoke

When adding a user to a user group with `spm_revoke`, you do not need to execute a revoke statement.

alter default privileges

In the previous permission model, authorization is effective only for current and past tables. You must grant permissions again for future tables. In the simple model, you do not need to consider the creation time of tables. You only need to add a user to a user group to grant the corresponding permissions. Therefore, you do not need to grant permissions for future tables.

create role / drop role / alter role / alter role set default user group

The db\_admin, db\_developer, db\_writer, and db\_viewer user groups are default system user groups. They are automatically generated after the simple permission model is enabled. Users, including superusers, are not allowed to create or modify these default user groups.

rename to/from default user group

You cannot rename the reserved user groups `(*_admin, *_developer, *_writer, *_viewer)`.
