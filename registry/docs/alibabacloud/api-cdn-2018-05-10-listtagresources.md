Queries the tags that are attached to a resource.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/ListTagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/ListTagResources)

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

cdn:ListTagResources

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

TagOwnerUid

string

No

The ID of the Alibaba Cloud account to which the tag belongs.

123xxxx

TagOwnerBid

string

No

The business ID of the tag owner.

26842

ResourceType

string

Yes

The type of the resource. Set the value to **DOMAIN**.

DOMAIN

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results.

QpgBAAAAAABsb2dzL2RzLw==

ResourceId

array

No

The ID of the resource.

string

No

The ID of the instance N. Valid values of N: 1 to 50.

example.com

Tag

array<object>

No

The key-value pair of a tag.

object

No

Key

string

No

The key of the tag.

testKey

Value

string

No

The value of the tag.

testValue

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

The pagination token that is used in the next request to retrieve a new page of results.

QpgBAAAAAABsb2dzL2RzLw==

RequestId

string

The request ID.

64D28B53-5902-409B-94F6-FD46680144FE

TagResources

array<object>

The returned correspondence between the resource and tags.

TagResource

object

TagValue

string

The value of the tag.

testValue

ResourceType

string

The type of the resource. Set the value to **DOMAIN**.

DOMAIN

ResourceId

string

The ID of the resource.

example.com

TagKey

string

The key of the tag.

testKey

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "QpgBAAAAAABsb2dzL2RzLw==",
  "RequestId": "64D28B53-5902-409B-94F6-FD46680144FE",
  "TagResources": {
    "TagResource": [
      {
        "TagValue": "testValue",
        "ResourceType": "DOMAIN",
        "ResourceId": "example.com",
        "TagKey": "testKey"
      }
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

InvalidRegionId.Malformed

The specified RegionId is invalid.

\-

400

MissParameter.TagOrResourceId

Either Tag or ResourceId must be specified.

\-

400

TagIsInvalid

The number of Tag exceeds 20.

\-

400

ResourceIdIsInvalid

The number of ResourceId exceeds 50.

The number of resource IDs (ResourceId) cannot exceed 50.

400

TagKeyIsInvalid

The specified TagKey is invalid.

\-

400

TagValueIsInvalid

The specified TagValue is invalid.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/ListTagResources?updateTime=2024-12-18#workbench-doc-change-demo)

2024-11-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/ListTagResources?updateTime=2024-11-25#workbench-doc-change-demo)
