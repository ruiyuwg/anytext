The network topology feature helps you quickly learn about the architecture of networks on Alibaba Cloud, verify network configurations, and perform centralized O&M on cloud network resources. This topic describes what network topology is.

## Background information

Alibaba Cloud provides different forms of network resources that support various features. A large number of network resources are distributed in different regions, which makes cloud network connections complex. You can use Network Intelligence Service (NIS) to perform centralized O&M and management of network resources, and monitor the network health status from an overall perspective.

NIS is a self-service platform that allows you to monitor and perform O&M on cloud networks in a centralized manner. With the network topology feature of NIS, you can perform the following operations:

-   Quickly learn about the architecture of networks on Alibaba Cloud, and view the relationship between cloud network resources and the structure of the network that you deploy on Alibaba Cloud.
    
-   Verify the network configurations, analyze the route topologies of entities, and check whether the networks of cloud resources are reachable as expected based on access scenarios.
    
-   Perform centralized O&M on cloud network resources. NIS provides O&M tools based on resource types so that you can view key information such as entity attributes, manage cloud resources, and troubleshoot issues.
    

## Network topology

### Components

A network topology consists of entities, entity collections, and connections.

**Item**

**Description**

Entity

The entities in a network topology represent resource instances of different types. For more information about the resource types that are supported by the network topology feature, see the [Resource types](#table-ze0-gh4-tol) section of this topic.

If you click an entity in a network topology, the following options are displayed in the entity toolbar:

-   **View the entity details page**
    
-   **Analyze the instance**
    
-   **Analyze reachability**
    
-   **Analyze traffic**
    
-   **View the vSwitch subnet topology**
    
-   **View routes**
    
-   **View associated routes**
    
-   **View the CEN Topology**
    

In a network topology, you can move the pointer over an entity icon to view the ID and name of the resource instance.

Entity collection

A network topology reflects resource relationships in a collection mode. Entities are aggregated according to the following rules:

-   By default, entities of the same type are aggregated if more than one entity are attached to the same vSwitch.
    
-   By default, vSwitch subnet topologies in a zone are aggregated if the number of the topologies is greater than one.
    
-   By default, entities of the same type are aggregated if more than one entity are connected with each other in a virtual private cloud (VPC).
    

Connection

Entities are connected by dashed lines in a network topology. The connection relationships between entities are categorized into the following two types:

-   **Resource relationship**
    
    In a resource topology, entities are connected by gray dashed lines, which indicate the resource relationships between entities. The connections that have a resource object are labeled in a resource topology, such as VPC peering connections, connections over Express Connect circuits, and intra-connections or inter-connections with transit routers.
    
-   **Routing relationship**
    
    In a route topology, move the pointer over an entity. The orange dashed lines between entities indicate the connection paths between the entities. The connections are dynamically displayed, and the flow directions represent the directions of the entity routes.
    

### Topology category

Network topologies are categorized into resource topologies and route topologies.

**Type**

**Description**

**Supported service**

Resource topology

A resource topology displays the network connections between resources.

-   VPC
    
-   Cloud Enterprise Network (CEN)
    
-   Classic Load Balancer (CLB)
    

Route topology

A route topology displays the forwarding correlations between resource entities based on real-time routing configurations.

VPC

### Resource types

The following table describes the types of resources and entities supported by a network topology.

**Note**

"N/A" in the following table indicates that the object is not involved.

**Resource type**

**Entity type**

**Entity collection**

**Entity toolbar**

**References**

**VPC resource**

[vRouter](/help/en/vpc/vpc-route-table/)

\-

\-

\-

[vSwitch](/help/en/vpc/user-guide/overview-of-vpcs-and-vswitches/)

In a VPC topology, multiple vSwitches in the same zone and their subnet topologies can be aggregated and expanded in the collection mode.

-   Analyze reachability
    
-   View the vSwitch subnet topology
    

-   [Work with the reachability analyzer](/help/en/nis/user-guide/work-with-reachability-analyzer#task-2102664)
    
-   [View a vSwitch subnet topology](/help/en/nis/user-guide/work-with-vpc-topology#cd77c6e019ly9)
    

[CLB instance](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/)

In a VPC topology, multiple CLB instances that are attached to the same vSwitch can be aggregated and expanded in the collection mode.

Analyze the instance

[Work with instance diagnostics](/help/en/nis/user-guide/work-with-instance-diagnostics#task-2133527)

[VPC peering connection](/help/en/vpc/vpc-peer-to-peer-connection)

In a VPC topology, multiple VPC peering connections are aggregated and expanded together with the peer VPCs in the collection mode.

\-

\-

[Internet NAT gateway](/help/en/nat-gateway/user-guide/public-network-nat-gateway)

In a VPC topology, multiple Internet NAT gateways that are attached to the same vSwitch can be aggregated and expanded in the collection mode.

-   Analyze the instance
    
-   Analyze traffic
    

-   [Work with instance diagnostics](/help/en/nis/user-guide/work-with-instance-diagnostics#task-2133527)
    
-   [Work with the Internet traffic analysis capability](/help/en/nis/user-guide/work-with-traffic-analysis)
    

[VPC NAT gateway](/help/en/nat-gateway/user-guide/what-is-a-vpc-nat-gateway/)

In a VPC topology, multiple VPC NAT gateways that are attached to the same vSwitch can be aggregated and expanded in the collection mode.

\-

\-

[Application Load Balancer (ALB) instance](/help/en/slb/application-load-balancer/product-overview/what-is-alb/)

-   In a VPC topology, multiple ALB instances that are attached to the same vSwitch can be aggregated and expanded in the collection mode.
    
-   In a VPC resource topology, an ALB instance can be displayed in different zones because the ALB instance can be deployed across zones.
    

Analyze the instance

[Work with instance diagnostics](/help/en/nis/user-guide/work-with-instance-diagnostics)

**Public network resource**

[Elastic IP address (EIP)](/help/en/eip/product-overview/what-is-eip)

In a VPC topology, EIPs that are bound to network resources are displayed as affiliated entities together with the network resources. EIPs that are not bound to network resources are not displayed in the network topology.

-   Analyze the instance
    
-   Analyze reachability
    
-   Analyze traffic
    

-   [Work with instance diagnostics](/help/en/nis/user-guide/work-with-instance-diagnostics#task-2133527)
    
-   [Work with the reachability analyzer](/help/en/nis/user-guide/work-with-reachability-analyzer#task-2102664)
    
-   [Work with the Internet traffic analysis capability](/help/en/nis/user-guide/work-with-traffic-analysis#task-2172514)
    

**Interconnection resource**

[Virtual border router (VBR)](/help/en/express-connect/user-guide/what-is-a-virtual-border-router/)

In a VPC topology, multiple VBRs in a VPC can be aggregated and expanded in the collection mode.

\-

\-

[Transit router](/help/en/cen/product-overview/how-transit-routers-work)

In a VPC topology, multiple transit routers in a VPC can be aggregated and expanded in the collection mode, in which the associated network instances are displayed together.

View the CEN Topology

[Work with CEN topology](/help/en/nis/user-guide/work-with-cen-topology)

[VPN gateway](/help/en/vpn/product-overview/what-is-vpn-gateway)

In a VPC topology, multiple VPN gateways that are attached to the same vSwitch can be aggregated and expanded in the collection mode.

\-

\-

Express Connect circuit

An Express Connect circuit is used to connect your data center to an access point of Alibaba Cloud. Multiple Express Connect circuits that are used to access a VPC can be aggregated and expanded in the collection mode.

\-

\-

**Cloud service**

[Elastic Compute Service (ECS) instance](/help/en/ecs/user-guide/what-is-ecs)

In a VPC topology, multiple ECS instances that are attached to the same vSwitch can be aggregated and expanded in the collection mode.

\-

\-

**Device and site**

[Data center access point](/help/en/express-connect/getting-started/locations-of-access-points)

In a VPC topology, data center access points are displayed together with Express Connect circuits. Access points indicate the geographical locations where Express Connect circuits are connected to Alibaba Cloud. Multiple access points in a VPC can be aggregated and expanded in the collection mode.

\-

\-

[Customer gateway](/help/en/vpn/sub-product-ipsec-vpn/user-guide/customer-gateway)

The customer gateways over the IPsec-VPN connections. Multiple customer gateways that are connected to the same VPN gateway can be aggregated and expanded in the collection mode.

\_

\_

[SSL-VPN client](/help/en/vpn/sub-product-ssl-vpn/user-guide/create-an-ssl-client-certificate)

Clients over SSL-VPN connections. Multiple clients that are connected to the same VPN gateway can be aggregated and expanded in the collection mode.

\_

\_

## Limits

-   The network topology feature only allows you to view the topologies of the network resources within your Alibaba Cloud account.
    
-   The network topology feature only allows you to view the network structure with real-time network configurations.
    
-   The route topology feature only analyzes the routing methods of primary elastic network interfaces (ENIs).
    

## **Work with network topology**

-   [Work with VPC topology](/help/en/nis/user-guide/work-with-vpc-topology)
    
-   [Work with CEN topology](/help/en/nis/user-guide/work-with-cen-topology)
    
-   [Work with SLB topology](/help/en/nis/user-guide/work-with-clb-topology)
