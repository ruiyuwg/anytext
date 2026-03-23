PolarDB-X supports the SQL audit and analysis features. Log entries on PolarDB-X databases are collected and sent to Log Service for processing and analysis. This topic describes conditions that are used to query results of log analysis and provides examples to show how to use the conditions.

## Prerequisites

The SQL audit and analysis features are enabled for your PolarDB-X instance. For more information, see [Enable SQL audit and analysis](/help/en/polardb/polardb-for-xscale/enable-sql-audit-and-analysis#task-1955180).

## Precautions

-   The audit logs of PolarDB-X databases that are deployed in the same region are stored in the same Logstore in Log Service. By default, the `__topic__` field is used as a condition in the search box on the SQL audit and analysis page. When you query log entries and results of log analysis based on this condition, all log entries that are returned are collected based on PolarDB-X databases that are deployed in the same region. You can specify the conditions that are described in this topic after the `__topic__` field to perform more fine-grained queries.
    
-   On the **Raw Logs** tab, you can click the value of a field to specify the field as a condition.
    
    For example, you can click the `Delete` value of the `sql_type` field to specify a condition to query all `DELETE` statements.
    

## Query specified SQL statements

You can specify the following types of conditions to query SQL statements.

-   Use a keyword as a condition
    
    For example, you can specify the following condition to query SQL statements that contain the `200003` keyword.
    
    ```
    and sql: 200003
    ```
    
-   Use a built-in field as a condition
    
    You can specify built-in index fields to query SQL statements that contain the specified fields. For example, you can specify the following condition to query all DROP statements.
    
    ```
    and sql_type:Drop
    ```
    
-   Use multiple conditions
    
    You can specify multiple conditions and specify the relationships among the conditions as `AND` or `OR`. For example, you can specify the following conditions to query DELETE statements that were executed on the `200003` row.
    
    ```
    and sql: 200003 and sql_type: Delete
    ```
    
-   Use numeric comparison expressions as conditions
    
    In this example, the values of the `affect_rows` and `response_time` fields are numeric values and support comparison operators. For example, you can add the following conditions to query DROP statements for which the value of the `response_time` parameter is larger than 5. The unit is second.
    
    ```
    and response_time > 5 and sql_type: Drop
    ```
    
    You can also specify the following conditions to query SQL statements that were executed to delete more than 100 rows of data.
    
    ```
    and affect_rows  > 100 and sql_type: Delete
    ```
    

## SQL execution analysis

You can execute the following statements to query the execution status of SQL statements.

-   Query the ratio of failed SQL queries
    
    You can execute the following statement to query the ratio of failed SQL queries.
    
    ```
    | SELECT sum(case when fail = 1 then 1 else 0 end) * 1.0 / count(1) as fail_ratio
    ```
    
    **Note**
    
    You can click **Save as Alert** in the upper-right corner of the page and create alert rules based on your business requirements.
    
-   Query the total number of rows on which specified SQL statements were executed
    
    You can execute the following statement to query the total number of rows on which SELECT statements were executed.
    
    ```
    and sql_type: Select | SELECT sum(affect_rows)
    ```
    
-   Query the distribution of different types of SQL queries
    
    You can execute the following statement to query the distribution of different types of SQL queries.
    
    ```
    | SELECT  sql_type, count(sql) as times GROUP BY sql_type
    ```
    
-   Query the distribution of IP addresses that were used by a user
    
    You can execute the following statement to query the distribution of IP addresses that were used by a user to send requests.
    
    ```
    | SELECT  user, client_ip, count(sql) as times GROUP BY user, client_ip
    ```
    

## Performance analysis

You can execute the following statements to query the results of SQL performance analysis.

-   Query the average execution duration of SELECT statements
    
    You can execute the following statement to query the average period of time that the system took to execute a SELECT statement.
    
    ```
    and sql_type: Select | SELECT avg(response_time)
    ```
    
-   Query the distribution of SQL statements by execution duration
    
    You can specify the following condition to query the distribution of SQL statements by execution duration.
    
    ```
    and response_time > 0 | select   case  when response_time <= 10 then '<=10ms'  when response_time > 10 and response_time <= 100 then '10~100ms'  when response_time > 100 and response_time <= 1000 then '100ms~1s'  when response_time > 1000 and response_time <= 10000  then '1s~10s'  when response_time > 10000 and response_time <= 60000  then '10s~1min'  else '>1min' end as latency_type,  count(1) as cnt group by latency_type order by latency_type DESC
    ```
    
    **Note**
    
    In the preceding condition, four time ranges are specified by using the `response_time` field. The time ranges are less than or equal to 10 milliseconds, 10 milliseconds to 100 milliseconds (inclusive), 100 milliseconds to 1 second (inclusive), and 1 second to 10 seconds (inclusive). You can specify values for the `response_time` field to obtain more fine-grained results.
    
-   Query the top 50 slow SQL statements
    
    You can execute the following statement to query the top 50 slow SQL statements.
    
    ```
    | SELECT date_format(from_unixtime(__time__), '%m/%d %H:%i:%s') as time, user, client_ip, client_port, sql_type, affect_rows, response_time, sql ORDER BY  response_time desc LIMIT 50
    ```
    
-   Query the top 10 SQL templates that consumed the largest amounts of resources
    
    In most applications, SQL statements are dynamically generated based on templates. Values of parameters vary in different SQL statements. You can execute the following statement to query the top 10 SQL templates that consumed the largest amounts of resources:
    
    ```
    | SELECT sql_code as "Template ID", round(total_time * 1.0 /sum(total_time) over() * 100, 2) as "Execution duration ratio (%)" ,execute_times as "Number of queries", round(avg_time) as "Average execution duration",round(avg_rows) as "Average number of operated rows", CASE WHEN length(sql) > 200 THEN concat(substr(sql, 1, 200), '......') ELSE trim(lpad(sql, 200, ' ')) end as "Sample SQL" FROM (SELECT sql_code, count(1) as execute_times, sum(response_time) as total_time, avg(response_time) as avg_time, avg(affect_rows) as avg_rows, arbitrary(sql) as sql FROM log GROUP BY sql_code) ORDER BY "Execution duration ratio (%)" desc limit 10
    ```
    
    The result information includes details such as the ID of each SQL template, the ratio of the execution duration of the SQL statements that were generated based on each template to the execution duration of all SQL statements, the number of SQL statements that were generated based on each template, the average execution duration of SQL statements that were generated based on each template, the average number of rows on which SQL statements that were generated based on each template were executed, and a sample SQL statement of each template.
    
    **Note**
    
    In this example, SQL templates are sorted by the ratio of execution duration. You can sort SQL templates by the average execution duration or the number of SQL statements based on your business requirements.
    
-   Query the average execution duration of transactions
    
    In log entries about SQL statements that are executed in the same transaction, the values of the `trace_id` parameter contain the same prefix. The suffixes are in the`'-' + Serial number` format. For SQL statements that are not executed in transactions, the values of the `trace_id` parameter do not contain `'-'`. You can execute the following statement to query the SQL query performance for processing transactions.
    
    **Note**
    
    Transaction analysis is less efficient than other query operations because the system checks the prefixes of SQL statements.
    
    -   Query the average execute duration of transactions
        
        You can execute the following statement to query the average period of time that the system took to execute a transaction.
        
        ```
         | SELECT  sum(response_time) / COUNT(DISTINCT substr(trace_id, 1, strpos(trace_id, '-') - 1)) where strpos(trace_id, '-') > 0
        ```
        
    -   Query the top 10 slow transactions
        
        You can execute the following statement to query slow transactions based on execution duration.
        
        ```
        | SELECT substr(trace_id, 1, strpos(trace_id, '-') - 1) as "Transaction ID" , sum(response_time) as "Execution duration" where strpos(trace_id, '-') > 0 GROUP BY substr(trace_id, 1, strpos(trace_id, '-') - 1) ORDER BY "Execution duration" DESC LIMIT 10
        ```
        
        Then, you can execute the following statement to query the SQL statements that were executed in a slow transaction based on the transaction ID. This can help you analyze the cause of the slow transaction.
        
        ```
         and trace_id: db3226a20402000*
        ```
        
    -   Query the top 10 transactions that were performed on the largest number of rows
        
        You can execute the following statement to query the top 10 transactions that were performed on the largest number of rows.
        
        ```
        | SELECT substr(trace_id, 1, strpos(trace_id, '-') - 1) as "Transaction ID" , sum(affect_rows) as "Operated rows" where strpos(trace_id, '-') > 0 GROUP BY substr(trace_id, 1, strpos(trace_id, '-') - 1) ORDER BY "Operated rows" DESC LIMIT 10
        ```
        

## SQL security analysis

You can specify the following conditions to query results of security analysis.

-   Query the distribution of failed SQL queries by type
    
    You can specify the following condition to query the distribution of failed SQL queries by type.
    
    ```
    and fail > 0 | select sql_type, count(1) as "number of failures" group by sql_type
    ```
    
-   Query high-risk SQL statements
    
    DROP and TRUNCATE statements are high-risk SQL statements in PolarDB-X. You can specify rules that are used to identify high-risk SQL statements based on your business requirements.
    
    You can specify the following condition to query DROP or TRUNCATE statements.
    
    ```
    and sql_type: Drop OR sql_type: Truncate
    ```
    
-   Query DELETE statements that are used to delete data from a large number of rows
    
    You can specify the following condition to query SQL statements that are used to delete data from more than 100 rows.
    
    ```
    and affect_rows > 100 and sql_type: Delete | SELECT date_format(from_unixtime(__time__), '%m/%d %H:%i:%s') as time, user, client_ip, client_port, affect_rows, sql ORDER BY  affect_rows desc LIMIT 50
    ```
