Configure Border Gateway Protocol (BGP) to enable dynamic route discovery between your on-premises data center and Alibaba Cloud. BGP automates route exchanges and delivers the following benefits:

-   **Automation:** Eliminates the errors incurred by manual route configuration.
    
-   **Redundancy:** Supports active-active or active-standby failover.
    
-   **Scalability:** Efficiently manages complex routing policies across connections.
    

## How it works

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6548810771/CAEQUxiBgMCT7eOd4RkiIGJjYWMyNTVjNjMxMzRkMDZiNDA3ZjFiZDlhMDQxNWM46361594_20260202172137.475.svg)

-   **BGP group**: A logical container that manages configuration templates for your peers.
    
    -   **Function:** Defines shared settings such as the **Peer ASN** and **BGP Key** (authentication password).
        
    -   **Inheritance:** All peers added to a group automatically inherit these configurations, simplifying maintenance.
        
-   **BGP peer**: A logical representation of a specific BGP neighbor relationship.
    
    -   **Identity:** Maps to a physical router interface in your data center, identified by its **BGP Peer IP**.
        
    -   **Mechanism:** Establishes the TCP session on port 179 required to exchange routing information with Alibaba Cloud.
        

## Limitations

-   **Protocol:** BGP-4 only.
    
-   **Connection:** Express Connect circuit connections only.
    
-   **Alibaba Cloud ASN:** Defaults to **45104**. Supports 2-byte and 4-byte user ASNs.
    
-   **Peers:** Up to 8 BGP peers per VBR.
    
-   **Routes:** Up to 110 routes per peer by default.
    
-   **Dual-stack:** IPv4 and IPv6 BGP sessions run independently. You can configure them on the same VBR.
    
-   **Express Connect Router (ECR) integration:**
    
    -   If the VBR is associated with an Express Connect Router (ECR), the VBR and ECR ASNs must match. If the ECR uses a custom ASN (not 45104), bind the VBR to the ECR _before_ configuring BGP.
        
    -   VBRs connected to an ECR must support Multi-Protocol BGP (MPBGP). Verify it in advanced features on the VBR details page.
        

## Prerequisites

-   You have an active Express Connect circuit. Allow 1–3 months for provisioning if not already established.
    
-   A VBR instance is associated with your. For details, see [Create and manage a virtual border router](/help/en/express-connect/user-guide/create-and-manage-a-vbr#task-2037143).
    
-   An on-premises router is configured to advertise BGP routes. You can also enable BFD if needed. Consult your device provider for instructions.
    

## Configure BGP

Establish a standard BGP connection between your Virtual Border Router (VBR) and your on-premises data center using the default Alibaba Cloud ASN.

To establish BGP for IPv6 traffic, ensure that IPv6 addresses are configured on the interfaces of both the VBR and the on-premises router. IPv6 BGP operates independently of IPv4 BGP, allowing for dual-stack.

**Warning:** If a threat alert appears after configuring the BGP group, you might have BGP routing loops when connecting to CEN through a transit router. See [BGP routing loops](/help/en/express-connect/scenarios-in-which-you-need-to-avoid-attaching-vbrs-to-cen#concept-2297467) to prevent connectivity issues.

### **Console**

**Step 1: Create a BGP Group**

1.  Log on to the [VBR console](https://expressconnect.console.alibabacloud.com/vbr/ap-southeast-1).
    
2.  In the top navigation bar, select the region where the VBR is deployed.
    
3.  Click the ID of the target VBR instance.
    
4.  Click the **BGP Groups** tab and click **Create BGP Group**.
    
5.  In the **Create BGP Group** panel, configure the following parameters and click **OK**.
    
    -   **Name**: Enter a name, for example, `bgp-default`.
        
    -   **Protocol Type**: Select **IPv4** or **IPv6** based on your requirements.
        
        This option is visible only if IPv6 is enabled on the VBR instance.
        
    -   **Peer ASN**: Enter the Autonomous System Number (ASN) of your on-premises data center, for example `65001`.
        
    -   **BGP Key**: (Optional) Enter the MD5 authentication key. This must match the key configured on your on-premises router.
        
    -   **BGP Route Quota**: Specify the maximum number of routes that the BGP peer can receive.
        
        -   Default limit: 110 routes.
            
        -   To increase this quota, contact your account manager.
            
    -   **Local ASN**: Use the default value `45104`.
        
        > This field is visible only to accounts with the required permissions.
        

**Step 2: Add a BGP Peer**

1.  Click the **BGP Peers** tab and then click **Create BGP Peer**.
    
2.  In the **Create BGP Peer** panel, configure the following parameters and click **OK**.
    
    -   **BGP Group**: Select the BGP group created in Step 1.
        
    -   **BGP Peer IP**: Enter the IP address of your on-premises router (IPv4 or IPv6, matching the BGP Group protocol).
        
    -   **Enable BFD**: Select this option to enable Bidirectional Forwarding Detection (BFD).
        
        BFD provides fast fault detection for network connections. It works with BGP to accelerate route convergence and ensure service continuity.
        
    -   **BFD Hops**: (Required if BFD is enabled) Specify the maximum number of devices, or hops, allowed between the source and destination.
        
        -   Value range: 1 to 255.
            
        -   Recommendation: Set the value to 1 for direct optical fiber connections or multi-cloud environments with no intermediate bridging devices.
            

**Step 3: Advertise Routes**

After creating the BGP peer, you must advertise your VPC's CIDR block to complete the configuration.

If you use Cloud Enterprise Network (CEN) to connect your VPC and VBR, **skip this step**. CEN handles route propagation automatically.

1.  On the **Virtual Border Routers (VBRs)** page, click the ID of the target VBR.
    
2.  Click the **Advertise BGP Subnet** tab and then click **Advertised BGP Subnets**.
    
3.  Enter the VPC CIDR block (IPv4 or IPv6) you want to advertise and click **OK**.
    

### **API**

-   [CreateBgpGroup](/help/en/express-connect/developer-reference/api-vpc-2016-04-28-createbgpgroup-express-connect): Creates a BGP group for a specified VBR.
    
-   [CreateBgpPeer](/help/en/express-connect/developer-reference/api-vpc-2016-04-28-createbgppeer-express-connect): Adds a BGP peer to a specified BGP group.
    
-   [AddBgpNetwork](/help/en/express-connect/developer-reference/api-vpc-2016-04-28-addbgpnetwork-express-connect): Advertises a BGP network.
    

## **Configure custom ASNs**

If you use multiple Express Connect connections, configuring the default ASN (45104) on all VBRs may trigger BGP As-path loop detection, causing routes to be dropped. To prevent this, you must assign a unique ASN to each VBR.

**Prerequisites**

-   Ensure your account has the permissions required to configure custom ASNs.
    
-   Alternatively, use an **Express Connect Router (ECR)**, which natively supports custom ASNs and simplifies this configuration.
    

### **Console**

**Option 1: Configure a custom ASN on a VBR**

If you have the required permissions, you can assign a custom ASN directly to the VBR during the BGP configuration.

1.  Click the **BGP Groups** tab and then click **Create BGP Group**.
    
2.  In the **Create BGP Group** panel, locate the **Local ASN** field.
    
    -   Replace the default value (45104) with your custom private ASN, for example, 64512.
        
    -   Supported private ASN ranges: 64512–65534 and 4200000000–4294967294.
        
3.  Proceed to add BGP peers as described in the standard procedure.
    

**Option 2: Use an ECR**

For large-scale networks, we recommend using an Express Connect Router (ECR) instead of configuring BGP on individual VBRs. ECRs provide centralized routing management.

1.  Create an Express Connect Router (ECR) and assign it a specific ASN.
    
2.  Associate your VBRs with the ECR.
    
3.  Configure BGP directly on the ECR rather than on each VBR instance.
    

### **API**

[CreateExpressConnectRouter](/help/en/express-connect/developer-reference/api-expressconnectrouter-2023-09-01-createexpressconnectrouter): Create an Express Connect Router (ECR) instance.

## Monitoring and maintenance

### **Configure monitoring for BGP peers**

CloudMonitor enables you to track system events and create alert rules for BGP peer status changes or route limit violations. Real-time alerts help you quickly identify and resolve network anomalies.

For configuration options, see [Manage event subscriptions (Recommended)](/help/en/cms/cloudmonitor-1-0/user-guide/manage-notification-policies).

1.  Log on to the [Event Subscription](https://cloudmonitor.console.alibabacloud.com/notify-strategy/strategy) page.
    
2.  On the **Subscription Policy** tab, click **Create Subscription Policy**.
    
3.  In the **Alert Subscription** section, select **Express Connect - Physical Connections** as the **Products**.
    
4.  Create rules for system events:
    
    -   **BGPPeerStatus:Down**: Critical alert for connection loss.
        
    -   **BgpPeerReceiveRoutes:Exceed**: Warning for capacity issues.
        

### Manage BGP

**Task**

**Navigation**

**Impact**

**Modify BGP group**

**BGP Groups** tab > **Edit**

Changing **Peer ASN** or **BGP Key** will disrupt active connections.

**Modify BGP peer**

**BGP Peers** tab > **Edit**

Changing **BGP Peer IP** or BFD settings will reset the session.

**Delete resources**

Click **Delete** on the respective tab.

Order of operations: Delete the **BGP Peer** _before_ you can delete the associated **BGP Group**.

Critical impact: This action immediately terminates connectivity.

### **BGP peer status**

After creating a BGP peer, you can view its current state on the **BGP Peers** tab**.**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0715810771/p1052088.png)

**Status**

**Description**

**Idle**

**The initial state.** BGP is waiting for a start event. Once triggered, it initializes resources, resets the Connect-Retry timer, initiates a TCP connection, and transitions to the Connect state.

**Connect**

**Attempting to connect.** BGP is initiating the TCP connection.

-   Success: Transitions to OpenSent.
    
-   Failure: Transitions to Active.
    
-   Timeout: If the Connect-Retry timer expires, it remains in the Connect state and retries.
    

**Active**

**Retrying connection.** BGP is actively trying to establish a TCP connection.

-   Success: Transitions to OpenSent.
    
-   Failure: Remains Active and continues attempting to connect.
    
-   Timeout: If the Connect-Retry timer expires, it reverts to the Connect state.
    

**OpenSent**

**Open message sent.** The TCP connection is created, and the local BGP has sent its Open message. It is now waiting for an Open message from the peer.

-   Valid message: Transitions to OpenConfirm.
    
-   Error: Sends a notification and reverts to Idle.
    

**OpenConfirm**

**Waiting for Keepalive.** BGP has received a valid Open message and sent a Keepalive message. It is now waiting for a Keepalive message from the peer.

-   Success: Transitions to Established.
    
-   Interruption: If the TCP connection drops, it reverts to Idle.
    

**Established**

**Connection successful.** The BGP session is fully established. Peers exchange Update messages (routing information) and Maintain Keepalive messages to ensure the link remains up.

**UnEstablished**

**Not connected.** The BGP peer connection is not established.
