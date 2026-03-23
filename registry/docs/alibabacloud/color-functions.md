This topic describes the syntax of color functions. This topic also provides examples on how to use the functions.

The following table describes the color functions that are supported by Simple Log Service.

**Important**

-   If you want to use strings in analytic statements, you must enclose the strings in single quotation marks (''). Strings that are not enclosed or strings that are enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.
    
-   When you use color functions in the Simple Log Service console, the display of query and analysis results is compromised. To avoid this issue, we recommend that you view the query and analysis results on your server.
    
    -   Display of query and analysis results in the console![render](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1173470461/p326002.png)
        
    -   Display of query and analysis results on a server![color](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1173470461/p326122.png)
        

**Function**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

[bar function](#section-wfn-p5x-yfk)

bar(_x_, _width_)

Returns a part of an ANSI bar chart. You can configure the _width_ parameter to specify the width of the ANSI bar chart. However, you cannot configure the high\_color or low\_color parameter to specify the colors for the chart. The default values of the high\_color and low\_color parameters are used. The default value of the low\_color parameter is red, and the default value of the high\_color parameter is green. In addition, you can configure _x_ to specify the length of the part that is returned by the function.

√

×

bar(_x_, _width_, _low\_color_, _high\_color_)

Returns a part of an ANSI bar chart. You can configure the _width_ parameter to specify the width of the ANSI bar chart. You can also configure the high\_color and low\_color parameters to specify custom colors for the chart. In addition, you can configure _x_ to specify the length of the part that is returned by the function.

√

×

[color function](#section-x72-svx-d1s)

color(string)

Converts a color string to a color type.

√

×

color(_x_, _low_, _high_, _low\_color_, _high\_color_)

Returns a color between _high\_color_ and _low\_color_ based on the portions of _high\_color_ and _low\_color_. The portions are determined by the proportion of _x_ between _high_ and _low_.

√

×

color(_y_, _low\_color_, _high\_color_)

Returns a color between _high\_color_ and _low\_color_ based on the portions of _high\_color_ and _low\_color_. The portions are determined by _y_.

√

×

[render function](#section-4tb-hmv-kom)

render(_boolean expression_)

Returns results by using color rendering. If the Boolean expression evaluates to true, the function returns a green tick. If the Boolean expression evaluates to false, the function returns a red cross.

√

×

render(_x_, _color_)

Returns results by using custom color rendering.

√

×

[rgb function](#section-5yb-uhm-wer)

rgb(_red_, _green_, _blue_)

Returns a color value based on an RGB value.

√

×

## bar function

The bar function returns an ANSI bar chart.

### Syntax

-   If you use the following syntax, the function returns a part of an ANSI bar chart. You can configure the _width_ parameter to specify the width of the ANSI bar chart. However, you cannot configure the high\_color or low\_color parameter to specify the colors for the chart. The default values of the high\_color and low\_color parameters are used. The default value of the low\_color parameter is red, and the default value of the high\_color parameter is green. In addition, you can configure _x_ to specify the length of the part that is returned by the function.
    
    ```
    bar(x, width)
    ```
    
-   If you use the following syntax, the function returns a part of an ANSI bar chart. You can configure the _width_ parameter to specify the width of the ANSI bar chart. You can also configure the high\_color and low\_color parameters to specify custom colors for the chart. In addition, you can configure _x_ to specify the length of the part that is returned by the function.
    
    ```
    bar(x, width, low_color, high_color)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The proportion of the part that is returned by the function to the ANSI bar chart. The value of this parameter is of the double type. Valid values: \[0,1\].

_width_

The width of the ANSI bar chart.

_low\_color_

The RGB value of the start color.

_high\_color_

The RGB value of the end color.

### Return value type

The varchar type.

### Examples

-   Example 1: Obtain a part of an ANSI bar chart based on the proportion of page views (PVs) within a specified hour to the total PVs.
    
    -   Query statement
        
        ```
        * |
        SELECT
          Method,
          bar(pv/m,100)
        FROM(
            SELECT
              *,
              max(pv) over() AS m
            FROM(
                SELECT
                  Method,
                  count(1) AS pv
                FROM         internal-operation_log
                WHERE
                  __date__ > '2021-09-10 00:00:00'
                  AND __date__ < '2021-09-10 01:00:00'
                GROUP BY
                  Method
              )
          )
        ```
        
    -   Query and analysis results (console)![bar](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1173470461/p325978.png)
        
    -   Query and analysis results (server)![bar](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1173470461/p327073.png)
        
-   Example 2: Obtain an ANSI bar chart that is displayed in red and white and has a width of 50.
    
    -   Query statement
        
        ```
        * | SELECT bar(1,50,rgb(255,255,255),rgb(255,0,0))
        ```
        
    -   Query and analysis results (console)![bar](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1173470461/p327282.png)
        
    -   Query and analysis results (server)![bar](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2115520461/p327102.png)
        

## color function

The color function returns the color that corresponds to a value.

### Syntax

-   If you use the following syntax, the function converts a color string to a color type.
    
    ```
    color(string)
    ```
    
-   If you use the following syntax, the function returns a color between _high\_color_ and _low\_color_ based on the portions of _high\_color_ and _low\_color_. The portions are determined by the proportion of _x_ between _high_ and _low_.
    
    ```
    color(x, low, high, low_color, high_color)
    ```
    
-   If you use the following syntax, the function returns a color between _high\_color_ and _low\_color_ based on the portions of _high\_color_ and _low\_color_. The portions are determined by _y_.
    
    ```
    color(y, low_color, high_color)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

_y_

The value of this parameter is of the double type. Valid values: \[0,1\].

_low_

The minimum value. The value of this parameter is of the double type.

_high_

The maximum value. The value of this parameter is of the double type.

_low\_color_

The RGB value of the start color.

_high\_color_

The RGB value of the end color.

_string_

The string. Valid values: black, red, green, yellow, blue, magenta, cyan, and white. The value can also be an RGB value in the Cascading Style Sheet (CSS) format. Example: #000.

### Return value type

The color type.

### Examples

-   Example 1: Convert a color string to a color type.
    
    -   Query statement
        
        ```
        * | SELECT color('#000')
        ```
        
    -   Query and analysis results (console)![color](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2115520461/p327269.png)
        
    -   Query and analysis results (server)![color](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2173470461/p328060.png)
        
-   Example 2: Obtain a part of an ANSI bar chart. The remainder of the request\_length field value is calculated. Then, the color function returns a color that corresponds to the remainder, and the bar function returns a part of an ANSI bar chart based on the color.
    
    -   Query statement
        
        ```
        *|SELECT x,bar(10,10, color(x, 0,10, rgb(255,0,0), rgb(0,255,0)), rgb(0,255,0)) FROM(SELECT  *FROM (SELECT  request_length%10 x FROM  log))
        ```
        
    -   Query and analysis results (console)![color](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2173470461/p328005.png)
        
    -   Query and analysis results (server)![color](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2173470461/p328041.png)
        
-   Example 3: Obtain a part of an ANSI bar chart. The color function returns a color, and the bar function returns a part of an ANSI bar chart based on the color.
    
    -   Query statement
        
        ```
        *|SELECT bar(10,10, color(0.3, rgb(255,255,255), rgb(255,0,0)), rgb(0,255,0))
        ```
        
    -   Query and analysis results (console)![color](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2173470461/p328048.png)
        
    -   Query and analysis results (server)![color](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2115520461/p328051.png)
        

## render function

The render function returns results by using color rendering.

### Syntax

-   If you use the following syntax, the function returns results by using color rendering. If the Boolean expression evaluates to true, the function returns a green tick. If the Boolean expression evaluates to false, the function returns a red cross.
    
    ```
    render(boolean expression)
    ```
    
-   If you use the following syntax, the function returns results by using custom color rendering.
    
    ```
    render(x, color)
    ```
    

### Parameters

**Parameter**

**Description**

_boolean expression_

The Boolean expression.

_x_

The X coordinate. The value of this parameter is of the integer type.

_color_

The color. The value of this parameter is of the color type.

### Return value type

The varchar type.

### Examples

-   Example 1: Check whether the number of PVs is less than 1,000. The count function returns the number of PVs, and the render function determines whether the number of PVs is less than 1,000 and returns results by using color rendering. If the number of PVs is less than 1,000, the render function returns a green tick.
    
    -   Query statement
        
        ```
        * | SELECT render(count(*)<1000)
        ```
        
    -   Query and analysis results (console)![render](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1173470461/p326002.png)
        
    -   Query and analysis results (server)![render](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2173470461/p326003.png)
        
-   Example 2: Obtain the total number of logs by using green rendering. The count function returns the total number of logs, and the render function returns results by using green rendering.
    
    -   Query statement
        
        ```
        * | SELECT render(count(*),rgb(48,169,16))
        ```
        
    -   Query and analysis results (console)![render](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2115520461/p326022.png)
        
    -   Query and analysis results (server)![render](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2115520461/p326021.png)
        

## rgb function

The rgb function returns a color value based on an RGB value.

### Syntax

```
rgb(red, green, blue)
```

### Parameters

**Parameter**

**Description**

_red_

The portion of red. Valid values: \[0,255\]. The value of this parameter is of the integer type.

_green_

The portion of green. Valid values: \[0,255\]. The value of this parameter is of the integer type.

_blue_

The portion of blue. Valid values: \[0,255\]. The value of this parameter is of the integer type.

### Return value type

The color type.

### Examples

Obtain a color value based on an RGB value.

-   Query statement
    
    ```
    *|SELECT rgb(255,0,0)
    ```
    
-   Query and analysis results (console)![rgb](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2115520461/p326118.png)
    
-   Query and analysis results (server)![rgb](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2115520461/p326117.png)
