This topic describes how to create a database in Hologres using the management console or a psql client.

## Prerequisites

-   A Hologres instance has been activated. For more information, see [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224).
    
-   Only a Superuser or an account that has permissions to create databases can create a database.
    

## Background information

After you purchase a Hologres instance, the system automatically creates the **postgres** database. This database is allocated few resources and is used only for management purposes. For business development, create a new database.

## Create a database in the Hologres management console

1.  Go to the [Hologres management console](https://hologram.console.alibabacloud.com/#/instance). In the left navigation pane, click **Instances**.
    
2.  On the **Instances** page, click the instance name.
    
    Alternatively, click **Manage** in the **Actions** column of the target instance to go to the instance details page.
    
3.  In the left navigation pane of the instance details page, click **Database Management**.
    
4.  On the **DB Authorization** page, click **Create Database** in the upper-right corner.
    
5.  In the **Create Database** dialog box, select an **Instance Name**, enter a **Database Name**, and select an **Permission Model** as needed. We recommend that you select **SPM**.
    
    **Policy Classification**
    
    **Policy Description**
    
    Simple permission model (SPM)
    
    This permission model grants permissions at the DB level. It defines four roles: admin, developer, writer, and viewer. You can use a few permission management functions to manage permissions on objects in the DB in a convenient and secure manner. For more information, see [Simple permission model (SPM)](/help/en/hologres/security-and-compliance/simple-permission-model/#concept-2449386).
    
    Schema-level simple permission model (SLPM)
    
    This permission model grants permissions at the schema level. It defines four roles: <db>.admin (DB administrator), <db>.<schema>.developer, <db>.<schema>.writer, and <db>.<schema>.viewer. This model provides more fine-grained control than the simple permission model. For more information, see [Schema-level simple permission model (SLPM)](/help/en/hologres/security-and-compliance/schema-level-simple-permission-model/#concept-2021462).
    
    expert model
    
    This model is identical to the PostgreSQL permission model. For more information, see [Standard PostgreSQL authorization model](/help/en/hologres/security-and-compliance/standard-postgresql-authorization-model#task-1917508).
    
6.  Click **OK**.
    
    You can view the created database on the **DB Authorization** page.
    

## Create a database using a psql client

1.  Connect your Hologres instance to a psql client. For more information, see [Connect to a Hologres instance from a psql client](/help/en/hologres/user-guide/use-the-postgresql-client-to-connect-to-hologres#task-1928661).
    
2.  Create a database by running the following SQL statement:
    
    ```
    CREATE Database NewDatabaseName;
    CREATE Database test; -- This is an example of creating a database named test.
    ```
    
3.  Run the `\l` command to display all databases in the current instance.
    
4.  Run the `\c NewDatabaseName` command to connect to the new database. Replace NewDatabaseName with the actual name of your database.
    

## What to do next

You can use standard PostgreSQL statements in the psql client for data development. For example, you can [import data from MaxCompute using SQL](/help/en/hologres/user-guide/import-data-from-maxcompute-to-hologres-by-executing-sql-statements#task-2560752).

You can also use HoloWeb for data development. For more information, see [Connect to HoloWeb and run a query](/help/en/hologres/getting-started/connect-to-holoweb#task-2523359).
