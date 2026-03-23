MaxCompute supports external projects. To create an external project, map a Paimon catalog directory in Object Storage Service (OSS). The external project’s file system hierarchy mirrors the standard Paimon file system. Access permissions depend on the authorization granted to your RAM role for the OSS bucket. You can read and write metadata and data in the Paimon lake format. This method maps the entire catalog, so you must ensure that the file system hierarchy complies with Paimon requirements. You manage permissions independently and control where lake format files are stored. This approach is suitable for stream-batch integration scenarios where you require fine-grained permission control and perform your own maintenance.

## Usage notes

-   Only Paimon format tables are supported.
    
-   Writing to Dynamic Bucket tables is not supported.
    
-   Writing to Cross Partition tables is not supported.
    
-   [Data type mapping](#3b0942360doyh).
    

## **Procedure**

### **Step 1: Grant permissions to a RAM user**

If you are a Resource Access Management (RAM) user, attach the following access policy. For more information about how to add permissions, see [Manage RAM user permissions](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#section-sjg-7hb-xph).

-   AliyunMaxComputeFullAccess: Grants permissions to create external data sources and external projects.
    

### **Step 2: Create a Filesystem Catalog external data source**

1.  Activate OSS and create a bucket to store Paimon data. For more information, see [Quick Start](/help/en/oss/user-guide/console-quick-start).
    
2.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
3.  In the navigation pane on the left, choose **Manage Configurations** > **Foreign Server**.
    
4.  On the **Foreign Server** page, click **Create Foreign Server**.
    
5.  In the **Add Foreign Server** dialog box, configure the parameters. The following tables describe the parameters.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Foreign Server Type**
    
    required
    
    Select `Filesystem Catalog`.
    
    **Foreign Server Name**
    
    Required
    
    A custom name. The naming convention is as follows:
    
    -   Must start with a letter and contain only lowercase letters, underscores (\_), and digits.
        
    -   Cannot exceed 128 characters.
        
    
    Example: `external_fs`.
    
    **Foreign Server Description**
    
    Optional
    
    Enter the information as required.
    
    **Region**
    
    Required
    
    The current region is used by default.
    
    **Authentication And Authorization**
    
    Required
    
    Alibaba Cloud RAM role is used by default.
    
    **RoleARN**
    
    Required
    
    The Alibaba Cloud Resource Name (ARN) of a RAM role. This role must include permissions to access the OSS service.
    
    1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/).
        
    2.  In the navigation pane on the left, choose **Identities** > **Roles**.
        
    3.  In the **Basic Information** section, you can find the **ARN**.
        
    
    Example: `acs:ram::124****:role/aliyunodpsdefaultrole`.
    
    **Storage Type**
    
    Required
    
    -   OSS
        
    -   OSS-HDFS
        
    
    **Endpoint**
    
    Required
    
    Automatically generated. For the China (Hangzhou) region, the Endpoint is `oss-cn-hangzhou-internal.aliyuncs.com`.
    
    **Foreign Server Supplemental Properties**
    
    Optional
    
    Specifies additional properties for the external data source. After you specify these properties, tasks that use this data source can access the source system based on the defined behavior.
    
    **Note**
    
    For information about supported parameters, see the official documentation. Specific parameters will be added gradually as the product evolves.
    
6.  Click **OK** to create the external data source.
    
7.  On the **Foreign Server** page, find the target data source and click **Details** in the **Actions** column.
    

### Step 3: Create an external project

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Projects**.
    
3.  On the **External Project** tab, click **Create Project**.
    
4.  In the **Create Project** dialog box, configure the project information as prompted and click **OK**.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Project Type**
    
    Required
    
    External project is used by default.
    
    **Region**
    
    Required
    
    The current region is used by default and cannot be changed.
    
    **Project Name (Globally Unique)**
    
    Required
    
    Must start with a letter and contain only letters, digits, and underscores (\_). The length must be 3 to 28 characters.
    
    **MaxCompute Foreign Server Type**
    
    Optional
    
    Select Filesystem Catalog.
    
    **MaxCompute Foreign Server**
    
    Optional
    
    -   **Use Existing**: Lists the created external data sources.
        
    -   **Create Foreign Server**: Creates and uses a new external data source.
        
    
    **MaxCompute Foreign Server Name**
    
    Required
    
    -   Select existing: Select a created external data source from the drop-down list.
        
    -   Create external data source: The name of the new external data source is used.
        
    
    **Bucket Catalog**
    
    Required
    
    Select the complete path from the OSS bucket to the file system directory at the catalog level. In this example, the path is `oss://paimon-fs/paimon-test/`.
    
    **Table Format**
    
    (Required)
    
    Paimon is used by default.
    
    **Billing Method**
    
    Required
    
    **Subscription** or **Pay-as-you-go**.
    
    **Default Quota**
    
    Required
    
    Select an existing quota.
    
    **Description**
    
    Optional
    
    A custom description of the project.
    

### **Step 4: Use SQL to access the data source system**

**Important**

Because an external project maps to a data source, deleting the external project does not delete any data.

However, unlike normal foreign tables, running a DROP TABLE or DROP SCHEMA operation in an external project sends the request to the peer service. This permanently deletes the corresponding table or data in the database. Use DROP operations with caution.

1.  [Select a connection tool](/help/en/maxcompute/user-guide/prepare-an-environment-and-install-required-development-tools) to log on to an external project.
    
2.  List the schemas in the external project. By default, only DB paths that store Paimon tables are listed.
    
    ```
    -- Enable the schema syntax at the session level.
    SET odps.namespace.schema=true;
    SHOW schemas;
    
    -- The following result is returned.
    ID = 20250922********wbh2u7
    default
    
    
    OK
    ```
    
3.  List the tables in a schema within the external project.
    
    ```
    -- <schema_name> is the name of the schema displayed in the external project.
    USE SCHEMA <schema_name>; 
    SHOW tables;
    ```
    
4.  Create a schema in the external project.
    
    ```
    CREATE schema <schema_name>;
    
    -- Example:
    CREATE schema schema_test;
    ```
    
5.  Use the new schema.
    
    ```
    use schema <schema_name>;
    
    -- Example:
    use schema schema_test;
    ```
    
6.  Create a table in the schema and insert data.
    
    -   Syntax:
        
        ```
        -- Create a table.
        CREATE TABLE [IF NOT EXISTS] <table_name> 
        (
          <col_name> <data_type>,
          ...
        )
        [COMMENT <table_comment>]
        [PARTITIONED BY (<col_name> <data_type>, ...)] 
        ;
        
        -- Insert data.
        INSERT {INTO|OVERWRITE} TABLE <table_name> [PARTITION (<pt_spec>)] [(<col_name> [,<col_name> ...)]]
        <select_statement>
        FROM <from_statement>
        ```
        
    -   Example:
        
        ```
        CREATE TABLE new_table(id INT,name STRING);
        
        INSERT INTO new_table VALUES (101,'Zhang San'),(102,'Li Si');
        
        -- Query the new_table table.
        SELECT * FROM new_table;
        
        -- The following result is returned.
        +------------+------------+
        | id         | name       | 
        +------------+------------+
        | 101        | Zhang San  | 
        | 102        | Li Si      | 
        +------------+------------+
        ```
        

## **Data type mapping**

For more information about MaxCompute data types, see [Data types (Version 1.0)](/help/en/maxcompute/user-guide/maxcompute-v1-0-data-type-edition) and [Data types (Version 2.0)](/help/en/maxcompute/user-guide/maxcompute-v2-0-data-type-edition).

**Open source Paimon data type**

**MaxCompute V2.0 data type**

**Read/write support**

**Description**

TINYINT

TINYINT

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

8-bit signed integer.

SMALLINT

SMALLINT

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

16-bit signed integer.

INT

INT

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

32-bit signed integer.

BIGINT

BIGINT

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

64-bit signed integer.

BINARY(MAX\_LENGTH)

BINARY

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Binary data type. The maximum length is 8 MB.

FLOAT

FLOAT

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

32-bit binary floating-point number.

DOUBLE

DOUBLE

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

64-bit binary floating-point number.

DECIMAL(precision,scale)

DECIMAL(precision,scale)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

High-precision decimal number. The default is `decimal(38,18)`. You can customize the precision and scale values.

-   **precision**: indicates the maximum number of digits that can be represented. The value must be in the range of `1 <= precision <= 38`.
    
-   **scale**: indicates the number of digits in the fractional part. The value must be in the range of `0 <= scale <= 18`.
    

VARCHAR(n)

VARCHAR(n)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Variable-length character type. n indicates the length, which ranges from 1 to 65,535.

CHAR(n)

CHAR(n)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Fixed-length character type. n indicates the length, which ranges from 1 to 255.

VARCHAR(MAX\_LENGTH)

STRING

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

String type. The maximum length is 8 MB.

DATE

DATE

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Date type. The format is `yyyy-mm-dd`.

TIME, TIME(p)

Not supported

![未开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278576.png)

The Paimon TIME data type is a time type without a time zone. It consists of hours, minutes, and seconds, with precision up to nanoseconds.

TIME(p) indicates the precision of the fractional part, which can be an integer from 0 to 9. The default value is 0.

No corresponding type is available in MaxCompute.

TIMESTAMP, TIMESTAMP(p)

TIMESTAMP\_NTZ

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Timestamp type without a time zone, with precision up to nanoseconds.

To read the table, enable the native switch: `SET odps.sql.common.table.jni.disable.native=true;`

TIMESTAMP WITH LOCAL TIME\_ZONE(9)

TIMESTAMP

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

-   Timestamp type with precision up to nanoseconds. The format is `yyyy-mm-dd hh:mm:ss.xxxxxxxxx`.
    
-   For Paimon source tables with low-precision TIMESTAMP types, the values are truncated during data writes. Values with a precision from 0 to 3 are truncated to 3 decimal places. Values with a precision from 4 to 6 are truncated to 6 decimal places. Values with a precision from 7 to 9 are truncated to 9 decimal places.
    

TIMESTAMP WITH LOCAL TIME\_ZONE(9)

DATETIME

![未开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278576.png)

Timestamp type with precision up to nanoseconds.

The format is `yyyy-mm-dd hh:mm:ss.xxxxxxxxx`.

BOOLEAN

BOOLEAN

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

BOOLEAN type.

ARRAY

ARRAY

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Complex type.

MAP

MAP

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Complex type.

ROW

STRUCT

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Complex type.

MULTISET<t>

Not supported

![未开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278576.png)

No corresponding type is available in MaxCompute.

VARBINARY, VARBINARY(n), BYTES

BINARY

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Variable-length binary string data type.
