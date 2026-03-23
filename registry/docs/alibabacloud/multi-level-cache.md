Edge Security Acceleration (ESA) provides the tiered cache feature to ensure that requests are served as fast as possible from POPs closest to clients, improving the performance and efficiency of the overall content delivery system.

## **What is tiered cache**

Tiered cache is an advanced technology that caches resources on points of presence (POPs) at different levels. It reduces requests to the origin server, which relieves origin loads and optimizes bandwidth utilization. The feature also improves the access speed by allowing clients to access the closest POPs.

## **How it works**

Tiered cache utilizes smart routing to organize 3,200 ESA POPs globally into two groups: POPs closer to clients and POPs closer to the origin server.

When a client requests a resource, ESA identifies the nearest POP to the client and checks its cache for the resource. If the resource is unavailable, ESA searches upper-tier POPs. If the resource is still not found, ESA retrieves it from the origin server. Typically, resources are available on one of the POP tiers.

You can set up the following tiers of caching:

**Edge Tiered Cache**

-   This single-tier cache architecture uses POPs to improve the cache hit ratio and access performance.
    
-   With the most widely distributed POPs, this tier provides clients proximity-based access.
    

**Edge Tiered Cache + Regional Tiered Cache**

-   This 2-tier cache architecture provides enhanced origin pull performance.
    
-   POPs in this cache tier are deployed by region. This tier is designed to quickly serve content when there is a cache miss in the edge cache tier, avoiding the need to fetch data from an upper tier that may be outside the region.
    

**Edge Tiered Cache + Smart Tiered Cache**

-   This 2-tier cache architecture is designed to provide higher cache hit ratio and reduce the load on the origin server.
    
-   ESA intelligently selects a limited number of POPs near to your origin to further reduce origin traffic. Select this mode if you want to minimize origin traffic.
    

**All Caching Tiers**

The 3-tier cache architecture is designed to minimize the number of origin requests in volumetric traffic scenarios.

## **Set up** tiered cache

1.  In the ESA console, choose [Websites](https://esa.console.alibabacloud.com/siteManage/list) and click the name of the website you want to manage.
    
2.  In the left-side navigation pane, choose **Cache** > **Tiered Cache**.
    
3.  In the **Tiered Cache** area, click **Configure**.
    
4.  Select the cache method you need and click **OK**. The feature takes effect in three to five minutes.
    
    **Note**
    
    If you are on the **Enterprise** plan, you can apply to activate **All Cache Tiers** to further increase the cache hit ratio.
    

## **Availability**

-   **Edge Tiered Cache**: Available on all plans
    
-   **Edge Tiered Cache + Regional Tiered Cache**: Available on Pro, Premium, and Enterprise plans
    
-   **Edge Tiered Cache + Smart Tiered Cache**: Available on Pro, Premium, and Enterprise plans
    
-   **All Caching Tiers**: Available on Enterprise plans.[Contact us](https://www.alibabacloud.com/product/esa?_p_lc=1#J_7034216680) to apply for enabling the option.
