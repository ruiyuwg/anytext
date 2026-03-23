This topic describes how to query data across databases in Hologres and provides usage examples.

## Background information

Hologres V1.1 and later support querying data across different regions, instances, and databases by creating foreign tables. This process is simple and convenient. Hologres is compatible with PostgreSQL, and the principle behind cross-database queries using foreign tables is the same as in PostgreSQL. For more information, see [FDW](https://www.postgresql.org/docs/11/postgres-fdw.html).

## Limits

-   Only Hologres V1.1 and later versions support cross-database data queries. If your instance is earlier than V1.1, see [Common upgrade preparation failure errors](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or join the Hologres DingTalk group for feedback. For more information, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).
    
-   You can query data only from Hologres instances that are V1.1 or later. Cross-database queries are supported only between Hologres instances of the same major version. Queries across different major versions are not supported. For example, you cannot query a V1.1 instance from a V1.3 instance.
    
-   You can query data only in Hologres internal tables. You cannot query Hologres foreign tables or views.
    
-   You can query only Hologres partitioned parent tables. You cannot query partitioned child tables.
    
-   Only basic data types such as INT, BIGINT, and DATE are supported. Complex data types such as JSON are not supported.
    
-   The `UPDATE`, `DELETE`, and `TRUNCATE` commands are not supported for foreign tables.
    
-   Because the IP addresses of Hologres instances are not fixed, they may be restricted by IP address whitelists. We recommend that you do not configure IP address whitelists when using the cross-database query feature.
    

## Cross-database query

The procedure for using the cross-database query feature is as follows.

1.  Create an extension
    
    Before you start, a superuser must execute the following statement in the database to create the extension. Creating an extension requires a superuser of the instance. This operation takes effect for the entire database and needs to be performed only once per database.
    
    ```
    --Create an extension.
    CREATE EXTENSION hologres_fdw;
    ```
    
    **Note**
    
    To uninstall the extension, execute the following command.
    
    ```
    DROP EXTENSION hologres_fdw;
    ```
    
2.  Create a server
    
    After the extension is created, execute the following statement to create a server to connect to the instance for the cross-database query.
    
    **Note**
    
    You can create multiple servers in the same database.
    
    ```
    CREATE SERVER <server_name> FOREIGN DATA WRAPPER hologres_fdw OPTIONS (
        host '<endpoint>',
        port '<port>',
        dbname '<dbname>'
    );
    ```
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    server\_name
    
    The name of the server. You can specify a custom name.
    
    holo\_fdw\_server
    
    host
    
    The classic network endpoint of the Hologres instance. You can go to the instance details page in the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance) and obtain the classic network (internal network) endpoint from the Instance Configuration tab.
    
    hgpostcn-cn-xxx-cn-hangzhou-internal.hologres.aliyuncs.com
    
    port
    
    The port of the Hologres instance. You can go to the instance details page in the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance) and obtain the instance port from the Instance Configuration tab.
    
    80
    
    dbname
    
    The name of the source database to be queried.
    
    testdb
    
3.  Create a user mapping
    
    After you create the server, execute the following statement to create a user mapping for querying data. Ensure that the user mapping has the required permissions to query the source data.
    
    **Note**
    
    You can create multiple user mappings in the same database.
    
    ```
    CREATE USER MAPPING FOR <account_uid> SERVER <server_name> 
    OPTIONS (
      access_id '<access_id>', 
      access_key '<access_key>'
    );
    ```
    
    **Parameter**
    
    **Description**
    
    server\_name
    
    The name of the server that you specified in the previous step.
    
    access\_id
    
    The AccessKey ID of the current account. You can go to the [RAM console](https://usercenter2-intl.console.alibabacloud.com/?spm=5176.2020520153.nav-right.dak.3bcf415dCWGUBj#/manage/ak) to obtain the AccessKey ID.
    
    access\_key
    
    The AccessKey secret of the current account.
    
    Usage examples
    
    ```
    -- Create a user mapping for the current user.
    CREATE USER MAPPING FOR CURRENT_USER SERVER holo_fdw_server OPTIONS
    (
        access_id 'yourAccessKeyId', access_key 'yourAccessKeySecret'
    );
    
    -- Create a user mapping for the RAM user 123xxx.
    CREATE USER MAPPING FOR "p4_123xxx" SERVER holo_fdw_server OPTIONS
    (
        access_id 'yourAccessKeyId', access_key 'yourAccessKeySecret'
    );
    
    -- Delete the user mapping.
    Drop USER MAPPING FOR CURRENT_USER SERVER holo_fdw_server;
    Drop USER MAPPING FOR "p4_123xxx" SERVER holo_fdw_server;
    ```
    
4.  Create a foreign table
    
    You can create a foreign table in two ways:
    
    -   (Recommended) Use the `IMPORT FOREIGN SCHEMA` statement to create a foreign table
        
        Using the `IMPORT FOREIGN SCHEMA` statement to create a foreign table is simpler and more convenient. The SQL statement is as follows.
        
        ```
        IMPORT FOREIGN SCHEMA <holo_remote_schema> 
        [{ LIMIT TO EXCEPT }| (remote_table [, ...])]
        FROM SERVER <server_name>
        INTO <holo_local_schema>
        [ OPTIONS ( OPTION 'values' [, ...])];
        ```
        
        **Note**
        
        Importing foreign table metadata requires reading a large amount of metadata from the external database. We recommend that you use the LIMIT TO parameter to import only the required tables. This avoids importing the entire database and ensures the efficiency of foreign table creation.
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        holo\_remote\_schema
        
        The name of the schema where the source table resides.
        
        remote
        
        remote\_table
        
        The name of the source table to be queried. After the foreign table is created, a foreign table with the same name as the source table is created in the new database.
        
        lineitem
        
        server\_name
        
        The name of the created server.
        
        holo\_fdw\_server
        
        holo\_local\_schema
        
        The name of the schema where the foreign table is created.
        
        local
        
        OPTION 'values'
        
        The conflict policy for creating the foreign table. The parameters include the following:
        
        -   import\_collate: Specifies whether to include the collate configuration for columns. The default value is true.
            
        -   import\_default: Specifies whether to include the default value for columns. The default value is false.
            
        -   import\_not\_null: Specifies whether to include the NOT NULL constraint for columns. The default value is true.
            
        
        import\_not\_null 'true'
        
    -   Use the `CREATE FOREIGN TABLE` statement to create a foreign table
        
        The SQL statement is as follows.
        
        ```
        CREATE FOREIGN TABLE <local_table> (
         col_name type,
          ......
        )SERVER <server_name>
        OPTIONS (schema_name '<remote_schema_name>', table_name '<remote_table>');
        ```
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        local\_table
        
        The name of the foreign table to be created. By default, the table is placed in the public schema. If you have a custom schema, add the schema name before the table name in the `schema.table` format.
        
        public.lineitem
        
        server\_name
        
        The name of the created server.
        
        holo\_fdw\_server
        
        remote\_schema\_name
        
        The name of the schema where the source table resides.
        
        public
        
        remote\_table
        
        The name of the source table to be queried.
        
        holo\_lineitem
        
    
5.  Query data from the foreign table
    
    After the foreign table is created, you can directly query its data to perform a cross-database query. The SQL statement is as follows.
    
    ```
    SELECT * FROM <holo_local_table> LIMIT 10;
    ```
    
6.  (Optional) Import data into an internal table
    
    If you want to import data across databases and instances, or if the query performance of the foreign table does not meet your expectations, you can use the following SQL statement to import the data into a Hologres internal table.
    
    **Note**
    
    Before you start, create an internal table to receive the data. For more information about how to create an internal table, see [Manage internal tables](/help/en/hologres/user-guide/manage-an-internal-table#task-2563156).
    
    ```
    INSERT INTO <holo_table> SELECT * FROM <holo_local_table>;
    ```
    

## Related operations

-   Query servers.
    
    You can use the following SQL statement to query the created servers.
    
    ```
    SELECT
        s.srvname AS "Name",
        pg_catalog.pg_get_userbyid(s.srvowner) AS "Owner",
        f.fdwname AS "Foreign-data wrapper",
        pg_catalog.array_to_string(s.srvacl, E'\n') AS "Access privileges",
        s.srvtype AS "Type",
        s.srvversion AS "Version",
        CASE WHEN srvoptions IS NULL THEN
            ''
        ELSE
            '(' || pg_catalog.array_to_string(ARRAY (
                    SELECT
                        pg_catalog.quote_ident(option_name) || ' ' || pg_catalog.quote_literal(option_value)
                    FROM pg_catalog.pg_options_to_table(srvoptions)), ', ') || ')'
        END AS "FDW options",
        d.description AS "Description"
    FROM
        pg_catalog.pg_foreign_server s
        JOIN pg_catalog.pg_foreign_data_wrapper f ON f.oid = s.srvfdw
        LEFT JOIN pg_catalog.pg_description d ON d.classoid = s.tableoid
            AND d.objoid = s.oid
            AND d.objsubid = 0
    WHERE
        f.fdwname = 'hologres_fdw';
    ```
    
-   View user mappings.
    
    You can use the following SQL statement to query the created user mappings.
    
    ```
    SELECT
        um.srvname AS "Server",
        um.usename AS "User name",
        CASE WHEN umoptions IS NULL THEN
            ''
        ELSE
            '(' || pg_catalog.array_to_string(ARRAY (
                    SELECT
                        pg_catalog.quote_ident(option_name) || ' ' || pg_catalog.quote_literal(option_value)
                    FROM pg_catalog.pg_options_to_table(umoptions)), ', ') || ')'
        END AS "FDW options"
    FROM
        pg_catalog.pg_user_mappings um
    WHERE
        um.srvname != 'query_log_store_server';
    ```
    
-   Delete a user mapping.
    
    You can use the following SQL statement to delete a user mapping.
    
    ```
    DROP USER MAPPING FOR <account_uid> SERVER <server_name>;
    ```
    
    **server\_name** is the name of the server.
    
-   Delete a server.
    
    You can use the following SQL statement to delete a server.
    
    **Important**
    
    Before you delete a server, you must delete the related user mappings and foreign tables.
    
    ```
    DROP SERVER <server_name>;
    ```
    
    **server\_name** is the name of the server.
    

## Usage examples

This section describes the prerequisite configurations and provides three complete examples of cross-database data queries.

-   Provisioned Configuration
    
    Before you start the examples, you must have a Hologres instance, create a database, and prepare the relevant internal table data. The details are as follows.
    
    -   Instance configurations
        
        **Configuration**
        
        **Description**
        
        Source Hologres instance ID
        
        hgpostcn-cn-i7mxxxxxxxxx
        
        Source Hologres database name
        
        remote\_db
        
        Source Hologres instance schema name
        
        remote
        
        Source Hologres internal table name
        
        lineitem
        
        Source Hologres partitioned parent table name
        
        holo\_dwd\_product\_movie\_basic\_info
        
    -   DDL for the source Hologres internal table
        
        ```
        BEGIN;
        CREATE SCHEMA remote;
        CREATE TABLE "remote"."lineitem" (
         "l_orderkey" int8 NOT NULL,
         "l_linenumber" int8 NOT NULL,
         "l_suppkey" int8 NOT NULL,
         "l_partkey" int8 NOT NULL,
         "l_quantity" int8 NOT NULL,
         "l_extendedprice" int8 NOT NULL,
         "l_discount" int8 NOT NULL,
         "l_tax" int8 NOT NULL,
         "l_returnflag" text NOT NULL,
         "l_linestatus" text NOT NULL,
         "l_shipdate" timestamptz NOT NULL,
         "l_commitdate" timestamptz NOT NULL,
         "l_receiptdate" timestamptz NOT NULL,
         "l_shipinstruct" text NOT NULL,
         "l_shipmode" text NOT NULL,
         "l_comment" text NOT NULL
        );
        COMMIT;
        ```
        
    -   DDL for the source Hologres partitioned table
        
        ```
        -- Partitioned parent table
        BEGIN;
        CREATE TABLE "remote"."holo_dwd_product_movie_basic_info" (
         "movie_name" text,
         "director" text,
         "scriptwriter" text,
         "area" text,
         "actors" text,
         "type" text,
         "movie_length" text,
         "movie_date" text,
         "movie_language" text,
         "imdb_url" text,
         "ds" text
        )
        PARTITION BY LIST (ds);
        comment on column "remote"."holo_dwd_product_movie_basic_info"."movie_name" is 'movie name';
        comment on column "remote"."holo_dwd_product_movie_basic_info"."director" is 'director';
        comment on column "remote"."holo_dwd_product_movie_basic_info"."scriptwriter" is 'scriptwriter';
        comment on column "remote"."holo_dwd_product_movie_basic_info"."area" is 'production area/country';
        comment on column "remote"."holo_dwd_product_movie_basic_info"."actors" is 'actors';
        comment on column "remote"."holo_dwd_product_movie_basic_info"."type" is 'type';
        comment on column "remote"."holo_dwd_product_movie_basic_info"."movie_length" is 'movie length';
        comment on column "remote"."holo_dwd_product_movie_basic_info"."movie_date" is 'release date';
        comment on column "remote"."holo_dwd_product_movie_basic_info"."movie_language" is 'language';
        comment on column "remote"."holo_dwd_product_movie_basic_info"."imdb_url" is 'IMDb number';
        COMMIT;
        
        --Create a partitioned child table for the '20170122' partition.
        CREATE TABLE IF NOT EXISTS "remote".holo_dwd_product_movie_basic_info_20170122 PARTITION OF "remote".holo_dwd_product_movie_basic_info FOR VALUES IN ('20170122');
                                        
        ```
        
    
-   Example 1: Query a non-partitioned table across databases
    
    **Note**
    
    All the following code examples must be executed in the database where you perform the cross-database query.
    
    ```
    -- Create an extension as a superuser.
    CREATE EXTENSION hologres_fdw;
    
    -- Create a server as a superuser.
    CREATE SERVER holo_fdw_server FOREIGN DATA WRAPPER hologres_fdw OPTIONS (
        host 'hgpostcn-cn-i7mxxxxxxxxx-cn-hangzhou-internal.hologres.aliyuncs.com',
        port '80',
        dbname 'remote_db'
    );
    
    -- Create an authorization mapping for the current user.
    CREATE USER MAPPING FOR CURRENT_USER SERVER holo_fdw_server 
    OPTIONS (access_id 'yourAccessKeyId', access_key 'yourAccessKeySecret');
    
    -- Create a schema. In the instance that uses the FDW feature, the local schema is optional. You can replace it with a business schema.
    CREATE SCHEMA local;
    
    -- Create a foreign table.
    IMPORT FOREIGN SCHEMA remote 
    LIMIT to (lineitem)
    FROM SERVER holo_fdw_server  
    INTO local
    OPTIONS ( 
      import_not_null 'true'
    );
    
    SELECT * FROM local.lineitem limit 10;
    ```
    
-   Example 2: Query a partitioned table across databases
    
    ```
    CREATE EXTENSION hologres_fdw;
    
    CREATE SERVER holo_fdw_server FOREIGN DATA WRAPPER hologres_fdw OPTIONS (
        host 'hgpostcn-cn-i7mxxxxxxxxx-cn-hangzhou-internal.hologres.aliyuncs.com',
        port '80',
        dbname 'remote_db'
    );
    
    -- Create an authorization mapping for the current user.
    CREATE USER MAPPING FOR CURRENT_USER SERVER holo_fdw_server 
    OPTIONS (access_id 'yourAccessKeyId', access_key 'yourAccessKeySecret');
    
    -- Create a schema. In the instance that uses the FDW feature, the local schema is optional. You can replace it with a business schema.
    CREATE SCHEMA local;
    
    -- Switch to the local instance (the instance that uses the FDW feature).
    IMPORT FOREIGN SCHEMA remote
    LIMIT to (holo_dwd_product_movie_basic_info)
    FROM SERVER holo_fdw_server
    INTO local
    OPTIONS (
      import_not_null 'true'
    );
    
    -- Directly query all data in the table.
    SELECT * FROM local.holo_dwd_product_movie_basic_info limit 10;                    
    ```
    
-   Example 3: Import data from a foreign table into an internal table
    
    ```
    -- Create a schema. In the instance that uses the FDW feature, the local schema is optional. You can replace it with a business schema.
    CREATE SCHEMA local;
    
    -- Create an internal table.
    BEGIN;
    CREATE TABLE "local"."dwd_product_movie_basic_info" (
     "movie_name" text,
     "director" text,
     "scriptwriter" text,
     "area" text,
     "actors" text,
     "type" text,
     "movie_length" text,
     "movie_date" text,
     "movie_language" text,
     "imdb_url" text,
     "ds" text
    );
    COMMIT;
    
    -- Import data into the internal table.
    insert into local.dwd_product_movie_basic_info select * from local.holo_dwd_product_movie_basic_info;
                        
    ```
    

## Common errors

When you create a server, we recommend that you use the primary instance as the instance to be queried. If the following error occurs, see the solution.

-   Error scenario: An error message similar to the following one appears when you use a read-only replica instance as the instance to be queried.
    
    ```
    internal error: Failed to get available shards for query[xxxxx], please retry later.
    ```
    
-   Solution: Execute the following SQL command in the primary instance of the read-only replica instance and in the initiator instance of the cross-database query.
    
    ```
    ALTER DATABASE <database> SET hg_experimental_enable_dml_read_replica=ON;
    ```
