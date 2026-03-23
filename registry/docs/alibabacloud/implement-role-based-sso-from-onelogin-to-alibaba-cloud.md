This topic provides an example on how to implement role-based single sign-on (SSO) from OneLogin to Alibaba Cloud. The example describes the end-to-end role-based SSO process from a cloud identity provider (IdP) to Alibaba Cloud.

## Background information

In this example, an enterprise has an Alibaba Cloud account, a OneLogin administrator account, and multiple OneLogin users. The enterprise wants the OneLogin users to use their OneLogin accounts to access Alibaba Cloud by using role-based SSO without the need to create Resource Access Management (RAM) users in Alibaba Cloud.

For more information about OneLogin, see [OneLogin documentation](https://onelogin.service-now.com/support?id=kb_article&sys_id=296c5c6bdb1c889024c780c74b9619f0&kb_category=60231113dbff4700d5505eea4b9619a9).

## Step 1: Create an application in OneLogin

1.  Log on to [OneLogin](https://app.onelogin.com/login) as an administrator.
    
2.  On the left side of the profile picture, click **Administration** to go to the Administration page.
    
3.  In the top navigation bar, choose **Applications** > **Applications**.
    
4.  In the upper-right corner of the **Applications** page, click **Add App**.
    
5.  On the **Find Applications** page, search for **SAML Test Connector (Advanced)**.
    
6.  On the page that appears, click SAML Test Connector (Advanced). On the **Add SAML Test Connector (Advanced)** page, configure the parameters and click **Save**.
    
    In this example, set the **Display Name** parameter to `LoginToAliyun`. Use the default values for other parameters.
    
7.  On the page that appears, move the pointer over **More Actions** in the upper-right corner and select **SAML Metadata** from the drop-down list. The IdP metadata file is downloaded. Save the file to your computer.
    

## Step 2: Create an IdP in the Alibaba Cloud Management Console

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using your Alibaba Cloud account as an administrator.
    
2.  In the left-side navigation pane, choose **Integrations** > **SSO**.
    
3.  On the **Role-based SSO** tab, click the **SAML** subtab and click **Create identity provider**.
    
4.  On the **Create IdP** page, set the **IdP Name** parameter to OneLogin and configure the **Description** parameter.
    
5.  In the **Metadata File** section, click **Upload Metadata File** to upload the metadata file that you obtained in [Step 1: Create an application in OneLogin](#section-78j-9js-fuc).
    
6.  Click **Create IdP**.
    

View the details of the created IdP and record the Alibaba Cloud Resource Name (ARN) of the IdP for subsequent use.

## Step 3: Create a RAM role in the Alibaba Cloud Management Console

1.  In the left-side navigation pane of the RAM console, choose **Identities** > **Roles**.
    
2.  On the **Roles** page, click **Create Role**.
    
3.  In the upper-right corner of the **Create Role** page, click **Switch to Policy Editor**.
    
4.  Specify a Security Assertion Markup Language (SAML) IdP in the editor.
    
    The editor supports the Visual editor and JSON modes. In this example, the Visual editor mode is used. You need to configure the **Principal** element by selecting **SAML** for **IdP Type** and specifying the IdP that you created in [Step 2: Create an IdP in the Alibaba Cloud Management Console](#section-7fz-jfo-srq) for Identity Provider.
    
5.  In the editor, set the `saml:recipient` condition to `https://signin.alibabacloud.com/saml-role/sso`.
    
6.  In the **Create Role** dialog box, configure the **Role Name** parameter and click **OK**. For example, you can set the Role Name parameter to Reader-OneLogin.
    

View the details of the created RAM role and record the ARN of the RAM role for subsequent use.

## Step 4: Configure the application in OneLogin

1.  Log on to [OneLogin](https://app.onelogin.com/login) as an administrator.
    
2.  Create a custom user attribute.
    
    1.  In the top navigation bar, choose **Users** > **Users**.
        
    2.  On the **Users** page, move the pointer over **More Actions** in the upper-right corner and select **Custom user fields** from the drop-down list.
        
    3.  In the upper-right corner of the **Custom User Fields** page, click **New User Field**.
        
    4.  In the **New User Field** dialog box, configure the **Name** and **Shortname** parameters and click **Save**.
        
        In this example, set the **Name** parameter to `AliyunRoles for SSO` and the **Shortname** parameter to `AliyunRoles`.
        
3.  Configure the application.
    
    1.  In the top navigation bar, choose **Applications** > **Applications**.
        
    2.  On the **Applications** page, click LoginToAliyun that you created in [Step 1: Create an application in OneLogin](#section-78j-9js-fuc).
        
    3.  In the left-side navigation pane of the page that appears, click **Configuration**.
        
    4.  In the Application details section, configure the following parameters and click **Save**.
        
        -   **RelayState**: Enter a URL. You are redirected to the URL after logon.
            
            **Note**
            
            For security purposes, you must enter a URL that points to an Alibaba website for the **RelayState** parameter. For example, the domain name in the URL can be \*.aliyun.com, \*.hichina.com, \*.yunos.com, \*.taobao.com, \*.tmall.com, \*.alibabacloud.com, or \*.alipay.com. If you leave this parameter empty, you are redirected to the homepage of the Alibaba Cloud Management Console after logon.
            
        -   **Audience (EntityID)**: Enter `urn:alibaba:cloudcomputing:international`.
            
        -   **Recipient**: Enter `https://signin.alibabacloud.com/saml-role/sso`.
            
        -   **ACS (Consumer) URL**: Enter `https://signin.alibabacloud.com/saml-role/sso`.
            
        
    5.  In the left-side navigation pane, click **Parameters**.
        
    6.  Click the ![添加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2626542261/p269249.png) icon to create the first custom application attribute.
        
        1.  In the **New Field** dialog box, set the **Field name** parameter to `https://www.aliyun.com/SAML-Role/Attributes/Role`, select **Include in SAML assertion** and **Multi-value parameter**, and then click **Save**.
            
        2.  In the **Edit Field https://www.aliyun.com/SAML-Role/Attributes/Role** dialog box, select **Aliyun Roles for SSO (Custom)** from the first drop-down list and **Semicolon Delimited input (Multi-value output)** from the second drop-down list in the **Default if no value selected** section. Then, click **Save**.
            
        
    7.  Click the ![添加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2626542261/p269249.png) icon again to create the second custom application attribute.
        
        1.  In the **New Field** dialog box, set the **Field name** parameter to `https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName`, select **Include in SAML assertion**, and then click **Save**.
            
        2.  In the **Edit Field https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName** dialog box, select **Email** from the drop-down list in the **Value** section and click **Save**.
            
            **Note**
            
            You can also select another value such as **Username** or **userPrincipalName** from the drop-down list in the **Value** section based on your business requirements.
            
        
    8.  In the upper-right corner of the page, click **Save**.
        

## Step 5: Create a user in OneLogin and assign the application to the user

1.  Log on to [OneLogin](https://app.onelogin.com/login) as an administrator.
    
2.  In the top navigation bar, choose **Users** > **Users**.
    
3.  Create a user.
    
    **Note**
    
    If you have a OneLogin user, skip this step.
    
    1.  In the upper-right corner of the **Users** page, click **New User**.
        
    2.  On the **New User** page, configure the parameters. For example, set the **First name** parameter to Jack, the **Last name** parameter to Lee, the **Username** parameter to jacklee, the **Email** parameter to jacklee@example.com, and then click **Save User**.
        
    3.  On the page that appears, move the pointer over **More Actions** in the upper-right corner and select **Change Password** from the drop-down list. Configure a password for the user and click **Update**.
        
        The user can log on to OneLogin by using the password.
        
4.  In the **Custom Fields** section of the page that appears, configure the **Aliyun Roles for SSO** parameter.
    
    The value of the **Aliyun Roles for SSO** parameter consists of the ARN of the RAM role and the ARN of the IdP. The ARNs are separated by commas (,). The value must be in the `acs:ram::<account_id>:role/RoleName,acs:ram::<account_id>:saml-provider/ProviderName` format. The ARN of the RAM role is obtained from [Step 3: Create a RAM role in the Alibaba Cloud Management Console](#section-efr-wq8-8lw), the ARN of the IdP is obtained from [Step 2: Create an IdP in the Alibaba Cloud Management Console](#section-7fz-jfo-srq), and <account\_id> is the ID of the Alibaba Cloud account.
    
    **Note**
    
    If a user corresponds to multiple RAM roles, you can configure more than one value. The values are separated by semicolons (;). For example, you can set `acs:ram::125022144354****:role/reader-onelogin,acs:ram::125022144354****:saml-provider/OneLogin;acs:ram::125022144354****:role/administrator-onelogin,acs:ram::125022144354****:saml-provider/OneLogin;acs:ram::158622887609****:role/finance,acs:ram::158622887609****:saml-provider/OneLogin2` for the Aliyun Roles for SSO parameter.
    
5.  Assign the application to the user.
    
    1.  On the **Applications** page, click the ![添加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2626542261/p269249.png) icon.
        
    2.  Select LoginToAliyun created in [Step 1: Create an application in OneLogin](#section-78j-9js-fuc) and click **Continue**.
        
    3.  In the dialog box that appears, click **Save**.
        
6.  In the upper-right corner of the **Users** page, click **Save User**.
    
7.  Repeat [4](#step-2gd-q5i-m44) to [6](#step-myy-gbe-bi7) to configure the **Aliyun Roles for SSO** parameter for other users of the enterprise and assign LoginToAliyun to the users.
    

## Test role-based SSO

1.  Log on to [OneLogin](https://app.onelogin.com/login) by using the user jacklee that is created in [Step 5: Create a user in OneLogin and assign the application to the user](#section-t6y-awl-g5w).
    
2.  Click LoginToAliyun.
    
    The logon succeeds if one of the following pages appears: the page to which the URL entered for the **RelayState** parameter points and the homepage of the Alibaba Cloud Management Console.
    
    **Note**
    
    If you configure more than one value for the Aliyun Roles for SSO parameter in [Step 5: Create a user in OneLogin and assign the application to the user](#section-t6y-awl-g5w), you must select a specific RAM role before you can access Alibaba Cloud.
