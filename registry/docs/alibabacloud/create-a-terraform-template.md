Terraform is available as a managed service in Resource Orchestration Service (ROS). You can create Terraform templates to define Alibaba Cloud, Amazon Web Services (AWS), and Microsoft Azure resources, specify resource parameters, and configure dependency relationships for resources.

## **Scenario**

If you want to create and manage resources of third-party cloud platforms such as AWS and Microsoft Azure on Alibaba Cloud, you can define the third-party resources and configure dependency relationships for the resources in a Terraform template. This helps you manage resources across cloud platforms in a convenient manner.

## Background information

For more information about the structure of Terraform templates, see [Structure of Terraform templates](/help/en/ros/user-guide/structure-of-terraform-templates#concept-1955528).

## Procedure

1.  Log on to the [ROS console](https://ros.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Templates** > **My Templates**.
    
3.  On the **My Templates** page, click **Create Template**.
    
4.  Set the **Template Type** parameter to **Terraform Template**.
    
5.  Create a Terraform template.
    
    The following section provides an example on how to create a Terraform template. In this example, a vSwitch is created in a virtual private cloud (VPC).
    
    1.  Create a file named main.tf in the `modules/vpc/` directory and enter the file content to create a VPC.
        
        1.  In the upper-right corner of the Directory section, click the **+** icon and select **Create Folder**.
            
        2.  In the **Create Folder** dialog box, enter modules and click OK. A folder named modules is created in the Directory section.
            
        3.  Move the pointer over the modules folder, click the **+** icon on the right side, and then select **Create Folder**.
            
        4.  In the **Create Folder** dialog box, enter `vpc` and click OK. A folder named `vpc` is created in the modules folder.
            
        5.  Move the pointer over the `vpc` folder, click the **+** icon on the right side, and then select **Create File**.
            
        6.  In the **Create File** dialog box, enter main.tf and click OK. A file named main.tf is created in the `vpc` folder.
            
        7.  Click the main.tf file and enter the following code in the right-side code editor to create a VPC:
            
            ```
            resource "alicloud_vpc" "vpc" {
              name       = "tf_test"
              cidr_block = "172.16.0.0/12"
            }
            output "vpc_id" {
              value = "${alicloud_vpc.vpc.id}"
            }
            ```
            
    2.  Edit the main.tf file in the root directory to create a vSwitch in the VPC.
        
        1.  Click the main.tf file in the root directory.
            
        2.  In the right-side code editor, enter the following code to create a vSwitch:
            
            ```
            module "my_vpc" {
              source      = "./modules/vpc"
            }
            resource "alicloud_vswitch" "vsw" {
              vpc_id            = "${module.my_vpc.vpc_id}"
              cidr_block        = "172.16.0.0/21"
              availability_zone = "cn-shanghai-b"
            }
            output "vsw_id" {
              value = "${alicloud_vswitch.vsw.id}"
            }
            ```
            
    
6.  In the lower-left corner of the **Create Template** page, choose **Save Template** > **Save as My Template**.
    
7.  In the **Save as My Template** dialog box, configure the **Template Name**, **Template Description**, **Resource Group**, and **Tag** parameters.
    
8.  Click **OK**.
    

## **References**

-   [Features and resources supported by Terraform in ROS](/help/en/ros/user-guide/ros-features-and-resources-supported-by-terraform)
    
-   [Methods and suggestions for Terraform code development](/help/en/ros/user-guide/methods-and-suggestions-for-terraform-code-development)
    
-   [Examples of Terraform templates](/help/en/ros/user-guide/examples-of-terraform-templates)
    
-   [Use Outputs to display Chinese descriptions and sort parameters](/help/en/ros/use-cases/use-outputs-to-display-chinese-descriptions-and-sort-parameters)
