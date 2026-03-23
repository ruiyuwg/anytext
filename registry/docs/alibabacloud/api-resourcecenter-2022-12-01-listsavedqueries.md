Queries all custom query templates.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListSavedQueries)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListSavedQueries)

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

resourcecenter:ListSavedQueries

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

MaxResults

string

No

The maximum number of entries to return on each page.

Valid values: 1 to 50.

Default value: 50.

10

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.

eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

MaxResults

string

The maximum number of entries returned on each page.

10

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

AAAAARfZmVDe9NvRXloR5+8CK9nNJufMdRA7W1miLC1P\*\*\*\*

RequestId

string

The request ID.

D696E6EF-3A6D-5770-801E-4982081FE4D0

SavedQueries

array<object>

The information about the custom query templates.

object

The information about the custom query template.

CreateTime

string

The time when the template was created. The time is displayed in UTC.

2022-01-13T05:50:35Z

Description

string

The description of the template.

查询我的所有资源，返回所有的列。

Name

string

The name of the template.

查询我的所有资源。

QueryId

string

The ID of the template.

cq-GeAck\*\*\*\*

UpdateTime

string

The time when the template was last updated. The time is displayed in UTC.

2023-03-14 10:27:07

## Examples

Success response

`JSON` format

```
{
  "MaxResults": "10",
  "NextToken": "AAAAARfZmVDe9NvRXloR5+8CK9nNJufMdRA7W1miLC1P****",
  "RequestId": "D696E6EF-3A6D-5770-801E-4982081FE4D0",
  "SavedQueries": [
    {
      "CreateTime": "2022-01-13T05:50:35Z",
      "Description": "查询我的所有资源，返回所有的列。",
      "Name": "查询我的所有资源。",
      "QueryId": "cq-GeAck****",
      "UpdateTime": "2023-03-14 10:27:07"
    }
  ]
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

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/ListSavedQueries#workbench-doc-change-demo) for a complete list.
