You can enable Border Gateway Protocol (BGP) on the network device in a data center and configure Bidirectional Forwarding Detection (BFD) on the virtual border router (VBR) to accelerate route convergence between the data center and a virtual private cloud (VPC).

## Scenario example

The following scenario is used as an example. An enterprise has a data center in Hangzhou and creates a VPC in the China (Hangzhou) region. The enterprise wants to use an Express Connect circuit to connect a customer-premises equipment (CPE) device to a VBR and use Cloud Enterprise Network (CEN) to enable communication between the data center and the VPC. To accelerate route convergence, the enterprise wants to configure BGP and BFD on the router in the data center and the VBR. This improves network availability.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1659435671/CAEQTxiBgICe.pCc2BkiIDFkMTE0MGZmZmVmYjQwMjM4OTU2YTdjOTE5ZjNmZDRm4852334_20241231112731.834.svg)

## Prerequisites

-   The data center is connected to Alibaba Cloud by using an Express Connect circuit. For more information, see [Connect a data center to ECS by using an Express Connect circuit](/help/en/express-connect/use-cases/connect-a-data-center-to-ecs-by-using-an-express-connect-circuit#task-2352427).
    
-   A BGP connection is established between the data center and the VPC. The **BGP peer** is in the **Established** state. For more information, see [Configure BGP](/help/en/express-connect/user-guide/configure-and-manage-bgp#concept-ljj-4vx-dfb).
    

## Step 1: Configure BFD on the VBR

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region where you want to create a VBR. Then, in the left-side navigation pane, click **Virtual Border Routers (VBRs)**.
    
3.  On the **Virtual Border Routers (VBRs)** page, find the VBR whose configuration you want to modify and click **Modify** in the **Actions** column.
    
4.  In the **Edit VBR** panel, configure the parameters and click **OK**.
    
    In this example, **Submission Interval** is set to **1000** milliseconds, **Reception Interval** is set to **1000** milliseconds, and **Detection Time Multiplier** is set to **3**. These are the default values.
    
5.  Enable BFD
    
    1.  On the **Virtual Border Routers (VBRs)** page, find the VBR that you want to manage and click its ID.
        
    2.  On the **BGP Peers** tab, find the BGP peer that you want to manage and click **Edit** in the **Actions** column.
        
    3.  In the **Modify BGP Peer** panel, select **Enable BFD**, configure **BFD Hop Count**, and then click **OK**.
        
        **BFD Hop Count** specifies the maximum number of hops between the source and destination. You can specify this parameter based on the network topology. Valid values: 1 to 255.
        
        **Important**
        
        If you use BFD in a multi-cloud environment or a fiber-optic direct connection network without any bridge device, you need to change the default BFD hop count from **255** to **1**.
        

## Step 2: Configure BFD between the CE router and the VBR

**Note**

In this example, an H3C-6820 device is used. The configuration may vary based on devices. For more information, contact the service provider of your CPE device.

1.  Log on to the CPE device and run the following command to configure BFD:
    
    ```
    System-view
    Bgp <Autonomous System Number (ASN) of the CPE device>
    Peer <IP address of the VBR on the Alibaba Cloud side> bfd
    ```
    
    **Note**
    
    In this example, 10.101.1.2 is used as the IP address of the VBR.
    
2.  To verify the BFD configurations, run the `display bfd session verbose` command.
    
    The following information is returned. **Session State: Up** indicates that a BGP connection is established between the CPE device and the VBR and that BFD is enabled.
    
    ```
    <CPE> display bfd session verbose
    Total Session Num: 1 Up Session Num: 1 Init Mode: Active
    IPv4 Session Working Under Ctrl Mode:
    Local Discr: 513 Remote Discr: 513
    Source IP: 10.101.1.1 Destination IP: 10.101.1.2
    Session State: Up
    Interface: N/A
    Min Tx Inter: 500ms Act Tx Inter: 500ms
    Min Rx Inter: 500ms Detect Inter: 2500ms
    Rx Count: 135 Tx Count: 135
    Connect Type: Indirect Running Up for: 00:00:58
    Hold Time: 2457ms Auth mode: None
    Detect Mode: Async Slot: 0
    Protocol: BGP
    Version:1
    Diag Info: No Diagnostic
    ```
    
3.  If multiple connections over Express Connect circuits are established between the data center and the VPC, repeat the preceding operations.
    

## FAQ

-   Can I configure BFD on one VBR to accelerate route convergence when two VBRs are attached to a CEN instance?
    
    Yes, you can configure BFD on one VBR to accelerate route convergence when two VBRs are attached to a CEN instance.
    
-   If BFD detects failures on one of two VBRs attached to a CEN instance, can the other VBR immediately take over?
    
    Yes, the other VBR can immediately take over only if the two VBRs are added to a failover group. For more information, see [Configure a failover group](/help/en/express-connect/user-guide/configure-a-failover-group#task-2067261).
