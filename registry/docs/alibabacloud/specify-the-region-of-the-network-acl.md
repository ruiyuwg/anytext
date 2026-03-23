Control network traffic at the vSwitch level using network access control lists (ACLs). Network ACLs provide stateless filtering for inbound and outbound traffic.

## How it works

### **Applicable scope**

A network ACL applies only to elastic network interfaces (ENIs) in the associated vSwitch.

1.  Network ACLs control traffic for cloud resources that rely on ENIs for network communication. Resources supported and not supported by network ACLs are as follows:
    
    -   Supported: Elastic Compute Service (ECS), Elastic Container Instance (ECI), and Network Load Balancer (NLB) instances etc.
        
    -   Not supported: ApsaraDB RDS instances (use [whitelists](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance) instead), CLB instances (use [access control policies](/help/en/slb/classic-load-balancer/user-guide/overview-3) instead), and secondary ENIs bound to [EIPs in cut-through mode](/help/en/eip/associate-an-eip-with-a-secondary-eni-1#section-p20-xda-tzy).
        
    
2.  When accessing Alibaba Cloud services through PrivateLink, traffic passes through endpoint ENIs and is controlled by network ACL rules.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8093113771/CAEQVBiBgMCj.qXX5hkiIGM3OTc0MzRkZDI4ZDRlMTI4NzA0NWRjYjYxOTM3YjY14553391_20240801095024.466.svg)

### **Rule mechanism**

-   **Priority-based matching:** Rules are evaluated in ascending order of priority, starting with priority 1.
    
    Traffic is matched based on IP version, protocol, source/destination IP address, and port range. Once traffic matches a rule, the specified allow/deny policy is executed.
    
    > For both inbound and outbound rules, the port range always matches the **destination port** of the traffic.
    
    When a rule denies traffic, packets are silently dropped without sending a response to the client, resulting in a connection timeout or failure.
    
-   **Stateless:** Unlike security groups, network ACLs are stateless.
    
    Allowing inbound traffic does not automatically permit the corresponding return traffic; you must create an outbound rule to allow responses.
    
    When a client connects to a server, it uses a random ephemeral port to receive the response. To ensure broad client compatibility, we recommend setting the ephemeral port range to **1024/65535** in your outbound rules.
    
    Ephemeral port ranges for different client types
    
    **Client**
    
    **Ephemeral port range**
    
    Linux
    
    32768/61000
    
    Windows Server 2003
    
    1025/5000
    
    Windows Server 2008 and later
    
    49152/65535
    
    NAT Gateway
    
    1024/65535
    

#### **Example**

Consider a configuration with overlapping address ranges. If a client at 192.168.0.1 attempts HTTPS access, it might match a Priority 1 _Deny_ rule first and be blocked. Conversely, a client at 192.168.1.1 might bypass that rule and match a Priority 2 _Allow_ rule. The return traffic is then permitted according to the outbound rule with priority 1.

**Best** **practice****:** If a service requires a broad range of open ports but specific ports must be blocked, ensure _Deny_ rules are assigned higher priorities (lower numbers) than broad _Allow_ rules.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8093113771/CAEQTxiBgICwvI6z0xkiIDFjMjk5NDdjZGI3NTRhM2JhZTE5ZjQ2ODUxZmVhMGYy5346050_20250626112318.323.svg)

### **Differences from security groups**

**Item**

**Network ACL**

**Security group**

Applicable scope

Controls vSwitch traffic.

Controls access of ECS instances. If an instance is associated with multiple security groups, all rules are processed before deciding whether traffic can pass.

Statefulness

Stateless. Return traffic must be allowed.

Stateful. Return traffic is automatically allowed.

Rule evaluation

Strict priority: Rules are evaluated in ascending order of priority. The first matching rule determines the action.

Priority & policy: Rules are first sorted by priority. If priorities are identical, Deny rules take precedence over Allow rules.

Association

A vSwitch can be associated with only one network ACL at a time.

An ECS instance can be added to multiple security groups.

## **Create/delete network ACLs**

Create network ACLs and associate them with vSwitches to filter inbound and outbound traffic.

**Default rules**

When you create a network ACL, the system automatically adds default rules for inbound and outbound directions.

-   For VPCs with only IPv4 CIDR blocks:
    
    -   Cloud service rule (Highest priority): This rule cannot be modified or deleted. It ensures access to:
        
        -   Alibaba Cloud DNS server: IPs 100.100.2.136 and 100.100.2.138 for internal domain name resolution.
            
        -   ECS Metadata: IP 100.100.100.200 for retrieving instance metadata.
            
    -   Custom rule (Default allow): Allows all IPv4 traffic to prevent the new network ACL from disrupting private network communication between vSwitches in the same VPC. Modify or add custom rules to restrict traffic as needed.
        
    -   System rule (Lowest priority): Denies all IPv4 traffic that does not match any other rule. This is a catch-all deny rule that cannot be modified or deleted.
        
-   For VPCs with IPv6 enabled:
    
    -   An additional custom rule allowing all IPv6 traffic.
        
    -   An additional system rule denying all IPv6 traffic.
        

**Association limits**

-   A network ACL can only be associated with vSwitches in the same VPC.
    
-   Each vSwitch can only be associated with one network ACL at a time.
    

### **Console**

#### **Create a network ACL**

1.  Go to the [VPC console - Network ACL](https://vpc.console.alibabacloud.com/nacl/ap-southeast-1/nacls) page. Select a region in the top navigation bar and click **Create Network ACL**.
    
2.  Select the target **VPC** that contains the vSwitches you plan to associate with the network ACL.
    

#### **Associate a vSwitch**

1.  Click the instance ID or click **Manage** in the **Actions** column.
    
2.  On the **Associated Resources** tab, click **Associate vSwitch**. Select one or more vSwitches and click **OK**.
    

To remove this control, click **Unbind** in the **Actions** column for the target vSwitch.

You can also associate, replace, or unbind a network ACL in the **Network ACL** section on the details page of the vSwitch.

#### **Delete a network ACL**

Ensure that all vSwitch associations have been removed. In the **Actions** column of the target network ACL, click **Delete**.

### **API**

-   Call [CreateNetworkAcl](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createnetworkacl) to create a network ACL.
    
-   Call [AssociateNetworkAcl](/help/en/vpc/developer-reference/api-vpc-2016-04-28-associatenetworkacl) to associate a network ACL with a vSwitch.
    
-   Call [UnassociateNetworkAcl](/help/en/vpc/developer-reference/api-vpc-2016-04-28-unassociatenetworkacl) to unbind a network ACL from a vSwitch.
    
-   Call [DeleteNetworkAcl](/help/en/vpc/developer-reference/api-vpc-2016-04-28-deletenetworkacl) to delete a network ACL.
    

### **Terraform**

> Unlike in the console, Terraform lets you associate a network ACL with only one vSwitch.

> Resource: [alicloud\_network\_acl](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/network_acl)

```
# Specify the region of the network ACL.
provider "alicloud" {
  region = "ap-southeast-1"
}

# Specify the VPC ID.
variable "vpc_id" {
  default = "vpc-t41k******" # Replace the value with the actual ID of the VPC.
}

# Specify the vSwitch ID.
variable "vswitch_id" {
  default = "vsw-t41y******" # Replace the value with the actual ID of the vSwitch.
}

# Create a network ACL and associate the network ACL with a vSwitch. 
resource "alicloud_network_acl" "example_network_acl" {
  vpc_id           = var.vpc_id # Specify the VPC to which the network ACL belongs.
  network_acl_name = "example_network_acl_name"
  resources {
    resource_id   = var.vswitch_id # Specify the vSwitch with which you want to associate the network ACL.
    resource_type = "VSwitch"
  }
}
```

## Configure network ACL rules

After creating a network ACL, default rules are applied automatically. You can add custom rules to precisely filter traffic based on protocol, IP version, source/destination IP address, and port range. Changes to rules are applied immediately to all associated vSwitches.

**Port configuration**

-   ****TCP(6)**** or **UDP(17)**: Adjust the port range between 0 and 65535. Set in the format `First Port/Last Port`. You cannot set it to **\-1/-1**, which means no port restriction.
    
-   Other protocols: The port range cannot be set and defaults to **\-1/-1**.
    

Common ports

**Port**

**Service**

**Description**

21

FTP

The port for the FTP service, which is used to upload and download files.

22

SSH

The SSH port, which is used to connect to Linux instances from the command line or using remote connection software, such as PuTTY, XShell, and SecureCRT.

23

Telnet

The Telnet port, which is used for Telnet remote logon to ECS instances.

25

SMTP

The port for the SMTP service, which is used to send emails.

53

DNS

This applies to the Domain Name System (DNS) protocol.

80

HTTP

The port for HTTP services, such as IIS, Apache, and Nginx, to provide access.

110

POP3

This is for POP3, a protocol for receiving email.

143

IMAP

The port for the Internet Message Access Protocol (IMAP), which is used to receive emails.

443

HTTPS

The port for HTTPS services to provide access. HTTPS is a protocol that provides encryption and transmission over a secure port.

1433

SQL Server

The TCP port for SQL Server to provide external services.

1434

SQL Server

The UDP port for SQL Server, which is used to obtain information such as the TCP/IP port number and IP address used by SQL Server.

1521

Oracle

The communication port for Oracle. This port must be allowed if Oracle SQL is deployed on an ECS instance.

3306

MySQL

The port for the MySQL database to provide external services.

3389

Windows Server Remote Desktop Services

The port for Windows Server Remote Desktop Service. You can use this port to connect to Windows instances using software.

8080

Proxy port

Similar to port 80, port 8080 is typically used to provide `WWW` proxy services for web browsing. If you use port 8080, you must add a colon (:) and 8080 after the IP address when you access websites or use proxy servers. For example, `IP address:8080`. After you install the Apache Tomcat service, the default service port is 8080.

137, 138, and 139

NetBIOS protocol

The NetBIOS protocol is commonly used for Windows file and printer sharing and Samba.

-   UDP ports 137 and 138 are typically used for communication when files are transferred over Network Neighborhood.
    
-   Connections attempt to obtain NetBIOS/SMB services through port 139.
    

**Critical configuration**

-   DHCP Options Sets: If you configure a [DHCP options set](/help/en/vpc/dhcp-option-set-and-dns-hostname), you must add inbound and outbound rules to allow the specified DNS server to prevent resolution errors.
    
-   Load Balancer: When using a load balancer, you must add rules that allow both listener traffic and health check requests to reach backend servers.
    

**Using prefix lists**

You can simplify management by grouping frequently used CIDR blocks into a prefix list.

-   Updates: Modifying a prefix list automatically updates all referencing ACL rules.
    
-   Rule quotas: Rule quotas are calculated based on the prefix list's maximum entries, not the actual number of entries used. To conserve quota, reduce the maximum capacity, or remove unused entries.
    
-   Constraints: Prefix lists are region-specific and cannot be shared across regions. A single list cannot contain both IPv4 and IPv6 addresses.
    

### **Console**

On the **Inbound Rules** or **Outbound Rules** tab for the target network ACL, you can follow these steps to configure custom rules.

> Because network ACL rules are stateless, when you set an inbound rule to allow specific traffic to enter a vSwitch, you must set a corresponding outbound rule.

#### **Add rules**

-   Manual configuration: On the **Inbound Rules** or **Outbound Rules** tab of the target network ACL, click **Manage Inbound Rule** or **Manage Outbound Rule**.
    
    -   Single rule: Click **Add IPv4 Rule** or **Add IPv6 Rule** to configure rules one by one.
        
    -   Using prefix lists: After you manage frequently used IP address CIDR blocks in a prefix list, click **Add IPv4 Rule** or **Add IPv6 Rule**, and then set **IP Version** to **VPC Prefix List** and select the prefix list as **Source Address** or **Destination Address**.
        
    -   Quick add (Multiple CIDRs): To apply the same policy to multiple CIDR blocks simultaneously, select **Quick Add Rule** and set **Priority** to specify the position where the rules are inserted.
        
-   Batch import: To add rules with policies in batch, use the provided template to **Import Rule**.
    
    -   Fill in all parameters listed in the template. Rules with missing parameters cannot be imported.
        
    -   Prefix lists **cannot** be referenced in batch imports.
        
    -   Successfully imported rules will be added sequentially based on existing rules and will not overwrite existing rules.
        

#### **Reorder rules**

Click **Manage Inbound Rule** or **Manage Outbound Rule**, and then drag rules up and down to adjust their priorities.

#### **Delete rules**

Click **Delete** in the **Actions** column of the target network ACL rules.

### **API**

-   Call [UpdateNetworkAclEntries](/help/en/vpc/developer-reference/api-vpc-2016-04-28-updatenetworkaclentries) to update network ACL rules. Unlike the console, this API performs a full update of ACL rules. If only new rules are passed in, the original rules will be deleted. You must pass in all rules that need to be retained.
    
-   Call [CopyNetworkAclEntries](/help/en/vpc/developer-reference/api-vpc-2016-04-28-copynetworkaclentries) to copy rules from one network ACL to another.
    
    To ensure all rules can be correctly identified and received, ensure that both VPCs either have only IPv4 CIDR blocks or both have IPv6 enabled. Network ACLs in VPCs without IPv6 enabled cannot configure IPv6 rules.
    
    After copying rules to a network ACL in a VPC with IPv6 enabled, the system will not automatically add custom rules to allow all IPv6 traffic, which may affect IPv6 communication.
    

### **Terraform**

This example adds deny rules in both inbound and outbound directions. Modify the rules according to your access control policy.

> Resource: [alicloud\_network\_acl](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/network_acl)

```
# Specify the region of the network ACL.
provider "alicloud" {
  region = "ap-southeast-1"
}

# Specify the VPC ID.
variable "vpc_id" {
  default = "vpc-t41k******" # Replace the value with the actual ID of the VPC.
}

# Specify the vSwitch ID.
variable "vswitch_id" {
  default = "vsw-t41y******" # Replace the value with the actual ID of the vSwitch.
}

# Create a network ACL and associate it with a vSwitch.
resource "alicloud_network_acl" "example_network_acl" {
  vpc_id           = var.vpc_id # Specify the VPC to which the network ACL belongs.
  network_acl_name = "example_network_acl_name"
  resources {
    resource_id   = var.vswitch_id # Specify the vSwitch with which you want to associate the network ACL.
    resource_type = "VSwitch"
  }
  ingress_acl_entries { # Specify inbound rules.
    network_acl_entry_name = "example-ingress"
    protocol               = "tcp"         # The protocol type.
    source_cidr_ip         = "10.0.0.0/24" # The source address. 
    port                   = "20/80"       # The port range.
    policy                 = "drop"        # The policy.
  }
  egress_acl_entries { # Specify outbound rules.
    network_acl_entry_name = "example-egress"
    protocol               = "tcp"
    destination_cidr_ip    = "10.0.0.0/24" # The destination address. 
    port                   = "20/80"       # The port range.
    policy                 = "drop"        # The policy.
  }
}
```

## **Example**

### **Restrict communication between ECS instances in different vSwitches**

By default, resources in different vSwitches within the same VPC can communicate over the private network. To restrict their communication, use a network ACL to deny access from specific IP addresses.

As shown in the figure, you can configure inbound and outbound rules for the network ACL associated with vSwitch 1 to prevent instances in vSwitch 1 from communicating with ECS06.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8093113771/CAEQUxiBgICD9M7_3hkiIGZiZGIxYzkxMTdhMTRkZGU4ZjhiNDRjYmMyYjMxOTQw5274221_20250627113930.173.svg)

### **Restrict access to only specific IPs**

After you connect an on-premises data center to a VPC using Express Connect, all resources in the data center can access the cloud services. Use a network ACL to allow access only from specific IP addresses and deny all other access.

As shown in the figure, you can configure inbound and outbound rules for the network ACL associated with the vSwitch to allow only on-premises server 1 and server 2 to access the instances within the vSwitch.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8093113771/CAEQUxiBgMC6v9H_3hkiIGY3NjdiMWEwZmE4NDQzMGJiMWFjYzk5YWMwMmExNTYz5274221_20250627113930.173.svg)

## **Troubleshooting**

If you experience connection timeouts, unexpected traffic blocks, or IPv6 connectivity issues, follow this checklist:

1.  **Validate rule logic & priority**
    
    -   Check for rule shadowing: Ensure a high-priority Deny rule is not overriding an Allow rule because rules are evaluated in an ascending order from Priority 1.
        
    -   Configure return traffic: Add an outbound rule that allows traffic to the client's ephemeral ports (typically 1024-65535). An inbound Allow rule does not automatically permit return traffic.
        
    
2.  **Verify association & scope**
    
    -   vSwitch association: Confirm that the Network ACL is correctly bound to the target vSwitch.
        
    -   IPv6 configuration: IPv4 rules do not apply to IPv6 traffic. Ensure IPv6 is enabled for the VPC, the vSwitch has a valid IPv6 CIDR, and specific IPv6 rules are configured.
        
3.  **Check external dependencies**
    
    -   Security group conflicts: Traffic must be permitted by both the network ACL (vSwitch level) and the security group (instance level). If either denies the traffic, the connection will fail.
        
    -   CIDR accuracy: Verify source and destination CIDR blocks.
        

## More information

### **Billing**

The network ACL feature is free of charge.

### **Supported regions**

**Area**

**Regions that support network ACLs**

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
