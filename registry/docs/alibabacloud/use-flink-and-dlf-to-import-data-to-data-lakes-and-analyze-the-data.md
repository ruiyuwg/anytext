Data Lake Formation (DLF) can work with the Realtime Compute for Apache Flink service built on the Ververica Platform (VVP) computing engine and the Flink Change Data Capture (CDC) technology to import data to data lakes. You can customize the data import parameters based on your needs. DLF provides centralized metadata management and permission management capabilities. It supports multiple analytics engines to explore the data value of data lakes. This topic describes how to use Realtime Compute for Apache Flink and DLF to import data to data lakes and analyze the data.

## **Background information**

Alibaba Cloud Realtime Compute for Apache Flink is a real-time big data analytics platform that is built on Apache Flink. The platform supports multiple types of data sources and result tables. A data lake is a centralized repository for storing various types of data. You can create Flink tasks to extract data from Hudi or Iceberg result tables to data lakes for unified storage and analysis. When you import data to data lakes, you can configure a DLF catalog to synchronize the table metadata to DLF. DLF is an enterprise-level service that allows you to manage the metadata of data lakes in a centralized manner. Realtime Compute for Apache Flink and DLF can work together to ensure that tables in data lakes seamlessly connect to Alibaba Cloud compute engines such as E-MapReduce (EMR), MaxCompute, and Hologres. DLF also provides a wide range of data lake management capabilities, such as data lake lifecycle management and lake format optimization.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5324595671/CAEQUBiBgMDss5Gr2BkiIDliYzg3NzRmMDA4MTQ5ZjE5MzI1YWVkOTFlNjYxNzkz4709939_20241016152546.431.svg)

## **Prerequisites**

-   The [Realtime Compute for Apache Flink](/help/en/flink/realtime-flink/product-overview/what-is-alibaba-cloud-realtime-compute-for-apache-flink) service is activated, and a fully managed Flink workspace is created.
    
-   The DLF service is activated. If you have not activated it, you can go to the [Data Lake Formation](https://www.alibabacloud.com/en/product/datalake-formation) and click **Activate Now**.
    
-   This topic uses a MySQL data source as an example. You need to create an RDS MySQL instance. For more information, see [Step 1: Create an ApsaraDB RDS for MySQL instance and configure databases](/help/en/rds/apsaradb-rds-for-mysql/step-1-create-an-apsaradb-rds-for-mysql-instance-and-configure-databases#concept-wzp-ncf-vdb). If you use other data sources, ignore this prerequisite.
    

**Important**

The ApsaraDB RDS for MySQL instance must be in the same region and VPC as the Realtime Compute for Apache Flink. The engine version of the ApsaraDB RDS for MySQL must be 5.7 or later.

## **Procedure**

### **Step 1: Prepare MySQL data**

1.  Log on to the prepared MySQL instance. For more information, see [Step 2: Connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/step-2-connect-to-an-apsaradb-rds-for-mysql-instance#concept-2099025).
    
2.  Run the following commands to create a table and insert test data into the table.
    
    ```
    CREATE DATABASE testdb;
    CREATE TABLE testdb.student (
      `id` bigint(20) NOT NULL,
      `name` varchar(256) DEFAULT NULL,
      `age` bigint(20) DEFAULT NULL,
      PRIMARY KEY (`id`)
    );
    
    INSERT INTO testdb.student VALUES (1,'name1',10);
    INSERT INTO testdb.student VALUES (2,'name2',20);
    ```
    

### Step 2: **Create a DLF catalog in Flink**

1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/).Realtime Compute for Apache Flink console
    
2.  Go to the Create Catalog dialog box.
    
    1.  On the **Fully Managed Flink** tab, click **Console** in the **Actions** column of the target workspace.
        
    2.  In the left-side navigation pane, click **Catalogs**.
        
    3.  Click **Create Catalog**.
        
3.  Create a DLF catalog.
    
    1.  On the **Create Catalog** page, select **DLF** and click **Next**.
        
    2.  Enter the following configuration information and click **Confirm**. For more information, see [Manage DLF catalogs](/help/en/flink/realtime-flink/user-guide/manage-dlf-catalogs#h3-url-1).
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5005512371/p859949.png)
    
    After you successfully create the DLF, you can see the newly added dlf data catalog in **Catalogs**. The link is the default data catalog of DLF.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5005512371/p860392.png)
    

### **Step 3: Create a Flink data lake job**

1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/).
    
2.  On the **Fully Managed Flink** tab, click **Console** in the **Actions** column of the target workspace.
    
3.  Create a source table and a target table.
    
    1.  In the left-side navigation pane, click **Development** > **Scripts**.
        
    2.  In the SQL editing area, enter the following code and click **Run**.
        
        ```
        -- Create a source table
        CREATE TABLE IF NOT EXISTS student_source (
          id INT,
          name VARCHAR (256),
          age INT,
          PRIMARY KEY (id) NOT ENFORCED
        )
        WITH (
          'connector' = 'mysql-cdc',
          -- Replace hostname with the endpoint of the ApsaraDB RDS for MySQL instance
          'hostname' = 'rm-xxxxxxxx.mysql.rds.aliyuncs.com',
          'port' = '3306',
          'username' = '<RDS user name>',
          'password' = '<RDS password>',
          'database-name' = '<RDS database>',
          -- Set the table-name parameter to the name of the source table. In this example, the source table is the student table created in Step 2
          'table-name' = 'student'
        );
        
        -- The catalog name is the dlf catalog name created in Step 2. In this example, the catalog name is dlf
        CREATE DATABASE IF NOT EXISTS dlf.dlf_testdb;
        
        -- Create a destination table
        CREATE TABLE IF NOT EXISTS dlf.dlf_testdb.student_hudi (
          id    BIGINT PRIMARY KEY NOT ENFORCED,
          name  STRING,
          age    BIGINT
        ) WITH(
          'connector' = 'hudi'
        );
        ```
        
        After the tables are created, you can see the newly added source table and target table in **Catalogs**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5005512371/p860026.png)
        
4.  Create a Flink SQL data lake job.
    
    1.  In the left-side navigation pane, click **Development** > **ETL**.
        
    2.  Click **New**, then in the **New Draft** dialog box, select **Blank Stream Draft**, and click **Next**.
        
    3.  Enter **Draft Configuration**, and click **Create**.
        
    4.  In the SQL editing area, enter the following code to create a Flink SQL job.
        
        ```
        -- Create a stream SQL job
        INSERT INTO dlf.dlf_testdb.student_hudi SELECT * FROM student_source  /*+ OPTIONS('server-id'='123456') */;
        ```
        
        **Note**
        
        -   For more information about the parameter settings and usage conditions of the MySQL source table, see [MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/).
            
        -   For more information about the parameter settings of the Hudi result table, see [Hudi connector (to be retired)](/help/en/flink/realtime-flink/developer-reference/hudi-connector).
            
        
    5.  In the upper-right corner of the SQL editing area, click **Deploy**. In the **Deploy draft** dialog box, enter or select the required information, and click **Confirm**.
        
5.  Start the job.
    
    1.  In the left-side navigation pane, click **O&M** > **Deployments**.
        
    2.  Click **Start** in the **Actions** column of the target job.
        
        Select **Initial Mode**, and click **Start**. When the job status changes to **RUNNING**, the job is running properly. For more information about job startup parameter configuration, see [Start a deployment](/help/en/doc-detail/207352.html#task-2047214).
        

### **Step 4: Use DLF for data lake analysis**

1.  In the left navigation bar, click **Development** > **Scripts**.
    
2.  In the SQL editing area, enter the following code and click **Run**.
    
    ```
    SELECT * FROM dlf.dlf_testdb.student_hudi;
    ```
    
    The query results are shown in the following figure. You can directly query and analyze the data written to the data lake by Flink.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5005512371/p860964.png)
    

**Note**

If you have purchased an EMR cluster and enabled DLF metadata for the data lake, you can also directly analyze the data lake results of Flink through the EMR cluster. For more information, see [Integrate Hudi with Spark SQL](/help/en/emr/emr-on-ecs/user-guide/integrate-hudi-with-spark-sql).

## **References**

If you want to read and write DLF through Flink in an EMR DataFlow cluster, see [Use a Dataflow cluster to read data from and write data to Hudi tables based on DLF](/help/en/emr/emr-on-ecs/user-guide/connect-a-dataflow-cluster-to-dlf-to-read-data-from-or-write-data-to-hudi).
