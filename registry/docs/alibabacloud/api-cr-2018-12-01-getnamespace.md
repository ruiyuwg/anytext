Queries the information about a namespace.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/cr/2018-12-01/GetNamespace)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/cr/2018-12-01/GetNamespace)

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

cr:GetNamespace

get

\*Namespace

`acs:cr:{#regionId}:{#accountId}:repository/{#InstanceId}/{#NamespaceName}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

InstanceId

string

Yes

The ID of the instance.

cri-kmsiwlxxdcva\*\*\*\*

NamespaceName

string

Yes

The name of the namespace.

test

NamespaceId

string

No

The ID of the namespace.

crn-tiw8t3f8i5lta\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

DefaultRepoType`deprecated`

string

The default type of repositories in the namespace. Valid values:

-   PUBLIC: public repositories.
-   PRIVATE: private repositories.

PUBLIC

NamespaceId

string

The ID of the namespace.

crn-tiw8t3f8i5lt\*\*\*\*

NamespaceStatus

string

The status of the namespace.

-   NORMAL
-   DELETING

NORMAL

RequestId

string

The request ID.

E4BC9E21-8AA5-4582-83C1-C1209AB8196F

Code

string

The return value.

success

InstanceId

string

The ID of the Container Registry instance.

cri-kmsiwlxxdcva\*\*\*\*

AutoCreateRepo

boolean

Indicates whether a repository is automatically created when an image is pushed to the namespace.

true

IsSuccess

boolean

Indicates whether the request was successful.

true

NamespaceName

string

The name of the namespace.

test

ResourceGroupId

string

The ID of the resource group to which the namespace belongs.

rg-acfmv36i4is\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "DefaultRepoType": "PUBLIC",
  "NamespaceId": "crn-tiw8t3f8i5lt****",
  "NamespaceStatus": "NORMAL",
  "RequestId": "E4BC9E21-8AA5-4582-83C1-C1209AB8196F",
  "Code": "success",
  "InstanceId": "cri-kmsiwlxxdcva****",
  "AutoCreateRepo": true,
  "IsSuccess": true,
  "NamespaceName": "test",
  "ResourceGroupId": "rg-acfmv36i4is****",
  "DefaultRepoConfiguration": {
    "TagImmutability": true,
    "RepoType": "",
    "ArtifactBuildRuleParameters": {
      "ImageIndexOnly": true,
      "PriorityFile": ""
    }
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/cr/2018-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
