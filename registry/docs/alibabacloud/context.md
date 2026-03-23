This topic describes the context in the Go runtime in Function Compute and provides sample code.

## What is context?

When Function Compute runs your function code, it passes the context object `context.Context` to the handler. This object contains information about invocations, services, functions, tracing analysis, and runtime environments.

You can use the context object as an input parameter for event handlers and HTTP handlers. The format and content of the context input parameter for event handlers and HTTP handlers are the same. The following table describes the parameters that are supported by the context object.

Table 1. Context  

Parameter

Description

**Variables**

RequestID

The unique ID of the request for invoking the function. You can record the ID for troubleshooting if an error occurs.

Credentials

The temporary AccessKey pair that Function Compute obtains by assuming your service-linked role. The temporary AccessKey pair is valid for 36 hours. You can use `credentials` in your code to access related services such as Object Storage Service (OSS). This way, you can access the services without the need to write your AccessKey pair in the function code. For more information, see [Grant permissions across Alibaba Cloud accounts by using a RAM role](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-permissions-by-using-a-ram-role#task-2078146).

Function

The basic information of the invoked function, such as the name, handler, memory, and timeout period of the function.

Service

The information about the service to which the function belongs, such as the name, the related project and Logstore in Log Service, the version, and the alias of the service. The `qualifier` parameter specifies the version or alias of the service. The `version_id` parameter specifies the version of the service.

Region

The ID of the region in which the function is invoked. For example, if the function is invoked in the China (Shanghai) region, the region ID is cn-shanghai. For more information, see [Endpoints](/help/en/functioncompute/fc-2-0/developer-reference/endpoints#multiTask2761).

AccountId

The ID of the Alibaba Cloud account that is used to invoke the function.

**Method**

deadline

The timeout period of function execution. The value is in the UNIX timestamp format. Unit: milliseconds.

For more information about the complete data structure, see [context.go](https://github.com/aliyun/fc-runtime-go-sdk/blob/master/fccontext/context.go).

## Sample code

### Sample code for displaying the context information

Add the `context` parameter to the `handler` of your function. Function Compute passes the variable information described in the preceding [Context](#table-jd3-48n-lex) table to the `context` parameter. Then, import the `aliyun/fc-runtime-go-sdk/fccontext` package and call the `fccontext.FromContext` method to obtain `fccontext`.

```
package main

import (
    "context"
    "encoding/json"
    "log"

    "github.com/aliyun/fc-runtime-go-sdk/fc"
    "github.com/aliyun/fc-runtime-go-sdk/fccontext"
)

func main() {
    fc.Start(echoContext)
}

func echoContext(ctx context.Context) (string, error) {
    fctx, _ := fccontext.FromContext(ctx)
    log.Println(fctx.AccountId)
    log.Printf("%#v\n", fctx)
    res, _ := json.Marshal(fctx)
    return string(res), nil
}
```

### Sample code for obtain the remaining execution time of a function

The following sample code provides an example on how to use the `deadline` parameter to obtain the remaining execution time of a function:

```
package main

import (
    "context"
    "fmt"
    "log"
    "time"

    "github.com/aliyun/fc-runtime-go-sdk/fc"
)

func LongRunningHandler(ctx context.Context) (string, error) {
    deadline, _ := ctx.Deadline()
    fmt.Printf("now: %s\ndeadline: %s\n", time.Now().String(), deadline.String())
    deadline = deadline.Add(-100 * time.Millisecond)
    timeoutChannel := time.After(time.Until(deadline))

    for {
        select {
        case <-timeoutChannel:
            return "Finished before timing out.", nil
        default:
            log.Print("hello!")
            time.Sleep(50 * time.Millisecond)
        }
    }
}

func main() {
    fc.Start(LongRunningHandler)
}
```
