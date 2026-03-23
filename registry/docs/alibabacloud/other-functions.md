MaxCompute SQL provides several other functions that are commonly used during development. This topic describes the syntax, parameters, and usage examples for functions such as CAST, FAILIF, and HASH.

**Function**

**Feature**

[BETWEEN AND expression](#section-j2t-01z-qaq)

Returns the values that fall in or fall out of the specified range.

[CASE WHEN expression](#section-jvg-uf1-mnr)

Returns values based on the computing result of an expression.

[CAST](#section-bpc-dy1-wdb)

Converts the result of an expression into the specified data type.

[COALESCE](#section-dts-3y1-wdb)

Returns the first non-null value in the parameter list.

[COMPRESS](#section-ylm-jlf-0jp)

Uses the GZIP algorithm to compress input parameters of the STRING or BINARY type.

[CRC32](#section-yt2-qa5-pnq)

Calculates the cyclic redundancy check value of a value that is of the STRING or BINARY type.

[DECOMPRESS](#section-buw-wn5-i1j)

Uses the GZIP algorithm to decompress input parameters of the BINARY type.

[FAILIF](/help/en/maxcompute/user-guide/failif)

Returns true or an error message with custom information based on the evaluation result of an expression.

[GET\_IDCARD\_AGE](#section-j2q-1z1-wdb)

Returns an age in years based on the ID card number.

[GET\_IDCARD\_BIRTHDAY](#section-tfq-dz1-wdb)

Returns the date of birth based on the ID card number.

[GET\_IDCARD\_SEX](#section-akt-gz1-wdb)

Returns the gender based on the ID card number.

[GET\_USER\_ID](#section-2zc-j25-j1e)

Obtains the ID of the current account.

[HASH](#section-ff9-6g0-lqc)

Calculates a hash value based on the input parameters.

[IF](#section-7fo-xfg-nhg)

Checks whether a specified condition is true.

[MAX\_PT](#section-16z-4vq-iys)

Returns the name of the largest hash partition in a partitioned table.

[NULLIF](#section-cth-bm8-bip)

Checks whether the values of two input parameters are the same.

[NVL](#section-oau-ajn-osy)

Specifies the return values of the parameters whose values are null.

[ORDINAL](#section-pcj-pz1-wdb)

Sorts the values of the input variables in ascending order and returns the value that is ranked at a specified position.

[PARTITION\_EXISTS](#section-gy2-h1b-kb1)

Checks whether a specified partition exists in a table.

[SAMPLE](#section-cm0-whl-xbc)

Samples all column values that are read and filters out the rows that do not meet sampling conditions.

[SHA](#section-6zq-k20-82q)

Calculates the SHA-1 hash value of a value that is of the STRING or BINARY type.

[SHA1](#section-6so-1tl-okq)

Calculates the SHA-1 hash value of a value that is of the STRING or BINARY type.

[SHA2](#section-15y-7je-tmo)

Calculates the SHA-2 hash value of a value that is of the STRING or BINARY type.

[STACK](#section-85x-l33-h2m)

Splits a specified parameter group into a specified number of rows.

[STR\_TO\_MAP](#section-p1z-xrj-dfb)

Splits a string with a specified delimiter and returns a key-value pair.

[TABLE\_EXISTS](#section-ky9-3so-zof)

Checks whether a specified table exists.

[TRANS\_ARRAY](#section-y21-vnb-wdb)

Transposes one row of data into multiple rows. This function is a user-defined table-valued function (UDTF) that transposes an array separated by fixed delimiters in a column into multiple rows.

[TRANS\_COLS](#section-vxw-9dg-ypz)

Transposes one row of data into multiple rows. This function is a UDTF that transposes columns into rows.

[UNIQUE\_ID](#section-x4q-g5f-rav)

Returns a unique ID. This function is more efficient than the UUID function.

[UUID](#section-9c2-6h7-cbg)

Returns a random ID.

## BASE64

-   Syntax
    
    ```
    string base64(binary <value>)
    ```
    
-   Description
    
    Converts a binary value to a Base64-encoded string.
    
-   Parameters
    
    value: A required value of the BINARY type. This is the value to be converted.
    
-   Return value
    
    Returns a value of the STRING type. If the input parameter is null, this function returns null.
    
-   Examples
    
    -   Example 1: Convert the binary result of `cast ('alibaba' as binary)` to a Base64-encoded string. Sample statement:
        
        ```
        -- The return value is YWxpYmFiYQ==.
        select base64(cast ('alibaba' as binary));
        ```
        
    -   Example 2: The input parameter is null. Sample statement:
        
        ```
        -- The return value is null.
        select base64(null);
        ```
        

## BETWEEN AND expression

-   Syntax
    
    ```
    <a> [NOT] between <b> and <c>
    ```
    
-   Description
    
    Checks whether the value of a is within the range of b and c, or not within the range of b and c.
    
-   Parameters
    
    -   a: Required. The field whose values you want to check.
        
    -   b and c: Required. These parameters specify the value range. The data types of these parameters must be the same as the data type of the a parameter.
        
-   Return value
    
    Returns the values that meet the condition.
    
    If the a, b, or c parameter is null, this function returns null.
    
-   Examples
    
    The `emp` table contains the following data.
    
    ```
    | empno | ename | job | mgr | hiredate| sal| comm | deptno |
    7369,SMITH,CLERK,7902,1980-12-17 00:00:00,800,,20
    7499,ALLEN,SALESMAN,7698,1981-02-20 00:00:00,1600,300,30
    7521,WARD,SALESMAN,7698,1981-02-22 00:00:00,1250,500,30
    7566,JONES,MANAGER,7839,1981-04-02 00:00:00,2975,,20
    7654,MARTIN,SALESMAN,7698,1981-09-28 00:00:00,1250,1400,30
    7698,BLAKE,MANAGER,7839,1981-05-01 00:00:00,2850,,30
    7782,CLARK,MANAGER,7839,1981-06-09 00:00:00,2450,,10
    7788,SCOTT,ANALYST,7566,1987-04-19 00:00:00,3000,,20
    7839,KING,PRESIDENT,,1981-11-17 00:00:00,5000,,10
    7844,TURNER,SALESMAN,7698,1981-09-08 00:00:00,1500,0,30
    7876,ADAMS,CLERK,7788,1987-05-23 00:00:00,1100,,20
    7900,JAMES,CLERK,7698,1981-12-03 00:00:00,950,,30
    7902,FORD,ANALYST,7566,1981-12-03 00:00:00,3000,,20
    7934,MILLER,CLERK,7782,1982-01-23 00:00:00,1300,,10
    7948,JACCKA,CLERK,7782,1981-04-12 00:00:00,5000,,10
    7956,WELAN,CLERK,7649,1982-07-20 00:00:00,2450,,10
    7956,TEBAGE,CLERK,7748,1982-12-30 00:00:00,1300,,10
    ```
    
    Query data where the `sal` value is between 1000 and 1500. Sample statement:
    
    ```
    select * from emp where sal between 1000 and 1500;
    ```
    
    The following result is returned.
    
    ```
    +-------+-------+-----+------------+------------+------------+------------+------------+
    | empno | ename | job | mgr        | hiredate   | sal        | comm       | deptno     |
    +-------+-------+-----+------------+------------+------------+------------+------------+
    | 7521  | WARD  | SALESMAN | 7698  | 1981-02-22 00:00:00 | 1250.0     | 500.0      | 30  |
    | 7654  | MARTIN | SALESMAN | 7698 | 1981-09-28 00:00:00 | 1250.0     | 1400.0     | 30 |
    | 7844  | TURNER | SALESMAN | 7698 | 1981-09-08 00:00:00 | 1500.0     | 0.0        | 30 |
    | 7876  | ADAMS | CLERK | 7788  | 1987-05-23 00:00:00 | 1100.0     | NULL     | 20   |
    | 7934  | MILLER | CLERK | 7782  | 1982-01-23 00:00:00 | 1300.0     | NULL      | 10  |
    | 7956  | TEBAGE | CLERK | 7748  | 1982-12-30 00:00:00 | 1300.0     | NULL      | 10  |
    +-------+-------+-----+------------+------------+------------+------------+------------+
    ```
    

## CASE WHEN expression

-   Syntax
    
    MaxCompute provides the following two `case when` formats:
    
    -   ```
        case <value>
        when <value1> then <result1>
        when <value2> then <result2>
        ...
        else <resultn>
        end
        ```
        
    -   ```
        case
        when (<_condition1>) then <result1>
        when (<_condition2>) then <result2>
        when (<_condition3>) then <result3>
        ...
        else <resultn>
        end
        ```
        
    
-   Description
    
    Returns the value of result based on the evaluation of value or \_condition.
    
-   Parameters
    
    -   value: Required. The value to be compared.
        
    -   \_condition: Required. The condition to be evaluated.
        
    -   result: Required. The value to be returned.
        
-   Return value
    
    -   If all result values are of the BIGINT or DOUBLE type, their data types are converted to DOUBLE before the values are returned.
        
    -   If any result value is of the STRING type, all values are converted to the STRING type before they are returned. An error is returned if a data type conversion is not supported. For example, data of the BOOLEAN type cannot be converted to the STRING type.
        
    -   Conversions between other data types are not supported.
        
-   Examples
    
    The `sale_detail` table contains the `shop_name string, customer_id string, total_price double` columns. The table contains the following data.
    
    ```
    +------------+-------------+-------------+------------+------------+
    | shop_name  | customer_id | total_price | sale_date  | region     |
    +------------+-------------+-------------+------------+------------+
    | s1         | c1          | 100.1       | 2013       | china      |
    | s2         | c2          | 100.2       | 2013       | china      |
    | s3         | c3          | 100.3       | 2013       | china      |
    | null       | c5          | NULL        | 2014       | shanghai   |
    | s6         | c6          | 100.4       | 2014       | shanghai   |
    | s7         | c7          | 100.5       | 2014       | shanghai   |
    +------------+-------------+-------------+------------+------------+
    ```
    
    Sample statement:
    
    ```
    select 
    case  
    when region='china' then 'default_region'
    when region like 'shang%' then 'sh_region'
    end as region 
    from sale_detail;
    ```
    
    The following result is returned.
    
    ```
    +------------+
    | region     |
    +------------+
    | default_region |
    | default_region |
    | default_region |
    | sh_region  |
    | sh_region  |
    | sh_region  |
    +------------+
    ```
    

## CAST

-   Syntax
    
    ```
    cast(<expr> as <type>)
    ```
    
-   Description
    
    Converts the value of expr to the target data type type.
    
-   Parameters
    
    -   expr: Required. The expression to be converted.
        
    -   type: Required. The target data type. Usage:
        
        -   `cast(double as bigint)`: Converts a value of the DOUBLE type to the BIGINT type.
            
        -   `cast(string as bigint)`: Converts a value of the STRING type to the BIGINT type. If the string contains only integers, it is directly converted to the BIGINT type. If the string contains a floating-point number or is in exponential form, it is first converted to the DOUBLE type and then to the BIGINT type.
            
        -   The default date format `yyyy-mm-dd hh:mi:ss` is used for `cast(string as datetime)` or `cast(datetime as string)`.
            
-   Return value
    
    -   Returns a value of the target data type.
        
    -   If you run the `setproject odps.function.strictmode=false` command, the function returns the number that precedes the first letter.
        
    -   If you run the `setproject odps.function.strictmode=true` command, an error is returned.
        
    -   When you convert a value to the DECIMAL type, trailing zeros after the decimal point are removed if you set `odps.sql.decimal.tostring.trimzero=true`. Trailing zeros are retained if you set `odps.sql.decimal.tostring.trimzero=false`.
        
        **Important**
        
        The `odps.sql.decimal.tostring.trimzero` parameter takes effect only when data is retrieved from a table and does not affect static values.
        
-   Examples
    
    -   Example 1: common usage. Sample statement:
        
        ```
        -- The return value is 1. 
        select cast('1' as bigint);
        ```
        
    -   Example 2: Convert a value of the STRING type into the BOOLEAN type. If the value of the STRING type is an empty string, `false` is returned. Otherwise, `true` is returned. Sample statement:
        
        -   The value of the STRING type is an empty string.
            
            ```
            select cast("" as boolean);
            -- The return value is false.
            +------+
            | _c0  |
            +------+
            | false |
            +------+
            ```
            
        -   The value of the STRING type is a non-empty string.
            
            ```
            select cast("false" as boolean);
            -- The return value is true.
            +------+
            | _c0  |
            +------+
            | true |
            +------+
            ```
            
    -   Example 3: Convert a string into a date.
        
        ```
        -- Convert a string into a date.
        select cast("2022-12-20" as date);
        -- The following result is returned:
        +------------+
        | _c0        |
        +------------+
        | 2022-12-20 |
        +------------+
        
        -- Convert a date string that contains the hour, minute, and second parts into a date.
        select cast("2022-12-20 00:01:01" as date);
        -- The following result is returned:
        +------------+
        | _c0        |
        +------------+
        | NULL       |
        +------------+
        -- To ensure that a valid date is returned, run the following commands:
        set odps.sql.executionengine.enable.string.to.date.full.format= true;
        select cast("2022-12-20 00:01:01" as date);
        -- The following result is returned:
        +------------+
        | _c0        |
        +------------+
        | 2022-12-20 |
        +------------+
        ```
        
        **Note**
        
        By default, the `odps.sql.executionengine.enable.string.to.date.full.format` parameter is set to `false`. If you want to convert a date string that contains the hour, minute, and second parts, you must set this parameter to `true`.
        
    -   Example 4: (**Incorrect usage**) If a type conversion fails or is not supported, an error is returned. **Incorrect sample statement**:
        
        ```
        select cast('abc' as bigint);
        ```
        
    -   Example 5: `setproject odps.function.strictmode=false` is specified.
        
        ```
        setprojectodps.function.strictmode=false;
        select cast('123abc'as bigint);
        -- The following result is returned:
        +------------+
        |_c0|
        +------------+
        |123|
        +------------+
        ```
        
    -   Example 6: `setproject odps.function.strictmode=true` is specified.
        
        ```
        setprojectodps.function.strictmode=true;
        select cast('123abc' as bigint);
        -- The following result is returned:
        FAILED:ODPS-0130071:[0,0]Semanticanalysisexception-physicalplangenerationfailed:java.lang.NumberFormatException:ODPS-0123091:Illegaltypecast-Infunctioncast,value'123abc'cannotbecastedfromStringtoBigint.
        ```
        
    -   Example 7: The `odps.sql.decimal.tostring.trimzero` parameter is specified.
        
        ```
        -- Create a table.
        create table mf_dot (dcm1 decimal(38,18),
                             dcm2 decimal(38,18));
        -- Insert data into the table.
        insert into table mf_dot values (12.45500BD,12.3400BD);
        
        -- Set the odps.sql.decimal.tostring.trimzero parameter to true, or do not configure the odps.sql.decimal.tostring.trimzero parameter.
        set odps.sql.decimal.tostring.trimzero=true;
        -- Remove the 0s at the end of the decimal.
        select cast(round(dcm1,3) as string),cast(round(dcm2,3) as string) from mf_dot;
        -- The following result is returned:
        +------------+------------+
        | _c0        | _c1        |
        +------------+------------+
        | 12.455     | 12.34      |
        +------------+------------+
        
        -- Set the odps.sql.decimal.tostring.trimzero parameter to false.
        set odps.sql.decimal.tostring.trimzero=false;
        -- Retain the 0s at the end of the decimal.
        select cast(round(dcm1,3) as string),cast(round(dcm2,3) as string) from mf_dot;
        -- The following result is returned:
        +------------+------------+
        | _c0        | _c1        |
        +------------+------------+
        | 12.455     | 12.340     |
        +------------+------------+
        
        -- The odps.sql.decimal.tostring.trimzero parameter does not take effect for static values.
        set odps.sql.decimal.tostring.trimzero=false;
        select cast(round(12345.120BD,3) as string);
        -- The following result is returned:
        +------------+
        | _c0        |
        +------------+
        | 12345.12   |
        +------------+
        ```
        

## COALESCE

-   Syntax
    
    ```
    coalesce(<expr1>, <expr2>, ...)
    ```
    
-   Description
    
    Returns the first non-null value in the expression list `<expr1>, <expr2>, ...`.
    
-   Parameters
    
    expr: Required. The expressions to be evaluated.
    
-   Return value
    
    The data type of the return value is the same as the data type of the input parameters.
    
-   Examples
    
    -   Example 1: Common usage example. Sample statement:
        
        ```
        -- The return value is 1.
        select coalesce(null,null,1,null,3,5,7);
        ```
        
    -   Example 2: If the data types of the parameter values cannot be determined, an error is returned.
        
        -   **Incorrect sample statement**
            
            ```
            -- The value abc cannot be identified because the data type of the value abc is not defined. An error is returned.
            select coalesce(null,null,1,null,abc,5,7);
            ```
            
        -   **Correct sample statement**
            
            ```
            select coalesce(null,null,1,null,'abc',5,7);
            ```
            
    -   Example 3: If data is not read from a table and all input parameters are null, an error is returned. **Incorrect sample statement**:
        
        ```
        -- An error is returned because non-null values do not exist.
        select coalesce(null,null,null,null);
        ```
        
    -   Example 4: If data is read from a table and all input parameters are null, this function returns null.
        
        Original data table:
        
        ```
        +-----------+-------------+------------+
        | shop_name | customer_id | toal_price |
        +-----------+-------------+------------+
        | ad        | 10001       | 100.0      |
        | jk        | 10002       | 300.0      |
        | ad        | 10003       | 500.0      |
        | tt        | NULL        | NULL       |
        +-----------+-------------+------------+
        ```
        
        The field values for the tt shop in the source table are all null. After the following statement is executed, null is returned.
        
        ```
        select coalesce(customer_id,total_price) from sale_detail where shop_name='tt';
        ```
        

## COMPRESS

-   Syntax
    
    ```
    binary compress(string <str>)
    binary compress(binary <bin>)
    ```
    
-   Description
    
    Compresses str or bin using the GZIP algorithm.
    
-   Parameters
    
    -   str: A required value of the STRING type.
        
    -   bin: A required value of the BINARY type.
        
-   Return value
    
    Returns a value of the BINARY type. If the input parameter is null, this function returns null.
    
-   Examples
    
    -   Example 1: Use the GZIP algorithm to compress the string `hello`. Sample statement:
        
        ```
        -- The return value is =1F=8B=08=00=00=00=00=00=00=03=CBH=CD=C9=C9=07=00=86=A6=106=05=00=00=00.
        select compress('hello');
        ```
        
    -   Example 2: The input parameter is an empty string. Sample statement:
        
        ```
        -- The return value is =1F=8B=08=00=00=00=00=00=00=03=03=00=00=00=00=00=00=00=00=00.
        select compress('');
        ```
        
    -   Example 3: The input parameter is null. Sample statement:
        
        ```
        -- The return value is null.
        select compress(null);
        ```
        

## CRC32

-   Syntax
    
    ```
    bigint crc32(string|binary <expr>)
    ```
    
-   Description
    
    Calculates the cyclic redundancy check value for expr. The value of \`expr\` must be of the STRING or BINARY type.
    
-   Parameters
    
    expr: A required value of the STRING or BINARY type.
    
-   Return value
    
    Returns a value of the BIGINT type. The return value is determined by the following rules:
    
    -   If the input parameter is null, this function returns null.
        
    -   If an input parameter is an empty string, 0 is returned.
        
    
-   Examples
    
    -   Example 1: Calculate the cyclic redundancy check value of the string `ABC`. Sample statement:
        
        ```
        -- The return value is 2743272264.
        select crc32('ABC');
        ```
        
    -   Example 2: The input parameter is null. Sample statement:
        
        ```
        -- The return value is null.
        select crc32(null);
        ```
        

## DECODE

-   Syntax
    
    ```
    decode(<expression>, <search>, <result>[, <search>, <result>]...[, <default>])
    ```
    
-   Description
    
    Implements `if-then-else` conditional logic.
    
-   Parameters
    
    -   expression: Required. The expression to be compared.
        
    -   search: Required. The search item to be compared with expression.
        
    -   result: Required. The value to be returned if search matches expression.
        
    -   default: Optional. If no search items match the expression, the default value is returned. If this parameter is not specified, null is returned.
        
    
    **Note**
    
    -   All result values, except for NULL values, must be of the same data type. An error is returned if the data types are different.
        
    -   The values of search and expression must be of the same data type. Otherwise, an error is returned.
        
    
-   Return value
    
    -   If a search item matches the expression, the corresponding result is returned.
        
    -   If no search item matches the expression, the default value is returned.
        
    -   If the default parameter is not specified, null is returned.
        
    -   If multiple search items match the expression, the result of the first matching item is returned.
        
    -   MaxCompute SQL typically returns null when it evaluates `NULL=NULL`. However, the DECODE function treats two null values as equal.
        
-   Examples
    
    The `sale_detail` table contains the `shop_name string, customer_id string, total_price double` columns. The table contains the following data.
    
    ```
    +------------+-------------+-------------+------------+------------+
    | shop_name  | customer_id | total_price | sale_date  | region     |
    +------------+-------------+-------------+------------+------------+
    | s1         | c1          | 100.1       | 2013       | china      |
    | s2         | c2          | 100.2       | 2013       | china      |
    | s3         | c3          | 100.3       | 2013       | china      |
    | null       | c5          | NULL        | 2014       | shanghai   |
    | s6         | c6          | 100.4       | 2014       | shanghai   |
    | s7         | c7          | 100.5       | 2014       | shanghai   |
    +------------+-------------+-------------+------------+------------+
    ```
    
    Sample statement:
    
    ```
    -- If the value of customer_id is c1, Taobao is returned. If the value is c2, Alipay is returned. If the value is c3, Aliyun is returned. If the value is null, N/A is returned. In other cases, Others is returned.
    select
    decode(customer_id,
    'c1', 'Taobao',
    'c2', 'Alipay',
    'c3', 'Aliyun',
    Null, 'N/A',
    'Others') as result
    from sale_detail;
    -- The preceding statement is equivalent to the following statement:
    if customer_id = c1 then
    result := 'Taobao';
    elsif customer_id = c2 then
    result := 'Alipay';
    elsif customer_id = c3 then
    result := 'Aliyun';
    ...
    else
    result := 'Others';
    end if;
    ```
    
    The following result is returned.
    
    ```
    +------------+
    | result     |
    +------------+
    | Others     |
    | Others     |
    | Others     |
    | Taobao     |
    | Alipay     |
    | Aliyun     |
    +------------+
    ```
    

## DECOMPRESS

-   Syntax
    
    ```
    binary decompress(binary <bin>)
    ```
    
-   Description
    
    Decompresses bin using the GZIP algorithm.
    
-   Parameters
    
    bin: A required value of the BINARY type.
    
-   Return value
    
    Returns a value of the BINARY type. If the input parameter is null, this function returns null.
    
-   Examples
    
    -   Example 1: Decompress the compressed string `hello, world` and convert the result to a string. Sample statement:
        
        ```
        -- The return value is hello, world.
        select cast(decompress(compress('hello, world')) as string);
        ```
        
    -   Example 2: The input parameter is null. Sample statement:
        
        ```
        -- The return value is null.
        select decompress(null);
        ```
        

## GET\_IDCARD\_AGE

-   Syntax
    
    ```
    get_idcard_age(<idcardno>)
    ```
    
-   Description
    
    Calculates the current age based on an ID card number. The age is calculated by subtracting the birth year from the current year.
    
-   Parameters
    
    idcardno: A required 15-digit or 18-digit ID card number of the STRING type. The function validates the ID card number based on the province code and the last digit. If the validation fails, this function returns null.
    
-   Return value
    
    Returns a value of the BIGINT type. If the input parameter is null, this function returns null.
    

## GET\_IDCARD\_BIRTHDAY

-   Syntax
    
    ```
    get_idcard_birthday(<idcardno>)
    ```
    
-   Description
    
    Retrieves the date of birth from an ID card number.
    
-   Parameters
    
    idcardno: A required 15-digit or 18-digit ID card number of the STRING type. The function validates the ID card number based on the province code and the last digit. If the validation fails, this function returns null.
    
-   Return value
    
    Returns a value of the DATETIME type. If the input parameter is null, this function returns null.
    

## GET\_IDCARD\_SEX

-   Syntax
    
    ```
    get_idcard_sex(<idcardno>)
    ```
    
-   Description
    
    Retrieves the gender from an ID card number. Valid return values are `M` (male) and `F` (female).
    
-   Parameters
    
    idcardno: A required 15-digit or 18-digit ID card number of the STRING type. The function validates the ID card number based on the province code and the last digit. If the validation fails, this function returns null.
    
-   Return value
    
    Returns a value of the STRING type. If the input parameter is null, this function returns null.
    

## GET\_USER\_ID

-   Syntax
    
    ```
    get_user_id()
    ```
    
-   Description
    
    Retrieves the ID of the current account, also known as the user ID (UID).
    
-   Parameters
    
    No parameters are required.
    
-   Return value
    
    Returns the ID of the current account.
    
-   Examples
    
    ```
    select get_user_id();
    -- The following result is returned.
    +------------+
    | _c0        |
    +------------+
    | 1117xxxxxxxx8519 |
    +------------+
    ```
    

## GREATEST

-   Syntax
    
    ```
    greatest(<var1>, <var2>[,...])
    ```
    
-   Description
    
    Returns the largest value from a list of input parameters.
    
-   Parameters
    
    var1 and var2: Required. The parameters must be of the BIGINT, DOUBLE, DECIMAL, DATETIME, or STRING type.
    
-   Return value
    
    -   Returns the largest value among the input parameters. If no implicit conversion is required, the return value has the same data type as the input parameters.
        
    -   A null value is treated as the minimum value.
        
    -   If the input parameters have different data types, parameters of the DOUBLE, BIGINT, DECIMAL, and STRING types are converted to the DOUBLE type for comparison. Parameters of the STRING and DATETIME types are converted to the DATETIME type for comparison. Implicit conversions of other data types are not supported.
        
    -   If `set odps.sql.hive.compatible=true;` is specified and an input parameter is null, this function returns null.
        

## HASH

-   Syntax
    
    -   If the MaxCompute project is in Hive-compatible mode, use the following syntax.
        
        ```
        int hash(<value1>, <value2>[, ...]);
        ```
        
    -   If the MaxCompute project is not in Hive-compatible mode, use the following syntax.
        
        ```
        bigint hash(<value1>, <value2>[, ...]);
        ```
        
-   Description
    
    Returns a hash value based on value1 and value2.
    
-   Parameters
    
    value1 and value2: Required. The parameters for which you want to perform a hash operation. The parameters can be of different data types. The supported data types differ between Hive-compatible mode and non-Hive-compatible mode:
    
    -   Hive-compatible mode: TINYINT, SMALLINT, INT, BIGINT, FLOAT, DOUBLE, DECIMAL, BOOLEAN, STRING, CHAR, VARCHAR, DATETIME, and DATE.
        
    -   Non-Hive-compatible mode: BIGINT, DOUBLE, BOOLEAN, STRING, and DATETIME.
        
    
    **Note**
    
    If the two input parameters are identical, the returned hash values are also identical. However, if the two returned hash values are identical, the input parameters are not necessarily identical due to the possibility of a hash collision.
    
-   Return value
    
    Returns a value of the INT or BIGINT type. If an input parameter is an empty string or null, 0 is returned.
    
-   Examples
    
    -   Example 1: Calculate the hash value of the input parameters that are of the same data type. Sample statement:
        
        ```
        -- The return value is 66.
        select hash(0, 2, 4);
        ```
        
    -   Example 2: Calculate the hash value of the input parameters that are of different data types. Sample statement:
        
        ```
        -- The return value is 97.
        select hash(0, 'a');
        ```
        
    -   Example 3: An input parameter is an empty string or is null. Sample statement:
        
        ```
        -- The return value is 0.
        select hash(0, null);
        -- The return value is 0.
        select hash(0, '');
        ```
        

## IF

-   Syntax
    
    ```
    if(<testCondition>, <valueTrue>, <valueFalseOrNull>)
    ```
    
-   Description
    
    Checks whether testCondition is true. If \`testCondition\` is true, this function returns valueTrue. Otherwise, it returns valueFalseOrNull.
    
-   Parameters
    
    -   testCondition: Required. The expression to be evaluated. The value must be of the BOOLEAN type.
        
    -   valueTrue: Required. The value to be returned if testCondition is true.
        
    -   valueFalseOrNull: The value to be returned if testCondition is false. You can set this parameter to null.
        
-   Return value
    
    The data type of the return value is the same as the data type of valueTrue or valueFalseOrNull.
    
-   Examples
    
    ```
    -- The return value is 200.
    select if(1=2, 100, 200); 
    ```
    

## LEAST

-   Syntax
    
    ```
    least(<var1>, <var2>[,...])
    ```
    
-   Description
    
    Returns the smallest value from a list of input parameters.
    
-   Parameters
    
    var: Required. The input parameters. The parameters must be of the BIGINT, DOUBLE, DECIMAL, DATETIME, or STRING type.
    
-   Return value
    
    -   Returns the smallest value among the input parameters. If no implicit conversion is required, the return value has the same data type as the input parameters.
        
    -   If a data type conversion occurs between the DOUBLE, BIGINT, and STRING types, a value of the DOUBLE type is returned. If a data type conversion occurs between the STRING and DATETIME types, a value of the DATETIME type is returned. If a data type conversion occurs among the DECIMAL, DOUBLE, BIGINT, and STRING types, a value of the DECIMAL type is returned. Implicit conversions of other data types are not supported.
        
    -   A null value is treated as the minimum value.
        
    -   If all input parameters are null, this function returns null.
        
-   Examples
    
    ```
    -- The return value is 2.
    select least(5, 2, 7);
    ```
    

## MAX\_PT

-   Syntax
    
    ```
    MAX_PT(<table_full_name>)
    ```
    
-   Description
    
    Returns the name of the largest partition that contains data in a partitioned table. The partitions are sorted alphabetically. The function then reads the data from this partition.
    
-   Precautions
    
    -   The `MAX_PT` function can also be implemented using standard SQL statements. For example, `SELECT * FROM table WHERE pt=MAX_PT("table");` can be rewritten as `SELECT * FROM table WHERE pt = (SELECT MAX(pt) FROM table);`.
        
        **Note**
        
        MaxCompute does not provide a `MIN_PT` function. To obtain the smallest partition that contains data in a partitioned table, you cannot use the SQL statement `SELECT * FROM table WHERE pt=MIN_PT("table");` in the same way that you use the `MAX_PT` function. Instead, use the standard SQL statement `SELECT * FROM table WHERE pt= (SELECT MIN(pt) FROM table);`.
        
    -   If all partitions in a table are empty, the `MAX_PT` function fails. Ensure that at least one partition contains data.
        
    -   The \`MAX\_PT\` function is supported for both OSS foreign tables and internal tables. The behavior of the function is the same for both table types.
        
-   Parameters
    
    table\_full\_name: A required value of the STRING type that specifies the name of the table. You must have read permissions on the table.
    
-   Return value
    
    Returns the name of the largest partition.
    
    **Note**
    
    A partition that is created using the `ALTER TABLE` statement but contains no data is not returned.
    
-   Examples
    
    -   Example 1: The tbl table is a partitioned table with partitions 20120901 and 20120902, both containing data. In the following statement, the `MAX_PT` function returns `'20120902'`. The MaxCompute SQL statement reads data from the `pt='20120902'` partition. Sample statement:
        
        ```
        SELECT * FROM tbl WHERE pt= MAX_PT('tbl');
        -- The preceding statement is equivalent to the following statement:
        SELECT * FROM tbl WHERE pt= (SELECT MAX(pt) FROM tbl);
        ```
        
    -   Example 2: If a table has multiple partition levels, use a standard SQL statement to retrieve data from the largest partition. Sample statement:
        
        ```
        SELECT * FROM table WHERE pt1 = (SELECT MAX(pt1) FROM table) AND pt2 = (SELECT MAX(pt2) FROM table WHERE pt1= (SELECT MAX(pt1) FROM table));
        ```
        

## NULLIF

-   Syntax
    
    ```
    T nullif(T <expr1>, T <expr2>)
    ```
    
-   Description
    
    Compares the values of expr1 and expr2. If the values are the same, this function returns null. If the values are different, this function returns the value of expr1.
    
-   Parameters
    
    expr1 and expr2: Required expressions of any data type. `T` specifies the input data type, which can be any data type supported by MaxCompute.
    
-   Return value
    
    Returns the value of expr1 or null.
    
-   Examples
    
    ```
    -- The return value is 2.
    select nullif(2, 3);
    -- The return value is null.
    select nullif(2, 2);
    -- The return value is 3.
    select nullif(3, null);
    ```
    

## NVL

-   Syntax
    
    ```
    nvl(T <value>, T <default_value>)
    ```
    
-   Description
    
    Returns default\_value if value is null. Otherwise, this function returns value. The \`value\` and \`default\_value\` parameters must be of the same data type.
    
-   Parameters
    
    -   value: The required input parameter. `T` specifies the input data type, which can be any data type supported by MaxCompute.
        
    -   default\_value: The required value that is used to replace null. The data type of \`default\_value\` must be the same as the data type of value.
        
-   Examples
    
    A table named `t_data` contains three columns: `c1 string`, `c2 bigint`, and `c3 datetime`. This table contains the following data.
    
    ```
    +----+------------+------------+
    | c1 | c2 | c3 |
    +----+------------+------------+
    | NULL | 20 | 2017-11-13 05:00:00 |
    | ddd | 25 | NULL |
    | bbb | NULL | 2017-11-12 08:00:00 |
    | aaa | 23 | 2017-11-11 00:00:00 |
    +----+------------+------------+
    ```
    
    After the `nvl` function is called, the null value in `c1` is replaced with \`00000\`, the null value in `c2` is replaced with \`0\`, and the null value in `c3` is replaced with a hyphen (`-`). Sample statement:
    
    ```
    select nvl(c1,'00000'),nvl(c2,0),nvl(c3,'-') from nvl_test;
    -- The following result is returned.
    +-----+------------+-----+
    | _c0 | _c1 | _c2 |
    +-----+------------+-----+
    | 00000 | 20 | 2017-11-13 05:00:00 |
    | ddd | 25 | - |
    | bbb | 0 | 2017-11-12 08:00:00 |
    | aaa | 23 | 2017-11-11 00:00:00 |
    +-----+------------+-----+
    ```
    

## ORDINAL

-   Syntax
    
    ```
    ordinal(bigint <nth>, <var1>, <var2>[,...])
    ```
    
-   Description
    
    Sorts the input variables in ascending order and returns the value at the nth rank.
    
-   Parameters
    
    -   nth: A required value of the BIGINT type that specifies the rank of the value to be returned. The rank starts from 1. If this parameter is null, the function returns null.
        
    -   var: The required values to be sorted. The values must be of the BIGINT, DOUBLE, DATETIME, or STRING type.
        
-   Return value
    
    -   Returns the value at the nth rank. If no implicit conversion is required, the return value has the same data type as the input parameters.
        
    -   If a data type conversion occurs between the DOUBLE, BIGINT, and STRING types, a value of the DOUBLE type is returned. If a data type conversion occurs between the STRING and DATETIME types, a value of the DATETIME type is returned. Implicit conversions of other data types are not supported.
        
    -   A null value is treated as the minimum value.
        
-   Examples
    
    ```
    -- The return value is 3.
    SELECT ordinal(3, 1, 3, 7, 5, 2, 4, 6); 
    ```
    

## PARTITION\_EXISTS

-   Syntax
    
    ```
    boolean partition_exists(string <table_name>， string... <partitions>)
    ```
    
-   Description
    
    Checks whether a specified partition exists in a table.
    
-   Parameters
    
    -   table\_name: The required table name of the STRING type. You can specify a project name in the table name, such as `my_proj.my_table`. If you do not specify a project name, the current project is used.
        
    -   partitions: The required partition names of the STRING type. You must specify the values of the partition key columns in the same sequence as they are defined in the table. The number of values must match the number of partition key columns.
        
-   Return value
    
    Returns a value of the BOOLEAN type. The function returns \`True\` if the specified partition exists. Otherwise, it returns \`False\`.
    
-   Examples
    
    ```
    -- Create a partitioned table named foo.
    create table foo (id bigint) partitioned by (ds string, hr string);
    -- Add partitions to the partitioned table foo.
    alter table foo add partition (ds='20190101', hr='1');
    -- Check whether partitions ds='20190101' and hr='1' exist. True is returned.
    select partition_exists('foo', '20190101', '1');
    ```
    

## SAMPLE

-   Syntax
    
    ```
    boolean sample(<x>, <y>, [<column_name1>, <column_name2>[,...]])
    ```
    
-   Description
    
    Samples all values read from column\_name based on x and y, and filters out the rows that do not meet the sampling condition.
    
-   Parameters
    
    -   x and y: x is required. \`x\` and \`y\` must be integer constants greater than 0 and of the BIGINT type. These parameters indicate that the values are divided into x portions based on a hash function, and the yth portion is selected.
        
        y is optional. If y is not specified, the first portion is selected by default, and you do not need to specify column\_name.
        
        An error is returned if x or y is of another data type, less than or equal to 0, or if y is greater than x. If x or y is null, the function returns null.
        
    -   column\_name: Optional. The name of the column on which to perform sampling. If this parameter is not specified, random sampling is performed based on the values of x and y. The column can be of any data type, and its value can be null. Implicit conversions are not performed. An error is returned if column\_name itself is null.
        
        **Note**
        
        -   To prevent data skew caused by null values, uniform hashing is performed on the null values in column\_name across x portions. If column\_name is not specified and the amount of data is small, the output may not be uniform. In this case, we recommend that you specify a column\_name to obtain a uniform output.
            
        -   Random sampling can be performed only on columns of the BIGINT, DATETIME, BOOLEAN, DOUBLE, STRING, BINARY, CHAR, and VARCHAR data types.
            
        
-   Return value
    
    Returns a value of the BOOLEAN type.
    
-   Examples
    
    The `tbla` table contains the `cola` column.
    
    ```
    -- The values in the cola column fall into four portions based on the hash function, and the first portion is used. True is returned.
    select * from tbla where sample (4, 1 , cola);
    -- The values in each row are randomly hashed to four portions, and the second portion is used. True is returned.
    select * from tbla where sample (4, 2);
    ```
    

## SHA

-   Syntax
    
    ```
    string sha(string|binary <expr>)
    ```
    
-   Description
    
    Calculates the SHA-1 hash value of expr, which must be of the STRING or BINARY type, and returns the hash value as a hexadecimal string.
    
-   Parameters
    
    expr: A required value of the STRING or BINARY type.
    
-   Return value
    
    Returns a value of the STRING type. If the input parameter is null, this function returns null.
    
-   Examples
    
    -   Example 1: Calculate the SHA hash value of the string `ABC`. Sample statement:
        
        ```
        -- The return value is 3c01bdbb26f358bab27f267924aa2c9a03fcfdb8.
        select sha('ABC');
        ```
        
    -   Example 2: The input parameter is null. Sample statement:
        
        ```
        -- The return value is null.
        select sha(null);
        ```
        

## SHA1

-   Syntax
    
    ```
    string sha1(string|binary <expr>)
    ```
    
-   Description
    
    Calculates the SHA-1 hash value of expr, which must be of the STRING or BINARY type, and returns the hash value as a hexadecimal string.
    
-   Parameters
    
    expr: A required value of the STRING or BINARY type.
    
-   Return value
    
    Returns a value of the STRING type. If the input parameter is null, this function returns null.
    
-   Examples
    
    -   Example 1: Calculate the SHA-1 hash value of the string `ABC`. Sample statement:
        
        ```
        -- The return value is 3c01bdbb26f358bab27f267924aa2c9a03fcfdb8.
        select sha1('ABC');
        ```
        
    -   Example 2: The input parameter is null. Sample statement:
        
        ```
        -- The return value is null.
        select sha1(null);
        ```
        

## SHA2

-   Syntax
    
    ```
    string sha2(string|binary <expr>, bigint <number>)
    ```
    
-   Description
    
    Calculates the SHA-2 hash value of expr, which must be of the STRING or BINARY type, and returns the hash value in the format specified by number.
    
-   Parameters
    
    -   expr: A required value of the STRING or BINARY type.
        
    -   number: A required value of the BIGINT type that specifies the hash bit length. Valid values are 224, 256, 384, 512, and 0. The return value for 256 is the same as the return value for 0.
        
-   Return value
    
    Returns a value of the STRING type. The return value is determined by the following rules:
    
    -   If an input parameter is null, this function returns null.
        
    -   If the value of number is not within the valid range, this function returns null.
        
    
-   Examples
    
    -   Example 1: Calculate the SHA-2 hash value of the string `ABC`. Sample statement:
        
        ```
        -- The return value is b5d4045c3f466fa91fe2cc6abe79232a1a57cdf104f7a26e716e0a1e2789df78.
        select sha2('ABC', 256);
        ```
        
    -   Example 2: An input parameter is null. Sample statement:
        
        ```
        -- The return value is null.
        select sha2('ABC', null);
        ```
        

## STACK

-   Syntax
    
    ```
    stack(n, expr1, ..., exprk) 
    ```
    
-   Description
    
    Splits `expr1, ..., exprk` into \`n\` rows. Unless otherwise specified, the output columns are named `col0, col1...` by default.
    
-   Parameters
    
    -   n: Required. The number of rows to be created.
        
    -   expr: The required expressions to be split. `expr1, ..., exprk` must be of an integer type. The number of expressions must be an integer multiple of n so that they can be split into n complete rows. Otherwise, an error is returned.
        
-   Return value
    
    Returns a dataset of \`n\` rows. The number of columns is the total number of expressions divided by \`n\`.
    
-   Examples
    
    ```
    -- Split the parameter group of 1, 2, 3, 4, 5, 6 into three rows.
    select stack(3, 1, 2, 3, 4, 5, 6);
    -- The following result is returned.
    +------+------+
    | col0 | col1 |
    +------+------+
    | 1    | 2    |
    | 3    | 4    |
    | 5    | 6    |
    +------+------+
    
    -- Split 'A',10,date '2015-01-01','B',20,date '2016-01-01' into two rows.
    select stack(2,'A',10,date '2015-01-01','B',20,date '2016-01-01') as (col0,col1,col2);
    -- The following result is returned.
    +------+------+------+
    | col0 | col1 | col2 |
    +------+------+------+
    | A    | 10   | 2015-01-01 |
    | B    | 20   | 2016-01-01 |
    +------+------+------+
    
    -- Split a, b, c, and d into two rows. If the source table contains multiple rows, this function is called for each row.
    select stack(2,a,b,c,d) as (col,value)
    from values 
        (1,1,2,3,4),
        (2,5,6,7,8),
        (3,9,10,11,12),
        (4,13,14,15,null)
    as t(key,a,b,c,d);
    -- The following result is returned.
    +------+-------+
    | col  | value |
    +------+-------+
    | 1    | 2     |
    | 3    | 4     |
    | 5    | 6     |
    | 7    | 8     |
    | 9    | 10    |
    | 11   | 12    |
    | 13   | 14    |
    | 15   | NULL  |
    +------+-------+
    
    -- Use this function with the lateral view clause.
    select tf.* from (select 0) t lateral view stack(2,'A',10,date '2015-01-01','B',20, date '2016-01-01') tf as col0,col1,col2;
    -- The following result is returned.
    +------+------+------+
    | col0 | col1 | col2 |
    +------+------+------+
    | A    | 10   | 2015-01-01 |
    | B    | 20   | 2016-01-01 |
    +------+------+------+
    ```
    

## STR\_TO\_MAP

-   Syntax
    
    ```
    str_to_map([string <mapDupKeyPolicy>,] <text> [, <delimiter1> [, <delimiter2>]])
    ```
    
-   Description
    
    Splits text into key-value pairs using delimiter1 and then separates the keys from the values in each pair using delimiter2.
    
-   Parameters
    
    -   mapDupKeyPolicy: optional. A value of the STRING type. This parameter specifies the method that is used to process duplicate keys. Valid values:
        
        -   exception: An error is returned.
            
        -   last\_win: The latter key overwrites the former key.
            
        
        You can also specify the `odps.sql.map.key.dedup.policy` parameter at the session level to configure the method that is used to process duplicate keys. For example, you can set `odps.sql.map.key.dedup.policy` to exception. If you do not specify this parameter, the default value last\_win is used.
        
        **Note**
        
        The behavior implementation of MaxCompute is determined based on mapDupKeyPolicy. If you do not specify mapDupKeyPolicy, the value of `odps.sql.map.key.dedup.policy` is used.
        
    -   text: The required string to be split. The value must be of the STRING type.
        
    -   delimiter1: An optional delimiter of the STRING type. If this parameter is not specified, a comma (`,`) is used by default.
        
    -   delimiter2: An optional delimiter of the STRING type. If this parameter is not specified, an equal sign (`=`) is used by default.
        
        **Note**
        
        If the delimiter is a regular expression or a special character, you must escape it with two backslashes (\\\\). Special characters that can be used as delimiters include colons (:), periods (.), question marks (?), plus signs (+), and asterisks (\*).
        
-   Return value
    
    Returns a value of the `map<string, string>` type. The function splits the text string using delimiter1 and delimiter2.
    
-   Examples
    
    ```
    -- The return value is {test1:1, test2:2}.
    select str_to_map('test1&1-test2&2','-','&');
    -- The return value is {test1:1, test2:2}.
    select str_to_map("test1.1,test2.2", ",", "\\.");
    -- The return value is {test1:1, test2:3}.
    select str_to_map("test1.1,test2.2,test2.3", ",", "\\.");
    ```
    

## TABLE\_EXISTS

-   Syntax
    
    ```
    boolean table_exists(string <table_name>)
    ```
    
-   Description
    
    Checks whether a specified table exists.
    
-   Parameters
    
    table\_name: The required name of the table, which is of the STRING type. You can specify a project name in the table name, such as `my_proj.my_table`. If you do not specify a project name, the current project is used.
    
-   Return value
    
    Returns a value of the BOOLEAN type. The function returns \`True\` if the specified table exists. Otherwise, it returns \`False\`.
    
-   Examples
    
    ```
    -- Use this function for the list in the SELECT statement.
    select if(table_exists('abd'), col1, col2) from src;
    ```
    

## TRANS\_ARRAY

-   Limits
    
    -   All columns that are used as `key`s must be placed before the columns that are to be transposed.
        
    -   Only one User-Defined Table Function (UDTF) is allowed in a `select` statement. Other columns are not allowed.
        
    -   This function cannot be used with the `group by`, `cluster by`, `distribute by`, or `sort by` clause.
        
-   Syntax
    
    ```
    trans_array (<num_keys>, <separator>, <key1>,<key2>,…,<col1>,<col2>,<col3>) as (<key1>,<key2>,...,<col1>, <col2>)
    ```
    
-   Description
    
    Transposes one row of data into multiple rows. This UDTF transposes a column that contains an array separated by a fixed delimiter into multiple rows.
    
-   Parameters
    
    -   num\_keys: A required constant of the BIGINT type. The value must be greater than or equal to `0`. This parameter specifies the number of columns to be used as `key`s when you transpose one row into multiple rows.
        
    -   separator: A required constant of the STRING type that is used to split a string into multiple elements. An error is returned if this parameter is an empty string.
        
    -   keys: Required. The columns to be used as the `key` for transposition. The number of keys is specified by num\_keys. If num\_keys specifies that all columns are used as the `key` (that is, num\_keys is equal to the total number of columns), only one row is returned.
        
    -   cols: Required. This parameter specifies the array that you want to transpose into rows. All columns that follow `keys` are considered arrays to be transposed. The value of this parameter must be of the STRING type to store arrays in a string format, such as `Hangzhou;Beijing;Shanghai`. The values in this array are separated by semicolons (`;`).
        
-   Return value
    
    Returns transposed rows. The new column name is specified by `as`. The data types of columns that are used as `key`s remain unchanged. All other columns are of the STRING type. The number of transposed rows is determined by the array with the most elements. If other arrays have fewer elements, null is used for the missing values.
    
-   Examples
    
    -   Example 1: The `t_table` table contains the following data.
        
        ```
        +----------+----------+------------+
        | login_id | login_ip | login_time |
        +----------+----------+------------+
        | wangwangA | 192.168.0.1,192.168.0.2 | 20120101010000,20120102010000 |
        | wangwangB | 192.168.45.10,192.168.67.22,192.168.6.3 | 20120111010000,20120112010000,20120223080000 |
        +----------+----------+------------+
        -- Execute the SQL statement.
        select trans_array(1, ",", login_id, login_ip, login_time) as (login_id,login_ip,login_time) from t_table;
        -- The following result is returned.
        +----------+----------+------------+
        | login_id | login_ip | login_time |
        +----------+----------+------------+
        | wangwangB | 192.168.45.10 | 20120111010000 |
        | wangwangB | 192.168.67.22 | 20120112010000 |
        | wangwangB | 192.168.6.3 | 20120223080000 |
        | wangwangA | 192.168.0.1 | 20120101010000 |
        | wangwangA | 192.168.0.2 | 20120102010000 |
        +----------+----------+------------+
        
        -- If the table contains the following data:
        Login_id LOGIN_IP LOGIN_TIME 
        wangwangA 192.168.0.1,192.168.0.2 20120101010000
        -- The value null is added to supplement the array in which data is insufficient. 
        Login_id Login_ip Login_time 
        wangwangA 192.168.0.1 20120101010000
        wangwangA 192.168.0.2 NULL
        ```
        
    -   Example 2: The mf\_fun\_array\_test\_t table contains the following data.
        
        ```
        +------------+------------+------------+------------+
        | id         | name       | login_ip   | login_time |
        +------------+------------+------------+------------+
        | 1          | Tom        | 192.168.100.1,192.168.100.2 | 20211101010101,20211101010102 |
        | 2          | Jerry      | 192.168.100.3,192.168.100.4 | 20211101010103,20211101010104 |
        +------------+------------+------------+------------+
        
        -- Use two keys, id and name, to transpose the array. Execute the SQL statement.
        select trans_array(2, ",", Id,Name, login_ip, login_time) as (Id,Name,login_ip,login_time) from mf_fun_array_test_t;
        -- The following result is returned. The data is split and grouped by the keys id and name.
        +------------+------------+------------+------------+
        | id         | name       | login_ip   | login_time |
        +------------+------------+------------+------------+
        | 1          | Tom        | 192.168.100.1 | 20211101010101 |
        | 1          | Tom        | 192.168.100.2 | 20211101010102 |
        | 2          | Jerry      | 192.168.100.3 | 20211101010103 |
        | 2          | Jerry      | 192.168.100.4 | 20211101010104 |
        +------------+------------+------------+------------+
        ```
        

## TRANS\_COLS

-   Limits
    
    -   All columns that are used as `key`s must be placed before the columns that are to be transposed.
        
    -   Only one User-Defined Table Function (UDTF) is allowed in a `select` statement. Other columns are not allowed.
        
-   Syntax
    
    ```
    trans_cols (<num_keys>, <key1>,<key2>,…,<col1>, <col2>,<col3>) as (<idx>, <key1>,<key2>,…,<col1>, <col2>)
    ```
    
-   Description
    
    Transposes one row of data into multiple rows. This UDTF transposes columns into rows.
    
-   Parameters
    
    -   num\_keys: A required constant of the BIGINT type. The value must be greater than or equal to `0`. This parameter specifies the number of columns to be used as keys when you transpose one row into multiple rows.
        
    -   keys: The required columns to use as keys for the transpose operation. The number of keys is specified by num\_keys. If num\_keys specifies that all columns are used as keys (that is, num\_keys is equal to the total number of columns), only one row is returned.
        
    -   idx: Required. The ID of a row after it is transposed.
        
    -   cols: Required. The columns that you want to transpose into rows.
        
-   Return value
    
    Returns transposed rows. The new column name is specified by `as`. The first output column is the transposed subscript, which starts from 1. The data types of the columns that are used as keys remain unchanged, and the data types of other columns also remain unchanged.
    
-   Examples
    
    The `t_table` table contains the following data.
    
    ```
    +----------+----------+------------+
    | Login_id | Login_ip1 | Login_ip2 |
    +----------+----------+------------+
    | wangwangA | 192.168.0.1 | 192.168.0.2 |
    +----------+----------+------------+
    -- Execute the SQL statement.
    select trans_cols(1, login_id, login_ip1, login_ip2) as (idx, login_id, login_ip) from t_table;
    -- The following result is returned.
    idx    login_id    login_ip
    1    wangwangA    192.168.0.1
    2    wangwangA    192.168.0.2
    ```
    

## UNBASE64

-   Syntax
    
    ```
    binary unbase64(string <str>)
    ```
    
-   Description
    
    Converts a Base64-encoded string str to a binary value.
    
-   Parameters
    
    str: A required Base64-encoded string of the STRING type to be converted.
    
-   Return value
    
    Returns a value of the BINARY type. If the input parameter is null, this function returns null.
    
-   Examples
    
    -   Example 1: Convert the string `YWxpYmFiYQ==` to a binary value. Sample statement:
        
        ```
        -- The return value is alibaba.
        select unbase64('YWxpYmFiYQ==');
        ```
        
    -   Example 2: The input parameter is null. Sample statement:
        
        ```
        -- The return value is null.
        select unbase64(null);
        ```
        

## UNIQUE\_ID

-   Syntax
    
    ```
    string unique_id()
    ```
    
-   Description
    
    Returns a unique ID, such as `29347a88-1e57-41ae-bb68-a9edbdd9****_1`. This function is more efficient than the [UUID](#section-9c2-6h7-cbg) function, and the returned ID is longer. Compared with the \`UUID\` function, this function returns a unique ID that contains a suffix, such as `_1`, which consists of an underscore (\_) and a digit.
    

## UUID

-   Syntax
    
    ```
    string uuid()
    ```
    
-   Description
    
    Returns a random ID, such as `29347a88-1e57-41ae-bb68-a9edbdd9****`.
    
    **Note**
    
    The return value is a random globally unique identifier (GUID), which is unique in most cases.
