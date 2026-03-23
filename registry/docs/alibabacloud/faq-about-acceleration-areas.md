This topic provides answers to some frequently asked questions (FAQ) about acceleration areas of Global Accelerator (GA).

-   [Can I use GA if the client resides in a region that is not supported by GA?](#c24f5b7e10mxc)
    
-   [After I configure a CNAME record, why does it fail to take effect?](#section-hfb-5yp-uzj)
    
-   [Is access from IPv4 clients accelerated if I configure IPv6 for the acceleration area of a GA instance?](#section-1n2-dpo-6l1)
    
-   [Why is an error returned when I modify the bandwidth of an acceleration area?](#section-udb-gmm-vt3)
    

## **Can I use GA if the client resides in a region that is not supported by GA?**

Yes. GA allows clients to access the Alibaba Cloud acceleration network from the nearest access point.

-   If the accelerated IP address type is EIP: When you configure an [acceleration region](/help/en/ga/user-guide/overview-1/#05cc333029x1g), select the region closest to your client. The client can use the accelerated IP address or CNAME to access the Alibaba Cloud acceleration network from the acceleration region.
    
-   If the accelerated IP address type is Anycast EIP: You do not need to configure acceleration regions. GA provides a unified IP entry point across multiple regions worldwide. Clients can use the Anycast EIP or CNAME to access the Alibaba Cloud acceleration network from the nearest [access point](/help/en/anycast-eip/product-overview/what-is-anycast-eip#section-24l-kft-zbq).
    

## After I configure a CNAME record, why does it fail to take effect?

You can modify DNS resolution settings to map the domain name of the backend service to the CNAME of the GA instance. When a client accesses the backend service using the domain name, GA resolves the domain name to an accelerated IP address based on the region of the client.

**Note**

-   If you want to return resolution results based on the region to which a client belongs, make sure that Alibaba Cloud DNS is upgraded to Enterprise Standard Edition or Enterprise Ultimate Edition. For more information, see the "[Upgrade](/help/en/dns/renewal#section-pf7-cok-x5h)" section of the Renewal and upgrade topic.
    
    After the upgrade is complete, you can change the default ISP line of the existing A record to the ISP line of a specific region and add a CNAME record that maps the website domain name to the CNAME assigned to the GA instance.
    
-   If the backend service type of the endpoint is a custom domain name, the actual amount of time it takes for the DNS record to take effect depends on the following factors:
    
    -   The TTL value for DNS server caching. You can specify the value when you configure DNS records.
        
    -   The TTL value for GA caching: By default, GA obtains DNS records every 15 seconds.
        

If the CNAME record that you configure for an accelerated domain name fails to take effect, you can check the acceleration regions.

-   If all acceleration regions are in the Chinese mainland, the CNAME record takes effect only in the Chinese mainland.
    
-   If all acceleration regions are outside the Chinese mainland excluding China (Hong Kong), the CNAME record takes effect only outside the Chinese mainland.
    
-   If the acceleration regions include China (Hong Kong), the CNAME records take effect worldwide.
    

## Is access from IPv4 clients accelerated if I configure IPv6 for the acceleration area of a GA instance?

No.

If IPv6 is configured for the acceleration area of a GA instance, only IPv6 clients can connect to the GA instance for accelerated access to backend services.

## Why is an error returned when I modify the bandwidth of an acceleration area?

### Issue

One of the following errors is returned when you modify the bandwidth of an acceleration area:

-   The error message **The GA Instance Is In An Invalid State** and the error code `StateError.Accelerator` are returned.
    
-   The error message **bandwidthPackage state finacialLocked is illegal** and the error code `StateError.Accelerator` are returned.
    

### Cause

After a subscription GA instance or the basic bandwidth plan associated with a GA instance expires, you cannot modify the bandwidth of an acceleration area.

### Solution

Check whether your subscription GA instance or the basic bandwidth plan associated with your GA instance has expired. If yes, you cannot perform operations on the subscription GA instance.

If your subscription GA instance has expired, you can perform one of the following operations:

-   [Renew](/help/en/ga/product-overview/renewal#task-2140900) the subscription GA instance.
    
-   Purchase and configure a new GA instance. For more information, see [Getting started](/help/en/ga/getting-started/get-started#concept-2384269).
    

If your basic bandwidth plan has expired, you can perform one of the following operations:

-   [Renew](/help/en/ga/product-overview/renewal#task-2140900) the basic bandwidth plan.
    
-   [Purchase a new basic bandwidth plan](/help/en/ga/product-overview/purchase-and-manage-basic-bandwidth-plans#task-2405405) to replace the original basic bandwidth plan.
