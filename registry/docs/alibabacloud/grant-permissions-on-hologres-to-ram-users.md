Grant Resource Access Management (RAM) users access permissions to required resources to implement the principle of least privilege. This practice reduces security risks by eliminating the need to share Alibaba Cloud account credentials or AccessKey pairs. This topic describes how to grant permissions to a RAM user from your Alibaba Cloud account and explains the function of each permission.

## Background information

Resource Access Management (RAM) is a permission management system provided by Alibaba Cloud.

RAM is primarily used to control permissions within your account system.

You can use RAM to create RAM users within the permission scope of your Alibaba Cloud account and grant different permissions to each RAM user. These permissions can include actions such as purchasing or deleting instances, upgrading or downgrading instance resources, modifying network types, and viewing instance information.

The access control for the development permissions of a RAM user on an instance works as follows:

-   If an Alibaba Cloud account does not grant permissions to a RAM user, the RAM user cannot view or manage instances in the console.
    
-   An Alibaba Cloud account can directly grant development permissions on an instance to a RAM user. Even if the RAM user cannot manage the instance in the console, they can connect to development tools for data development. For more information, see [Grant a RAM user development permissions on an instance](/help/en/hologres/security-and-compliance/grant-the-development-permissions-on-a-hologres-instance-to-ram-users#task-2569531).
    

## Grant permissions to a RAM user

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the navigation pane on the left, choose **Identities** > **Groups**.
    
3.  On the **Groups** page, find the RAM user group that you want to manage and click **Attach Policy** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1377876171/p794671.png)
    
    You can also select multiple RAM user groups and click **Attach Policy** in the lower part of the page to grant permissions to the RAM user groups at a time.
    
4.  Add permissions.
    
    In the **Add Permissions** dialog box, configure the parameters.
    
    **Note**
    
    -   Because HoloWeb cannot belong to a resource group, you cannot log on to or use HoloWeb if permissions are granted based on a specified resource group.
        
    -   The permissions mentioned below only determine whether a RAM user can log on to and use HoloWeb. If a RAM user needs to connect to and use a Hologres instance, you must grant permissions on the instance details page. For more information, see [Grant a RAM user development permissions on an instance](/help/en/hologres/security-and-compliance/grant-the-development-permissions-on-a-hologres-instance-to-ram-users#task-2569531).
        
    
    1.  Select a resource scope.
        
        -   **Account Level**: The permissions take effect within the current Alibaba Cloud account.
            
        -   **Resource Group Level**: The permissions take effect within the specified resource group.
            
            **Important**
            
            You can grant permissions based on a resource group only if the corresponding Alibaba Cloud service and resource type support resource groups. For more information, see [Alibaba Cloud services that support resource groups](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group#concept-flc-p3m-4fb). For an example of resource group authorization, see [Use a resource group to control the permissions of a RAM user on specified ECS instances](/help/en/ram/use-cases/use-a-resource-group-to-manage-an-ecs-instance).
            
    2.  Select an authorization entity.
        
        The authorization entity is the RAM user to whom you want to grant permissions. The system automatically selects the current RAM user.
        
    3.  Select access policies.
        
        An access policy is a collection of access permissions. Access policies are categorized into two types. You can select multiple access policies at a time.
        
        -   System policies: These policies are created and maintained by Alibaba Cloud. You can use but not modify these policies. For more information, see [Alibaba Cloud services that support RAM](/help/en/ram/product-overview/services-that-work-with-ram).
            
            **Note**
            
            The system automatically identifies high-risk system policies, such as AdministratorAccess and AliyunRAMFullAccess. When you grant permissions, avoid granting unnecessary high-risk access policies.
            
            You can grant the following access policies to a RAM user to give the user all permissions as described in the following table.
            
            **Access policy**
            
            **Description**
            
            AliyunHologresFullAccess
            
            Permissions to manage the Hologres service.
            
            **Note**
            
            This access policy does not include permissions to use instances. A superuser must create a user in the instance before the user can log on to and use the Hologres instance. For more information, see [FAQ about RAM user permissions related to instance usage](#section-7k8-wmn-0nq).
            
            After this permission is granted, the RAM user has the following permissions:
            
            -   View information about all instances in the console, including the instance list, instance details, and monitoring pages.
                
            -   Perform billing-related operations, such as purchasing, upgrading or downgrading, renewing, stopping, and deleting instances.
                
            -   Log on to and use HoloWeb.
                
            
            -   After a RAM user purchases an instance, the RAM user becomes a superuser of the instance and has all permissions on the instance. The Alibaba Cloud account also becomes a superuser of the instance.
                
            -   For instances created by an Alibaba Cloud account, a RAM user does not have permissions on the instances by default. The Alibaba Cloud account must grant the required permissions to the RAM user in the instance. For more information, see [Grant a RAM user development permissions on an instance](/help/en/hologres/security-and-compliance/grant-the-development-permissions-on-a-hologres-instance-to-ram-users#task-2569531).
                
            -   The RAM user does not have the permission to view all users on the **Users** page of the console. You must grant the `listuser` permission (AliyunRAMReadOnlyAccess) to the RAM user so that the user can view user information on the **Users** page of the console.
                
            
            AliyunHologresWarehouseFullAccess
            
            Permissions to manage Hologres virtual warehouses.
            
            **Note**
            
            This access policy does not include permissions to use instances. A superuser must create a user in the instance before the user can log on to and use the Hologres instance. For more information, see [FAQ about RAM user permissions related to instance usage](#section-7k8-wmn-0nq).
            
            After this permission is granted, the RAM user has the following permissions:
            
            -   Manage virtual warehouses, including creating, deleting, scaling out, scaling in, stopping, and resuming virtual warehouses.
                
            -   Configure the scheduled scaling feature.
                
            -   Log on to and use HoloWeb.
                
            
            AliyunBSSOrderAccess
            
            Permissions to view, pay for, and cancel orders in User Center (BSS).
            
            After this permission is granted, the RAM user can upgrade or downgrade the configuration of an instance and renew the instance in the console.
            
            AliyunRAMReadOnlyAccess
            
            Read-only permissions on Resource Access Management (RAM).
            
            After this permission is granted, the RAM user can view all RAM users and RAM roles under the current Alibaba Cloud account when adding a user on the **Users** page of HoloWeb.
            
            AliyunHologresReadOnlyAccess
            
            Read-only permissions on Hologres.
            
            After this permission is granted, the RAM user has the following permissions:
            
            -   View all information about instances in the console, including the instance list and instance details.
                
            -   Log on to and use HoloWeb.
                
            -   No permissions to perform billing-related operations, such as purchasing, upgrading, or downgrading instances.
                
            -   No permissions to manage instances. The Alibaba Cloud account must grant instance-level permissions to the RAM user.
                
            -   The RAM user cannot view all RAM users under the current Alibaba Cloud account on the User Management page of the console or HoloWeb. To view the RAM users, you must grant the `AliyunRAMReadOnlyAccess` permission.
                
            
            **Note**
            
            -   For an instance purchased by a RAM user, both the Alibaba Cloud account and the RAM user are superusers by default.
                
            -   For an instance purchased by an Alibaba Cloud account, a RAM user can use the instance only after being granted permissions by the Alibaba Cloud account.
                
            
        -   Custom policies: These policies are managed by you. You can create, update, delete, and maintain the policy versions. For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy).
            
            **Important**
            
            When you configure an access policy for a user, make sure to include the **AliyunRAMReadOnlyAccess** policy to ensure that the user can access the console.
            
            You can [create a custom policy in script mode](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m).
            
            The following custom permissions are supported by Hologres:
            
            **Important**
            
            When you use the code, you must delete the comments. Otherwise, the code is unavailable.
            
            ```
            {
                "Statement": [
                    {  // Grant all permissions at once. If you configure this statement, you do not need to configure the other permissions below.
                        "Effect": "Allow",
                        "Action": "hologram:*",// All operations are allowed.
                        "Resource": "acs:hologram:*:<AccountID>:instance/*"// For all instances in all regions. The asterisk (*) cannot be replaced with an instance ID.
                    },
                    {   // Grant the RAM user permissions to perform all operations (hologram:*) on all Hologres instances (instance/*) that belong to the Alibaba Cloud account (<AccountID>) in the specified region (cn-<region>).
                        "Effect": "Allow",
                        "Action": "hologram:*",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"
                    },
                    {   // Delete an instance.
                        "Effect": "Allow",
                        "Action": "hologram:DeleteInstance",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"// This must be configured to delete instances. If not configured, you cannot delete instances, but a success message is still displayed.
                    },
                    {   // Purchase permission for a RAM user. A RAM user can purchase instances only after this permission is configured.
                        "Effect": "Allow",
                        "Action": "bss:PayOrder",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"// Test failed.
                    },
                    {   // Display instance details.
                        "Effect": "Allow",
                        "Action": "hologram:GetInstance",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*" // The asterisk (*) can be replaced with an instance ID.
                    },
                    { // Display the instance list.
                        "Effect": "Allow",
                        "Action": "hologram:ListInstances",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"// The asterisk (*) cannot be replaced with an instance ID.
                    },
                    {  // Pause an instance.
                        "Effect": "Allow",
                        "Action": "hologram:StopInstance",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"
                    },
                    {  // Resume an instance.
                        "Effect": "Allow",
                        "Action": "hologram:ResumeInstance",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"
                    },
                    {  // Modify the network type.
                        "Effect": "Allow",
                        "Action": "hologram:UpdateInstanceNetworkType",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"
                    }.
                    {  // Access HoloWeb.
                        "Effect": "Allow",
                        "Action": "hologram:HoloWebAccess",
                        "Resource": "*"
                    }      
                ],
                "Version": "1"
            }
            ```
            
            The following table describes the parameters.
            
            **Parameter**
            
            **Description**
            
            <region>
            
            The region, such as **beijing**.
            
            <AccountID>
            
            The ID of the Alibaba Cloud account.
            
            \*
            
            Indicates all instances in the Alibaba Cloud account. You can also replace the asterisk (\*) with a specific instance ID.
            
            The following is an example statement.
            
            ```
            acs:hologram:cn-beijing:4322xxxxx:instance/hhhgggxxxx
            ```
            
            **Important**
            
            For the following authorization options, the asterisk (`*`) in `instance/*` cannot be replaced with a specific instance ID. It must be set to `*`:
            
            ```
            {
                "Statement": [
                    {  // Grant all permissions at once. If you configure this statement, you do not need to configure the other permissions below.
                        "Effect": "Allow",
                        "Action": "hologram:*",// All operations are allowed.
                        "Resource": "acs:hologram:*:<AccountID>:instance/*"// For all instances in all regions.
                    },
                    {   // Grant the RAM user permissions to perform all operations (hologram:*) on all Hologres instances (instance/*) that belong to the Alibaba Cloud account (<AccountID>) in the specified region (cn-<region>).
                        "Effect": "Allow",
                        "Action": "hologram:*",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"
                    },
                    {   // Delete an instance.
                        "Effect": "Allow",
                        "Action": "hologram:DeleteInstance",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"
                    },
                    {   // Purchase permission for a RAM user. This statement must be added if the user needs to purchase instances.
                        "Effect": "Allow",
                        "Action": "bss:PayOrder",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"
                    },
                    { // Display the instance list.
                        "Effect": "Allow",
                        "Action": "hologram:ListInstances",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"
                    },
                    {  // Pause an instance.
                        "Effect": "Allow",
                        "Action": "hologram:StopInstance",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"
                    },
                    {  // Resume an instance.
                        "Effect": "Allow",
                        "Action": "hologram:ResumeInstance",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"
                    },
                    {  // Display instance monitoring alerts.
                        "Effect": "Allow",
                        "Action": "cms:DescribeMetricList", "cms:QueryMetricList"
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"
                    },
                    {  // Modify the network type.
                        "Effect": "Allow",
                        "Action": "hologram:UpdateInstanceNetworkType",
                        "Resource": "acs:hologram:cn-<region>:<AccountID>:instance/*"
                    }
                ],
                "Version": "1"
            }
            ```
            
        
    
5.  Click **Confirm Authorization Policy** and then click **Disable**.
    

## FAQ about RAM user permissions related to the console

The Hologres console integrates RAM authentication and some development permissions for instances. The following are frequently asked questions about permissions related to the Hologres console:

-   A RAM user cannot view the instance list or instance IDs.
    
    -   Symptom
        
        The RAM user selects the correct region but cannot view the purchased instances. The following error message is displayed: **You are not authorized to view all instances. Contact your Alibaba Cloud account to go to the RAM console and grant the hologram:ListInstances permission on the "xxx/\*" resource to the current user.**
        
    -   Cause
        
        The current RAM user does not have the permission to view the instance list.
        
    -   Solution
        
        Log on to the [RAM console](https://ram.console.alibabacloud.com/overview) using your Alibaba Cloud account and grant the **AliyunHologresReadOnlyAccess** permission to the RAM user to display the instance list.
        
-   A RAM user does not have permissions to manage an instance.
    
    -   Symptom
        
        A RAM user who is granted superuser permissions cannot purchase, upgrade, or downgrade an instance, or change the billing method of an instance from **Pay-as-you-go** to subscription. The following error message is displayed: **RAM user authentication failed.**
        
    -   Cause
        
        Operations such as purchasing, upgrading, downgrading, and changing the billing method involve bills and are controlled by the Alibaba Cloud account. The current RAM user does not have the required permissions.
        
    -   Solution
        
        Log on to the [RAM console](https://ram.console.alibabacloud.com/overview) using your Alibaba Cloud account and grant the **AliyunHologresFullAccess** and **AliyunBSSOrderAccess** permissions, which are related to instance fees, to the RAM user.
        

## FAQ about RAM user permissions related to instance usage

-   Cannot log on to and use a Hologres instance.
    
    -   Symptom
        
        The following error is reported: `role "<role_name>" does not exist`.
        
    -   Cause
        
        After you create a Hologres instance, only the Alibaba Cloud account and the RAM user who purchased the instance are created as superusers of the instance by default. Other RAM users must be created as instance users by a superuser before they can log on to and use the Hologres instance.
        
    -   Solution
        
        **Note**
        
        You can execute the `select * from pg_user;` command to view the superusers of the current instance.
        
        -   On the **Users** page of HoloWeb, you can add a user and grant permissions to the user. For more information, see [Manage users](/help/en/hologres/user-guide/manage-users#concept-1954882).
            
        -   You can log on to the instance and execute the `create user "<role_name>"` statement. For more information, see [Hologres permission model](/help/en/hologres/security-and-compliance/hologres-permission-model/#concept-2021277).
            
-   Cannot view the User Management and DB Management pages.
    
    -   Symptom
        
        A RAM user logs on to the console but cannot view any content on the **Users** and **DB Management** pages. The following error is displayed: `You are not authorized. Contact a superuser to add the current account to the instance.`
        
    -   Cause
        
        The current RAM user does not have development permissions on the instance. You must grant specific development permissions to display the relevant information.
        
    -   Solution
        
        Use your Alibaba Cloud account or a RAM user with superuser permissions to grant development permissions on the instance to this RAM user. For more information, see [Grant a RAM user development permissions on an instance](/help/en/hologres/security-and-compliance/grant-the-development-permissions-on-a-hologres-instance-to-ram-users#task-2569531).
        
-   Accidentally deleted a superuser
    
    -   Symptom
        
        All superusers of an instance are accidentally changed to regular users.
        
        **Note**
        
        If all superusers of an instance are accidentally changed to regular users, you cannot perform most operations, including user management and instance-related operations.
        
    -   Solution
        
        You can join the Hologres official Q&A DingTalk group to contact technical support. For more information, see [Online support](/help/en/hologres/support/obtain-online-support-for-hologres#uicontrol-f45-pb4-6n1).
