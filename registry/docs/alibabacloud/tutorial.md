Before using Web Application Firewall (WAF) to protect your web services, you must add your website to WAF. This topic describes how to add a website to WAF.

## Onboarding types

WAF supports two onboarding types: CNAME record and transparent proxy mode. HTTP 1.0, HTTP 1.1, and HTTP 2.0 are supported by default. You can select an onboarding type as needed.

**Note**

If your website supports the HTTP 2.0 protocol, enable the **HTTP2** switch to protect your HTTP 2.0 services.

**Differences**

**CNAME record**

**Transparent proxy**

Concept

Add information about the website that you want to protect to WAF and modify the DNS record of the domain name. This forwards web requests from the origin server to WAF for protection.

Add information about the website that you want to protect to WAF. You do not need to modify the DNS record of the domain name. Web requests from the origin server are forwarded to WAF for protection.

Supported origin servers

All origin servers deployed on or outside Alibaba Cloud.

Origin servers that are deployed on ECS instances or Internet-facing SLB instances.

Scope of onboarding

You can add only one domain name at a time.

You can add all domain names that belong to an instance.

Back-to-origin settings required

Yes

No

DNS record modification required

Yes. You must modify the DNS record.

No. You do not need to modify the DNS record.

Origin server protection required

Yes. The origin server is at risk of direct attacks. Configure protection for the origin server.

No. You do not need to configure protection for the origin server.

Limits

None.

-   Due to limitations in the underlying network architecture, the transparent proxy mode is supported only in some regions.
    
-   The transparent proxy mode does not support internal-facing SLB instances.
    
-   The transparent proxy mode does not support IPv6. The number of traffic redirection ports that you can configure is also limited.
    
-   The transparent proxy mode provides default protection settings that cannot be modified. You must add a domain name before you can edit domain-level protection rules.
    

For more information about the limits of the transparent proxy mode, see [Transparent proxy mode](/help/en/waf/web-application-firewall-2-0/user-guide/transparent-proxy-mode#section-nbe-3u9-fpl).

## CNAME record

1.  Go to the [Add Domain Name](https://yundun.console.aliyun.com/?p=waf#/waf/cn/manage/domain/add) page.
    
2.  Add a domain name. Add information about your website, such as the domain name, to WAF and configure back-to-origin settings.
    
    **Configuration item**
    
    **Description**
    
    **Domain Name**
    
    Enter the domain name of the website that you want to protect.
    
    **Protection Resource**
    
    Select the type of protection resource that you want to use as needed.
    
    **Protocol Type**
    
    Select the protocol type that your website supports as needed. You can select **Enable Force Redirect To HTTPS**, **Enable HTTP For Back-to-origin Traffic**, and **Enable Origin SNI**.
    
    **Destination Server Port**
    
    Based on the selected **Protocol Type**, set the port that the origin server uses to provide services as needed.
    
    **Important**
    
    If the origin server uses a port other than HTTP port 80 or HTTPS port 443, specify a custom server port within the range of ports that WAF supports. For more information, see [Ports supported by WAF](/help/en/waf/web-application-firewall-2-0/user-guide/view-the-ports-supported-by-waf#task-1796740).
    
    **Origin Server Address**
    
    Set the address of the origin server to which WAF forwards requests. The following options are supported:
    
    -   IP: The public IP address of an SLB instance or an ECS instance, or the IP address of a server in a data center not deployed on Alibaba Cloud.
        
    -   Domain Name (such as CNAME): The back-to-origin domain name of the origin server cannot be the same as the website domain name that you want to protect. Only IPv4 is supported for back-to-origin traffic.
        
    
    **Load Balancing Algorithm**
    
    If you specify multiple origin server addresses, select a load balancing algorithm for the servers as needed.
    
    **Whether Layer 7 Proxy, Such as Anti-DDoS Proxy, or Alibaba Cloud CDN, Is Deployed in Front of WAF**
    
    Specify whether another Layer 7 proxy service, such as Anti-DDoS Proxy or CDN, is enabled for your website before you add the website to WAF.
    
    **Enable Traffic Mark**
    
    Specify whether to enable the traffic mark feature.
    
    For more information, see [Add a domain name](/help/en/waf/web-application-firewall-2-0/user-guide/add-a-domain-name-to-waf#task-1796689).
    
3.  Verify the domain name settings in WAF. To prevent service interruptions, do not modify the DNS record of the domain name before the forwarding settings take effect. For more information, see [Local verification](/help/en/waf/web-application-firewall-2-0/user-guide/verify-domain-name-settings).
    
4.  Modify the DNS record of the domain name to redirect website traffic to WAF for protection.
    
    The following steps describe how to modify a DNS record using Alibaba Cloud DNS as an example.
    
    1.  Obtain the CNAME address or IP address from WAF. For more information, see [Obtain the CNAME address of WAF](/help/en/waf/web-application-firewall-2-0/user-guide/change-a-dns-record#section-toq-8k1-sw3).
        
    2.  Go to the [Domain Name Resolution](https://dnsnext.console.alibabacloud.com/#/dns/domainList) page of the Alibaba Cloud DNS console. Find the domain name that you want to manage and click **DNS Settings** in the **Actions** column. Change the CNAME record to the CNAME address that is provided by WAF.
        
    
    For more information, see [Modify the DNS record of a domain name](/help/en/waf/web-application-firewall-2-0/user-guide/change-a-dns-record#task-2118186).
    
5.  Verify that WAF protection is in effect. For more information, see [Step 6](/help/en/waf/web-application-firewall-3-0/user-guide/verify-domain-name-settings#077f45c05dplx).
    

After you complete these steps, your website is added to WAF. To implement comprehensive security protection, complete the following configurations.

-   Upload an HTTPS certificate
    
    If your website uses the HTTPS protocol, upload a valid HTTPS certificate after you add the domain name. This ensures that WAF can process HTTPS traffic. For more information, see [Add a domain name](/help/en/waf/web-application-firewall-2-0/user-guide/add-a-domain-name-to-waf#section-jo2-hwu-mbj).
    
-   Whitelist the back-to-origin IP address CIDR blocks of WAF
    
    After you add your website to WAF, WAF forwards traffic to your origin server from specific IP address CIDR blocks. To prevent your origin server's security software from blocking these IP addresses, add the back-to-origin IP address CIDR blocks of WAF to a whitelist. For more information, see [Whitelist the back-to-origin IP address CIDR blocks of WAF](/help/en/waf/web-application-firewall-2-0/user-guide/allow-access-from-the-back-to-origin-cidr-blocks-of-waf#task-hng-pgr-bgb).
    
-   Configure protection for the origin server
    
    For security purposes, configure an access control policy for your origin server to allow inbound traffic only from the back-to-origin IP address CIDR blocks of WAF. This prevents attackers from bypassing WAF to attack your origin server. For more information, see [Configure protection for an origin server](/help/en/waf/web-application-firewall-2-0/user-guide/configure-protection-for-an-origin-server#task-p5p-h3c-p2b).
    
-   Configure custom TLS settings
    
    If a website that is protected by WAF uses HTTPS to transmit data, you can customize the TLS protocol versions and cipher suites for the domain name. For more information, see [Configure custom TLS settings](/help/en/waf/web-application-firewall-2-0/user-guide/configure-custom-tls-settings#task-2035528).
    

## Transparent proxy

1.  Go to the [Add Domain Name](https://yundun.console.aliyun.com/?p=waf#/waf/cn/manage/domain/add) page in the WAF console. Set **Connection Type** to **Transparent Proxy Mode**.
    
2.  Add a domain name.
    
    **Configuration item**
    
    **Description**
    
    **Domain Name**
    
    Enter the website domain name.
    
    **SLB-based Domains/Layer 7 SLB-based Domains/Layer 4 SLB-based Domains/ECS-based Domains**
    
    Select an instance type and a port. WAF supports enabling the transparent proxy mode for the service ports of the following instance types: **ALB**, **Layer 7 SLB**, **Layer 4 SLB**, and **ECS**.
    
    **Whether Layer 7 Proxy, Such as Anti-DDoS Proxy, or Alibaba Cloud CDN, Is Deployed in Front of WAF**
    
    Specify whether another Layer 7 proxy service, such as Anti-DDoS Pro/Premium or CDN, is enabled for your website before you add the website to WAF.
    
    **Enable Traffic Mark**
    
    Specify whether to enable the traffic mark feature.
    
    For more information, see [Transparent proxy mode](/help/en/waf/web-application-firewall-2-0/user-guide/transparent-proxy-mode#task-2538763).
    
3.  Verify that WAF protection is in effect. For more information, see [Step 6](/help/en/waf/web-application-firewall-3-0/user-guide/verify-domain-name-settings#077f45c05dplx).
    

## Integrate WAF with other cloud services

In addition to adding a website to WAF, you can integrate WAF with other Alibaba Cloud services, such as Anti-DDoS and CDN, to build a comprehensive security system.

-   [Jointly deploy Anti-DDoS Proxy and WAF to enhance website protection](/help/en/waf/web-application-firewall-2-0/user-guide/protect-a-website-by-using-both-anti-ddos-pro-or-anti-ddos-premium-and-waf#task680): To defend your website against both web application attacks and DDoS attacks, you can deploy Anti-DDoS Proxy and WAF in front of your origin server.
    
-   [Deploy WAF and CDN to provide WAF protection for domain names that have content acceleration enabled](/help/en/waf/web-application-firewall-2-0/user-guide/use-waf-together-with-cdn#task-1797345): To defend your website against web application attacks and accelerate content delivery using CDN, you can deploy CDN and WAF in front of your origin server.
    

## What to do next

After you add your website to WAF, its traffic is protected. WAF provides multiple protection modules to help your website defend against different types of security threats. The **Web Intrusion Prevention - Protection Rules Engine** and **Access Control/Throttling - HTTP Flood Protection** are enabled by default. They are used to defend against common web application attacks, such as SQL injection, cross-site scripting (XSS), and webshell uploads, and HTTP flood attacks. You must manually enable other protection modules and configure specific protection rules. For more information, see [Overview of website protection configurations](/help/en/waf/web-application-firewall-2-0/user-guide/overview-4#concept-tzp-g2m-42b).
