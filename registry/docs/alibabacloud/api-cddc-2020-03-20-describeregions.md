Queries the most recent region list.

## Operation description

For more information about region IDs, see [Region IDs](/help/en/apsaradb-for-mybase/latest/region-ids).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/cddc/2020-03-20/DescribeRegions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/cddc/2020-03-20/DescribeRegions)

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

cddc:DescribeRegions

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

The request ID.

D6E068C3-25BC-455A-85FE-45F0B22ECB1F

Regions

array<object>

The queried regions.

RDSRegion

object

ZoneId

string

The zone ID.

ap-southeast-1a

RegionId

string

The region ID.

ap-southeast-1

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "D6E068C3-25BC-455A-85FE-45F0B22ECB1F",
  "Regions": {
    "RDSRegion": [
      {
        "ZoneId": "ap-southeast-1a",
        "RegionId": "ap-southeast-1"
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/cddc/2020-03-20/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
