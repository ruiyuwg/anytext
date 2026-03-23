Queries the information about roles in a DataWorks workspace by page.

## Operation description

This API operation is available for all DataWorks editions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/ListProjectRoles)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/ListProjectRoles)

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

dataworks:ListProjectRoles

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

ProjectId

long

Yes

The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.

You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.

21229

Codes

array

No

The codes of roles in the DataWorks workspace.

string

No

The code of the role in the DataWorks workspace. Valid values:

-   role\_project\_admin: workspace administrator
-   role\_project\_dev: developer
-   role\_project\_dg\_admin: data governance administrator
-   role\_project\_guest: visitor
-   role\_project\_security: security administrator
-   role\_project\_deploy: deployer
-   role\_project\_owner: workspace owner
-   role\_project\_data\_analyst: data analyst
-   role\_project\_pe: O&M engineer
-   role\_project\_erd: model designer

role\_project\_guest

Names

array

No

The names of roles in the DataWorks workspace.

string

No

The name of the role in the DataWorks workspace.

Visitors

Type

string

No

The type of the role. Valid values:

-   UserCustom: user-defined role
-   System: system role

System

PageNumber

integer

No

The page number.

1

PageSize

integer

No

The number of entries per page. Default value: 10. Maximum value: 100.

10

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

61649187-0BCF-5E75-8D4B-64FDBEBBB447

PagingInfo

object

The pagination information.

PageSize

string

The number of entries per page.

10

PageNumber

string

The page number.

1

TotalCount

string

The total number of entries returned.

42

ProjectRoles

array<object>

The roles in the DataWorks workspace.

ProjectRole

object

The role in the DataWorks workspace.

ProjectId

long

The DataWorks workspace ID.

21229

Code

string

The code of the role in the DataWorks workspace.

role\_project\_guest

Name

string

The name of the role.

Visitors

Type

string

The type of the role in the DataWorks workspace.

System

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "61649187-0BCF-5E75-8D4B-64FDBEBBB447",
  "PagingInfo": {
    "PageSize": 10,
    "PageNumber": 1,
    "TotalCount": 42,
    "ProjectRoles": [
      {
        "ProjectId": 21229,
        "Code": "role_project_guest\n",
        "Name": "Visitors",
        "Type": "System"
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dataworks-public/2024-05-18/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
