ApsaraDB RDS provides a console for visual operations and multiple methods for calling API operations, including OpenAPI Explorer, Alibaba Cloud SDKs, and Resource Orchestration Service (ROS). OpenAPI Explorer supports online debugging of API operations. To improve development efficiency by using ApsaraDB RDS, we recommend that you use appropriate API operations and integration methods based on your business requirements.

## Overview of OpenAPI Explorer

Alibaba Cloud provides OpenAPI Explorer for developers to understand and use the API operations of various Alibaba Cloud services in a quick and efficient manner. OpenAPI Explorer integrates multiple features related to API operations, including intelligent search, documentation, online debugging, SDK download, sample code, error diagnosis, and call statistics. In OpenAPI Explorer, you can call API operations of Alibaba Cloud services and view API requests and responses. In addition, OpenAPI Explorer automatically generates the corresponding SDK sample code to facilitate the use of Alibaba Cloud services. For more information, see [What is an API?](/help/en/openapi/what-is-openapi)

### **Version description**

Alibaba Cloud APIs use version numbers to manage the versions of cloud service APIs. For example, ApsaraDB RDS supports the API of the `2014-08-15` version. `2014-08-15` is an API version number instead of a date. You are provided with the latest public information about the API. `2014-08-15` is the up-to-date version of the ApsaraDB RDS API.

**Version**

**Description**

[2014-08-15](https://next.api.alibabacloud.com/document/Rds/2014-08-15/overview)

Recommended

### Online debugging

ApsaraDB RDS provides features such as API debugging in OpenAPI Explorer. Before you call API operations, take note of the following information provided by ApsaraDB RDS: versions, endpoints, and integration methods.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4377410271/p811829.png)

### **Online debugging page**

Access [OpenAPI Explorer](https://api.alibabacloud.com/api/Rds/2014-08-15/TransformDBInstancePayType).

### **Endpoints**

You must use the endpoint based on the region of your instance to reduce latency. For example, if your instance resides in the China (Zhangjiakou) region, the public endpoint is `rds.cn-zhangjiakou.aliyuncs.com` and the virtual private cloud (VPC) endpoint is `rds-vpc.cn-zhangjiakou.aliyuncs.com`.

-   The public endpoint can be accessed globally.
    
-   VPCs are isolated from each other. Each VPC corresponds to a virtual network. The following list describes the benefits of VPC endpoints:
    
    -   High security: VPC endpoints can be accessed only within a VPC. This provides higher security and privacy.
        
    -   Fast response: VPC endpoints deliver faster responses than public endpoints because VPC endpoints enable data transmission over VPCs. In addition, problems such as network latency and bandwidth limitations can be avoided.
        
    -   Low cost: VPC endpoints are accessed over an internal network.
        

For more information, see [Endpoints](/help/en/rds/developer-reference/api-rds-2014-08-15-endpoint).

### Supported **user identities**

By default, after you log on to OpenAPI Explorer by using your Alibaba Cloud account, the Alibaba Cloud account is used to perform online debugging. An Alibaba Cloud account has permissions on all API operations. If you use an Alibaba Cloud account to call API operations, security risks may arise. We strongly recommend that you call API operations or perform routine O&M by using a RAM user. Before you call API operations by using a RAM user, grant the required permissions to the RAM user based on your business requirements. The RAM user must have the permissions to manage ApsaraDB RDS resources. For more information, see [Authorize a RAM user to manage ApsaraDB RDS instances](/help/en/rds/apsaradb-rds-for-mysql/authorize-a-ram-user-to-manage-apsaradb-rds-instances).

**Identity**

**Supported**

[Alibaba Cloud account](/help/en/openapi/identity#3948d68066ppy)

Yes

[RAM user](/help/en/openapi/identity#265242420egiy) (recommended)

Yes

[RAM role](/help/en/openapi/identity#5b7a31e066wma) (recommended)

Yes

### References

-   [Identity, credential, and authorization](/help/en/openapi/identity-credentials-and-authorization)
    
-   [Throttling and quota management](/help/en/openapi/throttling-and-quota-management)
    

## Integration methods

ApsaraDB RDS provides various integration methods such as Alibaba Cloud SDKs, Terraform, ROS, and custom encapsulation. You can select an integration method based on your business requirements.

**Calling method**

**Supported**

[Alibaba Cloud SDK](/help/en/openapi/alibaba-cloud-sdks)

Yes

[Alibaba Cloud CLI](/help/en/openapi/alibaba-cloud-cli)

Yes

[ROS](/help/en/openapi/ros)

Yes

[Terraform](/help/en/openapi/terraform)

Yes

Custom encapsulation

Yes

**Note**

SDKs are the most recommended method to call API operations because SDKs can be easily integrated.

-   ### **Alibaba Cloud SDKs**
    
    -   Alibaba Cloud provides SDKs in multiple programming languages, including Java, C#, Go, Python, TypeScript, Node.js, PHP, and C++. You can integrate SDKs into your applications to directly call API operations. SDKs encapsulate various information, including the data signing logic, timeout mechanism, and retry mechanism. SDKs return structured response objects based on specifications to facilitate development. For more information, see [Alibaba Cloud SDKs](/help/en/sdk/product-overview/alibaba-cloud-sdk).
        
    -   You can use Alibaba Cloud SDKs to call the API operations of ApsaraDB RDS. For more information about supported languages and dependencies, go to [OpenAPI Explorer](https://next.api.alibabacloud.com/api-tools/sdk/Rds?version=2014-08-15&language=java-tea).
        
-   ### **Alibaba Cloud CLI**
    
    -   Alibaba Cloud CLI allows you to run `aliyun` commands to interact with Alibaba Cloud services and manage cloud service resources. For more information, see [What is Alibaba Cloud CLI?](/help/en/cli/what-is-alibaba-cloud-cli)
        
    -   You can use Alibaba Cloud CLI to call the API operations of ApsaraDB RDS. For more information, see [Generate a command](/help/en/cli/sample-commands#29d4b47369202).
        
-   ### **ROS**
    
    -   ROS is an Alibaba Cloud service that simplifies the management of cloud computing resources. You can create a template to describe the cloud computing resources that you require, such as Elastic Compute Service (ECS) and ApsaraDB RDS instances, and the relationship between the resources. ROS automatically creates and configures all resources based on the template to implement automated deployment and O&M. For more information, see [What is ROS?](/help/en/ros/product-overview/what-is-ros)
        
    -   You can use ROS to call the API operations of ApsaraDB RDS. For more information about the supported resources and data, see [ApsaraDB RDS resources supported by ROS](/help/en/ros/developer-reference/rds/).
        
-   ### Custom encapsulated API calls
    
    To make native HTTP calls, you must construct custom requests and sign the requests. For more information about the signature mechanism, see [List of operations by function](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-overview) and [Request syntax and signature method V3](/help/en/sdk/product-overview/v3-request-structure-and-signature).
    

## **Usage notes**

If an error is returned after you call an API operation of ApsaraDB RDS, check whether the input parameters and values are valid based on the returned error code. For more information, see [Public error codes](/help/en/das/developer-reference/api-das-2020-01-16-errorcodes).

You can also use [Alibaba Cloud OpenAPI Diagnostics](https://next.api.alibabacloud.com/troubleshoot) to perform self-service diagnostics based on the returned request ID or SDK error information.
