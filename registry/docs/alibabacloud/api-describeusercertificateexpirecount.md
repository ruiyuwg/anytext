Queries the number of domain names whose SSL certificates are about to expire or have already expired.

## Operation description

**Note** You can call this operation up to 100 times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeUserCertificateExpireCount)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeUserCertificateExpireCount)

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

cdn:DescribeUserCertificateExpireCount

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

ExpireWithin30DaysCount

integer

The number of domain names whose SSL certificates are about to expires within 30 days.

0

RequestId

string

The ID of the request.

F5E8DF64-7175-4186-9B06-F002C0BBD0C5

ExpiredCount

integer

The number of domain names whose SSL certificates have already expired.

6

## Examples

Sample success responses

`JSON`format

```
{
  "ExpireWithin30DaysCount": 0,
  "RequestId": "F5E8DF64-7175-4186-9B06-F002C0BBD0C5",
  "ExpiredCount": 6
}
```

## Error codes

HTTP status code

Error code

Error message

400

NoHttpsDomain

Your account doesn't have https domain.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).
