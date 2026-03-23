Create and manage databases on your ApsaraDB RDS for MySQL instance through the console, SQL statements, or API operations.

## Prerequisites

Before you begin, make sure that you have:

-   An ApsaraDB RDS for MySQL instance. For instructions, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-apsaradb-rds-for-mysql-instance-1)
    

## Create a database

### Use the ApsaraDB RDS console

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance, then click the instance ID.
    
2.  In the left-side navigation pane, click **Databases**.
    
3.  Click **Create Database**.
    
4.  Configure the following parameters.
    
    > If the database name contains a hyphen (`-`), the system encodes the hyphen as `@002d` in the underlying folder name.
    
    **Parameter**
    
    **Description**
    
    **Database Name**
    
    The database name. Must be 2 to 64 characters, start with a letter, and end with a letter or digit. Can contain lowercase letters, digits, underscores (\_), and hyphens (-). Must be unique within the instance.
    
    **Supported Character Set**
    
    The character set for the database. Select one based on your needs. For most applications, `utf8mb4` is recommended because it supports the full range of Unicode characters.
    
    **Authorized By**
    
    Optional. The standard account to authorize on this database. Leave blank to assign permissions later. The dropdown shows only standard accounts. The privileged account already has full permissions on all databases and does not appear here.
    
    **Description**
    
    Optional. A description to help identify the database. Up to 256 characters.
    
5.  Click **OK**.
    

### Use SQL statements

Connect to your RDS instance first. For instructions, see [Use a client or the CLI to connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-a-client-or-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance).

Run the following statement to create a database:

```
CREATE DATABASE mydb;
```

To specify a character set and collation:

```
CREATE DATABASE mydb CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
```

## Delete a database

**Warning**

Deleting a database removes it permanently. All data in the database is lost. Proceed with caution.

### Use the ApsaraDB RDS console

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance, then click the instance ID.
    
2.  In the left-side navigation pane, click **Databases**.
    
3.  Find the database that you want to delete, and click **Delete** in the **Actions** column.
    
4.  In the confirmation dialog box, click **OK**.
    

### Use SQL statements

Connect to the RDS instance, then run:

```
DROP DATABASE mydb;
```

## Account types and privileges

ApsaraDB RDS for MySQL provides two account types:

-   **Privileged account**: Has full permissions on all databases. Does not require per-database authorization.
    
-   **Standard account**: Requires explicit authorization for each database. Grant permissions through the **Authorized By** field when creating a database, or modify permissions later on the **Accounts** page. For details, see [Modify the permissions of a standard account on an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mysql-instance#concept-ys2-4bp-ydb).
    

## Limits

**Resource**

**Privileged account**

**Standard account**

Maximum databases

No limit. Limits may apply at the file system level.

No limit. Limits may apply at the file system level.

Maximum tables

Less than 200,000

Less than 200,000

> Database names cannot be changed after creation. To use a different name, create a new database, migrate the data, and delete the old one.

## FAQ

**Why is my database missing from the Data Management (DMS) console?**

This usually happens for one of two reasons:

-   Your account does not have permissions on that database. Go to the **Accounts** page of the RDS instance to [modify account permissions](/help/en/rds/apsaradb-rds-for-mysql/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mysql-instance).
    
-   DMS has not synced the database metadata. Hover over the RDS instance in DMS and click the sync icon next to the instance name. You can also use the [empty database initialization](/help/en/dms/initialize-empty-databases) feature to sync database schemas.
    

**Why can't I create a database?**

Make sure your account has the required permissions. Only privileged accounts and authorized standard accounts can create databases. If you use a standard account, ask the privileged account owner to grant the necessary permissions.

## API reference

**Operation**

**Description**

[CreateDatabase](/help/en/rds/api-create-database#doc-api-Rds-CreateDatabase)

Creates a database on an RDS instance.

[DeleteDatabase](/help/en/rds/api-delete-database#doc-api-Rds-DeleteDatabase)

Deletes a database from an RDS instance.

## Related topics

-   [Modify the permissions of a standard account](/help/en/rds/apsaradb-rds-for-mysql/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mysql-instance)
    
-   [Use a client or the CLI to connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-a-client-or-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance)
    
-   [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-apsaradb-rds-for-mysql-instance-1)
