Queries the information about a delivery channel within the current account.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetDeliveryChannel)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetDeliveryChannel)

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

resourcecenter:GetDeliveryChannel

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

No

The ID of the delivery channel.

dc-6q79dm4o9\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

DeliveryChannelDescription

string

The description of the delivery channel.

This is a description.

DeliveryChannelFilter

object

The effective scope of the delivery channel.

ResourceTypes

array

The resource types that are delivered.

string

The type of a resource.

ACS::VPC::VPC

DeliveryChannelId

string

The ID of the delivery channel.

dc-6q79dm4o9\*\*\*

DeliveryChannelName

string

The name of the delivery channel.

test-delivery-channel

RequestId

string

The request ID.

17502A1B-7026-5551-8E1C-CCABD0CBC\*\*\*

ResourceChangeDelivery

object

The settings for delivering resource configuration changes.

SlsProperties

object

The Simple Log Service (SLS) configurations.

OversizedDataOssTargetArn

string

The Alibaba Cloud Resource Name (ARN) of the Object Storage Service (OSS) bucket to which oversized data is delivered.

acs:oss:cn-hangzhou:1911422487776\*\*\*:resourcecenter-oss

TargetArn

string

The ARN of the delivery destination.

acs:log:cn-hangzhou: 1911422487776\*\*\*:project/delivery/logstore/resourcecenter-sls

TargetType

string

The type of the delivery destination.

SLS

Enabled

string

Indicates whether to deliver resource configuration changes.

Valid values:

-   true
    
-   false
    

true

ResourceSnapshotDelivery

object

The settings for the scheduled delivery of resource snapshots.

DeliveryTime

string

The time when resource snapshots are delivered.

09:00Z

TargetArn

string

The ARN of the delivery destination.

acs:oss:cn-hangzhou:1911422487776\*\*\*:resourcecenter-oss

TargetType

string

The type of the delivery destination.

OSS

CustomExpression

string

The custom expression.

select \* from resources limit 100;

SlsProperties

object

The SLS configurations.

OversizedDataOssTargetArn

string

The ARN of the OSS bucket to which oversized data is delivered.

acs:oss:cn-hangzhou:1911422487776\*\*\*:resourcecenter-oss

Enabled

string

Indicates whether to enable the scheduled delivery of resource snapshots.

Valid values:

-   true
    
-   false
    

true

## Examples

Success response

`JSON` format

```
{
  "DeliveryChannelDescription": "This is a description.",
  "DeliveryChannelFilter": {
    "ResourceTypes": [
      "ACS::VPC::VPC"
    ]
  },
  "DeliveryChannelId": "dc-6q79dm4o9***",
  "DeliveryChannelName": "test-delivery-channel",
  "RequestId": "17502A1B-7026-5551-8E1C-CCABD0CBC***",
  "ResourceChangeDelivery": {
    "SlsProperties": {
      "OversizedDataOssTargetArn": "acs:oss:cn-hangzhou:1911422487776***:resourcecenter-oss"
    },
    "TargetArn": "acs:log:cn-hangzhou: 1911422487776***:project/delivery/logstore/resourcecenter-sls",
    "TargetType": "SLS",
    "Enabled": "true"
  },
  "ResourceSnapshotDelivery": {
    "DeliveryTime": "09:00Z",
    "TargetArn": "acs:oss:cn-hangzhou:1911422487776***:resourcecenter-oss\n",
    "TargetType": "OSS",
    "CustomExpression": "select * from resources limit 100;",
    "SlsProperties": {
      "OversizedDataOssTargetArn": "acs:oss:cn-hangzhou:1911422487776***:resourcecenter-oss"
    },
    "Enabled": "true"
  }
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

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/GetDeliveryChannel#workbench-doc-change-demo) for a complete list.
