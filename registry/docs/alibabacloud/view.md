A view is a virtual table whose content is defined by SQL queries. A view can encapsulate complex query logic. This way, you can query a simple view to obtain complex result sets. In Hologres, you can create a view based on one or more internal tables, foreign tables, or views. This topic describes how to create a view in Hologres.

## Usage notes

When you create and query a view, take note of the following items:

-   If you enable the schema-level permission model (SLPM) for a database and create a view that references two or more tables across schemas in the database, you cannot query the view because different schemas require different permissions. Therefore, we recommend that you do not create a view that references tables across schemas in a database for which the SLPM is enabled.
    
-   If you create a view based on a single table and modify the data in the view, the data of the source table is automatically updated. If you modify the data of the source table, the data in the view is also updated. If you use a single-table view, we recommend that you modify the data in the view with caution. This prevents the data of the source table from being modified and ensures that your business is not affected.
    
-   If you create a view based on multiple tables, data in the view cannot be modified.
    
-   Hologres is compatible with the PostgreSQL ecosystem and uses the security definer mode for view authorization. For User B to query a view created by User A, both of the following conditions must be met:
    
    -   User A must have the SELECT permission on the base table of the view.
        
    -   User B must have the SELECT permission on the view.
        

## Syntax

You can use the following syntax to create a view:

```
CREATE VIEW <view_name> AS
SELECT column1, column2.....
FROM  table_name
WHERE [condition];
```

**view\_name** is the name of the view. The `SELECT ...` statement is the query that defines the view.

## **Examples**

### **Create a view based on an internal table**

1.  Create an internal table. Sample statements:
    
    ```
    CREATE TABLE holo_test (
      amount decimal(10, 2), 
      rate decimal(10, 2)
    );
    INSERT INTO holo_test VALUES 
    (12.12,13.13),
    (14.14,15.15),
    (16.16,17.17),
    (17.1,17),
    (18.01,19);
    ```
    
2.  Create a view based on the internal table and query the table data. Sample statements:
    
    ```
    CREATE VIEW holo_view AS SELECT * FROM holo_test;
    
    SELECT * FROM holo_view;
     amount | rate
    --------+-------
      12.12 | 13.13
      14.14 | 15.15
      16.16 | 17.17
      17.10 | 17.00
      18.01 | 19.00
    (5 rows)
    ```
    

### **Create a view based on a foreign table**

1.  Create a foreign table. Sample statements:
    
    ```
    CREATE FOREIGN TABLE IF NOT EXISTS holo_foreign_test (
      amount decimal(10, 2), 
      rate decimal(10, 2)) 
      SERVER odps_server 
      OPTIONS(project_name '<projectname>', table_name '<odps_name>')
      );
      
    SELECT * FROM holo_foreign_test LIMIT 2;
    ```
    
2.  Create a view based on the foreign table and query the table data. Sample statements:
    
    ```
    CREATE VIEW foreign_view AS SELECT * FROM holo_foreign_test;
    
    SELECT * FROM foreign_view LIMIT 2;
     amount | rate
    --------+-------
      12.12 | 13.13
      14.14 | 15.15
    ```
    

### **Create a federated view based on an internal table and a foreign table**

Create a federated view based on an internal table and a foreign table and query the table data. Sample statements:

```
CREATE VIEW view1 AS SELECT * FROM holo_view UNION ALL  SELECT * FROM foreign_view;

SELECT * FROM view1;
 amount | rate
--------+-------
  12.12 | 13.13
  14.14 | 15.15
  16.16 | 17.17
   17.1 |    17
  18.01 |    19
  12.12 | 13.13
  14.14 | 15.15
  16.16 | 17.17
  17.10 | 17.00
  18.01 | 19.00
  12.12 | 13.13
  14.14 | 15.15
  16.16 | 17.17
   17.1 |    17
  18.01 |    19
  12.12 | 13.13
  14.14 | 15.15
  16.16 | 17.17
   17.1 |    17
  18.01 |    19
(20 rows)
```

## **Other operations**

### **Modify a view**

Hologres V2.1.18 and later lets you modify view names. Use the following syntax:

```
ALTER VIEW <view_name_1> RENAME TO <view_name_2>;
```

### **Drop a view**

You can use the following syntax to drop a view:

```
DROP VIEW <view_name>;
```

### **Query all views and the DDL statements of the views**

-   Run the following command to view all views. If you use a psql client, you can also run the `\dv` command.
    
    ```
    -- SQL command
    SELECT n.nspname AS "Schema",
      c.relname AS "Name",
      CASE c.relkind WHEN 'r' THEN 'table' WHEN 'v' THEN 'view' WHEN 'm' THEN 'materialized view' WHEN 'i' THEN 'index' WHEN 'S' THEN 'sequence' WHEN 's' THEN 'special' WHEN 'f' THEN 'foreign table' WHEN 'p' THEN 'table' WHEN 'I' THEN 'index' END AS "Type",
      pg_catalog.pg_get_userbyid(c.relowner) AS "Owner"
    FROM pg_catalog.pg_class c
         LEFT JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relkind IN ('v','')
          AND n.nspname <> 'pg_catalog'
          AND n.nspname <> 'information_schema'
          AND n.nspname !~ '^pg_toast'
      AND pg_catalog.pg_table_is_visible(c.oid)
    ORDER BY 1,2;
    ```
    
-   You can use the following syntax to query the DDL statement of a view:
    
    ```
    CREATE EXTENSION hg_toolkit;
    SELECT hg_dump_script('<viewname>');
    ```
