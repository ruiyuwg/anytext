Hologres serverless instances are billed based on the actual computing resources and storage space consumed by your business workload. This topic describes the billing details of Hologres serverless instances.

## **Billing overview**

The billing items for Hologres serverless instances are divided into computing resources and storage resources:

-   Computing resources
    
    -   Access node with 4 vCPU cores and 16 GB of memory: Free of charge. No payment required. The instance has no holding cost.
        
    -   Serverless computing resources: All data write and query operations use serverless computing resources.
        
        -   For more information about serverless computing resource usage and billing, see [Usage monitoring and cost optimization](/help/en/hologres/user-guide/product-pricing).
            
        -   For more information about unit prices of serverless computing resources, see [Pay-as-you-go](/help/en/hologres/product-overview/pay-as-you-go).
            
-   Storage resources: Serverless instances only support standard storage (locally redundant storage). For more information about pay-as-you-go billing for standard storage (locally redundant storage), see [Pay-as-you-go](/help/en/hologres/product-overview/pay-as-you-go).
    

## Resource usage monitoring and alerting

### **Computing resources**

Hologres serverless instances only require payment for serverless computing resources. You can configure monitoring alert rules for serverless computing resource consumption. For specific operations, see [Consumption Monitoring and Alerting](/help/en/hologres/user-guide/product-pricing#94408e39ceue2).

Serverless instances do not have reserved computing resources. Therefore, they cannot automatically change to use the local computing resources of instances. As a result, when you use the daily cumulative usage limit feature in [cost monitoring and alerting](/help/en/hologres/user-guide/product-pricing#94408e39ceue2), SQL will directly report an error once the computing resource usage exceeds the limit.

## Storage resources

If you have requirements for the data storage volume, we recommend that you configure monitoring alert rules for storage resources to avoid excessive storage usage. After configuration, when the storage volume reaches the set threshold, the system will automatically clean up historical data as needed. For specific operations, see [Metrics](/help/en/hologres/user-guide/hologres-metrics#4d1efe4b4dcco).
