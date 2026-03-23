A virtual private cloud (VPC) is a private network in the cloud over which you have full control. A VPC is a region-level resource where you can create and use Alibaba Cloud resources, such as Elastic Compute Service (ECS) and ApsaraDB RDS instances.

A vSwitch is a zone-level resource that you can use to divide a VPC into subnets. vSwitches in the same VPC can communicate with each other. Deploy cloud resources to vSwitches across zones to improve application availability and prevent service interruptions caused by single points of failure (SPOFs).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8066430771/CAEQSRiBgMDAiIfhwxkiIDc2ZTM1ZjE1NWJlNDQ5MTJiYTFjYTI2NDFhNmQwY2Vh5274221_20250627113930.173.svg)

## **Network planning**

Proper network planning is essential to avoid CIDR block conflicts and ensure network scalability. Improper network planning can lead to high rebuilding costs. Therefore, we recommend [planning your network](/help/en/vpc/vpc-network-planning) before creating a VPC.

## Create or delete a VPC and a vSwitch

### **Console**

#### **Create a VPC and a vSwitch**

1.  Go to the [Create VPC](https://vpc.console.alibabacloud.com/vpc/cn-hangzhou/vpcs/new) page in the VPC console.
    
2.  **Configure VPC**:
    
    1.  **Region**: Select the region where you want to create cloud resources.
        
    2.  **IPv4 CIDR block**: Select a CIDR block suggested by the console or enter a custom CIDR block. For scenarios such as connecting multiple VPCs, we recommend configuring a non-overlapping CIDR block to prevent conflicts with your existing VPCs. To prevent CIDR block conflicts and ensure network scalability, consider [creating a VPC using IPAM](#ce042154bbukc).
        
        > 1\. Use the private IPv4 addresses specified in [RFC 1918](https://www.rfc-editor.org/rfc/rfc1918) as the CIDR block of the VPC with a mask length of 16 to 28. For example, you can use 10.0.0.0/16, 172.16.0.0/16, or 192.168.0.0/16.
        
        > 2\. You cannot use 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 as the IPv4 CIDR block of the VPC.
        
3.  **Configure vSwitch**:
    
    1.  **Zone**: Select a zone where you want to create cloud resources based on the support status and resource inventory.
        
    2.  **IPv4 CIDR block**: Select the default CIDR block or specify a custom CIDR block.
        
    3.  **Add vSwitches**: To prevent service interruptions caused by SPOFs, you can create vSwitches across zones. You can either add more vSwitches when you create a VPC or later on the [VPC console - vSwitch](https://vpc.console.alibabacloud.com/vpc/cn-hangzhou/switches).
        

#### **Delete a VPC and a vSwitch**

In the **Actions** column or on the details page of the target VPC or vSwitch, click **Delete**. The system checks for existing cloud resources or associated resources. If dependent resources exist, you must release them before you can delete the VPC and vSwitch.

> 1\. Before you delete a vSwitch, make sure the vSwitch is not shared, is not associated with a custom route table or a network ACL, and contains no cloud resources.

> 2\. Before you delete a VPC, make sure all resources in the VPC are released and the VPC is not associated with network services such as Cloud Enterprise Network (CEN).

## API

> Unlike the console, the CreateVpc operation creates only an empty VPC. You must call the CreateVSwitch operation to create a vSwitch.

-   Call [CreateVpc](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createvpc) and [CreateVSwitch](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createvswitch) in sequence to create a VPC and a vSwitch.
    
-   Call [DeleteVSwitch](/help/en/vpc/developer-reference/api-vpc-2016-04-28-deletevswitch) and [DeleteVpc](/help/en/vpc/developer-reference/api-vpc-2016-04-28-deletevpc) in sequence to delete the vSwitch and the VPC.
    
    > 1\. Before you delete a vSwitch, make sure the vSwitch is not shared, is not associated with a custom route table or a network ACL, and contains no cloud resources.
    
    > 2\. Before you delete a VPC, make sure all resources in the VPC are released and the VPC is not associated with network services such as Cloud Enterprise Network (CEN).
    

### **Terraform**

> Resources: [alicloud\_vpc](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc), [alicloud\_vswitch](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vswitch)

> Data Sources: [alicloud\_zones](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/zones)

```
# Specify the region where you want to create the VPC.
provider "alicloud" {
  region = "cn-hangzhou"
}

# Use a data source to automatically obtain a list of zones where you can create vSwitches.
data "alicloud_zones" "available_zones" {
  available_resource_creation = "VSwitch" # Query the zones where vSwitches can be created in the VPC.
  # available_instance_type = "ecs.g7.large"  # Query the zones where ECS instances can be created in the VPC.
  # available_resource_creation = "slb"  # Query the zones where SLB instances can be created in the VPC.
}

# Create a VPC. 
resource "alicloud_vpc" "example_vpc" {
  vpc_name   = "example_vpc_name"
  cidr_block = "10.0.0.0/16" #Specify the CIDR block. 
}

# Create a vSwitch. 
resource "alicloud_vswitch" "example_vswitch" {
  vswitch_name = "example_vswitch_name"
  cidr_block   = "10.0.0.0/24"                                  # Specify the CIDR block. 
  vpc_id       = alicloud_vpc.example_vpc.id                       # Specify the ID of the VPC to which the vSwitch belongs. 
  zone_id      = data.alicloud_zones.available_zones.zones.0.id # Specify the zone to which the vSwitch belongs.
}
```

## Enable or disable IPv6

After you enable IPv6 for a VPC and vSwitches, only private communication is supported by default. If you require Internet access, click [enable IPv6 Internet bandwidth](/help/en/ipv6-gateway/user-guide/enable-and-manage-ipv6-internet-bandwidth#section-dvo-wjp-zcb).

> [Regions that support IPv4/IPv6 dual-stack](/help/en/vpc/regions-that-support-vpc-features#ea01434f4017w).

### **Console**

#### **Enable IPv6**

-   When creating a VPC and a vSwitch, choose one of the following ways:
    
    -   Choose **Allocated by system** and select **Assign BGP (Multi-ISP)** from the drop-down list. The system automatically creates an [IPv6 Gateway](/help/en/ipv6-gateway/product-overview/what-is-an-ipv6-gateway/) and assigns an IPv6 CIDR block.
        
    -   Choose **Allocated by IPAM** to centralize address management. Select an IPAM pool with a pre-configured IPv6 CIDR. Then, configure the mask or specify a custom CIDR to allocate an IPv6 CIDR from that pool.
        
-   For an existing VPC, click **Enable IPv6** in the **IPv6 CIDR Block** column of the VPC.
    
    -   Choose either **Allocated by system** or **Allocated by IPAM**.
        
    -   When choosing allocation by system, you can check the **Automatically Enable IPv6 for All vSwitches** box. When left unchecked or when you choose to allocate by IPAM, click **Enable IPv6** in the **IPv6 CIDR** column of the target vSwitch to enable IPv6 for the vSwitch.
        

#### **Disable IPv6**

Click **Disable IPv6** in the **IPv6 CIDR Block** column of the target VPC or vSwitch. Before disabling IPv6 for a VPC, you must disable IPv6 for all vSwitches in it and delete its IPv6 Gateway.

### **API**

> Unlike the console, an IPv6 Gateway is not created automatically when enabling IPv6 through the API. You must call [CreateIpv6Gateway](/help/en/ipv6-gateway/developer-reference/api-vpc-2016-04-28-createipv6gateway-ipv6s) to create an IPv6 Gateway.

-   When creating a VPC and a vSwitch, set the `EnableIPv6` parameter in the [CreateVpc](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createvpc) and [CreateVSwitch](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createvswitch) API calls to enable or disable IPv6. If you pass in `Ipv6IpamPoolId` and `Ipv6CidrMask`, an IPv6 CIDR block will be allocated from the IPv6 address pool to the VPC.
    
-   For existing VPCs and vSwitches, modify the `EnableIPv6` parameter of [ModifyVpcAttribute](/help/en/vpc/developer-reference/api-vpc-2016-04-28-modifyvpcattribute) and [ModifyVSwitchAttribute](/help/en/vpc/developer-reference/api-vpc-2016-04-28-modifyvswitchattribute) to enable or disable IPv6. To allocate an IPv6 CIDR block from the IPv6 address pool to a VPC, call [AssociateVpcCidrBlock](/help/en/vpc/developer-reference/api-vpc-2016-04-28-associatevpccidrblock).
    

### **Terraform**

> Terraform currently supports only system-assigned IPv6 CIDR blocks and does not yet support allocating from IPAM.

> Resources: [alicloud\_vpc](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc), [alicloud\_vswitch](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vswitch)

> Data Sources: [alicloud\_zones](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/zones)

```
# Specify the region where you want to create the VPC.
provider "alicloud" {
  region = "cn-hangzhou"
}

# Use a data source to automatically obtain a list of zones where you can create vSwitches.
data "alicloud_zones" "available_zones" {
  available_resource_creation = "VSwitch" # Query the zones where vSwitches can be created in the VPC.
  # available_instance_type = "ecs.g7.large"  # Query the zones where ECS instances can be created in the VPC.
  # available_resource_creation = "slb"  # Query the zones where SLB instances can be created in the VPC.
}

# Create a dual-stack VPC. 
resource "alicloud_vpc" "example_vpc" {
  vpc_name    = "example_vpc_name"
  cidr_block  = "10.0.0.0/16"
  enable_ipv6 = true  # Enable IPv6. Set the value to false to disable IPv6.
  ipv6_isp    = "BGP" # Specify the type of the IPv6 CIDR block.
}

# Create a dual-stack vSwitch. 
resource "alicloud_vswitch" "example_vswitch" {
  vswitch_name         = "example_vswitch_name"
  cidr_block           = "10.0.0.0/24"
  vpc_id               = alicloud_vpc.example_vpc.id
  zone_id              = data.alicloud_zones.available_zones.zones.0.id
  enable_ipv6          = true # Enable IPv6. Set the value to false to disable IPv6.
  ipv6_cidr_block_mask = 1    # Specify the last 8 bits of the IPv6 CIDR block for the vSwitch. 
} 
```

## **Modify a CIDR block**

When creating a VPC, the IPv4 CIDR block that you specify becomes the primary VPC CIDR, which cannot be modified in the console. However, you can call the [ModifyVpcAttribute](/help/en/vpc/developer-reference/api-vpc-2016-04-28-modifyvpcattribute) operation and modify the `CidrBlock` parameter to expand or shrink the primary CIDR block. Ensure the new, smaller CIDR block still encompasses all IP addresses currently in use.

You cannot modify the IPv6 CIDR of a VPC or the IPv4/IPv6 CIDR block of a vSwitch.

### **Use a secondary CIDR block**

If a VPC has insufficient IP addresses for your workloads or if initial network planning is improper, add a secondary CIDR block to expand the VPC address space.

The secondary and the primary CIDR blocks take effect at the same time. Create vSwitches and cloud resources such as ECS instances with the secondary CIDR.

> 1\. You cannot use 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 as a secondary IPv4 CIDR block.

> 2\. The secondary CIDR block cannot overlap with the primary one.

> 3\. By default, you can add up to [five IPv4 and five IPv6 secondary CIDR blocks](/help/en/vpc/understanding-vpc-quotas-in-alibaba-cloud#2378d52d2aj2x) to each VPC.

### **Console**

#### **Add a secondary CIDR block**

1.  On the **Basic Information** page of the target VPC, click the **CIDR Block Management** tab. Choose either IPv4 or IPv6 CIDR.
    
2.  Add a secondary IPv4 CIDR block in one of the following ways:
    
    -   **Default**: Select one from 10.0.0.0/16, 172.16.0.0/16, and 192.168.0.0/16.
        
    -   **Custom**: Specify a custom secondary CIDR block.
        
    -   **Allocated by IPAM**: Using [IPAM](/help/en/vpc/ip-address-management-ipam/) helps avoid CIDR block conflicts. We recommend selecting this option if you already have an IPAM pool with a provisioned CIDR block. To configure, first select an IPAM pool, and configure the **Network Mask**.
        
3.  For a secondary IPv6 CIDR block:
    
    -   If IPv6 is disabled for the VPC, click the **Enable IPv6** button and choose **Assign BGP (Multi-ISP)** in the drop-down list. For unified address management, choose **Allocated by IPAM**, select an IPAM pool, and set the mask or specify a CIDR.
        
        > You can select **Automatically Enable IPv6 for All vSwitches**. Alternatively, click **Enable IPv6** in the **IPv6 CIDR** column of a vSwitch to enable the feature only for that vSwitch.
        
    -   For a VPC for which IPv6 is enabled, click **Add IPv6 CIDR Block** and select **Allocated by system** or **Allocated by IPAM**.
        

#### **Delete a secondary CIDR block**

On the **Basic Information** page of the target VPC, go to **CIDR Block Management**, click the **IPv4 CIDR** or **IPv6 CIDR** tab. Find the secondary CIDR block and click **Delete** in the **Actions** column.

## API

-   Call [AssociateVpcCidrBlock](/help/en/vpc/developer-reference/api-vpc-2016-04-28-associatevpccidrblock) to add a secondary CIDR block.
    
-   Call [UnassociateVpcCidrBlock](/help/en/vpc/developer-reference/api-vpc-2016-04-28-unassociatevpccidrblock) to delete a secondary CIDR block.
    

## Terraform

> Terraform supports only secondary IPv4 CIDR blocks. Secondary IPv6 CIDR blocks are not supported.

> Resources: [alicloud\_vpc\_ipv4\_cidr\_block](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_ipv4_cidr_block)

```
# Specify the region where you want to create the VPC.
provider "alicloud" {
  region = "cn-hangzhou"
}

# Specify the ID of the VPC.
variable "vpc_id" {
  default = "vpc-xxx" # Replace the value with the actual ID of the VPC.
}

# Create a secondary CIDR block in the VPC.
resource "alicloud_vpc_ipv4_cidr_block" "example_secondary_cidr_block" {
  vpc_id               = var.vpc_id
  secondary_cidr_block = "192.168.0.0/16" # Specify the secondary CIDR block.
}
```

## **Reserved CIDR block**

Reserve a CIDR block in a vSwitch to ensure it is not occupied by other resources. The reserved CIDR block is currently used only to assign an [IP prefix](/help/en/ecs/user-guide/ip-prefix#ff423c60e3nvl) to a secondary private IP address of an Elastic Network Interface (ENI).

> 1\. A reserved CIDR block cannot contain the [system reserved IPs](#50cd7e3f2b1ye) of the vSwitch.

> 2\. Each VPC supports up to 100 IPv4 and 100 IPv6 reserved CIDR blocks.

> 3\. The mask lengths of a reserved IPv4 and IPv6 CIDR block cannot be larger than 28 and 80 respectively.

### **Console**

#### **Create a reserved CIDR block**

1.  On the **Basic Information** page of the target vSwitch, click the **Reserved CIDR Block** tab. Add a reserved IPv4 or IPv6 CIDR block in one of the following two ways:
    
    -   **Specify CIDR Block**: Specify the exact CIDR block that you want to reserve.
        
    -   **Specify Mask Length**: The system automatically allocates a reserved CIDR block from the available ones.
        
2.  For an IPv6 CIDR block, if IPv6 is disabled for the vSwitch, click the **Enable IPv6** button. In the **Enable IPv6** dialog box that appears, set the IPv6 CIDR block.
    
    > If IPv6 is also disabled for your VPC, set **IPv6 CIDR Block Type** to the default value **Assign BGP (Multi-ISP)** in the dialog box, and configure the IPv6 CIDR block for the vSwitch.
    

#### **View used IPs**

On the **Basic Information** page of the target vSwitch, go to the **Reserved CIDR Block** and choose the **IPv4 CIDR** or **IPv6 CIDR** tab. Find the reserved CIDR block that you want to manage and click **View Used IP** in the **Actions** column to view the occupied IPs and their ENIs.

#### **Delete a reserved CIDR block**

Before deleting a reserved CIDR block, make sure that no IPs in the reserved CIDR block are in use.

On the **Basic Information** page of the target vSwitch, go to the **Reserved CIDR Block** and choose the **IPv4 CIDR** or **IPv6 CIDR** tab. Find the reserved CIDR block that you want to delete and click **Delete** in the **Actions** column.

## API

-   Call the [CreateVSwitchCidrReservation](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createvswitchcidrreservation) operation to create a reserved CIDR block.
    
-   Call the [GetVSwitchCidrReservationUsage](/help/en/vpc/developer-reference/api-vpc-2016-04-28-getvswitchcidrreservationusage) operation to view used IPs.
    
-   Call the [DeleteVSwitchCidrReservation](/help/en/vpc/developer-reference/api-vpc-2016-04-28-deletevswitchcidrreservation) operation to delete a reserved CIDR block.
    

## Terraform

> Resource: [alicloud\_vpc\_vswitch\_cidr\_reservation](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_vswitch_cidr_reservation)

```
# Specify the region where you want to create the VPC.
provider "alicloud" {
  region = "cn-hangzhou" # The region where the resource resides.
}

# Specify the ID of the vSwitch.
variable "vsw_id" {
  default = "vsw-xxx" # Replace the value with the actual ID of the vSwitch.
}

# Create a reserved CIDR block.
resource "alicloud_vpc_vswitch_cidr_reservation" "example_cidr_reservation" {
  vswitch_id                    = var.vsw_id 
  ip_version                    = "IPv4" 
  cidr_reservation_cidr         = "10.0.0.128/26" # Specify the reserved CIDR block. 
}
```

## Create a VPC using IPAM

IPAM is a cloud-based IP address management tool that automates IP allocation and management, simplifies network management, and avoids address conflicts. You can [use IPAM to plan and create a VPC](/help/en/vpc/use-ipam-to-create-a-vpc). After creating an IPAM instance and an IPAM pool, assign an IPv4 or IPv6 CIDR block to a VPC from the IPAM pool.

### **Console**

> Before creating a VPC, ensure you have created an IPAM instance and pool in the [IPAM console](https://ipam.console.alibabacloud.com/cn-hangzhou/ipam).

1.  Go to the [Create VPC](https://vpc.console.alibabacloud.com/vpc/cn-hangzhou/vpcs/new) page in the VPC console.
    
2.  Configure IPv4 CIDR block: Choose the **Allocated by IPAM** option. Select an IPAM pool and configure a mask. The system allocates the first available CIDR block that matches the length by default. You can select a different IPv4 CIDR block within the provisioned CIDR block of the pool.
    
3.  Enable IPv6 (If necessary): Select **Allocated by IPAM**. Choose an IPv6 IPAM pool, configure a mask or specify a IPv6 CIDR block.
    

## API

-   If you have created an IPAM pool, choose one of the following ways:
    
    -   For IPv4 allocation: Call the [CreateVpc](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createvpc) operation and specify the IPAM pool using the `Ipv4IpamPoolId` parameter and specify a mask using the `Ipv4CidrMask` parameter. Alternatively, you can provide the `CidrBlock` parameter with the exact CIDR you want to use.
        
    -   For IPv6 allocation: Provide both the `Ipv6IpamPoolId` and `Ipv6CidrMask` parameters in your `CreateVpc` call.
        
-   If you have not created an IPAM pool, call the following operations in sequence to create an IPAM pool and then create a VPC.
    
    1.  [OpenVpcIpamService - Activate IPAM feature](/help/en/vpc/developer-reference/api-vpcipam-2023-02-28-openvpcipamservice)
        
    2.  [CreateIpam - Create an IPAM instance](/help/en/vpc/developer-reference/api-vpcipam-2023-02-28-createipam)
        
    3.  [CreateIpamPool - Create an IPAM pool](/help/en/vpc/developer-reference/api-vpcipam-2023-02-28-createipampool)
        
    4.  [AddIpamPoolCidr - Provision a CIDR block for an IPAM pool](/help/en/vpc/developer-reference/api-vpcipam-2023-02-28-addipampoolcidr)
        

### **Terraform**

> Terraform currently only supports allocation IPv4 CIDR block from an IPAM pool. IPv6 allocation is not supported.

> Resources: [vpc\_ipam\_ipam](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_ipam_ipam), [alicloud\_vpc\_ipam\_ipam\_pool](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_ipam_ipam_pool), [alicloud\_vpc\_ipam\_ipam\_pool\_cidr](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_ipam_ipam_pool_cidr), [alicloud\_vpc](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc)

```
# Specify the region where you want to create the IPAM instance, IPAM pool, and VPC.
provider "alicloud" {
  region = "cn-hangzhou"
}

# Create an IPAM instance.
resource "alicloud_vpc_ipam_ipam" "example_ipam" {
  ipam_name             = "example_ipam_name"
  operating_region_list = ["cn-hangzhou"] # Specify the region where the IPAM instance takes effect.
}

# Create an IPAM pool.
resource "alicloud_vpc_ipam_ipam_pool" "example_parentIpamPool" {
  ipam_scope_id  = alicloud_vpc_ipam_ipam.example_ipam.private_default_scope_id # Specify the scope of the IPAM pool.
  ipam_pool_name = "example_parentIpamPool_name"
  pool_region_id = alicloud_vpc_ipam_ipam.example_ipam.region_id # Specify the region where the IPAM pool takes effect.
  ip_version     = "IPv4"                                     # Specify the IP version of the IPAM pool.
}

# Allocate a CIDR block to the IPAM pool.
resource "alicloud_vpc_ipam_ipam_pool_cidr" "example_ipamPoolCidr" {
  cidr         = "10.0.0.0/16"                                       # Specify the CIDR block.
  ipam_pool_id = alicloud_vpc_ipam_ipam_pool.example_parentIpamPool.id # Specify the ID of the IPAM pool.
}

# Create a VPC.
resource "alicloud_vpc" "example_ipam_vpc" {
  vpc_name          = "example_ipam_vpc_name"
  ipv4_ipam_pool_id = alicloud_vpc_ipam_ipam_pool.example_parentIpamPool.id # Specify the ID of the IPAM pool.
  ipv4_cidr_mask    = 24                                                 # The IPv4 network mask.
}
```

## **More information**

### **Default VPCs and default vSwitches**

Default VPCs and vSwitches help you verify and deploy services. However, for production workloads or long-term services, we strongly recommend creating custom VPCs and vSwitches tailored to your architecture. This gives you granular control over network design, resource isolation, security policies, and scalability, ensuring your cloud environment is perfectly suited to your business.

You are limited to one default VPC per region and one default vSwitch per zone. These default resources do not count against your service quotas.

-   When creating an ECS, CLB, or RDS instance in a region where no VPC has been created, you have the option for Alibaba Cloud to automatically create a default VPC and vSwitch. The CIDR block of the default VPC created in this way is fixed at 172.16.0.0/12.
    
-   In a region where you have not yet created a default VPC, call [CreateDefaultVpc](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createdefaultvpc) and [CreateDefaultVSwitch](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createdefaultvswitch) to create a default VPC and a vSwitch. The CIDR block of a default VPC created in this way is 172.xx.0.0/16.
    

VPCs and vSwitches that you create are non-default VPCs and vSwitches. You can delete default VPCs and vSwitches, but you cannot convert default VPCs and vSwitches to non-default ones, or vice versa.

### **System reserved IP addresses**

A vSwitch CIDR block contains system reserved IP addresses that cannot be assigned to cloud resources such as ECS instances.

-   For IPv4, the first and the last three IP addresses of each vSwitch are reserved.
    
    For example, if the CIDR block of a vSwitch is 192.168.1.0/24, then 192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255 are reserved.
    
-   For IPv6, the first and the last nine IP addresses of each vSwitch are reserved.
    
    For example, if the IPv6 CIDR block of a vSwitch is 2408:xxxx:xxxx:6eff::/64, the first IP address 2408:xxxx:xxxx:6eff:: and the last nine IP addresses 2408:xxxx:xxxx:6eff:ffff:ffff:ffff:fff7, 2408:xxxx:xxxx:6eff:ffff:ffff:ffff:fff8, 2408:xxxx:xxxx:6eff:ffff:ffff:ffff:fff9, 2408:xxxx:xxxx:6eff:ffff:ffff:ffff:fffa, 2408:xxxx:xxxx:6eff:ffff:ffff:ffff:fffb, 2408:xxxx:xxxx:6eff:ffff:ffff:ffff:fffc, 2408:xxxx:xxxx:6eff:ffff:ffff:ffff:fffd, 2408:xxxx:xxxx:6eff:ffff:ffff:ffff:fffe and 2408:xxxx:xxxx:6eff:ffff:ffff:ffff:ffff are reserved.
    

### **Cross-account authorization**

Before connecting a VPC to a CEN, virtual border router (VBR), or Express Connect Router (ECR) across accounts, you must grant cross-account authorization in the VPC.

For more about authorization, see [Authorize a cross-account CEN instance](/help/en/cen/user-guide/grant-permissions-on-a-network-instance-that-belongs-to-another-account#section-mkn-v7p-lgn), [Authorize a cross-account VBR instance](/help/en/express-connect/user-guide/attach-a-vbr-to-a-vpc-that-belongs-to-a-different-account#section-71v-2hh-g4h), and [Authorize a cross-account ECR instance](/help/en/express-connect/user-guide/cross-account-ecr-authorization#02c05250e4t35).

Once authorized, the other account can select your VPC when [creating a VPC connection](/help/en/cen/user-guide/connect-vpcs), [creating a VBR connection](/help/en/express-connect/user-guide/create-and-manage-a-vbr-to-vpc-connection#title-oiq-5wv-0kl), or [associating a VPC with an ECR](/help/en/express-connect/user-guide/create-and-manage-the-leased-line-gateway-ecr#4e746cc312xor).

> 1\. The account here refers to an Alibaba Cloud account, not a RAM user.

> 2\. Cross-account authorization between accounts of the China website (aliyun.com) and the International website (alibabacloud.com) is not supported.
