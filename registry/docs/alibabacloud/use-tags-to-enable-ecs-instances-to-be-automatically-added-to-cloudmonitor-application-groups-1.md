You can create scaling groups in Auto Scaling and use these scaling groups to automatically create instances with specific tags. Then, you can configure application group rules in CloudMonitor based on the tags. This way, the instances are automatically added to different application groups based on the rules. This facilitates centralized O&M of the instances. This strategy has the following characteristics: automatic addition of instances to application groups, high availability of auto scaling, and automated O&M.

## Background information

-   CloudMonitor can automatically group the resources of the following Alibaba Cloud services: Elastic Compute Service (ECS), ApsaraDB RDS, and Server Load Balancer (SLB). For ECS, only instances can be grouped. Other ECS resources, such as elastic network interfaces (ENIs) and disks, cannot be grouped.
    
-   In this example, an ECS instance that is automatically created in a scaling group is used. The tag `team:dev` is added to the ECS instance.
    

## Step 1: Create an ECS instance to which a tag is added in Auto Scaling

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  Create a scaling group. For more information, see [Step 1: Create a scaling group](/help/en/auto-scaling/scale-ecs-instances-efficiently#section-l2v-k5s-gnr).
    
    Select **Balanced Distribution Policy** for the Scaling Policy parameter based on your business requirements to achieve high-availability auto scaling.
    
3.  Create a scaling configuration, create an ECS instance, and then add the `team:dev` tag to the ECS instance. For more information, see [Step 2: Create a scaling configuration](/help/en/auto-scaling/scale-ecs-instances-efficiently#section-s5i-11r-14o).
    
4.  On the Scaling Groups page, find the scaling group that you created and click its ID. On the page that appears, click the **Instances** tab. On the Instances tab, view the ECS instance that is automatically created in the scaling group.
    

## Step 2: Create a CloudMonitor application group

1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com).
    
2.  Create an application group. For more information, see [Create an application group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-application-group#task-2000412).
    
    You must configure Creation Method, Resource Tag Key, and Tag Value based on the following instructions:
    
    -   Set Creation Method to **Create Based on Tags**.
        
    -   Set Resource Tag Key to `team` and configure Tag Value based on your business requirements. In this example, **Contain** and `dev` are specified.
        
    
3.  In the upper part of the Application Groups tab, select **Resource Tag** from the drop-down list and enter the tag key `team` in the search box to search for the newly created application group.
    
4.  Click the name of the application group and view the resources in the group.
    
    The ECS instance that is automatically created in the scaling group is automatically added to the application group. You can also view the monitoring data of the ECS instance. For more information, see [Cloud service monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/cloud-service-monitoring).
