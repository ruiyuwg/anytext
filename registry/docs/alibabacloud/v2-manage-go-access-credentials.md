When you use Alibaba Cloud SDKs, credential information, such as AccessKey pairs and Security Token Service (STS) tokens, is managed by the Credentials tool. This topic describes the credential types that the Credentials tool supports and how to configure them.

## **Background information**

A credential is a set of information that a user provides to prove their identity. When a user logs on to a system, they must provide the correct credentials to be authenticated. Common credential types include the following:

1.  The permanent AccessKey (AK) for an Alibaba Cloud account or a Resource Access Management (RAM) user. An AK is a key pair that consists of an AccessKey ID and an AccessKey secret.
    
2.  The temporary Security Token Service (STS) token for an Alibaba Cloud RAM role. This is a temporary identity credential with a custom time-to-live (TTL) and access permissions. For more information, see [What is STS?](/help/en/ram/user-guide/what-is-sts).
    
3.  A Bearer Token. This is a token type for authentication and authorization.
    

## Prerequisites

-   Go version 1.10.x or later is required to use the Credentials tool.
    
-   Use an Alibaba Cloud SDK for Go V2.0. For more information, see [Use Alibaba Cloud SDK for Go in an IDE](/help/en/sdk/developer-reference/use-alibaba-cloud-go-sdk-through-ide).
    

## Install the Credentials tool

If you have already installed the Credentials tool, you can skip this step. We recommend that you use the latest version of the Credentials dependency package to ensure that all credential types are supported. You can view information about all published versions in [Credentials](https://github.com/aliyun/credentials-go/releases).

You can install the Credentials tool in one of the following ways:

-   Method 1: You can run the `go get` command to download and install the tool.
    
    ```
    $ go get -u github.com/aliyun/credentials-go
    ```
    
-   Method 2: If you use `dep` to manage dependency packages, you can run the following command:
    
    ```
    dep ensure -add github.com/aliyun/credentials-go
    ```
    

## **Credentials tool configuration parameters**

The configuration parameters for the Credentials tool are defined in the `Config` struct of the `github.com/aliyun/credentials-go/credentials` package. The credential type is specified by the required `type` parameter. After you determine the credential type, you can select the appropriate parameters for that type. The following table describes the valid values for `type` and the parameters supported by each credential type. In the table, `√` indicates a required parameter, `-` indicates an optional parameter, and `×` indicates an unsupported parameter.

**Note**

Credential types and parameters not listed in the following table are no longer recommended for use.

**Type**

**access\_key**

**sts**

**ram\_role\_arn**

**ecs\_ram\_role**

**oidc\_role\_arn**

**credentials\_uri**

**bearer**

AccessKeyId: The ID of the access credential.

√

√

√

×

×

×

×

AccessKeySecret: The secret of the access credential.

√

√

√

×

×

×

×

SecurityToken: The STS token.

×

√

\-

×

×

×

×

RoleArn: The Alibaba Cloud Resource Name (ARN) of the RAM role.

×

×

√

×

√

×

×

RoleSessionName: A custom session name. The default format is `credentials-go-current_timestamp`.

×

×

\-

×

\-

×

×

RoleName: The name of the RAM role.

×

×

×

\-

×

×

×

DisableIMDSv1: Specifies whether to enforce the secure mode. The default value is `false`.

×

×

×

\-

×

×

×

BearerToken: The bearer token.

×

×

×

×

×

×

√

Policy: A custom permission policy.

×

×

\-

×

\-

×

×

RoleSessionExpiration: The session expiration time. The default value is 3600 seconds.

×

×

\-

×

\-

×

×

OIDCProviderArn: The ARN of the OIDC IdP.

×

×

×

×

√

×

×

OIDCTokenFilePath: The file path of the OIDC token.

×

×

×

×

√

×

×

ExternalId: The external ID of the role. This parameter is used to prevent the confused deputy problem. For more information, see [Use an external ID to prevent the confused deputy problem](/help/en/ram/use-cases/use-externalid-to-prevent-the-confused-deputy-problem).

×

×

\-

×

×

×

×

Url: The URI of the credential. This parameter must be assigned a value using SetURLCredential(v string).

×

×

×

×

×

√

×

STSEndpoint: The endpoint of STS. VPC endpoints and public network endpoints are supported. For a list of valid values, see [Endpoints](/help/en/ram/developer-reference/api-sts-2015-04-01-endpoint). The default value is `sts.aliyuncs.com`.

×

×

\-

×

\-

×

×

Timeout: The read timeout for HTTP requests. The default value is 5000 milliseconds.

×

×

\-

\-

\-

\-

×

ConnectTimeout: The connection timeout for HTTP requests. The default value is 10000 milliseconds.

×

×

\-

\-

\-

\-

×

## Initialize the credential client

The following sections provide code examples to demonstrate how to use the Credentials tool. You can select a method based on your requirements.

**Important**

-   We recommend that you save the AccessKey pair in environment variables or configuration files.
    
-   We recommend that you use the singleton pattern when you use the Credentials tool. This practice enables the built-in credential caching feature. This prevents throttling issues caused by multiple API calls and avoids resource waste from creating multiple instances. For more information, see [Auto-refresh mechanism for session credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials#3771cb8a93ewh).
    

### Method 1: Use the default credential provider chain

When you initialize the credential client without passing any parameters, the Credentials tool initializes the client using the default credential provider chain. For more information about the logic for reading the default credential, see [Default credential provider chain](#3ca299f04bw3c).

```
package main

import (
	"fmt"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	"github.com/aliyun/credentials-go/credentials"
)

func main() {
	// Do not specify parameters or pass nil.
	credential, err := credentials.NewCredential(nil)
	
	config := &openapi.Config{}
        config.Credential = credential
        // The code for initializing a cloud product client using the config is omitted. For more information, see the API call example.
}
```

#### API call example

This example shows how to call the DescribeRegions operation of Elastic Compute Service (ECS). You must first install the [ECS SDK](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=go-tea).

```
package main

import (
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	ecs20140526 "github.com/alibabacloud-go/ecs-20140526/v7/client"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
	"github.com/aliyun/credentials-go/credentials"
)

func main() {
	// Initialize the Credentials client with the default credential.
	credentialClient, _err := credentials.NewCredential(nil)
	if _err != nil {
		panic(_err)
	}

	ecsConfig := &openapi.Config{}
	// Configure the endpoint of the cloud product.
	ecsConfig.Endpoint = tea.String("ecs.cn-beijing.aliyuncs.com")
	// Configure the credential using Credentials.
	ecsConfig.Credential = credentialClient
	// Initialize the ECS client.
	ecsClient, _err := ecs20140526.NewClient(ecsConfig)
	// Initialize the DescribeRegions request.
	describeInstancesRequest := &ecs20140526.DescribeRegionsRequest{}
	// Initialize the runtime configurations.
	runtime := &util.RuntimeOptions{}
	// Call the DescribeRegions operation and obtain the response.
	response, _err := ecsClient.DescribeRegionsWithOptions(describeInstancesRequest, runtime)
	if _err != nil {
		panic(_err)
	}
	panic(response.Body.String())
}
```

### Method 2: Use an AK

The Credentials tool uses your [AccessKey](/help/en/ram/user-guide/create-an-accesskey-pair) as access credentials.

**Warning**

An Alibaba Cloud account has full permissions on all resources. If the AccessKey pair of an Alibaba Cloud account is leaked, it poses a significant security threat to your system. We do not recommend using the AccessKey pair of an Alibaba Cloud account.

We recommend that you use the AccessKey pair of a RAM user that is granted the minimum required permissions.

```
import (
	"fmt"
	"os"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	"github.com/aliyun/credentials-go/credentials"
)

func main() {
	credentialsConfig := new(credentials.Config).
		SetType("access_key").
		SetAccessKeyId(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")).
		SetAccessKeySecret(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))

	akCredential, err := credentials.NewCredential(credentialsConfig)
	if err != nil {
		return
	}
	
	config := &openapi.Config{}
        config.Credential = akCredential
        // The code for initializing a cloud product client using the config is omitted. For more information, see the API call example.
}
```

#### API call example

This example shows how to call the DescribeRegions operation of ECS. You must first install the [ECS SDK](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=go-tea).

```
package main

import (
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	ecs20140526 "github.com/alibabacloud-go/ecs-20140526/v7/client"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
	"github.com/aliyun/credentials-go/credentials"
	"os"
)

func main() {
	// Initialize the Credentials client with an AK.
	credentialsConfig := new(credentials.Config).
		// The credential type.
		SetType("access_key").
		// The AccessKey ID.
		SetAccessKeyId(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")).
		// The AccessKey secret.
		SetAccessKeySecret(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
	credentialClient, _err := credentials.NewCredential(credentialsConfig)
	if _err != nil {
		panic(_err)
	}

	ecsConfig := &openapi.Config{}
	// Configure the endpoint of the cloud product.
	ecsConfig.Endpoint = tea.String("ecs.cn-beijing.aliyuncs.com")
	// Configure the credential using Credentials.
	ecsConfig.Credential = credentialClient
	// Initialize the ECS client.
	ecsClient, _err := ecs20140526.NewClient(ecsConfig)
	// Initialize the DescribeRegions request.
	describeInstancesRequest := &ecs20140526.DescribeRegionsRequest{}
	// Initialize the runtime configurations.
	runtime := &util.RuntimeOptions{}
	// Call the DescribeRegions operation and obtain the response.
	response, _err := ecsClient.DescribeRegionsWithOptions(describeInstancesRequest, runtime)
	if _err != nil {
		panic(_err)
	}
	panic(response.Body.String())
}
```

### Method 3: Use an STS token

The Credentials tool uses the static [STS token](/help/en/ram/user-guide/what-is-sts) that you provide as access credentials.

```
package main

import (
	"fmt"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	"github.com/aliyun/credentials-go/credentials"
	"os"
)

func main() {
	credentialsConfig := new(credentials.Config).
		SetType("sts").
		// Obtain the AccessKey ID from an environment variable.
		SetAccessKeyId(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")).
		// Obtain the AccessKey secret from an environment variable.
		SetAccessKeySecret(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")).
		// Obtain the temporary STS credential from an environment variable.
		SetSecurityToken(os.Getenv("ALIBABA_CLOUD_SECURITY_TOKEN"))

	stsCredential, err := credentials.NewCredential(credentialsConfig)
	if err != nil {
		return
	}
	
	config := &openapi.Config{}
        config.Credential = stsCredential
        // The code for initializing a cloud product client using the config is omitted. For more information, see the API call example.
}
```

#### API call example

This example shows how to call the DescribeRegions operation of ECS. You must first install the [Elastic Compute Service SDK](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=go-tea) and the [Security Token Service SDK](https://next.api.alibabacloud.com/api-tools/sdk/Sts?version=2015-04-01&language=go-tea).

```
package main

import (
	"os"

	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	ecs20140526 "github.com/alibabacloud-go/ecs-20140526/v7/client"
	sts20150401 "github.com/alibabacloud-go/sts-20150401/v2/client"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
	"github.com/aliyun/credentials-go/credentials"
)

func main() {
	// Create an STS client and call the AssumeRole operation to obtain an STS token.
	stsConfig := &openapi.Config{}
	stsConfig.SetAccessKeyId(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
	stsConfig.SetAccessKeySecret(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
	stsConfig.SetEndpoint("sts.cn-hangzhou.aliyuncs.com")
	client, _err := sts20150401.NewClient(stsConfig)
	if _err != nil {
		panic(_err)
	}
	assumeRoleRequest := &sts20150401.AssumeRoleRequest{}
	// The ARN of the RAM role to assume. Example: acs:ram::123456789012****:role/adminrole. You can set RoleArn using the ALIBABA_CLOUD_ROLE_ARN environment variable.
	assumeRoleRequest.SetRoleArn("<RoleArn>")
	// The name of the role session. You can set RoleSessionName using the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
	assumeRoleRequest.SetRoleSessionName("<RoleSessionName>")
	assumeRoleRequest.SetDurationSeconds(3600)
	result, _err := client.AssumeRole(assumeRoleRequest)
	if _err != nil {
		panic(_err)
	}
	assumeRoleResponseBodyCredentials := result.Body.Credentials

	// Initialize the Credentials client with an STS token.
	credentialsConfig := new(credentials.Config).
		// The credential type.
		SetType("sts").
		SetAccessKeyId(*assumeRoleResponseBodyCredentials.AccessKeyId).
		SetAccessKeySecret(*assumeRoleResponseBodyCredentials.AccessKeySecret).
		SetSecurityToken(*assumeRoleResponseBodyCredentials.SecurityToken)

	credentialClient, _err := credentials.NewCredential(credentialsConfig)
	if _err != nil {
		panic(_err)
	}

	ecsConfig := &openapi.Config{}
	// Configure the endpoint of the cloud product.
	ecsConfig.Endpoint = tea.String("ecs.cn-hangzhou.aliyuncs.com")
	// Configure the credential using Credentials.
	ecsConfig.Credential = credentialClient
	// Initialize the ECS client.
	ecsClient, _err := ecs20140526.NewClient(ecsConfig)
	// Initialize the DescribeRegions request.
	describeInstancesRequest := &ecs20140526.DescribeRegionsRequest{}
	// Initialize the runtime configurations.
	runtime := &util.RuntimeOptions{}
	// Call the DescribeRegions operation and obtain the response.
	response, _err := ecsClient.DescribeRegionsWithOptions(describeInstancesRequest, runtime)
	if _err != nil {
		panic(_err)
	}
	panic(response.Body.String())
}
```

### Method 4: Use an AK and RamRoleArn

This method is implemented using an STS token. By specifying the Amazon Resource Name (ARN) of a RAM role, the Credentials tool can help developers obtain an STS token from STS. You can also assign a value to `SetPolicy` to restrict the RAM role to a smaller set of permissions.

```
package main

import (
	"fmt"
	"os"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	"github.com/aliyun/credentials-go/credentials"
)

func main() {
	credentialsConfig := new(credentials.Config).
		SetType("ram_role_arn").
		SetAccessKeyId(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")).
		SetAccessKeySecret(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")).
		// The ARN of the RAM role to assume. Example: acs:ram::123456789012****:role/adminrole. You can set RoleArn using the ALIBABA_CLOUD_ROLE_ARN environment variable.
		SetRoleArn("<RoleArn>").
		// The name of the role session. You can set RoleSessionName using the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
		SetRoleSessionName("<RoleSessionName>").
		// Optional. A smaller permission policy. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
		SetPolicy("<Policy>").
		// Optional. The session expiration time.
		SetRoleSessionExpiration(3600).
		// Optional. The external ID of the role. This parameter is provided by an external party to represent the role and is used to prevent the confused deputy problem.
		SetExternalId("ExternalId").
		// Optional. The default value is sts.aliyuncs.com. We recommend that you use a region-specific STS domain name. Select a region that is geographically closer to you to ensure network connectivity.
		SetSTSEndpoint("sts.cn-hangzhou.aliyuncs.com")

	arnCredential, err := credentials.NewCredential(credentialsConfig)
	if err != nil {
		return
	}

	config := &openapi.Config{}
        config.Credential = arnCredential
        // The code for initializing a cloud product client using the config is omitted. For more information, see the API call example.
}
```

**Note**

For more information about ExternalId, see [Use an external ID to prevent the confused deputy problem](/help/en/ram/use-cases/use-externalid-to-prevent-the-confused-deputy-problem).

#### API call example

This example shows how to call the DescribeRegions operation of ECS. You must first install the [ECS SDK](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=go-tea).

```
package main

import (
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	ecs20140526 "github.com/alibabacloud-go/ecs-20140526/v7/client"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
	"github.com/aliyun/credentials-go/credentials"
	"os"
)

func main() {
	// Initialize the Credentials client with RamRoleArn.
	credentialsConfig := new(credentials.Config).
		// The credential type.
		SetType("ram_role_arn").
		// The AccessKey ID.
		SetAccessKeyId(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")).
		// The AccessKey secret.
		SetAccessKeySecret(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")).
		// The ARN of the RAM role to assume. Example: acs:ram::123456789012****:role/adminrole. You can set RoleArn using the ALIBABA_CLOUD_ROLE_ARN environment variable.
		SetRoleArn("<RoleArn>").
		// The name of the role session. You can set RoleSessionName using the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
		SetRoleSessionName("<RoleSessionName>").
		// Optional. A smaller permission policy. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
		SetPolicy("<Policy>").
		// Optional. The session expiration time.
		SetRoleSessionExpiration(3600).
		// Optional. The default value is sts.aliyuncs.com. We recommend that you use a region-specific STS domain name. Select a region that is geographically closer to you to ensure network connectivity.
		SetSTSEndpoint("sts.cn-hangzhou.aliyuncs.com")
	credentialClient, _err := credentials.NewCredential(credentialsConfig)
	if _err != nil {
		panic(_err)
	}

	ecsConfig := &openapi.Config{}
	// Configure the endpoint of the cloud product.
	ecsConfig.Endpoint = tea.String("ecs.cn-beijing.aliyuncs.com")
	// Configure the credential using Credentials.
	ecsConfig.Credential = credentialClient
	// Initialize the ECS client.
	ecsClient, _err := ecs20140526.NewClient(ecsConfig)
	// Initialize the DescribeRegions request.
	describeInstancesRequest := &ecs20140526.DescribeRegionsRequest{}
	// Initialize the runtime configurations.
	runtime := &util.RuntimeOptions{}
	// Call the DescribeRegions operation and obtain the response.
	response, _err := ecsClient.DescribeRegionsWithOptions(describeInstancesRequest, runtime)
	if _err != nil {
		panic(_err)
	}
	panic(response.Body.String())
}
```

### Method 5: Use an instance RAM role

Both ECS and ECI instances support attaching instance RAM roles. Programs that run on these instances can use the Credentials tool to automatically obtain the STS token for the role, which initializes the credential client.

By default, the Credentials tool uses the secure mode (IMDSv2) to access the ECS metadata service to obtain access credentials. If an exception occurs in secure mode, the tool falls back to the normal mode to obtain the credentials. You can also set the `disableIMDSv1` parameter or the _ALIBABA\_CLOUD\_IMDSV1\_DISABLE_ environment variable to execute different exception handling logic:

-   If the value is false (default), the tool continues to obtain access credentials in normal mode.
    
-   If the value is true, it means that access credentials can only be obtained in secure mode, and an exception will be thrown.
    

Whether the server-side supports IMDSv2 depends on your server configuration.

Additionally, you can disable credential access from ECS metadata by setting the environment variable ALIBABA\_CLOUD\_ECS\_METADATA\_DISABLED=true.

**Note**

-   To obtain a temporary identity credential in secure mode, the version of credentials-go must be **1.3.10** or later.
    
-   For more information about ECS instance metadata, see [Instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).
    
-   For more information about how to grant a RAM role to an ECS or ECI instance, see [Create a RAM role and grant it to an ECS instance](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance#ff715dd098ta4) and [Grant an instance RAM role to an ECI instance](/help/en/eci/user-guide/use-an-instance-ram-role-by-calling-api-operations#section-x3j-g0s-qha).
    

```
package main

import (
	"fmt"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	"github.com/aliyun/credentials-go/credentials"
)

func _main(args []*string) {
	// Initialize the Credentials client with EcsRamRole.
	credentialsConfig := new(credentials.Config).
		// The credential type.
		SetType("ecs_ram_role").
		// Optional. The name of the ECS role. If you do not specify this parameter, the role name is automatically obtained. We recommend that you specify this parameter to reduce the number of requests. You can set RoleName using the ALIBABA_CLOUD_ECS_METADATA environment variable.
		SetRoleName("<RoleName>")
	// Optional. The default value is false. If you set this parameter to true, the secure mode is enforced. If you set this parameter to false, the system first attempts to obtain credentials in secure mode. If the attempt fails, the system switches to normal mode (IMDSv1).
	// credentialsConfig.SetDisableIMDSv1(true)
	credentialClient, err := credentials.NewCredential(credentialsConfig)
	if err != nil {
		return
	}
	config := &openapi.Config{}
        config.Credential = credentialClient
        // The code for initializing a cloud product client using the config is omitted. For more information, see the API call example.
}
```

#### API call example

This example shows how to call the DescribeRegions operation of ECS. You must first install the [ECS SDK](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=go-tea).

```
package main

import (
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	ecs20140526 "github.com/alibabacloud-go/ecs-20140526/v7/client"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
	credentials "github.com/aliyun/credentials-go/credentials"
)

func main() {
	// Initialize the Credentials client with EcsRamRole.
	credentialsConfig := new(credentials.Config).
		// The credential type.
		SetType("ecs_ram_role").
		// Optional. The name of the ECS role. If you do not specify this parameter, the role name is automatically obtained. We recommend that you specify this parameter to reduce the number of requests. You can set RoleName using the ALIBABA_CLOUD_ECS_METADATA environment variable.
		SetRoleName("<RoleName>")
	credentialClient, _err := credentials.NewCredential(credentialsConfig)
	if _err != nil {
		panic(_err)
	}

	ecsConfig := &openapi.Config{}
	// Configure the endpoint of the cloud product.
	ecsConfig.Endpoint = tea.String("ecs.cn-beijing.aliyuncs.com")
	// Configure the credential using Credentials.
	ecsConfig.Credential = credentialClient
	// Initialize the ECS client.
	ecsClient, _err := ecs20140526.NewClient(ecsConfig)
	// Initialize the DescribeRegions request.
	describeInstancesRequest := &ecs20140526.DescribeRegionsRequest{}
	// Initialize the runtime configurations.
	runtime := &util.RuntimeOptions{}
	// Call the DescribeRegions operation and obtain the response.
	response, _err := ecsClient.DescribeRegionsWithOptions(describeInstancesRequest, runtime)
	if _err != nil {
		panic(_err)
	}
	panic(response.Body.String())
}
```

### Method 6: Use OIDCRoleArn

If you use the OIDC authentication protocol and have [created a RAM role for an OIDC IdP](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-idp#section-mra-74d-14w), you can pass the OIDC IdP ARN, OIDC token, and RAM role ARN to the Credentials tool. The system then automatically calls the [AssumeRoleWithOIDC](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithoidc) operation to obtain the STS token for the RAM role and uses this token as the access credential. Credentials obtained this way support auto-refresh. For more information, see [Auto-refresh mechanism for session credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials#3771cb8a93ewh). For example, if your application runs in an ACK cluster where the [RRSA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#task-2142941) feature is enabled, the Credentials tool reads the OIDC configuration information from the pod environment variables, calls the AssumeRoleWithOIDC operation to obtain the STS token for the service role, and uses this token to access related Alibaba Cloud services.

```
package main

import (
	"fmt"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	"github.com/aliyun/credentials-go/credentials"
	"os"
)

func main() {
	credentialsConfig := new(credentials.Config).
		SetType("oidc_role_arn").
		// The ARN of the OIDC IdP. You can set OidcProviderArn using the ALIBABA_CLOUD_OIDC_PROVIDER_ARN environment variable.
		SetOIDCProviderArn(os.Getenv("ALIBABA_CLOUD_OIDC_PROVIDER_ARN")).
		// The file path of the OIDC token. You can set OidcTokenFilePath using the ALIBABA_CLOUD_OIDC_TOKEN_FILE environment variable.
		SetOIDCTokenFilePath(os.Getenv("ALIBABA_CLOUD_OIDC_TOKEN_FILE")).
		// The ARN of the RAM role. You can set RoleArn using the ALIBABA_CLOUD_ROLE_ARN environment variable.
		SetRoleArn(os.Getenv("ALIBABA_CLOUD_ROLE_ARN")).
		// The name of the role session. You can set RoleSessionName using the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
		SetRoleSessionName(os.Getenv("ALIBABA_CLOUD_ROLE_SESSION_NAME")).
		// Optional. A smaller permission policy. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
		SetPolicy("<Policy>").
		// Optional. The session expiration time.
		SetRoleSessionExpiration(3600).
		// Optional. The default value is sts.aliyuncs.com. We recommend that you use a region-specific STS domain name. Select a region that is geographically closer to you to ensure network connectivity.
		SetSTSEndpoint("sts.cn-hangzhou.aliyuncs.com")
	oidcCredential, err := credentials.NewCredential(credentialsConfig)
	if err != nil {
		return
	}
	
	config := &openapi.Config{}
	config.Credential = oidcCredential
	// The code for initializing a cloud product client using the config is omitted. For more information, see the API call example.
}
```

#### API call example

This example shows how to call the DescribeRegions operation of ECS. You must first install the [ECS SDK](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=go-tea).

```
package main

import (
	"os"

	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	ecs20140526 "github.com/alibabacloud-go/ecs-20140526/v7/client"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
	credentials "github.com/aliyun/credentials-go/credentials"
)

func main() {
	// Initialize the Credentials client with OIDCRoleArn.
	credentialsConfig := new(credentials.Config).
		// The credential type.
		SetType("oidc_role_arn").
		// The ARN of the OIDC IdP. You can set OidcProviderArn using the ALIBABA_CLOUD_OIDC_PROVIDER_ARN environment variable.
		SetOIDCProviderArn(os.Getenv("ALIBABA_CLOUD_OIDC_PROVIDER_ARN")).
		// The file path of the OIDC token. You can set OidcTokenFilePath using the ALIBABA_CLOUD_OIDC_TOKEN_FILE environment variable.
		SetOIDCTokenFilePath(os.Getenv("ALIBABA_CLOUD_OIDC_TOKEN_FILE")).
		// The ARN of the RAM role. You can set RoleArn using the ALIBABA_CLOUD_ROLE_ARN environment variable.
		SetRoleArn(os.Getenv("ALIBABA_CLOUD_ROLE_ARN")).
		// The name of the role session. You can set RoleSessionName using the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
		SetRoleSessionName(os.Getenv("ALIBABA_CLOUD_ROLE_SESSION_NAME")).
		// Optional. A smaller permission policy. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
		SetPolicy("<Policy>").
		// The session expiration time.
		SetRoleSessionExpiration(3600)
	credentialClient, _err := credentials.NewCredential(credentialsConfig)
	if _err != nil {
		panic(_err)
	}

	ecsConfig := &openapi.Config{}
	// Configure the endpoint of the cloud product.
	ecsConfig.Endpoint = tea.String("ecs.cn-beijing.aliyuncs.com")
	// Configure the credential using Credentials.
	ecsConfig.Credential = credentialClient
	// Initialize the ECS client.
	ecsClient, _err := ecs20140526.NewClient(ecsConfig)
	// Initialize the DescribeRegions request.
	describeInstancesRequest := &ecs20140526.DescribeRegionsRequest{}
	// Initialize the runtime configurations.
	runtime := &util.RuntimeOptions{}
	// Call the DescribeRegions operation and obtain the response.
	response, _err := ecsClient.DescribeRegionsWithOptions(describeInstancesRequest, runtime)
	if _err != nil {
		panic(_err)
	}
	panic(response.Body.String())
}
```

### Method 7: Use a URI credential

By encapsulating the STS service and exposing its URI, external services can obtain an STS token through the URI. This reduces the risk of exposing sensitive information, such as AccessKey pairs. The Credentials tool obtains an STS token by accessing the URI that you provide and uses this token as an access credential. Credentials obtained this way support auto-refresh. For more information, see [Auto-refresh mechanism for session credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials#3771cb8a93ewh).

```
package main

import (
	"github.com/aliyun/credentials-go/credentials"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
)

func main() {
	credentialsConfig := new(credentials.Config).
		SetType("credentials_uri").
                // The URI of the credential. The format is http://local_or_remote_uri/. You can set CredentialsUri using the ALIBABA_CLOUD_CREDENTIALS_URI environment variable.
		SetURLCredential("<CredentialsUri>")

	uriCredential, err := credentials.NewCredential(credentialsConfig)
	config := &openapi.Config{}
	config.Credential = uriCredential
	// The code for initializing a cloud product client using the config is omitted. For more information, see the API call example.
}
```

The address must meet the following conditions:

-   It must support GET requests.
    
-   The response body must have the following structure:
    
    ```
    {
      "AccessKeySecret": "AccessKeySecret",
      "AccessKeyId": "AccessKeyId",
      "Expiration": "2021-09-26T03:46:38Z",
      "SecurityToken": "SecurityToken"
    }
    ```
    

#### **API call example**

This example shows how to call the DescribeRegions operation of ECS. You must first install the [ECS SDK](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=go-tea).

```
package main

import (
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	ecs20140526 "github.com/alibabacloud-go/ecs-20140526/v7/client"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
	credentials "github.com/aliyun/credentials-go/credentials"
)

func main() {
	credentialsConfig := new(credentials.Config).
		SetType("credentials_uri").
		// The URI of the credential. The format is http://local_or_remote_uri/. You can set CredentialsUri using the ALIBABA_CLOUD_CREDENTIALS_URI environment variable.
		SetURLCredential("<CredentialsUri>")

	uriCredential, _err := credentials.NewCredential(credentialsConfig)
	if _err != nil {
		panic(_err)
	}

	ecsConfig := &openapi.Config{}
	// Configure the endpoint of the cloud product.
	ecsConfig.Endpoint = tea.String("ecs.cn-beijing.aliyuncs.com")
	// Configure the credential using Credentials.
	ecsConfig.Credential = uriCredential
	// Initialize the ECS client.
	ecsClient, _err := ecs20140526.NewClient(ecsConfig)
	// Initialize the DescribeRegions request.
	describeInstancesRequest := &ecs20140526.DescribeRegionsRequest{}
	// Initialize the runtime configurations.
	runtime := &util.RuntimeOptions{}
	// Call the DescribeRegions operation and obtain the response.
	response, _err := ecsClient.DescribeRegionsWithOptions(describeInstancesRequest, runtime)
	if _err != nil {
		panic(_err)
	}
	panic(response.Body.String())
}
```

### Method 8: Use a Bearer Token

Currently, only Cloud Call Center ([CCC](https://api.aliyun.com/api/CCC/2020-07-01/ListPrivilegesOfUser)) supports initializing credentials with a Bearer Token.

```
package main

import (
	"fmt"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	"github.com/aliyun/credentials-go/credentials"
)

func main() {
	credentialsConfig := new(credentials.Config).
		SetType("bearer").
		// Enter your Bearer Token.
		SetBearerToken("<BearerToken>")
	bearerCredential, err := credentials.NewCredential(credentialsConfig)
	if err != nil {
		return
	}
	config := &openapi.Config{}
	config.Credential = bearerCredential
	// The code for initializing a cloud product client using the config is omitted. For more information, see the API call example.
}
```

#### API call example

This example shows how to call the GetInstance operation of CCC. You must first install the [CCC SDK](https://next.api.alibabacloud.com/api-tools/sdk/CCC?version=2020-07-01&language=go-tea&tab=primer-doc).

```
package main

import (
	ccc20200701 "github.com/alibabacloud-go/ccc-20200701/v2/client"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
	credentials "github.com/aliyun/credentials-go/credentials"
)

func _main() (_err error) {
	// Initialize the Credentials client with a Bearer Token.
	credentialsConfig := new(credentials.Config).
		// The credential type.
		SetType("bearer").
		SetBearerToken("<BearerToken>")
	credentialClient, _err := credentials.NewCredential(credentialsConfig)
	if _err != nil {
		return _err
	}

	// Initialize the CCC client with the Credentials client.
	config := &openapi.Config{}
	config.Endpoint = tea.String("ccc.cn-shanghai.aliyuncs.com") // Configure the endpoint of the cloud product.
	config.Credential = credentialClient                         // Configure the credential using Credentials.
	cccClient, _err := ccc20200701.NewClient(config)
	if _err != nil {
		return _err
	}
	getInstanceRequest := &ccc20200701.GetInstanceRequest{
		InstanceId: tea.String("ccc-test"),
	}
	runtime := &util.RuntimeOptions{}
	response, _err := cccClient.GetInstanceWithOptions(getInstanceRequest, runtime)
	if _err != nil {
		return _err
	}
	panic(response.Body.String())
}

func main() {
	err := _main()
	if err != nil {
		panic(err)
	}
}
```

### **Method 9: Use CLIProfileCredentialsProvider**

You can obtain access credentials from the [Alibaba Cloud CLI](/help/en/cli/configure-credentials) credential configuration file (config.json).

```
package main

import (
	"github.com/aliyun/credentials-go/credentials"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	"github.com/aliyun/credentials-go/credentials/providers"
)

func main() {
	// CLIProfileCredentialsProvider
	provider, err := providers.NewCLIProfileCredentialsProviderBuilder().
	        // Optional. The name of the credential. You can configure this parameter in multiple ways. The priority is as follows: explicitly specified profileName > profileName specified by the ALIBABA_CLOUD_PROFILE environment variable > the current profile in config.json.
		WithProfileName("<PROFILE_NAME>"). 
		// Optional. The path of the configuration file, which must be a .json file. You can configure this parameter in multiple ways. The priority is as follows: explicitly specified profileFile > profileFile specified by the ALIBABA_CLOUD_CONFIG_FILE environment variable > the default path ~/.aliyun/config.json.
		WithProfileFile("<PROFILE_FILE_PATH>"). 
		Build()
	if err != nil {
		return
	}
	credential := credentials.FromCredentialsProvider("cli_profile", provider)
	config := &openapi.Config{}
	config.Credential = credential
	// The code for initializing a cloud product client using the config is omitted. For more information, see the API call example.
}
```

You can configure credentials using the Alibaba Cloud CLI or by manually creating a `config.json` configuration file in the following path:

-   Linux: `~/.aliyun/config.json`
    
-   Windows: `C:\Users\USER_NAME\.aliyun\config.json`
    

The content format is as follows:

```
{
  "current": "<PROFILE_NAME>",
  "profiles": [
    {
      "name": "<PROFILE_NAME>",
      "mode": "AK",
      "access_key_id": "<ALIBABA_CLOUD_ACCESS_KEY_ID>",
      "access_key_secret": "<ALIBABA_CLOUD_ACCESS_KEY_SECRET>"
    },
    {
      "name": "<PROFILE_NAME1>",
      "mode": "StsToken",
      "access_key_id": "<ALIBABA_CLOUD_ACCESS_KEY_ID>",
      "access_key_secret": "<ALIBABA_CLOUD_ACCESS_KEY_SECRET>",
      "sts_token": "<SECURITY_TOKEN>"
    },
    {
      "name":"<PROFILE_NAME2>",
      "mode":"RamRoleArn",
      "access_key_id":"<ALIBABA_CLOUD_ACCESS_KEY_ID>",
      "access_key_secret":"<ALIBABA_CLOUD_ACCESS_KEY_SECRET>",
      "ram_role_arn":"<ROLE_ARN>",
      "ram_session_name":"<ROLE_SESSION_NAME>",
      "expired_seconds":3600
    },
    {
      "name":"<PROFILE_NAME3>",
      "mode":"EcsRamRole",
      "ram_role_name":"<RAM_ROLE_ARN>"
    },
    {
      "name":"<PROFILE_NAME4>",
      "mode":"OIDC",
      "oidc_provider_arn":"<OIDC_PROVIDER_ARN>",
      "oidc_token_file":"<OIDC_TOKEN_FILE>",
      "ram_role_arn":"<ROLE_ARN>",
      "ram_session_name":"<ROLE_SESSION_NAME>",
      "expired_seconds":3600
    },
    {
      "name":"<PROFILE_NAME5>",
      "mode":"ChainableRamRoleArn",
      "source_profile":"<PROFILE_NAME>",
      "ram_role_arn":"<ROLE_ARN>",
      "ram_session_name":"<ROLE_SESSION_NAME>",
      "expired_seconds":3600
    },
    {
      "name": "<PROFILE_NAME6>",
      "mode": "CloudSSO",
      "cloud_sso_sign_in_url": "https://******/login",
      "access_token": "eyJraWQiOiJiYzViMzUwYy******",
      "cloud_sso_access_token_expire": 1754316142,
      "cloud_sso_access_config": "ac-00s1******",
      "cloud_sso_account_id": "151266******"
    }
  ]
}
```

In the config.json file, you can use the mode parameter to specify different credentials:

-   AK: Uses the user's AccessKey as the credential.
    
-   StsToken: Uses an STS token as the credential.
    
-   RamRoleArn: Uses the ARN of a RAM role to obtain the credential.
    
-   EcsRamRole: Uses the RAM role attached to an ECS instance to obtain the credential.
    
-   OIDC: Uses an OIDC ARN and an OIDC token to obtain the credential.
    
-   ChainableRamRoleArn: Uses a role chain. It specifies the name of another credential in the `config.json` file using `source_profile` to obtain a new credential.
    
-   CloudSSO: The credential that a CloudSSO user obtains using the Alibaba Cloud CLI.
    
    **Note**
    
    CloudSSO credentials require version **1.4.7** or later of `github.com/aliyun/credentials-go`. The configuration content can only be obtained using the Alibaba Cloud CLI. For more information, see [Use the CLI to log on to CloudSSO and access Alibaba Cloud resources](/help/en/cloudsso/user-guide/use-alibaba-cloud-cli-to-access-cloudsso-and-alibaba-cloud-resources).
    

After the configuration is complete, the Credentials tool initializes the credential client based on the credential name specified by the \`current\` parameter.

#### **API call example**

This example shows how to call the DescribeRegions operation of ECS. You must first install the [ECS SDK](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=go-tea).

```
package main

import (
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	ecs20140526 "github.com/alibabacloud-go/ecs-20140526/v7/client"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
	"github.com/aliyun/credentials-go/credentials"
	"github.com/aliyun/credentials-go/credentials/providers"
)

func main() {
	// CLIProfileCredentialsProvider
	provider, err := providers.NewCLIProfileCredentialsProviderBuilder().
		WithProfileName("SSOProfile"). // Optional. The system reads the current profile from config.json by default.
		// WithProfileFile("/path/to/config.json"). // Optional. The system reads from ~/.aliyun/config.json by default.
		Build()
	if err != nil {
		return
	}

	credentialClient := credentials.FromCredentialsProvider("cli_profile", provider)

	// Initialize the ECS client with Credentials.
	ecsConfig := &openapi.Config{}
	ecsConfig.Endpoint = tea.String("ecs.cn-beijing.aliyuncs.com")
	ecsConfig.Credential = credentialClient
	ecsClient, _err := ecs20140526.NewClient(ecsConfig)
	describeInstancesRequest := &ecs20140526.DescribeRegionsRequest{}
	runtime := &util.RuntimeOptions{}
	response, _err := ecsClient.DescribeRegionsWithOptions(describeInstancesRequest, runtime)
	if _err != nil {
		panic(_err)
	}
	panic(response.Body.String())
}
```

## Default credential provider chain

When the credential types used in your development and production environments are different, you typically write branch code to obtain different credentials based on the current environment. The default credential provider chain of the Credentials tool lets you use the same code and control how credentials are obtained in different environments through external configurations. When you initialize the credential client using `NewCredential()` without passing any parameters, the Alibaba Cloud SDK attempts to find credentials in the following order.

### 1\. Environment variables

If no credential information is found in the system properties, the Credentials tool checks the environment variables.

-   If the **_ALIBABA\_CLOUD\_ACCESS\_KEY\_ID_** and **_ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET_** environment variables exist and are not empty, an AccessKey pair is used as the default credential.
    
-   If the ALIBABA\_CLOUD\_ACCESS\_KEY\_ID, **_ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET_**, and **_ALIBABA\_CLOUD\_SECURITY\_TOKEN_** environment variables are all set, an STS token is used as the default credential.
    

### 2\. OIDC RAM role

If no credential information is found, the Credentials tool checks the following environment variables related to OIDC RAM roles:

-   **_ALIBABA\_CLOUD\_ROLE\_ARN_**: The ARN of the RAM role.
    
-   **_ALIBABA\_CLOUD\_OIDC\_PROVIDER\_ARN_**: The ARN of the OIDC IdP.
    
-   **_ALIBABA\_CLOUD\_OIDC\_TOKEN\_FILE_**: The path of the OIDC token file.
    

If the preceding three environment variables exist and are not empty, the Credentials tool uses the values of these environment variables to call the [AssumeRoleWithOIDC](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithoidc) operation of STS and obtain an STS token as the default credential.

### **3\.** config.json configuration file

If no higher-priority credential is found, the Credentials tool attempts to load the `config.json` configuration file. The default full path of this configuration file is as follows:

-   Linux/macOS: `~/.aliyun/config.json`
    
-   Windows: `C:\Users\USER_NAME\.aliyun\config.json`
    

**Note**

Starting from version `github.com/aliyun/credentials-go@1.4.4`, you can use the **_ALIBABA\_CLOUD\_CONFIG\_FILE_** environment variable to customize the path of the `config.json` file. This environment variable has a higher priority than the default path.

To configure access credentials this way, you can use the Alibaba Cloud CLI to configure credentials or manually create a `config.json` file in the corresponding path. The following is an example of the content format:

```
{
    "current": "<PROFILE_NAME>",
    "profiles": [
        {
            "name": "<PROFILE_NAME>",
            "mode": "AK",
            "access_key_id": "<ALIBABA_CLOUD_ACCESS_KEY_ID>",
            "access_key_secret": "<ALIBABA_CLOUD_ACCESS_KEY_SECRET>"
        },
        {
            "name": "<PROFILE_NAME1>",
            "mode": "StsToken",
            "access_key_id": "<ALIBABA_CLOUD_ACCESS_KEY_ID>",
            "access_key_secret": "<ALIBABA_CLOUD_ACCESS_KEY_SECRET>",
            "sts_token": "<SECURITY_TOKEN>"
        },
        {
            "name": "<PROFILE_NAME2>",
            "mode": "RamRoleArn",
            "access_key_id": "<ALIBABA_CLOUD_ACCESS_KEY_ID>",
            "access_key_secret": "<ALIBABA_CLOUD_ACCESS_KEY_SECRET>",
            "ram_role_arn": "<ROLE_ARN>",
            "ram_session_name": "<ROLE_SESSION_NAME>",
            "expired_seconds": 3600
        },
        {
            "name": "<PROFILE_NAME3>",
            "mode": "EcsRamRole",
            "ram_role_name": "<RAM_ROLE_ARN>"
        },
        {
            "name": "<PROFILE_NAME4>",
            "mode": "OIDC",
            "oidc_provider_arn": "<OIDC_PROVIDER_ARN>",
            "oidc_token_file": "<OIDC_TOKEN_FILE>",
            "ram_role_arn": "<ROLE_ARN>",
            "ram_session_name": "<ROLE_SESSION_NAME>",
            "expired_seconds": 3600
        },
        {
            "name": "<PROFILE_NAME5>",
            "mode": "ChainableRamRoleArn",
            "source_profile": "<PROFILE_NAME>",
            "ram_role_arn": "<ROLE_ARN>",
            "ram_session_name": "<ROLE_SESSION_NAME>",
            "expired_seconds": 3600
        },
        {
            "name": "<PROFILE_NAME6>",
            "mode": "CloudSSO",
            "cloud_sso_sign_in_url": "https://******/login",
            "access_token": "eyJraWQiOiJiYzViMzUwYy******",
            "cloud_sso_access_token_expire": 1754316142,
            "cloud_sso_access_config": "ac-00s1******",
            "cloud_sso_account_id": "151266******"
        },
        {
            "name": "<PROFILE_NAME7>",
            "mode": "OAuth",
            "access_key_id": "<ALIBABA_CLOUD_ACCESS_KEY_ID>",
            "access_key_secret": "<ALIBABA_CLOUD_ACCESS_KEY_SECRET>",
            "sts_token": "<SECURITY_TOKEN>",
            "region_id": "<REGION_ID>",
            "output_format": "json",
            "language": "<zh|en>",
            "sts_expiration": "<STS_EXPIRATION>",
            "oauth_access_token": "<OAUTH_ACCESS_TOKEN>",
            "oauth_refresh_token": "<OAUTH_REFRESH_TOKEN>",
            "oauth_access_token_expire": 1754316142,
            "oauth_site_type": "<CN|EN>"
        }
    ]
}
```

In the config.json file, you can use the mode parameter to specify different credentials:

-   AK: Uses the user's AccessKey as the credential.
    
-   StsToken: Uses an STS token as the credential.
    
-   RamRoleArn: Uses the ARN of a RAM role to obtain the credential.
    
-   EcsRamRole: Uses the RAM role attached to an ECS instance to obtain the credential.
    
-   OIDC: Uses an OIDC ARN and an OIDC token to obtain the credential.
    
-   ChainableRamRoleArn: Uses a role chain. It specifies the name of another credential in the `config.json` file using `source_profile` to obtain a new credential.
    
-   OAuth: The credential that is obtained using the CLI to log on with OAuth.
    
-   CloudSSO: The credential that a CloudSSO user obtains using the Alibaba Cloud CLI.
    

**Note**

-   OAuth credentials require version **1.4.8** or later of `github.com/aliyun/credentials-go`. The configuration content can only be obtained using the Alibaba Cloud CLI. For more information, see [Use the CLI to obtain an OAuth credential](/help/en/cli/configure-credentials#2961a009f3rbq).
    
-   CloudSSO credentials require version **1.4.7** or later of `github.com/aliyun/credentials-go`. The configuration content can only be obtained using the Alibaba Cloud CLI. For more information, see [Use the CLI to log on to CloudSSO and access Alibaba Cloud resources](/help/en/cloudsso/user-guide/use-alibaba-cloud-cli-to-access-cloudsso-and-alibaba-cloud-resources).
    

After the configuration is complete, the Credentials tool initializes the credential client based on the credential name specified by the **current** parameter in the configuration file. You can also specify a credential name using the **_ALIBABA\_CLOUD\_PROFILE_** environment variable. For example, you can set the value of **_ALIBABA\_CLOUD\_PROFILE_** to **client1**.

### 4\. Instance RAM role

If no higher-priority credential is found, the Credentials tool attempts to obtain a credential from the RAM role attached to an ECS instance. By default, the Credentials tool uses the secure mode (IMDSv2) to access the ECS metadata service to obtain the STS token of the instance RAM role as the default credential. The program automatically accesses the ECS metadata service to retrieve the RoleName and then obtains the credential, which involves two requests. To reduce this to one request, you can directly configure the **_ALIBABA\_CLOUD\_ECS\_METADATA_** environment variable to specify the instance RAM role name. If an exception occurs in secure mode, the tool falls back to the normal mode to obtain the access credential. You can also set the **_ALIBABA\_CLOUD\_IMDSV1\_DISABLE_** environment variable to execute different exception handling logic:

1.  If the value is false, the tool continues to obtain the access credential in normal mode.
    
2.  If the value is true, it means that the access credential can only be obtained in secure mode, and an exception will be thrown.
    

Whether the server-side supports IMDSv2 depends on your server configuration.

Additionally, you can disable credential access from ECS metadata by setting the environment variable ALIBABA\_CLOUD\_ECS\_METADATA\_DISABLED=true.

**Note**

-   For more information about ECS instance metadata, see [Instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).
    
-   For more information about how to grant a RAM role to an ECS or ECI instance, see [Create a RAM role and grant it to an ECS instance](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance#ff715dd098ta4) and [Grant an instance RAM role to an ECI instance](/help/en/eci/user-guide/use-an-instance-ram-role-by-calling-api-operations#section-x3j-g0s-qha).
    

### 5\. Credentials tool URI

If no credential information is found, the Credentials tool checks the **_ALIBABA\_CLOUD\_CREDENTIALS\_URI_** environment variable. If this variable exists and points to a valid URI, the Credentials tool accesses this URI to obtain an STS token as the default credential.

## **Auto-refresh mechanism for session-based credentials**

Session credentials include [ram\_role\_arn](/help/en/sdk/developer-reference/v2-manage-access-credentials#e4efbc8a9c8kn), [ecs\_ram\_role](/help/en/sdk/developer-reference/v2-manage-access-credentials#a615745aa1v00), [oidc\_role\_arn](/help/en/sdk/developer-reference/v2-manage-access-credentials#3b26f219a8geg), and [credentials\_uri](/help/en/sdk/developer-reference/v2-manage-access-credentials#5ae7747841csu). This type of credential has a built-in auto-refresh mechanism in the Credentials tool. After a credential client obtains credentials for the first time, the Credentials tool saves the credential information to the cache. In subsequent requests, the same credential client instance automatically fetches the credentials from the cache. If the credentials in the cache are expired, the credential client instance re-obtains the credentials and updates the cache.

**Note**

For \`ecs\_ram\_role\` credentials, the Credentials tool refreshes the cache 15 minutes before the credentials expire.

The following example creates a credential client in a singleton pattern. The client obtains credentials at different time points to verify the auto-refresh mechanism and calls an OpenAPI operation to ensure that the obtained credentials are valid.

```
package main

import (
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	ecs20140526 "github.com/alibabacloud-go/ecs-20140526/v7/client"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
	"github.com/aliyun/credentials-go/credentials"
)

// Credential is a singleton struct used to manage the Alibaba Cloud credential instance.
type Credential struct {
	instance credentials.Credential
	once     sync.Once
}

var credentialInstance = &Credential{}

func GetCredentialInstance() credentials.Credential {
	credentialInstance.once.Do(func() {
		cfg := &credentials.Config{
			Type:                  tea.String("ram_role_arn"),
			AccessKeyId:           tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")),
			AccessKeySecret:       tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")),
			RoleArn:               tea.String(os.Getenv("ALIBABA_CLOUD_ROLE_ARN")),
			RoleSessionName:       tea.String("RamRoleArnTest"),
			RoleSessionExpiration: tea.Int(3600),
		}
		var err error
		credentialInstance.instance, err = credentials.NewCredential(cfg)
		if err != nil {
			log.Fatalf("Credential initialization failed: %v", err)
		}
	})
	return credentialInstance.instance
}

// EcsClient is a singleton struct used to manage the ECS client instance.
type EcsClient struct {
	instance *ecs20140526.Client
	once     sync.Once
}

var ecsClientInstance = &EcsClient{}

func GetEcsClientInstance(cred credentials.Credential) *ecs20140526.Client {
	ecsClientInstance.once.Do(func() {
		cfg := &openapi.Config{
			Endpoint:   tea.String("ecs.cn-hangzhou.aliyuncs.com"),
			Credential: cred,
		}
		var err error
		ecsClientInstance.instance, err = ecs20140526.NewClient(cfg)
		if err != nil {
			log.Fatalf("ECS client initialization failed: %v", err)
		}
	})
	return ecsClientInstance.instance
}

// Execute the main task.
func runTask() {
	cred := GetCredentialInstance()
	credentialModel, err := cred.GetCredential()
	if err != nil {
		log.Printf("Failed to get credential: %v", err)
		return
	}

	fmt.Println(time.Now())
	fmt.Printf("AK ID: %s, AK Secret: %s, STS Token: %s\n",
		*credentialModel.AccessKeyId,
		*credentialModel.AccessKeySecret,
		*credentialModel.SecurityToken)

	ecsClient := GetEcsClientInstance(cred)
	req := &ecs20140526.DescribeRegionsRequest{}
	runtime := &util.RuntimeOptions{}

	resp, err := ecsClient.DescribeRegionsWithOptions(req, runtime)
	if err != nil {
		log.Printf("ECS API call failed: %v", err)
		return
	}

	fmt.Printf("Invoke result: %d\n", *resp.StatusCode)
}

func main() {
	done := make(chan bool)

	// Start a goroutine to execute scheduled tasks.
	go func() {
		tick := time.NewTicker(1 * time.Second)
		defer tick.Stop()

		executionCount := 0
		delays := []time.Duration{0, 600, 3600, 100} // Delay time in seconds.

		for {
			select {
			case <-tick.C:
				if executionCount < len(delays) {
					delay := delays[executionCount]
					time.Sleep(delay * time.Second)
					runTask()
					executionCount++
				} else {
					close(done)
					return
				}
			}
		}
	}()

	<-done
	fmt.Println("All tasks completed. Exiting...")
}
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9184320571/p962068.png)

The following section analyzes the log results:

-   In the first call, no credential information is cached. Therefore, the system obtains the credentials based on the configuration. After the credentials are obtained, they are saved in the cache.
    
-   The credentials used in the second call are the same as the first one. This indicates that the credentials for the second call were retrieved from the cache.
    
-   In the third call, the credentials in the cache are expired. This is because the validity period of the credentials (\`RoleSessionExpiration\`) is set to 3,600 seconds, and the third call occurs 4,200 seconds after the first call. Therefore, the SDK re-obtains new credentials based on the auto-refresh mechanism and saves the new credentials to the cache.
    
-   The credentials used in the fourth call are the same as the new credentials obtained in the third call. This indicates that the credentials in the cache were updated after they expired.
    

#### References

-   For more information about RAM, see [Terms](/help/en/ram/terms).
    
-   For more information about how to create an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-188766).
    
-   For more information about how to programmatically create a RAM user, an AccessKey pair, a RAM role, and an access policy and grant permissions, see [RAM SDK Overview](/help/en/ram/developer-reference/ram-sdk-overview).
    
-   For more information about how to programmatically assume a role, see [STS SDK overview](/help/en/ram/developer-reference/sts-sdk-overview).
    
-   For more information about RAM- and STS-related API operations, see [API Reference](/help/en/ram/developer-reference/api-reference/).
    
-   [Best practices for using an access credential to call API operations](/help/en/ram/use-cases/best-practices-for-using-access-credentials-to-access-alibaba-cloud-openapi)
    
-   [Solutions to AccessKey pair leaks](/help/en/ram/user-guide/solution-to-accesskey-leakage)
