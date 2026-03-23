This topic describes how to use the REGEXP\_REPLACE function. This function replaces the specified string with the desired string and returns a new string.

## Limits

This function is supported only in Realtime Compute for Apache Flink that uses Ververica Runtime (VVR) 3.0.0 or later.

## Syntax

```
VARCHAR REGEXP_REPLACE(VARCHAR str, VARCHAR pattern, VARCHAR replacement)
```

## Input parameters

**Parameter**

**Data type**

**Description**

str

VARCHAR

The specified string.

pattern

VARCHAR

The original string that you want to replace.

replacement

VARCHAR

The string that is used to replace the original string.

**Important**

-   If an input parameter is NULL or the regular expression is invalid, NULL is returned.
    
-   The system parses the pattern and replacement parameters into regular expressions. The regular expressions are processed by using [Java Pattern](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html). Therefore, the pattern and replacement parameters must follow the syntax for Java Regex.
    

## Example

-   Test data
    
    Table 1. T1
    
    **str1(VARCHAR)**
    
    **pattern1(VARCHAR)**
    
    **replace1(VARCHAR)**
    
    2014-03-13
    
    \-
    
    Empty string
    
    Empty string
    
    \-
    
    Empty string
    
    2014-03-13
    
    Empty string
    
    s
    
    2014-03-13
    
    (
    
    s
    
    100-200
    
    (\\d+)
    
    num
    
-   Test statement
    
    ```
    SELECT REGEXP_REPLACE(str1, pattern1, replace1) as `result`
    FROM T1;
    ```
    
-   Test result
    
    **result(VARCHAR)**
    
    20140313
    
    Empty string
    
    s2s0s1s4s-s0s3s-s1s3s
    
    NULL
    
    num-num
