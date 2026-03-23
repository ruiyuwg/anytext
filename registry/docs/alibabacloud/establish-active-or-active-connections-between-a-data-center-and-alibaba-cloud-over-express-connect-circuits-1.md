You can establish active/active connections between your on-premises data center and Alibaba Cloud using static routing for VBR-to-VPC connections over Express Connect circuits.

## Scenario

This topic describes how to establish active/active connections between an on-premises data center and Alibaba Cloud using static routing for VBR-to-VPC connections over Express Connect circuits. If your data center is connected to Alibaba Cloud over two Express Connect circuits, network traffic is distributed across both connections by default. If one of the Express Connect circuits fails, the system automatically routes network traffic over the other Express Connect circuit that works as expected. This ensures service availability.

A company has a data center in Shanghai and creates a virtual private cloud (VPC) in the China (Shanghai) region. The private CIDR block of the data center is 172.16.0.0/12, and the CIDR block of the VPC is 192.168.0.0/16. To prevent single points of failure (SPOFs), the company needs to lease two Express Connect circuits from different connectivity providers to implement active-active failover.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7309707671/CAEQUBiBgIC24p2Z2RkiIDUyZDUzYzhiOWRmNzQzYjc5YzkyYjVkZGU5OTg0Nzhh4122902_20231220095134.007.svg)

The following table describes the configurations of the VBRs that are connected to the Express Connect circuits.

**Parameter**

**VBR 1 (connected to circuit 1)**

**VBR 2 (connected to circuit 2)**

**VLAN ID**

100

102

**Alibaba Cloud Side IPv4 Address**

10.100.0.1

10.100.0.5

**Customer-side IPv4 Interconnect IP**

10.100.0.10

10.100.0.6

**IPv4 Subnet Mask**

255.255.255.0

255.255.255.0

## Prerequisites

-   You have created a VPC in the China (Shanghai) region and deployed cloud resources such as Elastic Compute Service (ECS) instances in the VPC.
    
-   You understand the security group rules of the ECS instances in the VPC. Make sure that the rules allow the ECS instances to communicate with the data center. For more information, see [View security group rules](/help/en/ecs/user-guide/view-security-group-rules#task-1357273) and [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
    
-   Two connections are created, either [dedicated](/help/en/express-connect/user-guide/process-of-creating-a-dedicated-physical-connection/) or [shared](/help/en/express-connect/user-guide/overview-of-hosted-connections/) circuits.
    

## Step 1: Create VBRs for the Express Connect circuits

After the Express Connect circuits are enabled, you need to create a VBR for each Express Connect circuit. The VBRs serve as bridges for data exchange between the data center and the VPC.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com/physicalconnection/cn-hangzhou).
    
2.  In the top navigation bar, select the target region.
    
3.  On the **Physical Connection** page, find Express Connect Circuit 1 that is enabled and click its instance ID.
    
4.  On the **VBR** tab, click **Create VBR**.
    
5.  In the **Create VBR** panel, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Basic Information**
    
    **Account**
    
    The type of account that is used to create VBR 1. By default, **Current Account** is selected, which specifies that VBR 1 is created within the current Alibaba Cloud account.
    
    **Name**
    
    The name of VBR 1.
    
    **Physical Connection Information**
    
    **Express Connect Circuit**
    
    The type of connection over the Express Connect circuit that you want to associate with VBR 1. Make sure that the Express Connect circuit is deployed and functions as expected, and then select a specific connection over an Express Connect circuit from the drop-down list.
    
    Valid types:
    
    -   **Dedicated Physical Connection**: creates a VBR for a dedicated Express Connect circuit.
        
    -   **Shared Physical Connection**: creates a VBR for a shared Express Connect circuit.
        
    
    In this example, **Dedicated Physical Connection** is selected, and then the target Express Connect circuit is selected from the drop-down list.
    
    **VLAN ID**
    
    The VLAN ID of VBR 1. Valid values: 0 to 2999.
    
    In this example, **100** is entered.
    
    **Set VBR Bandwidth Value**
    
    The bandwidth of VBR 1.
    
    In this example, **200Mb** is selected.
    
    **Alibaba Cloud Side IPv4 Address**
    
    Specify an IPv4 address for the VBR to route network traffic from the VPC to the data center. The **Alibaba Cloud Side IPv4 Address** and **Data Center Side IPv4 Address** must belong to the same CIDR block.
    
    In this example, 10.100.0.1 is entered.
    
    **Customer-Side IPv4 Interconnect IP**
    
    Specify an IPv4 address for the gateway device in the data center to route network traffic from the data center to the VPC.
    
    **Note**
    
    To allow services in the VPC to access a specified gateway IP address, you must add a route to the route table of the VBR. Specify the destination CIDR block as the CIDR block to which the specified gateway IP address belongs. The next hop points to the Express Connect circuit. For more information about how to add a route entry, see [Add a custom route](/help/en/express-connect/user-guide/add-and-manage-routes#section-vw8-7mh-fme).
    
    In this example, 10.100.0.10 is entered.
    
    **IPv4 Subnet Mask**
    
    Enter the subnet mask of the IPv4 addresses that you specified for the VBR and the gateway device in the on-premises data center. You can enter a long subnet mask because only two IP addresses are required.
    
    In this example, 255.255.255.0 is entered.
    
    **Support IPv6**
    
    Specify whether to enable IPv6 for VBR 1. In this example, **Disable** is selected.
    
    -   **Disable** (default): disables IPv6.
        
    -   **Enable**: enables IPv6. If you select this option, you cannot disable IPv6 after the VBR is created. Configure the following parameters of the VBR:
        
        -   **IPv6 Address (Alibaba Cloud Gateway)**: Enter an IPv6 address for the VBR to route network traffic between the VPC and the data center. The values of the **IPv6 Address (Alibaba Cloud Gateway)** and **IPv6 Address (Data Center Gateway)** parameters must belong to the same CIDR block.
            
        -   **IPv6 Address (Data Center Gateway)**: Enter an IPv6 address for the gateway device in the data center to route network traffic between the VPC and the data center.
            
        -   **Subnet Mask (IPv6)**: Enter the subnet mask of the IPv6 addresses that you specified for the VBR and the gateway device in your data center.
            
    
6.  Repeat the preceding steps to create VBR 2 for Express Connect Circuit 2.
    
    The following table describes only the parameters related to VBR 2. For more information about how to create a VBR, see [Create and manage a VBR](/help/en/express-connect/user-guide/create-and-manage-a-vbr#task-2037143).
    
    **Configuration**
    
    **Description**
    
    **VLAN ID**
    
    The VLAN ID of VBR 2. Valid values: 0 to 2999.
    
    In this example, **102** is entered.
    
    **Set VBR Bandwidth Value**
    
    The bandwidth of VBR 2.
    
    In this example, **200Mb** is selected.
    
    **Alibaba Cloud Side IPv4 Address**
    
    Specify an IPv4 address for the VBR to route network traffic from the VPC to the data center.
    
    In this example, 10.100.0.5 is entered.
    
    **Customer-Side IPv4 Interconnection IP**
    
    Specify an IPv4 address for the gateway device in the data center to route network traffic from the data center to the VPC.
    
    In this example, 10.100.0.6 is entered.
    
    **IPv4 Subnet Mask**
    
    Enter the subnet mask of the IPv4 addresses that you specified for Alibaba Cloud side and the customer side.
    
    In this example, 255.255.255.0 is entered.
    

## Step 2: Create VBR-to-VPC connections and configure health checks

After you create VBRs, you need to create VBR-to-VPC connections to enable private network communication between the VPC and the VBRs. After you create VBR-to-VPC connections, you need to configure health checks. Health checks send probe packets at the specified time interval to monitor the connectivity between the VBRs and the on-premises data center.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region where you want to create a VBR-to-VPC connection for VBR 1.
    
3.  In the navigation pane on the left, choose **VPC Peering Connections** > **VBR-to-VPC**.
    
4.  On the **VBR-to-VPC** page, click **Create Peering Connection**.
    
5.  On the **Create VBR-to-VPC Connection** page, configure the following parameters.
    
    This topic describes only the parameters related to this example. For more information about other parameters, see [Create and manage a VBR-to-VPC connection](/help/en/express-connect/user-guide/create-and-manage-a-vbr-to-vpc-connection).
    
    **Parameter**
    
    **Description**
    
    **Initiator Region**
    
    Select the region where the initiator VBR is deployed.
    
    **Initiator VBR**
    
    Select a VBR as the initiator from the drop-down list. In this example, select the VBR created in [Step 1: Create VBRs for the Express Connect circuits](#section-q1y-zlh-5e5).
    
    **Acceptor Region Type**
    
    Select whether the initiator VBR and the acceptor VPC belong to the same region. In this example, **Intra-Region** is selected.
    
    **Acceptor Account Type**
    
    Select whether the initiator VBR and the acceptor VPC belong to the same Alibaba Cloud account. In this example, **Current Account** is selected.
    
    **Acceptor VPC**
    
    Select the VPC from the drop-down list.
    
6.  Read and select the Terms of Service and click **OK**.
    
    **Note**
    
    If the initiator or acceptor is deployed outside the Chinese mainland and the acceptor is deployed in the Chinese mainland or vice versa, the VBR-to-VPC connection is a cross-border connection. In this case, you must select the agreement for cross-border connections before you can create the VBR-to-VPC connection.
    
    After the VBR-to-VPC connection is established, the status of the initiator and the acceptor changes to **Activated**.
    
7.  Repeat the preceding steps to create a VBR-to-VPC connection between VBR 2 and the VPC.
    
8.  After you create VBR-to-VPC connections, you need to configure health checks using static routing to monitor the connectivity of the Express Connect circuits. For more information, see [Configure health checks if you connect a data center to Alibaba Cloud by creating a VBR-to-VPC connection](/help/en/express-connect/user-guide/configure-and-manage-health-checks#section-khi-suj-3i6).
    

## Step 3: Configure routes to route network traffic from the VPC to the data center

You need to add routes that point to the data center for the VPC and VBRs to securely route network traffic from the VPC and VBRs to the data center.

### Add routes for the VBRs

Add a route to the VBR to route traffic destined for the data center (172.16.0.0/12) to the Express Connect circuit.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the target region. In the navigation pane on the left, click **Virtual Border Routers (VBRs)**.
    
3.  On the **Virtual Border Routers (VBRs)** page, click the ID of the target VBR.
    
4.  On the **Virtual Border Routers (VBRs)** page, click the instance ID of VBR 1.
    
5.  Click the **Routes** tab, and then click **Add Route** on the **Custom Route Entry** tab.
    
6.  In the **Add Route** panel, configure the route entry and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Next Hop Type**
    
    Select the next hop type. Valid values:
    
    -   **VPC**: routes network traffic destined for the destination CIDR block to a VPC.
        
    -   **Physical Connection Interface**: routes network traffic destined for the destination CIDR block to an Express Connect circuit.
        
    
    In this example, **Physical Connection Interface** is selected.
    
    **Destination CIDR Block**
    
    Specify the CIDR block of the data center.
    
    In this example, 172.16.0.0/12 is entered.
    
    **Next Hop**
    
    Select the instance ID of the next hop based on the specified next hop type.
    
    In this example, Express Connect Circuit 1 that you have created is selected.
    
    **Description**
    
    Enter a description for the route.
    
7.  Repeat the preceding steps to configure a route that points to the data center for VBR 2.
    

### Configure routes for the VPC

Configure routes for the VPC to route network traffic from the VPC to the data center (172.16.0.0/12) to the VBR.

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  In the left-side navigation pane, click **Route Tables**.
    
3.  In the top navigation bar, select the region to which the route table belongs.
    
4.  On the **Route Tables** page, find the custom route table of the target VPC and click the ID of the route table.
    
5.  On the details page of the route table, click the **Route Entry List** > **Custom Route Entry** tab.
    
6.  Click **Add Route Entry**. In the **Add Route Entry** panel, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    Enter a name for the route entry.
    
    **Destination CIDR Block**
    
    Enter the destination CIDR block to which network traffic is forwarded.
    
    In this example, **IPv4 CIDR Block** is selected, and the CIDR block of the data center 172.16.0.0/12 is entered.
    
    **Next Hop Type**
    
    Select a next hop type.
    
    In this example, **Router Interface (to VBR)** is selected. Then, click the **General Routing** tab and select the router interface of the VBR-to-VPC connection between VBR 1 and the VPC from the drop-down list.
    
7.  Repeat the preceding steps to configure a route that points to VBR 2 for the VPC.
    

## Step 4: Configure routes to route data center traffic to VPC

You need to add routes that point to the VPC for the gateway device in the data center to securely route network traffic from the data center to the VPC.

### Configure routes for the VBRs

Add a route to the VBR to forward traffic from the VBR to the VPC (192.168.0.0/16) to the VPC.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the target region. In the navigation pane on the left, click **Virtual Border Routers (VBRs)**.
    
3.  On the **Virtual Border Routers (VBRs)** page, click the ID of VBR 1.
    
4.  Click the **Routes** tab, and then click **Add Route** on the **Custom Route Entry** tab.
    
5.  In the **Add Route** panel, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Next Hop Type**
    
    Select a type of next hop.
    
    In this example, **VPC** is selected.
    
    **Destination CIDR Block**
    
    Enter the CIDR block of the VPC.
    
    In this example, 192.168.0.0/16 is entered.
    
    **Next Hop**
    
    Select an existing VPC.
    
    **Description**
    
    Enter a description for the route entry.
    
6.  Repeat the preceding steps to configure a route that points to the VPC for VBR 2.
    

### Configure routes and health checks for the data center

You need to configure routes for the data center to forward data from the data center to the VBRs. You also need to add routes to route health check probe packets to Alibaba Cloud, configure health checks, and associate the routes with health checks so that traffic can be routed over two redundant connections.

1.  Configure routes for the data center.
    
    The configuration commands may vary based on the gateway device. The following example is only for reference. For more information about the configuration commands, consult the vendor of your gateway device.
    
    ```
    # Configure routes from the data center to the VPC in Alibaba Cloud
    ip route 192.168.0.0 255.255.0.0 10.100.0.1
    ip route 192.168.0.0 255.255.0.0 10.100.0.5
    ```
    
2.  Configure health checks for the data center. For more information, see [Configure health checks if you connect a data center to Alibaba Cloud by creating a VBR-to-VPC connection](/help/en/express-connect/user-guide/configure-and-manage-health-checks#section-khi-suj-3i6).
    

## Step 5: Test network connectivity

After you complete the preceding steps, you need to test the connectivity of the Express Connect circuits.

1.  Open the command line window on a computer in the data center.
    
2.  Run the `ping` command to check whether the data center can connect to an ECS instance in the VPC (CIDR block: 192.168.0.0/16).
    
    If the ping command returns a response as shown in the following figure, the connection is established.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9829036271/p833790.png)
    
3.  Run a route tracing command to check whether the two Express Connect circuits are used for load balancing.
    
    **Note**
    
    Before you run the command, make sure that you have installed the relevant commands. If you are using a different operating system, see the manual of your operating system for specific operations.
    
    -   Windows operating system: Run the `tracert` command.
        
    -   Linux operating system: Run the `traceroute` command.
