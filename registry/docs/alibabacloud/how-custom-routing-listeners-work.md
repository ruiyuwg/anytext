Custom routing listeners are ideal for scenarios in which you want to forward traffic from clients to specified backend servers. This topic describes how custom routing listeners work, the limits on custom routing listeners, and the differences between custom routing listeners and intelligent routing listeners. This topic also provides examples on how to use custom routing listeners.

## How custom routing listeners work

After you configure a custom routing listener, Global Accelerator (GA) generates a port mapping table based on the port range of the listener, the protocol and port range of the endpoint group, and the IP addresses of the endpoint (vSwitch). Then, GA routes traffic from clients to backend servers with specific IP addresses and ports based on the port mapping table.

The following workflow describes how a custom routing listener works:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5551245671/CAEQUBiBgIDL3KSt2BkiIDU4MWUxYTY3YWIxODQzYjliYWQ5ZWM0MjM5NmEzM2M03963382_20230830144006.372.svg)

**No.**

**Description**

1

GA generates a port mapping table based on the port range of the custom routing listener, the destination port range of the endpoint group, and the IP addresses of the endpoint vSwitch.

2

The client sends a request to GA to query information about available ports (acceleration ports).

3

GA queries the port mapping table and selects a backend server that allows traffic based on the business logic.

4

GA returns information about the acceleration port that maps the port of the selected backend server. The accelerated port is selected from the port range of the listener.

5

The client uses the assigned acceleration port and accelerated IP address to access your service.

6

The custom routing listener forwards traffic from the client to the corresponding backend server based on the port mapping table.

## Limits

When you use custom routing listeners, take note of the following limits:

### Limits on acceleration areas

Accelerated IP addresses support only IPv4.

### Limits on the listener port range

-   The configurable port range is 1 to 65499. Ports 25, 250, 4789, and 4790 are reserved by the system. The system automatically ignores the reserved ports when it generates a port mapping table. Pay-as-you-go GA instances do not support port 6081.
    
-   The listener port range that you configure determines the number of port and IP address combinations in the associated endpoint group and its endpoints. The number of listener ports must meet the following requirement: `Number of listener ports (excluding system-reserved ports) ≥ Total number of ports in the endpoint group × Total number of IP addresses of all vSwitches in the endpoint group`. We recommend that you configure a large port range for the listener.
    
    For example, if the destination port range of your endpoint group is 81-85, which includes five ports, and the total number of IP addresses for all vSwitch endpoints is 16, the listener port range must contain at least 80 ports (5 × 16 = 80). You can set the listener port range to 101-180, but not to 101-179. If the listener port range is smaller than required, the listener cannot be created.
    
-   After you configure the listener ports, you cannot remove ports that have existing mappings when you modify the port range.
    
    For example, if the original listener port range is 100-10000 and a mapping exists between port 199 and the destination port 80 of the endpoint in the port mapping table, you can expand the listener port range to 20-10000. However, you cannot narrow the listener port range to 200-10000.
    
-   The listener ports of different listeners on the same GA instance cannot be the same.
    

### Limits on the listener protocol

Only TCP and UDP are supported. You can specify the protocol when you configure the endpoint group. You can specify TCP, UDP, or both protocols.

### Limits on backend services

-   You can specify only vSwitches as the endpoints of custom routing listeners. You can specify only the private IP addresses and ports of Elastic Compute Service (ECS) instances as traffic destinations.
    
-   The subnet mask of the vSwitch that serves as the endpoint must range from `/17` to `/28`. The vSwitch must provide at least 16 IP addresses.
    
-   When you specify a vSwitch as the endpoint, all traffic to the vSwitch is rejected by default. If you want an ECS instance in the vSwitch to receive traffic, you can modify the configuration of the listener to allow all traffic to the vSwitch, or specify the IP address and port of the ECS instance to allow traffic to the ECS instance.
    
-   The network access control list (ACL) that is associated with the vSwitch that serves as the endpoint and the security group rules of the destination ECS instance must allow traffic. For information about how to configure network ACLs and security group rules, see [Create and manage a network ACL](/help/en/vpc/work-with-network-acls#task-189639) and [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
    
-   Health checks on endpoint groups and endpoints are not supported. A custom routing listener forwards traffic based on the port mapping table, regardless of the health status of the endpoints.
    

## Examples

Custom routing listeners are ideal for scenarios in which you want to forward traffic from clients to specific backend servers. For example, if you use a custom routing listener in a multiplayer online game, the system can assign players with the same characteristics (such as geographical location and player level) to the same session on a backend server based on the port mapping table and business logic.

In this example, you use three ECS instances deployed on the same vSwitch to build a game application. The CIDR block of the vSwitch is 10.1.1.0/28. The IP addresses of the ECS instances are 10.1.1.1, 10.1.1.2, and 10.1.1.3. The ports that are used to provide services are TCP ports 80, 81, and 82. Only two ECS instances are used to provide services. The IP addresses of the ECS instances are 10.1.1.1 and 10.1.1.2.

You can configure the custom routing listener and the endpoint based on the following information to improve user experience:

-   Port range of the listener: 1001 to 1050.
    
-   Port range of the endpoint group: 80 to 82. Protocol: TCP.
    
-   Select the vSwitch as the endpoint. Allow traffic to the ECS instances with the IP addresses 10.1.1.1 and 10.1.1.2. Set the port range to 80-82.
    

After the configuration is complete, GA generates the following port mapping table:

**Note**

In this example, the ports are mapped in sequence for easier understanding. The actual port mapping table may be different. You can call the [ListCustomRoutingPortMappings](/help/en/ga/api-listcustomroutingportmappings#doc-api-Ga-ListCustomRoutingPortMappings) and [ListCustomRoutingPortMappingsByDestination](/help/en/ga/api-listcustomroutingportmappingsbydestination#doc-api-Ga-ListCustomRoutingPortMappingsByDestination) operations to query the actual port mapping table.

**Acceleration port**

**Destination IP address**

**Destination port**

**Traffic policy**

1001

10.1.1.1

80

Allow

1002

10.1.1.1

81

Allow

1003

10.1.1.1

82

Allow

1004

10.1.1.2

80

Allow

1005

10.1.1.2

81

Allow

1006

10.1.1.2

82

Allow

1007

10.1.1.3

80

Deny

1008

10.1.1.3

81

Deny

1009

10.1.1.3

82

Deny

As shown in the following figure, different players can access the game application through the accelerated IP addresses and ports assigned by GA. Player 1 accesses the game through port 1001 and the corresponding accelerated IP address. Player 2 accesses the game through port 1003 and the corresponding accelerated IP address. Traffic from Player 1 and Player 2 is routed to the ECS instance with the IP address 10.1.1.1. Player 3 accesses the game through port 1005 and the corresponding accelerated IP address, and the traffic is routed to the ECS instance with the IP address 10.1.1.2. Player 4 fails to access the ECS instance with the IP address 10.1.1.3 because the ECS instance does not receive traffic.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5551245671/CAEQUBiBgMDS1aKt2BkiIGExZjg2OTdmZGMxMzQxNjJhMDBmNDA5NWE2NGI0ZGM03963382_20230830144006.372.svg)

## Differences between intelligent routing listeners and custom routing listeners

The following table describes the features of intelligent routing listeners and custom routing listeners.

**Feature**

**Intelligent routing listener**

**Custom routing listener**

[Listener protocols](/help/en/ga/user-guide/overview-2/#section-nlf-psv-0nd)

TCP, UDP, HTTP, and HTTPS are supported.

TCP and UDP are supported.

You can specify the protocol when you configure the endpoint group. You can specify TCP, UDP, or both protocols.

[Listener port](/help/en/ga/user-guide/overview-2/#section-kzi-zyz-jbb)

The number of ports that you can configure for a listener varies based on the protocol of the listener.

The listener port range that you specify determines the product of the number of ports in the endpoint group that is associated with the listener and the number of IP addresses in the endpoint. The following requirement must be met: `Number of listener ports (minus the number of system-reserved ports) ≥ Number of ports in the endpoint group × Number of IP addresses in the endpoint (vSwitch)`. We recommend that you specify a large port range for the listener.

After you configure listener ports, you cannot remove ports that exist in the port mapping table when you modify the port range.

[Client affinity](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#section-ncm-izu-muk)

Supported.

Not supported.

[IP versions of accelerated IP addresses](/help/en/ga/user-guide/overview-1/#section-vxi-r6e-pcc)

Supports IPv4, IPv6, and dual-stack.

Only IPv4 is supported.

[Backend service types](/help/en/ga/user-guide/overview-4/#section-kcj-zv4-t4j)

The backend service types that are supported vary based on where your backend service is deployed:

-   On Alibaba Cloud: Elastic Compute Service instances in virtual private clouds (VPCs), Application Load Balancer (ALB) instances, Network Load Balancer (NLB) instances, Classic Load Balancer (CLB) instances, Object Storage Service (OSS) buckets, elastic network interfaces (ENIs), custom private IP addresses, and public IP addresses of Alibaba Cloud
    
-   Outside Alibaba Cloud: custom public IP addresses and custom domain names
    

vSwitches on Alibaba Cloud

Lets you specify the private IP addresses and destination ports of one or more ECS instances in a vSwitch as traffic destinations.

[Health checks](/help/en/ga/user-guide/enable-and-manage-health-checks#task-2382619)

Supported.

Not supported.

[Enable access control for GA listeners](/help/en/ga/user-guide/access-control#task-2087382)

Supported.

Not supported.

[Access logs](/help/en/ga/user-guide/using-access-logs#task-2089949)

Supported.

Supported.

[Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses#task-2416386)

Whether the feature is supported is based on the listener protocol:

-   HTTP or HTTPS: supported.
    
-   UDP: supported for some endpoint types.
    
-   TCP: supported. The method to preserve client IP addresses varies based on the endpoint type.
    

Not supported by default.

If you want to use this feature, contact your account manager.

[Origin probing](/help/en/ga/user-guide/origin-probing#task-2196342)

Supported.

Not supported.
