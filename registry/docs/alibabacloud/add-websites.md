After you add a website domain name to Anti-DDoS Proxy, point the DNS record of the domain name to the CNAME address that Anti-DDoS Proxy generates. This enables DDoS attack protection. This topic walks you through the entire process—from quick integration to advanced configuration—and ensures a smooth service transition.

## Scope

-   An Anti-DDoS Proxy (Chinese Mainland) or Anti-DDoS Proxy (Outside Chinese Mainland) instance is purchased. For more information, see [Purchase an Anti-DDoS Proxy instance](/help/en/anti-ddos/anti-ddos-pro-and-premium/getting-started/purchase-an-anti-ddos-pro-or-anti-ddos-premium-instance#task-2415749).
    
-   If your website service is added to an Anti-DDoS Proxy (Chinese Mainland) instance, the domain name must have an ICP filing. For more information, see [ICP filing](#6646eefb13al5).
    
    **Note**
    
    Websites added to Anti-DDoS Proxy (Outside Chinese Mainland) instances are not subject to ICP filing requirements.
    

## Procedure

1.  Log on to the [Website Config](https://yundun.console.alibabacloud.com/?p=ddoscoo&microFrontVersionName=message#/domain/list/cn-hangzhou) page in the Anti-DDoS Proxy console.
    
2.  In the top navigation bar, select the region of your instance.
    
    -   **Anti-DDoS Proxy (Chinese Mainland)**: Choose the **Chinese Mainland** region.
        
    -   **Anti-DDoS Proxy (Outside Chinese Mainland)**: Choose the **Outside Chinese Mainland** region.
        
3.  On the **Website Config** page, click **Add Website**.
    
    **Note**
    
    You can also click **Batch Import** at the bottom of the page to import multiple website configurations at once. The configurations must be in an XML file. For more information about the file format, see [Other operations](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/website-configurations-in-an-xml-file#concept-2338775).
    
4.  Enter the **Website Config** information and click **Next**.
    
    ## **Basic configuration**
    
    -   **Function Plan**: Select the function plan of the Anti-DDoS Proxy instance that you want to associate. Options: **Standard** and **Enhanced**.
        
        **Note**
        
        Hover over the ![Function plan description](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0112515361/p185233.png) icon after **Function Plan** to view the feature differences between the Standard function plan and the Enhanced function plan. For more information, see [differences between Standard and Enhanced function plans](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/function-plan).
        
    -   **Instance**: Select the Anti-DDoS Proxy instance that you want to associate.
        
        **Important**
        
        A domain name can be associated with a maximum of eight Anti-DDoS Proxy instances. The instances must use the same **Function Plan**.
        
    -   **Websites**: Enter the domain name of the website that you want to protect. You can enter an exact-match domain name, such as `www.example.com`, or a wildcard domain name, such as `*.example.com`.
        
        **Note**
        
        -   If configurations exist for both a wildcard domain name (for example, `*.aliyundoc.com`) and an exact-match domain name (for example, `www.aliyundoc.com`), Anti-DDoS Proxy prioritizes the forwarding rules and mitigation policies of the exact-match domain name (`www.aliyundoc.com`).
            
        -   If you enter a root domain, only the root domain is protected. Second-level domains and other subdomains are not protected. If you want to protect a second-level domain, enter the second-level domain or a wildcard domain name.
            
        -   You can enter only a domain name, not an IP address.
            
        
    -   **Protocol Type**: Select the protocols that the website supports.
        
        -   **HTTP** / **HTTPS**: The basic protocols for web services.
            
            **Note**
            
            For information about HTTPS settings, see the description on the [HTTPS configuration](#1b3cce50d4xb0) tab.
            
        -   **Websocket** / **Websockets**: Real-time communication protocols. If you select one of these protocols, HTTP or HTTPS is automatically selected.
            
    -   **Server Address**: Set the address of the backend server (origin server) that Anti-DDoS Proxy uses during an **origin fetch**.
        
        -   **Origin IP Address**: Enter the public IP addresses of the origin server. You can enter multiple IP addresses, separated by commas. Examples:
            
            -   **Origin server is on Alibaba Cloud**: Enter the public IP address of the origin ECS instance. If an SLB instance is deployed before the ECS instance, enter the public IP address of the SLB instance.
                
            -   **Origin server is in a data center that is not managed by Alibaba Cloud or is on another cloud platform**: Run the `ping <domain name>` command to query the public IP address to which the domain name resolves. Then, enter the public IP address.
                
        -   **Origin Domain Name**:
            
            -   **Scenarios**: This option is suitable for scenarios where another proxy service is configured between the origin server and Anti-DDoS Proxy. Examples:
                
                -   If WAF is used as the preceding proxy, you can enter the CNAME of the WAF instance. For more information, see [Improve website protection by deploying Anti-DDoS Proxy and WAF together](/help/en/anti-ddos/anti-ddos-pro-and-premium/use-cases/protect-a-website-by-using-both-anti-ddos-pro-or-anti-ddos-premium-and-waf#task680).
                    
                -   If you set **Origin Domain Name** to the [default public endpoint](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db) of an OSS bucket, you must attach a custom domain name to the bucket. For more information, see [Attach a custom domain name](/help/en/oss/manage-a-domain-map-custom-domain-names#concept-ozw-m2r-5fb).
                    
            -   **Limits**: You can configure a maximum of 10 origin domain names. Separate them with line breaks.
                
    -   **Server Port**: Set the **port** that the origin server uses to listen for website services.
        
        -   **HTTP/Websocket**: The default port is 80.
            
        -   **HTTPS/Websockets**: The default port is 443.
            
        -   **Custom Server Port**:
            
            -   **Multiple ports**: You can specify multiple ports, separated by commas. The total number of custom ports for all website services protected by the Anti-DDoS Proxy instance cannot exceed 10. This includes custom ports for different protocols.
                
            -   **Port range** (HTTP/HTTPS): 80 to 65535
                
    
    ## **HTTPS configuration**
    
    If you select HTTPS for encrypted authentication, complete the following configurations.
    
    -   **Configure a certificate:** To enable HTTPS, you must configure an SSL certificate that matches the website domain name.
        
        -   **Upload**: Specify **Certificate Name**, then paste the certificate file content to the **Certificate File** field, and the private key file content to the **Private Key** field.
            
            **Note**
            
            -   If the certificate file is in PEM, CER, or CRT format, open it in a text editor and copy the content. For other formats like PFX or P7B, convert the file to PEM format first, then copy the content. For information about how to convert the format of a certificate file, see [Convert the format of a certificate](/help/en/ssl-certificate/use-the-certificate-toolkit#section-7pl-isf-owk) or [How do I convert an SSL certificate to the PEM format?](/help/en/anti-ddos/convert-https-certificates-in-different-formats-to-pem-format#concept-40526-zh)
                
            -   If the file includes multiple certificates (like a certificate chain), concatenate their contents and paste the combined content into the **Certificate File** field.
                
            
        -   **Select Existing Certificate**: If you have applied for a certificate from Certificate Management Service (Original SSL Certificate) or have uploaded a certificate to Certificate Management Service, you can directly select the certificate.
            
        
    -   Configure a **TLS Security Settings**:
        
        **Note**
        
        For more information, see [Customize the TLS security policy for an HTTPS certificate of a server](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/configure-a-custom-tls-security-policy#task-960830).
        
        -   **TLS Versions for SSL Certificate**: Select the TLS versions that the international standard HTTPS certificate supports.
            
            -   **TLS 1.0 and later. This setting provides the best compatibility but low security.**: Supports TLS 1.0, TLS 1.1, and TLS 1.2.
                
            -   **TLS 1.1 and later. This setting provides good compatibility and medium security.**: Supports TLS 1.1 and TLS 1.2.
                
            -   **TLS 1.2 and later. This setting provides good compatibility and high security level.**: Supports TLS 1.2.
                
            -   **Enable TLS 1.3 Support**: Supports TLS 1.3.
                
        -   **Cipher Suites for SSL Certificate**: Select a supported cipher suite for the international standard HTTPS certificate, or select a custom cipher suite. Move the pointer over the ![问号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5613712161/p226604.png) icon for a cipher suite option to view the cipher suites that it includes.
            
    -   **Mutual Authentication**:
        
        -   **Issued by Alibaba Cloud**: Select a default CA certificate from the **A default CA certificate is required.** drop-down list. This certificate is issued by Alibaba Cloud's Certificate Management Service (Original SSL Certificate).
            
        -   **Not Issued by Alibaba Cloud**:
            
            -   First, upload the self-signed CA certificate to Certificate Management Service (Original SSL Certificate). For detailed instructions, see [Upload Certificate Repository](/help/en/ssl-certificate/manage-private-certificates-by-using-a-certificate-application-repository#f682f96cab01o).
                
            -   In the **A default CA certificate is required.** drop-down list, select the uploaded self-signed CA certificate.
                
    -   **Enable OCSP Stapling**: OCSP stands for Online Certificate Status Protocol. It is used to query the certificate authority (CA) that issued the server certificate to check whether the certificate has been revoked. During a TLS handshake with the server, the client must obtain both the certificate and its corresponding OCSP response.
        
        **Important**
        
        OCSP responses are digitally signed by the CA and cannot be forged. Enabling this feature does not introduce additional security risks.
        
        -   **Disabled (Default)**: The client sends an OCSP query to the CA during the TLS handshake to verify whether the certificate has been revoked. This process blocks the connection and may cause page loading delays if the network is poor.
            
        -   **Enabled**: Anti-DDoS Proxy performs the OCSP query and caches the result for 3,600 seconds. When a client initiates a TLS handshake request to the server, Anti-DDoS Proxy sends the cached OCSP response along with the certificate chain to the client. This avoids the blocking issue caused by client-side queries and improves HTTPS performance.
            
    -   **SM Certificate**: Only Anti-DDoS Proxy (Chinese Mainland) instances support uploading SM-based HTTPS certificates. Only the SM2 algorithm is supported.
        
        -   **Allow Access Only from SM Certificate-based Clients**: This switch is turned off by default.
            
            -   On: Only processes requests from clients with an installed SM certificate. 
                
                **Note**
                
                When enabled, TLS suite, mutual authentication, and OCSP stapling configurations for certificates using internationally accepted algorithms will not apply.
                
            -   Off: Processes requests from clients with an installed SM certificate and those with a certificate using internationally accepted algorithms.
                
        -   **SM Certificate**: You must upload an SM certificate to Certificate Management Service before selecting it.
            
        -   **SM Cipher Suites for HTTPS Support**: The following cipher suites are enabled by default and cannot be modified.
            
            -   ECC-SM2-SM4-CBC-SM3
                
            -   ECC-SM2-SM4-GCM-SM3
                
            -   ECDHE-SM2-SM4-CBC-SM3
                
            -   ECDHE-SM2-SM4-GCM-SM3
                
        
    
    ## **Advanced settings**
    
    -   **Enable HTTPS Redirection**: This setting is suitable for websites that support both HTTP and HTTPS. After you enable this setting, all HTTP requests are forcibly redirected to HTTPS requests on port 443 by default.
        
        **Important**
        
        -   You can enable this setting only if you select both the **HTTP** and **HTTPS** protocols and do not select the **Websocket** protocol.
            
        -   If you access a website over a non-standard HTTP port (other than 80) and enable force redirect to HTTPS, the access requests are redirected to HTTPS port 443 by default.
            
        
    -   **HTTP/2 Listener**: If this switch is turned on, clients that use HTTP/2 can access Anti-DDoS Proxy. However, Anti-DDoS Proxy still uses HTTP/1.1 for origin fetch. The specifications of the HTTP/2 feature are as follows:
        
        -   **Basic specifications**:
            
            -   Idle timeout after a connection is closed (http2\_idle\_timeout): 120 s
                
            -   Maximum number of requests per connection (http2\_max\_requests): 1,000
                
            -   Maximum number of concurrent streams per connection (http2\_max\_concurrent\_streams): 4
                
            -   Maximum size of the entire request header list after HPACK decompression (http2\_max\_header\_size): 256 K
                
            -   Maximum size of an HPACK-compressed request header field (http2\_max\_field\_size): 64 K
                
        -   **Configurable specifications**: You can **Upper Limit for HTTP/2 Streams**. This is the maximum number of concurrent streams allowed between the client and Anti-DDoS Proxy.
            
    -   **Set Forward Connection Timeout**: This is the idle timeout period for a persistent TCP connection established between a client and Anti-DDoS Proxy. It is the maximum wait time between two client requests.
        
        **Note**
        
        If no new request is received within the specified period, Anti-DDoS Proxy closes the connection to release resources.
        
    
5.  Enter the **Forwarding Settings** and click **Next**.
    
    ## Back-to-Origin settings
    
    -   **Back-to-origin Scheduling Algorithm**: If you configure multiple **Origin IP Addresses** or **Origin Domain Names**, you can change the load balancing algorithm or set weights for different servers to determine how traffic is distributed among the origin servers.
        
        **Method**
        
        **Scenarios**
        
        **Description**
        
        **Round-robin** (Default)
        
        Scenarios that use multiple origin servers and require high load balancing performance.
        
        All requests are distributed to all server addresses in turn. By default, all server addresses have the same weight. You can change the weights of servers. A larger weight indicates a higher probability of receiving requests.
        
        **IP hash**
        
        Scenarios that require session consistency. In extreme cases, load imbalance may occur.
        
        Requests from the same client IP address are always directed to the same origin server to ensure session consistency. You can set weights for servers while using the IP hash algorithm. This lets you distribute traffic based on server processing capabilities and prioritize servers with better performance.
        
        **Least time**
        
        Services that are highly sensitive to access speed and response latency, such as games and online transactions.
        
        The intelligent DNS parsing capability and the least time algorithm for origin fetch ensure the shortest latency for the entire link from the POP to the origin server.
        
    -   **Retry Back-to-origin Requests**: The number of health check probes to check the availability of the origin server for domain forwarding. The default value is 3. The retry mechanism works as follows:
        
        1.  The back-to-origin retry feature is triggered only when service traffic accesses an edge zone. When the edge zone detects that the origin server of a domain name is unavailable, it retries the origin fetch.
            
        2.  If the origin server is still unreachable after the maximum number of retries, it enters a silence period. During this period, no traffic is forwarded to the origin server, and no probes are sent.
            
        3.  After the silence period ends, the back-to-origin retry feature is triggered again based on service traffic. If the retry is successful, the origin server is reactivated.
            
    -   **Traffic Marking**:
        
        -   **Originating Port**
            
            The name of the HTTP header that contains the originating port of the client.
            
            In most cases, the `X-Forwarded-ClientSrcPort` header is used to record the originating port of the client. If you use a custom header to record the originating port of the client, specify the custom header for Originating Port. After Anti-DDoS Proxy forwards back-to-origin requests to your origin server, your origin server parses the custom header to obtain the originating port of the client. The steps to obtain the originating port of the client are similar to the steps to obtain the originating IP address of the client. For more information, see [Obtain the originating IP addresses of requests](/help/en/anti-ddos/anti-ddos-pro-and-premium/use-cases/obtain-the-originating-ip-addresses-of-requests#concept-40535-zh).
            
        -   **Originating IP Address**
            
            The name of the HTTP header that contains the originating IP address of the client.
            
            In most cases, the `X-Forwarded-For` header is used to record the originating IP address of the client. If you use a custom header to record the originating IP address of the client, specify the custom header for Originating IP Address. After Anti-DDoS Proxy forwards back-to-origin requests to your origin server, your origin server parses the custom header to obtain the originating IP address of the client.
            
        -   **Custom Header**
            
            You can add custom HTTP headers to requests that pass Anti-DDoS Proxy to mark the requests. To add custom HTTP headers, specify header names and values. After you create custom headers, Anti-DDoS Proxy adds the custom headers to the back-to-origin requests. This way, the backend servers can perform statistical analysis on the back-to-origin requests.
            
            -   Do not use the following default headers as custom headers:
                
                -   `X-Forwarded-ClientSrcPort`: This header is used to obtain the originating ports of clients that access Anti-DDoS Proxy (a Layer 7 proxy).
                    
                -   `X-Forwarded-ProxyPort`: This header is used to obtain the ports of listeners that access Anti-DDoS Proxy (a Layer 7 proxy).
                    
                -   `X-Forwarded-For`: This header is used to obtain the originating IP addresses of clients that access Anti-DDoS Proxy (a Layer 7 proxy).
                    
            -   Do not use standard HTTP headers (such as Host, User-Agent, Connection, and Upgrade) or widely-used custom HTTP headers (such as X-Real-IP, X-True-IP, X-Client-IP, Web-Server-Type, WL-Proxy-Client-IP, EagleEye-RPCID, EagleEye-TraceID, X-Forwarded-Cluster, and X-Forwarded-Proto). If you use the above headers, the original headers are overwritten.
                
            -   You can add up to five custom HTTP headers.
                
            
    -   **CNAME Reuse**: Select whether to enable CNAME reuse. After you enable CNAME reuse, you can add multiple domain names that are hosted on the same server to Anti-DDoS Proxy by pointing their DNS records to the same Anti-DDoS Proxy CNAME. You do not need to add a separate website configuration for each domain name. For more information, see [CNAME reuse](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/use-the-cname-reuse-feature#task-2323869).
        
        **Important**
        
        This parameter is supported only by Anti-DDoS Proxy (Outside Chinese Mainland).
        
    
    ## Other settings
    
    -   **Enable HTTP Redirection of Back-to-origin Requests**: If your website does not support HTTPS for origin fetch, you must enable this setting. After you enable this setting, all HTTPS requests are sent to the origin server over HTTP, and all Websockets requests are sent over Websocket. The default origin port is 80.
        
        **Note**
        
        If you access a website over a non-standard HTTPS port (other than 443) and enable HTTP for origin fetch, the access requests are redirected to HTTP port 80 of the origin server by default.
        
    -   **HTTP/2.0 Origin**: After you enable HTTP/2.0 for origin fetch, Anti-DDoS Proxy uses HTTP/2.0 to send requests to the origin server.
        
        **Warning**
        
        -   To configure this feature, contact your account manager.
            
        -   If your origin server does not support HTTP/2.0, do not configure this feature. Otherwise, your website becomes inaccessible.
            
        
    -   **Cookie Settings**
        
        -   **Delivery Status**: Enabled by default. Anti-DDoS Proxy inserts a cookie into the client, such as a browser, to differentiate clients or obtain client fingerprints. For more information, see [Configure HTTP flood protection](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/configure-accurate-access-control-rules).
            
            **Important**
            
            If you experience logon failures or session losses after you add your application to Anti-DDoS Proxy, you can try to disable this switch. Note that if you disable this switch, some HTTP flood protection features become ineffective.
            
        -   **Secure Attribute**: Disabled by default. If you enable this attribute, the cookie is sent only over HTTPS connections, not HTTP connections. This helps protect the cookie from being stolen.
            
            **Note**
            
            We recommend that you **enable** this attribute if your website service supports only HTTPS connections.
            
    -   **Configure New Connection Timeout Period**: The time that Anti-DDoS Proxy waits to establish a connection to the origin server.
        
        **Note**
        
        If a connection is not established within this period, the attempt is considered a failure.
        
    -   **Configure Read Connection Timeout Period**: The maximum time that Anti-DDoS Proxy waits for a response from the origin server after it establishes a connection and sends a read request.
        
    -   **Configure Write Connection Timeout Period**: The time that Anti-DDoS Proxy waits after sending data and before the origin server starts processing it.
        
        **Note**
        
        If Anti-DDoS Proxy fails to send all data to the origin server or the origin server does not start processing the data within this period, the attempt is considered a failure.
        
    -   **Back-to-origin Persistent Connections**: A TCP connection between a cache server and an origin server remains active for a period instead of closing after each request. This can waste resources. Enable **Back-to-origin Persistent Connections** to reduce connection establishment time and resource consumption, and to improve request processing efficiency and speed.
        
        -   **Requests Reusing Persistent Connections**: The number of HTTP requests that can be sent over a single TCP connection from Anti-DDoS Proxy to the origin server. This reduces latency and resource consumption caused by frequent connection establishment and termination.
            
            **Note**
            
            We recommend that you set this value to be less than or equal to the number of requests per persistent connection configured on the backend origin server, such as a WAF or SLB instance. This prevents service inaccessibility caused by connection termination.
            
        -   **Timeout Period of Idle Persistent Connections**: The maximum time that an idle persistent TCP connection from Anti-DDoS Proxy to the origin server can remain open in the connection pool of Anti-DDoS Proxy. If no new request is received within this period, the connection is closed to release system resources.
            
            **Note**
            
            We recommend that you set this value to be less than or equal to the timeout period configured on the backend origin server, such as a WAF or SLB instance. This prevents service inaccessibility caused by connection termination.
            
    

## **Validation and go-live**

After you complete the website configuration, follow this checklist to perform validation and go live. This helps prevent service interruptions.

-   **Core operations (Required)**
    
    1.  **Add back-to-origin IP addresses to the whitelist**: In the security policies of your origin server, such as a firewall or security group, add the back-to-origin IP address ranges of Anti-DDoS Proxy to the whitelist. This prevents traffic forwarded from Anti-DDoS Proxy to your origin server from being blocked. For more information, see [Add the back-to-origin IP addresses of Anti-DDoS Proxy to a whitelist](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/allow-back-to-origin-ip-addresses-to-access-the-origin-server#task-221713).
        
    2.  **Verify the configuration locally**: Before you switch the DNS record, modify the local `hosts` file to verify that the forwarding configuration works as expected. This helps prevent service interruptions. For more information, see [Verify traffic forwarding settings on a local machine](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/verify-the-forwarding-configurations-on-your-local-computer#task-2337245).
        
    3.  **Switch the DNS record**: After the local verification is successful, change the DNS record of your website domain name to the CNAME provided by Anti-DDoS Proxy. This operation switches your service traffic to Anti-DDoS Proxy for protection. For more information, see [Use a CNAME or an IP address to resolve a domain name to an Anti-DDoS Proxy instance](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/change-dns-records-to-protect-website-services#task-2325694).
        
-   **Optional operations**
    
    -   **Change the origin IP address**: If your origin server is an Alibaba Cloud ECS instance and its IP address is exposed, we recommend that you change the public IP address of the ECS instance. This prevents attackers from bypassing Anti-DDoS Proxy to attack your origin server. For more information, see [Static public IP address](/help/en/ecs/user-guide/public-ip-address#5e4c86d1aal0n).
        
    -   **Configure DDoS mitigation policies**: In addition to the default mitigation policies of Anti-DDoS Proxy (**Anti-DDoS Global Mitigation Policy**, **Intelligent Protection**, and **Frequency Control**), you can enable more protection features on the **Protection for Website Services** tab as needed. For more information, see [Protection for Website Services](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/use-the-intelligent-protection-feature).
        
        **Important**
        
        Enabling HTTP flood protection policies may insert a cookie into the client. For more information, see [Cookie insertion](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/configure-accurate-access-control-rules#8bc197f8b9q6e).
        
    -   **Configure CloudMonitor alerts**: Configure alert rules for common service metrics of Anti-DDoS Proxy, such as traffic and connections, and attack events, such as blackhole filtering and scrubbing events. This lets you receive timely alerts for anomalous activity and respond quickly. For more information, see [CloudMonitor alerts](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/use-the-alert-monitoring-feature-of-cloudmonitor#task-2078727).
        
    -   **Configure the log analysis service**: Enable the log analysis service to collect and store website access logs for 180 days by default. This is useful for business analysis and meeting classified protection compliance requirements. For more information, see [Quickly use the log analysis feature](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/use-the-log-analysis-feature#task-98586-zh).
        

## **Quotas and limits**

-   A domain name can be associated with a maximum of eight Anti-DDoS Proxy instances.
    
-   The total number of custom ports (other than 80 or 443) for all website configurations under an Anti-DDoS Proxy instance cannot exceed 10.
    
-   You can add a maximum of five custom header labels.
    

## **Reference**

### **ICP filing**

-   **ICP filing check and handling:** Anti-DDoS Proxy (Chinese Mainland) periodically checks the ICP filing status of protected domain names. If an ICP filing becomes invalid, Anti-DDoS Proxy (Chinese Mainland) stops forwarding traffic for the related services and displays a "The domain name has not completed ICP filing. Please update the filing status." message on the **Website Config** page.
    
-   **Dual ICP filing requirement:** If the origin server is an Alibaba Cloud product, it must meet the ICP filing requirements of both Anti-DDoS Proxy and the origin product. Otherwise, back-to-origin traffic forwarding will be affected. For more information, see the official documentation of each cloud product or contact technical support. For example, if the origin server is an ECS instance, you must obtain an ICP filing for the ECS instance. For more information, see [ICP filing check for servers](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check) and [ICP filing process](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview).
    
-   **Service recovery**: If you receive a notification that your ICP filing is invalid, update your filing information immediately to resume the service.
    

### **Delete a website configuration**

If a website configuration is no longer needed, you can delete it as follows:

1.  **Restore the DNS record**: Change the DNS record of the domain name so that it no longer points to the IP address of the Anti-DDoS Proxy instance, the Anti-DDoS Proxy CNAME, or the Sec-Traffic Manager CNAME.
    
    **Warning**
    
    If you delete the website configuration before you restore the DNS record, your service may be interrupted.
    
2.  **Delete the website configuration**
    
    -   **Manually delete**: On the **Website Config** page, find the target configuration and click **Delete** in the **Actions** column. For more information, see [Delete a website configuration](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/website-configurations-in-an-xml-file#462668e122cnc).
        
    -   **Automatically delete:** One month after the last Anti-DDoS Proxy instance under your account is released, the system automatically deletes all domain name and port forwarding configurations of Anti-DDoS Proxy under the account.
        

## **FAQ**

-   **Why do I get a 502 or 504 error when I access my website after I complete the configuration?**
    
    This error usually occurs because the origin fetch fails. Check the following items in order:
    
    1.  **Check the origin server firewall/security group**: Confirm that you have added the back-to-origin IP address ranges of Anti-DDoS Proxy to the whitelist.
        
    2.  **Check the "Enable HTTP for Origin Fetch" configuration**: If your origin server supports only HTTP (listening on port 80), but you have configured HTTPS in Anti-DDoS Proxy without enabling "Enable HTTP for Origin Fetch", the origin fetch will fail.
        
    3.  **Check the origin server status**: Confirm that the **Origin IP Address** is correct and that the origin server itself is running properly.
        
-   **Why does my browser report a certificate error after I enable HTTPS?**
    
    Check the following items:
    
    1.  **Certificate-domain name mismatch**: Make sure the certificate covers the domain name you added, including the `www` and root domains. For example, a certificate for `www.example.com` cannot be used for `example.com` unless it is a wildcard or multi-domain certificate.
        
    2.  **Incomplete certificate chain**: When you upload a certificate, make sure to upload the complete certificate chain (server certificate plus intermediate CA certificate).
        
    3.  **Expired certificate**: Check if the uploaded certificate is still valid.
        
-   **How can I confirm that my website traffic is passing through Anti-DDoS Proxy?**
    
    1.  **DNS query**: In the command line, run `ping <your domain name>` or `dig <your domain name>`. Check if the resolved address is the CNAME of the Anti-DDoS Proxy instance or the IP address it points to.
        
    2.  **Console reports**: On the reports page of the Anti-DDoS Proxy console, check if there is inbound traffic data.
        
    3.  **Origin server logs**: Check the web access logs of your origin server to confirm that the source IP addresses of requests belong to the back-to-origin IP address ranges of Anti-DDoS Proxy.
        
-   **My application logs record only the IP address of Anti-DDoS Proxy. How can I get the real visitor IP address?**
    
    This is expected. As a proxy, Anti-DDoS Proxy uses its back-to-origin IP addresses to access your origin server. To get the real visitor IP address, you need to configure your web server (such as Nginx or Apache) to extract the IP address from the `X-Forwarded-For` request header. For more information, see [Obtain the real IP addresses of clients after you configure an Anti-DDoS Proxy instance](/help/en/anti-ddos/anti-ddos-pro-and-premium/use-cases/obtain-the-originating-ip-addresses-of-requests#concept-40535-zh).
