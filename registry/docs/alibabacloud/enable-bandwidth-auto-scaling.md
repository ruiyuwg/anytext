When your business faces unexpected or planned traffic spikes, you can use the bandwidth auto scaling feature of Tair (Redis OSS-compatible). This feature continuously monitors the average bandwidth usage of an instance in real time and automatically scales the instance bandwidth based on usage. It helps you easily handle various traffic spikes, allowing you to focus on business improvement.

## Prerequisites

The instance is a Redis Community Edition or Tair (Enterprise Edition) [memory-optimized](/help/en/redis/product-overview/dram-based-instances#concept-1254543) or [persistent memory-optimized](/help/en/redis/product-overview/persistent-memory-optimized-instances-1) instance.

## **Function overview**

Because different instance types have different bandwidth limits, if traffic exceeds the bandwidth limit, blocking may occur, which affects service performance. You can enable the bandwidth auto scaling feature to avoid such situations. Compared with changing the instance type, adjusting bandwidth helps you quickly increase bandwidth, reduce overall costs, and avoid connection interruptions, allowing for immediate use.

### **Bandwidth auto scaling flow**

After you enable the bandwidth auto scaling feature, the system performs the following operations based on the auto scaling policy and observation window that you configure. The increment or decrement is calculated by the system:

-   If the bandwidth increase threshold of an instance is reached, the system increases the bandwidth and continues to monitor bandwidth usage. If the threshold is reached again, the system increases the bandwidth again. The bandwidth can be increased by up to six times the default bandwidth of the instance type, with a maximum increment of 192 MB/s.
    
    If you need a higher bandwidth, we recommend that you use Tair (Enterprise Edition). The maximum bandwidth supported by each Tair instance type is at least 96 MB/s. You can also upgrade to Tair (Enterprise Edition) and then adjust the bandwidth.
    
-   If the bandwidth decrease threshold of an instance is reached, the system decreases the bandwidth and continues to monitor bandwidth usage. If the threshold is reached again, the system decreases the bandwidth again. The bandwidth can be decreased to the default bandwidth of the instance type.
    

**Note**

The target bandwidth for each scaling operation is: `Actual bandwidth usage (MB/s)/((Increase threshold + Decrease threshold)/2)`. After each scaling operation, the system tries to maintain the **actual bandwidth usage** at a level between the increase threshold and the decrease threshold.

For example, if the default bandwidth of an instance is 96 MB/s, the **increase threshold** is set to 70%, the **decrease threshold** is set to 30%, and the **Observation Window** is set to 15 minutes, when the **Average Bandwidth Usage** is greater than or equal to 70%, the system increases the bandwidth. The target bandwidth after the increase is `((96*70%))/(((70% + 30%)/2)) = 135MB/s`. If the **Average Bandwidth Usage** is less than or equal to 30% after the increase, the system decreases the bandwidth of the instance (to a minimum of the default bandwidth of the instance type).

### **Usage notes**

-   To ensure that DAS can access the relevant resources of the database, after you enable this feature, the system grants the [AliyunServiceRoleForDAS](/help/en/das/user-guide/aliyunservicerolefordas-role#task-1930737) service-linked role to DAS.
    
-   If the instance uses the **Cloud Native** read/write splitting architecture, the system scales the bandwidth of all nodes based on the node with the highest bandwidth usage.
    
-   If the instance uses the cluster architecture or **Classic** read/write splitting architecture, the system monitors and scales the bandwidth at the granularity of data shards or read replicas. Each node is scaled independently without affecting each other.
    

### **Scenarios**

You can use this feature to adjust the bandwidth of your instance in the following scenarios.

**Click to view detailed scenarios**

**Scenarios**

**Description**

Handle traffic spikes

You can adjust the bandwidth of the instance to handle traffic spikes during promotional events such as a flash sale. After these events end, you can decrease the bandwidth of the instance to reduce costs.

Mitigate impacts on your business

If many read and write operations are performed on large keys within a short period of time, you must temporarily increase the bandwidth of the instance to mitigate impacts on your business and to reserve time for processing these operations.

Deal with request skew at low costs

If the instance uses the [cluster architecture](/help/en/redis/product-overview/cluster-master-replica-instances#concept-tds-4mm-tdb) or [read/write splitting architecture](/help/en/redis/product-overview/read-or-write-splitting-instances-1#concept-zm4-3mh-tdb), some data shards or read replicas may be accessed more frequently than others, causing their bandwidth to frequently reach the upper limit while other data shards or read replicas have low bandwidth usage.

After you enable the bandwidth auto scaling feature, the system identifies the data shards or read replicas whose allocated bandwidths are insufficient and increases the bandwidths for them. You do not need to manually increase the bandwidth or change the specifications of the instance to which these data shards or read replicas belong. This reduces costs and facilitates O&M.

### **Billing**

You are charged hourly based on the additional bandwidth and usage duration. The pricing varies by region. For more information, see [Billable items](/help/en/redis/product-overview/billable-items#concept-gsb-5q5-tdb).

**Note**

You are not charged for the default bandwidth that is provided for the instance type. You are charged only for the extra bandwidth that you purchase.

## Feature limitations

-   After the bandwidth of an instance is automatically increased, the system waits for at least 1 hour before it can automatically decrease the bandwidth. Additionally, there is a **1-minute cooling period** between two automatic bandwidth increase operations.
    
-   The bandwidth of an instance can be increased by up to six times the default bandwidth of the instance type, with a maximum increment of 192 MB/s.
    
    **Note**
    
    For example:
    
    -   The default bandwidth of a 2 GB standard Tair memory-optimized instance is 96 MB/s. The maximum bandwidth of this instance can be `96 MB/s + 192 MB/s = 288 MB/s`.
        
    -   The default bandwidth of a 256 MB standard Redis Community Edition instance is 10 MB/s. The maximum additional bandwidth for this instance type is 60 MB/s. Therefore, the maximum bandwidth of the instance is `10 MB/s + 60 MB/s = 70 MB/s`.
        
    
    If you need a higher bandwidth, you can upgrade the instance type or architecture (for example, from standard architecture to cluster architecture) to obtain higher bandwidth performance. For more information, see [Instance types](/help/en/redis/product-overview/overview-4/#concept-gph-q34-tdb).
    
-   We recommend that you do not manually adjust the instance bandwidth and enable bandwidth auto scaling for the instance at the same time.
    
    If you use both features at the same time: When the manually set bandwidth reaches the upper limit, automatic bandwidth increase is no longer triggered. As traffic decreases, automatic bandwidth decrease reduces the manually set bandwidth to the default bandwidth of the instance type.
    
    **Note**
    
    For example:
    
    -   If the default bandwidth of an instance is 10 MB/s and you manually set it to 70 MB/s, when the **increase** threshold is reached, the bandwidth is not automatically increased because it exceeds the 6× scaling limit.
        
    -   If you manually set the bandwidth of an instance of the same type to 40 MB/s, when the **increase** threshold is reached, the bandwidth can be automatically increased to a maximum of 70 MB/s. When the **decrease** threshold is reached, the bandwidth is decreased until it reaches the default bandwidth of 10 MB/s.
        
    
-   If an instance has unexpired bandwidth plans, you cannot enable bandwidth auto scaling for the instance. You must first unsubscribe from the bandwidth plans of the instance. For more information, see [Unsubscription management](/help/en/user-center/refund-management/).
    
-   If you perform one of the following operations, bandwidth auto scaling is disabled for your instance. You must re-enable this feature for the instance based on your needs:
    
    **Operation**
    
    **Exception**
    
    [Major version upgrade](/help/en/redis/user-guide/upgrade-the-major-version-1#task-ast-xh3-3gb)
    
    None
    
    [Change the configurations of an instance](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb)
    
    If the instance uses the standard architecture, the bandwidth settings remain valid after you change the specifications of the instance.
    
    [Change the zone of an instance](/help/en/redis/user-guide/migrate-an-instance-across-zones#concept-kpz-c5v-4gb)
    
    If the instance uses the standard architecture, the bandwidth settings remain valid after you migrate the instance across zones.
    

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the **Configuration Information** section, click **Modify** next to **Bandwidth**.
    
    **Note**
    
    The first time you log on to the DAS console, follow the instructions to grant permissions to your account.
    
3.  Turn on the switch to enable **Auto Bandwidth Scaling**.
    
4.  In the DAS console dialog box that appears, configure the bandwidth auto scaling policy and event subscription settings.
    
    1.  Configure the bandwidth auto scaling policy.
        
        **Category**
        
        **Parameter**
        
        **Description**
        
        **Automatic Bandwidth Upgrade**
        
        **Automatic Bandwidth Upgrade**
        
        Select the check box to enable the feature.
        
        **Average Bandwidth Usage Not Less Than**
        
        The increase threshold. Select the average bandwidth usage threshold that triggers automatic bandwidth increase. Unit: %. Valid values: 50% to 95%.
        
        **Note**
        
        -   The system uses the larger value between the inbound traffic and outbound traffic average usage as the **Average Bandwidth Usage**.
            
        -   The bandwidth of the instance can be increased by up to six times the default bandwidth of the instance type, with a maximum increment of 192 MB/s. You can also refer to the prompt information in the current dialog box.
            
        
        **Observation Window**
        
        Select the length of the observation window. Unit: minutes.
        
        **Note**
        
        If the **average usage** of bandwidth within the observation window is greater than or equal to the threshold, **automatic bandwidth increase is triggered**.
        
        **Automatic Bandwidth Downgrade**
        
        **Automatic Bandwidth Downgrade**
        
        Select the check box to enable the feature. To enable this feature, you must first enable **Automatic Bandwidth Downgrade**
        
        **Average Bandwidth Usage Not Greater Than**
        
        The decrease threshold. Select the average bandwidth usage threshold that triggers automatic bandwidth decrease. Unit: %. Valid values: 10% to 70%. The value must be at least 10% lower than the increase threshold.
        
        **Note**
        
        The system uses the larger value between the inbound traffic and outbound traffic average usage as the **Average Bandwidth Usage**.
        
5.  Click **OK**.
    
    In the Tair console, the **Bandwidth Auto Scaling** switch is turned on, indicating that the feature is enabled.
    
6.  **Optional:** Configure alerts to stay informed about automatic bandwidth increases or decreases for your database instance. You can follow the system prompts to configure alerts.
    
    **Note**
    
    -   If you have already configured an alert template for the instance, the alert configuration prompt is not displayed.
        
    -   To configure alert templates and rules yourself, see [Configure an alert template](/help/en/das/user-guide/configure-alert-templates) and [Configure alert rules](/help/en/das/user-guide/configure-alert-rules).
        
    
    **Click to view detailed steps**
    
    1.  Select the system-recommended alert template. The system adds the **Auto Scaling Event** monitoring item.
        
    2.  Select the **Alert Contact Group** that you want to receive alert notifications.
        
    3.  Click **Submit Configuration** and confirm the alert configuration in the dialog box that appears.
        
    

## **References**

To schedule an upgrade for the bandwidth of a Tair instance, see [Schedule temporary bandwidth upgrades for a Tair instance](/help/en/redis/use-cases/scheduled-upgrade-of-the-temporary-bandwidth-of-the-redis-instance).
