To send requests to Object Storage Service (OSS) using the Go SDK, you must configure access credentials. Alibaba Cloud uses access credentials to verify your identity and access permissions. The type of Access Credential you choose depends on the authentication and authorization requirements of your application. This topic describes how to configure temporary and long-term access credentials.

## **Prerequisites**

Before you configure access credentials, you must install the Go SDK. For more information, see [Install (Go SDK V1)](/help/en/oss/go-installation).

## **Initialize a credential provider**

### Choose a credential provider

OSS provides several ways to initialize a credential provider. Choose the one that best fits your application's authentication and authorization requirements.

**Initialization method**

**Use case**

**AccessKey pair or STS token required**

**Credential type**

**Credential validity period**

**Credential rotation or refresh method**

[Method 1: Use an AccessKey pair](#dd657ea839xv1)

For applications in secure environments that need long-term cloud service access without frequent credential rotation.

Yes

AccessKey pair

Long-term

Manual rotation

[Method 2: Use an STS token](#3a2b4ef1697pd)

For applications that run in an untrusted environment and require controlled access duration and permissions.

Yes

STS token

Temporary

Manual refresh

[Method 3: Use a RAM role ARN](#3cdc03a332cf6)

For applications that require authorized access to cloud services, such as cross-account access.

Yes

STS token

Temporary

Automatic refresh

[Method 4: Use an ECS RAM role](#3a565d2ce1363)

For applications that run on Alibaba Cloud ECS instances, ECI instances, or worker nodes of Container Service for Kubernetes (ACK).

No

STS token

Temporary

Automatic refresh

[Method 5: Use an OIDC role ARN](#64a6283d08vpq)

For untrusted applications that run on worker nodes of ACK.

No

STS token

Temporary

Automatic refresh

[Method 6: Use credentials from the Function Compute context](#00a6f6d962ouv)

For functions that run in Alibaba Cloud Function Compute.

No

STS token

Temporary

No refresh needed

[Method 7: Use a CredentialsURI](#a453a80d5d6gs)

For applications that need to obtain access credentials from an external system.

No

STS token

Temporary

Automatic refresh

[Method 8: Use an automatically rotated AccessKey pair](#fe0cd2727db0o)

For applications that run in an environment with a high risk of AccessKey pair leaks and require long-term access to cloud services with frequent credential rotation.

No

AccessKey pair

Long-term

Automatic rotation

[Method 9: Implement a custom credential provider](/help/en/oss/developer-reference/oss-java-configure-access-credentials#3502d8074270l)

If none of the preceding methods meet your requirements, implement a custom credential provider.

Custom

Custom

Custom

Custom

### **Method 1:** Use an AccessKey pair

If your application runs in a secure, stable environment and requires long-term access to OSS without frequent credential rotation, nitialize the credential provider with the AccessKey pair (AccessKey ID and AccessKey Secret) of your Alibaba Cloud account or a RAM user. This method requires you to manually manage an AccessKey pair, which increases security risks and maintenance overhead. For information about how to obtain an AccessKey pair, see [CreateAccessKey](/help/en/ram/developer-reference/api-ims-2019-08-15-createaccesskey).

#### **Environment variables**

**Warning**

An Alibaba Cloud account has full access to all of your resources. If its AccessKey pair is leaked, it poses a significant security risk to your system. Do not use the AccessKey pair of an Alibaba Cloud account. Instead, use an AccessKey pair for a RAM user that is granted only the minimum required permissions.

1.  Set the environment variables for your AccessKey pair.
    
    ## macOS, Linux, or Unix
    
    ```
    export OSS_ACCESS_KEY_ID=<ALIBABA_CLOUD_ACCESS_KEY_ID>
    export OSS_ACCESS_KEY_SECRET=<ALIBABA_CLOUD_ACCESS_KEY_SECRET>
    ```
    
    ## Windows
    
    ```
    set OSS_ACCESS_KEY_ID=<ALIBABA_CLOUD_ACCESS_KEY_ID>
    set OSS_ACCESS_KEY_SECRET=<ALIBABA_CLOUD_ACCESS_KEY_SECRET>
    ```
    
2.  Use the environment variables to provide the credentials.
    
    ```
    package main
    
    import (
    	"fmt"
    	"os"
    
    	"github.com/aliyun/aliyun-oss-go-sdk/oss"
    )
    
    func main() {
    	// Obtain access credentials from environment variables. Before you run this code sample, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
    	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    	// Create an OSSClient instance.
    	// Set yourEndpoint to the bucket's endpoint and yourRegion to its region.
    	// For a bucket in the China (Hangzhou) region, an example endpoint is https://oss-cn-hangzhou.aliyuncs.com and the region is cn-hangzhou.
    	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
    	clientOptions = append(clientOptions, oss.Region("yourRegion"))
    	// Set the signature version.
    	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
    	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    	fmt.Printf("client:%#v\n", client)
    }
    ```
    

#### Static credentials

You can reference credentials in your code by using variables. At runtime, these variables are populated with actual credential values that are loaded from environment variables, configuration files, or other external data sources.

The following example uses a configuration file.

**Note**

This example requires the `go-ini` library. To install it, run the following command:

```
go get -u github.com/go-ini/ini
```

1.  Create a configuration file named `config.ini`.
    
    ```
    [credentials]
    alibaba_cloud_access_key_id = <ALIBABA_CLOUD_ACCESS_KEY_ID>
    alibaba_cloud_access_key_secret = <ALIBABA_CLOUD_ACCESS_KEY_SECRET>
    ```
    
2.  Use the configuration file to provide the credentials.
    
    ```
    package main
    
    import (
    	"fmt"
    	"os"
    
    	"github.com/aliyun/aliyun-oss-go-sdk/oss"
    	"gopkg.in/ini.v1"
    )
    
    type defaultCredentials struct {
    	config *oss.Config
    }
    
    func (defCre *defaultCredentials) GetAccessKeyID() string {
    	return defCre.config.AccessKeyID
    }
    
    func (defCre *defaultCredentials) GetAccessKeySecret() string {
    	return defCre.config.AccessKeySecret
    }
    
    func (defCre *defaultCredentials) GetSecurityToken() string {
    	return defCre.config.SecurityToken
    }
    
    type defaultCredentialsProvider struct {
    	config *oss.Config
    }
    
    func (defBuild *defaultCredentialsProvider) GetCredentials() oss.Credentials {
    	return &defaultCredentials{config: defBuild.config}
    }
    func NewDefaultCredentialsProvider(accessID, accessKey, token string) (defaultCredentialsProvider, error) {
    	var provider defaultCredentialsProvider
    	if accessID == "" {
    		return provider, fmt.Errorf("access key id is empty!")
    	}
    	if accessKey == "" {
    		return provider, fmt.Errorf("access key secret is empty!")
    	}
    	config := &oss.Config{
    		AccessKeyID:     accessID,
    		AccessKeySecret: accessKey,
    		SecurityToken:   token,
    	}
    	return defaultCredentialsProvider{
    		config,
    	}, nil
    }
    
    func main() {
    	cfg, err := ini.Load("config.ini")
    	if err != nil {
    		fmt.Println("Error loading config file:", err)
    		return
    	}
    	accessKeyID := cfg.Section("credentials").Key("alibaba_cloud_access_key_id").String()
    	accessKeySecret := cfg.Section("credentials").Key("alibaba_cloud_access_key_secret").String()
    	provider, err := NewDefaultCredentialsProvider(accessKeyID, accessKeySecret, "")
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    	// Set yourEndpoint to the bucket's endpoint and yourRegion to its region.
    	// For a bucket in the China (Hangzhou) region, an example endpoint is https://oss-cn-hangzhou.aliyuncs.com and the region is cn-hangzhou.
    	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
    	clientOptions = append(clientOptions, oss.Region("yourRegion"))
    	// Set the signature version.
    	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
    	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    	fmt.Printf("client:%#v\n", client)
    }
    ```
    

### **Method 2:** Use an STS token

If your application requires temporary access to OSS, initialize the credential provider with temporary access credentials (AccessKey ID, AccessKey Secret, and a security token) obtained from Security Token Service (STS). This method requires you to manage and refresh the STS token manually, which introduces security risks and maintenance overhead. For information about how to obtain an STS token, see [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole).

1.  Set the environment variables for your temporary credentials.
    
    ## macOS, Linux, or Unix
    
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
    
2.  Use the environment variables to provide the credentials.
    
    ```
    package main
    
    import (
    	"fmt"
    	"os"
    
    	"github.com/aliyun/aliyun-oss-go-sdk/oss"
    )
    
    func main() {
    	// Obtain access credentials from environment variables. Before you run this code sample, make sure that the OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET, and OSS_SESSION_TOKEN environment variables are set.
    	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    	// Create an OSSClient instance.
    	// Set yourEndpoint to the bucket's endpoint and yourRegion to its region.
    	// For a bucket in the China (Hangzhou) region, an example endpoint is https://oss-cn-hangzhou.aliyuncs.com and the region is cn-hangzhou.
    	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
    	clientOptions = append(clientOptions, oss.Region("yourRegion"))
    	// Set the signature version.
    	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
    	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    	fmt.Printf("client:%#v\n", client)
    }
    ```
    

### **Method 3:** Use a RAM role ARN

If your application requires authorized access to OSS, such as for cross-account access, initialize the credential provider by using a RAM role ARN. This method uses an STS token. The SDK automatically obtains an STS token from STS by assuming the specified RAM role ARN and refreshes the token before it expires. You can also assign a policy to restrict the RAM role to a smaller set of permissions. This method requires you to provide an AccessKey pair, which introduces security risks and maintenance overhead. For information about how to obtain an AccessKey pair, see [Create an AccessKey pair for a RAM user](/help/en/ram/developer-reference/api-ram-2015-05-01-createaccesskey). For information about how to obtain a RAM role ARN, see [Create a RAM role](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole).

1.  Add the credentials dependency.
    
    ```
    go get github.com/aliyun/credentials-go/credentials
    ```
    
2.  Configure access credentials.
    
    ```
    package main
    
    import (
    	"fmt"
    	"os"
    
    	"github.com/aliyun/aliyun-oss-go-sdk/oss"
    	"github.com/aliyun/credentials-go/credentials"
    )
    
    type Credentials struct {
    	AccessKeyId     string
    	AccessKeySecret string
    	SecurityToken   string
    }
    
    type defaultCredentialsProvider struct {
    	cred credentials.Credential
    }
    
    func (credentials *Credentials) GetAccessKeyID() string {
    	return credentials.AccessKeyId
    }
    
    func (credentials *Credentials) GetAccessKeySecret() string {
    	return credentials.AccessKeySecret
    }
    
    func (credentials *Credentials) GetSecurityToken() string {
    	return credentials.SecurityToken
    }
    
    func (defBuild *defaultCredentialsProvider) GetCredentials() oss.Credentials {
    	cred, _ := defBuild.cred.GetCredential()
    	return &Credentials{
    		AccessKeyId:     *cred.AccessKeyId,
    		AccessKeySecret: *cred.AccessKeySecret,
    		SecurityToken:   *cred.SecurityToken,
    	}
    }
    
    func NewRamRoleArnCredentialsProvider(credential credentials.Credential) defaultCredentialsProvider {
    	return defaultCredentialsProvider{
    		cred: credential,
    	}
    }
    
    func main() {
    	config := new(credentials.Config).
    		// Specify the credential type. Set the value to ram_role_arn.
    		SetType("ram_role_arn").
    		// Obtain the AccessKey pair (AccessKeyId and AccessKeySecret) of the RAM user from environment variables.
    		SetAccessKeyId(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")).
    		SetAccessKeySecret(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")).
    		// The following operations set parameter values directly. You can also add environment variables and use os.Getenv("") to set the parameters.
    		// Obtain the ARN of the RAM role. The ARN is the ID of the role to be assumed, for example, acs:ram::$accountID:role/$roleName.
    		// The default environment variable for RoleArn is ALIBABA_CLOUD_ROLE_ARN.
    		SetRoleArn("ALIBABA_CLOUD_ROLE_ARN").
    		// Specify a custom role session name to distinguish different tokens.
    		// The default environment variable for RoleSessionName is ALIBABA_CLOUD_ROLE_SESSION_NAME.
    		SetRoleSessionName("ALIBABA_CLOUD_ROLE_SESSION_NAME").
    		// (Optional) Limit the permissions of the STS token.
    		SetPolicy("").
    		// (Optional) Limit the validity period of the STS token.
    		SetRoleSessionExpiration(3600)
    
    	arnCredential, err := credentials.NewCredential(config)
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    
    	provider := NewRamRoleArnCredentialsProvider(arnCredential)
    	// Set yourEndpoint to the bucket's endpoint and yourRegion to its region.
    	// For a bucket in the China (Hangzhou) region, an example endpoint is https://oss-cn-hangzhou.aliyuncs.com and the region is cn-hangzhou.
    	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
    	clientOptions = append(clientOptions, oss.Region("yourRegion"))
    	// Set the signature version.
    	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
    	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    
    	fmt.Printf("client:%#v\n", client)
    }
    ```
    

### **Method 4:** Use an ECS RAM role

If your application runs on an ECS instance, Elastic Container Instance (ECI) instance, or a worker node of ACK, initialize the credential provider with an ECS RAM role. When you associate a RAM role with the instance, the SDK automatically retrieves and refreshes temporary STS tokens. This method improves security by removing the need to manage AccessKey pairs or STS tokens manually. For information about how to obtain an ECS RAM role, see [Create a RAM role](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole).

1.  Add the credentials dependency.
    
    ```
    go get github.com/aliyun/credentials-go/credentials
    ```
    
2.  Configure an ECS RAM role as the access credentials.
    
    ```
    package main
    
    import (
    	"fmt"
    	"os"
    
    	"github.com/aliyun/aliyun-oss-go-sdk/oss"
    	"github.com/aliyun/credentials-go/credentials"
    )
    
    type Credentials struct {
    	AccessKeyId     string
    	AccessKeySecret string
    	SecurityToken   string
    }
    
    type CredentialsProvider struct {
    	cred credentials.Credential
    }
    
    func (credentials *Credentials) GetAccessKeyID() string {
    	return credentials.AccessKeyId
    }
    
    func (credentials *Credentials) GetAccessKeySecret() string {
    	return credentials.AccessKeySecret
    }
    
    func (credentials *Credentials) GetSecurityToken() string {
    	return credentials.SecurityToken
    }
    
    func (defBuild CredentialsProvider) GetCredentials() oss.Credentials {
    	cred, _ := defBuild.cred.GetCredential()
    	return &Credentials{
    		AccessKeyId:     *cred.AccessKeyId,
    		AccessKeySecret: *cred.AccessKeySecret,
    		SecurityToken:   *cred.SecurityToken,
    	}
    }
    
    func NewEcsCredentialsProvider(credential credentials.Credential) CredentialsProvider {
    	return CredentialsProvider{
    		cred: credential,
    	}
    }
    
    func main() {
    	config := new(credentials.Config).
    		// Specify the credential type. Set the value to ecs_ram_role.
    		SetType("ecs_ram_role").
    		// (Optional) Specify the role name. If you do not specify a role name, the SDK automatically obtains the role. Specify a role name to reduce requests.
    		SetRoleName("RoleName")
    
    	ecsCredential, err := credentials.NewCredential(config)
    	if err != nil {
    		return
    	}
    	provider := NewEcsCredentialsProvider(ecsCredential)
    	// Set yourEndpoint to the bucket's endpoint and yourRegion to its region.
    	// For a bucket in the China (Hangzhou) region, an example endpoint is https://oss-cn-hangzhou.aliyuncs.com and the region is cn-hangzhou.
    	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
    	clientOptions = append(clientOptions, oss.Region("yourRegion"))
    	// Set the signature version.
    	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
    	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    	fmt.Printf("client:%#v\n", client)
    
    }
    ```
    

### **Method 5:** Use an OIDC role ARN

After you configure a RAM role for the worker nodes in ACK, applications within pods on those nodes can obtain the STS token of the associated role through the Metadata Service, similar to applications deployed on ECS. However, if you deploy untrusted applications (for example, applications submitted by your customers with closed-source code) on the container cluster, you may not want them to obtain the STS token of the instance RAM role associated with the worker nodes. To secure your cloud resources while allowing these untrusted applications to safely obtain the required STS token and achieve application-level permission minimization, use the RAM Roles for Service Accounts (RRSA) feature. This method uses an STS token. The Alibaba Cloud container cluster creates and mounts the corresponding service account OIDC token file for different application pods and injects the relevant configuration information into environment variables. The credentials tool obtains the configuration from the environment variables and calls the AssumeRoleWithOIDC operation of STS to exchange the OIDC token for an STS token bound to the role. This method does not require you to provide an AccessKey pair or STS token, which eliminates the risks of manual management. For more information, see [Use RRSA to authorize different pods to access different cloud services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#task-2142941).

1.  Add the credentials dependency.
    
    ```
    go get github.com/aliyun/credentials-go/credentials
    ```
    

2.  Configure the OIDC RAM role as the access credentials.
    
    ```
    package main
    
    import (
    	"fmt"
    	"os"
    
    	"github.com/aliyun/aliyun-oss-go-sdk/oss"
    	"github.com/aliyun/credentials-go/credentials"
    )
    
    type Credentials struct {
    	AccessKeyId     string
    	AccessKeySecret string
    	SecurityToken   string
    }
    
    type CredentialsProvider struct {
    	cred credentials.Credential
    }
    
    func (credentials *Credentials) GetAccessKeyID() string {
    	return credentials.AccessKeyId
    }
    
    func (credentials *Credentials) GetAccessKeySecret() string {
    	return credentials.AccessKeySecret
    }
    
    func (credentials *Credentials) GetSecurityToken() string {
    	return credentials.SecurityToken
    }
    
    func (defBuild CredentialsProvider) GetCredentials() oss.Credentials {
    	cred, _ := defBuild.cred.GetCredential()
    	return &Credentials{
    		AccessKeyId:     *cred.AccessKeyId,
    		AccessKeySecret: *cred.AccessKeySecret,
    		SecurityToken:   *cred.SecurityToken,
    	}
    }
    
    func NewOIDCRoleARNCredentialsProvider(credential credentials.Credential) CredentialsProvider {
    	return CredentialsProvider{
    		cred: credential,
    	}
    }
    
    func main() {
    	config := new(credentials.Config).
    		// Specify the file path for the OIDC token.
    		SetOIDCTokenFilePath(os.Getenv("ALIBABA_CLOUD_OIDC_TOKEN_FILE")).
    		// The following operations set parameter values directly. You can also add environment variables and use os.Getenv("") to set the parameters.
    		// Specify the credential type. Set the value to oidc_role_arn.
    		SetType("oidc_role_arn").
    		// Specify the ARN of the OIDC provider, for example, acs:ram::113511544585****:oidc-provider/TestOidcProvider.
    		// The default environment variable for OIDCProviderArn is ALIBABA_CLOUD_OIDC_PROVIDER_ARN.
    		SetOIDCProviderArn("acs:ram::113511544585****:oidc-provider/TestOidcProvider").
    		// Specify a custom role session name to distinguish different tokens.
    		// The default environment variable for RoleSessionName is ALIBABA_CLOUD_ROLE_SESSION_NAME.
    		SetRoleSessionName("role_session_name").
    		// Specify the ARN of the role to be assumed, for example, acs:ram::113511544585****:role/testoidc.
    		// The default environment variable for RoleArn is ALIBABA_CLOUD_ROLE_ARN.
    		SetRoleArn("acs:ram::113511544585****:role/testoidc").
    		// (Optional) Specify the policy to use when assuming the role.
    		SetPolicy("").
    		SetSessionExpiration(3600)
    	oidcCredential, err := credentials.NewCredential(config)
    	if err != nil {
    		return
    	}
    	provider := NewOIDCRoleARNCredentialsProvider(oidcCredential)
    	// Set yourEndpoint to the bucket's endpoint and yourRegion to its region.
    	// For a bucket in the China (Hangzhou) region, an example endpoint is https://oss-cn-hangzhou.aliyuncs.com and the region is cn-hangzhou.
    	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
    	clientOptions = append(clientOptions, oss.Region("yourRegion"))
    	// Set the signature version.
    	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
    	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    	fmt.Printf("client:%#v\n", client)
    }
    ```
    

### Method 6: Use credentials from the Function Compute context

If your application's function runs in Function Compute (FC), initialize the credential provider by using the credentials from the FC context. This method uses an STS token. Based on the role configured for the function, FC obtains an STS token by assuming a service role and then passes the STS token to your application through the credentials parameter in the context. This STS token is valid for 36 hours and cannot be modified. The maximum execution time for a function is 24 hours, so the token remains valid for the entire function execution, eliminating the need for manual refresh logic. This method does not require you to provide an AccessKey pair or STS token, which eliminates the risks of manual management. For information about how to grant FC permissions to access OSS, see [Use a role to grant Function Compute permissions to access other Alibaba Cloud services](/help/en/functioncompute/fc/grant-function-compute-permissions-to-access-other-alibaba-cloud-services).

1.  Add the FC context dependencies.
    
    ```
    go get github.com/aliyun/fc-runtime-go-sdk/fc
    go get github.com/aliyun/fc-runtime-go-sdk/fccontext
    ```
    
2.  Initialize the credential provider by using the credentials from the FC context.
    
    ```
    package main
    
    import (
    	"context"
    	"fmt"
    	"github.com/aliyun/aliyun-oss-go-sdk/oss"
    	"github.com/aliyun/fc-runtime-go-sdk/fc"
    	"github.com/aliyun/fc-runtime-go-sdk/fccontext"
    )
    
    type GetObjectContext struct {
    	OutputRoute string `json:"outputRoute"`
    	OutputToken string `json:"outputToken"`
    	InputOssUrl string `json:"inputOssUrl"`
    }
    
    type StructEvent struct {
    	GetObjectContext GetObjectContext `json:"getObjectContext"`
    }
    
    func HandleRequest(ctx context.Context, event StructEvent) error {
    	endpoint := event.GetObjectContext.OutputRoute
    	fctx, _ := fccontext.FromContext(ctx)
    	client, err := oss.New(endpoint, fctx.Credentials.AccessKeyId, fctx.Credentials.AccessKeySecret, oss.SecurityToken(fctx.Credentials.SecurityToken))
    	if err != nil {
    		return fmt.Errorf("client new error: %v", err)
    	}
    	fmt.Printf("client:%#v\n", client)
    	return nil
    }
    
    func main() {
    	fc.Start(HandleRequest)
    }
    ```
    

### **Method 7:** Use a CredentialsURI

If your application needs to obtain Alibaba Cloud credentials from an external system to achieve flexible credential management and keyless access, initialize the credential provider by using a CredentialsURI. This method uses an STS token. The credentials tool obtains an STS token from the URI you provide to initialize the credential client. This method does not require you to provide an AccessKey pair or STS token, which eliminates the risks of manual management. The backend service that responds to the CredentialsURI must implement the logic for automatically refreshing the STS token to ensure that your application always has valid credentials.

1.  To ensure the SDK can correctly parse and use the STS token, the service at the specified URI must adhere to the following response protocol:
    
    -   Response status code: 200
        
    -   Response body structure:
        
        ```
        {
            "Code": "Success",
            "AccessKeySecret": "AccessKeySecret",
            "AccessKeyId": "AccessKeyId",
            "Expiration": "2021-09-26T03:46:38Z",
            "SecurityToken": "SecurityToken"
        }
        ```
        
2.  Add the credentials dependency.
    
    ```
    go get github.com/aliyun/credentials-go/credentials
    ```
    
3.  Configure the CredentialsURI as the access credentials.
    
    ```
    package main
    
    import (
    	"fmt"
    	"os"
    
    	"github.com/aliyun/aliyun-oss-go-sdk/oss"
    	"github.com/aliyun/credentials-go/credentials"
    )
    
    type Credentials struct {
    	AccessKeyId     string
    	AccessKeySecret string
    	SecurityToken   string
    }
    
    type CredentialsProvider struct {
    	cred credentials.Credential
    }
    
    func (credentials *Credentials) GetAccessKeyID() string {
    	return credentials.AccessKeyId
    }
    
    func (credentials *Credentials) GetAccessKeySecret() string {
    	return credentials.AccessKeySecret
    }
    
    func (credentials *Credentials) GetSecurityToken() string {
    	return credentials.SecurityToken
    }
    
    func (defBuild CredentialsProvider) GetCredentials() oss.Credentials {
    	cred, _ := defBuild.cred.GetCredential()
    	return &Credentials{
    		AccessKeyId:     *cred.AccessKeyId,
    		AccessKeySecret: *cred.AccessKeySecret,
    		SecurityToken:   *cred.SecurityToken,
    	}
    }
    
    func NewCredentialsUriCredentialsProvider(credential credentials.Credential) CredentialsProvider {
    	return CredentialsProvider{
    		cred: credential,
    	}
    }
    
    func main() {
    	config := new(credentials.Config).
    		// Specify the credential type. Set the value to credentials_uri.
    		SetType("credentials_uri").
    		// Specify the URL. You can also set this parameter by using an environment variable and os.Getenv("").
    		// The default environment variable for the URL is ALIBABA_CLOUD_CREDENTIALS_URI.
    		SetURLCredential("http://127.0.0.1")
    	uriCredential, err := credentials.NewCredential(config)
    	if err != nil {
    		return
    	}
    	provider := NewCredentialsUriCredentialsProvider(uriCredential)
    	// Set yourEndpoint to the bucket's endpoint and yourRegion to its region.
    	// For a bucket in the China (Hangzhou) region, an example endpoint is https://oss-cn-hangzhou.aliyuncs.com and the region is cn-hangzhou.
    	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
    	clientOptions = append(clientOptions, oss.Region("yourRegion"))
    	// Set the signature version.
    	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
    	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    	fmt.Printf("client:%#v\n", client)
    }
    ```
    

### Method 8: Use an automatically rotated AccessKey pair

If your application requires long-term access to OSS but runs in an environment with a high risk of AccessKey pair leaks that requires frequent manual credential rotation, initialize the credential provider by using a ClientKey. This method uses an AccessKey pair. When you use a ClientKey, Key Management Service (KMS) can automatically and periodically rotate the managed RAM user AccessKey pair, turning a static RAM user AccessKey pair into a dynamic one to reduce the risk of leaks. In addition to periodic rotation, KMS also supports immediate rotation, allowing you to quickly replace an AccessKey pair if it is compromised. This method does not require you to manually manage an AccessKey pair, which reduces security risks and maintenance overhead. For information about how to obtain a ClientKey, see [Create an AAP](/help/en/kms/key-management-service/user-guide/create-an-aap).

1.  Run the `go get` command to use the Secret Client in your project.
    
    ```
    go get -u github.com/aliyun/aliyun-secretsmanager-client-go
    ```
    
2.  Create a configuration file named `secretsmanager.properties`.
    
    ```
    # Credential type
    credentials_type=client_key
    
    # Read the decryption password for the client key. Supports reading from an environment variable or a file.
    client_key_password_from_env_variable=#your client key private key password environment variable name#
    client_key_password_from_file_path=#your client key private key password file path#
    
    # Path to the ClientKey private key file
    client_key_private_key_path=#your client key private key file path#
    
    # Associated KMS region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
3.  Initialize the OSS client with the rotated credentials.
    
    ```
    package main
    
    import (
    	"encoding/json"
    	"fmt"
    	"os"
    
    	"github.com/aliyun/aliyun-oss-go-sdk/oss"
    	"github.com/aliyun/aliyun-secretsmanager-client-go/sdk"
    )
    
    type defaultCredentials struct {
    	config *oss.Config
    }
    
    func (defCre *defaultCredentials) GetAccessKeyID() string {
    	return defCre.config.AccessKeyID
    }
    
    func (defCre *defaultCredentials) GetAccessKeySecret() string {
    	return defCre.config.AccessKeySecret
    }
    
    func (defCre *defaultCredentials) GetSecurityToken() string {
    	return defCre.config.SecurityToken
    }
    
    type defaultCredentialsProvider struct {
    	config *oss.Config
    }
    
    func (defBuild *defaultCredentialsProvider) GetCredentials() oss.Credentials {
    	return &defaultCredentials{config: defBuild.config}
    }
    func NewDefaultCredentialsProvider(accessID, accessKey, token string) (defaultCredentialsProvider, error) {
    	var provider defaultCredentialsProvider
    	if accessID == "" {
    		return provider, fmt.Errorf("access key id is empty!")
    	}
    	if accessKey == "" {
    		return provider, fmt.Errorf("access key secret is empty!")
    	}
    	config := &oss.Config{
    		AccessKeyID:     accessID,
    		AccessKeySecret: accessKey,
    		SecurityToken:   token,
    	}
    	return defaultCredentialsProvider{
    		config,
    	}, nil
    }
    
    func main() {
    	client, err := sdk.NewClient()
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    	secretInfo, err := client.GetSecretInfo("#secretName#")
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    	fmt.Printf("SecretValue:%s\n", secretInfo.SecretValue)
    	var m map[string]string
    	err = json.Unmarshal([]byte(secretInfo.SecretValue), &m)
    	if err != nil {
    		fmt.Println("Error decoding JSON:", err)
    		os.Exit(-1)
    	}
    	accessKeyId := m["AccessKeyId"]
    	accessKeySecret := m["AccessKeySecret"]
    	provider, err := NewDefaultCredentialsProvider(accessKeyId, accessKeySecret, "")
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    	// Set yourEndpoint to the bucket's endpoint and yourRegion to its region.
    	// For a bucket in the China (Hangzhou) region, an example endpoint is https://oss-cn-hangzhou.aliyuncs.com and the region is cn-hangzhou.
    	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
    	clientOptions = append(clientOptions, oss.Region("yourRegion"))
    	// Set the signature version.
    	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
    	ossClient, err := oss.New("yourEndpoint", "", "", clientOptions...)
    	if err != nil {
    		fmt.Println("Error:", err)
    		os.Exit(-1)
    	}
    	fmt.Printf("client:%#v\n", ossClient)
    }
    ```
    

### Method 9: Implement a custom credential provider

If none of the preceding credential configuration methods meet your requirements, create a custom provider by implementing the oss.CredentialsProvider interface.

```
package main

import (
	"fmt"
	"os"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

type CustomerCredentialsProvider struct {
	config *oss.Config
}

func NewCustomerCredentialsProvider() CustomerCredentialsProvider {
	return CustomerCredentialsProvider{}
}

func (s CustomerCredentialsProvider) GetCredentials() oss.Credentials {
	// Return long-term access credentials.
	config := &oss.Config{
		AccessKeyID:     "id",
		AccessKeySecret: "secret",
	}
	return &CustomerCredentialsProvider{
		config,
	}
	// Return temporary access credentials.
	//config := &oss.Config{
	//    AccessKeyID:     "id",
	//    AccessKeySecret: "secret",
	//    SecurityToken:   "token",
	//}
	//return &CustomerCredentialsProvider{
	//    config,
	//}
}

func (s *CustomerCredentialsProvider) GetAccessKeyID() string {
	return s.config.AccessKeyID
}

func (s *CustomerCredentialsProvider) GetAccessKeySecret() string {
	return s.config.AccessKeySecret
}

func (s *CustomerCredentialsProvider) GetSecurityToken() string {
	return s.config.SecurityToken
}

func main() {
	provider := NewCustomerCredentialsProvider()
	// Set yourEndpoint to the bucket's endpoint and yourRegion to its region.
	// For a bucket in the China (Hangzhou) region, an example endpoint is https://oss-cn-hangzhou.aliyuncs.com and the region is cn-hangzhou.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(-1)
	}
	fmt.Printf("client:%#v\n", client)
}
```

## **Next steps**

After you configure access credentials, initialize an OSS client. For more information, see [Configure OSSClient instances](/help/en/oss/initialization-9).
