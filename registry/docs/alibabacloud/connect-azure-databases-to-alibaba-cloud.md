If you want to use a database deployed on Microsoft Azure as the source or destination database in a Data Transmission Service (DTS) instance, you must configure the database to allow access from DTS servers. You can connect the Azure database to Alibaba Cloud using a public IP address or a virtual private cloud (VPC). This topic describes how to connect an Azure database to Alibaba Cloud.

## Connect over a public IP address

Enable public access for your database on the Azure platform. Then, add the [IP addresses of the DTS servers in the corresponding region](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#2df2b0ebc01b2) to the security settings of your database. These settings include security group rules, firewalls, and whitelists. The IP addresses that you need to add depend on the task type, such as [data synchronization](/help/en/dts/user-guide/data-synchronization-scenarios#concept-1732301), [data migration](/help/en/dts/user-guide/overview-of-data-migration-scenarios#concept-26618-zh), or [data validation](/help/en/dts/user-guide/enable-data-verification).

**Important**

If the source database is an Azure SQL Managed Instance, you must use this method to connect the source database to Alibaba Cloud.

## Connect over a VPC

### **Scenario**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3122217671/CAEQUBiBgMDT4.zF2RkiIDE0ZjA1MDdiNWI3NzQ2OTFhNzJmNjAyNzgyNzgyNTk14449108_20240613110217.783.svg)

This topic uses the scenario in the preceding figure as an example. An enterprise:

-   Has a VNet in the Germany West Central region on the Azure platform where a VM instance is deployed.
    
-   Has a VPC in the Germany (Frankfurt) region on Alibaba Cloud where an ECS instance is deployed.
    
-   Wants to use an Alibaba Cloud IPsec-VPN connection that is associated with a VPN Gateway to establish a network connection between the Azure VNet and the Alibaba Cloud VPC. This allows communication between the VNet and the VPC.
    

### **Prerequisites**

Before you begin, make sure that you have the following resources and information:

-   You have a virtual network in the Germany West Central region on the Azure platform, with an Azure VM instance deployed in it. For specific instructions, consult the documentation for the [Azure platform](https://portal.azure.com/#home).
    
-   You have a VPC in the Germany (Frankfurt) region on the Alibaba Cloud platform. An [ECS instance is created](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard) in the VPC.
    
-   You have the CIDR blocks that you want to use for communication between the Azure VNet and the Alibaba Cloud VPC.
    
    **Important**
    
    You must plan the CIDR blocks. Make sure that the CIDR blocks of the Azure VNet and the Alibaba Cloud VPC do not overlap.
    
    **Resource**
    
    **CIDR block**
    
    **Resource IP address**
    
    Alibaba Cloud VPC
    
    10.0.0.0/16
    
    ECS instance address:
    
    10.0.0.1
    
    Azure virtual network
    
    192.168.0.0/16
    
    VM instance address:
    
    192.168.0.1
    

### **Step 1: Create a VPN Gateway instance on Alibaba Cloud**

First, create a VPN Gateway instance on Alibaba Cloud. After the VPN Gateway instance is created, the system assigns two IP addresses to the instance. These IP addresses are used to establish an IPsec-VPN connection with the Azure VNet.

1.  Go to the or the [VPN Gateway console](https://vpc.console.alibabacloud.com/vpn/ap-southeast-1/vpns) and configure the following parameters:
    
    > This topic describes only the required parameters. You can use the default values for other parameters or leave them empty. For more information about each parameter, see [Create and manage a VPN Gateway instance](/help/en/vpn/sub-product-ssl-vpn/user-guide/create-and-manage-a-vpn-gateway-for-ssl-vpn/).
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Instance Name**
    
    Enter a name for the VPN Gateway instance.
    
    For example, enter **VPN Gateway**.
    
    Region
    
    Select the region where you want to create the VPN Gateway instance.
    
    Select **Germany (Frankfurt)**.
    
    **Gateway Type**
    
    Select the gateway type of the VPN Gateway instance.
    
    Select **Standard**.
    
    **Network Type**
    
    Select the network type of the VPN Gateway instance.
    
    Select **Public**.
    
    **Tunnel**
    
    The system displays the tunnel modes that IPsec-VPN connections support in the selected region.
    
    -   **Dual-tunnel**
        
    -   **Single-tunnel**
        
    
    For more information about single-tunnel mode and dual-tunnel mode, see [Associate with a VPN gateway](/help/en/vpn/sub-product-ipsec-vpn/user-guide/ipsec-vpn-connections-support-the-dual-tunnel-mode/).
    
    In this example, the default value **Dual-tunnel** is used.
    
    VPC
    
    Select the VPC that you want to associate with the VPN Gateway instance.
    
    Select the VPC in the Germany (Frankfurt) region.
    
    **vSwitch**
    
    Select a vSwitch from the VPC.
    
    -   If you use the single-tunnel mode for the IPsec-VPN connection, you need to specify only one vSwitch.
        
    -   If you use the dual-tunnel mode for the IPsec-VPN connection, you need to specify two vSwitches.
        
        After you enable the IPsec-VPN feature, the system creates an elastic network interface (ENI) in each of the two vSwitches. The ENIs serve as interfaces for traffic exchange between the VPC and the IPsec-VPN connection. Each ENI uses an IP address from its vSwitch.
        
    
    **Note**
    
    -   By default, the system selects the first vSwitch for you. You can change the selection or use the default vSwitch.
        
    -   After a VPN Gateway instance is created, you cannot change the associated vSwitches. You can view information about the associated vSwitches, the zones where the vSwitches reside, and the ENIs in the vSwitches on the details page of the VPN Gateway instance.
        
    
    Select a vSwitch in the VPC.
    
    **vSwitch 2**
    
    Select a second vSwitch from the VPC.
    
    -   To implement zone-disaster recovery for the IPsec-VPN connection, you must specify two vSwitches that are deployed in different zones of the associated VPC.
        
    -   For regions that support only one zone, zone-disaster recovery is not supported. We recommend that you specify two different vSwitches in the zone to ensure high availability for the IPsec-VPN connection. You can select the same vSwitch as the first one.
        
    
    **Note**
    
    If the VPC does not have a second vSwitch, create one. For more information, see [Create and manage a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch).
    
    Select a second vSwitch in the VPC.
    
    **IPsec-VPN**
    
    Specifies whether to enable the IPsec-VPN feature. The default value is **Enable**.
    
    Enable the IPsec-VPN feature.
    
    **SSL-VPN**
    
    Specifies whether to enable the SSL-VPN feature. The default value is **Disable**.
    
    Disable the SSL-VPN feature.
    
2.  Return to the **VPN Gateway** page to view the VPN Gateway instance that you created.
    
    The initial state of the VPN Gateway instance is **Provisioning**. After about 1 to 5 minutes, the state changes to **Normal**. The **Normal** state indicates that the VPN Gateway instance is initialized and ready for use.
    
    The following table lists the two IP addresses that are assigned to the VPN Gateway instance.
    
    **VPN Gateway instance name**
    
    **VPN Gateway instance ID**
    
    **IP address**
    
    VPN Gateway
    
    vpn-gw8dickm386d2qi2g\*\*\*\*
    
    IPsec address 1 (active tunnel address by default): 8.XX.XX.130
    
    IPsec address 2 (standby tunnel address by default): 8.XX.XX.75
    

### **Step 2: Deploy VPN resources on Azure**

To establish an IPsec-VPN connection between the Azure VNet and the Alibaba Cloud VPC, deploy VPN resources on Azure based on the following information. For specific instructions, contact Azure support.

1.  Create a gateway subnet in the virtual network. This subnet is required to create a virtual network gateway.
    
    ![网关子网](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8901003271/p817065.png)
    
2.  Create a virtual network gateway.
    
    Associate the virtual network gateway with the virtual network that needs to communicate with Alibaba Cloud. In this example, enable the active-active mode for the virtual network gateway and create two public IP addresses. You can use the default values for other parameters.![创建虚拟网络网关](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8901003271/p817083.png)
    
    After the virtual network gateway is created, you can view the public IP addresses that are assigned by the system to the virtual network gateway on the Public IP addresses page. In this example, the public IP addresses are 4.XX.XX.224 and 4.XX.XX.166.![资源关联](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2013154371/p817122.png)
    
3.  Create local network gateways.
    
    Create two local network gateways on Azure. Configure each local network gateway with one IP address of the Alibaba Cloud VPN Gateway instance. Add the CIDR block of the Alibaba Cloud VPC to each local network gateway.
    
    **Important**
    
    If you use [DTS](/help/en/dts/product-overview/what-is-dts) to synchronize data from Azure to Alibaba Cloud, you must also add the 100.104.0.0/16 CIDR block because DTS uses IP addresses in this CIDR block to migrate data.
    
    For more information about the CIDR blocks used by DTS, see [Add the CIDR blocks of DTS servers to a whitelist](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353).
    
    ![本地网络网关](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1646764371/p817095.png)
    
4.  Create site-to-site VPN connections.
    
    **Important**
    
    IPsec-VPN connections on both Alibaba Cloud and Azure support dual-tunnel mode. However, the two tunnels of an Azure IPsec-VPN connection are associated with the same local network gateway by default, while the two tunnels of an Alibaba Cloud IPsec-VPN connection have different IP addresses. This prevents a one-to-one mapping for the tunnel connections. To ensure that both tunnels of the Alibaba Cloud IPsec-VPN connection are enabled, you must create two site-to-site VPN connections on Azure and associate each site-to-site VPN connection with a different local network gateway.
    
    The following figure shows the configuration of one of the site-to-site VPN connections. When you create the VPN connection, set Connection type to **Site-to-site (IPsec)** and associate the VPN connection with the virtual network gateway that needs to connect to Alibaba Cloud. Then, select a local network gateway and set the shared key. You can use the default values for other parameters. For the other site-to-site VPN connection, associate it with a different local network gateway but use the same values for the other parameters.![VPN链接上](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8537003271/p817605.png)
    
    ![VPN链接下](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8901003271/p817606.png)
    

### **Step 3: Deploy the VPN Gateway on Alibaba Cloud**

After you complete the VPN configuration on Azure, deploy the VPN Gateway on Alibaba Cloud based on the following information to establish an IPsec-VPN connection between the Azure VNet and the Alibaba Cloud VPC.

1.  Create customer gateways.
    
    1.  Go to the or [Customer Gateway](https://vpc.console.alibabacloud.com/vpn/eu-central-1/vpn-clients) page of the VPN Gateway console. In the top navigation bar, select **Germany (Frankfurt)** as the region.
        
    2.  In the **Create Customer Gateway** panel, configure the following parameters and click **OK**.
        
        Create two customer gateways. Use the two public IP addresses of the Azure virtual network gateway as the IP addresses of the customer gateways to establish two encrypted tunnels. This topic describes only the required parameters. You can use the default values for other parameters or leave them empty. For more information, see [Customer gateways](/help/en/vpn/sub-product-ipsec-vpn/user-guide/customer-gateway).
        
        **Parameter**
        
        **Description**
        
        **Customer Gateway 1**
        
        **Customer Gateway 2**
        
        **Name**
        
        Enter a name for the customer gateway.
        
        Enter **Customer Gateway 1**.
        
        Enter **Customer Gateway 2**.
        
        **IP Address**
        
        Enter the public IP address of the Azure virtual network gateway.
        
        Enter **4.XX.XX.224**.
        
        Enter **4.XX.XX.166**.
        
2.  Create an IPsec-VPN connection.
    
    1.  In the left-side navigation pane, choose **Interconnections** > **VPN** > **IPsec Connections**.
        
    2.  On the **IPsec Connections** page, click **Bind VPN Gateway**.
        
    3.  On the **Create IPsec-VPN Connection (VPN Gateway)** page, configure the IPsec-VPN connection based on the following information and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **IPsec-VPN Connection Name**
        
        Enter a name for the IPsec-VPN connection.
        
        For example, enter **IPsec-VPN Connection**.
        
        **Region**
        
        Select the region where the VPN gateway to be associated with the IPsec-VPN connection is deployed.
        
        The IPsec-VPN connection is created in the same region as the VPN gateway.
        
        Select **Germany (Frankfurt)**.
        
        **Filter By Resource Group**
        
        Select the resource group to which the VPN Gateway instance belongs.
        
        Select the default resource group.
        
        **Associate With VPN Gateway**
        
        Select the VPN Gateway instance that you want to associate with the IPsec-VPN connection.
        
        Select the **VPN Gateway** that you created.
        
        **Routing Mode**
        
        Select a routing mode.
        
        -   **Destination-based Routing**: Traffic is routed and forwarded based on the destination IP address.
            
        -   **Traffic of Interest Pattern**: Routes and forwards traffic based on specific source and destination IP addresses.
            
        
        Select **Interest Stream Pattern**.
        
        **Local Network**
        
        Enter the CIDR block of the VPC that is associated with the VPN Gateway instance.
        
        Enter the VPC CIDR block: **10.0.0.0/16**
        
        **Important**
        
        If you use [DTS](/help/en/dts/product-overview/what-is-dts) to synchronize data from Azure to Alibaba Cloud, you must also add the **100.104.0.0/16** CIDR block because DTS uses IP addresses in this CIDR block to migrate data.
        
        **Remote Network**
        
        Enter the CIDR block of the remote network that the VPC wants to access.
        
        Enter **192.168.0.0/16**.
        
        **Effective Immediately**
        
        Specifies whether to immediately start negotiations for the connection. Valid values:
        
        -   **Yes**: Negotiations start immediately after the configuration is complete.
            
        -   **No**: Negotiations start when inbound traffic is detected.
            
        
        Select **Yes**.
        
        **Enable BGP**
        
        If you want to use Border Gateway Protocol (BGP) for the IPsec-VPN connection, turn on this switch. By default, this feature is disabled.
        
        In this example, the default value is used. The BGP feature is not enabled.
        
        **Tunnel 1**
        
        Configure VPN parameters for Tunnel 1 (the active tunnel).
        
        By default, Tunnel 1 is the active tunnel and Tunnel 2 is the standby tunnel. You cannot change this setting.
        
        **Customer Gateway**
        
        Select the customer gateway that you want to associate with the active tunnel.
        
        Select **Customer Gateway 1**.
        
        **Pre-Shared Key**
        
        Enter the authentication key for the active tunnel. The key is used for identity authentication.
        
        -   The key must be 1 to 100 characters in length and can contain digits, letters, and the following special characters: ``~`!@#$%^&*()_-+={}[]\|;:',.<>/?``.
            
        -   If you do not specify a pre-shared key, the system randomly generates a 16-character string.
            
        
        **Important**
        
        The tunnel and its peer gateway device must use the same pre-shared key. Otherwise, an IPsec-VPN connection cannot be established.
        
        The authentication key of the tunnel must be the same as the key of the corresponding Azure VPN connection.
        
        **Encryption Configurations**
        
        Configure IKE, IPsec, DPD, and NAT traversal.
        
        In this example, the default settings are used. For more information about the default values, see [IPsec-VPN connections (VPN Gateway)](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-an-ipsec-vpn-connection-in-dual-tunnel-mode).
        
        **Tunnel 2**
        
        Configure VPN parameters for Tunnel 2 (the standby tunnel).
        
        **Customer Gateway**
        
        Select the customer gateway that you want to associate with the standby tunnel.
        
        Select **Customer Gateway 2**.
        
        **Pre-Shared Key**
        
        Enter the authentication key for the standby tunnel. The key is used for identity authentication.
        
        The authentication key of the tunnel must be the same as the key of the corresponding Azure VPN connection.
        
        **Encryption Configurations**
        
        Configure IKE, IPsec, DPD, and NAT traversal.
        
        In this example, the default settings are used. For more information about the default values, see [IPsec-VPN connections (VPN Gateway)](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-an-ipsec-vpn-connection-in-dual-tunnel-mode).
        
    4.  In the **Created** message, click **Cancel**.
        
3.  Configure routes for the VPN Gateway.
    
    After you create the IPsec-VPN connection, you must configure routes for the VPN Gateway instance. If you select **Policy-based Routing** for **Routing Mode** when you create the IPsec-VPN connection, the system automatically creates a policy-based route for the VPN Gateway instance. The route is in the **Unpublished** state. You must perform this step to publish the policy-based route to the VPC.
    
    1.  In the left navigation pane, choose **Interconnections** > **VPN** > **VPN Gateways**.
        
    2.  In the top navigation bar, select the region where the VPN gateway instance resides.
        
    3.  On the **VPN Gateways** page, click the ID of the target VPN gateway.
        
    4.  On the details page of the VPN gateway, click the **Policy-based Route Table** tab, find the route that you want to manage, and then click **Advertise** in the **Actions** column.
        
    5.  In the **Advertise Route** dialog box, click **OK**.
        

### Step 4: Test network connectivity

After you complete the preceding configurations, resources in the Alibaba Cloud VPC and the Azure VNet can communicate with each other. You can perform the following steps to test the network connectivity.

1.  Create and log on to an Azure VM instance in the Azure VNet. For specific instructions, contact Azure support.
    
    **Important**
    
    Before you test the connectivity, make sure that you understand the security group rules that are applied to the Alibaba Cloud VPC and the Azure VNet, and that the rules allow communication between resources in the VPC and VNet.
    
    -   For more information about Alibaba Cloud security group rules, see [Query security group rules](/help/en/ecs/user-guide/view-security-group-rules#task-1357273) and [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
        
    -   For more information about Azure security group rules, contact Azure support.
        
    
2.  On the VM instance, run the `ping` command to access the private IP address of the Alibaba Cloud ECS instance.
    
    ```
    ping 10.0.0.1
    ```
    
    If you receive a reply message as shown in the following figure, resources in the Alibaba Cloud VPC and the Azure VNet can communicate with each other.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0141606671/p1034013.png)
    

### **What to do next**

Based on your task type, such as [data synchronization](/help/en/dts/user-guide/data-synchronization-scenarios#concept-1732301), [data migration](/help/en/dts/user-guide/overview-of-data-migration-scenarios#concept-26618-zh), or [data validation](/help/en/dts/user-guide/enable-data-verification), add the [IP addresses of the DTS servers in the corresponding region](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#2df2b0ebc01b2) to the security settings of the database. These settings include security group rules, firewall policies, and whitelists.
