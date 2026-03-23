OSS PHP SDK uses access credentials to verify your identity before sending requests to OSS. Choose a credential type based on your runtime environment and security requirements.

## Prerequisites

Before you begin, ensure that you have:

-   Installed the OSS PHP SDK. See [Installation (PHP SDK V1)](/help/en/oss/developer-reference/installation-13)
    

## Choose a credential provider

Pick the method that matches where your application runs:

-   **Running inside Alibaba Cloud (ECS, ECI, or ACK worker node)?** Use [ECSRAMRole](#9eb97565147am) — no AccessKey needed, credentials rotate automatically.
    
-   **Running in Function Compute?** Use [Function Compute context credentials](#662885a264csq) — credentials come from the function context, no setup required.
    
-   **Running on ACK with untrusted workloads?** Use [OIDCRoleARN](#c3176515f0csi) — pod-level permission isolation via RRSA (RAM Roles for Service Account).
    
-   **Need credentials from an external system?** Use [CredentialsURI](#14af5dfaadocj) — fetch STS tokens from any URI endpoint.
    
-   **Cross-account access or delegated permissions?** Use [RAMRoleARN](#cf008d6649g6n) — assumes a RAM role and auto-refreshes the STS token.
    
-   **Short-lived access with manual control?** Use an [STS token](#3a2b4ef1697pd).
    
-   **Secure, long-lived server environment?** Use an [AccessKey pair](#dd657ea839xv1).
    
-   **None of the above fits?** [Implement a custom provider](#3502d8074270l).
    

The table below summarizes all eight methods:

**Method**

**Best for**

**Requires existing AccessKey or STS token**

**Underlying credential**

**Validity**

**Rotation**

Method 1: AccessKey pair

Secure environments needing long-term access

Yes

AccessKey

Long-term

Manual

Method 2: STS token

Untrusted environments with controlled validity and permissions

Yes

STS token

Temporary

Manual

Method 3: RAMRoleARN

Cross-account access or delegated permissions

Yes

STS token

Temporary

Auto

Method 4: ECSRAMRole

ECS instances, ECI instances, or ACK worker nodes

No

STS token

Temporary

Auto

Method 5: Function Compute context

Functions running in Function Compute

No

STS token

Temporary

Not needed

Method 6: OIDCRoleARN

Untrusted workloads on ACK worker nodes

No

STS token

Temporary

Auto

Method 7: CredentialsURI

Applications fetching credentials from an external system

No

STS token

Temporary

Auto

Method 8: Custom

Requirements not covered by the above methods

Custom

Custom

Custom

Custom

## Method 1: Use an AccessKey pair

An AccessKey pair (AccessKey ID + AccessKey secret) provides long-term access and is suitable for applications running in a secure, controlled environment. The credentials don't expire, but you're responsible for rotating them.

**Warning**

An Alibaba Cloud account AccessKey pair has full permissions across all resources. Use an AccessKey pair from a RAM (Resource Access Management) user with the minimum required permissions instead. See [CreateAccessKey](/help/en/ram/developer-reference/api-ims-2019-08-15-createaccesskey).

### Use environment variables

Storing credentials in environment variables prevents them from being hard-coded in source files.

1.  Set the environment variables.
    
    ## Mac OS X/Linux/Unix
    
    ```
    export OSS_ACCESS_KEY_ID=<ALIBABA_CLOUD_ACCESS_KEY_ID>
    export OSS_ACCESS_KEY_SECRET=<ALIBABA_CLOUD_ACCESS_KEY_SECRET>
    ```
    
    ## Windows
    
    ```
    set OSS_ACCESS_KEY_ID=<ALIBABA_CLOUD_ACCESS_KEY_ID>
    set OSS_ACCESS_KEY_SECRET=<ALIBABA_CLOUD_ACCESS_KEY_SECRET>
    ```
    
2.  Initialize the credential provider and create an OSSClient.
    
    ```
       <?php
       require_once __DIR__ . '/vendor/autoload.php';
       use OSS\Credentials\EnvironmentVariableCredentialsProvider;
       use OSS\OssClient;
       use OSS\Core\OssException;
    
       try {
           // Read credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
           $provider = new EnvironmentVariableCredentialsProvider();
    
           // Replace with the endpoint for your bucket's region.
           // Example: http://oss-cn-hangzhou.aliyuncs.com for China (Hangzhou).
           $endpoint = "http://oss-cn-hangzhou.aliyuncs.com";
    
           $config = array(
               "provider"         => $provider,
               "endpoint"         => $endpoint,
               "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
               "region"           => "cn-hangzhou",
           );
           $ossClient = new OssClient($config);
       } catch (OssException $e) {
           printf($e->getMessage() . "\n");
       }
    ```
    

### Use a configuration file

Use this approach when credentials are managed externally and injected at runtime through a config file.

1.  Create a file named `config.ini` with the following content:
    
    ```
       [credentials]
       alibaba_cloud_access_key_id = <ALIBABA_CLOUD_ACCESS_KEY_ID>
       alibaba_cloud_access_key_secret = <ALIBABA_CLOUD_ACCESS_KEY_SECRET>
    ```
    
2.  Load the credentials from the file and create an OSSClient.
    
    ```
       <?php
       if (is_file(__DIR__ . '/../autoload.php')) {
           require_once __DIR__ . '/../autoload.php';
       }
       if (is_file(__DIR__ . '/../vendor/autoload.php')) {
           require_once __DIR__ . '/../vendor/autoload.php';
       }
       use OSS\Credentials\StaticCredentialsProvider;
       use OSS\OssClient;
       use OSS\Core\OssException;
    
       try {
           $ini = parse_ini_file('config.ini');
           $accessKeyId     = $ini['alibaba_cloud_access_key_id'];
           $accessKeySecret = $ini['alibaba_cloud_access_key_secret'];
    
           $provider = new StaticCredentialsProvider($accessKeyId, $accessKeySecret);
           $endpoint = "http://oss-cn-hangzhou.aliyuncs.com";
    
           $config = array(
               "provider"         => $provider,
               "endpoint"         => $endpoint,
               "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
               "region"           => "cn-hangzhou",
           );
           $ossClient = new OssClient($config);
       } catch (OssException $e) {
           printf($e->getMessage() . "\n");
       }
    ```
    

## Method 2: Use an STS token

STS (Security Token Service) tokens are temporary credentials that carry a configurable expiry and permission scope. Use this method when your application runs in an untrusted environment or when you need fine-grained access control. You're responsible for refreshing the token before it expires. See [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole).

1.  Set environment variables for the temporary credentials.
    
    ## Mac OS X/Linux/Unix
    
    ```
    export OSS_ACCESS_KEY_ID=<ALIBABA_CLOUD_ACCESS_KEY_ID>
    export OSS_ACCESS_KEY_SECRET=<ALIBABA_CLOUD_ACCESS_KEY_SECRET>
    export OSS_SESSION_TOKEN=<ALIBABA_CLOUD_SECURITY_TOKEN>
    ```
    
    ## Windows
    
    ```
    set OSS_ACCESS_KEY_ID=<ALIBABA_CLOUD_ACCESS_KEY_ID>
    set OSS_ACCESS_KEY_SECRET=<ALIBABA_CLOUD_ACCESS_KEY_SECRET>
    set OSS_SESSION_TOKEN=<ALIBABA_CLOUD_SECURITY_TOKEN>
    ```
    
2.  Initialize the credential provider and create an OSSClient.
    
    ```
       <?php
       require_once __DIR__ . '/vendor/autoload.php';
       use OSS\Credentials\EnvironmentVariableCredentialsProvider;
       use OSS\OssClient;
       use OSS\Core\OssException;
    
       try {
           // Read credentials from environment variables.
           // Requires OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET, and OSS_SESSION_TOKEN.
           $provider = new EnvironmentVariableCredentialsProvider();
    
           $endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
    
           $config = array(
               "provider"         => $provider,
               "endpoint"         => $endpoint,
               "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
               "region"           => "cn-hangzhou",
           );
           $ossClient = new OssClient($config);
       } catch (OssException $e) {
           printf($e->getMessage() . "\n");
       }
    ```
    

## Method 3: Use RAMRoleARN

**Important**

This method requires `alibabacloud/credentials` 1.2.0 or later.

Use this method when your application needs to assume a RAM role — for example, for cross-account access or to apply a scoped-down access policy. The Credentials tool uses the ARN (Alibaba Cloud Resource Name) of the role to call STS and retrieves a temporary STS token, which it refreshes automatically before expiry.

This method requires an AccessKey pair to authenticate the initial role assumption. See [CreateAccessKey](/help/en/ram/developer-reference/api-ram-2015-05-01-createaccesskey) and [CreateRole](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole).

1.  Add the credential client dependency.
    
    ```
       composer require alibabacloud/credentials
    ```
    
2.  Initialize the credential provider and create an OSSClient.
    
    ```
       <?php
       require_once __DIR__ . '/vendor/autoload.php';
    
       use AlibabaCloud\Credentials\Credential;
       use OSS\Core\OssException;
       use OSS\OssClient;
       use OSS\Credentials\CredentialsProvider;
       use OSS\Credentials\StaticCredentialsProvider;
    
       class AlibabaCloudCredentialsWrapper implements CredentialsProvider
       {
           /** @var Credential */
           private $wrapper;
    
           public function __construct($wrapper)
           {
               $this->wrapper = $wrapper;
           }
    
           public function getCredentials()
           {
               $cred  = $this->wrapper->getCredential();
               $ak    = $cred->getAccessKeyId();
               $sk    = $cred->getAccessKeySecret();
               $token = $cred->getSecurityToken();
               return new StaticCredentialsProvider($ak, $sk, $token);
           }
       }
    
       try {
           $config = new Credential\Config([
               // Credential type for RAM role assumption.
               'type'            => 'ram_role_arn',
               // AccessKey pair of the RAM user performing the role assumption.
               'accessKeyId'     => getenv('OSS_ACCESS_KEY_ID'),
               'accessKeySecret' => getenv('OSS_ACCESS_KEY_SECRET'),
               // ARN of the role to assume. Format: acs:ram::<accountID>:role/<roleName>.
               'roleArn'         => getenv('OSS_STS_ROLE_ARN'),
               // A label to distinguish tokens across sessions.
               'roleSessionName' => 'yourRoleSessionName',
               // Optional: restrict permissions with a custom policy.
               'policy'          => '',
           ]);
    
           $credential      = new Credential($config);
           $providerWrapper = new AlibabaCloudCredentialsWrapper($credential);
           $provider        = $providerWrapper->getCredentials();
    
           $config = array(
               'provider'         => $provider,
               'endpoint'         => 'https://oss-cn-hangzhou.aliyuncs.com',
               "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
               "region"           => "cn-hangzhou",
           );
           $ossClient = new OssClient($config);
       } catch (OssException $e) {
           print $e->getMessage();
       }
    ```
    

## Method 4: Use ECSRAMRole

**Note**

This method requires `alibabacloud/credentials` 1.2.0 or later.

Attach a RAM role directly to your ECS instance, ECI (Elastic Container Instance), or ACK (Container Service for Kubernetes) worker node. The Credentials tool fetches and refreshes the STS token from the instance metadata server automatically — no AccessKey pair needed. See [CreateRole](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole).

1.  Add the credential client dependency.
    
    ```
       composer require alibabacloud/credentials
    ```
    
2.  Initialize the credential provider and create an OSSClient.
    
    ```
       <?php
       require_once __DIR__ . '/vendor/autoload.php';
    
       use AlibabaCloud\Credentials\Credential;
       use OSS\Core\OssException;
       use OSS\OssClient;
       use OSS\Credentials\CredentialsProvider;
       use OSS\Credentials\StaticCredentialsProvider;
    
       class AlibabaCloudCredentialsWrapper implements CredentialsProvider
       {
           /** @var Credential */
           private $wrapper;
    
           public function __construct($wrapper)
           {
               $this->wrapper = $wrapper;
           }
    
           public function getCredentials()
           {
               $cred  = $this->wrapper->getCredential();
               $ak    = $cred->getAccessKeyId();
               $sk    = $cred->getAccessKeySecret();
               $token = $cred->getSecurityToken();
               return new StaticCredentialsProvider($ak, $sk, $token);
           }
       }
    
       try {
           $config = new Credential\Config([
               // Credential type for ECS instance RAM role.
               'type'     => 'ecs_ram_role',
               // The role name attached to the instance. If omitted, the SDK retrieves it automatically.
               'roleName' => '<role_name>',
           ]);
    
           $credential      = new Credential($config);
           $providerWrapper = new AlibabaCloudCredentialsWrapper($credential);
           $provider        = $providerWrapper->getCredentials();
    
           $config = array(
               'provider'         => $provider,
               'endpoint'         => 'https://oss-cn-hangzhou.aliyuncs.com',
               "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
               "region"           => "cn-hangzhou",
           );
           $ossClient = new OssClient($config);
       } catch (OssException $e) {
           print $e->getMessage();
       }
    ```
    

## Method 5: Use credentials from the Function Compute context

When a function runs in Function Compute, the service assumes a role on the function's behalf and injects the resulting STS token into the function context. The token is valid for 36 hours — longer than the 24-hour maximum function execution time — so it never expires during a function run. No AccessKey pair or token refresh is needed. See [Grant Function Compute permissions to access Alibaba Cloud services](/help/en/functioncompute/fc/grant-function-compute-permissions-to-access-other-alibaba-cloud-services).

```
<?php
use OSS\OssClient;
use OSS\Core\OssException;

function handler($event, $context) {
    // The function context contains a temporary STS token injected by Function Compute.
    // Do not hard-code credentials — use the context instead.
    $creds           = $context["credentials"];
    $accessKeyId     = $creds["accessKeyId"];
    $accessKeySecret = $creds["accessKeySecret"];
    $securityToken   = $creds["securityToken"];

    // Use the internal endpoint for lower latency within the same region.
    $endpoint = "https://oss-cn-hangzhou-internal.aliyuncs.com";

    try {
        $ossClient = new OssClient($accessKeyId, $accessKeySecret, $endpoint, false, $securityToken);
        print_r($ossClient);
    } catch (OssException $e) {
        printf(__FUNCTION__ . ": FAILED\n");
        printf($e->getMessage() . "\n");
        return $e->getMessage();
    }
    return 'hello world';
}
```

## Method 6: Use OIDCRoleARN

**Note**

This method requires `alibabacloud/credentials` 1.2.0 or later.

Use this method to isolate permissions at the pod level on ACK (Container Service for Kubernetes) worker nodes — particularly when untrusted workloads share the cluster. The RRSA (RAM Roles for Service Account) feature mounts an OIDC (OpenID Connect) token file into each pod and injects the provider ARN and role ARN as environment variables. The Credentials tool calls `AssumeRoleWithOIDC` to exchange the OIDC token for an STS token scoped to that pod's role. See [Pod permission isolation based on RRSA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#task-2142941).

1.  Add the credential client dependency.
    
    ```
       composer require alibabacloud/credentials
    ```
    
2.  Initialize the credential provider and create an OSSClient.
    
    ```
       <?php
       require_once __DIR__ . '/vendor/autoload.php';
    
       use OSS\Credentials\CredentialsProvider;
       use AlibabaCloud\Credentials\Credential;
       use OSS\Credentials\StaticCredentialsProvider;
       use OSS\Core\OssException;
       use OSS\OssClient;
    
       class AlibabaCloudCredentialsWrapper implements CredentialsProvider
       {
           /** @var Credential */
           private $wrapper;
    
           public function __construct($wrapper)
           {
               $this->wrapper = $wrapper;
           }
    
           public function getCredentials()
           {
               $cred  = $this->wrapper->getCredential();
               $ak    = $cred->getAccessKeyId();
               $sk    = $cred->getAccessKeySecret();
               $token = $cred->getSecurityToken();
               return new StaticCredentialsProvider($ak, $sk, $token);
           }
       }
    
       try {
           $config = new Credential\Config([
               'type' => 'oidc_role_arn',
               // ARN of the OIDC provider. Can also be set via ALIBABA_CLOUD_OIDC_PROVIDER_ARN.
               'oidcProviderArn'   => '<OidcProviderArn>',
               // Path to the OIDC token file. Can also be set via ALIBABA_CLOUD_OIDC_TOKEN_FILE.
               'oidcTokenFilePath' => '<OidcTokenFilePath>',
               // ARN of the RAM role. Example: acs:ram::123456789012****:role/adminrole.
               // Can also be set via ALIBABA_CLOUD_ROLE_ARN.
               'roleArn'           => '<RoleArn>',
               // Can also be set via ALIBABA_CLOUD_ROLE_SESSION_NAME.
               'roleSessionName'   => '<RoleSessionName>',
               // Optional: restrict permissions. Example: {"Statement":[{"Action":["*"],"Effect":"Allow","Resource":["*"]}],"Version":"1"}
               'policy'            => '<Policy>',
               // Session duration in seconds.
               'durationSeconds'   => 3600,
           ]);
    
           $credential      = new Credential($config);
           $providerWrapper = new AlibabaCloudCredentialsWrapper($credential);
           $provider        = $providerWrapper->getCredentials();
    
           $config = array(
               'provider'         => $provider,
               'endpoint'         => 'https://oss-cn-hangzhou.aliyuncs.com',
               "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
               "region"           => "cn-hangzhou",
           );
           $ossClient = new OssClient($config);
       } catch (OssException $e) {
           print $e->getMessage();
       }
    ```
    

## Method 7: Use CredentialsURI

**Note**

This method requires `alibabacloud/credentials` 1.2.0 or later.

Use this method when credentials are vended by an external service. The Credentials tool fetches a temporary STS token from the URI you provide. The backend service at that URI is responsible for refreshing the token before it expires. This eliminates any need to manage AccessKey pairs in your application.

1.  Add the credential client dependency.
    
    ```
       composer require alibabacloud/credentials
    ```
    
2.  Initialize the credential provider and create an OSSClient.
    
    ```
       <?php
       require_once __DIR__ . '/vendor/autoload.php';
    
       use AlibabaCloud\Credentials\Credential;
       use OSS\Core\OssException;
       use OSS\Credentials\CredentialsProvider;
       use OSS\Credentials\StaticCredentialsProvider;
       use OSS\OssClient;
    
       class AlibabaCloudCredentialsWrapper implements CredentialsProvider
       {
           /** @var Credential */
           private $wrapper;
    
           public function __construct($wrapper)
           {
               $this->wrapper = $wrapper;
           }
    
           public function getCredentials()
           {
               $cred  = $this->wrapper->getCredential();
               $ak    = $cred->getAccessKeyId();
               $sk    = $cred->getAccessKeySecret();
               $token = $cred->getSecurityToken();
               return new StaticCredentialsProvider($ak, $sk, $token);
           }
       }
    
       try {
           $config = new Credential\Config([
               'type' => 'credentials_uri',
               // URI of the credentials endpoint. Format: http://local_or_remote_uri/
               // Can also be set via ALIBABA_CLOUD_CREDENTIALS_URI.
               'credentialsURI' => '<CredentialsUri>',
           ]);
    
           $credential      = new Credential($config);
           $providerWrapper = new AlibabaCloudCredentialsWrapper($credential);
           $provider        = $providerWrapper->getCredentials();
    
           $config = array(
               'provider'         => $provider,
               'endpoint'         => 'https://oss-cn-hangzhou.aliyuncs.com',
               "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
               "region"           => "cn-hangzhou",
           );
           $ossClient = new OssClient($config);
       } catch (OssException $e) {
           print $e->getMessage();
       }
    ```
    

## Method 8: Use custom access credentials

Implement the `CredentialsProvider` interface if none of the built-in methods fit your requirements.

```
<?php
if (is_file(__DIR__ . '/../autoload.php')) {
    require_once __DIR__ . '/../autoload.php';
}
if (is_file(__DIR__ . '/../vendor/autoload.php')) {
    require_once __DIR__ . '/../vendor/autoload.php';
}

use OSS\Credentials\CredentialsProvider;
use OSS\OssClient;
use OSS\Core\OssException;

class CustomerCredentialsProvider implements CredentialsProvider
{
    public function getCredentials()
    {
        // Return long-term credentials.
        return [
            'AccessKeyId'     => 'id',
            'AccessKeySecret' => 'secret',
        ];

        // To return temporary credentials instead, use:
        // return [
        //     'AccessKeyId'     => 'id',
        //     'AccessKeySecret' => 'secret',
        //     'SecurityToken'   => 'token',
        // ];
    }
}

try {
    $provider = new CustomerCredentialsProvider();
    $endpoint = "http://oss-cn-hangzhou.aliyuncs.com";

    $config = array(
        "provider"         => $provider,
        "endpoint"         => $endpoint,
        "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
        "region"           => "cn-hangzhou",
    );
    $ossClient = new OssClient($config);
} catch (OssException $e) {
    printf($e->getMessage() . "\n");
}
```

## What's next

After initializing a credential provider, use it to create an OSSClient instance. See [Initialization (PHP SDK V1)](/help/en/oss/developer-reference/initialization-6).
