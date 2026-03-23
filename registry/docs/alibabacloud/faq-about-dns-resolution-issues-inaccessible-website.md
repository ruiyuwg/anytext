This topic provides answers to frequently asked questions (FAQ) when Domain Name System (DNS) settings do not take effect and website is inaccessible.

## **FAQs**

**How do I check whether the DNS settings take effect?**

You can compare the DNS resolution results returned by the local DNS server and the authoritative DNS server with the IP address specified in the DNS settings of the domain name. If the DNS resolution results returned by the local DNS server and the authoritative DNS server are the same as the IP address specified in the DNS settings of the domain name, the DNS settings take effect. If the DNS resolution result returned by the local DNS server is different from the IP address specified in the DNS settings, the main cause is that the cache of the local DNS server has not expired. We recommend that you wait 10 minutes. If the DNS resolution result returned by the authoritative DNS server is different from the IP address specified in the DNS settings, we recommend that you contact Alibaba Cloud technical support. For more information, see [Check whether the DNS records take effect](/help/en/dns/check-whether-the-dns-records-take-effect).

**Why does domain name resolution not take effect?**

This issue may be caused by one of the following causes:

-   Domain name is newly registered
    

-   Domain name has expired
    
-   Subdomain is not hosted by Alibaba Cloud DNS
    
-   DNS record was modified
    
-   DNS server for a domain name was modified
    
-   DNS server is not assigned by Alibaba Cloud DNS
    
-   No default DNS line is specified for the domain name
    

For detailed information and solutions, see [Why does domain name resolution not take effect?](/help/en/dns/why-does-domain-name-resolution-not-take-effect)

**What can I do if the DNS settings do not take effect?**

If the IP address resolved from a domain name is different from the IP address specified in the DNS settings of the domain name in Alibaba Cloud DNS or the DNS server that receives a DNS query cannot find the IP address corresponding to the domain name, troubleshoot the issue by following the instructions in [Check whether the DNS records take effect](https://www.alibabacloud.com/help/en/alibaba-cloud-dns/latest/check-whether-the-dns-records-take-effect).

**What can I do if the DNS settings do not take effect within a long period of time?**

In most cases, the DNS settings do not take effect because the caches on local DNS servers are not refreshed. Alibaba Cloud DNS has no control over local DNS servers. The time when the cache of a local DNS server is refreshed depends on the time-to-live (TTL) period that you specify. The time when DNS settings take effect varies:

-   Create a DNS record: The DNS settings take effect immediately after the record is created.
    
-   Delete/modify DNS records: The time when the updates take effect depends on the TTL period of the DNS resolution result cached on local DNS servers. The default TTL period is 10 minutes.
    

For more information about the time when DNS settings take effect, see [FAQ about the time when DNS settings take effect](/help/en/dns/faq-about-the-time-when-dns-settings-take-effect).

**Why are the updates to the DNS settings unable to take effect on a local DNS server?**

Alibaba Cloud DNS has no control over local DNS servers. The time when the cache of a local DNS server is refreshed depends on the TTL period that you specify. We recommend that you wait until the TTL period expires. For information about how to query or configure TTL for caching, see [Set the TTL period](/help/en/dns/set-ttl).

**Why are the updates to the DNS settings unable to take effect in some regions?**

The updates to the DNS settings do not take effect in some regions due to the following reasons:

-   **The caches of local DNS servers are not refreshed.** The time when the updates to the DNS settings take effect depends on the intervals at which the caches of local DNS servers are refreshed. The intervals vary with regions. If the caches of local DNS servers in some regions are refreshed at longer intervals, the cached information is retained for a longer period of time and the updates to the DNS settings are unable to take effect in these regions.
    
    Solution: Alibaba Cloud DNS technical support cannot resolve this issue. We recommend that you contact the local Internet service provider (ISP) to handle this issue.
    
-   **DNS Request Source is not properly set.** You must select **Default** for DNS Request Source.
    
    Solution: Add a DNS record with the **DNS request source** set to "Default," while keeping other configurations consistent with the current DNS record. For more information, see [Add DNS records](/help/en/dns/add-a-dns-record).
    

**Can Alibaba Cloud DNS engineers contact Internet service providers (ISPs) to refresh the caches of local DNS servers?**

No, we cannot help you contact ISPs to refresh the caches of local DNS servers. Visitors of a domain name are from all over the world. Each local DNS server caches DNS resolution results. Alibaba Cloud DNS servers are authoritative DNS servers, and Alibaba Cloud DNS has no control over local DNS servers.

## **Website is inaccessible when DNS settings have taken effect**

**Why is my website inaccessible, although the DNS settings have taken effect?**

Configuring DNS settings is only one step in building a website. You must complete other steps before the website becomes accessible. If the website is inaccessible, first check whether the DNS settings take effect by referring to [Check whether the DNS records take effect](/help/en/dns/check-whether-the-dns-records-take-effect). If the DNS settings have taken effect but the website is still inaccessible, the issue is not caused by DNS resolution. The following checks are recommended:

-   Check whether the ports 80 and 443 are allowed in the security group associated with the server. Port 443 is required for websites using HTTPS. If the server is an Alibaba Cloud ECS instance, refer to [check the security group rules of the ECS instance](/help/en/ecs/user-guide/check-whether-tcp-port-80-is-available#777394a0fdvtr) for configuring security groups.
    
-   Check whether the service is disabled or not started, and check whether the port of the service is listened on. For more information, see [Check the status of the service and the listening status of the port of the service](/help/en/ecs/user-guide/check-whether-tcp-port-80-is-available#5fcf041002iku).
    
-   Check whether the server firewall is enabled and the relevant port is allowed by the firewall. For more information, see [Check the firewall settings of the ECS instance](/help/en/ecs/user-guide/check-whether-tcp-port-80-is-available#a2951da00266g).
    

If the issue persist after completing the above checks, we recommend that you contact the server or website technical support for further assistance.

**Why does a ping operation fail, although the DNS settings have taken effect?**

If DNS resolution is working properly, the main cause of a ping operation failure is poor network conditions. If your website is hosted on an Alibaba Cloud instance, you can [submit a ticket to contact Alibaba Cloud technical support](https://smartservice.console.alibabacloud.com/?#/ticket/createIndex). If your website is hosted on a server provided by a third-party cloud service provider, you can contact their technical support.

**Why is my website intermittently unavailable?**

The intermittent unavailability of a website may be caused by unstable loading of the website, slow loading of the website, or unstable DNS resolution:

-   If the intermittent unavailability is caused by unstable or slow loading of the website, the issue cannot be resolved by Alibaba Cloud DNS. DNS resolution is performed to resolve a domain name to the IP address of the server where the website is hosted. If you can open the website by using the domain name, DNS resolution is working. You can troubleshoot the issue from other aspects, such as server configurations, website programs, and network conditions.
    
-   Another possible cause is unstable DNS resolution. To resolve a domain name, a client sends a DNS query to a local DNS server first. If the local DNS server has not cached the corresponding DNS resolution result or the cache has expired, the local DNS server sequentially forwards the query to the root DNS server, the top-level DNS server, and Alibaba Cloud DNS server that is the authoritative DNS server. If the local DNS server is unstable, DNS resolution may fail. The next time DNS resolution becomes unstable, you can take a snapshot of the query result returned by the diagnostic tool provided by Alibaba Cloud and [submit a ticket](https://smartservice.console.alibabacloud.com/?#/ticket/createIndex) to Alibaba Cloud technical support.
