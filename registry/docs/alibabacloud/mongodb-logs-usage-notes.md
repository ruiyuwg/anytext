Simple Log Service and ApsaraDB for MongoDB jointly launch the log audit feature. You can use the feature to query the audit logs, slow logs, and run logs of ApsaraDB for MongoDB instances in real time and visualize the query and analysis results. You can also configure alerts for the logs. This topic describes the resources, scenarios, billing, and limits of the log audit feature.

## Assets

-   Dedicated projects and Logstores
    
    After you enable the log audit feature, Simple Log Service creates a project named nosql-Alibaba Cloud account ID-Region ID and dedicated Logstores named **mongo\_audit\_log\_standard** and mongo\_slow\_run\_log by default.
    
    -   The **mongo\_audit\_log\_standard** Logstore is a paid service, which is used to store ApsaraDB for MongoDB audit logs.
        
    -   The mongo\_slow\_run\_log Logstore is currently free, which is used to store slow query logs and operational logs of ApsaraDB for MongoDB.
        
    
    **Important**
    
    If you have enabled the pay-by-ingested-data billing mode, Simple Log Service creates a dedicated Logstore that uses the pay-by-ingested-data billing mode by default. If you want to switch the billing mode from pay-by-ingested-data to pay-by-feature, you can modify the configuration of the Logstore. For more information, see [Modify the configurations of a Logstore](/help/en/sls/manage-a-logstore#section-evc-rjx-ndb).
    
-   Dedicated dashboards
    
    **Note**
    
    Changes to dedicated dashboards may affect the usability of the dashboards. We recommend that you do not make changes to dedicated dashboards. You can create a custom dashboard to visualize log analysis results. For more information, see [Create a dashboard](/help/en/sls/create-a-dashboard#concept-osm-1nq-zdb).
    
    A dashboard is automatically generated for the mongo\_audit\_log Logstore.
    
    **Dashboard**
    
    **Description**
    
    Mongo Audit Log Center
    
    Displays audit logs of ApsaraDB for MongoDB. The log data includes the number of users, the number of clients, the average response time (RT), and the average request rate.
    

## Scenarios

ApsaraDB for MongoDB integrates the features of Log Service to provide the audit log feature that is stable, easy-to-use, flexible, and efficient. This feature can be used in scenarios described in the following table.

**Scenario**

**Description**

Operation audit

Helps you discover information such as operator identity or data modification time and identify internal risks such as the abuse of permissions and execution of invalid commands.

Security and compliance

Assists business systems in complying with the audit requirements in security compliance.

## Usage notes

-   After you enable the audit log feature for an instance, ApsaraDB for MongoDB audits and logs the write operations that are performed on the instance. The instance may experience a performance decrease of 5% to 15% and specific amount of latency and jitter. The performance decrease, latency, and jitter vary with the amount of data that is written or audited.
    
    **Note**
    
    Your application may write a large amount of data to an instance. To prevent performance from decreasing in such scenarios, we recommend that you enable the audit log feature only for troubleshooting issues or auditing the security of the instance.
    
-   By default, after the audit log feature is enabled, the selected operation types are **admin** and **slow**. For more information about how to change operation types, see [Modify operation types for audit logs](/help/en/mongodb/user-guide/modify-the-operation-type-for-audit-logs#task-2538000).
    
-   The specified log retention period for an instance is applicable to the instance and all other instances that reside within the same region as the instance. Other operations are applicable only to the current instance.
    
-   If you want to retain audit logs for a longer period of time or use larger storage space for audit logs during the free trial of this feature, you can upgrade the free trial edition to the official edition. For more information, see [Upgrade to the official edition](/help/en/mongodb/user-guide/upgrade-to-the-official-edition#task-2159129).
    

## Billing

-   You are charged for the official version of the log audit feature based on the storage usage and retention period of audit logs. The pay-as-you-go billing method is used.
    
-   After logs are sent to Simple Log Service, the fees for the log storage, indexes, and traffic of log reads and writes are included in the bills of ApsaraDB for MongoDB. For more information, visit the [ApsaraDB for MongoDB pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing?spm=a2796.136239.2294157590.1.edb463c5e6hd58) page.
    

**Important**

-   Starting January 6, 2022, the log audit feature provided by ApsaraDB for MongoDB no longer offers free trials. Only the official version of the log audit feature is available. For more information, see [\[Notice\] On official launch of the pay-as-you-go audit log feature and no more application for the free trial edition](/help/en/mongodb/product-overview/notice-official-launch-of-the-pay-as-you-go-audit-log-feature-and-end-of-application-for-the-free-trial-edition#concept-2001907).
    
-   After audit logs are collected to Simple Log Service, you cannot pull, consume, ship, or transform the audit logs.
    

## Limits

-   You can write only ApsaraDB for MongoDB logs to a dedicated Logstore. You cannot modify the indexes in a dedicated Logstore.
    
-   If you have overdue payments for your Simple Log Service resources, the log audit feature is automatically stopped. To ensure business continuity, you must settle your overdue payments within the prescribed time limit.
    
-   You can enable the log audit feature only for replica set instances of MongoDB 5.0 and earlier versions or sharded cluster instances of MongoDB 4.2 and earlier versions.
