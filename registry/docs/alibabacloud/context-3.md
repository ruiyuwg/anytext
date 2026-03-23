This topic describes the context that is involved when you use a Node.js runtime in Function Compute to write code.

## What is context?

When Function Compute runs a function, the system passes a context object to the method that is used to execute the function. The object contains the information about the invocation, service, function, tracing analysis, and execution environment.

You can use the context object as an input parameter for event handlers and HTTP handlers. The format and content of the context input parameter for the event handlers and HTTP handlers are the same. The following table describes the parameters that are supported by the context object.

  

Field

Type

Description

requestId

String

The unique ID of the request that is used to invoke the function. You can record the ID for troubleshooting if an error occurs.

credentials

Credentials structure, which consists of the following fields:

-   accessKeyId
-   accessKeySecret
-   securityToken

The temporary AccessKey pair that Function Compute obtains by assuming your service-linked role. The temporary AccessKey pair is valid for 36 hours. You can use `credentials` in your code to access related services such as Object Storage Service (OSS). This way, you can access the services without the need to write your AccessKey pair in the function code. For more information, see [Grant permissions across Alibaba Cloud accounts by using a RAM role](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-permissions-by-using-a-ram-role#task-2078146).

function

FunctionMeta structure, which consist of the following fields:

-   name
-   handler
-   memory
-   timeout

The basic information about the invoked function, such as the name, handler, memory, and timeout period of the function.

service

ServiceMeta structure, which consist of the following fields:

-   name
-   logProject
-   logStore
-   qualifier
-   versionId

The information about the service to which the function belongs, such as the name, the related project and Logstore in Log Service, the version, and the alias of the service. The `qualifier` parameter indicates the version or alias of the service that is specified when you invoke a function. The `version_id` parameter indicates the version of the service that is actually invoked.

region

String

The ID of the region in which the function is invoked. For example, if the function is invoked in the China (Shanghai) region, the region ID is cn-shanghai. For more information, see [Endpoints](/help/en/functioncompute/fc-2-0/developer-reference/endpoints#multiTask2761).

accountId

String

The ID of the Alibaba Cloud account to which the function belongs.

tracing

Tracing structure, which consist of the following fields:

-   spanContext
-   jaegerEndpoint
-   spanBaggages
-   parseOpenTracingBaggages

The parameters related to Tracing Analysis. For more information, see [Overview](/help/en/functioncompute/fc-2-0/user-guide/overview-32#concept-1996280).

logger

ContextLog structure defined by Function Compute. The structure consists of the following fields:

-   debug
-   info
-   warn
-   error
-   log

Specifies the log object, which is used to print logs. The logs are printed in the `Date Request ID [Level] Log content` format. Example: `2022-04-01T10:04:19.024Z 19b394a3-4fff-480c-9b5c-cbdfd6952f4e [info] hello,fc`.
