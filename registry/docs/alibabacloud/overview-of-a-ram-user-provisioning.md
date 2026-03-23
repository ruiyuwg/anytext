This topic describes the principles of a Resource Access Management (RAM) user provisioning, and the procedure and limits on using a RAM user provisioning.

## **Principles**

A CloudSSO user can access the cloud resources of an account in a resource directory by using the **RAM role-based logon** or **RAM user-based logon** method. The following table describes the differences between the two methods. This topic describes the procedure on using the RAM user-based logon method. You can create a RAM user provisioning for an account in your resource directory to create a RAM user that has the same username as your CloudSSO user. This way, the CloudSSO user can access the resources of the account as the RAM user.

**Access method**

**Description**

**Scenario**

**References**

RAM user-based logon

Enterprises can use CloudSSO to manage the users that are allowed to access Alibaba Cloud resources in a centralized manner. You can create a RAM user provisioning to allow a CloudSSO user to log on to the Alibaba Cloud Management Console by using a RAM user within an account in a resource directory. This way, the CloudSSO user can access the resources of the account as the RAM user.

This method is suitable for cloud resources that cannot be accessed by assuming RAM roles.

[Create a RAM user provisioning](/help/en/cloudsso/user-guide/create-a-ram-user-provisioning#task-2258334)

RAM role-based logon

Enterprises can use CloudSSO to manage the users that are allowed to access Alibaba Cloud resources in a centralized manner. You can create and assign an access configuration to allow a CloudSSO user to log on to the Alibaba Cloud Management Console by using the single sign-on (SSO) logon method and a RAM role within an account in a resource directory. This way, the CloudSSO user can access the cloud resources of the account as the RAM role.

This method is suitable for cloud resources that can be accessed by assuming RAM roles.

-   [Create an access configuration](/help/en/cloudsso/user-guide/create-an-access-configuration#task-2091273)
    
-   [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory#task-2090971)
    

## **Procedure**

1.  Create a RAM user provisioning by using the management account of a resource directory in the CloudSSO console.
    
    After you create the RAM user provisioning, a RAM user that has the same username as your CloudSSO user is created within the selected member in the resource directory. For more information, see [Step 1: Create a RAM user provisioning](/help/en/cloudsso/user-guide/create-a-ram-user-provisioning#section-a43-j1x-g1x).
    
2.  Access the member by using the management account and grant permissions on the member to the created RAM user.
    
    By default, a RAM user does not have any permissions. You must grant the required permissions to the RAM user before it can access resources. For more information, see [Step 2: Grant permissions to the RAM user](/help/en/cloudsso/user-guide/create-a-ram-user-provisioning#section-rsc-z7v-jfk).
    
3.  The CloudSSO user accesses the resources that belong to the member within the resource directory as the RAM user.
    
    For more information, see [Step 3: Use the CloudSSO user to access Alibaba Cloud resources](/help/en/cloudsso/user-guide/create-a-ram-user-provisioning#section-itu-nbj-fmx).
    

## **Limits**

-   You must log on to the CloudSSO user portal as a CloudSSO user and then use a RAM user that is created by using the RAM user provisioning feature to log on to the Alibaba Cloud Management Console. You cannot use the RAM user to log on to the Alibaba Cloud Management Console by using its username and password.
    
-   If a RAM user provisioning event exists, you cannot delete the provisioned RAM user. You can delete an existing provisioned RAM user only after you delete the related RAM user provisioning event. For more information, see [Delete a RAM use provisioning](/help/en/cloudsso/user-guide/delete-a-ram-user-provisioning).
