After you configure cache sharing, accelerated domain names in the same Alibaba Cloud account can share resources that are cached on Alibaba Cloud CDN points of presence (POPs). If origin servers of different domain names store a large number of common resources, such as images, CSS files, and JavaScript files, you can configure cache sharing. This way, the domain names can share the common resources to reduce the bandwidth usage and increase the resource hit ratio for the domain names. This improves the acceleration performance of Alibaba Cloud CDN and reduces origin traffic.

## **How it works**

Alibaba Cloud CDN works differently based on whether you configure cache sharing for domain names, such as `a.example.com` and `b.example.com`.

For example, the domain names use the same Bootstrap framework and reference the same images, CSS files, and JavaScript files.

### **Cache sharing not configured**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3491676371/CAEQMhiBgMCywKX8ohkiIDcyZmI0OTYyMzg0YjRjMjA4YmQ0MWFjYmM0ZGIxYzU14104325_20231205155925.996.svg)

1.  After User 1 accesses `a.example.com/image.png`, the file is saved in the cache of a.example.com.
    
2.  When User 2 accesses `b.example.com/image.png`, Alibaba Cloud retrieves the file from the origin server and then saves the file to the cache of b.example.com regardless of whether the file is saved in the cache of a.example.com because cached resources are not shared.
    

In this case, each domain name has an independent cache. If a file is cached for a domain name, requests for the same file from other domain names are redirected to origin servers. This increases loads on the origin servers and the waiting time.

### **Cache sharing configured**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4491676371/CAEQMhiBgMC_sKb8ohkiIDcyNjU5YTViNDkyNjQ3YzRhZGM1MjFmN2UxZmVmM2Zh4104325_20231205155925.996.svg)

1.  After User 1 accesses `a.example.com/image.png`, the file is saved in the cache of a.example.com.
    
2.  When User 2 accesses `b.example.com/image.png`, Alibaba Cloud determines that the file has been cached and returns the cached file to the user without origin fetch.
    

After you configure cache sharing, a file is retrieved from the origin server only for the first request. Then the file is obtained from the cache for subsequent requests. This reduces the number of origin requests and accelerates resource loading.

#### **Same origin URL**

-   If `a.example.com` and `b.example.com` are hosted on the same origin `origin.example.com`, requests for the two domain names are retrieved from the same origin server regardless of whether you configure cache sharing.
    
-   The origin URLs are the same. The domain names can share the cache. This accelerates content delivery.
    

#### **Different origin URLs**

Assume that the origin domain of `a.example.com` is `origin-a.example.com` and the origin domain of `b.example.com` is `origin-b.example.com`. If resource URLs are the same, and the accelerated domain name is replaced with the domain name that shares the cache when the cache key is generated, the same cached content can be returned even when the origin URLs are different. The domain names can share the cache. This accelerates content delivery.

## **Usage notes**

-   You can configure cache sharing for only domain names in the same Alibaba Cloud account.
    
-   If you remove an accelerated domain name for which cache sharing is configured, the hit ratios of other accelerated domain names that share the cache with the domain name are affected. Therefore, disable or remove domain names that share the cache with caution. For example, if you configure cache sharing for Domain Name A to share the cache with Domain Name B, the system does not allow you to remove Domain Name B. You need to delete the cache sharing configurations of Domain Name A or configure Domain Name A to share the cache with another domain name before you remove Domain Name B.
    
-   If you transfer an accelerated domain name for which cache sharing is configured, the shared cache of the domain name is not affected.
    
-   After you configure cache sharing for an accelerated domain name, the accelerated domain name is replaced with the domain name that shares the cache only when you query or generate a cache key. The origin URL and origin host of the accelerated domain name remain the same.
    

## Procedure

1.  Log on to the [Alibaba Cloud CDN](https://cdn.console.alibabacloud.com) console.
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Manage** in the **Actions** column.
    
4.  In the left-side navigation tree of the domain name, click **Cache**.
    
5.  Click the **Cache Sharing** tab.
    
6.  Click **Configure**.
    
7.  In the Cache Sharing dialog box, select a domain name and click **OK**.
