In software development, configuring a timeout prevents a program from becoming unresponsive while it waits for a response. Failing to configure a timeout can lead to wasted resources or even a system crash. However, if the timeout value is too low, a task may be interrupted before it is complete, which can affect normal functionality. Therefore, setting an appropriate timeout is essential for system stability and user experience. This topic describes how to configure timeouts for the V2.0 Node.js SDK.

## **Configuration methods**

**Note**

The priority of timeout settings from highest to lowest is as follows: RuntimeOptions settings, Config settings, and default configurations.

-   Use the default timeout settings. The default timeout period for connection requests is 5,000 milliseconds, and the default timeout period for read requests is 10,000 milliseconds.
    
-   Configure RuntimeOptions.
    
    Node.js
    
    ```
    const { RuntimeOptions } = require('@alicloud/tea-util');
    
    // Create a RuntimeOptions instance and set runtime parameters.
    const runtime = new RuntimeOptions({
      // Set the connection timeout.
      connectTimeout: 10000,
      // Set the read timeout.
      readTimeout: 10000,
    });
        
    ```
    
    Typescript
    
    ```
    import * as $Util from '@alicloud/tea-util';
    
    // Create a RuntimeOptions instance and set runtime parameters.
    const runtime = new $Util.RuntimeOptions({
      // Set the connection timeout.
      connectTimeout: 10000,
      // Set the read timeout.
      readTimeout: 10000,
    });
    ```
    
-   You can configure a global timeout using Config.
    
    Node.js
    
    ```
    const { Config } = require('@alicloud/openapi-client');
    
    const config = new Config({
      // Set the connection timeout.
      connectTimeout: 10000,
      // Set the read timeout.
      readTimeout: 10000,
    });
    ```
    
    Typescript
    
    ```
    import * as $OpenApi from '@alicloud/openapi-client';
    
    const config = new $OpenApi.Config({
      // Set the connection timeout.
      connectTimeout: 10000,
      // Set the read timeout.
      readTimeout: 10000,
    });
    ```
