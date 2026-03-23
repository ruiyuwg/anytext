Web portals commonly display static resources such as images, text, and videos. If your website primarily contains small image files, select **Image and Small File** as the business type. If your website contains many video and audio resources, select **VOD**. This tutorial uses `testcdn.top` as an example to demonstrate how to use Alibaba Cloud CDN to accelerate the delivery of **Image and Small File** resources stored in Object Storage Service (OSS).

## Prerequisites

Before you begin, make sure that you have:

-   An activated CDN service. See [Activate CDN](/help/en/cdn/activate-alibaba-cloud-cdn#task-187531)
    
-   A stable origin server -- either an Elastic Compute Service (ECS) instance or an OSS bucket. See [Create an ECS instance](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console) or [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4)
    
-   A registered domain name with DNS managed through Alibaba Cloud DNS
    

## Performance benchmark

A network probe performed with Application Real-Time Monitoring Service (ARMS) compared an OSS resource URL against a CDN-accelerated domain name. CDN acceleration improved delivery speed by approximately 35%.

> The results of each network probe may vary depending on network conditions.

## Step 1: Add an accelerated domain name

1.  Log on to the [CDN console](https://cdn.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, click **Add Domain Name**.
    
4.  Configure the domain settings: > **Important:** > - The first time you add an accelerated domain name, verify its ownership. See [Verify the ownership of a domain name](/help/en/cdn/verify-domain-name-ownership#task-2511469). > - If the acceleration region includes the Chinese mainland, the accelerated domain name must have an ICP filing.
    
    **Parameter**
    
    **Value**
    
    **Region**
    
    **Global (Excluding the Chinese Mainland)**
    
    **Domain Name to Accelerate**
    
    `images.testcdn.top`
    
    **Business type**
    
    **Image and Small File**
    
    **Resource group**
    
    Default
    
5.  Click **Add Origin Server** and configure the origin:
    
    **Parameter**
    
    **Value**
    
    **Origin Info**
    
    **OSS Domain**
    
    **Domain Name**
    
    Select the domain name for Internet access
    
    **Priority**
    
    **Primary**
    
    **Weight**
    
    10
    
    **Port**
    
    80
    
6.  Read and agree to the Compliance Warranty Regarding Cross-border Data Transfers, click **Next**, and then click **Back to Domain Management**.
    

## Step 2: Configure a CNAME record

After adding the domain, point your DNS to the CDN-assigned CNAME so that traffic routes through CDN edge nodes.

1.  On the **Domain Names** page in the CDN console, find the domain name you added and copy its CNAME value.
    
2.  Log on to the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com).
    
3.  On the **Public Zone** page, find the root domain `testcdn.top` and click **Settings** in the **Actions** column.
    
4.  Click **Add Record** and configure:
    
    **Parameter**
    
    **Value**
    
    **Record Type**
    
    **CNAME**
    
    **Hostname**
    
    `images`
    
    **Query Source**
    
    **Default**
    
    **Record Value**
    
    The CNAME copied in step 1
    

> DNS propagation typically takes a few minutes but can take up to 48 hours depending on your DNS provider and TTL settings. During propagation, some users may still reach the origin directly.

## Step 3: Verify the setup

After DNS propagation completes, verify that CDN is serving your content:

1.  Open a browser and navigate to a resource on the accelerated domain, for example:
    
    ```
       https://images.testcdn.top/example-image.png
    ```
    
2.  Check the HTTP response headers. A successful CDN setup includes headers such as `Via` or `X-Cache` indicating a cache hit or miss from a CDN edge node.
    
3.  Alternatively, use `curl` to inspect the response headers: Look for CDN-specific headers in the output to confirm that the request was processed by CDN.
    
    ```
       curl -I https://images.testcdn.top/example-image.png
    ```
    

## Troubleshooting

### 403 error when accessing accelerated resources

If you receive a 403 error after completing the setup, the most likely cause is that your OSS bucket has private access permissions. CDN cannot fetch content from a private bucket without explicit authorization.

To fix this:

1.  In the CDN console, go to the **Domain Names** page, find `images.testcdn.top`, and click **Manage**.
    
2.  Click the **Origin Fetch** tab.
    
3.  In the **Alibaba Cloud OSS Private Bucket Access** section, turn on the **Status** switch.
    
4.  Set **Type** to **Bucket in the Same Account**.
    
5.  Access the resource again and confirm that it loads normally.
    

> Enabling private bucket origin fetch allows CDN to authenticate requests to your OSS bucket. This keeps the bucket private while still serving content through CDN.

## Clean up resources

If you set up this tutorial as a learning exercise, delete the resources that you no longer need:

1.  In the CDN console, go to **Domain Names**, find the accelerated domain name, disable it first, and then delete it.
    
2.  In the Alibaba Cloud DNS console, remove the CNAME record you added.
    
3.  If the OSS bucket was created solely for this tutorial, delete it.
    

## Next steps

-   [Configure HTTPS](https://www.alibabacloud.com/help/en/cdn/user-guide/configure-ssl-certificates) -- Enable HTTPS for the accelerated domain to secure data in transit
    
-   [Configure cache rules](https://www.alibabacloud.com/help/en/cdn/user-guide/create-a-cache-expiration-rule) -- Fine-tune how long CDN caches your content at edge nodes
    
-   [Configure access control](https://www.alibabacloud.com/help/en/cdn/user-guide/configure-a-referer-based-hotlink-protection-whitelist-or-blacklist) -- Restrict who can access your accelerated resources
