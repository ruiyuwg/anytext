This topic describes how to use a Virtual Private Cloud (VPC) NAT gateway and a VPN gateway to connect a data center and a VPC. You can specify private IP addresses for the data center and the VPC to communicate with each other.

## Example scenarios

The following figure shows a use scenario. You have a VPC named VPC1 in China (Qingdao) and a data center in China (Beijing). You want VPC1 to communicate with the data center through specified private IP addresses.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2538421471/CAEQORiBgMDQ8fKpqxkiIDJmMWRkYjI0ZTRmNTQ0NmVhZDQxYzYyMWRlM2ZiMmQx4556183_20240730150115.885.svg)

You can use a VPC NAT gateway and a VPN gateway to meet the preceding requirement.

You can use a VPN gateway to establish an IPsec-VPN connection between the data center and the VPC, and enable the data center to communicate with the VPC through specified private IP addresses. The following table describes how networks are planned. You can plan the CIDR blocks based on your business requirements. Make sure that the CIDR blocks do not overlap with each other.

**Parameter**

**IP address/CIDR block**

VPC1

10.0.0.0/16

vSwitches

-   VSW1: 10.0.0.0/24 (Qingdao Zone B)
    
-   VSW2: 10.0.1.0/24 (Qingdao Zone E)
    

Elastic Compute Service (ECS) instance

ECS1: 10.0.0.81

Data center

172.16.0.0/12

On-premises server

172.16.0.124

Gateway device in the data center

211.68.XX.XX

## Prerequisites

-   VPC1 is created in the China (Qingdao) region. Two vSwitches named VSW1 and VSW2 are deployed in VPC1. VSW1 is deployed in Zone B. VSW2 is deployed in Zone E. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575).
    
-   An ECS instance named ECS1 is created in VSW1 and applications are deployed on ECS1. For more information, see [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
    

## Procedure

![配置流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2103723461/p367651.png)

## Step 1: Configure IPsec-VPN

You can create a IPsec-VPN connection between the VPC and the data center. To create an IPsec-VPN connection, you must first create a VPN gateway and a customer gateway. For more information about the IPsec-VPN feature, see [Configure an IPsec-VPN connection that is associated with a VPN gateway](/help/en/vpn/sub-product-ipsec-vpn/product-overview/overview-of-ipsec-vpn-connections/#task-d52-4lz-wdb).

1.  Log on to the [VPN Gateway console](https://vpc.console.alibabacloud.com/vpn).
    
2.  Perform the following operations to create a VPN gateway:
    
    1.  On the **VPN Gateways** page, click **Create VPN Gateway**.
        
    2.  On the buy page, set the following parameters, click **Buy Now**, and then complete the payment.
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        Enter a name for the VPN gateway.
        
        Region
        
        Select the region where you want to deploy the VPN gateway. In this example, **China (Qingdao)** is selected.
        
        **Gateway Type**
        
        **Standard** is selected by default.
        
        VPC
        
        Select the VPC that you want to connect. In this example, VPC1 is selected.
        
        vSwitch
        
        Select a vSwitch from the VPC. VSW1 is selected in this example.
        
        **vSwitch 2**
        
        Select another vSwitch from the VPC. VSW2 is selected in this example.
        
        Maximum Bandwidth
        
        Specify the maximum bandwidth of the VPN gateway. Unit: Mbit/s.
        
        **5 Mbit/s** is selected in this example.
        
        **Traffic**
        
        By default, the VPN gateway uses the pay-by-data-transfer metering method. For more information, see [Billing rules](/help/en/vpn/sub-product-ipsec-vpn/billing-for-ipsec-vpn#concept-iyc-hwx-wdb).
        
        **IPsec-VPN**
        
        Specify whether to enable the IPsec-VPN feature. In this example, **Enable** is selected.
        
        **SSL-VPN**
        
        Specify whether to enable the SSL-VPN feature. In this example, **Disable** is selected.
        
        **Duration**
        
        By default, the VPN gateway is billed on an hourly basis.
        
    3.  After you create the VPN gateway, view the VPN gateway on the **VPN Gateways** page.
        
        A newly created VPN gateway is in the **Preparing** state. After 1 to 5 minutes, the state changes to **Normal**, which indicates that the VPN gateway is initialized and available.
        
3.  Perform the following operations to create a customer gateway:
    
    1.  In the left-side navigation pane, choose **Interconnections** > **VPN** > **Customer Gateways**.
        
    2.  In the top navigation bar, select the region where you want to create the customer gateway. In this example, **China (Qingdao)** is selected.
        
    3.  On the **Customer Gateway** page, click **Create Customer Gateway**.
        
    4.  In the **Create Customer Gateway** panel, configure the parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        Enter a name for the customer gateway.
        
        **IP Address**
        
        Enter the public IP address of the gateway device in the data center that you want to connect to VPC1. In this example, 211.68.XX.XX is used.
        
        **ASN**
        
        The Autonomous System Number (ASN) of the gateway device in the data center.
        
        **Description**
        
        Enter a description for the customer gateway.
        
        For more information, see [Create and manage a customer gateway](/help/en/vpn/sub-product-ipsec-vpn/user-guide/customer-gateway#task-llj-prx-bhb).
        
4.  Perform the following operations to create an IPsec-VPN connection:
    
    1.  In the left-side navigation pane, choose **Interconnections** > **VPN** > **IPsec Connections**.
        
    2.  In the top navigation bar, select the region where you want to create the IPsec-VPN connection. In this example, **China (Qingdao)** is selected.
        
    3.  On the **IPsec Connections** page, click **Create IPsec-VPN Connection**.
        
    4.  On the **Create IPsec-VPN Connection** page, configure the parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        Specify a name for the IPsec-VPN connection.
        
        **Associate Resource**
        
        Select **VPN Gateway**.
        
        **VPN Gateway**
        
        Select the VPN gateway that you created.
        
        **Routing Mode**
        
        The routing mode. In this example, **Destination Routing Mode** is selected.
        
        **Effective Immediately**
        
        Specifies whether to immediately start negotiations for the connection. Valid values:
        
        -   **Yes**: immediately starts IPsec-VPN negotiations after the IPsec-VPN connection is created.
            
        -   **No**: starts IPsec-VPN negotiations when inbound traffic is detected.
            
        
        Yes is selected by default.
        
        **Tunnel1**\>**Customer gateway**
        
        Select the customer gateway to be associated with the IPsec-VPN connection.
        
        **Tunnel2** > **Customer gateway**
        
        Select the customer gateway to be associated with the IPsec-VPN connection.
        
        **Pre-Shared Key**
        
        Enter the pre-shared key. The pre-shared key must be the same as the pre-shared key of the gateway device in the data center. If you do not enter a value, the system generates a 16-bit random string by default.
        

## Step 2: Load the configurations of the VPN gateway to the gateway device in the data center

To establish an IPsec-VPN connection between the VPC and data center, you must load the configurations of the VPN gateway to the gateway device in the data center.

1.  In the left-side navigation pane, choose **Interconnections** > **VPN** > **IPsec Connections**.
    
2.  On the **IPsec Connections** page, find the IPsec-VPN connection that you want to manage and click **Generate Peer Configuration** in the **Actions** column.
    
3.  Load the configuration of the IPsec-VPN connection to the gateway device in the data center. For more information, see [Configure local gateways](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-an-h3c-firewall-device#task-snz-rc2-xdb).
    

## Step 3: Create a VPC NAT gateway

1.  Log on to the [NAT Gateway console](https://vpc.console.alibabacloud.com/nat).
2.  In the left-side navigation pane, choose **NAT Gateway** > **VPC NAT Gateway**.
3.  On the **VPC NAT Gateway** page, click **Create VPC NAT Gateway**.
4.  On the **VPC NAT Gateway (Pay-As-You-Go)** page, set the following parameters and click **Buy Now**.
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    Select the region where you want to create the VPC NAT gateway. In this example, **China (Qingdao)** is selected.
    
    **VPC ID**
    
    Select the VPC to which the VPC NAT gateway belongs. After you create a VPC NAT gateway, you cannot change the VPC to which the VPC NAT gateway belongs. In this example, VPC1 is selected.
    
    **Zones**
    
    Select the zone to which the VPC NAT gateway belongs. In this example, the zone of VSW2 is selected.
    
    **vSwitch ID**
    
    Select the vSwitch to which the VPC NAT gateway belongs. We recommend that you select an independent vSwitch. In this example, VSW2 is selected.
    
    **Name**
    
    Enter a name for the VPC NAT gateway.
    
    **Service-linked Role**
    
    Displays whether a service-linked role is created for the VPC NAT gateway.
    
    If this is your first time using a NAT gateway, including an Internet NAT gateway and a VPC NAT gateway, you must click **Create Service-linked Role** to create a service-linked role.
    
5.  Return to the **VPC NAT Gateway** page to view the created VPC NAT gateway.
    
    -   Click the ID of the VPC NAT gateway. On the **Basic Information** tab, view the VPC and vSwitch of the VPC NAT gateway.
        
    -   Click the **NAT IP Address** tab to view the default NAT IP address and the default NAT CIDR block.
        
        **Note**
        
        The default NAT CIDR block is the CIDR block of the vSwitch to which the VPC NAT gateway is attached. The default NAT IP address is an IP address that is randomly allocated from the CIDR block of the vSwitch. You cannot delete the default NAT CIDR block or the default NAT IP address.
        
    

## Step 4: Add a route entry to the system route table of VPC1.

Add a route to the system route table of VPC1. The route must point to the VPC NAT gateway.

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  On the **VPC** page, find VPC1 and click its ID.
    
3.  On the details page, click the **Resource Management** tab and click the number below **Route Table**.
    
4.  On the **Route Tables** page, find the route table whose **Route Table Type** is **System** and click its ID.
    
5.  On the details page of the route table, choose **Route Entry List** > **Custom Route** and click **Add Route Entry**.
    
6.  In the **Add Route Entry** panel, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    Enter a name for the route. In this example, VPCENTRY is used.
    
    **Destination CIDR Block**
    
    Enter a destination CIDR block. In this example, 172.16.0.124/32 is used, which is the IP address of the server in the data center.
    
    **Next Hop Type**
    
    Select a next hop type. In this example, **NAT Gateway** is selected.
    
    **NAT Gateway**
    
    Select a NAT gateway. In this example, the VPC NAT gateway created in [Step 3: Create a VPC NAT gateway](#section-y3e-q8t-8w6) is selected.
    

## Step 5: Create a custom route table and add a route

Create a custom route table for VSW2 and add a route that points to the VPN gateway to the custom route table.

For more information about regions that support custom route tables, see [Route table](/help/en/vpc/vpc-route-table/#section-icu-t2n-vgs).

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  In the left-side navigation pane, click **Route Tables**.
    
3.  In the top navigation bar, select the region to which the route table belongs.
    
4.  On the **Route Tables** page, click **Create Route Table**.
    
5.  On the **Create Route Table** page, set the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Resource Group**
    
    Select the resource group to which the route table belongs. In this example, **All** is selected.
    
    **VPC**
    
    Select the VPC to which the route table belongs. In this example, VPC1 is selected.
    
    **Name**
    
    Enter a name for the route table. In this example, VPNVTB is used.
    
    **Description**
    
    Enter a description for the route table. In this example, Custom is used.
    
6.  Click the **Associated vSwitch** tab and click **Associate vSwitch**.
    
7.  In the **Associate vSwitch** dialog box, select a vSwitch and click **OK**.
    
    In this example, VSW2 is selected.
    
8.  On the details page of the route table, choose **Route Entry List** > **Custom Route** and click **Add Route Entry**.
    
9.  In the **Add Route Entry** panel, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    Enter a name for the route. In this example, VPCNATENTRY is used.
    
    **Destination CIDR Block**
    
    Enter a destination CIDR block. In this example, 172.16.0.124/32 is used, which is the IP address of the server in the data center.
    
    **Next Hop Type**
    
    Select a next hop type. In this example, **VPN Gateway** is selected.
    
    **VPN Gateway**
    
    Select a VPN gateway. In this example, the VPN gateway created in [Step 1: Configure IPsec-VPN](#section-yni-8my-7o8) is selected.
    

## Step 6: Create an SNAT entry and a DNAT entry by using the default NAT IP address

1.  Log on to the [NAT Gateway console](https://vpc.console.alibabacloud.com/nat).
2.  In the left-side navigation pane, choose **NAT Gateway** > **VPC NAT Gateway**.
3.  In the top navigation bar, select the region where you want to create the NAT gateway.
4.  Perform the following operations to create an SNAT entry:
    
    1.  On the **VPC NAT Gateway** page, find the VPC NAT gateway that you want to manage and click **SNAT Management** in the **Actions** column.
    2.  On the **SNAT Management** tab, click **Create SNAT Entry**.
    3.  On the **Create SNAT Entry** page, set the following parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **SNAT Entry**
        
        Specify whether you want to create an SNAT entry for a VPC, a vSwitch, an ECS instance, or a custom CIDR block. In this example, **Specify vSwitch** is selected. Then, select the vSwitch to which ECS1 belongs from the **Select vSwitch** drop-down list. In this example, VSW1 is selected. The **vSwitch CIDR Block** section displays the CIDR block of VSW1.
        
        **Select NAT IP Address**
        
        Select the IP address that is used to access external private networks. The default NAT IP address is selected in this example.
        
        **Entry Name**
        
        The name of the SNAT entry.
        
        The name must be 2 to 128 characters in length, and can contain digits, underscores (\_), and hyphens (-). The name must start with a letter.
        
5.  Return to the **VPC NAT Gateway** page and perform the following operations to create a DNAT entry:
    
    1.  On the **VPC NAT Gateway** page, find the VPC NAT gateway that you want to manage and click **DNAT Management** in the **Actions** column.
    2.  On the **DNAT Management** tab, click **Create DNAT Entry**.
    3.  On the **Create DNAT Entry** page, set the following parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Select NAT IP Address**
        
        Select the NAT IP address that is used to receive requests from external private networks. The default NAT IP address is selected in this example.
        
        **Select Private IP Address**
        
        Specify the private IP address used to communicate with external networks. In this example, **Select by ECS or ENI** is selected and the private IP address of ECS1 is selected.
        
        **Port Settings**
        
        Select a DNAT mapping method. In this example, **Specific Port** is selected, which specifies the port mapping method.
        
        Specify 22 for **Frontend Port**, 22 for **Backend Port**, and **TCP** for **Protocol**.
        
        **Entry Name**
        
        The name of the DNAT entry.
        
        The name must be 2 to 128 characters in length, and can contain digits, underscores (\_), and hyphens (-). The name must start with a letter.
        

## Step 7: Configure routes for the VPN gateway

You must add a route to the VPN gateway and advertise the route to the VPC route table. Then, the VPC and the data center can communicate with each other.

1.  Log on to the [VPN Gateway console](https://vpc.console.alibabacloud.com/vpn).
    
2.  In the top navigation bar, select the region in which the VPN gateway resides.
    
3.  In the left-side navigation pane, choose **Interconnections** > **VPN** > **VPN Gateways**.
    
4.  On the **VPN Gateway** page, find the VPN gateway that you want to manage and click the ID of the VPN gateway.
    
5.  On the **Destination-based Route Table** tab, click **Add Route Entry**.
    
6.  In the **Add Route** panel, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Destination CIDR Block**
    
    Enter the private CIDR block of the data center. In this example, 172.16.0.0/12 is used.
    
    **Next Hop Type**
    
    Select **IPsec-VPN connection**.
    
    **Next Hop**
    
    Select an IPsec-VPN connection. In this example, the IPsec-VPC connection created in [Step 1: Configure IPsec-VPN](#section-yni-8my-7o8) is selected.
    
    **Advertise to VPC**
    
    Specify whether to advertise the route to the route table of the VPC. In this example, **Yes** is selected.
    
    **Weight**
    
    Select the weight of the route. In this example, **100** is selected.
    
    -   **100**: a high priority
        
    -   **0**: a low priority
        
    

## Step 8: Test the connectivity

1.  Log on to ECS1 in VSW1. For more information, see [Connection methods](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
2.  `Ping the IP address of the server in the data center` to check whether ECS1 can access the server in the data center.
    
    In this example, the following command is used:
    
    ```
    ping 172.16.0.124
    ```
    
    The test result shows that ECS1 can access the server in the data center.![ping](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2103723461/p361068.png)
    
3.  Log on to the server in the data center and run the `ssh root@NAT IP` command. Before you run this command, replace NAT IP with the default NAT IP address specified in the VPC NAT gateway. Then, enter the password that is used to log on to ECS1 to check whether the server can access ECS1.
    
    In this example, the following command is used:
    
    ```
    ssh 10.0.1.43
    ```
    
    The test result shows that the server in the data center can access ECS1 by using the DNAT feature of the VPC NAT gateway.![ssh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3103723461/p361065.png)
