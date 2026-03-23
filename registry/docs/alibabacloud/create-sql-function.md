SQL user-defined functions (UDFs) help resolve the issue that MaxCompute can use only Java or Python to create UDFs, and support parameters of the function type. This improves the expression flexibility of business logic. You can create permanent SQL UDFs and temporary SQL UDFs. This topic describes how to execute the `CREATE SQL FUNCTION` statement to create a permanent SQL UDF.

## **Precautions**

-   When you use SQL statements to define a UDF, make sure that you perform the operation in SQL script mode. If you perform the operation in common SQL editing mode, an error may occur.
    
    **Note**
    
    For more information about the SQL script mode of MaxCompute, see [SQL in script mode](/help/en/maxcompute/user-guide/sql-in-script-mode).
    
-   MaxCompute allows you to execute the `CREATE SQL FUNCTION` statement to create an SQL UDF. The UDFs that are created by using this statement are permanent SQL UDFs. After a UDF is created by using the CREATE SQL FUNCTION statement, the UDF is stored in the metadata system of MaxCompute. You can query the UDF in the function list of MaxCompute. All subsequent query operations can call the UDF.
    
    **Note**
    
    For more information about how to create a temporary SQL UDF, see [FUNCTION](/help/en/maxcompute/user-guide/function).
    
-   When you use SQL statements to define a UDF, make sure that the data types of input parameters of the UDF are the data types supported by MaxCompute. For more information about the data types supported by MaxCompute, see [MaxCompute V2.0 data type edition](/help/en/maxcompute/user-guide/maxcompute-v2-0-data-type-edition#concept-2454988). After the UDF is created, make sure that the data types of the input parameters of the SQL UDF you want to call are the same as the data types of the input parameters of the defined UDF.
    
-   When you create, query, call, or drop an SQL UDF, make sure that the Alibaba Cloud account that you use has the required function-level permissions. For more information about function-level permissions and authorization operations, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).
    

## Syntax

```
create sql function <function_name>(@<parameter_in1> <datatype>[, @<parameter_in2> <datatype>...]) 
[returns @<parameter_out> <datatype>] 
as [begin] 
<function_expression> 
[end];
```

## Parameters

-   function\_name: required. This parameter specifies the name of the SQL UDF that you create. The function name must be unique in a project and cannot be the same as the name of a built-in function. Functions that have the same name can be registered only once. You can execute the [LIST FUNCTIONS](/help/en/maxcompute/user-guide/list-functions) statement to view all functions in a project and check whether an existing function has the same name as the function that you want to create.
    
-   parameter\_in: required. This parameter specifies the input parameters of the SQL UDF that you want to create. The input parameters can be of the function type, including anonymous functions. For more information about how to create an SQL UDF whose input parameter is of the function type, see [Example on how to create an SQL UDF whose input parameter is of the function type](/help/en/maxcompute/user-guide/sql-udfs#section-eg6-u9x-2iy). For more information about how to create an SQL UDF whose input parameter is an anonymous function, see [Example on how to create an SQL UDF whose input parameter is an anonymous function](/help/en/maxcompute/user-guide/sql-udfs#section-q60-6xc-bn8).
    
-   datatype: required. This parameter specifies the data types of the input parameters of the UDF. For more information about the data types supported by MaxCompute, see [MaxCompute V2.0 data type edition](/help/en/maxcompute/user-guide/maxcompute-v2-0-data-type-edition#concept-2454988).
    
-   returns: optional. This parameter specifies the return value of the UDF. The return value is a variable. If you do not specify this parameter, the value of the function\_name parameter is returned by default.
    
-   parameter\_out: required. This parameter specifies the response parameters of the UDF.
    
-   function\_expression: required. This parameter specifies the expression (implementation logic) of the UDF.
    

## Examples

-   The following sample code provides an example of a UDF that has simple logic.
    
    ```
    create sql function my_add(@a BIGINT) as @a + 1;
    ```
    
    In the preceding example, `@a + 1` indicates the logic of the SQL UDF. You can write it as an expression. The expression can be a built-in operator, built-in function, or UDF.
    
-   If the UDF logic is complex, you can use begin and end in the SQL statement to specify the range of the UDF expression. You can write multiple statements as the UDF expression in the range specified by begin and end. The following sample code provides an example.
    
    ```
    create sql function my_sum(@a BIGINT, @b BIGINT, @c BIGINT) returns @my_sum BIGINT
    as begin 
        @temp := @a + @b;
        @my_sum := @temp + @c;
    end;
    ```
    
    Parameters:
    
    -   returns specifies the return value of the UDF. The return value is a variable. If you do not specify this parameter, the value of the function\_name parameter is returned by default.
        
    -   The expressions in begin and end are the function implementation logic of the SQL UDF.
        

The input parameters of an SQL UDF can be of the function type, such as built-in functions of MaxCompute and other UDFs. For more information about related examples, see [](/help/en/maxcompute/user-guide/sql-udfs#section-eg6-u9x-2iy)and [](/help/en/maxcompute/user-guide/sql-udfs#section-q60-6xc-bn8).

## Related statements

-   [FUNCTION](/help/en/maxcompute/user-guide/function#reference-2239988): creates temporary SQL UDFs. If you do not need to store SQL UDFs in the metadata system of MaxCompute, you can create temporary SQL UDFs.
    
-   [DESC FUNCTION](/help/en/maxcompute/user-guide/desc-function#reference-2239954): displays the information about a specified UDF in a MaxCompute project. The information includes the name, owner, creation time, class name, and resource list of the UDF.
    
-   [LIST FUNCTIONS](/help/en/maxcompute/user-guide/list-functions#reference-2239999): displays the information about all UDFs in a MaxCompute project.
    
-   [DROP FUNCTION](/help/en/maxcompute/user-guide/drop-function#reference-2239965): drops an existing UDF from a MaxCompute project.
    
-   [SELECT FUNCTION](/help/en/maxcompute/user-guide/select-function#reference-2240021): calls an SQL UDF.
