Queries a list of DataWorks workspaces of the tenant to which a user belongs.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dataworks-public/2020-05-18/ListProjects)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dataworks-public/2020-05-18/ListProjects)

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

dataworks:ListProjects

get

\*Project

`acs:dataworks:{#regionId}:{#accountId}:workspace/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

PageNumber

integer

Yes

The page number. Valid values: 1 to 100.

1

PageSize

integer

No

The number of entries per page. Default value: 10. Maximum value: 100.

10

ResourceManagerResourceGroupId

string

No

The resource group ID.

rg-acfmzbn7pti3zfa

Tags

array<object>

No

The tags to add to the workspace.

object

No

Key

string

No

The key of tag N to add to the workspace.

Env

Value

string

No

The value of tag N to add to the workspace.

Test

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

20658801\*\*\*

PageResult

object

The results that are returned.

PageNumber

integer

The page number.

1

PageSize

integer

The number of entries per page. Default value: 10. Maximum value: 100.

10

TotalCount

integer

The total number of entries returned.

123

ProjectList

array<object>

The DataWorks workspaces.

Project

object

ProjectStatusCode

string

The status code of the workspace. Valid values:

-   AVAILABLE: 0, which indicates that the workspace is running as expected.
-   DELETED: 1, which indicates that the workspace is deleted.
-   INITIALIZING: 2, which indicates that the workspace is being initialized.
-   INIT\_FAILED: 3, which indicates that the workspace fails to be initialized.
-   FORBIDDEN: 4, which indicates that the workspace is manually disabled.
-   DELETING: 5, which indicates that the workspace is being deleted.
-   DEL\_FAILED: 6, which indicates that the workspace fails to be deleted.
-   FROZEN: 7, which indicates that the workspace is frozen due to overdue payments.
-   UPDATING: 8, which indicates that the workspace is being updated. After you associate a compute engine with the workspace, the system initializes the compute engine and updates the workspace.
-   UPDATE\_FAILED: 9, which indicates that the workspace fails to be updated.

AVAILABLE

ProjectStatus

integer

The status of the workspace. Valid values:

-   0: AVAILABLE, which indicates that the workspace is running as expected.
-   1: DELETED, which indicates that the workspace is deleted.
-   2: INITIALIZING, which indicates that the workspace is being initialized.
-   3: INIT\_FAILED, which indicates that the workspace fails to be initialized.
-   4: FORBIDDEN, which indicates that the workspace is manually disabled.
-   5: DELETING, which indicates that the workspace is being deleted.
-   6: DEL\_FAILED, which indicates that the workspace fails to be deleted.
-   7: FROZEN, which indicates that the workspace is frozen due to overdue payments.
-   8: UPDATING, which indicates that the workspace is being updated. After you associate a compute engine with the workspace, the system initializes the compute engine and updates the workspace.
-   9: UPDATE\_FAILED, which indicates that the workspace fails to be updated.

0

ProjectName

string

The display name of the workspace.

test\_project

ProjectIdentifier

string

The name of the workspace.

test

ProjectId

long

The workspace ID.

1212

ProjectDescription

string

The description of the workspace.

test\_describe

ProjectOwnerBaseId

string

The ID of the user used by the workspace owner.

122222

ResourceManagerResourceGroupId

string

The resource group ID.

rg-acfmzbn7pti3zfa

Tags

array<object>

The tags added to the workspace.

Tag

object

Key

string

The key of tag N added to the workspace.

Env

Value

string

The value of tag N added to the workspace.

Test

DisableDevelopment

boolean

Indicates whether the Development role is disabled. Valid values:

-   **false**: enabled
-   **true**: disabled

true

UseProxyOdpsAccount

boolean

Indicates whether a proxy account is used to access the MaxCompute compute engine associated with the workspace. Valid values:

-   **false**
-   **true**

true

TablePrivacyMode

integer

Indicates whether the MaxCompute tables in the workspace are visible to the users within a tenant. Valid values:

-   **0**: invisible
-   **1**: visible

1

IsDefault

integer

Indicates whether the workspace is a default workspace. Valid values:

-   **1**: The workspace is a default workspace.
-   **0**: The workspace is not a default workspace.

1

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "20658801***",
  "PageResult": {
    "PageNumber": 1,
    "PageSize": 10,
    "TotalCount": 123,
    "ProjectList": [
      {
        "ProjectStatusCode": "AVAILABLE",
        "ProjectStatus": 0,
        "ProjectName": "test_project",
        "ProjectIdentifier": "test",
        "ProjectId": 1212,
        "ProjectDescription": "test_describe",
        "ProjectOwnerBaseId": 122222,
        "ResourceManagerResourceGroupId": "rg-acfmzbn7pti3zfa",
        "Tags": [
          {
            "Key": "Env",
            "Value": "Test"
          }
        ],
        "DisableDevelopment": true,
        "UseProxyOdpsAccount": true,
        "TablePrivacyMode": 1,
        "IsDefault": 1
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

Invalid.Tenant.ConnectionNotExists

The connection does not exist.

The connection does not exist.

400

Invalid.Tenant.ProjectNotExists

The project does not exist.

The project does not exist.

400

Invalid.Tenant.UserAlreadyInProject

The user already exists in the project.

The user has already existed in project.

400

Invalid.Tenant.UserNotInProject

The user is not in the project.

The user is not in the project.

403

Invalid.Tenant.UserIsNotProjectOwnerOrAdmin

The user is not a project administrator or owner.

The user is not a project administrator or owner.

403

Invalid.Tenant.UserNotInTenant

The user is not in tenant.

The user is not in tenant.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dataworks-public/2020-05-18/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-10-31

API Description Update. The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/dataworks-public/2020-05-18/ListProjects?updateTime=2022-10-31#workbench-doc-change-demo)
