This topic describes how to use Terraform to create an ApsaraDB for MongoDB instance.

**Note**

You can [run the sample code](https://api.aliyun.com/terraform?resource=alicloud_mongodb_instance&exampleId=201-use-case-create-mongodb-instance&activeTab=example) in this topic with a few clicks.

For more information about Terraform, see [What is Terraform?](/help/en/terraform/what-is-terraform) For more information about the MongoDB resource types supported by Terraform, see [Integration overview](/help/en/mongodb/developer-reference/using-openapi) or [Alibaba Cloud Provider](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs).

## Resource architecture

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2548561961/p698453.png)

You can create a virtual private cloud (VPC), a vSwitch, and a replica set instance in a specific region.

## **Prerequisites**

-   An Alibaba Cloud account has full permissions on all resources that belong to this account. If the credentials of the Alibaba Cloud account are leaked, security risks may arise. We recommend that you use a Resource Access Management (RAM) user and create an AccessKey pair for the RAM user. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) and [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
-   The AliyunMongoDBFullAccess and AliyunMongoDBFullAccess permissions are granted to the RAM user. The AliyunMongoDBFullAccess permission is used to manage ApsaraDB for MongoDB, and the AliyunMongoDBFullAccess permission is used to manage virtual private clouds (VPCs). The following sample code shows an example on how to grant the two permissions to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800)
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Action": "dds:*",
                "Resource": "*",
                "Effect": "Allow"
            },
            {
                "Action": [
                    "vpc:DescribeVpcs",
                    "vpc:DescribeVSwitches",
                    "vpc:CreateVpc",
                    "vpc:DeleteVpc",
                    "vpc:ModifyVpcAttribute",
                    "vpc:CreateVSwitch",
                    "vpc:DeleteVSwitch",
                    "vpc:ModifyVSwitchAttribute"
                ],
                "Resource": "*",
                "Effect": "Allow"
            },
            {
                "Action": "hdm:*",
                "Resource": "acs:dds:*:*:*",
                "Effect": "Allow"
            },
            {
                "Action": "dms:LoginDatabase",
                "Resource": "acs:dds:*:*:*",
                "Effect": "Allow"
            },
            {
                "Action": "ram:CreateServiceLinkedRole",
                "Resource": "*",
                "Effect": "Allow",
                "Condition": {
                    "StringEquals": {
                        "ram:ServiceName": "mongodb.aliyuncs.com"
                    }
                }
            }
        ]
    }
    ```
    
-   Prepare the runtime environment for Terraform by using one of the following methods:
    
    -   Use Terraform in [Terraform Explorer](/help/en/terraform/using-terraform-in-terraform-explorer): Alibaba Cloud provides Terraform Explorer, an online runtime environment for Terraform. You can use Terraform after you log on to Terraform Explorer without the need to install Terraform. This method is suitable for scenarios in which you want to use and debug Terraform in a fast and convenient manner at no additional costs.
        
    -   [Use Terraform in Cloud Shell](/help/en/terraform/use-terraform-to-quickly-create-resources): Terraform is preinstalled in Cloud Shell and identity credentials are configured. You can directly run Terraform commands in Cloud Shell. This method is suitable for scenarios in which you want to use and debug Terraform in a fast and convenient manner at low costs.
        
    -   [Install and configure Terraform on your on-premises machine](/help/en/terraform/install-and-configure-terraform-locally): This method is suitable for scenarios in which network connections are unstable or a custom development environment is required.
        
    

**Important**

You must install Terraform 0.12.28 or later. You can run the `terraform --version` command to query the Terraform version.

**Note**

Fees are generated for specific resources in this example. Unsubscribe from the resources when you no longer need them.

## Required resources

-   [alicloud\_mongodb\_instance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/mongodb_instance): the resource type that is used to create a replica set instance.
    
-   [alicloud\_mongodb\_sharding\_instance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/mongodb_sharding_instance): the resource type that is used to create a sharded cluster instance.
    

## Use Terraform to create an ApsaraDB for MongoDB instance.

1.  Create a working directory and a configuration file named `main.tf` in the directory. main.tf is the main file of Terraform and defines the resources that you want to deploy.
    
    ## Standalone instance
    
    ```
    variable "region" {
      default = "cn-heyuan"
    }
    provider "alicloud" {
      region = var.region
    }
    # Declare a variable named name.
    variable "name" {
      default = "terraform-example-1125"
    }
    variable "engine_version" {
      default = "7.0"
    }
    variable "db_instance_class" {
      default = "mdb.shard.2x.xlarge.d"
    }
    # Specify the alicloud_mongodb_zones parameter to query zone information.
    data "alicloud_mongodb_zones" "default" {
    }
    # Set the zone_id parameter to the ID of the last zone in the value of the alicloud_mongodb_zones parameter.
    locals {
      index   = length(data.alicloud_mongodb_zones.default.zones) - 1
      zone_id = data.alicloud_mongodb_zones.default.zones[local.index].id
    }
    # Create a VPC.
    resource "alicloud_vpc" "vpc1" {
      vpc_name   = var.name
      cidr_block = "172.16.0.0/12"
    }
    
    # Create a vSwitch in the VPC in the zone specified by the local.zone_id parameter.
    resource "alicloud_vswitch" "default" {
      vswitch_name = var.name
      cidr_block   = "172.16.20.0/24"
      vpc_id       = alicloud_vpc.vpc1.id
      zone_id      = local.zone_id
    }
    
    # Use the VPC and vSwitch to create a standalone resource.
    resource "alicloud_mongodb_instance" "singleNode" {
      # (Required) The database engine version of the instance. 
      engine_version      = var.engine_version
      # (Required) The instance type. 
      db_instance_class   = var.db_instance_class
      # (Required) The storage capacity of the instance. The storage capacity is an integer. Unit: GB. 
      db_instance_storage = 20
      # The network type of the instance.
      network_type        = "VPC"
      # (Optional) The vSwitch ID of the instance in the VPC. A new vSwitch is required. 
      vswitch_id          = alicloud_vswitch.default.id
      # vpc_id
      vpc_id              = alicloud_vpc.vpc1.id
      # (Optional) The zone where the instance resides. A new zone is required. 
      zone_id             = local.zone_id
      # The name of the instance.  
      name                = var.name
      # (Optional) The storage type of the instance. This configuration is available in Terraform 1.199.0 and later versions. 
      # storage_type        = "cloud_auto"
      # (Optional) The tags that you want to assign to the resource. 
      # tags = {
      #   Created = "TF"
      #   For     = "example"
      #   }
      # (Optional) The IP addresses that are allowed to access all databases of the instance. An IP address list is displayed. 
      # security_ip_list    = [
            # "10.168.1.12",
            # "100.69.7.112"
      #   ]
    }
    ```
    
    For more information about how to configure the `alicloud_mongodb_instance` resource type, see [alicloud\_mongodb\_instance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/mongodb_instance?spm=a2c4g.335111.0.0.ee2c7a0bUGJu0q).
    
    ## Replica set instance
    
    ```
    variable "region" {
      default = "cn-heyuan"
    }
    provider "alicloud" {
      region = var.region
    }
    # Declare a variable named name.
    variable "name" {
      default = "terraform-example-1125"
    }
    variable "engine_version" {
      default = "7.0"
    }
    variable "db_instance_class" {
      default = "mdb.shard.2x.xlarge.d"
    }
    
    # Specify the alicloud_mongodb_zones parameter to query zone information.
    data "alicloud_mongodb_zones" "default" {
    }
    
    # Set the zone_id parameter to the ID of the last zone in the value of the alicloud_mongodb_zones parameter.
    locals {
      index   = length(data.alicloud_mongodb_zones.default.zones) - 1
      zone_id = data.alicloud_mongodb_zones.default.zones[local.index].id
    }
    
    # Create a VPC.
    resource "alicloud_vpc" "vpc1" {
      vpc_name   = var.name
      cidr_block = "172.16.0.0/12"
    }
    
    # Create a vSwitch in the VPC in the zone specified by the local.zone_id parameter.
    resource "alicloud_vswitch" "default" {
      vswitch_name = var.name
      cidr_block   = "172.16.20.0/24"
      vpc_id       = alicloud_vpc.vpc1.id
      zone_id      = local.zone_id
    }
    
    # Use the VPC and vSwitch to create a replica set resource.
    resource "alicloud_mongodb_instance" "default" {
      engine_version      = var.engine_version
      db_instance_class   = var.db_instance_class
      db_instance_storage = 20
      network_type        = "VPC"
      vswitch_id          = alicloud_vswitch.default.id
      vpc_id              = alicloud_vpc.vpc1.id
      security_ip_list    = ["10.168.1.12", "100.69.7.112"]
      name                = var.name
      tags = {
        Created = "TF"
        For     = "example"
      }
    }
    ```
    
    For more information about how to configure the `alicloud_mongodb_instance` resource type, see [alicloud\_mongodb\_instance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/mongodb_instance?spm=a2c4g.335111.0.0.ee2c7a0bUGJu0q).
    
    ## Sharded cluster instance
    
    ```
    variable "region" {
      default = "cn-heyuan"
    }
    provider "alicloud" {
      region = var.region
    }
    
    # Declare a variable named name.
    variable "name" {
      default = "terraform-example-1125"
    }
    
    # Specify the alicloud_mongodb_zones parameter to query zone information.
    data "alicloud_mongodb_zones" "default" {
      
    }
    
    # Set the zone_id parameter to the ID of the last zone in the value of the alicloud_mongodb_zones parameter.
    locals {
      index   = length(data.alicloud_mongodb_zones.default.zones) - 1
      zone_id = data.alicloud_mongodb_zones.default.zones[local.index].id
    }
    
    # Create a VPC.
    resource "alicloud_vpc" "vpc1" {
      vpc_name   = var.name
      cidr_block = "172.16.0.0/12"
    }
    
    # Create a vSwitch in the VPC in the zone specified by the local.zone_id parameter.
    resource "alicloud_vswitch" "default" {
      vswitch_name = var.name
      cidr_block   = "172.16.20.0/24"
      vpc_id       = alicloud_vpc.vpc1.id
      zone_id      = local.zone_id
    }
    
    # Use the VPC and vSwitch to create a sharded cluster resource.
    resource "alicloud_mongodb_sharding_instance" "default" {
      # (Required) The database engine version of the instance.
      engine_version      = "7.0"
      # (Optional) The vSwitch ID of the instance in the VPC. A new vSwitch is required. 
      vswitch_id          = alicloud_vswitch.default.id
      # The network type of the instance.
      network_type        = "VPC"
      # vpc_id
      vpc_id              = alicloud_vpc.vpc1.id
      # The name of the instance.
      name                = var.name
      # The zone where the instance resides.
      zone_id = local.zone_id
      # Define the mongos node of the instance. The number of mongos nodes that you can purchase is 2 to 32. You can use the mongo_list parameter to configure a mongos node. 
      mongo_list {
        # (Required) The instance type of the mongos node.
        node_class = "mdb.shard.2x.xlarge.d"
      }
      mongo_list {
        node_class = "mdb.shard.2x.xlarge.d"
      }
      # (Required) Define the shard of the instance. The number of shards that you can purchase is 2 to 32. You can use the mongo_list parameter to configure a shard. 
      shard_list {
        # (Required) The instance type of the shard.
        node_class   = "mdb.shard.2x.xlarge.d"
        # (Required) The storage capacity of the shard. The storage capacity is an integer. 
        node_storage = "20"
      }
      shard_list {
        node_class        = "mdb.shard.2x.xlarge.d"
        node_storage      = "20"
        # The number of read-only nodes in the shard. Default value: 0. Valid values: 0 to 5. 
        readonly_replicas = "1"
      }
      config_server_list {
        # Define the instance type of the ConfigServer component. Valid values: mdb.shard.2x.xlarge.d and dds.cs.mid. 
        node_class ="mdb.shard.2x.xlarge.d"
        # Define the storage capacity of the ConfigServer component. 
        node_storage = "20"
      }
      # 
      tags = {
        Created = "TF"
        For     = "Example"
      }
    }
    ```
    
    For more information about how to configure the `alicloud_mongodb_sharding_instance` resource type, see [alicloud\_mongodb\_sharding\_instance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/mongodb_sharding_instance).
    
2.  Run the following command to initialize `Terraform`:
    
    ```
    terraform init
    ```
    
    If the following information is returned, Terraform is successfully initialized.
    
    ```
    Initializing the backend...
    
    Initializing provider plugins...
    - Finding latest version of hashicorp/alicloud...
    - Installing hashicorp/alicloud v1.234.0...
    - Installed hashicorp/alicloud v1.234.0 (signed by HashiCorp)
    
    Terraform has created a lock file .terraform.lock.hcl to record the provider
    selections it made above. Include this file in your version control repository
    so that Terraform can guarantee to make the same selections by default when
    you run "terraform init" in the future.
    
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
    
4.  Run the following command to create an ApsaraDB for MongoDB instance.
    
    ```
    terraform apply
    ```
    
    During the execution, enter `yes` as prompted and press the **Enter** key. Wait until the command is successfully run. If the following information is returned, an ApsaraDB for MongoDB instance is successfully created.
    
    ```
    Plan: 3 to add, 0 to change, 0 to destroy.
    
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.
    
      Enter a value: yes
    
    alicloud_vpc.vpc1: Creating...
    alicloud_vpc.vpc1: Creation complete after 6s [id=vpc-f8zov2h1snsl2bm9qz***]
    alicloud_vswitch.default: Creating...
    alicloud_vswitch.default: Creation complete after 3s [id=vsw-f8zswqowidqw16ypc2***]
    alicloud_mongodb_instance.singleNode: Creating...
    alicloud_mongodb_instance.singleNode: Still creating... [10s elapsed]
    alicloud_mongodb_instance.singleNode: Still creating... [20s elapsed]
    alicloud_mongodb_instance.singleNode: Still creating... [30s elapsed]
    alicloud_mongodb_instance.singleNode: Still creating... [40s elapsed]
    alicloud_mongodb_instance.singleNode: Still creating... [50s elapsed]
    alicloud_mongodb_instance.singleNode: Still creating... [1m0s elapsed]
    alicloud_mongodb_instance.singleNode: Still creating... [1m10s elapsed]
    
    ...
    
    alicloud_mongodb_instance.singleNode: Still creating... [14m11s elapsed]
    alicloud_mongodb_instance.singleNode: Still creating... [14m21s elapsed]
    alicloud_mongodb_instance.singleNode: Creation complete after 14m29s [id=dds-f8z3a787aea1c***]
    
    Apply complete!  Resources: 3 added, 0 changed, 0 destroyed.
    ```
    
5.  Verify the result.
    
    ### **Run the terraform show command**
    
    Run the following command to query the resources that are created by Terraform:
    
    ```
    terraform show
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0122671471/p877325.png)
    
    ## Log on to the ApsaraDB for MongoDB console
    
    After the creation, you can call API operations, use SDKs, or log on to the ApsaraDB for MongoDB console to check whether the creation operation is completed.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0122671471/p877326.png)
    

### **Release resources**

If you no longer require the preceding resources that are created or managed by Terraform, run the following command to release the resources. For more information about the `terraform destroy` command, see [Common commands](/help/en/terraform/terraform-common-commands).

```
terraform destroy
```

## Sample code

**Note**

You can [run the sample code](https://api.aliyun.com/terraform?resource=alicloud_mongodb_instance&exampleId=201-use-case-create-mongodb-instance&activeTab=example) in this topic with a few clicks.

### **Sample code**

```
variable "region" {
  default = "cn-heyuan"
}
provider "alicloud" {
  region = var.region
}
# Declare a variable named name.
variable "name" {
  default = "terraform-example-1125"
}
variable "engine_version" {
  default = "7.0"
}
variable "db_instance_class" {
  default = "mdb.shard.2x.xlarge.d"
}
# Specify the alicloud_mongodb_zones parameter to query zone information.
data "alicloud_mongodb_zones" "default" {
}
# Set the zone_id parameter to the ID of the last zone in the value of the alicloud_mongodb_zones parameter.
locals {
  index   = length(data.alicloud_mongodb_zones.default.zones) - 1
  zone_id = data.alicloud_mongodb_zones.default.zones[local.index].id
}
# Create a VPC.
resource "alicloud_vpc" "vpc1" {
  vpc_name   = var.name
  cidr_block = "172.16.0.0/12"
}

# Create a vSwitch in the VPC in the zone specified by the local.zone_id parameter.
resource "alicloud_vswitch" "default" {
  vswitch_name = var.name
  cidr_block   = "172.16.20.0/24"
  vpc_id       = alicloud_vpc.vpc1.id
  zone_id      = local.zone_id
}

# Use the VPC and vSwitch to create a standalone resource.
resource "alicloud_mongodb_instance" "singleNode" {
  # (Required) The database engine version of the instance. 
  engine_version      = var.engine_version
  # (Required) The instance type. 
  db_instance_class   = var.db_instance_class
  # (Required) The storage capacity of the instance. The storage capacity is an integer. Unit: GB. 
  db_instance_storage = 20
  # The network type of the instance.
  network_type        = "VPC"
  # (Optional) The vSwitch ID of the instance in the VPC. A new vSwitch is required. 
  vswitch_id          = alicloud_vswitch.default.id
  # vpc_id
  vpc_id              = alicloud_vpc.vpc1.id
  # (Optional) The zone where the instance resides. A new zone is required. 
  zone_id             = local.zone_id
  # The name of the instance.  
  name                = var.name
  # (Optional) The tags that you want to assign to the resource. 
  tags = {
    Created = "TF"
    For     = "example"
    }
  # (Optional) The IP addresses that are allowed to access all databases of the instance. An IP address list is displayed. 
  security_ip_list    = [
         "10.168.1.12",
         "100.69.7.112"
     ]
  # (Optional) The storage type of the instance. This configuration is available in Terraform 1.199.0 and later versions. 
  # storage_type        = "cloud_auto"   
}
# Use the VPC and vSwitch to create a sharded cluster resource.
resource "alicloud_mongodb_sharding_instance" "default" {
  # (Required) The database engine version of the instance.
  engine_version      = "7.0"
  # (Optional) The vSwitch ID of the instance in the VPC. A new vSwitch is required. 
  vswitch_id          = alicloud_vswitch.default.id
  # The network type of the instance.
  network_type        = "VPC"
  # vpc_id
  vpc_id              = alicloud_vpc.vpc1.id
  # The name of the instance.
  name                = var.name
  # The zone where the instance resides.
  zone_id = local.zone_id
  # Define the mongos node of the instance. The number of mongos nodes that you can purchase is 2 to 32. You can use the mongo_list parameter to configure a mongos node. 
  mongo_list {
    # (Required) The instance type of the mongos node.
    node_class = "mdb.shard.2x.xlarge.d"
  }
  mongo_list {
    node_class = "mdb.shard.2x.xlarge.d"
  }
  # (Required) Define the shard of the instance. The number of shards that you can purchase is 2 to 32. You can use the mongo_list parameter to configure a shard. 
  shard_list {
    # (Required) The instance type of the shard.
    node_class   = "mdb.shard.2x.xlarge.d"
    # (Required) The storage capacity of the shard. The storage capacity is an integer. 
    node_storage = "20"
  }
  shard_list {
    node_class        = "mdb.shard.2x.xlarge.d"
    node_storage      = "20"
    # The number of read-only nodes in the shard. Default value: 0. Valid values: 0 to 5. 
    readonly_replicas = "1"
  }
  config_server_list {
    # Define the instance type of the ConfigServer component. Valid values: mdb.shard.2x.xlarge.d and dds.cs.mid. 
    node_class ="mdb.shard.2x.xlarge.d"
    # Define the storage capacity of the ConfigServer component. 
    node_storage = "20"
  }
  # 
  tags = {
    Created = "TF"
    For     = "Example"
  }
}
```

To view other sample code, visit [GitHub](https://github.com/alibabacloud-automation/landing-with-terraform/tree/main/quickstarts).
