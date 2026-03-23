Cancels an auto triggered task policy.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/CancelCronJobPolicyServerless)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/CancelCronJobPolicyServerless)

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

polardb:CancelCronJobPolicyServerless

delete

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

DBClusterId

string

No

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*

RegionId

string

No

The region ID.

cn-beijing

JobId

string

No

The scheduled task ID.

b3e7b3d3-027d-4fcc-9f92-5c5f2363e141

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

7E2FE3BB-C677-5FF9-9FC5-9CF364BD6BE5

## Examples

Success response

`JSON` format

```
{
  "RequestId": "7E2FE3BB-C677-5FF9-9FC5-9CF364BD6BE5"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidRegionId.Malformed

The specified parameter RegionId is not valid.

The specified RegionId parameter is invalid.

400

InvalidStartTime.Malformed

The specified parameter StartTime is not valid.

The specified StartTime parameter is invalid.

400

InvalidEndTime.Malformed

The specified parameter EndTime is not valid.

The specified EndTime parameter is invalid.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

404

InvalidJobId.NotFound

The Specified jobId does not found.

The Specified jobId does not found.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/CancelCronJobPolicyServerless#workbench-doc-change-demo) for a complete list.
