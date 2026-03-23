Resource Directory allows you to quickly establish an organizational structure based on your business requirements and consolidate the accounts of your enterprise into this structure to form a hierarchy for the resources of your enterprise.

## Step 1: Enable a resource directory

Before you can enable a resource directory, the Alibaba Cloud account must meet the following conditions:

-   Your account must be an enterprise account and has completed identity verification. Individual accounts cannot be used.
    
-   Your account has security information configured, such as a [secure mobile phone number](/help/en/account/specify-or-change-a-bound-mobile-phone-number) or email address.
    
-   Your account is not a member of another resource directory.
    

After an account meets the prerequisites, you can enable a resource directory. As a best practice, the management account of your resource directory should be a dedicated account, separate from those running business workloads. This separation of concerns simplifies governance and enhances security. Therefore, the method you choose to enable the directory depends on whether the current account already contains resources. You can go to the [Resource Center](https://resourcemanager.console.alibabacloud.com/resource-center) to check whether the current account contains resources.

-   [Use the current logon account to enable a resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory#section-n4r-1l8-yym)
    
    This method is suitable for accounts that do not have any existing resources or business workloads deployed.
    
-   [Use a new account to enable a resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory#section-pqv-qj4-nla)
    
    This method is recommended if the current account already contains business resources or runs active workloads.
    
    If you use this method, you must create an Alibaba Cloud account and use this account as the management account of the resource directory. The new account inherits the enterprise verification information of the current logon account. The current logon account becomes a member of the resource directory.
    
    **Warning**
    
    After the current logon account becomes a member of the resource directory, you can remove the current logon account from the resource directory by using only the new account.
    

To use the current logon account to enable a resource directory, perform the following steps:

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resource Directory** > **Enable Resource Directory**.
    
3.  On the page that appears, click **Enable Resource Directory**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9139743471/p934417.png)
    
    After you enable the resource directory, the system creates the **Root** folder and uses the current logon account as the management account of the resource directory.
    
    In addition, the system creates a service-linked role named AliyunServiceRoleForResourceDirectory within the management account. This role is used to grant access permissions on the resource directory to trusted services that are integrated with the Resource Directory service. For more information about service-linked roles, see [RAM roles in a resource directory](/help/en/resource-management/security-and-compliance/ram-roles-in-a-resource-directory#concept-2469063).
    

## Step 2: Create folders

A folder is an organizational unit in a resource directory. A folder may indicate a branch, a line of business, or a project of your enterprise. Each folder can contain members and subfolders, which forms a tree-shaped organizational structure.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) with a management account.
    
2.  In the left-side navigation pane, choose **Resource Directory** > **Management**.
    
3.  In the upper-right corner of the page that appears, click **Resource Organization View**.
    
4.  Use one of the following methods to create a folder:
    
    -   Move the pointer over the desired folder in the left-side navigation tree, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6004653471/p932057.png) icon, and then click **Create Folder**.
        
        **Note**
        
        A subfolder will be created in the folder.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6004653471/p932828.png)
        
    -   Click the desired folder in the left-side navigation tree. On the **Member** tab of the right-side pane, click **Create Folder**.
        
        **Note**
        
        A subfolder will be created in the folder.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6004653471/p932830.png)
        
5.  In the **Create Folder** dialog box, enter a name in **Folder Name** and click **OK**.
    
    **Note**
    
    The name you specify must be unique in the current resource directory.
    

## Step 3: Create members or invite Alibaba Cloud accounts

A member can be a resource account or cloud account. Members that are created in a resource directory are resource accounts. A resource account is used to isolate the resources of a project or application on Alibaba Cloud from other resources. You can invite existing Alibaba Cloud accounts to join your resource directory. After the owners of the Alibaba Cloud accounts accept the invitations, the accounts become the members of the resource directory. These members are cloud accounts.

### Create a member

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) with a management account.
    
2.  In the left-side navigation pane, choose **Resource Directory** > **Management**.
    
3.  On the page that appears, use one of the following methods to create a member:
    
    -   Click **Resource Organization View** in the upper-right corner. On the **Member** tab, click **Create Member**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9840824471/p936823.png)
        
    -   Click **Member List View** in the upper-right corner. On the page that appears, click **Create Member**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0120843471/p932824.png)
        
4.  On the **Create Member** page, configure the parameters, read and agree to the agreement, and then click **OK**.
    
    -   **Account Name**: the name of the member. The name must be unique in the current resource directory. The name must be 2 to 50 characters in length and can contain letters, digits, and the following special characters: underscores (\_), periods (.), and hyphens (-). The name must start and end with a letter or digit and cannot contain consecutive special characters.
        
    -   **Display Name**: the display name of the member. The display name must be 2 to 50 characters in length and can contain letters, digits, and the following special characters: underscores (\_), periods (.), and hyphens (-).
        
    -   **Billing Account**: the payment method of the member.
        
        -   **Use Management Account for Settlement of New Member**: Designates the management account of the Resource Directory as the billing account.
            
        -   **Use Existing Member for Settlement of New Member**: Designates an existing member of the Resource Directory as the billing account. In the **Select an existing member** panel, choose a member from the directory tree.
            
            **Note**
            
            A member cannot be selected if it cannot make payments. For more information, see [Overview](/help/en/user-center/trusteeship#topic-2233678).
            
        -   **Use New Member Itself for Settlement**: Designates the current member as its own billing account.
            
        
    -   **Tag**: This parameter is optional. You can add tags to the member. This way, you can manage the member based on the tags.
        
    -   **Parent Folder**: the name of the folder to which the member belongs.
        
    

### Invite an Alibaba Cloud account

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) with a management account.
    
2.  In the left-side navigation pane, choose **Resource Directory** > **Invite**.
    
3.  On the page that appears, click **Invite Member**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8166724471/p934284.png)
    
4.  In the **Invite Member** dialog box, enter the invitation information, read the risk information, select the check box, and then click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6185349471/p962870.png)
    
    **Parameter**
    
    **Description**
    
    **Account ID or Logon Email Address**
    
    -   Account ID: To obtain the ID, see [How do I view the ID of an Alibaba Cloud account?](/help/en/resource-management/resource-directory/support/how-do-i-view-the-id-of-an-alibaba-cloud-account)
        
    -   Logon email: The email address used to register the account. If no logon email is associated with the account, enter the account ID instead.
        
    
    You can enter multiple account IDs separated by commas (,) to invite them in batches.
    
    **Remarks**
    
    Enter a remark for the invitation to help the invitee verify the invitation's authenticity and expedite approval.
    
    **Tag**
    
    Bind tags to the member for easier tag-based management.
    
    **Owned By (Folder)**
    
    The folder to which the account belongs. By default, the invited account is placed in the root folder. Click **Modify** to move the member to a different folder as needed. You can also change this after the invitation is accepted.
    

After the owner of the Alibaba Cloud account you invite receives an invitation, the owner can view the information about the invitation in the Resource Management console or in an email. Then, the owner can choose to accept or reject the invitation. For more information, see [Process an invitation](/help/en/resource-management/resource-directory/user-guide/process-an-invitation#task-2555313).

## **References**

-   [FAQ about managing a resource directory](/help/en/resource-management/resource-directory/support/faq-about-managing-a-resource-directory/)
    
-   [FAQ about managing a member](/help/en/resource-management/resource-directory/support/faq-about-managing-a-member-1/)
