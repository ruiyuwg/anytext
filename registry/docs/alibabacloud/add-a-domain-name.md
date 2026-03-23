An accelerated domain name is a domain name that is accelerated by Dynamic Content Delivery Network (DCDN) and accessed by users. To activate DCDN for your domain name, you need to add the domain name to DCDN, configure the origin server information, and then add a CNAME record to the DNS settings at your DNS provider to map the domain name to the CNAME assigned by DCDN.

## Prerequisites

-   A domain name and its origin server are available.
    
    **Note**
    
    -   If you select **Chinese Mainland Only** or **Global** as the service location, you need to apply for Internet Content Provider (ICP) filing for the domain name. If your domain name is not filed, you can complete ICP filing by using the [Alibaba Cloud ICP Filing system](https://beian.aliyun.com/pcContainer/myorder).
        
    -   If the Chinese mainland is covered in the service location, you need to complete [real-name verification](https://account-console.alibabacloud.com/#/intlAuth).
        
    
-   DCDN is activated. For information about how to activate DCDN, see [Activate DCDN](/help/en/edge-security-acceleration/dcdn/getting-started/activate-dcdn#task-alv-1fk-xdb).
    

## Step 1: Configure basic information

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, click **Add Domain Name** and configure basic information.
    
    **Note**
    
    The first time a domain name is added to DCDN, DCDN verifies only the ownership of the [root domain](/help/en/edge-security-acceleration/dcdn/getting-started/add-a-cname-record-for-a-domain-name#section-va7-9cz-ahi). For information about ownership verification, see [Verify the ownership of a domain name](/help/en/edge-security-acceleration/dcdn/getting-started/verify-the-ownership-of-a-domain-name-1). If the root domain name has already passed ownership verification, skip this operation.
    
    ![配置基本信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2549423371/p280134.png)
    
    **Parameter**
    
    **Description**
    
    **Business Type**
    
    **DCDN**: You can use this feature to accelerate the delivery of dynamic and static content.
    
    **Location**
    
    Select a service location. If you select **Chinese Mainland Only** or **Global**, you must complete ICP filing for your domain name. We recommend that you apply for an ICP filing by using [Alibaba Cloud ICP Filing system](https://beian.aliyun.com/pcContainer/myorder). The Ministry of Industry and Information Technology (MIIT) may not immediately synchronize the filing results after an application is approved. We recommend that you configure the domain name 8 hours after you obtain the ICP filing.
    
    **Note**
    
    The pricing varies based on the service location. Select a location based on your business requirements. For more information, visit the [DCDN pricing page](https://www.alibabacloud.com/product/dcdn/pricing).
    
    **Domain Name to Accelerate**
    
    -   **Format:**
        
        -   The domain name must be in lowercase letters, such as example.com. Domain names that contain uppercase letters are invalid.
            
        -   If the domain name contains Chinese characters, such as 阿里云.网址, you must apply for an ICP number for the domain name and use the Punycode tool to convert the Chinese domain name into its ASCII equivalent, such as xn--fiq\*\*\*\*.xn--eq\*\*\*\*.
            
    
    -   **Requirements for wildcard domain names:**
        
        -   Dynamic Content Delivery Network (DCDN) supports wildcard domain names. For more information about the limits on wildcard domain names, see [Does DCDN support wildcard domain names?](/help/en/edge-security-acceleration/dcdn/support/does-dcdn-support-wildcard-domain-names#concept-2438181)
            
        -   The wildcard domain name that you specify and the domain names that match the wildcard domain name must belong to the same Alibaba Cloud account. Otherwise, an error message appears when you add domain names.
            
        -   If a wildcard domain name is not added to an Alibaba Cloud account, you are allowed to add the subdomains of the wildcard domain name to multiple Alibaba Cloud accounts.
            
        -   When you add wildcard domain names such as `.aliyundoc.com` along with associated specific domain names such as `example.aliyundoc.com` to DCDN, the maximum specific domain names that can be accelerated is 500.
            
            **Note**
            
            The first 500 specific domain names that match the wildcard domain name can be accelerated by DCDN.
            
    -   **You cannot add domain names that have been added to other Alibaba Cloud services.** If the system prompts that the domain name is added to other Alibaba Cloud services such as ApsaraVideo VOD and Alibaba Cloud CDN, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
        
    -   **Each Alibaba Cloud account can add a maximum of 50 domain names to DCDN.** If the average daily peak bandwidth of your domain names exceeds 50 Mbit/s, you can apply to add more domain names to DCDN. For more information, see [Quota management](/help/en/edge-security-acceleration/dcdn/user-guide/quota-management#concept-2086246).
        
    -   **The content that is delivered from the domain name must be legal and comply with the Terms of Service for DCDN.** For more information, see [Limits](/help/en/edge-security-acceleration/dcdn/product-overview/before-you-start#concept-nc4-qbf-xdb).
        
    -   **Length:** A domain name cannot exceed 67 characters in length.
        
    -   **ICP filing:** If you set the service location of a domain name to **Global** or **Chinese Mainland Only**, you need to apply for an ICP number for the domain name. We recommend that you use [Alibaba Cloud ICP Filing System](https://beian.aliyun.com/?spm=5176.8142029.388261.3.a0SCC3) to apply for ICP numbers.
        
    -   **Domain name reclaiming:** If your domain name remains disabled for 120 days, DCDN automatically deletes the configuration records that are related to the domain name. This rule also applies to domain names that fail ownership verification. If you want to continue using the domain name, you must add the domain name in the [DCDN console](https://dcdn.console.alibabacloud.com/overview) again.
        
    -   **Domain name disabling:** For more information, see [Rules for disabling accelerated domain names](/help/en/edge-security-acceleration/dcdn/product-overview/rules-for-disabling-accelerated-domain-names#concept-2060710).
        
    -   **Sandbox:** If an accelerated domain name becomes the target of an attack, such as DDoS attack or HTTP flood attack, or faces significant increases in bandwidth or QPS due to traffic spikes that have not been reported to Alibaba Cloud, DCDN reserves the right to add the attacked domain name to a sandbox based on factors such as the service status of the domain name and the impact of the attack. This ensures that the acceleration services of other users can work as expected. For more information about sandboxes, see [Introduction to sandboxes](/help/en/edge-security-acceleration/dcdn/support/introduction-to-sandboxes#concept-2406113). If the attack is severe, other accelerated domain names in the same account are also added to the sandbox, and the addition of new domain names to the account is restricted.
        
    
    **Resource Group**
    
    Select the default resource group or a custom resource group. For information about how to create a resource group, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    
    **Tag**
    
    -   **Tag Key**: Select an existing tag key or enter a tag key. You can use fuzzy match to search for tag keys and specify up to 20 tag keys at a time.
        
    -   **Tag Value**: Select an existing tag value or enter a tag value. You can leave this parameter empty.
        
    
    For information about rules for creating tags, see [Tag rules](/help/en/cdn/user-guide/use-tags-to-manage-accelerated-domain-names#section-qcm-kc3-4gb).
    

## Step 2: Configure an origin server

After you configure the basic information, perform the following steps to configure the origin server:

1.  In the **Origin Information** section, click **Add Origin Server**.
    
2.  In the **Add Origin Server** dialog box, configure the parameters according to the following table.
    
    ![配置源站信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2453970071/p280107.png)
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    Select the type of the origin server and enter the address of the origin server. The address of an origin server cannot exceed 67 characters in length. You can add a maximum of 20 origin server addresses for each domain name.
    
    -   **OSS Domain**
        
        -   If you use an Object Storage Service (OSS) bucket as the origin server, you can enter the public domain name of the OSS bucket, such as `***.oss-cn-hangzhou.aliyundoc.com`.
            
        -   You can obtain the public domain name of an OSS bucket in the [OSS console](https://oss.console.alibabacloud.com/). You can also select the domain name of an OSS bucket that belongs to the current Alibaba Cloud account from the Domain Name drop-down list.
            
    -   **IP**: You can configure one or more IP addresses for an origin server. Internal IP addresses are not supported. IPv4 addresses and IPv6 addresses are supported. At least one of the IP addresses must be an IPv4 address. If you use a public IP address of an Alibaba Cloud Elastic Compute Service (ECS) instance as the address of the origin server, the IP address is exempt from manual review. You need to obtain the permissions to configure origin fetch over IPv6 in advance. Otherwise, updates to settings about IPv6 will be ineffective. For more information, see [Configure origin fetch over IPv6](/help/en/edge-security-acceleration/dcdn/configure-back-to-origin-routing-over-ipv6).
        
    -   **Origin Domain**: You can configure one or more origin domain names.
        
        **Configuration rules for origin domains (click to expand rule details)**
        
        -   The origin domain cannot be the same as the accelerated domain name. Otherwise, a back-to-origin error occurs due to loop resolution.
            
        -   The format of the origin domain name:
            
            -   The domain name must be 1 to 67 characters in length,
                
            -   and can contain lowercase letters, digits, and hyphens (-). Example: example.com.
                
            -   The domain name cannot contain Chinese characters, uppercase letters, or special characters other than hyphens (-). The domain name cannot be only a hyphen (-). A hyphen (-) in a domain name cannot be followed by another hyphen (-). The domain name cannot start or end with a hyphen (-). If the domain name contains Chinese characters, such as 阿里云.网址, you must apply for an ICP number for the domain name in Chinese characters and use the Punycode tool to convert the Chinese characters into English letters, such as xn--fiq\*\*\*\*.xn--eq\*\*\*\*. Then, you can specify the converted domain name as the domain name that you want to accelerate.
                
        -   You can add the domain name of an Alibaba Cloud Application Load Balancer (ALB) instance, such as `example.hangzhou.alb.aliyuncs.com`, as the address of an origin server.
            
        
    
    **Priority**
    
    You can configure priorities to specify primary and secondary origin servers. The primary origin server has a higher priority than the secondary origin server. DCDN preferentially redirects requests to the primary origin server. If a fault occurs on the primary origin server, requests are redirected to the secondary origin server. The priority ranges from 0 to 127. A smaller value indicates a higher priority. By default, the priority of the primary origin server is 20, and the priority of the secondary origin server is 30. If you want to specify other values, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
    
    For example, you specify Origin Server A as the primary origin server and Origin Server B as the secondary origin server. In this case, DCDN preferentially redirects requests to Origin Server A. If Origin Server A fails, CDN redirects user requests to Origin Server B. After Origin Server A recovers, CDN fails back to Origin Server A.
    
    **Weight**
    
    If origin servers have the same priority, DCDN redirects requests to the origin servers based on the weights of the origin servers. This way, loads are balanced among the origin servers. You can specify a weight based on your business requirements.
    
    -   The weight of an origin server ranges from 1 to 100. An origin server that has a higher weight receives more requests.
        
    -   Default value: 10.
        
    
    For example, you specify Origin Server A and Origin Server B as primary origin servers. If the weight of Origin Server A is 80 and the weight of Origin Server B is 20, CDN redirects 80% of requests to Origin Server A and 20% of requests to Origin Server B.
    
    **Note**
    
    -   By default, weight-based redirection takes effect only for requests for static content. To enable weight-based redirection for requests for dynamic content, you must enable load balancing. For more information, see [Configure back-to-origin routing to retrieve dynamic content](/help/en/edge-security-acceleration/dcdn/user-guide/configure-back-to-origin-requests-to-retrieve-dynamic-content#task-2332743).
        
    -   In the following scenarios, the proportion of requests that are redirected to an origin server may not be the same as the weight of the origin server that you specified:
        
        -   If few requests are redirected to origin servers within a period of time, such as less than 10 requests per second, request distribution across origin servers is uneven.
            
        -   All requests are from a specific IP address or a limited number of IP addresses. Requests from the same IP address are sent to the same POP, and a TCP session is maintained between the POP and an origin server.
            
        
        If you want to verify whether the actual proportion of requests that are redirected to an origin server is approximately the same as the weight that you configured for the origin server, you can use a third-party synthetic monitoring tool to initiate a probe task. You can probe clients that are distributed across locations and are served by Internet service providers (ISPs) based on your business requirements. The probe task requires a long period of time to collect sufficient and valid data.
        
    
    **Port**
    
    Select a port based on the protocol that is supported by the origin server.
    
    -   **Port 80**: Requests are redirected to the origin server over port 80.
        
    -   **Port 443**: Requests are redirected to the origin server over port 443. Make sure that the origin server supports HTTPS.
        
    
    **Note**
    
    By default, only ports 80 and 443 are supported. To configure custom ports, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
    
3.  Click **OK**.
    
4.  **Optional.** Repeat the preceding steps to add multiple origin servers.
    

## Step 3: Complete domain name review

1.  After you configure the origin server, select the check box to confirm that you have read and agree to the **Compliance Warranty Regarding Cross-border Data Transfers**, and then click **Next**.
    
2.  Wait for manual verification to complete.
    
    **Note**
    
    -   If content on the domain name does not need to be manually reviewed, proceed to the next step. In the next step, you can set the parameters based on your business requirements.
        
    -   Generally, a domain name is added to CDN within 10 minutes. In rare occasions, the process may require 30 minutes to complete. If a domain name fails to be added to CDN within 30 minutes, Alibaba Cloud engineers will troubleshoot and resolve the issue.
        
    

## What to do next

-   [Check whether a domain name is accessible (optional)](/help/en/edge-security-acceleration/dcdn/getting-started/check-whether-a-domain-name-is-accessible): After you add a domain name to DCDN, we recommend that you test whether the domain name is accessible before you update the CNAME record of the domain name.
    
-   [Add a CNAME record for a domain name](/help/en/edge-security-acceleration/dcdn/getting-started/add-a-cname-record-for-a-domain-name): After you add a domain name to DCDN, the system assigns a CNAME to the domain. You need to add the CNAME record to the system of your DNS provider before your users can access your domain. After the CNAME record takes effect, DCDN takes effect and requests from users are redirected to the POP closest to them.
    

## **FAQ**

-   [When I add a domain name to DCDN, a message appears indicating that the domain name is already added to another cloud service or by another Alibaba Cloud account. What do I do?](/help/en/edge-security-acceleration/dcdn/support/domain-access-faq#883a6922cegll)
    
-   [I have completed ICP filing for my domain name, but the system sends a prompt indicating that the domain name is not filed when I add it to DCDN. What do I do?](/help/en/edge-security-acceleration/dcdn/support/domain-access-faq#248576ddad042)
    
-   [Are subdomain names accelerated after I add my root domain name to DCDN?](/help/en/edge-security-acceleration/dcdn/support/domain-access-faq#1527e3aa87fiy)
    
-   [How do I apply DCDN to a root domain name and subdomain names?](/help/en/edge-security-acceleration/dcdn/support/domain-access-faq#a7149dbefcei5)
    
-   [How do I disable or remove an accelerated domain name?](/help/en/edge-security-acceleration/dcdn/support/domain-access-faq#1bd7e1621cmm0)
    

## References

-   For information about accelerated domain names, see [accelerated domain name](/help/en/edge-security-acceleration/dcdn/product-overview/terms#section-obn-stb-p2b).
    
-   For information about operations that you can call to add domain names, see [AddDcdnDomain](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-adddcdndomain) and [BatchAddDcdnDomain](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-batchadddcdndomain).
    
-   For information about how to add or modify an origin server, see [Configure an origin server](/help/en/edge-security-acceleration/dcdn/user-guide/configure-an-origin-server).
    
-   For information about how to change the location of a domain name, see [Change the service location](/help/en/edge-security-acceleration/dcdn/user-guide/change-the-accelerated-region).
