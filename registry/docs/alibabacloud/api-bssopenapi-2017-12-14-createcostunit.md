Creates one or more cost centers.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/CreateCostUnit)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/CreateCostUnit)

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

bss:CreateCostUnit

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

UnitEntityList

array<object>

No

The list of cost centers.

object

No

ParentUnitId

integer

Yes

The ID of the parent cost center. A value of -1 indicates the root cost center.

\-1

OwnerUid

integer

Yes

The user ID of the owner of the new cost center.

982375623

UnitName

string

Yes

The name of the cost center.

test

## Response elements

**Parameter**

**Type**

**Description**

**Example**

object

Code

string

The status code.

Success

Message

string

The error message.

Successful！

RequestId

string

The ID of the request.

F5B803CF-94D8-43AF-ADB3-D819AAD30E27

Success

boolean

Indicates whether the request was successful.

true

Data

object

The data returned.

CostUnitDtoList

array<object>

The list of cost center entities.

object

ParentUnitId

integer

The ID of the parent cost center. A value of -1 indicates the root cost center.

\-1

UnitName

string

The name of the cost center.

test

UnitId

integer

The ID of the cost center.

84327659328

OwnerUid

integer

The user ID of the owner of the new cost center.

26387563

## Examples

Success response

`JSON` format

```
{
  "Code": "Success",
  "Message": "Successful！",
  "RequestId": "F5B803CF-94D8-43AF-ADB3-D819AAD30E27",
  "Success": true,
  "Data": {
    "CostUnitDtoList": [
      {
        "ParentUnitId": -1,
        "UnitName": "test",
        "UnitId": 84327659328,
        "OwnerUid": 26387563
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/CreateCostUnit#workbench-doc-change-demo) for a complete list.
