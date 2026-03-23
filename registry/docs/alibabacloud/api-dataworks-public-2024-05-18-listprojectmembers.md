Gets a paginated list of workspace member details.

## Operation description

This feature is available in DataWorks Basic Edition and higher.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/ListProjectMembers)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/ListProjectMembers)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

dataworks:ListProjectMembers

list

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ProjectId

integer

Yes

The ID of the DataWorks workspace. To obtain this ID, log in to the [DataWorks Console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page.

This parameter specifies the DataWorks workspace for the API call.

62136

UserIds

array

No

A list of DataWorks user IDs to filter the results. You can find these IDs on the [Tenant Members and Roles](https://dataworks.console.aliyun.com/product/ms_menu) page in the Management Center.

string

No

A DataWorks user ID.

123422344899

RoleCodes

array

No

A list of role codes for the workspace to filter the results. You can call the [ListProjectRoles](/help/en/dataworks/developer-reference/api-dataworks-public-2024-05-18-listprojectroles) operation to obtain the role codes.

string

No

A role code for the workspace.

role\_project\_guest

PageNumber

integer

No

The page number. Pages start from page 1.

1

PageSize

integer

No

The number of entries per page. Default value: 10. Maximum value: 100.

10

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response object.

RequestId

string

The unique ID of the request, used to track logs and troubleshoot issues.

9FBBBB1F-DD5E-5D8E-8F50-37F77460F056

PagingInfo

object

The paging information.

PageSize

integer

The number of entries to return on each page.

10

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of matching entries.

12

ProjectMembers

array<object>

The list of Workspace members.

array<object>

The details of a single Workspace member.

ProjectId

integer

The ID of the DataWorks Workspace.

62136

UserId

string

The ID of the DataWorks user.

123422344899

Status

string

The status of the Workspace member.

-   `Normal`: The member is active.
    
-   `Forbidden`: The member is disabled.
    

Normal

Roles

array<object>

The roles assigned to the Workspace member.

object

The details of an assigned role.

Code

string

The code of the role.

role\_project\_guest

Name

string

The name of the role.

Visitors

Type

string

The type of the role.

-   `UserCustom`: A user-defined role.
    
-   `System`: A system role.
    

System

UserName

string

The name of the DataWorks user.

## Examples

Success response

`JSON` format

```
{
  "RequestId": "9FBBBB1F-DD5E-5D8E-8F50-37F77460F056",
  "PagingInfo": {
    "PageSize": 10,
    "PageNumber": 1,
    "TotalCount": 12,
    "ProjectMembers": [
      {
        "ProjectId": 62136,
        "UserId": "123422344899",
        "Status": "Normal",
        "Roles": [
          {
            "Code": "role_project_guest",
            "Name": "Visitors",
            "Type": "System"
          }
        ],
        "UserName": ""
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/dataworks-public/2024-05-18/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/dataworks-public/2024-05-18/ListProjectMembers#workbench-doc-change-demo) for a complete list.
