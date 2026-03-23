After you create a Hive catalog, you can directly read Hive metadata in the development console of Realtime Compute for Apache Flink without the need to manually register Hive tables. This improves data development efficiency and data accuracy. This topic describes how to configure Hive metadata, create a Hive catalog, and use a Hive catalog.

## Background information

After you store the Hive catalog configuration file and Hadoop dependencies in a directory that you specify in the Object Storage Service (OSS) console, you can create a Hive catalog in the development console of Realtime Compute for Apache Flink. After you create the Hive catalog, you can execute DML statements to create business logic and obtain the metadata of Hive tables in the development console of Realtime Compute for Apache Flink. This way, you do not need to execute DDL statements to declare related table information. Tables in a Hive catalog can be used as source tables or result tables for streaming deployments and batch deployments.

Realtime Compute for Apache Flink allows you to use Hive metastores or Alibaba Cloud Data Lake Formation (DLF) as the metadata management center for Hive catalogs. This topic describes the following operations that you can perform to manage Hive catalogs:

-   [Configure Hive metadata](#section-yyg-blr-h3j)
    
-   [Create a Hive catalog](#section-mkv-bqu-50b)
    
-   [Use a Hive catalog](#cb7fce60e1jff)
    
-   [View a Hive catalog](#section-1rk-9se-rga)
    
-   [Drop a Hive catalog](#section-h4x-5t3-488)
    

## Prerequisites

Before you use Hive metastores or Alibaba Cloud DLF as the metadata management center for Hive catalogs, you must complete the following configurations:

-   Use Hive metastores as the metadata management center for Hive catalogs
    
    **Item**
    
    **Description**
    
    The Hive metastore service is activated.
    
    Commands related to the Hive metastore service:
    
    -   Command for enabling the Hive metastore service: `hive --service metastore`
        
    -   Command for checking whether the Hive metastore service is enabled: `netstat -ln | grep 9083`
        
        9083 is the default port number of the Hive metastore service. If you specify a different port number in the hive-site.xml file, you must replace 9083 in the preceding command with the port number that you specified in the hive-site.xml file.
        
    
    A whitelist is configured for the Hive metastore service and the CIDR blocks of Realtime Compute for Apache Flink are added to the whitelist.
    
    For more information about how to obtain the CIDR blocks of Realtime Compute for Apache Flink, see [Configure a whitelist](/help/en/doc-detail/174469.html#task-2563361). For more information about how to configure a whitelist for the Hive metastore service, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
    
-   Use Alibaba Cloud DLF as the metadata management center for Hive catalogs
    
    Alibaba Cloud DLF is activated.
    

## Limits

-   Self-managed Hive metastores are supported.
    
-   Hive 1.X, 2.1.X, and 2.2.X are not supported in Apache Flink 1.16 or later. Therefore, only Realtime Compute for Apache Flink that uses Ververica Runtime (VVR) 6.X supports Hive 1.X, 2.1.X, and 2.2.X.
    
-   If DLF is used as the metastore for your Hive catalog, you can create non-Hive tables in the catalog only in Realtime Compute for Apache Flink that uses VVR 8.0.6 or later.
    
-   You can use a Hive catalog to write data to OSS-HDFS only in Realtime Compute for Apache Flink that uses VVR 8.0.6 or later.
    

## Configure Hive metadata

1.  Establish a connection between a Hadoop cluster and the virtual private cloud (VPC) in which Realtime Compute for Apache Flink resides.
    
    You can use Alibaba Cloud DNS PrivateZone to connect a Hadoop cluster to the VPC in which Realtime Compute for Apache Flink resides. For more information, see [Resolver](/help/en/privatezone/latest/resolver#topic-2036629). After the connection is established, Realtime Compute for Apache Flink can access the Hadoop cluster by using the configuration file of the Hadoop cluster.
    
2.  Hive metastores or Alibaba Cloud DLF can be used as the metadata management center for Hive catalogs. The following section describes the related configurations.
    
    #### **Hive MetaStore**
    
    Check whether the setting of the hive.metastore.uris parameter in the Hive configuration file hive-site.xml meets the following requirements:
    
    ```
    <property>
        <name>hive.metastore.uris</name>
        <value>thrift://xx.yy.zz.mm:9083</value>
        <description>Thrift URI for the remote metastore. Used by metastore client to connect to remote metastore.</description>
     </property>
    ```
    
    `xx.yy.zz.mm` in the configuration file indicates the internal or public IP address of Hive.
    
    **Note**
    
    If you set the hive.metastore.uris parameter to the hostname of Hive, you must configure the Alibaba Cloud DNS service to parse the parameter value. Otherwise, the value of the hive.metastore.uris parameter fails to be parsed and the error message `UnknownHostException` is returned when Ververica Platform (VVP) remotely accesses Hive. For more information about how to configure the Alibaba Cloud DNS service, see [Add a DNS record to a private zone](/help/en/privatezone/latest/add-record#topic-2036631).
    
    #### **Alibaba Cloud DLF**
    
    Add the following configurations to the Hive configuration file hive-site.xml to ensure that the Hive catalog can access DLF.
    
    **Note**
    
    If the hive-site.xml file contains the dlf.catalog.akMode configuration item, you must delete this configuration item. Otherwise, the Hive catalog cannot access DLF.
    
    ```
    <property>
      <name>hive.imetastoreclient.factory.class</name>
      <value>com.aliyun.datalake.metastore.hive2.DlfMetaStoreClientFactory</value>
    </property>
    <property>
      <name>dlf.catalog.uid</name>
      <value>${YOUR_DLF_CATALOG_UID}</value>
    </property>
    <property>
      <name>dlf.catalog.endpoint</name>
      <value>${YOUR_DLF_ENDPOINT}</value>
    </property>
    <property>
      <name>dlf.catalog.region</name>
      <value>${YOUR_DLF_CATALOG_REGION}</value>
    </property>
    <property>
      <name>dlf.catalog.accessKeyId</name>
      <value>${YOUR_ACCESS_KEY_ID}</value>
    </property>
    <property>
      <name>dlf.catalog.accessKeySecret</name>
      <value>${YOUR_ACCESS_KEY_SECRET}</value>
    </property>
    ```
    
    **Parameter**
    
    **Description**
    
    **Remarks**
    
    dlf.catalog.uid
    
    The ID of your Alibaba Cloud account that is used to access DLF.
    
    To obtain the ID of your Alibaba Cloud account, go to the [Security Settings](https://account-console.alibabacloud.com/?spm=5176.cngpdb.amxosvpfn.21.4ad17cacTR7tmU#/secure) page.
    
    dlf.catalog.endpoint
    
    The endpoint of the DLF service.
    
    For more information, see [Supported regions and endpoints](/help/en/dlf/dlf-1-0/product-overview/regions-and-endpoints#topic-2021566).
    
    **Note**
    
    -   We recommend that you set dlf.endpoint to the VPC endpoint of DLF. For example, if you select the China (Hangzhou) region, set the dlf.endpoint parameter to dlf-vpc.cn-hangzhou.aliyuncs.com.
        
    -   If you want to access DLF across VPCs, follow the instructions that are described in [How does Realtime Compute for Apache Flink access a service across VPCs?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#7e4dbb2506gos)
        
    
    dlf.catalog.region
    
    The ID of the region in which the DLF service is activated.
    
    For more information, see [Supported regions and endpoints](/help/en/dlf/dlf-1-0/product-overview/regions-and-endpoints#topic-2021566).
    
    **Note**
    
    Make sure that the region you selected matches the endpoint you selected for dlf.endpoint.
    
    dlf.catalog.accessKeyI
    
    The AccessKey ID of your Alibaba Cloud account.
    
    For more information about how to obtain an AccessKey secret, see [Obtain an AccessKey pair](/help/en/doc-detail/175967.html#task-354412).
    
    dlf.catalog.accessKeySecret
    
    The AccessKey secret of your Alibaba Cloud account.
    
    For more information about how to obtain an AccessKey secret, see [Obtain an AccessKey pair](/help/en/doc-detail/175967.html#task-354412).
    
3.  Hive catalogs allow you to store tables in OSS and OSS-HDFS. The following table describes the configurations.
    
    ## OSS
    
    Add the following configurations to the Hive configuration file hive-site.xml to ensure that the Hive catalog can access OSS.
    
    ```
    <property>
      <name>fs.oss.impl.disable.cache</name>
      <value>true</value>
    </property>
    <property>
      <name>fs.oss.impl</name>
      <value>org.apache.hadoop.fs.aliyun.oss.AliyunOSSFileSystem</value>
    </property>
    <property>
      <name>hive.metastore.warehouse.dir</name>
      <value>${YOUR_OSS_WAREHOUSE_DIR}</value>
    </property>
    <property>
      <name>fs.oss.endpoint</name>
      <value>${YOUR_OSS_ENDPOINT}</value>
    </property>
    <property>
      <name>fs.oss.accessKeyId</name>
      <value>${YOUR_ACCESS_KEY_ID}</value>
    </property>
    <property>
      <name>fs.oss.accessKeySecret</name>
      <value>${YOUR_ACCESS_KEY_SECRET}</value>
    </property>
    <property>
      <name>fs.defaultFS</name>
      <value>oss://${YOUR_OSS_BUCKET_DOMIN}</value>
    </property>
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Remarks**
    
    hive.metastore.warehouse.dir
    
    The directory in which table data is stored.
    
    N/A.
    
    fs.oss.endpoint
    
    The endpoint of OSS.
    
    For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
    fs.oss.accessKeyId
    
    The AccessKey ID of your Alibaba Cloud account.
    
    For more information about how to obtain an AccessKey ID, see [Obtain an AccessKey pair](/help/en/doc-detail/175967.html#task-354412).
    
    fs.oss.accessKeySecret
    
    The AccessKey secret of your Alibaba Cloud account.
    
    For more information about how to obtain an AccessKey secret, see [Obtain an AccessKey pair](/help/en/doc-detail/175967.html#task-354412).
    
    fs.defaultFS
    
    The file system in which table data is stored by default.
    
    Make sure that the value of this parameter is the endpoint of the HDFS service that corresponds to the destination bucket, such as `oss://oss-hdfs-bucket.cn-hangzhou.oss-dls.aliyuncs.com/`.
    
    ## OSS-HDFS
    
    1.  Add the following configurations to the Hive configuration file hive-site.xml to ensure that the Hive catalog can access OSS-HDFS.
        
        ```
        <property>
          <name>fs.jindo.impl</name>
          <value>com.aliyun.jindodata.jindo.JindoFileSystem</value>
        </property>
        <property>
          <name>hive.metastore.warehouse.dir</name>
          <value>${YOUR_OSS_WAREHOUSE_DIR}</value>
        </property>
        <property>
          <name>fs.oss.endpoint</name>
          <value>${YOUR_OSS_ENDPOINT}</value>
        </property>
        <property>
          <name>fs.oss.accessKeyId</name>
          <value>${YOUR_ACCESS_KEY_ID}</value>
        </property>
        <property>
          <name>fs.oss.accessKeySecret</name>
          <value>${YOUR_ACCESS_KEY_SECRET}</value>
        </property>
        <property>
          <name>fs.defaultFS</name>
          <value>oss://${YOUR_OSS_HDFS_BUCKET_DOMIN}</value>
        </property>
        ```
        
        **Parameter**
        
        **Description**
        
        **Remarks**
        
        hive.metastore.warehouse.dir
        
        The directory in which table data is stored.
        
        N/A.
        
        fs.oss.endpoint
        
        The endpoint of OSS.
        
        For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
        
        fs.oss.accessKeyId
        
        The AccessKey ID of your Alibaba Cloud account.
        
        For more information about how to obtain an AccessKey ID, see [Obtain an AccessKey pair](/help/en/doc-detail/175967.html#task-354412).
        
        fs.oss.accessKeySecret
        
        The AccessKey secret of your Alibaba Cloud account.
        
        For more information about how to obtain an AccessKey secret, see [Obtain an AccessKey pair](/help/en/doc-detail/175967.html#task-354412).
        
        fs.defaultFS
        
        The file system in which table data is stored by default.
        
        Make sure that the value of this parameter is the endpoint of the HDFS service that corresponds to the destination bucket, such as `oss://oss-hdfs-bucket.cn-hangzhou.oss-dls.aliyuncs.com/`.
        
    2.  **(Optional)** If you want to read data from a Hive table stored in OSS-HDFS and the Hive table is in the Parquet format, add the following configuration items to Realtime Compute for Apache Flink.
        
        ```
        fs.oss.jindo.accessKeyId: ${YOUR_ACCESS_KEY_ID}
        fs.oss.jindo.accessKeySecret: ${YOUR_ACCESS_KEY_SECRET}
        fs.oss.jindo.endpoint: ${YOUR_JINODO_ENDPOINT}
        fs.oss.jindo.buckets: ${YOUR_JINDO_BUCKETS}
        ```
        
        For more information about the parameters, see [Write data to OSS-HDFS](/help/en/flink/realtime-flink/developer-reference/oss-connector#section-2xi-bfe-nyq).
        
    
    **Note**
    
    If your data is stored in Realtime Compute for Apache Flink, you do not need to perform the operations after this step. You can directly go to the [Create a Hive Catalog](#title-3qw-d5a-yoh) step.
    
4.  In the OSS console, create two directories in an OSS bucket and upload the Hive configuration file and Hadoop dependencies to these directories.
    
    1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/bucket).
        
    2.  In the left-side navigation pane, click **Buckets**.
        
    3.  On the Buckets page, click the name of the desired bucket.
        
    4.  Create a folder named ${hms} in the oss://${bucket}/artifacts/namespaces/${ns}/ path.
        
        For more information about how to create a directory in the OSS console, see [Create directories](/help/en/oss/create-directories#concept-ohr-sqg-vdb). The following table describes the variables in the path in which you want to create a directory.
        
        **Folder**
        
        **Description**
        
        ${bucket}
        
        The name of the bucket that is used by your Realtime Compute for Apache Flink workspace.
        
        ${ns}
        
        The name of the Realtime Compute for Apache Flink workspace for which you want to create a Hive catalog.
        
        ${hms}
        
        The name of the folder to create. We recommend that you use the same name for this folder and the Hive catalog that you will create in subsequent steps.
        
        **Note**
        
        After you create a Realtime Compute for Apache Flink workspace, Realtime Compute for Apache Flink automatically creates the /artifacts/namespaces/${ns}/ directory in the specified bucket to store data, such as JAR packages. If you do not find the directory in the OSS console, you must manually upload a file on the **Artifacts** page in Realtime Compute for Apache Flink's Development Console to create a directory.
        
    5.  Create a directory named hive-conf-dir and a directory named hadoop-conf-dir in the oss://${bucket}/artifacts/namespaces/${ns}/${hms} path. For more information about how to create a directory in the OSS console, see [Create directories](/help/en/oss/create-directories).
        
        The following examples describe the files that are stored in the hive-conf-dir and hadoop-conf-dir directories:
        
        -   oss://${bucket}/artifacts/namespaces/${ns}/${hms}/hive-conf-dir/ is used to store the Hive configuration file named hive-site.xml.
            
        -   oss://${bucket}/artifacts/namespaces/${ns}/${hms}/hadoop-conf-dir/ is used to store the Hadoop configuration files, such as core-site.xml, hdfs-site.xml, yarn-site.xml, and mapred-site.xml.
            
        
        After the directories are created, you can choose **Files** > Projects in the left-side navigation pane in the OSS console to view the new directories and files, and then copy the OSS URL.
        
    6.  Upload the Hive configuration file hive-site.xml to the hive-conf-dir directory. For more information about how to upload a file, see [Upload objects](/help/en/oss/upload-download-and-manage-objects-upload-objects#task-zx1-4p4-tdb).
        
    7.  Upload the following configuration files to the hadoop-conf-dir directory. For more information about how to upload a file, see [Upload objects](/help/en/oss/upload-download-and-manage-objects-upload-objects#task-zx1-4p4-tdb).
        
        -   hive-site.xml
            
        -   core-site.xml
            
        -   hdfs-site.xml
            
        -   mapred-site.xml
            
        -   Other required files, such as the compressed packages used by Hive deployments
            
        

## Create a Hive catalog

After you configure Hive metadata, you can create a Hive catalog on the UI or by executing an SQL statement. We recommend that you create a Hive catalog on the UI.

### **Create a Hive catalog on the UI**

1.  Go to the Catalogs page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai). Find the workspace that you want to manage and click **Console** in the **Actions** column.
        
    2.  Click **Catalogs**.
        
2.  On the Catalog List page, click **Create Catalog**. In the Create Catalog dialog box, select **Hive** on the Built-in Catalog tab in the Choose Catalog Type step and click **Next**.
    
3.  Configure the parameters in the Configure Catalog step.
    
    **Important**
    
    After you create a Hive catalog, the parameter configuration cannot be modified. If you want to modify the parameter configuration, you must drop the Hive catalog that you created and create a Hive catalog again.
    
    **Parameter**
    
    **Description**
    
    catalog name
    
    The name of the Hive catalog.
    
    hive-version
    
    The version of the Hive metastore service.
    
    Realtime Compute for Apache Flink supports only Hive 2.0.0 to 2.3.9 and Hive 3.1.0 to 3.1.3. When you create a Hive catalog, configure the hive-version parameter based on the Hive version:
    
    -   For Hive 2.0.X and 2.1.X, set this parameter to 2.2.0.
        
    -   For Hive 2.2.X, set this parameter to 2.2.0. For Hive 2.3.X, set this parameter to 2.3.6. For Hive 3.1.X, set this parameter to 3.1.2.
        
    
    default-database
    
    The name of the default database.
    
    hive-conf-dir
    
    -   OSS: the directory in which the Hive configuration file is stored. You must manually create the directory. For more information, see [Configure Hive metadata](#section-yyg-blr-h3j).
        
    -   Fully managed storage of Realtime Compute for Apache Flink: Upload files in the console as prompted.
        
    
    hadoop-conf-dir
    
    -   OSS: the directory in which the Hadoop dependencies are stored. You must manually create the directory. For more information, see [Configure Hive metadata](#section-yyg-blr-h3j).
        
    -   Fully managed storage of Realtime Compute for Apache Flink: Upload files in the console as prompted.
        
    
    hive-kerberos
    
    Enable Kerberos authentication, and associate a registered Kerberized Hive cluster and a Kerberos principal. For information about how to register a Kerberized Hive cluster, see [Register a Kerberized Hive cluster](/help/en/flink/realtime-flink/user-guide/register-the-hive-kerberos-cluster).
    
4.  Click Confirm.
    
5.  In the **Catalogs** pane on the left side of the Catalog List page, view the catalog that you create.
    

### Create a Hive catalog by executing an SQL statement

1.  Execute the following SQL statement on the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) page:
    
    ```
    CREATE CATALOG ${HMS Name} WITH (
        'type' = 'hive',
        'default-database' = 'default',
        'hive-version' = '<hive-version>',
        'hive-conf-dir' = '<hive-conf-dir>',
        'hadoop-conf-dir' = '<hadoop-conf-dir>'
    );
    ```
    
    **Parameter**
    
    **Description**
    
    ${HMS Name}
    
    The name of the Hive catalog.
    
    type
    
    The type of the connector. Set the value to hive.
    
    default-database
    
    The name of the default database.
    
    hive-version
    
    The version of the Hive metastore service.
    
    Realtime Compute for Apache Flink supports only Hive 2.0.0 to 2.3.9 and Hive 3.1.0 to 3.1.3. When you create a Hive catalog, configure the hive-version parameter based on the Hive version:
    
    -   For Hive 2.0.X and 2.1.X, set this parameter to 2.2.0.
        
    -   For Hive 2.2.X, set this parameter to 2.2.0. For Hive 2.3.X, set this parameter to 2.3.6. For Hive 3.1.X, set this parameter to 3.1.2.
        
    
    hive-conf-dir
    
    The directory in which the Hive configuration file is stored. You must manually create the directory. For more information, see [Configure Hive metadata](#section-yyg-blr-h3j).
    
    hadoop-conf-dir
    
    The directory in which the Hadoop dependencies are stored. You must manually create the directory. For more information, see [Configure Hive metadata](#section-yyg-blr-h3j).
    
2.  Select the code that is used to create a catalog and click **Run** that appears on the left side of the code.
    
    After the Hive catalog is created, you can reference tables of the Hive catalog as result tables and dimension tables in drafts. You do not need to declare DDL statements for these tables. Table names in the Hive catalog are in the ${hive-catalog-name}.${hive-db-name}.${hive-table-name} format.
    
    If you want to drop the Hive catalog, follow the instructions that are described in [Drop a Hive catalog](#section-h4x-5t3-488).
    

## Use a Hive catalog

### **Create a Hive table**

#### **Create a Hive table on the UI**

1.  Go to the Catalogs page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai). Find the workspace that you want to manage and click **Console** in the **Actions** column.
        
    2.  Click **Catalogs**.
        
2.  On the Catalog List page, find the desired catalog and click **View** in the **Actions** column.
    
3.  On the page that appears, find the desired database and click **View** in the **Actions** column.
    
4.  On the page that appears, click **Create Table**.
    
5.  On the **Built-in** tab of the Create Table dialog box, select a table type from the Connection Type drop-down list, select a connector type, and then click **Next**.
    
6.  Enter the table creation statement and configure related parameters. Sample code:
    
    ```
    CREATE TABLE `${catalog_name}`.`${db_name}`.`${table_name}` (
      id INT,
      name STRING
    ) WITH (
      'connector' = 'hive'
    );
    ```
    
7.  In the dialog box that appears, click **OK**.
    

#### **Create a Hive table by executing an SQL statement**

1.  Execute the following SQL statement on the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) page:
    
    ```
    CREATE TABLE `${catalog_name}`.`${db_name}`.`${table_name}` (
      id INT,
      name STRING
    ) WITH (
      'connector' = 'hive'
    );
    ```
    
2.  Select the table creation statement and click **Run** that appears on the left side of the code.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2671683861/p635440.png)

Sample code:

```
-- Create a table named flink_hive_test in the flinkhive database under the flinkexporthive catalog. 
CREATE TABLE `flinkexporthive`.`flinkhive`.`flink_hive_test` (
  id INT,
  name STRING
) WITH (
  'connector' = 'hive'
);
```

### **Modify the Hive table**

Execute the following SQL statements on the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) page:

```
-- Add a column to the Hive table. 
ALTER TABLE `${catalog_name}`.`${db_name}`.`${table_name}` 
ADD column type-column;

-- Drop a column from the Hive table. 
ALTER TABLE `${catalog_name}`.`${db_name}`.`${table_name}` 
DROP column;
```

Sample code:

```
-- Add the color field to the Hive table. 
ALTER TABLE `flinkexporthive`.`flinkhive`.`flink_hive_test` 
ADD color STRING;

-- Drop the color field from the Hive table. 
ALTER TABLE `flinkexporthive`.`flinkhive`.`flink_hive_test` 
DROP color;
```

### Read data from the Hive table

```
INSERT INTO ${other_sink_table}
SELECT ...
FROM `${catalog_name}`.`${db_name}`.`${table_name}`;
```

### Insert the result data into the Hive table

```
INSERT INTO `${catalog_name}`.`${db_name}`.`${table_name}`
SELECT ... 
FROM ${other_source_table};
```

### **Drop the Hive table**

#### **Drop the Hive table on the UI**

1.  Go to the Catalogs page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai). Find the workspace that you want to manage and click **Console** in the **Actions** column.
        
    2.  Click **Catalogs**.
        
2.  In the **Catalogs** pane on the left side of the Catalog List page, click the table that you want to delete in the related database under the related catalog.
    
3.  On the table details page, click **Delete** in the Actions column.
    
4.  In the message that appears, click **OK**.
    

#### Drop the Hive table by executing an SQL statement

Execute the following SQL statement on the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) page:

```
-- Drop the Hive table. 
DROP TABLE `${catalog_name}`.`${db_name}`.`${table_name}`;
```

Sample code:

```
-- Drop the Hive table. 
DROP TABLE `flinkexporthive`.`flinkhive`.`flink_hive_test`;
```

## View a Hive catalog

1.  Go to the Catalogs page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
        
    2.  Find the workspace that you want to manage and click **Console** in the **Actions** column.
        
    3.  Click **Catalogs**.
        
2.  On the **Catalog List** page, find the desired catalog and view the **Name** and **Type** columns of the catalog.
    
    **Note**
    
    If you want to view the databases and tables in the catalog, click **View** in the **Actions** column.
    

## Drop a Hive catalog

**Warning**

The drop operation does not affect the deployments that are running. However, the drafts that are not published or the deployments that need to be suspended and then resumed are affected. We recommend that you do not perform the drop operation unless necessary.

### **Drop a Hive catalog on the UI**

1.  Go to the Catalogs page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai). Find the workspace that you want to manage and click **Console** in the **Actions** column.
        
    2.  Click **Catalogs**.
        
2.  On the **Catalog List** page, find the desired catalog and click **Delete** in the **Actions** column.
    
3.  In the message that appears, click **Delete**.
    
4.  View the **Catalogs** pane to check whether the catalog is dropped.
    

### **Drop a Hive catalog by executing an SQL statement**

1.  Execute the following SQL statement on the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) page:
    
    ```
    DROP CATALOG ${HMS Name};
    ```
    
    In the preceding statement, HMS Name indicates the name of the Hive catalog that you want to drop. The name is displayed in the development console of Realtime Compute for Apache Flink.
    
2.  Right-click the statement that is used to drop the catalog and select **Run** from the shortcut menu.
    
3.  View the **Catalogs** pane on the left side of the Catalog List page to check whether the catalog is dropped.
