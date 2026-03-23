Activate ApsaraMQ for RocketMQ on the Alibaba Cloud official website before you send or consume messages. If your organization uses Resource Access Management (RAM) users, grant them the required permissions to access the console, call API operations, or use SDKs.

## Prerequisites

Before you begin, make sure that you have:

-   An Alibaba Cloud account with real-name verification completed. For more information, see [Sign up with Alibaba Cloud](/help/en/account/sign-up-with-alibaba-cloud)
    

## Step 1: Activate ApsaraMQ for RocketMQ

1.  Log on to the [ApsaraMQ for RocketMQ console](https://ons.console.alibabacloud.com/).
    
2.  In the dialog box, click **Activate Message Queue >>**.
    
3.  On the service activation page, select **Message Queue (MQ) Terms of Service**, and then click **Activate Now**.
    

## Step 2: Grant permissions to a RAM user

**Note**

Skip this step if you use only your Alibaba Cloud account (not RAM users) to access ApsaraMQ for RocketMQ.

Log on to the RAM console as an administrator and attach policies to the target RAM user.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  On the **Users** page, find the target RAM user and click **Add Permissions** in the **Actions** column.
    
    ![RAM user permissions](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6555724171/p794639.png)
    
    To grant permissions to multiple RAM users at once, select the users and click **Add Permissions** at the bottom of the page.
    
4.  In the **Grant Permission** panel, configure the following parameters:
    
    1.  **Resource Scope**: Select the scope of the authorization.
        
        -   **Account**: The authorization applies to all resources under the current Alibaba Cloud account.
            
        -   **ResourceGroup**: The authorization applies only to resources in a specific resource group.
            
        
        **Important**
        
        If you select **ResourceGroup**, make sure the cloud service supports resource groups. For more information, see [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group). For an example, see [Use a resource group to grant a RAM user the permissions to manage a specific ECS instance](/help/en/ram/use-cases/use-a-resource-group-to-manage-an-ecs-instance).
        
    2.  **Principal**: The system selects the current RAM user by default. Verify that the correct user is selected.
        
    3.  **Policy**: Select one or more policies to attach. ApsaraMQ for RocketMQ supports both system policies and custom policies.
        
        -   **System policies** are predefined by Alibaba Cloud and cannot be modified. Version updates of system policies are maintained by Alibaba Cloud. For a list of supported services, see [Services that work with RAM](/help/en/ram/product-overview/services-that-work-with-ram).
            
            **Note**
            
            The system flags high-risk policies such as `AdministratorAccess` and `AliyunRAMFullAccess`. Avoid attaching these policies unless strictly necessary.
            
        -   **Custom policies** are user-defined. Create, update, or delete them based on your requirements. For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy).
            
    4.  Click **Grant permissions**.
        
5.  Click **Close**.
    

### System policies for ApsaraMQ for RocketMQ

Choose a policy based on the level of access the RAM user needs.

**Administration**

**Policy name**

**Description**

`AliyunMQFullAccess`

Full management access, equivalent to Alibaba Cloud account-level permissions. Covers all console actions, message sending, and message subscription.

`AliyunMQReadOnlyAccess`

Read-only access. Allows viewing resource information in the console or through API operations. Does not allow resource modifications.

**Application development**

**Policy name**

**Description**

`AliyunMQPubOnlyAccess`

Send-only access. Allows sending messages through SDKs using all resources under the Alibaba Cloud account.

`AliyunMQSubOnlyAccess`

Subscribe-only access. Allows subscribing to messages through SDKs using all resources under the Alibaba Cloud account.

**Note**

System policies grant broad permissions. For example, `AliyunMQFullAccess` covers all ApsaraMQ for RocketMQ resources. For fine-grained access control on specific resource types -- such as restricting a RAM user to managing only topics in the console -- use custom policies instead. For more information, see [Custom policies for ApsaraMQ for RocketMQ](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/security-and-compliance/custom-policies-of-apsaramq-for-rocketmq#task-2335145).

### Recommended policy per role

Assign the most restrictive policy that meets the RAM user's needs:

**Role**

**Recommended policy**

**Access scope**

Developers who only send messages

`AliyunMQPubOnlyAccess`

SDK message sending

Developers who only consume messages

`AliyunMQSubOnlyAccess`

SDK message subscription

Operations staff who monitor resources

`AliyunMQReadOnlyAccess`

Console and API read-only

Administrators who manage the full service

`AliyunMQFullAccess`

All console actions, sending, and subscription

If none of the system policies match your requirements, create a custom policy that targets specific resources and actions.

## What to do next

Go to the [ApsaraMQ for RocketMQ console](https://ons.console.alibabacloud.com/) to create resources. For more information, see [Create resources](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/getting-started/create-resources-1#task-2446144).
