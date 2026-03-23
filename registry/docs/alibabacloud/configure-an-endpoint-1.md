This topic describes how to configure an endpoint in Alibaba Cloud Darabonba SDK.

**Note**

An endpoint is a domain name of an Alibaba Cloud service API. For example, an endpoint of Elastic Compute Service (ECS) can be ecs.cn-hangzhou.aliyuncs.com. Each Alibaba Cloud service has its unique endpoints. The endpoints of a service may vary based on regions.

## Configure an endpoint to which API requests are sent

Darabonba SDK allows you to specify the endpoint to which API requests are sent in two modes. The following list describes the modes by priority in descending order:

1.  User-defined endpoint: In this mode, you can specify an exact endpoint when you initialize an SDK client. You can query an endpoint by visiting
    
    [OpenAPI Explorer](https://next.api.aliyun.com/product/Ecs). For more information about how to query an endpoint in OpenAPI Explorer, see the "Query an endpoint" section of this topic. The following sample code provides an example on how to specify a user-defined endpoint in TypeScript:
    
    ```
    import * as $OpenApi from '@alicloud/openapi-client';
    
    export default class Client {
      static async main(): Promise<void> {
        const config = new $OpenApi.Config({
          // Omit the credential configuration.
          // The endpoint that you want to specify.
          endpoint: 'Endpoint'
        });
      }
    }
    ```
    
    The following sample code provides an example on how to specify a user-defined endpoint in JavaScript:
    
    ```
    const { Config } = require('@alicloud/openapi-client');
    
    async function main() {
      const config = new Config({
        // Omit the credential configuration.
        // The endpoint that you want to specify.
        endpoint: 'Endpoint'
      });
    }
    ```
    

2\. Concatenated endpoint: In this mode, you can specify a region ID for Darabonba SDK to generate an endpoint. This mode takes effect only if the SDK of an Alibaba Cloud service has an endpoint data file. Otherwise, an exception is thrown and the error message `config.endpoint can not be empty` is returned when you initialize an SDK client. In this case, you must specify an exact endpoint. For more information about an example of an endpoint data file, see [ECS endpoint data file](https://raw.githubusercontent.com/aliyun/alibabacloud-typescript-sdk/master/ecs-20140526/src/client.ts). If the region that you want to access is not included in the data file, the endpoint of the region is generated in the `${Code of the Alibaba Cloud service}.${Region ID}.aliyuncs.com` format. The following sample code provides an example on how to specify a concatenated endpoint in TypeScript:

```
import * as $OpenApi from '@alicloud/openapi-client';

export default class Client {
  static async main(): Promise<void> {
    const config = new $OpenApi.Config({
      // Omit the credential configuration.
      // The region that you want to access.
      regionId: 'RegionId'
    });
  }
}
```

The following sample code provides an example on how to specify a concatenated endpoint in JavaScript:

```
const { default: Ecs20140526 } = require('@alicloud/ecs20140526');
const { Config } = require('@alicloud/openapi-client');
async function main() {
  const config = new Config({
    // Omit the credential configuration.
    // The region that you want to access.
    regionId: 'RegionId'
  });
}
```

## Configure endpoints for uploading files

You can configure two endpoints for uploading files in Darabonba SDK.

-   The endpoint of an open platform that is used for authentication. You can configure a virtual private cloud (VPC) endpoint to request authentication information over a VPC. The authentication information is used for file uploads. The following sample code provides an example on how to configure the endpoint of an open platform in TypeScript:
    
    ```
    import Facebody20191230, * as $Facebody20191230 from '@alicloud/facebody20191230';
    import * as $OpenApi from '@alicloud/openapi-client';
    import * as $Util from '@alicloud/tea-util';
    import { createReadStream } from 'fs';
    
    export default class Client {
      static async main(): Promise<void> {
        const config = new $OpenApi.Config({
          // Omit the credential configuration.
          // The region that you want to access.
          regionId: 'RegionId',
          // The endpoint of the open platform.
          openPlatformEndpoint: 'openplatform-vpc.cn-shanghai.aliyuncs.com'
        });
        const client = new Facebody20191230(config);
        const request = new $Facebody20191230.DetectBodyCountAdvanceRequest({
          imageURLObject: createReadStream("The directory of the file that you want to upload on your computer"),
        });
        // Create a RuntimeObject instance and configure runtime parameters. 
        const runtime = new $Util.RuntimeOptions({});
        const resp = await client.DetectBodyCountAdvance(request, runtime);
        console.log(resp.headers);
        console.log(resp.body);
      }
    }
    ```
    
    The following sample code provides an example on how to configure the endpoint of an open platform in JavaScript:
    
    ```
    const { default: Facebody20191230, DetectBodyCountAdvanceRequest } = require('@alicloud/facebody20191230');
    const { Config } = require('@alicloud/openapi-client');
    const { RuntimeOptions } = require('@alicloud/tea-util');
    const { createReadStream } = require('fs');
    
    async function main() {
      const config = new Config({
        // Omit the credential configuration.
        // The region that you want to access.
        regionId: 'RegionId',
        // The endpoint of the open platform.
        openPlatformEndpoint: 'openplatform-vpc.cn-shanghai.aliyuncs.com'
      });
      const client = new Facebody20191230(config);
      const request = new DetectBodyCountAdvanceRequest({
        imageURLObject: createReadStream("The directory of the file that you want to upload on your computer"),
      });
      // Create a RuntimeObject instance and configure runtime parameters. 
      const runtime = new RuntimeOptions({});
      const resp = await client.DetectBodyCountAdvance(request, runtime);
      console.log(resp.headers);
      console.log(resp.body);
    }
    ```
    
-   The endpoint that you use to upload a file. You can configure an internal endpoint to upload a file over an internal network or a VPC. The following sample code provides an example on how to configure the endpoint that you use to upload a file in TypeScript:
    
    ```
    import Facebody20191230, * as $Facebody20191230 from '@alicloud/facebody20191230';
    import * as $OpenApi from '@alicloud/openapi-client';
    import * as $Util from '@alicloud/tea-util';
    import { createReadStream } from 'fs';
    
    export default class Client {
      static async main(): Promise<void> {
        const config = new $OpenApi.Config({
          // Omit the credential configuration.
          // The region that you want to access.
          regionId: 'RegionId',
          // The endpoint of the open platform.
          openPlatformEndpoint: 'openplatform-vpc.cn-shanghai.aliyuncs.com',
          // The OSS endpoint that you want to use to upload the file. If you set the endpoint type to internal, you can use an internal endpoint to upload the file to OSS over a VPC or the classic network. If you set the endpoint type to accelerate, you can use an accelerated endpoint outside China to upload the file to OSS.
          endpointType: 'internal'
        });
        const client = new Facebody20191230(config);
        const request = new $Facebody20191230.DetectBodyCountAdvanceRequest({
          imageURLObject: createReadStream("The directory of the file that you want to upload on your computer"),
        });
        // Create a RuntimeObject instance and configure runtime parameters. 
        const runtime = new $Util.RuntimeOptions({});
        const resp = await client.DetectBodyCountAdvance(request, runtime);
        console.log(resp.headers);
        console.log(resp.body);
      }
    }
    ```
    
    The following sample code provides an example on how to configure the endpoint that you use to upload a file in JavaScript:
    
    ```
    const { default: Facebody20191230, DetectBodyCountAdvanceRequest } = require('@alicloud/facebody20191230');
    const { Config } = require('@alicloud/openapi-client');
    const { RuntimeOptions } = require('@alicloud/tea-util');
    const { createReadStream } = require('fs');
    async function main() {
      const config = new Config({
        // Omit the credential configuration.
        // The region that you want to access.
        regionId: 'RegionId',
        // The endpoint of the open platform.
        openPlatformEndpoint: 'openplatform-vpc.cn-shanghai.aliyuncs.com',
        // The OSS endpoint that you want to use to upload the file. If you set the endpoint type to internal, you can use an internal endpoint to upload the file to OSS over a VPC or the classic network. If you set the endpoint type to accelerate, you can use an accelerated endpoint outside China to upload the file to OSS.
        endpointType: 'internal'
      });
      const client = new Facebody20191230(config);
      const request = new DetectBodyCountAdvanceRequest({
        imageURLObject: createReadStream("The directory of the file that you want to upload on your computer"),
      });
      // Create a RuntimeObject instance and configure runtime parameters. 
      const runtime = new RuntimeOptions({});
      const resp = await client.DetectBodyCountAdvance(request, runtime);
      console.log(resp.headers);
      console.log(resp.body);
    }
    ```
    

## Query an endpoint

You can query an endpoint in[OpenAPI Explorer](https://next.api.alibabacloud.com/home).

1.  Select an Alibaba Cloud service on the homepage of OpenAPI Explorer. For example, you can select ECS.
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8175185961/p716497.png)

2\. Click the Regions tab.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9175185961/p716500.png)

3\. Find the region that you want to specify and copy the endpoint of the region.

**You can also use the following method to query an endpoint**:

On the API Debugging tab of OpenAPI Explorer, find the API operation that you want to call and configure the RegionId parameter. OpenAPI Explorer automatically generates SDK sample code from which you can obtain the endpoint.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9175185961/p716501.png)
