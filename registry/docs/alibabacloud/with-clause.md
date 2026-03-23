You can use a WITH clause to save the result of a subquery to a temporary table. Then, you can execute an SQL statement to analyze the data in the temporary table. You can use WITH clauses to simplify SQL statements and improve readability. This topic describes the syntax of WITH clauses and provides examples on how to use WITH clauses.

## Syntax

```
WITH table_name AS (select_statement) select_statement
```

## Parameters

**Parameter**

**Description**

_table\_name_

The name of the temporary table.

_select\_statement_

The complete SELECT statement.

## Example

Analyze the average request length for each host in a Logstore named website\_log and save the analysis result to a table named T1. Analyze the average request length for each host in a Logstore named access\_log and save the analysis result to a table named T2. Then, use a JOIN clause to combine T1 and T2 and query the average request length for each host that is contained in both tables.

-   Query statement
    
    ```
    * | with T1 AS (
      SELECT
        host,
        avg(request_length) length
      FROM    website_log
      GROUP BY
        host
    ),
    T2 AS (
      SELECT
        host,
        avg(request_length) length
      FROM    access_log
      GROUP BY
        host
    )
    SELECT
      T1.host,
      T1.length,
      T2.length
    FROM  T1
      JOIN T2 ON T1.host = T2.host
    ```
    
-   Query and analysis result![WITH](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2353358361/p337796.png)
