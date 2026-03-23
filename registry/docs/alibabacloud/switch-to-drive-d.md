This topic describes how to use Terraform to quickly create Alibaba Cloud resources in Windows.

You can use Terraform to manage infrastructure as code (IaC). The procedure includes the following steps.

1.  [Install Terraform](#50f2caf8cftv8): Ensure that your system can detect and execute Terraform commands.
    
2.  [Write a Terraform configuration file](#d9527c510d13y): The configuration file is the core of Terraform. It is used to describe the creation, configuration, and dependencies of resources, such as VPCs, ECS instances, and OSS buckets.
    
3.  [Initialize and create resources](#37752c61894fv): This is a key step in turning your infrastructure design into reality.
    
4.  [View and manage resources](#e589a79b90obx): After deployment, you can view and manage the infrastructure environment to ensure that it meets your latest requirements and design.
    
5.  [Destroy resources](#49382d67e2qqx): When resources are no longer needed, you can destroy them.
    

## **1\. Install Terraform**

1.  Go to the [official Terraform website](https://developer.hashicorp.com/terraform/install), download the Terraform binary file for your Windows operating system, and unzip the file.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1227834571/p831108.png)
    
2.  Add the Terraform installation path to the Path system environment variable.
    
    1.  On the desktop, right-click This PC and select Properties > Advanced system settings > Environment Variables > System variables/User variables.
        
    2.  In the System variables/User variables section, click Path, select Edit > New, enter the path of the folder where the file is located, and then click OK.
        
3.  Verify the installation. Press Win+R, enter `cmd`, and then click OK to open the command prompt. Run the `terraform --version` command. If the output is similar to the following, the installation is successful.
    
    ```
    Terraform v1.9.3
    on windows_amd64
    ```
    

## **2\. Write a Terraform configuration file**

The configuration file is the core of Terraform. It is used to define the infrastructure resources to be deployed in the cloud or on-premises, such as VPCs, ECS instances, and OSS buckets.

1.  Create a new folder named ecs. In this folder, create a Terraform configuration file named main.tf.
    
    Creating an independent working directory for each Terraform project ensures clear resource organization, prevents state file obfuscation, facilitates versioning and team collaboration, and helps implement environment isolation and modular management. This practice improves the maintainability and security of your configuration management.
    
2.  Write the Terraform configuration file. The following example shows how to create an ECS instance. In the configuration file, you define the ECS instance and its dependent resources, such as a VPC and a security group, in a codified way. For convenience, you can copy the following code to the main.tf file.
    
    **Important**
    
    -   The ECS instance in this example uses the pay-as-you-go billing method. You are charged for the resource after it is created.
        
    -   This example uses an environment variable for Terraform authentication. For more information, see [Terraform identity authentication](/help/en/terraform/terraform-authentication).
        
    
    The resources required to create an ECS instance are as follows:
    
    Resource
    
    Description
    
    [alicloud\_vpc](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc)
    
    Creates a VPC-connected instance
    
    [alicloud\_vswitch](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vswitch)
    
    Creates a vSwitch instance
    
    [alicloud\_security\_group](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/security_group)
    
    Creates a security group instance
    
    [alicloud\_security\_group\_rule](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/security_group_rule)
    
    Creates inbound and outbound access rules for a security group
    
    [alicloud\_instance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/instance)
    
    Creates an ECS instance
    
    ```
    variable "name" {
      type    = string
      default = "tf-test"
    }
    
    # Set the region
    variable "region" {
      type    = string
      default = "cn-beijing"
    }
    
    # The public bandwidth. If the value is greater than 0, a public IP address is assigned to the instance.
    variable "internet_max_bandwidth_out" {
      type    = number
      default = 10
    }
    
    # Set the ECS instance type
    variable "instance_type" {
      type    = string
      default = "ecs.e-c1m1.large"
    }
    
    # Set the image ID
    variable "image_id" {
      default = "ubuntu_18_04_64_20G_alibase_20190624.vhd"
    }
    
    # Set tags
    variable "tags" {
      type    = map(string)
      default = {
        From =  "Terraform"
        Usage =  "demo"
      }
    }
    
    provider "alicloud" {
      region = var.region
    }
    
    # Obtain the zone ID
    data "alicloud_zones" "default" {
      available_instance_type = var.instance_type
      available_resource_creation = "VSwitch"
      available_disk_category = "cloud_ssd"
    }
    
    # Create a VPC
    resource "alicloud_vpc" "vpc" {
      vpc_name   = var.name
      cidr_block = "172.16.0.0/12"
    }
    
    # Create a vSwitch
    resource "alicloud_vswitch" "vsw" {
      vpc_id     = alicloud_vpc.vpc.id
      cidr_block = "172.16.0.0/21"
      zone_id    = data.alicloud_zones.default.zones[0].id
    }
    
    # Create a security group
    resource "alicloud_security_group" "default" {
      name   = var.name
      vpc_id = alicloud_vpc.vpc.id
    }
    
    # Add an inbound rule to the security group
    resource "alicloud_security_group_rule" "allow_tcp_22" {
      type              = "ingress"
      ip_protocol       = "tcp"
      nic_type          = "intranet"
      policy            = "accept"
      port_range        = "22/22"
      priority          = 1
      security_group_id = alicloud_security_group.default.id
      cidr_ip           = "0.0.0.0/0"
    }
    
    # Create an ECS instance
    resource "alicloud_instance" "instance" {
      availability_zone          = data.alicloud_zones.default.zones.0.id
      security_groups            = alicloud_security_group.default.*.id
      instance_type              = var.instance_type
      system_disk_category       = "cloud_essd_entry"
      image_id                   = var.image_id
      instance_name              = var.name
      vswitch_id                 = alicloud_vswitch.vsw.id
      internet_max_bandwidth_out = var.internet_max_bandwidth_out
      tags                       = var.tags
    }
    
    output "ecs_id" {
      value = alicloud_instance.instance.id
    }
    
    output "ecs_ip" {
      value = alicloud_instance.instance.public_ip
    }
    ```
    

## 3\. Initialization and resource creation

After you write the Terraform configuration file, you must initialize the working directory before you create resources.

### **3.1 Terraform initialization**

In the cmd window, switch to the folder that you created in Step 2, and then run the `terraform init` command to perform initialization. The `terraform init` command is the first command to run in a new Terraform project. It initializes the working directory by downloading the required Alibaba Cloud provider plug-in and various other record files.

```
# Switch to drive D
d:
# The command to switch to the folder path in Step 2. tool/terraform/projects/ecs is the folder path created in Step 2. You can replace it with the actual path.
cd tool/terraform/projects/ecs
# Run the initialization command
terraform init
```

### **3.2 Create resources**

1.  Run the `terraform plan` command to create an execution plan. This plan shows the details of all resources that will be created, modified, or destroyed when you run the \`terraform apply\` command.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1227834571/p831153.png)
    
2.  When you run the `terraform apply` command, resources are created based on the execution plan generated by the `terraform plan` command. During the creation process, you must enter yes when prompted to continue creating the resources. For more information about passing variable values, see [Variable](/help/en/terraform/variable-introduction).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1227834571/p846333.png)
    

## 4\. View and manage resources

After deployment, you can manage and maintain your infrastructure environment to ensure that it meets your latest requirements and design.

### **4.1 View resources**

-   Run the `terraform show` command to view the details of your resources.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1227834571/p846334.png)
    
-   Run the `terraform state list` command to list all created resources.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1227834571/p846335.png)
    
-   Run the `terraform state show <resource_type>.<resource_name>` command to view the details of a specific resource.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1227834571/p846342.png)
    
-   View information about the created resources in the [Alibaba Cloud Management Console](https://home.console.alibabacloud.com/home/dashboard/ProductAndService).
    

### **4.2 Manage resources**

After Terraform creates and modifies resources, it saves the status and property information of the resources to the terraform.tfstate file. You can use `terraform state` commands to manage the state. For more information, see [Introduction to the state principle](/help/en/terraform/introduction-to-terraform-state).

### **4.3 Resource changes**

1.  Modify the definition of the resource that you want to change in the configuration file, such as main.tf or another .tf file. For example, you may want to add a new inbound rule to a security group.
    
    ```
    resource "alicloud_security_group_rule" "allow_tcp_443" {
      type              = "ingress"
      ip_protocol       = "tcp"
      nic_type          = "intranet"
      policy            = "accept"
      port_range        = "443/443"
      priority          = 1
      security_group_id = alicloud_security_group.default.id
      cidr_ip           = "0.0.0.0/0"
    }
    ```
    
2.  Run the `terraform plan` command to preview the changes.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1227834571/p846348.png)
    
3.  If the changes meet your expectations, run the `terraform apply` command to apply the changes to your infrastructure. Terraform prompts you for confirmation. Enter `yes` and press Enter to apply the changes.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1227834571/p846352.png)
    

## **5\. Destroy resources**

When the resources are no longer needed, you can run the `terraform destroy` command to destroy all resources that you created.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1227834571/p846356.png)

## **References**

-   [Common commands](/help/en/terraform/terraform-common-commands)
    
-   [Resource](/help/en/terraform/resource-introduction)
    
-   [Variable](/help/en/terraform/variable-introduction)
    
-   [Output](/help/en/terraform/introduction-to-output)
    
-   [Resource dependencies](/help/en/terraform/resource-dependence)
