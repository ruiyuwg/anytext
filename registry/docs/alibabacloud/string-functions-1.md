Syntax and examples for string functions.

Simple Log Service supports the following string functions.

**Important** If you want to use strings in analytic statements, you must enclose strings in single quotation marks (''). Strings that are not enclosed or enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Function name**

**Syntax**

**Description**

SQL supported

SPL supported

[chr function](#section-l91-pvq-j03)

chr(_x_)

Converts an ASCII code to a character.

√

√

[codepoint function](#section-hgk-vyf-uz2)

codepoint(_x_)

Converts a character to an ASCII code.

√

√

[concat function](#section-dgb-jac-rw0)

concat(_x_, _y_...)

Concatenates multiple strings into a single string.

√

√

[from\_utf8 function](#section-g87-4bd-50y)

from\_utf8(_x_)

Decodes a binary string into the UTF-8 encoding format and replaces invalid UTF-8 characters with the default character U+FFFD.

√

√

from\_utf8(_x_, _replace\_string_)

Decodes a binary string into the UTF-8 encoding format and replaces invalid UTF-8 characters with a custom string.

√

√

[length function](#section-wav-jjp-xgi)

length(_x_)

Calculates the length of a string.

√

√

[levenshtein\_distance function](#section-gjp-7y8-8hg)

levenshtein\_distance(_x_, _y_)

Calculates the minimum edit distance between _x_ and _y_.

√

×

[lower function](#section-zgy-780-psy)

lower(_x_)

Converts a string to lowercase.

√

√

[lpad function](#section-ivt-bxy-cl5)

lpad(_x_, _length_, _lpad\_string_)

Pads the beginning of a string with a specified character to a specified length and returns the result string.

√

√

[ltrim function](#section-0ge-e6k-rmv)

ltrim(_x_)

Removes the spaces from the beginning of a string.

√

√

[normalize function](#section-qra-xae-qn5)

normalize(_x_)

Formats a string in the NFC format.

√

×

[position function](#section-0se-ywm-xaf)

position(_sub\_string_ in _x_)

Returns the position of a substring in a string.

√

×

[replace function](#section-zf1-rxu-ort)

replace(_x_, _sub\_string_ )

Deletes the matched characters from a string.

√

√

replace(_x_, _sub\_string_, _replace\_string_)

Replaces the matched characters in a string with specified characters.

√

√

[reverse function](#section-3wj-lky-k4s)

reverse(_x_)

Returns a string in reverse order.

√

√

[rpad function](#section-qeb-gmh-8y9)

rpad(_x_, _length_, _rpad\_string_)

Pads the end of a string with a specified character to a specified length and returns the result string.

√

√

[rtrim function](#section-612-y7i-smx)

rtrim(_x_)

Removes the spaces from the end of a string.

√

√

[split function](#section-f4d-tjb-ugm)

split(_x_, _delimeter_)

Splits a string using a specified separator and returns a collection of substrings.

√

√

split(_x_, _delimeter_, _limit_)

Splits a string using a specified separator, limits the number of splits using _limit_, and then returns a collection of the split substrings.

√

√

[split\_part function](#section-td0-e4q-7gn)

split\_part(_x_, _delimeter_, _part_)

Splits a string using a specified separator and returns the content at a specified position.

√

√

[split\_to\_map function](#section-49l-i4k-ma5)

split\_to\_map(_x_, _delimiter01_, _delimiter02_)

Splits a string using a specified first separator and then splits the string again using a specified second separator.

√

√

[strpos function](#section-35t-r6q-pbq)

strpos(_x_, _sub\_string_)

Returns the position of a substring in a string. This function is equivalent to the position(_sub\_string_ in _x_) function.

√

√

[substr function](#section-fiy-73z-xuu)

substr(_x_, _start_)

Returns a substring from a specified position in a string.

√

√

substr(_x_, _start_, _length_)

Returns a substring of a specified length from a specified position in a string.

√

√

[to\_utf8 function](#section-nxq-42x-fvs)

to\_utf8(_x_)

Converts a string to the UTF-8 encoding format.

√

√

[trim function](#section-oze-c5t-g4z)

trim(_x_)

Removes the spaces from the beginning and end of a string.

√

√

[upper function](#section-sqy-0f9-tvh)

upper(_x_)

Converts a string to uppercase.

√

√

[csv\_extract\_map function](#728ccced39l6k)

csv\_extract\_map(x, delimeter, quote, keys)

Extracts single-line CSV information from a target string.

√

×

[ilike function](#5890c1e886hek)

ilike(x, pattern)

Checks whether a string matches a specified character pattern. The check is case-insensitive.

√

√

[str\_uuid function](#6124fed0c9esr)

str\_uuid()

Generates a random 128-bit ID and returns it in a string format.

×

√

[gzip\_compress function](#35456381a2a66)

gzip\_compress(data, compression\_level)

Accepts a string object, compresses it using the GZIP algorithm, and returns the compressed binary stream.

×

√

[gzip\_decompress function](#764c26474cuqm)

gzip\_decompress(binary\_data)

Accepts GZIP-compressed binary data (Varbinary) and decompresses it.

×

√

[search function](#7e969ef572pfc)

search(search\_expression)

Performs a full-text search on log data within an SQL analytic statement. It supports Boolean operations, field-specific searches, fuzzy queries, and range queries.

√

×

## chr function

The chr function converts an ASCII code to a character.

### Syntax

```
chr(x)
```

### Parameters

**Parameter**

**Description**

_x_

The ASCII code.

### Return value type

varchar.

### Example

The following query checks whether the value of the `region` field starts with c. The ASCII code 99 represents the lowercase letter c.

-   Sample field
    
    ```
    region:cn-shanghai
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBzdWJzdHIocmVnaW9uLCAxLCAxKT1jaHIoOTkp))
    
    ```
    * | SELECT
      substr(region, 1, 1) = chr(99)
    ```
    
-   Query and analysis results![chr](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3712961361/p294736.png)
    

## codepoint function

The codepoint function converts a character to an ASCII code.

### Syntax

```
codepoint(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

### Return value type

integer.

### Example

The following query checks whether the value of the `region` field starts with c. The ASCII code 99 represents the lowercase letter c.

-   Sample field
    
    ```
    upstream_status:200
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBjb2RlcG9pbnQoY2FzdCAoc3Vic3RyKHJlZ2lvbiwgMSwgMSkgQVMgY2hhcigxKSkpID05OQ%3D%3D))
    
    ```
    * | SELECT
      codepoint(cast (substr(region, 1, 1) AS char(1))) = 99
    ```
    
-   Query and analysis results![codepoint](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3712961361/p294769.png)
    

## concat function

The concat function concatenates multiple strings into a single string.

### Syntax

```
concat(x, y...)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

_y_

The value is of the varchar type.

### Return value type

VARCHAR data type.

### Example

The following query concatenates the values of the `region` field and the `request_method` field.

-   Sample fields
    
    ```
    region:cn-shanghai
    time:14/Jul/2021:02:19:40
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBjb25jYXQocmVnaW9uLCctJyx0aW1lKQ%3D%3D))
    
    ```
    * | SELECT
      concat(region, '-', time)
    ```
    
-   Query and analysis results![concat函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3821721361/p294429.png)
    

## from\_utf8 function

The from\_utf8 function decodes a binary string into the UTF-8 encoding format.

### **Syntax**

-   Replaces invalid UTF-8 characters with the default character U+FFFD.
    
    ```
    from_utf8(x)
    ```
    
-   Replaces invalid UTF-8 characters with a custom character.
    
    ```
    from_utf8(x,replace_string)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value is of the binary type.

_replace\_string_

The string that is used for replacement. The string can be only a single character or a space.

### Return value type

VARCHAR data type.

### Examples

-   The following query decodes the binary string 0x80 into the UTF-8 encoding format and replaces invalid UTF-8 characters in the returned result with the default character U+FFFD. U+FFFD is displayed as the default replacement character.
    
    -   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBmcm9tX3V0ZjgoZnJvbV9iYXNlNjQoJzB4ODAnKSk%3D))
        
        ```
        * | SELECT
          from_utf8(from_base64('0x80'))
        ```
        
    -   Query and analysis results![from_utf8](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2025055361/p314261.png)
        
-   The following query decodes the binary string 0x80 into the UTF-8 encoding format and replaces invalid UTF-8 characters in the returned result with 0.
    
    -   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBmcm9tX3V0ZjgoZnJvbV9iYXNlNjQoJzB4ODAnKSwnMCcp))
        
        ```
        * | SELECT
          from_utf8(from_base64('0x80'), '0')
        ```
        
    -   Query and analysis results![from_utf8](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3025055361/p314265.png)
        

## length function

The length function calculates the length of a string.

### Syntax

```
length(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

### Return value type

bigint.

### Example

The following query calculates the length of the value of the `http_user_agent` field.

-   Sample field
    
    ```
    http_user_agent:Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Chrome/22.0.1216.0 Safari/537.2
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBsZW5ndGgoaHR0cF91c2VyX2FnZW50KQ%3D%3D))
    
    ```
    * | SELECT
      length(http_user_agent)
    ```
    
-   Query and analysis results![length函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3821721361/p294433.png)
    

## levenshtein\_distance function

The levenshtein\_distance function calculates the minimum edit distance between two strings.

### Syntax

```
levenshtein_distance(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

_y_

The value is of the varchar type.

### Return value type

bigint.

### Example

The following query calculates the minimum edit distance between the value of the `instance_id` field and the value of the `owner_id` field.

-   Sample fields
    
    ```
    instance_id:i-01
    owner_id:owner-01
    ```
    
-   Query statement ([debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/rds-log-demo/logsearch/rds-audit-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBsZXZlbnNodGVpbl9kaXN0YW5jZShvd25lcl9pZCxpbnN0YW5jZV9pZCk%3D))
    
    ```
    * | SELECT
      levenshtein_distance(owner_id, instance_id)
    ```
    
-   Query and analysis results![levenshtein_distance](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3712961361/p294788.png)
    

## lower function

The lower function converts a string to lowercase.

### Syntax

```
lower(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

### Return value type

VARCHAR type.

### Example

The following query converts the value of the `request_method` field to lowercase.

-   Sample field
    
    ```
    request_method:GET
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBsb3dlcihyZXF1ZXN0X21ldGhvZCk%3D))
    
    ```
    * | SELECT
      lower(request_method)
    ```
    
-   Query and analysis results![lower函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3712961361/p294436.png)
    

## lpad function

The lpad function pads the beginning of a target string with a specified character to a specified length.

### Syntax

```
lpad(x, length, lpad_string)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

_length_

An integer that specifies the length of the result string.

-   If the length of the string is less than _length_, the beginning of the string is padded with the specified character.
    
-   If the length of the string is greater than _length_, only the first _length_ characters of the string are returned.
    

_lpad\_string_

New padding characters are now available.

### Return value type

varchar.

### Example

The following query pads the beginning of the value of the `instance_id` field with 0 to a total length of 10 characters.

-   Sample field
    
    ```
    instance_id:i-01
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/rds-log-demo/logsearch/rds-audit-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBscGFkKGluc3RhbmNlX2lkLDEwLCcwJyk%3D))
    
    ```
    * | SELECT
      lpad(instance_id, 10, '0')
    ```
    
-   Query and analysis results![lpad](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3712961361/p294773.png)
    

## ltrim function

The ltrim function removes leading spaces from a string.

### Syntax

```
ltrim(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

### Return value type

varchar type.

### Example

The following query removes the leading spaces from the value of the `region` field.

-   Sample field
    
    ```
    region: cn-shanghai
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/rds-log-demo/logsearch/rds-audit-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBsdHJpbShyZWdpb24p))
    
    ```
    * | SELECT
      ltrim(region)
    ```
    
-   Query and analysis results![ltrim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3712961361/p294774.png)
    

## normalize function

The normalize function formats a string in the Normalization Form C (NFC) format.

### Syntax

```
normalize(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

### Return value type

varchar.

### Example

The following query formats the string schön in the NFC format.

-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/rds-log-demo/logsearch/rds-audit-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBub3JtYWxpemUoJ3NjaMO2bicp))
    
    ```
    * | SELECT
      normalize('schön')
    ```
    
-   Query and analysis results![normalize](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3025055361/p313284.png)
    

## position function

The position function returns the position of a target substring in a string.

### Syntax

```
position(sub_string in x)
```

### Parameters

**Parameter**

**Description**

_sub\_string_

The target substring.

_x_

The value is of the varchar type.

### Return value type

int. The value is 1-based. If the target substring is not found, the function returns 0.

### Example

The following query finds the position of the substring `cn` in the value of the `region` field.

-   Sample field
    
    ```
    region:cn-shanghai
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/rds-log-demo/logsearch/rds-audit-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBwb3NpdGlvbignY24nIGluIHJlZ2lvbik%3D))
    
    ```
    * | SELECT
      position('cn' in region)
    ```
    
-   Query and analysis results![position函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4712961361/p294454.png)
    

## replace function

The replace function deletes characters from a string or replaces them with other characters.

### Syntax

-   Delete matching characters from a string.
    
    ```
    replace(x, sub_string)
    ```
    
-   Replaces all occurrences of a substring with another string.
    
    ```
    replace(x, sub_string, replace_string)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

_sub\_string_

The target substring.

_replace\_string_

The substring that is used for replacement.

### Return value type

varchar.

### Examples

-   Example 1: The following query replaces `cn` in the value of the `region` field with `China`.
    
    -   Sample field
        
        ```
        region:cn-shanghai
        ```
        
    -   Sample query ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/rds-log-demo/logsearch/rds-audit-log?encode%3Dbase64%26queryString%3DKiB8IHNlbGVjdCByZXBsYWNlKHJlZ2lvbiwnY24nLCfkuK3lm70nKQ%3D%3D))
        
        ```
        * | select
          replace(region, 'cn', 'China')
        ```
        
    -   Query and analysis results![replace](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4712961361/p240200.png)
        
-   Example 2: The following query removes `cn-` from the value of the `region` field.
    
    -   Sample field
        
        ```
        region:cn-shanghai
        ```
        
    -   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/rds-log-demo/logsearch/rds-audit-log?encode%3Dbase64%26queryString%3DKiB8IHNlbGVjdCByZXBsYWNlKHJlZ2lvbiwnY24tJyk%3D))
        
        ```
        * | select
          replace(region, 'cn-')
        ```
        
    -   Query and analysis results![replace](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3025055361/p313241.png)
        

## reverse function

The reverse function returns a string in reverse order.

### Syntax

```
reverse(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

### Return value type

VARCHAR data type.

### Example

Sort the `request_method` field value in descending order.

-   Sample field
    
    ```
    request_method:GET
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCByZXZlcnNlKHJlcXVlc3RfbWV0aG9kKQ%3D%3D))
    
    ```
    * | SELECT
      reverse(request_method)
    ```
    
-   Query and analysis results![reverse](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3821721361/p294451.png)
    

## rpad function

The rpad function pads the end of a string with a specified character to a specified length.

### Syntax

```
rpad(x, length, rpad_string)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

_length_

An integer that specifies the length of the result string.

-   If the length of the string is less than _length_, the end of the string is padded with the specified character.
    
-   If the length of the string is greater than _length_, only the first _length_ characters of the string are returned.
    

_rpad\_string_

The new character for padding.

### Return value type

The varchar data type.

### Example

The following query pads the end of the value of the `instance_id` field with 0 to a total length of 10 characters.

-   Sample field
    
    ```
    instance_id:i-01
    ```
    
-   Query statement ([debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/rds-log-demo/logsearch/rds-audit-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBycGFkKGluc3RhbmNlX2lkLDEwLCcwJyk%3D))
    
    ```
    * | SELECT
      rpad(instance_id, 10, '0')
    ```
    
-   Query and analysis results![rpad](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4712961361/p294779.png)
    

## rtrim function

The rtrim function removes trailing spaces from a string.

### Syntax

```
rtrim(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

### Return value type

varchar.

### Example

The following query removes the trailing spaces from the value of the `instance_id` field.

-   Sample field
    
    ```
    instance_id:i-01 
    ```
    
-   Query statement ([debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/rds-log-demo/logsearch/rds-audit-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBydHJpbShpbnN0YW5jZV9pZCk%3D))
    
    ```
    * | SELECT
      rtrim(instance_id)
    ```
    
-   Query and analysis results![rtrim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4712961361/p294781.png)
    

## split function

The split function splits a string using a specified separator and returns an array of the resulting substrings.

### Syntax

-   Splits a string using a specified separator.
    
    ```
    split(x, delimeter)
    ```
    
-   Splits a string using a specified separator into a specified number of substrings.
    
    ```
    split(x,delimeter,limit)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

_delimeter_

The separator.

_limit_

The number of splits. The value must be an integer greater than 0.

### Return value type

The data type is an array.

### Examples

-   Example 1: The following query splits the value of the `request_uri` field into four substrings using a forward slash (/) as the separator and returns the resulting array.
    
    -   Sample field
        
        ```
        request_uri:/request/path-1/file-9
        ```
        
    -   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBzcGxpdChyZXF1ZXN0X3VyaSwnLycp))
        
        ```
        * | SELECT
          split(request_uri, '/')
        ```
        
    -   Query and analysis results![split](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4025055361/p313256.png)
        
-   Example 2: The following query splits the value of the `request_uri` field into three substrings using a forward slash (/) as the separator and returns the resulting array.
    
    -   Sample field
        
        ```
        request_uri:/request/path-1/file-9
        ```
        
    -   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBzcGxpdChyZXF1ZXN0X3VyaSwnLycsMyk%3D))
        
        ```
        * | SELECT
          split(request_uri, '/', 3)
        ```
        
    -   Query and analysis results![split](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4025055361/p313254.png)
        

## split\_part function

The split\_part function splits a string using a specified separator and returns the substring at a specified position.

### Syntax

```
split_part(x, delimeter, part)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

_delimeter_

The separator.

_part_

An integer greater than 0.

### Return value type

The VARCHAR data type.

### Example

The following query splits the value of the `request_uri` field using a question mark (?) and returns the first substring, which is the file path. The query then counts the number of requests for each path.

-   Sample fields
    
    ```
    request_uri: /request/path-2/file-6?name=value&age=18
    request_uri: /request/path-2/file-0?name=value&age=18
    request_uri: /request/path-3/file-2?name=value&age=18
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBjb3VudCgqKSBBUyBQViwgc3BsaXRfcGFydChyZXF1ZXN0X3VyaSwgJz8nLCAxKSBBUyBQYXRoIEdST1VQIEJZIFBhdGggT1JERVIgQlkgcHYgREVTQyBMSU1JVCAz))
    
    ```
    * | SELECT
      count(*) AS PV,
      split_part(request_uri, '?', 1) AS Path
    GROUP BY
      Path
    ORDER BY
      pv DESC
    ```
    
-   Analysis results![Top 3 endpoints](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5616931071/p232326.png)
    

## split\_to\_map function

The split\_to\_map function splits a string using the first specified separator and then splits the result using the second specified separator.

### Syntax

```
split_to_map(x, delimiter01, delimiter02)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

_delimeter01_

The separator.

_delimeter02_

The separator.

### Return value type

Map type

### Example

The following query splits the value of the `time` field using a comma (,) and a colon (:). The result is a map.

-   Sample field
    
    ```
    time:upstream_response_time:"80", request_time:"40"
    ```
    
-   Query statement
    
    ```
    * | SELECT
      split_to_map(time, ',', ':')
    ```
    
-   Query and analysis results![split_to_map](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2355367261/p240051.png)
    

## strpos function

The strpos function returns the position of a target substring in a string. This function is equivalent to the position function.

### Syntax

```
strpos(x, sub_string)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

_sub\_string_

The target substring.

### Return value type

int. The value is 1-based. If the target substring is not found, the function returns 0.

### Example

The following query returns the position of the letter H in the value of the `server_protocol` field.

-   Query statement ([Test](https://sls.console.alibabacloud.com/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBzdHJwb3Moc2VydmVyX3Byb3RvY29sLCdIJyk%3D%26queryTimeType%3D99%26startTime%3D1691393459%26endTime%3D1691394359))
    
    ```
    * | SELECT
      strpos(server_protocol, 'H')
    ```
    
-   Query and analysis results![strpos](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2355367261/p240191.png)
    

## substr function

The substr function returns a substring from a specified position in a string.

### Syntax

-   Returns a substring from a specified position in a string.
    
    ```
    substr(x, start)
    ```
    
-   Returns a substring of a specified length from a specified starting position.
    
    ```
    substr(x,start,length)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

_start_

The position from which the substring starts to be extracted. The value starts from 1.

_length_

The length of the substring.

### Return value type

varchar.

### Example

The following query extracts the first four characters (the `HTTP` part) from the value of the `server_protocol` field. The query then counts the number of requests that use the HTTP protocol.

-   Sample field
    
    ```
    server_protocol:HTTP/2.0
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBzdWJzdHIoc2VydmVyX3Byb3RvY29sLDEsNCkgQVMgcHJvdG9jb2wsIGNvdW50KCopIEFTIGNvdW50IEdST1VQIEJZIHNlcnZlcl9wcm90b2NvbA%3D%3D))
    
    ```
    * | SELECT
      substr(server_protocol, 1, 4) AS protocol,
      count(*) AS count
    GROUP BY
      server_protocol
    ```
    
-   Query and analysis results![substr](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6737619161/p236773.png)
    

## to\_utf8 function

The to\_utf8 function encodes a string into a UTF-8 binary representation.

### Syntax

```
to_utf8(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

### Return value type

The varbinary data type.

### **Example**

Convert the log string to the UTF-8 encoding format.

-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/waf-demo-log/logsearch/waf-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCB0b191dGY4KCdsb2cnKQ%3D%3D))
    
    ```
    * | SELECT
      to_utf8('log')
    ```
    
-   Query and analysis results![to_utf8](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4025055361/p313293.png)
    

## trim function

The trim function removes leading and trailing spaces from a string.

### Syntax

```
trim(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

### Return value type

VARCHAR type

### Example

The following query removes the leading and trailing spaces from the value of the `instance_id` field.

-   Sample field
    
    ```
    instance_id: i-01 
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/rds-log-demo/logsearch/rds-audit-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCB0cmltKGluc3RhbmNlX2lkKQ%3D%3D))
    
    ```
    * | SELECT
      trim(instance_id)
    ```
    
-   Query and analysis results![rtrim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4712961361/p294781.png)
    

## upper function

The upper function converts a target string to uppercase.

### Syntax

```
upper(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value is of the varchar type.

### Return value type

varchar.

### Example

The following query converts the value of the `region` field to uppercase.

-   Sample field
    
    ```
    region:cn-shanghai
    ```
    
-   Query statement ([Test](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/rds-log-demo/logsearch/rds-audit-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCB1cHBlcihyZWdpb24p))
    
    ```
    * | SELECT
      upper(region)
    ```
    
-   Query and analysis results![upper函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4712961361/p294437.png)
    

## **csv\_extract\_map function**

The csv\_extract\_map function extracts single-line CSV information from a target string.

### **Syntax**

```
csv_extract_map(x, delimeter, quote, keys)
```

### **Parameters**

**Parameter**

**Description**

x

The value is of the varchar type.

delimeter

The CSV separator. The value is of the varchar type and the length is 1.

quote

The CSV quote. The value is of the varchar type and the length is 1.

keys

The key name for the output of the CSV information. The value is of the array type. If the number of elements is different from the number of pieces of CSV information in the data, null is returned.

### **Return value type**

map(varchar, varchar).

### **Example**

The following query extracts the CSV information from the content field.

-   Sample field
    
    ```
    content: '192.168.0.100,"10/Jun/2019:11:32:16,127 +0800",example.aliyundoc.com'
    ```
    
-   Query statement
    
    ```
    select csv_extract_map(content, ',', '"', array['ip', 'time', 'host']) as item
    ```
    
-   Output data
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8318643571/p989940.png)
    

## **ilike function**

The ilike function checks whether an input string matches a specified character pattern. The check is case-insensitive.

### **Syntax**

```
ilike(x, pattern)
```

### **Parameters**

**Parameter**

**Description**

x

The value is of the varchar type.

pattern

The character pattern, which includes strings and wildcard characters. The following table describes the wildcard characters.

-   The percent sign (%) represents any number of characters.
    
-   The underscore (\_) represents a single character.
    

### **Return value type**

Boolean type

### **Example**

The following query checks whether request\_uri ends with file-6.

-   Sample field
    

```
request_uri: '/request/path-2/File-6'
```

-   Query statement
    

```
select ilike(request_uri, '%file-6')
```

-   Output data
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8318643571/p989941.png)

## **str\_uuid function**

The `str_uuid()` function generates a random 128-bit ID and returns it as a string.

### **Syntax**

```
str_uuid()
```

### **Return value**

-   **Return value type:** `VARCHAR`
    
-   **Format:** A standard 36-character string containing 32 hexadecimal digits and four hyphens `-`.
    
-   **Structure example:** `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
    

### **Example**

This example shows how to quickly generate many unique identifiers in a staging environment.

```
* | extend uuid = str_uuid()
```

## **gzip\_compress function**

The `gzip_compress` function accepts a string object, compresses it using the GZIP algorithm, and returns the compressed binary data.

### **Syntax**

```
-- Method 1: Default compression level (6)
gzip_compress(data)

-- Method 2: Specify compression level
gzip_compress(data, compression_level)
```

### **Parameters**

**Parameter**

**Type**

**Description**

**data**

VARCHAR

The string content to compress.

**compression\_level**

BIGINT

**Compression level**. The value is an integer from 1 to 9.

### **Return value**

-   **Return value type**: `VARBINARY`
    
-   **Description**: The compressed binary data.
    

### Examples

-   Example 1: Basic compression
    
    ```
    * | extend compress_data =  gzip_compress('Hello World')
    ```
    
-   Example 2: Maximum compression ratio (for large text)
    
    If you have a log entry that is tens of thousands of characters long and storage space is a concern, use level `9`:
    
    ```
    * | extend compress_data =  gzip_compress('Hello World',9)
    ```
    

## **gzip\_decompress function**

The `gzip_decompress` function accepts GZIP-compressed binary data (Varbinary) and decompresses it.

### **Syntax**

```
gzip_decompress(binary_data)
```

### **Parameters**

`binary_data` must be valid GZIP-compressed data, which is usually generated by `gzip_compress`. If the input is not in the standard GZIP format, the function returns `NULL`.

### **Return value**

-   **Return value type**: `VARCHAR`
    
-   **Description**: The original plaintext content after decompression.
    

* * *

### **Example**

-   Simple compression and decompression pipeline:
    
    ```
    * | extend original_content =  gzip_decompress(gzip_compress('Hello SLS!'))
    -- Output: "Hello SLS!"
    ```
    

## **search function**

The search function performs a full-text search on log data in an SQL analytic statement. The search function is provided as a standard SQL function and supports complex query conditions, including Boolean operations, field-specific searches, fuzzy queries, and range queries.

### Limits

**Limit**

**Description**

Single instance limit

Only one `search()` function can be used in each subquery (underlying SELECT). If you need multiple query conditions, combine them into a single `search()` call, such as `search('error AND timeout')`.

OR operator limit

The `search()` function cannot be used with the OR operator at the SQL layer. Use OR inside the search function, such as `search('error OR warning')`.

You have [created an index](/help/en/sls/create-indexes#task-jqz-v55-cfb) and are not in scan mode.

The search function is not supported in scan mode.

Query syntax input conflict

You cannot use the search function when the query syntax input contains actual filter conditions. The function is allowed when the query syntax input is empty or is `*`.

Parameter type

The parameter of the search function must be a string literal. Dynamic values such as column references, variables, or function expressions are not supported.

Number of parameters

The function must accept exactly one parameter.

### **Syntax**

```
search(search_expression)
```

The usage format in a query statement is as follows:

```
* | SELECT ... FROM log WHERE search('search_expression')
```

**Important**: The search function can be used only in the `WHERE` clause.

### **Parameters**

**Parameter**

**Description**

search\_expression

A string literal that represents the query expression. `search_expression` must fully comply with the Simple Log Service query syntax and provides the same features as the [query syntax](/help/en/sls/query-syntax/), including full-text search, field-specific search, Boolean operations, fuzzy queries, and range queries.

### **Return value type**

BOOLEAN. `true` indicates that the current row matches the query condition. `false` indicates that the current row does not match the query condition.

### **Examples**

-   Example 1: The following query uses the search function to find logs that contain "error" and "timeout".
    
    ```
    * | SELECT * FROM log WHERE search('error AND timeout')
    ```
    
-   Example 2: The following query uses the search function to perform a field-specific search for logs where the status field is 200.
    
    ```
    * | SELECT * FROM log WHERE search('status: 200')
    ```
    
-   Example 3: The following query combines the search function with an SQL predicate using AND to find logs where the status is 200 and the request\_time is greater than 100.
    
    ```
    * | SELECT * FROM log
        WHERE search('status: 200') AND request_time > 100
    ```
    
    For more information, see [Use the search function to perform a full-text search](/help/en/sls/full-text-search-using-the-search-function).
