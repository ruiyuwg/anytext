Executes an SQL statement to query resources across accounts.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ExecuteMultiAccountSQLQuery)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ExecuteMultiAccountSQLQuery)

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

resourcecenter:ExecuteMultiAccountSQLQuery

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

Expression

string

Yes

The SQL statement to be executed.

The number of characters in the SQL statement must be less than 2,000.

For more information about the SQL syntax, see [Basic SQL syntax](/help/en/resource-management/resource-center/user-guide/basic-sql-syntax).

SELECT \* FROM resources LIMIT 100;

Scope

string

Yes

The search scope. The value of this parameter can be one of the following items:

-   ID of a resource directory: Resources within the management account and all members of the resource directory are searched.
-   ID of the Root folder: Resources within all members in the Root folder and the subfolders of the Root folder are searched.
-   ID of a folder: Resources within all members in the folder are searched.
-   ID of a member: Resources within the member are searched.
-   ID of a member/ID of a Resource group: Resources within the member in the resource group are searched.

For more information about how to obtain the ID of a resource directory, the Root folder, a folder, a member, or a resource group, see [GetResourceDirectory](/help/en/resource-management/api-getresourcedirectory) , [ListFoldersForParent](/help/en/resource-management/api-listfoldersforparent) , [ListFoldersForParent](/help/en/resource-management/api-listfoldersforparent) , [ListAccounts](/help/en/resource-management/api-listaccounts) , or [ListResourceGroups](/help/en/resource-management/api-listresourcegroups) .

rd-r4\*\*\*\*

MaxResults

integer

No

The maximum number of entries to return on each page.

Valid values: 1 to 1000.

Default value: 1000.

1000

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.

eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The returned result.

Columns

array<object>

The columns.

Column

object

Name

string

The name of the column.

resource\_id

Type

string

The type of the column.

varchar

MaxResults

integer

The number of entries per page.

1000

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd\*\*\*\*

RequestId

string

The request ID.

44C8A952-D6B0-5BC8-82D5-93BA02E26F2E

Rows

array

An array of search results.

Row

any

The information about the row.

\[ "vsw-xxx“ \]

## Examples

Sample success responses

`JSON`format

```
{
  "Columns": [
    {
      "Name": "resource_id",
      "Type": "varchar"
    }
  ],
  "MaxResults": 1000,
  "NextToken": "eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****\n",
  "RequestId": "44C8A952-D6B0-5BC8-82D5-93BA02E26F2E",
  "Rows": [
    "[\n      \"vsw-xxx“\n]"
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

NoPermission

You are not authorized to perform this operation.

You are not authorized to perform the operation.

403

NoPermission.AccountScope

The operator is not permitted for this account scope.

The operator is not permitted for this account scope.

404

NotExists.ResourceDirectory

The resource directory for the account is not enabled.

No resource directory is enabled for the account.

404

NotExists.ResourceDirectory.FolderId

The specified folder does not exist.

The specified folder does not exist.

409

ExceedLimit.ExecuteTime

The execution time has exceeded the limit. Please check for complex queries or large data volume, and optimize accordingly.

The time consumed for the query exceeds the limit. Check and optimize the complexity of or data size in the SQL statement.

409

SQLExecuteError

Failed to execute the SQL statement.

Failed to perform the query. Check whether the query statement is correct.

409

InvalidSearch.SQL

Error: %s

Error:%s

409

InvalidParameter.Scope

The Scope is invalid.

The Scope parameter is invalid

409

ServiceNotEnabled.SpecifiedAccount

ResourceCenter service of the specified account is not enabled.

The Resource Center service is not activated for the specified account.

409

InvalidParameter.NextToken

The specified parameter NextToken is not valid.

The specified parameter NextToken is not valid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-05-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/ExecuteMultiAccountSQLQuery?updateTime=2024-05-29#workbench-doc-change-demo)
