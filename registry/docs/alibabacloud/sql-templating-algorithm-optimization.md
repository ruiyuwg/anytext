Starting from September 1, 2024, the SQL template algorithm of Database Autonomy Service (DAS) is optimized.

## Background information

DAS provides the SQL template algorithm for slow queries and SQL audits to perform data analysis. DAS processes an SQL statement to generate an SQL template based on the SQL template algorithm and then aggregates and analyzes the generated SQL templates of the same type. The current SQL template algorithm cannot handle truncated SQL statements well. For example, an expanded number of SQL templates may be generated due to the uncertainty of the position in which an SQL statement is truncated. In this case, the generated templates are inconvenient to aggregate.

## Effective date

Starting from September 1, 2024, the SQL template algorithm for slow queries and SQL audits is optimized.

**Note**

You will not receive notifications on iterative optimizations of the SQL template algorithm after September 1, 2024. The responses to API requests prevail.

## Effective scope

The following database engines support the optimization: ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, ApsaraDB RDS for SQL Server, ApsaraDB RDS for MariaDB, and PolarDB for MySQL.

## Content

The following optimizations are provided:

-   `$$` can be used as a string constant delimiter in ApsaraDB RDS for PostgreSQL instances when an SQL statement is processed, and the issue that an identifier is incorrectly replaced with a question mark (?) is fixed.
    
    For example, the following original SQL statement is used:
    
    ```
    UPDATE "study" SET "name" = 'xiaoming', "ext" = $${"math":90,"english":91}$$ where id=128;
    ```
    
    Before optimization, the following SQL template is generated:
    
    ```
    UPDATE ?  SET ?  = ?, ?  = $${?:?,?:?}$$ where id=?;
    ```
    
    After optimization, the following SQL template is generated:
    
    ```
    UPDATE "study" SET "name"=?,"ext"=?  WHERE id=?;
    ```
    
-   You can replace the numeric suffixes of table names and column names to reduce the number of templates.
    
    For example, the following original SQL statement is used:
    
    ```
    select * from [school_3].[class].[student_25];
    ```
    
    Before optimization, the following SQL template is generated:
    
    ```
    select * from [school_3].[class].[student_25];
    ```
    
    After optimization, the following SQL template is generated:
    
    ```
    SELECT * FROM [school_?].[class].[student_?];
    ```
    
-   For ApsaraDB RDS for SQL Server instances, the prefixes of SQL statements can be removed. This helps you parse the type of SQL statements.
    
    For example, the following original SQL statement is used:
    
    ```
    (@P0 nvarchar(4000))select id, name from student WHERE name = @P0;
    ```
    
    Before optimization, the following SQL template is generated:
    
    ```
    Generated SQL template: (@P0 nvarchar(?))select id, name from student WHERE name = @P0;
    Parsed type of the SQL statement: p0
    ```
    
    After optimization, the following SQL template is generated:
    
    ```
    Generated SQL template: SELECT id,name FROM student WHERE name=?;
    Parsed type of the SQL statement: select
    ```
    
-   You can minimize the number of spaces and retain the case of keywords in the original SQL statement without affecting the syntax. No case conversion is required.
    
    For example, the following original SQL statement is used:
    
    ```
    select `name` from `student` 
      where `id` = 1 and (`name` = 'xiaoming' or `class` = 2);
    ```
    
    Before optimization, the following SQL template is generated:
    
    ```
    SELECT `name` FROM `student` WHERE `id` = ?  AND (`name` = ?  OR `class` = ?)
    ```
    
    After optimization, the following SQL template is generated:
    
    ```
    SELECT `name` FROM `student` WHERE `id`=?  AND (`name`=?  OR `class`=?);
    ```
    
-   All parentheses (()) in the original SQL statement are retained.
    
    For example, the following original SQL statement is used:
    
    ```
    select `name` from `student` where `id` = 1 and (`name` = 'xiaoming');
    ```
    
    Before optimization, the following SQL template is generated:
    
    ```
    SELECT `name` FROM `student` WHERE `id` = ?  AND `name` = ?
    ```
    
    After optimization, the following SQL template is generated:
    
    ```
    SELECT `name` FROM `student` WHERE `id`=?  AND (`name`=?);
    ```
    
-   The parentheses (()) that surround the case expression are no longer converted to "AS".
    
    For example, the following original SQL statement is used:
    
    ```
    select `name`, ( CASE WHEN score > 90 THEN 'A' END ) `grade` from `student`;
    ```
    
    Before optimization, the following SQL template is generated:
    
    ```
    SELECT `name` , CASE  WHEN score > ?  THEN ?  END AS `grade` FROM `student`
    ```
    
    After optimization, the following SQL template is generated:
    
    ```
    SELECT `name`,(CASE WHEN score>?  THEN ?  END)`grade` FROM `student`;
    ```
    
-   The content after a number sign (#) can be correctly parsed.
    
    For example, the following original SQL statement is used:
    
    ```
    select `name`, `#grade` from `student`;
    ```
    
    Before optimization, the following SQL template is generated:
    
    ```
    SELECT `name`, `
    ```
    
    After optimization, the following SQL template is generated:
    
    ```
    SELECT `name`,`#grade` FROM `student`;
    ```
    
-   When DAS processes truncated SQL statements, all content in unpaired parentheses is discarded to reduce the number of templates.
    
    For example, the following original SQL statement is used:
    
    ```
    select `name`, `grade` from `student` where id = (select uid from 
    ```
    
    Before optimization, the following SQL template is generated:
    
    ```
    select `name`, `grade` from `student` where id = (select uid from
    ```
    
    After optimization, the following SQL template is generated:
    
    ```
    SELECT `name`,`grade` FROM `student` WHERE id=
    ```
    
-   Similar expressions are merged to prevent template expansion due to a large number of similar expressions.
    
    For example, the following original SQL statement is used:
    
    ```
    SELECT 
        CASE 
            WHEN score >= 90 THEN 'A'
            WHEN score >= 80 THEN 'B'
            WHEN score >= 70 THEN 'C'
            WHEN score >= 60 THEN 'D'
            ELSE 'F'
        END AS grade
    FROM 
        students;
    ```
    
    Before optimization, the following SQL template is generated:
    
    ```
    SELECT CASE  WHEN score >= ?  THEN ?  WHEN score >= ?  THEN ?  WHEN score >= ?  THEN ?  WHEN score >= ?  THEN ?  ELSE ?  END AS grade FROM students
    ```
    
    After optimization, the following SQL template is generated:
    
    ```
    SELECT CASE WHEN score>=?  THEN ?  ELSE ?  END AS grade FROM students;
    ```
    

### Impact

-   When you call the **DescribeSlowLogs** or **DescribeSlowLogRecords** operation after the optimization, the value of the **SQLHash** parameter corresponding to the **SQLText** parameter changes.
    
-   When you call the **GetFullRequestStatResultByInstanceId** or **GetAsyncErrorRequestListByCode** operation after the optimization, the value of the **SqlId** parameter changes.
