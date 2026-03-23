This topic describes how to manage convenience accounts.

## Prerequisites

A convenience account has been created. For more information, see [Create a convenience account](/help/en/wuying-workspace/user-guide/create-a-convenience-user#task-2071329).

## Assign cloud computers or multiple shared cloud computers to a convenience account

After you assign a cloud computer or multiple shared cloud computers to a convenience account, the end user can use the account to log on to a WUYING Terminal and access the assigned cloud computer or Shared Cloud Computer.

**Note**

-   You can assign multiple cloud computers to a single convenience account. The user can access these cloud computers simultaneously without conflicts.
    
-   If a cloud computer is assigned to multiple convenience accounts, only one user can connect to it at a time. Other users cannot connect until the current user disconnects.
    

### **Prerequisites**

-   Cloud computers or multiple shared cloud computers have been created. For more information, see [Create a cloud computer](/help/en/wuying-workspace/user-guide/create-a-cloud-computer-3#task-1963849) or [Create and manage multiple shared cloud computers](/help/en/wuying-workspace/user-guide/create-shared-cloud-computers#task-2101715).
    
-   The cloud computer that you want to assign must be in the **Running** or **Shutdown** state.
    

### **Procedure**

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Users** > **Users**.
    
3.  On the **Users** tab of the **User** page, find the convenience account and click **View/Assign Cloud Computers** in the **Actions** column.
    
4.  On the **View/Assign Cloud Computers** panel, perform the following operations as needed.
    
    #### **Assign a new cloud computer or** multiple shared cloud computers
    
    1.  Click Assign Cloud Computer on the **Cloud Computers Assigned** tab, or click ****Assign Cloud Computer**** on the **Shares Assigned** tab.
        
    2.  In the dialog box that appears, select the cloud computer or multiple shared cloud computers and click **Confirm**.
        
    
    #### **Unassign a cloud computer or** multiple shared cloud computers
    
    On the **Cloud Computers Assigned** tab or the **Shares Assigned** tab, find the cloud computer or multiple shared cloud computers that you want to unassign and click **Remove** in the **Operation** column.
    
    **Important**
    
    There may be a delay. After you assign or unassign a cloud computer, wait a moment and then refresh the user list to view the updated assignment information.
    

You can also assign a convenience account to a cloud computer or multiple shared cloud computers from the **Cloud Computers** page or the multiple shared cloud computers page. For more information, see [Add a user to a cloud computer](/help/en/wuying-workspace/user-guide/assign-cloud-computers-to-end-users) or [Manage authorized users](/help/en/wuying-workspace/wuying-workspace-pro-edition/manage-end-users-that-have-permissions-on-a-cloud-computer-pool).

## Manage passwords

If an end user forgets their password, you can reset or change the password in the console.

### **Reset a password**

You can reset the password for a user-activated convenience account.

**Note**

End users can also request a password reset on a WUYING Terminal. For more information, see [Use a software client](/help/en/wtc/user-guide/use-client/).

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **User** tab of the **Users**page, perform one of the following operations as needed:
    
    -   Single operation: Find the convenience account. In the **Actions** column, click the ⋮ icon and then choose **Reset Password**.
        
    -   Batch operation: Select multiple convenience accounts and click **Reset Password** at the bottom of the list.
        

### **Change a password**

You can change the password for an enterprise-type convenience account.

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **User** tab of the **Users** page, find the convenience account and click **Change Password** in the **Operations** column.
    
3.  In the **Change Password** dialog box, set a new password as prompted and click **Confirm**.
    

For an administrator-activated convenience account, the new password is sent to the user administrator's mailbox if one is configured. The end user can obtain the password from the user administrator. If you did not set a user administrator, you must manually provide the new password to the end user.

## **Add a convenience account to an organization**

You can add a convenience account to an organization during or after its creation. After an account is added to an organization, you can view the organization chart and manage accounts by organization node.

### **Prerequisites**

An organization has been created. For more information, see [Create an organization](/help/en/wuying-workspace/user-guide/create-an-organization).

### **Procedure**

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **User** tab of the **Users** page, perform one of the following operations as needed:
    
    -   Single operation: Find the convenience account and click **Move** in the **Actions** column.
        
    -   Batch operation: Select multiple convenience accounts and at the bottom of the list, choose **More > Move User**.
        
3.  In the **Move User** dialog box, select the destination organization and click **Confirm**.
    

For a convenience account that is already in an organization, you can follow these steps to change its organization.

## **Set local administrator permissions**

After you grant local administrator permissions to a convenience account, the user can install software and change some system settings on the cloud computer. You can grant this permission when you create a convenience account or adjust the permission at any time after creation.

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **User** tab of the **Users** page, perform one of the following operations as needed:
    
    -   Single operation: Find the target convenience account and click the icon in the **Local Administrator** column.
        
    -   Batch operation: Select multiple convenience accounts and at the bottom of the list, choose **More** > **Configure Local Administrator**.
        
3.  In the **Configure Local Administrator** dialog box, select **Yes** or **No** as needed, and then click **Confirm**.
    
    **Important**
    
    If the Group Policy Object (GPO) configured on the enterprise Active Directory (AD) domain controller restricts local administrator permissions, the GPO takes precedence. In this case, the local administrator setting in the console is invalid.
    

## Lock or unlock a convenience account

### **Lock a convenience account**

To temporarily disable a convenience account, you can lock it.

-   For administrator-activated convenience accounts, you can set an automatic lock date during creation or lock them manually at any time after creation. For user-activated convenience accounts, you can only lock them manually after creation.
    
-   When an end user logs on to a WUYING Terminal, the account is automatically locked for 20 minutes after 10 consecutive incorrect password attempts. The account is automatically unlocked after 20 minutes.
    

To manually lock a convenience account, perform the following steps:

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **User** tab of the **Users** page, perform one of the following operations as needed:
    
    -   Single operation: Find the convenience account and click **Lock** in the **Actions** column.
        
    -   Batch operation: Select multiple convenience accounts and click **Lock** at the bottom of the list.
        
        **Note**
        
        Batch operations are only supported for convenience accounts of the same activation type.
        
3.  In the dialog box that appears, click **Confirm**.
    
    **Important**
    
    End users cannot use a locked convenience account to log on to a WUYING Terminal. Use this feature with caution.
    

### Unlock a convenience account

End users cannot use a locked convenience account to log on to a WUYING Terminal. To allow an end user to use the account again, you must first unlock it.

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **Users** tab of the **Users & Organization** page, perform one of the following operations as needed:
    
    -   Single operation: Find the convenience account and click **Unlock** in the **Operations** column.
        
    -   Batch operation: Select multiple convenience accounts and click **Unlock** at the bottom of the list.
        
        **Note**
        
        Batch operations are only supported for convenience accounts of the same activation type.
        
3.  In the dialog box that appears, click **OK**.
    

## **Add restricted logon terminals for a convenience account**

After you add restricted logon terminals for a convenience account, the user can only log on from those terminals.

### **Prerequisites**

-   Trusted device authentication must be enabled. For more information, see [Enable trusted device authentication](/help/en/wuying-workspace/user-guide/certification-overview#sc-trusted-device).
    
-   Terminals have been added. When an end user logs on to a software client with your organization ID, the software client information is automatically added to the console.
    

### **Procedure**

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **User** tab of the **Users** page, find the user. In the **Actions** column, click the ⋮ icon and choose **View/Restrict Logon Terminals**.
    
3.  On the **View/Specify Logon Terminals** panel, click **Add Terminal**.
    
4.  In the **Add Terminal** dialog box, select the software clients (desktop and mobile) to add as restricted logon terminals and click **OK**.
    
    To remove a restricted logon terminal, click **Remove** in the **Action** column for the target client, and then click **OK** in the confirmation dialog box.
    

## Manage convenience accounts using user attributes

Each user attribute consists of a property key and one or more property values. After you bind user attributes to convenience accounts, you can filter the accounts based on these attributes to perform batch management operations.

### Create a user attribute

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **User** tab of the **Users** page, find the **Property** column and click the icon to the right of the column header.
    
3.  On the **Manage User Property** panel, click Add Property.
    
4.  In the **Add Property** dialog box, enter a property key and its corresponding values, and then click **OK**.
    
    You can add up to 50 unique property values for each property key.
    

After you create a property, you can also edit or delete it as needed.

**Important**

If the property you want to delete is already bound to convenience accounts, deleting the property also removes the property values from those accounts. Use this feature with caution.

### Bind a user attribute to a convenience account

1.  On the **User** tab of the **Users** page, perform one of the following operations as needed:
    
    -   Single operation: Find the convenience account and click **Edit** in the **Property** column.
        
    -   Batch operation: Select multiple convenience accounts and at the bottom of the list, choose **More** > **Bind Property**.
        
2.  In the **Modify Property** dialog box, select the property key and value to bind, and then click **Confirm**.
    
    **Note**
    
    You can bind up to 20 property keys to each convenience account. You can select only one property value for each property key.
    

To unbind a user attribute from a convenience account, remove the corresponding property key and value in the **Modify Property** dialog box and save the changes.

### Filter convenience accounts by user attribute

1.  On the **User** tab of the **Users** page, click the property filter drop-down list at the top of the list.
    
2.  In the dialog box, select a **Property** and **Property Value**, and then click **OK**.
    
    **Note**
    
    You can select multiple filter properties. For each user property, you can select multiple filter property values.
    

The user list displays only the users that meet the filter criteria. To restore the initial view, clear the filter criteria.

## Export the user list

You can follow these steps to export the information of all convenience accounts to a workbook file.

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **User** tab of the **Users** page, click the icon in the upper-right corner of the user list.
    

## Delete a convenience account

If a convenience account is no longer needed, you can delete it to release the account quota.

### **Prerequisites**

Ensure that no cloud computers or multiple shared cloud computers are assigned to the convenience account that you want to delete.

### **Procedure**

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **User** tab of the **Users** page, perform one of the following operations as needed:
    
    -   Single operation: Find the convenience account. In the **Actions** column, click the ⋮ icon and choose **Delete**.
        
    -   Batch operation: Select multiple convenience accounts and at the bottom of the list, choose **More** > **Delete**.
        
        **Note**
        
        Batch operations are only supported for convenience accounts of the same activation type.
        
3.  In the dialog box that appears, click **Confirm**.
    

## Manage convenience accounts of resigned users

When a user resigns, you can filter for their convenience account in Users & Organization to transfer assets or delete the account.

### **Transfer assets from a resigned user**

If a resigned user's assets are no longer needed by them, you can transfer the assets. This feature moves the user's assets, such as cloud computers, shared cloud computers, and Enterprise Drives, to another user who is within the same corporate identity source and does not currently own any assets.

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **User** tab of the **Users** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4831691571/p977763.png) icon to the right of the **Status** table header and select **Resigned**.
    
3.  Find the convenience account and click **Asset Transfer** in the **Operations** column.
    
4.  On the **Asset Transfer** panel, configure the following information and click **Transfer**. In the dialog box that appears, confirm the information and click **OK**.
    
    **Configuration Item**
    
    **Description**
    
    Basic Information
    
    Displays the username, status, display name, and remarks of the user for confirmation to prevent accidental operations.
    
    User Asset
    
    Only one type of asset can be transferred at a time. You can select one of the following asset types to transfer:
    
    -   Cloud computer
        
    -   Shared cloud computer
        
    -   Enterprise Drive
        
    
    Select a user for assignment
    
    Select the user to whom the assets will be assigned.
    
    **Note**
    
    The user who receives the assets must meet the following conditions:
    
    -   The user is under the same corporate identity source as the resigned user.
        
    -   The user does not currently own any assets.
        
    

### **Delete the account of a resigned user**

If the account of a resigned user is no longer needed, you can delete it to release the account quota.

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **Users** tab of the **Users And Organizations** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4831691571/p977763.png) icon to the right of the **Status** column header and select **Resigned**.
    
3.  Select one or more convenience accounts and choose **More** > **Delete**.
    
4.  In the **Delete User** dialog box, confirm the information and click **OK**.
    

## **FAQ**

**Q: Where can I find a user's password for Elastic Desktop Service?**

A: For security reasons, you cannot view a user's existing password. Instead, you must reset it. You can do this on the Users page. A new, randomly generated password will then be sent to the user through the specified email.

**Q: If I enable file transfer approval, do I also need to enable the bidirectional copy policy?**

A: No, that is not necessary. The file approval feature and the copy/paste policies are independent settings.

For example, if you configure a policy to allow download only and you also enable file transfer approval, the resulting behavior will be:

-   Users will require approval before they can download a file.
    
-   Users will be blocked from uploading files.
