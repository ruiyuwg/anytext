This topic describes background information of asynchronous invocations and scenarios in which asynchronous invocations can be used. This topic also describes how to defer invocations of a function.

## Background

When Function Compute receives an asynchronous invocation request, Function Compute immediately returns a response after the request is persisted instead of waiting for the request to be executed before a response is returned. Function Compute ensures that the request is executed at least once. If you want to obtain results of asynchronous invocations, you can configure a destination service of asynchronous invocations. For more information, see [Result callback](/help/en/functioncompute/fc-2-0/user-guide/result-callback#task-2203700). If you want to obtain the status of each stage of an asynchronous request, you can enable the task mode. For more information, see [Overview](/help/en/functioncompute/fc-2-0/user-guide/overview-25#task-2159491).

## Scenarios

If your function contains logic that is time-consuming, resource-consuming, or error-prone, you can use asynchronous invocations to allow your programs to respond to traffic spikes in a more efficient and reliable manner. The following items provide example scenarios:

-   In a user registration system, a new user sends a registration request. After the registration is completed, the system sends email notifications to the user. The action of email sending can be separated from the registration process and asynchronously executed.
    
-   When you upload a file, actions such as format conversion and import and export can be separated from the data upload process and asynchronously executed.
    

**Note**

HTTP functions can be invoked in synchronous and asynchronous modes. For more information, see [Invocation methods](/help/en/functioncompute/fc-2-0/user-guide/overview-36#section-zgk-3vk-vke).

## Deferred invocation

In some scenarios, you may want Function Compute to defer function execution after you submit an asynchronous invocation request. In this case, you can use the Function Compute API or an SDK to defer function executions.

Add the HTTP request header `x-fc-async-delay` to the code. Valid values: \[0,3600\]. Unit: seconds. Function Compute invokes the function when the period specified by `x-fc-async-delay` elapses.

The following code provides an example on how to use Function Compute SDK for Go to defer function executions:

```
package main

import (
    "fmt"
    "os"
    "github.com/aliyun/fc-go-sdk"
)
func main() {
      /*
        The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Function Compute is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&M. 
        We recommend that you do not save the AccessKey ID and AccessKey secret in your project code. Otherwise, the AccessKey pair may be leaked and the security of all resources in your account may be compromised. 
        In this example, the AccessKey pair is saved in environment variables for authentication. 
        Configure the ALIBABA_CLOUD_ACCESS_KEY_ID ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variables in your on-premises environment before you run the sample code. 
        In runtimes of Function Compute, the ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variables are automatically configured after you configure execution permissions. 
      */
    fcClient, err := fc.NewClient(fmt.Sprintf("%s.cn-shanghai.fc.aliyuncs.com", os.Getenv("ACCOUNT_ID")),
        "2016-08-15", os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
    if err != nil {
        panic(err)
    }

    // invoke function with delay
    invokeInput := fc.NewInvokeFunctionInput({ServiceName}, {FunctionName}).WithPayload({payload})
    invokeInput = invokeInput.WithAsyncInvocation().WithHeader("x-fc-async-delay", "200")
    _, err := FcClient.InvokeFunction(invokeInput)
    if err != nil {
        panic(err)
    }
}
```

**Important**

Invocations that are deferred by using the preceding method may be not accurate in some scenarios. If you want to configure more accurate deferred executions, use a time trigger. For more information, see [Time triggers](/help/en/functioncompute/fc-2-0/user-guide/configure-a-time-trigger#task-2482313).

## Common features

See the following topics to learn about common features of asynchronous invocations:

-   [Event triggering](/help/en/functioncompute/fc-2-0/user-guide/event-triggering#task-2203690)
    
-   [Retry policies](/help/en/functioncompute/fc-2-0/user-guide/retry-policy#task-2203696)
    
-   [Result callback](/help/en/functioncompute/fc-2-0/user-guide/result-callback#task-2203700)
