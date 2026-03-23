Hologres V4.0 and later supports multi-cluster and auto scaling for virtual warehouse instances. A virtual warehouse can scale out to multiple Clusters and automatically scales the number of Clusters based on the load. This feature handles high-concurrency request scenarios and provides resource isolation within the virtual warehouse.

## **Architecture**

-   If multi-cluster is not enabled, all compute resources of a virtual warehouse belong to a single Cluster. All requests sent to this virtual warehouse share these compute resources. For more information about the virtual warehouse instance architecture when multi-cluster is not enabled, see [Virtual Warehouse Instance Architecture](/help/en/hologres/user-guide/architecture-of-virtual-warehouses).
    
-   If multi-cluster is enabled, multiple Clusters are created in a virtual warehouse. Compute resources are physically isolated between Clusters. Requests sent to the virtual warehouse are automatically load-balanced and scheduled to a Cluster by the access node FE for execution.
    
-   If you enable auto scaling in addition to the multi-cluster feature, the virtual warehouse automatically schedules elastic compute resources based on its load, which includes resource usage and queueing. It launches new Clusters during high-load periods to handle higher concurrent loads. During low-load periods, it automatically releases elastic Clusters to reduce costs.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0353913771/CAEQVBiBgIDSh6vP5hkiIDQxYjY2OWM0YzMxMDQ5ZjI5OTUwNTQ3ZjM4Njg4YTVi5796867_20251015160256.667.svg)

## **Features and scenarios**

### **Multi-cluster**

-   This feature is suitable for high-concurrency scenarios with small to medium query requests. It uses Cluster load isolation and FE load balancing to achieve a higher concurrent request capacity and automatic request grouping and isolation.
    
-   This feature is not suitable for low-concurrency scenarios with large tasks. For example, Write Virtual Warehouse 2 in the [Architecture](#e613901d29igr) diagram handles large-volume offline writes. This scenario requires more compute resources in a single Cluster, making the virtual warehouse's scale-up capability, such as manual or time-based elastic scale-up, more appropriate.
    

### **Auto scaling**

Auto scaling applies to the following scenarios:

-   High-concurrency scenarios with small to medium query requests: This is the same as the multi-cluster scenarios.
    
-   Unpredictable request peaks: If peaks are predictable, you can manage them by manually adjusting the number of Clusters or using time-based elastic scale-up.
    

## **Glossary**

For definitions of multi-cluster concepts, instances, and virtual warehouse-level compute resources, see [Resource Elasticity Overview](/help/en/hologres/user-guide/overview-of-resource-elasticity).

The following is an example of instance resource usage:

-   Instance
    
    -   Instance reserved resources: 64 CU. This includes the following:
        
        -   Allocated resources: 32 CU. These are the reserved compute resources for the init\_warehouse virtual warehouse.
            
        -   Unallocated resources: 32 CU. You can use these resources to create new virtual warehouses or increase the reserved compute resources of the init\_warehouse virtual warehouse.
            
    -   Instance elastic resources: 32 CU. These are compute resources launched by the init\_warehouse virtual warehouse using the elasticity feature.
        
-   init\_warehouse compute group:
    
    -   Number of reserved Clusters: 1.
        
    -   Single Cluster specification: 32 CU.
        
    -   Reserved resources: 32 CU (1 × 32).
        
    -   Current number of Clusters: 2. This includes 1 reserved Cluster and 1 elastic Cluster.
        
    -   Elastic resources: 32 CU. These are compute resources launched by the auto scaling feature.
        
    -   Total compute resources: 64 CU. This includes 32 CU of reserved resources and 32 CU of elastic resources.
        

## **Billing**

-   Instance reserved resources: These are compute resources used exclusively by virtual warehouse instances. You are billed for them based on the instance billing method (subscription or pay-as-you-go).
    
-   Auto scaling compute resources: These are additional compute resources launched by a virtual warehouse through auto scaling. The billing formula is: `Cost = Actual launched elastic resources (CU*hour) * Unit price of resource`. For information about the specific unit price, see [Billing overview](/help/en/hologres/product-overview/billing-overview).
    
    **Note**
    
    -   The system records the instance's current elastic resource usage every minute. Every hour, the system calculates the usage, performs unit conversion, and pushes the hourly bill. Fees are then automatically deducted from your account.
        
    -   Instance elastic resources are independent of unallocated instance resources. Even if an instance has unallocated reserved resources, auto scaling still launches additional elastic compute resources instead of using the unallocated resources.
        
    

## **Limitations**

-   Only Hologres V4.0 and later supports the multi-cluster and auto scaling features for virtual warehouses.
    
-   Only virtual warehouse instances are supported. Serverless instances or general-purpose instances are not supported.
    
-   Supported regions:
    
    -   **Multi-cluster feature:** Supported in all regions.
        
    -   **Auto scaling feature:**
        
        **Region**
        
        **Auto Scaling Support**
        
        **Description**
        
        China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen)
        
        Supported
        
        This region is in public preview. Use your Alibaba Cloud account to fill out the [form](https://page.alibabacloud.com/form/act654917472/index.htm) to apply for a trial.
        
        China (Chengdu), China (Hong Kong), Singapore, Germany (Frankfurt), US (Silicon Valley), US (Virginia), UAE (Dubai), Japan (Tokyo), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Finance Cloud China (Shanghai), Alibaba Gov Cloud China (Beijing), Finance Cloud China (Shenzhen)
        
        Not supported
        
        Cannot apply for a trial.
        

## **Notes**

-   The following permissions are required to use the multi-cluster and auto scaling features:
    
    -   You must use an Alibaba Cloud account or a Resource Access Management (RAM) user that is granted the AliyunHologresWarehouseFullAccess permission. This permission includes read-only access to the Hologres Management Console and configuration permissions for auto scaling. For more information about authorization methods, see [Grant permissions to a RAM user](/help/en/hologres/security-and-compliance/grant-permissions-on-hologres-to-ram-users).
        
    -   The account must have Superuser permissions within the instance. For more information about authorization methods, see [Grant development permissions to a RAM user for an instance](/help/en/hologres/security-and-compliance/grant-the-development-permissions-on-a-hologres-instance-to-ram-users).
        
-   Increasing or decreasing the number of Clusters in a virtual warehouse may have an impact on performance. For more information, see [Manage virtual warehouses](/help/en/hologres/user-guide/manage-virtual-warehouses).
    
-   For the same virtual warehouse, you cannot use time-based elasticity and auto scaling simultaneously.
    
-   For virtual warehouses that are configured with auto scaling, you can still perform all virtual warehouse management operations in the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance), such as scale-up/scale-down, start/stop, and delete.
    
-   Auto scaling resources are pay-as-you-go compute resources, and a successful launch is not guaranteed. For more information, see [Monitoring and alerts](#2043e0e17ferv) to configure CloudMonitor alerts for failed events.
    

## **Multi-cluster user guide**

You can enable the multi-cluster feature by modifying the 'Number of reserved Clusters' for a virtual warehouse. For more information about this operation, see [Manage virtual warehouses](/help/en/hologres/user-guide/manage-virtual-warehouses).

## **Auto scaling user guide**

You can enable the auto scaling switch for a virtual warehouse. This allows the virtual warehouse to automatically scale elastic Clusters based on its load, which includes resource usage and queueing, in addition to the reserved number of Clusters.

### **Access**

1.  Log on to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance). In the top-left corner of the top menu bar, select the desired region.
    
2.  In the navigation pane on the left, select **Instances**. Click the target **Instance ID/Name** to go to the **Instance Details** page.
    
3.  On the Instance Details page, click **Virtual Warehouse Management** in the navigation pane on the left. Then, on the right side of the page, select the **Auto-scaling** tab.
    
4.  Click **Enable Auto-scaling** to enable the auto scaling feature. Configure the **Maximum Clusters** and then click **Save** to apply the settings.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0516640671/p1013944.png)

### **Example**

After you enable auto scaling as described in the preceding section (single Cluster specification: 32 CU, reserved Clusters: 1, maximum Clusters: 4), you can follow these steps to verify the auto scaling capability. This example uses pgbench, a native PostgreSQL performance testing tool.

1.  Create test tables and write data to Hologres.
    
    ```
    CREATE TABLE tbl_1 (col1 INT, col2 INT, col3 TEXT);
    CREATE TABLE tbl_2 (col1 INT, col2 INT, col3 TEXT);
    INSERT INTO tbl_1 SELECT i, i+1, md5(random()::TEXT) FROM generate_series (0, 500000) AS i;
    INSERT INTO tbl_2 SELECT i, i+1, md5(random()::TEXT) FROM generate_series (0, 500000) AS i;
    ```
    
2.  On the stress testing server, create an SQL file named `select.sql` and add the following SQL statement:
    
    ```
    EXPLAIN ANALYZE SELECT * FROM tbl_1 LEFT JOIN tbl_2 ON tbl_1.col3 = tbl_2.col3 ORDER BY 1;
    ```
    
3.  On the stress testing server, set the password as an environment variable.
    
    ```
    export PGPASSWORD='<AccessKey_Secret>'
    ```
    
4.  Execute the following stress testing command. For more information about parameter configuration, see [Connect to Hologres and Develop](/help/en/hologres/user-guide/use-the-postgresql-client-to-connect-to-hologres#section-hi2-kbq-y5v).
    
    ```
    pgbench
    -c 30 \
    -j 30 \
    -f select.sql \
    -d <Database> \
    -U <AccessKey_ID> \
    -h <Endpoint> \
    -p <Port> \
    -T 1800
    ```
    
    The following figure shows the monitoring metrics for the compute group during the stress test:
    
    -   Cluster CPU utilization: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0516640671/p1014159.png)
        
        -   Cluster 1 sustained a high load, which triggered auto scaling (position 1) and added one Cluster.
            
        -   After stress testing, the two Clusters had a low load, which triggered auto scaling (position 2) and removed one Cluster.
            
    -   Virtual warehouse CPU utilization: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0516640671/p1014160.png)
        
        -   The automatic elastic increase of the cluster occurs when the CPU utilization of the compute group continuously exceeds 85%.
            
        -   After a Cluster was added, the overall CPU utilization of the virtual warehouse dropped to approximately 70%.
            
    

## **Monitoring and alerts**

### **Monitoring metrics**

In the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance), you can view the following monitoring metrics. If necessary, you can configure corresponding alert rules for these metrics. For more information, see [Monitoring Metrics in Hologres Console](/help/en/hologres/user-guide/hologres-metrics).

-   Cluster CPU utilization
    
-   Cluster memory usage
    
-   Number of cores launched by virtual warehouse auto scaling
    

### **Elastic event execution logs**

1.  Go to the **Virtual Warehouse Management** page. Click the **Elastic Event Execution Logs** tab.
    
2.  Select the time range for auto scaling to view the details of past elastic events. The details include the running time, virtual warehouse, execution status, event type, number of reserved Clusters, and target number of Clusters.
    

### **CloudMonitor events**

Events in which Hologres auto scaling performs horizontal scaling of Clusters are recorded in CloudMonitor.

1.  Go to the [CloudMonitor Event Center](https://cloudmonitor.console.alibabacloud.com/system-events?spm=a2c4g.11186623.0.0.68355314usVnxk). On the **System Events** page, select Hologres as the product in the **Event Monitoring** area. You can then monitor auto scaling Upgrade/Downgrade events. These events include the following:
    
    -   `Instance:Warehouse:AutoElastic:Start`: Indicates the start event for virtual warehouse auto scaling.
        
    -   `Instance:Warehouse:AutoElastic:Finish`: Indicates the completion event for virtual warehouse auto scaling.
        
    -   `Instance:Warehouse:AutoElastic:Failed`: Indicates the failure event for virtual warehouse auto scaling.
        
2.  Based on CloudMonitor events, you can configure further operations, such as notifications and alerts. For more information, see [Use System Event Alerts](/help/en/cms/cloudmonitor-1-0/user-guide/create-a-system-event-triggered-alert-rule).
    

The following example shows the details of a CloudMonitor event for a failed auto scaling event in which a Cluster could not be added:

```
{
    "status": "Failed",
    "instanceName": "<instance_id>",
    "resourceId": "<instance_resource_id>",
    "content": {
        "AutoElasticCPU": <cpu_num>,
        "ScaleType": "ScaleOut",
        "ScheduleId": "xxxxxx",
        "WarehouseId": "<warehouse_id>",
        "WarehouseName": "<warehouse_name>" 
    },
    "product": "hologres",
    "time": 1722852008000,
    "level": "WARN",
    "regionId": "<region>",
    "id": "<event_id>",
    "groupId": "0",
    "name": "Instance:Warehouse:TimedElastic:Failed"
}
```

### **ActionTrail**

Operations performed in the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance), such as editing auto scaling configurations, and actual Cluster scaling operations performed by auto scaling are recorded in ActionTrail. For more information, see [Event Audit Logs](/help/en/hologres/security-and-compliance/query-event-logs).
