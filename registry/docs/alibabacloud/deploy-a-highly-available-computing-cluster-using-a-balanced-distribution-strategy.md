Auto Scaling distributes Elastic Compute Service (ECS) instances evenly across multiple zones, monitors instance health in real time, and automatically replaces failed instances. This topic describes how to deploy a high-availability computing cluster with balanced zone distribution and spot instances to reduce costs.

## Scenario

During peak hours for distributed big data computing or AI training, you need to rapidly provision a high-availability computing cluster. For example, an online advertising company running machine learning models for targeted ads requires significant computing resources during high-traffic periods.

Deploying a multi-instance cluster manually introduces the following risks:

-   **Creation failures** from lengthy manual processes or insufficient resources in a single zone
    
-   **Downtime** when zone-level instance failures disrupt business operations
    

## Solution

Auto Scaling addresses these risks by automatically deploying ECS instances across multiple zones with a balanced distribution strategy. To further reduce costs, configure spot instances as compute nodes -- they provide the same functionality at a lower price.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6712822771/CAEQORiBgMD719fNsBkiIGRkZDM4ZWUxMGVkMTQwNzQ4ZjVhZDMxNTI5NGM3ZGRh4435299_20240529162604.516.svg)

### Benefits

**Benefit**

**Description**

**Zero O&M costs**

Auto Scaling adjusts ECS instances automatically, eliminating manual intervention.

**High availability**

The balanced distribution policy allocates ECS instances evenly across multiple zones, preventing scaling failures from resource shortages in any single zone. The instance health check feature, enabled by default, keeps all instances in the scaling group available.

**Cost-effectiveness**

Spot instances as compute nodes significantly lower resource costs.

## Prerequisites

Before you begin, make sure that you have:

-   Assessed your business modules to identify which components need high-availability deployment
    
-   A custom image created from your application, to use in the scaling configuration. For details, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance#concept-ech-5bm-xdb)
    
-   A VPC with vSwitches in multiple zones
    

## Procedure

### Step 1: Create a scaling group

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Scaling Groups**.
    
3.  Select your region in the top navigation bar.
    
4.  In the upper-left corner of the **Scaling Groups** page, click **Create**.
    
5.  On the **Create by Form** tab, configure the following parameters and click **Create**. Parameters not listed here retain their default values. For more information, see [Create scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups#section-l2v-k5s-gnr).
    
    **Parameter**
    
    **Example**
    
    **Description**
    
    **Scaling Group Name**
    
    test
    
    A name for the scaling group. The name must meet the format requirements displayed on the console.
    
    **Type**
    
    ECS
    
    Select ECS to create a scaling group that manages ECS instances.
    
    **Instance Configuration Source**
    
    Create from Scratch
    
    Skip the instance template at this stage. After the scaling group is created, create a scaling configuration separately.
    
    **Minimum Number of Instances**
    
    100
    
    The minimum number of instances in the scaling group. If the actual count drops below this value, Auto Scaling automatically adds instances until the minimum is reached.
    
    **Maximum Number of Instances**
    
    120
    
    The maximum number of instances in the scaling group. If the actual count exceeds this value, Auto Scaling removes instances until the count is within the limit.
    
    **Scaling Policy** (under **Show Advanced Settings**)
    
    Balanced Distribution Policy
    
    Select **Balanced Distribution Policy** to distribute instances evenly across zones. We recommend that you configure vSwitches in multiple zones for this policy to take effect.
    
    **VPC**
    
    vpc-2zeghwzptn5zii0w7\\\*\\\*\\\*\\\*
    
    The VPC for instances in this scaling group.
    
    **vSwitch**
    
    vsw-2ze23nqzig8inprou\\\*\\\*\\\*\\\*, vsw-2zeet2ksvw7f14ryz\\\*\\\*\\\*\\\*, vsw-2ze94pjtfuj9vaymf\\\*\\\*\\\*\\\*
    
    Select vSwitches in multiple zones. For better balance and higher scale-out success rates, we recommend that you select multiple vSwitches to evenly distribute ECS instances across zones.
    
    ![Balanced distribution configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0433071271/p806292.png)
    

### Step 2: Create a scaling configuration

1.  On the **Scaling Groups** page, find the scaling group and click its ID.
    
2.  In the upper part of the scaling group details page, click the **Scaling Configurations** tab.
    
3.  On the **Scaling Configurations** tab, click **Create Scaling Configuration**.
    
4.  Configure the following parameters and click **Create**. Parameters not listed here retain their default values. For more information, see [Create a scaling configuration of the ECS type](/help/en/auto-scaling/user-guide/create-scaling-configurations-of-the-ecs-type/).
    
    **Section**
    
    **Parameter**
    
    **Example**
    
    **Description**
    
    **Basic Information**
    
    **Scaling Configuration Name**
    
    test
    
    A name for the scaling configuration.
    
    **Billing method**
    
    Spot Instance
    
    Auto Scaling itself is free of charge. Charges apply only to ECS instances launched during scale-out events. Select **Spot Instance** to reduce compute costs. For details, see [Billing overview](/help/en/ecs/billing-overview#concept-isb-scd-5db).
    
    **Image and Instance**
    
    **Instance Configuration Mode**
    
    Specify Instance Pattern
    
    Select **Specify Instance Pattern** to configure instance specifications manually.
    
    **Instance Attribute Combination**
    
    2 vCPUs, 4 GiB of Memory, Enterprise Level
    
    Choose the vCPU and memory combination that fits your workload.
    
    **Select Image**
    
    test
    
    Select the custom image created from your application for production workloads.
    
    **Storage**
    
    **System Disk**
    
    Enterprise SSD (ESSD), 40 GiB, PL0
    
    Select a system disk type and size based on your workload requirements.
    
    **Network and Security Group**
    
    **Security Group**
    
    sg-bp18kz60mefsicfg\\\*\\\*\\\*\\\*
    
    Select an existing security group. To create one, see [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1#concept-ocl-bvz-xdb).
    
    **Management Settings**
    
    **Logon Credentials**
    
    Set Later
    
    Select **Set Later** to configure instance passwords after creation.
    

### Step 3: Enable the scaling group

Follow the on-screen instructions to enable the scaling group and scaling configuration.

## Result

After the scaling group is enabled with **Minimum Number of Instances** set to **100**, Auto Scaling distributes 100 ECS instances evenly across the specified zones. This maintains high availability for the computing cluster while optimizing resource costs through spot instances.

Auto Scaling automatically handles two failure scenarios:

-   **Insufficient resources in a zone**: Auto Scaling deploys instances in other available zones to minimize business impact.
    
-   **Spot instance reclamation**: Auto Scaling replaces reclaimed instances and any unhealthy ECS instances with new ones.
    

## Next steps

If instances become unevenly distributed across zones due to resource shortages, rebalance them. For details, see [Rebalance the distribution of ECS instances](/help/en/auto-scaling/user-guide/rebalance-the-distribution-of-ecs-instances).
