This topic describes how to create, read, and write ORC-formatted OSS external tables.

## **Usage notes**

-   OSS external tables do not support the cluster property.
    
-   A single file cannot exceed 2 GB. If a file is too large, split it.
    
-   MaxCompute and OSS must be in the same region.
    
-   [Supported data types](#13f155c3bfxrq).
    
-   [Supported compression formats](#26f6b80c0c1ov).
    
-   [Schema Evolution support](#5caa6a11bej0p).
    

## **Create external tables**

### **Syntax**

If the schema of an ORC file is inconsistent with the schema of the external table:

-   **Inconsistent number of columns:** If an ORC file has fewer columns than the external table, the system fills the missing columns with NULL values when reading the data. If the file has more columns, the system discards the extra columns.
    
-   **Inconsistent column types:** MaxCompute supports using the STRING type to read INT data from ORC files, but this is not recommended. When using the INT type to read STRING data, the system converts string values to NULL and accepts numeric values.
    

## Simplified Syntax

```
CREATE EXTERNAL TABLE [IF NOT EXISTS] <mc_oss_extable_name>
(
  <col_name> <data_type>,
  ...
)
[COMMENT <table_comment>]
[PARTITIONED BY (<col_name> <data_type>, ...)]
STORED AS orc
LOCATION '<oss_location>';
```

## Full Syntax

```
CREATE EXTERNAL TABLE [IF NOT EXISTS] <mc_oss_extable_name>
(
  <col_name> <data_type>,
  ...
)
[COMMENT <table_comment>]
[PARTITIONED BY (<col_name> <data_type>, ...)]
ROW FORMAT SERDE 'org.apache.hadoop.hive.ql.io.orc.OrcSerde'
WITH serdeproperties(
    'odps.properties.rolearn'='acs:ram::<uid>:role/aliyunodpsdefaultrole'
)
STORED AS orc 
LOCATION '<oss_location>' 
tblproperties (
    '<xxx>'='<yyy>'
);
```

### **Common parameters**

For more information about common parameters, see [Basic syntax parameters](/help/en/maxcompute/user-guide/access-external-tables/#255036335fwx6).

### **Unique Parameters**

## with serdeproperties Properties

**Property Name**

**Scenario**

**Description**

**Property Value**

**Default Value**

**mcfed.orc.schema.resolution**

Add this property if the schemas of data in the same OSS external table are inconsistent.

Sets the ORC file parsing method. `name` indicates parsing by column name.

name

Parses by column number by default.

Equivalent to: `'mcfed.orc.schema.resolution'='position'`.

## **tblproperties Properties**

**Property Name**

**Scenario**

**Description**

**Property Value**

**Default Value**

**mcfed.orc.compress**

Add this property to write ORC data to OSS in a compressed format.

**ORC compression property**. Specify the compression method for ORC data.

-   SNAPPY
    
-   ZLIB
    

None

**io.compression.codecs**

Add this property if OSS data files are in Raw-Snappy format.

If you set this parameter to True, MaxCompute can read compressed data normally. Otherwise, MaxCompute cannot read the data.

com.aliyun.odps.io.compress.SnappyRawCodec

None

**odps.external.data.output.prefix**

**(Compatible with odps.external.data.prefix)**

Add this property to add a custom prefix to output files.

-   Contains only numbers, letters, and underscores (a-z, A-Z, 0-9, \_).
    
-   Length is between 1 and 10.
    

A valid combination of characters, such as 'mc\_'.

None

**odps.external.data.enable.extension**

Add this property to display the extension of output files.

True displays the extension of output files. False hides it.

-   True
    
-   False
    

False

**odps.external.data.output.suffix**

Add this property to add a custom suffix to output files.

Contains only numbers, letters, and underscores (a-z, A-Z, 0-9, \_).

A valid combination of characters, such as '\_hangzhou'.

None

**odps.external.data.output.explicit.extension**

Add this property to add a custom extension to output files.

-   Contains only numbers, letters, and underscores (a-z, A-Z, 0-9, \_).
    
-   Length is between 1 and 10.
    
-   This parameter has a higher priority than `**odps.external.data.enable.extension**`.
    

A valid combination of characters, such as "jsonl".

None

**mcfed.orc.batch.size**

Controls the number of records processed each time, affecting memory usage and processing efficiency.

**ORC tuning property**. Defines the default ORC batch size in rows.

Non-negative integer

1000

## **Write data**

For more information about the MaxCompute write syntax, see [Write syntax](/help/en/maxcompute/user-guide/access-external-tables/#4dddc8884966p).

## **Query analysis**

-   For more information about the SELECT syntax, see [Query syntax](/help/en/maxcompute/user-guide/access-external-tables/#78323eab9ezdj).
    
-   For more information about query plan optimization, see [Query optimization](/help/en/maxcompute/user-guide/access-external-tables/#d33ef896aavca).
    
-   You can optimize queries on ORC external tables by enabling Predicate Pushdown (PPD). To do this, add the following parameters before your SQL statement:
    
    The PPD parameters must be used in Native mode. This means the Native switch must be set to true.
    
    ```
    -- Enable the ORC native reader.
    SET odps.ext.oss.orc.native-true;
    
    -- Enable ORC PPD.
    SET odps.storage.orc.use.predicate.pushdown=true; 
    ```
    

## **Example**

This example shows how to create an external ORC table that uses SNAPPY compression, and then read data from and write data to the table.

1.  Prerequisites
    
    1.  You have [created a MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project).
        
    2.  Prepare an OSS bucket and folder. For more information, see [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4#concept-ntj-wx1-5db) and [Manage folders](/help/en/oss/user-guide/manage-directories#concept-ohr-sqg-vdb).
        
        > MaxCompute is deployed only in some regions. To prevent data connectivity issues, use an OSS bucket that is in the same region as your MaxCompute project.
        
    3.  Authorization
        
        1.  You must have permissions to access OSS. You can use an Alibaba Cloud account, a RAM user, or a RAM role to access OSS external tables. For more information about authorization, see [STS authorization for OSS](/help/en/maxcompute/security-and-compliance/sts-authorization#section-8fd-bdg-bld).
            
        2.  You must have the \`CreateTable\` permission in the MaxCompute project. For more information about table operation permissions, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).
            
2.  Prepare a SNAPPY-formatted data file.
    
    Using the provided [sample data](/help/en/maxcompute/user-guide/access-external-tables/#54efd91d3ds1v), create the folder path `orc_snappy/dt=20250526` in the `oss-mc-test` bucket. Upload the [SNAPPY file](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250613/nwypka/20250613080155495g6jtxahsztv3_M1_1_0_0-0_TableSink1) to the `dt=20250526` partition folder.
    
3.  Create an external ORC table with SNAPPY compression.
    
    ```
    CREATE EXTERNAL TABLE orc_data_type_snappy
    (
        vehicleId INT,
        recordId INT,
        patientId INT,
        calls INT,
        locationLatitute DOUBLE,
        locationLongitude DOUBLE,
        recordTime STRING,
        direction STRING
    )
    PARTITIONED BY (dt STRING )
    ROW FORMAT SERDE 'org.apache.hadoop.hive.ql.io.orc.OrcSerde'
    WITH serdeproperties (
     'odps.properties.rolearn'='acs:ram::<uid>:role/aliyunodpsdefaultrole'
    ) 
    STORED AS ORC  
    LOCATION 'oss://oss-cn-hangzhou-internal.aliyuncs.com/oss-mc-test/orc_snappy/'
    tblproperties (
        'mcfed.orc.compress'='SNAPPY');
    ```
    
4.  If your OSS external table is partitioned, run the following command to add existing partitions. For more information, see [Syntax for adding partitions to an OSS external table](/help/en/maxcompute/user-guide/access-external-tables/#c8d97452a4uex).
    
    ```
    -- Add partitions to the external table
    MSCK REPAIR TABLE orc_data_type_snappy ADD PARTITIONS;
    ```
    
5.  Read data from the ORC external table.
    
    ```
    SELECT * FROM orc_data_type_snappy WHERE dt=20250526 LIMIT 10;
    ```
    
    The query returns the following result:
    
    ```
    +------------+------------+------------+------------+------------------+-------------------+----------------+------------+------------+
    | vehicleid  | recordid   | patientid  | calls      | locationlatitute | locationlongitude | recordtime     | direction  | dt         |
    +------------+------------+------------+------------+------------------+-------------------+----------------+------------+------------+
    | 1          | 12         | 76         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:10 | SW         | 20250526   |
    | 1          | 1          | 51         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:00 | S          | 20250526   |
    | 1          | 2          | 13         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:01 | NE         | 20250526   |
    | 1          | 3          | 48         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:02 | NE         | 20250526   |
    | 1          | 4          | 30         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:03 | W          | 20250526   |
    | 1          | 5          | 47         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:04 | S          | 20250526   |
    | 1          | 6          | 9          | 1          | 46.81006         | -92.08174         | 9/14/2014 0:05 | S          | 20250526   |
    | 1          | 7          | 53         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:06 | N          | 20250526   |
    | 1          | 8          | 63         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:07 | SW         | 20250526   |
    | 1          | 9          | 4          | 1          | 46.81006         | -92.08174         | 9/14/2014 0:08 | NE         | 20250526   |
    | 1          | 10         | 31         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:09 | N          | 20250526   |
    +------------+------------+------------+------------+------------------+-------------------+----------------+------------+------------+
    ```
    
6.  Write data to the ORC external table and query the data.
    
    ```
    INSERT INTO orc_data_type_snappy PARTITION (dt ='20250526') 
      VALUES (1,16,76,1,46.81006,-92.08174,'9/14/2014 0:10','SW');
    
    -- Query the newly inserted data
    SELECT * FROM orc_data_type_snappy WHERE dt = '20250526' AND recordid=16;
    ```
    
    The query returns the following result:
    
    ```
    +------------+------------+------------+------------+------------------+-------------------+----------------+------------+------------+
    | vehicleid  | recordid   | patientid  | calls      | locationlatitute | locationlongitude | recordtime     | direction  | dt         |
    +------------+------------+------------+------------+------------------+-------------------+----------------+------------+------------+
    | 1          | 16         | 76         | 1          | 46.81006         | -92.08174         | 9/14/2014 0:10 | SW         | 20250526   |
    +------------+------------+------------+------------+------------------+-------------------+----------------+------------+------------+
    ```
    

## **Supported data types**

For more information about MaxCompute data types, see [Data type version 1.0](/help/en/maxcompute/user-guide/maxcompute-v1-0-data-type-edition) and [Data type version 2.0](/help/en/maxcompute/user-guide/maxcompute-v2-0-data-type-edition).

-   JNI mode (`set odps.ext.oss.orc.native=false;`): This mode does not use the native ORC reader when reading tables. It supports both read and write operations.
    
-   Native mode (`set odps.ext.oss.orc.native=true;`): This mode uses the native ORC reader when reading tables. It supports only read operations.
    

**Mode**

**Java mode (read and write)**

**Native mode (read-only)**

TINYINT

Supported

Supported

SMALLINT

Supported

Supported

INT

Supported

Supported

BIGINT

Supported

Supported

BINARY

Supported

Supported

FLOAT

Supported

Supported

DOUBLE

Supported

Supported

DECIMAL(precision,scale)

Supported

Supported

VARCHAR(n)

Supported

Supported

CHAR(n)

Supported

Supported

STRING

Supported

Supported

DATE

Supported

Supported

DATETIME

Not supported

Supported

TIMESTAMP

Not supported

Not supported

TIMESTAMP\_NTZ

Supported

Not supported

BOOLEAN

Supported

Supported

ARRAY

Supported

Supported

MAP

Supported

Supported

STRUCT

Supported

Supported

JSON

Not supported

Not supported

## **Supported compression formats**

-   To read or write compressed OSS files, you must add the `with serdeproperties` configuration to the table creation statement. For more information, see [with serdeproperties property parameters](#7da2ffc8f7m2n).
    
-   MaxCompute supports reading and writing ORC files that are compressed with SNAPPY or ZLIB.
    

## **Support schema evolution**

ORC external tables support two methods for mapping the table schema to the columns in the data file: position-based mapping and name-based mapping.

-   **Position-based mapping**: To use this method, set the `'mcfed.orc.schema.resolution'='position'` parameter or omit it to use the default setting. The system maps columns based on their position. Therefore, the column order in the table must exactly match the field order in the file.
    
-   **Name-based mapping**: To use this method, set the `'mcfed.orc.schema.resolution'='name'` parameter when you create the foreign table. The system then maps columns by name instead of by position.
    

> In the following table, **Data compatibility issues** describes whether a external table can correctly read data after a **Schema Evolution** operation. This includes reading new data that conforms to the modified schema and historical data that uses the old schema.

**Operation type**

**Mapping method**

**Supported**

**Description**

**Data compatibility issues**

Add column

Position-based mapping

Supported

-   New columns cannot be added in a specified order; they are added as the last column by default.
    
-   Adding a regular column with a default value only takes effect for data written from MaxCompute.
    

-   Data that conforms to the modified schema structure can be read correctly.
    
-   Historical data with the old schema, where no column modification operation was performed, is read by the table using the new schema.
    
    For example, if a column is added to a table, but the corresponding column is not added to historical data, the historical data for that column will be filled with NULL when the table is read.
    

Name-based mapping

Supported

Delete column

Position-based mapping

Not supported

Not recommended. ORC external tables **map column values by position**. The column order of the table must match the field order in the file. After a column deletion operation, if the file and table fields do not match, an error occurs when reading the table.

-   Data that conforms to the modified schema structure can be read correctly.
    
-   Historical data with the old schema, where no column modification operation was performed, is read by the table using the new schema.
    
    For example, if a column is deleted from a table, but the corresponding column is not deleted from historical data, an error occurs when reading the table.
    

Name-based mapping

Supported

With name-based mapping, the system automatically matches based on column names, no longer relying on order.

Compatible

Modify column order

Position-based mapping

Not supported

Not recommended. ORC external tables **map column values by position**. The column order of the table must match the field order in the file. After a column deletion operation, if the file and table fields do not match, an error occurs when reading the table.

-   Data that conforms to the modified schema structure can be read correctly.
    
-   Historical data with the old schema, where no column modification operation was performed, is read by the table using the new schema.
    
    For example, if the column order of a table is modified, but the column order of historical data is not modified, the schema and data will not correspond.
    

Name-based mapping

Supported

With name-based mapping, the system automatically matches based on column names, no longer relying on order.

Compatible

Change column data type

Position-based mapping

Supported

For more information about the conversion table for data types, see [Change column data type](/help/en/maxcompute/user-guide/column-operation#section-qij-e5j-ge9).

Compatible

Name-based mapping

Supported

Modify column name

Position-based mapping

Supported

Compatible

Name-based mapping

Not supported

Not recommended. With name-based mapping, the system automatically matches based on column names. After modifying a column name, the original column name that could be matched might not be found in the file.

-   Data that conforms to the modified schema structure can be read correctly.
    
-   If you do not perform a column modification operation on the existing data, the table is read using the new schema.
    
    For example, if a column name is modified in a table, but the corresponding column name is not modified in the ORC file schema, that column will be empty when the table is read.
    

Modify column comment

Position-based mapping

Supported

The comment content must be a valid string with a length not exceeding 1024 bytes; otherwise, an error is reported.

Compatible

Name-based mapping

Supported

Modify column's nullability property

Position-based mapping

Not supported

This operation is not supported. It is Nullable by default.

Not applicable

Name-based mapping

Not supported
