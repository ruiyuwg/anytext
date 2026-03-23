Unbinds a configuration group from resources.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/UnbindConfigGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/UnbindConfigGroup)

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

ecd:UnbindConfigGroup

list

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

No

The ID of the region. Set the value to `cn-shanghai`.

cn-hangzhou

Type

string

Yes

The type of the configuration group.

Valid value:

-   Timer: the scheduled task type.

Timer

ResourceInfos

array<object>

Yes

The resources from which you want to unbind the configuration group.

object

Yes

The resource from which you want to unbind the configuration group.

ResourceId

string

No

The ID of the resource.

ecd-ctwj0bk3l5nz\*\*\*\*

ResourceRegionId

string

No

The region ID of the resource.

cn-chengdu

ResourceType

string

No

The type of the resource.

Valid values:

-   RESOURCE\_GROUP: the resource group.
-   CLOUD\_DESKTOP: the cloud computer service.

CLOUD\_DESKTOP

ProductType

string

No

The service type of the resource.

Valid value:

-   CLOUD\_DESKTOP: the cloud computer service.

CLOUD\_DESKTOP

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

AD0FF13D-FC7D-56AD-934F-91C8487\*\*\*\*\*

GroupIds

array

The IDs of the configuration groups.

data

string

The ID of the configuration group.

ccg-0cfaiedov605c\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "AD0FF13D-FC7D-56AD-934F-91C8487*****",
  "GroupIds": [
    "ccg-0cfaiedov605c****"
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
