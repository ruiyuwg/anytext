OSS lets you map your custom domain name to a bucket, access point, or Object FC Access Point to access OSS resources instead of using the default endpoint. After mapping, you can use the custom domain name to preview files online, improve brand consistency, and flexibly configure features such as HTTPS certificates and CDN acceleration.

**Important**

Effective 00:00:00 on March 20, 2025 (UTC+8), new OSS users will be blocked from accessing data APIs for buckets in Chinese mainland regions via default public endpoints (such as `oss-cn-hangzhou.aliyuncs.com`). Such requests will be rejected with the `PublicEndpointForbidden` error (HTTP status code 400, EC 0048-00000401). To continue calling these APIs over the public network, **you must use a custom domain name**. For more information, see [the Upgrade Notice](https://www.alibabacloud.com/notice/detail?_p_lc=1&spm=a3c0i.35801494.J_TlTAa0s_LXHOq4tuiO-gv.7.3b627c5bzXVmmH&id=1114).

## How it works

Mapping a custom domain name to OSS works using a CNAME (Canonical Name) record in DNS. By pointing your custom domain name to the default domain name provided by OSS, the DNS system resolves requests for your custom domain name to the corresponding OSS endpoint, which provides access to your OSS resources.

The configuration process involves three steps: **map the domain name, configure the CNAME record, and verify access**. OSS supports mapping a custom domain name to the following four types of endpoints. Choose one based on your business needs:

**Scenario**

**Attachment Method**

**Description**

Host static resources and preview files online

Map to a public endpoint

The most common method that meets basic file access needs

Accelerate cross-border or long-distance transfers

Attach to an acceleration endpoint

Requires you to first enable the [transfer acceleration](/help/en/oss/user-guide/transfer-acceleration) feature

## **Enable access over a custom domain name**

**Important**

Ensure that you have a registered domain name or [register a new one](https://wanwang.aliyun.com/domain). If the bucket is in the Chinese mainland, the mapped domain name must have an [ICP filing](https://beian.aliyun.com/).

### **Step 1: Map a custom domain name**

1.  Go to the [Bucket list](https://oss.console.alibabacloud.com/bucket) page, click the name of the target bucket, and in the navigation pane on the left, click **Bucket Settings** > **Domain Names**. Then, click **Map Custom Domain Name**.
    
2.  Enter the domain name that you want to map. The system automatically checks whether the domain name meets the mapping requirements. If the domain name belongs to the current Alibaba Cloud account, you can click **Confirm** to complete the mapping . If the domain name belongs to another Alibaba Cloud account or is managed by a different domain name service provider, you must verify domain ownership. The following steps use a domain name purchased from Alibaba Cloud as an example:
    
    1.  Log on to the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/authoritative) with the Alibaba Cloud account that owns the domain name. Find the target domain name and click **Settings** in the Actions column.
        
    2.  Click **Add Record**. Fill in the record information as specified in the following list. Keep the default settings for all other configuration items.
        
        -   **Record Type**: Select **TXT**.
            
        -   **Hostname**: Enter only the prefix of the host record, such as `_dnsauth`. If you are mapping a subdomain, such as `image.example.com`, you must also add the subdomain prefix. For example, enter `_dnsauth.image`.
            
        -   **Record Value**: Enter the record value displayed in the OSS console.
            
    3.  Click **OK**. If the **Change Resource Record Confirmation** window appears, click **OK** again.
        
    4.  Return to the OSS console and click **Verify Domain Name Ownership** to map the domain name to the bucket.
        

**Note**

The DNS record may take some time to take effect after it is added. If an error is reported on the page, wait a few minutes and try again. The TXT record is used to verify the ownership of the domain name. You can delete the record after the verification is successful. The deletion does not affect subsequent use.

### **Step 2: Configure a CNAME record**

After you map the domain name, the custom domain name is not yet active. You must configure a CNAME record to point the custom domain name to an OSS endpoint.

**Important**

You must complete Step 1 to map the domain name before you configure the CNAME record. Otherwise, OSS cannot correctly identify the bucket when you access OSS using the custom domain name, and unexpected content is returned. After you unmap the domain name, delete the CNAME record promptly.

If the domain name belongs to the current Alibaba Cloud account, you can select **Automatically Add CNAME Record** in the console. The system automatically completes the CNAME configuration . In other cases, you must manually configure the record. The following steps use a domain name purchased from Alibaba Cloud as an example:

**Note**

If a message indicates that the CNAME record cannot be added automatically because a record with the same hostname already exists, log on to the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/authoritative) to check whether the CNAME record is still in use. If the record is no longer in use, you can delete it and add the record again.

1.  Log on to the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/authoritative) with the Alibaba Cloud account that owns the domain name. Find the target domain name and click **Settings** in the Actions column.
    
2.  Click **Add Record**. Fill in the record information as specified in the following list. Keep the default settings for all other configuration items.
    
    -   **Record Type**: Select **CNAME**.
        
    -   **Hostname**: If you are mapping a root domain, enter `@`. If you are mapping a subdomain, such as `image.example.com`, enter the subdomain prefix. For example, enter `image`.
        
        **Note**
        
        If an A record with the same name already exists, you must delete the A record before you add the CNAME record. The two types of records cannot coexist for the same hostname. If the A record is in use (for example, pointing to an ECS instance or WAF), we recommend that you use a new subdomain to map to OSS to avoid affecting existing services.
        
    -   **Record Value**: Enter the destination domain name based on your business scenario.
        
        **Scenario**
        
        **Record Value**
        
        Public access
        
        CNAME (recommended, such as `example-bucket.<region-id>.taihangcda.cn`) or public endpoint
        
        Transfer acceleration access
        
        Acceleration endpoint, such as `example-bucket.oss-accelerate.aliyuncs.com`
        
3.  Click **OK**. If the **Change Resource Record Confirmation** window appears, click **OK** again.
    

**Note**

The time it takes for a DNS record to take effect depends on its TTL (Time to Live) setting. It can take from several minutes to several hours for the change to propagate globally. It is normal if the domain is not accessible immediately after configuration. Please wait or try clearing your local DNS cache. You can run the `dig example.com CNAME +short` command to check the CNAME record's target and status.

### **Step 3: Verify access using the custom domain name**

After you map the domain name and configure the CNAME record, verify that the custom domain name is active using the following methods.

## Public-read and public-read-write buckets

Access the object directly using its URL in a browser. For example, `http://image.example.com/example.jpg` accesses the object `example.jpg` in the root directory of the bucket.

## Private buckets

When you access a private bucket, the access URL must include a signature. The following steps show how to obtain a presigned URL for an object from the console. For more information about signatures and how to generate them, see [Signature Version 4 (recommended)](/help/en/oss/developer-reference/add-signatures-to-urls).

1.  Go to the [Bucket list](https://oss.console.alibabacloud.com/bucket) page and click the target bucket.
    
2.  In the Actions column of the target object that you want to access, click **Details**.
    
3.  Set Domain to **Custom Domain**, select the mapped custom domain name, and then click **Copy Object URL**.
    
4.  Access the modified URL in a browser.
    

## Use in a production environment

### Best practices

-   **Secure transfer: Enable HTTPS**
    
    [Configure an SSL certificate](/help/en/oss/user-guide/access-oss-by-https-protocol#section-evp-h0m-z2e) for your custom domain name to enforce HTTPS access. The HTTPS protocol uses TLS/SSL to encrypt data in transit, which prevents data from being intercepted or tampered with. This also prevents browsers from displaying "Not Secure" warnings and enhances user trust and brand image.
    
-   **Cross-origin access: Configure CORS rules**
    
    When a front-end application, such as one deployed at `https://web.example.com`, needs to access OSS resources at a different domain, such as `https://oss.example.com`, you must [configure CORS rules](/help/en/oss/user-guide/cors-settings). These rules allow cross-origin requests from the application's domain and ensure that your front-end application can access OSS resources.
    
-   **Smooth go-live: Switch domains with zero downtime**
    
    When you need to switch from a bucket endpoint to a mapped custom domain name, use the following phased strategy to avoid service interruptions:
    
    1.  **Preparation phase**: Complete the domain name mapping and CNAME configuration. Verify the functionality and performance in a staging environment.
        
    2.  **Canary release phase (Recommended during off-peak hours):** Gradually switch a portion of your traffic to the custom domain name.
        
    3.  **Verification phase**: Monitor access logs and error rates to confirm that the service is running as expected.
        
    4.  **Full release phase**: Switch all traffic to the custom domain name to complete the migration.
        
    5.  **Rollback playbook**: If any issues occur, immediately roll back to the bucket endpoint, analyze the root cause, and redeploy.
        
-   **Performance and security: Isolate usage with subdomains**
    
    Assign different subdomains for different business purposes, such as `static.example.com` for static web resources and `images.example.com` for image resources. This domain isolation strategy helps optimize browser concurrent connections, configure independent cache policies, and implement fine-grained access control.
    
-   **Feature extension: Host a static website**
    
    To host a complete static website (including HTML, CSS, and JS files) on OSS, configure [static website hosting](/help/en/oss/user-guide/hosting-static-websites) after you map your custom domain name. This enables basic website functionalities such as a default index page and a 404 error page.
    
-   **Performance optimization: Configure CDN acceleration**
    
    For use cases that require distributing static resources to users worldwide, we recommend that you configure the [CDN](/help/en/oss/user-guide/cdn-acceleration) service. This caches content on globally distributed edge nodes, resulting in lower access latency and a better user experience.
    

### Risk prevention

-   **Hotlink protection: Configure Referer-based hotlink protection**
    
    To prevent other websites from using your resources, such as images and videos, and incurring unnecessary traffic costs and bandwidth consumption, [configure Referer-based hotlink protection](/help/en/oss/user-guide/hotlink-protection). Using a whitelist to restrict access sources, you can effectively control costs and protect resources from abuse.
    
-   **Behavioral audit and troubleshooting: Enable access logs**
    
    Enable [real-time log query](/help/en/oss/user-guide/real-time-log-query/) for OSS to record detailed information about all access requests, including access time, source IP, request type, and response status. This facilitates security audits, performance analysis, and troubleshooting.
    

## Quotas and limits

-   **Mapping limit**: A maximum of 100 custom domain names can be mapped to each bucket.
    
-   **Domain uniqueness**: A custom domain name can be mapped to only one bucket at a time. To change the mapping, you must first unmap the domain from the original bucket to ensure a unique destination and a clear access path.
    
    **Note**
    
    For some users of the legacy image processing feature, domains already used for image processing cannot be mapped to a bucket. The new image processing feature does not have this limitation.
    
-   **Domain name types**: Mapping Chinese domain names and wildcard domains, such as `*.example.com`, is not supported. This ensures the stability and compatibility of DNS resolution.
    
    **Note**
    
    When you accelerate OSS access using CDN, you can map a wildcard domain, but the domain will not be displayed in the OSS console.
    

## FAQ

### How do I control whether a file is previewed or downloaded when accessed through a custom domain name?

The `Content-Disposition` HTTP response header determines whether a file is previewed or downloaded. When you access a file using the default domain name provided by OSS, OSS forces the addition of the `Content-Disposition: attachment` header for security. However, **when you access a file through a custom domain name, OSS does not add this header**, which makes the behavior controllable.

-   **To enable preview**: Access the file using a custom domain name, and ensure that the `Content-Disposition: attachment` header is **not** set in the object's metadata and that the object's `Content-Type` (MIME type) correctly matches the file format. For file formats that are not natively supported by browsers, extend preview capabilities in the following ways:
    
    -   For office files such as .doc, .ppt, and .pdf files, integrate the [WebOffice online preview](/help/en/oss/user-guide/online-object-preview) service.
        
    -   For special video formats such as .mov, use the [video transcoding](/help/en/oss/user-guide/video-transcoding) service to convert them to a web-compatible format for preview.
        
    -   Install a browser plug-in for the corresponding file type.
        
-   **To force download**: Manually set the object's `Content-Disposition` metadata to `attachment`. The browser will then skip the preview attempt and directly download the file.
    
    **Note**
    
    The `<video>` or `<audio>` HTML tags will prioritize playing the media and may ignore the `attachment` download directive.
    

### What should I do if the domain mapping fails with a message that the domain is already mapped to another bucket?

If a domain is already mapped to another bucket, use one of the following solutions:

-   Use a new subdomain for your current business. If the domain `example.com` is already mapped to another bucket, use a new subdomain like `image.example.com` for the mapping. This lets you isolate services at the domain level.
    
-   Unmap the domain from the original bucket and then map it to the target bucket. Follow these steps to unmap a domain:
    
    1.  If you have enabled CDN acceleration, you must first modify the origin server information in the CDN service so that the accelerated domain name no longer points to the OSS bucket endpoint. This prevents CDN back-to-origin failures. For instructions, see [Configure an origin server](/help/en/cdn/user-guide/configure-an-origin-server).
        
    2.  Go to the [Bucket list](https://oss.console.alibabacloud.com/bucket) page, click the name of the bucket that the domain is currently mapped to, and in the navigation pane on the left, click **Bucket Settings** > **Domain Names**.
        
    3.  In the domain list, find the target domain and click **Unbind** in the Actions column. In the dialog box that appears, click **OK** to unmap the domain.
        

### What should I do if I receive a NeedVerifyDomainOwnership error when I map a domain name using an API?

This error indicates that you have not verified ownership of the domain. You can resolve this issue by performing the following steps:

1.  Call the [CreateCnameToken](/help/en/oss/developer-reference/createcnametoken#reference-2210351) operation to create the `CnameToken` required for domain ownership verification.
    
    **Note**
    
    By default, a `CnameToken` expires 72 hours after it is created. If you attempt to create a token again before it expires, the existing `CnameToken` is returned.
    
2.  Configure a TXT record with your domain name service provider to complete domain ownership verification.
    
3.  Call the [PutCname](/help/en/oss/developer-reference/putcname#reference-2210550) operation to map the custom domain name.
    

### Why is the custom domain name not working or still pointing to an old address after configuration?

This is likely due to DNS caching delays on your local machine and at your carrier. To improve resolution efficiency, DNS nodes at various levels cache domain resolution results for a period determined by the TTL value. After you change a CNAME record, outdated caches may continue to direct requests to the old address until the TTL expires. We recommend that you wait 10 minutes and try again, or manually clear your local DNS cache:

## **Windows**

```
ipconfig /flushdns
```

## **macOS**

```
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

## **Linux**

```
sudo systemd-resolve --flush-caches
```

### What should I do if a conflict with an existing A record is reported when I add a CNAME record?

According to DNS protocol specifications, a CNAME record cannot coexist with an A record for the same hostname. If your domain name already has an A record that points to another service (such as ECS or WAF), you have two solutions:

-   Use a new subdomain to map to OSS. For example, if the root domain `example.com` already has an A record, you can use `oss.example.com` to map to OSS. The two will not interfere with each other.
    
-   If you must use the current domain name, you need to delete the A record before you add the CNAME record. Before you delete the A record, confirm that no services depend on it. Otherwise, the original services may be interrupted.
    

### Why does access fail when "Domain B is CNAME'd to Domain A, and Domain A is mapped to OSS"?

OSS strictly validates the `Host` field in HTTP request headers and requires it to exactly match the domain name actually attached to the bucket. When you access domain B, the `Host` header contains `domain B`, which does not match the attached domain name and causes the validation to fail. Therefore, you must directly attach the domain name used for public network access to the bucket instead of implementing it through CNAME forwarding between domain names.

### After I map a custom domain name, can I still use the old file URLs?

Yes. Mapping a custom domain name does not affect access through the default domain name provided by OSS. Both methods can coexist. To get the old file URLs, see [Use a presigned URL to download or preview a file](/help/en/oss/user-guide/how-to-obtain-the-url-of-a-single-object-or-the-urls-of-multiple-objects).

### After a custom domain name is mapped to an OSS bucket, can it only be accessed via a public endpoint? Can it be mapped to an internal endpoint?

A custom domain name mapped to an OSS bucket is exclusively for public network access and cannot be used for internal network access.

The custom domain name feature in OSS operates by creating a CNAME record with your DNS service provider. This record maps your domain to the public endpoint of an OSS bucket (such as `example-bucket.oss-<region-id>.aliyuncs.com`). This mechanism is designed to enable public access to OSS resources via your own domain.

In contrast, internal network access must use an internal endpoint provided by Alibaba Cloud (such as `oss-<region-id>-internal.aliyuncs.com`). This private access is restricted to Alibaba Cloud resources (such as ECS and Function Compute) located within the same region and VPC as the bucket. Because internal endpoints are not resolvable by public DNS and cannot be the target of a CNAME record, a custom domain name cannot be used for internal network access.

### When I use a custom domain name, why are my HTTP requests for resource files being forcibly redirected to HTTPS?

This happens because the force redirect to HTTPS feature is enabled for your custom domain name. This setting automatically redirects all incoming HTTP requests to their HTTPS equivalent.

While OSS itself does not support forced redirection, this behavior is enabled at the CDN level. When you use CDN with your custom domain name and an HTTPS certificate, you can activate the force redirect (HTTP → HTTPS) option in the CDN HTTPS settings. This instructs the CDN to return a 301/302 response to any HTTP request, prompting the browser to resend the request over HTTPS.

If you want to allow HTTP access to resource files, go to the CDN console, find the relevant domain name, and change the **Redirect Type** to **Default** (which supports both HTTP and HTTPS). For more information, see [Configure protocol redirection](/help/en/cdn/user-guide/configure-url-redirection).

## **References**

-   [Access OSS over HTTPS](/help/en/oss/user-guide/access-oss-by-https-protocol)
    
-   [Accelerate access to OSS using CDN](/help/en/oss/user-guide/cdn-acceleration)
    
-   [Accelerate access to OSS using Transfer Acceleration](/help/en/oss/user-guide/transfer-acceleration)
    
-   [Static website hosting](/help/en/oss/user-guide/hosting-static-websites)
    
-   [Access points](/help/en/oss/user-guide/access-point/)
    
-   [Object FC Access Points](/help/en/oss/user-guide/object-fc-access-point-management/)
    
-   [CreateCnameToken](/help/en/oss/developer-reference/createcnametoken)
    
-   [GetCnameToken](/help/en/oss/developer-reference/getcnametoken)
    
-   [PutCname](/help/en/oss/developer-reference/putcname)
    
-   [ListCname](/help/en/oss/developer-reference/listcname)
    
-   [DeleteCname](/help/en/oss/developer-reference/deletecname)
