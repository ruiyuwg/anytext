You can use **CloudOps Orchestration Service** (OOS) to schedule bandwidth upgrades for Tair and Redis instances to ensure high performance and stability of applications during critical periods. The system also supports automatically reverting the bandwidth to the default configuration to avoid unnecessary costs.

## Background information

Scheduled bandwidth upgrades have the following features:

-   Scheduled triggering: You can preset specific dates and times to automatically trigger bandwidth upgrades as needed.
    
-   Automatic recovery: After the specified duration elapses, the bandwidth automatically reverts to the original value. This effectively prevents cost wastes during off-peak hours.
    
-   Cost optimization: You can use OOS to upgrade the bandwidth on demand and help enterprises to significantly reduce operational costs while maintaining service quality.
    
-   Streamlined operation: The user-friendly interface lets you complete the bandwidth upgrade settings in just a few steps.
    

The following table describes the characteristics and applicable scenarios of the three bandwidth upgrade methods supported by Tair and Redis.

**Method**

**Characteristics**

**Applicable scenarios**

Scheduled bandwidth upgrade (this solution)

Supports one-time or periodic scheduled triggering and automatic recovery.

Suitable for fixed periodic traffic fluctuations and scenarios with known or predictable service traffic patterns.

[Bandwidth elastic scaling](/help/en/redis/user-guide/enable-bandwidth-auto-scaling)

Automatically triggered and recovered based on the preset **bandwidth utilization**.

Suitable for unpredictable traffic surges and dynamic business scenarios.

[Manual bandwidth adjustment](/help/en/redis/user-guide/adjust-the-bandwidth-of-an-apsaradb-for-redis-instance)

Requires manual operation, simple and flexible, depends on human experience.

Only suitable for one-time operations, such as long-term instance bandwidth adjustment.

### **Billing**

You are charged hourly based on the amount of additional bandwidth and the duration of use. The pricing varies by region. For more information, see [Billable items](/help/en/redis/product-overview/billable-items#concept-gsb-5q5-tdb).

**Note**

You are not charged for the default bandwidth that is provided for the instance type. You are charged only for the extra bandwidth that you purchase.

## **Prerequisites**

You need to create a RAM role for OOS to access ApsaraDB for Tair (Redis OSS-compatible) service. For more information, see [Create a RAM role for OOS and grant permissions](/help/en/oos/use-cases/grant-ram-permissions-on-oos).

-   You can grant the system policy **AliyunKvstoreFullAccess** to the role. After authorization, the RAM role can manage all resources of ApsaraDB for Tair (Redis OSS-compatible).
    
-   You can also customize a least privilege policy (allowing OOS to call the DescribeInstances and EnableAdditionalBandwidth APIs of ApsaraDB for Tair (Redis OSS-compatible)) to limit the role to executing only the current task.
    
    Example of a policy attached to a RAM role:
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "kvstore:DescribeInstances",
                    "kvstore:EnableAdditionalBandwidth"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
    

## Procedure

1.  Visit the [OOS console](https://oos.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Automated Task** > **Common O&M Tasks**.
    
3.  Select **Temporary Bandwidth Upgrade** and click **Create**.
    
4.  Configure the O&M task.
    
    **Note**
    
    This topic only introduces the key steps. For other parameters, see [CloudOps Orchestration Service](/help/en/oos/product-overview/introduction-to-oos).
    
    ## Select resource type
    
    Select **ApsaraDB For Redis Instance**.
    
    ## Parameters settings
    
    1.  Select **Scheduled Task Type**.
        
        In this example, select **Executed Periodically**, specify execution at 11:00 every day, and specify the cycle start and end times.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9226772571/p985841.png)
        
    2.  Select **Additional Bandwidth** in MB/s**.**
        
        -   For standard architecture, you do not need to specify the data shard ID.
            
        -   If the instance uses cluster or read/write splitting architecture, the default value of the data shard ID is **ALL**, which means that the corresponding bandwidth is added to each shard or node. The total additional bandwidth is calculated using the formula: `**Additional Bandwidth** × Number of shards (nodes)`.
            
            If you want to increase the bandwidth for specific shards only, you can enter multiple data shard IDs separated by commas (,). At the same time, add the corresponding number of **Bandwidth Arrays** and enter the bandwidth values to be added in the order of the data shard IDs.
            
    3.  Select **Duration Of Bandwidth Upgrade** in hours.
        
        The minimum duration is 1 hour. After the duration elapses, the instance bandwidth will revert to the default configuration.
        
    4.  In **Permissions**, select the RAM role that you created in the **Prerequisites** section.
        
    
    ## Select instances
    
    Select the region where the desired instance resides and select the instance.
    
    ## Advanced options (optional)
    
    You can use the default values for the parameters on this tab.
    
    ## Execution settings (optional)
    
    You can use the default values for the parameters on this tab.
    
5.  Click **Create** and click **OK** in the dialog box.
    
    When the **Execution Status** shows **Active**, it indicates that the task will be automatically executed according to the **Timer Trigger Configure**.
    
    You can view historical execution tasks, upcoming execution tasks, and **Execution Logs** on the task details page.
    

## **Related information**

[ACS-Redis-ScheduleToUpgradeInstanceBandwidth template information](https://oos.console.alibabacloud.com/cn-hangzhou/template/public/detail/ACS-Redis-ScheduleToUpgradeInstanceBandwidth)
