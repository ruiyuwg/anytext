Secure Access Service Edge (SASE) issues security policies based on identities. If your company uses a DingTalk identity provider to manage its organization, you can connect it to SASE. This allows employees to use their existing company accounts to log on to the SASE App without requiring you to create new identities. This topic describes how to connect to a DingTalk identity provider.

## Limits

**You can enable a maximum of five identity providers at the same time. Only one custom identity provider can be enabled at a time**. If you have reached the limit, disable an existing identity provider before you enable a new one.

## Configure and enable a DingTalk identity provider

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Identity Authentication** > **Identity Access**.
    
3.  On the **Identity synchronization** tab, click **Create IdP**.
    
4.  In the **Create IdP** panel, select **DingTalk**, and then click **Configure**. Complete the configuration by following the steps in the wizard.
    
5.  In the **Basic Configurations** wizard, configure the parameters as described in the following table.
    
    **Configuration Item**
    
    **Description**
    
    **IdP Name**
    
    DingTalk name information.
    
    The name must be 2 to 100 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (\_).
    
    **Description**
    
    The description of the configuration.
    
    This description is displayed as the logon title in the SASE client. It helps you identify the identity provider when you log on.
    
    **IdP Status**
    
    Configure the status for the identity source. The valid values are:
    
    -   **Enabled**: The identity source is enabled after it is created.
        
    -   **Closed**: The identity source is disabled after it is created.
        
        **Important**
        
        If you disable an identity source, end users cannot use the SASE app to access internal applications. Proceed with caution.
        
    
    **CorpId**
    
    The ID of your company in DingTalk. Each company has a unique CorpId. Obtain the CorpID from the homepage of the [DingTalk Open Platform](https://open-dev.dingtalk.com/v2/#/).
    
    **AppKey**
    
    The AppKey of the application that you created in the DingTalk Open Platform. Obtain the AppKey from the **Credentials and Basic Information** page of the target application in the [DingTalk Open Platform](https://open-dev.dingtalk.com/v2/fe/app#/corp/app).
    
    **AppSecret**
    
    The AppSecret of the application that you created in the DingTalk Open Platform. Obtain the AppSecret from the **Credentials and Basic Information** page of the target application in the [DingTalk Open Platform](https://open-dev.dingtalk.com/v2/fe/app#/corp/app).
    
    **Advanced Settings**
    
    **DingTalk Type**: Select **DingTalk Standard** or **Dedicated DingTalk**.
    
    **Event Subscription**: After you configure event subscription, the organizational structure of your employees is synchronized to SASE. This ensures that SASE security policies are promptly updated when the organizational structure is adjusted or when employees leave the company.
    
    -   **AES Encryption Key**
        
        Obtain the encryption aes\_key from the **Event Subscription** page of the target application in the [DingTalk Open Platform](https://open-dev.dingtalk.com/v2/fe/app#/corp/app).
        
    -   **Encryption token**
        
        Obtain the encryption token from the **Event Subscription** page of the target application in the [DingTalk Open Platform](https://open-dev.dingtalk.com/v2/fe/app#/corp/app).
        
    
    **Automatic Synchronization**
    
    After you enable **Automatic Synchronization**, the system automatically synchronizes information from DingTalk based on the synchronization mode.
    
    If you do not enable **Automatic Synchronization**, you must manually synchronize the organizational structure. For more information, see [View synchronization records](/help/en/sase/user-guide/connect-an-ldap-identity-source#a562e5a895fpv).
    
    **Synchronize User Information**
    
    After you enable **Synchronize User Information**, the system automatically synchronizes employee information from DingTalk based on the **Automatic Synchronization Cycle**.
    
    **Note**
    
    If **Automatic Synchronization** is disabled, the **Synchronize User Information** feature does not run.
    
    **Automatic Synchronization Cycle**
    
    Set the **Automatic Synchronization Cycle**. You can set the interval from 1 hour to 24 hours.
    
    **LOGO**
    
    Upload a custom logo.
    
    The required links are provided at the bottom of the panel. Click a link to copy it.
    
    -   **Copy Request URL**: Use this URL to set up subscription management in the [DingTalk Open Platform](https://open-dev.dingtalk.com/#/corpeapp).
        
    -   **Copy Application Homepage Address**: Use this URL to view application details in the [DingTalk Open Platform](https://open-dev.dingtalk.com/#/corpeapp).
        
    -   **Copy Callback Domain Name**: Use this domain name to set the callback domain name in the [DingTalk Open Platform](https://open-dev.dingtalk.com/#/corpeapp).
        
6.  Click **Connectivity Test**. After the test succeeds, click **Next**.
    
    **Note**
    
    If the message **Connection Failed** appears, verify that the server address and server port are correct.
    
7.  In the **Synchronization Settings** wizard, configure the synchronization scope for the organization and the field mappings. Then, click **Confirm**.
    
    **Configuration Item**
    
    **Description**
    
    **Organizational Structure Synchronization**
    
    Configure the scope for synchronizing the organizational structure.
    
    -   **Synchronize All**: Synchronizes the entire organizational structure from DingTalk to SASE.
        
    -   **Partially Synchronize**: Select the specific organizational structures to synchronize.
        
    
    **Field Synchronization Mapping**
    
    Configure the mapping between DingTalk organizational structure fields and SASE synchronization fields.
    
    **Note**
    
    If the built-in **Local Field After Mapping** in SASE does not meet your business needs, click **View Extended Fields** in the upper-right corner of the list. In the **View Extended Fields** panel, you can add, edit, or delete extended fields.
    

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
    

## **Edit a DingTalk identity provider**

On the **Identity synchronization** page, find the DingTalk identity provider and click **Edit** in the **Actions** column to modify its configuration.

## **Disable a DingTalk identity provider**

On the **Identity synchronization** tab, find the DingTalk identity provider and turn off the switch in the **IdP Status** column.

## **Delete a DingTalk identity provider**

On the **Identity synchronization** page, find the DingTalk identity provider and click **Delete** in the **Actions** column.

## **References**

**Configure an SASE identity provider**

If your organization does not use any identity provider, you can use the custom identity provider provided by SASE to build an organization. For more information, see [Configure a SASE identity provider](/help/en/sase/user-guide/configure-sase-custom-identity-source).

**Connect to a third-party identity provider**

If your company already uses an identity provider such as LDAP, DingTalk, WeCom, Lark, or IDaaS to manage its organization, you can connect it to SASE.

-   [Connect to a DingTalk identity provider](#)
    
-   [Connect a WeCom identity source](/help/en/sase/user-guide/connect-a-wecom-identity-source)
    
-   [Connect to a Lark data source](/help/en/sase/user-guide/connect-a-lark-data-source)
    
-   [Connect to an IDaaS identity provider](/help/en/sase/user-guide/connect-an-idaas-identity-source)
    

**Configure user groups**

To create user groups outside of your company's organization, see [Manage user groups](/help/en/sase/user-guide/manage-user-groups).
