If your business requires network communication between Elastic Compute Service (ECS) and Elastic Desktop Service (EDS), you can use Cloud Enterprise Network (CEN) to achieve this purpose. This topic describes how to use CEN and Enterprise Edition transit routers to establish network communication between ECS and EDS that are activated in the same region.

## **Background**

ECS is a high-performance, stable, reliable, and scalable Infrastructure as a Service (IaaS)-level service provided by Alibaba Cloud. ECS eliminates your need to invest in hardware beforehand. You can create as many or as few instances as you need in response to changes in requirements or popularity of your workloads. For more information, see [What is ECS?](/help/en/ecs/user-guide/what-is-ecs)

CEN is a highly available network built on the global private network of Alibaba Cloud. CEN uses transit routers to establish inter-region connections between virtual private clouds (VPCs). This formulates flexible and stable enterprise-class networks in the cloud. For more information, see [What is CEN?](/help/en/cen/product-overview/what-is-cen/)

## **Limits**

-   You can attach CEN instances only to advanced office networks.
    
-   You can use Enterprise Edition transit routers only in the following regions and zones:
    
    Table 1: Regions and zones that support Enterprise Edition transit routers
    
    **Area**
    
    **Region**
    
    **Zone**
    
    Chinese Mainland
    
    China (Hangzhou)
    
    Zone B, Zone H, Zone I, Zone J, and Zone K
    
    China (Shanghai)
    
    Zone F, Zone G, Zone E, Zone B, Zone N, Zone M, and Zone L
    
    China (Nanjing - Local Region) Closing Down
    
    Zone A
    
    China (Fuzhou - Local Region) Closing Down
    
    Zone A
    
    China (Shenzhen)
    
    Zone D, Zone E, Zone F, Zone A (unavailable to new users), and Zone C
    
    China (Heyuan)
    
    Zone A and Zone B
    
    China (Guangzhou)
    
    Zone A and Zone B
    
    China (Qingdao)
    
    Zone B and Zone C
    
    China (Beijing)
    
    Zone C, Zone F, Zone H, Zone G, Zone J, Zone K, Zone I, and Zone L
    
    China (Zhangjiakou)
    
    Zone A, Zone B, and Zone C
    
    China (Hohhot)
    
    Zone A and Zone B
    
    China (Ulanqab)
    
    Zone A, Zone B, and Zone C
    
    China (Chengdu)
    
    Zone A and Zone B
    
    Asia Pacific
    
    Singapore
    
    Zone A, Zone B, and Zone C
    
    China (Hong Kong)
    
    Zone B, Zone C, and Zone D
    
    Malaysia (Kuala Lumpur)
    
    Zone A, Zone B and Zone C
    
    Indonesia (Jakarta)
    
    Zone A, Zone B, and Zone C
    
    Philippines (Manila)
    
    Zone A
    
    Japan (Tokyo)
    
    Zone A, Zone B, and Zone C
    
    South Korea (Seoul)
    
    Zone A, Zone B
    
    Thailand (Bangkok)
    
    Zone A, Zone B
    
    Europe
    
    Germany (Frankfurt)
    
    Zone A, Zone B, and Zone C
    
    UK (London)
    
    Zone A and Zone B
    
    North America
    
    US (Virginia)
    
    Zone A and Zone B
    
    US (Silicon Valley)
    
    Zone A and Zone B
    
    Mexico
    
    Zone A
    
    Middle East
    
    UAE (Dubai)
    
    Zone A and Zone B
    
    SAU (Riyadh - Partner Region)
    
    Zone A and Zone B
    

## **Sample scenario**

Company A created ECS instances in the China (Hangzhou) region and deployed its services on the ECS instances. At the same time, Company A created cloud computers in the China (Hangzhou) region. ECS instances and cloud computers of Company A cannot communicate over networks.

Now, Company A wants to establish network communication between ECS instances and cloud computers to allow mutual access. For the purpose of network communication, Company A can create CEN instances to connect the virtual private cloud (VPC) of the ECS instances, which is VPC1, and the VPC of the cloud computers, which is VPC2, to the Enterprise Edition transit routers in the China (Hangzhou) region.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9057145671/CAEQNRiBgIDex8vdqRkiIGIyYmMzNTk1MWQ4MzQzMDViYWQ1MWIwMzNjYTUzNWNj3963382_20230830144006.372.svg)

## **Prerequisites**

-   The IPv4 CIDR blocks of ECS instances and cloud computers are planned. Make sure that the planned IPv4 CIDR blocks do not conflict with the route CIDR blocks of the CEN instances. For more information, see [Plan a CIDR block](/help/en/wuying-workspace/user-guide/cidr-block-plan).
    
    The following table lists the planned CIDR blocks that are used in the sample scenario. These CIDR blocks are for reference only. Plan CIDR blocks based on your actual business requirements.
    
    **CIDR blocks**
    
    Network instance
    
    Region
    
    CIDR block
    
    VPC1
    
    China (Hangzhou)
    
    -   VPC CIDR block: 192.168.0.0/18
        
    -   vSwitch CIDR block: 192.168.0.0/24
        
    
    VPC2
    
    China (Hangzhou)
    
    IPv4 CIDR block: 10.0.0.0/14
    
    Transit router CIDR block
    
    China (Hangzhou)
    
    10.10.10.0/24
    
-   The security group rules that are applied to VPC1 and VPC2 are obtained. For more information, see [View security group rules](/help/en/ecs/user-guide/view-security-group-rules).
    

## **Preparations**

-   VPC1 is created based on the planned CIDR block. For more information, see [Create a VPC with an IPv4 CIDR block](/help/en/vpc/getting-started/create-vpc-with-ipv4).
    
-   ECS instances are created in the China (Hangzhou) region and VPC1 is configured for the ECS instances. For more information about how to create ECS instances, see [Get started with Windows instances](/help/en/ecs/getting-started/quick-start-for-windows-instances).
    
    **Note**
    
    In this example, ECS instances that run Windows are created. You can also create ECS instances that run other types of OSs based on your business requirements.
    
-   VPC2 is created based on the planned IPv4 CIDR block. For more information, see [Create and manage convenience office networks](/help/en/wuying-workspace/user-guide/create-or-delete-a-convenience-office-network).
    

## **Procedure**

In this section, the planned CIDR blocks of the preceding sample scenario are used to describe how to establish network communication between ECS instances and cloud computers.

**Note**

You can configure the related parameters based on your business requirements.

### **Step 1: Create a CEN instance**

Create a CEN instance. For more information, see [CEN instances](/help/en/cen/user-guide/cen-instances-1).

The following table describes the parameters of the CEN instance.

**Parameter**

**Example**

**Name**

test-cen

**Description**

Establishes network connection between ECS instances and cloud computers.

### **Step 2: Attach VPCs to CEN**

Attach VPC1 and VPC2 to a transit router in the China (Hangzhou) region. This allows VPC1 and VPC2 to automatically learn routes of each other to enable network communication.

Perform the following steps to attach the VPCs to CEN:

1.  Attach VPC1 to the CEN instance.
    
    1.  Create an Enterprise Edition transit router. For more information, see [Transit routers](/help/en/cen/user-guide/transit-routers#xref-khx-qku-ubg).
        
        The following table describes the parameters of the transit router.
        
        **Parameter**
        
        **Example**
        
        **Region**
        
        China (Hangzhou)
        
        **Edition**
        
        The edition of the transit router. The system displays the transit router edition that is supported in the selected region.
        
        **Note**
        
        You can create only one transit router in each region. If you have created a Basic Edition transit router in the region, you can update the transit router to the Enterprise Edition on the transit router details page. For information about how to view the edition of a transit router, see [View the edition of a transit router](/help/en/cen/user-guide/transit-routers#section-3qx-d5r-25n).
        
        **Activate Multicast**
        
        In this example, the default setting is used.
        
        **Transit Router CIDR**
        
        10.10.10.0/24
        
    2.  Use the Enterprise Edition transit router to create a VPC connection and attach VPC1 to the CEN instance. For more information, see [Procedure](/help/en/cen/user-guide/connect-vpcs#p-1vd-m3h-yfz).
        
        The following table describes the parameters of the VPC connection.
        
        **Parameter**
        
        **Description**
        
        **Network Type**
        
        In this example, **VPC** is selected.
        
        **Region**
        
        China (Hangzhou)
        
        **Transit Router**
        
        The ID of the transit router that is created in the previous step.
        
        **Network Instance**
        
        The VPC that you want to connect. In this example, VPC1 is selected.
        
        **vSwitch**
        
        The vSwitch that resides in VPC1 and is available in the specified zone.
        
        **Note**
        
        We recommend that you select a vSwitch in each zone to reduce network latency and improve network performance because data can be transmitted over a shorter distance.
        
        **Advanced Settings**
        
        In this example, the default settings are used.
        
2.  Attach VPC2 to the CEN instance
    
    1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Networks & Storage** > **Office Networks**.
        
    3.  In the upper-left corner of the top navigation bar, select a region.
        
    4.  On the **Office Networks** page, find the office network in which the cloud computers reside and click **Attach to CEN Instance** in the **Actions** column.
        
    5.  In the **Attach to CEN Instance** dialog box, follow the on-screen instructions to complete the attachment.
        
        The following table describes the parameters of the attachment operation.
        
        **Parameter**
        
        **Description**
        
        **CEN Instance ID**
        
        In this example, the CEN instance created in Step 1 is selected.
        
        **Peer Account UID**
        
        To attach the office network to a CEN instance in another account, enter the account UID.
        
        **Peer CEN Instance ID**
        
        Enter the ID of the target CEN instance.
        

**Note**

If you want to establish network connection between cloud computers and ECS instances across regions, you must attach the VPCs of the regions to the transit routers and then use bandwidth plans to enable cross-region communication of transit routers. This way, ECS instances and cloud computers can communicate with each other over networks between regions. For more information, see [Establish a cross-account VPC-to-VPC connection](/help/en/cen/getting-started/use-enterprise-edition-transit-routers-to-connect-vpcs-across-regions-and-accounts).

### **Step 3: Configure security group rules**

By default, cloud computers deny all inbound traffic. However, you can create security group rules to allow inbound traffic. In this case, if client requests comply with the security group rules, cloud computers can receive the client requests.

**Note**

-   If only a specific number of cloud computers that reside in an office network need to communicate with ECS instances, we recommend that you allow only the IP addresses of specific cloud computers that require the communication when you create security group rules. This ensures data security.
    
-   If all cloud computers that reside in an office network need to communicate with ECS instances, you can allow the CIDR block of the entire office network VPC when you create security group rules.
    

1.  In the ECS console, set the inbound rule of VPC2 to allow. For more information, see [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1) and [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule).
    
2.  In the EDS console, set the inbound rule of VPC1 to allow. For more information, see [Configure a security group](/help/en/wuying-workspace/wuying-workspace-pro-edition/configure-a-security-group).
    

### **Step 4: Test network connectivity**

After you establish the network connection between all the cloud computers that reside in VPC2 and all the ECS instances that reside in VPC1 and configure the required security group rules, you can test the network connectivity.

1.  Connect to a cloud computer.
    
2.  Run the `ping` command on the cloud computer to test the network connectivity.
    
    ```
    ping <IP address of the ECS instance with which the cloud computer communicates>
    ```
    
    If a message that is similar to the following figure appears, the network connectivity is normal and mutual resource access is achieved.
    
    ![通过CEN实现工作区之间网络互通-2-zh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2345644171/p634412.png)
    

## **References**

-   [Create cloud computers](/help/en/wuying-workspace/user-guide/create-a-cloud-computer-3)
    
-   [Assign cloud computers to users](/help/en/wuying-workspace/user-guide/assign-cloud-computers-to-end-users)
    
-   [Getting started](/help/en/wtc/getting-started/end-user-quick-start)
