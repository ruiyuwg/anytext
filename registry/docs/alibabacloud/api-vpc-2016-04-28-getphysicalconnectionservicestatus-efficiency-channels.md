Checks whether outbound data transfer billing is enabled for the current account.

## Operation description

You can call this API operation to query the status of outbound data transfer billing for the current account. For more information about outbound data transfer billing, see [Outbound data transfer billing](/help/en/doc-detail/274385.html) and [Billing](/help/en/express-connect/product-overview/billing-overview/) .

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/GetPhysicalConnectionServiceStatus)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/GetPhysicalConnectionServiceStatus)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

vpc:GetPhysicalConnectionServiceStatus

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

RegionId

string

Yes

The ID of the region for which you want to query the status of outbound data transfer billing.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

54B48E3D-DF70-471B-AA93-08E683A1B45

Enabled

boolean

Indicates whether billing for outbound data transfer is enabled. Valid values:

-   **true**: yes
-   **false**: no

true

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "54B48E3D-DF70-471B-AA93-08E683A1B45",
  "Enabled": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
