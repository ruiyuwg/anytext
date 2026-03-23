The Simple Log Service (SLS) DSL is based on Python and provides more than 200 built-in functions to simplify data transformation tasks. This topic describes the language modes, function categories, and execution principles of the DSL.

## Language modes

SLS DSL is compatible with Python. In standard mode, SLS DSL is a subset of Python. Except for basic data structures and expressions, all other syntax rules are implemented using functions.

**Category**

**Python syntax**

**Standard mode**

Data structure

Number, string, and Boolean

Supported.

Strings that start or end with `"""` are not supported.

Tuple, list, set, and dictionary

Supported.

The `set` structure is not supported, such as `{1,2,3}`.

Object

Only built-in extended data structures such as table and datetime objects are supported.

Basic syntax

Operators such as the plus sign (+), subtraction sign (-), multiplication sign (×), and division operator (/)

Only comparison operators, such as `==, !=, >`, and logical operators, such as and, or, and not, can be used directly in code. You must call functions to use other operators.

Comments

Supported.

Variable assignment

Not supported. You must call functions to pass values to variables.

Prerequisites

Supported. Functions: e\_if, e\_if\_else, and e\_switch.

Loops

Indirectly supported. You must use nested built-in functions to implement loops. The following sample functions show how to traverse the elements in an array:

```
e_if(op_ge(op_len(json_parse(v("x"))), 1), e_set("x0", lst_get(v("x"), 0)))
e_if(op_ge(op_len(json_parse(v("x"))), 2), e_set("x1", lst_get(v("x"), 1)))
```

Function

Standard built-in functions of Python

Not supported. Instead, you can use the more than 200 built-in functions provided by SLS DSL.

Function calls

Supported. Function calls that use parameter unpacking are not supported.

User-defined functions such as def or lambda

Not supported. SLS DSL provides more than 200 global processing and expression functions. Combine these functions as needed.

Module

Import and use of the Python standard library

Not supported.

Creation of threads and processes

Not supported.

Import of third-party libraries

Not supported.

External network connection or external command call

Supported. SLS DSL provides built-in resource connectors.

## Function categories

In standard mode, SLS DSL performs all operations by calling functions. The DSL provides more than 200 built-in functions, which are categorized into global processing functions and expression functions.

-   Global processing functions
    
    Global processing functions are used to receive, process, and return logs. Only global processing functions can be used to construct each step in a transformation rule.
    
-   Expression functions
    
    Expression functions are commonly used to receive specific parameters and return specific values. Expression functions can be combined and passed to global processing functions as parameters to define more flexible logic.
    

The following table compares the capabilities of the two function types.

**Function type**

**Overall steps**

**Receive**

**Return**

**Modify log**

**Combine functions**

Global processing functions

Support

Logs are automatically received

Zero to multiple logs

Supported in most cases

Supported

Expression functions

Not supported

Supported by only a few expression functions. Most expression functions do not directly process logs.

Specific data structures

Not supported

Supported

## Global processing functions

A function to accept and return logs.

**Note**

Only a global processing function can be placed in the first line of each step.

A transformation rule in SLS DSL uses the following syntax:

```
Global Processing Function 1(..Parameters....)
Global Processing Function 2(..Parameters....)
Global Processing Function 3(..Parameters....)
Global Processing Function 4(..Parameters....)
```

Global processing functions fall into two categories:

**Category**

**Description**

**Example**

Flow control functions

These functions manage process flow, receive logs, and conditionally invoke other functions to process logs.

`e_if`, `e_switch`, and `e_if_else`.

Event processing functions

These functions transform logs and return zero to multiple logs.

Examples:

-   `e_drop_fields`: discards log fields.
    
-   `e_kv`: extracts and adds key-value pairs from logs.
    
-   `e_dict_map`: enriches logs.
    

Transformation logic:

-   Basic processing
    
    The data transformation feature reads streaming data from a source logstore and sends each log as a dictionary to the transformation rule. The system then sequentially runs the functions specified in the rule to process the logs and writes the results to the destination logstore.
    
    **Note**
    
    All fields and values of a log are sent as strings. For example, the raw log `{"__time__": "1234567", "__topic__": "", "k1": "test"}` is processed by the `e_set("f1", 200)` function. The function adds the `f1` field with a value of 200. After processing, the log becomes `{"__time__": "1234567", "__topic__": "", "k1": "test", "f1": "200"}`. In this log, both the `f1` field and the value 200 are strings.
    
    The event processing functions specified in a transformation rule are called in sequence. Each function receives a log, processes it, and then returns the processed log.
    
    For example, the `e_set("type", "test")` function adds the `type` field with a value of test to a log. The next function receives and processes the modified log.
    
-   Condition evaluation
    
    -   e\_if: The e\_if function lets you add conditional expressions to process logs. If a log does not meet the specified condition, the corresponding operation is skipped. The e\_if function implements the `if` logic.
        
        For example, the `e_if(e_match("status", "200"), e_regex("data", "ret: \d+", "result"))` function checks whether the value of the `status` field is 200. If true, the function extracts the `result` field from the `data` field using the specified regular expression. Otherwise, no operation is performed.
        
    -   `e_if_else`: This function works similarly to the `if_else` operation.
        
-   Processing termination
    
    -   A step in a transformation rule may return no log, which indicates that the log has been deleted.
        
        For example, the `e_if(str_islower(v("result")), e_drop())` function checks whether the value of the `result` field is a lowercase string. If true, the log is discarded and subsequent steps are not performed on this log. The system automatically processes the next log.
        
    -   Writing a log to a destination logstore terminates processing. For example, if the `e_output` function writes a log to a destination logstore and deletes it, subsequent steps are not performed on this log.
        
        **Note**
        
        The `e_coutput` function copies the output log and continues processing subsequent steps.
        
-   Log splitting for parallel processing
    
    A step in a transformation rule may return multiple logs, which indicates that the log has been split.
    
    For example, the `e_split(data)` function splits a log into two logs based on the value of the `data` field. If the value of the `data` field is `"abc, xyz"`, the log is split into two logs. In one log, the value of the `data` field is abc. In the other log, the value is xyz.
    
    The logs generated after splitting are processed in subsequent steps.
    

For more information, see [Global processing functions](/help/en/sls/overview-of-global-processing-functions/#concept-1597667).

## Expression functions

In addition to global processing functions, SLS DSL provides 200 expression functions that accept specific parameters and return specific values. Call an expression function or a combination of expression functions within a global processing function. The syntax is as follows:

```
Global Processing Function 1(Expression Function 1(...), ...)
Global Processing Function 2(..., Expression Function 2(...), Expression Function 3(...), ...)
```

Expression functions fall into four categories:

**Category**

**Description**

**Example**

Event check functions

These functions receive logs, extract or retrieve specific information, and return that information without modifying the logs.

The `v` function returns the value of a log field. The `e_search` and `e_match` functions check whether a log meets a specified condition.

Resource functions

These functions connect to on-premises or external resources, use specific parameter settings, and return data such as dictionaries or tables.

OSS, RDS, and logstore resource functions.

Control functions

These functions perform logical operations on expressions. They use specific parameters, apply conditional control, and invoke other expression functions to return results.

`op_and`, `op_or`, `op_not`, `op_if`, and `op_coalesce`.

Other expression functions

These functions accept fixed values or the results of other function calls and return specific values.

String, date and time, and type conversion functions.

For more information, see [Expression functions](/help/en/sls/overview-of-expression-functions/#concept-1130570).
