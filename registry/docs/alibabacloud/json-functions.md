This topic describes the syntax of JSON functions and provides examples.

Simple Log Service (SLS) supports the following JSON functions.

**Important**

-   In SLS query statements, you must enclose strings in single quotation marks (''). Characters that are not enclosed in single quotation marks, or are enclosed in double quotation marks (""), are treated as field or column names. For example, `'status'` represents the string 'status', whereas `status` or `"status"` represents the log field named 'status'.
    
-   If the value of a log field is in JSON format and you need to expand it into multiple rows, use the UNNEST syntax. For more information, see [UNNEST clause](/help/en/sls/unnest-clause#reference-z24-zyf-h2b).
    
-   If a string cannot be parsed as JSON, the function returns null.
    
-   If a JSON log is truncated during collection, using a JSON function on it causes an error and aborts the query. To handle this error, use a TRY expression to catch the exception. This allows the query to continue. For example, `* | select message, try(json_parse(message))`. For more information, see [TRY expression](/help/en/sls/conditional-expressions#section-ylv-4pq-tdb).
    

**Function name**

**Syntax**

**Description**

SQL support

SPL support

[json\_array\_contains function](#section-e8j-1om-8k0)

json\_array\_contains(_x_, _value_)

Checks whether a JSON array contains a specific value.

√

√

[json\_array\_get function](#section-jjn-dv3-4y9)

json\_array\_get(_x_, _index_)

Returns the element at a specified index in a JSON array.

√

×

[json\_array\_length function](#section-697-fqh-nng)

json\_array\_length(_x_)

Calculates the number of elements in a JSON array.

√

√

[json\_extract function](#section-uqz-6yr-bun)

json\_extract(_x_, json\_path)

Extracts a set of JSON values, which can be an array or an object, from a JSON object or JSON array.

√

√

[json\_extract\_scalar function](#section-8jj-a1y-076)

json\_extract\_scalar(_x_, _json\_path_)

Extracts a set of scalar values, such as strings, integers, or Booleans, from a JSON object or JSON array. This function is similar to the json\_extract function.

√

√

[json\_extract\_bool function](#362158526d8q1)

json\_extract\_bool(x, json\_path)

Extracts a Boolean value from a JSON object or JSON array.

√

×

[json\_extract\_long function](#5b2df973f3gr3)

json\_extract\_long(x, json\_path)

Extracts a bigint value from a JSON object or JSON array.

√

×

[json\_extract\_double function](#8858b03ab3b34)

json\_extract\_double(x, json\_path)

Extracts a double value from a JSON object or JSON array.

√

×

[json\_format function](#section-tfz-3s3-mac)

json\_format(_x_)

Converts a JSON object to a string.

√

√

[json\_parse function](#section-c1r-zzw-94y)

json\_parse(_x_)

Converts a string to a JSON object.

√

√

[json\_size function](#section-shf-55f-i4u)

json\_size(_x_, _json\_path_)

Calculates the number of elements in a JSON object or array.

√

√

[json\_object\_flatten function](#021ed56c02bgm)

json\_object\_flatten(x)

Flattens a JSON object into a single-layer key-value structure.

√

×

## json\_array\_contains function

The json\_array\_contains function checks whether a JSON array contains a specific value.

### Syntax

```
json_array_contains(x, value)
```

### Parameters

**Parameter**

**Description**

_x_

The parameter value is a JSON array.

_value_

A numeric value.

### Return value type

boolean

### Example

This example checks whether the JSON array \[1, 2, 3\] contains the value 2.

-   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBqc29uX2FycmF5X2NvbnRhaW5zKCdbMSwgMiwgM10nLCAyKQ%3D%3D))
    
    ```
    * | SELECT json_array_contains('[1, 2, 3]', 2)
    ```
    
-   Query result![json_array_contains](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9851161361/p294959.png)
    

## json\_array\_get function

The json\_array\_get function returns the element at a specified index in a JSON array.

### Syntax

```
json_array_get(x, index)
```

### Parameters

**Parameter**

**Description**

_x_

The parameter value is a JSON array.

_index_

The index of the JSON element. The index starts from 0.

### Return value type

varchar

### Example

This example returns the element at index 1 from the JSON array \["a", \[3, 9\], "c"\].

-   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBqc29uX2FycmF5X2dldCgnWyJhIiwgWzMsIDldLCAiYyJdJywgMSk%3D))
    
    ```
    * | SELECT json_array_get('["a", [3, 9], "c"]', 1)
    ```
    
-   Query result![json_array_get](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9851161361/p294990.png)
    

## json\_array\_length function

The json\_array\_length function calculates the number of elements in a JSON array.

### Syntax

```
json_array_length(x)
```

### Parameters

**Parameter**

**Description**

_x_

The parameter value is a JSON array.

### Return value type

bigint

### Examples

-   Example 1: This example calculates the number of JSON elements in the Results field.
    
    -   Sample field
        
        ```
        Results:[{"EndTime":1626314920},{"FireResult":2}]
        ```
        
    -   Query statement
        
        ```
        * | SELECT json_array_length(Results)
        ```
        
    -   Query result![json_array_length](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9851161361/p294953.png)
        
-   Example 2: This example calculates the number of JSON elements in the time field.
    
    -   Sample field
        
        ```
        time:["time_local","request_time","upstream_response_time"]
        ```
        
    -   Query statement
        
        ```
        * | SELECT json_array_length(time)
        ```
        
    -   Query result![json_array_length](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9851161361/p294955.png)
        

## json\_extract function

The json\_extract function extracts a set of JSON values, which can be an array or an object, from a JSON object or JSON array.

**Important**

The json\_extract function reports an error for invalid JSON types. In such cases, use the json\_extract\_scalar function instead.

### Syntax

```
json_extract(x, json_path)
```

### Parameters

**Parameter**

**Description**

_x_

The parameter value is a JSON object or JSON array.

_json\_path_

The JSON path, such as $.store.book\[0\].title. For more information, see [Set the json\_path](/help/en/sls/faq-about-the-query-and-analysis-of-json-logs#section-9ap-q5v-6zq).

### Return value type

A string in the JSON format.

### Examples

#### **SQL**

This example extracts the value of the `EndTime` field from the `Results` field.

-   Sample field
    
    ```
    Results:[{"EndTime":1626314920},{"FireResult":2}]
    ```
    
-   Query statement
    
    ```
    * | SELECT json_extract(Results, '$.0.EndTime')
    ```
    
-   Query result![json_extract](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4577951361/p295024.png)
    

#### **SPL**

This example extracts the value of the `EndTime` field from the `Results` field.

-   Sample field
    

```
Results:[{"EndTime":1626314920},{"FireResult":2}]
```

-   SPL statement
    

```
* | extend a = json_extract(Results, '$.0.EndTime')
```

-   SPL result
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8298109071/p750351.png)

## json\_extract\_scalar function

The json\_extract\_scalar function extracts a scalar value, such as a string, integer, or Boolean, from a JSON object or JSON array.

### Syntax

```
json_extract_scalar(x, json_path)
```

### Parameters

**Parameter**

**Description**

_x_

The parameter value is a JSON object or JSON array.

_json\_path_

The JSON path, such as $.store.book\[0\].title. For more information, see [Set the json\_path](/help/en/sls/faq-about-the-query-and-analysis-of-json-logs#section-9ap-q5v-6zq).

### Return value type

varchar

### Examples

#### **SQL**

This example extracts the value of the `RawResultCount` field from the `Results` field and converts the value to the bigint type to calculate the sum.

-   Field examples
    
    ```
    Results:[{"EndTime":1626314920},{"RawResultCount":1}]
    ```
    
-   Query statement
    
    ```
    * | SELECT sum(cast(json_extract_scalar(Results,'$.1.RawResultCount') AS bigint) )
    ```
    
-   Query result![json_extract_scalar](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5871161361/p295030.png)
    

#### **SPL**

This example extracts the value of the `RawResultCount` field from the `Results` field.

-   Sample field
    

```
Results:[{"EndTime":1626314920},{"RawResultCount":1}]
```

-   SPL statement
    

```
* | extend a = json_extract_scalar(Results, '$.1.RawResultCount')
```

-   SPL result![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7298109071/p750367.png)
    

## json\_extract\_bool function

The json\_extract\_bool function extracts a Boolean value from a JSON object or JSON array. If the value cannot be extracted, `null` is returned.

### Syntax

```
json_extract_bool(x, json_path)
```

### Parameters

**Parameter**

**Description**

_x_

The parameter value is of the JSON type.

_json\_path_

The JSON path, such as $.store.book\[0\].title. For more information, see [Set the json\_path](/help/en/sls/faq-about-the-query-and-analysis-of-json-logs#section-9ap-q5v-6zq).

### Return value type

boolean

### Example

This example extracts a Boolean value from the JSON array `Results`.

-   Sample field
    
    ```
    Results:[{"ret":true},{"status":FALSE}]
    ```
    
-   Query statement
    
    ```
    * | SELECT json_extract_bool(Results, '$.0.ret')
    ```
    
-   Query result
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8985264371/p890926.png)
    

## json\_extract\_long function

The json\_extract\_long function extracts a bigint value from a JSON object or JSON array. If the value cannot be extracted, `null` is returned.

### Syntax

```
json_extract_long(x, json_path)
```

### Parameters

**Parameter**

**Description**

_x_

The parameter value is of the JSON type.

_json\_path_

The JSON path, such as $.store.book\[0\].title. For more information, see [Set the json\_path](/help/en/sls/faq-about-the-query-and-analysis-of-json-logs#section-9ap-q5v-6zq).

### Return value type

bigint

### Example

This example extracts a bigint value from the JSON array `Results`.

-   Sample field
    
    ```
    Results:[{"EndTime":1626314920},{"FireResult":2}]
    ```
    
-   Query statement
    
    ```
    * | SELECT json_extract_long(Results, '$.0.EndTime')
    ```
    
-   Query result
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8985264371/p890940.png)
    

## json\_extract\_double function

The json\_extract\_double function extracts a double value from a JSON object or JSON array. If the value cannot be extracted, `null` is returned.

### Syntax

```
json_extract_double(x, json_path)
```

### Parameters

**Parameter**

**Description**

_x_

The parameter value is of the JSON type.

_json\_path_

The JSON path, such as $.store.book\[0\].title. For more information, see [Set the json\_path](/help/en/sls/faq-about-the-query-and-analysis-of-json-logs#section-9ap-q5v-6zq).

### Return value type

double

### Example

This example extracts a double value from the JSON array `Results`.

-   Sample field
    
    ```
    Results:[{"EndTime":1626314920},{"FireResult":2}]
    ```
    
-   Query statement
    
    ```
    * | SELECT json_extract_double(Results, '$.0.EndTime')
    ```
    
-   Query result
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8985264371/p890944.png)
    

## json\_format function

The json\_format function converts a JSON object to a string.

### Syntax

```
json_format(x)
```

### Parameters

**Parameter**

**Description**

_x_

The parameter value is of the JSON type.

### Return value type

varchar

### Example

This example converts the JSON array \[1,2,3\] to the string '\[1, 2, 3\]'.

-   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBqc29uX2Zvcm1hdChqc29uX3BhcnNlKCdbMSwgMiwgM10nKSk%3D))
    
    ```
    * | SELECT json_format(json_parse('[1, 2, 3]'))
    ```
    
-   Query result![json_format](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4577951361/p294962.png)
    

## json\_parse function

The json\_parse function converts a string to the JSON type and validates that the string is in a valid JSON format. To extract a value from a JSON object, use the json\_extract\_scalar function.

### Syntax

```
json_parse(x)
```

### Parameters

**Parameter**

**Description**

_x_

The parameter value is a string.

### Return value type

JSON

### Examples

#### **SQL**

-   Example 1
    
    This example converts the string '\[1,2,3\]' to the JSON array \[1, 2, 3\].
    
    -   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DICogfCBTRUxFQ1QganNvbl9wYXJzZSgnWzEsIDIsIDNdJyk%3D))
        
        ```
         * | SELECT json_parse('[1, 2, 3]')
        ```
        
    -   Query result![json_format](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4577951361/p294962.png)
        
-   Example 2
    
    This example extracts each subfield from the `logging` field.
    
    -   Sample field![json_parse](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8908614961/p667959.png)
        
    -   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/internal-etl-log?encode%3Dbase64%26queryString%3DKnwgU0VMRUNUIG1hcF9rZXlzKHRyeV9jYXN0KGpzb25fcGFyc2UobG9nZ2luZykgQVMgbWFwKHZhcmNoYXIsIGpzb24pKSk%3D))
        
        ```
        *| SELECT map_keys(try_cast(json_parse(logging) AS map(varchar, json)))
        ```
        
    -   Query result![json_parse](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8908614961/p667960.png)
        

#### **SPL**

This example converts the string `[1,2,3]` to the JSON array `[1, 2, 3]`.

-   SPL statement
    

```
 * | extend a = json_parse('[1, 2, 3]')
```

-   SPL result
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8298109071/p750370.png)

## json\_size function

The json\_size function calculates the number of elements in a JSON object or JSON array.

### Syntax

```
json_size(x, json_path)
```

### Parameters

**Parameter**

**Description**

_x_

The parameter value is a JSON object or JSON array.

_json\_path_

The JSON path, such as $.store.book\[0\].title. For more information, see [Set the json\_path](/help/en/sls/faq-about-the-query-and-analysis-of-json-logs#section-9ap-q5v-6zq).

### Return value type

bigint

### Example

This example returns the number of elements in the `status` field.

-   Sample field
    
    ```
    Results:[{"EndTime":1626314920,"FireResult":2,"RawResults":[{"_col0":"1094"}]}]
    ```
    
-   Query statement
    
    ```
    * | SELECT json_size(Results, '$.0.RawResults')
    ```
    
-   Query result![json_size](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5577951361/p295005.png)
    

## **json\_object\_flatten function**

The json\_object\_flatten function flattens a JSON object into a single-layer key-value structure.

### **Syntax**

```
json_object_flatten(x)
```

### **Parameters**

**Parameter**

**Description**

x

The parameter value is of the JSON type. If the JSON object is not an object, null is returned.

### **Return value type**

map(varchar, varchar)

### **Example**

This example flattens the JSON content of the content field into single-layer key-value pairs.

-   Sample field
    
    ```
    content: '{"Time":1626314920,"Info":[{"count":"1"}],"Body":"this is test"}'
    ```
    
-   Query statement
    
    ```
    select json_object_flatten(content) as data from  (values '{"Time":1626314920,"Info":[{"count":"1"}],"Body":"this is test"}') t (content) limit 1;
    ```
    
-   Outputs
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1019643571/p989937.png)
