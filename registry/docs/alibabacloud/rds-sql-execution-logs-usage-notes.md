Simple Log Service and ApsaraDB RDS jointly launch the feature that allows you to deliver the SQL audit logs of ApsaraDB RDS databases to Simple Log Service. Simple Log Service allows you to perform various operations. For example, you can query data in real time, analyze data in visualized mode, ship data, transform data, and configure alerts. This topic describes the assets, billing, and limits of the feature.

## Supported log types

The SQL audit logs of an ApsaraDB RDS database record all operations that are performed on the database. The logs are obtained by the system based on network protocol analysis, which consumes only a small amount of CPU resources and does not affect the execution of SQL statements. The SQL audit logs record the following operations and related information:

-   Database logons and logoffs.
    
-   DDL operations: SQL statements that define a database structure. Examples: CREATE, ALTER DROP, TRUNCATE, and COMMENT.
    
-   DML operations: SQL statements that perform specific operations. Examples: SELECT, INSERT, UPDATE, and DELETE.
    
-   Other operations that are performed by executing SQL statements. Examples: rollback and control.
    
-   The execution latency, execution results, and number of affected rows of SQL statements.
    

## Assets

-   Custom project and Logstore
    
    **Important**
    
    -   Do not delete the projects or Logstores that are used for the SQL audit logs delivered from ApsaraDB RDS. Otherwise, subsequent logs cannot be delivered to Simple Log Service.
        
    -   When you create a custom Logstore, note that the billable items vary depending on the billing mode of the Logstore. For more information, see [Billable items](/help/en/sls/billing-item/#main-2351612).
        
    
-   Dedicated dashboards
    
    By default, Simple Log Service generates three dashboards for the feature.
    
    **Note**
    
    We recommend that you do not make changes to the dedicated dashboards because the dashboards may be upgraded or updated at any time. You can create a custom dashboard to visualize query results. For more information, see [Create a dashboard](/help/en/sls/create-a-dashboard#concept-osm-1nq-zdb).
    
    **Dashboard**
    
    **Description**
    
    RDS Operation Center
    
    Displays statistics about access to databases and active databases. The statistics include the number of databases on which the operations are performed, number of tables on which the operations are performed, and number of execution errors. The statistics also include the total number of inserted rows, total number of updated rows, total number of deleted rows, and total number of obtained rows.
    
    RDS Performance Center
    
    Displays the metrics that are related to O&M reliability. The metrics include the peak bandwidth for all SQL statements that are executed, peak bandwidth for SQL statements that query data, peak bandwidth for SQL statements that update data, and peak bandwidth for SQL statements that delete data. The metrics also include the average execution time of all SQL statements, average execution time of SQL statements that query data, average execution time of SQL statements that update data, and average execution time of SQL statements that delete data.
    
    RDS Security Center
    
    Displays the metrics that are related to database security. The metrics include the number of errors, number of logon failures, number of bulk deletion events, number of bulk modification events, and number of times that risky SQL statements are executed. The metrics also include the distribution of error operations by type, distribution of clients that have errors on the Internet, and clients that have the largest number of errors.
    

## Billing

-   After you enable the SQL Explorer feature for an ApsaraDB RDS for MySQL instance, you are charged for the feature on an hourly basis. The hourly fee is calculated by using the following formula: Hourly fee = Amount of audit log data per hour × Unit price.
    
    **Note**
    
    If your ApsaraDB RDS for MySQL instance runs the RDS Enterprise Edition, you can use the SQL Explorer feature free of charge.
    
-   If the billing mode of the related Logstore is pay-by-feature, you are charged based on the storage usage, read traffic, number of requests, data transformation, and data shipping after SQL audit logs are delivered to Simple Log Service. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   If the billing mode of the related Logstore is pay-by-ingested-data, you are charged based on the storage usage and read traffic over the Internet after SQL audit logs are delivered to Simple Log Service. For more information, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode#main-2351620).
    

## Limits

-   ApsaraDB RDS instances that run specific RDS editions do not support the SQL audit feature. For more information, see [MySQL 8.0](/help/en/rds/apsaradb-rds-for-mysql/features#concept-2350230).
    
-   You can deliver SQL audit logs from an Apsara RDS instance to Simple Log Service only after you enable the SQL Explorer feature for the instance.
    
-   The ApsaraDB RDS instance from which you want to deliver SQL audit logs to Simple Log Service must reside in the same region as the project to which you want to deliver the logs.
    

## CloudLens for RDS

Simple Log Service also provides the CloudLens for RDS application. You can use the application to collect SQL audit logs from ApsaraDB RDS. The application supports automatic collection and is easier to use. We recommend that you use the CloudLens for RDS application. For more information, see [CloudLens for RDS](/help/en/sls/cloudlens-for-rds-usage-notes/#concept-2089815).

You can use two methods to collect SQL audit logs: Import Data - RDS SQL Audit and CloudLens for RDS. If you use one of the methods, you can apply the collection configurations that you create for one method to the other method.

**Attribute**

**Import Data - RDS SQL Audit**

**CloudLens for RDS**

Specify an ApsaraDB RDS instance to collect logs

Supported

Supported

Specify a Logstore to store logs

Supported

Supported

Automatic collection

Not supported

Supported

Manual collection

Supported

Supported

View collection status in dashboards

Not supported

Supported
