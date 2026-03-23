This topic explains why startup errors occur in the data transformation engine and how to troubleshoot them.

The first step in a data transformation task is to start the data transformation engine. Startup errors occur when the SLS DSL rules you write fail the engine’s internal security check. ![加工引擎启动](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9453749951/p59300.png)

## Error log

If the engine detects invalid SLS DSL rules during startup, it returns an error like this:

```
{
  "errorMessage": "ETL config doesn't pass security check, detail: XXXXXX"
}
```

**Note**

You can view error logs in the exception details of the data transformation diagnostic report or in the internal-etl-log LogStore.

-   If an error occurs during engine startup, the data transformation task retries automatically until it succeeds or you stop it manually.
    
-   After you fix the transformation rule and a retry succeeds, the task resumes normal operation. No logs are lost or duplicated.
    

## Troubleshoot common errors

-   Basic syntax errors
    
    Your SLS DSL rules violate syntax rules. For example, you use mismatched parentheses or write commas (,) as colons (:).
    
    -   Error logs
        
        ```
        {
          "errorMessage": "ETL config doesn't pass security check, detail: invalid syntax"
        }
        {
          "errorMessage": "ETL config doesn't pass security check, detail: unexpected EOF while parsing"
        }
        ...
        ```
        
    -   Troubleshooting method
        
        Use the `traceback` information in the error log to locate the exact syntax error. For example, you wrote `e_set("test", v("status"))` as `e_set("test": v("status"))`, as shown in the following figure. ![错误日志语法](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0553749951/p59301.png)
        
-   Invalid use of operators
    
    All operations in SLS DSL must use built-in functions. Use op\_\* functions for arithmetic and comparisons. Do not use raw operators.
    
    -   Error log
        
        ```
        {
          "errorMessage": "ETL config doesn't pass security check, detail: invalid type detected: <class `_ast.BinOp`> "
        }
        ```
        
    -   Troubleshooting method
        
        Review your SLS DSL rules. Make sure all operations—including arithmetic and comparisons—use SLS DSL functions.
        
    -   Examples
        
        ```
        e_set("b", v("a") - 10) # Invalid
        e_set("b", op_sub(v("a"), 10)) # Valid
        
        e_set("b", v("a") >= v("c")) # Invalid
        e_set("b", op_ge(v("a"), v("c"))) # Valid
        ```
        
-   Incorrect function parameter types or calls to undefined functions
    
    An error occurs if you pass a parameter with the wrong type to a function or call a function that does not exist.
    
    -   Error log
        
        ```
        {
          "errorMessage": "ETL config doesn't pass security check, detail: invalid call in detected: function_name"
        }
        ```
        
    -   Troubleshooting method
        
        -   First, verify that the function exists and its name is spelled correctly. If the function exists and the name is correct, confirm that you passed parameters of the right type.
            
        -   Use the `traceback` information in the error log to find the failing function. For example, if dt\_totimestamp fails, confirm the function exists, then check whether you passed the correct parameter type to it. ![函数错误信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0553749951/p59302.png)
            
    -   Examples
        
        The dt\_totimestamp function expects a datetime object. Here, `v("time1")` is a string. Passing a string causes the error.
        
        Fix it by converting the string to a datetime object using dt\_parse before calling dt\_totimestamp. Or use dt\_parsetimestamp instead—it accepts strings directly.
        
        ```
        # Invalid
        e_set("time1", "2019-06-03 2:41:26")
        e_set("time2", dt_totimestamp(v("time1")))
        
        # Valid
        e_set("time1", "2019-06-03 2:41:26")
        e_set("time2", dt_totimestamp(dt_parse(v("time1"))))
        
        # Valid
        e_set("time1", "2019-06-03 2:41:26")
        e_set("time2", dt_parsetimestamp(v("time1")))
        ```
        
    
-   Calls to expression functions in global operations
    
    SLS DSL supports two function types: global operation functions and expression functions. Only global operation functions can be used as standalone steps in a transformation rule. Calling an expression function directly causes an error.
    
    -   Error log
        
        ```
        {
          "errorMessage": "ETL config doesn't pass security check, detail:  invalid type detected: <class '_ast.Expr'>"
        }
        ```
        
    -   Troubleshooting method
        
        Check whether you called an expression function directly as a transformation step.
        
    -   Examples
        
        ```
        # Invalid
        op_add(v("a"), v("b"))
        str_lower(v("name"))
        
        # Valid
        e_set("add", op_add(v("a"), v("b")))
        e_set("lower", str_lower(v("name")))
        ```
        
    
-   Invalid variable assignment.
    
    SLS DSL does not support variable assignment. Pass values statelessly instead.
    
    -   Error log
        
        ```
        {
          "errorMessage": "ETL config doesn't pass security check, detail: invalid assign detected: variable_name"
        }
        ```
        
    -   Troubleshooting method
        
        -   Check your SLS DSL rule for variable assignments.
            
        -   Locate the source of the error from the `traceback` in the error log.
            
    -   Examples
        
        ```
        # Invalid
        sum_value = op_add(v("a"), v("b"))
        e_set("sum", sum_value)
        
        # Valid
        e_set("sum", op_add(v("a"), v("b")))
        ```
