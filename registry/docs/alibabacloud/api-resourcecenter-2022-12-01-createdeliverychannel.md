Creates a resource delivery channel for the current account.

## Operation description

Resource delivery supports the scheduled delivery of resource snapshots and the delivery of resource configuration changes.

Scheduled delivery of resource snapshots supports two scenarios:

-   Standard delivery: Leave the `ResourceSnapshotDelivery.CustomExpression` parameter empty.
    
-   Custom delivery: Set the `ResourceSnapshotDelivery.CustomExpression` parameter to an appropriate value.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/CreateDeliveryChannel)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/CreateDeliveryChannel)

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

resourcecenter:CreateDeliveryChannel

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

DeliveryChannelName

string

Yes

The name of the delivery channel.

test-delivery

DeliveryChannelDescription

string

No

The description of the delivery channel.

测试投递

ResourceSnapshotDelivery

object

No

The scheduled delivery of resource snapshots.

DeliveryTime

string

No

The delivery time.

09:00Z

TargetArn

string

No

The Alibaba Cloud Resource Name (ARN) of the destination. Valid values:

-   If you set `TargetType` to `OSS`, set `TargetArn` to the ARN of an Object Storage Service (OSS) bucket that has the `resourcecenter-` prefix. Example: `acs:oss:cn-hangzhou:191142248777****:resourcecenter-oss`.
    
-   If you set `TargetType` to `SLS`, set `TargetArn` to the ARN of a Simple Log Service (SLS) Logstore that has the `resourcecenter-` prefix. Example: `acs:log:cn-hangzhou: 191142248777****:project/delivery/logstore/resourcecenter-sls`.
    

acs:log:cn-hangzhou: 191142248777\*\*\*\*:project/delivery/logstore/resourcecenter-sls

TargetType

string

No

The type of the destination. Valid values:

-   For standard scheduled delivery, set this parameter to `OSS`.
    
-   For custom scheduled delivery, set this parameter to `OSS` or `SLS`.
    

**Valid values:**

-   SLS :
    
    SLS
    
-   OSS :
    
    OSS
    

OSS

CustomExpression

string

No

The custom expression.

select \* from resources limit 100;

SlsProperties

object

No

The SLS configurations.

OversizedDataOssTargetArn

string

No

The ARN of the destination OSS bucket for oversized files.

If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the `resourcecenter-` prefix.

**Note**

This parameter is valid only for custom scheduled delivery. You do not need to specify this parameter for standard scheduled delivery.

acs:oss:cn-hangzhou:191142248777\*\*\*\*:resourcecenter-oss

ResourceChangeDelivery

object

No

The delivery of resource configuration changes.

SlsProperties

object

No

The SLS configurations.

OversizedDataOssTargetArn

string

No

The ARN of the destination OSS bucket for oversized files.

If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the `resourcecenter-` prefix.

acs:oss:cn-hangzhou:191142248777\*\*\*\*:resourcecenter-oss

TargetArn

string

No

The ARN of the destination. Valid values:

-   If you set `TargetType` to `OSS`, set `TargetArn` to the ARN of an OSS bucket that has the `resourcecenter-` prefix.
    
-   If you set `TargetType` to `SLS`, set `TargetArn` to the ARN of an SLS Logstore that has the `resourcecenter-` prefix.
    

acs:log:cn-hangzhou: 191142248777\*\*\*\*:project/delivery/logstore/resourcecenter-sls

TargetType

string

No

The type of the destination.

Valid value: `SLS`.

**Valid values:**

-   SLS :
    
    SLS
    

SLS

DeliveryChannelFilter

object

Yes

The effective scope of the delivery channel.

ResourceTypes

array

No

The list of resource types to be delivered.

string

No

The resource type to be delivered. For more information, see [Services that work with Resource Center](/help/en/resource-management/resource-center/product-overview/services-that-work-with-resource-center).

To deliver all resource types supported by Resource Center, enter `ALL`.

ACS::VPC::VPC

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

DeliveryChannelId

string

The ID of the delivery channel.

dc-0bzhsqpn\*\*\*\*

RequestId

string

The request ID.

42A89312-0616-591E-B614-07BC87D3D

## Examples

Success response

`JSON` format

```
{
  "DeliveryChannelId": "dc-0bzhsqpn****",
  "RequestId": "42A89312-0616-591E-B614-07BC87D3D"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NoPermission.ServiceLinkedRole

The current user does not have permission to create servicelinkedrole. Please contact the Alibaba Cloud account or administrator to authorize custom policy: Service Name: rmc.resourcemanager.aliyuncs.com, Action: ram:CreateServiceLinkedRole.

400

InvalidParameter.ResourceChangeDelivery.TargetArn

The specified parameter ResourceChangeDelivery.TargetArn is not valid.

The specified parameter ResourceChangeDelivery.TargetArn is not valid.

403

ExceedLimit.DeliveryChannelQuota

The number of delivery channels exceeds the limit.

The number of delivery channels exceeds the limit.

403

NoPermission.ResourceType

The operator is not permitted for this resource type.

The operator is not permitted for this resource type.

404

MissingParameter.DeliveryName

The specified parameter DeliveryName is missing.

404

MissingParameter.OverSizedDataOssTargetArn

The specified parameter OverSizedDataOssTargetArn is missing.

404

MissingParameter.DeliveryFilter

The specified parameter DeliveryFilter is missing.

404

MissingParameter.DeliveryFilter.AccountScopes

The specified parameter DeliveryFilter.AccountScopes is missing.

404

MissingParameter.ResourceSnapshotDelivery.TargetType

The specified parameter ResourceSnapshotDelivery.TargetType is missing.

404

MissingParameter.ResourceChangeDelivery.TargetArn

The specified parameter ResourceChangeDelivery.TargetArn is missing.

404

MissingParameter.ResourceChangeDelivery.TargetType

The specified parameter ResourceChangeDelivery.TargetType is missing.

404

MissingParameter.ResourceSnapshotDelivery.TargetArn

The specified parameter ResourceSnapshotDelivery.TargetArn is missing.

404

MissingParameter.ResourceDeliveryConfiguration

The parameter ResourceSnapshotDelivery or ResourceChangeDelivery must be specified.

404

MissingParameter.ResourceSnapshotDelivery.CustomExpression

The specified parameter ResourceSnapshotDelivery.CustomExpression is missing.

404

MissingParameter.ResourceSnapshotDelivery.DeliveryTime

The specified parameter ResourceSnapshotDelivery.DeliveryTime is missing.

404

MissingParameter.DeliveryConfiguration

The parameter ConfigurationSnapshotDelivery or ConfigurationChangeDelivery must be specified.

You must configure the ConfigurationSnapshotDelivery or ConfigurationChangeDelivery parameter.

409

AlreadyExists.DeliveryName

The DeliveryName Name already exists.

The delivery name already exists.

409

InvalidParameter.DeliveryName

The specified parameter DeliveryName is not valid.

409

InvalidParameter.DeliveryDescription

The specified parameter DeliveryDescription is not valid.

409

InvalidParameter.OverSizedDataOssTargetArn

The specified parameter OverSizedDataOssTargetArn is not valid.

409

InvalidParameter.DeliveryFilter.AccountScopes

The specified parameter DeliveryFilter.AccountScopes is not valid.

The specified parameter DeliveryFilter.AccountScopes is not valid.

409

InvalidParameter.DeliveryFilter.ResourceTypes

The specified parameter DeliveryFilter.ResourceTypes is not valid.

409

InvalidParameter.ConfigurationSnapshotDelivery.TargetType

The specified parameter ConfigurationSnapshotDelivery.TargetType is not valid.

409

InvalidParameter.ResourceSnapshotDelivery.TargetArn

The specified parameter ResourceSnapshotDelivery.TargetArn is not valid.

409

InvalidParameter.ResourceSnapshotDelivery.DeliveryTime

The specified parameter ResourceSnapshotDelivery.DeliveryTime is not valid.

409

InvalidParameter.ResourceSnapshotDelivery.TargetType

The specified parameter ResourceSnapshotDelivery.TargetType is not valid.

409

InvalidParameter.ResourceChangeDelivery.TargetType

The specified parameter ResourceChangeDelivery.TargetType is not valid.

409

InvalidParameter.CustomExpression

Error: %s.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/CreateDeliveryChannel#workbench-doc-change-demo) for a complete list.
