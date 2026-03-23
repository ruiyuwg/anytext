This topic describes the context that is involved when you use a PHP runtime in Function Compute to write code.

## What is context?

When Function Compute runs a function, the system passes a context object to the method that is used to execute the function. The object contains the information about the invocation, service, function, tracing analysis, and execution environment.

You can use the context object as an input parameter for event handlers and HTTP handlers. The format and content of the context input parameter for the event handlers and HTTP handlers are the same. In the PHP runtime, the value of the $context parameter is of the Array type. The following sample code defines the $context parameter:

```
[
  'requestId' => 'b1c5100f-819d-c421-3a5e-7782a27d8a33',
  'credentials' => [
    'accessKeyId' => 'STS.access_key_id',
    'accessKeySecret' => 'access_key_secret',
    'securityToken' => 'security_token',
  ],
  'function' => [
    'name' => 'my-func',
    'handler' => 'index.handler',
    'memory' => 128,
    'timeout' => 10,
    'initializer' => 'index.initializer',
    'initializationTimeout' => 10,
  ],
  'service' =>[
     'name' => 'my-service',
     'logProject' => 'my-log-project',
     'logStore' => 'my-log-store',
     'qualifier' => 'qualifier',
     'versionId' => '1'
  ],
  'region' => 'cn-shanghai',
  'accountId' => '123456',
  'tracing': {
    'openTracingSpanContext': 'xxxxxxxxxxxx',
    'jaegerEndpoint': 'xxxxxxxx',
    'openTracingSpanBaggages': []
  }
]
```

The following table describes the information contained in the $context parameter.

**Parameter**

**Data type**

**Description**

requestId

String

The unique ID of the request that is used to invoke the function. You can record the ID for troubleshooting if an error occurs.

credentials

Array type, which contains the following fields:

-   accessKeyId
    
-   accessKeySecret
    
-   securityToken
    

The temporary AccessKey pair that Function Compute obtains by assuming your service-linked role. The temporary AccessKey pair is valid for 36 hours. You can use `credentials` in your code to access related services such as Object Storage Service (OSS). This way, you can access the services without the need to write your AccessKey pair in the function code. For more information, see [Grant permissions across Alibaba Cloud accounts by using RAM roles](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-permissions-by-using-a-ram-role#task-2078146).

function

Array type, which contains the following fields:

-   name
    
-   handler
    
-   memory
    
-   timeout
    
-   initializer
    
-   initializationTimeout
    

The basic information about the invoked function, such as the name, handler, memory, and timeout period of the function.

service

Array type, which contains the following fields:

-   name
    
-   logProject
    
-   logStore
    
-   qualifier
    
-   versionId
    

The information about the service to which the function belongs, such as the name, the related project and Logstore in Log Service, the version, and the alias of the service. The `qualifier` parameter indicates the version or alias of the service that is specified when you invoke a function. The `versionId` parameter indicates the version of the service that is actually invoked.

region

String

The ID of the region in which the function is invoked. For example, if the function is invoked in the China (Shanghai) region, the region ID is cn-shanghai. For more information, see [Endpoints](/help/en/functioncompute/fc-2-0/developer-reference/endpoints#multiTask2761).

accountId

String

The ID of the Alibaba Cloud account to which the function belongs.

tracing

Array type, which contains the following fields:

-   openTracingSpanContext
    
-   jaegerEndpoint
    
-   openTracingSpanBaggages
    

The parameters related to Tracing Analysis. For more information, see [Overview](/help/en/functioncompute/fc-2-0/user-guide/overview-32#concept-1996280).
