Create databases, configure permission models, grant or revoke user permissions, and delete databases on the **Database Authorization** page in the Hologres console.

## Prerequisites

Before you begin, make sure that you have:

-   A Hologres instance in the **Running** state
    
-   An Alibaba Cloud account or a Resource Access Management (RAM) user with sufficient permissions
    
-   Access to the [Hologres console](https://hologram.console.alibabacloud.com/#/instance)
    

## Create a database

1.  Log on to the [Hologres console](https://hologram.console.alibabacloud.com/#/instance) and click **Go to HoloWeb**.
    
2.  In the top menu bar, click **Security Center** > **Database Authorization**.
    
3.  On the **Database Authorization** page, select the target instance. In the upper-right corner, click **Create Database**.
    
4.  In the **Create Database** dialog box, configure the following settings:
    
    **Field**
    
    **Description**
    
    Instance name
    
    Select the instance where the database will be created.
    
    **Database Name**
    
    Enter a name for the database.
    
    **Permission Model**
    
    Select a permission model: **SPM**, **SLPM**, or **Expert**. To simplify authorization, select SPM.
    
5.  Click **OK**.
    

**Note**

After you purchase an instance, the system creates a default database named **postgres**. This database has minimal resources and serves management purposes only. It does not appear on the **Database Authorization** page. Create a new database to process business data.

### Permission models

Hologres supports three authorization models. Select one when creating a database.

**Model**

**Granularity**

**Description**

**Standard PostgreSQL authorization model** (Expert)

Fine-grained

Uses the native PostgreSQL authorization system. Grant permissions to RAM users with standard PostgreSQL statements. For details, see [Standard PostgreSQL authorization model](/help/en/hologres/security-and-compliance/standard-postgresql-authorization-model#task-1917508).

**Simple permission model (SPM)**

Coarse-grained

A simplified model based on PostgreSQL. Grant permissions by adding users to predefined user groups. For details, see [Simple permission model (SPM)](/help/en/hologres/security-and-compliance/simple-permission-model/#concept-2449386).

**Schema-level permission model (SLPM)**

Schema-level

Provides finer granularity than SPM with strict permission separation at the schema level. For details, see [Schema-level permission model (SLPM)](/help/en/hologres/security-and-compliance/schema-level-simple-permission-model/).

## Grant permissions to a user

After you enable the simple permission model (SPM) for a database, grant permissions to RAM users through the console.

1.  On the **Database Authorization** page, find the target database and click **Authorize User** in the **Actions** column.
    
2.  On the **Authorize User** page, click **Grant Permissions**.
    
3.  In the **Grant Permissions** dialog box, select a **User** and a **User Group**.
    
4.  Click **OK**. The user can now connect to the database and use DataStudio.
    

**Note**

If the account does not appear in the **User** drop-down list, the user has not been added to the current instance. Go to the **Users** page to add the user first.

### User groups in SPM

The SPM defines four user groups with different permission levels:

**User group**

**Permissions**

**Admin**

Full access to all database objects. Can manage all user groups in the database. This is the database owner role.

**Developer**

Can use Data Definition Language (DDL) statements to create, delete, and modify database objects. Can read and write data.

**Writer**

Can read and write data in all database objects.

**Viewer**

Read-only access to all database objects.

## Revoke permissions from a user

To revoke permissions from a RAM user when the simple permission model (SPM) is enabled:

1.  On the **Database Authorization** page, find the target database and click **Authorize User** in the **Actions** column.
    
2.  On the **Authorize User** page, find the target user and click **Revoke Permission** in the **Actions** column.
    
3.  Click **OK**.
    

For more information about permissions retained after revocation, see [Use the simple permission model](/help/en/hologres/security-and-compliance/use-the-spm#task-1961231).

## Delete a database

**Warning**

Deleting a database permanently removes all data in it. This action cannot be undone.

1.  On the **Database Authorization** page, find the target database.
    
2.  In the **Actions** column, click **Delete**.
    
3.  In the confirmation dialog box, enter the database name and click **OK**.
    

## See also

-   [Standard PostgreSQL authorization model](/help/en/hologres/security-and-compliance/standard-postgresql-authorization-model#task-1917508)
    
-   [Simple permission model (SPM)](/help/en/hologres/security-and-compliance/simple-permission-model/#concept-2449386)
    
-   [Schema-level permission model (SLPM)](/help/en/hologres/security-and-compliance/schema-level-simple-permission-model/)
    
-   [Use the simple permission model](/help/en/hologres/security-and-compliance/use-the-spm#task-1961231)
