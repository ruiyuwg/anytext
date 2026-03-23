Resource Management allows you to use Resource Orchestration Service (ROS) to implement efficient O&M and management of resources in resource groups.

## **Scenarios**

As the number of cloud resources of enterprises increases, O&M becomes more and more important. However, manual O&M cannot meet the requirements of enterprises. [ROS](/help/en/ros/product-overview/what-is-ros) is an Alibaba Cloud service that simplifies management of cloud computing resources. Developers and administrators can create templates to define cloud computing resources such as Elastic Compute Service (ECS) and ApsaraDB RDS instances, as well as the dependencies between resources in the templates. The ROS engine creates and configures all resources in a stack based on a template, which enables automated deployment and O&M. Before the system implements automated O&M, the resources that require O&M must be identified. You can classify your resources from various dimensions, such as deployment environment, department, and project, into different resource groups, and use ROS to implement efficient O&M and management of the resources.

This topic provides an example to describe how to implement efficient O&M and management of resources. In this example, an enterprise conducts multiple projects. After the projects are complete, the enterprise needs to clean up the resources that are used in the projects. The enterprise wants to clean up the resources by project to improve cleanup efficiency.

## **Procedure**

1.  Create resource groups and transfer resources to the resource groups.
    
    1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
        
    2.  Create resource groups.
        
        In this example, one resource group is created for each project.
        
        For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group).
        
    3.  Transfer resources to the resource groups.
        
        In this example, resources that belong to different projects are transferred to the related resource groups.
        
        For more information, see [Transfer resources across resource groups](/help/en/resource-management/resource-group/user-guide/resource-manual-transfer-group).
        
2.  Clean up resources based on resource groups.
    
    1.  Log on to the [ROS console](https://ros.console.alibabacloud.com).
        
    2.  In the left-side navigation pane, choose **Common Tools** > **Resource Cleanup**.
        
    3.  On the **Resource Cleanup** page, click **Create Scenario**.
        
    4.  Configure parameters related to scenarios.
        
        Select **Resource Group** for **How to select resources**, and retain default values for other parameters.
        
        For information about the types of resources that can be cleaned up, see [Resource types that can be cleaned up](/help/en/ros/developer-reference/aliyun-ros-resourcecleaner#section-8f5-set-4zg).
        
    5.  Click **Scan**.
        
        If Created appears in the **Status** column of the scenario that is displayed on the Resource Cleanup page, the scenario is created.
        
    6.  Click the name of the scenario that you created. In the **Resource Cleanup Summary** section of the **Overview** tab of the page that appears, view the resources that need to be cleaned up.
        
    7.  In the upper-right corner of the page, click **Update**.
        
    8.  On the Resource Cleanup page, select **Clean Up** for Action, and click **Update****.**
        
    9.  In the **Resource Cleanup Detail** section of the **Overview** tab, check whether the resources in the resource group are cleaned up.
        

## **Additional information**

The resource replication scenario, resource management scenario, and resource migration scenario of ROS support resource filtering based on resource groups. For information about how to create these scenarios, see [Create a scenario](/help/en/ros/user-guide/create-a-scenario).
