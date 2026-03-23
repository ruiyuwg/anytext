Anti-DDoS Proxy offers a feature for blacklisting or whitelisting IP addresses, allowing you to control access to an Anti-DDoS Proxy instance by specifying which source IP addresses are denied or allowed. This setting applies to all services associated with the instance. This topic outlines the steps to configure the blacklists and whitelists for IP addresses.

## Introduction

An Anti-DDoS Proxy instance denies requests from IP addresses on the blacklist and allows those on the whitelist. If an IP address is on both the blacklist and the whitelist, the **whitelist takes precedence**.

Anti-DDoS Proxy supports both the **IP-address-based** and the **domain-name-based** blacklist and whitelist features.

-   IP-address-based feature affects all services added to an instance.
    
-   Domain-name-based feature only affects domain names. For more information, see [Configure blacklists and whitelists for domain names](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/configure-blacklists-and-whitelists-for-domain-names).
    

## Validity period

-   **Blacklist**:
    
    -   **Custom blacklist**: Permanently effective.
        
    -   **Blacklist issued by the intelligent protection algorithm**: This dynamic blacklist targets malicious IP addresses. The blocking lasts from a minimum of 5 minutes to a maximum of 1 hour. For IPs that frequently launch attacks, the blocking period may automatically extend.
        
-   **Whitelist**: Only custom whitelists are supported and are permanently effective.
    

## **Limits**

-   You can add up to 2,000 IP addresses or CIDR blocks to the blacklists and another 2,000 to the whitelists for all Anti-DDoS Proxy instances under the same Alibaba Cloud account.
    
-   To add an IP address from the whitelist to the blacklist, you must first remove it from the whitelist.
    
-   Configuration restrictions for blacklist and whitelist:
    
    -   IPv4-only instances support IPv4 addresses or CIDR blocks, while IPv6-only instances support IPv6 addresses or CIDR blocks.
        
    -   IPv4 CIDR blocks range from /8 to /32, and IPv6 CIDR blocks range from /32 to /128.
        
    -   IPv4 addresses cannot be set to 0.0.0.0 or 255.255.255.255, and IPv6 addresses cannot be set to :: or ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff.
        

## Prerequisites

An Anti-DDoS Proxy (Chinese Mainland) or Anti-DDoS Proxy (Outside Chinese Mainland) instance is purchased. For more information, see [Purchase an Anti-DDoS Proxy instance](/help/en/anti-ddos/anti-ddos-pro-and-premium/getting-started/purchase-an-anti-ddos-pro-or-anti-ddos-premium-instance#task-2415749).

## Procedure

1.  Log on to the [Anti-DDoS Proxy console](https://yundun.console.alibabacloud.com/?p=ddoscoo#/overview/layer4/cn-hangzhou).
    
2.  In the top navigation bar, select the region of your instance.
    
    -   **Anti-DDoS Proxy (Chinese Mainland)**: Choose the **Chinese Mainland** region.
        
    -   **Anti-DDoS Proxy (Outside Chinese Mainland)**: Choose the **Outside Chinese Mainland** region.
        
3.  In the left-side navigation pane, choose **Mitigation Settings** > **General Policies**.
    
4.  On the **Protection for Infrastructure** tab, select the desired Anti-DDoS Proxy instance from the list on the left.
    
    You can find an instance by its ID or description.
    
5.  Go to the **Blacklist and Whitelist (IP address-based)** section and click **Settings**.
    
6.  In the **Configure Blacklist and Whitelist** panel, select **Blacklist** or **Whitelist** to manage the respective lists.
    
    Use commas to separate multiple entries. IP address or subnet mask format is supported.
    
    Once configured, you can batch delete, download, or clear both the blacklist and whitelist.
