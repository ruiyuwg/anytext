This topic describes how to create and manage databases in a or PolarDB for PostgreSQL (Compatible with Oracle) cluster.

## Create a database

1.  Go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the navigation pane on the left of the target cluster, choose **Settings and Management** > **Databases**.
    
2.  Click **Create Database**, set the following parameters, and then click **OK** to create the database.
    
    **Parameter**
    
    **Description**
    
    **Database Name**
    
    The name of the database. The name must meet the following requirements:
    
    -   It must start with a letter and end with a letter or digit.
        
    -   It must be 2 to 64 characters in length.
        
    -   Consists of lowercase letters, digits, hyphens (`-`), or underscores (`_`).
        
    
    **Note**
    
    -   The database (DB) name must be unique within the cluster.
        
    -   The database (DB) name cannot be modified after it is created. Specify the name with caution.
        
    -   Do not use reserved keywords, such as `test`, as the database name.
        
    
    **Database Owner**
    
    The owner of the database. The owner has all permissions on the database. You can leave this parameter empty and [modify the database owner](/help/en/polardb/polardb-for-postgresql/pg-database-management/#890500dbacksq) after the database is created.
    
    **Character Set**
    
    The character set supported by the database. The default value is **UTF8**. If you need another character set, select it from the drop-down list.
    
    **Collation**
    
    The string collation. The default value is **C**. To use less common languages, select **en\_US.utf8**.
    
    **Ctype**
    
    The character classification. This parameter is automatically selected based on the specified string collation.
    
    **Description**
    
    The description of the database. This helps you manage the database. The description must meet the following requirements:
    
    -   It cannot start with http:// or https://.
        
    -   It must be 2 to 256 characters in length.
        
    -   Consists of letters, Chinese characters, digits, underscores (`_`), or hyphens (`-`).
        
    

## Delete a database

**Warning**

After a database is deleted, all its data is purged and can no longer be accessed. Perform this operation with caution.

1.  Go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the navigation pane on the left of the target cluster, choose **Settings and Management** > **Databases**.
    
2.  Find the target database, click **Delete** in the **Actions** column, and then click **OK**.
    

## Modify the database owner

1.  Go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the navigation pane on the left of the target cluster, choose **Settings and Management** > **Databases**.
    
2.  Find the target database and click **Change Owner** in the **Actions** column.
    
3.  In the **Change Owner** dialog box, select a new owner for the database and click **OK**.
    

## Related APIs

**API**

**Description**

[CreateDatabase](/help/en/polardb/api-polardb-2017-08-01-createdatabase)

Creates a new database for a PolarDB cluster.

[DeleteDatabase](/help/en/polardb/api-polardb-2017-08-01-deletedatabase)

Deletes a database from a PolarDB cluster.

[DescribeDatabases](/help/en/polardb/api-polardb-2017-08-01-describedatabases)

Queries the details of a specified database in a PolarDB cluster.
