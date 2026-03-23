Instant Logs is a lightweight and easy-to-use log service that lets you view Functions and Pages logs in real time on the console. You can use the instant log data to understand how your functions are running and adjust your Functions and Pages as needed.

## **Limits**

-   Each function or page can have only one active monitoring window at a time. A single monitoring session can last for up to 60 minutes.
    
-   Instant Logs can store a maximum of 40 records. The records are sorted in reverse chronological order, and the newest records overwrite the oldest ones.
    

## Start monitoring

1.  Log on to the [ESA console](https://esa.console.alibabacloud.com/siteManage/list). In the navigation pane on the left, choose **Edge Computing** > **Functions and Pages**.
    
2.  On the **Edge Routine** page, click the name of the target function, or click **View Details** in the **Actions** column of the function.
    
3.  Choose **Logs** > ****Instant Logs**** > ****Start Monitoring**** to start collecting logs.
    
    -   You can click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8380692471/p930763.png) to view the detailed log fields for a log record.
        
    -   You can click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8380692471/p930764.png) in the upper-right corner to download the data in JSON format.
        
    -   If you switch to another feature page during monitoring, the session is aborted and the history is cleared. You can click **Start Monitoring** again to restart instant logging.
        

## **Stop monitoring**

1.  Log on to the [ESA console](https://esa.console.alibabacloud.com/siteManage/list). In the navigation pane on the left, choose **Edge Computing** > **Functions and Pages**.
    
2.  On the **Edge Routine** page, click the name of the target function, or click **View Details** in the **Actions** column of the function.
    
3.  Choose **Logs** > ****Instant Logs****. You can click the **Stop Monitoring** button, ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8380692471/p930763.png), or ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8380692471/p930764.png) to stop the monitoring session and log collection.
    
    **Note**
    
    The monitoring history is saved on the frontend interface. If you click **Start Monitoring** again, new records are appended to the existing history.
    

## Instant log field descriptions

**Field name**

**Data type**

**Description**

ClientRequestID

string

A unique identifier for the main client request.

LogTimestamp

Timestamp ISO8601

The timestamp when the log was generated. Example: 2024-01-01T00:00:00+08:00

SubRequestID

string

A unique identifier for the sub-request.

SubRequestStatus

int

The status information of the sub-request.

SubRequest2xxCount

int

The number of sub-requests with a 2xx status code.

SubRequest3xxCount

int

The number of sub-requests with a 3xx status code.

SubRequest4xxCount

int

The number of sub-requests with a 4xx status code.

SubRequest5xxCount

int

The number of sub-requests with a 5xx status code.

SubRequestOtherCount

int

The number of sub-requests with other status codes.

CodeVersion

string

The code version number.

ConsoleLog

string

Custom logs printed by calling console.alert() in the JavaScript (JS) code.

CPUTime

int

The CPU time consumed by the entire request, in microseconds.

DurationTime

int

The actual execution time of the request in EdgeRoutine (ER), including sub-request wait time and I/O time. Unit: milliseconds.

ErrorCode

int

The code execution error code. A value of 0 indicates no error.

ErrorMessage

string

The error description corresponding to the ErrorCode.

EventType

string

The type of event that triggered the function. Currently, only HTTP is supported.

ResponseSize

int

The total size of the response, in bytes.

ResponseStatus

int

The status code of the response.

RoutineName

string

The function name.

RoutineSpec

string

The specifications of the EdgeRoutine.

ClientASN

string

The [Autonomous System Number (ASN)](https://www.iana.org/assignments/as-numbers/as-numbers.xhtml) information resolved from the client IP address.

ClientIP

string

The IP address of the client.

ClientISP

string

The Internet Service Provider (ISP) information resolved from the client IP address.

ClientProxyIP

string

The proxy IP address of the client.

ClientRegionCode

string

The ISO-3166-2 code resolved from the client IP address.

ClientSSLCipher

string

The Secure Sockets Layer (SSL) encryption suite of the client.

ClientSSLProtocol

string

The SSL protocol version of the client.

ClientSrcPort

int

The port used by the client to establish a connection with the node.

ClientXRequestedWith

string

The X-Requested-With HTTP header of the client.

ClientZoneCode

string

The ISO-3166 Alpha-2 code resolved from the client IP address.

ClientRequestBytes

int

The size of the client request, in bytes.

ClientRequestHeaderRange

string

The value of the Range field in the client request header. Example: bytes=0-100

ClientRequestHost

string

The Host information of the client request.

ClientRequestMethod

string

The HTTP Method information of the client request.

ClientRequestPath

string

The path information of the client request.

ClientRequestProtocol

string

The protocol information of the client request.

ClientRequestReferer

string

The Referer information of the client request.

ClientRequestScheme

string

The Scheme information of the client request.

ClientRequestURI

string

The URI information of the client request.

ClientRequestUserAgent

string

The User-Agent information of the client request.

EdgeResponseStatusCode

int

The status code that the ESA node returns to the client.
