This topic describes the basic syntax and provides examples of regular expression functions.

## **Overview of regular expression functions**

Simple Log Service supports the following regular expression functions. The regular expressions use the [RE2 syntax](https://github.com/google/re2/wiki/syntax).

**Important** If you want to use strings in analytic statements, you must enclose strings in single quotation marks (''). Strings that are not enclosed or enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Function**

**Syntax**

**Description**

**SQL support**

**SPL support**

[regexp\_extract\_all function](#section-rra-f3x-ek1)

regexp\_extract\_all(_x_, _regular expression_)

Extracts substrings that match a regular expression from a source string and returns an array of the substrings.

√

×

regexp\_extract\_all(_x_, _regular expression_, _n_)

Extracts substrings that match a regular expression from a source string and returns an array of substrings that match a capturing group.

√

×

[regexp\_extract function](#section-0wa-zya-8tj)

regexp\_extract(_x_, _regular expression_)

Extracts and returns the first substring that matches a regular expression from a source string.

√

√

regexp\_extract(_x_, _regular expression_, _n_)

Extracts substrings that match a regular expression from a source string and returns the nth substring that matches a capturing group.

√

√

[regexp\_extract\_bool function](#a7d61afabftlt)

regexp\_extract\_bool(x, regular expression)

Extracts and returns a substring that matches a regular expression from a source string, and converts the substring to the BOOLEAN type. If the conversion fails, `null` is returned.

√

×

regexp\_extract\_bool(x, regular expression, n)

Extracts a substring that matches a regular expression from a source string, returns the substring that matches a capturing group, and converts the substring to the BOOLEAN type. If the conversion fails, `null` is returned.

√

×

[regexp\_extract\_long function](#a75d97e8cbgzs)

regexp\_extract\_long(x, regular expression)

Extracts and returns a substring that matches a regular expression from a source string, and converts the substring to the BIGINT type. If the conversion fails, `null` is returned.

√

×

regexp\_extract\_long(x, regular expression, n)

Extracts a substring that matches a regular expression from a source string, returns the substring that matches a capturing group, and converts the substring to the BIGINT type. If the conversion fails, `null` is returned.

√

×

[regexp\_extract\_double function](#39e0485a9e9y9)

regexp\_extract\_double(x, regular expression)

Extracts and returns the first substring that matches a regular expression from a source string, and converts the substring to the DOUBLE type. If the conversion fails, `null` is returned.

√

×

regexp\_extract\_double(x, regular expression, n)

Extracts a substring that matches a regular expression from a source string, returns the substring that matches a capturing group, and converts the substring to the DOUBLE type. If the conversion fails, `null` is returned.

√

×

[regexp\_extract\_map function](#6d3762aa5dgtt)

regexp\_extract\_map(x, regular expression, keys)

Specifies key information. The substrings that match capturing groups are used as values.

√

×

regexp\_extract\_map(x, regular expression)

The regular expression contains two capturing groups that match a key and a value.

√

×

[regexp\_like function](#section-9jf-f8b-rd1)

regexp\_like(_x_, _regular expression_)

Checks whether a source string matches a regular expression.

√

√

[regexp\_replace function](#section-un6-0un-8l7)

regexp\_replace(_x_, _regular expression_)

Deletes substrings that match a regular expression from a source string and returns the remaining substrings.

√

√

regexp\_replace(_x_, _regular expression_, _replace string_)

Replaces substrings that match a regular expression in a source string and returns the new string.

√

√

[regexp\_split function](#section-tn8-doo-c82)

regexp\_split(_x_, _regular expression_)

Splits a source string using a regular expression and returns an array of substrings.

√

×

**Note**

When you use a regular expression function to extract a single quotation mark (') from a string, you must add another single quotation mark (') to the regular expression. For more information, see [Example 3 of the regexp\_extract function](#section-0wa-zya-8tj).

## regexp\_extract\_all function

The regexp\_extract\_all function extracts substrings that match a regular expression from a source string.

### Syntax

-   Extracts all substrings that match a regular expression from a source string and returns them in an array.
    
    ```
    regexp_extract_all(x, regular expression)
    ```
    
-   Extracts substrings that match a regular expression from a source string and returns an array of substrings that match a specific capturing group.
    
    ```
    regexp_extract_all(x, regular expression, n)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value is of the VARCHAR type.

_regular expression_

A regular expression that contains capturing groups. For example, `(\d)(\d)(\d)` specifies three capturing groups.

_n_

The nth capturing group. n is an integer that starts from 1.

### Return value type

Array type.

### Examples

-   Example 1: Extract all digits from the value of the `server_protocol` field.
    
    -   Sample field
        
        ```
        server_protocol:HTTP/2.0
        ```
        
    -   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKnwgU0VMRUNUIHJlZ2V4cF9leHRyYWN0X2FsbChzZXJ2ZXJfcHJvdG9jb2wsICdcZCsnKQ%3D%3D))
        
        ```
        *| SELECT regexp_extract_all(server_protocol, '\d+')
        ```
        
    -   Query and analysis results![regexp_extract_all](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3355367261/p232875.png)
        
-   Example 2: Extract the Chrome part from the value of the `http_user_agent` field and calculate the number of requests that are initiated by the Chrome browser.
    
    -   Sample field
        
        ```
        http_user_agent:Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.803.0 Safari/535.1
        ```
        
    -   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKnwgU0VMRUNUIHJlZ2V4cF9leHRyYWN0X2FsbChodHRwX3VzZXJfYWdlbnQsICcoQ2hyb21lKScsMSkgQVMgQ2hyb21lLCBjb3VudCgqKSBBUyBjb3VudCBHUk9VUCBCWSBDaHJvbWU%3D))
        
        ```
        *| SELECT regexp_extract_all(http_user_agent, '(Chrome)',1) AS Chrome, count(*) AS count GROUP BY Chrome
        ```
        
    -   Query and analysis results![regexp_extract_all](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3355367261/p235652.png)
        

## regexp\_extract function

The regexp\_extract function extracts substrings that match a regular expression from a source string.

### Syntax

-   Extracts and returns the first substring that matches a regular expression from a source string.
    
    ```
    regexp_extract(x, regular expression)
    ```
    
-   Extracts substrings that match a regular expression from a source string and returns the substring that matches the nth capturing group.
    
    ```
    regexp_extract(x, regular expression, n)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value is of the VARCHAR type.

_regular expression_

A regular expression that contains capturing groups. For example, `(\d)(\d)(\d)` specifies three capturing groups.

_n_

The nth capturing group. n is an integer that starts from 1.

### Return value type

VARCHAR

### Examples

#### **SQL**

-   Example 1: Extract the first digit from the value of the `server_protocol` field.
    
    -   Sample field
        
        ```
        server_protocol:HTTP/2.0
        ```
        
    -   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKnxTRUxFQ1QgcmVnZXhwX2V4dHJhY3Qoc2VydmVyX3Byb3RvY29sLCAnXGQrJyk%3D))
        
        ```
        *|SELECT regexp_extract(server_protocol, '\d+')
        ```
        
    -   Query and analysis results![regexp_extract](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3355367261/p232877.png)
        
-   Example 2: Extract the file part from the value of the `request_uri` field and calculate the number of access requests for each file.
    
    -   Sample field
        
        ```
        request_uri:/request/path-3/file-5
        ```
        
    -   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCByZWdleHBfZXh0cmFjdChyZXF1ZXN0X3VyaSwgJy4qXC8oZmlsZS4qKScsIDEpIEFTIGZpbGUsIGNvdW50KCopIEFTIGNvdW50IEdST1VQIEJZIGZpbGU%3D))
        
        ```
        * | SELECT regexp_extract(request_uri, '.*\/(file.*)', 1) AS file, count(*) AS count GROUP BY file
        ```
        
    -   Query and analysis results![分析uri](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3355367261/p224727.png)
        
-   Example 3: Extract the single quotation mark (') and the digits from the value of the `message` field.
    
    -   Sample field
        
        ```
        message:error'1232
        ```
        
    -   Query statement
        
        ```
        * | SELECT regexp_extract(message, '''\d+') 
        ```
        
        **Note**
        
        When you use a regular expression function to extract a single quotation mark (') from a string, you must add another single quotation mark (') to the regular expression.
        
    -   Query and analysis results![regexp_extract函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2439476661/p494417.png)
        

#### **SPL**

-   Example 1: Extract the first digit from the value of the server\_protocol field.
    
    -   Sample field
        

```
server_protocol:HTTP/2.0
```

-   Query statement
    

```
* | extend a = regexp_extract(server_protocol, '\d+')
```

-   Query and analysis results
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8660613171/p750381.png)

-   Example 2: Extract the file part from the value of the `request_uri` field.
    
    -   Sample field
        

```
request_uri:/request/path-3/file-5
```

-   Query statement
    

```
* | extend a = regexp_extract(request_uri, '.*\/(file.*)',1)
```

-   Query and analysis results
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8660613171/p750382.png)

-   Example 3: Extract the single quotation mark (') and the digits from the value of the `message` field.
    
    -   Sample field
        

```
message:error'1232
```

-   Query statement
    

```
* | extend a = regexp_extract(message, '''\d+') 
```

**Note**

When you use a regular expression function to extract a single quotation mark (') from a string, you must add another single quotation mark (') to the regular expression.

-   Query and analysis results
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8660613171/p750380.png)

## regexp\_extract\_bool function

The regexp\_extract\_bool function extracts a substring that matches a regular expression from a source string and converts the substring to the BOOLEAN type. If the conversion fails, `null` is returned. The conversion is successful only if the substring is "true" or "false". These values are case-insensitive.

### Syntax

-   Extracts a substring that matches a regular expression from a source string and converts it to the BOOLEAN type. If the conversion fails, `null` is returned.
    
    ```
    regexp_extract_bool(x, regular expression)
    ```
    
-   Extracts a substring that matches a regular expression from a source string, returns the substring that matches a specified capturing group, and converts it to the BOOLEAN type. If the conversion fails, `null` is returned.
    
    ```
    regexp_extract_bool(x, regular expression, n)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value is of the VARCHAR type.

_regular expression_

A regular expression that contains capturing groups. For example, `(\d)(\d)(\d)` specifies three capturing groups.

_n_

The nth capturing group. n is an integer that starts from 1.

### Return value type

BOOLEAN

### Examples

-   Extract the boolean value from a field value.
    
    -   Sample field
        
        ```
        false 
        ```
        
    -   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?spm=a2c4g.11186623.0.0.2e6dcd3dsQdtmZ&dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKnwgc2VsZWN0IHJlZ2V4cF9leHRyYWN0X2Jvb2woJ2ZhbHNlJywgJ1thLXpBLVpdKycpIA%3D%3D%26filterInfo%3DeyJmamNvZGUiOiIoKSIsImZxIjoiIn0%3D%26queryTimeType%3D99%26startTime%3D1734588959%26endTime%3D1734589859))
        
        ```
        *| select regexp_extract_bool('false', '[a-zA-Z]+')
        ```
        
    -   Query and analysis results
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3126264371/p890832.png)
        

## regexp\_extract\_long function

The regexp\_extract\_long function extracts a substring that matches a regular expression from a source string and converts the substring to the BIGINT type. If the conversion fails, `null` is returned.

### Syntax

-   Extracts a substring that matches a regular expression from a source string and converts it to the BIGINT type. If the conversion fails, `null` is returned.
    
    ```
    regexp_extract_long(x, regular expression)
    ```
    
-   Extracts a substring that matches a regular expression from a source string, returns the substring that matches a specified capturing group, and converts it to the BIGINT type. If the conversion fails, `null` is returned.
    
    ```
    regexp_extract_long(x, regular expression, n)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value is of the VARCHAR type.

_regular expression_

A regular expression that contains capturing groups. For example, `(\d)(\d)(\d)` specifies three capturing groups.

_n_

The nth capturing group. n is an integer that starts from 1.

### Return value type

BIGINT

### Examples

-   Extract the number from the `time` field.
    
    -   Sample field
        
        ```
        time:19/Dec/2024:06:16:06
        ```
        
    -   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKnxTRUxFQ1QgcmVnZXhwX2V4dHJhY3RfbG9uZyh0aW1lLCAnKFxkezJ9KS8nLCAxKQ%3D%3D%26filterInfo%3DeyJmamNvZGUiOiIoKSIsImZxIjoiIn0%3D%26queryTimeType%3D99%26startTime%3D1734588959%26endTime%3D1734589859))
        
        ```
        *|SELECT regexp_extract_long(time, '(\d{2})/', 1) 
        ```
        
    -   Query and analysis results
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3126264371/p890868.png)
        

## regexp\_extract\_double function

The regexp\_extract\_double function extracts a substring that matches a regular expression from a source string and converts the substring to the DOUBLE type. If the conversion fails, `null` is returned.

### Syntax

-   Extracts a substring that matches a regular expression from a source string and converts it to the DOUBLE type. If the conversion fails, `null` is returned.
    
    ```
    regexp_extract_double(x, regular expression)
    ```
    
-   Extracts a substring that matches a regular expression from a source string, returns the substring that matches a specified capturing group, and converts it to the DOUBLE type. If the conversion fails, `null` is returned.
    
    ```
    regexp_extract_double(x, regular expression, n)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value is of the VARCHAR type.

_regular expression_

A regular expression that contains capturing groups. For example, `(\d)(\d)(\d)` specifies three capturing groups.

_n_

The nth capturing group. n is an integer that starts from 1.

### Return value type

Double data type.

### Examples

-   Extract the number from the `server_protocol` field.
    
    -   Sample field
        
        ```
        server_protocol:HTTP/1.1
        ```
        
    -   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKnxTRUxFQ1QgcmVnZXhwX2V4dHJhY3RfZG91YmxlKHNlcnZlcl9wcm90b2NvbCwgJ1xkKycpIA%3D%3D%26filterInfo%3DeyJmamNvZGUiOiIoKSIsImZxIjoiIn0%3D%26queryTimeType%3D99%26startTime%3D1734588959%26endTime%3D1734589859))
        
        ```
        *|SELECT regexp_extract_double(server_protocol, '\d+') 
        ```
        
    -   Query and analysis results
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3126264371/p890880.png)
        

## regexp\_extract\_map **function**

The regexp\_extract\_map function extracts substrings that match all capturing groups in a regular expression from a source string.

### **Syntax**

-   Specifies key information. The substrings that match the capturing groups are used as values.
    

```
regexp_extract_map(x, regular expression, keys)
```

-   The regular expression contains two capturing groups that match a key and a value.
    

```
regexp_extract_map(x, regular expression)
```

### **Parameters**

**Parameter**

**Description**

x

The value is of the VARCHAR type.

regular expression

A regular expression that contains capturing groups. For example, `(\d)(\d)(\d)` specifies three capturing groups.

keys

The names of the keys for the captured substrings. The value is of the ARRAY(VARCHAR) type. The number of elements must be the same as the number of capturing groups in the regular expression parameter.

### **Return value type**

MAP(VARCHAR, VARCHAR)

### **Examples**

-   Example 1: Extract the protocol name and version from the server\_protocol field.
    
    -   Sample field
        
        ```
        server_protocol: 'HTTP/2.0'
        ```
        
    -   Query statement
        
        ```
        select regexp_extract_map(server_protocol, '(\w+)/([\d\.]+)', array['name', 'version']) as protocol
        ```
        
    -   Query and analysis results
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8458643571/p989904.png)
        
-   Example 2: Extract all key-value pairs from the content field.
    
    -   Sample field
        
        ```
        content: 'verb="GET" URI="/healthz" latency="45.911µs" userAgent="kube-probe/1.30+"'
        ```
        
    -   Query statement
        
        ```
        select regexp_extract_map(content, '(\w+)="([^"]*)"') as args
        ```
        
    -   Output data
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8458643571/p989905.png)
        

## regexp\_like function

The regexp\_like function checks whether a source string matches a regular expression.

### Syntax

```
regexp_like(x, regular expression)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the VARCHAR type.

_regular expression_

A regular expression.

### Return value type

BOOLEAN

### Examples

#### **SQL**

Check whether the value of the server\_protocol field contains digits.

-   Sample field
    
    ```
    server_protocol:HTTP/2.0
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKnwgc2VsZWN0IHJlZ2V4cF9saWtlKHNlcnZlcl9wcm90b2NvbCwgJ1xkKycp))
    
    ```
    *| select regexp_like(server_protocol, '\d+')
    ```
    
-   Query and analysis results![regexp_like](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3355367261/p232884.png)
    

#### **SPL**

Check whether the value of the server\_protocol field contains digits.

-   Sample field
    

```
server_protocol:HTTP/2.0
```

-   Query statement
    

```
* |extend a = regexp_like(server_protocol, '\d+')
```

-   Query and analysis results
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8660613171/p750393.png)

## regexp\_replace function

Deletes or replaces substrings that match a regular expression in a source string.

### Syntax

-   Deletes substrings that match a regular expression from a source string and returns the remaining substrings.
    
    ```
    regexp_replace(x, regular expression)
    ```
    
-   Replaces substrings that match a regular expression in a source string and returns the new string.
    
    ```
    regexp_replace(x, regular expression, replace string)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value is of the VARCHAR type.

_regular expression_

A regular expression.

_replace string_

The substring that is used for replacement.

### Return value type

VARCHAR

### Examples

#### **SQL**

-   Example 1: Replace the region names that start with `cn` in the value of the `region` field with **China** and calculate the number of requests from China.
    
    -   Examples
        
        ```
        region:cn-shanghai
        ```
        
    -   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKiB8IHNlbGVjdCByZWdleHBfcmVwbGFjZShyZWdpb24sICdjbi4qJywn5Lit5Zu9JykgQVMgcmVnaW9uLCBjb3VudCgqKSBBUyBjb3VudCBHUk9VUCBCWSByZWdpb24%3D))
        
        ```
        * | select regexp_replace(region, 'cn.*','China') AS region, count(*) AS count GROUP BY region
        ```
        
    -   Query and analysis results![regexp_replace](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2439476661/p235674.png)
        
-   Example 2: Delete the version number from the value of the `server_protocol` field and calculate the number of requests for each communication protocol.
    
    -   Sample field
        
        ```
        server_protocol:HTTP/2.0
        ```
        
    -   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKnwgc2VsZWN0IHJlZ2V4cF9yZXBsYWNlKHNlcnZlcl9wcm90b2NvbCwgJy5cZCsnKSBBUyBzZXJ2ZXJfcHJvdG9jb2wsIGNvdW50KCopIEFTIGNvdW50IEdST1VQIEJZIHNlcnZlcl9wcm90b2NvbA%3D%3D))
        
        ```
        *| select regexp_replace(server_protocol, '.\d+') AS server_protocol, count(*) AS count GROUP BY server_protocol
        ```
        
    -   Query and analysis results![regexp_replace](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4355367261/p235681.png)
        

#### **SPL**

-   Example 1: Replace the region names that start with cn in the value of the `region` field with **China**.
    
    -   Sample field
        

```
region:cn-shanghai
```

-   Query statement
    

```
* | extend a = regexp_replace(region, 'cn.*','China')
```

-   Query and analysis results
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8660613171/p750396.png)
    
-   Example 2: Delete the version number from the value of the `server_protocol` field.
    
    -   Sample field
        

```
server_protocol:HTTP/2.0
```

-   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKnwgc2VsZWN0IHJlZ2V4cF9yZXBsYWNlKHNlcnZlcl9wcm90b2NvbCwgJy5cZCsnKSBBUyBzZXJ2ZXJfcHJvdG9jb2wsIGNvdW50KCopIEFTIGNvdW50IEdST1VQIEJZIHNlcnZlcl9wcm90b2NvbA%3D%3D))
    

```
* | extend a = regexp_replace(server_protocol, '.\d+')
```

-   Query and analysis results
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8660613171/p750395.png)

## regexp\_split function

The regexp\_split function splits a source string and returns an array of substrings.

### Syntax

```
regexp_split(x, regular expression)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the VARCHAR type.

_regular expression_

A regular expression.

### Return value type

The data type is an array.

### Examples

Use forward slashes (/) to split the value of the `request_uri` field.

-   Sample field
    
    ```
    request_uri:/request/path-0/file-7
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCByZWdleHBfc3BsaXQocmVxdWVzdF91cmksJy8nKQ%3D%3D))
    
    ```
    * | SELECT regexp_split(request_uri,'/')
    ```
    
-   Query and analysis results![regexp_split](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4355367261/p235709.png)
