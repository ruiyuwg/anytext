This topic describes the exception types in Alibaba Cloud SDK V2.0 for Node.js and how to handle the exceptions.

Errors are thrown if exceptions occur when you use Alibaba Cloud SDK V2.0 for Node.js. The exceptions can be classified into the following types:

-   UnretryableError: This type of exception is caused by network issues. UnretryableError is thrown if the number of retries reaches the upper limit. You can use `err.data.lastRequest` to obtain the request information when the exception occurs.
    
-   ResponseError: This type of exception is caused by business errors. The following three parameters are provided to troubleshoot errors.
    
    -   code: the error code that is returned when the exception occurs.
        
    -   message: the error message that is returned when the exception occurs. The message contains the ID of the API request for which the exception is thrown.
        
    -   data: the detailed error information that is returned by the server for the exception.
        

**Sample code**:

**Important**

In this example, error messages are printed for reference only. In your actual business scenario, handle exceptions with caution and do not ignore exceptions in your project. We recommend that you take reasonable measures to handle exceptions, such as propagating exceptions in a proper manner, recording logs, and performing retries. This helps ensure the robustness and stability of the system.

Node.js

```
const { default: Ecs20140526, DescribeRegionsRequest } = require('@alicloud/ecs20140526');
const { Config } = require('@alicloud/openapi-client');
const { RuntimeOptions } = require('@alicloud/tea-util');
async function main() {
    const config = new Config({
        // Obtain the AccessKey ID of the RAM user from an environment variable.
        accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
        // Obtain the AccessKey secret of the RAM user from an environment variable.
        accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
        // The region ID.
        regionId: 'cn-beijing',
    });
    const client = new Ecs20140526(config);
    const request = new DescribeRegionsRequest({
        instanceChargeType: "PrePaid",
    });
    // Create a RuntimeOptions instance and configure runtime parameters. 
    const runtime = new RuntimeOptions();
    try {
        const resp = await client.describeRegionsWithOptions(request, runtime);
        console.log(resp.headers);
        console.log(resp.body);
    } catch (err) {
        // Handle exceptions with caution based on your actual business scenario and do not ignore exceptions in your project. The error message displayed in this example is for reference only. 
        console.log(err.code);
        console.log(err.message);
        console.log(err.data);
    }
}

main();
```

Typescript

```
import Ecs20140526, * as $Ecs20140526 from '@alicloud/ecs20140526';
import * as $OpenApi from '@alicloud/openapi-client';
import * as $Util from '@alicloud/tea-util';

export default class Client {
    static async main(): Promise<void> {
        const config = new $OpenApi.Config({
            // Obtain the AccessKey ID of the RAM user from an environment variable.
            accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
            // Obtain the AccessKey secret of the RAM user from an environment variable.
            accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
            // The region that you want to access.
            regionId: 'cn-beijing',
        });
        const client = new Ecs20140526(config);
        const request = new $Ecs20140526.DescribeRegionsRequest({
            instanceChargeType: "PrePaid",
        });
        // Create a RuntimeOptions instance and configure runtime parameters. 
        const runtime = new $Util.RuntimeOptions();
        try {
            const resp = await client.describeRegionsWithOptions(request, runtime);
            console.log(resp.headers);
            console.log(resp.body);
        } catch (err) {
            // Handle exceptions with caution based on your actual business scenario and do not ignore exceptions in your project. The error message displayed in this example is for reference only. 
            console.log(err.code);
            console.log(err.message);
            console.log(err.data);
        }
    }
}
```
