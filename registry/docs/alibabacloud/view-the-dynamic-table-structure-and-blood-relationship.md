This topic describes how to view the schema, data lineage, and storage details of a Dynamic Table. It also explains how to view all Dynamic Tables in an instance and manage state tables.

## View the schema of a Dynamic Table

-   Syntax
    
    ```
    SELECT hg_dump_script('[<schema_name>.]<table_name>');
    ```
    
-   Parameters
    
    -   schema\_name: Optional. The name of the schema.
        
    -   table\_name: Required. The name of the Dynamic Table.
        

## **View the Dynamic Tables in the current instance**

You can use the `hologres.hg_dynamic_table_properties` system table to view all Dynamic Tables in the current instance and their refresh patterns. The SQL command is as follows.

```
SELECT dynamic_table_name, property_value FROM hologres.hg_dynamic_table_properties WHERE property_key = 'refresh_mode';
```

You can run the following SQL command to view all metadata of a specific Dynamic Table.

```
SELECT * FROM hologres.hg_dynamic_table_properties WHERE dynamic_table_name='<dynamic_table_name>';
```

## **View the data lineage of a Dynamic Table**

### Visualization

You can view the data lineage of a Dynamic Table using HoloWeb or DataWorks Data Map.

-   [HoloWeb](/help/en/hologres/user-guide/connect-to-holoweb): In the HoloWeb console, choose **Table Metadata Management** > **Dynamic Table Management**. On the Lineage Information tab, view the data lineage of the Dynamic Table.
    
-   DataWorks [Data Map](/help/en/dataworks/user-guide/data-map/): DataWorks Data Map automatically collects and displays the data lineage of Dynamic Tables. For more information, see [Data lineage](/help/en/hologres/user-guide/data-lineage).
    

### **SQL method**

## **View the data lineage of a single Dynamic Table**

You can run the following SQL command to view the data lineage of a specific Dynamic Table.

```
-- View the lineage of a single table
SELECT
    d.*,
    CASE WHEN k.dynamic_table_namespace IS NOT NULL THEN
        'd'
    ELSE
        c.relkind
    END
FROM
    hologres.hg_dynamic_table_dependencies d
    LEFT JOIN pg_namespace n ON n.nspname = d.table_namespace
    LEFT JOIN pg_class c ON c.relnamespace = n.oid
        AND c.relname = d.table_name
    LEFT JOIN (
        SELECT
            dynamic_table_namespace,
            dynamic_table_name
        FROM
            hologres.hg_dynamic_table_properties
        GROUP BY
            1,
            2) k ON k.dynamic_table_namespace = d.table_namespace
    AND k.dynamic_table_name = d.table_name
WHERE
    d.dynamic_table_namespace = '<schema_name>'
    AND d.dynamic_table_name = '<dynamic_table_name>'
    AND d.dependency <> 'internal_table';
```

## **View the data lineage of all Dynamic Tables**

You can run the following SQL command to view the data lineage of all Dynamic Tables in the current instance.

```
SELECT
    d.*,
    CASE WHEN k.dynamic_table_namespace IS NOT NULL THEN
        'd'
    ELSE
        c.relkind 
    END
FROM
    hologres.hg_dynamic_table_dependencies d
    LEFT JOIN pg_namespace n ON n.nspname = d.table_namespace
    LEFT JOIN pg_class c ON c.relnamespace = n.oid
        AND c.relname = d.table_name
    LEFT JOIN (
        SELECT
            dynamic_table_namespace,
            dynamic_table_name
        FROM
            hologres.hg_dynamic_table_properties
        GROUP BY
            1,
            2) k ON k.dynamic_table_namespace = d.table_namespace
    AND k.dynamic_table_name = d.table_name
WHERE
    d.dependency <> 'internal_table';
```

**Note**

The following list describes the value mapping for base\_table\_type:

-   r: ordinary table.
    
-   v: view.
    
-   m: materialized view.
    
-   f: foreign table.
    
-   d: Dynamic Table.
    

## **View the storage details of a Dynamic Table**

You can use the `hologres.hg_relation_size` function to view the storage size and details of a Dynamic Table. For more information about how to use the `hologres.hg_relation_size` function, see [View table storage details](/help/en/hologres/query-the-storage-sizes-of-tables-and-databases#83ea0ce0523vl).

## Manage a state table

For a Dynamic Table that uses incremental refresh, the system generates a state table at the underlying layer to accelerate data computing. This table stores aggregation results. By default, the state table is stored in the default table group and does not support resharding. For more information, see [Dynamic Table](/help/en/hologres/user-guide/dynamic-table-overview/). In addition, if you change the refresh pattern to full refresh, the state table is cleared by default.

### View the storage usage of a state table

You can run the following SQL command to view the storage size of the state table. The billing rules for its storage are the same as those for a standard table. For more information, see [Billing overview](/help/en/hologres/product-overview/billing-overview).

```
SELECT pg_size_pretty(hologres.hg_dynamic_table_state_size('<dynamic_table_name>'));
```
