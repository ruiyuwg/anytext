Queries the information about a custom query template.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetSavedQuery)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetSavedQuery)

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

resourcecenter:GetSavedQuery

get

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

QueryId

string

Yes

The ID of the template.

**Note**

You can call the [ListSavedQueries](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listsavedqueries) operation to obtain the ID of the template.

sq-GeAck\*\*\*\*

## Response elements

**Parameter**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The request ID.

6D98D9B0-318D-56A4-910C-93B5F945AF2B

SavedQuery

object

The information about the template.

CreateTime

string

The time when the template was created. The time is displayed in UTC.

2023-10-30T01:43:16Z

Description

string

The description of the template.

Queries all resources on which you have permissions and sorts the resources by resource type and resource ID.

Expression

string

The expression of the template.

SELECT \* FROM resources;

Name

string

The name of the template.

Query of All Alibaba Cloud Resources

QueryId

string

The ID of the template.

sq-GeAck\*\*\*\*

UpdateTime

string

The time when the template was last updated. The time is displayed in UTC.

2023-10-30T01:43:16Z

## Examples

Success response

`JSON` format

```
{
  "RequestId": "6D98D9B0-318D-56A4-910C-93B5F945AF2B",
  "SavedQuery": {
    "CreateTime": "2023-10-30T01:43:16Z",
    "Description": "Queries all resources on which you have permissions and sorts the resources by resource type and resource ID. ",
    "Expression": "SELECT * FROM resources;",
    "Name": "Query of All Alibaba Cloud Resources",
    "QueryId": "sq-GeAck****",
    "UpdateTime": "2023-10-30T01:43:16Z"
  }
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NoPermission

You are not authorized to perform this operation.

409

NotExists.QueryId

The QueryId does not exist.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/GetSavedQuery#workbench-doc-change-demo) for a complete list.
