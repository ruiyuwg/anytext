This topic describes how to synchronize users or groups in Microsoft Entra ID (formerly Azure AD) to CloudSSO by using System for Cross-domain Identity Management (SCIM).

## Prerequisites

All configuration operations within Microsoft Entra ID must be performed by a user with the Global Administrative role. To learn how to create a user and assign it the administrator role in Microsoft Entra ID, please refer to the [official Microsoft Entra ID documentation](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals).

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
    

**Note**

Copy and save the **SCIM endpoint** for later use.

## Step 3: Configure SAML in Microsoft Entra ID

1.  Log on to the [Azure portal](https://portal.azure.com/?l=en.en-us#home) as the global administrator of Microsoft Entra ID.
    
2.  In the upper-left corner of the homepage, click the ![SSO_AAD_icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3262214761/p112037.png) icon.
    
3.  In the left-side navigation pane, choose **Microsoft Entra ID** > **Manage** > **Enterprise applications** > **All applications**.
    
4.  Click **New application**.
    
5.  On the **Browse Microsoft Entra App Gallery** page, click **Create your own application**.
    
6.  In the **Create your own application** panel, enter a name for your application. In this example, enter CloudSSODemo. Then, select **Integrate any other application you don't find in the gallery (Non-gallery)** and click **Create**.
    

## Step 4: Assign users or groups to the application in Microsoft Entra ID

1.  On the **CloudSSODemo** details page, in the left-side navigation pane, choose **Manage** > **Users and Groups**.
    
2.  On the page that appears, click **Add user/group**.
    
3.  Select users or groups.
    
4.  Click **Assign**.
    

## Step 5: Configure SCIM synchronization in Microsoft Entra ID

1.  In the left-side navigation pane of the **CloudSSODemo** page, choose **Manage** > **Provisioning**.
    
2.  Click **New configuration** in the upper-left corner to create a provisioning configuration and configure administrator credentials.
    
    1.  Enter the SCIM endpoint for **Tenant URL**.
        
        To obtain the endpoint, go to the Settings page of the CloudSSO console and copy the value of **SCIM Endpoint**.
        
    2.  Enter a SCIM credential for **Secret token**.
        
        To obtain the credential, perform the operations in [Step 1: Create SCIM credentials in the CloudSSO console](#section-xjh-hp9-oum).
        
    3.  Click **Test Connectivity**.
        
    4.  If the test is successful, click **Create**.
        
    
3.  In the left-side navigation pane of the Provisioning page, choose **Manage** > **Settings**.
    
    1.  In the **Mappings** section, configure attribute mappings.
        
        -   Click **Provision Microsoft Entra ID Users** to configure attribute mappings for users.
            
            1.  On the page that appears, find **externalId** in the **customappsso** **Attribute** column and click the value in the **Azure Active Directory Attribute** column. Then, change the value of **Source attribute** to **objectId**.
                
            2.  Retain only the attribute mappings shown in the following figure and delete all other attribute mappings.![用户属性映射](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3884367261/p290699.png)
                
        -   Click **Provision Microsoft Entra ID Groups** to configure attribute mappings for groups. Retain only the attribute mappings shown in the following figure and delete all other attribute mappings.![用户组属性映射](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3884367261/p290700.png)
            
        
        **Note**
        
        The names of CloudSSO users and user groups have requirements on characters. If the name of an Microsoft Entra ID user or user group contains characters that are not supported in the names of CloudSSO users or user groups, the mapping fails. To handle the failure, click **displayName** in the Azure Active Directory Attribute column. Then, set Mapping type to **Expression** and enter an expression for Expression. The expression that you enter is applied to remove the unsupported characters or replace the unsupported characters with supported characters. For more information, see [Microsoft Entra ID documentation](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/customize-application-attributes#provisioning-a-role-to-a-scim-app).
        
    2.  In the **Settings** section, select **Sync only assigned users and groups** for **Scope**.
        
    3.  In the **Provisioning Status** section, turn on the switch.
        
    4.  Click **Save**.
        
    
4.  Go to the **Overview** page, refresh the page, and then view the synchronization results.
    

## Verify the synchronization results

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  Go to the User or Group page to view the synchronized users or groups.
    
    **Source** for the synchronized users or groups is automatically displayed as **SCIM Synchronization**. For more information, see [View user information](/help/en/cloudsso/user-guide/perform-basic-operations#section-nxn-wc4-ebs) and [View the information about a group](/help/en/cloudsso/user-guide/perform-basic-operations-1#section-dss-24z-o91).
    

## **References**

[Configure SSO logon from Microsoft Entra ID to CloudSSO](/help/en/cloudsso/user-guide/configure-sso-from-azure-ad-to-cloudsso)
