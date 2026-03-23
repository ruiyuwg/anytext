The OSS C# SDK authenticates every request using access credentials. Choose a credential provider based on where your application runs and how you manage credential lifecycle.

> For supported regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db). To create an AccessKey pair for a Resource Access Management (RAM) user, see [Create an AccessKey pair](/help/en/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp).

## Choose a credential provider

Select a credential provider based on your deployment environment and security requirements.

**Credential provider**

**Where to use**

**Requires an existing AccessKey pair or STS token**

**Underlying credential**

**Validity**

**Rotation or refresh**

RAM user AccessKey pair

Secure, stable environments requiring long-term access

Yes

AccessKey pair

Long-term

Manual rotation

STS temporary credentials

Untrusted environments; when you need to control validity period and permissions

Yes

STS token

Temporary

Manual refresh

RAMRoleARN

Cross-account access or authorized access to Alibaba Cloud services

Yes

STS token

Temporary

Auto-refresh

ECSRAMRole

ECS instances, ECI instances, or Container Service for Kubernetes worker nodes

No

STS token

Temporary

Auto-refresh

OIDCRoleARN

Untrusted applications on Container Service for Kubernetes worker nodes

No

STS token

Temporary

Auto-refresh

CredentialsURI

Applications that retrieve credentials from an external system

No

STS token

Temporary

Auto-refresh

Custom credential provider

None of the above fit your requirements

Custom

Custom

Custom

Custom

**Recommended approach**: Use role-based providers (ECSRAMRole, RAMRoleARN, OIDCRoleARN) whenever possible. These providers use STS tokens that auto-refresh, eliminating the need to manage long-term credentials manually. Unlike static AccessKey pairs, STS tokens expire automatically, limiting the impact of any exposure.

## RAM user AccessKey pair

Use this method when your application runs in a secure, stable environment and requires long-term OSS access without frequent credential rotation. Maintain the AccessKey pair manually; if it is compromised, rotate it immediately.

**Warning**

An Alibaba Cloud account has full permissions on all resources. A leaked AccessKey pair poses significant security risks. Use the AccessKey pair of a RAM user with the minimum required permissions instead of an Alibaba Cloud account AccessKey pair.

To get an AccessKey pair, see [CreateAccessKey](/help/en/ram/user-guide/create-an-accesskey-pair).

### Environment variables (recommended)

Store credentials in environment variables to avoid embedding them in source code.

**Step 1: Set environment variables.**

#### Mac OS X, Linux, or Unix

```
export ALIBABA_CLOUD_ACCESS_KEY_ID=<ALIBABA_CLOUD_ACCESS_KEY_ID>
export ALIBABA_CLOUD_ACCESS_KEY_SECRET=<ALIBABA_CLOUD_ACCESS_KEY_SECRET>
```

#### Windows

```
set ALIBABA_CLOUD_ACCESS_KEY_ID=<ALIBABA_CLOUD_ACCESS_KEY_ID>
set ALIBABA_CLOUD_ACCESS_KEY_SECRET=<ALIBABA_CLOUD_ACCESS_KEY_SECRET>
```

**Step 2: Initialize the credential provider and OSS client.**

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
using Aliyun.OSS.Common.Authentication;

// Read credentials from environment variables.
// Set ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET before running.
var accessKeyId = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
var credentialsProvider = new DefaultCredentialsProvider(new DefaultCredentials(accessKeyId, accessKeySecret, ""));

// Replace with the endpoint of your bucket's region.
// Example: China (Hangzhou) -> https://oss-cn-hangzhou.aliyuncs.com
const string endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
var client = new OssClient(endpoint, credentialsProvider, conf);
client.SetRegion(region);
```

### Static credentials (testing only)

**Warning**

Do not use hard-coded credentials in production. This approach is for local testing only.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
using Aliyun.OSS.Common.Authentication;

// Replace with your actual AccessKey ID and AccessKey secret.
var accessKeyId = "LTAI5tQQx1DWEYK7********";
var accessKeySecret = "s5LkMqKmmKbt3zjs7MNJTj********";
var credentialsProvider = new DefaultCredentialsProvider(new DefaultCredentials(accessKeyId, accessKeySecret, ""));

const string endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
var client = new OssClient(endpoint, credentialsProvider, conf);
client.SetRegion(region);
```

## STS temporary credentials

Use this method when your application needs temporary OSS access. Obtain an STS token (AccessKey ID, AccessKey secret, and security token) from Security Token Service (STS) and pass it directly to the credential provider. Refresh the token manually before it expires.

**Important**

-   To get an STS token via API, see [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole). To get one via SDK, see [Use STS temporary credentials to access OSS](/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss#section-rjh-18m-7kp).
    
-   Specify an expiration time when generating an STS token. The token is invalid after it expires.
    
-   For STS endpoints, see [Endpoints](/help/en/ram/developer-reference/api-sts-2015-04-01-endpoint).
    

### Environment variables (recommended)

**Step 1: Set environment variables.**

#### Mac OS X, Linux, or Unix

```
export ALIBABA_CLOUD_ACCESS_KEY_ID=<ALIBABA_CLOUD_ACCESS_KEY_ID>
export ALIBABA_CLOUD_ACCESS_KEY_SECRET=<ALIBABA_CLOUD_ACCESS_KEY_SECRET>
export ALIBABA_CLOUD_SECURITY_TOKEN=<ALIBABA_CLOUD_SECURITY_TOKEN>
```

#### Windows

```
set OSS_ACCESS_KEY_ID=<ALIBABA_CLOUD_ACCESS_KEY_ID>
set OSS_ACCESS_KEY_SECRET=<ALIBABA_CLOUD_ACCESS_KEY_SECRET>
set OSS_SESSION_TOKEN=<ALIBABA_CLOUD_SECURITY_TOKEN>
```

**Step 2: Initialize the credential provider and OSS client.**

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
using Aliyun.OSS.Common.Authentication;

// Read STS credentials from environment variables.
// Set ALIBABA_CLOUD_ACCESS_KEY_ID, ALIBABA_CLOUD_ACCESS_KEY_SECRET,
// and ALIBABA_CLOUD_SECURITY_TOKEN before running.
var accessKeyId = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
var token = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_SECURITY_TOKEN");

var credentialsProvider = new DefaultCredentialsProvider(new DefaultCredentials(accessKeyId, accessKeySecret, token));

const string endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
var client = new OssClient(endpoint, credentialsProvider, conf);
client.SetRegion(region);
```

### Static credentials (testing only)

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
using Aliyun.OSS.Common.Authentication;

// Replace with your actual temporary AccessKey ID, AccessKey secret, and security token.
var accessKeyId = "STS.NTZdStF79CVRTQuWCfXTT****";
var accessKeySecret = "5rm8PfEiK8enp56zzAMX4RbZUraoKbWXvCf1xAuT****";
var token = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_SECURITY_TOKEN");

var credentialsProvider = new DefaultCredentialsProvider(new DefaultCredentials(accessKeyId, accessKeySecret, token));

const string endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
var client = new OssClient(endpoint, credentialsProvider, conf);
client.SetRegion(region);
```

## RAMRoleARN

Use this method for cross-account access or any scenario that requires delegating OSS access to a RAM role. Specify the Alibaba Cloud Resource Name (ARN) of the RAM role; the credentials library retrieves an STS token from STS and refreshes it automatically before expiration. Optionally, set a `Policy` value to further restrict the role's permissions.

**Important**

-   Use the AccessKey pair of a RAM user with the minimum required permissions, not an Alibaba Cloud account AccessKey pair.
    
-   The AccessKey secret is displayed only when the AccessKey pair is created. Save it immediately. If you lose it, create a new AccessKey pair. For details, see [Create an AccessKey pair](/help/en/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp).
    
-   To get the RAM role ARN, see [CreateRole](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole).
    

**Step 1: Install the Alibaba Cloud credentials library.**

See [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-net-access-credentials).

**Step 2: Configure the credential provider.**

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
using Aliyun.OSS.Common.Authentication;

// CredentialsProviderWrapper bridges the Alibaba Cloud credentials library
// and the OSS SDK's ICredentialsProvider interface.
class CredentialsProviderWrapper : ICredentialsProvider
{
    private Aliyun.Credentials.Client client;

    public CredentialsProviderWrapper(Aliyun.Credentials.Client client)
    {
        this.client = client;
    }

    public ICredentials GetCredentials()
    {
        var accessKeyId = client.GetAccessKeyId();
        var accessKeySecret = client.GetAccessKeySecret();
        var token = client.GetSecurityToken();
        return new DefaultCredentials(accessKeyId, accessKeySecret, token);
    }

    public void SetCredentials(ICredentials creds) { }
};

var config = new Aliyun.Credentials.Models.Config()
{
    Type = "ram_role_arn",
    // Read the caller's AccessKey pair from environment variables.
    AccessKeyId = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_ID"),
    AccessKeySecret = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_SECRET"),
    // The ARN of the RAM role to assume. Example: acs:ram::123456789012****:role/adminrole
    // Default environment variable: ALIBABA_CLOUD_ROLE_ARN
    RoleArn = "<RoleArn>",
    // The role session name. Default environment variable: ALIBABA_CLOUD_ROLE_SESSION_NAME
    RoleSessionName = "<RoleSessionName>",
};
var credentialsClient = new Aliyun.Credentials.Client(config);
var credentialsProvider = new CredentialsProviderWrapper(credentialsClient);

const string endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
var client = new OssClient(endpoint, credentialsProvider, conf);
client.SetRegion(region);
```

## ECSRAMRole

Use this method when your application runs on an ECS instance, an Elastic Container Instance (ECI) instance, or a Container Service for Kubernetes worker node. Associate a RAM role with the instance; the credentials library fetches and auto-refreshes the STS token from the instance metadata. No AccessKey pair or STS token is required.

To create an ECSRAMRole, see [CreateRole](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole).

**Step 1: Install the Alibaba Cloud credentials library.**

See [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-net-access-credentials).

**Step 2: Configure the credential provider.**

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
using Aliyun.OSS.Common.Authentication;

class CredentialsProviderWrapper : ICredentialsProvider
{
    private Aliyun.Credentials.Client client;

    public CredentialsProviderWrapper(Aliyun.Credentials.Client client)
    {
        this.client = client;
    }

    public ICredentials GetCredentials()
    {
        var accessKeyId = client.GetAccessKeyId();
        var accessKeySecret = client.GetAccessKeySecret();
        var token = client.GetSecurityToken();
        return new DefaultCredentials(accessKeyId, accessKeySecret, token);
    }

    public void SetCredentials(ICredentials creds) { }
};

var config = new Aliyun.Credentials.Models.Config()
{
    Type = "ecs_ram_role",
    // Optional, but recommended to reduce the number of requests.
    // If not set, the role name is retrieved automatically from instance metadata.
    RoleName = "<RoleName>"
};
var credentialsClient = new Aliyun.Credentials.Client(config);
var credentialsProvider = new CredentialsProviderWrapper(credentialsClient);

const string endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
var client = new OssClient(endpoint, credentialsProvider, conf);
client.SetRegion(region);
```

## OIDCRoleARN

Use this method to grant application-level permissions to pods running on Container Service for Kubernetes worker nodes, without exposing the node's instance RAM role to untrusted workloads. This implements RAM Roles for Service Accounts (RRSA): the cluster mounts an OpenID Connect (OIDC) token file into each pod and injects configuration into environment variables. The credentials library reads those variables and calls `AssumeRoleWithOIDC` to exchange the OIDC token for an STS token. No AccessKey pair is required.

The following environment variables are injected by the cluster:

-   `ALIBABA_CLOUD_ROLE_ARN`: The ARN of the RAM role.
    
-   `ALIBABA_CLOUD_OIDC_PROVIDER_ARN`: The ARN of the OIDC provider.
    
-   `ALIBABA_CLOUD_OIDC_TOKEN_FILE`: The path to the OIDC token file.
    

For setup instructions, see [Isolate pod permissions using RRSA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#task-2142941).

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
using Aliyun.OSS.Common.Authentication;

class CredentialsProviderWrapper : ICredentialsProvider
{
    private Aliyun.Credentials.Client client;

    public CredentialsProviderWrapper(Aliyun.Credentials.Client client)
    {
        this.client = client;
    }

    public ICredentials GetCredentials()
    {
        var accessKeyId = client.GetAccessKeyId();
        var accessKeySecret = client.GetAccessKeySecret();
        var token = client.GetSecurityToken();
        return new DefaultCredentials(accessKeyId, accessKeySecret, token);
    }

    public void SetCredentials(ICredentials creds) { }
};

var config = new Aliyun.Credentials.Models.Config()
{
    Type = "oidc_role_arn",
    // The RAM role ARN. Can also be set via ALIBABA_CLOUD_ROLE_ARN.
    RoleArn = "<RoleArn>",
    // The OIDC provider ARN. Can also be set via ALIBABA_CLOUD_OIDC_PROVIDER_ARN.
    OIDCProviderArn = "<OidcProviderArn>",
    // Path to the OIDC token file. Can also be set via ALIBABA_CLOUD_OIDC_TOKEN_FILE.
    OIDCTokenFilePath = "<OidcTokenFilePath>",
    // The role session name. Can also be set via ALIBABA_CLOUD_ROLE_SESSION_NAME.
    RoleSessionName = "<RoleSessionName>",
    // Optional. A JSON policy to further restrict the role's permissions.
    // Example: {"Statement":[{"Action":["*"],"Effect":"Allow","Resource":["*"]}],"Version":"1"}
    Policy = "<Policy>",
    RoleSessionExpiration = 3600
};
var credentialsClient = new Aliyun.Credentials.Client(config);
var credentialsProvider = new CredentialsProviderWrapper(credentialsClient);

const string endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
var client = new OssClient(endpoint, credentialsProvider, conf);
client.SetRegion(region);
```

## CredentialsURI

Use this method when your application retrieves credentials from an external service. Provide a URI that returns valid STS credentials; the credentials library fetches tokens from that URI and handles refresh. Your backend service must implement its own token-refresh logic to ensure credentials remain valid. No AccessKey pair is required.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
using Aliyun.OSS.Common.Authentication;

class CredentialsProviderWrapper : ICredentialsProvider
{
    private Aliyun.Credentials.Client client;

    public CredentialsProviderWrapper(Aliyun.Credentials.Client client)
    {
        this.client = client;
    }

    public ICredentials GetCredentials()
    {
        var accessKeyId = client.GetAccessKeyId();
        var accessKeySecret = client.GetAccessKeySecret();
        var token = client.GetSecurityToken();
        return new DefaultCredentials(accessKeyId, accessKeySecret, token);
    }

    public void SetCredentials(ICredentials creds) { }
};

var config = new Aliyun.Credentials.Models.Config()
{
    // The credential type.
    Type = "credentials_uri",
    // The URI to fetch credentials from. Format: http://local_or_remote_uri/
    // Can also be set via ALIBABA_CLOUD_CREDENTIALS_URI.
    CredentialsURI = "<CredentialsURI>"
};
var credentialsClient = new Aliyun.Credentials.Client(config);
var credentialsProvider = new CredentialsProviderWrapper(credentialsClient);

const string endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
var client = new OssClient(endpoint, credentialsProvider, conf);
client.SetRegion(region);
```

## Custom credential provider

Implement the `ICredentialsProvider` interface to define your own credential-fetching logic.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
using Aliyun.OSS.Common.Authentication;

class CustomCredentialsProvider : ICredentialsProvider
{
    public CustomCredentialsProvider() { }

    public ICredentials GetCredentials()
    {
        // TODO: Add your custom credential-fetching logic here.

        string accessKeyId;
        string accessKeySecret;
        // string token;

        // For long-term credentials, omit the token.
        return new DefaultCredentials(accessKeyId, accessKeySecret, "");

        // For temporary credentials, include the token.
        // Refresh credentials before they expire.
        // return new DefaultCredentials(accessKeyId, accessKeySecret, token);
    }

    public void SetCredentials(ICredentials creds) { }
};

var credentialsProvider = new CustomCredentialsProvider();

const string endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
var client = new OssClient(endpoint, credentialsProvider, conf);
client.SetRegion(region);
```

## FAQ

### **How do I view my RAM user's AccessKey pair?**

Go to the [RAM console](https://ram.console.alibabacloud.com/users), select the user, and view their AccessKey information. See [View the AccessKey information of a RAM user](/help/en/ram/user-guide/view-the-accesskey-pairs-of-a-ram-user).

The AccessKey secret is shown only at creation and cannot be retrieved later. If you've lost it, create a new AccessKey pair in the RAM console. See [Create an AccessKey pair](/help/en/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp).

### **Why am I getting an AccessDenied error when uploading with a RAM user's AccessKey pair?**

This usually means the AccessKey pair is incorrect or the RAM user lacks upload permissions. Check both:

1.  Verify the AccessKey pair is correct. If the AccessKey secret was lost, create a new pair and rotate the old one.
    
2.  In the [RAM console](https://ram.console.alibabacloud.com/users), confirm the RAM user has been granted OSS upload permissions.
    

### **Why is my public endpoint connection failing?**

The most common cause is a mismatch between the bucket's region and the endpoint you're using. Confirm the bucket's region in the Alibaba Cloud Management Console, then use the corresponding endpoint. For example, a bucket in China (Hangzhou) requires `oss-cn-hangzhou.aliyuncs.com`. For a full list of endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

If the endpoint is correct, check that your network can reach the internet.

### **How do I look up a specific error type?**

See [EC error codes](/help/en/oss/user-guide/error-codes/) in the OSS documentation. For authentication-specific errors, see [02-AUTH](/help/en/oss/user-guide/02-auth/).
