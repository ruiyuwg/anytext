SASE issues identity-driven security policies. If your company uses a Lightweight Directory Access Protocol (LDAP) identity source to manage its organizational structure, you can connect the LDAP identity source to SASE. This eliminates the need to recreate identity information for your employees. After you connect the LDAP identity source, your employees can use their existing accounts to log on to the SASE App for work. This topic describes how to connect to an LDAP identity source.

## Limits

**You can enable a maximum of five identity sources at the same time. You can enable only one custom identity source at a time.** If you reach the quota for enabled identity sources, you must disable an existing identity source before you can enable a new one.

## Configure and enable a Windows AD or OpenLDAP identity source

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Identity Authentication** > **Identity Access**.
    
3.  On the **Identity synchronization** tab, click **Create IdP**.
    
4.  In the **Create IdP** panel, select **LDAP** and then click **Configure**. Follow the wizard to complete the configuration.
    
5.  In the **Basic Configurations** step, configure the parameters as described in the following table and then click **Next**.
    
    **Configuration item**
    
    **Description**
    
    **IdP Name**
    
    Configure a name for the identity source.
    
    The name must be 2 to 100 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (\_).
    
    **Description**
    
    The description of the configuration.
    
    The description is displayed as the logon title on the SASE client. This helps you identify the identity source during logon.
    
    **IdP Status**
    
    Configure the status for the identity source. The valid values are:
    
    -   **Enabled**: The identity source is enabled after it is created.
        
    -   **Closed**: The identity source is disabled after it is created.
        
        **Important**
        
        If you disable an identity source, end users cannot use the SASE app to access internal applications. Proceed with caution.
        
    
    **Type**
    
    The supported directory type. Valid values:
    
    -   **Windows AD**: The directory service of Windows.
        
    -   **OpenLDAP**: Lightweight Directory Access Protocol.
        
    
    **Server Address**
    
    The address of the Active Directory (AD) or LDAP server. You can configure a maximum of five server addresses.
    
    **Server Port Number**
    
    The port of the AD or LDAP server.
    
    **Access Authentication Server from Connector**
    
    If the LDAP authentication service is deployed in an internal network, you can use a connector to access the service. Select a successfully connected connector instance. For more information about how to configure a connector to establish a network connection, see [Use a SASE connector](/help/en/sase/user-guide/using-the-sase-connector).
    
    **SSL Connection**
    
    Specifies whether to enable SSL connections on the AD or LDAP server. Valid values:
    
    -   **Yes**: After you enable SSL connections, data on the AD or LDAP server is encrypted for transmission to ensure data security.
        
    -   **No**: SSL connections are not enabled.
        
    
    **Base DN**
    
    The base distinguished name (DN) of the users to be authenticated. After you set this parameter, SASE authenticates all accounts under this node. The authenticated accounts can be used to log on to the SASE client. The base DN must be 2 to 100 characters in length.
    
    **Note**
    
    If the users and groups to be authenticated are not under the same node in LDAP, set **User Base DN** and **Group Base DN** in **Advanced Settings**.
    
    **Organizational Structure Synchronization**
    
    Enter the administrator DN and password to obtain the list of enterprise directory structures from the identity source.
    
    **Note**
    
    After the configuration, you can issue security policies in batches based on the enterprise directory structure list. The system does not read your employee information when you issue security policies.
    
    **Logon Username Attribute**
    
    Set the logon username attribute to standardize the format of logon usernames for your company's users. You must define this attribute within your company.
    
    You can select a default LDAP attribute for the username, such as **cn**, **name**, **givenName**, **displayName**, **userPrincipalName**, or **sAMAccountName**. You can also enter another LDAP-defined attribute to use as the **Logon Username Attribute**.
    
    **Note**
    
    The **userPrincipalName** attribute includes a domain suffix. If you select **userPrincipalName** as the **Logon Username Attribute**, you must enter the corresponding domain suffix at logon. For example, user\*\*\*@aliyundoc.com.
    
    **Group Name Attribute**
    
    Set the group name attribute to standardize the format of group names in your company. You must define this attribute within your company.
    
    You can select a default LDAP attribute for the group name, such as **cn**, **name**, or **sAMAccountName**. You can also enter another LDAP-defined attribute to use as the **Group Name Attribute**.
    
    **Group Mapping Attribute**
    
    Set the group mapping attribute to define the group relationships of your company's users. Default value: **memberOf**.
    
    **Note**
    
    This parameter is optional. If you configure this parameter, its value must be the same as the value of the **Group Mapping Attribute** that you set in LDAP.
    
    **Group Filter**
    
    Add a group filter expression to filter your company's users in different groups. This lets you manage access permissions for users in different groups.
    
    Examples of common LDAP filters:
    
    -   (&(objectClass=organizationalUnit)(objectClass=organization)): searches for groups whose objectClass attribute matches both organizationalUnit and organization.
        
    -   (|(objectClass=organizationalUnit)(objectClass=organization)): searches for groups whose objectClass attribute matches either organizationalUnit or organization.
        
    -   (!(objectClass=organizationalUnit)): searches for groups whose objectClass attribute does not match organizationalUnit.
        
    
    For more information about the specific matching rules of LDAP, see the official LDAP document [LDAP Filters](https://ldap.com/ldap-filters/?spm=a2c4g.11186623.0.0.772012c2xZHZJj).
    
    **User Filter**
    
    You can add a filter expression to filter a specific user or a type of user.
    
    Examples of common LDAP filters:
    
    -   (&(objectClass=person)(objectClass=user)): searches for users whose objectClass attribute matches both person and user.
        
    -   (|(objectClass=person)(objectClass=user)): searches for users whose objectClass attribute matches either person or user.
        
    -   (!(objectClass=person)): searches for users whose objectClass attribute does not match person.
        
    
    For more information about the specific matching rules of LDAP, see the official LDAP document [LDAP Filters](https://ldap.com/ldap-filters/?spm=a2c4g.11186623.0.0.772012c2xZHZJj).
    
    **Automatic Synchronization**
    
    After you enable **Automatic Synchronization**, the system automatically synchronizes information from LDAP based on the synchronization mode.
    
    If you do not enable **Automatic Synchronization**, you must manually synchronize the organizational structure. For more information, see [View synchronization records](#a562e5a895fpv).
    
    **Synchronize User Information**
    
    After you enable **Synchronize User Information**, the system automatically synchronizes employee information from LDAP based on the **Automatic Synchronization Cycle**.
    
    **Note**
    
    If the **Automatic Synchronization** feature is disabled, the **Synchronize User Information** feature is not performed.
    
    **Automatic Synchronization Cycle**
    
    Set the **Automatic Synchronization Cycle**. You can set the interval to a value from 1 hour to 24 hours.
    
6.  In the **Synchronization Settings** step, configure the synchronization scope and field mappings for the organizational structure. Then, click **Next**.
    
    **Configuration item**
    
    **Description**
    
    **Organizational Structure Synchronization**
    
    Configure the scope for synchronizing the organizational structure.
    
    -   **Synchronize All**: Synchronizes the entire LDAP organizational structure to the SASE system.
        
    -   **Partially Synchronize**: Select the organizational structures that you want to synchronize.
        
    
    **Field Synchronization Mapping**
    
    Configure the mappings between LDAP organizational structure fields and SASE synchronization fields.
    
    **Note**
    
    If the built-in **Local Field After Mapping** in the SASE system do not meet your business requirements, you can click **View Extended Fields** in the upper-right corner of the list. In the **View Extended Fields** panel, you can add, edit, or delete extended fields.
    
7.  In the **Logon Settings** step, configure the logon methods for devices as described in the following table.
    
    **Configuration item**
    
    **Description**
    
    ****PC Logon Method****
    
    **Logon with Account and Password** and **Password-free Logon** are supported.
    
    -   If you use username and password logon, you can enable **Two-factor Authentication**. Valid values:
        
        -   **OTP-based Authentication**: After you enable this, you must select an **OTP Mode**. The following three modes are supported:
            
            -   Allow the SASE mobile client to display tokens: SASE provides a built-in OTP, which requires employees to install the SASE mobile app.
                
            -   Allow tokens from third-party apps: Make sure that the clock of the OTP client is synchronized. Standard and common OTP authentication software, such as the Alibaba Cloud app, is supported.
                
            -   Allow company-owned tokens: To use your company's self-developed OTPs, contact technical support for configuration.
                
        -   **Verification Code-based Authentication**: Supports text message verification codes and email verification codes. Make sure that a mobile number or email address is entered for each user in the configured identity source.
            
    -   If you use password-free logon, you must first download and log on to the SASE mobile app, and then scan the QR code for authentication.
        
    
    ****Mobile Device Logon Method****
    
    **Logon with Account and Password** and **Fingerprint or Face Recognition** are supported.
    
    -   If you use username and password logon, you can enable **Two-factor Authentication**. Valid values:
        
        -   **OTP-based Authentication**: Before you enable **OTP-based Authentication**, you must enable OTP authentication for PCs and select **Allow Tokens on Third-party Applications** or **Allow Enterprise-owned Tokens**. The token configuration for mobile devices is the same as that for PCs.
            
        -   **Verification Code-based Authentication**: Before you enable **Verification Code-based Authentication**, make sure that email address is entered for each user in the configured identity source.
            
    -   If you use fingerprint or facial recognition authentication, you still need to enter a username and password when you log on to the SASE App for the first time.
        
    
8.  After you complete the configuration, you can click **Logon Test** at the bottom of the panel. After the logon test is successful, click **OK** to complete the configuration.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5807464571/p988511.png)
    
    **Note**
    
    If your configuration data is incorrect, SASE prompts you with the corresponding error. If the message **Failed To Connect To The LDAP Server. Contact The Administrator.** appears after you test the connection, check whether the server address and port are correct and whether the server network is functioning properly.
    

## **View synchronization records**

1.  On the **Identity synchronization** tab, find the desired identity source and click **Synchronize Records** in the **Actions** column.
    
2.  On the **Synchronize Records** page, you can view the synchronization records for the identity source.
    
3.  In the **Synchronization Task** area on the left side of the page, click a specific sync task to view its synchronization information in the list on the right.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5807464571/p989164.png)
    
4.  Click **Details** in the **Actions** column for a specific task to view the field information of the **Third-party Data Source** and the **SASE Data Source** for that synchronization.
    

### **Manual synchronization**

If you did not enable **Automatic Synchronization** when you configured the identity source, or if the structure of your identity source has changed, you must manually synchronize the information. To do this, click **Create Synchronization Task** and then click **OK**. Wait for the sync task to complete successfully before you view the synchronization records.

**Note**

After the synchronization is successful, you can view the synchronized organizational structure and employee information on the **Identity Authentication** > **Identity Access** > **Employee Center** tab. For more information, see [Employee Center](/help/en/sase/user-guide/employee-center).

## **Disable automatic synchronization**

-   On the **Identity synchronization** page, find the desired identity source and turn off the switch in the **Automatic Synchronization** column.
    
-   In the **Edit IdP** panel, turn off the automatic synchronization switch.
    

## **Edit an LDAP identity source**

On the **Identity synchronization** page, find the desired LDAP identity source and click **Edit** in the **Actions** column to modify its information.

## **Disable an LDAP identity source**

On the **Identity synchronization** tab, find the desired LDAP identity source and turn off the switch in the **IdP Status** column.

## **Delete an LDAP** **identity source**

On the **Identity synchronization** page, find the desired LDAP identity source and click **Delete** in the **Actions** column.

## **References**

**Configure a SASE identity source**

If your company does not use any identity source, you can use the custom identity source provided by SASE to establish an organizational structure. For more information, see [Configure a SASE identity source](/help/en/sase/user-guide/configure-sase-custom-identity-source).

**Connect to a third-party identity source**

If your company uses an identity source such as LDAP, DingTalk, WeCom, Lark, or IDaaS to manage its organizational structure, you can connect the identity source to SASE.

-   [Connect to a DingTalk identity source](/help/en/sase/user-guide/connect-a-dingtalk-identity-source)
    
-   [Connect to a WeCom identity source](/help/en/sase/user-guide/connect-a-wecom-identity-source)
    
-   [Connect to a Lark identity source](/help/en/sase/user-guide/connect-a-lark-data-source)
    
-   [Connect to an IDaaS identity source](/help/en/sase/user-guide/connect-an-idaas-identity-source)
    

**Configure a user group**

To create user groups outside your company's organizational structure, see [User group management](/help/en/sase/user-guide/manage-user-groups).
