StarRocks 2.3 and later support the catalog feature that you can use to maintain both internal and external data in one system. This way, you can access and query data that is stored in various external data sources with ease. This topic describes what a catalog is and how to use a catalog to manage and query internal and external data.

## Terms[​](https://docs.starrocks.io/zh/docs/data_source/catalog/catalog_overview/#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5)

-   Internal data: the data that is stored in StarRocks.
    
-   External data: the data that is stored in external data sources, such as Apache Hive, Apache Iceberg, Apache Hudi, Delta Lake, and Java Database Connectivity (JDBC).
    

## Catalog overview

StarRocks supports two types of catalogs: internal catalog and external catalog.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2793895471/CAEQOhiBgMCGrqz.sxkiIGRlMTQwYjlkZjZmMzQ2MDY5NzlmM2RhNGM3MGFkYzM14671852_20240924133949.234.svg)

-   Internal catalog: used to manage all internal data in a StarRocks cluster. For example, databases and tables that are created by executing the CREATE DATABASE and CREATE TABLE statements are managed in the internal catalog of the StarRocks cluster. Each StarRocks cluster has only one internal catalog named default\_catalog.
    
-   External catalog: used to connect to an external Metastore. In StarRocks, you can directly query external data by using an external catalog, without the need to import or migrate data. You can create the following types of external catalogs:
    
    When you use an external catalog to query data from an external data source, StarRocks uses two components of the external data source:
    
    -   Metadata service: used to expose metadata for a frontend node (FE) of a StarRocks cluster to generate a query plan.
        
    -   Storage system: used to store data. Data files are stored in different formats in a distributed file system or an object storage system. After the FE distributes the generated query plan to each backend node (BE) or compute node (CN), the BE or CN scans the desired data in the Hive storage system in parallel, performs computing, and then returns the query results.
        

## Use catalogs

-   Method 1: Execute the `SET CATALOG <catalog_name>` statement in SQL Editor.
    
-   Method 2: Switch to the catalog that takes effect in the current session from the catalog drop-down list, and then use the catalog to query data.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2793895471/p848893.png)
    

## Query data[​](https://docs.starrocks.io/zh/docs/data_source/catalog/catalog_overview/#%E6%9F%A5%E8%AF%A2%E6%95%B0%E6%8D%AE)

### Query internal data[​](https://docs.starrocks.io/zh/docs/data_source/catalog/catalog_overview/#%E6%9F%A5%E8%AF%A2%E5%86%85%E9%83%A8%E6%95%B0%E6%8D%AE)

### Query external data[​](https://docs.starrocks.io/zh/docs/data_source/catalog/catalog_overview/#%E6%9F%A5%E8%AF%A2%E5%A4%96%E9%83%A8%E6%95%B0%E6%8D%AE)

### Query data across catalogs

If you want to query data across catalogs, you can reference the desired data by specifying the destination in the format of `catalog_name.db_name` or `catalog_name.db_name.table_name`.

-   In the `default_catalog` catalog, execute the following statement to query data from the `hive_table` table in the `hive_catalog` catalog:
    
    ```
    SELECT * FROM hive_catalog.hive_db.hive_table;
    ```
    
-   In the `hive_catalog` catalog, execute the following statement to query data from the `olap_table` table in the `default_catalog` catalog:
    
    ```
    SELECT * FROM default_catalog.olap_db.olap_table;
    ```
    
-   In the `hive_catalog` catalog, execute the following statement to perform a federated query on the `hive_table` table and the `olap_table` table in the `default_catalog` catalog:
    
    ```
    SELECT * FROM hive_table h JOIN default_catalog.olap_db.olap_table o WHERE h.id = o.id;
    ```
    
-   In other catalogs, execute the following statement to perform a federated query on the `hive_table` table in the `hive_catalog` catalog and the `olap_table` table in the `default_catalog` catalog:
    
    ```
    SELECT * FROM hive_catalog.hive_db.hive_table h JOIN default_catalog.olap_db.olap_table o WHERE h.id = o.id;
    ```
