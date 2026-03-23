After you create a scaling group, you can apply an appropriate scaling policy to enhance resource utilization and cut costs. For additional savings, consider adding spot Elastic Compute Service (ECS) instances to the scaling group. This topic describes how to use Spot Instances within your scaling group to significantly reduce cluster costs.

**Important**

Only scaling groups of the ECS type can contain spot instances.

## **What is a spot instance?**

Spot instances are on-demand instances offering the same performance as regular ECS instances, but at a lower cost. Their prices fluctuate based on market supply and demand, potentially saving up to 90% compared to pay-as-you-go instances. Spot instances provide the following features:

-   **Same performance**: Spot instances and pay-as-you-go instances that use the same specifications offer identical performance, differing only in the billing method.
    
-   **Bidding mechanism**: When creating spot instances, you can place a bid. Alibaba Cloud adjusts the market price based on supply and demand. If your bid is lower than the market price, the spot instances may be reclaimed. You can also enable **automatic bidding**, which enables the system to automatically adjust bids based on the market price, with the bid cap set at the price of pay-as-you-go instances.
    
-   **Real-time bidding**: Instance prices fluctuate in real time based on market supply and demand. If your bid exceeds the market price and resources are available, you can create spot instances.
    
-   **Interruption and Reclamation**: Spot instances can be interrupted and reclaimed if your bid is lower than the market price or if resources are insufficient.
    
-   **Protection period**: You can set a one-hour protection period for a spot instance. During this period, the instance is protected from being reclaimed by the system due to market price changes or insufficient inventory.
    

> For more information about spot instances, see [Overview](/help/en/ecs/user-guide/what-is-a-spot-instance).

**Summary**: Spot instances in a scaling group offer cost savings with lower unit rates. However, this comes at the cost of stability, as spot instances may not always be available or created as expected.

## **Balancing cost and stability with spot instances**

Spot instances offer cost savings for instance clusters in a scaling group. However, their instability requires careful consideration of potential impacts on cluster stability. Cluster stability can be assessed from the following aspects:

-   **Scale-out stability**: As the workload increases, new instances must be launched promptly and reliably to meet scale-out requirements.
    
    Using spot instances may cause delays in instance creation due to market price fluctuations or insufficient inventory, impacting scale-out stability. However, you can configure mechanisms to enhance scale-out stability.
    
-   **Instance stability**: Instances should run stably without unexpected interruptions.
    
    However, spot instances may be automatically reclaimed due to market price fluctuations or insufficient resource inventory. This requires your applications to be fault-tolerant, enabling them to handle interruptions gracefully and fail over to other available resources.
    

After you evaluate the potential cost savings and impacts on cluster stability, the next step is to strike a balance that minimizes costs while ensuring service reliability and performance.

### **Design a solution that optimizes cost savings while maintaining cluster stability**

The following ideas can help you design a solution that balances cost effectiveness with service stability:

-   **Set a reasonable bid strategy**: To enhance the chances of securing spot instances and minimize interruptions, set a bid slightly higher than the market price but lower than the pay-as-you-go price.
    
-   **Use multiple instance types**: Adjust the ratio of spot instances to pay-as-you-go instances in your scaling group based on your business requirements to balance cost-effectiveness and cluster stability.
    
    > For example, you can set the ratio of pay-as-you-go instances to the minimum required for stable business running, and use spot instances to handle workload spikes and reduce costs.
    
    The following figure illustrates how the stability and cost of a scaling group change with varying ratios of spot instances to pay-as-you-go instances. As the proportion of spot instances increases, costs decrease, but cluster stability also declines.
    
    ![使用抢占式实例降低成本](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3027719471/p882456.jpg)
    

### **Improve cluster stability**

In addition to designing a solution that strikes a balance between cost-effectiveness and cluster stability, the following methods can further optimize your business:

-   #### **Combine multiple instance types to enhance the scale-out success rate**
    
    You can configure multiple instance types for a scaling group. This expands the available inventory of spot instances and improves the scale-out success rate.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6410382671/CAEQOhiBgICowe.csxkiIGJjZDIwMzU0NzQxZTQxNjQ5ZDkwNzQ1YmVjOTAxNGYy4793300_20241203200937.944.svg)

-   #### **Combine multiple vSwitches to enhance the scale-out success rate**
    
    You can configure multiple vSwitches across different zones for a scaling group, expanding the inventory of spot instances and enabling them to span the zones, thereby increasing the scale-out success rate.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6410382671/CAEQTxiBgICuxLrD0xkiIGJkZDcwNzFiZWIxYTQ2Y2JiYzdiNjI2MTdkZWQyZjQ54793300_20241203200937.944.svg)

-   #### **Prevent performance gaps from failed scale-out of spot instances and ensure stable performance**
    
    You can use pay-as-you-go instances to supplement spot capacity. This feature allows the system to automatically create pay-as-you-go instances when spot instance inventory is insufficient, preventing performance gaps.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6410382671/CAEQQBiBgMDS3aaMuhkiIGVmYmFmNGU4MzUwNzQ1NzhhMzNmNDA3YWYzN2NjNGIx4793300_20241203204010.262.svg)

-   **Use spot instances again once inventory is restored to save costs.**
    
    You can enable the **Replace Pay-as-you-go Instance with Spot Instance** feature to automatically swap pay-as-you-go instances in the scaling group with spot ones once spot inventory is restored.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6410382671/CAEQQBiBgMDg6KeMuhkiIDVhMzgxZTVmMTA0NjRhNzVhZWYyZjQxZTBiOWQ3ZDc34793300_20241203204010.262.svg)

-   #### **Prevent abrupt service exceptions caused by spot instances being reclaimed to ensure stable performance**
    
    Enabling the spot instance compensation feature ensures that a new instance is launched 5 minutes before the old one is reclaimed, reducing performance disruptions.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6410382671/CAEQQBiBgIC7yamMuhkiIDFlM2I3NzFjYzBiZjQxMTE4MzhkZDhiMWRhOWJlOWE34793300_20241204110623.594.svg)

## **Example: Use spot instances to reduce costs in an existing scaling group**

To add spot instances to an existing scaling group, perform the following steps:

### **Step 1: Configure vSwitches across multiple zones for the scaling group**

Configuring vSwitches across multiple zones combines the resource inventories of the zones, increasing the availability of spot instances for the scaling group.

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the top navigation bar, select the region where Auto Scaling is activated.
    
3.  In the left-side navigation pane, click **Scaling Groups**.
    
4.  Find the scaling group for which you want to configure vSwitches across multiple zones and click the group ID to go to the group details page.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2422394371/p881942.png)

5.  On the **Basic Information** tab, find the **VPC** section and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2422394371/p881650.png) icon to go to the **Edit VPC** dialog box.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2422394371/p881953.png)

6.  Configure multiple vSwitches and click **OK**.
    
    **Note**
    
    If no vSwitches are available in the current VPC, you can create vSwitches in the Virtual Private Cloud (VPC) console. For more information, see [Create and manage a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#section-ts9-t3s-8vw).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2422394371/p881653.png)

### **Step 2: Configure the cost optimization policy for the scaling group**

1.  On the **Basic Information** tab, find the **Instance Scaling Configuration** section and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2422394371/p881650.png) icon to go to the **Edit Instance Scaling Configuration** dialog box.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2422394371/p882034.png)

2.  Set the Scaling Policy parameter to **Cost Optimization Policy** and configure other parameters based on your business requirements. Parameter description:
    
    -   **Minimum Pay-as-you-go Instances**
        
        The minimum number of pay-as-you-go ECS instances required in the scaling group. Default value: 0. If the number of pay-as-you-go ECS instances in the scaling group is less than the value of this parameter, Auto Scaling will create pay-as-you-go ECS instances.
        
    -   **Percentage of Pay-as-you-go Instances**
        
        The proportion of pay-as-you-go ECS instances compared to all automatically created ECS instances. Default value: 70 %. Make sure to exclude the minimum number of pay-as-you-go ECS instances specified by the Minimum Pay-as-you-go Instances parameter when you calculate the percentage.
        
    -   **Lowest Cost Instance Types**
        
        The number of the lowest-priced instance types. Default value: 1. This parameter takes effect only if you specify multiple instance types in the scaling configuration. Auto Scaling evenly creates spot ECS instances of the lowest-priced instance types.
        
    -   **Enable Supplemental Spot Instances**
        
        If you enable this feature, Auto Scaling will create spot ECS instances 5 minutes before the existing ones are reclaimed.
        
    -   **Use Pay-as-you-go Instances to Supplement Spot Capacity**
        
        If spot instances cannot be created due to factors such as cost-related issues and insufficient resources, Auto Scaling will create pay-as-you-go ECS instances to meet the required number of spot instances.
        
    -   **Replace Pay-as-you-go Instance with Spot Instance**
        
        Enabling the **Use Pay-as-you-go Instances to Supplement Spot Capacity** feature may cause the percentage of pay-as-you-go ECS instances in the scaling group to exceed the specified value for the Percentage of Pay-as-you-go Instances parameter. If you also enable the **Replace Pay-as-you-go Instance with Spot Instance** feature, Auto Scaling will replace the excess pay-as-you-go instances with spot instances once they become available.
        

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8948421571/p882027.png)

3.  After the configuration is complete, click **OK**.
    

### **Step 3: Modify the scaling configuration**

**Note**

This topic descirbes only how to modify the existing scaling configuration. You can also [create a scaling configuration](/help/en/auto-scaling/user-guide/create-an-ecs-scaling-group) based on your business requirements.

1.  Choose **Instance Configuration Sources** > **Scaling Configurations**, find the effective scaling configuration, and then click **Edit** to go to the **Modify Scaling Configuration** page.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2422394371/p882051.png)

2.  On the **Modify Scaling Configuration** page, change the value of the **Billing Method** parameter to **Spot Instance**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2422394371/p882106.png)

3.  Change the value of the **Instance Configuration Mode** parameter to **Specify Instance Type**.
    

4.  Configure an instance protection period and a bidding mode.
    
    -   **Usage Duration**
        
        > Specifies the protection period of spot instances. During the specified protection period, the system does not interrupt or reclaim spot instances. Valid values:
        
        -   **1 Hour**: Spot instances have a protection period of 1 hour. Once a spot instance is created, it will not be interrupted or reclaimed by the system for 1 hour. After this protection period ends, the system will monitor resource inventory and bidding price changes every 5 minutes to determine if the spot instance should be reclaimed.
            
        -   **None**: Spot instances have no protection period. spot instances without a protection period are more cost-effective than those with a protection period.
            
    -   **Max Unit Price of Instance**
        
        > Specifies the bidding mode of spot instances. Valid values:
        
        -   **Enable Automatic Bid**: Auto Scaling will place bids on spot instances based on the varying market price. The maximum bid for these instances is set to the unit price of pay-as-you-go instances with identical specifications.
            
        -   **Max. Price Per Instance**: Spot instances will be automatically released if the market price exceeds the bid price, or if there is a change in supply and demand. Make sure to back up the data on spot instances before they are released.
            
            You can use this bidding method to control the maximum price for spot instances.
            

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2422394371/p882144.png)

5.  Select multiple instance types from the **Select Instance Type** drop-down list to improve the scale-out success rate.
    
    **Note**
    
    If you set the **Max Unit Price of Instance** parameter to **Max. Price Per Instance**, you must configure a bid price for each instance type.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2422394371/p882149.png)

> The figure shows that the Max Unit Price of Instance parameter is set to Enable Automatic Bid.

6.  Confirm the configurations and click **Modify**.
    

### **Step 4: Trigger a scale-out operation to verify the configurations**

After the configuration is complete, you can trigger a scale-out operation to verify the creation of spot instances in the scaling group. In this example, a scale-out operation is triggered by changing the expected number of instances.

#### **Parameters**

-   **Percentage of Pay-as-you-go Instances**: Set the value to 70%.
    
-   **Minimum Pay-as-you-go Instances**: Set the value to 2.
    
-   **Expected Number of Instances**: Change the value from 0 to 12.
    

#### **Expected result**

The scaling group contains nine pay-as-you-go instances and three spot instances.

#### **Result description**

The calculation for the pay-as-you-go instance percentage applies only to the instances that exceed the minimum count. Therefore, the total number of pay-as-you-go instances is:2+(12−2)∗70%\=9.The total number of spot instances is:(12−2)∗(1−70%)\=3.

**Note**

You can view the billing method of each instance in the ECS console.
