When you call API operations to manage cloud resources by using Alibaba Cloud SDKs, you must configure valid credential information. This topic describes how to configure an access credential for Alibaba Cloud SDK V1.0 for Java. The access credential ensures the access security when you use the SDK for development.

## **Prerequisites**

The version of the aliyun-java-sdk-core package must be 4.7.3 or later.

```
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>aliyun-java-sdk-core</artifactId>
    <version>4.7.3</version>
</dependency>
```

## **Method 1: Use an AccessKey pair**

**Important**

-   If the AccessKey pair of an Alibaba Cloud account is leaked, the resources that belong to the account are exposed to potential risks. To ensure account security, we recommend that you use the AccessKey pair of a Resource Access Management (RAM) user. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-2245479).
    
-   Make sure that the ALIBABA\_CLOUD\_ACCESS\_KEY\_ID and ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET environment variables are configured for your runtime environment. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    

-   Configure an AccessKey pair for client initialization by using DefaultProfile.
    
    ```
    import com.aliyuncs.DefaultAcsClient;
    import com.aliyuncs.IAcsClient;
    import com.aliyuncs.profile.DefaultProfile;
    
    public class Sample {
        public static void main(String[] args) {
            DefaultProfile profile = DefaultProfile.getProfile(
                    "<REGION_ID>",
                    // Obtain the AccessKey ID of the RAM user from an environment variable.
                    System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"),
                    // Obtain the AccessKey secret of the RAM user from an environment variable.
                    System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
            IAcsClient client = new DefaultAcsClient(profile);
            // The step of calling an API operation is omitted.
        }
    }
    ```
    
-   Configure an AccessKey pair for client initialization by using BasicCredentials.
    
    ```
    import com.aliyuncs.DefaultAcsClient;
    import com.aliyuncs.IAcsClient;
    import com.aliyuncs.auth.BasicCredentials;
    import com.aliyuncs.profile.DefaultProfile;
    
    public class Sample {
        public static void main(String[] args) {
            BasicCredentials basicCredentials = new BasicCredentials(
                    // Obtain the AccessKey ID of the RAM user from an environment variable.
                    System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"),
                    // Obtain the AccessKey secret of the RAM user from an environment variable.
                    System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")
            );
            DefaultProfile profile = DefaultProfile.getProfile("<REGION_ID>");
            IAcsClient client = new DefaultAcsClient(profile, basicCredentials);
            // The step of calling an API operation is omitted.
        }
    }
    ```
    

## **Method 2: Use an STS token**

Use a temporary Security Token Service (STS) token for client initialization.

```
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.profile.DefaultProfile;

public class Test {
    public static void main(String[] args) {
        DefaultProfile profile = DefaultProfile.getProfile(
                "<REGION_ID>",
                // Obtain the AccessKey ID of the RAM user from an environment variable.
                System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"),
                // Obtain the AccessKey secret of the RAM user from an environment variable.
                System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"),
                // STS Token
                System.getenv("ALIBABA_CLOUD_SECURITY_TOKEN"));
        IAcsClient client = new DefaultAcsClient(profile);
        // The step of calling an API operation is omitted.
    }
}
```

## **Method 3: Use RamRoleArn**

Call the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole) operation of STS as a RAM user to obtain an STS token.

```
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.auth.STSAssumeRoleSessionCredentialsProvider;
import com.aliyuncs.profile.DefaultProfile;

public class Sample {
    public static void main(String[] args) {
        DefaultProfile profile = DefaultProfile.getProfile("<REGION_ID>");
        // Use RamRoleArn for client initialization.
        STSAssumeRoleSessionCredentialsProvider stsProvider = STSAssumeRoleSessionCredentialsProvider
                .builder()
                // Required. Obtain the AccessKey ID of the RAM user from an environment variable.
                .accessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Obtain the AccessKey secret of the RAM user from an environment variable.
                .accessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
                // Specify the Alibaba Cloud Resource Name (ARN) of the RAM role. This parameter is optional if you have configured the ARN of the RAM role by using the ALIBABA_CLOUD_ROLE_ARN environment variable. Otherwise, this parameter is required.
                .roleArn("<ROLE_ARN>")
                // Optional. Specify a custom session name. You can configure a session name by using the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
                .roleSessionName("<ROLE_SESSION_NAME>")
                // Optional. Specify a custom policy. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}.
                .policy("<POLICY>")
                // Optional. Specify the external ID to prevent the confused deputy issue.
                .externalId("<<EXTERNAL_ID>>")
                // Optional. Specify the validity period of the access credential. Unit: seconds. Default value: 3600. The validity period cannot exceed 12 hours.
                .durationSeconds(3600)
                // Optional. Specify the region ID used in the AssumeRole operation.
                .stsRegionId("<STS_REGION_ID>") 
                .build();
        DefaultAcsClient client = new DefaultAcsClient(profile, stsProvider);
        // The step of calling an API operation is omitted.
    }
}
```

## Method 4: Use ECSRamRole

To deploy applications in a secure and convenient manner, the SDK allows you to use the RAM role attached to an Elastic Computer Service (ECS) instance to obtain a temporary authorization token. You can use the token to access the resources and services that are available for the RAM role attached to the ECS instance. For more information, see the "Step 5: (Optional) Obtain a temporary authorization token" section of the [Use an instance RAM role by calling API operations](/help/en/doc-detail/61178.html#Token) topic. This way, the applications that are deployed on the ECS instance can call API operations without the need to use an AccessKey pair. You can attach a RAM role to an ECS instance or elastic container instance. The Credentials tool automatically obtains the RAM role attached to the instance and uses the metadata server to obtain the STS token of the RAM role. The STS token is then used to initialize a Credentials client.

The metadata server supports access in normal mode (IMDSv1) and security hardening mode (IMDSv2). By default, the Credentials tool obtains access credentials from the metadata server in security hardening mode. If an exception occurs in the security hardening mode, you can configure the `DisableIMDSv1` parameter to specify an exception handling logic. Valid values of the DisableIMDSv1 parameter:

1.  `false` (default): The Credentials tool continues to obtain the access credential in normal mode.
    
2.  `true`: The exception is thrown and the Credentials tool continues to obtain the access credential in security hardening mode.
    

The configurations for the metadata server determine whether the server supports the security hardening mode.

**Note**

-   For more information about instance metadata, see [Obtain instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).
    
-   For more information about how to attach a RAM role to an ECS instance, see the "Create an instance RAM role and attach the instance RAM role to an ECS instance" section of the [Instance RAM roles](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance#ff715dd098ta4) topic. For more information about how to attach a RAM role to an elastic container instance, see the "Assign the instance RAM role to an elastic container instance" section of the [Use an instance RAM role by calling API operations](/help/en/eci/user-guide/use-an-instance-ram-role-by-calling-api-operations#section-x3j-g0s-qha) topic.
    

**Important**

Make sure that the RAM role that you want to use is attached to the ECS instance on which the SDK is installed.

```
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.auth.InstanceProfileCredentialsProvider;
import com.aliyuncs.profile.DefaultProfile;

public class Sample {
    public static void main(String[] args) {
        DefaultProfile profile = DefaultProfile.getProfile("<REGION_ID>");
        // Use ECSRamRole for client initialization.
        InstanceProfileCredentialsProvider provider = InstanceProfileCredentialsProvider
                .builder()
                // Specify the name of the RAM role that is attached to the ECS instance.
                .roleName("<ROLE_NAME>")
                //.disableIMDSv1(false)
                .build();
        DefaultAcsClient client = new DefaultAcsClient(profile, provider);
        // The step of calling an API operation is omitted.
    }
}
```

## **Method 5: Use OIDCRoleArn**

After you assign RAM roles to worker nodes in a Container Service for Kubernetes (ACK) cluster, you can use the RAM Roles for Service Accounts (RRSA) feature to allow different applications in the ACK cluster to assume different RAM roles. Applications can assume specific RAM roles, obtain STS tokens, and then use the tokens to access cloud services. This enforces the principle of least privilege and allows applications to call API operations without the need to use AccessKey pairs, which prevents AccessKey pair leaks.

ACK creates a service account OpenID Connect (OIDC) token file, associates the token file with a pod, and then injects relevant environment variables into the pod. The SDK uses the environment variables and calls the [AssumeRoleWithOIDC](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithoidc) operation of STS to obtain an STS token of the RAM role. For more information, see [Use RRSA to authorize different pods to access different cloud services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#task-2142941).

```
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.auth.OIDCCredentialsProvider;
import com.aliyuncs.profile.DefaultProfile;

public class Sample {
    public static void main(String[] args) {
        // Use OIDCRoleArn for client initialization.
        OIDCCredentialsProvider provider = OIDCCredentialsProvider
                .builder()
                // Specify the ARN of the OIDC provider. This parameter is optional if you have configured the ARN of the OIDC provider by using the ALIBABA_CLOUD_OIDC_PROVIDER_ARN environment variable. Otherwise, this parameter is required.
                .oidcProviderArn(System.getenv("ALIBABA_CLOUD_OIDC_PROVIDER_ARN"))
                // Specify the path of the OIDC token file. This parameter is optional if you have configured the path by using the ALIBABA_CLOUD_OIDC_TOKEN_FILE environment variable. Otherwise, this parameter is required.
                .oidcTokenFilePath(System.getenv("ALIBABA_CLOUD_OIDC_TOKEN_FILE"))
                // Specify the ARN of the RAM role. This parameter is optional if you have configured the ARN of the RAM role by using the ALIBABA_CLOUD_ROLE_ARN environment variable. Otherwise, this parameter is required.
                .roleArn(System.getenv("ALIBABA_CLOUD_ROLE_ARN"))
                // Optional. Specify a custom session name.
                .roleSessionName("<ROLE_SESSION_NAME>")
                // Optional. Specify a custom policy. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}.
                .policy("<POLICY>")
                // Optional. Specify the validity period of the access credential. Unit: seconds. Default value: 3600. The validity period cannot exceed 12 hours.
                .durationSeconds(3600)
                // Optional. Specify the region ID of STS.
                .stsRegionId("<REGION_ID>")
                .build();
        DefaultProfile profile = DefaultProfile.getProfile(
                // Specify the region ID of the client.
                "<REGION_ID>");
        IAcsClient client = new DefaultAcsClient(profile, provider);
        // The step of calling an API operation is omitted.
    }
}
```

## Use the default credential provider chain

If you do not specify a method to initialize an SDK client, the default credential provider chain is used.

```
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.exceptions.ClientException;

public class Test {
    public static void main(String[] args) throws ClientException {
        // Use the default credential provider chain.
        IAcsClient client = new DefaultAcsClient("<REGION_ID>");
        // The step of calling an API operation is omitted.
    }
}
```

The default credential provider chain searches for and uses credentials in the following order:

### **1\. System properties**

The credential provider chain searches for credentials in system properties. If the system properties `alibabacloud.accessKeyId` and `alibabacloud.accessKeyIdSecret` are defined and non-null values are specified for the system properties, the credential provider chain uses the values of the system properties to create default credentials.

### **2\. Environmental variables**

The credential provider chain searches for credentials from environment variables. If the environment variables `ALIBABA_CLOUD_ACCESS_KEY_ID` and `ALIBABA_CLOUD_ACCESS_KEY_SECRET` are defined and non-null values are specified for the environment variables, the credential provider chain uses the values of the environment variables to create default credentials.

### 3\. RAM role of an OIDC provider

If no credentials are found in the previous step, the Credentials tool obtains the values of the following environment variables:

_ALIBABA\_CLOUD\_ROLE\_ARN_: the ARN of the RAM role.

_ALIBABA\_CLOUD\_OIDC\_PROVIDER\_ARN_: the ARN of the OIDC provider.

_ALIBABA\_CLOUD\_OIDC\_TOKEN\_FILE_: the path of the OIDC token file.

If the preceding three environment variables are specified, the Credentials tool uses the environment variables to call the [AssumeRoleWithOIDC](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithoidc) operation of STS to obtain an STS token as the default credential.

### **4\. Configuration file config.json**

If no credentials are found in the previous step, the Credentials tool obtains the credential information from the config.json file. The path of the configuration file varies based on the operating system:

Linux: `~/.aliyun/config.json`

Windows: `C:\Users\USER_NAME\.aliyun\config.json`

If the config.json file exists, the application initializes a Credentials client by using credential information that is specified by the **_current_** parameter in the config.json file. You can also specify the **_ALIBABA\_CLOUD\_PROFILE_** environment variable to specify the credential information. For example, you can set the **_ALIBABA\_CLOUD\_PROFILE_** environment variable to **_client1_**.

The mode parameter in the config.json file specifies the method that is used to obtain the credential information. Valid values:

-   AK: uses the AccessKey pair of a RAM user to obtain the credential information.
    
-   RamRoleArn: uses the ARN of a RAM role to obtain the credential information.
    
-   EcsRamRole: uses the RAM role attached to an ECS instance to obtain the credential information.
    
-   OIDC: uses the ARN of an OIDC IdP and the OIDC token file to obtain the credential information.
    
-   ChainableRamRoleArn: uses a role chain and specifies an access credential in another JSON file to obtain the credential information.
    

Configuration example:

```
{
	"current": "default",
	"profiles": [
		{
			"name": "default",
			"mode": "AK",
			"access_key_id": "<ALIBABA_CLOUD_ACCESS_KEY_ID>",
			"access_key_secret": "<ALIBABA_CLOUD_ACCESS_KEY_SECRET>"
		},
		{
			"name":"client1",
			"mode":"RamRoleArn",
			"access_key_id":"<ALIBABA_CLOUD_ACCESS_KEY_ID>",
			"access_key_secret":"<ALIBABA_CLOUD_ACCESS_KEY_SECRET>",
			"ram_role_arn":"<ROLE_ARN>",
			"ram_session_name":"<ROLE_SESSION_NAME>",
			"expired_seconds":3600
		},
		{
			"name":"client2",
			"mode":"EcsRamRole",
			"ram_role_name":"<RAM_ROLE_ARN>"
		},
		{
			"name":"client3",
			"mode":"OIDC",
			"oidc_provider_arn":"<OIDC_PROVIDER_ARN>",
			"oidc_token_file":"<OIDC_TOKEN_FILE>",
			"ram_role_arn":"<ROLE_ARN>",
			"ram_session_name":"<ROLE_SESSION_NAME>",
			"expired_seconds":3600
		},
		{
			"name":"client4",
			"mode":"ChainableRamRoleArn",
			"source_profile":"<PROFILE_NAME>",
			"ram_role_arn":"<ROLE_ARN>",
			"ram_session_name":"<ROLE_SESSION_NAME>",
			"expired_seconds":3600
		}
	]
}

```

### 5\. RAM role of an ECS instance

If no credentials are found in the previous step, the Credentials tool obtains the value of the _ALIBABA\_CLOUD\_ECS\_METADATA_ environment variable that specifies the RAM role name of an ECS instance. If the RAM role exists, the application obtains an STS token of the RAM role as the default credential by using the metadata server of ECS.

### 6\. Credential URI

If no credentials are found in the previous step, the Credentials tool obtains the value of the **_ALIBABA\_CLOUD\_CREDENTIALS\_URI_** environment variable that specifies the URI of the credential. If the URI of the credential exists, the application uses the URI of the credential to obtain an STS token as the default credential.
