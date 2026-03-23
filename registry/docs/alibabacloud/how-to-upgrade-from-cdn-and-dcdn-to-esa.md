ESA is a new-generation acceleration and security product separate from DCDN. If you use DCDN or CDN and want to upgrade to ESA, deploy your services on ESA and then switch your DNS records to activate them.

## **Differences in billable items between products**

**Billable item**

**ESA**

**CDN**

**DCDN**

Pay-by-data-transfer

Yes. If you have volumetric services or need abuse prevention, purchase the ESA Pro plan.

Yes

Yes

HTTPS requests

Free of charge

> Enterprise.

Yes

Yes

WAF requests

Free of charge

> Enterprise.

Not applicable

Yes

Attack traffic

Set [blocking rules](/help/en/edge-security-acceleration/esa/user-guide/waf-custom-rules). Blocked traffic is not billed.

Yes

Yes

## **Feature comparison**

The features of ESA have been upgraded and redesigned compared to the DCDN or CDN. See the table below to find the mapping of CDN or DCDN features in ESA to help you get started with ESA.

### **Basic configurations**

**Feature**

**Description**

**CDN**

**DCDN**

**ESA**

Modify an acceleration region

Change the acceleration service scope by switching the acceleration region.

[Modify an acceleration region](/help/en/cdn/user-guide/change-the-accelerated-region)

[Switch an acceleration region](/help/en/edge-security-acceleration/dcdn/user-guide/change-the-accelerated-region)

[Switch the acceleration region of a site](/help/en/edge-security-acceleration/esa/support/site-access-related-issues#a855026d3dwwt)

Origin server configuration

Configure origin servers, such as OSS domain names, IP addresses, origin domain names, and Function Compute domain names.

[Configure an origin server](/help/en/edge-security-acceleration/dcdn/user-guide/configure-an-origin-server)

[Configure an origin server](/help/en/edge-security-acceleration/dcdn/user-guide/configure-an-origin-server)

Add [DNS records](/help/en/edge-security-acceleration/esa/user-guide/manage-dns-records-new) to configure different types of origin server information for your site.

IPv6

Enable the IPv6 feature to allow requests on different links to support the IPv6 protocol.

Configure [IPv6 for client requests](/help/en/cdn/user-guide/configure-ipv6).

Configure [IPv6 for client requests](/help/en/edge-security-acceleration/dcdn/user-guide/enable-ipv6).

ESA supports end-to-end [IPv6 access](/help/en/edge-security-acceleration/esa/ipv6-access).

Configure [IPv6 for back-to-origin requests](/help/en/cdn/user-guide/configure-back-to-origin-routing-over-ipv6).

Configure [IPv6 for back-to-origin requests](/help/en/edge-security-acceleration/dcdn/configure-back-to-origin-routing-over-ipv6).

### **Domain name management**

**Feature**

**Description**

**CDN**

**DCDN**

**ESA**

Add, delete, and query domain names

Provides features for adding, deleting, and querying domain names.

[Origin configuration](/help/en/cdn/user-guide/configure-an-origin-server)

[Origin configuration](/help/en/edge-security-acceleration/dcdn/user-guide/configure-an-origin-server)

-   To add a site domain name, see [Get started with ESA](/help/en/doc-detail/2709243.html).
    
-   Manage existing domain names in [Websites](/help/en/edge-security-acceleration/esa/user-guide/site-management).
    

Domain name migration

Migrate domain names across accounts.

[Migrate a CDN domain name across accounts](/help/en/cdn/user-guide/domain-name-transfer)

[Migrate a DCDN domain name across accounts](/help/en/edge-security-acceleration/dcdn/user-guide/migrate-dcdn-domain-names-across-accounts)

You can [add your domain name to ESA](/help/en/doc-detail/2709243.html).

Verify domain name ownership

Verify the ownership of a domain name when you add it.

[Verify the ownership of a domain name](/help/en/cdn/verify-domain-name-ownership)

[Verify the ownership of a domain name](/help/en/edge-security-acceleration/dcdn/getting-started/verify-the-ownership-of-a-domain-name-1)

-   Verification is required when you [add a domain name using the CNAME method](/help/en/doc-detail/2709246.html).
    
-   Verification is required when you [add a domain name using the NS method](/help/en/doc-detail/2709247.html).
    

### **Origin fetch configurations**

**Feature**

**Description**

**CDN**

**DCDN**

**ESA**

Origin HOST

Configure the origin HOST to customize the HOST request header for origin requests.

[Configure a default origin HOST](/help/en/cdn/user-guide/configure-the-default-origin-host)

[Configure a default origin HOST](/help/en/edge-security-acceleration/dcdn/user-guide/configure-the-origin-host)

-   Configure the [origin HOST](/help/en/edge-security-acceleration/esa/user-guide/origin-fetch-host) in the origin rule.
    
-   Configure the origin HOST type when you add a [CNAME record](/help/en/edge-security-acceleration/esa/user-guide/manage-dns-records-new#87a1bd954fu4f) in DNS.
    

[Specify an origin HOST for a specific origin server](/help/en/cdn/user-guide/specify-an-origin-host-for-each-origin)

Origin protocol

Configure the origin protocol to customize the protocol that points of presence (POPs) use to request resources from the origin server.

[Configure the origin protocol](/help/en/cdn/user-guide/configure-the-origin-protocol-policy)

[Configure protocol-follow-origin for static content](/help/en/edge-security-acceleration/dcdn/user-guide/configure-the-static-origin-protocol-policy)

-   Configure the [origin protocol and port](/help/en/edge-security-acceleration/esa/user-guide/back-to-source-protocols-and-ports) in the Origin Certificate section of SSL/TLS.
    
-   Configure the [origin protocol and port](/help/en/edge-security-acceleration/esa/user-guide/back-to-source-protocols-and-ports-1) in the back-to-origin rule.
    

Origin requests to a private Alibaba Cloud OSS bucket

Configure origin requests to a private Alibaba Cloud OSS bucket to access all resources in the bucket.

[Back-to-origin requests to a private OSS bucket](/help/en/cdn/user-guide/grant-alibaba-cloud-cdn-access-permissions-on-private-oss-buckets)

[Back-to-origin requests to a private OSS bucket](/help/en/edge-security-acceleration/dcdn/user-guide/configure-private-bucket-origin)

[Use ESA to accelerate access to OSS resources](/help/en/edge-security-acceleration/esa/user-guide/use-esa-to-accelerate-oss-resource-access)

Origin SNI

If your origin server IP address is bound to multiple domain names and the origin protocol is HTTPS, configure the origin SNI to specify the requested domain name. The origin server returns the SSL certificate of the corresponding domain name based on the configured SNI to ensure successful origin requests.

[Configure origin SNI](/help/en/cdn/user-guide/configure-sni)

[Configure a specific origin SNI](/help/en/edge-security-acceleration/dcdn/user-guide/configure-the-specified-back-to-source-sni)

[Origin SNI](/help/en/edge-security-acceleration/esa/user-guide/back-to-source-sni)

Origin HTTP request timeout

Set an appropriate back-to-origin HTTP request timeout based on your network conditions and the data processing capabilities of your origin server. This ensures that requests can be successfully sent to the origin server.

[Back-to-origin HTTP request timeout](/help/en/cdn/user-guide/configure-a-timeout-period-for-back-to-origin-http-requests)

[Back-to-origin HTTP request timeout](/help/en/edge-security-acceleration/dcdn/user-guide/configure-a-timeout-period-for-back-to-origin-requests)

[Timeout for HTTP requests to origin](/help/en/edge-security-acceleration/esa/user-guide/configuring-the-back-to-origin-request-timeout-period)

Origin HTTP request header

Configure back-to-origin HTTP request headers to modify the HTTP headers in user requests that are sent to the origin server. This meets various business requirements.

[Configure back-to-origin HTTP request headers](/help/en/cdn/user-guide/configure-custom-request-headers)

[Configure custom back-to-origin HTTP request headers](/help/en/edge-security-acceleration/dcdn/user-guide/configure-a-custom-origin-http-header)

Modify request headers using a [transform rule](/help/en/edge-security-acceleration/esa/user-guide/modify-outgoing-request-header).

Origin HTTP response header

Modify back-to-origin HTTP response headers and configure features such as cache policies and cross-origin resource sharing. This optimizes website loading speed, enhances content security, controls resource accessibility, and improves user experience.

[Modify inbound response headers](/help/en/cdn/user-guide/rewrite-http-response-headers)

[Modify inbound response headers](/help/en/edge-security-acceleration/dcdn/configure-origin-http-response-headers)

Modify response headers using a [transform rule](/help/en/edge-security-acceleration/esa/user-guide/modify-outgoing-response-header).

Common Name whitelist

Add the Common Name of a certificate to a whitelist. This allows successful back-to-origin requests even if the SNI and the Common Name do not match.

[Common Name whitelist](/help/en/cdn/user-guide/common-name-whitelist)

[Configure a Common Name whitelist](/help/en/edge-security-acceleration/dcdn/user-guide/configure-a-common-name-whitelist)

Not supported

Advanced origin fetch

Advanced origin lets you route requests to different origin servers based on the request header, query string parameter, path, or request cookie in client requests.

[Advanced origin](/help/en/cdn/user-guide/configure-advanced-origin-settings)

[Advanced origin](/help/en/edge-security-acceleration/dcdn/configure-advanced-origin-settings)

Configure [DNS records](/help/en/edge-security-acceleration/esa/user-guide/dns-record) under different conditions in an origin rule to implement advanced origin.

Follow 301/302 redirects for origin requests

Enable the feature that allows POPs to follow 301/302 redirects. POPs directly process the content of 301/302 responses from the origin server on behalf of users. This reduces data interactions and speeds up resource retrieval.

[Configure the feature that allows POPs to follow 301/302 redirects](/help/en/cdn/user-guide/configure-301-or-302-redirection)

[Configure the feature that allows POPs to follow 301/302 redirects](/help/en/edge-security-acceleration/dcdn/configure-301-or-302-redirection)

[Configure the feature that allows POPs to follow 301/302 redirects](/help/en/edge-security-acceleration/esa/user-guide/pop-handles-301-or-302-redirects)

Rewrite origin URL

Configure an origin URL to rewrite the URL that an POP uses to send a back-to-origin request to the origin server.

[Rewrite a back-to-origin URL](/help/en/cdn/user-guide/rewrite-urls-in-back-to-origin-requests)

[Rewrite a back-to-origin URI](/help/en/edge-security-acceleration/dcdn/origin-uri-rewrite)

Rewrite a URL using a [transform rule](/help/en/edge-security-acceleration/esa/user-guide/rewrite-url).

Rewrite origin parameters

Rewrite origin parameters to modify the parameters in a back-to-origin request URL. You can ignore all parameters, add parameters, delete parameters, retain parameters, or modify parameters.

[Rewrite back-to-origin parameters](/help/en/cdn/user-guide/rewrite-url-parameters-in-back-to-origin-requests)

[Rewrite back-to-origin parameters](/help/en/edge-security-acceleration/dcdn/rewrite-url-parameters-in-back-to-origin-requests)

Origin group

Define multiple origin groups. Each origin group can contain multiple primary and secondary origin server addresses.

[Configure an origin server](/help/en/cdn/user-guide/configure-an-origin-server)

[Configure an origin server](/help/en/edge-security-acceleration/dcdn/user-guide/configure-an-origin-server)

[Configure an origin group](/help/en/edge-security-acceleration/esa/user-guide/source-address-pool)

Conditional origin

Configure a conditional origin to specify rule conditions to filter user requests. Requests that meet the rule conditions are redirected to the specified origin server address.

[Configure a conditional origin](/help/en/cdn/user-guide/configure-a-conditional-origin)

None

Configure [DNS records](/help/en/edge-security-acceleration/esa/user-guide/dns-record) under different conditions in a back-to-origin rule to implement conditional origin.

### **Cache configurations**

**Feature**

**Description**

**CDN**

**DCDN**

**ESA**

Cache TTL

Configure the duration for which origin resources are cached on POPs based on your requirements. This ensures that users can access the latest resources.

[Configure a cache TTL for CDN](/help/en/cdn/user-guide/configure-the-cdn-cache-expiration-time)

[Configure a cache TTL](/help/en/edge-security-acceleration/dcdn/user-guide/add-a-cache-rule-for-resources)

-   Configure a global [edge cache TTL](/help/en/edge-security-acceleration/esa/user-guide/edge-cache-expiration-time).
    
-   Configure an [edge cache TTL](/help/en/edge-security-acceleration/esa/user-guide/to-configure-the-edge-cache-expiration-time-by-using-rules) using a cache rule.
    

Status code TTL

Configure a TTL for response status codes. If a client requests the same resource again, the system directly returns the response. This reduces the load on the server. After the TTL expires, the client must access the server again.

[Configure a status code TTL](/help/en/cdn/user-guide/create-a-cache-rule-for-http-status-codes)

[Configure a status code TTL](/help/en/edge-security-acceleration/dcdn/user-guide/create-a-cache-rule-for-http-status-codes)

[Configure a cache TTL for HTTP status codes](/help/en/edge-security-acceleration/esa/user-guide/configure-the-status-code-cache-expiration-time)

Set HTTP response headers

Configure HTTP response headers. The system can return specified responses when users request resources. This lets you control features such as caching behavior and cross-domain access.

[Modify outbound response headers](/help/en/cdn/user-guide/create-a-custom-http-response-header)

[Modify outbound response headers](/help/en/edge-security-acceleration/dcdn/user-guide/configure-a-custom-http-response-header)

Configure a transform rule to [modify outbound response headers](/help/en/edge-security-acceleration/esa/user-guide/modify-outgoing-response-header).

Custom error page

After you configure a custom error page, POPs return the custom error page instead of the default one when the requested content does not exist or an error occurs. Custom error pages improve user experience by providing more user-friendly error messages.

[Configure a custom page](/help/en/cdn/user-guide/create-a-custom-error-page)

[Configure a custom page](/help/en/edge-security-acceleration/dcdn/user-guide/create-a-custom-error-page)

Implement this feature by [adding a custom edge function](/help/en/edge-security-acceleration/esa/user-guide/create-an-app-from-template).

Request URL rewrite

If the storage path of origin resources changes, the path where POPs store the resources also changes. If the path in the user request URL remains unchanged, you can rewrite the request URL to redirect it to the target path. This reduces back-to-origin requests and improves client access performance.

[Configure an access URL rewrite rule](/help/en/cdn/user-guide/create-an-access-url-rewrite-rule)

[Configure a URI rewrite rule](/help/en/edge-security-acceleration/dcdn/user-guide/create-a-uri-rewrite-rule)

Configure a [redirection rule](/help/en/edge-security-acceleration/esa/user-guide/redirection-rules).

Custom CacheKey

Configure a custom CacheKey to map different but similar requests to the same CacheKey. This helps improve the cache hit ratio, reduce the back-to-origin ratio, and decrease response time and bandwidth consumption.

[Custom CacheKey](/help/en/cdn/user-guide/create-custom-cache-keys)

[Custom CacheKey](/help/en/edge-security-acceleration/dcdn/user-guide/create-custom-cache-keys)

[Custom CacheKey](/help/en/edge-security-acceleration/esa/user-guide/custom-cachekey)

Shared cache/Merged origin requests

Shared cache allows multiple domain names under the same account to share cached resources. This allows them to share the same public resources, reduce bandwidth usage, improve the hit ratio, and decrease server access traffic.

[Configure shared cache](/help/en/cdn/user-guide/configure-shared-cache)

None

None

### **HTTPS configurations**

**Feature**

**Description**

**CDN**

**DCDN**

**ESA**

HTTPS certificate

Deploy a certificate on the platform and enable the service to encrypt requests between clients and POPs.

[Configure an HTTPS certificate](/help/en/cdn/user-guide/configure-an-ssl-certificate)

[Configure an HTTPS certificate](/help/en/edge-security-acceleration/dcdn/user-guide/configure-an-ssl-certificate)

[Configure an edge certificate](/help/en/edge-security-acceleration/esa/user-guide/configure-edge-certificates/)

HTTP/2 settings

HTTP/2 is the new version of the protocol after HTTP/1.1. It has features such as binary framing, multiplexing, and header compression, which can significantly improve web performance and reduce data interaction latency.

[Configure HTTP/2](/help/en/cdn/user-guide/enable-http-or-2)

[Configure HTTP/2](/help/en/edge-security-acceleration/dcdn/user-guide/enable-http-or-2)

[Enable HTTP/2](/help/en/edge-security-acceleration/esa/user-guide/protocol-optimization)

Force redirect

Enable the force redirect to HTTPS feature to automatically redirect client requests to more secure HTTPS requests.

[Configure force redirect](/help/en/cdn/user-guide/configure-url-redirection)

[Configure force redirect](/help/en/edge-security-acceleration/dcdn/user-guide/configure-force-redirect)

[Force HTTPS](/help/en/edge-security-acceleration/esa/user-guide/force-https)

TLS versioning

Configure TLS versioning to adjust different TLS versions to balance the compatibility of older browsers with the security of communication. Lower TLS versions increase compatibility but weaken security, while higher versions enhance security but may restrict access for older browsers.

[Configure TLS versioning and cipher suites](/help/en/cdn/user-guide/configure-tls-version-control)

[TLS encryption algorithms supported by DCDN by default](/help/en/edge-security-acceleration/dcdn/user-guide/default-tls-encryption-algorithms)

[Configure TLS cipher suites and protocol versions](/help/en/edge-security-acceleration/esa/user-guide/tls-encryption-suite-and-protocol-version-configuration)

HSTS

Enable the HSTS feature to force clients to connect to product nodes using HTTPS, which improves security.

[Configure HSTS](/help/en/cdn/user-guide/configure-hsts)

[Configure HSTS](/help/en/edge-security-acceleration/dcdn/user-guide/configure-hsts)

[Configure HSTS](/help/en/edge-security-acceleration/esa/user-guide/hsts)

OCSP Stapling

The OCSP Stapling feature pre-caches certificate verification results and sends them to the client. This eliminates the need for the client to directly query the certificate status, thereby reducing verification time and improving access speed.

[Configure OCSP Stapling](/help/en/cdn/user-guide/configure-ocsp-stapling)

[Configure OCSP Stapling](/help/en/edge-security-acceleration/dcdn/user-guide/configure-ocsp-stapling)

[Configure OCSP Stapling](/help/en/edge-security-acceleration/esa/user-guide/ocsp-stapling)

### **Access control**

**Feature**

**Description**

**CDN**

**DCDN**

**ESA**

Referer hotlink protection

Set access control rules based on the Referer field to identify and filter visitors, preventing unauthorized resource theft. After configuring a blacklist or whitelist, the system decides whether to allow requests based on the list, returning the resource or a 403 response code.

[Configure Referer hotlink protection](/help/en/cdn/user-guide/configure-a-referer-whitelist-or-blacklist-to-enable-hotlink-protection)

[Configure Referer hotlink protection](/help/en/edge-security-acceleration/dcdn/user-guide/configure-a-referer-whitelist-or-blacklist-to-enable-hotlink-protection)

Implement Referer blacklists and whitelists using [custom WAF rules](/help/en/edge-security-acceleration/esa/user-guide/waf-custom-rules).

URL authentication

Verify requests by configuring an encrypted string and a timestamp in the URL to prevent malicious downloads and enhance the security of public resources.

[Configure URL authentication](/help/en/cdn/user-guide/configure-url-signing)

[URL authentication configuration](/help/en/edge-security-acceleration/dcdn/user-guide/url-authentication/)

Implement this feature by [configuring an edge function based on authentication method A, B, or C templates](/help/en/edge-security-acceleration/esa/user-guide/create-an-app-from-template).

IP blacklist/whitelist

Configure an IP blacklist or whitelist to filter requests. You can block or allow access from specific IPs, restrict sources, and address issues such as malicious IP scraping and attacks.

[Configure an IP blacklist or whitelist](/help/en/cdn/user-guide/configure-an-ip-blacklist-or-whitelist)

[Configure an IP blacklist or whitelist](/help/en/edge-security-acceleration/dcdn/user-guide/configure-an-ip-blacklist-or-whitelist)

Implement IP blacklists and whitelists using [custom WAF rules](/help/en/edge-security-acceleration/esa/user-guide/waf-custom-rules).

UA blacklist/whitelist

User-Agent is part of the HTTP request header and contains identifiers such as the operating system and browser. Configure a blacklist or whitelist for it to restrict access to product resources and enhance security.

[HTML optimization](/help/en/cdn/user-guide/enable-html-optimization)

[Configure a User-Agent blacklist or whitelist](/help/en/edge-security-acceleration/dcdn/user-guide/configure-a-user-agent-blacklist-or-whitelist)

Implement UA blacklists and whitelists using [custom WAF rules](/help/en/edge-security-acceleration/esa/user-guide/waf-custom-rules).

Remote authentication

Configure remote authentication to forward user requests to a specified authentication server for verification.

[Configure remote authentication](/help/en/cdn/user-guide/configure-remote-authentication)

None

Implement this feature by [adding a custom edge function](/help/en/edge-security-acceleration/esa/user-guide/create-an-app-from-template).

### **Performance optimization**

**Feature**

**Description**

**CDN**

**DCDN**

**ESA**

HTML optimization

Enable the HTML optimization feature. The system automatically removes comments and extra whitespace from HTML, JavaScript, and CSS files, removes redundant information, reduces file size, improves distribution efficiency, and enhances page readability.

[HTML optimization](/help/en/cdn/user-guide/enable-html-optimization)

[HTML optimization](/help/en/edge-security-acceleration/dcdn/user-guide/configure-html-optimization)

Implement this feature by [adding a custom edge function](/help/en/edge-security-acceleration/esa/user-guide/create-an-app-from-template).

Gzip compression

Enable the Gzip compression feature to reduce file size, improve transmission efficiency, and decrease bandwidth consumption.

[Gzip compression](/help/en/cdn/user-guide/use-the-gzip-compression-feature)

[Gzip compression](/help/en/edge-security-acceleration/dcdn/user-guide/use-the-gzip-compression-feature)

-   Configure [Gzip compression](/help/en/edge-security-acceleration/esa/gzip-compression-1) in the Speed Optimization feature.
    
-   Configure [Gzip compression](/help/en/edge-security-acceleration/esa/gzip-compression) using a compression rule.
    

Brotli compression

Brotli is a new open source compression algorithm that performs better than Gzip. After enabling the compression feature, product nodes intelligently compress and return resources, which can reduce file size, improve transmission efficiency, and decrease bandwidth consumption.

[Brotli compression](/help/en/cdn/user-guide/configure-brotli-compression)

[Brotli compression](/help/en/edge-security-acceleration/dcdn/user-guide/configure-brotli-compression)

-   Configure [Brotli compression](/help/en/edge-security-acceleration/esa/brotli-compression) in the Speed Optimization feature.
    
-   Configure [Brotli compression](/help/en/edge-security-acceleration/esa/brotil-compression) using a compression rule.
    

Ignore parameters

Enable the ignore parameters feature. When product nodes process a request, they remove the parameters after the question mark (`?`) in the URL and generate a cache hash key based on the original URL.

[Ignore parameters](/help/en/cdn/user-guide/ignore-parameters)

[Ignore parameters](/help/en/edge-security-acceleration/dcdn/user-guide/ignore-parameter)

-   Configure a [custom CacheKey](/help/en/edge-security-acceleration/esa/user-guide/custom-cachekey).
    
-   Implement this feature using a [query string](/help/en/edge-security-acceleration/esa/user-guide/query-string).
    

Image editing

Use image editing to perform operations such as scaling, cropping, rotating, and compressing images, and cache the processed results. This improves the return speed, reduces server pressure, and decreases back-to-origin traffic.

[Image processing](/help/en/cdn/user-guide/image-editing-overview)

[Image editing](/help/en/doc-detail/194300.html)

[Set image transform](/help/en/edge-security-acceleration/esa/user-guide/image-conversion-overview)

### **Video-related features**

**Feature**

**Description**

CDN

**DCDN**

**ESA**

Range origin fetch

By carrying Range information in back-to-origin requests, the origin server returns data within a specified range. This improves file distribution efficiency, increases the cache hit ratio, reduces back-to-origin traffic and server pressure, and improves response speed.

[Configure Range back-to-origin](/help/en/cdn/user-guide/object-chunking)

[Configure Range back-to-origin](/help/en/edge-security-acceleration/dcdn/user-guide/configure-range-origin-fetch)

[Origin rules](/help/en/edge-security-acceleration/esa/user-guide/back-to-source-rule-overview/)

Video seeking

Enable the video seeking feature to allow users to drag the progress bar freely when playing audio or video without affecting the playback effect.

[Configure video seeking](/help/en/cdn/user-guide/video-seeking)

[Configure video seeking](/help/en/edge-security-acceleration/dcdn/user-guide/configure-video-seeking)

[Configure video seeking](/help/en/edge-security-acceleration/esa/video-processing)

Listen to video

Separate the audio from a video file and return it to the client to enable audio playback, while reducing bandwidth usage and saving traffic.

[Configure listen to video](/help/en/cdn/user-guide/audio-extraction)

None

Not supported

Audio or video preview

The audio or video preview feature lets you return only a specified duration of an audio or video file, enabling a trial experience for non-members.

[Configure audio or video preview](/help/en/cdn/user-guide/audio-and-video-preview)

None

Rewrite standard M3U8 encryption

Enable the rewrite standard M3U8 encryption feature to rewrite M3U8 files under the protocol. A successful rewrite adds encryption parameters after a specific tag.

[Configure rewrite standard M3U8 encryption](/help/en/cdn/user-guide/m3u8-encryption-and-rewrite)

None

### **Resource monitoring**

**Feature**

**Description**

**CDN**

**DCDN**

**ESA**

Bandwidth

Displays bandwidth and traffic information for a specific domain of the corresponding product, and allows queries by region, carrier, and different protocols.

[Resource Monitoring](/help/en/cdn/user-guide/resource-monitoring)

[Resource Monitoring](/help/en/edge-security-acceleration/dcdn/user-guide/resource-monitoring)

-   You can use [Account Analytics](/help/en/edge-security-acceleration/esa/user-guide/account-analysis) to monitor and analyze all site resources under the current account.
    
-   You can also use [Network Traffic Analysis](/help/en/edge-security-acceleration/esa/user-guide/flow-analysis) to monitor and analyze the traffic of a specific site.
    

Number of visits/QPS

Displays the number of requests and queries per second (QPS) related to the accelerated domain name of the corresponding product, to understand the access frequency of the domain name in different dimensions.

HTTPCode

Presents the HTTP status code details of the accelerated domain name of the corresponding product to help analyze the request response situation of the domain name.

Back-to-origin statistics

Displays the back-to-origin bandwidth and back-to-origin traffic of the accelerated domain name of the corresponding product.

Set the filter "Service Provider=Origin" in [Cache Analysis](/help/en/edge-security-acceleration/esa/user-guide/cache-analysis) to view back-to-origin statistics.

HTTPCode (origin fetch)

Displays the back-to-origin HTTP status code information of the accelerated domain name of the corresponding product.

Hit rate

Displays the byte hit ratio and request hit ratio of the accelerated domain name of the corresponding product.

Not applicable

Basic data real-time monitoring

Displays the bandwidth, traffic, number of requests, and QPS of the accelerated domain name of the corresponding product.

[Real-time monitoring](/help/en/cdn/user-guide/real-time-monitoring)

[Real-time monitoring](/help/en/edge-security-acceleration/dcdn/user-guide/real-time-monitoring)

-   In [Account Analytics](/help/en/edge-security-acceleration/esa/user-guide/account-analysis), set the time range to 30 minutes to monitor the per-minute data changes of all sites under the current account in real time.
    
-   In [Network Traffic Analysis](/help/en/edge-security-acceleration/esa/user-guide/flow-analysis), set the time range to 30 minutes to monitor the per-minute data changes of a single site in real time.
    

Back-to-origin real-time monitoring

Displays the back-to-origin bandwidth and back-to-origin traffic status of the accelerated domain name of the corresponding product.

Set the filter "Service Provider=Origin" in [Cache Analysis](/help/en/edge-security-acceleration/esa/user-guide/cache-analysis) to view back-to-origin statistics.

Quality real-time monitoring

Displays the request hit ratio, byte hit ratio, and various HTTP status codes of the accelerated domain name of the corresponding product.

-   You can use [Account Analytics](/help/en/edge-security-acceleration/esa/user-guide/account-analysis) to monitor and analyze all site resources under the current account.
    
-   You can also use [Network Traffic Analysis](/help/en/edge-security-acceleration/esa/user-guide/flow-analysis) to monitor and analyze the traffic of a specific site.
    

### **Operations reports**

**Feature**

**Description**

**CDN**

**DCDN**

**ESA**

PV/UV

Query the PV and UV of a domain name by time.

[Customize and subscribe to operations reports](/help/en/cdn/user-guide/customize-an-operations-report-template-and-create-a-tracking-task)

[Customize and subscribe to operations reports](/help/en/edge-security-acceleration/dcdn/user-guide/create-a-custom-operations-report-and-a-tracking-task)

-   You can use [Account Analytics](/help/en/edge-security-acceleration/esa/user-guide/account-analysis) to monitor and analyze all site resources under the current account.
    
-   You can also use [Network Traffic Analysis](/help/en/edge-security-acceleration/esa/user-guide/flow-analysis) to monitor and analyze the traffic of a specific site.
    

Top client IPs

Query the top client IPs for a specified domain name, region, and date, and support ranking by traffic or number of requests.

Regions and carriers

View the user access region distribution and user carrier distribution in the Chinese mainland, Hong Kong (China), Macao (China), Taiwan (China), and regions outside China within a specified time range.

Popular Referers

Query the traffic, traffic proportion, number of visits, and visit proportion of popular Referer hotlink protection.

Popular URLs

Query popular URLs for a specified domain name, status code, and date, including traffic, traffic proportion, number of visits, and visit proportion.

Popular URLs (back-to-origin)

Query popular back-to-origin URLs for a specified domain name, status code, and date, including their traffic, traffic proportion, number of visits, and visit proportion.

Domain name ranking

Presents the access ranking of each accelerated domain name, including proportion, traffic or bandwidth peak, peak time, and number of visits.

Subscribe to operations report tasks

Operations reports provide statistics on user-accessed content, support customization and subscription based on business needs. After subscribing, the system sends the reports to the specified mailbox for analyzing the running status of the accelerated domain name.

### **Purge and prefetch**

**Feature**

**Description**

**CDN**

**DCDN**

**ESA**

URL purge

Submit the URL of the corresponding resource for a purge operation, allowing users to directly connect to the latest resource and cache it.

purge [and prefetch resources](/help/en/cdn/user-guide/refresh-and-prefetch-resources)

purge [and prefetch resources](/help/en/edge-security-acceleration/dcdn/user-guide/refresh-and-prefetch-resources)

[Purge cache by URL](/help/en/edge-security-acceleration/esa/user-guide/refresh-cache-by-url)

Directory purge

Submit the corresponding resource directory for a purge, allowing users to directly connect to the latest resource and cache it.

[Purge cache by directory](/help/en/edge-security-acceleration/esa/user-guide/refresh-cache-by-directory)

Regex purge

Configure a URL containing a regular expression to batch purge all URLs that match the expression, for more efficient URL updates.

The original regex purge can be achieved through optimized purge policies:

-   [Purge cache by hostname](/help/en/edge-security-acceleration/esa/user-guide/refresh-cache-by-host-name)
    
-   [Purge cache by URL with parameters ignored](/help/en/edge-security-acceleration/esa/user-guide/press-go-parameter-to-refresh-cache)
    
-   [Purge cache by tag](/help/en/edge-security-acceleration/esa/user-guide/refresh-cache-by-tag)
    

URL prefetch

Prefetch popular resources to relevant product nodes to reduce the load on the origin server and improve user experience.

[Prefetch cache](/help/en/edge-security-acceleration/esa/user-guide/warm-up-cache)

### **Tools**

**Feature**

**Description**

**CDN**

**DCDN**

**ESA**

IP address query

Use the IP detection feature to verify whether the IP address actually accessed by a client request is the IP of the corresponding acceleration node, thereby determining if acceleration has taken effect.

[Detect an IP address](/help/en/cdn/user-guide/does-the-ip-belong-to-cdn-pops)

[Detect an IP address](/help/en/edge-security-acceleration/dcdn/user-guide/check-ip-addresses)

[IP Geolocation Query](/help/en/edge-security-acceleration/esa/user-guide/ip-attribution-query)

URL diagnostic tool

If a webpage cannot be opened or an error occurs, use the self-service diagnostic tool for diagnosis.

[Self-service diagnostic tool](/help/en/cdn/user-guide/self-diagnostic-tools)

None

Not supported

### **Usage and billing query**

**Feature**

**Description**

**CDN**

**DCDN**

**ESA**

Usage query

Query usage data for accelerated domain names, and select different dimensions for the query, such as traffic bandwidth, number of HTTPS requests, and billing region.

[Usage query](/help/en/cdn/product-overview/query-resource-usage)

[Usage query](/help/en/edge-security-acceleration/dcdn/product-overview/query-resource-usage)

[Query usage](/help/en/edge-security-acceleration/esa/product-overview/query-usage)

Usage summary

Summarize the total usage of all domain names for the related product.

[Usage summary](/help/en/cdn/user-guide/summarize-resource-usage)

None

[Usage summary](/help/en/edge-security-acceleration/esa/product-overview/query-usage#3c1ac40448h3u)

Export summary

Export the total usage of all domain names for the related product.

[Export summary](/help/en/cdn/user-guide/export-resource-usage-data)

None

[Export summary](/help/en/edge-security-acceleration/esa/product-overview/query-usage#3c1ac40448h3u)

Export details

Export the usage details of a specified billable item for all domain names of the related product based on conditions such as domain name, time, and account, and download them locally for viewing.

[Export details](/help/en/cdn/user-guide/export-billing-details)

None

[Query and export details](/help/en/edge-security-acceleration/esa/product-overview/query-usage#d7f0ede512g4j)

Resource plan query

View detailed information such as the total amount, remaining amount, and expiration time on the resource plan management page.

[Resource plan management](/help/en/cdn/user-guide/query-the-details-of-resource-plans)

[Query resource plan usage](/help/en/edge-security-acceleration/dcdn/user-guide/view-resource-plans)

The subscription billing method is used, and resource plans are no longer used.

Billing method query

View the current billing method.

[Bill query](/help/en/cdn/product-overview/query-bills)

[Bill query](/help/en/edge-security-acceleration/dcdn/product-overview/query-bills)

You can view the current plan level through [Websites](/help/en/edge-security-acceleration/esa/user-guide/site-management) or [Query usage](/help/en/edge-security-acceleration/esa/product-overview/query-usage).

Change billing method

Change the billing method.

[Change the billing method](/help/en/cdn/product-overview/change-the-metering-method)

[Change the billing method](/help/en/edge-security-acceleration/dcdn/product-overview/change-the-metering-method)

[Upgrade a plan](/help/en/edge-security-acceleration/esa/product-overview/upgrade-package)

### **Other features**

**Feature**

**Description**

**CDN**

**DCDN**

**ESA**

Traffic cap

Set a traffic cap to control the bandwidth limit when users access the domain, reducing losses caused by burst traffic.

[Configure a traffic cap](/help/en/cdn/user-guide/configure-bandwidth-caps)

None

[Usage cap](/help/en/edge-security-acceleration/esa/product-overview/usage-cap)

EdgeScript

EdgeScript is a practical toolbox that helps you quickly achieve custom product configurations. When the regular configurations on the product console do not meet your business needs, you can try using it to achieve the desired configuration through simple programming.

[Use EdgeScript through the console](/help/en/cdn/user-guide/use-the-console-to-configure-scripts)

[Use EdgeScript through the console](/help/en/edge-security-acceleration/dcdn/developer-reference/use-the-dcdn-console-to-manage-scripts)

[Create an application from a function template](/help/en/edge-security-acceleration/esa/user-guide/create-an-app-from-template)

QUIC protocol switch

The QUIC protocol provides the same level of security as common security protocols, with lower connection and transmission latency.

[Configure the QUIC protocol](/help/en/cdn/user-guide/what-is-the-quic-protocol)

[What is the QUIC protocol](/help/en/edge-security-acceleration/dcdn/user-guide/what-is-the-quic-protocol)

[Enable HTTP/3 (QUIC)](/help/en/edge-security-acceleration/esa/user-guide/protocol-optimization)

EdgeScript running status

View the running status of EdgeScript.

[EdgeScript monitoring](/help/en/cdn/user-guide/es-monitoring)

[Use edge functions through the console](/help/en/edge-security-acceleration/dcdn/user-guide/use-edgeroutine-in-the-dcdn-console)

-   Observe monitoring through [Function metrics](/help/en/edge-security-acceleration/esa/user-guide/fuctions-and-pages-indicator).
    
-   Monitor and analyze through [Instant Logs](/help/en/edge-security-acceleration/esa/user-guide/instant-logs).
    

EdgeScript exceptions

View exceptions that occurred during EdgeScript execution and the returned error codes.

[EdgeScript monitoring](/help/en/cdn/user-guide/es-monitoring)

[Troubleshooting and FAQ](/help/en/edge-security-acceleration/dcdn/user-guide/faq-1)

Rules

Rules allow for graphical configuration of conditional rules, identifying user request parameters to determine whether a configuration takes effect, and precisely and flexibly controlling the execution effect of product configuration policies.

[Rules](/help/en/edge-security-acceleration/esa/user-guide/overview-of-rules/)

None

Use the new, highly open [Rules](/help/en/edge-security-acceleration/esa/rules-engine).

Offline log download

Record the full network access logs of a domain name at an hourly granularity. You can download the logs of a specified domain name for any day within 30 days to a local path for analysis as needed.

[Quick Start](/help/en/cdn/user-guide/download-logs)

[Offline log field description](/help/en/edge-security-acceleration/dcdn/user-guide/download-offline-logs)

[Download offline logs](/help/en/edge-security-acceleration/esa/user-guide/offline-log)

Transfer offline logs using Function Compute

Configure the feature to transfer offline logs using Function Compute. Once a new offline log is generated, it triggers the preset Function Compute logic to automatically and serverlessly transfer these log files to Object Storage Service.

[\[CDN Console\] Transfer offline logs using Function Compute](/help/en/cdn/user-guide/use-function-compute-to-deliver-logs)

None

You can achieve this by [creating a real-time log delivery task](/help/en/edge-security-acceleration/esa/user-guide/create-a-real-time-log-shipping-task).

Real-time log delivery

The real-time log delivery feature can collect logs generated by a specified accelerated domain name in a specified region in real time and deliver them to Simple Log Service for analysis, allowing for quick monitoring and troubleshooting of business issues.

[Deliver real-time CDN logs to SLS to analyze user access data](/help/en/cdn/user-guide/best-practices-for-shipping-and-analyzing-alibaba-cloud-cdn-real-time-logs-in-log-service)

[Configure real-time log delivery](/help/en/edge-security-acceleration/dcdn/user-guide/real-time-log-delivery-1)

Data statistics

With the real-time log feature, you can collect logs generated by nodes in real time and deliver them to Simple Log Service for storage and use, to quickly monitor and locate business problems.

[User access log analysis report](/help/en/edge-security-acceleration/dcdn/user-guide/access-log-analysis-report)

-   You can use [Account Analytics](/help/en/edge-security-acceleration/esa/user-guide/account-analysis) to monitor and analyze all site resources under the current account.
    
-   You can also use [Network Traffic Analysis](/help/en/edge-security-acceleration/esa/user-guide/flow-analysis) to monitor and analyze the traffic of a specific site.
