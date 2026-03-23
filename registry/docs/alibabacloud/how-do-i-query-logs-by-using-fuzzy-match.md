This topic describes how to query logs by using fuzzy match.

## Include wildcard characters in query statements to implement fuzzy match

### **Principle**

1.  Simple Log Service queries the first 100 words that are matched based on the fuzzy match condition.
    
2.  The returned data is the logs that include the matched words.
    

If the prefix of the fuzzy match condition is short, the number of matched words may exceed 100. In this case, only a part of matched logs are returned. In addition, if you combine the NOT clause with wildcard characters, only a part of words can be filtered. For example, if you execute the `not abcd*` statement, words that start with abcd are still returned.

### **Method**

In Simple Log Service, an asterisk (\*) indicates zero or more occurrences of characters. A question mark (?) indicates one occurrence of a character. For example, `abc*` indicates that a word is matched if the word starts with abc. `ab?d` indicates that a word is matched if the word starts with ab, ends with d, and contains one character between ab and d. For more information, see [Search syntax](/help/en/sls/query-syntax/#concept-tnd-1jq-zdb).

## Use the LIKE clause to implement fuzzy match

The LIKE clause complies with the LIKE syntax in standard SQL. The percent sign (%) in a LIKE clause indicates zero or more occurrences of characters. The underscore (\_) indicates one occurrence of a character.

Example:

-   Query logs that include fields whose names start with `abcd`:
    
    ```
    * | select * from log where key like 'abcd%'
    ```
    
-   Query logs that include fields whose names do not start with `abcd`:
    
    ```
    * | select * from log where key not like 'abcd%'
    ```
    

## Use regular expression functions to implement fuzzy match

You can specify a regular expression in a regular expression function to match multiple words. Regular expressions can match characters and digits, and can better meet your business requirements. For more information, see [Regular expression functions](/help/en/sls/regular-expression-functions-1#concept-v5n-nlq-zdb).

Example:

-   \* | select \* from log where regexp\_like(key, abc\*): returns the words that start with abc.
    
-   \* | select \* from log where regexp\_like(key, abc\\d+): returns the words that start with abc. In addition, abc is followed by digits.
    
-   \* | select \* from log where regexp\_like(key, abc\[xyz\]): returns the words that start with abc. In addition, abc is followed by x,y, or z.
