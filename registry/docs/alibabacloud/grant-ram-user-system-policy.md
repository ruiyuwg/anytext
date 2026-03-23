Alibaba Cloud allows you to use Resource Access Management (RAM) and Security Token Service (STS) to control access to resources in your account in a flexible and secure manner. This topic describes how to attach system policies to a RAM user.

## Prerequisites

A RAM user is created by using your Alibaba Cloud account. For more information, see [Create a RAM user](/help/en/ram/create-a-ram-user-1#task-187540).

## Background information

Alibaba Cloud allows you to use Resource Access Management (RAM) and Security Token Service (STS) to control access to image repositories in a flexible and secure way. By default, an Alibaba Cloud account has full access permissions on the resources that belong to the account. You can use RAM and STS to grant different permissions on image resources to different RAM users and provide temporary access permissions. Before you configure authorization policies, read [RAM documentation](/help/en/ram/product-overview/).

**Important**

After you configure authorization policies for a RAM user, you must use the RAM user to log on to the Container Registry console, create a Personal Edition instance, and set a password for the registry before you can view the images on which the RAM user has permissions.

## Grant permissions to a RAM user

Before you grant permissions to a RAM user, make sure that you do not grant permissions more than necessary to the RAM user.

**Important**

You may grant a RAM user the AdministratorAccess permission that contains management permissions on all Alibaba Cloud resources. In this case, the RAM user has all permissions on Container Registry, regardless of whether the RAM user is granted permissions before.

## **System policies in Container Registry**

By default, the AliyunContainerRegistryFullAccess and AliyunContainerRegistryReadOnlyAccess policies are created for Container Registry. You can directly attach the policies to a RAM user.

-   **AliyunContainerRegistryFullAccess**
    
    This policy grants a RAM user the same permissions on image resources as those of an Alibaba Cloud account. The RAM user can perform all operations on image resources.
    
    ```
    {
      "Statement": [
        {
          "Action": "cr:*",
          "Effect": "Allow",
          "Resource": "*"
        }
      ],
      "Version": "1"
    }
                        
    ```
    
-   **AliyunContainerRegistryReadOnlyAccess**
    
    This policy grants a RAM user the read-only permissions on all image resources. For example, the RAM user can view the repository list and pull images.
    
    ```
    {
      "Statement": [
        {
          "Action": [
            "cr:Get*",
            "cr:List*",
            "cr:Pull*"
          ],
          "Effect": "Allow",
          "Resource": "*"
        }
      ],
      "Version": "1"
    }               
    ```
    

## **Procedure**

In this example, the AliyunContainerRegistryReadOnlyAccess policy is attached to a RAM user.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  On the **Users** page, find the required RAM user, and click **Add Permissions** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6555724171/p794639.png)
    
    You can also select multiple RAM users and click **Add Permissions** in the lower part of the page to grant permissions to the RAM users at a time.
    
4.  In the **Grant Permission** panel, grant permissions to the RAM user.
    
    1.  Configure the Resource Scope parameter.
        
        -   **Account**: The permissions take effect on the current Alibaba Cloud account.
            
        -   **ResourceGroup**: The permissions take effect on a specific resource group.
            
            **Note**
            
            If you select ResourceGroup for the Resource Scope parameter, make sure that the cloud service supports resource groups. For more information, see [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group#concept-flc-p3m-4fb).
            
    2.  Specify a principal.
        
        The principal is the RAM user to which you want to grant permissions. By default, the current RAM user is specified. You can also specify another RAM user.
        
    3.  Enter **AliyunContainerRegistryReadOnlyAccess** in the **Policy** search box to search for the policy and then select the **AliyunContainerRegistryReadOnlyAccess** policy.
        
    4.  Click **Grant permissions**.
        
    
5.  Click **Close**.
    

## **References**

-   For information about how to grant fine-grained permissions to RAM users, see [Attach a custom policy to a RAM user](/help/en/acr/user-guide/attach-a-custom-policy-to-a-ram-user).
    
-   For information about authentication rules, see [RAM authentication rules](/help/en/acr/user-guide/ram-authorization-information).
