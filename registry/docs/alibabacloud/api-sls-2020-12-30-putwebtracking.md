Sends multiple logs to Simple Log Service in one request.

## Operation description

### [](#usage-notes)[](#)Usage notes

-   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](/help/en/sls/manage-a-project/) and [Manage a Logstore](/help/en/sls/manage-a-logstore).
-   You can call this operation to collect logs from web pages or clients.
-   If you use web tracking to collect logs and you do not call this operation, you can send only one log to Simple Log Service in a request. For more information, see [Use web tracking to collect logs](/help/en/sls/use-the-web-tracking-feature-to-collect-logs).
-   If you want to collect a large amount of log data, you can call this operation to send multiple logs to Simple Log Service in one request.
-   Before you can call this operation to send logs to a Logstore, you must enable web tracking for the Logstore. For more information, see [Use web tracking to collect logs](/help/en/sls/use-the-web-tracking-feature-to-collect-logs).
-   You cannot call this operation to send the logs of multiple topics to Simple Log Service at a time.
-   If you call this operation, anonymous users from the Internet are granted the write permissions on the Logstore. This may generate dirty data because AccessKey pair-based authentication is not performed.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Sls/2020-12-30/PutWebtracking)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Sls/2020-12-30/PutWebtracking)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request syntax

```
POST /logstores/{logstoreName}/track HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

project

string

Yes

The name of the project.

ali-test-project

logstoreName

string

Yes

The name of the Logstore.

ali-test-logstore

body

object

Yes

The request body.

\_\_topic\_\_

string

No

The topic of the logs.

topic

\_\_source\_\_

string

Yes

The source of the logs.

source

\_\_logs\_\_

array<object>

Yes

The logs. Each element is a JSON object that indicates a log.

**Note** **Note**: The time in a log that is collected by using the web tracking feature is the time at which Simple Log Service receives the log. You do not need to configure the \_\_time\_\_ field for each log. If this field exists, it is overwritten by the time at which Simple Log Service receives the log.

object

No

The logs.

string

No

The log content.

{ "key1": "value1", "key2": "value2" }

\_\_tags\_\_

object

No

The tags of the logs.

string

No

The tag of the log.

{ "tag1": "value1", "tag2": "value2" }

Only the following request headers are supported. The first two request headers are required when you call the PutWebTracking operation. For more information about the formats and descriptions of the request headers, see Common request headers.

-   x-log-apiversion: 0.6.0
-   x-log-bodyrawsize: 1234
-   x-log-compresstype: lz4

The x-log-compresstype header is required only when you need to send compressed data. To send compressed data, you must use the LZ4 or DEFLATE algorithm. You can specify `x-log-compresstype: lz4` or `x-log-compresstype: deflate`. For more information about how to compress data, see [Data compression](/help/en/sls/developer-reference/data-compression).

## Response parameters

Parameter

Type

Description

Example

headers

object

Server

string

The name of the server.

nginx

Content-Type

string

The format of the response body.

application/json

Content-Length

string

The length of the response body.

0

Connection

string

Indicates whether the connection is persistent. Valid values:

-   close: The connection is non-persistent. A new TCP connection is established for each HTTP request.
-   keep-alive: The connection is persistent. After a TCP connection is established, the connection remains open, and no more time or bandwidth is consumed to establish new connections.

close

Date

string

The time when the response was returned.

Sun, 27 May 2018 08:25:04 GMT

x-log-requestid

string

The request ID.

5B0A6B60BB6EE39764D458B5

## Examples

Sample success responses

`JSON`format

```
{}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode).
