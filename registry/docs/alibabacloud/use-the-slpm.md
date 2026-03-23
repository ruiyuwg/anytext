This topic describes how to use the schema-level permission model (SLPM) with SQL statements in Hologres.

## Limits

SLPM strictly controls permissions at the schema level. Note the following limits when you grant and use permissions:

-   If you create a view or rule that references two or more tables across different schemas, **the view or rule cannot be accessed because permissions are not shared between schemas**. An error is reported: `ERROR: permission denied for table`. Therefore, do not create cross-schema views or rules in a database managed by SLPM. To create a cross-schema view, see [Create cross-schema views in SLPM mode (Beta)](#section-e45-rau-btq).
    
-   After you enable SLPM, only specific permissions are granted. For more information about the granted permissions, see [Grant permissions using the schema-level permission model](#step-23c-pnm-ph7). You cannot use the DDL features in the following table with SLPM. Instead, use the corresponding SLPM statements to perform the operations. For more information about the functions, see [Functions of the schema-level permission model](/help/en/hologres/security-and-compliance/functions-of-the-slpm#concept-2021465).
    
    **Command**
    
    **Description**
    
    **SLPM statement**
    
    alter table owner to xx
    
    The owner of all tables is the developer user group of the corresponding schema. You cannot change the owner.
    
    No manual execution is required.
    
    grant
    
    After a user is added to a user group, the user is granted the permissions of that group. You do not need to run a grant statement.
    
    slpm\_grant
    
    revoke
    
    To revoke a permission from a user, you must remove the user from the corresponding user group. You cannot run a standalone revoke statement.
    
    slpm\_revoke
    
    alter default privileges
    
    In the standard permission model, grants apply only to current and past tables. You must grant permissions on future tables separately. In the simple model, you do not need to consider when a table is created. A user has the required permissions as long as the user is in the correct user group. You do not need to grant permissions on future tables.
    
    No manual execution is required.
    
    create / drop / alter / rename default user groups
    
    After you enable SLPM, default user groups such as admin, developer, writer, and viewer are created. Users, including superusers, cannot create, modify, or delete these default user groups.
    
    Not applicable.
    
    rename schema
    
    To rename a schema, you cannot directly run the `alter rename schema` command in a database. You must call the `slpm_rename_schema` command.
    
    slpm\_rename\_schema
    
    drop database
    
    To delete a database, you must run `drop database` and then call `slpm_cleanup('<dbname>')` to purge the default users.
    
    Run `drop database` and then call `slpm_cleanup('<dbname>')` to purge the default users.
    
-   Only Hologres V1.3.36 and later support creating cross-schema views. If your instance is earlier than V1.3.36, see [Common errors that occur when you prepare for an instance upgrade](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or join the Hologres DingTalk group for feedback. For more information, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).
    

## Grant permissions using the schema-level permission model

After connecting a Hologres instance to a development tool, you can use an SQL statement to grant the user the relevant permissions on the corresponding schema at the schema level using basic mode.

1.  Enable function invocation.
    
    Before you enable SLPM, run the following command to enable function invocation. The extension in the example is at the database level. You only need to run this command once for each database.
    
    ```
    create extension slpm;
    ```
    
2.  Enable SLPM.
    
    SLPM is disabled by default. A superuser must run the following statement in the target database to enable it. When you enable SLPM, make sure that no SQL statements are running in the current database. Otherwise, the operation might fail and affect your services.
    
    ```
    call slpm_enable ();  // Enable SLPM for the current database.
    ```
    
3.  **Optional:**Switch from the standard PostgreSQL authorization model to SLPM.
    
    You can check the permission model as follows:
    
    1.  Log on to the [Hologres console](https://hologram.console.alibabacloud.com/#/instance). In the navigation pane on the left, click **Go to HoloWeb**.
        
    2.  On the HoloWeb page, click **Security Center**. On the **DB Authorization** page, view the current permission model.
        
    
    If your database uses the standard PostgreSQL authorization model and contains multiple objects such as tables, views, or foreign tables, you can call the slpm\_migrate function to migrate the permissions of existing users to SLPM.
    
    ```
    call slpm_migrate ();  // Change the owner of existing objects in the database to developer for SLPM management.
    ```
    
    Note the following when you switch from the standard PostgreSQL authorization model to SLPM:
    
    By default, the slpm\_migrate function migrates permissions for only 64 users at a time. This number is adjustable. If many users are involved, you must run this function multiple times until the permissions for all users are migrated. For more information about this function, see [slpm\_migrate](/help/en/hologres/security-and-compliance/functions-of-the-slpm#section-649-pj0-ge6).
    
4.  Create a user in the current instance.
    
    Before you grant permissions to a new user, you must create the user in the current instance. If the user already exists in the instance, skip this step.
    
    In the following commands, {dbname}.\[admin|{schemaname}.developer|{schemaname}.writer|{schemaname}.viewer\] is the name of a user group in the current database to which you can add the user. For more information, see [User groups](/help/en/hologres/security-and-compliance/schema-level-simple-permission-model/#table-6s8-hkj-mm4).
    
    ```
    call slpm_create_user ('Alibaba Cloud account ID/Alibaba Cloud mailbox/RAM user'); // Create a user. If you use an Alibaba Cloud mailbox, enclose it in double quotation marks.
    call slpm_create_user ('Alibaba Cloud account ID/Alibaba Cloud mailbox/RAM user', '{dbname}.[admin|{schemaname}.developer|{schemaname}.writer|{schemaname}.viewer]');  // Create a user and add the user to the corresponding user group.
    ```
    
    **Note**
    
    -   If you use a RAM user UID to grant permissions, you must add the `p4_` prefix to the UID when you run `slpm_create_user`. The format is `p4_UID`. You can obtain the UID from the [Users](https://ram.console.alibabacloud.com/users) page of the RAM console. For more information about RAM user formats, see [Account system](/help/en/hologres/security-and-compliance/overview-16#concept-1597881).
        
    -   SLPM does not support custom account names that end with `admin`, `developer`, `writer`, `viewer`, or `all_users`.
        
    
5.  Grant permissions to the new user.
    
    After you create the new user in the instance, you must add the user to the appropriate user group in the database to complete the authorization. If you added the user to a user group when you created the user, you do not need to grant permissions again.
    
    In the following command, {dbname}.\[admin|{schemaname}.developer|{schemaname}.writer|{schemaname}.viewer\] is the name of a user group in the current database to which you can add the user. For more information, see [User groups](/help/en/hologres/security-and-compliance/schema-level-simple-permission-model/#table-6s8-hkj-mm4).
    
    ```
    call slpm_grant ('{dbname}.[admin|{schemaname}.developer|{schemaname}.writer|{schemaname}.viewer]', 'Alibaba Cloud account ID/Alibaba Cloud mailbox/RAM user'); // Add a user to a user group.
    ```
    
    The following examples show how to add users to user groups with different permissions.
    
    ```
    // Add a user to the admin group of a database.
    call slpm_grant ('mydb.admin', '197006222995xxx'); // Add user 197006222995xxx to the admin group of the mydb database.
    call slpm_grant ('mydb.admin', 'ALIYUN$xxx'); // Add user xxx@aliyun.com to the admin group of the mydb database.
    
    // Add a user to the developer group of a database.
    call slpm_grant ('mydb.public.developer', '197006222995xxx'); // Add user 197006222995xxx to the developer group of the mydb database.
    call slpm_grant ('mydb.public.developer', 'RAM$mainaccount:subuser');// Add the RAM user subuser of the Alibaba Cloud account mainaccount to the developer group of the mydb database.
    
    // Add a user to the viewer group of a database.
    call slpm_grant ('"MYDB.lisa.viewer"', '197006222995xxx'); // Add user 197006222995xxx to the viewer group of the "MYDB" database.
    call slpm_grant ('mydb.lisa.viewer', '"xxx@aliyun.com"'); // Add user xxx@aliyun.com to the viewer group of the mydb database.
    ```
    

## Remove user group

To remove a user from a user group in a database, run the following command. After the user is removed, the user no longer has the permissions of that user group.

In the following command, {dbname}.\[admin|{schemaname}.developer|{schemaname}.writer|{schemaname}.viewer\] is the name of a user group in the current database to which you can add the user. For more information, see [User groups](/help/en/hologres/security-and-compliance/schema-level-simple-permission-model/#table-6s8-hkj-mm4).

```
call slpm_revoke ('{dbname}.[admin|{schemaname}.developer|{schemaname}.writer|{schemaname}.viewer]', 'Alibaba Cloud account ID/Alibaba Cloud mailbox/RAM user'); // Revoke the permissions of a user.
```

The following examples show how to remove users from user groups with different permissions.

```
// Remove a user from the admin group of a database.
call slpm_revoke ('dbname.admin', 'p4_564306222995xxx');//Remove the RAM user 564306222995xxx from the admin group.
call slpm_revoke ('dbname.admin', '197006222995xxx');//Remove the Alibaba Cloud account 197006222995xxx from the admin group.
call slpm_revoke ('dbname.admin', '"xxx@aliyun.com"');

// Remove a user from the developer group of a database.
call slpm_revoke ('mydb.lisa.developer', 'RAM$mainaccount:subuser'); // Remove the RAM user subuser from the developer group of the mydb database.
call slpm_revoke ('mydb.public.developer', 'p4_564306222995xxx');//Remove the RAM user 564306222995xxx from the developer group.

// Remove a user from the viewer group of a database.
call slpm_revoke ('"MYDB.SCHEMA1.viewer"', 'p4_564306222995xxx'); // Remove the RAM user 564306222995xxx from the viewer group of the "MYDB" database.
```

## Delete a user

You can also delete a user as needed. After a user is deleted, the user is removed from the current instance and loses all permissions on the instance. Perform this operation with caution.

```
DROP ROLE "Alibaba Cloud account ID/Alibaba Cloud mailbox/RAM user"; // Deletes the user from the instance.
```

## Disable the schema-level permission model

If you no longer need SLPM, you can follow these steps to disable this feature.

1.  Disable SLPM.
    
    After SLPM is enabled, a superuser can disable it by running the command in the following example. After you disable SLPM, the user groups are not deleted. For more information about the permissions that users in these groups retain, see [Functions of the schema-level permission model](/help/en/hologres/security-and-compliance/functions-of-the-slpm#concept-2021465).
    
    ```
    call slpm_disable ();
    ```
    
    Notes on disabling SLPM:
    
    -   Only a superuser can execute the shutdown operation.
        
    -   The USAGE and CREATE permissions on the public schema, the CONNECT and TEMPORARY permissions on the database, the EXECUTE permission on functions and procedures, and the USAGE permission on languages and data types (including domains) are granted to PUBLIC.
        
    -   Permissions on other objects such as tables, views, materialized views, table columns, sequences, foreign data wrappers, foreign servers, and schemas (except the public schema) are not granted to PUBLIC. To grant these permissions, contact a superuser.
        
    -   After you disable SLPM, the {db}.admin, {db}.{schemaname}.developer, {db}.{schemaname}.writer, and {db}.{schemaname}.viewer groups retain their permissions on existing objects. The permissions do not apply to new database objects.
        
    
2.  Delete user groups. (For easier management, do not delete user groups unless necessary.)
    
    After you disable SLPM, you can call the slpm\_cleanup function to delete user groups. The following scenarios describe how to do this:
    
    -   Scenario 1: Delete user groups but keep the database.
        
        If you want to delete the user groups in a database but continue using the database, a superuser can run the following statement.
        
        ```
        call slpm_cleanup ( '<dbname>' );
        ```
        
        **Note**
        
        When you call slpm\_cleanup, make sure that no SQL statements are running on the database. Otherwise, the call might fail and affect your services.
        
        The slpm\_cleanup function needs to transfer the ownership of existing objects to the current user. By default, slpm\_cleanup transfers ownership for only 64 objects at a time. This number is adjustable. Therefore, you may need to run slpm\_cleanup multiple times until all objects are transferred (we recommend running it fewer than five times) and all retained user groups are deleted. For more information about this function, see [slpm\_cleanup](/help/en/hologres/security-and-compliance/functions-of-the-slpm#section-aen-1tr-jzt).
        
    -   Scenario 2: Delete the database and then delete the user groups.
        
        If you have deleted a database but its user groups still exist, a superuser can run the following statement in another database, such as postgres, to delete all user groups of the original database.
        
        ```
        call slpm_cleanup ( 'mydb' );
        ```
        
    

## Re-enable SLPM

To re-enable SLPM for any reason, follow these steps.

1.  Purge user permissions
    
    To avoid permission conflicts, run the following command to purge all existing user permissions from the database before you re-enable SLPM.
    
    ```
    call slpm_cleanup ( '<dbname>' );
    ```
    
2.  Re-enable the SLPM permission model
    
    After you purge user permissions, run the following command to enable the SLPM permission model.
    
    ```
    -- Enable SLPM in recovery model.
    call slpm_enable ('t'); 
    
    -- Update the owner of existing objects in the database to developer for SLPM management. This step is required.
    call slpm_migrate ();
    ```
    
3.  Grant permissions to users
    
    After you re-enable SLPM, you can grant permissions to users in the Hologres console or using SQL commands. For more information, see [Grant permissions to a user](/help/en/hologres/user-guide/manage-databases#section-89y-ij4-onv).
    

## Create cross-schema views in SLPM mode (Beta)

Only Hologres V1.3.36 and later support creating cross-schema views. If your instance is earlier than V1.3.36, see [Common errors that occur when you prepare for an instance upgrade](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or join the Hologres DingTalk group for feedback. For more information, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).

### Scenario description

SLPM provides simple permission management at the schema level. However, in some business scenarios, you may need to create views across schemas. For example, you can create schemas for different data warehouse layers, such as operation data store (ODS), DWD, data warehouse service (DWS), and ADS, and then create tables in each layer. Sometimes, you may need to create a view across schemas. For example, you can use tables from the DWS and DWD layers to create a view in the ADS layer for business services, as shown in the following table:

**Database**

**Schema**

**Table**

**View**

erp\_db

ods

orders

Not applicable

dwd

customer

Not applicable

ads

Not applicable

View name: customer\_total\_order\_price

View DDL:

```
CREATE VIEW ads.customer_total_order_price_view AS
SELECT
    c_name,
    sum(o_totalprice)
FROM
    ods.orders AS o
INNER JOIN dwd.customer AS c
ON o.o_custkey = c.c_custkey
GROUP BY
    1;
```

#### Enable the cross-schema view feature

-   Notes
    
    -   The cross-schema view feature is disabled by default.
        
    -   When you create a cross-schema view, the creator must have the `developer` permission on the schema where the view resides. The creator must also have the `viewer` permission or higher on all tables used in the view.
        
        In the scenario described, to create the `customer_total_order_price_view` view in the `ads` schema using the `ads_dev_user` account, the `ads_dev_user` account must have the `developer` permission on the `ads` schema and the `viewer` permission on the `ods` and `dwd` schemas.
        
    -   To query a cross-schema view, a user only needs the `viewer` permission or higher on the schema where the view resides.
        
        For example, for the account `ads_view_user` to view the `ads.customer_total_order_price_view` view, you only need to grant the account `ads_view_user` the `viewer` permission or higher on the `ads` schema.
        
    -   After you enable the cross-schema view feature, the user who creates a view becomes the owner of the view. Only the owner of a view can modify or delete it.
        
        In the scenario described, the owner of the `ads.customer_total_order_price_view` view is the `ads_dev_user` account. If the `ads_dev_user` account needs to be deleted from the database, you can use the following SQL statement to transfer the ownership of the view. Make sure that the new owner has the `viewer` permission or higher on the schemas of all tables in the view and the `developer` permission on the schema where the view resides.
        
        ```
        -- Syntax
        call slpm_alter_view_owner('view_name', 'Alibaba Cloud account ID/Alibaba Cloud mailbox/RAM user');
        
        -- Example: Transfer the ownership of the ads.customer_total_order_price_view view to p4_xxxxx.
        call slpm_alter_view_owner ('ads.customer_total_order_price_view', 'p4_xxxxx');
        ```
        
-   Use the command.
    
    To create cross-schema views, a superuser can run the following SQL statement to enable this feature.
    
    ```
    call slpm_enable_multi_schema_view();
    ```
    
    After the statement is executed, you can create cross-schema views.
    

### Disable the cross-schema view feature

If you no longer need to create cross-schema views, you can run the following SQL statements to disable this feature.

```
-- Disable the cross-schema view feature.
call slpm_disable_multi_schema_view();
-- Transfer the ownership of all views to the developer role of the schema where the view resides.
call slpm_migrate();
```

After the statements are executed, non-cross-schema views can still be queried, and the default behavior of SLPM is restored. Cross-schema views can no longer be queried.
