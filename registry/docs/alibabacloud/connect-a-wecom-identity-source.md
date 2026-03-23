SASE uses identity-driven security policies. If your company uses a WeCom identity source to manage its organizational structure, you can connect the WeCom identity source to SASE. This eliminates the need to create separate identity information for your employees. After you connect the WeCom identity source, employees can log on to the SASE App using their existing company accounts. This topic describes how to connect a WeCom identity source.

## Limits

**You can enable a maximum of five identity sources at the same time, and only one of them can be a custom identity source**. If you have reached the quota for enabled identity sources, you must disable an existing identity source before you can enable a new one.

## Configure a WeCom identity source

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane, choose **Identity Authentication** > **Identity Access**.
    
3.  On the **Identity synchronization** tab, click **Create IdP**.
    
4.  In the **Create IdP** panel, select **WeCom**, click **Configure**, and then configure the parameters as described in the following table.
    
    **Configuration Item**
    
    **Description**
    
    **IdP Name**
    
    The name of the WeCom identity source.
    
    The name must be 2 to 100 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (\_).
    
    **Description**
    
    The description of the configuration.
    
    This description is displayed as the logon title on the SASE client to provide identity source information during logon.
    
    **IdP Status**
    
    Configure the status for the identity source. The valid values are:
    
    -   **Enabled**: The identity source is enabled after it is created.
        
    -   **Closed**: The identity source is disabled after it is created.
        
        **Important**
        
        If you disable an identity source, end users cannot use the SASE app to access internal applications. Proceed with caution.
        
    
    **Automatic Synchronization**
    
    After you enable **Automatic Synchronization**, the system automatically synchronizes information from WeCom based on the synchronization mode.
    
    If you do not enable **Automatic Synchronization**, you must manually synchronize the organizational structure. For more information, see [View synchronization records](/help/en/sase/user-guide/connect-an-ldap-identity-source#a562e5a895fpv).
    
    **Synchronize User Information**
    
    After you enable **Synchronize User Information**, the system automatically synchronizes employee information from WeCom based on the **Automatic Synchronization Cycle**.
    
    **Note**
    
    The **Synchronize User Information** feature does not take effect if the **Automatic Synchronization** feature is disabled.
    
    **Automatic Synchronization Cycle**
    
    Set the **Automatic Synchronization Cycle**. You can set the interval to a value from 1 hour to 24 hours.
    
5.  Click **Obtain Authorization QR Code** and use a WeCom administrator account to scan the QR code.
    
6.  After the authorization is successful, the new WeCom identity source appears on the **Identity synchronization** tab.
    
7.  Click **Edit** in the **Actions** column. In the **Edit IdP** panel, configure the **Schema** value. Then, click **Next**.
    
    **Important**
    
    You can submit a [ticket](https://smartservice.console.alibabacloud.com/service/create-ticket) to contact SASE engineers and obtain the **Schema** value.
    
8.  In the **Synchronization Settings** wizard, configure the synchronization scope and field mappings for the organizational structure. Then, click **Confirm**.
    
    **Configuration Item**
    
    **Description**
    
    **Organizational Structure Synchronization**
    
    Configure the synchronization scope for the organizational structure.
    
    -   **Synchronize All**: Synchronizes the entire organizational structure from WeCom to the SASE system.
        
    -   **Partially Synchronize**: Select the organizational structure that you want to synchronize.
        
    
    **Field Synchronization Mapping**
    
    Configure the mappings between the fields of the WeCom organizational structure and the SASE synchronization fields.
    
    **Note**
    
    If the built-in **Local Field After Mapping** in the SASE system do not meet your business requirements, you can click **View Extended Fields** in the upper-right corner of the list. In the **View Extended Fields** panel, you can add, edit, or delete extension fields.
    

**Note**

After you add the WeCom identity source, a self-managed SASE application is automatically created in WeCom. You must set the **Visibility Scope** for the SASE application in WeCom to ensure that the organizational structure is synchronized to the SASE application. For more information, see [How to set the visibility scope for third-party applications](https://open.work.weixin.qq.com/help2/pc/15386?person_id=1).

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
    

## **Edit a WeCom identity source**

On the **Identity synchronization** page, find the WeCom identity source and click **Edit** in the **Actions** column.

## **Disable a WeCom identity source**

On the **Identity synchronization** page, find the WeCom identity source and turn off the switch in the **IdP Status** column.

## **Delete a WeCom identity source**

On the **Identity synchronization** page, find the WeCom identity source and click **Delete** in the **Actions** column.

## **References**

**Configure a SASE identity source**

If your company does not use any identity source, you can use the custom identity source provided by SASE to establish an organizational structure. For more information, see [Configure a SASE identity source](/help/en/sase/user-guide/configure-sase-custom-identity-source).

**Connect a third-party identity source**

If your company uses an identity source such as LDAP, DingTalk, WeCom, Lark, or IDaaS to manage its organizational structure, you can connect it to SASE.

-   [Connect an LDAP identity source](/help/en/sase/user-guide/connect-an-ldap-identity-source)
    
-   [Connect a DingTalk identity source](/help/en/sase/user-guide/connect-a-dingtalk-identity-source)
    
-   [Connect a Lark identity source](/help/en/sase/user-guide/connect-a-lark-data-source)
    
-   [Connect an IDaaS identity source](/help/en/sase/user-guide/connect-an-idaas-identity-source)
    

**Configure a user group**

To create user groups outside the organizational structure, see [User group management](/help/en/sase/user-guide/manage-user-groups).
