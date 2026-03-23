This topic answers frequently asked questions about setting up domain names and subdomains.

## **Domain name expiration and renewal for Alibaba Cloud**

In any of the following scenarios, after a domain name expires, its DNS server addresses are changed to `**expirens3.hichina.com**` and `**expirens4.hichina.com**`. This makes domain name resolution unavailable.

### **Q: My domain name expired but I have renewed it. How long will it take to restore resolution?**

For domain names registered with Alibaba Cloud, Alibaba Cloud DNS works with the Domain Names service to prevent prolonged resolution interruptions after expiration. This ensures your services remain available. In the actual recursive resolution process, the authoritative address returned by the domain name registry node is the cluster endpoint of the Free Edition of Alibaba Cloud DNS.

**Scenario 1: Using the Free Edition of Alibaba Cloud DNS**

Because the authoritative resolution address returned by the registry is the cluster endpoint of the Free Edition of Alibaba Cloud DNS, domain names that use the Free Edition of Authoritative DNS are not affected. After you renew the domain name, resolution returns to normal after the Time to Live (TTL) period passes. This typically takes 10 minutes.

**Scenario 2: Using a paid edition of Alibaba Cloud DNS**

After you subscribe to a paid edition of Alibaba Cloud DNS, the DNS service endpoints for your domain name are set to `vip(1-8).alidns.com`. When you renew the domain name, resolution for basic lines is not affected. However, paid lines become unavailable. You must wait up to 48 hours for the changes to synchronize.

**Note**

**Basic lines for the Free Edition**: Default, China Unicom, China Mobile, China Telecom, China Education Network, Outside China, Baidu, Bing, and Google.

**Paid lines**: For more information about lines other than the basic lines listed above, see [Line enumeration](/help/en/dns/pubz-resolve-line-enumeration/).

**Scenario 3: Using a third-party DNS service**

After you renew the domain name, the DNS server addresses are changed back to the addresses provided by your previous DNS service provider. In this case, you must wait up to **48 hours** for the changes to synchronize globally before resolution can return to normal. **There is no way to speed up this process**. If you want to restore resolution as soon as possible, you can use the following method: The authoritative address returned by the registry node is the cluster endpoint of the Free Edition of Alibaba Cloud DNS. Go to the [Alibaba Cloud DNS - Authoritative DNS](https://dnsnext.console.alibabacloud.com/authoritative) console, add DNS records that are consistent with the records at your other DNS service provider, and temporarily use Alibaba Cloud's Authoritative DNS service. After the TTL period ends, which is typically 10 minutes, resolution returns to normal. Over the next 24 to 48 hours, resolution will gradually return to your original DNS service provider.

### **Q: My domain name expired but I have renewed it. Does Alibaba Cloud DNS support fast resolution recovery?**

A: No. When a domain name expires, the domain name registrar blocks the DNS servers from providing services. Even if Alibaba Cloud DNS is working normally, recursive DNS queries are not sent to Alibaba Cloud DNS. Therefore, if resolution fails because of an expired domain name, Alibaba Cloud DNS cannot solve the problem. After you successfully renew your domain name, it generally takes 24 to 48 hours for resolution to be restored.

### **Q: I have renewed my domain name. Why does the domain name check tool still show that it is expired?**

A: The domain name check module calls the WHOIS service to perform a query. The WHOIS system does not retrieve the latest information in real time. If you encounter this issue, go to [WHOIS Lookup](https://www.alibabacloud.com/zh/whois/home) and click **Get Latest Information** to query the domain name directly.

## **Add a domain name**

### **Q: Why can't I add a domain name?**

A: The following scenarios describe why you might not be able to add a domain name:

-   **Scenario 1: An error message indicates that the domain name does not belong to the current account**
    
    When you add a domain name, if you receive this error, it means your domain name is registered with Alibaba Cloud but under a different Alibaba Cloud account. To use the domain name with the current account, log on to the account that owns the domain name. Go to the [Domain Names console](https://dc.console.alibabacloud.com/). On the **All Domain Names** tab of the Domain Names page, click the domain name. In the navigation pane on the left, click **Transfer Between Accounts**.
    
    **Note**
    
    -   For more information about how this operation affects DNS resolution, see [How to avoid DNS resolution interruptions when transferring a domain name between accounts](/help/en/dns/pubz-how-to-avoid-affecting-dns-resolution-by-domain-name-account-transfer).
        
    
-   **Scenario 2: An error message indicates that the domain name has been added by another account**
    
    You can use the **Retrieve Domain Name** feature to move the domain name to the current account. For more information, see [Retrieve a domain name](/help/en/dns/pubz-add-remove-manage-domain-names#eb61fb24a6a6u).
    

### **Q: Why can't I delete a primary domain name?**

A: If your domain name is registered with Alibaba Cloud, you cannot delete it in the Alibaba Cloud DNS console.

### **Q: When I try to attach a domain name to a paid edition of DNS, an error message indicates that the domain name does not exist. What does this mean?**

A: If the system indicates that the domain name does not exist, it means the domain name cannot be found in the authoritative domain name list of your current account. First, check whether the domain name you entered is correct. If the domain name is correct but still not found in the list, it may be because your domain name was purchased from another registrar. You can first add the domain name to Alibaba Cloud DNS. For more information, see [Add a domain name](/help/en/dns/pubz-add-remove-manage-domain-names#h3-nff-edb-38e).

### **Q: Both my primary domain and subdomain use Alibaba Cloud DNS. I want to change the DNS for the primary domain to a non-Alibaba Cloud DNS service. How can I do this without affecting the resolution of the subdomain?**

You can achieve smoothing as follows:

1\. Export the DNS records of the primary domain from Alibaba Cloud. The records must include the NS records that point to Alibaba Cloud DNS.

2\. Import the DNS records to the other DNS service provider.

3\. At your domain name registrar, change the DNS servers to point to the other provider.

4\. Do not delete the NS records of the primary domain in the Alibaba Cloud DNS console within 48 hours.

### **Q: My primary domain uses a non-Alibaba Cloud DNS service, and my subdomain uses Alibaba Cloud DNS. I want to change the DNS for the primary domain to Alibaba Cloud DNS. Will this affect the resolution of the subdomain?**

A: Perform the following steps for a smooth migration. The following steps are from the perspective of the subdomain. For information about migrating the DNS of the primary domain, see [Smoothly migrate DNS resolution for a domain name to Alibaba Cloud DNS](/help/en/dns/pubz-how-to-smoothly-migrate-domain-name-resolution-to-alibaba-cloud-dns).

1\. If your primary domain is not registered with Alibaba Cloud, add it to the Alibaba Cloud DNS list. You can skip this step for domain names registered with Alibaba Cloud.

2\. After you add the primary domain, add NS records for the subdomain under the primary domain. The NS records must point to Alibaba Cloud DNS.

3\. At the registrar of the primary domain, change the DNS servers for the domain name.

4\. Do not delete the NS records of the primary domain at the original DNS service provider within 48 hours.

**Important**

When both the primary domain and the subdomain are hosted on Alibaba Cloud DNS, they must use the same DNS edition. For example, both must use the Free Edition or a paid edition. Otherwise, resolution issues may occur.

## **About Subdomains**

### **Q: How do I set up a subdomain or a second-level domain?**

A: You can [add a DNS record](/help/en/dns/pubz-add-parsing-record). Enter your domain name prefix in the Host field and your server IP address in the Record Value field. For example, if your primary domain name is `example.com` and you want to set up the second-level domain `www.example.com`, add a record and enter `www` in the Host field. If you want to manage `www.example.com` and its subdomains independently, see [Subdomain management](/help/en/dns/pubz-subdomain-management).

### **Q: Can I use Alibaba Cloud DNS to provide DNS services for a subdomain?**

A: Yes. Alibaba Cloud DNS supports the following scenarios:

-   Scenario 1: The primary domain uses a third-party DNS service, and the subdomain uses Alibaba Cloud DNS.
    
-   Scenario 2: Both the primary domain and the subdomain use Alibaba Cloud DNS but are managed by different accounts.
    
-   Scenario 4: Both the primary domain and subdomain use Alibaba Cloud DNS and are associated with the same account.
    

For more information, see [Subdomain management](/help/en/dns/pubz-subdomain-management).

### **Q: After I add a subdomain, why can't I get the DNS server names that Alibaba Cloud DNS assigned to it?**

A: Adding a subdomain and assigning DNS servers to it are asynchronous operations. Wait a few minutes and refresh the page. Click the subdomain to go to the DNS Settings page. You can find the assigned DNS server names in the notification area.

### **Q: My primary domain name uses Alibaba Cloud DNS. After I add a subdomain, why is the number of records for the subdomain displayed as zero in the Alibaba Cloud DNS list?**

A: Check whether your primary domain name has any DNS records for the subdomain.

-   If no records exist, it is normal for the number of records for the subdomain to be zero after you add it. You need to add DNS records for the subdomain.
    
-   If records exist, the issue may occur because adding a domain name and synchronizing the subdomain from the primary domain are asynchronous operations. Wait a few minutes, then refresh the page and check again.
    

### **Q: My primary domain name uses Alibaba Cloud DNS. After I add a subdomain, why is the DNS server status displayed as "Abnormal" on the Domain Name Resolution page?**

A: This status indicates that Alibaba Cloud DNS failed to query the DNS server information for the domain name. This may be because no DNS servers are configured for the subdomain. You can get the assigned DNS server names on the DNS Settings page of the subdomain. Then, add two NS records under the primary domain name that point to the DNS server names assigned to the subdomain.

**Important**

If you have already configured the NS records under the primary domain name but the DNS server status on the Domain Name Resolution page is still "Abnormal", it may be because the DNS server status is checked at scheduled intervals, not in real time. Wait a few minutes, then refresh the page and check again.
