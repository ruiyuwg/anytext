Elastic network interface (ENIs) are virtual network interfaces that provide network connectivity and IP addresses for Elastic Compute Service (ECS) instances that are deployed in virtual private clouds (VPCs). You can bind one or more ENIs to each ECS instance. An ENI supports multiple IP addresses. You can migrate an ENI between different ECS instances that are deployed in the same VPC and zone as the ENI. This improves the flexibility and scalability of network configurations and ensures that the network configurations can meet the network requirements in various business scenarios. For example, you can use ENIs to create multi-IP address, multi-NIC, or high-availability networks.

## **ENI types**

Alibaba Cloud provides the following types of ENIs:

-   **Primary ENIs**
    
    Each ECS instance in a VPC has a default ENI. The default ENI is called the primary ENI. Each ECS instance has only one primary ENI.
    
-   **Secondary ENIs**
    
    -   If an ECS instance has only the primary ENI, the instance sends and receives all network traffic by using the primary ENI, which is suitable for scenarios in which the business traffic is simple. If your business requires finer-grained network classification and isolation to prevent single points of failure, you can create and bind secondary ENIs that reside in the same VPC and zone as an ECS instance to the instance.
        
    -   Secondary ENIs can be separately created and bound to ECS instances. Compared with primary ENIs, secondary ENIs can be independently created and dynamically bound to and unbound from ECS instances.
        
        For more information, see [Create and use an ENI](/help/en/ecs/user-guide/create-and-use-an-eni).
        

## **ENI features**

-   **Support for multiple IP addresses.** A single ENI can be associated with multiple private IP addresses. This allows a single ECS instance to provide services or access external resources by using different IP addresses, which increases network flexibility. For more information, see [Secondary private IP addresses](/help/en/ecs/user-guide/assign-secondary-private-ip-addresses).
    
-   **Release with Instance**: You can enable or disable the Release with Instance feature when or after an ENI is created. The status of the feature determines whether the ENI is retained or released when the associated ECS instance is released. By default, the Release with Instance feature is enabled for an ENI, which indicates that the ENI is **released** when the associated ECS instance is released. This simplifies O&M management and prevents resource residuals.
    
    If the Release with Instance feature is **disabled** for an ENI, the ENI and its configurations, such as IP addresses and associated security groups, are retained when the associated ECS instance is released. You can quickly bind the ENI to a different ECS instance that resides in the same VPC and zone as the ENI. You can also reuse the ENI when you create a new ECS instance. This improves O&M flexibility and business continuity.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7013439371/p901558.png)
    
-   **Hot swapping**. The hot swapping feature of secondary ENIs provides great flexibility and convenience. The feature allows you to dynamically bind or unbind **secondary ENIs** to or from an ECS instance in the Running state, without the need to restart the instance or interrupt the services running on the instance. For example, you can unbind a secondary ENI from an ECS instance and attach the ENI to a different ECS instance that resides in the same VPC and zone as the ENI, without the need to restart the instances.
    
    **Note**
    
    You cannot unbind the primary ENI from an ECS instance. Primary ENIs do not support the hot swapping feature.
    
    -   The following table describes the instance types that do not support the hot swapping feature of secondary ENIs.
        
        **ECS instance types that do not support the hot swapping feature of secondary ENIs**
        
        **Instance family**
        
        **Instance type**
        
        s6, shared standard instance family
        
        ecs.s6-c1m1.small, ecs.s6-c1m2.large, ecs.s6-c1m2.small, ecs.s6-c1m4.large, and ecs.s6-c1m4.small
        
        e, economy instance family
        
        ecs.e-c1m1.large, ecs.e-c1m2.large, ecs.e-c1m4.large, ecs.e-c4m1.large, and ecs.e-c2m1.large
        
        t6, burstable instance family
        
        ecs.t6-c1m1.large, ecs.t6-c1m2.large, ecs.t6-c1m4.large, ecs.t6-c2m1.large, and ecs.t6-c4m1.large
        
        t5, burstable instance family
        
        ecs.t5-c1m1.large, ecs.t5-c1m2.large, ecs.t5-c1m4.large, ecs.t5-lc1m1.small, ecs.t5-lc1m2.large, ecs.t5-lc1m2.small, ecs.t5-lc1m4.large, and ecs.t5-lc2m1.nano
        
        xn4, n4, mn4, and e4, previous-generation shared instance families
        
        -   ecs.xn4.small
            
        -   ecs.n4.small and ecs.n4.large
            
        -   ecs.mn4.small and ecs.mn4.large
            
        -   ecs.e4.small and ecs.e4.large
            
        
    -   For the instance types that do not support the hot swapping feature of secondary ENIs, the following limits apply:
        
        -   You cannot bind a secondary ENI to an ECS instance of an instance type in the preceding table when you create the instance. After you create the instance, you can bind secondary ENIs to the instance.
            
        -   When you bind a secondary ENI to or unbind a secondary ENI from an ECS instance of an instance type in the preceding table, make sure that the instance is in the **Stopped** state.
            

## **Limits**

-   You can use ENIs free of charge. However, the number of ENIs that you can create in an Alibaba Cloud account is limited. For more information, see the [ENIs](/help/en/ecs/user-guide/limitations#EniQuota) section of the "Limits and quotas on ECS" topic.
    
-   An ECS instance and the ENIs that are bound to the instance must reside in the same VPC and zone.
    
    -   The ENIs bound to an ECS instance can connect to different vSwitches in the same VPC and zone as the instance.
        
    -   If you bind two or more ENIs from the same subnet to an ECS instance, network issues may occur, such as asymmetric routing. You can assign one or more secondary private IP addresses to each primary or secondary ENI to optimize the usage of ECS instances that are deployed in VPCs and divert traffic during a failover. For more information, see [Secondary private IP addresses](/help/en/ecs/user-guide/assign-secondary-private-ip-addresses#concept-ff2-hbk-ggb).
        
-   The number of ENIs that you can bind to an ECS instance varies based on the instance type. For more information, see the **ENIs** columns in [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
-   Binding multiple ENIs to an ECS instance does not increase or multiply the network bandwidth of the instance. For more information, see [Network bandwidth](/help/en/ecs/user-guide/network-bandwidth/#section-uql-hs3-dum).
    

## **Important attributes of ENIs**

After you bind ENIs to an ECS instance, the instance can obtain resources such as private IP addresses and elastic IP addresses (EIPs). This way, the ECS instance can communicate with the Internet or other cloud resources. The following section describes a few important attributes of ENIs:

-   **VPC**: An ENI can be bound to only an ECS instance that resides in the same VPC as the ENI. You cannot change the VPC of an ENI after the ENI is created.
    
-   **vSwitch**: Each VPC has an independent IP address range. You can create multiple vSwitches in a VPC to divide the VPC into subnets. By default, subnets in the same VPC can communicate with each other. When you specify a vSwitch for an ENI, the ENI obtains one or more IP addresses from the CIDR block associated with the vSwitch. An ENI can be bound to only an ECS instance that resides in the same zone as the ENI. The instance and the ENI can connect to different vSwitches.
    
    **Note**
    
    If you want to bind an ENI to an ECS instance and the IP addresses of the ENI are not within the CIDR block of the VPC in which the instance resides, you must perform the following steps: **Add a secondary CIDR block to** the VPC, create a vSwitch in the zone in which the instance resides, associate the secondary CIDR block with the vSwitch, create an ENI that is associated with the vSwitch, and then bind the ENI to the instance. For more information, see [Secondary CIDR blocks](/help/en/vpc/user-guide/use-additional-network-segments-to-expand-vpc-address-space).
    
-   **MAC address**: Each ENI has a unique media access control (MAC) address as its unique identifier.
    
    You can view information about an ENI, such as the VPC and MAC address of the ENI, in the ECS console or by calling an API operation. For more information, see [Modify the attributes of an ENI](/help/en/ecs/user-guide/modify-an-eni#f3f5968bf33jz).
    
-   **Private IP addresses**: You can assign one or more private IP addresses to an ENI for communication over the internal network. Each ENI is automatically assigned an IPv4 address as the primary private IPv4 address from the CIDR block that is associated with the vSwitch connected to the ENI.
    
    -   If you have requirements for multiple private IP addresses in business scenarios, such as the multi-application, failover, and Server Load Balancer (SLB) scenarios, you can assign one or more secondary private IPv4 addresses to an ENI that is bound to an ECS instance. For more information, see the [Assign secondary private IP addresses to an ENI](/help/en/ecs/user-guide/assign-secondary-private-ip-addresses#78668d802aa8m) section of the "Secondary private IP addresses" topic.
        
    -   If you want an ECS instance to communicate with the Internet or private networks over IPv6, you can associate IPv6 CIDR blocks with the VPC in which the instance resides and with the vSwitch that is connected to an ENI bound to the instance, and then assign one or more IPv6 addresses to the ENI. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
-   **Static public IP address or EIPs**: You can assign a static public IP address to or associate EIPs with an ECS instance to allow the instance to access the Internet. An ENI does not have Internet communication capabilities. To enable Internet communication for an ECS instance, you can use one of the following methods:
    
    -   Assign a static public IP address to the primary ENI of the ECS instance. For more information, see [Static public IP address](/help/en/ecs/user-guide/public-ip-address).
        
    -   Associate EIPs with ENIs bound to the ECS instance. You can associate an EIP with or disassociate an EIP from an ENI based on your business requirements. For the ECS instance to provide multiple public IP addresses for external access, you can associate EIPs with multiple private IP addresses that are assigned to the ENIs bound to the instance. For more information, see [Associate an EIP with a secondary ENI](/help/en/eip/associate-an-eip-with-a-secondary-eni-1#section-u4g-iu4-24t).
        
-   **Security groups**: To provide network layer security control, you can associate ENIs with security groups.
    
    -   When you associate an ECS instance with a security group, you associate the primary ENI of the instance with the security group. For more information, see [Associate security groups with an instance (primary ENI)](/help/en/ecs/user-guide/manage-ecs-instances-in-security-groups).
        
    -   In the same VPC, the secondary ENIs bound to an ECS instance can be associated with different security groups from the security group of the primary ENI. For more information, see [Associate a secondary ENI with security groups](/help/en/ecs/user-guide/manage-enis-in-security-groups).
        
-   **Route table**: When data is transmitted within a VPC and between the VPC and other networks, the route table is used to guide the routing of data packets. Correct routing configurations ensure that ENIs can correctly send and receive data. For more information, see the [(Conditionally required) Step 4: Configure routes](/help/en/ecs/user-guide/configure-a-secondary-eni#78989a302b1a4) section of the "Configure a secondary ENI" topic.
    
    **Note**
    
    In a multi-ENI environment, the priority of the default route of a secondary ENI is lower than the priority of the default route of the primary ENI. This ensures that data is preferentially sent from the primary ENI. If you want data packets associated with a private IP address of a secondary ENI to be sent from the secondary ENI, you can configure policy-based routing for the secondary ENI to ensure that data received by the ENI is also sent from the ENI.
    

## **Network enhancements of ENIs**

### **eRDMA capabilities**

You can enable Elastic RDMA Interface (ERI) for an ENI. An ENI for which ERI is enabled is an ERI that supports elastic Remote Direct Memory Access (eRDMA) capabilities. You can bind an ERI to and install the eRDMA driver on an eRDMA-capable ECS instance to provide low-latency and high-throughput network communication for the instance. For more information, see [ERIs](/help/en/ecs/user-guide/elastic-rdma-network-interface-card-eri).

### NIC multi-queue

The network interface controller (NIC) multi-queue feature allows you to configure multiple transmit (Tx) and receive (Rx) queues on a NIC. Each queue can be processed by a different CPU core. The NIC multi-queue feature is designed to improve network I/O throughput and reduce latency by allowing multiple CPU cores to simultaneously process network packets in different queues on a NIC.

For more information, see [NIC multi-queue](/help/en/ecs/user-guide/nic-multi-queue).

### Network card indexes

Specific Elastic Compute Service (ECS) instance types support configuring network card indexes to provide higher network performance. When you attach elastic network interfaces (ENIs) to ECS instances of an instance type that supports configuring network card indexes, you can specify network card indexes to attach the ENIs to different underlying communication channels. This way, you can maximize network bandwidth utilization and improve instance bandwidth capabilities.

For more information, see [Network card indexes](/help/en/ecs/user-guide/network-card-mapping).

## **View the ENIs bound to an ECS instance**

You can view information about the ENIs bound to an ECS instance in the ECS console, by calling an API operation, or within the instance.

#### **View the ENIs bound to an ECS instance in the ECS console**

1.  Go to [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group to which the resource that you want to manage belongs.![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png)
    
3.  Click the ID of the ECS instance whose ENIs you want to view to go to the instance details page.
    
4.  Click the **ENIs** tab to view the ENIs bound to the ECS instance.
    
    You can view the IDs, names, types, status, and IP addresses of the ENIs bound to the ECS instance in the ENI list.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7013439371/p879773.png)
    

#### **View the ENIs bound to an ECS instance by calling an API operation**

Call the [DescribeInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstances) operation to query information about the ECS instance specified by using the **InstanceIds** parameter. The **NetworkInterfaces** parameter in the response contains information about the ENIs bound to the instance, including the type (**Type**), ID (**NetworkInterfaceId**), and primary private IP address (**PrimaryIpAddress**) of each ENI.

#### **View the ENIs bound to an ECS instance after you connect to the instance**

##### **Linux instance**

In this example, an ECS instance that runs Alibaba Cloud Linux 3.2 is used.

1.  Connect to the Linux ECS instance.
    
    For more information, see [Use Workbench to connect to a Linux instance over SSH](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Run the following command to view information about the ENIs:
    
    ```
    ip a
    ```
    
    The following figure shows the sample command output.
    
    -   In this example, two ENIs are bound to the Linux ECS instance. The ENI named eth0 serves as the primary ENI and the ENI named eth1 serves as a secondary ENI.
        
    -   The ENIs are in the UP state, which indicates that the ENIs are in effect in the operating system of the instance.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7013439371/p879776.png)
        
        **Important**
        
        If an ENI is in the **DOWN** state as shown in the following figure, the ENI is not properly loaded and cannot be used as expected. In this case, perform [Step 2: Configure the Linux operating system to recognize an ENI](/help/en/ecs/user-guide/create-and-use-an-eni#b23ba7dca4wug) to ensure that the ENI is in the UP state.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7013439371/p891829.png)
        
    -   Primary private IP address: After an ENI enters the UP state, you can view the primary private IP address of the ENI. For more information, see [Primary private IP addresses](/help/en/ecs/user-guide/modify-a-private-ip-address).
        
        If you assign **secondary private IP addresses** to an ENI bound to an ECS instance but the operating system of the instance cannot recognize the secondary private IP addresses, you must resolve the issue. For information about how to resolve the issue, see the [Step 3: Configure the operating system of the instance to recognize the secondary private IP addresses](/help/en/ecs/user-guide/assign-secondary-private-ip-addresses#631d72ee0epg2) section of the "Secondary private IP addresses" topic.
        
3.  Run the following command to view the route information of the ENIs:
    
    ```
    route -n
    ```
    
    ![centos8-route](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7422670461/p360015.png)
    
    The preceding command output indicates that two routes are configured for the eth1 secondary ENI.
    
    -   **Route destined for 192.168.xx.xx**: is a route within a specific subnet. This route ensures that the Linux ECS instance can correctly identify and directly communicate with other hosts within the subnet without the need to forward traffic that matches the route to additional routers.
        
    -   **Route destined for 0.0.0.0**: is a default route, which is used to process packets whose destination addresses do not match specific routes, such as routes within a specific subnet or host routes. The packets are forwarded to the next hop address specified by `Gateway` over the network interface corresponding to `Iface`.
        
        **Important**
        
        -   If multiple default routes exist, the route with the highest priority is used. The lower the metric value, the higher the priority.
            
        -   If you want to route data traffic in and out by using the same ENIs based on the source-in/source-out principle, you can [configure policy-based routes for ENIs](/help/en/ecs/user-guide/configure-nic-routing#a316686de9mvn).
            
        
        In specific early operating system versions, such as Ubuntu 16, default routes may not be automatically configured for secondary ENIs. If default routes are not automatically configured for the secondary ENIs on an ECS instance that runs one of the early operating system versions, the command output shown in the following figure is returned after you run the route -n command to view the route information of the ENIs. The secondary ENIs may not work as expected. We recommend that you upgrade to a later operating system version or configure default routes for the ENIs. For information about how to configure default routes for ENIs, see the [Configure default routes for ENIs](/help/en/ecs/user-guide/configure-nic-routing#01212cdff55mc) section of the "Configure routes for ENIs" topic.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9211559371/p891830.png)
        

##### **Windows instance**

In this example, an ECS instance that runs Windows Server 2022 is used.

1.  Connect to the Windows ECS instance.
    
    For more information, see [Use Workbench to connect to a Windows instance over RDP](/help/en/ecs/user-guide/connect-to-a-windows-instance-through-workbench#task-2370976).
    
2.  Open Network and Sharing Center.
    
3.  Click **Change adapter settings**.
    
    In this example, one primary ENI and one secondary ENI are bound to the Windows instance. The following figure shows that the ENIs take effect in the operating system of the instance. No additional configurations are required.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7013439371/p879743.png)
    
    The following figure shows that the operating system of the Windows ECS instance cannot recognize the secondary ENI due to specific reasons. For information about how to troubleshoot the issue, see [What do I do if the ENI configurations of a Windows instance become invalid?](/help/en/ecs/user-guide/invalid-eni-configurations-for-a-windows-instance)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9211559371/p879793.png)
    
4.  View the status and details of the ENIs.
    
    1.  Double-click the name of an ENI to view the status of the ENI.
        
        In this example, the primary ENI named **Ethernet** is used.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7013439371/p879748.png)
        
    2.  Click **Details** to view the properties of the ENI.
        
        In the dialog box that appears, you can view the primary private IPv4 address, subnet mask, and default gateway of the ENI.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7013439371/p879751.png)
        
5.  Open **Command Prompt**.
    
    Press Win+R. In the **Run** dialog box, enter **cmd** and click **OK**.
    
6.  Run the following command to view the route information of the ENIs:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9211559371/p901224.png)
    

## References

-   You can use the [Terway Container Network Interface (CNI) plug-in](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#task-1797447) to manage the IP addresses and communication of pods in Kubernetes clusters. Terway can define access policies between containers based on standard Kubernetes network policies. You can use one of the following modes to enable network communication between Kubernetes clusters: the inclusive ENI mode based on the secondary IP addresses of ENIs and the VPC mode based on ENIs. For more information, see [Work with Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#task-1797447).
    
-   You can use ENIs in conjunction with SLB to distribute and manage traffic. For more information, see [Add backend servers by specifying ENIs](/help/en/slb/classic-load-balancer/user-guide/add-backend-servers-by-specifying-enis#task-dvk-hbv-4fb).
    
-   Specific Alibaba Cloud services, such as Container Service for Kubernetes (ACK) and NAT Gateway, depend on ENIs to work. You can grant Alibaba Cloud services the permissions to manage the lifecycles of the ENIs that are created by the services. This prevents accidental operations on the ENIs and ensures service availability. For more information, see [Managed ENIs](/help/en/ecs/user-guide/managed-enis).
    
-   The multicast feature supported by Enterprise Edition transit routers is a cloud-native feature developed by Alibaba Cloud. This feature helps you build multicast networks without additional physical devices or third-party software licenses. You can use ENIs attached to ECS instances only as multicast sources. The system uses the primary private IP address of an ENI to send multicast traffic to a multicast group. For more information, see [Manage multicast](/help/en/cen/user-guide/multicast-overview/).
