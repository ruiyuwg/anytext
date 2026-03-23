Functions and Pages provides a set of performance and error monitoring metrics to help you understand your service workloads and exceptions.

## View metrics

1.  Log on to [the ESA console](https://esa.console.alibabacloud.com/siteManage/list). In the navigation pane on the left, choose **Edge Computing** > **Functions and Pages**. Click the target Functions and Pages service.
    
2.  On the **Metrics** page, you can click **Requests**, **Subrequests**, **CPU Time**, **Wall Time**, or **Errors**, to view its details.
    

## Details

### **Requests**

The **Requests** metric shows the total number of requests processed by a Functions and Pages service during runtime. This data includes both successful and failed requests.

-   Success: The function executed successfully without throwing an exception.
    
-   Failure: The execution of the function failed. Common reasons for failure include script errors, exceeding the CPU limit, or internal errors.
    

You can view the data by Queries Per Second (QPS) or request count. QPS is the number of successful or failed requests per second. Request count is the total number of successful or failed requests within a specified time range, such as one minute.

### **Subrequests**

A subrequest is a request that is triggered by a call to the internal fetch API of Functions and Pages. This metric shows the status codes of subrequest responses, which are categorized as 2xx, 3xx, 4xx, and 5xx.

-   2xx: Indicates a successful response.
    
-   3xx: Indicates a redirection.
    
-   4xx: Indicates a client error.
    
-   5xx: Indicates a server error.
    

### **CPU Time**

CPU time is the actual time that the CPU spends executing a Functions and Pages service. Time spent on operations that do not consume the CPU, such as waiting for `I/O`, is not included. Quantile data is provided for the CPU execution time to help you evaluate function performance more accurately.

-   **P50**: The 50th percentile of CPU time.
    
-   **P90**: The 90th percentile of CPU time.
    
-   **P99**: The 99th percentile of CPU time.
    

### **Wall Time**

This metric indicates the total time it takes for a request to execute, from the moment the function is triggered until it finishes. This duration includes time spent waiting for `I/O` and the execution time of `waitUntil()`. For example, if a response has been sent to the client but the `waitUntil()` callback function is still running, the **Request Duration** continues to increase. Quantile data, including **P99**, **P90**, and **P50**, is provided for this metric.

### **Errors**

Functions and Pages provides statistics on the number of the following types of errors. If you need more detailed error information, [create a real-time log delivery task](/help/en/edge-security-acceleration/esa/user-guide/create-a-real-time-log-shipping-task) and view the `error_message` field in the logs.

**Error type**

**Description**

**Log error code**

Script exception

A JavaScript execution error occurred. This includes script compilation errors.

1

CPU limit exceeded

The actual CPU time consumed exceeds the function's specification.

2

Memory limit exceeded

The actual memory consumed exceeds the function's specification (128 MB).

3

Request execution time exceeded

The request execution time exceeds the upper limit (120 s).

4

Client disconnected

The client actively disconnected the connection.

5

Internal error

An internal error occurred. To find the specific cause, submit a ticket for backend investigation.

6
