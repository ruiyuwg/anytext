This topic describes the reasons why a primary/secondary switchover is triggered for an ApsaraDB RDS for PostgreSQL instance.

A primary/secondary switchover is triggered due to one of the following reasons:

-   Vulnerabilities
    
    Alibaba Cloud detects vulnerabilities in the RDS instance. If vulnerabilities are detected, the RDS instance may fail to run as normal. In this case, the system fixes the vulnerabilities in the secondary RDS instance of the RDS instance. Then, the system initiates a primary/secondary switchover during the specified maintenance window to switch your workloads over to the secondary RDS instance. For more information, see [Set the maintenance window of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/set-the-maintenance-window-of-an-apsaradb-rds-for-postgresql-instance). In most cases, if a high-risk vulnerability is detected in an RDS instance, the system fixes the high-risk vulnerability at the earliest opportunity and triggers a primary/secondary switchover.
    
-   Manual operations
    
    You or an authorized Alibaba Cloud technical expert manually trigger a primary/secondary switchover.
    
-   Instance failures
    
    Alibaba Cloud detects failures in the RDS instance. If failures are detected, the RDS instance may fail to run as normal. In this case, the system initiates a primary/secondary switchover to switch your workloads over to the secondary RDS instance of the RDS instance. This minimizes the impacts of the failures.
    

After a primary/secondary switchover is complete, the status of the RDS instance changes to **Running**. You do not need to perform other operations, and the RDS instance can run as normal. If you want to view the primary/secondary switchover logs, you can log on to the ApsaraDB RDS console, go to the **Service Availability** page of the RDS instance, and then view the logs in the **Primary/Secondary Switching Logs** section.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8423735961/p717947.png)
