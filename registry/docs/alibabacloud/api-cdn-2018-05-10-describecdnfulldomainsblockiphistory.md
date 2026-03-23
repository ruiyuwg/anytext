Queries the blocking history.

## Operation description

**Note**

-   To use this operation, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
    
-   For a specified IP addresses and time range, the time when the IP address was delivered to the edge and the corresponding result are returned.
    
-   If a specified IP address or CIDR block has multiple blocking records in a specified time range, the records are sorted by delivery time in descending order.
    
-   The maximum time range to query is 90 days.
    
-   If no blocking record exists or delivery fails for the given IP address and time range, the delivery time is empty.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnFullDomainsBlockIPHistory)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnFullDomainsBlockIPHistory)

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

cdn:DescribeCdnFullDomainsBlockIPHistory

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

Yes

The IP address or CIDR blocks to query.

1.XXX.XXX.1,2.XXX.XXX.2

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.

2023-04-24T17:00:00Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The end time must be later than the start time.

2023-04-24T19:00:00Z

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

BCD7D917-76F1-442F-BB75-C810DE34C761

IPBlockInfo

array<object>

The result of the operation.

IPBlockHistory

object

BlockIP

string

The blocked IP address or CIDR block.

1.XXX.XXX.0~1.XXX.XXX.255

DeliverTime

string

The delivery time.

2023-04-24 18:49:37

Status

string

The delivery status.

-   Success
-   Failed

Success

Code

integer

The response code.

The value of Code is not 0 in the following scenarios:

-   The format of the IP address is invalid.
-   The format of the time is invalid.
-   Other abnormal scenarios.

0

Description

string

The description of the status returned.

OK

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "BCD7D917-76F1-442F-BB75-C810DE34C761",
  "IPBlockInfo": [
    {
      "BlockIP": "1.XXX.XXX.0~1.XXX.XXX.255\n",
      "DeliverTime": "2023-04-24 18:49:37\n",
      "Status": "Success"
    }
  ],
  "Code": 0,
  "Description": "OK"
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
