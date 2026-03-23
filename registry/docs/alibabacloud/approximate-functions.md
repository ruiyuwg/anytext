This topic describes the basic syntax and provides examples of approximate functions.

Simple Log Service supports the following approximate functions.

**Important** If you want to use strings in analytic statements, you must enclose strings in single quotation marks (''). Strings that are not enclosed or enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Function**

**Syntax**

**Description**

SQL support

SPL support

[approx\_distinct function](#section-7e3-oue-n8d)

approx\_distinct(_x_)

Calculates the approximate number of distinct values in _x_. The default standard error is 2.3%.

√

×

approx\_distinct(_x_, _e_)

Calculates the approximate number of distinct values in _x_ and lets you specify a custom standard error.

√

×

[approx\_percentile function](#section-408-f86-n42)

approx\_percentile(_x_, _percentage_)

Sorts _x_ in ascending order and returns the approximate value of _x_ at the specified _percentage_. The result is an approximation, and its stability and consistency are not guaranteed.

√

×

approx\_percentile(_x_, array\[_percentage01_, _percentage02_...\])

Sorts _x_ in ascending order and returns the approximate values of _x_ at the specified percentages, such as _percentage01_ and _percentage02_. The result is an approximation, and its stability and consistency are not guaranteed.

√

×

approx\_percentile(_x_, _weight_, _percentage_)

Sorts the product of _x_ and its weight in ascending order and returns the approximate value of _x_ at the specified _percentage_. The result is an approximation, and its stability and consistency are not guaranteed.

√

×

approx\_percentile(_x_, _weight_, array\[_percentage01_, _percentage02_...\])

Sorts the product of _x_ and its weight in ascending order and returns the approximate values of _x_ at the specified percentages, such as _percentage01_ and _percentage02_. The result is an approximation, and its stability and consistency are not guaranteed.

√

×

approx\_percentile(_x_, _weight_, _percentage_, _accuracy_)

Sorts the product of _x_ and its weight in ascending order and returns the approximate value of _x_ at the specified _percentage_. Lets you set the accuracy of the return value. The result is an approximation, and its stability and consistency are not guaranteed.

√

×

[numeric\_histogram function](#section-0jv-o9t-uqn)

numeric\_histogram(_bucket_, _x_)

Calculates an approximate histogram for _x_ based on the number of buckets (histogram columns). The result is returned in JSON format.

√

×

numeric\_histogram(_bucket_, _x_, _weight_)

Calculates an approximate histogram for _x_ based on the number of buckets (histogram columns). The result is returned in JSON format. Lets you set a weight for _x_.

√

×

[numeric\_histogram\_u function](#section-wkn-k1v-ejt)

numeric\_histogram\_u(_bucket_, _x_)

Calculates an approximate histogram for _x_ based on the number of buckets (histogram columns). The result is returned in a multi-row, multi-column format.

√

×

[approx\_most\_frequent function](#3d12ca04b8a9e)

approx\_most\_frequent(k, x)

Calculates the approximate frequencies of the `k` most frequent values in column x. The result is returned as a MAP type.

√

×

## approx\_distinct function

The approx\_distinct function calculates the approximate number of distinct values in _x_.

### Syntax

-   Calculates the approximate number of distinct values in _x_. The default standard error is 2.3%.
    
    ```
    approx_distinct(x)
    ```
    
-   Calculates the approximate number of distinct values in _x_ and lets you specify a custom standard error.
    
    ```
    approx_distinct(x, e)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value can be of any data type.

_e_

The custom standard error. The value must be in the range of \[0.0115, 0.26\].

### Return value type

bigint

### Examples

-   Example 1: Use the count function to calculate page views (PVs) and the approx\_distinct function to calculate the approximate number of unique visitors (UVs) based on the distinct values of the client\_ip field. The standard error is 2.3%.
    
    -   Query statement
        
        ```
        * |SELECT count(*) AS PV, approx_distinct(client_ip) AS UV
        ```
        
    -   Query and analytic results![approx_distinct](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8355367261/p275028.png)
        
-   Example 2: Use the count function to calculate PVs and the approx\_distinct function to calculate the approximate number of UVs based on the distinct values of the client\_ip field. The custom standard error is 10%.
    
    -   Query statement
        
        ```
        * |SELECT count(*) AS PV, approx_distinct(client_ip,0.1) AS UV
        ```
        
    -   Query and analytic results![approx_distinct](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7458219361/p332601.png)
        

## approx\_percentile function

The approx\_percentile function sorts _x_ in ascending order and returns the approximate value at the specified _percentage_. Because the result is an approximation, its stability and consistency are not guaranteed.

### Syntax

-   Sorts _x_ in ascending order and returns the approximate value of _x_ at the specified _percentage_. The return value is a double.
    
    ```
    approx_percentile(x, percentage)
    ```
    
-   Sorts _x_ in ascending order and returns the approximate values of _x_ at the specified percentages, such as percentage01 and percentage02. The return value is of the array(double,double) type.
    
    ```
    approx_percentile(x, array[percentage01, percentage02...])
    ```
    
-   Sorts the product of _x_ and its weight in ascending order and returns the approximate value of _x_ at the specified _percentage_. The return value is a double.
    
    ```
    approx_percentile(x, weight, percentage)
    ```
    
-   Sorts the product of _x_ and its weight in ascending order and returns the approximate values of _x_ at the specified percentages, such as percentage01 and percentage02. The return value is of the array(double,double) type.
    
    ```
    approx_percentile(x, weight, array[percentage01, percentage02...])
    ```
    
-   Sorts the product of _x_ and its weight in ascending order and returns the approximate value of _x_ at the specified _percentage_. The return value is a double. You can also set the accuracy of the return value.
    
    ```
    approx_percentile(x, weight, percentage, accuracy)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value must be of the double type.

_percentage_

The percentage value. The value must be in the range of \[0, 1\].

_accuracy_

The accuracy. The value must be in the range of (0, 1).

_weight_

The weight. The value must be an integer greater than 1.

If you set a weight, the system sorts the data based on the product of _x_ and the weight.

### Return value type

double or array(double,double)

### Examples

-   Example 1: Sorts the request\_time column and returns the approximate value of the request\_time field at the 50th percentile.
    
    -   Query statement
        
        ```
        *| SELECT approx_percentile(request_time,0.5)
        ```
        
    -   Query and analytic results![approx_percentile](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8355367261/p275047.png)
        
-   Example 2: Sort the request\_time column and return the request\_time values at the 10th, 20th, and 70th percentiles.
    
    -   Query statement
        
        ```
        *| SELECT approx_percentile(request_time,array[0.1,0.2,0.7])
        ```
        
    -   Query and analytic results![approx_percentile](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8355367261/p275048.png)
        
-   Example 3: This example sorts the request\_time column based on the product of the request\_time value and its weight, and then returns the approximate 50th percentile value from the request\_time field. The weight is 100 if the request\_time value is less than 20, and 10 otherwise.
    
    -   Query statement
        
        ```
        * |
        SELECT
          approx_percentile(
            request_time,case
              when request_time < 20 then 100
              else 10
            end,
            0.5
          )
        ```
        
    -   Query and analytic results![approx_percentile](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7458219361/p325841.png)
        
-   Example 4: Sort the request\_time column by the product of request\_time and its weight, and then return the approximate values of request\_time at the 80th and 90th percentiles. The weight is 100 if request\_time is less than 20. Otherwise, the weight is 10.
    
    -   Query statement
        
        ```
        * |
        SELECT
          approx_percentile(
            request_time,case
              when request_time < 20 then 100
              else 10
            end,
            array [0.8,0.9]
          )
        ```
        
    -   Query and analytic results![approx_percentile](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7458219361/p332605.png)
        
-   Example 5: Sort the request\_time column by the product of request\_time and its weight, and then return the approximate value of the request\_time field at the 50th percentile with an accuracy of 0.2, where the weight is 100 if request\_time is less than 20 and 10 otherwise.
    
    -   Query statement
        
        ```
        * |
        SELECT
          approx_percentile(
            request_time,case
              when request_time < 20 then 100
              else 10
            end,
            0.5,
            0.2
          )
        ```
        
    -   Query and analytic results![approx_percentile](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7458219361/p325841.png)
        

## numeric\_histogram function

The numeric\_histogram function calculates an approximate histogram for _x_. The result is returned in JSON format.

### Syntax

-   Calculates an approximate histogram for _x_ based on a specified number of buckets.
    
    ```
    numeric_histogram(bucket, x)
    ```
    
-   Calculates an approximate histogram for _x_ based on a specified number of buckets. You can also specify a weight for _x_.
    
    ```
    numeric_histogram(bucket, x, weight)
    ```
    

### Parameters

**Parameter**

**Description**

_bucket_

The number of columns in the histogram. The value must be of the bigint type.

_x_

The value must be of the double type.

_weight_

The weight. The value must be an integer greater than 0.

If you set a weight, the system groups the data based on the product of _x_ and the weight.

### Return value type

JSON

### Examples

-   Example 1: Calculate an approximate histogram of request durations for POST requests.
    
    -   Query statement
        
        ```
        request_method:POST | SELECT numeric_histogram(10,request_time)
        ```
        
    -   Query and analytic results![numeric_histogram](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7450161361/p275060.png)
        
-   Example 2: Calculate a weighted, approximate histogram of request durations for POST requests. The weight is based on the request\_time value.
    
    -   Query statement
        
        ```
        request_method:POST| SELECT numeric_histogram(10, request_time,case when request_time<20 then 100 else 10 end)
        ```
        
    -   Query and analytic results![numeric_histogram](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7458219361/p325846.png)
        

## numeric\_histogram\_u function

The numeric\_histogram\_u function calculates an approximate histogram for _x_. The result is returned in a multi-row, multi-column format.

### Syntax

```
numeric_histogram_u(bucket, x)
```

### Parameters

**Parameter**

**Description**

_bucket_

The number of columns in the histogram. The value must be of the bigint type.

_x_

The value must be of the double type.

### Return value type

double

### Examples

Calculate an approximate histogram of request durations for POST requests.

-   Query statement
    
    ```
    request_method:POST | select numeric_histogram_u(10,request_time)
    ```
    
-   Query and analytic results![numeric_histogram_u](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9355367261/p275059.png)
    

## approx\_most\_frequent **function**

Calculates the approximate frequencies of the `k` most frequent values in column `x`.

### **Syntax**

```
approx_most_frequent(k, x)
```

### **Parameters**

**Parameter**

**Description**

k

The number of most frequent values to return. For example, a value of 5 indicates that the function returns the approximate frequencies of the top 5 most frequent values.

x

The value must be of the varchar type.

### **Return value type**

map(varchar, bigint)

### **Example**

Retrieve the three most frequent values in the `content` field.

-   Sample data
    
    ```
    content: 
    'A'
    'B'
    'A'
    'C'
    'A'
    'B'
    'C'
    'D'
    'E'
    ```
    
-   Query statement
    
    ```
    select approx_most_frequent(3, content)
    ```
    
-   Output
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7128643571/p989948.png)
