This topic describes how to use Terraform to quickly create Alibaba Cloud resources in Linux.

You can use Terraform to manage infrastructure as code (IaC). The procedure includes the following steps.

1.  [Install Terraform](#0d76b65f63yzc). Ensure that your system can detect and execute Terraform commands.
    
2.  [Configure Terraform](#89bb2b6cdazhr). Use a unified method to manage Terraform identity authentication information.
    
3.  [Write a Terraform configuration file](#d9527c510d13y). The configuration file is the core of Terraform. It describes the creation, configuration, and dependencies of resources, such as VPCs, ECS instances, and OSS buckets.
    
4.  [Initialize and create resources](#37752c61894fv). This is a key step to turn your infrastructure design into a reality.
    
5.  [View and manage resources](#e589a79b90obx). After the deployment, you can manage and maintain your infrastructure environment to ensure that it meets the latest requirements and design specifications.
    
6.  [Destroy resources](#49382d67e2qqx). When the created resources are no longer needed, you can destroy the resources that are created in the corresponding folder.
    

## **1\. Install Terraform**

Terraform is an infrastructure as code (IaC) tool that lets you create, manage, and version cloud resources by running Terraform commands. You can run Terraform commands to automate infrastructure deployment only after you install Terraform. For more information about the installation steps, see [Install Terraform](/help/en/terraform/terraform-installation).

## **2\. Configure Terraform**

Terraform identity authentication is the process of verifying the identity of the Alibaba Cloud Terraform Provider before you use Terraform to perform operations on Alibaba Cloud infrastructure. You can communicate with the Alibaba Cloud API and manage Alibaba Cloud infrastructure resources only after the identity authentication is successful. The Alibaba Cloud Terraform Provider supports multiple identity authentication methods. For more information, see [Terraform identity authentication](/help/en/terraform/terraform-authentication).

This topic uses the method of configuring identity authentication using the AccessKey pair of a RAM user in an environment variable as an example:

```
export ALICLOUD_ACCESS_KEY="<yourAccessKeyID>"
export ALICLOUD_SECRET_KEY="<yourAccessKeySecret>"
export ALICLOUD_REGION="cn-beijing"
```

## 3\. Write a Terraform configuration file

The configuration file is the core of Terraform. It defines the infrastructure resources to be deployed in the cloud or on-premises, such as RAM, ECS, and OSS.

1.  Create a new folder named ram and then create a Terraform configuration file named main.tf in the folder.
    
    ```
    # Create a working directory and go to the directory.
    mkdir ram && cd ram
    # Create and edit the configuration file.
    touch main.tf && vim main.tf
    ```
    
    Creating an independent working directory for each Terraform project ensures clear resource organization, prevents state file obfuscation, facilitates versioning and team collaboration, and helps implement environment isolation and modular management. This practice improves the maintainability and security of configuration management.
    
2.  Write a Terraform configuration file. This topic uses an example of creating a RAM user and granting the user permissions to manage ECS to describe how to write a configuration file.
    
    The following resources are required:
    
    **Important**
    
    We recommend that you do not allow a RAM user to log on to the console and use an AccessKey pair at the same time. This ensures that the responsibilities of each RAM user are clear and prevents misuse.
    
    **Resource**
    
    **Description**
    
    [alicloud\_ram\_user](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ram_user)
    
    Create a RAM user
    
    [alicloud\_ram\_login\_profile](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ram_login_profile)
    
    Allow a RAM user to log on to the console
    
    [alicloud\_ram\_access\_key](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ram_access_key)
    
    Create an AccessKey pair for a RAM user
    
    [alicloud\_ram\_policy](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ram_policy)
    
    Create an access policy
    
    [alicloud\_ram\_user\_policy\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ram_user_policy_attachment)
    
    Grant permissions to a RAM user
    
    Copy the following sample code to the main.tf file. Then, press the `Esc` key to exit the insert mode, enter `:wq`, and press the Enter key to save the file.
    
    ```
    variable "user_name" {
      default = "terraform_user_test"
    }
    
    variable "user_password" {
      default = "!Test@123456"
    }
    
    variable "user_display_name" {
      default = "TestAccount"
    }
    
    variable "user_mobile" {
      default = "86-18688888888"
    }
    
    variable "user_email" {
      default = "example@example.com"
    }
    
    resource "alicloud_ram_user" "user" {
      name         = var.user_name
      display_name = var.user_display_name
      mobile       = var.user_mobile
      email        = var.user_email
      comments     = "Created by Terraform"
      force        = true                   
    }
    
    resource "alicloud_ram_login_profile" "profile" {
      user_name = alicloud_ram_user.user.name
      password  = var.user_password
    }
    
    resource "alicloud_ram_access_key" "ak" {
      user_name   = alicloud_ram_user.user.name
      secret_file = "accesskey.txt"
    }
    
    resource "alicloud_ram_policy" "policy" {
      policy_name     = "tf-example-policy"
      policy_document = <<EOF
      {
        "Statement": [
          {
            "Action": "ecs:*",
            "Effect": "Allow",
            "Resource":"*"
          }
        ],
          "Version": "1"
      }
      EOF
      description     = "This is a policy test."
    }
    
    resource "alicloud_ram_user_policy_attachment" "attach" {
      policy_name = alicloud_ram_policy.policy.policy_name
      policy_type = alicloud_ram_policy.policy.type
      user_name   = alicloud_ram_user.user.name
    }
    ```
    

## 4\. Initialize and create resources

After you write the Terraform configuration file, you must initialize the working directory before you create resources.

### **4.1 Terraform initialization**

Run the `terraform init` command in the current terminal to perform initialization. The `terraform init` command is the first command that you must run before you use any Terraform configuration file. The command initializes a Terraform working directory, which includes downloading the required Alibaba Cloud provider plug-ins and other record files.

### **4.2 Create resources**

1.  Run the `terraform plan` command to create an execution plan. The plan shows information about all resources that will be created, modified, or destroyed when you run the `terraform apply` command.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9457834571/p863497.png)
    
2.  Run the `terraform apply` command to create resources based on the execution plan that is generated by the `terraform plan` command. During the creation process, enter yes as prompted to continue creating the resources. For more information about how to pass variable values, see the variable setting methods in [Variable](/help/en/terraform/variable-introduction).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9457834571/p863499.png)
    

## 5\. View and manage resources

After the deployment, you can manage and maintain your infrastructure environment to ensure that it meets the latest requirements and design specifications.

### **5.1 View resources**

1.  Run the `terraform show` command to view detailed information about the resources.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9457834571/p863503.png)
    
2.  Run the `terraform state list` command to list all created resources.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9457834571/p863513.png)
    
3.  Run the `terraform state show <resource type>.<resource name>` command to view detailed information about a specific resource.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9457834571/p863510.png)
    
4.  View information about the created resources in the [Alibaba Cloud Management Console](https://home.console.alibabacloud.com/home/dashboard/ProductAndService).
    

### 5.2 Manage resources

After Terraform creates and modifies resources, it saves the status and property information of the resources to the terraform.tfstate file. You can use `terraform state` commands to manage the state. For more information, see [Introduction to the state mechanism](/help/en/terraform/introduction-to-terraform-state).

### 5.3 Modify resources

1.  Modify the definition of the resource that you want to change in the configuration file, such as main.tf. For example, you can reduce the permissions of a RAM user to allow the user to have only the permissions to query ECS instances.
    
    1.  Run the `vim main.tf` command and press the i key to enter edit mode.
        
    2.  Copy the following code and use it to replace the alicloud\_ram\_policy section in the main.tf file.
        
        ```
        resource "alicloud_ram_policy" "policy" {
          policy_name     = "tf-example-policy"
          policy_document = <<EOF
          {
            "Statement": [
              {
                "Action": [
                  "ecs:Get*",
                  "ecs:List*",
                  "ecs:Describe*"
                ],
                "Effect": "Allow",
                "Resource":"*"
              }
            ],
              "Version": "1"
          }
          EOF
          description     = "This is a policy test."
        }
        ```
        
    3.  Press Esc and enter :wq to save the file.
        
2.  Run the `terraform plan` command to preview the changes.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9457834571/p858979.png)
    
3.  If the changes meet your expectations, run the `terraform apply` command to apply the changes to your infrastructure. When you run this command, Terraform prompts you to confirm the changes. Enter `yes` and press the Enter key to apply the changes.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9457834571/p858982.png)
    

## **6\. Destroy resources**

When the created resources are no longer needed, you can run the `terraform destroy` command to destroy all the created resources.

**Important**

When you destroy a created access policy that has multiple versions, the terraform destroy command cannot directly destroy the resource. You can add the `force` parameter to alicloud\_ram\_policy and set the value to `true` to force delete all versions of the policy. If the policy is referenced by other RAM users or RAM roles, the associations are automatically removed before the policy is deleted. Use the force property with caution.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9457834571/p863517.png)

## Complete example

To help you quickly try out Terraform, this topic provides the complete Terraform code. You can copy the code and run it.

```
variable "user_name" {
  default = "terraform_user_test"
}

variable "user_password" {
  default = "!Test@123456"
}

variable "user_display_name" {
  default = "TestAccount"
}

variable "user_mobile" {
  default = "86-18688888888"
}

variable "user_email" {
  default = "example@example.com"
}

resource "alicloud_ram_user" "user" {
  name         = var.user_name
  display_name = var.user_display_name
  mobile       = var.user_mobile
  email        = var.user_email
  comments     = "Created by Terraform"
  force        = true                   
}

resource "alicloud_ram_login_profile" "profile" {
  user_name = alicloud_ram_user.user.name
  password  = var.user_password
}

resource "alicloud_ram_access_key" "ak" {
  user_name   = alicloud_ram_user.user.name
  secret_file = "accesskey.txt"
}

resource "alicloud_ram_policy" "policy" {
  policy_name     = "tf-example-policy"
  policy_document = <<EOF
  {
    "Statement": [
      {
        "Action": "ecs:*",
        "Effect": "Allow",
        "Resource":"*"
      }
    ],
      "Version": "1"
  }
  EOF
  description     = "This is a policy test."
}

resource "alicloud_ram_user_policy_attachment" "attach" {
  policy_name = alicloud_ram_policy.policy.policy_name
  policy_type = alicloud_ram_policy.policy.type
  user_name   = alicloud_ram_user.user.name
}
```

## **References**

-   [Common commands](/help/en/terraform/terraform-common-commands)
    
-   [Resource](/help/en/terraform/resource-introduction)
    
-   [Variable](/help/en/terraform/variable-introduction)
    
-   [Output](/help/en/terraform/introduction-to-output)
    
-   [Resource dependencies](/help/en/terraform/resource-dependence)
