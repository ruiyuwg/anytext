Hologres Serverless Computing charges for large SQL jobs, such as those with high CPU or memory overhead, based on the compute resources consumed and usage duration. This topic explains how to view your Serverless Computing resource consumption and billing details.

## **Billing Overview**

For each SQL job, Serverless Computing measures resource usage in CU·H, which is the actual resource amount multiplied by the usage duration. Billing is processed hourly. Each hour, the system aggregates the usage from the previous hour for all SQL jobs executed using Serverless Computing and charges you accordingly. For information about current unit pricing, see [Billing Overview](/help/en/hologres/product-overview/billing-overview).

**Important**

-   Billing for Serverless Computing began on `2024-07-01` (UTC+8). This document provides guidance on how to monitor your Serverless Computing resource consumption, estimate your bills, and adjust resource allocation to jobs to prevent unexpected costs.
    
-   For a list of supported regions and zones, see [Serverless Computing User Guide](/help/en/hologres/user-guide/serverless-computing/).
    
-   Both `hologres.hg_query_log` and `hologres.hg_serverless_computing_query_log` retain data for the past 30 days.
    

Only successfully executed SQL jobs are billed. Failed executions incur no charge.

## Query Resource Consumption

Starting with `Hologres V2.1.18`, you can query the `hologres.hg_serverless_computing_query_log` view to calculate Serverless Computing resource consumption and estimate costs using the Serverless billing formula. For details about slow query logs, see [View and Analyze Slow Query Logs](/help/en/hologres/user-guide/query-and-analyze-slow-query-logs).

**Note**

-   Prior to `Hologres V2.2.7`, slow query logs recorded all failed Serverless Computing jobs and successful jobs that ran for longer than `100` milliseconds. Starting with `Hologres V2.2.7`, logs include all Serverless Computing jobs.
    
-   Slow query logs record resource consumption for each SQL statement. During billing, the system may apply data aggregation and unit conversions, which can cause minor discrepancies.
    

### **Permission Requirements**

To estimate Serverless Computing consumption and billing from slow query logs, you need specific permissions. The following content describes the permission rules and grant methods.

-   Query the data scan volume across all databases in an instance
    
    -   Method 1: Grant the Superuser permission using the following command:
        
        ```
        -- Replace "Alibaba Cloud account ID" with the actual username.
        -- For RAM users, prepend the account ID with "p4_".
        ALTER USER "Alibaba Cloud account ID" SUPERUSER;
        ```
        
    -   Method 2: Add the user to the pg\_read\_all\_stats group using the following commands:
        
        **Note**
        
        In addition to the Superuser permission, Hologres supports the pg\_read\_all\_stats group for viewing the data scan volume across all databases. If you are a regular user who needs full log access, you must contact a Superuser for authorization and to be added to the group.
        
        ```
        GRANT pg_read_all_stats TO "Alibaba Cloud account ID";-- Standard PostgreSQL authorization model
        CALL spm_grant('pg_read_all_stats', 'Alibaba Cloud account ID');  -- SPM
        CALL slpm_grant('pg_read_all_stats', 'Alibaba Cloud account ID'); -- SLPM
        ```
        
-   View the data scan volume for the current database
    
    -   Enable the [simple permission model (SPM)](/help/en/hologres/spm) or the [schema-level simple permission model (SLPM)](/help/en/hologres/slpm), and then add the user to the db\_admin group. The db\_admin role can view the data scan volume for the current database. You can use the following commands:
        
        ```
        CALL spm_grant('<db_name>_admin', 'Alibaba Cloud account ID');  -- SPM
        CALL slpm_grant('<db_name>.admin', 'Alibaba Cloud account ID'); -- SLPM
        ```
        
    -   Regular users can query their own data scan volume within databases associated with their account.
        

**Note**

For more information about permissions, see [Permission Management Overview](/help/en/hologres/security-and-compliance/permission-management-overview#concept-2019385).

### **Query Resource Consumption for a Single SQL Statement**

You can use the following SQL command to retrieve the detailed resource consumption for Serverless Computing jobs.

```
SELECT
    *,
    queue_time_ms,	-- Time the SQL spent waiting in the Serverless Computing queue, in milliseconds (ms)
    serverless_allocated_cores,	-- Number of CUs allocated by Serverless Computing to this SQL job
    serverless_resource_used_time_ms, -- Duration the SQL actually used Serverless Computing resources, in milliseconds (ms)
    (serverless_allocated_cores::DECIMAL(38, 4)) * (serverless_resource_used_time_ms::DECIMAL(38, 4)) AS serverless_cums
FROM
    hologres.hg_serverless_computing_query_log;
```

### **Query Resource Consumption Over a Specified Time Period**

You can use the following SQL command to calculate the total resource consumption for successfully executed Serverless Computing jobs within a specific time window.

```
SELECT
    (SUM((serverless_allocated_cores::DECIMAL(38, 4)) * (serverless_resource_used_time_ms::DECIMAL(38, 4))) / 1000 / 60 / 60)::bigint AS serverless_cuh
FROM
    hologres.hg_serverless_computing_query_log
WHERE
    status = 'SUCCESS'
    AND serverless_allocated_cores IS NOT NULL
    AND serverless_resource_used_time_ms IS NOT NULL
    AND query_end BETWEEN '2024-05-01 00:00:00' AND '2024-05-31 24:00:00';-- Specify time range
```

## **Estimate Resource Consumption**

If you have not enabled Serverless Computing but want to estimate the cost of running specific SQL statements using Serverless resources, you can first execute them using your Hologres instance resources. The `hologres.hg_query_log` system table includes the `cpu_time_ms` field, which records the CPU time consumed by each SQL job. You can roughly estimate the Serverless resource consumption using the following formula: `cpu_time_ms / 1000 / 60 / 60`. You can use the following command to query `cpu_time_ms`:

```
SELECT cpu_time_ms FROM hologres.hg_query_log WHERE query_id = 'xxx';
```

**Note**

Instance resources can be affected by other workloads whereas Serverless resources are isolated. The resource capacities of the two resource types also differ. For these reasons, this method cannot provide a precise estimate of Serverless consumption. We recommend that you select key SQL jobs and test them directly with Serverless Computing as described in the [Serverless Computing User Guide](/help/en/hologres/user-guide/serverless-computing/#211672bf4114k). These tests do not affect other tasks on your instance.

## **Consumption Monitoring and Alerting**

### **Daily Usage Limit**

Starting from Hologres V3.1.5, you can limit the daily Serverless Computing usage using the following SQL commands. Only Superusers can set these limits.

```
-- Set limit for a database
ALTER DATABASE <db_name> SET hg_serverless_computing_daily_max_cuh_usage_threshold = xx;

-- Set limit for a user
ALTER USER <user_name> SET hg_serverless_computing_daily_max_cuh_usage_threshold = xx;
```

-   **Limit Details**
    
    -   The default value is -1, which indicates that no limit is set.
        
    -   The unit is CU·H.
        
    -   Hologres aggregates and updates the total Serverless Computing usage for the instance every 10 minutes. Therefore, the enforcement of the limit may lag by up to 10 minutes.
        
    -   Before executing a SQL statement, Hologres compares the current daily Serverless usage of the instance with the limit configured for the user or database. If the limit is reached, the SQL statement automatically falls back to using the compute resources of the instance. Otherwise, the SQL statement runs on Serverless resources.
        
    -   Hologres tracks the daily Serverless usage based on the default time zone of the database. You can run the following commands in the same session to check the time zone of the current database:
        
        ```
        -- Reset time zone to avoid influence from client or user settings
        RESET timezone;
        
        -- Show the database's default time zone
        SHOW timezone;
        ```
        
-   **Recommendations**
    
    -   If you regularly use Hologres Serverless Computing, you can determine an appropriate daily limit by reviewing the usage information described in [Query Resource Consumption Over a Specified Time Period](#c902db7438b19).
        
    -   If you are new to Serverless Computing, we recommend that you wait until your workload stabilizes before you set a daily usage limit.
        

To prevent queries from automatically falling back to instance resources when the limit is exceeded and instead cause the queries to fail immediately, you can run the following commands. Only Superusers can set this parameter.

```
-- Set at database level
ALTER DATABASE <db_name> SET hg_serverless_computing_enable_fallback_when_exceed_cuh_threshold = false;

-- Set at user level
ALTER USER <user_name> SET hg_serverless_computing_enable_fallback_when_exceed_cuh_threshold = false;
```

**Note**

-   The default value is \`true\`, which enables automatic fallback to instance resources when the limit is exceeded.
    
-   If you set this parameter to \`false\`, queries fail and the following error is reported: `serverless computing is not available due to exceeding cuh usage threshold, please adjust the threshold or turn off serverless computing for current query`.
    

### **Cost Analysis**

You can use the **Cost** \> **Cost Analysis** module in Expenses and Costs to monitor and analyze the billing of Hologres compute resources.

1.  Log on to [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/). In the navigation pane on the left, click **Cost** > **Cost Analysis**.
    
2.  On the Cost Analysis page, in the **Condition List** > **Classification Dimension** section on the right, select **Billing Item**. Then, select a **Cost Type** and **Time Granularity** as needed.
    
3.  In the **Filter Conditions** section on the right, select the appropriate **Billing Item** based on your resource type.
    

For more information, see [Cost Analysis](/help/en/user-center/cost-analysis/).

### **Spending Alerts**

You can use the Expenses and Costs service provided by Alibaba Cloud to manage budgets and set alerts for pay-as-you-go spending on specific products in specific regions. For more information, see [Expense Alerts](/help/en/hologres/product-overview/expense-alert).

### **Single SQL Execution Duration Alert**

Hologres supports monitoring for Serverless Computing metrics. We recommend that you create alert rules based on your business scenario to avoid unexpected charges.

For example, for the metric **Longest duration among running Serverless Computing queries**, we recommend the following alert rule:

Warning: The longest duration among running Serverless Computing queries is ≥ 3,600,000 milliseconds for 5 consecutive periods (1 period = 1 minute).

![jiankong.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1534981271/p815630.jpg)

For more information, see [Monitoring and Alerting Best Practices](/help/en/hologres/user-guide/cloudmonitor#fcc875072cdga).

## **References**

-   For an overview of Serverless Computing, see [Serverless Computing](/help/en/hologres/user-guide/serverless-computing-overview/).
    
-   For usage instructions, see [Serverless Computing User Guide](/help/en/hologres/user-guide/serverless-computing/).
