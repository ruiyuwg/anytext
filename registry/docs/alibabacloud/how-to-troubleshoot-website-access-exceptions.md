This topic describes how to troubleshoot access exceptions on websites that are protected by Web Application Firewall (WAF).

## Procedure

If you cannot access a website that is protected by WAF, use the following methods to troubleshoot the exception:

1.  [Check whether the origin server is faulty](#section-d0f-ksp-1jy): Bypass WAF and check whether the origin server responds to requests as expected.
    
2.  [Check whether WAF blocks normal requests](#section-zfn-1zl-q2b): Disable protection modules and check whether WAF blocks normal requests.
    
3.  [Check whether the exception is a common exception](#section-ozr-xyl-q2b): Check whether the exception is a common exception and follow the instructions in the common access exceptions table to troubleshoot the exception.
    

For information about tools that you can use to troubleshoot the exception, see [Appendix: Common tools](#section-t3v-1br-qop).

## Check whether the origin server is faulty

To allow the website that you want to access to bypass WAF and check whether the origin server responds to requests as expected, perform the following steps:

1.  Disable the security groups, blacklists, whitelists, firewalls, and other security products on the origin server to prevent the back-to-origin IP addresses from being blocked.
    
2.  Modify the hosts file in your computer to map the domain name to the public IP address of the origin server. The origin server can be hosted on an Elastic Compute Service (ECS) instance, a Server Load Balancer (SLB) instance, or an on-premises server.
    
3.  Use a browser of your computer to access the website and check whether the exception persists.
    
    -   If you cannot access the website, the origin server is faulty. We recommend that you check the working status of the origin server, including processes, CPU utilization, memory usage, and web logs, and troubleshoot the exception.
        
    -   If you can access the website, the exception is not due to the origin server. Check whether the exception occurs because WAF blocks normal requests. For more information, see [Check whether WAF blocks normal requests](#section-zfn-1zl-q2b) in this topic.
        

## Check whether WAF blocks normal requests

To disable the protection modules of WAF and check whether WAF blocks normal requests, perform the following steps:

1.  Disable the **protection rules engine** for the domain name of the website and check whether the exception persists. For more information, see [Configure the protection rules engine feature](/help/en/waf/web-application-firewall-2-0/user-guide/configure-the-protection-rules-engine-feature#task-pxh-dxj-p2b).
    
    If you can access the website after you disable the protection rules engine, we recommend that you set the **Protection Rule Group** parameter to **Loose rule group** in the **Protection Rules Engine** section. By default, **Medium rule group** is selected. You can also obtain the URL of the blocked requests by using the Log Service for WAF feature. Then, configure a custom protection policy to allow all requests that are sent from the URL. For more information, see [Configure a custom protection policy](/help/en/waf/web-application-firewall-2-0/user-guide/create-a-custom-protection-policy#task-1796740).
    
2.  If the exception persists after you disable the **protection rules engine**, disable **HTTP Flood Protection** for the domain name of the website. For more information, see [Configure HTTP flood protection](/help/en/waf/web-application-firewall-2-0/user-guide/configure-http-flood-protection#task-2371022).
    
    If you can access the website after you disable HTTP flood protection, we recommend that you set the Mode parameter to **Prevention** in the **HTTP Flood Protection** section. If Mode is already set to **Prevention**, skip this step. You can also obtain the URL of the blocked requests by using the Log Service for WAF feature. Then, configure a custom protection policy to allow all requests that are sent from the URL. For more information, see [Configure a custom protection policy](/help/en/waf/web-application-firewall-2-0/user-guide/create-a-custom-protection-policy#task-1796740).
    
    If the exception persists after you disable **HTTP Flood Protection**, the exception occurs not because WAF blocks normal requests. For more information, see [Check whether the exception is a common exception](#section-ozr-xyl-q2b) in this topic.
    

## Check whether the exception is a common exception

If the exception disappears after you disable WAF and continues to occur after you enable WAF, follow the instructions in the following table to trobleshoot the exception.

**Issue**

**Description**

**Cause**

**Solution**

410 Gone error

The 410 page appears and prompts that the website is temporarily unavailable and that the protocol and port are not added to WAF, or the HTTP status code 410 is returned.

The domain name of the website is not added to WAF or the port that is used to access the website is not specified to receive and forward requests. For example, if the port 443 is used to access the website, but the port is not specified to receive and forward requests, the 410 page appears.

Add the domain name of the website to WAF or specify the port in the WAF console. For more information, see [Add a domain name](/help/en/waf/web-application-firewall-2-0/user-guide/add-a-domain-name-to-waf#task-1796689).

405 Method Not Allowed error

The 405 page appears and prompts that the access is blocked, or the HTTP status code 405 is returned.

The access request is blocked by a custom protection policy or the protection rules engine.

1.  Disable the custom protection policy for the domain name of the website and check whether the error message appears. For more information, see [Configure a custom protection policy](/help/en/waf/web-application-firewall-2-0/user-guide/create-a-custom-protection-policy#task-1796740).
    
    If the 405 page no longer appears, the custom protection policy blocks the access request. Find and delete the custom protection policy.
    
2.  If the 405 page still appears after you disable the custom protection policy, disable the protection rules engine for the domain name of the website and check whether the exception persists. For more information, see [Configure the protection rules engine](/help/en/waf/web-application-firewall-2-0/user-guide/configure-the-protection-rules-engine-feature#task-pxh-dxj-p2b) feature. Disable the **protection rules engine** for the domain name of the website and check whether the exception persists.
    
    If you can access the website after you disable the protection rules engine, we recommend that you set the **Protection Rule Group** parameter to **Loose rule group** in the **Protection Rules Engine** section. By default, **Medium rule group** is selected. You can also obtain the URL of the blocked requests by using the Log Service for WAF feature. Then, configure a custom protection policy to allow all requests that are sent from the URL. For more information, see [Configure a custom protection policy](/help/en/waf/web-application-firewall-2-0/user-guide/create-a-custom-protection-policy#task-1796740).
    

302 Found error

The system prompts that the connection is reset. The HTTP status code 302 is returned and the Set-Cookie header is included in the response.

Access from an IP address triggers HTTP flood protection.

Disable **HTTP Flood Protection** for the domain name of the website. For more information, see [Configure HTTP flood protection](/help/en/waf/web-application-firewall-2-0/user-guide/configure-http-flood-protection#task-2371022).

If you can access the website after you disable HTTP flood protection, we recommend that you set the Mode parameter to **Prevention** in the **HTTP Flood Protection** section. If Mode is already set to **Prevention**, skip this step. You can also obtain the URL of the blocked requests by using the Log Service for WAF feature. Then, configure a custom protection policy to allow all requests that are sent from the URL. For more information, see [Configure a custom protection policy](/help/en/waf/web-application-firewall-2-0/user-guide/create-a-custom-protection-policy#task-1796740).

HTTPS access exceptions

After a client sends an HTTPS request, the certificate `www.notexist.com` is returned.

WAF requires the browser to support Server Name Indication (SNI). However, the browser of the client may not support SNI.

By default, macOS and iOS operating systems support SNI. For Windows and Android operating systems, make sure that the operating systems are compatible with SNI. For more information, see [HTTPS access exceptions arising from SNI compatibility (Certificate not trusted")](/help/en/waf/https-access-exceptions-arising-from-sni-compatibility#concept-mrv-5wl-q2b).

502 Bad Gateway error

When you access a website, a blank screen error occurs and the HTTP status code 502 is returned.

When the origin server experiences a packet loss or becomes unreachable, WAF returns the HTTP status code 502.

1.  Check whether security software or policies are configured for the origin server, such as a blacklist, the iptables program, a firewall, SafeDog, or Yunsuo. If security software or policies are configured for the origin server, stop or uninstall the security software or policies, clear the blacklist, and then check whether the exception is resolved.[Allow access from back-to-origin CIDR blocks of WAF](/help/en/waf/web-application-firewall-3-0/user-guide/allow-access-from-back-to-origin-cidr-blocks-of-waf)
    
2.  Bypass WAF to check whether the website can be accessed. For more information, see [Check whether the origin server is faulty](#section-d0f-ksp-1jy) in this topic.
    
    -   If you cannot access the website, the origin server is faulty. We recommend that you check the working status of the origin server, including processes, CPU utilization, memory usage, and web logs, and troubleshoot the exception.
        
    -   If you can access the website, the exception is not due to the origin server. Check whether the exception occurs because WAF blocks the requests.
        
    

504 Gateway Timeout error

The upstream server cannot complete your request in time and the HTTP error code 504 is returned.

-   The backend server cannot handle all requests that are sent to the origin server.
    
-   A persistent connection times out.
    

-   Check whether the exception occurs because the backend server cannot handle all requests that are sent to the origin server. The 504 Gateway Timeout error occurs because of an excessive number of connections or excessively high CPU utilization.
    
-   Check whether a persistent connection between a client and a server times out. For more information, see [What do I do if a persistent connection times out?](/help/en/waf/what-do-i-do-if-a-persistent-connection-times-out)
    

Failure to ping a domain name

You are unable to ping the domain name, and you receive a text message that DDoS attacks occur in WAF and blackhole filtering is triggered.

WAF cannot mitigate DDoS attacks.

Activate Anti-DDoS to mitigate DDoS attacks. For more information, see [Comparison of Alibaba Cloud Anti-DDoS solutions](/help/en/anti-ddos/overview#concept-72017-zh).

Unbalanced server loads

Loads are unbalanced among multiple ECS instances in the backend.

WAF uses Layer 4 hash algorithms for IP addresses. If Anti-DDoS Pro or Anti-DDoS Premium is deployed together with WAF, or SLB uses Layer 4 forwarding, ECS instances may have unbalanced loads.

Configure ECS to use SLB for which WAF is enabled to route and protect Layer 7 traffic, and enable cookie-based session persistence and load balancing.

WeChat or Alipay callback failure

WeChat or Alipay callback fails.

The possible reason is that HTTP flood protection rules block high-frequency requests, or HTTPS callback is used but WeChat or Alipay does not support SNI.

-   HTTP Flood Protection:
    
    1.  Disable **HTTP Flood Protection** for the domain name of the website. For more information, see [Configure HTTP flood protection](/help/en/waf/web-application-firewall-2-0/user-guide/configure-http-flood-protection#task-2371022).
        
    2.  If you can access the website after you disable HTTP flood protection, we recommend that you set the Mode parameter to **Prevention** in the **HTTP Flood Protection** section. If Mode is already set to **Prevention**, skip this step. You can also obtain the URL of the blocked requests by using the Log Service for WAF feature. Then, configure a custom protection policy to allow all requests that are sent from the URL. For more information, see [Configure a custom protection policy](/help/en/waf/web-application-firewall-2-0/user-guide/create-a-custom-protection-policy#task-1796740).
        
-   SNI: Configure WeChat or Alipay to bypass WAF and use the IP address of the ECS or SLB instance. For more information, see [HTTPS access exceptions arising from SNI compatibility ("Certificate not trusted")](/help/en/waf/https-access-exceptions-arising-from-sni-compatibility#concept-mrv-5wl-q2b).
    

## Appendix: Common tools

-   Chrome DevTools: You can use this tool that is provided by Google Chrome to view the loading status of elements on pages. Press **F12** to open the tool and go to the **Network** tab.
    
-   ping: You can use the ping test tool to analyze and determine network faults. The tool is supported in Windows and Linux. In Windows, press Win+R and enter cmd to open Command Prompt. Command: `ping domain name or IP address`.
    
-   traceroute for Linux and tracert for Windows: You can use the link tracing tools to detect the hop in which the packet loss occurs. In Windows, press Win+R and enter cmd to open Command Prompt. Command: `tracert -d domain name or IP address`.
    
-   nslookup: You can use this tool to detect whether domain name resolution works as expected. In Windows, press Win+R and enter cmd to open Command Prompt. Command: `nslookup domain name`.
