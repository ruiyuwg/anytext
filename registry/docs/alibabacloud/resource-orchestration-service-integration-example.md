This topic describes how to create a Resource Orchestration Service (ROS) template to automatically create an ApsaraDB for MongoDB instance.

## Resource architecture

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2548561961/p698453.png)

You can create a virtual private cloud (VPC), a vSwitch, and a replica set instance in a specific region.

## Required permissions

In this example, you must create a VPC, a vSwitch, and an instance. By default, Resource Orchestration Service uses the credentials of the current user who logs on to the ROS console. The current user must be granted the following permissions:

-   **_AliyunROSFullAccess_**: provides full access to Resource Orchestration Service.
    
-   **_AliyunVPCFullAccess_**: provides full access to Virtual Private Cloud.
    
-   **_AliyunMongoDBFullAccess_**: provides full access to ApsaraDB for MongoDB.
    

## Procedure

1.  Log on to the [ROS](https://ros-intl.console.alibabacloud.com/cn-shanghai/stacks) console. In the top navigation bar, select a region from the **Region** drop-down list.
    
2.  In the left-side navigation pane, click **Stacks**. On the Stacks page, choose **Create Stack** > **Use ROS**.
    
    -   **_Specify Template_**: Select **Select an Existing Template**.
        
    -   **_Template Import Method_**: Select **Enter Template Content****_._**
        
3.  **Template Content**: Select **ROS** and then enter code.
    
    The code used to create an instance varies with the instance architecture.
    
    -   For more information about the code that is used to create a replica set instance, see [ALIYUN::MONGODB::Instance](/help/en/ros/developer-reference/aliyun-mongodb-instance).
        
    -   For more information about the code that is used to create a sharded cluster instance, see [ALIYUN::MONGODB::ShardingInstance](/help/en/ros/developer-reference/aliyun-mongodb-shardinginstance).
        
    
4.  Click **Next** to go to the **Configure Template Parameters** step.
    
5.  Click **Create** and execute the created stack.
    
6.  View the result.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2548561961/p698460.png)
