Simple Log Service allows you to convert a measurement or a time interval from the current unit to a different unit by using unit conversion functions. This topic describes the syntax of unit conversion functions. This topic also provides examples on how to use unit conversion functions.

The following table describes the unit conversion functions that are supported by Simple Log Service.

**Important** If you want to use strings in analytic statements, you must enclose strings in single quotation marks (''). Strings that are not enclosed or enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Category**

**Function**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

Unit conversion for measurements

[convert\_data\_size function](#section-cks-tj3-d5x)

convert\_data\_size(_x_)

Converts a measurement from the current unit to the optimal unit. The system automatically determines the optimal unit and returns a measurement in the optimal unit. The returned result is of the string type. For example, you can convert 1,024 KB to 1 MB and 1,024 MB to 1 GB.

√

×

convert\_data\_size(_x_, _unit_)

Converts a measurement from the current unit to a specified unit. The returned result is of the string type.

√

×

[format\_data\_size function](#section-35k-13k-uh4)

format\_data\_size(_x_, _unit_)

Converts a measurement in byte to a measurement in a specified unit. The returned result is of the string type.

√

×

[parse\_data\_size function](#section-0ju-sal-lyh)

parse\_data\_size(_x_)

Converts a measurement from the current unit to a measurement in byte. The returned result is of the decimal type.

√

×

[to\_data\_size\_B function](#section-dox-t2w-rf9)

to\_data\_size\_B(_x_)

Converts a measurement from the current unit to a measurement in byte. The returned result is of the double type.

√

×

[to\_data\_size\_KB function](#section-23a-xls-npy)

to\_data\_size\_KB(_x_)

Converts a measurement from the current unit to a measurement in KB. The returned result is of the double type.

√

×

[to\_data\_size\_MB function](#section-m4m-y3r-0p7)

to\_data\_size\_MB(_x_)

Converts a measurement from the current unit to a measurement in MB. The returned result is of the double type.

√

×

[to\_data\_size\_GB function](#section-0e5-nn8-osq)

to\_data\_size\_GB(_x_)

Converts a measurement from the current unit to a measurement in GB. The returned result is of the double type.

√

×

[to\_data\_size\_TB function](#section-z2x-yht-3ym)

to\_data\_size\_TB(_x_)

Converts a measurement from the current unit to a measurement in TB. The returned result is of the double type.

√

×

[to\_data\_size\_PB function](#section-5am-akc-rig)

to\_data\_size\_PB(_x_)

Converts a measurement from the current unit to a measurement in PB. The returned result is of the double type.

√

×

Unit conversion for time intervals

[format\_duration function](#section-vvp-aaz-1nv)

format\_duration(_x_)

Converts a time interval in seconds to a readable string.

√

×

[parse\_duration function](#section-zbi-yy9-qvm)

parse\_duration(_x_)

Converts a time interval to a time interval in the `0 00:00:00.000` format.

√

×

[to\_days function](#section-qzi-mi5-oh9)

to\_days(_x_)

Converts a time interval to a time interval in days.

√

×

[to\_hours function](#section-lzy-nw4-pqn)

to\_hours(_x_)

Converts a time interval to a time interval in hours.

√

×

[to\_microseconds function](#section-b96-6s6-9vh)

to\_microseconds(_x_)

Converts a time interval to a time interval in microseconds.

√

×

[to\_milliseconds function](#section-3mk-oic-qzq)

to\_milliseconds(_x_)

Converts a time interval to a time interval in milliseconds.

√

×

[to\_minutes function](#section-7p5-w3c-iio)

to\_minutes(_x_)

Converts a time interval to a time interval in minutes.

√

×

[to\_most\_succinct\_time\_unit function](#section-sis-p3a-hdj)

to\_most\_succinct\_time\_unit(_x_)

Converts a time interval from the current unit to the optimal unit. The system automatically determines the optimal unit and returns a time interval in the optimal unit.

√

×

[to\_nanoseconds function](#section-liu-lfy-psc)

to\_nanoseconds(_x_)

Converts a time interval to a time interval in nanoseconds.

√

×

[to\_seconds function](#section-jy7-wxm-1nx)

to\_seconds(_x_)

Converts a time interval to a time interval in seconds.

√

×

## convert\_data\_size function

The convert\_data\_size function converts a measurement from the current unit to a different unit.

### Syntax

-   If you use the following syntax, the function converts a measurement from the current unit to the optimal unit. The system automatically determines the optimal unit and returns a measurement in the optimal unit.
    
    ```
    convert_data_size(x)
    ```
    
-   If you use the following syntax, the function converts a measurement from the current unit to a specified unit.
    
    ```
    convert_data_size(x, unit)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The measurement. The value of this parameter is of the string type.

_unit_

The unit of stored data. Valid values: KB, MB, GB, PB, TB, EB, ZB, and YB.

### Return value type

The string type.

### Examples

-   Example 1: Convert 1,200 KB to a measurement in a different unit.
    
    -   Query statement
        
        ```
        * | SELECT convert_data_size('1200KB')
        ```
        
    -   Query and analysis results![convert_data_size](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2584590461/p337231.png)
        
-   Example 2: Convert the value of the body\_bytes\_sent field in byte to a measurement in KB. The body\_bytes\_sent field indicates the number of bytes that are sent to the client.
    
    -   Query statement
        
        ```
        * | select convert_data_size(format_data_size(body_bytes_sent, 'KB'))
        ```
        
    -   Query and analysis results![convert_data_size](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2584590461/p337043.png)
        

## format\_data\_size function

The format\_data\_size function converts a measurement in byte to a measurement in a specified unit.

### Syntax

```
format_data_size(x, unit)
```

### Parameters

**Parameter**

**Description**

_x_

The measurement in byte. The value of this parameter is of the bigint type.

_unit_

The unit of stored data. Valid values: KB, MB, GB, PB, TB, EB, ZB, and YB.

### Return value type

The string type.

### Examples

-   Example 1: Convert the value of the body\_bytes\_sent field in byte to a measurement in KB. The body\_bytes\_sent field indicates the number of bytes that are sent to the client.
    
    -   Sample field
        
        ```
        body_bytes_sent:4619
        ```
        
    -   Query statement
        
        ```
        * | select format_data_size(body_bytes_sent, 'KB')
        ```
        
    -   Query and analysis results![ format_data_size](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2584590461/p337017.png)
        
-   Example 2: Convert the total number of bytes to a measurement in GB. The total number of bytes is calculated by adding up all the values of the body\_bytes\_sent field by using the sum function. The body\_bytes\_sent field indicates the number of bytes that are sent to the client.
    
    -   Sample field
        
        ```
        body_bytes_sent:4619
        ```
        
    -   Query statement
        
        ```
        * | select format_data_size(sum(body_bytes_sent), 'GB')
        ```
        
    -   Query and analysis results![format_data_size](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2584590461/p337020.png)
        

## parse\_data\_size function

The parse\_data\_size function converts the current measurement to a measurement in byte.

### Syntax

```
parse_data_size(x)
```

### Parameters

**Parameter**

**Description**

_x_

The measurement. The value of this parameter is of the string type.

### Return value type

The decimal type.

### Examples

Convert 1,024 KB to a measurement in byte.

-   Query statement
    
    ```
    *| SELECT parse_data_size('1024KB')
    ```
    
-   Query and analysis results![parse_data_size](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2584590461/p337112.png)
    

## to\_data\_size\_B function

The to\_data\_size\_B function converts the current measurement to a measurement in byte.

### Syntax

```
to_data_size_B(x)
```

### Parameters

**Parameter**

**Description**

_x_

The measurement. The value of this parameter is of the string type.

### Return value type

The double type.

### Examples

Convert 1,024 KB to a measurement in byte.

-   Query statement
    
    ```
    * | select to_data_size_B('1024KB')
    ```
    
-   Query and analysis results![to_data_size_B](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2584590461/p337074.png)
    

## to\_data\_size\_KB function

The to\_data\_size\_KB function converts the current measurement to a measurement in KB.

### Syntax

```
to_data_size_KB(x)
```

### Parameters

**Parameter**

**Description**

_x_

The measurement. The value of this parameter is of the string type.

### Return value type

The double type.

### Examples

Convert the value of the body\_bytes\_sent field to a measurement in KB. The body\_bytes\_sent field indicates the number of bytes that are sent to the client.

-   Query statement
    
    ```
    * | select to_data_size_KB(format_data_size(body_bytes_sent, 'KB'))
    ```
    
-   Query and analysis results![to_data_size_KB](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2584590461/p337075.png)
    

## to\_data\_size\_MB function

The to\_data\_size\_MB function converts the current measurement to a measurement in MB.

### Syntax

```
to_data_size_MB(x)
```

### Parameters

**Parameter**

**Description**

_x_

The measurement. The value of this parameter is of the string type.

### Return value type

The double type.

### Examples

Convert the total number of bytes to a measurement in MB. The total number of bytes is calculated by adding up all the values of the body\_bytes\_sent field by using the sum function. The body\_bytes\_sent field indicates the number of bytes that are sent to the client.

-   Query statement
    
    ```
    * | select to_data_size_MB(format_data_size(sum(body_bytes_sent), 'KB'))
    ```
    
-   Query and analysis results![to_data_size_MB](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2584590461/p337067.png)
    

## to\_data\_size\_GB function

The to\_data\_size\_GB function converts the current measurement to a measurement in GB.

### Syntax

```
to_data_size_GB(x)
```

### Parameters

**Parameter**

**Description**

_x_

The measurement. The value of this parameter is of the string type.

### Return value type

The double type.

### Examples

Convert the total number of bytes to a measurement in GB. The total number of bytes is calculated by adding up all the values of the body\_bytes\_sent field by using the sum function. The body\_bytes\_sent field indicates the number of bytes that are sent to the client.

-   Query statement
    
    ```
    * | select to_data_size_GB(format_data_size(sum(body_bytes_sent), 'KB'))
    ```
    
-   Query and analysis results![to_data_size_GB](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3584590461/p337060.png)
    

## to\_data\_size\_TB function

The to\_data\_size\_TB function converts the current measurement to a measurement in TB.

### Syntax

```
to_data_size_TB(x)
```

### Parameters

**Parameter**

**Description**

_x_

The measurement. The value of this parameter is of the string type.

### Return value type

The double type.

### Examples

Convert the total number of bytes to a measurement in TB. The total number of bytes is calculated by adding up all the values of the body\_bytes\_sent field by using the sum function. The body\_bytes\_sent field indicates the number of bytes that are sent to the client.

-   Query statement
    
    ```
    * | select to_data_size_TB(format_data_size(sum(body_bytes_sent), 'KB'))
    ```
    
-   Query and analysis results![to_data_size_TB](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3584590461/p337062.png)
    

## to\_data\_size\_PB function

The to\_data\_size\_PB function converts the current measurement to a measurement in PB.

### Syntax

```
to_data_size_PB(x)
```

### Parameters

**Parameter**

**Description**

_x_

The measurement. The value of this parameter is of the string type.

### Return value type

The double type.

### Examples

Convert 1,048,576 GB to a measurement in PB.

-   Query statement
    
    ```
    *| SELECT to_data_size_PB('1048576GB')
    ```
    
-   Query and analysis results![to_data_size_PB](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3584590461/p337094.png)
    

## format\_duration function

The format\_duration function converts a time interval in seconds to a readable string.

### Syntax

```
format_duration(x)
```

### Parameters

**Parameter**

**Description**

_x_

The time interval. The value of this parameter is of the double type.

### Return value type

The string type.

### Examples

Convert 235 seconds to a string in the `3 minutes, 55 seconds` format.

-   Query statement
    
    ```
    * | SELECT format_duration(235)
    ```
    
-   Query and analysis results![format_duration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3584590461/p341430.png)
    

## parse\_duration function

The parse\_duration function converts a time interval to a time interval in the `0 00:00:00.000` format.

### Syntax

```
parse_duration(x)
```

### Parameters

**Parameter**

**Description**

_x_

The time interval. The value of this parameter is of the string type.

### Return value type

The interval type.

### Examples

Convert 1,340 milliseconds to a time interval in the `0 00:00:01.340` format.

-   Query statement
    
    ```
    * | SELECT parse_duration('1340ms')
    ```
    
-   Query and analysis results![parse_duration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3584590461/p341436.png)
    

## to\_days function

The to\_days function converts a time interval to a time interval in days.

### Syntax

```
to_days(x)
```

### Parameters

**Parameter**

**Description**

_x_

The time interval. The value of this parameter is of the varchar type.

### Return value type

The double type.

### Examples

Convert 192,848 seconds to a time interval in days.

-   Query statement
    
    ```
    *| SELECT to_days('192848s')
    ```
    
-   Query and analysis results![to_day](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3584590461/p341392.png)
    

## to\_hours function

The to\_hours function converts a time interval to a time interval in hours.

### Syntax

```
to_hours(x)
```

### Parameters

**Parameter**

**Description**

_x_

The time interval. The value of this parameter is of the varchar type.

### Return value type

The double type.

### Examples

Convert 1.2 days to a time interval in hours.

-   Query statement
    
    ```
    * | SELECT to_hours('1.2d')
    ```
    
-   Query and analysis results![to_hours](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3584590461/p341407.png)
    

## to\_microseconds function

The to\_microseconds function converts a time interval to a time interval in microseconds.

### Syntax

```
to_microseconds(x)
```

### Parameters

**Parameter**

**Description**

_x_

The time interval. The value of this parameter is of the varchar type.

### Return value type

The double type.

### Examples

Convert 3,600 nanoseconds to a time interval in microseconds.

-   Query statement
    
    ```
    * | SELECT to_microseconds('3600ns')
    ```
    
-   Query and analysis results![to_microseconds](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3584590461/p341408.png)
    

## to\_milliseconds function

The to\_milliseconds function converts a time interval to a time interval in milliseconds.

### Syntax

```
to_milliseconds(x)
```

### Parameters

**Parameter**

**Description**

_x_

The time interval. The value of this parameter is of the varchar type.

### Return value type

The double type.

### Examples

Convert 1.2 seconds to a time interval in milliseconds.

-   Query statement
    
    ```
    * | SELECT to_milliseconds('1.2s')
    ```
    
-   Query and analysis results![to_milliseconds](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3584590461/p341410.png)
    

## to\_minutes function

The to\_minutes function converts a time interval to a time interval in minutes.

### Syntax

```
to_minutes(x)
```

### Parameters

**Parameter**

**Description**

_x_

The time interval. The value of this parameter is of the varchar type.

### Return value type

The double type.

### Examples

Convert 1.2 hours to a time interval in minutes.

-   Query statement
    
    ```
    * | SELECT to_minutes('1.2h')
    ```
    
-   Query and analysis results![to_minutes](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3584590461/p341411.png)
    

## to\_most\_succinct\_time\_unit function

The to\_most\_succinct\_time\_unit function converts a time interval from the current unit to the optimal unit. The system automatically determines the optimal unit and returns a time interval in the optimal unit.

### Syntax

```
to_most_succinct_time_unit(x)
```

### Parameters

**Parameter**

**Description**

_x_

The time interval. The value of this parameter is of the varchar type.

### Return value type

The varchar type.

### Examples

Convert 1,340 milliseconds to a time interval in seconds.

-   Query statement
    
    ```
    * | SELECT to_most_succinct_time_unit('1340ms')
    ```
    
-   Query and analysis results![to_most_succinct_time_unit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3584590461/p341412.png)
    

## to\_nanoseconds function

The to\_nanoseconds function converts a time interval to a time interval in nanoseconds.

### Syntax

```
to_nanoseconds(x)
```

### Parameters

**Parameter**

**Description**

_x_

The time interval. The value of this parameter is of the varchar type.

### Return value type

The double type.

### Examples

Convert 125 milliseconds to a time interval in nanoseconds.

-   Query statement
    
    ```
    * | SELECT to_nanoseconds('125ms')
    ```
    
-   Query and analysis results![to_nanoseconds](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3584590461/p341424.png)
    

## to\_seconds function

The to\_seconds function converts a time interval to a time interval in seconds.

### Syntax

```
to_seconds(x)
```

### Parameters

**Parameter**

**Description**

_x_

The time interval. The value of this parameter is of the varchar type.

### Return value type

The double type.

### Examples

Convert 1,340 milliseconds to a time interval in seconds.

-   Query statement
    
    ```
    * | SELECT to_seconds('1340ms')
    ```
    
-   Query and analysis results![to_seconds](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4584590461/p341413.png)
