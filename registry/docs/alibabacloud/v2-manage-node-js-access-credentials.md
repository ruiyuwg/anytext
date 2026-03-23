When you call API operations to manage cloud resources using Alibaba Cloud SDKs, you must configure valid credential information. The Credentials tool of Alibaba Cloud provides a set of easy-to-use features and supports various types of credentials, including the default credential, AccessKey pairs, and Security Token Service (STS) tokens. The Credentials tool helps you obtain and manage credentials. This topic describes how to configure different types of credentials and the order based on which the Credentials tool obtains the default credential. You can develop a thorough knowledge of configuring and managing credentials in Alibaba Cloud SDKs. This ensures that you can perform operations on cloud resources in an efficient and secure manner.

## **Background information**

A credential is a set of information that is used to prove the identity of a user. When you log on to the system, you must use a valid credential to complete identity authentication. The following types of credentials are commonly used:

1.  The AccessKey pair of an Alibaba Cloud account or a Resource Access Management (RAM) user. An AccessKey pair is permanently valid and consists of an AccessKey ID and an AccessKey secret.
    
2.  An STS token of a RAM role. An STS token is a temporary credential. You can specify a validity period and access permissions for an STS token. For more information, see [What is STS?](/help/en/ram/user-guide/what-is-sts)
    
3.  A bearer token. It is used for identity authentication and authorization.
    

## Prerequisites

-   Node.js 8.5.0 or later is installed.
    
-   Alibaba Cloud SDK V2.0 is installed. For more information, see [Use Alibaba Cloud SDKs for Node.js in an IDE](/help/en/sdk/developer-reference/use-the-alibaba-cloud-node-js-sdk-through-the-ide).
    

## Install the Credentials tool

Run the following `npm` command to download and install Alibaba Cloud Credentials for Node.js:

```
npm install @alicloud/credentials
```

We recommend that you use the latest version of Alibaba Cloud Credentials for Node.js. This ensures that all credentials are supported. For a list of versions, see [Releases · aliyun/credentials-nodejs · GitHub](https://github.com/aliyun/credentials-nodejs/releases).

## **Parameters** of the **Credentials tool**

The parameters of the Credentials tool are defined in the `Config` constructor of the `@alicloud/credentials` module. The credential type is specified by the `type` parameter, which is a required parameter in the configurations. After you determine a credential type, configure parameters based on the credential type. The following table describes the valid values of `type` and the parameters supported by each credential type. In the table, a check mark (`✓`) indicates that the parameter is required, a hyphen (`-`) indicates that the parameter is optional, and an X mark (`×`) indicates that the parameter is not supported.

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

accessKeyId: the AccessKey ID.

✓

✓

✓

×

×

×

×

accessKeySecret: the AccessKey secret.

✓

✓

✓

×

×

×

×

securityToken: a Security Token Service (STS) token.

×

✓

\-

×

×

×

×

roleArn: the Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role.

×

×

✓

×

✓

×

×

roleSessionName: the name of the custom session. The default format is `credentials-nodejs-The current timestamp`.

×

×

\-

×

\-

×

×

roleName: specifies the name of the RAM role.

×

×

×

\-

×

×

×

disableIMDSv1: specifies whether to forcibly use the security hardening mode (IMDSv2). If you set this parameter to true, the security hardening mode (IMDSv2) is used. Default value: `false`.

×

×

×

\-

×

×

×

bearerToken: a bearer token.

×

×

×

×

×

×

✓

policy: a custom policy.

×

×

\-

×

\-

×

×

roleSessionExpiration: the session timeout period. Default value: 3600. Unit: seconds.

×

×

\-

×

\-

×

×

oidcProviderArn: the ARN of the OpenID Connect (OIDC) identity provider (IdP).

×

×

×

×

✓

×

×

oidcTokenFilePath: the absolute path to the OIDC token.

×

×

×

×

✓

×

×

externalId: the external ID of the role, which is used to prevent the confused deputy issue. For more information, see [Use external IDs to prevent the confused deputy issue](/help/en/ram/use-cases/use-externalid-to-prevent-the-confused-deputy-problem).

×

×

\-

×

×

×

×

credentialsURI: the URI of the credential.

×

×

×

×

×

✓

×

STSEndpoint: the endpoint of STS. Virtual Private Cloud (VPC) endpoints and Internet endpoints are supported. Default value: `sts.aliyuncs.com`. For more information about the valid values, see [Endpoints](/help/en/ram/developer-reference/api-sts-2015-04-01-endpoint).

×

×

\-

×

\-

×

×

timeout: the timeout period of HTTP read requests. Default value: 5000. Unit: milliseconds.

×

×

\-

\-

\-

\-

×

connectTimeout: the timeout period of HTTP connection requests. Default value: 10000. Unit: milliseconds.

×

×

\-

\-

\-

\-

×

## Initialize a Credentials client

You can use one of the following methods to initialize a Credentials client as needed:

**Important**

-   If you use a plaintext AccessKey pair in a project, the AccessKey pair may be leaked due to improper permission management on the code repository. This may threaten the security of all resources within the account to which the AccessKey pair belongs. We recommend that you store the AccessKey pair in environment variables or configuration files.
    
-   We recommend that you initialize the Credentials client in single-instance mode. This mode not only enables the credential caching feature of the SDK, but also effectively prevents traffic control issues and waste of performance resources caused by multiple API calls. For more information, see the [Automatic update mechanism of session credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials#3771cb8a93ewh) section of this topic.
    

### Method 1: Use the default credential provider chain

If you do not specify a method to initialize a Credentials client, the default credential provider chain is used. For more information, see [Default credential provider chain](#3ca299f04bw3c).

Node.js

```
const Credential = require('@alicloud/credentials');

// Initialize a Credentials client without specifying a method.
const credentialClient = new Credential.default();

const credential = credentialClient.getCredential();
credential.then(credential => {
    console.log(credential);
});
```

Typescript

```
import Credential from '@alicloud/credentials';

const credential = new Credential();

credential.getCredential().then(credential => {
    console.log(credential);
});
```

#### **Example**

The following sample code provides an example on how to call the DescribeRegions operation of Elastic Compute Service (ECS). Before you call this operation, you must install [ECS SDK for Node.js](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=typescript-tea).

Node.js

```
const Ecs20140526 = require('@alicloud/ecs20140526');
const OpenApi = require('@alicloud/openapi-client');
const Util = require('@alicloud/tea-util');
const Credential = require('@alicloud/credentials');

async function main() {
    // Use the default credentials to initialize the SDK Credentials client. 
    const credentialClient = new Credential.default();
    const ecsConfig = new OpenApi.Config({
        endpoint: 'ecs.cn-hangzhou.aliyuncs.com', // Specify the endpoint of the cloud service. 
        credential: credentialClient, // Use the Credentials tool to configure credentials. 
    });
    const ecsClient = new Ecs20140526.default(ecsConfig);
    const describeRegionsRequest = new Ecs20140526.DescribeRegionsRequest();
    const runtime = new Util.RuntimeOptions();
    ecsClient.describeRegionsWithOptions(describeRegionsRequest, runtime).then((result) => {
        console.log(JSON.stringify(result.body));
    });
}

main().catch(console.error);
```

Typescript

```
import Ecs20140526, * as $Ecs20140526 from '@alicloud/ecs20140526';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';
import Credential from '@alicloud/credentials';

export default class Client {
    static async main(): Promise<$Ecs20140526.DescribeRegionsResponse> {
        // Use the default credential to initialize the Credentials client.
        let credential = new Credential();
        let config = new $OpenApi.Config({
            credential: credential, // Use the Credentials tool to configure credentials. 
            endpoint: 'ecs.cn-hangzhou.aliyuncs.com', // Specify the endpoint of the cloud service. 
        });

        let client = new Ecs20140526(config);
        let describeRegionsRequest = new $Ecs20140526.DescribeRegionsRequest({});
        let runtime = new $Util.RuntimeOptions({});
        return await client.describeRegionsWithOptions(describeRegionsRequest, runtime);
    }
}

const response = Client.main();
response.then(res => {
    console.log(res.body?.regions);
});
```

### Method 2: Use an AccessKey pair

This method lets you create an AccessKey pair to initialize a Credentials client. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).

**Warning**

An Alibaba Cloud account has full permissions on resources within the account. AccessKey pair leaks of an Alibaba Cloud account pose critical threats to the system.

Therefore, we recommend that you use an AccessKey pair of a RAM user that is granted permissions based on the principle of least privilege (PoLP) to initialize a Credentials client.

Node.js

```
const Credential = require('@alicloud/credentials');

const credentialsConfig = new Credential.Config({
    // Specify the credential type. 
    type: 'access_key',
    // Specify the AccessKey ID. In this example, the AccessKey ID is obtained from the environment variable. 
    accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
    // Specify the AccessKey secret. In this example, the AccessKey secret is obtained from the environment variable. 
    accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
});
const credentialClient = new Credential.default(credentialsConfig);
```

Typescript

```
import Credential, { Config } from '@alicloud/credentials';

const credentialsConfig  = new Config({
    // Specify the credential type. 
    type: 'access_key',
    // Specify the AccessKey ID. In this example, the AccessKey ID is obtained from the environment variable. 
    accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
    // Specify the AccessKey secret. In this example, the AccessKey secret is obtained from the environment variable. 
    accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
});
const credentialClient = new Credential(credentialsConfig);
```

#### Example

The following sample code provides an example on how to call the DescribeRegions operation of ECS. Before you call this operation, you must install [ECS SDK for Node.js](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=typescript-tea).

Node.js

```
const Ecs20140526 = require('@alicloud/ecs20140526');
const OpenApi = require('@alicloud/openapi-client');
const Util = require('@alicloud/tea-util');
const Credential = require('@alicloud/credentials');

async function main() {
    const credentialsConfig = new Credential.Config({
        // Specify the credential type. 
        type: 'access_key',
        // Specify the AccessKey ID. In this example, the AccessKey ID is obtained from the environment variable. 
        accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
        // Specify the AccessKey secret. In this example, the AccessKey secret is obtained from the environment variable. 
        accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
    });
    const credentialClient = new Credential.default(credentialsConfig);

    const ecsConfig = new OpenApi.Config();
    ecsConfig.endpoint = 'ecs.cn-hangzhou.aliyuncs.com'; // Specify the endpoint of the cloud service. 
    ecsConfig.credential = credentialClient; // Use the Credentials tool to configure credentials. 
    const ecsClient = new Ecs20140526.default(ecsConfig);
    
    const describeRegionsRequest = new Ecs20140526.DescribeRegionsRequest();
    const runtime = new Util.RuntimeOptions();
    ecsClient.describeRegionsWithOptions(describeRegionsRequest, runtime).then((response) => {
        console.log(response.body.regions);
    });
}

main().catch(console.error);
```

Typescript

```
import Ecs20140526, * as $Ecs20140526 from '@alicloud/ecs20140526';
import Credential, { Config } from '@alicloud/credentials';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';

export default class Client {
    static async main(): Promise<$Ecs20140526.DescribeRegionsResponse> {
        const credentialsConfig = new Config({
            // Specify the credential type. 
            type: 'access_key',
            // Specify the AccessKey ID. In this example, the AccessKey ID is obtained from the environment variable. 
            accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
            // Specify the AccessKey secret. In this example, the AccessKey secret is obtained from the environment variable. 
            accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
        });
        const credentialClient = new Credential(credentialsConfig);
        let config = new $OpenApi.Config({
            credential: credentialClient, // Use the Credentials tool to configure credentials. 
            endpoint: 'ecs.cn-hangzhou.aliyuncs.com', // Specify the endpoint of the cloud service. 
        });

        let client = new Ecs20140526(config);
        let describeRegionsRequest = new $Ecs20140526.DescribeRegionsRequest({});
        let runtime = new $Util.RuntimeOptions({});
        return await client.describeRegionsWithOptions(describeRegionsRequest, runtime);
    }
}

const response = Client.main();
response.then(res => {
    console.log(res.body?.regions);
});
```

### Method 3: Use a STS token

This method lets you use a static STS token to initialize a Credentials client. For more information about how to obtain an STS token, see [What is STS?](/help/en/ram/user-guide/what-is-sts) The following example shows how to initialize a Credentials client using an STS token. The example does not show how to obtain an STS token.

Node.js

```
const Credential = require('@alicloud/credentials');

const credentialsConfig = new Credential.Config({
    type: 'sts',
    // Specify the AccessKey ID. In this example, the AccessKey ID is obtained from the environment variable. 
    accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
    // Specify the AccessKey secret. In this example, the AccessKey secret is obtained from the environment variable. 
    accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
    // Specify the security token. In this example, the security token is obtained from the environment variable. 
    securityToken: process.env.ALIBABA_CLOUD_SECURITY_TOKEN,
});
const cred = new Credential.default(credentialsConfig);
```

Typescript

```
import Credential, { Config } from '@alicloud/credentials';

const credentialsConfig = new Config({
    // Specify the credential type. 
    type: 'access_key',
    // Specify the AccessKey ID. In this example, the AccessKey ID is obtained from the environment variable. 
    accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
    // Specify the AccessKey secret. In this example, the AccessKey secret is obtained from the environment variable. 
    accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
    // Specify the security token. In this example, the security token is obtained from the environment variable. 
    securityToken: process.env.ALIBABA_CLOUD_SECURITY_TOKEN,
});
const credentialClient = new Credential(credentialsConfig);
```

#### Example

The following sample code provides an example on how to call the DescribeRegions operation of ECS. Before you call this operation, you must install [ECS SDK for Node.js](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=typescript-tea) and [STS SDK for Node.js](https://next.api.alibabacloud.com/api-tools/sdk/Sts?version=2015-04-01&language=typescript-tea).

Node.js

```
const Ecs20140526 = require('@alicloud/ecs20140526');
const Sts20150401 = require('@alicloud/sts20150401');
const OpenApi = require('@alicloud/openapi-client');
const Util = require('@alicloud/tea-util');
const Credential = require('@alicloud/credentials');

async function assumeRole() {
    // Create an STS client and call the AssumeRole operation to obtain the STS token.
    const stsConfig = new OpenApi.Config({
        endpoint: 'sts.cn-hangzhou.aliyuncs.com', // The endpoint of STS. 
        accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID, // Obtain the AccessKey ID from the environment variables.
        accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET, // Obtain the AccessKey secret from the environment variables.
    });
    const stsClient = new Sts20150401.default(stsConfig);
    const assumeRoleRequest = new Sts20150401.AssumeRoleRequest({
        durationSeconds: 3600, // The validity period of the STS token.
        roleArn: '<RoleArn>', // Specify the ARN of the RAM role to be assumed. Example: acs:ram::123456789012****:role/adminrole. You can configure the ARN in the ALIBABA_CLOUD_ROLE_ARN environment variable. 
        roleSessionName: '<RoleSessionName>', // Specify the role session name. You can obtain the role session name from the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable. 
        policy: '', // Optional. Specify a RAM policy for the RAM role. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
    });
    try {
        const assumeRoleResponsePromise = await stsClient.assumeRole(assumeRoleRequest);
        const assumeRoleResponseBodyCredentials = assumeRoleResponsePromise.body.credentials;
        return {
            accessKeyId: assumeRoleResponseBodyCredentials.accessKeyId,
            accessKeySecret: assumeRoleResponseBodyCredentials.accessKeySecret,
            securityToken: assumeRoleResponseBodyCredentials.securityToken,
        };
    } catch (error) {
        console.error('AssumeRole request failed:', error);
        throw error;
    }
}
async function main() {
    const stsToken = await assumeRole()
    const credentialsConfig = new Credential.Config({
        // Specify the credential type. 
        type: 'sts',
        accessKeyId: stsToken.accessKeyId,
        accessKeySecret: stsToken.accessKeySecret,
        securityToken: stsToken.securityToken,
    });
    const credentialClient = new Credential.default(credentialsConfig);

    const ecsConfig = new OpenApi.Config({
        endpoint: 'ecs.cn-hangzhou.aliyuncs.com', // Specify the endpoint of the cloud service. 
        credential: credentialClient, // Use the Credentials tool to configure credentials. 
    })

    const ecsClient = new Ecs20140526.default(ecsConfig);
    const describeRegionsRequest = new Ecs20140526.DescribeRegionsRequest();
    const runtime = new Util.RuntimeOptions();
    // Call the DescribeRegions operation and obtain a response. 
    ecsClient.describeRegionsWithOptions(describeRegionsRequest, runtime).then((response) => {
        console.log(response.body.regions);
    });
}

main().catch(console.error);
```

Typescript

```
import Ecs20140526, * as $Ecs20140526 from '@alicloud/ecs20140526';
import Sts20150401, * as $Sts20150401 from '@alicloud/sts20150401';
import OpenApi, { Config } from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';
import Credential, { Config as CredentialConfig } from '@alicloud/credentials';

async function assumeRole() {
    // Create an STS client and call the AssumeRole operation to obtain the STS token.
    const stsConfig = new Config({
        endpoint: 'sts.cn-hangzhou.aliyuncs.com', // The endpoint of STS. 
        accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID, // Obtain the AccessKey ID from the environment variables.
        accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET, // Obtain the AccessKey secret from the environment variables.
    });
    const stsClient = new Sts20150401(stsConfig);
    const assumeRoleRequest = new $Sts20150401.AssumeRoleRequest({
        durationSeconds: 3600, // The validity period of the STS token.
        roleArn: '<RoleArn>', // Specify the ARN of the RAM role to be assumed. Example: acs:ram::123456789012****:role/adminrole. You can configure the ARN in the ALIBABA_CLOUD_ROLE_ARN environment variable.  
        roleSessionName: '<RoleSessionName>', // Specify the role session name. You can obtain the role session name from the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable. 
        policy: '', // Optional. Specify a RAM policy for the RAM role. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
    });
    try {
        const assumeRoleResponsePromise = await stsClient.assumeRole(assumeRoleRequest);
        const assumeRoleResponseBodyCredentials = assumeRoleResponsePromise.body?.credentials;
        return {
            accessKeyId: assumeRoleResponseBodyCredentials?.accessKeyId,
            accessKeySecret: assumeRoleResponseBodyCredentials?.accessKeySecret,
            securityToken: assumeRoleResponseBodyCredentials?.securityToken,
        };
    } catch (error) {
        console.error('AssumeRole request failed:', error);
        throw error;
    }
}
async function main() {
    const stsToken = await assumeRole()
    const credentialsConfig = new CredentialConfig({
        // Specify the credential type. 
        type: 'sts',
        accessKeyId: stsToken.accessKeyId,
        accessKeySecret: stsToken.accessKeySecret,
        securityToken: stsToken.securityToken,
    });
    const credentialClient = new Credential(credentialsConfig);

    const ecsConfig = new Config({
        endpoint: 'ecs.cn-hangzhou.aliyuncs.com', // Specify the endpoint of the cloud service. 
        credential: credentialClient, // Use the Credentials tool to configure credentials. 
    })

    const ecsClient = new Ecs20140526(ecsConfig);
    const describeRegionsRequest = new $Ecs20140526.DescribeRegionsRequest();
    const runtime = new $Util.RuntimeOptions();
    // Call the DescribeRegions operation and obtain a response. 
    ecsClient.describeRegionsWithOptions(describeRegionsRequest, runtime).then((response) => {
        console.log(response.body?.regions);
    });
}

main().catch(console.error);
```

### Method 4: Use an AccessKey pair and a RAM role

The underlying logic of this method is to use an STS token to initialize a Credentials client. After you specify the ARN of a RAM role, the Credentials tool obtains the security token from STS. You can also use the `policy` parameter to limit the permissions of the RAM role.

Node.js

```
const Credential = require('@alicloud/credentials');

const credentialsConfig = new Credential.Config({
    type: 'ram_role_arn',
    accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
    accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
    // Specify the ARN of the RAM role that you want to assume by specifying the ALIBABA_CLOUD_ROLE_ARN environment variable. Example: acs:ram::123456789012****:role/adminrole.
    roleArn: '<RoleArn>',
    // Specify the role session name. You can obtain the role session name from the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
    roleSessionName: '<RoleSessionName>',
    // Optional. Specify limited permissions for the RAM role. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
    policy: '<Policy>',
    roleSessionExpiration: 3600,
});
const cred = new Credential.default(credentialsConfig);
```

Typescript

```
import Credential, { Config } from '@alicloud/credentials';

const credentialsConfig = new Config({
    type: 'ram_role_arn',
    accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
    accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
    // Specify the ARN of the RAM role that you want to assume by specifying the ALIBABA_CLOUD_ROLE_ARN environment variable. Example: acs:ram::123456789012****:role/adminrole.
    roleArn: '<RoleArn>',
    // Specify the role session name. You can obtain the role session name from the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
    roleSessionName: '<RoleSessionName>',
    // Optional. Specify limited permissions for the RAM role. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}.
    policy: '<Policy>',
    roleSessionExpiration: 3600,
});
const credentialClient = new Credential(credentialsConfig);
```

#### Example

The following sample code provides an example on how to call the DescribeRegions operation of ECS. Before you call this operation, you must install [ECS SDK for Node.js](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=typescript-tea).

Node.js

```
const Ecs20140526 = require('@alicloud/ecs20140526');
const OpenApi = require('@alicloud/openapi-client');
const Util = require('@alicloud/tea-util');
const Credential = require('@alicloud/credentials');

async function main() {
    const credentialsConfig = new Credential.Config({
        // Specify the credential type. 
        type: 'ram_role_arn',
        // Specify the AccessKey ID. 
        accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
        // Specify the AccessKey secret. 
        accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
        // Specify the ARN of the RAM role that you want to assume by specifying the ALIBABA_CLOUD_ROLE_ARN environment variable. Example: acs:ram::123456789012****:role/adminrole.
        roleArn: '<RoleArn>',
        // Specify the role session name. You can obtain the role session name from the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
        roleSessionName: '<RoleSessionName>',
        // Optional. Specify limited permissions for the RAM role. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}.
        policy: '<Policy>',
        roleSessionExpiration: 3600,
    });
    const credentialClient = new Credential.default(credentialsConfig);

    const ecsConfig = new OpenApi.Config({
        endpoint: 'ecs.cn-hangzhou.aliyuncs.com', // Specify the endpoint of the cloud service. 
        credential: credentialClient, // Use the Credentials tool to configure credentials. 
    });

    const ecsClient = new Ecs20140526.default(ecsConfig);
    const describeRegionsRequest = new Ecs20140526.DescribeRegionsRequest();
    const runtime = new Util.RuntimeOptions();
    // Call the DescribeRegions operation and obtain a response. 
    const response = ecsClient.describeRegionsWithOptions(describeRegionsRequest, runtime);
    console.log((await response).body.regions);
}

main().catch(console.error);
```

Typescript

```
import Ecs20140526, * as $Ecs20140526 from '@alicloud/ecs20140526';
import Credential, { Config } from '@alicloud/credentials';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';

export default class Client {
    static async main(): Promise<$Ecs20140526.DescribeRegionsResponse> {
        const credentialsConfig = new Config({
            type: 'ram_role_arn',
            accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
            accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
            // Specify the ARN of the RAM role that you want to assume by specifying the ALIBABA_CLOUD_ROLE_ARN environment variable. Example: acs:ram::123456789012****:role/adminrole.
            roleArn: '<RoleArn>',
            // Specify the role session name. You can obtain the role session name from the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
            roleSessionName: '<RoleSessionName>',
            // Optional. Specify limited permissions for the RAM role. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}.
            policy: '<Policy>',
            roleSessionExpiration: 3600,
        });
        const credentialClient = new Credential(credentialsConfig);
        let config = new $OpenApi.Config({
            credential: credentialClient, // Use the Credentials tool to configure credentials. 
            endpoint: 'ecs.cn-hangzhou.aliyuncs.com', // Specify the endpoint of the cloud service. 
        });

        let client = new Ecs20140526(config);
        let describeRegionsRequest = new $Ecs20140526.DescribeRegionsRequest({});
        let runtime = new $Util.RuntimeOptions({});
        return await client.describeRegionsWithOptions(describeRegionsRequest, runtime);
    }
}

const response = Client.main();
response.then(res => {
    console.log(res.body?.regions);
});
```

### Method 5: Use the RAM role of an ECS instance

ECS instances and elastic container instances can be assigned RAM roles. Programs that run on the instances can use the Credentials tool to automatically obtain an STS token for the RAM role. The STS token can be used to initialize the Credentials client.

By default, the Credentials tool accesses the metadata server of ECS in security hardening mode (IMDSv2). If an exception is thrown, the Credentials tool switches to the normal mode (IMDSv1). You can also configure the `disableIMDSv1` parameter or the _ALIBABA\_CLOUD\_IMDSV1\_DISABLE_ environment variable to specify the exception handling logic. Valid values:

-   false (default): The Credentials tool continues to obtain the access credential in normal mode (IMDSv1).
    
-   true: The exception is thrown and the Credentials tool continues to obtain the access credential in security hardening mode (IMDSv2).
    

The configurations for the metadata server determine whether the server supports the security hardening mode (IMDSv2).

In addition, you can specify ALIBABA\_CLOUD\_ECS\_METADATA\_DISABLED=true to disable access from the Credentials tool to the metadata server of ECS.

**Note**

-   If you obtain an STS token in security hardening mode (IMDSv2), make sure that the version of the Credentials tool is 2.3.1 or later.
    
-   For more information about ECS instance metadata, see [Obtain instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).
    
-   For more information about how to attach a RAM role to an ECS instance, see the "Create an instance RAM role and attach the instance RAM role to an ECS instance" section of the [Instance RAM roles](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance#ff715dd098ta4) topic. For more information about how to attach a RAM role to an elastic container instance, see the "Assign the instance RAM role to an elastic container instance" section of the [Use an instance RAM role by calling API operations](/help/en/eci/user-guide/use-an-instance-ram-role-by-calling-api-operations#section-x3j-g0s-qha) topic.
    

Node.js

```
const Credential = require('@alicloud/credentials');

const credentialsConfig = new Credential.Config({
    type: 'ecs_ram_role',
    // Optional. Specify the name of the RAM role of the ECS instance by specifying the ALIBABA_CLOUD_ECS_METADATA environment variable. If you do not specify this parameter, its value is automatically obtained. To reduce the number of requests, we recommend that you specify this parameter.
    roleName: '<RoleName>',
    # Default value: false. This parameter is optional. true: The security hardening mode (IMDSv2) is forcibly used. false: The system preferentially attempts to obtain the access credential in security hardening mode (IMDSv2). If the attempt fails, the system switches to the normal mode (IMDSv1) to obtain access credentials.
    // disableIMDSv1: true,
});
const cred = new Credential.default(credentialsConfig);
```

Typescript

```
import Credential, { Config } from '@alicloud/credentials';

const credentialsConfig = new Config({
    type: 'ecs_ram_role',
    // Optional. Specify the name of the RAM role of the ECS instance by specifying the ALIBABA_CLOUD_ECS_METADATA environment variable. If you do not specify this parameter, its value is automatically obtained. To reduce the number of requests, we recommend that you specify this parameter.
    roleName: '<RoleName>',
    # Default value: false. This parameter is optional. true: The security hardening mode (IMDSv2) is forcibly used. false: The system preferentially attempts to obtain the access credential in security hardening mode (IMDSv2). If the attempt fails, the system switches to the normal mode (IMDSv1) to obtain access credentials.
    // disableIMDSv1: true,
});
const credentialClient = new Credential(credentialsConfig);
```

#### **Example**

The following sample code provides an example on how to call the DescribeRegions operation of ECS. Before you call this operation, you must install [ECS SDK for Node.js](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=typescript-tea).

Node.js

```
const Ecs20140526 = require('@alicloud/ecs20140526');
const OpenApi = require('@alicloud/openapi-client');
const Util = require('@alicloud/tea-util');
const Credential = require('@alicloud/credentials');

async function main() {
    const credentialsConfig = new Credential.Config({
        // Specify the credential type. 
        type: 'ecs_ram_role',
        // Optional. Specify the name of the RAM role of the ECS instance by specifying the ALIBABA_CLOUD_ECS_METADATA environment variable. If you do not specify this parameter, its value is automatically obtained. To reduce the number of requests, we recommend that you specify this parameter.
        roleName: '<RoleName>',
    });
    const credentialClient = new Credential.default(credentialsConfig);

    const ecsConfig = new OpenApi.Config({
        endpoint: 'ecs.cn-hangzhou.aliyuncs.com', // Specify the endpoint of the cloud service. 
        credential: credentialClient, // Use the Credentials tool to configure credentials. 
    });

    const ecsClient = new Ecs20140526.default(ecsConfig);
    const describeRegionsRequest = new Ecs20140526.DescribeRegionsRequest();
    const runtime = new Util.RuntimeOptions();
    // Call the DescribeRegions operation and obtain a response. 
    const response = ecsClient.describeRegionsWithOptions(describeRegionsRequest, runtime);
    console.log((await response).body.regions);
}

main().catch(console.error);
```

Typescript

```
import Ecs20140526, * as $Ecs20140526 from '@alicloud/ecs20140526';
import Credential, { Config } from '@alicloud/credentials';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';

export default class Client {
    static async main(): Promise<$Ecs20140526.DescribeRegionsResponse> {
        const credentialsConfig = new Config({
            type: 'ecs_ram_role',
            // Optional. Specify the name of the RAM role of the ECS instance by specifying the ALIBABA_CLOUD_ECS_METADATA environment variable. If you do not specify this parameter, its value is automatically obtained. To reduce the number of requests, we recommend that you specify this parameter.
            roleName: '<RoleName>',
            # Default value: false. This parameter is optional. true: The security hardening mode (IMDSv2) is forcibly used. false: The system preferentially attempts to obtain the access credential in security hardening mode (IMDSv2). If the attempt fails, the system switches to the normal mode (IMDSv1) to obtain access credentials.
            // disableIMDSv1: true,
        });
        const credentialClient = new Credential(credentialsConfig);
        let config = new $OpenApi.Config({
            credential: credentialClient, // Use the Credentials tool to configure credentials. 
            endpoint: 'ecs.cn-hangzhou.aliyuncs.com', // Specify the endpoint of the cloud service. 
        });

        let client = new Ecs20140526(config);
        let describeRegionsRequest = new $Ecs20140526.DescribeRegionsRequest({});
        let runtime = new $Util.RuntimeOptions({});
        return await client.describeRegionsWithOptions(describeRegionsRequest, runtime);
    }
}

const response = Client.main();
response.then(res => {
    console.log(res.body?.regions);
});
```

### Method 6: Use the RAM role of an OIDC IdP

To ensure the security of cloud resources and enable untrusted applications to securely obtain required STS tokens, you can use the [RAM Roles for Service Accounts (RRSA)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#task-2142941) feature to grant minimum necessary permissions to an application. ACK creates and mounts corresponding OpenID Connect (OIDC) token files for different application pods, and passes relevant configuration information to environment variables. The Credentials tool obtains the configuration information from the environment variables and calls the [AssumeRoleWithOIDC](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithoidc) operation of STS to obtain the STS token for attached roles.

The following environment variables are injected into the pod:

**_ALIBABA\_CLOUD\_ROLE\_ARN_**: the ARN of the RAM role.

**_ALIBABA\_CLOUD\_OIDC\_PROVIDER\_ARN_**: the ARN of the OIDC identity provider (IdP).

**_ALIBABA\_CLOUD\_OIDC\_TOKEN\_FILE_**: the path of the OIDC token file.

Node.js

```
const Credential = require('@alicloud/credentials');

const credentialsConfig = new Credential.Config({
    type: 'oidc_role_arn',
    // Specify the ARN of the RAM role that you want to assume by specifying the ALIBABA_CLOUD_ROLE_ARN environment variable.
    roleArn: '<RoleArn>',
    // Specify the ARN of the OIDC IdP by specifying the ALIBABA_CLOUD_OIDC_PROVIDER_ARN environment variable.
    oidcProviderArn: '<OidcProviderArn>',
    // Specify the path of the OIDC token file by specifying the ALIBABA_CLOUD_OIDC_TOKEN_FILE environment variable.
    oidcTokenFilePath: '<OidcTokenFilePath>',
    // Specify the role session name. You can obtain the role session name from the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
    roleSessionName: '<RoleSessionName>',
    // Optional. Specify limited permissions for the RAM role. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}.
    policy: '<Policy>',
    // Specify the validity period of the session.
    roleSessionExpiration: 3600,
});
const credentialClient = new Credential.default(credentialsConfig);
```

Typescript

```
import Credential, { Config } from '@alicloud/credentials';

const credentialsConfig = new Config({
    type: 'oidc_role_arn',
    // Specify the ARN of the RAM role that you want to assume by specifying the ALIBABA_CLOUD_ROLE_ARN environment variable.
    roleArn: '<RoleArn>',
    // Specify the ARN of the OIDC IdP by specifying the ALIBABA_CLOUD_OIDC_PROVIDER_ARN environment variable.
    oidcProviderArn: '<OidcProviderArn>',
    // Specify the path of the OIDC token file by specifying the ALIBABA_CLOUD_OIDC_TOKEN_FILE environment variable.
    oidcTokenFilePath: '<OidcTokenFilePath>',
    // Specify the role session name. You can obtain the role session name from the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
    roleSessionName: '<RoleSessionName>',
    // Optional. Specify limited permissions for the RAM role. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}.
    policy: '<Policy>',
    // Specify the validity period of the session.
    roleSessionExpiration: 3600,
});
const credentialClient = new Credential(credentialsConfig);
```

#### Example

The following sample code provides an example on how to call the DescribeRegions operation of ECS. Before you call this operation, you must install [ECS SDK for Node.js](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=typescript-tea).

Node.js

```
const Ecs20140526 = require('@alicloud/ecs20140526');
const OpenApi = require('@alicloud/openapi-client');
const Util = require('@alicloud/tea-util');
const Credential = require('@alicloud/credentials');

async function main() {
    const credentialsConfig = new Credential.Config({
        // Specify the credential type. 
        type: 'oidc_role_arn',
        // Specify the ARN of the RAM role that you want to assume by specifying the ALIBABA_CLOUD_ROLE_ARN environment variable.
        roleArn: '<RoleArn>',
        // Specify the ARN of the OIDC IdP by specifying the ALIBABA_CLOUD_OIDC_PROVIDER_ARN environment variable.
        oidcProviderArn: '<OidcProviderArn>',
        // Specify the path of the OIDC token file by specifying the ALIBABA_CLOUD_OIDC_TOKEN_FILE environment variable.
        oidcTokenFilePath: '<OidcTokenFilePath>',
        // Specify the role session name. You can configure the role session name as the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
        roleSessionName: '<RoleSessionName>',
        // Optional. Specify limited permissions for the RAM role. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}.
        policy: '<Policy>',
        // Specify the validity period of the session.
        roleSessionExpiration: 3600,
    });
    const credentialClient = new Credential.default(credentialsConfig);

    const ecsConfig = new OpenApi.Config({
        endpoint: 'ecs.cn-hangzhou.aliyuncs.com', // Specify the endpoint of the cloud service. 
        credential: credentialClient, // Use the Credentials tool to configure credentials. 
    });

    const ecsClient = new Ecs20140526.default(ecsConfig);
    const describeRegionsRequest = new Ecs20140526.DescribeRegionsRequest();
    const runtime = new Util.RuntimeOptions();
    // Call the DescribeRegions operation and obtain a response. 
    const response = ecsClient.describeRegionsWithOptions(describeRegionsRequest, runtime);
    console.log((await response).body.regions);
}

main().catch(console.error);
```

Typescript

```
import Ecs20140526, * as $Ecs20140526 from '@alicloud/ecs20140526';
import Credential, { Config } from '@alicloud/credentials';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';

export default class Client {
    static async main(): Promise<$Ecs20140526.DescribeRegionsResponse> {
        const credentialsConfig = new Config({
            type: 'oidc_role_arn',
            // Specify the ARN of the RAM role that you want to assume by specifying the ALIBABA_CLOUD_ROLE_ARN environment variable.
            roleArn: '<RoleArn>',
            // Specify the ARN of the OIDC IdP by specifying the ALIBABA_CLOUD_OIDC_PROVIDER_ARN environment variable.
            oidcProviderArn: '<OidcProviderArn>',
            // Specify the path of the OIDC token file by specifying the ALIBABA_CLOUD_OIDC_TOKEN_FILE environment variable.
            oidcTokenFilePath: '<OidcTokenFilePath>',
            // Specify the role session name. You can obtain the role session name from the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
            roleSessionName: '<RoleSessionName>',
            // Optional. Specify limited permissions for the RAM role. Example: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}.
            policy: '<Policy>',
            // Specify the validity period of the session.
            roleSessionExpiration: 3600,
        });
        const credentialClient = new Credential(credentialsConfig);
        let config = new $OpenApi.Config({
            credential: credentialClient, // Use the Credentials tool to configure credentials. 
            endpoint: 'ecs.cn-hangzhou.aliyuncs.com', // Specify the endpoint of the cloud service. 
        });

        let client = new Ecs20140526(config);
        let describeRegionsRequest = new $Ecs20140526.DescribeRegionsRequest({});
        let runtime = new $Util.RuntimeOptions({});
        return await client.describeRegionsWithOptions(describeRegionsRequest, runtime);
    }
}

const response = Client.main();
response.then(res => {
    console.log(res.body?.regions);
});
```

### Method 7: Use a credential URI

This method lets you encapsulate an STS token in your application and provide a custom URI to external resources. Other services can obtain the STS token only through the URI. This minimizes the risk of AccessKey exposure. The Credentials tool lets you obtain the STS token by calling the service URI to initialize the Credentials client.

Node.js

```
const Credential = require('@alicloud/credentials');

const config = new Credential.Config({
    type: 'credentials_uri',
    // Specify the URI of the credential in the http://local_or_remote_uri/ format by specifying the ALIBABA_CLOUD_CREDENTIALS_URI environment variable.
    credentialsURI: '<CredentialsUri>',
});
const credentialClient = new Credential(config);
```

Typescript

```
import Credential, { Config } from '@alicloud/credentials';

const credentialsConfig = new Config({
    type: 'credentials_uri',
    // Specify the URI of the credential in the http://local_or_remote_uri/ format by specifying the ALIBABA_CLOUD_CREDENTIALS_URI environment variable.
    credentialsURI: '<CredentialsUri>',
});
const credentialClient = new Credential(credentialsConfig);
```

The URI must meet the following requirements:

-   The response status code is 200.
    
-   The following response parameters are returned:
    
    ```
    {
      "Code": "Success",
      "AccessKeySecret": "AccessKeySecret",
      "AccessKeyId": "AccessKeyId",
      "Expiration": "2021-09-26T03:46:38Z",
      "SecurityToken": "SecurityToken"
    }
    ```
    

#### Call example

The following sample code provides an example on how to call the DescribeRegions operation of ECS. Before you call this operation, you must install [ECS SDK for Node.js](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=java-tea).

Node.js

```
const Ecs20140526 = require('@alicloud/ecs20140526');
const OpenApi = require('@alicloud/openapi-client');
const Util = require('@alicloud/tea-util');
const Credential = require('@alicloud/credentials');

async function main() {
    const credentialsConfig = new Credential.Config({
        // Specify the credential type. 
        type: 'credentials_uri',
        // Specify the URI of the credential in the http://local_or_remote_uri/ format by specifying the ALIBABA_CLOUD_CREDENTIALS_URI environment variable.
        credentialsURI: '<CredentialsUri>',
    });
    const credentialClient = new Credential.default(credentialsConfig);

    const ecsConfig = new OpenApi.Config({
        endpoint: 'ecs.cn-hangzhou.aliyuncs.com', // Specify the endpoint of the cloud service. 
        credential: credentialClient, // Use the Credentials tool to configure credentials. 
    });

    const ecsClient = new Ecs20140526.default(ecsConfig);
    const describeRegionsRequest = new Ecs20140526.DescribeRegionsRequest();
    const runtime = new Util.RuntimeOptions();
    // Call the DescribeRegions operation and obtain a response. 
    const response = ecsClient.describeRegionsWithOptions(describeRegionsRequest, runtime);
    console.log((await response).body.regions);
}

main().catch(console.error);
```

Typescript

```
import Ecs20140526, * as $Ecs20140526 from '@alicloud/ecs20140526';
import Credential, { Config } from '@alicloud/credentials';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';

export default class Client {
    static async main(): Promise<$Ecs20140526.DescribeRegionsResponse> {
        let credentialsConfig = new Config({
            type: 'credentials_uri',
            // Specify the URI of the credential in the http://local_or_remote_uri/ format by specifying the ALIBABA_CLOUD_CREDENTIALS_URI environment variable.
            credentialsURI: '<CredentialsUri>',
        });
        let credentialClient = new Credential(credentialsConfig);
        let config = new $OpenApi.Config({
            credential: credentialClient, // Use the Credentials tool to configure credentials. 
            endpoint: 'ecs.cn-hangzhou.aliyuncs.com', // Specify the endpoint of the cloud service. 
        });

        let client = new Ecs20140526(config);
        let describeRegionsRequest = new $Ecs20140526.DescribeRegionsRequest({});
        let runtime = new $Util.RuntimeOptions({});
        return await client.describeRegionsWithOptions(describeRegionsRequest, runtime);
    }
}

const response = Client.main();
response.then(res => {
    console.log(res.body?.regions);
});
```

### Method 8: Use a bearer token

Only [Cloud Call Center](https://api.aliyun.com/api/CCC/2020-07-01/ListPrivilegesOfUser) lets you use a bearer token to initialize an SDK client.

Node.js

```
const Credential = require('@alicloud/credentials');

const config = new Credential.Config({
    type: 'bearer',
    // Specify the bearer token.
    bearerToken: '<BearerToken>',
});
const credentialClient = new Credential(config);
```

Typescript

```
import Credential, { Config } from '@alicloud/credentials';

const credentialsConfig = new Config({
    type: 'bearer',
    // Specify the bearer token.
    bearerToken: '<BearerToken>',
});
const credentialClient = new Credential(credentialsConfig);
```

#### Example

The following sample code provides an example on how to call the GetInstance operation of Cloud Call Center. Before you call this operation, you must install [Cloud Call Center SDK for Go](https://next.api.alibabacloud.com/api-tools/sdk/CCC?version=2020-07-01&language=typescript-tea&tab=primer-doc).

Node.js

```
const CCC20200701 = require('@alicloud/ccc20200701');
const OpenApi = require('@alicloud/openapi-client');
const Util = require('@alicloud/tea-util');
const Credential = require('@alicloud/credentials');

async function main() {
    let credentialsConfig = new Credential.Config({
        // Specify the credential type. 
        type: 'bearer',
        // Specify the bearer token.
        bearerToken: '<BearerToken>',
    });
    let credentialClient = new Credential.default(credentialsConfig);

    let config = new OpenApi.Config({
        endpoint: 'ccc.cn-shanghai.aliyuncs.com',
        credential: credentialClient
    });

    let client = new CCC20200701.default(config);
    let getInstanceRequest = new CCC20200701.GetInstanceRequest({
        instanceId: 'ccc-test',
    });
    let runtime = new Util.RuntimeOptions({});
    let response = client.getInstanceWithOptions(getInstanceRequest, runtime);
    console.log((await response).body);
}

main().catch(console.error);
```

Typescript

```
import ccc20200701, * as $ccc20200701 from '@alicloud/ccc20200701';
import Credential, { Config } from '@alicloud/credentials';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';

export default class Client {
    static async main(): Promise<$ccc20200701.GetInstanceResponse> {
        let credentialsConfig = new Config({
            type: 'bearer',
            // Specify the bearer token.
            bearerToken: '<BearerToken>',
        });
        let credentialClient = new Credential(credentialsConfig);
        let config = new $OpenApi.Config({
            credential: credentialClient, // Use the Credentials tool to configure credentials. 
            endpoint: 'ccc.cn-shanghai.aliyuncs.com', // Specify the endpoint of the cloud service. 
        });

        let client = new ccc20200701(config);
        let GetInstanceRequest = new $ccc20200701.GetInstanceRequest({
            instanceId: 'ccc-test',
        });
        let runtime = new $Util.RuntimeOptions({});
        return await client.getInstanceWithOptions(GetInstanceRequest, runtime);
    }
}

let response = Client.main();
response.then(res => {
    console.log(res.body?.regions);
});
```

## Default credential provider chain

If you want to use different types of credentials in the development and production environments of your application, you generally need to obtain the environment information from the code and write code branches to obtain different credentials for the development and production environments. The default credential provider chain of Alibaba Cloud Credentials for Java allows you to use the same code to obtain credentials for different environments based on configurations independent of the application. If you use `new Credential()` to initialize a Credentials client without specifying an initialization method, the Credentials tool obtains the credential information in the following order:

### 1\. Obtain the credential information from environment variables

If no credential information is found in the system attributes, the Credentials continues to check the environment variables.

-   If both the **_ALIBABA\_CLOUD\_ACCESS\_KEY\_ID_** and **_ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET_** environment variables are specified, they are used as the default credential.
    
-   If **_ALIBABA\_CLOUD\_ACCESS\_KEY\_ID, ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET_**, and **_ALIBABA\_CLOUD\_SECURITY\_TOKEN_** are specified, the STS token is used as the default credential.
    

### 2\. Obtain the credential information by using the RAM role of an OIDC IdP

If no credentials with a higher priority are found, the Credentials tool checks the following environment variables that are related to the RAM role of the OIDC IdP:

-   **_ALIBABA\_CLOUD\_ROLE\_ARN_**: the ARN of the RAM role.
    
-   **_ALIBABA\_CLOUD\_OIDC\_PROVIDER\_ARN_**: the ARN of the OIDC IdP.
    
-   **_ALIBABA\_CLOUD\_OIDC\_TOKEN\_FILE:_** the file path of the OIDC token.
    

If the preceding three environment variables are specified and valid, the Credentials tool uses the environment variables to call the [AssumeRoleWithOIDC](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithoidc) operation of STS to obtain an STS token as the default credential.

### 3\. Obtain the credential information from the config.json file

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

### 4\. Obtain the credential information by using the RAM role of an ECS instance

If no credentials with a higher priority are found, the Credentials tool attempts to use the RAM role assigned to the ECS instance to obtain a credential. By default, the Credentials tool accesses the metadata server of ECS in security hardening mode (IMDSv2) to obtain the STS token of the RAM role used by the ECS instance and uses the STS token as the default credential. The Credentials tool automatically accesses the metadata server of ECS to obtain the name of the RAM role (RoleName) and then obtains the credential. Two requests are sent in this process. If you want to send only one request, add the **_ALIBABA\_CLOUD\_ECS\_METADATA_** environment variable to specify the name of the RAM role. If an exception occurs in the security hardening mode (IMDSv2), the Credentials tool obtains the access credential in normal mode (IMDSv1). You can also configure the **_ALIBABA\_CLOUD\_IMDSV1\_DISABLE_** environment variable to specify an exception handling logic. Valid values:

1.  false: The Credentials tool continues to obtain the access credential in normal mode (IMDSv1).
    
2.  true: The exception is thrown and the Credentials tool continues to obtain the access credential in security hardening mode.
    

The configurations for the metadata server determine whether the server supports the security hardening mode (IMDSv2).

In addition, you can specify ALIBABA\_CLOUD\_ECS\_METADATA\_DISABLED=true to disable access from the Credentials tool to the metadata server of ECS.

**Note**

-   For more information about ECS instance metadata, see [Obtain instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).
    
-   For more information about how to attach a RAM role to an ECS instance, see the "Create an instance RAM role and attach the instance RAM role to an ECS instance" section of the [Instance RAM roles](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance#ff715dd098ta4) topic. For more information about how to attach a RAM role to an elastic container instance, see the "Assign the instance RAM role to an elastic container instance" section of the [Use an instance RAM role by calling API operations](/help/en/eci/user-guide/use-an-instance-ram-role-by-calling-api-operations#section-x3j-g0s-qha) topic.
    

### 5\. Obtain the credential information based on a URI

If no valid credential is obtained using the preceding methods, the Credentials tool checks the **_ALIBABA\_CLOUD\_CREDENTIALS\_URI_** environment variable. If this environment variable exists and specifies a valid URI, the Credentials tool initiates an HTTP requests to obtain an STS token as the default credential.

## **Automatic update mechanism** of session credentials

Session credentials include ARNs of RAM roles (RamRoleArn), RAM roles of ECS instances, RAM roles of OIDC IdPs (OIDCRoleArn), and credential URIs. The Credentials tool provides a built-in automatic update mechanism for session credentials. After a credential is obtained from the first call, the Credentials tool stores the credential in the cache. In subsequent calls, the credential is read from the cache as long as the credential is not expired. Otherwise, the Credentials tool makes a call to obtain the credential again, and updates the credential in the cache.

**Note**

For RAM roles of ECS instances, the Credentials tool updates the credential 15 minutes before the cache time-to-live (TTL) ends.

In the following example, the Credentials client is created in single-instance mode and is used to initialize the cloud service client. Then, an API operation is called during different time periods to check whether internal cache is used and whether the credential is refreshed after the cache expires.

Node.js

```
const Credential = require('@alicloud/credentials');
const Ecs20140526 = require('@alicloud/ecs20140526');
const { Config } = require('@alicloud/openapi-client');
const { RuntimeOptions } = require('@alicloud/tea-util');

// Obtain the environment variables.
const accessKeyId = process.env.ALIBABA_CLOUD_ACCESS_KEY_ID;
const accessKeySecret = process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET;
const roleArn = process.env.ALIBABA_CLOUD_ROLE_ARN;

/**
 * The Credential singleton class is used to manage Alibaba Cloud credential instances. 
 */
class CredentialClient {
    constructor() {
        if (!CredentialClient.instance) {
            var credentialsConfig = new Credential.Config({
                type: 'ram_role_arn',
                accessKeyId: accessKeyId,
                accessKeySecret: accessKeySecret,
                roleArn: roleArn,
                roleSessionName: 'RoleSessionNameTest',
                roleSessionExpiration: 3600,
            });
            this.credentialsClient = new Credential.default(credentialsConfig);
            CredentialClient.instance = this;
        }

        return CredentialClient.instance;
    }

    static getInstance() {
        return new CredentialClient().credentialsClient;
    }
}

/**
 * The ECS Client singleton class is used to manage ECS client instances. 
 */
class EcsClient {
    constructor(credentialClient) {
        if (!EcsClient.instance) {
            const config = new Config({
                endpoint: 'ecs.cn-hangzhou.aliyuncs.com',
                credential: credentialClient
            });

            this.ecsClient = new Ecs20140526.default(config);
            EcsClient.instance = this;
        }

        return EcsClient.instance;
    }

    static getInstance(credentialClient) {
        return new EcsClient(credentialClient).ecsClient;
    }
}

/**
 * Execute the task logic.
 */
async function executeTask() {
    try {
        const credentialClient = CredentialClient.getInstance();
        const credential = await credentialClient.getCredential();
        console.log(new Date());
        console.log(`AK ID: ${credential.accessKeyId}`);
        console.log(`AK Secret: ${credential.accessKeySecret}`);
        console.log(`STS Token: ${credential.securityToken}`);

        // In this example, an ECS API operation is called to test whether the credential is valid. You can call specify the API operation that you want to call.
        const ecsClient = EcsClient.getInstance(credentialClient);
        const request = new Ecs20140526.DescribeRegionsRequest();
        const runtime = new RuntimeOptions({});
        const response = await ecsClient.describeRegionsWithOptions(request, runtime);
        console.log(`Invoke result: ${response.statusCode}`);
    } catch (error) {
        throw new Error(`ECS client execution failed: ${error.message}`, { cause: error });
    }
}

/**
 * Schedule task execution by using a timer.
 */
function scheduleTasks() {
    // Immediately run the task for one time.
    executeTask();
    // Set a delay for subsequent tasks.
    setTimeout(executeTask, 600 * 1000); // Run the task for the second time after 600 seconds.
    setTimeout(executeTask, 4200 * 1000); // Run the task for the third time after 4,200 seconds.
    setTimeout(executeTask, 4300 * 1000); // Run the task for the fourth time after 4,300 seconds.
}

// Start task scheduling.
scheduleTasks();
```

Typescript

```
import Credential, { Config as CredentialsConfig }  from '@alicloud/credentials';
import Ecs20140526, * as $Ecs20140526 from '@alicloud/ecs20140526';
import { Config } from '@alicloud/openapi-client';
import { RuntimeOptions } from '@alicloud/tea-util';

// Obtain the environment variables.
const accessKeyId: string | undefined = process.env.ALIBABA_CLOUD_ACCESS_KEY_ID;
const accessKeySecret: string | undefined = process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET;
const roleArn: string | undefined = process.env.ALIBABA_CLOUD_ROLE_ARN;

if (!accessKeyId || !accessKeySecret || !roleArn) {
    throw new Error('Missing required environment variables.');
}

/**
 * The Credential singleton class is used to manage Alibaba Cloud credential instances. 
 */
class CredentialClient {
    private static instance: CredentialClient;

    private readonly credentialsClient: InstanceType<typeof Credential>;

    private constructor() {
        const credentialsConfig = new CredentialsConfig({
            type: 'ram_role_arn',
            accessKeyId,
            accessKeySecret,
            roleArn,
            roleSessionName: 'RoleSessionNameTest',
            roleSessionExpiration: 3600,
        });

        this.credentialsClient = new Credential(credentialsConfig);
    }

    static getInstance(): InstanceType<typeof Credential> {
        if (!CredentialClient.instance) {
            CredentialClient.instance = new CredentialClient();
        }
        return CredentialClient.instance.credentialsClient;
    }
}

/**
 * The ECS Client singleton class is used to manage ECS client instances. 
 */
class EcsClient {
    private static instance: EcsClient;

    private readonly ecsClient: InstanceType<typeof Ecs20140526>;

    private constructor(credentialClient: InstanceType<typeof Credential>) {
        const config = new Config({
            endpoint: 'ecs.cn-hangzhou.aliyuncs.com',
            credential: credentialClient
        });

        this.ecsClient = new Ecs20140526(config);
    }

    static getInstance(credentialClient: InstanceType<typeof Credential>): InstanceType<typeof Ecs20140526> {
        if (!EcsClient.instance) {
            EcsClient.instance = new EcsClient(credentialClient);
        }
        return EcsClient.instance.ecsClient;
    }
}

/**
 * Execute the task logic.
 */
async function executeTask(): Promise<void> {
    try {
        const credentialClient = CredentialClient.getInstance();
        const credential = await credentialClient.getCredential();

        console.log(new Date());
        console.log(`AK ID: ${credential.accessKeyId}`);
        console.log(`AK Secret: ${credential.accessKeySecret}`);
        console.log(`STS Token: ${credential.securityToken}`);

        // In this example, an ECS API operation is called to test whether the credential is valid. You can call specify the API operation that you want to call.
        const ecsClient = EcsClient.getInstance(credentialClient);
        const request = new $Ecs20140526.DescribeRegionsRequest();
        const runtime = new RuntimeOptions({});
        const response = await ecsClient.describeRegionsWithOptions(request, runtime);
        console.log(`Invoke result: ${response.statusCode}`);
    } catch (error) {
        throw new Error(`ECS client execution failed: ${error}`);
    }
}

/**
 * Schedule task execution by using a timer.
 */
function scheduleTasks(): void {
    // Immediately run the task for one time.
    executeTask();

    // Set a delay for subsequent tasks.
    setTimeout(executeTask, 600 * 1000); // Run the task for the second time after 600 seconds.
    setTimeout(executeTask, 4200 * 1000); // Run the task for the third time after 4,200 seconds.
    setTimeout(executeTask, 4300 * 1000); // Run the task for the fourth time after 4,300 seconds.
}

// Start task scheduling.
scheduleTasks();
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7225320571/p961877.png)

Log analysis:

-   In the first call, the system obtains the credential based on the configurations because the credential is not cached. After the system obtains the credential, the credential is stored in the cache.
    
-   The second call uses the same credential as the first call, which indicates that the credential is obtained from the cache.
    
-   In the third call, the credential has expired because the third call is 4,200 seconds later than the first call while the credential TTL (RoleSessionExpiration) is set to 3,600 seconds. The SDK obtains the credential again based on the automatic update mechanism and stored the credential in the cache.
    
-   The fourth call uses the same credential as the third call, which indicates that the credential is updated after cache expiration.
    

#### **References**

-   For more information about RAM, see [Terms](/help/en/ram/terms).
    
-   For more information about how to create an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-188766).
    
-   For more information about how to create a RAM user, an AccessKey pair, a RAM role, and a policy and grant permissions to a RAM user, see [RAM SDK overview](/help/en/ram/developer-reference/ram-sdk-overview).
    
-   For more information about how to assume a role using a program, see [STS SDK overview](/help/en/ram/developer-reference/sts-sdk-overview).
    
-   For more information about RAM and STS-related API operations, see [API Reference](/help/en/ram/developer-reference/api-reference/).
    
-   [Best practices for using an access credential to call API operations](/help/en/ram/use-cases/best-practices-for-using-access-credentials-to-access-alibaba-cloud-openapi)
    
-   [Solutions to AccessKey pair leaks](/help/en/ram/user-guide/solution-to-accesskey-leakage)
