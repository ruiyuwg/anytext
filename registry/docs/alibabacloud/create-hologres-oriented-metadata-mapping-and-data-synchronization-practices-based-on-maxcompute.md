This topic describes how to create metadata mappings and data synchronization tasks for Hologres based on MaxCompute.

## **Background**

In a traditional data warehouse architecture, upstream real-time or batch data is written to a data warehouse and analyzed using an online analytical processing (OLAP) engine. This process is shown in the upper part of the following figure. However, some scenarios require you to read Hologres data in MaxCompute, as shown in the lower part of the following figure. Examples include the following:

-   **Real-time data exposure and archiving**: Data must be quickly exposed from real-time data sources to business applications. After the real-time data warehousing requirements are met, the data is archived to the corresponding layers and subject areas of the enterprise-level data warehouse.
    
-   **Business-first approach and data backflow**: Business requirements are met first without unified processing through the data warehouse. However, after the data mart stabilizes, the data must flow back to the enterprise-level data warehouse and be integrated with the DWD and DWS layers.
    

The data access methods for these two scenarios are as follows:

-   Browsing data in the real-time data warehouse during the iteration and improvement of the data warehouse model.
    
-   Periodically archiving data from the real-time data warehouse or data mart to the enterprise-level data warehouse.
    
-   Writing data processed by the enterprise-level data warehouse to the Hologres ADS layer for business consumption.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5814564471/p940022.png)

## **Function introduction**

This tutorial shows you how to build a metadata mapping pipeline from MaxCompute to Hologres with the following features:

-   **Schema-level metadata mapping:** You can use RAM role authentication to read Hologres metadata and data in real time through external schemas for schema-level data access.
    
-   **Single-table-level metadata mapping:** You can select tables in a Hologres data catalog and have the system automatically create MaxCompute external tables that map to the Hologres tables with a single click.
    
-   **Data synchronization:** You can configure tables that require recurring synchronization as data synchronization tasks with a single click. This meets the requirement of periodically synchronizing data to the enterprise-level data warehouse.
    

**Note**

Data type mappings differ between MaxCompute and Hologres. Some Hologres data types cannot be synchronized to MaxCompute. For more information, see [Data type mappings between MaxCompute and Hologres](/help/en/hologres/developer-reference/data-types#section-w14-cec-th7).

## **Data synchronization workflow**

This tutorial is based on a [real-time data warehouse built using Flink and Hologres](/help/en/flink/realtime-flink/use-cases/build-real-time-data-warehouse-based-on-flink-hologres). In the DWD layer of the Hologres real-time data warehouse, a process is added to map MaxCompute to Hologres schemas and tables and to synchronize data from tables in the DWD layer. The following figure shows the details of this process.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5814564471/p938421.png)

Supported:

-   Mapping to Hologres schemas using external schemas.
    
-   Mapping to Hologres tables using external tables.
    
-   Specifying Hologres tables for one-time or recurring data synchronization.
    

## **Procedure**

### **Prerequisites**

1.  [You have activated MaxCompute and DataWorks](/help/en/maxcompute/getting-started/activate-maxcompute-and-dataworks).
    
2.  [You have created a MaxCompute project](/help/en/maxcompute/user-guide/manage-projects-in-the-new-maxcompute-console#section-kyn-naf-x12) and [enabled support for schema-level hierarchy](/help/en/maxcompute/user-guide/schema-related-operations#3ce74ea9f5m32).
    
3.  [You have created a RAM role](/help/en/maxcompute/user-guide/hologres-foreign-tables#34e92e5e1dig6) and configured a trust policy.
    
4.  You have activated RDS.
    
5.  You have activated Hologres.
    
6.  You have activated Flink.
    

### **Step 1: Create an ApsaraDB RDS for MySQL instance and prepare a data source**

**Important**

-   The ApsaraDB RDS for MySQL instance, Hologres instance, and Flink instance must be in the **same region** and **same zone** and use the **same VPC**.
    
-   In the [Realtime Compute console](https://realtime-compute.console.alibabacloud.com/console/cell?spm=a2c4g.11186623.0.0.6249628bPxJ2cS), you can use the network probing feature to check network connectivity between your Flink workspace and RDS for MySQL and Hologres instances. For more information, see [How to Perform Network Probing](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#8506ebadefi7x).
    

1.  Log on to the [RDS console](https://rds.console.alibabacloud.com/dashboard/).
    
    In the navigation pane on the left, click **Instances**. Then, select a region in the upper-left corner.
    
2.  On the Instances page, click **Create Instance**.
    
    In this example, **Billing Method** is set to pay-as-you-go, and **Database Engine** is set to MySQL 8.0.
    
3.  On the Instances page, click the target instance's **Instance ID/Name** to open its details page.
    
4.  In the navigation pane on the left, click **Accounts** > .
    
    Create a database logon account.
    
5.  In the left navigation pane, click **Databases**.
    
    Click **Create Database**. Configure the following parameters:
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Example**
    
    **Database Name**
    
    Required
    
    -   Length: 2–64 characters.
        
    -   Must start with a letter and end with a letter or digit.
        
    -   Can contain only lowercase letters, digits, underscores (\_), or hyphens (-).
        
    -   Must be unique within the instance.
        
    -   If a database name contains `-`, the `-` in the name of the created database folder is converted to `@002d`.
        
    
    `hologres_test`
    
    **Authorized by**
    
    Optional
    
    Only standard accounts appear here. **A privileged account has full permissions on all databases and does not require authorization.**
    
    `Select the logon account that you just created.`
    
6.  Click **Log On to Database**. In the left navigation pane, select **Database Instances**. Double-click the database that you created. On the **SQLConsole** page, execute the following statements to create a test table and write test data.
    
    ```
    CREATE TABLE `orders` (
      order_id bigint not null primary key,
      user_id varchar(50) not null,
      shop_id bigint not null,
      product_id bigint not null,
      buy_fee numeric(20,2) not null,   
      create_time timestamp not null,
      update_time timestamp not null default now(),
      state int not null 
    );
    
    
    CREATE TABLE `orders_pay` (
      pay_id bigint not null primary key,
      order_id bigint not null,
      pay_platform int not null,
      create_time timestamp not null
    );
    
    
    CREATE TABLE `product_catalog` (
      product_id bigint not null primary key,
      catalog_name varchar(50) not null
    );
    
    -- Prepare data.
    INSERT INTO product_catalog VALUES(1, 'phone_aaa'),(2, 'phone_bbb'),(3, 'phone_ccc'),(4, 'phone_ddd'),(5, 'phone_eee');
    
    INSERT INTO orders VALUES
    (100001, 'user_001', 12345, 1, 5000.05, '2023-02-15 16:40:56', '2023-02-15 18:42:56', 1),
    (100002, 'user_002', 12346, 2, 4000.04, '2023-02-15 15:40:56', '2023-02-15 18:42:56', 1),
    (100003, 'user_003', 12347, 3, 3000.03, '2023-02-15 14:40:56', '2023-02-15 18:42:56', 1),
    (100004, 'user_001', 12347, 4, 2000.02, '2023-02-15 13:40:56', '2023-02-15 18:42:56', 1),
    (100005, 'user_002', 12348, 5, 1000.01, '2023-02-15 12:40:56', '2023-02-15 18:42:56', 1),
    (100006, 'user_001', 12348, 1, 1000.01, '2023-02-15 11:40:56', '2023-02-15 18:42:56', 1),
    (100007, 'user_003', 12347, 4, 2000.02, '2023-02-15 10:40:56', '2023-02-15 18:42:56', 1);
    
    INSERT INTO orders_pay VALUES
    (2001, 100001, 1, '2023-02-15 17:40:56'),
    (2002, 100002, 1, '2023-02-15 17:40:56'),
    (2003, 100003, 0, '2023-02-15 17:40:56'),
    (2004, 100004, 0, '2023-02-15 17:40:56'),
    (2005, 100005, 0, '2023-02-15 18:40:56'),
    (2006, 100006, 0, '2023-02-15 18:40:56'),
    (2007, 100007, 0, '2023-02-15 18:40:56');
    ```
    

### **Step 2: Create a Hologres instance and a database**

1.  Log on to [the Hologres Management Console](https://hologram.console.alibabacloud.com/), and in the upper-left corner, select a region.
    
    If you do not have an instance, first [purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance).
    
    -   For **Product Type**, select **Exclusive Instance (pay-as-you-go)**.
        
    -   For **Specifications**, select **Compute Group Type**.
        
    -   **Reserved Computing Resources of Virtual Warehouse**: Select 64 CUs
        
2.  On the **Instances** page, click the target instance name.
    
3.  On the instance details page, click **Connect to Instance**.
    
    Click the **Metadata Management** tab above.
    
4.  Click **Create Database**. In the dialog box that appears, enter a **Database Name** and keep the default settings for other parameters.
    
    In this example, the Hologres database is named `holodb`.
    
5.  Click the **Security Center** tab above.
    
    In the navigation pane on the left, select **User Management**.
    
    -   Grant the `SuperUser` permission to the `AliyunODPSDefaultRole` role to ensure that it has table operation permissions for Hologres. For more information, see [User Management](/help/en/hologres/user-guide/manage-users#section-fl8-01i-h48).
        
    -   Grant the RAM role the **Developer** permission for the instance. This is supported only in SPM mode. For more information, see [DB Management](/help/en/hologres/user-guide/manage-databases#section-89y-ij4-onv).
        

### **Step 3: Create a whole-database sync task for ApsaraDB RDS for MySQL in Flink (ODS layer)**

1.  Create an RDS for MySQL full-database sync task in Flink to synchronize data from RDS for MySQL to the `public` schema of the Hologres database `holodb`. You can then use the default compute group `init_warehouse` in Hologres to query the ODS data.
    
2.  You must enable binary logging for MySQL in advance. You can run the `show variables like "log_bin";` command in the RDS for MySQL database to check whether binary logging is enabled. For more information, see [MySQL Server Configuration Requirements](/help/en/flink/configure-a-mysql-database#f369904016fvh).
    
3.  Create a session cluster.
    
    1.  Log on to the [Flink console](https://realtime-compute.console.alibabacloud.com/?spm=5176.29922413.J_AHgvE-XDhTWrtotIBlDQQ.9.3b6735cdJ577ie#/region/cn-beijing/resource/all/dashboard/serverless/asi). In the upper-left corner of the page, select a region.
        
    2.  Click the name of the target workspace. In the navigation pane on the left, select **O&M** > **Session Clusters**.
        
    3.  Click Create Session Cluster.
        
4.  Create a Hologres catalog.
    
    1.  Click the name of the target workspace. In the navigation pane on the left, select **Catalogs**.
        
    2.  On the **Catalog List** page, click **Create Catalog**. In the **Create Catalog** dialog box, select **Hologres**, click Next, and then configure the following parameters:
        
        **Parameter**
        
        **Required**
        
        **Description**
        
5.  Create a MySQL catalog.
    
    On the **Catalog List** page, click **Create Catalog**. In the **Create Catalog** dialog box, select **MySQL**, click **Next**, and then configure the following parameters:
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **catalog name**
    
    Required
    
    A custom name for the MySQL Catalog.
    
    **hostname**
    
    Required
    
    -   The IP address or hostname of the MySQL database.
        
    -   You can log on to the [RDS MySQL console](https://rds.console.alibabacloud.com/). On the details page of the database instance, click **Database Connection** to view the **Internal Endpoint**, **Public Endpoint**, and **Internal Port**.
        
    -   When accessing across VPCs or over the Internet, you must establish a network connection. For more information, see [Network connectivity](/help/en/flink/realtime-flink/support/faq-about-network-connectivity).
        
    
    **port**
    
    Default
    
    The port used to connect to the server. The default is 3306.
    
    **default database**
    
    Required
    
    The name of the default database. Example: `mysql_paimon`.
    
    **username**
    
    This parameter is required.
    
    The username used to connect to the MySQL database server. Log on to the [RDS for MySQL console](https://rds.console.alibabacloud.com/). On the database instance product page, click **Account Management** to view the username.
    
    **password**
    
    Required
    
    The password used to connect to the MySQL database server. Log on to the [RDS for MySQL console](https://rds.console.alibabacloud.com/). On the database instance product page, click **Account Management** to view the password.
    
6.  Synchronize data from ApsaraDB RDS for MySQL to Hologres using Flink.
    
    1.  Click the name of the target workspace. In the navigation pane on the left, select **Data Development** > **ETL**.
        
    2.  On the **Drafts** tab, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7508324671/p1029653.png) to create a new folder.
        
    3.  Right-click a folder and select **New Blank Stream Draft**. In the **New Draft** dialog box, enter a **Name** and select an **Engine Version**.
        
        ```
        CREATE DATABASE IF NOT EXISTS <your hologres catalog>.<hologres database name>    -- The table_property.binlog.level parameter was set when the catalog was created. Therefore, binary logging is enabled for all tables created using CDAS.
        AS DATABASE <your mysql catalog>.<mysql database name> INCLUDING all tables -- You can select the tables from the upstream database that you want to ingest into the data warehouse.
        /*+ OPTIONS('server-id'='8001-8004') */ ;   -- Specify the server-id range for the MySQL CDC instance.
        ```
        
        Click **Deploy** in the upper-right corner.
        
    4.  On the **Deployments** page, click the name of the target job to open the **Configuration** page.
        
    5.  In the upper-right corner of the deployment details page, click **Start**, select an **Initial Mode**, and then click **Start**.
        
    
    **Note**
    
    -   By default, this example synchronizes data to the public schema of the Hologres database. You can also synchronize data to a specified schema in the destination Hologres database. For more information, see [Use as a destination catalog for CDAS](/help/en/flink/realtime-flink/user-guide/manage-hologres-catalogs#b4aee380e20ck). After you specify a schema, the table name format also changes when you use the catalog. For more information, see [Use a Hologres catalog](/help/en/flink/realtime-flink/user-guide/manage-hologres-catalogs#section-x6a-as1-mbe).
        
    -   If the data structure of the source table changes, you must wait for data changes, such as deletions, insertions, or updates, to occur in the source table before the structural changes are visible in the sink table.
        
    

### **Step 4: Load data to Hologres**

Table groups store data in Hologres.

To query data from a Table Group in the `holodb` database (such as `order_dw_tg_default`) using the compute group `init_warehouse`, you must first load the Table Group into the compute group. Only then can you use the `init_warehouse` compute group to query and write data.

On the HoloWeb development page, click **SQL Editor**, confirm the instance name and database name, and run the following command.

For more information, see [Create a New Virtual Warehouse Instance](/help/en/hologres/user-guide/getting-started-with-virtual-warehouses#76e27560f35b0).

1.  Log on to [the Hologres Management Console](https://hologram.console.alibabacloud.com/), and in the upper-left corner, select a region.
    
2.  In the navigation pane on the left, select **Instances**.
    
    On the **Instances** page, click the target instance name.
    
3.  On the instance details page, click **Connect to Instance**.
    
4.  Click the **SQL Editor** tab above.
    
    Confirm the instance and database names, and then run the following command. After the data is loaded, you can see that the compute group has loaded the data from the `holodb_tg_default` table group.
    
    ```
    -- View the table groups in the current database.
    SELECT tablegroup_name FROM hologres.hg_table_group_properties GROUP BY tablegroup_name;
    
    -- Load a table group to the compute group.
    CALL hg_table_group_load_to_warehouse ('<hologres database name>.<table group name>', '<your Virtual Warehouse name>', 1);
    
    -- View the status of loading the table group to the compute group.
    SELECT * FROM hologres.hg_warehouse_table_groups;
    ```
    
5.  Run the following commands to view the data in the three tables that were synchronized from MySQL to Hologres.
    
    ```
    ---Query data in the orders table.
    SELECT * FROM orders;
    
    ---Query data in the orders_pay table.
    SELECT * FROM orders_pay;
    
    ---Query data in the product_catalog table.
    SELECT * FROM product_catalog;
    ```
    

### **Step 5: Create a DWD layer table in Flink**

The capability of updating specific columns supported by the Hologres connector is used to build the DWD layer. You can use the INSERT statements to perform efficient partial updates. High-performance point queries based on column-oriented data storage and hybrid row-columnar data storage of Hologres help you query data of different dimension tables. Hologres uses a strong resource isolation architecture, which prevents interference among write, read, and analytics workloads.

Use the Flink Catalog feature to create the wide table `dwd_orders` in the DWD layer of Hologres.

1.  Log on to the [Flink console](https://realtime-compute.console.alibabacloud.com/?spm=5176.29922413.J_AHgvE-XDhTWrtotIBlDQQ.9.3b6735cdJ577ie#/region/cn-beijing/resource/all/dashboard/serverless/asi). In the upper-left corner of the page, select a region.
    
2.  Click the name of the target workspace. In the navigation pane on the left, select **Development** > **Scripts**.
    
3.  On the **New Script** tab, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2825568571/p1008251.png) to create a new query script.
    
    After you enter the following code, click **Run** in the upper-right corner.
    
    ```
    -- Wide table fields must be nullable because different streams write to the same result table, and each column may contain NULL values.
    CREATE TABLE <hologres catalog>.<hologres database>.dwd_orders (
      order_id bigint not null,
      order_user_id string,
      order_shop_id bigint,
      order_product_id bigint,
      order_product_catalog_name string,
      order_fee numeric(20,2),
      order_create_time timestamp,
      order_update_time timestamp,
      order_state int,
      pay_id bigint,
      pay_platform int comment 'platform 0: phone, 1: pc', 
      pay_create_time timestamp,
      PRIMARY KEY(order_id) NOT ENFORCED
    );
    
    -- Modify physical table properties of Hologres through the catalog.
    ALTER TABLE <hologres catalog>.<hologres database>.dwd_orders SET (
      'table_property.binlog.ttl' = '604800' -- Set binlog timeout to one week.
    );
    ```
    
4.  Consume binlogs from the `orders` and `orders_pay` tables in the Operational Data Store (ODS) layer in real time.
    
    1.  Click the name of the target workspace. In the navigation pane on the left, select **Data Development** > **ETL**.
        
    2.  Create an SQL stream job named DWD. Copy the following code to the SQL editor, and then deploy and start the job. The `orders` table is joined with the `product_catalog` dimension table, and the result is written to the `dwd_orders` table for real-time data enrichment.
        
        ```
        BEGIN STATEMENT SET;
        
        INSERT INTO <your hologres catalog name>.<your hologres database name>.dwd_orders 
         (
           order_id,
           order_user_id,
           order_shop_id,
           order_product_id,
           order_fee,
           order_create_time,
           order_update_time,
           order_state,
           order_product_catalog_name
         ) SELECT o.*, dim.catalog_name 
           FROM <your hologres catalog name>.<your hologres database name>.orders as o
           LEFT JOIN <your hologres catalog name>.<your hologres database name>.product_catalog FOR SYSTEM_TIME AS OF proctime() AS dim
           ON o.product_id = dim.product_id;
        
        INSERT INTO <your hologres catalog name>.<your hologres database name>.dwd_orders 
          (pay_id, order_id, pay_platform, pay_create_time)
           SELECT * FROM <your hologres catalog name>.<your hologres database name>.orders_pay;
        
        END;
        ```
        
    3.  View the data in the wide table `dwd_orders`.
        
        Connect to the Hologres instance, log on to the target database on the HoloWeb developer page, and then run the following command in the SQL editor.
        
        ```
        SELECT * FROM dwd_orders;
        ```
        
        The following result is returned:
        
        ```
        +------------+---------------+---------------+------------------+----------------------------+------------+-------------------+-------------------+-------------+------------+--------------+-----------------+
        | order_id   | order_user_id | order_shop_id | order_product_id | order_product_catalog_name | order_fee  | order_create_time | order_update_time | order_state | pay_id     | pay_platform | pay_create_time | 
        +------------+---------------+---------------+------------------+----------------------------+------------+-------------------+-------------------+-------------+------------+--------------+-----------------+
        | 100002     | user_002      | 12346         | 2                | phone_bbb                  | 4000.04    | 2023-02-15 15:40:56 | 2023-02-15 18:42:56 | 1           | NULL       | NULL         | NULL            | 
        | 100004     | user_001      | 12347         | 4                | phone_ddd                  | 2000.02    | 2023-02-15 13:40:56 | 2023-02-15 18:42:56 | 1           | NULL       | NULL         | NULL            | 
        | 11111      | user_test     | 12346         | 2                | phone_bbb                  | 4000.04    | 2025-12-15 00:00:00 | 2025-12-15 00:00:00 | 1           | NULL       | NULL         | NULL            | 
        | 100001     | user_001      | 12345         | 1                | phone_aaa                  | 5000.05    | 2023-02-15 16:40:56 | 2023-02-15 18:42:56 | 1           | NULL       | NULL         | NULL            | 
        | 100007     | user_003      | 12347         | 4                | phone_ddd                  | 2000.02    | 2023-02-15 10:40:56 | 2023-02-15 18:42:56 | 1           | NULL       | NULL         | NULL            | 
        | 100006     | user_001      | 12348         | 1                | phone_aaa                  | 1000.01    | 2023-02-15 11:40:56 | 2023-02-15 18:42:56 | 1           | NULL       | NULL         | NULL            | 
        | 100005     | user_002      | 12348         | 5                | phone_eee                  | 1000.01    | 2023-02-15 12:40:56 | 2023-02-15 18:42:56 | 1           | NULL       | NULL         | NULL            | 
        | 100003     | user_003      | 12347         | 3                | phone_ccc                  | 3000.03    | 2023-02-15 14:40:56 | 2023-02-15 18:42:56 | 1           | NULL       | NULL         | NULL            | 
        +------------+---------------+---------------+------------------+----------------------------+------------+-------------------+-------------------+-------------+------------+--------------+-----------------+
        ```
        

1.  Bind the MaxCompute project and Hologres instance in DataWorks.
    
2.  Return to MaxCompute to create an external schema.
    

### **Step 6: Bind MaxCompute and Hologres computing resources in DataWorks**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview) and select a region in the upper-left corner.
    
2.  [Create a DataWorks workspace](/help/en/dataworks/user-guide/create-a-workspace). In this tutorial, the workspace is named `Hologres_DW_TEST`.
    
3.  On the **Workspaces** page, click the name of the target workspace.
    
4.  On the **Workspace Details** page, click **Computing Resource** in the left navigation pane.
    
    On the **Computing Resource** page, click **Associate Compute Resource** and select **MaxCompute** and **Hologres**.
    
    Enter the basic information. For more information, see [Bind compute resources](/help/en/dataworks/create-and-manage-compute-resources-new-data-development#3665bdc52cckm).
    
5.  Add and view MaxCompute projects and Hologres instances.
    
    1.  In the left navigation pane, choose **Data Development and O&M** > **Data Development**.
        
    2.  In the **Select Workspace** section, click **Go To DataStudio**.
        
    3.  Add and view MaxCompute projects and Hologres instances.
        

### **Step 7: Create a MaxCompute external schema that maps to a Hologres schema**

When you map Hologres tables using an external schema, you do not need to create tables that contain Data Definition Language (DDL) metadata in MaxCompute. Changes to the Hologres source table structure or data are detected and can be queried in real time in MaxCompute.

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Foreign Server**.
    
3.  On the **Foreign Server** page, click **Create Foreign Server**.
    
4.  In the **Add Foreign Server** dialog box, configure the parameters. The following tables describe the parameters.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Foreign Server Type**
    
    Required
    
    Select **Hologres**.
    
    **Foreign Server Name**
    
    Required
    
    Customize the name. Naming rules:
    
    -   Must start with a letter and contain only lowercase letters, underscores (\_), and digits.
        
    -   Maximum length: 128 characters.
        
    
    For example, `holo_external_source`.
    
    **Foreign Server Description**
    
    Optional
    
    Enter as needed.
    
    **Connection Method**
    
    Required
    
    The default is **classic network access (internal network)**.
    
    **InstanceID**
    
    Required
    
    Select the Hologres instance you want to connect to in the current region.
    
    **Host**
    
    Required
    
    Automatically generated by the system.
    
    **Port**
    
    Required
    
    Automatically generated by the system.
    
    **DBNAME**
    
    Required
    
    Name of the Hologres database to connect to.
    
    **Authentication And Authorization**
    
    Required
    
    -   **RAM Role**
        
    -   **Task executor**: External data sources for Hologres external projects must be configured to use the **Task executor** authentication mode.
        
    
    **RoleARN**
    
    Required
    
    ARN of the RAM role.
    
    1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/).
        
    2.  In the navigation pane on the left, choose **Identities** > **Roles**.
        
    3.  In the **Basic Information** section, you can find the **ARN**.
        
    
    Example: `acs:ram::124****:role/aliyunodpsdefaultrole`.
    
    **Service-linked Role**
    
    Required
    
    If you select **Task executor**, the **Service-linked Role** is `acs:ram::124****:role/aliyunserviceroleformaxcomputeidentitymgmt`.
    
    **Foreign Server Supplemental Properties**
    
    Optional
    
    Additional attributes for the external data source. After you specify them, jobs that use this external data source access the source system according to the defined behavior.
    
    **Note**
    
    For supported parameters, see future updates to the official documentation. Parameters will be gradually released as product capabilities evolve.
    

### **Step 8: Map Hologres instances and MaxCompute schemas in DataWorks**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview) and select a region in the upper-left corner.
    
2.  In the left navigation pane, choose **Data Development and O&M** > **Data Development**.
    
3.  In the **Select Workspace** section, click **Go To DataStudio**.
    
4.  On the **DataStudio** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5814564471/p936930.png) icon in the navigation pane on the left to open **Data CATALOG**.
    
5.  Expand the Hologres data catalog, right-click the schema of the target instance (in this tutorial, `public`), and select **Metadata Mapping to MaxCompute**.
    
    On the **Metadata Mapping to MaxCompute** page, configure the parameters for the Hologres source and the MaxCompute target.
    
    The key parameter configurations in this tutorial are as follows. You can keep the default values for other parameters.
    
    **Parameter Name**
    
    **Description**
    
    **Project Search Method**
    
    Select **From DataWorks Data Source**.
    
    **Data Source**
    
    Select the name of the MaxCompute computing resource that is bound to DataWorks.
    
    **External Schema Name**
    
    Specify the name of the external schema in MaxCompute to which the metadata from the source Hologres schema is mapped.
    
    In this tutorial, it is configured as `public`**.**
    
    **External Data Source**
    
    Select the name of the Hologres federated data source that is created in MaxCompute.
    
    In this tutorial, it is`holo_external_source`.
    
6.  Click **Run** in the top-left corner of the page.
    
    After the task runs, a MaxCompute external schema that has the same name as the Hologres schema (public) is created.
    
7.  You can browse the tables in Hologres and query the data in MaxCompute by running the following SQL commands.
    
    ```
    SET odps.namespace.schema=true;
    SELECT * FROM public.dwd_orders;
    ```
    

**Note**

-   If the schema-level mapping is successful but the mapped table name is not displayed in the MaxCompute folder in Data Catalog and queries fail, confirm that the RAM role permissions are configured correctly. For more information, see [Hologres foreign tables](/help/en/maxcompute/user-guide/hologres-foreign-tables#34e92e5e1dig6).
    
-   Unlike external schemas, external tables require you to create Hologres tables as external tables in MaxCompute. External tables support two authentication methods: RAM role and dual signature.
    
    -   **RAM role**: Supports cross-account role assumption. You must complete the following operations on the Hologres side:
        
        -   Add the RAM role as a user to the Hologres instance. For more information, see [User management](/help/en/hologres/user-guide/manage-users#section-fl8-01i-h48).
            
        -   Grant the **Developer** permission for the instance to the RAM role. This is supported only in SPM mode. For more information, see [Manage databases](/help/en/hologres/user-guide/manage-databases#section-89y-ij4-onv).
            
    -   **Dual signature**: This method uses the identity of the current task executor for authentication. This means that the current user can access Hologres data through MaxCompute external tables using the same identity that has permissions for tables in Hologres. For more information, see [Hologres external tables](/help/en/maxcompute/user-guide/hologres-foreign-tables).
        

### **Step 9: Create a MaxCompute external table that maps to a Hologres table**

You can map some or all of the fields. For more information about mapping rules, see the tblproperties parameter section in [Hologres foreign tables](/help/en/maxcompute/user-guide/hologres-foreign-tables#d31ed8756fuqu).

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview) and select a region in the upper-left corner.
    
2.  In the left navigation pane, choose **Data Development and O&M** > **Data Development**.
    
3.  In the **Select Workspace** section, click **Go To DataStudio**.
    
4.  On the **DataStudio** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5814564471/p936930.png) icon in the navigation pane on the left to open **Data CATALOG**.
    
5.  Expand the Hologres data catalog, right-click the `dwd_orders` table in the `public` schema of the target instance, and select **Metadata Mapping to MaxCompute**.
    
6.  On the **Metadata Mapping to MaxCompute** page, configure the parameters for the Hologres source and the MaxCompute destination.
    
    The key parameter settings for this tutorial are as follows. You can use the default values for the other parameters. For more information about the parameters, see [Table-level metadata mapping](/help/en/dataworks/user-guide/mapping-hologres-metadata-to-maxcompute#b2cdace78biag).
    
    **Parameter Name**
    
    **Description**
    
    **Instance Search Method**
    
    Select **From DataWorks Data Source**.
    
    **Data Source**
    
    Select the name of the MaxCompute data source that is bound to DataWorks.
    
    **Schema**
    
    Specify the name of the external schema in MaxCompute to which the metadata from the source Hologres schema is mapped.
    
    In this tutorial, it is configured as `default`.
    
    **External Table**
    
    -   Specify the name of the external table to be created in MaxCompute. The source table data is mapped to this table. By default, the external table has the same name as the table in Hologres.
        
    -   Creating an external table is a one-time action and does not automatically refresh metadata. To refresh metadata, you must delete the current external table and manually create the metadata mapping again.
        
    
    **Permissions to Access MaxCompute External Table**
    
    -   Select **Dual-signature**.
        
    -   If you use the RAM role method, you must add users on the Hologres side and grant database permissions.
        
    
    **Lifecycle**
    
    Set the lifecycle of the table.
    
7.  Click **Run** in the top-left corner of the page.
    
    After the task runs, the new external table is displayed under the MaxCompute schema in the navigation pane on the left.
    
8.  You can run the following statements to query the data in this external table in MaxCompute.
    
    ```
    SET odps.namespace.schema=true;
    SELECT * FROM dwd_orders;
    ```
    

### **Step 10: Create a recurring task to synchronize a Hologres table**

To periodically archive DWD table data from the Hologres real-time data warehouse to an internal table in MaxCompute, you can create a data synchronization task and configure a recurring schedule.

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview) and select a region in the upper-left corner.
    
2.  In the left navigation pane, choose **Data Development and O&M** > **Data Development**.
    
3.  In the **Select Workspace** section, click **Go To DataStudio**.
    
4.  On the **DataStudio** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5814564471/p937315.png) icon in the navigation pane on the left to open the **DATA DTUDIO** page. Then, [create a new project folder](/help/en/dataworks/user-guide/dataworks-project-development#347bbd668958m).
    
5.  On the **DataStudio** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5814564471/p936930.png) icon in the navigation pane on the left to open **Data CATALOG**.
    
6.  Expand the Hologres data catalog, right-click the `dwd_orders` table in the `public` schema of the target instance, and select **Data Synchronization to MaxCompute**.
    
7.  On the **Metadata Mapping to MaxCompute** page, you can configure the parameters for the Hologres source and MaxCompute destination.
    
    The key parameter settings for this tutorial are as follows. You can use the default values for all other parameters. For more information about the parameters, see [Single-table metadata mapping](/help/en/dataworks/user-guide/mapping-hologres-metadata-to-maxcompute#b2cdace78biag).
    
8.  In the **Create Node** dialog box, name the table in the cloud data warehouse `dwd_holo_orders` and click **OK**. On the configuration page for synchronizing Hologres data to MaxCompute, configure the parameters for the Hologres source and the MaxCompute destination.
    
    The key parameter settings for this tutorial are as follows. For more information about the parameters, see [Configure a synchronization node](/help/en/dataworks/user-guide/data-synchronization-to-maxcompute#0886ace9b5uuq).
    
    **Parameter Name**
    
    **Description**
    
    **Data Source**
    
    Select the name of the Hologres data source that is bound to DataWorks.
    
    **Schema**
    
    Select the schema where you want to store the data.
    
    **Table**
    
    Specify the name of the MaxCompute internal table.
    
    In this tutorial, it is configured as `dwd_holo_orders`.
    
    **Lifecycle**
    
    Set the lifecycle of the table.
    
    **Import Method**
    
    Select the method for writing data to the MaxCompute internal table:
    
    -   **Overwrite**: When you need to delete the original data and write new data to the target table, you can select the overwrite method.
        
    -   **Append**: Preserves existing data and appends new data to the target table.
        
    
    **Permissions to Access Hologres**
    
    You can choose one of the following methods to access the Hologres instance as needed:
    
    -   **[Dual-signature](/help/en/maxcompute/user-guide/hologres-foreign-tables#title-6wh-r97-4yf)**: Performs Hologres permission verification using your current identity.
        
        Make sure that the current identity has read permissions on the MaxCompute table and permissions on the Hologres source table that is mapped to the MaxCompute table.
        
    -   **[RAMRole](/help/en/maxcompute/user-guide/hologres-foreign-tables#title-84a-ncr-9sj)**: Authenticates access by specifying a RAM role.
        
        Grant the `**AliyunSTSAssumeRoleAccess**` access policy to the RAM user. For more information, see [RAM role authorization pattern](/help/en/hologres/security-and-compliance/ram-authorization-mode). After the authorization is complete, configure the specified RAM role in the **RamRole** field.
        
    
9.  Click **Scheduling** in the right-side panel. On the **Properties** page, configure the workflow and scheduling cycle. For more information, see [Node Scheduling Configuration](/help/en/dataworks/user-guide/node-scheduling/).
    
10.  Click **Run** in the upper-left corner of the page.
     
     After the task runs successfully, the newly created internal table is displayed under MaxCompute in the navigation pane on the left. You can use the following SQL statements to query the data of this table in MaxCompute.
     
     ```
     SET odps.namespace.schema=true;
     SELECT * FROM default.dwd_holo_orders;
     ```
