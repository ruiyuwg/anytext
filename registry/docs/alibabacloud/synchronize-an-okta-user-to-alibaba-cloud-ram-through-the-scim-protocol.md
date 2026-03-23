Alibaba Cloud can synchronize Okta users to Resource Access Management (RAM) based on System for Cross-domain Identity Management 2.0 (SCIM 2.0) and security authorization of Open Authorization (OAuth) applications.

## **Prerequisites**

-   A RAM user who has administrative rights or a RAM user who has the OAuth management permissions is used to perform all operations in the RAM console.
    
-   An Okta administrator (super administrator) is used to perform all operations on the Okta portal.
    

## **Background information**

-   Create a user: After Okta assigns a user to an application, a RAM user with the same username is automatically created in the RAM console. The domain name suffix of the Okta username is automatically replaced with the domain name of the RAM user.
    
-   Change user attributes: If you select Push Profile Updates in Okta, the user attributes of the RAM user with the same username are automatically changed in the RAM console when you change the user attributes of the Okta user. Only the changes in the UserName and DisplayName parameters can be synchronized to the RAM console.
    
-   When you delete or unassign a user in Okta, the state of the user changes to `active=false` in Okta. However, the state change cannot be synchronized to the RAM console because a RAM user does not support the enabled or disabled state.
    
-   You cannot synchronize user groups in Okta to the RAM console.
    

## **Step 1: Create an OAuth application and grant permissions on the OAuth application in the RAM console**

1.  Create an OAuth application.
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Integrations** > **OAuth Preview**.
        
    3.  On the **Enterprise Application** tab, click **Create Application**.
        
    4.  On the **Create Application** page, configure the parameters.
        
        1.  Configure **Application Name** and **Display Name**.
            
        2.  Set **Application Type** to **Native Application**.
            
        3.  Configure **Access Token Validity**.
            
        4.  Configure **Refresh Token Validity**.
            
        
    5.  Click **Create Application**.
        
    
2.  Grant permissions on the OAuth application.
    
    1.  On the **Enterprise Application** tab, find the application that you want to manage.
        
    2.  On the **OAuth Scope** tab, click **Add OAuth Scope**.
        
    3.  In the **Add OAuth Scope** panel, select **/acs/scim**.
        
    4.  Click **OK**.
        
    
3.  Create an application secret for the OAuth application.
    
    1.  Click the **Application Secret** tab, and then click **Create Secret**.
        
    2.  In the **Create Secret** dialog box, view and copy the created application secret and click **Close**.
        
        **Important**
        
        The application secret (**AppSecretValue**) is displayed only during creation and cannot be queried. Save the secret at the earliest opportunity.
        
    

## **Step 2: Create an application in** **Okta**

1.  Log on to the [Okta portal](https://www.okta.com/).
    
2.  In the left-side navigation pane, choose **Applications** > **Applications**.
    
3.  On the **Applications** page, click **Create App Integration**.
    
4.  In the **Create a new app integration** dialog box, select **SAML 2.0** and click **Next**.
    
5.  In the **General Settings** step, enter an application name in the **App name** field, such as AliyunSSODemo, and click **Next**.
    
6.  In the **Configure SAML** step, configure the following parameters in the **SAML Settings** section and click **Next**.
    
    -   **Single sign on URL:** Enter the `Location` value that you recorded in Step 1.
        
    -   **Audience URI (SP Entity ID):** Enter the `entityID` value that you recorded in Step 1.
        
    -   **Default RelayState:** Specify the Alibaba Cloud console page where users are redirected after a successful SSO logon. If you leave this empty, users are redirected to the homepage of the Alibaba Cloud Management Console.
        
        **Note**
        
        For security reasons, the URL for **Default RelayState** must belong to an Alibaba-owned domain name, such as \*.aliyun.com, \*.hichina.com, \*.yunos.com, \*.taobao.com, \*.tmall.com, \*.alibabacloud.com, or \*.alipay.com. If you specify a URL from an unauthorized domain name, the **Default RelayState** will be ignored.
        
    -   **Name ID format:** Select **Persistent**.
        
    -   **Application username:** Select **Email**.
        
7.  On the **Feedback** page, select an application type based on your requirements and click **Finish**.
    

## **Step 3: Configure SCIM synchronization in** **Okta**

1.  Enable SCIM synchronization.
    
    1.  In the application created in [Step 2: Create an application in Okta](#a3a9f1f5e7yfc), click the **General** tab.
        
    2.  In the **App Settings** section, click **Edit**.
        
    3.  Select **Enable SCIM provisioning** and click **Save** to enable SCIM synchronization.
        
    
2.  Configure SCIM parameters.
    
    1.  Click the **Provisioning** tab.
        
    2.  In the left-side navigation pane, click **Integration**.
        
    3.  In the **SCIM Connection** section, click **Edit** and configure the following parameters.
        
        -   **SCIM connector base URL**: Enter `https://scim.aliyun.com`.
            
        -   **Unique identifier field for users**: Enter `userName`.
            
        -   **Supported provisioning actions**: Select **Import New Users and Profile Updates** and **Push New Users**.
            
            **Note**
            
            **Push Profile Updates** is optional and specifies whether to enable automatic user attribute update.
            
        -   **Authentication Mode**: Select **OAuth 2**.
            
        
    4.  Configure OAuth 2 parameters.
        
        -   **Access token endpoint URI**: Enter `https://oauth.alibabacloud.com/v1/token`.
            
        -   **Authorization endpoint URI**: `https://signin.alibabacloud.com/oauth2/v1/auth`.
            
        -   **Client ID**: Enter the ID of the OAuth application that you created in [Step 1: Create an OAuth application and grant permissions on the OAuth application in the RAM console](#14344f23129h9).
            
        -   **Client Secret**: Enter the secret that you created in [Step 1: Create an OAuth application and grant permissions on the OAuth application in the RAM console](#14344f23129h9).
            
        
    5.  Click **Save**.
        
    
3.  Obtain the callback URL.
    
    1.  On the **Provisioning** tab, click **Integration** in the left-side navigation pane.
        
    2.  In the lower part of the page, click **Authenticate with xxx**.
        
    3.  On the page that appears, copy the callback URL (redirect url).
        
    4.  Log on to the RAM console. In the OAuth application that you created in [Step 1: Create an OAuth application and grant permissions on the OAuth application in the RAM console](#14344f23129h9), enter the callback URL.
        
    5.  Return to the current page in the Okta portal, click **Authenticate with xxx**, and then log on to the Alibaba Cloud Management Console to complete the verification.
        
    
4.  Configure user synchronization parameters.
    
    1.  On the **Provisioning** tab, click **To App** in the left-side navigation pane.
        
    2.  In the **Provisioning to App** section, click **Edit**.
        
    3.  In the **Create User** section, select **Enable** and click **Save**.
        
        **Note**
        
        If you enabled **Push Profile Updates** in the **SCIM Connection** section, you must set **Push Profile Updates** in this section to **Enable**.
        
    4.  In the **<App Name> Attribute Mappings** section, configure attribute mappings to delete unnecessary attributes and retain only the attributes shown in the following figure.
        
        ![83f45d68d4356cebde3339768163c69e.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4960305071/p744958.png)
        
    5.  On the **Sign on** tab, click **Edit**.
        
    6.  Set **Application username format** to **Okta username prefix** and click **Save**.
        
    
5.  Assign users to the application.
    
    1.  On the **Assignments** tab, click **Assign**.
        
    2.  Click **Assign to People** to assign users to the application.
        
    

**Note**

If an issue occurs during the synchronization, you can click **View Logs** to view the logs and address the issue.

## **Verify the result**

After you complete the preceding steps, Okta users are automatically synchronized to the RAM console. You can log on to the RAM console and view the synchronized users in the RAM user list. The **Synchronization Type** of the synchronized users is **SCIM User Synchronization**.
