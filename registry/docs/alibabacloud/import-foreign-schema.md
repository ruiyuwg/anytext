The IMPORT FOREIGN SCHEMA statement creates foreign tables in batches. This topic describes the usage and limits of the statement.

## Feature details

IMPORT FOREIGN SCHEMA is a Hologres feature that creates foreign tables in batches. It automatically maps table schemas from a remote data source to Hologres foreign tables, eliminating the need to create each table manually. Currently, this feature supports the following two types of data sources:

-   MaxCompute tables: Batch import foreign tables from MaxCompute two-layer or three-layer models.
    
-   Paimon tables in DLF: Batch create Hologres foreign tables from Paimon tables in Data Lake Formation (DLF).
    

## Limits

-   When you use the `IMPORT FOREIGN SCHEMA` statement, add the `LIMIT TO` clause to specify the tables to import. Enclose the table names in parentheses. If you omit this clause, the system creates foreign tables in Hologres for all tables in the target MaxCompute project.
    
-   Only Hologres V1.1.26 and later support adding prefixes and suffixes to the names of foreign tables created using `IMPORT FOREIGN SCHEMA`. If your instance is earlier than V1.1.26, you can see [Common errors when preparing for an upgrade](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or join the Hologres DingTalk group to provide feedback. For more information, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).
    
-   Hologres V1.3 and later versions support the MaxCompute three-layer model, which adds a Schema layer between Project and Table. For more information, see [Schema operations](/help/en/maxcompute/user-guide/schema-related-operations#task-2224812). To create foreign tables in Hologres from a MaxCompute project that uses the three-layer model, you must use Hologres V1.3 or a later version. If you are using an earlier version of Hologres, see [Common errors when preparing for an upgrade](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or join the Hologres DingTalk group to provide feedback. For more information, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).
    

## Command format

The command to create foreign tables in batches in Hologres uses the following format.

```
IMPORT FOREIGN SCHEMA remote_schema
    [ { LIMIT TO | EXCEPT } ( table_name [, ...] ) ]
    FROM SERVER odps_server
    INTO local_schema 
    [ OPTIONS ( option 'value' [, ... ] ) ]
```

## Parameter description

The following table describes the parameters.

**Parameter**

**Description**

remote\_schema

-   MaxCompute
    
    -   Two-layer model: The name of the project where the MaxCompute tables to import are located.
        
    -   Three-layer model: The name of the MaxCompute project and schema. The format is `odps_project_name#odps_schema_name`. If your MaxCompute project uses the three-layer model but you use the two-layer model syntax, an error occurs. The following is an example of the error message.
        
        ```
        failed to import foreign schema:Table not found - table_xxx
        ```
        
-   DLF: The name of the metadatabase created in DLF.
    

table\_name

-   MaxCompute: The names of the MaxCompute tables to import.
    
-   DLF: The names of the DLF tables to import.
    

server\_name

-   MaxCompute: The name of the foreign server where the MaxCompute tables are located. The default value is **odps\_server**. You can directly call the foreign table server named **odps\_server** that is pre-created in Hologres. For more information about the principles, see [Postgres FDW](https://www.postgresql.org/docs/11/postgres-fdw.html?spm=a2c4g.11186623.2.11.7e476020Gyif3k).
    
-   DLF: The name of the foreign server where the DLF tables are located. For more information, see [Access a Paimon catalog based on DLF](/help/en/hologres/user-guide/access-paimon-catalog-based-on-dlf-2-0).
    

local\_schema

The name of the schema where the Hologres foreign tables are located, such as public.

options

Hologres supports the following four options:

-   if\_table\_exist: Specifies the action to take if a table with the same name already exists during the import. Valid values:
    
    -   error: The default value. If a foreign table with the same name already exists, the table is not created.
        
    -   ignore: Skips the import of a table if a foreign table with the same name already exists. The import process continues for other tables.
        
    -   update: Updates the table by reimporting it.
        
-   if\_unsupported\_type: Specifies the action to take if an imported foreign table contains data types that Hologres does not support. Valid values:
    
    -   error: Reports an error and the import fails. A message indicates which tables contain unsupported data types.
        
    -   skip: Default value. Skips the import of tables that contain unsupported data types. A message indicates which tables were skipped.
        
-   prefix: The prefix for the names of the Hologres foreign tables generated during import. This option is added in Hologres V1.1.26.
    
-   suffix: The suffix for the names of the Hologres foreign tables generated during import. This option is added in Hologres V1.1.26.
    

**Note**

Hologres supports creating only MaxCompute foreign tables. The name of a new foreign table must match the name of the corresponding MaxCompute table.

## Usage examples

-   MaxCompute two-layer model
    
    The following examples show how to create foreign tables in batches in Hologres from tables in the MaxCompute public dataset **public\_data**.
    
    -   Example 1: Create a new foreign table for the public schema. If the table exists, update it.
        
        ```
        IMPORT FOREIGN SCHEMA public_data LIMIT TO
        (customer) 
          FROM server odps_server INTO PUBLIC options(if_table_exist 'update');
        ```
        
    -   Example 2: Create foreign tables in batches for the public schema.
        
        ```
         IMPORT FOREIGN SCHEMA public_data LIMIT TO(
          customer,
          customer_address,
          customer_demographics,
          inventory,item,
          date_dim,
          warehouse) 
          FROM server odps_server INTO PUBLIC options(if_table_exist 'update');
        ```
        
    -   Example 3: Create a testdemo schema and create foreign tables in batches.
        
        ```
        CREATE schema testdemo;
        
        IMPORT FOREIGN SCHEMA public_data LIMIT TO(
          customer,
          customer_address,
          customer_demographics,
          inventory,item,
          date_dim,
          warehouse) 
          FROM server odps_server INTO testdemo options(if_table_exist 'update');
          
        SET search_path TO testdemo;
        ```
        
    -   Example 4: Create foreign tables in batches in the public schema. If a foreign table already exists, report an error.
        
        ```
        IMPORT FOREIGN SCHEMA public_data LIMIT to
        (customer,
          customer_address) 
          FROM server odps_server INTO PUBLIC options(if_table_exist 'error');
        ```
        
    -   Example 5: Create foreign tables in batches in the public schema. If a foreign table already exists, skip it.
        
        ```
        IMPORT FOREIGN SCHEMA public_data LIMIT to
        (customer,
          customer_address) 
          FROM server odps_server INTO PUBLIC options(if_table_exist 'ignore');
        ```
        
-   MaxCompute three-layer model
    
    You can create a foreign table in Hologres that is mapped to the `odps_region_10g` table in the `tpch_10g` schema of the MaxCompute `odps_hologres` project.
    
    ```
    IMPORT FOREIGN SCHEMA "odps_hologres#tpch_10g" LIMIT to
    (
        odps_region_10g
    )
    FROM SERVER odps_server INTO public OPTIONS(if_table_exist 'error',if_unsupported_type 'error');
    ```
    
-   DLF data source
    
    For a DLF data source, directly create Hologres foreign tables by specifying the data source name, such as `github_events`.
    
    -   Example: Create a new foreign table for the public schema. If the table exists, update it. For more information, see [Access a Paimon catalog based on DLF](/help/en/hologres/user-guide/access-paimon-catalog-based-on-dlf-2-0).
        
        ```
        IMPORT FOREIGN SCHEMA github_events
        limit to (customer) 
        FROM SERVER paimon_server into public
        options (if_table_exist 'update');
        ```
