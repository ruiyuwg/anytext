This topic describes how to replicate the databases of an existing ApsaraDB RDS for SQL Server instance to another RDS instance in the ApsaraDB RDS console.

## Prerequisites

Your RDS instance runs SQL Server 2008 R2 and uses cloud disks.

**Note**

-   You can replicate the databases of an [RDS instance that runs SQL Server 2008 R2 and uses cloud disks](#section-ggg-ub5-htd) only to another RDS instance.
    
-   You can only execute SQL statements to replicate the databases of an [RDS instance that runs SQL Server 2012 or later](/help/en/rds/apsaradb-rds-for-sql-server/replicate-a-database-of-an-apsaradb-rds-instance-that-runs-sql-server-2012-or-later#concept-x3n-3mq-wdb).
    

## Replicate databases to another RDS instance that runs Server 2008 R2 with cloud disks

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Databases**.
    
3.  On the page that appears, click **Replicate to Another Instance**. In the **Replicate to Another Instance** dialog box, configure the following parameters.
    
    ![复制到其他实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2108073371/p512035.png)
    
    **Parameter**
    
    **Description**
    
    **Source Instance Name**
    
    The name of the source RDS instance. The system automatically displays the ID of the source RDS instance.
    
    **Destination Instance Name**
    
    The name of the destination RDS instance.
    
    **Note**
    
    The database engine version, region, and network type of the source RDS instance must be the same as those of the destination RDS instance. The zones of the source and destination RDS instances can be different. For more information, see [Network types](/help/en/rds/apsaradb-rds-for-sql-server/change-the-network-type-of-an-apsaradb-rds-for-sql-server-instance#section-dxf-zxx-wdb).
    
    **Source Databases**
    
    The databases that you want to replicate to the destination RDS instance. You can click the ![右移](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6753919171/p512170.png) or ![左移](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6753919171/p512172.png) icon to manage the databases. If you select more than one database or all databases, make sure that the following conditions are met:
    
    -   The available storage of the destination RDS instance is larger than the size of the databases that you want to replicate from the source RDS instance. For more information about how to expand the storage capacity, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-sql-server/change-the-specifications-of-an-apsaradb-rds-for-sql-server-instance).
        
    -   The names of the databases on the destination RDS instance cannot be the same as the names of the databases that you want to replicate.
        
        **Note**
        
        If you create databases that have the same names as the databases that you want to replicate on the destination RDS instance, the databases are not replicated.
        
    
    **Source Databases**
    
    Specifies whether to replicate accounts and account permissions for the databases that you want to replicate to the destination RDS instance.
    
    -   **Synchronize Database Users and Authorizations**: Accounts and account permissions are replicated to the destination RDS instance. Take note of the following two scenarios:
        
        -   If the destination RDS instance has accounts whose usernames are the same as those of accounts on the source RDS instance, the accounts on the destination RDS instance are granted the same permissions as the accounts on the source RDS instance.
            
        -   If the destination RDS instance does not have accounts whose usernames are the same as those of accounts on the source RDS instance, the accounts are created on the destination RDS instance and then granted the same permissions as the accounts on the source RDS instance.
            
    -   **Replicate Database Only. Do Not Synchronize Users and Authorizations**: Accounts and account permissions are not replicated to the destination RDS instance. This option is the default value.
        
        After the replication is complete, you can create accounts on the destination RDS instance and grant permissions on the selected databases. For more information, see [Create an account](/help/en/rds/apsaradb-rds-for-sql-server/create-a-standard-account-privileged-account-and-a-global-read-only-account) and [Modify the permissions of an account](/help/en/rds/apsaradb-rds-for-sql-server/modify-account-permissions).
        
    
4.  Click **OK**.
