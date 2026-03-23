Queries virtual IP addresses (VIPs) of CDN points of presence (POPs) by domain name.

## Operation description

**Note** You can call this operation up to 30 times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeUserVipsByDomain)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeUserVipsByDomain)

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

cdn:DescribeUserVipsByDomain

none

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

The accelerated domain name. You can specify only one domain name.

example.com

Available

string

No

Specifies whether to query the virtual IP addresses of only healthy CDN POPs. Valid values:

-   **on**: healthy CDN edge nodes.
-   **off**: all CDN edge nodes.

on

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

820E7900-5CA9-4AEF-B0DD-20ED5F64BE55

Vips

array

The list of VIPs.

Vip

string

The VIP.

122.72.xxx.xxx

## Examples

Sample success responses

`JSON`format

```
{
  "DomainName": "example.com",
  "RequestId": "820E7900-5CA9-4AEF-B0DD-20ED5F64BE55",
  "Vips": {
    "Vip": [
      "122.72.xxx.xxx"
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

MissingParameter

The specified value of parameter "DomainName" can not be empty.

\-

400

InvalidDomain.NotFound

The domain provided is offline or not exist.

\-

400

IllegalOperation

Illegal domain operate is not permitted.

Domain name does not support current operation

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeUserVipsByDomain?updateTime=2024-12-18#workbench-doc-change-demo)
