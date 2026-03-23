A UNION clause is used to combine the analysis results of multiple SELECT statements.

## Syntax

```
SELECT key1 FROM logstore1
UNION
SELECT key2 FROM logstore2
UNION
SELECT key3 FROM logstore3
```

**Important** Each SELECT statement in a UNION clause must have the same number of columns. The values of the columns in the same position must be of the same data type.

## Parameters

**Parameter**

**Description**

_key_

The field name or column name.

The values of the _key1_, _key2_, and _key3_ parameters must be of the same data type. You can specify different field names or column names.

_logstore_

The name of the Logstore.

## Example

Calculate the number of the page views (PVs) for each status code from the website\_log Logstore and the internal-operation\_log Logstore. All queried and analyzed data is combined and returned at the same time.

-   Query statement
    
    ```
    * |
    SELECT
      status,
      count(*) AS PV
    FROM  website_log
    GROUP BY
      status
    UNION
    SELECT
      status,
      count(*) AS PV
    FROM  internal-operation_log
    GROUP BY
      status
    ```
    
-   Query and analysis result![union](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1833125361/p332471.png)
