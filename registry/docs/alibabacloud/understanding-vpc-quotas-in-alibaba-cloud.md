Virtual private cloud (VPC) quotas define the maximum number of resources you can create or operations you can perform per account or region.

## **Quota types**

Alibaba Cloud service quotas are applied on a per-account or per-region basis. See the table below for quota categories.

**Type**

**Description**

General quota

Maximum number of resources that an Alibaba Cloud account can use.

API rate limit

Maximum API calls per second, also known as a queries per second (QPS) limit.

Privilege quota

Permissions granted to an account, such as the permission to use specific features.

To view and request quota increases, log on to the Alibaba Cloud [Quota Center console](https://quotas.console.alibabacloud.com/products) or [VPC console](https://vpc.console.alibabacloud.com/quota). For more information, see [Manage VPC quotas](/help/en/vpc/manage-vpc-quotas#task-2273720).

> Quota changes apply to both new and existing resources.

## **General quotas**

The following tables list the general quotas of VPC.

### **VPCs and vSwitches**

**Quota name**

**Description**

**Default limit**

**Adjustable**

vpc\_quota\_instances\_num

> vpc\_quota\_instances\_num\_${RegionId} take precedence over vpc\_quota\_instances\_num

VPCs in a single region.

10

Yes.

Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page or [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=peer) to request a quota increase.

**vpc\_quota\_instances\_num\_${RegionId}**

> ${RegionId} is a variable that specifies a region. The quota name varies based on the region.

VPCs in a specified region.

10

vpc\_quota\_vswitches\_num

vSwitches per VPC.

150

vpc\_quota\_secondary\_cidr\_num

Secondary IPv4 CIDR blocks per VPC.

5

None

Secondary IPv6 CIDR blocks per VPC.

5

No.

Reserved IPv4 CIDR blocks per VPC.

100

Reserved IPv6 CIDR blocks per VPC.

100

User CIDR blocks per VPC.

3

Private IP addresses used by cloud resources in a VPC.

300,000

> 1\. If an Elastic Compute Service (ECS) instance has only one private IP, the ECS instance uses only one network address.

> 2\. If an ECS instance is associated with multiple ENIs or multiple IP addresses are configured for the ENIs, the number of network addresses used by the ECS instance is the sum of the IP addresses that are assigned to the ENIs associated with the ECS instance.

Tags per VPC.

20

Tags per vSwitch.

20

### **vRouters and route tables**

**Quota name**

**Description**

**Default limit**

**Adjustable**

vpc\_quota\_route\_tables\_num

Custom route tables per VPC.

9

Yes.

Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page or [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=peer) to request a quota increase.

vpc\_quota\_route\_entrys\_num

Custom route entries per route table (excluding [dynamically propagated route entries](/help/en/vpc/vpc-route-table/#5d8f01c73adu9)).

200

vpc\_quota\_dynamic\_route\_entrys\_num

Dynamically propagated routes per table.

500

vpc\_quota\_havip\_custom\_route\_entry

Maximum custom routes pointing to HaVip.

5

vpc\_quota\_vpn\_custom\_route\_entry

Maximum custom routes pointing to VPN gateway.

50

None

Tags per route table.

20

No.

vRouters per VPC.

1

Routes pointing to TR connection.

600

### **DHCP options sets**

**Quota name**

**Description**

**Default limit**

**Adjustable**

None

DHCP options sets per account.

10

No.

VPCs per DHCP options set.

10

DHCP options sets per VPC.

1

Domain names per DHCP options set.

1

DNS server IPs per DHCP options set.

4

### **Shared VPCs**

**Quota name**

**Description**

**Default limit**

**Adjustable**

vpc\_quota\_sharedvpc\_share\_user\_num\_per\_vpc

vSwitch principals to which a VPC can be shared.

50

Yes.

Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page or [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=peer) to request a quota increase.

vpc\_quota\_sharedvpc\_share\_user\_num\_per\_vswitch

vSwitch principals to which a vSwitch can be shared.

50

vpc\_quota\_sharedvpc\_accept\_shared\_vswitch\_num

Shared vSwitches that a vSwitch principal can accept.

30

### **Flow logs**

**Quota name**

**Description**

**Default limit**

**Adjustable**

vpc\_quota\_flowlog\_inst\_nums\_per\_user

Flow log instances per account.

10

Yes.

Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page or [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=peer) to request a quota increase.

### **Network ACLs**

**Quota name**

**Description**

**Default limit**

**Adjustable**

vpc\_quota\_nacl\_ingress\_entry

Inbound rules per network ACL.

> If IPv6 is enabled for the VPC to which the network ACL belongs, the default number of IPv4 and IPv6 inbound rules that can be created is 20.

20

Yes.

Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page or [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=peer) to request a quota increase.

vpc\_quota\_nacl\_egress\_entry

Outbound rules per ACL.

> If IPv6 is enabled for the VPC to which the network ACL belongs, the default number of IPv4 and IPv6 inbound rules that can be created is 20.

20

nacl\_quota\_vpc\_create\_count

Network ACLs per VPC.

20

### **HaVips**

**Quota name**

**Description**

**Default limit**

**Adjustable**

None

The network type that supports high-availability virtual IP addresses (HaVips).

VPC

No.

HaVips per ECS instance.

5

EIPs per HaVip.

1

ECS instances or ENIs per HaVip.

10

> 1\. An HaVip can be associated with 10 ECS instances or 10 ENIs at the same time. However, an HaVip cannot be associated with ECS instances and ENIs at the same time.

> 2\. An HaVip has the subnet property. It can be associated only with ECS instances or ENIs that are in the same vSwitch.

Whether HaVips support broadcast and multicast.

No

> HaVips support only unicast communication. If you use third-party software such as Keepalived to implement high availability, you must change the communication mode to unicast in the configuration file.

HaVips per account.

50

HaVips per VPC.

50

vpc\_quota\_havip\_custom\_route\_entry

Entries whose destination is an HaVip in a route table.

5

Yes.

Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page or [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=peer) to request a quota increase.

### **Traffic mirror**

**Quota name**

**Description**

**Default limit**

**Adjustable**

trafficmirror\_quota\_source\_num\_per\_session

Traffic mirror sources per session.

10

Yes.

Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page or [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=peer) to request a quota increase.

vpc\_quota\_traffic\_mirror\_source\_num\_per\_large\_ecs\_target

Traffic mirror sources supported by a traffic mirror destination when the destination is an ENI and the ENI is attached to an ECS instance of one of the following instance types.

**ECS instance type**

ecs.ebmc7.32xlarge, ecs.ebmg7.32xlarge, ecs.ebmr7.32xlarge, ecs.ebmhfg7.48xlarge, ecs.ebmhfc7.48xlarge, ecs.ebmhfr7.48xlarge, ecs.ebmc7a.64xlarge, ecs.ebmg7a.64xlarge, ecs.ebmg7se.32xlarge, ecs.ebmg6a.64xlarge, ecs.ebmg6e.26xlarge, ecs.ebmc6a.64xlarge, ecs.ebmc6e.26xlarge, ecs.ebmr7a.64xlarge, ecs.ebmr6a.64xlarge, ecs.ebmr6e.26xlarge, ecs.c8i.48xlarge, ecs.g8i.48xlarge, ecs.c7nex.32xlarge, ecs.g7nex.32xlarge,

ecs.g7ne.24xlarge, ecs.c7.32xlarge, ecs.g7.32xlarge, ecs.r7.32xlarge, ecs.r6e.26xlarge,

ecs.g7t.32xlarge, ecs.g6t.26xlarge, ecs.g6e.26xlarge, ecs.c7t.32xlarge, ecs.c6t.26xlarge, ecs.c6e.26xlarge, ecs.g5ne.18xlarge, ecs.r7t.32xlarge

200

vpc\_quota\_traffic\_mirror\_source\_num\_per\_small\_ecs\_target

Traffic mirror sources supported by a traffic mirror destination when the destination is an ENI and the ENI is not attached to an ECS instance of one of the following instance types.

**ECS instance type**

ecs.ebmc7.32xlarge, ecs.ebmg7.32xlarge, ecs.ebmr7.32xlarge, ecs.ebmhfg7.48xlarge, ecs.ebmhfc7.48xlarge, ecs.ebmhfr7.48xlarge, ecs.ebmc7a.64xlarge, ecs.ebmg7a.64xlarge, ecs.ebmg7se.32xlarge, ecs.ebmg6a.64xlarge, ecs.ebmg6e.26xlarge, ecs.ebmc6a.64xlarge, ecs.ebmc6e.26xlarge, ecs.ebmr7a.64xlarge, ecs.ebmr6a.64xlarge, ecs.ebmr6e.26xlarge, ecs.c8i.48xlarge, ecs.g8i.48xlarge, ecs.c7nex.32xlarge, ecs.g7nex.32xlarge,

ecs.g7ne.24xlarge, ecs.c7.32xlarge, ecs.g7.32xlarge, ecs.r7.32xlarge, ecs.r6e.26xlarge,

ecs.g7t.32xlarge, ecs.g6t.26xlarge, ecs.g6e.26xlarge, ecs.c7t.32xlarge, ecs.c6t.26xlarge, ecs.c6e.26xlarge, ecs.g5ne.18xlarge, ecs.r7t.32xlarge

20

vpc\_quota\_traffic\_mirror\_rules\_num\_per\_filter

Filter rules per filter.

20

None

Traffic mirror sessions per account in a region.

20,000

No.

Traffic mirror sessions per traffic mirror source.

3

Traffic mirror sources supported by a traffic mirror destination when the destination is a private Classic Load Balancer (CLB) instance.

500

Traffic mirror sources supported by a traffic mirror destination when the destination is a Gateway Load Balancer endpoint (GWLBe).

500

Filters per account in a region.

100

Traffic mirror sessions per filter.

2,000

### **VPC peering connections**

**Quota name**

**Description**

**Default limit**

**Adjustable**

vpc\_quota\_cross\_region\_peer\_num\_per\_vpc

Inter-region peering connections per VPC.

20

Yes.

Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page or [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=peer) to request a quota increase.

vpc\_quota\_intra\_region\_peer\_num\_per\_vpc

Intra-region peering connections per VPC.

10

vpc\_quota\_peer\_num

Peering connections per account in a region.

20

vpc\_quota\_peer\_cross\_border\_bandwidth

The maximum cross-border bandwidth.

1,024 Mbps

vpc\_quota\_peer\_cross\_region\_bandwidth

The maximum inter-region bandwidth.

1,024 Mbps

### **IPv4 gateways**

**Quota name**

**Description**

**Default limit**

**Adjustable**

None

IPv4 gateways per VPC.

1

No.

Gateway route tables per IPv4 gateway.

1

### **Prefix lists**

**Quota name**

**Description**

**Default limit**

**Adjustable**

vpc\_quota\_prefixlist\_num

Prefix lists per account.

10

Yes.

Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page or [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=peer) to request a quota increase.

vpc\_quota\_prefixlist\_cidr\_num\_per\_prefixlist

CIDR entries per prefix list.

50

vpc\_quota\_prefixlist\_accept\_shared\_prefixlist\_num

Shared prefix lists that a principal can accept.

100

vpc\_quota\_prefixlist\_share\_user\_num\_per\_prefixlist

The number of principals to which a prefix list can be shared.

10

### IP Address Manager (IPAM)

**Quota name**

**Description**

**Default limit**

**Adjustable**

ipam\_quota\_per\_region

IPAMs per user in each region.

1

No.

ipam\_scope\_quota\_per\_ipam

IPAM scopes per IPAM.

5

ipam\_pool\_quota\_depth

The maximum depth of an IPAM pool.

10

ipam\_cidr\_quota\_per\_ipam\_pool

CIDRs that can be provisioned in an IPAM pool.

50

ipam\_sub\_pool\_quota\_per\_ipam\_pool

Sub-pools per IPAM pool.

50

ipam\_pool\_quota\_per\_scope

IPAM pools that can be created in each private IPAM scope.

500

ipam\_resource\_discovery\_quota\_per\_region

Resource discoveries per account in a region.

1

resource\_share\_quota\_per\_ipam\_resource\_discovery

Shared resources created by a resource discovery.

100

shared\_ipam\_resource\_discovery\_quota\_per\_user

Shared resource discoveries per user.

100

resource\_share\_quota\_per\_ipam\_pool

Resource shares per IPAM pool.

100

shared\_ipam\_pool\_quota\_per\_user

Shared IPAM pools per user.

100

ipam\_public\_ipv6\_top\_pool\_quota\_per\_region\_isp

Public top-level IPv6 IPAM pools each user can create for each ISP type in each region.

1

ipam\_cidr\_quota\_per\_public\_ipv6\_top\_pool

CIDR blocks that each user can provision for public top-level IPv6 IPAM pools in each region.

1

## API rate limits

**Name**

**Limit**

**Adjustable**

API rate limit

View the API rate limits in one of the following ways:

-   On the **API Rate Limit** page in [Quota Center](https://quotas.console.alibabacloud.com/flow-control-products/vpc/quotas), view the rate limits of VPC API operations.
    
-   On the [Quota Management](https://vpc.console.alibabacloud.com/quota) page, click the **API Rate Limit** tab in the **Quota Type** section to view the rate limits of VPC API operations.
    

Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page or [Quota Center](https://quotas.console.alibabacloud.com/flow-control-products/vpc/quotas?regionId=cn-hangzhou) to request a quota increase.

## Privilege quotas

The default value for a VPC privilege quota is 0. This means the feature is unavailable by default. You can use the feature only after you are granted the permissions by Alibaba Cloud. The following table lists the privilege quotas for VPC.

**Quota name**

**Description**

**Adjustable**

Havip\_privilege\_whitelist

Used to control the whitelist for a newly launched feature (HaVip) during private beta testing.

Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page or [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/vpc/quotas) to request a quota increase.
