Direct Mail is a simple and efficient email sending service built on the reliable and stable Alibaba Cloud infrastructure. It helps you send transactional emails, notification emails, and batch emails quickly and accurately.

## Email types

-   Triggered emails: Emails triggered by events, such as registration notifications, transaction notifications, verification for password retrieval, and other system notification emails.
    
-   Batch emails: Subscription emails sent to members, such as product promotions, user care, periodical newsletters, and other emails.
    

**Note**: Alibaba Cloud only allows sending commercial emails that recipients have permitted. Recipient addresses must come from member registrations, and the content must be actively subscribed to by recipients. Sending unsolicited spam is not allowed.

## Service connection types

Direct Mail provides three connection types for users: Management Console, API, and SMTP. You can choose different connection types based on your business scenarios.

Go to the [Direct Mail product page](https://www.alibabacloud.com/en/product/directmail), and click **Activate Now**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5801143571/p989762.png)

### Management Console connection

Go to the [Direct Mail console](https://dm.console.alibabacloud.com/), complete email settings, and create recipient lists and email templates. You can then send batch emails through the console.

For Direct Mail console operations, see [User Guide](/help/en/direct-mail/user-guide/overview#topic-2139545).

### API connection

You can write programs to call the Direct Mail API and transmit email data. After a successful request, Direct Mail processes and delivers the email data. You can send both event trigger emails and batch emails through the API.

For API call methods, see [API Reference](/help/en/direct-mail/introduction#topic-2139576), [SDK Reference](/help/en/direct-mail/sdk-manual#topic-2139627).

### SMTP connection

You can write programs to call the standard SMTP interface and transmit email data. You can send both event trigger emails and batch emails through the SMTP interface.

For SMTP call methods, see [SMTP Reference](/help/en/direct-mail/smtp-endpoints#topic-2139632).

**Note**

For testing all the connection types above, please use real mailbox addresses as recipients to avoid unnecessary issues.
