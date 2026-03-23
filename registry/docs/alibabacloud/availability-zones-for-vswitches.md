By default, ACK (Container Service for Kubernetes) node pools use a fixed number of nodes. To automatically scale nodes in and out based on workload demand, add a `scaling_config` block to the `alicloud_cs_kubernetes_node_pool` resource. This guide covers both adding an auto-scaling node pool to an existing cluster and creating a full cluster from scratch.

> **Tip:** Try the code in this guide directly in [Terraform Explorer](https://api.alibabacloud.com/terraform?resource=alicloud_cs_managed_kubernetes&exampleId=&activeTab=example&provider=1.238.0&product=Container_Service_for_Kubernetes\(ACK\)&example=201-use-case-create-auto-scaling-node-pool) -- no setup required.

## Prerequisites

Before you begin, make sure that you have:

-   **Auto Scaling activated** and the default Auto Scaling role assigned to your account. See [Activate Auto Scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes#step-t9t-hu3-cbw)
    
    > If you previously used `alicloud_cs_kubernetes_autoscaler`, Auto Scaling is already activated.
    
-   **CloudOps Orchestration Service (OOS) permissions** granted by creating the `AliyunOOSLifecycleHook4CSRole` role:
    
    1.  Click [AliyunOOSLifecycleHook4CSRole](https://ram.console.alibabacloud.com/role/authorize?spm=5176.2020520152.0.0.5b4716ddI6QevL&request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Fram.console.alibabacloud.com%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunOOSLifecycleHook4CSRole%22%2C%22TemplateId%22%3A%22AliyunOOSLifecycleHook4CSRole%22%7D%5D%2C%22Service%22%3A%22OOS%22%7D%5D%7D) to open the authorization page. > **Note:** For an Alibaba Cloud account, click the link directly. For a RAM user, make sure the Alibaba Cloud account already has the `AliyunOOSLifecycleHook4CSRole` role, then attach the `AliyunRAMReadOnlyAccess` policy to the RAM user. See [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
        
    2.  On the **RAM Quick Authorization** page, click **Authorize**.
        
-   **A Terraform runtime environment** set up through one of the following options:
    
    **Option**
    
    **Best for**
    
    [Terraform Explorer](/help/en/terraform/using-terraform-in-terraform-explorer)
    
    Quick experimentation without installing anything
    
    [Cloud Shell](https://www.alibabacloud.com/help/en/terraform/use-terraform-in-cloud-shell)
    
    Preinstalled Terraform with your credentials already configured
    
    [Local installation](/help/en/terraform/install-and-configure-terraform-locally)
    
    Custom environments or unstable network connections
    

## Background

Alibaba Cloud Provider 1.111.0 introduced a new way to enable auto scaling: the [`alicloud_cs_kubernetes_node_pool`](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cs_kubernetes_node_pool) resource with a `scaling_config` block. This replaces the legacy [`alicloud_cs_kubernetes_autoscaler`](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cs_kubernetes_autoscaler) component.

**Legacy (`autoscaler`)**

**Current (`node_pool` + `scaling_config`)**

Configuration

Complex, high overhead

Set `min_size` and `max_size` only

Node management

Scaled nodes go to the default pool

Dedicated node pool with full visibility in the ACK console

Optional parameters

Users must configure each parameter, risking inconsistent environments (for example, different OS images across nodes)

Uses server-side defaults for optional parameters such as `image_type` and `system_disk_category`, ensuring consistency across nodes

Parameter updates

Some parameters cannot be modified

Standard Terraform resource lifecycle

## Terraform resources

The examples in this topic use the following resources. Some resources incur charges. Release any resources you no longer need.

**Resource**

**Purpose**

[`alicloud_instance_types`](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/instance_types)

Query available Elastic Compute Service (ECS) instance types

[`alicloud_vpc`](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc)

Create a virtual private cloud (VPC)

[`alicloud_vswitch`](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vswitch)

Create vSwitches (subnets) in the VPC

[`alicloud_cs_managed_kubernetes`](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cs_managed_kubernetes)

Create an ACK managed cluster

[`alicloud_cs_kubernetes_node_pool`](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cs_kubernetes_node_pool)

Create a node pool with auto scaling

## Add an auto-scaling node pool to an existing cluster

To add an auto-scaling node pool to an existing ACK cluster, use this minimal configuration:

```
provider "alicloud" {
}

resource "alicloud_cs_kubernetes_node_pool" "autoscale" {
  cluster_id     = "<your-cluster-id>"        # ACK cluster ID
  name           = "np-test"
  vswitch_ids    = ["<your-vswitch-id>"]      # At least one vSwitch
  instance_types = ["ecs.e3.medium"]
  password       = "<your-ssh-password>"

  scaling_config {
    min_size = 1    # Minimum number of nodes
    max_size = 5    # Maximum number of nodes
  }
}
```

Replace the placeholders with your actual values:

**Placeholder**

**Description**

**Example**

`<your-cluster-id>`

The ID of your ACK cluster

c1a2b3c4d5e6f7890

`<your-vswitch-id>`

A vSwitch ID in the same VPC as your cluster

vsw-bp1mdigyhmilu2h4v\*\*\*\*

`<your-ssh-password>`

SSH login password for worker nodes

Must meet complexity requirements

> **Tip:** The `scaling_config` block is what enables auto scaling. Without it, the node pool uses a fixed node count.

## Create a cluster with an auto-scaling node pool

This example provisions all required infrastructure from scratch: a VPC, vSwitches, an ACK Pro managed cluster, and a node pool that scales between 1 and 10 nodes.

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
  description = "Cluster edition. Valid values: ack.standard (Standard), ack.pro.small (Pro)."
  default     = "ack.pro.small"
}

# Availability zones for vSwitches
variable "availability_zone" {
  description = "The availability zones of vSwitches."
  default     = ["cn-shenzhen-c", "cn-shenzhen-e", "cn-shenzhen-f"]
}

# CIDR blocks for node vSwitches
variable "node_vswitch_cidrs" {
  type    = list(string)
  default = ["172.16.0.0/23", "172.16.2.0/23", "172.16.4.0/23"]
}

# CIDR blocks for Terway pod vSwitches
variable "terway_vswitch_cidrs" {
  type    = list(string)
  default = ["172.16.208.0/20", "172.16.224.0/20", "172.16.240.0/20"]
}

# ECS instance types for worker nodes
variable "worker_instance_types" {
  description = "ECS instance types for worker nodes."
  default     = ["ecs.g6.2xlarge", "ecs.g6.xlarge"]
}

variable "password" {
  description = "SSH password for ECS instances."
  default     = "Test123456"
}

variable "k8s_name_prefix" {
  description = "Name prefix for the ACK managed cluster."
  default     = "tf-ack-shenzhen"
}

# Cluster add-ons: network, storage, logging, monitoring, and diagnostics
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

# --- Resource names ---
locals {
  k8s_name_terway        = "k8s_name_terway_${random_integer.default.result}"
  vpc_name               = "vpc_name_${random_integer.default.result}"
  autoscale_nodepool_name = "autoscale-node-pool-${random_integer.default.result}"
}

# Query instance types matching 8 vCPUs and 32 GiB memory
data "alicloud_instance_types" "default" {
  cpu_core_count       = 8
  memory_size          = 32
  availability_zone    = var.availability_zone[0]
  kubernetes_node_role = "Worker"
}

resource "random_integer" "default" {
  min = 10000
  max = 99999
}

# --- Network ---
resource "alicloud_vpc" "default" {
  vpc_name   = local.vpc_name
  cidr_block = "172.16.0.0/12"
}

# Node vSwitches
resource "alicloud_vswitch" "vswitches" {
  count      = length(var.node_vswitch_cidrs)
  vpc_id     = alicloud_vpc.default.id
  cidr_block = element(var.node_vswitch_cidrs, count.index)
  zone_id    = element(var.availability_zone, count.index)
}

# Pod vSwitches (for Terway)
resource "alicloud_vswitch" "terway_vswitches" {
  count      = length(var.terway_vswitch_cidrs)
  vpc_id     = alicloud_vpc.default.id
  cidr_block = element(var.terway_vswitch_cidrs, count.index)
  zone_id    = element(var.availability_zone, count.index)
}

# --- ACK managed cluster ---
resource "alicloud_cs_managed_kubernetes" "default" {
  name                 = local.k8s_name_terway
  cluster_spec         = var.cluster_spec
  worker_vswitch_ids   = split(",", join(",", alicloud_vswitch.vswitches.*.id))
  pod_vswitch_ids      = split(",", join(",", alicloud_vswitch.terway_vswitches.*.id))
  new_nat_gateway      = true
  service_cidr         = "10.11.0.0/16"
  slb_internet_enabled = true
  enable_rrsa          = true

  control_plane_log_components = ["apiserver", "kcm", "scheduler", "ccm"]

  dynamic "addons" {
    for_each = var.cluster_addons
    content {
      name   = lookup(addons.value, "name", var.cluster_addons)
      config = lookup(addons.value, "config", var.cluster_addons)
    }
  }
}

# --- Auto-scaling node pool (1 to 10 nodes) ---
resource "alicloud_cs_kubernetes_node_pool" "autoscale_node_pool" {
  cluster_id     = alicloud_cs_managed_kubernetes.default.id
  node_pool_name = local.autoscale_nodepool_name
  vswitch_ids    = split(",", join(",", alicloud_vswitch.vswitches.*.id))

  scaling_config {
    min_size = 1
    max_size = 10
  }

  instance_types        = var.worker_instance_types
  password              = var.password
  install_cloud_monitor = true
  system_disk_category  = "cloud_efficiency"
  system_disk_size      = 100
  image_type            = "AliyunLinux3"

  data_disks {
    category = "cloud_essd"
    size     = 120
  }
}
```

### Key parameters

**Parameter**

**Description**

**Value in this example**

`cluster_spec`

Cluster edition

`ack.pro.small` (ACK Pro)

`scaling_config.min_size`

Minimum number of nodes the pool maintains

`1`

`scaling_config.max_size`

Maximum number of nodes the pool can scale to

`10`

`instance_types`

ECS instance types for worker nodes

`ecs.g6.2xlarge`, `ecs.g6.xlarge`

`system_disk_category`

System disk type

`cloud_efficiency` (ultra disk)

`system_disk_size`

System disk size in GiB

`100`

`data_disks.category`

Data disk type

`cloud_essd`

`data_disks.size`

Data disk size in GiB

`120`

`image_type`

OS image

`AliyunLinux3`

`install_cloud_monitor`

Install the CloudMonitor agent on nodes

`true`

### Deploy the configuration

1.  Save the configuration to a `.tf` file, then initialize Terraform: Expected output:
    
    ```
       terraform init
    ```
    
    ```
       Terraform has been successfully initialized!
    
       You may now begin working with Terraform. Try running "terraform plan" to see
       any changes that are required for your infrastructure. All Terraform commands
       should now work.
    
       If you ever set or change modules or backend configuration for Terraform,
       rerun this command to reinitialize your working directory. If you forget, other
       commands will detect it and remind you to do so if necessary.
    ```
    
2.  Create the resources:
    
    ```
       terraform apply
    ```
    
3.  Verify the result. After the node pool is created, open the ACK console and navigate to your cluster's **Node Pools** page. The **Auto Scaling Enabled** badge appears below the node pool name.
    

## Generate Terraform parameters from the ACK console

If the preceding examples do not match your requirements, generate Terraform parameters directly from the ACK console:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the target cluster. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  Click **Create Node Pool**. Configure the parameters and click **Confirm**.
    
4.  In the dialog box, click **Console-to-Code** in the bottom-left corner.
    
5.  Click the **Terraform** tab. Copy the generated Terraform code from the code block.
    

## Migrate from `alicloud_cs_kubernetes_autoscaler`

If you currently use the legacy `alicloud_cs_kubernetes_autoscaler` component, follow these steps to switch to `alicloud_cs_kubernetes_node_pool`:

### Step 1: Update the autoscaler-meta ConfigMap

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  Click the name of the target cluster. In the left navigation pane, choose **Configurations** > **ConfigMaps**.
    
3.  Select **kube-system** from the **Namespace** drop-down list. Find the `autoscaler-meta` ConfigMap and click **Edit** in the **Actions** column.
    
4.  In the **Edit** panel, change `"taints":""` (string) to `"taints":[]` (array).
    
5.  Click **OK**.
    

### Step 2: Sync the node pool

1.  In the left navigation pane, choose **Nodes** > **Node Pools**.
    
2.  In the upper-right corner of the **Node Pools** page, click **Sync Node Pool**.
    

After the sync completes, create auto-scaling node pools using the `alicloud_cs_kubernetes_node_pool` resource as shown in the examples above.

## Clean up resources

To release all resources managed by this configuration, run:

```
terraform destroy
```

For more information about `terraform destroy`, see [Common commands](/help/en/terraform/terraform-common-commands).

## References

-   [Node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-overview/#task-2013378)
    
-   [Enable node auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes#task-1893824)
    
-   [Create an ACK managed cluster with Terraform](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/use-terraform-to-create-an-ack-managed-cluster#task-2005064)
    
-   [`alicloud_cs_kubernetes_node_pool`](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cs_kubernetes_node_pool)
    
-   [`alicloud_cs_kubernetes_autoscaler`](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cs_kubernetes_autoscaler)
    
-   [Landing with Terraform examples](https://github.com/alibabacloud-automation/landing-with-terraform/tree/main/quickstarts)
    
-   [What is Terraform?](/help/en/terraform/what-is-terraform#concept-vhk-wpc-rfb)
