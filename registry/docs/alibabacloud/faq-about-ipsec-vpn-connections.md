A systematic guide to help you diagnose and resolve common IPsec-VPN connection issues.

## 1\. Quick self-checklist (5-minute fixes)

Before diving into detailed logs, complete this checklist to rule out the most common configuration errors. Many issues can be resolved at this stage.

-   **Network connectivity:** Can your on-premises gateway device `ping` the public IP address of the Alibaba Cloud VPN gateway?
    
    -   **Action:** Use the `ping <VPN Gateway Public IP>` command from your gateway device. If it fails, check your Internet connection and any intermediate network firewalls.
        
-   **Firewall and security policies:** Have you opened the necessary ports?
    
    -   **Action:** Ensure your on-premises firewall and any security policies (like Alibaba Cloud security groups if applicable) allow both inbound and outbound traffic for **UDP port 500** and **UDP port 4500** (for NAT Traversal).
        
-   **Pre-Shared Key (PSK) match:** Are the PSKs identical on both ends?
    
    -   **Action:** Carefully compare the PSK on your IPsec connection configuration and your on-premises gateway device. **Be cautious of hidden spaces during copy and paste.**
        
-   **Customer gateway IP address:** Is the IP address correct, especially if your gateway device is behind a NAT?
    
    -   **Action:** In the Alibaba Cloud console, check the IP address of the **user gateway** associated with your IPsec connection.
        
        -   If your gateway device has a public IP, this value must be that public IP.
            
        -   **If your gateway device is behind a NAT device, this value must be the public IP of the NAT device.** An incorrect IP here is a common cause of "no response" errors.
            
-   **Route configuration:** Are the routes pointing to the VPN?
    
    -   **Action:**
        
        -   **Alibaba Cloud:** Check the VPC route table to ensure that traffic destined for your on-premises network is routed to the VPN gateway.
            
        -   **On-premises:** Check your on-premises router to ensure traffic destined for the VPC CIDR block is routed through the IPsec tunnel.
            

## 2\. Find error information

If the quick check doesn't solve the problem, you need to find the specific error code or log message to pinpoint the issue.

### View error codes

You can use the error codes as direct clues for troubleshooting.

> To get the latest error status, you can trigger a new negotiation. A simple method is to modify the IPsec connection, change the **Effective Immediately** setting, save it, and then change it back.

> VPN gateways created before March 21, 2019, must be upgraded to view error codes.

#### **Console**

Check the error code in the **Connection Status** column of the target Tunnel.

> For single-tunnel mode: Check the error code in the **Connection Status** column of the target IPsec Connection.

## API

Call [DiagnoseVpnConnections](/help/en/vpn/sub-product-ipsec-vpn/developer-reference/api-vpc-2016-04-28-diagnosevpnconnections-vpns) to get error codes.

### View connection logs

For more detailed analysis, especially when no error code is displayed, you can view up to 180 days of IPsec-VPN logs and filter by a specific time range (minimum of 10 minutes).

#### **Console**

Click **View Logs** in the **Actions** column for the target tunnel.

> For single-tunnel mode: Click **View Logs** in the **Actions** column of the target IPsec connection.

## API

Call [DescribeVpnConnectionLogs](/help/en/vpn/sub-product-ipsec-vpn/developer-reference/api-vpc-2016-04-28-describevpnconnectionlogs-vpns) to get connection logs.

## **3\. Find a solution that suits your situation**

Find your specific issue below and refer to the recommended solution.

### **a. Phase 1 failed or timeout**

This is the most common issue, indicating that the Alibaba Cloud VPN gateway is sending negotiation requests but receiving no reply from your on-premises gateway device.

**Possible cause**

**How to check & fix**

**1\. Network Connectivity Failure**

**Check:** From your on-premises gateway device, run `ping <VPN Gateway Public IP>` and `traceroute <VPN Gateway Public IP>`.

**Fix:** If the packets are lost, there is a network issue between your data center and Alibaba Cloud. Check your Internet connection, ISP, and any intermediate firewalls.

> VPN Gateway does not support cross-border IPsec-VPN connections. For such scenarios, use Cloud Enterprise Network (CEN).

**2\. Incorrect user gateway IP**

**Check:** In the Alibaba Cloud console, verify the IP address of the **user gateway**.

**Fix:** The IP must be the public IP your on-premises device uses to connect to the Internet. If your device is behind a NAT, this must be the NAT's public IP.

**Warning:** Modifying the user gateway's IP requires creating a new user gateway and re-associating it with the IPsec connection, which causes a service interruption.

**3\. on-premises firewall blocking packets**

**Check:** Review the access control policies on your on-premises gateway device and any upstream firewalls.

**Fix:** Ensure that **UDP port 500** (for IKE) and **UDP port 4500** (for NAT-T) are open for traffic to and from the Alibaba Cloud VPN gateway's public IP.

**4\. IKE (Phase 1) policy mismatch**

**Check:** Compare the **IKE configuration** on both sides.

**Fix:** Ensure the following parameters are identical:

\- **IKE version** (`ikev1` or `ikev2`). We recommend **IKEv2**.

\- **Negotiation mode** (`main` or `aggressive`). We recommend **main**.

\- **Encryption algorithm** (e.g., `aes`, `aes192`, `aes256`).

\- **Authentication algorithm** (e.g., `sha1`, `md5`, `sha256`).

\- **DH group** (e.g., `group2`, `group5`, `group14`).

\- **SA lifecycle** (in seconds). While they can differ, it's highly recommended to keep them the same to avoid instability.

**5\. on-premises device issue**

**Check:** Examine the status and logs of your on-premises gateway device for any errors or unexpected restarts. see 

**Fix:** Ensure the device is functioning correctly and has IPsec services running. Examples: [Configuration examples for on-premises gateway devices](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-local-gateways/).

> Some devices requires data traffic to trigger IPsec protocol negotiation. Contact the vendor to learn how to trigger.

**6\. Others**

See [Reference: Error Code and Log Keyword](#8b41813cd6aa9).

### **b. Phase 2 failed or timeout**

-   Always failed?
    
    **Possible cause**
    
    **How to check & fix**
    
    **1\. IPsec (Phase 2) policy mismatch**
    
    **Check:** Compare the **IPsec configuration** on both sides.
    
    **Fix:** Ensure the following parameters are identical:
    
    \- **Encryption algorithm** (e.g., `aes`, `aes192`, `aes256`).
    
    \- **Authentication algorithm** (e.g., `sha1`, `md5`, `sha256`).
    
    \- **PFS (DH group)**. If enabled on one side, it must be enabled on the other with the same DH group. If disabled on one side (`disabled`), it must be disabled on the other.
    
    **2\. Others**
    
    See [Reference: Error Code and Log Keyword](#8b41813cd6aa9).
    
-   Was "Phase 2 Negotiation Succeeded" but now is "Phase 2 Negotiation Failed"?
    
    **Cause classification**
    
    **Cause**
    
    **Solution**
    
    Abnormal gateway device
    
    The Alibaba Cloud VPN gateway has an overdue payment.
    
    Add funds to your account or add a new payment method to your account. For more information, see [Payment methods](https://www.alibabacloud.com/help/zh/user-center/latest/instruction-of-payment-management).
    
    The on-premises gateway device is abnormal.
    
    Check the on-premises gateway device. For more information, contact the device vendor.
    
    The access control policy of the on-premises gateway device was changed.
    
    Check the access control policy of the on-premises gateway device. Make sure that traffic is allowed between the data center and the VPC.
    
    IPsec-VPN configuration change
    
    The IPsec-VPN configuration of the on-premises gateway device was deleted.
    
    Add the IPsec-VPN configuration to the on-premises gateway device again. Make sure that the configuration of the on-premises gateway device is consistent with the configuration of the IPsec-VPN connection. For more information, see [Configuration examples for on-premises gateway devices](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-local-gateways/).
    
    The IPsec-VPN configuration of the on-premises gateway device was modified and is inconsistent with the parameters of the IPsec-VPN connection.
    
    Modify the configuration of the on-premises gateway device to be consistent with the IPsec-VPN connection configuration.
    
    Multiple values are specified for a parameter in the IPsec-VPN configuration of the on-premises gateway device.
    
    For example, when you configure the on-premises gateway device, you set the **Encryption Algorithm** parameter to **aes** and **aes192** during the **IKE Configurations** phase.
    
    When you configure an IPsec-VPN connection on Alibaba Cloud, you can specify only one value for each parameter. Check the IPsec-VPN configuration of the on-premises gateway device. Make sure that only one value is specified for each parameter and the value is the same as the one specified for the IPsec-VPN connection.
    
    The IPsec-VPN connection configuration was modified and is inconsistent with the on-premises gateway device configuration.
    
    Check the IPsec-VPN connection configuration to make it consistent with the on-premises gateway device configuration. For more information, see [Modify an IPsec-VPN connection](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-ipsec-vpn-connections-in-single-tunnel-mode#section-jzo-tpu-s5q).
    
    An IPv4 gateway and a network ACL were newly configured for the VPC-connected instance that is associated with the IPsec-VPN connection.
    
    Check the configurations of the IPv4 gateway and network ACL that are applied to the VPC-connected instance. Make sure that traffic is allowed between the data center and the VPC-connected instance. For more information, see [IPv4 gateways](/help/en/vpc/ipv4-gateway-overview#concept-2159270) and [Network ACLs](/help/en/vpc/network-acl-overview#concept-189632).
    
    The IP address of the on-premises gateway device changed
    
    The IP address that the on-premises gateway device uses to establish the IPsec-VPN connection changed. This causes the IP address of the customer gateway on Alibaba Cloud to be inconsistent with the IP address used by the on-premises gateway device.
    
    Make sure that the IP address that the on-premises gateway device uses to establish the IPsec-VPN connection is the same as the IP address configured for the customer gateway on Alibaba Cloud.
    
    The on-premises gateway device has multiple IP addresses. The IP address of the customer gateway on Alibaba Cloud is inconsistent with the IP address that the on-premises gateway device uses to establish the IPsec-VPN connection.
    
    Make sure that the IP address that the on-premises gateway device uses to establish the IPsec-VPN connection is the same as the IP address configured for the customer gateway on Alibaba Cloud.
    
    The on-premises gateway device uses a dynamic IP address. The IP address of the customer gateway on Alibaba Cloud is inconsistent with the IP address that the on-premises gateway device uses to establish the IPsec-VPN connection.
    
    The on-premises gateway device must use a static IP address to establish the IPsec-VPN connection. Make sure that the static IP address used by the on-premises gateway device is the same as the IP address configured for the customer gateway on Alibaba Cloud.
    
-   The negotiation intermittently fails?
    
    **Cause classification**
    
    **Cause**
    
    **Solution**
    
    IPsec-VPN configuration change
    
    The **DH Group** parameter (called **PFS** on some on-premises gateway devices) in the **IPsec Configurations** phase is not configured consistently between the IPsec-VPN connection and the on-premises gateway device.
    
    Check the **DH Group** (**PFS**) parameter in the **IPsec Configurations** phase for the IPsec-VPN connection or the on-premises gateway device. Make sure that the **DH Group** (**PFS**) parameter is set to the same value on both sides. For instructions on modifying the IPsec-VPN connection configuration, see [Modify an IPsec-VPN connection](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-ipsec-vpn-connections-in-single-tunnel-mode#section-jzo-tpu-s5q).
    
    Multiple values are specified for a parameter in the IPsec-VPN configuration of the on-premises gateway device.
    
    For example, when configuring the on-premises gateway device, you set the **Encryption Algorithm** parameter to **aes** and **aes192** in the **IKE Configurations** phase.
    
    When you configure an IPsec-VPN connection on Alibaba Cloud, you can specify only one value for each parameter. Check the IPsec-VPN configuration of the on-premises gateway device. Make sure that only one value is specified for each parameter and the value is the same as that of the IPsec-VPN connection.
    
    A traffic-based security association lifetime is configured for the on-premises gateway device.
    
    IPsec-VPN connections on Alibaba Cloud do not support traffic-based security association lifetimes. They only support time-based security association lifetimes. We recommend that you do not configure a traffic-based security association lifetime for the on-premises gateway device, or set the traffic-based security association lifetime to 0 bytes.
    
    Poor network quality
    
    Poor network quality between the IPsec-VPN connection and the on-premises gateway device causes Dead Peer Detection (DPD) protocol messages, health check probe packets, or IPsec protocol messages to be lost and time out. This interrupts the IPsec-VPN connection.
    
    Check the network connectivity at the time when the IPsec-VPN connection was interrupted.
    
    Peer limits for an IPsec-VPN connection
    
    The vendor of the on-premises gateway device requires data traffic to trigger IPsec protocol negotiation.
    
    Confirm whether the on-premises gateway device has this limitation.
    
    If it does, contact the vendor to learn how to trigger IPsec protocol negotiation.
    
    When you establish a dual-tunnel IPsec-VPN connection, the IPsec-VPN connection on Alibaba Cloud uses the traffic selector mode. By default, the traffic selectors for the two tunnels are the same. However, the on-premises gateway device (such as a Cisco ASA firewall device) may have limitations. If the traffic selectors for the two tunnels are the same, only one tunnel can be successfully negotiated at a time, and the two tunnels are negotiated in turn.
    
    Confirm with the vendor whether the on-premises gateway device has this limitation.
    
    If it does, see [Configuration examples for on-premises gateway devices](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-local-gateways/) to modify the IPsec-VPN configuration of the on-premises gateway device.
    

### **c. Phase 2 succeed, but have trouble**

-   BGP negotiation status is "Abnormal"?
    
    **Cause classification**
    
    **Cause**
    
    **Solution**
    
    Incorrect BGP configuration
    
    The on-premises gateway device is not configured with the correct BGP IP address.
    
    Check the BGP configurations of the IPsec-VPN connection and the on-premises gateway device. Make sure that the BGP IP address of the IPsec-VPN connection and the BGP IP address of the on-premises gateway device are in the same CIDR block and do not conflict.
    
    The BGP IP addresses must belong to a CIDR block within 169.254.0.0/16 that has a subnet mask of 30 bits.
    
    IPsec-VPN connection issues
    
    Due to abnormal IPsec-VPN connection connectivity, the IPsec-VPN connection cannot receive BGP protocol messages from the on-premises gateway device.
    
    Check the IPsec-VPN connection connectivity and confirm whether the IPsec-VPN connection has received BGP protocol messages from the on-premises gateway device.
    
    You can view the traffic monitoring data of the IPsec-VPN connection. If no inbound traffic is recorded, it indicates that the IPsec-VPN connection has not received BGP protocol messages from the on-premises gateway device.
    
    The IPsec-VPN connection negotiation is interrupted.
    
    Check the IPsec-VPN connection log to determine whether the connection status is always "Phase 2 Negotiation Succeeded".
    
    If the IPsec-VPN connection negotiation status is unstable, check the IPsec-VPN connection log to troubleshoot the issue. For more information, see [Troubleshoot IPsec-VPN](/help/en/vpn/sub-product-ipsec-vpn/support/troubleshoot-ipsec-vpn-connection-issues#task-2288402).
    
-   ECS instance can't access a server in a data center?
    
    #### **Cause**
    
    The route configuration or security group rules of the VPC, or the route configuration or access control policy of the data center does not allow the ECS instance in the VPC to access the server in the data center.
    
    #### **Solution**
    
    Check the following configurations:
    
    -   VPC
        
        -   Check the route configuration in the VPC route table. Make sure that a route is configured to allow the ECS instance to access the server in the data center.
            
        -   Check the security group rules applied to the VPC. Make sure that the security group rules allow mutual access between the ECS instance and the server.
            
    -   Data center
        
        -   Check the route configuration of the data center. Make sure that a route is configured to allow the server to respond to the ECS instance.
            
        -   Check the access control policy of the data center. Make sure that the data center allows mutual access between the ECS instance and the server.
            
    
    If a public IP address is used as a private IP address in the data center, you must set the public CIDR block as a user CIDR block of the VPC. This ensures that the VPC can access the public CIDR block. For more information about user CIDR blocks, see [VPC FAQ](/help/en/vpc/frequently-asked-questions#section-0md-o6f-qo3) and [VPC FAQ](/help/en/vpc/frequently-asked-questions#section-7zo-ih3-062).
    
-   A server in a data center can't access an ECS instance?
    
    #### **Cause**
    
    The route configuration or security group rules of the VPC, or the route configuration or access control policy of the data center does not allow the server in the data center to access the ECS instance in the VPC.
    
    #### **Solution**
    
    Check the following configurations:
    
    -   VPC
        
        -   Check the route configuration in the VPC route table. Make sure that a route is configured in the VPC route table to allow the ECS instance to respond to access requests from the server.
            
        -   Check the security group rules applied to the VPC. Make sure that the security group rules allow mutual access between the ECS instance and the server.
            
    -   Data center
        
        -   Check the route configuration of the data center. Make sure that a route is configured in the data center to allow the server to access the ECS instance through the IPsec-VPN connection.
            
        -   Check the access control policy of the data center. Make sure that the data center allows mutual access between the ECS instance and the server.
            
    
-   Traffic is normal for some CIDR blocks but abnormal for others in a multi-CIDR block scenario?
    
    #### **Cause**
    
    If an IPsec-VPN connection between a data center and a virtual private cloud (VPC) uses the **traffic selector** routing mode with multiple CIDR blocks, and the VPN Gateway is connected to a third-party device from a vendor such as Cisco, H3C, or Huawei, only one of the CIDR blocks can communicate.
    
    This issue occurs because the IPsec protocols on the Alibaba Cloud VPN Gateway and the device from a vendor such as Cisco, H3C, or Huawei are incompatible. When an IPsec-VPN connection is configured with multiple CIDR blocks, the Alibaba Cloud VPN Gateway uses one security association (SA) to negotiate with the on-premises gateway device. However, the on-premises gateway device uses multiple SAs to negotiate with the VPN Gateway.
    
    #### **Solution**
    
    For more information, see [Recommended configurations for multiple CIDR blocks](/help/en/vpn/sub-product-ipsec-vpn/support/configuration-suggestions-and-faq-about-enabling-communication-among-cidr-blocks#49ffb130dacwz).
    
-   Ping is good but cannot access services or specific ports?
    
    #### **Cause**
    
    The security group rules applied to the VPC or the access control policy applied to the data center does not allow traffic from the required IP addresses, of the required protocol types, or on the required ports.
    
    #### **Solution**
    
    Check the following configurations:
    
    -   Check the security group rules applied to the VPC. Make sure that the security group rules allow traffic from the required IP addresses, of the required protocol types, and on the required ports between the data center and the VPC.
        
    -   Check the access control policy applied to the data center. Make sure that the access control policy allows traffic from the required IP addresses, of the required protocol types, and on the required ports between the data center and the VPC.
        
        If business policies or domain name resolution are configured in the data center, check these configurations as well. Make sure that traffic from the required IP addresses, of the required protocol types, and on the required ports is allowed between the data center and the VPC.
        
    
-   Intermittent packet loss occur?
    
    **Cause classification**
    
    **Cause**
    
    **Solution**
    
    VPN Gateway specification issue
    
    A traffic burst occurs that exceeds the bandwidth of the VPN gateway.
    
    You can view the traffic monitoring data of the VPN gateway in the VPN Gateway console to check for traffic bursts.
    
    You can upgrade the VPN gateway. For more information, see [Upgrade or renew a VPN gateway with a different specification](/help/en/vpn/sub-product-ipsec-vpn/upgrade-or-downgrade-a-ipsec-vpn-gateway#task-qth-qvx-bhb).
    
    IPsec-VPN connection issues
    
    The IPsec-VPN connection negotiation is interrupted.
    
    Check the IPsec-VPN connection log to determine whether the connection status is always "Phase 2 Negotiation Succeeded".
    
    If the IPsec-VPN connection negotiation status is unstable and the tunnel is frequently re-negotiated, the network is intermittently interrupted. Check the IPsec-VPN connection log to troubleshoot the issue. For more information, see [Troubleshoot IPsec-VPN](/help/en/vpn/sub-product-ipsec-vpn/support/troubleshoot-ipsec-vpn-connection-issues#task-2288402).
    
    MTU-related issues
    
    The user MTU in the data center is set to a value greater than 1300 bytes.
    
    For VPN gateways created before April 1, 2021, if the user MTU in the data center is set to a value greater than 1300 bytes, the IPsec-VPN connection may fail. We recommend that you upgrade the VPN gateway to the latest version to prevent this issue. For information about how to upgrade a VPN gateway, see [Upgrade a VPN gateway](/help/en/vpn/sub-product-ipsec-vpn/user-guide/vpn-gateway-instance/#7bf21f8621txg).
    
    During data transmission, a packet is too large and exceeds the MTU value of the transmission path. This causes the packet to be fragmented.
    
    A VPN gateway can transmit fragmented packets, but does not support packet fragmentation or reassembly. We recommend that you set the user MTU to 1399 bytes. For more information, see [MTU and MSS settings](/help/en/vpn/sub-product-ipsec-vpn/user-guide/set-mtu-values#concept-270137).
    
-   Forwarding latency high during private network access?
    
    **Cause classification**
    
    **Cause**
    
    **Solution**
    
    VPN Gateway specification issue
    
    A traffic burst occurs that exceeds the bandwidth of the VPN gateway.
    
    You can view the traffic monitoring data of the VPN gateway in the VPN Gateway console to check for traffic bursts.
    
    You can upgrade the VPN gateway. For more information, see [Upgrade or renew a VPN gateway with a different specification](/help/en/vpn/sub-product-ipsec-vpn/upgrade-or-downgrade-a-ipsec-vpn-gateway#task-qth-qvx-bhb).
    
    Poor network quality
    
    The poor network quality between the IPsec-VPN connection and the on-premises gateway device causes high network latency and packet loss during data transmission.
    
    Use the `ping` and `mtr` commands to detect and check the public or private network of the VPN gateway.
    
    If high network latency is detected, perform tests segment by segment to quickly narrow down the scope. If the public link quality is poor, we recommend that you use other cloud products such as [Cloud Enterprise Network (CEN)](/help/en/cen/product-overview/what-is-cen/#concept-2090845).
    
-   An IPsec-VPN connection be successfully negotiated even if the on-premises and cloud-side configurations for the traffic selector are different?
    
    #### **Cause**
    
    As shown in the following figure, if the CIDR block of the traffic selector configured on the on-premises gateway device includes the CIDR block of the traffic selector configured for the IPsec-VPN connection, and both ends use IKEv2, the Alibaba Cloud VPN gateway considers the traffic selectors to match during IPsec negotiation. If the gateway device also supports this inclusive relationship (meaning it considers inclusive traffic selectors to be a match), the IPsec-VPN connection can be successfully negotiated even if the traffic selector configurations on the on-premises gateway and the cloud are different.
    
    For example, On-premises Gateway Device 1 supports the inclusive relationship. When it negotiates with IPsec-VPN Connection 1 and IPsec-VPN Connection 2, the following conditions are met: The on-premises CIDR block 10.55.0.0/16 on On-premises Gateway Device 1 includes the remote CIDR blocks of both IPsec-VPN Connection 1 (10.55.193.0/24) and IPsec-VPN Connection 2 (10.55.0.0/16). The remote CIDR block 10.66.88.0/22 of On-premises Gateway Device 1 includes the on-premises CIDR blocks of both IPsec-VPN Connection 1 (10.66.90.0/24) and IPsec-VPN Connection 2 (10.66.89.0/24). In this case, both On-premises Gateway Device 1 and the Alibaba Cloud VPN gateway consider the traffic selectors to be a match. Therefore, On-premises Gateway Device 1 can successfully negotiate with both IPsec-VPN Connection 1 and IPsec-VPN Connection 2.
    
    **Note**
    
    -   If the on-premises gateway device does not support this inclusive relationship (meaning it does not consider inclusive traffic selectors to be a match), the IPsec-VPN connection cannot be successfully negotiated. Confirm with the vendor whether the on-premises gateway device supports this inclusive relationship.
        
    -   If both the on-premises gateway device and the IPsec-VPN connection use IKEv1, the traffic selectors at both ends must be identical (no inclusive relationship is allowed) for the IPsec-VPN connection to be successfully negotiated.
        
    
    ![感兴趣流不一致.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0350045071/p742438.png)
    
    #### **Possible impacts**
    
    As shown in the preceding figure, if a VPN gateway has multiple IPsec-VPN connections and their traffic selector CIDR blocks have an inclusive relationship, traffic may not be forwarded along the expected path.
    
    For an IPsec-VPN connection configured in traffic selector mode, the system automatically adds routes to the policy-based route table of the VPN gateway after the connection is created. Each route has the same policy priority. In the scenario shown in the preceding figure, the system automatically adds the following routes to the policy-based route table of the VPN gateway:
    
    **Route entry name**
    
    **Source CIDR block**
    
    **Destination CIDR block**
    
    **Next hop**
    
    **Weight**
    
    **Policy priority**
    
    Route Entry 1
    
    10.66.90.0/24
    
    10.55.193.0/24
    
    IPsec-VPN Connection 1
    
    100
    
    10
    
    Route Entry 2
    
    10.66.89.0/24
    
    10.55.0.0/16
    
    IPsec-VPN Connection 2
    
    100
    
    10
    
    Route Entry 3
    
    10.66.90.0/24
    
    10.55.178.0/24
    
    IPsec-VPN Connection 3
    
    100
    
    10
    
    Route Entry 4
    
    10.66.88.0/24
    
    10.55.0.0/16
    
    IPsec-VPN Connection 4
    
    100
    
    10
    
    According to the [matching rules for policy-based routing](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-policy-based-routes#section-5y2-hwo-bug), if routes have the same policy priority, the system matches them sequentially. As soon as a route is matched, traffic is forwarded based on that route. The order of policy-based routes is determined by the time they are delivered to the system. Typically, the first configured route is delivered first, but this is not always the case. A route configured later may be delivered first, which gives it a higher priority than a route configured earlier.
    
    In the scenario shown in the preceding figure, the data center might send a request packet to the VPC through IPsec-VPN Connection 1, but the VPC sends the response packet to the data center through IPsec-VPN Connection 4. This can happen because Route Entry 4 might be delivered to the system first, giving it a higher priority than Route Entry 1.
    
    #### **Solutions**
    
    -   Avoid adding traffic selector CIDR blocks that have an inclusive relationship to the on-premises gateway device and the IPsec-VPN connection. We recommend that you add identical traffic selector CIDR blocks to both ends. This improves the stability of the IPsec-VPN connection.
        
    -   When you create an IPsec-VPN connection, add precise traffic selector CIDR blocks to ensure that the traffic selector CIDR blocks of multiple IPsec-VPN connections under the VPN gateway do not overlap.
        
    -   Configure different policy priorities and weights for each policy-based route to ensure that traffic matches only one route.
        
        If your VPN gateway does not support policy priority configuration, you can upgrade the instance. Upgraded VPN gateways support policy priority configuration for policy-based routes by default. For more information, see [Upgrade a VPN gateway](/help/en/vpn/sub-product-ipsec-vpn/user-guide/vpn-gateway-instance/#7bf21f8621txg).
        
    
-   The health check fails (Only For Single Tunnel Mode)?
    
    **Cause classification**
    
    **Cause**
    
    **Solution**
    
    Health check destination IP address issue
    
    The destination IP address for the health check is inaccessible.
    
    On the host associated with the destination IP address, use the `ping` command or `mtr` command to access the source IP address of the health check to test the connectivity of the destination IP address.
    
    If the destination IP address cannot access the source IP address, confirm whether the destination IP address is correctly configured.
    
    The host associated with the destination IP address for the health check is not working correctly and cannot promptly respond to the probe packets (ICMP messages) sent by the IPsec-VPN connection.
    
    Check whether the host associated with the destination IP address is working correctly. For more information, contact the gateway device vendor.
    
    The route configuration and security policy associated with the destination IP address for the health check were changed.
    
    For example, the security policy does not allow messages from the source IP address, to the destination IP address, or of the ICMP protocol type for the health check.
    
    On the on-premises gateway device, check the route configuration and security policy associated with the destination IP address to make sure that:
    
    -   The destination IP address can access the source IP address of the health check.
        
    -   The security policy allows messages from the source IP address, to the destination IP address, and of the ICMP protocol type for the health check.
        
    
    The destination IP address for the health check does not respond to the probe packets from the original path (the path on which the destination IP address receives the probe packets).
    
    Use the `mtr` command to check whether the request and response packets travel along the same path when the destination IP address accesses the source IP address of the health check. If not, check the route configuration on the on-premises gateway device to make sure that the request and response packets travel along the same path.
    
    IPsec-VPN connection issues
    
    The IPsec-VPN connection negotiation is interrupted.
    
    Check the IPsec-VPN connection log to determine whether the connection status is always "Phase 2 Negotiation Succeeded".
    
    If the IPsec-VPN connection negotiation status is unstable, check the IPsec-VPN connection log to troubleshoot the issue. For more information, see [Troubleshoot IPsec-VPN](/help/en/vpn/sub-product-ipsec-vpn/support/troubleshoot-ipsec-vpn-connection-issues#task-2288402).
    
    **Note**
    
    If an IPsec-VPN connection health check fails, the system resets the IPsec tunnel. If active/standby IPsec-VPN connections are not involved, don't configure health checks for the IPsec-VPN connection. You can enable the Dead Peer Detection (DPD) feature for the IPsec-VPN connection to detect the connectivity of the peer.
    
    For information about scenarios that involve active/standby IPsec-VPN connections, see [Establish an HA IPsec-VPN connection based on multiple public IP addresses (active/standby links)](/help/en/vpn/sub-product-ipsec-vpn/use-cases/use-two-public-ip-addresses-to-create-active-or-standby-ipsec-vpn-connections#task-qrk-klg-xdb) and [HA - Dual customer gateways](/help/en/vpn/use-two-customer-gateways-for-high-availability#task-qrk-klg-xdb).
    

## Reference: Error Code and Log Keyword

Use Ctrl+F(Win) or Cmd+F(Mac) to look up the same error code or the keyword of the log entry in the following table to find the corresponding solution.

**Console-based error code**

**API-based error code**

**Error message**

**Keyword of the log entry**

**Solution**

The peer does not match.

PeerMismatch

The packet received does not match the customer gateway information.

`received UNSUPPORTED_CRITICAL_PAYLOAD error`

1.  Make sure that the IP address of the customer gateway associated with the IPsec-VPN connection is the same as that of the customer gateway device.
    
2.  If the customer gateway device is assigned multiple IP addresses, make sure that the IP address used by the customer gateway device is specified as the IP address of the customer gateway.
    

The algorithm does not match.

AlgorithmMismatch

The encryption algorithm, authentication algorithm, or DH group parameter does not match.

-   `HASH mismatched`
    
-   `parsed INFORMATIONAL_V1 request`
    
-   `packet lacks expected payload`
    
-   `authentication failure`
    

1.  Make sure that the following configurations of the IPsec-VPN connection are the same as those of the customer gateway device: the **encryption algorithm**, **authentication algorithm**, and **DH group** in the **IKE configuration** and **IPsec configuration**.
    
2.  If multiple **encryption algorithms**, **authentication algorithms**, or **DH groups** are specified in the **IKE configuration** and **IPsec configuration** of the customer gateway device, we recommend that you configure the customer gateway device to use the **encryption algorithm**, **authentication algorithm**, or **DH group** specified for the IPsec-VPN connection.
    
    **Note**
    
    When you configure the IP-sec VPN connection on the Alibaba Cloud side, specify only one **encryption algorithm**, **authentication algorithm**, and **DH group** in the **IKE configuration** and **IPsec configuration**.
    

The encryption algorithm does not match.

EncryptionAlgorithmMismatch

The encryption algorithm of the IPsec-VPN connection does not match.

-   `invalid encryption algorithm`
    
-   `trns_id mismatched`
    
-   `rejected enctype`
    
-   `authentication failure`
    

1.  Make sure that the **encryption algorithm** in the **IPsec configuration** of the IPsec-VPN connection is the same as that of the customer gateway device.
    
2.  If multiple **encryption algorithms** are specified in the **IPsec configuration** of the customer gateway device, we recommend that you configure the customer gateway device to use the **encryption algorithm** specified for the IPsec-VPN connection.
    

The authentication algorithm does not match.

AuthenticationAlgorithmMismatch

The authentication algorithm of IKE does not match.

-   `authtype mismatched`
    
-   `rejected hashtype`
    
-   `authentication failure`
    

1.  Make sure that the **authentication algorithm** in the **IKE configuration** of the IPsec-VPN connection is the same as that of the customer gateway device.
    
2.  If multiple **authentication algorithms** are specified in the **IKE configuration** of the customer gateway device, we recommend that you configure the customer gateway device to use the **authentication algorithm** specified for the IPsec-VPN connection.
    

The DH group does not match.

DhGroupMismatch

The Phase 1 DH group parameter of IKE does not match.

-   `received KE type 14,expected 2`
    
-   `failed to compute dh value`
    
-   `rejected dh_group`
    
-   `proposal mismatch, transform type:4`
    

1.  Make sure that the **DH group** in the **IKE configuration** of the IPsec-VPN connection is the same as that of the customer gateway device.
    
2.  If multiple **DH groups** are specified in the **IKE configuration** of the customer gateway device, we recommend that you configure the customer gateway device to use the **DH group** specified for the IPsec-VPN connection.
    
3.  If multiple IPsec-VPN connections are associated with the customer gateway, make sure that all IPsec-VPN connections use the same **IKE configuration**, including the **version**, **negotiation mode**, **encryption algorithm**, **authentication algorithm**, **DH group**, and **SA lifecycle (seconds)**.
    
    The **on-premisesId** value of the IPsec-VPN connection must be the same as the **RemoteId** value of the customer gateway device. The **RemoteId** value of the IPsec-VPN connection must be the same as the **on-premisesId** value of the customer gateway device.
    

The pre-shared key does not match.

PskMismatch

The pre-shared key does not match.

-   `Decryption failed! mismatch of preshared secrets`
    
-   `mismatch of preshared secrets`
    
-   `invalid HASH_V1 payload length, decryption failed`
    
-   `could not decrypt payloads`
    
-   `authentication failure`
    

1.  Make sure that the **pre-shared key** of the IPsec-VPN connection is the same as that of the customer gateway device.
    
    You can modify the **pre-shared key** of the IPsec-VPN connection or customer gateway device to trigger an IPsec negotiation. The system automatically checks whether the **pre-shared keys** on both ends are the same.
    
2.  If the IPsec-VPN connection and customer gateway device use the same **pre-shared key**, make sure that they also use the same **encryption algorithm**, **authentication algorithm**, and **DH group** in the **IKE configuration** and **IPsec configuration**.
    
3.  If multiple **encryption algorithms**, **authentication algorithms**, or **DH groups** are specified in the **IKE configuration** and **IPsec configuration** of the customer gateway device, we recommend that you configure the customer gateway device to use the **encryption algorithm**, **authentication algorithm**, or **DH group** specified for the IPsec-VPN connection.
    

PeerID does not match.

PeerIdMismatch

The on-premisesID or RemoteID parameter does not match or is incompatible.

-   `does not match peers id`
    
-   `message lacks IDr payload`
    
-   `Expecting IP address type in main mode,but FQDN`
    
-   `Unknow peer id`
    
-   `Parse PEERID failed`
    
-   `received ID_I(xxx) does not match peers id`
    

1.  Make sure that the **on-premisesId** value of the IPsec-VPN connection is the same as the **RemoteId** value of the customer gateway device and the **RemoteId** value of the IPsec-VPN connection is the same as the **on-premisesId** value of the customer gateway device. If the values are different, change the values.
    
    -   If your IPsec-VPN connection is associated with a VPN gateway, the IP address of the VPN gateway is specified as the **on-premisesId** value of the IPsec-VPN connection and the IP address of the customer gateway is specified as the **RemoteId** value by default.
        
    -   If your IPsec-VPN connection is associated with a transit router, the gateway IP address of the IPsec-VPN connection is specified as the **on-premisesId** value of the IPsec-VPN connection and the IP address of the customer gateway is specified as the **RemoteId** value by default.
        
2.  If the IKE version and **negotiation mode** of the IPsec-VPN connection are **ikev1** and **main**, the **on-premisesId** and **RemoteId** parameters support only IP addresses. Make sure that the values of the **on-premisesId** and **RemoteId** parameters are valid.
    
3.  Make sure that the **negotiation mode** of the IPsec-VPN connection is the same as that of the customer gateway device.
    
    We recommend that you set the negotiation mode of the connection and customer gateway device to **main** and set the **on-premisesId** and **RemoteId** parameters in the **main** mode to IP addresses.
    
4.  If the IKE version of the IPsec-VPN connection is **ikev2** and you have verified the preceding configurations, check whether the IPsec-VPN connection and customer gateway device use the same **encryption algorithm**, **authentication algorithm**, and **DH group** in the **IKE configuration** and **IPsec configuration**. If the configurations are different, modify the configurations.
    

DPD payload sequence is incompatible.

DpdHashNotifyCompatibility

DPD payload sequence is incompatible.

`ignore information because the message has no hash payload`

In scenarios where the Dead Peer Detection (DPD) feature is enabled, the default payload sequence is `hash-notify`. Check whether the DPD payload sequence of the customer gateway device is `hash-notify`. If not, change the payload sequence to `hash-notify`.

DPD timed out.

DpdTimeout

DPD packets timed out.

`DPD: remote seems to be dead`

1.  Make sure that DPD is enabled for both the IPsec-VPN connection and customer gateway device.
    
    **Note**
    
    DPD packet timeouts can trigger IPsec negotiations.
    
2.  Check the network conditions and routing configuration of the IPsec-VPN connection and customer gateway device. Make sure that no connectivity issues occur between the IPsec-VPN connection and customer gateway device.
    

The IKE version does not match.

IkeVersionMismatch

The IKE version or negotiation mode does not match.

`unknown ikev2 peer`

1.  Make sure that the IPsec-VPN connection and customer gateway device use the same IKE version.
    
    -   If the customer gateway device supports automatic IKE version selection or supports both IKEv1 and IKEv2, we recommend that you manually specify an IKE version for the customer gateway device and configure the IPsec-VPN connection to use the same IKE version.
        
    -   We recommend that you select the IKEv2 version.
        
2.  Make sure that the IPsec-VPN connection and customer gateway device use the same **negotiation mode**.
    

The negotiation mode does not match.

NegotiationModeMismatch

The negotiation mode does not match.

-   `in Identity not acceptable Aggressive mode`
    
-   `not acceptable Identity Protection mode`
    

1.  Make sure that the IPsec-VPN connection and customer gateway device use the same **negotiation mode**.
    
    We recommend that you set the negotiation mode to **main**.
    
2.  If the IPsec negotiation still fails when both the IPsec-VPN connection and customer gateway device use the **main** mode, you can change the negotiation mode of the IPsec-VPN connection and customer gateway device to **aggressive**. This issue occurs only in a few scenarios.
    

NAT-T does not match.

NatTMismatch

NAT traversal does not match.

`ignore the packet, received unexpecting payload type 130`

Make sure that the IPsec-VPN connection and customer gateway device use the same NAT traversal setting.

If the customer gateway device is a backend device of a NAT gateway, we recommend that you enable NAT traversal for the IPsec-VPN connection and customer gateway device.

SA Lifetime does not match.

LifetimeMismatch

The Lifetime parameter does not match.

`long lifetime proposed`

Make sure that the **SA lifecycle (seconds)** of the IPsec-VPN connection in the **IKE configuration** and **IPsec configuration** is the same as that of the customer gateway device.

The IPsec-VPN connection and customer gateway device can use different **SA lifecycle (seconds)** values. However, to ensure the stability of the IPsec-VPN connection when customer gateway devices from different manufacturers are used, we recommend that you configure the IPsec-VPN connection and customer gateway device to use the same **SA lifecycle (seconds)** value.

The security protocol does not match.

SecurityProtocolMismatch

The security protocol does not match.

`proto_id mismatched`

Make sure that the customer gateway device uses Encapsulating Security Payload (ESP) as the security protocol.

VPN Gateway supports only the ESP protocol for IPsec-VPN connections. Authentication Header (AH) is not supported.

The encapsulation mode does not match.

EncapsulationModeMismatch

The encapsulation mode does not match.

`encmode mismatched`

Make sure that the encapsulation mode of the customer gateway device is set to tunneling.

VPN Gateway supports only the tunneling mode for IPsec-VPN connections. The transmission mode is not supported.

The algorithm is incompatible.

AlgorithmCompatibility

The algorithm is incompatible.

N/A

If the **authentication algorithm** in the **IKE configuration** and **IPsec configuration** of the IPsec-VPN connection and customer gateway device is incompatible, select another **authentication algorithm**, such as **md5**.

Protected Data Flow does not match.

TrafficSelectorMismatch

The Protected Data Flows parameter does not match.

-   `traffic selector mismatch`
    
-   `invalid-id-information`
    
-   `traffic selector unacceptable`
    
-   `can't find matching selector`
    
-   `received INVALID_ID_INFORMATION error notify`
    
-   `received Notify type TS_UNACCEPTABLE`
    

1.  Check the CIDR blocks of the protected data flows based on the IKE version of the IPsec-VPN connection and make sure that the CIDR blocks meet the following requirements:
    
    -   If the IKE version of the IPsec-VPN connection is **ikev1**, the protected data flows support only one CIDR block.
        
    -   If the IKE version of the IPsec-VPN connection is **ikev2**, the protected data flows support multiple CIDR blocks.
        
        **Note**
        
        If multiple CIDR blocks are configured for the IPsec-VPN connection and the IPsec negotiation configurations of the IPsec-VPN connection and customer gateway device are different, some CIDR blocks may be inaccessible. For more information about how to resolve this issue, see the [Why is traffic normal for some CIDR blocks but abnormal for others in a multi-CIDR block scenario when the IPsec-VPN connection status is "Phase 2 Negotiation Succeeded"?](/help/en/vpn/sub-product-ipsec-vpn/support/faq-about-ipsec-vpn-connections#section-njl-v3h-xdb) section of the "FAQ about IPsec-VPN connections" topic.
        
2.  Check whether the CIDR blocks of the protected data flows for the IPsec-VPN connection and customer gateway device meet the following requirements:
    
    -   The on-premises CIDR block of the protected data flows for the IPsec-VPN connection is the same as the peer CIDR block of the protected data flows for the customer gateway device.
        
    -   The peer CIDR block of the protected data flows for the IPsec-VPN connection is the same as the on-premises CIDR block of the protected data flows for the customer gateway device.
        

PFS does not match.

PfsMismatch

The Phase 2 DH group parameter does not match.

-   `pfs group mismatched`
    
-   `message lacks KE payload`
    

Make sure that the IPsec-VPN connection and customer gateway device use the same Perfect Forward Secrecy (PFS) setting in the **IPsec configuration**.

-   If the **DH group** setting in the **IPsec configuration** of the IPsec-VPN connection is set to **disabled**, PFS is disabled for the connection. You need to disable PFS for the customer gateway device.
    
-   If the **DH group** setting in the **IPsec configuration** of the IPsec-VPN connection is set to a value other than **disabled**, PFS is enabled for the connection. You need to enable PFS for the customer gateway device.
    

We recommend that you enable PFS for the IPsec-VPN connection and customer gateway device.

The commit bit does not match.

CommitMismatch

The commit bit does not match.

N/A

Make sure that commits are disabled for the customer gateway device.

Commits can ensure that IPsec negotiations are complete before the protected data flows are transmitted. VPN Gateway does not support commits.

The proposal does not match.

ProposalMismatch

The proposal does not match.

-   `no proposal chosen`
    
-   `received NO_PROPOSAL_CHOSEN`
    
-   `no suitable proposal found`
    
-   `failed to get valid proposal`
    
-   `none of my proposal matched`
    
-   `no matching proposal found, sending NO_PROPOSAL_CHOSEN`
    
-   `proposal mismatch`
    
-   `couldn't find configuaration`
    
-   `ignore the packet,expecting the packet encrypted`
    

1.  Make sure that the IPsec-VPN connection and customer gateway device use the same IKE version.
    
    We recommend that you select IKEv2.
    
2.  Check whether the IPsec-VPN connection and customer gateway device use the same **IKE configuration**. If they use different IKE configurations, modify the configurations to meet the following requirements:
    
    -   The IPsec-VPN connection and customer gateway device use the same **version**, **negotiation mode**, **encryption algorithm**, **authentication algorithm**, **DH group**, and **SA lifecycle (seconds)**.
        
    -   The **on-premisesId** value of the IPsec-VPN connection is the same as the **RemoteId** value of the customer gateway device and the **RemoteId** value of the IPsec-VPN connection is the same as the **on-premisesId** value of the customer gateway device.
        
3.  Check whether the IPsec-VPN connection and customer gateway device use the same **IPsec configuration**, including the **encryption algorithm**, **authentication algorithm**, **DH group**, **SA lifecycle (seconds)**, and **NAT traversal**. If they use different IPsec configurations, modify the configurations.
    
    Make sure that the protected data flows of the IPsec-VPN connection and customer gateway device meet the following requirements:
    
    -   The on-premises CIDR block of the protected data flows for the IPsec-VPN connection is the same as the peer CIDR block of the protected data flows for the customer gateway device.
        
    -   The peer CIDR block of the protected data flows for the IPsec-VPN connection is the same as the on-premises CIDR block of the protected data flows for the customer gateway device.
        
    
4.  If multiple IPsec-VPN connections are associated with the customer gateway, make sure that all IPsec-VPN connections use the same **IKE configuration**, including the **version**, **negotiation mode**, **encryption algorithm**, **authentication algorithm**, **DH group**, and **SA lifecycle (seconds)**.
    
    The **on-premisesId** value of each IPsec-VPN connection must be the same as the **RemoteId** value of the customer gateway device. The **RemoteId** value of each IPsec-VPN connection must be the same as the **on-premisesId** value of the customer gateway device.
    
5.  Reset the IPsec-VPN connection to trigger an IPsec negotiation.
    

Negotiation failed.

NegotiationFailed

Negotiation failed.

`phase2 negotiation failed due to time up waiting for phase1`

Reset the IPsec-VPN connection to trigger an IPsec negotiation. The system checks the negotiation configuration again.

Phase 1 negotiations timed out.

Phase1NegotiationTimeout

Phase 1 packets cannot be received and negotiation timed out.

-   `phase1 negotiation failed due to time up`
    
-   `ignore information because ISAKMP-SA has not been established`
    

1.  Make sure that the customer gateway device can receive and send IPsec packets as expected.
    
2.  Make sure that the IP address of the customer gateway associated with the IPsec-VPN connection is the same as that of the customer gateway device.
    
3.  Check for anomalies, such as unexpected restarts, in the customer gateway device.
    
4.  Make sure that the IPsec-VPN connection and customer gateway device can access each other.
    
    Run the `ping`, `mtr`, or `traceroute` command on the customer gateway device to check whether the IP address of the VPN gateway or the gateway IP address of the IPsec-VPN connection is accessible.
    
5.  VPN Gateway does not support cross-border IPsec-VPN connections. If you want to create a cross-border IPsec-VPN connection, use Cloud Enterprise Network (CEN). For more information, see [What is CEN?](/help/en/cen/product-overview/what-is-cen/#concept-2090845)
    
6.  Reset the IPsec-VPN connection to trigger an IPsec negotiation.
    

Phase 2 negotiations timed out.

Phase2NegotiationTimeout

Phase 2 packets cannot be received and negotiation timed out.

N/A

1.  Make sure that the IPsec-VPN connection and customer gateway device use the same **IPsec configuration**, including the **encryption algorithm**, **authentication algorithm**, **DH group**, and **SA lifecycle (seconds)**.
    
2.  Check whether the IPsec-VPN connection and customer gateway device use the same NAT traversal setting. Make sure that the IPsec-VPN connection and customer gateway device have NAT traversal enabled or disabled at the same time.
    
3.  Change the IKE versions of the IPsec-VPN connection and customer gateway device to IKEv1 or IKEv2.
    

Response packets cannot be received from the peer.

NoResponse

The peer gateway does not respond.

-   `sending retransmit 1 of request message ID 0, seq 1`
    
-   `retransmission count exceeded the limit`
    

1.  Make sure that the customer gateway device can receive and send IPsec packets as expected.
    
2.  Make sure that the IP address of the customer gateway associated with the IPsec-VPN connection is the same as that of the customer gateway device.
    
3.  Check for anomalies, such as unexpected restarts, in the customer gateway device.
    
4.  Make sure that the IPsec-VPN connection and customer gateway device can access each other.
    
    Run the `ping`, `mtr`, or `traceroute` command on the customer gateway device to check whether the IP address of the VPN gateway or the gateway IP address of the IPsec-VPN connection is accessible.
    
5.  Make sure that the access control policy of the customer gateway device meets the following requirements:
    
    -   UDP ports 500 and 4500 are open.
        
    -   The IP address of the VPN gateway or the gateway IP address of the IPsec-VPN connection is allowed.
        
6.  Reset the IPsec-VPN connection to trigger an IPsec negotiation.
    

The delete packet is received from the peer.

ReceiveDeleteNotify

The delete packet from the peer is received.

`received DELETE IKE_SA`

If the IPsec-VPN connection receives a `delete notify` packet from the customer gateway device, troubleshoot the issue on the customer gateway device.

The reason for the negotiation exception is not found.

NoExceptionFound

The reason for the negotiation exception is not found.

N/A

The IPsec-VPN connection may not have started an IPsec negotiation. Reset the IPsec-VPN connection on the Alibaba Cloud side or customer gateway device.

On the Alibaba Cloud side, you can change the value of the **Effective Immediately** parameter for the IPsec-VPN connection, save the change, and then set the **Effective Immediately** parameter to the original value to trigger an IPsec negotiation. Then, refresh the page and check the negotiation result.
