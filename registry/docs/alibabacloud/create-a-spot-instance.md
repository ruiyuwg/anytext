Spot Instances are low-cost Elastic Compute Service (ECS) resources provided by Alibaba Cloud. Spot Instances are suitable for cost-sensitive tasks that can tolerate interruptions, such as data analysis, testing, and development. The price of a spot instance is lower than the price of a pay-as-you-go instance. A spot instance may be automatically released due to market price fluctuations or changes in resource supply and demand. This topic describes how to create spot instances in the ECS console, by using an SDK, and by using Terraform.

## Suggestions

When you create spot instances, take note of the following suggestions:

-   **Make a reasonable bid**. When you make a bid, take into account fluctuations of the market price. A reasonable bid price increases your chances of creating a spot instance and reduces the chances of releasing the instance whose bid price becomes lower than the market price. You must submit the bid price based on the requirements of your workloads.
    
    **Note**
    
    If you are unable to determine a bidding price for your spot instances, we recommend that you use the market price at the time of purchase as the bidding price.
    
-   **Ensure data persistence**. To prevent data loss, we recommend that you store important data in storage media that are not affected by the release of spot instances. Storage media include separately created cloud disks that are not released together with spot instances, Object Storage Service (OSS) buckets, and File Storage NAS (NAS).
    
-   **Monitor the instance status**. You can monitor the status of spot instances by using CloudMonitor and viewing instance metadata to determine whether the instances are interrupted and reclaimed. For more information, see [Perceive and respond to spot instance interruption events](/help/en/ecs/user-guide/query-the-interruption-events-of-preemptible-instances).
    
-   **Handle interruptions**. Spot Instances may be released because the market price exceeds your bid price or the inventory is insufficient. Test your application tolerance on unexpected releases of spot instances.
    

## Procedure

### In the ECS console

1.  Log on to the ECS console, go to the [instance buy page](https://ecs-buy.alibabacloud.com/wizard/#/), and then click the **Custom Launch** tab.
    
2.  Follow on-screen instructions to configure ECS resource settings based on your business requirements.
    
    Take note of the following parameters. For information about other parameters, see [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard).
    
    -   **Billing Method**: Select **Spot Instance**.
        
    -   **Instance Usage Duration**:
        
        -   **1 Hour**: Specify a 1-hour protection period for the spot instance. The instance is not automatically released within 1 hour after instance creation. When the protection period ends, the system checks the inventory and market price of the instance type in real time and determines whether to release the instance.
            
        -   **None**: No protection period is specified for the spot instance. Spot Instances that do not have a protection period are more cost-effective than spot instances that have a protection period.
            
    -   **Highest Price per Instance**:
        
        -   **Use Automatic Bid**: The market price at the time of purchase is used as the bid price.
            
        -   **Set Maximum Price**: Specify the maximum price that you are willing to pay for the instance type.
            
    -   **Instance Interruption Mode**: Specify how to handle the spot instance and related resources if interruption and reclamation are triggered.
        
        -   **Release**: The spot instance and the following resources are released: computing resources (vCPUs, GPUs, and memory), static public IP address (public IP address that is automatically assigned to the instance), public bandwidth, and cloud disks (system disk and data disks).
            
            **Warning**
            
            The spot instances are not suitable to store critical data. Setting **Instance Interruption Mode** to **Release** may cause data losses. We recommend that you disable the Release Disk with Instance attribute or create snapshots for disks on a regular basis to ensure data security.
            
        -   **Stop in Economical Mode**: The spot instance is stopped in economical mode. The system reclaims and no longer bills the computing resources (vCPUs, GPUs, and memory), static public IP address, and public bandwidth associated with the static public IP address of the instance. The system continues billing other resources of the spot instance, such as the cloud disks (system disk and data disks), elastic IP addresses (if any), and snapshots.
            
            **Note**
            
            A spot instance that is stopped in economical mode may fail to restart due to insufficient resources or market price fluctuations.
            
3.  On the right side of the page, review the instance configuration and set options such as the usage duration. Click **Create Order** to create the instance.
    

### Use ECS SDK for Java

### **Preparations**

1.  **Create an AccessKey pair**.
    
    Create an AccessKey pair for a Resource Access Management (RAM) user. An Alibaba Cloud account has all permissions on resources. If the AccessKey pair of your Alibaba Cloud account is leaked, your resources are exposed to risks. To minimize the risks, we recommend that you use the AccessKey pair of a RAM user. For information about how to create an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
2.  **Grant permissions on ECS to the RAM user**.
    
    Grant the required permissions on ECS resources to the RAM user that you want to use. The sample code provided in this topic creates instances and related resources. To grant the required permissions to run the sample code, we recommend that you attach the policy in the following table to the RAM user.
    
    **Cloud service**
    
    **Policy**
    
    ECS
    
    AliyunECSFullAccess
    
3.  **Configure access credentials**.
    
    Configure the AccessKey pair of the RAM user that you want to use in environment variables. The sample code provided in this topic reads the AccessKey pair from the environment variables and uses the AccessKey pair as credentials to access Alibaba Cloud services. For information about how to specify environment variables to configure an AccessKey pair, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
4.  **Install an ECS SDK**.
    
    Obtain ECS SDK 2.0 for Java. In this example, ECS SDK 2.0 for Java is installed by adding Maven dependencies. For information about other installation methods, see [Install ECS SDK for Java](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=java-tea&tab=primer-doc).
    
    Example on how to add Maven dependencies
    
    ```
    <dependencies>
        <dependency>
            <groupId>com.aliyun</groupId>
            <artifactId>ecs20140526</artifactId>
            <version>5.3.0</version>
        </dependency>
    </dependencies>
    ```
    

### **Initialize the client**

Alibaba Cloud SDKs support multiple access credentials, such as AccessKey pairs and Security Token Service (STS) tokens, to initialize clients. For more information, see [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials). In this example, an AccessKey pair is used to initialize a client.

```
import com.aliyun.ecs20140526.Client;
import com.aliyun.teaopenapi.models.Config;

public class Sample {
    private static Client createClient() throws Exception {
        Config config = new Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is configured. 
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is configured. 
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
                // Specify an endpoint. For information about endpoints, go to https://api.alibabacloud.com/product/Ecs.
                .setEndpoint("ecs.cn-hangzhou.aliyuncs.com");
        return new Client(config);
    }
}
```

### **Create a request object for the API operation**

Before you create a request object, view the parameters of the API operation that you want to call in the corresponding API documentation.

```
// Create a request object.
RunInstancesRequest request = new RunInstancesRequest()
    // Specify the region ID.
    .setRegionId("cn-hangzhou")
    // Set the billing method to pay-as-you-go.
    .setInstanceChargeType("PostPaid")
    // Set the bidding mode to automatic bidding.
    .setSpotStrategy("SpotAsPriceGo")
    // Set the instance usage duration to 1 hour, which ensures that the instance is not released within 1 hour after the instance is created.
    .setSpotDuration(1)
    // Specify the instance type.
    .setInstanceType("instanceType")
    // Specify the image ID.
    .setImageId("imageId")
    // Specify the ID of the security group.
    .setSecurityGroupId("securityGroupId")
    // Specify the vSwitch ID.
    .setVSwitchId("vSwitchId");
```

### **Initiate a call**

When you call an API operation from a client, you can specify runtime parameters, such as timeout and proxy parameters. For more information, see [Advanced settings](/help/en/sdk/developer-reference/advanced-configuration/).

```
// Specify the runtime parameters.
RuntimeOptions runtime = new RuntimeOptions();
// Call the RunInstances operation.
RunInstancesResponse response = client.runInstancesWithOptions(request, runtime);
System.out.println(response.body.toMap());
```

### **Handle exceptions**

ECS SDK for Java classifies exceptions into the following types:

-   TeaUnretryableException: In most cases, this type of exception is caused by network issues and is reported when the maximum number of retries is reached.
    
-   TeaException: In most cases, this type of exception is caused by business errors.
    

**We recommend that you properly handle exceptions by performing operations, such as reporting exceptions, logging exceptions, and performing retries, to ensure the robustness and stability of your system.**

### **Example**

```
import com.aliyun.ecs20140526.Client;
import com.aliyun.ecs20140526.models.RunInstancesRequest;
import com.aliyun.ecs20140526.models.RunInstancesResponse;
import com.aliyun.ecs20140526.models.RunInstancesResponseBody;
import com.aliyun.tea.TeaException;
import com.aliyun.tea.TeaUnretryableException;
import com.aliyun.teaopenapi.models.Config;
import com.aliyun.teautil.models.RuntimeOptions;
import com.alibaba.fastjson.JSONArray;

import java.util.Arrays;

public class Sample {
    private static Client createClient() throws Exception {
        Config config = new Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is configured. 
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is configured. 
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
                // Specify an endpoint. For information about endpoints, go to https://api.alibaba.com/product/Ecs.
                .setEndpoint("ecs.cn-hangzhou.aliyuncs.com");
        return new Client(config);
    }

    public static void main(String[] args) {
        try {
            Client client = Sample.createClient();
            // Create a request object.
            RunInstancesRequest request = new RunInstancesRequest()
                    // Specify the region ID.
                    .setRegionId("cn-hangzhou")
                    // Set the billing method to pay-as-you-go.
                    .setInstanceChargeType("PostPaid")
                    // Set the bidding mode to automatic bidding.
                    .setSpotStrategy("SpotAsPriceGo")
                    // Set the instance usage duration to 1 hour, which ensures that the instance is not released within 1 hour after the instance is created.
                    .setSpotDuration(1)
                    // Specify the instance type.
                    .setInstanceType("instanceType")
                    // Specify the image ID.
                    .setImageId("imageId")
                    // Specify the ID of the security group.
                    .setSecurityGroupId("securityGroupId")
                    // Specify the vSwitch ID.
                    .setVSwitchId("vSwitchId");
            // Specify the runtime parameters.
            RuntimeOptions runtime = new RuntimeOptions();
            // Call the RunInstances operation.
            RunInstancesResponse response = client.runInstancesWithOptions(request, runtime);
            System.out.println(response.body.toMap());
        } catch (TeaUnretryableException ue) {
            // Handle exceptions with caution in actual business scenarios and do not ignore exceptions in your project. In this example, exceptions are provided only for reference. 
            ue.printStackTrace();
            // Obtain the error message.
            System.out.println(ue.getMessage());
            // Obtain the request message and query the request information when an error occurs.
            System.out.println(ue.getLastRequest());
        } catch (TeaException e) {
            // Handle exceptions with caution in actual business scenarios and do not ignore exceptions in your project. In this example, exceptions are provided only for reference. 
            e.printStackTrace();
            // Obtain the error code.
            System.out.println(e.getCode());
            // Obtain the error message that contains the request ID.
            System.out.println(e.getMessage());
            // Obtain the detailed error information that is returned by the server.
            System.out.println(e.getData());
        } catch (Exception e) {
            // Handle exceptions with caution in actual business scenarios and do not ignore exceptions in your project. In this example, exceptions are provided only for reference. 
            e.printStackTrace();
        }
    }
}
```

### Use Terraform

**Note**

You can run the sample code with one click. Go to [Terraform Explorer](https://api.aliyun.com/terraform?resource=alicloud_instance&exampleId=201-use-case-create-ecs-preemptible-instance&activeTab=example) to run the sample code.

### **Preparations**

-   **Create an AccessKey pair**.
    
    An Alibaba Cloud account has all permissions on resources. To prevent AccessKey pair abuse, we recommend that you grant a RAM user the required minimal permissions and use the AccessKey pair. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) and [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
-   **Create a custom policy**.
    
    The following sample code provides an example of a custom policy. You can attach the policy to a RAM user to allow the RAM user to start ECS instances, view instance details, and view the history prices of ECS instance types in stock. For more information, see [Create custom policies](/help/en/ram/create-a-custom-policy).
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "ecs:RunInstances",
            "ecs:DescribeInstances",
            "ecs:DescribeSpotPriceHistory"
          ],
          "Resource": "*"
        }
      ]
    }
    ```
    

### **Required resources**

-   [alicloud\_vpc](https://registry.terraform.io/modules/alibaba/vpc/alicloud/1.11.0): creates a virtual private cloud (VPC).
    
-   [alicloud\_vswitch](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vswitch): creates a vSwitch in the VPC. The vSwitch is used to subnet instances in the VPC.
    
-   [alicloud\_security\_group](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/security_group): creates a security group named default and associates the security group with the VPC that you created.
    
-   [alicloud\_instance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/instance): creates an ECS instance.
    
-   [alicloud\_security\_group\_rule](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/security_group_rule): creates a security group rule.
    

### **Procedure**

1.  Open your browser and enter [https://shell.alibabacloud.com](https://shell.aliyun.com/) in the address bar to access Cloud Shell.
    
    For information about how to use Cloud Shell, see [Use Cloud Shell](/help/en/cloud-shell/using-the-cloud-command-line#task-1958468).
    
2.  Create and access a project directory named terraform in which Terraform resources are stored.
    
    ```
    mkdir terraform
    cd terraform
    ```
    
3.  Create a configuration file named main.tf in the preceding directory and add the following content to the file:
    
    main.tf
    
    ```
    provider "alicloud" {
      region = var.region
    }
    
    # The ID of the region in which you want to create the spot instance.
    variable "region" {
      type    = string
      default = "cn-beijing"
    }
    
    # The name of the VPC in which you want to create the spot instance.
    variable "vpc_name" {
      type    = string
      default = "tf_test_fofo"
    }
    
    # The CIDR block of the VPC.
    variable "vpc_cidr_block" {
      type    = string
      default = "172.16.0.0/12"
    }
    
    # The CIDR block of the vSwitch to which you want to connect the spot instance.
    variable "vswitch_cidr_block" {
      type    = string
      default = "172.16.0.0/21"
    }
    
    # The ID of the zone in which you want to create the spot instance.
    variable "availability_zone" {
      type    = string
      default = "cn-beijing-b"
    }
    
    # The name of the security group to which you want to add the spot instance.
    variable "security_group_name" {
      type    = string
      default = "default"
    }
    
    # The instance type of the spot instance.
    variable "instance_type" {
      type    = string
      default = "ecs.n2.small"
    }
    
    # The category of the system disk.
    variable "system_disk_category" {
      type    = string
      default = "cloud_efficiency"
    }
    
    # The operating system of the image that you want to use to create the spot instance.
    variable "image_id" {
      type    = string
      default = "ubuntu_140405_64_40G_cloudinit_20161115.vhd"
    }
    
    # The name of the spot instance.
    variable "instance_name" {
      type    = string
      default = "test_fofo"
    }
    
    # The public bandwidth of the spot instance.
    variable "internet_max_bandwidth_out" {
      type    = number
      default = 10
    }
    
    # The billing method of the spot instance.
    variable "instance_charge_type" {
      type    = string
      default = "PostPaid"
    }
    
    # The bidding policy of the spot instance.
    variable "spot_strategy" {
      type    = string
      default = "SpotAsPriceGo"
    }
    
    # The protection period of the spot instance.
    variable "spot_duration" {
      type    = number
      default = 0
    }
    
    # The port range of the inbound security group rule.
    variable "port_range" {
      type    = string
      default = "1/65535"
    }
    
    # The priority of the inbound security group rule.
    variable "priority" {
      type    = number
      default = 1
    }
    
    # The CIDR block of the inbound security group rule.
    variable "cidr_ip" {
      type    = string
      default = "0.0.0.0/0"
    }
    
    resource "alicloud_vpc" "vpc" {
      vpc_name       = var.vpc_name
      cidr_block = var.vpc_cidr_block
    }
    
    resource "alicloud_vswitch" "vsw" {
      vpc_id            = alicloud_vpc.vpc.id
      cidr_block        = var.vswitch_cidr_block
      zone_id = var.availability_zone
    }
    
    resource "alicloud_security_group" "default" {
      security_group_name   = var.security_group_name
      vpc_id = alicloud_vpc.vpc.id
    }
    
    resource "alicloud_instance" "instance" {
      availability_zone          = var.availability_zone
      security_groups = [alicloud_security_group.default.id]
      instance_type              = var.instance_type
      system_disk_category       = var.system_disk_category
      image_id                   = var.image_id
      instance_name              = var.instance_name
      vswitch_id                 = alicloud_vswitch.vsw.id
      internet_max_bandwidth_out = var.internet_max_bandwidth_out
      instance_charge_type       = var.instance_charge_type
      spot_strategy              = var.spot_strategy
      spot_duration              = var.spot_duration
    }
    
    resource "alicloud_security_group_rule" "allow_all_tcp" {
      type              = "ingress"
      ip_protocol       = "tcp"
      nic_type          = "intranet"
      policy            = "accept"
      port_range        = var.port_range
      priority          = var.priority
      security_group_id = alicloud_security_group.default.id
      cidr_ip           = var.cidr_ip
    }
    ```
    
4.  Run the `terraform init` command to initialize the configurations.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8859005371/p872082.png)
    
5.  Run the `terraform apply` command. During the execution, follow on-screen instructions to enter `yes` and press the **Enter** key. Wait until the command is complete. If the following command output is returned, the spot instance is created.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8859005371/p872083.png)
    
6.  Run the `terraform show` command to query the details of resources created by Terraform.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8859005371/p872093.png)
    

### **Delete resources**

If you no longer require the preceding resources created or managed by Terraform, run the following command to delete the resources. For more information, see [Common commands](/help/en/terraform/terraform-common-commands).

```
terraform destroy
```

### **References**

For information about Terraform, see [What is Terraform?](/help/en/terraform/what-is-terraform)

## **Create a spot instance by using other** **methods**

Alibaba Cloud provides services, such as Auto Scaling, Alibaba Cloud Container Service for Kubernetes (ACK), and auto provisioning groups, to help you efficiently create resources and perform automatic resource O&M.

### Auto Scaling

Auto Scaling is suitable for scenarios that require dynamic responses to business load fluctuations. Auto Scaling automatically combines pay-as-you-go and spot instance resources at an adjustable ratio and automatically replenishes instance resources if instances are released. For more information, see [Use spot instances to reduce costs](/help/en/auto-scaling/use-cases/cost-reduction-by-using-preemptible-instances).

### ACK

ACK is suitable for stateless and fault-tolerant applications. Kubernetes clusters require low-cost node pools. You can create spot instance-based node pools. For more information, see [Best practices for spot instance-based node pools](/help/en/doc-detail/410889.html).

### Auto provisioning group

Auto Provisioning allows you to quickly deliver ECS instance clusters. You need to only make simple configurations to automate the delivery of instances that use different billing methods (pay-as-you-go and spot instances) across instance types and zones. This improves the efficiency of delivering a large number of instances at the same time. For more information, see [Configure an auto provisioning group](/help/en/ecs/user-guide/configure-an-auto-provisioning-group).
