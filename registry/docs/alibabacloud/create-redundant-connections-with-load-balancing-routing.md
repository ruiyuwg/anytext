This topic describes how to use two Express Connect circuits to establish active/active connections between a data center and Alibaba Cloud. This improves network reliability and ensures high availability of the Express Connect circuits. If your data center is connected to Alibaba Cloud by using two Express Connect circuits, network traffic is transmitted over both connections. If one of the Express Connect circuits is down, the other Express Connect circuit takes over to ensure service availability.

## Scenario

The following scenario is used as an example to describe how to use two Express Connect circuits to establish active/active connections.

A company has a data center in Shanghai and creates a virtual private cloud (VPC) in the China (Shanghai) region. The private CIDR block of the data center is 172.16.0.0/12, and the CIDR block of the VPC is 192.168.0.0/16. To prevent single points of failure (SPOFs), the company needs to lease two Express Connect circuits from different connectivity providers to implement active-active failover.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2519376671/CAEQUBiBgIDkxO6Z2RkiIDdkOTc1OGE0Y2NiYTQ0NTBhZWViNGZmMGNiYTk5Nzhj5973280_20251216165004.225.svg)

The following table lists the configurations of the virtual border routers (VBRs) that are connected to the Express Connect circuits.

**Parameter**

**VBR1 (connected to circuit 1)**

**VBR2 (connected to circuit 2)**

**VLAN ID**

1

1

**IPv4 Address (Alibaba Cloud Gateway)**

10.0.0.1

10.0.0.5

**IPv4 Address (Data Center Gateway)**

10.0.0.2

10.0.0.6

**Subnet Mask (IPv4)**

255.255.255.252

255.255.255.252

## Prerequisites

-   A VPC is created in the China (Shanghai) region, and cloud resources such as Elastic Compute Service (ECS) instances that host your business systems are deployed in the VPC. For more information, see [Create a VPC with an IPv4 CIDR block](/help/en/vpc/getting-started/create-vpc-with-ipv4#task-1512598).
    
    **Note**
    
    Before you connect an Enterprise Edition transit router to a VPC, make sure that the VPC has at least one vSwitch in a zone that supports Enterprise Edition transit routers. The vSwitch must have at least one idle IP address. In this example, the transit router is created in the China (Shanghai) region. Shanghai Zone F and Shanghai Zone G support Enterprise Edition transit routers.
    
-   You understand the security group rules of the ECS instances in the VPC. Make sure that the rules allow the ECS instances to communicate with the data center. For more information, see [View security group rules](/help/en/ecs/user-guide/view-security-group-rules#task-1357273) and [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
    
-   A Cloud Enterprise Network (CEN) instance is created. For more information, see the [Create a CEN instance](/help/en/cen/user-guide/cen-instances-1#section-p1n-an3-ani) section of the "CEN instances" topic.
    
-   Enterprise Edition transit routers are created in the region of the VPC. For more information, see [Transit routers](/help/en/cen/user-guide/transit-routers).
    
-   Before you purchase an Express Connect circuit, make sure that you understand the billing rules. In this example, two Express Connect circuits are used. Therefore, you need to apply for two physical connections. For more information about the resource usage fee and outbound data transfer fee, see the following topics:
    
    -   [Billing overview](/help/en/express-connect/product-overview/billing-overview/#task-2279794)
        
    -   [Resource usage fee](/help/en/express-connect/product-overview/resource-usage-fee#task-2279796)
        
    -   [Outbound data transfer fee](/help/en/express-connect/product-overview/outbound-data-transfer-fees#task-2279798)
        
-   Two connections are created, either [dedicated](/help/en/express-connect/user-guide/process-of-creating-a-dedicated-physical-connection/) or [shared](/help/en/express-connect/user-guide/overview-of-hosted-connections/) circuits.
    

## Step 1: Create VBRs and configure routing

You need to create a VBR for each Express Connect circuit and add a route to each VBR. Set the destination of both routes to the data center.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  Create a VBR for Express Connect Circuit 1.
    
    1.  In the top navigation bar, select the region and then click **Virtual Border Routers (VBRs)** in the left-side navigation pane.
        
    2.  On the **Virtual Border Routers (VBRs)** page, click **Create VBR**.
        
    3.  On the Virtual Border Routers (VBRs) page, click Create VBR. In the **Create VBR** panel, configure the parameters that are described in the following table and click **OK**.
        
        This topic describes only the key parameters. For more information about the other parameters, see [Create and manage a VBR](/help/en/express-connect/user-guide/create-and-manage-a-vbr).
        
        **Parameter**
        
        **Description**
        
        **Account**
        
        Specify the Alibaba Cloud account to which the VBR belongs.
        
        In this example, **Current Account** is selected.
        
        **Name**
        
        Enter a name for the VBR.
        
        In this example, **VBR1** is entered.
        
        **Physical Connection Interface**
        
        In this example, Express Connect Circuit 1 is selected.
        
        **VLAN ID**
        
        Enter the virtual LAN (VLAN) ID of the VBR.
        
        In this example, **1** is entered.
        
        **Set VBR Bandwidth Value**
        
        Select the bandwidth of the VBR.
        
        In this example, **200Mb** is selected.
        
        **IPv4 Address (Alibaba Cloud Gateway)**
        
        Enter an IPv4 address for the VBR to route network traffic between the VPC and the data center.
        
        In this example, **10.0.0.1** is entered.
        
        **IPv4 Address (Data Center Gateway)**
        
        Enter an IPv4 address for the gateway device in the data center to route network traffic between the data center and the VPC.
        
        In this example, **10.0.0.2** is entered.
        
        **Subnet Mask (IPv4)**
        
        Enter the subnet mask of the specified IPv4 addresses.
        
        In this example, **255.255.255.252** is entered.
        
3.  Add a route whose destination is the data center to VBR1.
    
    1.  In the top navigation bar, select the region and then click **Virtual Border Routers (VBRs)** in the left-side navigation pane.
        
    2.  On the **Virtual Border Routers (VBRs)** page, click the ID of VBR1.
        
    3.  On the details page of VBR1, click the **Routes** tab and click **Add Route**.
        
    4.  In the **Add Route** panel, configure the following parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Next Hop Type**
        
        In this example, **Physical Connection Interface** is selected.
        
        **Destination CIDR Block**
        
        Enter the CIDR block of the data center.
        
        In this example, **172.16.0.0/12** is entered.
        
        **Next Hop**
        
        Select an Express Connect circuit.
        
        In this example, Express Connect Circuit 1 is selected.
        
        **Description**
        
        Enter a description for the route.
        
4.  Repeat the preceding steps to create VBR2 for Express Connect Circuit 2 and add a route to VBR2. Set the destination of the route to the data center.
    

## Step 2: Connect the transit router to the VPC and the VBRs

Connect the transit router in the China (Shanghai) region to the VPC that you want to connect to the data center. Then, connect the transit router to the VBRs that are associated with the Express Connect circuits. This way, the VPC and the data center can communicate with each other.

This topic describes only the key parameters. For more information, see [Manage network instance connections](/help/en/cen/user-guide/manage-network-instance-connections/).

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Settings** > **Transit Router** tab, find the transit router that you want to manage and click **Create Connection** in the **Actions** column.
    
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
    
    By default, the following advanced features are selected: **Associate with Default Route Table of Transit Router**, **Propagate System Routes to Default Route Table of Transit Router**, and **Automatically Creates Route That Points to Transit Router and Adds to All Route Tables of Current VPC**.
    
    In this example, the default settings are used.
    
5.  On the **Connection with Peer Network Instance** page, click **Create More Connections**.
    
6.  On the **Connection with Peer Network Instance** page, configure the following parameters and click **OK** to create a connection for VBR1.
    
    **Parameter**
    
    **Description**
    
    **Network Type**
    
    The type of the network instance. In this example, **Virtual Border Router (VBR)** is selected.
    
    **Region**
    
    Select the region where the VBR is deployed.
    
    In this example, **China (Shanghai)** is selected.
    
    **Transit Router**
    
    The system automatically displays the transit router in the selected region.
    
    **Resource Owner ID**
    
    Select the Alibaba Cloud account to which the network instance belongs.
    
    In this example, **Current Account** is selected.
    
    **Networks**
    
    The ID of the VBR that you want to connect.
    
    In this example, VBR1 is selected.
    
    **Advanced Settings**
    
    By default, the following advanced features are enabled: **Associate with Default Route Table of Transit Router**, **Propagate System Routes to Default Route Table of Transit Router**, and **Automatically Advertise Routes to Peer Region**.
    
    In this example, the default settings are used.
    
7.  Repeat [Step](#step-eui-vre-dk1) [5](#step-eui-vre-dk1) and [Step](#step-s7g-h0o-vcs) [6](#step-s7g-h0o-vcs) to create a connection for VBR2.
    
    After the connections are created, you can view the details about the connections on the **Intra-region Connections** tab of the VBR details page. For more information, see [View network instance connections](/help/en/cen/user-guide/view-network-instance-connections#task-1995538).
    

## Step 3: Configure health checks on the Alibaba Cloud side

After you configure health checks, Alibaba Cloud sends a probe packet every 2 seconds over the Express Connect circuits from the source IP address to the destination IP address in the data center. If no responses are returned for eight consecutive probe packets over one of the Express Connect circuits, the other Express Connect circuit automatically takes over.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Health Checks**.
    
3.  On the **Health Check** page, select the region in which the VBR is deployed. Then, click **Set Health Check**.
    
    In this example, **China (Shanghai)** is selected.
    
4.  In the **Set Health Check** panel, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Instances**
    
    The CEN instance to which the VBR is attached.
    
    **Virtual Border Router (VBR)**
    
    The VBR that you want to monitor.
    
    In this example, VBR1 is selected.
    
    **Source IP**
    
    The source IP address. You can select one of the following methods to specify the source IP address:
    
    -   **Automatic IP Address**: The system automatically assigns an IP address from the 100.96.0.0/16 CIDR block. We recommend that you select this option.
        
        **Note**
        
        If you select this option and an ACL policy is configured on the peer , you must modify the ACL policy to allow this CIDR block. Otherwise, the health check fails.  
        
    -   **Custom IP Address**: You need to specify an idle IP address within the 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12 CIDR block. The specified IP address cannot be the IP address with which you want to communicate, the IP address of the VBR on the Alibaba Cloud side, or the IP address of the VBR on the user side.
        
    
    **Destination IP**
    
    The IP address of the VBR on the user side.
    
    **Probe Interval (Seconds)**
    
    The interval at which probe packets are sent for the health check. Unit: seconds.
    
    Default value: 2. Valid values: 2 to 3.
    
    **Probe Packets**
    
    The number of probe packets that are sent for health checks. Unit: packet.
    
    Default value: 8. Valid values: 3 to 8.
    
    **Change Route**
    
    Specifies whether to allow the health check feature to switch to the redundant route.
    
    By default, **Change Route** is turned on. This indicates that the health check feature can switch to the redundant route. If a redundant route is configured on the CEN instance, the health check feature immediately switches to the redundant route if an error is detected on the Express Connect circuit.
    
    If you turn off **Change Route**, the health check feature does not switch to the redundant route. Only probing is performed. The health check feature does not switch to the redundant route even if an error is detected on the Express Connect circuit.
    
    **Warning**
    
    Before you turn off Change Route, make sure that the system can switch to a redundant route by using other mechanisms. Otherwise, network connections are interrupted if the Express Connect circuit is down.
    
    **Note**
    
    The system sends probe packets at the specified intervals. If the number of consecutively dropped packets reaches the specified value, the health check fails.
    
5.  Repeat [Step](#step-l48-d9w-8ji) [3](#step-l48-d9w-8ji) to [Step](#step-fwl-p52-jdt) [4](#step-fwl-p52-jdt) to configure health checks for VBR2.
    

## Step 4: Configure routes and health checks on the data center side

You need to configure routes and health checks on the data center side, and then configure the gateway device to route network traffic based on the health check results to achieve network redundancy.

**Important**

Before you configure health checks in the data center, you must configure the return route of probe packets in the data center to make sure that the probe packets returned from the data center can be routed as expected.

1.  Configure routes in the data center.
    
    The configuration commands may vary based on the gateway device. The following example is only for reference. For more information about the configuration commands, consult the vendor of your gateway device.
    
    ```
    # Configure routes in the data center to route network traffic to the VPC.
    ip route 192.168.0.0 255.255.0.0 10.0.0.1
    ip route 192.168.0.0 255.255.0.0 10.0.0.5
    # Configure the return route of the probe packets.
    ip route <The source IP address for health checks> 255.255.255.255 10.0.0.1
    ip route <The source IP address for health checks> 255.255.255.255 10.0.0.5
    ```
    
2.  Configure health checks on the data center side.
    
    You can configure Bidirectional Forwarding Detection (BFD) or Network Quality Analyzer (NQA) on the gateway device in the data center to verify the reachability of routes that are destined for the VBRs. For more information about the configuration commands, consult the vendor of your gateway device.
    
3.  Configure the gateway device to route network traffic based on the health check results.
    
    The configuration may vary based on the network environment. For more information about the configuration commands, consult the vendor of your gateway device.
    

## Step 5: Test the network connectivity

After you complete the preceding steps, you need to verify the connectivity of the Express Connect circuits.

1.  Open the command-line interface (CLI) on a computer of the data center side.
    
2.  Run the ping command to verify the connectivity between the data center and an ECS instance in the VPC. The CIDR block of the VPC is 192.168.0.0/16.
    
    If echo reply packets are returned, the destination is reachable.
    
3.  Run a route tracing command to check whether the two Express Connect circuits are used for load balancing.
    
    **Note**
    
    Before you run the command, make sure that you have installed the relevant commands. If you are using a different operating system, see the manual of your operating system for specific operations.
    
    -   Windows operating system: Run the `tracert` command.
        
    -   Linux operating system: Run the `traceroute` command.
        

## References

-   For more information about how to troubleshoot connectivity issues between a data center and an ECS instance, see [Troubleshooting](/help/en/express-connect/user-guide/troubleshooting#task-2377534).
    
-   For more information about Express Connect circuit installation, see [FAQ about installing an Express Connect circuit](/help/en/express-connect/support/faq-about-installing-an-express-connect-circuit#concept-2375061).
    
-   For more information about how to resolve issues in Express Connect circuit connections, see [Express connect](/help/en/express-connect/support/faq-about-connections-over-express-connect-circuits#concept-gpt-1qb-12b).
