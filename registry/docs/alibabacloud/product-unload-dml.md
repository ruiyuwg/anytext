Use the UNLOAD command to export data from a MaxCompute project to external storage such as OSS or Hologres. Other compute engines can then access this data.

## **Required permissions**

-   **MaxCompute permissions**: The account must have SELECT permission on the table in the MaxCompute project. For more information, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).
    
-   **External storage permissions**: Before exporting data from MaxCompute to external storage, grant MaxCompute access to that storage. This applies to both OSS and Hologres.
    
    -   **OSS authorization**: Use one-click authorization for higher security. For details, see [STS-based authorization](/help/en/maxcompute/security-and-compliance/sts-authorization#concept-ln3-c4v-ydb). In the examples below, the role is named `AliyunODPSDefaultRole`.
        
    -   **Hologres authorization**: Create a RAM role. Grant it permission to let MaxCompute access Hologres. Then add the role to your Hologres instance. For steps, see [Create a Hologres foreign table (STS mode)](/help/en/maxcompute/user-guide/hologres-foreign-tables#section-dcq-zfi-6no).
        

## **Export to external storage**

The UNLOAD command uses append mode. If you run UNLOAD multiple times to the same destination path, the system does not overwrite existing files. Instead, it creates new files in that path. To overwrite files, manually delete the destination path before running UNLOAD.

## **Export to OSS**

### **Export as text format (CSV or TSV)**

This method uses the built-in `StorageHandler` to export data. By default, files use the `.csv` or `.tsv` extension.

#### **Syntax**

```
UNLOAD FROM {<select_statement>|<table_name> [PARTITION (<pt_spec>)]} 
INTO 
LOCATION <oss_location>
STORED BY <StorageHandler>
[WITH SERDEPROPERTIES ('<property_name>'='<property_value>',...)];
```

#### **Key configurations**

**Configuration item**

**Description**

oss\_location

The target OSS path. Format: `oss://<oss_endpoint>/<bucket>/<object_path>`.

StorageHandler

Specify the built-in processor:

-   `'com.aliyun.odps.CsvStorageHandler'`: Export as CSV.
    
-   `'com.aliyun.odps.TsvStorageHandler'`: Export as TSV.
    

SERDEPROPERTIES

Configure export behavior. Common properties include the following:

-   `'odps.properties.rolearn'`: Required. The ARN of the RAM role used to access OSS.
    
-   `'odps.text.option.gzip.output.enabled'='true'`: Compress exported files with GZIP.
    

#### **Examples**

-   [Example 1: Export as CSV and compress with GZIP](#05ee586f2epoy)
    
-   [Example 2: Export partitioned data as TSV and compress](#496d61a8fex7c)
    

##### **Example 1: Export as CSV and compress with GZIP**

Export data from the `sale_detail` table in the MaxCompute project to OSS. The `sale_detail` data is as follows:

```
-- Partition fields: sale_date, region
+------------+-------------+-------------+------------+------------+
| shop_name  | customer_id | total_price | sale_date  | region     |
+------------+-------------+-------------+------------+------------+
| s1         | c1          | 100.1       | 2013       | china      |
| s2         | c2          | 100.2       | 2013       | china      |
| s3         | c3          | 100.3       | 2013       | china      |
| null       | c5          | NULL        | 2014       | shanghai   |
| s6         | c6          | 100.4       | 2014       | shanghai   |
| s7         | c7          | 100.5       | 2014       | shanghai   |
+------------+-------------+-------------+------------+------------+
```

**Procedure**:

1.  **In OSS**: Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Create an OSS bucket named `mc-unload/data_location/` in the `oss-cn-hangzhou` region. Then build the OSS path. For more information about creating buckets, see [Create a bucket in the console](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb). Build the OSS path using your bucket, region, and endpoint:
    
    ```
    oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-unload/data_location
    ```
    
2.  **In MaxCompute**: Log on to the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db). Run the UNLOAD command.
    
    **Method 1: Use a SELECT statement**
    
    ```
    -- Set the data size per worker to 256 MB to control the number of output files.
    SET odps.stage.mapper.split.size=256;
    
    UNLOAD FROM (SELECT * FROM sale_detail)
    INTO
    LOCATION 'oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-unload/data_location'
    STORED BY 'com.aliyun.odps.CsvStorageHandler'
    WITH SERDEPROPERTIES (
        'odps.properties.rolearn'='acs:ram::<uid>:role/AliyunODPSDefaultRole', 
        'odps.text.option.gzip.output.enabled'='true'
    );
    ```
    
    **Method 2: Specify the table name directly (no query cost)**
    
    ```
    -- Set the data size per worker to 256 MB to control the number of output files.
    SET odps.stage.mapper.split.size=256;
    
    UNLOAD FROM sale_detail 
    INTO
    LOCATION 'oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-unload/data_location'
    STORED BY 'com.aliyun.odps.CsvStorageHandler'
    WITH SERDEPROPERTIES (
        'odps.properties.rolearn'='acs:ram::<uid>:role/AliyunODPSDefaultRole', 
        'odps.text.option.gzip.output.enabled'='true'
    );
    ```
    
3.  **Verify the result**: Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Check the target OSS path. The exported files are in CSV format and compressed with GZIP.
    

##### **Example 2: Export partitioned data as TSV and compress**

Export data from the `sale_detail` table where `sale_date='2013'` and `region='china'`, as TSV and compress with GZIP.

```
-- Partition fields: sale_date, region
+------------+-------------+-------------+------------+------------+
| shop_name  | customer_id | total_price | sale_date  | region     |
+------------+-------------+-------------+------------+------------+
| s1         | c1          | 100.1       | 2013       | china      |
| s2         | c2          | 100.2       | 2013       | china      |
| s3         | c3          | 100.3       | 2013       | china      |
| null       | c5          | NULL        | 2014       | shanghai   |
| s6         | c6          | 100.4       | 2014       | shanghai   |
| s7         | c7          | 100.5       | 2014       | shanghai   |
+------------+-------------+-------------+------------+------------+
```

**Procedure**:

1.  **In OSS**: Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Create an OSS bucket named `mc-unload/data_location/` in the `oss-cn-hangzhou` region. Then build the OSS path. For more information about creating buckets, see [Create a bucket in the console](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb). Build the OSS path using your bucket, region, and endpoint:
    
    ```
    oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-unload/data_location
    ```
    
2.  **In MaxCompute**: Log on to the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db). Run the UNLOAD command.
    
    ```
    SET odps.stage.mapper.split.size=256;
    
    UNLOAD FROM sale_detail PARTITION (sale_date='2013',region='china')
    INTO
    LOCATION 'oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-unload/data_location'
    STORED BY 'com.aliyun.odps.TsvStorageHandler'
    WITH SERDEPROPERTIES (
        'odps.properties.rolearn'='acs:ram::<uid>:role/AliyunODPSDefaultRole', 
        'odps.text.option.gzip.output.enabled'='true'
    );
    ```
    
3.  **Verify the result**: Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Check the target OSS path. The exported files are in TSV format and compressed with GZIP.
    

### **Export as open-source formats (Parquet, ORC, etc.)**

This method supports exporting data in multiple open-source columnar or structured data formats.

#### **Syntax**

```
UNLOAD FROM {<select_statement>|<table_name> [PARTITION (<pt_spec>)]}
INTO 
LOCATION <oss_location>
[ROW FORMAT SERDE '<serde_class>' 
  [WITH SERDEPROPERTIES ('<property_name>'='<property_value>',...)]
]
STORED AS <file_format>
[PROPERTIES ('<tbproperty_name>'='<tbproperty_value>')];
```

#### **Key configurations**

**Configuration item**

**Description**

oss\_location

The target OSS path. Format: `oss://<oss_endpoint>/<bucket>/<object_path>`.

serde\_class

Specify the serialization/deserialization library. For example, `org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe` for Parquet.

SERDEPROPERTIES

`'odps.properties.rolearn'`: Required. The ARN of the RAM role used to access OSS.

file\_format

Required. Specify the file format, such as `PARQUET`, `ORC`, `TEXTFILE`, or `JSON`.

PROPERTIES

\- `'mcfed.parquet.compression'='SNAPPY'`: Compression format for Parquet files. Supports `SNAPPY` and `LZO`.  
\- `'odps.text.option.gzip.output.enabled'='true'`: GZIP compression for TEXTFILE.  
  

#### **Supported formats and compression**

**File format**

**Supported compression formats**

**Description**

PARQUET

SNAPPY, LZO

Columnar storage format optimized for analytical queries

ORC

SNAPPY, LZO

Columnar storage format for the Hadoop ecosystem

TEXTFILE

GZIP

Text format with support for custom delimiters

RCFILE

\-

Row-column hybrid storage format

SEQUENCEFILE

\-

Hadoop sequence file format

AVRO

\-

Data serialization format

JSON

\-

JSON format

#### **Examples**

-   [Example 1: Export as PARQUET and compress with SNAPPY](#827af49616ayx)
    
-   [Example 2: Export partitioned data as PARQUET](#48d2dd364500d)
    
-   [Example 3: Export as TEXTFILE with a custom delimiter](#75b95619f96kb)
    

##### **Example 1: Export as PARQUET and compress with SNAPPY**

Export the data from the `sale_detail` table in the MaxCompute project to OSS. The `sale_detail` data is as follows:

```
-- Partition fields: sale_date, region
+------------+-------------+-------------+------------+------------+
| shop_name  | customer_id | total_price | sale_date  | region     |
+------------+-------------+-------------+------------+------------+
| s1         | c1          | 100.1       | 2013       | china      |
| s2         | c2          | 100.2       | 2013       | china      |
| s3         | c3          | 100.3       | 2013       | china      |
| null       | c5          | NULL        | 2014       | shanghai   |
| s6         | c6          | 100.4       | 2014       | shanghai   |
| s7         | c7          | 100.5       | 2014       | shanghai   |
+------------+-------------+-------------+------------+------------+
```

**Procedure**:

1.  **In OSS**: Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Create an OSS bucket named `mc-unload/data_location/` in the `oss-cn-hangzhou` region. Then build the OSS path. For more information about creating buckets, see [Create a bucket in the console](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb). Build the OSS path using your bucket, region, and endpoint:
    
    ```
    oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-unload/data_location
    ```
    
2.  **In MaxCompute**: Log on to the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db). Run the UNLOAD command.
    
    ```
    -- Set the data size per worker to 256 MB to control the number of output files.
    SET odps.stage.mapper.split.size=256;
    
    UNLOAD FROM (SELECT * FROM sale_detail) 
    INTO  
    LOCATION 'oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-unload/data_location' 
    ROW FORMAT SERDE 'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe' 
    WITH SERDEPROPERTIES (
        'odps.properties.rolearn'='acs:ram::<uid>:role/AliyunODPSDefaultRole'
    ) 
    STORED AS PARQUET 
    PROPERTIES('mcfed.parquet.compression'='SNAPPY');
    ```
    
3.  **Verify the result**: Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Check the target OSS path. The exported files are in PARQUET format and compressed with SNAPPY.
    

##### **Example 2: Export partitioned data as PARQUET**

Export the data from the MaxCompute `sale_detail` table partitioned by `sale_date='2013'`, `region='china'` in PARQUET format and compress it using SNAPPY. The `sale_detail` data is as follows:

```
-- Partition fields: sale_date, region
+------------+-------------+-------------+------------+------------+
| shop_name  | customer_id | total_price | sale_date  | region     |
+------------+-------------+-------------+------------+------------+
| s1         | c1          | 100.1       | 2013       | china      |
| s2         | c2          | 100.2       | 2013       | china      |
| s3         | c3          | 100.3       | 2013       | china      |
| null       | c5          | NULL        | 2014       | shanghai   |
| s6         | c6          | 100.4       | 2014       | shanghai   |
| s7         | c7          | 100.5       | 2014       | shanghai   |
+------------+-------------+-------------+------------+------------+
```

**Procedure**:

1.  **In OSS**: Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Create an OSS bucket named `mc-unload/data_location/` in the `oss-cn-hangzhou` region. Then build the OSS path. For more information about creating buckets, see [Create a bucket in the console](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb). Build the OSS path using your bucket, region, and endpoint:
    
    ```
    oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-unload/data_location
    ```
    
2.  **In MaxCompute**: Log on to the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db). Run the UNLOAD command.
    
    ```
    -- Set the data size per worker to 256 MB to control the number of output files.
    SET odps.stage.mapper.split.size=256;
    
    UNLOAD FROM sale_detail PARTITION (sale_date='2013',region='china') 
    INTO 
    LOCATION 'oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-unload/data_location' 
    ROW FORMAT SERDE 'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe' 
    WITH SERDEPROPERTIES ('odps.properties.rolearn'='acs:ram::<uid>:role/AliyunODPSDefaultRole') 
    STORED AS PARQUET 
    PROPERTIES('mcfed.parquet.compression'='SNAPPY');
    ```
    
3.  **Verify the result**: Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Check the target OSS path. The exported files are in PARQUET format and compressed with SNAPPY.
    

##### **Example 3: Export as TEXTFILE with a custom delimiter**

Export data from the `sale_detail` table as TXT files with a comma delimiter.

```
-- Partition fields: sale_date, region
+------------+-------------+-------------+------------+------------+
| shop_name  | customer_id | total_price | sale_date  | region     |
+------------+-------------+-------------+------------+------------+
| s1         | c1          | 100.1       | 2013       | china      |
| s2         | c2          | 100.2       | 2013       | china      |
| s3         | c3          | 100.3       | 2013       | china      |
| null       | c5          | NULL        | 2014       | shanghai   |
| s6         | c6          | 100.4       | 2014       | shanghai   |
| s7         | c7          | 100.5       | 2014       | shanghai   |
+------------+-------------+-------------+------------+------------+
```

**Procedure**:

1.  **In OSS**: Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Create an OSS bucket named `mc-unload/data_location/` in the `oss-cn-hangzhou` region. Then build the OSS path. For more information about creating buckets, see [Create a bucket in the console](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb). Build the OSS path using your bucket, region, and endpoint:
    
    ```
    oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-unload/data_location
    ```
    
2.  **In MaxCompute**: Log on to the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db). Run the UNLOAD command.
    
    ```
    -- Set the data size per worker to 256 MB to control the number of output files.
    SET odps.sql.allow.fullscan=true; 
    
    UNLOAD FROM (SELECT * FROM sale_detail)
    INTO
    LOCATION 'oss://oss-cn-beijing-internal.aliyuncs.com/mc-unload/data_location/'
    ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe'
    WITH SERDEPROPERTIES ('field.delim'=',')
    STORED AS TEXTFILE
    PROPERTIES ('odps.external.data.enable.extension'='true');
    ```
    
3.  **Verify the result**: Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Check the target OSS path. The exported files are in TXT format and use a comma delimiter.
    

### **Customize file name prefixes, suffixes, and extensions**

When you use `UNLOAD` to export data to OSS, you can customize the prefix, suffix, and extension of the output file using properties in `PROPERTIES` or `SERDEPROPERTIES`.

#### **Syntax**

```
UNLOAD FROM {<select_statement>|<table_name> [PARTITION (<pt_spec>)]}
INTO 
LOCATION <oss_location>
[ROW FORMAT SERDE '<serde_class>' 
  [WITH SERDEPROPERTIES ('<property_name>'='<property_value>',...)]
]
STORED AS <file_format>
[PROPERTIES ('<tbproperty_name>'='<tbproperty_value>',...)];
```

#### **Key configurations**

**property\_name/tbproperty\_name**

**Description**

**Example value**

**odps.external.data.output.prefix**

File name prefix. Letters, numbers, and underscores only. Length: 1–10 characters.

'mc\_'

**odps.external.data.output.suffix**

File name suffix. Letters, numbers, and underscores only.

'\_hangzhou'

**odps.external.data.enable.extension**

Determines whether to display default file extensions, such as `.tx` and `.parquet`.

'true'

**odps.external.data.output.explicit.extension**

Custom file extension. Overrides the default extension.

'jsonl'

#### **Suffix reference**

The following table lists the default extensions generated when you set `odps.external.data.enable.extension=true`.

**File format**

**SerDe**

**Suffix**

SEQUENCEFILE

org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe

.sequencefile

TEXTFILE

org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe

.txt

RCFILE

org.apache.hadoop.hive.serde2.columnar.LazyBinaryColumnarSerDe

.rcfile

ORC

org.apache.hadoop.hive.ql.io.orc.OrcSerde

.orc

PARQUET

org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe

.parquet

AVRO

org.apache.hadoop.hive.serde2.avro.AvroSerDe

.avro

JSON

org.apache.hive.hcatalog.data.JsonSerDe

.json

CSV

org.apache.hadoop.hive.serde2.OpenCSVSerde

.csv

**Note**

Files exported with SNAPPY or LZO compression do not show the .snappy or .lzo extension.

#### **Examples**

-   [Example 1: Export as TEXTFILE with a prefix and suffix](#9846162ddc1e4)
    
-   [Example 2: Export as JSON with a custom extension](#c25546ca4595c)
    

##### **Example 1: Export as TEXTFILE with a prefix and suffix**

Export the data from the `sale_detail` table in your MaxCompute project to OSS as a TXT-formatted file, and name it in the format `mc_<system-generated>_beijing.txt`. The `sale_detail` data is as follows:

```
-- Partition fields: sale_date, region
+------------+-------------+-------------+------------+------------+
| shop_name  | customer_id | total_price | sale_date  | region     |
+------------+-------------+-------------+------------+------------+
| s1         | c1          | 100.1       | 2013       | china      |
| s2         | c2          | 100.2       | 2013       | china      |
| s3         | c3          | 100.3       | 2013       | china      |
| null       | c5          | NULL        | 2014       | shanghai   |
| s6         | c6          | 100.4       | 2014       | shanghai   |
| s7         | c7          | 100.5       | 2014       | shanghai   |
+------------+-------------+-------------+------------+------------+
```

**Procedure**:

1.  **In OSS**: Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Create an OSS bucket named `mc-unload/data_location/` in the `oss-cn-hangzhou` region. Then build the OSS path. For more information about creating buckets, see [Create a bucket in the console](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb). Build the OSS path using your bucket, region, and endpoint:
    
    ```
    oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-unload/data_location
    ```
    
2.  **In MaxCompute**: Log on to the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db). Run the UNLOAD command.
    
    ```
    UNLOAD FROM (SELECT * FROM sale_detail) 
    INTO 
    LOCATION 'oss://oss-cn-beijing-internal.aliyuncs.com/***/textfile' 
    row format serde 'org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe'
    STORED AS textfile
    PROPERTIES (
        'odps.external.data.output.prefix'='mc_', 
        'odps.external.data.output.suffix'='_beijing',
        'odps.external.data.enable.extension'='true');
    ```
    
3.  **Verify the result**: Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Check the target OSS path. The exported files are named `mc_<system-generated>_beijing.txt`.
    

##### **Example 2: Export as JSON with a custom extension**

Export the data from the `sale_detail` table in a MaxCompute project to OSS as a JSON file, and name the file in the format `mc_<system-generated filename>_beijing.json`. The `sale_detail` data is as follows:

```
-- Partition fields: sale_date, region
+------------+-------------+-------------+------------+------------+
| shop_name  | customer_id | total_price | sale_date  | region     |
+------------+-------------+-------------+------------+------------+
| s1         | c1          | 100.1       | 2013       | china      |
| s2         | c2          | 100.2       | 2013       | china      |
| s3         | c3          | 100.3       | 2013       | china      |
| null       | c5          | NULL        | 2014       | shanghai   |
| s6         | c6          | 100.4       | 2014       | shanghai   |
| s7         | c7          | 100.5       | 2014       | shanghai   |
+------------+-------------+-------------+------------+------------+
```

**Procedure**:

1.  **In OSS**: Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Create an OSS bucket named `mc-unload/data_location/` in the `oss-cn-hangzhou` region. Then build the OSS path. For more information about creating buckets, see [Create a bucket in the console](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb). Build the OSS path using your bucket, region, and endpoint:
    
    ```
    oss://oss-cn-hangzhou-internal.aliyuncs.com/mc-unload/data_location
    ```
    
2.  **In MaxCompute**: Log on to the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db). Run the UNLOAD command.
    
    ```
    UNLOAD FROM (SELECT * FROM sale_detail) 
    INTO 
    LOCATION 'oss://oss-cn-beijing-internal.aliyuncs.com/***/json' 
    ROW FORMAT SERDE 'org.apache.hive.hcatalog.data.JsonSerDe'
    WITH SERDEPROPERTIES (
        'odps.external.data.output.prefix'='mc_', 
        'odps.external.data.output.suffix'='_beijing',
        'odps.external.data.output.explicit.extension'='json')
    STORED AS JSON;
    ```
    
3.  **Verify the result**: Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Check the target OSS path. The exported files are named `mc_<system-generated filename>_beijing.json`.
    

## Export to Hologres

### **Limits**

-   **Double signature not supported**: Do not use double-signature authorization when exporting to Hologres.
    
-   **Partitioned tables not supported**: You cannot export data to a Hologres partitioned table.
    
-   **Data type mapping**: Field types in the Hologres destination table must match those in the MaxCompute source table. For details, see [Data type mapping between MaxCompute and Hologres](/help/en/hologres/developer-reference/data-types#section-w14-cec-th7).
    

### **Syntax**

```
UNLOAD FROM {<select_statement>|<table_name> [PARTITION (<pt_spec>)]} 
INTO 
LOCATION <hologres_location>
STORED BY <StorageHandler>
[WITH SERDEPROPERTIES ('<property_name>'='<property_value>',...)];
```

### **Key configurations**

**Configuration item**

**Description**

hologres\_location

The JDBC connection string for the target Hologres table. Format: `'jdbc:postgresql://<endpoint>:<port>/<database>?ApplicationName=MaxCompute&[currentSchema=<schema>&][useSSL={true|false}&]table=<holo_table_name>/'`.

StorageHandler

Specify the built-in handler. Use `com.aliyun.odps.jdbc.JdbcStorageHandler` to connect using JDBC.

SERDEPROPERTIES

You must include these three properties:

-   `'odps.properties.rolearn'='<ram_arn>'`: The ARN of the RAM role used to access Hologres.
    
-   `'mcfed.mapreduce.jdbc.driver.class'='org.postgresql.Driver'`: The JDBC driver for Hologres.
    
-   `'odps.federation.jdbc.target.db.type'='holo'`: The target database type.
    

### **Example**

Export the MaxCompute table `data_test` to the Hologres table `mc_2_holo`. The `data_test` data is as follows:

```
+------------+------+
| id         | name |
+------------+------+
| 3          | rgege |
| 4          | Gegegegr |
+------------+------+
```

**Procedure**:

1.  **In Hologres**: Create the destination table `mc_2_holo`.
    
    ```
    CREATE TABLE mc_2_holo (id INT, name TEXT);
    ```
    
2.  **In MaxCompute**: Log on to the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db). Run the UNLOAD command.
    
    ```
    UNLOAD FROM (SELECT * FROM data_test) 
    INTO 
    LOCATION 'jdbc:postgresql://hgprecn-cn-5y**********-cn-hangzhou-internal.hologres.aliyuncs.com:80/test?ApplicationName=MaxCompute&currentSchema=public&useSSL=false&table=mc_2_holo/'  
    STORED BY 'com.aliyun.odps.jdbc.JdbcStorageHandler'
    WITH SERDEPROPERTIES ( 
      'odps.properties.rolearn'='acs:ram::13**************:role/aliyunodpsholorole',
      'mcfed.mapreduce.jdbc.driver.class'='org.postgresql.Driver', 
      'odps.federation.jdbc.target.db.type'='holo'
    );
    ```
    
3.  **Verify the result**: Query the exported data in Hologres.
    
    ```
    SELECT * FROM mc_2_holo;
    ```
    
    Results:
    
    ```
    id	name
    4	Gegegegr
    3	rgege
    ```
    

## Billing

### Command billing

-   **No charge for UNLOAD**: The UNLOAD command itself incurs no cost.
    
-   **Query clause billing**: The query clause in UNLOAD scans data and uses computing resources. It is billed as a standard SQL job.
    

### Storage billing

Storing structured data in OSS can reduce storage costs in some cases. Estimate costs before you begin:

-   **MaxCompute storage fees**: USD 0.018 per GB per month. For more details, see [Storage fees (pay-as-you-go)](/help/en/maxcompute/storage-pricing#concept-2245135). Data imported into MaxCompute is compressed by about 5×. Billing uses the compressed data size.
    
-   **OSS storage fees**: Standard OSS storage costs USD 0.018 per GB per month. Other storage classes include Infrequent Access, Archive, and Cold Archive. For details, see [Storage fees](/help/en/oss/storage-fees#concept-2558327).
    

### Cost optimization suggestions

If you export data solely to reduce storage costs, follow these steps:

1.  **Test compression ratios**: Estimate compression ratios based on your data characteristics.
    
2.  **Estimate UNLOAD costs**: Estimate UNLOAD costs based on your query statement.
    
3.  **Evaluate access patterns**: Review how you plan to access the exported data. Avoid extra costs from unnecessary data migration.
    

## References

To import CSV or other open-source format data from external storage into MaxCompute, see [LOAD](/help/en/maxcompute/user-guide/load-2).
