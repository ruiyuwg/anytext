By default, Simple Log Service returns 100 rows of data in the query and analysis results. You can use a LIMIT clause to specify the number of rows that can be returned.

## Syntax

Simple Log Service supports the following types of LIMIT clauses:

-   The following LIMIT clause returns the first x rows of data in the query and analysis results:
    
    ```
    LIMIT x
    ```
    
-   The following LIMIT clause returns x rows of data starting from the y row in the query and analysis results:
    
    ```
    LIMIT y, x
    ```
    

**Important**

-   The LIMIT clause is used to obtain final results rather than SQL intermediate results.
    
-   Using the `LIMIT y, x` clause inside a subquery is not supported. For example, the following statement is invalid: `* | select count(1) from ( select distinct(url) from limit 0,1000)`.
    

## Parameters

**Parameter**

**Description**

_x_

The number of rows that can be returned.

-   If you use `LIMIT x`, the valid values of _x_ are \[0,1000000\].
    
-   If you use `LIMIT y, x`, the valid values of _x_ are \[0,10000\].
    

_y_

The offset. Valid values: \[0,1000000\].

**Important**

The sum of _x_ and _y_ cannot exceed 1,000,000.

## Examples

-   Return the first 200 rows of data in the query and analysis results.
    
    -   Query statement
        
        ```
        * | SELECT  request_time LIMIT 200
        ```
        
    -   Query and analysis results![limit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2130921461/p328081.png)
        
-   Return 1,000 rows of data with an offset of 100 in the query and analysis results.
    
    -   Query statement
        
        ```
        * | SELECT  request_time LIMIT 100,1000
        ```
        
    -   Query and analysis results![limit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2130921461/p328088.png)
        
-   Return the top three request URIs with the longest request durations.
    
    -   Query statement
        
        ```
        * |
        SELECT
          request_uri AS top_3,
          request_time
        ORDER BY
          request_time DESC
        LIMIT
          3
        ```
        
    -   Query and analysis results![limit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2130921461/p328152.png)
