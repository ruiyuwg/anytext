You can call the DescribeCdnFullDomainsBlockIPConfig operation to query the configurations of full blocking.

## Operation description

**Note**

-   To use this operation,[submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
    
-   If you specify IP addresses or CIDR blocks, IP addresses that are effective and the corresponding expiration time are returned. If you do not specify IP addresses or CIDR blocks, all effective IP addresses and the corresponding expiration time are returned.
    
-   The results are written to OSS and returned as OSS URLs. The content in OSS objects is in the format of IP address-Corresponding expiration time. The expiration time is in the YYYY-MM-DD hh:mm:ss format.
    
-   You can share OSS URLs with others. The shared URLs are valid for three days.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnFullDomainsBlockIPConfig)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnFullDomainsBlockIPConfig)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   The required resource types are displayed in bold characters.
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cdn:DescribeCdnFullDomainsBlockIPConfig

none

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

IPList

string

No

The IP address or CIDR block to query. Separate multiple values with commas (,). You can specify up to 50 IP addresses or CIDR blocks.

1.XXX.XXX.1,2.XXX.XXX.2

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

95994621-8382-464B-8762-C708E73568D1

Message

string

The returned results. If the operation is successful, URLs of OSS objects are returned. If the operation fails, an error message is returned.

http://xxxx-api.oss-cn-hangzhou.aliyuncs.com/blocklist%2Fxxxxxxxxxxxx.txt?Expires=1682663947&OSSAccessKeyId=xxxxxxxxxx&Signature=xxxxxx

Code

integer

The response code.

The value of Code is not 0 in the following scenarios:

-   The format of the IP address is invalid.
-   The number of IP addresses exceeds the upper limit.
-   Other abnormal scenarios.

0

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "95994621-8382-464B-8762-C708E73568D1",
  "Message": "http://xxxx-api.oss-cn-hangzhou.aliyuncs.com/blocklist%2Fxxxxxxxxxxxx.txt?Expires=1682663947&OSSAccessKeyId=xxxxxxxxxx&Signature=xxxxxx",
  "Code": 0
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter

The specified parameter is invalid.

\-

400

QuotaExceeded

The quota is exceeded.

The quota is exhausted.

500

InternalServerError

internal server error

A service error occurred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
