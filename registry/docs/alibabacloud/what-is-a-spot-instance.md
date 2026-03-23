Spot instances, formerly known as spot instances, are unused Elastic Compute Service (ECS) capacity and have the same performance as ECS instances of other pricing models. The prices of spot instances vary based on the supply and demand and can go as low as 10% of the prices of pay-as-you-go instances that have the same configurations. Spot Instances can be created and used when the resource inventory is sufficient, and be interrupted and reclaimed when the resource inventory is insufficient.

## Supported scenarios

Spot instances provide cost-effective computing resources for short-term tasks and highly fault-tolerant applications. If you are flexible about when your applications run and if your applications can be interrupted, spot instances are a cost-effective choice. Spot Instances are suitable for business that runs in a stateless manner and is highly tolerant to faults and interruptions, such as:

-   Real-time analytics
    
-   Big data
    
-   Geological surveys
    
-   Image and media coding
    
-   Scientific computing
    
-   Scalable websites and web crawlers
    
-   Testing
    
-   Other stateless business
    

**Important**

Spot Instances are not suitable for stateful, long-running, or high-stability business, such as database services or continuous operations.

## Instance lifecycle

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4337962771/CAEQTxiBgMDR1uut0xkiIDAzZmI3Mjk1ODE2MzRhMTM4ZWJiYjY1Y2QyZjFkZTFi3961195_20230829194402.066.svg)

To create a spot instance, you must **place a bid** for an instance type. If the **bid price is higher than or equal to the market price of the instance type and the resource inventory of the instance type is sufficient**, the spot instance is created. If you set the **Instance Usage Duration** parameter, which specifies a protection period, to a value other than None when you create the spot instance, the created instance enters the specified protection period during which you can reliably use the instance. After the protection period ends, the interruption and reclamation of the spot instance are triggered if the **market price exceeds your bid price or the resource inventory of the corresponding instance type is insufficient**. Five minutes after the interruption and reclamation are triggered, the instance is released.

**Note**

**Bid price**: The bid price is set by the **Highest Price per Instance** parameter when you create a spot instance. It represents the maximum amount you are willing to pay for a specific instance type, rather than the actual price charged for the instance.

Valid values of the Highest Price per Instance parameter:

-   **Use Automatic Bid**: The market price is automatically used as the bid price for a spot instance of a specific instance type to ensure that the bid price is always equal to the market price and the instance is never interrupted or reclaimed due to fluctuations in the market price. However, the spot instance is still likely to be interrupted and reclaimed if the resource inventory is insufficient.
    
-   **Set Maximum Price**: You can specify a maximum price that you are willing to pay for a spot instance of a specific instance type. A higher bid price increases your chances of retaining a spot instance. If the bid price is lower than the market price or the resource inventory is insufficient, the spot instance is interrupted and reclaimed.
    

**Instance Usage Duration**

-   **1 Hour**: If you set the Instance Usage Duration parameter to 1 Hour when you create a spot instance, the instance enters a 1-hour protection period upon creation. During the protection period, the instance is exempt from the check mechanism and is not interrupted or reclaimed.
    
-   **None**: If you set the Instance Usage Duration parameter to None when you create a spot instance, the instance does not have a protection period. The spot instance is subject to the check mechanism and may be interrupted and reclaimed at any time.
    

## **Characteristics of spot instances**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4337962771/CAEQTxiBgIC1tIKu0xkiIDQ1YTdjZDI0NmZkYTQ5N2M4ZGNlYjlhMWYyNmRhNTU44936797_20250219101557.318.svg)

### **Interruption and reclamation**

Spot instances may be inevitably interrupted and reclaimed. You can configure the **Instance Usage Duration** and **Highest Price per Instance** parameters based on your business scenarios to balance instance costs and uptime. You can also configure the **Instance Interruption Mode** parameter to specify how to handle spot instances after the interruption and reclamation of the instances are triggered.

**Instance Interruption Mode**

-   **Release**: If you set the Instance Interruption Mode parameter to Release for a spot instance, the instance and the following resources are released when the interruption and reclamation of the instance are triggered: computing resources (vCPUs, GPUs, and memory), static public IP address (public IP address that is automatically assigned to the instance), public bandwidth, and cloud disks (system disk and data disks).
    
-   **Stop in Economical Mode**: If you set the Instance Interruption Mode parameter to Stop in Economical Mode for a spot instance, the instance is stopped in economical mode when the interruption and reclamation of the instance are triggered. After a spot instance is stopped in economical mode, the computing resources (vCPUs, GPUs, and memory), static public IP address, and public bandwidth associated with the static public IP address of the instance are reclaimed and no longer billed. The billing for other resources of the spot instance continues, such as the cloud disks (system disk and data disks), elastic IP addresses (if any), and snapshots. A spot instance that is stopped in **economical** mode may fail to be restarted due to insufficient resource inventory or fluctuations in the market price.
    

**Note**

You cannot modify the **Instance Interruption Mode** parameter for a spot instance after the instance is created.

#### **Suggestions for handling the interruption and reclamation of Spot Instances**

-   **Retain data**. When you purchase a spot instance, set the **Instance Interruption Mode** parameter to **Stop in Economical Mode** or disable the **Release with Instance** attribute for the cloud disks (system disk and data disks) attached to the instance. This way, the data of the spot instance is retained when the instance is interrupted and reclaimed. For more information, see [Retain and restore data](/help/en/ecs/user-guide/preemptible-instance-data-retention-and-data-recovery-after-interrupt-reclamation).
    
-   **Detect and respond to spot instance interruption events**. You can use CloudMonitor to subscribe to spot instance interruption events, or call API operations to query information of spot instances, such as instance status, to detect the interruption events that occur on the instances. For more information, see [Detect and respond to spot instance interruption events](/help/en/ecs/user-guide/query-the-interruption-events-of-preemptible-instances#task-2512140).
    

### **Fluctuations in market prices**

**Market price**: the market price of the instance type, which does not include the prices of other resources, such as disks and public bandwidth.

**Note**

In the following example, a pay-as-you-go instance and a spot instance of the ecs.hfg5.8xlarge instance type that reside in the China (Hangzhou) region are used. The prices are only for reference.

-   The market prices of spot instances fluctuate based on the supply and demand.
    
-   The market prices of spot instances of the same instance type in the same region may differ if the instances reside in different zones.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2085437371/p899118.png)

### **Savings of up to 90% off pay-as-you-go pricing**

**Note**

In the following example, a pay-as-you-go instance and a spot instance of the ecs.hfg5.8xlarge instance type that reside in the China (Hangzhou) region are used. The prices are only for reference.

-   Spot instances cost significantly less than pay-as-you-go instances. The prices of spot instances can go as low as 10% of pay-as-you-go prices and cannot exceed the pay-as-you-go prices.
    
-   A spot instance that does not have a protection period is more cost-effective than a spot instance that has **a 1-hour protection period**, even after the initial hour of operation.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4337962771/CAEQUxiBgID_8peN5RkiIGM4YmYzNWI4MjJhMDQwYzY5NTU2NDFiM2Q5MTcwMjIx4019410_20230926115004.368.svg)

## **Create a spot instance**

You can create a spot instance in the ECS console, by calling an API operation, or by using Terraform. For more information, see [Create a spot instance](/help/en/ecs/user-guide/create-a-spot-instance).

## Limits

-   Whether you can use spot instances is determined based on your ECS usage. If you cannot use spot instances, the Spot Instance option is unavailable when you create ECS instances.
    
-   Spot instances cannot be converted to pay-as-you-go or subscription instances.
    
-   The instance types of spot instances cannot be changed.
    
-   Spot instances do not support Internet Content Provider (ICP) filing.
    

## **Billing**

**Billing rules**: For information about the billing of spot instances, see [Spot Instance](/help/en/ecs/spot-instance).

**Bills**: For information about how to view the bills for spot instances, see the [View billing details](/help/en/ecs/view-billing-details#section-h5i-gdu-dnm) section of the "View billing details" topic.

## **Use with other Alibaba Cloud services**

To optimize resource management, we recommend that you use spot instances with other Alibaba Cloud services: Auto Scaling, Auto Provisioning, and Container Service for Kubernetes (ACK).

-   **Auto Scaling**: Auto Scaling is a service that automatically changes the number of ECS instances to adjust the computing power based on business requirements and policies. For more information, see [Use spot instances to reduce costs](/help/en/auto-scaling/use-cases/cost-reduction-by-using-preemptible-instances).
    
-   **Auto Provisioning**: Auto Provisioning allows you to quickly deliver ECS instance clusters. You need to only perform simple configurations to automate the delivery of instances that use different billing methods (pay-as-you-go and spot instances) across instance types and zones. This improves the efficiency of batch delivering a large number of instances. For more information, see [Configure an auto provisioning group](/help/en/ecs/user-guide/configure-an-auto-provisioning-group).
    
-   **ACK**: ACK provides high-performance containerized application management services to allow enterprises to manage the lifecycle of containerized applications and efficiently deploy containerized applications in the cloud. For more information, see the following topics:
    
    -   [Run jobs on a spot elastic container instance](/help/en/ack/serverless-kubernetes/use-cases/run-jobs-on-a-preemptible-instance-1)
        
    -   [Best practices for spot instance-based node pools](/help/en/doc-detail/410889.html)
        
    -   [Best practices for spot instance node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-preemptible-instance-based-node-pools)
        

## FAQ

To obtain answers to frequently asked questions about spot instances, see [Instance FAQ](/help/en/ecs/user-guide/instance-faq/#section-8ws-4pm-9cc).
