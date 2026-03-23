HyperLogLog functions are approximate aggregate functions and are similar to the approx\_distinct function. If a large amount of data is involved in computation, HyperLogLog functions can be used to return estimation results within a shorter period of time. This topic describes the syntax of HyperLogLog functions. This topic also provides examples on how to use HyperLogLog functions.

The following table describes the HyperLogLog functions that are supported by Simple Log Service.

**Important** If you want to use strings in analytic statements, you must enclose strings in single quotation marks (''). Strings that are not enclosed or enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Function**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

[approx\_set function](#section-1v0-ncu-00b)

approx\_set(_x_)

Estimates the number of distinct values in the _x_ field. The maximum standard error is 0.01625, which is the default value.

√

×

[cardinality function](#section-db0-lqn-1rb)

cardinality(_x_)

Converts HyperLogLog data to bigint data.

√

×

[empty\_approx\_set function](#section-bzw-cc3-42e)

empty\_approx\_set()

Returns a null value of the HyperLogLog type. The maximum standard error is 0.01625, which is the default value.

√

×

[merge function](#section-ot3-qji-4d0)

merge(_x_)

Aggregates all HyperLogLog values.

√

×

## approx\_set function

The approx\_set function estimates the number of distinct values in the _x_ field. The maximum standard error is 0.01625, which is the default value.

### Syntax

```
approx_set(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

### Return value type

The HyperLogLog type.

### Examples

Estimate the number of unique visitors (UVs) per minute. The return value is of the HyperLogLog type.

-   Query statement
    
    ```
    * |
    SELECT
      date_trunc('minute', __time__) AS Time,
      approx_set(client_ip) AS UV
    FROM  website_log
    GROUP BY
      Time
    ORDER BY
      Time
    ```
    
-   Query and analysis results![approx_set](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2013960461/p325162.png)
    

## cardinality function

The cardinality function converts HyperLogLog data to bigint data.

### Syntax

```
cardinality(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the HyperLogLog type.

### Return value type

The bigint type.

### Examples

Convert HyperLogLog data to bigint data. The approx\_set function returns the estimated number of UVs per minute. The return value is of the HyperLogLog type. The cardinality function converts the return value to bigint data.

-   Query statement
    
    ```
    * |
    SELECT
      Time,
      cardinality(UV) AS UV
    FROM  (
        SELECT
          date_trunc('minute', __time__) AS Time,
          approx_set(client_ip) AS UV
        FROM      website_log
        GROUP BY
          Time
        ORDER BY
          Time
      ) AS UV
    ```
    
-   Query and analysis results![cardinality](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2013960461/p325181.png)
    

## empty\_approx\_set function

The empty\_approx\_set function returns a null value of the HyperLogLog type. The maximum standard error is 0.01625, which is the default value.

### Syntax

```
empty_approx_set()
```

### Return value type

The HyperLogLog type.

### Examples

Obtain a null value of the HyperLogLog type.

-   Query statement
    
    ```
    * | SELECT  empty_approx_set()
    ```
    
-   Query and analysis results![empty_approx_set](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2013960461/p325211.png)
    

## merge function

The merge function aggregates all HyperLogLog values.

### Syntax

```
merge(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the HyperLogLog type.

### Return value type

The HyperLogLog type.

### Examples

Aggregate HyperLogLog values. The approx\_set function returns the estimated number of UVs per minute. The merge function aggregates the numbers of UVs of 15 minutes. The cardinality function converts the HyperLogLog data into bigint data.

-   Query statement
    
    ```
    * |
    SELECT
      Time,
      cardinality(UV) AS UV,
      cardinality(merge(UV) over()) AS Total_UV
    FROM  (
        SELECT
          date_trunc('minute', __time__) AS Time,
          approx_set(client_ip) AS UV
        FROM      log
        GROUP BY
          Time
        ORDER BY
          Time
      )
    ```
    
-   Query and analysis results![merge](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2013960461/p325227.png)
