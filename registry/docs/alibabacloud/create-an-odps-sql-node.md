DataWorks provides ODPS SQL nodes so that you can schedule MaxCompute SQL tasks on a regular basis, integrate ODPS SQL nodes with other types of nodes, and then jointly schedule the nodes. MaxCompute SQL tasks can process terabytes of data in distributed scenarios that do not require real-time processing by using the SQL-like syntax. This topic describes the precautions on and guidance for the development of MaxCompute SQL tasks in DataWorks.

## Prerequisites

An ODPS SQL node is created. For more information, see [Create and manage ODPS nodes](/help/en/dataworks/user-guide/create-and-manage-maxcompute-nodes).

## Background information

MaxCompute SQL is used to process and query data in MaxCompute. MaxCompute SQL supports common SQL statements, such as SELECT, INSERT, UPDATE, and DELETE statements, and specific MaxCompute syntaxes and functions. You can use MaxCompute SQL to write SQL-like statements to query and process data, without the need to write complex data processing logic. For more information about the SQL syntax, see [Overview of MaxCompute SQL](/help/en/maxcompute/user-guide/overview-of-maxcompute-sql).

## Limits

The following table describes the limits on the development of MaxCompute SQL tasks in DataWorks.

**Item**

**Description**

**Use of comments**

You cannot separately add comments to a SET or USE statement.

You cannot use semicolons (;) in comments.

You cannot add comments to the end of a complete statement. If a semicolon (;) is added to the end of an SQL statement, the SQL statement is considered complete.

**Execution of SQL statements**

You cannot separately use a SET or USE statement in the code of an ODPS SQL node. They must be executed with other SQL statements.

**SQL development**

The code of an ODPS SQL node cannot exceed **128 KB** in size or contain more than **200 SQL statements.**

**Query result**

You can use only statements that start with SELECT or WITH to return formatted result sets. A maximum of **10,000** rows of result data can be displayed, and a maximum of **10 MB** result data can be returned.

## **Precautions**

The sequence in which the SET and USE statements are executed in the code of an ODPS SQL node varies based on the environment in DataWorks.

-   DataStudio: The SET and USE statements are combined in the node code and are executed before you execute other SQL statements.
    
-   Scheduling environment: All statements are executed in sequence.
    

Sample code that is defined in an ODPS SQL node:

```
SET a=b;
CREATE TABLE name1(id string);
SET c=d;
CREATE TABLE name2(id string);
```

The following table describes the sequences of executing the preceding statements in different environments.

**SQL statement**

**DataStudio**

**Scheduling environment**

First SQL statement

```
SET a=b;
SET c=d;
CREATE TABLE name1(id string);
```

```
SET a=b;
CREATE TABLE name1(id string);
```

Second SQL statement

```
SET a=b;
SET c=d;
CREATE TABLE name2(id string);
```

```
SET c=d;
CREATE TABLE name2(id string);
```

## Simple code editing example

### **SQL statements**

The MaxCompute SQL syntax is similar to the standard SQL syntax. DDL, DML, and DQL statements and MaxCompute-specific statements are supported. For information about the syntax requirements and usage examples of each SQL statement, see [Overview of MaxCompute SQL](/help/en/maxcompute/user-guide/overview-of-maxcompute-sql). The following example shows how to write and execute SQL statements.

**Note**

-   If new data types are used for the additional functions of MaxCompute V2.0, you must add `SET odps.sql.type.system.odps2=true;` before the SQL statements that use the functions, and commit and execute the SET statement together with the SQL statements. For more information about data types in MaxCompute V2.0, see [MaxCompute V2.0 data type edition](/help/en/maxcompute/user-guide/maxcompute-v2-0-data-type-edition).
    
-   DataWorks provides scheduling parameters. To enable parameters to be dynamically passed in the code of an ODPS SQL node, you can define variables in the node code in the `**${Variable name}**` format, and assign parameters to the variables as values in the **Scheduling Parameter** section of the **Properties** tab on the configuration tab of the ODPS SQL node. For information about the supported formats of scheduling parameters, see [Supported formats of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters).
    

-   Create a table
    
    You can execute the `CREATE TABLE` statement to create a non-partitioned table, a partitioned table, an external table, or a clustered table. For more information, see [CREATE TABLE](/help/en/maxcompute/user-guide/create-table). Sample SQL statement:
    
    ```
    -- Create a partitioned table named test1.
    CREATE TABLE if NOT EXISTS students
    ( id BIGINT,
      name STRING,
      age BIGINT,
      birth DATE)
    partitioned BY (gender STRING); 
    ```
    
-   Insert data
    
    You can execute the `INSERT INTO` or `INSERT OVERWRITE` statement to insert data into a destination table. For more information, see [Insert data into or overwrite data in a table or a static partition (INSERT INTO and INSERT OVERWRITE)](/help/en/maxcompute/user-guide/insert-or-update-data-into-a-table-or-a-static-partition). Sample SQL statements:
    
    ```
    -- Insert data.
    INSERT INTO students PARTITION(gender='boy') VALUES (1,'John',15,DATE '2008-05-15') ;
    INSERT INTO students PARTITION(gender='boy') VALUES (2,'Jack',17,DATE '2006-07-20') ;
    INSERT INTO students PARTITION(gender='girl') VALUES (3,'Alice',20,DATE '2003-04-20') ;
    INSERT INTO students PARTITION(gender='girl') VALUES (4,'Lily',21,DATE '2002-01-08') ;
    INSERT INTO students PARTITION(gender='boy') VALUES (5,'Bob',17,DATE '2006-09-12') ;
    ```
    
    **Important**
    
    The `INSERT INTO` statement may result in unexpected data duplication. We recommend that you execute the `INSERT OVERWRITE` statement, instead of the INSERT INTO statement. For more information, see [Insert data into or overwrite data in a table or a static partition (INSERT INTO and INSERT OVERWRITE)](/help/en/maxcompute/user-guide/insert-or-update-data-into-a-table-or-a-static-partition).
    
-   Query data
    
    You can execute `SELECT` statements to perform operations, such as nested queries, sorting, and queries by group. For more information, see [SELECT syntax](/help/en/maxcompute/user-guide/select-syntax-1). Sample SQL statements:
    
    ```
    -- Enable the full table scan feature, which is valid only for the current session.
    SET odps.sql.allow.fullscan=true; 
    
    -- Query the information about all boys and sort the information by ID in ascending order.
    SELECT * FROM students WHERE gender='boy' ORDER BY id;
    ```
    
    **Note**
    
    By default, RAM users do not have the required permissions to query MaxCompute tables in the production environment. If you want to query MaxCompute tables in the production environment as a RAM user, you must request the required permissions for the RAM user in Security Center in the DataWorks console. For information about the permissions of built-in workspace-level roles on MaxCompute data and how to manage the permissions, see [Manage permissions on data in a MaxCompute compute engine instance](/help/en/dataworks/user-guide/manage-permissions-on-data-in-a-maxcompute-compute-engine-instance). For information about how to grant permissions to users by running commands, see [Manage user permissions by using commands](/help/en/maxcompute/user-guide/manage-user-permissions-by-using-commands).
    

### **SQL functions**

MaxCompute allows you to use built-in functions and user-defined functions (UDFs) for data development and analysis. For information about built-in functions, see [Overview of built-in functions](/help/en/maxcompute/user-guide/overview). For information about UDFs, see [Overview of UDFs](/help/en/maxcompute/user-guide/overview-22). The following example shows how to use SQL functions.

-   Built-in functions
    
    MaxCompute provides a large number of built-in functions. You can directly call the built-in functions. You can use the `dateadd` function to change data in the `**birth**` column by specified unit and specified interval based on the example in the preceding section. Sample SQL statements:
    
    ```
    -- Enable the full table scan feature, which is valid only for the current session.
    SET odps.sql.allow.fullscan=true; 
    SELECT id, name, age, birth, dateadd(birth,1,'mm') AS birth_dateadd FROM students;
    ```
    
-   UDFs
    
    To use a UDF, you must write the code, upload the code as a resource, and register the function. For more information, see [Create and use a MaxCompute UDF](/help/en/dataworks/user-guide/create-and-use-custom-functions).
    

### **Running results and returned data**

-   Running results are displayed in a workbook. You can perform operations on the running results in DataWorks, view or manage the running results in the workbook, or copy the running results to an Excel file on your on-premises machine. For more information, see [Debugging procedure](/help/en/dataworks/user-guide/debugging-procedure).
    
    **Note**
    
    Due to the adjustment made by the International Organization for Standardization (ISO) on the UTC+8 time zone, differences exist between the actual time and the output time when you execute related SQL statements in DataWorks. In a year from 1900 to 1928, the time difference is 352 seconds. Before the year of 1900, the time difference is 9 seconds.
    
-   Operation logs: You can click the **Runtime Log** tab to view the operation logs in LogView. For more information, see [Use LogView V2.0 to view job information](/help/en/maxcompute/user-guide/use-logview-v2-0-to-view-job-information).
    
-   Returned data:
    
    -   Query the information about all boys and sort the information by ID in ascending order.
        
        ```
        +------------+------------+------------+------------+------------+
        | id         | name       | age        | birth      | gender        |
        +------------+------------+------------+------------+------------+
        | 1          | John         | 15         | 2008-05-15 | boy        |
        | 2          | Jack         | 17         | 2006-07-20 | boy        |
        | 5          | Bob         | 17         | 2006-09-12 | boy        |
        +------------+------------+------------+------------+------------+
        ```
        
    -   Change data in the **birth** column by specified unit and specified interval.
        
        ```
        +------------+------------+------------+------------+---------------+
        | id         | name       | age        | birth      | birth_dateadd |
        +------------+------------+------------+------------+---------------+
        | 4          | Lily         | 21         | 2002-01-08 | 2002-02-08    |
        | 3          | Alice         | 20         | 2003-04-20 | 2003-05-20    |
        | 2          | Jack         | 17         | 2006-07-20 | 2006-08-20    |
        | 1          | John         | 15         | 2008-05-15 | 2008-06-15    |
        | 5          | Bob         | 17         | 2006-09-12 | 2006-10-12    |
        +------------+------------+------------+------------+---------------+
        ```
        
    
    On the Result tab, you can sort result data by specific field and perform operations such as download on the result data. For more information, see [Process query results](/help/en/dataworks/user-guide/debugging-procedure#section-8rg-v2x-vpq).
    

## **Advanced code editing examples**

For more information, see the following topics:

-   [JOIN operations in MaxCompute SQL](/help/en/maxcompute/use-cases/join-operations-in-maxcompute-sql)
    
-   [Migrate JSON-formatted data from OSS to MaxCompute](/help/en/dataworks/user-guide/migrate-json-data-from-oss-to-maxcompute)
    
-   [Integration of offline and real-time processing of data in GitHub public event datasets](/help/en/maxcompute/use-cases/integration-of-offline-and-real-time-processing-of-data-in-github-public-event-datasets)
    
-   [Use a MaxCompute UDF to convert IPv4 or IPv6 addresses into geolocations](/help/en/maxcompute/use-cases/use-a-maxcompute-udf-to-convert-ipv4-or-ipv6-addresses-into-geolocations)
    
-   [Optimize SQL statements](/help/en/maxcompute/use-cases/optimize-sql-statements)
    
-   [Policy-based permission management for users assigned built-in roles](/help/en/maxcompute/use-cases/policy-based-permission-management-for-users-assigned-built-in-roles)
    
-   [Implement capabilities provided by the GROUP\_CONCAT function](/help/en/maxcompute/use-cases/implement-capabilities-provided-by-the-group-concat-function)
    
-   [Merge small files](/help/en/maxcompute/user-guide/merge-small-files)
