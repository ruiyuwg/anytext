A Virtual Border Router (VBR) connects your customer-premises equipment (CPE) to a virtual private cloud (VPC) through an Express Connect circuit. After the circuit is provisioned, create a VBR to forward traffic between the VPC and your customer-premises equipment (CPE).

## Overview

Each VBR has a route table for managing traffic forwarding and supports the following:

-   Exchanges data packets between a VPC and an on-premises data center as an intermediate router.
    
-   Sets the port mode of the Express Connect circuit interface to a Layer 3 routed interface or a VLAN-based Layer 3 subinterface. In Layer 3 subinterface mode, the VBR can recognize or attach VLAN tags.
    
-   Supports dynamic routing with Border Gateway Protocol (BGP).
    

## Create a VBR

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com/).
    
2.  In the top navigation bar, select the region. In the left-side navigation pane, click **Virtual Border Routers (VBRs)**.
    
3.  On the **Virtual Border Routers (VBRs)** page, click **Create VBR**.
    
4.  In the **Create VBR** panel, configure the following parameters, and click **OK**.
    
    **Note**
    
    If cloud services in your VPC need to access the Alibaba Cloud-side or customer-side IPv4 addresses, add a route entry to the VBR route table. Set the destination to the CIDR block that contains the IPv4 addresses, and set the next hop to the Express Connect circuit. For more information, see [Add a custom route entry](/help/en/express-connect/user-guide/add-and-manage-routes#section-vw8-7mh-fme).
    
    **Parameter**
    
    **Description**
    
    **Account**
    
    The account where the VBR is created. **Current Account** is selected by default.
    
    **Name**
    
    Enter a name for the VBR.
    
    **Resource Group**
    
    Select a resource group for the VBR. You can also add the VBR to a resource group after creation. Find the VBR instance and click **Add to Resource Group** in the **Resource Group** column.
    
    **Tags**
    
    Select an existing tag key and value, or enter a new key-value pair. Tags help categorize and manage VBR instances.
    
    **Express Connect Circuit**
    
    Select the interface type to bind to the VBR: **Hosted** or **Dedicated**. The Express Connect circuit must be provisioned and running. Then, select a circuit from the drop-down list.
    
    **VLAN ID**
    
    Enter a VLAN ID (0 to 2999).
    
    **VBR Bandwidth**
    
    Set the bandwidth for the VBR. For a hosted circuit, this parameter is not required. The VBR inherits its bandwidth.
    
    **Alibaba Cloud Side IPv4 Address**
    
    The IPv4 gateway address for traffic from the VPC to the on-premises data center. This address and the **Data Center Side IPv4 Address** must be in the same CIDR block.
    
    **Data Center Side IPv4 Address**
    
    The IPv4 gateway address for traffic from the on-premises data center to the VPC.
    
    **IPv4 Subnet Mask**
    
    The subnet mask for the Alibaba Cloud-side and customer-side IPv4 addresses. Because only two IP addresses are required, use a long prefix length.
    
    **Support IPv6**
    
    **Disable** (default) or **Enable**. After you enable IPv6, you cannot disable it. When enabled, configure **Alibaba Cloud Side IPv6 Address** (must be in the same CIDR block as the customer-side IPv6 address), **Data Center Side IPv6 Address**, and **IPv6 Subnet Mask**.
    

### VLAN ID reference

The VLAN ID determines the port mode of the VBR:

-   **0**: The circuit port uses Layer 3 routed interface mode. Each Express Connect circuit corresponds to one VBR. For a dedicated circuit with VLAN ID set to 0, you cannot create subinterfaces with other VLANs for this VBR.
    
-   **1 to 2999**: The circuit port uses VLAN-based Layer 3 subinterfaces. Each VLAN ID corresponds to one VBR. This allows the Express Connect circuit to connect to VPCs under different Alibaba Cloud accounts. VBRs in different VLANs are isolated at Layer 2 and cannot communicate with each other.
    

**Note**

-   For a dedicated circuit, ensure that all Layer 2 and Layer 3 devices between the ISP circuit, the VBR, and your on-premises access device have VLAN trunking enabled for your VLAN tag. If any device does not recognize the VLAN tag or performs VLAN translation, you may experience connectivity issues.
    
-   For a hosted circuit, the **VLAN ID** is automatically set and cannot be changed.
    

## Modify VBR settings

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region. In the left-side navigation pane, click **Virtual Border Routers (VBRs)**.
    
3.  On the **Virtual Border Routers (VBRs)** page, find the VBR instance and click **Actions** in the **Modify** column.
    
4.  Modify the VBR settings, and click **OK**.
    
    **Note**
    
    BFD parameters take effect only after you enable BFD. For more information, see [Configure and manage BGP](/help/en/express-connect/user-guide/configure-and-manage-bgp#task-2182019).
    
    **Parameter**
    
    **Description**
    
    **VLAN ID**
    
    Enter a VLAN ID (0 to 2999).
    
    **Alibaba Cloud Side IPv4 Address**
    
    The IPv4 gateway address for traffic from the VPC to the on-premises data center.
    
    **Data Center Side IPv4 Address**
    
    The IPv4 gateway address for traffic from the on-premises data center to the VPC.
    
    **IPv4 Subnet Mask**
    
    The subnet mask for the Alibaba Cloud-side and customer-side IPv4 addresses. Because only two IP addresses are required, use a long prefix length.
    
    **Support IPv6**
    
    **Disable** (default) or **Enable**. After you enable IPv6, you cannot disable it. When enabled, configure **Alibaba Cloud Side IPv6 Address** (must be in the same CIDR block as the customer-side IPv6 address), **Data Center Side IPv6 Address**, and **IPv6 Subnet Mask**.
    
    **Support Jumbo Frame**
    
    Enable to set the MTU to 8500. By default, this feature is disabled (MTU = 1500). For more, see [Jumbo frame considerations](#h3-0d574a0c).
    
    **BFD Parameter**
    
    When enabled, a BFD session is established between the Alibaba Cloud side and your on-premises data center. Both ends periodically send BFD packets. If one end does not receive a packet within the detection time, the connection is considered faulty. Configure **Submission Interval** (200 to 1,000 ms), **Reception Interval** (200 to 1,000 ms), and **Detection Time Multiplier** (3 to 10).
    

### Jumbo frame considerations

-   Jumbo frames can be enabled only after the VBR is bound to an Express Connect Router (ECR).
    
-   Changing the jumbo frame setting temporarily interrupts the network connection. Ensure that failover measures are in place.
    
-   The Path MTU Discovery (PMTUD) mechanism determines the effective MTU for a path based on the smallest MTU of any link in that path. If a device on the path does not support jumbo frames, the path MTU is 1500. For example:
    
    -   If two VBRs use Equal-Cost Multi-Path (ECMP) routing and one has jumbo frames disabled, the path MTU is 1500.
        
    -   If two VBRs are configured for active/standby failover and the primary VBR has jumbo frames enabled while the standby VBR does not, the primary path MTU is 8500. If the primary path fails and traffic switches to the standby path, the path MTU becomes 1500.
        
-   For ECS instance types that support jumbo frames, see [Instance types that support jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#03b3c599c029m).
    

## Change VBR bandwidth

You can modify the bandwidth specifications of free VBR instances.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region. In the left-side navigation pane, click **Physical Connection**.
    
3.  On the **Physical Connection** page, click the ID of the Express Connect circuit interface.
    
4.  On the details page, find the VBR instance and click **Actions** in the **Bandwidth Settings** column.
    
5.  In the **Bandwidth Settings** panel, select a **Bandwidth Cap**, and click **OK**.
    

## Increase the VBR quota

After you enable outbound traffic billing, you can create a maximum of five VBRs for each Express Connect circuit per account. To request a quota increase:

Go to the [Quota Center](https://expressconnect.console.alibabacloud.com/quota) page, search for the **ec\_quota\_same\_acount\_vbr\_per\_pconn** quota, and click **Submit Ticket** in the **Actions** column.

## Delete a VBR

### Before you begin

Release all associated resources:

-   Delete all route entries. For more information, see [Delete a custom route entry](/help/en/express-connect/user-guide/add-and-manage-routes#section-6lz-2mn-w5k) and [Delete a prefix-based route](/help/en/express-connect/user-guide/add-and-manage-route-prefixes#section-yi9-36j-306).
    
-   Delete BGP peers, BGP groups, and advertised BGP CIDR blocks. For more information, see [Configure and manage BGP](/help/en/express-connect/user-guide/configure-and-manage-bgp#task-2182019).
    
-   Delete the failover group. For more information, see [Configure a failover group](/help/en/express-connect/user-guide/configure-a-failover-group#task-2067261).
    
-   Unbind the Cloud Enterprise Network (CEN) instance. For more information, see [Unbind from a CEN instance](/help/en/express-connect/user-guide/connect-to-a-vpc#section-x9j-u0w-dlh).
    
-   Delete the Peering Connection. For more information, see [Delete a VBR uplink connection](/help/en/express-connect/user-guide/create-and-manage-a-vbr-to-vpc-connection#section-3kf-e4i-g3e).
    
-   If the VBR is bound to multiple Express Connect circuit interfaces, unbind them first.
    

### Procedure

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region. In the left-side navigation pane, click **Virtual Border Routers (VBRs)**.
    
3.  On the **Virtual Border Routers (VBRs)** page, find the VBR instance and click **Delete** in the **Actions** column.
    
    **Note**
    
    If the VBR is bound to multiple Express Connect circuit interfaces, click the VBR instance ID. On the **Physical Connection Interfaces** tab, find the interface and click **Unbind** in the **Actions** column.
    
4.  In the **Confirm Deletion** dialog box, click **OK**.
    

## APIs

**API**

**Description**

[CreateVirtualBorderRouter](/help/en/express-connect/api-vpc-2016-04-28-createvirtualborderrouter-efficiency-channels)

Creates a VBR instance.

[ModifyVirtualBorderRouterAttribute](/help/en/express-connect/api-vpc-2016-04-28-modifyvirtualborderrouterattribute-efficiency-channels)

Modifies the configuration of a VBR instance.

[UpdateVirtualBorderBandwidth](/help/en/express-connect/api-vpc-2016-04-28-updatevirtualborderbandwidth-efficiency-channels)

Updates the outbound bandwidth limit of a VBR instance.

[DescribeVirtualBorderRouters](/help/en/express-connect/api-vpc-2016-04-28-describevirtualborderrouters-efficiency-channels)

Queries VBR instances in your account.

[DescribeVirtualBorderRoutersForPhysicalConnection](/help/en/express-connect/api-vpc-2016-04-28-describevirtualborderroutersforphysicalconnection-efficiency-channels)

Queries VBR instances under a specified Express Connect circuit, including VBRs owned by other accounts.

[DeleteVirtualBorderRouter](/help/en/express-connect/api-vpc-2016-04-28-deletevirtualborderrouter-efficiency-channels)

Deletes a VBR instance.

[AttachVbrToVpconn](/help/en/express-connect/api-vpc-2016-04-28-attachvbrtovpconn-efficiency-channels)

Associates a VBR with a hosted connection.

[ListVirtualPhysicalConnections](/help/en/express-connect/api-vpc-2016-04-28-listvirtualphysicalconnections-efficiency-channels)

Queries information about a hosted connection.
