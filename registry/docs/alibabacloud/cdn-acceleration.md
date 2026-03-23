When distributing static resources such as images, audio, video, and documents from Object Storage Service (OSS), configure Alibaba Cloud CDN to improve access speed, reduce latency, and lower traffic costs.

## How it works

Alibaba Cloud CDN accelerates access to OSS using a distributed caching architecture. It proactively distributes and caches static content from an OSS bucket (the origin) to CDN points of presence (POPs) worldwide, serving content from a location closer to your users.

1.  A user requests a resource. A smart DNS routes the request to the nearest CDN POP with the best network conditions.
    
2.  The CDN POP checks its local cache. If the resource is not found, the POP sends an origin fetch request to the OSS origin to retrieve the content.
    
3.  After receiving the content from OSS, the CDN POP caches the resource according to its rules and serves it to the user.
    
4.  Subsequent requests for the same resource are served directly from the POP cache—no origin fetch needed. This shortens the access path, reduces network latency, lowers origin load, and accelerates access.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4156833771/CAEQThiBgIDFrvjqyxkiIGRmNzVmNDcwYzE0OTQyNzRiMzliNDYyMGEzOWFlZjY25588027_20250814153520.055.svg)

## Prerequisites

Before you begin, ensure that you have:

-   A registered domain name (domain names not registered with Alibaba Cloud are also supported)
    
-   An ICP filing for the domain, if the acceleration region is in the Chinese mainland
    

## Configure CDN acceleration

### Step 1: Add a CDN-accelerated domain name and configure the origin server

1.  Log on to the [CDN console](https://cdnnext.console.aliyun.com/domain/list) and click **Add Domain Name**.
    
2.  Configure the following settings:
    
    **Setting**
    
    **Description**
    
    **Region**
    
    Select the acceleration region.
    
    **Business type**
    
    Select the type that matches your workload.
    
    **Domain name to accelerate**
    
    Enter a root domain (such as `example.cn`) or a subdomain (such as `oss.example.cn`). Using a subdomain simplifies management and expansion.
    
3.  Set the origin URL to the domain name of the OSS bucket, as shown in the following figure. Click **Next** to add the domain name.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0646278571/p993713.png)
    

### Step 2: Configure a CNAME record

Add a DNS CNAME record to point your accelerated domain name to the CNAME address assigned by Alibaba Cloud CDN. This routes DNS queries for your domain to CDN POPs.

1.  On the **Recommended Features** page, click **Open Configuration Guide**. Alternatively, return to the **Domain Names** page, hover over **Pending Configuration** to the right of the domain name, and click **Open Configuration Guide** in the tooltip.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0646278571/p993725.png)
    
2.  Copy the CNAME record value (for example, `example.cn.w.kunlunap.com`).
    
3.  Go to the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/). For the target domain name, click **Settings** in the Actions column.
    
4.  Click **Add Record** and enter the following: If a CNAME record already exists, click **Edit** in the Actions column and update the value. Keep the default settings for other fields.
    
    **Field**
    
    **Value**
    
    **Record type**
    
    Select **CNAME**.
    
    **Hostname**
    
    For a root domain like `example.cn`, enter `@`. For a subdomain like `oss.example.cn`, enter the subdomain prefix (for example, `oss`).
    
    **Record value**
    
    Paste the CNAME value you copied.
    
5.  Click **OK**.
    

DNS changes propagate based on the record's Time to Live (TTL) setting, typically within a few minutes to a few hours. The domain may be temporarily inaccessible while changes propagate. Wait for the changes to propagate, or try clearing your local DNS cache.

### Step 3: Authorize CDN to access a private bucket (conditional)

Skip this step if your bucket is public-read.

By default, new buckets are private. To allow Alibaba Cloud CDN to access a private bucket, enable private bucket access.

1.  Go to the [CDN console](https://cdnnext.console.aliyun.com/domain/list), click the target domain name, then click **Origin Fetch** in the left navigation pane.
    
2.  Enable **Alibaba Cloud OSS Private Bucket Access**, as shown in the following figure.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0646278571/p993821.png)
    

**Important**

After enabling private bucket access, CDN is authorized to access the private bucket and automatically adds a signature to origin fetch requests. Clients must use URLs **without** signature parameters, such as `http://example.cn/dest.jpg`. If the URL includes parameters like `Expires` or `Signature`, a double-signing conflict occurs and OSS returns a 403 Forbidden error.

### Step 4: Verify the acceleration effect

1.  **Upload an object to the bucket.** On the [Buckets](https://oss.console.alibabacloud.com/bucket) page, click your bucket name. On the **Objects** page, click **Upload Object**. Select a static resource (for example, [dest.jpg](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250808/trnpcq/dest.jpg)) and follow the on-screen prompts.
    
2.  **Get the access URLs.**
    
    -   **Default OSS URL:** On the **Objects** page, click **View Details** in the Actions column, then click **Copy Object URL**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0646278571/p994938.png)
        
    -   **CDN-accelerated URL:** Construct a URL using the CDN-accelerated domain name and the object name—no signature parameters. For example: `http://example.cn/dest.jpg`.
        
3.  **Compare loading times.** Use a speed testing tool such as [CloudMonitor Synthetic Tests](https://cloudmonitor.console.alibabacloud.com/disposableTest) to compare the loading times of the same object using the OSS URL and the CDN-accelerated URL.
    
    > During the first test, the acceleration effect may not be obvious because the CDN POP must perform an origin fetch. Run the test again after the POP has cached the resource.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0646278571/p995067.png)
    
4.  **Check the cache hit status.** Open your browser's developer tools (F12) and inspect the `X-Cache` response header:
    
    -   `HIT`: The request hit the CDN cache. Acceleration is working.
        
    -   `MISS`: The request missed the cache. The CDN POP fetched the resource from OSS.
        

## Configure origin fetch for multiple buckets

When your architecture relies on multiple OSS buckets for different resource types, use one of the following configurations.

### Method 1: Independent subdomain architecture

Assign a dedicated, semantic subdomain to each bucket—for example, `img.example.cn` for images and `video.example.cn` for audio and video—then configure separate CDN acceleration for each subdomain. This approach completely isolates resource types, giving you independent cache policies, security settings, and monitoring per bucket:

-   Set long-term cache periods for images to maximize cache hit ratios.
    
-   Enable range origin fetch for video to support seeking and resumable downloads.
    
-   Enable URL signing for sensitive documents to prevent unauthorized access.
    

Because traffic for each resource type flows through its own subdomain, you can pinpoint performance bottlenecks and unusual traffic without cross-domain interference.

### Method 2: Unified domain with path-based routing

If you want a single access point for multiple buckets, configure one CDN-accelerated domain and use the [rules engine](/help/en/cdn/user-guide/rules-engine) to route requests by path to the correct bucket. This simplifies domain management, unifies your SSL certificate, and reduces operational overhead.

The following example uses two buckets, `cdn-bucket1` and `cdn-bucket2`.

1.  **Add path rules.** In the [CDN console](https://cdnnext.console.aliyun.com/), click the target accelerated domain name. Click **Rules Engine** > **Add Rule**. Add two URL path rules to match `http://example.cn/bucket1/*` and `http://example.cn/bucket2/*` respectively. In this example, `bucket1` and `bucket2` are virtual paths pointing to `cdn-bucket1` and `cdn-bucket2`, and `*` represents the actual object path within the bucket.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0646278571/p994622.png)
    
2.  **Configure conditional origins.** In the **Basic Information** section for the accelerated domain name, configure two conditional origins. Attach each path rule to its target bucket origin address so requests are routed to the correct origin based on the matching rule.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0646278571/p994624.png)
    
3.  **Specify the origin host.** In the **Origin Fetch** configuration, set the origin host for each origin server. This ensures origin requests reach the correct target bucket.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0646278571/p994626.png)
    
4.  **Rewrite the origin URL.** In the **Origin Fetch** configuration, add a URL rewrite rule that strips the virtual path prefix (for example, `/bucket1`) during origin fetch. This ensures the origin request path matches the actual storage path of the object in the bucket.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0646278571/p994628.png)
    
5.  **Verify the configuration.** Access resources in different buckets using the single CDN-accelerated domain name with different path prefixes.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0646278571/p995076.png)
    

## Production readiness

### Best practices

**Enable HTTPS**

[Configure an HTTPS certificate](/help/en/cdn/user-guide/configure-an-ssl-certificate) for your accelerated domain name and enable forced HTTPS redirection. This encrypts data between clients and CDN POPs, prevents tampering, and eliminates browser "Not Secure" warnings.

**Configure cache policies**

Cache policies directly determine CDN performance. Design TTL (Time to Live) and parameter handling together:

-   **TTL by content type:**
    
    **Content type**
    
    **Cache period**
    
    **Rationale**
    
    Images, audio, video, app packages
    
    One month or longer
    
    Rarely change; long TTL maximizes cache hit ratio
    
    JS, CSS
    
    Hours to days
    
    Moderate update frequency; pair with versioning (for example, `style.v1.1.css`)
    
    PHP, JSP, API responses
    
    0 seconds (no cache)
    
    Must always reflect the latest content
    
-   **Parameter handling for image processing:** By default, CDN strips all query parameters to maximize cache hit ratios, which prevents OSS image processing instructions like `?x-oss-process` from working. To use OSS image processing through CDN, go to the CDN console and adjust the [Ignore Parameters](/help/en/cdn/user-guide/ignore-parameters) setting under **Domain Names** > **the accelerated domain name** > **Optimization**.
    

**Use prefetch and automatic cache updates**

When caching is enabled, updates to origin files do not propagate to CDN POPs immediately. Use these strategies to keep content current:

-   **Prefetch:** Before a version release or event, use the [purge and prefetch](/help/en/cdn/user-guide/refresh-and-prefetch-resources) feature to push hot resources to POPs in advance. This prevents an origin fetch surge when content goes live.
    
-   **Auto CDN cache update:** On the **Bucket Settings** > **Domain Names** page in the OSS console, enable **Auto CDN Cache Update** for the domain name. When you update an object via API, OSS automatically triggers a CDN purge.
    
    > Auto CDN Cache Update does not guarantee real-time propagation. For content with strict timeliness requirements, manually trigger a CDN purge after updating.
    

**Configure a CORS policy on CDN**

Configuring Cross-Origin Resource Sharing (CORS) rules only at the OSS origin is unreliable. CDN may cache and serve a response that lacks CORS headers, causing browser errors. Configure CORS headers directly on CDN to ensure they appear in every response regardless of cache status.

1.  In the [CDN console](https://cdn.console.alibabacloud.com/domain/list), click the accelerated domain name or click **Manage** in the Actions column.
    
2.  Go to **Cache** > **Modify Outgoing Request Header**. Configure `Access-Control-Allow-Origin` and other required CORS response headers. After configuration, every response served through a CDN POP includes the CORS headers, allowing browser validation to pass.
    
    > Adjust the header values to match your application's requirements.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0646278571/p994907.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0646278571/p994916.png)
    

**Optimize for large files and data transfer**

-   **Enable range origin fetch:** For video streaming and large file distribution, [enable range origin fetch](/help/en/cdn/user-guide/object-chunking) so CDN POPs can request specific byte ranges on demand. This enables seeking during video playback and reduces initial load times.
    
-   **Compress text files:** Enable [Gzip compression](/help/en/cdn/user-guide/use-the-gzip-compression-feature) or [HTML optimization](/help/en/cdn/user-guide/enable-html-optimization) in the CDN console to reduce the transfer size of JS, CSS, and HTML files.
    
    > \- Enabling Gzip compression or HTML optimization changes the `Content-Length` and `Content-MD5` values. If your application verifies these values, enable these features with caution. - If both HTML optimization and Gzip compression are enabled, HTML optimization is ineffective—CDN only performs Gzip compression.
    

**Migrate without downtime**

When switching from an OSS bucket domain to a CDN-accelerated domain, use a phased approach:

1.  **Preparation:** Complete and verify all CDN configuration in a test environment.
    
2.  **Phased release (off-peak hours):** Route a portion of traffic to the CDN-accelerated domain. Gradually increase the share to reduce risk.
    
3.  **Monitoring:** Watch access logs and error rates. Track response time and success rate to confirm the release is healthy.
    
4.  **Full release:** After thorough verification, switch all traffic to the CDN-accelerated domain.
    
5.  **Rollback plan:** If issues arise, route traffic back to the original bucket domain. Investigate the root cause before re-deploying.
    

### Risk prevention

**Protect against hotlinking and unauthorized access**

-   **Hotlink protection:** [Configure a Referer whitelist or blacklist](/help/en/cdn/user-guide/configure-a-referer-whitelist-or-blacklist-to-enable-hotlink-protection). CDN validates the `Referer` header on incoming requests, blocking access from domains not on the list.
    
-   **URL signing:** When private origin fetch is enabled, CDN POPs bypass OSS's native signature verification, making private objects accessible through the CDN domain. [Enable URL signing](/help/en/cdn/user-guide/configure-url-signing) on CDN to require each request to include a unique signature and timestamp, preventing unauthorized downloads.
    

**Secure the CDN-to-OSS connection**

-   **Configure origin Server Name Indication (SNI):** [Configure origin SNI](/help/en/cdn/user-guide/configure-sni) to match the origin host (typically the accelerated domain name). Without the correct SNI, OSS cannot identify your domain during the TLS handshake—it serves a default certificate, causing a mismatch error. OSS may also apply stricter throttling to unidentified traffic, degrading performance.
    
-   **Hide origin information:** By default, CDN uses the bucket domain for origin fetch. When an origin fetch error occurs (for example, the object does not exist), the error response may expose the OSS bucket domain, which is a security risk. To hide the origin, change the origin host to the CDN-accelerated domain name:
    
    1.  On the [Buckets](https://oss.console.alibabacloud.com/bucket/) page, click the target bucket. Go to **Bucket Settings** > **Domain Names** and map the accelerated domain name to the bucket. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0646278571/p993895.png)
        
    2.  In the [CDN console](https://cdnnext.console.aliyun.com/domain/list), click the target accelerated domain name. Go to **Origin Fetch** > **Default Origin Host**, click **Modify**, and set **Domain Type** to **CDN Domain**.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0646278571/p993900.png)
    

**Enable access logs**

For security auditing, performance analysis, and troubleshooting in production, [configure real-time log delivery](/help/en/cdn/user-guide/configure-real-time-log-delivery) in the CDN console to send access logs to Simple Log Service (SLS). SLS lets you analyze access behavior, track popular resources, and set alerts on error rates and traffic anomalies.

## Billing

-   **CDN fees:** Configuring CDN to accelerate access to OSS incurs CDN traffic fees. For details, see [CDN billing overview](/help/en/cdn/product-overview/billing-overview).
    
-   **OSS fees:** When a CDN cache miss occurs, the CDN POP fetches the resource from OSS, which incurs origin traffic fees. For details, see [OSS traffic fees](/help/en/oss/traffic-fees).
    

## FAQ

#### Why do `5xx` errors occur during CDN origin fetch?

A `5xx` error means CDN failed to retrieve the resource from the OSS origin. Check the following:

-   **Origin address:** Verify the OSS origin address in the [CDN console](https://cdnnext.console.aliyun.com/) is correct.
    
-   **Origin protocol:** If CDN is configured for HTTPS origin fetch or uses an [origin protocol policy](/help/en/cdn/user-guide/configure-the-origin-protocol-policy), confirm that the OSS origin supports HTTPS and that the SSL certificate is valid.
    
-   **Network reachability:** Test connectivity from the CDN POP or your local machine to the OSS origin. CDN POPs connect over the public internet, so the origin must be publicly reachable. If the origin IP is blocked, the port is closed, or the domain does not resolve, origin fetch fails.
    
-   **Origin load:** On the [CDN real-time monitoring](https://cdnnext.console.aliyun.com/monitor/realTime) page, check for a sudden bandwidth spike. A surge of origin fetch requests can overwhelm the origin and cause timeouts. For hot resources, [prefetch](/help/en/cdn/user-guide/refresh-and-prefetch-resources) them before publishing and [set a reasonable TTL](/help/en/cdn/user-guide/configure-the-cdn-cache-expiration-time).
    

#### Why do I get a `403 Forbidden` or `You are forbidden to list buckets` error when accessing a static page through CDN?

This typically happens when CDN acceleration is enabled for a private bucket that also has static website hosting configured. The conflict arises because:

-   CDN private origin fetch sends signed requests to OSS for identity verification.
    
-   OSS static website hosting (the default index page feature, for example, returning `index.html` for `/`) requires **anonymous** access to trigger the redirect logic.
    

When a user accesses the root of the accelerated domain, CDN sends a signed request. OSS receives the signed request, does not trigger the static website hosting redirect, and instead attempts a `ListObjects` operation. Because access policies typically block this, OSS returns a `403 Forbidden` error.

To resolve this, bypass the OSS static website hosting feature and [configure URL rewrite rules](/help/en/cdn/user-guide/create-an-access-url-rewrite-rule) directly on CDN:

**Setting**

**Value**

**Path to be rewritten**

`^/$`

**Target path**

`/index.html` (or the actual index file name)

**Flag**

Redirect

#### Can I upload objects to OSS through a CDN domain name?

For security reasons, do not upload files to OSS through a CDN domain name. If your CDN allows write methods (such as PUT and POST), anyone can upload files to OSS through CDN without identity verification or authorization. This exposes your service to malicious uploads and data tampering. Always upload directly to OSS using the OSS domain and follow the principle of least privilege.

#### Will OSS outbound traffic decrease after enabling CDN?

Yes, significantly. Requests served from the CDN cache do not reach the OSS origin, which directly reduces outbound traffic fees. The higher the cache hit ratio, the greater the reduction—this benefit is most pronounced for frequently accessed content such as popular images or website assets.

#### How do I count actual object access numbers after enabling CDN?

After CDN acceleration is enabled, OSS access logs cannot record end-user access requests that are directly served by the CDN cache. To count all accesses:

-   **Log data within 30 days:** Download [CDN offline logs](/help/en/cdn/user-guide/download-logs).
    
-   **Log data older than 30 days:** [Configure real-time log delivery](/help/en/cdn/user-guide/configure-real-time-log-delivery) in CDN, then view and analyze data on the [CDN Data Statistics](https://cdnnext.console.aliyun.com/log/realtime/pushData) page.
