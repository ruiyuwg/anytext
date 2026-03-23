You can use Resource Group to manage ApsaraDB for MongoDB resources as a collection and apply Resource Access Management (RAM) policies that authorize actions only on resources within a specific group. This lets you enforce the principle of least privilege (PoLP) in your Alibaba Cloud account.

**Note**

You can scope permissions to a resource group only for [supported resource types](#a4133b8e06d0v) and actions. For [unsupported actions](#2a99d29ff0e2t), any resource group scope in a policy is ignored, and permissions must be granted at the account level instead.

## **How it works**

[Resource groups](/help/en/resource-management/resource-group/product-overview/resource-group-overview) organize your resources by project or environment. Once resources are grouped, you can attach a RAM policy to an identity (such as a RAM user, user group, or role) that scopes its permissions exclusively to that group. For more information, see [Resource grouping and authorization](/help/en/resource-management/resource-group/use-cases/use-ram-to-create-and-authorize-resource-groups#DAS).

This approach provides two key benefits:

-   **Fine-grained access control**: Instead of granting account-wide permissions, you can limit an identity's access to only the resources within a specific group. This helps isolate project-specific workloads and reduce the risk of unintended access.
    
-   **Simplified management**: When new resources are added to a resource group, RAM identities with permissions scoped to that group automatically gain access. You do not need to update RAM policies each time a new resource is created.
    

## **Grant resource group-level permissions to a RAM** **user**

This section demonstrates how to grant a RAM user permission to access only the resources of ApsaraDB for MongoDB within a specific resource group.

### **1\. Prerequisites**

-   [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user).
    
-   Create a resource group and ensure that the target resources are in it. If you need help doing this, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb), [Add resources to a resource group automatically](/help/en/resource-management/resource-group/user-guide/automatic-resource-transfer/), and [Add resources to a resource group manually](/help/en/resource-management/resource-group/user-guide/resource-manual-transfer-group).
    

### **2\. Grant permissions**

You can grant resource group-level permissions from either the Resource Management console or the RAM console.

### **Resource Management console**

-   Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
    
-   On the **Resource Group** page, find the target resource group and click **Manage Permission** in the **Actions** column.
    
-   On the **Permissions** tab, click **Grant Permission**.
    
-   In the **Grant Permission** panel, configure the principal and access policy.
    
    -   **Principal**: Select a RAM user.
        
    -   **Policy**: Select a **System Policy** or a **Custom Policy**. For more information, see [Create a custom permission policy](/help/en/ram/create-a-custom-policy).
        
-   Click **Grant permissions**.
    

For more information, see [Grant permissions on resource groups to a RAM identity](/help/en/resource-management/resource-group/user-guide/add-ram-authorization).

### **RAM console**

-   Log on to the [RAM console](https://ram.console.alibabacloud.com/) using an Alibaba Cloud account or a RAM administrator account.
    
-   In the navigation pane on the left, choose **Identities** > **Users**. On the **Users** page, find the target RAM user and click **Add Permissions** in the **Actions** column.
    
-   In the **Grant Permission** panel, add permissions for the RAM user.
    
    -   **Resource Scope**: Select **Resource Group**.
        
    -   **Principal**: Select an existing RAM user or the RAM user created in the previous step.
        
    -   **Policy**: Select a **System Policy** or a **Custom Policy**. For more information, see [Create a custom permission policy](/help/en/ram/create-a-custom-policy).
        
-   Click **OK**.
    

For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).

## **Supported resources**

The following resources from ApsaraDB for MongoDB support resource group-level authorization:

**Alibaba Cloud service**

**Service code**

**Resource type**

ApsaraDB for MongoDB

dds

dbinstance : instance

**Note**

To request support for resource types not listed here, submit feedback via [**Resource Management console**](https://resourcemanager.console.alibabacloud.com/resource-groups).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0583374671/p1026404.png)

## **Unsupported actions**

The following actions of ApsaraDB for MongoDB do not support resource group-level authorization:

**Action**

**Description**

dds:CancelActiveOperationTasks

\-

dds:CheckServiceLinkedRole

Checks whether a service-linked role (SLR) is created for an instance.

dds:DescribeActiveOperationMaintenanceConfig

\-

dds:DescribeActiveOperationTask

Queries the detailed information about tasks of an ApsaraDB for MongoDB instance.

dds:DescribeActiveOperationTaskRegion

Query maintenance task types and task quantities.

dds:DescribeAvailableZones

\-

dds:DescribeDBInstanceByConnectionStringForInner

\-

dds:DescribeDBInstanceSpecInfo

Queries the specifications of an ApsaraDB for MongoDB instance.

dds:DescribeDetachedInstances

\-

dds:DescribeEventMetaInfo

\-

dds:DescribeHistoryEventsStat

\-

dds:DescribeKmsKeys

Queries Key Management Service (KMS) keys that are available for disk encryption.

dds:DescribeResourceQuota

\-

dds:DescribeUserEventConfig

\-

dds:InitializeDdsPermission

\-

dds:ModifyActiveOperationMaintenanceConfig

\-

dds:ModifyActiveOperationTask

\-

dds:ModifyEventInfo

\-

dds:ModifyTaskInfo

Modifies the information of a task in the task center for an ApsaraDB for MongoDB instance.

dds:ModifyUserEventConfig

\-

For these actions, you must create a custom policy with the scope set to **Account**.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1864998371/p907212.png)Customize the following policy examples to suit your needs:

-   Allow read-only access
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "dds:DescribeActiveOperationMaintenanceConfig",
            "dds:DescribeActiveOperationTask",
            "dds:DescribeActiveOperationTaskRegion",
            "dds:DescribeAvailableZones",
            "dds:DescribeDBInstanceByConnectionStringForInner",
            "dds:DescribeDBInstanceSpecInfo",
            "dds:DescribeDetachedInstances",
            "dds:DescribeEventMetaInfo",
            "dds:DescribeHistoryEventsStat",
            "dds:DescribeKmsKeys",
            "dds:DescribeResourceQuota",
            "dds:DescribeUserEventConfig"
          ],
          "Resource": "*"
        }
      ]
    }
    ```
    
-   Allow full access
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "dds:CancelActiveOperationTasks",
            "dds:CheckServiceLinkedRole",
            "dds:DescribeActiveOperationMaintenanceConfig",
            "dds:DescribeActiveOperationTask",
            "dds:DescribeActiveOperationTaskRegion",
            "dds:DescribeAvailableZones",
            "dds:DescribeDBInstanceByConnectionStringForInner",
            "dds:DescribeDBInstanceSpecInfo",
            "dds:DescribeDetachedInstances",
            "dds:DescribeEventMetaInfo",
            "dds:DescribeHistoryEventsStat",
            "dds:DescribeKmsKeys",
            "dds:DescribeResourceQuota",
            "dds:DescribeUserEventConfig",
            "dds:InitializeDdsPermission",
            "dds:ModifyActiveOperationMaintenanceConfig",
            "dds:ModifyActiveOperationTask",
            "dds:ModifyEventInfo",
            "dds:ModifyTaskInfo",
            "dds:ModifyUserEventConfig"
          ],
          "Resource": "*"
        }
      ]
    }
    ```
    

**Important**

Granting account-level permissions allows access to all relevant resources in the account. Always follow PoLP.

## **FAQ**

### How do I find which resource group a resource belongs to?

-   Method 1: From the service console
    
    -   Navigate to the service console where the resource was created. On the resource's details page, you can typically find the resource group listed in the basic information section.
        
-   Method 2: From the Resource Management console
    
    -   Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/).
        
    -   Choose **Resource Center** > **Resource Search**.
        
    -   In the left pane, select the account that owns the target resource (the default is **Current Account**).
        
    -   Use filter conditions to find your resource.
        
    -   The **Resource Group** column shows which group the resource belongs to.
        

### **How do I view all resources** **in a specific resource group?**

-   Method 1:
    
    -   Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/).
        
    -   Choose **Resource Center** > **Resource Search**.
        
    -   In the left pane, under the account that owns the resources (the default is **Current Account**), click the name of the desired resource group.
        
    -   In the right pane, select the cloud service from the **Select resource types** drop-down list.
        
    -   All resources in that group will be displayed.
        
-   Method 2:
    
    -   Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/).
        
    -   Choose **Resource Group** > **Resource Group**.
        
    -   Find the desired resource group and click **Manage Resource** in the **Actions** column.
        
    -   On the resource management page, select the cloud service from the **Service** drop-down list.
        
    -   All resources in that group will be displayed.
        

### How do I move multiple resources to a different resource group in batch**?**

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/).
    
2.  Choose **Resource Group** > **Resource Group**.
    
3.  Find the desired resource group and click **Manage Resource** in the **Actions** column.
    
4.  On the resource management page, use filter conditions to find the resources you want to move.
    
5.  Select the checkbox for each resource.
    
6.  At the bottom of the page, click **Transfer**.
    
7.  In the dialog box, select the destination resource group and click **Confirm**.
