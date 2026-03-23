MaxCompute SQL allows you to convert data types. Explicit conversion and implicit conversion are supported.

## Explicit conversion

An explicit conversion uses the CAST function to convert the data type of a value. The following table describes the rules of explicit conversions supported by MaxCompute SQL. For more information about the CAST function, see [CAST](/help/en/maxcompute/user-guide/other-functions/#section-bpc-dy1-wdb).

**From/To**

**BIGINT**

**DOUBLE**

**STRING**

**DATETIME**

**BOOLEAN**

**DECIMAL**

**FLOAT**

BIGINT

N/A

Y

Y

N

Y

Y

Y

DOUBLE

Y

N/A

Y

N

Y

Y

Y

STRING

Y

Y

N/A

Y

Y

Y

Y

DATETIME

N

N

Y

N/A

N

N

N

BOOLEAN

Y

Y

Y

N

N/A

Y

Y

DECIMAL

Y

Y

Y

N

Y

N/A

Y

FLOAT

Y

Y

Y

N

Y

Y

N/A

Y indicates that the conversion is supported. N indicates that the conversion is not supported. N/A indicates that the conversion is not required. An error is returned if an unsupported explicit conversion is performed.

-   Examples
    
    **Note**
    
    In this topic, data in the `user` table is used.
    
    ```
    create table if not exists user (
      user_name string,
    	user_id bigint,
    	age bigint   
    );
    insert into user values ('zhangsan',111,20);
    ```
    
-   Sample code
    
    ```
    SELECT CAST(user_id AS DOUBLE) AS new_id from user;
    SELECT CAST('2015-10-01 00:00:00' AS DATETIME) AS new_date;
    SELECT CAST(ARRAY(1,2,3) AS ARRAY<STRING>);
    SELECT CONCAT_WS(',', CAST(ARRAY(1, 2) AS ARRAY<STRING>));
    ```
    

**Instructions and limits**

-   If a value of the DOUBLE type is converted into that of the BIGINT type, digits after the decimal point are removed. For example, you can execute `CAST(1.6 AS BIGINT) = 1` to convert 1.6 of the DOUBLE Type into 1 of the BIGINT type.
    
-   If a value of the STRING type that meets the format of the DOUBLE type is converted into the BIGINT type, the value is converted from the STRING type into the DOUBLE type, and then to the BIGINT type. During the conversion, the digits after the decimal point are removed. For example, you can execute `CAST("1.6" AS BIGINT) = 1` to convert 1.6 of the STRING type into 1 of the BIGINT type.
    
-   If a value of the STRING type that meets the format of the BIGINT type is converted into the DOUBLE type, one digit is retained after the decimal point. For example, you can execute `CAST("1" AS DOUBLE) = 1.0` to convert 1 of the STRING type into 1.0 of the DOUBLE type.
    
-   The default format `yyyy-mm-dd hh:mi:ss` is used during the conversion that involves the DATETIME type.
    
-   Specific data types cannot be explicitly converted, but can be converted by using SQL built-in functions. For example, you can use the `TO_CHAR` function to convert the BOOLEAN type into the STRING type. For more information, see [TO\_CHAR](/help/en/maxcompute/user-guide/string-functions/#section-mdh-lbk-ggy). You can also use the `TO_DATE` function to convert the STRING type into the DATETIME type. For more information, see [TO\_DATE](/help/en/maxcompute/user-guide/date-functions/#section-b3z-1fm-vdb).
    
-   If the value exceeds the value range of the DECIMAL type, an error may occur during the execution of `CAST STRING TO DECIMAL`. For example, the overflow of the most significant bit or the removal of the least significant bit may occur.
    
-   A conversion from the DECIMAL type to the DOUBLE or FLOAT type results in a loss of precision. In scenarios where high precision is required, for example, when you calculate the bill amount or premium rate, we recommend that you retain the DECIMAL type.
    
-   MaxCompute allows you to convert complex data types. Implicit conversions between complex data types can be implemented only when their subtypes support implicit conversions. Explicit conversions between complex data types can be implemented only when their subtypes support explicit conversions. If you convert the STRUCT type, field names can be inconsistent, but the number of fields must be consistent and these fields must support implicit or explicit conversions. Examples:
    
    -   MaxCompute can implicitly or explicitly convert a value of the `BIGINT` type into a value of the `STRING` type.
        
    -   MaxCompute can explicitly convert a value of the `BIGINT` type into a value of the `INT` type. Implicit conversions are not supported.
        
    -   MaxCompute cannot implicitly or explicitly convert a value of the `BIGINT` type into a value of the `DATETIME` type.
        
    -   MaxCompute can implicitly convert a value of `STRUCT<a:BIGINT,b:INT>` into a value of `STRUCT<col1:STRING,col2:BIGINT>`. MaxCompute cannot implicitly or explicitly convert a value of STRUCT<a:BIGINT,b:INT> into a value of `STRUCT<a:STRING>`.
        

## Implicit conversion and its application scope

An implicit conversion allows MaxCompute to automatically convert data types based on the context and predefined rules. The following table describes the rules of implicit conversions supported by MaxCompute.

**From/To**

**BOOLEAN**

**TINYINT**

**SMALLINT**

**INT**

**BIGINT**

**FLOAT**

BOOLEAN

Y

N

N

N

N

N

TINYINT

N

Y

Y

Y

Y

Y

SMALLINT

N

N

Y

Y

Y

Y

INT

N

N

Y

Y

Y

Y

BIGINT

N

N

N

N

Y

Y

FLOAT

N

N

N

N

Y

Y

**From/To**

**DOUBLE**

**DECIMAL**

**STRING**

**VARCHAR**

**TIMESTAMP**

**BINARY**

DOUBLE

Y

Y

Y

Y

N

N

DECIMAL

N

Y

Y

Y

N

N

STRING

Y

Y

Y

Y

N

N

VARCHAR

Y

Y

N

N

N/A

N/A

TIMESTAMP

N

N

Y

Y

Y

N

BINARY

N

N

N

N

N

Y

Y indicates that the conversion is supported. N indicates that the conversion is not supported. N/A indicates that the conversion is not required. An error is returned if an unsupported implicit conversion is performed or if a conversion fails.

**Note**

-   MaxCompute V2.0 introduces the methods to define constants of the DECIMAL and DATETIME types. For example, 100BD indicates the value 100 of the DECIMAL type. `2017-11-11 00:00:00` indicates a constant of the DATETIME type. Constants can be directly defined in the VALUES clauses and tables.
    
-   If an implicit conversion is used, MaxCompute automatically converts data types based on context. If the types do not match, you can use the CAST function to explicitly convert data types.
    
-   Implicit conversion rules apply to specific scopes. In specific scenarios, only part of the rules take effect.
    

**Example**

```
SELECT user_id+age+'12345', CONCAT(user_name,user_id,age) FROM user;
```

Implicit conversions with different operators:

-   **Implicit conversions with relational operators**
    
    Relational operators include `=, <>, <, ≤, >, ≥, IS NULL, IS NOT NULL, LIKE, RLIKE, and IN`. The rules that use `LIKE, RLIKE, and IN` are different from those that use other relational operators. The rules described in this section do not apply to the three operators.
    
    The following table describes the rules of implicit conversions when data of different types is used for relational operations.
    
    **From/To**
    
    **BIGINT**
    
    **DOUBLE**
    
    **STRING**
    
    **DATETIME**
    
    **BOOLEAN**
    
    **DECIMAL**
    
    BIGINT
    
    N/A
    
    DOUBLE
    
    DOUBLE
    
    N
    
    N
    
    DECIMAL
    
    DOUBLE
    
    DOUBLE
    
    N/A
    
    DOUBLE
    
    N
    
    N
    
    DECIMAL
    
    STRING
    
    DOUBLE
    
    DOUBLE
    
    N/A
    
    DATETIME
    
    N
    
    DECIMAL
    
    DATETIME
    
    N
    
    N
    
    DATETIME
    
    N/A
    
    N
    
    N
    
    BOOLEAN
    
    N
    
    N
    
    N
    
    N
    
    N/A
    
    N
    
    DECIMAL
    
    DECIMAL
    
    DECIMAL
    
    DECIMAL
    
    N
    
    N
    
    N/A
    
    **Note**
    
    -   If two values you want to compare do not support implicit conversions, the relational operation cannot be completed and an error is returned.
        
    -   For more information about relational operators, see [Operator](/help/en/maxcompute/user-guide/operator#concept-bll-pfl-vdb).
        
    
-   **Implicit conversions with special relational operators**
    
    Special relational operators include `LIKE, RLIKE, and IN`.
    
    -   Syntax of LIKE and RLIKE
        
        ```
        source LIKE pattern;  
        source RLIKE pattern;
        ```
        
        **Note**
        
        -   The source and pattern parameters of LIKE and RLIKE must be of the STRING type.
            
        -   Other types can neither be involved in the operation nor be implicitly converted into the STRING type.
            
        
    -   Syntax of IN
        
        ```
        key IN (value1, value2, ...)
        ```
        
        **Note**
        
        -   The data types in the value list next to IN must be consistent.
            
        -   If the data types of values include BIGINT, DOUBLE, and STRING, convert the values of the BIGINT and STRING types into the DOUBLE type. If the data types of values include DATETIME and STRING, convert the values of the STRING type into the DATETIME type. Conversions between other data types are not allowed.
            
        
    
-   **Implicit conversions with arithmetic operators**
    
    Arithmetic operators include: `+, -, *, /, and %`. The following rules apply to implicit conversions with these operators.
    
    -   Only the values of the STRING, BIGINT, DOUBLE, and DECIMAL types can be used for arithmetic operations.
        
    -   Values of the STRING type are implicitly converted into the DOUBLE type before the arithmetic operations.
        
    -   If values of the BIGINT and DOUBLE types are used for the arithmetic operations, the value of the BIGINT type is implicitly converted into the DOUBLE type.
        
    -   The values of the DATETIME and BOOLEAN types cannot be used for arithmetic operations.
        
    
-   **Implicit conversions with logical operators**
    
    Logical operators include `AND, OR, and NOT`. The following rules apply to implicit conversions with these operators:
    
    -   Only the values of the BOOLEAN type can be used for logical operations.
        
    -   Value of other types cannot be used for logical operations or implicitly converted.
        
    

## Implicit conversions with built-in functions

MaxCompute SQL provides a variety of built-in functions. These functions can be used to calculate one or more columns of a specific row and provide data of a specific type. The following rules apply to implicit conversions with these functions:

-   If you call a built-in function and the data type of an input parameter is different from that defined in the function, the data type of the input parameter is converted into the function-defined data type.
    
-   The parameters of each built-in function in MaxCompute SQL have different requirements for implicit conversions.
    

## Implicit conversions with CASE WHEN

For more information about CASE WHEN, see [CASE WHEN expression](/help/en/maxcompute/user-guide/other-functions/#section-jvg-uf1-mnr). The following rules apply to implicit conversions with CASE WHEN:

-   If the return values are of the BIGINT and DOUBLE types, all the values are converted into the DOUBLE type.
    
-   If the return values include those of the STRING type, all the values are converted into the STRING type. If a conversion, such as a conversion from BOOLEAN to STRING fails, an error is returned.
    
-   Conversions between other data types are not allowed.
    

## Conversions between the STRING and DATETIME types

MaxCompute supports conversions between the STRING and DATETIME types. The format `yyyy-mm-dd hh:mi:ss` is used during the conversions.

**Time unit**

**String (not case-sensitive)**

**Valid value**

Year

yyyy

0001 - 9999

Month

mm

01 - 12

Day

dd

01 - 28|29|30|31

Hour

hh

00 - 23

Minute

mi

00 - 59

Second

ss

00 - 59

**Note**

-   If the first digit of the value range of each time unit is 0, 0 cannot be omitted. For example, `2014-1-9 12:12:12` is an invalid DATETIME format and it cannot be converted from the STRING type into the DATETIME type. It must be written as `2014-01-09 12:12:12`.
    
-   Only the STRING type that meets the preceding format requirements can be converted into the DATETIME type. For example, `CAST("2013-12-31 02:34:34" AS DATETIME)` converts `2013-12-31 02:34:34` of the STRING type into the DATETIME type. Similarly, if you convert a value of the DATETIME type into a value of the STRING type, the value after the conversion is automatically represented in the `yyyy-mm-dd hh:mi:ss` format.
    

MaxCompute provides the TO\_DATE function to convert the STRING type that does not meet the format of the DATETIME type into the DATETIME type. For more information, see [TO\_DATE](/help/en/maxcompute/user-guide/date-functions/#section-b3z-1fm-vdb).
