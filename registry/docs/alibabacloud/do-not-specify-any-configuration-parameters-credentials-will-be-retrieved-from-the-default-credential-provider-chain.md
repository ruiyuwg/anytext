When you call API operations to manage cloud resources using Alibaba Cloud SDKs, you must configure valid credential information. The Credentials tool of Alibaba Cloud provides a set of easy-to-use features and supports various types of credentials, including the default credential, AccessKey pairs, and Security Token Service (STS) tokens. The Credentials tool helps you obtain and manage credentials. This topic describes how to configure different types of credentials and the order based on which the Credentials tool obtains the default credential. You can develop a thorough knowledge of configuring and managing credentials in Alibaba Cloud SDKs. This ensures that you can perform operations on cloud resources in an efficient and secure manner.

## Prerequisites

-   Python 3.7 or later. For more information, see [Alibaba Cloud SDK support policy](/help/en/sdk/product-overview/alibaba-cloud-sdk-support-policies).
    
-   An Alibaba Cloud SDK for Python V2.0. For more information, see [SDKs V2.0 and V1.0](/help/en/sdk/product-overview/differences-between-v1-and-v2-sdks).
    

## Install the Credentials tool

We recommend that you use [pip](https://pip.pypa.io/en/stable/installing/) to install the tool.

```
pip install alibabacloud_credentials
```

For information about the latest version of the `alibabacloud_credentials` library, see [alibabacloud-credentials · PyPI](https://pypi.org/project/alibabacloud-credentials/) or [Github](https://github.com/aliyun/credentials-python/blob/master/ChangeLog.md). We recommend that you use the latest version to ensure support for all features.

## **Parameters** of the **Credentials tools**

The credential types supported by the Credentials tool and their configuration parameters are defined in the `Config` class of the `alibabacloud_credentials.models` module. The credential type is specified by the `type` parameter. Different credential types require different configuration parameters. The following table describes the valid values for `type` and the configuration parameters supported by each type. In the table, `Supported` indicates a required parameter, `-` indicates an optional parameter, and `Not supported` indicates that the parameter is not supported.

**Note**

We recommend that you do not use parameters that are not listed in the following table.

**type**

**access\_key**

**sts**

**ram\_role\_arn**

**ecs\_ram\_role**

**oidc\_role\_arn**

**credentials\_uri**

**bearer**

access\_key\_id: the AccessKey ID.

Supported

Supported

Supported

Not supported

Not supported

Not supported

Not supported

access\_key\_secret: the AccessKey secret.

✓

Supported

Supported

Not supported

Not supported

Not supported

Not supported

security\_token: Security Token Service (STS) token.

Not supported

✓

\-

Not supported

Not supported

Not supported

Not supported

role\_arn: the Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role.

Not supported

Not supported

Supported

Not supported

Supported

Not supported

Not supported

role\_session\_name: A custom name for the session. The default value is in the format `credentials-python-current_timestamp`.

×

Unsupported

\-

Not supported

\-

Not supported

Not supported

role\_name: specifies the name of the RAM role.

Not supported

Not supported

Not supported

\-

Not supported

Not supported

Not supported

disable\_imds\_v1: specifies whether to forcibly use the security hardening mode (IMDSv2). If you set this parameter to true, the security hardening mode (IMDSv2) is used. Default value: `false`.

Not supported

×

Not supported

\-

Not supported

Not supported

Not supported

bearer\_token: a bearer token.

Not supported

Not supported

Not supported

Not supported

Not supported

Not supported

✓

policy: a custom policy.

Not supported

Not supported

\-

Not supported

\-

×

Not supported

role\_session\_expiration: the session timeout period. Default value: 3600. Unit: seconds.

Not supported

Not supported

\-

Not supported

\-

Not supported

Not supported

oidc\_provider\_arn: the ARN of the OpenID Connect (OIDC) identity provider (IdP).

Not supported

Not supported

Not supported

Not supported

Supported

Not supported

Not supported

oidc\_token\_file\_path: the absolute path to the OIDC token.

Not supported

Unsupported

Not supported

Not supported

Supported

Not supported

Not supported

external\_id: the external ID of the role, which is used to prevent the confused deputy issue. For more information, see [Use external IDs to prevent the confused deputy issue](/help/en/ram/use-cases/use-externalid-to-prevent-the-confused-deputy-problem).

Not supported

×

\-

Not supported

Not supported

Not supported

Not supported

credentials\_uri: The URI of the credential.

Not supported

Not supported

Not supported

Not supported

Not supported

Supported

Not supported

sts\_endpoint: the endpoint of STS. VPC endpoints and Internet endpoints are supported. Default value: `sts.aliyuncs.com`. For more information about the valid values, see [Endpoints](/help/en/ram/developer-reference/api-sts-2015-04-01-endpoint).

Not supported

Not supported

\-

Not supported

\-

Not supported

Not supported

timeout: the timeout period of HTTP read requests. Default value: 5000. Unit: milliseconds.

Not supported

Not supported

\-

\-

\-

\-

Not supported

connect\_timeout: the timeout period of HTTP connection requests. Default value: 10000. Unit: milliseconds.

Not supported

Not supported

\-

\-

\-

\-

Not supported

## **Initialize a Credentials client**

You can use one of the following methods to initialize a Credentials client as needed:

**Important**

-   If you use a plaintext AccessKey pair in a project, the AccessKey pair may be leaked due to improper permission management on the code repository. This may threaten the security of all resources within the account to which the AccessKey pair belongs. We recommend that you store the AccessKey pair in environment variables or configuration files.
    
-   We recommend that you initialize the Credentials client in single-instance mode. This mode not only enables the credential caching feature of the SDK, but also effectively prevents traffic control issues and waste of performance resources caused by multiple API calls. For more information, see the [Automatic update mechanism of session credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials#3771cb8a93ewh) section of this topic.
    

### Method 1: Default credential provider chain

**Note**

This is the default method used in the sample code on the OpenAPI Portal.

When you use the Credentials tool without passing any configuration parameters, the tool retrieves credentials from the [default credential provider chain](#3ca299f04bw3c). If you use this method, you must ensure that at least one credential retrieval method supported by the [default credential provider chain](#3ca299f04bw3c) is configured in your application's runtime environment.

```
from alibabacloud_credentials.client import Client as CredentialClient
from alibabacloud_tea_openapi import models as open_api_models

# Do not specify any configuration parameters. Credentials will be retrieved from the default credential provider chain.
credentialsClient = CredentialClient()

credential = credentialsClient.get_credential()
access_key_id = credential.get_access_key_id()
access_key_secret = credential.get_access_key_secret()
security_token = credential.get_security_token()

# If you use a V2.0 SDK for an Alibaba Cloud product, use the Config class from the alibabacloud_tea_openapi.models module to pass the credential.
config = open_api_models.Config(
    credential=credentialsClient,
    endpoint='<endpoint>'
)
# ... Code to initialize the product client using the config object is omitted.
```

### Method 2: AccessKey pair

This method lets you create an AccessKey pair to initialize a Credentials client. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).

**Warning**

An Alibaba Cloud account has full permissions on resources within the account. AccessKey pair leaks of an Alibaba Cloud account pose critical threats to the system.

Therefore, we recommend that you use an AccessKey pair of a RAM user that is granted permissions based on the principle of least privilege (PoLP) to initialize a Credentials client.

```
import os

from alibabacloud_credentials.client import Client as CredentialClient
from alibabacloud_credentials.models import Config as CredentialConfig
from alibabacloud_tea_openapi import models as open_api_models

credentialsConfig = CredentialConfig(
    type='access_key',
    # Required. This example shows how to obtain the AccessKey ID from an environment variable.
    access_key_id=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID'),
    # Required. This example shows how to obtain the AccessKey secret from an environment variable.
    access_key_secret=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET')
)
credentialsClient = CredentialClient(credentialsConfig)

credential = credentialsClient.get_credential()
access_key_id = credential.get_access_key_id()
access_key_secret = credential.get_access_key_secret()
security_token = credential.get_security_token()

# If you use a V2.0 SDK for an Alibaba Cloud product, use the Config class from the alibabacloud_tea_openapi.models module to pass the credential.
config = open_api_models.Config(
    credential=credentialsClient,
    endpoint='<endpoint>'
)
# ... Code to initialize the product client using the config object is omitted.
```

### Method 3: STS token

This method lets you use a static STS token to initialize a Credentials client. For more information about how to obtain an STS token, see [What is STS?](/help/en/ram/user-guide/what-is-sts) The following example shows how to initialize a Credentials client using an STS token. The example does not show how to obtain an STS token.

```
import os

from alibabacloud_credentials.client import Client as CredentialClient
from alibabacloud_credentials.models import Config as CredentialConfig
from alibabacloud_tea_openapi import models as open_api_models

credentialsConfig = CredentialConfig(
    type='sts',
    # Required. This example shows how to obtain the AccessKey ID from an environment variable.
    access_key_id=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID'),
    # Required. This example shows how to obtain the AccessKey secret from an environment variable.
    access_key_secret=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET'),
    # Required. This example shows how to obtain the temporary security token from an environment variable.
    security_token=os.environ.get('ALIBABA_CLOUD_SECURITY_TOKEN')
)
credentialsClient = CredentialClient(credentialsConfig)

credential = credentialsClient.get_credential()
access_key_id = credential.get_access_key_id()
access_key_secret = credential.get_access_key_secret()
security_token = credential.get_security_token()

# If you use a V2.0 SDK for an Alibaba Cloud product, use the Config class from the alibabacloud_tea_openapi.models module to pass the credential.
config = open_api_models.Config(
    credential=credentialsClient,
    endpoint='<endpoint>'
)
# ... Code to initialize the product client using the config object is omitted.
```

### Method 4: AccessKey pair and RamRoleArn

The Credentials tool uses the AccessKey and RAM role ARN that you provide to call [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole), obtain an STS token, and use the token as an access credential. The credentials obtained in this way support auto-refresh. For more information, see [Auto-refresh mechanism for session credentials](#2276f689258ra).

```
import os

from alibabacloud_credentials.client import Client as CredentialClient
from alibabacloud_credentials.models import Config as CredentialConfig
from alibabacloud_tea_openapi import models as open_api_models

credentialsConfig = CredentialConfig(
    type='ram_role_arn',
    # Required. This example shows how to obtain the AccessKey ID from an environment variable.
    access_key_id=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID'),
    # Required. This example shows how to obtain the AccessKey secret from an environment variable.
    access_key_secret=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET'),
    # Required. The ARN of the RAM role to assume. Example: acs:ram::123456789012****:role/adminrole. You can set this using the ALIBABA_CLOUD_ROLE_ARN environment variable.
    role_arn='<role_arn>',
    # Optional. The name of the role session. You can set this using the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
    role_session_name='<role_session_name>',
    # Optional. A smaller permission policy. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
    policy='<policy>',
    # Optional. The external ID of the role, which is used to prevent the confused deputy problem.
    external_id='<external_id>',
    # Optional. The session expiration time. The default value is 3600 seconds.
    role_session_expiration=3600
)

credentialsClient = CredentialClient(credentialsConfig)

credential = credentialsClient.get_credential()
access_key_id = credential.get_access_key_id()
access_key_secret = credential.get_access_key_secret()
security_token = credential.get_security_token()

# If you use a V2.0 SDK for an Alibaba Cloud product, use the Config class from the alibabacloud_tea_openapi.models module to pass the credential.
config = open_api_models.Config(
    credential=credentialsClient,
    endpoint='<endpoint>'
)
# ... Code to initialize the product client using the config object is omitted.
```

### Method 5: ECS instance RAM role

If your application runs on an ECS or ECI instance that is assigned a RAM role, the Credentials tool can retrieve the STS token of the RAM role from the instance metadata. This STS token is then used as the access credential. Credentials retrieved in this way support auto-refresh. For more information, see [Auto-refresh mechanism for session credentials](#2276f689258ra).

The Credentials tool uses the security-hardened mode (IMDSv2) by default to access ECS instance metadata. If an exception occurs in security-hardened mode, you can use the `disable_imds_v1` parameter or the **_ALIBABA\_CLOUD\_IMDSV1\_DISABLED_** environment variable to control the exception handling logic:

-   If the value is `False` (the default), the system attempts to switch to NAT mode and continue to retrieve credentials.
    
-   If the value is `True`, credentials can be retrieved only in security-hardened mode. If access in security-hardened mode fails, an exception is thrown.
    

Whether the server supports IMDSv2 depends on your server configuration.

You can also set the **_ALIBABA\_CLOUD\_ECS\_METADATA\_DISABLED_**\=true environment variable to disable credential access from instance metadata.

**Note**

-   For more information about instance metadata, see [Instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).
    
-   For more information about how to assign a RAM role to an ECS or ECI instance, see [Create a RAM role and grant it to an ECS instance](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance#ff715dd098ta4) and [Assign an instance RAM role to an ECI instance](/help/en/eci/user-guide/use-an-instance-ram-role-by-calling-api-operations#section-x3j-g0s-qha).
    
-   When you use the security-hardened mode to retrieve temporary identity credentials, `alibabacloud_credentials` must be version 0.3.6 or later.
    

```
from alibabacloud_credentials.client import Client as CredentialClient
from alibabacloud_credentials.models import Config as CredentialConfig
from alibabacloud_tea_openapi import models as open_api_models

credentialsConfig = CredentialConfig(
    type='ecs_ram_role',
    # Optional. The name of the ECS role. If you do not specify this parameter, the name is automatically retrieved. We recommend that you specify this parameter to reduce the number of requests. You can set this using the ALIBABA_CLOUD_ECS_METADATA environment variable.
    role_name='<role_name>',
    # Optional. The default value is False. If set to True, the security-hardened mode is forcibly used. If set to False, the system first attempts to retrieve the credential in security-hardened mode. If the attempt fails, the system switches to the normal mode (IMDSv1).
    disable_imds_v1=True
)

credentialsClient = CredentialClient(credentialsConfig)

credential = credentialsClient.get_credential()
access_key_id = credential.get_access_key_id()
access_key_secret = credential.get_access_key_secret()
security_token = credential.get_security_token()

# If you use a V2.0 SDK for an Alibaba Cloud product, use the Config class from the alibabacloud_tea_openapi.models module to pass the credential.
config = open_api_models.Config(
    credential=credentialsClient,
    endpoint='<endpoint>'
)
# ... Code to initialize the product client using the config object is omitted.
```

### Method 6: OIDCRoleArn

If you use the OIDC authentication protocol and have already [created a RAM role for an OIDC IdP](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-idp#section-mra-74d-14w), you can provide the OIDC IdP ARN, OIDC token, and RAM role ARN to the Credentials tool. The system automatically calls the [AssumeRoleWithOIDC](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithoidc) API of STS to obtain an STS token for the RAM role and uses this STS token as an access credential. The credentials obtained using this method support auto-refresh. For more information, see [Auto-refresh mechanism for session credentials](#2276f689258ra). For example, if your application runs in an ACK cluster that has the [RRSA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#task-2142941) feature enabled, the Credentials tool can read the OIDC configuration information from the pod's environment variables, call the AssumeRoleWithOIDC API to obtain an STS token for the service role, and then use the STS token to access Alibaba Cloud services.

```
from alibabacloud_credentials.client import Client as CredentialClient
from alibabacloud_credentials.models import Config as CredentialConfig
from alibabacloud_tea_openapi import models as open_api_models

credentialsConfig = CredentialConfig(
    type='oidc_role_arn',
    # Required. The ARN of the RAM role. You can set this using the ALIBABA_CLOUD_ROLE_ARN environment variable.
    role_arn='<role_arn>',
    # Required. The ARN of the OIDC IdP. You can set this using the ALIBABA_CLOUD_OIDC_PROVIDER_ARN environment variable.
    oidc_provider_arn='<oidc_provider_arn>',
    # Required. The path of the OIDC token file. You can set this using the ALIBABA_CLOUD_OIDC_TOKEN_FILE environment variable.
    oidc_token_file_path='<oidc_token_file_path>',
    # Optional. The name of the role session. You can set this using the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
    role_session_name='<role_session_name>',
    # Optional. A smaller permission policy. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
    policy='<policy>',
    # Optional. The session expiration time. The default value is 3600 seconds.
    role_session_expiration=3600
)
credentialsClient = CredentialClient(credentialsConfig)

credential = credentialsClient.get_credential()
access_key_id = credential.get_access_key_id()
access_key_secret = credential.get_access_key_secret()
security_token = credential.get_security_token()

# If you use a V2.0 SDK for an Alibaba Cloud product, use the Config class from the alibabacloud_tea_openapi.models module to pass the credential.
config = open_api_models.Config(
    credential=credentialsClient,
    endpoint='<endpoint>'
)
# ... Code to initialize the product client using the config object is omitted.
```

### Method 7: URI credential

You can encapsulate the STS service and expose its URI to allow external services to retrieve an STS token from the URI. This reduces the risk of exposing sensitive information such as AccessKeys. The Credentials tool can access the URI you provide to retrieve an STS token. This STS token is then used as the access credential. Credentials retrieved in this way support auto-refresh. For more information, see [Auto-refresh mechanism for session credentials](#2276f689258ra).

The URI must meet the following conditions:

-   Supports GET requests.
    
-   Returns a 200 status code.
    
-   The response body has the following structure:
    
    ```
    {
      "Code": "Success",
      "AccessKeySecret": "yourAccessKeySecret",
      "AccessKeyId": "STS.****************",
      "Expiration": "2021-09-26T03:46:38Z",
      "SecurityToken": "yourSecurityToken"
    }
    ```
    

```
from alibabacloud_credentials.client import Client as CredentialClient
from alibabacloud_credentials.models import Config as CredentialConfig
from alibabacloud_tea_openapi import models as open_api_models

credentialsConfig = CredentialConfig(
    type='credentials_uri',
    # Required. The external URI for retrieving credentials. The format is http://local_or_remote_uri/. You can set this using the ALIBABA_CLOUD_CREDENTIALS_URI environment variable.
    credentials_uri='<credentials_uri>',
)
credentialsClient = CredentialClient(credentialsConfig)

credential = credentialsClient.get_credential()
access_key_id = credential.get_access_key_id()
access_key_secret = credential.get_access_key_secret()
security_token = credential.get_security_token()

# If you use a V2.0 SDK for an Alibaba Cloud product, use the Config class from the alibabacloud_tea_openapi.models module to pass the credential.
config = open_api_models.Config(
    credential=credentialsClient,
    endpoint='<endpoint>'
)
# ... Code to initialize the product client using the config object is omitted.
```

### Method 8: Bearer token

Only [Cloud Call Center](https://api.aliyun.com/api/CCC/2020-07-01/ListPrivilegesOfUser) lets you use a bearer token to initialize an SDK client.

```
from alibabacloud_credentials.client import Client as CredentialClient
from alibabacloud_credentials.models import Config as CredentialConfig
from alibabacloud_tea_openapi import models as open_api_models

credentialsConfig = CredentialConfig(
    type='bearer',
    # Required. Enter your bearer token.
    bearer_token='<BearerToken>',
)
credentialsClient = CredentialClient(credentialsConfig)

credential = credentialsClient.get_credential()
access_key_id = credential.get_access_key_id()
access_key_secret = credential.get_access_key_secret()
security_token = credential.get_security_token()

# If you use the CCC V2.0 SDK, use the Config class from the alibabacloud_tea_openapi.models module to pass the credential.
config = open_api_models.Config(
    credential=credentialsClient,
    endpoint='<endpoint>'
)
# ... Code to initialize the product client using the config object is omitted.
```

## Default credential provider chain

If you want to use different types of credentials in the development and production environments of your application, you generally need to obtain the environment information from the code and write code branches to obtain different credentials for the development and production environments. The default credential provider chain of Alibaba Cloud Credentials for Java lets you obtain credentials for different environments based on configurations independent of the application, without the need for code modification. If you use `Client client = new Client()` to initialize a Credentials client without specifying an initialization method, the Credentials tool obtains the credential information in the following order:

### 1\. Using environment variables

If no credential information is found in the system attributes, the Credentials continues to check the environment variables.

-   If both the **_ALIBABA\_CLOUD\_ACCESS\_KEY\_ID_** and **_ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET_** environment variables are specified, they are used as the default credential.
    
-   If **_ALIBABA\_CLOUD\_ACCESS\_KEY\_ID, ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET_**, and **_ALIBABA\_CLOUD\_SECURITY\_TOKEN_** are specified, the STS token is used as the default credential.
    

### 2\. Obtain the credential information using the RAM role of an OIDC IdP

If no credentials with a higher priority are found, the Credentials tool checks the following environment variables that are related to the RAM role of the OIDC IdP:

-   **_ALIBABA\_CLOUD\_ROLE\_ARN_**: the ARN of the RAM role.
    
-   **_ALIBABA\_CLOUD\_OIDC\_PROVIDER\_ARN_**: the ARN of the OIDC IdP.
    
-   **_ALIBABA\_CLOUD\_OIDC\_TOKEN\_FILE:_** the file path of the OIDC token.
    

If the preceding three environment variables are specified and valid, the Credentials tool uses the environment variables to call the [AssumeRoleWithOIDC](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithoidc) operation of STS to obtain an STS token as the default credential.

### 3\. Using configuration files

**Note**

This feature requires `alibabacloud_credentials` version **1.0rc3** or later.

If no credentials with a higher priority are found, the Credentials tool attempts to load the `config.json` file. Default file path:

-   Linux/macOS: `~/.aliyun/config.json`
    
-   Windows: `C:\Users\USER_NAME\.aliyun\config.json`
    

Do not change the preceding default paths. If you want to use this method to configure an access credential, manually create a config.json file in the corresponding path. Example:

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
		}
	]
}
```

In the config.json file, you can use mode to specify a type of credential:

-   AK: uses the AccessKey pair of a RAM user to obtain the credential information.
    
-   StsToken: uses the STS token as the credential information.
    
-   RamRoleArn: uses the ARN of a RAM role to obtain the credential information.
    
-   EcsRamRole: uses the RAM role attached to an ECS instance to obtain the credential information.
    
-   OIDC: uses the ARN of an OIDC IdP and the OIDC token file to obtain the credential information.
    
-   ChainableRamRoleArn: utilizes a role chaining mechanism. It allows you to assume a new RAM role and acquire a new, temporary credential by referencing another credential profile, which is specified by the `source_profile` parameter.
    

After you complete the configurations, the Credentials tool selects the credential specified by the **current** parameter in the configuration file and initialize the client. You can also specify the **_ALIBABA\_CLOUD\_PROFILE_** environment variable to specify the credential information. For example, you can set the **_ALIBABA\_CLOUD\_PROFILE_** environment variable to **client1**.

### **4\. Obtain the credential information using the RAM role of an ECS instance**

If no credentials are found, the Credentials tool attempts to retrieve the STS token of the RAM role that is granted to the instance from the instance metadata. This token is used as the default credential. When accessing instance metadata, the program first retrieves the name of the RAM role that is granted to the current instance, and then retrieves the corresponding STS token based on that role name. You can also specify the RAM role name using the **_ALIBABA\_CLOUD\_ECS\_METADATA_** environment variable to reduce the time required to retrieve credentials and improve efficiency.

By default, the Credentials tool accesses metadata in security-hardened mode (IMDSv2). If an exception occurs in security-hardened mode, you can use the **_ALIBABA\_CLOUD\_IMDSV1\_DISABLED_** environment variable to control the exception handling logic:

-   If the value is `false` (the default), the system attempts to switch to NAT mode to continue to retrieve credentials.
    
-   If the value is `true`, the system uses only the security-hardened mode to retrieve credentials and throws an exception if access fails.
    

You can also set the **_ALIBABA\_CLOUD\_ECS\_METADATA\_DISABLED_**\=true environment variable to disable credential access from ECS metadata.

**Note**

-   For more information about instance metadata, see [Instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).
    
-   For more information about how to assign a RAM role to an ECS or ECI instance, see [Create a RAM role and grant it to an ECS instance](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance#ff715dd098ta4) and [Assign an instance RAM role to an ECI instance](/help/en/eci/user-guide/use-an-instance-ram-role-by-calling-api-operations#section-x3j-g0s-qha).
    
-   To retrieve a temporary identity credential in security-hardened mode, you must make sure that the version of alibabacloud\_credentials is 0.3.6 or later.
    

### 5\. Obtain the credential information based on a URI

If no valid credential is obtained using the preceding methods, the Credentials tool checks the **_ALIBABA\_CLOUD\_CREDENTIALS\_URI_** environment variable. If this environment variable exists and specifies a valid URI, the Credentials tool initiates an HTTP requests to obtain an STS token as the default credential.

## **Automatic update mechanism** of session credentials

Session credentials include ARNs of RAM roles (RamRoleArn), RAM roles of ECS instances, RAM roles of OIDC IdPs (OIDCRoleArn), and credential URIs. The Credentials tool provides a built-in automatic update mechanism for session credentials. After a credential is obtained from the first call, the Credentials tool stores the credential in the cache. In subsequent calls, the credential is read from the cache as long as the credential is not expired. Otherwise, the Credentials tool makes a call to obtain the credential again, and updates the credential in the cache.

**Note**

For RAM roles of ECS instances, the Credentials tool updates the credential 15 minutes before the cache time-to-live (TTL) ends.

In the following example, the Credentials client is created in single-instance mode and is used to initialize the cloud service client. Then, an API operation is called during different time periods to check whether internal cache is used and whether the credential is refreshed after the cache expires.

```
import os
import sys
import time
import threading
from functools import wraps
from threading import Lock

from alibabacloud_credentials.client import Client as CredentialClient
from alibabacloud_credentials.models import Config as CredentialConfig
from alibabacloud_ecs20140526.client import Client
from alibabacloud_ecs20140526.models import DescribeRegionsRequest
from alibabacloud_tea_openapi.models import Config as EcsConfig


#
# Thread-safe singleton decorator
#

def singleton(cls):
    """Implements a thread-safe singleton pattern"""
    instances = {}
    lock = Lock()

    @wraps(cls)
    def wrapper(*args, **kwargs):
        with lock:
            if cls not in instances:
                instances[cls] = cls(*args, **kwargs)
        return instances[cls]

    return wrapper


#
# Singleton service class
#

@singleton
class Credential:
    def __init__(self):
        self._client = self._init_client()

    @staticmethod
    def _init_client() -> CredentialClient:
        try:
            config = CredentialConfig(
                type="ram_role_arn",
                access_key_id=os.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"),
                access_key_secret=os.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"),
                role_arn=os.getenv("ALIBABA_CLOUD_ROLE_ARN"),
                role_session_name="RamRoleArnTest",
                role_session_expiration=3600,
            )
            return CredentialClient(config)
        except Exception as e:
            raise RuntimeError(f"Credential initialization failed: {e}") from e

    @property
    def client(self) -> CredentialClient:
        return self._client


@singleton
class EcsClient:
    def __init__(self, credential: CredentialClient):
        self._client = self._init_client(credential)

    @staticmethod
    def _init_client(credential: CredentialClient) -> Client:
        try:
            ecs_config = EcsConfig(credential=credential)
            ecs_config.endpoint = 'ecs.cn-hangzhou.aliyuncs.com'
            return Client(ecs_config)
        except Exception as e:
            raise RuntimeError(f"ECS client initialization failed: {e}") from e

    @property
    def client(self) -> Client:
        return self._client


#
# Task function
#

def execute_task():
    try:
        # Get the credential and the ECS client.
        credential = Credential().client.get_credential()
        ecs_client = EcsClient(Credential().client).client

        # Print the credential information.
        print("Time:", time.strftime("%Y-%m-%d %H:%M:%S"))
        print("AK ID:", credential.access_key_id)
        print("AK Secret:", credential.access_key_secret)
        print("STS Token:", credential.security_token)

        # Call the API operation to query the list of regions.
        request = DescribeRegionsRequest()
        response = ecs_client.describe_regions(request)
        print("Invoke result:", response.to_map()["statusCode"])

    except Exception as e:
        print(f"ECS client execution failed: {e}")
        raise


def schedule_task():
    def run_execute_task():
        try:
            execute_task()
        except Exception as e:
            print(f"Task execution failed: {e}")
        finally:
            nonlocal task_count
            task_count += 1
            if task_count == len(DELAYS):
                print("All tasks completed. Exiting program.")
                sys.exit(0)

    def schedule_execution(delay):
        task_timer = threading.Timer(delay, run_execute_task)
        task_timer.start()
        return task_timer

    # Define the delays for the scheduled tasks.
    DELAYS = [0, 600, 4200, 4300]
    task_count = 0

    timers = [schedule_execution(delay) for delay in DELAYS]

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("Program interrupted by user.")
        for timer in timers:
            timer.cancel()


if __name__ == "__main__":
    schedule_task()
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0387320571/p961743.png)

Log analysis:

-   In the first call, the system obtains the credential based on the configurations because the credential is not cached. After the system obtains the credential, the credential is stored in the cache.
    
-   The second call uses the same credential as the first call, which indicates that the credential is obtained from the cache.
    
-   In the third call, the credential has expired because the third call is 4,200 seconds later than the first call while the credential TTL (RoleSessionExpiration) is set to 3,600 seconds. The SDK obtains the credential again based on the automatic update mechanism and stored the credential in the cache.
    
-   The fourth call uses the same credential as the third call, which indicates that the credential is updated after cache expiration.
    

### **References**

-   For more information about RAM, see [Terms](/help/en/ram/terms).
    
-   For more information about how to create an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-188766).
    
-   For more information about how to create a RAM user, an AccessKey pair, a RAM role, and a policy and grant permissions to a RAM user, see [RAM SDK overview](/help/en/ram/developer-reference/ram-sdk-overview).
    
-   For more information about how to assume a role using a program, see [STS SDK overview](/help/en/ram/developer-reference/sts-sdk-overview).
    
-   For more information about RAM and STS-related API operations, see [API Reference](/help/en/ram/developer-reference/api-reference/).
    
-   [Best practices for using an access credential to call API operations](/help/en/ram/use-cases/best-practices-for-using-access-credentials-to-access-alibaba-cloud-openapi)
    
-   [Solutions to AccessKey pair leaks](/help/en/ram/user-guide/solution-to-accesskey-leakage)
