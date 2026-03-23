Queries the statistics on a multi-account delivery channel.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetMultiAccountDeliveryChannelStatistics)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetMultiAccountDeliveryChannelStatistics)

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

resourcecenter:GetMultiAccountDeliveryChannelStatistics

get

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

DeliveryChannelId

string

Yes

The ID of the delivery channel.

dc-6q79dm4o9\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

DeliveryChannelStatistics

object

The statistics on the delivery channel.

DeliveryChannelId

string

The ID of the delivery channel.

dc-6q79dm4o9\*\*\*

DeliveryChannelName

string

The name of the delivery channel.

test-multi-account-delivery

LatestChangeDeliveryTime

string

The last delivery time of resource configuration change events.

2025-06-03T16:05:15Z

LatestSnapshotDeliveryTime

string

The last delivery time of scheduled resource snapshots.

2025-06-03T16:00:00Z

RequestId

string

The request ID.

80DF0610-504C-56D7-BDCF-7C92FD687\*\*\*

## Examples

Success response

`JSON` format

```
{
  "DeliveryChannelStatistics": {
    "DeliveryChannelId": "dc-6q79dm4o9***\n",
    "DeliveryChannelName": "test-multi-account-delivery",
    "LatestChangeDeliveryTime": "2025-06-03T16:05:15Z",
    "LatestSnapshotDeliveryTime": "2025-06-03T16:00:00Z"
  },
  "RequestId": "80DF0610-504C-56D7-BDCF-7C92FD687***\n"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

403

NoPermission.AccountScope

The operator is not permitted for this account scope.

The operator is not permitted for this account scope.

403

NoPermission.ResourceDirectory.MemberAccount

ResourceDirectory Member Account is not authorized to perform this operation.

You are not allowed to use a member of a resource directory to perform this operation. Use the management account of the resource directory to perform the operation.

404

NotExists.DeliveryChannelId

The DeliveryChannelId does not exist.

The DeliveryChannelId does not exist.

409

InvalidParameter.DeliveryChannelId

The specified parameter DeliveryChannelId is not valid.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/GetMultiAccountDeliveryChannelStatistics#workbench-doc-change-demo) for a complete list.
