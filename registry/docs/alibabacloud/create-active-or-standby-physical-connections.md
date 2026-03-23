This topic describes how to establish active/standby connections between a data center and Alibaba Cloud by using two Express Connect circuits. If the primary Express Connect circuit is up, data is transmitted only by using the primary Express Connect circuit. To ensure service availability, you can configure health checks to monitor the status of your Express Connect circuits. Probe packets are sent at the specified health check intervals to monitor Express Connect circuits. If the primary Express Connect circuit becomes down, the secondary Express Connect circuit takes over.

## Scenario

The following example shows how to establish active/standby connections between a data center and Alibaba Cloud by using two Express Connect circuits.

A company has a data center in Shanghai and a virtual private cloud (VPC) in the China (Shanghai) region. The private CIDR block of the data center is 172.16.0.0/12, and the CIDR block of the VPC is 192.168.0.0/16. To eliminate single points of failure (SPOFs), the company plans to lease two Express Connect circuits from different connectivity providers to establish active/standby connections between the data center and Alibaba Cloud.

![冗余专线主备接入架构图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0980154261/p276806.png)

The following table describes the configurations of the virtual border routers (VBRs) connected to the Express Connect circuits.

**Parameter**

**VBR1 (connected to circuit 1)**

**VBR2 (connected to circuit 2)**

**VLAN ID**

1

1

**Alibaba Cloud Side IPv4 Address**

10.0.0.1

10.0.0.5

**Data Center Side IPv4 Address**

10.0.0.2

10.0.0.6

**IPv4 Subnet Mask**

255.255.255.252

255.255.255.252

## Prerequisites

Two connections are created, either [dedicated](/help/en/express-connect/user-guide/process-of-creating-a-dedicated-physical-connection/) or [shared](/help/en/express-connect/user-guide/overview-of-hosted-connections/) circuits.

## Step 1: Create VBRs and configure routes

You need to create a VBR for each Express Connect circuit and add a route to each VBR. Set the destination of both routes to the data center.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  Create a VBR for Express Connect Circuit 1.
    
    1.  In the top navigation bar, select a region and then click **Virtual Border Routers (VBRs)** in the left-side navigation pane.
        
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
        
3.  Add a route that points to the data center to VBR1.
    
    1.  In the top navigation bar, select a region and then click **Virtual Border Routers (VBRs)** in the left-side navigation pane.
        
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
    
7.  Repeat [Step](#step-qiv-0tu-xn3) [5](#step-qiv-0tu-xn3) and [Step](#step-o52-u2f-rc3) [6](#step-o52-u2f-rc3) to create a connection for VBR2.
    
    After the connections are created, you can view the details about the connections on the **Intra-region Connections** tab of the VBR details page. For more information, see [View network instance connections](/help/en/cen/user-guide/view-network-instance-connections#task-1995538).
    

## Step 3: Configure health checks on the Alibaba Cloud side

After you configure health checks, Alibaba Cloud sends a probe packet every 2 seconds over the Express Connect circuits from the source IP address to the destination IP address in the data center. If no responses are returned for eight consecutive probe packets over one of the Express Connect circuits, the other Express Connect circuit automatically takes over.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Health Checks**.
    
3.  On the **Health Checks** page, select the region in which a VBR is deployed. Then, click **Set Health Check**.
    
    In this example, **China (Shanghai)** is selected, which is the region of VBR1.
    
4.  In the **Set Health Check** dialog box, configure the following parameters and click **OK**.
    
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
    
5.  Repeat [Step](#step-t4w-5fn-jzz) [3](#step-t4w-5fn-jzz) to [Step](#step-iea-hmk-cb0) [4](#step-iea-hmk-cb0) to configure health checks for VBR2.
    

## Step 4: Specify the primary and secondary Express Connect circuits

To specify the primary and secondary Express Connect circuits, you need to configure routing policies in CEN. In this example, the primary Express Connect circuit is connected to VBR1. The secondary Express Connect circuit is connected to VBR2.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the navigation pane on the left, click the ID of the route table that you want to manage.
    
6.  On the route table details page, click the **Routing Policies** tab.
    
7.  On the **Routing Policies** tab, click **Add Routing Policy**.
    
8.  On the **Add Routing Policy** page, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Policy Priority**
    
    Enter a priority for the routing policy. Valid values: 1 to 100 A smaller value specifies a higher priority.
    
    In this example, **20** is used.
    
    **Description**
    
    Enter a description for the routing policies.
    
    **Associated Route Table**
    
    Select a route table to associate with the routing policy.
    
    You can associate a routing policy with the system route table or a custom route table. In this example, the default route table is selected.
    
    **Policy Direction**
    
    Select the direction in which the routing policy applies.
    
    -   Ingress Regional Gateway: Routes are advertised to the transit router deployed in the current region. For example, routes are advertised from network instances deployed in the current region or transit routers deployed in other regions to the transit router deployed in the current region.
        
    -   Egress Regional Gateway: Routes are advertised from the transit router deployed in the current region. For example, routes are advertised from the transit router deployed in the current region to network instances deployed in the current region or transit routers deployed in other regions.
        
    
    In this example, **Ingress Regional Gateway** is selected.
    
    **Match Conditions**
    
    Select a match condition for the routing policy.
    
    In this example, **Source Instance ID List** is selected and the ID of VBR1 is selected. This way, the routing policy applies to all routes of VBR1.
    
    Click **![添加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4176346361/p298026.png)Add Match Condition** to add multiple match conditions. For more information, see the "Table 2. Match conditions" section of the [Routing policy overview](/help/en/cen/user-guide/routing-policy-overview/#table-z6g-gjf-l3q) topic.
    
    **Policy Action**
    
    Set the **Policy Action** parameter to **Allow**.
    
    Click **![添加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4176346361/p298026.png)Add Action Object**, select **Route Priority**, and then set a priority for routes. A smaller value indicates a higher priority. In this example, **Route Priority** is set to **10**.
    
    **Note**
    
    In this example, You do not need to configure the Associated Policy Priority parameter for VBR1.
    
9.  Repeat the preceding steps to specify the Express Connect circuit that is associated with VBR2 as the secondary Express Connect circuit.
    
    The following table describes the key parameters. Use the same values as VBR1 for parameters that are not included in the table.
    
    **Parameter**
    
    **Description**
    
    **Policy Priority**
    
    A smaller value indicates a higher priority. The priority value of the routing policy for VBR 2 must be greater than that of the routing policy for VBR 1.
    
    In this example, **30** is used.
    
    **Match Conditions**
    
    In this example, **Source Instance ID Lists** is selected and the ID of VBR2 is selected. This way, the routing policy applies to all routes of VBR2.
    
    **Policy Action**
    
    Set the **Policy Action** parameter to **Allow** and set a priority for routes.
    
    -   A smaller value indicates a higher priority. The priority value of routes for VBR 2 must be greater than that of routes for VBR 1. In this example, **Route Priority** is set to **20**.
        
    -   In this example, you do not need to configure the Associated Policy Priority parameter for VBR2.
        
    
    After you create the routing policies, you can view two 172.16.0.0/12 routes on the **Network Routes** tab, which are destined for the data center. One of the routes is the secondary route.
    

## Step 5: Configure routes and health checks on the data center side

You need to configure routes and health checks on the data center side, and then configure the gateway device to route network traffic based on the health check results to achieve network redundancy.

**Important**

Before you configure health checks in the data center, you must configure the return route of probe packets in the data center to make sure that the probe packets returned from the data center can be routed as expected.

1.  Configure routes in the data center.
    
    The configuration commands may vary based on the gateway device. The following example is only for reference.
    
    ```
    ip route 192.168.0.0 255.255.0.0 10.0.0.1 preference 10
    ip route 192.168.0.0 255.255.0.0 10.0.0.5 preference 20
    ```
    
2.  Configure health checks on the data center side.
    
    You can configure Bidirectional Forwarding Detection (BFD) or Network Quality Analyzer (NQA) on the gateway device in the data center to verify the reachability of routes that are destined for the VBRs. For more information about the configuration commands, consult the vendor of your gateway device. BFD can detect a link failure within milliseconds. Therefore, we recommend that you configure BFD on your gateway device.
    
3.  Configure the gateway device to route network traffic based on the health check results.
    
    Configurations may vary based on the gateway device. For more information, consult the vendor of your gateway device.
    

## Step 6: Test the network connectivity

After you complete the preceding steps, you need to verify the connectivity of the Express Connect circuits.

1.  Open the CLI on a computer in the data center.
    
2.  Run the ping command to verify the connectivity between the data center and an ECS instance in the VPC whose CIDR block is 192.168.0.0/16.
    
    If you can receive echo reply packets, the connection is established.
    
3.  Disable the primary Express Connect circuit and run the ping command to verify the connectivity between the data center and an ECS instance in the VPC whose CIDR block is 192.168.0.0/16.
    
    If echo reply packets are returned, the secondary Express Connect circuit can serve your workloads when the primary Express Connect is down.
    

## References

-   For more information about how to troubleshoot connectivity issues between a data center and an ECS instance, see [Troubleshooting](/help/en/express-connect/user-guide/troubleshooting#task-2377534).
    
-   For more information about Express Connect circuit installation, see [FAQ about installing an Express Connect circuit](/help/en/express-connect/support/faq-about-installing-an-express-connect-circuit#concept-2375061).
    
-   For more information about how to resolve issues in Express Connect circuit connections, see [Express connect](/help/en/express-connect/support/faq-about-connections-over-express-connect-circuits#concept-gpt-1qb-12b).
