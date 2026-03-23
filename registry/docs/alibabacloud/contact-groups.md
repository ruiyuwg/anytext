When multiple team members need to receive alert notifications, managing recipients individually in each notification policy becomes error-prone. Contact groups let you define reusable recipient lists that you assign to notification policies. When a notification policy triggers, Application Real-Time Monitoring Service (ARMS) sends alerts to every contact in the specified group through phone calls, text messages, emails, and DingTalk messages.

On the **Contacts** tab, you can:

-   Search for, create, edit, and delete contact groups
    
-   View the contacts within each group
    
-   Assign groups to notification policies to route alerts to the right people
    

## Prerequisites

Before you begin, ensure that you have:

-   At least one contact, or a DingTalk, WeCom, or Lark chatbot
    

## Create a contact group

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
    
3.  On the **Contacts** tab, click **Create Contact Group**.
    
4.  In the **Create Contact Group** dialog box, enter a **Group Name**, select one or more **Alert Contacts**, and then click **OK**.
    

The new group appears in the left-side list on the **Contacts** tab.

## Edit a contact group

1.  On the **Contacts** tab, find the target group and click the ![More icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3685889661/p355051.png) icon to its right.
    
2.  Select **Edit Group**.
    
3.  Modify the group name or contacts, and then click **OK**.
    

## View contacts in a group

On the **Contacts** tab, click the ![Down arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7142705761/p181703.png) icon to the left of a group to expand its contact list.

## Delete a contact group

1.  On the **Contacts** tab, find the target group and click the ![More icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3685889661/p355051.png) icon to its right.
    
2.  Select **Delete Group**.
    
3.  In the confirmation message, click **OK**.
    

**Important**

-   Before deleting a group, make sure it is not referenced by any notification policy. Otherwise, alert notifications may fail to send.
    
-   Only contact groups created by the current account can be deleted.
