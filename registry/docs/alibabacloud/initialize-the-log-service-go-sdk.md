Client is a Go SDK client that you can use to access Simple Log Service. It provides various methods for you to create a project, create a Logstore, write logs, and read logs. To use Simple Log Service SDK for Go to initiate a request, you must initialize a Client instance and modify the default settings of the Client instance based on your business requirements.

## Prerequisites

-   Simple Log Service SDK for Go is installed. For more information, see [Install Simple Log Service SDK for Go](/help/en/sls/developer-reference/install-log-service-sdk-for-go#task-2098348).
    
-   The required access credentials are configured. For more information, see [Configure access credentials](/help/en/sls/developer-reference/configure-access-credentials1).
    
-   The required endpoint is obtained.
    
    An endpoint is used to access an Alibaba Cloud service. In most cases, an endpoint is a URL. An endpoint specifies information about a service, such as the access protocol, hostname, port, and path. Clients can use the information to access the service. For more information, see [Endpoints](/help/en/sls/developer-reference/service-entrance). Simple Log Service supports public endpoints, virtual private cloud (VPC) endpoints, and acceleration endpoints.
    
    -   **Public endpoints**: If data is pulled over a public Simple Log Service endpoint, read traffic over the Internet is generated. For more information about billing, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode) and [Billable items of pay-by-feature](/help/en/sls/billable-items). For more information about endpoints, see [Endpoints](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint).
        
    -   **VPC endpoints**: If you want to access Simple Log Service from other Alibaba Cloud services that reside in the same region as your project, we recommend that you use a VPC endpoint. For more information, see [Endpoints](/help/en/sls/developer-reference/service-entrance).
        
    -   **Acceleration** **endpoints**: If your server and Simple Log Service reside in different regions, such as in and outside China, network latency is high and transmission is unstable when data is transmitted over the Internet. In this case, you can use an acceleration endpoint. For more information, see [Use the transfer acceleration feature](/help/en/sls/transmission-acceleration).
        
    

## Initialize a Client instance

### **API operation**

```
// Use an AccessKey pair to initialize a Client instance.
func CreateNormalInterface(endpoint, accessKeyID, accessKeySecret, securityToken string) ClientInterface
// Use custom access credentials to initialize a Client instance.
func CreateNormalInterfaceV2(endpoint string, credentialsProvider CredentialsProvider) ClientInterface 
```

### Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

endpoint

String

Yes

The endpoint. For more information, see [Obtain an endpoint](#4a4e6f47e6i99).

`cn-hangzhou.log.aliyuncs.com`

accessKeyID

String

Yes

-   If you use an AccessKey pair to configure access credentials, set this parameter to the AccessKey ID of your Alibaba Cloud account or Resource Access Management (RAM) user. The AccessKey ID is used to identify the user. For more information, see [Configure access credentials](/help/en/sls/developer-reference/configure-sls-access-credentials).
    
    **Warning**
    
    The AccessKey pair of an Alibaba Cloud account has full permissions on resources. We recommend that you do not use the AccessKey pair of an Alibaba Cloud account to avoid risks caused by AccessKey pair leaks. We recommend that you use the AccessKey pair of a RAM user that is granted permissions based on the principle of least privilege.
    
-   If you use Security Token Service (STS) to configure access credentials, set this parameter to the value of the AccessKeyId parameter below the Credentials parameter that is returned by the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole#api-detail-21) operation.
    

LTAI\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

accessKeySecret

String

Yes

-   If you use an AccessKey pair to configure access credentials, set this parameter to the AccessKey secret of your Alibaba Cloud account or RAM user. The AccessKey secret is used to verify your AccessKey ID. For more information, see [Configure access credentials](/help/en/sls/developer-reference/configure-sls-access-credentials).
    
-   If you use STS to configure access credentials, set this parameter to the value of the AccessKeySecret parameter below the Credentials parameter that is returned by the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole#api-detail-21) operation.
    

yourAccessKeySecret

securityToken

String

No

-   This parameter is required only when you use STS to configure access credentials. Set this parameter to the value of the SecurityToken parameter below the Credentials parameter that is returned by the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole#api-detail-21) operation.
    
-   Alibaba Cloud STS does not impose limits on the length of STS tokens. We recommend that you do not specify a maximum length for STS tokens. For more information about how to obtain an STS token, see [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole).
    

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

### **Examples**

## AccessKey pair-based initialization (AuthV4 for signing)

```
package main

import (
  sls "github.com/aliyun/aliyun-log-go-sdk"
  "os"
)


func main() {
  // Specify a Simple Log Service endpoint. In this example, the Simple Log Service endpoint for the China (Hangzhou) region is used. Replace the parameter value with the actual endpoint. 
  endpoint := "cn-hangzhou.log.aliyuncs.com"
  
  // Obtain an AccessKey ID and an AccessKey secret from environment variables. 
  accessKeyId := os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")
  accessKeySecret := os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")
  
  // Create a Simple Log Service client. 
  provider := sls.NewStaticCredentialsProvider(accessKeyId, accessKeySecret, "")
  client := sls.CreateNormalInterfaceV2(endpoint, provider)
  // Use AuthV4 for signing.
  client.SetAuthVersion(sls.AuthV4)
  // Specify a region.
  client.SetRegion("cn-hangzhou")
}
```

## AccessKey pair-based initialization (AuthV1 for signing)

```
package main

import (
  sls "github.com/aliyun/aliyun-log-go-sdk"
  "os"
)

func main() {
  // Specify a Simple Log Service endpoint. In this example, the Simple Log Service endpoint for the China (Hangzhou) region is used. Replace the parameter value with the actual endpoint. 
  endpoint := "cn-hangzhou.log.aliyuncs.com"
  
  // Obtain an AccessKey ID and an AccessKey secret from environment variables. 
  accessKeyId := os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")
  accessKeySecret := os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")
  
  // Create a Simple Log Service client. 
  provider := sls.NewStaticCredentialsProvider(accessKeyId, accessKeySecret, "")
  client := sls.CreateNormalInterfaceV2(endpoint, provider)
}
```

## STS-based initialization

```
package main

import (
  sls "github.com/aliyun/aliyun-log-go-sdk"
  "os"
)

func main() {
  // Specify a Simple Log Service endpoint. In this example, the Simple Log Service endpoint for the China (Hangzhou) region is used. Replace the parameter value with the actual endpoint. 
  endpoint := "cn-hangzhou.log.aliyuncs.com"
  
  // In this example, obtain the value of the AccessKeyId parameter below the Credentials parameter that is returned by the AssumeRole operation. 
  accessKeyId := os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")
  // In this example, obtain the value of the AccessKeySecret parameter below the Credentials parameter that is returned by the AssumeRole operation. 
  accessKeySecret := os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")
   // In this example, obtain the value of the SecurityToken parameter below the Credentials parameter that is returned by the AssumeRole operation. 
  securityToken := ""
  
  // Create a Simple Log Service client. 
  provider := sls.NewStaticCredentialsProvider(accessKeyId, accessKeySecret, securityToken)
  client := sls.CreateNormalInterfaceV2(endpoint, provider)
}
```

## References

-   After you initialize a Client instance, you can call Simple Log Service SDK for Go to create a project and write logs. For more information, see [Get started with Simple Log Service SDK for Go](/help/en/sls/developer-reference/get-started-with-log-service-sdk-for-go).
