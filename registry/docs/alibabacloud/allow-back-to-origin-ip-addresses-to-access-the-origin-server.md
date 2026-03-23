Add the back-to-origin IP addresses of Anti-DDoS Pro or Anti-DDoS Premium to the whitelist of your origin server's security software to prevent legitimate traffic from being blocked.

## Why this is required

Anti-DDoS Pro and Anti-DDoS Premium work as reverse proxies in Full NAT mode. After you add your website for protection, all scrubbed traffic is forwarded to your origin server from a limited set of back-to-origin IP addresses. Each address forwards a large volume of requests.

Without whitelisting, the origin server's security software (firewalls, security groups, or other DDoS mitigation policies) may treat these IP addresses as malicious due to the high request volume. This causes:

-   **Blocked traffic:** The origin server blocks or rate-limits back-to-origin IP addresses, making your website inaccessible.
    
-   **502 errors:** The origin server does not respond to forwarded requests because its firewall blocks the back-to-origin IP addresses.
    

**Important**

Add the back-to-origin IP addresses to the whitelist **before** you change the DNS record to route traffic through Anti-DDoS Pro or Anti-DDoS Premium. This prevents service interruptions during the switchover.

## Prerequisites

-   An Anti-DDoS Pro or Anti-DDoS Premium instance
    
-   A website added to Anti-DDoS Pro or Anti-DDoS Premium for protection
    
-   Administrative access to the security software, firewall, or security group on your origin server
    

## Procedure

1.  Log on to the [Anti-DDoS Proxy console](https://yundun.console.alibabacloud.com/?p=ddoscoo#/overview/layer4/cn-hangzhou).
    
2.  In the top navigation bar, select the region of your instance.
    
    -   **Anti-DDoS Proxy (Chinese Mainland)**: Select **Chinese Mainland**.
        
    -   **Anti-DDoS Proxy (Outside Chinese Mainland)**: Select **Outside Chinese Mainland**.
        
3.  In the left-side navigation pane, choose **Provisioning** > **Website Config**.
    
4.  In the upper-right corner of the **Website Config** page, click **View Back-to-origin CIDR Blocks**.
    
5.  In the dialog box that appears, copy the back-to-origin IP addresses.
    
6.  Add the copied IP addresses to the whitelist of the security software on your origin server. This may include:
    
    -   Firewall rules (for example, iptables or a host-based firewall)
        
    -   Security group inbound rules
        
    -   Web Application Firewall (WAF) whitelists
        
    -   Third-party security software on the origin server
        

> After you whitelist the back-to-origin IP addresses, consider restricting your origin server to accept HTTP and HTTPS traffic only from those addresses. This forces all web traffic through Anti-DDoS Pro or Anti-DDoS Premium for scrubbing before it reaches your origin server. For more information, see [Configure ACLs for the origin server](/help/en/anti-ddos/anti-ddos-pro-and-premium/use-cases/configure-acls-for-the-origin-server).

## Verify the configuration

After you add the back-to-origin IP addresses to the whitelist:

1.  Access your website through its domain name.
    
2.  Confirm that the website loads without errors.
    
3.  Check that no 502 errors or connection timeouts occur.
    

If the website is still inaccessible, verify that all back-to-origin CIDR blocks are included in the whitelist and that no other security software on the origin server is blocking the traffic.

> Back-to-origin IP address ranges may change over time. Periodically check the **View Back-to-origin CIDR Blocks** dialog box in the Anti-DDoS Proxy console and update the whitelist on your origin server accordingly.

## Related topics

-   Configure access control for [ALB (Application Load Balancer)](/help/en/slb/application-load-balancer/user-guide/network-acls) or [CLB (Classic Load Balancer)](/help/en/slb/classic-load-balancer/user-guide/overview-3)
    
-   [How do I handle the issues of slow response, high latency, and access failure on my service that is protected by an Anti-DDoS Pro or Anti-DDoS Premium instance?](/help/en/anti-ddos/how-to-handle-slow-response-and-high-latency-and-access-failure-on-my-service)
    
-   [What do I do if the 502 errors are returned on my website that is protected by an Anti-DDoS Pro or Anti-DDoS Premium instance?](/help/en/anti-ddos/what-do-i-do-if-the-502-errors-are-returned)
