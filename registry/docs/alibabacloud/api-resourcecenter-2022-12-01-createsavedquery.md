Creates a custom query template.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/CreateSavedQuery)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/CreateSavedQuery)

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

resourcecenter:CreateSavedQuery

create

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

Name

string

Yes

The name of the template.

-   The name must be 1 to 64 characters in length.
    
-   The name can contain letters, digits, underscores (\_), and hyphens (-).
    
-   The template name must be unique.
    

查询我的所有资源。

Expression

string

Yes

The expression of the template.

SELECT \* FROM resources;

Description

string

No

The description of the template.

The description must be 1 to 256 characters in length.

查询所有资源。

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

QueryId

string

The template ID.

cq-GeAck\*\*\*\*

RequestId

string

The request ID.

EFA806B9-7F36-55AB-8B7A-D680C2C5EE57

## Examples

Success response

`JSON` format

```
{
  "QueryId": "cq-GeAck****",
  "RequestId": "EFA806B9-7F36-55AB-8B7A-D680C2C5EE57"
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

LengthExceedLimit.Description

The length of parameter Description exceed limit.

The length of the query template description exceeds the limit.

409

LengthExceedLimit.Expression

The length of parameter Expression exceed limit.

409

LengthExceedLimit.Name

The length of parameter Name exceed limit.

The length of the query template name exceeds the limit.

409

InvalidParameter.Name

The specified parameter Name is not valid.

The query template name is invalid.

409

AlreadyExists.Name

The Query Template Name already exists.

The query template name already exists.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/CreateSavedQuery#workbench-doc-change-demo) for a complete list.
