Detaches a data source from a policy. After the data source is detached, the policy no longer protects it. Use this operation with caution.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DeletePolicyBinding)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DeletePolicyBinding)

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

hbr:DeletePolicyBinding

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

PolicyId

string

Yes

The policy ID.

po-000\*\*\*\*\*\*\*\*\*\*\*\*hgp

DataSourceIds

array

No

The IDs of the data sources to detach from the policy.

string

No

The ID of a data source to detach from the policy.

i-2ze\*\*\*\*\*\*\*\*\*\*\*\*quf

SourceType

string

No

The type of the data source. Valid values:

-   **UDM\_ECS**: indicates an ECS instance backup.
    

UDM\_ECS

## Response elements

**Element**

**Type**

**Description**

**Example**

object

DeletePolicyBindingResponse

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

Code

string

The return code. A value of 200 indicates that the request was successful.

200

Message

string

The returned message. If the request is successful, "successful" is returned. If the request fails, an error message is returned.

successful

RequestId

string

The request ID.

3E961A5E-C5C6-566D-BFC3-0362A6A52EBA

## Examples

Success response

`JSON` format

```
{
  "Success": true,
  "Code": "200",
  "Message": "successful",
  "RequestId": "3E961A5E-C5C6-566D-BFC3-0362A6A52EBA"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DeletePolicyBinding#workbench-doc-change-demo) for a complete list.
