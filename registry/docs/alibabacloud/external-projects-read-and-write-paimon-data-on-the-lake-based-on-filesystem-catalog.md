This topic describes how to create a Paimon Catalog and use Flink to generate data. You can then create an external project in MaxCompute, based on a FileSystem Catalog, to read data directly from Paimon tables.

## Usage notes

-   Only Paimon format tables are supported.
    
-   Writing to Dynamic Bucket tables is not supported.
    
-   Writing to Cross Partition tables is not supported.
    
-   [Data type mapping](/help/en/maxcompute/user-guide/filesystem-catalog-external-projec#3b0942360doyh).
    

## **Procedure**

### Step 1: Prepare the source data

If you already have Paimon table data in Object Storage Service (OSS), skip this step.

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/) and create a bucket named `paimon-fs`. For more information, see [Create a bucket](/help/en/oss/user-guide/console-quick-start#section-73g-119-c8q). In the bucket, create a folder named `paimon-test`.
    
2.  Log on to the [Flink console](https://realtime-compute.console.alibabacloud.com/), and select a region in the upper-left corner.
    
3.  Click the name of the target workspace. In the navigation pane on the left, select **Catalogs** .
    
4.  On the **Catalog List** page, click **Create Catalog** on the right. In the **Create Catalog** dialog box, select **Apache Paimon**, click **Next** , and configure the following parameters:
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **metastore**
    
    Required
    
    The type of metastore. In this example, select `filesystem`.
    
    **catalog name**
    
    Required
    
    A custom catalog name. For example, `paimon-fs-catalog`.
    
    **warehouse**
    
    Required
    
    The data warehouse directory specified in the OSS service. In this example, `oss://paimon-fs/paimon-test/`.
    
    **fs.oss.endpoint**
    
    Required
    
    The endpoint of the OSS service. For example, the endpoint for the China (Hangzhou) region is `oss-cn-hangzhou-internal.aliyuncs.com`.
    
    **fs.oss.accessKeyId**
    
    Required
    
    The AccessKey ID required to access the OSS service.
    
    **fs.oss.accessKeySecret**
    
    Required
    
    The AccessKey secret required to access the OSS service.
    
5.  Create a Paimon table and write data to it using the Paimon Catalog.
    
    1.  In the left navigation pane, select **Development** > **Scripts**.
        
    2.  On the **New Script** tab, you can click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2825568571/p1008251.png) to create a new query script.
        
        Run the following code. Modify the names in the code as needed.
        
        **Note**
        
        Because Flink uses a Paimon Catalog, it follows the default file system structure of the Paimon Catalog: `paimon_catalog_name/database_name.db/xxxx`. If you use other engines to read or write Paimon data in this OSS directory, follow this structure and store only Paimon-formatted data. Otherwise, the data is considered abnormal, and an error occurs.
        
        ```
        CREATE TABLE `paimon-fs-catalog`.`default`.test_tbl (
            id BIGINT,
            data STRING,
            dt STRING,
            PRIMARY KEY (dt, id) NOT ENFORCED
        ) PARTITIONED BY (dt)
        WITH (
            'bucket' = '3'
        );
        
        INSERT INTO `paimon-fs-catalog`.`default`.test_tbl 
          VALUES (1,'CCC','2024-07-18'), (2,'DDD','2024-07-18'),(3,'EEE','2025-06-18');
        ```
        
6.  View the generated files. Log on to the [OSS console](https://oss.console.alibabacloud.com/) and view the Paimon table in the OSS directory attached to the Paimon Catalog.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6906568571/p1009188.png)
    

### Step 2: Create an external data source in MaxCompute

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Foreign Server**.
    
3.  On the **Foreign Server** page, click **Create Foreign Server**.
    
4.  In the **Add Foreign Server** dialog box, configure the parameters. The following tables describe the parameters.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Foreign Server Type**
    
    Required
    
    Select `Filesystem Catalog`.
    
    **Foreign Server Name**
    
    Required
    
    Specify a custom name. The naming conventions are as follows:
    
    -   The name must start with a letter and can contain only lowercase letters, underscores (\_), and digits.
        
    -   The name cannot exceed 128 characters.
        
    
    For example, `external_fs`.
    
    **Foreign Server Description**
    
    Optional
    
    Enter a description as needed.
    
    **Region**
    
    Required
    
    The current region is selected by default.
    
    **Authentication And Authorization**
    
    Required
    
    Alibaba Cloud RAM role is selected by default.
    
    **RoleARN**
    
    Required
    
    The Alibaba Cloud Resource Name (ARN) of the RAM role. This role must have permissions to access both Data Lake Formation (DLF) and OSS services.
    
    1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/).
        
    2.  In the navigation pane on the left, choose **Identities** > **Roles**.
        
    3.  In the **Basic Information** section, you can find the **ARN**.
        
    
    Example: `acs:ram::124****:role/aliyunodpsdefaultrole`.
    
    **Storage Type**
    
    -   OSS
        
    -   OSS-HDFS
        
    
    **Endpoint**
    
    Automatically generated. The endpoint for the China (Hangzhou) region is `oss-cn-hangzhou-internal.aliyuncs.com`.
    
    **Foreign Server Supplemental Properties**
    
    Optional
    
    Special supplemental attributes for the external data source. After you specify these properties, tasks that use this data source can access the source system based on the behavior defined by the parameters.
    
    **Note**
    
    For information about supported parameters, see future updates in the official documentation. Parameters will be gradually released as the product evolves.
    
5.  Click **OK** to create the external data source.
    
6.  On the **Foreign Server** page, find the target data source and click **Details** in the **Actions** column.
    

### Step 3: Create an external project in MaxCompute

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Projects**.
    
3.  On the **External Project** tab, click **Create Project**.
    
4.  In the **Create Project** dialog box, configure the project information as prompted and click **OK**.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Project Type**
    
    Required
    
    External project is selected by default.
    
    **Region**
    
    Required
    
    The current region is selected by default and cannot be changed.
    
    **Project Name (Globally Unique)**
    
    Required
    
    The name must start with a letter, contain letters, digits, and underscores (\_), and be 3 to 28 characters long.
    
    **MaxCompute Foreign Server Type**
    
    Optional
    
    Select Filesystem Catalog.
    
    **MaxCompute Foreign Server**
    
    Optional
    
    -   **Use Existing**: Lists the external data sources that have been created.
        
    -   **Create Foreign Server**: Creates and uses a new external data source.
        
    
    **MaxCompute Foreign Server Name**
    
    Required
    
    -   Use Existing: Select the name of an existing external data source from the drop-down list.
        
    -   New external data source: You can use the name of the new external data source.
        
    
    **Authentication and Authorization**
    
    Required
    
    The identity of the task executor. If a service-linked role has not been created, create one before you use this mode.
    
    **RoleARN**
    
    Required
    
    The ARN of the RAM role. This role must have permissions to access both DLF and OSS services.
    
    1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/).
        
    2.  In the navigation pane on the left, choose **Identities** > **Roles**.
        
    3.  In the **Basic Information** section, you can find the **ARN**.
        
    
    Example: `acs:ram::124****:role/aliyunodpsdefaultrole`.
    
    **Storage Type**
    
    -   OSS
        
    -   OSS-HDFS
        
    
    **Endpoint**
    
    Required
    
    Generated by default.
    
    **Bucket Catalog**
    
    Required
    
    Select the complete OSS bucket and the file system directory at the Catalog level. In this example, `oss://paimon-fs/paimon-test/`.
    
    **Table Format**
    
    Required
    
    Paimon is selected by default.
    
    **Billing Method**
    
    Required
    
    **Subscription** or **Pay-as-you-go**.
    
    **Default Quota**
    
    Required
    
    Select an existing quota.
    
    **Description**
    
    Optional
    
    A custom description for the project.
    

### **Step 4: Read from and write to Paimon tables**

1.  To log on to an external project, [select a connection tool](/help/en/maxcompute/user-guide/prepare-an-environment-and-install-required-development-tools).
    
2.  Go to the newly created external project and view the existing Paimon schemas.
    
    ```
    -- Enable schema syntax at the session level.
    SET odps.namespace.schema=true;
    SHOW schemas;
    
    -- The following result is returned.
    ID = 20250922********wbh2u7
    default
    
    
    OK
    ```
    
3.  Read the table in the default schema.
    
    ```
    SET odps.sql.allow.fullscan=true; 
    SELECT * FROM <external_project_name>.default.test_tbl;
    
    -- The following result is returned.
    +------------+------------+------------+
    | id         | data       | dt         | 
    +------------+------------+------------+
    | 1          | CCC        | 2024-07-18 | 
    | 2          | DDD        | 2024-07-18 | 
    | 3          | EEE        | 2025-06-18 | 
    +------------+------------+------------+
    ```
    
4.  Write data to the existing Paimon table.
    
    ```
    INSERT INTO test_tbl PARTITION(dt='2025-08-26') VALUES(4,'FFF');
    SELECT * FROM test_tbl;
    
    -- The following result is returned.
    +------------+------------+------------+
    | id         | data       | dt         | 
    +------------+------------+------------+
    | 1          | CCC        | 2024-07-18 | 
    | 2          | DDD        | 2024-07-18 | 
    | 3          | EEE        | 2025-06-18 | 
    | 4          | FFF        | 2025-08-26 | 
    +------------+------------+------------+
    ```
    
5.  Create a table in the new schema and write data to it.
    
    When you create a table and write data to it, MaxCompute also writes the new data, following the Paimon Catalog's file system structure.
    
    ```
    -- Create a schema.
    CREATE schema testschema;
    
    -- Create a table in the new schema.
    use schema testschema;
    CREATE TABLE table_test(id INT, name STRING);
    
    -- Insert data into the new table and read the data.
    INSERT INTO table_test VALUES (101,'Zhang San'),(102,'Li Si');
    SELECT * FROM table_test;
    
    -- The following result is returned.
    +------------+------------+
    | id         | name       | 
    +------------+------------+
    | 101        | Zhang San  | 
    | 102        | Li Si      | 
    +------------+------------+
    ```
    
6.  Log on to the [OSS console](https://oss.console.alibabacloud.com/). You can find the new schema and table in the bucket directory of the external project.
