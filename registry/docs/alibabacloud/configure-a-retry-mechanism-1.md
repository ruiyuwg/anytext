In Alibaba Cloud SDK V2.0, the API request processing logic includes the built-in retry logic for network exceptions. When a request fails due to network exceptions, the system automatically retries to reinitiate the request to ensure service stability and reliability. However, if the request fails due to business logic errors, such as parameter errors and missing resources, the system does not perform retries. In this case, you must adjust the request based on the corresponding error message instead of performing retries. This topic describes how to configure a retry mechanism in Alibaba Cloud SDK V2.0 for Node.js.

## **Retry mechanism configuration**

**Note**

The priority levels of methods that are used to configure a retry mechanism are in the following descending order: RuntimeOptions > the default retry settings.

-   We recommend that you use the default retry settings. By default, no retries are performed when exceptions occur. If you enable the automatic retry mechanism but do not specify the maximum number of retries, up to three retries are performed by default.
    
-   Configure a retry mechanism using RuntimeOptions.
    
    Node.js
    
    ```
    const { RuntimeOptions } = require('@alicloud/tea-util');
    
    // Create a RuntimeOptions instance and set the runtime parameters.
    const runtime = new RuntimeOptions({
      // Enable automatic retries.
      autoretry: true,
      // Set the number of retries.
      maxAttempts: 3,
    });
    ```
    
    Typescript
    
    ```
    import * as $Util from '@alicloud/tea-util';
    
    // Create a RuntimeOptions instance and set the runtime parameters.
    const runtime = new $Util.RuntimeOptions({
      // Enable automatic retries.
      autoretry: true,
      // Set the number of retries.
      maxAttempts: 3,
    });
    ```
