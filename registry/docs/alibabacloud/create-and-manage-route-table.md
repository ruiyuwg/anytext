A Route Table determines the Forwarding Path for Network Traffic within a Virtual Private Cloud (VPC). You can configure Routes in the table to direct Packets from a Source, such as an ECS Instance, to a Destination.

## **Features**

### **Route tables**

When you create a Virtual Private Cloud (VPC), the system automatically creates a **System Route Table**. By default, this route table is associated with all vSwitches in the VPC and controls traffic within the VPC.

If different Elastic Compute Service (ECS) instances in a VPC need to use different network paths to access the same destination CIDR block, you can use a **Custom Route Table**. By deploying the ECS instances on different vSwitches and associating a unique Custom Route Table with each vSwitch, you can achieve fine-grained traffic control.

To protect inbound Internet traffic to your VPC with a self-managed firewall, you can use a **Gateway Route Table**, which is a type of Custom Route Table associated with a Border Gateway. By associating the Gateway Route Table with an IPv4/IPv6 Gateway, you can direct inbound Internet traffic to a self-managed firewall for centralized filtering, auditing, and security policy management.

The following table compares the different types of route tables.

**Feature**

**System Route Table**

**Custom Route Table**

Associated object

vSwitch

vSwitch

IPv4/IPv6 Gateway

Diagram

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6179893771/CAEQUBiBgICi1Iea2RkiIGE4OTYwOTRhOTQ2OTQ0NjI4ZTMzMzk1YWI3NmNkNmQx5274221_20250627113930.173.svg)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6179893771/CAEQSxiBgIDyoOSkxxkiIDkxZTBlMjU4ODQ1ZDQwMmY5MGExZTFlMjZlMTU4ZDU35274221_20250627113930.173.svg)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6179893771/CAEQTxiBgICqpeiy0xkiIGYwNzRhNjkzZTU1ZTQ1ZWVhMzY0NTczN2MxMzExNGZi5274221_20250627113930.173.svg)

Use cases

Associates with all new vSwitches by default to **centrally control their traffic**.

Associates with specific vSwitches to **control their individual traffic flow**.

Associates with an IPv4/IPv6 Gateway to **securely redirect inbound Internet traffic**.

Creation method

**Created automatically** when you create a VPC.

**Created manually**. Select vSwitch as the route table type.

**Created manually**. Select Border Gateway as the route table type.

Deletion

Cannot be deleted.

Can be deleted. You must first disassociate it from the vSwitch.

Can be deleted. You must first disassociate it from the IPv4/IPv6 Gateway.

Quota

One System Route Table per VPC.

By default, a VPC supports up to nine Custom Route Tables associated with vSwitches. You can [request a quota increase](https://vpc.console.alibabacloud.com/quota).

A VPC supports only one route table associated with an IPv4/IPv6 Gateway.

> Each vSwitch must be associated with exactly one Route Table. A single Route Table can be associated with multiple vSwitches.

### **Routes**

A route is an entry in a Route Table. It defines the **Next Hop**, such as a NAT Gateway or an ECS Instance, that forwards traffic to a specific **Destination CIDR Block**.

Routes in a VPC are classified into two types:

[1\. Static Routes](#9b71ab35fatxe): System-added or user-added routes.

[2\. Dynamic Routes](#53d7bde2f2nux): Routes that are propagated to a VPC from other network instances, such as a Transit Router (TR) or VPN Gateway.

#### **1\. Static routes**

Static routes include two types:

-   **System Route**: A route with a Next Hop of `Local`. The system automatically adds this type of route when you create a VPC and a vSwitch. These routes are used for communication between instances within the VPC or to access Alibaba Cloud services.
    
-   **Custom Route**: A route that you manually add to customize traffic paths.
    

As shown in the following figure, two VPCs are connected through a VPC Peering Connection. The System Route Table of `VPC1` contains the following static routes:

1.  After you create a VPC and a vSwitch, the system automatically adds System Routes with the Next Hop set to `Local`:
    
    1.  Alibaba Cloud service route: The Destination CIDR Block is `100.64.0.0/10`. This route allows instances in VPC1 to access Alibaba Cloud services.
        
    2.  vSwitch route: The Destination CIDR Block is `10.0.0.0/24`. This route allows private communication between vSwitches in VPC1.
        
2.  After you create the VPC Peering Connection, you must manually add the following Custom Route:
    
    The Destination CIDR Block is `172.16.0.0/16` and the Next Hop is the `VPC Peering Connection`. This route forwards traffic destined for `VPC2` to the VPC Peering Connection.
    

The routes in the System Route Table of `VPC2` follow the same principle as those in `VPC1` and are not described further.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6179893771/CAEQUBiBgMDU_76c2RkiIGE4NTJhYzk4NmMyZDRlM2I5ZjBiNmY0NDIyZWQyOTU25274221_20250627113930.173.svg)

##### **System routes vs. custom routes**

**Item**

**System route**

**Custom route**

Definition

A route with a Next Hop of `Local`. The system automatically adds this type of route when you create a VPC and a vSwitch.

A route that you manually add.

IPv4 route

The system automatically adds the following routes to all route tables in the VPC:

-   vSwitch route: A route whose Destination CIDR Block is the CIDR block of any vSwitch in the VPC. This route enables communication between instances within the vSwitch.
    
-   Alibaba Cloud service route: A route whose Destination CIDR Block is `100.64.0.0/10`. This route allows instances in the VPC to access Alibaba Cloud services.
    
    > You can create a Custom Route with a Destination CIDR Block that is more specific than the 100.64.0.0/10 System Route for an Alibaba Cloud Service, but the CIDR blocks cannot be the same. Exercise caution when you configure more specific routes. Misconfigurations can disrupt access to some Alibaba Cloud services.
    

You can manually add the following routes:

-   Destination CIDR block: A custom **IPv4 CIDR block** or a **[VPC Prefix List](/help/en/vpc/vpc-prefix-lists#section-vv0-mox-r0m)**.
    
-   Next Hop: You can select **IPv4 gateway**, **NAT Gateway**, **VPC Peering Connection**, **Transit Router (TR)**, **VPN Gateway**, **ECS Instance**, **Elastic Network Interface (ENI)**, **High-Availability Virtual IP (HaVip)**, **router interface (to VBR)**, **router interface (to VPC)**, **Express Connect Router (ECR)**, or **Gateway Load Balancer Endpoint**.
    
    For information about typical scenarios for different Next Hop types, see [Configuration examples](#00636f079b26x).
    

IPv6 route

If [IPv6 is enabled](/help/en/vpc/vpc-and-vswitch#bcba086dd7hsy) for the VPC, the system automatically adds the following route to all route tables in the VPC:

-   vSwitch route: A route whose Destination CIDR Block is the IPv6 CIDR block of the vSwitch. This route enables communication between instances within the vSwitch over IPv6.
    

If [IPv6 is enabled](/help/en/vpc/vpc-and-vswitch#bcba086dd7hsy) for the VPC, you can add routes with the following parameters:

-   Destination CIDR block: A custom **IPv6 CIDR block** or a **[VPC Prefix List](/help/en/vpc/vpc-prefix-lists#section-vv0-mox-r0m)**.
    
-   Next Hop: You can select **ECS Instance**, **IPv6 gateway**, **ENI**, **router interface (to VBR)**, **Express Connect Router (ECR)**, **VPC Peering Connection**, **Gateway Load Balancer Endpoint**, or **Transit Router (TR)**.
    
    For information about typical scenarios for different Next Hop types, see [Configuration examples](#00636f079b26x).
    

Can the Next Hop be changed?

-   System Routes in a System Route Table: The Next Hop cannot be changed.
    
-   System Routes in a custom Route Table:
    
    The Next Hop can be changed to an **ECS Instance**, **ENI**, or **Gateway Load Balancer Endpoint**. After the change, the route becomes a Custom Route.
    

[The Next Hop can be changed.](#e60d4b9897jdo)

> If a Custom Route was created by changing the Next Hop of a System Route, the Next Hop of this Custom Route can be changed only to Local, an ECS Instance, an ENI, or a Gateway Load Balancer Endpoint.

Can it be manually created?

You cannot manually create or delete System Routes.

You can create and delete them.

#### **2\. Dynamic routes**

Dynamic routes are routes propagated to a VPC from other network instances. Unlike static routes, you do not need to manually configure dynamic routes in the VPC Route Table. They are automatically learned and updated from dynamic route sources.

##### **2.1 Dynamic route sources**

Network instances that automatically propagate routes to a VPC include Enterprise Edition Transit Routers (TRs), Basic Edition Transit Routers (TRs), VPN Gateways, and Express Connect Routers (ECRs). You can view the source and details of dynamic routes on the **Route Entry List** > **Dynamic Route** tab of the Route Table details page in the console.

> The details of routes received from an Enterprise Edition TR are displayed on the **Route Entry List** > **Custom Route** tab.

##### **2.2 Enable or disable dynamic route receiving**

By default, all Route Tables receive dynamic routes. If you require a purely static routing configuration, you can [disable dynamic route receiving](#0c86115a62ptv) for a specific Route Table. This allows for flexible management of your routing configurations.

##### **2.3 Dynamic route limitations**

-   A VPC Route Table can receive dynamic routes from only one dynamic route source at a time.
    
    For example, after you associate a VPC with an ECR and then connect it to an Enterprise Edition TR, an attempt to enable [route synchronization](/help/en/cen/user-guide/route-synchronization) for the VPC on the TR will fail. Similarly, after you create a VPN Gateway and [enable automatic BGP route propagation](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-bgp-dynamic-routing#77c5049e07fwz), BGP routes learned by the VPN Gateway are automatically propagated to the System Route Table of the VPC. In this state, you cannot associate the VPC with an ECR.
    
-   If a received dynamic route overlaps with an existing route in the Route Table, see [Route Priority](#c804267ebc3s5) to determine which route takes precedence.
    
-   Only Route Tables associated with vSwitches can receive dynamic routes. Route Tables associated with gateways do not support dynamic routes.
    
-   By default, a single Route Table supports a maximum of 200 active dynamic routes from an ECR. Routes that exceed this quota are received but remain inactive. When you increase the quota, the new limit applies on the next route propagation. Inactive routes are then enabled in the order they were received.
    

### **Route priority**

Routes in a VPC Route Table are prioritized as follows:

-   **When routes with overlapping Destination CIDR Blocks exist:**
    
    IPv4 and IPv6 traffic are routed independently. The system uses the **Longest Prefix Match** rule to select the most specific route that matches the destination IP address. This determines the Next Hop for traffic forwarding.
    
    > Longest Prefix Match: When multiple routes have Destination CIDR Blocks that match a packet's destination IP address, the system uses the route with the longest subnet mask (the most specific network range). For example, traffic destined for `192.168.1.100` matches the `192.168.1.0/24` route before it matches the `192.168.0.0/16` route.
    
-   **When the Destination CIDR Block of a new route overlaps with that of an existing route:**
    
    **Actions**
    
    **Existing system route**
    
    **Existing custom route**
    
    **Existing dynamic route**
    
    Create a vSwitch
    
    The CIDR block of the vSwitch cannot overlap with an existing System Route.
    
    The CIDR block of the vSwitch cannot:
    
    -   Be identical to the Destination CIDR Block of an existing Custom Route.
        
    -   Contain the Destination CIDR Block of an existing Custom Route.
        
    
    The CIDR block of the vSwitch cannot:
    
    -   Be identical to the Destination CIDR Block of an existing Dynamic Route.
        
    -   Contain the Destination CIDR Block of an existing Dynamic Route.
        
    
    Add a Custom Route
    
    The Destination CIDR Block of the new Custom Route cannot:
    
    -   Be identical to the CIDR block of an existing System Route.
        
    -   Be more specific than an existing System Route.
        
    
    The Destination CIDR Block of the new Custom Route cannot be identical to that of an existing Custom Route.
    
    > If the **Next Hop type** is **router interface (to VBR)**, you can configure active/standby or equal-cost multi-path (ECMP) routes. For more information, see [Route to a router interface](#2ea73d8946bv4).
    
    When you add a Custom Route, its Destination CIDR Block cannot be identical to that of an existing Dynamic Route.
    
    > If the Next Hop of the new Custom Route is a VPN Gateway or router interface, and an existing Dynamic Route from CEN has the same Destination CIDR Block, the Dynamic Route is withdrawn and the Custom Route takes effect.
    
    Receive a dynamic route
    
    -   Cannot have the same Destination CIDR Block as an existing System Route.
        
    -   If it is more specific than an existing System Route, the dynamic route does not take effect:
        
        -   If the route source is an ECR, the dynamic route is displayed in the VPC Route Table but does not take effect.
            
        -   If the route source is a VPN Gateway, Enterprise Edition Transit Router (TR), or Basic Edition Transit Router (TR), the dynamic route is not propagated to the VPC Route Table.
            
    
    If it has the same Destination CIDR Block as an existing Custom Route, the dynamic route does not take effect.
    
    -   If the route source is an ECR, the dynamic route is displayed in the VPC Route Table but does not take effect.
        
    -   If the route source is a VPN Gateway, Enterprise Edition Transit Router (TR), or Basic Edition Transit Router (TR), the dynamic route is not propagated to the VPC Route Table.
        
    
    After the Custom Route is deleted, the dynamic route automatically takes effect.
    
    Not supported. The current VPC Route Table has [only one route propagation source](#83416637b5yrz).
    

## **Manage route tables**

When you create a Virtual Private Cloud (VPC), the system automatically creates a System Route Table. By default, this route table is associated with all vSwitches to control their traffic.

To control traffic for a specific vSwitch in a VPC, create a Custom Route Table of the **vSwitch** type and associate it with the vSwitch.

To control inbound traffic from the Internet to a VPC, create a Custom Route Table of the **Border Gateway** type and then associate it with an IPv4/IPv6 Gateway.

### **Create and delete route tables**

Create a Custom Route Table before you associate it with a vSwitch or an IPv4/IPv6 Gateway.

## Console

#### **Create a route table**

1.  Navigate to the [Route Tables](https://vpc.console.alibabacloud.com/vpc/cn-hangzhou/route-tables) page in the VPC console and click **Create Route Table**.
    
2.  Select the target **VPC**, enter a **Name**, and select an **Object Type** to associate:
    
    -   **vSwitch**: After you [associate this route table with a vSwitch](#ff9153b7e3b0u), you can control the traffic path for that specific vSwitch.
        
    -   **Border Gateway**: After you [associate this route table with an IPv4/IPv6 Gateway](#ff9153b7e3b0u), you can control the path of inbound traffic from the Internet to the VPC.
        
    

After you create a Custom Route Table, the system automatically adds the following system Route Entries:

-   vSwitch CIDR block route: A Route Entry whose destination is the CIDR block of any vSwitch in the VPC. This Route Entry enables communication among instances within the VPC.
    
-   Cloud service route: A Route Entry whose destination CIDR block is `100.64.0.0/10`. This Route Entry allows instances in the VPC to access Alibaba Cloud services.
    

#### **Delete a route table**

In the **Actions** column of the target Route Table or on its details page, click **Delete**. Before deleting a Route Table, ensure it is [unassociated](#ff9153b7e3b0u) from all resources and all its [custom Route Entries](#1eaf08adb3g73) are deleted.

> Only Custom Route Tables can be deleted. System Route Tables cannot be deleted.

## API

-   Call [CreateRouteTable](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createroutetable) to create a Route Table.
    
-   Call [DeleteRouteTable](/help/en/vpc/developer-reference/api-vpc-2016-04-28-deleteroutetable) to delete a Custom Route Table.
    

## Terraform

> Resources: [alicloud\_route\_table](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/route_table)

```
variable "name" {
  default = "terraform-example"
}

resource "alicloud_vpc" "defaultVpc" {
  vpc_name = var.name
}


resource "alicloud_route_table" "default" {
  description      = "test-description"
  vpc_id           = alicloud_vpc.defaultVpc.id
  route_table_name = var.name
  associate_type   = "VSwitch"
}
```

### **Associate and unassociate route tables**

By default, a new Custom Route Table is not associated with any resource. You must associate it with a vSwitch or an IPv4/IPv6 Gateway for it to take effect.

## Console

#### **Associate a route table**

Navigate to the [Route Tables](https://vpc.console.alibabacloud.com/vpc/cn-hangzhou/route-tables) page in the VPC console. In the **Associated Resource** column of the target Route Table, click **Associate**.

-   If the route table's **Object Type** is **vSwitch**: Click **Associate vSwitch**, and then select the target **vSwitch** in the dialog box that appears.
    
    When you associate a vSwitch with a Custom Route Table, the system automatically unassociates it from the System Route Table.
    
-   If the route table's **Object Type** is **Border Gateway**: Click **Associate Border Gateway**, and then select the target **IPv4 Gateway** or **IPv6 Gateway** in the dialog box that appears.
    
    For a tutorial on using a Route Table that is associated with a Border Gateway, see [Use a gateway route table to control inbound traffic to a VPC](/help/en/vpc/use-the-gateway-route-table-to-control-traffic-entering-the-vpc).
    

#### **Unassociate a route table**

Navigate to the details page of the target Route Table.

-   If the route table's **Object Type** is **vSwitch**: On the **Associated vSwitch** tab, select the vSwitches to unassociate, and then click **Unassociate**. After a vSwitch is unassociated, it automatically re-associates with the System Route Table.
    
-   If the route table's **Object Type** is **Border Gateway**: On the **Associated Border Gateway** tab, find the IPv4/IPv6 Gateway and click **Unassociate** in the **Actions** column.
    

**Warning**

Before you unassociate a Route Table, assess the potential impact of the route changes to avoid service disruptions.

## API

-   Call [AssociateRouteTable](/help/en/vpc/developer-reference/api-vpc-2016-04-28-associateroutetable) to associate a Route Table with a vSwitch.
    
-   Call [AssociateRouteTableWithGateway](/help/en/vpc/developer-reference/api-vpc-2016-04-28-associateroutetablewithgateway) to associate a Route Table with an IPv4/IPv6 Gateway.
    

**Warning**

Before you unassociate a Route Table, assess the potential impact of the route changes to avoid service disruptions.

-   Call [UnassociateRouteTable](/help/en/vpc/developer-reference/api-vpc-2016-04-28-unassociateroutetable) to unassociate a Route Table from a vSwitch.
    
-   Call [DissociateRouteTableFromGateway](/help/en/vpc/developer-reference/api-vpc-2016-04-28-dissociateroutetablefromgateway) to dissociate a Route Table from an IPv4/IPv6 Gateway.
    

## Terraform

#### **Associate a route table with a vSwitch**

> Resources: [alicloud\_route\_table\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/route_table_attachment)

> Data Sources: [alicloud\_zones](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/zones)

```
variable "name" {
  default = "terraform-example"
}

resource "alicloud_vpc" "foo" {
  cidr_block = "172.16.0.0/12"
  vpc_name   = var.name
}

data "alicloud_zones" "default" {
  available_resource_creation = "VSwitch"
}

resource "alicloud_vswitch" "foo" {
  vpc_id       = alicloud_vpc.foo.id
  cidr_block   = "172.16.0.0/21"
  zone_id      = data.alicloud_zones.default.zones[0].id
  vswitch_name = var.name
}

resource "alicloud_route_table" "foo" {
  vpc_id           = alicloud_vpc.foo.id
  route_table_name = var.name
  description      = "route_table_attachment"
}

resource "alicloud_route_table_attachment" "foo" {
  vswitch_id     = alicloud_vswitch.foo.id
  route_table_id = alicloud_route_table.foo.id
}
```

#### **Associate a route table with a gateway**

> Resources: [alicloud\_vpc\_gateway\_route\_table\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_gateway_route_table_attachment)

```
resource "alicloud_vpc" "example" {
  cidr_block = "172.16.0.0/12"
  vpc_name   = "terraform-example"
}

resource "alicloud_route_table" "example" {
  vpc_id           = alicloud_vpc.example.id
  route_table_name = "terraform-example"
  description      = "terraform-example"
  associate_type   = "Gateway"
}

resource "alicloud_vpc_ipv4_gateway" "example" {
  ipv4_gateway_name = "terraform-example"
  vpc_id            = alicloud_vpc.example.id
  enabled           = true
}

resource "alicloud_vpc_gateway_route_table_attachment" "example" {
  ipv4_gateway_id = alicloud_vpc_ipv4_gateway.example.id
  route_table_id  = alicloud_route_table.example.id
}
```

## Manage route entries

### **Add and delete a route entry**

You can add a `Custom Route` to a `Route Table` for a `VSwitch` to control its traffic path.

You cannot add a `Route Entry` to a `Route Table` that is associated with an IPv4 or IPv6 gateway, but you can [change the next hop of a Route Entry](#e60d4b9897jdo).

## Console

#### **Add a route entry**

1.  Go to the details page of the target `Route Table`. On the **Route Entry List** > **Custom Route** tab, click **Add Route Entry**.
    
2.  In the **Add Route Entry** dialog box, set the **Destination CIDR Block** and **Next Hop Type**. For information about typical scenarios for different `Next Hop` types, see [Configuration examples](#00636f079b26x).
    
    > If you encounter an error when adding the `Route Entry`, check whether the configuration meets the [route priority](#c804267ebc3s5) requirements.
    

#### **Delete a route entry**

In the **Actions** column of the target `Route Entry`, click **Delete**.

**Warning**

Before deleting a `Route Entry`, fully assess the business impact to avoid service disruptions.

## API

-   Use the [CreateRouteEntry](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createrouteentry) operation to add a single `Route Entry` and the [CreateRouteEntries](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createrouteentries) operation to add `Route Entries` in batches.
    

**Warning**

Before deleting a `Route Entry`, fully assess the business impact to avoid service disruptions.

-   Use the [DeleteRouteEntry](/help/en/vpc/developer-reference/api-vpc-2016-04-28-deleterouteentry) operation to delete a single `Custom Route` and the [DeleteRouteEntries](/help/en/vpc/developer-reference/api-vpc-2016-04-28-deleterouteentries) operation to delete `Custom Routes` in batches.
    

## Terraform

> Resource: [alicloud\_route\_entry](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/route_entry)

```
resource "alicloud_route_entry" "foo" {
  route_table_id        = "rt-12345xxxx" # Specify the route table ID. 
  destination_cidrblock = "172.16.1.1/32"
  nexthop_type          = "Instance" # Specify the next hop type. 
  nexthop_id            = "i-12345xxxx" # Specify the next hop instance ID. 
}
```

### **Change the next hop**

You can change the `Next Hop` of a `Route Entry` to change the traffic path for the `Destination CIDR Block`.

-   `System Route`: You can change the `Next Hop` of a `System Route` only if it is in a custom `Route Table` (including a gateway `Route Table`). After the change, the `Route Entry` becomes a `Custom Route`. If you delete this `Custom Route`, the original `System Route` is restored.
    
-   `Custom Route`: You can change the `Next Hop` of a `Custom Route` in both system and custom `Route Tables`.
    

For information about the supported types for **Destination CIDR Block** and **Next Hop**, see [System routes vs. custom routes](#762a5bbed5ep1).

**Warning**

Before changing the `Next Hop` of a `Route Entry`, fully assess the business impact to avoid service disruptions.

## Console

In the **Actions** column of the target `Route Entry`, click **Edit**. In the dialog box that appears, select a new `Next Hop` from the **Next Hop Type** drop-down list.

For information about typical scenarios for different `Next Hop` types, see [Configuration examples](#00636f079b26x).

## API

-   Call the [ModifyRouteEntry](/help/en/vpc/developer-reference/api-vpc-2016-04-28-modifyrouteentry) operation to change the `Next Hop` of a `Route Entry` in a `Route Table` associated with a `VSwitch`.
    
-   Call the [UpdateGatewayRouteTableEntryAttribute](/help/en/vpc/developer-reference/api-vpc-2016-04-28-updategatewayroutetableentryattribute) operation to change the `Next Hop` of a `Route Entry` in a `Route Table` associated with an IPv4/IPv6 gateway.
    

### **Publish and withdraw a static route**

`Route Entries` in a `Route Table` can be published to an `Express Connect Router` (ECR) or a `Transit Router` (TR). Combined with `Dynamic Route Receiving`, this feature simplifies your route configuration.

-   `Publish static routes to an Express Connect Router (ECR)`: After a static route is published to an ECR, the ECR dynamically propagates the route to an on-premises data center. If no `Route Conflict` exists, all on-premises data centers associated with the ECR can learn this route.
    
    **ECR route publishing**
    
    **How it works**
    
    -   After a `Virtual Private Cloud` is associated with an ECR, the `System Routes` of the `Virtual Private Cloud` are published to the ECR by default.
        
    -   After you publish a static route to an ECR:
        
        -   The ECR propagates the route to its associated `Virtual Border Router` (VBR). If BGP is enabled on the VBR, the route is then propagated to the on-premises data center.
            
        -   The ECR does not propagate the route to other `Virtual Private Cloud` networks associated with it.
            
    -   If a published static route conflicts with an existing route, you can view the `Route Entry` on the **Routes** tab of the ECR. The status of the `Route Entry` is displayed as **Conflicting** and the route does not become **Active**.
        
    
    **Limitations**
    
    -   `Route Entries` that are configured in a custom `Virtual Private Cloud` `Route Table` cannot be published to an ECR.
        
    -   A `Route Entry` whose `Destination CIDR Block` is a prefix list cannot be published to an ECR.
        
    -   Active/standby routes and Equal-Cost Multi-Path (ECMP) routes whose `Next Hop` is a router interface (to VBR) cannot be published to an ECR. After a `Virtual Private Cloud` route is published to an ECR, you can no longer configure ECMP or active/standby routes for that `Route Entry`.
        
    -   After a `Virtual Private Cloud` route is published to an ECR, if you modify the `Route Entry`, you can set the `Next Hop` only to a type that **supports publishing**, as described in the following table.
        
    -   The following table lists the default advertisement status for different types of `Route Entries` and indicates whether `Publish` and `Withdraw` operations are supported.
        
        **Route entry advertisement status**
        
        **Route type**
        
        **Route entry instance**
        
        **Published by default**
        
        **Publish supported**
        
        **Withdraw supported**
        
        VPC `System Route`
        
        VPC
        
        Yes
        
        Yes
        
        Supported only in the Malaysia (Kuala Lumpur) region.
        
        `Route Entry` to an IPv4 gateway
        
        VPC
        
        No
        
        Yes
        
        Yes
        
        `Route Entry` to an IPv6 gateway
        
        VPC
        
        No
        
        Yes
        
        Yes
        
        `Route Entry` to a `NAT Gateway`
        
        VPC
        
        No
        
        Yes
        
        Yes
        
        `Route Entry` to a VPC peering connection
        
        VPC
        
        No
        
        Not supported
        
        Not supported
        
        `Route Entry` to a `Transit Router`
        
        VPC
        
        No
        
        Not supported
        
        Not supported
        
        `Route Entry` to a `VPN Gateway`
        
        VPC
        
        No
        
        Yes
        
        Yes
        
        `Route Entry` to an ECS instance
        
        VPC
        
        No
        
        Yes
        
        Yes
        
        `Route Entry` to an `Elastic Network Interface` (ENI)
        
        VPC
        
        No
        
        Yes
        
        Yes
        
        `Route Entry` to a `High-Availability Virtual IP` (HaVip)
        
        VPC
        
        No
        
        Yes
        
        Yes
        
        `Route Entry` to a router interface (to VBR)
        
        VPC
        
        No
        
        Not supported
        
        Not supported
        
        `Route Entry` to a router interface (to VPC)
        
        VPC
        
        No
        
        Not supported
        
        Not supported
        
        `Route Entry` to an `Express Connect Router`
        
        VPC
        
        No
        
        Not supported
        
        Not supported
        
        `Route Entry` to a Gateway Load Balancer endpoint
        
        VPC
        
        No
        
        Yes
        
        Yes
        
    
    **Use case**
    
    An enterprise has an on-premises data center and a `Virtual Private Cloud` in the `China (Hangzhou)` region. The enterprise wants to establish stable communication between the `Virtual Private Cloud` and the data center, and ensure that services deployed in the data center can access the internet.
    
    The enterprise can connect the `Virtual Private Cloud` and a VBR to an ECR, create a `NAT Gateway` with an EIP attached, and then publish routes to the ECR. If no `Route Conflict` exists, the on-premises data center can learn the route to the `NAT Gateway` through BGP. This allows the data center to access the internet.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6179893771/CAEQSxiBgMDN2fKkxxkiIGFhMGNmYmI5NzZjMjQxN2E4ODk0YWIzMzc2ZTg5OTli4102057_20231130152056.839.svg)
    
-   [Publish static routes to a Transit Router (TR)](/help/en/cen/user-guide/advertise-routes-to-a-transit-router): After a static route is published to a `Transit Router`, if no `Route Conflict` exists and `route synchronization` is enabled for the TR, all network instances connected to the TR learn this route.
    

If your `Virtual Private Cloud` is connected to both an ECR and a TR, publishing `Route Entries` to the ECR and to the TR are independent of each other.

#### **Console**

##### **Publish a static route entry**

In the **Route Advertisement Status** column of the target `Route Entry`, click **Publish**.

> The **Route Advertisement Status** column is displayed in the console only after the `Virtual Private Cloud` is connected to a TR or an ECR.

##### **Withdraw a published static route entry**

In the **Route Advertisement Status** column of the target `Route Entry`, click **Withdraw**.

> The **Route Advertisement Status** column is displayed in the console only after the `Virtual Private Cloud` is connected to a TR or an ECR.

#### **API**

For an ECR:

-   Call the [PublishVpcRouteEntries](/help/en/vpc/developer-reference/api-vpc-2016-04-28-publishvpcrouteentries) operation to publish static `Route Entries` to an ECR.
    
-   Call the [WithdrawVpcPublishedRouteEntries](/help/en/vpc/developer-reference/api-vpc-2016-04-28-withdrawvpcpublishedrouteentries) operation to withdraw `Route Entries` that have been published to an ECR.
    

For a TR:

-   Call the [PublishRouteEntries](/help/en/cen/developer-reference/api-cbn-2017-09-12-publishrouteentries) operation to publish static `Route Entries` to a TR.
    
-   Call the [WithdrawPublishedRouteEntries](/help/en/cen/developer-reference/api-cbn-2017-09-12-withdrawpublishedrouteentries) operation to withdraw `Route Entries` that have been published to a TR.
    

Tab body

### **Enable and disable dynamic route receiving**

By default, all `Route Tables` receive [dynamic routes](#53d7bde2f2nux). If you require a purely static routing configuration, you can disable `Dynamic Route Receiving` for a specific `Route Table` to manage your routing configurations as needed.

1.  You can disable `Dynamic Route Receiving` if the dynamic route source is **Route Propagation-Type ECR**, or no dynamic routes are propagated to the `Virtual Private Cloud`. If no dynamic routes are propagated to the `Virtual Private Cloud`, **Dynamic Route Source** is not displayed on the **Route Entry List** > **Dynamic Route** tab of the `Route Table` details page.
    
    > You cannot disable `Dynamic Route Receiving` in the following cases: The `Virtual Private Cloud` is connected to a Basic Edition TR. The `Virtual Private Cloud` is connected to an Enterprise Edition TR and [route synchronization](/help/en/cen/user-guide/route-synchronization) is enabled for the `Virtual Private Cloud` on the TR. The `Virtual Private Cloud` is associated with a `VPN Gateway` and [automatic BGP route propagation](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-bgp-dynamic-routing#77c5049e07fwz) is enabled for the `VPN Gateway`.
    
2.  Impact of disabling the feature:
    
    -   The `Virtual Private Cloud` `Route Table` no longer receives routes propagated from other network instances. If dynamic routes exist in the `Route Table`, the system deletes them. Proceed with caution.
        
    -   The `Virtual Private Cloud` cannot be connected to a Basic Edition TR. A TR connected to this `Virtual Private Cloud` cannot enable `route synchronization` for the `Virtual Private Cloud`. You cannot enable `automatic BGP route propagation` for a `VPN Gateway` associated with this `Virtual Private Cloud`.
        
    
3.  Impact of re-enabling the feature after it is disabled:
    
    After you re-enable the feature, the system updates the dynamic routes in the `Virtual Private Cloud` `Route Table` based on the routes propagated from the dynamic route source.
    
    For example, assume that an ECR has four dynamic routes. If you disable this feature, the dynamic routes are cleared from the `Virtual Private Cloud` `Route Table`. If two more `Route Entries` are added to the ECR and you then re-enable this feature, the `Virtual Private Cloud` `Route Table` receives six dynamic routes from the ECR.
    

#### **Console**

Navigate to the **Route Table Details** page of the target `Route Table`. Use the **Accept Advertised Routes** switch to enable or disable `Dynamic Route Receiving`.

**Warning**

Before enabling or disabling `Dynamic Route Receiving`, fully assess the business impact of the route changes to avoid service disruptions.

#### **API**

Call [ModifyRouteTableAttributes](/help/en/vpc/developer-reference/api-vpc-2016-04-28-modifyroutetableattributes) and modify the `RoutePropagationEnable` parameter to enable or disable dynamic route receiving.

**Warning**

Before enabling or disabling `Dynamic Route Receiving`, fully assess the business impact of the route changes to avoid service disruptions.

#### **Terraform**

**Warning**

Before enabling or disabling `Dynamic Route Receiving`, fully assess the business impact of the route changes to avoid service disruptions.

> Resource: [alicloud\_route\_table](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/route_table)

```
variable "name" {
  default = "terraform-example"
}

resource "alicloud_vpc" "defaultVpc" {
  vpc_name = var.name
}

resource "alicloud_route_table" "default" {
  description      = "test-description"
  vpc_id           = alicloud_vpc.defaultVpc.id
  route_table_name = var.name
  associate_type   = "VSwitch"
  route_propagation_enable = true # Modify this parameter to enable or disable Dynamic Route Receiving. 
}
```

## **Use a gateway route table**

A Gateway Route Table lets you direct **Inbound Internet Traffic** to a Security Device for deep inspection and filtering. This helps prevent malicious attacks and unauthorized access. You can also combine a Gateway Route Table with a Custom Route Table to redirect outbound traffic to a Security Device.

To use this feature, create a route table and associate it with an IPv4 Gateway. Then, change the Next Hop of the system route for the vSwitch CIDR block in the route table to one of the following:

-   **ECS Instance**/**Elastic Network Interface (ENI)**: Redirects internet traffic to a specific ECS Instance or ENI for security inspection.
    
-   **Gateway Load Balancer Endpoint (GWLBe)**: Redirects internet traffic to third-party security devices through a Gateway Load Balancer (GWLB).
    
    > Only [these regions](/help/en/slb/gateway-based-load-balancing-gwlb/product-overview/regions-and-zones-supported-by-gwlb#8bca1144aeywx) support changing the Next Hop to a **Gateway Load Balancer Endpoint (GWLBe)**.
    

#### **Using a self-managed firewall**

You can deploy a self-managed firewall on an ECS Instance in a Virtual Private Cloud (VPC) and use a Gateway Route Table to [redirect traffic that enters the VPC to the firewall for filtering](/help/en/vpc/use-the-gateway-route-table-to-control-traffic-entering-the-vpc).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6179893771/CAEQUBiBgIDu7I2a2RkiIGM2ZjM2YTZjYzI1YTQ5YWViNGM3OWU1YWRmYmM4MmQ34537623_20240724152005.068.svg)

#### **GWLB high-availability architecture**

You can [use a Gateway Load Balancer (GWLB)](/help/en/slb/gateway-based-load-balancing-gwlb/getting-started/gwlb-quickly-implements-load-balancing-for-ipv4-services) to distribute traffic among different security devices to improve the security and availability of your applications.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6179893771/CAEQUBiBgMDB6Y6a2RkiIGJiODhiOTIyZGYzNzQ4NWE5MWE0MTEyNjY5ZDk3MTQz4537623_20240724152005.068.svg)

## **Configuration examples**

Different next hop types apply to different scenarios:

-   [Route to an IPv4 Gateway](#ea6c73b21d82e)
    
-   [Route to an IPv6 Gateway](#11df94a849d9a)
    
-   [Route to an Internet NAT Gateway](#b56cbad3ddj37)
    
-   [Route to a VPC Peering Connection](#f38952b52bma0)
    
-   [Route to a Transit Router](#8802cd99be1ci)
    
-   [Route to a VPN Gateway](#b14d47ac173o3)
    
-   [Route to an ECS instance or an Elastic Network Interface (ENI)](#59d6583a56gp1)
    
-   [Route to a router interface](#2ea73d8946bv4)
    
-   [Route to an Express Connect Router (ECR)](#5d7de44adeuxi)
    
-   [Route to a Gateway Load Balancer endpoint](#7757469ea7c92)
    

#### **Route to an IPv4 Gateway**

You can use an [IPv4 Gateway](/help/en/vpc/ipv4-gateway-overview) as a unified ingress and egress point for traffic between your Virtual Private Cloud (VPC) and the internet. When used with a custom route table, an IPv4 Gateway enables centralized control of internet access traffic. This setup helps you implement uniform security policies and simplifies auditing, reducing the security risks of distributed access points.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6179893771/CAEQUBiBgICLr5Wa2RkiIGMzNTc1MjcwNzU0MDQ3N2ZhOTZjMjlhNjg1OTExNjY35415840_20250701223050.768.svg)

#### **Route to an IPv6 Gateway**

After you [enable IPv6](/help/en/vpc/vpc-and-vswitch#bcba086dd7hsy) for a Virtual Private Cloud (VPC), the system automatically adds a route to the **system route table**:

-   The destination CIDR block is `::/0` and the next hop is the IPv6 Gateway.
    

This route directs default IPv6 traffic to the IPv6 Gateway. After you [enable public bandwidth for an IPv6 address](/help/en/ipv6-gateway/user-guide/enable-and-manage-ipv6-internet-bandwidth#section-dvo-wjp-zcb), vSwitches associated with the system route table can communicate with the internet.

For an IPv6-enabled vSwitch associated with a **custom route table**, you must manually add the preceding route to the custom route table to enable IPv6 internet access.

> For a custom route where the next hop is an IPv6 Gateway, the destination CIDR block must be `::/0`.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6179893771/CAEQUBiBgID7jJCa2RkiIDkxMmFlNWU2NGFlYTQ2NGJhNWQ0Y2QyOTA3OWFlZTFk5274221_20250627113930.173.svg)

#### **Route to an Internet NAT Gateway**

If you have many servers that initiate connections to the internet, you can use the source network address translation (SNAT) feature of an [Internet NAT Gateway](/help/en/nat-gateway/user-guide/public-network-nat-gateway). This lets multiple ECS instances in your Virtual Private Cloud (VPC) to share Elastic IP addresses (EIPs) for internet access. This setup saves public IP resources and reduces security risks by not exposing their private IP addresses.

To enable internet access through an Internet NAT Gateway, you must add a custom route to the VPC route table that directs traffic to the gateway.

-   If the VSwitch of an ECS instance is associated with a **custom route table**, you must manually configure a route entry where the **Destination CIDR Block** is `0.0.0.0/0` and the **Next Hop** is the Internet NAT Gateway.
    
-   If the ECS instance's vSwitch is associated with the **system route table****:**
    
    -   If no route with the destination CIDR block `0.0.0.0/0` exists in the system route table, the system automatically adds a route pointing to the Internet NAT Gateway.
        
    -   If a route with the destination CIDR block `0.0.0.0/0` already exists in the system route table, you must first delete the existing route and then add a new route pointing to the Internet NAT Gateway.
        

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7179893771/CAEQSxiBgIDr6ZfOxxkiIGIyMzgzNzIxZjQ5YTQ2MWNhZDMyZDNlMzdkODQ5Y2Q34537623_20240724152005.068.svg)

-   Public vSwitch 10.0.1.0/24
-   VPC 10.0.0.0/16
-   ...
-   Internet
-   next hop
-   NAT Gateway
-   Destination CIDR
-   Elastic IP (EIP)
-   Private vSwitch route table
-   Elastic IP (EIP)
-   ECS 2
-   Private vSwitch 2  10.0.3.0/24
-   0.0.0.0/0
-   Private vSwitch 1  10.0.2.0/24
-   NAT Gateway
-   ECS 1

#### **Route to a VPC Peering Connection**

VPCs are isolated from each other, but you can use a [VPC Peering Connection](/help/en/vpc/vpc-peer-to-peer-connection) to enable private communication between two VPCs in the same or different accounts and regions. After a peering connection is established between two VPCs, cloud resources deployed in the VPCs can access each other by using private IPv4 or IPv6 addresses.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7179893771/CAEQUBiBgMDd85Ca2RkiIDg3ZjA3ODYxOGU3ZTQyMTE4YTk5MGEzMzVhMjYxMGQ55274221_20250627113930.173.svg)

#### **Route to a Transit Router**

When you use [Cloud Enterprise Network (CEN)](/help/en/cen/product-overview/what-is-cen/) to connect VPCs, you must add routes that point to the Transit Router to the VPC route tables. You can do this in one of the following ways:

-   When you create a VPC connection, select **Automatically Create Route That Points to Transit Router and Add to All Route Tables of Current VPC**.
    
    After you enable this feature, the system automatically adds three routes to all route tables of the VPC. The destination CIDR blocks of these routes are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. The next hop for these routes is the VPC connection, which directs IPv4 traffic from the VPC to the Transit Router.
    
-   After you enable [route learning](/help/en/cen/user-guide/route-learning) on the Transit Router, you can either enable [route synchronization](/help/en/cen/user-guide/route-synchronization) for each VPC or manually add a route in each VPC route table that points to the peer VPC.
    

The following figure shows an example where a route is manually added to the VPC route table after route learning is enabled on the Transit Router. The route's destination CIDR block is the CIDR block of the peer VPC, and its next hop is the Transit Router.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7179893771/CAEQUBiBgICxt5Ga2RkiIDllNGYzNjNhMzk5ZjQwOWM5MTdkYWIwZmViOTVhZTYw5274221_20250627113930.173.svg)

#### **Route to a VPN Gateway**

Use a VPN Gateway to establish a secure and reliable encrypted tunnel between an on-premises data center and your VPC.

When you use a VPN Gateway, you must add a route to the VPC. In this route, set the **Destination CIDR block** to the CIDR block of the on-premises data center and set the **next hop** to the **VPN Gateway**. This lets the [VPC access the on-premises data center through an IPsec-VPN connection](/help/en/vpn/sub-product-ipsec-vpn/product-overview/establish-a-connection-between-the-vpc-and-the-on-premises-data).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7179893771/CAEQUBiBgICK.6Wa2RkiIDA2MTNiZDNmNWRhODRhNmU4MzM0NjRlODI4NGNiNjE34587943_20240812144817.536.svg)

#### **Route to an ECS instance or ENI**

When two vSwitches in a VPC need to communicate, you can adjust the route tables to insert a third-party security device, such as a firewall or a Web Application Firewall (WAF), into the traffic path to inspect, analyze, and protect traffic.

To configure this, associate each communicating vSwitch with a separate custom route table. Then, change the next hop of the system route for the corresponding CIDR block to the ECS instance or Elastic Network Interface (ENI) of the firewall.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7179893771/CAEQUBiBgMDig5Ka2RkiIDlhOGZmMWM2MWQ4NzQ4YWFiNzAwM2NmZGQ2MmZiY2Q53963382_20230830144006.372.svg)

#### **Route to a router interface**

The [VBR-to-VPC connection](/help/en/express-connect/user-guide/what-is-a-vbr-to-vpc-connection/) feature of Express Connect lets you connect your on-premises data center to your VPC.

**Note**

The VBR-to-VPC connection feature is not enabled by default. To use it, contact your account manager.

When you use this feature, you must add a route to the VPC. In this route, set the destination CIDR block to the CIDR block of the on-premises data center and set the next hop type to **router interface (to VBR)**. This allows the VPC to access the on-premises data center through the Virtual Border Router (VBR). This next hop type supports **Equal-Cost Multi-Path (ECMP)** and **active/standby** modes. You must use these modes with [health check](/help/en/express-connect/user-guide/configure-and-manage-health-checks):

-   **active/standby**: You can specify only two instances as next hops. The weight of the active route's next hop is 100, and the weight of the standby route's next hop is 0. If the active route's health check fails, the standby route takes over.
    
-   ****ECMP****: You can specify 2 to 16 instances as next hops. Each instance must have the same weight, an integer from 0 to 255. The system evenly distributes traffic among the next hop instances.
    

The following figure shows the active/standby mode:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7179893771/CAEQUBiBgICP8ZKa2RkiIGFmNjJhYTE3ZDBlNDQ0MzZhN2E2NTkyNDg2NWUwMjRm4122902_20231220095134.007.svg)

#### **Route to an Express Connect Router**

You can use an [Express Connect Router (ECR)](/help/en/express-connect/user-guide/ecr/) with Express Connect to connect your on-premises data center to your VPC.

-   By default, a VPC accepts dynamic routes from an ECR. For these routes, the destination CIDR block is the CIDR block of the on-premises data center and the next hop is the ECR. This configuration enables communication between the VPC and the on-premises data center.
    
-   If dynamic route receiving is disabled for the VPC route table, you must manually add a route to the VPC route table. In this route, set the **Destination CIDR block** to the CIDR block of the on-premises data center and set the **next hop** to the **Express Connect Router**. This enables communication between the VPC and the on-premises data center.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7179893771/CAEQUBiBgMDk9JOa2RkiIDdiNmYxYzI2NjU4ZTRhZTVhNTE5OGQ4MDljMzE2YjMz4122902_20231220095134.007.svg)

#### **Route to a Gateway Load Balancer endpoint**

The **Gateway Load Balancer endpoint** next hop type is available only in [these regions](/help/en/slb/gateway-based-load-balancing-gwlb/product-overview/regions-and-zones-supported-by-gwlb#8bca1144aeywx). For specific use cases, see [Use a gateway route table - GWLB high-availability architecture](#6eea159ab7et9).

## **Reference**

**Area**

**Regions that support custom route tables**

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

### **Limits**

#### **Route table limits**

-   A vSwitch must be associated with exactly one Route Table, while a Route Table can be associated with multiple vSwitches.
    
-   You can delete Custom Route Tables, but not System Route Tables.
    

#### **Route limits**

Static Route limits:

-   You cannot manually create or delete System Routes.
    
-   You can create a Custom Route with a Destination CIDR Block that is more specific than, but not the same as, the 100.64.0.0/10 system Route for Alibaba Cloud services. Use caution when configuring these Routes, as misconfigurations can disrupt access to some Alibaba Cloud services.
    
-   For a custom route whose next hop is an IPv6 Gateway instance, the destination CIDR block can only be set to`::/0`.
    
-   The console displays the **Route Advertisement Status** column only after the VPC is connected to a Transit Router (TR) or an Express Connect Router (ECR).
    
-   Adding a new Route may fail if its Destination CIDR Block overlaps with an existing Route. For more information, see [Route priority](#c804267ebc3s5).
    

Static Route publishing limits:

-   `Route Entries` that are configured in a custom `Virtual Private Cloud` `Route Table` cannot be published to an ECR.
    
-   A `Route Entry` whose `Destination CIDR Block` is a prefix list cannot be published to an ECR.
    
-   Active/standby routes and Equal-Cost Multi-Path (ECMP) routes whose `Next Hop` is a router interface (to VBR) cannot be published to an ECR. After a `Virtual Private Cloud` route is published to an ECR, you can no longer configure ECMP or active/standby routes for that `Route Entry`.
    
-   After a `Virtual Private Cloud` route is published to an ECR, if you modify the `Route Entry`, you can set the `Next Hop` only to a type that **supports publishing**, as described in the following table.
    
-   The following table lists the default advertisement status for different types of `Route Entries` and indicates whether `Publish` and `Withdraw` operations are supported.
    
    **Route entry advertisement status**
    
    **Route type**
    
    **Route entry instance**
    
    **Published by default**
    
    **Publish supported**
    
    **Withdraw supported**
    
    VPC `System Route`
    
    VPC
    
    Yes
    
    Yes
    
    Supported only in the Malaysia (Kuala Lumpur) region.
    
    `Route Entry` to an IPv4 gateway
    
    VPC
    
    No
    
    Yes
    
    Yes
    
    `Route Entry` to an IPv6 gateway
    
    VPC
    
    No
    
    Yes
    
    Yes
    
    `Route Entry` to a `NAT Gateway`
    
    VPC
    
    No
    
    Yes
    
    Yes
    
    `Route Entry` to a VPC peering connection
    
    VPC
    
    No
    
    Not supported
    
    Not supported
    
    `Route Entry` to a `Transit Router`
    
    VPC
    
    No
    
    Not supported
    
    Not supported
    
    `Route Entry` to a `VPN Gateway`
    
    VPC
    
    No
    
    Yes
    
    Yes
    
    `Route Entry` to an ECS instance
    
    VPC
    
    No
    
    Yes
    
    Yes
    
    `Route Entry` to an `Elastic Network Interface` (ENI)
    
    VPC
    
    No
    
    Yes
    
    Yes
    
    `Route Entry` to a `High-Availability Virtual IP` (HaVip)
    
    VPC
    
    No
    
    Yes
    
    Yes
    
    `Route Entry` to a router interface (to VBR)
    
    VPC
    
    No
    
    Not supported
    
    Not supported
    
    `Route Entry` to a router interface (to VPC)
    
    VPC
    
    No
    
    Not supported
    
    Not supported
    
    `Route Entry` to an `Express Connect Router`
    
    VPC
    
    No
    
    Not supported
    
    Not supported
    
    `Route Entry` to a Gateway Load Balancer endpoint
    
    VPC
    
    No
    
    Yes
    
    Yes
    

Dynamic Route limits:

-   A VPC Route Table can receive dynamic routes from only one dynamic route source at a time.
    
    For example, after you associate a VPC with an ECR and then connect it to an Enterprise Edition TR, an attempt to enable [route synchronization](/help/en/cen/user-guide/route-synchronization) for the VPC on the TR will fail. Similarly, after you create a VPN Gateway and [enable automatic BGP route propagation](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-bgp-dynamic-routing#77c5049e07fwz), BGP routes learned by the VPN Gateway are automatically propagated to the System Route Table of the VPC. In this state, you cannot associate the VPC with an ECR.
    
-   If a received dynamic route overlaps with an existing route in the Route Table, see [Route Priority](#c804267ebc3s5) to determine which route takes precedence.
    
-   Only Route Tables associated with vSwitches can receive dynamic routes. Route Tables associated with gateways do not support dynamic routes.
    
-   By default, a single Route Table supports a maximum of 200 active dynamic routes from an ECR. Routes that exceed this quota are received but remain inactive. When you increase the quota, the new limit applies on the next route propagation. Inactive routes are then enabled in the order they were received.
    

### **Billing**

Route Tables are a free feature of VPC.
