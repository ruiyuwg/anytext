This topic describes how to use Flink to create a Paimon Data Lake Formation (DLF) catalog, read MySQL change data capture (CDC) data, write the data to Object Storage Service (OSS), and synchronize the metadata to DLF. You can then use a MaxCompute external schema to perform federated queries on the data in the data lake.

## **Regions**

-   **Supported regions**
    
    **Region Name**
    
    **Region ID**
    
    China (Hangzhou)
    
    cn-hangzhou
    
    China (Shanghai)
    
    cn-shanghai
    
    China (Beijing)
    
    cn-beijing
    
    China (Zhangjiakou)
    
    cn-zhangjiakou
    
    China (Shenzhen)
    
    cn-shenzhen
    
    China (Hong Kong)
    
    cn-hongkong
    
    Singapore
    
    ap-southeast-1
    
    Germany (Frankfurt)
    
    eu-central-1
    
-   MaxCompute, OSS, DLF, and Flink must be deployed in the same region.
    

## **Procedure**

### **Prerequisites**

1.  You have activated the [OSS](https://oss.console.alibabacloud.com/overview) service.
    
2.  You have activated the [DLF](https://dlf.console.alibabacloud.com/cn-beijing/home?spm=a2c4g.11186623.0.0.16814805C0sMIC) service.
    
3.  You have activated the [Flink](https://realtime-compute.console.alibabacloud.com/) service.
    
4.  You have [created a MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project) and [enabled schema support for project-level metadata](/help/en/maxcompute/user-guide/external-project-1-0-migration-to-lake-warehouse-integrated-2-0-schema#ace56f45888li).
    
5.  You have [created an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-apsaradb-rds-for-mysql-instance-1).
    

### **Step 1: Grant MaxCompute permissions to access DLF and OSS**

An account cannot access DLF and OSS services from a MaxCompute project without authorization. You can grant the required permissions in one of the following two ways:

-   One-click authorization: If you use the same account to create the MaxCompute project and deploy DLF, you can click [Authorize DLF](https://ram.console.alibabacloud.com/role/authorization?request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22ODPS%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunODPSDefaultRole%22%2C%22TemplateId%22%3A%22DefaultRole%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fram.console.alibabacloud.com%2Froles%22%7D) for one-click authorization.
    
-   Custom authorization: You can use [custom authorization for DLF](/help/en/maxcompute/user-guide/authorize-a-ram-user-to-access-dlf#task-2166816). This method applies even if you use different accounts to create the MaxCompute project and deploy DLF.
    

### Step 2: Prepare MySQL test data

If you already have MySQL test data, you can skip this step.

1.  Log on to the [RDS console](https://rds.console.alibabacloud.com/dashboard/).
    
2.  In the navigation pane on the left, click **Instances**. Then, select a region in the upper-left corner.
    
3.  On the Instances page, click the target instance's **Instance ID/Name** to open its details page.
    
4.  In the left navigation pane, click **Databases**.
    
5.  Click **Create Database**. Configure the following parameters:
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Example**
    
    **Database Name**
    
    Required
    
    -   The name must be 2 to 64 characters in length.
        
    -   It must start with a letter and end with a letter or a digit.
        
    -   It can contain lowercase letters, digits, underscores (\_), and hyphens (-).
        
    -   The database name must be unique within the instance.
        
    -   If a database name contains a `-`, the `-` in the name of the folder for the created database is converted to `@002d`.
        
    
    `mysql_paimon`
    
    **Supported Character Set**
    
    Required
    
    Select a character set as needed.
    
    `utf8`
    
    **Authorized by**
    
    Optional
    
    -   Select the accounts that need to access this database. You can leave this parameter empty and [attach an account](/help/en/rds/apsaradb-rds-for-mysql/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mysql-instance#concept-ys2-4bp-ydb) after the database is created.
        
    -   Only standard accounts are displayed here. Privileged accounts have all permissions on all databases and do not need authorization.
        
    
    `Default`
    
    **Description**
    
    Optional
    
    A description of the database for easier management. The description can be up to 256 characters in length.
    
    `Create a Flink test database.`
    
6.  Click **Log On to Database**. In the left navigation pane, select **Database Instances**. Double-click the database that you created. On the **SQLConsole** page, execute the following statements to create a test table and write test data.
    
    If the instance exists but the target database is not displayed after you expand the instance, the reason may be one of the following:
    
    -   **The logon account does not have access to the target database**: You can go to the **Accounts** page of the RDS instance to [modify the account permissions](/help/en/rds/apsaradb-rds-for-mysql/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mysql-instance) or [change the logon database account](/help/en/rds/apsaradb-rds-for-mysql/use-dms-to-log-on-to-an-apsaradb-rds-for-mysql-instance-1#ec9f51ac15xkc).
        
    -   **The metadata is not synchronized, which prevents the directory from being displayed**: Hover the mouse pointer over the instance that contains the target database. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7508324671/p1028808.png) button to the right of the instance name to refresh the database list.
        
    
    ```
    -- Create a table
    CREATE TABLE sales (
        id INT NOT NULL AUTO_INCREMENT,
        year INT NOT NULL,
        amount DECIMAL(10,2) NOT NULL,
        product_name VARCHAR(100) NOT NULL,
        customer_name VARCHAR(100) NOT NULL,
        order_date DATE NOT NULL,
        region VARCHAR(50) NOT NULL,
        status VARCHAR(20) NOT NULL,
        PRIMARY KEY (id,year)
    ) PARTITION BY RANGE (year) (
        PARTITION p2020 VALUES LESS THAN (2021),
        PARTITION p2021 VALUES LESS THAN (2022),
        PARTITION p2022 VALUES LESS THAN (2023),
        PARTITION p2023 VALUES LESS THAN (2024)
    );
    
    -- Write data
    INSERT INTO sales (year, amount, product_name, customer_name, order_date, region, status) VALUES
    (2020, 100.00, 'Product A', 'Customer 1', '2020-01-01', 'Region 1', 'Completed'),
    (2020, 200.00, 'Product B', 'Customer 2', '2020-02-01', 'Region 2', 'Pending'),
    (2021, 150.00, 'Product C', 'Customer 3', '2021-03-01', 'Region 3', 'Completed'),
    (2021, 300.00, 'Product D', 'Customer 4', '2021-04-01', 'Region 4', 'Pending'),
    (2022, 250.00, 'Product E', 'Customer 5', '2022-05-01', 'Region 5', 'Completed'),
    (2022, 400.00, 'Product F', 'Customer 6', '2022-06-01', 'Region 6', 'Pending'),
    (2023, 350.00, 'Product G', 'Customer 7', '2023-07-01', 'Region 7', 'Completed'),
    (2023, 500.00, 'Product H', 'Customer 8', '2023-08-01', 'Region 8', 'Pending'),
    (2020, 450.00, 'Product I', 'Customer 9', '2020-09-01', 'Region 1', 'Completed'),
    (2021, 600.00, 'Product J', 'Customer 10', '2021-10-01', 'Region 2', 'Pending');
    ```
    
7.  Query the data in the test table.
    
    ```
    SELECT * FROM sales;
    ```
    
    The following result is returned:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1155568571/p1008115.png)
    

### Step 3: Prepare a DLF metadatabase

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/) and create a bucket. In this example, the bucket is named `mc-lakehouse-dlf-oss`. For more information, see [Create buckets](/help/en/oss/user-guide/console-quick-start#section-73g-119-c8q).
    
2.  Create a folder named `**flink_paimon**` in the bucket.
    
3.  Log on to the [Data Lake Formation (DLF) console](https://dlf.console.alibabacloud.com/cn-beijing/home?spm=a2c4g.11186623.0.0.16814805C0sMIC) and select a region in the upper-left corner.
    
4.  In the navigation pane on the left, choose **Metadata** > **Metadata**.
    
5.  On the **Metadata** page, click the **Database** tab.
    
6.  Under the **default** **Catalog List**, click **Create Database**. Configure the following parameters:
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Catalog**
    
    Required
    
    In this example, the data catalog is **default**.
    
    **Database Name:**
    
    Required
    
    A custom database name. The name must be 1 to 128 characters in length, start with a letter, and contain only letters, digits, and underscores (\_). Example: `db_dlf_oss`.
    
    **Database Description:**
    
    Optional
    
    A custom description.
    
    **Select Path:**
    
    Required
    
    The storage location of the database. Example: `oss://mc-lakehouse-dlf-oss/flink_paimon/`.
    

### **Step 4: Create Paimon and MySQL catalogs using Flink**

1.  **Create a Paimon catalog**:
    
    1.  Log on to the [Flink console](https://realtime-compute.console.alibabacloud.com/?spm=5176.29922413.J_AHgvE-XDhTWrtotIBlDQQ.9.3b6735cdJ577ie#/region/cn-beijing/resource/all/dashboard/serverless/asi). In the upper-left corner of the page, select a region.
        
    2.  Click the name of the target workspace. In the navigation pane on the left, select **Catalogs**.
        
    3.  On the **Catalog List** page, click **Create Catalog** . In the **Create Catalog** dialog box, select **Apache Paimon**, click **Next**, and then configure the following parameters:
        
        **Parameter**
        
        **Required**
        
        **Description**
        
        **metastore**
        
        Required
        
        The type of metastore. In this example, select `dlf`.
        
        **catalog name**
        
        Required
        
        Select the version of the DLF catalog that you want to associate. In this example, select `v1.0`.
        
        **warehouse**
        
        Required
        
        The data warehouse directory specified in OSS. In this example, the directory is `oss://mc-lakehouse-dlf-oss/flink_paimon/`.
        
        **fs.oss.endpoint**
        
        Required
        
        The endpoint of the OSS service. For example, the endpoint for the China (Hangzhou) region is `oss-cn-hangzhou-internal.aliyuncs.com`.
        
        **fs.oss.accessKeyId**
        
        Required
        
        The AccessKey ID used to access the OSS service.
        
        **fs.oss.accessKeySecret**
        
        Required
        
        The AccessKey secret used to access the OSS service.
        
        **dlf.catalog.accessKeyId**
        
        Required
        
        The AccessKey ID used to access the DLF service.
        
        **dlf.catalog.accessKeySecret**
        
        Required
        
        The AccessKey secret used to access the DLF service.
        
2.  **Create a MySQL catalog**:
    
    1.  Log on to the [Flink console](https://realtime-compute.console.alibabacloud.com/?spm=5176.29922413.J_AHgvE-XDhTWrtotIBlDQQ.9.3b6735cdJ577ie#/region/cn-beijing/resource/all/dashboard/serverless/asi). In the upper-left corner of the page, select a region.
        
    2.  Add an IP address to the whitelist.
        
        1.  In the **Actions** column of the target workspace, click **Details**.
            
            In the **Workspace Details** panel that appears, copy the value of **CIDR Block** for the vSwitch.
            
        2.  Log on to the [RDS console](https://rds.console.alibabacloud.com/dashboard/).
            
            In the navigation pane on the left, click **Instances**. Then, select a region in the upper-left corner.
            
            On the Instances page, click the target instance's **Instance ID/Name** to open its details page.
            
        3.  In the navigation pane on the left, click **Whitelist and SecGroup**.
            
            On the **Whitelist Settings** tab, click **Modify**.
            
        4.  In the **Edit Whitelist** dialog box, add the copied CIDR block to the **IP Addresses** field, and then click **OK**.
            
    3.  Log on to the [Flink console](https://realtime-compute.console.alibabacloud.com/?spm=5176.29922413.J_AHgvE-XDhTWrtotIBlDQQ.9.3b6735cdJ577ie#/region/cn-beijing/resource/all/dashboard/serverless/asi). In the upper-left corner of the page, select a region.
        
        Click the name of the target workspace. In the navigation pane on the left, select **Catalogs**.
        
    4.  On the **Catalog List** page, click **Create Catalog**. In the **Create Catalog** dialog box, select **MySQL**, click **Next**, and then configure the following parameters:
        
        **Parameter**
        
        **Required**
        
        **Description**
        
        **catalog name**
        
        Required
        
        A custom name for the MySQL catalog. Example: `mysql-catalog`.
        
        **hostname**
        
        Required
        
        -   The IP address or hostname of the MySQL database.
            
        -   You can log on to the [RDS MySQL console](https://rds.console.alibabacloud.com/). On the database instance details page, click **Database Connection** to view the database's **Internal Endpoint**, **Public Endpoint**, and **Internal Port**.
            
        -   If you access the database across VPCs or over the public network, you must establish a network connection. For more information, see [Network connectivity](/help/en/flink/realtime-flink/support/faq-about-network-connectivity).
            
        
        **port**
        
        Default
        
        The port used to connect to the server. The default value is 3306.
        
        **default database**
        
        Required
        
        The default database name. Example: `mysql_paimon`.
        
        **username**
        
        Required
        
        The username used to connect to the MySQL database server. You can log on to the [ApsaraDB RDS for MySQL console](https://rds.console.alibabacloud.com/). On the database instance details page, click **Accounts** to view the username.
        
        **password**
        
        Required
        
        The password used to connect to the MySQL database server. You can log on to the [ApsaraDB RDS for MySQL console](https://rds.console.alibabacloud.com/). On the database instance details page, click **Accounts** to view the password.
        

### Step 5: Use Flink to read data from MySQL, write data to Paimon, and synchronize metadata to DLF

1.  Log on to the [Flink console](https://realtime-compute.console.alibabacloud.com/?spm=5176.29922413.J_AHgvE-XDhTWrtotIBlDQQ.9.3b6735cdJ577ie#/region/cn-beijing/resource/all/dashboard/serverless/asi). In the upper-left corner of the page, select a region.
    
2.  Click the name of the target workspace. In the navigation pane on the left, select **Data Development** > **ETL**.
    
3.  On the **Drafts** tab, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7508324671/p1029653.png) to create a new folder.
    
4.  Right-click a folder and select **New Blank Stream Draft**. In the **New Draft** dialog box, enter a **Name** and select an **Engine Version**.
    
5.  In the file, enter the following [CREATE TABLE AS (CTAS) SQL](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement) statement. Make sure to modify the names in the code based on your actual configuration.
    
    ```
    CREATE TABLE IF NOT EXISTS `<dlf_meta_db_name>`.`<OSS_bucket_name>`.`sales` 
    AS TABLE `<mysql_catalog_name>`.`<RDS_mysql_name>`.`sales`;
    
    -- You can copy the following code if you use the names from this topic. 
    CREATE TABLE IF NOT EXISTS `db_dlf_oss`.`flink_paimon`.`sales` 
    AS TABLE `mysql-catalog`.`mysql_paimon`.`sales`;
    ```
    
    1.  Optional: In the upper-right corner, click **Validate** to check the Flink SQL statement for syntax errors.
        
    2.  In the upper-right corner, click **Deploy**. In the **Deploy draft** dialog box, enter values for **Comment**, **Label**, and **Deployment Target**, and then click **Confirm**.
        
6.  Click the name of the target workspace. In the navigation pane on the left, select **O&M** > **Deployments**.
    
7.  On the **Deployments** page, click the name of the target job to open the **Configuration** page.
    
8.  In the upper-right corner of the deployment details page, click **Start**, select an **Initial Mode**, and then click **Start**.
    
9.  Query the Paimon data.
    
    In the navigation pane on the left, select **Development** > **Scripts**.
    
    On the **New Script** tab, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2825568571/p1008251.png) to create a new query script.
    
    Run the following code:
    
    ```
    SELECT * FROM `<paimon_catalog_name>`.`flink_paimon`.`sales`;
    ```
    
    The following result is returned:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1155568571/p1008256.png)
    
10.  Go to the [OSS console](https://oss.console.alibabacloud.com/) and check the `mc-lakehouse-dlf-oss/flink_paimon/` directory. A `sales/` folder is generated. The generated files are shown in the following figure:
     
     ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1155568571/p1008257.png)
     
11.  Log on to the [Data Lake Formation (DLF) console](https://dlf.console.alibabacloud.com/cn-beijing/home?spm=a2c4g.11186623.0.0.16814805C0sMIC) and select a region in the upper-left corner.
     
     In the navigation pane on the left, choose **Metadata** > **Metadata**.
     
     Click the database name `flink_paimon`. You can view the generated table, as shown in the following figure:
     
     ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1155568571/p1008258.png)
     

### **Step 6: Create a DLF+OSS external data source in MaxCompute**

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Foreign Server**.
    
3.  On the **Foreign Server** page, click **Create Foreign Server**.
    
4.  In the **Add Foreign Server** dialog box, configure the parameters. The following tables describe the parameters.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Foreign Server Type**
    
    Required
    
    Select **DLF+OSS**.
    
    **Foreign Server Name**
    
    Required
    
    A custom name. The naming conventions are as follows:
    
    -   The name must start with a letter and can contain only lowercase letters, underscores (\_), and digits.
        
    -   The name cannot exceed 128 characters in length.
        
    
    Example: `mysql_paimon_dlf`.
    
    **Foreign Server Description**
    
    Optional
    
    Enter a description as needed.
    
    **Region**
    
    Required
    
    The current region is used by default.
    
    **DLF Endpoint**
    
    Required
    
    The DLF Endpoint of the current region is used by default.
    
    **OSS Endpoint**
    
    Required
    
    The OSS Endpoint of the current region is used by default.
    
    **RoleARN**
    
    Required
    
    The Alibaba Cloud Resource Name (ARN) of the RAM role. This role must have the permissions to access both DLF and OSS services.
    
    1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/).
        
    2.  In the navigation pane on the left, choose **Identities** > **Roles**.
        
    3.  In the **Basic Information** section, you can find the **ARN**.
        
    
    Example: `acs:ram::124****:role/aliyunodpsdefaultrole`.
    
    **Foreign Server Supplemental Properties**
    
    Optional
    
    Additional properties for the external data source. After you specify these properties, tasks that use this external data source can access the source system based on the defined behavior.
    
    **Note**
    
    For information about the supported parameters, see the official documentation. More parameters will be supported as the product evolves.
    
5.  Click **OK** to create the external data source.
    
6.  On the **Foreign Server** page, find the target data source and click **Details** in the **Actions** column.
    

### Step 7: Create an external schema

Connect to MaxCompute and enter the following command:

```
SET odps.namespace.schema=true;

CREATE EXTERNAL SCHEMA IF NOT EXISTS <external_schema>
WITH <external_data_source>
ON '<dlf_data_catalogue>.dlf_database';
```

The following table describes the parameters.

-   external\_schema: The **name of the external schema**. For example, `es_mc_dlf_oss_paimon`.
    
-   external\_data\_source: The name of the **external data source** that you created. The project to which the external schema belongs must be in the same region as the external data source. For example, `mysql_paimon_dlf`.
    
-   dlf\_data\_catalogue: The **ID of the DLF data catalog**. For more information, see [Create a data catalog](/help/en/dlf/dlf-1-0/user-guide/catalog#sectiondiv-5c4-dx8-r4g). For example, `db_dlf_oss`.
    
-   dlf\_database: The **name of the database** in the specified DLF data catalog. For more information, see [Databases, tables, and functions](/help/en/dlf/dlf-1-0/user-guide/manage-metadata#section-454-z7w-bs4). For example, `flink_paimon`.
    

### Step 8: Use SQL to access OSS data

1.  Log on to the MaxCompute client and query the tables in the external schema.
    

```
SET odps.namespace.schema=true;
use schema es_mc_dlf_oss_paimon;
SHOW tables IN es_mc_dlf_oss_paimon;

-- The following result is returned:
ALIYUN$xxx:sales

OK
```

2.  Query the data in a table of the external schema.
    

```
SET odps.namespace.schema=true;
SELECT * FROM <maxcompute_project_name>.es_mc_dlf_oss_paimon.sales;

-- The following result is returned:
+------------+------------+------------+--------------+---------------+------------+------------+------------+
| id         | year       | amount     | product_name | customer_name | order_date | region     | status     | 
+------------+------------+------------+--------------+---------------+------------+------------+------------+
| 1          | 2020       | 100        | Product A    | Customer 1    | 2020-01-01 | Region 1   | Completed  | 
| 2          | 2020       | 200        | Product B    | Customer 2    | 2020-02-01 | Region 2   | Pending    | 
| 3          | 2021       | 150        | Product C    | Customer 3    | 2021-03-01 | Region 3   | Completed  | 
| 4          | 2021       | 300        | Product D    | Customer 4    | 2021-04-01 | Region 4   | Pending    | 
| 5          | 2022       | 250        | Product E    | Customer 5    | 2022-05-01 | Region 5   | Completed  | 
| 6          | 2022       | 400        | Product F    | Customer 6    | 2022-06-01 | Region 6   | Pending    | 
| 7          | 2023       | 350        | Product G    | Customer 7    | 2023-07-01 | Region 7   | Completed  | 
| 8          | 2023       | 500        | Product H    | Customer 8    | 2023-08-01 | Region 8   | Pending    | 
| 9          | 2020       | 450        | Product I    | Customer 9    | 2020-09-01 | Region 1   | Completed  | 
| 10         | 2021       | 600        | Product J    | Customer 10   | 2021-10-01 | Region 2   | Pending    | 
+------------+------------+------------+--------------+---------------+------------+------------+------------+
```
