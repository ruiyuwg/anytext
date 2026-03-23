This topic describes the definition, scenarios, and supported data types of the MaxCompute V2.0 data type edition, and differences between this edition and other data type editions.

## Definition

If the MaxCompute V2.0 data type edition is used in your project, the data types are defined based on the following code:

```
setproject odps.sql.type.system.odps2=true; -- Enable the MaxCompute V2.0 data type edition. 
setproject odps.sql.decimal.odps2=true; -- Enable the DECIMAL data type in MaxCompute V2.0. 
setproject odps.sql.hive.compatible=false; -- Disable the Hive-compatible data type edition.
```

## Scenarios

The MaxCompute V2.0 data type edition is suitable for scenarios in which your project does not contain data generated before April 2020 and depends on components that support the MaxCompute V2.0 data type edition.

## Basic data types

**Data type**

**Constant example**

**Description**

TINYINT

1Y and -127Y

The 8-bit signed integer type.

Valid values: -128 to 127.

SMALLINT

32767S and -100S

The 16-bit signed integer type.

Valid values: -32768 to 32767.

INT

1000 and -15645787

The 32-bit signed integer type.

Valid values: -231 to 231 -1.

BIGINT

100000000000 L and -1L

The 64-bit signed integer type.

Valid values: -263 + 1 to 263 -1.

BINARY

-   unhex('FA34E10293CB42848573A4E39937F479')
    
-   X'616263'
    

A binary number. The maximum length is 8 MB.

**Note**

-   `num` in `X'num [...]'` is a hexadecimal value, which can be `0 to 9` or `A to F`. For example, `X'616263'` represents `abc` because `a` is `0x61`, `b` is `0x62`, and `c` is `0x63` in ASCII. `X'616263'` is semantically equivalent to `unhex('616263')`.
    
-   If the length of the string is not an even number, the system adds `0` in front of the string. For example, `X'616'` is equivalent to `X'0616'`.
    
-   You must enclose the string in single quotation marks (') instead of double quotation marks ("). For example, `X"616263"` is not interpreted as a constant of the BINARY type.
    

FLOAT

3.14F and cast(3.14159261E+7 as float)

The 32-bit binary floating point type.

**Note**

A loss of precision occurs when data of the FLOAT type is calculated due to the computer storage and internal computing logic. In scenarios where high precision is required, you can convert data of the FLOAT type into data of the DECIMAL type.

DOUBLE

3.14D and 3.14159261E+7

The 64-bit binary floating point type.

**Note**

A loss of precision occurs when data of the DOUBLE type is calculated due to the computer storage and internal computing logic. In scenarios where high precision is required, you can convert data of the DOUBLE type into data of the DECIMAL type.

DECIMAL(precision,scale)

3.5BD and 99999999999.9999999BD

The precise numeric type based on the decimal system. The default expression of this data type is `decimal(38,18)`. You can specify the precision and scale values.

-   precision: indicates the maximum number of digits in a value. Valid values: `1 to 38`.
    
-   scale: indicates the number of digits to the right of the decimal point in a value. Valid values: `0 to 18`.
    
    If a higher scale is needed, you can run the `set odps.sql.decimal2.extended.scale.enable=true;` command to extend the range of scale values. After you set this flag parameter to true, the range of scale values becomes 0 to 38.
    

**Note**

-   DECIMAL of the old and new editions cannot exist in the same table.
    
-   The Hive-compatible data type edition is enabled by running the `setproject odps.sql.hive.compatible=true;` command. In this case, if the number of digits to the right of the decimal point in a value of the `Decimal(precision,scale)` type exceeds the value of the scale parameter during Tunnel-based data uploads or SQL operations, the value is rounded. If the integer part exceeds the limit, no error is reported, but the input data becomes NULL values.
    
-   If the `odps.sql.decimal.tostring.trimzero` parameter is set to `true`, trailing zeros after the decimal point are removed. If this parameter is set to `false`, trailing zeros after the decimal point are retained. The default value is `true`. This parameter takes effect only when data is read from a table. This parameter does not take effect on static values.
    

VARCHAR(n)

No default value

The variable-length character type, in which n specifies the length.

Valid values: 1 to 65535.

CHAR(n)

No default value

The fixed-length character type, in which n specifies the length. The maximum value is 255. **If the length does not reach the specified value, extra spaces are automatically filled but are not involved in the comparison.**

STRING

"abc", 'bcd', "alibaba", and 'inc'

The string type. The maximum length is 8 MB.

DATE

DATE'2017-11-11'

The date type in the `yyyy-mm-dd` format.

Valid values: 0001-01-01 to 9999-12-31.

DATETIME

DATETIME'2017-11-11 00:00:00'

The DATETIME type.

Valid values: 0001-01-01 00:00:00.000 to 9999-12-31 23:59:59.999, accurate to the millisecond.

TIMESTAMP

TIMESTAMP'2017-11-11 00:00:00.123456789'

The TIMESTAMP type.

Valid values: 0001-01-01 00:00:00.000000000 to 9999-12-31 23:59:59.999999999, accurate to the nanosecond.

**Note**

The timestamp is independent of time zones. In any time zone, the timestamp stores a date offset value from Epoch (UTC 1970-01-01 00:00:00). You can use built-in functions to perform time zone-related computing on the data of the TIMESTAMP type. For example, you can use `cast(<a timestamp> as string)` to convert data of the TIMESTAMP type into the STRING type based on the current time zone.

TIMESTAMP\_NTZ

TIMESTAMP\_NTZ '2017-11-11 00:00:00.123456789'

TIMESTAMP data type, which is independent from time zones.

Valid values: 0000-01-01 00:00:00.000000000 to 9999-12-31 23:59:59.999999999.

BOOLEAN

True and False

The BOOLEAN type.

Valid values: True and False.

INTERVAL

-   INTERVAL '2021' YEAR
    
-   INTERVAL '1' DAY
    
-   INTERVAL '2000-1' YEAR TO MONTH
    
-   INTERVAL '-1 23:59:59.999' DAY TO SECOND
    

The INTERVAL type represents a time period and is used to express the interval between two dates or times. It includes two types: INTERVAL\_YEAR\_MONTH and INTERVAL\_DAY\_TIME.

When you use the MaxCompute V2.0 data type edition, take note of the following points:

-   All the preceding data types support NULL values.
    
-   The INT keyword in an SQL statement refers to the 32-bit integer type.
    
    ```
    -- Convert a into a 32-bit integer. 
    CAST(a AS INT)
    ```
    
-   By default, an integer constant is processed as the INT type. For example, integer constant 1 in `SELECT 1 + a;` is processed as the INT type. If a constant exceeds the value range of the INT type but does not exceed the value range of the BIGINT type, the constant is processed as the BIGINT type. If the constant exceeds the value range of the BIGINT type, the constant is processed as the DOUBLE type.
    
-   Implicit conversions
    
    -   Some implicit conversions are disabled. If the data type is converted from STRING to BIGINT, from STRING to DATETIME, from DOUBLE to BIGINT, from DECIMAL to DOUBLE, or from DECIMAL to BIGINT, precision may be reduced, or errors may occur. You can use the CAST function to force the data type conversions.
        
    -   Constants of the VARCHAR type can be implicitly converted into the STRING type.
        
-   Tables, built-in functions, and user-defined functions (UDFs)
    
    -   Built-in functions that require the MaxCompute V2.0 data type edition can be run.
        
    -   The data types defined in UDFs are parsed and overloaded based on the MaxCompute V2.0 data type edition.
        
    -   The data type of a partition key column can be STRING, VARCHAR, CHAR, TINYINT, SMALLINT, INT, or BIGINT.
        
-   Constants of the STRING type support concatenation. Two or more strings are automatically concatenated into one string. For example, if you execute the `select 'abc' 'efg' 'ddt';`, the return value is `abcefgddt`.
    
-   If a constant is inserted into a field of the DECIMAL type, the expression of the constant must conform to the format in the constant definition. Example: `3.5BD` in the following sample code:
    
    ```
    INSERT INTO test_tb(a) VALUES (3.5BD)
    ```
    
-   Values of the DATETIME type do not include the millisecond component. You can add `-dfp` to Tunnel commands to specify the time format that is accurate to the millisecond. Example: `tunnel upload -dfp 'yyyy-MM-dd HH:mm:ss.SSS'`. For more information about Tunnel commands, see [Tunnel commands](/help/en/maxcompute/user-guide/tunnel-commands#concept-rkf-2wc-5db).
    

## Complex data types

**Data type**

**Custom method**

**Construction method**

ARRAY

-   `array<int>`
    
-   `array<struct<a:int, b:string>>`
    

-   `array(1, 2, 3)`
    
-   `array(struct(1, 2), struct(3, 4))`
    

MAP

-   `map<string, string>`
    
-   `map<smallint, array<string>>`
    

-   `map("k1", "v1","k2","v2")`
    
-   `map(1S, array("a", "b"), 2S, array('z','y'))`
    

STRUCT

-   `struct<x:int, y:int>`
    
-   `struct<field1:bigint, field2:array<int>, field3:map<int, int>>`
    

-   `named_struct('x', 1,'y',2)`
    
-   `named_struct('field1',100L,'field2', array(1, 2),'field3',map(1,100, 2, 200))`
    

JSON

`JSON`

`JSON '123'`

**Note**

-   Data of complex data types in MaxCompute can be nested, supporting up to 20 levels of nesting. For more information about the related built-in functions, see [ARRAY](/help/en/maxcompute/user-guide/complex-type-functions#section-zln-uwi-ar5), [MAP](/help/en/maxcompute/user-guide/complex-type-functions#section-1uq-s39-4zh), [STRUCT](/help/en/maxcompute/user-guide/complex-type-functions#section-5gq-p2j-h0f), or [JSON](/help/en/maxcompute/user-guide/maxcompute-json-type-usage-guide-trial-beta-version).
    
-   We recommend that the maximum size of data of complex data types in MaxCompute does not exceed 1 MB. Otherwise, out-of-memory (OOM) errors may occur during the computing process.
    

## Differences between the MaxCompute V2.0 data type edition and other data type editions

-   DML execution rules are different.
    
    -   The execution rules of LIMIT statements in SET operations are different.
        
        In this example, the `SELECT * FROM t1 UNION ALL SELECT * FROM t2 10;` statement is used.
        
        -   If the MaxCompute V1.0 data type edition is used, the statement is expressed as `SELECT * FROM t1 UNION ALL SELECT * FROM ( SELECT * FROM t2 10) t2;`.
            
        -   If the MaxCompute V2.0 data type edition is used, the statement is expressed as `SELECT * FROM (SELECT * FROM t1 UNION ALL SELECT * FROM t2 ) t 10;`.
            
        
        This difference also applies to the ORDER BY, DISTRIBUTE BY, SORT BY, and CLUSTER BY clauses.
        
    -   The parsing of data types in IN expressions is different.
        
        For the `a in (1, 2, 3)` expression:
        
        -   If the MaxCompute V1.0 data type edition is used, all values enclosed in parentheses () must be of the same type.
            
        -   If the MaxCompute V2.0 data type edition is used, all values enclosed in parentheses () can be implicitly converted into the same type.
            
        
    -   The conversion rules for INSERT statements are different.
        
        -   Hive-compatible data type edition: If a source data type can be explicitly converted into the data type of a table, MaxCompute automatically inserts a conversion function and runs it.
            
        -   MaxCompute V1.0 data type edition and MaxCompute V2.0 data type edition: A source data type must be implicitly converted into the data type of a table. Otherwise, an error is returned.
            
            ```
            -- The following operations succeed in Hive-compatible mode but fail in other modes: 
            create table t (a bigint); 
            insert into table select 1.5; 
            ```
            
-   Function behavior is different.
    
    -   `+`, `-`, `*`, `/`, and POW function
        
        -   Hive-compatible data type edition: If the data exceeds the value range of a data type, the initial value is returned.
            
        -   MaxCompute V1.0 data type edition and MaxCompute V2.0 data type edition: If the data exceeds the value range of a data type, an error is returned. In other modes, the value null is returned.
            
    -   `>`, `>=`, `=`, `<`, and `<=`
        
        -   Hive-compatible data type edition: The values of the DOUBLE type are directly compared.
            
        -   MaxCompute V1.0 data type edition and MaxCompute V2.0 data type edition: If the values of the DOUBLE type are compared, they are considered the same if the first 15 digits to the right of the decimal point are the same. Other digits after the decimal point are not compared.
            
    -   Bitwise operators: `&`, `|`, and `^`
        
        -   Hive-compatible data type edition: A value of the same data type as the input parameter is returned.
            
        -   MaxCompute V1.0 data type edition and MaxCompute V2.0 data type edition: A value of the BIGINT type is returned.
            
    -   LENGTH, LENGTHB, FIND\_IN\_SET, INSTR, SIZE, HASH, and SIGN functions
        
        -   Hive-compatible data type edition: A value of the INT type is returned.
            
        -   MaxCompute V1.0 data type edition and MaxCompute V2.0 data type edition: A value of the BIGINT type is returned.
            
    -   FLOOR and CEIL
        
        -   Hive-compatible data type edition: If the input parameter is of the DECIMAL type, a value of the DECIMAL type is returned.
            
        -   MaxCompute V1.0 data type edition and MaxCompute V2.0 data type edition: If the input parameter is of the DECIMAL type, a value of the BIGINT type is returned.
            
    -   FROM\_UNIXTIME
        
        -   Hive-compatible data type edition: A value of the STRING type is returned.
            
        -   MaxCompute V1.0 data type edition and MaxCompute V2.0 data type edition: A value of the DATETIME type is returned.
            
    -   CONCAT\_WS
        
        -   Hive-compatible data type edition: If a connected input string is NULL, the string is ignored.
            
        -   MaxCompute V1.0 data type edition and MaxCompute V2.0 data type edition: If a connected input string is NULL, NULL is returned.
            
    -   FIND\_IN\_SET
        
        -   Hive-compatible data type edition: An empty string is considered the matching of the tail of the string.
            
            ```
            -- Hive-compatible mode 
            find_in_set("","")  1 is returned. 
            find_in_set("", "a,") 2 is returned. 
            ```
            
        -   MaxCompute V1.0 data type edition and MaxCompute V2.0 data type edition: An empty string is considered unmatched, and 0 is returned.
            
    -   REGEXP\_(EXTRACT/REPLACE)
        
        -   Hive-compatible data type edition: The REGEXP schema complies with the specifications of Java regular expressions.
            
        -   MaxCompute V1.0 data type edition and MaxCompute V2.0 data type edition: The REGEXP schema complies with MaxCompute specifications.
            
    -   SUBSTR
        
        ```
        string substr(string <str>, bigint <start_position>[, bigint <length>])
        ```
        
        start\_position: required. A value of the BIGINT type. The default value is 1.
        
        -   Hive-compatible data type edition: If start\_position is set to 0, the return value is the same as that when this parameter is set to 1.
            
        -   MaxCompute V1.0 and MaxCompute V2.0 data type editions: If start\_position is set to 0, null is returned.
