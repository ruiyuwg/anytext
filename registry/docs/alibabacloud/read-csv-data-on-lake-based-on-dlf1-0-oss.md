This topic describes how to configure Data Lake Formation (DLF) to extract metadata from data stored in Object Storage Service (OSS). You can then use a MaxCompute external schema to perform federated queries on the data in the data lake. This solution simplifies data analytics and processing and ensures data reliability and security.

## **Usage notes**

-   **Activated services**
    
    -   The [OSS](https://oss.console.alibabacloud.com/overview) service is activated.
        
    -   The [DLF](https://dlf.console.alibabacloud.com/cn-beijing/home?spm=a2c4g.11186623.0.0.16814805C0sMIC) service is activated.
        
    -   A [MaxCompute project is created](/help/en/maxcompute/getting-started/create-a-maxcompute-project) and [schema support for project-level metadata is enabled](/help/en/maxcompute/user-guide/external-project-1-0-migration-to-lake-warehouse-integrated-2-0-schema#ace56f45888li).
        
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
    
-   MaxCompute, OSS, and DLF **must be deployed in the same region**.
    

## **Procedure**

### **Step 1: Grant MaxCompute permissions to access DLF and OSS**

The account associated with your MaxCompute project requires permissions to access the DLF and OSS services. You can use one of the following authorization methods:

-   One-click authorization: If you use the same account for both the MaxCompute project and the DLF service, you can click [Authorize DLF](https://ram.console.alibabacloud.com/role/authorization?request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22ODPS%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunODPSDefaultRole%22%2C%22TemplateId%22%3A%22DefaultRole%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fram.console.alibabacloud.com%2Froles%22%7D).
    
-   Custom authorization: Use the [custom authorization](/help/en/maxcompute/user-guide/authorize-a-ram-user-to-access-dlf#task-2166816) method if you use different accounts.
    

### Step 2: Prepare the OSS data

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/) and create a bucket. In this example, the bucket is named `mc-lakehouse-dlf-oss`. For more information, see [Create a bucket](/help/en/oss/user-guide/console-quick-start#section-73g-119-c8q).
    
2.  This example uses a partitioned table. Create a root folder named `mc_dlf_oss_pt/` in the bucket. Then, create four subdirectories in the root folder and upload files to them:
    
    -   `direction=N/`: [vehicle1.csv](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250916/yvgqch/vehicle1.csv)
        
    -   `direction=NE/`: [vehicle2.csv](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250916/klmleq/vehicle2.csv)
        
    -   `direction=S/`:[vehicle3.csv](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250916/nyfchc/vehicle3.csv)
        
    -   `direction=SW/`: [vehicle4.csv](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250916/vsgdcj/vehicle4.csv)
        

### Step 3: Extract OSS metadata using DLF 1.0

1.  Log on to the [Data Lake Formation (DLF) console](https://dlf.console.alibabacloud.com/cn-beijing/home?spm=a2c4g.11186623.0.0.16814805C0sMIC) and select a region in the upper-left corner.
    
2.  In the navigation pane on the left, choose **Metadata** > **Metadata**.
    
3.  On the **Metadata** page, click the **Database** tab.
    
    Under the **default** **Catalog List**, click **Create Database**. Configure the following parameters:
    
    On the Metadata Management page, click the **Database** tab. In the **default** data catalog, click **Create Database**. Configure the following parameters:
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Catalog**
    
    Required
    
    In this example, the data catalog is **default**.
    
    **Database Name:**
    
    Required
    
    Enter a custom database name. The name must start with a letter, be 1 to 128 characters in length, and can contain only letters, digits, and underscores (\_). Example: `dlf_oss_csv`.
    
    **Database Description:**
    
    Optional
    
    Enter a custom description.
    
    **Select Path:**
    
    Required
    
    The storage location of the database. Example: `oss://mc-lakehouse-dlf-oss/metadb_save`.
    
4.  In the navigation pane on the left, choose **Metadata** > **Metadata Discovery**.
    
    On the **Metadata Discovery** page, click **Create Extraction Task**. On the **Create Extraction Task** page, configure the following parameters:
    
    1.  **Set Extraction Source**:
        
        **Parameter**
        
        **Required**
        
        **Description**
        
        **Extraction Task Name**
        
        This parameter is required.
        
        Enter a custom name for the extraction task.
        
        **Select OSS Path**
        
        Required
        
        **DLF automatically creates tables and partitions based on the OSS directory that you specified. Directory structure: oss://Selected path/Table name (Optional)/Partition name (Optional)/File name. For example, the data.csv file is used to extract metadata. If this file is saved to the oss://my-bucket/my-path/my-table/dt=1/ directory and the oss://my-bucket/my-path/ directory is selected, DLF uses my\_table as the table name, dt as a partition, and the data.csv file as the table schema. All directory names that include the table name can contain letters, digits, and underscores (\_), and must start with a letter.**
        
        **Exclusion Mode**
        
        Optional
        
        **Enter a regular expression to match the OSS directory that needs to be excluded**
        
        **Parse Format**
        
        Required
        
        The service provides multiple table formats, such as **Automatic Recognition**, **json**, **csv**, **parquet**, **orc**, **hudi**, **delta**, and **avro**.
        
    2.  **Set Extraction Target**:
        
        **Parameter**
        
        **Required**
        
        **Description**
        
        **Catalog**
        
        Required
        
        Select the data catalog for the target information.
        
        **Destination Database**
        
        Required
        
        Select an existing database. Example: `dlf_oss_csv`.
        
        **Destination Table Prefix**
        
        Optional
        
        **Enter the prefix of the destination table. It must be 1 to 128 characters in length, and can contain letters, digits, and underscores (\_). It must start with a letter.**
        
        **Method to Handle Table Field Update**
        
        Required
        
        -   **Add Columns and Retain Existing Columns**.
            
        -   **Update Table Schema and Generate Table Results Based on the last detected table schema** (If you select this option, the metadata extraction result overwrites existing tables with the same name. This may cause the original tables to be lost or become unavailable.)
            
        -   **Ignore Updates and Not Modify Table**.
            
        
        **Method to Process Deleted OSS Objects**
        
        Required
        
        -   **Delete Metadata**.
            
        -   **Ignore Updates and Not Delete Tables**.
            
        
    3.  **Set Extraction Task**:
        
        **Parameter**
        
        **Required**
        
        **Description**
        
        **RAM Role**
        
        Required
        
        Data Lake Formation assumes this role to access your resources. You can select the default system role AliyunDLFWorkFlowDefaultRole.
        
        **Execution Policy**
        
        Optional
        
        The execution policy for the job.
        
        -   **Manual**
            
        -   **Scheduling**
            
        
        **Extraction Policy**
        
        Required
        
        -   **Partial Data Extraction**: Scans only part of each file to extract metadata. This shortens the job duration but may result in lower accuracy than full extraction. You can edit the metadata to adjust the information.
            
        -   **Extract All**: Scans all data files to extract metadata. This takes longer for large datasets but provides more accurate results.
            
        
    4.  Click **Save and Execute Immediately**.
        
5.  View the extracted table
    
    1.  In the navigation pane on the left, choose **Metadata** > **Metadata**.
        
    2.  On the **Metadata** page, click the **Database** tab.
        
    3.  Click the name of the target database to go to its details page. Click the **Table List** tab to view the extracted tables.
        
        In this example, the extracted table is `mc_dlf_oss_pt`.
        
6.  If you add data to a new partition, you must run the extraction task again.
    

### Step 4: Create a DLF 1.0 and OSS external data source

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
    
    Enter a custom name. The naming conventions are as follows:
    
    -   The name must start with a letter and contain only lowercase letters, underscores (\_), and digits.
        
    -   The name cannot exceed 128 characters.
        
    
    Example: `dlf_oss_csv_new`.
    
    **Foreign Server Description**
    
    Optional
    
    Enter a description as needed.
    
    **Region**
    
    Required
    
    The current region is selected by default.
    
    **DLF Endpoint**
    
    Required
    
    The DLF Endpoint of the current region is used by default.
    
    **OSS Endpoint**
    
    Required
    
    The OSS Endpoint of the current region is used by default.
    
    **RoleARN**
    
    Required
    
    The Alibaba Cloud Resource Name (ARN) of the RAM role. This role must have permissions to access both DLF and OSS services.
    
    1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/).
        
    2.  In the navigation pane on the left, choose **Identities** > **Roles**.
        
    3.  In the **Basic Information** section, you can find the **ARN**.
        
    
    Example: `acs:ram::124****:role/aliyunodpsdefaultrole`.
    
    **Foreign Server Supplemental Properties**
    
    Optional
    
    Specify additional attributes for the external data source. After you specify the attributes, tasks that use this data source can access the source system based on the defined behavior.
    
    **Note**
    
    For information about supported parameters, see future updates in the official documentation. More parameters will be available as the product evolves.
    
5.  Click **OK** to create the external data source.
    
6.  On the **Foreign Server** page, find the target data source and click **Details** in the **Actions** column.
    

### **Step 5: Create an external schema**

Connect to MaxCompute and run the following command:

```
SET odps.namespace.schema=true;

CREATE EXTERNAL SCHEMA IF NOT EXISTS <external_schema>
WITH <external_data_source>
ON '<dlf_data_catalogue>.dlf_database';
```

The parameters are described as follows:

-   external\_schema: A custom name for the **external schema**. Example: `es_dlf_oss_csv`.
    
-   external\_data\_source: The name of the **external data source** that you created. The project that contains the external schema must be in the same region as the external data source. Example: `dlf_oss_csv`.
    
-   dlf\_data\_catalogue: The **DLF data catalog ID**. For more information, see [Create a data catalog](/help/en/dlf/dlf-1-0/user-guide/catalog#sectiondiv-5c4-dx8-r4g). Example: `122****`.
    
-   dlf\_database: The **database name** in the specified DLF data catalog. For more information, see [Databases, tables, and functions](/help/en/dlf/dlf-1-0/user-guide/manage-metadata#section-454-z7w-bs4). Example: `dlf_oss_csv`.
    

### Step 6: Use SQL to access OSS data

1.  Log on to the MaxCompute client and query the tables in the external schema.
    

```
SET odps.namespace.schema=true;
USE schema es_dlf_oss_csv;
SHOW tables IN es_dlf_oss_csv;

-- The following result is returned:
ALIYUN$xxx:mc_dlf_oss_pt

OK
```

2.  Query the details of the mc\_dlf\_oss\_pt table in the external schema.
    

```
SET odps.namespace.schema=true;
SELECT * FROM <project_name>.es_dlf_oss_csv.mc_dlf_oss_pt WHERE direction='NE';

-- The following result is returned:
+------------+------------+------------+------------+------------+------------+----------------+------------+
| _c0        | _c1        | _c2        | _c3        | _c4        | _c5        | _c6            | direction  | 
+------------+------------+------------+------------+------------+------------+----------------+------------+
| 1          | 2          | 13         | 1          | 46.81006   | -92.08174  | 9/14/2014 0:00 | NE         | 
| 1          | 3          | 48         | 1          | 46.81006   | -92.08174  | 9/14/2014 0:00 | NE         | 
| 1          | 9          | 4          | 1          | 46.81006   | -92.08174  | 9/15/2014 0:00 | NE         | 
+------------+------------+------------+------------+------------+------------+----------------+------------+
```

### **Step 8: Copy data from the federated external table to a data warehouse**

1.  Copy the data from the federated external table to the data warehouse.
    
    ```
    CREATE TABLE vehicle_copy AS 
    SELECT * FROM <project_name>.es_dlf_oss_csv.mc_dlf_oss_pt 
    WHERE direction='NE';
    ```
    
2.  Query the data from the table in the data warehouse.
    
    ```
    SELECT * FROM vehicle_copy;
    
    -- The following result is returned:
    +------------+------------+------------+------------+------------+------------+----------------+------------+
    | _c0        | _c1        | _c2        | _c3        | _c4        | _c5        | _c6            | direction  | 
    +------------+------------+------------+------------+------------+------------+----------------+------------+
    | 1          | 2          | 13         | 1          | 46.81006   | -92.08174  | 9/14/2014 0:00 | NE         | 
    | 1          | 3          | 48         | 1          | 46.81006   | -92.08174  | 9/14/2014 0:00 | NE         | 
    | 1          | 9          | 4          | 1          | 46.81006   | -92.08174  | 9/15/2014 0:00 | NE         | 
    +------------+------------+------------+------------+------------+------------+----------------+------------+
    ```
