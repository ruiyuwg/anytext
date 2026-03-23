MaxCompute provides a wide range of built-in functions that meet most data processing requirements. This topic describes the types of built-in functions and how to use them.

## Function types

**Function type**

**Description**

[Date and time functions](/help/en/maxcompute/user-guide/date-functions/#concept-akb-2c2-5db)

Process date and time data types, such as DATE, DATETIME, and TIMESTAMP. These functions let you add or subtract dates, calculate date differences, extract date fields, get the current time, and convert date formats.

[Mathematical functions](/help/en/maxcompute/user-guide/mathematical-functions/#concept-ubn-3kb-5db)

Process numeric data types, such as BIGINT, DOUBLE, DECIMAL, and FLOAT. These functions let you convert number bases, perform mathematical operations, round numbers, and get random numbers.

[Window functions](/help/en/maxcompute/user-guide/window-functions-1/#concept-nyb-ftl-vdb)

Perform operations within a specified window column. These functions let you calculate sums, find maximum and minimum values, calculate averages and medians, sort numbers, offset values, and perform sampling.

[Aggregate functions](/help/en/maxcompute/user-guide/aggregate-functions/#concept-q4j-zrd-5db)

Aggregate multiple input records into a single output value. These functions let you calculate sums, averages, maximum and minimum values, aggregate parameters, and concatenate strings.

[HyperLogLog++ functions](/help/en/maxcompute/user-guide/hyperloglog-function/)

These are approximate aggregate functions. When the data volume is very large, HyperLogLog++ functions can quickly remove duplicates and accelerate queries using a small amount of memory.

[String functions](/help/en/maxcompute/user-guide/string-functions/#concept-ulf-pfm-vdb)

Process STRING data. These functions let you truncate, replace, and find strings, change character case, and convert string formats.

For the limits of string functions, see [Limits of string functions](#778f6239edc4g).

[ARRAY functions](/help/en/maxcompute/user-guide/array-function/)

Process ARRAY data. These functions let you construct arrays, remove duplicate elements, aggregate elements, sort elements, and merge elements.

[MAP functions](/help/en/maxcompute/user-guide/the-map-function/)

Process MAP data. These functions let you extract key-value pairs, construct maps, and merge maps.

[STRUCT functions](/help/en/maxcompute/user-guide/struct-function/)

Process STRUCT data. These functions let you expand STRUCT arrays and construct structs.

[JSON functions](/help/en/maxcompute/user-guide/json-function/)

Process JSON data. These functions let you extract JSON field values, generate JSON objects or arrays, insert or update JSON data, and handle complex data structures.

For the limits of JSON functions, see [Limits of JSON functions](#19d84660162oa).

[Encryption functions](/help/en/maxcompute/user-guide/encryption-and-decryption-functions/#concept-2306098)

Process STRING and BINARY table data. These functions let you encrypt and decrypt data.

[Network functions](/help/en/maxcompute/user-guide/net-functions/)

Process network-related STRING and BINARY data. These functions let you convert IP address formats, parse URLs, and get network masks.

[Unstructured data processing functions](/help/en/maxcompute/user-guide/unstructured-processing-function/)

Connect to unstructured data and its metadata stored in data warehouses or data lakes in multiple ways.

[Other functions](/help/en/maxcompute/user-guide/other-functions/#concept-wzd-xhm-vdb)

MaxCompute also provides other functions for different business scenarios.

For more information about the mapping between MaxCompute functions and open source functions, see [Mapping between built-in functions of MaxCompute, Hive, MySQL, and Oracle](/help/en/maxcompute/user-guide/mappings-between-built-in-functions-of-maxcompute-and-built-in-functions-of-hive-mysql-and-oracle#concept-fbn-zcn-sfb).

## Usage notes

Note the following when you use built-in functions:

-   The type, number, and format of input parameters for a built-in function must conform to the specified syntax. Otherwise, MaxCompute cannot parse the function, and the SQL statement fails to execute.
    
-   If the input parameters of a built-in function use data types 2.0, such as TINYINT, SMALLINT, INT, FLOAT, VARCHAR, TIMESTAMP, or BINARY, you must enable data types 2.0. Otherwise, an error is reported. To enable data types 2.0:
    
    -   Session level: Add `SET odps.sql.type.system.odps2=true;` before the SQL statement and submit them together. This configuration is valid only for the current SQL statement.
        
    -   Project level: The project owner can enable this setting for the project. The configuration takes effect in 10 to 15 minutes and applies to all subsequent SQL statements.
        
        ```
        SETPROJECT odps.sql.type.system.odps2=true;
        ```
        
-   When data types 2.0 are enabled for a MaxCompute project, some implicit type conversions are disabled to prevent potential precision loss or errors. These disabled conversions include STRING to BIGINT, STRING to DATETIME, DOUBLE to BIGINT, DECIMAL to DOUBLE, and DECIMAL to BIGINT. To resolve this issue, use the [CAST](/help/en/maxcompute/user-guide/other-functions/#section-bpc-dy1-wdb) function to perform explicit conversions, or disable data types 2.0.
    
-   If a user-defined function (UDF) has the same name as a built-in function, the UDF overwrites the built-in function. For example, if a UDF named CONCAT exists in a MaxCompute project, the system calls the UDF by default instead of the built-in CONCAT function. To call the built-in function, add `::` before the function name. For example, `SELECT ::CONCAT('ab', 'c');`.
    
-   The results of built-in functions may vary depending on the global properties configured for the MaxCompute project. You can run the `SETPROJECT;` command to view the global properties of the project.
    

## **Limits of JSON functions**

-   **SDK version requirements**
    
    -   Only Java SDK V0.44.0 and later versions are supported.
        
    -   Only PyODPS V0.11.4.1 and later versions are supported.
        
-   **Table operation limits**
    
    -   You cannot add a JSON column to a table.
        
    -   Clustered tables are not supported.
        
    -   Tables of the Delta Table type are not supported.
        
-   **SQL operation limits**
    
    -   Comparison operations on the JSON type are not supported.
        
    -   You cannot use `ORDER BY` or `GROUP BY` clauses on the JSON type. You also cannot use a JSON type column as a `JOIN` key.
        
-   **Data precision**
    
    -   The integer part of a JSON NUMBER is stored as a BIGINT type. An overflow occurs if the integer is outside the BIGINT range.
        
    -   The decimal part of a JSON NUMBER is stored as a DOUBLE type. Precision loss may occur when the decimal part is converted to the DOUBLE type.
        
-   **Character limits**: The Unicode character `\u0000` is not supported in strings that are used to generate JSON data.
    
-   **Engine compatibility**: If you use another engine, such as Hologres, to read data from a table, the JSON data type cannot be read.
    
-   Java UDFs and Python UDFs do not support the JSON type.
    
-   The JSON data type can be nested up to 20 levels deep.
    
-   **Development tools**
    
    Supported development tools include the MaxCompute client (odpscmd), MaxCompute Studio, and DataWorks. External ecosystems such as Dataphin are not supported. If you want to use the JSON data type with an external system, you must confirm its compatibility before you start. When you use the odpscmd client, note the following:
    
    -   You must upgrade the client to V0.46.5 or later. Otherwise, you cannot run the `DESC json_table` command or download JSON data using Tunnel.
        
    -   In the `conf\odps_config.ini` file in the client installation path, set the `use_instance_tunnel` parameter to `false`. Otherwise, queries will fail.
        

## **Limits of string functions**

The following functions support only English characters:

-   TRIM/RTRIM/LTRIM: The trimChars parameter supports only English characters.
    
-   REVERSE: Supports only English characters in Hive mode.
    
-   SOUNDEX: Converts only English characters.
    
-   TOLOWER: Converts English uppercase letters in a string to lowercase.
    
-   TOUPPER: Converts English lowercase letters in a string to uppercase.
    
-   INITCAP: Converts the first English letter of each word to uppercase and the rest to lowercase.
