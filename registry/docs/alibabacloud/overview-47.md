PolarDB PolarProxy provides the SQL firewall feature. This feature can identify SQL statements to be allowed and blocked after you configure blacklist and whitelist rules. This topic describes the SQL firewall feature.

**Note**

The SQL firewall feature is in a maintenance phase and no longer receives feature updates. Use the [SQL throttling](/help/en/das/user-guide/sql-throttling) feature in Database Autonomy Service (DAS) as an alternative.

## Background information

When your database is illegally accessed, attackers may obtain all data in the database. Even in routine O&M operations, if you execute a DELETE statement that does not contain `WHERE` clauses, a table in the database may be accidentally deleted.

To prevent such high-risk operations, PolarProxy provides the SQL firewall feature, which enables you to configure blacklist and whitelist rules to allow and block SQL statements. The following figure shows how the SQL firewall feature works.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5467038571/CAEQGhiBgIDSi9rq8RgiIDk4ZDNmNDBjZGY1ZDRlODU4OTE3ZjJhMjBlNzMyZjM04058852_20231030142859.689.svg)

## Prerequisites

PolarDB PolarProxy is V2.5.1 or later. For more information about how to view the current version of and upgrade PolarProxy, see [Revision version management](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version#task-2449714).

## Limits

-   After the SQL firewall feature is enabled, PolarProxy creates a database named `database:proxy_auditing` and two tables named `sql_list` and `org_sql_list` in the current cluster. The sql\_list table stores parameterized SQL statements in blacklist and whitelist rules, and the org\_sql\_list table saves SQL statements in blacklist rules. Each table can save up to 500,000 SQL statements.
    
-   The first time you create a rule, the rule is applicable only to new connections. After the rule is modified, it takes effect on existing connections after five seconds.
    
-   The SQL statements in a blacklist or whitelist rule created in custom parameterized SQL mode or custom SQL mode are not blocked when the rule is created, but are blocked after the rule is created.
    
-   For the same account and endpoint, you cannot enable both a blacklist rule and a whitelist rule.
    
-   Multi-statements are not supported. All multi-statements are blocked.
    
-   SQL statements that cannot be parsed by PolarProxy are recorded in firewall audit logs but are not blocked. For example, if a SELECT statement contains syntax errors, the statement is not be blocked.
    
-   The SQL statements in a blacklist or whitelist rule created in custom parameterized SQL mode or custom SQL mode are retained even if the blacklist or whitelist rule is disabled or deleted. If the blacklist or whitelist rule is enabled again, the rule is still applicable to the same accounts. If you want to completely delete the blacklist or whitelist rule, you can connect to the primary node in the cluster by using the super administrator account and delete the SQL statements.
    
-   Blacklist and whitelist rules can only block common SQL commands (3) or PREPARE commands (22). Other commands are not blocked. For example, after you connect to a cluster by using the MySQL command line, the USE db; statement is converted into a COM\_INIT\_DB(1) command by the MySQL command line. This command is not blocked.
    

## Impacts on performance

-   After you enable the blacklist rule feature, performance overheads of less than 10% are incurred.
    
-   If the whitelist rule feature is enabled and no alert logs are generated, performance overheads of about 10% are incurred.
    
-   If alert logs are generated for all executed SQL statements, the request rate decreases by 20% to 30% in normal business conditions. However, not all SQL statements can trigger alert logs. Only some SQL statements can trigger alert logs. Therefore, in normal business conditions, the blacklist or whitelist rule feature does not have significant impact on the request rate.
    

## Blacklist or whitelist rule feature

-   **Blacklist rule feature**: You can configure a blacklist rule to block specified types of SQL statements or specific SQL statements. When an SQL statement that is added to the blacklist rule is executed, PolarProxy blocks the SQL statement. For more information, see [Configure a blacklist rule](/help/en/polardb/polardb-for-mysql/user-guide/configure-blacklist-rules#task-2218921).
    
-   **Whitelist rule feature**: Business-related SQL statements are trained before they can be allowed by a whitelist rule. After the protection mode is enabled, only SQL statements that are added to the whitelist rule can be allowed. For more information, see [Configure a whitelist rule](/help/en/polardb/polardb-for-mysql/user-guide/configure-whitelist-rules#task-2220184).
