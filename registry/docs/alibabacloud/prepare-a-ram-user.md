This topic describes how to create a Resource Access Management (RAM) user. To prevent data security issues in your project, create a RAM user and assign it to another user. This lets you use RAM to strictly control the permissions of users who participate in a MaxCompute project.

## **Introduction to RAM users**

Resource Access Management (RAM) is an Alibaba Cloud service that lets you centrally manage user identities and resource access permissions. Using RAM, you can create and manage various identities and grant them fine-grained permissions. This ensures secure access to your cloud resources.

-   RAM users belong to an Alibaba Cloud account. They do not own resources and do not have an independent billing mechanism.
    
-   The costs incurred by a RAM user's operations on Alibaba Cloud services are billed to the Alibaba Cloud account to which the RAM user belongs.
    

## Procedure

1.  You have an [Alibaba Cloud account](/help/en/maxcompute/getting-started/create-an-alibaba-cloud-account#task-2074514).
    
2.  [Step 1: Create a RAM user](#section-4xz-ho5-50w)
    
    Create a RAM user using the [RAM](/help/en/ram/product-overview/what-is-ram#concept-oyr-zzv-tdb) service.
    
3.  [Step 2: Create an AccessKey](#section-1ar-sbb-aax)
    
    Create an AccessKey for the RAM user. The AccessKey is required to run jobs that are submitted by the RAM user.
    
4.  [(Optional) Step 3: Grant permissions to the RAM user](#section-8bl-i5x-cn9)
    
    -   To allow the RAM user to use [DataWorks](/help/en/dataworks/user-guide/what-is-dataworks#concept-wqv-qbp-r2b) to create projects visually, the Alibaba Cloud account must grant the AliyunDataWorksFullAccess permission to the RAM user.
        
    -   To allow the RAM user to manage projects and quotas in the new MaxCompute console, the Alibaba Cloud account must grant the AliyunMaxComputeFullAccess permission or a custom RAM policy to the RAM user. For more information, see [RAM permissions](/help/en/maxcompute/user-guide/ram-permissions#task-2249832).
        
5.  [Step 4: Hand over the RAM user account to another user](#section-m9j-qtf-quo)
    
    Provide the account and AccessKey information of the newly created RAM user to the intended user.
    

## Step 1: Create a RAM user

1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Identities** > **Users**.
    
3.  On the **Users** page, click **Create User**.
    
4.  On the **Create User** page, configure the user information.
    
5.  In the **User Account Information** section, configure the following parameters:
    
    1.  **Logon Name**: **The name must be 1 to 128 characters in length and can contain letters, numbers, periods (.), underscores (\_), and hyphens (-).**.
        
    2.  **Display Name**: The display name can contain up to 128 characters.
        
    3.  **Tag**: Attach tags to the RAM user to manage users based on tags.
        
    4.  **Add User**: Optional. Click **Add User** to create multiple RAM users in a single operation.
        
6.  In the **Access Mode** section, configure the following parameters:
    
    1.  **Console Access**: Set the logon password, password reset policy, and multi-factor authentication (MFA) policy.
        
    2.  **Using permanent AccessKey to access**: Generates a permanent AccessKey pair that the RAM user can use to access Alibaba Cloud through APIs or developer tools.
        
7.  Click **OK**.
    
8.  On the **User Information** page, click **Download CSV File** or click **Copy** in the **Actions** column to save the logon name and logon password of the RAM user.
    

## Step 2: Create an AccessKey

If the parent Alibaba Cloud account is configured to allow RAM users to manage their own AccessKeys, a RAM user can create an AccessKey. A RAM user can have a maximum of two AccessKeys. The following steps describe the procedure.

1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Identities** > **Users**.
    
3.  On the **Users** page, click the **User Logon Name/Display Name** of the target user to open the user details page.
    
4.  On the user details page, click the **Authentication** tab.
    
5.  On the **Authentication** tab, in the **AccessKey** section, click **Create AccessKey**.
    
6.  In the **Confirm that the current accessKey creation is for rotation purposes** dialog box, review the usage scenarios and recommendations for AccessKeys, and select a suitable credential plan. Then, select the **I confirm that it is necessary to create an AccessKey.** checkbox and click **Continue**.
    
7.  Complete the security verification as prompted and save the AccessKey ID and AccessKey secret.
    

For more information about how to manage your own AccessKeys, see [Manage the security settings of a RAM user](/help/en/ram/user-guide/manage-security-settings-of-ram-users#task-188786).

## (Optional) Step 3: Grant permissions to the RAM user

1.  In the navigation pane on the left, choose **Identities** > **Users**.
    
2.  On the **Users** page, find the target user and click **Add Permissions** in the **Actions** column.
    
3.  In the **Grant Permission** panel, select an access policy and click **OK**.
    
    You can also select multiple RAM users and click **Add Permissions** below the user list to grant permissions in a batch.
    
    1.  **Resource Scope**
        
        Permissions can be applied to a resource group only if the Alibaba Cloud service and resource type support resource groups. For more information, see [Alibaba Cloud services that support resource groups](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group#concept-flc-p3m-4fb). For an example of how to grant permissions on a resource group, see [Use a resource group to control the access of a RAM user to specific ECS instances](/help/en/ram/use-cases/use-a-resource-group-to-manage-an-ecs-instance).
        
        -   **Account**: Permissions apply within the current Alibaba Cloud account.
            
        -   **Resource Group**: Permissions apply within the specified resource group.
            
    2.  **Principal**: The principal is the RAM user to whom you want to grant permissions. The system automatically selects the current RAM user.
        
    3.  **Policy**: A policy is a collection of access permissions. Policies are available in the following two types. You can select multiple policies.
        
        The system automatically identifies high-risk system policies, such as AdministratorAccess and AliyunRAMFullAccess. Do not grant high-risk access policies unless necessary.
        
        -   System policies: These policies are created by Alibaba Cloud. The policy versions are maintained by Alibaba Cloud. You can use but cannot modify these policies. For more information, see [Alibaba Cloud services that support RAM](/help/en/ram/product-overview/services-that-work-with-ram).
            
        -   Custom policies: You manage these policies and their versions. You can create, update, and delete custom policies. For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy).
            
4.  In the list of policy names, select the required policies and add them to the selected list.
    
    -   If the RAM user needs to activate the MaxCompute service later, the Alibaba Cloud account must grant the AliyunBSSOrderAccess permission to the RAM user.
        
    -   AliyunDataWorksFullAccess: This policy must be granted if the RAM user needs to activate the MaxCompute service or add or delete projects in the legacy console.
        
    -   AliyunMaxComputeFullAccess: This policy or a custom policy can be granted if the RAM user needs to manage projects and quotas in the new MaxCompute console. For more information about the RAM permissions supported by the new console, see [RAM permissions](/help/en/maxcompute/user-guide/ram-permissions#task-2249832).
        

## Step 4: Hand over the RAM user account to another user

When you hand over the RAM user account to another user, provide the following information:

-   The RAM user's account information, which includes the following:
    
    -   The RAM user's account and password. This is the logon name and password that you saved in [Step 1](#section-4xz-ho5-50w).
        
    -   The RAM user's AccessKey ID and AccessKey secret. This is the AccessKey that you created in [Step 2](#section-1ar-sbb-aax).
        
-   The logon method and logon link for the RAM user.
    
    The RAM user can log on to the Alibaba Cloud Management Console by entering their account information at the general logon URL or at a dedicated logon address. For more information, see [Log on to the Alibaba Cloud Management Console as a RAM user](/help/en/ram/user-guide/log-on-to-the-alibaba-cloud-management-console-as-a-ram-user).
    
-   The domain name of the Alibaba Cloud account to which the RAM user belongs.
    
    Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/). In the navigation pane on the left, click **Overview**. In the **Basic Information** section, obtain the **Default Domain**.
    

## What to do next

After you create the RAM user, you can activate the MaxCompute service. For more information, see [Activate MaxCompute and DataWorks](/help/en/maxcompute/getting-started/activate-maxcompute-and-dataworks#task-dkr-hyw-5db).
