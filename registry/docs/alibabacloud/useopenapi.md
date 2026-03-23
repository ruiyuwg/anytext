CloudSSO provides a console for visual operations and multiple methods for calling API operations, including OpenAPI Explorer, Alibaba Cloud SDKs, and Alibaba Cloud CLI. To improve your development efficiency when you use CloudSSO, we recommend that you select appropriate operations and integration method based on your business requirements.

## OpenAPI Explorer

Alibaba Cloud provides OpenAPI Explorer for developers to understand and use the API operations of various Alibaba Cloud services in a quick and efficient manner. OpenAPI Explorer integrates multiple features related to API operations, including intelligent search, documentation, online debugging, SDK download, sample code, error diagnostics, and call statistics. In OpenAPI Explorer, you can call the API operations of Alibaba Cloud services and view API requests and responses. In addition, OpenAPI Explorer automatically generates the corresponding SDK sample code to facilitate the use of Alibaba Cloud services. For more information, see [What is an API?](/help/en/openapi/what-is-openapi)

### API versions

Alibaba Cloud OpenAPI Explorer manages the versions of Alibaba Cloud service APIs by version number. For example, CloudSSO provides the API of the `2021-05-15` version. `2021-05-15` is an API version number instead of a date. `2021-05-15` is the up-to-date version of the CloudSSO API, which provides the latest public information about the API.

**API version**

**Description**

[2021-05-15](/help/en/cloudsso/developer-reference/api-cloudsso-2021-05-15-overview)

We recommend that you use this version.

### Online debugging

CloudSSO allows you to debug its API operations by using OpenAPI Explorer. Before you call API operations, take note of the following information provided by CloudSSO: API versions, endpoints, and integration methods.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3435992271/p815208.png)

### Online debugging page

You can debug the API operations of CloudSSO on the [online debugging page](https://next.api.alibabacloud.com/api/cloudsso/2021-05-15).

### Endpoints

We recommend that you select an endpoint based on the region in which the resources you want to access reside to reduce latency. For example, in the China (Shanghai) region, the public endpoint of CloudSSO is `cloudsso.cn-shanghai.aliyuncs.com`, and the Virtual Private Cloud (VPC) endpoint of CloudSSO is `cloudsso-vpc.cn-shanghai.aliyuncs.com`.

-   A public endpoint can be globally accessed.
    
-   A VPC endpoint is accessible only from VPCs in a specific Alibaba Cloud region. VPC endpoints provide the following benefits:
    
    -   Higher security: A VPC endpoint can be accessed only from VPCs. This provides higher security and privacy.
        
    -   Faster response: Compared with a public endpoint, a VPC endpoint shortens the response time because data is transmitted over an internal network. In addition, you are free from issues such as network latency and bandwidth limits.
        
    -   Cost-efficiency: A VPC endpoint enables data transmission over an internal network.
        

For more information, see [Endpoints](/help/en/cloudsso/developer-reference/api-cloudsso-2021-05-15-endpoint).

### User identities

After you log on to OpenAPI Explorer with your Alibaba Cloud account, OpenAPI Explorer uses your Alibaba Cloud account to debug API operations online by default. An Alibaba Cloud account has permissions on all API operations. Security risks may arise if you use an Alibaba Cloud account to call API operations. We recommend that you call API operations or perform routine O&M as a Resource Access Management (RAM) user. Before you call API operations as a RAM user, grant the required permissions to the RAM user based on your business requirements. The RAM user must have the permissions to manage CloudSSO resources. For more information, see [Use RAM to enable access control](/help/en/cloudsso/security-and-compliance/use-ram-for-access-control/).

**Identity**

**Supported**

[Alibaba Cloud account](/help/en/openapi/identity#3948d68066ppy)

Yes

(Recommended) [RAM user](/help/en/openapi/identity#265242420egiy)

Yes

(Recommended) [RAM role](/help/en/openapi/identity#5b7a31e066wma)

Yes

### **References**

-   [Identity, credential, and authorization](/help/en/openapi/identity-credentials-and-authorization)
    
-   [Throttling and quota management](/help/en/openapi/throttling-and-quota-management)
    

## Integration methods

**Note**

SDKs can be easily integrated with your applications and cover the widest range of operations. We recommend that you use SDKs to call API operations.

### **Overview of integration methods**

**Integration method**

**Supported**

(Recommended) [Alibaba Cloud SDKs](#835a023190tjr)

Yes

[Alibaba Cloud CLI](#0502cd65b3vjy)

Yes

[Resource Orchestration Service (ROS)](#078970b5efp16)

No

[Custom API encapsulation](#42bdb6f71ebf3)

Yes

-   ### **Alibaba Cloud SDKs**
    
    -   Alibaba Cloud provides SDKs in multiple programming languages, including Java, C#, Go, Python, TypeScript, Node.js, PHP, and C++. You can integrate SDKs with your applications to directly call API operations. SDKs encapsulate information including the signature logic, timeout mechanism, and retry mechanism, and return structured response objects based on specifications. This provides convenience for developers. For more information, see [Alibaba Cloud SDKs](/help/en/sdk/product-overview/alibaba-cloud-sdk).
        
    -   OpenAPI Explorer allows you to use Alibaba Cloud SDKs to call the API operations of CloudSSO. For more information about the supported programming languages and how to install dependencies, visit [Cloud SSO](https://next.api.alibabacloud.com/api-tools/sdk/cloudsso).
        

-   ### **Alibaba Cloud CLI**
    
    -   Alibaba Cloud CLI allows you to run `aliyun` commands to interact with Alibaba Cloud services and manage cloud service resources. For more information, see [What is Alibaba Cloud CLI?](/help/en/cli/what-is-alibaba-cloud-cli)
        
    -   You can call CloudMonitor by using Alibaba Cloud CLI.
        

-   ### **ROS**
    
    -   ROS is an Alibaba Cloud service that can simplify the management of cloud computing resources. You can create a template to describe the cloud computing resources such as Elastic Compute Service (ECS) instances and ApsaraDB RDS instances that you want to manage, as well as the dependencies between the resources. ROS automatically creates and configures all the resources based on the template to implement automated deployment and O&M. For more information, see [What is ROS?](/help/en/ros/product-overview/what-is-ros)
        
    -   You cannot call the API operations of CloudSSO by using ROS.
        

-   ### **Custom API encapsulation**
    
    To make native HTTP calls, you must construct custom requests and sign the requests. For more information about the signature mechanism, see [List of operations by function](/help/en/cloudsso/developer-reference/api-cloudsso-2021-05-15-overview) and [Request syntax and signature method V3](/help/en/sdk/product-overview/v3-request-structure-and-signature).
    

## Usage notes

If an error is returned after you call an API operation of CloudSSO, you must check whether the request parameters and their values are valid based on the error code.

You can also use [Alibaba Cloud OpenAPI Diagnostics](https://next.api.alibabacloud.com/troubleshoot) to perform self-service diagnostics based on the returned request ID or SDK error information.

## References

-   CloudSSO is integrated with Alibaba Cloud Resource Directory to provide centralized multi-account identity management and access control. You can use CloudSSO to manage enterprise users who need to access Alibaba Cloud resources and grant access permissions on the accounts in a resource directory to the users in a centralized manner. You can also configure settings only once to implement single sign-on (SSO) access to Alibaba Cloud resources from an identity provider (IdP). For more information, see [What is CloudSSO?](/help/en/cloudsso/product-overview/what-is-cloudsso)
    
-   For more information about the programming languages supported by CloudSSO SDKs, see [SDK overview](/help/en/cloudsso/developer-reference/sdk-overview).
