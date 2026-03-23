The scaling group is a core component of Auto Scaling that manages a group of instances with the same application scenarios and instance types. You can use a scaling group to accelerate horizontal expansion of instances in a cluster. You can also use a scaling group to dynamically adjust the number of instances based on your business requirements, which helps you save on costs.

## **Benefits**

-   **Rapid scale-out capability and guarantee of high service availability**
    
    You can use a scaling group to efficiently expand service clusters and improve service availability.
    
-   **Cost control**
    
    Scaling out a service cluster means maintaining more computing resources, which increases costs. However, your business might not always run at full capacity. You can leverage the elasticity of the cloud to reduce resource investment when demand is low, thereby controlling costs.
    

## **Supported scaling solutions**

### Solution 1: Maintenance of a fixed number of available instances

-   **Scenario:** High availability maintenance without cluster scaling
    
-   **Implementation method:** Enable the **Instance Health Check** and **Expected Number of Instances** features.
    
    After you enable the **Instance Health Check** feature for your scaling group, Auto Scaling automatically removes unhealthy instances from the scaling group. If the current number of instances in your scaling group is less than the expected number of instances, Auto Scaling automatically triggers a scale-out event to maintain a fixed number of available instances in the scaling group.
    
-   **Example**
    
    For example, you enable the **Expected Number of Instances** feature for your scaling group and specify 10 as the expected number. If the actual number of instances in the scaling group is less than 10, Auto Scaling automatically triggers a scale-out event to increase the actual number to 10.
    

### Solution 2: Regularly scheduled autoscaling

-   **Scenario:** Predictable workload fluctuations
    
-   **Implementation method:**: Create scheduled tasks to enable regular autoscaling.
    
    When resource utilization in the cluster increases, you can execute a scheduled task to trigger a scale-out event. When resource utilization in the cluster decreases, you can execute a scheduled task to trigger a scale-in event. For more information, see [Scale ECS instances as scheduled](/help/en/auto-scaling/getting-started/scheduled-automatic-scaling-of-ecs-instances).
    
-   **Example**
    
    For example, your cluster experiences an increase in traffic every evening at 19:00 and a decrease every morning at 01:00. To handle the fluctuations in business demand, you can create the following scheduled tasks:
    
    -   Increased traffic: You can enable a scheduled task to increase the number of service replicas every evening at 19:00. This improves the capability of the cluster to handle the increased traffic.
        
    -   Decreased traffic: You can enable a scheduled task to decrease the number of service replicas every morning at 01:00. This improves resource utilization and maximizes cost efficiency.
        

### Solution 3: Autoscaling based on resource utilization thresholds

-   **Scenario:** Sudden fluctuations in workloads
    
-   **Implementation method:**
    
    #### Trigger scaling events when resource utilization exceeds or falls below the specified threshold
    
    You can create event-triggered tasks to trigger scaling events. When resource utilization exceeds or falls below the specified threshold, the event-triggered tasks are automatically executed to trigger scaling events.
    
    **Add or remove instances after alerts are triggered**
    
    When you create an event-triggered task in your scaling group, you must configure a simple scaling rule in the task. The simple scaling rule specifies the action to add or remove a specific number of instances when the event-triggered task is executed.
    
    **Effect description**
    
    If you configure a simple scaling rule, you can add or remove a specific number of instances, or set the total number of instances to a specific value. Examples:
    
    -   When the average CPU utilization exceeds 80%, you can execute a simple scaling rule by triggering an event-triggered task to add _N_ instances.
        
    -   When the average CPU utilization falls below 70%, you can execute a simple scaling rule by triggering an event-triggered task to remove _N_ instances.
        
    
    For more information, see [Scale ECS instances based on business workloads](/help/en/auto-scaling/getting-started/automatically-scale-the-capacity-of-an-ecs-instance-based-on-the-business-load).
    
    **Add or remove instances based on resource utilization tiers**
    
    When you create an event-triggered task in your scaling group, you can configure a step scaling rule in the task. This enables autoscaling based on predefined resource utilization tiers when the event-triggered task is executed.
    
    **Important**
    
    Scaling groups of the Elastic Container Instance type do not support step scaling rules.
    
    **Effect description**
    
    If you configure a step scaling rule, you can enable autoscaling based on the adjustment steps predefined in the rule. Examples:
    
    -   When the average CPU utilization falls between 60% and 70%, you can execute a step scaling rule by triggering an event-triggered task to remove one instance.
        
    -   When the average CPU utilization falls between 30% and 60%, you can continue to execute the step scaling rule by triggering the event-triggered task to remove three instances.
        
    -   When the average CPU utilization falls below 30%, you can continue to execute the step scaling rule by triggering the event-triggered task to remove five instances.
        
    
    #### Maintain the desired resource utilization
    
    You can create a target tracking scaling rule in your scaling group to maintain the desired resource utilization.
    
    **Example**
    
    You create a target tracking scaling rule in a scaling group of the Elastic Compute Service (ECS) type and specify 80% as the desired average CPU utilization. In this case, Auto Scaling dynamically adds or removes instances to maintain the average CPU utilization at 80%.
    
-   **Differences between the implementation methods**
    
    -   Simple and step scaling rules offer more flexibility and customization, allowing you to control the exact number of instances to add or remove based on different resource utilization tiers.
        
    -   In contrast, target tracking scaling rules are simpler to configure, as you only need to define the target metric you want to maintain.
        

### Solution 4: Custom scaling

If none of the preceding solutions meets your business requirements, you can configure a custom scaling solution.

You can manually execute scaling rules or modify the instance numbers to trigger scaling events. For more information, see [Manually scale ECS instances with a few clicks](/help/en/auto-scaling/getting-started/manually-scale-an-ecs-instance-with-one-click).

**Note**

Custom scaling supports API calls. You can call API operations to configure custom scaling solutions based on your business requirements.

### **Solution 5: Predictive scaling**

Auto Scaling can also automatically make adjustments to meet predicted resource demands.

This solution allows you to first run a predictive scaling rule in prediction-only mode to evaluate its accuracy and effectiveness. If the results are satisfactory, you can then enable both prediction and scaling, which automatically generates scheduled tasks based on the forecast to scale your instances. For more information, see [View the prediction of a predictive scaling rule](/help/en/auto-scaling/user-guide/view-the-prediction-effect-of-a-predictive-scaling-rule).

## **Usage notes**

Before you use a scaling group, make sure that the instances on which you deploy your business support horizontal scaling.

Auto Scaling horizontally scales instances. We recommend that you consider the potential impact of horizontal scaling on your business.

-   **Data consistency**
    
    If your database is deployed on the instances being scaled, you risk data inconsistency when new instances are added. To prevent this, we recommend moving your database to a separate, dedicated service. This allows all instances to access the same central database, making your application stateless.
    
-   **Data security**
    
    Instances in scaling groups are automatically created and released. If you store data on the instances, make sure that you perform data backup operations to secure your data.
    

## **How do I use scaling groups?**

### **Getting started**

-   [Usage process](/help/en/auto-scaling/getting-started/usage-process)
    
-   [Manually scale ECS instances with a few clicks](/help/en/auto-scaling/getting-started/manually-scale-an-ecs-instance-with-one-click)
    
-   [Scale ECS instances as scheduled](/help/en/auto-scaling/getting-started/scheduled-automatic-scaling-of-ecs-instances)
    
-   [Scale ECS instances based on business workloads](/help/en/auto-scaling/getting-started/automatically-scale-the-capacity-of-an-ecs-instance-based-on-the-business-load)
    

### **Advanced requirements**

#### **Business deployment: Automatically deploy business software packages on new instances**

-   **Enable automatic deployment by using images** **that contain your software packages**
    
    -   Scaling groups of the ECS type
        
        Build a custom image that includes your software packages, and modify the instance configuration source to use the image.
        
    -   Scaling groups of the Elastic Container Instance type
        
        Build a Docker image for your business, and modify the instance configuration source to use the image.
        
-   **Automatically run the deployment script upon instance startup**
    
    -   **Custom instance user data**
        
        If your scaling group is of the ECS type, you can enable the **Instance User Data** feature. You can include scripts in the custom user data to deploy service software packages. For more information, see [Use the Instance User Data feature to automatically configure ECS instances](/help/en/auto-scaling/use-cases/enable-the-instance-user-data-feature-to-automatically-configure-ecs-instances).
        
    -   **Lifecycle hook**
        
        If your scaling group is of the ECS type, you can enable the **Lifecycle Hook** feature. Lifecycle hooks allow you to deploy service software packages on instances before the instances are added to the scaling group after scale-out events are triggered. For more information, see [Automatically execute scripts on ECS instances](/help/en/auto-scaling/use-cases/executes-scripts-on-ecs-instances).
        

#### **Rolling update: Update instance images or run scripts**

You can update instance images or batch execute scripts on multiple instances by using the **Rolling Update** feature. For more information, see [Rolling update](/help/en/auto-scaling/user-guide/rolling-update).

#### **Association with cloud databases: Allow new instances to access databases**

You can configure an identical security group for all instances in a scaling group. You can also add the private IP addresses of new instances in a scaling group to the IP address whitelists of the cloud databases associated with the scaling group. This allows for access from the new instances to the cloud databases.

**References**

-   [Associate instances in a scaling group with cloud databases](/help/en/auto-scaling/user-guide/associate-a-cloud-database-with-a-computing-instance-in-a-scaling-group)
    

#### **Association with load balancers: Configure an access entry point for instances in a scaling group**

If your instance cluster uses a load balancer as the access entry point, you can associate the load balancer with the scaling group that manages the instances. After you associate a load balancer with a scaling group, new instances in the scaling group are automatically added to the backend server groups of the load balancer.

**References**

-   [Attach or detach SLB instances to or from scaling groups](/help/en/auto-scaling/user-guide/associate-slb-instances-with-or-disassociate-slb-instances-from-a-scaling-group)
    

#### **Perform custom operations during scaling**

You can use lifecycle hooks to put instances into a **Pending** state and perform custom operations on the instances, such as mounting File Storage NAS file systems, binding elastic IP addresses (EIPs), and executing custom scripts.

**References**

-   [Automatically mount an NAS file system to an ECS instance](/help/en/auto-scaling/use-cases/mount-nas-file-systems-to-ecs-instances)
    
-   [Apply an automatic snapshot policy to ECS instances](/help/en/auto-scaling/use-cases/apply-an-automatic-snapshot-policy-to-ecs-instances)
    
-   [Automatically bind and release EIPs](/help/en/auto-scaling/use-cases/associates-eips-with-ecs-instances)
    
-   [Automatically attach or detach secondary ENIs that have EIPs to or from ECS instances](/help/en/auto-scaling/use-cases/binds-secondary-enis-to-ecs-instances)
    
-   [Automatically execute scripts on ECS instances](/help/en/auto-scaling/use-cases/executes-scripts-on-ecs-instances)
    

#### **Design a scale-in policy**

When your business has lower workloads, Auto Scaling automatically scales in your resources to minimize costs. During a scale-in process, you may have questions about controlling the scale-in frequency, gracefully scaling in instances, and selecting which instances to scale in.

**References**

-   [Scale-in guide](/help/en/auto-scaling/use-cases/scale-in-guide)
    

#### **Optimize resource costs**

If you use a scaling group, you can create spot instances and enable a cost optimization policy to optimize resource costs.

**References**

-   For information about how to use spot instances to optimize resource costs, see [Save your money with Auto Scaling](/help/en/auto-scaling/use-cases/save-your-money-with-auto-scaling).
    
-   For information about how to use multiple instance types and a cost optimization policy to optimize resource costs, see [Combine a cost optimization policy with the selection of multiple instance types](/help/en/auto-scaling/use-cases/reduce-costs-through-scaling-strategies).
    

#### **Improve the disaster recovery capability and scale-out success rate**

Scale-out failures may occur due to insufficient resources in a single zone. To resolve this issue, you can specify multiple zones and instance types to reduce the risk of such failures. You can also enable a balanced distribution policy in your scaling group to implement multi-zone disaster recovery.

**References**

-   For information about how to use a balanced distribution policy to implement multi-zone disaster recovery, see [Deploy resilient computing clusters with load-balanced distribution](/help/en/auto-scaling/use-cases/deploy-a-highly-available-computing-cluster-using-a-balanced-distribution-strategy).
    
-   For information about how to specify multiple instance types to reduce the risk of scale-out failures caused by insufficient resources, see [Create a multi-instance type scaling group by using a launch template](/help/en/auto-scaling/use-cases/specify-multiple-instance-types-for-a-scaling-group-by-using-a-launch-template).
    

#### **Scale Kubernetes nodes**

You can use scaling groups to enable autoscaling of Kubernetes nodes.

**References**

-   [Automatic scaling of Kubernetes nodes](/help/en/auto-scaling/use-cases/kubernetes-node-auto-scaling/)
