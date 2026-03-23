Before you use a Terraform configuration file to define, preview, and deploy cloud infrastructure, you must install and configure Terraform.

## **Install Terraform**

This topic describes how to install Terraform by using an installation package in Linux or Windows.

1.  Download the Terraform installation package that suits your operating system from the [Terraform official website](https://www.terraform.io/downloads.html).
    
2.  Configure the Terraform runtime environment.
    
    ## Linux
    
    Run the following command to decompress the installation package to the /usr/local/bin directory:
    
    ```
    # Replace /terraform_1.9.5_linux_amd64.zip in the following command with the directory in which the installation package is stored.
    sudo unzip /terraform_1.9.5_linux_amd64.zip -d /usr/local/bin
    ```
    
    ## Windows
    
    1.  Decompress the installation package to a directory, such as D:\\tool\\terraform.
        
    2.  On the Windows desktop, right-click This PC and select Properties. On the page that appears, click Advanced system settings. In the System Properties dialog box, click Environment Variables on the Advanced tab.
        
    3.  In the Environment Variables dialog box, select Path in the System variables or User variables section and click Edit. In the dialog box that appears, enter the directory to which the Terraform installation package is decompressed, such as D:\\tool\\terraform, and click OK.
        
    
3.  Run the `terraform` command to check whether Terraform is installed.
    
    ```
    terraform
    ```
    
    If a list of available Terraform options is displayed, as shown in the following figure, the installation is complete.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4764464371/p737064.png)
    

## Configure Terraform identity authentication

Before you use Terraform to manage Alibaba Cloud infrastructure, you must pass Terraform Provider identity authentication. You can use Terraform to call Alibaba Cloud API operations and create and manage the infrastructure and resources of Alibaba Cloud only after you pass identity authentication. Alibaba Cloud Terraform Provider supports multiple authentication methods. For more information, see [Terraform identity authentication](/help/en/terraform/terraform-authentication).

In this example, the AccessKey pair of a Resource Access Management (RAM) user that is obtained from environment variables is used for identity authentication.

1.  Create an AccessKey pair for a RAM user. An Alibaba Cloud account has all permissions on resources. If the AccessKey pair of your Alibaba Cloud account is leaked, your resources are exposed to great risks. We recommend that you use the AccessKey pair of a RAM user. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
2.  Grant permissions to the RAM user based on the principle of least privilege and your business requirements. For more information, see [Create custom policies](/help/en/ram/create-a-custom-policy#task-glf-vwf-xdb).
    
3.  Create environment variables to store the identity information.
    
    ## Linux
    
    **Important**
    
    The temporary environment variables configured by using the export command are valid only for the current session. After you exit the session, the configured environment variables become invalid. To configure permanent environment variables, you can add the export command to the startup configuration file of your operating system.
    
    ```
    # AccessKey Id
    export ALICLOUD_ACCESS_KEY="<yourAccessKeyID>"
    # AccessKey Secret
    export ALICLOUD_SECRET_KEY="<yourAccessKeySecret>"
    # The region in which resources are deployed.
    export ALICLOUD_REGION="cn-beijing"
    ```
    
    ## Windows
    
    1.  On the Windows desktop, right-click This PC and select Properties. On the page that appears, click Advanced system settings. In the System Properties dialog box, click Environment Variables on the Advanced tab.
        
    2.  In the Environment Variables dialog box, click New in the System variables or User variables section. In the dialog box that appears, create the environment variables that are described in the following table.
        
        Variable
        
        Description
        
        Example
        
        ALICLOUD\_ACCESS\_KEY
        
        AccessKey Id
        
        yourAccessKeyID
        
        ALICLOUD\_SECRET\_KEY
        
        AccessKey Secret
        
        yourAccessKeySecret
        
        ALICLOUD\_REGION
        
        The region in which resources are deployed.
        
        cn-beijing
        
    

## **(Optional) Configure an acceleration solution for Terraform initialization**

After you write a Terraform configuration file, run the `terraform init` command in the directory in which the configuration file is stored. Terraform automatically loads the latest or specified Provider version based on the Provider and Provisioner information specified in the configuration file, or based on resources or data sources relevant to the Provider version.

If Terraform initialization times out due to factors such as network latency, you may fail to download the Provider version. To resolve the issue, you can configure an Alibaba Cloud image site. You can download Terraform Provider from the following sources: source = hashicorp/alicloud and source = aliyun/alicloud. Terraform CLI V0.13.2 and later support the configuration of network images. For more information, see [Configure an acceleration solution for Terraform initialization](/help/en/terraform/terraform-init-acceleration-solution-configuration).

## References

-   [Configuration Syntax](https://www.terraform.io/docs/configuration/syntax.html)
    
-   [Use Terraform in Cloud Shell](/help/en/terraform/use-terraform-to-quickly-create-resources)
