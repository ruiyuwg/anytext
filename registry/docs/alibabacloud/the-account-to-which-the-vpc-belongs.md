Virtual private clouds (VPCs) are isolated from each other by default. A VPC peering connection connects two VPCs whose **CIDR blocks do not overlap**, allowing resources in both to communicate using private IP addresses. VPC peering connections can be created between VPCs in either the same or different accounts, either in the same or different regions.

> To connect multiple VPCs, use VPC peering or Cloud Enterprise Network (CEN). For their use cases and trade-offs, see [Connect VPCs](/help/en/vpc/cross-vpc-interconnection-overview/).

## **How it works**

A VPC peering connection involves a **requester** and an **accepter**. Follow the process below to create a peering connection:

1.  Requester VPC initiates the connection request.
    
    -   Same-account: If the accepter VPC is in the same account, the system **automatically accepts** and activates the connection.
        
    -   Cross-account: If the accepter VPC is in another account, its owner **manually accept** the request.
        
    
2.  **Both VPCs configure routes**
    
    The owner of each VPC manually adds a route that points to the CIDR block of the other VPC, also called the peer VPC.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2612342771/CAEQTBiBgMDhr8TgyRkiIDY4OGRlNGVhNWZjYjQ2YTY5MTMxNDUyYjVkNDUyZmU15274221_20250627113930.173.svg)

## **Considerations**

-   **No transitive routing**
    
    VPC peering is non-transitive. If VPC A is peered with VPC B and VPC C, VPC B and VPC C cannot communicate through VPC A. To allow traffic between VPC B and VPC C, you must create a VPC peering connection between them.
    
-   **Configure routes in both VPCs**
    
    Routes are **not** automatically configured. To enable connectivity, you must manually add route entries that point to the peer VPC CIDR block of **both** the requester and accepter VPCs.
    
-   **Update security controls**
    
    Creating a connection does not automatically override security controls. You must update security groups, network ACLs, and service-level allow lists, for example, for Apsara RDS, to permit inbound traffic from the peer VPC.
    
-   **Activate CDT for cross-region connections**
    
    For cross-region connections, first-time users must activate Cloud Data Transfer (CDT) in both requester and accepter accounts.
    
-   **Limit peering to the same website**
    
    VPC peering is limited to accounts on the same Alibaba Cloud website. You cannot create a peering connection between an account on the China website (aliyun.com) and an account on the International website (alibabacloud.com).
    
-   **Shared VPC permissions**
    
    In a shared VPC, permissions (create, modify, delete) are reserved for the resource owner. Resource users (principals) cannot perform these operations.
    

## **Create a VPC peering connection**

#### **Console**

1.  **Create a VPC peering connection:**
    
    1.  Go to the [VPC - VPC Peering Connection](https://vpc.console.alibabacloud.com/vpcpeer/ap-southeast-1/vpcpeers) page. In the top navigation bar, select the region where the VPC is located and click **Create VPC Peering Connection**.
        
    2.  Select the accepter account type.
        
        -   **Same-Account**: The connection is accepted and activated automatically. Click **Add route to peer VPC CIDR** to automatically configure a route pointing to the peer VPC.
            
        -   **Cross-Account**: The accepter owner must log in, find the request in the same region, and click **Allow** in the **Actions** column.
            
            > The accepter can **Deny** or **Delete** the request. To learn more, see [Lifecycle](#b70aa308d0k1e).
            
        
    3.  For **Inter-Region** connections, you must configure the **Link Type** and **Accepter Region**.
        
        Platinum and Gold provide different levels data transfer quality and their [billing prices](/help/en/cdt/inter-region-data-transfers#d0450e8c0bzxe) vary.
        
        -   Platinum (99.995% availability): Best for jitter-sensitive apps like voice calls, video conferencing, and real-time gaming.
            
        -   Gold (99.95% availability): Suitable for latency-tolerant tasks like file transfers and data synchronization.
            
        
        > Bandwidth and link type can be modified later by clicking **Edit** on the instance details page.
        
2.  **Configure routes:** Communication requires explicit routes in **both** VPCs.
    
    -   Requester VPC: Click **Configure route** in the **Requester VPC** column. Select the requester route table associated with the vSwitch and set **Destination CIDR Block** to the accepter VPC CIDR.
        
    -   Accepter VPC: Click **Configure route** in the **Accepter** column. Select the requester route table associated with the vSwitch and set **Destination CIDR Block** to the accepter VPC CIDR.
        
    
    > For IPv6, ensure you also add routes for the peer's IPv6 CIDR block.
    
3.  **Verify connectivity**:
    
    **Method A: Reachability analyzer (Recommended).** No real data packets are sent and your services are not affected.
    
    1.  In the **Diagnose** column of the peering connection, choose **Diagnose** > **Reachability Analyzer**.
        
    2.  Configure the source and destination, then specify the protocol and port to simulate your business traffic and verify connectivity.
        
    3.  The system checks routes, security groups, and network ACLs without affecting live traffic.
        
    4.  If successful, click **reverse path analytics** to verify two-way traffic.
        
    
    **Method B: Ping test**
    
    Log in to an ECS instance in the requester VPC and run `ping <Private IP of Peer ECS>`.
    

> **Deletion:** Either VPC can delete the connection. 

> **Warning:** This action is irreversible and immediately interrupts private network access.

#### **API**

##### **Create a peering connection**

1.  Call [CreateVpcPeerConnection](/help/en/vpc/developer-reference/api-vpcpeer-2022-01-01-createvpcpeerconnection) to create a VPC peering connection.
    
2.  If the two VPCs belong to different accounts, the owner of the accepter account must call [AcceptVpcPeerConnection](/help/en/vpc/developer-reference/api-vpcpeer-2022-01-01-acceptvpcpeerconnection) to accept the VPC peering connection.
    
    > The accepter can call [RejectVpcPeerConnection](/help/en/vpc/developer-reference/api-vpcpeer-2022-01-01-rejectvpcpeerconnection) to reject the VPC peering connection.
    
3.  The owners of both VPCs must call [GetVpcPeerConnectionAttribute](/help/en/vpc/developer-reference/api-vpcpeer-2022-01-01-getvpcpeerconnectionattribute) to query the CIDR blocks of the two VPCs.
    
4.  The owners of both VPCs must call [CreateRouteEntry](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createrouteentry) to create routes that point to the peering connection.
    

##### **Modify a cross-region peering connection**

Call [ModifyVpcPeerConnection](/help/en/vpc/developer-reference/api-vpcpeer-2022-01-01-modifyvpcpeerconnection) to modify the bandwidth or link type of a cross-region VPC peering connection.

##### **Delete a peering connection**

-   Call [DeleteRouteEntry](/help/en/vpc/developer-reference/api-vpc-2016-04-28-deleterouteentry) to delete the routes that point to the peering connection.
    
-   Call [DeleteVpcPeerConnection](/help/en/vpc/developer-reference/api-vpcpeer-2022-01-01-deletevpcpeerconnection) to delete the VPC peering connection.
    

##### **Reachability Analyzer**

Call the following API operations in sequence to use Reachability Analyzer to check connectivity.

1.  [CreateNetworkPath](/help/en/nis/developer-reference/api-nis-2021-12-16-createnetworkpath)
    
2.  [CreateNetworkReachableAnalysis](/help/en/nis/developer-reference/api-nis-2021-12-16-createnetworkreachableanalysis)
    
3.  [GetNetworkReachableAnalysis](/help/en/nis/developer-reference/api-nis-2021-12-16-getnetworkreachableanalysis)
    

#### **Terraform**

##### **Same-account peering connection**

> Resources: [alicloud\_vpc\_peer\_connection](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_peer_connection), [alicloud\_route\_entry](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/route_entry)

> Data Sources: [alicloud\_account](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/account)

```
# The account to which the VPC belongs
data "alicloud_account" "default" {}

provider "alicloud" {
  alias  = "local"
  region = "ap-southeast-1" # The region where the requester VPC is located.
}

provider "alicloud" {
  alias  = "accepting"
  region = "eu-west-1" # The region of the accepter VPC. It can be the same as the region of the requester VPC. Configure this parameter based on the region of the accepter VPC.
}

# Requester VPC ID
variable "local_vpc_id" {
  default = "vpc-t4ns******"
}

# Accepter VPC ID
variable "accepting_vpc_id" {
  default = "vpc-d7ot******"
}

# Create a VPC peering connection
resource "alicloud_vpc_peer_connection" "example_peer_connection" {
  provider             = alicloud.local
  peer_connection_name = "example_peer_connection_name"
  vpc_id               = var.local_vpc_id                 # Requester VPC ID
  accepting_ali_uid    = data.alicloud_account.default.id # Accepter account ID   
  accepting_region_id  = "eu-west-1"                     # The region where the accepter VPC is located
  accepting_vpc_id     = var.accepting_vpc_id             # Accepter VPC ID
  bandwidth            = 1024                             # The bandwidth in Mbit/s. You can configure this parameter only when the requester region and the accepter region are different.
  link_type            = "Gold"                           # The link type. You can configure this parameter only when the requester region and the accepter region are different.
}

# Configure a route for the requester VPC
resource "alicloud_route_entry" "example_local_route" {
  provider              = alicloud.local
  route_table_id        = "vtb-t4nl******"            # The route table bound to the vSwitch where the requester instance is located
  destination_cidrblock = "172.16.0.0/12"             # The CIDR block of the accepter VPC
  nexthop_type          = "VpcPeer"                   # The next hop is a VPC peering connection
  nexthop_id            = alicloud_vpc_peer_connection.example_peer_connection.id
}

# Configure a route for the accepter VPC
resource "alicloud_route_entry" "example_acceptor_route" {
  provider              = alicloud.accepting
  route_table_id        = "vtb-d7od******"            # The route table bound to the vSwitch where the accepter instance is located
  destination_cidrblock = "10.0.0.0/8"                # The CIDR block of the requester VPC
  nexthop_type          = "VpcPeer"                   # The next hop is a VPC peering connection
  nexthop_id            = alicloud_vpc_peer_connection.example_peer_connection.id
}
```

##### **Cross-account peering connection**

> Resources: [alicloud\_vpc\_peer\_connection](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_peer_connection), [alicloud\_vpc\_peer\_connection\_accepter](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_peer_connection_accepter), [alicloud\_route\_entry](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/route_entry)

```
provider "alicloud" {
  alias  = "local"
  region = "ap-southeast-1" # The region of the requester VPC 
}

# The region of the accepter VPC. It can be the same as the region of the requester VPC. You need to configure it based on the region of the accepter VPC.
variable "accepting_region" {
  default = "eu-west-1"
}

# The accepter account
variable "accepting_uid" {
  default = "1234******"
}

# The AccessKey ID of the accepter account
variable "access_key_id" {
  description = "The AccessKey ID for operating your infrastructure"
}
# The AccessKey secret of the accepter account
variable "access_key_secret" {
  description = "The AccessKey Secret for operating your infrastructure"
}

provider "alicloud" {
  alias      = "acceptor"
  region     = var.accepting_region
  access_key = var.access_key_id
  secret_key = var.access_key_secret
}

# Requester VPC ID
variable "local_vpc_id" {
  default = "vpc-t4ns******"
}

# Accepter VPC ID
variable "accepting_vpc_id" {
  default = "vpc-d7ot******"
}

# Create a VPC peering connection
resource "alicloud_vpc_peer_connection" "example_peer_connection" {
  provider             = alicloud.local
  peer_connection_name = "example_peer_connection_name"
  vpc_id               = var.local_vpc_id     # Requester VPC ID
  accepting_ali_uid    = var.accepting_uid    # Accepter account ID   
  accepting_region_id  = var.accepting_region # Accepter region
  accepting_vpc_id     = var.accepting_vpc_id # Accepter VPC ID
  bandwidth            = 1024                 # The bandwidth in Mbit/s. You can configure this parameter only when the requester region and the accepter region are different.
  link_type            = "Gold"               # The link type. You can configure this parameter only when the requester region and the accepter region are different.
}

# The accepter accepts the peering connection request
resource "alicloud_vpc_peer_connection_accepter" "example_peer_connection_accepter" {
  provider    = alicloud.acceptor
  instance_id = alicloud_vpc_peer_connection.example_peer_connection.id
}

# Configure a route for the requester VPC
resource "alicloud_route_entry" "example_local_route" {
  provider              = alicloud.local
  route_table_id        = "vtb-t4nl******" # The route table bound to the vSwitch where the requester instance is located
  destination_cidrblock = "192.168.0.0/24" # The CIDR block of the accepter VPC
  nexthop_type          = "VpcPeer"        # The next hop is a VPC peering connection
  nexthop_id            = alicloud_vpc_peer_connection.example_peer_connection.id
}

# Configure a route for the accepter VPC
resource "alicloud_route_entry" "example_acceptor_route" {
  provider              = alicloud.acceptor
  route_table_id        = "vtb-d7od******" # The route table bound to the vSwitch where the accepter instance is located
  destination_cidrblock = "172.16.0.0/12"  # The CIDR block of the requester VPC
  nexthop_type          = "VpcPeer"        # The next hop is a VPC peering connection
  nexthop_id            = alicloud_vpc_peer_connection.example_peer_connection.id
}
```

## **Troubleshoot**

> Start by using [Reachability Analyzer](#markdown-section-f8e7965c-34c9-4655-b662-8ee59deb5019-25) to verify network connectivity.

1.  **Check connection status**
    
    -   Ensure the peering connection status is Activated.
        
    -   Action_:_ If the status is Accepting, the accepter VPC owner must log in and click Accept.
        
2.  **Check for CIDR overlap**
    
    -   Ensure requester and accepter VPC CIDRs do not overlap.
        
        -   Root cause: If CIDRs overlap, traffic destined for the peer VPC will preferentially match the local system route and stay within the local VPC. Local system routes always take precedence over custom peering routes.
            
        -   VPC CIDRs overlap, but vSwitch CIDRs do not. VPC migration is recommended.
            
            You can configure routes to a peer vSwitch, but connection may be unstable. We strongly recommend migrating the services to a VPC with non-overlapping CIDR block and re-create the peering connection.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2612342771/CAEQUxiBgICL9smi3xkiIGEwZDM4ZDM1MzYzYzQ3ZDFhNDllZjJkZWI5ZjNmNzc15274221_20250627113930.173.svg)
            
            vSwitch CIDRs overlap. Migration to a non-overlapping VPC is mandatory.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2612342771/CAEQUxiBgMCM8Mqi3xkiIDIzMWQzOTA5MTFmZjQ2NmNhYTFlMDEwOTdiOTcyZTBl5274221_20250627113930.173.svg)
            
    -   Verify RFC 1918 compliance: Check if you are using non-standard IP ranges, such as 30.0.0.0/16, instead of the standard [RFC 1918](https://www.rfc-editor.org/rfc/rfc1918) private address space.
        
        -   Root cause: VPCs treat IP addresses outside RFC 1918 as public CIDR blocks. If your VPC can access the Internet through a NAT Gateway or EIP, traffic destined for the peer will route to the Internet instead of through peering connection.
            
        -   Action_:_ Create an IPv4 Gateway to override this default behavior and route the traffic to the destination VPC.
            
    -   Check for local network conflicts: Verify that local Docker network settings, such as Docker bridge IP, do not conflict with the peer VPC CIDR.
        
3.  **Validate routes in both VPCs**
    
    -   Confirm that route entries exist in both the requester and accepter VPCs. Routing is not configured automatically.
        
    -   Do not just check the default system route table. Verify that the route entry is added to the route table associated with your instance's vSwitch.
        
4.  **Verfiy access control rules**
    
    -   Instance level (security groups): Verify that the inbound and outbound rules of the ECS security groups allow traffic from the peer IP.
        
    -   vSwitch level (network ACLs): Verify that the inbound and outbound rules of the network ACL associated with the vSwitch allow traffic from the peer IP.
        
    -   Application level (whitelists): For PasS services, such as ApsaraDB RDS or Redis, verify that the peer VPC CIDR block is added to the allowlist.
        

## Examples

### **Connect three VPCs**

When configuring routes for VPC peering, you can choose between two routing strategies:

-   Full access: Set the destination to the peer VPC CIDR and let all instances in both VPCs communicate full.
    
-   Granular access: Set the destination to a vSwitch CIDR or an instance IP. This enhances security by limiting scope, but requires manual route updates whenever new resources need access.
    

**Example:**

-   VPC1 (Granular): Configured with specific routes pointing only to vSwitch 3 in VPC2 and ECS04 in VPC3. VPC1 is restricted to accessing only those specific resources.
    
-   VPC2 & VPC3 (Full): Configured with routes pointing to the entire peer VPC CIDR. They allow full communication with the authorized peer.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2612342771/CAEQUxiBgMDoieui3xkiIGJkNDFlNzkyZWUzNjRmN2M5MDFmODBlNjY5MGM1ZWMw5274221_20250627113930.173.svg)

### **Connect multiple VPCs to a central VPC (Hub-and-spoke)**

Spoke VPCs can access services in the central hub VPC, but cannot communicate with each other.

**Common use cases:**

-   Department isolation: Dpartment VPCs, for example, HR and finance, remain isolated from each other but share access to a central VPC that hosts shared resources such as logging and authentication.
    
-   Multi-tenant isolation: Customer VPCs connect to a central SaaS provider VPC. Each customer is isolated from other customers but can access shared services hosted by the provider.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2612342771/CAEQUxiBgMCX0uyi3xkiIDIyMjAzMGRjYTc0MzRiMzRhNmNlNTAyNGY5YWNhYzY13794106_20230720103741.872.svg)

## **Monitoring and O&M**

**Supported scope:** Metrics are available for inter-region peering connections only.

**Alerting:** Use [CloudMonitor](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor) to create threshold-based alert rules. Monitor connection status in real-time and promptly detect network congestion or failures.

**Monitoring metrics**

**Metric**

**Description**

**Inbound Traffic in a Cycle**

Traffic sent from the requester VPC to the accepter VPC within a statistical period.

**Outbound Traffic in a Cycle**

Traffic sent from the accepter VPC to the requester VPC within a statistical period.

**Inbound Bandwidth**

Inbound bandwidth from the requester VPC to the accepter VPC.

**Outbound Bandwidth**

Outbound bandwidth from the accepter VPC to the requester VPC.

**Outbound Packets Dropped Due to Throttling**

The rate at which data packets are dropped due to outbound bandwidth throttling on the peering connection.

### **Console**

#### **View metrics**

1.  Go to the [VPC - VPC Peering Connection](https://vpc.console.alibabacloud.com/vpcpeer/ap-southeast-1/vpcpeers) page. In the top navigation bar, select the region where the VPC is located.
    
2.  Click the ![icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1199673571/p985960.png) icon in the **Monitoring** column of the target inter-region VPC peering connection. View real-time data for key metrics such as bandwidth usage and packet loss.
    

#### **Configure alerts (CloudMonitor)**

1.  Go to the page, and click **Create Alert Rule**.
    
2.  Configure thresholds for each alert level. When a metric reaches its threshold, notifications are automatically sent to the **Alert Contact Group**.
    
3.  To view past alerts, click **Alert History**.
    
4.  To **Modify**, **Disable**, or **Delete** a rule, use the options in the **Actions** column.
    

### **API**

-   Call [PutResourceMetricRules](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putresourcemetricrules) to set multiple threshold-based alert rules for the specified metrics of a VPC peering connection. For more information, see [CloudMonitor metrics for peering connections](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_vpcpeer/vpcpeer).
    
-   Call [EnableMetricRules](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-enablemetricrules) to enable one or more alert rules.
    
-   Call [DisableMetricRules](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-disablemetricrules) to disable alert rules.
    
-   Call [DeleteMetricRules](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletemetricrules) to delete one or more alert rules.
    

### **Terraform**

> Configure threshold-based alert rules. For more information, see [CloudMonitor metrics for peering connections](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_vpcpeer/vpcpeer).

> Resources: [alicloud\_cms\_alarm\_contact](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cms_alarm_contact), [alicloud\_cms\_alarm\_contact\_group](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cms_alarm_contact_group), [alicloud\_cms\_alarm](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cms_alarm)

```
# The ID of the peering connection instance to be monitored
variable "vpc_peer_id" {
  default = "pcc-28cv******"
}

# Create an alert contact
resource "alicloud_cms_alarm_contact" "example_cms_alarm_contact" {
  alarm_contact_name = "example_cms_alarm_contact_name"
  describe           = "example_vpc_peer_alarm"
  channels_mail      = "xxx@xxx.com" # Change it to your email address.
  lifecycle {
    ignore_changes = [channels_mail]
  }
}

# Create an alert contact group
resource "alicloud_cms_alarm_contact_group" "example_cms_alarm_contact_group" {
  alarm_contact_group_name = "example_cms_alarm_contact_group"
  contacts                 = [alicloud_cms_alarm_contact.example_cms_alarm_contact.id] # Alert contact
}

# Create an alert rule
resource "alicloud_cms_alarm" "example_cms_alarm" {
  name               = "example_cms_alarm_name"
  project            = "acs_vpcpeer" # The data namespace of the cloud service
  metric             = "IntranetRX"  # The name of the metric
  period             = 60            # The statistical period
  contact_groups     = [alicloud_cms_alarm_contact_group.example_cms_alarm_contact_group.alarm_contact_group_name]
  effective_interval = "06:00-20:00" # The effective period
  metric_dimensions  = <<EOF
  [
    {
      "instanceId": "${var.vpc_peer_id}"
    }
  ]
  EOF
  escalations_critical {            # Info-level alert
    statistics          = "Sum"     # The statistical method for the alert
    comparison_operator = ">="      # The comparison operator for the threshold
    threshold           = 104857600 # The threshold
    times               = 2         # The number of retries for the alert
  }
}
```

## **Billing**

-   **Connection types & fees**
    
    -   Intra-region: Free of charge. This applies regardless of whether the VPCs belong to the same or different accounts.
        
    -   Inter-region: Charged. [Data transfer fees](/help/en/cdt/inter-region-data-transfers) apply to outbound traffic and are billed through [CDT](/help/en/cdt/product-overview/what-is-cdt).
        
-   **Billing rules**
    
    -   Unit price: Varies by the source/destination regions and link type.
        
    -   Billing cycle: Hourly.
        
    -   Tier switching: If you switch link types within a billing hour, the entire hour is charged at the rate of the higher tier.
        
-   **Billing example**
    
    A Gold connection between VPC1 (Account A, Singapore) and VPC2 (Account B, UK London) at a rate of USD 0.08/GB:
    
    -   Account A pays: USD 0.08/GB × 200 GB = USD 16
        
    -   Account B pays: USD 0.08/GB × 100 GB = USD 8
        

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3612342771/CAEQUxiBgICLmcKj3xkiIGFkMTE0Y2U0MDJmYTQ2M2Y5YmI0MDM3YTRmOWQ2Yzcz3790848_20230718113424.145.svg)

## FAQ

**Q: Are cross-border peering connections supported?**

**A: Yes.** VPC Peering connections supports both connectivity scenarios:

-   Non-cross-border: Connects two regions in the Chinese mainland, or two regions outside the Chinese mainland.
    
-   Cross-border: Connects a region in the Chinese mainland to a region outside the Chinese mainland. Make sure that your account has completed [business identity verification](/help/en/account/support/which-users-are-required-to-undergo-account-authentication).
    

**Q: Why can't I select the target VPC when creating a peering connection?**

**A:** Ensure that the selected region and account match the location and owner of the target VPC.

-   Requester: Your current region and logged-in account serve as the Requester.
    
-   Accepter: The accepter region and account are specified during configuration. The target VPC will only appear if these settings are correct.
    

**Q: Why can't my ECS instance running Docker connect to the peer VPC?**

**A:** If routing and security groups are configured correctly, the issue is likely a **CIDR conflict** between the Docker bridge network (default docker0) and the peer VPC CIDR.

-   **Diagnose the issue:**
    
    Run `ip addr` on the ECS instance to check the Docker interface IP address. If it overlaps with the peer VPC CIDR block, traffic is routed locally instead of to the peer VPC.
    
-   **Solution: Change the Docker bridge CIDR**
    
    > **Warning:** This procedure requires restarting the Docker service, which interrupts all running containers. Perform this operation during a maintenance window and verify that the new CIDR block doesn't conflict with your existing applications.
    
    1.  Stop Docker: `sudo systemctl stop docker`.
        
    2.  Edit the Docker configuration file: Open the configuration file, typically `/etc/docker/daemon.json` or `/etc/docker/daemon.conf`. You can use an editor like vim, `sudo vim /etc/docker/daemon.json`.
        
    3.  Update bridge IP: Add or modify the bip parameter to a non-conflicting CIDR.
        
        ```
        {
            "bip":"new Docker CIDR block"
        }
        ```
        
    4.  Restart and verify: `sudo systemctl start docker`.
        
    

## **More information**

### **Lifecycle**

Upon initiation, a VPC peering connection transitions through the following stages:

> Same-account: The system automatically initiates, accepts, and activates the connection instantly.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3612342771/CAEQTBiBgMCX067jyRkiIDY3NmM3OWJjOTVhZDRhZTI5YTk3YzU1YTM0MzE0NjYy4709658_20241015141959.851.svg)

#### **Status description**

**Status**

**Description**

**Action required**

Creating

Connection request initiated by the requester.

Wait for the process to complete.

Accepting

Request sent and pending acceptance (cross-account only).

Accepter must accept within 7 days.

Updating

Accepter accepted the request; connection is being established.

Wait for the status to change to activated.

Activated

Connection is established and available.

Configure routes in both VPCs to enable traffic.

Rejected

Accepter rejected the request.

Delete the instance. Create a new request if necessary.

Expired

Request timed out with no response within 7 days.

Delete the expired instance and create a new request.

Deleting

Connection is being terminated.

Wait for deletion to complete.

Deleted

Connection permanently removed.

None.

### **Supported regions**

**Area**

**Regions that support VPC peering connections**

Asia-Pacific - China

China (Hangzhou), China (Shanghai), China (Nanjing - Local Region - Decommissioning), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), China (Wuhan - Local Region), China (Fuzhou - Local Region - Decommissioning)

Asia-Pacific - Other

Japan (Tokyo), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok)

Europe and Americas

Germany (Frankfurt), UK (London), US (Silicon Valley), US (Virginia)

Middle East

UAE (Dubai), SAU (Riyadh - Partner Region)

### **Quotas**

**Quota name**

**Description**

**Default quota**

**Increase quota**

**vpc\_quota\_cross\_region\_peer\_num\_per\_vpc**

The number of inter-region VPC peering connections that a VPC can have.

20

Go to the [Quota Management page](https://vpc.console.alibabacloud.com/quota) or [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=peer) to request a quota increase.

**vpc\_quota\_intra\_region\_peer\_num\_per\_vpc**

The number of intra-region VPC peering connections that a VPC can have.

10

**vpc\_quota\_peer\_num**

The number of VPC peering connections that an Alibaba Cloud account can create in a region.

20

**vpc\_quota\_peer\_cross\_border\_bandwidth**

The maximum cross-border bandwidth.

1,024 Mbps

**vpc\_quota\_peer\_cross\_region\_bandwidth**

The maximum cross-region bandwidth.

1,024 Mbps
