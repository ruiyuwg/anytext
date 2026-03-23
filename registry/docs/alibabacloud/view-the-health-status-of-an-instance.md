The health status of an Elastic Compute Service (ECS) instance indicates the overall operational health of an instance. This includes whether the operating system is running as expected, whether the instance has network connectivity, and whether instance performance (such as CPU or disk performance) is affected. You can check the health status of an ECS instance to determine whether the instance is available. For example, you can determine whether the instance can be accessed by using SSH or Remote Desktop Protocol (RDP) based on the health status of the instance. This topic compares the health status and lifecycle status of ECS instances and describes how to view the health status of the instances in the ECS console or by calling API operations.

## Instance health status

-   You can monitor the health status of an ECS instance to detect and troubleshoot issues at the earliest opportunity.
    
    For example, if the lifecycle state of an instance is Running, the operating system of the instance may not be running as expected. The operating system of the instance is running as expected only when the health state of the instance is OK. In this case, you can access the instance by using SSH or RDP.
    
-   The health status of instances is updated every minute. You can monitor the health status of instances to identify and handle exceptions at the earliest opportunity.
    
-   To receive notifications about changes in the health status of instances, you can create **event-triggered alert rules for changes in the health status of instances**. For more information, see [Manage system event alert rules (legacy)](/help/en/cms/cloudmonitor-1-0/user-guide/create-a-system-event-triggered-alert-rule-1).
    
-   The following table compares the health status and lifecycle status of instances and describes the use scenarios of each health state and lifecycle state.
    
    **Lifecycle state (Lifecycle Status)**
    
    **Health state (HealthStatus)**
    
    **Description**
    
    **Handling method**
    
    Starting
    
    Initializing
    
    The instance is being initialized.
    
    Wait for the instance to start.
    
    Running
    
    The operating system of the instance is starting.
    
    Wait for the instance to start.
    
    Running
    
    Impaired
    
    -   The operating system of the instance is running. However, instance performance may be affected or degraded due to issues that occur on the underlying host, storage, or network.
        
    -   The operating system of the instance is running. However, the instance encounters a blue screen error or hangs due to an out of memory (OOM) error.
        
    
    -   Start or restart the instance for the operating system to run as expected.
        
    -   Report the issue to Alibaba Cloud technical support.
        
    
    Running
    
    OK
    
    The operating system of the instance is running, and the instance is not affected by external factors.
    
    No
    
    Stopping/Stopped
    
    InsufficientData
    
    The instance is being stopped or is stopped.
    
    Start the instance.
    
    Deleted
    
    NotApplicable
    
    The lifecycle state of the instance is invalid.
    
    No
    

## View the health status of ECS instances

### **View the health status of an instance in the ECS console**

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Display the **Health Status** column in the instance list.
    
    1.  In the upper-right corner of the instance list page, click the ![设置图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7563951171/p756036.png) icon.
        
    2.  In the **Instance List Settings** dialog box, click the ![添加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7563951171/p756037.png) icon to the right of **Health Status** in the **Columns Not Displayed** section and then click **Continue**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7563951171/p756048.png)
        
4.  Find the instance whose health status you want to view and view the health status of the instance in the **Health Status** column.
    
    ![实例健康状态](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7563951171/p634596.png)
    

### **View the health status of instances by using Alibaba Cloud CLI**

-   Run the following commands to call the [DescribeInstances](/help/en/ecs/api-describeinstances#doc-api-Ecs-DescribeInstances) and [DescribeInstancesFullStatus](/help/en/ecs/api-describeinstancesfullstatus#doc-api-Ecs-DescribeInstancesFullStatus) operations to query the health status of specific instances:
    
    ```
    aliyun ecs DescribeInstances --RegionId TheRegionId --output cols=InstanceId,InstanceName rows=Instances.Instance[]
    aliyun ecs DescribeInstancesFullStatus --RegionId TheRegionId --InstanceId.1 i-bp1afnc98r8k69****** --output cols=HealthStatus rows=InstanceFullStatusSet.InstanceFullStatusType[]
    ```
    
-   Run the following command to call the [DescribeInstancesFullStatus](/help/en/ecs/api-describeinstancesfullstatus#doc-api-Ecs-DescribeInstancesFullStatus) operation to query the health status of all instances in a specific region.
    
    For information about region IDs, see [Regions and zones](/help/en/ecs/user-guide/regions-and-zones).
    
    ```
    aliyun ecs DescribeInstancesFullStatus --RegionId TheRegionId --output cols=HealthStatus rows=InstanceFullStatusSet.InstanceFullStatusType[]
    ```
    

After you submit a health check request, Alibaba Cloud returns the health check result for each instance that is included in the request. In the response, HealthStatus indicates the instance health status and Status indicates the instance lifecycle status.

-   If the instance is healthy, OK is returned for HealthStatus.
    
-   If the instance is unhealthy, a different value is returned for HealthStatus.
    

For information about the differences between the health status and lifecycle status of instances and the corresponding use scenarios, see the [Instance health status](#context-9pv-4dl-fqo) section in this topic.

## References

-   [DescribeInstances](/help/en/ecs/api-describeinstances#doc-api-Ecs-DescribeInstances): queries the details of one or more ECS instances.
    
-   [DescribeInstancesFullStatus](/help/en/ecs/api-describeinstancesfullstatus#doc-api-Ecs-DescribeInstancesFullStatus): queries the full status information of one or more ECS instances, including the instance status and the status of instance system events.
