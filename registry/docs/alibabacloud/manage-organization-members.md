This topic describes the processes for organization administrators to query, edit, update, export, and remove users.

## Prerequisites

Users must be added to the organization. For more information, see [Add Users](/help/en/quick-bi/user-guide/terms-1#concept-bmn-mqv-tdb/section-a7y-l6u-h2x).

## Limits

Organization administrators face the following restrictions when removing users:

-   Administrators cannot remove themselves.
    
-   Users who are part of a workspace cannot be removed.
    
-   Users who are organization administrators or workspace owners cannot be removed.
    

## Notes

-   Permissions and content granted by the organization will be lost when users are removed; however, their activities in personal workspaces remain unaffected.
    
-   Re-adding a user after removal requires caution and must be done by an organization administrator.
    
    For details on adding users, see [Add Users](/help/en/quick-bi/user-guide/terms-1#concept-bmn-mqv-tdb/section-a7y-l6u-h2x).
    
-   Members can be permanently removed from an organization by administrators.
    
    If user removal fails, first delete the user from the workspace, then remove them from the organization. For instructions on deleting workspace members, see [Delete Workspace Members](/help/en/quick-bi/user-guide/manage-workspace-members#concept-rmm-yxq-pgb/section-es6-8tl-bcf).
    

## Procedure

You can manage users from the organization management page.

1.  Log on to the [Quick BI console](https://bi.data.aliyun.com/).
    
2.  Navigate to the user management page as illustrated below.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5225537371/p897036.png)
    
3.  On the **Member Management** tab, the following actions are available:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7948833371/p711398.png)
    
    -   ① Query users: Enter a keyword, such as a member's nickname or account name, in the search box at the top of the page, and click the ![search](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5122760361/p114782.png) icon.
        
    -   ② Filter users: Use filters such as user type, account registration type, account binding type, user status, or account ID.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5225537371/p897033.png)
        
    -   ③ Batch update users: Select **Batch Update** to modify user information in bulk.
        
        Options include updating **User groups**, **Contact information**, and **User tags**.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5302724171/p724777.png)
        
        Fields such as **User ID**, **Nickname**, **User Type**, **Organization role**, **Tag\_****XXX**, **Email**, **Phone Number**, and **User Group** can be updated.
        
        For more information, refer to [Batch Update User Information](#section-u84-t2b-pxz).
        
        **Note**
        
        Note: Only existing user information can be modified; adding new users is not permitted.
        
    -   ④ Batch export users: Click **Batch Export** to download a list of users to your local device.
        
        You can select fields such as **User groups**, **Contact information**, and **User tags**.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2308591371/p724757.png)
        
        The downloaded file includes fields like **User ID**, **Account**, **Account Type**, **Nickname**, **Join Date**, **Last Logon Time**, **User Type**, **Organization role**, **User status**, **Tag\_****XXX**, **Email**, **Phone Number**, and **User Group**.
        
        **Note**
        
        **Last Logon Time** will be empty if a user has never logged on to Quick BI.
        
    -   ⑤ Edit users: Click the ![edit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7067521361/p273273.png) icon in the **Actions** column for the user you want to edit.
        
    -   ⑥ Remove users: Click the ![delete](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7067521361/p273270.png) icon in the **Actions** column for the user you want to remove.
        
        **Note**
        
        Ensure the user is not part of any workspace before removal. For details, see [Delete Workspace Members](/help/en/quick-bi/user-guide/manage-workspace-members#concept-rmm-yxq-pgb/section-es6-8tl-bcf).
        
        You can also select multiple users or all users and click **Delete** for bulk removal. ![batch delete](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6549975961/p431390.png)
        
    -   ⑦ Disable or activate user status.
        
        To disable or activate a user, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9112724171/p711400.png) icon.
        
        For batch operations, select multiple users or all users and click Disable/Activate.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5302724171/p711404.png)
        
    -   Sort the list by clicking the ![sort icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6549975961/p517452.jpg) icon in the navigation bar to arrange the current column in ascending or descending order.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5302724171/p732507.png)
        
    -   Due to technical updates in WeCom, you must log on to access specific features. Please click the logon entry to sign in to WeCom prior to executing any further operations.
        

## Batch update user information

Remember, you can only modify information for existing users; adding new users is not an option.

1.  On the **User Management** page, select the **Member Management** tab, then click **Batch Update** in the upper-right corner.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5302724171/p732509.png)
    
2.  In the **Batch Update User Information** dialog box, click **Obtain The Batch Update User Information Template** to download the template.
    
    Select fields such as **User groups**, **Contact information**, and **User tags**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5302724171/p724760.png)
    
3.  Fill in the user information to be updated and save it to the template.
    
    Below are the key fields in the attachment:
    
    **Field name**
    
    **Description**
    
    User ID
    
    The Alibaba Cloud user ID.
    
    -   If the account is an Alibaba Cloud account, log on to the [Alibaba Cloud Management Console](https://home.console.alibabacloud.com/) to obtain the account ID.
        
        -   If the organization user is a primary account, the user ID is as shown below. ![用户ID](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6628240371/p273512.png)
            
        -   If the organization user is a RAM user, the user ID is as shown below. ![RAM账号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6628240371/p273522.png)
            
    
    Account
    
    The logon name of the Alibaba Cloud account.
    
    -   If the account is an Alibaba Cloud account, log on to the [Alibaba Cloud Management Console](https://home.console.alibabacloud.com/) to obtain the account name.
        
        -   If the organization user is a primary account, the account is as shown below. ![账号1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6628240371/p273528.png)
            
        -   If the organization user is a RAM user, the account is as shown below. ![RAM账号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6628240371/p273530.png)
            
            **Note**
            
            If the RAM account is `zhang***@1111.onaliyun.com`, you only need to enter `zhangsan`.
            
    
    Account type
    
    Supports two types: **Alibaba Cloud Account** and **Alibaba Cloud RAM**.
    
    Nickname
    
    The nickname of the account in Quick BI. You can customize the nickname. ![昵称](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5122760361/p273534.png)
    
    The nickname can only contain letters, numbers, underscores, slashes, backslashes, vertical lines, parentheses, and brackets, and cannot exceed 50 characters.
    
    Join date
    
    The date when the user joined the Quick BI organization.
    
    Last logon time
    
    The last time the user logged on to Quick BI.
    
    User type
    
    Supports the following user types:
    
    -   Developer: IT personnel, data analysts, and data operators in enterprises.
        
    -   Analyst: Business personnel who need to perform business analysis but do not require advanced technical skills.
        
        Analysts analyze data by creating dashboards, workbooks, and other forms.
        
    -   Visitor: Users who only view reports (such as executives or managers) or front-line business personnel who only view data results. Visitors can view dashboards, workbooks, and site content through URLs or subscriptions.
        
    
    Organization role
    
    At the organization level, three preset organization roles are available, and custom organization roles can be added.
    
    -   **Organization administrator**: Manages project information, status, and members. Organization administrators can assign organization administrator roles to organization users.
        
        We recommend that one to three users assume this role. In most cases, project PMs or personnel responsible for the BI platform assume this role.
        
    -   **Permission administrator**: Manages permissions for project resources. We recommend that one to three users assume this role. In most cases, personnel responsible for the BI platform assume this role. Permission administrators grant user accounts the permission administrator role and are primarily responsible for centrally assigning and managing permissions in the backend.
        
    -   **Regular user**: Users who are not assigned the organization administrator or permission administrator roles.
        
    -   **Custom organization role**: Custom organization roles can be created based on business requirements.
        
    
    User status
    
    Active or inactive.
    
    Email
    
    The email address bound to the account during registration.
    
    Phone number
    
    The phone number bound to the account during registration.
    
    User group
    
    The user group to which the current account belongs.
    
    tag\_example
    
    The user tag field can be customized and extended. The extended column name starts with **tag\_**, such as **tag\_example**.
    
    Value description:
    
    -   **$ALL\_MEMBERS$**: Indicates access to all data.
        
    -   Enter a specific value, such as **north**: Indicates access to data in the north region.
        
        **Note**
        
        If multiple permissions correspond to a tag item, separate them with commas (,), such as north,east.
        
    
4.  Upload the updated user information from your local device by clicking **Select Excel File**.
    
    -   For optimal results, use the Chrome browser to upload files.
        
    -   It is recommended to download **The Batch Add User Information Template** and fill in the user information according to the template guidelines.
        
        To prevent upload errors, ensure the file does not contain the following issues:
        
        -   The account user is already in the organization.
            
        -   The account nickname is already in use within the organization.
            
        -   The user group path does not exist.
            
        -   The Excel file exceeds 5,000 rows.
            
        -   The column order, except for the **tag\_** column, has been altered.
            
        -   The number of users being added surpasses the license limit.
            
5.  Complete the batch update of organization users by clicking **OK**.
