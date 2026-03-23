This topic describes how to use Terraform to assign service roles to Container Service for Kubernetes (ACK) when you use ACK for the first time.

**Note**

The example code in this topic is ready to run. Click [here](https://api.alibabacloud.com/terraform?resource=alicloud_cs_managed_kubernetes&exampleId=&activeTab=example&provider=1.238.0&product=Container_Service_for_Kubernetes\(ACK\)&example=201-use-case-enable-ack-and-assign-role) to execute it directly.

## Prerequisites

-   An [AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair) is created for the [Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) you log on as.
    
    **Note**
    
    By default, an Alibaba Cloud account has full permissions on all resources that belong to this account. We recommend using a RAM account, as it provides limited resource permissions, minimizing potential security risks in case your credentials are compromised.
    
-   The following policy is attached to the RAM user that you use to run commands in Terraform. The policy includes the minimum permissions required to run commands in Terraform. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    The following policy provides the permissions to create, view, and delete RAM roles. The policy also provides the permissions to manage policies for RAM roles.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "ram:GetRole",
            "ram:ListRoles",
            "ram:AttachPolicyToRole",
            "ram:ListPoliciesForRole",
            "ram:CreateRole",
            "ram:DetachPolicyFromRole",
            "ram:DeleteRole"
          ],
          "Resource": "*"
        }
      ]
    }
    ```
    
-   The runtime environment for Terraform is prepared by using one of the following methods:
    
    -   [Explorer](/help/en/terraform/using-terraform-in-terraform-explorer): Alibaba Cloud provides an online runtime environment for Terraform. You can log on to the environment and use Terraform without needing to install it. Suitable for scenarios where you need to use and debug Terraform in a low-cost, efficient, and convenient manner.
        
    -   [Cloud Shell](/help/en/terraform/use-terraform-to-quickly-create-resources): Cloud Shell is preinstalled with Terraform and configured with your identity credentials. You can run Terraform commands in Cloud Shell. Suitable for scenarios where you need to use and access Terraform in a low-cost, efficient, and convenient manner.
        
    -   [Install and configure Terraform on your on-premises machine](/help/en/terraform/install-and-configure-terraform-locally): Suitable for scenarios where network connections are unstable or a custom development environment is needed.
        
    

## Required resources

-   [alicloud\_ack\_service](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/ack_service): automatically activates ACK.
    
-   [alicloud\_ram\_role](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ram_role): creates a RAM role.
    
-   [alicloud\_ram\_role\_policy\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ram_role_policy_attachment): attaches a policy to a RAM role.
    
-   [alicloud\_ram\_roles](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/ram_roles): lists RAM roles within the current Alibaba Cloud account that match the specified filter options.
    

## Step 1: Activate ACK

You must activate ACK before you can create ACK clusters.

1.  Create a working directory and a file named main.tf under the directory. Then, copy the following content to the main.tf file.
    
    ```
    // Activate ACK. 
    data "alicloud_ack_service" "open" {
        enable = "On"
        type   = "propayasgo"
    }
    ```
    
2.  Run the following command to initialize the Terraform runtime environment:
    
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
    
3.  Run the following command to activate ACK:
    
    ```
    terraform apply
    ```
    
    During command execution, follow the instructions to type and press **Enter**. Wait until the command is run. If the following information is returned, ACK is activated.
    
    ```
    You can apply this plan to save these new output values to the Terraform state, without changing any real infrastructure.
    
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.
    
      Enter a value: yes
    
    
    Apply complete!  Resources: 0 added, 0 changed, 0 destroyed.
    ```
    

## Step 2: Assign service roles to ACK

When you use ACK for the first time, you must assign service roles to ACK with your Alibaba Cloud account.

1.  Copy the following code block to the `main.tf` file:
    
    ```
    // The RAM roles that you want to assign. 
    variable "roles" {
      type = list(object({
        name            = string
        policy_document = string
        description     = string
        policy_name     = string
      }))
      default = [
        {
          name            = "AliyunCSManagedLogRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "The logging component of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
          policy_name     = "AliyunCSManagedLogRolePolicy"
        },
        {
          name            = "AliyunCSManagedCmsRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "The CMS component of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
          policy_name     = "AliyunCSManagedCmsRolePolicy"
        },
        {
          name            = "AliyunCSManagedCsiRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "The volume plug-in of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
          policy_name     = "AliyunCSManagedCsiRolePolicy"
        },
        {
          name            = "AliyunCSManagedCsiPluginRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "The volume plug-in of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
          policy_name     = "AliyunCSManagedCsiPluginRolePolicy"
        },
        {
          name            = "AliyunCSManagedCsiProvisionerRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "The volume plug-in of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
          policy_name     = "AliyunCSManagedCsiProvisionerRolePolicy"
        },
        {
          name            = "AliyunCSManagedVKRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "The VK component of ACK Serverless clusters assumes this role to access your resources in other Alibaba Cloud services."
          policy_name     = "AliyunCSManagedVKRolePolicy"
        },
        {
          name            = "AliyunCSServerlessKubernetesRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "By default, ACK clusters assume this role to access your cloud resources."
          policy_name     = "AliyunCSServerlessKubernetesRolePolicy"
        },
        {
          name            = "AliyunCSKubernetesAuditRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "The auditing feature of ACK assumes this role to access your resources in other Alibaba Cloud services."
          policy_name     = "AliyunCSKubernetesAuditRolePolicy"
        },
        {
          name            = "AliyunCSManagedNetworkRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "The network plug-in of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
          policy_name     = "AliyunCSManagedNetworkRolePolicy"
        },
        {
          name            = "AliyunCSDefaultRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "By default, ACK assumes this role to access your resources in other Alibaba Cloud services when managing ACK clusters."
          policy_name     = "AliyunCSDefaultRolePolicy"
        },
        {
          name            = "AliyunCSManagedKubernetesRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "By default, ACK clusters assume this role to access your cloud resources."
          policy_name     = "AliyunCSManagedKubernetesRolePolicy"
        },
        {
          name            = "AliyunCSManagedArmsRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "The Application Real-Time Monitoring Service (ARMS) plug-in of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
          policy_name     = "AliyunCSManagedArmsRolePolicy"
        },
        {
          name            = "AliyunCISDefaultRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "Container Intelligence Service (CIS) assumes this role to access your resources in other Alibaba Cloud services."
          policy_name     = "AliyunCISDefaultRolePolicy"
        },
        {
          name            = "AliyunOOSLifecycleHook4CSRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"oos.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "Operation Orchestration Service (OOS) assumes this role to access your resources in other Alibaba Cloud services. ACK relies on OOS to scale node pools."
          policy_name     = "AliyunOOSLifecycleHook4CSRolePolicy"
        },
        {
          name            = "AliyunCSManagedAutoScalerRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "The auto scaling component of ACK clusters assumes this role to access your node pool resources in other Alibaba Cloud services."
          policy_name     = "AliyunCSManagedAutoScalerRolePolicy"
        }
      ]
    }
    
    // Query RAM roles.
    data "alicloud_ram_roles" "roles" {
        policy_type = "Custom"
        name_regex  = "^Aliyun.*Role$"
    }
    
    locals {
      # Query the RAM roles that you want to assign.
      all_role_names = [for role in var.roles : role.name]
      # Query the RAM roles that already exist.
      created_role_names  = [for role in data.alicloud_ram_roles.roles.roles : role.name]
      # Compare the two sets of RAM roles to obtain the RAM roles that you want to assign but do not exist.
      complement_names = setsubtract(local.all_role_names, local.created_role_names)
      # The RAM roles that need to be created.
      complement_roles = [for role in var.roles : role if contains(local.complement_names, role.name)]
    }
    
    // Create RAM roles. 
    resource "alicloud_ram_role" "role" {
      for_each    = { for r in local.complement_roles : r.name => r }
      name        = each.value.name
      document    = each.value.policy_document
      description = each.value.description
      force       = true
    }
    
    // Attach system policies to RAM roles. 
    resource "alicloud_ram_role_policy_attachment" "attach" {
      for_each    = { for r in local.complement_roles : r.name => r }
      policy_name = each.value.policy_name
      policy_type = "System"
      role_name   = each.value.name
      depends_on  = [alicloud_ram_role.role]
    }
    ```
    
    **Note**
    
    The preceding sample code shows the configurations of an input variable that serves as the parameters for Terraform. For more information about the parameter values in the preceding sample code, see [Appendix](#0ddc9b35d561q). You must specify service roles in the code. You can select service roles based on your business requirements.
    
2.  Create an execution plan and preview the changes.
    
    ```
    terraform plan
    ```
    
3.  Run the following command to apply the execution plan and assign service roles to ACK:
    
    ```
    terraform apply
    ```
    
    During command execution, follow the instructions to type and press **Enter**. Wait until the command is run. If the following information is returned, ACK is activated.
    
    ```
    Apply complete!  Resources: 2 added, 0 changed, 0 destroyed.
    ```
    
4.  Verify the results.
    
    ## Run the terraform show command
    
    Run the following command to query the resources that have been created by Terraform:
    
    ```
    terraform show
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9804622371/p862268.png)
    
    ## Log on to the RAM console
    
    Log on to the [RAM console](https://ram.console.alibabacloud.com) to view the created roles. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9804622371/p858547.png)
    

## **Delete resources**

If you no longer need to use the preceding resources created or managed by Terraform, run the following command to delete the resources: For more information about the `terraform destroy` command, see [Common commands](/help/en/terraform/terraform-common-commands).

```
terraform destroy
```

## Complete sample code

**Note**

The example code in this topic is ready to run. Click [here](https://api.alibabacloud.com/terraform?resource=alicloud_cs_managed_kubernetes&exampleId=&activeTab=example&provider=1.238.0&product=Container_Service_for_Kubernetes\(ACK\)&example=201-use-case-enable-ack-and-assign-role) to execute it directly.

```
provider "alicloud" { 
    region = var.region_id
}

variable "region_id"{
   type     = string
   default = "cn-hangzhou"
}

// Activate ACK. 
data "alicloud_ack_service" "open" {
    enable = "On"
    type   = "propayasgo"
}

// The RAM roles that you want to assign. 
variable "roles" {
  type = list(object({
    name            = string
    policy_document = string
    description     = string
    policy_name     = string
  }))
  default = [
    {
      name            = "AliyunCSManagedLogRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The logging component of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedLogRolePolicy"
    },
    {
      name            = "AliyunCSManagedCmsRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The CMS component of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedCmsRolePolicy"
    },
    {
      name            = "AliyunCSManagedCsiRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The volume plug-in of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedCsiRolePolicy"
    },
    {
      name            = "AliyunCSManagedCsiPluginRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The volume plug-in of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedCsiPluginRolePolicy"
    },
    {
      name            = "AliyunCSManagedCsiProvisionerRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The volume plug-in of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedCsiProvisionerRolePolicy"
    },
    {
      name            = "AliyunCSManagedVKRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The VK component of ACK Serverless clusters assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedVKRolePolicy"
    },
    {
      name            = "AliyunCSServerlessKubernetesRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "By default, ACK clusters assume this role to access your cloud resources."
      policy_name     = "AliyunCSServerlessKubernetesRolePolicy"
    },
    {
      name            = "AliyunCSKubernetesAuditRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The auditing feature of ACK assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSKubernetesAuditRolePolicy"
    },
    {
      name            = "AliyunCSManagedNetworkRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The network plug-in of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedNetworkRolePolicy"
    },
    {
      name            = "AliyunCSDefaultRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "By default, ACK assumes this role to access your resources in other Alibaba Cloud services when managing ACK clusters."
      policy_name     = "AliyunCSDefaultRolePolicy"
    },
    {
      name            = "AliyunCSManagedKubernetesRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "By default, ACK clusters assume this role to access your cloud resources."
      policy_name     = "AliyunCSManagedKubernetesRolePolicy"
    },
    {
      name            = "AliyunCSManagedArmsRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The ARMS plug-in of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedArmsRolePolicy"
    },
    {
      name            = "AliyunCISDefaultRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "CIS assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCISDefaultRolePolicy"
    },
    {
      name            = "AliyunOOSLifecycleHook4CSRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"oos.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "OOS assumes this role to access your resources in other Alibaba Cloud services. ACK relies on OOS to scale node pools."
      policy_name     = "AliyunOOSLifecycleHook4CSRolePolicy"
    },
    {
      name            = "AliyunCSManagedAutoScalerRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The auto scaling component of ACK clusters assumes this role to access your node pool resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedAutoScalerRolePolicy"
    }
  ]
}

// Query RAM roles.
data "alicloud_ram_roles" "roles" {
    policy_type = "Custom"
    name_regex  = "^Aliyun.*Role$"
}

locals {
  # Query the RAM roles that you want to assign.
  all_role_names = [for role in var.roles : role.name]
  # Query the RAM roles that already exist.
  created_role_names  = [for role in data.alicloud_ram_roles.roles.roles : role.name]
  # Compare the two sets of RAM roles to obtain the RAM roles that you want to assign but do not exist.
  complement_names = setsubtract(local.all_role_names, local.created_role_names)
  # The RAM roles that need to be created.
  complement_roles = [for role in var.roles : role if contains(local.complement_names, role.name)]
}

// Create RAM roles. 
resource "alicloud_ram_role" "role" {
  for_each    = { for r in local.complement_roles : r.name => r }
  name        = each.value.name
  document    = each.value.policy_document
  description = each.value.description
  force       = true
}

// Attach system policies to RAM roles. 
resource "alicloud_ram_role_policy_attachment" "attach" {
  for_each    = { for r in local.complement_roles : r.name => r }
  policy_name = each.value.policy_name
  policy_type = "System"
  role_name   = each.value.name
  depends_on  = [alicloud_ram_role.role]
}
```

## **Appendix**

### **Service roles**

#### [AliyunCSManagedLogRole](/help/en/ram/developer-reference/aliyuncsmanagedlogrolepolicy)

-   Description:
    
    The log component of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assumes this role to access your resources in SLS.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedLogRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The logging component of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedLogRolePolicy"
    }
    ```
    

#### [AliyunCSManagedCmsRole](/help/en/ram/developer-reference/aliyuncsmanagedcmsrolepolicy)

-   Description:
    
    The monitoring component of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assumes this role to access your resources in other cloud services such as CloudMonitor and SLS.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedCmsRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The CMS component of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedCmsRolePolicy"
    }
    ```
    

#### [AliyunCSManagedCsiRole](/help/en/ram/developer-reference/aliyuncsmanagedcsirolepolicy)

-   Description:
    
    The volume plug-in of ACK managed clusters, ACK Edge clusters, and ACK Serverless clusters assumes this role to access your resources in other cloud services, such as Elastic Compute Service (ECS), File Storage NAS (NAS), and Object Storage Service (OSS).
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedCsiRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The volume plug-in of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedCsiRolePolicy"
    }
    ```
    

#### [AliyunCSManagedCsiPluginRole](/help/en/ram/developer-reference/aliyuncsmanagedcsipluginrolepolicy)

-   Description:
    
    The new csi-plugin component of ACK managed clusters, ACK Edge clusters, and ACK Serverless clusters assumes this role to access your resources in ECS.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedCsiPluginRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The volume plug-in (new csi-plugin) of ACK managed clusters, ACK Edge clusters, and ACK Serverless clusters assumes this role to access your resources in ECS."
      policy_name     = "AliyunCSManagedCsiPluginRolePolicy"
    }
    ```
    

#### [AliyunCSManagedCsiProvisionerRole](/help/en/ram/developer-reference/aliyuncsmanagedcsiprovisionerrolepolicy)

-   Description:
    
    The new csi-provisioner component of ACK managed clusters, ACK Edge clusters, and ACK Serverless clusters assumes this role to access your resources in ECS, NAS, and OSS.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedCsiProvisionerRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The volume plug-in (new csi-provisioner) of ACK managed clusters, ACK Edge clusters, and ACK Serverless clusters assumes this role to access your resources in ECS, NAS, and OSS."
      policy_name     = "AliyunCSManagedCsiProvisionerRolePolicy"
    }
    ```
    

#### [AliyunCSServerlessKubernetesRole](/help/en/ram/developer-reference/aliyuncsserverlesskubernetesrolepolicy)

-   Description:
    
    ACK Edge clusters and ACK Serverless clusters assume this role to access your resources in other cloud services, such as ECS, Virtual Private Cloud (VPC), Server Load Balancer (SLB), and Alibaba Cloud DNS PrivateZone.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSServerlessKubernetesRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "By default, ACK Serverless clusters assume this role to access your resources in other cloud services."
      policy_name     = "AliyunCSServerlessKubernetesRolePolicy"
    }
    ```
    

#### [AliyunCSKubernetesAuditRole](/help/en/ram/developer-reference/aliyuncskubernetesauditrolepolicy)

-   Description:
    
    The auditing component of ACK managed clusters, ACK Edge clusters, and ACK Serverless clusters assumes this role to access your resources in Simple Log Service.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSKubernetesAuditRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The auditing feature of ACK assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSKubernetesAuditRolePolicy"
    }
    ```
    

#### [AliyunCSManagedNetworkRole](/help/en/ram/developer-reference/aliyuncsmanagednetworkrolepolicy)

-   Description:
    
    The network plug-in of ACK managed clusters, ACK Edge clusters, and ACK Serverless clusters assume this role to access your resources in ECS and VPC.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedNetworkRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The network plug-in of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedNetworkRolePolicy"
    }
    ```
    

#### [AliyunCSDefaultRole](/help/en/ram/developer-reference/aliyuncsdefaultrolepolicy)

-   Description:
    
    ACK assumes this role to access your resources in other cloud services, such as ECS, VPC, SLB, Resource Orchestration Service (ROS), and Auto Scaling, when managing ACK clusters.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSDefaultRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "By default, ACK assumes this role to access your resources in other Alibaba Cloud services when managing ACK clusters."
      policy_name     = "AliyunCSDefaultRolePolicy"
    }
    ```
    

#### [AliyunCSManagedKubernetesRole](/help/en/ram/developer-reference/aliyuncsmanagedkubernetesrolepolicy)

-   Description:
    
    ACK managed clusters and ACK Edge clusters assume this role to access your resources in other cloud services, such as ECS, VPC, SLB, and Container Registry.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedKubernetesRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "By default, ACK clusters assume this role to access your cloud resources."
      policy_name     = "AliyunCSManagedKubernetesRolePolicy"
    }
    ```
    

#### [AliyunCSManagedArmsRole](/help/en/ram/developer-reference/aliyuncsmanagedarmsrolepolicy)

-   Description:
    
    The ARMS component of ACK Edge clusters and ACK Serverless clusters assumes this role to access your resources in ARMS.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedArmsRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The ARMS plug-in of ACK clusters assumes this role to access your resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedArmsRolePolicy"
    }
    ```
    
-   #### [AliyunCISDefaultRole](/help/en/ram/developer-reference/aliyuncisdefaultrolepolicy)
    
    -   Description:
        
        CIS assumes this role to access your resources in other cloud services, such as ECS, VPC, and SLB, to perform diagnostics and inspections.
        
    -   Authorization code:
        
        ```
        {
          name            = "AliyunCISDefaultRole"
          policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
          description     = "CIS assumes this role to access your resources in other Alibaba Cloud services."
          policy_name     = "AliyunCISDefaultRolePolicy"
        }
        ```
        

### **Optional roles**

#### [AliyunCSManagedAcrRole](/help/en/ram/developer-reference/aliyuncsmanagedacrrolepolicy)

-   Description:
    
    The Secret-free image pulling plug-in of ACK managed clusters, ACK Edge clusters, and ACK Serverless clusters assumes this role to access your resources in Container Registry.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedAcrRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The Secret-free image pulling component of ACK clusters assumes this role to pull images from Container Registry."
      policy_name     = "AliyunCSManagedAcrRolePolicy"
    }
    ```
    

#### [AliyunCSManagedNlcRole](/help/en/ram/developer-reference/aliyuncsmanagednlcrolepolicy)

-   Description:
    
    The node lifecycle controller of ACK managed clusters and ACK Edge clusters assumes this role to access your node pool resources in ECS and ACK.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedNlcRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The managed node pool controller of ACK clusters assumes this role to access your node pool resources in ECS and ACK."
      policy_name     = "AliyunCSManagedNlcRolePolicy"
    }
    ```
    

#### [AliyunCSManagedAutoScalerRole](/help/en/ram/developer-reference/aliyuncsmanagedautoscalerrolepolicy)

-   Description:
    
    The auto scaling component of ACK managed clusters, ACK Edge clusters, and ACK Serverless clusters assumes this role to access your node pool resources in ECS and ACK.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedAutoScalerRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The auto scaling component of ACK clusters assumes this role to access your node pool resources in other Alibaba Cloud services."
      policy_name     = "AliyunCSManagedAutoScalerRolePolicy"
    }
    ```
    

#### [AliyunCSManagedSecurityRole](/help/en/ram/developer-reference/aliyuncsmanagedsecurityrolepolicy)

-   Description:
    
    The Secret encryption and credential management component of ACK managed clusters, ACK Edge clusters, and ACK Serverless clusters assumes this role to access your resources in Key Management Service (KMS).
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedSecurityRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The Secret encryption component of ACK clusters assumes this role to access your node pool resources in KMS."
      policy_name     = "AliyunCSManagedSecurityRolePolicy"
    }
    ```
    

#### [AliyunCSManagedCostRole](/help/en/ram/developer-reference/aliyuncsmanagedcostrolepolicy)

-   Description:
    
    The cost analysis component of ACK managed clusters, ACK Edge clusters, and ACK Serverless clusters assumes this role to access your resources in ECS and Elastic Container Instance, and call API operations of Bills Management.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedCostRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The cost analysis component of ACK clusters assumes this role to access your resources in ECS and Elastic Container Instance, and call API operations of Bills Management."
      policy_name     = "AliyunCSManagedCostRolePolicy"
    }
    ```
    

#### [AliyunCSManagedNimitzRole](/help/en/ram/developer-reference/aliyuncsmanagednimitzrolepolicy)

-   Description:
    
    The control component of ACK Edge clusters assumes this role to access your resources in Smart Access Gateway (SAG), VPC, and Cloud Enterprise Network (CEN).
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedNimitzRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The network plug-in of ACK Lingjun clusters assumes this role to access your resources in Intelligent Computing LINGJUN."
      policy_name     = "AliyunCSManagedNimitzRolePolicy"
    }
    ```
    

#### [AliyunCSManagedBackupRestoreRole](/help/en/ram/developer-reference/aliyuncsmanagedbackuprestorerolepolicy)

-   Description:
    
    The backup center component of ACK managed clusters, ACK Edge clusters, and ACK Serverless clusters assumes this role to access your resources in Cloud Backup and OSS.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedBackupRestoreRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The backup center component of ACK clusters assumes this role to access your resources in Cloud Backup and OSS."
      policy_name     = "AliyunCSManagedBackupRestoreRolePolicy"
    }
    ```
    

#### [AliyunCSManagedEdgeRole](/help/en/ram/developer-reference/aliyuncsmanagededgerolepolicy)

-   Description:
    
    The control component of ACK Edge clusters assumes this role to access your resources in SAG, VPC, and CEN.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunCSManagedEdgeRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"cs.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "The control component of ACK Edge clusters assumes this role to access your resources in SAG, VPC, and Cloud CEN."
      policy_name     = "AliyunCSManagedEdgeRolePolicy"
    }
    ```
    

#### **AliyunOOSLifecycleHook4CSRole**

-   Description:
    
    OOS assumes this role to access your resources in other cloud services, such as ACK, ECS, and PolarDB.
    
-   Authorization code:
    
    ```
    {
      name            = "AliyunOOSLifecycleHook4CSRole"
      policy_document = "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"oos.aliyuncs.com\"]}}],\"Version\":\"1\"}"
      description     = "OOS assumes this role to access your resources in other Alibaba Cloud services. ACK relies on OOS to scale node pools."
      policy_name     = "AliyunOOSLifecycleHook4CSRolePolicy"
    }
    ```
    

## **References**

-   For more information about Terraform, see [What is Terraform?](/help/en/terraform/what-is-terraform)
    
-   Terraform is available as a managed service in ROS. You can deploy Terraform templates in the [ROS console](https://ros.console.alibabacloud.com/cn-hangzhou/welcome). For more information, see [Create a Terraform stack](/help/en/ros/user-guide/create-a-terraform-stack).
