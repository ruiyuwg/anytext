If you want to import data from an external data store into a MaxCompute table or a partition of a MaxCompute table, you can use LOAD statements. This topic describes how to use LOAD statements to import data in the CSV format or another open source format from an external data store into a MaxCompute table or a partition of a MaxCompute table.

You can execute the statements that are described in this topic on the following platforms:

-   [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db)
    
-   [DataWorks console](/help/en/maxcompute/user-guide/query-editor-in-the-maxcompute-console)
    
-   [MaxCompute Studio](/help/en/maxcompute/user-guide/develop-and-submit-an-sql-script#task-2460353)
    

## Description

MaxCompute allows you to execute the `LOAD OVERWRITE` or `LOAD INTO` statement to import data in the CSV format or another open source format from an external data store into a MaxCompute table or a partition of a MaxCompute table. The external data store can be [Hologres](/help/en/hologres/product-overview/what-is-hologres), [Object Storage Service (OSS)](/help/en/oss/user-guide/what-is-oss#concept-ybr-fg1-tdb), [Amazon Redshift](https://docs.aws.amazon.com/), or [BigQuery](https://cloud.google.com/bigquery#section-5).

-   To import data from Amazon Redshift or BigQuery into a MaxCompute table or a partition of a MaxCompute table, you must first import the data into OSS.
    
-   MaxCompute allows you to import data into a partition of a partitioned table in dynamic partition mode.
    
-   The `LOAD INTO` statement directly appends data to a table or a partition of a table. The `LOAD OVERWRITE` statement clears a table or a partition of a table and then inserts data into the table or partition.
    

## Limits

-   Data in an external data store can be imported into the MaxCompute projects that are in the same region as the external data store.
    
-   If you import data from OSS to MaxCompute, you must take note of the following limit:
    
    If you import data from OSS to a partition of a MaxCompute table, the schema of the MaxCompute table, excluding partition key columns, must be consistent with the layout of the data in the external data store, and the data in the external data store cannot contain partition key columns.
    
-   If you import data from Hologres to MaxCompute, you must take note of the following limits:
    
    -   You cannot import data in Hologres partitioned tables to MaxCompute.
        
    -   You cannot import data to MaxCompute by using Hologres external tables that use the dual-signature authorization mode.
        

## Prerequisites

-   **Related permissions on MaxCompute are granted to the account that you use to import data.**
    
    The account must be granted the CreateTable permission and Alter permission on the MaxCompute project before you use the account to execute `LOAD` statements. For more information, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).
    
-   **Related permissions on the external data store from which you want to import data are granted to the account that you use to import data.**
    
    Before you import data from an external data store to MaxCompute, you must authorize MaxCompute to access the external data store, such as OSS or Hologres. The authorization methods for the `LOAD OVERWRITE` and `LOAD INTO` statements are the same as those for MaxCompute external tables.
    
    ## External data store: OSS
    
    You can perform one-click authorization to provide higher security. For more information, see [STS authorization](/help/en/maxcompute/security-and-compliance/sts-authorization#concept-ln3-c4v-ydb).
    
    ## External data store: Hologres
    
    You can create a RAM role and grant the RAM role the permissions to access MaxCompute. Then, add the RAM role to the Hologres instance and grant related permissions to the RAM role. For more information, see [Create a Hologres external table in STS mode](/help/en/maxcompute/user-guide/hologres-foreign-tables#section-dcq-zfi-6no) in "Hologres external tables".
    

After the authorization is complete, you need to select an appropriate import method based on the format of the data that you want to import.

-   [Use a built-in extractor that functions as a storage handler to import data](#section-jxq-6n2-pks)
    
-   [Import data in another open source format](#section-zws-uj6-s7h)
    

## Use a built-in extractor that functions as a storage handler to import data

-   Syntax
    
    ```
    {load overwrite|into} table <table_name> [partition (<pt_spec>)]
    from location <external_location>
    stored by <StorageHandler>
    [with serdeproperties (<Options>)];
    ```
    
-   Parameters
    
    ## External data store: OSS
    
    -   table\_name: required. The name of the table into which you want to insert data. You must create the table before you insert data into it. The schema of the table, excluding partition key columns, must be consistent with the layout of the data in the external data store.
        
    -   pt\_spec: optional. The partition information of the table into which you want to insert data. The value of this parameter is in the `(partition_col1 = partition_col_value1, partition_col2 = partition_col_value2, ...)` format.
        
    -   external\_location: required. The OSS directory that stores the data. The value of this parameter is in the `'oss://<oss_endpoint>/<object>'` format. For more information about OSS endpoints, see [OSS domain names](/help/en/oss/user-guide/oss-domain-names#concept-hh2-4tv-tdb). By default, MaxCompute reads all files in this directory.
        
    -   StorageHandler: required. The name of the storage handler that is considered a built-in extractor. `com.aliyun.odps.CsvStorageHandler` is a built-in storage handler that is used to process CSV files. It defines how to read data from and write data to CSV files. The related logic is implemented by the system. You can use this parameter in the same way as you use it for a MaxCompute external table. For more information, see [Create an OSS external table](/help/en/maxcompute/user-guide/access-external-tables/#0de6fb397c70d).
        
    -   Options: optional. The properties related to the external table in WITH SERDEPROPERTIES. The properties are the same as those for creating a MaxCompute external table. For more information about the properties, see [Create an OSS external table](/help/en/maxcompute/user-guide/access-external-tables/#0de6fb397c70d).
        
    
    ## External data store: Hologres
    
    -   table\_name: required. The name of the table into which you want to insert data. You must create the table before you insert data into it. The schema of the table, excluding partition key columns, must be consistent with the layout of the data in the external data store.
        
    -   pt\_spec: optional. The partition information of the table into which you want to insert data. The value of this parameter is in the `(partition_col1 = partition_col_value1, partition_col2 = partition_col_value2, ...)` format.
        
    -   external\_location: required. The Java Database Connectivity (JDBC) URL of the Hologres instance that stores the data. The value of this parameter is in the `'<jdbc:postgresql://<endpoint>:<port>/<database>?ApplicationName=MaxCompute&[currentSchema=<schema>&][useSSL={true|false}&]table=<holo_table_name>/>'` format.
        
        -   -   endpoint: required. The endpoint of the Hologres instance in the **classic network**. For more information about how to obtain endpoints, see [Instance configurations](/help/en/hologres/user-guide/instance-configurations#concept-2448847).
                
                **Important**
                
                Only the endpoint of the Hologres instance in the classic network is supported. You are not allowed to access Hologres using a VPC endpoint.
                
            -   port: required. The port number of the Hologres instance. For more information about how to obtain port numbers, see [Instance configurations](/help/en/hologres/user-guide/instance-configurations#concept-2448847).![获取endpoint和端口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8185440561/p415343.png)
                
            -   database: required. The name of the Hologres database that you want to access. For more information about Hologres databases, see [CREATE DATABASE](/help/en/hologres/developer-reference/create-database#concept-2463095).
                
            -   ApplicationName: required. The default value is MaxCompute and no modification is required.
                
            -   schema: optional. If the name of the source table is unique in the Hologres database or the source table is a table in the default schema, you do not need to specify this parameter. For more information about schemas, see [CREATE SCHEMA](/help/en/hologres/developer-reference/create-schema#task-2567974).
                
            -   holo\_table\_name: required. The name of the Hologres source table. For more information about Hologres source tables, see [CREATE TABLE](/help/en/hologres/developer-reference/create-tables#concept-2463104).![查看表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8185440561/p415506.png)
                
    -   StorageHandler: required. The storage handler, which defines the method used to access the Hologres external table. Set this parameter to `com.aliyun.odps.jdbc.JdbcStorageHandler`. The value indicates that the Hologres external table is accessed by using JdbcStorageHandler.
        
    -   tblproperties: required. The properties related to the Hologres external table in WITH SERDEPROPERTIES. The properties are the same as those for creating the MaxCompute external table.
        
        -   -   mcfed.mapreduce.jdbc.driver.class: required. The JDBC driver that is used to access the Hologres database. Set the value to `org.postgresql.Driver`.
                
            -   odps.federation.jdbc.target.db.type: required. The type of the database that you want to access. Set the value to `holo`.
                
            -   odps.federation.jdbc.colmapping: optional. If you want to map some fields of the Hologres source table to the Hologres external table, you must configure this parameter. This parameter specifies the mappings between the fields of the Hologres source table and the fields of the Hologres external table.
                
                -   If this parameter is not configured, the field names in the source table are mapped to the corresponding same-named fields in the external table.
                    
                -   If this parameter is configured but only specifies the mapping for some fields of the external table, the remaining fields in the source table are mapped to the corresponding same-named fields in the external table. If some field names or types do not match, an error is reported.
                    
                -   If this parameter is configured, and the name of a field in the source table contains uppercase letters, enclose the field name in a pair of double quotation marks (""). The value of this parameter is in the `Hologres external table field 1 : "Hologres source table field 1" [,Hologres external table field 2 : "Hologres source table field 2" ,...]` format.
                    
                    **Note**
                    
                    For example, the source table fields are `c bool`, `map_B string`, and `a bigint`, and the external table fields are `a bigint`, `x string`, and `c bool`.
                    
                    If the value of `colmapping` is `'x: "map_B"'`, the mapping is successful, and the Hologres data can be queried.
                    
            -   mcfed.mapreduce.jdbc.input.query: optional. If you want to read data from the Hologres source table, you must configure this parameter, and the columns, column names, and data types of the external table must be consistent with those of the Hologres source table being queried directly. If aliases are used, they must also be consistent with the aliases. The `select_sentence` format is `SELECT xxx FROM <holo_database_name>.<holo_schema_name>.<holo_table_name>`.
                
    
-   Examples
    
    ## External data store: OSS
    
    Use a built-in extractor that functions as a storage handler to import data. The owners of MaxCompute and OSS resources use the same Alibaba Cloud account. Import data from the vehicle.csv file into MaxCompute over a virtual private cloud (VPC).
    
    1.  [Perform one-click authorization](https://ram.console.alibabacloud.com/?spm=a2c4g.11186623.2.13.27527df9L8lIYv#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunODPSDefaultRole%22,%20%22TemplateId%22:%20%22DefaultRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fram.console.alibabacloud.com%2F%22,%20%22Service%22:%20%22ODPS%22%7D).
        
    2.  Save the vehicle.csv file to the `mc-test/data_location/` directory of an OSS bucket in the `oss-cn-hangzhou` region and organize the path to the OSS directory. For more information about how to create an OSS bucket, see [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4#concept-ntj-wx1-5db).
        
        The vehicle.csv file contains the following data:
        
        ```
        1,1,51,1,46.81006,-92.08174,9/14/2014 0:00,S
        1,2,13,1,46.81006,-92.08174,9/14/2014 0:00,NE
        1,3,48,1,46.81006,-92.08174,9/14/2014 0:00,NE
        1,4,30,1,46.81006,-92.08174,9/14/2014 0:00,W
        1,5,47,1,46.81006,-92.08174,9/14/2014 0:00,S
        1,6,9,1,46.81006,-92.08174,9/14/2014 0:00,S
        1,7,53,1,46.81006,-92.08174,9/14/2014 0:00,N
        1,8,63,1,46.81006,-92.08174,9/14/2014 0:00,SW
        1,9,4,1,46.81006,-92.08174,9/14/2014 0:00,NE
        1,10,31,1,46.81006,-92.08174,9/14/2014 0:00,N
        ```
        
        Organize the following path to the OSS directory based on the bucket, region, and endpoint:
        
        ```
        oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-test/data_location/
        ```
        
    3.  Log on to the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) and create a table named ambulance\_data\_csv\_load. Sample statement:
        
        ```
        create table ambulance_data_csv_load (
        vehicleId INT,
        recordId INT,
        patientId INT,
        calls INT,
        locationLatitute DOUBLE,
        locationLongtitue DOUBLE,
        recordTime STRING,
        direction STRING );
        ```
        
    4.  Execute the `LOAD OVERWRITE` statement to import the vehicle.csv file from OSS into the destination table. Sample statement:
        
        ```
        load overwrite table ambulance_data_csv_load
        from
        location 'oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-test/data_location/'
        stored by 'com.aliyun.odps.CsvStorageHandler'
        with serdeproperties (
        'odps.properties.rolearn'='acs:ram::xxxxx:role/aliyunodpsdefaultrole', -- The Alibaba Cloud Resource Name (ARN) of the AliyunODPSDefaultRole role. You can obtain the ARN from the Roles page of the Resource Access Management (RAM) console. 
        'odps.text.option.delimiter'=','
        );
        ```
        
        For more information about how to view the ARN of a RAM role, see [View the information about a RAM role](/help/en/ram/user-guide/view-the-information-about-a-ram-role).
        
    5.  View the import result of the ambulance\_data\_csv\_load table. Sample statement:
        
        ```
        -- Enable a full table scan only for the current session. 
        set odps.sql.allow.fullscan=true;
        select * from ambulance_data_csv_load;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+------------+------------+------------------+-------------------+------------+------------+
        | vehicleid  | recordid   | patientid  | calls      | locationlatitute | locationlongtitue | recordtime | direction  |
        +------------+------------+------------+------------+------------------+-------------------+------------+------------+
        | 1          | 1          | 51         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | S          |
        | 1          | 2          | 13         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | NE         |
        | 1          | 3          | 48         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | NE         |
        | 1          | 4          | 30         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | W          |
        | 1          | 5          | 47         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | S          |
        | 1          | 6          | 9          | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | S          |
        | 1          | 7          | 53         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | N          |
        | 1          | 8          | 63         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | SW         |
        | 1          | 9          | 4          | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | NE         |
        | 1          | 10         | 31         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | N          |
        +------------+------------+------------+------------+------------------+-------------------+------------+------------+
        ```
        
    
    ## External data store: Hologres
    
    -   Scenario
        
        A Hologres instance and a database are created. A table is created in the Hologres database. A Hologres external table is created in MaxCompute. The following sample code describes how to query data in the Hologres table by using the Hologres external table.
        
        ```
        -- Query data by using the Hologres external table.
        select * from mf_holo_ext4;
        -- The following result is returned:
        +------------+------+
        | id         | name |
        +------------+------+
        | 1          | abc  |
        | 2          | ereg |
        +------------+------+
        ```
        
    -   Execute the LOAD statement to import data from the Hologres table into a MaxCompute internal table.
        
        1.  Create a MaxCompute internal table.
            
            ```
            -- Create a MaxCompute internal table.
            create table mf_from_holo(id bigint,name string);
            ```
            
        2.  Execute the LOAD statement to import data to MaxCompute.
            
            ```
            -- Import data from the Hologres table to the MaxCompute internal table.
            load into table mf_from_holo 
            from location 'jdbc:postgresql://hgprecn-cn-wwo3ft0l****-cn-beijing-internal.hologres.aliyuncs.com:80/mf_db?application_name=MaxCompute&currentSchema=public&useSSL=false&table=mf_holo/' 
            stored by 'com.aliyun.odps.jdbc.JdbcStorageHandler' 
            with serdeproperties (
              'odps.properties.rolearn'='acs:ram::18927322887*****:role/hologressrole',
              'mcfed.mapreduce.jdbc.driver.class'='org.postgresql.Driver', 
              'odps.federation.jdbc.target.db.type'='holo'
            );
            ```
            
        3.  Query the imported data.
            
            ```
            select * from mf_from_holo;
            -- The following result is returned:
            +------------+------+
            | id         | name |
            +------------+------+
            | 2          | ereg |
            | 1          | abc  |
            +------------+------+
            ```
            
    

## Import data in another open source format

-   Syntax
    
    ```
    {load overwrite|into} table <table_name> [partition (<pt_spec>)]
    from location <external_location>
    [row format serde '<serde_class>'
      [with serdeproperties (<Options>)]
    ]
    stored as <file_format>;
    ```
    
-   Parameters
    
    -   table\_name: required. The name of the table into which you want to insert data. You must create the table before you insert data into it. The schema of the table, excluding partition key columns, must be consistent with the layout of the data in the external data store.
        
    -   pt\_spec: optional. The partition information of the table into which you want to insert data. The value of this parameter is in the `(partition_col1 = partition_col_value1, partition_col2 = partition_col_value2, ...)` format.
        
    -   external\_location: required. The OSS directory that stores the data. The value of this parameter is in the `'oss://<oss_endpoint>/<object>'` format. For more information about OSS endpoints, see [OSS domain names](/help/en/oss/user-guide/oss-domain-names#concept-hh2-4tv-tdb). By default, MaxCompute reads all files in this directory.
        
    -   serde\_class: optional. You can use this parameter in the same way as you use it for a MaxCompute external table. For more information, see [Create an OSS external table](/help/en/maxcompute/user-guide/access-external-tables/#0de6fb397c70d).
        
    -   Options: required. The properties related to the external table in WITH SERDEPROPERTIES. The properties are the same as those for creating the MaxCompute external table. For more information about the properties, see [Create an OSS external table](/help/en/maxcompute/user-guide/access-external-tables/#0de6fb397c70d).
        
    -   file\_format: required. The format of the data that you want to import, such as ORC, PARQUET, RCFILE, SEQUENCEFILE, or TEXTFILE. You can use this parameter in the same way as you use it for a MaxCompute external table. For more information, see [Create an OSS external table](/help/en/maxcompute/user-guide/access-external-tables/#0de6fb397c70d).
        
        **Note**
        
        -   If you want to use the default values of `serde_class` and `Options`, you do not need to specify these parameters.
            
        -   The size of a single file that you want to import cannot exceed 3 GB. If the size exceeds 3 GB, split the file.
            
        
-   Examples
    
    -   Example 1: Import data in another open source format. The owners of MaxCompute and OSS use the same Alibaba Cloud account. Import data from the vehicle.textfile file into MaxCompute over a VPC.
        
        **Note**
        
        If the owners of MaxCompute and OSS use different Alibaba Cloud accounts, you can grant access permissions on OSS to the Alibaba Cloud account of MaxCompute. For more information, see [STS authorization for OSS](/help/en/maxcompute/security-and-compliance/sts-authorization#section-8fd-bdg-bld).
        
        1.  [Perform one-click authorization](https://ram.console.alibabacloud.com/?spm=a2c4g.11186623.2.13.27527df9L8lIYv#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunODPSDefaultRole%22,%20%22TemplateId%22:%20%22DefaultRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fram.console.alibabacloud.com%2F%22,%20%22Service%22:%20%22ODPS%22%7D).
            
        2.  Save the vehicle.txtfile text file to the `mc-test/data_location/` directory of an OSS bucket in the `oss-cn-hangzhou` region and organize the path to OSS directory. For more information about how to create an OSS bucket, see [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4#concept-ntj-wx1-5db).
            
            The vehicle.textfile file contains the following data:
            
            ```
            1,1,51,1,46.81006,-92.08174,9/14/2014 0:00,S
            1,2,13,1,46.81006,-92.08174,9/14/2014 0:00,NE
            1,3,48,1,46.81006,-92.08174,9/14/2014 0:00,NE
            1,4,30,1,46.81006,-92.08174,9/14/2014 0:00,W
            1,5,47,1,46.81006,-92.08174,9/14/2014 0:00,S
            1,6,9,1,46.81006,-92.08174,9/14/2014 0:00,S
            1,7,53,1,46.81006,-92.08174,9/14/2014 0:00,N
            1,8,63,1,46.81006,-92.08174,9/14/2014 0:00,SW
            1,9,4,1,46.81006,-92.08174,9/14/2014 0:00,NE
            1,10,31,1,46.81006,-92.08174,9/14/2014 0:00,N
            ```
            
            Organize the following path to the OSS directory based on the bucket, region, and endpoint:
            
            ```
            oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-test/data_location/
            ```
            
        3.  Log on to the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) and create a destination table named ambulance\_data\_textfile\_load\_pt. Sample statement:
            
            ```
            create table ambulance_data_textfile_load_pt (
            vehicleId STRING,
            recordId STRING,
            patientId STRING,
            calls STRING,
            locationLatitute STRING,
            locationLongtitue STRING,
            recordTime STRING,
            direction STRING)
            partitioned by (ds STRING);
            ```
            
        4.  Execute the `LOAD OVERWRITE` statement to import the vehicle.textfile file from OSS into the destination table. Sample statement:
            
            ```
            load overwrite table ambulance_data_textfile_load_pt partition(ds='20200910')
            from
            location 'oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-test/data_location/'
            row format serde 'org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe'
            stored as textfile;
            ```
            
        5.  View the import result of the ambulance\_data\_textfile\_load\_pt table. Sample statement:
            
            ```
            -- Enable a full table scan only for the current session. 
            set odps.sql.allow.fullscan=true;
            select * from ambulance_data_textfile_load_pt;
            ```
            
            The following result is returned:
            
            ```
            +------------+------------+------------+------------+------------------+-------------------+------------+------------+------------+
            | vehicleid  | recordid   | patientid  | calls      | locationlatitute | locationlongtitue | recordtime | direction  | ds         |
            +------------+------------+------------+------------+------------------+-------------------+------------+------------+------------+
            | 1,1,51,1,46.81006,-92.08174,9/14/2014 0:00,S | NULL       | NULL       | NULL       | NULL             | NULL              | NULL       | NULL       | 20200910   |
            | 1,2,13,1,46.81006,-92.08174,9/14/2014 0:00,NE | NULL       | NULL       | NULL       | NULL             | NULL              | NULL       | NULL       | 20200910   |
            | 1,3,48,1,46.81006,-92.08174,9/14/2014 0:00,NE | NULL       | NULL       | NULL       | NULL             | NULL              | NULL       | NULL       | 20200910   |
            | 1,4,30,1,46.81006,-92.08174,9/14/2014 0:00,W | NULL       | NULL       | NULL       | NULL             | NULL              | NULL       | NULL       | 20200910   |
            | 1,5,47,1,46.81006,-92.08174,9/14/2014 0:00,S | NULL       | NULL       | NULL       | NULL             | NULL              | NULL       | NULL       | 20200910   |
            | 1,6,9,1,46.81006,-92.08174,9/14/2014 0:00,S | NULL       | NULL       | NULL       | NULL             | NULL              | NULL       | NULL       | 20200910   |
            | 1,7,53,1,46.81006,-92.08174,9/14/2014 0:00,N | NULL       | NULL       | NULL       | NULL             | NULL              | NULL       | NULL       | 20200910   |
            | 1,8,63,1,46.81006,-92.08174,9/14/2014 0:00,SW | NULL       | NULL       | NULL       | NULL             | NULL              | NULL       | NULL       | 20200910   |
            | 1,9,4,1,46.81006,-92.08174,9/14/2014 0:00,NE | NULL       | NULL       | NULL       | NULL             | NULL              | NULL       | NULL       | 20200910   |
            | 1,10,31,1,46.81006,-92.08174,9/14/2014 0:00,N | NULL       | NULL       | NULL       | NULL             | NULL              | NULL       | NULL       | 20200910   |
            +------------+------------+------------+------------+------------------+-------------------+------------+------------+------------+
            ```
            
    -   Example 2: Import data into a destination table in dynamic partition mode.
        
        **Note**
        
        If the subdirectories under an OSS directory are mapped to partition names, you can import data into a partitioned table in dynamic partition mode.
        
        1.  [Perform one-click authorization](https://ram.console.alibabacloud.com/?spm=a2c4g.11186623.2.13.27527df9L8lIYv#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunODPSDefaultRole%22,%20%22TemplateId%22:%20%22DefaultRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fram.console.alibabacloud.com%2F%22,%20%22Service%22:%20%22ODPS%22%7D).
            
        2.  Save the vehicle1.csv file to the `mc-test/data_location/ds=20200909/` directory of the OSS bucket and the vehicle2.csv file to the `mc-test/data_location/ds=20200910/` directory of the OSS bucket in the `oss-cn-hangzhou` region and organize the path to the OSS directory. For more information about how to create an OSS bucket, see [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4#concept-ntj-wx1-5db).
            
            The vehicle1.csv and vehicle2.csv files contain the following data:
            
            ```
            --vehicle1.csv
            1,1,51,1,46.81006,-92.08174,9/14/2014 0:00,S
            1,2,13,1,46.81006,-92.08174,9/14/2014 0:00,NE
            1,3,48,1,46.81006,-92.08174,9/14/2014 0:00,NE
            1,4,30,1,46.81006,-92.08174,9/14/2014 0:00,W
            1,5,47,1,46.81006,-92.08174,9/14/2014 0:00,S
            1,6,9,1,46.81006,-92.08174,9/14/2014 0:00,S
            --vehicle2.csv
            1,7,53,1,46.81006,-92.08174,9/14/2014 0:00,N
            1,8,63,1,46.81006,-92.08174,9/14/2014 0:00,SW
            1,9,4,1,46.81006,-92.08174,9/14/2014 0:00,NE
            1,10,31,1,46.81006,-92.08174,9/14/2014 0:00,N
            ```
            
            Organize the following path to the OSS directory based on the bucket, region, and endpoint:
            
            ```
            oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-test/data_location/ds=20200909/'
            oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-test/data_location/ds=20200910/'
            ```
            
        3.  Log on to the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) and create a destination table named ambulance\_data\_csv\_load\_dynpt. Sample statement:
            
            ```
            create table ambulance_data_csv_load_dynpt (
            vehicleId STRING,
            recordId STRING,
            patientId STRING,
            calls STRING,
            locationLatitute STRING,
            locationLongtitue STRING,
            recordTime STRING,
            direction STRING)
            partitioned by (ds STRING);
            ```
            
        4.  Execute the `LOAD OVERWRITE` statement to import the files from OSS into the destination table. Sample statement:
            
            ```
            load overwrite table ambulance_data_csv_load_dynpt partition(ds)
            from
            location 'oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-test/data_location/'
            row format serde 'org.apache.hadoop.hive.serde2.OpenCSVSerde'
            stored as textfile;
            ```
            
        5.  View the import result of the ambulance\_data\_csv\_load\_dynpt table. Sample statement:
            
            ```
            -- Enable a full table scan only for the current session. 
            set odps.sql.allow.fullscan=true;
            select * from ambulance_data_csv_load_dynpt;
            ```
            
            The following result is returned:
            
            ```
            +------------+------------+------------+------------+------------------+-------------------+------------+------------+------------+
            | vehicleid  | recordid   | patientid  | calls      | locationlatitute | locationlongtitue | recordtime | direction  | ds         |
            +------------+------------+------------+------------+------------------+-------------------+------------+------------+------------+
            | 1          | 7          | 53         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | N          | 20200909   |
            | 1          | 8          | 63         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | SW         | 20200909   |
            | 1          | 9          | 4          | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | NE         | 20200909   |
            | 1          | 10         | 31         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | N          | 20200909   |
            | 1          | 1          | 51         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | S          | 20200910   |
            | 1          | 2          | 13         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | NE         | 20200910   |
            | 1          | 3          | 48         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | NE         | 20200910   |
            | 1          | 4          | 30         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | W          | 20200910   |
            | 1          | 5          | 47         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | S          | 20200910   |
            | 1          | 6          | 9          | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | S          | 20200910   |
            +------------+------------+------------+------------+------------------+-------------------+------------+------------+------------+
            ```
            

## **References**

If you want to export data from a MaxCompute project to an external data store such as OSS or Hologres for other computing engines to use the data, you can use UNLOAD statements. For more information, see [UNLOAD](/help/en/maxcompute/user-guide/product-unload-dml).
