You can use the management account or a member of a resource directory to share resources with all members in the resource directory, all members in a specific folder in the resource directory, or a specific member in the resource directory.

## Background information

In this example, a resource owner (the management account of a resource directory) shares one or more vSwitches in a virtual private cloud (VPC) within the resource owner to a member in the resource directory.

## Step 1: Enable resource sharing

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-share) by using the management account of your resource directory.
    
2.  In the left-side navigation pane, choose **Resource Sharing** > **Settings**.
    
3.  On the page that appears, click **Enable**.
    
4.  In the **Service-linked Role for Resource Sharing** dialog box, click **OK**.
    
    The system creates a service-linked role named AliyunServiceRoleForResourceSharing to obtain the organizational structure of the resource directory. For more information, see [Service-linked role for Resource Sharing](/help/en/resource-management/security-and-compliance/service-linked-role-for-resource-sharing#concept-2469063).
    

## Step 2: Create a resource share

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-share) as a resource owner.
    
2.  In the left-side navigation pane, choose **Resource Sharing** > **Resources I Share**.
    
3.  In the top navigation bar, select the region where the resources to be shared reside.
    
    **Important**
    
    If you want to share global resources, such as templates in Resource Orchestration Service (ROS), you can select only the China (Shanghai) region to create resource shares.
    
4.  Click **Create Resource Share**. On the page that appears, configure the parameters.
    
    1.  Configure basic information and add resources.
        
        Enter a resource share name, add tags to the resource share based on your business requirements, and then add select resources to be shared. In this example, vSwitches are selected for sharing.
        
    2.  Add permissions.
        
        The permissions define the operations that principals can perform on the resources. In this example, the **AliyunRSDefaultPermissionVSwitch** permission is added. You can click the permission name to view the permission details.
        
    3.  Add principals.
        
        Set **Principal Scope** to **Objects Within Resource Directory** and **Method** to **Add from Resource Directory**, and select a folder or member in the resource directory. In this example, a member is selected.
        
    4.  Confirm the configurations and click OK.
        
    

## **Step 3: Verify the result**

You can use one of the following methods to check whether resources are successfully shared:

-   Resource owner
    
    On the details page of the resource share in the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-share), view the status of the resources and principal. If they are in the **Associated** state, resources are successfully shared.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9655101571/p977468.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8385101571/p977853.png)
    
-   Principal
    
    In the console of the Alibaba Cloud service to which the resources belong, view and manage the resources. In this example, you can use a member to log on to the VPC console and view the vSwitches that are shared.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9655101571/p977504.png)
    

## **References**

-   [What is Resource Directory?](/help/en/resource-management/resource-directory/product-overview/resource-directory-overview)
    
-   [Use a member to log on to the Alibaba Cloud Management Console](/help/en/resource-management/resource-directory/user-guide/use-a-member-to-log-on-to-the-alibaba-cloud-management-console)
