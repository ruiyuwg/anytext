When a user logs on to the Secure Access Service Edge (SASE) client from a terminal for the first time, the terminal is registered under the name of the user. This topic describes how to configure a terminal registration policy, review an over-quota registration application, and review an application to uninstall the SASE client.

## Configure a terminal registration policy

If the number of terminals that a user registers is greater than the quota specified in the terminal registration policy, the user must submit an over-quota registration application to register more terminals. SASE displays submitted applications on the Over-quota Registration tab. You can approve or reject the applications based on your business requirements. After an application is approved, the user can register the terminal and use the terminal to access office applications.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, choose **Terminal Management** > **Terminal Registration**.
    
3.  On the **Registered Terminal** tab, click **Registration Policy**.
    
4.  On the **Registration Policy** page, click **Add**.
    
5.  In the **Create Policy** panel, configure the parameters. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Policy Name**
    
    Specify a policy name.
    
    The name must be 1 to 128 characters in length, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.).
    
    **Enterprise Device Registration Limit** and **Personal Device Registration Limit**
    
    -   **By Total Number**: Specify the maximum number of terminals that a user can register.
        
    -   **By Terminal Type**: Specify the maximum numbers of PC terminals and mobile terminals that a user can register.
        
    
    **Priority**
    
    Specify a policy priority.
    
    The priority value ranges from 0 to 99. A smaller value indicates a higher priority.
    
    **Applicable User**
    
    -   All Users
        
    -   Some Users
        
    
    **Exception User**
    
    Specify the user that is excluded from the terminal registration policy.
    
    **Status**
    
    Specify whether to enable the policy. The policy takes effect only after it is enabled.
    
    After you complete the configuration, the registration policy information is displayed on the Registration Policy page.
    
    You can perform the following operations on the registered terminals.
    
    -   Disable: By default, the logon accounts of users are enabled. You can manually change the value of the **Account Status** parameter based on your business requirements. A disabled account cannot be used to access office applications.
        
    -   Query: You can query the registered terminal information.
        
    -   Import Enterprise Device: You can click **Registration Policy**. On the **Registration Policy** page, you can click **Import Enterprise Device** and follow the instructions to import all enterprise devices.
        
    -   Imported MAC Addresses: You can click **Registration Policy**. On the **Registration Policy** page, you can view the imported MAC addresses.
        
    

## Review over-quota registration applications

After a user submits an over-quota registration application, you must review the application. After you approve the application, the policy takes effect within 3 minutes to 5 minutes. After the policy takes effect, users can use the allowed terminal to log on to the SASE client.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, choose **Terminal Management** > **Terminal Registration**.
    
3.  On the **Over-quota Registration** tab, view the over-quota registration applications of users.
    
    You can perform the following operations based on your business requirements.
    
    -   Allow: In the **Actions** column, click **Allow** to approve an application. After you allow an application, the status of the application is **Approved**. The allowed terminal is displayed on the **Registered Terminal** tab.
        
    -   Reject: In the **Actions** column, click **Reject** to reject an application. After you reject an application, the status of the application is **Rejected**. The rejected terminal cannot access office applications.
        
    -   Query:
        
        -   Query by status
            
            In the upper part of the application list, click the **All** drop-down list and select a desired filter condition to search for specific applications. The following filter conditions are supported: **All**, **Pending Review**, **Approved**, and **Rejected**.
            
        -   Query by username, department, and MAC address
            
            In the upper part of the application list, click the **Username** drop-down list, select a desired search filter, and enter information about the application that you want to review in the search box.
            
    

## Configure an anti-uninstallation policy and review an uninstallation application

You can enable the anti-uninstallation and auto-start and anti-logoff features for the SASE client to manage the access requests of users. If you enable the anti-uninstallation feature, a user must submit an uninstallation application to uninstall the SASE client. After you approves the application, the user can uninstall the SASE client.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, choose **Terminal Management** > **Terminal Registration**.
    
3.  On the **Uninstallation Approval** tab, click **Anti-uninstallation Policy**.
    
4.  In the **Client Anti-uninstallation Policy** panel, configure an anti-uninstallation policy for users. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Client Configuration Switch**
    
    -   **Client Anti-uninstallation**: If you turn on this switch, users are not allowed to uninstall the SASE client.
        
    -   **Client Auto-start and Anti-logoff**: If you turn on this switch, the SASE client automatically starts on the terminals of users and does not exit.
        
    
    **Effective Scope**
    
    Specify the users or user groups to which the anti-uninstallation policy of the SASE client applies.
    
    **Whitelist**
    
    Configure a whitelist. Users in the whitelist can manually uninstall the SASE client. The users are not restricted by the anti-uninstallation policy.
    
    **Approval Process Configuration**
    
    Specify whether users can submit an uninstallation application for approval.
    
    If you select **Users can submit an application for approval**, you must select an appropriate approval workflow. For more information, see [Configure an approval workflow](/help/en/sase/user-guide/manage-the-approval-process).
    
    **Prompt Display Configuration**
    
    Configure the prompt message that appears in the dialog box when users want to uninstall the SASE client. You can configure the message in Chinese and English.
    
5.  Click **OK**.
    
    SASE applies the configured anti-uninstallation policy to users within the effective scope.
    
6.  On the **Uninstallation Approval** tab, view the uninstallation applications submitted by users.
    
    Perform the following operations based on your business requirements.
    
    -   Allow: In the **Actions** column, click **Allow** to approve an uninstallation application. After you approve an uninstallation application, the status of the application is **Approved**. The user can uninstall the SASE client from a specific terminal.
        
    -   Reject: In the **Actions** column, click **Reject** to reject an uninstallation application. After you reject an uninstallation application, the status of the application is **Rejected**. The user cannot uninstall the SASE client from a specific terminal.
        
    -   Query:
        
        -   Query by status
            
            In the upper part of the application list, click the **Review Status** drop-down list and select a desired state to filter the applications.
            
        -   Query by username, department, MAC address, and device name
            
            In the upper part of the application list, click the **Username** drop-down list, select a desired search filter, and then enter the information about the uninstallation application that you want to query in the search box.
