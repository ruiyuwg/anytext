The VALUES clause is used to insert a small amount of temporary data into a table for query and analysis. This topic describes the syntax of the VALUES clause. This topic also provides examples on how to use the VALUES clause.

## Syntax

```
VALUES(column_value01, column_value02...) table_name(column_name01,column_name02...)
```

## Parameters

**Parameter**

**Description**

_column\_value_

The values that you want to insert into the column. You can specify constants, expressions, or functions.

_table\_name_

The name of the table into which you want to insert the values.

_column\_name_

The name of the column into which you want to insert the values.

## Examples

Use the VALUES clause to insert data into a column named pv in the table named access.

-   Query statement
    
    ```
    * |
    SELECT
      pv
    FROM  (
        VALUES
          (0),
          (1),
          (2),
          (3),
          (4),
          (5),
          (6),
          (7),
          (8),
          (9)
      ) AS access(pv)
    ```
    
-   Query and analysis results![values](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5668850461/p337341.png)
