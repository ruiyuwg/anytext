The [Resource Group](/help/en/resource-management/resource-group/product-overview/resource-group-overview) service allows you to sort resources within an Alibaba Cloud account into different resource groups. This simplifies resource and permission management within an Alibaba Cloud account. This topic describes how to use Resource Group to sort resources within an Alibaba Cloud account into different resource groups. This topic also describes the operations that you can perform by resource group.

## **Prerequisites**

The types of resources that you want to sort are supported by the Resource Group service. For more information, see [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group).

## **Step 1: Create resource groups**

You can create resource groups from dimensions such as department, project, and environment based on your business requirements.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
    
2.  On the **Resource Group** page, click **Create Resource Group**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7202826271/p840551.png)
    
3.  On the Create Resource Group page, configure **Resource Group Identifier** and **Resource Group Name** and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4730738271/p837578.png)
    
    After the preceding operations are complete, the resource group is in the **Creating** state. Wait for about 3 seconds and click the ![资源组_刷新列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5064812261/p80945.png) button. If the state of the resource group changes to **Available**, the resource group is successfully created.
    

## **Step 2: Sort resources into different resource groups**

You can specify a resource group when you create a resource. You can also transfer an existing resource across resource groups to change the resource group to which the resource belongs.

### **Sort new resources**

You can use one of the following methods to sort new resources:

-   Specify a resource group when you create a resource in the Alibaba Cloud Management Console. For more information, see the documentation of an Alibaba Cloud service.
    
-   Specify a resource group when you create a resource by calling an API operation. For more information, see the documentation of an Alibaba Cloud service.
    

The following example describes how to specify a resource group when you create a virtual private cloud (VPC) in the VPC console.

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  Create a VPC. You must specify a resource group for the VPC.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9509070371/p837625.png)
    
    For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc).
    

### **Sort existing resources**

#### **Methods**

You can use one of the following methods to sort existing resources:

-   Transfer an existing resource to the desired resource group on the [Resource Search page](https://resourcemanager.console.alibabacloud.com/resource-center) or the [Resource Group page](https://resourcemanager.console.alibabacloud.com/resource-groups) of the Resource Management console.
    
-   Call the [API operation provided by the Resource Group service to move multiple resources to a different resource group at a time](/help/en/resource-management/api-moveresources) or the API operation provided by an Alibaba Cloud service to move a resource of the service to a different resource group.
    

#### **Impacts**

Transferring resources across resource groups does not affect the resources. For example, after a resource is transferred across resource groups, the system does not restart the resource, and the network configurations and owner of the resource are not changed.

However, if you have an authorization policy that is created based on a resource group and transfer a resource from the resource group to another, the access permissions of RAM identities on the resource may be changed. For example, you grant operation permissions on resources in Resource Group A to members for Project A. In this case, the members can be used to access the resources. If a resource is transferred from Resource Group A to Resource Group B, the members can no longer be used to access the resource.

#### **Procedure**

The following example describes how to transfer a resource across resource groups on the Resource Group page of the Resource Management console.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
    
2.  In the left-side navigation pane, choose Resource Group > Resource Group. On the **Resource Group** page, find the desired resource group and click **Manage Resource** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9509070371/p837639.png)
    
3.  On the Resources tab of the page that appears, click **Transfer In**. In the Select Resource panel, select the resource that you want to transfer to the resource group and click **OK**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9509070371/p837593.png)
    

**Note**

For some types of resources, you can enable the Transfer Associated Resources feature and configure transfer rules. If a transfer rule is triggered, the system automatically transfers associated resources of primary resources to resource groups to which the primary resources belong. For example, you can enable the Transfer Associated Resources feature and configure transfer rules for the associated resources of Elastic Compute Service (ECS) instances to allow the associated resources to be automatically transferred to resource groups to which ECS instances belong. The associated resources of ECS instances include cloud disks, elastic network interfaces (ENIs), and elastic IP addresses (EIPs). For more information, see [Use the Transfer Associated Resources feature](/help/en/resource-management/resource-group/user-guide/use-the-transfer-associated-resources-feature).

## **Operations that you can perform by resource group**

After resources are sorted into different resource groups, you can use other Alibaba Cloud services to perform access control, cost allocation, and automated O&M on the resources by resource group.

**Service name**

**Scenario**

**Category**

**References**

RAM

You want to grant permissions on resources in different resource groups to different RAM users within an Alibaba Cloud account to isolate the permissions of the RAM users on the resources.

Fine-grained access control

-   [Classify resources into resource groups and grant permissions on the resource groups](/help/en/resource-management/resource-group/use-cases/use-ram-to-create-and-authorize-resource-groups)
    
-   [Use a resource group to grant a RAM user the permissions to manage a specific ECS instance](/help/en/resource-management/resource-group/use-cases/use-a-resource-group-to-manage-an-ecs-instance)
    

Billing Management

You want to create cost centers based on resource groups and query bills for different resources by resource group.

Resource cost allocation

[View billing statements by resource group](/help/en/resource-management/resource-group/use-cases/view-billing-statements-by-resource-group)

Cloud Config

You want to specify the resource groups on which audit rules can take effect and audit the compliance of the resources in the resource groups based on multiple standards.

Compliance audit

[Use resource groups and Cloud Config to audit compliance of resources based on multiple standards](/help/en/resource-management/resource-group/use-cases/use-resource-groups-and-cloud-config-to-audit-compliance-of-resources-based-on-multiple-standards)

Tag

You want to use the automatic tag inheritance feature provided by Resource Management to enable resources that are added to or created in a resource group to automatically inherit the tags that are added to the resource group.

Resource management

[Enable automatic tag inheritance from a resource group](/help/en/resource-management/tag/user-guide/enable-automatic-tag-inheritance-from-a-resource-group)

CloudMonitor

You want to create application groups from resource groups in the CloudMonitor console and add the resources in the resource groups to the application groups for monitoring and management.

O&M management

[Use resource groups and CloudMonitor to monitor and manage resources used by different business lines](/help/en/resource-management/resource-group/use-cases/use-resource-groups-and-cloudmonitor-to-monitor-and-manage-resources-used-by-different-business-lines)

Resource Orchestration Service (ROS)

You want to determine resources that require O&M by selecting resource groups and want to use ROS to implement efficient O&M and management of the resources.

O&M management

[Use resource groups and ROS to implement efficient O&M and management of resources](/help/en/resource-management/resource-group/use-cases/use-resource-groups-and-ros-for-efficient-maintenance-and-management-of-resources)

CloudOps Orchestration Service (OOS)

You want to determine resources that require O&M by selecting resource groups and want to use OOS to implement efficient O&M and management of the resources.

O&M management

[Use resource groups and OOS for efficient O&M and management of resources](/help/en/resource-management/resource-group/use-cases/use-resource-groups-and-oos-for-efficient-maintenance-and-management-of-resources)
