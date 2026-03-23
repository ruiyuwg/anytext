An aggregate function calculates the values of a field and returns a single value. This topic describes the syntax of aggregate functions. This topic also provides examples on how to use the functions.

The following table describes the aggregate functions that are supported by Simple Log Service.

**Important** If you want to use strings in analytic statements, you must enclose strings in single quotation marks (''). Strings that are not enclosed or enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Function**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

[arbitrary function](#section-q2a-3qi-wfu)

arbitrary(_x_)

Returns a random, non-null value of the _x_ field.

√

×

[avg function](#section-r3j-gup-zms)

avg(_x_)

Calculates the average of the values of the _x_ field.

√

×

[bitwise\_and\_agg function](#section-0zv-j94-nft)

bitwise\_and\_agg(_x_)

Returns the result of the bitwise AND operation on the values of the _x_ field.

√

×

[bitwise\_or\_agg function](#section-2cr-39j-c02)

bitwise\_or\_agg(_x_)

Returns the result of the bitwise OR operation on the values of the _x_ field.

√

×

[bool\_and function](#section-900-2yt-zxc)

bool\_and(_boolean expression_)

Checks whether all logs meet the specified condition. If yes, the function returns true.

This function is equivalent to the every function.

√

×

[bool\_or function](#section-dnf-0rd-0os)

bool\_or(_boolean expression_)

Checks whether a log that meets the specified condition exists. If yes, the function returns true.

√

×

[checksum function](#section-sjk-haz-16i)

checksum(_x_)

Calculates the checksum of the values of the _x_ field.

√

×

[count function](#section-ofd-ty2-ncw)

count(\*)

Counts the number of logs.

√

×

count(1)

Counts the number of logs. This function is equivalent to the count(\*) function.

√

×

count(_x_)

Counts the number of logs whose value of the _x_ field is not NULL.

√

×

[count\_if function](#section-qw1-cji-2z2)

count\_if(_boolean expression_)

Counts the number of logs that meet the specified condition.

√

×

[every function](#section-2rn-9xk-cki)

every(_boolean expression_)

Checks whether all logs meet the specified condition. If yes, the function returns true.

This function is equivalent to the bool\_and function.

√

×

[geometric\_mean function](#section-suh-69m-cem)

geometric\_mean(_x_)

Calculates the geometric mean of the values of the _x_ field.

√

×

[kurtosis function](#section-3vu-h93-1l5)

kurtosis(_x_)

Calculates the kurtosis of the values of the _x_ field.

√

×

[map\_union function](#section-08l-16q-pml)

map\_union(_x_)

Returns the result of the union operation on the specified maps. If a key exists in multiple input maps, the function randomly returns one of the values of the key.

√

×

[max function](#section-vbl-gik-lpa)

max(_x_)

Queries the largest value of the _x_ field.

√

×

max(_x_, _n_)

Queries the _n_ largest values of the _x_ field. The function returns an array.

√

×

[max\_by function](#section-o9m-zik-l51)

max\_by(_x_, _y_)

Queries the value of _x_ that is associated with the largest value of the _y_ field.

√

×

max\_by(_x_, _y_, _n_)

Queries the values of _x_ that are associated with the _n_ largest values of the _y_ field. The function returns an array.

√

×

[min function](#section-9c3-xat-3a6)

min(_x_)

Queries the smallest value of the _x_ field.

√

×

min(_x_, _n_)

Queries the _n_ smallest values of the _x_ field. The function returns an array.

√

×

[min\_by function](#section-v7i-moo-cde)

min\_by(_x_, _y_)

Queries the value of _x_ that is associated with the smallest value of the _y_ field.

√

×

min\_by(_x_, _y_, _n_)

Queries the values of _x_ that are associated with the _n_ smallest values of the _y_ field. The function returns an array.

√

×

[skewness function](#section-37y-kz6-oqo)

skewness(_x_)

Calculates the skewness of the values of the _x_ field.

√

×

[sum function](#section-j8m-dem-alf)

sum(_x_)

Calculates the sum of the values of the _x_ field.

√

×

## arbitrary function

The arbitrary function returns a random, non-null value of the _x_ field.

### **Syntax**

```
arbitrary(x)
```

### **Parameters**

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

### **Return value type**

Same as the data type of the parameter value.

### **Examples**

Return an arbitrary, non-null value of the `request_method` field.

-   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBhcmJpdHJhcnkocmVxdWVzdF9tZXRob2QpIEFTIHJlcXVlc3RfbWV0aG9k))
    
    ```
    * | SELECT
      arbitrary(request_method) AS request_method
    ```
    
-   Query and analysis results![arbitrary函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9221061361/p291885.png)
    

## avg function

The avg function calculates the average of the values of the _x_ field.

### Syntax

```
avg(x)
```

### **Parameters**

**Parameter**

**Description**

_x_

The value of this parameter is of the double, bigint, decimal, or real type.

### Return value type

The double type.

### Examples

Return the projects whose average latency is greater than 1,000 microseconds.

-   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/log-service-1819385687343877-cn-shanghai/logsearch/internal-operation_log?encode%3Dbase64%26queryString%3DbWV0aG9kOiBQb3N0TG9nc3RvcmVMb2dzIHwgU0VMRUNUIGF2ZyhsYXRlbmN5KSBBUyBhdmdfbGF0ZW5jeSwgUHJvamVjdCBHUk9VUCBCWSBQcm9qZWN0IEhBVklORyBhdmdfbGF0ZW5jeSA%2BIDEwMDA%3D))
    
    ```
    method: PostLogstoreLogs | SELECT
      avg(latency) AS avg_latency,
      Project
    GROUP BY
      Project
    HAVING
      avg_latency > 1000
    ```
    
-   Query and analysis results![avg函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9221061361/p291909.png)
    

## bitwise\_and\_agg function

The bitwise\_and\_agg function returns the result of the bitwise AND operation on the values of the _x_ field.

### Syntax

```
bitwise_and_agg(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the bigint type.

### Return value type

The bigint type in binary representation.

### **Examples**

Return the result of the bitwise AND operation on the values of the `request_time` field.

-   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBiaXR3aXNlX2FuZF9hZ2coc3RhdHVzKQ%3D%3D%26queryTimeType%3D99))
    
    ```
    * | SELECT
      bitwise_and_agg(status)
    ```
    
-   Query and analysis results![AND](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9221061361/p292744.png)
    

## bitwise\_or\_agg function

The bitwise\_or\_agg function returns the result of the bitwise OR operation on the values of the _x_ field.

### Syntax

```
bitwise_or_agg(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the bigint type.

### Return value type

The bigint type in binary representation.

### **Examples**

Return the result of the bitwise OR operation on the values of the `request_time` field.

-   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBiaXR3aXNlX29yX2FnZyhyZXF1ZXN0X2xlbmd0aCk%3D))
    
    ```
    * | SELECT
      bitwise_or_agg(request_length)
    ```
    
-   Query and analysis results![OR](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9221061361/p292743.png)
    

## bool\_and function

The bool\_and function checks whether all logs meet the specified condition. If yes, the function returns true. This function is equivalent to the every function.

### **Syntax**

```
bool_and(boolean expression)
```

### **Parameters**

**Parameter**

**Description**

_boolean expression_

The value of this parameter is a Boolean expression.

### **Return value type**

The Boolean type.

### **Examples**

Check whether the value of the request\_time field is less than 100 in all logs. Unit: seconds. If yes, the function returns true.

-   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBib29sX2FuZChyZXF1ZXN0X3RpbWUgPCAxMDAp))
    
    ```
    * | SELECT
      bool_and(request_time < 100)
    ```
    
-   Query and analysis results![bool_and](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7835354361/p312823.png)
    

## bool\_or function

The bool\_or function checks whether a log that meets the specified condition exists. If yes, the function returns true.

### **Syntax**

```
bool_or(boolean expression)
```

### Parameters

**Parameter**

**Description**

_boolean expression_

The value of this parameter is a Boolean expression.

### **Return value type**

The Boolean type.

### **Examples**

Check whether a log in which the value of the request\_time field is less than 20 exists. Unit: seconds. If yes, the function returns true.

-   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBib29sX29yKHJlcXVlc3RfdGltZSA8IDIwKQ%3D%3D%26queryTimeType%3D99))
    
    ```
    * | SELECT
      bool_or(request_time < 20)
    ```
    
-   Query and analysis results![bool_or](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7835354361/p312825.png)
    

## checksum function

The checksum function calculates the checksum of the values of the _x_ field.

### Syntax

```
checksum(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

### Return value type

The string type. The result is Base64-encoded.

### Examples

-   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBjaGVja3N1bShyZXF1ZXN0X21ldGhvZCkgQVMgcmVxdWVzdF9tZXRob2Q%3D%26queryTimeType%3D99))
    
    ```
    * | SELECT
      checksum(request_method) AS request_method
    ```
    
-   Query and analysis results![checksum](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9221061361/p292416.png)
    

## count function

The count function counts the number of logs.

### Syntax

-   If you use the following syntax, the function counts the number of logs.
    
    ```
    count(*)
    ```
    
-   If you use the following syntax, the function counts the number of logs, which is equivalent to `count(*)`.
    
    ```
    count(1)
    ```
    
-   If you use the following syntax, the function counts the number of logs whose value of the _x_ field is not NULL.
    
    ```
    count(x)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

### Return value type

The integer type.

### Examples

-   Example 1: Count the page views (PVs) of a website.
    
    -   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBjb3VudCgqKSBBUyBQVg%3D%3D))
        
        ```
        * | SELECT
          count(*) AS PV
        ```
        
    -   Query and analysis results![count函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9221061361/p291915.png)
        
-   Example 2: Count the number of logs whose value of the `request_method` field is not NULL.
    
    -   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBjb3VudChyZXF1ZXN0X21ldGhvZCkgQVMgY291bnQ%3D%26queryTimeType%3D99%26startTime%3D1691377285%26endTime%3D1691378185))
        
        ```
        * | SELECT
          count(request_method) AS count
        ```
        
    -   Query and analysis results![count函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9221061361/p291918.png)
        

## count\_if function

The count\_if function counts the number of logs that meet the specified condition.

### Syntax

```
count_if(boolean expression)
```

### Parameters

**Parameter**

**Description**

_boolean expression_

The value of this parameter is a Boolean expression.

### Return value type

The integer type.

### Examples

Count the number of logs whose `request_uri` field has a value suffixed with `file-0`.

-   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBjb3VudF9pZihyZXF1ZXN0X3VyaSBsaWtlICclZmlsZS0wJykgQVMgY291bnQ%3D))
    
    ```
    * | SELECT
      count_if(request_uri like '%file-0') AS count
    ```
    
-   Query and analysis results![count函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9221061361/p291918.png)
    

## geometric\_mean function

The geometric\_mean function calculates the geometric mean of the values of the _x_ field.

### Syntax

```
geometric_mean(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double, bigint, or real type.

### Return value type

The double type.

### Examples

Calculate the geometric mean of the values of the request\_time field.

-   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBnZW9tZXRyaWNfbWVhbihyZXF1ZXN0X3RpbWUpIEFTIHRpbWU%3D%26queryTimeType%3D99))
    
    ```
    * | SELECT
      geometric_mean(request_time) AS time
    ```
    
-   Query and analysis results![geometric_mean](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2011721361/p292704.png)
    

## every function

The every function checks whether all logs meet the specified condition. If yes, the function returns true. This function is equivalent to the bool\_and function.

### Syntax

```
every(boolean expression)
```

### Parameters

**Parameter**

**Description**

_boolean expression_

The value of this parameter is a Boolean expression.

### Return value type

The Boolean type.

### Examples

Check whether the value of the request\_time field is less than 100 in all logs. Unit: seconds. If yes, the function returns true.

-   Query statement ([Debug](https://sls.console.alibabacloud.com/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBldmVyeShyZXF1ZXN0X3RpbWUgPCAxMDAp%26queryTimeType%3D99%26startTime%3D1691377903%26endTime%3D1691378803))
    
    ```
    * | SELECT
      every(request_time < 100)
    ```
    
-   Query and analysis results![bool_and](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7835354361/p312823.png)
    

## kurtosis function

The kurtosis function calculates the kurtosis of the values of the _x_ field.

### Syntax

```
kurtosis(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double or bigint type.

### Return value type

The double type.

### Examples

Calculate the kurtosis of the values of the request\_time field.

-   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKnwgU0VMRUNUIGt1cnRvc2lzKHJlcXVlc3RfdGltZSk%3D%26queryTimeType%3D99))
    
    ```
    *| SELECT
      kurtosis(request_time)
    ```
    
-   Query and analysis results![kurtosis](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7835354361/p313218.png)
    

## map\_union function

The map\_union function returns the result of the union operation on the specified maps. If a key exists in multiple input maps, the function randomly returns one of the values of the key.

### Syntax

```
map_union(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the map type.

### Return value type

The map type.

### Examples

Perform a union operation on the maps of the `etl_context` field and randomly return one of the maps.

-   Sample field
    
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
    * | SELECT
      map_union(
        try_cast(json_parse(etl_context) AS map(varchar, varchar))
      )
    ```
    
-   Query and analysis results![ map_union](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2294006361/p312973.png)
    

## max function

The max function queries the largest value of the _x_ field.

### Syntax

-   If you use the following syntax, the function queries the largest value of the _x_ field.
    
    ```
    max(x)
    ```
    
-   If you use the following syntax, the function queries the _n_ largest values of the _x_ field. The function returns an array.
    
    ```
    max(x, n)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

_n_

The value of this parameter is a positive integer.

### Return value type

Same as the data type of the parameter value.

### Examples

-   Example 1: Query the largest value of the request\_time field.
    
    -   Query statement ([Debug](https://sls.console.alibabacloud.com/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBtYXgocmVxdWVzdF90aW1lKSBBUyBtYXhfcmVxdWVzdF90aW1l%26queryTimeType%3D99%26startTime%3D1691378059%26endTime%3D1691378959))
        
        ```
        * | SELECT
          max(request_time) AS max_request_time
        ```
        
    -   Query and analysis results![MAX函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0321061361/p291936.png)
        
-   Example 2: Query the 10 largest values of the request\_time field.
    
    -   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBtYXgocmVxdWVzdF90aW1lLDEwKSBBUyAidG9wIDEwIg%3D%3D%26queryTimeType%3D99))
        
        ```
        * | SELECT
          max(request_time, 10) AS "top 10"
        ```
        
    -   Query and analysis results![max](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8835354361/p312832.png)
        

## max\_by function

The following list shows the syntax that is supported by the max\_by function.

### Syntax

-   If you use the following syntax, the function queries the value of _x_ that is associated with the largest value of the _y_ field.
    
    ```
    max_by(x, y)
    ```
    
-   If you use the following syntax, the function queries the values of _x_ that are associated with the _n_ largest values of the _y_ field. The function returns an array.
    
    ```
    max_by(x, y, n)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

_y_

The value of this parameter is of an arbitrary data type.

_n_

The value of this parameter is an integer greater than 0.

### Return value type

Same as the data type of the parameter value.

### Examples

-   Example 1: Query the point in time of the order that has the largest consumption amount.
    
    -   Query statement
        
        ```
        * | SELECT
          max_by(UsageEndTime, PretaxAmount) AS time
        ```
        
    -   Query and analysis results![max_by](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2011721361/p292722.png)
        
-   Example 2: Query the request methods of the requests that have the three largest values of the request\_time field.
    
    -   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBtYXhfYnkocmVxdWVzdF9tZXRob2QscmVxdWVzdF90aW1lLDMpIEFTIG1ldGhvZA%3D%3D%26queryTimeType%3D99))
        
        ```
        * | SELECT
          max_by(request_method, request_time, 3) AS method
        ```
        
    -   Query and analysis results![max_by](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2011721361/p292716.png)
        

## min function

The min function queries the smallest value of the _x_ field.

### Syntax

-   If you use the following syntax, the function queries the smallest value of the _x_ field.
    
    ```
    min(x)
    ```
    
-   If you use the following syntax, the function queries the _n_ smallest values of the _x_ field. The function returns an array.
    
    ```
    min(x,n)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

_n_

The value of this parameter is a positive integer.

### Return value type

Same as the data type of the parameter value.

### Examples

-   Example 1: Query the smallest value of the request\_time field.
    
    -   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBtaW4ocmVxdWVzdF90aW1lKSBBUyBtaW5fcmVxdWVzdF90aW1l%26queryTimeType%3D99))
        
        ```
        * | SELECT
          min(request_time) AS min_request_time
        ```
        
    -   Query and analysis results![MIN函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0321061361/p291937.png)
        
-   Example 2: Query the 10 smallest values of the request\_time field.
    
    -   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBtaW4ocmVxdWVzdF90aW1lLDEwKQ%3D%3D))
        
        ```
        * | SELECT
          min(request_time, 10)
        ```
        
    -   Query and analysis results![min](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8835354361/p312834.png)
        

## min\_by function

The following list shows the syntax that is supported by the min\_by function.

### Syntax

-   If you use the following syntax, the function queries the value of _x_ that is associated with the smallest value of the _y_ field.
    
    ```
    min_by(x, y)
    ```
    
-   If you use the following syntax, the function queries the values of _x_ that are associated with the _n_ smallest values of the _y_ field. The function returns an array.
    
    ```
    min_by(x, y, n)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

_y_

The value of this parameter is of an arbitrary data type.

_n_

The value of this parameter is an integer greater than 0.

### Return value type

Same as the data type of the parameter value.

### Examples

-   Example 1: Query the request method of the request that has the smallest value of the request\_time field.
    
    -   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBtaW5fYnkocmVxdWVzdF9tZXRob2QscmVxdWVzdF90aW1lKSBBUyBtZXRob2Q%3D%26queryTimeType%3D99))
        
        ```
        * | SELECT
          min_by(request_method, request_time) AS method
        ```
        
    -   Query and analysis results![min_by](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0321061361/p292727.png)
        
-   Example 2: Query the request methods of the requests that have the three smallest values of the request\_time field.
    
    -   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBtaW5fYnkocmVxdWVzdF9tZXRob2QscmVxdWVzdF90aW1lLDMpIEFTIG1ldGhvZA%3D%3D%26queryTimeType%3D99))
        
        ```
        * | SELECT
          min_by(request_method, request_time, 3) AS method
        ```
        
    -   Query and analysis results![max_by](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2011721361/p292716.png)
        

## skewness function

The skewness function calculates the skewness of the values of the _x_ field.

### Syntax

```
skewness(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double or bigint type.

### Return value type

The double type.

### Examples

Calculate the skewness of the values of the request\_time field.

-   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKnwgU0VMRUNUIHNrZXduZXNzKHJlcXVlc3RfdGltZSkgQVMgc2tld25lc3M%3D))
    
    ```
    *| SELECT
      skewness(request_time) AS skewness
    ```
    
-   Query and analysis results![skewness](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8835354361/p313222.png)
    

## sum function

The sum function calculates the sum of the values of the _x_ field.

### Syntax

```
sum(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double, bigint, decimal, or real type.

### Return value type

Same as the data type of the parameter value.

### Examples

Calculate the daily inbound traffic of the website.

-   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8IFNFTEVDVCBkYXRlX3RydW5jKCdkYXknLF9fdGltZV9fKSBBUyB0aW1lLCBzdW0oYm9keV9ieXRlc19zZW50KSBBUyBib2R5X2J5dGVzX3NlbnQgR1JPVVAgQlkgdGltZSBPUkRFUiBCWSB0aW1l))
    
    ```
    * | SELECT
      date_trunc('day', __time__) AS time,
      sum(body_bytes_sent) AS body_bytes_sent
    GROUP BY
      time
    ORDER BY
      time
    ```
    
-   Query and analysis results![SUM函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8601642071/p291940.png)
