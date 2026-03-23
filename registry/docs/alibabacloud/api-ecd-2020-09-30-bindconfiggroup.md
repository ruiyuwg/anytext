Binds a configuration group to resources.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/BindConfigGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/BindConfigGroup)

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

ecd:BindConfigGroup

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

GroupId

string

Yes

The ID of the configuration group.

ccg-0chlk9b65lj8z\*\*\*\*

ResourceInfos

array<object>

Yes

The resources to which you want to bind the configuration group.

object

Yes

The resource to which you want to bind the configuration group.

ResourceId

string

No

The ID of the resource.

ecd-1bo4xotjvwyon\*\*\*\*

ResourceRegionId

string

No

The region ID of the resource.

cn-hangzhou

ResourceType

string

No

The type of the resource.

Valid values:

-   RESOURCE\_GROUP: the resource group
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

E54EB497-D7B7-5F04-B744-D8DFA7B\*\*\*\*\*\*

GroupId

string

The ID of the configuration group.

ccg-0chlk9b65lj\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "E54EB497-D7B7-5F04-B744-D8DFA7B******",
  "GroupId": "ccg-0chlk9b65lj****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
