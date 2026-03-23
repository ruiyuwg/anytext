Time-To-Live (TTL) specifies the period for which a DNS record is cached on a local DNS server. By default, this period is the TTL value set on the authoritative DNS server.

## **How TTL takes effect**

1.  When a local DNS server receives a DNS query, it sends the query to an authoritative DNS server, such as Alibaba Cloud DNS, to retrieve the DNS record.
    
2.  The local DNS server caches the retrieved DNS record for the period specified by the TTL. During this period, if the local DNS server receives another query for the same domain name, it returns the cached DNS record to the user instead of sending a new query to the authoritative DNS server.
    
3.  When the cache on the local DNS server expires, the cached DNS record is purged. If the local DNS server receives another query for the same domain name, it sends a new query to an authoritative DNS server, such as Alibaba Cloud DNS, to retrieve the latest DNS record.
    

**Note**

The cache period of a DNS record on a local DNS server is the TTL value set in **Public Zone** by default. Some carriers may adjust the cache policy of local DNS servers. This may prolong the time required for a DNS record modification to take effect.

## Configurable TTL values for different editions

The minimum configurable TTL value varies by **Public Zone** edition. To set a smaller TTL value, you can purchase [Hosted Public Zone (Subscription)](https://common-buy-intl.alibabacloud.com/?commodityCode=dns_dns_public_intl).

Edition

Free Edition

Personal Edition

Enterprise Ultimate Edition & Premium Edition

Minimum TTL value

600 seconds (10 minutes)

600 seconds (10 minutes)

1 second

Maximum TTL value

86400 seconds (24 hours)

86400 seconds (24 hours)

86400 seconds (24 hours)

## Scenarios

1.  **Increase the TTL to reduce recursive DNS queries and accelerate resolution.**
    
    DNS records are only changed occasionally. You can increase the TTL to extend the cache period of DNS records on local DNS servers. When a user accesses your website, their local DNS server returns the cached DNS record without performing a recursive query. This can accelerate domain name resolution.
    
2.  **Decrease the TTL to reduce the downtime when you change the server IP address.**
    
    When you change a DNS record to a new IP address, the change takes effect at different times across regions because the cache on some local DNS servers has not yet expired. As a result, some users access the new server while other users still access the previous server.
    

## **Procedure for changing a record value**

1.  Check the current TTL of the domain name. Assume that the TTL is 10 minutes.
    
2.  Change the TTL to the minimum value allowed. For example, if you use the Ultimate Edition of Alibaba Cloud DNS, you can change the TTL to 1 second. (The minimum configurable TTL value varies by Alibaba Cloud DNS edition. For more information, see [Configurable TTL values for different editions](#h2-u7248u672Cu5DEEu5F02u5BF9u6BD43).)
    
3.  Wait 10 minutes for the cache on local DNS servers worldwide to expire. After the cache with the previous TTL expires, local DNS servers send new queries to the authoritative DNS server to retrieve the latest DNS record with the new TTL. You must wait for the previous 10-minute cache to expire before the new 1-second TTL takes effect.
    
4.  Change the IP address in the DNS record. Because the TTL was changed to 1 second in the previous step, local DNS servers can be updated with the latest DNS record almost immediately.
    
5.  After local DNS servers are synchronized with the latest record and testing confirms no issues, increase the TTL value again, for example, to 10 minutes. If you leave the TTL at 1 second, caching on local DNS servers is not effective. Each DNS query requires a recursive query, which slows down domain name resolution.
    
    **Note**
    
    Some local DNS servers may not follow the TTL rules set by the authoritative DNS server. When you run a network probe test, you may find that the DNS records on local DNS servers in some regions are inconsistent with your settings. If this issue occurs, wait for a while and then run the test again.
    

## Procedure

1.  Go to [Alibaba Cloud DNS - Public Zone](https://dnsnext.console.alibabacloud.com/authoritative).
    
2.  Click the target domain name to go to the **Settings** page.
    
3.  In the Actions column of the target DNS record, click **Edit**.
    
4.  In the Edit Record panel, change the TTL value, and then click OK.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0913424671/p750553.png)
    

## **FAQ**

### **Why can't I set the TTL to 1 second?**

The minimum TTL value varies for different versions of the Cloud DNS service. For more information, see [TTL values for different versions](#h2-u7248u672Cu5DEEu5F02u5BF9u6BD43).

### **Why does the change still take a long time to take effect after I set the TTL to 1 second?**

The new TTL takes effect only after the cache with the previous TTL expires. If the previous TTL was 10 minutes, you must wait 10 minutes for the cache on all local DNS servers to expire. After the cache expires, the new 1-second TTL takes effect, and subsequent changes to the DNS record are updated within 1 second.

### **When do added, modified, or deleted DNS records take effect?**

For more information, see [FAQ about the effective time of DNS records](/help/en/dns/pubz-parse-effective-time-faq).
