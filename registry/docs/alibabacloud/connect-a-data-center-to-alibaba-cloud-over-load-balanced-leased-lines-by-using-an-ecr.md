This topic describes how to use two Express Connect circuits and an Express Connect Router (ECR) to connect a data center to Alibaba Cloud over equal-cost multi-path routing (ECMP) and enable communication with a virtual private cloud (VPC).

## Scenario

An enterprise has a data center in the China (Beijing) region and has created a transit router (TR) and a VPC in the same region. The enterprise wants to use an ECR to enable servers in the data center to access cloud services over ECMP. Under normal circumstances, both links forward traffic. If Bidirectional Forwarding Detection (BFD) detects that a link is unreachable, traffic is switched to the other link to ensure business continuity.

The procedure is as follows:

1.  Deploy Express Connect circuits: Deploy two Express Connect circuits to connect to different customer-premises equipment (CPE) devices and VBRs in the data center. The two circuits form ECMP connections.
    
2.  Create virtual border routers (VBRs): Create two VBRs, VBR1 and VBR2, in the China (Beijing) region to serve as private network bridges between the data center and the VPC.
    
3.  Create an Express Connect Router (ECR): Create an ECR to serve as a forwarding component between the data center and the VPC.
    
4.  Attach the VBRs and TR to the ECR: Attach VBR1, VBR2, and the TR to the ECR to establish a logical association between the Express Connect circuits and cloud resources.
    
5.  Configure BGP and enable BFD: Configure Border Gateway Protocol (BGP) dynamic routing between the data center and the VBRs and enable BFD to implement rapid route convergence and automatic switchover in the event of a failure.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2424833671/CAEQTxiBgICx5r7H1BkiIGFjN2M3ZGM3YWE0ZDQ2NGNiYjgxMGM2MGYwNjdkZDhi4122902_20231220095134.007.svg)

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

Configure BGP peers for the on-premises gateway device and the VBRs. When the status of both BGP peers is **Established**, the BGP session is successfully established and can exchange routing information.

After the peer relationship is established, the data center automatically learns cloud routes through BGP. Advertise the CIDR block of the data center on the on-premises gateway device so that the VBRs can automatically learn the routes to the data center. After the preceding configurations are complete, servers in the data center can access cloud resources.

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

In this topic, the two VBRs are in the same region and both use BGP routing. Therefore, the two connections are ECMP by default.

When VBRs in the same region use the same routing method, the routes to the data center that are received by the two VBR instances automatically form ECMP links. This requires that the route attributes advertised from the data center to the two VBRs are consistent. If the route attributes advertised from your data center to the two VBRs are inconsistent, ensure that they are consistent. For example, if the AS-Paths of the routes advertised from CPE1 and CPE2 to the VBRs are inconsistent, you can use the following method to ensure that the AS-Paths are consistent.

**Note**

The configuration commands vary by vendor and device. This topic lists only the key parameters. For specific commands, consult your device vendor.

**Configuration**

**CPE1**

**CPE2**

Vlan Tag

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

A

##### **BGP routes advertised from the VPC to the data center**

CPE1 and CPE2 learn the routes to the VPC through BGP at the same time. Ensure that the route priorities are consistent so that the data center can access cloud resources through both CPE1 and CPE2 over ECMP.

### **Step 5: Test and verify**

1.  Test the connectivity.
    
    Log on to an ECS instance in the VPC and run the `ping <IP address of the client in the data center>` command to access the client in the data center.
    
    If you receive a response message as shown in the following figure, the network connection between the data center and the VPC is established.![测试连通性](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4368534571/p990779.png)
    
2.  Run the `traceroute` command to check whether the two Express Connect circuits provide ECMP connections. If `traceroute` is not installed, run `sudo yum install traceroute` to install it on a CentOS system.
    
    -   **VPC to data center**
        
        Log on to an ECS instance in the VPC and run the `traceroute <IP address of the client in the data center>` command. If you receive a response message as shown in the following figure, traffic from the VPC to the data center forms equal-cost path.![正常下云](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2598534571/p991281.png)
        
    -   **Data center to VPC**
        
        Log on to a client in the data center and run the `traceroute <IP address of the ECS instance in the VPC>` command. If you receive a response message as shown in the following figure, traffic from the data center to the VPC forms equal-cost path.![正常上云](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2598534571/p991283.png)
        
3.  Simulate a failure on VBR1. In this topic, the [failure drill](/help/en/express-connect/user-guide/failover-test) feature is used to simulate the disconnection of the VBR1 link to test whether traffic is switched to the other link.
    
4.  Run the `traceroute` command again to test whether traffic is switched to the VBR2 link.
    
    -   **VPC to data center**
        
        Log on to an ECS instance in the VPC and run the `traceroute <IP address of the client in the data center>` command. If you receive a response message as shown in the following figure, traffic from the VPC to the data center has been switched to VBR2.
        
        ![故障下云](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2598534571/p991285.png)
        
    -   **Data center to VPC**
        
        Log on to a client in the data center and run the `traceroute <IP address of the ECS instance in the VPC>` command. If you receive a response message as shown in the following figure, traffic from the data center to the VPC has been switched to VBR2.
        
        ![故障上云](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2598534571/p991286.png)
        

## **Reference**

To implement active/standby connections to the cloud, see [Connect a data center to the cloud over active/standby circuits using ECR](/help/en/express-connect/use-cases/the-local-idc-can-use-ecr-to-access-the-cloud).
