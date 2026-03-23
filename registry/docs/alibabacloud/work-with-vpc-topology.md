Virtual private cloud (VPC) topologies are categorized into resource topologies and route topologies. A VPC topology displays the topology of routes and correlations between resource entities deployed in VPCs. In the VPC topology, you can view the basic information about related network instances, analyze these instances, and analyze reachability.

## **Resource topology**

A VPC resource topology displays the relationships between various resource entities deployed in VPCs. VPC resource topologies apply to multiple scenarios, such as private network access, communication over the Internet, communication between networks, and user network access. A VPC topology visualizes VPC networks based on scenarios.

1.  Log on to the [Network Intelligence Service (NIS) console](https://nis.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Network Topology** > **VPC Topology**.
    
3.  On the **VPC Topology** page, select a region and a VPC ID, and click **Generate Topology**. Then, view the resource topology of the VPC.
    
4.  In the **Configure** section, you can perform the following operations:
    
    -   Select **Color Inversion** to change the colors of the entity icons.
        
    -   Select **Show Instance ID** to display the instance IDs below the entity icons.
        
    -   Select **Region Separator Line** to display the resource topology by region.
        
    -   Select a zone in the region of the VPC to view the resource topology in the zone.
        
5.  Click a resource entity to perform operations such as [analyze the instance](#a3f128f019zfb) and [analyze reachability](#c07d847019suf) in the entity toolbar.
    

## **Route topology**

A VPC route topology displays the routes in the VPCs based on real-time routing configurations. These routes are used for Internet access and communication between networks.

VPC route topologies consist of vSwitches, route tables, and next hop entities. The following table lists the types of next hop entities that can be displayed in VPC route topologies.

**Next hop type**

**Related operations**

IPv4 gateway

[View basic information](#1bc4bda11by8q)

NAT gateway

[View basic information](#1bc4bda11by8q)

[Analyze the instance](#ac53c43019ja0)

[Analyze traffic](#806a8150191b9)

[View routes](#cb83810026ztt)

[View associated routes](#d398e6a026ad0)

VPC peering connection. The next hop connection indicates the VPC peering connection and the next hop entity indicates the peer VPC.

[View basic information](#1bc4bda11by8q)

Transit router

[View basic information](#1bc4bda11by8q)

[View the CEN topology](#cabc61d124zow)

[View routes](#cb83810026ztt)

[View associated routes](#d398e6a026ad0)

VPN gateway

[View basic information](#1bc4bda11by8q)

Elastic Compute Service (ECS) instance

[View basic information](#1bc4bda11by8q)

Elastic network interface (ENI)

[View basic information](#1bc4bda11by8q)

[View routes](#cb83810026ztt)

[View associated routes](#d398e6a026ad0)

Router interface (to virtual border router)

[View basic information](#1bc4bda11by8q)

[View routes](#cb83810026ztt)

Router interface (to VPC)

[View basic information](#1bc4bda11by8q)

[View routes](#cb83810026ztt)

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Network Topology** > **VPC Topology**.
    
3.  On the **VPC Topology** page, select a region and a VPC ID, and click **Generate Topology**.
    
4.  Click **Route Topology** to view the paths that connect each node.
    
    **Note**
    
    In a route topology, entities are aggregated according to the following rules:
    
    -   By default, vSwitches in a zone are aggregated if more than one vSwitch is associated with the same route table.
        
    -   By default, next hop entities of the same type are aggregated if the number of the next hop entities is greater than one. You can expand the entity collection and click a specific entity to view the routing situation.
        
    
    The displayed content varies based on the entity that you select.
    
    -   **vSwitch**: When you move the pointer over a vSwitch, you can view the route table associated with the vSwitch and all reachable paths to the next hops.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2234232961/p694330.png)
        
    -   **Route table**: When you move the pointer over a route table, you can view all vSwitches that are associated with the route table, and all routes that have taken effect.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1234232961/p694334.png)
        
    -   **Next hop entity**: When you move the pointer over a next hop entity, you can view all vSwitches whose traffic is routed to the next hop entity. After you click the next hop entity, you can view all CIDR blocks for which the traffic from the next hop entity is destined. If the next hop entity is in the collection mode, you can click the collection to view the entity list, and click the entity toolbar to perform operations such as [analyzing the instance](#a3f128f019zfb) and [analyzing traffic](#79ac6e501958b).![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1234232961/p694341.png)
        

## **Use the entity toolbar**

In a VPC topology, you can perform the following operations by using the toolbar of an entity: view basic information, analyze reachability, analyze the instance, analyze traffic, view the vSwitch subnet topology, view routes, view associated routes, and view the Cloud Enterprise Network (CEN) topology.

### **View basic information**

On the **VPC Topology** page, click an entity. In the entity toolbar, click View Basic Information. Then, you can view the name, ID, and region of the entity.

### **View routes**

The route focus feature allows you to view all routes associated with a specific next hop entity.

On the **Route Topology** tab of the **VPC Topology** page, click **Route Focus** in the entity toolbar of the next hop entity to view the routes.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1234232961/p694476.png)

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2234232961/p694478.png)

**Note**

If you want to view the global route topology of the VPC, click **Return to VPC Route Topology** in the upper-right corner of the page.

### **View associated routes**

On the **Route Topology** tab of the **VPC Topology** page, click **View Associated Routes** in the toolbar of the next hop entity that you want to view. Then, you can view the information about the routes associated with the next hop entity.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1234232961/p694985.png)

### **Analyze reachability**

The reachability analyzer feature allows you to detect the network connectivity between a source and a destination. The following section provides an example on how to analyze the reachability of a path from a vSwitch to another resource entity.

On the **VPC Topology** page, click the vSwitch and click **Reachability Analyzer** in the entity toolbar. Then, you are redirected to the **Start Analyzing** page. On the Start Analyzing page, the vSwitch is specified as the source by default and you need to specify the Destination parameter and other parameters based on your business requirements. Then, click **Start Analyzing** to analyze reachability. For more information, see [Work with the reachability analyzer](/help/en/nis/user-guide/work-with-reachability-analyzer).

**Note**

The ![交换机集合](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0543439661/p508221.png) icon indicates the vSwitch collection. Click this icon and enter an entity ID to search for the desired entity in the dialog box that appears. Click the vSwitch and click **Reachability Analyzer** in the entity toolbar.

### **Analyze an instance**

The instance diagnostics feature allows you to check the configurations and status of your instances, generate diagnostic reports, and provide suggestions on how to fix the issues. The following section provides an example on how to analyze a public NAT gateway.

On the **VPC Topology** page, click the public NAT gateway and click **Instance Diagnostics** in the entity toolbar. You are redirected to the **Instance Diagnostics** page and the diagnosis is automatically performed. For more information, see [Work with instance diagnostics](/help/en/nis/user-guide/work-with-instance-diagnostics).

### **Analyze traffic**

The traffic analysis feature allows you to monitor network traffic in real time and trace historical traffic. The following section provides an example on how to analyze the traffic of an elastic IP address (EIP).

On the **VPC Topology** page, click the EIP and click **Traffic Analysis** in the entity toolbar. You are redirected to the **Traffic Statistics** tab of the entity monitoring page that displays the traffic of the EIP. For more information, see [Work with the Internet traffic analysis capability](/help/en/nis/user-guide/work-with-traffic-analysis).

### **View a vSwitch subnet topology**

vSwitch subnet topologies allow you to expand the resource topologies of vSwitches.

On the **VPC Topology** page, click a vSwitch and click **View VSW Subnet Topology** in the entity toolbar. Then, view the resource topology of the vSwitch.

**Note**

If you want to view the global resource topology of the VPC, click **Return to VPCNetwork Topology** in the upper-right corner of the page.

### **View a CEN topology**

On the **Route Topology** tab of the **VPC Topology** page, if the next hop entity is a transit router, click **View CEN Topology** in the toolbar of the transit router. Then, you are automatically redirected to the **CEN Topology** page where a CEN topology is generated. For more information, see [Work with CEN topology](/help/en/nis/user-guide/work-with-cen-topology).
