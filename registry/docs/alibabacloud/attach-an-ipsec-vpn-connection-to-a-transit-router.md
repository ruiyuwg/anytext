Attaching an IPsec-VPN connection to a transit router integrates your on-premises network into the Cloud Enterprise Network (CEN). The Transit Router acts as a centralized hub, allowing your data center to communicate with all attached network instances (VPCs, VBRs, and other VPNs).

-   **Centralized management**: A single VPN connection to the transit router provides access to all attached VPCs, eliminating the need for separate VPN connections to each VPC.
    
-   **Simplified topology**: A hub-and-spoke architecture replaces complex full-mesh VPN configurations. Adding a new VPC requires only attaching it to the transit router — no VPN changes needed.
    
-   **Global reach**: Traffic between regions flows over the Alibaba Cloud backbone rather than the public Internet, providing lower latency and higher reliability.
    
-   **Cross-Account connectivity**: Attach VPN connections from one account to a transit router in another, enabling centralized network management across organizational boundaries while keeping billing and ownership separate.
    

## **How it works**

To connect your data center to Alibaba Cloud through a transit router, you attach an IPsec-VPN connection to the transit router. Once attached, your data center can communicate with all networks connected to the transit router, such as VPCs and other VPN or VBR connections.

-   **Same account:** When you create a VPN attachment in the CEN console, the IPsec-VPN connection is created automatically as part of the process.
    
-   **Cross-account:** You must create the IPsec-VPN connection separately in advance, then attach the existing connection to the transit router.
    

**Traffic flow**

All traffic between attached networks passes through the transit router. Packets from VPC subnets destined for the on-premises network route through the transit router and out via the IPsec tunnel. In the other direction, your on-premises device (Customer Gateway) sends traffic through the IPsec tunnel to the transit router, which forwards it to the target VPC based on its route table.

For private connections (via VBR and ECR instead of Internet), see [Encrypt private connections over Express Connect circuits](/help/en/vpn/sub-product-ipsec-vpn/use-cases/encrypt-a-private-connection/).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6865191771/CAEQUxiBgMCrvJ6v4hkiIGFmNTdiZTExOWY1ODQ0OWViMmQxNDlhNDcxYTkwY2Zj4146783_20240109141140.646.svg)

**Important**

Starting November 26, 2024, newly created IPsec-VPN connections default to **dual-tunnel mode**. This mode provides active/standby redundancy and cross-zone disaster recovery. For more information, see [IPsec-VPN connections associated with transit routers support the dual-tunnel mode](/help/en/vpn/sub-product-ipsec-vpn/user-guide/ipsec-vpn-connections-support-the-dual-tunnel-mode-when-binding-transit-router/).

## **Considerations**

-   **Edition:** Only Enterprise Edition Transit Routers support VPN connections.
    
-   **Region:** For regional constraints, see [Regions that support IPsec-VPN](/help/en/vpn/sub-product-ipsec-vpn/product-overview/regions-that-support-different-features-of-ipsec-vpn#concept-2214329).
    
-   **Routing policy:** A Reject routing policy (Priority 5000) is automatically added to prevent loops between VPN, VBR, and CCN connections. This policy cannot be modified or deleted.
    
-   **ECMP:** If your data center already connects to the transit router through a VPN Gateway–VPC path, and you also attach a direct VPN connection to the same transit router, ECMP load balancing between the two paths is not supported.
    
-   **Quotas:**
    
    **Quota**
    
    **Default**
    
    **Adjustable**
    
    VPN Attachments per Transit Router
    
    50
    
    [Yes](https://cen.console.alibabacloud.com/cen/quota)
    
    ECMP-capable VPN Attachments per Transit Router
    
    16
    
    No
    
    Transit Routers per IPsec-VPN connection
    
    1
    
    No
    

## Prerequisites

-   General requirements:
    
    -   Create an **Enterprise Edition** transit router in the target region. Specify a CIDR block for the transit router. IP addresses for IPsec-VPN connections are allocated from this block. For more information, see [CIDR block of the transit router](/help/en/cen/user-guide/transit-router-cidr-blocks#task-2266948).
        
    -   [Create a Customer Gateway and register your on-premises device](/help/en/vpn/sub-product-ipsec-vpn/user-guide/customer-gateway#task-llj-prx-bhb).
        
-   BGP requirements: To use BGP, the Customer Gateway must have an ASN (Autonomous System Number) configured.
    
-   Cross-Account requirements: IPsec-VPN connection and the transit router belong to different Alibaba Cloud accounts.
    
    1.  [Create the IPsec-VPN connection](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-ipsec-vpn-connections-dual-tunnel) and select **Cross Account** to indicate that the connection will be attached to a transit router in another account.
        
    2.  [Cross-account Authorization](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-ipsec-vpn-connections-dual-tunnel#section-q6k-vwr-g5f): Go to the IPsec-VPN connection details page and authorize the transit router account to attach this connection.
        
    

## **Create a VPN Connection (Same Account)**

You can create a new VPN connection or select an existing one during the attachment process.

> The first time you perform this operation, the system creates the service-linked role [AliyunServiceRoleForVpn](/help/en/vpn/security-and-compliance/aliyunserviceroleforvpn).

## Console

### **Dual-Tunnel Mode**

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/cen/list), click the ID of the CEN instance.
    
2.  On the **Basic Information** > **Transit Router** tab, find the transit router in the target region, and click **Create Connection** > **Intra-Region**.
    
3.  Select **VPN** as **Instance Type**, and set **Resource Owner ID** to **Current Account**.
    
4.  For **Individual Resource**, choose one of the following:
    
    -   **Create Resource**: Create a new IPsec-VPN connection. Configure all parameters below (Basic Information, Tunnel Settings, Encryption Settings, BGP Settings, and Advanced Settings), then click **OK**.
        
    -   **Select Resource**: Select an existing IPsec-VPN connection. Only Advanced Settings need to be configured. All other parameters are inherited from the existing connection.
        

**Basic Information**

-   **Gateway Type**:
    
    -   **Public**(default): an encrypted connection over the Internet.
        
    -   **Private**: an encrypted private connection.
        
-   **Routing Mode**:
    
    -   **Destination Routing** (Default): Traffic is forwarded based on the destination IP address. Recommended for scenarios where routes are learned via BGP or configured statically.
        
    -   **Flow Protection**: Traffic is forwarded based on source and destination IP addresses. Recommended for scenarios where you need to limit communication to specific CIDR blocks.
        
        -   You must specify the **Local CIDR Block** (VPC CIDR block) and **Peer CIDR Block** (on-premises CIDR block).
            
        -   The system automatically generates a [Configure policy-based routes](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-policy-based-routes). In this route, the **Source CIDR Block** is the connection's **Local CIDR Block**, the **Destination CIDR Block** is the connection's **Peer CIDR Block**, and the next hop is the IPsec-VPN connection. The route is advertised to the route table of the transit router by default.
            
        -   Ensure that the interesting traffic configuration on your on-premises gateway mirrors these settings (local and remote networks swapped).
            
        -   To add multiple network segments, click the Add ![Add](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9374190771/p1054130.png) icon. Multiple segments require **IKEv2**.
            
-   **Apply Immediately**: Select Yes to enable the connection quickly or avoid traffic delays. Select No if you want to save resources and traffic is infrequent.
    
-   **Enable BGP**: Specifies whether to use [BGP dynamic routing](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-bgp-dynamic-routing).
    
    -   Disabled (Default): Uses static routing. Recommended for simple network topologies.
        
    -   Enabled: Use dynamic routing for automatic route distribution and learning. **Prerequisite**: You must configure an ASN for the associated customer gateway.
        
-   **Local ASN**: The Autonomous System Number (ASN) for the Alibaba Cloud side (used by both tunnels).
    
    -   Default: 45104
        
    -   Range: 1 to 4294967295. Supports _asdot_ notation: `123.456` = 123 × 65536 + 456 = **8061384**.
        
    -   Recommendation: Use a private ASN when configuring the ASN for your on-premises device.
        

**Tunnel Settings**

**Tunnel 1**(Primary) and **Tunnel 2**(Backup) configurations:

-   **Customer Gateway**: Select the customer gateway associated with your on-premises device. You can associate the same customer gateway with both tunnels.
    
-   **Pre-Shared Key**: Enter the pre-shared key used for identity authentication.
    
    -   Requirement: The key must match the configuration on your on-premises gateway.
        
    -   Consistency: The keys for both tunnels must be identical.
        
    -   Default: If left blank, the system automatically generates a random key.
        

**Encryption Settings**

-   **IKE Settings**:
    
    -   **Edition**: Recommend **ikev2**. It simplifies SA negotiation and provides better support for multi-segment scenarios.
        
    -   **Negotiation Mode**: Both modes provide the same security level for data transmission after successful negotiation.
        
        -   **main** (Default): Identity information is encrypted during negotiation, offering higher security.
            
        -   **aggressive**: Provides faster negotiation and a higher success rate.
            
    -   **Encryption Algorithm**: Select the encryption algorithm for Phase 1 negotiation.
        
        -   Requirement: Must match the configuration on the on-premises gateway.
            
        -   Supported algorithms: **AES128** (default), **AES192**, **AES256**, **DES**, and **3DES**.
            
        -   Recommendation: Use AES algorithms (aes128, aes192, aes256), especially for connections with bandwidth ≥ 200 Mbps.
            
            -   **AES**: Provides strong encryption with efficient performance (low impact on latency and throughput).
                
            -   **3DES**: Not recommended. It is computationally intensive and limits forwarding performance compared to AES.
                
    -   **Authentication Algorithm**: Select the authentication algorithm for Phase 1 negotiation.
        
        -   Requirement: Must match the configuration on the on-premises gateway.
            
        -   Supported algorithms: **SHA1** (default), **MD5**, **SHA256**, **SHA384**, and **SHA512**.
            
        -   Note: If your on-premises device requires a Pseudo-Random Function (PRF) algorithm, ensure it matches the selected authentication algorithm.
            
    -   **DH Group**: Select the Diffie-Hellman key exchange algorithm for Phase 1 negotiation.
        
        **group1**, **group2** (default), **group5**, and **group14** represent DH1, DH2, DH5, and DH14 of the DH group, respectively.
        
    -   **SA Lifetime (Seconds)**: Specifies the lifetime of the Phase 1 Security Association (SA). The default value is **86400**. The value range is **0 to 86400**.
        
    -   **LocalId**: The identifier for the Alibaba Cloud side of the tunnel.
        
        -   Default: The tunnel's IP address.
            
        -   Format: Supports IP address or FQDN (e.g., example.aliyun.com). Spaces are not allowed.
            
        -   Recommendation: Use a private IP address.
            
        -   FQDN requirement: If you use an FQDN, ensure the peer ID on the on-premises gateway matches this value, and set **Negotiation Mode** to **aggressive**.
            
    -   **RemoteId**: The identifier for the on-premises side of the tunnel.
        
        -   Default: The IP address of the associated customer gateway.
            
        -   Format: Supports IP address or FQDN (e.g., example.aliyun.com). Spaces are not allowed.
            
        -   Recommendation: Use a private IP address.
            
        -   FQDN requirement: If you use an FQDN, ensure the local ID on the on-premises gateway matches this value, and set **Negotiation Mode** to **aggressive**.
            
-   **IPsec Configurations**:
    
    -   **Encryption Algorithm**: Select the encryption algorithm for Phase 2 negotiation.
        
        -   Supported algorithms: **AES128** (default), **AES192**, **AES256**, **DES**, and **3DES**.
            
        -   Recommendation: We recommend using AES algorithms (AES128, AES192, AES256), especially for connections with bandwidth ≥ 200 Mbps.
            
            -   AES: Provides high-strength encryption with efficient performance (low impact on latency and throughput).
                
            -   **3DES**: Not recommended. It is computationally intensive and limits forwarding performance compared to AES.
                
    -   **Authentication Algorithm**: Select the authentication algorithm for Phase 2 negotiation. Supported algorithms: **SHA1** (default), **MD5**, **SHA256**, **SHA384**, and **SHA512**.
        
    -   **DH Group**: Select the Diffie-Hellman key exchange algorithm for Phase 2 negotiation.
        
        -   **disabled****:** Disables PFS. Select this if the client does not support Perfect Forward Secrecy (PFS).
            
        -   **group1**, **group2** (default), **group5**, and **group14**: Enables PFS (DH1, DH2, DH5, DH14).
            
            -   **Requirement:** If enabled, keys are updated during each renegotiation. You must also enable PFS on the corresponding client.
                
    -   **SA Lifetime (Seconds)**: Specifies the lifetime of the Phase 2 Security Association (SA). The default value is **86400**. The value range is **0 to 86400**.
        
    -   **DPD**: Dead Peer Detection.
        
        -   Recommendation: Always enable DPD (Default). It detects peer failures within 30 seconds and triggers automatic failover, ensuring high availability.
            
        -   Mechanism: The system sends DPD probes. If no response is received, the peer is considered disconnected, and the tunnel is torn down. The system then attempts to re-establish the connection.
            
        -   Note: Legacy VPN gateways using IKEv2 may have timeouts of 130 or 3600 seconds. [Upgrade](/help/en/vpn/sub-product-ipsec-vpn/user-guide/upgrade-a-vpn-gateway-1) to the latest version for the standard 30-second timeout.
            
    -   **NAT Traversal**:
        
        -   Recommendation: Enable this feature (Default).
            
        -   Function: Allows IKE negotiation to traverse NAT devices by skipping UDP port verification, ensuring connectivity across NAT boundaries.
            

**BGP Settings**

Before you enable BGP for an IPsec-VPN connection, make sure that the associated customer gateway has an ASN configured.

-   **Tunnel CIDR Block**: The `/30` subnet within`169.254.0.0/16` used for BGP peering.
    
    -   Uniqueness: Each tunnel on a VPN gateway must use a unique CIDR block.
        
    -   Excluded Blocks: The following blocks are reserved and cannot be used:
        
        -   `169.254.0.0/30` through `169.254.5.0/30`
            
        -   `169.254.169.252/30`
            
-   **Local BGP IP address**: The BGP IP address for the Alibaba Cloud side.
    
    -   Constraint: Must belong to the **Tunnel CIDR Block**.
        
    -   Example: If the CIDR block is `169.254.10.0/30`, you can use `169.254.10.1`.
        

**Advanced Settings**

-   **Automatically Advertise Routes to VPN**: Advertises routes from the transit router route table to the BGP route table of the IPsec-VPN connection.
    
    -   Only takes effect when BGP enabled.
        
    -   You can also disable this feature using the **Advertise Routes** setting. For more information, see [Disable route synchronization](/help/en/cen/user-guide/route-synchronization#section-6mm-pfg-l7b).
        
-   **Associate with Default Route Table of Transit Router**: Associates the IPsec-VPN connection with the default transit router route table. The transit router uses this table to forward traffic from the VPN connection.
    
-   **Propagate System Routes to Default Route Table of Transit Router**: Advertises the destination-based routes and BGP routes of the IPsec-VPN connection to the default transit router route table.
    

### **Single-Tunnel Mode**

New IPsec-VPN connections use dual-tunnel mode by default. This section is for managing and modifying existing single-tunnel connections only.

Single-tunnel mode uses the same parameters as dual-tunnel mode, except you configure only one tunnel.

**Health Checks**

This feature is disabled by default.

-   Recommendation: Do not configure health checks for IPsec-VPN connections in non-active/standby scenarios.
    
-   Configuration requirements: If you choose to enable this feature, you must meet the following criteria:
    
    -   ICMP support: The destination IP address must support ICMP replies.
        
    -   On-Premises route: You must add a specific route in your on-premises data center to ensure the probe works correctly.
        
        -   Destination CIDR: The source IP address of the health check.
            
        -   Subnet mask: 32-bit (/32).
            
        -   Next hop: The IPsec-VPN connection.
            
-   Configuration:
    
    -   **Destination IP**: IP address of the data center that Alibaba Cloud can access over the IPsec-VPN connection.
        
    -   **Source IP**: IP address on Alibaba Cloud that the data center can access over the IPsec-VPN connection.
        
    -   **Retry Interval**: The interval between two consecutive health checks. Unit: seconds. Default value: **3**.
        
    -   **Retries**: The number of health check retries. Default value: **3**.
        
    -   **Switch Route**: Specify whether to allow the system to withdraw routes if they fail health checks. Default value: **Yes**. If a route fails health checks, the route is withdrawn.
        
        If you clear **Yes**, routes are not withdrawn if they fail health checks.
        

## API

-   [CreateTransitRouterVpnAttachment](/help/en/cen/developer-reference/api-createtransitroutervpnattachment#doc-api-Cbn-CreateTransitRouterVpnAttachment): Attach an IPsec-VPN connection to a transit router.
    
-   [UpdateTransitRouterVpnAttachmentAttribute](/help/en/cen/developer-reference/api-updatetransitroutervpnattachmentattribute#doc-api-Cbn-UpdateTransitRouterVpnAttachmentAttribute): Modify the configuration between a transit router and an IPsec-VPN connection.
    

## **Attach a VPN Connection (Cross-Account)**

You must create and authorize the VPN connection before attaching it.

### **Console**

1.  **Account A (IPsec-VPN Connection Owner)**:
    
    1.  [Create the IPsec-VPN connection](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-ipsec-vpn-connections-dual-tunnel): select **Cross Account**.
        
    2.  [Cross-account Authorization](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-ipsec-vpn-connections-dual-tunnel#section-q6k-vwr-g5f): Go to the IPsec-VPN connection details page and authorize the transit router account to attach this connection.
        
2.  **Account B (CEN Owner)**:
    
    1.  Obtain the UID of Account A and the IPsec-VPN connection ID.
        
    2.  Log on to the [CEN console](https://cen.console.alibabacloud.com/cen/list), click the ID of the CEN instance.
        
    3.  On the **Basic Information** > **Transit Router** tab, find the transit router in the target region, and click **Create Connection** > **Intra-Region**.
        
    4.  Select **VPN** as **Instance Type**, set **Resource Owner ID** to **Different Account**, and enter Account A's UID.
        
    5.  Select the authorized IPsec-VPN connection from the **Network Instance** list.
        

### **API**

[CreateTransitRouterVpnAttachment](/help/en/cen/developer-reference/api-createtransitroutervpnattachment#doc-api-Cbn-CreateTransitRouterVpnAttachment): Attach an IPsec-VPN connection to a transit router.

## **Configure Routing**

Traffic cannot flow until you configure routes on all three sides.

-   Transit Router:
    
    Verify that routes to your on-premises CIDR exist in the Transit Router route table. These routes can be:
    
    -   **BGP**: Routes are automatically learned if BGP is enabled on the VPN connection.
        
    -   **Static**: Manually add routes in the Transit Router route table.
        
    
    To change the route table associated with the VPN connection, go to the **Attachment Details** panel and click **Modify** next to **Associated Route Table**.
    
    > **Warning:** If [route synchronization](/help/en/cen/user-guide/route-synchronization#task-2263165) is enabled, changing the associated route table withdraws the current advertised routes and re-synchronizes routes from the new table.
    
-   VPC: Add routes for return traffic to your on-premises network. You can use either method:
    
    -   **Route synchronization**: Enable **Transit Router route table propagation** on the VPC route table to automatically learn routes from the Transit Router.
        
    -   **Static route**: Manually add a route entry.
        
        -   **Destination**: On-premises CIDR (e.g., `172.16.0.0/16`).
            
        -   **Next Hop**: The Transit Router attachment.
            
-   On-Premise: Add routes to your VPC CIDR pointing to the VPN tunnel interface.
    

## **Troubleshooting**

For more information, see [Troubleshoot IPsec-VPN](/help/en/vpn/sub-product-ipsec-vpn/support/troubleshoot-ipsec-vpn-connection-issues).

**Issue**

**Solution**

**IPsec tunnel down**

Check **Pre-shared Key** and **IKE/IPsec** parameters match on both sides.

**BGP down**

Ensure Customer Gateway has an **ASN** configured. Check for **CIDR overlap**.

**No connectivity**

Check routes on all three sides:  
1. **TR Route Table**: Has a route to on-premises CIDR (via VPN attachment).  
2. **VPC Route Table**: Has a route to on-premises CIDR pointing to TR.  
3. **On-premises**: Has a route to VPC CIDR pointing to the VPN tunnel.

## Billing

A VPN connection incurs fees for the Transit Router attachment, data forwarding, IPsec-VPN connection, and outbound data transfer. The billable items vary based on the network type (Public or Private).

### Public VPN connections

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6865191771/CAEQUxiBgMCLjp6v4hkiIDljYjU3NGVhNjQxOTRlOTI4MjM5ZTBkM2U5MzQ1NWQx4146783_20240109141140.646.svg)

**No.**

**Item**

**Description**

**References**

①

Transit router connection

The attachment between the transit router and the IPsec-VPN connection

-   For more information about transit router fees, see [Billing rules of transit routers](/help/en/cen/product-overview/billing-rules#section-glc-zef-2t1).
    
-   For more information about IPsec-VPN connection fees, see [Billing rules of VPN gateways](/help/en/vpn/sub-product-ipsec-vpn/billing-for-ipsec-vpn#concept-iyc-hwx-wdb).
    

②

Transit router data forwarding

Data forwarding from the IPsec-VPN connection to the transit router

③

IPsec-VPN connection instance

The IPsec-VPN connection

④

Data transfer

Data transfer from the IPsec-VPN connection to the data center

### Private VPN connections

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6865191771/CAEQUxiBgID77p2v4hkiIGRkMTRkYjQwYzI0YzQwYzlhNmZhOTQzYjY4NjIwY2I04146783_20240109141140.646.svg)

**No.**

**Item**

**Description**

**References**

①

Transit router connection

The connections between the VBR and IPsec-VPN connection

-   For more information about transit router connection and data forwarding fees, see [Billing rules of transit routers](/help/en/cen/product-overview/billing-rules#section-glc-zef-2t1).
    
-   For more information about the IPsec-VPN connection instance fees, see [Billing rules of VPN gateways](/help/en/vpn/sub-product-ipsec-vpn/billing-for-ipsec-vpn#concept-iyc-hwx-wdb).
    
-   For more information about the data transfer fees, see [Billing rules of Express Connect](/help/en/express-connect/product-overview/billing-overview/#concept-ekt-hyq-ydb).
    

②

Transit router data forwarding

Data forwarding from the VBR to the transit router

③

IPsec-VPN connection

The IPsec-VPN connection

④

Outbound data transfer

Data transfer from the VBR to the data center
