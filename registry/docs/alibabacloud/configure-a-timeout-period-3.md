In software development, timeouts prevent a program from blocking indefinitely while waiting for a response. If you do not set a timeout, you risk wasting resources or even crashing the system. If a timeout is too short, a task may be interrupted before it is complete, which affects normal functionality. A well-configured timeout improves system stability and user experience. This topic describes how to configure timeouts for the V2.0 Go SDK.

## **Timeout configuration method**

**Note**

Timeout configurations are applied in the following order of precedence, from highest to lowest: RuntimeOptions, Config, and default configurations.

-   Use the default settings. The default timeout period for connection requests is 5,000 milliseconds and the default timeout period for read requests is 10,000 milliseconds.
    
-   Configure the timeout for the current request using RuntimeOptions.
    
    ```
    import (
        util "github.com/alibabacloud-go/tea-utils/v2/service"
    )
    
    runtime := &util.RuntimeOptions{}
    // Set the timeout parameters. Unit: ms.
    runtime.ConnectTimeout = tea.Int(5000) // Set the connection timeout to 5 seconds.
    runtime.ReadTimeout = tea.Int(10000) // Set the read timeout to 10 seconds.
    ```
    
-   Configure a global timeout using Config.
    
    ```
    import (
        openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
    )
    
    config := &openapi.Config{
        // Set the timeout parameters. Unit: ms.
        ConnectTimeout: tea.Int(5000), // Connection timeout
        ReadTimeout:    tea.Int(10000), // Read timeout
    }
    ```
