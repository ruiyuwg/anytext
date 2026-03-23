Use a Content Delivery Network (CDN) to accelerate static resources from Object Storage Service (OSS) bucket. In this setup, OSS serves as the origin server. CDN caches files on points of presence (POPs) around the world, so users can retrieve content from the node closest to them. This significantly reduces latency and offloads your origin server.

## Benefits

Alibaba Cloud OSS provides low-cost storage, and CDN accelerates the delivery of static resources. Using OSS as the origin sever for CDN offers the following benefits:

-   CDN routes all user requests for your resources, which reduces the load on the origin server.
    
-   The unit price for CDN traffic is lower than for outbound traffic over Internet from direct OSS access.
    
-   Clients fetch resources from the nearest CDN POP, which shortens the network transmission and reduces latency.
    

## Technical architecture

CDN acts as a caching layer for OSS. When a user requests a resource, the request first reaches the nearest CDN POP.

-   **Cache hit**: If the POP has cached the requested resource, it returns the resource directly to the user, shortening the response time.
    
-   **Cache miss**: If the POP has not cached the requested resource, it forwards the request to the origin server (the OSS Bucket) to fetch the resource. The POP then returns the resource to the user and caches a copy for future requests.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8080324671/CAEQTxiBgIC2qrOR1hkiIDlhMWUyNjk5YjVlNzQyNjI5YTU3MTY1YmY0NzRiMjAz5728746_20250917134428.317.svg)

## Billing

You may incur fees for CDN outbound traffic and for origin traffic from OSS to CDN. For more information, see [Billing of OSS content acceleration](/help/en/cdn/product-overview/billing-of-oss-content-acceleration).

## Before you begin

-   You have signed up for an [Alibaba Cloud account](https://account.aliyun.com/register/register.htm) and completed [identity verification](https://account-console.alibabacloud.com/#/auth/home).
    
-   You have [activated OSS](/help/en/oss/getting-started/activate-oss#task-njz-hf4-tdb), [uploaded the resources](/help/en/oss/user-guide/upload-objects-to-oss/).
    
-   You have a valid [domain name](/help/en/dws/user-guide/how-to-register-a-domain-name).
    
-   To accelerate resources in the Chinese mainland, first complete the [ICP filing process](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview).
    

## Procedure

### Step 1: Add a domain name to CDN and associate it with OSS

Add a domain name for acceleration in the CDN console and associate it with an OSS Bucket as the origin server.

1.  Log on to the CDN console and navigate to the [Domain Names](https://cdn.console.alibabacloud.com/domain/list) page.
    
2.  Click **Add Domain Name** and configure the basic information:
    
    -   **Domain Name to Accelerate**: The domain name for providing your content to the Internet, such as `www.example.com`.
        
    -   **Region**: The region closest to your primary user base.
        
    -   **Business Type**: Your resource type. For example, for images and small web files under 20 MB, select **Images and Small Files**.
        
    
3.  Click **Add Origin Server** and enter the OSS information:
    
    -   **Origin Info**: **OSS Domain**.
        
    -   **Domain Name**: Select the public endpoint of the target OSS Bucket from the drop-down list.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8545918571/p1007328.png)
    
4.  Click **OK**, and then click **Next** to configure recommended CDN features.
    

### Step 2: Configure core acceleration policies (recommended features)

Follow the Recommended Features wizard to configure cache expiration, range origin fetch, and ignoring URL parameters. These settings improve your CDN's cache hit ratio, access performance, and security.

#### 2.1 Configure cache expiration

Proper cache rules maximize CDN performance and reduce unnecessary requests to the origin. [Set a cache expiration time,](/help/en/cdn/user-guide/configure-the-cdn-cache-expiration-time) also called or Time-to-live (TTL) based on the characteristics of your resources. The first matched rule takes effect. The following are recommended configurations:

**File type**

**Extension**

**TTL**

**Description**

Images/audio/video

`jpg,png,gif,mp3,mp4`

30 days

The content does not change frequently.

Static scripts

`js,css`

1 hour

The content change frequently with version releases.

Website homepage

`html`

No cache (0 second)

Ensures users always receive the latest page structure.

#### 2.2 Configure Ignore Parameters

The [Ignore Parameters](/help/en/cdn/user-guide/ignore-parameters) feature removes the query string (the part of the URL after `?`) when generating a cache key. This serves the same cached file even when request URLs have different parameters, improving your cache hit rate and reducing origin traffic.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8545918571/p1007370.png)

#### 2.3 Enable Range Origin Fetch

The feature is recommended for delivering large files such as audio and video instead of small files like images.

After you enable [Range origin fetch](/help/en/cdn/user-guide/object-chunking), if a CDN POP requests a large file from the OSS bucket, OSS returns the content in chunks based on the range specified in the CDN request. This reduces traffic consumption and resource response time.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8545918571/p1007388.png)

#### 2.4 Set automatic cache update for OSS files

Enable **Map Custom Domain Name** and **Auto CDN Cache Update** for the target domain on the **Bucket Settings** > **Domain Names** page in the [OSS console](https://oss.console.alibabacloud.com/bucket). Select an action for triggering the automatic CDN update.

**Note**

The update is event-based and not 100% reliable or real-time. In extreme cases, such as network problems or high traffic, refresh events can be lost. If you need immediate updates, we recommend using [Purge and prefetch resources](/help/en/cdn/user-guide/refresh-and-prefetch-resources).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8545918571/p1007395.png)

### Step 3: Configure and verify DNS resolution

1.  Go to the [Domain Names](https://cdn.console.alibabacloud.com/domain/list) page in the CDN console, find the domain you added in step 1, and copy its CNAME value. Refresh the page if the value is empty.
    
    ![CANME-cn.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1513434371/p870885.jpg)
    
2.  Log on to the [DNS console](https://dnsnext.console.alibabacloud.com) with the same Alibaba Cloud account. On the Public Zone page, find the domain and click **Settings**.
    
3.  Click **Add Record** to create a CNAME record:
    
    -   **Record Type**: `CNAME`.
        
    -   **Hostname**: The subdomain prefix (for example, `www`).
        
    -   **Record Value**: The CNAME value copied from the CDN console.
        
4.  Keep the default values for other parameters, and then click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8545918571/p1007413.png)
    

### Step 4: Configure security settings

#### 4.1 Enable HTTPS

To use HTTPS, you must add a certificate to your domain in the CDN console. Your domain will not work over HTTPS until you add a valid certificate.

**Note**

Enabling HTTPS generates pay-as-you-go HTTPS requests. These requests are not covered by CDN data transfer packages. Ensure your account has a sufficient balance or purchase an HTTPS request package to prevent service suspension due to overdue payments. For more information, see [Static HTTPS requests](/help/en/cdn/product-overview/billing-of-https-requests-for-static-content).

1.  Go to the [Domain Names](https://cdn.console.alibabacloud.com/domain/list) page in the CDN console, find the domain you added, and click **Manage** in the **Actions** column.
    
2.  Select the **HTTPS** tab, and in the **SSL Certificate** section, click **Modify**.
    
3.  On the **Modify HTTPS Settings** page, turn on **HTTPS Secure Acceleration** and configure the certificate parameters.
    
    ![HTTPS-cn.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1513434371/p871100.jpg)
    
    **Note**
    
    -   If you have a certificate from Alibaba Cloud Certificate Management Service, select **SSL Certificates Service** and choose the purchased certificate from the **Certificate Name** drop-down list. If you cannot find your certificate, check whether the domain bound to the certificate is the accelerated domain.
        
    -   If you are using a third-party certificate, select **Custom Certificate (Certificate+Private Key)**. You must enter a **Certificate Name** and then upload the **Certificate (Public Key)** and **Private Key**. This saves the certificate in Alibaba Cloud Certificate Management Service. You can view the certificate on [My Certificates](https://yundun.console.aliyun.com/?spm=5176.2020520110.all.12.16df56a1u1IhI6&p=cas#/cas/home).
        
    

#### 4.2 Authorize CDN to access a private bucket

If your OSS Bucket is private, grant CDN access to it. Otherwise, all origin requests will fail due to a lack of permissions.

1.  Go to the [Domain Names](https://cdn.console.alibabacloud.com/domain/list) page in the CDN console, find the domain you added, and click **Manage** in the **Actions** column.
    
2.  In the **Origin Fetch** section, turn on **Alibaba Cloud OSS Private Bucket Access** and select **Bucket in the Same Account**. For cross-account access, see [Configure origin fetch from private OSS buckets](/help/en/cdn/user-guide/grant-alibaba-cloud-cdn-access-permissions-on-private-oss-buckets).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8545918571/p1007433.png)
    

#### 4.3 Configure URL signing

URL signing (also known as timestamp-based hotlink protection) prevents unauthorized access to your resources by adding a signature and a TTL to access URLs. CDN provides several [signing methods](/help/en/cdn/user-guide/configure-url-signing).

1.  Go to the [Domain Names](https://cdn.console.alibabacloud.com/domain/list) page in the Alibaba Cloud CDN console, find the domain you added, and click **Manage** in the **Actions** column.
    
2.  On the **Access Control** tab, select **Set URL Signing** and click **Modify**.
    
3.  On the settings page, select **Type A**, set a **Primary Key** and a **Primary Key** (set at least one key), and store them. Your server will use these keys to verify signed URLs. For usage examples, see [Type A signing](/help/en/cdn/user-guide/type-a-signing).
    
4.  Set a TTL for the signed URL, for example, 1800 seconds.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8545918571/p1007440.png)
    

#### 4.4 Configure usage caps

[Configure usage caps](/help/en/cdn/user-guide/configure-usage-cap) to set maximum bandwidth, traffic, and number of HTTPS requests for a domain. This helps prevent high bills and financial losses from unexpected traffic spikes caused by attacks or resource abuse.

1.  On the [Domain Names](https://cdn.console.alibabacloud.com/domain/list) page, find the target domain and click **Manage** in the **Actions** column.
    
2.  In the left navigation pane for the domain, click **Traffic Throttling**.
    
3.  On the **Usage Cap** tab, refer to the [feature description](/help/en/cdn/user-guide/configure-usage-cap#02d3a33473dvc) to configure a usage cap policy.
    
4.  Click **Modify** to set a **Statistics Period**, **Threshold**, and **Unblock Time**. For parameter details, refer to the [feature description](/help/en/cdn/user-guide/configure-usage-cap#02d3a33473dvc).
    
5.  Click **OK**. The usage cap rule is created and takes effect immediately.
    

#### 4.5 Set up monitoring and alerts

**Set up real-time monitoring**

[Set an alert rule](/help/en/cdn/user-guide/set-an-alert-rule) for the peak bandwidth of a specific domain. When the peak bandwidth reaches the configured threshold, the system sends an alert to the administrator, allowing for a timely response to potential risks.

**Set up spending alerts**

Use the **Available Credit Alert** feature in **Billing** > **Billing Management** to control your account's spending. It sends an alert to your specified contacts when your account balance falls below a certain amount.

## Troubleshooting

### Requests return 403 Forbidden

**Troubleshooting steps**

-   Check the error message on the page. If it includes `You don't have permission to access the URL on this server` along with a reason like `denied by IP ACL = not in whitelist`, use this information to identify the blocking policy.
    
-   If the error message is `You don't have permission to access the URL on this server` without additional details, check the URL signing and remote authentication settings in CDN.
    

### Low cache hit ratio and frequent origin requests

**Troubleshooting steps**

Run the `curl -I` command multiple times for the same resource and check the `Age` and `X-Cache` response headers. `Age: 0` or `X-Cache: MISS` indicates a cache miss.

**Solutions**

-   The cache rule's TTL is set too short or is set to "No cache". Increase the TTL in the cache rules.
    
-   **Ignore Parameters** is enabled, but the URL contains necessary parameters for version control or image processing (such as `?v=1.1` or `x-oss-process`). This causes CDN to treat different versions of the URL as the same resource, leading to content errors or feature failures. In this case, disable **Ignore Parameters**.
    
-   An origin response header (such as `Cache-Control: no-cache`) instructs CDN not to cache the resource. Adjust the origin's caching policy or configure CDN to ignore the origin's no-cache headers by enabling **Ignore Origin No-Cache Header** when you [configure cache expiration time](/help/en/cdn/user-guide/configure-the-cdn-cache-expiration-time).
    

### AccessDenied error

**Troubleshooting steps**

Check the error message. If it is `You have no right to access this object because of bucket acl`, the error occurs because the OSS Bucket's ACL is private and you have not authorized CDN to access it.

**Solution**

In the CDN console's **Origin Fetch** page, enable [Private OSS Bucket](/help/en/cdn/user-guide/grant-alibaba-cloud-cdn-access-permissions-on-private-oss-buckets). Then, use the [Purge and prefetch resources](/help/en/cdn/user-guide/refresh-and-prefetch-resources) feature to purge the cached error. You can access the resource when the link is refreshed.
