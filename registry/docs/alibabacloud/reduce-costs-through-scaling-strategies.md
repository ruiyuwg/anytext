If you configure a multi-zone scaling policy when you create a scaling group, Auto Scaling can schedule resources from other zones to the zone where resources are insufficient or faults occur. This ensures your business continuity. In addition, you can specify multiple instance types when you create a scaling configuration. This proactive measure safeguards against scale-out failures caused by insufficient inventory of individual instance types. This topic describes how to combine a cost optimization policy with the selection of multiple instance types to collectively boost the effectiveness of scale-outs and ensure efficient use of resources.

## Prerequisites

-   A virtual private cloud (VPC) is created. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575).
    
-   Multiple vSwitches are created in the VPC. The vSwitches belong to different zones. For more information, see [Create and manage vSwitches](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
    

## Background information

Spot instances are subject to the market price. Failed bidding may cause delayed scale-outs, which in turn affects the normal running of your business. In this case, you can configure a scaling policy such as a cost optimization policy. When spot instances fail to be created, Auto Scaling automatically creates pay-as-you-go instances of the same instance types as the spot instances. In addition, multiple instance types can effectively prevent scale-out failures caused by insufficient inventory of individual instance types. Therefore, a scaling policy, combined with multiple instance types, markedly amplifies the effectiveness of scale-outs and fosters substantial savings on resource expenses.

-   **Scaling policy**
    
    When you create a scaling group in the Auto Scaling console, you can specify multiple vSwitches for the scaling group. If the zone of one of the specified vSwitches has insufficient resources, Auto Scaling automatically creates instances in another specified zone to ensure the success of scale-outs. After you specify multiple zones for a scaling group, you can configure a scaling policy such as a cost optimization policy based on the deployment of your business in the specified zones to adeptly accommodate a variety of distinct business objectives. In a scaling group for which you configured a cost optimization policy, Auto Scaling preferentially creates instances at the lowest vCPU price. If you specified spot instance types, Auto Scaling preferentially creates spot instances. If no spot instance types are available, Auto Scaling creates pay-as-you-go instances of the same instance type at a comparatively lower price.
    
    **Note**
    
    -   A multi-zone scaling policy can be a priority policy, a balanced distribution policy, a cost optimization policy, or a custom combination policy. For more information, see [Manage scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups).
        
    -   You can configure a multi-zone scaling policy for only scaling groups that reside in VPCs.
        
    
-   **Multiple instance types**
    
    Auto Scaling allows you to specify multiple instance types in a scaling configuration. In this case, if Auto Scaling fails to create instances by using the instance type of the highest priority, Auto Scaling automatically creates instances by using the instance type of the next highest priority. Utilizing a variety of instance types efficiently mitigates the risk of resource unavailability, ensuring the seamless fulfillment of all scaling objectives. For example, at times of peak demand, rapidly creating instances of high specifications becomes imperative for coping with surging business traffic. In these critical moments, the focus intensely centers on maintaining optimal performance levels. The limitation of relying on a single instance type could hinder achieving these goals. Incorporating multiple instance types, however, introduces a greater degree of versatility, enabling you to adapt swiftly and effectively to ensure uninterrupted service excellence.
    

## Procedure

1.  Create a scaling group of the Elastic Compute Service (ECS) type.
    
    For more information, see [Manage scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups#concept-25882-zh).
    
    The following table describes the parameters that are used in this example.
    
    **Parameter**
    
    **Description**
    
    **Network Type**
    
    The network type of the scaling group. Select **VPC**.
    
    **VPC**
    
    The VPC of the scaling group. Select an existing VPC, such as `vpc-bp1idd****`.
    
    **vSwitch**
    
    The vSwitches of the scaling group. Select multiple vSwitches such as `vsw1` and `vsw2`.
    
    **Note**
    
    Each vSwitch is inherently affiliated with a unique zone. When you specify multiple vSwitches from different zones for a scaling group, the ECS instances in the scaling group are consequently dispersed across these zones. This approach empowers Auto Scaling to efficiently leverage the collective resource capacity of these zones.
    
    **Scaling Policy**
    
    The multi-zone scaling policy of the scaling group. Select **Cost Optimization Policy**.
    
2.  Create and enable a scaling configuration.
    
    For more information, see [Create a scaling configuration of the ECS type](/help/en/auto-scaling/user-guide/create-scaling-configurations-of-the-ecs-type/#concept-25890-zh).
    
    The following table describes the parameters that are used in this example.
    
    **Parameter**
    
    **Description**
    
    **Billing Method**
    
    Select **Spot Instance**.
    
    **Instance Configuration Mode**
    
    Valid values: **Specify Instance Type** and **Specify Instance Pattern**. In this example, select **Specify Instance Type**.
    
    **Select Instance Type**
    
    Select multiple instance types. You can select up to 10 instance types.
    
    -   We recommend that you select instance types that closely match each other in terms of vCPU, memory, processor frequency, internal bandwidth, or packet forwarding rate.
        
    -   We recommend that you set a maximum bid for each instance type to gain control over costs. When automatic bidding takes effect, Auto Scaling procures and launches spot instances at the prevailing market price.
        
    -   I/O optimized instances have significantly different configurations compared to their non-I/O optimized counterparts. Mixing these two distinct instance types in the same scaling configuration does not guarantee a substantial increase in the success rate of scale-outs.
        
    
3.  Enable the scaling group.
    
4.  Create a scaling rule.
    
    For information about how to create a scaling rule, see the [Configure scaling rules](/help/en/auto-scaling/user-guide/manage-scaling-rules#concept-nyt-kpw-rfb).
    
    The following table describes the parameters that are used in this example.
    
    **Parameter**
    
    **Description**
    
    **Rule Type**
    
    Select **Simple Scaling Rule**.
    
    **Operation**
    
    Set the value to **Add 1 Instances**.
    
5.  Execute the scaling rule.
    

## Verify the result

By implementing a well-designed scaling policy alongside the selection of multiple instance types, you can achieve substantial savings on your resource expenditure. The following section describes the impact and benefits of utilizing a cost optimization policy.

### **Example**

-   In this example, the vSwitches that belong to Hangzhou Zone J and Hangzhou Zone K are specified for a scaling group.
    
-   The ecs.g8y.xlarge and ecs.g8i.xlarge instance types are specified in the scaling configuration of the scaling group.
    
-   The billing method of the scaling configuration is **Spot Instance**.
    
-   Each instance type has two unit prices: the unit price of vCPUs for spot instances and the unit price of vCPUs for pay-as-you-go instances.
    
    **Important**
    
    The prices listed in the following table are used for reference only. The prices that are displayed on the instance buy page take precedence.
    
    ![Dingtalk_20240201161230.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7801459071/p765923.jpg)
    
    In the following table, ① specifies the market price of spot instances and ② specifies the market price of pay-as-you-go instances.
    
    The following table outlines four distinct instance provisioning solutions derived from varying instance types and billing methods. These solutions are meticulously ordered in ascending order concerning the individual cost per vCPU.
    
    **No.**
    
    **Instance type**
    
    **Billing method**
    
    **vCPU**
    
    **Market price**
    
    **Individual cost per vCPU**
    
    Solution1
    
    ecs.g8y.xlarge
    
    Spot Instance
    
    4
    
    0.22 USD per hour
    
    0.055 USD per hour
    
    Solution2
    
    ecs.g8i.xlarge
    
    Spot Instance
    
    4
    
    0.336 USD per hour
    
    0.084 USD per hour
    
    Solution3
    
    ecs.g8y.xlarge
    
    Pay-as-you-go
    
    4
    
    0.8 USD per hour
    
    0.2 USD per hour
    
    Solution4
    
    ecs.g8i.xlarge
    
    Pay-as-you-go
    
    4
    
    1.099 USD per hour
    
    0.275 USD per hour
    

### **Effect**

-   **Expected result**: When a scale-out is triggered in the scaling group, Auto Scaling preferentially creates spot ECS instances based on Solution 1. If the instance creation fails in Hangzhou Zone K and Hangzhou Zone J, Auto Scaling attempts to create ECS instances based on Solution 2, Solution 3, and Solution 4 in sequence.
    
-   **Result verification**: To verify the result, execute a scale-out rule to add one ECS instance to the scaling group. On the **Instances** tab of the Auto Scaling console, click the ID of the added ECS instance to go to the ECS console. On the **Instance Details** tab, view the billing method and instance type.
    
    -   Billing Method: **Pay-as-you-go-Spot Instance**
        
    -   Instance Type: **ecs.g8y.xlarge**
        
    
    ![实例列表.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6801459071/p766083.jpg)The result precisely aligns with expectations. Auto Scaling seamlessly creates an ECS instance by following Solution 1. This demonstration confirms the effectiveness of combining a cost-optimization policy with the selection of multiple instance types for efficiently minimizing resource costs.
