Metadata migration provides visualized metadata migration capabilities, which can help you quickly migrate Hive Metastore metadata to Data Lake Formation (DLF).

## Limits

-   Supported Hive versions: 2.3.x, 3.1.x versions.
    
-   Supported database type: MySQL.
    

## Create a metadata migration task

1.  Log on to the [DLF console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
2.  In the left-side navigation pane, click **Metadata** > **Metadata Migration**.
    
3.  On the **Migration Task** tab, click **Create Migration Task**.
    
4.  Configure the following source database information, and click **Next**.
    
    **Parameter**
    
    **Description**
    
    **Database Type**
    
    Only MySQL type is supported.
    
    **Mysql Type**
    
    Select based on Hive metadata type.
    
    -   **Aliyun RDS**: RDS provided by Alibaba Cloud official website. For more information, see [ApsaraDB RDS MySQL Edition](https://www.alibabacloud.com/en/product/apsaradb-rds?spm=a3c0i.29367734.6737026690.2.29817d3fu6cPTy&_p_lc=1). You need to select **RDS Instance**, and fill in **Database Name**, **Username**, and **Password**.
        
        **Important**
        
        RDS metadata only supports **Alibaba Cloud VPC** connection access.
        
    -   **Other Mysql**: MySQL built into EMR cluster, self-built MySQL, or other MySQL databases. You need to fill in **JDBC URL**, **Username**, and **Password**.
        
        **Important**
        
        We recommend that **JDBC URL** fill in the intranet IP, and access through **Alibaba Cloud VPC** connection; if you choose **Public Network Connection**, fill in the public IP.
        
    
    **Network Connection Method**
    
    Currently supports **Alibaba Cloud VPC**, **Public Network Connection** two methods. Please configure according to the MySQL type in the previous step.
    
    -   **Alibaba Cloud VPC**: Select the **Virtual Private Cloud VPC**, **Vswitch** and **Security Group** that matches the EMR cluster or RDS to avoid network issues.
        
    -   **Public Network Connection**: When selecting public network connection, add a rule on the EMR console to open port 3306 (default) of the EMR cluster to **DLF Elastic IP Address**.
        
        **Note**
        
        -   For details on adding ports, see [Manage security groups](/help/en/emr/emr-on-ecs/user-guide/manage-security-groups-1#section-7wh-x1n-6jy).
            
        -   For DLF Elastic IP Address in each region, see [DLF Region and Elastic IP Address Comparison Table](#657ec4418bvuf).
            
        
    
5.  Configure the following migration task information, and click **Next**.
    
    **Parameter**
    
    **Description**
    
    **Task Name**
    
    Enter the name of the metadata migration task.
    
    **Task Description**
    
    Optional, enter some task notes.
    
    **Data Catalog**
    
    Select the target data catalog.
    
    **Conflict Resolution Policy**
    
    -   Update legacy metadata (recommended): Legacy data will not be deleted. Update metadata based on the existing DLF metadata.
        
    -   Rebuild metadata, that is, delete the legacy DLF metadata first and then create new ones.
        
    
    **Log Storage Path**
    
    All migration task logs will be stored in the specified OSS location.
    
    **Synchronization Object**
    
    Includes four objects: Database, Function, Table, and Partition. Generally, select all.
    
    **Location Replacement**
    
    Optional, applicable to cases where the location of table or database needs to be replaced during migration. For example, when migrating from traditional HDFS architecture to OSS storage and computing separation architecture, you need to replace the `hdfs://` path with the `oss://` path.
    
6.  Confirm that the task configuration information is correct, click **Confirm**, and complete the task creation.
    

## Manage metadata migration tasks

1.  Click the **Migration Task** tab, and in the **Operation** column of the target migration task:
    
    -   Click **Run**: Run the current metadata migration task.
        
    -   Click **Run Record**: View detailed information about the task run.
        
    -   Click **Edit**: Modify the **Source Database Configuration** and **Migration Task Configuration**.
        
    -   Click **Delete**: Delete the migration task.
        
    -   Click **Stop**: Stop the currently running task.
        
2.  Click the **Execution History** tab, click **View Log** in the **Operation** column of the target task to view the running log information.
    
    After metadata migration is completed, you can see the success or failure result information from the log.
    

## Verify metadata synchronization results

1.  In the left-side navigation pane, click **Metadata** > **Metadata Management**.
    
2.  Click the **Database** tab, select **Data Catalog**, enter the synchronized **Database Name**, and you can query the corresponding database information.
    
3.  Click the **Data Table** tab, select **Data Catalog** and **Database Name**, enter the synchronized **Table Name**, and you can query the corresponding data table information.
    

## **Best practices**

[Migrate EMR metadata to DLF](/help/en/dlf/dlf-1-0/use-cases/best-practices-for-migrating-emr-metadata-to-dlf)

## References

### **DLF Region and Elastic IP Address Comparison Table**

**Region**

**Elastic IP Address**

Hangzhou

121.41.166.235

Shanghai

47.103.63.0

Beijing

47.94.234.203

Shenzhen

39.108.114.206

Singapore

161.117.233.48

Frankfurt

8.211.38.47

Zhangjiakou

8.142.121.7

Hong Kong (China)

8.218.148.213
