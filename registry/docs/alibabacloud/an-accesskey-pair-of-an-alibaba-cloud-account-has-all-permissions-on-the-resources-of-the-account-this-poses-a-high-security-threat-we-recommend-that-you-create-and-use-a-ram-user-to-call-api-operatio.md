The MaxCompute SQL engine supports a script mode for use cases such as extract, transform, and load (ETL) tasks on large datasets, automated periodic tasks, and complex query orchestration. In script mode, a multi-statement SQL script file is compiled as a single unit and submitted for runtime at once. This process generates a single execution plan, which ensures that the script is queued and executed only once. This approach optimizes the use of MaxCompute resources, improves work efficiency, and enhances the flexibility and security of your data processing and analysis workflows.

**Note**

-   You cannot use [cost estimation](/help/en/maxcompute/user-guide/measurement-estimate#section-i10-jbo-z68) to estimate the fees for SQL in script mode. The actual fees are reflected in your bill. For more information, see [View billing details](/help/en/maxcompute/product-overview/view-billing-details#concept-rhv-f2d-5db).
    
-   A single script can reference a maximum of 10,000 tables. If the script includes a view, the tables referenced in the view's definition are also counted. Each reference to a table is counted, even if the same table is referenced multiple times.
    

The script mode lets you write SQL statements based on your business logic, similar to a standard programming language, without needing to focus on statement organization.

## **Use cases**

-   The script mode is suitable for rewriting a single, complex statement that requires nested subqueries or for combining multiple statements into a single script.
    
-   If data from multiple data sources is prepared at long intervals (for example, one is ready at 01:00 and another at 07:00), do not use a table variable to assemble a large SQL script in script mode.
    

## Syntax

```
-- SET 
SET odps.sql.type.system.odps2=true;
[SET odps.stage.reducer.num=xxx;]
[...]
-- DDL
CREATE TABLE table1 xxx;
[CREATE TABLE table2 xxx;]
[...]
-- DML
@var1 := SELECT [ALL | DISTINCT] select_expr, select_expr, ...
        FROM table3
        [WHERE where_condition];
@var2 := SELECT [ALL | DISTINCT] select_expr, select_expr, ...
        FROM table4
        [WHERE where_condition];
@var3 := SELECT [ALL | DISTINCT] var1.select_expr, var2.select_expr, ...
        FROM @var1 JOIN @var2 ON ...;
INSERT OVERWRITE|INTO TABLE [PARTITION (partcol1=val1, partcol2=val2 ...)]
        SELECT [ALL | DISTINCT] select_expr, select_expr, ...
        FROM @var3;    
[@var4 := SELECT [ALL | DISTINCT] var1.select_expr, var1.select_expr, ... FROM @var1 
        UNION ALL | UNION 
        SELECT [ALL | DISTINCT] var2.select_expr, var2.select_expr, ... FROM @var2;    
CREATE [EXTERNAL] TABLE [IF NOT EXISTS] table_name 
        AS 
        SELECT [ALL | DISTINCT] select_expr, select_expr, ...
        FROM @var4;]
[...]
```

## Description

-   Statement types
    
    The script mode supports SET statements, some DDL statements, and DML statements. DDL statements that display results on the screen, such as DESC or SHOW, are not supported.
    
-   Statement order A script must follow the order of `SET`, `DDL`, and then `DML`. Each section can contain zero or more SQL statements, but the sections cannot be interleaved.
    
-   Script execution
    
    -   Atomic execution: In script mode, if any statement fails, the entire script fails and all operations are rolled back.
        
    -   Single job: In script mode, a single job is generated for data processing. This job runs only after all input data is ready.
        
-   Variable usage rules
    
    -   Use the at sign (`@`) to declare a variable.
        
    -   In script mode, you cannot assign a `table` type variable to another variable with a specified data type. Example:
        
        ```
        @a TABLE (name STRING);
        @a:= SELECT 'tom';
        @b STRING;
        @b:= SELECT * FROM @a;
        ```
        
    -   In script mode, you can assign a constant value to a variable. You can then execute a `SELECT * FROM variable` statement to convert the variable into a scalar value for calculations with other columns. The constant value can also be stored in a single-row table, as shown in the following example. For more information about the conversion syntax, see [Subqueries](/help/en/maxcompute/user-guide/subqueries#concept-fbc-4kb-wdb).
        
        ```
        @a := SELECT 10; -- Assign the constant 10 to @a, or assign a value from the single-row table t1 using SELECT col1 FROM t1.
        @b := SELECT key,VALUE+(SELECT * FROM @a) FROM t2 WHERE key >10000; -- Calculate using the value column in table t2 and the value of @a.
        SELECT * FROM @b;
        ```
        
-   Restrictions on key statements
    
    -   A script can contain a maximum of one statement that displays results on the screen, such as a standalone `SELECT` statement. If a script contains more than one such statement, an error occurs.
        
    -   A script can contain the `CREATE TABLE AS` statement only once, and it must be the last executable statement in the script. We recommend that you create the table and insert data in separate operations.
        
    -   In the same script, you cannot perform both \`OVERWRITE\` and \`INTO\` operations on the same table. You also cannot perform DML operations on both transactional tables and standard tables in the same script.
        
    -   The script mode supports the IF statement. The IF statement allows a program to select the execution logic based on conditions.
        
        -   MaxCompute supports the following types of IF syntax.
            
            ```
            IF (condition) BEGIN
              statement 1
              statement 2
              ...
            END
            
            IF (condition) BEGIN
              statements
            END ELSE IF (condition2) BEGIN
              statements
            END ELSE BEGIN
              statements
            END
            ```
            
            **Note**
            
            -   If the BEGIN and END clauses contain only one statement, you can omit the BEGIN and END keywords. This is similar to the code block `{ }` in Java.
                
            -   The statements within each branch of the IF syntax do not support DDL statements, such as CREATE TABLE, ALTER TABLE, or TRUNCATE TABLE.
                
            
        -   The condition in an IF statement can be one of the following two types:
            
            **An expression of the BOOLEAN type**. For an `IF ELSE` statement of this type, the branch to execute is determined during compilation. Example:
            
            ```
            -- 
            date := '20190101';
            @row  TABLE(id STRING); -- Declare the variable row. Its type is Table and its schema is string. 
            IF ( CAST(@date  AS BIGINT) % 2 == 0 ) BEGIN 
            @row  := SELECT id FROM src1; 
            END ELSE BEGIN
            @row  := SELECT id FROM src2; 
            END
            INSERT OVERWRITE TABLE dest SELECT * FROM @row; 
            ```
            
            **A scalar subquery of the BOOLEAN type**. For an `IF ELSE` statement of this type, the branch to execute is determined at runtime, not during compilation. Therefore, the system may submit multiple jobs. Example:
            
            ```
            @i bigint;
            @t TABLE(id bigint, VALUE bigint);
            IF ((SELECT COUNT(*) FROM src WHERE a = '5') > 1)  BEGIN
            @i := 1;
            @t := SELECT @i, @i*2;
            END ELSE
            BEGIN
            @i := 2;
            @t := SELECT @i, @i*2;
            END
            SELECT id, VALUE FROM @t; 
            ```
            
    -   In script mode, an error occurs if you attempt to read from a table in the same script after writing to it, as shown in the following example:
        
        ```
        -- An error occurs because the table is written to and then read from.
        INSERT OVERWRITE TABLE src2 SELECT * FROM src WHERE key > 0;
        @a := SELECT * FROM src2;
        SELECT * FROM @a;
        
        -- To prevent this error, modify the SQL script as follows:
        @a := SELECT * FROM src WHERE key > 0;
        INSERT OVERWRITE TABLE src2 SELECT * FROM @a;
        SELECT * FROM @a;
        ```
        

## Example

The following sample code shows an example of MaxCompute SQL statements in script mode.

```
CREATE TABLE IF NOT EXISTS dest(key STRING, value BIGINT) PARTITIONED BY (d STRING);
CREATE TABLE IF NOT EXISTS dest2(key STRING, value BIGINT) PARTITIONED  BY (d STRING);
@a := SELECT * FROM src WHERE value >0;
@b := SELECT * FROM src2 WHERE key is not null;
@c := SELECT * FROM src3 WHERE value is not null;
@d := SELECT a.key,b.value FROM @a LEFT OUTER JOIN @b ON a.key=b.key AND b.value>0;
@e := SELECT a.key,c.value FROM @a INNER JOIN @c ON a.key=c.key;
@f := SELECT * FROM @d UNION SELECT * FROM @e UNION SELECT * FROM @a;
INSERT OVERWRITE TABLE dest PARTITION (d='20171111') SELECT * FROM @f;
@g := SELECT e.key,c.value FROM @e JOIN @c ON e.key=c.key;
INSERT OVERWRITE TABLE dest2 PARTITION (d='20171111') SELECT * FROM @g;
```

## Tools support

You can use the SQL script mode in [MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db), the [MaxCompute client (odpscmd)](/help/en/maxcompute/user-guide/maxcompute-client#section-vd2-4me-7uu), [DataWorks](/help/en/dataworks/user-guide/create-an-odps-script-node#task-1930738), and SDKs. The following sections describe how to use these tools.

**Use the script mode in MaxCompute Studio.**

Before you use the script mode in MaxCompute Studio, ensure that you have installed MaxCompute Studio, added a project connection, and created a MaxCompute SQL script file. For more information, see [Install IntelliJ IDEA](/help/en/maxcompute/user-guide/install-intellij-idea#task-hbh-3gy-5db), [Manage project connections](/help/en/maxcompute/user-guide/manage-project-connections#task-2456405), and [Create a MaxCompute Script Module](/help/en/maxcompute/user-guide/create-a-maxcompute-script-module#task-2460342).

After you compile and run the script, you can view the execution plan. Although the script contains multiple statements, the execution plan is a single directed acyclic graph (DAG).![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4659873061/p11441.png)

**Use the script mode in the MaxCompute client (odpscmd).**

You must use odpscmd V0.27 or later to submit scripts. We recommend that you install the latest version of the [MaxCompute client installation package](https://github.com/aliyun/aliyun-odps-console/releases/download/v0.37.4/odpscmd_public.zip). After installation, use the `-s` parameter to submit the script.

Edit the source file myscript.sql in script mode and run the following command in the command-line window to execute the script using odpscmd. For more information about how to run the MaxCompute client from the command-line window, see [Run the MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#section-5ad-gj6-hku).

```
..\bin>odpscmd -s myscript.sql
```

**Note**

The `-s` option is a command-line option for odpscmd, similar to `-f` and `-e`, and is not a command in an interactive environment. The script mode and table variables are not supported in the interactive environment of odpscmd.

**Use the script mode in DataWorks.**

In DataWorks, you can create an ODPS Script node in script mode, as shown in the following figure.![脚本节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2224165861/p81336.png)

You can edit the script in this node. After you finish editing, click the **Run** icon in the toolbar to submit the script to MaxCompute for execution. You can view the execution plan and results from the Logview URL in the output information.

**Use the script mode in an SDK.**

You can directly run an SQL script using the Java SDK or Python SDK. For more information about the Java SDK, see [Java SDK introduction](/help/en/maxcompute/user-guide/sdk-for-java#concept-utw-vvc-5db). For more information about the Python SDK, see [Python SDK introduction](/help/en/maxcompute/user-guide/overview-32). The following code provides examples.

Java

```
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.aliyun.odps.Instance;
import com.aliyun.odps.Odps;
import com.aliyun.odps.OdpsException;
import com.aliyun.odps.account.Account;
import com.aliyun.odps.account.AliyunAccount;
import com.aliyun.odps.data.Record;
import com.aliyun.odps.task.SQLTask;

public class SdkTest {

  public static void main(String[] args) throws OdpsException {
		// An AccessKey pair of an Alibaba Cloud account has all permissions on the resources of the account. This poses a high security threat. We recommend that you create and use a RAM user to call API operations or perform routine O&M. Log on to the RAM console to create a RAM user.
		// This example shows how to store the AccessKey ID and AccessKey secret in environment variables. You can also store them in a configuration file as needed.
		// Do not hard-code the AccessKey ID and AccessKey secret in your code. Otherwise, the AccessKey pair may be leaked.
    Account account = new AliyunAccount(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
    Odps odps = new Odps(account);
    odps.setDefaultProject("your project_name");
    odps.setEndpoint("your end_point");

    String sqlScript = "@a := SELECT * FROM jdbc_test;\n"
                       + "SELECT * FROM @a;";

    // You must add this configuration.
    Map<String, String> hints = new HashMap<>();
    hints.put("odps.sql.submit.mode", "script");

    Instance instance = SQLTask.run(odps, "your project_name", sqlScript, hints, null);
    instance.waitForSuccess();

    List<Record> recordList = SQLTask.getResult(instance);
    for (Record record : recordList) {
      System.out.println(record.get(0));
      System.out.println(record.get(1));
    }
  }

}
```

Python

```
import os
from odps import ODPS


# An AccessKey pair of an Alibaba Cloud account has all permissions on the resources of the account. This poses a high security threat. We recommend that you create and use a RAM user to call API operations or perform routine O&M. Log on to the RAM console to create a RAM user.
# This example shows how to store the AccessKey ID and AccessKey secret in environment variables. You can also store them in a configuration file as needed.
# Do not hard-code the AccessKey ID and AccessKey secret in your code. Otherwise, the AccessKey pair may be leaked.
o = ODPS(
    os.environ["ALIBABA_CLOUD_ACCESS_KEY_ID"],
    os.environ["ALIBABA_CLOUD_ACCESS_KEY_SECRET"],
    "your project_name",
    "your end_point"
)

sql_script = """
@a := SELECT * FROM jdbc_test;
SELECT * FROM @a;
"""

# You must add this configuration.
hints = {"odps.sql.submit.mode", "script"}
instance = o.execute_sql(sql_script, hints=hints)

with instance.open_reader() as reader:
    for rec in reader:
        print(rec[0], rec[1])
```
