Executes an SQL statement to query the resources that can be accessed within the current account.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ExecuteSQLQuery)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ExecuteSQLQuery)

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

resourcecenter:ExecuteSQLQuery

none

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

Expression

string

Yes

The SQL statement to be executed.

The number of characters in the SQL statement must be less than 2,000.

For more information about the SQL syntax, see [Basic SQL syntax](/help/en/resource-management/resource-center/user-guide/basic-sql-syntax).

SELECT \* FROM resources LIMIT 100;

Scope

string

No

The search scope.

Set this parameter to the ID of a resource group.

For information about how to obtain the ID of a resource group, see [ListResourceGroups](/help/en/resource-management/api-listresourcegroups).

rg-acfmzawhxxc\*\*\*\*

MaxResults

integer

No

The number of entries per page.

-   Valid values: 1 to 1000.
    
-   Default value: 1000.
    

1000

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.

eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned result.

Columns

array<object>

The columns.

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

D696E6EF-3A6D-5770-801E-4982081FE4D0

Rows

array

An array of search results.

any

The information about the row.

\[ "vsw-xxx" \]

## Examples

Success response

`JSON` format

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
  "RequestId": "D696E6EF-3A6D-5770-801E-4982081FE4D0",
  "Rows": [
    "[\n      \"vsw-xxx\"  \n]"
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

409

ExceedLimit.ExecuteTime

The execution time has exceeded the limit. Please check for complex queries or large data volume, and optimize accordingly.

409

SQLExecuteError

Failed to execute the SQL statement.

409

InvalidSearch.SQL

Error: %s

409

InvalidParameter.Scope

The Scope is invalid.

409

LengthExceedLimit.Expression

The length of parameter Expression exceed limit.

409

InvalidParameter.NextToken

The specified parameter NextToken is not valid.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/ExecuteSQLQuery#workbench-doc-change-demo) for a complete list.
