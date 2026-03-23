Modifies one or more cost centers.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/ModifyCostUnit)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/ModifyCostUnit)

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

bss:ModifyCostUnit

update

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

A list of cost centers.

object

No

UnitId

integer

Yes

The ID of the cost center.

2524352

NewUnitName

string

Yes

The new name of the cost center.

newTest

OwnerUid

integer

Yes

The user ID of the cost center owner.

1321312312

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

Successful!

RequestId

string

The request ID.

F5B803CF-94D8-43AF-ADB3-D819AAD30E27

Success

boolean

Indicates whether the request was successful.

true

Data

array<object>

The returned data.

object

IsSuccess

boolean

Indicates whether the operation is successful.

true

UnitId

integer

The ID of the new cost center.

356349875

OwnerUid

integer

The user ID of the cost center owner.

823756287

## Examples

Success response

`JSON` format

```
{
  "Code": "Success",
  "Message": "Successful!",
  "RequestId": "F5B803CF-94D8-43AF-ADB3-D819AAD30E27",
  "Success": true,
  "Data": [
    {
      "IsSuccess": true,
      "UnitId": 356349875,
      "OwnerUid": 823756287
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/ModifyCostUnit#workbench-doc-change-demo) for a complete list.
