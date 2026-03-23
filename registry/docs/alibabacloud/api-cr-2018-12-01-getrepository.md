Queries details about an image repository.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/cr/2018-12-01/GetRepository)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/cr/2018-12-01/GetRepository)

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

cr:GetRepository

get

\*Repository

`acs:cr:{#regionId}:{#accountId}:repository/{#InstanceId}/{#NamespaceName}/{#RepositoryName}`

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

RepoId

string

No

The ID of the repository.

crr-03cuozrsqhkw\*\*\*\*

RepoNamespaceName

string

No

The name of the namespace to which the repository belongs.

test

RepoName

string

No

The name of the repository.

test

## Response parameters

Parameter

Type

Description

Example

object

Summary

string

The summary of the repository.

Automatically created repository

CreateTime

long

The time when the repository was created.

1570759546000

IsSuccess

boolean

Indicates whether the request is successful.

true

InstanceId

string

The ID of the instance.

cri-kmsiwlxxdcva\*\*\*\*

RepoStatus

string

The status of the repository.

NORMAL

RepoType

string

The type of the repository. Valid values:

-   `PUBLIC`: public repository.
-   `PRIVATE`: private repository.

PRIVATE

RepoBuildType

string

Indicates how the repository was created. Valid values:

-   `MANUAL`: The repository was manually created.
-   `AUTO`: The repository was automatically created.

MANUAL

ModifiedTime

long

The time when the repository was last modified.

1570759546100

RequestId

string

The ID of the request.

915E6734-3E50-4640-8DBA-126D2D94DE29

RepoId

string

The ID of the repository.

crr-l5eoubonp0l\*\*\*\*

Code

string

The return value.

success

RepoNamespaceName

string

The name of the namespace.

test

TagImmutability

boolean

Indicates whether the feature of image tag immutability is enabled. Valid values:

-   `true`: The feature of image tag immutability is enabled.
-   `false`: The feature of image tag immutability is disabled.

true

RepoName

string

The name of the repository.

test

Detail

string

The details of the repository.

test

ResourceGroupId

string

The ID of the resource group.

rg-acfmv36i4is\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "Summary": "Automatically created repository",
  "CreateTime": 1570759546000,
  "IsSuccess": true,
  "InstanceId": "cri-kmsiwlxxdcva****",
  "RepoStatus": "NORMAL",
  "RepoType": "PRIVATE",
  "RepoBuildType": "MANUAL",
  "ModifiedTime": 1570759546100,
  "RequestId": "915E6734-3E50-4640-8DBA-126D2D94DE29",
  "RepoId": "crr-l5eoubonp0l****",
  "Code": "success",
  "RepoNamespaceName": "test",
  "TagImmutability": true,
  "RepoName": "test",
  "Detail": "test",
  "ResourceGroupId": "rg-acfmv36i4is****"
}
```

## Error codes

HTTP status code

Error code

Error message

403

NoPrivilege

Access denied for this user.

500

SystemError

Unknown error.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/cr/2018-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-08-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/cr/2018-12-01/GetRepository?updateTime=2023-08-21#workbench-doc-change-demo)
