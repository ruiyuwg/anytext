This topic describes the background information, scenarios, benefits, and limits of instance concurrency. It also describes how to configure instance concurrency in the Function Compute console.

## Background information

Function Compute calculates fees based on the execution duration of instances. For example, if the database access latency is 10 seconds and three requests are processed by three separate instances, the total execution duration is 30 seconds. However, if the three requests were processed concurrently by one instance, the total execution duration would be 10 seconds. To help reduce your costs, Function Compute allows you to use a single instance to process multiple requests concurrently. You can specify the number of requests to be concurrently processed by an instance using the Instance Concurrency parameter. The following figure compares two scenarios: one in which an instance processes a single request at a time, and another in which it processes multiple requests concurrently.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6398525671/CAEQTxiBgMDL3s781xkiIDYwM2JhNzhjZDg0OTRmODZiMjMyMGRjZTBjMDI5YTNk3963382_20230830144006.372.svg)

In the preceding figure, assume that three requests need to be processed at the same time.

-   If Instance Concurrency is set to 1, each instance processes one request at a time. Function Compute needs to create three instances to process the three requests.
    
-   If Instance Concurrency is set to 10, each instance can process 10 requests at a time. Function Compute needs to create only one instance to process all three requests.
    

**Note**

By default, Instance Concurrency is set to 1. That is, a single instance can process only one request at a time. If you set Instance Concurrency to a value greater than 1, Function Compute creates a new instance to process requests only when the existing instance is at full capacity.

## Scenarios

If it takes a long time for a function to obtain responses from downstream services, we recommend that you use a single instance to concurrently process multiple requests. In most cases, resources are not consumed when requests are waiting for responses. If you use a single instance to concurrently process multiple requests, costs can be reduced.

## Benefits

-   Reduces the execution duration and costs.
    
    For example, for functions that require I/O operations, you can use a single instance to concurrently process multiple requests. This reduces the number of instances that are used to process requests to reduce the total execution duration of requests.
    
-   Shares the status among requests.
    
    Multiple requests can share the connection pool of a database in one instance to minimize the connections between requests and the database.
    
-   Reduces the frequency of cold starts.
    
    One instance can process multiple requests, which reduces the number of new instances and lowers the frequency of cold starts.
    
-   Reduces the number of IP addresses used in a virtual private cloud (VPC).
    
    For a fixed number of requests to be processed, the number of required instances is reduced if each instance can process multiple requests. This reduces the number of IP addresses used in the VPC.
    
    **Important**
    
    Make sure that the vSwitch associated with your VPC has at least two available IP addresses. Otherwise, services may be unavailable, which causes request errors.
    

## Impacts

This section compares two scenarios: one in which an instance processes a single request at a time (Instance Concurrency = 1), and another in which it processes multiple requests concurrently (Instance Concurrency > 1).

### **Billing**

-   Instance Concurrency = 1
    
    An instance can process only one request at a time. The billing duration begins when the first request starts to be processed and ends when the last request is processed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6398525671/CAEQTxiBgIDilsOG2BkiIDMzNGZkZjNlOWMxMjQyZmRiMTE0NDlhZjY4YmUxYjY23963382_20230830144006.372.svg)
    
-   Instance Concurrency > 1
    
    An instance can process multiple requests at a time. The billing duration begins when the first request starts to be processed and ends when the last request is processed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6398525671/CAEQTxiBgICJldD81xkiIDQwZmMzYjI1M2M1MjQwMzQ4N2Y5ODdjMmIwMmRmYzVi3963382_20230830144006.372.svg)

For more information, see [Billing overview](/help/en/functioncompute/fc-2-0/product-overview/billing-overview#concept-2557114).

### **Concurrency throttling**

By default, Function Compute supports up to 100 on-demand instances in a region. The maximum number of requests that can be concurrently processed in a region is calculated using the following formula: 100 × Instance Concurrency. For example, if you set Instance Concurrency to 10, a maximum of 1,000 requests can be concurrently processed in a region. If the number of concurrent requests exceeds the maximum number of requests that can be concurrently processed by Function Compute, the ResourceExhausted error is returned.

**Note**

To increase the upper limit of on-demand instances in a region, [contact us](/help/en/functioncompute/fc-2-0/support/contact-us#concept-2260094).

### **Logging**

-   If Instance Concurrency is set to 1, Function Compute returns function logs in the `X-Fc-Log-Result` field of the response header if you specify `X-Fc-Log-Type: Tail` in the HTTP header when you invoke a function. If Instance Concurrency is set to a value greater than 1, the response header does not contain function logs because the logs of a specific request cannot be obtained among concurrent requests.
    
-   For a Node.js runtime, the function `console.info()` was used to return logs, which include request IDs. If Instance Concurrency is set to a value greater than 1, `console.info()` cannot print request IDs as expected. All the request IDs are printed as `req 2`. The following sample log shows an example:
    
    ```
    2019-11-06T14:23:37.587Z req1 [info] logger begin
    2019-11-06T14:23:37.587Z req1 [info] ctxlogger begin
    2019-11-06T14:23:37.587Z req2 [info] logger begin
    2019-11-06T14:23:37.587Z req2 [info] ctxlogger begin
    2019-11-06T14:23:40.587Z req1 [info] ctxlogger end
    2019-11-06T14:23:40.587Z req2 [info] ctxlogger end
    2019-11-06T14:23:37.587Z req2 [info] logger end
    2019-11-06T14:23:37.587Z req2 [info] logger end                    
    ```
    
    In this case, we recommend that you use `context.logger.info()` to print logs. This method allows request IDs to be printed as expected. The following sample code shows an example:
    
    ```
    exports.handler = (event, context, callback) => {
        console.info('logger begin');
        context.logger.info('ctxlogger begin');
    
        setTimeout(function() {
            context.logger.info('ctxlogger end');
            console.info('logger end');
            callback(null, 'hello world');
        }, 3000);
    };                   
    ```
    

### **Error handling**

When an instance concurrently processes multiple requests, unexpected process quits that are caused by failed requests affect the rest of the concurrent requests. Therefore, you must compile logic to capture request-level exceptions in the function code and prevent such impacts on other requests. The following sample code shows an example in a Node.js runtime:

```
exports.handler = (event, context, callback) => {
    try {
        JSON.parse(event);
    } catch (ex) {
        callback(ex);
    }

    callback(null, 'hello world');
};                    
```

### **Shared variables**

When an instance processes multiple requests concurrently, errors may occur if those requests attempt to modify the same variable simultaneously. Therefore, you must use mutual exclusion in your code to prevent variable modifications that are not safe for threads. The following sample code shows an example in a Java runtime:

```
public class App implements StreamRequestHandler
{
    private static int counter = 0;

    @Override
    public void handleRequest(InputStream inputStream, OutputStream outputStream, Context context) throws IOException {
        synchronized (this) {
            counter = counter + 1;
        }
        outputStream.write(new String("hello world").getBytes());
    }
}                    
```

### **Monitoring metrics**

After you set Instance Concurrency to a value greater than 1, you can see that the number of used instances is reduced in the instance monitoring chart.![实例数据监控图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1254470461/p98979.png)

## Limits

**Item**

**Description**

Supported runtime

-   Node.js
    
-   Python 3 and Python 3.9
    
-   Java
    
-   Go 1
    
-   .NET Core 3.1
    
-   Custom runtime
    
-   Custom Container runtime
    

Number of requests that can be concurrently processed by a single instance

1–200

Function execution logs provided in the X-Fc-Log-Result field in the response header

Not supported if the Instance Concurrency parameter is set to a value greater than 1

## Instance concurrency for a function

When you create or update a function, you can configure the Instance Concurrency parameter. For more information, see [Manage functions](/help/en/functioncompute/fc-2-0/user-guide/manage-functions#multiTask3514).

![dg-instance-concurrency](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6591396961/p466713.png)

Provisioned instances can also process multiple requests concurrently. For more information, see [Configure provisioned instances and auto scaling rules](/help/en/functioncompute/fc-2-0/user-guide/configure-provisioned-instances-and-auto-scaling-rules#task-2538034).

## More information

For more information about how to use the SDK for Node.js to configure instance concurrency, see [Specify the instance concurrency](/help/en/functioncompute/fc-2-0/developer-reference/specify-the-instance-concurrency#task-2554190).
