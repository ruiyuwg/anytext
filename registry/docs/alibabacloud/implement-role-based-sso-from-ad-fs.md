This topic provides an example on how to implement role-based single sign-on (SSO) from Active Directory Federation Services (AD FS) to Alibaba Cloud. In the example, AD FS is deployed on an Elastic Compute Service (ECS) instance that runs Windows Server 2012 R2, AD FS is the identity provider (IdP), and Alibaba Cloud is the service provider (SP).

## Background information

An enterprise uses Active Directory (AD) to manage users and AD FS to configure enterprise applications such as Alibaba Cloud. After role-based SSO is configured, an AD administrator can control user access to the resources of Alibaba Cloud accounts by user group. In this example, the enterprise has Alibaba Cloud accounts, Account 1 and Account 2, and AD user groups, Aliyun-<account-id>-ADFS-Admin and Aliyun-<account-id>-ADFS-Reader. A user named Alice belongs to these groups. The enterprise wants to implement role-based SSO from AD FS to Account 1 and Account 2.

**Note**

-   <account-id> indicates the ID of Account 1 or Account 2. Therefore, the user Alice belongs to four user groups. The group whose name contains Admin has the Admin permission on Account 1 or Account 2. The group whose name contains Reader has the Reader permission on Account 1 or Account 2.
    
-   The configuration of Microsoft AD described in this topic is for reference only and helps you understand the configuration procedure of SSO logon to Alibaba Cloud. Alibaba Cloud does not provide consultation services for the configuration of Microsoft AD. For more information, see [Build an AD domain on a Windows instance](/help/en/ecs/user-guide/ecs-instance-building-windows-active-directory-domain#section-kiv-spr-168).
    

## Process

The following figure shows the process of role-based SSO.

![基本流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5893111271/p40996.png)

After an AD administrator completes the configurations of role-based SSO, the user Alice can log on to the Alibaba Cloud Management Console based on the process shown in the figure. For more information, see [Overview](/help/en/ram/overview#task-zrv-2ny-zgb).

The process shows that users can be authenticated without the need to provide Alibaba Cloud usernames or passwords during logon.

## Step 1: Configure AD FS as a trusted SAML IdP in Alibaba Cloud

1.  Log on to the Resource Access Management (RAM) console of Alibaba Cloud. Create an IdP named ADFS and upload a metadata file. You can obtain the metadata file of AD FS from `https://<ADFS-server>/federationmetadata/2007-06/federationmetadata.xml`.
    
    **Note**
    
    <ADFS-server> indicates the domain name or IP address of your AD FS server.
    
    For more information, see [Configure SAML on Alibaba Cloud (as SP)](/help/en/ram/configure-the-saml-settings-of-alibaba-cloud-for-role-based-sso#task-ntr-jkt-zgb).
    
    **Note**
    
    If the size of the IdP metadata file exceeds the upper limit, you can delete the content in the `<fed:ClaimTypesRequested>` and `<fed:ClaimTypesOffered>` sections.
    
2.  Create two RAM roles named ADFS-Admin and ADFS-Reader for Account 1. When you create the RAM roles, select IdP as the type of trusted entity and ADFS as the trusted IdP. Then, attach the `AdministratorAccess` policy to the ADFS-Admin role and the `ReadOnlyAccess` policy to the ADFS-Reader role.
    
    For more information, see [Create a RAM role for a trusted IdP](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-idp#task-221537).
    
3.  Repeat the preceding steps to create the same IdP and two RAM roles for Account 2. Then, attach the `AdministratorAccess` policy to the ADFS-Admin role and the `ReadOnlyAccess` policy to the ADFS-Reader role.
    

**Note**

After you complete the configurations, Account 1 and Account 2 trust the information about user identities and roles. The information is included in Security Assertions Markup Language (SAML) requests sent from your AD FS server.

## Step 2: Configure Alibaba Cloud as a trusted SAML SP in AD FS

In AD FS, a SAML SP is a **relying party**. To configure Alibaba Cloud as a trusted SAML SP in AD FS, perform the following steps:

1.  In the top navigation bar of **Server Manager**, choose **Tools** > **AD FS Management**.
    
2.  Right-click **Relying Parties** and select **Add Relying Party Trust**.
    
    ![添加信赖方信任向导](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1420549951/p41011.png)
    
3.  Configure the SAML SP metadata file of Alibaba Cloud for the relying party. You can obtain the metadata file from the following URL: `https://signin.alibabacloud.com/saml-role/sp-metadata.xml`.
    
    ![选择数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1420549951/p41012.png)
    
4.  Complete the wizard as prompted.
    

## Step 3: Configure SAML assertion attributes for the Alibaba Cloud SP

The SAML assertion that is issued by AD FS must contain the `NameID`, `Role`, and `RoleSessionName` attributes. AD FS provides these attributes by using issuance transform rules.

-   `NameID`
    
    Perform the following steps to set the `NameID` attribute in the SAML assertion to the Windows account name of a user in AD:
    
    1.  Right-click the display name of the relying party and select **Edit Claim Issuance Policy**.
        
    2.  Click **Issuance Transform Rules** to add a rule.
        
        **Note**
        
        An issuance transform rule indicates how to transform a known user attribute and issue it as an attribute in the SAML assertion. If you want to issue the Windows account name of a user in AD as `NameID`, you must create an issuance transform rule.
        
    3.  Set **Claim rule template** to **Transform an Incoming Claim**. ![转换传入声明](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1420549951/p41035.png)
        
    4.  Configure the following parameters and click **Finish**.
        
        -   Set **Claim rule name** to NameID.
            
        -   Set **Incoming claim type** to Windows account name.
            
        -   Set **Outgoing claim type** to Name ID.
            
        -   Set **Outgoing name ID format** to Persistent Identifier.
            
        -   Select **Pass through all claim values**.
            
        
        ![配置规则](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1420549951/p41044.png)
        
        After you complete the configurations, AD FS sends the `NameID` attribute in the format required by Alibaba Cloud. The following code shows an example:
        
        ```
        <NameID Format="urn:oasis:names:tc:SAML:2.0:nameid-format:persistent">
            YourDomain\rolessouser
        </NameID>
        ```
        
-   `RoleSessionName`
    
    Perform the following steps to set the `RoleSessionName` attribute in the SAML assertion to the User Principal Name (UPN) of a user in AD:
    
    1.  In the Issuance Transform Rules dialog box, click **Add Rule**.
        
    2.  Set **Claim rule template** to **Send LDAP Attributes as Claims**. ![选择规则模板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1420549951/p41064.png)
        
    3.  Configure the following parameters and click **Finish**.
        
        -   Set **Claim rule name** to RoleSessionName.
            
        -   Set **Attribute store** to Active Directory.
            
        -   Select User-Principal-Name in the **LDAP Attribute** column. You can also use a different option, such as Email, based on your business requirements.
            
        -   Enter `https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName` in the **Outgoing Claim Type** column.
            
        
        ![配置规则](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1420549951/p41065.png)
        
    
    After you complete the configurations, AD FS sends the `RoleSessionName` attribute in the format required by Alibaba Cloud. The following code shows an example:
    
    ```
    <Attribute Name="https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName">
        <AttributeValue>rolessouser@example.com<AttributeValue>
    </Attribute>
    ```
    
-   `Role`
    
    Perform the following steps to configure a custom attribute and set its value to the name of an Alibaba Cloud RAM role that is associated with the AD group of a user:
    
    1.  In the Issuance Transform Rules dialog box, click **Add Rule**.
        
    2.  Set **Claim rule template** to **Send Claims Using a Custom Rule** and click **Next**. ![使用自定义规则发送声明](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1420549951/p41066.png)
        
    3.  Configure the following parameters and click **Finish**.
        
        -   Set **Claim rule name** to Get AD Groups.
            
        -   In the **Custom rule** field, enter the required information. Set this parameter based on the following example:
            
            ```
            c:[Type =="http://schemas.microsoft.com/ws/2008/06/identity/claims/windowsaccountname", Issuer == "AD AUTHORITY"] => add(store = "Active Directory",types = ("http://temp/variable"), query = ";tokenGroups;{0}", param =c.Value);
            ```
            
        
        ![自定义规则](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2420549951/p41067.png)
        
        **Note**
        
        This rule is used to obtain the AD group to which the user belongs. The rule is saved in the _http://temp/variable_ intermediate variable.
        
    4.  In the Issuance Transform Rules dialog box, click **Add Rule**.
        
    5.  Repeat the preceding steps and click **Finish**.
        
        -   Set **Claim rule name** to Role.
            
        -   In the **Custom rule** field, enter the required information. Set this parameter based on the following example:
            
            ```
            c:[Type == "http://temp/variable", Value =~ "(?i)^Aliyun-([\d]+)"] => issue(Type = "https://www.aliyun.com/SAML-Role/Attributes/Role",Value = RegExReplace(c.Value, "Aliyun-([\d]+)-(.+)", "acs:ram::$1:role/$2,acs:ram::$1:saml-provider/<provider-name>"));
            ```
            
            **Note**
            
            Set <provider-name> to the name of the IdP that is created in [Step 1: Configure AD FS as a trusted SAML IdP in Alibaba Cloud](#section-k32-zdd-mfb). In this example, set the name to ADFS.
            
        
        ![选择规则类型](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2420549951/p41109.png)
        
        If the user belongs to the Aliyun-<account-id>-ADFS-Admin or Aliyun-<account-id>-ADFS-Reader group, a SAML attribute is generated and mapped to the ADFS-Admin or ADFS-Reader role in Alibaba Cloud based on this rule.
        
    
    After you complete the configurations, your IdP returns the required part of a SAML assertion to Alibaba Cloud. The following code shows an example:
    
    ```
    <Attribute Name="https://www.aliyun.com/SAML-Role/Attributes/Role">
        <AttributeValue>acs:ram::<account-id>:role/ADFS-Admin,acs:ram::<account-id>:saml-provider/<provider-name></AttributeValue>
    </Attribute>
    ```
    

## Verify the role-based SSO configurations

1.  Log on to the AD FS portal for SSO at `https://<ADFS-server>/adfs/ls/IdpInitiatedSignOn.aspx`. Select the Alibaba Cloud application and enter the username and password of your user.
    
    **Note**
    
    <ADFS-server> indicates the domain name or IP address of your AD FS server. If the URL is unavailable, run the `Set-AdfsProperties -EnableIdpInitiatedSignonPage $True` command in PowerShell.
    
    ![配置验证](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2420549951/p41111.png)
    
2.  On the Role-based SSO page of Alibaba Cloud, select the RAM role that you want to use and click **Log On**.
    
    **Note**
    
    If your user belongs to only one AD group, the user corresponds to only one RAM role in Alibaba Cloud. In this case, you can log on to the Alibaba Cloud Management Console without the need to select a RAM role.
    
    ![阿里云角色SSO页面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2221046561/p41794.png)
