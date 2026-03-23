Auto Scaling automatically adjusts the number of computing resources (the number of instances required by business workloads) based on your predefined policies, enabling efficient handling of workload fluctuations, improving resource utilization, and reducing costs. For short-term business needs, Auto Scaling supports manual execution of scaling rules to quickly adjust the number of Elastic Compute Service (ECS) instances.

## **Scenarios**

#### **Description**

For temporary business needs, the number of servers to be added and the timing for their addition are uncertain, particularly when there are no metrics available for monitoring. In such cases, manual adjustment of the server count is necessary.

For example, if a company needs additional servers for temporary testing purposes, manual oversight is required to determine the number and timing of server adjustments.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2300094571/CAEQORiBgMDprOfCrxkiIGE0ZDkwODMzMDJjOTQ0MjJiZTAzZTQyNzQ4OTY3NWRl4402613_20240520173737.601.svg)

#### **Solutions**

You can manually execute scaling rules to increase or decrease the number of servers.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2300094571/CAEQORiBgMDl6eXCrxkiIGEwMjVkYzNkYjRjZDQ0NjNhYjE3N2YyMzRkZWI4MDRm4402613_20240521155755.629.svg)

**Important**

In addition to manually executing scaling rules, you can manually adjust the expected number of instances in a scaling group to manage the number of instances in the group. For more information, see [Expected number of instances](/help/en/auto-scaling/user-guide/expected-number-of-instances).

#### **Benefits**

-   No initial costs for resource setup
    
    Auto Scaling creates and releases ECS instances based on your business requirements, which eliminates upfront costs related to resource setup. You need to only reserve computing resources to handle your daily business traffic.
    
-   Flexible scaling
    
    By preparing the configurations for servers to be scaled out in advance, you can easily enable automatic scaling with just a few clicks. This significantly reduces resource and O&M costs.
    

## **Prerequisites**

The first time you use Auto Scaling, you must complete Resource Access Management (RAM) user authorization.

-   The AliyunServiceRoleForAutoScaling service-linked role is created. For more information, see [Service-linked role](/help/en/auto-scaling/security-and-compliance/service-linked-roles).
    
-   If you use Auto Scaling as a RAM user, the RAM user must be granted the AliyunESSFullAccess policy. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    

## Step 1: Create a scaling group

A scaling group is a collection of instances that meet your business requirements and serves as the core unit of Auto Scaling. Auto Scaling adjusts the number of instances in scaling groups by adding or removing them as needed.

1.  Go to the **Scaling Groups** page.
    
    1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, click **Scaling Groups**.
        
    3.  In the top navigation bar, select the region where Auto Scaling is activated.
        
2.  In the upper-left corner of the **Scaling Groups** page, click **Create**.
    
3.  On the **Create by Form** tab, configure the scaling group and click **Create**.
    
    The following table describes the parameter settings used in this topic. Parameters that are not covered in the following table default to their default settings. For information about how to create a scaling group, see [Create scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups#section-l2v-k5s-gnr).
    
    **Parameter**
    
    **Example**
    
    **Description**
    
    **Scaling Group Name**
    
    test
    
    Enter a name for the scaling group. The name must meet the format requirements displayed on the UI.
    
    **Type**
    
    ECS
    
    Select **ECS**, which specifies that the scaling group contains ECS instances.
    
    **Instance Configuration Source**
    
    Create from Scratch
    
    Do not specify the template for automatically creating ECS instances at this stage. After the scaling group is created, you can proceed to create a scaling configuration.
    
    **Minimum Number of Instances**
    
    1
    
    Specify the minimum number of instances in the scaling group. If the number of instances in the scaling group falls below this value, Auto Scaling will add ECS instances until the desired minimum is reached.
    
    **Maximum Number of Instances**
    
    5
    
    Specify the maximum number of instances in the scaling group. If the number of instances exceeds this value, Auto Scaling will remove ECS instances until the number of instances falls below the specified limit.
    
    **VPC**
    
    vpc-bp1jmxxau0lur929p\*\*\*\*
    
    Select a VPC for the ECS instances in the scaling group.
    
    **vSwitch**
    
    vsw-2zeknnyw2ewufbs4z\*\*\*\*
    
    vsw-2zesy03h8eaf9fe0l\*\*\*\*
    
    Select one or more vSwitches for the ECS instances in the scaling group. We recommend that you select multiple vSwitches to improve the success rate of scale-out events.
    

## Step 2: Create a scaling configuration and enable the scaling configuration and scaling group

A scaling configuration is a template used to create ECS instances during scale-out events. It includes information such as the billing method, instance type, storage, and network settings. After you create a scaling configuration, you can enable the scaling configuration and then enable the scaling group.

1.  Find the desired scaling group and use one of the following methods to open the scaling group details page.
    
    -   Click the ID of the scaling group in the **Scaling Group Name/ID** column.
        
    -   Click **Details** in the **Actions** column.
        
2.  In the upper part of the details page, click the **Instance Configuration Sources** tab.
    
3.  On the **Scaling Configurations** tab, click **Create Scaling Configuration**.
    
4.  On the **Create Scaling Configuration** page, configure parameters to create a scaling configuration and then click **Create**.
    
    The following table describes the parameter settings used in this topic. Parameters not covered in the following table default to their default settings. For more information about how to create a scaling configuration, see [Create a scaling configuration of the ECS type](/help/en/auto-scaling/user-guide/create-scaling-configurations-of-the-ecs-type/).
    
    **Section**
    
    **Parameter**
    
    **Example**
    
    **Description**
    
    **Basic Information**
    
    **Scaling Configuration Name**
    
    test
    
    Enter a name for the scaling configuration. The name must meet the format requirements displayed on the UI.
    
    **Billing Method**
    
    Set the value to Pay-as-you-go.
    
    Auto Scaling is free. However, charges apply for ECS instances created during scale-out events. In this example, the pay-as-you-go billing method is used. For more information, see [Billing overview](/help/en/ecs/billing-overview#concept-isb-scd-5db) of ECS.
    
    **Image and Instance**
    
    **Instance Configuration Mode**
    
    Specify Instance Pattern
    
    Select **Specify Instance Pattern** to choose specifications for ECS instances.
    
    **Instance Attribute Combination**
    
    2 vCPUs, 4 GiB Memory, Enterprise Level
    
    Select the appropriate number of vCPUs and memory size for ECS instances based on your business requirements.
    
    **Select Image**
    
    Public Image: Alibaba Cloud Linux 3.2104 LTS 64-bit
    
    Select an image to deploy ECS instances. This example uses a public image. In real-world scenarios, you can choose a custom image specific to your application.
    
    **Storage**
    
    **System Disk**
    
    Enterprise SSD (ESSD), 40 GiB, PL0
    
    Select a system disk for ECS instances.
    
    **Network and Security Group**
    
    **Public IP Address**
    
    **Assign Public IPv4 Address**, **Pay-by-bandwidth**, and 1 Mbit/s bandwidth
    
    Specify whether to assign public IP addresses to ECS instances. Outbound public bandwidth is charged separately, and the fees are included in your ECS instance costs.
    
    **Security Group**
    
    sg-bp18kz60mefsicfg\*\*\*\*
    
    Select an existing security group. For information about how to create a security group, see [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1#concept-ocl-bvz-xdb).
    
    **Management Settings**
    
    **Logon Credentials**
    
    Set Later
    
    Select **Set Later**, which requires you to manually configure passwords for ECS instances after you create the instances.
    
5.  In the **Preview Scaling Configuration** dialog box, confirm the information and click **Create**.
    
6.  In the **The scaling configuration is created.** message, click **Enable**.
    
7.  In the **Enable Scaling Configuration** dialog box, click **OK**.
    
    **Note**
    
    In a scaling group, you must enable one scaling configuration. After you enable a scaling configuration, the scaling configuration enters the **Active** state.
    
8.  In the **Enable Scaling Group** message, click **OK**.
    
    The scaling group must be enabled to allow Auto Scaling to scale instances automatically based on your business requirements.
    
    In this example, the **Minimum Number of Instances** parameter is set to 1. When you enable the scaling group, Auto Scaling automatically creates one ECS instance from the enabled scaling configuration. You can go to the **Instances** tab of the scaling group details page and check the instance information on the **Auto Created** tab.
    
    ![手动1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0003559171/p800791.png)
    

## Step 3: Create scaling rules

A scaling rule defines the specific action to be taken during a scaling event, such as how many instances to add or remove.

1.  On the details page of the scaling group, click the **Scaling Rules and Event-triggered Tasks** tab. Then, click the **Scaling Rules** tab.
    
2.  Click **Create Scaling Rule**, configure parameters to create the scaling rule, and then click **OK**.
    
    In this example, simple scaling rules are created. For more information about how to create a scaling rule, see [Configure scaling rules](/help/en/auto-scaling/user-guide/manage-scaling-rules).
    
    **Parameter**
    
    **Description**
    
    **Rule Name**
    
    Enter a name for the scaling rule. The name must meet the format requirements displayed on the UI.
    
    **Rule Type**
    
    Specify the type of the scaling rule. In this example, select Simple Scaling Rule. For more information about scaling rules, see [Overview](/help/en/auto-scaling/user-guide/overview-2).
    
    **Operation**
    
    Specify the number of instances to add or remove when the scaling rule is executed. The number of instances added or removed during each scaling event must not exceed 1,000.
    
    **Cooldown Time**
    
    Optional. Specify the cooldown period for the scaling rule. Unit: seconds. If you do not configure this parameter, the cooldown period of the scaling group takes effect. For more information, see [Cooldown period](/help/en/auto-scaling/user-guide/cooldown-period#concept-d3h-51n-qfb).
    
    Repeat this step to create scale-out and scale-in rules. The following table describes the configurations used in this example.
    
    **Scaling rule**
    
    **Example**
    
    Scale-out rule
    
    -   **Rule Name**: add
        
    -   **Rule Type**: Simple Scaling Rule
        
    -   **Operation**: Add 1 Instance
        
    
    Scale-in rule
    
    -   **Rule Name**: remove
        
    -   **Rule Type**: Simple Scaling Rule
        
    -   **Operation**: Remove 1 Instance.
        
    

## **Step 4: Manually execute scaling rules to scale ECS instances**

You can manually execute scaling rules based on your business needs. Auto Scaling automatically adds or removes ECS instances based on the defined scaling rules to adjust the instance count in your scaling group.

1.  On the details page of the scaling group, click the **Scaling Rules and Event-triggered Tasks** tab. Then, click the **Scaling Rules** tab.
    
2.  Find the scaling rule that you want to manually execute and click **Execute** in the **Actions** column.
    
    In this example, the following operations are performed to verify the scaling effect:
    
    -   Execute the scale-out rule to check whether an ECS instance is automatically created in the scaling group.
        
        ![手动增加.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3507830471/p800834.png)
        
    -   Execute the scale-in rule to check whether an ECS instance is automatically removed from the scaling group.
        
        ![手动移出.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5103559171/p800821.png)
