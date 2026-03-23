When you connect a data center to a virtual private cloud (VPC) on Alibaba Cloud by using two Express Connect circuits, you must configure health checks in the data center and on Alibaba Cloud to test the connectivity of the Express Connect circuits. If one of the Express Connect circuits is declared unhealthy, the system automatically routes network traffic over the other Express Connect circuit that works as expected.

## Background information

By default, Alibaba Cloud sends a probe packet every two seconds over an Express Connect circuit from the source IP address to the destination IP address in a data center. If the probe packet is returned, the Express Connect circuit works as expected. If no responses are returned for eight consecutive probe packets, the Express Connect circuit is down.

**Warning**

Make sure that responses for probe packets can be returned from the destination IP address. Do not limit the probe packet rate or block probe packets.

**Scenario**

**VBR routing method**

**Description**

Connect a data center to Alibaba Cloud by creating a VBR-to-VPC connection

Static routing

You must configure a route on the VBR. The destination CIDR block of the route is the source IP address of health checks, the subnet mask of this source IP address is 32 bits in length, and the next hop of the route points to the connected VPC. You must also **manually configure** a route in the data center. The destination CIDR block of the route is the source IP address of health checks, the subnet mask of this source IP address is 32 bits in length, and the next hop of the route points to the corresponding Express Connect circuit. This makes sure that probe packets can be returned as expected to help Alibaba Cloud determine whether the Express Connect circuit is healthy.

Dynamic routing

You must configure a route on the VBR. The destination CIDR block of the route is the source IP address of health checks, the subnet mask of this source IP address is 32 bits in length, and the next hop of the route points to the connected VPC. Then, you must advertise the Border Gateway Protocol (BGP) CIDR block on the VBR.

Connect a data center to Alibaba Cloud by using Cloud Enterprise Network (CEN)

Static routing

You must configure health checks between the source IP address and destination IP address in CEN. You must also **manually configure** a route in the data center. The destination CIDR block of the route is the source IP address of health checks, the subnet mask of this source IP address is 32 bits in length, and the next hop of the route points to the corresponding Express Connect circuit.

Dynamic routing

You must configure health checks between the source IP address and destination IP address in CEN. Then, Alibaba Cloud advertises the source IP address of health checks whose subnet mask is 32 bits in length to the data center by default.

**Note**

If throttling such as Control Plane Policing (CoPP) on Cisco devices or local attack defense is enabled for the gateway devices in the data center, probe packets may be dropped. As a result, the system may frequently switch between the two Express Connect circuits. We recommend that you disable CoPP throttling for the gateway devices in the data center.

## Prerequisites

Equal-cost multi-path (ECMP) routing is configured by using two Express Connect circuits. For more information, see the following topics:

-   [Connect a data center to Alibaba Cloud by creating a VBR-to-VPC connection](/help/en/express-connect/use-cases/connect-a-data-center-to-alibaba-cloud-by-creating-a-vbr-to-vpc-connection/)
    
-   [Connect a data center to Alibaba Cloud by using CEN](/help/en/express-connect/use-cases/use-ecr-to-connect-a-local-data-center-to-the-cloud/)
    

## **Configure health checks if you connect a data center to Alibaba Cloud by creating a VBR-to-VPC connection**

**Note**

You cannot use VBR-to-VPC connections by default. To use VBR-to-VPC connections, contact your account manager.

### **Static routing**

#### **Step 1: Configure health checks on a VBR**

**Note**

If you create a VBR-to-VPC connection across accounts, you must configure health checks for the VBR by using the acceptor account.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region. In the left-side navigation pane, choose **VPC Peering Connections** > **VBR-to-VPC**.
    
3.  On the **VBR-to-VPC** page, find the peering connection that you want to manage and click **Health Check** in the **Actions** column.
    
4.  In the **Health Check** panel, click **Configure**.
    
5.  In the **Edit VBR** panel, configure the parameters that are described in the following table to configure health checks and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Network Type**
    
    The network type of the VBR. In this example, only **IPv4 Routing** is supported.
    
    **Source IP**
    
    An idle private IP address from the connected VPC.
    
    **Destination IP**
    
    The private IP address of the interface on the gateway device in the data center.
    
    **Send Packet Every (Seconds)**
    
    The interval at which probe packets are sent for health checks. Unit: seconds.
    
    Default value: 2. Valid values: 2 to 3.
    
    **Packets Detected**
    
    The number of probe packets that are sent for health checks. Unit: packet.
    
    Default value: 8. Valid values: 3 to 8.
    

#### **Step 2: Configure health checks in the data center**

You must configure the return route of probe packets and health checks in the data center, and then configure the gateway device to route network traffic based on health check results to achieve network redundancy.

**Important**

Before you configure health checks in the data center, you must configure the return route of probe packets in the data center to make sure that the probe packets returned from the data center can be routed as expected.

1.  Configure the return route of probe packets in the data center.
    
    The configuration commands may vary based on gateway devices. The following example is for reference only. For more information about the configuration commands, consult the vendor of your gateway device.
    
    ```
    # Configure the return route of probe packets.
    ip route <Source IP Address 1 for health checks> 255.255.255.255 <Peer IP Address 1 of VBR 1 on Alibaba Cloud>
    ip route <Source IP Address 2 for health checks> 255.255.255.255 <Peer IP Address 2 of VBR 2 on Alibaba Cloud>
    ```
    
    The configuration command is used to configure a route in the data center. The destination CIDR block of the route is the source IP address of health checks, and the next hop of the route points to the peer IP address of a VBR on Alibaba Cloud. This makes sure that the probe packets sent from the data center can be routed to the destination services in the connected Alibaba Cloud VPC.
    
2.  Configure health checks in the data center.
    
    You can configure Bidirectional Forwarding Detection (BFD) or Network Quality Analyzer (NQA) on the gateway device in the data center to test the reachability of routes destined for VBRs. For more information about the configuration commands, consult the vendor of your gateway device.
    
    **Important**
    
    -   When you configure NQA probes, do not specify the **peer IPv4 address** of VBR on the Alibaba Cloud side as the destination address. Otherwise, failover may not be performed when connections are down or failover may be performed when connections are up. Use the source IP address specified in the health check in [Step 1](#ccf813db87rfq) as the destination address. This IP address supports only ICMP probes.
        
    -   If no standby connection is configured for the Express Connect circuit that connects your data center to Alibaba Cloud, we recommend that you configure routes that point to the cloud and make sure that the routes are not affected by the NQA result. This ensures that traffic can be forwarded as expected in scenarios where NQA false positives occur but the Express Connect circuit is not interrupted.
        
    
3.  Configure the gateway device to route network traffic based on health check results.
    
    If your data center is connected to Alibaba Cloud through multiple Express Connect circuits, you need to enable automatic route switchover during health checks in your data center to ensure that you can test the connectivity of the Express Connect circuits from the data center, and the system can switch between routes based on health check results. For more information about the configuration commands, consult the vendor of your gateway device.
    

### **BGP routing**

### Step 1: Configure health checks on a VBR

**Note**

If you create a VBR-to-VPC connection across accounts, you must configure health checks for the VBR by using the acceptor account.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region. In the left-side navigation pane, choose **VPC Peering Connections** > **VBR-to-VPC**.
    
3.  On the **VBR-to-VPC** page, find the peering connection that you want to manage and click **Health Check** in the **Actions** column.
    
4.  In the **Health Check** panel, click **Configure**.
    
5.  In the **Edit VBR** panel, configure the parameters that are described in the following table to configure health checks and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Network Type**
    
    The network type of the VBR. In this example, only **IPv4 Routing** is supported.
    
    **Source IP**
    
    An idle private IP address from the connected VPC.
    
    **Destination IP**
    
    The private IP address of the interface on the gateway device in the data center.
    
    **Send Packet Every (Seconds)**
    
    The interval at which probe packets are sent for health checks. Unit: seconds.
    
    Default value: 2. Valid values: 2 to 3.
    
    **Packets Detected**
    
    The number of probe packets that are sent for health checks. Unit: packet.
    
    Default value: 8. Valid values: 3 to 8.
    

### Step 2: Add a route that points to the VPC to the VBR

You can add a route that points to the VPC to the VBR to make sure that probe packets can be routed from the VBR to the VPC.

1.  In the top navigation bar, select a region. In the left-side navigation pane, click **Virtual Border Routers (VBRs)**.
    
2.  On the **Virtual Border Routers (VBRs)** page, find the VBR that you want to manage and click its ID.
    
3.  On the details page of the VBR, click the **Routes** tab and then the **Custom Route Entry** tab. Then, click **Add Route**.
    
4.  In the **Add Route** panel, configure the parameters that are described in the following table and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Next Hop Type**
    
    The type of the next hop.
    
    In this example, **VPC** is selected.
    
    **Destination CIDR Block**
    
    The destination CIDR block.
    
    In this example, the source IP address of health checks is entered. The subnet mask of this source IP address is 32 bits in length. Example: 192.168.0.1/32.
    
    **Next Hop**
    
    The instance that is used as the next hop.
    
    In this example, the destination VPC is selected.
    
    **Description**
    
    The description of the route.
    

### Step 3: Advertise the BGP CIDR block on the VBR

**Note**

Before you advertise the BGP CIDR block on the VBR, make sure that a route that points to the VPC is configured for the VBR.

1.  In the top navigation bar, select a region. In the left-side navigation pane, click **Virtual Border Routers (VBRs)**.
    
2.  On the **Virtual Border Routers (VBRs)** page, find the VBR that you want to manage and click its ID.
    
3.  On the details page of the VBR, click the **Advertised BGP Subnets** tab, and then click **Advertise BGP Subnet**.
    
4.  In the **Advertise BGP Subnet** panel, enter the source IP address of health checks in the **Advertised Subnet** field and click **OK**. The subnet mask of this source IP address is 32 bits in length. Example: 192.168.0.1/32.
    

## **Configure health checks if you connect a data center to Alibaba Cloud by using CEN**

### **Step 1: Configure health checks in the CEN console**

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com)
    
2.  In the left-side navigation pane, click **Health Checks**.
    
3.  On the **Health Checks** page, select the region in which a VBR is deployed. Then, click **Set Health Check**.
    
4.  In the **Set Health Check** dialog box, configure the parameters that are described in the following table and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Instances**
    
    The CEN instance to which the VBR is attached.
    
    **Virtual Border Router (VBR)**
    
    The VBR that you want to monitor.
    
    **Source IP Address**
    
    The source IP address. You can select one of the following methods to specify the source IP address:
    
    -   **Automatic IP Address**: The system automatically assigns an IP address from the 100.96.0.0/16 CIDR block. We recommend that you select this option.
        
        **Note**
        
        If you select this option and an ACL policy is configured on the peer , you must modify the ACL policy to allow this CIDR block. Otherwise, the health check fails.  
        
    -   **Custom IP Address**: You need to specify an idle IP address within the 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12 CIDR block. The specified IP address cannot be the IP address with which you want to communicate, the IP address of the VBR on the Alibaba Cloud side, or the IP address of the VBR on the user side.
        
    
    **Destination IP**
    
    The IP address of the VBR on the user side.
    
    **Probe Interval (Seconds)**
    
    The interval at which probe packets are sent for the health check. Unit: seconds.
    
    **Probe Packets**
    
    The number of probe packets that are sent for health checks. Unit: packet.
    
    **Change Route**
    
    Specifies whether to allow the health check feature to switch to the redundant route.
    
    By default, **Change Route** is turned on. This indicates that the health check feature can switch to the redundant route. If a redundant route is configured on the CEN instance, the health check feature immediately switches to the redundant route if an error is detected on the Express Connect circuit.
    
    If you turn off **Change Route**, the health check feature does not switch to the redundant route. Only probing is performed. The health check feature does not switch to the redundant route even if an error is detected on the Express Connect circuit.
    
    **Warning**
    
    Before you turn off Change Route, make sure that the system can switch to a redundant route by using other mechanisms. Otherwise, network connections are interrupted if the Express Connect circuit is down.
    

### **Step 2: Configure health checks in the data center**

You also need to configure health checks in the data center to ensure that health checks can run as expected.

1.  Configure the return route of probe packets in the data center.
    
    **Important**
    
    -   If the VBR uses BGP, Alibaba Cloud automatically advertises the source IP address of the health check as a route whose subnet mask is 32 bits in length to the data center after the health check is configured. In this case, you do not need to add a backhaul route.
        
    -   If the VBR uses static routes, you must manually add a route whose destination CIDR block is the source IP address of the health check, the subnet mask is 32 bits in length in the data center, and the next hop points to the Express Connect circuit. Otherwise, the ping packets cannot be returned through the Express Connect circuit, which will be declared unhealthy.
        
    
    The configuration commands may vary based on gateway devices. The following example is for reference only. For more information about the configuration commands, consult the vendor of your gateway device.
    
    ```
    # Configure the return route of probe packets.
    ip route <Source IP Address 1 for health checks> 255.255.255.255 <Peer IP Address 1 of VBR 1 on Alibaba Cloud>
    ip route <Source IP Address 2 for health checks> 255.255.255.255 <Peer IP Address 2 of VBR 2 on Alibaba Cloud>
    ```
    
    The configuration command is used to configure a route in the data center. The destination CIDR block of the route is the source IP address of health checks, and the next hop of the route points to the peer IP address of a VBR on Alibaba Cloud. This makes sure that the probe packets sent from the data center can be routed to the destination services in the connected Alibaba Cloud VPC.
    
2.  Configure health checks in the data center.
    
    You can configure Bidirectional Forwarding Detection (BFD) or Network Quality Analyzer (NQA) on the gateway device in the data center to test the reachability of routes destined for VBRs. For more information about the configuration commands, consult the vendor of your gateway device.
    
    **Important**
    
    -   When you configure NQA probes, do not specify the **peer IPv4 address** on the Alibaba Cloud side as the destination address. Otherwise, failover may not be performed when connections are down or failover may be performed when connections are up. Use the source IP address specified in the health check in [Step 1](#ccf813db87rfq) as the destination address. This IP address supports only ICMP probes.
        
    -   If no standby connection is configured for the Express Connect circuit that connects your data center to Alibaba Cloud, we recommend that you configure routes that point to the cloud and make sure that the routes are not affected by the NQA result. This ensures that traffic can be forwarded as expected in scenarios where NQA false positives occur but the Express Connect circuit is not interrupted.
        
    
3.  Configure the gateway device to route network traffic based on health check results.
    
    If your data center is connected to Alibaba Cloud through multiple Express Connect circuits, you need to enable automatic route switchover during health checks in your data center to ensure that you can test the connectivity of the Express Connect circuits from the data center, and the system can switch between routes based on health check results. For more information about the configuration commands, consult the vendor of your gateway device.
    

## What to do next

This section describes the operations that you can perform after you configure health checks on VBRs. For more information about the operations that you can perform after you configure health checks in CEN, see [Configure health checks](#).

### Clear health check settings

You can clear the settings of health checks that are configured on VBRs.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region. In the left-side navigation pane, choose **VPC Peering Connections** > **VBR-to-VPC**.
    
3.  On the **VBR-to-VPC** page, find the peering connection that you want to manage and click **Health Check** in the **Actions** column.
    
4.  In the **Health Check** panel, click **Clear**. In the **Clear Health Check Settings** message, click **OK**.
    

### Configure alert rules about health checks in the CloudMonitor console

1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Rules**.
    
3.  On the **Alert Rules** page, click **Create Alert Rule**.
    
4.  In the **Create Alert Rule** panel, select **Express Connect - Peering Connections**, **Express Connect - VBR**, or **Express Connect - Physical Connections** from the **Product** drop-down list, configure the parameters that are described in the following table, and then click **OK**.
    
    The following table describes only the parameters that are relevant to this topic. For more information about how to configure other parameters, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#task-2181123).
    
    Click **Add Rule** and select a metric type. In the **Configure Rule Description** panel, configure the parameters that are described in the following table and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Alert Rule**
    
    The name of the threshold-triggered alert rule.
    
    **Metric Type**
    
    The metric type of the threshold-triggered alert rule. In this example, **Simple Metric** is selected. For more information about how to configure multiple metrics and dynamic thresholds, see [Create an alert template](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-template#task-1919409).
    
    **Metric**
    
    The metric that you want to monitor. You can select one of the following health check metrics for peering connections, VBRs, and physical connections:
    
    -   **Express Connect - Peering Connections**
        
        -   **RouterInterfaceLossRate**: the packet loss rate monitored by health checks between the Express Connect circuit and the VPC.
            
        -   **RouterInterfaceResponseTime**: the network latency monitored by health checks between the Express Connect circuit and the VPC. Unit: milliseconds.
            
    -   **Express Connect - VBR**
        
        -   **VbrHealthyCheckLatency**: the network latency monitored by health checks between the Express Connect circuit and the VBR. Unit: microseconds.
            
        -   **VbrHealthyCheckLossRate**: the packet loss rate monitored by health checks between the Express Connect circuit and the VBR.
            
    -   **Express Connect - Physical Connections**
        
        **PhysicalConnectionStatus**: the connection status of the Express Connect circuit.
        
    
    **Threshold and Alert Level**
    
    The alert conditions, alert threshold, and alert level of the alert rule.
    
    **Chart Preview**
    
    The chart in which the monitoring data of the selected metric is displayed.
    

## References

-   [ModifyRouterInterfaceAttribute](/help/en/express-connect/developer-reference/api-modifyrouterinterfaceattribute#doc-api-Vpc-ModifyRouterInterfaceAttribute): modifies the configuration of a router interface.
    
-   [DescribeRouterInterfaces](/help/en/express-connect/developer-reference/api-describerouterinterfaces#doc-api-Vpc-DescribeRouterInterfaces): queries router interfaces in a region.
    
-   [DescribeRouterInterfaceAttribute](/help/en/express-connect/developer-reference/api-describerouterinterfaceattribute#doc-api-Vpc-DescribeRouterInterfaceAttribute): queries the configuration of a router interface.
    
-   [AddBgpNetwork](/help/en/express-connect/developer-reference/api-addbgpnetwork#doc-api-Vpc-AddBgpNetwork): advertises a BGP network.
