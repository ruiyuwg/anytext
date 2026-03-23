This topic describes the syntax of URL functions. This topic also provides examples on how to use the functions.

The following table describes the URL functions that are supported by Simple Log Service.

**Important**

-   The format of a URL is `[protocol:][//host[:port]][path][?query][#fragment]`.
    
-   If you want to use strings in analytic statements, you must enclose the strings in single quotation marks (''). Strings that are not enclosed or strings that are enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.
    

**Function**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

[url\_encode function](#section-ygm-6yz-yuh)

url\_encode(_x_)

Encodes a URL.

√

√

[url\_decode function](#section-57j-2ij-dq0)

url\_decode(_x_)

Decodes a URL.

√

√

[url\_extract\_fragment function](#section-7ks-rmc-4ba)

url\_extract\_fragment(_x_)

Extracts the fragment from a URL.

√

√

[url\_extract\_host function](#section-uic-piy-ppb)

url\_extract\_host(_x_)

Extracts the host from a URL.

√

√

[url\_extract\_parameter function](#section-kmy-134-5aw)

url\_extract\_parameter(_x_, _parameter name_)

Extracts the value of a specified parameter in the query string from a URL.

√

√

[url\_extract\_path function](#section-exf-2fp-47y)

url\_extract\_path(_x_)

Extracts the path from a URL.

√

√

[url\_extract\_port function](#section-i7s-npj-l0u)

url\_extract\_port(_x_)

Extracts the port number from a URL.

√

√

[url\_extract\_protocol function](#section-toi-z8a-3ig)

url\_extract\_protocol(_x_)

Extracts the protocol from a URL.

√

√

[url\_extract\_query function](#section-zsb-1xh-9kd)

url\_extract\_query(_x_)

Extracts the query string from a URL.

√

√

## url\_encode function

The url\_encode function encodes a URL.

### Syntax

```
url_encode(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is a specific URL.

### Return value type

The varchar type.

### Examples

Encode the value of the url field.

-   Sample field
    
    ```
    url:https://home.console.alibabacloud.com/home/dashboard/ProductAndService
    ```
    
-   Query statement
    
    ```
    * | select url_encode(url)
    ```
    
-   Query and analysis results![url_encode](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5022832361/p296965.png)
    

## url\_decode function

The url\_decode function decodes a URL.

### Syntax

```
url_decode(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is an encoded URL.

### Return value type

The varchar type.

### Examples

Decode the value of the url field.

-   Sample field
    
    ```
    url:http%3A%2F%2Fwww.aliyun.com%3A80%2Fproduct%2Fsls
    ```
    
-   Query statement
    
    ```
    * | SELECT url_decode(url) AS decode
    ```
    
-   Query and analysis results![url_decode](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7511721361/p297005.png)
    

## url\_extract\_fragment function

The url\_extract\_fragment function extracts the fragment from a URL.

### Syntax

```
url_extract_fragment(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is a specific URL.

### Return value type

The varchar type.

### Examples

Extract the fragment from the value of the url field.

-   Sample field
    
    ```
    url:https://sls.console.alibabacloud.com/#/project/dashboard-demo/categoryList
    ```
    
-   Query statement
    
    ```
    * | SELECT url_extract_fragment(url)
    ```
    
-   Query and analysis results![url_extract_fragment](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6022832361/p296971.png)
    

## url\_extract\_host function

The url\_extract\_host function extracts the host from a URL.

### Syntax

```
url_extract_host(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is a specific URL.

### Return value type

The varchar type.

### Examples

Extract the host from the value of the url field.

-   Sample field
    
    ```
    url:https://home.console.alibabacloud.com/home/dashboard/ProductAndService
    ```
    
-   Query statement
    
    ```
    * | SELECT url_extract_host(url) AS host
    ```
    
-   Query and analysis results![url_extract_host](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8511721361/p296968.png)
    

## url\_extract\_parameter function

The url\_extract\_parameter function extracts the value of a specified parameter in the query string from a URL.

### Syntax

```
url_extract_parameter(x, parameter name)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is a specific URL.

_parameter name_

The name of the parameter that you want to query in the query string of the URL.

### Return value type

The varchar type.

### Examples

Extract the value of the accounttraceid parameter from the value of the url field.

-   Sample field
    
    ```
    url:https://sls.console.alibabacloud.com/lognext/project/dashboard-all/logsearch/nginx-demo?accounttraceid=d6241a173f88471c91d3405cda010ff5ghdw
    ```
    
-   Query statement
    
    ```
    * | SELECT url_extract_parameter(url,'accounttraceid') AS accounttraceid
    ```
    
-   Query and analysis results![url_extract_parameter](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8511721361/p297109.png)
    

## url\_extract\_path function

The url\_extract\_path function extracts the path from a URL.

### Syntax

```
url_extract_path(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is a specific URL.

### Return value type

The varchar type.

### Examples

Extract the path from the value of the url field.

-   Sample field
    
    ```
    url:https://sls.console.alibabacloud.com/lognext/project/dashboard-all/logsearch/nginx-demo?accounttraceid=d6241a173f88471c91d3405cda010ff5ghdw
    ```
    
-   Query statement
    
    ```
    * | SELECT url_extract_path(url) AS path
    ```
    
-   Query and analysis results![url_extract_path](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432161361/p296972.png)
    

## url\_extract\_port function

The url\_extract\_port function extracts the port number from a URL.

### Syntax

```
url_extract_port(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is a specific URL.

### Return value type

The varchar type.

### Examples

Extract the port number from the value of the url field.

-   Sample field
    
    ```
    url:http://localhost:8080/lognext/profile
    ```
    
-   Query statement
    
    ```
    * | SELECT url_extract_port(url) AS port
    ```
    
-   Query and analysis results![url_extract_port](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432161361/p297148.png)
    

## url\_extract\_protocol function

The url\_extract\_protocol function extracts the protocol from a URL.

### Syntax

```
url_extract_protocol(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is a specific URL.

### Return value type

The varchar type.

### Examples

Extract the protocol from the value of the url field.

-   Sample field
    
    ```
    url:https://home.console.alibabacloud.com/home/dashboard/ProductAndService
    ```
    
-   Query statement
    
    ```
    * | SELECT url_extract_protocol(url) AS protocol
    ```
    
-   Query and analysis results![url_extract_protocol](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8511721361/p296969.png)
    

## url\_extract\_query function

The url\_extract\_query function extracts the query string from a URL.

### Syntax

```
url_extract_query(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is a specific URL.

### Return value type

The varchar type.

### Examples

Extract the query string from the value of the url field.

-   Sample field
    
    ```
    url:https://sls.console.alibabacloud.com/lognext/project/dashboard-all/logsearch/nginx-demo?accounttraceid=d6241a173f88471c91d3405cda010ff5ghdw
    ```
    
-   Query statement
    
    ```
    * | SELECT url_extract_query(url)
    ```
    
-   Query and analysis results![url_extract_query](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6022832361/p297104.png)
