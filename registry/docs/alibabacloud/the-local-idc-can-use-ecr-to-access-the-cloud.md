This topic describes how to use two Express Connect circuits and an Express Connect Router (ECR) to connect a data center (IDC) to the cloud over active/standby connections and enable communication with a virtual private cloud (VPC).

## Example

An enterprise has a data center (IDC) in the China (Beijing) region and has created a transit router (TR) and a VPC in the same region. It needs to use an ECR to allow servers in the IDC to access cloud services over active/standby connections. Normally, traffic is forwarded only through the active connection. When Bidirectional Forwarding Detection (BFD) detects that the active connection is unreachable, traffic is switched to the standby one to ensure that services are not affected.

The procedure is as follows:

1.  Deploy Express Connect circuits: Deploy two circuits to connect customer-premises equipment (CPE) devices in the IDC to VBRs, forming active/standby connections.
    
2.  Create VBRs: Create two VBRs (VBR1 and VBR2) in the China (Beijing) region to serve as private network bridges between the IDC and the VPC.
    
3.  Create an ECR: Create an ECR to serve as a forwarding service component between the IDC and the VPC.
    
4.  Attach the VBRs and the TR to the ECR: Attach VBR1, VBR2, and the TR to the ECR to establish a logical association between the Express Connect circuits and cloud resources.
    
5.  Configure BGP and enable BFD: Configure Border Gateway Protocol (BGP) dynamic routing between the IDC and the VBRs, and enable the BFD feature to implement rapid route convergence and automatic link failover.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2073833671/CAEQTxiBgICR.d._1BkiIDVkNWRmNmQzZjk1NjQ0OWJiMzAyOGUxOWZlNjBkZWYx4122902_20231220095134.007.svg)

## Prerequisites

-   You have [created a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc) in the China (Beijing) region and deployed services on ECS instances in the VPC.
    
-   You have created a [TR](/help/en/cen/user-guide/transit-routers) in the China (Beijing) region and [created a VPC connection](/help/en/cen/user-guide/connect-vpcs) for the TR.
    
-   Make sure that the rules of the security group attached to the ECS instance in the VPC allow traffic from the IDC. For more information, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
    

## **Procedure**

### **Step 1: Apply for physical ports**

In this topic, you can apply for ports in high-reliability mode, which provides [powerful disaster recovery capabilities](/help/en/doc-detail/2580081.html). After you submit the application, the system creates two physical port instances.

### **Step 2: Create VBRs**

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com/) and select the China (Beijing) region in the top navigation bar.
    
2.  On the **Physical Connection** page, click the target physical port instance. On the details page, click **Create VBR** to create VBR1.
    
3.  In the **Create VBR** panel, select **Current Account** as the account type, configure the following key parameters, and then click **OK**.
    
    ![VBR1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4368534571/p991245.png)
    
4.  Repeat the preceding steps to create VBR2, and then click **OK**.
    
    ![VBR2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4368534571/p991247.png)
    

### **Step 3: Create an ECR and attach it to the TR and VBRs**

1.  **Create an ECR**
    
    1.  In the navigation pane on the left, click , and click **Express Connect Router (ECR)**.
        
    2.  In the dialog box, enter `64512` for **ASN**, keep the default values for other parameters, select the check box to agree to the billing rules, and then click **OK**.
        
2.  **Attach the ECR to the VBRs**
    
    1.  Click the ID of the target ECR instance. On the **VBR** tab, click **Associate VBR**.
        
    2.  In the dialog box that appears, configure the following parameters and click **OK**.
        
        -   **Resource Ownership**: Select `Same Account`.
            
        -   **Region**: `China (Beijing)`.
            
        -   **Network Instance**: Select the VBR1 instance that you created.
            
    3.  Repeat the preceding steps to attach the ECR to VBR2.
        
3.  **Attach the ECR to the TR**
    
    1.  Click the ID of the target ECR instance, and then click the **TR** tab.
        
    2.  Click **Associate TR**. In the dialog box, configure the following parameters, keep the default values for unlisted parameters, and then click **OK**.
        
        -   **CEN ID**: Select the CEN instance that you created.
            
        -   **Region**: `China (Beijing)`.
            
        -   **TR**: Select the transit router instance that you created.
            

### **Step 4: Configure BGP and enable BFD**

You must configure a BGP peer between the on-premises gateway device and the VBR. When the BGP peer status is Established, the BGP session is successfully established and can start exchanging routing information.

After the peer relationship is established, the IDC can automatically learn cloud routes through BGP. Advertise the IDC CIDR block from the on-premises gateway device so that the VBR can automatically learn the routes to the IDC. After the preceding configurations are complete, servers in the IDC can access cloud resources.

#### **Configure BGP routes on the VBRs**

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com/) to configure BGP routes for VBR1.
    
2.  In the navigation pane on the left, click **Virtual Border Routers (VBRs)**. Find the target VBR1 instance and click its ID. On the details page, configure BGP routes:
    
    1.  Click **Create BGP Group**, configure the following parameters, and then click **OK**.
        
        -   **Peer ASN**: Enter the AS number of the IDC network, which is `6***3`.
            
        -   **Local ASN**: Enter the AS number of the Alibaba Cloud side, which is `64512`. The BGP ASN of the VBR inherits the ASN of the ECR.
            
    2.  Click **Create BGP Peer**, configure the following parameters, select **Enable BFD**, and then click **OK**.
        
        -   **BGP Groups**: Select the BGP group that you created.
            
        -   **BGP Peer IP**: Enter the IP address of the BGP peer. In this topic, enter the IP address of the interface on CPE1 that connects to the Express Connect circuit, which is 10.10.1.5.
            
3.  Repeat the preceding steps to configure BGP routes for VBR2.
    

#### **Configure BGP routes in the data center**

##### **BGP routes advertised from the data center to the VPC**

On CPE1 and CPE2, adjust the AS-Path length of the route to the 192.168.0.0/16 CIDR block advertised from the IDC to control the route selection priority from the IDC to the VPC. A shorter AS-Path indicates a higher priority.

In this topic, an AS-Path is prepended for CPE2. By increasing the AS-Path length, the priority of the route to the IDC CIDR block advertised from the VBR2 instance to the VPC is reduced. This makes VBR1 the active link and VBR2 the standby link. As a result, the two Express Connect circuits form active/standby links for traffic from the cloud to the data center.

**Note**

The configuration commands may vary based on the vendor and device. This topic lists only the key parameters. For specific commands, consult your device vendor.

**Configuration**

**CPE1**

**CPE2**

VLAN Tag

1308

1309

Network

192.168.0.0/16

192.168.0.0/16

BGP ASN

6\*\*\*3

6\*\*\*4

Interface IP

10.10.1.5

10.10.2.5

AS-Path

A

B, A

##### **BGP routes advertised from the VPC to the data center**

In the IDC, adjust the BGP route selection attributes for the route to the VPC CIDR block 10.0.0.0/8 learned from VBR1 and VBR2. This makes VBR1 the active link and VBR2 the standby link. As a result, the two Express Connect circuits form active/standby links for traffic from the data center to the cloud.

### **Step 5: Verification and testing**

1.  Test network connectivity.
    
    Log on to an ECS instance in the VPC and run the `ping <IP address of the client in the IDC>` command to access the client in the IDC.
    
    The following response indicates that a network connection is established between the IDC and the VPC.
    
    ![测试连通性](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4368534571/p990779.png)
    
2.  Run the `traceroute` command to check whether the two Express Connect circuits provide active/standby links. If `traceroute` is not installed, you can run the `sudo yum install traceroute` command to install it. This command is applicable to CentOS.
    
    -   **VPC-to-IDC direction**
        
        Log on to the ECS instance in the VPC and run the `traceroute <IP address of the client in the IDC>` command. The following response indicates that traffic from the VPC to the IDC is forwarded through the active link VBR1.
        
        ![主（下云）](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4368534571/p991395.png)
        
    -   **IDC-to-VPC direction**
        
        Log on to the client in the IDC and run the `traceroute <IP address of the ECS instance in the VPC>` command. The following response indicates that traffic from the IDC to the VPC is forwarded through the active link VBR1.![主（上云）](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4368534571/p991576.png)
        
3.  Simulate a VBR1 link failure. In this topic, the [failure drill](/help/en/express-connect/user-guide/failover-test) feature is used to simulate the disconnection of the active link VBR1 to test whether traffic is switched to the standby link.
    
4.  Run the `traceroute` command again to test whether traffic is switched to the VBR2 link.
    
    -   **VPC-to-IDC direction**
        
        Log on to the ECS instance in the VPC and run the `traceroute <IP address of the client in the IDC>` command. The following response indicates that traffic from the VPC to the IDC has been switched to VBR2.
        
        ![演练中（下云）](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4368534571/p991396.png)
        
    -   **IDC-to-VPC direction**
        
        Log on to the client in the IDC and run the `traceroute <IP address of the ECS instance in the VPC>` command. The following response indicates that traffic from the IDC to the VPC has been switched to VBR2.
        
        ![演练中（上云）](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4368534571/p991397.png)
        

## **References**

To implement load-balanced connections to the cloud, see [Connect a data center to the cloud over load-balanced Express Connect circuits using an ECR](/help/en/express-connect/use-cases/connect-a-data-center-to-alibaba-cloud-over-load-balanced-leased-lines-by-using-an-ecr).
