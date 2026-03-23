Use Content Delivery Network (CDN) to accelerate static resources on Elastic Compute Service (ECS) instances. This guide explains the principles and implementation of CDN acceleration for ECS resources, helping you optimize performance, reduce costs, and manage server load effectively.

## Benefits

Accelerating ECS resources with Alibaba Cloud CDN offers these main advantages:

-   **Reduce server load**: All user access to website resources flows through CDN, significantly reducing origin ECS server pressure.
    
-   **Cost efficiency**: CDN traffic pricing is lower than direct access to ECS outbound network traffic charges.
    
-   **Performance enhancement**: Clients retrieve static resources from the nearest point of presence (POP). This minimizes the network transmission distance and ensures the transmission quality.
    

## How it works

If the origin server is an ECS instance, CDN caches static resources on POPs including scripts, images, audio files, and video files. Clients can retrieve the cached resources from the nearest POPs. Dynamic resources, such as data from web programs and databases, are returned from the ECS instance to clients.

**Note**

If you need to accelerate dynamic resources on an ECS instance, use [What is ESA](/help/en/edge-security-acceleration/esa/product-overview/what-is-esa).

The following figure shows the architecture:![应用场景](https://help-static-aliyun-doc.aliyuncs.com/assets/img/855874/156896477251266_en-US.png)

## Example

The website `image.example.com` needs acceleration for image retrieval from an ECS instance. The following table describes the details:

**Description**

**Example**

Website domain name

The domain name that is accelerated by CDN.

`image.example.com`

Business type

Determine the business type based on your website content.

For example, if the website contains mostly images, the business type is **Image and Small File**.

Image and small file distribution

Acceleration area

The region where the website visitors are located.

The Chinese mainland

Origin domain name

Specify Origin Domain Name or IP.

-   Origin Domain Name: Enter your origin domain name. The domain name is resolved to the public IP address of the ECS instance.
    
-   IP: You can directly use the public IP address of the ECS instance as the origin address.
    

The domain name of the origin server is used in this example: `ecs.example.com`

Other services

Enable other features based on your business requirements.

-   Increase cache hit ratios by adding cache rules.
    
-   Specify domain names for origin fetch by configuring origin hosts.
    
-   Accelerate delivery for specific resources by enabling the range origin fetch feature.
    
-   Increase the cache hit ratio and accelerate file distribution by enabling parameter filtering.
    
-   Protect websites from hotlinking by configuring Referer whitelists or blacklists.
    
-   Protect websites from hotlinking and IP theft by enabling URL signing.
    

## Workflow

The following diagram shows how CDN speeds up resource retrieval from an ECS instance:

![加速ECS流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6830427461/p378517.png)

## **Procedure**

### **Prerequisites**

Before you begin, ensure that you have:

-   An [registered an Alibaba Cloud account](https://account.alibabacloud.com/register/intl_register.htm) . You have [completed account verification](https://account-console.alibabacloud.com/#/intlAuth) if you want to use services covering the Chinese mainland.
    
-   [Activate Alibaba Cloud CDN](/help/en/cdn/activate-alibaba-cloud-cdn#task-187531) enabled.
    
-   An ECS instance available for content hosting. For more information, see [Create instances](/help/en/ecs/user-guide/create-instances/#concept-nx2-nzv-wgb).
    
-   Domain name(s) for acceleration.
    

### **Add a domain name**

1.  Log on to the [Alibaba Cloud CDN console](https://cdn.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Domain Names**, click **Add Domain Name**, and configure the following parameters as the [Example](#section-7hj-q6a-itk):
    
    **Note**
    
    -   The first time you add a domain name in the CDN console, you must verify the ownership of the domain name (only the ownership of the [Configure a CNAME record](/help/en/cdn/add-a-cname-record-for-a-domain-name#section-955-288-lev) needs to be verified). If you have already verified your domain ownership, skip this step. For more information, see [Verify the ownership of a domain name](/help/en/cdn/verify-domain-name-ownership#task-2511469).
        
    -   For more information about the parameters and precautions, see [Step 1: Configure business information](/help/en/cdn/add-a-domain-name#section-2er-say-d7x).
        
    
    -   **Domain Name to Accelerate**: `image.example.com`
        
    -   **Business Type**: **Image and Small File**
        
    -   **Region**: **Global**
        
    
3.  Click **Add Origin Server** to configure the origin server.
    
    For Origin Info, select **Origin Domain** or **IP**, and enter the origin domain name or the public IP address of the ECS instance. In this example, the origin information is the origin domain name `ecs.example.com`. Keep the default values for other parameters.
    
    **Note**
    
    For more information about the parameters and precautions, see [Step 2: Set up origin servers](/help/en/cdn/add-a-domain-name#section-w9p-mhv-oaq).
    
    ![配置源站信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3967780271/p278368.png)
    
4.  After you configure the origin server, click **Next**.
    
5.  Wait for verification.
    
    After the domain name passes the verification, the status of the domain name changes to **Enabled**. In this case, the domain name is added to CDN.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7301301271/p810612.png)
    
6.  When the Domain Status becomes **Enabled**, the CNAME of the accelerated domain name is displayed. In this example, the CNAME is `image.example.com.w.kunlunsl.com`.
    

### **Set up the domain name**

Enable the corresponding features based on your business requirements to improve acceleration performance and secure data transmission.

1.  In the CDN console, go to [Domain Names](https://cdn.console.alibabacloud.com/domain/list). In the domain name list, click **Manage** in the Actions column of the target domain name.
    
2.  Based on your business requirements, configure the features described in the following list:
    
    -   Increase the cache hit ratio
        
        [Configure CDN cache expiration time](/help/en/cdn/user-guide/configure-the-cdn-cache-expiration-time#task-261642) for cached resources based on the following rules to increase the cache hit ratio:
        
        -   Specify a TTL of one month or longer for static files that are infrequently updated, such as images and application packages.
            
        -   Specify a TTL based on your business requirements for static files that are frequently updated, such as JavaScript and CSS files.
            
        -   Specify a TTL of 0 seconds to disable caching for dynamic files, such as PHP, JSP, and ASP files.
            
    -   Specify the site to which POPs redirect requests
        
        If multiple sites are hosted on your origin server, and the site on which the requested content resides is different from the site to which the accelerated domain name points, you need to [Configure the default origin host](/help/en/cdn/user-guide/configure-the-default-origin-host#task-261642). The origin host specifies the site to which Alibaba Cloud CDN redirects requests.
        
    -   Improve the efficiency of file downloads from POPs
        
        After you enable the [Configure range-based origin fetch](/help/en/cdn/user-guide/object-chunking#task-187634) feature, the ECS instance that functions as the origin server returns the file chunk that is specified by the Range header to POPs. This reduces origin traffic and accelerates content delivery.
        
        **Note**
        
        The range origin fetch feature is suitable for large file distribution such as audio and video streaming. You do not need to enable the range origin fetch feature when you use Alibaba Cloud CDN to accelerate the delivery of images.
        
    -   Increase the cache hit ratio or file distribution efficiency
        
        After you enable the [Ignore parameters](/help/en/cdn/user-guide/ignore-parameters#task-187634) feature, CDN POPs remove the parameters after `?` in the URL when generating a cache hashkey. This allows the client to hit the same cache file when accessing the same resource file with different parameters, which helps increase the cache hit ratio and reduce traffic to origin.
        
    -   Limit users who can access resources on POPs and prevent other websites from referencing your resource links
        
        After you configure a [Configure a Referer blacklist or whitelist](/help/en/cdn/user-guide/configure-a-referer-whitelist-or-blacklist-to-enable-hotlink-protection#task-187634), CDN allows or blocks requests based on user identities. If a request is allowed, CDN returns the URL of the requested resource. If a request is denied, CDN returns the HTTP 403 status code.
        
    -   Protect websites from hotlinking issues and IP theft
        
        [Configure URL signing](/help/en/cdn/user-guide/configure-url-signing#task-2106935) cannot be performed without an origin server. The origin server generates signed URLs based on the URL signing settings on the POPs. After you enable URL signing, only requests that pass authentication can access resources on POPs.
        
    

### **Configure CNAME**

To enable CDN acceleration, add a CNAME record with your DNS provider to map your domain name to the CNAME. Without this, requests cannot be redirected to POPs.

In the following example, Alibaba Cloud DNS is used to show how to [Configure a CNAME record](/help/en/cdn/add-a-cname-record-for-a-domain-name#task-187531).

1.  Use the Alibaba Cloud account to which the accelerated domain name belongs to log on to the [Authoritative DNS Resolution](https://dnsnext.console.alibabacloud.com/#/dns/domainList) page in the Alibaba Cloud DNS console.
    
2.  On the **Public Zone** page, find the root domain name (`example.com`) of the accelerated domain name and click **DNS Settings** in the Actions column.
    
3.  Click **Add Record** to add a CNAME record.
    
    -   Type: **CNAME**
        
    -   Hostname: `image`
        
    -   Value: Enter the CNAME value that you obtained from the domain name list, which is `image.example.com.w.kunlunsl.com` in this example.
        
    -   Keep the default values for other parameters.
        
    
4.  Verify that the CNAME record takes effect.
    
    -   **Method 1: Check the status in the CDN console**
        
        1.  In the Alibaba Cloud CDN console, go to the [Domain Names](https://cdn.console.alibabacloud.com/domain/list) page.
            
        2.  Select the target domain name. A status of **Configured** in the **CNAME** column indicates that the configuration has taken effect.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3094848071/p751435.png)
            
            **Note**
            
            New CNAME records in Alibaba Cloud DNS take effect in real time. Modified CNAME records take effect after their TTL period expires. The default TTL is 10 minutes. During this period, the record status may be displayed as **To Be Configured** in the console.
            
    -   **Method 2: Verify using the nslookup command**
        
        1.  Open a terminal or command prompt.
            
        2.  Enter nslookup -type=CNAME **domain name**. If the resolution result is consistent with the CNAME of the domain name in the CDN console, the CDN service has taken effect. Example:
            
            ```
            nslookup -type=CNAME www.example.com
            ```
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8564649371/p795364.png)
