Cloud computers can be assigned to either convenience accounts or enterprise Active Directory (AD) accounts. To integrate Elastic Desktop Service (EDS) Enterprise with your enterprise AD system, you must create enterprise AD accounts and assign cloud computers to these accounts. This topic describes how to create and manage enterprise AD accounts.

## Prerequisites

An enterprise AD system is established.

**Note**

In this topic, Windows Server 2019 is used as an example. The actual Windows OS that you use shall prevail.

## Create enterprise AD accounts

After you integrate EDS Enterprise with your enterprise AD system, EDS Enterprise can sync AD user data, allowing you to assign cloud computers directly to AD users.

1.  Log on to the enterprise AD domain controller.
    
2.  In the upper-right corner of the page that appears, choose **Tools** > **Active Directory Users and Computers**.
    
3.  Right-click the group for which you want to create users. In the pop-up menu, choose **New** > **User** and specify basic user information.
    
    1.  Specify information, such as the full name and user logon name, based on your business requirements. Then, click **Next**.
        
    2.  Specify a password and click **Next**.
        
    3.  Confirm and record the user information and click **Finish**.
        

## Modify enterprise AD accounts

If an end user forgets the password of an enterprise AD account, you can reset the password. You can also modify basic user information, such as the username.

1.  Log on to the enterprise AD domain controller.
    
2.  In the upper-right corner of the page that appears, choose **Tools** > **Active Directory Users and Computers**.
    
3.  Find the user whose password you want to modify and perform the following operations to reset the password or modify the basic information:
    
    -   Reset the password
        
        1.  Right-click the user whose password you want to reset and select **Reset Password** from the pop-up menu.
            
        2.  In the **Reset Password** dialog box, specify a new password and click **OK**.
            
    -   Modify the basic information
        
        1.  Right-click the user whose basic information you want to modify and select **Properties** from the pop-up menu.
            
        2.  Modify information on tabs, such as the **General** and **Account** tabs, and click **OK**.
            
    

## Assign cloud computers or many-to-many shares to enterprise AD accounts

After you assign cloud computers or many-to-many shares to enterprise AD accounts, end users can use the enterprise AD accounts to log on to Alibaba Cloud Workspace terminals and access the cloud computers or **many-to-many shares**.

**Note**

-   You can assign multiple cloud computers to an enterprise AD account. All assigned cloud computers can be used at the same time.
    
-   A cloud computer assigned to multiple enterprise AD accounts only allows one active connection at a time. If one account is connected, other accounts cannot access the cloud computer until the current session is disconnected.
    

### **Prerequisites**

-   At least one cloud computer or many-to-many share is created. For more information, see [Create cloud computers](/help/en/wuying-workspace/user-guide/create-a-cloud-computer-3#task-1963849) or [Create and manage many-to-many shares](/help/en/wuying-workspace/user-guide/create-shared-cloud-computers#task-2101715).
    
-   The cloud computer that you want to assign is in the **Running** or **Stopped** state.
    

### **Procedure**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Users** > **Users & Organizations**.
    
3.  On the **AD User** tab of the **Users & Organizations** page, find the enterprise AD account that you want to manage and click **View/Assign Cloud Computer** in the **Actions** column.
    
4.  In the **View/Assign Cloud Computer** panel, perform the following operations as needed:
    
    #### **Assign cloud computers or shares**
    
    1.  On the **Added Cloud Computers** tab, click **Add Cloud Computer**. Alternatively, on the **Added **Share**** tab, click **Add **Share****.
        
    2.  In the dialog box that appears, select the cloud computers or many-to-many shares that you want to add and click **Confirm**.
        
    
    #### **Cancel the assignment**
    
    On the **Added Cloud Computers** tab or the **Added **Share**** tab, find the cloud computers or many-to-many shares that you want to remove and click **Remove** in the **Actions** column.
    
    **Important**
    
    The assignment or unassignment result will be displayed after a short delay due to latency. Wait a few seconds before refreshing the user list to view the updated status.
    

You can also add convenience accounts on the **Cloud Computers** page or the **Many-to-Many** tab of the **Shared Cloud Computer** page. For more information, see [Assign cloud computers to users](/help/en/wuying-workspace/user-guide/assign-cloud-computers-to-end-users) or [Manage authorized users](/help/en/wuying-workspace/wuying-workspace-pro-edition/manage-end-users-that-have-permissions-on-a-cloud-computer-pool).

## **Specify permitted logon terminals for enterprise AD accounts**

After you specify permitted logon terminals for enterprise AD accounts, end users that use the accounts can log on only to the specified terminals.

**Note**

You can specify up to eight permitted logon terminals for an enterprise AD account.

### **Prerequisites**

-   The trusted device authentication feature is enabled. For more information, see [Trusted device authentication](/help/en/wuying-workspace/user-guide/certification-overview#sc-trusted-device).
    
-   Alibaba Cloud Workspace terminals are added. If end users use your organization ID to log on to the software clients of Alibaba Cloud Workspace, the information about the software clients is automatically added to the EDS Enterprise console.
    

### **Procedure**

1.  In the left-side navigation pane, choose **Users** > **Users & Organizations**.
    
2.  On the **AD User** tab of the **Users & Organizations** page, find the enterprise AD account for which you want to specify a logon terminal and click **View/Specify Logon Terminal** in the **Actions** column.
    
3.  In the **View/Specify Logon Terminal** panel, click **Add Terminal**.
    
4.  In the **Add Terminal** dialog box, select the software clients of Alibaba Cloud Workspace that you want to bind, including desktop clients and mobile clients, and click **OK**.
    
    If you want to unbind a specific Alibaba Cloud Workspace terminal from a convenience account, find the software client and click **Remove** in the **Actions** column. In the message that appears, click **OK**.
    

## Delete enterprise AD accounts

You can delete the enterprise AD accounts that you no longer require.

1.  Log on to the enterprise AD domain controller.
    
2.  In the upper-right corner of the page that appears, choose **Tools** > **Active Directory Users and Computers**.
    
3.  Right-click the user that you want to delete and select **Delete** from the pop-up menu.
    
4.  Confirm the deletion message and click **Yes**.
