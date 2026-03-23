Referer-based hotlink protection refers to access control based on the Referer header. You can configure a Referer whitelist or blacklist to control access, protecting your resources from unauthorized access. After you configure a Referer whitelist or blacklist, DCDN allows or rejects requests based on the Referer header.

**Important**

-   By default, Referer-based hotlink protection is **not enabled** in DCDN. This means that all websites can access your resources.
    
-   Referer-based hotlink protection is a method to prevent data transmission abuse. For more information about protection methods, see [Prevent data transmission abuse](/help/en/cdn/use-cases/best-practices-for-preventing-traffic-theft).
    
-   After you add a domain name to the Referer whitelist or blacklist, the wildcard domain name that matches the domain name is automatically added to the whitelist or blacklist. For example, if you add `aliyundoc.com` to the Referer whitelist or blacklist, hotlink protection takes effect for all domain names that match `*.aliyundoc.com`.
    

## **Scenarios**

A Referer whitelist or blacklist is suitable for the following scenarios:

-   **Copyright protection:** To safeguard copyrighted content on your website, you can use a Referer whitelist or blacklist to allow only authorized websites to access the content.
    
-   **Hotlink protection:** Referer whitelists or blacklists can prevent your resources from being used by other websites.
    
-   **Enhanced website security:** Only domain names that are included in the Referer whitelist are allowed to access your website resources. This prevents malicious hotlinking or theft of sensitive information.
    
-   **Traffic source management:** You can manage the domains that are authorized to use your resources. This ensures the security and stability of your website.
    

You can use the hotlink protection feature in different scenarios to protect your website assets, manage traffic, and improve website security.

## How it works

The server checks the Referer field of each request and rejects a request if the Referer field in the request does not match the pre-configured whitelist. This helps save bandwidth and server resources. Referer rules in DCDN:

-   If the Referer header in the request is included in the Referer blacklist or is not included in the Referer whitelist, DCDN rejects the request.
    
-   If the Referer header in the request is included in the Referer whitelist, DCDN allows the request.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2139564371/CAEQJxiBgMDr4ub9hBkiIDRiOWVhZGU0MjI2YTQ4ODRiMmNkYmIwZWI2ZDQ5YzZl4037164_20231017141002.951.svg)

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  In the left-side navigation tree of the domain name, click **Access Control**.
    
5.  On the **Hotlink Protection** tab, turn on **Hotlink Protection**.
    
6.  Select **Blacklist** or **Whitelist** based on your business requirements.
    
    ![配置Refer防盗链](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8695423371/p69428.png)
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    -   **Blacklist**
        
        Requests from domain names in the blacklist cannot access your resources.
        
    -   **Whitelist**
        
        Only requests from domain names in the whitelist can access your resources.
        
    
    **Note**
    
    The blacklist and whitelist are mutually exclusive. You can configure only one type of list at a time.
    
    **Rules**
    
    -   You can add multiple domain names to the Referer whitelist or blacklist. Enter one domain name per line. Do not add a space in front of the domain names.
        
    -   You can use asterisks (\*) as wildcards. For example, if you add `*.developer.aliyundoc.com` to the whitelist or blacklist, `image.developer.aliyundoc.com` and `video.developer.aliyundoc.com` can be matched.
        
    
    **Note**
    
    The content that you enter in the Rules field cannot exceed 60 KB.
    
    **Redirect URL**
    
    If a request is blocked, HTTP status code 302 and the Location header are returned. This parameter is the value of the Location header. The value must start with `http://` or `https://`, such as `http://www.example.com`.
    
    **Advanced Settings**
    
    **Allow resource URL access from browsers.**
    
    By default, the check box is not selected. If you select the check box, requests that contain an empty Referer header are allowed to access DCDN resources, regardless of whether you configure a Referer whitelist or blacklist. An empty Referer header may suggest one of the following scenarios:
    
    -   The Referer header is not included in the requests.
        
    -   The Referer header is included in the requests, but the value is empty.
        
    
    **Exact Match**
    
    The check box is not selected by default. If you select this check box, subdomains cannot be matched. For example, if you add `example.com` to the whitelist or blacklist, only `example.com` is matched.
    
    **Ignore Scheme**
    
    -   If you do not select **Ignore Scheme**, the value of the Referer header must start with http:// or https://.
        
    -   If you select **Ignore Scheme**, the value of the Referer header does not need to start with http:// or https://.
        
    
7.  Click **OK**.
    

## Matching logic

The following table describes the matching logic of the Referer header. If the Referer header in a request does not match the whitelist or matches the blacklist, DCDN rejects the request and returns HTTP status code 403.

**Configured domain name**

**Referer header value in a request**

**Matched**

**Description**

-   www.example.com
    
-   \*.example.com
    

http://www.example.com/img.jpg

Yes

The domain names in the Referer header match the domain names in the Referer whitelist or blacklist.

http://www.example.com:80/img.jpg

Yes

www.example.com

No

The value of the Referer header in the request does not include the HTTP or HTTPS string.

http://aaa.example.com

Yes

The subdomains in the Referer header are covered by the wildcard domain name in the Referer whitelist or blacklist.

http://aaa.bbb.example.com

Yes

http://example.com

No

The domain name in the Referer header does not match the wildcard domain name in the Referer whitelist or blacklist. This is because a wildcard domain matches subdomains but does not cover the root domain.

http://www.example.net

No rules matched

The domain name in the Referer header is not included in the blacklist or whitelist. Therefore, the request is allowed according to the default rule.

## **FAQ**

### **Why is the HTTP or HTTPS string occasionally missing in the Referer header in a request?**

In most cases, the HTTP or HTTPS string is included in the Referer header in a request.

However, in some cases, when a browser navigates a request from a website that does not use HTTPS to a website that uses HTTPS, the browser may present only the domain name in the Referer header. This is to protect sensitive user data based on security policies such as Referrer-Policy.

In addition, some browsers or proxy servers may automatically exclude the Referer string in specific scenarios, such as access in private browsing mode or by using an anonymous proxy.

Therefore, in actual practice, take note of the scenarios in which HTTP or HTTPS is not included in the Referer header when you configure hotlink protection.

### **Why is the Referer header empty in a request? What do I do to resolve the issue?**

In most cases, the Referer header in a request contains the full URI, which includes the protocol, such as `http` or `https`, the hostname, and possibly the path and query string. The Referer header in a request may be empty due to the following reasons:

-   **Direct access**: If a user enters a URL in the address bar of a browser, uses a bookmark, or opens a new blank browser tab, the Referer header is empty because a referring page does not exist.
    
-   **User privacy settings**: Users configure private browsing mode or use privacy-focused extensions to remove the Referer header out of privacy concerns.
    
-   **Security protocol**: If a request is redirected from an HTTPS page to an HTTP page, the browser does not present the Referer header to prevent leakage of sensitive information.
    
-   **Client policy**: For security purposes, some websites or applications may restrict the browser from sending the Referer header by specifying the `<meta>` tag or HTTP headers, such as `Referrer-Policy`.
    
-   **Cross-origin requests**: Specific cross-origin requests may not include the Referer header based on the security policy of the browser.
    

The handling measures vary with different scenarios and security requirements:

-   **Default policy**: If your service does not rely on the Referer header, you can allow requests that have an empty Referer header.
    
-   **Allow access**: For specific URLs or sources, you can select **Allow resource URL access from browsers** to allow only requests from these URLs or sources. This way, POPs allow users to access your resources regardless of whether the Referer header is empty.
