This topic describes the syntax of map functions and operators. This topic also provides examples on how to use the functions and operators.

The following table describes the map functions and operators that are supported by Simple Log Service.

**Important** If you want to use strings in analytic statements, you must enclose strings in single quotation marks (''). Strings that are not enclosed or enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Function**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

[Subscript operator](#section-fpn-fsd-rxh)

\[_x_\]

Returns the value of a key from a map.

√

×

[cardinality function](#section-0nm-iy2-da2)

cardinality(_x_)

Returns the size of a map.

√

×

[element\_at function](#section-vfk-elr-juy)

element\_at(_x_, _key_)

Returns the value of a key from a map.

√

√

[histogram function](#section-1xz-lm7-hp1)

histogram(_x_)

Groups query and analysis results and returns data in the JSON format.

√

×

[histogram\_u function](#section-dif-xc9-s5s)

histogram\_u(_x_)

Groups query and analysis results and returns data in multiple rows and multiple columns.

√

×

[map function](#section-ts6-0ub-rlt)

map()

Returns an empty map.

√

√

map(_x_, _y_)

Returns a map that is created by using two arrays.

√

√

[map\_agg function](#section-0r1-qeq-9gs)

map\_agg(_x_, _y_)

Returns a map that is created by using _x_ and _y_. _x_ is the key in the map. _y_ is the value of the key in the map. If _y_ has multiple values, a random value is extracted as the value of the key.

√

×

[map\_concat function](#section-g30-0b6-nz0)

map\_concat(_x_, _y_...)

Returns the union of multiple maps.

√

√

[map\_filter function](#section-zsf-pks-2v2)

map\_filter(_x_, _lambda\_expression_)

Filters elements in a map based on a lambda expression.

√

√

[map\_keys function](#section-9ou-tm9-n5g)

map\_keys(_x_)

Returns an array that consists of all keys in a map.

√

√

[map\_values function](#section-i3m-g8q-a73)

map\_values(_x_)

Returns an array that consists of all values in a map.

√

√

[multimap\_agg function](#section-f21-eg3-sk1)

multimap\_agg(_x_, _y_)

Returns a multimap that is created by using _x_ and _y_. _x_ is a key in the multimap. _y_ is the value of the key in the multimap. The value is of the array type. If _y_ has multiple values, all the values are extracted as the values of the key.

√

×

## Subscript operator

The subscript operator returns the value of a key from a map.

### Syntax

```
[x]
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the varchar type.

### Return value type

An arbitrary data type.

### Examples

In a log that is transformed by a data transformation job, the value of the etl\_context field is of the map type. You can use the subscript operator to obtain the value of the project key from the value of the etl\_context field.

-   Sample fields
    
    ```
    etl_context: {
     project:"datalab-148****6461-cn-chengdu"
     logstore:"internal-etl-log"
     consumer_group:"etl-83****4d1965"
     consumer:"etl-b2d40ed****c8d6-291294"
     shard_id:"0" }
    ```
    
-   Query statement
    
    ```
    * | SELECT try_cast(json_parse(etl_context) AS map(varchar, varchar))['project']
    ```
    
-   Query and analysis results![下标运算符](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0192182361/p303793.png)
    

## cardinality function

The cardinality function returns the size of a map.

### Syntax

```
cardinality(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the map type.

### Return value type

The bigint type.

### Examples

Use the histogram function to obtain the number of requests for each request method. Then, use the cardinality function to obtain the number of request methods.

-   Query statement
    
    ```
    * |
    SELECT
      histogram(request_method) AS request_method,
      cardinality(histogram(request_method)) AS "kinds"
    ```
    
-   Query and analysis results![cardinality](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0192182361/p296534.png)
    

## element\_at function

The element\_at function returns the value of a key from a map.

### Syntax

```
element_at(x, key)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the map type.

_key_

The value of this parameter is a key in a map.

### Return value type

An arbitrary data type.

### Examples

Use the histogram function to obtain the number of requests for each request method. Then, use the element\_at function to obtain the value of the DELETE field.

-   Query statement
    
    ```
    * |
    SELECT
      histogram(request_method) AS request_method,
      element_at(histogram(request_method),'DELETE') AS "count"
    ```
    
-   Query and analysis results![element_at](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3948092361/p303259.png)
    

## histogram function

The histogram function groups query and analysis results and returns data in the JSON format. This function is equivalent to `* | SELECT count(*) GROUP BY x`.

### Syntax

```
histogram(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

### Return value type

The map type.

### Examples

Use the histogram function to obtain the number of requests for each request method.

-   Query statement
    
    ```
    * | SELECT histogram(request_method) AS request_method
    ```
    
-   Query and analysis results![histogram](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0192182361/p242188.png)
    

## histogram\_u function

The histogram\_u function groups query and analysis results and returns data in multiple rows and multiple columns.

### Syntax

```
histogram_u(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

### Return value type

The bigint type.

### Examples

Use the histogram\_u function to obtain the number of requests for each request method, and then display the number on a column chart.

-   Query statement
    
    ```
    *|SELECT  histogram_u(request_method) as request_method
    ```
    
-   Query and analysis results![histogram_u](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0192182361/p242220.png)
    

## map function

The map function returns an empty map or returns a map that is created by using two arrays.

### Syntax

-   The following syntax of the map function returns an empty map:
    
    ```
    map()
    ```
    
-   The following syntax of the map function returns a map that is created by using two arrays:
    
    ```
    map(x,y) 
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_y_

The value of this parameter is of the array type.

### Return value type

The map type.

### Examples

-   Example 1: The class field specifies classes. The number field specifies the number of students in the classes. The values of the two fields are of the array type. Use the map function to create a map based on the values of the two fields. In the returned result, each class is mapped to the number of students in the class.
    
    -   Sample fields
        
        ```
        class:["class01","class02","class03","class04","class05"]
        number:[49,50,45,47,50]
        ```
        
    -   Query statement
        
        ```
        * | SELECT map(try_cast(json_parse(class) AS array(varchar)) ,try_cast(json_parse(number) AS array(bigint)))
        ```
        
    -   Query and analysis results![map](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0192182361/p303301.png)
        
-   Example 2: Return an empty map.
    
    -   Query statement
        
        ```
        *| SELECT map()
        ```
        
    -   Query and analysis results![map](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0192182361/p303267.png)
        

## map\_agg function

The map\_agg function returns a map that is created by using _x_ and _y_. _x_ is a key in the map. _y_ is the value of the key in the map. If _y_ has multiple values, a random value is extracted as the value of the key.

### Syntax

```
map_agg(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

_y_

The value of this parameter is of an arbitrary data type.

### Return value type

The map type.

### Examples

Extract the values of the request\_method and request\_time fields, and then use the extracted values to create a map. The value of the request\_method field is a key in the map. The value of the request\_time field is the value of the key in the map.

-   Sample fields
    
    ```
    request_method:POST
    request_time:80
    ```
    
-   Query statement
    
    ```
    * | SELECT map_agg(request_method,request_time)
    ```
    
-   Query and analysis results![map_agg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0192182361/p242224.png)
    

## map\_concat function

The map\_concat function returns the union of multiple maps.

### Syntax

```
map_concat(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the map type.

_y_

The parameter can be of the map data type.

### Return value type

The map type.

### Examples

In a log that is transformed by a data transformation job, the values of the etl\_context and progress fields are of the map type. You can use the map\_concat function to obtain the union of the field values.

-   Sample fields
    
    ```
    etl_context: {
     project:"datalab-148****6461-cn-chengdu"
     logstore:"internal-etl-log"
     consumer_group:"etl-83****4d1965"
     consumer:"etl-b2d40ed****c8d6-291294"
     shard_id:"0" }
    progress: {
     accept:3
     dropped:0
     delivered:3
     failed:0 }
    ```
    
-   Query statement
    
    ```
    * |
    SELECT
      map_concat(
        cast (
          json_parse(etl_context) AS map(varchar, varchar)
        ),
        cast (json_parse(progress) AS map(varchar, varchar))
      )
    ```
    
-   Query and analysis results![map_concat](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1192182361/p297065.png)
    

## map\_filter function

The map\_filter function filters elements in a map based on a lambda expression.

### Syntax

```
map_filter(x, lambda_expression)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the map type.

_lambda\_expression\_expression_

The lambda expression. For more information, see [Lambda expressions](/help/en/sls/lambda-expressions#reference-zwt-jmq-zdb).

### Return value type

The map type.

### Examples

Create a map that does not contain null values from two arrays by using the lambda expression `(k, v) -> v is not null`.

-   Query statement
    
    ```
    * | SELECT map_filter(map(array[10, 20, 30], array['a', NULL, 'c']), (k, v) -> v is not null)
    ```
    
-   Query and analysis results![map_filter](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1192182361/p303830.png)
    

## map\_keys function

The map\_keys function returns an array that consists of all keys in a map.

### Syntax

```
map_keys(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the map type.

### Return value type

The array type.

### Examples

In a log that is transformed by a data transformation job, the value of the etl\_context field is of the map type. You can use the map\_keys function to obtain all keys from the value of the etl\_context field.

-   Sample fields
    
    ```
    etl_context: {
     project:"datalab-148****6461-cn-chengdu"
     logstore:"internal-etl-log"
     consumer_group:"etl-83****4d1965"
     consumer:"etl-b2d40ed****c8d6-291294"
     shard_id:"0" }
    ```
    
-   Query statement
    
    ```
    * | SELECT map_keys(try_cast(json_parse(etl_context) AS map(varchar, varchar)))
    ```
    
-   Query and analysis results![map_keys](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1192182361/p303746.png)
    

## map\_values function

The map\_values function returns an array that consists of all values in a map.

### Syntax

```
map_values(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the map type.

### Return value type

The array type.

### Examples

In a log that is transformed by a data transformation job, the value of the etl\_context field is of the map type. You can use the map\_values function to obtain the values of all keys from the value of the etl\_context field.

-   Sample fields
    
    ```
    etl_context: {
     project:"datalab-148****6461-cn-chengdu"
     logstore:"internal-etl-log"
     consumer_group:"etl-83****4d1965"
     consumer:"etl-b2d40ed****c8d6-291294"
     shard_id:"0" }
    ```
    
-   Query statement
    
    ```
    * | SELECT map_values(try_cast(json_parse(etl_context) AS map(varchar, varchar)))
    ```
    
-   Query and analysis results![map_values](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1192182361/p303314.png)
    

## multimap\_agg function

The multimap\_agg function returns a multimap that is created by using _x_ and _y_. _x_ is a key in the multimap. _y_ is the value of the key in the multimap. The value is of the array type. If _y_ has multiple values, all the values are extracted as the values of the key.

### Syntax

```
multimap_agg(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

_y_

The value of this parameter is of an arbitrary data type.

### Return value type

The map type.

### Examples

Extract all values of the request\_method and request\_time fields, and then use the extracted values to create a multimap. The value of the request\_method field is a key in the multimap. The value of the request\_time field is the value of the key in the multimap. The value of the key is of the array type.

-   Sample fields
    
    ```
    request_method:POST
    request_time:80
    ```
    
-   Query statement
    
    ```
    * | SELECT multimap_agg(request_method,request_time)
    ```
    
-   Query and analysis results![multimap_agg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1192182361/p242228.png)
