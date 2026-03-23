This topic describes the conventions of annotations, identifiers, data types, variables, operators, clauses, and functions in the EdgeScript syntax.

**Note**

You cannot use double quotation marks (") in EdgeScript.

The following table describes the details about the EdgeScript syntax.

**Syntax**

**Rule**

**Annotations**

All annotations must start with a number sign (#). Example: # this is annotation.

**Identifiers**

-   Identifiers are case-sensitive. An identifier can contain letters, digits, and underscores (\_). It cannot start with a digit.
    
-   All names of built-in variables, custom variables, built-in functions, and custom functions must comply with the identifier conventions.
    

**Data types**

-   String
    
    Literal constants: use a pair of single quotation marks (') to quote a literal constant, such as `'hello, EdgeScript'`.
    
-   Number
    
    Literal constants: decimal numbers, such as 10, -99, or 1.1.
    
-   Boolean
    
    Literal constants: true or false.
    
-   Dictionary
    
    Literal constants:
    
    -   \[\]: an empty string.
        
    -   `['key1', 'key2', 100]`:
        
        -   `1 -> 'key1'`
            
        -   `2 -> 'key2'`
            
        -   `3 -> '100'`
            
    -   `['key1' = 'value1', 'key2' = '1000']`
        
        -   `'key1' -> 'value1'`
            
        -   `'key2' -> 1000`
            
    

**Variables**

-   Definition
    
    A variable is a symbolic name associated with a value that may change.
    
-   How to use
    
    -   Both built-in and custom variables are referenced by using their names.
        
        -   Reference a built-in variable: `host`.
            
        -   Reference a custom variable: `seckey`.
            
    -   To emphasize the built-in properties of a variable, you can use `$` to reference it.
        
        Reference a built-in variable: `$host`.
        
    -   A custom variable and a built-in variable cannot use the same name.
        
        For more information about built-in variables, see [EdgeScript built-in variables](/help/en/cdn/user-guide/edgescript-built-in-variables#concept-1322635).
        

**Operators**

-   \=: the assignment operator.
    
    -   Example: `seckey = 'ASDLFJ234dxvf34sDF'`
        
    -   Example: `seckeys = ['key1', 'key2']`
        
-   \-: the minus operator.
    
    Example: `inum = -10`
    
-   Built-in functions are used to process different types of data. No additional operators are provided. For more information about built-in functions, see [Logical functions](/help/en/cdn/user-guide/logical-functions#concept-1322636).
    
    -   The built-in functions support the following data types:
        
        -   String
            
        -   Number
            
        -   Dictionary
            
    -   Examples
        
        -   `sval = concat(sval, 'trail')`
            
        -   `len(arrvar)`
            

**Clauses**

-   Condition clause
    
    ```
    if condition {   
       ...
    }
    
    if condition1 {   
       if condition2 {
            ...
       }
    }
    
    if condition {
       ...
    } else {
       ...
    }
    ```
    
-   Clause description
    
    -   A `condition` clause contains the following elements:
        
        -   Literal constant
            
        -   Variable
            
        -   Function call
            
    -   Body
        
        -   The body can be empty.
            
        -   Multiple statements are allowed. Enter only one statement on each line.
            
    -   Statement nesting is allowed.
        
    -   CodingStyle
        
        The opening brace ({) must follow `if condition` on the same line.
        
-   for loop
    
    ```
    a = ['a', 'b', 'c', 'd']
    def for_func () {
        for k, v in a {
            if eq(v, 'c') {
                return true
            }
        }   
    }
    for_func()
    
    ##########################################################################################
    
    a = ['a' = 1, 'b' = 2, 'c' = 3, 'd' = 4, 'e' = 5, 'f' = 6]
    def for_func () {
        for k, v in a {
            if eq(k, 'c') {
                return true
            }
        }   
    }
    for_func()
    
    ##########################################################################################
    
    num = 0
    def for_func () {
        a = [0,1,2,3,4,5,6,7,8,9]
        for k ,v in a {
            b = [0,1,2,3,4,5,6,7,8,9]
            for k1 ,v1 in b {
                c = [0,1,2,3,4,5,6,7,8,9]
                for k2 ,v2 in c {
                    num = add(num, 1)
                    if and(eq(v, 3), eq(v1, 5), eq(v2, 7)) {
                        return true
                    }
                }
            }
        } 
    }
    for_func()
    ```
    
-   Take note of the following limits:
    
    -   for loops are used only to traverse data of the dictionary or array type.
        
    -   Keywords such as break are not supported. We recommend that you use custom functions and use the return keyword to break loops.
        
    -   Statement nesting is allowed.
        
    -   CodingStyle
        
        The opening brace ({) must follow `for`... on the same line.
        

**Functions**

-   Syntax
    
    ```
    def Function name(Parameter list) {
       ...
    }
    ```
    
-   Description
    
    -   Parameter list
        
        -   The parameter list can be empty.
            
        -   Multiple parameters are allowed. Separate parameters with commas (,).
            
    -   Body
        
        -   The body can be empty.
            
        -   Multiple statements are allowed. Enter only one statement on each line.
            
        -   The return values support the return clause.
            
    -   CodingStyle
        
        The opening brace ({) must follow `def` Function name(Parameter list) on the same line.
        
-   Function call
    
    You must use `Function name`() to call both built-in and custom functions.
    

**Others**

You must not use double quotation marks (") in EdgeScript.
