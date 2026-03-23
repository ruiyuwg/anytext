If you want to perform operations on strings stored in a table, such as truncating, concatenating, converting, comparing, and searching strings, you can use string functions that are supported by MaxCompute SQL. This topic describes the syntax and parameters of string functions that are supported by MaxCompute SQL. This topic also provides examples on how to use string functions.

The following table describes the string functions that are supported by MaxCompute SQL.

**Function**

**Description**

[ASCII](#section-i8s-84b-fux)

Returns the ASCII code of the first character in the specified string.

[CHAR\_MATCHCOUNT](#section-mnd-gvz-vdb)

Calculates the number of characters of String A that appear in String B.

[CHR](#section-s5r-lwz-vdb)

Converts an ASCII code into a character.

[CONCAT](#section-szv-n0t-3an)

Concatenates all specified strings and returns the final string.

[CONCAT\_WS](#section-xnf-sj1-wdb)

Concatenates all input strings in an array by using the specified delimiter.

[DECODE](#33da3e801983p)

Decodes a string in the specified encoding format.

[ENCODE](#section-1lr-sd9-05c)

Encodes a string in the specified encoding format.

[FIND\_IN\_SET](#section-lb5-wjy-vtt)

Returns the position of the specified string among multiple strings that are separated by commas (,).

[FORMAT\_NUMBER](#section-hia-g4n-z7l)

Converts a number into a string in the specified format.

[FROM\_CHARSET](#d1e5951ba7k58)

Converts binary data in the specified encoding format into a UTF-8 encoded string.

[FROM\_JSON](#section-143-hgq-bc6)

Returns data of the ARRAY, MAP, or STRUCT type based on a given JSON string and a given output format.

[GET\_JSON\_OBJECT](#79351b4a48pm2)

Extracts a single string from a standard JSON string by using the specified method.

[INITCAP](#section-psd-o8i-991)

Converts a string into a string in the specified format. In the format, words are in title case and are separated by spaces. In title case, the first letter of each word is capitalized, and the other letters of each word are in lowercase.

[INSTR](#section-vft-yxz-vdb)

Returns the position of String A in String B.

[IS\_ENCODING](#section-qdj-kyz-vdb)

Determines whether a string can be converted from one character set into another character set.

[JSON\_TUPLE](#0e3e9c600a6fd)

Extracts strings from a standard JSON string based on a set of input keys.

[KEYVALUE](#section-lnq-tyz-vdb)

Splits a string into key-value pairs, separates the key-value pairs, and then returns the value that corresponds to the specified key.

[KEYVALUE\_TUPLE](#section-cwa-5c1-642)

Splits a string into key-value pairs, separates the key-value pairs, and then returns the values that correspond to the keys.

[LENGTH](#section-ewt-jzz-vdb)

Calculates the length of a string.

[LENGTHB](#section-o3y-pzz-vdb)

Calculates the length of a string in bytes.

[LOCATE](#section-8r9-nzm-7ry)

Returns the position of the specified string in another string.

[LPAD](#section-mcj-zj1-wdb)

Left pads a string to the specified length.

[LTRIM](#section-ete-j9a-onl)

Removes the characters from the left side of a string.

[MASK\_HASH](#section-qel-rna-261)

Returns a hash value based on a string expression.

[MD5](#section-hbw-xzz-vdb)

Returns the MD5 value of a string.

[PARSE\_URL](#section-x6p-fbt-3ep)

Parses a URL and returns the specified part of the URL.

[PARSE\_URL\_TUPLE](#section-y37-hco-z7r)

Parses a URL and returns multiple parts of the URL.

[REGEXP\_COUNT](#section-ctz-0l2-qyd)

Returns the number of substrings that match the specified pattern from the specified position.

[REGEXP\_EXTRACT](#section-ms1-lc1-wdb)

Splits a string into groups based on the specified pattern and returns the string in the specified group.

[REGEXP\_EXTRACT\_ALL](#section-9ar-8ix-qow)

Finds all substrings that match the pattern of a regular expression in a string and returns the substrings as an array.

[REGEXP\_INSTR](#section-jpn-5c1-wdb)

Returns the start or end position of a substring that starts at the specified position and matches the specified pattern for the specified number of times.

[REGEXP\_REPLACE](#section-k2w-2d1-wdb)

Uses a string to replace a substring of another string if the substring matches the specified pattern for the specified number of times.

[REGEXP\_SUBSTR](#section-k5b-qd1-wdb)

Returns a substring in a string that matches the specified pattern for the specified number of times from the specified position.

[REPEAT](#section-dyt-hgm-1z7)

Returns a string that repeats the specified string for the specified number of times.

[REPLACE](#section-ln3-5k1-wdb)

Replaces a substring in String A that matches String B with another substring.

[REVERSE](#section-9yy-9kb-94l)

Returns the characters of a string in reverse order.

[RPAD](#section-k1f-3k1-wdb)

Right pads a string to the specified length.

[RTRIM](#section-imh-j3t-whc)

Removes the characters from the right side of a string.

[SOUNDEX](#section-z2z-1l1-wdb)

Converts a string into a string of the SOUNDEX type.

[SPACE](#section-899-dqw-ffv)

Generates a space string.

[SPLIT](/help/en/maxcompute/user-guide/split)

Returns an array after the string is split with a delimiter.

[SPLIT\_PART](#section-ecy-k21-wdb)

Uses a delimiter to split a string into substrings and returns a substring of the specified part of the string.

[SUBSTR](#section-nkj-1f1-wdb)

Returns a substring that has the specified length from the specified position of a string. The string is of the STRING type.

[SUBSTRING](#section-s1h-3f1-wdb)

Returns a substring that has the specified length from the specified position of a string. The string is of the STRING or BINARY type.

[SUBSTRING\_INDEX](#section-uw3-hl1-wdb)

Truncates a string from the specified delimiter.

[TO\_CHAR](#section-mdh-lbk-ggy)

Converts data of the BOOLEAN, BIGINT, DECIMAL, or DOUBLE type into the STRING type.

[TO\_JSON](#section-vs9-tlq-6e3)

Converts data of a complex data type into a JSON string.

[TOLOWER](#section-nzz-lg1-wdb)

Converts uppercase letters in a string into lowercase letters.

[TOUPPER](#section-qvg-sg1-wdb)

Converts lowercase letters in a string into uppercase letters.

[TRANSLATE](#section-bk1-nl1-wdb)

Replaces the part of String A that appears in String B with String C.

[TRIM](#section-mf1-3h1-wdb)

Removes the characters from both of the left and right sides of a string.

[URL\_DECODE](#section-hor-9cn-ovu)

Converts an input string that is in the `application/x-www-form-urlencoded MIME` format into a standard string.

[URL\_ENCODE](#section-57t-23k-068)

Encodes the input string in the `application/x-www-form-urlencoded MIME` format and returns the encoded string.

## Precautions

MaxCompute V2.0 provides additional functions. If the functions that you use involve new data types that are supported in the MaxCompute V2.0 data type edition, you must execute the SET statement to enable the MaxCompute V2.0 data type edition. The new data types include TINYINT, SMALLINT, INT, FLOAT, VARCHAR, TIMESTAMP, and BINARY.

-   Session level: To use the MaxCompute V2.0 data type edition, you must add `set odps.sql.type.system.odps2=true;` before the SQL statement that you want to execute, and commit and execute them together.
    
-   Project level: The project owner can enable the MaxCompute V2.0 data type edition for the project based on the project requirements. The configuration takes effect after 10 to 15 minutes. To enable the MaxCompute V2.0 data type edition at the project level, run the following command:
    
    ```
    setproject odps.sql.type.system.odps2=true; 
    ```
    
    For more information about `setproject`, see [Project operations](/help/en/maxcompute/user-guide/project-operations#concept-qg3-s32-vdb). For more information about the precautions that you must take when you enable the MaxCompute V2.0 data type edition at the project level, see [Data type editions](/help/en/maxcompute/user-guide/data-type-editions#concept-jhp-4bb-5db).
    

## **Limits**

The following functions support only English characters:

-   TRIM, RTRIM, and LTRIM: The value of the trimChars parameter can contain only English characters.
    
-   REVERSE: This function supports only English characters in the Hive-compatible data type edition.
    
-   SOUNDEX: This function supports only English characters.
    
-   TOLOWER: This function is used to convert English characters in a string into lowercase characters.
    
-   TOUPPER: This function is used to convert English characters in a string into uppercase characters.
    
-   INITCAP: This function is used to convert the first letter of each word in English in a string into an uppercase letter and the other letters of each word into lowercase characters.
    

## ASCII

-   Syntax
    
    ```
    bigint ascii(string <str>)
    ```
    
-   Description
    
    Returns the ASCII code of the first character in a string specified by str.
    
-   Parameters
    
    str: required. A value of the STRING type. If the input value is of the BIGINT, DOUBLE, DECIMAL, or DATETIME type, the value is implicitly converted into a value of the STRING type before calculation.
    
-   Return value
    
    A value of the BIGINT type is returned. The return value varies based on the following rules:
    
    -   If the value of str is not of the STRING, BIGINT, DOUBLE, DECIMAL, or DATETIME type, an error is returned.
        
    -   If the value of str is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Return the ASCII code of the first character in the string `abcde`. Sample statement:
        
        ```
        -- The return value is 97. 
        select ascii('abcde'); 
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select ascii(null);
        ```
        

## CHAR\_MATCHCOUNT

-   Syntax
    
    ```
    bigint char_matchcount(string <str1>, string <str2>)
    ```
    
-   Description
    
    Returns the number of characters that belong to str1 and appear in str2.
    
-   Parameters
    
    str1 and str2: required. Values of the STRING type. The values must be valid UTF-8 strings. If invalid characters (non-Unicode-encoded characters) are found during the comparison of the two strings, this function returns a negative value.
    
-   Return value
    
    A value of the BIGINT type is returned. If the value of str1 or str2 is null, null is returned.
    
-   Examples
    
    -   Example 1: Calculate the number of characters that belong to the string `aabc` and appear in the string `abcde`. Sample statement:
        
        ```
        -- The return value is 4. 
        select char_matchcount('aabc','abcde');
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select char_matchcount(null,'abcde');
        ```
        

## CHR

-   Syntax
    
    ```
    string chr(bigint <ascii>)
    ```
    
-   Description
    
    Converts the specified ASCII code into characters.
    
-   Parameters
    
    ascii: required. A value of the BIGINT type. This value specifies the ASCII code. Valid values: 0 to 127. If the input value is of the STRING, DOUBLE, or DECIMAL type, it is implicitly converted into a value of the BIGINT type before calculation.
    
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of ascii is not within the valid range, an error is returned.
        
    -   If the value of ascii is not of the BIGINT, STRING, DOUBLE, or DECIMAL type, an error is returned.
        
    -   If the value of ascii is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Convert the ASCII code `100` into characters. Sample statement:
        
        ```
        -- The return value is d. 
        select chr(100);
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select chr(null);
        ```
        
    -   Example 3: The input value is a character of the STRING type. Sample statement:
        
        ```
        -- The input value is implicitly converted into a value of the BIGINT type before calculation. The return value is d. 
        select chr('100');
        ```
        

## CONCAT

-   Syntax
    
    ```
    array<T> concat(array<T> <a>, array<T> <b>[,...])
    string concat(string <str1>, string <str2>[,...])
    ```
    
-   Description
    
    -   Arrays as inputs: Concatenates all elements of multiple arrays and returns a new array.
        
    -   Strings as inputs: Concatenates multiple strings and returns a new string.
        
-   Parameters
    
    -   a and b: required. These parameters specify arrays. `T` in `array<T>` specifies the data type of the elements in the arrays. The elements can be of any data type. The elements in Array a and the elements in Array b must be of the same data type. The null elements are also involved in the operation.
        
    -   str1 and str2: required. Values of the STRING type. If the input values are of the BIGINT, DOUBLE, DECIMAL, or DATETIME type, they are implicitly converted into values of the STRING type before calculation. If the input values are of other data types, an error is returned.
        
-   Return value
    
    -   A value of the ARRAY type is returned. If one of the input arrays is null, null is returned.
        
    -   A value of the STRING type is returned. If no input parameters are configured or an input parameter is set to null, null is returned.
        
-   Examples
    
    -   Example 1: Concatenate all elements of `array(10, 20)` and `array(20, -20)`. Sample statement:
        
        ```
        -- The return value is [10, 20, 20, -20]. 
        select concat(array(10, 20), array(20, -20));
        ```
        
    -   Example 2: One of the input arrays contains a null element. Sample statement:
        
        ```
        -- The return value is [10, null, 20, -20]. 
        select concat(array(10, null), array(20, -20));
        ```
        
    -   Example 3: One of the input arrays is null. Sample statement:
        
        ```
        -- The return value is null. 
        select concat(array(10, 20), null);
        ```
        
    -   Example 4: Concatenate strings `aabc` and `abcde`. Sample statement:
        
        ```
        -- The return value is aabcabcde. 
        select concat('aabc','abcde');
        ```
        
    -   Example 5: The input is empty. Sample statement:
        
        ```
        -- The return value is null. 
        select concat();
        ```
        
    -   Example 6: One of the input strings is null. Sample statement:
        
        ```
        -- The return value is null. 
        select concat('aabc', 'abcde', null);
        ```
        

## CONCAT\_WS

-   Syntax
    
    ```
    string concat_ws(string <separator>, string <str1>, string <str2>[,...])
    string concat_ws(string <separator>, array<string> <a>)
    ```
    
-   Description
    
    Concatenates all strings in a parameter or elements in an array by using the specified delimiter and returns the result. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    -   separator: required. A delimiter of the STRING type.
        
    -   str1 and str2: At least two strings must be specified. Values of the STRING type. If the input value is of the BIGINT, DECIMAL, DOUBLE, or DATETIME type, the value is implicitly converted into a value of the STRING type before calculation.
        
    -   a: required. This parameter specifies an array. The elements in the array are of the STRING type.
        
-   Return value
    
    A value of the STRING or STRUCT type is returned. The return value varies based on the following rules:
    
    -   If the value of str1 or str2 is not of the STRING, BIGINT, DECIMAL, DOUBLE, or DATETIME type, an error is returned.
        
    -   If no input parameters are available or an input parameter is set to null, null is returned.
        
    
-   Examples
    
    -   Example 1: Concatenate the strings `name` and `hanmeimei` by using a colon (`:`). Sample statement:
        
        ```
        -- The return value is name:hanmeimei. 
        select concat_ws(':','name','hanmeimei');
        ```
        
        \-
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select concat_ws(':','avg',null,'34');
        ```
        
    -   Example 3: Concatenate the elements in the `array('name', 'hanmeimei')` array by using `colons (:)`. Sample statement:
        
        ```
        -- The return value is name:hanmeimei. 
        select concat_ws(':',array('name', 'hanmeimei'));
        ```
        

## **DECODE**

-   Syntax
    
    ```
    STRING DECODE(BINARY <str>, STRING <charset>)
    ```
    
-   Description
    
    Decodes string **str** based on the format specified by **charset**.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    str
    
    Yes
    
    The string that you want to decode. The string is of the BINARY type.
    
    charset
    
    Yes
    
    The encoding format. The value is of the STRING type. Valid values: UTF-8, UTF-16, UTF-16LE, UTF-16BE, ISO-8859-1, and US-ASCII.
    
    **Note**
    
    The ISO-8859-1 and US-ASCII encoding formats can be used to encode or decode only English characters.
    
-   Return value
    
    A value of the STRING type is returned. If the value of **str** or **charset** is NULL, the return value is NULL.
    
-   Examples
    
    -   Example 1: Encode and decode the string English Sample based on the UTF-8 format. Sample statement:
        
        ```
        -- Encode and decode the string.
        SELECT DECODE(ENCODE("English Sample","UTF-8"), "UTF-8");
        ```
        
        The following result is returned:
        
        ```
        +-----+
        | _c0 |
        +-----+
        | English Sample |
        +-----+
        ```
        
    -   Example 2: Set either of the input parameters to NULL. Sample statement:
        
        ```
        SELECT DECODE(ENCODE("English Sample","UTF-8"), NULL);
        ```
        
        The following result is returned:
        
        ```
        +-----+
        | _c0 |
        +-----+
        | NULL |
        +-----+
        ```
        

## ENCODE

-   Syntax
    
    ```
    binary encode(string <str>, string <charset>)
    ```
    
-   Description
    
    Encodes string str in the format specified by charset.
    
-   Parameters
    
    -   str: required. A value of the STRING type. This parameter specifies the string that you want to encode.
        
    -   charset: required. A value of the STRING type. This parameter specifies the encoding format. Valid values: UTF-8, UTF-16, UTF-16LE, UTF-16BE, ISO-8859-1, and US-ASCII.
        
-   Return value
    
    A value of the BINARY type is returned. If the value of str or charset is null, null is returned.
    
-   Examples
    
    -   Example 1: Encode string `abc` in the `UTF-8` format. Sample statement:
        
        ```
        -- The return value is abc. 
        select encode("abc", "UTF-8");
        ```
        
    -   Example 2: Encode string `abc` in the `UTF-16BE` format. Sample statement:
        
        ```
        -- The return value is =00a=00b=00c. 
        select encode("abc", "UTF-16BE");
        ```
        
    -   Example 3: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select encode("abc", null);
        ```
        

## FIND\_IN\_SET

-   Syntax
    
    ```
    BIGINT FIND_IN_SET(STRING <str1>, STRING <str2>[, STRING <delimiter>])
    ```
    
-   Description
    
    Returns the position of substring str1 in string str2. The substrings in string str2 are separated by delimiter. The first position is 1.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    str1
    
    Yes
    
    A value of the STRING type. This parameter specifies the substring that you want to search for.
    
    str2
    
    Yes
    
    A value of the STRING type. This parameter specifies a string in which substrings are separated by delimiter.
    
    delimiter
    
    No
    
    A value of the STRING type. The default delimiter is a comma (,). The delimiter can be a single character or a string.
    
-   Return value
    
    A value of the BIGINT type is returned. The return value varies based on the following rules:
    
    -   If str2 does not contain str1 or str1 contains the delimiter, 0 is returned.
        
    -   If the value of str1 or str2 is `NULL`, `NULL` is returned.
        
    
-   Examples
    
    -   Example 1: Return the position of substring `ab` in string `abc,hello,ab,c` which is separated by commas (,). Sample statement:
        
        ```
        SELECT FIND_IN_SET('ab', 'abc,hello,ab,c') AS pos;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | pos        |
        +------------+
        | 3          |
        +------------+
        ```
        
    -   Example 2: Return the position of substring `hi` in `abc,hello,ab,c` which is separated by commas (,). Sample statement:
        
        ```
        SELECT FIND_IN_SET('hi', 'abc,hello,ab,c') AS pos;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | pos        |
        +------------+
        | 0          |
        +------------+
        ```
        
    -   Example 3: Return the position of substring ab in `abc_hello_ab_c` which is separated by underscores (\_). Sample statement:
        
        ```
        SELECT FIND_IN_SET('ab', 'abc_hello_ab_c', '_') AS pos;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | pos        |
        +------------+
        | 3          |
        +------------+
        ```
        
    -   Example 4: An input parameter is set to null. Sample statement:
        
        ```
        SELECT FIND_IN_SET(null, 'abc,hello,ab,c') AS pos;SELECT FIND_IN_SET(null, 'abc,hello,ab,c') AS pos;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | pos        |
        +------------+
        | NULL       |
        +------------+
        ```
        

## FORMAT\_NUMBER

-   Syntax
    
    ```
    string format_number(float|double|decimal <expr1>, int <expr2>)
    ```
    
-   Description
    
    Converts the value of expr1 into a string that meets the format specified by expr2.
    
-   Parameters
    
    -   expr1: required. A value of the FLOAT, DOUBLE, or DECIMAL type. This parameter specifies the expression that you want to format.
        
    -   expr2: required. A value of the INT type. Valid values: 0 to 340. This parameter specifies the number of decimal places that you want to retain. This parameter can also be expressed in a format similar to `#,###,###.##`. The number of decimal places returned varies based on the value of this parameter.
        
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of `expr2` is greater than 0 and is less than or equal to 340, a value that is rounded to the specified number of decimal places is returned.
        
    -   If the value of `expr2` is 0, the return value contains only the integer part and does not contain the decimal point or decimal part.
        
    -   If the value of `expr2` is less than 0 or `greater than 340`, an error is returned.
        
    -   If expr1 or expr2 is empty or is set to null, null is returned.
        
    
-   Examples
    
    -   Example 1: Return a value in the specified format based on a given number. Sample statements:
        
        ```
        -- The return value is 5.230. 
        select format_number(5.230134523424545456,3);
        -- The return value is 12,332.123. 
        select format_number(12332.123456, '#,###,###,###.###');
        ```
        
    -   Example 2: An input parameter is empty or set to null. Sample statements:
        
        ```
        -- The return value is null. 
        select format_number('',3);
        -- The return value is null. 
        select format_number(null,3);
        ```
        

## **FROM\_CHARSET**

-   Syntax
    
    ```
    STRING FROM_CHARSET(binary <source>, string <source_charset>, [string <mode>])
    ```
    
-   Description
    
    Converts non-UTF-8 encoded binary data into a UTF-8 encoded string for subsequent calculation.
    
-   Parameters
    
    -   **source**: required. A value of the BINARY type. This parameter specifies the binary data that you want to convert.
        
    -   **source\_charset**: required. A value of the STRING type. This parameter specifies the original encoding format of the binary data that is specified by **source**. Valid values: **UTF-8**, **UTF-16**, **UTF-16LE**, **UTF-16BE**, **ISO-8859-1**, **US-ASCII**, **GB2312**, **GBK**, and **GB18030**.
        
    -   **mode**: optional. A value of the STRING type. This parameter specifies the processing mode if a character cannot be converted when the FROM\_CHARSET function converts the binary data specified by **source** into a string in the specified encoding format. Valid values:
        
        -   **NONE**: reports an error. No processing is performed. This is the default value.
            
        -   **TRANSLIT**: replaces the character with a similar character in the specified encoding format.
            
        -   **IGNORE**: ignores the error and continues to run the command.
            
-   Return value
    
    A value of the STRING type in the UTF-8 encoding format is returned. If an input parameter is null or an empty string, the return value varies based on the following rules:
    
    -   If an input parameter is null, null is returned.
        
    -   If an input parameter is an empty string, an error is returned.
        
-   Examples
    
    -   Example 1: Convert UTF-8 encoded binary data into a UTF-8 encoded string.
        
        ```
        SELECT FROM_CHARSET(unhex('e58aa0e6b2b9e9949fe696a4e68bb70a'),'UTF-8', 'TRANSLIT');
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 加油锟斤拷
             |
        +------------+
        ```
        
    -   Example 2: Convert GBK-encoded binary data into a UTF-8 encoded string.
        
        ```
        SELECT FROM_CHARSET(unhex('b9feb9febac3a4ce'), 'GBK');
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 哈哈好の       |
        +------------+
        ```
        
    -   Example 3: If an input parameter is null, null is returned.
        
        ```
        SELECT FROM_CHARSET(unhex('b9feb9febac3a4ce'), null);
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | NULL       |
        +------------+
        ```
        

## FROM\_JSON

-   Syntax
    
    ```
    from_json(<jsonStr>, <schema>)
    ```
    
-   Description
    
    Returns data of the ARRAY, MAP, or STRUCT type based on JSON string jsonStr and output format schema.
    
-   Parameters
    
    -   jsonStr: required. The JSON string that you entered.
        
    -   schema: required. The schema of the JSON string. The value of this parameter must be in the same format as that in the statement for creating a table, such as `array<bigint>`, `map<string, array<string>>`, or ``struct<a:int, b:double, `C`:map<string,string>>``.
        
        **Note**
        
        Keys in a struct are case-sensitive. You can also specify a struct in the format of `a BIGINT, b DOUBLE`, which is equivalent to `STRUCT<a:BIGINT, b:DOUBLE>`.
        
        The following table describes the mappings between JSON data types and MaxCompute data types.
        
        **JSON data type**
        
        **MaxCompute data type**
        
        OBJECT
        
        STRUCT, MAP, and STRING
        
        ARRAY
        
        ARRAY and STRING
        
        NUMBER
        
        TINYINT, SMALLINT, INT, BIGINT, FLOAT, DOUBLE, DECIMAL, and STRING
        
        BOOLEAN
        
        BOOLEAN and STRING
        
        STRING
        
        STRING, CHAR, VARCHAR, BINARY, DATE, and DATETIME
        
        NULL
        
        All types
        
        **Note**
        
        The JSON string of the OBJECT and ARRAY types are parsed as much as possible. If the data type of the JSON string is not mapped to any MaxCompute data type, the JSON string is omitted. For ease of use, all JSON data types can be converted into the STRING data type supported by MaxCompute. When you convert a JSON string of the NUMBER type to a value of the FLOAT, DOUBLE, or DECIMAL type, the precision of the value cannot be ensured. We recommend you convert the JSON string to a value of the STRING type and then convert the obtained value to a value of the FLOAT, DOUBLE, or DECIMAL type.
        
-   Return value
    
    A value of the ARRAY, MAP, or STRUCT type is returned.
    
-   Examples
    
    -   Example 1: Convert a specific JSON string into a value of a specific data type. Sample statement:
        
        ```
        -- The return value is {"a":1,"b":0.8}. 
        select from_json('{"a":1, "b":0.8}', 'a int, b double');
        -- The return value is {"time":"26/08/2015"}. 
        select from_json('{"time":"26/08/2015"}', 'time string');
        -- The return value is {"a":1,"b":0.8}. 
        select from_json('{"a":1, "b":0.8}', 'a int, b double, c string');
        -- The return value is [1,2,3]. 
        select from_json('[1, 2, 3, "a"]', 'array<bigint>');
        -- The return value is {"d":"v","a":"1","b":"[1,2,3]","c":"{}"}. 
        select from_json('{"a":1,"b":[1,2,3],"c":{},"d":"v"}', 'map<string, string>');
        ```
        
    -   Example 2: Use the `map_keys` and `from_json` functions to obtain all keys in a JSON string. You can also use JSON\_KEYS for the same purpose. Sample statement:
        
        ```
        -- The return value is ["a","b"]. 
        select map_keys(from_json('{"a":1,"b":2}','map<string,string>'));
        ```
        

## GET\_JSON\_OBJECT

### **Usage notes**

This function is used to extract a specific string from a standard JSON string by using JSONPath. This function supports input parameters of the following data types:

-   JSON types: If input parameters are of JSON types, standard JSONPath expressions are used.
    
-   STRING type: If input parameters are of the STRING type, the original JSONPath expressions are used.
    

**Note**

-   The JSONPath expressions that are used when input parameters are of JSON types and those that are used when input parameters are of the STRING type comply with different rules. This may cause incompatibility issues.
    
-   The GET\_JSON\_OBJECT function does not support the syntax of JSONPath expressions.
    

### **Input parameters of JSON data types**

-   Syntax
    
    ```
    string get_json_object(json <json>, string <json_path>)
    ```
    
-   Description
    
    Extracts a single string from a standard JSON string based on JSON PATH.
    
-   Parameters
    
    -   json: required. A JSON string from which you want to extract a single string.
        
    -   json\_path: required. A JSONPath expression based on which you want to extract a single string.
        
-   Return value
    
    A value of a STRING type is returned.
    
-   Examples
    
    -   Example 1: Extract the value that corresponds to the key a from a JSON string.
        
        ```
        SELECT get_json_object(json '{"a":1, "b":2}', '$.a');
        ```
        
        The following result is returned:
        
        ```
        +-----+
        | _c0 |
        +-----+
        | 1   |
        +-----+
        ```
        
    -   Example 2: Extract the value that corresponds to the key c from a JSON string.
        
        ```
        SELECT get_json_object(json '{"a":1, "b":2}', '$.c');
        ```
        
        The following result is returned:
        
        ```
        +-----+
        | _c0 |
        +-----+
        | NULL |
        +-----+
        ```
        
    -   Example 3: If an invalid JSON path is specified, the return value is NULL.
        
        ```
        SELECT get_json_object(json '{"a":1, "b":2}', '$invalid_json_path');
        ```
        
        The following result is returned:
        
        ```
        +-----+
        | _c0 |
        +-----+
        | NULL |
        +-----+
        ```
        

### **Input parameter of the STRING data type**

-   Syntax
    
    ```
    string get_json_object(string <json>, string <path>)
    ```
    
-   Description
    
    Extracts a single string from a standard JSON string based on path. The original data is read each time this function is called. Therefore, repeated calls may affect system performance and increase costs. To prevent repeated calls, you can use the `GET_JSON_OBJECT` function with UDTFs. For more information, see [Convert JSON log data by using MaxCompute built-in functions and UDTFs](https://yq.aliyun.com/articles/627758).
    
-   Parameters
    
    -   json: required. A value of the STRING type. This parameter specifies a standard JSON object in the format of `{Key:Value, Key:Value,...}`. If the string contains a double quotation mark ("), use two backslashes (\\\\) to escape the double quotation mark (") before extraction. If the string contains a single quotation mark ('), use a single backslash (\\) to escape the single quotation mark (') before extraction.
        
    -   path: required. A value of the STRING type. This parameter specifies the path in the value of the json parameter and starts with `$`. For more information about the path parameter, see [LanguageManual UDF](https://cwiki.apache.org/confluence/display/Hive/LanguageManual+UDF). For more information about best practices, see [Migrate JSON-formatted data from OSS to MaxCompute](/help/en/maxcompute/use-cases/migrate-json-data-from-oss-to-maxcompute#task-2484711). Meanings of different characters:
        
        -   `$`: indicates the root node.
            
        -   `.` or `['']`: indicates a child node. MaxCompute parses JSON objects by using `.` or `['']`. If a key in a JSON object contains a period (.), \[''\] can be used.
            
        -   `[]` (`[number]`): indicates an array subscript, which starts from 0.
            
        -   `*`: indicates the wildcard for `[]`. If this character is used in the path parameter, an entire array is returned. An asterisk (`*`) cannot be escaped.
            
-   Limits
    
    Only MaxCompute V2.0 allows you to extract data by using `['']` in the path parameter. To use \[''\], you must add the `set odps.sql.udf.getjsonobj.new=true;` statement before the statement that you want to execute.
    
-   Return value
    
    -   If the json parameter is empty or invalid, null is returned.
        
    -   If the format of json is valid and path exists, the related string is returned.
        
    -   You can specify the `flagodps.sql.udf.getjsonobj.new` parameter for a session to determine how this function returns a value.
        
        -   If you execute the `set odps.sql.udf.getjsonobj.new=true;` statement, this function retains the original strings when it returns a value.
            
            We recommend that you use this configuration because it results in more standard function return behavior. This facilitates data processing and improves data processing performance. **If a job in which this function escapes JSON reserved characters exists in a MaxCompute project, we recommend that you retain the original escape operation to prevent errors caused by lack of verification.** The function complies with the following rules when it returns a value:
            
            -   In this configuration, the return value is still a JSON string, which can be parsed as JSON data, without the need to use the `REPLACE` or `REGEXP_REPLACE` function to replace backslashes (\\).
                
            -   Duplicate keys are allowed in a JSON object. If duplicate keys exist, the data can be parsed.
                
                ```
                -- The return value is 1. 
                select get_json_object('{"a":"1","a":"2"}', '$.a');
                ```
                
            -   The encoded strings that correspond to emojis are supported. However, DataWorks does not allow you to enter emojis. DataWorks allows you to enter only the encoded strings that correspond to emojis to MaxCompute by using a tool, such as Data Integration. DataWorks uses the `GET_JSON_OBJECT` function to process the data.
                
                ```
                -- The return value is an emoji. 
                select get_json_object('{"a":"<Emoji>"}', '$.a');
                ```
                
            -   The output results are displayed in alphabetical order.
                
                ```
                -- The return value is {"b":"1","a":"2"}. 
                select get_json_object('{"b":"1","a":"2"}', '$');
                ```
                
            
        -   If you execute the `set odps.sql.udf.getjsonobj.new=false;` statement, this function escapes JSON reserved characters when it returns a value. The function complies with the following rules when it returns a value:
            
            -   JSON reserved characters such as line feeds (\\n) and quotation marks (") are displayed as `'\n'` and `'\"'`.
                
            -   Each key in a JSON object must be unique. If duplicate keys exist, the data may fail to be parsed. Sample statement:
                
                ```
                -- The return value is null. 
                select get_json_object('{"a":"1","a":"2"}', '$.a');
                ```
                
            -   The encoded strings that correspond to emojis cannot be parsed. Sample statement:
                
                ```
                -- The return value is null. 
                select get_json_object('{"a":"<Emoji>"}', '$.a');
                ```
                
            -   The output results are displayed in alphabetical order. Sample statement:
                
                ```
                -- The return value is {"a":"2","b":"1"}. 
                select get_json_object('{"b":"1","a":"2"}', '$');
                ```
                
        
        **Note**
        
        For MaxCompute projects that were created on or after January 21, 2021, the `GET_JSON_OBJECT` function retains the original strings when it returns a value. For MaxCompute projects that are created before January 21, 2021, the `GET_JSON_OBJECT` function escapes JSON reserved characters when it returns a value. The following example helps you determine how the `GET_JSON_OBJECT` function returns a value in a MaxCompute project.
        
        ```
        select get_json_object('{"a":"[\\"1\\"]"}', '$.a');
        -- Return JSON reserved characters by using escape characters.
        [\"1\"]
        
        -- Return the original strings.
        ["1"]
        ```
        
        You can submit an [application](https://wx-in-i.dingtalk.com/yydy/yq.html?encodeDeptId=null&corpId=dingb682fb31ec15e09f35c2f4657eb6378f&inviterUid=null&scene=allMemberConversationDetail-copyLink&cid=6465538762&inviteCode=GKO5lWJbFEZkWl7&origin=2&originMeta=globalGroup&method=copyLink) or search for the DingTalk group ID 11782920 to join the MaxCompute developer community DingTalk group and request MaxCompute technical support engineers to configure the `GET_JSON_OBJECT` function to retain original strings. This way, you do not need to frequently specify set odps.sql.udf.getjsonobj.new=false; for a session.
        
-   Examples
    
    -   Example 1: Extract information from the JSON object `src_json.json`. Sample statement:
        
        ```
        -- The JSON string src_json.json contains the following content: 
        +----+
        json
        +----+
        {"store":
        {"fruit":[{"weight":8,"type":"apple"},{"weight":9,"type":"pear"}],
        "bicycle":{"price":19.95,"color":"red"}
        },
        "email":"amy@only_for_json_udf_test.net",
        "owner":"amy"
        }
        -- Extract the information of the owner field and return amy. 
        select get_json_object(src_json.json, '$.owner') from src_json;
        -- Extract the information of the first array in the store.fruit field and return {"weight":8,"type":"apple"}. 
        select get_json_object(src_json.json, '$.store.fruit[0]') from src_json;
        -- Extract the information of the non-existent field and return null. 
        select get_json_object(src_json.json, '$.non_exist_key') from src_json;
        ```
        
    -   Example 2: Extract information from a JSON object of the ARRAY type. Sample statement:
        
        ```
        -- The return value is 2222. 
        select get_json_object('{"array":[["aaaa",1111],["bbbb",2222],["cccc",3333]]}','$.array[1][1]');
        -- The return value is ["h0","h1","h2"]. 
        set odps.sql.udf.getjsonobj.new=true;
        select get_json_object('{"aaa":"bbb","ccc":{"ddd":"eee","fff":"ggg","hhh":["h0","h1","h2"]},"iii":"jjj"}','$.ccc.hhh[*]');
        -- The return value is ["h0","h1","h2"]. 
        set odps.sql.udf.getjsonobj.new=false;
        select get_json_object('{"aaa":"bbb","ccc":{"ddd":"eee","fff":"ggg","hhh":["h0","h1","h2"]},"iii":"jjj"}','$.ccc.hhh[*]');
        -- The return value is h1. 
        select get_json_object('{"aaa":"bbb","ccc":{"ddd":"eee","fff":"ggg","hhh":["h0","h1","h2"]},"iii":"jjj"}','$.ccc.hhh[1]');
        ```
        
    -   Example 3: Extract information from a JSON object that includes a period `(.)`. Sample statement:
        
        ```
        -- Create a table. 
        create table mf_json (id string, json string);
        -- Insert data into the table. The key in the data contains a period (.). 
        insert into table mf_json (id, json) values ("1", "{
        \"China.beijing\":{\"school\":{\"id\":0,\"book\":[{\"title\": \"A\",
        \"price\": 8.95},{\"title\": \"B\",\"price\": 10.2}]}}}");
        -- Insert data into the table. The key in the data does not contain a period (.). 
        insert into table mf_json (id, json) values ("2", "{
        \"China_beijing\":{\"school\":{\"id\":0,\"book\":[{\"title\": \"A\",
        \"price\": 8.95},{\"title\": \"B\",\"price\": 10.2}]}}}");
        -- Query the value of id in the JSON object whose key is China.beijing. 0 is returned. Only [''] can be used to specify the key because the key contains a period (.). This way, MaxCompute can parse the key. 
        select get_json_object(json, "$['China.beijing'].school['id']") from mf_json where id =1;
        -- Query the value of id in the JSON object whose key is China_beijing. 0 is returned. You can use one of the following statements: 
        select get_json_object(json, "$['China_beijing'].school['id']") from mf_json where id =2;
        select get_json_object(json, "$.China_beijing.school['id']") from mf_json where id =2;
        ```
        
    -   Example 4: The json parameter is empty or invalid. Sample statement:
        
        ```
        -- The return value is null. 
        select get_json_object('','$.array[1][1]');
        -- The return value is null. 
        select get_json_object('"array":["aaaa",1111],"bbbb":["cccc",3333]','$.array[1][1]');
        ```
        
    -   Example 5: Escape a JSON string. Sample statement:
        
        ```
        set odps.sql.udf.getjsonobj.new=true;
        -- The return value is "1". 
        select get_json_object('{"a":"\\"1\\"","b":"2"}', '$.a'); 
        -- The return value is '1'. 
        select get_json_object('{"a":"\'1\'","b":"2"}', '$.a'); 
        ```
        

## INITCAP

-   Syntax
    
    ```
    string initcap(<str>)
    ```
    
-   Description
    
    Converts a string specified by str into a string in the specified format. In this format, words are in title case and are separated by spaces. In title case, the first letter of each word is capitalized, and the other letters of each word are in lowercase.
    
-   Parameters
    
    str: required. A value of the STRING type. This parameter specifies the string that you want to convert.
    
-   Return value
    
    A string is returned. In this string, the first letter of each word is capitalized, and the other letters of each word are in lowercase.
    
-   Examples
    
    ```
    -- The return value is Odps Sql. 
    SELECT initcap("oDps sql");
    ```
    

## INSTR

-   Syntax
    
    ```
    bigint instr(string <str1>, string <str2>[, bigint <start_position>[, bigint <nth_appearance>]])
    ```
    
-   Description
    
    Returns the position of substring str2 in string str1.
    
-   Parameters
    
    -   str1: required. A value of the STRING type. This parameter specifies the string that contains the substring you want to search for. If the input value is of the BIGINT, DOUBLE, DECIMAL, or DATETIME type, it is implicitly converted into a value of the STRING type before calculation. If the input value is of another data type, an error is returned.
        
    -   str2: required. A value of the STRING type. This parameter specifies the substring that you want to search for. If the input value is of the BIGINT, DOUBLE, DECIMAL, or DATETIME type, it is implicitly converted into a value of the STRING type before calculation. If the input value is of another data type, an error is returned.
        
    -   start\_position: optional. A value of the BIGINT type. If the input value is of another data type, an error is returned. This parameter specifies the position of the character in str1 from which the search starts. The default start position is the first character, marked as 1. If start\_position is a negative value, the search starts from the end to the start of the string and the last character is -1.
        
    -   nth\_appearance: optional. A value of the BIGINT type, which is greater than 0. This parameter specifies the position of substring str2 that appears in string str1 at the nth time. If the value of nth\_appearance is of another data type or is less than or equal to 0, an error is returned.
        
-   Return value
    
    A value of the BIGINT type is returned. The return value varies based on the following rules:
    
    -   If str2 is not found in str1, the value 0 is returned.
        
    -   If str2 is an empty string, the matching always succeeds. For example, the value 1 is returned for `select instr('abc','');`.
        
    -   If the value of str1, str2, start\_position, or nth\_appearance is null, null is returned.
        
-   Examples
    
    -   Example 1: Return the position of the substring `e` in the string `Tech on the net`. Sample statement:
        
        ```
        -- The return value is 2. 
        select instr('Tech on the net', 'e');
        ```
        
    -   Example 2: Return the position of substring `on` in the string `Tech on the net`. Sample statement:
        
        ```
        -- The return value is 6. 
        select instr('Tech on the net', 'on');
        ```
        
    -   Example 3: Return the position of the second occurrence in which the substring `e` appears in the string `Tech on the net` from the third character. Sample statement:
        
        ```
        -- The return value is 14. 
        select instr('Tech on the net', 'e', 3, 2);
        ```
        
    -   Example 4: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select instr('Tech on the net', null);
        ```
        

## IS\_ENCODING

-   Syntax
    
    ```
    boolean is_encoding(string <str>, string <from_encoding>, string <to_encoding>)
    ```
    
-   Description
    
    Determines whether the input string str can be converted from the character set specified by from\_encoding into the character set specified by to\_encoding. This function can also be used to determine whether the input string is garbled. In most cases, from\_encoding is set to UTF-8 and to\_encoding is set to GBK.
    
-   Parameters
    
    -   str: required. A value of the STRING type. An empty string can belong to any character set.
        
    -   from\_encoding and to\_encoding: required. Values of the STRING type. from\_encoding specifies the source character set, and to\_encoding specifies the destination character set.
        
-   Return value
    
    A value of the BOOLEAN type is returned. The return value varies based on the following rules:
    
    -   If str can be converted, True is returned. Otherwise, False is returned.
        
    -   If the value of str, from\_encoding, or to\_encoding is null, null is returned.
        
    

## JSON\_TUPLE

-   Syntax
    
    ```
    string json_tuple(string <json>, string <key1>, string <key2>,...)
    ```
    
-   Description
    
    Extracts strings from a standard JSON string based on a set of input keys, such as `(key1,key2,...)`.
    
-   Parameters
    
    -   json: required. A value of the STRING type. This parameter specifies a standard JSON string.
        
    -   key: required. A value of the STRING type. This parameter is used to describe the `path` of a JSON object in the JSON string. The value cannot start with a dollar sign ($). You can enter multiple keys at a time. MaxCompute parses JSON objects by using `.` or `['']`. If a key in a JSON object includes a period `(.)`, `['']` can be used.
        
-   Return value
    
    A value of the STRING type is returned.
    
    **Note**
    
    -   If json is empty or invalid, null is returned.
        
    -   If key is empty, invalid, or does not exist in the JSON string, null is returned.
        
    -   If json is valid and key exists, the related string is returned.
        
    -   This function can parse JSON data that contains Chinese characters.
        
    -   This function can parse nested JSON data.
        
    -   This function can parse JSON data that contains nested arrays.
        
    -   The parsing action is equivalent to the execution of GET\_JSON\_OBJECT along with `set odps.sql.udf.getjsonobj.new=true;`. To obtain multiple objects from a JSON string, you must call the GET\_JSON\_OBJECT function multiple times. As a result, the JSON string is parsed multiple times. The JSON\_TUPLE function allows you to enter multiple keys at a time and the JSON string is parsed only once. JSON\_TUPLE is more efficient than GET\_JSON\_OBJECT.
        
    -   JSON\_TUPLE is a user-defined table-valued function (UDTF). If you want to select some columns from a table, use JSON\_TUPLE together with the [LATERAL VIEW](/help/en/maxcompute/user-guide/lateral-view#concept-sqj-zhk-52b) clause.
        
    

## KEYVALUE

-   Syntax
    
    ```
    keyvalue(string <str>,[string <split1>,string <split2>,] string <key>)
    keyvalue(string <str>,string <key>) 
    ```
    
-   Description
    
    Splits the string str into key-value pairs by split1, separates the key-value pairs by split2, and then returns the value of the specified key.
    
-   Parameters
    
    -   str: required. A value of the STRING type. This parameter specifies the string that you want to split.
        
    -   split1 and split2: optional. Values of the STRING type. These parameters specify the strings that are used as delimiters to split the source string. If you do not specify the two parameters, the default value of split1 is a semicolon (`;`) and the default value of split2 is a colon (`:`). If a key-value pair that is obtained after the source string is split by split1 contains multiple delimiters specified by split2, the returned result is undefined.
        
    -   key: required. A value of the STRING type. After the source string is split by split1 and split2 in sequence, the value that corresponds to key is returned.
        
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of split1 or split2 is null, null is returned.
        
    -   If the value of str or key is null or no key matches, null is returned.
        
    -   If multiple key-value pairs match, the value that corresponds to the first matched key is returned.
        
-   Examples
    
    -   Example 1: Split the string `0:1/;1:2` into key-value pairs and return the value that corresponds to key `1`. Sample statement:
        
        ```
        -- The return value is 2. 
        select keyvalue('0:1/;1:2', 1);
        ```
        
        The split1 and split2 parameters are not specified. The default value of split1 is a semicolon (`;`) and the default value of split2 is a colon (`:`).
        
        After the source string is split by split1, the key-value pairs `0:1\,1:2` are returned. After the key-value pairs are split by split2, the following keys and values are generated:
        
        ```
        0 1/  
        1 2
        ```
        
        The value 2 that corresponds to key 1 is returned.
        
    -   Example 2: Split the string `\;decreaseStore:1\;xcard:1\;isB2C:1\;tf:21910\;cart:1\;shipping:2\;pf:0\;market:shoes\;instPayAmount:0\;` into key-value pairs based on a backslash and a semicolon (`\;`), separate the values from keys based on a colon (`:`), and then return the value that corresponds to the key `tf`. Sample statement:
        
        ```
        -- The return value is 21910. 
        select keyvalue("\;decreaseStore:1\;xcard:1\;isB2C:1\;tf:21910\;cart:1\;shipping:2\;pf:0\;market:shoes\;instPayAmount:0\;","\;",":","tf");
        ```
        
        After the source string `\;decreaseStore:1\;xcard:1\;isB2C:1\;tf:21910\;cart:1\;shipping:2\;pf:0\;market:shoes\;instPayAmount:0\;` is split based on a backslash and a semicolon (`\;`), the following key-value pairs are generated:
        
        ```
        decreaseStore:1, xcard:1, isB2C:1, tf:21910, cart:1, shipping:2, pf:0, market:shoes, instPayAmount:0 
        ```
        
        After the key-value pairs are separated based on a colon (`:`), the following keys and values are generated:
        
        ```
        decreaseStore 1  
        xcard 1  
        isB2C 1  
        tf 21910  
        cart 1  
        shipping 2  
        pf 0  
        market shoes  
        instPayAmount 0
        ```
        
        The value 21910 that corresponds to the key `tf` is returned.
        

## KEYVALUE\_TUPLE

-   Syntax
    
    ```
    KEYVALUE_TUPLE(str, split1, split2, key1, key2, ..., keyN)
    ```
    
-   Description
    
    Splits the string str into key-value pairs by split1, separates the key-value pairs by split2, and then returns the values of the keys.
    
-   Parameters
    
    -   str: required. A value of the STRING type. This parameter specifies the string that you want to split.
        
    -   split1 and split2: required. Values of the STRING type. These parameters specify the strings that are used as delimiters to split the source string. If a key-value pair that is obtained after the source string is split by split1 contains multiple delimiters specified by split2, the returned result is undefined.
        
    -   key: required. A value of the STRING type. After the source string is split by split1 and split2 in sequence, the value that corresponds to key is returned.
        
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of split1 or split2 is null, null is returned.
        
    -   If the value of str or key is null or no key matches, null is returned.
        
-   Examples
    
    ```
    -- Create a table.
    create table mf_user (
    user_id string,
    user_info string
    );
    -- Insert data into the table.
    insert into mf_user values('1','age:18;genda:f;address:abc'),('2','age:20;genda:m;address:bcd');
    -- Query the data that you inserted.
    SELECT user_id,
    KEYVALUE(user_info,';',':','age') as age,
    KEYVALUE(user_info,';',':','genda') as genda,
    KEYVALUE(user_info,';',':','address') as address
    FROM mf_user;
    -- It is equivalent to the KEYVALUE clause.
    SELECT user_id,
    age,
    genda,
    address
    FROM mf_user LATERAL VIEW KEYVALUE_TUPLE(user_info,';', ':','age','genda','address') ui AS age,genda,address;
    ```
    
    The following result is returned:
    
    ```
    +------------+------------+------------+------------+
    | user_id    | age        | genda      | address    |
    +------------+------------+------------+------------+
    | 1          | 18         | f          | abc        |
    | 2          | 20         | m          | bcd        |
    +------------+------------+------------+------------+
    ```
    

## LENGTH

-   Syntax
    
    ```
    bigint length(string <str>)
    ```
    
-   Description
    
    Returns the length of the string str.
    
-   Parameters
    
    str: required. A value of the STRING type. If the input value is of the BIGINT, DOUBLE, DECIMAL, or DATETIME type, the value is implicitly converted into a value of the STRING type before calculation.
    
-   Return value
    
    A value of the BIGINT type is returned. The return value varies based on the following rules:
    
    -   If the value of str is not of the STRING, BIGINT, DOUBLE, DECIMAL, or DATETIME type, an error is returned.
        
    -   If the value of str is null, null is returned.
        
    -   If the value of str is not UTF-8 encoded, -1 is returned.
        
    
-   Examples
    
    -   Example 1: Return the length of the string `Tech on the net`. Sample statement:
        
        ```
        -- The return value is 15. 
        select length('Tech on the net');
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select length(null);
        ```
        

## LENGTHB

-   Syntax
    
    ```
    bigint lengthb(string <str>)
    ```
    
-   Description
    
    Returns the length of a string specified by str in bytes.
    
-   Parameters
    
    str: required. A value of the STRING type. If the input value is of the BIGINT, DOUBLE, DECIMAL, or DATETIME type, the value is implicitly converted into a value of the STRING type before calculation.
    
-   Return value
    
    A value of the BIGINT type is returned. The return value varies based on the following rules:
    
    -   If the value of str is not of the STRING, BIGINT, DOUBLE, DECIMAL, or DATETIME type, an error is returned.
        
    -   If the value of str is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Return the length of string `Tech on the net` in bytes. Sample statement:
        
        ```
        -- The return value is 15. 
        select lengthb('Tech on the net');
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select lengthb(null);
        ```
        

## LOCATE

-   Syntax
    
    ```
    bigint locate(string <substr>, string <str>[, bigint <start_pos>]) 
    ```
    
-   Description
    
    Returns the position of substring substr in string str. You can use start\_pos to specify the position from which the search starts. The value starts from 1.
    
-   Parameters
    
    -   substr: required. A value of the STRING type. This parameter specifies the substring that you want to search for.
        
    -   str: required. A value of the STRING type. This parameter specifies the string in which you want to search for the substring.
        
    -   start\_pos: optional. A value of the BIGINT type. This parameter specifies the position from which the search starts.
        
-   Return value
    
    A value of the BIGINT type is returned. The return value varies based on the following rules:
    
    -   If substr cannot be found in str, 0 is returned.
        
    -   If the value of str or substr is null, null is returned.
        
    -   If the value of start\_pos is null, 0 is returned.
        
    
-   Examples
    
    -   Example 1: Return the position of string `ab` in string `abchelloabc`. Sample statement:
        
        ```
        -- The return value is 1. 
        select locate('ab', 'abchelloabc');
        ```
        
    -   Example 2: Return the position of string `hi` in string `abchelloabc`. Sample statement:
        
        ```
        -- The return value is 0. 
        select locate('hi', 'abc,hello,ab,c');
        ```
        
    -   Example 3: The value of start\_pos is set to null. Sample statement:
        
        ```
        -- The return value is 0. 
        select locate('ab', 'abhelloabc', null);
        ```
        

## LPAD

-   Syntax
    
    ```
    string lpad(string <str1>, int <length>, string <str2>)
    ```
    
-   Description
    
    Left pads str1 with str2 to the specified length. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    -   str1: required. A value of the STRING type. This parameter specifies the string that you want to left pad.
        
    -   length: required. A value of the INT type. This parameter specifies the number of characters that are used for left padding.
        
    -   str2: required. This parameter specifies the string that you use to right pad another string.
        
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of length is less than the number of characters in str1, this function truncates str1 from the left to obtain a string with the number of characters specified by length.
        
    -   If length is set to 0, an empty string is returned.
        
    -   If no input parameters are available or an input parameter is set to null, null is returned.
        
    
-   Examples
    
    -   Example 1: Left pad the string `abcdefgh` with the string `12` to obtain a string with 10 characters in length. Sample statement:
        
        ```
        -- The return value is 12abcdefgh. 
        select lpad('abcdefgh', 10, '12');
        ```
        
    -   Example 2: Left pad the string `abcdefgh` with the string `12` to obtain a string with 5 characters in length. Sample statement:
        
        ```
        -- The return value is abcde. 
        select lpad('abcdefgh', 5, '12');
        ```
        
    -   Example 3: The value of length is 0. Sample statement:
        
        ```
        -- The return value is an empty string. 
        select lpad('abcdefgh' ,0, '12'); 
        ```
        
    -   Example 4: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select lpad(null ,0, '12');
        ```
        

## LTRIM

-   Syntax
    
    ```
    string ltrim(string <str>[, <trimChars>])
    string trim(leading [<trimChars>] from <str>)
    ```
    
-   Description
    
    Take note of the following items:
    
    -   If you do not specify trimChars, the spaces on the left side are removed by default.
        
    -   If you specify trimChars, the substring that consists of one or more characters specified by trimChars are removed from the left side of the string that is specified by str.
        
    
-   Parameters
    
    -   str: required. A value of the STRING type. This parameter specifies the string from the left side of which the characters are removed. If the input value is of the BIGINT, DECIMAL, DOUBLE, or DATETIME type, the value is implicitly converted into values of the STRING type before calculation.
        
    -   trimChars: optional. A value of the STRING type. This parameter specifies the characters to be removed.
        
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of str is not of the STRING, BIGINT, DOUBLE, DECIMAL, or DATETIME type, an error is returned.
        
    -   If the value of str or trimChars is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Remove the space from the left side of string `yxTxyomxx` . Sample statements:
        
        ```
        -- The return value is yxTxyomxx. 
        select ltrim(' yxTxyomxx ');
        -- The preceding statement is equivalent to the following statement: 
        select trim(leading from ' yxTxyomxx ');
        ```
        
    -   Example 2: Remove the substring that consists of one or more characters in the `xy` collection from the left side of the string `yxTxyomxx`.
        
        ```
        -- The return value is Txyomxx. If x or y appears on the left side, it is removed. 
        select ltrim('yxTxyomxx', 'xy');
        -- The preceding statement is equivalent to the following statement: 
        select trim(leading 'xy' from 'yxTxyomxx');
        ```
        
    -   Example 3: The input parameter is set to null. Sample statements:
        
        ```
        -- The return value is null. 
        select ltrim(null);
        select ltrim('yxTxyomxx', null);
        ```
        

## MASK\_HASH

-   Syntax
    
    ```
    mask_hash(<expr>)
    ```
    
-   Description
    
    Returns a hash value that is calculated by using a string expression that is specified by expr. If the values calculated by a string expression are the same, a consistent hash value is returned.
    
-   Parameters
    
    expr: required. A string expression that is used to calculate a hash value. The STRING, CHAR, VARCHAR, and BINARY data types are supported.
    
-   Return value
    
    A hash value calculated by using a string expression is returned. The hash value is 64 bytes in length. In the Hive-compatible data type edition, the value `null` is returned if a non-string expression is used.
    
-   Examples
    
    ```
    -- A hash value is returned if the string abc is used.
    select mask_hash("abc");
    -- The following result is returned:
    +------------+
    | _c0        |
    +------------+
    | ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad |
    +------------+
    
    -- The value null is returned if a non-string expression is used.
    select mask_hash(100);
    -- The following result is returned:
    +------------+
    | _c0        |
    +------------+
    | NULL       |
    +------------+
    ```
    

## MD5

-   Syntax
    
    ```
    string md5(string <str>)
    ```
    
-   Description
    
    Returns the MD5 value of a string specified by str.
    
-   Parameters
    
    str: required. A value of the STRING type. If the input value is of the BIGINT, DOUBLE, DECIMAL, or DATETIME type, it is implicitly converted into a value of the STRING type before calculation.
    
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of str is not of the STRING, BIGINT, DOUBLE, DECIMAL, or DATETIME type, an error is returned.
        
    -   If the value of str is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Return the MD5 value of the string `Tech on the net`. Sample statement:
        
        ```
        -- The return value is ddc4c4796880633333d77a60fcda9af6. 
        select md5('Tech on the net');
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select md5(null);
        ```
        

## PARSE\_URL

-   Syntax
    
    ```
    string parse_url(string <url>, string <part>[, string <key>])
    ```
    
-   Description
    
    Parses url and extracts information based on the value specified by part.
    
-   Parameters
    
    -   url: required. A value of the STRING type. This parameter specifies a URL. If the URL is invalid, an error is returned.
        
    -   part: required. A value of the STRING type. Valid values: HOST, PATH, QUERY, REF, PROTOCOL, AUTHORITY, FILE, and USERINFO. The value of this parameter is not case-sensitive.
        
    -   key: optional. If part is set to QUERY, this function returns the value that corresponds to key.
        
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of url, part, or key is null, null is returned.
        
    -   If the value of part is invalid, an error is returned.
        
    
-   Examples
    
    ```
    -- The return value is example.com. 
    select parse_url('file://username:password@example.com:8042/over/there/index.dtb?type=animal&name=narwhal#nose', 'HOST');
    -- The return value is /over/there/index.dtb. 
    select parse_url('file://username:password@example.com:8042/over/there/index.dtb?type=animal&name=narwhal#nose', 'PATH');
    -- The return value is animal. 
    select parse_url('file://username:password@example.com:8042/over/there/index.dtb?type=animal&name=narwhal#nose', 'QUERY', 'type');
    -- The return value is nose. 
    select parse_url('file://username:password@example.com:8042/over/there/index.dtb?type=animal&name=narwhal#nose', 'REF');
    -- The return value is file. 
    select parse_url('file://username:password@example.com:8042/over/there/index.dtb?type=animal&name=narwhal#nose', 'PROTOCOL');
    -- The return value is username:password@example.com:8042. 
    select parse_url('file://username:password@example.com:8042/over/there/index.dtb?type=animal&name=narwhal#nose', 'AUTHORITY');
    -- The return value is username:password. 
    select parse_url('file://username:password@example.com:8042/over/there/index.dtb?type=animal&name=narwhal#nose', 'USERINFO');
    ```
    

## PARSE\_URL\_TUPLE

-   Syntax
    
    ```
    string parse_url_tuple(string <url>, string <key1>, string <key2>,...)
    ```
    
-   Description
    
    Parses url and extracts the strings that are specified by a group of input keys, such as key1 and key2. The PARSE\_URL\_TUPLE function is similar to the [PARSE\_URL](#section-x6p-fbt-3ep) function. However, the PARSE\_URL\_TUPLE function provides better performance because it can extract the strings that correspond to multiple keys at the same time.
    
-   Parameters
    
    -   url: required. A value of the STRING type. This parameter specifies a URL. If the URL is invalid, an error is returned.
        
    -   key1 and key2: required. Values of the STRING type. These parameters specify the keys that correspond to the strings you want to extract. Valid values:
        
        -   HOST: indicates the host address, which can be a domain name or an IP address.
            
        -   PATH: indicates the path of network resources in the server.
            
        -   QUERY: indicates the string that you want to query.
            
        -   REF: indicates the fragment identifier of a URL, which is the content after the # symbol.
            
        -   PROTOCOL: indicates the protocol type.
            
        -   AUTHORITY: indicates the domain name or IP address, port number, and user authentication information, such as username and password, of the server.
            
        -   FILE: indicates the path of network resources in the server and the content that you want to query. FILE consists of PATH and QUERY.
            
        -   USERINFO: indicates user authentication information.
            
        -   QUERY:<KEY>: indicates the value of the specified key in the query string.
            
        
        The values of these parameters are not case-sensitive. If you specify a value other than the preceding values, an error is returned.
        
-   Return value
    
    A value of the STRING type is returned. If the value of url or key is null, an error is returned.
    
-   Examples
    
    Extract the strings that correspond to keys from `file://username:password@example.com:8042/over/there/index.dtb?type=animal&name=narwhal#nose`. Sample statement:
    
    ```
    select parse_url_tuple('file://username:password@example.com:8042/over/there/index.dtb?type=animal&name=narwhal#nose', 'HOST', 'PATH', 'QUERY', 'REF', 'PROTOCOL', 'AUTHORITY', 'FILE', 'USERINFO', 'QUERY:type', 'QUERY:name') as (item0, item1, item2, item3, item4, item5, item6, item7, item8, item9);
    ```
    
    The following result is returned:
    
    ```
    +------------+------------+------------+------------+------------+------------+------------+------------+------------+------------+
    | item0      | item1      | item2      | item3      | item4      | item5      | item6      | item7      | item8      | item9      |
    +------------+------------+------------+------------+------------+------------+------------+------------+------------+------------+
    | example.com | /over/there/index.dtb | type=animal&name=narwhal | nose       | file       | username:password@example.com:8042 | /over/there/index.dtb?type=animal&name=narwhal | username:password | animal     | narwhal    |
    +------------+------------+------------+------------+------------+------------+------------+------------+------------+------------+
    ```
    

## REGEXP\_COUNT

-   Syntax
    
    ```
    bigint regexp_count(string <source>, string <pattern>[, bigint <start_position>])
    ```
    
-   Description
    
    Returns the number of substrings that match the specified pattern in the source string from the start position specified by start\_position.
    
-   Parameters
    
    -   source: required. A value of the STRING type. This parameter specifies the string that contains the substring you want to search for. If the value is not a string, an error is returned.
        
    -   pattern: required. A constant of the STRING type or a regular expression. This parameter specifies the pattern that the specified substring must match. For more information about regular expressions, see [RLIKE](/help/en/maxcompute/user-guide/regular-expressions#concept-ihp-ntf-vdb). If pattern is an empty string or is of another data type, an error is returned.
        
    -   start\_position: optional. A constant of the BIGINT type. The value of this parameter must be greater than 0. If the value is of another data type or is less than or equal to 0, an error is returned. If you do not specify this parameter, the default value is 1. This value indicates that the search starts from the first character of the source string.
        
-   Return value
    
    A value of the BIGINT type is returned. The return value varies based on the following rules:
    
    -   If no substring is matched, 0 is returned.
        
    -   If the value of source, pattern, or start\_position is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Calculate the number of substrings in `abababc` that match the specified pattern from the specified position. Sample statements:
        
        ```
        -- The return value is 1. 
        select regexp_count('abababc', 'a.c');
        -- The return value is 2. 
        select regexp_count('abababc', '[[:alpha:]]{2}', 3);
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select regexp_count('abababc', null);
        ```
        
    -   Example 3: Calculate the number of `colons (:)` in the JSON string `{"account_id":123456789,"account_name":"allen","location":"hangzhou","bill":100}`. Sample statements: Sample statement:
        
        ```
        -- The return value is 4. 
        select regexp_count('{"account_id":123456789,"account_name":"allen","location":"hangzhou","bill":100}',':');
        ```
        

## REGEXP\_EXTRACT

-   Syntax
    
    ```
    string regexp_extract(string <source>, string <pattern>[, bigint <groupid>])
    ```
    
    **Note**
    
    In versions of the data types compatible with Hive, the `REGEXP_EXTRACT` function follows the Java regex specification. However, in data type versions 1.0 and 2.0, it follows the MaxCompute specification.
    
-   Description
    
    Splits the source string into groups based on a given pattern and returns the string in the nth group specified by groupid.
    
-   Parameters
    
    -   source: required. A value of the STRING type. This parameter specifies the string that you want to split.
        
    -   pattern: required. A constant of the STRING type or a regular expression. This parameter specifies the pattern that the specified substring must match. For more information about regular expressions, see [RLIKE](/help/en/maxcompute/user-guide/regular-expressions#concept-ihp-ntf-vdb).
        
    -   groupid: optional. A constant of the BIGINT type. The value of this parameter must be greater than or equal to 0.
        
    
    **Note**
    
    Data is stored in the UTF-8 format. Chinese characters can be represented in hexadecimal. They are encoded in the range of **\[\\\\x{4e00},\\\\x{9fa5}\]**.
    
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If pattern is an empty string or no group is specified in pattern, an error is returned.
        
    -   If the value of groupid is not of the BIGINT type or is less than 0, an error is returned. If you do not specify this parameter, the default value is 1. This value indicates that the string in the first group is returned. If groupid is set to 0, all substrings that match pattern are returned.
        
    -   If the value of source, pattern, or groupid is null, null is returned.
        
    

## REGEXP\_EXTRACT\_ALL

-   Syntax
    
    ```
    array<T> regexp_extract_all(string <source>, string <pattern>[,bigint <group_id>])
    ```
    
-   Description
    
    Finds all substrings that match the pattern of a regular expression in a string and returns the substrings as an array.
    
-   Parameters
    
    -   source: required. A value of the STRING type. This parameter specifies the string that you want to analyze.
        
    -   pattern: required. A value of the STRING type. This parameter specifies the pattern that you want substrings to match. This parameter can be a constant of the STRING type or a regular expression. For more information about regular expressions, see [RLIKE](/help/en/maxcompute/user-guide/regular-expressions#concept-ihp-ntf-vdb).
        
    -   group\_id: optional. A value of the BIGINT type. This parameter specifies the ID of the group that is used to match the pattern. The value of this parameter must be greater than or equal to `0`. If you do not specify this parameter, the group with an ID of `1` is used to match the pattern. If you set this parameter to `0`, all groups are used to match the pattern.
        
-   Return value
    
    A value of the ARRAY type is returned. If you specify group\_id, an array that consists of all matching results for the group specified by group\_id is returned. If you do not specify group\_id, an array that consists of all matching results for the group with an ID of `1` is returned.
    
-   Examples
    
    -   If you do not specify group\_id, an array that consists of all matching results for the group with an ID of 1 is returned. Sample statements:
        
        ```
        SELECT regexp_extract_all('100-200, 300-400', '(\\d+)-(\\d+)');
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | [100,300] |
        +------------+
        ```
        
    -   If you set group\_id to `2`, an array that consists of all matching results for the group with an ID of 2 is returned. Sample statements:
        
        ```
        SELECT regexp_extract_all('100-200, 300-400', '(\\d+)-(\\d+)',2);
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | [200,400] |
        +------------+
        ```
        

## REGEXP\_INSTR

-   Syntax
    
    ```
    bigint regexp_instr(string <source>, string <pattern>[,bigint <start_position>[, bigint <occurrence>[, bigint <return_option>]]])
    ```
    
-   Description
    
    Returns the start or end position of the substring that matches pattern at the nth occurrence specified by occurrence, in the source string from the start position specified by start\_position.
    
-   Parameters
    
    -   source: required. A value of the STRING type. This parameter specifies the source string.
        
    -   pattern: required. A constant of the STRING type or a regular expression. This parameter specifies the pattern that the specified substring must match. For more information about regular expressions, see [RLIKE](/help/en/maxcompute/user-guide/regular-expressions#concept-ihp-ntf-vdb). If pattern is an empty string, an error is returned.
        
    -   start\_position: optional. A constant of the BIGINT type. This parameter specifies the position from which the search starts. If you do not specify this parameter, the default value 1 is used.
        
    -   occurrence: optional. A constant of the BIGINT type. If you do not specify this parameter, the default value 1 is used. This value indicates the position where a substring matches the pattern in the search for the first time.
        
    -   return\_option: optional. A constant of the BIGINT type. This parameter specifies whether the start or end position of the substring that matches the specified pattern is returned. Valid values: 0 and 1. If this parameter is not specified, the default value 0 is used. If this parameter is set to an invalid number or a value of another data type, an error is returned. The value 0 indicates that the start position of the substring that matches the specified pattern is returned. The value 1 indicates that the end position of the substring that matches the specified pattern is returned.
        
-   Return value
    
    A value of the BIGINT type is returned. The return value is the start or end position specified by return\_option of the matched substring in the source string. The return value varies based on the following rules:
    
    -   If pattern is an empty string, an error is returned.
        
    -   If the value of start\_position or occurrence is not of the BIGINT type or is less than or equal to 0, an error is returned.
        
    -   If the value of source, pattern, start\_position, occurrence, or return\_option is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Return the start position of the substring that matches `o[[:alpha:]]{1}` at the `second` occurrence in the `i love www.taobao.com` string from the `third` character. Sample statement:
        
        ```
        -- The return value is 14. 
        select regexp_instr('i love www.taobao.com', 'o[[:alpha:]]{1}', 3, 2);
        ```
        
    -   Example 2: Return the end position of the substring that matches `o[[:alpha:]]{1}` at the `second` occurrence in the `i love www.taobao.com` string from the `third` character. Sample statement:
        
        ```
        -- The return value is 16. 
        select regexp_instr('i love www.taobao.com', 'o[[:alpha:]]{1}', 3, 2, 1);
        ```
        
    -   Example 3: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select regexp_instr('i love www.taobao.com', null, 3, 2);
        ```
        

## REGEXP\_REPLACE

-   Syntax
    
    ```
    string regexp_replace(string <source>, string <pattern>, string <replace_string>[, bigint <occurrence>])
    ```
    
    **Note**
    
    In versions of the data types compatible with Hive, the `REGEXP_REPLACE` function follows the Java regex specification. However, in data type versions 1.0 and 2.0, it follows the MaxCompute specification.
    
-   Description
    
    Uses a string specified by replace\_string to replace the substring that matches a given pattern at the nth occurrence specified by occurrence in the source string and returns a result.
    
-   Parameters
    
    -   source: required. A value of the STRING type. This parameter specifies three strings that you want to replace.
        
    -   pattern: required. A constant of the STRING type or a regular expression. This parameter specifies the pattern that the specified substring must match. For more information about regular expressions, see [RLIKE](/help/en/maxcompute/user-guide/regular-expressions#concept-ihp-ntf-vdb). If pattern is an empty string, an error is returned.
        
    -   replace\_string: required. A value of the STRING type. The value is used to replace the string that matches the pattern.
        
        **Note**
        
        -   If replace\_string is an empty string, a value is returned after the function removes the string that matches the value specified by pattern.
            
        -   The value of replace\_string can contain a backward reference \\n. If the value of replace\_string contains a backward reference, a substring that matches the nth capturing group specified by pattern is inserted. n is a digit ranging from 1 to 9. If the value of replace\_string contains the backward reference \\0, the substring that matches the entire pattern is inserted. Backslashes (\\) must be escaped. For example, if the value of replace\_string contains the backward reference \\1, the backslash (\\) of the backward reference must be escaped and the backward reference \\1 is expressed as (\\\\1). You can also use the raw string R'(\\1)' to express the backward reference \\1.
            
        
    -   occurrence: optional. A constant of the BIGINT type, which must be greater than or equal to 0. The value of this parameter indicates that the string that matches the specified pattern at the nth occurrence specified by occurrence is replaced with replace\_string. If this parameter is set to 0, all the substrings that match the specified pattern are replaced. If it is of another data type or is less than 0, an error is returned. Default value: 0.
        
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the referenced group does not exist, the returned result is undefined.
        
    -   If the value of replace\_string is null and a substring matches the given pattern, null is returned.
        
    -   If the value of replace\_string is null but no substring matches the given pattern, the original string is returned.
        
    -   If the value of source, pattern, or occurrence is null, null is returned.
        
-   Examples
    
    -   Example 1: Replace a string based on the specified pattern. Sample statements:
        
        ```
        -- The return value is Abcd. 
        select regexp_replace("abcd", "a", "A", 0);
        -- The return value is bcd. 
        select regexp_replace("abcd", "a", "", 0);
        -- The return value is 19700101. 
        select regexp_replace("1970-01-01", "-", "", 0);
        -- The return value is abc. 
        select regexp_replace("a1b2c3", "[0-9]", "", 0);
        -- The return value a1b2c. 
        select regexp_replace("a1b2c3", "[0-9]", "", 3);
        ```
        
    -   Example 2: Use `(\\1)\\2-\\3` to replace all the substrings that match `([[:digit:]]{3})\\.([[:digit:]]{3})\\.([[:digit:]]{4})` in the `123.456.7890` string. Sample statement:
        
        ```
        -- The return value is (123)456-7890. 
        select regexp_replace('123.456.7890', '([[:digit:]]{3})\\.([[:digit:]]{3})\\.([[:digit:]]{4})',
        '(\\1)\\2-\\3', 0);
        ```
        
    -   Example 3: Replace the substring that matches the specified pattern in the `abcd` string. Sample statements:
        
        ```
        -- The return value is a b c d. 
        select regexp_replace('abcd', '(.)', '\\1 ', 0);
        -- The return value is a bcd. 
        select regexp_replace('abcd', '(.)', '\\1 ', 1);
        -- The return value is d. 
        select regexp_replace("abcd", "(.*)(.)$", "\\2", 0);
        ```
        
    -   Example 4: The data in the URL column of the url\_set table is in the `www.simple@xxx.com` format and `xxx` in www.simple@xxx.com of each row is different. Replace all characters after `www` with strings in the data of the URL column. Sample statement:
        
        ```
        -- The return value is wwwtest. 
        select regexp_replace(url,'(www)(.*)','wwwtest',0) from url_set;
        ```
        
    -   Example 5: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select regexp_replace('abcd', '(.)', null, 0);
        ```
        
    -   Example 6: The group that you want to reference does not exist. Sample statements:
        
        ```
        -- Only one group is defined in the pattern, and the referenced group does not exist. 
        -- We recommend that you do not use this function in this way. The result of referencing a nonexistent group is not defined. 
        regexp_replace("abcd", "(.)", "\\2", 0) = "" or "abcd"
        -- The referenced group is defined in the pattern. Therefore, "\1" references a nonexistent group. 
        -- We recommend that you do not use this function in this way. The result of referencing a nonexistent group is not defined. 
        regexp_replace("abcd", "a", "\\1", 0) = "bcd" or "abcd" 
        ```
        

## REGEXP\_SUBSTR

-   Syntax
    
    ```
    string regexp_substr(string <source>, string <pattern>[, bigint <start_position>[, bigint <occurrence>]])
    ```
    
-   Description
    
    Returns a string that matches a given pattern at the nth occurrence specified by occurrence, in the source string from the start position specified by start\_position.
    
-   Parameters
    
    -   source: required. A value of the STRING type. This parameter specifies the string in which the substring you want to search for.
        
    -   pattern: required. A constant of the STRING type or a regular expression. This parameter specifies the pattern that the specified substring must match. For more information about regular expressions, see [RLIKE](/help/en/maxcompute/user-guide/regular-expressions#concept-ihp-ntf-vdb).
        
    -   start\_position: optional. A constant of the BIGINT type. The value of this parameter must be greater than 0. If you do not specify this parameter, the default value is 1. This value indicates that the search starts from the first character of the source string.
        
    -   occurrence: optional. A constant of the BIGINT type. The value of this parameter must be greater than 0. If you do not specify this parameter, the default value is 1. This value indicates that the first matched substring is returned.
        
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If pattern is an empty string, an error is returned.
        
    -   If no substring matches the specified pattern, null is returned.
        
    -   If the value of start\_position or occurrence is not of the BIGINT type or is less than or equal to 0, an error is returned.
        
    -   If the value of source, pattern, or start\_position, occurrence is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Return the substring in the `I love aliyun very much` string that matches the specified pattern. Sample statement:
        
        ```
        -- The return value is aliyun. 
        select regexp_substr('I love aliyun very much', 'a[[:alpha:]]{5}');
        -- The return value is have. 
        select regexp_substr('I have 2 apples and 100 bucks!', '[[:blank:]][[:alnum:]]*', 1, 1);
        -- The return value is  2. 
        select regexp_substr('I have 2 apples and 100 bucks!', '[[:blank:]][[:alnum:]]*', 1, 2);
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select regexp_substr('I love aliyun very much', null);
        ```
        

## REPEAT

-   Syntax
    
    ```
    string repeat(string <str>, bigint <n>)
    ```
    
-   Description
    
    Returns a string that repeats the string specified by str for n times.
    
-   Parameters
    
    -   str: required. A value of the STRING type. If the input value is of the BIGINT, DOUBLE, DECIMAL, or DATETIME type, the value is implicitly converted into a value of the STRING type before calculation.
        
    -   n: required. A value of the BIGINT type. The size of the value does not exceed 2 MB.
        
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of str is not of the STRING, BIGINT, DOUBLE, DECIMAL, or DATETIME type, an error is returned.
        
    -   If n is left empty, an error is returned.
        
    -   If the value of str or n is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Return a string that repeats the string `abc` for `5` times. Sample statement:
        
        ```
        -- The return value is abcabcabcabcabc. 
        select repeat('abc', 5); 
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select repeat('abc', null);
        ```
        

## REPLACE

-   Syntax
    
    ```
    string replace(string <str>, string <old>, string <new>)
    ```
    
-   Description
    
    If a part of the string specified by str exactly matches the string specified by old, this part of the string is replaced by the string specified by new, and the complete string after the replacement is returned. If no part of the string specified by str matches the string specified by old, the original string specified by str is returned. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    -   str: required. A value of the STRING type. This parameter specifies the string that you want to replace.
        
    -   old: required. This parameter specifies the string that you use for comparison.
        
    -   new: required. This parameter specifies the string that you use to replace the original string.
        
-   Return value
    
    A value of the STRING type is returned. If an input parameter is set to null, null is returned.
    
-   Examples
    
    -   Example 1: Replace the part of the string `ababab` that is exactly the same as the string `abab` with the string `12`. Sample statement:
        
        ```
        -- The return value is 12ab. 
        select replace('ababab','abab','12');
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select replace('123abab456ab',null,'abab');
        ```
        

## REVERSE

-   Syntax
    
    ```
    string reverse(string <str>)
    ```
    
-   Description
    
    Returns the characters of a string in reverse order.
    
-   Parameters
    
    str: required. A value of the STRING type. If the input value is of the BIGINT, DOUBLE, DECIMAL, or DATETIME type, the value is implicitly converted into a value of the STRING type before calculation.
    
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of str is not of the STRING, BIGINT, DOUBLE, DECIMAL, or DATETIME type, an error is returned.
        
    -   If the value of str is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Return a string whose characters are in reverse order of the string `I love aliyun very much`. Sample statement:
        
        ```
        -- The return value is hcum yrev nuyila evol I. 
        select reverse('I love aliyun very much');
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select reverse(null);
        ```
        

## RPAD

-   Syntax
    
    ```
    string rpad(string <str1>, int <length>, string <str2>)
    ```
    
-   Description
    
    Right pads str1 with str2 to the specified length. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    -   str1: required. A value of the STRING type. This parameter specifies the string that you want to right pad.
        
    -   length: required. A value of the INT type. The value must be greater than or equal to 0. This parameter specifies the number of characters that are used for right padding.
        
    -   str2: required. This parameter specifies the string that you use to right pad another string.
        
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of length is less than the number of characters in str1, this function truncates str1 from the left to obtain a string with the number of characters specified by length.
        
    -   If length is set to 0, an empty string is returned.
        
    -   If no input parameters are available or an input parameter is set to null, null is returned.
        
    
-   Examples
    
    -   Example 1: Right pad the string `abcdefgh` with the string `12` to obtain a string with 10 characters in length. Sample statement:
        
        ```
        -- The return value is abcdefgh12. 
        select rpad('abcdefgh', 10, '12');
        ```
        
    -   Example 2: Right pad the string `abcdefgh` with the string `12` to obtain a string with 5 characters in length. Sample statement:
        
        ```
        -- The return value is abcde. 
        select rpad('abcdefgh', 5, '12');
        ```
        
    -   Example 3: The value of length is 0. Sample statement:
        
        ```
        -- The return value is an empty string. 
        select rpad('abcdefgh' ,0, '12'); 
        ```
        
    -   Example 4: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select rpad(null ,0, '12');
        ```
        

## RTRIM

-   Syntax
    
    ```
    string rtrim(string <str>[, <trimChars>])
    string trim(trailing [<trimChars>] from <str>)
    ```
    
-   Description
    
    Removes the characters from the right side of a string that is specified by str.
    
    -   If you do not specify trimChars, the spaces on the right side are removed by default.
        
    -   If you specify trimChars, the substring that consists of one or more characters specified by trimChars is removed from the right side of the string that is specified by str.
        
    
-   Parameters
    
    -   str: required. A value of the STRING type. This parameter specifies the string from the right side of which the characters are removed. If the input value is of the BIGINT, DECIMAL, DOUBLE, or DATETIME type, the value is implicitly converted into values of the STRING type before calculation.
        
    -   trimChars: optional. A value of the STRING type. This parameter specifies the characters to be removed.
        
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of str is not of the STRING, BIGINT, DOUBLE, DECIMAL, or DATETIME type, an error is returned.
        
    -   If the value of str or trimChars is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Remove the space from the right side of string `yxTxyomxx` . Sample statement:
        
        ```
        -- The return value is  yxTxyomxx. 
        select rtrim(' yxTxyomxx ');
        -- The preceding statement is equivalent to the following statement: 
        select trim(trailing from ' yxTxyomxx ');
        ```
        
    -   Example 2: Remove the substring that consists of one or more characters in the `xy` collection from the right side of the string `yxTxyomxx`.
        
        ```
        -- The return value is yxTxyom. If x or y appears on the right side of a string, it is removed. 
        select rtrim('yxTxyomxx', 'xy');
        -- The preceding statement is equivalent to the following statement: 
        select trim(trailing 'xy' from 'yxTxyomxx');
        ```
        
    -   Example 3: The input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select rtrim(null);
        select rtrim('yxTxyomxx', null);
        ```
        

## SOUNDEX

-   Syntax
    
    ```
    string soundex(string <str>)
    ```
    
-   Description
    
    Converts a normal string into a string of the SOUNDEX type.
    
-   Parameters
    
    str: required. A value of the STRING type. This parameter specifies the string that you want to convert. This function is an additional function of MaxCompute V2.0.
    
-   Return value
    
    A value of the STRING type is returned. If the value of str is null, null is returned.
    
-   Examples
    
    -   Example 1: Convert the string `hello` into a string of the SOUNDEX type. Sample statement:
        
        ```
        -- The return value is H400. 
        select soundex('hello');
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select soundex(null);
        ```
        

## SPACE

-   Syntax
    
    ```
    string space(bigint <n>)
    ```
    
-   Description
    
    Generates a space string with a length of n.
    
-   Parameters
    
    n: required. A value of the BIGINT type. The size of the value does not exceed 2 MB.
    
-   Return value
    
    A value of the STRING type is returned. The value null is returned in the following scenarios:
    
    -   If n is left empty, an error is returned.
        
    -   If the value of n is null, null is returned.
        
    
-   Examples
    
    ```
    -- The return value is 10. 
    select length(space(10));
    ```
    

## **SPLIT**

-   Syntax
    
    ```
    split(<str>, <pat>, [<trimTailEmpty>])
    ```
    
-   Parameters
    
    -   -   str: required. A value of the STRING type. This parameter specifies the string that you want to split.
            
        -   pat: required. A delimiter of the STRING type. Regular expressions are supported. For more information about regular expressions, see [RLIKE](/help/en/maxcompute/user-guide/regular-expressions#concept-ihp-ntf-vdb).
            
        -   trimTailEmpty: optional. The default value is `true`. If you set this parameter to `false`, the empty string at the end of the array is reserved. This rule applies when the hive-compatible data type edition is enabled.
            
-   Return value
    
    An array is returned. The elements in the array are of the STRING type.
    
-   Examples
    
    ```
    -- The return value is ["a"," b"," c"]. 
    select split("a, b, c", ",");
    
    -- No empty string is returned by default.
    select split("a, b, c,,", ",");
    -- The following result is returned:
    +------------+
    | _c0        |
    +------------+
    | ["a"," b"," c"] |
    +------------+
    
    -- If you need to return an empty string, execute the following statement:
    select split("a, b, c,,", ",", false);
    -- The following result is returned:
    +------------+
    | _c0        |
    +------------+
    | ["a"," b"," c","",""] |
    +------------+
    ```
    

## SPLIT\_PART

-   Syntax
    
    ```
    string split_part(string <str>, string <separator>, bigint <start>[, bigint <end>])
    ```
    
-   Description
    
    Uses a delimiter specified by separator to split a string specified by str, and returns a substring that starts from the character specified by start and ends with the character specified by end.
    
-   Parameters
    
    -   str: required. A value of the STRING type. This parameter specifies the string that you want to split. If the input value is of the BIGINT, DOUBLE, DECIMAL, or DATETIME type, it is implicitly converted into a value of the STRING type before calculation.
        
    -   separator: required. A constant of the STRING type. This parameter specifies the delimiter that is used to split the string. The delimiter can be a character or a string.
        
    -   start: required. A constant of the BIGINT type. The value of this parameter must be greater than 0. This parameter specifies the start position of the substring to be returned. The position starts from 1.
        
    -   end: a constant of the BIGINT type. The value of this parameter must be greater than or equal to the value of start. This parameter specifies the end position of the substring to be returned. If this parameter is not specified, the value of this parameter is equal to the value of start, and the substring that starts from the character specified by start is returned.
        
-   Return value
    
    A value of the STRING type is returned. The value null is returned in the following scenarios:
    
    -   If start is set to a value greater than the number of substrings, for example, the string has 6 substrings but the start value is greater than 6, an empty string is returned.
        
    -   If separator is absent from a string specified by str and start is set to 1, the entire string specified by str is returned. If str is an empty string, an empty string is returned.
        
    -   If separator is an empty string, the original string specified by str is returned.
        
    -   If the value of end is greater than the number of substrings, the substring that starts from the character specified by start is returned.
        
    -   If the value of str is not of the STRING, BIGINT, DOUBLE, DECIMAL, or DATETIME type, an error is returned.
        
    -   If the value of separator is not a constant of the STRING type, an error is returned.
        
    -   If the value of start or end is not a constant of the BIGINT type, an error is returned.
        
    -   If the value of an input parameter except separator is null, null is returned.
        
-   Examples
    
    -   Example 1: Use the `comma (,)` as a delimiter to split the string `a,b,c,d` and return the substring that matches the specified rule. Sample statements:
        
        ```
        -- The return value is a. 
        select split_part('a,b,c,d', ',', 1);
        -- The return value is a,b. 
        select split_part('a,b,c,d', ',', 1, 2);
        ```
        
    -   Example 2: The value of start is greater than the number of substrings after the specified string is split into the substrings. Sample statement:
        
        ```
        -- The return value is an empty string. 
        select split_part('a,b,c,d', ',', 10);
        ```
        
    -   Example 3: separator does not exist in the string specified by str. Sample statement:
        
        ```
        -- The return value is a,b,c,d. 
        select split_part('a,b,c,d', ':', 1);
        -- The return value is an empty string. 
        select split_part('a,b,c,d', ':', 2);
        ```
        
    -   Example 4: separator is an empty string. Sample statement:
        
        ```
        -- The return value is a,b,c,d. 
        select split_part('a,b,c,d', '', 1);
        ```
        
    -   Example 5: The value of end is greater than the number of substrings after the specified string is split into the substrings. Sample statement:
        
        ```
        -- The return value is b,c,d. 
        select split_part('a,b,c,d', ',', 2, 6);
        ```
        
    -   Example 6: An input parameter except separator is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select split_part('a,b,c,d', ',', null);
        ```
        

## SUBSTR

-   Syntax
    
    ```
    string substr(string <str>, bigint <start_position>[, bigint <length>])
    ```
    
-   Description
    
    Returns a substring that starts from start\_position in a string specified by str and has a length specified by length.
    
-   Parameters
    
    -   str: required. A value of the STRING type. If the input value is of the BIGINT, DECIMAL, DOUBLE, or DATETIME type, it is implicitly converted into a value of the STRING type before calculation.
        
    -   start\_position: required. A value of the BIGINT type. Default value: 1.
        
        -   Hive-compatible data type edition: If start\_position is set to 0, the return value is the same as that when this parameter is set to 1.
            
        -   MaxCompute V1.0 and MaxCompute V2.0 data type editions: If start\_position is set to 0, null is returned.
            
    -   length: optional. A value of the BIGINT type. This parameter specifies the length of a substring. The value of this parameter must be greater than 0.
        
        **Important**
        
        -   If `setproject odps.function.strictmode` is set to false and the value of the length parameter is less than 0, no substring is returned.
            
        -   If `setproject odps.function.strictmode` is set to true and the value of the length parameter is less than 0, an error is returned.
            
        
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of str is not of the STRING, BIGINT, DECIMAL, DOUBLE, or DATETIME type, an error is returned.
        
    -   If the value of length is not of the BIGINT type or is less than or equal to 0, an error is returned.
        
    -   If length is not specified, the substring from the start position to the end of the string specified by str is returned.
        
    -   If the value of str, start\_position, or length is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Return a substring with the specified length that starts from the specified position in the string `abc`. Sample statements:
        
        ```
        -- The return value is bc. 
        select substr('abc', 2);
        -- The return value is b. 
        select substr('abc', 2, 1);
        -- The return value is bc. 
        select substr('abc',-2 , 2);
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select substr('abc', null);
        ```
        

## SUBSTRING

-   Syntax
    
    ```
    string substring(string|binary <str>, int <start_position>[, int <length>])
    ```
    
-   Description
    
    Returns a substring that starts from start\_position in a string specified by str and has a length specified by length.
    
-   Parameters
    
    -   str: required. A value of the STRING or BINARY type.
        
    -   start\_position: required. A value of the INT type. The start position starts from 1. If start\_position is set to 0, an empty string is returned. If start\_position is set to a negative value, the search starts from the end to the start of the string and the last character is -1.
        
    -   length: optional. A value of the BIGINT type. This parameter specifies the length of a substring. The value of this parameter must be greater than 0.
        
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of str is not of the STRING or BINARY type, an error is returned.
        
    -   If the value of length is not of the BIGINT type or is less than or equal to 0, an error is returned.
        
    -   If length is not specified, the substring from the start position to the end of the string specified by str is returned.
        
    -   If the value of str, start\_position, or length is null, null is returned.
        
-   Examples
    
    -   Example 1: Return a substring with the specified length that starts from the specified position in the string `abc`. Sample statements:
        
        ```
        -- The return value is bc. 
        select substring('abc', 2);
        -- The return value is b. 
        select substring('abc', 2, 1);
        -- The return value is bc. 
        select substring('abc',-2,2);
        -- The return value is ab. 
        select substring('abc',-3,2);
        -- The return value is 001. 
        substring(bin(2345), 2, 3);
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select substring('abc', null, null);
        ```
        

## SUBSTRING\_INDEX

-   Syntax
    
    ```
    string substring_index(string <str>, string <separator>, int <count>)
    ```
    
-   Description
    
    To extract the substring from string `str` before or after the `count`\-th occurrence of the delimiter. If count is set to a positive value, the string is truncated from left to right. If count is set to a negative value, the string is truncated from right to left. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    -   str: required. A value of the STRING type. This parameter specifies the string that you want to truncate.
        
    -   separator: required. A delimiter of the STRING type.
        
    -   count: required. The value is of the INT type. This parameter specifies the position of the delimiter.
        
-   Return value
    
    A value of the STRING type is returned. If an input parameter is set to null, null is returned.
    
-   Examples
    
    -   Example 1: Truncate the string `https://www.alibabacloud.com`. Sample statements:
        
        ```
        -- The return value is https://www.alibabacloud. 
        select substring_index('https://www.alibabacloud.com', '.', 2);
        -- The return value is alibabacloud.com. 
        select substring_index('https://www.alibabacloud.com', '.', -2);
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select substring_index('https://www.alibabacloud.com', null, 2);
        ```
        

## TO\_CHAR

-   Syntax
    
    ```
    string to_char(boolean <value>)
    string to_char(bigint <value>)
    string to_char(double <value>)
    string to_char(decimal <value>)
    ```
    
-   Description
    
    Converts data of the BOOLEAN, BIGINT, DECIMAL, or DOUBLE type into the STRING type.
    
-   Parameters
    
    value: required. A value of the BOOLEAN, BIGINT, DECIMAL, or DOUBLE type.
    
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If value is not of the BOOLEAN, BIGINT, DECIMAL, or DOUBLE type, an error is returned.
        
    -   If value is set to null, null is returned.
        
    
-   Examples
    
    -   Example 1: Convert values into the STRING type. Sample statements:
        
        ```
        -- The return value is 123. 
        select to_char(123);
        -- The return value is TRUE. 
        select to_char(true);
        -- The return value is 1.23. 
        select to_char(1.23);
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select to_char(null);
        ```
        

## TO\_JSON

-   Syntax
    
    ```
    string to_json(<expr>)
    ```
    
-   Description
    
    Converts an expression specified by expr of a given complex data type into a JSON string.
    
-   Parameters
    
    expr: required. An expression of the ARRAY, MAP, or STRUCT type.
    
    **Note**
    
    If the input expression is of the STRUCT type (`struct<key1:value1, key2:value2>`), take note of the following points:
    
    -   All keys are converted into lowercase letters when you convert the expression into a JSON string.
        
    -   If a `value` is null, the key-value pair to which the `value` belongs is not included in the JSON string that is returned. For example, if `value2` is null, `key2:value2` is not included in the JSON string that is returned.
        
    
-   Return value
    
    A JSON string is returned.
    
-   Examples
    
    -   Example 1: Convert an expression of a given complex data type into a JSON string. Sample statement:
        
        ```
        -- The return value is {"a":1,"b":2}. 
        select to_json(named_struct('a', 1, 'b', 2));
        -- The return value is {"time":"26/08/2015"}. 
        select to_json(named_struct('time', "26/08/2015"));
        -- The return value is [{"a":1,"b":2}]. 
        select to_json(array(named_struct('a', 1, 'b', 2)));
        -- The return value is {"a":{"b":1}}. 
        select to_json(map('a', named_struct('b', 1)));
        -- The return value is {"a":1}. 
        select to_json(map('a', 1));
        -- The return value is [{"a":1}]. 
        select to_json(array((map('a', 1))));
        ```
        
    -   Example 2: The input expression is of the STRUCT type. Sample statement:
        
        ```
        -- The return value is {"a":"B"}. If the expression of the STRUCT type is converted into a JSON string, all keys are converted into lowercase letters. 
        select to_json(named_struct("A", "B"));
        -- The return value is {"k2":"v2"}. The key-value pair to which null belongs is not included in the JSON string that is returned. 
        select to_json(named_struct("k1", cast(null as string), "k2", "v2"));
        ```
        

## TOLOWER

-   Syntax
    
    ```
    string tolower(string <source>)
    ```
    
-   Description
    
    Converts uppercase letters in a string specified by source into lowercase letters.
    
-   Parameters
    
    source: required. A value of the STRING type. If the input value is of the BIGINT, DOUBLE, DECIMAL, or DATETIME type, the value is implicitly converted into a value of the STRING type before calculation. Only English characters are supported.
    
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of source is not of the STRING, BIGINT, DOUBLE, DECIMAL, or DATETIME type, an error is returned.
        
    -   If the value of source is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Convert uppercase letters in a string into lowercase letters. Sample statements:
        
        ```
        -- The return value is abcd. 
        select tolower('aBcd');
        -- The return value is china fighting. 
        select tolower('China Fighting');
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select tolower(null);
        ```
        

## TOUPPER

-   Syntax
    
    ```
    string toupper(string <source>)
    ```
    
-   Description
    
    Converts lowercase letters in a string specified by source into uppercase letters.
    
-   Parameters
    
    source: required. A value of the STRING type. If the input value is of the BIGINT, DOUBLE, DECIMAL, or DATETIME type, the value is implicitly converted into a value of the STRING type before calculation. Only English characters are supported.
    
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of source is not of the STRING, BIGINT, DOUBLE, DECIMAL, or DATETIME type, an error is returned.
        
    -   If the value of source is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Convert lowercase letters in a string into uppercase letters. Sample statements:
        
        ```
        -- The return value is ABCD. 
        select toupper('aBcd');
        -- The return value is CHINA FIGHTING. 
        select toupper('China Fighting');
        ```
        
    -   Example 2: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select toupper(null);
        ```
        

## TRANSLATE

-   Syntax
    
    ```
    string translate(string|varchar <str1>, string|varchar <str2>, string|varchar <str3>)
    ```
    
-   Description
    
    Uses the specified characters in str3 to replace the characters that are included in str1 from str2. If characters that are included in str1 do not appear in str2, no character is replaced. This function is an additional function of MaxCompute V2.0.
    
-   Return value
    
    A value of the STRING type is returned. If an input parameter is set to null, null is returned.
    
-   Examples
    
    -   Example 1: Use the specified characters in the string `cd` to replace the characters that are included in `ababab` from `abab`. Sample statement:
        
        ```
        -- The return value is cdcdcd. 
        select translate('ababab','abab','cd');
        ```
        
    -   Example 2: Use the specified characters in the string `cdefg` to replace the characters that are included in `ababab` from `abab`. Sample statement:
        
        ```
        -- The return value is cdcdcd. 
        select translate('ababab','abab','cdefg');
        ```
        
    -   Example 3: An input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select translate('ababab','cd',null);
        ```
        

## TRIM

-   Syntax
    
    ```
    string trim(string <str>[,<trimChars>])
    string trim([BOTH] [<trimChars>] from <str>)
    ```
    
-   Description
    
    Remove the characters from both of the left and right sides of a string that is specified by str.
    
    -   If you do not specify trimChars, the spaces on the left side are removed by default.
        
    -   If you specify trimChars, the substrings that consist of one or more characters specified by trimChars are removed from both of the left and right sides of the string that is specified by str.
        
    
-   Parameters
    
    -   str: required. A value of the STRING type. This parameter specifies the string from both of the left and right sides of which the characters are removed. If the input value is of the BIGINT, DECIMAL, DOUBLE, or DATETIME type, the value is implicitly converted into values of the STRING type before calculation.
        
    -   trimChars: optional. A value of the STRING type. This parameter specifies the characters to be removed.
        
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of str is not of the STRING, BIGINT, DOUBLE, DECIMAL, or DATETIME type, an error is returned.
        
    -   If the value of str or trimChars is null, null is returned.
        
    
-   Examples
    
    -   Example 1: Remove the spaces from both of the left and right sides of the string `yxTxyomxx` . Sample statement:
        
        ```
        -- The return value is yxTxyomxx. 
        select trim(' yxTxyomxx ');
        -- The preceding statement is equivalent to the following statement: 
        select trim(both from ' yxTxyomxx ');
        select trim(from ' yxTxyomxx ');
        ```
        
    -   Example 2: Remove the substrings that consist of one or more characters in the `xy` collection from both of the left and right sides of the string `yxTxyomxx`.
        
        ```
        -- The return value is Txyom. Any x or y character on the left or right side is removed. 
        select trim('yxTxyomxx', 'xy');
        -- The preceding statement is equivalent to the following statement: 
        select trim(both 'xy' from 'yxTxyomxx');
        select trim('xy' from 'yxTxyomxx');
        ```
        
    -   Example 3: The input parameter is set to null. Sample statement:
        
        ```
        -- The return value is null. 
        select trim(null);
        select trim('yxTxyomxx', null);
        ```
        

## URL\_DECODE

-   Syntax
    
    ```
    string url_decode(string <input>[, string <encoding>])
    ```
    
-   Description
    
    Converts an input string in the `application/x-www-form-urlencoded MIME` format into a normal string. This is the inverse function of `url_encode`. The encoding format must comply with the following rules:
    
    -   All letters remain unchanged.
        
    -   Periods (.), hyphens (-), asterisks (\*), and underscores (\_) remain unchanged.
        
    -   Plus signs (+) are converted into spaces.
        
    -   The `%xy`\-formatted sequence is converted into byte values. Consecutive byte values are decoded to the related strings based on the value of encoding.
        
    -   Other characters remain unchanged.
        
    
-   Parameters
    
    -   input: required. A value of the STRING type. This parameter specifies the string that you want to enter.
        
    -   encoding: optional. This parameter specifies the encoding format, which can be GBK or UTF-8. If you do not specify this parameter, the default value is UTF-8.
        
-   Return value
    
    A UTF-8 encoded string of the STRING type is returned. If the value of input or encoding is null, null is returned.
    
-   Example
    
    ```
    -- The return value is for url_decode:// (fdsf). 
    select url_decode('%E7%A4%BA%E4%BE%8Bfor+url_decode%3A%2F%2F+%28fdsf%29');
    -- The return value is Example for URL_DECODE:// dsf(fasfs). 
    select url_decode('Example+for+url_decode+%3A%2F%2F+dsf%28fasfs%29', 'GBK');
    ```
    

## URL\_ENCODE

-   Syntax
    
    ```
    string url_encode(string <input>[, string <encoding>])
    ```
    
-   Description
    
    Encodes an input string in the `application/x-www-form-urlencoded MIME` format. The encoding format must comply with the following rules:
    
    -   All letters remain unchanged.
        
    -   Periods (.), hyphens (-), asterisks (\*), and underscores (\_) remain unchanged.
        
    -   Spaces are converted into plus signs (+).
        
    -   Other characters are converted into byte values based on the specified encoding format. Each byte value is then represented in the `%xy` format, where `xy` is the hexadecimal representation of the character value.
        
    
-   Parameters
    
    -   input: required. A value of the STRING type. This parameter specifies the string that you want to enter.
        
    -   encoding: optional. This parameter specifies the encoding format, which can be GBK or UTF-8. If you do not specify this parameter, the default value is UTF-8.
        
-   Return value
    
    A value of the STRING type is returned. If the value of input or encoding is null, null is returned.
    
-   Examples
    
    ```
    -- The return value is %E7%A4%BA%E4%BE%8Bfor+url_encode%3A%2F%2F+%28fdsf%29. 
    select url_encode('Example for url_encode:// (fdsf)');
    -- The return value is Example+for+url_encode+%3A%2F%2F+dsf%28fasfs%29. 
    select url_encode('Example for url_encode:// dsf(fasfs)', 'GBK');
    ```
    

## **References**

If the preceding functions cannot meet your business requirements, you can write your own code logic to create user-defined functions (UDFs) to meet your diverse business requirements. For more information, see [Overview](/help/en/maxcompute/user-guide/overview-22).
