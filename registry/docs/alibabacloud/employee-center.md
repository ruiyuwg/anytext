This document describes how to view the organization chart and user information from created identity sources. You can also add organization charts and users for custom identity sources.

## **Background information**

If your company does not use an identity source to manage its organization chart, you can create a custom identity source in SASE to validate user identities. If you already use an identity source, connect it to SASE to sync your organization chart. This allows employees to use their corporate identity to log on to the SASE App. After you create an identity source, you can go to the Employee Center to view the synchronized organization chart and employee information from third-party identity sources. You can also create an organization chart and add users for custom identity sources.

## **Prerequisites**

You have created an identity source and synchronized the information from the third-party identity source. For more information, see [Identity synchronization](/help/en/sase/user-guide/identity-synchronization/).

## **Custom identity sources**

After you create a custom identity source, you can add and manage its departments and users in the Employee Center.

### **Add departments and users**

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Identity Authentication** > **Identity Access**.
    
3.  On the **Employee Center** tab, select a custom identity source from the drop-down list.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0899464571/p989354.png)
    
4.  Click **Create Department**. In the dialog box, enter a **Department Name** and click **OK**.
    
    You can repeat this step to create multiple departments.
    
5.  Select the department to which you want to add users and click **Add User**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0899464571/p989374.png)
    
6.  In the **Add User** panel, configure the user information and click **OK**.
    
    User information includes **Username** (required), **Password**, **Department** (required), **Position**, **Email Address** (required), **Mobile Phone Number**, **Employment Status**, and **Account Expiration Time**.
    
    You can add user information in one of the following two ways:
    
    -   **Manually Add**
        
        Configure the parameters for the user.
        
    -   **Batch Import**
        
        Click **Download Import Template**, enter the user information, and then upload the file.
        
    
    **Important**
    
    -   If you do not configure a **Password**, SASE sends the username and an automatically generated password to the user's email address after the user is added. These credentials are used to log on to the SASE App. Keep this information secure.
        
    

### **Manage user information**

1.  Select a department to view the user information for that department in the list.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0899464571/p989393.png)
    
    -   **Account Status**:
        
        -   **Pending Activation**: The user has not logged on to the SASE App.
            
        -   **Enabled**: The user has successfully logged on to the SASE App.
            
        -   **Suspended**: The user account is frozen. The user cannot log on to the SASE App, and any logged-on users are forced to log out.
            
    -   **Account Expiration Time**: After the account expires, the **Account Status** is automatically updated to **Suspended**.
        
2.  You can view user details, edit user information, or delete users.
    
    -   **View details**
        
        1.  In the **Actions** column, click **Details**.
            
        2.  In the **Details** panel, you can view the user's detailed information.
            
            -   For users whose **Account Status** is **Enabled** or **Pending Activation**, you can click **Disable Account**.
                
                After an account is frozen, the user cannot log on to the SASE App. Any logged-on users are forced to log out.
                
            -   For users whose **Account Status** is **Suspended**, you can click **Enable Account**.
                
    -   **Edit**
        
        1.  In the **Actions** column, click **Edit**.
            
        2.  In the **Edit User** panel, modify the user information and click **OK**.
            
    -   **Delete**: In the **Actions** column, click **Delete**, and then click **OK**.
        
        **Important**
        
        After a user is deleted, the user can no longer log on to the SASE App. Proceed with caution.
        

## **Third-party identity sources**

After you create an identity source and enable automatic synchronization, you can view the synchronized organization chart and employee information in the Employee Center.

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Identity Authentication** > **Identity Access**.
    
3.  On the **Employee Center** tab, select a third-party identity source from the drop-down list to view its organization chart and employee information.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0899464571/p989402.png)
    
    -   **Account Status**:
        
        -   **Pending Activation**: The user has not logged on to the SASE App.
            
        -   **Enabled**: The user has successfully logged on to the SASE App.
            
        -   **Suspended**: The user account is frozen. The user cannot log on to the SASE App, and any logged-on users are forced to log out.
            
    -   **View details**
        
        1.  In the **Actions** column, click **Details**.
            
        2.  In the **Details** panel, you can view the user's detailed information.
            
            -   For users whose **Account Status** is **Enabled** or **Pending Activation**, you can click **Disable Account**.
                
                After an account is frozen, the user cannot log on to the SASE App. Any logged-on users are forced to log out.
                
            -   For users whose **Account Status** is **Suspended**, you can click **Enable Account**.
                
    -   **Edit**
        
        1.  In the **Actions** column, click **Edit**.
            
        2.  In the **Edit User** panel, you can only modify the user's **Position** and **Employment Status**. Then, click **OK**.
            
    
    **Note**
    
    For third-party identity sources, you cannot add new users, modify important user information (such as organizational departments, mailboxes, or phone numbers), or delete user information. To perform these operations, you must use the console of the corresponding third-party identity source. After the operations are complete, perform an [identity synchronization](/help/en/sase/user-guide/identity-synchronization/).
