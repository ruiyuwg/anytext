This topic describes the syntax of mathematical calculation functions. This topic also provides examples on how to use the functions.

The following table describes the mathematical calculation functions supported by Simple Log Service.

**Note**

-   The following operators are supported:
    
    +-\*/%
    
    By default, the decimal part is excluded each time you use the (/) operator to perform calculation. You can use the `x*1.0/y` expression to retain the decimal part each time you perform calculation.
    
-   If you want to use strings in analytic statements, you must enclose the strings in single quotation marks (''). Strings that are not enclosed or strings that are enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.
    

**Function**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

[abs function](#section-i8z-xqe-edx)

abs(_x_)

Calculates the absolute value of _x_.

√

√

[acos function](#section-kyh-0kj-sch)

acos(_x_)

Calculates the arc cosine of _x_.

√

√

[asin function](#section-9f0-fkq-4d3)

asin(_x_)

Calculates the arc sine of _x_.

√

√

[atan function](#section-yjs-kek-rb6)

atan(_x_)

Calculates the arc tangent of _x_.

√

√

[atan2 function](#section-2s3-s13-eks)

atan2(_x_, _y_)

Calculates the arc tangent of _x_ divided by _y_.

√

√

[cbrt function](#section-yxq-jtv-d59)

cbrt(_x_)

Calculates the cube root of _x_.

√

√

[ceil function](#section-mrr-q32-znp)

ceil(_x_)

Rounds _x_ up to the nearest integer.

This function is an alias of the ceiling function.

√

√

[ceiling function](#section-4vb-rt6-6p0)

ceiling(_x_)

Rounds _x_ up to the nearest integer.

√

√

[cos function](#section-i7m-cvs-fk8)

cos(_x_)

Calculates the cosine of _x_.

√

√

[cosh function](#section-3yg-bxw-a8f)

cosh(_x_)

Calculates the hyperbolic cosine of _x_.

√

√

[cosine\_similarity function](#section-krn-k5u-ktz)

cosine\_similarity(_x_, _y_)

Calculates the cosine similarity between _x_ and _y_.

√

×

[degrees function](#section-i8r-8xz-x5l)

degrees(_x_)

Converts an angle in radians to its equivalent in degrees.

√

√

[e function](#section-y9g-hj2-acv)

e()

Returns the value of e, which is the base of the natural logarithm.

√

√

[exp function](#section-oa5-2b2-6mv)

exp(_x_)

Raises e to the power of _x_.

√

×

[floor function](#section-mpw-23r-wvg)

floor(_x_)

Rounds _x_ down to the nearest integer.

√

√

[from\_base function](#section-so1-v2p-k6z)

from\_base(_x_, _y_)

Converts _x_ to a base _y_ number.

√

√

[ln function](#section-dhi-13t-8at)

ln(_x_)

Calculates the natural logarithm of _x_.

√

√

[infinity function](#section-pe3-mtw-dqz)

infinity()

Returns a value that represents positive infinity.

√

√

[is\_nan function](#section-pri-zh5-5ns)

is\_nan(_x_)

Determines whether _x_ is Not a Number (NaN).

√

√

[log2 function](#section-vm5-z6v-1it)

log2(_x_)

Calculates the base-2 logarithm of _x_.

√

√

[log10 function](#section-rly-n2m-cj0)

log10(_x_)

Calculates the base-10 logarithm of _x_.

√

√

[log function](#section-kr0-4ia-sp4)

log(_x_, _y_)

Calculates the base-_y_ logarithm of _x_.

√

×

[mod function](#section-yc3-or0-js0)

mod(_x_, _y_)

Calculates the remainder of _x_ divided by _y_.

√

√

[nan function](#section-9uk-hhu-qao)

nan()

Returns a value that is NaN.

√

√

[pi function](#section-j4w-s82-b4f)

pi()

Returns the value of π to 15 decimal places.

√

√

[pow function](#section-57s-fvd-t2k)

pow(_x_, _y_)

Raises _x_ to the power of _y_.

This function is an alias of the power function.

√

√

[power function](#section-mol-h5g-f7r)

power(_x_, _y_)

Raises _x_ to the power of _y_.

√

√

[radians function](#section-7gh-o8t-h2p)

radians(_x_)

Converts an angle in degrees to its equivalent in radians.

√

√

[rand function](#section-gog-afn-pss)

rand()

Returns a random number.

√

√

[random function](#section-5uq-zst-swa)

random()

Returns a random number in the range \[0,1).

√

√

random(_x_)

Returns a random number in the range \[0,x).

√

√

[round function](#section-9wi-fmq-bae)

round(_x_)

Rounds _x_ to the nearest integer.

√

√

round(_x_, _n_)

Rounds _x_ to the nearest decimal with n decimal places.

√

√

[sign function](#section-quj-r91-z6x)

sign(_x_)

Returns the sign of _x_. Valid values: 1, 0, and -1.

√

×

[sin function](#section-tva-ifi-e45)

sin(_x_)

Calculates the sine of _x_.

√

√

[sqrt function](#section-z3m-sui-s2x)

sqrt(_x_)

Calculates the square root of _x_.

√

√

[tan function](#section-4wm-5k6-ocr)

tan(_x_)

Calculates the tangent of _x_.

√

√

[tanh function](#section-s70-fqp-15y)

tanh(_x_)

Calculates the hyperbolic tangent of _x_.

√

√

[to\_base function](#section-wo9-323-znw)

to\_base(_x_, _y_)

Converts _x_ to a base _y_ string.

√

×

[truncate function](#section-drs-jh6-0mu)

truncate(_x_)

Removes the fractional part of _x_.

√

√

[width\_bucket function](#section-2d3-6db-7bn)

width\_bucket(_x_, _bound1_, _bound2_, _numBuckets_)

Divides a numeric range into buckets of equal width and returns the bucket number of _x_.

√

×

width\_bucket(_x_, _bins_)

Returns the bucket number of _x_ in the range of buckets that are specified by an array.

√

×

## abs function

The abs function calculates the absolute value of _x_.

### Syntax

```
abs(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the smallint, integer, real, tinyint, bigint, double, or decimal type.

### Return value type

Same as the data type of the parameter value.

### Examples

Calculate the absolute value of -25.

-   Query statement
    
    ```
    * | select abs(-25)
    ```
    
-   Query and analysis results![abs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6253182361/p300844.png)
    

## acos function

The acos function calculates the arc cosine of _x_.

### Syntax

```
acos(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type. Valid values: \[-1,1\].

If the value is out of the range \[-1,1\], the function returns NaN.

### Return value type

The double type.

### Examples

Calculate the arc cosine of the 45° angle.

-   Query statement
    
    ```
    * | SELECT acos(pi()/4)
    ```
    
-   Query and analysis results![acos](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6918311961/p301563.png)
    

## asin function

The asin function calculates the arc sine of _x_.

### Syntax

```
asin(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type. Valid values: \[-1,1\].

If the value is out of the range \[-1,1\], the function returns NaN.

### Return value type

The double type.

### Examples

Calculate the arc sine of the 45° angle.

-   Query statement
    
    ```
    * | SELECT  asin(pi()/4)
    ```
    
-   Query and analysis results![acos](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6918311961/p301563.png)
    

## atan function

The atan function calculates the arc tangent of _x_.

### Syntax

```
atan(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Calculate the arc tangent of the 45° angle.

-   Query statement
    
    ```
    * | SELECT atan(pi()/4)
    ```
    
-   Query and analysis results![atan](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7253182361/p301564.png)
    

## atan2 function

The atan2 function calculates the arc tangent of _x_ divided by _y_.

### Syntax

```
atan2(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

_y_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Calculate the arc tangent of the 30° angle.

-   Query statement
    
    ```
    * | SELECT atan2(pi(),6)
    ```
    
-   Query and analysis results![atan2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6918311961/p301566.png)
    

## cbrt function

The cbrt function calculates the cube root of _x_.

### Syntax

```
cbrt(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Calculate the cube root of 100.

-   Query statement
    
    ```
    * | select cbrt(100)
    ```
    
-   Query and analysis results![cbrt](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5883984361/p300872.png)
    

## ceil function

The ceil function rounds _x_ up to the nearest integer. This function is an alias of the ceiling function.

### Syntax

```
ceil(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the tinyint, smallint, integer, real, bigint, double, or decimal type.

-   If the value of _x_ is a positive number, the function rounds the value away from 0.
    
-   If the value of _x_ is a negative number, the function rounds the value towards 0.
    

### Return value type

Same as the data type of the parameter value.

### Examples

Round the value of the request\_time field up to the nearest integer.

-   Sample field
    
    ```
    request_time:9.3
    ```
    
-   Query statement
    
    ```
    * | SELECT ceil(request_time) AS request_time
    ```
    
-   Query and analysis results![ceiling](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7253182361/p301575.png)
    

## ceiling function

The ceiling function rounds _x_ up to the nearest integer.

### Syntax

```
ceiling(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the tinyint, smallint, integer, real, bigint, double, or decimal type.

-   If the value of _x_ is a positive number, the function rounds the value away from 0.
    
-   If the value of _x_ is a negative number, the function rounds the value towards 0.
    

### Return value type

Same as the data type of the parameter value.

### Examples

Round the value of the request\_time field up to the nearest integer.

-   Sample field
    
    ```
    request_time:9.3
    ```
    
-   Query statement
    
    ```
    * | SELECT ceiling(request_time) AS request_time
    ```
    
-   Query and analysis results![ceiling](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7253182361/p301575.png)
    

## cos function

The cos function calculates the cosine of _x_.

### Syntax

```
cos(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Calculate the cosine of the 30° angle.

-   Query statement
    
    ```
    * | SELECT cos(pi()/6)
    ```
    
-   Query and analysis results![cos](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7253182361/p301579.png)
    

## cosh function

The cosh function calculates the hyperbolic cosine of _x_.

### Syntax

```
cosh(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Calculate the hyperbolic cosine of the 30° angle.

-   Query statement
    
    ```
    * | SELECT cosh(pi()/6)
    ```
    
-   Query and analysis results![cosh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7253182361/p301588.png)
    

## cosine\_similarity function

The cosine\_similarity function calculates the cosine similarity between _x_ and _y_.

### Syntax

```
cosine_similarity(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the map(varchar,double) type.

_y_

The value of this parameter is of the map(varchar,double) type.

### Return value type

The double type.

### Examples

Calculate the cosine similarity between two vectors.

-   Query statement
    
    ```
    * | SELECT cosine_similarity(MAP(ARRAY['a'], ARRAY[1.0]), MAP(ARRAY['a'], ARRAY[2.0]))
    ```
    
-   Query and analysis results![cosine_similarity](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7253182361/p301591.png)
    

## degrees function

The degrees function converts an angle in radians to its equivalent in degrees.

### Syntax

```
degrees(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Convert π in radians to its equivalent in degrees.

-   Query statement
    
    ```
    * | SELECT degrees(pi())
    ```
    
-   Query and analysis results![degrees](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7253182361/p301600.png)
    

## e function

The e function returns the value of e, which is the base of the natural logarithm.

### Syntax

```
e()
```

### Return value type

The double type.

### Examples

Obtain the value of e.

-   Query statement
    
    ```
    * | SELECT e()
    ```
    
-   Query and analysis results![e()](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6883984361/p301611.png)
    

## exp function

The exp function raises e to the power of x.

### Syntax

```
exp(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Raise e to the power of 3.

-   Query statement
    
    ```
    * | SELECT exp(3)
    ```
    
-   Query and analysis results![exp](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7253182361/p301617.png)
    

## floor function

The floor function rounds _x_ down to the nearest integer.

### Syntax

```
floor(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the tinyint, smallint, integer, real, bigint, double, or decimal type.

-   If the value of _x_ is a positive number, the function rounds the value towards 0.
    
-   If the value of _x_ is a negative number, the function rounds the value away from 0.
    

### Return value type

The double type.

### Examples

Round the value of the request\_time field down to the nearest integer.

-   Sample field
    
    ```
    request_time:10.3
    ```
    
-   Query statement
    
    ```
    * | SELECT floor(request_time) AS request_time
    ```
    
-   Query and analysis results![ceiling](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7253182361/p301575.png)
    

## from\_base function

The from\_base function converts _x_ to a base _y_ number.

### Syntax

```
from_base(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the varchar type.

_y_

The value of this parameter is of the bigint type. The value specifies a numeral system. Valid values: \[2,36\].

### Return value type

The bigint type.

### Examples

Convert the string 1101 to a number.

-   Query statement
    
    ```
    * | SELECT  from_base('1101',2)
    ```
    
-   Query and analysis results![from_base](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7253182361/p301771.png)
    

## ln function

The ln function calculates the natural logarithm of _x_.

### Syntax

```
ln(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type. The value must be greater than 0.

### Return value type

The double type.

### Examples

Calculate the natural logarithm of 2.

-   Query statement
    
    ```
    * | SELECT ln(2)
    ```
    
-   Query and analysis results![ln](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7253182361/p301698.png)
    

## infinity function

The infinity function returns a value that represents positive infinity.

### Syntax

```
infinity()
```

### Return value type

The double type.

### Examples

Obtain a value that represents positive infinity.

-   Query statement
    
    ```
    * | SELECT infinity()
    ```
    
-   Query and analysis results![infinity](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7253182361/p301700.png)
    

## is\_nan function

The is\_nan function determines whether _x_ is NaN. If yes, the function returns true.

### Syntax

```
is_nan(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The Boolean type.

### Examples

Check whether the value of the status field is NaN.

-   Query statement
    
    ```
    * | SELECT is_nan(status)
    ```
    
-   Query and analysis results![is_nan](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7253182361/p301712.png)
    

## log2 function

The log2 function calculates the base-2 logarithm of _x_.

### Syntax

```
log2(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Calculate the base-2 logarithm of 100.

-   Query statement
    
    ```
    * | SELECT log2(100)
    ```
    
-   Query and analysis results![log2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8253182361/p301731.png)
    

## log10 function

The log10 function calculates the base-10 logarithm of _x_.

### Syntax

```
log10(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Calculate the base-10 logarithm of 100.

-   Query statement
    
    ```
    * | SELECT log10(100)
    ```
    
-   Query and analysis results![log10](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8253182361/p301734.png)
    

## log function

The log function calculates the base-_y_ logarithm of _x_.

### Syntax

```
log(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

_y_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Calculate the base-5 logarithm of 100.

-   Query statement
    
    ```
    * | SELECT log(100,5)
    ```
    
-   Query and analysis results![log](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8253182361/p301740.png)
    

## mod function

The mod function calculates the remainder of _x_ divided by _y_.

### Syntax

```
mod(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the tinyint, smallint, integer, real, bigint, double, or decimal type.

_y_

The value of this parameter is of the tinyint, smallint, integer, real, bigint, double, or decimal type.

### Return value type

Same as the data type of the parameter value.

### Examples

Calculate the remainder of 100 divided by 30.

-   Query statement
    
    ```
    * | SELECT mod(100,30)
    ```
    
-   Query and analysis results![mod](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3781884361/p335893.png)
    

## nan function

The nan function returns a value that is NaN.

### Syntax

```
nan()
```

### Return value type

The double type.

### Examples

Obtain a value that is NaN.

-   Query statement
    
    ```
    * | SELECT nan()
    ```
    
-   Query and analysis results![nan](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9435354361/p324035.png)
    

## pi function

The pi function returns the value of π to 15 decimal places.

### Syntax

```
pi()
```

### Return value type

The double type.

### Examples

Obtain the value of π to 15 decimal places.

-   Query statement
    
    ```
    * | SELECT pi()
    ```
    
-   Query and analysis results![pi](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7883984361/p301743.png)
    

## pow function

The pow function raises _x_ to the power of _y_. This function is an alias of the power function.

### Syntax

```
pow(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

_y_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Raise 2 to the power of 5.

-   Query statement
    
    ```
    * | SELECT pow(2,5)
    ```
    
-   Query and analysis results![pow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8253182361/p301745.png)
    

## power function

The power function raises _x_ to the power of _y_.

### Syntax

```
power(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

_y_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Raise 2 to the power of 5.

-   Query statement
    
    ```
    * | SELECT power(2,5)
    ```
    
-   Query and analysis results![pow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8253182361/p301745.png)
    

## radians function

The radians function converts an angle in degrees to its equivalent in radians.

### Syntax

```
radians(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Convert the 180° angle in degrees to its equivalent in radians.

-   Query statement
    
    ```
    * | SELECT radians(180)
    ```
    
-   Query and analysis results![radians](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8253182361/p301748.png)
    

## rand function

The rand function returns a random number.

### Syntax

```
rand()
```

### Return value type

The double type.

### Examples

Obtain a random number.

-   Query statement
    
    ```
    * | select rand()
    ```
    
-   Query and analysis results![rand](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8253182361/p300855.png)
    

## random function

The random function returns a random number in the range \[0,x).

### Syntax

-   If you use the following syntax, the function returns a random number in the range \[0,1).
    
    ```
    random()
    ```
    
-   If you use the following syntax, the function returns a random number in the range \[0,x).
    
    ```
    random(x)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the tinyint, smallint, integer, or bigint type.

### Return value type

Same as the data type of the parameter value.

### Examples

Obtain a random number in the range \[0,100).

-   Query statement
    
    ```
    * | select random(100)
    ```
    
-   Query and analysis results![random](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8253182361/p300866.png)
    

## round function

The round function rounds _x_ to the nearest integer or decimal. If _n_ is specified, the function retains n decimal places. If _n_ is not specified, the function rounds _x_ to the nearest integer.

### Syntax

-   If you use the following syntax, the function rounds _x_ to the nearest integer.
    
    ```
    round(x)
    ```
    
-   If you use the following syntax, the function rounds _x_ to the nearest decimal with n decimal places.
    
    ```
    round(x, n)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the tinyint, smallint, integer, or bigint type.

_n_

This parameter specifies the number of decimal places that you want the function to retain.

### Return value type

Same as the data type of the parameter value.

### Examples

Compare the number of page views (PVs) of the current day with the number of PVs of the previous day. Then, present the comparison result as a percentage.

-   Query statement
    
    ```
    * | SELECT diff [1] AS today, round((diff [3] -1.0) * 100, 2) AS growth FROM (SELECT compare(pv, 86400) as diff FROM (SELECT COUNT(*) as pv FROM website_log))
    ```
    
-   Query and analysis results![round](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0935556161/p242658.png)
    

## sign function

The sign function returns the sign of _x_. Valid values: 1, 0, and -1.

### Syntax

```
sign(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the integer, smallint, tinyint, real, double, bigint, or decimal(p,s) type.

-   If _x_ is a positive number, the function returns 1.
    
-   If _x_ is 0, the function returns 0.
    
-   If _x_ is a negative number, the function return -1.
    

### Return value type

Same as the data type of the parameter value.

### Examples

Obtain the sign of 10.

-   Query statement
    
    ```
    * | SELECT sign(10)
    ```
    
-   Query and analysis results![sign](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9435354361/p314022.png)
    

## sin function

The sin function calculates the sine of _x_.

### Syntax

```
sin(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Calculate the sine of the 90° angle.

-   Query statement
    
    ```
    * | select sin(pi()/2)
    ```
    
-   Query and analysis results![sin](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8253182361/p300848.png)
    

## sqrt function

The sqrt function calculates the square root of _x_.

### Syntax

```
sqrt(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Calculate the square root of 100.

-   Query statement
    
    ```
    * | select sqrt(100)
    ```
    
-   Query and analysis results![sqrt](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8253182361/p300887.png)
    

## tan function

The tan function calculates the tangent of _x_.

### Syntax

```
tan(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Calculate the tangent of the 30° angle.

-   Query statement
    
    ```
    * | SELECT tan(pi()/6)
    ```
    
-   Query and analysis results![tan](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8253182361/p300891.png)
    

## tanh function

The tanh function calculates the hyperbolic tangent of _x_.

### Syntax

```
tanh(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Calculate the hyperbolic tangent of the 30° angle.

-   Query statement
    
    ```
    * | SELECT tanh(pi()/6)
    ```
    
-   Query and analysis results![tanh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9253182361/p301756.png)
    

## to\_base function

The to\_base function converts _x_ to a base _y_ string.

### Syntax

```
to_base(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the bigint type.

_y_

The value of this parameter is of the bigint type. The value specifies a numeral system. Valid values: \[2,36\].

### Return value type

The varchar type.

### Examples

Convert 180 to a binary string.

-   Query statement
    
    ```
    * | SELECT  to_base(180, 2)
    ```
    
-   Query and analysis results![to_base](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9253182361/p301760.png)
    

## truncate function

The truncate function removes the fractional part of _x_.

### Syntax

```
truncate(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

### Return value type

The double type.

### Examples

Remove the fractional part of 11.11.

-   Query statement
    
    ```
    * | SELECT  truncate(11.11)
    ```
    
-   Query and analysis results![truncate](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9253182361/p301773.png)
    

## width\_bucket function

The width\_bucket function returns the bucket number of _x_.

### Syntax

-   If you use the following syntax, the function divides a numeric range into buckets of equal width and returns the bucket number of _x_.
    
    ```
    width_bucket(x, bound1, bound2, numBuckets)
    ```
    
-   If you use the following syntax, the function returns the bucket number of _x_ in the range of buckets that are specified by an array.
    
    ```
    width_bucket(x, bins)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

_bound1_

This parameter specifies the lower limit of the numeric range.

_bound2_

This parameter specifies the upper limit of the numeric range.

_numBuckets_

This parameter specifies the number of buckets. The value must be an integer greater than 0.

_bins_

This parameter specifies the range of buckets. _The value is an array of the double type._

### Return value type

The bigint type.

**Note**

-   If _x_ is within the range, the function returns the bucket number of _x_.
    
-   If _x_ is below the lower limit, the function returns 0.
    
-   If _x_ is above the upper limit, the function returns _numBuckets+1_.
    

### Examples

-   Example 1: Divide the range \[10,80) into 7 buckets. Then, obtain the bucket number for each value of the request\_time field.
    
    -   Query statement
        
        ```
        * | SELECT request_time, width_bucket(request_time, 10, 80,7) AS numBuckets
        ```
        
    -   Query and analysis results![ width_bucket](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0535354361/p314099.png)
        
-   Example 2: Use an array to specify the range of 7 buckets. Then, obtain the bucket number for each value of the request\_time field.
    
    -   Query statement
        
        ```
        * | SELECT request_time, width_bucket(request_time, array[10,20,30,40,50,60,70,80]) AS numBuckets
        ```
        
    -   Query and analysis results![width_bucket](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0535354361/p314119.png)
