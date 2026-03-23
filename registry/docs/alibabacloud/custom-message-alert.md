You can use the notification feature of Certificate Management Service to configure custom notifications for SSL certificates. This helps meet your specific requirements. This topic describes how to configure custom notifications for certificates.

## **Background information**

You can use the notification feature to configure expiration notification policies for **issued certificates**. You can also configure notification policies for alerts at core stages during the lifecycles of certificates, such as certificate download and revocation. In addition, you can specify whether to receive the latest updates and announcements of Certificate Management Service, and the updates and changes to intermediate root certificates. This helps provide precise and personalized support for your O&M operations.

The following table describes the differences between a default notification policy and a custom notification policy.

**Item**

**Default notification policy (Only expiration notifications are included.)**

**Custom notification policy (Expiration notifications and core operation notifications are included.)**

Notification contact

1 contact

Up to 10 contacts

Notification method

Email and internal message

Email, internal message, and chatbot

Notification time

All day

All day or from 09:00 to 20:00

Notification dimension

Only certificate expiration notifications

The following types of notifications are supported:

-   Business:
    
    -   Certificate download notification
        
    -   Certificate revocation notification
        
    -   Certificate deletion notification
        
    -   Certificate sharing notification
        
    -   Certificate expiration notification
        
    -   Certificate hosting notification
        
-   Alert:
    
    -   Alert notification for certificates that expire and are not renewed
        
    -   Alert notification for disabling notifications
        
    -   Alert notification for hosting failures
        
-   Service change: notifications for items such as notices, announcements, updates, and upgrades
    

Expiration notification time

Notifications are sent 30 days before the expiration date of a certificate. You cannot change the time.

The following periods of time are supported:

-   30 days before expiration
    
-   60 days before expiration
    
-   90 days before expiration
    

Expiration notification frequency

Only one expiration notification is sent 30 days before the expiration date of a certificate. You cannot change the frequency.

The following frequencies are supported:

-   Only once
    
-   Every one day
    
-   Every three days
    
-   Every five days
    
-   Every seven days
    

## **Prerequisites**

-   A certificate is issued by using the Certificate Management Service console. For more information, see [Purchase SSL certificates](/help/en/ssl-certificate/purchase-an-ssl-certificate#task-q3j-zfp-ydb) and [Apply for a certificate](/help/en/ssl-certificate/submit-a-certificate-application#concept-wxz-3xn-yfb).
    
-   If your certificate is an uploaded certificate, you must purchase the quota for notification. For more information, see [Purchase the quota for notification](/help/en/ssl-certificate/purchase-message-alert-resources#a323df800f2pq).
    

## **Procedure**

1.  Log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas).
    
2.  In the left-side navigation pane, choose **Certificate and Domain Application Services** > **Notification**.
    
3.  On the **SSL Certificates** page, find the certificate for which you want to configure notifications, and click **Edit** in the **Actions** column.
    
    To configure notifications for multiple certificates at a time, select multiple certificates and click **Batch Edit** below the certificate list.
    
4.  In the **Edit Notification** panel, turn on Notification Switch, configure the following parameters, and then click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Alert Contact**
    
    Specify a certificate notification contact. You can specify up to 10 contacts.
    
    **Notification Method**
    
    Select the method to receive notifications. Valid values: Email Address, Internal Message, and DingTalk/WeCom/Lark.
    
    To use the DingTalk, WeCom, or Lark method, specify a webhook URL for DingTalk, WeCom, or Lark when you create a contact on the **Contact Management** page. For more information, see [Manage contacts](/help/en/ssl-certificate/manage-contacts).
    
    **Notification Content**
    
    Select Business Notification, Alert Notification, and Product Change.
    
    **Expiration Notification Frequency**
    
    Select the frequency at which you want to receive notifications.
    
    **Expiration Deadline Notification**
    
    Select a time range during which you want to receive notifications before the certificate expires.
    

## **References**

-   [Create contacts](/help/en/ssl-certificate/manage-contacts#title-xhs-xy3-ruo)
    
-   [Purchase the quota for notification](/help/en/ssl-certificate/purchase-message-alert-resources#a323df800f2pq)
