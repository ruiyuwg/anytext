Removes tags from specified resources.

## Operation description

**Note** You can call this operation up to 100 times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/UntagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/UntagResources)

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

cdn:UntagResources

update

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

ResourceType

string

Yes

The type of the resources from which you want to remove tags. Set this parameter to **DOMAIN**.

DOMAIN

All

boolean

No

Specifies whether to remove all tags. Valid values:

-   **true**: yes.
-   **false**: no.

Default value: **false**.

false

ResourceId

array

Yes

The list of resource IDs. You can specify up to 50 resource IDs in the list.

string

Yes

The ID of a resource.

test-res.dutenews.com

TagKey

array

No

The list of tag keys. You can specify up to 20 tag keys in the list.

string

No

The key of a tag.

env

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

97C68796-EB7F-4D41-9D5B-12B909D76508

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "97C68796-EB7F-4D41-9D5B-12B909D76508"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

TagIsInvalid

The number of Tag exceeds 20.

\-

400

ResourceIdIsInvalid

The number of ResourceId exceeds 50.

The number of resource IDs (ResourceId) cannot exceed 50.

400

TagKeyRepeated

The specified TagKey is duplicated.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/UntagResources?updateTime=2024-12-18#workbench-doc-change-demo)
