Simple Log Service allows you to define a lambda expression in the Structured Query Language (SQL) or Simple Log Service Processing Language (SPL) and pass the expression to a specified function. This topic describes the syntax of lambda expressions and provides usage examples.

## Syntax

You must use lambda expressions together with functions, such as [filter function](/help/en/sls/array-functions-and-operators#section-oc8-co0-0ko), [reduce function](/help/en/sls/array-functions-and-operators#section-2sp-yn9-lqj), [transform function](/help/en/sls/array-functions-and-operators#section-898-i2g-vgz), [zip\_with function](/help/en/sls/array-functions-and-operators#section-6to-ny5-xzj), and [map\_filter function](/help/en/sls/map-functions-and-operators#section-zsf-pks-2v2).

```
parameter -> expression
```

**Parameter**

**Description**

_parameter_

The identifier that is used to pass parameters.

_expression_

The lambda expression, which can include most MySQL expressions. Examples:

```
x -> x + 1
(x, y) -> x + y
x -> regexp_like(x, 'a+')
x -> x[1] / x[2]
x -> if(x > 0, x, -x)
x -> coalesce(x, 0)
x -> cast(x AS JSON)
x -> x + try(1 / 0)
```

## Examples

### Example1: x -> x is not null

This lambda expression is used to return not-null elements in the \[5, null, 7, null\] array.

-   Query statement
    
    ```
    * | SELECT filter(array[5, null, 7, null], x -> x is not null)
    ```
    
-   Query and analysis results![filter function](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8711035361/p303951.png)
    

### Example 2: 0, (s, x) -> s + x, s -> s

This lambda expression is used to return the sum of each element in the \[5, 20, 50\] array.

-   Query statement
    
    ```
    * | SELECT reduce(array[5, 20, 50], 0, (s, x) -> s + x, s -> s)
    ```
    
-   Query and analysis results![reduce](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9673125361/p303133.png)
    

### Example 3: (k,v) -> v > 10

This lambda expression is used to create a map from two arrays. The values of keys in the map are greater than 10.

-   Query statement
    
    ```
    * | SELECT map_filter(map(array['class01', 'class02', 'class03'], array[11, 10, 9]), (k,v) -> v > 10)
    ```
    
-   Query and analysis results![map_filter](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8711035361/p303952.png)
    

### Example 4: (x, y) -> (y, x)

This lambda expression is used to transpose elements in two arrays and retrieve elements that are located by using the same index to form a new two-dimensional array.

-   Query statement
    
    ```
    * | SELECT zip_with(array[1, 3, 5], array['a', 'b', 'c'], (x, y) -> (y, x))
    ```
    
-   Query and analysis results![zip_with](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8711035361/p303967.png)
    

### Example 5: x -> coalesce(x, 0) + 1

This lambda expression is used to add 1 to each element in the \[5, NULL, 6\] array and return the result. The null element in the array is converted to 0 before it is added to 1.

-   Query statement
    
    ```
    * | SELECT transform(array[5, NULL, 6], x -> coalesce(x, 0) + 1)
    ```
    
-   Query and analysis results![transform](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8711035361/p303968.png)
    

### Additional examples

```
* | SELECT filter(array[], x -> true)
* | SELECT map_filter(map(array[],array[]), (k, v) -> true)
* | SELECT reduce(array[5, 6, 10, 20], -- calculates arithmetic average: 10.25
              cast(row(0.0, 0) AS row(sum double, count integer)),
              (s, x) -> cast(row(x + s.sum, s.count + 1) AS row(sum double, count integer)),
              s -> if(s.count = 0, null, s.sum / s.count))
* | SELECT reduce(array[2147483647, 1], cast(0 AS bigint), (s, x) -> s + x, s -> s)
* | SELECT reduce(array[5, 20, null, 50], 0, (s, x) -> s + x, s -> s)
* | SELECT transform(array[array[1, null, 2], array[3, null]], a -> filter(a, x -> x is not null))
* | SELECT zip_with(array['a', 'b', 'c'], array['d', 'e', 'f'], (x, y) -> concat(x, y))
```
