You can restart the secondary database of an ApsaraDB RDS for SQL Server instance on Cluster Edition to resolve issues such as exhausted connections or poor performance.

## **Prerequisites**

The primary ApsaraDB RDS for SQL Server instance must meet the following requirements. Confirm this information on the **Basic Information** page.

-   Instance version: 2017 Enterprise Cluster Edition, 2019 Enterprise Cluster Edition, 2022 Enterprise Cluster Edition, or 2025 Enterprise Cluster Edition
    
-   Instance edition: Cluster Edition
    
-   Instance storage class: enterprise SSD (ESSD)
    
-   Billing method: subscription or pay-as-you-go. [Serverless instances](/help/en/rds/apsaradb-rds-for-sql-server/serverless/) are not supported.
    
-   Instance status: Running
    

## **Impacts**

-   Restarting the secondary database impacts the secondary node and read-only request processing. Perform this operation during off-peak hours. Specific impacts are as follows:
    
    -   **If** [read/write splitting](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-read-or-write-splitting-endpoint-for-an-apsaradb-rds-for-sql-server-instance) **is not enabled for the instance:** The system directly restarts the secondary database after the restart operation begins. The secondary database experiences a transient disconnection during the restart (the primary database is unaffected).
        
    -   **If a unified read-only endpoint is enabled for the instance:** All read-only requests are forwarded to the primary database for processing during the secondary database restart. This prevents interruptions to read-only requests, but it adds extra traffic pressure to the primary database.
        
    -   **If a secondary node read-only endpoint is enabled for the instance:** The secondary instance's read-only endpoint becomes unavailable during the secondary database restart, causing interruptions to read-only requests.
        
-   After you start the restart process, the instance status changes to **Restarting**. During this time, management operations are blocked, but connections to the primary database are not affected.
    

## **Procedure**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the upper-right corner of the page, click **Restart Secondary Instance**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1831680961/p695207.png)
    
3.  In the confirmation message that appears, click **OK**.
    
4.  In the dialog box that appears, complete the text message or Multi-Factor Authentication (MFA) authentication.
    

## **Related API operations**

**API**

**Description**

[RestartDBInstance](/help/en/rds/developer-reference/api-rds-2014-08-15-restartdbinstance)

Restarts a secondary database.

## **FAQ**

Will the endpoints and IP addresses of the primary and secondary instances change after the secondary database is restarted?

No. The restart operation does not involve network changes, and the endpoints and IP addresses remain unchanged.

What are the main phases of a secondary database restart? What factors affect the restart duration? How can I reduce the restart duration?

A secondary database restart consists of two main phases:

-   Stopping the secondary database: The duration of this phase depends on factors such as the host, the overall performance of the instance, and the state of dirty pages in memory.
    
-   Starting the secondary database: The duration of this phase depends on factors such as the host, the overall performance of the instance, and the size of the logs that need to be recovered. The size of the recovery logs is usually related to the state of dirty pages in memory when the database was stopped and whether any long-running transactions exist. The duration is also related to the `recovery interval` parameter. Use the default value. To modify this parameter, see [Configure the recovery interval](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-recovery-interval-server-configuration-option?spm=a2c4g.95656.0.0.6a7325b5J4pq9b&view=sql-server-ver16).
    

You can reduce the restart duration by minimizing long-running transactions or adjusting the `recovery interval` parameter.
