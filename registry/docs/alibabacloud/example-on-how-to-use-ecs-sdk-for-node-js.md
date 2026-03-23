This topic describes how to install and use the Node.js V2.0 software development kit (SDK) and provides an example on how to use the DescribeInstances API operation to query the details of one or more Elastic Compute Service (ECS) instances.

## Prerequisites

1.  The AccessKey of an Alibaba Cloud account provides full access to your resources, which poses a high security risk if the AccessKey is leaked. We recommend that you create a Resource Access Management (RAM) user and grant the RAM user only the required permissions. Then, use the AccessKey of the RAM user to call API operations. For more information, see [Create an AccessKey](/help/en/ram/user-guide/create-an-accesskey-pair).
    
2.  You have granted the RAM user permissions to manage ECS resources. The example code in this topic shows a query operation. In this example, the AliyunECSReadonlyAccess system policy is used. You can grant custom permissions as needed.
    
    1.  Use custom policies.
        
        For more information about how to create custom policies, see [Create a custom policy](/help/en/ram/create-a-custom-policy#task-glf-vwf-xdb) and [Authorization information](/help/en/ecs/developer-reference/api-ecs-2014-05-26-ram).
        
        ECS provides custom policy examples based on best practices. You can use these examples to quickly create custom policies that meet your business needs. For more information, see [Custom policies](/help/en/ecs/user-guide/custom-policies-for-ecs).
        
    2.  Use system policies.
        
        For information about all system policies that ECS supports and their permission descriptions, see [System policies for ECS](/help/en/ecs/user-guide/ecs).
        
3.  Configure the AccessKey using environment variables. For more information, see [Configure environment variables on Linux, macOS, and Windows systems](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    

## Install the SDK

You can install the Node.js V2.0 SDK from the [SDK Center](https://api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=typescript-tea&tab=primer-doc). Alternatively, you can copy the following command and run it in your terminal to install the ECS SDK:

```
npm install --save @alicloud/ecs20140526@4.3.0
```

## Use the SDK

### 1\. Initialize the client

The Alibaba Cloud SDK supports multiple types of access credentials to initialize the client, such as an AccessKey and a Security Token Service (STS) token. For more information about other methods, see [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-node-js-access-credentials). This example shows how to initialize the client using an AccessKey.

## TypeScript example

```
import Ecs20140526, * as $Ecs20140526 from '@alicloud/ecs20140526';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';

export class Client {
   static createClient() {
       let config = new $OpenApi.Config({
           // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is set.
           accessKeyId: process.env['ALIBABA_CLOUD_ACCESS_KEY_ID'],
           // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is set.
           accessKeySecret: process.env['ALIBABA_CLOUD_ACCESS_KEY_SECRET'],
           endpoint: `ecs.cn-hangzhou.aliyuncs.com`,
       });
       return new Ecs20140526(config);
   }
}
```

## JavaScript example

```
const Ecs20140526 = require('@alicloud/ecs20140526');
const OpenApi = require('@alicloud/openapi-client');

class Client {
  static createClient() {
    const config = new OpenApi.Config({
      // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is set.
      accessKeyId: process.env['ALIBABA_CLOUD_ACCESS_KEY_ID'],
      // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is set.
      accessKeySecret: process.env['ALIBABA_CLOUD_ACCESS_KEY_SECRET'],
      endpoint: `ecs.cn-hangzhou.aliyuncs.com`,
    });
    return new Ecs20140526.default(config);
  }
}
```

### 2\. Create a request object for the API operation

Before you create the request object, refer to the [API documentation](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstances) for the operation to obtain information about its parameters.

**Note**

The naming convention for a request object is {APIName}Request. For example, the request object for the DescribeInstances operation is DescribeInstancesRequest.

## TypeScript example

```
// Create a request object.
const describeInstancesRequest = new Ecs20140526.DescribeInstancesRequest({
  regionId: "cn-hangzhou",
});
```

## JavaScript example

```
// Create a request object.
const describeInstancesRequest = new Ecs20140526.DescribeInstancesRequest({
  regionId: "cn-hangzhou",
});
```

### 3\. Initiate the call

When you call an OpenAPI operation from the client, you can set runtime parameters, such as timeout and proxy configurations. For more information, see [Advanced configurations](/help/en/sdk/developer-reference/nodejs-advanced-configuration/).

**Note**

The naming convention for a response object is {APIName}Response. For example, the response object for the DescribeInstances operation is DescribeInstancesResponse.

## TypeScript example

```
// Create a runtime configuration object.
const runtime = new $Util.RuntimeOptions();
// Initiate the request.  
const describeInstancesResponse = await client.describeInstancesWithOptions(describeInstancesRequest, runtime);
```

## JavaScript example

```
// Create a runtime configuration object.
const runtime = new Util.RuntimeOptions();
// Initiate the request.  
const describeInstancesResponse = await client.describeInstancesWithOptions(describeInstancesRequest, runtime);
```

### 4\. Handle exceptions

The Node.js SDK uses Promise and async/await to handle asynchronous operations. It also provides an error handling mechanism to help developers catch and handle potential errors in API calls. When an API call fails, the Alibaba Cloud SDK throws an Error object. The SDK classifies exceptions into UnretryableError and ResponseError.

-   UnretryableError: This error is typically caused by network issues. The error is thrown after the maximum number of retries for a network issue is reached.
    
-   ResponseError: This is a business-related exception.
    

**You must take appropriate measures to handle exceptions, such as propagating exceptions, recording logs, and attempting to recover. This practice ensures the robustness and stability of your system.**

### 5\. Complete example

## TypeScript example

```
import * as $Util from '@alicloud/tea-util';
import Ecs20140526, * as $Ecs20140526 from '@alicloud/ecs20140526';
import * as $OpenApi from '@alicloud/openapi-client';

export class Client {
    static createClient() {
        let config = new $OpenApi.Config({
            // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is set.
            accessKeyId: process.env['ALIBABA_CLOUD_ACCESS_KEY_ID'],
            // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is set.
            accessKeySecret: process.env['ALIBABA_CLOUD_ACCESS_KEY_SECRET'],
            endpoint: `ecs.cn-hangzhou.aliyuncs.com`,
        });
        return new Ecs20140526(config);
    }
    static async main(): Promise<void> {
        const client = Client.createClient();
        // Create a request object.
        const describeInstancesRequest = new $Ecs20140526.DescribeInstancesRequest({
            regionId: "cn-hangzhou",
        });
        // Create a runtime configuration object.
        const runtime = new $Util.RuntimeOptions();
        try {
            // Initiate the request and get the response.
            const response = await client.describeInstancesWithOptions(describeInstancesRequest, runtime);
            console.log('Describe Instances Response:', JSON.stringify(response.body));
        } catch (error) {
            // The error is only printed for demonstration purposes. Handle exceptions with caution. Do not ignore exceptions in your projects.
            console.error('Error occurred:', error);
        }
    }
}

Client.main();
```

## JavaScript example

```
const Ecs20140526 = require('@alicloud/ecs20140526');
const OpenApi = require('@alicloud/openapi-client');
const Util = require('@alicloud/tea-util');

class Client {
  static createClient() {
    const config = new OpenApi.Config({
      // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is set.
      accessKeyId: process.env['ALIBABA_CLOUD_ACCESS_KEY_ID'],
      // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is set.
      accessKeySecret: process.env['ALIBABA_CLOUD_ACCESS_KEY_SECRET'],
      endpoint: `ecs.cn-hangzhou.aliyuncs.com`,
    });
    return new Ecs20140526.default(config);
  }

  static async main() {
    const client = Client.createClient();
    // Create a request object.
    const describeInstancesRequest = new Ecs20140526.DescribeInstancesRequest({
      regionId: "cn-hangzhou",
    });
    // Create a runtime configuration object.
    const runtime = new Util.RuntimeOptions();
    try {
      // Initiate the request and get the response.
      const response = await client.describeInstancesWithOptions(describeInstancesRequest, runtime);
      console.log('Describe Instances Response:', JSON.stringify(response.body));
    } catch (error) {
      // The error is only printed for demonstration purposes. Handle exceptions with caution. Do not ignore exceptions in your projects.
      // Error message
      console.log('Error occurred:', error.message);
    }
  }
}

Client.main();
```

#### **Scenario-based examples**

-   [Create multiple ECS instances](https://api.alibabacloud.com/api-tools/demo/Ecs/806fd7fc-a916-4085-be13-d0f8b35a7aa8)
    
-   [Query a list of ECS instances](https://api.alibabacloud.com/api-tools/demo/Ecs/8c4656ff-2710-4d74-b5cb-5f9593e13b4a)
    
-   [Renew an ECS instance](https://api.alibabacloud.com/api-tools/demo/Ecs/09f1786e-106a-4726-b58c-909da95ea202)
    
-   [Release an ECS instance](https://api.alibabacloud.com/api-tools/demo/Ecs/f4643bff-a520-4c90-bee8-42edf8c9b071)
    
-   [Query available resources for instance type changes](https://api.alibabacloud.com/api-tools/demo/Ecs/b4e36cdf-2db4-4a79-ab88-075e1e154872)
    
-   [Query spot instance inventory](https://api.alibabacloud.com/api-tools/demo/Ecs/51a231f0-ee16-4731-80e2-6ba89957e6e1)
    
-   [Query the current price of spot instances](https://api.alibabacloud.com/api-tools/demo/Ecs/65dabc40-8983-4d9a-b4ed-864e454941dd)
    
-   [Create a spot instance](https://api.alibabacloud.com/api-tools/demo/Ecs/adc4b58a-139e-4f4d-9df9-8033594485c4)
    
-   [Add a security group rule](https://api.alibabacloud.com/api-tools/demo/Ecs/d8a1f12d-4fa2-419f-a36c-9c907eff3a06)
    
-   [Create a security group and add a resource to it](https://api.alibabacloud.com/api-tools/demo/Ecs/d8a1f12d-4fa2-419f-a36c-9c907eff3a06)
    
-   [Create an elastic network interface (ENI)](https://api.alibabacloud.com/api-tools/demo/Ecs/1d32980f-7dba-43e7-ab84-8684252fdadf)
    
-   [Attach an ENI](https://api.alibabacloud.com/api-tools/demo/Ecs/059b780d-9551-4ca3-8211-efeec3092bb6)
    
-   [Detach an ENI](https://api.alibabacloud.com/api-tools/demo/Ecs/01b7e0c3-9f1f-4532-aec3-f02926a21d6d)
    
-   [Delete an ENI](https://api.alibabacloud.com/api-tools/demo/Ecs/83a01923-5db8-4a56-a09d-65c0290f05b7)
    
-   [Change an ECS instance type](https://api.alibabacloud.com/api-tools/demo/Ecs/56ccacea-2cc5-431f-b6d5-5931c80c3968)
    
-   [Modify the instance type and public bandwidth of an instance](https://api.alibabacloud.com/api-tools/demo/Ecs/9e85058e-bb8e-4f30-ba85-83f6b5633e8f)
    
-   [Obtain one or more alternative instance types for a specified instance type](https://api.alibabacloud.com/api-tools/demo/Ecs/bc152ba0-369e-4327-a7eb-245d193e29d3)
    
-   [Best practices for creating an ECS instance using an alternative instance type](https://api.alibabacloud.com/api-tools/demo/Ecs/19532d20-fd67-4022-ad96-824cb8751b25)
    

## More information

In addition to the preceding methods, you can also use generalized calls to call ECS OpenAPI operations. For more information, see [Generalized calls](/help/en/sdk/developer-reference/generalized-call-node-js).

For more information about the V1.0 SDK, see [V1.0 Node.js SDK](/help/en/sdk/developer-reference/v1-0-node-js-sdk/).
