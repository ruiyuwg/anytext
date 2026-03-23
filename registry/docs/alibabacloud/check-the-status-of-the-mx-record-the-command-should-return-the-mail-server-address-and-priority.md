To send and receive emails using a custom domain name, such as `user1@example.com`, you must correctly configure the DNS records for your enterprise mailbox.

## **Scenarios**

-   Configure an enterprise mailbox service for a new domain name.
    
-   Migrate from one mailbox provider to another.
    
-   Optimize the security and deliverability of your existing mailbox configuration.
    

## **Prerequisites**

-   The domain name must use **Public Zone** as its authoritative DNS server.
    
    -   If you purchased your domain name from Alibaba Cloud, it uses **Public Zone** by default. If you do not have a domain name, you can purchase one from [Alibaba Cloud Domain Names](https://www.alibabacloud.com/domain).
        
    -   If you purchased your domain name from a third-party provider, you must add it to **Public Zone** and change its DNS servers. For more information, see [How to smoothly migrate domain name resolution to Alibaba Cloud DNS](/help/en/dns/pubz-how-to-smoothly-migrate-domain-name-resolution-to-alibaba-cloud-dns).
        
-   You have purchased an enterprise mailbox and attached it to a domain name, such as `example.com`, in the mailbox management console. To purchase an Alibaba Mailbox, see [Alibaba Mail purchase flow](/help/en/alibaba-mail/latest/alibaba-mail-purchase-process). The following figure shows an example of an attached domain name whose mailbox DNS records have not yet propagated.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7457197571/p1006514.png)
    

## Mailbox DNS record types

**Host**

**Record Type**

**Example**

**Function**

**Requirement**

@

MX

mx1.qiye.aliyun.com

Specifies the mail server that accepts emails for the domain name. A domain name can have multiple MX records. A smaller priority number indicates a higher priority.

Basic, Required

imap/pop3/smtp

CNAME

imap.qiye.aliyun.com

Mail client configuration.

Basic, Optional

mail

CNAME

qiye.aliyun.com

Lets you access the webmail logon page at a URL like `mail.yourdomainname`.

Basic, Optional

@

TXT

v=spf1 include the following:spf.qiye.aliyun.com -all

**SPF record**: A technology that authenticates email senders based on their IP addresses. It is a highly effective solution against spam. The receiving mail server checks the domain's Sender Policy Framework (SPF) record to determine if the sender's IP address is included in the record. If the IP address is included, the email is considered legitimate. Otherwise, the email is considered forged and is returned.

Basic, Required

default.\_domainkey

TXT

k=rsa; p=MIGfMA0GCSq...

**DKIM**: A digital signature for emails. For more information, see [What is DKIM and how to add it?](/help/en/alibaba-mail/latest/what-is-dkim-how-do-i-add-them)

Advanced, Optional, Recommended

\_dmarc

TXT

v=DMARC1; p=quarantine; rua=...

**DMARC**: An email authentication policy. For more information, see [What is DMARC and how to set it up?](/help/en/alibaba-mail/latest/what-is-dmarc-how-do-i-set-it-up)

Advanced, Optional, Recommended

## Choose a configuration method

If you use Alibaba Mail, DingTalk Mail, NetEase Mail, Tencent Exmail, or Sina Free Mail for Business, use [Method 1: Quick add](#95db2c73a3nqa). For other mailbox types, use [Method 2: Manually add all DNS records](#9227575bcaspz).

### **Method 1: Quick add**

**Public Zone** provides built-in DNS records for common mailboxes to simplify the configuration and facilitate quick integration. However, this feature usually does not include DomainKeys Identified Mail (DKIM) or Domain-based Message Authentication, Reporting, and Conformance (DMARC) records. After you complete the quick add operation, add these records using [Method 2: Manually add all DNS records](#9227575bcaspz) to improve email security.

1.  Go to the [Public Zone](https://dnsnext.console.alibabacloud.com/authoritative) console and click the target domain name.
    
2.  On the **Settings** tab, click the **Quick Add** button.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1108764571/p975779.png)
    
3.  In the dialog box that appears, click **Add DNS Records for Mailbox**, select an email type, and click Submit. For example, if you select Alibaba Mail, the system adds the following DNS records to your domain name:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7457197571/p1006515.png)
    

### **Method 2: Manually add all DNS records**

This method gives you full control over the configuration. It works for all mailbox providers and supports complex setups, such as merging Sender Policy Framework (SPF) records from multiple sending sources and adding DKIM records.

1.  Contact your mailbox provider to obtain the required DNS record checklist. The following table shows the checklist for Alibaba Mail:
    
    **Host**
    
    **Record Type**
    
    **Priority**
    
    **Record Value**
    
    Description
    
    @
    
    MX
    
    5
    
    mx1.qiye.aliyun.com
    
    MX record. Specifies the server address that receives emails for the domain name.
    
    @
    
    MX
    
    10
    
    mx2.qiye.aliyun.com
    
    @
    
    MX
    
    15
    
    mx3.qiye.aliyun.com
    
    imap
    
    CNAME
    
    imap.qiye.aliyun.com
    
    Mail client address.
    
    pop3
    
    CNAME
    
    pop.qiye.aliyun.com
    
    smtp
    
    CNAME
    
    smtp.qiye.aliyun.com
    
    mail
    
    CNAME
    
    qiye.aliyun.com
    
    Lets you access the webmail client at `mail.example.com`.
    
    @
    
    TXT
    
    v=spf1 include the following:spf.qiye.aliyun.com -all
    
    SPF record.
    
    default.\_domainkey
    
    TXT
    
    Obtain from the documentation
    
    **DKIM**: A digital signature for emails. For more information, see [What is DKIM and how to add it?](/help/en/alibaba-mail/latest/what-is-dkim-how-do-i-add-them)
    
    \_dmarc
    
    TXT
    
    Obtain from the documentation
    
    **DMARC**: An email authentication policy. For more information, see [What is DMARC and how to set it up?](/help/en/alibaba-mail/latest/what-is-dmarc-how-do-i-set-it-up)
    
2.  Go to the [Public Zone](https://dnsnext.console.alibabacloud.com/authoritative) console and click the target domain name.
    
3.  On the **Settings** tab, click **Add Record**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7457197571/p1006516.png)
    
4.  Add the required MX, TXT, and CNAME records.
    

## **Verify the configuration status**

After you modify DNS records, it takes time for the changes to propagate globally. This process typically takes a few minutes to several hours. You can use the following methods to verify the status of your configuration.

**Use the command line interface**

```
# Check the status of the MX record. The command should return the mail server address and priority.
dig yourdomain MX
# Check the SPF record. The command should return a TXT record that contains "v=spf1".
dig yourdomain TXT
```

**Perform a live email delivery test**

1.  Send an email from your configured enterprise mailbox to an external mailbox service, such as Gmail or Outlook.
    
2.  Check if the email is delivered to the inbox.
    

## **Costs**

-   Mailbox service fees: The main cost is the subscription fee from your enterprise mailbox provider.
    
-   DNS resolution fees: Alibaba Cloud DNS provides a Free Edition and paid editions. If you require a high-quality **Public Zone** service with guaranteed availability, purchase a paid edition. For more information, see [Purchase and attach domain names](/help/en/dns/pubz-instance-purchase-and-domain-name-binding).
    

## **Troubleshooting**

**Q: Why are my DNS records not taking effect?**

A: Confirm that Alibaba Cloud DNS is the authoritative DNS server for your domain name. You can also try clearing your local DNS cache, testing from a different network environment, or waiting for the Time to Live (TTL) to expire.

**Q: Why can't I receive emails?**

A: Use the `dig` command or a domain name check tool to check whether the MX record correctly points to your provider's server. Confirm that your mailbox account is correctly set up with the provider.

**Q: Why are my sent emails rejected or moved to the spam folder?**

A: Check if the SPF record includes all sending sources. Use an online tool to validate the DKIM signature. Verify that the DMARC policy is not too strict. For example, a policy of `p=reject` may be too restrictive during the initial setup.

## **References**

-   For more information about record types and form fields, see [Add a DNS record](/help/en/dns/pubz-add-parsing-record).
    
-   For more methods to test record propagation, see [Methods for testing DNS resolution](/help/en/dns/pubz-parsing-effectiveness-test-methods).
    
-   For frequently asked questions about mailbox records, see [FAQs about MX records](/help/en/dns/pubz-faq-related-to-domain-name-resolution-resolution-records#8b0977acd4xvt).
