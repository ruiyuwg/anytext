This topic describes the causes of errors returned with HTTP status code 203 and the solutions to these errors.

## CallbackFailed

### Get image info failed

-   Cause: Object Storage Service (OSS) failed to obtain the information about the image. The image may fail to be uploaded or may be deleted.
    
-   Solution:
    
    -   If the image failed to be uploaded, call the [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb) operation to upload the image again.
    -   Check whether the image is automatically deleted based on lifecycle rules or manually deleted by other authorized users.
    

### Too many callback requests

-   Cause: A large number of callback requests are being processed by OSS.
    
-   Solution: Send the callback request later.
    

### Cost too long time

-   Cause: OSS determines that the request times out because the callback server takes more than 5 seconds to process the request.
    
-   Solution: To ensure that the callback server can process a request and return the result to OSS within 5 seconds, we recommend that you change the processing logic of the callback server to asynchronous.
    

### Response body is not valid json format

-   Cause: The message body of the response returned by the callback server to OSS is not in the JSON format.
    
-   Solution: See [Upload callback](/help/en/oss/upload-callbacks-6#concept-tj5-cv3-wdb) to troubleshoot the issue.
    

### Error Status : 400.User server return too long content-length value

-   Cause: The response returned by the application server to OSS does not contain the Content-Length header. The size of the response body is larger than 1 MB.
    
-   Solution:
    
    Make sure that the response returned by the application server to OSS contains the Content-Length header and the size of the response body does not exceed 1 MB.
    
    For example, the following sample response contains the Content-Length header. The body of the response is `{"a":"b"}`, which does not exceed 1 MB in size.
    
    ```
    HTTP/1.0 200 OK
    Server: BaseHTTP/0.3 Python/2.7.6
    Date: Mon, 14 Sep 2015 12:37:27 GMT
    Content-Type: application/json
    Content-Length: 9
    {"a":"b"}
    ```
    

### Error Status : -1.OSS can not connect to your callbackUrl, please check it

-   Cause: OSS cannot access your application server.
    
-   Solution: Check whether your application server runs and communicates with OSS as expected.
    

### Error Status : 400.User server missing content-length

-   Cause: The response returned by the application server to OSS does not contain the Content-Length header.
    
-   Solution: Make sure that the response returned by the application server to OSS contains the Content-Length header.
    

### Error Status : 400.User server return invalid content-length value

-   Cause: The response returned by the application server to OSS does not contain the Content-Length header, or the value of Content-Length is not a positive integer.
    
-   Solution:
    
    Make sure that the response returned by the application server to OSS contains the Content-Length header and the value of Content-Length is a positive integer.
    
    For example, the following sample response contains the Content-Length header, and the value of Content-Length is `9`, which is a positive integer.
    
    ```
    HTTP/1.1 200 OK
    Date: Mon, 14 Sep 2015 12:37:27 GMT
    Content-Type: application/json
    Content-Length: 9
    Connection: keep-alive
    ETag: "D8E8FCA2DC0F896FD7CB4CB0031B****"
    Server: AliyunOSS
    x-oss-bucket-version: 1442231779
    x-oss-request-id: 55F6BF87207FB30F2640****
    {"a":"b"}
    ```
    

### Error status : 404

-   Cause: The requested resources do not exist on your application server.
    
-   Solution: Check whether the requested resources exist on your application server.
