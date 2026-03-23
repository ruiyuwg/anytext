This topic describes how to use the simple permission model (SPM) in Hologres.

## Grant permissions using the simple permission model

In Hologres, you can use the simple permission model to grant permissions within an instance in the following ways:

-   Grant permissions using SQL statements
    
    After you connect to a Hologres instance using a development tool, you can run SQL statements in basic mode to grant a user the required instance permissions. The process is as follows:
    

1.  Enable function invocation.
    
    Before you enable SPM, run the following command to enable function invocation.
    
    ```
    create extension spm;
    ```
    
2.  Enable the simple permission model.
    
    The simple permission model is disabled by default. A Superuser must run the following statement in the target DB to enable it. For more information about the function, see [spm\_enable](/help/en/hologres/security-and-compliance/functions-of-the-spm#section-3jy-fy7-o1f).
    
    ```
    call spm_enable();  // Enable the simple permission model for the current DB.
    ```
    
    **Note**
    
    After the simple permission model is enabled, the developer user group has default permissions on all tables and table-like objects in all schemas of the DB.
    
3.  **Optional:** Migrate from the standard PostgreSQL authorization model.
    
    If your DB uses the standard PostgreSQL authorization model and contains objects such as tables, views, or foreign tables, you must migrate these objects to the simple permission model. Otherwise, table permissions will be lost, which can impact your business operations. To perform the migration, execute the following statement in your DB.
    
    ```
    call spm_migrate();  // Change the owner of existing objects in the DB to developer and manage them using SPM.
    ```
    
    If you have a newly created DB with no objects, you can skip this step.
    
    **Note**
    
    When you enable the simple permission model, make sure that no SQL statements are running in the current DB. Otherwise, the operation may fail and affect your service.
    
    Because migration may involve running the Alter Owner operation on many tables, this can trigger a PostgreSQL limit. The spm\_migrate function changes the owner for a number of objects up to the max\_locks\_per\_transaction limit in each run. You may need to run spm\_migrate multiple times until all objects are migrated. For more information about the function, see [spm\_migrate](/help/en/hologres/security-and-compliance/functions-of-the-spm#section-kp0-48p-ykm).
    
4.  Create a user.
    
    Before you grant permissions to a new user, you must create the user in the current instance. If the user already exists, you can skip this step.
    
    -   Alibaba Cloud accounts and Resource Access Management (RAM) users:
        
        ```
        call spm_create_user ('Alibaba Cloud account UID/Email address/RAM user'); // Create a user. If you use an email address, enclose it in double quotation marks.
        call spm_create_user ('Alibaba Cloud account UID/Email address/RAM user', '<dbname>_[admin|developer|writer|viewer]'); // Create a user and add the user to the corresponding user group.
        ```
        
        In the command, `dbname` is the name of the database in the current Hologres instance.
        
        Example: Add the RAM user `xxx.onaliyun.com` to the `developer` user group of the `testdb` database.
        
        ```
        call spm_create_user ('xxx.onaliyun.com', 'testdb_developer');
        ```
        
    -   Custom users:
        
        ```
        create user "BASIC$<user_name>" with password '<password>';
        ```
        
    
    **Note**
    
    -   For a RAM user, add the p4\_ prefix to the account UID when you run `spm_create_user`. For example, p4\_UID.
        
    -   For a custom user, the username cannot end with `admin`, `developer`, `writer`, `viewer`, or `all_users`.
        
    
5.  Grant permissions to the new user.
    
    After the new user is created in the instance, add the user to the appropriate user group in the DB to complete the authorization. After authorization, the RAM user can connect to the current DB using a development tool and perform development within the permitted scope. If the user was added to a user group during creation, you do not need to grant permissions again. For more information about the function, see [spm\_grant](/help/en/hologres/security-and-compliance/functions-of-the-spm#section-tll-nnm-dj1).
    
    In the following command, {dbname}\_\[admin|developer|writer|viewer\] specifies the name of the user group in the current DB to which you want to add the user. For more information, see [User groups](/help/en/hologres/security-and-compliance/simple-permission-model/#table-6s8-hkj-mm4).
    
    ```
    
    call spm_grant('{dbname}_[admin|developer|writer|viewer]', 'Alibaba Cloud account ID/Email address/RAM user'); // Add a user to a user group.
    ```
    
    The following examples show how to add users to user groups with different permissions.
    
    ```
    // Add a user to the admin group of a DB.
    call spm_grant('mydb_admin', 'p4_564306222995xxx'); // Add the RAM user 564306222995xxx to the admin group of the mydb database.
    call spm_grant('mydb_admin', '197006222995xxx'); // Add the Alibaba Cloud account 197006222995xxx to the admin group of the mydb database.
    call spm_grant('mydb_admin', 'ALIYUN$xxx'); // Add xxx@aliyun.com to the admin group of the mydb database.
    
    // Add a user to the developer group of a DB.
    call spm_grant('mydb_developer', 'p4_564306222995xxx'); // Add the RAM user 564306222995xxx to the developer group of the mydb database.
    call spm_grant('mydb_developer', '197006222995xxx'); // Add the Alibaba Cloud account 197006222995xxx to the developer group of the mydb database.
    call spm_grant('mydb_developer', 'RAM$mainaccount:subuser');// Add the RAM user subuser of the Alibaba Cloud account mainaccount to the developer group of the mydb database.
    
    // Add a user to the viewer group of a DB.
    call spm_grant('"MYDB_viewer"', 'p4_564306222995xxx'); // Add the RAM user 564306222995xxx to the viewer group of the "MYDB" database.
    call spm_grant('"MYDB_viewer"', '197006222995xxx'); // Add the Alibaba Cloud account 197006222995xxx to the viewer group of the "MYDB" database.
    call spm_grant('mydb_viewer', '"xxx@aliyun.com"'); // Add the account xxx@aliyun.com to the viewer group of the mydb database.
    ```
    

## Remove user group

In Hologres, you can use the simple permission model to remove a user from a user group in a DB in the following ways:

-   You can use an SQL statement to remove a user group
    
    To remove a user from a user group in a DB, run the following command. For more information about the function, see [spm\_revoke](/help/en/hologres/security-and-compliance/functions-of-the-spm#section-ypq-e9k-v8i).
    
    ```
    call spm_revoke('<dbname>_[admin|developer|writer|viewer]', 'Alibaba Cloud account ID/Email address/RAM user'); // Revoke the permissions of a user.
    
    // Examples:
    // Remove a user from the admin group of a DB.
    call spm_revoke('dbname_admin', 'p4_564306222995xxx');// Remove the RAM user 564306222995xxx from the admin group.
    call spm_revoke('dbname_admin', '197006222995xxx');// Remove the Alibaba Cloud account 197006222995xxx from the admin group.
    call spm_revoke('dbname_admin', 'xxx@aliyun.com');// Remove the account xxx@aliyun.com from the admin group.
    
    // Remove a user from the developer group of a DB.
    call spm_revoke('mydb_developer', 'RAM$mainaccount:subuser'); // Remove the RAM user subuser from the developer group of the mydb database.
    call spm_revoke('mydb_developer', 'p4_564306222995xxx');// Remove the RAM user 564306222995xxx from the developer group.
    
    // Remove a user from the viewer group of a DB.
    call spm_revoke('"MYDB_viewer"', 'p4_564306222995xxx'); // Remove the RAM user 564306222995xxx from the viewer group of the "MYDB" database.
    ```
    

## Delete a user

To delete a user from an instance, run the following statement.

**Important**

Deleting a user removes them from the current instance and revokes all their permissions on the instance. Proceed with caution.

```
DROP ROLE "Alibaba Cloud account ID/Email address/RAM user"; // Directly delete the user from the instance.
```

## (Optional) Switch the expert model to the simple permission model

If your DB uses the [standard PostgreSQL authorization model](/help/en/hologres/security-and-compliance/standard-postgresql-authorization-model#task-1917508) and contains objects such as tables, views, or foreign tables, you can enable the simple permission model for better permission management. You can call the spm\_migrate function to migrate existing objects to the simple permission model. Run the following statement in the DB.

```
call spm_migrate();  // Change the owner of existing objects in the DB to developer and manage them using SPM.
```

**Note**

When you enable the simple permission model, make sure that no SQL statements are running in the current DB. Otherwise, the operation may fail and affect your service.

Switching may involve running the Alter Owner operation on many tables. However, the spm\_migrate statement changes the owner for a number of objects up to the [max\_locks\_per\_transaction](https://www.postgresql.org/docs/9.1/runtime-config-locks.html) limit in each run. You may need to run spm\_migrate multiple times until all objects are migrated.

## Disable the simple permission model

1.  Disable the simple permission model.
    
    A Superuser can run the following statement in the DB to disable the simple permission model as needed. For more information about the function, see [spm\_disable](/help/en/hologres/security-and-compliance/functions-of-the-spm#section-13d-pfx-0c1).
    
    ```
    call spm_disable();
    ```
    
    After the simple permission model is disabled, the corresponding user groups are not deleted. For information about the permissions of users in these groups, see [SPM functions](/help/en/hologres/security-and-compliance/functions-of-the-spm#concept-2449484).
    
2.  Purge user groups.
    
    After you disable the simple permission model, you can call the spm\_cleanup function to purge user groups as needed. This is useful in the following scenarios:
    
    **Note**
    
    For easier management, we recommend that you do not delete user groups.
    
    -   Scenario 1: Delete user groups but retain the DB.
        
        If you want to delete the user groups in a DB but continue to use the DB, a Superuser can run the following statement. For more information about the function, see [spm\_cleanup](/help/en/hologres/security-and-compliance/functions-of-the-spm#section-31l-h1r-bfb).
        
        ```
        call spm_cleanup('{dbname}');
        ```
        
        **Note**
        
        When you call spm\_cleanup, make sure that no SQL statements are running on the DB. Otherwise, the call may fail and affect your service.
        
        Because this may involve running the Alter Owner operation on many business tables, spm\_cleanup changes the owner for a number of objects up to the `max_locks_per_transaction` limit in each run. Therefore, you may need to run spm\_cleanup multiple times until all objects are migrated and the four user groups are deleted.
        
    -   Scenario 2: Delete the DB first, then delete the user groups.
        
        If you deleted the original DB without deleting the user groups, a Superuser can run the following statement in another DB, such as postgres, to delete the corresponding user groups.
        
        ```
        call spm_cleanup('mydb');
        ```
        
    

Notes on disabling the simple permission model:

-   Only a Superuser can execute the shutdown operation.
    
-   The public role has the USAGE and CREATE permissions on the public schema.
    
-   The public role has the CONNECT and TEMPORARY permissions on the DB.
    
-   The public role has the EXECUTE permission on functions and procedures.
    
-   The public role has the USAGE permission on `language, data types (including domains)`.
    
-   The public role does not have permissions on other objects, such as tables, views, materialized views, table columns, sequences, foreign data wrappers, foreign servers, or schemas other than the public schema.
    
-   After the simple permission model is disabled, the permissions of the user groups are as follows:
    
    -   admin group: Retains permissions on existing objects, but the permissions do not apply to new database objects.
        
    -   developer group: Retains permissions on existing objects, but the permissions do not apply to new database objects.
        
    -   writer group: Retains permissions on existing objects, but the permissions do not apply to new database objects.
        
    -   viewer group: Retains permissions on existing objects, but the permissions do not apply to new database objects.
        

## Re-enable the simple permission model

If you previously enabled the simple permission model for your DB, disabled it, and switched to the standard PostgreSQL authorization model, you can run the following statements to re-enable the simple permission model when needed.

```
call spm_enable('t');  // Enable the simple permission model for the current DB.
call spm_migrate();  // Change the owner of existing objects in the DB to developer and manage them using SPM.
```

**Note**

When you enable the simple permission model, make sure that no SQL statements are running in the current DB. Otherwise, the operation may fail and affect your service.

Switching may involve running the Alter Owner operation on many tables. However, the spm\_migrate statement changes the owner for a number of objects up to the [max\_locks\_per\_transaction](https://www.postgresql.org/docs/9.1/runtime-config-locks.html) limit in each run. You may need to run spm\_migrate multiple times until all objects are migrated.
