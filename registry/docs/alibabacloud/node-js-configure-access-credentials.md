To use the Object Storage Service (OSS) SDK for Node.js, you must provide access credentials to authenticate your requests. The SDK supports several methods for configuring credentials, allowing you to choose the one that best fits your security and operational requirements.

## **Prerequisites**

OSS SDK for Node.js is installed. For more information, see [Install the OSS SDK for Node.js](/help/en/oss/installation-7).

## **Select** a credential configuration method

The following table compares the different credential configuration methods to help you choose the most suitable one.

**Method**

**Scenario**

**AccessKey pair or security token required**

**Underlying logic**

**Credential validity period**

**Credential rotation or refresh method**

[Method 1: Use an AccessKey pair](#dd657ea839xv1)

Applications are deployed and run in a secure and stable environment that is not vulnerable to external attacks and need to access cloud services for a long period of time without frequent credential rotation.

Yes

AccessKey pair

Long-term

Manual rotation

[Method 2: Use a security token](#3a2b4ef1697pd)

Applications are deployed and run in an untrusted environment, in which case you want to manage the credential validity period and the resources that can be accessed.

Yes

Security token

Temporary

Manual refresh

[Method 3: Use RAMRoleARN](#cf008d6649g6n)

Applications need to be authorized to access cloud services, such as cross-account access.

Yes

Security token

Temporary

Automatic refresh

[Method 4: Use the RAM role obtained by using the security hardening mode of the metadata of the ECS instance](#9eb97565147am)

Applications are deployed and run on Elastic Compute Service (ECS) instances, elastic container instances, and Container Service for Kubernetes (ACK) worker nodes.

No

Security token

Temporary

Automatic refresh

[Method 5: Use OIDCRoleARN](#662885a264csq)

Untrusted applications are deployed and run on ACK worker nodes.

No

Security token

Temporary

Automatic refresh

[Method 6: Use CredentialsURI](#2a987e3f1ejsn)

Applications require access credentials from external systems.

No

Security token

Temporary

Automatic refresh

### **Method 1: Use an AccessKey pair**

Using a long-term AccessKey pair is straightforward but less secure. It is suitable for applications in highly secure environments. For better security, always use a RAM user's AccessKey pair with the minimum required permissions, not your Alibaba Cloud account's AccessKey pair. For more information about how to obtain an AccessKey pair, see [CreateAccessKey](/help/en/ram/developer-reference/api-ims-2019-08-15-createaccesskey).

**Warning**

An Alibaba Cloud account has full access to all resources of the account. Leaks of the Alibaba Cloud account AccessKey pair pose critical threats to the system. Therefore, use the AccessKey pair of a RAM user that is granted the minimum necessary permissions to initialize a credential provider.

1.  Configure environment variables.
    
    ## Mac OS X/Linux/Unix
    
    ```
    export ALIBABA_CLOUD_ACCESS_KEY_ID=<ALIBABA_CLOUD_ACCESS_KEY_ID>
    export ALIBABA_CLOUD_ACCESS_KEY_SECRET=<ALIBABA_CLOUD_ACCESS_KEY_SECRET>
    ```
    
    ## Windows
    
    ```
    set ALIBABA_CLOUD_ACCESS_KEY_ID=<ALIBABA_CLOUD_ACCESS_KEY_ID>
    set ALIBABA_CLOUD_ACCESS_KEY_SECRET=<ALIBABA_CLOUD_ACCESS_KEY_SECRET>
    ```
    
2.  Use the AccessKey pair to initialize the client.
    
    ```
    const OSS = require("ali-oss");
    
    // Initialize the OSSClient instance.
    const client = new OSS({
      // Obtain the AccessKey ID from the environment variable.
      accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
      // Obtain the AccessKey secret from the environment variable.
      accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET
    });
    
    // listBuckets
    const buckets = await client.listBuckets();
    console.log(buckets);
    ```
    

### **Method 2: Use a security token**

Call the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole) operation of STS as a RAM user and specify the maximum validity period of the security token. Then you obtain a security token.

1.  Configure environment variables.
    
    ## Mac OS X/Linux/Unix
    
    ```
    export ALIBABA_CLOUD_ACCESS_KEY_ID=<ALIBABA_CLOUD_ACCESS_KEY_ID>
    export ALIBABA_CLOUD_ACCESS_KEY_SECRET=<ALIBABA_CLOUD_ACCESS_KEY_SECRET>
    export ALIBABA_CLOUD_SECURITY_TOKEN=<ALIBABA_CLOUD_SECURITY_TOKEN>
    ```
    
    ## Windows
    
    ```
    set ALIBABA_CLOUD_ACCESS_KEY_ID=<ALIBABA_CLOUD_ACCESS_KEY_ID>
    set ALIBABA_CLOUD_ACCESS_KEY_SECRET=<ALIBABA_CLOUD_ACCESS_KEY_SECRET>
    set ALIBABA_CLOUD_SECURITY_TOKEN=<ALIBABA_CLOUD_SECURITY_TOKEN>
    ```
    
2.  Use the temporary access credentials to initialize the OSSClient instance.
    
    ```
    const OSS = require("ali-oss");
    
    // Initialize the OSSClient instance.
    const client = new OSS({
      // Obtain the AccessKey ID from the environment variable.
      accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
      // Obtain the AccessKey secret from the environment variable.
      accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
      // Obtain the security token from the environment variable.
      stsToken: process.env.ALIBABA_CLOUD_SECURITY_TOKEN
    });
    
    // listBuckets
    const buckets = await client.listBuckets();
    console.log(buckets);
    ```
    

### **Method 3: Use RAMRoleARN**

The underlying logic of this method is to use a security token obtained from STS to configure access credentials. After you specify the Alibaba Cloud Resource Name (ARN) of a RAM role, the Credentials tool obtains the security token from STS. You can also use the `policy` parameter to limit the permissions of the RAM role.

Use the AccessKey pair and RAMRoleARN to initialize the OSSClient instance.

```
const Credential = require("@alicloud/credentials");
const OSS = require("ali-oss");

// Use the ARN of your RAM role to initialize the Credentials client. 
const credentialsConfig = new Credential.Config({
  // Specify the credential type. 
  type: "ram_role_arn",
  // Obtain the AccessKey ID from the environment variable.
  accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
  // Obtain the AccessKey secret from the environment variable.
  accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
  // Specify the ARN of the RAM role that you want your application to assume by specifying the ALIBABA_CLOUD_ROLE_ARN environment variable. Example: acs:ram::123456789012****:role/adminrole.
  roleArn: '<RoleArn>',
  // Specify the role session name by specifying the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
  roleSessionName: '<RoleSessionName>',
  // Optional. Specify limited permissions for the RAM role. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}.
  // policy: '<Policy>',
  roleSessionExpiration: 3600
});
const credentialClient = new Credential.default(credentialsConfig);
const credential = await credentialClient.getCredential();

// Initialize the OSSClient instance.
const client = new OSS({
  accessKeyId:credential.accessKeyId,
  accessKeySecret: credential.accessKeySecret,
  stsToken: credential.securityToken,
  refreshSTSTokenInterval: 0, // Specify that Credential manages the update of the AccessKey ID, AccessKey secret, and security token.
  refreshSTSToken: async () => {
    const { accessKeyId, accessKeySecret, securityToken } = await credentialClient.getCredential();
    return {
      accessKeyId,
      accessKeySecret,
      stsToken: securityToken,
    };
  }
});

// listBuckets
const buckets = await client.listBuckets();
console.log( buckets);
```

### **Method 4: Use the RAM role obtained by using the security hardening mode of the metadata of the ECS instance**

The underlying logic of this method is to use a security token obtained from STS to configure access credentials. The Credentials tool automatically obtains the RAM role attached to an ECS instance and obtains the security token of the attached role by using the metadata server of the ECS instance. The security token is used to initialize a Credentials client. Use the Credentials tool to read the security token and initialize the Credentials client.

```
const Credential = require("@alicloud/credentials");
const OSS = require("ali-oss");

// Use the ARN of your RAM role to initialize the Credentials client. 
const credentialsConfig = new Credential.Config({
  // Specify the credential type. 
  type: "ecs_ram_role",
  // Optional. Specify the name of the RAM role attached to an ECS instance by specifying the ALIBABA_CLOUD_ECS_METADATA environment variable. If you do not specify this parameter, the name of the RAM role attached to an ECS instance is automatically obtained. We recommend that you specify this parameter to reduce the number of requests.
  roleName: '<RoleName>'
});
const credentialClient = new Credential.default(credentialsConfig);

const { accessKeyId, accessKeySecret, securityToken } = await credentialClient.getCredential();

// Initialize the OSSClient instance.
const client = new OSS({
  accessKeyId,
  accessKeySecret,
  stsToken: securityToken,
  refreshSTSTokenInterval: 0, // Specify that Credential manages the update of the AccessKey ID, AccessKey secret, and security token.
  refreshSTSToken: async () => {
    const { accessKeyId, accessKeySecret, securityToken } = await credentialClient.getCredential();
    
    return {
      accessKeyId,
      accessKeySecret,
      stsToken: securityToken,
    };
  }
});

// listBuckets
const buckets = await client.listBuckets();
console.log(buckets);
```

### Method 5: Use OIDCRoleARN

After a RAM role is configured on the ACK worker node, applications in pods on that node can obtain the role's security token via the metadata server, similar to applications on ECS instances. However, for untrusted applications such as customer-submitted code, you may want to restrict access to the RAM role's security token. To secure cloud resources while allowing untrusted applications to obtain necessary tokens and minimize permissions, use the RAM Roles for Service Accounts feature. ACK creates and mounts OpenID Connect token files for different application pods, passing configuration information to environment variables. The Credentials tool retrieves these configurations and calls the [AssumeRoleWithOIDC](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithoidc) operation of STS to obtain the attached role's security token. For more information, see [Use RRSA to authorize different pods to access different cloud services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#task-2142941).

Configure OIDCRoleARN as the access credential to initialize the client.

```
const OSS = require("ali-oss");
const Credential = require("@alicloud/credentials");

const credentialsConfig = new Credential.Config({
  // Specify the credential type. 
  type: "oidc_role_arn",
  // Specify the ARN of the RAM role by specifying the ALIBABA_CLOUD_ROLE_ARN environment variable.
  roleArn: '<RoleArn>',
  // Specify the ARN of the OIDC IdP by specifying the ALIBABA_CLOUD_OIDC_PROVIDER_ARN environment variable.
  oidcProviderArn: '<OidcProviderArn>',
  // Specify the path of the OIDC token file by specifying the ALIBABA_CLOUD_OIDC_TOKEN_FILE environment variable.
  oidcTokenFilePath: '<OidcTokenFilePath>',
  // Specify the role session name by specifying the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
  roleSessionName: '<RoleSessionName>',
  // Optional. Specify limited permissions for the RAM role. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}.
  // policy: "<Policy>",
  // Specify the validity period of the session.
  roleSessionExpiration: 3600
});
const credentialClient = new Credential.default(credentialsConfig);
const { accessKeyId, accessKeySecret, securityToken } = await credentialClient.getCredential();
const client = new OSS({
  accessKeyId,
  accessKeySecret,
  stsToken: securityToken,
  refreshSTSTokenInterval: 0, // Specify that Credential manages the update of the AccessKey ID, AccessKey secret, and security token.
  refreshSTSToken: async () => {
    const { accessKeyId, accessKeySecret, securityToken } = await credentialClient.getCredential();
    
    return {
      accessKeyId,
      accessKeySecret,
      stsToken: securityToken,
    };
  }
});
const buckets = await client.listBuckets();

console.log(buckets);
```

### Method 6: Use CredentialsURI

If your application needs to obtain Alibaba Cloud credentials from an external system for flexible management and keyless access, use the CredentialsURI to initialize a credential provider. This method uses a security token from STS to configure access credentials. The Credentials tool retrieves the token using the specified URI to initialize an OSSClient instance on the client. This approach minimizes the risks associated with manually managing AccessKey pairs or security tokens. Note that the backend service providing the CredentialsURI response must automatically refresh the security token to ensure your application always has valid credentials.

1.  To allow the Credentials tool to correctly parse and use a security token, the URI must comply with the following response protocol:
    
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
        
2.  Configure the CredentialsURI as the access credential to initialize the client.
    
    ```
    const OSS = require("ali-oss");
    const Credential = require("@alicloud/credentials");
    
    // Use the URI of the credential to initialize the Credentials client. 
    const credentialsConfig = new Credential.Config({
      // Specify the credential type. 
      type: "credentials_uri",
      // Specify the URI of the credential in the http://local_or_remote_uri/ format by specifying the ALIBABA_CLOUD_CREDENTIALS_URI environment variable.
      credentialsURI: '<CredentialsUri>'
    });
    const credentialClient = new Credential.default(credentialsConfig);
    const credential = await credentialClient.getCredential();
    
    // Initialize the OSSClient instance.
    const client = new OSS({
      accessKeyId: credential.accessKeyId,
      accessKeySecret: credential.accessKeySecret,
      stsToken: credential.securityToken,
      refreshSTSTokenInterval: 0, // Specify that Credential manages the update of the AccessKey ID, AccessKey secret, and security token.
      refreshSTSToken: async () => {
        const { accessKeyId, accessKeySecret, securityToken } = await credentialClient.getCredential();
    
        return {
          accessKeyId,
          accessKeySecret,
          stsToken: securityToken,
        };
      }
    });
    
    // listBuckets
    const buckets = await client.listBuckets();
    console.log(buckets);
    ```
    

## **What to do next**

After initializing the credential provider, you need to use the credential provider to create an OSSClient instance. For more information, see [Initialization](/help/en/oss/initialization-10).
