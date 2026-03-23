Terraform is an open source tool that allows you to provision and manage your cloud infrastructure safely and efficiently. You can use Terraform to manage ENS resources. This topic describes how to use Terraform to create an ENS instance.

## **Procedure**

### **Grant required permissions to a RAM user**

You must grant a Resource Access Management (RAM) user the permissions required to execute a Terraform template. You must create a RAM user, obtain an AccessKey pair, and then attach a permission policy to the RAM user. The AccessKey pair is configured as an environment variable of Terraform. You need to attach the following policy to the RAM user:

-   **_AliyunENSFullAccess_**: permissions to manage ENS resources.
    

An Alibaba Cloud account has permissions on all API operations. Security risks may arise if you use an Alibaba Cloud account to call API operations. We recommend that you use a RAM user to call API operations or perform routine O&M. Before you call API operations as a RAM user, grant the required permissions to the RAM user based on your business requirements. The RAM user must have the permissions to manage Edge Node Service resources. For more information, see [System policies for ENS](/help/en/ens/security-and-compliance/ens).

### **Install Terraform**

-   For more information about how to install and configure Terraform on your PC, see [Install and configure Terraform in the local PC](/help/en/terraform/install-and-configure-terraform-locally).
    
    After Terraform is installed, you can open the command-line interface (CLI) and then enter `terraform version`. If version information is returned, Terraform is installed.
    
-   If you do not want to install Terraform, use [Cloud Shell](https://shell.aliyun.com) provided by Alibaba Cloud. Cloud Shell provides a built-in runtime environment for Terraform.
    

### **Create a template**

Create a file named `eip.tf` and enter the following content in the file for creating an instance.

```
variable "name" {
  default = "terraform-example"
}

resource "alicloud_ens_eip" "default" {
  description   = "EipDescription_autotest"
  bandwidth     = "5"
  isp           = "cmcc"
  payment_type  = "PayAsYouGo"
  ens_region_id = "cn-chenzhou-telecom_unicom_cmcc"
  eip_name      = var.name

  internet_charge_type = "95BandwidthByMonth"
}
```

### **Execute the template**

In this example, the following steps are performed on Windows. The specific methods to run commands may be different on other operating systems.

1.  Initialize and load required modules, such as the Provider module.
    
    ```
    terraform init
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9101955271/p817361.png)
    
2.  Check whether the template syntax is valid.
    
    ```
    terraform validate
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9101955271/p817733.png)
    
3.  Create an execution plan.
    
    ```
    terraform plan
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9101955271/p817363.png)
    
4.  Deploy the template.
    
    ```
    terraform apply
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9101955271/p817365.png)
    
5.  Enter yes to change resources. You can run the `terraform destroy` command to release the resources that are created from the template.
    
    ![39fc2c37-bdbe-49e4-9275-858410fad290 (2)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9101955271/p817422.png)
    
6.  After the instance is created, call API operations, use SDKs, or log on to the ENS console to view the instance.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9101955271/p818197.png)
