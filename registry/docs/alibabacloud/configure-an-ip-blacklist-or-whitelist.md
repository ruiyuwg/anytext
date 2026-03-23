An IP address blacklist or whitelist filters user requests, and blocks or allows requests from specific IP addresses. The IP list feature can restrict access sources and protect points of presence (POPs) from IP theft and attacks.

## Usage notes

-   By default, the IP list feature is disabled. The IP address blacklist and whitelist are mutually exclusive. You can configure only one of the lists.
    
-   If an IP address is added to the blacklist, requests from the IP address can reach POPs but are rejected by the POPs, the HTTP 403 status code is returned, and requests from the IP address are recorded in the logs of DCDN.
    
-   The IP address blacklist and whitelist identify IP addresses based on Layer 7 HTTP IP recognition techniques. You are charged for network traffic that is generated when POPs block malicious requests. If clients access POPs over HTTPS, you are also charged for HTTPS requests.
    
-   Some Internet service providers (ISPs) may assign **private IP addresses** to clients in specific regions. Therefore, POPs may receive requests from private IP addresses.
    
    **Note**
    
    Private IP addresses are of the following types:
    
    -   Type-A private IP addresses: 10.0.0.0 to 10.255.255.255. Subnet mask: 10.0.0.0/8.
        
    -   Type-B private IP addresses: 172.16.0.0 to 172.31.255.255. Subnet mask: 172.16.0.0/12.
        
    -   Type-C private IP addresses: 192.168.0.0 to 192.168.255.255. Subnet mask: 192.168.0.0/16.
        
    

## IP address verification modes

When a client connects to a POP, the client IP address and the IP address that is used by the client to connect to the POP are determined based on whether a proxy is used. For example, the client IP address is `10.10.10.10`, and the proxy IP address is `192.168.0.1`.

-   If no proxy is used when a client connects to a POP, the following rules apply:
    
    -   The value of the X-Forwarded-For (XFF) header in the user request is `10.10.10.10`.
        
    -   The client IP address `10.10.10.10` is the IP address that is used by the client to connect to the POP.
        
-   If a proxy is used when a client connects to a POP, the following rules apply:
    
    -   The value of the XFF header in the user request is `10.10.10.10,192.168.0.1`.
        
    -   The client IP address `10.10.10.10` is the first IP address in the XFF header.
        
    -   The IP address that is used by the client to connect to a POP is the IP address of the proxy, which is `192.168.0.1`.
        
    -   The client IP address is not the IP address that is used by the client to connect to the POP.
        

The IP list feature of DCDN supports three IP address verification modes. The following table describes the verification modes.

**IP address verification mode**

**Description**

**Determine based on the XFF header**

This is the default mode. This mode verifies only the client IP address. The client IP address is the first IP address in the XFF header in a client request.

If a proxy is used when a client connects to a POP, the client uses the IP address of the proxy to connect to the POP. In this case, access control in this verification mode may not be accurate.

**Determine based on the IP address that is used to connect to the POP**

This mode verifies only the IP address that is used by a client to connect to a POP.

**Determine based on the XFF header and the IP address that is used to connect to the POP**

This mode verifies the following IP addresses:

-   The first IP address in the XFF header, which is the client IP address.
    
-   The IP address that is used by a client to connect to a POP.
    

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  In the left-side navigation tree of the domain name, click **Access Control**.
    
5.  Click the **IP Blacklist or Whitelist** tab.
    
6.  Click **Modify** and configure a **Blacklist** or **Whitelist** as prompted.
    
    ![配置IP黑白名单](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1528944961/p69429.png)
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    The following types of IP address lists are supported:
    
    -   **Blacklist**
        
        Requests from IP addresses in the blacklist are blocked.
        
    -   **Whitelist**
        
        Only requests from IP addresses in the whitelist are allowed to access resources on the POPs.
        
    
    **Rules**
    
    **Format**
    
    1.  You can enter IP addresses or CIDR blocks.
        
    2.  Separate multiple IP addresses or CIDR blocks with line feeds.
        
    3.  You can enter IPv4 addresses or CIDR blocks:
        
        1.  IPv4 address example: `192.168.0.1`.
            
        2.  IPv4 CIDR block example: `192.168.0.0/24`.
            
        3.  You cannot use `0.0.0.0/0` to specify all IPv4 addresses. To specify all IPv4 addresses, use the following subnets:
            
            1.  `0.0.0.0/1`
                
            2.  `128.0.0.0/1`
                
    4.  You can enter IPv6 addresses or CIDR blocks:
        
        1.  IPv6 address example: `FC00:AA3:0:23:3:300:300A:1234`.
            
        2.  IPv6 CIDR block example: `FC00:0AA3:0000:0000:0000:0000:0000:0000/48`.
            
        3.  The letters in IPv6 addresses are not case-sensitive. Examples: `FC00:AA3:0:23:3:300:300A:1234` and `fc00:0aa3:0000:0023:0003:0300:300a:1234`.
            
        4.  `: :` is not supported. For example, `FC00:0AA3::0023:0003:0300:300A:1234` is invalid.
            
        5.  You cannot use `0000:0000:0000:0000:0000:0000:0000:0000/0` to specify all IPv6 addresses. To specify all IPv6 addresses, use the following subnets:
            
            1.  `0000:0000:0000:0000:0000:0000:0000:0000/1`
                
            2.  `8000:0000:0000:0000:0000:0000:0000:0000/1`
                
    
    **Size**
    
    The value of Rules can be up to 30 KB in size. You can enter up to about 700 IPv6 addresses/CIDR blocks or 2,000 IPv4 addresses/CIDR blocks in this field based on the average size of IP addresses and CIDR blocks. If you want to block more IP addresses, [activate Dynamic Content Delivery Network (DCDN)](/help/en/edge-security-acceleration/dcdn/getting-started/activate-dcdn#task-alv-1fk-xdb) and [configure a region blacklist](/help/en/edge-security-acceleration/dcdn/user-guide/configure-a-region-blacklist).
    
    **IP Rules**
    
    You can select one of the following rules:
    
    1.  **Determine based on the XFF header**
        
    2.  **Determine based on the IP address that is used to connect to the POP**
        
    3.  **Determine based on the XFF header and the IP address that is used to connect to the POP**.
        
    
    If the **XFF header** does not include an IP address, determine based on **the IP address that is used to connect to the POP**.
    
7.  Click **OK**.
    

## Sample configurations

-   **Whitelist**
    
    Rules: `192.168.2.0/24`
    
    Expected result: Only IP addresses that range from `192.168.2.1` to `192.168.2.254` can access the resources of the specified domain name.
    
-   **Blacklist**
    
    Rules: `192.168.0.1`
    
    Expected result: The IP address `192.168.0.1` is not allowed to access the resources of the specified domain name.
    

## **FAQ**

-   [When I configure an IP address blacklist or whitelist, the number of IP addresses is limited. Is a CIDR block considered one IP address or multiple IP addresses?](/help/en/edge-security-acceleration/dcdn/user-guide/access-control-faq#400df775f5yqr)
    
-   [Why can I still use an IP address in the IP address blacklist to request resources?](/help/en/edge-security-acceleration/dcdn/user-guide/access-control-faq#74b4d62a20aa1)
    
-   [How do I retrieve the originating IP addresses of clients?](/help/en/edge-security-acceleration/dcdn/user-guide/access-control-faq#67738ed5ea19r)
    
-   [Can I obtain the IP addresses of POPs that I want to add to the origin whitelist?](/help/en/edge-security-acceleration/dcdn/user-guide/access-control-faq#2ba4060f12tyh)
    

## Related API operations

[BatchSetDcdnDomainConfigs](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-batchsetdcdndomainconfigs): configures an IP address blacklist or whitelist for multiple domain names at a time. The **ip\_black\_list\_set** parameter specifies an IP address blacklist and the **ip\_allow\_list\_set** parameter specifies an IP address whitelist.
