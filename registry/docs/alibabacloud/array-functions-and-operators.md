This topic describes the syntax of array functions and operators. This topic also provides examples on how to use the functions and operators.

The following table describes the array functions and operators that are supported by Simple Log Service.

**Important** If you want to use strings in analytic statements, you must enclose strings in single quotation marks (''). Strings that are not enclosed or enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Function or operator**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

[Subscript operator](#section-hc8-r42-4f1)

\[_x_\]

Returns the element whose index is _x_ in an array. This operator is equivalent to the element\_at function.

√

×

[array\_agg function](#section-vj9-7pe-r2d)

array\_agg(_x_)

Returns an array that consists of all values of the _x_ field.

√

×

[array\_distinct function](#section-res-w0o-tyn)

array\_distinct(_x_)

Removes duplicate elements from an array.

√

√

[array\_except function](#section-h1n-rrz-7xn)

array\_except(_x_, _y_)

Calculates the difference of two arrays.

√

√

[array\_intersect function](#section-dow-rd7-j1s)

array\_intersect(_x_, _y_)

Calculates the intersection of two arrays.

√

√

[array\_join function](#section-y0i-i9z-xty)

array\_join(_x_, _delimiter_)

Concatenates the elements of an array into a string by using a specified delimiter. If the array contains a null element, the null element is ignored.

**Important**

The array\_join function can return up to 1 KB of data. If the size of the data to return exceeds 1 KB, the data is truncated.

√

√

array\_join(_x_, _delimiter_, _null\_replacement_)

Concatenates the elements of an array into a string by using a specified delimiter. If the array contains a null element, the null element is replaced with the value of the _null\_replacement_ parameter.

**Important**

The array\_join function can return up to 1 KB of data. If the size of the data to return exceeds 1 KB, the data is truncated.

√

√

[array\_max function](#section-g74-ifm-3y2)

array\_max(_x_)

Returns the maximum value in an array.

√

√

[array\_min function](#section-hoa-0c2-v3i)

array\_min(_x_)

Returns the minimum value in an array.

√

√

[array\_position function](#section-stg-8ts-0yz)

array\_position(_x_, _element_)

Returns the index of a specified element in an array. The index starts from 1. If the specified element does not exist, the function returns 0.

√

√

[array\_remove function](#section-dfv-lrb-5h4)

array\_remove(_x_, _element_)

Removes a specified element from an array.

√

√

[array\_sort function](#section-fa7-vfh-ppe)

array\_sort(_x_)

Sorts the elements in an array in ascending order. If the array contains a null element, the null element is placed at the end.

√

√

[array\_transpose function](#section-o88-53y-45b)

array\_transpose(_x_)

Transposes a matrix and returns a new two-dimensional array that consists of the elements in the matrix. The elements are located by using the same indexes.

√

×

[array\_union function](#section-0d8-lwf-qsb)

array\_union(_x_, _y_)

Calculates the union of two arrays.

√

×

[cardinality function](#section-srb-gig-ruv)

cardinality(_x_)

Counts the number of elements in an array.

√

√

[concat function](#section-gsz-ub6-5p0)

concat(_x_, _y_…)

Concatenates multiple arrays into one array.

√

×

[contains function](#section-ur1-7aw-3t1)

contains(_x_, _element_)

Checks whether an array contains a specified element. If the array contains the specified element, the function returns true.

√

×

[element\_at function](#section-jrg-mzu-fx7)

element\_at(_x_, _y_)

Returns the element whose index is _y_ in an array.

√

×

[filter function](#section-oc8-co0-0ko)

filter(_x_, _lambda\_expression_)

Filters elements in an array based on a lambda expression and returns elements that match the lambda expression.

√

√

[flatten function](#section-xr2-nyb-a70)

flatten(_x_)

Transforms a two-dimensional array into a one-dimensional array.

√

×

[reduce function](#section-2sp-yn9-lqj)

reduce(_x_, _lambda\_expression_)

Returns the sum of the elements in an array based on a lambda expression.

√

√

[reverse function](#section-i9q-wgg-jdp)

reverse(_x_)

Reverses the elements in an array.

√

√

[sequence function](#section-enw-ez1-j1q)

sequence(_x_, _y_)

Returns an array of elements within a specified range. The elements are consecutive and incremental. The incremental step is 1, which is the default value.

√

√

sequence(_x_, _y_, _step_)

Returns an array of elements within a specified range. The elements are consecutive and incremental. The incremental step is a custom value.

√

√

[shuffle function](#section-rwc-c8r-3pk)

shuffle(_x_)

Shuffles the elements in an array.

√

√

[slice function](#section-07i-dou-qlb)

slice(_x_, _start_, _length_)

Returns a subset of an array.

√

√

[transform function](#section-898-i2g-vgz)

transform(_x_, _lambda\_expression_)

Transforms each element in an array by using a lambda expression.

√

√

[zip function](#section-pvf-bgc-91n)

zip(_x_, _y_...)

Merges multiple arrays into a two-dimensional array. Elements that have the same index in the input arrays form a new array in the two-dimensional array.

√

√

[zip\_with function](#section-6to-ny5-xzj)

zip\_with(_x_, _y_, _lambda\_expression_)

Merges two arrays into one array by using a lambda expression.

√

×

## Subscript operator

The subscript operator returns the element whose index is _x_ in an array. This operator is equivalent to the element\_at function.

### Syntax

```
[x]
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is the index of an element in the array. The index starts from 1. The value of this parameter is of the bigint type.

### Return value type

The data type of the specified element.

### Examples

Return the first element in the value of the number field.

-   Sample field
    
    ```
    number:[49,50,45,47,50]
    ```
    
-   Query statement
    
    ```
    * | SELECT cast(json_parse(number) as array(bigint)) [1]
    ```
    
-   Query and analysis results![下标运算符](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8673125361/p303715.png)
    

## array\_agg function

The array\_agg function returns an array that consists of all values of the _x_ field.

### Syntax

```
array_agg (x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary data type.

### Return value type

The array type.

### Examples

Return an array that consists of all values of the status field.

-   Query statement
    
    ```
    * | SELECT array_agg(status) AS array
    ```
    
-   Query and analysis results![array_agg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0713235361/p298493.png)
    

## array\_distinct function

The array\_distinct function removes duplicate elements from an array.

### Syntax

```
array_distinct(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

### Return value type

The array type.

### Examples

Remove duplicate elements from the value of the number field.

-   Sample field
    
    ```
    number:[49,50,45,47,50]
    ```
    
-   Query statement
    
    ```
    *| SELECT array_distinct(cast(json_parse(number) as array(bigint)))
    ```
    
-   Query and analysis results![array_distinct](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8673125361/p302857.png)
    

## array\_except function

The array\_except function calculates the difference of two arrays.

### Syntax

```
array_except(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_y_

The value of this parameter is of the array type.

### Return value type

The array type.

### Examples

Calculate the difference of the \[1,2,3,4,5\] and \[1,3,5,7\] arrays.

-   Query statement
    
    ```
    * | SELECT array_except(array[1,2,3,4,5],array[1,3,5,7])
    ```
    
-   Query and analysis results![array_except](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8673125361/p302866.png)
    

## array\_intersect function

The array\_intersect function calculates the intersection of two arrays.

### Syntax

```
array_intersect(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_y_

The value of this parameter is of the array type.

### Return value type

The array type.

### Examples

Calculate the intersection of the \[1,2,3,4,5\] and \[1,3,5,7\] arrays.

-   Query statement
    
    ```
    * | SELECT array_intersect(array[1,2,3,4,5],array[1,3,5,7])
    ```
    
-   Query and analysis results![array_intersect](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8673125361/p302869.png)
    

## array\_join function

The array\_join function concatenates the elements of an array into a string by using a specified delimiter.

### Syntax

-   If you use the following syntax, the function concatenates the elements of an array into a string by using a specified delimiter. If the array contains a null element, the null element is ignored.
    
    ```
    array_join(x, delimiter)
    ```
    
-   If you use the following syntax, the function concatenates the elements of an array into a string by using a specified delimiter. If the array contains a null element, the null element is replaced with the value of the _null\_replacement_ parameter.
    
    ```
    array_join(x, delimiter,null_replacement)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of an arbitrary array type.

_delimiter_

The value of this parameter is the delimiter that is used to concatenate elements. You can specify a string for this parameter.

_null\_replacement_

The value of this parameter is the string that is used to replace a null element.

### Return value type

The varchar type.

### Examples

Concatenate the elements of the \[null, 'Log','Service'\] array into a string by using spaces and replace the null element with Alicloud.

-   Query statement
    
    ```
    * | SELECT array_join(array[null,'Log','Service'],' ','Alicloud')
    ```
    
-   Query and analysis results![array_join](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8673125361/p302915.png)
    

## array\_max function

The array\_max function returns the maximum value in an array.

### Syntax

```
array_max(x) 
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

**Important**

If an array contains a null element, the function returns null.

### Return value type

Same as the data type of the elements in the parameter value.

### Examples

Return the maximum value in an array.

-   Sample field
    
    ```
    number:[49,50,45,47,50]
    ```
    
-   Query statement
    
    ```
    *| SELECT array_max(try_cast(json_parse(number) as array(bigint))) AS max_number
    ```
    
-   Query and analysis results![array_max](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8673125361/p302851.png)
    

## array\_min function

The array\_min function returns the minimum value in an array.

### Syntax

```
array_min(x) 
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

**Important**

If an array contains a null element, the function returns null.

### Return value type

Same as the data type of the elements in the parameter value.

### Examples

Return the minimum value in an array.

-   Sample field
    
    ```
    number:[49,50,45,47,50]
    ```
    
-   Query statement
    
    ```
    *| SELECT array_min(try_cast(json_parse(number) as array(bigint))) AS min_number
    ```
    
-   Query and analysis results![array_min](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8673125361/p302852.png)
    

## array\_position function

The array\_position function returns the index of a specified element in an array. The index starts from 1. If the specified element does not exist, the function returns 0.

### Syntax

```
array_position(x, element)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_element_

The value of this parameter is an element in the array.

**Note**

If the element is null, the function returns null.

### Return value type

The bigint type.

### Examples

Return the index of 45 in the \[49,45,47\] array.

-   Query statement
    
    ```
    * | SELECT array_position(array[49,45,47],45)
    ```
    
-   Query and analysis results![array_position](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1713235361/p302925.png)
    

## array\_remove function

The array\_remove function removes a specified element from an array.

### Syntax

```
array_remove(x, element)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_element_

The value of this parameter is an element in the array.

**Note**

If the element is null, the function returns null.

### Return value type

The array type.

### Examples

Remove 45 from the \[49,45,47\] array.

-   Query statement
    
    ```
    * | SELECT array_remove(array[49,45,47],45)
    ```
    
-   Query and analysis results![array_remove函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1713235361/p302944.png)
    

## array\_sort function

The array\_sort function sorts the elements in an array in ascending order. If the array contains a null element, the null element is placed at the end.

### Syntax

```
array_sort(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

### Return value type

The array type.

### Examples

Sort the elements in the \['b', 'd', null, 'c', 'a'\] array in ascending order.

-   Query statement
    
    ```
    * | SELECT array_sort(array['b','d',null,'c','a'])
    ```
    
-   Query and analysis results![array_sort](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8673125361/p302953.png)
    

## array\_transpose function

The array\_transpose function transposes a matrix and returns a new two-dimensional array that consists of the elements in the matrix. The elements are located by using the same indexes.

### Syntax

```
array_transpose(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array(double) type.

### Return value type

The array(double) type.

### Examples

Create a two-dimensional array from elements that are located by using the same indexes in a different two-dimensional array. For example, in the \[0,1,2,3\], \[10,19,18,17\], and \[9,8,7\] arrays, 0, 10, and 9 are located by using the index 1. This way, the new array \[0.0,10.0,9.0\] is formed.

-   Query statement
    
    ```
    * | SELECT array_transpose(array[array[0,1,2,3],array[10,19,18,17],array[9,8,7]])
    ```
    
-   Query and analysis results![array_transpose](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9673125361/p303464.png)
    

## array\_union function

The array\_union function calculates the union of two arrays.

### Syntax

```
array_union(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_y_

The value of this parameter is of the array type.

### Return value type

The array type.

### Examples

Calculate the union of the \[1,2,3,4,5\] and \[1,3,5,7\] arrays.

-   Query statement
    
    ```
    * | SELECT array_union(array[1,2,3,4,5],array[1,3,5,7])
    ```
    
-   Query and analysis results![array_union](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9673125361/p302961.png)
    

## cardinality function

The cardinality function counts the number of elements in an array.

### Syntax

```
cardinality(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

### Return value type

The bigint type.

### Examples

Count the number of elements in the value of the number field.

-   Sample field
    
    ```
    number:[49,50,45,47,50]
    ```
    
-   Query statement
    
    ```
    *| SELECT cardinality(cast(json_parse(number) as array(bigint)))
    ```
    
-   Query and analysis results![cardinality](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9673125361/p303056.png)
    

## concat function

The concat function concatenates multiple arrays into one array.

### Syntax

```
concat(x, y…)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_y_

The value of this parameter is of the array type.

### Return value type

The array type.

### Examples

Concatenate the \['red','blue'\] and \['yellow','green'\] arrays into one array.

-   Query statement
    
    ```
    * | SELECT concat(array['red','blue'],array['yellow','green'])
    ```
    
-   Query and analysis results![concat-array](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9673125361/p302975.png)
    

## contains function

The contains function checks whether an array contains a specified element. If the array contains the specified element, the function returns true.

### Syntax

```
contains(x, element)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_element_

The value of this parameter is an element in an array.

### Return value type

The Boolean type.

### Examples

Check whether the value of the region field contains cn-beijing.

-   Sample field
    
    ```
    region:["cn-hangzhou","cn-shanghai","cn-beijing"]
    ```
    
-   Query statement
    
    ```
    *| SELECT contains(cast(json_parse(region) as array(varchar)),'cn-beijing')
    ```
    
-   Query and analysis results![contains](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9673125361/p303013.png)
    

## element\_at function

The element\_at function returns the element whose index is _y_ in an array.

### Syntax

```
element_at(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_y_

The value of this parameter is the index of an element in the array. The index starts from 1. The value of this parameter is of the bigint type.

### Return value type

An arbitrary data type.

### Examples

Return the second element in the value of the number field.

-   Sample field
    
    ```
    number:[49,50,45,47,50]
    ```
    
-   Query statement
    
    ```
    * |
    SELECT
      element_at(cast(json_parse(number) AS array(varchar)), 2)
    ```
    
-   Query and analysis results![ element_at](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8977878361/p335931.png)
    

## filter function

The filter function filters elements in an array based on a lambda expression and returns elements that match the lambda expression.

### Syntax

```
filter(x, lambda_expression)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_lambda\_expression_

The value of this parameter is a lambda expression. For more information, see [Lambda expressions](/help/en/sls/lambda-expressions#reference-zwt-jmq-zdb).

### Return value type

The array type.

### Examples

Return the elements that are greater than 0 in the \[5,-6,null,7\] array by using the `x -> x > 0` lambda expression.

-   Query statement
    
    ```
    * | SELECT filter(array[5,-6,null,7],x -> x > 0)
    ```
    
-   Query and analysis results![filter](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9673125361/p303068.png)
    

## flatten function

The flatten function transforms a two-dimensional array into a one-dimensional array.

### Syntax

```
flatten(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

### Return value type

The array type.

### Examples

Transform the two-dimensional array \[array\[1,2,3,4\],array\[5,2,2,4\] into a one-dimensional array.

-   Query statement
    
    ```
    * | SELECT flatten(array[array[1,2,3,4],array[5,2,2,4]])
    ```
    
-   Query and analysis results![flatten](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9673125361/p303130.png)
    

## reduce function

The reduce function returns the sum of the elements in an array based on a lambda expression.

### Syntax

```
reduce(x, lambda_expression)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_lambda\_expression_

The value of this parameter is a combination of an initial value, the lambda expression that you want to use, and the processing method of the lambda expression result. For more information, see [Lambda expressions](/help/en/sls/lambda-expressions#reference-zwt-jmq-zdb).

### Return value type

The bigint type.

### Examples

Return the sum of the elements in the \[5,20,50\] array.

-   Query statement
    
    ```
    * | SELECT reduce(array[5,20,50],0,(s, x) -> s + x, s -> s)
    ```
    
-   Query and analysis results![reduce](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9673125361/p303133.png)
    

## reverse function

The reverse function reverses the elements in an array.

### Syntax

```
reverse(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

### Return value type

The array type.

### Examples

Reverse the elements in the \[1,2,3,4,5\] array.

-   Query statement
    
    ```
    * | SELECT reverse(array[1,2,3,4,5])
    ```
    
-   Query and analysis results![reverse](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9673125361/p303006.png)
    

## sequence function

The sequence function returns an array of elements within a specified range. The elements are consecutive and incremental.

### Syntax

-   If you use the following syntax, you must use the default incremental step, which is 1.
    
    ```
    sequence(x, y)
    ```
    
-   If you use the following syntax, you can specify a custom incremental step.
    
    ```
    sequence(x, y, step)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the bigint or timestamp type. UNIX timestamps and date and time expressions are supported.

_y_

The value of this parameter is of the bigint or timestamp type. UNIX timestamps and date and time expressions are supported.

_step_

The value of this parameter is an incremental step.

If the values of the x and y parameters are date and time expressions, the value of the _step_ parameter is in one of the following formats:

-   `interval ' n' year to month`: The incremental step is n years.
    
-   `interval 'n' day to second`: The incremental step is n days.
    

### Return value type

The array type.

### Examples

-   Example 1: Return the even numbers from 0 to 10.
    
    -   Query statement
        
        ```
        * | SELECT sequence(0,10,2)
        ```
        
    -   Query and analysis results![sequence](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9673125361/p303486.png)
        
-   Example 2: Return the dates from October 23, 2017 to August 12, 2021 at the incremental step of 1 year.
    
    -   Query statement
        
        ```
        ww* | SELECT  sequence(from_unixtime(1508737026),from_unixtime(1628734085),interval '1' year to month )
        ```
        
    -   Query and analysis results![sequence](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5205235361/p303668.png)
        
-   Example 3: Return the UNIX timestamps from 1628733298 to 1628734085 at the incremental step of 60 seconds.
    
    -   Query statement
        
        ```
        * | SELECT  sequence(1628733298,1628734085,60)
        ```
        
    -   Query and analysis results![sequence](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9673125361/p303666.png)
        

## shuffle function

The shuffle function shuffles the elements in an array.

### Syntax

```
shuffle(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

### Return value type

The array type.

### Examples

Shuffle the elements in the \[1,2,3,4,5\] array.

-   Query statement
    
    ```
    *| SELECT shuffle(array[1,2,3,4,5])
    ```
    
-   Query and analysis results![shuffle](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9673125361/p303016.png)
    

## slice function

The slice function returns a subset of an array.

### Syntax

```
slice(x, start, length)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_start_

The value of this parameter is the index at which Simple Log Service starts to extract elements.

-   If the value of the _start_ parameter is a negative number, Simple Log Service starts to extract elements from the end of the array.
    
-   If the value of the _start_ parameter is a positive number, Simple Log Service starts to extract elements from the beginning of the array.
    

_length_

The value of this parameter is the number of elements in the subset that you want to obtain.

### Return value type

The array type.

### Examples

Return a subset of the \[1,2,4,5,6,7,7\] array from the third element. The subset consists of two elements.

-   Query statement
    
    ```
    * | SELECT slice(array[1,2,4,5,6,7,7],3,2)
    ```
    
-   Query and analysis results![slice](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9673125361/p303021.png)
    

## transform function

The transform function transforms each element in an array by using a lambda expression.

### Syntax

```
transform(x, lambda_expression)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_lambda\_expression_

The value of this parameter is a lambda expression. For more information, see [Lambda expressions](/help/en/sls/lambda-expressions#reference-zwt-jmq-zdb).

### Return value type

The array type.

### Examples

Add 1 to each element in the \[5,6\] array and return a new array.

-   Query statement
    
    ```
    * | SELECT transform(array[5,6],x -> x + 1)
    ```
    
-   Query and analysis results![transform](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0773125361/p303054.png)
    

## zip function

The zip function merges multiple arrays into a two-dimensional array. Elements that have the same index in the input arrays form a new array in the two-dimensional array.

### Syntax

```
zip(x, y...) 
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_y_

The value of this parameter is of the array type.

### Return value type

The array type.

### Examples

Merge the \[1, 2,3\], \['1b', null, '3b'\], and \[1, 2,3\] arrays into a two-dimensional array.

-   Query statement
    
    ```
    * | SELECT zip(array[1,2,3], array['1b',null,'3b'],array[1,2,3])
    ```
    
-   Query and analysis results![zip](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0773125361/p303030.png)
    

## zip\_with function

The zip\_with function merges two arrays into one array by using a lambda expression.

### Syntax

```
zip_with(x, y, lambda_expression)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the array type.

_y_

The value of this parameter is of the array type.

_lambda\_expression_

The value of this parameter is a lambda expression. For more information, see [Lambda expressions](/help/en/sls/lambda-expressions#reference-zwt-jmq-zdb).

### Return value type

The array type.

### Examples

Use the `(x, y) -> x + y` lambda expression to add the elements in the \[1, 2\] and \[3, 4\] arrays and return a new array.

-   Query statement
    
    ```
    SELECT zip_with(array[1,2], array[3,4],(x,y) -> x + y)
    ```
    
-   Query and analysis results![zip_with](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0773125361/p303038.png)
