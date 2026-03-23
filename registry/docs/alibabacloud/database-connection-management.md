You can register database instances with Data Transmission Service (DTS). When you configure a DTS task, you can directly select databases that are registered with DTS. Then, DTS automatically configures the information about the databases. This eliminates the need to manually configure the source and destination databases each time you configure a DTS task. This topic describes how to register, save, modify, or delete a database instance.

## Prerequisites

If you want to register database instances with DTS across Alibaba Cloud accounts, make sure that Resource Access Management (RAM) authorization is performed for the Alibaba Cloud account that is used to log on to the DTS console. For more information, see [Configure RAM authorization for cross-account DTS tasks](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization).

## Limits

-   This operation is applicable only to the new DTS console and is not applicable to the Data Management (DMS) console and the old DTS console.
    
-   The database instances that are registered with DTS can be used only when you configure DTS tasks in the DTS console.
    
-   A database instance whose **Type** parameter is set to **Source** can be used only when you configure the source database for a DTS task. A database instance whose **Type** parameter is set to **Destination** can be used only when you configure the destination database for a DTS task.
    
-   You cannot verify the validity of **Database Account** and **Database Password** of an instance.
    
-   When you modify a database instance, you cannot change the value of the **Instance Region** parameter.
    

## Procedure

### **Create an instance**

**Note**

In this example, an ApsaraDB RDS for MySQL instance is registered with DTS.

1.  Go to the [Database Connections](https://dts.console.alibabacloud.com/connect/cn-hangzhou) page.
    
2.  On the Database Connections page, click **Create Instance**.
    
3.  In the Create Instance dialog box, configure the parameters that are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    The dimension based on which the database instance is registered. Set this parameter to **Source** or **Destination** based on your business requirements.
    
    **Instance Name**
    
    The name of the database instance. We recommend that you specify a descriptive name that makes it easy to identify the database instance in the subsequent operations.
    
    **Database Type**
    
    The type of the database instance. Select **MySQL**.
    
    **Access Method**
    
    The access method of the database instance. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the database instance resides.
    
    **Replicate Data Across Alibaba Cloud Accounts**
    
    Specifies whether data is replicated across Alibaba Cloud accounts. Set this parameter to **No** or **Yes** based on your business requirements. In this example, **No** is selected.
    
    **Note**
    
    If you set this parameter to **Yes**, you must configure the **Alibaba Cloud Account** and **RAM Role Name** parameters.
    
    **RDS Instance ID**
    
    The ID of the ApsaraDB RDS for MySQL instance.
    
    **Database Account**
    
    The database account of the ApsaraDB RDS for MySQL instance.
    
    **Database Password**
    
    The password of the database account.
    
    **Encryption**
    
    Specifies whether to encrypt the connection to the database. Select **Non-encrypted** or **SSL-encrypted** based on your business requirements. If you select **SSL-encrypted**, you must enable SSL encryption for the ApsaraDB RDS for MySQL instance before you configure the data synchronization task. For more information, see [Configure the SSL encryption feature](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#concept-ack-rv4-ydb).
    
4.  Click **OK**.
    

### **Save an instance**

On the new configuration page, you can save the configured database information as instance connection information.

1.  Go to the new configuration page.
    
    **Note**
    
    In this example, a data synchronization task is used to introduce the procedure.
    
    1.  Go to the new version of the [Data Synchronization Tasks](https://dts.alibabacloud.com/sync/cn-hangzhou?resourceGroupId=) page in the DTS console.
        
    2.  In the upper-left corner of the page, select the region where the data synchronization instance that you want to manage resides.
        
    3.  Click **Create Task** to go to the task configuration page.
        
    4.  **(Optional)** In the upper-right corner of the page, click **New Configuration Page**.
        
        **Note**
        
        If the **Back to Previous Version** button is displayed in the upper-right corner, you are already on the new configuration page and do not need to perform this operation.
        
    
2.  Configure the source database and destination database.
    
3.  In the upper-right corner, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6744544171/p789623.png).
    
4.  Specify **Instance Connection Information Name**.
    
    **Note**
    
    The name of the database instance. We recommend that you specify a descriptive name that makes it easy to identify the database instance in the subsequent operations.
    
5.  Click **OK**.
    

### **Modify an instance**

1.  Go to the [Database Connections](https://dts.console.alibabacloud.com/connect/cn-hangzhou) page.
    
2.  On the Database Connections page, find the database instance that you want to modify and click **Edit** in the **Actions** column.
    
3.  In the **Edit** dialog box, modify the parameter settings of the database instance.
    
4.  Click **OK**.
    

### **Delete an instance**

1.  Go to the [Database Connections](https://dts.console.alibabacloud.com/connect/cn-hangzhou) page.
    
2.  On the Database Connections page, find the database instance that you want to delete and click **Delete** in the **Actions** column.
    
3.  In the message that appears, click **OK**.
    

## FAQ

-   How do I use a database instance that is registered with DTS?
    
    When you configure a DTS task in the new DTS console, configure the **Database Type** parameter in the **Source Database** or **Destination Database** section, click **Select Existing Connection**, and then select a database instance from the drop-down list.
    
-   Why am I unable to select a database instance that is registered with DTS?
    
    The database instance that you select is deleted on the **Database Connections** page, or the section of **Select Existing Connection** is inconsistent with the value of the **Type** parameter of the database instance.
    
-   How do I register a database instance with DMS?
    
    For more information about how to register a database instance with DMS, see [Register an Alibaba Cloud database instance](/help/en/dms/register-an-apsaradb-instance-1) and [Register a database hosted on a third-party cloud service or a self-managed database](/help/en/dms/register-a-database-hosted-on-a-third-party-cloud-service-or-a-self-managed-database).
    
    **Note**
    
    -   When you register a database instance with DMS, you cannot specify the database instance as a source or destination database.
        
    -   You cannot use database instances that are registered with DMS in the DTS console.
        
    
-   If I delete an instance on the **Database Connections** page, is the database deleted?
    
    No. If you delete a database instance on the **Database Connections** page, the database instance is removed from DTS without affecting the data in the database.
