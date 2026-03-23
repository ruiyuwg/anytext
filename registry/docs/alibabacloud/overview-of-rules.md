ESA lets you create custom conditions that combine various feature configurations to control when they take effect.

You can use the rules feature to apply special configurations for specific business needs, such as request transformation, content redirection, or cache policy setup. This feature also enables fine-grained management for security protection and traffic control. The rules feature uses consistent syntax and configuration logic to filter requests based on specific characteristics and apply the corresponding feature configuration.

## **Simple configuration examples**

### **Set edge cache time for resources under a specific path**

For example, static resources under the `/content` path are updated monthly. To balance resource persistence and freshness, you can set the cache time for resources under the `/content` path on ESA points of presence (POPs) to 30 days.

1.  Configure the request filter condition using one of the following methods:
    
    -   Use console controls: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5001872471/p907959.png)
        
    -   Use the expression editor:
        
        > (http.request.uri.path eq "/content")
        
2.  Configure the edge cache time: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5001872471/p907980.png)
    

### **Set a redirect rule for specific requests**

For example, you can redirect requests from the Chinese mainland from `example.com` to `example.com.cn`.

1.  Configure the request filter condition using one of the following methods:
    
    -   Use console controls: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5001872471/p908109.png)
        
    -   Use the expression editor:
        
        > (http.host eq "example.com" and ip.geoip.country eq "CN")
        
2.  Configure the redirect destination URL: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5001872471/p908112.png)
    

## **Rule configuration structure**

When a request reaches an ESA node, ESA filters and processes the request according to your rule configuration.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2640023771/CAEQUBiBgIDag66u2BkiIGUzNzRmNGMxYTIyZjQwZDhiNjEyZjUyYzAzZTI2ZmVh4852698_20250126102821.729.svg)

Every ESA rule configuration includes two parts:

> Rule configuration = Rule expression + Action

You can configure a [rule expression](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/#47236b05f6v8n) to filter requests and an [action](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/#bc16433a7a0c2) to execute operations on matched requests. The rule expression syntax is consistent for all rule-related configurations in ESA. This lets you reuse a rule configuration method from one feature in other features. For more information about how to create and deploy rules, see [Rule expression structure](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).

## **Rule Precedence**

-   **Rule configurations take precedence over global settings**: For the same feature, settings defined in a rule override global settings. This lets you apply general configurations broadly while using rules to customize behavior for specific requests.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2640023771/CAEQUBiBgMCbzrCu2BkiIDQxMjMwNzllNTZmOTQ1NDY4ZWZiNzMzMTk5NGZkNzg34828284_20241231150126.479.svg)
    
    For example, consider the edge time-to-live (TTL): If you configure the **Edge TTL** to 12 hours in [Global Configuration – Edge Cache TTL](/help/en/edge-security-acceleration/esa/user-guide/edge-cache-expiration-time) and configure the TTL for resources under `/content` to 30 days in [Rules – Configure Edge Cache TTL](/help/en/edge-security-acceleration/esa/user-guide/to-configure-the-edge-cache-expiration-time-by-using-rules), the edge node adjusts the cache TTL for that resource to 30 days when the requested resource path is under `/content`. For resources whose request paths are not under `/content`, the edge node uses the global TTL of 12 hours.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2640023771/CAEQUBiBgIDLtLKu2BkiIGE0NmY1ZGYyYzlkYTRhYjQ4YTkxMGQ0M2I3MTczY2M44852698_20250121175900.286.svg)
-   **Rules higher in the list have higher priority**: For the same rule type, ESA executes rules from top to bottom. If a request matches multiple rules, you can drag the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5001872471/p911118.png) button to move the rule that you want to prioritize higher in the list.
    
    **Note**
    
    Different plans support different features and numbers of rules. For more information about rule quotas by plan type, see [Rule and plan quotas](/help/en/edge-security-acceleration/esa/product-overview/package-function-comparison#15576871395wp).
    
    Take cache rules as an example. Suppose you have these two rules:
    
    > Rule 1: Resources under the `/content` path expire after 30 days.
    
    > Rule 2: Files with the `.jpg` suffix are cached for 60 days.
    
    -   In the following figure, Rule 1 appears above Rule 2.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5001872471/p898036.png)
        
        The cache expiration times on edge nodes are:
        
        **Sample URL**
        
        **Under** `**/content**` **path**
        
        `**.jpg**` **suffix**
        
        **Cache expiration time**
        
        https://example.com/content/static/pic.jpg
        
        ![p442272.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0702902961/p705265.png)
        
        ![p442272.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0702902961/p705265.png)
        
        30 days
        
        https://example.com/content/static/book.txt
        
        ![p442272.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0702902961/p705265.png)
        
        ×
        
        30 days
        
        https://example.com/static/pic.jpg
        
        ×
        
        ![p442272.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0702902961/p705265.png)
        
        60 days
        
        https://example.com/static/res/book.text
        
        ×
        
        ×
        
        Do not cache
        
    -   In the following figure, Rule 2 appears above Rule 1.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5001872471/p910963.png)
        
        The cache expiration times on edge nodes are:
        
        **Sample URI**
        
        **Under** `**/content**` **path**
        
        `**.jpg**` **suffix**
        
        **Cache expiration time**
        
        https://example.com/content/static/pic.jpg
        
        ![p442272.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0702902961/p705265.png)
        
        ![p442272.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0702902961/p705265.png)
        
        60 days
        
        https://example.com/content/static/book.txt
        
        ![p442272.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0702902961/p705265.png)
        
        ×
        
        30 days
        
        https://example.com/static/pic.jpg
        
        ×
        
        ![p442272.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0702902961/p705265.png)
        
        60 days
        
        https://example.com/static/res/book.text
        
        ×
        
        ×
        
        Do not cache
        
    

## **Feature availability by plan**

**Category**

**Feature**

**Entrance (0 USD/month)**

**Pro (15 USD/month)**

**Premium (249 USD/month)**

**Enterprise (Contact sales for custom pricing)**

[Quick Start](/help/en/edge-security-acceleration/esa/user-guide/10-minutes-to-play-with-the-esa-rules-engine)

Number of Nested Sub-conditions in a Rule

10

10

20

20

Operator - Regular Expression

Not supported

Not supported

Supported

Supported

[HTTPS Rules](/help/en/edge-security-acceleration/esa/user-guide/basic-https-configuration/)

[SSL/TLS Rules](/help/en/edge-security-acceleration/esa/user-guide/ssl-tls-rules), [HTTPS Rules](/help/en/edge-security-acceleration/esa/user-guide/https-application-configuration) (Shared Quota)

10

25

50

125

[Security Rules](/help/en/edge-security-acceleration/esa/user-guide/security-rules)

5

25

50

125

[Transform Rules](/help/en/edge-security-acceleration/esa/user-guide/conversion-rules-overview/)

[Rewrite URL](/help/en/edge-security-acceleration/esa/user-guide/rewrite-url), [Modify Outgoing Request Header](/help/en/edge-security-acceleration/esa/user-guide/modify-outgoing-request-header), [Modify Outgoing Response Header](/help/en/edge-security-acceleration/esa/user-guide/modify-outgoing-response-header)

10

25

50

125

[Managed Transform - True-Client-IP Header](/help/en/edge-security-acceleration/esa/user-guide/managed-conversion#e80d14d3c4z4w)

Supported

Supported

Supported

Supported

[Managed Transform - Client Geolocation Header](/help/en/edge-security-acceleration/esa/user-guide/managed-conversion#d16f128defgb0)

Supported

Supported

Supported

Supported

[Redirect Rules](/help/en/edge-security-acceleration/esa/user-guide/redirection-rules)

URL Redirection

10

25

50

125

[Cache rules](/help/en/edge-security-acceleration/esa/user-guide/cache-rules/)

[Cache Eligibility](/help/en/edge-security-acceleration/esa/user-guide/cache-bypass), [Browser Cache TTL](/help/en/edge-security-acceleration/esa/user-guide/use-rules-to-configure-browser-cache-expiration), [Edge Cache TTL](/help/en/edge-security-acceleration/esa/user-guide/to-configure-the-edge-cache-expiration-time-by-using-rules), [Status Code Cache TTL](/help/en/edge-security-acceleration/esa/user-guide/configure-the-status-code-cache-expiration-time), [Custom Cachekey](/help/en/edge-security-acceleration/esa/user-guide/custom-cachekey)

10

25

50

125

[Custom Port Caching](/help/en/edge-security-acceleration/esa/user-guide/custom-port-cache)

Not supported

Not supported

Not supported

Supported

[Cache on Expired Response](/help/en/edge-security-acceleration/esa/user-guide/configure-response-expiration-cache-1)

Supported

Supported

Supported

Supported

[Cache Reserve](/help/en/edge-security-acceleration/esa/user-guide/configuring-cache-retention-using-rules)

Supported

Supported

Supported

Supported

[Network Optimization Rules](/help/en/edge-security-acceleration/esa/user-guide/network-optimization-rules)

10

25

50

100 entries

[Content Optimization Rules](/help/en/edge-security-acceleration/esa/user-guide/content-optimization-rules/)

[File Compression](/help/en/edge-security-acceleration/esa/user-guide/file-compression), [Image Optimization](/help/en/edge-security-acceleration/esa/user-guide/image-optimization), [Video Processing](/help/en/edge-security-acceleration/esa/video-processing) (Shared Quota)

10

25

50

100 entries

[Origin Rules](/help/en/edge-security-acceleration/esa/user-guide/back-to-source-rule-overview/)

Number of Rules

10

25

50

125 entries

[Custom Origin Host](/help/en/edge-security-acceleration/esa/user-guide/origin-fetch-host)

Supported

Supported

Supported

Supported

[Origin Protocol and Port](/help/en/edge-security-acceleration/esa/user-guide/back-to-source-protocols-and-ports-1)

Supported

Supported

Supported

Supported

[Origin SNI](/help/en/edge-security-acceleration/esa/user-guide/back-to-source-sni)

Supported

Supported

Supported

Supported

[DNS Records](/help/en/edge-security-acceleration/esa/user-guide/dns-record)

Supported

Supported

Supported

Supported

[Byte-range Segment](/help/en/edge-security-acceleration/esa/user-guide/range-requests)

Supported

Supported

Supported

Supported

[Origin HTTP Request Timeout](/help/en/edge-security-acceleration/esa/user-guide/configuring-the-back-to-origin-request-timeout-period)

Supported

Supported

Supported

Supported

[Configure Origin 301/302 Redirect Following](/help/en/edge-security-acceleration/esa/user-guide/pop-handles-301-or-302-redirects)

Supported

Supported

Supported

Supported
