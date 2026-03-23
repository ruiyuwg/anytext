This topic describes how to configure single sign-on (SSO) logon from Active Directory Federation Service (AD FS) to CloudSSO.

## Background information

Assume that an enterprise uses Active Directory (AD) to manage local users and has built a multi-account structure in a resource directory. The enterprise wants to configure settings to implement SSO logon. This way, the AD users can directly access specific resources within the specified members in the resource directory.

In the following example, AD FS is deployed on an Elastic Compute Service (ECS) instance that runs Windows Server 2012 R2. AD FS is the identity provider (IdP). CloudSSO is the service provider (SP).

## Preparations

Before you configure SSO logon, perform the following operations:

1.  Deploy the following services on an ECS instance that runs Windows Server 2012 R2:
    
    -   Active Directory Domain Service (AD DS): allows you to create, query, and modify objects, such as domain users and domain devices.
        
    -   AD FS: allows you to configure the SSO relying party and performs SSO authentication for the configured relying party.
        
        **Important**
        
        The configuration of Microsoft AD described in this topic is for reference only and helps you understand the configuration procedure of SSO logon to Alibaba Cloud. Alibaba Cloud does not provide consultation services for the configuration of Microsoft AD.
        
    
2.  Create users and assign access permissions to the users in the CloudSSO console.
    
    1.  Create users that have the same usernames as the users in AD FS in the CloudSSO console.
        
        For more information, see [Create a user](/help/en/cloudsso/user-guide/perform-basic-operations#section-rj3-44x-9bk).
        
        **Note**
        
        Usernames are used for user logons. When you configure SSO logon, the username of a CloudSSO user must be the same as the value of the field that is used for SSO logon in AD FS. For more information, see [Step 3: Configure attributes in the SAML assertions in AD FS](#section-u32-zdd-mfb).
        
    2.  Create access configurations and specify policies in the CloudSSO console.
        
        For more information, see [Create an access configuration](/help/en/cloudsso/user-guide/create-an-access-configuration#task-2091273).
        
    3.  Assign access permissions on the accounts in your resource directory to the users.
        
        For more information, see [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory#task-2090971).
        

## Step 1: Obtain the SP metadata file in the CloudSSO console

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Settings**.
    
3.  In the **SSO Logon** section, download the service provider (SP) metadata file.
    

## Step 2: Specify Alibaba Cloud as a relying party in AD FS

1.  Log on to the ECS instance on which AD FS is deployed.
    
2.  Start **Server Manager**.
    
3.  In the left-side navigation pane, click **AD FS**.
    
4.  In the upper-right corner, choose **Tools** > **AD FS Management**.
    
5.  In the **AD FS** management tool, add Alibaba Cloud as a relying party.
    
    1.  In the left-side navigation pane, right-click **Relying Party Trusts** and select **Add Relying Party Trust**.
        
    2.  In **Add Relying Party Trust Wizard**, select **Claims aware** and click **Start**.
        
    3.  Select **Import data about the relying party from a file** and click **Browse** to import the metadata file that is obtained in [Step 1: Obtain the SP metadata file in the CloudSSO console](#section-86e-bl1-c5p). Then, click **Next**.
        
    4.  Enter a display name for the relying party and click **Next**.
        
        In this example, enter CloudSSODemo.
        
    5.  Select the required access control policy and click **Next**.
        
        In this example, select **Permit everyone**.
        
    6.  Confirm the configuration and click **Next**.
        
    7.  Click **Close**.
        

## Step 3: Configure attributes in the SAML assertions in AD FS

In this example, the value of the `NameID` attribute in the SAML assertions is set to the User Principal Name (UPN) of an AD user. This allows Alibaba Cloud to identify the required CloudSSO user by using a SAML response.

1.  Right-click CloudSSODemo and select **Edit Claim Issuance Policy**.
    
2.  Click **Add Rule**.
    
    **Note**
    
    An issuance transform rule indicates how to transform a known user attribute and issue it as an attribute in the SAML assertions. You must issue the UPN of a user in AD FS as `NameID`, which indicates that a new rule is required.
    
3.  In **Add Transform Claim Rule Wizard**, set **Claim rule template** to **Transform an Incoming Claim** and click **Next**.
    
4.  Configure claim information.
    
    ![AD FS属性映射](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7295809261/p295557.png)
    
    1.  Enter a custom rule name.
        
    2.  In the **Incoming claim type** drop-down list, select **UPN**.
        
    3.  In the **Outgoing claim type** drop-down list, select **Name ID**.
        
    4.  In the **Outgoing name ID format** drop-down list, select **Email**.
        
    5.  Select **Pass through all claim values**.
        
    6.  Click **Finish**.
        
5.  Click **OK**.
    

## Step 4: Obtain the IdP metadata file in AD FS

Access `https://<ADFS-server>/federationmetadata/2007-06/federationmetadata.xml` from the ECS instance on which AD FS is deployed to obtain the IdP metadata file.

**Note**

<ADFS-server> indicates the domain name or IP address of your AD FS server.

## Step 5: Enable SSO logon in the CloudSSO console

1.  In the left-side navigation pane of the CloudSSO console, click **Settings**.
    
2.  In the **SSO Logon** section of the Settings page, click **Configure IdP**.
    
3.  In the **Configure IdP** dialog box, select **Upload Metadata File**.
    
4.  Click **Upload** to upload the IdP metadata file that is obtained in [Step 4: Obtain the IdP metadata file in AD FS](#section-tbn-i5y-dkd).
    
    **Note**
    
    If the size of the IdP metadata file exceeds the upper limit, you can delete the content in the `<fed:ClaimTypesRequested>` and `<fed:ClaimTypesOffered>` sections.
    
5.  Turn on the switch for SSO logon to enable SSO logon.
    
    **Note**
    
    After SSO is enabled, username-password logon is automatically disabled. SSO takes effect on all users. After you enable SSO, all users must use the SSO logon method.
    

## Verify the configuration results

After you complete the preceding steps, you can initiate SSO logon from Alibaba Cloud or AD FS.

-   Initiate SSO logon from Alibaba Cloud
    
    1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com). Go to the **Overview** page and copy the URL used to log on to the user portal.
        
    2.  Open a browser, paste the copied URL, and then press Enter.
        
    3.  Click **Redirect**. You are redirected to the logon page of AD FS.![云SSO登录跳转](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2428037361/p290656.png)
        
    4.  On the page that appears, enter the username and password of the required AD user.
        
        After the logon succeeds, you are redirected to the user portal shown in the following figure.
        
    5.  On the **Log on as RAM Role** tab, find the required account in your resource directory and click **Show Details** in the **Permissions** column.
        
        ![RD账号列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8105248661/p358853.jpg)
        
    6.  In the panel that appears, find the required access configuration and click **Log On** in the **Actions** column.
        
    7.  Access the Alibaba Cloud resources on which the account has permissions.
        
-   Initiate SSO logon from AD FS
    
    1.  Log on to the AD FS portal for SSO logon.
        
        The portal URL is `https://<ADFS-server>/adfs/ls/IdpInitiatedSignOn.aspx`.
        
        **Note**
        
        -   <ADFS-server> indicates the domain name or IP address of your AD FS server.
            
        -   If the portal URL is unavailable, you can run the `Set-AdfsProperties -EnableIdpInitiatedSignonPage $True` command in PowerShell to open the page.
            
        
    2.  Select the CloudSSODemo application created in [Step 2: Specify Alibaba Cloud as a relying party](#section-q32-zdd-mfb) in AD FS and click **Sign in**.
        
    3.  Enter the username and password of the AD user. Then, click **Sign in**.
        
        After the logon succeeds, you are redirected to the user portal shown in the following figure.
        
    4.  On the **Log on as RAM Role** tab, find the required account in your resource directory and click **Show Details** in the **Permissions** column.
        
        ![RD账号列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8105248661/p358853.jpg)
        
    5.  In the panel that appears, find the required access configuration and click **Log On** in the **Actions** column.
        
    6.  Access the Alibaba Cloud resources on which the account has permissions.
