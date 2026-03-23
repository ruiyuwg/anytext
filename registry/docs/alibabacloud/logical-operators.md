This topic describes the syntax of logical operators. This topic also provides examples on how to use the logical operators.

The following table describes the logical operators that are supported by Simple Log Service.

**Important**

-   If you want to use strings in analytic statements, you must enclose the strings in single quotation marks (''). Strings that are not enclosed or strings that are enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.
    
-   The following logical operators are in descending order of priority: not, and, or. You can use parentheses () to change the calculation order.
    
-   Logical operations support only Boolean expressions whose input value is true, false, or null.
    

**Operator**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

[AND operator](#section-pw8-5ul-lcn)

_x_ AND _y_

If both _x_ and _y_ evaluate to true, true is returned.

√

√

[OR operator](#section-cog-9xl-z3f)

_x_ OR _y_

If either _x_ or _y_ evaluates to true, true is returned.

√

√

[NOT operator](#section-nes-1zb-hjv)

NOT _x_

If _x_ evaluates to false, true is returned.

√

√

## AND operator

If both _x_ and _y_ evaluate to true, true is returned.

### Syntax

```
x AND y 
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is a Boolean expression.

_y_

The value of this parameter is a Boolean expression.

### Return value type

The Boolean type.

### Examples

### **SQL**

If the value of the status field is 200 and the value of the request\_method field is GET, true is returned. Otherwise, false is returned.

-   Query statement
    
    ```
    *|SELECT status=200 AND request_method='GET'
    ```
    
-   Query and analysis results![AND运算符](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4215182361/p302497.png)
    

### **SPL**

If the value of the status field is 200 and the value of the request\_method field is GET, true is returned. Otherwise, false is returned.

-   SPL statement
    

```
*|extend a = status=200 AND request_method='GET'
```

-   SPL results![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0003510171/p750449.png)
    

## OR operator

If either _x_ or _y_ evaluates to true, true is returned.

### Syntax

```
x OR y 
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is a Boolean expression.

_y_

The value of this parameter is a Boolean expression.

### Return value type

The Boolean type.

### Examples

### **SQL**

Query the logs whose value of the request\_uri field ends with file-8 or file-6.

-   Query statement
    
    ```
    *|SELECT *  WHERE request_uri LIKE '%file-8' OR request_uri LIKE '%file-6'
    ```
    
-   Query and analysis results![OR](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8702282361/p302513.png)
    

### **SPL**

Query the logs whose value of the request\_uri field ends with file-8 or file-6.

-   SPL statement
    

```
*|WHERE request_uri LIKE '%file-8' OR request_uri LIKE '%file-6'
```

-   SPL results![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1003510171/p750454.png)
    

## NOT operator

If _x_ evaluates to false, true is returned.

### Syntax

```
 NOT x 
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is a Boolean expression.

### Return value type

The Boolean type.

### Examples

### **SQL**

Measure the durations of requests for which the HTTP 200 status code is not returned.

-   Query statement
    
    ```
    *|SELECT request_time WHERE NOT status=200
    ```
    
-   Query and analysis results![NOT](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4215182361/p302506.png)
    

### **SPL**

Query the logs for which the HTTP 200 status code is not returned.

-   SPL statement
    

```
*|WHERE NOT status=200
```

-   SPL results![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0003510171/p751579.png)
    

## Appendix: Truth table

The following table describes the results if _x_ and _y_ evaluate to true, false, or null.

_x_

_y_

_x_ **AND** _y_

_x_ **OR** _y_

**NOT** _x_

true

true

true

true

false

true

false

false

true

false

true

null

null

true

false

false

true

false

true

true

false

false

false

false

true

false

null

false

null

true

null

true

null

true

null

null

false

false

null

null

null

null

null

null

null
