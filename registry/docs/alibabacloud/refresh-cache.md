You can use the purge cache feature to clear cached resources from points of presence (POPs). This allows POPs to retrieve the latest resources from your origin server. Purging the cache is useful for updating content, publishing new content, or removing illicit resources. Note that purging many resources in a short period of time generates more origin requests, which increases the load on your origin server.

## Introduction

When you purge the cache, resources on all Edge Security Acceleration (ESA) POPs are marked as expired. When a user requests an expired resource, ESA fetches the latest version from the origin server. ESA then returns the resource to the user and caches it on the POP. Purging the cache reduces the cache hit ratio.

## Scenarios

-   **Update and publish resources**
    
    After you update resources on your origin server, you can submit the URLs or directories of the updated resources to purge them. This ensures that users can access the latest content from the ESA POPs.
    
-   **Remove illicit content**
    
    If you remove illicit content from your origin server, the content may still be accessible from the cache on ESA POPs. You can purge the resources to remove the illicit content from the POPs.
    

## Notes

-   After a purge task is submitted and runs successfully, the corresponding cached resources on ESA POPs become invalid. When a user requests a purged resource, the POP retrieves the resource from the origin server and caches it again. Submitting many purge tasks at once clears a large amount of cached content. This causes a spike in origin bandwidth and requests, which increases the load on your origin server.
    
-   A purge task takes about 5 to 6 minutes to take effect after it is submitted. If a file or directory has a cache time-to-live (TTL) of less than 5 minutes, you do not need to run a purge task. Wait for the cache to expire.
    
-   When you submit a purge task, if the URI contains **non-ASCII characters**, such as Chinese characters or special characters, or reserved characters, such as spaces, you must encode the URI first. Otherwise, the content management system cannot identify the task. Ensure that the URI that you submit is in the encoded format.
    

## **Support by plan**

**Feature**

**Entrance**

**Pro**

**Premium**

**Enterprise**

[Purge by URL](/help/en/edge-security-acceleration/esa/user-guide/refresh-cache-by-url)

1,000 times

50,000 times

100,000 times

500,000 times

[Purge by directory](/help/en/edge-security-acceleration/esa/user-guide/refresh-cache-by-directory)

50 times

100 times

1,000 times

2,000 times

[Purge by hostname](/help/en/edge-security-acceleration/esa/user-guide/refresh-cache-by-host-name)

Not supported

100 times

1,000 times

2,000 times

[Purge by custom cache key](/help/en/edge-security-acceleration/esa/user-guide/purge-cache-by-custom-cachekey)

Not supported

Not supported

Not supported

2,000 times

[Purge by URL with parameters ignored](/help/en/edge-security-acceleration/esa/user-guide/press-go-parameter-to-refresh-cache)

Not supported

Not supported

Not supported

2,000 times

[Purge by tag](/help/en/edge-security-acceleration/esa/user-guide/refresh-cache-by-tag)

Not supported

Not supported

Not supported

2,000 times

[Purge all cache](/help/en/edge-security-acceleration/esa/user-guide/flush-all-caches)

5 times

80 times

125 times

200 times
