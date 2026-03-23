To meet business requirements in different scenarios, Function Compute provides two types of functions: event functions and HTTP functions. This topic describes the scenarios of and differences between the two types of functions in Function Compute.

## Comparison

Function Compute supports two types of functions: event functions and HTTP functions.

-   Event functions are suitable for scenarios in which events are used to invoke functions in event-driven models.
    
-   HTTP functions are suitable for scenarios such as quick building of web applications.
    

In the programming models of Function Compute, the model of a handler consists of three parts: the function name, the function input parameters, and responses. You can also pass another function defined in the code as an input parameter to the handler.

The following table lists the differences between event functions and HTTP functions in terms of trigger methods and input parameters.

**Function type**

**Trigger method**

**Input parameter**

Event functions

You can trigger the execution of an event function to implement a specific feature. To trigger an event function, you can configure a timer, call API operations or use SDKs, or use triggers of other Alibaba Cloud services. You can create various triggers other than HTTP triggers, such as Object Storage Service (OSS) triggers, Log Service triggers, Alibaba Cloud CDN triggers, Tablestore triggers, and EventBridge triggers. For more information about the supported trigger types, see [Trigger overview](/help/en/functioncompute/fc-2-0/user-guide/trigger-overview#concept-2259970). All supported types of triggers can be used to trigger event functions.

The following code defines a simple Node.js handler:

```
exports.handler = function(event, context, callback) {
  callback(null, 'hello world');
}
```

Expand to view the description about input parameters.

**Input parameter**

**Description**

event

The event data passed in to invoke the handler. You can convert the data to the corresponding data type in the handler based on your business requirements.

context

The structures of input parameters defined by Function Compute are designed by Function Compute and contain information about the runtime of the function, such as request IDs and temporary keys.

callback

The callback parameter that is defined by Function Compute as the input parameter to return invocation results.

For more information about Node.js event functions, see [Event handlers](/help/en/functioncompute/fc-2-0/user-guide/event-handler#concept-2259872). For more information about the input parameters of functions in other programming languages, see [Overview](/help/en/functioncompute/fc-2-0/user-guide/overview-35#concept-2259869).

HTTP functions

HTTP functions can be triggered only by HTTP or HTTPS requests. You can specify the request methods that can trigger an HTTP function, such as GET, POST, PUT, DELETE, HEAD, and PATCH, based on your business requirements,

Function Compute allows you to create an HTTP trigger that triggers an HTTP function by sending HTTP or HTTPS requests. Only one HTTP trigger can be created for one version or one alias of a service. For more information, see [Overview](/help/en/functioncompute/fc-2-0/user-guide/overview-36#multiTask12687).

The following code defines a simple Node.js handler:

```
exports.handler = function(request, response, context) {
  response.send(null, 'hello world');
}
```

Expand to view the description about input parameters.

**Input parameter**

**Description**

request

The request body, including the HTTP request headers that consist of key-value pairs, the request method, and the IP address of the client.

response

The response, including the HTTP response headers that consist of key-value pairs and the HTTP response body.

context

The structures of input parameters defined by Function Compute are designed by Function Compute and contain information about the runtime of the function, such as request IDs and temporary keys.

For more information about Node.js HTTP functions, see [HTTP handlers](/help/en/functioncompute/fc-2-0/user-guide/http-handler#concept-2259873). For more information about the input parameters of functions in other programming languages, see [Overview](/help/en/functioncompute/fc-2-0/user-guide/overview-35#concept-2259869).
