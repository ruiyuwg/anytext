This topic describes how to use Auto Scaling to combine pay-as-you-go and spot Elastic Compute Service (ECS) instances. This strategy helps you manage predictable traffic fluctuations while significantly reducing costs.

## Business scenarios

An online education platform experiences traffic peaks between 17:00 and 22:00 daily. To handle this, O&M engineers must maintain enough computing resources for peak hours, but this leads to idle resources and wasted costs during off-peak times. Additionally, unexpected traffic surges require immediate manual provisioning of ECS instances by O&M engineers, further complicating operations.

You can use the solution provided in this topic if your application has the following characteristics:

-   Your application is deployed in a cluster, and the cluster has more than one server.
    
-   The application is highly fault-tolerant and can still run in the event of a failure. Example: the test service that is deployed on a spot instance.
    
-   The application has predictable traffic variations. For example, the application may encounter consistent traffic peaks between 17:00 and 22:00 daily, with significantly reduced computing resource usage during all other times.
    

## Solutions

Auto Scaling combines pay-as-you-go and spot instances to efficiently manage anticipated traffic variations and minimize costs.

You can use the following solutions:

-   For your baseline, steady-state traffic, we recommend using subscription ECS instances.
    
-   To optimize resource allocation, you can create scheduled tasks that automatically add ECS instances during peak hours and remove them during off-peak hours. A scheduled task can provide the following features:
    
    -   During peak hours, scheduled tasks can automatically add a mix of pay-as-you-go and spot instances. To maximize savings, Auto Scaling prioritizes creating instances from the instance types with the lowest vCPU unit price.
        
    -   During off-peak hours, the scheduled task prompts Auto Scaling to release idle ECS instances.
        

## Benefits

Auto Scaling offering the following benefits, which enable you to effectively minimize expenses:

-   Zero upfront resource setup costs
    
    Auto Scaling creates and releases ECS instances based on your business requirements, eliminating the requirement for any upfront costs related to resource setup. You need to only focus on reserving computing resources specifically for those predictable loads.
    
-   Zero O&M costs
    
    To prepare for peak hours, you can create scaling policies in advance. As traffic surges, Auto Scaling automatically provisions ECS instances and adds them to the backend server group of the attached Server Load Balancer (SLB) instance. Auto Scaling also updates the IP address whitelist of the attached ApsaraDB RDS instance by adding the private IP addresses of the new instances to ensure seamless connectivity. The entire sequence, from triggering to completion, is automated and occurs without any manual intervention.
    
-   Ultra-high cost performance
    
    Auto Scaling allows you to combine pay-as-you-go and spot instances, with spot instances offering potential cost savings of up to 90%. In scenarios where spot instances prove inadequate, pay-as-you-go instances are automatically provisioned to guarantee uninterrupted service. To further improve cost-effectiveness, the cost optimization policy includes a Spot Instance supplementation feature. When enabled, Auto Scaling attempts to provision new, lower-cost spot instances five minutes before existing ones are scheduled for termination.
    

## Procedure

To minimize costs for vital business components, conduct an evaluation grounded in your business infrastructure and then perform the following operations:

**Note**

Before you proceed, you must create a custom image based on the ECS instance currently hosting your application. For information about how to create a custom image, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance#concept-ech-5bm-xdb).

### **Step 1: Use a custom image to create subscription ECS instances**

In this step, you will provision a fixed number of subscription ECS instances from a custom image. These instances will handle the steady, baseline traffic for your application.

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Instances & Images** > **Images**.
    
3.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
4.  Find the desired custom image and click **Create Instance** in the **Actions** column.
    
5.  Configure parameters based on your business requirements to complete instance creation.
    
    -   Set **Billing Type** to **Subscription**.
        
    -   **Region** and **Image** are auto-filled.
        
    
    For information about other parameters, see [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
    

### **Step 2: Create and enable a scaling group**

This step describes how to create a scaling group tailored for business modules with budget constraints and incorporate a custom image in a scaling configuration to guarantee that any automatically provisioned ECS instances conform precisely to your application requirements.

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Scaling Groups**.
    
3.  In the top navigation bar, select a region.
    
4.  Click **Create** and configure parameters based on your business requirements to complete group creation.
    
    -   Enter a custom name such as _testname_ in the **Scaling Group Name** text box.
        
    -   Set **Instance Configuration Source** to **Create from Scratch**.
        
    -   Set **Minimum Number of Instances** to **0**.
        
    -   Set **Maximum Number of Instances** to **10**.
        
    -   Set **Default Cooldown Time (Seconds)** to **300**.
        
    -   Set **Network Type** to **VPC**.
        
    -   Set **Scaling Policy** to **Cost Optimization Policy**.
        
        -   Set **Minimum Pay-as-you-go Instances** to **0**.
            
        -   Set **Percentage of Pay-as-you-go Instances** to **30**.
            
        -   Set **Lowest Cost Instance Types** to **3**.
            
        -   Turn on **Enable Supplemental Spot Instances**.
            
        -   Turn on **Use Pay-as-you-go Instances to Supplement Spot Capacity**. By default, this feature is enabled.
            
    -   Set **Instance Reclaim Mode** to **Release**.
        
    -   Select a virtual private cloud (VPC) and one or more vSwitches that you created.
        
    -   Configure **Associate CLB Instance**, **Associate ALB and NLB Server Groups**, and **Associate ApsaraDB RDS Instance** based on the requirements of your business modules.
        
    
    Configure other parameters based on your business requirements.
    
5.  Find the scaling group and click **Details** in the **Actions** column.
    
6.  In the upper part of the details page, click the **Instance Configuration Sources** tab.
    
7.  Click **Create Scaling Configuration** and configure parameters based on your business requirements to complete scaling configuration creation.
    
    -   Set **Billing Method** to **Spot Instance**.
        
    -   Select three or more instance types from the **Select Instance Type** drop-down list.
        
    -   Select your custom image from the **Select Image** drop-down list.
        
    
    Configure other parameters based on your business requirements. For more information, see [Create a scaling configuration of the ECS type](/help/en/auto-scaling/user-guide/create-scaling-configurations-of-the-ecs-type/#concept-25890-zh).
    
8.  Enable the scaling configuration and the scaling group.
    

### **Step 3: Add subscription ECS instances and configure a scaling policy**

This step describes how to add subscription ECS instances to the scaling group and how to create a scheduled task to implement seamless scaling during peak hours. This step also shows that spot instances can maximize your cost savings.

1.  On the **Instances** tab, add the created ECS instances to the scaling group.
    
2.  To prevent these baseline instances from being accidentally terminated during a scale-in event, set them to the Protected state..
    
3.  On the **Basic Information** tab, change the minimum and maximum numbers of instances in the scaling group based on your business requirements.
    
4.  On the details page of the scaling group, choose **Scaling Rules and Event-triggered Tasks** > **Scaling Rules** to create two simple scaling rules.
    
    You must configure the following parameters:
    
    -   Set **Rule Type** to **Simple Scaling Rule**.
        
    -   Set **Operation** based on the following rules:
        
        -   Simple Scaling Rule 1: When a scale-out event is triggered, five ECS instances are added to the scaling group.
            
        -   Simple Scaling Rule 2: When a scale-in event is triggered, five ECS instances are removed from the scaling group.
            
    
    Configure other parameters based on your business requirements. For more information, see [Configure scaling rules](/help/en/auto-scaling/user-guide/manage-scaling-rules#concept-nyt-kpw-rfb).
    
5.  On the details page of the scaling group, choose **Scaling Rules and Event-triggered Tasks** > **Scheduled Tasks** to create two scheduled tasks.
    
    -   Set **Executed At** based on the following rules:
        
        -   Scheduled Task 1: Set the value to _Nov. 20, 2024, 4:59 PM_ to immediately trigger a scale-out event when the peak hours arrive.
            
        -   Scheduled Task 2: Set the value to _Nov. 20, 2024, 9:59 PM_ to immediately trigger a scale-in event when the off-peak hours arrive.
            
    -   By default, the scaling group in which the subscription ECS instances are provisioned is selected.
        
    -   Set **Scaling Method** to **Select Existing Scaling Rule**.
        
    -   Set **Simple Scaling Rule** based on the following rules:
        
        -   Scheduled Task 1: Select Simple Scaling Rule 1 to immediately trigger a scale-out event when the peak hours arrive.
            
        -   Scheduled Task 2: Select Simple Scaling Rule 2 to immediately trigger a scale-in event when the off-peak hours arrive.
            
    
    Configure other parameters based on your business requirements. For more information, see [Configure a scheduled task](/help/en/auto-scaling/user-guide/create-scheduled-tasks#concept-25904-zh).
    

## Verify the result

You can go to the **Scaling Activities** tab to view the scaling activity details. Based on the scaling activity details, you can verify whether the defined number of ECS instances are scaled as expected. For more information, see [View the details of a scaling activity](/help/en/auto-scaling/user-guide/view-scaling-activity-details#concept-tn5-4c2-sfb).

-   Your subscription ECS instances are in the Protected state. This prevents them from being removed by a scale-in activity, ensuring your baseline capacity is always available. Their status and weight in the load balancer backend server group are unaffected.
    
-   Auto Scaling proactively increases the number of ECS instances based on your prearranged schedules, which ensures adequate capacity to handle increased traffic demands during peak hours. After you configure the cost optimization policy and enable the Enable Supplemental Spot Instances feature, you can purchase ECS instances at lower costs.
    
-   Auto Scaling scales in ECS instances during off-peak hours based on the scheduled tasks that you created.
