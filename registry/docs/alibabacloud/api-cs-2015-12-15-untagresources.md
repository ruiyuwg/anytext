If you no longer need the labels (key-value pairs) of a cluster, you can call the UntagResources operation to delete the labels.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/UntagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/UntagResources)

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

cs:UntagResources

delete

\*All Resources

`*`

none

none

## Request syntax

```
DELETE /tags HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

region\_id

string

Yes

The region ID of the resources.

cn-hangzhou

resource\_ids

array

Yes

The list of resource IDs.

string

Yes

The resource ID. You can specify up to 50 resource IDs.

c1a7bb282fc0d48b593\*\*\*

resource\_type

string

Yes

The type of resource. Set the value to `CLUSTER`.

CLUSTER

tag\_keys

array

Yes

The list of keys of the labels that you want to remove.

string

Yes

The key of the label that you want to remove. You can specify up to 20 keys.

TestKey1

all

boolean

No

Specifies whether to remove all custom labels. This parameter takes effect only when `tag_keys` is left empty. Valid values:

-   `true`: Remove all custom labels.
-   `false`: Do not remove all custom labels.

true

## Response parameters

Parameter

Type

Description

Example

object

The response body.

RequestId

string

The request ID.

2D69A58F-345C-4FDE-88E4-BF51894XXXXX

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "2D69A58F-345C-4FDE-88E4-BF51894XXXXX"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-05

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/UntagResources?updateTime=2023-07-05#workbench-doc-change-demo)
