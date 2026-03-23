An IPsec-VPN connection in dual-tunnel mode has an active tunnel and a standby tunnel. If the active tunnel is down, the standby tunnel takes over to ensure service availability. This topic describes how to upgrade a VPN gateway to enable the dual-tunnel mode.

## **Background information**

Before you upgrade a VPN gateway to enable the dual-tunnel mode, we recommend that you know more about the dual-tunnel mode such as the network topology and data transfer path. For more information, see [Associate an IPsec-VPN connection with a VPN gateway](/help/en/vpn/sub-product-ipsec-vpn/user-guide/ipsec-vpn-connections-support-the-dual-tunnel-mode/).

## **Bandwidth changes after the upgrade**

-   If your single-tunnel VPN gateway has a bandwidth specification of 100 Mbps or less:
    
    **Supported IPsec-VPN tunnel mode**
    
    **Peak bandwidth from the VPN gateway to the data center**
    
    **Peak bandwidth from the data center to the VPN gateway**
    
    Before upgrade
    
    The bandwidth specification of the VPN gateway.
    
    100 Mbps.
    
    After upgrade
    
    The bandwidth specification of the VPN gateway.
    
    The bandwidth specification of the VPN gateway.
    
-   If your single-tunnel VPN gateway has a bandwidth specification greater than 100 Mbps, the peak bandwidth remains unchanged after the upgrade and is the same as the bandwidth specification of the instance.
    

## **Supported regions and zones**

The following table describes the regions and zones in which you can upgrade IPsec-VPN connections to enable the dual-tunnel mode.

**Note**

You can call the [DescribeVpnGatewayAvailableZones](/help/en/vpn/sub-product-ipsec-vpn/developer-reference/api-vpc-2016-04-28-describevpngatewayavailablezones-vpns) operation to query zones that support dual-tunnel IPsec-VPN connections in the specified region. If the zones listed in the table differ from the information returned by the [DescribeVpnGatewayAvailableZones](/help/en/vpn/sub-product-ipsec-vpn/developer-reference/api-vpc-2016-04-28-describevpngatewayavailablezones-vpns) operation, the zones returned by the [DescribeVpnGatewayAvailableZones](/help/en/vpn/sub-product-ipsec-vpn/developer-reference/api-vpc-2016-04-28-describevpngatewayavailablezones-vpns) operation shall prevail.

**Region**

**Zone**

China (Hangzhou)

K, J, I, H, G

China (Shanghai)

L, M, N, A, B, E, F, G

China (Nanjing - Local Region)

A

China (Shenzhen)

A (no longer available for purchase), C, E, D, F

China (Heyuan)

A, B

China (Guangzhou)

A, B

China (Qingdao)

B, C

China (Beijing)

F, E, H, G, A, C, J, I, L, K

China (Zhangjiakou)

A, B, C

China (Hohhot)

A, B

China (Ulanqab)

A, B, C

China (Chengdu)

A, B

China (Hong Kong)

B, C, D

Singapore

A, B, C

Thailand (Bangkok)

A

Japan (Tokyo)

A, B, C

South Korea (Seoul)

A

Philippines (Manila)

A

Indonesia (Jakarta)

A, B, C

Malaysia (Kuala Lumpur)

A, B

UK (London)

A, B

Germany (Frankfurt)

A, B, C

US (Silicon Valley)

A, B

US (Virginia)

A, B

Mexico

A

SAU (Riyadh - Partner Region)

A, B

UAE (Dubai)

A

## **Prerequisites**

Before you upgrade a VPN gateway, make sure that the following requirements are met:

-   The AliyunServiceRoleForVpn service-linked role is created within your Alibaba Cloud account.
    
    During the upgrade process, the system assumes the AliyunServiceRoleForVpn role to deploy the VPN Gateway resources. You can go to the [VPN Gateway buy page](https://common-buy-intl.alibabacloud.com/?spm=5176.9843921.content.10.1a594882Si0oN2&commodityCode=vpn_flow_intl&regionId=cn-qingdao#/buy) to check whether the AliyunServiceRoleForVpn service-linked role is created within the current Alibaba Cloud account.
    
    -   If **Created** is displayed on the buy page, the AliyunServiceRoleForVpn service-linked role is created within your Alibaba Cloud account.
        
    -   If **Create Service-linked Role** is displayed on the buy page, click **Create Service-linked Role**. Then, the system automatically creates the AliyunServiceRoleForVpn service-linked role. For more information, see [AliyunServiceRoleForVpn](/help/en/vpn/security-and-compliance/aliyunserviceroleforvpn).
        
    
    ![服务关联角色-EN](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0301831271/p812340.png)
    
-   IPsec-VPN and SSL-VPN are not enabled at the same time.
    
    If both IPsec-VPN and SSL-VPN are enabled, you can downgrade the VPN gateway to disable IPsec-VPN or SSL-VPN. For more information, see the [Downgrade](/help/en/vpn/sub-product-ipsec-vpn/upgrade-or-downgrade-a-ipsec-vpn-gateway#section-cyb-gyc-64c) section of the "Upgrade or downgrade a VPN gateway" topic.
    
    Before you disable IPsec-VPN or SSL-VPN, make sure that no IPsec-VPN connection or SSL server exists on the VPN gateway. For more information, see the [Delete an IPsec-VPN connection](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-ipsec-vpn-connections-in-single-tunnel-mode#section-y01-6s7-1uc) section of the "Create and manage IPsec-VPN connections in single-tunnel mode" topic or [Delete an SSL server](/help/en/vpn/delete-an-ssl-server).
    
-   Routes with the same source CIDR block and destination CIDR block in policy-based or destination-based route tables do not point to different IPsec-VPN connections.
    
    The following table provides some sample scenarios and solutions.
    
    **Route table**
    
    **Source CIDR block**
    
    **Destination CIDR block**
    
    **Next hop**
    
    **Support upgrade**
    
    **Solution**
    
    Policy-based route table
    
    10.10.10.0/24
    
    172.16.10.0/24
    
    IPsec-VPN Connection 1
    
    No.
    
    You cannot upgrade the VPN gateway because the routes in the policy-based route table have the same source CIDR block and destination CIDR block but point to different IPsec-VPN connections.
    
    Delete one of the routes, or modify the source CIDR block or destination CIDR block for one of the routes. For more information, see [Configure policy-based routes](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-policy-based-routes).
    
    10.10.10.0/24
    
    172.16.10.0/24
    
    IPsec-VPN Connection 2
    
    Destination-based route table
    
    N/A
    
    192.168.10.0/24
    
    IPsec-VPN Connection 3
    
    No.
    
    You cannot upgrade the VPN gateway because the routes in the destination-based route table have the same destination CIDR block but point to different IPsec-VPN connections.
    
    Delete one of the routes, or modify the destination CIDR block for one of the routes. For more information, see [Manage destination-based routes](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-destination-based-routes).
    
    N/A
    
    192.168.10.0/24
    
    IPsec-VPN Connection 4
    
-   Route tables in the virtual private cloud (VPC) that is associated with the VPN gateway do not contain such routes: The destination CIDR block is a subnet of the **Client CIDR Block** of an SSL server, or a subnet of the **Client CIDR Block** of an IPsec server, and the next hop is the VPN gateway.
    
    For example, if the **Client CIDR Block** of an SSL server is 192.168.10.0/24, route tables in the VPC that is associated with the VPN gateway cannot contain such routes: The destination CIDR block is a subnet of 192.168.10.0/24, such as 192.168.10.0/25 or 192.168.10.0/26, and the next hop is the VPN gateway.
    
    You can manage custom routes in VPC route tables. For more information, see [Create and manage a route table](/help/en/vpc/user-guide/create-and-manage-route-table#section-p9h-bmf-xyz).
    
-   The Border Gateway Protocol (BGP) tunnel CIDR block of each IPsec-VPN connection is unique if multiple IPsec-VPN connections exist on the VPN gateway and all IPsec-VPN connections use BGP.
    
    You can modify the CIDR block of a BGP tunnel. For more information, see the [Modify an IPsec-VPN connection](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-ipsec-vpn-connections-in-single-tunnel-mode#section-jzo-tpu-s5q) section of the "Create and manage IPsec-VPN connections in single-tunnel mode" topic.
    
-   Two vSwitches are specified in the VPC that is associated with the VPN gateway, and the vSwitches have sufficient idle IP addresses.
    
    -   Make sure that the zones in which the vSwitches are deployed support the dual-tunnel mode. For more information, see the [Supported regions and zones](#4eeac4d030tkd) section of this topic.
        
    -   If multiple zones in the current region support the dual-tunnel mode, the two vSwitches that you specify must belong to different zones to implement disaster recovery across zones for IPsec-VPN connections. Each vSwitch must have at least two idle IP addresses.
        
    -   If only one zone in the current region supports the dual-tunnel mode, you need to specify two vSwitches in this zone:
        
        -   If you specify the same vSwitch, make sure that the vSwitch has at least four idle IP addresses.
            
        -   If you specify two different vSwitches, make sure that each vSwitch has at least two idle IP addresses.
            
    

## **Usage notes on the upgrade process**

**Warning**

A VPN gateway is unavailable during the upgrade process. The existing connections are interrupted. We recommend that you upgrade a VPN gateway during a network maintenance window to prevent service interruptions.

-   The upgrade takes about 10 minutes. During this period, the VPN gateway cannot forward traffic.
    
-   You cannot manage the VPN gateway during the upgrade process.
    

## **Procedure**

1.  Log on to the [VPN gateway console](https://vpc.console.alibabacloud.com/vpn).
2.  In the top navigation bar, select the region where the VPN gateway instance resides.
    
3.  On the **VPN Gateways** page, click the ID of the VPN gateway that you want to manage.
    
4.  In the upper-right corner of the details page, click **Enable Zone Redundancy**.
    
5.  In the **Enable Zone Redundancy** dialog box, specify a vSwitch and enable environment verification. Make sure that the requirements are met and click **Enable**.
    
    -   If the environment verification failed, refer to the [Prerequisites](#836a7f402f16f) section of this topic for troubleshooting.
        
    -   After you click **Enable**, the system starts the upgrade.
        

## **What to do next**

-   In scenarios where the VPC that is associated with the VPN gateway is connected to [Cloud Enterprise Network (CEN)](/help/en/cen/product-overview/what-is-cen/), if a custom route that points to the VPN gateway exists in the route table of the VPC and has been advertised to CEN, this route becomes unadvertised after the upgrade is complete. In this case, you need to advertise this route to CEN again. For more information, see [Advertise routes to a transit router](/help/en/cen/user-guide/advertise-routes-to-a-transit-router).
    
    ![2024-02-22_16-46-49](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0882961171/p769074.png)
    
-   If the IPsec-VPN feature remains enabled, the standby tunnel of an IPsec-VPN connection is unavailable by default after the upgrade is complete. You need to configure the peer gateway device to enable the standby tunnel. For more information, see [Connect a VPC to a data center in dual-tunnel mode](/help/en/vpn/sub-product-ipsec-vpn/product-overview/establish-a-connection-between-the-vpc-and-the-on-premises-data) and [Connect a VPC to a data center in dual-tunnel and BGP routing mode](/help/en/vpn/sub-product-ipsec-vpn/product-overview/establish-a-connection-between-the-vpc-and-the-on-premises-data-1).
    
    -   After the upgrade is complete, the VPN gateway has two IP addresses, one of which is the IP address owned by the VPN gateway before the upgrade. The other is allocated by the system. The two IP addresses are used to establish encrypted tunnels.![升级-VPN网关.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8601002961/p700681.png)
        
    -   After the upgrade is complete, each IPsec-VPN connection has an active tunnel and a standby tunnel. By default, the tunnels are associated with the same customer gateway. By default, the tunnel that already exists before the upgrade serves as the active tunnel and its configurations remain unchanged. By default, the standby tunnel is unavailable.![升级-隧道.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8601002961/p700688.png)
        
    
-   If the SSL-VPN feature remains enabled, the SSL-VPN configurations remain unchanged after the upgrade is complete. You can enable the IPsec-VPN feature and create an IPsec-VPN connection in dual-tunnel mode. For more information, see the [Procedure](/help/en/vpn/sub-product-ipsec-vpn/user-guide/enable-ipsec-vpn#section-hcn-wbd-xdb) section of the "Enable IPsec-VPN" topic and [Create and manage IPsec-VPN connections in dual-tunnel mode](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-an-ipsec-vpn-connection-in-dual-tunnel-mode).
    
    After the upgrade is complete, the IP address of the VPN gateway is used only by the SSL-VPN feature. After you enable the IPsec-VPN feature, the system reallocates two IP addresses to the VPN gateway and lets you establish an IPsec-VPN connection in dual-tunnel mode.![升级-SSL.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8601002961/p701746.png)
    

**Important**

When you use a dual-tunnel IPsec-VPN connection, make sure that the active tunnel and standby tunnel are available. If you configure or use only one of the tunnels, IPsec-VPN connection redundancy based on active/standby tunnels and zone-disaster recovery are not supported.
