This topic describes how to configure equal-cost multi-path routing (ECMP). If a 100 Gbit/s Express Connect circuit cannot handle the traffic spikes on your workloads, you can use multiple circuits to implement ECMP. This increases the bandwidth of your service and simplifies the configuration of connections between your on-premises data center and Alibaba Cloud. ECMP allows network traffic with the same source and destination to be distributed across multiple paths. This prevents network congestion and optimizes resource utilization.

## Scenario

The following example shows how to configure ECMP between an on-premises data center and Alibaba Cloud:

A company has an on-premises data center in Shanghai and creates a virtual private cloud (VPC) in the China (Shanghai) region. The private CIDR block of the on-premises data center is 172.16.0.0/12, and the CIDR block of the VPC is 192.168.0.0/16. To prevent bandwidth bottlenecks, the company applies for two Express Connect circuits from different connectivity providers to connect the on-premises data center to Alibaba Cloud.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9584476671/CAEQUxiBgMCPopbn2hkiIGU1ZDkzMTUxZDE1MjQxNWY4YWUwYTRmZjNmN2E3ZThj6078898_20251226161348.126.svg)

The following table describes the configurations of the virtual border router (VBR) that is associated with the Express Connect circuits.

**Parameter**

**Circuit pconn-1**

**Circuit pconn-2**

**VLAN ID**

1

1

**IPv4 Address (Alibaba Cloud Gateway)**

10.4.4.1

10.4.5.1

**IPv4 Address (Data Center Gateway)**

10.4.4.2

10.4.5.2

**Subnet Mask (IPv4)**

255.255.255.252

255.255.255.252

## Background

Enterprise Edition transit routers of Cloud Enterprise Network (CEN) can automatically learn and advertise routes. After you configure routes, transit routers automatically learn and advertise the routes. The following content describes how routes are learned.

**Note**

You can create static routes or configure Border Gateway Protocol (BGP) routing based on your network requirements. The configuration varies based on the routing method that you select:

-   To add a static route to the VBR, set the destination CIDR block of the route to the CIDR block of the on-premises data center. To configure BGP routing in the VBR, set the IP address of the BGP peer to the IPv4 address of the data center-side gateway.
    
-   To create a static route in the on-premises data center, set the destination CIDR block of the route to the CIDR block of the VPC. To configure BGP routing in the on-premises data center, set the IP address of the BGP peer to the IPv4 address of the Alibaba Cloud-side gateway.
    

This topic describes how to configure BGP routing.

-   BGP route configuration on the VBR
    
    **Destination CIDR block**
    
    **Next hop**
    
    **VBR route 1**
    
    172.16.0.0/12
    
    10.4.4.2
    
    **VBR route 2**
    
    172.16.0.0/12
    
    10.4.5.2
    
    The preceding table describes the routes and next hops that the VBR learns from the BGP peer. After you create a VBR connection on the transit router, the VBR can advertise the routes learned from the on-premises data center to the transit router.
    
-   Global route configurations
    
    **Destination CIDR block**
    
    **Next hop**
    
    **VBR route 1**
    
    172.16.0.0/12
    
    10.4.4.2
    
    **VBR route 2**
    
    172.16.0.0/12
    
    10.4.5.2
    
    **Route table of the transit router**
    
    172.16.0.0/12
    
    VBR
    
    192.168.0.0/16
    
    VPC
    
    -   After you create a VPC connection and a VBR connection on the transit router, the VBR can advertise the routes that it learns from the on-premises data center to the transit router. After the routes are advertised to the transit router, network instances that are connected to the transit router, such as VPCs, can learn the routes.
        
    -   The transit router also advertises its system routes to the BGP route table in the on-premises data center. Routes that point to the IP addresses of the two interfaces on the VBRs are displayed in the BGP route table in the on-premises data center. The interfaces are the ones that you set as the BGP peers of the on-premises data center.
        

## Prerequisites

-   By default, ECMP is disabled. To use this feature, contact your account manager.
    
-   Your on-premises data center is connected to Alibaba Cloud through Express Connect circuits. The Express Connect circuits must meet the following requirements. For more information about how to create a Express Connect circuit, see [Classic mode](/help/en/express-connect/user-guide/classic-mode#task-2367309).
    
    -   The Express Connect circuits are deployed on the same core switch.
        
    -   The Express Connect circuits are enabled.
        
    -   The Express Connect circuits use the same bandwidth.
        
-   A VPC is created in the China (Shanghai) region, and cloud resources such as Elastic Compute Service (ECS) instances that host your business systems are deployed in the VPC. For more information, see [Create a VPC with an IPv4 CIDR block](/help/en/vpc/getting-started/create-vpc-with-ipv4#task-1512598).
    
    **Note**
    
    Before you connect an Enterprise Edition transit router to a VPC, make sure that the VPC has at least one vSwitch in a zone that supports Enterprise Edition transit routers. The vSwitch must have at least one idle IP address. In this example, the transit router is created in the China (Shanghai) region. Shanghai Zone F and Shanghai Zone G support Enterprise Edition transit routers.
    
-   You understand the security group rules of the ECS instances in the VPC. Make sure that the rules allow the ECS instances to communicate with the data center. For more information, see [View security group rules](/help/en/ecs/user-guide/view-security-group-rules#task-1357273) and [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
    
-   A CEN instance is created. For more information, see [Create a CEN instance](/help/en/cen/user-guide/cen-instances-1#section-p1n-an3-ani).
    
-   An Enterprise Edition transit router has been created in the region where the VPC resides. For more information, see [Create a transit router](/help/en/cen/user-guide/transit-routers#section-qmu-6ox-hcu).
    

## Step 1: Create a VBR for an Express Connect circuit

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  On the **Physical Connection** page, click the ID of the Express Connect circuit for which you want to create a VBR. Make sure that the Express Connect circuit is enabled. In this example, pconn-1 is selected.
    
4.  On the details page of the Express Connect circuit, click **Create VBR**.
    
5.  In the **Create VBR** panel, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Account**
    
    Specify the Alibaba Cloud account to which the VBR belongs.
    
    In this example, **Current Account** is selected.
    
    **Name**
    
    Enter a name for the VBR.
    
    **Physical Connection Interface**
    
    Select the Express Connect circuit **pconn-1** (Ensure the construction is complete and status is normal.)
    
    **VLAN ID**
    
    Enter the virtual LAN (VLAN) ID of the VBR.
    
    In this example, **1** is specified.
    
    **Set VBR Bandwidth Value**
    
    Select the bandwidth of the VBR.
    
    In this example, 200Mb is selected.
    
    **IPv4 Address (Alibaba Cloud Gateway)**
    
    Specify an IPv4 address for the VBR to route network traffic between the VPC and the on-premises data center.
    
    In this example, 10.4.4.1 is entered.
    
    **IPv4 Address (Data Center Gateway)**
    
    Specify an IPv4 address for the gateway device in the on-premises data center to route network traffic between the VPC and the on-premises data center.
    
    In this example, 10.4.4.2 is entered.
    
    **Subnet Mask (IPv4)**
    
    Enter the subnet mask of the specified IPv4 addresses.
    
    In this example, 255.255.255.252 is used.
    

## Step 2: Associate the VBR with another Express Connect circuit

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  On the **Physical Connection** page, click the ID of the Express Connect circuit that is already associated with the VBR. In this example, pconn-1 is selected.
    
4.  On the details page of the Express Connect circuit, click the ID of the VBR.
    
5.  On the **Physical Connection Interfaces** tab, click **Add Physical Connection Interface**.
    
6.  In the **Add Physical Connection Interface** panel, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Physical Connection Interface**
    
    Select an enabled Express Connect circuit that functions as expected.
    
    In this example, **pconn-2** is selected.
    
    **VLAN ID**
    
    Enter the VLAN ID of the VBR.
    
    In this example, 1 is entered.
    
    **IPv4 Address (Alibaba Cloud Gateway)**
    
    Specify an IPv4 address for the VBR to route network traffic between the VPC and the on-premises data center.
    
    In this example, 10.4.5.1 is entered.
    
    **IPv4 Address (Data Center Gateway)**
    
    Specify an IPv4 address for the gateway device in the on-premises data center to route network traffic between the VPC and the on-premises data center.
    
    In this example, 10.4.5.2 is entered.
    
    **Subnet Mask (IPv4)**
    
    Enter the subnet mask of the specified IPv4 addresses.
    
    In this example, 255.255.255.252 is used.
    

## Step 3: Configure BGP routing on the VBR

To configure BGP routing between the on-premises data center and the VBR, you need to add the BGP peer that communicates with the VBR to a BGP group, and then advertise the BGP CIDR block to the VBR.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region and then click **Virtual Border Routers (VBRs)** in the left-side navigation pane.
    
3.  On the Virtual Border Routers (VBRs) page, find the VBR that you want to manage and click its ID.
    
4.  Configure a BGP group.
    
    1.  Click the BGP Groups tab and click **Create BGP Group**.
        
    2.  Configure the following parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        Enter a name for the BGP group.
        
        **Peer ASN**
        
        Enter the autonomous system number (ASN) of the on-premises data center.
        
        **BGP Key**
        
        The key of the BGP group.
        
        **Description**
        
        Enter a description for the BGP group.
        
5.  Configure a BGP peer.
    
    1.  Click the BGP Peers tab and click **Create BGP Peer**.
        
    2.  Configure the following parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **BGP Group**
        
        Select the BGP group that you create.
        
        **BGP Peer IP Address**
        
        Enter the IP address of the BGP peer. In this example, 10.4.4.2 is entered. This is the IP address of the data center-side gateway.
        
        **Enable BFD**
        
        In this example, Bidirectional Forwarding Detection (BFD) is disabled.
        
6.  Repeat [Step 5](#step-h1w-86j-242) to create a BGP peer for pconn-2.
    
    In this example, the IP address of the BGP peer for pconn-2 is set to 10.4.5.2 and BFD is disabled.
    

## Step 4: Connect the VBR and VPC to a transit router

Connect the transit router in the China (Shanghai) region to the VBR that is associated with the Express Connect circuits. Then, connect the transit router to the VPC that you want to connect to the on-premises data center. This way, the VPC and the on-premises data center can communicate with each other.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, find the transit router that you want to manage and click **Create Connection** in the **Actions** column.
    
4.  On the **Connection with Peer Network Instance** page, configure the following parameters and click **OK**.
    
    **Note**
    
    When you perform this operation for the first time, the system automatically creates a service-linked role named AliyunServiceRoleForCEN. This role allows the transit router to create an ENI in a vSwitch of the VPC. For more information, see [AliyunServiceRoleForCEN](/help/en/cen/security-and-compliance/aliyunserviceroleforcen#concept-2001760).
    
    **Parameter**
    
    **Description**
    
    **Instance Type**
    
    The type of network instance.
    
    In this example, **VPC** is selected.
    
    **Region**
    
    The region in which the VPC is deployed.
    
    In this example, **China (Shanghai)** is selected.
    
    **Transit Router**
    
    The system automatically displays the transit router in the selected region.
    
    **Resource Owner ID**
    
    The Alibaba Cloud account to which the VPC belongs.
    
    In this example, **Current Account** is selected.
    
    **Billing Method**
    
    By default, transit routers use the pay-as-you-go billing method.
    
    For more information, see [Billing rules](/help/en/cen/product-overview/billing-rules#concept-1985505).
    
    **Network Instance**
    
    The ID of the VPC.
    
    In this example, the VPC that you created is selected.
    
    **VSwitch**
    
    Select at least two vSwitches in a zone supported by the transit router.
    
    **Advanced Settings**
    
    By default, the following features are selected: **Automatically associate with the default route table of the transit router**, **Automatically advertise system routes to the default route table of the transit router**, and ****Automatically add a route that points to the transit router to all the route tables of the VPC**.**
    
    In this example, the default settings are used.
    
5.  On the **Connection with Peer Network Instance** page, click **Create More Connections**.
    
6.  On the **Connection with Peer Network Instance** page, configure the following parameters and click **OK** to create a connection for VBR1.
    
    **Parameter**
    
    **Description**
    
    **Instance Type**
    
    The type of the network instance. In this example, **Virtual Border Router (VBR)** is selected.
    
    **Region**
    
    The region in which the VBR is deployed.
    
    In this example, **China (Shanghai)** is selected.
    
    **Transit Router**
    
    The system automatically displays the transit router in the selected region.
    
    **Resource Owner ID**
    
    The Alibaba Cloud account to which the VBR belongs.
    
    In this example, **Current Account** is selected.
    
    **Network Instance**
    
    The ID of the VBR.
    
    In this example, VBR1 is selected.
    
    **Advanced Settings**
    
    By default, the following advanced features are enabled: **Associate with Default Route Table of Transit Router**, **Propagate System Routes to Default Route Table of Transit Router**, and **Propagate Routes to VBR**.
    
    In this example, the default settings are used.
    
    After the connections are created, you can view the details about the connections on the **Intra-region Connections** tab of the VBR details page. For more information, see [View network instance connections](/help/en/cen/user-guide/view-network-instance-connections#task-1995538).
    

## Step 5: Configure routing on the on-premises data center side

You need to configure BGP routing on the on-premises data center side. This way, BGP routes can be advertised to Alibaba Cloud. The CIDR block of the on-premises data center is 172.16.0.0/12. The following table describes the configurations of BGP routing on the two pieces of customer-premises equipment (CPE) in the on-premises data center. For more information about the configurations, contact the CPE vendor.

**Parameter**

**CPE1**

**CPE2**

VLAN ID

1

1

Network

172.16.0.0/12

172.16.0.0/12

BGP ASN

65000

65000

PEER BGP ASN

45104

45104

Interface IP

10.4.4.2/30

10.4.5.2/30

## Step 6: Verify network connectivity

After you create connections, you need to test the network connectivity.

1.  Open the command-line interface on a computer in the data center.
    
2.  Run the ping command to verify the connectivity between the data center and an ECS instance in the VPC whose CIDR block is 192.168.0.0/16.
    
    If echo reply packets are returned, the connection is established.
    
3.  To check whether active/active connections are established between the data center and Alibaba Cloud, run the tracert command to query the routes through which packets are sent.
    
    The tracert command may vary based on the vendor. For more information about the command, contact the CPE vendor.
