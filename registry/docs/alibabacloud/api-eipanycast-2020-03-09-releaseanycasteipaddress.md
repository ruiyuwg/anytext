Releases an Anycast EIP instance.

## Operation description

Before you release an Anycast EIP instance, make sure that the instance is not associated with a cloud resource. For more information, see [](/help/en/doc-detail/0.html).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Eipanycast/2020-03-09/ReleaseAnycastEipAddress)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Eipanycast/2020-03-09/ReleaseAnycastEipAddress)

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

eipanycast:ReleaseAnycastEipAddress

delete

\*AnycastEipAddress

`acs:eipanycast:{#regionId}:{#accountId}:anycast/{#anycastId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

AnycastId

string

Yes

The ID of the Anycast EIP instance that you want to release.

aeip-bp1ix34fralt4ykf3\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

**Note**

If you do not specify this parameter, the system automatically uses the RequestId of the request as the ClientToken. The RequestId of each API request may be different.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

FBDB18D8-E91E-4978-8D6C-6E2E3EE10133

## Examples

Success response

`JSON` format

```
{
  "RequestId": "FBDB18D8-E91E-4978-8D6C-6E2E3EE10133"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationFailed.Conflict

Operation failed: The request was too frequent or there was a concurrency conflict. Please try again later.

400

OperationUnsupported.ServiceManaged

Operation is forbidden because this instance belongs to Service manager.

The operation is prohibited and the instance belongs to a managed resource.

400

IncorrectStatus.Anycast

The status of the Anycast instance is invalid.

503

SystemBusy

The system is busy. Please try again later.

The system is currently busy, please try again later.

See [Error Codes](https://api.alibabacloud.com/document/Eipanycast/2020-03-09/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Eipanycast/2020-03-09/ReleaseAnycastEipAddress#workbench-doc-change-demo) for a complete list.
