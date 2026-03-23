Simple Log Service and ApsaraDB RDS jointly launch the CloudLens for RDS application. You can use CloudLens for RDS to check the collection status of SQL audit logs, error logs, and slow query logs for ApsaraDB RDS instances in real time and manage collection configurations in a centralized manner. You can also audit and analyze collected logs and configure alerts for the logs.

## Features

CloudLens for RDS provides the following features:

-   Collection management
    
    **Important**
    
    You can collect error logs and slow query logs only from ApsaraDB RDS for MySQL and ApsaraDB RDS for PostgreSQL instances.
    
    -   Allows you to manage the collection status of SQL audit logs, slow query logs, and error logs for ApsaraDB RDS instances in a centralized manner.
        
    -   Automatically collects SQL audit logs, slow query logs, and error logs from existing ApsaraDB RDS instances and new instances.
        
    -   Allows you to manage projects and Logstores in a centralized manner.
        
-   Log audit
    
    -   Allows you to store, query, and analyze SQL audit logs of ApsaraDB RDS instances in real time.
        
    -   Provides various reports. You can subscribe to the reports and configure settings to receive the reports by email or DingTalk group message.
        
    -   Provides various built-in alert monitoring rules, supports flexible configurations for alert policies, and sends alert messages in a timely and accurate manner.
        

## Supported log types

You can use CloudLens for RDS to collect SQL audit logs, error logs, and slow query logs of ApsaraDB RDS instances. The SQL audit logs of an ApsaraDB RDS database record all operations that are performed on the database. The logs are obtained by the system based on network protocol analysis, which consumes only a small amount of CPU resources and does not affect the execution of SQL statements. The SQL audit logs record the following operations and related information:

-   Database logons and logoffs.
    
-   DDL operations: SQL statements that define a database structure. Examples: CREATE, ALTER DROP, TRUNCATE, and COMMENT.
    
-   DML operations: SQL statements that perform specific operations. Examples: SELECT, INSERT, UPDATE, and DELETE.
    
-   Other operations that are performed by executing SQL statements. Examples: rollback and control.
    
-   The execution latency, execution results, and number of affected rows of SQL statements.
    

## Assets

-   Custom projects and Logstores
    
    **Important**
    
    Do not delete the projects or Logstores that are related to ApsaraDB RDS logs. Otherwise, ApsaraDB RDS logs cannot be delivered to Simple Log Service.
    
-   Dedicated dashboards
    
    By default, Simple Log Service generates three dashboards.
    
    **Note**
    
    We recommend that you do not make changes to the dedicated dashboards because the dashboards may be upgraded or updated at any time. You can create a custom dashboard to visualize query results. For more information, see [Create a dashboard](/help/en/sls/create-a-dashboard#concept-osm-1nq-zdb).
    
    **Dashboard**
    
    **Description**
    
    RDS Operation Center
    
    Displays statistics about access to databases and active databases. The statistics include the number of databases on which the operations are performed, number of tables on which the operations are performed, and number of execution errors. The statistics also include the total number of inserted rows, total number of updated rows, total number of deleted rows, and total number of obtained rows.
    
    RDS Performance Center
    
    Displays the metrics that are related to O&M reliability. The metrics include the peak bandwidth for all SQL statements that are executed, peak bandwidth for SQL statements that query data, peak bandwidth for SQL statements that update data, and peak bandwidth for SQL statements that delete data. The metrics also include the average execution time of all SQL statements, average execution time of SQL statements that query data, average execution time of SQL statements that update data, and average execution time of SQL statements that delete data.
    
    RDS Security Center
    
    Displays the metrics that are related to database security. The metrics include the number of errors, number of logon failures, number of bulk deletion events, number of bulk modification events, and number of times that high-risk SQL statements are executed. The metrics also include the distribution of error operations by type, distribution of clients that have errors on the Internet, and clients on which the largest number of errors occur.
    

## Billing

-   If you want to enable collection for SQL audit logs when you use CloudLens for RDS, you must enable the SQL Explorer feature in ApsaraDB RDS. The fees of the SQL Explorer feature are included in your ApsaraDB RDS bills. For more information, see [Billable items](/help/en/rds/product-overview/billable-items-billing-methods-and-pricing#concept-qxr-pd2-vdb).
    
    **Note**
    
    If your ApsaraDB RDS instance runs RDS Enterprise Edition, you are not charged for the SQL Explorer feature.
    
-   After you collect the logs of ApsaraDB RDS instances to Simple Log Service, you are charged for storage, read traffic, number of requests, data transformation, and data shipping. The fees are included in your Simple Log Service bills. For more information, see [Pay-by-feature](/help/en/sls/pay-as-you-go#concept-y3m-g5n-vdb).
    

## Limits

-   Only some types of ApsaraDB RDS instances support the SQL audit feature. For more information, see [Features of ApsaraDB RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/features#concept-2350230).
    
-   The log collection feature of CloudLens for RDS depends on the SQL Explorer feature of ApsaraDB RDS.
    
    If you enable the collection of SQL audit logs for ApsaraDB RDS instances, the system automatically enables the SQL Explorer feature of the ApsaraDB RDS instances. If you already disabled the collection of SQL audit logs for ApsaraDB RDS instances and want to disable the SQL Explorer feature, you must manually disable the SQL Explorer feature in the ApsaraDB RDS console. For more information, see [Disable the SQL Explorer feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-sql-explorer-and-audit-feature-on-an-apsaradb-rds-for-mysql-instance#section-cwx-vft-jjt).
    
-   The ApsaraDB RDS instance from which you want to deliver logs to Simple Log Service must reside in the same region as the project to which you want to deliver the logs.
    
-   All regions except Local Regions are supported.
    

## Log collection methods

Simple Log Service can collect SQL audit logs from ApsaraDB RDS instances by using one of the following methods:

**Note**

If SQL audit logs are collected by using Method 1 or Method 3, you can apply the collection configurations that you create for one method to the other method. If SQL audit logs are collected by using Method 2, you cannot use the collection configurations that you create for Method 1 or Method 3. You must separately create collection configurations.

-   Method 1: CloudLens for RDS
    
    -   To collect SQL audit logs by using Method 1, log on to the Simple Log Service console. In the **Log Application** section, click the **Audit & Security** tab. Then, click **CloudLens for RDS**.
        
    -   If you want to collect SQL audit logs from ApsaraDB RDS instances that are created within the same Alibaba Cloud account as Simple Log Service, we recommend that you use this method.
        
-   Method 2: [Log Audit Service](/help/en/sls/overview-of-log-audit-service#concept-2485064)
    
    -   To collect SQL audit logs by using Method 2, log on to the Simple Log Service console. In the **Log Application** section, click the **Audit & Security** tab. Then, click **Log Audit Service**.
        
    -   If you want to collect SQL audit logs from ApsaraDB RDS instances that are created within a different Alibaba Cloud account than Simple Log Service or from ApsaraDB RDS instances that are deployed in different regions, we recommend that you use this method.
        
-   Method 3: [Import Data - RDS SQL Audit](/help/en/sls/rds-sql-execution-logs-usage-notes/#concept-263516)
    
    -   To collect SQL audit logs by using Method 3, log on to the Simple Log Service console. In the **Import Data** section, click the **Cloud Products** tab. Then, click **RDS SQL Audit - Cloud Products**.
        
    -   This method is an alternative to Method 1.
        

**Attribute**

**CloudLens for RDS**

**Log Audit Service**

**Import Data - RDS SQL Audit**

Specify an ApsaraDB RDS instance to collect logs

Supported

Supported

Supported

Specify a Logstore to store logs

Supported

Not supported

Supported

Collect logs from ApsaraDB RDS instances across regions

Not supported

Supported

Not supported

Collect logs from ApsaraDB RDS instances across Alibaba Cloud accounts

Not supported

Supported

Not supported

Automatically collect logs

Supported

Supported

Not supported

Manually collect logs

Supported

Not supported

Supported

View collection status in dashboards

Supported

Not supported

Not supported

## Precautions

**Warning**

To use a CloudLens application, make sure that at least one project exists within your Alibaba Cloud account.

When you enable a CloudLens application, Simple Log Service automatically checks whether a project exists within your Alibaba Cloud account.

### **Check logic**

1.  The first time you enable a CloudLens application, Simple Log Service automatically checks whether a project exists within your Alibaba Cloud account. If no projects exist, Simple Log Service creates a project whose name is in the `aliyun-product-data-<Alibaba Cloud account ID>-cn-heyuan` format in the China (Heyuan) region.
    
2.  After you enable a CloudLens application, Simple Log Service automatically checks whether a project exists within your Alibaba Cloud account. If no projects exist, Simple Log Service does not create a project in the China (Heyuan) region. You can manually create a project. For more information about how to create a project, see [Manage a project](/help/en/sls/manage-a-project/#entry-m7e-hhf-r4z).
    

### **Delete a project**

-   If you want to delete the project whose name is in the `aliyun-product-data-<Alibaba Cloud account ID>-cn-heyuan` format, open [Cloud Shell](https://shell.alibabacloud.com/) and run the following command. Replace the **Alibaba Cloud account ID** based on your business scenario.
    
    ```
    aliyunlog log delete_project --project_name=aliyun-product-data-<Alibaba Cloud account ID>-cn-heyuan --region-endpoint=cn-heyuan.log.aliyuncs.com
    ```
    
-   If you want to delete other projects and logstores, follow the instructions provided in [Manage a logstore](/help/en/sls/manage-a-logstore#section-ezq-vjx-ndb) and [Manage a project](/help/en/sls/manage-a-project/#entry-m7e-hhf-r4z).
