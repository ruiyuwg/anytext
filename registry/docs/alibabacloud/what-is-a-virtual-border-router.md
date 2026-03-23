Built on Alibaba Cloud's Software Defined Network (SDN) architecture, a Virtual Border Router (VBR) is a virtualization of a physical port on an Express Connect circuit. A VBR acts as a router between your on-premises Customer-premises equipment (CPE) and a Virtual Private Cloud (VPC). It forwards traffic between your Internet Data Center (IDC) and your VPC.

**Note**

Similar to a VPC router, each VBR manages a route table. You can configure routes in the route table to control traffic forwarding.

## Features

A VBR provides the following features:

-   Exchanges data packets between a VPC and an on-premises IDC.
    
-   You can specify the interface type for an Express Connect circuit: a Layer 3 router interface or a Layer 3 VLAN subinterface.
    
-   In Layer 3 subinterface mode, it recognizes or attaches Virtual Local Area Network (VLAN) tags.
    
-   Supports Border Gateway Protocol (BGP).
    
    -   BGP is a dynamic routing protocol based on TCP. It exchanges routing and network reachability information between different autonomous systems (AS). You can use BGP with Express Connect to connect your on-premises IDC to a VBR, which helps you build a more efficient, flexible, and reliable hybrid cloud.
        
    -   A VBR supports both IPv4 and IPv6 BGP.
        

## Limitations

-   A VBR does not support source address-based policy-based routing.
    
-   Each VBR has exactly one route table.
    
-   A VBR supports BGP version 4 (BGP-4).
    
-   Each VBR supports a maximum of eight BGP peers.
    
-   Each BGP peer supports a maximum of 110 dynamic routes. Routes that exceed this limit are dropped.
    
-   When you use BGP to connect to a VPC, you must assign a unique Autonomous System Number (ASN) to the Alibaba Cloud side. This ASN cannot be the same as the ASN assigned to the vSwitches on the cloud platform.
