If your enterprise uses Active Directory (AD) domains to manage user accounts, you can use Elastic Desktop Service (EDS) Enterprise as the service provider (SP) and Active Directory Federation Services (AD FS) as the identity service provider (IdP). Security Assertion Markup Language (SAML) is the protocol basis for the SP and IdP to exchange metadata files with each other to implement single sign-on (SSO). This topic describes the implementation in detail.

## Background information

Single sign-on (SSO) is a secure communication technology that allows you to efficiently access multiple trusted application systems with a single sign-on. SSO implements logon based on identity federation.

The following terms are frequently used in SSO scenarios:

-   Identity provider (IdP): an entity that contains the metadata of an external identity provider. An IdP provides identity management services, collects and stores user identity information such as usernames and passwords, and verifies user identities on user logons.
    
    Common IdPs:
    
    -   On-premises IdPs: use on-premises architecture, such as Microsoft Active Directory Federation Service (AD FS) and Shibboleth.
        
    -   Cloud IdP: Azure AD, Google Workspace, Okta, and OneLogin.
        

-   Service provider (SP): an application that uses the identity management feature of an IdP to provide users with specific services based on trust relationships with IdPs. In specific identity systems that do not comply with the Security Assertion Markup Language (SAML) protocol, such as OpenID Connect (OIDC), SP is the relying party of an IdP.
    
-   SAML 2.0: a standard protocol for user identity authentication for enterprises. It is one of the technical implementations for communication between SPs and IdPs. SAML is a de facto standard that is used by enterprises to implement SSO.
    

If you create enterprise AD office networks in the EDS Enterprise console to connect to your AD system, the EDS Enterprise system collects your AD system information. If you do not want to do so, you can create convenience accounts whose information is the same as AD users in the EDS Enterprise console to implement SSO.

**Note**

If an enterprise AD office network is created and connected to your AD system, implement SSO by configuring AD users. For more information, see [Implement SSO for Elastic Desktop Service for AD users by using AD FS](/help/en/wuying-workspace/use-cases/configure-sso-for-ad-users-1#task-2061794).

## **Preparations**

To create convenience accounts in the EDS Enterprise console, choose one of the following methods:

-   Manual entry: Enter user information to create a convenience account one by one. This method is suitable for scenarios in which a few users exist.
    
    **Important**
    
    When you enter user information, make sure that the usernames of convenience accounts that you are creating are the same as those of AD users. Usernames are not case-sensitive.
    
-   Batch entry: Use a .csv file to import user information and create multiple convenience accounts at a time. This method is suitable for scenarios in which many users exist.
    

If you use the batch entry method, perform the following steps to prepare a valid .csv file.

1.  Create a .csv file that contains AD user information on the AD domain server.
    
    1.  Check whether existing user information meet format requirements.
        
        **Important**
        
        The usernames of AD users must meet the format requirements of usernames for EDS Enterprise convenience accounts. Otherwise, you cannot create the conveniences accounts that correspond to AD users. For more information, see [Naming conventions of convenience users](/help/en/wuying-workspace/user-guide/end-user-overview#sc-convenience-user-naming-convention).
        
    2.  Run the `Get-ADUser` command in PowerShell to export the .csv file that contains AD users.
        
        You can modify parameters in the command to export a .csv file based on your business requirements. For example, if you want to export a .csv file that contains all AD user information and save the file to a specific path, run the following command:
        
        ```
        Get-ADUser -filter * | export-csv <File path> -Encoding utf8
        ```
        
        If you want to save the file to the `C:\Users` directory and name the file test.csv, run the following command:
        
        ```
        Get-ADUser -filter * |export-csv C:\Users\test.csv -Encoding utf8
        ```
        
2.  Use the spreadsheet software to open the file, modify the format of user information based on the username conventions of convenience accounts, and then save the file.
    
    When you modify user information, take note of the following username conventions:
    
    -   Formats:
        
        -   User-activated convenience users: The first column is Username, the second column is Email address, and the third column is Phone. The third column is optional.
            
        -   Administrator-activated convenience users: The first column is Username, the second column is Email, the third column is Phone, and the fourth column is Password. The second and third columns are optional.
            
    -   In the exported .csv file, the SamAccountName column is considered as the username column and the UserPrincipalName column is considered as the email address column. If the actual email address of an AD user is different from that specified in the UserPrincpleName column, replace the current email address with a new one.
        
    

## Step 1: Create convenience accounts

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Users** > **Users & Organizations**.
    
3.  On the **Users & Organizations** page, click the **User** tab, and then click **Create User**. Use one of the following methods to create a convenience account:
    
    ### **Manual creation**
    
    Click the **Manual Entry** tab, configure the following parameters as needed, and then click **Create User**.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    User Type
    
    Yes
    
    The type of the convenience account. Valid values: **User-activated** and **Administrator-activated**.
    
    Username
    
    Yes
    
    The username of the convenience account. It must contain 3 to 25 characters in length and must start with a letter or digit. It can contain lowercase letters, digits, hyphens (-), underscores (\_), and periods (.). The username must not consist solely of digits or match the built-in username reserved in the operating system. For more information, see [Naming conventions of convenience users](/help/en/wuying-workspace/user-guide/end-user-overview#sc-convenience-user-naming-convention).
    
    Display Name
    
    No
    
    The display name of the convenience account, which is used for identification purposes and is not visible to end users.
    
    Contact Info (Email Address)
    
    Yes
    
    The email address designated to receive notifications, including cloud computer assignments, login information, initial passwords, and password reset links. Make sure that the email address you specify is valid.
    
    Parent Organization
    
    No
    
    The organization to which the convenience account belongs. You can select an organization in this step or add the convenience account to an organization after you create the account.
    
    Password
    
    Yes
    
    This parameter is required if you set the **User Type** parameter to **Administrator-activated**. The password must be at least 10 characters in length and include at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters (excluding spaces).
    
    Password Validity
    
    No
    
    The validity period of the password. By default, the password is permanently valid. You can also enter a validity period that ranges from 30 to 365 days. When the password expires, you must change the password before you can proceed to log on.
    
    Lock On
    
    This parameter is required if you set the **User Type** parameter to **Administrator-activated**. After the convenience account is locked, end users cannot use the account to log on to Alibaba Cloud Workspace terminals.
    
    Grant Admin Permission
    
    No
    
    Specifies whether to grant local administrator permissions to the convenience account. By default, the **Grant Admin Permission** parameter is set to **Yes**. If you do not want to grant the permissions, select **No**.
    
    **Note**
    
    -   Local administrators can install software and modify system settings in cloud computers.
        
    -   Changes to local administrator permissions take effect following a cloud computer restart.
        
    
    Remarks
    
    No
    
    The supplementary information about the convenience account.
    
    ### **Batch creation**
    
    Click the **Batch Entry** tab, configure the following parameters as needed, and then click **Close**.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    User Type
    
    Yes
    
    The type of the convenience account. Valid values: **User-activated** and **Administrator-activated**.
    
    Password Validity
    
    No
    
    The validity period of the password. By default, the password is permanently valid. You can also enter a validity period that ranges from 30 to 365 days. When the password expires, you must change the password before you can proceed to log on.
    
    Lock On
    
    No
    
    This parameter is required if you set the **User Type** parameter to **Administrator-activated**. After the convenience account is locked, end users cannot use the account to log on to Alibaba Cloud Workspace terminals.
    
    Grant Admin Permission
    
    No
    
    Specifies whether to grant local administrator permissions to the convenience account. By default, the **Grant Admin Permission** parameter is set to **Yes**. If you do not want to grant the permissions, select **No**.
    
    **Note**
    
    -   Local administrators can install software and modify system settings in cloud computers.
        
    -   Changes to local administrator permissions take effect following a cloud computer restart.
        
    
    Upload File
    
    Yes
    
    1.  Click **Download** to download a template for importing user information. Open the template, enter user information in the format provided by the template, and then save the template.
        
        -   If you want to create user-activated convenience accounts, specify values in the `Username` and `Email` columns of the template.
            
        -   If you want to create administrator-activated convenience accounts, specify values in the `Username` and `Password` columns of the template.
            
        -   If you want to specify an organization for each convenience account that you want to import, enter the organization ID in the `OrgId` column of the template. To obtain the value of `OrgId`, hover the cursor over the organizational structure as shown in the following figure.
            
            ![f_orgid](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1272167371/p900709.png)
            
        
    2.  Click **Upload Local File** and select the template containing the account information. The system will automatically import the data.
        
        After the template is imported to the EDS Enterprise console, a message confirming the creation of convenience accounts will appear in the **Create User** panel. Click **View Account** to verify the imported data items and verify whether the account information in the template is in a valid format if the import fails.
        
    
4.  Click **Close**.
    
    After you create the convenience account, you can view the account information on the **User** tab. The convenience account is in the **Normal** state.
    
    **Note**
    
    The system does not send notifications when convenience accounts are created. The system sends notifications to specified email addresses when you assign cloud computers or cloud computer pools to the convenience accounts.
    

## **Step 2: Configure AD FS as the trusted SAML IDP in the** **EDS Enterprise console**

1.  Obtain IdP metadata file of AD FS and download the file to your on-premises device.
    
    IdP metadata file URL: `https://<AD FS server>/FederationMetadata/2007-06/FederationMetadata.xml`. `<AD FS Server>` indicates the domain name or IP address of your AD FS server.
    
2.  Upload the IdP metadata file to the EDS Enterprise console.
    
    1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Networks & Storage** > **Office Networks**.
        
    3.  In the upper-left corner of the top navigation bar, select a region.
        
    4.  On the **Office Networks** page, find the office network for which you want to enable SSO and click the office network ID.
        
    5.  On the office network details page, click **Show** in the upper-right corner of **Other Information** section, and then turn on **SSO**.
        
    6.  Click **Upload File** next to **IdP Metadata** and upload the IdP metadata file.
        

## **Step3: Configure** **EDS Enterprise** **as the trusted SAML SP in AD FS**

1.  Obtain the metadata file in the Elastic Desktop Service (Enterprise Edition) console.
    
    1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Networks & Storage** > **Office Networks**.
        
    3.  **On the **Office Network (Formerly Workspace)** page**, find the office network for which you want to enable SSO and click the office network ID.
        
    4.  In the left-side navigation pane of the office network details page, click the **Other** tab.
        
    5.  On the **Other** tab, click **Download Application Metadata File** to the right of **Application Metadata**.
        
        The downloaded metadata file is automatically saved to the Download folder of your local computer.
        
2.  Upload the SP metadata file of EDS Enterprise to AD FS.
    
    1.  Log on to the server of AD FS and open Server Manager.
        
    2.  In the upper-right corner, choose **Tools** > **AD FS Management**.
        
    3.  In the left-side navigation pane of the **AD FS** window, choose **Trust Relationships** > **Relying Party Trusts**.
        
    4.  In the Actions section on the right, click **Add Relying Party Trust**.
        
    5.  Complete the subsequent operations as prompted.
        
        In the Select Data Source step, select **Import data about the relying party from a file** and import the SP metadata file of EDS Enterprise. Retain the default settings in next steps.![ADFS1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0509098161/p258662.png)
        
3.  Modify the claim issuance policy of the relying party trust and configure SAML assertion attributes for EDS Enterprise.
    
    1.  In the list of relying party trusts, right-click the relying party trust that you added in the previous step and select **Edit Claim Issuance Policy**.
        
    2.  In the dialog box that appears, click **Add Rule**.
        
    3.  Configure claim rules.
        
        Take note of the following items when you configure claim rules:
        
        -   In the Choose Rule Type step, select **Transform an Incoming Claim** from the Claim rule template drop-down list.
            
        -   In the Configure Claim Rule step, select **UPN** from the Incoming claim type drop-down list and **Name ID** from the Outgoing claim type drop-down list.
            
        

## Step 4: Check whether the SSO is configured

**Note**

In this example, the Windows client V7.2.2 of Alibaba Cloud Workspace is used.

1.  Open the Windows client, select **Enterprise Edition** in the upper part of the page, select the check box next to the privacy policy, enter an organization ID or office network ID from the received logon credentials, and then click the icon. ![pg_enter_orgid_or_networkid.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6454393371/p689440.png)
    
2.  On the AD FS logon page, enter the username of a convenience account that you created in the preceding section. Then, the AD FS system verifies the user identity.
    
    After the identity verification is passed, you can find the desired cloud computer after logging on to the client. Then, hover the pointer on the card of the cloud computer, click **Start** and **Connect Cloud Computer** to use the cloud computer.
