You can use Cloud Enterprise Network (CEN) to establish a private network connection between **VPCs in different regions**.

## Prerequisites

-   **Non-overlapping CIDR blocks**: Ensure that the CIDR blocks of the VPCs do not overlap.
    
-   **Zone availability**: To ensure zone-level disaster recovery, create vSwitches in at least two different zones in regions where [Enterprise Edition transit routers support multiple zones](/help/en/cen/product-overview/regions-and-zones-that-support-transit-router#8b5be2587fdck).
    
-   **Security group rules**: Ensure that the security groups associated with your ECS instances allow the necessary traffic. For example, to ping test the connectivity, you must add an inbound rule allowing ICMP traffic.
    

## **Sample**

Suppose you have two VPCs in separate regions. You can create a CEN, attach the two VPCs to the transit routers in their respective regions, and establish an inter-region connection between the transit routers to let the VPCs communicate.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1987409671/CAEQUxiBgMCrwcbz3BkiIDgyOTQ4NmJkOGUwMjQyM2FhNDU3NTQ1MmIxNzEwMDY34729461_20241028200639.331.svg)

**VPC1**

**VPC2**

-   Region: Singapore
    
-   IPv4 CIDR Block: 10.0.0.0/16
    
-   vSwitch 1 (Zone A) : 10.0.0.0/24
    
-   vSwitch 2 (Zone B) : 10.0.1.0/24
    
-   ECS1 IP address: 10.0.0.1
    

-   Region: UK (London)
    
-   IPv4 CIDR Block: 172.16.0.0/16
    
-   vSwitch 1 (Zone A) : 172.16.0.0/24
    
-   vSwitch 2 (Zone B) : 172.16.1.0/24
    
-   ECS2 IP address: 172.16.0.1
    

## **Procedure**

### **Step 1: Create a CEN instance**

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/cen/list).
    
2.  On the **Instances** page, click **Create CEN Instance**.
    
3.  In the **Create CEN Instance** dialog box, enter a **Name** (for example, `cen-inter-region`) and then click **OK**.
    
4.  When prompted **The CEN instance is created**, click **View Details** to enter the details page.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5516025371/p875690.png)

### **Step 2: Create transit routers**

1.  On the instance details page, click **Create Transit Router**.
    
2.  In the **Create Transit Router** dialog box, set **Region** to **Singapore**, keep the other parameters as default, and then click **OK**.
    
3.  Repeat the process to create another transit router in **UK (London)**.
    
4.  Verify that both transit routers appear in the list on the instance details page.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1539038671/p1043313.png)

### **Step 3: Create an inter-region connection**

1.  In the **Singapore** transit router's **Actions** column, click **Create Connection** > **Inter-region**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1539038671/p1043315.png)

2.  On the **Create Inter-Region Connection** page:
    
    -   **Attachment Name**: `inter-region-attachment`.
        
    -   **Peer Region**: Select **UK (London)**.
        
    -   **Bandwidth Allocation Mode**: Select ****Pay-By-Data-Transfer****. The fees are settled by [Cloud Data Transfer (CDT)](/help/en/cdt/product-overview/what-is-cdt).
        
    
    Keep the other parameters as default, and click **OK**.
    
3.  When the status changes to **Ready**, click **Return to the List**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1539038671/p1043336.png)

### **Step 4: Attach VPCs to transit routers**

1.  In the **Singapore** transit router's **Actions** column, click **Create Connection** > **Intra-Region**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1539038671/p1043407.png)

2.  On the **Create Intra-Region Connection** page:
    
    -   **Instance Type**: Select **Virtual Private Cloud (VPC)**.
        
    -   **Region**: Select **Singapore**.
        
    -   **Attachment Name**: `attach1`.
        
    -   **Network Instance**: Select `VPC1`.To achieve cross-zone disaster recovery, the system automatically selects the two zones where vSwitches have been deployed. If your VPC has only one vSwitch, you need to create at least one more vSwitch in a different zone.
        
    
    Keep the other parameters as default and click **OK**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1539038671/p1043434.png)

3.  When the status changes to **Ready**, it indicates that VPC1 has been attached to the transit router.
    
4.  Click **Create More Connections** and repeat the steps for **UK (London)** to attach `VPC2`.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1539038671/p1043463.png)

5.  When the status changes to **Ready**, click **Return to the List**.
    
6.  Click the **Instance ID/Name** of each transit router, and verify that both VPC connections (named `attach1` and `attach2`) are listed under the respective transit routers.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1539038671/p1043474.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1539038671/p1043476.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1539038671/p1043478.png)

### **Step 5: Verify connectivity**

Before proceeding, ensure that the security group rules of both ECS instances [permit ICMP protocol access](/help/en/ecs/user-guide/security-groups-for-different-use-cases#section-u10-5r6-4ve). 

Log on to ECS1 and run `ping 172.16.0.1` to access ECS2:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1539038671/p1043506.png)

## **Route description**

In this example, CEN automatically completes [associated forwarding](/help/en/cen/user-guide/associated-forwarding) and [route learning](/help/en/cen/user-guide/route-learning) to achieve VPC communication by creating VPC connections and selecting advanced features:

-   **VPC route table**: CEN automatically adds routes for `10.0.0.0/8`, `172.16.0.0/12`, and `192.168.0.0/16` to the system route tables of VPC1 and VPC2. Their next hops are the transit router attachments.
    
-   **Transit router route table**: Transit routers automatically learn routes from the attached VPCs and propagate them across the inter-region connection.
    

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

`inter-region-attachment`

Propagated Routes

172.16.1.0/24

`inter-region-attachment`

Propagated Routes

## TR (UK London)

**Destination CIDR Block**

**Next Hop**

**Route Type**

10.0.0.0/24

`inter-region-attachment`

Propagated Routes

10.0.1.0/24

`inter-region-attachment`

Propagated Routes

172.16.0.0/24

`attach2`

Propagated Routes

172.16.1.0/24

`attach2`

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

**Important**

If the CIDR blocks that you plan do not belong to the three private CIDR blocks, `10.0.0.0/8`, `172.16.0.0/12`, or `192.168.0.0/16`, you need to manually add routes for other VPCs in each VPC's route table.

For example, if the CIDR block of VPC1 is `11.0.X.X/8` and that of VPC2 is `22.0.X.X/8`, you must add the following custom route entries in the route tables of VPC1 and VPC2:

**Route Table**

**Destination CIDR Block**

**Next Hop**

**Route Type**

VPC1

22.0.X.X/8

attach1

Custom

VPC2

11.0.X.X/8

attach2

Custom

## **Related steps**

-   **Connect VPCs across multiple regions**: To connect VPCs in more than two regions, create a transit router in each region, establish inter-region connections, and attach the VPCs. Ensure that the CIDR blocks of the VPCs do not overlap.
    
-   **Quality of Service (QoS)**: Use [traffic scheduling](/help/en/cen/user-guide/use-traffic-scheduling-to-limit-bandwidth-for-inter-region-connections) to manage inter-region traffic by classifying traffic and allocating bandwidth resources. This enhances network quality and optimizes resource usage.
    
-   **Traffic analysis:** Transit routers capture traffic information of inter-region connections and generate flow logs. You can analyze inter-region traffic by querying [flow logs](/help/en/cen/user-guide/configure-a-flow-log).
    

## **FAQ**

-   #### **How are inter-region connections billed?**
    
    You can choose between ****Pay-By-Data-Transfer**** and **Allocate from Bandwidth Plan**. For details, see [Billing](/help/en/cen/product-overview/billing-rules).
    
-   #### **What is the maximum bandwidth for an inter-region connection?**
    
    -   **Pay-By-Data-Transfer**: the maximum bandwidth is limited by [quota](/help/en/cen/user-guide/cen-quotas/#table-i1x-dv2-lux) constraints.
        
    -   **Allocate from Bandwidth Plan**: the maximum bandwidth is the value specified in your [bandwidth plan](/help/en/cen/user-guide/work-with-a-bandwidth-plan#title-4te-4zp-ho5).
