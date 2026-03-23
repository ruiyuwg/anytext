Hologres supports creating foreign tables to accelerate queries on MaxCompute data. This method lets you directly access and analyze data stored in MaxCompute from your Hologres environment, improving query efficiency and simplifying the data processing flow.

## **Permissions**

To accelerate queries on MaxCompute data, you must grant users the permissions to access MaxCompute projects and tables. For more information, see [Manage user permissions using commands](/help/en/maxcompute/user-guide/manage-user-permissions-by-using-commands#concept-2159763).

## **Data type mapping**

Data types in MaxCompute and Hologres have a one-to-one mapping. When you create a table, see [Data type mapping between MaxCompute and Hologres](/help/en/hologres/developer-reference/data-types#section-w14-cec-th7).

## **Solutions and selection**

**Solution**

**Scenarios**

**Technical features**

[Accelerate queries on MaxCompute data using CREATE FOREIGN TABLE](#bc4ebf4830i3p)

Accelerating a small number of tables, querying specific columns, and using tables with stable schemas.

Manually create tables and flexibly define columns and comments.

[Accelerate queries on MaxCompute data using IMPORT FOREIGN SCHEMA](#93b592433fnjg)

Batch-map tables at the schema or DB level.

Automatically synchronizes table schemas for an entire schema.

[Accelerate queries on MaxCompute data using Auto Load](#ce1abfe942n6f)

Large number of tables and frequent schema evolution (adding, deleting, or modifying columns).

Automatically detects source table changes. Supports on-demand or full load.

### **Accelerate queries using** `**CREATE FOREIGN TABLE**`

You can use `CREATE FOREIGN TABLE` to flexibly create MaxCompute foreign tables. You can customize table names, select columns, and define comments. This section shows how to use `CREATE FOREIGN TABLE` to query data in non-partitioned and partitioned MaxCompute tables from Hologres.

> You can also use HoloWeb to visually create tables. For more information, see [Create a MaxCompute foreign table using HoloWeb](/help/en/hologres/user-guide/foreign-tables).

#### **Example 1: Query data in a non-partitioned MaxCompute table**

1.  In MaxCompute, create a non-partitioned table and import data into it. This example uses the `customer` table from the MaxCompute public dataset `BIGDATA_PUBLIC_DATASET.tpcds_10t` as sample data.
    
    **Click to view the DDL statement for this table.**
    
    ```
    -- DDL for the table in the MaxCompute public dataset
    CREATE TABLE IF NOT EXISTS public_data.customer(
      c_customer_sk BIGINT,
      c_customer_id STRING,
      c_current_cdemo_sk BIGINT,
      c_current_hdemo_sk BIGINT,
      c_current_addr_sk BIGINT,
      c_first_shipto_date_sk BIGINT,
      c_first_sales_date_sk BIGINT,
      c_salutation STRING,
      c_first_name STRING,
      c_last_name STRING,
      c_preferred_cust_flag STRING,
      c_birth_day BIGINT,
      c_birth_month BIGINT,
      c_birth_year BIGINT,
      c_birth_country STRING,
      c_login STRING,
      c_email_address STRING,
      c_last_review_date_sk STRING);
    ```
    
    Run the following command to view the sample table data.
    
    ```
    -- Query the table in MaxCompute to check for data
    SET odps.namespace.schema=true;
    SELECT * FROM BIGDATA_PUBLIC_DATASET.tpcds_10t.customer;
    ```
    
    The following sample data is returned:![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7051195171/p788897.png)
    
2.  In Hologres, create a foreign table to map to the MaxCompute data. The following is a sample statement.
    
    ```
    SET hg_enable_convert_type_for_foreign_table = true;
    CREATE FOREIGN TABLE customer (
        "c_customer_sk" int8,
        "c_customer_id" text,
        "c_current_cdemo_sk" int8,
        "c_current_hdemo_sk" int8,
        "c_current_addr_sk" int8,
        "c_first_shipto_date_sk" int8,
        "c_first_sales_date_sk" int8,
        "c_salutation" text,
        "c_first_name" text,
        "c_last_name" text,
        "c_preferred_cust_flag" text,
        "c_birth_day" int8,
        "c_birth_month" int8,
        "c_birth_year" int8,
        "c_birth_country" text,
        "c_login" text,
        "c_email_address" text,
        "c_last_review_date_sk" text)
    SERVER odps_server
    OPTIONS (project_name 'BIGDATA_PUBLIC_DATASET.tpcds_10t', table_name 'customer');
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **SERVER**
    
    Foreign data server.
    
    Directly call the **odps\_server** foreign table server, which is pre-created in Hologres. For more information about the underlying principles, see [Postgres FDW](https://www.postgresql.org/docs/11/postgres-fdw.html?spm=a2c4g.11186623.2.11.7e476020Gyif3k).
    
    **project\_name**
    
    -   If your MaxCompute project uses a Layer 3 model, set **project\_name** to the MaxCompute project name and schema name. Use the format `odps_project_name.odps_schema_name`.
        
    
    -   If your MaxCompute project uses a two-layer model, set **project\_name** to the MaxCompute project name.
        
    
    For more information about the three-layer model, see [Schema operations](/help/en/maxcompute/user-guide/schema-related-operations).
    
    **table\_name**
    
    The name of the MaxCompute table to query.
    
3.  After the foreign table is created, you can query it directly in Hologres to retrieve the MaxCompute data. The following is a sample statement.
    
    ```
    SELECT * FROM customer LIMIT 10;
    ```
    
    **Important**
    
    If a query error occurs, ensure that the account used for execution has the **Select** permission and other required permissions on the MaxCompute table. For more information, see [Permissions](#bc4c86e5c79e6).
    

#### **Example 2: Query data in a partitioned MaxCompute table**

1.  In MaxCompute, create a partitioned table and import data into it. This example uses the `ods_enterprise_share_trade_h` table from the MaxCompute public dataset `BIGDATA_PUBLIC_DATASET.finance` as sample data.
    
    **Click to view the DDL statement for this table.**
    
    ```
    -- DDL for the table in the public dataset
    CREATE TABLE IF NOT EXISTS public_data.ods_enterprise_share_trade_h(
      code STRING COMMENT 'Code',
      name STRING COMMENT 'Name',
      industry STRING COMMENT 'Industry',
      area STRING COMMENT 'Area',
      pe STRING COMMENT 'PE ratio',
      outstanding STRING COMMENT 'Outstanding shares',
      totals STRING COMMENT 'Total shares (in 10,000s)',
      totalassets STRING COMMENT 'Total assets (in 10,000s)',
      liquidassets STRING COMMENT 'Liquid assets',
      fixedassets STRING COMMENT 'Fixed assets',
      reserved STRING COMMENT 'Reserve fund',
      reservedpershare STRING COMMENT 'Reserve per share',
      eps STRING COMMENT 'Earnings per share',
      bvps STRING COMMENT 'Book value per share',
      pb STRING COMMENT 'PB ratio',
      timetomarket STRING COMMENT 'Time to market',
      undp STRING COMMENT 'Undistributed profit',
      perundp STRING COMMENT 'Undistributed per share',
      rev STRING COMMENT 'Revenue YoY (%)',
      profit STRING COMMENT 'Profit YoY (%)',
      gpr STRING COMMENT 'Gross profit margin (%)',
      npr STRING COMMENT 'Net profit margin (%)',
      holders_num STRING COMMENT 'Number of shareholders') 
      PARTITIONED BY (ds STRING) STORED AS ALIORC TBLPROPERTIES ('comment'='Data import date');
    ```
    
    Run the following command to view the sample table data.
    
    ```
    -- Query data in a specific partition in MaxCompute
    SET odps.namespace.schema=true;
    SELECT * FROM BIGDATA_PUBLIC_DATASET.finance.ods_enterprise_share_trade_h WHERE ds = '20170113';
    ```
    
    The following sample data is returned:![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7051195171/p788913.png)
    
2.  In Hologres, create a foreign table to map to the MaxCompute data. The following is a sample statement.
    
    ```
    CREATE FOREIGN TABLE public.foreign_ods_enterprise_share_trade_h (
        "code" text,
        "name" text,
        "industry" text,
        "area" text,
        "pe" text,
        "outstanding" text,
        "totals" text,
        "totalassets" text,
        "liquidassets" text,
        "fixedassets" text,
        "reserved" text,
        "reservedpershare" text,
        "eps" text,
        "bvps" text,
        "pb" text,
        "timetomarket" text,
        "undp" text,
        "perundp" text,
        "rev" text,
        "profit" text,
        "gpr" text,
        "npr" text,
        "holders_num" text,
        "ds" text
    )
    SERVER odps_server
    OPTIONS (project_name 'BIGDATA_PUBLIC_DATASET#finance', table_name 'ods_enterprise_share_trade_h');
    comment on foreign table public.foreign_ods_enterprise_share_trade_h is 'Historical stock trading information';
    comment on column public.foreign_ods_enterprise_share_trade_h."code" is 'Code';
    comment on column public.foreign_ods_enterprise_share_trade_h."name" is 'Name';
    comment on column public.foreign_ods_enterprise_share_trade_h."industry" is 'Industry';
    comment on column public.foreign_ods_enterprise_share_trade_h."area" is 'Area';
    comment on column public.foreign_ods_enterprise_share_trade_h."pe" is 'PE ratio';
    comment on column public.foreign_ods_enterprise_share_trade_h."outstanding" is 'Outstanding shares';
    comment on column public.foreign_ods_enterprise_share_trade_h."totals" is 'Total shares (in 10,000s)';
    comment on column public.foreign_ods_enterprise_share_trade_h."totalassets" is 'Total assets (in 10,000s)';
    comment on column public.foreign_ods_enterprise_share_trade_h."liquidassets" is 'Liquid assets';
    comment on column public.foreign_ods_enterprise_share_trade_h."fixedassets" is 'Fixed assets';
    comment on column public.foreign_ods_enterprise_share_trade_h."reserved" is 'Reserve fund';
    comment on column public.foreign_ods_enterprise_share_trade_h."reservedpershare" is 'Reserve per share';
    comment on column public.foreign_ods_enterprise_share_trade_h."eps" is 'Earnings per share';
    comment on column public.foreign_ods_enterprise_share_trade_h."bvps" is 'Book value per share';
    comment on column public.foreign_ods_enterprise_share_trade_h."pb" is 'PB ratio';
    comment on column public.foreign_ods_enterprise_share_trade_h."timetomarket" is 'Time to market';
    comment on column public.foreign_ods_enterprise_share_trade_h."undp" is 'Undistributed profit';
    comment on column public.foreign_ods_enterprise_share_trade_h."perundp" is 'Undistributed per share';
    comment on column public.foreign_ods_enterprise_share_trade_h."rev" is 'Revenue YoY (%)';
    comment on column public.foreign_ods_enterprise_share_trade_h."profit" is 'Profit YoY (%)';
    comment on column public.foreign_ods_enterprise_share_trade_h."gpr" is 'Gross profit margin (%)';
    comment on column public.foreign_ods_enterprise_share_trade_h."npr" is 'Net profit margin (%)';
    comment on column public.foreign_ods_enterprise_share_trade_h."holders_num" is 'Number of shareholders';
    ```
    
3.  Query the data in the partitioned MaxCompute table from Hologres.
    
    -   To query the first 10 rows of data, use the following SQL statement:
        
        ```
        SELECT * FROM foreign_ods_enterprise_share_trade_h limit 10;
        ```
        
    -   To query data in a specific partition, use an SQL statement such as the following:
        
        ```
        SELECT * FROM foreign_ods_enterprise_share_trade_h 
        WHERE ds = '20170113';
        ```
        
    
    **Important**
    
    If a query error occurs, ensure that the account used for execution has the **Select** permission and other required permissions on the MaxCompute table. For more information, see [Permissions](#bc4c86e5c79e6).
    

### **Accelerate queries using** `**IMPORT FOREIGN SCHEMA**`

To create MaxCompute foreign tables in batches, you can use the `IMPORT FOREIGN SCHEMA` method. For more information, see [IMPORT FOREIGN SCHEMA](/help/en/hologres/developer-reference/import-foreign-schema).

### **Accelerate queries using** `**Auto Load**`

To accelerate many foreign tables in an instance or if the schemas of source MaxCompute tables change frequently, you can use the Auto Load feature. This feature automatically creates foreign tables as needed for queried MaxCompute tables or for all MaxCompute tables. Schema changes on MaxCompute tables include operations such as deleting columns, changing the column order, or changing column data types. You do not need to manually change the schemas of foreign tables, which improves query efficiency. For more information, see [Auto Load for foreign tables](/help/en/hologres/user-guide/automatically-create-foreign-tables-for-maxcompute-tables).
