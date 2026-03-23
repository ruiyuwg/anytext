When an alert rule triggers a match in a notification policy, Application Real-Time Monitoring Service (ARMS) notifies the designated contacts by phone, text message, or email. Create and manage contacts to control who receives alert notifications and through which channels.

## Supported notification channels

**Channel**

**Requirement**

Phone call

Verified mobile number

Text message (SMS)

Verified mobile number

Email

Email address

DingTalk (mention in group)

User ID (optional)

Lark (mention in group)

User ID (required)

WeCom (mention in group)

User ID (required)

**Note**

DingTalk chatbots can no longer be configured as contacts. To create a DingTalk chatbot, go to the **DingTalk/Lark/WeCom** tab. For more information, see [DingTalk chatbots](/help/en/arms/alarm-operation-center/dingtalk-chatbots#concept-42953-zh). Existing DingTalk chatbots are not affected.

## Prerequisites

Before you begin, make sure that you have:

-   Access to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home)
    
-   (Optional) A contact group to assign the contact to. For more information, see [Contact groups](/help/en/arms/alarm-operation-center/contact-groups#concept-84436-zh)
    

## Create a contact

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home). In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
    
2.  On the **Contacts** tab, click **Create Contact**.
    
3.  In the **Create Contact** dialog box, configure the following parameters, and then click **OK**.
    
    **Parameter**
    
    **Description**
    
    Name
    
    The name of the contact.
    
    Phone Number
    
    The mobile phone number of the contact. Alerts are sent by phone or text message. Only verified numbers are accepted. For more information, see [Verify a mobile number](#section-bmz-kvv-rwl).
    
    Email
    
    The email address of the contact. Alerts are sent by email.
    
    Contact Group
    
    The contact group to assign this contact to. For more information, see [Contact groups](/help/en/arms/alarm-operation-center/contact-groups#concept-84436-zh).
    
    Method to Resend Notifications If Phone Notifications Fail
    
    The fallback method when phone notifications fail. To set a global default, see [Set a default fallback method](#section-810-rag-yod).
    
    User ID
    
    The ID of the contact in an instant messaging (IM) tool such as DingTalk, Lark, or WeCom. Used to mention the contact within a group. Required for Lark and WeCom group contacts. Optional for DingTalk.
    

**Important**

Specify at least a mobile number or an email address. Each mobile number or email address can belong to only one contact.

## Verify a mobile number

Verify a mobile number before it can receive alert notifications.

1.  On the **Contacts** tab, locate the contacts whose mobile numbers need verification.
    
    -   For a single contact, find the contact and click **Not verified** next to the number.
        
    -   For multiple contacts, select them and click **Verify Mobile Numbers**.
        
    
    The system sends a verification text message to each selected contact.
    
2.  Each contact opens the URL in the text message using a browser.
    
3.  On the verification page, the contact confirms the number and clicks **Verify**.
    

## Set a default fallback method

If phone notifications fail, ARMS uses a fallback method to resend them. Configure a global default for all contacts.

1.  On the **Contact** tab, choose **More Operations** > **Contact Default Configuration**.
    
2.  In the dialog box, select a fallback method and click **OK**.
    

![Default contact configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7845270661/p460334.png)

## Edit or delete contacts

Manage contacts from the **Contacts** tab after creating them.

**Task**

**Steps**

Edit a contact

Click **Edit** in the **Actions** column. In the **Edit Contact** dialog box, update the settings and click **OK**.

Delete a contact

Click **Delete** in the **Actions** column. In the confirmation dialog box, click **OK**.

Delete multiple contacts

Select the contacts, click **Batch Delete**, and then click **OK** in the confirmation dialog box.

## Related topics

-   [Contact groups](/help/en/arms/alarm-operation-center/contact-groups#concept-84436-zh)
    
-   [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies#concept-rr3-55h-hhb)
    
-   [Create a scheduling policy](/help/en/arms/alarm-operation-center/create-scheduling-policies#task-2122734)
