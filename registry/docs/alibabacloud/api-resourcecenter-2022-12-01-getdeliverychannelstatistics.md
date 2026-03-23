Queries the statistics of a resource delivery channel in the current account.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetDeliveryChannelStatistics)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetDeliveryChannelStatistics)

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

resourcecenter:GetDeliveryChannelStatistics

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

**Parameter**

**Type**

**Description**

**Example**

object

The response parameters.

DeliveryChannelStatistics

object

The statistics of the delivery channel.

DeliveryChannelId

string

The ID of the delivery channel.

dc-6q79dm4o9\*\*\*

DeliveryChannelName

string

The name of the delivery channel.

test-delivery-channel

LatestChangeDeliveryTime

string

The last time a resource configuration change was delivered.

2025-06-03T16:05:15Z

LatestSnapshotDeliveryTime

string

The last time a scheduled resource snapshot was delivered.

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
    "DeliveryChannelName": "test-delivery-channel",
    "LatestChangeDeliveryTime": "2025-06-03T16:05:15Z",
    "LatestSnapshotDeliveryTime": "2025-06-03T16:00:00Z"
  },
  "RequestId": "80DF0610-504C-56D7-BDCF-7C92FD687***"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

404

NotExists.DeliveryChannelId

The DeliveryChannelId does not exist.

The DeliveryChannelId does not exist.

409

InvalidParameter.DeliveryChannelId

The specified parameter DeliveryChannelId is not valid.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/GetDeliveryChannelStatistics#workbench-doc-change-demo) for a complete list.
