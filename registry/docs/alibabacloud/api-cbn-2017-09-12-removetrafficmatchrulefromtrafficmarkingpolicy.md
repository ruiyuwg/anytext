Deletes specified traffic classification rules from a traffic marking policy.

## Operation description

-   When you call **RemoveTrafficMatchRuleFromTrafficMarkingPolicy**, take note of the following rules:
    
    -   If you specify the ID of a traffic classification rule in the **TrafficMarkRuleIds** parameter, the specified traffic classification rule is deleted.
        
    -   If you do not specify a traffic classification rule ID in the **TrafficMarkRuleIds** parameter, no operation is performed after you call this operation.
        
    
    If you want to delete a traffic classification rule, you must specify the rule ID before you call this operation.
    
-   **RemoveTrafficMatchRuleFromTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic classification rule.
    
    -   If a traffic classification rule is in the **Deleting** state, the traffic classification rule is being deleted. In this case, you can query the traffic classification rule but cannot perform other operations.
        
    -   If a traffic classification rule cannot be found, the traffic classification rule is deleted.
        

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/RemoveTrafficMatchRuleFromTrafficMarkingPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/RemoveTrafficMatchRuleFromTrafficMarkingPolicy)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:RemoveTrafficMatchRuleFromTrafficMarkingPolicy

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

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that it is unique among all requests. The client token can contain only ASCII characters.

**Note**

If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.

123e4567-e89b-12d3-a456-426\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): performs a dry run and sends the request.
    

false

TrafficMarkingPolicyId

string

Yes

The ID of the traffic marking policy.

tm-d33hdczo3qo8ta\*\*\*\*

TrafficMarkRuleIds

array

No

The ID of the traffic classification rule.

string

No

The ID of the traffic classification rule.

You can delete at most 20 traffic classification rules in each call.

You can call the [ListTrafficMarkingPolicies](/help/en/cen/developer-reference/api-listtrafficmarkingpolicies) operation to query IDs of traffic classification rules.

tm-rule-15jtgapsat62r9\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response.

RequestId

string

The ID of the request.

6DF9A765-BCD2-5C7E-8C32-C35C8A361A39

## Examples

Success response

`JSON` format

```
{
  "RequestId": "6DF9A765-BCD2-5C7E-8C32-C35C8A361A39"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IncorrectStatus.TrafficMarkingPolicy

TrafficMarkingPolicy status is invalid.

The error message returned because the status of the traffic marking policy does not support this operation. Try again later.

400

IllegalParam.TrafficMarkingRuleIds

The specified TrafficMarkingRuleIds is invalid.

The error message returned because the TrafficMarkingRuleIds parameter is set to an invalid value.

400

InvalidTrafficMarkingPolicyId.NotFound

The specified TrafficMarkingPolicyId is not found.

The error message returned because the specified traffic marking policy ID (TrafficMarkingPolicyId) does not exist.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

MissingParam.TrafficMarkingPolicyId

The parameter TrafficMarkingPolicyId is mandatory.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/RemoveTrafficMatchRuleFromTrafficMarkingPolicy#workbench-doc-change-demo) for a complete list.
