In software development, configuring a timeout period prevents a program from being blocked while it waits for a response. Not configuring a timeout can waste resources or even cause a system crash. A timeout period that is too short can interrupt a task before it completes, which affects normal operations. A well-configured timeout period improves system stability and user experience. This topic describes how to configure timeouts for the V2.0 .NET SDK.

## Timeout configuration methods

**Note**

The priority of timeout configurations, in descending order, is: RuntimeOptions configuration -> Config configuration .

-   You can configure the timeout period for the current request using `AlibabaCloud.TeaUtil.Models.RuntimeOptions`.
    
    ```
    // Set runtime parameters. This setting is valid only for requests that use this RuntimeOptions instance.
    var runtimeOptions = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
    // The default connection timeout is 5 × 1,000 milliseconds.
    runtimeOptions.ConnectTimeout = 50000;
    // The default read timeout is 10 × 1,000 milliseconds.
    runtimeOptions.ReadTimeout = 10000;
    ```
    
-   You can configure the global timeout period using `AlibabaCloud.OpenApiClient.Models.Config`.
    
    ```
    var ecsConfig = new AlibabaCloud.OpenApiClient.Models.Config
    {
        // The default connection timeout is 5 × 1,000 milliseconds.
        ConnectTimeout = 50000,
        // The default read timeout is 10 × 1,000 milliseconds.
        ReadTimeout = 10000
    };
    ```
