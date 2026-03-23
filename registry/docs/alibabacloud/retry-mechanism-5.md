The V2.0 software development kit (SDK) has a built-in automatic retry mechanism for network exceptions in its OpenAPI request processing logic. If a request fails because of a network issue, the system automatically retries the request to improve service stability and reliability. However, the SDK does not retry requests that fail because of business logic errors, such as invalid parameters or a non-existent resource. This topic describes how to configure the automatic retry mechanism for network exceptions in the V2.0 SDK.

## Configuration methods

**Note**

The RuntimeOptions configuration takes precedence over the default configuration.

-   Use the default configuration. By default, failed requests are not retried. If you enable retries but do not specify the maximum number of attempts, a request is retried up to three times.
    
-   Configure the retry mechanism for the current request using `AlibabaCloud.TeaUtil.Models.RuntimeOptions`.
    
    ```
    // Configure runtime parameters. The settings are valid only for requests that use this RuntimeOptions instance.
    var runtimeOptions = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
    // Enable the automatic retry mechanism.
    runtimeOptions.Autoretry = true;
    // Set the maximum number of retries.
    runtimeOptions.MaxAttempts = 3;
    ```
