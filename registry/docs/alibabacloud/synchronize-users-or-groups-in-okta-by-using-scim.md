This topic describes how to synchronize users or groups in Okta to CloudSSO by using System for Cross-domain Identity Management (SCIM).

## Prerequisites

CloudSSO is enabled for the account of the enterprise whose users you want to synchronize.

## Background information

Assume that an enterprise uses Okta as a local identity provider (IdP) and has built a multi-account structure in a resource directory. The IdP contains a large number of users. The enterprise wants to configure settings to synchronize users or groups in Okta to CloudSSO. This way, the users of Okta can access specific resources within the specified members in the resource directory by using the username-password or SSO logon method.

We recommend that you first configure SSO logon and use the CloudSSODemo application and SCIM to synchronize users or groups. For more information, see [Configure SSO logon from Okta to CloudSSO](/help/en/cloudsso/user-guide/configure-sso-logon-from-okta-to-cloudsso#task-2513116).

## Features

-   Automatically creates users.
    
    CloudSSO automatically creates users that have the same username as the users in the applications of Okta. If a user whose username exists in Okta is already created, CloudSSO does not create the user.
    
-   Pushes users by group.
    
    Users and groups that are assigned to applications of Okta are automatically pushed to CloudSSO. CloudSSO automatically creates users and groups that have the same names as the users and groups in Okta.
    
-   Automatically updates user attributes.
    
    If you update the attributes of a user in an application of Okta, the new attributes are automatically synchronized to CloudSSO.
    
-   Automatically disables users.
    
    If you disable a user in Okta or delete a user in an application of Okta, CloudSSO automatically disables the user.
    

## Step 1: Create SCIM credentials in the CloudSSO console

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Settings**.
    
3.  In the **SCIM-based User Synchronization Configuration** section of the **User Settings** tab, click **Generate New SCIM Credential**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4079044671/p1030832.png)
    
4.  In the **SCIM Credential Generated** dialog box, copy the generated SCIM credential and click **OK**.
    

## Step 2: Enable SCIM synchronization in the CloudSSO console

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Settings**.
    
3.  In the **SCIM-based User Synchronization Configuration** section of the Settings page, turn on the switch.
    

## Step 3: Configure SCIM synchronization in Okta

1.  On the CloudSSODemo details page, click the **Provisioning** tab.
    
2.  In the **Integration** section of the **Settings** page, click **Configure API Integration**.
    
3.  Select **Configure API Integration**.
    
4.  Configure SCIM synchronization.
    
    1.  In the **Base URL** section, enter the required URL.
        
        To obtain the URL, go to the Settings page of the CloudSSO console and copy the value of **SCIM Endpoint**.
        
    2.  In the **API Token** section, enter the required SCIM credential.
        
        To obtain the SCIM credential, perform the operations in [Step 1: Create SCIM credentials in the CloudSSO console](#section-xjh-hp9-oum).
        
    3.  Click **Test API Credentials**.
        
    4.  View the test results. If the test succeeds, click **Save**. If the test fails, modify the configuration or contact Okta technical support until the test succeeds.
        
5.  In the **Provisioning to App** section of the **To App** page, click **Edit**.
    
6.  Select **Enable** for **Create Users**, **Update User Attributes**, and **Deactivate Users**. Then, click **Save**.
    
7.  In the CloudSSOdemo Attribute Mappings section of the **To App** page, configure attribute mappings.
    
    Retain only the attribute mappings shown in the following figure and delete all other attribute mappings.![SCIM属性映射](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6421971761/p534416.png)
    
8.  **Optional.** Click the **Push Groups** tab to synchronize groups.
    
    After you complete the preceding steps, the users in Okta are automatically synchronized to CloudSSO. If you still want to synchronize the groups that have been assigned to the CloudSSODemo application, perform the following steps:
    
    1.  In the **Push Groups to CloudSSODemo** section, click **Push Groups** and select the method to search for groups.
        
        The **Find groups by name** and **Find groups by rule** options are supported. In this example, select **Find groups by name**.
        
    2.  Enter the name of a group.
        
    3.  Click **Save**.
        
    4.  Wait until the synchronization is complete. Then, view the synchronization results.
        
        If **Push Status** changes from **Pushing** to **Active**, the group is synchronized.
        
        **Note**
        
        If not all users in the group are synchronized to CloudSSO, you can select **Push Now** in the **Push Status** drop-down list to synchronize the users in the group again.
        

If an issue occurs during the synchronization, you can click **View Logs** to view the logs and address the issue.

## Verify the synchronization results

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  Go to the User or Group page to view the synchronized users or groups.
    
    **Source** for the synchronized users or groups is automatically displayed as **SCIM Synchronization**.
    
    For more information, see [View user information](/help/en/cloudsso/user-guide/perform-basic-operations#section-nxn-wc4-ebs) and [View the information about a group](/help/en/cloudsso/user-guide/perform-basic-operations-1#section-dss-24z-o91).
    

## FAQ

### How do I delete a synchronized user?

When you delete a user in Okta, CloudSSO disables the user based on SCIM instead of deleting the user. If you want to delete the user in CloudSSO, you can temporarily disable SCIM synchronization and manually delete the user. After the user is deleted, enable SCIM synchronization. For more information, see [Disable SCIM synchronization](/help/en/cloudsso/user-guide/enable-or-disable-scim-synchronization#section-vt7-8ca-lgg) and [Delete a user](/help/en/cloudsso/user-guide/perform-basic-operations#section-ql8-xit-c4i).

## **References**

[Configure SSO logon from Okta to CloudSSO](/help/en/cloudsso/user-guide/configure-sso-logon-from-okta-to-cloudsso)
