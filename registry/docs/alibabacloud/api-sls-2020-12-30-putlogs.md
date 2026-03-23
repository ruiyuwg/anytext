Writes log data to a specified logstore.

## Operation description

**Note**

-   The OpenAPI SDK does not support this operation. Use the [Simple Log Service (SLS) SDK](/help/en/sls/developer-reference/overview-of-log-service-sdk) instead.
    

-   The service checks the format of log data for each PutLogs request. If any log entry is invalid, the entire request fails and no logs are written.
    
-   This operation supports only log data in [protobuf format](/help/en/sls/developer-reference/data-encoding). The log data is structured as a LogGroup.
    
-   Logs can be written in two modes:
    
    -   LoadBalance mode: Data is automatically written to all writable shards in a logstore. This method provides high availability and is suitable for data consumption scenarios that do not require a specific order. Request syntax:
        
        ```
        POST /logstores/logstoreName/shards/lb HTTP/1.1
        Authorization: LOG yourAccessKeyId:yourSignature
        Content-Type: application/x-protobuf
        Content-Length: Content Length
        Content-MD5: Content MD5
        Date: GMT Date
        Host: ProjectName.Endpoint
        x-log-apiversion: 0.6.0
        x-log-bodyrawsize: BodyRawSize
        x-log-compresstype: lz4
        x-log-signaturemethod: hmac-sha1
        <Compressed log data in protobuf format>
        ```
        
    -   KeyHash mode: Add a key parameter to the URL to determine which shard receives the data. This parameter is optional. If you do not set this parameter, the system automatically switches to the load balancing mode. For example, pin a producer, such as an instance, to a specific shard based on its name hash. This ensures that data written to and consumed from the shard is strictly ordered. During merge and split operations, a key is associated with only one shard at any given time. Request syntax:
        
        ```
        POST /logstores/logstoreName/shards/route?key=14d2f850ad6ea48e46e4547edbbb27e0
        Authorization: LOG yourAccessKeyId:yourSignature
        Content-Type: application/x-protobuf
        Content-Length: Content Length
        Content-MD5: Content MD5
        Date: GMT Date
        Host: ProjectName.Endpoint
        x-log-apiversion: 0.6.0
        x-log-bodyrawsize: BodyRawSize
        x-log-compresstype: lz4
        x-log-signaturemethod: hmac-sha1
        <Compressed log data in protobuf format>
        ```
        
-   The maximum size of raw logs for each PutLogs request is 10 MB. The Value of each log in a log group must not exceed 1 MB. Older SDK versions may have different limits. Upgrade to the latest SDK version.
    
-   SLS provides examples of how to use PutLogs with the Java and Python SDKs.
    

## Protobuf data

This section describes the fields for compressed log data in protobuf format. For more information, see [Data model](/help/en/sls/developer-reference/data-model) and [Data encoding](/help/en/sls/developer-reference/data-encoding).

-   Log
    

**Parameter**

**Data type**

**Required**

**Description**

Time

Integer

Yes

The time of the log. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 1970-1-1 00:00:00 UTC.

Contents

List

Yes

A list of log fields. The list must contain at least one element. For the element type, see the Content table below.

-   Content
    

**Parameter**

**Data type**

**Required**

**Description**

Key

String

Yes

The custom key name.

Value

String

Yes

The value that corresponds to the custom key.

-   LogTag
    

**Parameter**

**Data type**

**Required**

**Description**

Key

String

Yes

The custom key name.

Value

String

Yes

The value that corresponds to the custom key.

-   LogGroup
    

**Parameter**

**Data type**

**Required**

**Description**

Logs

List

Yes

A list of logs. For each element, see the Log table.

Topic

String

No

The topic of the logs. Use this custom field to distinguish log data with different features.

Source

String

No

The source of the logs, such as the IP address of the machine that generated the logs.

LogTags

List

Yes

A list of log tags. For each element, see the LogTag table.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Sls/2020-12-30/PutLogs)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Sls/2020-12-30/PutLogs)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request syntax

```
POST /logstores/{logstore}/shards/lb HTTP/1.1
```

## **Path Parameters**

**Parameter**

**Type**

**Required**

**Description**

**Example**

logstore

string

Yes

The name of the logstore.

ali-test-logstore

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

project

string

Yes

The name of the project.

ali-test-project

x-log-compresstype

string

Yes

The compression type of the logs. Valid values: lz4 and gzip.

lz4

body

[LogGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-loggroup)

No

The compressed log data in protobuf format.

**Request headers**

For information about the common request headers of SLS APIs, see [Common request headers](/help/en/sls/developer-reference/common-request-headers).

**Request example**

```
POST /logstores/sls-test-logstore/shards/lb
{
    "Content-Length": 118,
    "Content-Type":"application/x-protobuf",
    "x-log-bodyrawsize":1356,
    "Host": "ali-test-project.cn-hangzhou-devcommon-intranet.sls.aliyuncs.com",
    "Content-MD5":"6554BD042149C844761C2C094A8FECCE",
    "Date":"Thu, 12 Nov 2015 06:54:26 GMT",
    "x-log-apiversion": "0.6.0",
    "x-log-compresstype":"lz4"
    "x-log-signaturemethod": "hmac-sha1",
    "Authorization":"LOG yourAccessKeyId:yourSignature"
}
<Binary data of logs in protobuf format compressed using lz4>
```

## Response elements

**Element**

**Type**

**Description**

**Example**

None defined.

**Response headers**

The PutLogs operation does not have specific response headers. For information about the common response headers of SLS APIs, see [Common response headers](/help/en/sls/developer-reference/common-response-headers).

**Response elements**

An HTTP status code of 200 indicates that the request was successful. No response elements are returned.

## Examples

Success response

`JSON` format

```
{}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Sls/2020-12-30/PutLogs#workbench-doc-change-demo) for a complete list.
