Renews a specified instance. This operation cannot be used to renew ECS, RDS, or Redis instances. To renew these instances, call the dedicated renewal API for the specific product.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/RenewInstance)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/RenewInstance)

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

bss:ModifyInstance

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

ProductCode

string

Yes

The product code.

rds

InstanceId

string

Yes

The instance ID.

rm-skjdhaskjdh

RenewPeriod

integer

Yes

The renewal period for the subscription instance, in months. Valid values:

-   1-9
    
-   12
    
-   24
    
-   36
    

6

ClientToken

string

No

A client token to ensure the idempotence of the request.

ASKJHKLASJHAFSLKJH

ProductType

string

No

The product type.

rds

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

The request ID.

6000EE23-274B-4E07-A697-FF2E999520A4

Success

boolean

Indicates whether the request was successful.

true

Data

object

The returned data.

OrderId

string

The order ID.

202657601410661

## Examples

Success response

`JSON` format

```
{
  "Code": "Success",
  "Message": "Successful！",
  "RequestId": "6000EE23-274B-4E07-A697-FF2E999520A4",
  "Success": true,
  "Data": {
    "OrderId": "202657601410661"
  }
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NotApplicable

This API is not applicable for caller.

400

NotAuthorized

This API is not authorized for caller.

400

InvalidOwner

The specified owner doesn't belong to caller.

Invalid user identity.

400

ResourceStatusError

The resource status error.

400

ResourceNotExists

The specific resource is not exists.

500

InternalError

The request processing has failed due to some unknown error.

See [Error Codes](https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/RenewInstance#workbench-doc-change-demo) for a complete list.
