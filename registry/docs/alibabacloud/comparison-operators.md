Comparison operators are used to compare parameter values. The values that are of the following data types can be compared: double, bigint, varchar, timestamp, and date. This topic describes the syntax of comparison operators. This topic also provides examples on how to use the comparison operators.

## **Overview of** comparison operators

The following table describes the comparison operators that are supported by Simple Log Service.

**Important** If you want to use strings in analytic statements, you must enclose strings in single quotation marks (''). Strings that are not enclosed or enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Operator**

**Syntax**

**Description**

**Supported in SQL**

**Supported in SPL**

[Relational operators](#section-vog-htc-ev2)

_x_ < _y_

If _x_ is less than _y_, true is returned.

√

√

_x_ > _y_

If _x_ is greater than _y_, true is returned.

√

√

_x_ <= _y_

If _x_ is less than or equal to _y_, true is returned.

√

√

_x_ >= _y_

If _x_ is greater than or equal to _y_, true is returned.

√

√

_x_ = _y_

If _x_ is equal to _y_, true is returned.

√

√

_x_ <> _y_

If _x_ is not equal to _y_, true is returned.

√

√

_x_ != _y_

If _x_ is not equal to _y_, true is returned.

√

√

[ALL operator](#section-atq-sq4-ksq)

_x_ _relational operator_ ALL(_subquery_)

If _x_ meets all conditions, true is returned.

√

×

[ANY operator](#section-6uj-0r2-94s)

_x_ _relational operator_ ANY(_subquery_)

If _x_ meets one of the conditions, true is returned.

√

×

[BETWEEN operator](#section-rff-unu-zow)

_x_ BETWEEN _y_ AND _z_

If _x_ is between _y_ and _z_, true is returned.

√

√

[DISTINCT operator](#section-ejz-umu-isp)

_x_ IS DISTINCT FROM _y_

If _x_ is not equal to _y_, true is returned.

√

×

_x_ IS NOT DISTINCT FROM _y_

If _x_ is equal to _y_, true is returned.

√

×

[LIKE operator](#section-kxy-htx-2ws)

_x_ LIKE _pattern_ \[escape '_escape\_character_'\]

Matches a specified character pattern in a string. The string is case-sensitive.

√

√

[SOME operator](#section-3ed-j89-ryq)

_x_ _relational operator_ SOME(_subquery_)

If _x_ meets one of the conditions, true is returned.

√

×

[GREATEST operator](#section-cow-li5-5ib)

GREATEST(_x_, _y_...)

Obtains the greater value of _x_ and _y_.

√

×

[LEAST operator](#section-xj1-1jv-tdb)

LEAST(_x_, _y_...)

Obtains the smaller value of _x_ and _y_.

√

×

[NULL operator](#section-856-3oh-jgt)

_x_ IS NULL

If _x_ is null, true is returned.

√

√

_x_ IS NOT NULL

If _x_ is not null, true is returned.

√

√

## Relational operators

Relational operators compare _x_ and _y_. If the condition is met, true is returned.

### Syntax

**Syntax**

**Description**

_x_ < _y_

_x_ is less than _y_.

_x_ > _y_

_x_ is greater than _y_.

_x_ <= _y_

_x_ is less than or equal to _y_.

_x_ >= _y_

_x_ is greater than or equal to _y_.

_x_ = _y_

_x_ is equal to _y_.

_x_ <> _y_

_x_ is not equal to _y_.

_x_ != _y_

_x_ is not equal to _y_.

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of a data type that supports comparison.

_y_

The value of this parameter is of a data type that supports comparison.

### Return value type

The Boolean type.

### Examples

-   Example 1: Query logs from the previous day.
    
    -   Query statement
        
        ```
        * |
        SELECT
          *
        FROM  log
        WHERE
          __time__ < to_unixtime(current_date)
          AND __time__ > to_unixtime(date_add('day', -1, current_date))
        ```
        
    -   Query and analysis results![current_date](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8554961361/p295473.png)
        
-   Example 2: E-commerce Company A uses the mobile and client\_ip fields in access logs to find the customers whose phone numbers are from a different place than the IP addresses used to access the website of the company.
    
    -   Sample field
        
        ```
        mobile:1881111****
        client_ip:192.168.2.0
        ```
        
    -   Query statement
        
        ```
        * |
        SELECT
          mobile,
          client_ip,
          count(*) AS PV
        WHERE
          mobile_city(mobile) != ip_to_city(client_ip)
          AND ip_to_city(client_ip) != ''
        GROUP BY
          client_ip,
          mobile
        ORDER BY
          PV DESC
        ```
        
    -   Query and analysis results![mobile_city](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9376006361/p300739.png)
        

## ALL operator

The ALL operator determines whether _x_ meets all conditions. If all conditions are met, true is returned.

### Syntax

```
x relational operator ALL(subquery)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of a data type that supports comparison.

_Relational operator_

The value of this parameter is a relational operator. Valid values: < > <= >= = <> !=

**Important**

The ALL operator must follow the relational operator. Relational operators: < > <= >= = <> !=

_subquery_

The value of this parameter is an SQL subquery.

### Return value type

The Boolean type.

### Examples

Check whether each request related to instance i-01 is responded with the status code 200.

-   Sample field
    
    ```
    instance_id:i-01
    status:200
    ```
    
-   Query statement
    
    ```
    * | select 200 = ALL(select status where instance_id='i-01')
    ```
    
-   Query and analysis results![all](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5216055361/p308968.png)
    

## ANY operator

The ANY operator determines whether _x_ meets one of the conditions. If one of the conditions is met, true is returned.

### Syntax

```
x relational operator ANY(subquery)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of a data type that supports comparison.

_Relational operator_

The value of this parameter is a relational operator. Valid values: < > <= >= = <> !=

**Important**

The ANY operator must follow the relational operator. Relational operators: < > <= >= = <> !=

_subquery_

The value of this parameter is an SQL subquery.

### Return value type

The Boolean type.

### Examples

Check whether any request related to instance i-01 is responded with the status code 200.

-   Sample field
    
    ```
    instance_id:i-01
    status:200
    ```
    
-   Query statement
    
    ```
    * | SELECT 200 = ANY(SELECT status WHERE instance_id='i-01')
    ```
    
-   Query and analysis results![any](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5216055361/p308967.png)
    

## BETWEEN operator

The BETWEEN operator determines whether _x_ is between _y_ and _z_. If the condition is met, true is returned. _y_ and _z_ specify a closed interval.

### Syntax

```
x BETWEEN y AND z
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of a data type that supports comparison.

_y_

The value of this parameter is of a data type that supports comparison.

_z_

The value of this parameter is of a data type that supports comparison.

**Important**

-   The data types of _x_, _y_, and _z_ must be the same.
    
-   If the value of _x_, _y_, or _z_ contains null, null is returned.
    

### Return value type

The Boolean type.

### Examples

-   Example 1: Determine whether the value of the status field is within the \[200,299\] range.
    
    -   Query statement
        
        ```
        * | SELECT status BETWEEN 200 AND 299
        ```
        
    -   Query and analysis results![BETWEEN](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5216055361/p300086.png)
        
-   Example 2: Determine the number of logs whose value of the status field is not within the \[200,299\] range.
    
    -   Query statement
        
        ```
        * | SELECT count(*) AS count FROM log WHERE status NOT BETWEEN 200 AND 299
        ```
        
    -   Query and analysis results![between](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5216055361/p300112.png)
        

## DISTINCT operator

The DISTINCT operator determines whether _x_ is equal to _y_.

### Syntax

-   IS DISTINCT FROM: If _x_ is not equal to _y_, true is returned.
    
    ```
    x IS DISTINCT FROM y
    ```
    
-   IS NOT DISTINCT FROM: If _x_ is equal to _y_, true is returned.
    
    ```
    x IS NOT DISTINCT FROM y
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of a data type that supports comparison.

_y_

The value of this parameter is of a data type that supports comparison.

Unlike the = and <> operators, the DISTINCT operator can be used to perform comparison on null.

_x_

_y_

_x_ **=** _y_

_x_ **<>** _y_

_x_ **IS DISTINCT FROM** _y_

_x_ **IS NOT DISTINCT FROM** _y_

1

1

true

false

false

true

1

2

false

true

true

false

1

null

null

null

true

false

null

null

null

null

false

true

### Return value type

The Boolean type.

### Examples

Compare 0 against null.

-   Query statement
    
    ```
    * | select 0 IS DISTINCT FROM null
    ```
    
-   Query and analysis results![distinct](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5216055361/p309000.png)
    

## LIKE operator

The LIKE operator matches a specified character pattern in a string. The string is case-sensitive.

### Syntax

```
x LIKE pattern [escape 'escape_character']
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of a data type that supports comparison.

_pattern_

The value of this parameter is the character pattern, which can contain strings or wildcard characters. The following wildcard characters are supported:

-   Percent sign (%): indicates an arbitrary number of characters.
    
-   Underscore (\_): indicates a single character.
    

_escape\_character_

The value of this parameter is a character expression that is used to escape the wildcard characters in the character pattern.

**Note**

The LIKE operator is used to query logs based on exact match. For more information, see [How do I query logs by using exact match?](/help/en/sls/how-do-i-query-logs-by-using-exact-match#concept-2089193)

### Return value type

The Boolean type.

### Examples

### **SQL**

-   Example 1: Query the logs whose value of the request\_uri field ends with file-8 or file-6.
    
    -   Sample field
        
        ```
        request_uri:/request/path-2/file-6
        ```
        
    -   Query statement
        
        ```
        *|SELECT * WHERE request_uri LIKE '%file-8' OR request_uri LIKE '%file-6'
        ```
        
    -   Query and analysis results![OR](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8702282361/p302513.png)
        
-   Example 2: Check whether the value of the request\_uri field ends with file-6.
    
    -   Sample field
        
        ```
        request_uri:/request/path-2/file-6
        ```
        
    -   Query statement
        
        ```
        * | SELECT request_uri LIKE '%file-6'
        ```
        
    -   Query and analysis results![like](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5216055361/p308985.png)
        

### **SPL**

-   Example 1: Query the logs whose value of the **request\_uri** field ends with file-8 or file-6.
    
    -   Sample field
        

```
request_uri:/request/path-2/file-6
```

-   SPL statement
    

```
*|WHERE request_uri LIKE '%file-8' OR request_uri LIKE '%file-6'
```

-   SPL results
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9692510171/p750435.png)

-   Example 2: Check whether the value of the **request\_uri** field ends with file-6.
    
    -   Sample field
        

```
request_uri:/request/path-2/file-6
```

-   SPL statement
    

```
* | extend a = request_uri LIKE '%file-6'
```

-   SPL results
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9692510171/p750436.png)

## SOME operator

The SOME operator determines whether _x_ meets one of the conditions. If one of the conditions is met, true is returned.

### Syntax

```
x relational operator SOME(subquery)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of a data type that supports comparison.

_Relational operator_

The value of this parameter is a relational operator. Valid values: < > <= >= = <> !=

**Important**

The SOME operator must follow the relational operator. Relational operators: < > <= >= = <> !=

_subquery_

The value of this parameter is an SQL subquery.

### Return value type

The Boolean type.

### Examples

Check whether any request related to instance i-01 is processed for less than 20s.

-   Sample field
    
    ```
    instance_id:i-01
    request_time:16
    ```
    
-   Query statement
    
    ```
    * | SELECT 20 > SOME(SELECT request_time WHERE instance_id='i-01')
    ```
    
-   Query and analysis results![any](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5216055361/p308967.png)
    

## GREATEST operator

The GREATEST operator obtains the greater value of _x_ and _y_.

**Note**

The GREATEST operator is used for horizontal comparison, and the max function is used for vertical comparison.

### Syntax

```
GREATEST(x, y...)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of a data type that supports comparison.

_y_

The value of this parameter is of a data type that supports comparison.

### Return value type

The double type.

### Examples

Compare the values of the request\_time and status fields in the same log to obtain the greater value.

-   Sample field
    
    ```
    request_time:38
    status:200
    ```
    
-   Query statement
    
    ```
    * |  SELECT GREATEST(request_time,status)
    ```
    
-   Query and analysis results![greatest](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6216055361/p308918.png)
    

## LEAST operator

The LEAST operator obtains the smaller value of _x_ and _y_.

**Note**

The LEAST operator is used for horizontal comparison, and the min function is used for vertical comparison.

### Syntax

```
LEAST(x, y...)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of a data type that supports comparison.

_y_

The value of this parameter is of a data type that supports comparison.

### Return value type

The double type.

### Examples

Compare the values of the request\_time and status fields in the same log to obtain the smaller value.

-   Sample field
    
    ```
    request_time:77
    status:200
    ```
    
-   Query statement
    
    ```
    * |  SELECT LEAST(request_time,status)
    ```
    
-   Query and analysis results![least](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6216055361/p308919.png)
    

## NULL operator

The NULL operator determines whether _x_ is null.

### Syntax

-   IS NULL: If x is null, true is returned.
    
    ```
    x IS NULL
    ```
    
-   IS NOT NULL: If x is not null, true is returned.
    
    ```
    x IS NOT NULL
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of a data type that supports comparison.

### Return value type

The Boolean type.

### Examples

-   Example1: Determine whether the value of the status field is null.
    
    -   Query statement
        
        ```
        * | select status IS NULL
        ```
        
    -   Query and analysis results![is null](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5886006361/p300096.png)
        
-   Example 2: Determine the number of logs whose status field is not empty.
    
    -   Query statement
        
        ```
        * | SELECT count(*) AS count FROM log WHERE status IS NOT NULL
        ```
        
    -   Query and analysis results![is not null](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5886006361/p300230.png)
