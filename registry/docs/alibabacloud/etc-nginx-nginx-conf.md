When website content—such as product details, news articles, or video lists—is updated, you often need to purge multiple cached objects distributed across various points of presence (POPs). Manually purgeing each object individually is inefficient and prone to omissions. The tag-based purge feature of Edge Security Acceleration (ESA) lets you assign cache tags to resources on the origin server. ESA POPs recognize these tags and associate them with cached resources. When content changes, you submit the specified tags to batch-purge all associated cached resources. This improves operational efficiency and ensures accurate content updates.

## Features

The tag-based cache purge feature simplifies bulk purging of related cached resources. It reduces management overhead and increases efficiency. Key benefits include the following:

-   **Efficient batch operations**: For large groups of related resources—such as a news feature page with hundreds of images and multiple JS or CSS files—assign the same tag to all resources. Then purge the entire group with one action.
    
-   **Improved O&M efficiency**: Operations and development teams no longer need to track every resource URL. Instead, they focus on logical groupings—tags—to reduce complexity and avoid missing URLs.
    
-   **Greater business flexibility**: Within the same application, assign different tags to different scenarios. purgeing by tag affects only the specified scenario—such as a sales promotion page—without impacting other scenarios.
    
-   **Consistent user experience**: Ensure tightly coupled resources—such as frontend pages and their supporting static assets—update together. Avoid mismatches like new pages with old styles or partially outdated data.
    

## Use cases

Common use cases include the following:

-   Updating e-commerce sales promotion pages and associated assets
    
-   Taking down special-topic content on news or media sites
    
-   Switching content for multilingual or multi-version sites
    
-   purgeing sub-application resources in a micro-frontend architecture
    

## How it works

ESA uses HTTP headers as cache tags. A cache tag contains [a header name and a header value](#eb7e2c041a4v1) separated by a colon`:`, for example, `Cache-Tag:tag1,tag2,tag3`. When you submit a task to purge the cache by tag:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9207690771/CAEQUxiBgMCBnaDT4hkiIDYxZmZmMTYwOWE5NzQzMDZhN2M0ZjhlNjI4ZGFlOGNm6103100_20260105103025.939.svg)

1.  ESA first determines whether the cache file on the POP is marked with a cache tag (default is `Cache-Tag`). If the cache tag does not exist, ESA skips the purge operation. If it exists, ESA matches the cache tag value.
    
2.  ESA checks whether the tag value on the cached file matches the **Purge Content** you submitted. If it does not match, ESA skips the purge. If it matches, ESA purges the cache (default behavior: **Mark as Expired**).
    

**Note**

ESA supports setting multiple cache tag values for the same resource, with values separated by English commas. When multiple cache tag values exist, ESA POPs normalize the received cache tag values:

-   Remove extra spaces: `tag1, tag2` and `tag1,tag2` are treated as identical.
    
-   Remove duplicate commas: `tag1,,,tag2` and `tag1,tag2` are treated as identical.
    

## Prerequisites

ESA's Purge cache by tag feature works by checking whether the cached content on ESA POPs contains **specific cache tags**. Therefore, when you use this feature, you must configure the origin server to add response headers that correspond to the cache tags for your resources. For configuration methods, see the following:

**Add a cache tag header at your origin**

For example, add the HTTP response header Cache-Tag to resources in the `/images directory`:

**Note**

By default, tag-based purge matches the `Cache-Tag` header and is case-sensitive. To use a custom header, see [Configure a custom cache tag](/help/en/edge-security-acceleration/esa/user-guide/configura-cache-tag).

```
# /etc/nginx/nginx.conf
﻿
server {
    listen 80;
    server_name your-origin-domain.com;
    # Add tag to all resources under /images/
    location /images/ {
        add_header Cache-Tag "images";
        # ... other configuration
    }
    # ... other location blocks
}
```

If you cannot set response headers at the source, you can also use ESA's [Modify Inbound Response Header](/help/en/edge-security-acceleration/esa/user-guide/modify-outbound-response-header) feature to implement the preceding configuration:

1.  In the ESA console, choose [Site Management](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click your target site.
    
2.  In the navigation pane on the left, choose **Rules** > **Transform Rules**.
    
3.  Choose the **Modify Response Header** tab. Under **Origin to ESA**, click **Create Rule**. Then configure the following parameters:
    
    -   **Rule Name**: Enter a custom name, such as `add_header_cache-tag`
        
    -   **Filtered Requests**: Enter `URI path equals /images`
        
    -   **Modify Response Header**: Add `static header Cache-Tag: images`
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8207690771/p1040582.png)
    

## Procedure

1.  In the ESA console, choose [Site Management](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click your target site.
    
2.  In the navigation pane on the left, choose **Caching** > **Purge Cache**.
    
3.  On the **Purge Cache** tab, configure the purge rule and click **Submit**:
    
    -   **Type**: Select **By Tag**.
        
    -   **Purge Method**: Select **Mark as Expired** or **Delete**.
        
        **Method**
        
        **Description**
        
        **Mark as Expired**
        
        If a user requests content that matches a resource to be purged, the ESA node first performs an origin fetch to get the resource's Last-Modified information. If it matches the cached resource, the cached resource is returned. If not, the node pulls the new resource from the origin, returns it to the user, and caches the new resource.
        
        **Delete**
        
        If a user requests content that matches a resource to be purged, the ESA node directly performs an origin fetch to pull the new resource, returns it to the user, and caches the new resource.
        
    -   **Purge Content**: Enter the tag value to purge. Separate multiple values with `,`, such as `images`.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8207690771/p903035.png)
    
4.  After submitting the purge task, you can view detailed records and progress of resource purging on the **Purge Records** tab. The purge task is complete when the progress reaches 100%. The progress varies with the number of objects that you want to purge. The purge task may require some time to complete.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8207690771/p1040623.png)
    

## Cache purge examples

When you update images or page files on an e-commerce website, you need to delete the files and purge the corresponding ESA cache. An e-commerce website may have many cropped versions of an image in different sizes. When you delete an image, enumerating all of its cropped versions is inconvenient. Therefore, you can batch-delete the image files and the corresponding ESA cache by the image name. In addition, when you prepare for a promotional event, you need to continuously iterate on the event page during development. When you publish a new version of the page, you can delete all related files and the corresponding ESA cache by a specified version. Purging cache by tag significantly improves cache management efficiency:

### Purge by image name

**Scenario**

The following three images are cropped versions of the original `dog.jpg`. The origin adds the tag `ESA-Cache-Tag:dog.jpg` to responses for all three:

-   `dog_100_200.jpg`
    
-   `dog_200_200.jpg`
    
-   `dog_300_200.jpg`
    

The following three images are cropped versions of the original `cat.jpg`. The origin adds the tag `ESA-Cache-Tag:cat.jpg` to responses for all three:

-   `cat_100_200.jpg`
    
-   `cat_200_200.jpg`
    
-   `cat_300_200.jpg`
    

Delete the original images and purge all cached variants at the same time.

**Configuration example**

1.  In the ESA console, choose [Site Management](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click your target site.
    
2.  In the navigation pane on the left, choose **Caching** > **Settings**.
    
3.  In the **Cache Tag** section, click the **Configuration** button on the right.
    
4.  Configure the **Tag Name** and the tag value case-insensitive parameter:
    
    -   **Tag Name**: Select **Use Custom Cache Tag Name** and enter the custom tag name `ESA-Cache-Tag`.
        
    -   **Ignore Case**: Enable or disable this setting as needed.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4561290771/p1040387.png)
    
5.  In the navigation pane on the left, choose **Caching** > **Purge Cache**.
    
6.  On the **Purge Cache** tab, configure the purge rule and click **Submit**:
    
    -   **Type**: Select **By Tag**.
        
    -   **Purge Method**: Select **Delete**.
        
    -   **Purge Content**: Enter the tag values to purge: `cat.jpg,dog.jpg`.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4561290771/p1041253.png)
    

### Purge by version number

**Scenario**

The following six images were generated for version v0820. The origin adds the tag `ESA-Cache-Tag:v0820` to responses for all six:

-   `dog_100_200_v0820.jpg`
    
-   `dog_200_200_v0820.jpg`
    
-   `dog_300_200_v0820.jpg`
    
-   `cat_100_200_v0820.jpg`
    
-   `cat_200_200_v0820.jpg`
    
-   `cat_300_200_v0820.jpg`
    

**Configuration example**

1.  In the ESA console, choose [Site Management](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click your target site.
    
2.  In the navigation pane on the left, choose **Caching** > **Settings**.
    
3.  In the **Cache Tag** section, click the **Configuration** button on the right.
    
4.  Configure the **Tag Name** and the tag value case-insensitive parameter:
    
    -   **Tag Name**: Select **Use Custom Cache Tag Name** and enter the custom tag name `ESA-Cache-Tag`.
        
    -   **Ignore Case**: Enable or disable this setting as needed.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4561290771/p1040387.png)
    
5.  In the navigation pane on the left, choose **Caching** > **Purge Cache**.
    
6.  On the **Purge Cache** tab, configure the purge rule and click **Submit**:
    
    -   **Type**: Select **By Tag**.
        
    -   **Purge Method**: Select **Delete**.
        
    -   **Purge Content**: Enter the tag value to purge: `v0820`.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4561290771/p1041255.png)
    

## **Cache tag** **description**

### Cache tag name

-   The default name is `Cache-Tag`.
    
-   A custom cache tag name must be 1 to 64 characters long.
    
-   A custom cache tag name can contain uppercase letters (`A–Z`), lowercase letters (`a–z`), digits (`0–9`), and hyphens (`-`).
    

### Cache tag values

-   Support multiple cache tag values. Separate values with `,`.
    
-   Minimum length is 1 byte.
    
-   No maximum length per value.
    
-   The number of cached tag values is limited to 1000.
    
-   Values must contain only UTF-8 encoded characters.
    
-   CacheTag values are case-sensitive by default. You can configure them to be case-insensitive using [Configure Cache Tags](/help/en/edge-security-acceleration/esa/user-guide/configura-cache-tag#a53d1a00aeb8m).
    

## Availability

**Limit**

**Entrance**

**Pro**

**Premium**

**Enterprise**

Daily quota limit (units: tasks)

Not supported

Not supported

Not supported

2000
