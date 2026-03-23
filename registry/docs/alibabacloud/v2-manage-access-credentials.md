When you use Alibaba Cloud SDKs, credential information, such as AccessKey pairs and Security Token Service (STS) tokens, is managed by the Credentials tool. This topic describes the credential types that the Credentials tool supports and how to configure them.

## Prerequisites

-   The Credentials tool requires Java 8 or later. For more information, see [Alibaba Cloud SDK Support Policy](/help/en/sdk/product-overview/alibaba-cloud-sdk-support-policies).
    
-   To use Alibaba Cloud SDK V2.0, see [V2.0 SDK and V1.0 SDK](/help/en/sdk/product-overview/differences-between-v1-and-v2-sdks).
    

## Install the Credentials tool

Use the latest version of the Credentials dependency package to ensure that all features are supported.

```
<dependency>
  <groupId>com.aliyun</groupId>
  <artifactId>credentials-java</artifactId>
  <version>latest-version</version>
</dependency>
<!-- If you use credentials-java alone, you must add the tea package. -->
<dependency>
  <groupId>com.aliyun</groupId>
  <artifactId>tea</artifactId>
  <version>latest-version</version>
</dependency>
```

For information about the latest version of the Credentials package, see [GitHub](https://github.com/aliyun/credentials-java/blob/master/ChangeLog.txt) or [Maven Repository](https://central.sonatype.com/artifact/com.aliyun/credentials-java). For information about the latest version of the Tea package, see [GitHub](https://github.com/aliyun/tea-java) or [Maven Repository](https://central.sonatype.com/artifact/com.aliyun/tea).

## Credential types supported by the Credentials tool and their configuration parameters

The credential types supported by the Credentials tool and their configuration parameters are defined in the `com.aliyun.credentials.models.Config` class. The credential type is specified by the `type` parameter, and the required configuration parameters differ for each credential type. The following table describes the valid values of the `type` parameter and the configuration parameters supported by each credential type. In the table, `Supported` indicates a required parameter, `-` indicates an optional parameter, and `Not supported` indicates an unsupported parameter.

**Note**

We recommend that you do not use credential types or parameters that are not listed in the following table.

**type**

[access\_key](/help/en/sdk/developer-reference/v2-manage-python-access-credentials#49b9ce814b4r5)

[sts](/help/en/sdk/developer-reference/v2-manage-python-access-credentials#61e3df504bhpg)

[ram\_role\_arn](/help/en/sdk/developer-reference/v2-manage-python-access-credentials#87d4cd004bvxe)

[ecs\_ram\_role](/help/en/sdk/developer-reference/v2-manage-python-access-credentials#98e26410587z9)

[oidc\_role\_arn](/help/en/sdk/developer-reference/v2-manage-python-access-credentials#ec8021b053aqe)

[credentials\_uri](/help/en/sdk/developer-reference/v2-manage-python-access-credentials#bae20c704b8m2)

[bearer](/help/en/sdk/developer-reference/v2-manage-python-access-credentials#102f78804bltu)

accessKeyId: The AccessKey ID.

Supported

Supported

Supported

Not supported

Not supported

Not supported

Not supported

accessKeySecret: The AccessKey secret.

✓

Supported

Supported

Not supported

Not supported

Not supported

Not supported

securityToken: The STS token.

Not supported

Supported

\-

Not supported

Not supported

×

Not supported

roleArn: The Alibaba Cloud Resource Name (ARN) of the RAM role.

Not supported

Not supported

✓

Not supported

Supported

Not supported

Not supported

roleSessionName: A custom session name. The default format is `credentials-java-current-timestamp`.

Not supported

Not supported

\-

Not supported

\-

Not supported

Not supported

roleName: The name of the RAM role.

Not supported

Not supported

Not supported

\-

×

Not supported

Not supported

disableIMDSv1: Specifies whether to enforce the security hardening mode (IMDSv2). The default value is `false`.

Not supported

Not supported

Not supported

\-

Not supported

Not supported

Not supported

bearerToken: The bearer token.

Not supported

Not supported

Not supported

Not supported

Not supported

Not supported

✓

policy: A custom policy.

Not supported

Not supported

\-

Not supported

\-

×

Not supported

roleSessionExpiration: The validity period of the session. Default value: 3600. Unit: seconds. The minimum value is 900 seconds. The maximum value is the maximum session duration that is supported by the RAM role.

Not supported

Not supported

\-

Not supported

\-

Not supported

Not supported

oidcProviderArn: The ARN of the OIDC IdP.

Not supported

Not supported

Not supported

Not supported

Supported

Not supported

Not supported

oidcTokenFilePath: The path of the OIDC token file.

Not supported

Not supported

Not supported

Not supported

Supported

Not supported

Not supported

externalId: the external ID of the role, which is used to prevent the confused deputy issue. For more information, see [Use external IDs to prevent the confused deputy issue](/help/en/ram/use-cases/use-externalid-to-prevent-the-confused-deputy-problem).

Not supported

Not supported

\-

Not supported

Not supported

Not supported

Not supported

credentialsURI: The URI of the external credential.

Not supported

Not supported

Not supported

Not supported

Not supported

Supported

Not supported

STSEndpoint: The service endpoint for Security Token Service (STS), which supports VPC service endpoints and Internet service endpoints. For a list of valid values, see [Endpoints](/help/en/ram/developer-reference/api-sts-2015-04-01-endpoint). The default value is `sts.aliyuncs.com`.

Not supported

Not supported

\-

×

\-

Not supported

Not supported

timeout: The read timeout period for requests. Default value: 5000 milliseconds.

Not supported

Not supported

\-

\-

\-

\-

Not supported

connectTimeout: The connection timeout period for requests. Default value: 10000 milliseconds.

Not supported

Not supported

\-

\-

\-

\-

Not supported

## Use the Credentials tool

The following sections provide code examples to demonstrate how to use the Credentials tool. You can select a method based on your requirements.

**Important**

-   We recommend that you save the AccessKey pair in environment variables or configuration files.
    
-   We recommend that you use the singleton pattern when you use the Credentials tool. This practice enables the built-in credential caching feature. This prevents throttling issues caused by multiple API calls and avoids resource waste from creating multiple instances. For more information, see [Auto-refresh mechanism for session credentials](#3771cb8a93ewh).
    

### Method 1: Default credential provider chain

**Note**

This is the default method used in the sample code on the OpenAPI Portal.

If you use the Credentials tool without passing any configuration parameters, the tool obtains credentials from the [default credential provider chain](#3ca299f04bw3c) and uses them as access credentials. When you use this method, you must ensure that a credential acquisition method supported by the [default credential provider chain](#3ca299f04bw3c) is configured in the application runtime environment.

```
import com.aliyun.credentials.Client;
import com.aliyun.credentials.models.CredentialModel;

public class DemoTest {
    public static void main(String[] args) throws Exception {
        // Do not specify configuration parameters. Credentials will be obtained from the default credential provider chain.
        Client credentialClient = new Client();
        
        CredentialModel credential = credentialClient.getCredential();
        String accessKeyId = credential.getAccessKeyId();
        String accessKeySecret = credential.getAccessKeySecret();
        String securityToken = credential.getSecurityToken();


        // If you use a V2.0 SDK of an Alibaba Cloud service, use com.aliyun.teaopenapi.models.Config to pass the credential.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config();
        config.setCredential(credentialClient);
        config.setEndpoint("<Endpoint>");
        // The code for initializing the cloud service client using config is omitted.
    }
}
```

### Method 2: AccessKey pair

The Credentials tool uses your [AccessKey](/help/en/ram/user-guide/create-an-accesskey-pair) as access credentials.

**Warning**

An Alibaba Cloud account has full permissions on all resources. If the AccessKey pair of an Alibaba Cloud account is leaked, it poses a significant security threat to your system. We do not recommend using the AccessKey pair of an Alibaba Cloud account.

We recommend that you use the AccessKey pair of a RAM user that is granted the minimum required permissions.

```
import com.aliyun.credentials.Client;
import com.aliyun.credentials.models.Config;
import com.aliyun.credentials.models.CredentialModel;

public class DemoTest {
    public static void main(String[] args) throws Exception {
        Config credentialConfig = new Config();
        credentialConfig.setType("access_key");
        // Required. This example shows how to obtain the AccessKey ID from an environment variable.
        credentialConfig.setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"));
        // Required. This example shows how to obtain the AccessKey secret from an environment variable.
        credentialConfig.setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        Client credentialClient = new Client(credentialConfig);
                
        CredentialModel credential = credentialClient.getCredential();
        String accessKeyId = credential.getAccessKeyId();
        String accessKeySecret = credential.getAccessKeySecret();
        String securityToken = credential.getSecurityToken();

        // If you use a V2.0 SDK of an Alibaba Cloud service, use com.aliyun.teaopenapi.models.Config to pass the credential.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config();
        config.setCredential(credentialClient);
        config.setEndpoint("<Endpoint>");
        // The code for initializing the cloud service client using config is omitted.
    }
}
```

### Method 3: STS token

The Credentials tool uses the static [STS token](/help/en/ram/user-guide/what-is-sts) that you provide as access credentials.

```
import com.aliyun.credentials.Client;
import com.aliyun.credentials.models.Config;
import com.aliyun.credentials.models.CredentialModel;

public class DemoTest {
    public static void main(String[] args) {
        Config credentialConfig = new Config();
        credentialConfig.setType("sts");
        // Required. This example shows how to obtain the AccessKey ID from an environment variable.
        credentialConfig.setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"));
        // Required. This example shows how to obtain the AccessKey secret from an environment variable.
        credentialConfig.setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        // Required. This example shows how to obtain the temporary security token from an environment variable.
        credentialConfig.setSecurityToken(System.getenv("ALIBABA_CLOUD_SECURITY_TOKEN"));
        Client credentialClient = new Client(credentialConfig);
        
        CredentialModel credential = credentialClient.getCredential();
        String accessKeyId = credential.getAccessKeyId();
        String accessKeySecret = credential.getAccessKeySecret();
        String securityToken = credential.getSecurityToken();

        // If you use a V2.0 SDK of an Alibaba Cloud service, use com.aliyun.teaopenapi.models.Config to pass the credential.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config();
        config.setCredential(credentialClient);
        config.setEndpoint("<Endpoint>");
        // The code for initializing the cloud service client using config is omitted.
    }
}
```

### Method 4: AccessKey pair and RamRoleArn

The Credentials tool uses the AccessKey pair and RAM role ARN that you provide to call the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole) operation to obtain an STS token. This token is then used as the access credential. Credentials obtained this way support auto-refresh. For more information, see [Auto-refresh mechanism for session credentials](#3771cb8a93ewh).

```
import com.aliyun.credentials.Client;
import com.aliyun.credentials.models.Config;
import com.aliyun.credentials.models.CredentialModel;

public class DemoTest {
    public static void main(String[] args) throws Exception {
        Config credentialConfig = new Config();
        credentialConfig.setType("ram_role_arn");
        // Required. This example shows how to obtain the AccessKey ID from an environment variable.
        credentialConfig.setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"));
        // Required. This example shows how to obtain the AccessKey secret from an environment variable.
        credentialConfig.setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        // Optional. You can use a temporary credential to assume another RAM role.
        credentialConfig.setSecurityToken(System.getenv("ALIBABA_CLOUD_SECURITY_TOKEN"));
        // Required. The ARN of the RAM role to assume. Example: acs:ram::123456789012****:role/adminrole. You can set this parameter using the ALIBABA_CLOUD_ROLE_ARN environment variable.
        credentialConfig.setRoleArn("<RoleArn>");
        // Optional. The name of the role session. The default format is credentials-java-current timestamp. You can set this parameter using the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
        credentialConfig.setRoleSessionName("<RoleSessionName>");
        // Optional. Specify a more restrictive policy. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}.
        credentialConfig.setPolicy("<Policy>");
        // Optional. The external ID of the role. This parameter is used to prevent the confused deputy problem.
        credentialConfig.setExternalId("<ExternalId>");
        // Optional. The validity period of the session. Default value: 3600 seconds.
        credentialConfig.setRoleSessionExpiration(3600);
        Client credentialClient = new Client(credentialConfig);
        
        CredentialModel credential = credentialClient.getCredential();
        String accessKeyId = credential.getAccessKeyId();
        String accessKeySecret = credential.getAccessKeySecret();
        String securityToken = credential.getSecurityToken();

        // If you use a V2.0 SDK of an Alibaba Cloud service, use com.aliyun.teaopenapi.models.Config to pass the credential.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config();
        config.setCredential(credentialClient);
        config.setEndpoint("<Endpoint>");
        // The code for initializing the cloud service client using config is omitted.
    }
}
```

### Method 5: Instance RAM role

If your application runs on an ECS or ECI instance that is granted a RAM role, the Credentials tool can obtain the STS token for the RAM role from the instance metadata and use it as an access credential. When accessing the instance metadata, the application first retrieves the name of the RAM role that is granted to the current instance and then obtains the corresponding STS token based on that role. You can specify the RAM role name using the `roleName` parameter or the **_ALIBABA\_CLOUD\_ECS\_METADATA_** environment variable to reduce the time required to obtain credentials and improve efficiency. Credentials obtained this way support auto-refresh. For more information, see [Auto-refresh mechanism for session credentials](#3771cb8a93ewh).

By default, the Credentials tool uses the security-hardened mode (IMDSv2) to access instance metadata. If an exception occurs in security-hardened mode, you can use the `disableIMDSv1` parameter or the **_ALIBABA\_CLOUD\_IMDSV1\_DISABLED_** environment variable to control the exception handling logic:

-   If the value is `false` (default), the system attempts to switch to NAT mode to continue obtaining credentials.
    
-   If the value is `true`, only the security-hardened mode can be used to obtain credentials. An exception is thrown if access in this mode fails.
    

Whether the server supports IMDSv2 depends on your server configuration.

In addition, you can disable credential access from instance metadata by setting the **_ALIBABA\_CLOUD\_ECS\_METADATA\_DISABLED_**\=true environment variable.

**Note**

-   For more information about instance metadata, see [Instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).
    
-   For more information about how to grant a RAM role to an ECS or ECI instance, see [Create a RAM role and grant it to an ECS instance](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance#ff715dd098ta4) and [Grant an instance RAM role to an ECI instance](/help/en/eci/user-guide/use-an-instance-ram-role-by-calling-api-operations#section-x3j-g0s-qha).
    
-   To obtain temporary credentials in security-hardened mode, you must use credentials-java 0.3.10 or later.
    

```
import com.aliyun.credentials.Client;
import com.aliyun.credentials.models.Config;
import com.aliyun.credentials.models.CredentialModel;

public class DemoTest {
    public static void main(String[] args) throws Exception {
        Config credentialConfig = new Config();
        credentialConfig.setType("ecs_ram_role");
        // Optional. The name of the RAM role granted to the ECS instance. If you do not set this parameter, the name is automatically obtained. We recommend that you set this parameter to reduce the number of requests. You can set this parameter using the ALIBABA_CLOUD_ECS_METADATA environment variable.
        credentialConfig.setRoleName("<RoleName>");
        // Optional. A value of true indicates that security-hardened mode is forcibly used. Default value: false. The system first attempts to obtain credentials in security-hardened mode. If the attempt fails, the system switches to normal mode.
        credentialConfig.setDisableIMDSv1(false);
        Client credentialClient = new Client(credentialConfig);
        
        CredentialModel credential = credentialClient.getCredential();
        String accessKeyId = credential.getAccessKeyId();
        String accessKeySecret = credential.getAccessKeySecret();
        String securityToken = credential.getSecurityToken();
        
        // If you use a V2.0 SDK of an Alibaba Cloud service, use com.aliyun.teaopenapi.models.Config to pass the credential.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config();
        config.setCredential(credentialClient);
        config.setEndpoint("<Endpoint>");
        // The code for initializing the cloud service client using config is omitted.
    }
}
```

### Method 6: OIDCRoleArn

If you use the OIDC authentication protocol and have [created a RAM role for an OIDC IdP](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-idp#section-mra-74d-14w), you can pass the OIDC IdP ARN, OIDC token, and RAM role ARN to the Credentials tool. The system then automatically calls the [AssumeRoleWithOIDC](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithoidc) operation to obtain the STS token for the RAM role and uses this token as the access credential. Credentials obtained this way support auto-refresh. For more information, see [Auto-refresh mechanism for session credentials](#3771cb8a93ewh). For example, if your application runs in an ACK cluster where the [RRSA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#task-2142941) feature is enabled, the Credentials tool reads the OIDC configuration information from the pod environment variables, calls the AssumeRoleWithOIDC operation to obtain the STS token for the service role, and uses this token to access related Alibaba Cloud services.

```
import com.aliyun.credentials.Client;
import com.aliyun.credentials.models.Config;
import com.aliyun.credentials.models.CredentialModel;

public class DemoTest {
    public static void main(String[] args) throws Exception {
        Config credentialConfig = new Config();
        credentialConfig.setType("oidc_role_arn");
        // Required. The ARN of the RAM role. You can set this parameter using the ALIBABA_CLOUD_ROLE_ARN environment variable.
        credentialConfig.setRoleArn("<RoleArn>");
        // Required. The ARN of the OIDC IdP. You can set this parameter using the ALIBABA_CLOUD_OIDC_PROVIDER_ARN environment variable.
        credentialConfig.setOidcProviderArn("<OidcProviderArn>");
        // Required. The path of the OIDC token file. You can set this parameter using the ALIBABA_CLOUD_OIDC_TOKEN_FILE environment variable.
        credentialConfig.setOidcTokenFilePath("<OidcTokenFilePath>");
        // Optional. The name of the role session. You can set this parameter using the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
        credentialConfig.setRoleSessionName("<RoleSessionName>");
        // Optional. Specify a more restrictive policy. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
        credentialConfig.setPolicy("<Policy>");
        // Optional. The validity period of the session. Default value: 3600 seconds.
        credentialConfig.setRoleSessionExpiration(3600);
        Client credentialClient = new Client(credentialConfig);
        
        CredentialModel credential = credentialClient.getCredential();
        String accessKeyId = credential.getAccessKeyId();
        String accessKeySecret = credential.getAccessKeySecret();
        String securityToken = credential.getSecurityToken();
        
        // If you use a V2.0 SDK of an Alibaba Cloud service, use com.aliyun.teaopenapi.models.Config to pass the credential.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config();
        config.setCredential(credentialClient);
        config.setEndpoint("<Endpoint>");
        // The code for initializing the cloud service client using config is omitted.
    }
}
```

### Method 7: URI credential

By encapsulating the STS service and exposing its URI, external services can obtain an STS token through the URI. This reduces the risk of exposing sensitive information, such as AccessKey pairs. The Credentials tool obtains an STS token by accessing the URI that you provide and uses this token as an access credential. Credentials obtained this way support auto-refresh. For more information, see [Auto-refresh mechanism for session credentials](#3771cb8a93ewh).

The URI must meet the following conditions:

-   It must support GET requests.
    
-   The response status code must be 2xx.
    
-   The response body must have the following structure:
    
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
import com.aliyun.credentials.Client;
import com.aliyun.credentials.models.Config;
import com.aliyun.credentials.models.CredentialModel;

public class DemoTest {
    public static void main(String[] args) throws Exception {
        Config credentialConfig = new Config();
        credentialConfig.setType("credentials_uri");
        // Required. The URI for obtaining external credentials. The format is http://local_or_remote_uri/. You can set this parameter using the ALIBABA_CLOUD_CREDENTIALS_URI environment variable.
        credentialConfig.setCredentialsUri("<CredentialsUri>");
        Client credentialClient = new Client(credentialConfig);
        
        CredentialModel credential = credentialClient.getCredential();
        String accessKeyId = credential.getAccessKeyId();
        String accessKeySecret = credential.getAccessKeySecret();
        String securityToken = credential.getSecurityToken();
        
        // If you use a V2.0 SDK of an Alibaba Cloud service, use com.aliyun.teaopenapi.models.Config to pass the credential.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config();
        config.setCredential(credentialClient);
        config.setEndpoint("<Endpoint>");
        // The code for initializing the cloud service client using config is omitted.
    }
}
```

### Method 8: Bearer token

Currently, only Cloud Call Center ([CCC](https://api.aliyun.com/api/CCC/2020-07-01/ListPrivilegesOfUser)) supports bearer tokens.

```
import com.aliyun.credentials.Client;
import com.aliyun.credentials.models.Config;
import com.aliyun.credentials.models.CredentialModel;

public class DemoTest {
    public static void main(String[] args) throws Exception {
        Config credentialConfig = new Config();
        credentialConfig.setType("bearer");
        // Required. Enter your bearer token.
        credentialConfig.setBearerToken("<BearerToken>");
        Client credentialClient = new Client(credentialConfig);
        
        CredentialModel credential = credentialClient.getCredential();
        String accessKeyId = credential.getAccessKeyId();
        String accessKeySecret = credential.getAccessKeySecret();
        String securityToken = credential.getSecurityToken();
        
        // If you use the V2.0 SDK for CCC, use com.aliyun.teaopenapi.models.Config to pass the credential.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config();
        config.setCredential(credentialClient);
        config.setEndpoint("<Endpoint>");
        // The code for initializing the cloud service client using config is omitted.
    }
}
```

## Default credential provider chain

The default credential provider chain is a fallback strategy that searches for credentials in a predefined order. The tool proceeds through the chain until it finds credential information. If credential information cannot be obtained from any provider in the chain, a \`CredentialException\` is thrown. The search order is as follows:

### 1\. System properties

The Credentials tool first attempts to obtain credential information from system properties.

-   If \`alibabacloud.accessKeyId\` and \`alibabacloud.accessKeySecret\` are defined in the system properties, an AccessKey pair is used as the default credential.
    
-   If \`alibabacloud.accessKeyId\`, \`alibabacloud.accessKeySecret\`, and \`alibabacloud.sessionToken\` are defined in the system properties, an STS token is used as the default credential.
    

You can add the following JVM parameters when you run a Java program to specify these values:

```
-Dalibabacloud.accessKeyId=your-access-key-id -Dalibabacloud.accessKeySecret=your-access-key-secret
```

### 2\. Environment variables

If no credential information is found in the system properties, the Credentials tool checks the environment variables.

-   If the **_ALIBABA\_CLOUD\_ACCESS\_KEY\_ID_** and **_ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET_** environment variables exist and are not empty, an AccessKey pair is used as the default credential.
    
-   If the ALIBABA\_CLOUD\_ACCESS\_KEY\_ID, **_ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET_**, and **_ALIBABA\_CLOUD\_SECURITY\_TOKEN_** environment variables are all set, an STS token is used as the default credential.
    

### 3\. OIDC RAM role

If no credential information is found, the Credentials tool checks the following environment variables related to OIDC RAM roles:

-   **_ALIBABA\_CLOUD\_ROLE\_ARN_**: The ARN of the RAM role.
    
-   **_ALIBABA\_CLOUD\_OIDC\_PROVIDER\_ARN_**: The ARN of the OIDC IdP.
    
-   **_ALIBABA\_CLOUD\_OIDC\_TOKEN\_FILE_**: The path of the OIDC token file.
    

If the preceding three environment variables exist and are not empty, the Credentials tool uses the values of these environment variables to call the [AssumeRoleWithOIDC](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithoidc) operation of STS and obtain an STS token as the default credential.

### 4\. The config.json configuration file

**Note**

This feature requires credentials-java 0.3.8 or later.

If credentials are still not found, the Credentials tool attempts to load the `config.json` file from the default path and use the specified credential as the default credential. The default file path is:

-   Linux/macOS: `~/.aliyun/config.json`
    
-   Windows: `C:\Users\USER_NAME\.aliyun\config.json`
    

To configure credentials using this method, you can use the [Cloud Assistant CLI](/help/en/cli/configure-credentials) or manually create a `config.json` configuration file in the corresponding path. The following code block shows an example of the content format:

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

**Parameter**

**Description**

current

Specifies the name of the credential to use, which corresponds to the value of the `profiles` parameter's `name` value. By default, the system prioritizes the credential name specified by the **_ALIBABA\_CLOUD\_PROFILE_** environment variable. If this environment variable is not set, the system uses the credential name specified by `current`.

profiles

A collection of credential information. Use the `mode` parameter to specify the credential type:

-   AK: Uses the AccessKey pair of a user as the credential.
    
-   StsToken: Uses an STS token as the credential.
    
-   RamRoleArn: Obtains credentials by having a RAM user assume a RAM role.
    
-   EcsRamRole: Obtains credentials from instance metadata.
    
-   OIDC: Obtains credentials using an OIDC IdP ARN, an OIDC token, and a RAM role ARN.
    
-   ChainableRamRoleArn: Uses a role-chaining method to obtain new credential information using `source_profile` to specify the name of another credential in `profiles`.
    

### 5\. Instance RAM role

If no credential information is found, the Credentials tool attempts to obtain the STS token of the RAM role that is granted to the instance from the instance metadata and use it as the default credential. When accessing instance metadata, the program first obtains the name of the RAM role that is attached to the current instance and then obtains the corresponding STS token based on that role. You can also specify the RAM role name using the **_ALIBABA\_CLOUD\_ECS\_METADATA_** environment variable to reduce the time required to obtain credentials and improve efficiency.

By default, the Credentials tool accesses metadata in security-hardened mode (IMDSv2). If an exception occurs in security-hardened mode, you can use the **_ALIBABA\_CLOUD\_IMDSV1\_DISABLED_** environment variable to control the exception handling logic:

-   If the value is `false` (default), the system attempts to switch to NAT mode to continue obtaining credentials.
    
-   If the value is `true`, only the security-hardened mode is allowed for obtaining credentials. If access in security-hardened mode fails, an exception is thrown.
    

In addition, you can disable credential access from instance metadata by setting the **_ALIBABA\_CLOUD\_ECS\_METADATA\_DISABLED_**\=true environment variable.

**Note**

-   For more information about instance metadata, see [Obtain instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).
    
-   For more information about how to grant a RAM role to an ECS or ECI instance, see [Create a RAM role and attach it to an ECS instance](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance#ff715dd098ta4) and [Attach an instance RAM role to an ECI instance](/help/en/eci/user-guide/use-an-instance-ram-role-by-calling-api-operations#section-x3j-g0s-qha).
    
-   To obtain temporary credentials in security-hardened mode, you must use `credentials-java` 0.3.10 or later.
    

### 6\. CredentialsURI

If no credential information is found, the Credentials tool checks the **_ALIBABA\_CLOUD\_CREDENTIALS\_URI_** environment variable. If this variable exists and points to a valid URI, the Credentials tool accesses this URI to obtain an STS token as the default credential.

## Auto-refresh mechanism for session credentials

Session credentials include [ram\_role\_arn](#e4efbc8a9c8kn), [ecs\_ram\_role](#a615745aa1v00), [oidc\_role\_arn](#3b26f219a8geg), and [credentials\_uri](#5ae7747841csu). This type of credential has a built-in auto-refresh mechanism in the Credentials tool. After a credential client obtains credentials for the first time, the Credentials tool saves the credential information to the cache. In subsequent requests, the same credential client instance automatically fetches the credentials from the cache. If the credentials in the cache are expired, the credential client instance re-obtains the credentials and updates the cache.

**Note**

For \`ecs\_ram\_role\` credentials, the Credentials tool refreshes the cache 15 minutes before the credentials expire.

The following example creates a credential client in a singleton pattern. The client obtains credentials at different time points to verify the auto-refresh mechanism and calls an OpenAPI operation to ensure that the obtained credentials are valid.

```
import com.aliyun.credentials.models.CredentialModel;
import com.aliyun.ecs20140526.Client;
import com.aliyun.ecs20140526.models.DescribeRegionsRequest;
import com.aliyun.ecs20140526.models.DescribeRegionsResponse;
import com.aliyun.teaopenapi.models.Config;
import com.aliyun.teautil.models.RuntimeOptions;

import java.util.Date;
import java.util.concurrent.*;

public class Sample {

    /**
     * The Credential class is used to manage Alibaba Cloud credential instances in singleton pattern.
     */
    private static class Credential {
        private static volatile com.aliyun.credentials.Client instance;

        private Credential() {
        }

        public static com.aliyun.credentials.Client getInstance() {
            if (instance == null) {
                synchronized (Credential.class) {
                    if (instance == null) {
                        try {
                            com.aliyun.credentials.models.Config config = new com.aliyun.credentials.models.Config();
                            config.setType("ram_role_arn");
                            config.setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"));
                            config.setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
                            config.setRoleArn(System.getenv("ALIBABA_CLOUD_ROLE_ARN"));
                            config.setRoleSessionName("RamRoleArnTest");
                            config.setRoleSessionExpiration(3600);
                            instance = new com.aliyun.credentials.Client(config);
                        } catch (Exception e) {
                            throw new RuntimeException("Credential initialization failed: " + e.getMessage(), e);
                        }
                    }
                }
            }
            return instance;
        }
    }

    /**
     * The EcsClient class is used to manage the ECS client in singleton pattern.
     */
    private static class EcsClient {
        private static volatile Client instance;

        private EcsClient() {
        }

        public static Client getInstance(com.aliyun.credentials.Client credentialClient) {
            if (instance == null) {
                synchronized (EcsClient.class) {
                    if (instance == null) {
                        try {
                            Config ecsConfig = new Config();
                            ecsConfig.setEndpoint("ecs.cn-hangzhou.aliyuncs.com");
                            ecsConfig.setCredential(credentialClient);
                            instance = new Client(ecsConfig);
                        } catch (Exception e) {
                            throw new RuntimeException("ECS client initialization failed: " + e.getMessage(), e);
                        }
                    }
                }
            }
            return instance;
        }
    }

    public static void main(String[] args) {
        // Use ThreadPoolExecutor to create a scheduled thread pool.
        ScheduledThreadPoolExecutor scheduler = new ScheduledThreadPoolExecutor(
                1,
                Executors.defaultThreadFactory(),
                new ThreadPoolExecutor.AbortPolicy()
        );
        scheduler.setKeepAliveTime(0L, TimeUnit.SECONDS);
        scheduler.allowCoreThreadTimeOut(false); // Do not allow core threads to time out.

        // Define a Runnable task to execute the call logic.
        Runnable task = () -> {
            try {
                com.aliyun.credentials.Client credentialClient = Credential.getInstance();
                CredentialModel credential = credentialClient.getCredential();
                System.out.println(new Date());
                System.out.printf("AK ID:%s, AK Secret:%s, STS Token:%s%n", credential.accessKeyId, credential.accessKeySecret, credential.securityToken);

                // This example calls an ECS API operation to verify whether the credential is available. You can modify it as needed.
                Client ecsClient = EcsClient.getInstance(credentialClient);
                DescribeRegionsRequest request = new DescribeRegionsRequest();
                RuntimeOptions runtime = new RuntimeOptions();
                DescribeRegionsResponse response = ecsClient.describeRegionsWithOptions(request, runtime);
                System.out.printf("Invoke result:%s%n", response.statusCode);
            } catch (Exception e) {
                throw new RuntimeException("ECS client execution failed: " + e.getMessage(), e);
            }
        };

        try {
            // Execute the task for the first time (immediately).
            scheduler.execute(task);
            // Execute the task for the second time after a delay of 600 seconds.
            scheduler.schedule(task, 600, TimeUnit.SECONDS);
            // Execute the task for the third time, 4200 seconds after the start.
            scheduler.schedule(task, 4200, TimeUnit.SECONDS);
            // Execute the task for the fourth time, 4300 seconds after the start.
            scheduler.schedule(task, 4300, TimeUnit.SECONDS);
        } finally {
            // Shut down the thread pool to ensure it is closed after all tasks are complete.
            scheduler.shutdown();
            try {
                if (!scheduler.awaitTermination(4500, TimeUnit.SECONDS)) {
                    scheduler.shutdownNow();
                }
            } catch (InterruptedException e) {
                scheduler.shutdownNow();
                Thread.currentThread().interrupt();
            }
        }
    }
}
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5973320571/p961679.png)

The following section analyzes the log results:

-   In the first call, no credential information is cached. Therefore, the system obtains the credentials based on the configuration. After the credentials are obtained, they are saved in the cache.
    
-   The credentials used in the second call are the same as the first one. This indicates that the credentials for the second call were retrieved from the cache.
    
-   In the third call, the credentials in the cache are expired. This is because the validity period of the credentials (\`RoleSessionExpiration\`) is set to 3,600 seconds, and the third call occurs 4,200 seconds after the first call. Therefore, the SDK re-obtains new credentials based on the auto-refresh mechanism and saves the new credentials to the cache.
    
-   The credentials used in the fourth call are the same as the new credentials obtained in the third call. This indicates that the credentials in the cache were updated after they expired.
    

## References

-   For more information about RAM, see [Terms](/help/en/ram/terms).
    
-   For more information about how to create an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-188766).
    
-   For more information about how to programmatically create a RAM user, an AccessKey pair, a RAM role, and an access policy and grant permissions, see [RAM SDK Overview](/help/en/ram/developer-reference/ram-sdk-overview).
    
-   For more information about how to programmatically assume a role, see [STS SDK overview](/help/en/ram/developer-reference/sts-sdk-overview).
    
-   For more information about RAM- and STS-related API operations, see [API Reference](/help/en/ram/developer-reference/api-reference/).
    
-   [Best practices for using an access credential to call API operations](/help/en/ram/use-cases/best-practices-for-using-access-credentials-to-access-alibaba-cloud-openapi)
    
-   [Solutions to AccessKey pair leaks](/help/en/ram/user-guide/solution-to-accesskey-leakage)
