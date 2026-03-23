Use Cloud Enterprise Network (CEN) to connect virtual private clouds (VPCs) that belong to different Alibaba Cloud accounts.

## **Prerequisites**

-   **Non-overlapping CIDR blocks**: Ensure that the CIDR blocks of the VPCs do not overlap.
    
-   **Zone availability**: To ensure zone-level disaster recovery, create vSwitches in at least two different zones in regions where [Enterprise Edition transit routers support multiple zones](/help/en/cen/product-overview/regions-and-zones-that-support-transit-router#8b5be2587fdck).
    
-   **Security group rules**: Ensure that the security groups associated with your ECS instances allow the necessary traffic. For example, to ping test the connectivity, you must add an inbound rule allowing ICMP traffic.
    

## **Sample**

Suppose you have two Alibaba Cloud accounts:

-   Account A: Owns two VPCs (`VPC1` and `VPC2`) and one CEN instance (`CEN1`).
    
-   Account B: Owns one VPC (`VPC3`).
    

**Initial state:** `VPC1` and `VPC2` are already [connected through CEN1](/help/en/cen/getting-started/connect-vpcs-in-same-region-with-transit-router). VPC3 is isolated in Account B.

**Goal:** Add `VPC3` to `CEN1` so that resources in all three VPCs can communicate.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5850910771/CAEQUxiBgMCD1KiR3xkiIDNhNGQwMzM0ZDcwYTQ5ZmI4Mjc2Y2M2ODJiMjk4ZmZk4729461_20241028200639.331.svg)

**Parameter**

**VPC1**

**VPC2**

**VPC3**

Account

Account A

Account A

Account B

Region

Singapore

Singapore

Singapore

IPv4 CIDR block

10.0.0.0/16

172.16.0.0/16

192.168.0.0/16

vSwitch 1 (Zone A)

10.0.0.0/24

172.16.0.0/24

192.168.0.0/24

vSwitch 2 (Zone B)

10.0.1.0/24

172.16.1.0/24

192.168.1.0/24

ECS IP address

ECS1: 10.0.0.1

ECS2: 172.16.0.1

ECS3: 192.168.0.1

## **Procedure**

### **Step 1: Account B grants authorization to Account A**

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc/) with Account B.
    
2.  Click the instance ID of `VPC3` to open its details page.
    
3.  Click the **Cross-account Authorization** tab, and then click **Cross-account Authorization**.
    
4.  In the **Attach to CEN** dialog box:
    
    -   **Peer Account UID** : Enter the account ID of Account A.
        
        **How do I find my Alibaba Cloud account ID?**
        
        Hover over your profile picture in the upper-right corner of the console:
        
        -   Alibaba Cloud account:
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427558671/p1045767.png)
            
        -   RAM user:
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427558671/p1045770.png)
            
        
    -   **Peer CEN Instance ID**: Enter the instance ID of `CEN1`.
        
    -   **Payer**: Select who pays the [connection fee and data transfer fee](/help/en/cen/product-overview/billing-rules) for connecting VPC3 to the TR.
        
        -   **CEN Instance Owner**: Account A pays.
            
        -   **VPC Users**: Account B pays.
            
            > [Changing the payer](/help/en/cen/user-guide/grant-permissions-on-a-network-instance-that-belongs-to-another-account#section-5b0-9el-vf4) later may affect your services. Exercise caution.
            
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427558671/p1045761.png)

### **Step 2: Account A adds** `**VPC3**` **to** `**CEN1**`

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/cen/list) with Account A.
    
2.  Click the instance ID of `CEN1` to open its details page.
    
3.  In the **Singapore** transit router's **Actions** column, click **Create Connection** > **Intra-region**.
    
4.  On the **Connection with Peer Network Instance** page:
    
    -   **Instance Type**: Select **Virtual Private Cloud (VPC)**.
        
    -   **Region**: Select **Singapore**.
        
    -   **Resource Owner ID**: Select **Different Account** and enter the account ID of Account B.
        
    -   **Attachment Name**: Enter `attach3`.
        
    -   **Network Instance**: Select `VPC3`.
        
        > If `VPC3` is not listed, verify the authorization in Account B. Ensure the **Peer Account UID**  matches Account A and the **Peer CEN Instance ID** matches `CEN1` exactly.
        
    -   **vSwitch**: To achieve zone-level disaster recovery, the system automatically selects the two zones where vSwitches have been deployed. If your VPC has only one vSwitch, create at least one more vSwitch in a different zone.
        
    -   **Advanced Settings**: Keep the defaults. See [Route description](#title-zu5-y3w-utf) for details.
        

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427558671/p1045836.png)

### **Step 3: Verify connectivity**

Before proceeding, ensure that the security group rules of both ECS instances [permit ICMP protocol access](/help/en/ecs/user-guide/security-groups-for-different-use-cases#section-u10-5r6-4ve). 

Log on to ECS3 and run `ping 10.0.0.1` to access ECS1:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427558671/p1045848.png)

## Route description

When you create the VPC connection, CEN automatically configures routes based on these advanced features that are selected by default:

-   **Associate with Default Route Table of Transit Router**
    
    When enabled, the VPC connection is automatically associated with the default route table of the transit router. The transit router forwards traffic based on the default route table.
    
-   **Propagate System Routes to Default Route Table of Transit Router**
    
    After this feature is enabled, the system routes of the VPC are advertised to the default route table of the transit router. The VPC can then communicate with other network instances that are connected to the transit router.
    
-   **Automatically Create Route That Points to Transit Router and Add to All Route Tables of Current VPC**
    
    After this feature is enabled, the system automatically adds the following three routes to all route tables of the VPC: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. The next hops of the routes point to the VPC. The routes are used to forward IPv4 traffic from the VPC to the transit router. By default, transit routers do not advertise routes to VPCs.
    
    **Important**
    
    -   If the VPC instance requires IPv6 communication, after creating the VPC connection, you must enable the [route synchronization](/help/en/cen/user-guide/route-synchronization) feature for the VPC connection or [manually add IPv6 route entries](/help/en/vpc/user-guide/create-and-manage-route-table#37d92b0e1ca68) pointing to the VPC connection in the VPC. Only then can the IPv6 traffic enter the transit router.
        
    

After configuration, the route tables of the transit router and VPCs are as follows:

## TR (Singapore)

**Destination CIDR Block**

**Next Hop**

**Route Type**

10.0.0.0/24

`attach1`

Propagated Routes

10.0.1.0/24

`attach1`

Propagated Routes

172.16.0.0/24

`attach2`

Propagated Routes

172.16.1.0/24

`attach2`

Propagated Routes

192.168.0.0/24

`attach3`

Propagated Routes

192.168.1.0/24

`attach3`

Propagated Routes

## VPC1

**Destination CIDR Block**

**Next Hop**

**Route Type**

10.0.0.0/24

Local

System

10.0.1.0/24

Local

System

10.0.0.0/8

`attach1`

Custom

172.16.0.0/12

`attach1`

Custom

192.168.0.0/16

`attach1`

Custom

## VPC2

**Destination CIDR Block**

**Next Hop**

**Route Type**

172.16.0.0/24

Local

System

172.16.1.0/24

Local

System

10.0.0.0/8

`attach2`

Custom

172.16.0.0/12

`attach2`

Custom

192.168.0.0/16

`attach2`

Custom

## VPC3

**Destination CIDR Block**

**Next Hop**

**Route Type**

192.168.0.0/24

Local

System

192.168.1.0/24

Local

System

10.0.0.0/8

`attach3`

Custom

172.16.0.0/12

`attach3`

Custom

192.168.0.0/16

`attach3`

Custom

## **FAQ**

**Q: Can I connect VPCs in different regions and different accounts?**

**A:** Yes. Combine [cross-account authorization](#c4c65eda11pij) with [cross-region connections](/help/en/cen/getting-started/inter-region-vpc-interworking).

1.  Authorize the CEN instance to attach the VPCs in other accounts.
    
2.  Create a transit router in each region.
    
3.  Create an inter-region connection between the transit routers.
    
4.  Attach each VPC to its local transit router.
    

**Q: How can I isolate VPCs while allowing shared access?**

**A:** You can use **multiple route tables** on the Transit Router to control traffic flow. For example, to isolate VPC1 and VPC2 from each other while allowing both to access VPC3 (shared service):

1.  Create separate route tables on the Transit Router.
    
2.  Associate VPC1 and VPC2 with a route table that has no route to each other.
    
3.  Configure route propagation to allow traffic only between the spoke VPCs (VPC1 and VPC2) and the hub VPC3.
    

See [Allow isolated VPCs to access a shared service](/help/en/cen/use-cases/allow-isolated-vpcs-to-access-a-shared-vpc) for details.
