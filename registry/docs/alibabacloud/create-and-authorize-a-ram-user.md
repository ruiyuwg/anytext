This topic describes how to create a Resource Access Management (RAM) user and grant permissions to it for fine-grained access control over your cloud resources.

## Why use RAM users?

An Alibaba Cloud account is equivalent to the root user in Linux. It is the most privileged principal. When multiple employees in your enterprise need to collaborate on cloud resources, you can create multiple **RAM users** under your Alibaba Cloud account. Then, you can assign the minimum permissions required for each user to perform their tasks.

**Item**

**Alibaba Cloud account**

**RAM user**

Identity role

The owner of resources. Has full ownership of all assets and the highest permissions.

A user of resources and services. Permissions are granted by the Alibaba Cloud account. A RAM user usually corresponds to a specific person or application.

Owns cloud resources

Yes

No. Resources are owned by the Alibaba Cloud account.

Default permissions

Full permissions. Cannot be restricted.

No permissions by default. Must be granted permissions by the Alibaba Cloud account.

Recommended use

Only for key management operations, such as authorization, payment, and account management.

Daily development, O&M, deployment, and other tasks.

## **Procedure**

1.  Use the quick start feature to [create a RAM user](#7128279ca8el7) with Auditing Administrator permissions.
    
2.  [Log on to the RAM console as the RAM user you created](#3c798b1105zgh) and complete the initial configuration.
    
3.  [Verify that the permissions are granted to the RAM user successfully](#8ccca22f72wum).
    

## Step 1: Create a RAM user

### Quickly create a user and grant it permissions

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) using your Alibaba Cloud account.
    
2.  On the **Overview** page, click the ****Get Started**** tab. In the **Cloud functional users** section, click **Show All Workflows**, then select a workflow.
    
    This topic provides an example of the **Auditing Administrator** workflow. An **Auditing Administrator** has full access to Cloud Config, ActionTrail, and Simple Log Service (SLS). They can also query the status of all Alibaba Cloud resources.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0224253671/p1027508.png)
    
3.  View or modify the parameters.
    
    You can view all preset parameters but can modify only some of them. The parameters that are available for modification are displayed in the console.
    
4.  Click **Perform**.
    
5.  After the configuration is complete, save the username and password of the RAM user.
    

**Note**

1.  You can [modify the configuration of the RAM user](/help/en/ram/user-guide/modify-the-basic-information-about-a-ram-user) that is created using the quick start feature.
    
2.  To create a RAM user and grant it permissions manually, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) and [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    

### Set a logon suffix for the RAM user (Recommended)

The default logon name for a RAM user is `<UserName>@<AccountAlias>.onaliyun.com`. In this format, `<AccountAlias>.onaliyun.com` is the default logon suffix of the Alibaba Cloud account, and `<AccountAlias>` is the account alias. By default, the account alias is the account ID of the Alibaba Cloud account. We recommend setting an easy-to-remember alias for your Alibaba Cloud account to simplify the logon process for RAM users. This alias replaces the default 16-digit account ID in the logon name. For best results, set this alias before you create RAM users.

Follow these steps to modify the default logon suffix:

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) using your Alibaba Cloud account.
    
2.  In the left-side navigation pane, click **Settings**. On the **Settings** page, click **Domain**. Then, click **Edit** in the **Actions** column of the default domain name.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4712527271/p837381.png)
    

**Note**

-   Only the Alibaba Cloud account or a RAM administrator can set or modify the account alias and logon suffix.
    
-   After an alias is set, it takes effect immediately. The logon names of all new RAM users will use this alias by default.
    

## Step 2: Log on as the RAM user

1.  A RAM user can use the following links to log on to the console. Use the dedicated logon URL to avoid entering the account's default logon suffix.
    
    ## General logon URL
    
    Use the newly created RAM user to log on to the [Alibaba Cloud Management Console](https://signin.alibabacloud.com/login.htm).
    
    **Note**
    
    The logon page for RAM users is different from the logon page for Alibaba Cloud accounts. For more information, see [Log on to the Alibaba Cloud Management Console as a RAM user](/help/en/ram/user-guide/log-on-to-the-alibaba-cloud-management-console-as-a-ram-user).
    
    ## Dedicated logon URL
    
    Log on to the [RAM console](https://ram.console.alibabacloud.com). On the **Overview** page, you can find the logon URL for RAM users. This URL allows them to log on to the Alibaba Cloud Management Console without entering the **default logon suffix** of the account.
    
    ![登录地址-zh.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0304853071/p742110.jpg)
    
2.  On the **RAM User Logon** page, enter the RAM username and click **Next**.
    
3.  Enter the RAM user's logon password and click **Log On**.
    
4.  When you log on for the first time, you must [bind a multi-factor authentication (MFA) device](/help/en/ram/user-guide/bind-an-mfa-device-to-a-ram-user). For subsequent logons, you will be prompted to enter an MFA code.
    
5.  Reset the RAM user password: RAM users created using the quick start feature are required to reset their passwords upon their first logon.
    

## Step 3: Verify the RAM user's permissions

The Auditing Administrator has full access to Cloud Config, ActionTrail, and SLS, and can query the status of all Alibaba Cloud resources. This section uses **ActionTrail** and **RAM** as examples to verify that the permissions were granted.

1.  After you log on to the console as the RAM user, hover over the **profile picture** in the upper-right corner. Then, you can view the RAM user's information.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0224253671/p1027561.png)
    
2.  Go to the [ActionTrail console](actiontrail.console.alibabacloud.com/) and perform an operation.
    
    For example, in the left-side navigation pane, choose **Events** > **Event Query** to view event records for all services.
    
3.  Go to the [RAM console](https://ram.console.alibabacloud.com/).
    
    1.  In the left-side navigation pane, choose **Identities** > **Users** to view all RAM users.
        
    2.  Repeat the steps in [Create a RAM user](#7128279ca8el7). The "Access Denied" error message is displayed.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0224253671/p1027602.png)
        

### **Troubleshooting**

If an access denied error occurs when a RAM user tries to access a resource, see [How do I troubleshoot an access denied error?](/help/en/ram/support/how-to-troubleshoot-an-access-denied-error)

## **References**

-   [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user)
    
-   [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user)
    
-   [Manage console logon settings for a RAM user](/help/en/ram/user-guide/manage-console-logon-settings-for-a-ram-user-1)
