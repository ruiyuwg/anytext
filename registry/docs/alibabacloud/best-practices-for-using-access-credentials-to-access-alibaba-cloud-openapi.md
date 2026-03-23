Access credential leaks cause severe security risks to your resources and services that are deployed on the cloud. This topic describes how to use an access credential to call API operations of Alibaba Cloud in a secure way in various scenarios.

## What is an access credential?

An access credential is a set of information that is used for identity authentication. When you use a development tool such as an API, CLI, SDK, or Terraform to access Alibaba Cloud, you must provide a valid access credential to pass identity authentication. The following list describes common types of access credentials:

-   AccessKey pair: Each AccessKey pair consists of an AccessKey ID and an AccessKey secret. An AccessKey pair is a **permanent** access credential that Alibaba Cloud provides for Alibaba Cloud accounts and Resource Access Management (RAM) users. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
-   Security Token Service (STS) token: An STS token is a **temporary** access credential that Alibaba Cloud provides for a RAM role. You can configure a custom validity period and access permissions for an STS token. For more information, see [What is STS?](/help/en/ram/user-guide/what-is-sts)
    

## **Common access credential leaks**

-   Developers hardcode an AccessKey pair in business code. Developers who have the permissions to read the code repository can obtain the AccessKey pair. Some developers even upload the business code to open source communities or code hosting services. This causes even greater security risks.
    
-   Some developers include an AccessKey pair in the client code to allow the client to directly call API operations. Attackers can decompile the client code and obtain the AccessKey pair information.
    
-   The technical documentation or materials that are shared with others contain AccessKey pair information.
    
-   The sample code in product documentation contains AccessKey pair information.
    
-   The responses of API operations on which developers do not have management permissions contain AccessKey pair information.
    

## Secure methods to use access credentials

Secure methods to use an access credential mainly focus on reducing the exposure time and scope of access credentials. The following table lists the secure methods to use access credentials in common scenarios.

**Method**

**Scenario**

[Assume a RAM role by using an application that is deployed in an ACK cluster](#3094634cacy6v)

If your applications are deployed in a Container Service for Kubernetes (ACK) cluster, you can enable the RAM Roles for Service Accounts (RRSA) feature for the ACK cluster. This way, each application that is deployed in the ACK cluster can assume a different RAM role to call API operations of Alibaba Cloud.

[Assume an instance RAM role in ECS](#1c3a935f91wyo)

If your application is deployed on an Elastic Compute Service (ECS) instance, you can attach an instance RAM role that has specific permissions to the ECS instance. This way, the application that is deployed on the ECS instance can call API operations of Alibaba Cloud.

[Use an STS token for development and debugging](#2934d67399ifi)

If the R&D, O&M, and product personnel of an enterprise want to use an AccessKey pair for O&M, management, and debugging, we recommend that you implement role-based single sign on (SSO). This way, users of your enterprise can assume a corresponding RAM role and obtain the STS token to perform the required operations.

[Use an STS token in Function Compute](#da79b7a8d0xqg)

If your application deployed on Function Compute needs to access other Alibaba Cloud resources, you can associate functions with Function Compute RAM roles. This way, your application can use STS tokens to access cloud resources. This prevents security risks that may be caused by permanent access credentials.

[Configure system environment variables](#c5b37c90c78pz)

If the preceding solutions are not applicable, we recommend that you configure system environment variables to call API operations of Alibaba Cloud.

### Assume a RAM role by using an application that is deployed in an ACK cluster

#### Prerequisites

-   An Alibaba Cloud service that works with RAM is used. For more information, see [Services that work with RAM](/help/en/ram/product-overview/services-that-work-with-ram).
    
-   The RRSA feature supports only ACK clusters that run Kubernetes 1.22 and later. ACK clusters that support the RRSA feature include ACK Basic clusters, ACK Pro clusters, ACK Serverless Basic clusters, ACK Serverless Pro clusters, and ACK Edge Pro clusters.
    
-   Alibaba Cloud SDK V2.0 is installed.
    
-   The self-developed SDKs of services that use self-managed gateways are not installed.
    

#### **Working principles**

You can use the RRSA feature to allow different applications in an ACK cluster to assume different RAM roles. Applications can obtain STS tokens, use the tokens to assume specific RAM roles, and then access relevant cloud services. This enforces the principle of least privilege and allows applications to call API operations without the need to use AccessKey pairs, which prevents AccessKey pair leaks.

![3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6150531461/p357485.png)

The following steps show how an application accesses a cloud resource when RRSA is used to enforce access control:

1.  The tenant deploys a pod for which the feature of service account token volume projection is enabled.
    
2.  The ACK cluster creates a service account OpenID Connect (OIDC) token file and mounts the token file to the pod.
    
3.  The application in the pod uses the OIDC token file to call the AssumeRoleWithOIDC API operation of STS and obtain the STS token that is used to assume a RAM role.
    
    **Note**
    
    -   To enable the application to perform these operations, you must first create an OIDC identity provider and allow the service account used by the pod to assume the specified RAM role. For more information, see [AssumeRoleWithOIDC](/help/en/ram/api-assumerolewithoidc#doc-api-Sts-AssumeRoleWithOIDC).
        
    -   The OIDC token in the OIDC token file is a temporary token. We recommend that you configure the application to read the latest token from the OIDC token file. The cluster renews the token in the OIDC token file before the token expires.
        
    
4.  The application in the pod uses the STS token to assume the specified RAM role and then calls the API of the relevant cloud service.
    

#### **Configuration methods**

-   Enable the RRSA feature for an ACK cluster. For more information, see [Enable RRSA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#title-ymn-qe1-39y).
    
-   Use the RRSA feature in an ACK cluster. For more information, see [Work with RRSA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#title-d9o-gum-km2).
    

#### **Sample code**

[Alibaba Cloud SDK V2.0](/help/en/sdk/product-overview/differences-between-v1-and-v2-sdks) supports OIDC token authentication of RRSA. By default, all cloud service SDKs that support STS token authentication and are developed based on Alibaba Cloud SDK V2.0 support RRSA OIDC token authentication. The following table describes the supported SDK versions and demos.

**Programming language**

**Supported SDK version**

**Demo**

Go

[Alibaba Cloud Credentials for Go](https://github.com/aliyun/credentials-go) 1.2.6 and later. For more information, see [Method 6: Use an OIDC role ARN](/help/en/sdk/developer-reference/v2-manage-go-access-credentials#ec8021b053aqe).

[Demos of SDK for Go](https://github.com/AliyunContainerService/ack-ram-tool/tree/main/examples/rrsa/go-sdk)

Java

[Alibaba Cloud Credentials for Java](https://github.com/aliyun/credentials-java) 0.2.10 and later. For more information, see [Method 6: OIDCRoleArn](/help/en/sdk/developer-reference/v2-manage-access-credentials#ec8021b053aqe).

[Demos of SDK for Java](https://github.com/AliyunContainerService/ack-ram-tool/tree/main/examples/rrsa/java-sdk)

Python 3

[Alibaba Cloud Credentials for Python](https://github.com/aliyun/credentials-python) 0.3.1 and later. For more information, see [Method 6: OIDCRoleArn](/help/en/sdk/developer-reference/v2-manage-python-access-credentials#ec8021b053aqe).

[Demos of SDK for Python 3](https://github.com/AliyunContainerService/ack-ram-tool/tree/main/examples/rrsa/python3-sdk)

Node.js and TypeScript

[Alibaba Cloud Credentials for TypeScript/Node.js](https://github.com/aliyun/credentials-nodejs) 2.2.6 and later. For more information, see [Method 6: Use an OIDCRoleArn](/help/en/sdk/developer-reference/v2-manage-node-js-access-credentials#ec8021b053aqe).

[Demos of SDK for Node.js and SDK for TypeScript](https://github.com/AliyunContainerService/ack-ram-tool/tree/main/examples/rrsa/nodejs-sdk)

### **Assume an instance RAM role in ECS**

#### **Prerequisites**

-   An Alibaba Cloud service that works with RAM is used. For more information, see [Services that work with RAM](/help/en/ram/product-overview/services-that-work-with-ram).
    
-   Alibaba Cloud SDK V2.0 is installed.
    
-   The self-developed SDKs of services that use self-managed gateways are not installed.
    

#### **Working principles**

You can attach an instance Resource Access Management (RAM) role to an Elastic Compute Service (ECS) instance. Then, the ECS instance can use the Security Token Service (STS) temporary credential of the instance RAM role to access the APIs of other Alibaba Cloud services. The STS temporary credential is updated on a periodic basis. This ensures the security of your AccessKey pair and implements fine-grained access control and permissions management by using RAM.

![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6150531461/p357464.png)

The following list describes the process:

1.  An application accesses ECS instance metadata to obtain an STS token. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#section-rjh-18m-7kp).
    
2.  The application uses the STS token to access cloud resources. For more information, see [What is STS?](/help/en/ram/user-guide/what-is-sts)
    

#### **Configuration method**

Attach an instance RAM role to an ECS instance. For more information, see [Instance RAM roles](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance).

#### **Sample code**

Alibaba Cloud Credentials is a credential management tool provided by Alibaba Cloud for developers. You can use Alibaba Cloud Credentials to attach an instance RAM role to an ECS instance in a convenient manner. The following sample code provides an example on how to call the DescribeRegions operation of ECS.

**Programming language**

**References**

Go

[Go sample code](/help/en/sdk/developer-reference/v2-manage-go-access-credentials#1002ea404bkxm)

Java

[Java sample code](/help/en/sdk/developer-reference/v2-manage-access-credentials#1002ea404bkxm)

Python

[Python sample code](/help/en/sdk/developer-reference/v2-manage-python-access-credentials#98e26410587z9)

PHP

[PHP sample code](/help/en/sdk/developer-reference/v2-manage-php-access-credentials#98e26410587z9)

Node.js

[Node.js sample code](/help/en/sdk/developer-reference/v2-manage-node-js-access-credentials#98e26410587z9)

.NET

[.NET sample code](/help/en/sdk/developer-reference/v2-manage-net-access-credentials#98e26410587z9)

### **Use an STS token for development and debugging**

#### Scenario

If the R&D, O&M, and product personnel of an enterprise want to use an AccessKey pair for O&M, management, and debugging, we recommend that you implement role-based SSO. This way, users of your enterprise can assume a corresponding RAM role and obtain the STS token to perform the required operations.

#### **Configuration methods**

-   If a single Alibaba Cloud account is used, we recommend that you assign RAM roles to users by job responsibility. For more information, see [Overview](/help/en/ram/overview). The users can use the CLI tool saml2alibabacloud to obtain the STS token after authentication on the identity provider (IdP) side. For more information, see [saml2alibabacloud](https://github.com/aliyun/saml2alibabacloud).
    
-   If multiple Alibaba Cloud accounts are used, we recommend that you use CloudSSO to configure SSO for the accounts. For more information, see [Configure SSO](/help/en/cloudsso/user-guide/configure-sso). After the configuration is complete, users can use CLI to log on to CloudSSO and access Alibaba Cloud resources. For more information, see [Use Alibaba Cloud CLI to access log on to the CloudSSO user portal](/help/en/cloudsso/user-guide/use-alibaba-cloud-cli-to-access-cloudsso-and-alibaba-cloud-resources).
    

### **Use an STS token in Function Compute**

#### **Scenario**

If your application deployed on Function Compute needs to access other Alibaba Cloud resources and you hardcode the AccessKey pair of a RAM user in related functions, AccessKey pair leaks may occur, and O&M is difficult. In this case, you can attach RAM roles to the functions. This way, the application can use STS tokens to access cloud resources, and security risks from permanent access credentials are prevented.

#### **Solution architecture**

In the solution, function RAM roles in Function Compute are used to obtain and use temporary access credentials. The solution allows you to dynamically manage and temporarily grant access permissions. This prevents risks that are caused by long-term AccessKey pair exposure, and makes the system more secure and flexible. The administrator only needs to configure roles for functions and grant permissions to the roles one time. In subsequent operations, functions can dynamically obtain and use temporary access credentials in runtime. This simplifies O&M management.

The administrator creates a RAM role whose trusted entity is Function Compute and grants permissions to the RAM role. The permissions include the permissions that are required to access a specific cloud resource of a cloud service. Then, the administrator associates the created RAM role with a function in Function Compute. When your application attempts to obtain the temporary access credential from the function context, Function Compute calls the AssumeRole operation as a trusted Alibaba Cloud service to obtain the STS token from RAM or STS. Then, your application can use the obtained STS token to call an API operation of the cloud service. After the cloud service processes the request and returns the result, your application receives the result and performs subsequent operations.

#### **Configuration method**

For more information, see [Grant Function Compute permissions to access other Alibaba Cloud services](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-function-compute-permissions-to-access-other-alibaba-cloud-services).

### **Configure system environment variables**

#### **Configuration method**

Configure the `ALIBABA_CLOUD_ACCESS_KEY_ID` and `ALIBABA_CLOUD_ACCESS_KEY_SECRET` environment variables.

-   **Linux and macOS**
    
    Run the following commands:
    
    ```
    export ALIBABA_CLOUD_ACCESS_KEY_ID=<access_key_id>
    export ALIBABA_CLOUD_ACCESS_KEY_SECRET=<access_key_secret>
    ```
    
    Replace `<access_key_id>` with your AccessKey ID and `<access_key_secret>` with your AccessKey secret.
    
-   **Windows**
    
    1.  Create an environment variable file, add the `ALIBABA_CLOUD_ACCESS_KEY_ID` and `ALIBABA_CLOUD_ACCESS_KEY_SECRET` environment variables to the file, and then specify your AccessKey ID for ALIBABA\_CLOUD\_ACCESS\_KEY\_ID and your AccessKey secret for ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET.
        
    2.  Restart the Windows operating system.
        

#### **Sample code of Alibaba Cloud SDKs**

Alibaba Cloud SDKs allow you to configure the ALIBABA\_CLOUD\_ACCESS\_KEY\_ID and ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET environment variables to create a default access credential. When you call an API operation, the system reads the AccessKey pair from the default access credential and uses the AccessKey pair to complete authentication. The following sample code provides an example on how to call the DescribeRegions operation of ECS.

Programming language

References

Go

[Go sample code](/help/en/sdk/developer-reference/v2-manage-go-access-credentials#62bf90d04dztq)

Java

[Java sample code](/help/en/sdk/developer-reference/v2-manage-access-credentials#62bf90d04dztq)

Python

[Python sample code](/help/en/sdk/developer-reference/v2-manage-python-access-credentials#62bf90d04dztq)

PHP

[PHP sample code](/help/en/sdk/developer-reference/v2-manage-php-access-credentials#62bf90d04dztq)

Node.js

[Node.js sample code](/help/en/sdk/developer-reference/v2-manage-node-js-access-credentials#62bf90d04dztq)

.NET

[.NET sample code](/help/en/sdk/developer-reference/v2-manage-net-access-credentials#62bf90d04dztq)

#### **Common sample code**

For self-developed SDKs of services that use self-managed gateways, the following sample code provides an example on how to load environment variables by using Java:

```
import com.aliyun.credentials.Client;
import com.aliyun.credentials.models.Config;

public class DemoTest {
    public static void main(String[] args) throws Exception{
        Config config = new Config();
        // Which type of credential you want
        config.setType("access_key");
        // AccessKeyId of your ram user
        config.setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"));
        // AccessKeySecret of your ram user
        config.setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        Client client = new Client(config);
    }
}
```

## **Solutions to access credential leaks**

-   AccessKey pair leak: For more information, see [Remediate a compromised AccessKey pair](/help/en/ram/user-guide/solution-to-accesskey-leakage).
    
-   STS token leak: For more information, see [What do I do if an STS token is leaked?](/help/en/ram/support/faq-about-ram-roles-and-sts-tokens#section-sk9-r8u-eop)
    

## References

For more information about best practices for cloud security, see the following topics:

-   [Secure your cloud resources](/help/en/ram/use-cases/ensure-security-of-alibaba-cloud-resources)
    
-   [Detection of AccessKey pair leaks](/help/en/security-center/user-guide/detection-of-accesskey-pair-leaks)
    
-   [Manage and use RAM secrets](/help/en/kms/key-management-service/user-guide/manage-and-use-ram-secrets)
