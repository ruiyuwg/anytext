Log Service provides multiple log collection methods. This topic describes how to use Log Service to collect logs of an ApsaraDB RDS for MySQL instance and centrally manage the collected logs. This topic also describes the fields in the logs.

## Log collection methods

Simple Log Service can collect SQL audit logs from ApsaraDB RDS instances by using one of the following methods:

**Note**

If SQL audit logs are collected by using Method 1 or Method 3, you can apply the collection configurations that you create for one method to the other method. If SQL audit logs are collected by using Method 2, you cannot use the collection configurations that you create for Method 1 or Method 3. You must separately create collection configurations.

-   Method 1: CloudLens for RDS
    
    -   To collect SQL audit logs by using Method 1, log on to the Simple Log Service console. In the **Log Application** section, click **CloudLens for RDS**.
        
    -   If you want to collect SQL audit logs from ApsaraDB RDS instances that belong to the same Alibaba Cloud account, we recommend that you use this method.
        
-   Method 2: [Log Audit Service](/help/en/sls/overview-of-log-audit-service#concept-2485064)
    
    -   To collect SQL audit logs by using Method 2, log on to the Simple Log Service console. In the **Log Application** section, click **Log Audit Service**.
        
    -   If you want to collect SQL audit logs from ApsaraDB RDS instances across Alibaba Cloud accounts or regions, we recommend that you use this method.
        
-   Method 3: [Import Data - RDS SQL Audit](/help/en/sls/rds-sql-execution-logs-usage-notes/#concept-263516)
    
    -   To collect SQL audit logs by using Method 3, log on to the Simple Log Service console. In the **Import Data** section, click **RDS SQL Audit - Cloud Products**.
        
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

Collect SQL audit logs from ApsaraDB RDS instances across regions

Not supported

Supported

Not supported

Collect SQL audit logs from ApsaraDB RDS instances across Alibaba Cloud accounts

Not supported

Supported

Not supported

Automatic collection

Supported

Supported

Not supported

Manual collection

Supported

Not supported

Supported

View collection status in dashboards

Supported

Not supported

Not supported

## Fields in logs

For more information, see [ApsaraDB RDS](/help/en/sls/apsaradb-rds#concept-2078455).
