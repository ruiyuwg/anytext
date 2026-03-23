An EXISTS clause is used to check whether a subquery returns a specific result. If the subquery in an EXISTS clause returns a specific result, true is returned and the outer SQL statement is executed.

## Syntax

```
SELECT...FROM...WHERE EXISTS (subquery)
```

## Parameters

**Parameter**

**Description**

_subquery_

The value of this parameter is a SELECT statement.

## Example

Check whether the read and write latency of a specific Logstore is greater than 1,000 microseconds. If the latency is greater than 1,000 microseconds, the information of the related consumer group is returned.

-   Query statement
    
    ```
    * |
    SELECT
      consumer_group
    FROM  "internal-diagnostic_log"
    WHERE
      EXISTS (
        SELECT
         Latency
        FROM     internal-operation_log
        WHERE
          "internal-diagnostic_log".LogStore = "internal-operation_log".logstore and latency >1000
      )
    ```
    
-   Query and analysis result![EXISTS](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8943125361/p335413.png)
