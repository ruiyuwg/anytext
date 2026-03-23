SQL Explorer and Audit records every SQL statement executed on your ApsaraDB RDS for PostgreSQL instance directly from the database kernel, capturing the execution account, source IP address, and execution details with no impact on instance performance.

Use SQL Explorer and Audit to:

-   Query and export a complete history of SQL activity for compliance audits.
    
-   Diagnose SQL health, identify slow queries, and analyze traffic patterns.
    
-   Track who executed what, when, and from where.
    

The feature has two components:

**Component**

**Purpose**

**Typical use**

**[Audit](/help/en/das/user-guide/search)**

Query and export SQL execution history, including database, status, and duration

Compliance auditing, activity tracking

**[SQL Explorer](/help/en/das/user-guide/sql-explorer)**

Diagnose SQL health, troubleshoot performance, and analyze service traffic

Performance tuning, capacity planning

## Prerequisites

Before you begin, ensure that you have:

-   A [DAS Enterprise Edition](/help/en/das/user-guide/purchase-das-professional-edition#multiTask962) subscription. Only the latest version available in your [region](/help/en/das/product-overview/editions) can be enabled
    
-   (For RAM users) The **AliyunRDSReadOnlyWithSQLLogArchiveAccess** permission to use the Audit feature. See [Use RAM to manage ApsaraDB RDS permissions](/help/en/ram/use-cases/use-ram-to-manage-apsaradb-rds-permissions)
    

> To grant a RAM user permissions for search and export only, create a custom policy. See [Grant a RAM user permissions to use the search feature of SQL Explorer and Audit](/help/en/das/support/what-do-i-do-if-i-do-not-have-permissions-to-access-das-as-a-ram-user).

## Billing

SQL Explorer and Audit is billed as part of DAS Enterprise Edition. After you enable this feature, billing for the legacy [SQL Audit (Database Audit)](/help/en/rds/use-the-sql-audit-feature-on-an-apsaradb-rds-for-postgresql-instance#concept-njf-cr4-ydb) feature stops.

For pricing details, see [Billing details](/help/en/das/product-overview/billing-details-of-the-previous-version).

## PgBouncer limitation

If PgBouncer connection pooling is enabled on your RDS instance, SQL statements routed through PgBouncer are **not** recorded by SQL Explorer and Audit.

## Audit log kernel parameter behavior

Enabling or disabling audit logs changes the `log_statement` kernel parameter:

**Action**

**`log_statement` value**

Enable audit logs

`all`

Disable audit logs

`ddl`

You can also toggle audit logs through the [ModifySqlLogConfig](/help/en/das/developer-reference/api-das-2020-01-16-modifysqllogconfig) API operation.

## Enable SQL Explorer and Audit

> Only the latest version of SQL Explorer and Audit supported by your instance can be enabled.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance, then click the instance ID.
    
2.  In the left-side navigation pane, choose **Autonomy Services** > **SQL Explorer and Audit**.
    
3.  Click **Enable Audit Logs**, select the features to enable, and click **Submit**. ![Enable SQL Explorer and Audit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1195897571/p953096.png)
    

### Verify

After enabling, the SQL Explorer and Audit page displays the **Audit** and **SQL Explorer** tabs. Run a test query on your instance and confirm that it appears in the audit log within a few minutes.

## Use SQL Explorer and Audit

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance, then click the instance ID.
    
2.  In the left-side navigation pane, choose **Autonomy Services** > **SQL Explorer and Audit**.
    
3.  Choose a tab based on your goal:
    
    -   **Audit** -- Search, filter, and export SQL execution history. See [Audit](/help/en/das/user-guide/search).
        
    -   **SQL Explorer** -- Analyze SQL performance, diagnose issues, and review traffic. See [SQL Explorer](/help/en/das/user-guide/sql-explorer).
        

## Change the data storage duration

**Warning**

Reducing the storage duration causes DAS to immediately delete all audit logs that exceed the new duration. Export your logs before reducing the storage duration.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance, then click the instance ID.
    
2.  In the left-side navigation pane, choose **Autonomy Services** > **SQL Explorer and Audit**.
    
3.  Click **Service Settings**.
    
4.  Change the storage duration and click **Submit**.
    

> SQL Explorer and Audit data is stored by DAS and does not occupy the storage space of your RDS instance.

## Disable SQL Explorer and Audit

**Warning**

Disabling this feature deletes all associated audit logs. Export and save your logs before proceeding. If you re-enable the feature later, logs are recorded only from that point forward.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance, then click the instance ID.
    
2.  In the left-side navigation pane, choose **Autonomy Services** > **SQL Explorer and Audit**.
    
3.  Click **Export**. Select the fields and time range for the export. If your service uses hot and cold tiered storage, also select a **CSV Separator**.
    
4.  After the export completes, click **Task list** and download the exported file.
    
5.  Click **Service Settings**, clear all feature checkboxes, and click **Submit**.
    

**Important**

-   About 1 hour after disabling, the system releases the storage space previously used by SQL Explorer and Audit data.
    
-   If audit log collection is enabled for your RDS instance through [CloudLens for RDS](/help/en/sls/cloudlens-for-rds) in Simple Log Service, SQL Explorer and Audit is re-enabled automatically. Disable audit log collection in CloudLens for RDS as well.
    

## FAQ

### Why don't failed SQL statements appear in the audit log?

For ApsaraDB RDS for PostgreSQL, failed SQL statements are recorded in the instance error log, not the audit log. To view failed statements, see [View logs](/help/en/rds/apsaradb-rds-for-postgresql/view-the-logs-of-an-apsaradb-rds-for-postgresql-instance).

### Why does the database name in the log list differ from the one in my SQL statement?

The log list shows the database name from the active session, while the SQL statement contains the database name you specified explicitly. In cross-database queries or dynamic SQL, these two values can differ.

### Where is the SQL Audit entry in the console?

The former **SQL Audit** entry has been renamed to **SQL Explorer and Audit**.

### Can I enable an older version of SQL Audit?

No. Only the latest version of SQL Explorer and Audit supported by your instance can be enabled. See [Product series and supported features](/help/en/das/product-overview/editions).
