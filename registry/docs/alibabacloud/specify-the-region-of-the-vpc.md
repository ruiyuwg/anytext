A Dynamic Host Configuration Protocol (DHCP) options set lets you configure Domain Name System (DNS) server IP addresses and search domains for your Elastic Compute Service (ECS) instances. This feature reduces the reliance on fixed IP addresses for communication between instances and simplifies network management. When you access an ECS instance by its hostname, the system appends the search domain and queries the DNS server to resolve the domain name to an IP address.

## How it works

A DHCP options set configures parameters such as the **DNS Server IP** and **Domain Name** for all ECS instances in an associated virtual private cloud (VPC). This allows instances to communicate with each other using hostnames or fully qualified domain names (FQDNs) without relying on fixed IP addresses.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5963181671/CAEQThiBgIDTgN_Q0RkiIGIzZDg2MGMxNDY5MTQ4NzU4MzkyNWVjMmEwNWVkNzJh5089030_20250428162554.630.svg)

**Step**

**Description**

1

In a VPC, ECS instances use a DHCP options set to get their network configuration, which includes the domain name and DNS server IP address. This information is embedded into the system configuration of each ECS instance.

2

When an ECS instance queries the DNS server, it retrieves the IP address associated with a DNS hostname.

2

Access the ECS instance based on the resolution result.

### **Configure a domain name: Communicate using hostnames**

A complete private domain name consists of a hostname and a domain name. For example, in `host01.host.prvz`, the hostname is `host01` and the domain name is `host.prvz`.

After you configure DNS records for ECS instances on a DNS server, the instances can be accessed by their full private domain names. To simplify communication using only hostnames, you can edit the DNS configuration file of an ECS instance by running the `vim /etc/resolv.conf` command and adding `search host.prvz`. This sets `host.prvz` as the DNS search domain.

However, manually configuring each ECS instance can be inefficient and can lead to inconsistent configurations. When you configure a domain name in an associated DHCP options set, ECS instances in the VPC can obtain the domain name through DHCP. The domain name is then written to the `/etc/resolv.conf` file to set the DNS search domain for all instances. When you access an ECS instance by its hostname, the system appends the search domain and queries the specified DNS server to resolve the full domain name to an IP address.

### **Configure a DNS server IP: Query DNS records**

A DNS server maintains DNS records. When an ECS instance runs the `ping host01.host.prvz` command, it sends a query request to the specified DNS server. The DNS server then returns the corresponding IP address.

> When you create an ECS instance from an official image, Alibaba Cloud automatically configures default DNS servers for the instance through [DHCP](https://www.rfc-editor.org/rfc/rfc2131). The IP addresses of the default DNS servers are 100.100.2.136 and 100.100.2.138.

**Dimension**

**Enable DNS hostnames**

**Private Zone**

**On-premises DNS service**

DHCP options set type

Default DHCP options set

Custom DHCP options set

Custom DHCP options set

Domain name configuration

ECS private domain name: \[regionID\].ecs.internal

Default DNS servers

Custom domain name

Default DNS servers

Custom domain name

Self-managed DNS servers

Billing

No charges for domain names.

Based on the number of added domain names and the DNS query volume, [charges apply](/help/en/dns/product-billing)

No charges for domain names.

Cross-VPC and hybrid cloud communication using private domain names

Not supported

Supported

Supported

> The performance of a DNS query depends on the DNS server that is used. For more information about the query performance of the Alibaba Cloud default DNS server, see [Limits of private zone](/help/en/dns/limits-pvtz#td-sss-vz2-tsl).

## Create or delete a DHCP options set

To reduce reliance on fixed IP addresses and use hostnames or full domain names for communication, use a DHCP options set to configure the DNS server IP addresses and search domains for all ECS instances in an associated VPC. When an ECS instance runs the `ping <hostname>` command, the system appends the search domain, for example, `hostname.example.com`, and queries the specified DNS server to resolve the domain name to an IP address.

> A DHCP options set can be associated with multiple VPCs in the same region, but a VPC can be associated with only one DHCP options set in the same region.

### **Console**

#### **Create a DHCP options set**

When you enable DNS hostnames for a VPC in a region for the first time, a default DHCP options set is automatically created and associated with the VPC. You cannot modify a default DHCP options set. Go to the [VPC console - DHCP Options Sets](https://vpc.console.alibabacloud.com/dhcp/cn-hangzhou/dhcps) page and click **Create DHCP Options Set** to configure the **Domain Name** and **DNS Server IP** parameters for your DNS service.

> If the VPC is already associated with another DHCP options set, the default DHCP options set is not associated with the VPC after you enable DNS hostnames for the VPC. You must modify the association yourself.

#### **Associate a VPC**

You can create, change, or remove the association between a VPC and a DHCP options set on the details page of the VPC, in the **DHCP Options Set** section. You can also manage the association in the **Actions** column or on the details page of the DHCP options set.

-   After an association is changed, new ECS instances automatically use the latest configuration. For existing ECS instances, you must restart their DHCP process to apply the new configuration by running the `sudo dhclient -r eth0 && sudo dhclient eth0` command. If an association is removed, Alibaba Cloud configures the default DNS servers for the ECS instances through DHCP. To ensure the new configuration takes effect on existing instances without affecting your services, you can restart the instances or their network services.
    
    Commands to restart network services on common operating systems
    
    **Operating system**
    
    **Version**
    
    **Command to restart network service**
    
    CentOS
    
    6
    
    service network restart
    
    7
    
    systemctl restart network
    
    8
    
    systemctl restart NetworkManager
    
    Debian
    
    8
    
    systemctl restart networking
    
    9
    
    systemctl restart networking
    
    10
    
    systemctl restart networking
    
    Ubuntu
    
    14
    
    service networking restart
    
    16
    
    systemctl restart networking
    
    18
    
    systemctl restart systemd-networkd
    
    20
    
    systemctl restart systemd-networkd
    
    Alibaba Cloud Linux 2
    
    2
    
    systemctl restart network
    
    Alibaba Cloud Linux 3
    
    3
    
    systemctl restart NetworkManager
    
-   If the VPC associated with the DHCP option set has the [shared VPC](/help/en/vpc/vpc-sharing#concept-2438978) feature enabled, the DHCP option set also applies to ECS instances within the shared VPC.
    

#### **Modify a DHCP options set**

You cannot modify a default DHCP options set. You can modify the domain name and DNS server IP addresses specified in a custom DHCP options set.

After you modify a DHCP options set, new ECS instances in the associated VPC automatically use the new configuration. For existing ECS instances, you must restart their DHCP process to apply the changes. To avoid service interruptions, you can also restart the instances or their network services to ensure the new configuration is applied.

#### **Delete a DHCP options set**

Make sure that the DHCP options set is not associated with any VPCs. Then, in the **Actions** column or on the details page of the target DHCP options set, click **Delete**.

### **API**

> When you enable DNS hostnames for a VPC in a region for the first time, a default DHCP options set is automatically created and associated with the VPC.

> After you modify the configuration of a DHCP options set or change its association, new ECS instances automatically use the latest configuration. For existing ECS instances, you must restart the instances, restart the DHCP process on the instances, or restart the network services to apply the latest configuration.

-   Call [CreateDhcpOptionsSet](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createdhcpoptionsset) to create a DHCP option set.
    
-   Call [AttachDhcpOptionsSetToVpc](/help/en/vpc/developer-reference/api-vpc-2016-04-28-attachdhcpoptionssettovpc) to attach the DHCP option set to the target VPC.
    
-   Call [DetachDhcpOptionsSetFromVpc](/help/en/vpc/developer-reference/api-vpc-2016-04-28-detachdhcpoptionssetfromvpc) to detach the DHCP option set from the target VPC.
    
-   Call [ReplaceVpcDhcpOptionsSet](/help/en/vpc/developer-reference/api-vpc-2016-04-28-replacevpcdhcpoptionsset) to change the DHCP option set associated with a VPC.
    
-   Call [UpdateDhcpOptionsSetAttribute](/help/en/vpc/developer-reference/api-vpc-2016-04-28-updatedhcpoptionssetattribute) to modify the DHCP option set configuration.
    
-   Call [DeleteDhcpOptionsSet](/help/en/vpc/developer-reference/api-vpc-2016-04-28-deletedhcpoptionsset) to delete a DHCP option set.
    

### **Terraform**

> Resources: [alicloud\_vpc\_dhcp\_options\_set](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_dhcp_options_set), [alicloud\_vpc\_dhcp\_options\_set\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_dhcp_options_set_attachment)

```
# Specify the region of the VPC.
provider "alicloud" {
  region = "cn-hangzhou"
}

# Create a DHCP options set.
resource "alicloud_vpc_dhcp_options_set" "test_dhcp_options_set" {
  dhcp_options_set_name = "test_dhcp_options_set_name"
  domain_name           = "example.com"                 # Specify the domain name.
  domain_name_servers   = "100.100.2.136,100.100.2.138" # Specify the DNS server IP addresses.
}

# Associate the DHCP options set with a VPC.
resource "alicloud_vpc_dhcp_options_set_attachment" "test_attachment_vpc" {
  vpc_id              = "vpc-8vbg******"                                       # Specify the ID of the VPC to associate.
  dhcp_options_set_id = alicloud_vpc_dhcp_options_set.test_dhcp_options_set.id # Specify the ID of the DHCP options set to associate.
}
```

## Enable DNS hostnames

To enable communication within a VPC using private domain names, you can enable DNS hostnames for the VPC and configure private domain resolution for ECS instances. This allows private zone to automatically maintain the DNS records, which reduces maintenance time and costs. The VPC is then associated with the default DHCP options set, which specifies a common [ECS built-in authoritative domain name \[regionID\].ecs.internal](/help/en/ecs/user-guide/ecs-private-domain-resolution#9973d59c755ry) for ECS instances.

> 1\. When you enable DNS hostnames for a VPC in a region for the first time, a default DHCP options set is automatically created and associated with the VPC. When you enable DNS hostnames for other VPCs in the same region, the system automatically associates the default DHCP options set with those VPCs.

> 2\. If the VPC is already associated with another DHCP options set, the default DHCP options set is not associated with the VPC after you enable DNS hostnames for the VPC. You must modify the association yourself.

> 3\. Communication using private domain names across VPCs or in hybrid cloud scenarios is not supported.

### **Console**

#### **Enable DNS hostnames**

1.  Go to the [VPC console](https://vpc.console.alibabacloud.com/vpc/cn-hangzhou/vpcs). On the **Basic Information** page of the target VPC, click **Enable** next to DNS Hostname.
    
2.  Go to the [ECS console](https://ecs.console.alibabacloud.com/server/region/cn-hangzhou) to configure private domain resolution for an ECS instance. The ECS instance can then be accessed by its hostname from other ECS instances in the same VPC.
    
    When you **Create Instance**, expand **Advanced (Optional)** and configure **Private DNS Resolution**. Select whether to resolve an IP-formatted hostname or an instance ID-formatted hostname to the primary private IPv4 address of the instance.
    
    > You cannot change an instance ID. If the IP address of an instance changes, the DNS record is automatically updated to map the new IP-formatted hostname to the new IP address.
    
    > After an IPv6 address is assigned to an instance, you can select DNS resolution from an instance ID-formatted hostname to the primary private IPv6 address of the instance.
    
    For an existing ECS instance, in the **Actions** column, choose ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9121852571/p950924.png) > **Instance Properties** > **Edit Instance Properties** and select the mapping between the private domain name and the IP address.
    

#### **Disable DNS hostnames**

On the **Basic Information** page of the target VPC, click **Disable** next to DNS Hostname. The domain name assigned by Alibaba Cloud is disabled, and the private domain name of the ECS instance can no longer be resolved to its IP address.

> The system automatically dissociates the VPC from the default DHCP options set but does not delete the DHCP options set. To delete the set, you must first ensure it is not associated with any VPCs.

### **API**

> Unlike in the console, when calling [CreateVpc](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createvpc) to create a VPC, you can set the `EnableDnsHostname` parameter to enable or disable DNS hostnames.

-   Modify the `EnableDnsHostname` parameter of [ModifyVpcAttribute](/help/en/vpc/developer-reference/api-vpc-2016-04-28-modifyvpcattribute) to enable or disable DNS hostnames.
    
-   When you call [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) to create an instance, specify the `PrivateDnsNameOptions` parameters to configure private domain name resolution for the instance.
    
-   Modify the `PrivateDnsNameOptions` parameter of [ModifyInstanceAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstanceattribute) to configure private domain resolution for the target ECS instance.
    

### **Terraform**

> You cannot use Terraform to configure private domain resolution for ECS instances. This example only enables DNS hostnames for a VPC.

> Resources: [alicloud\_vpc](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc), [alicloud\_vswitch](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vswitch)

> Data Sources: [alicloud\_zones](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/zones)

```
# Specify the region where you want to create the VPC. 
provider "alicloud" {
  region = "cn-hangzhou"
}

# Create a VPC. 
resource "alicloud_vpc" "test_vpc" {
  vpc_name            = "test_vpc_name"
  cidr_block          = "10.0.0.0/16"
  dns_hostname_status = "ENABLED" # Enable DNS hostnames.
}
```

## **Communicate using custom domain names**

You cannot modify the private domain names of ECS instances that are generated after you enable DNS hostnames. To use custom domain names, you can use Alibaba Cloud Private DNS or a self-managed DNS service.

### **Use private zone**

Use [private zone](/help/en/dns/form-filling-mode) to manage DNS records for your ECS instances. This is a paid service, and [fees are based](/help/en/dns/product-billing) on the number of domain names and DNS queries.

#### **Console**

1.  Go to the [Private Zone](https://dnsnext.console.alibabacloud.com/privateDNS/zones), click **Add Zone**, configure a custom **Add Zone**, and set the **Effective Scope** to the target VPC.
    
    Click the ID of the target domain name. On the **ECS Hostname** tab, click **Add ECS Hostname**. The system automatically adds DNS records for the hostnames and IP addresses of the ECS instances in the selected region. However, the record is not automatically updated if a hostname is modified. To address this, you can enable **Auto Sync**. The system then automatically adds and synchronizes DNS records for the selected region every minute. To use a custom domain prefix, go to the **DNS Records** tab and add a custom **Host Record**.
    
2.  Go to the [VPC console - DHCP Options Sets](https://vpc.console.alibabacloud.com/dhcp/cn-hangzhou/dhcps) page, **Create A DHCP Options Set**, and set the **Domain Name** to the corresponding built-in authoritative domain name.
    
3.  In the **Actions** column of the target DHCP options set, select **Associate VPC**. ECS instances with configured DNS records can then be accessed by their hostnames or host records from other ECS instances in the associated VPC.
    

#### **API**

Call the following API operations to use the Alibaba Cloud private zone service:

1.  Call [AddZone](/help/en/dns/api-pvtz-2018-01-01-addzone) to add a private zone.
    
2.  Call the API operation to [add a DNS record](/help/en/dns/api-pvtz-2018-01-01-addzonerecord), or call [UpdateSyncEcsHostTask](/help/en/dns/api-pvtz-2018-01-01-updatesyncecshosttask) to configure hostname synchronization.
    
3.  Call [CreateDhcpOptionsSet](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createdhcpoptionsset) to create a DHCP options set.
    
4.  Call [AttachDhcpOptionsSetToVpc](/help/en/vpc/developer-reference/api-vpc-2016-04-28-attachdhcpoptionssettovpc) to associate a DHCP options set with a VPC.
    

#### **Terraform**

> Automatic addition of ECS hostname records is not supported. You must add custom DNS records one by one.

> Resources: [alicloud\_pvtz\_zone](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/pvtz_zone), [alicloud\_pvtz\_zone\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/pvtz_zone_attachment), [alicloud\_pvtz\_zone\_record](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/pvtz_zone_record), [alicloud\_vpc\_dhcp\_options\_set](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_dhcp_options_set), [alicloud\_vpc\_dhcp\_options\_set\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_dhcp_options_set_attachment)

```
# Specify the region of the target VPC.
provider "alicloud" {
  region = "cn-hangzhou"
}

# Configure a built-in authoritative zone.
resource "alicloud_pvtz_zone" "test_pvtz_zone" {
  zone_name = "example.com"
}

# Set the scope of the domain name.
resource "alicloud_pvtz_zone_attachment" "test_pvtz_zone_attachment" {
  zone_id = alicloud_pvtz_zone.test_pvtz_zone.id
  vpc_ids = ["vpc-8vba******"] # Specify the ID of the VPC where the domain name takes effect.
}

# Add a DNS record.
resource "alicloud_pvtz_zone_record" "test_pvtz_zone_record" {
  zone_id = alicloud_pvtz_zone.test_pvtz_zone.id
  rr      = "abc"         # Specify the host record.
  type    = "A"           # Specify the DNS record type.
  value   = "192.168.0.4" # Specify the DNS record value.
}

# Create a DHCP options set.
resource "alicloud_vpc_dhcp_options_set" "test_dhcp_options_set" {
  dhcp_options_set_name = "test_dhcp_options_set_name"
  domain_name           = "example.com"                 # Specify the domain name.
  domain_name_servers   = "100.100.2.136,100.100.2.138" # Specify the IP addresses of the Alibaba Cloud default DNS servers. 
}

# Associate the DHCP options set with a VPC.
resource "alicloud_vpc_dhcp_options_set_attachment" "test_attachment_vpc" {
  vpc_id              = "vpc-8vba******"                                       # Specify the ID of the VPC to associate.
  dhcp_options_set_id = alicloud_vpc_dhcp_options_set.test_dhcp_options_set.id # Specify the ID of the DHCP options set to associate.
}
```

### **Use an on-premises DNS service**

If your business requires flexible DNS scheduling policies, such as dynamically returning the optimal IP address based on factors such as geographic location, network quality, and server load, you can build your own DNS servers. However, you must maintain the DNS records and ensure service reliability. The following example shows how to deploy a self-managed DNS service and use a DHCP options set to specify the self-managed DNS server IP address and a custom domain name for your ECS instances.

Example of deploying a self-managed DNS service using BIND

1.  Run the `yum install -y bind bind-utils` command to install BIND.
    
2.  Run the `vim /etc/named.conf` command to modify the main configuration file.
    
    ```
    listen-on port 53 { any; };  # Listen on port 53 of all network interfaces.
    allow-query     { any; };    # Allow DNS queries from any IP address.
    ```
    
3.  Run the `vim /etc/named.rfc1912.zones` command to configure the zone file.
    
    ```
    // Custom domain name
    zone "example.com" IN {
          type master;
          file "example.com.zone";
    };
    
    zone "0.168.192.in-addr.arpa" IN {
          type master;
          file "0.168.192.zone";
    };
    ```
    
4.  Run the `cp -p /var/named/named.localhost /var/named/example.com.zone` and `vim /var/named/example.com.zone` commands to configure the forward DNS lookup file.
    
    ```
    $TTL 1D
    @       IN      SOA     example.com.  admin.example.com. (
                                                               1       ; serial
                                                               1D      ; refresh
                                                               1H      ; retry
                                                               1W      ; expire
                                                               3H )    ; minimum
    
                  NS      dns.example.com.
    Web01         A       192.168.0.2; 
    Web02         A       192.168.0.3;
    ```
    
5.  Run the `cp -p /var/named/named.empty /var/named/0.168.192.zone` and `vim /var/named/0.168.192.zone` commands to configure the reverse DNS lookup file.
    
    ```
    $TTL 3H
    @       IN      SOA     0.168.192.in-addr.arpa. admin.zjq.com. (
                                                               1       ; serial
                                                               1D      ; refresh
                                                               1H      ; retry
                                                               1W      ; expire
                                                               3H )    ; minimum
    
                  NS      dns.example.com.
    2            PTR     Web01.example.com.
    3            PTR     Web02.example.com.
    ```
    
6.  Run the `systemctl restart named` command to restart the BIND service.
    

To use the Alibaba Cloud DNS service together with your on-premises DNS service, you must configure forwarding rules for your on-premises DNS server. This forwards queries for domain names other than your custom domain name to the Alibaba Cloud default DNS servers.

Configure forwarding rules for an on-premises DNS server

Run the `vim /etc/named.conf` command to modify the configuration file.

```
// Default forwarding: Forward other requests to the default DNS servers.
options {
    forwarders { 100.100.2.136; 100.100.2.138; };  # Alibaba Cloud VPC default DNS servers
    forward only;
};
// Configure authoritative DNS resolution for the self-managed DNS server. Replace "example.com" with your custom domain name.
zone "example.com" {
    type master;
    file "example.com.zone";  # DNS record configuration file
};
```

> Keep the following in mind when you specify DNS server IP addresses in a custom DHCP options set:

> 1\. The console automatically populates the IP addresses of Alibaba Cloud's default DNS servers (100.100.2.136 and 100.100.2.138). If you delete these IP addresses, you may lose access to basic Alibaba Cloud services. Proceed with caution. If you use an API, you must include these IP addresses in your call.

> 2\. Make sure to place the IP address of your self-managed DNS server first in the list. Otherwise, query requests are sent to the Alibaba Cloud default DNS servers first. Because the default DNS servers cannot resolve custom domain names, they return an `NXDOMAIN` response. The system then considers the query complete and does not query the subsequent servers. As a result, the private domain name cannot be resolved.

> 3\. You must add a rule to the [security group](/help/en/ecs/user-guide/manage-security-group-rules#concept-sm5-2wz-xdb) and [network ACL](/help/en/vpc/work-with-network-acls#section-t47-8t3-fba) (if any) of the associated VPC to allow access to the IP address of your self-managed DNS server. Otherwise, domain name resolution may fail.

> 4\. IPv6 addresses are not supported for custom server IP addresses.

#### **Console**

1.  Go to the [VPC console - DHCP Options Sets](https://vpc.console.alibabacloud.com/dhcp/cn-hangzhou/dhcps) page, click **Create DHCP Options Set**, set the **Domain Name** to the domain name used in your self-managed DNS service, click **Custom Server IP**, and place the IP address of your self-managed DNS server first in the list.
    
2.  In the **Actions** column of the target DHCP options set, select **Associate VPC**. ECS instances with configured DNS records can then be accessed by their hostnames from other ECS instances in the associated VPC.
    

#### **API**

Call the following API operations to create a custom DHCP options set, specify a domain name and an on-premises DNS server IP address, and associate the set with a VPC.

1.  [CreateDhcpOptionsSet - Create a DHCP options set](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createdhcpoptionsset)
    
2.  [AttachDhcpOptionsSetToVpc - Associate a DHCP option set with a VPC](/help/en/vpc/developer-reference/api-vpc-2016-04-28-attachdhcpoptionssettovpc)
    

#### **Terraform**

> Resource: [alicloud\_vpc\_dhcp\_options\_set](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_dhcp_options_set), [alicloud\_vpc\_dhcp\_options\_set\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_dhcp_options_set_attachment)

```
# Specify the region of the VPC.
provider "alicloud" {
  region = "cn-hangzhou"
}

# Create a DHCP options set.
resource "alicloud_vpc_dhcp_options_set" "test_dhcp_options_set" {
  dhcp_options_set_name = "test_dhcp_options_set_name"
  domain_name           = "example.com"                              # Specify the domain name.
  domain_name_servers   = "192.168.0.10,100.100.2.136,100.100.2.138" # Specify the DNS server IP addresses. Place the IP address of the self-managed DNS server first.
}

# Associate the DHCP options set with a VPC.
resource "alicloud_vpc_dhcp_options_set_attachment" "test_attachment_vpc" {
  vpc_id              = "vpc-8vbg******"                                       # Specify the ID of the VPC to associate.
  dhcp_options_set_id = alicloud_vpc_dhcp_options_set.test_dhcp_options_set.id # Specify the ID of the DHCP options set to associate.
}
```

## More information

### **Billing**

The DHCP options set feature is free of charge.

### **Supported regions**

**Area**

**Regions**

Asia Pacific - China

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Guangzhou), China (Chengdu), and China (Hong Kong)

Asia Pacific - Others

Japan (Tokyo), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), and Thailand (Bangkok)

Europe & Americas

Germany (Frankfurt), UK (London), US (Silicon Valley), US (Virginia), and Mexico

Middle East

UAE (Dubai) and SAU (Riyadh - Partner Region)

**Important**

The SAU (Riyadh - Partner Region) region is operated by a partner.

### **Quotas**

Quota

Description

Default limit

Adjustable

N/A

Number of DHCP options sets that can be created per account

> Default DHCP options sets do not count against this quota.

10

No

Number of VPCs that can be associated with a DHCP options set

10

Number of DHCP options sets that can be associated with a VPC

1

Number of domain names that can be configured in a single DHCP options set

1

Number of DNS server IP addresses that can be configured in a DHCP options set

4
