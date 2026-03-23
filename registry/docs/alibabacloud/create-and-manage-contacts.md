Managed Service for Prometheus sends alert notifications to contacts when a notification policy rule is triggered. Each contact defines one or more notification channels -- phone calls, text messages, or emails -- so the right people are reached through the right channels when alerts fire.

## Supported notification channels

**Channel**

**Configuration**

Phone call

**Phone Number** field

Text message (SMS)

**Phone Number** field

Email

**Email** field

DingTalk chatbot

DingTalk chatbot

**Important**

Specify at least one notification channel (phone number, email address, or DingTalk chatbot) for each contact. Each phone number or email address can belong to only one contact. Otherwise, alert notifications may not be processed by the relevant contact at the earliest opportunity.

## Create a contact

Phone numbers must be verified before they can be referenced in a notification policy. If you add a phone number during contact creation, verify it immediately after (see [Verify a phone number](#section-bmz-kvv-rwl)).

1.  Log on to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home).
    
2.  In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
    
3.  On the **Contacts** tab, click **Create Contact** in the upper-right corner.
    
4.  In the **Create Contact** dialog box, configure the following parameters, and then click **OK**.
    
    **Parameter**
    
    **Description**
    
    Name
    
    The name of the contact.
    
    Phone Number
    
    A mobile phone number for phone call and text message notifications. The number must be verified before it can be referenced in a notification policy.
    
    Email
    
    An email address for alert notifications.
    
    Contact Group
    
    The group that this contact belongs to.
    
    Method to Resend Notifications If Phone Notifications Fail
    
    The fallback method when a phone call fails to reach the contact. To set a global default for all contacts, see [Set a default fallback notification method](#section-3vi-z0h-75s).
    

## Verify a phone number

Phone numbers must be verified before they can be used in notification policies. Unverified phone numbers are marked as **Not Verified** on the **Contacts** tab.

1.  Log on to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home).
    
2.  In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
    
3.  On the **Contacts** tab, initiate the verification:
    
    -   **Single contact**: Find the target contact and click **Not Verified** next to the phone number.
        
    -   **Multiple contacts**: Select the contacts and click **Verify Mobile Numbers**.
        
    
    The system sends a verification text message to each selected phone number.
    
4.  Open the URL in the text message in a browser.
    
5.  On the verification page, confirm the phone number and click **Verify**.
    

## Set a default fallback notification method

Configure a default fallback method that applies to all contacts when phone call notifications fail.

1.  On the **Contacts** tab, choose **More Operations** > **Contact Default Configuration**.
    
2.  In the **Contact Default Configuration** dialog box, select a fallback notification method and click **OK**.
    
    ![Contact Default Configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7845270661/p460334.png)
    

## Search, edit, or delete contacts

Manage existing contacts from the **Contacts** tab.

**Operation**

**Steps**

**Search**

Enter a keyword in the search box on the left side of the Contacts tab and click the ![Search](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2988805461/p371925.png) icon.

**Edit**

Find the target contact, click **Edit** in the **Actions** column, modify the contact information in the dialog box, and then click **OK**.

**Delete a single contact**

Find the target contact, click **Delete** in the **Actions** column, and then click **OK** to confirm.

**Delete multiple contacts**

Select the contacts, click **Batch Delete** in the lower-left corner, and then click **OK** to confirm.
