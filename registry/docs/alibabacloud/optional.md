This topic describes how to use Terraform and its related tools to manage existing cloud resources.

## Background

Terraform is a leading Infrastructure as Code (IaC) tool for automating cloud resource management. For new resources, you can write Terraform code and run commands to automatically create them. For existing resources or resources not created by Terraform, you must import them. This process generates resource code and a state file. Then, you can use Terraform to manage these resources.

The resource import feature brings existing cloud resources under Terraform's management.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1220473771/CAEQUBiBgIDCt.uW2RkiIGJiZDhmYWFlN2U0ZjRhN2ZiYzFjYzBkMDE3ZDMyMjE25490757_20250723103557.191.svg)

## Scenarios

Resource import is useful in several resource management and deployment scenarios.

1.  **Manage existing resources**: Transition resources managed by other tools, such as the console, API, or command-line interface (CLI), to Terraform management.
    
2.  **Resolve resource drift**: If a resource managed by Terraform is modified outside of Terraform, its state no longer matches the configuration. This is called resource drift. You can re-import the resource to resolve this drift.
    
3.  **Refactor code**: If all your resources are defined in a single configuration file, you can refactor and split the file. This reduces the complexity of managing the configuration and state files as the number of resources grows.
    
4.  **Quickly deploy resources**: Replicate and deploy an existing resource architecture to a different region or account.
    
5.  **Quickly recover resources**: Regularly back up your resource architecture. If a stability issue occurs, you can use the backup code to quickly recover the architecture.
    

## Procedure

This topic describes three methods to import resources:

1.  **The import command**: Imports a single resource using the native Terraform command `terraform import`.
    
2.  **The import block**: Imports one or more resources by writing a Terraform import block and running `terraform plan` and `terraform apply`.
    
3.  **The Terraformer tool**: Imports resources in batches by running commands with the open-source Terraformer tool to filter and query them.
    

These three methods are suitable for different scenarios. Choose the method that best fits your needs.

**Import method**

**Advantages**

**Disadvantages**

**Scenarios**

The import command

-   Simple and direct. Runs a native Terraform command.
    
-   Automatically generates a state file.
    

-   Requires you to manually retrieve the resource ID, which can be error-prone.
    
-   Inefficient for multiple resources because it only supports importing one resource at a time.
    
-   Requires you to write the resource code manually.
    

Manage existing resources

Resolve resource drift

Refactor code

The import block

-   Simple to use. Runs native Terraform commands.
    
-   Supports batch import of multiple resources.
    
-   Allows you to write code for complex import logic.
    

-   Requires writing import code, which has a learning curve.
    
-   Cannot generate dependencies between multiple resources.
    
-   Can have a high configuration cost for batch imports.
    

Manage existing resources

Resolve resource drift

Refactor code

Quickly deploy resources

Terraformer

-   Automatically filters and selects the resource collection to import.
    
-   Automatically generates Terraform resource code.
    
-   Automatically generates dependencies between resources.
    

-   Requires you to download and install Terraformer.
    
-   Is not a native Terraform command and has a learning and configuration cost.
    

Manage existing resources

Resolve resource drift

Refactor code

Quickly deploy resources

Quickly recover resources

### **The Terraform import command**

The `<a class="ne-link" data-href="https://developer.hashicorp.com/terraform/cli/commands/import" href="https://developer.hashicorp.com/terraform/cli/commands/import" id="653ac62fdfgjr" target="_blank">terraform import</a>` command imports resources by specifying a **resource address** and a **resource ID**, and accepts several **configuration parameters**.

#### **Prerequisites**

-   Prepare a Terraform runtime environment. You can choose one of the following methods:
    
    -   [Create resources with Terraform](/help/en/terraform/use-terraform-to-quickly-create-resources): Alibaba Cloud Cloud Shell is pre-installed with Terraform components and configured identity credentials. You can run Terraform commands directly in Cloud Shell. This method is suitable for quick and easy access to Terraform.
        
    -   [Install and configure Terraform](/help/en/terraform/install-and-configure-terraform-locally): This method is suitable for scenarios with poor network connectivity or when you need a custom developer environment.
        
-   Grant read-only permissions for the relevant resources to the active account.
    

#### **Usage**

The command format is `terraform import [options] <address> <id>`.

-   **Resource address**: The format is `<resource_type>.<resource_name>`. It includes the resource type and name, and serves as the identifier for the infrastructure in the state file.
    
    -   For example, the resource address for the VPC in the following configuration snippet is `alicloud_vpc.default`.
        
    
    ```
    resource "alicloud_vpc" "default" {
      vpc_name   = "tf-example"
      cidr_block = "10.0.0.0/8"
    }
    ```
    
-   **Resource ID**: A resource ID is an input parameter used to uniquely identify a resource and request information from the server. For more information about the format of a resource ID, see the [Provider documentation](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs) for each resource.
    
    -   For example, the resource ID for `alicloud_security_group` is the security group ID. The resource ID for `alicloud_security_group_rule` follows a specific format.
        
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9087410671/p903012.png)
    
-   **Configuration options**: The Terraform import command accepts a variety of options. For more information, see the [official usage instructions](https://developer.hashicorp.com/terraform/cli/commands/import#usage).
    

#### **Example**

The following example shows how to import an Object Storage Service (OSS) instance:

1.  Create a working directory. In the directory, create a configuration file named main.tf and define the address of the resource to import.
    
    ```
    resource "alicloud_oss_bucket" "default"{ }
    ```
    
2.  The ID of an [alicloud\_oss\_bucket](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/oss_bucket) resource is the bucket name.
    
3.  Initialize the runtime environment.
    
    ```
    terraform init
    ```
    
4.  You can run the import command.
    
    ```
    # Replace this with your bucket name
    terraform import alicloud_oss_bucket.default oss-bucket-import
    ```
    
    The following output indicates a successful import:
    
    ```
    alicloud_oss_bucket.default: Importing from ID "oss-bucket-import"...
    alicloud_oss_bucket.default: Import prepared!
      Prepared alicloud_oss_bucket for import
    alicloud_oss_bucket.default: Refreshing state... [id=oss-bucket-import]
    
    Import successful!
    
    The resources that were imported are shown above. These resources are now in
    your Terraform state and will henceforth be managed by Terraform.
    ```
    
5.  After you run terraform import, the properties are not automatically added to the template. You must add them manually. You can run `terraform show` to view all properties of the current resource:
    
    ```
    # alicloud_oss_bucket.default:
    resource "alicloud_oss_bucket" "default" {
        acl               = "private"
        bucket            = "oss-bucket-import"
        creation_date     = "2024-11-22"
        extranet_endpoint = "oss-cn-beijing.aliyuncs.com"
        id                = "oss-bucket-import"
        intranet_endpoint = "oss-cn-beijing-internal.aliyuncs.com"
        location          = "oss-cn-beijing"
        owner             = "1511928*****"
        redundancy_type   = "ZRS"
        resource_group_id = "rg-acf***"
        storage_class     = "Standard"
        tags              = {}
    
        access_monitor {
            status = "Disabled"
        }
    }
    ```
    
    After you add the preceding information to your template and remove the read-only properties as described in [alicloud\_oss\_bucket](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/oss_bucket), you can use Terraform to manage your resources.
    

### **The Terraform import block**

Terraform v1.5.0 and later supports resource imports using an \`import\` block. You can write an \`import\` block in your configuration file to specify the ID and address of the resource to import. Then, you can run the `terraform plan` and `terraform apply` commands to preview and execute the import.

For more information, see the [official documentation](https://developer.hashicorp.com/terraform/language/import).

#### **Prerequisites**

-   Prepare a Terraform runtime environment. You can choose one of the following methods:
    
    **Note**
    
    This feature requires Terraform v1.5.0 or later. Ensure that your environment uses a compatible version.
    
    -   [Create resources with Terraform](/help/en/terraform/use-terraform-to-quickly-create-resources): Alibaba Cloud Cloud Shell is pre-installed with Terraform components and configured identity credentials. You can run Terraform commands directly in Cloud Shell. This method is suitable for quick and easy access to Terraform.
        
    -   [Install and configure Terraform](/help/en/terraform/install-and-configure-terraform-locally): This method is suitable for scenarios with poor network connectivity or when you need a custom developer environment.
        
-   Grant read-only permissions for the relevant resources to the active account.
    

#### **Usage**

The syntax is as follows:

```
import {
  to = alicloud_oss_bucket.example
  id = "oss-bucket-import"
}

# Optional
# resource "alicloud_oss_bucket" "example" {
#   # (other resource arguments...)
# }
```

Compared to the import command, the import block has two advantages:

1.  Automatically generates a configuration file. You can import a resource to a resource address that is already defined in the configuration. You can also use the `-generate-config-out` parameter to automatically generate the configuration. This saves you from having to write the configuration manually.
    
2.  Batch imports. In an \`import\` block, you can use `for_each` to import resources in batches. If the resources have similar attributes, you can import them to the same resource address and differentiate them by index.
    

**Note**

Note that you cannot use these two features at the same time. The Terraform CLI does not currently support automatically generating configurations for resources that use `for_each`.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9087410671/p903015.png)

#### **Example**

The following example shows how to import an OSS instance using an import block:

1.  Create a working directory. In the directory, create a configuration file named main.tf. Write an import block to specify the ID and address of the resource to import.
    
    ```
    import {
      to = alicloud_oss_bucket.default
      id = "oss-bucket-import"
    }
    ```
    
2.  Initialize the runtime environment.
    
    ```
    terraform init
    ```
    
3.  Run the `terraform plan` command to preview the resource template to be imported. Use the `-generate-config-out` parameter to automatically generate the template.
    
    ```
    terraform plan -generate-config-out=generated.tf
    ```
    
    The following information is displayed:
    
    ```
    alicloud_oss_bucket.default: Preparing import... [id=oss-bucket-import]
    alicloud_oss_bucket.default: Refreshing state... [id=oss-bucket-import]
    
    Terraform will perform the following actions:
    
      # alicloud_oss_bucket.default will be imported
      # (config will be generated)
        resource "alicloud_oss_bucket" "default" {
            acl               = "private"
            bucket            = "oss-bucket-import"
            creation_date     = "2024-11-22"
            extranet_endpoint = "oss-cn-beijing.aliyuncs.com"
            id                = "oss-bucket-import"
            intranet_endpoint = "oss-cn-beijing-internal.aliyuncs.com"
            location          = "oss-cn-beijing"
            owner             = "15119****"
            redundancy_type   = "ZRS"
            resource_group_id = "rg-acfmzaq*****"
            storage_class     = "Standard"
            tags              = {}
    
            access_monitor {
                status = "Disabled"
            }
        }
    
    Plan: 1 to import, 0 to add, 0 to change, 0 to destroy.
    ╷
    │ Warning: Config generation is experimental
    │ 
    │ Generating configuration during import is currently experimental, and the generated configuration
    │ format may change in future versions.
    ╵
    
    ─────────────────────────────────────────────────────────────────────────────────────────────────────
    
    Terraform has generated configuration and written it to generated.tf. Please review the configuration
    and edit it as necessary before adding it to version control.
    
    Note: You didn't use the -out option to save this plan, so Terraform can't guarantee to take exactly
    these actions if you run "terraform apply" now.
    ```
    
4.  After you confirm the plan, run the `terraform apply` command to perform the import.
    
    ```
    terraform apply 
    ```
    
    Enter yes when prompted. The following output indicates that the import is successful:
    
    ```
    ......
    
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.
    
      Enter a value: yes
    
    alicloud_oss_bucket.default: Importing... [id=oss-bucket-import]
    alicloud_oss_bucket.default: Import complete [id=oss-bucket-import]
    
    Apply complete! Resources: 1 imported, 0 added, 0 changed, 0 destroyed.
    ```
    

### **The Terraformer tool**

In addition to native Terraform features, you can use the open-source tool [Terraformer](https://github.com/GoogleCloudPlatform/terraformer) to quickly batch import resources from your account into Terraform templates. The open-source Terraformer supports only a subset of resources from each cloud provider. Providers must perform custom development to add support for their specific resources.

You can use the Terraformer tool in two ways:

1.  **Open-source Terraformer**: The original version of Terraformer, which supports resource import from multiple cloud providers.
    
2.  **Alibaba Cloud Terraformer**: An enhanced version of Terraformer that supports resource import only from Alibaba Cloud.
    

Feature

Open-source Terraformer

Alibaba Cloud Terraformer

View the list of supported products for import

❌

✅

View the list of supported resource types for import

❌

✅

Filter by region

✅

✅

Filter by excluding specified regions

❌

❌

Filter by zone

❌

✅

Filter by excluding specified zones

❌

❌

Filter by product

❌

✅

Filter by excluding specified products

❌

✅

Filter by resource type

✅

✅

Filter by excluding specified resource types

✅

✅

Filter by a list of resource IDs

✅

✅

Filter by excluding a specified list of resource IDs

❌

❌

Filter by resource name

✅

✅

Filter by resource group

✅

✅

Filter by tag

✅

✅

Automatically create resource dependencies

❌

✅

Automatically generate variables

❌

✅

Automatically generate outputs

❌

❌

#### **Open-source Terraformer**

##### **Prerequisites**

1.  Download and install Terraformer
    
    The open-source Terraformer deployment package is available as a comprehensive package for all providers or as individual packages for each provider. Download the package that you need. The following examples show how to download the package on Linux and macOS. For more information, see [Installation](https://github.com/GoogleCloudPlatform/terraformer?tab=readme-ov-file#installation).
    
    -   Linux users
        
    
    ```
    export PROVIDER=all
    curl -LO "https://github.com/GoogleCloudPlatform/terraformer/releases/download/$(curl -s https://api.github.com/repos/GoogleCloudPlatform/terraformer/releases/latest | grep tag_name | cut -d '"' -f 4)/terraformer-${PROVIDER}-linux-amd64"
    chmod +x terraformer-${PROVIDER}-linux-amd64
    sudo mv terraformer-${PROVIDER}-linux-amd64 /usr/local/bin/terraformer
    ```
    
    -   macOS users
        
    
    ```
    export PROVIDER=all
    curl -LO "https://github.com/GoogleCloudPlatform/terraformer/releases/download/$(curl -s https://api.github.com/repos/GoogleCloudPlatform/terraformer/releases/latest | grep tag_name | cut -d '"' -f 4)/terraformer-${PROVIDER}-darwin-amd64"
    chmod +x terraformer-${PROVIDER}-darwin-amd64
    sudo mv terraformer-${PROVIDER}-darwin-amd64 /usr/local/bin/terraformer
    ```
    
2.  Dependencies
    
    1.  Grant the current account read-only permissions for the relevant resources.
        
    2.  Install Terraform
        
        **Note**
        
        You can skip this step if you run the command in Cloud Shell.
        
        For more information, see [Install and configure Terraform](/help/en/terraform/install-and-configure-terraform-locally).
        
    3.  Download the relevant provider. You can configure the provider in one of the following two ways:
        
        -   Initialize the provider in the directory from which you run the Terraformer command.
            
        -   Download the provider to the ~/.terraform.d/plugins/ path.
            
    4.  Configure access credentials. Terraformer currently supports authentication only by reading a local profile. By default, the first credential in the profile is used for the import. For more information about how to configure Alibaba Cloud access credentials, see [Configure credentials](/help/en/cli/configure-credentials).
        

##### **Usage**

The following example uses terraformer-all-darwin-amd64 v0.8.24.

Terraformer supports four commands: `help, import, plan, and version`.

1.  help: Displays details about a command.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9087410671/p903019.png)
    
2.  version: Displays the current version number.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9087410671/p903018.png)
    
3.  import: Imports resources for a specified provider.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9087410671/p903020.png)
    
4.  plan: Previews the resources to be imported for a specified provider.
    

##### **Example**

The following example shows how to import all Alibaba Cloud VPCs in the China (Hangzhou) region.

1.  Create a directory to store the imported templates and state files.
    
    ```
    mkdir example && cd example
    ```
    
2.  Run the following command:
    
    ```
    terraformer-all-darwin-arm64 import alicloud --resources=vpc --regions=cn-hangzhou --path-pattern={output} --path-output=./     
    ```
    
    -   `--resources`: Specifies the collection of resources to import.
        
    -   `--regions`: Specifies the region where the resources are located.
        
    -   `--path-pattern`: Specifies the pattern for the generated directory structure.
        
    -   `--path-output`: Specifies the output path for the generated files.
        
3.  The generated template files are as follows. By default, the region information is added to the directory path. To compress all resource templates into a single file, specify the `--compact` parameter. This parameter outputs all resources to the `resources.tf` file.
    
    ```
    └── cn-hangzhou
        ├── outputs.tf
        ├── provider.tf
        ├── terraform.tfstate
        ├── variables.tf
        ├── vpc.tf
        └── vswitch.tf
    
    2 directories, 6 files
    ```
    
4.  If your local Terraform version is `>=0.13.0`, you must run the following command to modify the state file for compatibility with the new Terraform version.
    
    ```
    terraform state replace-provider -auto-approve "registry.terraform.io/-/alicloud" "aliyun/alicloud"
    ```
    

#### **Alibaba Cloud Terraformer - aliterraformer (Recommended)**

aliterraformer is based on the open-source Terraformer and adds support for more resources. It also enhances the configuration of access credentials and the import dimension features.

##### **Prerequisites**

1.  Download and install
    
    aliterraformer is stored in Alibaba Cloud Object Storage Service (OSS). You can download it from the following locations:
    
    ## macOS
    
    ```
    # amd64
    wget https://terraform-share.oss-cn-hangzhou.aliyuncs.com/aliterraformer/aliterraformer_darwin_amd64.zip
    
    # arm64
    wget https://terraform-share.oss-cn-hangzhou.aliyuncs.com/aliterraformer/aliterraformer_darwin_arm64.zip
    ```
    
    ## Linux
    
    ```
    # amd64
    wget https://terraform-share.oss-cn-hangzhou.aliyuncs.com/aliterraformer/aliterraformer_linux_amd64.zip
    
    # arm
    wget https://terraform-share.oss-cn-hangzhou.aliyuncs.com/aliterraformer/aliterraformer_linux_arm.zip
    
    # arm64
    wget https://terraform-share.oss-cn-hangzhou.aliyuncs.com/aliterraformer/aliterraformer_linux_arm64.zip
    ```
    
    ## Windows
    
    ```
    # amd64
    wget https://terraform-share.oss-cn-hangzhou.aliyuncs.com/aliterraformer/aliterraformer_windows_amd64.zip
    
    # 386
    wget https://terraform-share.oss-cn-hangzhou.aliyuncs.com/aliterraformer/aliterraformer_windows_386.zip
    ```
    
    For example, on macOS, decompress the file after downloading:
    
    ```
    unzip aliterraformer_darwin_amd64.zip
    chmod +x aliterraformer
    sudo mv aliterraformer /usr/local/bin/aliterraformer
    ```
    
2.  Dependencies
    
    Similar to the open-source Terraformer, you must prepare the terraform and terraform-provider-alicloud files and configure access control.
    
    1.  Grant read-only permissions for the relevant resources to the Resource Access Management (RAM) account.
        
    2.  Install Terraform
        
        For more information, see [Install and configure Terraform](/help/en/terraform/install-and-configure-terraform-locally). You can skip this step if you run the command in Cloud Shell.
        
    3.  Download terraform-provider-alicloud
        
        You can set the provider version for the import. The structure of the cache directory created by the init command is different for versions before v0.13.0 compared to versions v0.13.0 and later. The following example shows how to read the directory for versions v0.13.0 and later:
        
        ```
        # 1. Set using the TF_DATA_TFER_DIR environment variable
        <$TF_DATA_TFER_DIR>/providers/registry.terraform.io/aliyun/alicloud/1.239.0/darwin_arm64/terraform-provider-alicloud_v1.239.0
        
        # 2. Set in the hidden directory of the current working directory
        .terraform/providers/registry.terraform.io/aliyun/alicloud/1.239.0/darwin_arm64/terraform-provider-alicloud_v1.239.0
        
        # 3. Set in the hidden directory of the user's root directory
        <HOME>/.terraform.d/plugins/registry.terraform.io/aliyun/alicloud/1.239.0/darwin_arm64/terraform-provider-alicloud_v1.239.0
        ```
        
    4.  Configure access credentials
        
        In addition to using [profiles](/help/en/cli/configure-credentials), you can set access credentials in aliterraformer using environment variables and command parameters:
        
        ```
        # 1. Using the ALICLOUD_ACCESS_KEY and ALICLOUD_SECRET_KEY environment variables
        $ export ALICLOUD_ACCESS_KEY=xxxx
        $ export ALICLOUD_SECRET_KEY=xxxxx
        
        # 2. By passing the --access-key and --secret-key command parameters
        $ aliterraformer import alicloud --access-key=xxxx --secret-key=xxx ...
        
        # 3. By setting and passing the AK through the profile mechanism
        $ aliterraformer import alicloud --profile=default ...
        ```
        

##### **Usage**

aliterraformer supports five commands: `help, version, products, resources, import`. It adds the `products, resources` commands to the original open-source Terraformer.

1.  help: View details about the supported commands.
    
    ```
    aliterraformer help
    ```
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9087410671/p903024.png)
    
2.  version: View the current Terraformer version.
    
    ```
    aliterraformer version
    ```
    
3.  products: View the list of products that the current version supports for import.
    
    ```
    aliterraformer products
    ```
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9087410671/p903025.png)
    
4.  resources: View the list of resources for a product that the current version supports for import. Use `-p` to specify the product.
    
    ```
    aliterraformer resources -p <productName>
    ```
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9087410671/p903026.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9087410671/p903027.png)
    
5.  import: Performs the import operation. When you import Alibaba Cloud resources, you must specify alicloud. Run the following command to view the parameters supported for importing Alibaba Cloud resources:
    
    ```
    aliterraformer import alicloud -h
    ```
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9087410671/p903028.png)
    
    When you perform an import, you must first define the collection of resources to import. You can then filter these resources and extract specific properties as parameters.
    
    -   Build a resource collection:
        
        The import command provides four flags to define the scope of resources to import: <--products>, <--resources>, <--excludes-products>, and <--excludes>. You can combine these flags to build a resource collection. The following examples show how to use these flags:
        
        -   Import specific resources
            
            ```
            # Import a VPC, a vSwitch, and an ECS instance
            aliterraformer import alicloud -r=vpc,vswitch,instance
            ```
            
        -   Import specific products
            
            ```
            # Import all resources under the ACK and ALB products
            aliterraformer import alicloud --products=ACK,ALB
            ```
            
        -   Import specific products and resources
            
            ```
            # Import all resources under the ACK and ECS products, and all VPCs and vSwitches
            aliterraformer import alicloud --products=ACK,ECS -r=vpc,vswitch
            ```
            
        -   Import specific products, but exclude some resources within those products
            
            ```
            # Import all resources under ACK except alicloud_cs_kubernetes
            aliterraformer import alicloud --products=ACK --excludes=cs_kubernetes
            ```
            
        -   Import all resources from all products
            
            ```
            # Entering ALL for products means all products
            aliterraformer import alicloud --products=ALL
            ```
            
        -   Import all resources from all products, but exclude specific products
            
            ```
            # Import all products except VPNGateway and WAF
            aliterraformer import alicloud --products=ALL --excludes-products=VPNGateway,WAF
            ```
            
        -   Import all resources from all products, but exclude specific products and resources
            
            ```
            # Import all products except VPNGateway and WAF, and exclude the alicloud_cs_kubernetes resource
            aliterraformer import alicloud --products=ALL --excludes-products=VPNGateway,WAF --excludes=cs_kubernetes
            ```
            
    -   Filter resources
        
        The format for this parameter is `--filter=Type1.AttrKey=AttrValue1;AttrValue2,Type2.AttrKey=AttrValue1;AttrValue2`. If you omit Type, the filter condition applies to all resources.
        
        -   Import a VPC with the ID vpc-123
            
            ```
            # To specify multiple values, separate them with semicolons: --filter="vpc.id=vpc-123;vpc-456"
            aliterraformer import alicloud -r=vpc --filter="vpc.id=vpc-123"
            ```
            
        -   Import a VPC and a vSwitch that are both named tf-example
            
            ```
            aliterraformer import alicloud -r=vpc,vswitch --filter="vpc.vpc_name=tf-example,vswitch.vswitch_name=tf-example"
            ```
            
        -   Import a VPC and an ECS instance that both belong to the resource group rg-12345
            
            ```
            aliterraformer import alicloud -r=vpc,instance --filter="resource_group_id=rg-12345"
            ```
            
    -   Extract properties as variables using output-variables
        
        The format for this parameter is `r1:attr1,attr2;r2:attr1,attr2,attr3`.
        
        -   Extract vpc\_id and vswitch\_id from an ECS instance as variables
            
            ```
            aliterraformer import alicloud -r=instance --output-variables="instance:vpc_id,vswitch_id"
            ```
            

##### **Example**

The following example shows how to import a VPC, a vSwitch, and an ECS instance with the VPC ID `vpc-12345` in the China (Hangzhou) region, and extract the zone\_id of the vSwitch as a variable:

1.  Create a directory to store the imported templates and state files.
    
    ```
    mkdir example && cd example
    ```
    
2.  Construct the import command.
    
    ```
    aliterraformer import alicloud \
        --regions=cn-hangzhou \
        -r=vpc,vswitch,instance \
        --filter="vpc.id=vpc-12345,vswitch.vpc_id=vpc-12345,instance.vpc_id=vpc-12345" \
        --output-variables="vswitch:zone_id" \
        --path-output=example               \
        --path-pattern={output}            \
        --compact
    ```
    
    -   `--path-output`: Specifies the import folder.
        
    -   `--path-pattern`: Specifies the directory structure format for the imported resource templates. The default format is `{output}/{provider}/{service}/`. Other available formats include `{output}/{provider}/` and `{output}/`. For example, if you specify `--path-pattern={output}`, all templates are placed in a single folder.
        
    -   `--compact`: If this parameter is not specified, resources are stored in separate `{service}.tf` files. If this parameter is specified, all resources are stored in the `resources.tf` file.
        
3.  After the import, the following files are generated in the example directory:
    
    ```
    .
    ├── outputs.tf
    ├── provider.tf
    ├── resources.tf
    ├── terraform.tfstate
    └── variables.tf
    ```
    
    If you do not specify `--path-pattern={output}`, the directory structure is as follows:
    
    ```
    .
    └── alicloud
        ├── instance
        │   ├── provider.tf
        │   ├── terraform.tfstate
        │   └── variables.tf
        ├── vpc
        │   ├── outputs.tf
        │   ├── provider.tf
        │   ├── terraform.tfstate
        │   ├── variables.tf
        │   └── vpc.tf
        └── vswitch
            ├── outputs.tf
            ├── provider.tf
            ├── terraform.tfstate
            ├── variables.tf
            └── vswitch.tf
    ```
    
4.  If your local Terraform version is `>=0.13.0`, you must run the following command to modify the state file to make it compatible with the new Terraform version.
    
    ```
    terraform state replace-provider -auto-approve "registry.terraform.io/-/alicloud" "aliyun/alicloud"
    ```
    

## Feedback and suggestions

If you have any questions or suggestions about this tutorial, you can communicate with our engineers in the DingTalk group (Group ID: 34240022836). You can also submit an issue on the Alibaba Cloud [Terraform Provider GitHub](https://github.com/aliyun/terraform-provider-alicloud/issues) page. We will address your feedback.
