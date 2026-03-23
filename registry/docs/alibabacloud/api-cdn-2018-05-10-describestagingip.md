Queries node IP addresses in the staging environment.

## Operation description

**Note** The maximum number of times that each user can call this operation per second is 30.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeStagingIp)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeStagingIp)

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

cdn:DescribeStagingIp

get

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

The current API does not require request parameters

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

1B9E0E83-24AC-49F4-9EE0-BF5EB03E8381

IPV4s

array

IPv4 addresses.

IPV4

string

The IPv4 address.

xx.xx.xx.xx

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1B9E0E83-24AC-49F4-9EE0-BF5EB03E8381",
  "IPV4s": {
    "IPV4": [
      "xx.xx.xx.xx"
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeStagingIp?updateTime=2024-12-18#workbench-doc-change-demo)
