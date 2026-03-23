This topic describes the integration solutions supported by ENS. You can call API operations to implement automatic integration with ENS, improving the development efficiency of using ENS.

## OpenAPI Explorer overview

Alibaba Cloud provides OpenAPI Explorer for you to efficiently understand and use the API operations of various Alibaba Cloud services. OpenAPI Explorer provides multiple features related to API operations, including intelligent search, documentation, online debugging, SDK download, sample code, error diagnostics, and call statistics. In OpenAPI Explorer, you can call the API operations of Alibaba Cloud services and view API requests and responses. In addition, OpenAPI Explorer automatically generates the corresponding SDK sample code to facilitate the use of Alibaba Cloud services.

For more information, see [Overview](/help/en/doc-detail/2391383.html).

### **Version description**

**API version**

**Description**

[2017-11-10](https://api.alibabacloud.com/document/Ens/2017-11-10/overview)

We recommend that you use this version.

## Online debugging

ENS provides features such as API debugging in OpenAPI Explorer. Before you call API operations, you must understand the following information provided by ENS: versions, endpoints, API styles, and calling methods.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9857757171/p795579.png)

### **Debugging**

API debugging page: [Debugging](https://api.alibabacloud.com/api/Ens/2017-11-10/).

### **Endpoints**

Use the endpoint of the Singapore region `ens.ap-southeast-1.aliyuncs.com`.

For more information, see [Endpoints](/help/en/ens/developer-reference/api-ens-2017-11-10-endpoint).

### **Identities**

By default, after you log on to OpenAPI Explorer with your Alibaba Cloud account, the account is used to perform online debugging. An Alibaba Cloud account has permissions on all API operations. If you use an Alibaba Cloud account to call API operations, security risks may arise. We recommend that you call API operations or perform routine O&M as a Resource Access Management (RAM) user. Before you call API operations as a RAM user, grant the required permissions to the RAM user based on your business requirements. The RAM user must have the permissions to manage ENS resources. For more information, see [System policies for ENS](/help/en/ens/security-and-compliance/ens).

**Identity**

**Supported**

[Alibaba Cloud account](/help/en/openapi/identity#3948d68066ppy)

Yes

[RAM user](/help/en/openapi/identity#265242420egiy) (recommended)

Yes

[RAM role](/help/en/openapi/identity#5b7a31e066wma) (recommended)

Yes

We recommend that you grant only sufficient permissions to a **_RAM user_** or **_RAM role_** and call an operation as the RAM user or by assuming the RAM role.

### References

-   [Identity, credential, and authorization](/help/en/openapi/identity-credentials-and-authorization)
    
-   [Throttling and quota management](/help/en/openapi/throttling-and-quota-management)
    

## **Integration methods**

### **Calling methods**

**Calling method**

**Supported**

[Alibaba Cloud SDKs](#507f3ec1c5tva) (recommended)

Yes

[Alibaba Cloud CLI](#4bbd1ba8f7xzv)

Yes

[Terraform](#ca9fbc29081q7)

Yes

[ROS](#0748151d51vk8)

Yes

[Custom API encapsulation](#b49f657224aig)

Yes

### **Alibaba Cloud SDKs**

-   Alibaba Cloud provides SDKs in multiple programming languages, including Java, C#, Go, Python, TypeScript, Node.js, PHP, and C++. You can integrate SDKs into your applications to directly call API operations. The SDKs encapsulate information such as the signature logic, timeout mechanism, and retry mechanism and return structured response objects based on specifications. This provides convenience for developers. For more information, see [Alibaba Cloud SDKs](/help/en/sdk/product-overview/alibaba-cloud-sdk).
    
-   You can use Alibaba Cloud SDKs to call ENS API operations. For more information about supported languages and dependencies, visit the [ENS SDK Center](https://api.alibabacloud.com/api-tools/sdk/Ens?version=2017-11-10&language=java-tea&tab=primer-doc).
    

### **Alibaba Cloud CLI**

-   You can use Alibaba Cloud CLI to call ENS API operations. For more information, see [Sample commands](/help/en/cli/sample-commands).
    
-   You can run `aliyun` commands to interact with Alibaba Cloud services and manage cloud service resources. For more information, see [What is Alibaba Cloud CLI?](/help/en/cli/what-is-alibaba-cloud-cli)
    

### **Terraform**

-   Terraform is an open source tool that is used to preview, configure, and manage cloud infrastructure and resources in a secure and efficient manner. Terraform works in a similar way as Resource Orchestration Service (ROS). Terraform calls API operations by interpreting templates. For more information, see [What is Terraform?](/help/en/terraform/what-is-terraform)
    
-   For information about how to use Terraform to orchestrate ENS resources, see [Resource integration by using Terraform](/help/en/ens/developer-reference/terraform-integration-example).
    
-   Supported resources
    
    You can use Terraform to manage ENS resources, including regular and data resources. For more information about Terraform, see [What is Terraform?](/help/en/terraform/what-is-terraform)
    
    **Resource type**
    
    **Resource name**
    
    **Description**
    
    Resources
    
    [alicloud\_ens\_disk](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ens_disk)
    
    Provides disks.ENS
    
    [alicloud\_ens\_disk\_instance\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ens_disk_instance_attachment)
    
    Provides disk instance attachments.ENS
    
    [alicloud\_ens\_eip](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ens_eip)
    
    Provides elastic IP addresses (EIPs).ENS
    
    [alicloud\_ens\_image](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ens_image)
    
    Provides image resources.ENS
    
    [alicloud\_ens\_instance](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ens_instance)
    
    Provides instances.ENS
    
    [alicloud\_ens\_instance\_security\_group\_attachment](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ens_instance_security_group_attachment)
    
    Provides instance security group attachments.ENS
    
    [alicloud\_ens\_key\_pair](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ens_key_pair)
    
    Provides key pairs.ENS
    
    [alicloud\_ens\_load\_balancer](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ens_load_balancer)
    
    Provides load balancers.ENS
    
    [alicloud\_ens\_network](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ens_network)
    
    Provides networks.ENS
    
    [alicloud\_ens\_security\_group](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ens_security_group)
    
    Provides security groups.ENS
    
    [alicloud\_ens\_snapshot](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ens_snapshot)
    
    Provides snapshots.ENS
    
    [alicloud\_ens\_vswitch](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/ens_vswitch)
    
    Provides vSwitches.ENS
    
    Data Sources
    
    [alicloud\_ens\_key\_pairs](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/data-sources/ens_key_pairs)
    
    Provides key pairs of the current Alibaba Cloud user.ENS
    

### **ROS**

-   ROS is an Alibaba Cloud service that can simplify the management of cloud computing resources. You can create a template to describe the required cloud computing resources such as Elastic Compute Service (ECS) and ApsaraDB RDS instances, and the dependencies between the resources. ROS automatically creates and configures all resources based on the template to implement automated deployment and O&M. For more information, see [What is ROS?](/help/en/ros/product-overview/what-is-ros).
    
-   You can use ROS to call API operations of ENS. Resources that can be orchestrated by using ROS include regular resources and data resources.
    
    -   Regular resources:
        
        -   [ALIYUN::ENS::Disk](/help/en/ros/developer-reference/aliyun-ens-disk): creates a pay-as-you-go or subscription data disk.
            
        -   [ALIYUN::ENS::DiskInstanceAttachment](/help/en/ros/developer-reference/aliyun-ens-diskinstanceattachment): attaches a data disk to an ENS instance.
            
        -   [ALIYUN::ENS::Instance](/help/en/ros/developer-reference/aliyun-ens-instance): creates an ENS instance.
            
        -   [ALIYUN::ENS::InstanceSecurityGroupAttachment](/help/en/ros/developer-reference/aliyun-ens-instancesecuritygroupattachment): adds an ENS instance to a security group.
            
        -   [ALIYUN::ENS::KeyPair](/help/en/ros/developer-reference/aliyun-ens-keypair): imports the public key of a Rivest-Shamir-Adleman (RSA)-encrypted key pair.
            
        -   [ALIYUN::ENS::Network](/help/en/ros/developer-reference/aliyun-ens-network): creates a virtual private cloud (VPC).
            
        -   [ALIYUN::ENS::NetworkAcl](/help/en/ros/developer-reference/aliyun-ens-networkacl): creates a network access control list (ACL).
            
        -   [ALIYUN::ENS::NetworkAclAssociation](/help/en/ros/developer-reference/aliyun-ens-networkaclassociation): associates an ACL with networks.
            
        -   [ALIYUN::ENS::SecurityGroup](/help/en/ros/developer-reference/aliyun-ens-securitygroup): creates a security group.
            
        -   [ALIYUN::ENS::Snapshot](/help/en/ros/developer-reference/aliyun-ens-snapshot): creates a snapshot.
            
        -   [ALIYUN::ENS::VSwitch](/help/en/ros/developer-reference/aliyun-ens-vswitch): creates a vSwitch.
            
    -   Data resources:
        
        -   [DATASOURCE::ENS::Instances](/help/en/ros/developer-reference/datasource-ens-instances): queries the details of ENS instances.
            
-   For information about how to use ROS to orchestrate ENS resources, see [Resource integration by using ROS](/help/en/ens/developer-reference/resource-orchestration-ros-integration-example).
    

### **Custom API encapsulation**

To make native HTTP calls, you must create custom requests and sign the requests. For more information about the signature mechanism, see [List of operations by function](/help/en/ens/developer-reference/api-ens-2017-11-10-overview) and [Request syntax and signature method V3](/help/en/sdk/product-overview/v3-request-structure-and-signature).

## **Usage notes**

If an error is returned after you call an API operation, check whether the request parameters and the parameter values are valid based on the returned error code. For more information, see [Service error codes](https://api.aliyun.com/document/Ens/2017-11-10/errorCode).

You can also use the [Alibaba Cloud OpenAPI diagnostics platform](https://next.api.alibabacloud.com/troubleshoot) to perform self-service diagnostics based on the returned request ID or SDK error message.
