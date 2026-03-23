This topic describes how to configure single sign-on (SSO) logon from Microsoft Entra ID (formerly Azure AD) to CloudSSO.

## Background information

Assume that an enterprise uses Microsoft Entra ID to manage local users and has built a multi-account structure in a resource directory of Alibaba Cloud Resource Management. Microsoft Entra ID contains a large number of users and is the identity provider (IdP). The enterprise wants to configure settings to implement SSO logon. This way, the users in Microsoft Entra ID can directly access specific resources within the specified members in the resource directory.

All configuration operations in Microsoft Entra ID must be performed by an administrator that is assigned global administrative rights. For more information about how to create a user and assign the global administrative rights to the user in Microsoft Entra ID, see Microsoft Entra ID [documentation](https://docs.microsoft.com/zh-cn/azure/active-directory/fundamentals).

## Prerequisites

Before you configure SSO logon, perform the following operations:

1.  Assign your Microsoft Entra ID account with the Global Administrator role.
    
    To learn how to create a user and assign it the administrator role in Microsoft Entra ID, please refer to the [official Microsoft Entra ID documentation](https://docs.microsoft.com/zh-cn/azure/active-directory/fundamentals)。
    
2.  Synchronize users from Microsoft Entra ID to CloudSSO, or create users that have the same usernames as the users in Microsoft Entra ID in the CloudSSO console.
    
    -   Synchronize users from Microsoft Entra ID to CloudSSO: This method is suitable for scenarios in which a large number of users exist in Microsoft Entra ID. We recommend that you use this method. For more information, see [Synchronize users or groups in Microsoft Entra ID by using SCIM](/help/en/cloudsso/user-guide/synchronize-users-or-groups-in-azure-ad-by-using-scim#task-2090820).
        
    -   Create users that have the same usernames as the users in Microsoft Entra ID in the CloudSSO console: This method is suitable for scenarios in which a small number of users exist in Microsoft Entra ID. For more information, see [Create a user](/help/en/cloudsso/user-guide/perform-basic-operations#section-rj3-44x-9bk).
        
        **Note**
        
        Usernames are used for user logons. When you configure SSO logon, the username of a CloudSSO user must be the same as the value of the field that is used for SSO in Microsoft Entra ID. For more information, see [Step 3: Configure SAML in](#section-755-ua6-j4m) Microsoft Entra ID.
        
3.  Create access configurations and specify policies in the CloudSSO console.
    
    For more information, see [Create an access configuration](/help/en/cloudsso/user-guide/create-an-access-configuration#task-2091273).
    
4.  Assign access permissions on the accounts in your resource directory to the users.
    
    For more information, see [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory#task-2090971).
    

## Step 1: Obtain the SP metadata file in the CloudSSO console

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Settings**.
    
3.  In the **SSO Logon** section, download the service provider (SP) metadata file.
    

## Step 2: (Optional) Create an application in Microsoft Entra ID

**Note**

If you have configured System for Cross-domain Identity Management (SCIM) synchronization, skip this step and use the application that is used for SCIM synchronization.

1.  Log on to the [Azure portal](https://portal.azure.com/?l=en.en-us#home) as the global administrator of Microsoft Entra ID.
    
2.  In the upper-left corner of the homepage, click the ![SSO_AAD_icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3262214761/p112037.png) icon.
    
3.  In the left-side navigation pane, choose **Microsoft Entra ID** > **Manage** > **Enterprise applications** > **All applications**.
    
4.  Click **New application**.
    
5.  On the **Browse Microsoft Entra App Gallery** page, click **Create your own application**.
    
6.  In the **Create your own application** panel, enter a name for your application. In this example, enter CloudSSODemo. Then, select **Integrate any other application you don't find in the gallery (Non-gallery)** and click **Create**.
    

## Step 3: Configure SAML in Microsoft Entra ID

1.  In the left-side navigation pane of the **CloudSSODemo** page, choose **Manage** > **Single sign-on**.
    
2.  In the **Select a single sign-on method** section, click **SAML**.
    
3.  On the **Set up Single Sign-On with SAML** page, perform the following steps:
    
    1.  In the upper-left corner, click **Upload metadata file**. Then, select the SP metadata file that is obtained in [Step 1](#section-1mf-pid-z9k) and click **Add**.
        
    2.  In the **Basic SAML Configuration** panel, configure the following parameters and click **Save**.
        
        -   **Identifier (Entity ID)**: required. After the SP metadata file is imported, the value of this parameter is automatically displayed.
            
            **Note**
            
            If the value is not automatically displayed, go to the Settings page of the CloudSSO console and copy the value of **Entity ID** in the SSO Logon section.
            
        -   **Reply URL (Assertion Consumer Service URL)**: required. After the SP metadata file is imported, the value of this parameter is automatically displayed.
            
            **Note**
            
            If the value is not automatically displayed, go to the Settings page of the CloudSSO console and copy the value of **ACS URL** in the SSO Logon section.
            
        -   **Relay State**: optional. This parameter specifies the URL of a page that is displayed after a user logs on to the Alibaba Cloud Management Console by using SSO. If you do not configure this parameter, the user is redirected to the CloudSSO user portal by default.
            
            **Note**
            
            To ensure security, you are allowed to enter only a URL that contains \*.alibabacloudsso.com. If you enter a URL that does not contain this domain name, the configuration is invalid.
            
        
    3.  In the **Attributes & Claims** section, click **Edit**. In the Required claim section of the page that appears, set the **Unique User Identifier (Name ID)** parameter to **user.userprincipalname** or a value that uniquely identifies a user.
        
        **Note**
        
        -   You can set the `NameID` attribute in SAML assertions to a value that uniquely identifies a user. In most cases, you can set the NameID attribute to **user.userprincipalname** or **user.mail**. CloudSSO requires that the value of the `NameID` attribute must be the same as the username of a user created in the CloudSSO console. Therefore, you must create a user based on the value of the NameID attribute to ensure successful SSO.
            
        -   If SCIM synchronization is configured, you must configure the userName attribute based on the value of the NameID attribute. For example, set both the userName and NameID attributes to **user.userprincipalname**.
            
        
    4.  In the **SAML Certificates** section, click **Download** in the **Federation Metadata XML** field to download the related XML file.
        

## Step 4: (Optional) Assign users in Microsoft Entra ID

**Note**

If you have configured SCIM synchronization, skip this step.

1.  In the left-side navigation pane of the **CloudSSODemo** page, choose **Manage** > ****Users and groups****.
    
2.  On the page that appears, click **Add user/group**.
    
3.  Select users.
    
4.  Click **Assign**.
    

## Step 5: Enable SSO in the CloudSSO console

1.  In the left-side navigation pane of the CloudSSO console, click **Settings**.
    
2.  In the **SSO Logon** section of the Settings page, click **Configure IdP**.
    
3.  In the **Configure IdP** dialog box, select **Upload Metadata File**.
    
4.  Click **Upload** to upload the IdP metadata file that is obtained in [Step 3](#section-755-ua6-j4m).
    
5.  Turn on the switch for SSO to enable SSO.
    
    **Note**
    
    After SSO is enabled, username-password logon is automatically disabled. SSO takes effect on all users. After you enable SSO, all users must use the SSO logon method.
    

## Verify the configuration results

After you configure SSO logon, you can initiate SSO from both Alibaba Cloud and Microsoft Entra ID.

-   Initiate SSO from Alibaba Cloud
    
    1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com). Go to the **Overview** page and copy the URL used to log on to the user portal.
        
    2.  Open a browser, paste the copied URL, and then press Enter.
        
    3.  Click **Redirect**. You are redirected to the logon page of Microsoft Entra ID.![云SSO登录跳转](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2428037361/p290656.png)
        
    4.  On the page that appears, enter the username and password of the required Microsoft Entra ID user.
        
        After the logon succeeds, you are redirected to the page that is specified by the **Relay State** parameter. If you did not configure the **Relay State** parameter or you set the parameter to an invalid value, you are redirected to the user portal shown in the following figure.
        
    5.  On the **Log on as RAM Role** tab, click the required account in your resource directory and click **Show Details** in the **Permissions** column.
        
        ![RD账号列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8105248661/p358853.jpg)
        
    6.  In the panel that appears, find the required access configuration and click **Log On** in the **Actions** column.
        
    7.  Access the Alibaba Cloud resources on which the account has permissions.
        
-   Initiate SSO from Microsoft Entra ID
    
    1.  Obtain the user access URL.
        
        1.  Log on to the [Azure portal](https://portal.azure.com/?l=en.en-us#home) as the administrator.
            
        2.  In the upper-left corner of the Microsoft Entra ID homepage, click the ![SSO_AAD_icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3262214761/p112037.png) icon.
            
        3.  In the left-side navigation pane, choose ****Microsoft Entra ID**** > **Manage** > ****Enterprise applications**** > ****All applications****.
            
        4.  In the application list of the page that appears, click **CloudSSODemo**.
            
        5.  In the left-side navigation pane, click **Properties** and copy the value of **User access URL**.
            
            **You can paste the copied user access URL in the address bar of your browser to access the application.**
            
    2.  After you obtain the **user access URL** from the administrator, enter the URL in your browser and use the required username and password for logon.
        
        After the logon succeeds, you are redirected to the page that is specified by the **Relay State** parameter. If you did not configure the **Relay State** parameter or you set the parameter to an invalid value, you are redirected to the user portal.
        
    3.  On the **Log on as RAM Role** tab, click the required account in your resource directory and click **Show Details** in the **Permissions** column.
        
        ![RD账号列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8105248661/p358853.jpg)
        
    4.  In the panel that appears, find the required access configuration and click **Log On** in the **Actions** column.
        
    5.  Access the Alibaba Cloud resources on which the account has permissions.
        

## **References**

-   [Synchronize users or groups in Microsoft Entra ID by using SCIM](/help/en/cloudsso/user-guide/synchronize-users-or-groups-in-azure-ad-by-using-scim)
    
-   [Log on to the CloudSSO user portal and access Alibaba Cloud resources](/help/en/cloudsso/user-guide/log-on-to-the-cloudsso-user-portal-and-access-alibaba-cloud-resources)
