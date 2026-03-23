This topic describes the 4xx and 5xx status codes that Alibaba Cloud Content Delivery Network (CDN) returns, along with their descriptions and solutions to help you troubleshoot errors.

## **4XX status codes**

4xx codes indicate client response errors.

### **400**

-   **Response message**: Bad Request
    
-   **Description**: The status code indicates that the client sents a request to the server that could not be understood or processed due to issues with the request itself.
    
-   **Solution**: Check if the input parameters in the request are valid and try again.
    

### **401**

-   **Response message**: Unauthorized
    
-   **Description**: This error indicates that the request was not sent with the proper authentication credentials. The server requires authentication to process the request.
    
-   **Solution**: Include valid authentication credentials or authorize the request on the origin server and try again.
    

### **403**

-   **Response message**: Forbidden
    
-   **Description**: This error indicates that the client's request was understood by the server but cannot be fulfilled due to insufficient permissions to access the requested resource.
    
-   **Solution**: Grant the permissions for the client request and try again.
    

### **404**

-   **Response message**: Not Found
    
-   **Description**: This error indicates that the origin server was unable to locate the requested resource.
    
-   **Solution**: Modify the request path and try again, or check whether the server URL path is accessible from the internet.
    

### **405**

-   **Response message**: Method Not Allowed
    
-   **Description**: The status code indicates that the origin server recognizes the requested resource but does not support the HTTP method used in the request.
    
-   **Solution**: Adjust the request method to one supported by the origin server and try again.
    

### **406**

-   **Response message**: Not Acceptable
    
-   **Description**: The status code indicates that the requested resource is not available in a format that adheres to the content negotiation headers specified by the client (for example, `Accept-Charset` or `Accept-Language`).
    
-   **Solution**: Modify the request header fields to types supported by the origin server and try again.
    

### **407**

-   **Response message**: Authentication Required
    
-   **Description**: The status code indicates that the client did not provide the necessary authentication credentials to access the requested resource through a proxy server.
    
-   **Solution**: Check whether the proxy origin server authentication has expired, include the correct credentials issued by the proxy origin server, and try again.
    

### **408**

-   **Response message**: Request Timeout
    
-   **Description**: The status code indicates that the origin server did not receive the complete request within a reasonable time frame and does not wish to continue waiting for the connection.
    
-   **Solution**: Extend the origin server processing time or reduce the client request package size and try again.
    

### **409**

-   **Response message**: Conflict
    
-   **Description**: The status code indicates that the request could not be completed due to a conflict with the current state of the target resource. This error can occur in responses of `PUT` requests when clients try to edit one resource.
    
-   **Solution**: Refresh and resubmit the information, or add a conflict handling mechanism in the origin server and try again.
    

### **410**

-   **Response message**: Gone
    
-   **Description**: When a resource is intentionally and permanently removed, servers use the 410 status code to inform clients that the resource is no longer available.
    
-   **Solution**: The client needs to remove references to the deleted resource and try again.
    

### **411**

-   **Response message**: Length Required
    
-   **Description**: This status code indicates that the client did not specify the `Content-Length` of the request body in the headers, and this information is required to obtain the resource.
    
-   **Solution**: Include the `Content-Length` field in the client's request header and try again. If the length cannot be estimated, you can include the `Transfer-Encoding: chunked` field to define chunked transfer encoding.
    

### **412**

-   **Response message**: Precondition Failed
    
-   **Description**: The status code indicates that the server denies the request because the resource does not meet the conditions specified by the client.
    
-   **Solution**: Include the valid preconditions in the request and try again.
    

### **413**

-   **Response message**: Payload Too Large
    
-   **Description**: The status code indicates that the server refuses to process the request because the payload sent by the client exceeds the server's acceptable size limit.
    
-   **Solution**: Reduce the file upload size or submitted data size and try again.
    

### **414**

-   **Response message**: URI Too Long
    
-   **Description**: The status code indicates that the server refuses to process the request because the URI provided by the client is excessively long.
    
-   **Solution**: Shorten the client request URI length or split long parameters into multiple processes and aggregate the results on the client side.
    

### **415**

-   **Response message**: Unsupported Media Type
    
-   **Description**: The status code indicates that the server refuses to process the request because the format of the payload is not supported.
    
-   **Solution**: Modify the `Content-Type` field in the request header to a format supported by the server and try again.
    

### **416**

-   **Response message**: Range Not Satisfiable
    
-   **Description**: The status code indicates that the server cannot fulfill the requested range specified in the Range header of the client's request.
    
-   **Solution**: Check whether the range in the `Range` request header field is valid, modify the `Range` and try again.
    

### **417**

-   **Response message**: Expectation Failed
    
-   **Description**: The status code indicates that the server could not meet the requirements specified in the `Expect` header of the client's request.
    
-   **Solution**: This is common during testing. If it occurs in the production environment, disable the `Expect` field in the request header.
    

### **429**

-   **Response message**: Too Many Requests
    
-   **Description**: The status code indicates that the client has sent too many requests in a specified amount of time, as determined by the server's rate-limiting rules.
    
-   **Solution**: The number of requests per unit time has exceeded the limit of the origin server. Try again after the retry interval set by the origin server.
    

### **499**

-   **Response message**: Client Close Request
    
-   **Description**: The status code typically occurs when a client terminates the connection before the server is able to respond. The client won't receive the error page, so you don't need to define the page.
    

## **5xx status codes**

### **500**

-   **Reason**: Internal Server Error
    
-   **Meaning**: An internal server error occurred.
    
-   **Description**: This indicates a problem with your origin server that prevents it from processing the request.
    
-   **Solution**: Check the origin server logs to find and resolve the error. You can also roll back to the last working version to quickly recover your service.
    

### **502**

-   **Reason**: Bad Gateway
    
-   **Meaning**: A gateway error occurred.
    
-   **Description**: This indicates that a CDN point of presence (POP) cannot connect to your origin server.
    
-   **Solution**: Make sure that your origin server is available and check if its firewall rules allow traffic from CDN POPs.
    

### **503**

-   **Reason**: Service Temporarily Unavailable
    
-   **Meaning**: The service is temporarily unavailable.
    
-   **Description**: This indicates that your origin server is overloaded.
    
-   **Solution**: Check the load on your origin server and find the application with a high load.
    

### **504**

-   **Reason**: Gateway Timeout
    
-   **Meaning**: The gateway timed out.
    
-   **Description**: This indicates that a CDN POP, acting as a gateway, did not receive a response from your origin server within configured time.
    
-   **Solution**: Check if your origin server is available or increase the timeout period as needed.
    

### **508**

-   **Reason**: Loop Detected
    
-   **Meaning**: A loop was detected.
    
-   **Description**: This indicates that a request forwarded by a CDN POP was redirected back to the CDN network, creating a loop that exceeded the maximum number of allowed redirects.
    
-   **Solution**: Check for loops on the origin server and make sure that any loop has a termination condition and can end normally. Then, retry the request.
