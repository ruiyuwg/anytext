Virtual private cloud (VPC) sharing lets you share vSwitches in non-default VPCs with other Alibaba Cloud accounts using resource sharing. Within a shared vSwitch, both the owner and participants can deploy cloud resources, such as Elastic Compute Service (ECS) and Apsara RDS instances. Participants of a shared vSwitch can only view and manage their own resources. They cannot access, modify, or delete resources created by other accounts.

## **How it works**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1745181671/CAEQSBiBgMDlxe.CwhkiIDg3YTFkNTY5ZTZmYzQ5MDQ4YWUwMzAzYjEzZGQ3YWEz4800802_20250303103531.388.svg)

After Account A shares a vSwitch with Accounts B, C, and D, each account can independently deploy cloud resources in the shared vSwitch. All resources share the same IP address space and are connected by default. The vSwitch owner (Account A) retains full control over network policies and can use network ACLs or security groups to enforce isolation at the vSwitch or individual resource level.

Typical use cases:

1.  **Centralized** **management**
    
    -   The operations team centrally plans, configures, and manages VPCs.
        
    -   Business units are granted access to shared vSwitches, where they can create and manage resources such as ECS instances, without needing to manage network infrastructure.
        
2.  **Simplified** **operations in multi-account environments**
    
    -   Eliminates the need for creating a VPC for each account.
        
    -   Reduces the total number of VPCs used and simplifies network management and monitoring.
        

## **Limits**

1.  Default VPCs cannot be shared. To use the VPC sharing feature, you must create a custom VPC. For existing cloud resources in a default VPC, consider migrating them to or recreating them in a non-default VPC.
    
2.  When using VPC peering connections to connect existing cloud resources, refer to [Resource types that can be created in a shared vSwitch](#bebb757390c6e) and [Permissions of vSwitch owners and participants](#3fcce4388f779) to see if it is applicable. If so, we recommend recreating these resources in the shared VPC. If the resources support cross-VPC migration, migrate them to the shared VPC. If it is not applicable or if recreation or migration is not feasible, use the [VPC peering connection](/help/en/vpc/create-and-manage-vpc-peering-connection) or [Cloud Enterprise Network (CEN)](/help/en/cen/getting-started/overview) to enable cross-account network communication.
    

### **Resource types that can be created in a shared vSwitch**

-   ECS instances
    
-   Server Load Balancer (SLB) instances
    
-   ApsaraDB for RDS instances
    
-   Terway components
    
-   ApsaraDB for MongoDB instances
    
-   ApsaraDB for Redis instances
    
-   Kafka instances
    
-   Elasticsearch clusters
    
-   Container Registry instances
    
-   PolarDB for MySQL clusters
    
-   ApsaraMQ for RocketMQ instances
    
-   Microservices Engine (MSE) instances
    

### **Permissions of vSwitch owners and participants**

The owners and participants of shared vSwitches have the following permissions:

**Resource**

**Owners**

**Participants**

Cloud resources (such as ECS and RDS)

Each account can only view and manage cloud resources and security groups it creates. It cannot view and manage those created by other accounts.

Security groups

Elastic network interfaces (ENIs)

Call [DescribeNetworkInterfaces](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describenetworkinterfaces) to view ENIs created by participants. Managing ENIs created by participants is not supported.

View and manage ENIs the participant creates. The participant cannot view ENIs of other accounts.

VPC, vSwitch, route table, network ACL, and secondary CIDR block

All permissions

View only

Reserved CIDR blocks

All permissions

No permissions

IPv6 gateway

All permissions

-   Allocate/delete IPv6 private addresses for resources such as ECS, ENIs, and NLB instances.
    
-   View IPv6 addresses in its own account.
    
-   Enable/disable public bandwidth, and set/delete egress-only rules for IPv6 addresses in its own account. The public bandwidth fee is paid by the participants.
    

Flow logs

-   Create flow logs at the VPC and vSwitch levels, which only apply to owner ENIs.
    
-   Create flow logs at the ENI level, which only apply to owner ENIs.
    

Create flow logs at the ENI level, which only apply to participant ENIs.

NAT gateway, VPN gateway, Cloud Enterprise Network, and VPC peering connection

All permissions

No permissions to view or manage, but can connect to external networks through these resources.

Tags

Tags configured by the vSwitch owner are not affected. Owners and participants can configure tags for their own resources. These tags are not visible to and do not affect each other.

After a vSwitch is unshared:

**Resource**

**Participant permissions**

Cloud resources (ECS or RDS)

Can continue to use, view, modify, and delete existing resources. Cannot create new resources in the unshared vSwitch.

vSwitch and its associated resources

Cannot view the shared vSwitch or associated resources, such as VPC, route table, private CIDR block, and network ACL.

Tags

Tags configured by the vSwitch owner are automatically deleted.

## **Create cloud resources in a shared vSwitch**

The vSwitch owner can share the vSwitch with any Alibaba Cloud account, or limit sharing to accounts within a [resource directory](/help/en/resource-management/resource-directory/product-overview/resource-directory-overview). Once sharing is enabled, participants can create cloud resources in the shared vSwitch.

### **Console**

#### **1\. Enable sharing**

> This section only describes how to share a vSwitch with other accounts. See [sharing resources within a resource directory](/help/en/resource-management/resource-sharing/getting-started/share-resources-with-objects-in-a-resource-directory) for more.

1.  Log on to the owner account and go to the [Resource Sharing - Resources I Share](https://resourcemanager.console.alibabacloud.com/resource-shares/cn-hangzhou/owned) page in the Resource Management console. In the upper-left corner of the top menu bar, select the region where the resource to be shared is located, and click **Create Resource Share**. On the page that appears:
    
    **Step 1**: Enter a **Resource Share Name**, and select the vSwitch to be shared.
    
    **Step 2**: The **AliyunRSDefaultPermissionVSwitch** permission is selected by default**.**
    
    **Step 3**: For **Principal Scope**, select **All Accounts**. For **Method**, select **Add Manually**. Enter the [Alibaba Cloud account ID](/help/en/resource-management/resource-directory/support/how-do-i-view-the-id-of-an-alibaba-cloud-account) of the participants, and click **Add**.
    
    **Step 4**: Verify the information, and click **OK**.
    
2.  Log on to the participant account and accept the sharing invitation:
    
    1.  Go to the [Resource Sharing - Resources Shared to Me](https://resourcemanager.console.alibabacloud.com/resource-shares/cn-hangzhou/shared) page.
        
    2.  In the upper-left corner of the top menu bar, select the region where the shared resource is located, and click **Accept** in the **Status** column of the target resource share.
        
    3.  After accepting, the participant can access the shared vSwitch, and any new shared resources added to this resource share will be automatically accepted.
        

#### **Step 2: Create cloud resources in a shared vSwitch**

Log on to the principal account:

1.  Go to the [vSwitch](https://vpc.console.alibabacloud.com/vpc/cn-hangzhou/switches) page in the VPC console. Select the region of the shared vSwitch in the top menu bar, and you'll see the shared vSwitch (marked as "from sharing").
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9441990571/p960126.png)
    
2.  To create ECS, RDS, and SLB instances, click **Add Cloud Service** in the **Actions** column of the target shared vSwitch.
    
3.  For other [resource types that can be created in shared vSwitches](#bebb757390c6e), select the shared vSwitch when you create them.
    

### **API**

#### **Step 1: Enable sharing**

-   Method 1: Share with any account
    
    1.  Call [CreateResourceShare](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-createresourceshare) with the owner credentials to create a resource share. Make sure to set the `AllowExternalTargets` parameter to `True`.
        
    2.  Use the participant credentials to call [ListResourceShareInvitations](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-listresourceshareinvitations) to query the invitations, and call [AcceptResourceShareInvitation](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-acceptresourceshareinvitation) to accept the invitation.
        
    
-   Method 2: Share within a resource directory
    
    1.  Call [EnableSharingWithResourceDirectory](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-enablesharingwithresourcedirectory) with the owner credential to enable resource directory sharing.
        
    2.  Call [CreateResourceShare](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-createresourceshare) with the participant credentials to create a resource share. Make sure to set the `AllowExternalTargets` parameter to `False`.
        
    

#### **Step 2: Create cloud resources**

Log on to the principal account.

1.  Call [DescribeVSwitches](/help/en/vpc/developer-reference/api-vpc-2016-04-28-describevswitches) to get the list of vSwitches.
    
2.  In the vSwitch list, filter out shared vSwitches (where the `ShareType` field is `Sharing`).
    
3.  Call the creation operation of the resource (such as [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) for ECS) to create cloud resources based on the shared vSwitch.
    

### **Terraform**

#### **Step 1: Enable sharing**

The vSwitch owner creates a resource share:

> Currently, Terraform does not support sharing vSwitches with any account. It only supports sharing within a resource directory. Before you perform operations, make sure the vSwitch owner has [enabled resource sharing](/help/en/resource-management/resource-sharing/user-guide/enable-resource-sharing).

> Resources: [alicloud\_resource\_manager\_resource\_share](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/resource_manager_resource_share), [alicloud\_resource\_manager\_shared\_resource](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/resource_manager_shared_resource), [alicloud\_resource\_manager\_shared\_target](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/resource_manager_shared_target)

```
# Specify the region.
provider "alicloud" {
  region = "cn-hangzhou"
}

# Specify the name of the resource share.
resource "alicloud_resource_manager_resource_share" "example_unit" {
  resource_share_name = "example_unit_name"
}

# Specify the shared vSwitch.
resource "alicloud_resource_manager_shared_resource" "example_vsw" {
  resource_share_id = alicloud_resource_manager_resource_share.example_unit.id
  resource_id       = "vsw-bp1omg98fixldnwcxxxxx" # Replace the value with the ID of the shared vSwitch.
  resource_type     = "VSwitch"                   # The resource type is VSwitch. 
}

# Specify the principal of the shared vSwitch.
resource "alicloud_resource_manager_shared_target" "example_target" {
  resource_share_id = alicloud_resource_manager_resource_share.example_unit.id
  target_id         = "10xxxxxxxxxxxxxx" # Replace the value with the UID of the vSwitch principal.
}
```

#### **Step 2: Create cloud resources in a shared vSwitch**

The following example shows how a vSwitch participant creates an ECS instance in a shared vSwitch:

> Resources: [alicloud\_security\_group](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/security_group), [alicloud\_instance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/instance)

> Data sources: [alicloud\_vswitches](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/vswitches)

```
# Specify the region.
provider "alicloud" {
  region = "cn-hangzhou"
}

# Specify the shared vSwitch.
variable "vsw_id" {
  default = "vsw-bp1omg98fixldnwcxxxxx" # Replace the value with the ID of the shared vSwitch.
}

# Obtain information about the target shared vSwitch.
data "alicloud_vswitches" "example_vsw" {
  ids = [var.vsw_id]  
}

# Create a security group.
resource "alicloud_security_group" "example_sg" {
  security_group_name = "example_sg_name"
  vpc_id              = data.alicloud_vswitches.example_vsw.vswitches[0].vpc_id
}

# Create an ECS instance.
resource "alicloud_instance" "example_ecs" {
  instance_name        = "example_ecs_name"
  instance_type        = "ecs.e-c1m1.large"
  security_groups      = [alicloud_security_group.example_sg.id]
  vswitch_id           = var.vsw_id
  image_id             = "aliyun_3_x64_20G_alibase_20250117.vhd"
  system_disk_category = "cloud_essd"
}
```

## **Manage shared vSwitches and participants**

A vSwitch owner can perform the following operations:

-   View shared vSwitches and participants
    
-   Share more vSwitches
    
-   Share a vSwitch with other accounts
    

### **Console**

1.  Go to the [Resource Sharing - Resources I Share](https://resourcemanager.console.alibabacloud.com/resource-shares/cn-hangzhou/owned) page. In the upper-left corner of the top menu bar, select the region where the shared resource is located.
    
2.  On the **Shared by Me** page, you can:
    
    -   **View shared vSwitches**: Click the **Shared Resources** tab to view them.
        
    -   **View the participants**: Click the **Principals** tab to view them.
        
    
3.  Click the **Resource Shares** tab, find the target resource share, and click its ID.
    
4.  You can click the **Resources** or **Principals** tab to view the shared vSwitches and participants, respectively.
    
    If the **Status** in the **Resources** and **Principals** tabs is **Associated**, it indicates that the shared resources and participants have been added:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9441990571/p960127.png)
    
    **Common causes of failures**
    
    If the **Status** is **Association Failed**, it indicates that sharing has failed. Below are some reasons that may cause sharing failures. Troubleshoot and try again.
    
    -   The participant account is the same as the owner account. An owner cannot share its vSwitch with itself.
        
    -   The participants for a VPC exceed the quota (default: 50).
        
    -   The vSwitch participants for a vSwitch in a VPC exceed the quota (default: 50).
        
    -   The vSwitches shared with a participant exceed the quota (default: 30).
        
    
5.  On the resource share page, click **Edit Resource Share** in the upper-right corner. You can perform the following operations:
    
    -   **Add or remove shared vSwitches**: In **Step 1**, select or deselect vSwitches.
        
    -   **Add or remove participants**: In **Step 3**, add or remove account UIDs.
        
    
6.  Verify the information and click **OK** in **Step 4** of the **Edit Resource Share** page.
    

### **API**

The vSwitch owner views **shared vSwitches** and **participants**:

-   Call [ListSharedResources](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-listsharedresources) to view the list of shared vSwitches.
    
-   Call [ListSharedTargets](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-listsharedtargets) to view the list of participants of shared vSwitches.
    

The vSwitch owner manages **shared vSwitches** and **participants** in a resource share:

-   Call [ListResourceShareAssociations](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-listresourceshareassociations) to view vSwitches or participants.
    
-   Call [AssociateResourceShare](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-associateresourceshare) to add shared vSwitches or participants.
    
-   Call [DisassociateResourceShare](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-disassociateresourceshare) to remove shared vSwitches or participants.
    

## Terraform

#### **View shared vSwitches and participants**

The vSwitch owner views resource shares, shared resources, and participants:

> Datasources: [alicloud\_resource\_manager\_resource\_shares](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/resource_manager_resource_shares), [alicloud\_resource\_manager\_shared\_resources](alicloud_resource_manager_shared_resources), [alicloud\_resource\_manager\_shared\_targets](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/resource_manager_shared_targets)

```
# Specify the region.
provider "alicloud" {
  region = "cn-hangzhou"
}

# The list of resource shares.
data "alicloud_resource_manager_resource_shares" "example_units" {
  resource_share_owner = "Self" # View the resource shares that you have shared with other accounts.
}
# Output the list.
output "first_resource_manager_resource_share_id" {
  value = data.alicloud_resource_manager_resource_shares.example_units.shares
}

# The list of shared resources.
data "alicloud_resource_manager_shared_resources" "example_resources" {
}
# Output the list.
output "first_resource_manager_shared_resource_id" {
  value = data.alicloud_resource_manager_shared_resources.example_resources.resources
}

# The list of principals of the shared resources.
data "alicloud_resource_manager_shared_targets" "example_targets" {
}
# Output the list.
output "first_resource_manager_shared_target_id" {
  value = data.alicloud_resource_manager_shared_targets.example_targets.targets
}
```

#### **Add or delete a shared vSwitch**

A vSwitch owner can add or delete [alicloud\_resource\_manager\_shared\_resource](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/resource_manager_shared_resource) in the `.tf` file to add or delete a shared vSwitch.

#### **Add or delete a principal for a shared vSwitch**

A vSwitch owner can add or delete [alicloud\_resource\_manager\_shared\_target](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/resource_manager_shared_target) in the `.tf` file to add or delete a principal for a shared vSwitch.

## **More information**

### **Billing**

While the VPC sharing feature itself is free of charge, resource owners and participants are charged for the cloud resources that they create, such as ECS and RDS instances.

### **Supported regions**

**Area**

**Regions**

Asia Pacific - China

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), and China (Hong Kong)

Asia Pacific - Others

Japan (Tokyo), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), and Thailand (Bangkok)

Europe & Americas

Germany (Frankfurt), UK (London), US (Silicon Valley), and US (Virginia)

Middle East

SAU (Riyadh - Partner Region)

**Important**

The SAU (Riyadh - Partner Region) region is operated by a partner.

### **Quotas**

**Quota name**

**Description**

**Default limit**

**Increase quota**

**vpc\_quota\_sharedvpc\_share\_user\_num\_per\_vpc**

The number of vSwitch principals to which a VPC can be shared.

50

Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page or [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=peer) to request a quota increase.

**vpc\_quota\_sharedvpc\_share\_user\_num\_per\_vswitch**

The number of vSwitch principals to which a vSwitch in a VPC can be shared.

50

**vpc\_quota\_sharedvpc\_accept\_shared\_vswitch\_num**

The number of shared vSwitches that a vSwitch principal can accept.

30
