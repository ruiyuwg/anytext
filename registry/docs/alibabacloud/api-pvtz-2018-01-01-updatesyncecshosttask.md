Call the UpdateSyncEcsHostTask operation to add or update a hostname sync task.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/pvtz/2018-01-01/UpdateSyncEcsHostTask)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/pvtz/2018-01-01/UpdateSyncEcsHostTask)

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

pvtz:UpdateSyncEcsHostTask

none

\*Zone

`acs:pvtz::{#accountId}:zone/{#ZoneId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Lang

string

No

The language of the response. Valid values:

-   zh: Chinese.
    
-   en: English.
    

Default value: en

en

ZoneId

string

Yes

The unique ID of the zone.

df2d03865266bd9842306db586d3\*\*\*\*

Status

string

Yes

The status of the ECS hostname sync task. Valid values:

-   ON: enables the task.
    
-   OFF: disables the task.
    

ON

Region

array<object>

Yes

The regions for synchronization.

object

No

The details of a region.

UserId

integer

No

The ID of the user who owns the region. This parameter is used for cross-account synchronization.

141339776561\*\*\*\*

RegionId

string

No

The region ID.

cn-beijing

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The unique ID of the request.

test-FC9A-4595-8D96-089D73D7A63D

Success

boolean

Indicates whether the request was successful. Valid values:

-   True: The request succeeded.
    
-   False: The request failed.
    

true

## Examples

Success response

`JSON` format

```
{
  "RequestId": "test-FC9A-4595-8D96-089D73D7A63D",
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/pvtz/2018-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/pvtz/2018-01-01/UpdateSyncEcsHostTask#workbench-doc-change-demo) for a complete list.
