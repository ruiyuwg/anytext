MaxCompute supports schemaless queries on data in Parquet external tables that are stored in Object Storage Service (OSS). You can export the parsed dataset to OSS or write it to an internal table. You can also embed the dataset as a subquery in SQL operations to easily operate on data in a data lake.

## **Background**

When you use Spark to perform ad-hoc exploration of structured data, you do not need to rely on a fixed data warehouse model. If you must define table schemas for input and output, manually map file fields, and then maintain partitions before you read or write OSS data, the process becomes cumbersome and lacks flexibility.

When you read a Parquet external table, the LOAD instruction automatically parses the file format and reads the data into a dataset with a schema. This lets you process the data as if it were in a table by selecting specific columns. You can export the results to OSS using the UNLOAD command or import the results into an internal table using CREATE TABLE AS. You can also use the dataset as a subquery in other SQL statements. This provides a flexible way for you to use MaxCompute to operate on data in a data lake.

## **Usage notes**

Schemaless Query currently does **not** support treating subdirectories in an OSS bucket as partitions.

## **Syntax**

```
SELECT *, <col_name>, <table_alias>.<col_name> 
FROM 
 LOCATION '<location_path>'  
 ('key'='value' [, 'key1'='value1', ...]) 
 [AS <table_alias>];
```

## **Parameters**

**Parameter**

**Required**

**Description**

\*

Yes

Query all fields in the Parquet file.

col\_name

Yes

Query a field with a known column name in the Parquet file.

table\_alias.col\_name

Yes

Query a field with a known column name in the Parquet file. Expressed as the full path with the table alias and field name.

table\_alias

No

A custom table alias.

location\_path

Yes

-   The location of the Parquet file. It must be an OSS directory with the structure `oss://oss_endpoint/bucket_name/path/`.
    
-   The level below path supports partition directories in the format `partition_name=partition_value`.
    
-   Schemaless Query does not currently support treating subdirectories in the location as partitions. Therefore, partition pruning is not supported.
    

key&value

Yes

The parameters and their values for the query statement. For more information, see the following table.

### **key and value parameters**

**key**

**Required**

**Description**

**value**

**Default value**

file\_format

Yes

Specifies the format of the file at the location. Only Parquet is supported. Other formats cause an error.

parquet

parquet

rolearn

No

Specifies the RoleARN required to access the location.

-   Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/).
    
-   In the navigation pane on the left, choose **Identities** > **Roles**.
    
-   In the **Basic Information** section, you can find the **ARN**.
    

**Note**

If you do not specify a RoleARN in the SQL statement, the system uses the ARN of the `AliyunODPSDefaultRole` role by default.

`acs:ram::xxxxxx:role/aliyunodpsdefaultrole`

acs:ram::1234\*\*\*\*:role/aliyunodpsdefaultrole

file\_pattern\_blacklist

No

Specifies a blacklist of files to read. If a scanned file name matches the blacklist, the file is not read.

A regular expression. For example:

`".*_SUCCESS$,.*\\.hive_staging.*"`

None

file\_pattern\_whitelist

No

Specifies a whitelist of files to read. A file is read only if its name matches the whitelist.

A regular expression. For example:

`".*_20250124_.*.parquet"`

`.*`

## **Examples**

### **Example 1: Read OSS data by setting blacklist and whitelist parameters**

1.  Prepare the data.
    
    1.  Log on to the [Object Storage Service (OSS) console](https://oss.console.alibabacloud.com/).
        
    2.  In the navigation pane on the left, click **Buckets**.
        
    3.  On the **Buckets** page, click **Create Bucket**.
        
    4.  Create the `object-table-test/schema/` directory in the OSS bucket.
        
    5.  Prepare a Parquet file to read and validate the whitelist parameter. You can run the following Python code locally to create the Parquet file.
        
        ```
        import pandas as pd
        
        # Sample data
        data = [
            {'id': 3, 'name': 'Charlie', 'age': 35},
            {'id': 4, 'name': 'David', 'age': 40},
            {'id': 5, 'name': 'Eve', 'age': 28}
        ]
        
        df = pd.DataFrame(data)
        
        df['id'] = df['id'].astype('int32')
        df['name'] = df['name'].astype('str')
        df['age'] = df['age'].astype('int32')
        
        output_filename = 'sample_data.parquet'
        df.to_parquet(output_filename, index=False, engine='pyarrow')
        ```
        
    6.  Upload the Parquet file to the `object-table-test/schema/` directory in the OSS bucket.
        
        1.  Log on to the [Object Storage Service (OSS) console](https://oss.console.alibabacloud.com/).
            
        2.  In the `object-table-test/schema/` directory of the bucket, click **Upload Object**.
            
    7.  In the `object-table-test/schema/` directory of the OSS bucket, prepare a CSV file to validate the blacklist parameter.
        
2.  Read the Parquet file.
    
    Log on to the [MaxCompute client (odpscmd)](/help/en/maxcompute/user-guide/maxcompute-client) and execute the following SQL commands.
    
    -   Add `test_oss.csv` to the blacklist and read the Parquet file from OSS.
        
        ```
        SELECT id, name, age 
        FROM location 'oss://oss-cn-hangzhou-internal.aliyuncs.com/object-table-test/schema/'
        (
        'file_format'='parquet',
        'rolearn'='acs:ram::<uid>:role/aliyunodpsdefaultrole',
        'file_pattern_blacklist'='.*test_oss.*'
        );
        ```
        
    -   Add `sample_data` to the whitelist and read the Parquet file from OSS.
        
        ```
        SELECT id, name, age 
        FROM location 'oss://oss-cn-hangzhou-internal.aliyuncs.com/object-table-test/schema/'
        (
        'file_format'='parquet',
        'rolearn'='acs:ram::<uid>:role/aliyunodpsdefaultrole',
        'file_pattern_whitelist'='.*sample_data.*'
        );
        ```
        
    
    With either of the preceding parameter settings, the `sample_data` file is read and the following result is returned:
    
    ```
    +------------+------------+------------+
    | id         | name       | age        |
    +------------+------------+------------+
    | 3          | Charlie    | 35         |
    | 4          | David      | 40         |
    | 5          | Eve        | 28         |
    +------------+------------+------------+
    ```
    

### **Example 2: Read data written by Spark**

1.  Create the `object-table-test/spark/` directory in the OSS bucket.
    
2.  Use Serverless Spark to generate Parquet data. For more information, see [Create an SQL task](/help/en/emr/emr-serverless-spark/user-guide/develop-a-spark-sql#de359d514bwc9). If Parquet files that are generated by Spark already exist in the OSS directory, you can skip this step.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/) and select a region in the upper-left corner.
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **Spark**.
        
    3.  On the **Spark** page, click the name of the target workspace to open it. You can also click **Create Workspace**. After the workspace is created, click the name of the new workspace to open it.
        
    4.  In the navigation pane on the left, select **Development**, create a new SparkSQL file, and execute the following SQL statement:
        
        ```
        CREATE TABLE example_table_parquet04 (
            id STRING,
            name STRING,
            age STRING,
            salary DOUBLE,
            is_active BOOLEAN,
            created_at TIMESTAMP,
            details STRUCT<department:STRING, position:STRING>
        )
        USING PARQUET;
        
        INSERT INTO example_table_parquet04 VALUES
        ('1', 'Alice', '30', 5000.50, TRUE, TIMESTAMP '2024-01-01 10:00:00', STRUCT('HR', 'Manager')),
        ('2', 'Bob', '25', 6000.75, FALSE, TIMESTAMP '2024-02-01 11:00:00', STRUCT('Engineering', 'Developer')),
        ('3', 'Charlie','35', 7000.00, TRUE, TIMESTAMP '2024-03-01 12:00:00', STRUCT('Marketing', 'Analyst')),
        ('4', 'David', '40', 8000.25, FALSE, TIMESTAMP '2024-04-01 13:00:00', STRUCT('Sales', 'Representative')),
        ('5', 'Eve', '28', 5500.50, TRUE, TIMESTAMP '2024-05-01 14:00:00', STRUCT('Support', 'Technician'));
        
        SELECT * FROM example_table_parquet04;
        ```
        
3.  Log on to the [OSS console](https://oss.console.alibabacloud.com/overview) and view the generated data file in the destination path.
    
4.  Log on to the MaxCompute client, add `_SUCCESS` to the blacklist, and read the Parquet file from OSS.
    
    ```
    SELECT  *
    FROM location 'oss://oss-cn-hangzhou-internal.aliyuncs.com/object-table-test/spark/example_table_parquet04/'
    (
    'file_format'='parquet',
    'rolearn'='acs:ram::<uid>:role/aliyunodpsdefaultrole',
    'file_pattern_blacklist'='.*_SUCCESS.*'
    );
    ```
    
    The following result is returned:
    
    ```
    +----+---------+-----+------------+-----------+---------------------+----------------------------------------------+
    | id | name    | age | salary     | is_active | created_at          | details                                      |
    +----+---------+-----+------------+-----------+---------------------+----------------------------------------------+
    | 1  | Alice   | 30  | 5000.5     | true      | 2024-01-01 10:00:00 | {department:HR, position:Manager}            |
    | 2  | Bob     | 25  | 6000.75    | false     | 2024-02-01 11:00:00 | {department:Engineering, position:Developer} |
    | 3  | Charlie | 35  | 7000.0     | true      | 2024-03-01 12:00:00 | {department:Marketing, position:Analyst}     |
    | 4  | David   | 40  | 8000.25    | false     | 2024-04-01 13:00:00 | {department:Sales, position:Representative}  |
    | 5  | Eve     | 28  | 5500.5     | true      | 2024-05-01 14:00:00 | {department:Support, position:Technician}    |
    +----+---------+-----+------------+-----------+---------------------+----------------------------------------------+
    ```
    

For more information about schemaless query operations, see [Use a schemaless query to read Parquet data from a data lake](/help/en/maxcompute/use-cases/use-schemaless-query-to-read-parquet-data-on-the-lake).

### **Example 3: Use a schemaless query as a subquery**

1.  Prepare the data.
    
    Log on to the [OSS console](https://oss.console.alibabacloud.com/overview) and upload the test data file [part-00001.snappy.parquet](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250714/njiykj/part-00001-2f55cd44-da44-4940-8302-a926844372d3-c000.snappy.parquet) to the specified OSS bucket directory `object-table-test/schema/`. For more information, see [Upload files to OSS](/help/en/oss/user-guide/simple-upload).
    
2.  Log on to the MaxCompute client and create an internal table to store the automatically discovered OSS data.
    
    ```
    CREATE TABLE ow_test (
        id INT,
        name STRING,
        age INT
    );
    ```
    
3.  Read the OSS data using a schemaless query. The command is as follows:
    
    ```
    SELECT * FROM 
    LOCATION 'oss://oss-cn-hangzhou-internal.aliyuncs.com/object-table-test/schema/' 
    (
      'file_format'='parquet'
    );
    ```
    
    The following result is returned:
    
    ```
    +------------+------------+------------+
    | id         | name       | age        |
    +------------+------------+------------+
    | 3          | Charlie    | 35         |
    | 4          | David      | 40         |
    | 5          | Eve        | 28         |
    +------------+------------+------------+
    ```
    
4.  You can pass the data read from OSS as a subquery to an outer SQL statement and query the ow\_test result table.
    
    ```
    INSERT OVERWRITE TABLE ow_test
    SELECT id,name,age FROM 
    (
        SELECT * FROM 
        LOCATION 'oss://oss-cn-hangzhou-internal.aliyuncs.com/object-table-test/schema/' 
        (
          'file_format'='parquet'
        )
    );
    
    SELECT * FROM ow_test;
    ```
    
    The following is returned:
    
    ```
    +------------+------------+------------+
    | id         | name       | age        |
    +------------+------------+------------+
    | 3          | Charlie    | 35         |
    | 4          | David      | 40         |
    | 5          | Eve        | 28         |
    +------------+------------+------------+
    ```
    

### **Example 4: Save the results of a schemaless query to an internal data warehouse table**

1.  Prepare the data.
    
    Log on to the [OSS console](https://oss.console.alibabacloud.com/overview) and upload the test data file [part-00001.snappy.parquet](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250714/njiykj/part-00001-2f55cd44-da44-4940-8302-a926844372d3-c000.snappy.parquet) to the specified OSS bucket directory `object-table-test/schema/`. For more information, see [Upload files to OSS](/help/en/oss/user-guide/simple-upload).
    
2.  Log on to the MaxCompute client and read the OSS data using a schemaless query.
    
    ```
    SELECT * FROM 
    LOCATION 'oss://oss-cn-hangzhou-internal.aliyuncs.com/object-table-test/schema/' 
    (
      'file_format'='parquet'
    );
    ```
    
    The following result is returned:
    
    ```
    +------------+------------+------------+
    | id         | name       | age        |
    +------------+------------+------------+
    | 3          | Charlie    | 35         |
    | 4          | David      | 40         |
    | 5          | Eve        | 28         |
    +------------+------------+------------+
    ```
    
3.  Copy the automatically discovered OSS data to an internal table using a `CREATE TABLE AS` statement and query the result.
    
    ```
    CREATE TABLE ow_test_2 AS 
      SELECT * FROM 
      LOCATION 'oss://oss-cn-hangzhou-internal.aliyuncs.com/object-table-test/schema/' 
      (
        'file_format'='parquet'
       );
    
    -- Query the result table ow_test_2
    SELECT * FROM ow_test_2;
    ```
    
    The following result is returned:
    
    ```
    +------------+------------+------------+
    | id         | name       | age        |
    +------------+------------+------------+
    | 3          | Charlie    | 35         |
    | 4          | David      | 40         |
    | 5          | Eve        | 28         |
    +------------+------------+------------+
    ```
    

### **Example 5: Unload the results of a schemaless query back to the data lake**

1.  Prepare the data.
    
    Log on to the [OSS console](https://oss.console.alibabacloud.com/overview) and upload the test data file [part-00001.snappy.parquet](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250714/njiykj/part-00001-2f55cd44-da44-4940-8302-a926844372d3-c000.snappy.parquet) to the specified OSS bucket directory `object-table-test/schema/`. For more information, see [Upload files to OSS](/help/en/oss/user-guide/simple-upload).
    
2.  Log on to the MaxCompute client and read the OSS data using a schemaless query.
    
    ```
    SELECT * FROM 
    LOCATION 'oss://oss-cn-hangzhou-internal.aliyuncs.com/object-table-test/schema/' 
    (
      'file_format'='parquet'
    );
    ```
    
    The following result is returned:
    
    ```
    +------------+------------+------------+
    | id         | name       | age        |
    +------------+------------+------------+
    | 3          | Charlie    | 35         |
    | 4          | David      | 40         |
    | 5          | Eve        | 28         |
    +------------+------------+------------+
    ```
    
3.  Unload the automatically discovered results to OSS. For more information about the UNLOAD operation, see [UNLOAD](/help/en/maxcompute/user-guide/product-unload-dml#section-df8-5e8-11o).
    
    ```
    UNLOAD FROM (
      SELECT * FROM 
      LOCATION 'oss://oss-cn-hangzhou-internal.aliyuncs.com/object-table-test/schema/' 
      ('file_format'='parquet')
    ) 
    INTO 
    LOCATION 'oss://oss-cn-hangzhou-internal.aliyuncs.com/object-table-test/unload/ow_test_3/'
    ROW FORMAT SERDE 'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe'
    WITH SERDEPROPERTIES ('odps.external.data.enable.extension'='true')
    STORED AS PARQUET;
    ```
    
    View the generated file in the OSS directory: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4546062571/p985952.png)
