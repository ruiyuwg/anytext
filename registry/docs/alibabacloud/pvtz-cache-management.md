**Cache** stores DNS query results in memory to accelerate domain name resolution in your private network.

## Add a domain with cache retention

When cache retention is enabled, DNS records for a domain are kept in the cache indefinitely. If a record is not in the cache, the system actively fetches it. If the record is already cached, the system does not automatically trigger a cache update. If a DNS query for a domain arrives after its Time to Live (TTL) has expired, the system responds with the previous cache entry and then asynchronously updates the record. If the update query fails to retrieve a new record, the system continues to serve the previous record.

We recommend enabling cache retention for frequently accessed or critical domains. This feature keeps their resolution results permanently in the cache, which improves DNS resolution speed within your private network and protects against service disruptions caused by DNS provider outages. During an outage, the system continues to respond with the last known resolution result.

**Note**

For domains with CNAME records, cache retention applies only to the first hop of the CNAME chain. Subsequent domains are not retained. To accelerate the entire resolution process, you must add each domain in the CNAME chain to cache retention individually.

1.  Go to the [Alibaba Cloud DNS - Private Zone](https://dnsnext.console.alibabacloud.com/privateDNS) console.
    
2.  Click **Cache** > **Add Domain Name**.
    
3.  Complete the form.
    
    **Parameter**
    
    **Description**
    
    **Domain Name**
    
    Enter the domain name for which you want to enable cache retention. This operation applies only to the specified domain name and does not include subdomains.
    
    **Record Type**
    
    The record type for which to perform cache retention. Valid values:
    
    A, AAAA, CNAME, TXT, MX, SRV, and PTR.
    
    **Cache Retention**
    
    1.  The DNS records of the domain name are stored in the cache module and are not released. The system responds to DNS queries with the cached data. This provides an ultra-fast resolution of less than 1 ms.
        
    2.  After the TTL of the cached data expires, if a new query for the domain name is received, the system first responds with the cached data and then proactively performs an origin fetch to update the cache.
        
    
    **Effective Scope**
    
    The effective range defines the network environments where the cached domain name takes effect. Networks outside this range do not benefit from the resolution acceleration provided by cache retention.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7767667671/p982596.png)
    

**Note**

-   For subdomains with cache prefetching enabled, the system periodically resolves them to retrieve the latest DNS records. These records are then used to update the DNS cache, speeding up resolution within the effective range of the cache rule.
    
-   Cache retention rules for domain name resolution apply only to network environments within the specified range. Accessing domain names from outside this range does not provide the acceleration benefit of cache retention.
    
-   This feature applies only to external public domain names that are queried through the recursion module. It does not currently support domain names queried through the Private Zone Regular or Forwarding modules.
    
-   For billing rules, see [Cache management](/help/en/dns/pvtz-product-billing#f69d20c04befw).
    

## Modify a domain name with cache retention

1.  Go to the [Alibaba Cloud DNS - Private Zone](https://dnsnext.console.alibabacloud.com/privateDNS) console.
    
2.  Click **Cache**, and then click **Edit** in the Actions column for the target domain name.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7767667671/p982597.png)
    

## Delete a domain name with cache retention

1.  Go to the [Alibaba Cloud DNS - Private Zone](https://dnsnext.console.alibabacloud.com/privateDNS) console.
    
2.  Click **Cache**, and then click **Delete** in the **Actions** column for the target domain name.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3228667671/p982598.png)
    

## Clear cache

In urgent situations where internal services require the latest DNS records, you clear cache for domain names that are configured for cache retention. This feature clears the cached data for the domain name from the cache servers within the effective range of the rule. This feature is billed on pay-as-you-go basis.

1.  Go to the [Alibaba Cloud DNS - Private Zone](https://dnsnext.console.alibabacloud.com/privateDNS) console.
    
2.  On the **Cache** page, click **Clear Cache** in the Actions column for the target domain name.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7767667671/p982599.png)
    
3.  Cache is cleared after you confirm the operation in the second pop-up window.
    
    **Note**
    
    The cache is only cleared for the selected domain name but not for its subdomains. Cache clearing is limited to two times per second.
