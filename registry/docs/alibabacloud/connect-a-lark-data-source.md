Secure Access Service Edge (SASE) enforces identity-driven security policies. If your enterprise uses a Lark identity provider (IdP) to manage its organizational structure, you can connect the Lark IdP to SASE without having to configure user identity information. After you connect the Lark IdP to SASE, your users can log on to the SASE App using their existing enterprise accounts. This topic describes how to connect a Lark IdP to SASE.

## Limits

**You can enable a maximum of five data sources at a time. Only one custom data source can be enabled at a time**. If you reach the quota for enabled data sources, you must disable an existing data source before you can enable a new one.

## Configure a Lark data source

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Identity Authentication** > **Identity Access**.
    
3.  On the **Identity synchronization** tab, click **Create IdP**.
    
4.  In the **Create IdP** panel, select **Lark**, click **Configure**, and then complete the configuration in the wizard.
    
5.  In the **Basic Configurations** wizard, configure the parameters as described in the following table.
    
    **Configuration Item**
    
    **Description**
    
    **IdP Name**
    
    The name of the Lark data source.
    
    The name must be 2 to 100 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (\_).
    
    **Description**
    
    The description of the configuration.
    
    The description is displayed on the SASE client as the logon title. This provides users with the data source information when they log on.
    
    **IdP Status**
    
    Configure the status for the identity source. The valid values are:
    
    -   **Enabled**: The identity source is enabled after it is created.
        
    -   **Closed**: The identity source is disabled after it is created.
        
        **Important**
        
        If you disable an identity source, end users cannot use the SASE app to access internal applications. Proceed with caution.
        
    
    **App ID**
    
    The ID of a self-built application on the Lark platform.
    
    **App Secret**
    
    The password of the self-built application on the Lark platform.
    
    **Advanced Settings** > **Event Subscription**
    
    After you configure event subscription, the organizational structure of your employees is synchronized to SASE. This ensures the timeliness of SASE security policies when the organizational structure is adjusted or employees resign.
    
    -   **Encrypt Key**
        
        Obtain this value from the **Address Book Synchronization** page on the [Lark Open Platform](https://open.feishu.cn/?lang=zh-CN).
        
    -   **Verification Token**
        
        Obtain this value from the **Address Book Synchronization** page of the target application on the [Lark Open Platform](https://open.feishu.cn/?lang=zh-CN).
        
    -   **Request URL**: This value is used to configure the redirection URL on the [Lark Open Platform](https://open.feishu.cn/?lang=zh-CN).
        
        Subscribed events: **Department Created**, **Department Deleted**, **Department Information Changed**, **Employee Resigned**, and **Employee Information Changed**.
        
    
    **Redirect URL**
    
    Static field: **https://login.aliyuncsas.com/open-dev/feishu**.
    
    This value is used to configure the redirection URL in **[Lark Open Platform](https://open.feishu.cn/?lang=zh-CN)** > **Developer Console** > **Enterprise-built Application** > **Security Settings**.
    
    **Automatic Synchronization**
    
    After you enable **Automatic Synchronization**, the system automatically synchronizes information from Lark based on the synchronization mode.
    
    If you do not enable **Automatic Synchronization**, you must manually synchronize the organizational structure. For more information, see [View synchronization records](/help/en/sase/user-guide/connect-an-ldap-identity-source#a562e5a895fpv).
    
    **Synchronize User Information**
    
    After you enable **Synchronize User Information**, the system automatically synchronizes employee information from Lark based on the **Automatic Synchronization Cycle**.
    
    **Note**
    
    If **Automatic Synchronization** is disabled, the **Synchronize User Information** feature does not take effect.
    
    **Automatic Synchronization Cycle**
    
    Set the **Automatic Synchronization Cycle**. You can set the epoch to a value from 1 hour to 24 hours.
    
6.  Click **Connectivity Test**. After the test is successful, click **Next**.
    
    **Note**
    
    If the **Connection Failed** message appears, check whether the specified information is correct.
    
7.  In the **Synchronization Settings** wizard, configure the synchronization scope of the organizational structure and the field mappings. Then, click **OK**.
    
    **Configuration Item**
    
    **Description**
    
    **Organizational Structure Synchronization**
    
    Configure the synchronization scope for the organizational structure.
    
    -   **Synchronize All**: Synchronizes the entire organizational structure from Lark to SASE.
        
    -   **Partially Synchronize**: Select the organizational structure that you want to synchronize.
        
    
    **Field Synchronization Mapping**
    
    Configure the mappings between Lark organizational structure fields and SASE synchronization fields.
    
    **Note**
    
    If the built-in **Local Field After Mapping** in SASE cannot meet your business requirements, click **View Extended Fields** in the upper-right corner of the list. In the **View Extended Fields** panel, you can add, edit, or delete extension fields.
    

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
    

## **Edit a Lark data source**

On the **Identity synchronization** tab, find the Lark data source that you added and click **Edit** in the **Actions** column to modify the data source information.

## **Disable a Lark data source**

On the **Identity synchronization** tab, find the Lark data source that you added and turn off the switch in the **IdP Status** column.

## **Delete a Lark data source**

On the **Identity synchronization** tab, find the Lark data source that you added and click **Delete** in the **Actions** column to delete the data source.

## **References**

**Configure a SASE data source**

If your enterprise does not use an existing data source, you can use the custom data source provided by SASE to create an organizational structure. For more information, see [Configure a SASE data source](/help/en/sase/user-guide/configure-sase-custom-identity-source).

**Connect to a third-party data source**

If your enterprise uses one of the following data sources to manage its organizational structure, you can connect the data source to SASE: Lightweight Directory Access Protocol (LDAP), DingTalk, WeCom, Lark, or IDaaS.

-   [Connect to an LDAP data source](/help/en/sase/user-guide/connect-an-ldap-identity-source)
    
-   [Connect to a DingTalk data source](/help/en/sase/user-guide/connect-a-dingtalk-identity-source)
    
-   [Connect to a WeCom data source](/help/en/sase/user-guide/connect-a-wecom-identity-source)
    
-   [Connect to an IDaaS data source](/help/en/sase/user-guide/connect-an-idaas-identity-source)
    

**Configure a user group**

To create a user group outside of the organizational structure, see [User group management](/help/en/sase/user-guide/manage-user-groups).
