MaxCompute allows you to use SQL user-defined functions (UDFs) to simplify the process of defining and using specific simple UDFs. This topic describes how to define and use SQL UDFs.

## Background information

### **Feature description**

SQL UDFs help resolve the issue that MaxCompute can use only Java or Python to create UDFs and support input parameters of the function type. SQL UDFs improve the expression flexibility of business logic. SQL UDFs can be used to implement simple features and improve the code reuse rate. SQL UDFs provide the following features:

-   You can use SQL scripts to define and call UDFs.
    
    -   You can use SQL statements to define permanent SQL UDFs. After you define a permanent SQL UDF, you can query the UDF in the function list of MaxCompute. You can also use the UDF in an environment where UDFs can be used. For more information, see [Create a permanent SQL UDF](#section-5uf-slv-2xb).
        
    -   You can use SQL statements to define temporary SQL UDFs. After you define a UDF in SQL script mode, the UDF is not registered in the function list of MaxCompute. You can directly call the UDF only in the SQL script in which the UDF is defined. You cannot call the UDF in other environments. For more information, see [Create a temporary SQL UDF](#section-eub-lqr-u1j).
        
-   You can use input parameters of the function type for a UDF when you use SQL statements to define the UDF. The input parameters of the function type include built-in functions of MaxCompute, other UDFs, and anonymous functions. For more information, see [Example on how to create an SQL UDF whose input parameter is of the function type](#section-eg6-u9x-2iy) and [Example on how to create an SQL UDF whose input parameter is an anonymous function](#section-q60-6xc-bn8).
    

### **Scenarios**

You can use SQL UDFs of MaxCompute to resolve the following issues:

-   In most cases, a large amount of similar code exists, which is inconvenient to maintain and prone to errors. If you use a Java or Python UDF, you must compile the code (required for a Java UDF), create resources, and create functions after you write the code. This process is complex and the performance is not high.
    
    For example, you can use the following SQL statement to define a UDF. This helps improve the efficiency and flexibility of UDF definition and application.
    
    ```
    select
        nvl(str_to_map(get_json_object(col, '$.key1')), 'default') as key1,
        nvl(str_to_map(get_json_object(col, '$.key2')), 'default') as key2,
        ...
        nvl(str_to_map(get_json_object(col, '$.keyN')), 'default') as keyN
    from t;
    ```
    
-   UDFs that are defined by using SQL statements support input parameters of the function type. Therefore, the feature that is similar to Lambda expressions is supported to pass functions as parameters to another function.
    
    **Note**
    
    For more information about the precautions that you must take note of when you use Lambda expressions in MaxCompute, see [Lambda functions](/help/en/maxcompute/user-guide/lambda-expression).
    

## Precautions

-   When you use SQL statements to define a UDF, make sure that you perform the operation in SQL script mode. If you perform the operation in common SQL editing mode, an error may occur.
    
    **Note**
    
    For more information about the SQL script mode of MaxCompute, see [SQL in script mode](/help/en/maxcompute/user-guide/sql-in-script-mode).
    
-   When you use SQL statements to define a UDF, make sure that the data types of input parameters of the UDF are the data types supported by MaxCompute. For more information about the data types supported by MaxCompute, see [MaxCompute V2.0 data type edition](/help/en/maxcompute/user-guide/maxcompute-v2-0-data-type-edition#concept-2454988). After the UDF is created, make sure that the data types of the input parameters of the SQL UDF you want to call are the same as the data types of the input parameters of the defined UDF.
    
-   When you create, query, call, or drop an SQL UDF, make sure that the Alibaba Cloud account that you use has the required function-level permissions. For more information about function-level permissions and authorization operations, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).
    

## Create a permanent SQL UDF

MaxCompute allows you to execute the `CREATE SQL FUNCTION` statement to create an SQL UDF. The UDFs that are created by using this statement are permanent SQL UDFs. After a UDF is created by using the CREATE SQL FUNCTION statement, the UDF is stored in the metadata system of MaxCompute. You can query the UDF in the function list of MaxCompute. All subsequent query operations can call the UDF.

-   **Precautions**
    
    Create an SQL UDF in SQL script mode. Otherwise, the SQL UDF may fail to be created. For more information about the SQL script mode, see [SQL in script mode](/help/en/maxcompute/user-guide/sql-in-script-mode).
    
-   **Syntax**
    
    ```
    create sql function <function_name>(@<parameter_in1> <datatype>[, @<parameter_in2> <datatype>...]) 
    [returns @<parameter_out> <datatype>] 
    as [begin] 
    <function_expression> 
    [end];
    ```
    
    -   function\_name: required. This parameter specifies the name of the SQL UDF that you create. The function name must be unique in a project and cannot be the same as the name of a built-in function. Functions that have the same name can be registered only once. You can execute the [LIST FUNCTIONS](/help/en/maxcompute/user-guide/list-functions) statement to view all functions in a project and check whether an existing function has the same name as the function that you want to create.
        
    -   parameter\_in: required. This parameter specifies the input parameters of the SQL UDF that you want to create. The input parameters can be of the function type, including anonymous functions. For more information about how to create an SQL UDF whose input parameter is of the function type, see [Example on how to create an SQL UDF whose input parameter is of the function type](#section-eg6-u9x-2iy). For more information about how to create an SQL UDF whose input parameter is an anonymous function, see [Example on how to create an SQL UDF whose input parameter is an anonymous function](#section-q60-6xc-bn8).
        
    -   datatype: required. This parameter specifies the data types of the input parameters of the UDF. For more information about the data types supported by MaxCompute, see [MaxCompute V2.0 data type edition](/help/en/maxcompute/user-guide/maxcompute-v2-0-data-type-edition#concept-2454988).
        
    -   returns: optional. This parameter specifies the return value of the UDF. The return value is a variable. If you do not specify this parameter, the value of the function\_name parameter is returned by default.
        
    -   parameter\_out: required. This parameter specifies the response parameters of the UDF.
        
    -   function\_expression: required. This parameter specifies the expression (implementation logic) of the UDF.
        
-   **Sample code**
    
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
            

## Create a temporary SQL UDF

MaxCompute allows you to execute the `FUNCTION` statement to create an SQL UDF. The UDFs that are created by using this statement are temporary SQL UDFs. After a UDF is created by using the FUNCTION statement, the UDF is not stored in the metadata system of MaxCompute. You cannot query the UDF in the function list of MaxCompute. The SQL UDF can be called only in the script where the UDF is defined and cannot be called in other query environments.

-   **Precautions**
    
    Create an SQL UDF in SQL script mode. Otherwise, the SQL UDF may fail to be created. For more information about the SQL script mode, see [SQL in script mode](/help/en/maxcompute/user-guide/sql-in-script-mode).
    
-   **Syntax**
    
    ```
    function <function_name>(@<parameter_in1> <datatype>[, @<parameter_in2> <datatype>...]) 
    [returns @<parameter_out> <datatype>] 
    as [begin] 
    <function_expression> 
    [end];
    ```
    
    For more information about parameters, see [Create a permanent SQL UDF](#section-5uf-slv-2xb).
    
-   **Sample code**
    
    ```
    function my_add(@a BIGINT) as @a + 1;
    ```
    

## Query basic information about an SQL UDF

You can query an SQL UDF in the same way that you query a Java or Python UDF.

-   **Precautions**
    
    -   If you query the information on the MaxCompute client, make sure that the client version is upgraded to 0.34.0 or later. For more information about how to view the version of the MaxCompute client and install and configure the MaxCompute client, see [MaxCompute client (odpscmd)](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db).
        
    -   Only permanent SQL UDFs that are created by using the `CREATE SQL FUNCTION` statement are stored in MaxCompute. Temporary SQL UDFs are not stored in MaxCompute. Therefore, information about temporary SQL UDFs cannot be queried.
        
-   **Syntax**
    
    ```
    desc function <function_name>;
    ```
    
    function\_name: the name of the created SQL UDF.
    
-   **Sample code**
    
    ```
    desc function my_add;
    ```
    
    The following result is returned:
    
    ```
    Name                                    my_add
    Owner                                   ALIYUN$s***_****@**.aliyunid.com
    Created Time                            2021-05-08 11:26:02
    SQL Definition Text                     CREATE SQL FUNCTION MY_ADD(@a BIGINT) AS @a + 1
    ```
    

## Call an SQL UDF

You can call an SQL UDF in the same way that you call a built-in function.

-   **Precautions**
    
    -   Permanent SQL UDFs are stored in MaxCompute and can be called in any phase.
        
    -   A temporary SQL UDF can be called only in the script where the UDF is defined and cannot be called in other query environments.
        
-   **Syntax**
    
    ```
    select <function_name>(<column_name>[,...]) from <table_name>;
    ```
    
    -   function\_name: the name of the created SQL UDF.
        
    -   column\_name: the column name of the table from which you want to query data. The data type of the column must be the same as the data type defined by the SQL UDF.
        
    -   table\_name: the name of the table from which you want to query data.
        
-   **Sample code**
    
    ```
    -- Create a table named src. 
    create table src (c bigint, d string);
    insert into table src values (1,100.1),(2,100.2),(3,100.3);
    -- Call the my_add function. 
    select my_add(c) from src;
    -- The following result is returned: 
    +------------+
    | _c0        |
    +------------+
    | 2          |
    | 3          |
    | 4          |
    +------------+
    ```
    

## Drop an SQL UDF

You can drop an SQL UDF in the same way that you drop a Java or Python UDF.

-   **Syntax**
    
    ```
    drop function <function_name>;
    ```
    
    function\_name: the name of the created SQL UDF.
    
-   **Sample code**
    
    ```
    drop function my_add;
    ```
    

## Example on how to create an SQL UDF whose input parameter is of the function type

When you create an SQL UDF, you can use input parameters of the function type for the UDF, including built-in functions of MaxCompute, other UDFs, or SQL UDFs. When you call the SQL UDF, you need to pass only the input parameters of the function type. Sample code:

```
function add(@a BIGINT) as @a + 1;
function op(@a BIGINT, @fun function (BIGINT) returns BIGINT) as @fun(@a);
select op(key, add), op(key, abs) from values (1),(2) as t (key);

-- The following result is returned: 
+------------+------------+
| _c0        | _c1        |
+------------+------------+
| 2          | 1          |
| 3          | 2          |
+------------+------------+
```

In the preceding example, two SQL UDFs are defined:

-   `add`: An input parameter of the BIGINT type is defined.
    
-   `op`: Two input parameters are defined.
    
    -   The input parameter `@a` is of the BIGINT type.
        
    -   The input parameter `@fun` is of the function type. The input and output parameters of the @fun function are both of the BIGINT type. The function `op` passes the input parameter `@a` to the `@fun` function.
        
-   When you call the op function, the ADD and ABS functions are passed to perform operations on `@a`. ADD is an SQL UDF and ABS is a built-in function of MaxCompute. For more information about the ABS function, see [Mathematical functions](/help/en/maxcompute/user-guide/mathematical-functions/#concept-ubn-3kb-5db).
    

## Example on how to create an SQL UDF whose input parameter is an anonymous function

If the input parameter of an SQL UDF is of the function type, the parameter can also be an anonymous function. Sample code:

```
function op(@a BIGINT, @fun function (BIGINT) returns BIGINT) as @fun(@a);
select op(key, function (@a) as @a + 1) from values (1),(2) as t (key);
```

In the preceding example, `function (@a) as @a + 1` is an anonymous function that is used as the input parameter of the SQL UDF op. The input parameter of the anonymous function is `@a`. You do not need to specify the data type of the input parameter. The compiler infers the data type of the `@a` parameter based on the parameter definition of the op function.

## Example

Scenario: Convert a date value from the `yyyy-mm-dd` format into the `yyyymmdd` format.

For example, the dates whose format you want to convert are 2020-11-21, 2020-1-01, 2019-5-1, and 19-12-1.

Methods:

-   Method 1: Use an SQL UDF. We **recommend** that you use this method. Sample code:
    
    ```
    create sql function y_m_d2yyyymmdd(@y_m_d string) returns @yyyymmdd string
    as begin
        @yyyymmdd := concat(lpad(split_part(@y_m_d, '-', 1), 4, '0'), lpad(split_part(@y_m_d, '-', 2), 2, '0'), lpad(split_part(@y_m_d, '-', 3), 2, '0')) ;
    end;
    
    select y_m_d2yyyymmdd(d) from values('2020-11-21'),('2020-1-01'), ('2019-5-1'), ('19-12-1') t (d);
    ```
    
    The following result is returned:
    
    ```
    +------------+
    | _c0        |
    +------------+
    | 20201121   |
    | 20200101   |
    | 20190501   |
    | 00191201   |
    +------------+
    ```
    
-   Method 2: Repeatedly call a function. This method decreases the code reuse rate. Therefore, we **recommend that you do not** use this method. Sample code:
    
    ```
    select concat(lpad(split_part(d, '-', 1), 4, '0'), lpad(split_part(d, '-', 2), 2, '0'), lpad(split_part(d, '-', 3), 2, '0')) from values('2020-11-21'),('2020-1-01'), ('2019-5-1'), ('19-12-1') t (d);
    ```
