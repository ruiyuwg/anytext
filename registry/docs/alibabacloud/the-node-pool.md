Terraform is an open source tool that allows you to securely and efficiently preview, configure, and manage cloud infrastructures and resources. You can use Terraform to automatically create and update Alibaba Cloud infrastructures and resources, and manage versions based on your requirements. This topic describes how to use Terraform to create an ACK Edge cluster.

**Note**

You can run the sample code in this topic with a few clicks. For more information, visit [Terraform Explorer](https://api.aliyun.com/api-tools/terraform?resource=alicloud_cs_edge_kubernetes&exampleId=201-use-case-create-ack-edge-cluster&activeTab=example).

## Prerequisites

-   ACK Edge is activated.
    
-   By default, an Alibaba Cloud account has full permissions on all resources that belong to this account. Security risks may arise if the credentials of an Alibaba Cloud account are leaked. We recommend that you use Resource Access Management (RAM) users to manage resources. When you create a RAM user, you need to create an AccessKey pair for the RAM user. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) and [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
-   The following policy is attached to the RAM user that you use to run commands in Terraform. The policy includes the minimum permissions required to run commands in Terraform. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    This policy allows Resource Access Management (RAM) users to create, view, and delete virtual private clouds (VPCs), vSwitches, and Container Service for Kubernetes (ACK) clusters.
    
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
                    "cs:DescribeClusterNodePools",
                    "cs:ScaleOutCluster",
                    "cs:DescribeClusterNodes",
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
    
-   The runtime environment for Terraform is prepared by using one of the following methods:
    
    -   [Terraform Explorer](https://api.aliyun.com/api-tools/terraform?spm=api-workbench.home.0.0.69bbe85cc1wFjp&provider=1.227.1&resource=alicloud_instance&product=ECS&example=): Alibaba Cloud provides an online runtime environment for Terraform. You can log on to the environment to use Terraform without the need to install Terraform. This method is suitable for scenarios where you need to use and debug Terraform in a low-cost, efficient, and convenient manner.
        
    -   [Use Terraform in Cloud Shell](/help/en/terraform/use-terraform-to-quickly-create-resources): Cloud Shell is preinstalled with Terraform and configured with your identity credentials. You can run Terraform commands in Cloud Shell. This method is suitable for scenarios where you need to use and access Terraform in a low-cost, efficient, and convenient manner.
        
    -   [Install and configure Terraform on your on-premises machine](/help/en/terraform/install-and-configure-terraform-locally): This method is suitable for scenarios where network connections are unstable or a custom development environment is needed.
        
    
    **Important**
    
    You must install Terraform 0.12.28 or later. You can run the terraform --version command to query the Terraform version.
    

## Resources

**Note**

You are charged for specific resources. If you no longer require the resources, you must release or unsubscribe from the resources at the earliest opportunity.

-   [alicloud\_db\_zones](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/zones): queries available zones.
    
-   [alicloud\_instance\_types](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/instance_types): queries Elastic Compute Service (ECS) instance types that meet the specified conditions.
    
-   [alicloud\_vpc](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc): creates a virtual private cloud (VPC).
    
-   [alicloud\_vswitch](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vswitch): creates vSwitches in a VPC to create subnets for the VPC.
    
-   [alicloud\_cs\_edge\_kubernetes](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cs_edge_kubernetes): creates an ACK Edge cluster.
    
-   [alicloud\_cs\_kubernetes\_node\_pool](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cs_kubernetes_node_pool): creates a node pool for an ACK managed cluster.
    

## Use Terraform to create an ACK Edge cluster

1.  Create a working directory and a file named `main.tf` in the directory.
    
    The `main.tf` file is used to configure the following settings for Terraform:
    
    -   Create a VPC and create a vSwitch in the VPC.
        
    -   Create an ACK Edge cluster.
        
    -   Create a node pool that contains two nodes.
        
    
    ```
    provider "alicloud" {
      region = var.region_id
    }
    
    variable "region_id" {
      default = "cn-hangzhou"
    }
    
    variable "k8s_name_edge" {
      type        = string
      description = "The name used to create edge kubernetes cluster."
      default     = "edge-example"
    }
    
    variable "new_vpc_name" {
      type        = string
      description = "The name used to create vpc."
      default     = "tf-vpc-172-16"
    }
    
    variable "new_vsw_name" {
      type        = string
      description = "The name used to create vSwitch."
      default     = "tf-vswitch-172-16-0"
    }
    
    variable "nodepool_name" {
      type        = string
      description = "The name used to create node pool."
      default     = "edge-nodepool-1"
    }
    
    variable "k8s_login_password" {
      type    = string
      default = "Test123456"
    }
    
    variable "k8s_version" {
      type        = string
      description = "Kubernetes version"
      default     = "1.28.9-aliyun.1"
    }
    
    variable "containerd_runtime_version" {
      type    = string
      default = "1.6.34"
    }
    
    variable "cluster_spec" {
      type        = string
      description = "The cluster specifications of kubernetes cluster,which can be empty. Valid values:ack.standard : Standard managed clusters; ack.pro.small : Professional managed clusters."
      default     = "ack.pro.small"
    }
    
    data "alicloud_zones" "default" {
      available_resource_creation = "VSwitch"
      available_disk_category     = "cloud_efficiency"
    }
    
    data "alicloud_instance_types" "default" {
      availability_zone    = data.alicloud_zones.default.zones.0.id
      cpu_core_count       = 4
      memory_size          = 8
      kubernetes_node_role = "Worker"
    }
    
    resource "alicloud_vpc" "vpc" {
      vpc_name   = var.new_vpc_name
      cidr_block = "172.16.0.0/12"
    }
    
    resource "alicloud_vswitch" "vsw" {
      vswitch_name = var.new_vsw_name
      vpc_id       = alicloud_vpc.vpc.id
      cidr_block   = cidrsubnet(alicloud_vpc.vpc.cidr_block, 8, 8)
      zone_id      = data.alicloud_zones.default.zones.0.id
    }
    
    
    resource "alicloud_cs_edge_kubernetes" "edge" {
      name                  = var.k8s_name_edge
      version               = var.k8s_version
      cluster_spec          = var.cluster_spec
      worker_vswitch_ids    = split(",", join(",", alicloud_vswitch.vsw.*.id))
      worker_instance_types = [data.alicloud_instance_types.default.instance_types.0.id]
      password              = var.k8s_login_password
      new_nat_gateway       = true
      pod_cidr              = "10.10.0.0/16"
      service_cidr          = "10.12.0.0/16"
      load_balancer_spec    = "slb.s2.small"
      worker_number         = 1
      node_cidr_mask        = 24
    
      # The container runtime. 
      runtime = {
        name    = "containerd"
        version = var.containerd_runtime_version
      }
    }
    # The node pool. 
    resource "alicloud_cs_kubernetes_node_pool" "nodepool" {
      # The name of the cluster. 
      cluster_id = alicloud_cs_edge_kubernetes.edge.id
      # The name of the node pool. 
      node_pool_name = var.nodepool_name
      # The vSwitches of the new Kubernetes cluster. Specify the IDs of one or more vSwitches. The vSwitches must be in the zone specified by availability_zone. 
      vswitch_ids = split(",", join(",", alicloud_vswitch.vsw.*.id))
    
      # The Elastic Compute Service (ECS) instance types and billing method. 
      instance_types       = [data.alicloud_instance_types.default.instance_types.0.id]
      instance_charge_type = "PostPaid"
    
      # Specify custom node names. This parameter is optional. 
      # node_name_mode      = "customized,edge-shenzhen,ip,default"
    
      # The container runtime. 
      runtime_name    = "containerd"
      runtime_version = var.containerd_runtime_version
    
      # The expected number of nodes in the node pool. 
      desired_size = 2
      # The password that is used to log on to the cluster by using SSH. 
      password = var.k8s_login_password
    
      # Specify whether to install the CloudMonitor agent on nodes. 
      install_cloud_monitor = true
    
      # The type of the system disks of the nodes. Valid values: cloud_ssd and cloud_efficiency. Default value: cloud_efficiency. 
      system_disk_category = "cloud_efficiency"
      system_disk_size     = 100
    
      # The OS type. 
      image_type = "AliyunLinux"
    
      # The configurations of the data disks of the nodes. 
      data_disks {
        # The type of data disks. 
        category = "cloud_efficiency"
        # The disk size. 
        size = 120
      }
      lifecycle {
        ignore_changes = [
          labels
        ]
      }
    }
    ```
    
2.  Run the following command to initialize Terraform:
    
    ```
    terraform init
    ```
    
    If the following information is returned, Terraform is initialized:
    
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
    
    If the following information is returned, the execution plan is succeeded. You can view the resource information.
    
    ```
    Refreshing Terraform state in-memory prior to plan...
    The refreshed state will be used to calculate this plan, but will not be
    persisted to local or remote state storage.
    ...
    Plan: 4 to add, 0 to change, 0 to destroy.
    ...
    ```
    
4.  Run the following command to create an ACK Edge cluster.
    
    ```
    terraform apply
    ```
    
    Type `yes`, press **Enter**, and wait until the command execution is completed. If the following information is displayed, the cluster is created.
    
    ```
    ...
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.
    
      Enter a value: yes
    ...
    alicloud_cs_edge_kubernetes.edge: Creation complete after 8m26s [id=************]
    
    Apply complete!  Resources: 4 added, 0 changed, 0 destroyed.
    ```
    
5.  Verify the result
    
    ## Run the terraform show command
    
    Run the following command to query the resources that are created by Terraform:
    
    ```
    terraform show
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7716793371/p863976.png)
    
    ## Log on to the ACK console
    
    Log on to the [ACK console](https://cs.console.alibabacloud.com) to view the created cluster.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7716793371/p864578.png)
    

## Clear resources

If you no longer require the preceding resources created or managed by Terraform, run the `terraform destroy` command to release the resources. For more information about the `terraform destroy` command, see [Common commands](/help/en/terraform/terraform-common-commands).

```
terraform destroy
```

## **Sample code**

**Note**

You can run the sample code in this topic with a few clicks. For more information, visit [Terraform Explorer](https://api.aliyun.com/api-tools/terraform?resource=alicloud_cs_edge_kubernetes&exampleId=201-use-case-create-ack-edge-cluster&activeTab=example).

### **Sample code**

```
provider "alicloud" {
  region = var.region_id
}

variable "region_id" {
  default = "cn-hangzhou"
}

variable "k8s_name_edge" {
  type        = string
  description = "The name used to create edge kubernetes cluster."
  default     = "edge-example"
}

variable "new_vpc_name" {
  type        = string
  description = "The name used to create vpc."
  default     = "tf-vpc-172-16"
}

variable "new_vsw_name" {
  type        = string
  description = "The name used to create vSwitch."
  default     = "tf-vswitch-172-16-0"
}

variable "nodepool_name" {
  type        = string
  description = "The name used to create node pool."
  default     = "edge-nodepool-1"
}

variable "k8s_login_password" {
  type    = string
  default = "Test123456"
}

variable "k8s_version" {
  type        = string
  description = "Kubernetes version"
  default     = "1.28.9-aliyun.1"
}

variable "containerd_runtime_version" {
  type    = string
  default = "1.6.34"
}

variable "cluster_spec" {
  type        = string
  description = "The cluster specifications of kubernetes cluster,which can be empty. Valid values:ack.standard : Standard managed clusters; ack.pro.small : Professional managed clusters."
  default     = "ack.pro.small"
}

data "alicloud_zones" "default" {
  available_resource_creation = "VSwitch"
  available_disk_category     = "cloud_efficiency"
}

data "alicloud_instance_types" "default" {
  availability_zone    = data.alicloud_zones.default.zones.0.id
  cpu_core_count       = 4
  memory_size          = 8
  kubernetes_node_role = "Worker"
}

resource "alicloud_vpc" "vpc" {
  vpc_name   = var.new_vpc_name
  cidr_block = "172.16.0.0/12"
}

resource "alicloud_vswitch" "vsw" {
  vswitch_name = var.new_vsw_name
  vpc_id       = alicloud_vpc.vpc.id
  cidr_block   = cidrsubnet(alicloud_vpc.vpc.cidr_block, 8, 8)
  zone_id      = data.alicloud_zones.default.zones.0.id
}


resource "alicloud_cs_edge_kubernetes" "edge" {
  name                  = var.k8s_name_edge
  version               = var.k8s_version
  cluster_spec          = var.cluster_spec
  worker_vswitch_ids    = split(",", join(",", alicloud_vswitch.vsw.*.id))
  worker_instance_types = [data.alicloud_instance_types.default.instance_types.0.id]
  password              = var.k8s_login_password
  new_nat_gateway       = true
  pod_cidr              = "10.10.0.0/16"
  service_cidr          = "10.12.0.0/16"
  load_balancer_spec    = "slb.s2.small"
  worker_number         = 1
  node_cidr_mask        = 24

  # The container runtime. 
  runtime = {
    name    = "containerd"
    version = var.containerd_runtime_version
  }
}
# The node pool. 
resource "alicloud_cs_kubernetes_node_pool" "nodepool" {
  # The name of the cluster. 
  cluster_id = alicloud_cs_edge_kubernetes.edge.id
  # The name of the node pool. 
  node_pool_name = var.nodepool_name
  # The vSwitches of the new Kubernetes cluster. Specify the IDs of one or more vSwitches. The vSwitches must be in the zone specified by availability_zone. 
  vswitch_ids = split(",", join(",", alicloud_vswitch.vsw.*.id))

  # The ECS instance types and billing method. 
  instance_types       = [data.alicloud_instance_types.default.instance_types.0.id]
  instance_charge_type = "PostPaid"

  # Specify custom node names. This parameter is optional. 
  # node_name_mode      = "customized,edge-shenzhen,ip,default"

  # The container runtime. 
  runtime_name    = "containerd"
  runtime_version = var.containerd_runtime_version

  # The expected number of nodes in the node pool. 
  desired_size = 2
  # The password that is used to log on to the cluster by using SSH. 
  password = var.k8s_login_password

  # Specify whether to install the CloudMonitor agent on nodes. 
  install_cloud_monitor = true

  # The type of the system disks of the nodes. Valid values: cloud_ssd and cloud_efficiency. Default value: cloud_efficiency. 
  system_disk_category = "cloud_efficiency"
  system_disk_size     = 100

  # The OS type. 
  image_type = "AliyunLinux"

  # The configurations of the data disks of the nodes. 
  data_disks {
    # The type of data disks. 
    category = "cloud_efficiency"
    # The disk size. 
    size = 120
  }
  lifecycle {
    ignore_changes = [
      labels
    ]
  }
}
```

## References

-   To call the API to create an ACK Edge cluster, see [Create an ACK managed cluster by calling an API operation](/help/en/ack/create-an-ack-managed-cluster).
    
-   To view more Terraform resources related to ACK, see [alicloud\_cs\_kubernetes](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/cs_kubernetes).
    
-   To view more Terraform-related code, see [Alibaba Cloud Terraform Provider](https://github.com/hashicorp/terraform-provider-alicloud).
