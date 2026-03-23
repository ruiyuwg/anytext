The EXCEPT clause is used to combine the result sets of two SELECT statements and return the difference set of the two result sets. The difference set includes the values that are included in the result set of the first SELECT statement but are not included in the result set of the second SELECT statement. This topic describes the syntax of the EXCEPT clause. This topic also provides examples on how to use the EXCEPT clause.

## Syntax

```
SELECT key1... FROM logstore1
EXCEPT
SELECT key2... FROM logstore2
```

**Important**

-   The number and order of the columns in the result sets of the two SELECT statements must be the same. The data types for the columns in the result sets of the two SELECT statements must be the same.
-   The EXCEPT clause removes all duplicates from the final results. This way, distinct values are returned in the final results.

## Parameters

**Parameter**

**Description**

_key_

The field name, column name, or expression.

You can specify different values for _key1_ and _key2_, but you must specify the same data types for them.

_logstore_

The name of the Logstore.

## Examples

A Logstore named internal-diagnostic\_log is used to store important logs. The important logs record information about the log consumption latency, alerts, and log collection of each Logstore. A Logstore named internal-operation\_log is used to store detailed logs. The detailed logs record information about all the operations on resources in a project. You can use the EXCEPT clause to query which Logstores have detailed logs but not important logs.

-   Query statement
    
    ```
    * |
    SELECT
      logstore
    FROM  internal-operation_log
    EXCEPT
    SELECT
      logstore
    FROM  internal-diagnostic_log
    ```
    
-   Query and analysis results![EXCEPT](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8297850461/p337482.png)
