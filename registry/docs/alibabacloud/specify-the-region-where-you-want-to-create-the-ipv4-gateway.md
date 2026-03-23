By default, resources in a virtual private cloud (VPC) can access the Internet over IPv4 when assigned a public IP address. However, unmanaged Internet access, such as business departments assigning public IP addresses to Elastic Compute Service (ECS) instances without approval, can introduce security risks. An IPv4 gateway and associated route tables let you direct all Internet-bound traffic through a central point, reducing security risks from decentralized access.

## **Why use an IPv4 gateway**

**Dimension**

**Internet access (Default)**

**Centralized control with IPv4 gateway**

Example

An ECS instance accesses the Internet directly using a static public IP address, an Elastic IP Address (EIP), or an Internet NAT gateway.

Provides centralized management of Internet access traffic.

Use case

A small number of ECS instances require independent and direct Internet access.

Ideal when Internet access requirements change frequently.

Suitable for large-scale, multi-tiered network architectures.

Enterprise environments with strict requirements for network security and compliance.

Complexity

Simple and fast. No route configuration is required.

Requires network planning and routing rule configuration.

Flexibility

Each instance is managed independently and does not affect others.

Changes to network policies affect all instances in the VPC.

Security

Security protection mainly relies on the security group rules configured for each instance.

The centralized control mode of an IPv4 gateway ensures consistent and comprehensive network policy enforcement.

### Compare an IPv4 gateway with a NAT gateway

An IPv4 gateway and an Internet NAT gateway can be used together. For more information, see [Internet access](/help/en/vpc/public-network-access/).

**Dimension**

**IPv4 gateway**

**Internet NAT gateway**

Purpose

A component at the VPC boundary that controls public IPv4 traffic.

A Network Address Translation (NAT) device inside the VPC.

Scenarios

Centrally control Internet access traffic.

Provide a unified egress for Internet-bound traffic.

Internet access supported

No. It only controls Internet traffic.

Provides Internet access by attaching EIPs.

(The Internet access capability is provided by EIPs, not by the NAT Gateway itself.)

After you create an IPv4 gateway, vSwitches are classified into two types:

-   Public vSwitch: The associated route table contains a route whose **Destination CIDR Block** is `0.0.0.0/0` and **Next Hop** is the IPv4 gateway. Resources in this vSwitch can access the Internet if assigned a public IP address.
    
-   Private vSwitch: The associated route table does not contain a route that points to the IPv4 gateway. Resources in this vSwitch cannot directly access the Internet, even if assigned a public IP address.
    

When you use an IPv4 gateway with an Internet NAT gateway, deploy the Internet NAT gateway in a public vSwitch. To enable Internet access for ECS instances in a private vSwitch, configure a route that points to the Internet NAT gateway. This route directs their Internet-bound traffic to the Internet NAT gateway, which then uses its attached public IP address to access the Internet. Note the following:

-   Make sure that the `EipBindMode` of the Internet NAT gateway is set to `NAT` mode for compatibility with the IPv4 gateway.
    
    -   An Internet NAT gateway created in the console is in `NAT` mode by default. When you call the [CreateNatGateway](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-createnatgateway-natgws) operation, set `EipBindMode` to `NAT`. After the gateway is created, you can call the [ModifyNatGatewayAttribute](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-modifynatgatewayattribute-natgws) operation to change the `EipBindMode`.
        
    -   If you have an Internet NAT gateway whose `EipBindMode` is set to `MULTI_BINDED` mode, you cannot create an IPv4 gateway because the two are incompatible.
        
    -   If an IPv4 gateway already exists, and you call the [CreateNatGateway](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-createnatgateway-natgws) operation to create an Internet NAT gateway with `EipBindMode` set to `MULTI_BINDED` mode, you cannot attach EIPs to the NAT gateway.
        
-   To ensure that resources in a private vSwitch retain Internet access after you activate the IPv4 gateway, configure the routes before activation.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2163463771/CAEQVBiBgICk8PTW5hkiIDFiZmU4MzI2N2VkNjRhNjA4ZDU4MmJmYzFjZDRmYWI35415840_20250701223050.768.svg)

## How it works

### **Control Internet access using an IPv4 gateway**

After you create and activate an IPv4 gateway for a VPC, it centrally manages all Internet traffic. Configure a route for the vSwitch that points to the IPv4 gateway. This allows resources in the vSwitch to access the Internet. On the VPC details page, check the **IPv4 Internet Access Mode** to confirm whether the IPv4 gateway centrally controls Internet traffic.

> Before an IPv4 gateway is activated, Internet traffic in the VPC remains unaffected. However, a brief network interruption may occur during activation because traffic paths are switched.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2163463771/CAEQVBiBgIDQovjW5hkiIGUwYmNlMmI5ZjU1ZTQ5NTdhNzI1NGI1ZWRlYjY5ZGIx5415840_20250701223050.768.svg)

### **Delete an IPv4 gateway**

Before you delete the IPv4 gateway, first disassociate the gateway route table. In the **Actions** column of the target IPv4 gateway, click **Delete**, or call the [DeleteIpv4Gateway](/help/en/vpc/developer-reference/api-vpc-2016-04-28-deleteipv4gateway) operation to delete the IPv4 gateway. When you delete the gateway, the selected mode determines how resources in the VPC access the Internet.

-   Public mode: The system automatically deletes all routes that point to the IPv4 gateway. The VPC reverts to its initial state, where instances with a public IP address can access the Internet.
    
-   Private mode: First, delete all routes that point to the IPv4 gateway from the route table. After the gateway is deleted, all resources in the VPC lose Internet access. To restore direct Internet access, create a new IPv4 gateway and then delete it in public mode.
    
    **Important**
    
    After you delete an IPv4 gateway in private mode, all resources in the VPC lose Internet access, regardless of whether they have a public IP address. Proceed with caution.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2163463771/CAEQVBiBgMD05_nW5hkiIDdhZGI1Zjk5ZmE3ZDQ4ODBiZjJhODQ4YmRjYjYyMjk25415840_20250701225046.839.svg)

## Centrally control Internet access

Unmanaged Internet access—such as business departments assigning public IP addresses to ECS instances without approval—makes it difficult for operations and maintenance (O&M) teams to centrally manage Internet access. Use an IPv4 gateway to centralize control of Internet-bound traffic. This reduces security risks from decentralized access and helps resolve these management issues.

### **Console**

1.  Go to the [IPv4 Gateway page in the VPC console](https://vpc.console.alibabacloud.com/ipv4/cn-hangzhou/ipv4s). Select the region where the VPC is deployed, and then click **Create IPv4 Gateway**.
    
2.  **Create IPv4 Gateway**: Select the **VPC** for which you want to centralize Internet access.
    
3.  **Activate IPv4 Gateway**: Select the route table that is associated with the public vSwitch. The system automatically adds a `0.0.0.0/0` route that points to the IPv4 gateway. This ensures that resources with a public IP address in the public vSwitch can access the Internet. If a route with a destination CIDR block of `0.0.0.0/0` already exists in the route table, click **Activate Later**. Then, change the next hop of the route to the IPv4 gateway and activate the gateway. After activation, the IPv4 gateway centrally controls Internet access for the VPC.
    
    -   If an ECS instance uses a public IP address that is attached to an Internet NAT gateway to access the Internet, the ECS instance and the Internet NAT gateway must be deployed in different vSwitches. The route table for the vSwitch of the NAT gateway must contain a `0.0.0.0/0` route that points to the IPv4 gateway. The route table for the vSwitch of the ECS instance must contain a route that points to the NAT gateway in the public vSwitch.
        
    -   If an ECS instance uses a static public IP address or an attached EIP to access the Internet, add a `0.0.0.0/0` route that points to the IPv4 gateway.
        
    

### **API**

-   Call [CreateIpv4Gateway](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createipv4gateway) to create an IPv4 gateway.
    
-   Call [EnableVpcIpv4Gateway](/help/en/vpc/developer-reference/api-vpc-2016-04-28-enablevpcipv4gateway) to activate the IPv4 gateway. Set `RouteTableList` to the route table associated with the public vSwitch. If this parameter is not specified, call [CreateRouteEntry](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createrouteentry) to add a `0.0.0.0/0` route that points to the IPv4 gateway.
    

### **Terraform**

Unlike the console, the system does not automatically add a `0.0.0.0/0` route that points to the IPv4 gateway upon activation. You must manually configure the route.

> Resource: [alicloud\_vpc](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc), [alicloud\_vswitch](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vswitch), [alicloud\_vpc\_ipv4\_gateway](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_ipv4_gateway), [alicloud\_route\_table](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/route_table), [alicloud\_route\_table\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/route_table_attachment), [alicloud\_vpc\_route\_entry](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_route_entry), [alicloud\_instance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/instance), [alicloud\_security\_group](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/security_group), [alicloud\_security\_group\_rule](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/security_group_rule), [alicloud\_eip\_address](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/eip_address), [alicloud\_eip\_association](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/eip_association), [alicloud\_nat\_gateway](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/nat_gateway), [alicloud\_snat\_entry](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/snat_entry)

> Data Sources: [alicloud\_zones](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/zones)

```
# Specify the region where you want to create the IPv4 gateway.
provider "alicloud" {
  region = "cn-hangzhou"
}

# Automatically obtain the list of zones where vSwitches can be created based on the data source.
data "alicloud_zones" "available_zones" {
  available_resource_creation = "VSwitch" # Query the zones where resources can be created in the VPC.
}

# Create a VPC. 
resource "alicloud_vpc" "example_vpc" {
  vpc_name   = "example_vpc_name"
  cidr_block = "10.0.0.0/16" # Specify the CIDR block. 
}

# Define the vSwitch configurations.
locals {
  vswitches = {
    vsw1 = {
      name       = "example_vsw1_name"
      cidr_block = "10.0.0.0/24"
      zone_index = 0
    }
    vsw2 = {
      name       = "example_vsw2_name"
      cidr_block = "10.0.1.0/24"
      zone_index = 1
    }
    vsw3 = {
      name       = "example_vsw3_name"
      cidr_block = "10.0.2.0/24"
      zone_index = 0
    }
    vsw4 = {
      name       = "example_vsw4_name"
      cidr_block = "10.0.3.0/24"
      zone_index = 0
    }
  }

  # Define the route table configurations.
  route_tables = {
    rt1 = {
      name        = "example_rt1_name"
      vswitch_key = "vsw1"
    }
    rt2 = {
      name        = "example_rt2_name"
      vswitch_key = "vsw2"
    }
    rt3 = {
      name        = "example_rt3_name"
      vswitch_key = "vsw3"
    }
    rt4 = {
      name        = "example_rt4_name"
      vswitch_key = "vsw4"
    }
  }

  # Define the instance configurations.
  instances = {
    instance1 = {
      name        = "example_instance1_name"
      vswitch_key = "vsw1"
    }
    instance2 = {
      name        = "example_instance2_name"
      vswitch_key = "vsw3"
    }
    instance3 = {
      name        = "example_instance3_name"
      vswitch_key = "vsw4"
    }
  }

  # Define the EIP configurations.
  eips = {
    eip1 = {
      name = "example_eip1_name"
    }
    eip2 = {
      name = "example_eip2_name"
    }
  }

  # Define the SNAT entry configurations.
  snat_entries = {
    snat1 = {
      instance_key = "instance2"
    }
    snat2 = {
      instance_key = "instance3"
    }
  }
}

# Create multiple vSwitches.
resource "alicloud_vswitch" "example_vsw" {
  for_each = local.vswitches

  vswitch_name = each.value.name
  cidr_block   = each.value.cidr_block
  vpc_id       = alicloud_vpc.example_vpc.id
  zone_id      = data.alicloud_zones.available_zones.zones[each.value.zone_index].id
}

# Create multiple custom route tables.
resource "alicloud_route_table" "example_route_table" {
  for_each = local.route_tables

  route_table_name = each.value.name
  vpc_id           = alicloud_vpc.example_vpc.id
}

# Associate the route tables with the vSwitches.
resource "alicloud_route_table_attachment" "example_route_table_attachment" {
  for_each = local.route_tables

  vswitch_id     = alicloud_vswitch.example_vsw[each.value.vswitch_key].id
  route_table_id = alicloud_route_table.example_route_table[each.key].id
}

# Specify the instance type.
variable "instance_type" {
  default = "ecs.e-c1m1.large"
}

# Specify the image ID.
variable "image_id" {
  default = "aliyun_3_x64_20G_alibase_20221102.vhd"
}

# Create a security group.
resource "alicloud_security_group" "example_security_group" {
  security_group_name = "example_security_group_name"
  vpc_id              = alicloud_vpc.example_vpc.id
}

# Create a security group rule. Modify the protocol and port number as needed.
resource "alicloud_security_group_rule" "allow_Internet" {
  type              = "ingress"
  ip_protocol       = "icmp"
  nic_type          = "intranet"
  policy            = "accept"
  port_range        = "-1/-1"
  priority          = 1
  security_group_id = alicloud_security_group.example_security_group.id
  cidr_ip           = "0.0.0.0/0"
}

# Create multiple servers.
resource "alicloud_instance" "example_instance" {
  for_each = local.instances

  instance_name        = each.value.name
  vswitch_id           = alicloud_vswitch.example_vsw[each.value.vswitch_key].id
  instance_type        = var.instance_type
  image_id             = var.image_id
  system_disk_category = "cloud_essd"
  security_groups      = [alicloud_security_group.example_security_group.id]
  instance_charge_type = "PostPaid"           # Set the billing method to pay-as-you-go.
  spot_strategy        = "SpotWithPriceLimit" # Set the instance as a spot instance for which you can specify a maximum price.
}

# Create multiple EIPs.
resource "alicloud_eip_address" "example_eip" {
  for_each = local.eips

  address_name = each.value.name
  isp          = "BGP"
  netmode      = "public"
  bandwidth    = "1"
  payment_type = "PayAsYouGo"
}

# Associate the ECS instance with an EIP.
resource "alicloud_eip_association" "example_eip_ecs_association" {
  allocation_id = alicloud_eip_address.example_eip["eip1"].id
  instance_type = "EcsInstance"
  instance_id   = alicloud_instance.example_instance["instance1"].id
}

# Create an Internet NAT gateway.
resource "alicloud_nat_gateway" "example_natgw" {
  nat_gateway_name = "example_natgw_name"
  vpc_id           = alicloud_vpc.example_vpc.id
  vswitch_id       = alicloud_vswitch.example_vsw["vsw2"].id
  nat_type         = "Enhanced"
  eip_bind_mode    = "NAT" # Specify the EIP association mode. The value must be NAT.
  payment_type     = "PayAsYouGo"
}

# Associate the EIP with the Internet NAT gateway.
resource "alicloud_eip_association" "example_eip_natgw_association" {
  allocation_id = alicloud_eip_address.example_eip["eip2"].id
  instance_type = "NAT"
  instance_id   = alicloud_nat_gateway.example_natgw.id
}

# Add a route that points to the NAT gateway.
resource "alicloud_route_entry" "example_rt3_route" {
  route_table_id        = alicloud_route_table.example_route_table["rt3"].id
  destination_cidrblock = "0.0.0.0/0"
  nexthop_type          = "NatGateway"
  nexthop_id            = alicloud_nat_gateway.example_natgw.id
}

# Add a route that points to the NAT gateway.
resource "alicloud_route_entry" "example_rt4_route" {
  route_table_id        = alicloud_route_table.example_route_table["rt4"].id
  destination_cidrblock = "0.0.0.0/0"
  nexthop_type          = "NatGateway"
  nexthop_id            = alicloud_nat_gateway.example_natgw.id
}

# Create an SNAT entry.
resource "alicloud_snat_entry" "example_snat_entry" {
  for_each = local.snat_entries

  snat_table_id = alicloud_nat_gateway.example_natgw.snat_table_ids
  source_cidr   = alicloud_instance.example_instance[each.value.instance_key].primary_ip_address
  snat_ip       = alicloud_eip_address.example_eip["eip2"].ip_address
}

# Create an IPv4 gateway.
resource "alicloud_vpc_ipv4_gateway" "example_ipv4gw" {
  ipv4_gateway_name = "example_ipv4gw_name"
  vpc_id            = alicloud_vpc.example_vpc.id
  enabled           = true
}

# Add a route that points to the IPv4 gateway.
resource "alicloud_route_entry" "example_rt1_route" {
  route_table_id        = alicloud_route_table.example_route_table["rt1"].id
  destination_cidrblock = "0.0.0.0/0"
  nexthop_type          = "Ipv4Gateway"
  nexthop_id            = alicloud_vpc_ipv4_gateway.example_ipv4gw.id
}

# Add a route that points to the IPv4 gateway.
resource "alicloud_route_entry" "example_rt2_route" {
  route_table_id        = alicloud_route_table.example_route_table["rt2"].id
  destination_cidrblock = "0.0.0.0/0"
  nexthop_type          = "Ipv4Gateway"
  nexthop_id            = alicloud_vpc_ipv4_gateway.example_ipv4gw.id
}
```

## Privately used public CIDR block

By default, a VPC uses private CIDR blocks defined in RFC 1918, such as `10.0.0.0/8`, `172.16.0.0/12`, and `192.168.0.0/16`. When a VPC connects to an on-premises data center or another VPC that uses a non-standard private CIDR block (for example, `30.0.0.0/16`), requests from cloud resources with Internet access to the non-standard private CIDR block are routed through the Internet, rather than being forwarded based on the configured private route.

After you create and activate an IPv4 gateway for the VPC, the IPv4 gateway centrally controls Internet access, and all traffic is forwarded based on the route table. You must configure a `0.0.0.0/0` route that points to the IPv4 gateway for the vSwitch to allow resources in the vSwitch to directly access the Internet. Based on the longest prefix match rule, traffic destined for ECS02 matches the `30.0.0.0/16` route and is routed to the peer VPC.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2163463771/CAEQVBiBgICfk_vW5hkiIGQ0MDdjNTYwYjQ4OTRiNDZhY2FhMTUwNjU1ZjdhZGM24587943_20240812141836.169.svg)

### **Console**

1.  Go to the [IPv4 Gateway page in the VPC console](https://vpc.console.alibabacloud.com/ipv4/cn-hangzhou/ipv4s). Select the region where the VPC is deployed, and then click **Create IPv4 Gateway**.
    
2.  **Create IPv4 Gateway**: Select the **VPC** that needs to access the non-standard private CIDR block.
    
3.  **Activate IPv4 Gateway**: Select the route table that is associated with the vSwitch that needs to access the non-standard private CIDR block. The system automatically adds a `0.0.0.0/0` route that points to the IPv4 gateway. This ensures that resources in the vSwitch can access the non-standard private CIDR block based on more specific routes.
    
    -   Ensure that the attached route table does not contain a route with the destination CIDR block `0.0.0.0/0`. If it does, click **Activate Later**, delete the route, and then activate the route table again.
        
    -   After activation, the IPv4 gateway centrally controls Internet-bound traffic, and all traffic is forwarded based on the route table.
        
    

### **API**

-   Call [CreateIpv4Gateway](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createipv4gateway) to create an IPv4 gateway.
    
-   Call [EnableVpcIpv4Gateway](/help/en/vpc/developer-reference/api-vpc-2016-04-28-enablevpcipv4gateway) to activate the IPv4 gateway. Set `RouteTableList` to the route table associated with the public vSwitch. If this parameter is not specified, call [CreateRouteEntry](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createrouteentry) to add a `0.0.0.0/0` route that points to the IPv4 gateway.
    

### **Terraform**

Unlike the console, when you activate an IPv4 gateway, the system does not automatically add the `0.0.0.0/0` route pointing to the IPv4 gateway. You must configure the route manually.

> Resource: [alicloud\_vpc](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc), [alicloud\_vswitch](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vswitch), [alicloud\_vpc\_ipv4\_gateway](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_ipv4_gateway), [alicloud\_route\_table](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/route_table), [alicloud\_route\_table\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/route_table_attachment), [alicloud\_vpc\_route\_entry](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_route_entry), [alicloud\_instance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/instance), [alicloud\_security\_group](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/security_group), [alicloud\_security\_group\_rule](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/security_group_rule), [alicloud\_eip\_address](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/eip_address), [alicloud\_eip\_association](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/eip_association), [alicloud\_vpc\_peer\_connection](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_peer_connection)

> Data Sources: [alicloud\_zones](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/zones)

> In this example, the VPCs in the peering connection belong to the same account. When you create a cross-account peering connection, you must also create an [alicloud\_vpc\_peer\_connection\_accepter](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_peer_connection_accepter) to ensure that the peer account accepts the VPC peering connection request.

```
# Specify the region where you want to create the IPv4 gateway.
provider "alicloud" {
  region = "cn-hangzhou"
}

# Automatically obtain the list of zones where vSwitches can be created based on the data source.
data "alicloud_zones" "available_zones" {
  available_resource_creation = "VSwitch" # Query the zones where resources can be created in the VPC.
}

# Specify the instance type.
variable "instance_type" {
  default = "ecs.e-c1m1.large"
}

# Specify the image ID.
variable "image_id" {
  default = "aliyun_3_x64_20G_alibase_20221102.vhd"
}

# Create a VPC.
resource "alicloud_vpc" "example_vpc1" {
  vpc_name   = "example_vpc1_name"
  cidr_block = "10.0.0.0/16" # Specify the CIDR block. 
}

# Create a VPC.
resource "alicloud_vpc" "example_vpc2" {
  vpc_name   = "example_vpc2_name"
  cidr_block = "30.0.0.0/16" # Specify the CIDR block. 
}

# Create a vSwitch.
resource "alicloud_vswitch" "example_vsw1" {
  vswitch_name = "example_vsw1_name"
  cidr_block   = "10.0.1.0/24"
  vpc_id       = alicloud_vpc.example_vpc1.id
  zone_id      = data.alicloud_zones.available_zones.zones.0.id
}

# Create a vSwitch.
resource "alicloud_vswitch" "example_vsw2" {
  vswitch_name = "example_vsw2_name"
  cidr_block   = "30.0.1.0/24"
  vpc_id       = alicloud_vpc.example_vpc2.id
  zone_id      = data.alicloud_zones.available_zones.zones.1.id
}

# Create a security group.
resource "alicloud_security_group" "example_security_group1" {
  security_group_name = "example_security_group1_name"
  vpc_id              = alicloud_vpc.example_vpc1.id
}

# Create a security group rule. Modify the protocol and port number as needed.
resource "alicloud_security_group_rule" "allow_Internet1" {
  type              = "ingress"
  ip_protocol       = "icmp"
  nic_type          = "intranet"
  policy            = "accept"
  port_range        = "-1/-1"
  priority          = 1
  security_group_id = alicloud_security_group.example_security_group1.id
  cidr_ip           = "0.0.0.0/0"
}

# Create a security group.
resource "alicloud_security_group" "example_security_group2" {
  security_group_name = "example_security_group2_name"
  vpc_id              = alicloud_vpc.example_vpc2.id
}

# Create a security group rule. Modify the protocol and port number as needed.
resource "alicloud_security_group_rule" "allow_Internet2" {
  type              = "ingress"
  ip_protocol       = "icmp"
  nic_type          = "intranet"
  policy            = "accept"
  port_range        = "-1/-1"
  priority          = 1
  security_group_id = alicloud_security_group.example_security_group2.id
  cidr_ip           = "0.0.0.0/0"
}

# Create an ECS instance.
resource "alicloud_instance" "example_instance1" {
  instance_name        = "example_instance1_name"
  vswitch_id           = alicloud_vswitch.example_vsw1.id
  instance_type        = var.instance_type
  image_id             = var.image_id
  system_disk_category = "cloud_essd"
  security_groups      = [alicloud_security_group.example_security_group1.id]
  instance_charge_type = "PostPaid"
  spot_strategy        = "SpotWithPriceLimit"
}

# Create an EIP.
resource "alicloud_eip_address" "example_eip" {
  address_name = "example_eip_name"
  isp          = "BGP"
  netmode      = "public"
  bandwidth    = "1"
  payment_type = "PayAsYouGo"
}

# Associate the ECS instance with an EIP.
resource "alicloud_eip_association" "example_eip_ecs_association" {
  allocation_id = alicloud_eip_address.example_eip.id
  instance_type = "EcsInstance"
  instance_id   = alicloud_instance.example_instance1.id
}

# Create an ECS instance.
resource "alicloud_instance" "example_instance2" {
  instance_name        = "example_instance2_name"
  vswitch_id           = alicloud_vswitch.example_vsw2.id
  instance_type        = var.instance_type
  image_id             = var.image_id
  system_disk_category = "cloud_essd"
  security_groups      = [alicloud_security_group.example_security_group2.id]
  instance_charge_type = "PostPaid"
  spot_strategy        = "SpotWithPriceLimit"
}

# Create a custom route table.
resource "alicloud_route_table" "example_route_table1" {
  route_table_name = "example_route_table1_name"
  vpc_id           = alicloud_vpc.example_vpc1.id
}

# Associate the route table with the vSwitch.
resource "alicloud_route_table_attachment" "example_route_table_attachment1" {
  vswitch_id     = alicloud_vswitch.example_vsw1.id
  route_table_id = alicloud_route_table.example_route_table1.id
}

# Create a custom route table.
resource "alicloud_route_table" "example_route_table2" {
  route_table_name = "example_route_table2_name"
  vpc_id           = alicloud_vpc.example_vpc2.id
}

# Associate the route table with the vSwitch.
resource "alicloud_route_table_attachment" "example_route_table_attachment2" {
  vswitch_id     = alicloud_vswitch.example_vsw2.id
  route_table_id = alicloud_route_table.example_route_table2.id
}

# Create a VPC peering connection.
resource "alicloud_vpc_peer_connection" "example_vpc_peer" {
  peer_connection_name = "example_vpc_peer_name"
  vpc_id               = alicloud_vpc.example_vpc1.id
  accepting_ali_uid    = "1234****" # The ID of the account to which the peer VPC belongs. In this example, a same-account VPC peering connection is created. If you create a cross-account peering connection, you must create an alicloud_vpc_peer_connection_accepter to make sure that the peer account accepts the VPC peering connection request.
  accepting_region_id  = "cn-hangzhou"
  accepting_vpc_id     = alicloud_vpc.example_vpc2.id
}

# Configure a route for the peering connection.
resource "alicloud_route_entry" "example_peer_route1" {
  route_table_id        = alicloud_route_table.example_route_table1.id
  destination_cidrblock = "30.0.0.0/16"
  nexthop_type          = "VpcPeer"
  nexthop_id            = alicloud_vpc_peer_connection.example_vpc_peer.id
}

# Configure a route for the peering connection.
resource "alicloud_route_entry" "example_peer_route2" {
  route_table_id        = alicloud_route_table.example_route_table2.id
  destination_cidrblock = "10.0.0.0/16"
  nexthop_type          = "VpcPeer"
  nexthop_id            = alicloud_vpc_peer_connection.example_vpc_peer.id
}

# Create an IPv4 gateway.
resource "alicloud_vpc_ipv4_gateway" "example_ipv4gw" {
  ipv4_gateway_name = "example_ipv4gw_name"
  vpc_id            = alicloud_vpc.example_vpc1.id
  enabled           = true
}

# Add a route that points to the IPv4 gateway.
resource "alicloud_route_entry" "example_igw_route" {
  route_table_id        = alicloud_route_table.example_route_table1.id
  destination_cidrblock = "0.0.0.0/0"
  nexthop_type          = "Ipv4Gateway"
  nexthop_id            = alicloud_vpc_ipv4_gateway.example_ipv4gw.id
}
```

## Redirect inbound Internet traffic to a third-party security device

An IPv4 gateway can only centrally control outbound Internet traffic. For inbound Internet traffic to a VPC, use a [gateway route table](/help/en/vpc/use-the-gateway-route-table-to-control-traffic-entering-the-vpc) attached to the IPv4 gateway to redirect the traffic to a security device for deep inspection and filtering. This helps prevent malicious attacks and unauthorized access, and provides security protection. You can also use a custom route table to redirect outbound traffic to the security device for comprehensive inbound and outbound security protection.

> An IPv4 gateway can be attached only to a gateway route table, which is a type of route table for border gateways. Each VPC supports only one IPv4 gateway and one gateway route table. They are attached in a one-to-one manner.

> To redirect inbound traffic, modify the system route entry in the gateway route table and set the next hop for the vSwitch CIDR block to the security appliance. You cannot create a custom route in a gateway route table by click **Add Route Entry**.

### **Single-point architecture**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2163463771/CAEQVBiBgMDb3P3W5hkiIGIwODk4NGJmODFjZTRkYTU5ODFiMTRjM2MyNWZmYTBh4537623_20240724152005.068.svg)

### **GWLB high availability architecture**

In a single-point architecture, the failure of a security device affects the availability of your business system. A [Gateway Load Balancer (GWLB)](/help/en/slb/gateway-based-load-balancing-gwlb/getting-started/gwlb-quickly-implements-load-balancing-for-ipv4-services) lets you deploy security devices in a highly available manner and eliminate single points of failure.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2163463771/CAEQVBiBgMCAov_W5hkiIDAyNGE1YWVkMzBjMjRlNjhhYmUwNTc4MGE3MDMxY2Vl4537623_20240724152005.068.svg)

**Inbound IPv4 Internet traffic path**

**Outbound IPv4 Internet traffic path**

1\. IPv4 traffic enters the business VPC through the IPv4 gateway.

2\. Based on the gateway route table, the traffic is sent to the Gateway Load Balancer endpoint (GWLBe).

3\. The GWLBe forwards the traffic to the GWLB. The GWLB then forwards the traffic to a security device.

4\. After the security device completes the security check, the traffic is returned to the GWLB and then to the GWLBe through PrivateLink.

5\. Based on the route table configured for the GWLBe subnet, the traffic is sent to the business server.

1\. Based on the route table configured for the business server subnet, the traffic is sent to the GWLBe.

2\. The GWLBe forwards the traffic to the GWLB. The GWLB then forwards the traffic to a security device.

3\. After the security device completes the security check, the traffic is returned to the GWLB and then to the GWLBe through PrivateLink.

4\. Based on the route table configured for the GWLBe subnet, the traffic is sent to the IPv4 gateway.

5\. The IPv4 gateway routes the traffic to the Internet.

To configure the gateway route table, find the system route for the target vSwitch CIDR block. In the **Actions** column, click **Edit**. Set the Gateway Load Balancer endpoint as the next hop. After saving the change, the route entry appears on the **Custom Route** tab.

### **Console**

#### **Attach a gateway route table**

On the details page of the target IPv4 gateway, click **Bind**. Alternatively, on the **Associated Border Gateway** tab of the details page of the target gateway route table, click **Associate Border Gateway** and select the target IPv4 gateway.

#### **Detach a gateway route table**

On the details page of the target IPv4 gateway, or on the **Associated Border Gateway** tab of the details page of the target gateway route table, click **Unbind**.

### **API**

-   Call [AssociateRouteTableWithGateway](/help/en/vpc/developer-reference/api-vpc-2016-04-28-associateroutetablewithgateway) to attach a gateway route table.
    
-   Call [DissociateRouteTableFromGateway](/help/en/vpc/developer-reference/api-vpc-2016-04-28-dissociateroutetablefromgateway) to detach a gateway route table.
    

### **Terraform**

> Resource: [alicloud\_vpc\_gateway\_route\_table\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_gateway_route_table_attachment)

```
# Specify the region where the IPv4 gateway is deployed.
provider "alicloud" {
  region = "cn-hangzhou"
}

# Specify the ID of the IPv4 gateway.
variable "ipv4_gateway_id" {
  default = "ipv4gw-hp3v******" # Replace the value with the actual ID of the IPv4 gateway.
}

# Specify the ID of the gateway route table.
variable "route_table_id" {
  default = "vtb-hp3w******" # Replace the value with the actual ID of the gateway route table.
}

# Attach the gateway route table.
resource "alicloud_vpc_gateway_route_table_attachment" "example_attachment" {
  ipv4_gateway_id = var.ipv4_gateway_id
  route_table_id  = var.route_table_id
}
```

## More information

### **Limits**

-   A VPC supports only one IPv4 gateway, and an IPv4 gateway can be associated with only one VPC.
    
-   You cannot create an IPv4 gateway if resources that work in [cut-through mode](/help/en/eip/associate-an-eip-with-a-secondary-eni-1#title-euo-0vm-cvz) exist in the VPC.
    
    For example, if the EIP association mode of an Internet NAT gateway in the VPC is set to the multi-EIP-to-ENI mode, the Internet NAT gateway is incompatible with an IPv4 gateway. Call the [ModifyNatGatewayAttribute](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-modifynatgatewayattribute-natgws) operation to change the `EipBindMode` to `NAT` mode to ensure compatibility.
    
-   In a shared VPC scenario, the resource owner can create, modify, or delete an IPv4 gateway, but the principal does not have permissions to perform these operations.
    
-   When you attach an EIP or an Anycast EIP to a private-facing Classic Load Balancer (CLB) instance:
    
    -   In UK (London), Japan (Tokyo), SAU (Riyadh - Partner Region), Malaysia (Kuala Lumpur), China (Hohhot), and US (Virginia), Internet access traffic is also restricted by the IPv4 gateway.
        
        > The supported regions are subject to change.
        
        -   A private-facing CLB instance that is deployed in a public vSwitch can access the Internet after a public IP address is attached to it.
            
        -   A private-facing CLB instance deployed in a private vSwitch cannot access the Internet even if a public IP address is attached. You can configure a route that points to an Internet NAT gateway to route Internet-bound traffic to the Internet NAT gateway. This way, the CLB instance can use the public IP address of the Internet NAT gateway to access the Internet.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2163463771/CAEQVBiBgICPrYDX5hkiIDM2NjllNTRiYWQ5OTRlYzc5YTEwODA5MjRmMDkxZDk25415840_20250701223050.768.svg)
    -   In other regions, Internet access traffic is not restricted by the IPv4 gateway.
        

### **Billing**

IPv4 gateways are free of charge.

Data transfer costs are generated by public IP addresses, such as EIPs or static public IP addresses of ECS or CLB instances. For more information, see the billing documentation for the related products.

### **Supported regions**

**Area**

**Regions that support IPv4 gateways**

Asia-Pacific - China

China (Hangzhou), China (Shanghai), China (Nanjing - Local Region - Decommissioning), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), China (Wuhan - Local Region), China (Fuzhou - Local Region - Decommissioning)

Asia-Pacific - Other

Japan (Tokyo), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok)

Europe and Americas

Germany (Frankfurt), UK (London), US (Silicon Valley), US (Virginia), Mexico

Middle East

UAE (Dubai), SAU (Riyadh - Partner Region)

### **Quotas**

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
