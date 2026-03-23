Aggregate functions combine multiple input records into a single output value. You can use an aggregate function with the `group by` clause in MaxCompute SQL. This topic describes the command formats, parameters, and examples of aggregate functions supported by MaxCompute SQL and guides you through data development using these functions.

The following table describes the aggregate functions that are supported by MaxCompute SQL.

**Function**

**Features**

[ANY](#1887894473t61)

Checks whether at least one of the input values is True.

[ANY\_VALUE](#section-gq4-i9o-wlo)

Returns a value from the specified range.

[APPROX\_DISTINCT](#section-8re-ac2-nuw)

Returns an approximate number of distinct input values in a specified column.

[ARG\_MAX](#section-70u-fei-oad)

Returns the column value of the row that corresponds to the maximum value of a specified column.

[ARG\_MIN](#section-d1y-y37-885)

Returns the column value of a row that corresponds to the minimum value of a specific column.

[AVG](#section-o4c-4j6-uct)

You can calculate the average value.

[BITWISE\_AND\_AGG](#section-630-ibi-ssv)

Aggregates input values based on the bitwise AND operation.

[BITWISE\_OR\_AGG](#section-13v-0il-281)

Aggregates input values based on the bitwise OR operation.

[BITWISE\_XOR\_AGG](#c75e57c8aedl1)

Aggregates input values based on the bitwise XOR operation.

[BOOL\_AND](#e983dc6609n77)

Performs a logical AND operation on a set of Boolean values.

[BOOL\_OR](#ffed145f3dmdv)

Performs a logical OR operation on a set of Boolean values.

[COLLECT\_LIST](#section-fth-1w1-wdb)

Aggregates the specified columns into an array.

[COLLECT\_SET](#section-skl-fw1-wdb)

Aggregates distinct values from a specified column into an array.

[CORR](#38b4937731sqa)

Calculates the Pearson Correlation Coefficient of two columns.

[COUNT](#section-q11-32n-vdb)

Count the records.

[COUNT\_IF](#section-lgm-gjq-07p)

Returns the number of records whose expr value is True.

[COVAR\_POP](#section-sal-3e0-zpf)

Calculates the population covariance of two specified numeric columns.

[COVAR\_SAMP](#section-7cp-io7-oy4)

Calculates the sample covariance of two specified numeric columns.

[HISTOGRAM](#section-vyw-mw0-g5v)

Returns a map that contains the number of times each input value appears.

[MAP\_AGG](#section-994-qgc-qhm)

You can construct a Map of two input fields.

[MAP\_UNION](#section-b4g-g6g-vjb)

Returns a new map that is the union of all input maps.

[MAP\_UNION\_SUM](#section-2xl-t32-shn)

Returns a new map that is the union of all input maps. The output map sums the values of the matching keys in all input maps.

[MAX](#section-rys-tr1-wdb)

You can calculate the maximum value.

[MAX\_BY](#section-wpd-rcy-ips)

Returns the column value of the row that corresponds to the maximum value of a specified column.

[MEDIAN](#section-m5y-cs1-wdb)

You can calculate the median.

[MIN](#section-mll-yr1-wdb)

Calculate the minimum value.

[MIN\_BY](#section-xx2-5jf-jek)

Returns the column value of a row that corresponds to the minimum value of a specific column.

[MULTIMAP\_AGG](#section-622-n30-anb)

Returns a map that is created using a and b. a is the key in the map. b is used to create an array, which is used as the value of the key in the map.

[NUMERIC\_HISTOGRAM](#section-ywu-uag-f4d)

Returns an approximate histogram based on a specified column.

[PERCENTILE](#section-zbp-2r7-qxf)

Calculates an exact percentile. This function is suitable for scenarios where a small amount of data is calculated.

[PERCENTILE\_APPROX](#section-do0-b0t-s3q)

Returns approximate percentiles. This function applies to scenarios in which a large amount of data is calculated.

[PERCENTILE\_CONT](#294385d84f72o)

Calculates an exact percentile.

[PERCENTILE\_DISC](#6c98147c61n0w)

Calculates a given percentile value.

[STDDEV](#section-gg5-dv1-wdb)

Returns the population standard deviation of all input values.

[STDDEV\_SAMP](#section-sgk-jv1-wdb)

Returns the sample standard deviation of all the input values.

[SUM](#section-okf-4v1-wdb)

Returns the sum of a column.

[VAR\_SAMP](#section-dt5-tw1-wdb)

Calculates the sample variance of a specified numeric column.

[VARIANCE/VAR\_POP](#section-emm-lw1-wdb)

Calculates the variance of a specified numeric column.

[WM\_CONCAT](#section-ddm-tv1-wdb)

Concatenates strings with a specified delimiter.

## Precautions

MaxCompute V2.0 provides additional functions. If the functions that you use involve new data types that are supported in the MaxCompute V2.0 data type edition, you must execute the SET statement to enable the MaxCompute V2.0 data type edition. The new data types include TINYINT, SMALLINT, INT, FLOAT, VARCHAR, TIMESTAMP, and BINARY.

-   Session level: To use a new data type, add the `set odps.sql.type.system.odps2=true;` statement before your SQL statement and submit both together for execution.
    
-   A Project Owner can configure settings at the project level as needed. The changes take effect within 10 to 15 minutes. The command is as follows.
    
    ```
    setproject odps.sql.type.system.odps2=true;
    ```
    
    For more information about `setproject`, see [Project operations](/help/en/maxcompute/user-guide/project-operations#concept-qg3-s32-vdb). For more information about precautions for enabling project-level data types, see [Data type versions](/help/en/maxcompute/user-guide/data-type-editions#concept-jhp-4bb-5db).
    
-   A worker can contain a maximum of 2 million elements.
    

If you use an SQL statement that includes multiple aggregate functions and the project resources are insufficient, memory overflow may occur. We recommend that you optimize the SQL statement or purchase computing resources as needed.

## Syntax

Syntax of an aggregate function:

```
<aggregate_name>(<expression>[,...]) [WITHIN GROUP (ORDER BY <col1>[,<col2>…])] [FILTER (WHERE <where_condition>)]
```

-   `<aggregate_name>(<expression>[,...])`: a built-in aggregate function or a [user-defined aggregate function (UDAF)](/help/en/maxcompute/user-guide/overview-22#section-yc9-8pm-blq). The specific format depends on the syntax of the aggregate function.
    
-   `WITHIN GROUP (ORDER BY <col1>[,<col2>…])`: If an aggregate function contains this expression, the input data of `<col1>[,<col2>…]` is sorted in ascending order by default. To sort the data in descending order, use the `WITHIN GROUP (ORDER BY <col1>[,<col2>…] DESC)` expression.
    
    Note the following when you use this expression:
    
    -   You can use this expression only for [WM\_CONCAT](#section-ddm-tv1-wdb), [COLLECT\_LIST](#section-fth-1w1-wdb), [COLLECT\_SET](#section-skl-fw1-wdb), and UDAFs.
        
    -   If multiple aggregate functions in a SELECT statement contain the `WITHIN GROUP (ORDER BY <col1>[,<col2>…])` expression, the `ORDER BY <col1>[,<col2>…]` clause must be identical across all such functions.
        
    -   If the parameters of an aggregate function include the DISTINCT keyword, only the DISTINCT columns can be used in the `ORDER BY <col1>[,<col2>…]` clause. The set of columns in the `ORDER BY` clause must be a subset of the DISTINCT columns. Additionally, the data types of the fields in `<col1>[,<col2>…]` must match the data types of the aggregate function’s input parameters.
        
        **Note**
        
        Aggregate functions that support the `WITHIN GROUP (ORDER BY <col1>[,<col2>…])` expression accept only one input parameter. Therefore, if an aggregate function uses the DISTINCT keyword, the `ORDER BY` clause can include only one column, and its data type must match that of the aggregate function’s input parameter.
        
        For example, the input parameter of the WM\_CONCAT function must be of the STRING type, so the field following the `ORDER BY` clause must also be of the STRING type. For more information, see **Example 4** below. For details on creating the emp table used in the example, see [Sample data](/help/en/maxcompute/user-guide/wm-concat#section-q1z-jta-fwj).
        
    
    Examples:
    
    ```
    -- Example 1: Sort the input data in ascending order and then return the output.
    SELECT x, wm_concat(',', y) WITHIN GROUP (ORDER BY y) FROM 
      VALUES('k', 1),('k', 3),('k', 2) AS t(x, y) GROUP BY x;
    -- The following result is returned.
    +------------+------------+
    | x          | _c1        |
    +------------+------------+
    | k          | 1,2,3      |
    +------------+------------+
    
    -- Example 2: Sort the input data in descending order and then return the output.
    SELECT x, wm_concat(',', y) WITHIN GROUP (ORDER BY y DESC) FROM
      VALUES('k', 1),('k', 3),('k', 2) AS t(x, y) GROUP BY x;
    -- The following result is returned.
    +------------+------------+
    | x          | _c1        |
    +------------+------------+
    | k          | 3,2,1      |
    +------------+------------+
    
    -- Example 3
    SELECT id, wm_concat(DISTINCT ',', name) WITHIN GROUP (ORDER BY name DESC) FROM 
      VALUES('k', '1'),('k', '3'),('k', '2') AS t(id, name) GROUP BY id;
    
    -- The following result is returned.
    +------------+------------+
    | id         | _c1        |
    +------------+------------+
    | k          | 3,2,1      |
    +------------+------------+
    
    -- Example 4
    -- Because the parameters of the aggregate function contain the DISTINCT keyword, the sal input parameter of the BIGINT type in the wm_concat function is implicitly converted to the STRING type.
    -- To be consistent with the input parameter type of the wm_concat function, you must use cast to convert sal to the STRING type in `order by sal`. Otherwise, an error is reported.
    SELECT deptno, wm_concat(DISTINCT ',', sal) 
      WITHIN GROUP (ORDER BY cast(sal AS STRING ) DESC) 
      FROM emp GROUP BY deptno ORDER BY deptno;
    
    -- The following result is returned.
    +------------+------------+
    | deptno     | _c1        |
    +------------+------------+
    | 10         | 5000,2450,1300 |
    | 20         | 800,3000,2975,1100 |
    | 30         | 950,2850,1600,1500,1250 |
    +------------+------------+
    ```
    
-   `[FILTER (WHERE <where_condition>)]`: If an aggregate function contains this expression, it processes only the data that meets the `<where_condition>`. For more information about `<where_condition>`, see [WHERE clause (where\_condition)](/help/en/maxcompute/user-guide/select-syntax#section-lwx-cv2-ggb).
    
    Note the following when you use this expression:
    
    -   Only built-in aggregate functions support this expression. UDAFs do not support this expression.
        
    -   `count(*)` supports the `[FILTER (WHERE <where_condition>)]` expression.
        
    -   [COUNT\_IF](#section-lgm-gjq-07p) does not support the `[FILTER (WHERE <where_condition>)]` expression.
        
    
    Examples:
    
    ```
    -- Example 1: Filter and aggregate data.
    select
      sum(x),
      sum(x) filter (where y > 1),
      sum(x) filter (where y > 2)
      from values(null, 1),(1, 2),(2, 3),(3, null) as t(x, y);
    -- The following result is returned.
    +------------+------------+------------+
    | _c0        | _c1        | _c2        |
    +------------+------------+------------+
    | 6          | 3          | 2          |
    +------------+------------+------------+
    
    -- Example 2: Use multiple aggregate functions to filter and aggregate data.
    select
      count_if(x > 2),
      sum(x) filter (where y > 1),
      sum(x) filter (where y > 2)
      from values(null, 1),(1, 2),(2, 3),(3, null) as t(x, y);
    -- The following result is returned.
    +------------+------------+------------+
    | _c0        | _c1        | _c2        |
    +------------+------------+------------+
    | 1          | 3          | 2          |
    +------------+------------+------------+
    ```
    

## Sample data

To help you understand how to use each function, this topic provides source data and function examples based on that data. The following example commands create a table named emp and add data to it:

```
create table if not exists emp
   (empno bigint,
    ename string,
    job string,
    mgr bigint,
    hiredate datetime,
    sal bigint,
    comm bigint,
    deptno bigint);
tunnel upload emp.txt emp;
```

The emp.txt file contains the following data:

```
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

## Filter expressions

-   Limits
    
    -   Only built-in aggregate functions of MaxCompute support filter expressions. UDAFs do not support filter expressions.
        
    -   `count(*)` cannot be used with filter expressions. Use the [COUNT\_IF](#section-lgm-gjq-07p) function instead.
        
-   Syntax
    
    ```
    <aggregate_name>(<expression>[,...]) [filter (where <where_condition>)]
    ```
    
-   Description
    
    All aggregate functions support filter expressions. If you specify a filter condition, only the row data that meets the filter condition can be passed to the related aggregate function for data processing.
    
-   Description.
    
    -   aggregate\_name: required. The name of the aggregate function. Select an aggregate function that is described in this topic as needed.
        
    -   expression: required. The parameters of the aggregate function that you select. Specify this parameter based on the description of the aggregate function that you select.
        
    -   where\_condition: optional. The filter condition. For more information about where\_condition, see [WHERE clause (where\_condition)](/help/en/maxcompute/user-guide/select-syntax#section-lwx-cv2-ggb).
        
-   Description of the return value.
    
    For more information, see the description of the return value for each aggregate function.
    
-   Example usage
    
    ```
    select sum(sal) filter (where deptno=10), sum(sal) filter (where deptno=20), sum(sal) filter (where deptno=30) from emp;
    ```
    
    The following result is returned:
    
    ```
    +------------+------------+------------+
    | _c0        | _c1        | _c2        |
    +------------+------------+------------+
    | 17500      | 10875      | 9400       |
    +------------+------------+------------+
    ```
    

## ANY

-   Syntax
    
    ```
    BOOLEAN ANY(BOOLEAN <colname>)
    ```
    
-   Description
    
    Aggregates the values in the column specified by colname into an array and checks whether at least one element is TRUE. If at least one value is TRUE, the function returns TRUE.
    
-   Description.
    
    colname: Required. The column must be of the BOOLEAN type.
    
-   Return value
    
    Returns a value of the BOOLEAN type. If the value of colname is NULL, the row is excluded from the calculation.
    
-   Examples
    
    ```
    -- Returns true.
    SELECT ANY(colname) FROM VALUES (true), (false), (false) AS tab(colname);
    -- Returns true.
    SELECT ANY(colname) FROM VALUES (NULL), (true), (false) AS tab(colname);
    -- Returns false.
    SELECT ANY(colname) FROM VALUES (false), (false), (NULL) AS tab(colname);
    -- Returns true.
    SELECT ANY(colname1) FILTER(WHERE colname2 = 2) FROM VALUES (true, 1), (false, 1), (true, 2) AS tab(colname1, colname2);
    ```
    

## ANY\_VALUE

-   Syntax
    
    ```
    any_value(<colname>)
    ```
    
-   Description
    
    This MaxCompute V2.0 extension function returns an arbitrary value from a specified range.
    
-   Parameters
    
    colname: Required. The column can be of any data type.
    
-   Return value
    
    The data type of the return value is the same as the data type of the colname parameter. If the value of the colname parameter is null, the row that contains this value is not used for calculation.
    
-   Examples
    
    -   Example 1: Select one of the employees. Sample statement:
        
        ```
        select any_value(ename) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | SMITH      |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and select a random employee from each group. Sample command:
        
        ```
        select deptno, any_value(ename) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | CLARK      |
        | 20         | SMITH      |
        | 30         | ALLEN      |
        +------------+------------+
        ```
        

## APPROX\_DISTINCT

-   Syntax
    
    ```
    approx_distinct(<colname>)
    ```
    
-   Command Description
    
    Returns the approximate number of distinct input values in a specified column. This function is an additional function of MaxCompute V2.0.
    
-   Description
    
    colname: required. The name of the column from which duplicates need to be removed.
    
-   Return value
    
    A value of the BIGINT type is returned. This function produces a standard error of 5%. If a value of the column that is specified by the colname parameter is null, the row that contains this value is not used for calculation.
    
-   Examples
    
    -   Example 1: Calculate an approximate number of distinct values in the sal column. Sample statement:
        
        ```
        select approx_distinct(sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +-------------------+
        | numdistinctvalues |
        +-------------------+
        | 12                |
        +-------------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and calculate the approximate number of distinct salary (sal) values in each group. Sample command:
        
        ```
        select deptno, approx_distinct(sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+-------------------+
        | deptno     | numdistinctvalues |
        +------------+-------------------+
        | 10         | 3                 |
        | 20         | 4                 |
        | 30         | 5                 |
        +------------+-------------------+
        ```
        

## ARG\_MAX

-   Syntax
    
    ```
    arg_max(<valueToMaximize>, <valueToReturn>)
    ```
    
-   Description of the command.
    
    Finds the row in which the value of valueToMaximize is included and returns the value of valueToReturn in the row. This function is an additional function of MaxCompute V2.0.
    
-   Description
    
    -   valueToMaximize: Required. This parameter accepts any data type.
        
    -   valueToReturn: Required. This parameter accepts a value of any data type.
        
-   Return value
    
    The data type of the return value is the same as the data type of the valueToReturn parameter. If multiple rows contain the largest value of valueToMaximize, the value of valueToReturn in one of the rows is randomly returned. If the value of valueToMaximize is null, the row that contains this value is not used for calculation.
    
-   Examples
    
    -   Example 1: Return the name of the employee who has the highest salary. Sample statement:
        
        ```
        select arg_max(sal, ename) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | KING       |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and return the name of the employee with the highest salary in each group. Sample command:
        
        ```
        select deptno, arg_max(sal, ename) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | KING       |
        | 20         | SCOTT      |
        | 30         | BLAKE      |
        +------------+------------+
        ```
        

## ARG\_MIN

-   Syntax
    
    ```
    arg_min(<valueToMinimize>, <valueToReturn>)
    ```
    
-   Description
    
    Finds the row in which the minimum value of valueToMinimize is included and returns the value of valueToReturn in the row. This function is an additional function of MaxCompute V2.0.
    
-   Description
    
    -   valueToMinimize: required. A value of any data type.
        
    -   valueToReturn: required. A value of any data type.
        
-   The return values are described below.
    
    The data type of the return value is the same as the data type of the valueToReturn parameter. If multiple rows contain the smallest value of valueToMinimize, the value of valueToReturn in one of the rows is randomly returned. If the value of valueToMinimize is null, the row that contains this value is not used for calculation.
    
-   Examples
    
    -   Example 1: Return the name of the employee who has the lowest salary. Sample statement:
        
        ```
        select arg_min(sal, ename) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | SMITH      |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and return the name of the employee with the lowest salary in each group. Sample command:
        
        ```
        select deptno, arg_min(sal, ename) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | MILLER     |
        | 20         | SMITH      |
        | 30         | JAMES      |
        +------------+------------+
        ```
        

## AVG

-   Syntax
    
    ```
    DECIMAL｜DOUBLE  avg(<colname>)
    ```
    
-   Description
    
    You can calculate the average value.
    
-   Description.
    
    colname: required. Column values support all data types and can be converted into the DOUBLE type before calculation.
    
-   Return value
    
    If the value of colname is null, the row that contains this value is not used for calculation. The following table describes the mappings between data types of input data and return values.
    
    **Input type**
    
    **Return value type**
    
    TINYINT
    
    DOUBLE
    
    SMALLINT
    
    DOUBLE
    
    INT
    
    DOUBLE
    
    BIGINT
    
    DOUBLE
    
    FLOAT
    
    DOUBLE
    
    DOUBLE
    
    DOUBLE
    
    DECIMAL
    
    DECIMAL
    
-   Examples
    
    -   Example 1: Calculate the average salary (sal) values of all employees. Sample statement:
        
        ```
        select avg(sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 2222.0588235294117 |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and calculate the average salary (sal) for each department. Sample command:
        
        ```
        select deptno, avg(sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | 2916.6666666666665 |
        | 20         | 2175.0     |
        | 30         | 1566.6666666666667 |
        +------------+------------+
        ```
        

## BITWISE\_AND\_AGG

-   Syntax
    
    ```
    BIGINT bitwise_and_agg(BIGINT value)
    ```
    
-   Description
    
    Aggregates input values based on the bitwise AND operation.
    
-   Description.
    
    value: Required. A value of the BIGINT type. NULL values are excluded from the calculation.
    
-   This section describes the return value.
    
    A value of the BIGINT type is returned.
    
-   Examples
    
    ```
    SELECT id, bitwise_and_agg(v) FROM
        VALUES (1L, 2L), (1L, 1L), (2L, null), (1L, null) t(id, v) GROUP BY id;
    ```
    
    The following result is returned:
    
    ```
    +------------+------------+
    | id         | _c1        |
    +------------+------------+
    | 1          | 0          |
    | 2          | NULL       |
    +------------+------------+
    ```
    

## BITWISE\_OR\_AGG

-   This is a function declaration.
    
    ```
    bigint bitwise_or_agg(bigint value)
    ```
    
-   Description
    
    Aggregates input values based on the bitwise OR operation.
    
-   Metric descriptions
    
    value: required. A value of the BIGINT type. The null value is not used for calculation.
    
-   Description of the return value.
    
    A value of the BIGINT type is returned.
    
-   Examples
    
    ```
    select id, bitwise_or_agg(v) from
        values (1L, 2L), (1L, 1L), (2L, null), (1L, null) t(id, v) group by id;
    ```
    
    The following result is returned:
    
    ```
    +------------+------------+
    | id         | _c1        |
    +------------+------------+
    | 1          | 3          |
    | 2          | NULL       |
    +------------+------------+
    ```
    

## BITWISE\_XOR\_AGG

-   Function declaration.
    
    ```
    BIGINT BITWISE_XOR_AGG(BIGINT|INT|SMALLINT|TINYINT value)
    ```
    
-   Description
    
    Aggregates input values using the bitwise XOR operation.
    
-   Metric descriptions
    
    value: Required. A value of the BIGINT, INT, SMALLINT, or TINYINT type. NULL values are excluded from the calculation.
    
-   Return value
    
    Returns a value of the BIGINT type. The following rules apply:
    
    -   If the value is not of the BIGINT, INT, SMALLINT, or TINYINT type, an error is returned.
        
    -   Returns NULL if value is NULL.
        
-   Example
    
    ```
    SELECT id, bitwise_xor_agg(v) FROM 
      VALUES (1L, 2L), (1L, 1L), (2L, NULL), (1L, NULL) t(id, v) GROUP BY id;
    ```
    
    The following result is returned.
    
    ```
    +------------+------------+
    | id         | _c1        | 
    +------------+------------+
    | 1          | 3          | 
    | 2          | NULL       | 
    +------------+------------+
    ```
    

## **BOOL\_AND**

-   Syntax
    
    ```
    BOOLEAN BOOL_AND(<colname>)
    ```
    
-   Description of the command.
    
    Aggregates the values in the column specified by colname into an array and performs a logical AND operation on the Boolean values.
    
-   Parameters
    
    colname: Required. The name of a table column. The column must be of the BOOLEAN type.
    
-   Return value
    
    Returns a value of the BOOLEAN type. The following rules apply:
    
    -   If all input values are true, the function returns true. Otherwise, it returns false.
        
    -   The BOOL\_AND() function ignores NULL values in the group.
        
-   Examples
    
    ```
    -- Example 1: Perform a simple logical AND operation.
    SELECT bool_and(colname) FROM VALUES (true), (false), (true) AS tab(colname);
    -- The following result is returned.
    +------+
    | _c0  | 
    +------+
    | false | 
    +------+
    
    -- Example 2: The BOOL_AND() function ignores NULL values in the group.
    SELECT bool_and(colname) FROM VALUES (NULL), (true), (true) AS tab(colname);
    -- The following result is returned.
    +------+
    | _c0  | 
    +------+
    | true | 
    +------+
    
    -- Example 3: Aggregate only a specific column.
    SELECT bool_and(colname1) FROM VALUES (true, 1), (false, 2), (true, 1) AS tab(colname1, colname2);
    -- The following result is returned.
    +------+
    | _c0  | 
    +------+
    | false | 
    +------+
    
    -- Example 4: Perform a logical AND operation after filtering.
    SELECT bool_and(colname1) FILTER(WHERE colname2 = 1) FROM VALUES (true, 1), (false, 2), (true, 1) AS tab(colname1, colname2);
    -- The following result is returned.
    +------+
    | _c0  | 
    +------+
    | true | 
    +------+
    ```
    

## **BOOL\_OR**

-   Syntax
    
    ```
    BOOLEAN BOOL_OR(BOOLEAN <colname>)
    ```
    
-   This topic describes the command.
    
    Aggregates the values in the column specified by colname into an array and performs a logical OR operation on the Boolean values.
    
-   Metric details
    
    colname: Required. The name of a table column. The column must be of the BOOLEAN type.
    
-   Return value
    
    Returns a value of the BOOLEAN type. The following rules apply:
    
    -   If at least one input value in the group is true, the function returns true. If all values are false, the function returns false.
        
    -   The BOOL\_OR() function ignores NULL values in the group.
        
-   Examples
    
    ```
    -- Example 1: Perform a simple logical OR operation.
    SELECT bool_or(colname) FROM VALUES (true), (false), (false) AS tab(colname);
    -- The following result is returned.
    +------+
    | _c0  | 
    +------+
    | true | 
    +------+
    
    -- Example 2: The BOOL_OR() function ignores NULL values in the group.
    SELECT bool_or(colname) FROM VALUES (NULL), (true), (false) AS tab(colname);
    -- The following result is returned.
    +------+
    | _c0  | 
    +------+
    | true | 
    +------+
    
    -- Example 3
    SELECT bool_or(colname1) FROM VALUES (false), (false), (NULL) AS tab(colname1);
    -- The following result is returned.
    +------+
    | _c0  | 
    +------+
    | false | 
    +------+
    
    -- Example 4: Perform a logical OR operation after filtering.
    SELECT bool_or(colname1) FILTER(WHERE colname2 = 1) FROM VALUES (true, 1), (false, 1), (true, 2) AS tab(colname1, colname2);
    -- The following result is returned.
    +------+
    | _c0  | 
    +------+
    | true | 
    +------+
    ```
    

## COLLECT\_LIST

-   Syntax
    
    ```
    array collect_list(<colname>)
    ```
    
-   Description
    
    Aggregates the values in the column specified by colname into an array. This function is an extension provided by MaxCompute V2.0.
    
-   Parameters
    
    colname: Required. The name of a table column. The column can be of any data type.
    
-   Return value
    
    A value of the ARRAY type is returned. If a value of the column specified by colname is null, the row that contains this value is not used for calculation.
    
-   Examples
    
    -   Example 1: Aggregate the salary (sal) values of all employees into an array. Sample statement:
        
        ```
        select collect_list(sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | [800,1600,1250,2975,1250,2850,2450,3000,5000,1500,1100,950,3000,1300,5000,2450,1300] |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and aggregate the salaries (sal) of employees in the same group into an array. Sample command:
        
        ```
        select deptno, collect_list(sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | [2450,5000,1300,5000,2450,1300] |
        | 20         | [800,2975,3000,1100,3000] |
        | 30         | [1600,1250,1250,2850,1500,950] |
        +------------+------------+
        ```
        
    -   Example 3: Use this function with `group by` to group all employees by department (deptno) and aggregate the distinct salary (sal) values of employees in the same group into an array. Sample command:
        
        ```
        select deptno, collect_list(distinct sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | [1300,2450,5000] |
        | 20         | [800,1100,2975,3000] |
        | 30         | [950,1250,1500,1600,2850] |
        +------------+------------+
        ```
        

## COLLECT\_SET

-   Syntax
    
    ```
    array collect_set(<colname>)
    ```
    
-   Description
    
    Aggregates the values that are specified by colname into an array with only distinct values. This function is an additional function of MaxCompute V2.0.
    
-   Description
    
    colname: required. The name of a column, which can be of any data type.
    
-   Return value
    
    A value of the ARRAY type is returned. If a value of the column specified by colname is null, the row that contains this value is not used for calculation.
    
-   Examples
    
    -   Example 1: Aggregate the salary (sal) values of all employees into an array with only distinct values. Sample statement:
        
        ```
        select collect_set(sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | [800,950,1100,1250,1300,1500,1600,2450,2850,2975,3000,5000] |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and aggregate the salaries (sal) of employees in the same group into an array of distinct values. Sample command:
        
        ```
        select deptno, collect_set(sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | [1300,2450,5000] |
        | 20         | [800,1100,2975,3000] |
        | 30         | [950,1250,1500,1600,2850] |
        +------------+------------+
        ```
        

## CORR

-   Syntax
    
    ```
    double corr(<col1>, <col2>)
    ```
    
-   Description
    
    Calculates the Pearson correlation coefficient of two columns of data. This is an extension function in MaxCompute V2.0.
    
-   Parameters
    
    col1 and col2: Required. The names of the two columns in the table for which you want to calculate the Pearson correlation coefficient. The columns must be of the DOUBLE, BIGINT, INT, SMALLINT, TINYINT, FLOAT, or DECIMAL type. The data types of col1 and col2 can be different.
    
-   Return value
    
    A value of the DOUBLE type is returned. If a row in an input column contains a NULL value, that row is not used in the calculation.
    
-   Example
    
    Based on the [sample data](/help/en/maxcompute/user-guide/mathematical-functions/#section-iqm-72q-ifp), the following command calculates the Pearson correlation coefficient of the double\_data and float\_data columns.
    
    ```
    select corr(double_data,float_data) from mf_math_fun_t;
    ```
    
    The return value is 1.0.
    

## COUNT

### **Syntax**

```
-- Calculate the number of records.
BIGINT COUNT([DISTINCT|ALL] <colname>)

-- Calculate the number of records in a window.
BIGINT COUNT(*) OVER ([partition_clause] [orderby_clause] [frame_clause])
BIGINT COUNT([DISTINCT] <expr>[,...]) OVER ([partition_clause] [orderby_clause] [frame_clause])
```

### **Parameters**

-   DISTINCT|ALL: Optional. Specifies whether to remove duplicate records before counting. The default value is ALL, which counts all records. If you specify DISTINCT, the function counts only unique records.
    
-   colname: Required. The column whose values you want to count. This parameter can be of any data type. You can specify `*` for colname, as in `COUNT(*)`. In this case, the function returns the total number of rows. Rows where the colname value is NULL are not included in the calculation.
    
-   expr: Required. An expression. This parameter can be of any data type. Rows where the expression evaluates to NULL are not included in the calculation. If you specify the DISTINCT keyword, the function returns the count of unique values.
    
    `COUNT([DISTINCT] <expr>[,...])`: Counts the number of rows in the specified window where the values of all specified expressions are not NULL. If you specify the `DISTINCT` keyword, the function counts the rows after removing duplicate rows.
    
-   partition\_clause, orderby\_clause, and frame\_clause: For more information, see [windowing\_definition](/help/en/maxcompute/user-guide/window-functions-1/#section-op0-16l-1uv).
    

### **Return value**

The function returns a BIGINT value. Rows where colname is NULL are not included in the calculation.

### **Examples**

#### **Prepare test data**

If you already have data, you can skip this step.

1.  Download the test data [test\_data.txt](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20251224/jiftjm/test_data.txt).
    
2.  Create a test table.
    
    ```
    CREATE TABLE IF NOT EXISTS emp(
      empno BIGINT,
      ename STRING,
      job STRING,
      mgr BIGINT,
      hiredate DATETIME,
      sal BIGINT,
      comm BIGINT,
      deptno BIGINT
    );
    ```
    
3.  Load the data.
    
    Replace `FILE_PATH` with the actual path and name of the data file.
    
    ```sql
    TUNNEL UPLOAD FILE_PATH emp;   
    ```
    

#### **Example 1: Specify a column for the window and return the cumulative count without sorting**

This example partitions the window by the salary (sal) column. The data is not sorted. The function returns the cumulative count of all rows in the current window. The window contains all rows that have the same sal value.

-   Sample command
    
    ```
    SELECT sal, COUNT(sal) OVER (PARTITION BY sal) AS count FROM emp;
    ```
    
-   Result
    
    ```
    +------------+------------+
    | sal        | count      | 
    +------------+------------+
    | 800        | 1          | 
    | 950        | 1          | 
    | 1100       | 1          | 
    | 1250       | 2          |  -- The partition contains two rows where sal is 1250. The function returns 2 for both rows.
    | 1250       | 2          |  -- The count is also 2 for the second row in the partition.
    | 1300       | 2          | 
    | 1300       | 2          | 
    | 1500       | 1          | 
    | 1600       | 1          | 
    | 2450       | 2          | 
    | 2450       | 2          | 
    | 2850       | 1          | 
    | 2975       | 1          | 
    | 3000       | 2          | 
    | 3000       | 2          | 
    | 5000       | 2          | 
    | 5000       | 2          | 
    +------------+------------+
    ```
    

#### **Example 2: In non-Hive compatible mode, specify a column for the window and return the cumulative count after sorting**

In non-Hive compatible mode, this example partitions the window by the salary (sal) column and sorts the data. The function returns the cumulative count from the first row to the current row in the current window. The window contains all rows that have the same sal value.

-   Sample command
    
    ```
    -- Disable Hive compatible mode.
    SET odps.sql.hive.compatible=false;
    
    SELECT sal, COUNT(sal) OVER (PARTITION BY sal ORDER BY sal) AS count FROM emp;
    ```
    
-   Return value
    
    ```
    +------------+------------+
    | sal        | count      |
    +------------+------------+
    | 800        | 1          |
    | 950        | 1          |
    | 1100       | 1          |
    | 1250       | 1          |   -- The window partition starts. The running count for the first row is 1.
    | 1250       | 2          |   -- The running count for the second row is 2.
    | 1300       | 1          |
    | 1300       | 2          |
    | 1500       | 1          |
    | 1600       | 1          |
    | 2450       | 1          |
    | 2450       | 2          |
    | 2850       | 1          |
    | 2975       | 1          |
    | 3000       | 1          |
    | 3000       | 2          |
    | 5000       | 1          |
    | 5000       | 2          |
    +------------+------------+
    ```
    

#### **Example 3: In Hive compatible mode, specify a column for the window and return the cumulative count after sorting**

In Hive compatible mode, this example partitions the window by the salary (sal) column and sorts the data. The function returns the cumulative count from the first row to the last row in the current window. The window contains all rows that have the same sal value.

-   Sample command
    
    ```
    -- Enable Hive compatible mode.
    SET odps.sql.hive.compatible=true;
    
    SELECT sal, COUNT(sal) OVER (PARTITION BY sal ORDER BY sal) AS count FROM emp; 
    ```
    
-   Result
    
    ```
    +------------+------------+
    | sal        | count      |
    +------------+------------+
    | 800        | 1          |
    | 950        | 1          |
    | 1100       | 1          |
    | 1250       | 2          |   -- The partition contains two rows where sal is 1250. The function returns 2 for both rows.
    | 1250       | 2          |   -- The count is also 2 for the second row in the partition.
    | 1300       | 2          |
    | 1300       | 2          |
    | 1500       | 1          |
    | 1600       | 1          |
    | 2450       | 2          |
    | 2450       | 2          |
    | 2850       | 1          |
    | 2975       | 1          |
    | 3000       | 2          |
    | 3000       | 2          |
    | 5000       | 2          |
    | 5000       | 2          |
    +------------+------------+
    ```
    

#### **Example 4: Return the total number of rows**

Calculate the total number of employees in all departments.

-   Sample command
    
    ```
    SELECT COUNT(*) FROM emp;
    ```
    
-   Result
    
    ```
    +------------+
    | _c0        |
    +------------+
    | 17         |
    +------------+
    ```
    

#### **Example 5: Group data and calculate the total for each group**

This example uses the COUNT function with `GROUP BY` to group all employees by department (deptno) and calculate the number of employees in each department.

-   Sample command
    
    ```
    SELECT deptno, COUNT(*) FROM emp GROUP BY deptno;
    ```
    
-   Result
    
    ```
    +------------+------------+
    | deptno     | _c1        | 
    +------------+------------+
    | 20         | 5          | 
    | 30         | 6          | 
    | 10         | 6          | 
    +------------+------------+
    ```
    

#### **Example 6: Count unique values**

This example uses DISTINCT to remove duplicate values and count the number of departments.

-   Sample command
    
    ```
    SELECT COUNT(DISTINCT deptno) FROM emp;
    ```
    
-   Return value
    
    ```
    +------------+
    | _c0        |
    +------------+
    | 3          |
    +------------+
    ```
    

## COUNT\_IF

-   Syntax
    
    ```
    bigint count_if(boolean <expr>)
    ```
    
-   Description
    
    Returns the number of records whose expr value is True.
    
-   Parameters
    
    expr: required. A BOOLEAN expression.
    
-   Return value
    
    A value of the BIGINT type is returned. If the value of the expr parameter is False or the value of a specific column in expr is null, the row that contains this value is not used for calculation.
    
-   Examples
    
    ```
    select count_if(sal > 1000), count_if(sal <=1000) from emp;
    ```
    
    The following result is returned:
    
    ```
    +------------+------------+
    | _c0        | _c1        |
    +------------+------------+
    | 15         | 2          |
    +------------+------------+
    ```
    

## COVAR\_POP

-   Syntax
    
    ```
    double covar_pop(<colname1>, <colname2>)
    ```
    
-   Description
    
    Calculates the population covariance of two specified numeric columns. This function is an additional function of MaxCompute V2.0.
    
-   Parameter descriptions
    
    colname1 and colname2: required. Columns of the numeric data type. If the specified column is not a numeric column, a null value is returned.
    
-   Examples
    
    Run the following commands to append data to the emp table:
    
    ```
    -- sal_new is the new salary column.
    alter table emp add columns (sal_new bigint);
    insert overwrite table emp select empno, ename, job, mgr, hiredate, sal, comm, deptno, sal+1000 from emp;
    ```
    
    -   Example 1: Calculate the population covariance of the sal and sal\_new columns. Sample statement:
        
        ```
        select covar_pop(sal, sal_new) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 1594550.1730103805 |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and calculate the population covariance of the sal and sal\_new columns for each group. Sample command:
        
        ```
        select deptno, covar_pop(sal, sal_new) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | 2390555.5555555555 |
        | 20         | 1009500.0  |
        | 30         | 372222.2222222222 |
        +------------+------------+
        ```
        

## COVAR\_SAMP

-   Syntax
    
    ```
    double covar_samp(<colname1>, <colname2>)
    ```
    
-   Description
    
    Calculates the sample covariance of two specified numeric columns. This function is an additional function of MaxCompute V2.0.
    
-   Description
    
    colname1 and colname2: required. Columns of the numeric data type. If the specified column is not a numeric column, a null value is returned.
    
-   Examples
    
    Run the following commands to append data to the emp table:
    
    ```
    -- sal_new is the new salary column.
    alter table emp add columns (sal_new bigint);
    insert overwrite table emp select empno, ename, job, mgr, hiredate, sal, comm, deptno, sal+1000 from emp;
    ```
    
    -   Example 1: Calculate the sample covariance of the sal and sal\_new columns. Sample statement:
        
        ```
        select covar_samp(sal, sal_new) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 1694209.5588235292 |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and calculate the sample covariance of the sal and sal\_new columns for each group. Sample command:
        
        ```
        select deptno, covar_samp(sal, sal_new) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | 2868666.6666666665 |
        | 20         | 1261875.0  |
        | 30         | 446666.6666666666 |
        +------------+------------+
        ```
        

## HISTOGRAM

-   Declares a function.
    
    ```
    map<K, bigint> histogram(K input);
    ```
    
-   Describes the command.
    
    Returns a map that contains the number of times each input value appears. The keys in the map are the input values. Each value in the map is the number of times an input value appears. The null value is ignored.
    
-   Description
    
    input: input values, which are used as the keys in the map.
    
-   Return value
    
    A map that contains the number of times each input value appears is returned.
    
-   Examples
    
    ```
    select histogram(a) from values
        ('hi'), (null), ('apple'), ('pie'), ('apple') t(a);
    ```
    
    The following result is returned:
    
    ```
    +----------------------------+
    | _c0                        |
    +----------------------------+
    | {"pie":1,"hi":1,"apple":2} |
    +----------------------------+
    ```
    

## MAP\_AGG

-   Function declarations
    
    ```
    map<K, V> map_agg(K a, V b);
    ```
    
-   This topic describes the command.
    
    Returns a map that is created using a and b. a is the key in the map. b is the value of the key in the map. If the key in the map is null, the key is ignored. If the key field has duplicate values, one of the values is randomly retained.
    
-   Description.
    
    -   a: an input field that is used as the key in the map.
        
    -   b: an input field that is used as the value in the map.
        
-   Description of the return value.
    
    A new map is returned.
    
-   Examples
    
    ```
    select map_agg(a, b) from
            values (1L, 'apple'), (2L, 'hi'), (null, 'good'), (1L, 'pie') t(a, b);
    ```
    
    The following result is returned:
    
    ```
    +------------------------+
    | _c0                    |
    +------------------------+
    | {"2":"hi","1":"apple"} |
    +------------------------+
    ```
    

## MAP\_UNION

-   Function declaration
    
    ```
    map<K, V> map_union(map<K, V> input);
    ```
    
-   This section describes the command.
    
    Returns a new map that is the union of all input maps. If a key exists in multiple input maps, one of the values that correspond to the key is randomly retained.
    
-   Parameters
    
    input: the input maps.
    
-   Description of the return value.
    
    A new map is returned.
    
-   Examples
    
    ```
    select map_union(a) from values
        (map(1L, 'hi', 2L, 'apple', 3L, 'pie')), (map(1L, 'good', 4L, 'this')), (null) t(a);
    ```
    
    The following result is returned:
    
    ```
    +-----------------------------------------------+
    | _c0                                           |
    +-----------------------------------------------+
    | {"4":"this","1":"good","2":"apple","3":"pie"} |
    +-----------------------------------------------+
    ```
    

## MAP\_UNION\_SUM

-   Function declaration
    
    ```
    map<K, V> map_union_sum(map<K, V> input);
    ```
    
-   Description
    
    Returns a new map that is the union of all input maps. The output map sums the values of the matching keys in all input maps. If the value that corresponds to a key is NULL, the value is converted into 0.
    
    **Note**
    
    The values in input maps must be of the BIGINT, INT, SMALLINT, TINYINT, FLOAT, DOUBLE, or DECIMAL data type.
    
-   Parameter descriptions.
    
    input: the input maps.
    
-   Description of the return value.
    
    A new map is returned.
    
    **Note**
    
    The values in the new map are of the BIGINT, DOUBLE, or DECIMAL type.
    
-   Examples
    
    ```
    select map_union_sum(a) from values
        (map('hi', 2L, 'apple', 3L, 'pie', 1L)), (map('apple', null, 'hi', 4L)), (null) t(a);
    ```
    
    The following result is returned:
    
    ```
    +----------------------------+
    | _c0                        |
    +----------------------------+
    | {"apple":3,"hi":6,"pie":1} |
    +----------------------------+
    ```
    

## MAX

-   Syntax
    
    ```
    max(<colname>)
    ```
    
-   Description.
    
    Returns the maximum value of a column.
    
-   Parameter descriptions.
    
    colname: required. The name of a column, which can be of any data type other than BOOLEAN.
    
-   Return value
    
    The type of the return value is the same as the type of the colname parameter. The return value varies based on the following rules:
    
    -   If the value of colname is null, the row that contains this value is not used for calculation.
        
    -   If the value of colname is of the BOOLEAN type, the value is not used for calculation.
        
    
-   Examples
    
    -   Example 1: Calculate the highest salary (sal) of all employees. Sample statement:
        
        ```
        select max(sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 5000       |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and calculate the highest salary (sal) in each department. Sample command:
        
        ```
        select deptno, max(sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | 5000       |
        | 20         | 3000       |
        | 30         | 2850       |
        +------------+------------+
        ```
        

## MAX\_BY

-   Syntax
    
    ```
    max_by(<valueToReturn>,<valueToMaximize>)
    ```
    
-   Description
    
    **Note**
    
    The MAX\_BY function provides the same feature as the ARG\_MAX function. The difference lies in the parameter order. The MAX\_BY function is introduced in MaxCompute to maintain compatibility with the open source syntax.
    
    Finds the row in which the value of valueToMaximize is included and returns the value of valueToReturn in the row. This function is an additional function of MaxCompute V2.0.
    
-   Parameter descriptions
    
    -   valueToMaximize: required. A value of any data type.
        
    -   valueToReturn: required. A value of any data type.
        
-   Return value
    
    The data type of the return value is the same as the data type of the valueToReturn parameter. If multiple rows have the largest value of valueToMaximize, the value of valueToReturn in one of the rows is randomly returned. If the value of valueToMaximize is null, the row that contains this value is not used for calculation.
    
-   Examples
    
    -   Example 1: Return the name of the employee who has the highest salary. Sample statement:
        
        ```
        select max_by(ename,sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | KING       |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and return the name of the employee with the highest salary in each group. Sample command:
        
        ```
        select deptno, max_by(ename,sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | KING       |
        | 20         | SCOTT      |
        | 30         | BLAKE      |
        +------------+------------+
        ```
        

## MEDIAN

-   Syntax
    
    ```
    double median(double <colname>)
    decimal median(decimal <colname>)
    ```
    
-   Description
    
    Returns the median value of a column.
    
-   Description
    
    colname: required. The name of a column, which can be of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted into the DOUBLE type before calculation.
    
-   Return value
    
    If the value of colname is null, the row that contains this value is not used for calculation. The following table describes the mappings between data types of input data and return values.
    
    **Input type**
    
    **Return value type**
    
    TINYINT
    
    DOUBLE
    
    SMALLINT
    
    DOUBLE
    
    INT
    
    DOUBLE
    
    BIGINT
    
    DOUBLE
    
    FLOAT
    
    DOUBLE
    
    DOUBLE
    
    DOUBLE
    
    DECIMAL
    
    DECIMAL
    
-   Examples
    
    -   Example 1: Calculate the median salary (sal) values of all employees. Sample statement:
        
        ```
        select median(sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 1600.0     |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and calculate the median salary (sal) for each department. Sample command:
        
        ```
        select deptno, median(sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | 2450.0     |
        | 20         | 2975.0     |
        | 30         | 1375.0     |
        +------------+------------+
        ```
        

## MIN

-   Syntax
    
    ```
    min(<colname>)
    ```
    
-   Description of the command.
    
    You can calculate the minimum value.
    
-   Parameters
    
    colname: required. The name of a column, which can be of any data type other than BOOLEAN.
    
-   Return value
    
    The type of the return value is the same as the type of the colname parameter. The return value varies based on the following rules:
    
    -   If the value of colname is null, the row that contains this value is not used for calculation.
        
    -   If the value of colname is of the BOOLEAN type, the value is not used for calculation.
        
    
-   Examples
    
    -   Example 1: Calculate the lowest salary (sal) of all employees. Sample statement:
        
        ```
        select min(sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 800        |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and calculate the lowest salary (sal) in each department. Sample command:
        
        ```
        select deptno, min(sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | 1300       |
        | 20         | 800        |
        | 30         | 950        |
        +------------+------------+
        ```
        

## MIN\_BY

-   Syntax
    
    ```
    min_by(<valueToReturn>,<valueToMinimize>)
    ```
    
-   Description
    
    **Note**
    
    The MIN\_BY function provides the same feature as the ARG\_MIN function. However, the functions differ in the parameter order. The MIN\_BY function is introduced in MaxCompute to maintain compatibility with the open source syntax.
    
    Finds the row in which the minimum value of valueToMinimize is included and returns the value of valueToReturn in the row. This function is an additional function of MaxCompute V2.0.
    
-   Parameter descriptions
    
    -   valueToMinimize: required. A value of any data type.
        
    -   valueToReturn: required. A value of any data type.
        
-   Description of the return value.
    
    The data type of the return value is the same as the data type of the valueToReturn parameter. If multiple rows contain the smallest value of valueToMinimize, the value of valueToReturn in one of the rows is randomly returned. If the value of valueToMinimize is null, the row that contains this value is not used for calculation.
    
-   Examples
    
    -   Example 1: Return the name of the employee who has the lowest salary. Sample statement:
        
        ```
         select min_by(ename,sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | SMITH      |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and return the name of the employee with the lowest salary in each group. Sample command:
        
        ```
        select deptno, min_by(ename,sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | MILLER     |
        | 20         | SMITH      |
        | 30         | JAMES      |
        +------------+------------+
        ```
        

## MULTIMAP\_AGG

-   Function declaration
    
    ```
    map<K, array<V>> multimap_agg(K a, V b);
    ```
    
-   Description
    
    Returns a map that is created using a and b. a is the key in the map. b is used to create an array, which is used as the value of the key in the map. If the key in the map is null, the key is ignored.
    
-   Parameters
    
    -   a: an input field that is used as the key in the map.
        
    -   b: an input field that is used as the value in the map. Fields that correspond to the same key are placed in the same array and are used as values in the map.
        
-   Description of the return value.
    
    A new map is returned.
    
-   Examples
    
    ```
    select multimap_agg(a, b) from
            values (1L, 'apple'), (2L, 'hi'), (null, 'good'), (1L, 'pie') t(a, b);
    ```
    
    The following result is returned:
    
    ```
    +----------------------------------+
    | _c0                              |
    +----------------------------------+
    | {"2":["hi"],"1":["apple","pie"]} |
    +----------------------------------+
    ```
    

## NUMERIC\_HISTOGRAM

-   Syntax
    
    ```
    map<double key, double value> numeric_histogram(bigint <buckets>,
                                                    double <colname>
                                                    [, double <weight>])
                        
    ```
    
-   Description
    
    Returns an approximate histogram based on a specified column. This function is an additional function of MaxCompute V2.0.
    
-   Parameter descriptions
    
    -   buckets: required. A value of the BIGINT type. This parameter specifies the maximum number of buckets in the column whose approximate histogram is returned.
        
    -   colname: required. A value of the DOUBLE type. This parameter specifies the columns whose approximate histograms need to be calculated.
        
    -   weight: optional. The weight value of data in each row. The value is of the DOUBLE type.
        
-   Description of the return value.
    
    Returns a value of the `map<double key, double value>` type. In the return value, the key represents the x-axis coordinate of the approximate histogram, and the value represents the approximate height on the y-axis. The following rules apply:
    
    -   If the value of buckets is null, null is returned.
        
    -   If the value of colname is null, the row that contains this value is not used for calculation.
        
    
-   Examples
    
    -   Return an approximate histogram of the sal column. Sample statement:
        
        ```
        select numeric_histogram(5, sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | {"1328.5714285714287":7.0,"2450.0":2.0,"5000.0":2.0,"875.0":2.0,"2956.25":4.0} |
        +------------+
        ```
        
    -   Calculate an approximate histogram for the salary (sal) column, where `deptno` in each row represents the department weight. Sample command:
        
        ```
        select numeric_histogram(5, sal, deptno) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | {"2944.4444444444443":90.0,"2450.0":20.0,"5000.0":20.0,"890.0":50.0,"1350.0":160.0} |
        +------------+
        ```
        

## PERCENTILE

-   Syntax
    
    ```
    double percentile(bigint <colname>, <p>)
    -- Return multiple exact percentiles as an array.
    array percentile(bigint <colname>, array(<p1> [, <p2>...]))
    ```
    
-   Description
    
    Calculates an exact percentile. This function is suitable for small data volumes. It first sorts the specified column in ascending order and then takes the exact p\-th percentile. p must be between 0 and 1. The `percentile` calculation starts from index 0. For example, if a column contains the values 100, 200, and 300, their indexes are 0, 1, and 2. To calculate the 0.3 percentile, the `percentile` result is 2 × 0.3 = 0.6. This means the value is between index 0 and 1. The result is `100 + (200 - 100) × 0.6 = 160`. This function is an extension function of MaxCompute V2.0.
    
-   Description
    
    -   colname: required. A column of the BIGINT type.
        
    -   p: Required. The exact percentile, which must be in the range `[0.0, 1.0]`.
        
-   Description of the return value.
    
    A value of the DOUBLE or ARRAY type is returned.
    
-   Examples
    
    -   Example 1: The following command calculates the 0.3 percentile of the salary (sal):
        
        ```
        select percentile(sal, 0.3) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 1290.0     |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and calculate the 0.3 percentile of salary (sal) for each group. Sample command:
        
        ```
        select deptno, percentile(sal, 0.3) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | 1875.0     |
        | 20         | 1475.0     |
        | 30         | 1250.0     |
        +------------+------------+
        ```
        
    -   Example 3: Use this function with `group by` to group all employees by department (deptno) and calculate the 0.3, 0.5, and 0.8 percentiles of salary (sal) for each group. Sample command:
        
        ```
        set odps.sql.type.system.odps2=true;
        select deptno, percentile(sal, array(0.3, 0.5, 0.8)) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | [1875.0,2450.0,5000.0] |
        | 20         | [1475.0,2975.0,3000.0] |
        | 30         | [1250.0,1375.0,1600.0] |
        +------------+------------+
        ```
        

## PERCENTILE\_APPROX

-   Syntax
    
    ```
    double percentile_approx (double <colname>[, double <weight>], <p> [, <B>]))
    -- Return multiple approximate percentiles as an array.
    array<double> percentile_approx (double <colname>
                                     [, double <weight>],
                                     array(<p1> [, <p2>...])
                                     [, <B>])
    ```
    
-   Description
    
    This is an extension function for MaxCompute V2.0. The `percentile_approx` calculation is 1-indexed. To calculate the `p`\-th percentile for a column with `n` data entries, the `percentile_approx` function first sorts the column in ascending order. The sorted column data is treated as an array named `arr`, and the result of `percentile_approx` is `res`. The index for the percentile is calculated as `index = n * p`.
    
    -   If `index <= 1`, then `res = arr[0]`.
        
    -   If `index >= n - 1`, then `res = arr[n-1]`.
        
    -   If `1 < index < n - 1`, calculate `diff = index + 0.5 - ceil(index)`:
        
        If the abs(diff) < 0.5 condition is met, res is calculated based on the following formula: res = arr\[ceil(index) - 1\].
        
        If the abs(diff) = 0.5 condition is met, res is calculated based on the following formula: res = arr\[index - 1\] + (arr\[index\] - arr\[index - 1\]) × 0.5.
        
        The value of abs(diff) cannot be greater than 0.5.
        
    
    For example, if the `col` column contains the values 100, 200, 300, and 400, their indexes are 1, 2, 3, and 4. Then:
    
    -   `percentile_approx(col, 0.25) = 100` (index = 1).
        
    -   `percentile_approx(col, 0.5) = 200 + (300 - 200) * 0.5 = 250` (index = 2).
        
    -   `percentile_approx(col, 0.75) = 400` (index = 3).
        
    
    **Note**
    
    The differences between `percentile_approx` and `percentile` are as follows:
    
    -   `percentile_approx` calculates an approximate percentile, while `percentile` calculates an exact percentile. For large data volumes, `percentile` might fail due to memory limits, but `percentile_approx` does not have this issue.
        
    -   The implementation of percentile\_approx is consistent with the `percentile_approx` function in Hive. However, its calculation algorithm differs from that of `percentile`. Therefore, for some scenarios with very small data volumes, the result of `percentile_approx` may differ from that of `percentile`.
        
    
-   Description.
    
    -   colname: required. The name of a column, which can be of the DOUBLE type.
        
    -   weight: optional. The weight value of data in each row. The value is of the DOUBLE type.
        
    -   p: Required. The approximate percentile, which must be in the range `[0.0, 1.0]`.
        
    -   B: the accuracy of the return value. A higher accuracy indicates a more accurate value. If you do not specify this parameter, 10000 is used.
        
-   Description of the return value.
    
    A value of the DOUBLE or ARRAY type is returned. The return value varies based on the following rules:
    
    -   If the value of colname is null, the row that contains this value is not used for calculation.
        
    -   If the value of p or B is null, an error is returned.
        
    
-   Examples
    
    -   Example 1: The following command calculates the 0.3 percentile of salary (sal):
        
        ```
        select percentile_approx(sal, 0.3) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 1252.5     |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and calculate the 0.3 percentile of salary (sal) for each group. Sample command:
        
        ```
        select deptno, percentile_approx(sal, 0.3) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | 1300.0     |
        | 20         | 950.0      |
        | 30         | 1070.0     |
        +------------+------------+
        ```
        
    -   Example 3: Use this function with `group by` to group all employees by department (deptno) and calculate the 0.3, 0.5, and 0.8 percentiles of salary (sal) for each group. Sample command:
        
        ```
        set odps.sql.type.system.odps2=true;
        select deptno, percentile_approx(sal, array(0.3, 0.5, 0.8), 1000) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | [1300.0,1875.0,3470.000000000001] |
        | 20         | [950.0,2037.5,2987.5] |
        | 30         | [1070.0,1250.0,1580.0] |
        +------------+------------+
        ```
        
    -   Example 4 (with weight): Use this function with `group by` to group all employees by department (deptno) and calculate the 0.3, 0.5, and 0.8 percentiles of salary (sal) for each group. The `cnt` column in the `emp` table represents the number of people with that salary. Sample command:
        
        ```
        select deptno, percentile_approx(sal, deptno, array(0.3, 0.5, 0.8), 1000)
          from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | [1300.0,1875.0,3470.0] |
        | 20         | [950.0,2037.5,2987.5] |
        | 30         | [1070.0,1250.0,1580.0] |
        +------------+------------+
        ```
        

## PERCENTILE\_CONT

-   Syntax
    
    ```
    -- Calculate the exact percentile
    PERCENTILE_CONT(<col_name>, DOUBLE <percentile>[, BOOLEAN <isIgnoreNull>])
    
    -- Calculate the exact percentile in a window
    PERCENTILE_CONT(<col_name>, DOUBLE <percentile>[, BOOLEAN <isIgnoreNull>]) OVER ([partition_clause] [orderby_clause])
    ```
    
-   Description
    
    Calculates the exact percentile. It uses a linear interpolation algorithm, sorts the specified column in ascending order, and returns the exact value at the specified percentile.
    
-   Parameters
    
    -   col\_name: Required. A column of the DOUBLE or DECIMAL type.
        
    -   percentile: Required. The percentile to calculate. A DOUBLE constant in the range of \[0, 1\].
        
    -   isIgnoreNull: Optional. Specifies whether to ignore NULL values. A BOOLEAN constant. The default value is TRUE. If set to FALSE, NULL values are treated as the minimum value during sorting.
        
    -   partition\_clause and orderby\_clause: For more information, see [Window functions](/help/en/maxcompute/user-guide/window-functions-1/#section-op0-16l-1uv).
        
-   Return value
    
    Returns the calculated percentile value as a DOUBLE.
    
-   Examples
    
    -   Example 1: Ignore NULL values and calculate the exact percentile in a window.
        
        ```
        SELECT
          PERCENTILE_CONT(x, 0) OVER() AS min,
          PERCENTILE_CONT(x, 0.01) OVER() AS percentile1,
          PERCENTILE_CONT(x, 0.5) OVER() AS median,
          PERCENTILE_CONT(x, 0.9) OVER() AS percentile90,
          PERCENTILE_CONT(x, 1) OVER() AS max
        FROM VALUES(0D),(3D),(NULL),(1D),(2D) AS tbl(x) LIMIT 1;
        
        -- Return result
        +------------+-------------+------------+--------------+------------+
        | min        | percentile1 | median     | percentile90 | max        | 
        +------------+-------------+------------+--------------+------------+
        | 0.0        | 0.03        | 1.5        | 2.7          | 3.0        | 
        +------------+-------------+------------+--------------+------------+
        ```
        
    -   Example 2: Do not ignore NULL values. NULL values are treated as the minimum value during sorting. Calculate the exact percentile in a window.
        
        ```
        SELECT
          PERCENTILE_CONT(x, 0, false) OVER() AS min,
          PERCENTILE_CONT(x, 0.01, false) OVER() AS percentile1,
          PERCENTILE_CONT(x, 0.5, false) OVER() AS median,
          PERCENTILE_CONT(x, 0.9, false) OVER() AS percentile90,
          PERCENTILE_CONT(x, 1, false) OVER() AS max
        FROM VALUES(0D),(3D),(NULL),(1D),(2D) AS tbl(x) LIMIT 1;
        
        -- Return result
        +------------+-------------+------------+--------------+------------+
        | min        | percentile1 | median     | percentile90 | max        | 
        +------------+-------------+------------+--------------+------------+
        | NULL       | 0.0         | 1.0        | 2.6          | 3.0        | 
        +------------+-------------+------------+--------------+------------+
        ```
        

## PERCENTILE\_DISC

-   Syntax
    
    ```
    -- Calculate a given percentile value
    PERCENTILE_DISC(<col_name>, DOUBLE <percentile>[, BOOLEAN <isIgnoreNull>])
    
    -- Calculate the percentile value in a window
    PERCENTILE_DISC(<col_name>, DOUBLE <percentile>[, BOOLEAN <isIgnoreNull>]) OVER ([partition_clause] [orderby_clause])
    ```
    
-   Description
    
    Calculates a given percentile value. It first sorts the specified column in ascending order and then returns the first value whose cumulative distribution is greater than or equal to the specified percentile.
    
-   Parameters
    
    -   col\_name: Required. A column with any sortable data type.
        
    -   percentile: Required. The percentile to calculate. A DOUBLE constant in the range of \[0, 1\].
        
    -   isIgnoreNull: Optional. Specifies whether to ignore NULL values. A BOOLEAN constant. The default value is TRUE. If set to FALSE, NULL values are treated as the minimum value during sorting.
        
    -   partition\_clause and orderby\_clause: For more information, see [Window functions](/help/en/maxcompute/user-guide/window-functions-1/#section-op0-16l-1uv).
        
-   Return value
    
    Returns the calculated percentile value. The data type is the same as the input **col\_name** column.
    
-   Examples
    
    -   Example 1: Ignore NULL values and calculate the percentile value in a window.
        
        ```
        SELECT
          x,
          PERCENTILE_DISC(x, 0) OVER() AS min,
          PERCENTILE_DISC(x, 0.5) OVER() AS median,
          PERCENTILE_DISC(x, 1) OVER() AS max
        FROM VALUES('c'),(NULL),('b'),('a') AS tbl(x);
        
        -- Return result
        +------------+------------+------------+------------+
        | x          | min        | median     | max        | 
        +------------+------------+------------+------------+
        | c          | a          | b          | c          | 
        | NULL       | a          | b          | c          | 
        | b          | a          | b          | c          | 
        | a          | a          | b          | c          | 
        +------------+------------+------------+------------+
        ```
        
    -   Example 2: Do not ignore NULL values. NULL values are treated as the minimum value during sorting. Calculate the percentile value in a window.
        
        ```
        SELECT
          x,
          PERCENTILE_DISC(x, 0, false) OVER() AS min,
          PERCENTILE_DISC(x, 0.5, false) OVER() AS median,
          PERCENTILE_DISC(x, 1, false) OVER() AS max
        FROM VALUES('c'),(NULL),('b'),('a') AS tbl(x);
        
        -- Return result
        +------------+------------+------------+------------+
        | x          | min        | median     | max        | 
        +------------+------------+------------+------------+
        | c          | NULL       | a          | c          | 
        | NULL       | NULL       | a          | c          | 
        | b          | NULL       | a          | c          | 
        | a          | NULL       | a          | c          | 
        +------------+------------+------------+------------+
        ```
        

## STDDEV

-   Syntax
    
    ```
    double stddev(double <colname>)
    decimal stddev(decimal <colname>)
    ```
    
-   Description
    
    Returns the population standard deviation of all input values.
    
-   Parameters
    
    colname: required. The name of a column, which can be of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted into the DOUBLE type before calculation.
    
-   Return value
    
    If the value of colname is null, the row that contains this value is not used for calculation. The following table describes the mappings between data types of input data and return values.
    
    **Input type**
    
    **Return value type**
    
    TINYINT
    
    DOUBLE
    
    SMALLINT
    
    DOUBLE
    
    INT
    
    DOUBLE
    
    BIGINT
    
    DOUBLE
    
    FLOAT
    
    DOUBLE
    
    DOUBLE
    
    DOUBLE
    
    DECIMAL
    
    DECIMAL
    
-   Examples
    
    -   Example 1: Calculate the population standard deviation of salary (sal) values of all employees. Sample statement:
        
        ```
        select stddev(sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 1262.7549932628976 |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and calculate the population standard deviation of salary (sal) for each department. Sample command:
        
        ```
        select deptno, stddev(sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | 1546.1421524412158 |
        | 20         | 1004.7387720198718 |
        | 30         | 610.1001739241043 |
        +------------+------------+
        ```
        

## STDDEV\_SAMP

-   Syntax
    
    ```
    double stddev_samp(double <colname>)
    decimal stddev_samp(decimal <colname>)
    ```
    
-   Description
    
    Returns the sample standard deviation of all the input values.
    
-   Parameters
    
    colname: required. The name of a column, which can be of the DOUBLE or DECIMAL type. If the input value is of the STRING or BIGINT type, it is implicitly converted into the DOUBLE type before calculation.
    
-   Return value
    
    If the value of colname is null, the row that contains this value is not used for calculation. The following table describes the mappings between data types of input data and return values.
    
    **Input type**
    
    **Return value type**
    
    TINYINT
    
    DOUBLE
    
    SMALLINT
    
    DOUBLE
    
    INT
    
    DOUBLE
    
    BIGINT
    
    DOUBLE
    
    FLOAT
    
    DOUBLE
    
    DOUBLE
    
    DOUBLE
    
    DECIMAL
    
    DECIMAL
    
-   Examples
    
    -   Example 1: Calculate the sample standard deviation of salary (sal) values of all employees. Sample statement:
        
        ```
        select stddev_samp(sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 1301.6180541247609 |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and calculate the sample standard deviation of salary (sal) for each department. Sample command:
        
        ```
        select deptno, stddev_samp(sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | 1693.7138680032901 |
        | 20         | 1123.3320969330487 |
        | 30         | 668.3312551921141 |
        +------------+------------+
        ```
        

## SUM

-   Syntax
    
    ```
    DECIMAL｜DOUBLE｜BIGINT  sum(<colname>)
    ```
    
-   Description
    
    Calculate the summary.
    
-   Parameters
    
    colname: required. Column values support all data types and can be converted into the DOUBLE type before calculation. The name of a column, which can be of the DOUBLE, DECIMAL, or BIGINT type. If the input value is of the STRING type, it is implicitly converted into the DOUBLE type before calculation.
    
-   This section describes the return value.
    
    If the value of colname is null, the row that contains this value is not used for calculation. The following table describes the mappings between data types of input data and return values.
    
    **Input type**
    
    **Return value type**
    
    TINYINT
    
    BIGINT
    
    SMALLINT
    
    BIGINT
    
    INT
    
    BIGINT
    
    BIGINT
    
    BIGINT
    
    FLOAT
    
    DOUBLE
    
    DOUBLE
    
    DOUBLE
    
    DECIMAL
    
    DECIMAL
    
-   Examples
    
    -   Example 1: Calculate the sum of salary (sal) values of all employees. Sample statement:
        
        ```
        select sum(sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 37775      |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and calculate the sum of salary (sal) for each department. Sample command:
        
        ```
        select deptno, sum(sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | 17500      |
        | 20         | 10875      |
        | 30         | 9400       |
        +------------+------------+
        ```
        

## VAR\_SAMP

-   Syntax
    
    ```
    double var_samp(<colname>)
    ```
    
-   Description
    
    Calculates the sample variance of a specified numeric column. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    colname: required. A column of the numeric data type. If the specified column is not a numeric column, a null value is returned.
    
-   Return value
    
    A value of the DOUBLE type is returned.
    
-   Examples
    
    -   Example 1: Calculate the sample variance of the salary values (sal) of all employees. Sample statement:
        
        ```
        select var_samp(sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 1694209.5588235292 |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and calculate the sample variance of salary (sal) for each group. Sample command:
        
        ```
        select deptno, var_samp(sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | 2868666.666666667 |
        | 20         | 1261875.0  |
        | 30         | 446666.6666666667 |
        +------------+------------+
        ```
        

## VARIANCE/VAR\_POP

-   Syntax
    
    ```
    double variance(<colname>)
    double var_pop(<colname>)
    ```
    
-   This topic describes the command.
    
    Calculates the variance of a specified numeric column.
    
-   Metric description
    
    colname: required. A column of the numeric data type. If the specified column is not a numeric column, a null value is returned. This function is an additional function of MaxCompute V2.0.
    
-   Return value
    
    A value of the DOUBLE type is returned.
    
-   Examples
    
    -   Example 1: Calculate the variance of the salary values (sal) of all employees. Sample statement:
        
        ```
        select variance(sal) from emp;
        -- This is equivalent to the following statement.
        select var_pop(sal) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 1594550.1730103805 |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and calculate the variance of salary (sal) for each group. Sample command:
        
        ```
        select deptno, variance(sal) from emp group by deptno;
        -- This is equivalent to the following statement.
        select deptno, var_pop(sal) from emp group by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | 2390555.5555555555 |
        | 20         | 1009500.0  |
        | 30         | 372222.22222222225 |
        +------------+------------+
        ```
        

## WM\_CONCAT

-   Syntax
    
    ```
    string wm_concat(string <separator>, string <colname>)
    ```
    
-   Description of the command.
    
    Concatenates values in colname using a delimiter that is specified by separator.
    
-   Description.
    
    -   separator: required. The delimiter, which is a constant of the STRING type.
        
    -   colname: required. A value of the STRING type. If the input value is of the BIGINT, DOUBLE, or DATETIME type, the value is implicitly converted into the STRING type before calculation.
        
-   Return value (when using `group by` for grouping, the return values within a group are not sorted)
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of separator is not a constant of the STRING type, an error is returned.
        
    -   If the value of colname is not of the STRING, BIGINT, DOUBLE, or DATETIME type, an error is returned.
        
    -   If the value of colname is null, the row that contains this value is not used for calculation.
        
    
    **Note**
    
    In the statement `select wm_concat(',', name) from table_name;`, if `table_name` is an empty set, the statement returns NULL.
    
-   Examples
    
    -   Example 1: Concatenate the names (ename) of all employees. Sample statement:
        
        ```
        select wm_concat(',', ename) from emp;
        ```
        
        The following result is returned:
        
        ```
        +------------+
        | _c0        |
        +------------+
        | SMITH,ALLEN,WARD,JONES,MARTIN,BLAKE,CLARK,SCOTT,KING,TURNER,ADAMS,JAMES,FORD,MILLER,JACCKA,WELAN,TEBAGE |
        +------------+
        ```
        
    -   Example 2: Use this function with `group by` to group all employees by department (deptno) and concatenate the names (ename) of employees in the same group. Sample command:
        
        ```
        select deptno, wm_concat(',', ename) from emp group by deptno order by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | CLARK,KING,MILLER,JACCKA,WELAN,TEBAGE |
        | 20         | SMITH,JONES,SCOTT,ADAMS,FORD |
        | 30         | ALLEN,WARD,MARTIN,BLAKE,TURNER,JAMES |
        +------------+------------+
        ```
        
    -   Example 3: Use this function with `group by` to group all employees by department (deptno) and concatenate the distinct salary (sal) values of employees in the same group. Sample command:
        
        ```
        select deptno, wm_concat(distinct ',', sal) from emp group by deptno order by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        | deptno     | _c1        |
        +------------+------------+
        | 10         | 1300,2450,5000 |
        | 20         | 1100,2975,3000,800 |
        | 30         | 1250,1500,1600,2850,950 |
        +------------+------------+
        ```
        
    -   Example 4: Use this function with `group by` and `order by` to group all employees by department (deptno), sort their salaries (sal), and concatenate them. Sample command:
        
        ```
        select deptno, wm_concat(',',sal) within group(order by sal) from emp group by deptno order by deptno;
        ```
        
        The following result is returned:
        
        ```
        +------------+------------+
        |deptno|_c1|
        +------------+------------+
        |10|1300,1300,2450,2450,5000,5000|
        |20|800,1100,2975,3000,3000|
        |30|950,1250,1250,1500,1600,2850|
        +------------+------------+
        ```
