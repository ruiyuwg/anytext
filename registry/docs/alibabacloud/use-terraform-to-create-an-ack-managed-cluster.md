This topic describes how to use **Terraform**, an Infrastructure as Code (IaC) tool, to automate the deployment of an Alibaba Cloud Container Service for Kubernetes (ACK) managed cluster.

**Note**

You can run the sample code directly in your browser using [OpenAPI Portal](https://api.alibabacloud.com/terraform?resource=alicloud_cs_managed_kubernetes&exampleId=&activeTab=example&provider=1.238.0&product=Container_Service_for_Kubernetes\(ACK\)&example=201-use-case-create-ack-managed-cluster).

## Prerequisites

-   **Service activation**
    
    ACK is activated. If not already active, see [Activate ACK via Terraform](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/use-terraform-to-assign-default-roles-to-ack-when-you-use-ack-for-the-first-time).
    
-   **Security compliance**
    
    Your Alibaba Cloud account must have full permissions on all resources. If the credentials of your Alibaba Cloud account are leaked, you may face significant security risks. We recommend that you use a Resource Access Management (RAM) user and create an AccessKey for the RAM user. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) and [Create an AccessKey](/help/en/ram/user-guide/create-an-accesskey-pair).
    
-   **Required permissions**
    
    Attach the following least privilege policy to the RAM user that you use to run Terraform commands. This policy grants the RAM user permissions to manage the resources in this example. For more information, see [Manage RAM user permissions](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    This permission policy allows the RAM user to create, view, and delete virtual private clouds (VPCs), vSwitches, and ACK clusters.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "vpc:CreateVpc",
            "vpc:CreateVSwitch",
            "cs:CreateCluster",
            "vpc:DescribeVpcAttribute",
            "vpc:DescribeVSwitchAttributes",
            "vpc:DescribeRouteTableList",
            "vpc:DescribeNatGateways",
            "cs:DescribeTaskInfo",
            "cs:DescribeClusterDetail",
            "cs:GetClusterCerts",
            "cs:CheckControlPlaneLogEnable",
            "cs:CreateClusterNodePool",
            "cs:DescribeClusterNodePoolDetail",
            "cs:ModifyClusterNodePool",
            "vpc:DeleteVpc",
            "vpc:DeleteVSwitch",
            "cs:DeleteCluster",
            "cs:DeleteClusterNodepool"
          ],
          "Resource": "*"
        }
      ]
    }
    ```
    
-   **Environment setup**
    
    Choose one of the following methods to run Terraform:
    
    -   [Terraform Explorer](/help/en/terraform/using-terraform-in-terraform-explorer): Alibaba Cloud provides an online environment for Terraform that you can use without installation. This method is ideal for quickly trying out and debugging Terraform at no cost.
        
    -   [Use Terraform to Quickly Create Resources](/help/en/terraform/use-terraform-to-quickly-create-resources): Alibaba Cloud Cloud Shell has Terraform pre-installed and credentials configured. You can run Terraform commands directly in Cloud Shell. This method provides quick, low-cost access to and use of Terraform.
        
    -   [Resource Orchestration Service (ROS)](/help/en/ros/user-guide/create-a-terraform-template): ROS provides a managed service for Terraform. You can create Terraform templates to define Alibaba Cloud, AWS, or Azure resources, and configure resource parameters and dependencies.
        
    -   [Local CLI](/help/en/terraform/install-and-configure-terraform-locally): This method is suitable for scenarios with poor network connectivity or where a custom development environment is required.
        
    
    **Important**
    
    Make sure that your Terraform version is 0.12.28 or later. To check the version, run the `terraform --version` command.
    

## **Resources used**

**Note**

Some resources used in this example incur fees. To avoid unwanted charges, delete these resources when you no longer need them.

-   [alicloud\_zones](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/zones): Queries available zones.
    
-   [alicloud\_instance\_types](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/instance_types): Queries Elastic Compute Service (ECS) instance types that meet specified criteria.
    
-   [alicloud\_vpc](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc): Creates a VPC.
    
-   [alicloud\_vswitch](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vswitch): Creates a vSwitch to divide a VPC into one or more subnets.
    
-   [alicloud\_cs\_managed\_kubernetes](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cs_managed_kubernetes): Creates an ACK managed cluster.
    
-   [alicloud\_cs\_kubernetes\_node\_pool](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cs_kubernetes_node_pool): Creates a node pool for an ACK managed cluster.
    

## **Generate Terraform config from the console**

If you have specific configuration needs not covered in this topic, you can export the Terraform configuration directly from the ACK console

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click **Cluster Templates**.
    
3.  In the dialog box that appears, select the cluster type you want to create, click **Create**, and configure your cluster details.
    
4.  On the **Confirm** step, click **Console-to-Code** in the top right corner.
    
5.  Click the **Terraform** tab to copy the auto-generated HCL code.
    

## Create an ACK managed cluster (Terway networking)

This example creates an ACK managed cluster that includes a regular node pool, a managed node pool, and an auto-scaling node pool. By default, a series of add-ons are installed on the cluster, such as Terway (networking), csi-plugin (storage), csi-provisioner (storage), loongcollector (logging), Nginx Ingress Controller, ack-arms-prometheus (monitoring), and ack-node-problem-detector (node diagnostics).

1.  Create a working directory, and create a configuration file named main.tf with the following code.
    
    ```
    provider "alicloud" {
      region = var.region_id
    }
    
    variable "region_id" {
      type    = string
      default = "cn-shenzhen"
    }
    
    variable "cluster_spec" {
      type        = string
      description = "The cluster specifications of kubernetes cluster,which can be empty. Valid values:ack.standard : Standard managed clusters; ack.pro.small : Professional managed clusters."
      default     = "ack.pro.small"
    }
    
    # The zones of the vSwitches.
    variable "availability_zone" {
      description = "The availability zones of vswitches."
      default     = ["cn-shenzhen-c", "cn-shenzhen-e", "cn-shenzhen-f"]
    }
    
    # A list of vSwitch IDs.
    variable "node_vswitch_ids" {
      description = "List of existing node vswitch ids for terway."
      type        = list(string)
      default     = []
    }
    
    # A list of CIDR blocks for creating new vSwitches.
    variable "node_vswitch_cidrs" {
      description = "List of cidr blocks used to create several new vswitches when 'node_vswitch_ids' is not specified."
      type        = list(string)
      default     = ["172.16.0.0/23", "172.16.2.0/23", "172.16.4.0/23"]
    }
    
    # The configuration of the Terway network plugin. If empty, a new Terway vSwitch will be created based on terway_vswitch_cidrs by default.
    variable "terway_vswitch_ids" {
      description = "List of existing pod vswitch ids for terway."
      type        = list(string)
      default     = []
    }
    
    # The CIDR blocks for creating vSwitches for Terway when terway_vswitch_ids is not specified.
    variable "terway_vswitch_cidrs" {
      description = "List of cidr blocks used to create several new vswitches when 'terway_vswitch_ids' is not specified."
      type        = list(string)
      default     = ["172.16.208.0/20", "172.16.224.0/20", "172.16.240.0/20"]
    }
    
    # The ECS instance types for launching worker nodes.
    variable "worker_instance_types" {
      description = "The ecs instance types used to launch worker nodes."
      default     = ["ecs.g6.2xlarge", "ecs.g6.xlarge"]
    }
    
    # Core add-ons.
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
          "name"   = "loongcollector",
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
        },
        {
          "name"   = "csi-plugin",
          "config" = "",
        },
        {
          "name"   = "csi-provisioner",
          "config" = "",
        }
      ]
    }
    
    # The name prefix for the ACK managed cluster.
    variable "k8s_name_prefix" {
      description = "The name prefix used to create managed kubernetes cluster."
      default     = "tf-ack-shenzhen"
    }
    
    # Default resource names.
    locals {
      k8s_name_terway         = substr(join("-", [var.k8s_name_prefix, "terway"]), 0, 63)
      k8s_name_flannel        = substr(join("-", [var.k8s_name_prefix, "flannel"]), 0, 63)
      k8s_name_ask            = substr(join("-", [var.k8s_name_prefix, "ask"]), 0, 63)
      new_vpc_name            = "tf-vpc-172-16"
      new_vsw_name_azD        = "tf-vswitch-azD-172-16-0"
      new_vsw_name_azE        = "tf-vswitch-azE-172-16-2"
      new_vsw_name_azF        = "tf-vswitch-azF-172-16-4"
      nodepool_name           = "default-nodepool"
      managed_nodepool_name   = "managed-node-pool"
      autoscale_nodepool_name = "autoscale-node-pool"
      log_project_name        = "log-for-${local.k8s_name_terway}"
    }
    
    # ECS instance configuration for nodes. Queries for ECS instance types that meet the CPU and memory requirements.
    data "alicloud_instance_types" "default" {
      cpu_core_count       = 8
      memory_size          = 32
      availability_zone    = var.availability_zone[0]
      kubernetes_node_role = "Worker"
    }
    
    # VPC.
    resource "alicloud_vpc" "default" {
      vpc_name   = local.new_vpc_name
      cidr_block = "172.16.0.0/12"
    }
    
    # Node vSwitches.
    resource "alicloud_vswitch" "vswitches" {
      count      = length(var.node_vswitch_ids) > 0 ? 0 : length(var.node_vswitch_cidrs)
      vpc_id     = alicloud_vpc.default.id
      cidr_block = element(var.node_vswitch_cidrs, count.index)
      zone_id    = element(var.availability_zone, count.index)
    }
    
    # Pod vSwitches.
    resource "alicloud_vswitch" "terway_vswitches" {
      count      = length(var.terway_vswitch_ids) > 0 ? 0 : length(var.terway_vswitch_cidrs)
      vpc_id     = alicloud_vpc.default.id
      cidr_block = element(var.terway_vswitch_cidrs, count.index)
      zone_id    = element(var.availability_zone, count.index)
    }
    
    # ACK managed cluster.
    resource "alicloud_cs_managed_kubernetes" "default" {
      name                         = local.k8s_name_terway                                         # The name of the Kubernetes cluster.
      cluster_spec                 = var.cluster_spec                                              # Creates a Pro edition cluster.
      vswitch_ids                  = split(",", join(",", alicloud_vswitch.vswitches.*.id))        # The vSwitches for the node pool. Specify one or more vSwitch IDs. The vSwitches must be in the zone specified by availability_zone.
      pod_vswitch_ids              = split(",", join(",", alicloud_vswitch.terway_vswitches.*.id)) # Pod vSwitches.
      new_nat_gateway              = true                                                          # Specifies whether to create a new NAT Gateway when creating the Kubernetes cluster. Default value: true.
      service_cidr                 = "10.11.0.0/16"                                                # The service CIDR block. This parameter is required when cluster_network_type is set to flannel. The service CIDR block cannot be the same as the VPC CIDR block or the CIDR blocks of other Kubernetes clusters in the VPC. You cannot change the service CIDR block after the cluster is created. The maximum number of hosts in the cluster is 256.
      slb_internet_enabled         = true                                                          # Specifies whether to create an Internet-facing Server Load Balancer instance for the API server. Default value: false.
      enable_rrsa                  = true
      control_plane_log_components = ["apiserver", "kcm", "scheduler", "ccm"] # Control plane logs.
      dynamic "addons" {                                                      # Component management.
        for_each = var.cluster_addons
        content {
          name   = lookup(addons.value, "name", var.cluster_addons)
          config = lookup(addons.value, "config", var.cluster_addons)
        }
      }
    }
    
    # Regular node pool.
    resource "alicloud_cs_kubernetes_node_pool" "default" {
      cluster_id            = alicloud_cs_managed_kubernetes.default.id              # The name of the Kubernetes cluster.
      node_pool_name        = local.nodepool_name                                    # The name of the node pool.
      vswitch_ids           = split(",", join(",", alicloud_vswitch.vswitches.*.id)) # The vSwitches for the node pool. Specify one or more vSwitch IDs. The vSwitches must be in the zone specified by availability_zone.
      instance_types        = var.worker_instance_types
      instance_charge_type  = "PostPaid"
      desired_size          = 2            # The expected number of nodes in the node pool.
      install_cloud_monitor = true         # Specifies whether to install Cloud Monitor on the nodes.
      system_disk_category  = "cloud_efficiency"
      system_disk_size      = 100
      image_type            = "AliyunLinux"
      data_disks {              # Data disk configuration for the node.
        category = "cloud_essd" # The data disk category.
        size     = 120          # The data disk size.
      }
    }
    
    # Creates a managed node pool.
    resource "alicloud_cs_kubernetes_node_pool" "managed_node_pool" {
      cluster_id     = alicloud_cs_managed_kubernetes.default.id              # The name of the Kubernetes cluster.
      node_pool_name = local.managed_nodepool_name                            # The name of the node pool.
      vswitch_ids    = split(",", join(",", alicloud_vswitch.vswitches.*.id)) # The vSwitches for the node pool. Specify one or more vSwitch IDs. The vSwitches must be in the zone specified by availability_zone.
      desired_size   = 0                                                      # The expected number of nodes in the node pool.
      management {
        auto_repair     = true
        auto_upgrade    = true
        max_unavailable = 1
      }
      instance_types        = var.worker_instance_types
      instance_charge_type  = "PostPaid"
      install_cloud_monitor = true
      system_disk_category  = "cloud_efficiency"
      system_disk_size      = 100
      image_type            = "AliyunLinux"
      data_disks {
        category = "cloud_essd"
        size     = 120
      }
    }
    
    # Creates an auto-scaling node pool. The node pool can scale out to a maximum of 10 nodes and must maintain at least 1 node.
    resource "alicloud_cs_kubernetes_node_pool" "autoscale_node_pool" {
      cluster_id     = alicloud_cs_managed_kubernetes.default.id
      node_pool_name = local.autoscale_nodepool_name
      vswitch_ids    = split(",", join(",", alicloud_vswitch.vswitches.*.id))
      scaling_config {
        min_size = 1
        max_size = 10
      }
      instance_types        = var.worker_instance_types
      install_cloud_monitor = true         # Specifies whether to install CloudMonitor on the Kubernetes nodes.
      system_disk_category  = "cloud_efficiency"
      system_disk_size      = 100
      image_type            = "AliyunLinux3"
      data_disks {              # Data disk configuration for the node.
        category = "cloud_essd" # The category of the data disk.
        size     = 120          # The size of the data disk.
      }
    }
    ```
    
2.  Run the following command to initialize the Terraform environment.
    
    ```
    terraform init
    ```
    
    Expected output:
    
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
    
4.  Run the following command to create the cluster. Type `yes` when prompted.
    
    ```
    terraform apply
    ```
    
    The following output indicates that the ACK cluster is created:
    
    ```
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.
    
      Enter a value: yes
    
    ...
    alicloud_cs_managed_kubernetes.default: Creation complete after 5m48s [id=ccb53e72ec6c447c990762800********]
    ...
    
    Apply complete! Resources: 11 added, 0 changed, 0 destroyed.
    ```
    
5.  Verify the result.
    
    ### **Verify with** `**terraform show**`
    
    Run the following command to view the details of the resources created by Terraform.
    
    ```
    terraform show
    ```
    
    ### **Verify in the** **ACK console**
    
    Log on to the [ACK console](https://cs.console.alibabacloud.com) to view the created cluster.
    

## Resource cleanup

To avoid ongoing costs, destroy the provisioned infrastructure when it is no longer needed:

```
terraform destroy
```

For more information about the command, see [Common commands](/help/en/terraform/terraform-common-commands).

## References

-   To install additional add-ons when you create an ACK managed cluster, see [Use Terraform to manage add-ons](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/use-terraform-to-manage-plug-ins).
    
-   To create a node pool, see [Use Terraform to create a node pool with auto scaling enabled](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/use-terraform-to-create-an-auto-scaling-node-pool).
    
-   Terraform is available as a managed service in ROS. You can deploy Terraform templates in the [ROS console](https://ros.console.alibabacloud.com/cn-hangzhou/welcome). For more information, see [Create a Terraform stack](/help/en/ros/user-guide/create-a-terraform-stack).
