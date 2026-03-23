Before establishing an IPsec-VPN connection, you must first deploy a VPN gateway.

## **How it works**

A VPN gateway serves as an intermediary between a Virtual Private Cloud (VPC) and an on-premises data center. The traffic flow is managed as follows:

-   VPC to on-premises data center:
    
    1.  Receives packets: VPC route entries direct traffic to the VPN gateway.
        
    2.  Encrypts and encapsulates: The VPN gateway applies IPsec encryption, encapsulating packets with its public IP as the source and the data center's public IP as the destination.
        
    3.  Forwards to data center: The gateway device in the on-premises data center receives, decrypts, and restores the packets, translates source and destination IPs to their respective private addresses, and routes them according to local policies.
        
    
-   On-premises data center to VPC:
    
    1.  Receives encrypted traffic: The VPN gateway listens for IPsec-VPN connections at its public IP and accepts encrypted data from the data center.
        
    2.  Decrypts and restores packets: The instance de-encapsulates packets and restores them for the VPC.
        
    3.  Routes and forwards: Restored packets are forwarded by the VPN gateway to destination instances in the VPC based on routing policies.
        
    

## **Create a VPN gateway**

Newly created VPN gateways support only IPsec-VPN connections in dual-tunnel mode. If you have an existing single-tunnel VPN gateway, [upgrade its IPsec-VPN connections to dual-tunnel mode](/help/en/vpn/sub-product-ipsec-vpn/user-guide/upgrade-ipsec-vpn-connection-to-dual-tunnel-mode) to ensure high availability and benefit from the latest features.

### **Console**

To create a VPN gateway using the console, go to the [VPN Gateway buy page](https://common-buy-intl.alibabacloud.com/?spm=5176.9843921.content.13.39ed1d16L3bbjd&commodityCode=vpn_pre&regionId=cn-hangzhou#/buy) and configure the following parameters:

-   **Region**: Select the same region as your VPC.
    
-   **Gateway Type**: Select **Standard** to ensure the gateway uses industry-standard commercial cryptographic algorithms for IPsec-VPN connections.
    
-   **Network Type**: Select **Public** to assign a public IP address for the IPsec-VPN connection. For private connectivity, [use a private IPsec-VPN connection and bind it to a transit router](/help/en/vpn/sub-product-ipsec-vpn/use-cases/create-multiple-private-ipsec-vpn-connections-to-implement-load-balancing).
    
-   **Tunnels**: Select **Dual-tunnel** to enhance availability.
    
    -   Select the associated VPC and two vSwitches in different availability zones. When IPsec-VPN is enabled, the system creates an Elastic Network Interface (ENI) in each vSwitch. These ENIs serve as the traffic interfaces between the IPsec-VPN connection and the VPC, and each ENI consumes one IP address.
        
    -   In regions that support only a single availability zone, zone-level disaster recovery is not possible. To maintain high availability for the IPsec-VPN connection, select two different vSwitches within the same zone.
        
        Regions that support only a single zone
        
        China (Nanjing - Local Region), Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), UAE (Dubai), and Mexico.
        
    -   The associated vSwitches cannot be modified after the VPN gateway is created.
        
-   **Maximum Bandwidth**: The maximum supported bandwidth varies by region. If you select 10 Mbit/s or 5 Mbit/s, the inbound peak bandwidth from the on-premises data center to the VPN gateway is limited to 10 Mbit/s.
    
-   Enable **IPsec-VPN** and disable **SSL-VPN**.
    
    If IPsec-VPN is not enabled during creation, you can enable it later by locating the VPN gateway in the console and clicking **Enable** in the **Feature Configuration** column.
    

### **API**

To create a VPN gateway using the API, call the [CreateVpnGateway](/help/en/vpn/sub-product-ipsec-vpn/developer-reference/api-vpc-2016-04-28-createvpngateway-vpns) operation and specify the required parameters.

## **Upgrade a VPN gateway**

VPN gateways are regularly updated to provide enhanced features, improved compatibility, and better interoperability with third-party devices. Running an outdated version may introduce operational risks, so upgrading to the latest version is recommended to ensure network stability and access to all available features.

-   Upgrade check: Verify the version of your VPN gateway by checking the status of the Upgrade button on its details page. Newly created instances are on the latest version by default.
    
-   Upgrade duration and cost:
    
    -   An upgrade typically takes about 10 minutes.
        
        **Important**
        
        During the upgrade, the VPN gateway will be unavailable and any existing connections will be interrupted. Schedule the upgrade during a maintenance window to minimize service impact.
        
    -   This process is free of charge.
        
-   Upgrade limitations:
    
    -   If the VPN gateway has no IPsec-VPN connections, its configuration remains unchanged after the upgrade.
        
    -   If the VPN gateway has IPsec-VPN connections:
        
        -   For connections configured with multiple CIDR blocks and using IKEv1, change the IKE version to IKEv2 or split the CIDR blocks into separate IPsec-VPN connections prior to upgrading. Otherwise, the upgrade will fail.
            
        -   If you see prompts indicating that the **Policy-based Route Table** or **Destination-based Route Table** features are not supported, or if the VPN gateway was created before March 21, 2019 and has not been upgraded, note that in older versions, only traffic selectors needed to be configured for IPsec-VPN connections, and route configuration was not required. In the latest version, however, route configuration is mandatory. Therefore, after upgrading the VPN gateway, be sure to [configure the necessary routes](/help/en/vpn/sub-product-ipsec-vpn/user-guide/vpn-gateway-route-overview/#concept-zlb-mvx-bhb) to ensure IPsec-VPN connections function correctly.
            
        -   In other cases, the IPsec-VPN connection configuration remains unchanged after the upgrade.
            

### **Console**

1.  Log on to the [VPN Gateway console](https://vpc.console.alibabacloud.com/vpn). In the top navigation bar, select the region where your VPN gateway is deployed.
    
2.  Locate and click the ID of your target instance to access its details page, and then click **Upgrade** to initiate the upgrade process.
    

## **Delete a VPN gateway**

Before deleting a VPN gateway, ensure that there are no associated [IPsec-VPN connections](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-an-ipsec-vpn-connection-in-dual-tunnel-mode#title-057-pzk-uac), [SSL servers](/help/en/vpn/sub-product-ssl-vpn/user-guide/create-an-ssl-server#cee5641af71ur), or [IPsec servers](/help/en/vpn/sub-product-ssl-vpn/user-guide/create-and-manage-ipsec-servers#section-sjw-yk3-eg3).

### **Console**

In the **Actions** column of the target VPN gateway, click **Delete**.

### **API**

Call the [DeleteVpnGateway](/help/en/vpn/sub-product-ipsec-vpn/developer-reference/api-vpc-2016-04-28-deletevpngateway-vpns) operation to delete the specified VPN gateway.

## **Quotas and limits**

-   The peak bandwidth for inbound and outbound traffic between an on-premises data center and a VPN gateway depends on the IPsec-VPN tunnel mode and the specified peak bandwidth of the instance.
    
    **IPsec-VPN tunnel mode**
    
    **VPN Gateway peak bandwidth**
    
    **Peak outbound bandwidth**
    
    **Peak inbound bandwidth**
    
    Dual-tunnel
    
    \> 10 Mit/s
    
    The peak bandwidth of the VPN gateway
    
    The peak bandwidth of the VPN gateway
    
    ≤ 10 Mit/s
    
    The peak bandwidth of the VPN gateway
    
    10 Mbit/s
    
    Single-tunnel
    
    \> 100 Mit/s
    
    The peak bandwidth of the VPN gateway
    
    The peak bandwidth of the VPN gateway
    
    ≤ 100 Mit/s
    
    The peak bandwidth of the VPN gateway
    
    100 Mbit/s
    
-   The maximum peak bandwidth supported by a VPN gateway varies by region.
    
    **Maximum**
    
    **Region**
    
    1,000 Mbit/s
    
    China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), Mexico
    
    500 Mbit/s
    
    China (Nanjing - Local Region), UAE (Dubai), SAU (Riyadh - Partner Region)
    
    > The SAU (Riyadh - Partner Region) region is operated by a partner.
    

## **Billing**

-   **Instance fees**: VPN gateways incur both [instance and traffic charges](/help/en/vpn/sub-product-ipsec-vpn/billing-for-ipsec-vpn#5a73c32df5nwh).
    
-   **Configuration changes**: If you enable IPsec-VPN for an existing VPN gateway, you will be charged the price difference for the feature for the remainder of the current billing cycle.
    
-   **Version upgrades**: Upgrading a VPN gateway is free of charge.
