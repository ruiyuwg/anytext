Queries the virtual IP addresses (VIPs) of L2 CDN points of presence (POPs) for a specific domain name.

## Operation description

-   This operation is available only to users whose daily peak bandwidth value is higher than 1 Gbit/s. If you meet this requirement, you can [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex) to apply for permissions to use this operation.
-   You can call this operation up to 40 times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeL2VipsByDomain)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeL2VipsByDomain)

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

cdn:DescribeL2VipsByDomain

get

\*Domain

`acs:cdn:*:{#accountId}:domain/{#DomainName}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DomainName

string

Yes

The accelerated domain name. You can specify only one domain name in each request.

example.com

## Response parameters

Parameter

Type

Description

Example

object

DomainName

string

The domain name.

example.com

RequestId

string

The ID of the request.

16A96B9A-F203-4EC5-8E43-CB92E68F4CD8

Vips

array

The list of VIPs.

Vip

string

The VIP.

1.1.1.1/25

## Examples

Sample success responses

`JSON`format

```
{
  "DomainName": "example.com",
  "RequestId": "16A96B9A-F203-4EC5-8E43-CB92E68F4CD8",
  "Vips": {
    "Vip": [
      "1.1.1.1/25"
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IllegalOperation

Illegal domain operate is not permitted.

Domain name does not support current operation

400

SingleRequest.OverLimit

A maximum of 1 DomainName is supported for each request.

\-

403

SystemBusy

The system is busy, please try again later.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeL2VipsByDomain?updateTime=2024-12-18#workbench-doc-change-demo)
