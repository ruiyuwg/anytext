This topic describes how to add, delete, and retrieve a zone for a non-Alibaba-Cloud domain, and reclaim a domain name registered with Alibaba Cloud.

## Add a zone

-   **You do not need to add zones for domain names registered with Alibaba Cloud.** After a domain name is registered, you can configure its DNS records in the Alibaba Cloud DNS console.
    
-   For a non-Alibaba-Cloud domain name or a subdomain, you must add a zone for it in the Alibaba Cloud DNS console to enable its DNS resolution service.
    
-   This procedure is for adding a zone for an non-Alibaba-Cloud primary domain name. To add a zone for a subdomain, see [Manage subdomains](/help/en/dns/pubz-subdomain-management).
    

1.  Log on to the [Alibaba Cloud DNS - Public Zone](https://dnsnext.console.alibabacloud.com/authoritative) page and click **Add Zone**.
    
2.  In the dialog box, enter the primary domain name and select an instance to bind. If no paid instance is available, click **Purchase a plan instance** to open the purchase page. For more information, see [Purchase and bind a domain name](/help/en/dns/pubz-instance-purchase-and-domain-name-binding).
    
    **Note**
    
    For a comparison of instance editions, see [Edition comparison](/help/en/dns/pubz-example-selection-guidance). Paid editions provide a 100% monthly availability Service Level Agreement (SLA), faster query speeds, and enhanced security. For business-critical services, use a paid edition to leverage these benefits and ensure stability.
    
3.  After you complete these steps, the domain name appears on the **Public Zone** page, which confirms the zone was added successfully.
    
    **Note**
    
    After the zone is added, if the status of its assigned DNS servers is abnormal, see [View DNS server status and handle exceptions](/help/en/dns/pubz-view-dns-server-status-and-exception-handling).
    

## Retrieve a zone

If you are the registrant of a non-Alibaba-Cloud domain and see a prompt that the domain already exists in another account, you can retrieve the zone to manage it in your current account.

**Warning**

Retrieving a zone to a new account deletes its previous DNS records.

1.  On the [Alibaba Cloud DNS - Public Zone](https://dnsnext.console.alibabacloud.com/authoritative) page, click **Add Zone**.
    
2.  After you enter the domain name, a prompt appears indicating that the domain has been added by another account. Click **Retrieve Zone**.
    
3.  In the **Verify Registrant Identity** dialog box, copy the **Hostname** and **Record Value**. Do not close this dialog box.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1753857671/p1041227.png)
    
4.  Go to your domain's current DNS provider and add a TXT record using the copied values.
    
5.  After you add the TXT record, return to the identity verification dialog box in the Alibaba Cloud DNS console and click submit. Alibaba Cloud DNS automatically scans for the TXT record. On successful verification, you will receive an email confirmation, and the domain name will be added to your account.
    

## Reclaim a domain name and its DNS records

For **domain names registered with Alibaba Cloud**, you can reclaim DNS record management if it has been transferred to another account. If your domain's DNS records are managed by another Alibaba Cloud account, use the **Add Zone** feature in your registrar account to reclaim management. For example, if a domain name is registered under Account A but its DNS records are managed by Account B, use the **Add Zone** feature in Account A to reclaim the DNS records from Account B.

1.  On the [Alibaba Cloud DNS - Public Zone](https://dnsnext.console.alibabacloud.com/authoritative) page, click **Add Zone** and enter the target domain name in the dialog box.
    
2.  A prompt appears: **The domain name has been transferred to another account. Do you want to retrieve the management rights to this account?** To reclaim the domain name and its DNS records, select **Reclaim Domain Name and DNS Records**. The system then checks the DNS instance that the domain is bound to in Account B. If it is a paid edition, you must purchase an instance of the same edition in Account A. As shown in the following figure, select **Reclaim Domain and DNS Records** for the system to automatically bind the new instance and prevent service interruptions.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1753857671/p1041228.png)
    
    **Warning**
    
    1.  If the domain name is bound to a paid instance in Account B, you must purchase an instance of the same edition in Account A. Otherwise, the domain name is bound to the free edition by default after retrieval. This may cause the suspension of DNS records only supported by the paid edition and lead to service interruptions.
        
    2.  If you do not want to bind a paid instance after reclaiming the DNS records, check the records in Account B before you proceed. You must also disable the [Update Lock](/help/en/dws/user-guide/enable-the-update-prohibition-lock) and [DNSSEC](/help/en/dns/pubz-dnssec) features.
        
    3.  If the domain name in Account B uses the free edition of Alibaba Cloud DNS, you can reclaim the DNS records directly. The records are smoothly transferred without any impact.
        
    
3.  After you select the instance to bind, click **OK** to reclaim the DNS records to the current account.
    

## Delete a zone

In the Alibaba Cloud DNS console, you can delete zones for **non-Alibaba-Cloud domain names**. When you delete a zone, all its DNS records are also deleted. **You cannot delete zones for domain names that are registered with Alibaba Cloud.**

1.  On the [Alibaba Cloud DNS - Public Zone](https://dnsnext.console.alibabacloud.com/authoritative) page, find the domain name to delete. In the **Actions** column, click more and then click **Delete**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2610074671/p977795.png)
    
2.  In the dialog box, confirm the action.
    

**Warning**

This action deletes the zone and all its DNS records and cannot be undone. Proceed with caution.

### Inactive zone cleanup

Alibaba Cloud DNS Public Zone has a cleanup mechanism for inactive DNS data of non-Alibaba-Cloud domains. It **deletes the DNS data for inactive zones after 30 days.** Domain names registered with Alibaba Cloud and their independently hosted subdomains are not considered inactive and are not cleaned up, regardless of their editions.

**Warning**

**Rules for identifying an inactive zone:**

-   A **non-Alibaba-Cloud domain name** is considered inactive if it uses the **free edition of Alibaba Cloud DNS** and its DNS servers at the **domain name registrar** have **not** been changed to the DNS server addresses assigned by Alibaba Cloud DNS.
    
-   An independently hosted subdomain of a **non-Alibaba-Cloud domain name** is considered inactive if it uses the **free edition**, and the required NS records have **not** been configured on the primary domain's DNS to point to the DNS server addresses assigned by Alibaba Cloud DNS.
    

## FAQ

-   For answers to frequently asked questions, see [Domain name FAQs](/help/en/dns/pubz-set-domain-name-subdomain-name-related-faq).
    
-   To migrate your DNS configuration, see [Transfer DNS records between accounts](/help/en/dns/pubz-transfer-between-domain-name-resolution-records-and-accounts).
    
-   To add multiple zones in a single operation, see [Add zones in bulk](/help/en/dns/pubz-add-domain-names-in-bulk).
