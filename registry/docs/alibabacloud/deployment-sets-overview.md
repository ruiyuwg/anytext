A deployment set is a placement strategy for Elastic Compute Service (ECS) instances on physical servers. For cluster services that require high availability, you can use the high availability or high availability group strategy to deploy ECS instances across different physical servers. This practice prevents single points of failure (SPOFs) and improves service availability. For applications that are sensitive to network latency, such as high-frequency trading and real-time data analytics, you can use the low latency strategy to deploy ECS instances within the same network topology. This reduces network communication latency between instances. This topic describes the deployment strategies, limits, and usage of deployment sets.

## Deployment strategies

A deployment strategy determines how your ECS instances are placed on physical servers. You can choose a strategy based on your business requirements for high availability, network latency, and deployment scale.

**Strategy**

**Description**

High availability (Availability)

Spreads ECS instances in the deployment set across different physical servers. This effectively reduces the risk of service interruption caused by a single server failure.

-   **Scenarios**: Recommended for small-scale deployments that require high service continuity and isolation, such as Hadoop distributed computing clusters and SQL database clusters.
    
-   **Zone**: Instances can be deployed across different zones.
    
-   **Number of instances:** Up to 20 instances per zone.
    

High availability group (AvailabilityGroup)

Provides finer-grained control by distributing instances into up to 7 distinct groups within a single zone. This achieves a higher level of fault isolation.

ECS instances in different groups are strictly spread across different physical servers within the specified region to avoid SPOFs. Instances within the same group are not guaranteed to be on separate physical servers and may be placed on the same physical server to reduce communication latency.

**Note**

You can call the [DescribeInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstances) operation to query the group number (`DeploymentSetGroupNo`) of an instance in a deployment set.

-   **Scenarios**: Ideal for large-scale deployments that require high isolation, especially for services with a built-in high-availability mechanism, such as Redis master-replica replication or Nginx load balancing.
    
-   **Zone**: Instances can be deployed across different zones.
    
-   **Number of instances:** Up to 20 instances per group in a single zone, with a maximum of 7 groups per zone.
    

Low latency (LowLatency)

Places all ECS instances together within the same network topology in a single zone to reduce network latency.

**Important**

This may result in multiple instances being placed on the same physical server, which does not guarantee high availability.

-   **Scenarios**: Suitable for applications that are highly sensitive to network response times and have strict data exchange speed requirements, especially if the application has its own HA mechanism. Examples include high-performance computing (HPC), real-time data analytics, and AI inference.
    
-   **Zone**: All instances must be deployed in the same zone.
    
    **Number of instances:** Up to 20 instances.
    

## **Limitations**

**Important**

During periods of high demand in a region, you may be unable to create ECS instances or restart pay-as-you-go ECS instances in economical mode. In most cases, you can try to create or restart the instance again after a short wait. For more information, see [Economical mode](/help/en/ecs/user-guide/economical-mode#section-y82-e8u-176).

-   **You cannot create Dedicated Hosts in a deployment set.**
    
-   **Deployment set quota**: Each Alibaba Cloud account has a quota for the number of deployment sets. You can view your specific quota in [Quota Center](https://quotas.console.alibabacloud.com/products/ecs/quotas).
    
-   **Region and zone restrictions**: The instance and the deployment set must be in the same region. For deployment sets that use the low latency strategy, all instances must be in the same zone.
    
-   **Instance family restrictions**: Most instance families of generation 6 and later support the high availability, high availability group, and low latency strategies.
    
    Different deployment strategies only support specific instance families:
    
    > For a definitive list of supported instance families, refer to the results returned by the [DescribeDeploymentSetSupportedInstanceTypeFamily](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describedeploymentsetsupportedinstancetypefamily) operation.
    
    **Deployment strategy**
    
    **Supported instance families**
    
    High availability and high availability group
    
    -   g9a, g9ae, g9i, g8a, g8i, g8ine, g8ise, g8y, g7, g7a, g7h, g7ne, g7nex, g7se, g7t, g6, g6a, g6e, g6h, g5, g5ne
        
    -   c9a, c9ae, c9i, c8a, c8i, c8ine, c8y, c7, c7a, c7nex, c7se, c7t, c6, c6a, c6e, c5
        
    -   r9a, r9ae, r9i, r8a, r8i, r8y, r7, r7a, r7se, r7t, r6, r6a, r6e, r5
        
    -   hfc9i, hfg9i, hfr9i, hfc8i, hfg8i, hfr8i, hfc7, hfg7, hfr7, hfc6, hfg6, hfr6, hfc5, hfg5
        
    -   ebmc9i, ebmg9a, ebmg9i, ebmr9i, ebmc8a, ebmc8i, ebmc8y, ebmg8a, ebmg8i, ebmg8y, ebmr8a, ebmr8y, ebmc7, ebmc7a, ebmg7, ebmg7a, ebmg7se, ebmhfc7, ebmhfg7, ebmhfr7, ebmr7, ebmr7a, ebmg5
        
    -   i5, i5g, i5ge, ic5, i4, i4g, i4r, i3, i3g, i2, i2g, i2gne, i2ne
        
    -   gn6i
        
    -   d3c, d3s, d2c, d2s, d1ne
        
    -   re6, re6p, s6, t6, e4, mn4, n4, re4, xn4, sn2ne, u2a, u2i, se1, se1ne, sn1ne, u1, e
        
    
    Low latency
    
    -   g9a, g9ae, g9i, g8a, g8ae, g8i, g8ise, g8y, g7, g5ne
        
    -   c9a, c9ae, c9i, c8a, c8ae, c8i, c8ine, c8y, c7, c7nex
        
    -   r9a, r9ae, r9i, r8a, r8ae, r8i, r8y, r7
        
    -   hfc9i, hfg9i, hfr9i, hfc8i, hfg8i, hfr8i
        
    -   ebmc9i, ebmg9a, ebmg9i, ebmr9i, ebmc8a, ebmc8i, ebmc8y, ebmg8a, ebmg8i, ebmg8y, ebmgn8v, ebmr8a, ebmr8y, ebmc7, ebmc7a, ebmg7, ebmg7a, ebmg7se, ebmgn7ex, ebmhfc7, ebmhfg7, ebmhfr7, ebmr7, ebmr7a
        
    -   i5, i5g, i5ge, i4
        
    -   gn8v
        
    -   hpc8ae, hpc8i, hpc7ip, hpc6id, u2a, u2i
        
    
-   **You cannot merge deployment sets.**
    

## Billing

Deployment sets are free to use. However, you are billed for the resources you create and use, such as ECS instances, disks, snapshots, images, and public bandwidth. For more information, see [Billing overview](/help/en/ecs/billing-overview#concept-isb-scd-5db).

## **Quick start**

### **Step 1: Create a deployment set**

###### **Console**

1.  Go to [ECS console - Deployment Sets](https://ecs.console.alibabacloud.com/deploymentSet/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  On the **Deployment Set** page, click **Create Deployment Set**.
    
4.  In the **Create Deployment Set** dialog box, enter a **Deployment Set Name** and **Description**, and select a **Strategy**. [How do I select a deployment strategy?](#d20ee9a121x8p)
    

###### **API**

Call the [CreateDeploymentSet](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createdeploymentset) operation to create a deployment set in a specified region and specify a deployment strategy.

If you use the **High Availability Group** strategy, you can specify the `GroupCount` parameter to set the number of groups.

### **Step 2: Create or add ECS instances in the deployment set**

###### **Console**

**Important**

The instance type, region, and number of ECS instances must meet the limits. For more information, see [Limitations](#2e0d928c59jah).

-   **Create a new instance in a deployment set**:
    
    On the deployment set list page, find the target deployment set, and in the **Actions** column, click **Create Instance**. You are redirected to the **Custom Launch** page to complete the instance configuration.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5345216271/p843942.png)
    
-   **Add an existing instance to a deployment set**: For detailed instructions, see [Change the deployment set for an instance](#9e57596a45ldn).
    

###### **API**

-   **Create a new instance in a deployment set**: Call the [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) operation and specify the `DeploymentSetId` (deployment set ID) parameter.
    
    If you use the high availability group strategy, specify the number of groups.
    
-   **Add an existing instance to a deployment set**: Call the [ModifyInstanceDeployment](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancedeployment) operation and specify the `InstanceId` (instance ID) and `DeploymentSetId` (deployment set ID) parameters.
    
    **Note**
    
    If the specified deployment set uses the `AvailabilityGroup` (high availability group) strategy, you can specify the `DeploymentSetGroupNo` parameter to assign the instance to a group in the deployment set.
    

## More operations

### Change the deployment set for an instance

You can change the deployment set for an ECS instance. This lets you move an instance between deployment sets or add an unassigned instance to one.

##### **Procedure**

###### **Console**

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Click the ID of the target instance to go to the instance details page. Click **All Actions** to expand the actions panel. Then, search for and click **Change Deployment Set**.
    
4.  In the **Change Deployment Set** dialog box, select the destination deployment set and configure the **Force Change** parameter.
    
    -   Selected: Allows changing the instance's physical server. This operation may restart the instance and disrupt service. Use with caution.
        
    -   Cleared: Does not change the physical server of the instance, but attempts to add the instance to the specified deployment set. This avoids the risk of an instance restart, but the change will fail if the current instance does not meet the requirements of the new deployment set.
        

###### **API**

Call the [ModifyInstanceDeployment](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancedeployment) operation and specify the following parameters to change the deployment set of an instance:

-   RegionId: The ID of the region to which the instance belongs. Example: `cn-hangzhou`, which indicates China (Hangzhou).
    
-   InstanceId: The ID of the instance. Example: `i-bp67acfmxazb4ph***`.
    
-   DeploymentSetId: The ID of the destination deployment set. Example: `ds-bp67acfmxazb4ph****`.
    
-   Force: Specifies whether to force the instance to move to a different physical server when you change its deployment set. Valid values:
    
    -   true: Allows the instance to be moved to a different physical server. This operation may cause the instance to restart and affect service continuity. Proceed with caution.
        
    -   false (default): Does not move the instance to a different physical server. Instead, this option attempts to add the instance to the specified deployment set. This avoids the risk of an instance restart. However, the change fails if the physical server where the instance is located does not meet the requirements of the new deployment set.
        

### Remove an instance from a deployment set

Before deleting a deployment set, you must first remove all instances from it. An instance retains its original state after it is removed.

**Important**

The target instance must be in the **Running** or **Stopped** state. For more information, see [Start an instance](/help/en/ecs/user-guide/start-an-instance) and [Stop an instance](/help/en/ecs/user-guide/stop-an-instance).

Follow these steps:

-   To remove the instance from the deployment set, call the [ModifyInstanceDeployment](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancedeployment) operation and specify the following parameters:
    
    -   RegionId: The ID of the region to which the instance belongs. Example: `ap-southeast-5`, which indicates Indonesia (Jakarta).
        
    -   InstanceId: The ID of the instance. Example: `i-bp67acfmxazb4ph***`.
        
    -   DeploymentSetId: The ID of the deployment set. Example: `ds-bp67acfmxazb4ph****`.
        
    -   RemoveFromDeploymentSet: Specifies whether to remove the instance from the deployment set. Set the value to `true`.
        
-   Verify that the instance was removed successfully: If the API call is successful and returns a status code of 200, the removal was successful.
    

### **Modify or delete a deployment set**

Go to the [ECS console - Deployment Sets](https://ecs.console.alibabacloud.com/deploymentSet/region) page, find the target deployment set, and in the Actions column, click **Modify Information** or **Delete**. Follow the on-screen instructions to complete the operation.

-   Modify a deployment set: Change the name and description of the deployment set.
    
-   Delete a deployment set: Delete a deployment set when it is no longer needed to clean up resources.
    
    **Important**
    
    A deployment set must be empty before you can delete it. To do this, remove all instances from the set. For more information, see [Change the deployment set for an instance](#9e57596a45ldn) or [Remove an instance from a deployment set](#278e05e16b15t).
