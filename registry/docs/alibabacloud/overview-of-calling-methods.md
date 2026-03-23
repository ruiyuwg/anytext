Alibaba Cloud provides developers with multiple methods to call API operations. You can select a method based on your business requirements.

## **Call methods**

**Note**

SDKs can be easily integrated into your application and cover the widest range of operations. We recommend that you use SDKs to call API operations.

-   ### **Alibaba Cloud SDKs**
    
    Alibaba Cloud provides SDKs in multiple programming languages, including Java, C#, Go, Python, TypeScript + Node.js, PHP, and C++. API operations can be directly called through the SDKs integrated into your applications. SDKs encapsulate information including signature logic, timeout mechanism, and retry mechanism and return structured response objects based on specifications, which provide convenience for developers.
    
    For more information, see [Alibaba Cloud SDKs](/help/en/sdk/product-overview/alibaba-cloud-sdk).
    
-   ### **Alibaba Cloud CLI**
    
    You can run `aliyun` commands to interact with Alibaba Cloud services and manage cloud service resources. For more information, see [What is Alibaba Cloud CLI?](/help/en/cli/what-is-alibaba-cloud-cli)
    
-   ### **ROS**
    
    Resource Orchestration Service (ROS) is an Alibaba Cloud service that can simplify the management of cloud computing resources. You can create a template to describe the cloud computing resources such as Elastic Compute Service (ECS) and ApsaraDB RDS instances that you need, as well as the relationship between the resources. ROS automatically creates and configures all the resources based on the template to implement automated deployment and O&M. For more information, see [What is ROS?](/help/en/ros/product-overview/what-is-ros).
    
-   ### **Terraform**
    
    Terraform is an open source tool that is used to preview, configure, and manage cloud infrastructure and resources in a secure and efficient manner. Terraform works by a similar mechanism as ROS. It calls API operations by interpreting templates. For more information, see [What is Terraform?](/help/en/terraform/what-is-terraform)
    

-   ### **Native HTTP calls**
    
    To make native HTTP calls, you must construct custom requests and sign the requests. For more information about the signature method, see [Request syntax and signature method](/help/en/sdk/product-overview/request-structure-and-signature/).
