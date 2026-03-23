You can use type conversion functions in a query statement to convert data to the required types.

The following table describes the type conversion functions that are supported by Simple Log Service.

**Important** If you want to use strings in analytic statements, you must enclose the strings in single quotation marks (''). Strings that are not enclosed or strings that are enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Function**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

[cast function](#section-w7c-n7h-7k0)

cast(_x_ as _type_)

Converts the values of the _x_ field to a specified data type.

If the cast function fails to convert a value, the query statement that uses this function fails.

√

√

[try\_cast function](#section-3o5-9kg-9hc)

try\_cast(_x_ as _type_)

Converts the values of the _x_ field to a specified data type.

If the try\_cast function fails to convert a value, the function returns NULL. The query statement that uses this function skips the value and continues to run.

**Note**

Logs may contain dirty data. When you query logs, we recommend that you use the try\_cast function. This way, conversion failures will not cause your query statement to fail.

√

×

[typeof function](#section-jng-3t0-izs)

typeof(_x_)

Returns the data type of the _x_ field.

√

×

## cast function

The cast function converts the values of the _x_ field to a specified data type. If the cast function fails to convert a value, the query statement that uses this function fails.

### Syntax

```
cast(x as type)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

_type_

The value of this parameter is of an SQL data type. Valid values: bigint, varchar, double, boolean, timestamp, decimal, array, and map.

Example: `cast(json_parse(key) as array(varchar))`.

Each SQL data type maps to a data type that you can use in a Simple Log Service index. For more information, see [Appendix: Data type mappings](#section-8kr-3uo-o0b).

### Return value type

The data type that is specified by the _type_ parameter.

### Examples

### **SQL**

Convert the number 1 to the Boolean type.

-   Query statement
    
    ```
    * | select cast(1 as boolean)
    ```
    
-   Query and analysis results![cast](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0411721361/p299596.png)
    

### **SPL**

Convert the number 1 to the Boolean type.

-   Query statement
    

```
* | extend a = cast(1 as boolean)
```

-   Query and analysis results![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6472510171/p750400.png)
    

## try\_cast function

The try\_cast function converts the values of the _x_ field to a specified data type. If the try\_cast function fails to convert a value, the function returns NULL. The query statement that uses this function skips the value and continues to run.

### Syntax

```
try_cast(x as type)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

_type_

The value of this parameter is of an SQL data type. Valid values: bigint, varchar, double, boolean, timestamp, decimal, array, and map.

Example: `try_cast(json_parse(key) as map(varchar, varchar))`.

Each SQL data type maps to a data type that you can use in a Simple Log Service index. For more information, see [Appendix: Data type mappings](#section-8kr-3uo-o0b).

### Return value type

The data type that is specified by the _type_ parameter.

### Examples

Convert the values of the uid field to the varchar type.

-   Query statement
    
    ```
    * | select try_cast(uid as varchar)
    ```
    
-   Query and analysis results![try_cast](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0411721361/p299594.png)
    

## typeof function

The typeof function returns the data type of the _x_ field.

### Syntax

```
typeof(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

### Return value type

The varchar type.

### Examples

Obtain the data type of the request\_time field.

-   Query statement
    
    ```
    * |SELECT typeof(request_time)
    ```
    
-   Query and analysis results![typeof](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4993984361/p314199.png)
    

## Appendix: Data type mappings

The following table describes the mappings between the SQL data types and the data types that are supported by Simple Log Service indexes.

**Data type supported by Simple Log Service indexes**

**SQL data type**

long

bigint

text

varchar

double

double

json

varchar
