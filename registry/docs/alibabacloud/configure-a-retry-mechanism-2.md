The V2.0 software development kit (SDK) automatically retries OpenAPI requests that fail due to network exceptions. This improves service stability and reliability. The SDK does not retry requests that fail due to business logic errors, such as invalid parameters or a non-existent resource. Your application must handle these errors based on the specific error message instead of retrying the request. This topic describes how to configure the automatic retry mechanism for network exceptions.

## **Configuration methods**

**Note**

The configuration priority is as follows, from highest to lowest: RuntimeOptions, then default configurations.

-   You can use the default configurations. By default, the SDK does not retry failed requests. However, if you enable retries without specifying the number of attempts, the system retries a request a maximum of three times.
    
-   You can configure the retry mechanism using runtime parameters (RuntimeOptions).
    
    ```
    import (
        util "github.com/alibabacloud-go/tea-utils/v2/service"
    )
    
    runtime := &util.RuntimeOptions{}
    // Enable the automatic retry mechanism.
    runtime.Autoretry = tea.Bool(true)
    // Set the maximum number of retries.
    runtime.MaxAttempts = tea.Int(3)
    ```
