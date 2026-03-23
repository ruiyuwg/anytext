This topic describes the mathematical functions supported by MaxCompute. It details the syntax, parameter descriptions, and usage examples for each function. These mathematical functions allow you to perform various operations, such as data computation and data conversion.

The following table lists the mathematical functions supported by MaxCompute SQL.

**Function**

**Feature**

[ABS](#section-i1v-5lm-vdb)

Calculates the absolute value.

[ACOS](#section-cfp-qmm-vdb)

Calculates the arccosine.

[ATAN2](#section-0me-2dd-y6q)

Calculates the arctangent of expr1/expr2.

[ASIN](#section-fau-d9e-7p5)

Calculates the arcsine.

[ATAN](#section-odw-jnm-vdb)

Calculates the arctangent.

[BIN](#section-two-s20-2sa)

Calculates the binary value.

[BIT\_COUNT](/help/en/maxcompute/user-guide/aggregate-func-bit-count)

Calculates the number of 1s in the binary representation of the specified parameter `value`.

[CBRT](#section-h19-2d4-2us)

Calculates the cube root.

[CEIL](#section-ugm-k4m-vdb)

Rounds up a value.

[CONV](#section-tkx-q4m-vdb)

Converts a number from one base to another.

[CORR](#section-fvu-d56-xf2)

Calculates the Pearson correlation coefficient.

[COS](#section-tpy-z4m-vdb)

Calculates the cosine.

[COSH](#section-tnp-gpm-vdb)

Calculates the hyperbolic cosine.

[COT](#section-hhz-lpm-vdb)

Calculates the cotangent.

[DEGREES](#section-42j-2cu-qig)

Converts radians to degrees.

[E](#section-2yd-sed-m22)

Returns the value of e.

[EXP](#section-q1n-rpm-vdb)

Calculates the exponential value.

[FACTORIAL](#section-wri-hoq-ld9)

Calculates the factorial.

[FILTER](#efe5bd7003aq5)

Filters elements in an ARRAY array.

[FLOOR](#section-yrw-wpm-vdb)

Rounds down a value.

[FORMAT\_NUMBER](#section-i5w-ohk-2sp)

Converts a number to a string in a specified format.

[GREATEST](/help/en/maxcompute/user-guide/greatest)

Compares a set of values and returns the maximum value.

[HEX](#section-xbh-3di-611)

Returns the hexadecimal format of an integer or string.

[ISNAN](#section-pmu-x9v-dlu)

Checks whether the value of an expression is NaN.

[LEAST](/help/en/maxcompute/user-guide/least)

Compares a set of values and returns the minimum value.

[LN](#section-pdm-fqm-vdb)

Calculates the natural logarithm.

[LOG](#section-iwc-4qm-vdb)

Calculates the logarithm.

[LOG10](#section-bjc-zzm-vdb)

Calculates the decimal logarithm.

[LOG2](#section-dh3-tzm-vdb)

Calculates the binary logarithm.

[NEGATIVE](#section-in1-xje-zp5)

Returns the negative value of an expression.

[PI](#section-amf-eus-u0v)

Returns the value of π.

[POSITIVE](#section-81v-hiv-t7r)

Returns the value of an expression.

[POW](#section-0nv-2de-brn)

Calculates the power.

[RADIANS](#section-uw5-75c-nvn)

Converts degrees to radians.

[RAND](#section-qlv-2rm-vdb)

Returns a random number.

[ROUND](#section-ocf-jrm-vdb)

Returns a value rounded to a specified decimal place.

[SHIFTLEFT](#section-k4z-pcn-vdb)

Calculates the left shift value.

[SHIFTRIGHT](#section-iyl-vcn-vdb)

Calculates the right shift value.

[SHIFTRIGHTUNSIGNED](#section-h2f-1dn-vdb)

Calculates the unsigned right shift value.

[SIGN](#section-gq5-lbn-vdb)

Returns the sign of the input parameter.

[SIN](#section-tky-gvm-vdb)

Calculates the sine.

[SINH](#section-ccf-gym-vdb)

Calculates the hyperbolic sine.

[SQRT](#section-nns-lym-vdb)

Calculates the square root.

[TAN](#section-ibd-rym-vdb)

Calculates the tangent.

[TANH](#section-pfh-wym-vdb)

Calculates the hyperbolic tangent.

[TRUNC](#section-yly-1zm-vdb)

Returns a value truncated to a specified decimal place.

[UNHEX](#section-4n3-yv8-1ab)

Returns the string represented by a hexadecimal string.

[WIDTH\_BUCKET](#section-pn8-ilh-3ll)

Returns the bucket number into which a specified field value falls.

**Note**

For more information about calculations, such as calculating the remainder, see [Arithmetic operators](/help/en/maxcompute/user-guide/operator#section-ycc-chl-vdb).

## Usage notes

MaxCompute V2.0 provides additional functions. If the functions that you use involve new data types that are supported in the MaxCompute V2.0 data type edition, you must execute the SET statement to enable the MaxCompute V2.0 data type edition. The new data types include TINYINT, SMALLINT, INT, FLOAT, VARCHAR, TIMESTAMP, and BINARY.

-   Session level: To use the MaxCompute V2.0 data type edition, you must add `set odps.sql.type.system.odps2=true;` before the SQL statement that you want to execute, and commit and execute them together.
    
-   Project level: The project owner can enable the MaxCompute V2.0 data type edition for the project based on the project requirements. The configuration takes effect after 10 to 15 minutes. To enable the MaxCompute V2.0 data type edition at the project level, run the following command:
    
    ```
    setproject odps.sql.type.system.odps2=true; 
    ```
    
    For more information about `setproject`, see [Project operations](/help/en/maxcompute/user-guide/project-operations#concept-qg3-s32-vdb). For more information about the precautions that you must take when you enable the MaxCompute V2.0 data type edition at the project level, see [Data type editions](/help/en/maxcompute/user-guide/data-type-editions#concept-jhp-4bb-5db).
    

## Sample data

To help you understand how to use each function, this topic provides source data and examples based on that data. The following sample command creates a table named mf\_math\_fun\_t and adds data to the table.

```
create table if not exists mf_math_fun_t(
     int_data     int,
     bigint_data  bigint,
     double_data  double,
     decimal_data decimal,
     float_data   float,
     string_data  string
    );
insert into mf_math_fun_t values
(null, -10, 0.525, 0.525BD, cast(0.525 as float), '10'),
(-20, null, -0.1, -0.1BD, cast(-0.1 as float), '-10'),
(0, -1, null, 20.45BD, cast(-1 as float), '30'),
(-40, 4, 0.89, null, cast(0.89 as float), '-30'),
(5, -50, -1, -1BD, null, '50'),
(-60, 6, 1.5, 1.5BD, cast(1.5 as float), '-50'),
(-1, -70, -7.5, -7.5BD, cast(-7.5 as float),null ),
(-80, 1, -10.2, -10.2BD, cast(-10.2 as float), '-1' ),
(9, -90, 2.58, 2.58BD, cast(2.58 as float), '0'),
(-100, 10, -5.8, -5.8BD, cast(-5.8 as float), '-90');
```

The following command queries data from the mf\_math\_fun\_t table:

```
select * from mf_math_fun_t;
-- The following result is returned.
+----------+-------------+-------------+--------------+------------+-------------+
| int_data | bigint_data | double_data | decimal_data | float_data | string_data |
+----------+-------------+-------------+--------------+------------+-------------+
| NULL     | -10         | 0.525       | 0.525        | 0.525      | 10          |
| -20      | NULL        | -0.1        | -0.1         | -0.1       | -10         |
| 0        | -1          | NULL        | 20.45        | -1         | 30          |
| -40      | 4           | 0.89        | NULL         | 0.89       | -30         |
| 5        | -50         | -1.0        | -1           | NULL       | 50          |
| -60      | 6           | 1.5         | 1.5          | 1.5        | -50         |
| -1       | -70         | -7.5        | -7.5         | -7.5       | NULL        |
| -80      | 1           | -10.2       | -10.2        | -10.2      | -1          |
| 9        | -90         | 2.58        | 2.58         | 2.58       | 0           |
| -100     | 10          | -5.8        | -5.8         | -5.8       | -90         |
+----------+-------------+-------------+--------------+------------+-------------+
```

## ABS

-   Syntax
    
    ```
    bigint|double|decimal abs(<number>)
    ```
    
-   Description
    
    Calculates the absolute value of number.
    
-   Parameters
    
    number: Required. A value of the DOUBLE, BIGINT, or DECIMAL type. If the input value is of the STRING type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
    **Note**
    
    If the input value is of the BIGINT type and exceeds the value range of BIGINT, the value is converted to the DOUBLE type. This conversion may cause a precision loss.
    
-   Return value
    
    The data type of the return value is the same as the data type of the input parameter. The following rules apply:
    
    -   If number is of the DOUBLE, BIGINT, or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING type, a value of the DOUBLE type is returned.
        
    -   If number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is NULL.
        select abs(null);
        --The return value is 1.
        select abs(-1);
        --The return value is 1.2.
        select abs(-1.2);
        --The return value is 2.0.
        select abs("-2");
        --The return value is 1.2232083745629837e32.
        select abs(122320837456298376592387456923748);
        --Calculates the absolute value of the id field in the tbl1 table. The following code provides a complete example on how to use the ABS function in an SQL statement. Other built-in functions, except window functions and aggregate functions, are used in a similar way.
        select abs(id) from tbl1;
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the absolute value.
        
        ```
        select abs(bigint_data) as bigint_new, abs(double_data) as double_new, abs(decimal_data) as decimal_new, abs(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+------------+-------------+------------+
        | bigint_new | double_new | decimal_new | string_new |
        +------------+------------+-------------+------------+
        | 10         | 0.525      | 0.525       | 10.0       |
        | NULL       | 0.1        | 0.1         | 10.0       |
        | 1          | NULL       | 20.45       | 30.0       |
        | 4          | 0.89       | NULL        | 30.0       |
        | 50         | 1.0        | 1           | 50.0       |
        | 6          | 1.5        | 1.5         | 50.0       |
        | 70         | 7.5        | 7.5         | NULL       |
        | 1          | 10.2       | 10.2        | 1.0        |
        | 90         | 2.58       | 2.58        | 0.0        |
        | 10         | 5.8        | 5.8         | 90.0       |
        +------------+------------+-------------+------------+
        ```
        

## ACOS

-   Syntax
    
    ```
    double|decimal acos(<number>)
    ```
    
-   Description
    
    Calculates the arccosine of number.
    
-   Parameters
    
    number: Required. A value in the range of \[-1, 1\]. The value is of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    The data type of the return value is the same as the data type of the input parameter. The value is in the range of 0 to π. The following rules apply:
    
    -   If number is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the value of number is not in the range of \[-1, 1\], NULL is returned. In Hive-compatible mode, NaN is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 0.5155940062460905.
        select acos("0.87");
        --The return value is 1.5707963267948966.
        select acos(0);
        --The return value is NULL.
        select acos(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the arccosine.
        
        ```
        select acos(bigint_data) as bigint_new, acos(double_data) as double_new, acos(decimal_data) as decimal_new, acos(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +-------------------+--------------------+--------------------+---------------------+
        | bigint_new        | double_new         | decimal_new        | string_new          |
        +-------------------+--------------------+--------------------+---------------------+
        | NULL              | 1.0180812136981134 | 1.0180812136981134 | NULL                |
        | NULL              | 1.6709637479564565 | 1.6709637479564565 | NULL                |
        | 3.141592653589793 | NULL               | NULL               | NULL                |
        | NULL              | 0.4734511572720662 | NULL               | NULL                |
        | NULL              | 3.141592653589793  | 3.141592653589793  | NULL                |
        | NULL              | NULL               | NULL               | NULL                |
        | NULL              | NULL               | NULL               | NULL                |
        | 0.0               | NULL               | NULL               | 3.141592653589793   |
        | NULL              | NULL               | NULL               | 1.5707963267948966  |
        | NULL              | NULL               | NULL               | NULL                |
        +-------------------+--------------------+--------------------+---------------------+
        ```
        

## ATAN2

-   Syntax
    
    ```
    double atan2(<expr1>, <expr2>)
    ```
    
-   Description
    
    Calculates the arctangent of expr1/expr2.
    
-   Parameters
    
    -   expr1: Required. A value of the DOUBLE type. If the input value is of the STRING, BIGINT, or DECIMAL type, it is implicitly converted to a value of the DOUBLE type for calculation.
        
    -   expr2: Required. A value of the DOUBLE type. If the input value is of the STRING, BIGINT, or DECIMAL type, it is implicitly converted to a value of the DOUBLE type for calculation.
        
-   Return value
    
    A value of the DOUBLE type is returned. The value is in the range of `-π/2 to π/2`. If the value of expr1 or expr2 is NULL, NULL is returned.
    
-   Example
    
    ```
    --The return value is 0.0.
    select atan2(0, 0);
    ```
    

## ASIN

-   Syntax
    
    ```
    double|decimal asin(<number>)
    ```
    
-   Description
    
    Calculates the arcsine of number.
    
-   Parameters
    
    number: Required. A value in the range of \[-1, 1\]. The value is of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    The data type of the return value is the same as the data type of the input parameter. The value is in the range of `-π/2 to π/2`. The following rules apply:
    
    -   If number is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the value of number is not in the range of \[-1, 1\], NULL is returned. In Hive-compatible mode, NaN is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 1.5707963267948966.
        select asin(1);
        --The return value is -1.5707963267948966.
        select asin(-1);
        --The return value is NULL.
        select asin(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the arcsine.
        
        ```
        select asin(bigint_data) as bigint_new, asin(double_data) as double_new, asin(decimal_data) as decimal_new, asin(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +--------------------+---------------------+---------------------+---------------------+
        | bigint_new         | double_new          | decimal_new         | string_new          |
        +--------------------+---------------------+---------------------+---------------------+
        | NULL               | 0.5527151130967832  | 0.5527151130967832  | NULL                |
        | NULL               | -0.1001674211615598 | -0.1001674211615598 | NULL                |
        | -1.5707963267948966| NULL                | NULL                | NULL                |
        | NULL               | 1.0973451695228305  | NULL                | NULL                |
        | NULL               | -1.5707963267948966 | -1.5707963267948966 | NULL                |
        | NULL               | NULL                | NULL                | NULL                |
        | NULL               | NULL                | NULL                | NULL                |
        | 1.5707963267948966 | NULL                | NULL                | -1.5707963267948966 |
        | NULL               | NULL                | NULL                | 0.0                 |
        | NULL               | NULL                | NULL                | NULL                |
        +--------------------+---------------------+---------------------+---------------------+
        ```
        

## ATAN

-   Syntax
    
    ```
    double atan(<number>)
    ```
    
-   Description
    
    Calculates the arctangent of number.
    
-   Parameters
    
    number: Required. A value of the DOUBLE type. If the input value is of the STRING, BIGINT, or DECIMAL type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    A value of the DOUBLE type is returned. The value is in the range of `-π/2 to π/2`. If the value of number is NULL, NULL is returned.
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 0.7853981633974483.
        select atan(1);
        --The return value is -0.7853981633974483.
        select atan(-1);
        --The return value is NULL.
        select atan(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the arctangent.
        
        ```
        select atan(bigint_data) as bigint_new, atan(double_data) as double_new, atan(decimal_data) as decimal_new, atan(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +---------------------+----------------------+----------------------+---------------------+
        | bigint_new          | double_new           | decimal_new          | string_new          |
        +---------------------+----------------------+----------------------+---------------------+
        | -1.4711276743037347 | 0.483447001567199    | 0.483447001567199    | 1.4711276743037347  |
        | NULL                | -0.09966865249116204 | -0.09966865249116204 | -1.4711276743037347 |
        | -0.7853981633974483 | NULL                 | 1.521935491607842    | 1.5374753309166493  |
        | 1.3258176636680326  | 0.7272626879966904   | NULL                 | -1.5374753309166493 |
        | -1.550798992821746  | -0.7853981633974483  | -0.7853981633974483  | 1.550798992821746   |
        | 1.4056476493802699  | 0.982793723247329    | 0.982793723247329    | -1.550798992821746  |
        | -1.5565115842075    | -1.4382447944982226  | -1.4382447944982226  | NULL                |
        | 0.7853981633974483  | -1.473069419436178   | -1.473069419436178   | -0.7853981633974483 |
        | -1.5596856728972892 | 1.2010277920014796   | 1.2010277920014796   | 0.0                 |
        | 1.4711276743037347  | -1.4000611153196139  | -1.4000611153196139  | -1.5596856728972892 |
        +---------------------+----------------------+----------------------+---------------------+
        ```
        

## BIN

-   Syntax
    
    ```
    string bin(<number>)
    ```
    
-   Description
    
    Returns the binary representation of number. This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    number: Required. A value of the BIGINT, INT, SMALLINT, or TINYINT type.
    
-   Return value
    
    A value of the STRING type is returned. The following rules apply:
    
    -   If the data type of number is not BIGINT, INT, SMALLINT, or TINYINT, an error is returned.
        
    -   If the value of number is 0, 0 is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 0.
        select bin(0);
        --The return value is NULL.
        select bin(null);
        --The return value is 1100.
        select bin(12);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command obtains the binary representations of the int\_data and bigint\_data columns.
        
        ```
        --Enable new data types of MaxCompute V2.0. You must run this command together with the SQL statement.
        set odps.sql.type.system.odps2=true;
        select bin(int_data) as int_new, bin(bigint_data) as bigint_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +----------------------------------------------------------------------------+------------------------------------------------------------------+
        | int_new                                                                    | bigint_new                                                       |
        +----------------------------------------------------------------------------+------------------------------------------------------------------+
        | NULL                                                                       | 1111111111111111111111111111111111111111111111111111111111110110 |
        | 1111111111111111111111111111111111111111111111111111111111101100           | NULL                                                             |
        | 0                                                                          | 1111111111111111111111111111111111111111111111111111111111111111 |
        | 1111111111111111111111111111111111111111111111111111111111011000           | 100                                                              |
        | 101                                                                        | 1111111111111111111111111111111111111111111111111111111111001110 |
        | 1111111111111111111111111111111111111111111111111111111111000100           | 110                                                              |
        | 1111111111111111111111111111111111111111111111111111111111111111           | 1111111111111111111111111111111111111111111111111111111110111010 |
        | 1111111111111111111111111111111111111111111111111111111110110000           | 1                                                                |
        | 1001                                                                       | 1111111111111111111111111111111111111111111111111111111110100110 |
        | 1111111111111111111111111111111111111111111111111111111110011100           | 1010                                                             |
        +----------------------------------------------------------------------------+------------------------------------------------------------------+
        ```
        

## CBRT

-   Syntax
    
    ```
    double cbrt(<number>)
    ```
    
-   Description
    
    Calculates the cube root of number. This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    number: Required. A value of the BIGINT, INT, SMALLINT, TINYINT, DOUBLE, FLOAT, or STRING type.
    
-   Return value
    
    A value of the DOUBLE type is returned. The following rules apply:
    
    -   If the data type of number is not BIGINT, INT, SMALLINT, TINYINT, DOUBLE, FLOAT, or STRING, an error is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 2.0.
        select cbrt(8);
        --The return value is NULL.
        select cbrt(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command obtains the cube root of all columns except decimal\_data.
        
        ```
        --Enable new data types of MaxCompute V2.0. You must run this command together with the SQL statement.
        set odps.sql.type.system.odps2=true;
        select cbrt(int_data) as int_new, cbrt(bigint_data) as bigint_new, cbrt(double_data) as double_new, cbrt(float_data) as float_new, cbrt(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +---------------------+---------------------+----------------------+---------------------+---------------------+
        | int_new             | bigint_new          | double_new           | float_new           | string_new          |
        +---------------------+---------------------+----------------------+---------------------+---------------------+
        | NULL                | -2.1544346900318834 | 0.806714323012272    | 0.8067143108004823  | 2.1544346900318834  |
        | -2.7144176165949063 | NULL                | -0.46415888336127786 | -0.46415888566678   | -2.1544346900318834 |
        | 0.0                 | -1.0                | NULL                 | -1.0                | 3.107232505953859   |
        | -3.4199518933533937 | 1.5874010519681996  | 0.9619001716077046   | 0.961900166454112   | -3.107232505953859  |
        | 1.7099759466766968  | -3.6840314986403864 | -1.0                 | NULL                | 3.6840314986403864  |
        | -3.9148676411688634 | 1.8171205928321394  | 1.1447142425533317   | 1.1447142425533317  | -3.6840314986403864 |
        | -1.0                | -4.121285299808557  | -1.9574338205844317  | -1.9574338205844317 | NULL                |
        | -4.308869380063767  | 1.0                 | -2.168702885250197   | -2.1687028717323127 | -1.0                |
        | 2.080083823051904   | -4.481404746557165  | 1.3715339700741747   | 1.3715339565548288  | 0.0                 |
        | -4.641588833612778  | 2.1544346900318834  | -1.7967017791430528  | -1.7967017988380907 | -4.481404746557165  |
        +---------------------+---------------------+----------------------+---------------------+---------------------+
        ```
        

## CEIL

-   Syntax
    
    ```
    bigint ceil(<value>)
    ```
    
-   Description
    
    Rounds a value up. This function returns the smallest integer that is not less than the input value value.
    
-   Parameters
    
    value: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    A value of the BIGINT type is returned. If the value of value is NULL, NULL is returned.
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 2.
        select ceil(1.1);
        --The return value is -1.
        select ceil(-1.1);
        --The return value is NULL.
        select ceil(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command rounds up a value.
        
        ```
        select ceil(bigint_data) as bigint_new, ceil(double_data) as double_new, ceil(decimal_data) as decimal_new, ceil(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+------------+-------------+------------+
        | bigint_new | double_new | decimal_new | string_new |
        +------------+------------+-------------+------------+
        | -10        | 1          | 1           | 10         |
        | NULL       | 0          | 0           | -10        |
        | -1         | NULL       | 21          | 30         |
        | 4          | 1          | NULL        | -30        |
        | -50        | -1         | -1          | 50         |
        | 6          | 2          | 2           | -50        |
        | -70        | -7         | -7          | NULL       |
        | 1          | -10        | -10         | -1         |
        | -90        | 3          | 3           | 0          |
        | 10         | -5         | -5          | -90        |
        +------------+------------+-------------+------------+
        ```
        

## CONV

-   Syntax
    
    ```
    STRING CONV(<input>, BIGINT <from_base>, BIGINT <to_base>)
    ```
    
-   Description
    
    This function converts a number from one base to another and returns the result as a string.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    input
    
    Yes
    
    A value of the STRING type.
    
    **Note**
    
    -   If your project is in Hive-compatible mode, which means that you have run the `set odps.sql.hive.compatible=true;` command, implicit conversion of BIGINT and DOUBLE values is supported.
        
    -   If your project is not in Hive-compatible mode, which means that you have run the `set odps.sql.hive.compatible=false;` command, implicit conversion of BIGINT and DOUBLE values is not supported.
        
    
    from\_base
    
    Yes
    
    The radix value must be a decimal integer of 2, 8, 10, or 16. Implicit type conversion is not supported.
    
    to\_base
    
    Yes
    
    The radix value must be a decimal integer of 2, 8, 10, or 16. Implicit type conversion is not supported.
    
-   Return value
    
    A value of the STRING type is returned. The following rules apply:
    
    -   If the value of input, from\_base, or to\_base is NULL, NULL is returned.
        
    -   The conversion is performed with 64-bit precision. If an overflow occurs, NULL is returned.
        
    -   If the input value of input is of the BIGINT or DOUBLE type, NULL is returned in non-Hive-compatible mode because implicit conversion is not supported.
        
    -   If the input value of input is a negative value, NULL is returned in non-Hive-compatible mode. In Hive-compatible mode, 0 is returned.
        
    -   If the input value of input is a decimal, NULL is returned in non-Hive-compatible mode. In Hive-compatible mode, the value is converted to an integer and then converted to the specified base. The decimal part is discarded.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 12.
        SELECT CONV('1100', 2, 10);
        --The return value is C.
        SELECT CONV('1100', 2, 16);
        --The return value is 171.
        SELECT CONV('ab', 16, 10);
        --The return value is AB.
        SELECT CONV('ab', 16, 16);
        --The return value is NULL.
        SELECT CONV('1100', null, 10);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command converts values to the binary format.
        
        ```
        SELECT CONV(bigint_data,10,2) AS bigint_new, CONV(double_data,10,2) AS double_new, CONV(decimal_data,10,2) AS decimal_new, CONV(string_data,10,2) AS string_new FROM mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+------------+-------------+------------+
        | bigint_new | double_new | decimal_new | string_new |
        +------------+------------+-------------+------------+
        | NULL       | 0          | 0           | 1010       |
        | NULL       | NULL       | NULL        | NULL       |
        | NULL       | NULL       | 10100       | 11110      |
        | 100        | 0          | NULL        | NULL       |
        | NULL       | NULL       | NULL        | 110010     |
        | 110        | 1          | 1           | NULL       |
        | NULL       | NULL       | NULL        | NULL       |
        | 1          | NULL       | NULL        | NULL       |
        | NULL       | 10         | 10          | 0          |
        | 1010       | NULL       | NULL        | NULL       |
        +------------+------------+-------------+------------+
        ```
        

## CORR

-   Syntax
    
    ```
    double corr(<col1>, <col2>)
    ```
    
-   Description
    
    Calculates the Pearson correlation coefficient of two columns of data. This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    col1 and col2: Required. The names of the two columns in the table for which you want to calculate the Pearson correlation coefficient. The columns must be of the DOUBLE, BIGINT, INT, SMALLINT, TINYINT, FLOAT, or DECIMAL type. The data types of col1 and col2 can be different.
    
-   Return value
    
    A value of the DOUBLE type is returned. If a row in an input column contains a NULL value, that row is not used in the calculation.
    
-   Example
    
    Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the Pearson correlation coefficient of the double\_data and float\_data columns.
    
    ```
    select corr(double_data,float_data) from mf_math_fun_t;
    ```
    
    The return value is 1.0.
    

## COS

-   Syntax
    
    ```
    double|decimal cos(<number>)
    ```
    
-   Description
    
    Calculates the cosine of number. The input value is in radians.
    
-   Parameters
    
    number: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    A value of the DOUBLE or DECIMAL type is returned. The following rules apply:
    
    -   If number is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 2.6794896585028633e-8.
        select cos(3.1415926/2);
        --The return value is -0.9999999999999986.
        select cos(3.1415926);
        --The return value is NULL.
        select cos(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the cosine.
        
        ```
        select cos(bigint_data) as bigint_new, cos(double_data) as double_new, cos(decimal_data) as decimal_new, cos(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +---------------------+--------------------+----------------------+---------------------+
        | bigint_new          | double_new         | decimal_new          | string_new          |
        +---------------------+--------------------+----------------------+---------------------+
        | -0.8390715290764524 | 0.8653239416229412 | 0.8653239416229412   | -0.8390715290764524 |
        | NULL                | 0.9950041652780258 | 0.9950041652780258   | -0.8390715290764524 |
        | 0.5403023058681398  | NULL               | -0.02964340851507803 | 0.15425144988758405 |
        | -0.6536436208636119 | 0.6294120265736969 | NULL                 | 0.15425144988758405 |
        | 0.9649660284921133  | 0.5403023058681398 | 0.5403023058681398   | 0.9649660284921133  |
        | 0.960170286650366   | 0.0707372016677029 | 0.0707372016677029   | 0.9649660284921133  |
        | 0.6333192030862999  | 0.3466353178350258 | 0.3466353178350258   | NULL                |
        | 0.5403023058681398  | -0.7142656520272003| -0.7142656520272003  | 0.5403023058681398  |
        | -0.4480736161291701 | -0.8464080412157756| -0.8464080412157756  | 1.0                 |
        | -0.8390715290764524 | 0.8855195169413189 | 0.8855195169413189   | -0.4480736161291701 |
        +---------------------+--------------------+----------------------+---------------------+
        ```
        

## COSH

-   Syntax
    
    ```
    double|decimal cosh(<number>)
    ```
    
-   Description
    
    Calculates the hyperbolic cosine of number.
    
-   Parameters
    
    number: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    A value of the DOUBLE or DECIMAL type is returned. The following rules apply:
    
    -   If number is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 2.5091784169949913.
        select cosh(3.1415926/2);
        --The return value is NULL.
        select cosh(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the hyperbolic cosine.
        
        ```
        select cosh(bigint_data) as bigint_new, cosh(double_data) as double_new, cosh(decimal_data) as decimal_new, cosh(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +-----------------------+--------------------+--------------------+----------------------+
        | bigint_new            | double_new         | decimal_new        | string_new           |
        +-----------------------+--------------------+--------------------+----------------------+
        | 11013.232920103324    | 1.1410071063729532 | 1.1410071063729532 | 11013.232920103324   |
        | NULL                  | 1.0050041680558035 | 1.0050041680558035 | 11013.232920103324   |
        | 1.5430806348152437    | NULL               | 380445243.96844625 | 5343237290762.231    |
        | 27.308232836016487    | 1.42289270202111   | NULL               | 5343237290762.231    |
        | 2.592352764293536e21  | 1.5430806348152437 | 1.5430806348152437 | 2.592352764293536e21 |
        | 201.7156361224559     | 2.352409615243247  | 2.352409615243247  | 2.592352764293536e21 |
        | 1.2577193354595834e30 | 904.0214837702166  | 904.0214837702166  | NULL                 |
        | 1.5430806348152437    | 13451.593055733929 | 13451.593055733929 | 1.5430806348152437   |
        | 6.102016471589204e38  | 6.636456081840602  | 6.636456081840602  | 1.0                  |
        | 11013.232920103324    | 165.151293732197   | 165.151293732197   | 6.102016471589204e38 |
        +-----------------------+--------------------+--------------------+----------------------+
        ```
        

## COT

-   Syntax
    
    ```
    double|decimal cot(<number>)
    ```
    
-   Description
    
    Calculates the cotangent of number. The input value is in radians.
    
-   Parameters
    
    number: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    A value of the DOUBLE or DECIMAL type is returned. The following rules apply:
    
    -   If number is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 2.6794896585028643E-8.
        select cot(3.1415926/2);
        --The return value is NULL.
        select cot(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the cotangent.
        
        ```
        select cot(bigint_data) as bigint_new, cot(double_data) as double_new, cot(decimal_data) as decimal_new, cot(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +-----------------------+---------------------+---------------------+----------------------+
        | bigint_new            | double_new          | decimal_new         | string_new           |
        +-----------------------+---------------------+---------------------+----------------------+
        | -1.54235104535692     | 1.7264594764178474  | 1.7264594764178474  | 1.54235104535692     |
        | NULL                  | -9.966644423259238  | -9.966644423259238  | -1.54235104535692    |
        | -0.6420926159343308   | NULL                | -0.02965644140592836| -0.15611995216165922 |
        | 0.8636911544506167    | 0.8099792954471944  | NULL                | 0.15611995216165922  |
        | 3.6778144508505695    | -0.6420926159343308 | -0.6420926159343308 | -3.6778144508505695  |
        | -3.436353004180128    | 0.07091484430265245 | 0.07091484430265245 | 3.6778144508505695   |
        | -0.8183574478651038   | -0.36954725630901636| -0.36954725630901636| NULL                 |
        | 0.6420926159343308    | -1.0205622016180353 | -1.0205622016180353 | -0.6420926159343308  |
        | 0.5012027833801532    | -1.5893944776331337 | -1.5893944776331337 | 1.0                  |
        | 1.54235104535692      | 1.9059736612916494  | 1.9059736612916494  | 0.5012027833801532   |
        +-----------------------+---------------------+---------------------+----------------------+
        ```
        

## DEGREES

-   Syntax
    
    ```
    double degrees(<number>) 
    ```
    
-   Description
    
    Converts a value from radians to degrees.
    
-   Parameters
    
    number: Required. A value of the DOUBLE, BIGINT, INT, SMALLINT, TINYINT, FLOAT, DECIMAL, or STRING type. This is an extension function in MaxCompute V2.0.
    
-   Return value
    
    A value of the DOUBLE type is returned. If the value of number is NULL, NULL is returned.
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 90.0.
        select degrees(1.5707963267948966);
        --The return value is 0.0.
        select degrees(0);
        --The return value is NULL.
        select degrees(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command obtains the degrees that correspond to all columns.
        
        ```
        --Enable new data types of MaxCompute V2.0. You must run this command together with the SQL statement.
        set odps.sql.type.system.odps2=true;
        select degrees(int_data) as int_new, degrees(bigint_data) as bigint_new, degrees(double_data) as double_new, degrees(decimal_data) as decimal_new, degrees(float_data) as float_new, degrees(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +---------------------+---------------------+---------------------+---------------------+---------------------+---------------------+
        | int_new             | bigint_new          | double_new          | decimal_new         | float_new           | string_new          |
        +---------------------+---------------------+---------------------+---------------------+---------------------+---------------------+
        | NULL                | -572.9577951308232  | 30.08028424436822   | 30.08028424436822   | 30.080282878330387  | 572.9577951308232   |
        | -1145.9155902616465 | NULL                | -5.729577951308232  | -5.729577951308232  | -5.729578036685597  | -572.9577951308232  |
        | 0.0                 | -57.29577951308232  | NULL                | 1171.6986910425335  | -57.29577951308232  | 1718.8733853924698  |
        | -2291.831180523293  | 229.1831180523293   | 50.99324376664326   | NULL                | 50.99324294702057   | -1718.8733853924698 |
        | 286.4788975654116   | -2864.7889756541163 | -57.29577951308232  | -57.29577951308232  | NULL                | 2864.7889756541163  |
        | -3437.7467707849396 | 343.77467707849394  | 85.94366926962348   | 85.94366926962348   | 85.94366926962348   | -2864.7889756541163 |
        | -57.29577951308232  | -4010.7045659157625 | -429.71834634811745 | -429.71834634811745 | -429.71834634811745 | NULL                |
        | -4583.662361046586  | 57.29577951308232   | -584.4169510334397  | -584.4169510334397  | -584.416940105137   | -57.29577951308232  |
        | 515.662015617741    | -5156.620156177409  | 147.8231111437524   | 147.8231111437524   | 147.82310677243132  | 0.0                 |
        | -5729.5779513082325 | 572.9577951308232   | -332.31552117587745 | -332.31552117587745 | -332.31553210418014 | -5156.620156177409  |
        +---------------------+---------------------+---------------------+---------------------+---------------------+---------------------+
        ```
        

## E

-   Syntax
    
    ```
    double e()
    ```
    
-   Description
    
    Returns the value of `e`. This is an extension function in MaxCompute V2.0.
    
-   Return value
    
    A value of the DOUBLE type is returned.
    
-   Example
    
    ```
    --The return value is 2.718281828459045.
    select e();
    ```
    

## EXP

-   Syntax
    
    ```
    double|decimal exp(<number>)
    ```
    
-   Description
    
    Calculates the exponential value of number.
    
-   Parameters
    
    number: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    A value of the DOUBLE or DECIMAL type is returned. The following rules apply:
    
    -   If number is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 4.810477252069109.
        select exp(3.1415926/2);
        --The return value is NULL.
        select exp(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the exponential value.
        
        ```
        select exp(bigint_data) as bigint_new, exp(double_data) as double_new, exp(decimal_data) as decimal_new, exp(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +-------------------------+-------------------------+-------------------------+-------------------------+
        | bigint_new              | double_new              | decimal_new             | string_new              |
        +-------------------------+-------------------------+-------------------------+-------------------------+
        | 0.000045399929762484854 | 1.6904588483790914      | 1.6904588483790914      | 22026.465794806718      |
        | NULL                    | 0.9048374180359595      | 0.9048374180359595      | 0.000045399929762484854 |
        | 0.36787944117144233     | NULL                    | 760890487.9368925       | 10686474581524.463      |
        | 54.598150033144236      | 2.4351296512898744      | NULL                    | 9.357622968840175e-14   |
        | 1.9287498479639178e-22  | 0.36787944117144233     | 0.36787944117144233     | 5.184705528587072e21    |
        | 403.4287934927351       | 4.4816890703380645      | 4.4816890703380645      | 1.9287498479639178e-22  |
        | 3.975449735908647e-31   | 0.0005530843701478336   | 0.0005530843701478336   | NULL                    |
        | 2.718281828459045       | 0.000037170318684126734 | 0.000037170318684126734 | 0.36787944117144233     |
        | 8.194012623990515e-40   | 13.197138159658358      | 13.197138159658358      | 1.0                     |
        | 22026.465794806718      | 0.0030275547453758153   | 0.0030275547453758153   | 8.194012623990515e-40   |
        +-------------------------+-------------------------+-------------------------+-------------------------+
        ```
        

## FACTORIAL

-   Syntax
    
    ```
    bigint factorial(<number>)
    ```
    
-   Description
    
    Returns the factorial of number. This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    number: Required. A value of the BIGINT, INT, SMALLINT, or TINYINT type. The value must be in the range of \[0, 20\].
    
-   Return value
    
    A value of the BIGINT type is returned. The following rules apply:
    
    -   If the value of number is 0, 1 is returned.
        
    -   If the value of number is NULL or is not in the range of \[0, 20\], NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 120. 5! = 5 × 4 × 3 × 2 × 1 = 120
        select factorial(5); 
        --The return value is 1.
        select factorial(0); 
        --The return value is NULL.
        select factorial(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the factorial of the int\_data and bigint\_data columns.
        
        ```
        --Enable new data types of MaxCompute V2.0. You must run this command together with the SQL statement.
        set odps.sql.type.system.odps2=true;
        select factorial(int_data) as int_new, factorial(bigint_data) as bigint_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+------------+
        | int_new    | bigint_new |
        +------------+------------+
        | NULL       | NULL       |
        | NULL       | NULL       |
        | 1          | NULL       |
        | NULL       | 24         |
        | 120        | NULL       |
        | NULL       | 720        |
        | NULL       | NULL       |
        | NULL       | 1          |
        | 362880     | NULL       |
        | NULL       | 3628800    |
        +------------+------------+
        ```
        

## **FILTER**

-   Syntax
    
    ```
    array<T> filter(array<T> <a>, function<T,boolean> <func>)
    ```
    
-   Parameters
    
    -   a: required. This parameter specifies an array. `T` in `array<T>` specifies the data type of the elements in the array. The elements can be of any data type.
        
    -   func: required. This parameter specifies the built-in function, user-defined function, or expression that is used to filter the elements in Array a. The value must be of the same data type as the elements in Array a. The output result of the function or expression is of the BOOLEAN type.
        
-   Return value
    
    A value of the ARRAY type is returned.
    
-   Example
    
    ```
    -- The return value is [2, 3]. 
    select filter(array(1, 2, 3), x -> x > 1);
    ```
    
    **Note**
    
    In this example, the combination of a hyphen and a closing angle bracket (->) is used. For more information about how to use the combination of a hyphen and a closing angle bracket `(->)` in Lambda functions, see [Lambda functions](/help/en/maxcompute/user-guide/lambda-expression).
    

## FLOOR

-   Syntax
    
    ```
    bigint floor(<number>)
    ```
    
-   Description
    
    Rounds a value down. This function returns the largest integer that is not greater than number.
    
-   Parameters
    
    number: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    A value of the BIGINT type is returned. If the value of number is NULL, NULL is returned.
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 1.
        select floor(1.2);
        --The return value is 0.
        select floor(0.1);
        --The return value is -2.
        select floor(-1.2);
        --The return value is -1.
        select floor(-0.1);
        --The return value is 0.
        select floor(0.0);
        --The return value is 0.
        select floor(-0.0);
        --The return value is NULL.
        select floor(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command rounds down a value.
        
        ```
        select floor(bigint_data) as bigint_new, floor(double_data) as double_new, floor(decimal_data) as decimal_new, floor(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+------------+-------------+------------+
        | bigint_new | double_new | decimal_new | string_new |
        +------------+------------+-------------+------------+
        | -10        | 0          | 0           | 10         |
        | NULL       | -1         | -1          | -10        |
        | -1         | NULL       | 20          | 30         |
        | 4          | 0          | NULL        | -30        |
        | -50        | -1         | -1          | 50         |
        | 6          | 1          | 1           | -50        |
        | -70        | -8         | -8          | NULL       |
        | 1          | -11        | -11         | -1         |
        | -90        | 2          | 2           | 0          |
        | 10         | -6         | -6          | -90        |
        +------------+------------+-------------+------------+
        ```
        

## FORMAT\_NUMBER

-   Syntax
    
    ```
    string format_number(float|double|decimal <expr1>, <expr2>)
    ```
    
-   Description
    
    Converts a number to a string in a specified format. This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    -   expr1: Required. The data to be formatted. The value can be of the DOUBLE, BIGINT, INT, SMALLINT, TINYINT, FLOAT, DECIMAL, or STRING type.
        
    -   expr2: Required. The destination format. You can specify the number of decimal places to retain. You can also specify a format description, such as `#,###,###.##`.
        
-   Return value
    
    A value of the STRING type is returned. The following rules apply:
    
    -   If expr2 > 0, the value is rounded to the specified number of decimal places.
        
    -   If expr2 = 0, no decimal point or decimal part is included.
        
    -   If expr2 < 0 or expr2 > 340, an error is returned.
        
    -   If the value of expr1 or expr2 is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 5.230.
        select format_number(5.230134523424545456,3);
        --The return value is 12,332.123.
        select format_number(12332.123456, '#,###,###,###.###');
        --The return value is NULL.
        select format_number(null,3);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command retains a specified number of decimal places for all columns.
        
        ```
        --Enable new data types of MaxCompute V2.0. You must run this command together with the SQL statement.
        set odps.sql.type.system.odps2=true;
        select format_number(int_data, 1) as int_new, format_number(bigint_data, 1) as bigint_new, format_number(double_data, 2) as double_new, format_number(decimal_data, 1) as decimal_new, format_number(float_data, 0) as float_new, format_number(string_data, 1) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +---------+------------+------------+-------------+-----------+------------+
        | int_new | bigint_new | double_new | decimal_new | float_new | string_new |
        +---------+------------+------------+-------------+-----------+------------+
        | NULL    | -10.0      | 0.53       | 0.5         | 1         | 10.0       |
        | -20.0   | NULL       | -0.10      | -0.1        | -0        | -10.0      |
        | 0.0     | -1.0       | NULL       | 20.5        | -1        | 30.0       |
        | -40.0   | 4.0        | 0.89       | NULL        | 1         | -30.0      |
        | 5.0     | -50.0      | -1.00      | -1.0        | NULL      | 50.0       |
        | -60.0   | 6.0        | 1.50       | 1.5         | 2         | -50.0      |
        | -1.0    | -70.0      | -7.50      | -7.5        | -8        | NULL       |
        | -80.0   | 1.0        | -10.20     | -10.2       | -10       | -1.0       |
        | 9.0     | -90.0      | 2.58       | 2.6         | 3         | 0.0        |
        | -100.0  | 10.0       | -5.80      | -5.8        | -6        | -90.0      |
        +---------+------------+------------+-------------+-----------+------------+
        ```
        

## HEX

-   Syntax
    
    ```
    string hex(<number>) 
    ```
    
-   Description
    
    Converts a numeric value or a string to the hexadecimal format. This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    number: Required. A value of the DOUBLE, BIGINT, INT, SMALLINT, TINYINT, FLOAT, DECIMAL, or STRING type.
    
-   Return value
    
    A value of the STRING type is returned. The following rules apply:
    
    -   If the value of number is not 0 or NULL, a value of the STRING type is returned.
        
    -   If the value of number is 0, 0 is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 0.
        select hex(0);
        --The return value is 616263.
        select hex('abc');
        --The return value is 11.
        select hex(17);
        --The return value is 3137.
        select hex('17');
        --An error is returned. 
        select hex(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command converts all columns to the hexadecimal format.
        
        ```
        --Enable new data types of MaxCompute V2.0. You must run this command together with the SQL statement.
        set odps.sql.type.system.odps2=true;
        select hex(int_data) as int_new, hex(bigint_data) as bigint_new, hex(double_data) as double_new, hex(decimal_data) as decimal_new, hex(float_data) as float_new, hex(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------------+------------------+------------+-------------+------------+------------+
        | int_new          | bigint_new       | double_new | decimal_new | float_new  | string_new |
        +------------------+------------------+------------+-------------+------------+------------+
        | NULL             | FFFFFFFFFFFFFFF6 | 302E353235 | 302E353235  | 302E353235 | 3130       |
        | FFFFFFFFFFFFFFEC | NULL             | 2D302E31   | 2D302E31    | 2D302E31   | 2D3130     |
        | 0                | FFFFFFFFFFFFFFFF | NULL       | 32302E3435  | 2D31       | 3330       |
        | FFFFFFFFFFFFFFD8 | 4                | 302E3839   | NULL        | 302E3839   | 2D3330     |
        | 5                | FFFFFFFFFFFFFFCE | 2D312E30   | 2D31        | NULL       | 3530       |
        | FFFFFFFFFFFFFFC4 | 6                | 312E35     | 312E35      | 312E35     | 2D3530     |
        | FFFFFFFFFFFFFFFF | FFFFFFFFFFFFFFBA | 2D372E35   | 2D372E35    | 2D372E35   | NULL       |
        | FFFFFFFFFFFFFFB0 | 1                | 2D31302E32 | 2D31302E32  | 2D31302E32 | 2D31       |
        | 9                | FFFFFFFFFFFFFFA6 | 322E3538   | 322E3538    | 322E3538   | 30         |
        | FFFFFFFFFFFFFF9C | A                | 2D352E38   | 2D352E38    | 2D352E38   | 2D3930     |
        +------------------+------------------+------------+-------------+------------+------------+
        ```
        

## ISNAN

-   Syntax
    
    ```
    boolean isnan(<expr>)
    ```
    
-   Description
    
    Checks whether the value of expr is **NaN**.
    
-   Parameters
    
    expr: Required. A value of the DOUBLE type. If the input value is of the STRING, BIGINT, or DECIMAL type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    -   If the value of expr is **NaN**, True is returned. Otherwise, False is returned.
        
    -   If the value of expr is NULL, False is returned.
        
-   Example
    
    ```
    --The return value is False.
    SELECT isnan(100.1);
    ```
    

## LN

-   Syntax
    
    ```
    double|decimal ln(<number>)
    ```
    
-   Description
    
    Calculates the natural logarithm of number.
    
-   Parameters
    
    number: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    A value of the DOUBLE or DECIMAL type is returned. The following rules apply:
    
    -   If number is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the value of number is a negative number or 0, NULL is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 1.144729868791239.
        select ln(3.1415926);
        --The return value is NULL.
        select ln(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the natural logarithm.
        
        ```
        select ln(bigint_data) as bigint_new, ln(double_data) as double_new, ln(decimal_data) as decimal_new, ln(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +--------------------+----------------------+---------------------+---------------------+
        | bigint_new         | double_new           | decimal_new         | string_new          |
        +--------------------+----------------------+---------------------+---------------------+
        | NULL               | -0.6443570163905132  | -0.6443570163905132 | 2.302585092994046   |
        | NULL               | NULL                 | NULL                | NULL                |
        | NULL               | NULL                 | 3.017982882488811   | 3.4011973816621555  |
        | 1.3862943611198906 | -0.11653381625595151 | NULL                | NULL                |
        | NULL               | NULL                 | NULL                | 3.912023005428146   |
        | 1.791759469228055  | 0.4054651081081644   | 0.4054651081081644  | NULL                |
        | NULL               | NULL                 | NULL                | NULL                |
        | 0.0                | NULL                 | NULL                | NULL                |
        | NULL               | 0.9477893989335261   | 0.9477893989335261  | NULL                |
        | 2.302585092994046  | NULL                 | NULL                | NULL                |
        +--------------------+----------------------+---------------------+---------------------+
        ```
        

## LOG

-   Syntax
    
    ```
    double log(<base>, <x>)
    ```
    
-   Description
    
    Calculates the logarithm of x to the base base.
    
-   Parameters
    
    -   base: Required. The base. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
        
    -   x: Required. The value for which you want to calculate the logarithm. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
        
-   Return value
    
    A value of the DOUBLE type is returned. The following rules apply:
    
    -   If the value of base or x is NULL, NULL is returned.
        
    -   If the value of base or x is a negative number or 0, NULL is returned.
        
    -   If the value of base is 1, which causes a division-by-zero error, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 4.0.
        select log(2, 16);
        --The return value is NULL.
        select log(2, null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the base-2 logarithm of columns.
        
        ```
        select log(2,bigint_data) as bigint_new, log(2,double_data) as double_new, log(2,decimal_data) as decimal_new, log(2,string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +--------------------+----------------------+--------------------+--------------------+
        | bigint_new         | double_new           | decimal_new        | string_new         |
        +--------------------+----------------------+--------------------+--------------------+
        | NULL               | -0.929610672108602   | -0.929610672108602 | 3.3219280948873626 |
        | NULL               | NULL                 | NULL               | NULL               |
        | NULL               | NULL                 | 4.354028938054387  | 4.906890595608519  |
        | 2.0                | -0.16812275880832692 | NULL               | NULL               |
        | NULL               | NULL                 | NULL               | 5.643856189774724  |
        | 2.584962500721156  | 0.5849625007211562   | 0.5849625007211562 | NULL               |
        | NULL               | NULL                 | NULL               | NULL               |
        | 0.0                | NULL                 | NULL               | NULL               |
        | NULL               | 1.3673710656485296   | 1.3673710656485296 | NULL               |
        | 3.3219280948873626 | NULL                 | NULL               | NULL               |
        +--------------------+----------------------+--------------------+--------------------+
        ```
        

## LOG10

-   Syntax
    
    ```
    double log10(<number>)
    ```
    
-   Description
    
    Returns the base-10 logarithm of number. This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    number: Required. A value of the DOUBLE, BIGINT, INT, SMALLINT, TINYINT, FLOAT, DECIMAL, or STRING type.
    
-   Return value
    
    A value of the DOUBLE type is returned. If the value of number is 0, a negative number, or NULL, NULL is returned.
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is NULL.
        select log10(null);
        --The return value is NULL.
        select log10(0);
        --The return value is 0.9030899869919435.
        select log10(8);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the base-10 logarithm of all columns.
        
        ```
        --Enable new data types of MaxCompute V2.0. You must run this command together with the SQL statement.
        set odps.sql.type.system.odps2=true;
        select log10(int_data) as int_new, log10(bigint_data) as bigint_new, log10(double_data) as double_new, log10(decimal_data) as decimal_new, log10(float_data) as float_new, log10(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +--------------------+--------------------+---------------------+---------------------+-----------------------+--------------------+
        | int_new            | bigint_new         | double_new          | decimal_new         | float_new             | string_new         |
        +--------------------+--------------------+---------------------+---------------------+-----------------------+--------------------+
        | NULL               | NULL               | -0.2798406965940431 | -0.2798406965940431 | -0.27984071631668606  | 1.0                |
        | NULL               | NULL               | NULL                | NULL                | NULL                  | NULL               |
        | NULL               | NULL               | NULL                | 1.3106933123433606  | NULL                  | 1.4771212547196624 |
        | NULL               | 0.6020599913279623 | -0.0506099933550872 | NULL                | -0.050610000335573106 | NULL               |
        | 0.6989700043360187 | NULL               | NULL                | NULL                | NULL                  | 1.6989700043360185 |
        | NULL               | 0.7781512503836435 | 0.17609125905568124 | 0.17609125905568124 | 0.17609125905568124   | NULL               |
        | NULL               | NULL               | NULL                | NULL                | NULL                  | NULL               |
        | NULL               | 0.0                | NULL                | NULL                | NULL                  | NULL               |
        | 0.9542425094393249 | NULL               | 0.4116197059632301  | 0.4116197059632301  | 0.411619693120579     | NULL               |
        | NULL               | 1.0                | NULL                | NULL                | NULL                  | NULL               |
        +--------------------+--------------------+---------------------+---------------------+-----------------------+--------------------+
        ```
        

## LOG2

-   Syntax
    
    ```
    double log2(<number>)
    ```
    
-   Description
    
    Returns the base-2 logarithm of number. This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    number: Required. A value of the DOUBLE, BIGINT, INT, SMALLINT, TINYINT, FLOAT, DECIMAL, or STRING type.
    
-   Return value
    
    A value of the DOUBLE type is returned. If the value of number is 0, a negative number, or NULL, NULL is returned.
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is NULL.
        select log2(null);
        --The return value is NULL.
        select log2(0);
        --The return value is 3.0.
        select log2(8);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the base-2 logarithm of all columns.
        
        ```
        --Enable new data types of MaxCompute V2.0. You must run this command together with the SQL statement.
        set odps.sql.type.system.odps2=true;
        select log2(int_data) as int_new, log2(bigint_data) as bigint_new, log2(double_data) as double_new, log2(decimal_data) as decimal_new, log2(float_data) as float_new, log2(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +--------------------+--------------------+----------------------+--------------------+----------------------+--------------------+
        | int_new            | bigint_new         | double_new           | decimal_new        | float_new            | string_new         |
        +--------------------+--------------------+----------------------+--------------------+----------------------+--------------------+
        | NULL               | NULL               | -0.929610672108602   | -0.929610672108602 | -0.9296107376258038  | 3.3219280948873626 |
        | NULL               | NULL               | NULL                 | NULL               | NULL                 | NULL               |
        | NULL               | NULL               | NULL                 | 4.354028938054387  | NULL                 | 4.906890595608519  |
        | NULL               | 2.0                | -0.16812275880832692 | NULL               | -0.16812278199699915 | NULL               |
        | 2.321928094887362  | NULL               | NULL                 | NULL               | NULL                 | 5.643856189774724  |
        | NULL               | 2.584962500721156  | 0.5849625007211562   | 0.5849625007211562 | 0.5849625007211562   | NULL               |
        | NULL               | NULL               | NULL                 | NULL               | NULL                 | NULL               |
        | NULL               | 0.0                | NULL                 | NULL               | NULL                 | NULL               |
        | 3.1699250014423126 | NULL               | 1.3673710656485296   | 1.3673710656485296 | 1.367371022986166    | NULL               |
        | NULL               | 3.3219280948873626 | NULL                 | NULL               | NULL                 | NULL               |
        +--------------------+--------------------+----------------------+--------------------+----------------------+--------------------+
        ```
        

## NEGATIVE

-   Syntax
    
    ```
    TINYINT|SMALLINT|INT|BIGINT|DOUBLE|DECIMAL negative(TINYINT|SMALLINT|INT|BIGINT|DOUBLE|DECIMAL <expr>)
    ```
    
-   Description
    
    Returns the negative value of expr.
    
-   Parameters
    
    expr: Required. The input expression. The value can be of the TINYINT, SMALLINT, INT, BIGINT, DOUBLE, or DECIMAL type.
    
-   Return value
    
    Returns the negative value of the expr expression.
    
-   Example
    
    ```
    --The return value is -1.
    SELECT negative(1);
    ```
    

## PI

-   Syntax
    
    ```
    double pi()
    ```
    
-   Description
    
    Returns the value of π. This is an extension function in MaxCompute V2.0.
    
-   Return value
    
    A value of the DOUBLE type is returned.
    
-   Example
    
    ```
    --The return value is 3.141592653589793.
    select pi();
    ```
    

## POSITIVE

-   Syntax
    
    ```
    TINYINT|SMALLINT|INT|BIGINT|DOUBLE|DECIMAL positive(TINYINT|SMALLINT|INT|BIGINT|DOUBLE|DECIMAL <expr>)
    ```
    
-   Description
    
    Returns the value of expr.
    
-   Parameters
    
    expr: Required. The input expression. The value can be of the TINYINT, SMALLINT, INT, BIGINT, DOUBLE, or DECIMAL type.
    
-   Return value
    
    Returns the value of the expr expression.
    
-   Example
    
    ```
    --The return value is 1.
    SELECT positive(1);
    ```
    

## POW

-   Syntax
    
    ```
    double|decimal pow(<x>, <y>)
    ```
    
-   Description
    
    Calculates the value of x to the power of y, which is `x^y`.
    
-   Parameters
    
    -   x: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
        
    -   y: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
        
-   Return value
    
    A value of the DOUBLE or DECIMAL type is returned. The following rules apply:
    
    -   If x or y is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If x or y is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the value of x or y is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 65536.0.
        select pow(2, 16);
        --The return value is NULL.
        select pow(2, null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the value of columns to the power of 2.
        
        ```
        select pow(bigint_data, 2) as bigint_new, pow(double_data, 2) as double_new, pow(decimal_data, 2) as decimal_new, pow(string_data, 2) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+----------------------+----------------------+------------+
        | bigint_new | double_new           | decimal_new          | string_new |
        +------------+----------------------+----------------------+------------+
        | 100.0      | 0.275625             | 0.275625             | 100.0      |
        | NULL       | 0.010000000000000002 | 0.010000000000000002 | 100.0      |
        | 1.0        | NULL                 | 418.2025             | 900.0      |
        | 16.0       | 0.7921               | NULL                 | 900.0      |
        | 2500.0     | 1.0                  | 1.0                  | 2500.0     |
        | 36.0       | 2.25                 | 2.25                 | 2500.0     |
        | 4900.0     | 56.25                | 56.25                | NULL       |
        | 1.0        | 104.03999999999999   | 104.03999999999999   | 1.0        |
        | 8100.0     | 6.6564000000000005   | 6.6564000000000005   | 0.0        |
        | 100.0      | 33.64                | 33.64                | 8100.0     |
        +------------+----------------------+----------------------+------------+
        ```
        

## RADIANS

-   Syntax
    
    ```
    double radians(<number>)
    ```
    
-   Description
    
    Converts a value from degrees to radians. This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    number: Required. A value of the DOUBLE, BIGINT, INT, SMALLINT, TINYINT, FLOAT, DECIMAL, or STRING type.
    
-   Return value
    
    A value of the DOUBLE type is returned. If the value of number is NULL, NULL is returned.
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 1.5707963267948966.
        select radians(90);
        --The return value is 0.0.
        select radians(0);
        --The return value is NULL.
        select radians(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command converts all columns to radians.
        
        ```
        --Enable new data types of MaxCompute V2.0. You must run this command together with the SQL statement.
        set odps.sql.type.system.odps2=true;
        select radians(int_data) as int_new, radians(bigint_data) as bigint_new, radians(double_data) as double_new, radians(decimal_data) as decimal_new, radians(float_data) as float_new, radians(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +-----------------------+-----------------------+------------------------+------------------------+------------------------+-----------------------+
        | int_new               | bigint_new            | double_new             | decimal_new            | float_new              | string_new            |
        +-----------------------+-----------------------+------------------------+------------------------+------------------------+-----------------------+
        | NULL                  | -0.17453292519943295  | 0.00916297857297023    | 0.00916297857297023    | 0.009162978156851308   | 0.17453292519943295   |
        | -0.3490658503988659   | NULL                  | -0.0017453292519943296 | -0.0017453292519943296 | -0.0017453292780017621 | -0.17453292519943295  |
        | 0.0                   | -0.017453292519943295 | NULL                   | 0.3569198320328404     | -0.017453292519943295  | 0.5235987755982988    |
        | -0.6981317007977318   | 0.06981317007977318   | 0.015533430342749534   | NULL                   | 0.015533430093078181   | -0.5235987755982988   |
        | 0.08726646259971647   | -0.8726646259971648   | -0.017453292519943295  | -0.017453292519943295  | NULL                   | 0.8726646259971648    |
        | -1.0471975511965976   | 0.10471975511965977   | 0.02617993877991494    | 0.02617993877991494    | 0.02617993877991494    | -0.8726646259971648   |
        | -0.017453292519943295 | -1.2217304763960306   | -0.1308996938995747    | -0.1308996938995747    | -0.1308996938995747    | NULL                  |
        | -1.3962634015954636   | 0.017453292519943295  | -0.17802358370342158   | -0.17802358370342158   | -0.17802358037447025   | -0.017453292519943295 |
        | 0.15707963267948966   | -1.5707963267948966   | 0.045029494701453704   | 0.045029494701453704   | 0.04502949336987316    | 0.0                   |
        | -1.7453292519943295   | 0.17453292519943295   | -0.10122909661567112   | -0.10122909661567112   | -0.10122909994462247   | -1.5707963267948966   |
        +-----------------------+-----------------------+------------------------+------------------------+------------------------+-----------------------+
        ```
        

## RAND

-   Syntax
    
    ```
    double rand(bigint <seed>)
    ```
    
-   Description
    
    Returns a random number of the DOUBLE type in the range of 0 to 1.
    
-   Parameters
    
    seed: Optional. A value of the BIGINT type. The seed determines the initial value for a random number sequence.
    
    **Note**
    
    You can use seed to specify a random number sequence. After seed is specified, the return value of this function is fixed. If the execution environment and the value of seed remain the same, the return value is the same. To obtain a different result, you must change the value of seed.
    
    You can add the following parameter before an SQL statement. The default value is `false`.
    
    ```
    set odps.sql.executionengine.enable.rand.time.seed=true|false;
    ```
    
    -   If this parameter is set to `false`, the RAND function uses the current instance ID as the initial **seed** for the random number to ensure function idempotence.
        
    -   If this parameter is set to `true`, the RAND function uses the current system time as the initial **seed** for the random number. However, the RAND function is no longer idempotent and cannot be used as a shuffle key. This causes different results when you run the function again.
        
-   Return value
    
    A value of the DOUBLE type is returned.
    
-   Example
    
    ```
    --The return value is 4.7147460303803655E-4.
    select rand();
    --The return value is 0.7308781907032909.
    select rand(1);
    ```
    

## ROUND

-   Syntax
    
    ```
    double|decimal round(<number>[, bigint <decimal_places>])
    ```
    
-   Description
    
    Rounds a value to a specified decimal place.
    
-   Parameters
    
    -   number: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
        
    -   decimal\_places: Optional. A constant of the BIGINT type. This parameter specifies the number of decimal places to which you want to round the value. If you omit this parameter, the value is rounded to the nearest integer. The default value is 0.
        
        **Note**
        
        The value of decimal\_places can be a negative number. If the value is negative, the function rounds the digits to the left of the decimal point and does not retain the decimal part. If the value of decimal\_places is greater than the length of the integer part, 0 is returned.
        
-   Return value
    
    A value of the DOUBLE or DECIMAL type is returned. The following rules apply:
    
    -   If number is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the data type of decimal\_places is not BIGINT, an error is returned.
        
    -   If the value of number or decimal\_places is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 125.0.
        select round(125.315);
        --The return value is 125.3.
        select round(125.315, 1);
        --The return value is 125.32.
        select round(125.315, 2);
        --The return value is 125.315.
        select round(125.315, 3);
        --The return value is -125.32.
        select round(-125.315, 2);
        --The return value is 100.0.
        select round(123.345, -2);
        --The return value is NULL.
        select round(null);
        --The return value is 123.345.
        select round(123.345, 4);
        --The return value is 0.0.
        select round(123.345, -4);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command rounds the values in columns to a specified decimal place.
        
        ```
        select round(bigint_data, 1) as bigint_new, round(double_data, 2) as double_new, round(decimal_data, 1) as decimal_new, round(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+------------+-------------+------------+
        | bigint_new | double_new | decimal_new | string_new |
        +------------+------------+-------------+------------+
        | -10.0      | 0.53       | 0.5         | 10.0       |
        | NULL       | -0.1       | -0.1        | -10.0      |
        | -1.0       | NULL       | 20.5        | 30.0       |
        | 4.0        | 0.89       | NULL        | -30.0      |
        | -50.0      | -1.0       | -1          | 50.0       |
        | 6.0        | 1.5        | 1.5         | -50.0      |
        | -70.0      | -7.5       | -7.5        | NULL       |
        | 1.0        | -10.2      | -10.2       | -1.0       |
        | -90.0      | 2.58       | 2.6         | 0.0        |
        | 10.0       | -5.8       | -5.8        | -90.0      |
        +------------+------------+-------------+------------+
        ```
        

## SHIFTLEFT

-   Syntax
    
    ```
    int shiftleft(tinyint|smallint|int <number1>, int <number2>)
    bigint shiftleft(bigint <number1>, int <number2>)
    ```
    
-   Description
    
    Performs a left shift (<<). This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    -   number1: Required. A value of the TINYINT, SMALLINT, INT, or BIGINT type.
        
    -   number2: Required. A value of the INT type.
        
-   Return value
    
    A value of the INT or BIGINT type is returned. The following rules apply:
    
    -   If the data type of number1 is not TINYINT, SMALLINT, INT, or BIGINT, an error is returned.
        
    -   If the data type of number2 is not INT, an error is returned.
        
    -   If the value of number1 or number2 is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 4. The binary value of 1 is shifted to the left by two bits (1<<2, 0001 is shifted to the left by two bits to become 0100).
        select shiftleft(1,2); 
        --The return value is 32. The binary value of 4 is shifted to the left by three bits (4<<3, 0100 is shifted to the left by three bits to become 100000).
        select shiftleft(4,3);
        --The return value is NULL.
        select shiftleft(null,2);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command performs a left shift on the int\_data and bigint\_data columns.
        
        ```
        --Enable new data types of MaxCompute V2.0. You must run this command together with the SQL statement.
        set odps.sql.type.system.odps2=true;
        select shiftleft(int_data, 1) as int_new, shiftleft(bigint_data, 1) as bigint_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +---------+------------+
        | int_new | bigint_new |
        +---------+------------+
        | NULL    | -20        |
        | -40     | NULL       |
        | 0       | -2         |
        | -80     | 8          |
        | 10      | -100       |
        | -120    | 12         |
        | -2      | -140       |
        | -160    | 2          |
        | 18      | -180       |
        | -200    | 20         |
        +---------+------------+
        ```
        

## SHIFTRIGHT

-   Syntax
    
    ```
    int shiftright(tinyint|smallint|int <number1>, int <number2>)
    bigint shiftright(bigint <number1>, int <number2>)
    ```
    
-   Description
    
    Performs a right shift (>>). This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    -   number1: Required. A value of the TINYINT, SMALLINT, INT, or BIGINT type.
        
    -   number2: Required. A value of the INT type.
        
-   Return value
    
    A value of the INT or BIGINT type is returned. The following rules apply:
    
    -   If the data type of number1 is not TINYINT, SMALLINT, INT, or BIGINT, an error is returned.
        
    -   If the data type of number2 is not INT, an error is returned.
        
    -   If the value of number1 or number2 is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 1. The binary value of 4 is shifted to the right by two bits (4>>2, 0100 is shifted to the right by two bits to become 0001).
        select shiftright(4,2);
        --The return value is 4. The binary value of 32 is shifted to the right by three bits (32>>3, 100000 is shifted to the right by three bits to become 0100).
        select shiftright(32,3);
        --The return value is NULL.
        select shiftright(null,3);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command performs a right shift on the int\_data and bigint\_data columns.
        
        ```
        --Enable new data types of MaxCompute V2.0. You must run this command together with the SQL statement.
        set odps.sql.type.system.odps2=true;
        select shiftright(int_data, 1) as int_new, shiftright(bigint_data, 1) as bigint_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +---------+------------+
        | int_new | bigint_new |
        +---------+------------+
        | NULL    | -5         |
        | -10     | NULL       |
        | 0       | -1         |
        | -20     | 2          |
        | 2       | -25        |
        | -30     | 3          |
        | -1      | -35        |
        | -40     | 0          |
        | 4       | -45        |
        | -50     | 5          |
        +---------+------------+
        ```
        

## SHIFTRIGHTUNSIGNED

-   Syntax
    
    ```
    int shiftrightunsigned(tinyint|smallint|int <number1>, int <number2>)
    bigint shiftrightunsigned(bigint <number1>, int <number2>)
    ```
    
-   Description
    
    Performs an unsigned right shift (>>>). This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    -   number1: Required. An integer of the TINYINT, SMALLINT, INT, or BIGINT type.
        
    -   number2: Required. An integer of the INT type.
        
-   Return value
    
    A value of the INT or BIGINT type is returned. The following rules apply:
    
    -   If the data type of number1 is not TINYINT, SMALLINT, INT, or BIGINT, an error is returned.
        
    -   If the data type of number2 is not INT, an error is returned.
        
    -   If the value of number1 or number2 is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 2. The binary value of 8 is shifted to the right by two bits without considering the sign (8>>>2, 1000 is shifted to the right by two bits to become 0010).
        select shiftrightunsigned(8,2);
        --The return value is 1073741820. The binary value of -14 is shifted to the right by two bits (-14>>>2, 11111111 11111111 11111111 11110010 is shifted to the right by two bits to become 00111111 11111111 11111111 11111100).
        select shiftrightunsigned(-14,2);
        --The return value is NULL.
        select shiftrightunsigned(-14,null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command returns the unsigned right shift value of the int\_data and bigint\_data columns.
        
        ```
        --Enable new data types of MaxCompute V2.0. You must run this command together with the SQL statement.
        set odps.sql.type.system.odps2=true;
        select shiftrightunsigned(int_data, 1) as int_new, shiftrightunsigned(bigint_data, 1) as bigint_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+---------------------+
        | int_new    | bigint_new          |
        +------------+---------------------+
        | NULL       | 9223372036854775803 |
        | 2147483638 | NULL                |
        | 0          | 9223372036854775807 |
        | 2147483628 | 2                   |
        | 2          | 9223372036854775783 |
        | 2147483618 | 3                   |
        | 2147483647 | 9223372036854775773 |
        | 2147483608 | 0                   |
        | 4          | 9223372036854775763 |
        | 2147483598 | 5                   |
        +------------+---------------------+
        ```
        

## SIGN

-   Syntax
    
    ```
    double sign(<number>)
    ```
    
-   Description
    
    Obtains the sign of an input parameter. This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    number: Required. A value of the DOUBLE, BIGINT, INT, SMALLINT, TINYINT, FLOAT, DECIMAL, or STRING type.
    
-   Return value
    
    A value of the DOUBLE type is returned. The following rules apply:
    
    -   If the value of number is a positive number, 1.0 is returned.
        
    -   If the value of number is a negative number, -1.0 is returned.
        
    -   If the value of number is 0, 0.0 is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is -1.0.
        select sign(-2.5);
        --The return value is 1.0.
        select sign(2.5);
        --The return value is 0.0.
        select sign(0);
        --The return value is NULL.
        select sign(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command obtains the sign of all columns.
        
        ```
        --Enable new data types of MaxCompute V2.0. You must run this command together with the SQL statement.
        set odps.sql.type.system.odps2=true;
        select sign(int_data) as int_new, sign(bigint_data) as bigint_new, sign(double_data) as double_new, sign(decimal_data) as decimal_new, sign(float_data) as float_new, sign(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+------------+------------+-------------+------------+------------+
        | int_new    | bigint_new | double_new | decimal_new | float_new  | string_new |
        +------------+------------+------------+-------------+------------+------------+
        | NULL       | -1.0       | 1.0        | 1           | 1.0        | 1.0        |
        | -1.0       | NULL       | -1.0       | -1          | -1.0       | -1.0       |
        | 0.0        | -1.0       | NULL       | 1           | -1.0       | 1.0        |
        | -1.0       | 1.0        | 1.0        | NULL        | 1.0        | -1.0       |
        | 1.0        | -1.0       | -1.0       | -1          | NULL       | 1.0        |
        | -1.0       | 1.0        | 1.0        | 1           | 1.0        | -1.0       |
        | -1.0       | -1.0       | -1.0       | -1          | -1.0       | NULL       |
        | -1.0       | 1.0        | -1.0       | -1          | -1.0       | -1.0       |
        | 1.0        | -1.0       | 1.0        | 1           | 1.0        | 0.0        |
        | -1.0       | 1.0        | -1.0       | -1          | -1.0       | -1.0       |
        +------------+------------+------------+-------------+------------+------------+
        ```
        

## SIN

-   Syntax
    
    ```
    double|decimal sin(<number>)
    ```
    
-   Description
    
    Calculates the sine of number. The input value is in radians.
    
-   Parameters
    
    number: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    A value of the DOUBLE or DECIMAL type is returned. The following rules apply:
    
    -   If number is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is -0.3048106211022167.
        select sin(60);
        --The return value is NULL.
        select sin(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the sine of columns.
        
        ```
        select sin(bigint_data) as bigint_new, sin(double_data) as double_new, sin(decimal_data) as decimal_new, sin(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +----------------------+----------------------+----------------------+----------------------+
        | bigint_new           | double_new           | decimal_new          | string_new           |
        +----------------------+----------------------+----------------------+----------------------+
        | 0.5440211108893698   | 0.5012130046737979   | 0.5012130046737979   | -0.5440211108893698  |
        | NULL                 | -0.09983341664682815 | -0.09983341664682815 | 0.5440211108893698   |
        | -0.8414709848078965  | NULL                 | 0.9995605376022045   | -0.9880316240928618  |
        | -0.7568024953079282  | 0.7770717475268238   | NULL                 | 0.9880316240928618   |
        | 0.26237485370392877  | -0.8414709848078965  | -0.8414709848078965  | -0.26237485370392877 |
        | -0.27941549819892586 | 0.9974949866040544   | 0.9974949866040544   | 0.26237485370392877  |
        | -0.7738906815578891  | -0.9379999767747389  | -0.9379999767747389  | NULL                 |
        | 0.8414709848078965   | 0.6998746875935423   | 0.6998746875935423   | -0.8414709848078965  |
        | -0.8939966636005579  | 0.5325349075556212   | 0.5325349075556212   | 0.0                  |
        | -0.5440211108893698  | 0.46460217941375737  | 0.46460217941375737  | -0.8939966636005579  |
        +----------------------+----------------------+----------------------+----------------------+
        ```
        

## SINH

-   Syntax
    
    ```
    double|decimal sinh(<number>)
    ```
    
-   Description
    
    Calculates the hyperbolic sine of number.
    
-   Parameters
    
    number: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    A value of the DOUBLE or DECIMAL type is returned. The following rules apply:
    
    -   If number is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 5.343237290762231E12.
        select sinh(30);
        --The return value is NULL.
        select sinh(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the hyperbolic sine of columns.
        
        ```
        select sinh(bigint_data) as bigint_new, sinh(double_data) as double_new, sinh(decimal_data) as decimal_new, sinh(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------------------+----------------------+----------------------+-----------------------+
        | bigint_new             | double_new           | decimal_new          | string_new            |
        +------------------------+----------------------+----------------------+-----------------------+
        | -11013.232874703393    | 0.5494517420061382   | 0.5494517420061382   | 11013.232874703393    |
        | NULL                   | -0.10016675001984403 | -0.10016675001984403 | -11013.232874703393   |
        | -1.1752011936438014    | NULL                 | 380445243.96844625   | 5343237290762.231     |
        | 27.28991719712775      | 1.0122369492687646   | NULL                 | -5343237290762.231    |
        | -2.592352764293536e21  | -1.1752011936438014  | -1.1752011936438014  | 2.592352764293536e21  |
        | 201.71315737027922     | 2.1292794550948173   | 2.1292794550948173   | -2.592352764293536e21 |
        | -1.2577193354595834e30 | -904.0209306858466   | -904.0209306858466   | NULL                  |
        | 1.1752011936438014     | -13451.593018563612  | -13451.593018563612  | -1.1752011936438014   |
        | -6.102016471589204e38  | 6.560682077817757    | 6.560682077817757    | 0.0                   |
        | 11013.232874703393     | -165.1482661774516   | -165.1482661774516   | -6.102016471589204e38 |
        +------------------------+----------------------+----------------------+-----------------------+
        ```
        

## SQRT

-   Syntax
    
    ```
    double|decimal sqrt(<number>)
    ```
    
-   Description
    
    Calculates the square root of number.
    
-   Parameters
    
    number: Required. A value of the DOUBLE or DECIMAL type. The value must be greater than 0. If the value is less than 0, NULL is returned. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    A value of the DOUBLE or DECIMAL type is returned. The following rules apply:
    
    -   If number is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 2.0.
        select sqrt(4);
        --The return value is NULL.
        select sqrt(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the square root of columns.
        
        ```
        select sqrt(bigint_data) as bigint_new, sqrt(double_data) as double_new, sqrt(decimal_data) as decimal_new, sqrt(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +--------------------+--------------------+-------------------+--------------------+
        | bigint_new         | double_new         | decimal_new       | string_new         |
        +--------------------+--------------------+-------------------+--------------------+
        | NULL               | 0.724568837309472  | 0.724568837309472 | 3.1622776601683795 |
        | NULL               | NULL               | NULL              | NULL               |
        | NULL               | NULL               | 4.522167621838006 | 5.477225575051661  |
        | 2.0                | 0.9433981132056604 | NULL              | NULL               |
        | NULL               | NULL               | NULL              | 7.0710678118654755 |
        | 2.449489742783178  | 1.224744871391589  | 1.224744871391589 | NULL               |
        | NULL               | NULL               | NULL              | NULL               |
        | 1.0                | NULL               | NULL              | NULL               |
        | NULL               | 1.606237840420901  | 1.606237840420901 | 0.0                |
        | 3.1622776601683795 | NULL               | NULL              | NULL               |
        +--------------------+--------------------+-------------------+--------------------+
        ```
        

## TAN

-   Syntax
    
    ```
    double|decimal tan(<number>)
    ```
    
-   Description
    
    Calculates the tangent of number. The input value is in radians.
    
-   Parameters
    
    number: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    A value of the DOUBLE or DECIMAL type is returned. The following rules apply:
    
    -   If number is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is -6.405331196646276.
        select tan(30);
        --The return value is NULL.
        select tan(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the tangent of columns.
        
        ```
        select tan(bigint_data) as bigint_new, tan(double_data) as double_new, tan(decimal_data) as decimal_new, tan(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +----------------------+----------------------+----------------------+----------------------+
        | bigint_new           | double_new           | decimal_new          | string_new           |
        +----------------------+----------------------+----------------------+----------------------+
        | -0.6483608274590866  | 0.5792200822893652   | 0.5792200822893652   | 0.6483608274590866   |
        | NULL                 | -0.10033467208545055 | -0.10033467208545055 | -0.6483608274590866  |
        | -1.5574077246549023  | NULL                 | -33.71948732190433   | -6.405331196646276   |
        | 1.1578212823495775   | 1.2345994590490046   | NULL                 | 6.405331196646276    |
        | 0.27190061199763077  | -1.5574077246549023  | -1.5574077246549023  | -0.27190061199763077 |
        | -0.29100619138474915 | 14.101419947171719   | 14.101419947171719   | 0.27190061199763077  |
        | -1.2219599181369434  | -2.706013866772691   | -2.706013866772691   | NULL                 |
        | 1.5574077246549023   | -0.979852083895097   | -0.979852083895097   | -1.5574077246549023  |
        | 1.995200412208242    | -0.6291704256385503  | -0.6291704256385503  | 0.0                  |
        | 0.6483608274590866   | 0.5246662219468002   | 0.5246662219468002   | 1.995200412208242    |
        +----------------------+----------------------+----------------------+----------------------+
        ```
        

## TANH

-   Syntax
    
    ```
    double|decimal tanh(<number>)
    ```
    
-   Description
    
    Calculates the hyperbolic tangent of number.
    
-   Parameters
    
    number: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
    
-   Return value
    
    A value of the DOUBLE or DECIMAL type is returned. The following rules apply:
    
    -   If number is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 1.0.
        select tanh(30);
        --The return value is NULL.
        select tanh(null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command calculates the hyperbolic tangent of columns.
        
        ```
        select tanh(bigint_data) as bigint_new, tanh(double_data) as double_new, tanh(decimal_data) as decimal_new, tanh(string_data) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +---------------------+----------------------+----------------------+---------------------+
        | bigint_new          | double_new           | decimal_new          | string_new          |
        +---------------------+----------------------+----------------------+---------------------+
        | -0.9999999958776927 | 0.48154979836430806  | 0.48154979836430806  | 0.9999999958776927  |
        | NULL                | -0.09966799462495582 | -0.09966799462495582 | -0.9999999958776927 |
        | -0.7615941559557649 | NULL                 | 1.0                  | 1.0                 |
        | 0.999329299739067   | 0.7113937318189625   | NULL                 | -1.0                |
        | -1.0                | -0.7615941559557649  | -0.7615941559557649  | 1.0                 |
        | 0.9999877116507956  | 0.9051482536448664   | 0.9051482536448664   | -1.0                |
        | -1.0                | -0.9999993881955461  | -0.9999993881955461  | NULL                |
        | 0.7615941559557649  | -0.9999999972367348  | -0.9999999972367348  | -0.7615941559557649 |
        | -1.0                | 0.9885821584459533   | 0.9885821584459533   | 0.0                 |
        | 0.9999999958776927  | -0.9999816679925603  | -0.9999816679925603  | -1.0                |
        +---------------------+----------------------+----------------------+---------------------+
        ```
        

## TRUNC

-   Syntax
    
    ```
    double|decimal trunc(<number>[, bigint <decimal_places>])
    ```
    
-   Description
    
    Truncates the input value number to a specified decimal place.
    
    **Note**
    
    In Hive-compatible mode, this function is used for date conversion instead of being a mathematical function. For more information about the corresponding date function, see [DATETRUNC](/help/en/maxcompute/user-guide/date-functions/#section-zbr-d5l-vdb). You can set the data type version for your MaxCompute project as needed. For more information about data type versions, see [Data type versions](/help/en/maxcompute/user-guide/data-type-editions#concept-jhp-4bb-5db).
    
-   Parameters
    
    -   number: Required. A value of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted to a value of the DOUBLE type for calculation.
        
    -   decimal\_places: Optional. A constant of the BIGINT type. This parameter specifies the number of decimal places to which you want to truncate the value. If you omit this parameter, the value is truncated to the nearest integer. The value of decimal\_places can be a negative number. If the value is a negative number, the function truncates from the decimal point to the left and does not retain the decimal part. If the value of decimal\_places is greater than the length of the integer part, 0 is returned.
        
-   Return value
    
    A value of the DOUBLE or DECIMAL type is returned. The following rules apply:
    
    -   If number is of the DOUBLE or DECIMAL type, a value of the corresponding type is returned.
        
    -   If number is of the STRING or BIGINT type, a value of the DOUBLE type is returned.
        
    -   If the data type of decimal\_places is not BIGINT, an error is returned.
        
    -   If the value of number or decimal\_places is NULL, NULL is returned.
        
    
    **Note**
    
    -   If a value of the DOUBLE type is returned, the result may not be as expected. For example, `trunc(125.815,1)`. This display issue for the DOUBLE type exists in all systems.
        
    -   The truncated part is padded with zeros.
        
    
-   Examples
    
    -   Static data examples
        
        ```
        --The return value is 125.0.
        select trunc(125.815,0);
        --The return value is 125.80000000000001.
        select trunc(125.815,1);
        --The return value is 125.81.
        select trunc(125.815,2);
        --The return value is 125.815.
        select trunc(125.815,3);
        --The return value is -125.81.
        select trunc(-125.815,2);
        --The return value is 120.0.
        select trunc(125.815,-1);
        --The return value is 100.0.
        select trunc(125.815,-2);
        --The return value is 0.0.
        select trunc(125.815,-3);
        --The return value is 123.345.
        select trunc(123.345,4);
        --The return value is 0.0.
        select trunc(123.345,-4);
        --The return value is NULL.
        select trunc(123.345,null);
        ```
        
    -   Table data examples
        
        Based on the [sample data](#section-iqm-72q-ifp), the following command truncates the values in columns to a specified decimal place.
        
        ```
        select trunc(bigint_data, 1) as bigint_new, trunc(double_data,1) as double_new, trunc(decimal_data, 1) as decimal_new, trunc(string_data, 1) as string_new from mf_math_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+---------------------+-------------+------------+
        | bigint_new | double_new          | decimal_new | string_new |
        +------------+---------------------+-------------+------------+
        | -10.0      | 0.5                 | 0.5         | 10.0       |
        | NULL       | -0.1                | -0.1        | -10.0      |
        | -1.0       | NULL                | 20.4        | 30.0       |
        | 4.0        | 0.8                 | NULL        | -30.0      |
        | -50.0      | -1.0                | -1          | 50.0       |
        | 6.0        | 1.5                 | 1.5         | -50.0      |
        | -70.0      | -7.5                | -7.5        | NULL       |
        | 1.0        | -10.200000000000001 | -10.2       | -1.0       |
        | -90.0      | 2.5                 | 2.5         | 0.0        |
        | 10.0       | -5.800000000000001  | -5.8        | -90.0      |
        +------------+---------------------+-------------+------------+
        ```
        

## UNHEX

-   Syntax
    
    ```
    binary unhex(string <number>)
    ```
    
-   Description
    
    Returns the string represented by a hexadecimal string. This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    number: Required. A hexadecimal string.
    
-   Return value
    
    A value of the BINARY type is returned. The following rules apply:
    
    -   If the value of number is 0, an error is returned.
        
    -   If the value of number is NULL, NULL is returned.
        
    
-   Example
    
    ```
    --The return value is abc.
    select unhex('616263');
    --The return value is abc.
    select unhex(616263);
    --The return value is NULL.
    select unhex(null);
    ```
    

## WIDTH\_BUCKET

-   Syntax
    
    ```
    width_bucket(numeric <expr>, numeric <min_value>, numeric <max_value>, int <num_buckets>)
    ```
    
-   Description
    
    This function constructs a specified number of equal-sized groups based on the specified minimum value, maximum value, and number of groups. It returns the group number to which the value of a specified field belongs. The supported data types are BIGINT, INT, FLOAT, DOUBLE, DECIMAL, and DECIMAL(precision, scale) of MaxCompute V2.0. For more information, see [Data type editions in MaxCompute V2.0](/help/en/maxcompute/user-guide/maxcompute-v2-0-data-type-edition#concept-2454988). This function is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    -   expr: Required. The field whose group number you want to determine.
        
    -   min\_value: Required. The minimum value of the group range.
        
    -   max\_value: Required. The maximum value of the group range. The maximum value must be greater than the minimum value.
        
    -   num\_buckets: Required. The number of groups. The value must be greater than 0.
        
-   Return value
    
    A value of the BIGINT type is returned. The value ranges from 0 to the specified number of groups plus 1. The value is returned based on the following rules:
    
    -   If the value of expr is less than the value of min\_value, 0 is returned.
        
    -   If the value of expr is greater than the value of max\_value, the specified number of groups plus 1 is returned.
        
    -   If the value of expr is NULL, NULL is returned. In other cases, the group number to which the field value belongs is returned. The group number is calculated using the following formula: `floor( num_buckets * (expr - min_value)/(max_value - min_value) + 1)`.
        
    -   If the value of min\_value, max\_value, or num\_buckets is NULL, NULL is returned.
        
    
-   Examples
    
    -   Example 1: None of the input parameters are NULL. Sample command:
        
        ```
        select key,value,width_bucket(value,100,500,5) as value_group
        from values 
            (1,99),
            (2,100),
            (3,199),
            (4,200),
            (5,499),
            (6,500),
            (7,501),
            (8,NULL)
        as t(key,value);
        ```
        
        The following result is returned.
        
        ```
        +-------+--------+-------------+
        | key   | value  | value_group |
        +-------+--------+-------------+
        | 1     | 99     | 0           |
        | 2     | 100    | 1           |
        | 3     | 199    | 2           |
        | 4     | 200    | 2           |
        | 5     | 499    | 5           |
        | 6     | 500    | 6           |
        | 7     | 501    | 6           |
        | 8     | NULL   | NULL        |
        +-------+--------+-------------+
        ```
        
    -   Example 2: One of the input parameters is NULL. Sample command:
        
        ```
        select key,value,width_bucket(value,100,500,null) as value_group
        from values
            (1,99),
            (2,100),
            (3,199),
            (4,200),
            (5,499),
            (6,500),
            (7,501),
            (8,NULL)
        as t(key,value);
        ```
        
        The following result is returned.
        
        ```
        +------+-------+-------------+
        | key  | value | value_group |
        +------+-------+-------------+
        | 1    | 99    | NULL        |
        | 2    | 100   | NULL        |
        | 3    | 199   | NULL        |
        | 4    | 200   | NULL        |
        | 5    | 499   | NULL        |
        | 6    | 500   | NULL        |
        | 7    | 501   | NULL        |
        | 8    | NULL  | NULL        |
        +------+-------+-------------+
        ```
        

## **References**

-   If the preceding built-in functions do not meet your requirements, you can use user-defined functions (UDFs) in MaxCompute. For more information about UDFs, see [MaxCompute UDF overview](/help/en/maxcompute/user-guide/overview-22).
    
-   For more information about FAQs for MaxCompute SQL, see:
    
    -   [FAQ about DDL operations](/help/en/maxcompute/user-guide/faq-about-ddl-operations)
        
    -   [FAQ about DML operations](/help/en/maxcompute/user-guide/faq-about-dml-operations)
        
    -   [FAQ about DQL operations](/help/en/maxcompute/user-guide/faq-about-dql-operations)
        
    -   [Other SQL FAQs](/help/en/maxcompute/user-guide/other-faq-about-sql)
        
-   For more information about common error codes and FAQs for MaxCompute built-in functions, see:
    
    -   [Common error codes for built-in functions](/help/en/maxcompute/user-guide/common-errors-for-built-in-functions)
        
    -   [FAQs for built-in functions](/help/en/maxcompute/user-guide/faq-about-built-in-functions)
