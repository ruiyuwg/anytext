Database Autonomy Service (DAS) provides the SQL throttling feature. You can use this feature to control the number of database access requests and concurrent SQL statements to ensure service availability. This topic describes how to use this feature.

## Prerequisites

The following database engines are supported:

-   ApsaraDB RDS for MySQL 5.6, 5.7, and 8.0.
    
-   ApsaraDB RDS for PostgreSQL 13 and later.
    
    **Note**
    
    -   PostgreSQL 13: The [minor engine version](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance#7473cf6005nkf) must be 20250430 or later.
        
    -   PostgreSQL 14 or 15: The minor engine version must be 20230330 or later.
        
    -   PostgreSQL later than 15: No requirement for the minor engine version.
        
    
-   PolarDB for MySQL 5.6, 5.7, and 8.0.
    
-   PolarDB-X 2.0.
    

## **Throttling messages**

After you create an SQL throttling rule, if an application runs an SQL statement that contains all the specified keywords or matches the template, the database system returns a message when throttling is triggered. The message that is returned varies based on the instance version.

**Maximum concurrency**

**Instance version**

**Error code**

**Error message**

0 or a positive integer

-   ApsaraDB RDS for MySQL 5.6
    
-   ApsaraDB RDS for MySQL 5.7 with a minor engine version earlier than 20200630
    
-   PolarDB for MySQL 5.6
    

1317

`query execution was interrupted`

Positive integer

ApsaraDB RDS for MySQL 5.7 with a minor engine version of 20200630 or later

5041

`Concurrency control waiting count exceed max waiting count`

**Note**

If the maximum concurrency is a positive integer, related SQL statements enter the `Concurrency control waiting` state. When the number of waiting SQL statements exceeds the value of the `ccl_max_waiting_count` parameter, if supported by the instance version, this message is returned.

ApsaraDB RDS for MySQL 8.0

7534

PolarDB for MySQL 5.7

3277

PolarDB for MySQL 8.0

7533

0

ApsaraDB RDS for MySQL 5.7 with a minor engine version of 20200630 or later

5042

`Concurrency control refuse to execute query`

**Note**

If the maximum concurrency is 0, an error is immediately returned.

ApsaraDB RDS for MySQL 8.0

7535

PolarDB for MySQL 5.7

3278

PolarDB for MySQL 8.0

7534

**Note**

-   When DAS throttles SQL statements, it checks the `ccl_max_waiting_count` parameter. If this parameter is set to 0, DAS uses the default value of 10. If the parameter is set to a value greater than 0, DAS uses the configured value.
    
-   For ApsaraDB RDS for MySQL 5.7 instances with a minor engine version of 20200630 or later and ApsaraDB RDS for MySQL 8.0 instances, you can set the `ccl_wait_timeout` parameter if it is supported by the instance version. If you set this parameter, SQL statements in the `Concurrency control waiting` state that exceed this limit continue to run and are no longer throttled.
    
-   For PolarDB for MySQL 8.0 instances, you can set the `ccl_mode` parameter to control the behavior of SQL statements when the concurrency limit is exceeded. This parameter is available only on supported instance versions.
    
    -   WAIT (default): The statement waits in a queue.
        
    -   REFUSE: The statement does not wait, and an error is returned immediately.
        

## Scenarios

**Scenario**

**Description**

A sharp rise in the concurrency of a specific type of SQL statement

Cache penetration or abnormal calls can cause a sudden increase in SQL concurrency.

SQL statements that cause data skew

For example, frequently querying hot data during sales promotions can cause the overall system to become busy.

Missing index tables

For example, a high volume of SQL calls on tables without indexes can cause the overall system to become busy.

## Throttling modes

**Mode**

**Description**

**Supported databases**

**Throttle by Keyword**

Throttles SQL statements that contain specified keywords.

**Note**

You cannot throttle a specific SQL statement.

-   ApsaraDB RDS for MySQL
    
-   PolarDB for MySQL
    
-   PolarDB-X 2.0
    

**Throttle by SQL Template**

Enter an SQL sample. The sample is processed into a template. SQL statements of this type are then throttled.

-   ApsaraDB RDS for MySQL 8.0 with a minor engine version of 20230630 or later.
    
-   ApsaraDB RDS for PostgreSQL:
    
    -   Version 13 with a minor engine version of 20250430 or later.
        
    -   Version 14 with a minor engine version of 20230330 or later.
        
    -   Version 15 with a minor engine version of 20230330 or later.
        
    -   Versions later than 15.
        
    
-   PolarDB for MySQL:
    
    -   Version 8.0.1 with a minor engine version of 8.0.1.1.31 or later.
        
    -   Version 8.0.2 with a minor engine version of 8.0.2.2.12 or later.
        

Throttles SQL statements by matching SQL template IDs. You can get SQL template IDs from SQL logs, sessions, and EXPLAIN results.

**Note**

An SQL template ID is an 8-character hexadecimal string.

PolarDB-X 2.0 Enterprise Edition

**Throttle by **execution time****

Throttles SQL statements based on their running time. After you create a rule for this mode, if the running time of a specified type of SQL statement exceeds the threshold, the template ID of that SQL statement is automatically added to the throttling rule. The SQL statement is then executed based on the concurrency specified in the rule.

**Note**

You can also set a limit on the number of throttled SQL template IDs. After the limit is reached, no more throttling rules are created for other SQL statements.

PolarDB-X 2.0 Enterprise Edition

## Procedure

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Intelligent O&M Center** **>** **Instance Monitoring**.
    
3.  Find the target instance, click the instance ID, and then go to the instance details page.
    
4.  In the navigation pane on the left, click **Instance Sessions**.
    
5.  On the **Session Management** page, click **SQL Throttling**.
    
6.  In the dialog box that appears, click **Create Throttling Rule**.
    
7.  In the **Create Throttling Rule** dialog box, configure the parameters based on the database engine.
    

## ApsaraDB RDS for MySQL

**Parameter**

**Description**

**Throttling Mode:**

Select a [throttling mode](#section-sgm-i66-nx7) as needed.

**SQL Type:**

Select the type of SQL statement. Valid values: **SELECT**, **UPDATE**, **DELETE**, and **INSERT**.

**Note**

-   This parameter is required if you set **Throttling Mode** to **Throttle by Keyword**.
    
-   You can throttle **INSERT** statements only on the following database engines:
    
    -   ApsaraDB RDS for MySQL 8.0
        
    -   PolarDB for MySQL 5.7 and 8.0
        
    -   PolarDB-X 2.0
        
-   You cannot throttle `INSERT...SELECT...` statements.
    

****Database:****

The database where SQL statements are throttled.

**Note**

This parameter is required if you set**Throttling Mode** to **Throttle by SQL Template**.

**Maximum Concurrency**:

The maximum number of concurrent SQL statements. The minimum value is 0.

**Note**

Throttling is triggered when the number of concurrently running SQL statements that meet the policy reaches the maximum concurrency.

**Throttling Duration:**

The effective period of the SQL throttling rule.

**Important**

SQL throttling is an emergency measure. Set the duration as needed and disable the rule when it is no longer required.

**SQL Keyword:**

The keywords of the SQL statements to throttle.

**Note**

-   This parameter is required if you set **Throttling Mode** to **Throttle by Keyword**.
    
-   If you set multiple keywords, the throttling rule is triggered only if an SQL statement contains **all** of the keywords. Separate multiple keywords with tildes (~). The order of keywords does not matter.
    
    For example, the original statement is `SELECT min(id), max(id) FROM task_event WHERE gmt_modified < '2020-06-21' AND begin_time > '2020-07-09' AND source IN (527) AND id >= 15673 AND id <= 8015673` .
    
    The corresponding throttling keywords are `SELECT~min~id~max~id~FROM~task_event~WHERE~gmt_modified~AND~begin_time~AND~source~IN~AND~id~AND~id` .
    
-   You cannot set only `SELECT, INSERT, UPDATE, DELETE` as throttling keywords. Keywords are case-sensitive, but some earlier instance versions are not case-sensitive.
    

**SQL Sample:**

The sample SQL statement to throttle.

**Note**

-   This parameter is required if you set **Throttling Mode** to **Throttle by SQL Template**.
    
-   For complex SQL statements, DAS optimizes the SQL sample but keeps the final SQL template unchanged. The throttling effect is not affected by the optimization.
    
    For example, if you enter ``select name from das where name = `das` and age = 21 limit 20``,
    
    it is templated to `select name from das where name = ? and age = ? limit ?`,
    
    and then rewritten to ``select name from das where name = `param0` and age = `param1` limit 20``.
    

## ApsaraDB RDS for PostgreSQL

**Parameter**

**Description**

**Throttling Mode:**

ApsaraDB RDS for PostgreSQL supports only [SQL template throttling](#section-sgm-i66-nx7)**.**

**Database:**

The database where SQL statements are throttled.

**Search Path:**

The search path for SQL throttling.

**Note**

Separate multiple paths with commas (`,`). The default value is `information_schema,public`.

**Maximum Concurrency**:

The maximum number of concurrent SQL statements. The minimum value is 0.

**Note**

Throttling is triggered when the number of concurrently running SQL statements that meet the policy reaches the maximum concurrency.

**Maximum Waiting Queries:**

The maximum number of waiting statements.

**Throttling Duration:**

The effective period of the SQL throttling rule.

**Important**

SQL throttling is an emergency measure. Set the duration as needed and disable the rule when it is no longer required.

**SQL Sample:**

The sample SQL statement to throttle.

**Note**

-   This parameter is required if you set **Throttling Mode** to **Throttle by SQL Template**.
    
-   For complex SQL statements, DAS templated the SQL sample but keeps the final SQL template unchanged. The throttling effect is not affected by the transformation.
    
    For example, if you enter `select name from das where name = "das" and age = 21 limit 20`,
    
    it is templated to `select name from das where name = ? and age = ? limit ?`,
    
    and then rewritten to `select name from das where name = "param0" and age = "param1" limit 20`.
    

## PolarDB for MySQL

**Parameter**

**Description**

**Throttling Mode:**

Select a [throttling mode](#section-sgm-i66-nx7) as needed.

**SQL Type:**

Select the type of SQL statement. Valid values: `**SELECT**, **UPDATE**, **DELETE**, and **INSERT**`.

**Note**

-   You can throttle `**INSERT**` statements only on the following database engines:
    
    -   ApsaraDB RDS for MySQL 8.0
        
    -   PolarDB for MySQL 5.7 and 8.0
        
    -   PolarDB-X 2.0
        
-   You cannot throttle `INSERT...SELECT...` statements.
    

**Maximum Concurrency**:

The maximum number of concurrent SQL statements. The minimum value is 0.

**Note**

Throttling is triggered when the number of concurrently running SQL statements that meet the policy reaches the maximum concurrency.

**Database:**

The database where SQL statements are throttled.

**Note**

This parameter is required if you set **Throttling Mode** to **Throttle by SQL Template**.

**Throttling Duration:**

The effective period of the SQL throttling rule.

**Important**

SQL throttling is an emergency measure. Set the duration as needed and disable the rule when it is no longer required.

**SQL Keyword:**

The keywords of the SQL statements to throttle.

**Note**

-   This parameter is required if you set **Throttling Mode** to **Throttle by Keyword**.
    
-   If you set multiple keywords, the throttling rule is triggered only if an SQL statement contains **all** of the keywords. Separate multiple keywords with tildes (~). The order of keywords does not matter.
    
    For example, the original statement is `SELECT min(id), max(id) FROM task_event WHERE gmt_modified < '2020-06-21' AND begin_time > '2020-07-09' AND source IN (527) AND id >= 15673 AND id <= 8015673` .
    
    The corresponding throttling keywords are `SELECT~min~id~max~id~FROM~task_event~WHERE~gmt_modified~AND~begin_time~AND~source~IN~AND~id~AND~id` .
    
-   You cannot set only SELECT, INSERT, UPDATE, or DELETE as throttling keywords. Keywords are case-sensitive, but some earlier instance versions are not case-sensitive.
    

**SQL Sample:**

The sample SQL statement to throttle.

**Note**

-   This parameter is required if you set **Throttling Mode** to **Throttle by SQL Template**.
    
-   For complex SQL statements, DAS templated the SQL sample but keeps the final SQL template unchanged. The throttling effect is not affected by the transformation.
    
    For example, if you enter `select name from das where name = "das" and age = 21 limit 20`,
    
    it is templated to `select name from das where name = ? and age = ? limit ?`,
    
    and then rewritten to `select name from das where name = "param0" and age = "param1" limit 20`.
    

## PolarDB-X 2.0

**Parameter**

**Description**

**Throttling Mode:**

Select a [throttling mode](#section-sgm-i66-nx7) as needed.

**SQL Type:**

Select the type of SQL statement. Valid values: `**SELECT**, **UPDATE**, **DELETE**, and **INSERT**`.

**Note**

-   You can throttle `**INSERT**` statements only on the following database engines:
    
    -   ApsaraDB RDS for MySQL 8.0
        
    -   PolarDB for MySQL 5.7 and 8.0
        
    -   PolarDB-X 2.0
        
-   You cannot throttle `INSERT...SELECT...` statements.
    

**Maximum Concurrency**:

The maximum number of concurrent SQL statements. The minimum value is 0.

**Note**

Throttling is triggered when the number of concurrently running SQL statements that meet the policy reaches the maximum concurrency.

**Throttling Duration:**

The effective period of the SQL throttling rule.

**Important**

SQL throttling is an emergency measure. Set the duration as needed and disable the rule when it is no longer required.

**SQL Keyword:**

The keywords of the SQL statements to throttle.

**Note**

-   This parameter is required if you set **Throttling Mode** to **Throttle by Keyword**.
    
-   If you set multiple keywords, the throttling rule is triggered only if an SQL statement contains **all** of the keywords. Separate multiple keywords with tildes (~). The order of keywords does not matter.
    
    For example, the original statement is `SELECT min(id), max(id) FROM task_event WHERE gmt_modified < '2020-06-21' AND begin_time > '2020-07-09' AND source IN (527) AND id >= 15673 AND id <= 8015673` .
    
    The corresponding throttling keywords are `SELECT~min~id~max~id~FROM~task_event~WHERE~gmt_modified~AND~begin_time~AND~source~IN~AND~id~AND~id` .
    
-   You cannot set only SELECT, INSERT, UPDATE, or DELETE as throttling keywords. Keywords are case-sensitive, but some earlier instance versions are not case-sensitive.
    

**SQL Template ID:**

The ID of the SQL template to throttle. An ID is an 8-character hexadecimal string. Separate multiple SQL template IDs with commas (`,`).

**Note**

This parameter is required if the instance is PolarDB-X Enterprise Edition and you set **Throttling Mode** to **Throttle by SQL Template**.

**Minimum SQL Execution Duration:**

The threshold for the SQL running time. When the running time of an SQL statement exceeds the threshold, the system adds the ID of the SQL template to which the SQL statement belongs to the throttling rule.

**Note**

This parameter is required if the instance is PolarDB-X Enterprise Edition and you set **Throttling Mode** to **Throttle by Execution Duration**.

**Maximum Throttled SQL IDs:**

The maximum number of SQL template IDs that can be throttled based on running time. After this limit is reached, the system no longer creates throttling rules for other SQL statements whose running time exceeds the threshold.

**Note**

This parameter is required if the instance is PolarDB-X Enterprise Edition and you set **Throttling Mode** to **Throttle by Execution Duration**.

**Database Account with Throttled Queries:**

The database account to which the throttled SQL statement belongs.

**Note**

This parameter is required if you set **Throttling Mode** to **Throttle by Keyword** or **Throttle by SQL Template**.

9.  Click **Submit** to create the rule.
    
    After the SQL throttling rule is created, you can view information about the rule on the **Running** tab. The following table describes the parameters.
    
    **Note**
    
    The parameters vary slightly based on the database engine and throttling mode.
    
    **Parameter**
    
    **Description**
    
    **Throttling Mode**
    
    The mode that you selected.
    
    **Throttling Rule**
    
    -   **Throttle by Keyword**: The configuration of the throttling keywords.
        
    -   **Throttle by SQL Template**: The template ID that corresponds to the throttled sample.
        
    -   **Throttle by Execution Duration**: The configured running time threshold and the number of SQL statements throttled by template.
        
    
    **Maximum Concurrency**
    
    The maximum number of concurrent SQL statements.
    
    **Maximum Waiting Queries**
    
    The maximum number of waiting statements configured in the throttling rule.
    
    **Note**
    
    This parameter is displayed if the database instance is ApsaraDB RDS for PostgreSQL and **Throttling Mode** to **Throttle by SQL Template**.
    
    **Throttling Duration (min)**
    
    The effective period of the SQL throttling rule.
    
    **Start Time**
    
    The time when the throttling rule was configured to take effect.
    
    **Remaining Time (s)**
    
    The remaining time before the throttling rule expires.
    
    **Sample SQL**
    
    The configuration of the throttled SQL sample.
    
    **Note**
    
    This parameter is displayed if you set **Throttling Mode** to **Throttle by SQL Template**.
    
    **Throttling Template ID**
    
    The template ID that corresponds to the throttled SQL sample.
    
    **Note**
    
    This parameter is displayed if you set **Throttling Mode** to **Throttle by SQL Template**.
    
    **Status**
    
    A running rule has the Enabled status.
    
    **Database**
    
    The database where SQL statements are throttled.
    
    **Note**
    
    This parameter is displayed if you set **Throttling Mode** to **Throttle by SQL Template**.
    
    **Search Path**
    
    The search path that corresponds to the throttled SQL statement.
    
    **Note**
    
    This parameter is displayed if the database instance is ApsaraDB RDS for PostgreSQL and **Throttling Mode** to **Throttle by SQL Template**.
    
    **Matched SQL Query**
    
    The number of SQL statements that are matched by the throttling rule.
    
    **Note**
    
    This parameter is displayed if you set **Throttling Mode** to **Throttle by SQL Template**.
    
    **Waiting SQL Query**
    
    The number of SQL statements that are waiting under the throttling rule.
    
    **Note**
    
    This parameter is displayed if you set **Throttling Mode** to **Throttle by SQL Template**.
    
    ****Actions****
    
    The buttons to **Disable** or **Modify** the throttling rule.
    

## References

-   [Automatic SQL throttling](/help/en/das/user-guide/configure-automatic-sql-throttling#task-1915564).
    
-   [Concurrency control for PolarDB for MySQL](/help/en/polardb/polardb-for-mysql/user-guide/concurrency-control).
    
-   [Concurrency control for ApsaraDB RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/sql-throttling).
    

## Related API operations

**API**

**Description**

[EnableSqlConcurrencyControl](/help/en/das/developer-reference/api-das-2020-01-16-enablesqlconcurrencycontrol)

Enables SQL throttling.

[DisableSqlConcurrencyControl](/help/en/das/developer-reference/api-das-2020-01-16-disablesqlconcurrencycontrol)

Disables a specified throttling rule.

[DisableAllSqlConcurrencyControlRules](/help/en/das/developer-reference/api-das-2020-01-16-disableallsqlconcurrencycontrolrules)

Disables all running throttling rules.

[GetRunningSqlConcurrencyControlRules](/help/en/das/developer-reference/api-das-2020-01-16-getrunningsqlconcurrencycontrolrules)

Gets the running throttling rules.

[GetSqlConcurrencyControlRulesHistory](/help/en/das/developer-reference/api-das-2020-01-16-getsqlconcurrencycontrolruleshistory)

Gets the throttling rules that are running or have been triggered.

[GetSqlConcurrencyControlKeywordsFromSqlText](/help/en/das/developer-reference/api-das-2020-01-16-getsqlconcurrencycontrolkeywordsfromsqltext)

Generates throttling keywords from an SQL statement.
