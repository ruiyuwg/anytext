Terraform is an open source, infrastructure as code (IaC) tool that developers can use to define and manage infrastructure configurations by using a declarative language. Terraform provides a simple method to create, modify, or delete Elastic Compute Service (ECS) resources. Terraform helps reduce the complexity and errors of manual operations to improve the manageability and maintainability of infrastructure. This topic describes how to install and configure Terraform and use Terraform to create an ECS instance.

## **Basic features of Terraform**

Terraform is a tool that supports the automated orchestration of IT infrastructure. Terraform allows you to use code to manage and maintain IT resources. For more information, see [What is Terraform?](/help/en/terraform/what-is-terraform#concept-vhk-wpc-rfb)

-   Terraform provides an easy-to-use CLI that allows you to deploy configuration files on Alibaba Cloud or third-party clouds and manage the versions of the configuration files. Terraform allows you to define the infrastructure resources that are required to build cloud topologies in configuration files. The resources include virtual machines (VMs), storage accounts, and network interfaces.
    
-   Terraform can be integrated with the Alibaba Cloud provider to support new infrastructure. You can use a template to configure the Alibaba Cloud provider to define, preview, and deploy cloud infrastructure on Alibaba Cloud.
    
-   You can use Terraform to create, modify, and delete the resources of multiple Alibaba Cloud services.
    

For information about how to integrate Alibaba Cloud services with Terraform, see [Alibaba Cloud Provider](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs).

## **Install Terraform**

## Use Cloud Shell

Cloud Shell on Alibaba Cloud is a free O&M service that comes with Terraform. You can directly run Terraform commands in Cloud Shell.

Make sure that you have a valid Alibaba Cloud account with relevant permissions.

Open a browser and enter [https://shell.alibabacloud.com/](https://shell.alibabacloud.com/) in the address bar to access Cloud Shell.

After you log on to Cloud Shell, run the following command:

```
terraform
```

The command output shown in the following figure indicates that Terraform is available in Cloud Shell and can be directly used.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7125611471/p924200.png)

For information about how to use Cloud Shell, see [Use Cloud Shell](/help/en/cloud-shell/using-the-cloud-command-line#task-1958468).

## Manual installation

## Use a precompiled package

Log on to the [Terraform official website](https://www.terraform.io/downloads.html), find a ZIP package based on your operating system, and then download the package.

Decompress the downloaded package to the /usr/local/bin directory. You can delete the downloaded package after it is decompressed. This does not affect the operation of Terraform.

Make sure that the Terraform directory is defined in the PATH environment variable. The value of the PATH environment variable varies based on the operating system.

## Windows

1.  Choose Control Panel > System > System settings > Environment Variables.
    
2.  Scroll down in system variables until you find PATH.
    
3.  Click Edit and modify the value of the PATH environment variable.
    
4.  Separate directories with semicolons (;). Example: c:\\path;c:\\path2.
    
5.  Start your command-line tool for the settings to take effect.
    

For more information, see [Where can I set path to make.exe on Windows?](https://stackoverflow.com/questions/1618280/where-can-i-set-path-to-make-exe-on-windows)

## macOS or Linux

Display the value of the PATH environment variable.

```
echo $PATH
```

Move the binary file of Terraform to one of the directories in the value of the PATH environment variable. You can specify the source and destination directories in the mv command. For example, the binary file of Terraform is in the Downloads folder and the value of the `PATH` environment variable contains the `/usr/local/bin` directory, you can run the following command:

```
mv ~/Downloads/terraform /usr/local/bin/
```

For more information, see the following topics:

-   [How to permanently set $PATH on Linux](https://stackoverflow.com/questions/14637979/how-to-permanently-set-path-on-linux-unix).
    
-   [How to permanently set $PATH on macOS](https://stackoverflow.com/questions/14637979/how-to-permanently-set-path-on-linux-unix).
    

## Use the source code

If you want to compile a binary file from the source code, run the following command to clone the [HashiCorp Terraform repository](https://github.com/hashicorp/terraform):

```
git clone https://github.com/hashicorp/terraform.git
```

The command output in the following figure indicates the cloning progress. Wait until the cloning is complete.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7125611471/p924389.png)

After the repository is cloned, a directory named terraform is added to the directory in which you want to run the install command. Run the cd command to go to the /terraform directory.

```
cd terraform
```

Run the install command to compile the directory and move the compiled package to the $GOPATH/bin/terraform directory.

```
go install
```

The command output shown in the following figure indicates that the compilation is in progress. Wait until the compilation is complete and proceed to the next step.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7125611471/p924390.png)

Take note that if the "zsh: command not found: go" error message appears, you must first [install the Go environment](https://go.dev/doc/install).

Make sure that the Terraform directory is defined in the PATH environment variable and is available. The value of the PATH environment variable varies based on your operating system.

## macOS or Linux

Display the value of the PATH environment variable.

```
echo $PATH
```

Move the binary file of Terraform to one of the directories in the value of the PATH environment variable. You can specify the source and destination directories in the mv command. For example, the binary file of Terraform is in the Downloads folder and the value of the `PATH` environment variable contains the `/usr/local/bin` directory, you can run the following command:

```
mv ~/Downloads/terraform /usr/local/bin/
```

For more information, see the following topics:

-   [How to permanently set $PATH on Linux](https://stackoverflow.com/questions/14637979/how-to-permanently-set-path-on-linux-unix).
    
-   [How to permanently set $PATH on macOS](https://stackoverflow.com/questions/14637979/how-to-permanently-set-path-on-linux-unix).
    

## Windows

1.  Choose Control Panel > System > System settings > Environment Variables.
    
2.  Scroll down in system variables until you find PATH.
    
3.  Click Edit and modify the value of the PATH environment variable.
    
4.  Separate directories with semicolons (;). Example: c:\\path;c:\\path2.
    
5.  Start your command-line tool for the settings to take effect.
    

For more information, see [Where can I set path to make.exe on Windows?](https://stackoverflow.com/questions/1618280/where-can-i-set-path-to-make-exe-on-windows)

## macOS Homebrew

[Homebrew](https://brew.sh/) is a tool that is frequently used to install a package in macOS. You can use Homebrew to install Terraform by using a few commands.

Step 1: Install the HashiCorp tap, which is a repository of all Homebrew packages for HashiCorp.

```
brew tap hashicorp/tap
```

Step 2: Run the following command to install Terraform:

```
brew install hashicorp/tap/terraform
```

**Important**

This command installs the latest version of Terraform. If a later version is available after Terraform is installed, you can run the upgrade command to update Terraform.

Before you update Terraform, you must first run the following command to update Homebrew:

```
brew update
```

Run the following command to update Terraform to the latest version:

```
brew upgrade hashicorp/tap/terraform
```

## Linux

## Alibaba Cloud Liunx

```
yum install -y dnf-plugin-releasever-adapter
yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo
yum install terraform
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7125611471/p924392.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7125611471/p924393.png)

## Windows Chocolatey

[Chocolatey](https://chocolatey.org/) is a tool that is frequently used to install a package in Windows. You can use [Chocolatey](https://chocolatey.org/) to install Terraform by using a few commands.

```
choco install terraform
```

## **Authenticate Terraform**

You can store access credentials in specific environment variables and use the environment variables to authenticate Terraform. When you run a Terraform command, if no access credential is explicitly declared in the configuration template, Terraform can obtain access credentials from environment variables. Configure the environment variables based on the operating system.

## Windows

1.  On the Windows desktop, right-click This PC and select **Properties**. On the page that appears, click **Advanced system settings**. In the **System Properties** dialog box, click **Environment Variables** on the Advanced tab. The **Environment Variables** dialog box appears and consists of the **User variables** and **System variables** sections.
    
2.  In the **System variables** or **User variables** section, click **New**. In the dialog box that appears, create the environment variables that are described in the following table.
    
    Variable
    
    Description
    
    Value
    
    ALICLOUD\_ACCESS\_KEY
    
    The AccessKey ID.
    
    yourAccessKeyID
    
    ALICLOUD\_SECRET\_KEY
    
    The AccessKey secret.
    
    yourAccessKeySecret
    
    ALICLOUD\_SECURITY\_TOKEN
    
    Optional. If you use a Security Token Service (STS) token, you must specify this variable.
    
    yourSTSToken
    

## Linux

**Important**

The temporary environment variables configured by using the export command are valid only for the current session. After you exit the session, the configured environment variables become invalid. To configure permanent environment variables, you can add the export command to the startup configuration file of your operating system.

```
# Access Key Id
$ export ALICLOUD_ACCESS_KEY="yourAccessKeyID"
# Access Key Secret
$ export ALICLOUD_SECRET_KEY="yourAccessKeySecret"
# If you use an STS token, set the ALICLOUD_SECURITY_TOKEN environment variable to the STS token.
$ export ALICLOUD_SECURITY_TOKEN="yourSTStoken"
```

After you configure environment variables, you do not need to explicitly declare access credentials or you can declare only the region ID in the provider code block of the configuration template.

```
provider "alicloud" {
  region = "cn-hangzhou"
}
```

You can also specify the region ID by using the `ALICLOUD_REGION` environment variable. If no region ID is declared and the ALICLOUD\_REGION environment variable is not configured, **cn-beijing** is used as the value of the region parameter.

## Supported resources

**Note**

Each resource is a new resource, such as an ECS instance, a virtual machine (VM), or a security group, that is used to define an infrastructure component.

**Resources**

[alicloud\_auto\_provisioning\_group](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/auto_provisioning_group): provides an ECS auto provisioning group, which provisions preemptible and pay-as-you-go instances to quickly deploy a cluster.

[alicloud\_ecs\_disk\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_disk_attachment): attaches or detaches a data disk or system disk to or from an ECS instance.

[alicloud\_ecs\_activation](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_activation): provides an activation code and allows you to configure the following arguments: the description of the activation code, the maximum number of times that the activation code can be used to register managed instances, the default instance name prefix, the IP addresses of hosts that can use the activation code, and the validity period of the activation code. You can use activation codes to register servers that are not provided by Alibaba Cloud as Alibaba Cloud managed instances.

[alicloud\_ecs\_auto\_snapshot\_policy](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_auto_snapshot_policy): provides an automatic snapshot policy and allows you to configure the following arguments: the days of the week on which to create automatic snapshots, the points in time of the day at which to create automatic snapshots, the retention period of automatic snapshots, cross-region replication-related arguments, and encryption settings for cross-region snapshot replication.

[alicloud\_ecs\_auto\_snapshot\_policy\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_auto_snapshot_policy_attachment): associates an automatic snapshot policy with a disk and allows you to configure the auto\_snapshot\_policy\_id argument, which specifies the ID of an automatic snapshot policy, and the disk\_id argument, which specifies the ID of a disk.

[alicloud\_ecs\_capacity\_reservation](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_capacity_reservation): provides a capacity reservation. You can create a capacity reservation to reserve the capacity of a specific instance type and use the reserved capacity to create a specific number of instances as needed.

[alicloud\_ecs\_command](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_command): provides a Cloud Assistant command and allows you to configure the following arguments: the Base64-encoded content of the command, the description of the command, whether to include custom parameters in the command, the name of the command, the timeout period of command executions, and the type of the command. You can run the command on ECS instances.

[alicloud\_ecs\_dedicated\_host](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_dedicated_host): provides a dedicated host and allows you to configure arguments, including the type, billing method, auto-renewal period, name, and description of the dedicated host.

[alicloud\_ecs\_dedicated\_host\_cluster](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_dedicated_host_cluster): provides a dedicated host cluster and allows you to configure arguments, including the name, description, zone, and tags of the dedicated host cluster. You can use dedicated host clusters to centrally organize and manage dedicated hosts.

[alicloud\_ecs\_deployment\_set](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_deployment_set): provides a deployment set and allows you to configure arguments, including the deployment strategy, name, and description of the deployment set. You can use deployment sets to organize and manage the distribution of ECS instances to achieve high availability or reduce latency.

[alicloud\_ecs\_disk](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_disk): provides a disk (data disk) and allows you to configure the following arguments: the disk category, the disk size, whether to encrypt the disk, the ID of the snapshot that you want to use to create the disk, the performance level of the Enterprise SSD (ESSD), and the tags that you want to add to the disk. You can use disks to store data based on your business requirements in different scenarios.

[alicloud\_ecs\_disk\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_disk_attachment): attaches or detaches a disk to or from an ECS instance and allows you to configure the following arguments: the ID of the ECS instance to which you want to attach a disk, the ID of the disk that you want to attach, whether to release the disk when the ECS instance is released, and whether to attach the disk as a system disk.

[alicloud\_ecs\_elasticity\_assurance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_elasticity_assurance): provides an elasticity assurance. You can create an elasticity assurance to reserve compute capacity for a specific number of instances of a specific instance type in a specific region.

[alicloud\_ecs\_hpc\_cluster](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_hpc_cluster): provides a High Performance Computing (HPC) cluster and allows you to configure the name and description of the cluster.

[alicloud\_ecs\_image\_component](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_image_component): provides an image component and allows you to configure the following arguments: the type of the image component, the content of the image component, the type of the operating system supported by the image component, and other metadata of the image component. You can use the image component to create custom images.

[alicloud\_ecs\_image\_pipeline](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_image_pipeline): provides an image template and allows you to configure arguments, including the source image, the content of the image template, and the instance type. You can use image templates to automate the creation and management of custom images.

[alicloud\_ecs\_image\_pipeline\_execution](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_image_pipeline_execution): provides an image building task, which is run to create a custom image based on an image template. You can specify the ID of an image template to trigger an image building task and query the status and results of the image building task.

[alicloud\_ecs\_invocation](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_invocation): provides a Cloud Assistant command task. You can specify one or more ECS instances and a Cloud Assistant command to run the command on the instances and query the execution results of the corresponding command task.

[alicloud\_ecs\_key\_pair](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_key_pair): provides a key pair.

[alicloud\_ecs\_key\_pair\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_key_pair_attachment): binds a key pair to an ECS instance.

[alicloud\_ecs\_launch\_template](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_launch_template): provides a launch template, which includes predefined instance creation configurations. You can quickly create and deploy identical ECS instances from a launch template.

[alicloud\_ecs\_network\_interface](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_network_interface): provides an elastic network interface (ENI). You can use ENIs to configure and manage network connectivity for and flexibly assign private IP addresses to ECS instances. ENIs are ideal for complex network environments and high-availability architectures.

[alicloud\_ecs\_network\_interface\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_network_interface_attachment): binds an ENI to an ECS instance to extend the network capabilities of the instance, such as assigning additional IP addresses or performing complex network configurations.

[alicloud\_ecs\_network\_interface\_permission](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_network_interface_permission): provides permissions on an ENI.

[alicloud\_ecs\_prefix\_list](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_prefix_list): provides a prefix list.

[alicloud\_ecs\_session\_manager\_status](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_session_manager_status): provides the status of Session Manager and allows you to enable or disable Session Manager.

[alicloud\_ecs\_snapshot](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_snapshot): provides a snapshot and allows you to create snapshots for disks to back up disk data.

[alicloud\_ecs\_snapshot\_group](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_snapshot_group): provides a snapshot-consistent group and allows you to simultaneously create snapshots for multiple disks.

[alicloud\_ecs\_storage\_capacity\_unit](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_storage_capacity_unit): provides a storage capacity unit (SCU).

[alicloud\_image](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/image): provides an image, which is created from an existing ECS instance.

[alicloud\_image\_copy](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/image_copy): copies a custom image from one region to another region.

[alicloud\_image\_export](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/image_export): exports a custom image to an Object Storage Service (OSS) bucket in the same region.

[alicloud\_image\_import](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/image_import): imports an image to ECS.

[alicloud\_image\_share\_permission](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/image_share_permission): manages the share permissions on an image.

[alicloud\_instance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/instance): provides an ECS instance.

[alicloud\_ecs\_key\_pair](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_key_pair): provide a key pair.

[alicloud\_ecs\_key\_pair\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/key_pair_attachment): binds a key pair to multiple ECS instances.

[alicloud\_ecs\_launch\_template](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_launch_template): provides a launch template.

[alicloud\_ecs\_network\_interface](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_network_interface): provides an ENI.

[alicloud\_ecs\_network\_interface\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_network_interface_attachment): binds or unbind an ENI to or from an ECS instance.

[alicloud\_ram\_role\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ram_role_attachment): attaches an instance Resource Access Management (RAM) role to multiple ECS instances.

[alicloud\_reserved\_instance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/reserved_instance): provides a reserved instance.

[alicloud\_security\_group](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/security_group): provides a security group.

[alicloud\_security\_group\_rule](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/security_group_rule): provides a security group rule.

[alicloud\_ecs\_snapshot](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_snapshot): provides an ECS snapshot.

[alicloud\_ecs\_auto\_snapshot\_policy](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ecs_auto_snapshot_policy): provides an ECS automatic snapshot policy.

## Use Terraform to create and manage ECS resources

This section describes how to create an ECS instance by using Terraform.

1.  Create a working directory and a configuration file named main.tf in the directory. The following code is used to create an ECS instance and the virtual private cloud (VPC), security group, and vSwitch that are required to create the ECS instance. Copy the following code to the main.tf configuration file:
    
    ```
    # Define a variable named region to represent an Alibaba Cloud region. The default value of this variable is cn-beijing.
    variable "region"{
      default = "cn-beijing"
    }
    
    # Configure the Alibaba Cloud provider and specify the region defined in the region variable.
    provider "alicloud"{
      region = var.region
    }
    
    # Define a string variable named instance_type to represent an ECS instance type. The default value of this variable is ecs.e-c1m1.large.
    variable "instance_type" {
      type    = string
      default = "ecs.e-c1m1.large"
    }
    
    # Use a data source and configure the specified instance type, resource type (such as vSwitch), and disk category as filters to query zones in which you can create ECS instances.
    data "alicloud_zones" "default" {
      available_instance_type     = var.instance_type
      available_resource_creation = "VSwitch"
      available_disk_category     = "cloud_essd"
    }
    
    # Define a variable named vpc_cidr_block to represent the CIDR block that you want to associate with a VPC. The default value of this variable is 172.16.0.0/16.
    variable "vpc_cidr_block" {
      default = "172.16.0.0/16"
    }
    
    # Define a variable named vsw_cidr_block to represent the CIDR block that you want to associate with a vSwitch. The default value of this variable is 172.16.0.0/24.
    variable "vsw_cidr_block" {
      default = "172.16.0.0/24"
    }
    
    # Generate a random integer from 10000 to 99999 to ensure the uniqueness of certain resource names.
    resource "random_integer" "default" {
      min = 10000
      max = 99999
    }
    
    # Create a VPC named vpc-test and use a random integer to ensure the uniqueness of the name.
    resource "alicloud_vpc" "vpc" {
      vpc_name   = "vpc-test_${random_integer.default.result}"
      cidr_block = var.vpc_cidr_block
    }
    
    # Create a security group in the created VPC and use a random integer to ensure the uniqueness of the security group name.
    resource "alicloud_security_group" "group" {
      security_group_name = "test_${random_integer.default.result}"  # Replace test_$ with an actual value.
      vpc_id              = alicloud_vpc.vpc.id
    }
    
    # Create an inbound security group rule that allows all TCP traffic in the created security group.
    resource "alicloud_security_group_rule" "allow_all_tcp" {
      type              = "ingress"
      ip_protocol       = "tcp"
      nic_type          = "intranet"  # Set the nic_type parameter to 'intranet'.
      policy            = "accept"
      port_range        = "1/65535"
      priority          = 1
      security_group_id = alicloud_security_group.group.id
      cidr_ip           = "0.0.0.0/0"
    }
    
    # Create a vSwitch in the specified zone and the created VPC and use a random integer to ensure the uniqueness of the vSwitch name.
    resource "alicloud_vswitch" "vswitch" {
      vpc_id       = alicloud_vpc.vpc.id
      cidr_block   = var.vsw_cidr_block
      zone_id      = data.alicloud_zones.default.zones[0].id
      vswitch_name = "vswitch-test-${random_integer.default.result}"
    }
    
    # Specify multiple parameters, including the zone, security group, and instance type, to create an ECS instance and use a random integer to ensure the uniqueness of the instance name.
    resource "alicloud_instance" "instance" {
      availability_zone          = data.alicloud_zones.default.zones[0].id
      security_groups            = [alicloud_security_group.group.id]
      instance_type              = var.instance_type
      system_disk_category       = "cloud_essd"
      system_disk_name           = "test_foo_system_disk_${random_integer.default.result}"
      system_disk_description    = "test_foo_system_disk_description"
      image_id                   = "aliyun_2_1903_x64_20G_alibase_20240628.vhd"
      instance_name              = "test_ecs_${random_integer.default.result}"
      vswitch_id                 = alicloud_vswitch.vswitch.id
      internet_max_bandwidth_out = 10
      password                   = "Terraform@Example" # Configure a password for the ECS instance. Replace Terraform@Example with an actual value.
    }
    ```
    
2.  Run the following command to initialize the Terraform runtime environment:
    
    ```
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
    
3.  Run the following command to run the code:
    
    ```
    terraform apply
    ```
    
    During the code execution, enter `yes` as prompted and press the **Enter** key. Wait until the execution is complete. The following command output indicates that the code is run:
    
    ```
    You can apply this plan to save these new output values to the Terraform state, without changing any real infrastructure.
    
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.
    
      Enter a value: yes
    
    
    Apply complete!  Resources: 6 added, 0 changed, 0 destroyed.
    ```
    
4.  Verify the results
    

## Run the terraform show command

Run the following command in the working directory to query the details of the resources that are created by using Terraform:

```
terraform show
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7125611471/p922902.png)

## Log on to the ECS console

Log on to the [ECS console](https://ecs.console.alibabacloud.com/server/region/cn-shanghai?instanceName=test_ecs_64914&page=1#/). In the left-side navigation pane, choose **Instances & Images** > **Instances**. In the top navigation bar, select the region in which the ECS instance is created. In this example, select **China (Beijing)** to view the created ECS instance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7125611471/p922907.png)

## **References**

-   For information about Terraform use cases, see [Best Practices](/help/en/terraform/terraform-tutorials).
    
-   For information about common Terraform commands, see [Common commands](/help/en/terraform/terraform-common-commands).
    
-   Terraform is available as a managed service in ROS. You can deploy Terraform templates in the [ROS console](https://ros.console.alibabacloud.com/cn-hangzhou/welcome). For more information, see [Create a Terraform stack](/help/en/ros/user-guide/create-a-terraform-stack).
