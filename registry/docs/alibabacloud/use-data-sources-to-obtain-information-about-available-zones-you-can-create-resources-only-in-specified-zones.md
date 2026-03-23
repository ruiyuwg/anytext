You can use Terraform to create and manage application access points (AAPs). This topic describes how to create an AAP.

## **Overview**

Before your self-managed applications perform cryptographic operations or retrieve secrets, the applications must use the client key of the required AAP to access your Key Management Service (KMS) instance.

**Note**

If you use keys in a KMS instance for server-side encryption in Alibaba Cloud services or call KMS SDK to use secrets, you do not need to create an AAP. If you want to call KMS Instance SDK to use a key or a secret in a KMS instance, you must create an AAP.

**Note**

You can run the sample code in this topic with a few clicks. For more information, visit [Terraform Explorer](https://api.aliyun.com/terraform?resource=alicloud_kms_application_access_point&exampleId=&activeTab=example&provider=1.242.0&product=KMS&example=201-use-case-create-kms-access-point).

## **Prerequisites**

-   An Alibaba Cloud account has full permissions on all resources that belong to this account. If the credentials of an Alibaba Cloud account are leaked, security risks may arise. We recommend that you use a Resource Access Management (RAM) user and create an AccessKey pair for the RAM user. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) and [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
-   The following code provides an example on how to grant permissions to RAM users. Make sure that the AliyunKMSFullAccess policy is attached to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "kms:*"
          ],
          "Resource": [
            "*"
          ],
          "Condition": {}
        }
      ]
    }
    ```
    
-   The runtime environment for Terraform is prepared by using one of the following methods:
    
    Use Terraform in [Terraform Explorer](/help/en/terraform/using-terraform-in-terraform-explorer): Alibaba Cloud provides an online runtime environment for Terraform. You can log on to the Terraform Explorer environment to use Terraform without the need to install Terraform. This method is suitable for scenarios in which you want to use and debug Terraform in a fast and convenient manner at no additional costs.
    
    Use Terraform in [Cloud Shell](/help/en/terraform/use-terraform-to-quickly-create-resources): Terraform is preinstalled in Cloud Shell, and identity credentials are configured. You can run Terraform commands in Cloud Shell. This method is suitable for scenarios in which you want to use and debug Terraform in a fast and convenient manner at low costs.
    
    [Install and configure Terraform on your on-premises machine](/help/en/terraform/install-and-configure-terraform-locally): This method is suitable for scenarios in which network connections are unstable or a custom development environment is required.
    
    **Important**
    
    You must install Terraform 0.12.28 or later. You can run the `terraform --version` command to query the Terraform version.
    

## Required resources

-   [alicloud\_kms\_network\_rule](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/kms_network_rule): Creates a network rule.
    
-   [alicloud\_kms\_application\_access\_point](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/kms_application_access_point): Creates an AAP.
    
-   [alicloud\_kms\_client\_key](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/kms_client_key): Creates a client key.
    
-   [alicloud\_kms\_policy](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/kms_policy): Creates an access control policy.
    

## Create an AAP with Terraform

In the following example, an AAP is created in a KMS instance.

1.  Create a working directory and a configuration file named `main.tf` in the working directory. main.tf is the main file of Terraform and defines the resources that you want to deploy. Make sure that a KMS instance is created in advance.
    
    ```
    variable "region" {
      default = "cn-heyuan"
    }
    provider "alicloud" {
      region = var.region
    }
    variable "instance_name" {
      default = "tf-kms-vpc-172-16"
    }
    variable "instance_type" {
      default = "ecs.n1.tiny"
    }
    # Use data sources to obtain information about available zones. You can create resources only in specified zones.
    data "alicloud_zones" "default" {
      available_disk_category     = "cloud_efficiency"
      available_resource_creation = "VSwitch"
      available_instance_type     = var.instance_type
    }
    # Create a virtual private cloud (VPC).
    resource "alicloud_vpc" "vpc" {
      vpc_name   = var.instance_name
      cidr_block = "192.168.0.0/16"
    }
    # Create a vSwitch whose CIDR block is 192.168.10.0/24.
    resource "alicloud_vswitch" "vsw" {
      vpc_id     = alicloud_vpc.vpc.id
      cidr_block = "192.168.10.0/24"
      zone_id    = data.alicloud_zones.default.zones.0.id
      vswitch_name = "terraform-example-1"
    }
    # Create another vSwitch whose CIDR block is 192.168.20.0/24.
    resource "alicloud_vswitch" "vsw1" {
      vpc_id     = alicloud_vpc.vpc.id
      cidr_block = "192.168.20.0/24"
      zone_id    = data.alicloud_zones.default.zones.0.id
      vswitch_name = "terraform-example-2"
    }
    # Create an instance of the software key management type and configure network parameters to enable the instance.
    resource "alicloud_kms_instance" "default" {
      # The instance of the software key management type.
      product_version = "3"
      vpc_id          = alicloud_vpc.vpc.id
      # Specify zones for the KMS instance by using the obtained zone IDs.
      zone_ids = [
        "cn-heyuan-a",
        "cn-heyuan-b",
      ]
      # The vSwitch IDs.
      vswitch_ids = [
        alicloud_vswitch.vsw.id,alicloud_vswitch.vsw1.id
      ]
      # The computing performance, number of keys, number of secrets, and access management quota.
      vpc_num    = "1"
      key_num    = "1000"
      secret_num = "100"
      spec       = "1000"
      # Associate a different VPC with the instance. This parameter is optional.
      # If the two VPCs belong to different Alibaba Cloud accounts, you must first share the vSwitch in the second VPC with the first VPC.
      #bind_vpcs {
      #vpc_id = "vpc-j6cy0l32yz9ttxfy6****"
      #vswitch_id = "vsw-j6cv7rd1nz8x13ram****"
      #region_id = "cn-shanghai"
      #vpc_owner_id = "119285303511****"
      #}
      #bind_vpcs {
      #vpc_id = "vpc-j6cy0l32yz9ttd7g3****"
      #vswitch_id = "vsw-3h4yrd1nz8x13ram****"
      #region_id = "cn-shanghai"
      #vpc_owner_id = "119285303511****"
      #}
    }
    # Save the certificate authority (CA) certificate of the instance to a local file.
     resource "local_file" "ca_certificate_chain_pem" {
     content  = alicloud_kms_instance.default.ca_certificate_chain_pem
     filename = "ca.pem"
    }
    ```
    
    Create an AAP:
    
    ```
    # Create a network rule.
    resource "alicloud_kms_network_rule" "network_rule_example" {
      # The name of the network rule.
      network_rule_name = "sample_network_rule"
      # The description of the network rule.
      description = "description_test_module"
      # The allowed range of source private IP addresses.
      source_private_ip = ["172.16.0.0/12"]
    }
    # Create an access control policy.
    resource "alicloud_kms_policy" "policy_example" {
      # The name of the policy.
      policy_name = "sample_policy"
      # The description of the policy.
      description = "description_test_module"
      # The list of specified permissions, which include the permissions to use keys and the permissions to access keys.
      permissions = ["RbacPermission/Template/CryptoServiceKeyUser", "RbacPermission/Template/CryptoServiceSecretUser"]
      # The list of resources, which indicate all keys and secrets.
      resources = ["key/*", "secret/*"]
      # The ID of the KMS instance.
      kms_instance_id = alicloud_kms_instance.default.id
      # The access control rules in the JSON format. The network rule specified in the preceding section is used.
      access_control_rules = <<EOF
      {
          "NetworkRules":[
              "alicloud_kms_network_rule.network_rule_example.network_rule_name"
          ]
      }
      EOF
    }
    
    # Create an AAP.
    resource "alicloud_kms_application_access_point" "application_access_point_example" {
      # The name of the AAP.
      application_access_point_name = "sample_aap"
      # The list of associated policies. The access control policy specified in the preceding section is used.
      policies = [alicloud_kms_policy.policy_example.policy_name]
      # The description of the AAP.
      description = "aap_description"
    }
    
    # Create a client key.
    resource "alicloud_kms_client_key" "client_key" {
      # The name of the specified AAP.
      aap_name = alicloud_kms_application_access_point.application_access_point_example.application_access_point_name
      # The password of the client key. Specify a custom password.
      password = "testPassword@"
      # The start time of the validity period for the client key.
      not_before = "2023-09-01T14:11:22Z"
      not_after  = "2032-09-01T14:11:22Z"
      # The path of the local file that stores the client key.
      private_key_data_file = "./client_key.json"
    
    }
    ```
    
    **Important**
    
    -   After the AAP is created, you must obtain the client key by using the local file path and store the client key in a secure location.
        
    -   You can configure the password parameter by using sensitive inputs of Terraform.
        
    
2.  Run the following command to initialize the runtime environment for `Terraform`:
    
    ```
    terraform init
    ```
    
    If the following information is returned, Terraform is initialized:
    
    ```
    Initializing the backend...
    
    Initializing provider plugins...
    - Reusing previous version of hashicorp/alicloud from the dependency lock file
    - Using previously-installed hashicorp/alicloud v1.231.0
    
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
    
4.  Run the following command to create an AAP:
    
    ```
    terraform apply
    ```
    
    During the execution, enter `yes` as prompted and press the **Enter** key. Wait until the command is executed. If the following information is returned, the AAP is created:
    
    ```
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.
    
      Enter a value: yes
    
    ...
    alicloud_kms_network_rule.network_rule_example: Creating...
    alicloud_kms_policy.policy_example: Creating...
    alicloud_kms_network_rule.network_rule_example: Creation complete after 0s [id=sample_network_***]
    alicloud_kms_policy.policy_example: Creation complete after 0s [id=sample_pol***]
    alicloud_kms_application_access_point.application_access_point_example: Creating...
    alicloud_kms_application_access_point.application_access_point_example: Creation complete after 0s [id=sample_***]
    alicloud_kms_client_key.client_key: Creation complete after 0s [id=KAAP.5093ea57-0b84-4455-a8e9-7679bdc****]
    ...
    
    Apply complete! Resources: 4 added, 0 changed, 0 destroyed.
    ```
    
5.  Verify the result.
    
    ### **Run the terraform show command**
    
    You can run the following command to query the resources that are created by using Terraform:
    
    ```
    terraform show
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0038739371/p864870.png)
    
    ## Log on to the KMS console
    
    Log on to the [KMS](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A%2F%2Fyundun.console.aliyun.com%2F%3Fp%3Dall) console to view the created AAP.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0038739371/p864868.png)
    

### Release resources

If you no longer require the preceding resources that are created or managed by using Terraform, run the following command to release the resources. For more information about `terraform destroy`, see [Common commands](/help/en/terraform/terraform-common-commands).

```
terraform destroy
```

## Complete sample code

**Note**

You can run the sample code with a few clicks. For more information, visit [Terraform Explorer](https://api.aliyun.com/terraform?resource=alicloud_kms_application_access_point&exampleId=&activeTab=example&provider=1.242.0&product=KMS&example=201-use-case-create-kms-access-point).

### **Sample code**

```
variable "region" {
  default = "cn-heyuan"
}
provider "alicloud" {
  region = var.region
}
variable "instance_name" {
  default = "tf-kms-vpc-172-16"
}
variable "instance_type" {
  default = "ecs.n1.tiny"
}
# Use data sources to obtain information about available zones. You can create resources only in specified zones.
data "alicloud_zones" "default" {
  available_disk_category     = "cloud_efficiency"
  available_resource_creation = "VSwitch"
  available_instance_type     = var.instance_type
}
# Create a VPC.
resource "alicloud_vpc" "vpc" {
  vpc_name   = var.instance_name
  cidr_block = "192.168.0.0/16"
}
# Create a vSwitch whose CIDR block is 192.168.10.0/24.
resource "alicloud_vswitch" "vsw" {
  vpc_id     = alicloud_vpc.vpc.id
  cidr_block = "192.168.10.0/24"
  zone_id    = data.alicloud_zones.default.zones.0.id
  vswitch_name = "terraform-example-1"
}
# Create another vSwitch whose CIDR block is 192.168.20.0/24.
resource "alicloud_vswitch" "vsw1" {
  vpc_id     = alicloud_vpc.vpc.id
  cidr_block = "192.168.20.0/24"
  zone_id    = data.alicloud_zones.default.zones.0.id
  vswitch_name = "terraform-example-2"
}
# Create an instance of the software key management type and configure network parameters to enable the instance.
resource "alicloud_kms_instance" "default" {
  # The instance of the software key management type.
  product_version = "3"
  vpc_id          = alicloud_vpc.vpc.id
  # Specify zones for the KMS instance by using the obtained zone IDs.
  zone_ids = [
    "cn-heyuan-a",
    "cn-heyuan-b",
  ]
  # The vSwitch IDs.
  vswitch_ids = [
    alicloud_vswitch.vsw.id,alicloud_vswitch.vsw1.id
  ]
  # The computing performance, number of keys, number of secrets, and access management quota.
  vpc_num    = "1"
  key_num    = "1000"
  secret_num = "100"
  spec       = "1000"
  # Associate a different VPC with the instance. This parameter is optional.
  # If the two VPCs belong to different Alibaba Cloud accounts, you must first share the vSwitch in the second VPC with the first VPC.
  #bind_vpcs {
  #vpc_id = "vpc-j6cy0l32yz9ttxfy6****"
  #vswitch_id = "vsw-j6cv7rd1nz8x13ram****"
  #region_id = "cn-shanghai"
  #vpc_owner_id = "119285303511****"
  #}
  #bind_vpcs {
  #vpc_id = "vpc-j6cy0l32yz9ttd7g3****"
  #vswitch_id = "vsw-3h4yrd1nz8x13ram****"
  #region_id = "cn-shanghai"
  #vpc_owner_id = "119285303511****"
  #}
}
# Save the CA certificate of the instance to a local file.
 resource "local_file" "ca_certificate_chain_pem" {
 content  = alicloud_kms_instance.default.ca_certificate_chain_pem
 filename = "ca.pem"
}
# Create a network rule.
resource "alicloud_kms_network_rule" "network_rule_example" {
  # The name of the network rule.
  network_rule_name = "sample_network_rule"
  # The description of the network rule.
  description = "description_test_module"
  # The allowed range of source private IP addresses.
  source_private_ip = ["172.16.0.0/12"]
}

# Create an access control policy.
resource "alicloud_kms_policy" "policy_example" {
  # The name of the policy.
  policy_name = "sample_policy"
  # The description of the policy.
  description = "description_test_module"
  # The list of specified permissions, which include the permissions to use keys and the permissions to access keys.
  permissions = ["RbacPermission/Template/CryptoServiceKeyUser", "RbacPermission/Template/CryptoServiceSecretUser"]
  # The list of resources, which indicate all keys and secrets.
  resources = ["key/*", "secret/*"]
  # The ID of the KMS instance.
  kms_instance_id = alicloud_kms_instance.default.id
  # The access control rules in the JSON format. The network rule specified in the preceding section is used.
  access_control_rules = <<EOF
  {
      "NetworkRules":[
          "alicloud_kms_network_rule.network_rule_example.network_rule_name"
      ]
  }
  EOF
}

# Create an AAP.
resource "alicloud_kms_application_access_point" "application_access_point_example" {
  # The name of the AAP.
  application_access_point_name = "sample_aap"
  # The list of associated policies. The access control policy specified in the preceding section is used.
  policies = [alicloud_kms_policy.policy_example.policy_name]
  # The description of the AAP.
  description = "aap_description"
}

# Create a client key.
resource "alicloud_kms_client_key" "client_key" {
  # The name of the specified AAP.
  aap_name = alicloud_kms_application_access_point.application_access_point_example.application_access_point_name
  # The password of the client key. Specify a custom password.
  password = "testPassword@"
  # The start time of the validity period for the client key.
  not_before = "2023-09-01T14:11:22Z"
  not_after  = "2032-09-01T14:11:22Z"
  # The path of the local file that stores the client key.
  private_key_data_file = "./client_key.json"
}
```
