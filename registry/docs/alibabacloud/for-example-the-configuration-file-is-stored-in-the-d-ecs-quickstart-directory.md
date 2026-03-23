Terraform is an Infrastructure as Code (IaC) tool that is designed to help developers and O&M teams automate the creation, deployment, and management of cloud infrastructure. Terraform allows you to write simple code to define and configure cloud infrastructure without the need for manual operations or configurations. This topic describes how to use Terraform to create an Elastic Compute Service (ECS) instance.

**Note**

For more information about Terraform, see [Introduction to Terraform](/help/en/terraform/what-is-terraform)

## Preparations

### **Step 1: Install Terraform**

This section describes how to install Terraform in Linux or Windows by using an installation package.

**Note**

Alibaba Cloud provides the following Terraform online environments. In the online environments, you can run Terraform commands without the need to install Terraform.

1.  Terraform Explorer: Paste the sample code provided in this topic to the code editor and click [Initiate Debugging](https://api.alibabacloud.com/terraform?debugType=sample&moduleType=OfficialSample&moduleUuid=mod-al1d0rbusdlu93mp8v6k&activeTab=code&moduleVersion=v1&moduleProvider=1.239.0) to automatically run the sample code.
    
2.  Cloud Shell: Log on to Cloud Shell and paste and run the Terraform commands in the sample code provided in this topic.
    

1.  Download the Terraform installation package that is suitable for your operating system from the [Terraform official website](https://www.terraform.io/downloads.html).
    
2.  Configure the Terraform runtime environment.
    
    ## Linux
    
    Run the following command to decompress the installation package to the /usr/local/bin directory.
    
    ```
    # Replace {your_zip_path} with the path in which the installation package is stored. If the operating system does not support the unzip command, install the command. 
    sudo unzip {your_zip_path} -d /usr/local/bin
    ```
    
    ## Windows
    
    1.  Decompress the installation package to a directory, such as D:\\tool\\terraform.
        
    2.  On the Windows desktop, right-click **This PC** and select **Properties**. On the page that appears, click **Advanced system settings**. In the **System Properties** dialog box, click **Environment Variables** on the **Advanced** tab. In the **Environment Variables** dialog box, go to the **User variables** or **System variables** section.
        
    3.  In the **System variables** or **User variables** section, select Path and click **Edit**. In the dialog box that appears, click **New**. Then, enter the directory to which you decompressed the Terraform installation package, such as D:\\tool\\terraform, and click **OK**.
        
    
3.  Run the `terraform` command to check whether Terraform is installed.
    
    ```
    terraform
    ```
    
    If a list of available Terraform options is displayed, as shown in the following figure, the installation is complete.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4764464371/p737064.png)
    

### **Step 2:** Configure Terraform identity authentication

Before you use Terraform to manage Alibaba Cloud infrastructure, you must pass the Terraform Provider identity authentication. You can use Terraform to call Alibaba Cloud API operations and create and manage the infrastructure and resources of Alibaba Cloud only after you pass the Terraform Provider identity authentication.

**Note**

If you use Terraform Explorer or Cloud Shell, you do not need to configure Terraform identity authentication. Make sure that your account has permissions to manage Virtual Private Cloud (VPC) and ECS resources.

In this example, the AccessKey pair of a Resource Access Management (RAM) user that is obtained from environment variables is used for identity authentication.

1.  Create an AccessKey pair for your RAM user. An Alibaba Cloud account has all permissions on resources. If the AccessKey pair of your Alibaba Cloud account is leaked, the resources that belong to the account are exposed to potential risks. We recommend that you use the AccessKey pair of a RAM user. For information about how to create an AccessKey pair for a RAM user, see the [Create an AccessKey pair for a RAM user](/help/en/ram/user-guide/create-an-accesskey-pair#section-rjh-18m-7kp) section of the "Create an AccessKey pair" topic.
    
2.  Grant the RAM user the permissions to manage ECS and VPC resources. We recommend that you follow the principle of least privilege. For information about how to grant permissions to a RAM user, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user). The sample code provided in this topic creates resources, such as an ECS instance, a VPC, and a vSwitch. To grant the permissions required to run the sample code, we recommend that you attach the policies described in the following table to the RAM user.
    
    **Alibaba Cloud service**
    
    **Policy**
    
    VPC
    
    AliyunVPCFullAccess
    
    ECS
    
    AliyunECSFullAccess
    
3.  Create environment variables to store authentication information.
    
    ## Linux
    
    **Important**
    
    The temporary environment variables configured by using the export command are valid only for the current session. After you exit the session, the configured environment variables become invalid. To configure permanent environment variables, you can add the export command to the startup configuration file of your operating system.
    
    ```
    # AccessKey Id
    export ALICLOUD_ACCESS_KEY="yourAccessKeyID"
    # AccessKey Secret
    export ALICLOUD_SECRET_KEY="yourAccessKeySecret"
    # The region in which you want to deploy resources.
    export ALICLOUD_REGION="cn-beijing"
    ```
    
    ## Windows
    
    1.  On the Windows desktop, right-click **This PC** and select **Properties**. On the page that appears, click **Advanced system settings**. In the **System Properties** dialog box, click **Environment Variables** on the **Advanced** tab. In the **Environment Variables** dialog box, go to the **User variables** or **System variables** section.
        
    2.  In the **System variables** or **User variables** section, click **New**. In the dialog box that appears, create the environment variables that are described in the following table.
        
        Variable
        
        Description
        
        Value
        
        ALICLOUD\_ACCESS\_KEY
        
        AccessKey Id
        
        yourAccessKeyID
        
        ALICLOUD\_SECRET\_KEY
        
        AccessKey Secret
        
        yourAccessKeySecret
        
        ALICLOUD\_REGION
        
        The region in which you want to deploy resources
        
        Example: cn-beijing
        
    

## Related **Terraform resources**

This section describes the Terraform resources that are used in the sample code provided in this topic.

**Note**

You are charged for specific resources. If you no longer require the resources, release or unsubscribe from the resources at the earliest opportunity.

**Resources**

-   [alicloud\_vpc](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc): creates a VPC.
    
-   [alicloud\_vswitch](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vswitch): creates a vSwitch.
    
-   [alicloud\_security\_group](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/security_group): creates a security group.
    
-   [alicloud\_security\_group\_rule](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/security_group_rule): creates a security group rule.
    
-   [alicloud\_instance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/instance): creates an ECS instance.
    

**Data sources**

[alicloud\_zones](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/zones): dynamically queries the zones in which you can create ECS instances of a specific instance type.

## **Compile the Terraform configuration file**

Define the infrastructure resources required to create an ECS instance, such as a VPC and a vSwitch, in the main.tf configuration file. You can directly copy the sample code in the [Complete sample code](#98c6d13387jhq) section of this topic to the configuration file.

1.  Create the main.tf configuration file.
    
    Terraform infrastructure resources are defined in a configuration file. You must first create the configuration file.
    
    ## Linux
    
    ```
    # Create the working directory.
    mkdir terraform-projects && cd terraform-projects
    mkdir ecs-quickstart && cd ecs-quickstart
    # Create and open the main.tf configuration file.
    touch main.tf && vim main.tf
    ```
    
    ## Windows
    
    Create a folder, such as the ecs-quickstart folder, and create the Terraform configuration file in the folder. In this example, the configuration file name is main.tf.
    
2.  Configure the provider settings.
    
    Specify a region to deploy Alibaba Cloud resources.
    
    ```
    # The region in which you want to deploy resources.
    variable "region" {
      default = "cn-chengdu"
    }
    
    provider "alicloud" {
      region = var.region
    }
    ```
    
3.  Configure the VPC and associate a CIDR block with the VPC.
    
    A VPC is a dedicated private network in the cloud. You can configure and manage VPCs as logically isolated networks in the public cloud.
    
    ```
    variable "instance_name" {
      default = "tf-sample"
    }
    
    # The ECS instance type.
    variable "instance_type" {
      default = "ecs.e-c1m2.large"
    }
    
    # Query zones that match the specified conditions.
    data "alicloud_zones" "default" {
      available_disk_category     = "cloud_essd"
      available_resource_creation = "VSwitch"
      available_instance_type     = var.instance_type
    }
    
    # Create a VPC.
    resource "alicloud_vpc" "vpc" {
      vpc_name   = var.instance_name
      cidr_block = "172.16.0.0/12"
    }
    
    # Create a vSwitch.
    resource "alicloud_vswitch" "vsw" {
      vpc_id     = alicloud_vpc.vpc.id
      cidr_block = "172.16.0.0/21"
      zone_id    = data.alicloud_zones.default.zones.0.id
    }
    ```
    
4.  Create a security group and add a security group rule to the security group.
    
    A security group acts as a virtual firewall that controls inbound and outbound traffic for ECS instances.
    
    ```
    # Create a security group.
    resource "alicloud_security_group" "default" {
      name   = var.instance_name
      vpc_id = alicloud_vpc.vpc.id
    }
    
    # Add an inbound rule to the security group.
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
    ```
    
5.  Create an ECS instance.
    
    ECS provides high-performance, secure, and low-cost compute capacity and is suitable for various scenarios, such as website hosting, application development, and data processing. By using ECS, you can quickly deploy and run applications and flexibly adjust resources in response to business changes.
    
    ```
    # The image ID of the ECS instance.
    variable "image_id" {
      default = "ubuntu_18_04_64_20G_alibase_20190624.vhd"
    }
    
    # The public bandwidth of the ECS instance.
    variable "internet_bandwidth" {
      default = "10"
    }
    
    # The logon password of the ECS instance.
    variable "password" {
      default = "Test@12345"
    }
    
    # The number of ECS instances that you want to create. Default value: 1.
    variable "ecs_count" {
      default = 1
    }
    
    # Create the ECS instance.
    resource "alicloud_instance" "instance" {
      count                      = var.ecs_count
      availability_zone          = data.alicloud_zones.default.zones.0.id
      security_groups            = alicloud_security_group.default.*.id
      password                   = var.password
      instance_type              = var.instance_type
      system_disk_category       = "cloud_essd"
      image_id                   = var.image_id
      instance_name              = var.instance_name
      vswitch_id                 = alicloud_vswitch.vsw.id
      internet_max_bandwidth_out = var.internet_bandwidth
    }
    
    output "public_ip" {
      value = alicloud_instance.instance.*.public_ip
    }
    ```
    

### Complete sample code

**Note**

You can go to the Code tab of Terraform Explorer, paste the following sample code to the code editor, and then click [Initiate Debugging](https://api.alibabacloud.com/terraform?spm=a2c4g.11186623.0.0.790147e3CRmHfv&resource=alicloud_instance&exampleId=&activeTab=example&provider=1.238.0&product=ECS&example=201-use-case-create-ecs-instance-quickstart) to run the sample code.

```
variable "region" {
  default = "cn-chengdu"
}

provider "alicloud" {
  region = var.region
}

variable "instance_name" {
  default = "tf-sample"
}

variable "instance_type" {
  default = "ecs.e-c1m2.large"
}

data "alicloud_zones" "default" {
  available_disk_category     = "cloud_essd"
  available_resource_creation = "VSwitch"
  available_instance_type     = var.instance_type
}

resource "alicloud_vpc" "vpc" {
  vpc_name   = var.instance_name
  cidr_block = "172.16.0.0/12"
}

resource "alicloud_vswitch" "vsw" {
  vpc_id     = alicloud_vpc.vpc.id
  cidr_block = "172.16.0.0/21"
  zone_id    = data.alicloud_zones.default.zones.0.id
}

resource "alicloud_security_group" "default" {
  name   = var.instance_name
  vpc_id = alicloud_vpc.vpc.id
}

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

variable "image_id" {
  default = "ubuntu_18_04_64_20G_alibase_20190624.vhd"
}

variable "internet_bandwidth" {
  default = "10"
}

variable "password" {
  default = "Test@12345"
}

variable "ecs_count" {
  default = 1
}

resource "alicloud_instance" "instance" {
  count                      = var.ecs_count
  availability_zone          = data.alicloud_zones.default.zones.0.id
  security_groups            = alicloud_security_group.default.*.id
  password                   = var.password
  instance_type              = var.instance_type
  system_disk_category       = "cloud_essd"
  image_id                   = var.image_id
  instance_name              = var.instance_name
  vswitch_id                 = alicloud_vswitch.vsw.id
  internet_max_bandwidth_out = var.internet_bandwidth
}

output "public_ip" {
  value = [for i in range(var.ecs_count) : alicloud_instance.instance[i].public_ip]
}
```

## **Run Terraform commands to create resources**

After you compile the Terraform configuration file, run Terraform commands to automatically create the ECS instance that you defined.

### Step 1: Initialize Terraform

Run the `terraform init` command to download and install the plug-in of the Alibaba Cloud provider to the current folder. The command also generates relevant record files.

## Linux

```
terraform init
```

## Windows

Open the Command Prompt window, go to the folder in which the Terraform configuration file is stored, and then run the `terraform init` command to initialize Terraform.

```
# For example, the configuration file is stored in the D:/ecs-quickstart directory.
# Switch to disk D.
d:
# Go to the folder in which the configuration file is stored. In this example, the configuration file is stored in the ecs-quickstart folder. Replace the folder with the actual folder. 
cd ecs-quickstart
# Run the initialization command.
terraform init
```

The following command output indicates that Terraform is initialized:

```
Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
```

### Step 2: Preview the Terraform code

Run the `terraform plan` command to perform the following operations:

-   Verify the syntax of the Terraform code in the `main.tf` configuration file.
    
-   Display the preview results of the resources that you want to create by using the current Terraform code.
    

```
terraform plan
```

The following command output indicates that the Terraform code in the configuration file does not have syntax errors. In this case, you can run the `terraform apply` command to create resources. If an error occurs, modify the Terraform configuration file as prompted.

```
...

Plan: 5 to add, 0 to change, 0 to destroy.
```

### Step 3: Run the Terraform code

Run the `terraform apply` command to automatically create the ECS instance that you defined in the Terraform code and the dependent resources of the instance and automatically install Python. During the creation process, enter yes as prompted to allow Terraform to create all defined resources.

```
terraform apply
```

The following command output indicates that the ECS instance and its dependent resources are created:

```
...

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

alicloud_vpc.vpc: Creating...
alicloud_vpc.vpc: Creation complete after 6s [id=vpc-2vcsghlpznz74XXXXXXXX]
alicloud_security_group.default: Creating...
alicloud_vswitch.vsw: Creating...
alicloud_security_group.default: Creation complete after 1s [id=sg-2vcdz6b8h9c3XXXXXXXX]
alicloud_security_group_rule.allow_tcp_22: Creating...
alicloud_security_group_rule.allow_tcp_22: Creation complete after 0s [id=sg-2vcdz6b8h9c3XXXXXXXX:ingress:tcp:22/22:intranet:0.0.0.0/0:accept:1]
alicloud_vswitch.vsw: Creation complete after 4s [id=vsw-2vc50dknug30bXXXXXXXX]
alicloud_instance.instance: Creating...
alicloud_instance.instance: Still creating... [10s elapsed]
alicloud_instance.instance: Creation complete after 15s [id=i-2vc3rf151bwcXXXXXXXX]

Apply complete!  Resources: 5 added, 0 changed, 0 destroyed.

Outputs:

public_ip = [
  "4XX.XXX.XXX.XX7",
]
```

## **Connect to the ECS instance**

After the ECS instance is created, you can connect to the instance over SSH by using the public IP address of the instance. For more information, see [Choose an ECS remote connection method](/help/en/ecs/user-guide/connect-to-instance).

```
ssh <Username of the ECS instance>@<Public IP address of the ECS instance>
```

## View the creation result

## Run a Terraform command

Run the following command to view information about the created ECS instance:

```
# Command syntax: terraform state show <Resource type>.<Resource alias>
terraform state show alicloud_instance.instance
```

## Log on to the ECS console

Log on to the [ECS console](https://ecs.console.alibabacloud.com) to view information about the created ECS instance.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7106354371/p878020.png)

## **Modify the resources**

If you want to modify the configurations of the ECS instance, you can modify the resource definitions in the configuration file. For example, you can add an inbound rule to the security group to which the ECS instance belongs.

1.  If you want to add a rule to the security group to allow inbound traffic on port 443, add the following code to the configuration file:
    
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
    
2.  Run the `terraform plan` command to preview the changes. The following command output indicates that the security group rule will be added to the security group whose ID is `sg-2vcdz6b8h9c3XXXXXXXX`:
    
    ```
    ...
    
    Terraform will perform the following actions:
    
      # alicloud_security_group_rule.allow_tcp_443 will be created
      + resource "alicloud_security_group_rule" "allow_tcp_443" {
          + cidr_ip           = "0.0.0.0/0"
          + id                = (known after apply)
          + ip_protocol       = "tcp"
          + nic_type          = "intranet"
          + policy            = "accept"
          + port_range        = "443/443"
          + prefix_list_id    = (known after apply)
          + priority          = 1
          + security_group_id = "sg-2vcdz6b8h9c3XXXXXXXX"
          + type              = "ingress"
        }
    
    Plan: 1 to add, 0 to change, 0 to destroy.
    ```
    
3.  If the changes meet your expectation, run the `terraform apply` command to apply the changes to your infrastructure. When you run the command, you are prompted to confirm whether to apply the changes. Enter `yes` and press the Enter key to apply the changes. The following command output indicates that the security group rule is added to the security group whose ID is `sg-2vcdz6b8h9c3XXXXXXXX`:
    
    ```
    ...
    
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.
    
      Enter a value: yes
    
    alicloud_security_group_rule.allow_tcp_443: Creating...
    alicloud_security_group_rule.allow_tcp_443: Creation complete after 0s [id=sg-2vcdz6b8h9c3XXXXXXXX:ingress:tcp:443/443:intranet:0.0.0.0/0:accept:1]
    
    Apply complete!  Resources: 1 added, 0 changed, 0 destroyed.
    ```
    

## **Release the resources**

If you no longer require the preceding resources that were created or managed by using Terraform, run the following command to release the resources:

```
terraform destroy
```

The following command output indicates that the resources are released:

```
...

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

alicloud_security_group_rule.allow_tcp_443: Destroying... [id=sg-2vcdz6b8h9c3XXXXXXXX:ingress:tcp:443/443:intranet:0.0.0.0/0:accept:1]
alicloud_security_group_rule.allow_tcp_22: Destroying... [id=sg-2vcdz6b8h9c3XXXXXXXX:ingress:tcp:22/22:intranet:0.0.0.0/0:accept:1]
alicloud_instance.instance: Destroying... [id=i-2vc3rf151bwcXXXXXXXX]
alicloud_security_group_rule.allow_tcp_22: Destruction complete after 0s
alicloud_security_group_rule.allow_tcp_443: Destruction complete after 0s
alicloud_instance.instance: Still destroying... [id=i-2vc3rf151bwcXXXXXXXX, 10s elapsed]
alicloud_instance.instance: Destruction complete after 10s
alicloud_security_group.default: Destroying... [id=sg-2vcdz6b8h9c3XXXXXXXX]
alicloud_vswitch.vsw: Destroying... [id=vsw-2vc50dknug30bXXXXXXXX]
alicloud_security_group.default: Destruction complete after 1s
alicloud_vswitch.vsw: Destruction complete after 8s
alicloud_vpc.vpc: Destroying... [id=vpc-2vcsghlpznz74XXXXXXXX]
alicloud_vpc.vpc: Destruction complete after 6s

Destroy complete!  Resources: 6 destroyed.
```

## **References**

-   For information about the `resources` and `data sources` supported by ECS, see the [Supported resources](/help/en/ecs/developer-reference/terraform/#3f5973e30325t) section of the "Terraform Reference" topic.
    
-   You can debug Terraform code in Terraform Explorer without the need to install or configure Terraform. For more information, see [Explorer](/help/en/terraform/using-terraform-in-terraform-explorer).
    
-   You can run Terraform commands in Cloud Shell without the need to install or configure Terraform. For more information, see [Cloud Shell](/help/en/terraform/use-terraform-to-quickly-create-resources).
