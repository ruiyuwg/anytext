Deletes a specified traffic marking policy.

## Operation description

-   **DeleteTrafficMarkingPolicy** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic marking policy.
    
    -   If a traffic marking policy is in the **Deleting** state, the traffic marking policy is being deleted. You can query the traffic marking policy but cannot perform other operations.
        
    -   If a traffic marking policy cannot be found, the traffic marking policy is deleted.
        
-   Before you delete a traffic marking policy, you must delete all traffic classification rules from the policy. For more information, see [RemoveTrafficMatchRuleFromTrafficMarkingPolicy](/help/en/cen/developer-reference/api-cbn-2017-09-12-removetrafficmatchrulefromtrafficmarkingpolicy).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTrafficMarkingPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTrafficMarkingPolicy)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a RAM policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding ARN in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of common condition keys applicable across all RAM-supported services. For more information, see [Common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms).
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:DeleteTrafficMarkingPolicy

delete

\*CenInstance

`acs:cen:*:{#accountId}:ceninstance/{#CenId}`

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

If you do not specify this parameter, the system automatically uses the value of **RequestId** as the value of **ClientToken**. The value of **RequestId** for each API request may be different.

123e4567-e89b-12d3-a456-426\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
    
-   **false** (default): performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
    

false

TrafficMarkingPolicyId

string

Yes

The ID of the traffic marking policy.

tm-u9nxup5kww5po8\*\*\*\*

Force

boolean

No

Whether to force delete the traffic marking policy. Valid values:

-   **false** (default): checks whether there is a traffic classification rule before deleting the traffic marking policy. If there is, the traffic marking policy cannot be deleted and an error is returned.
    
-   **true**: When you delete a traffic marking policy, all traffic classification rules are deleted by default.
    

false

## **Response parameters**

**Parameter**

**Type**

**Description**

**Example**

object

The returned result.

RequestId

string

The ID of the request.

5F1F3A57-A753-572B-8F71-4F964398C566

## Examples

Success response

`JSON` format

```
{
  "RequestId": "5F1F3A57-A753-572B-8F71-4F964398C566"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

AssociationExist.TransitQosRuleExist

The rule with the specified TrafficMarkingPolicy already exists.

The error message returned because the traffic marking policy contains rules. You must delete the rules before you delete the traffic marking policy.

400

IncorrectStatus.TrafficMarkingPolicy

The status of TrafficMarkingPolicy is incorrect.

The error message returned because the status of the traffic marking policy does not support this operation. Try again later.

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

IncorrectStatus.TransitRouterInstance

The status of TransitRouter is incorrect.

The error message returned because the transit router is in an invalid state.

400

MissingParam.TrafficMarkingPolicyId

The parameter TrafficMarkingPolicyId is mandatory.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DeleteTrafficMarkingPolicy#workbench-doc-change-demo) for a complete list.
