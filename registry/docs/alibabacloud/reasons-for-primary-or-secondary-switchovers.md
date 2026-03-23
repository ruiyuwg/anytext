In most cases, a primary/secondary switchover is triggered for an ApsaraDB RDS for MySQL instance due to vulnerability fixing, manual start, or instance failures.

A primary/secondary switchover is triggered due to one of the following reasons:

-   Vulnerability fixing
    
    Alibaba Cloud detects vulnerabilities in the RDS instance. If vulnerabilities are detected, the RDS instance may fail to run as normal. In this case, the system fixes the vulnerabilities in the secondary RDS instance. Then, the system initiates a primary/secondary switchover [during the specified maintenance window](/help/en/rds/apsaradb-rds-for-mysql/set-the-maintenance-window-of-an-apsaradb-rds-for-mysql-instance#concept-xqk-jcj-wdb) to switch your workloads over to the secondary RDS instance. If the system fixes a high-risk vulnerability, a primary/secondary switchover is immediately triggered.
    
-   Manual operations
    
    You or an authorized Alibaba Cloud technical expert manually trigger a primary/secondary switchover.
    
-   Instance failures
    
    Alibaba Cloud detects failures in the RDS instance. If failures are detected, the RDS instance may fail to run as normal. In this case, the system initiates a primary/secondary switchover to switch your workloads over to the secondary RDS instance.
    

After a primary/secondary switchover is complete, the status of the RDS instance changes to **Running**. You do not need to perform other operations, and the RDS instance can run as normal. If you want to view the primary/secondary switchover logs, you can log on to the ApsaraDB RDS console, go to the **Service Availability** page of the RDS instance, and then view the logs in the **Primary/Secondary Switching Logs** section.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4105838961/p726845.png)
