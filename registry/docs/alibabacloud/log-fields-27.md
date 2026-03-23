This topic describes the fields of Virtual Private Cloud (VPC) flow logs.

**Field**

**Description**

version

The version of the flow log.

vswitch-id

The ID of the vSwitch to which the ENI belongs.

vm-id

The ID of the Elastic Compute Service (ECS) instance with which the ENI is associated.

vpc-id

The ID of the VPC to which the ENI belongs.

account-id

The account ID.

eni-id

The ENI ID.

srcaddr

The source IP address.

srcport

The source port.

dstaddr

The destination IP address.

dstport

The destination port.

protocol

The Internet Assigned Numbers Authority (IANA) protocol number of the traffic.

For more information, see [Protocol Numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml).

direction

The traffic direction. Valid values:

-   in: inbound
    
-   out: outbound
    

packets

The number of data packets.

bytes

The size of data packets.

start

The time when the capture starts.

tcp-flags

The following section describes some TCP flags and corresponding masks:

-   SYN: 2
    
-   SYN,ACK: 18
    
-   RST: 4
    
-   PSH: 8
    
-   URG: 32
    
-   FIN: 1
    

For more information about TCP flags, see [RFC: 793](https://datatracker.ietf.org/doc/html/rfc793).

end

The time when the capture ends.

log-status

The logging status of the flow log. Valid values:

-   OK: Data is being recorded as expected.
    
-   NODATA: No inbound or outbound traffic is collected during the capture window. This status appears when the standby system takes over, during off-peak hours, or when configurations have errors.
    
-   SKIPDATA: Some flow log entries are skipped during the capture window. This status appears in scenarios where traffic spikes occur, which overloads the system. Therefore, some traffic flows are not collected.
    

action

The action that was performed on the traffic flow. Valid values:

-   ACCEPT: The traffic flow was allowed by security groups or ACLs.
    
-   REJECT: The traffic flow was rejected by security groups or ACLs.
    

TrafficPath

The sampling path of traffic:

-   all: collects all traffic.
    
-   ipv4Gateway: collects traffic that accesses the Internet through an IPv4 gateway.
    
-   natGateway: collects traffic through a NAT gateway.
    
-   vpnGateway: collects traffic through a VPN gateway.
    
-   gatewayEndpoint: collects traffic that accesses cloud services through a gateway endpoint.
    
-   transitRouter: collects traffic through a transit router.
    
-   virtualBorderRouter: collects traffic through a virtual border router (VBR).
    

**Note**

The sampling path feature is disabled by default. To use this feature, contact your account manager.
