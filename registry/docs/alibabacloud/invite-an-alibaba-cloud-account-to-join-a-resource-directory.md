You can invite Alibaba Cloud accounts to join your resource directory to manage them in a centralized manner.

## Prerequisites

-   The enterprise real-name information of the Alibaba Cloud account that you want to invite is the same as the enterprise real-name information of the management account of your resource directory. If your group has multiple subsidiaries with different real-name verification information, contact your account manager.
    
-   The Alibaba Cloud account that you want to invite does not have a pending invitation. An Alibaba Cloud account that has a pending invitation cannot be invited again.
    
-   Less than 20 invitations are initiated on the current day. A maximum of 20 invitations can be initiated per day.
    
-   Less than 20 invitations are in the **Pending Confirmation** state. Otherwise, you cannot initiate an invitation.
    

## Procedure

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
    

## **What to do next**

After receiving the invitation, the invitee can view the information about the invitation in the Resource Management console, an email, or an internal message. Then, the invitee can accept or reject the invitation. For more information about how to process an invitation in the Resource Management console, see [Process an invitation](/help/en/resource-management/resource-directory/user-guide/process-an-invitation).

**Note**

-   If an account ID is specified in the invitation, the system sends a confirmation email to the email address that is associated with the account.
    
-   If an email address is specified in the invitation, the system sends a confirmation email to the email address.
    

After the invited Alibaba Cloud account joins your resource directory, it becomes a member of the resource directory and is managed by the resource directory.

-   By default, the name of the Alibaba Cloud account is used as the display name of the member in the resource directory. You can use the management account of the resource directory to change the display name of the member but cannot change the name of the Alibaba Cloud account.
    
-   The system creates a RAM role named [ResourceDirectoryAccountAccessRole](/help/en/resource-management/security-and-compliance/ram-roles-in-a-resource-directory#section-96z-4am-9o0) for the member and assigns the role to the management account of the resource directory for centralized management.
    

## **FAQ**

[FAQ about inviting an account](/help/en/resource-management/resource-directory/support/faq-for-inviting-members/)
