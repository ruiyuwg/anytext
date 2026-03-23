This topic describes how to use Terraform to create an Alibaba Cloud Container Service for Kubernetes (ACK) dedicated cluster.

**Note**

You can run the sample code directly in your browser using [OpenAPI Portal](https://api.alibabacloud.com/terraform?resource=alicloud_cs_kubernetes&exampleId=&activeTab=example&provider=1.238.0&product=Container_Service_for_Kubernetes\(ACK\)&example=201-use-case-create-ack-proprietary-cluster).

**Important**

Creating ACK dedicated clusters is currently restricted. To request one, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

## Prerequisites

-   ACK is activated. If not already active, see [Activate ACK via Terraform](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/use-terraform-to-assign-default-roles-to-ack-when-you-use-ack-for-the-first-time).
    
-   An [AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair) is created for the [Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) you log on as.
    
    **Note**
    
    By default, an Alibaba Cloud account has full permissions on all resources that belong to this account. We recommend using a RAM account, as it provides limited resource permissions, minimizing potential security risks in case your credentials are compromised.
    
-   The following policy is attached to the RAM user that you use to run commands in Terraform. The policy includes the minimum permissions required to run commands in Terraform. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    This policy allows Resource Access Management (RAM) users to create, view, and delete virtual private clouds (VPCs), vSwitches, and ACK clusters.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "vpc:CreateVpc",
            "vpc:CreateVSwitch",
            "vpc:DescribeRouteTableList",
            "vpc:DescribeVpcAttribute",
            "vpc:ListEnhancedNatGatewayAvailableZones",
            "vpc:DescribeVSwitchAttributes",
            "vpc:DescribeNatGateways",
            "cs:CreateCluster",
            "cs:DescribeTaskInfo",
            "cs:DescribeClusterDetail",
            "cs:DescribeClusterCerts",
            "cs:CheckControlPlaneLogEnable",
            "vpc:DeleteVpc",
            "vpc:DeleteVSwitch",
            "cs:DeleteCluster"
          ],
          "Resource": "*"
        }
      ]
    }
    ```
    
-   Prepare a Terraform runtime environment. You can run Terraform using one of the following methods.
    
    -   [Use Terraform in Terraform Explorer](/help/en/terraform/using-terraform-in-terraform-explorer): Alibaba Cloud provides an online runtime environment for Terraform that you can use without installation. This method is suitable for scenarios in which you want to quickly and conveniently test and debug Terraform at no cost.
        
    -   [Cloud Shell](/help/en/terraform/use-terraform-to-quickly-create-resources): Cloud Shell is preinstalled with Terraform and configured with your identity credentials. You can run Terraform commands directly in Cloud Shell. This method is a fast, convenient, and low-cost way to use Terraform.
        
    -   [Use Terraform in Resource Orchestration Service (ROS)](/help/en/ros/user-guide/create-a-terraform-template): ROS provides managed capabilities for Terraform. You can create Terraform templates, define Alibaba Cloud, AWS, or Azure resources, and configure resource parameters and dependencies.
        
    -   [Install and configure Terraform on your computer](/help/en/terraform/install-and-configure-terraform-locally): This method is suitable for scenarios where you have poor network connectivity or need a custom development environment.
        
    
    **Important**
    
    Make sure that you use Terraform v0.12.28 or later. To check your current version, run the `terraform --version` command.
    

## Resources

**Note**

Fees are generated for specific resources used in this example. Release or unsubscribe from the resources if you no longer require the resources.

-   [alicloud\_instance\_types](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/instance_types): queries Elastic Compute Service (ECS) instance types that meet specific conditions.
    
-   [alicloud\_vpc](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc): creates a VPC.
    
-   [alicloud\_vswitch](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vswitch): creates vSwitches in a VPC to create subnets for the VPC.
    
-   [alicloud\_resource\_manager\_resource\_groups](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/resource_manager_resource_groups): queries the resource group managed by the RAM user.
    
-   [alicloud\_resource\_manager\_resource\_groups](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cs_kubernetes): creates an ACK dedicated cluster.
    

### **Generate Terraform request parameters from the console**

If the examples do not contain your required configuration or if your parameter combination is incorrect, you can generate the required parameters from the console. To do this, perform the following steps:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click **Cluster Templates**.
    
3.  In the dialog box that appears, select the type of cluster that you want to create, click **Create**, and then configure the cluster on the **Cluster Configurations** page.
    
4.  After you complete the configuration, click **Console-to-Code** in the upper-right corner of the **Confirm** page.
    
5.  In the sidebar, click the **Terraform** tab. The parameters required to create the cluster are displayed. You can then copy and use these parameters.
    

## Use Terraform to create an ACK dedicated cluster (Terway)

In this section, an ACK dedicated cluster that uses Terway as the network component is created.

1.  Create a working directory and a configuration file named main.tf in the directory. Copy and paste the following code into the main.tf configuration file:
    
    ```
    provider "alicloud" {
      region = var.region_id
    }
    
    variable "region_id" {
      type    = string
      default = "cn-hangzhou"
    }
    
    variable "zone_ids" {
      type    = list(string)
      default = ["cn-hangzhou-i","cn-hangzhou-j","cn-hangzhou-k"]
    }
    
    # Specify the resource name or label. 
    variable "name" {      
      default = "tf-example"
    }
    
    # Specify the ID of an existing VPC. If you leave this variable empty, a new VPC is created. 
    variable "vpc_id" {    
      description = "Existing vpc id used to create several vswitches and other resources."
      default     = ""
    }
    
    # Specify the CIDR block of the new VPC. This variable takes effect if you leave the vpc_id variable empty. 
    variable "vpc_cidr" {  
      description = "The cidr block used to launch a new vpc when 'vpc_id' is not specified."
      default     = "10.0.0.0/8"
    }
    
    # Specify the IDs of existing vSwitches. 
    variable "vswitch_ids" { 
      description = "List of existing vswitch id."
      type        = list(string)
      default     = []
    }
    
    # If vswitch_ids is not specified, you must specify three CIDR blocks to create vSwitches. The CIDR blocks cannot overlap with each other. 
    variable "vswitch_cidrs" { 
      description = "List of cidr blocks used to create several new vswitches when 'vswitch_ids' is not specified."
      type        = list(string)
      default     = ["10.1.0.0/16", "10.2.0.0/16", "10.3.0.0/16"]
    }
    
    # Specify the Terway configurations. 
    variable "terway_vswitch_ids" {  
      description = "List of existing vswitch ids for terway."
      type        = list(string)
      default     = []
    }
    
    # This variable specifies the CIDR blocks in which Terway vSwitches are created if you leave the terway_vswitch_ids variable empty. 
    variable "terway_vswitch_cidrs" { 
      description = "List of cidr blocks used to create several new vswitches when 'terway_vswitch_cidrs' is not specified."
      type        = list(string)
      default     = ["10.4.0.0/16", "10.5.0.0/16", "10.6.0.0/16"]
    }
    
    # Specify the components that you want to install in the ACK cluster. You must specify the name and configuration of each component that you want to install. 
    variable "cluster_addons" { 
      type = list(object({
        name   = string
        config = string
      }))
    
      default = [
        {
          "name"   = "terway-eniip",
          "config" = "",
        },
        {
          "name"   = "csi-plugin",
          "config" = "",
        },
        {
          "name"   = "csi-provisioner",
          "config" = "",
        },
        {
          "name"   = "logtail-ds",
          "config" = "{\"IngressDashboardEnabled\":\"true\"}",
        },
        {
          "name"   = "nginx-ingress-controller",
          "config" = "{\"IngressSlbNetworkType\":\"internet\"}",
        },
        {
          "name"   = "arms-prometheus",
          "config" = "",
        },
        {
          "name"   = "ack-node-problem-detector",
          "config" = "{\"sls_project_name\":\"\"}",
        }
      ]
    }
    
    locals {
      all_zone_ids = [for zones in data.alicloud_enhanced_nat_available_zones.enhanced.zones : zones.zone_id]
      common_zone_ids = setintersection(toset(var.zone_ids),toset(local.all_zone_ids))
       
      # Obtain the instance types available in each zone.
      instance_types_per_az = { for az, types in data.alicloud_instance_types.default : az => [for t in types.instance_types : t.id] }
    
      # Obtain the list of instance types in all listed zones
      all_instance_types_in_zones = [for zone in local.common_zone_ids : local.instance_types_per_az[zone]]
    
      # Convert each list into a collection
      sets = [for s in local.all_instance_types_in_zones : toset(s)]
      
      # Calculate the instance types that are common to all available intervals.
      common_instance_types = [for element in local.sets[0]: element if length([for set in local.sets: set if contains(set, element)]) == length(local.sets)]
    }
    
    # Query the zones that support enhanced NAT gateways. 
    data "alicloud_enhanced_nat_available_zones" "enhanced" {
    } 
    
    # If you do not specify the vpc_id variable, this Terraform resource can create a VPC. The CIDR block of the VPC is specified by the vpc_cidr variable. 
    resource "alicloud_vpc" "vpc" {  
      count      = var.vpc_id == "" ?  1 : 0
      cidr_block = var.vpc_cidr
    }
    
    # If you do not specify the vswitch_ids variable, a new vSwitch is created based on the vswitch_cidrs. 
    resource "alicloud_vswitch" "vswitches" { 
      count      = length(var.vswitch_ids) > 0 ?  0 : length(var.vswitch_cidrs)
      vpc_id     = var.vpc_id == "" ?  join("", alicloud_vpc.vpc.*.id) : var.vpc_id
      cidr_block = element(var.vswitch_cidrs, count.index)
      zone_id    = tolist(local.common_zone_ids)[count.index]
    }
    
    # If you do not specify the terway_vswitch_ids variable, the vSwitch used by Terway is created based on the vswitch_cidrs parameter. 
    resource "alicloud_vswitch" "terway_vswitches" { 
      count      = length(var.terway_vswitch_ids) > 0 ?  0 : length(var.terway_vswitch_cidrs)
      vpc_id     = var.vpc_id == "" ?  join("", alicloud_vpc.vpc.*.id) : var.vpc_id
      cidr_block = element(var.terway_vswitch_cidrs, count.index)
      zone_id    = tolist(local.common_zone_ids)[count.index]
    }
    
    # Query the resource group managed by the RAM user. 
    data "alicloud_resource_manager_resource_groups" "default" { 
      status = "OK"
    }
    
    # Query ECS instance types. 
    data "alicloud_instance_types" "default" {
      for_each            = toset(local.common_zone_ids )
      availability_zone   = each.key
      cpu_core_count      = 8
      memory_size         = 16
      kubernetes_node_role = "Master"
      system_disk_category = "cloud_essd"
    }
    
     # Create an ACK dedicated cluster and configure control plane vSwitches, pod vSwitches, instance types, disks, the password used to log on to nodes, and the Service CIDR block. 
    resource "alicloud_cs_kubernetes" "default" { 
      master_vswitch_ids    = length(var.vswitch_ids) > 0 ?  split(",", join(",", var.vswitch_ids)) : length(var.vswitch_cidrs) < 1 ?  [] : split(",", join(",", alicloud_vswitch.vswitches.*.id)) # Query the zones that support enhanced NAT gateways. 
      pod_vswitch_ids       = length(var.terway_vswitch_ids) > 0 ?  split(",", join(",", var.terway_vswitch_ids)) : length(var.terway_vswitch_cidrs) < 1 ?  [] : split(",", join(",", alicloud_vswitch.terway_vswitches.*.id)) # The CIDR blocks of pod vSwitches if you use Terway as the network component. 
      master_instance_types = [local.common_instance_types[0],local.common_instance_types[0],local.common_instance_types[0]] # The instance type of the control planes. 
      master_disk_category  = "cloud_essd"            # The system disk type of the control plane. 
      password              = "Yourpassword1234"     # The password used for SSH logon. 
      service_cidr          = "172.18.0.0/16"        # The Service CIDR block. 
      load_balancer_spec    = "slb.s1.small"         # The Server Load Balancer (SLB) instance type. 
      install_cloud_monitor = "true"                 # Enable CloudMonitor. 
      resource_group_id     = data.alicloud_resource_manager_resource_groups.default.groups.0.id # The ID of the resource group to which the cluster belongs. Resource groups are used to isolate resources. 
      deletion_protection   = "false"                # Deletion protection can prevent clusters from being accidentally deleted in the console or by calling API operations. 
      timezone              = "Asia/Shanghai"        # The time zone of the cluster. 
      os_type               = "Linux"                # The type of the node OS. 
      platform              = "AliyunLinux3"         # The OS distribution. 
      cluster_domain        = "cluster.local"        # The cluster domain name. 
      proxy_mode            = "ipvs"                 # The kube-proxy mode. 
      custom_san            = "www.terraform.io"     # The custom subject alternative name (SAN) of the API server certificate of the cluster. 
      new_nat_gateway       = "true"                 # Create a NAT gateway. 
      dynamic "addons" {
        for_each = var.cluster_addons
        content {
          name   = lookup(addons.value, "name", var.cluster_addons)
          config = lookup(addons.value, "config", var.cluster_addons)
        }
      }
    }
    ```
    
2.  Run the following command to initialize the runtime environment for Terraform:
    
    ```
    terraform init
    ```
    
    If the following command output is returned, Terraform is initialized:
    
    ```
    Terraform has been successfully initialized!
    
    You may now begin working with Terraform. Try running "terraform plan" to see
    any changes that are required for your infrastructure. All Terraform commands
    should now work.
    
    If you ever set or change modules or backend configuration for Terraform,
    rerun this command to reinitialize your working directory. If you forget, other
    commands will detect it and remind you to do so if necessary.
    ```
    
3.  Create an execution plan and preview the changes.
    
    ```
    terraform plan
    ```
    
    If the following command output is returned, the execution plan was successful. You can view the resource information.
    
    ```
    Refreshing Terraform state in-memory prior to plan...
    The refreshed state will be used to calculate this plan, but will not be
    persisted to local or remote state storage.
    ...
    Plan: 8 to add, 0 to change, 0 to destroy.
    ...
    ```
    
4.  Run the following command to create an ACK dedicated cluster.
    
    ```
    terraform apply
    ```
    
    When you run the command, follow the instructions to enter `yes` and press **Enter**. Wait until the command execution is complete. If the following command output is returned, the ACK dedicated cluster is created.
    
    ```
    ...
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.
    
      Enter a value: yes
    ...
    alicloud_cs_managed_kubernetes.default: Creation complete after 8m26s [id=************]
    
    Apply complete!  Resources: 8 added, 0 changed, 0 destroyed.
    ```
    
5.  Verify the result.
    
    ## Run the terraform show command
    
    Run the following command to query the resources that are created by Terraform:
    
    ```
    terraform show
    ```
    
    ## Log on to the ACK console
    
    Log on to the [ACK console](https://cs.console.alibabacloud.com) to view the created clusters.
    

## Resource cleanup

If you no longer require the preceding resources that are created or managed by using Terraform, run the following command to release the resources. For more information about the `terraform destroy` command, see [Common commands](/help/en/terraform/terraform-common-commands).

**Important**

If you run the terraform destroy command, all the preceding resources are destroyed. Proceed with caution when you run the terraform destroy command.

```
terraform destroy
```

During resource cleanup, follow the instructions to enter `yes` and press **Enter**. Wait until the command execution is complete. If the following command output is returned, an ACK dedicated cluster is created.

```
...
Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes
...
Destroy complete!  Resources: 7 destroyed.
```

## Sample code

**Note**

You can run the sample code in this topic with a few clicks. For more information, visit [Terraform Explorer](https://api.alibabacloud.com/terraform?resource=alicloud_cs_kubernetes&exampleId=&activeTab=example&provider=1.238.0&product=Container_Service_for_Kubernetes\(ACK\)&example=201-use-case-create-ack-proprietary-cluster).

```
provider "alicloud" {
  region = var.region_id
}

variable "region_id" {
  type    = string
  default = "cn-hangzhou"
}

variable "zone_ids" {
  type    = list(string)
  default = ["cn-hangzhou-i","cn-hangzhou-j","cn-hangzhou-k"]
}

# Specify the resource name or label. 
variable "name" {      
  default = "tf-example"
}

# Specify the ID of an existing VPC. If you leave this variable empty, a new VPC is created. 
variable "vpc_id" {    
  description = "Existing vpc id used to create several vswitches and other resources."
  default     = ""
}

# Specify the CIDR block of the new VPC. This variable takes effect if you leave the vpc_id variable empty. 
variable "vpc_cidr" {  
  description = "The cidr block used to launch a new vpc when 'vpc_id' is not specified."
  default     = "10.0.0.0/8"
}

# Specify the IDs of existing vSwitches. 
variable "vswitch_ids" { 
  description = "List of existing vswitch id."
  type        = list(string)
  default     = []
}

# If vswitch_ids is not specified, you must specify three CIDR blocks to create vSwitches. The CIDR blocks cannot overlap with each other. 
variable "vswitch_cidrs" { 
  description = "List of cidr blocks used to create several new vswitches when 'vswitch_ids' is not specified."
  type        = list(string)
  default     = ["10.1.0.0/16", "10.2.0.0/16", "10.3.0.0/16"]
}

# Specify the Terway configurations. 
variable "terway_vswitch_ids" {  
  description = "List of existing vswitch ids for terway."
  type        = list(string)
  default     = []
}

# This variable specifies the CIDR blocks in which Terway vSwitches are created if you leave the terway_vswitch_ids variable empty. 
variable "terway_vswitch_cidrs" { 
  description = "List of cidr blocks used to create several new vswitches when 'terway_vswitch_cidrs' is not specified."
  type        = list(string)
  default     = ["10.4.0.0/16", "10.5.0.0/16", "10.6.0.0/16"]
}

# Specify the components that you want to install in the ACK cluster. You must specify the name and configuration of each component that you want to install. 
variable "cluster_addons" { 
  type = list(object({
    name   = string
    config = string
  }))

  default = [
    {
      "name"   = "terway-eniip",
      "config" = "",
    },
    {
      "name"   = "csi-plugin",
      "config" = "",
    },
    {
      "name"   = "csi-provisioner",
      "config" = "",
    },
    {
      "name"   = "logtail-ds",
      "config" = "{\"IngressDashboardEnabled\":\"true\"}",
    },
    {
      "name"   = "nginx-ingress-controller",
      "config" = "{\"IngressSlbNetworkType\":\"internet\"}",
    },
    {
      "name"   = "arms-prometheus",
      "config" = "",
    },
    {
      "name"   = "ack-node-problem-detector",
      "config" = "{\"sls_project_name\":\"\"}",
    }
  ]
}

locals {
  all_zone_ids = [for zones in data.alicloud_enhanced_nat_available_zones.enhanced.zones : zones.zone_id]
  common_zone_ids = setintersection(toset(var.zone_ids),toset(local.all_zone_ids))
   
  # Obtain the instance types available in each zone.
  instance_types_per_az = { for az, types in data.alicloud_instance_types.default : az => [for t in types.instance_types : t.id] }

  # Obtain the list of instance types in all listed zones
  all_instance_types_in_zones = [for zone in local.common_zone_ids : local.instance_types_per_az[zone]]

  # Convert each list into a collection
  sets = [for s in local.all_instance_types_in_zones : toset(s)]
  
  # Calculate the instance types that are common to all available intervals.
  common_instance_types = [for element in local.sets[0]: element if length([for set in local.sets: set if contains(set, element)]) == length(local.sets)]
}

# Query the zones that support enhanced NAT gateways. 
data "alicloud_enhanced_nat_available_zones" "enhanced" {
} 

# If you do not specify the vpc_id variable, this Terraform resource can create a VPC. The CIDR block of the VPC is specified by the vpc_cidr variable. 
resource "alicloud_vpc" "vpc" {  
  count      = var.vpc_id == "" ?  1 : 0
  cidr_block = var.vpc_cidr
}

# If you do not specify the vswitch_ids variable, a new vSwitch is created based on the vswitch_cidrs. 
resource "alicloud_vswitch" "vswitches" { 
  count      = length(var.vswitch_ids) > 0 ?  0 : length(var.vswitch_cidrs)
  vpc_id     = var.vpc_id == "" ?  join("", alicloud_vpc.vpc.*.id) : var.vpc_id
  cidr_block = element(var.vswitch_cidrs, count.index)
  zone_id    = tolist(local.common_zone_ids)[count.index]
}

# If you do not specify the terway_vswitch_ids variable, the vSwitch used by Terway is created based on the vswitch_cidrs parameter. 
resource "alicloud_vswitch" "terway_vswitches" { 
  count      = length(var.terway_vswitch_ids) > 0 ?  0 : length(var.terway_vswitch_cidrs)
  vpc_id     = var.vpc_id == "" ?  join("", alicloud_vpc.vpc.*.id) : var.vpc_id
  cidr_block = element(var.terway_vswitch_cidrs, count.index)
  zone_id    = tolist(local.common_zone_ids)[count.index]
}

# Query the resource group managed by the RAM user. 
data "alicloud_resource_manager_resource_groups" "default" { 
  status = "OK"
}

# Query ECS instance types. 
data "alicloud_instance_types" "default" {
  for_each            = toset(local.common_zone_ids )
  availability_zone   = each.key
  cpu_core_count      = 8
  memory_size         = 16
  kubernetes_node_role = "Master"
  system_disk_category = "cloud_essd"
}

 # Create an ACK dedicated cluster and configure control plane vSwitches, pod vSwitches, instance types, disks, the password used to log on to nodes, and the Service CIDR block. 
resource "alicloud_cs_kubernetes" "default" { 
  master_vswitch_ids    = length(var.vswitch_ids) > 0 ?  split(",", join(",", var.vswitch_ids)) : length(var.vswitch_cidrs) < 1 ?  [] : split(",", join(",", alicloud_vswitch.vswitches.*.id)) # Query the zones that support enhanced NAT gateways. 
  pod_vswitch_ids       = length(var.terway_vswitch_ids) > 0 ?  split(",", join(",", var.terway_vswitch_ids)) : length(var.terway_vswitch_cidrs) < 1 ?  [] : split(",", join(",", alicloud_vswitch.terway_vswitches.*.id)) # The CIDR blocks of pod vSwitches if you use Terway as the network component. 
  master_instance_types = [local.common_instance_types[0],local.common_instance_types[0],local.common_instance_types[0]] # The instance type of the control planes. 
  master_disk_category  = "cloud_essd"            # The system disk type of the control plane. 
  password              = "Yourpassword1234"     # The password used for SSH logon. 
  service_cidr          = "172.18.0.0/16"        # The Service CIDR block. 
  load_balancer_spec    = "slb.s1.small"         # The SLB instance type. 
  install_cloud_monitor = "true"                 # Enable CloudMonitor. 
  resource_group_id     = data.alicloud_resource_manager_resource_groups.default.groups.0.id # The ID of the resource group to which the cluster belongs. Resource groups are used to isolate resources. 
  deletion_protection   = "false"                # Deletion protection can prevent clusters from being accidentally deleted in the console or by calling API operations. 
  timezone              = "Asia/Shanghai"        # The time zone of the cluster. 
  os_type               = "Linux"                # The type of the node OS. 
  platform              = "AliyunLinux3"         # The OS distribution. 
  cluster_domain        = "cluster.local"        # The cluster domain name. 
  proxy_mode            = "ipvs"                 # The kube-proxy mode. 
  custom_san            = "www.terraform.io"     # The custom SAN for the API server certificate of the cluster. 
  new_nat_gateway       = "true"                 # Create a NAT gateway. 
  dynamic "addons" {
    for_each = var.cluster_addons
    content {
      name   = lookup(addons.value, "name", var.cluster_addons)
      config = lookup(addons.value, "config", var.cluster_addons)
    }
  }
}
```

## **References**

-   To install other add-ons when you create an ACK dedicated cluster, refer to [Use Terraform to manage add-ons](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/use-terraform-to-manage-plug-ins).
    
-   For more information about how to create a node pool, see [Use Terraform to create a node pool that has auto scaling enabled](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/use-terraform-to-create-an-auto-scaling-node-pool).
    
-   Terraform is available as a managed service in ROS. You can deploy Terraform templates in the [ROS console](https://ros.console.alibabacloud.com/cn-hangzhou/welcome). For more information, see [Create a Terraform stack](/help/en/ros/user-guide/create-a-terraform-stack).
