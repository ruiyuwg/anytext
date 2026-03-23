This topic describes how to collect RDS SQL audit logs in the Simple Log Service console.

## Prerequisites

-   An ApsaraDB RDS instance is created. If an ApsaraDB RDS for MySQL instance is created, the SQL Explorer feature of a paid edition is enabled for the instance. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb) and [Use the SQL Explorer feature on an ApsaraDB RDS for MySQL instance](/help/en/rds/use-sql-explorer-features-on-apsaradb-rds-for-mysql-instances#task-msp-gz1-mfb).
    
-   A Simple Log Service project and Logstore are created in the region where the ApsaraDB RDS instance resides. For more information, see [Create a project and a Logstore](/help/en/sls/getting-started#section-2l7-ol2-zro).
    

## Procedure

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  Click **Import Data**, then click ****ApsaraDB** RDS SQL Audit - Cloud Service**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3585701171/p775478.png)
    
3.  In the **Select Logstore** step, select the project and Logstore that you created, and click **Next**.
    
4.  In the **Specify Data Source** step, complete RAM authorization, enable the data shipping feature, and then click **Next**.
    
    **Important**
    
    -   If you have not authorized Simple Log Service to ship logs, click **Authorize** next to **RAM**, and complete the authorization as prompted. After the authorization is completed, the `AliyunLogArchiveRole` is created. Then, Simple Log Service assumes this RAM role to collect logs.
        
    -   The destination ApsaraDB RDS instance may not appear on the prompted page or the data shipping feature may fail to be enabled. This issue occurs when your ApsaraDB RDS instance does not meet the required conditions. For more information about how to check whether your ApsaraDB RDS instance meets the required conditions, see the Prerequisites section.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3218732271/p775489.png)
    
5.  In the **Query and Analysis Configurations** step, click **Next**.
    
    By default, the indexing feature is enabled for the Logstore where RDS SQL audit logs are stored, and indexes are configured for the audit logs. For information about how to modify indexes, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).
    

## What to do next

-   If you want to monitor and manage SQL statements that are executed on an ApsaraDB RDS for MySQL instance, you can use the SQL Explorer and Audit feature to record and track the execution of SQL statements. For information about how to enable and disable the SQL Explorer and Audit feature in the ApsaraDB RDS console, see [Use the SQL Explorer and Audit feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-sql-explorer-and-audit-feature-on-an-apsaradb-rds-for-mysql-instance#prereq-2dy-1vo-lk1).
    
-   Simple Log Service provides the CloudLens for RDS application. You can use CloudLens for RDS to check the collection status of SQL audit logs, error logs, and slow query logs for ApsaraDB RDS instances in real time and manage collection configurations in a centralized manner. You can also audit and analyze collected logs and configure alert rules for the logs. For more information, see [CloudLens for RDS](/help/en/sls/cloudlens-for-rds-usage-notes/).
    
-   After RDS SQL audit logs are collected to Simple Log Service, you can query, analyze, download, ship, and transform the logs. You can also configure alert rules for the logs. For more information, see [Common operations on logs of Alibaba Cloud services](/help/en/sls/common-operations-on-logs-of-alibaba-cloud-services#concept-2534704).
