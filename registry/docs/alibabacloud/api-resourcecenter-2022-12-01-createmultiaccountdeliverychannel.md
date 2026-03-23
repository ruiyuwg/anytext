Creates a multi-account delivery channel.

## Operation description

In Resource Center, you can create multi-account delivery channels by using the management account of your resource directory or the delegated administrator account of Resource Center to deliver resource configuration change events and scheduled resource snapshots within the members in your resource directory to Object Storage Service (OSS) or Simple Log Service (SLS). Then, other Alibaba Cloud services consume standardized resource information from OSS or Simple Log Service.

Scheduled resource snapshots support the following delivery scenarios:

-   Standard delivery: Leave the `ResourceSnapshotDelivery.CustomExpression` parameter empty.
    
-   Custom delivery: Set the `ResourceSnapshotDelivery.CustomExpression` parameter to an appropriate value.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/CreateMultiAccountDeliveryChannel)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/CreateMultiAccountDeliveryChannel)

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

resourcecenter:CreateMultiAccountDeliveryChannel

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

test-multi-account-delivery

DeliveryChannelDescription

string

No

The description of the delivery channel.

This is a description.

ResourceSnapshotDelivery

object

No

The configurations for scheduled delivery of resource snapshots.

DeliveryTime

string

No

The delivery time.

09:00Z

TargetArn

string

No

The Alibaba Cloud Resource Name (ARN) of the delivery destination. Valid values:

-   If you set `TargetType` to `OSS`, you must set `TargetArn` to the ARN of a OSS bucket that has a prefix of `resourcecenter-`. Example: `acs:oss:cn-hangzhou:191142248777****:resourcecenter-oss`.
    
-   If you set `TargetType` to `SLS`, you must set `TargetArn` to the ARN of a SLS Logstore that has a prefix of `resourcecenter-`. Example: `acs:log:cn-hangzhou: 191142248777****:project/delivery/logstore/resourcecenter-sls`.
    

acs:oss:cn-hangzhou:1911422487776\*\*\*:resourcecenter-oss

TargetType

string

No

The type of the delivery destination. Valid values:

-   `OSS` for standard delivery
    
-   `OSS` or `SLS` for custom delivery
    

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

The ARN of the delivery destination for oversized data.

If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. You must enter the ARN of an OSS bucket that has a prefix of `resourcecenter-`.

**Note**

This parameter takes effect only when you create a custom scheduled delivery task for resource snapshots. You do not need to specify this parameter when you create a standard scheduled delivery task for resource snapshots.

acs:oss:cn-hangzhou:1911422487776\*\*\*:resourcecenter-oss

ResourceChangeDelivery

object

No

The configurations for delivery of resource configuration change events.

SlsProperties

object

No

The SLS configurations.

OversizedDataOssTargetArn

string

No

The ARN of the delivery destination for oversized data.

If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. You must enter the ARN of an OSS bucket that has a prefix of `resourcecenter-`.

acs:oss:cn-hangzhou:1911422487776\*\*\*:resourcecenter-oss

TargetArn

string

No

The ARN of the delivery destination. Valid values:

-   If you set `TargetType` to `OSS`, you must set `TargetArn` to the ARN of a OSS bucket that has a prefix of `resourcecenter-`.
    
-   If you set `TargetType` to `SLS`, you must set `TargetArn` to the ARN of a SLS Logstore that has a prefix of `resourcecenter-`.
    

acs:log:cn-hangzhou: 1911422487776\*\*\*:project/delivery/logstore/resourcecenter-sls

TargetType

string

No

The type of the delivery destination.

Valid value: `SLS`.

SLS

DeliveryChannelFilter

object

Yes

The effective scope of the delivery channel.

AccountScopes

array

Yes

The account scopes of the delivery channel.

string

Yes

The account scope of the delivery channel. Valid values:

-   The ID of a resource directory. This value specifies that the resources of the management account and all members of the resource directory are delivered.
    
-   The ID of the Root folder. This value specifies that the resources of all members in the Root folder and its subfolders are delivered.
    
-   The ID of a folder. This value specifies that the resources of all members in the folder are delivered.
    
-   The ID of a member. This value specifies that the resources of the member are delivered.
    

For more information about how to obtain the ID of a resource directory, folder, member or the Root folder, see [GetResourceDirectory](/help/en/resource-management/api-getresourcedirectory), [ListFoldersForParent](/help/en/resource-management/api-listfoldersforparent), and [ListAccounts](/help/en/resource-management/api-listaccounts).

rd-r4\*\*\*\*

ResourceTypes

array

No

The effective resource type of the delivery channel.

string

No

The resource type. For more information, see [Alibaba Cloud services and resource types that are supported by Resource Center](/help/en/resource-management/resource-center/product-overview/services-that-work-with-resource-center).

To deliver all resource types supported by Resource Center, set this parameter to `ALL`.

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

The delivery channel ID.

dc-6q79dm4o9\*\*\*

RequestId

string

The request ID.

994BFEFE-4BB5-5A27-8917-4583DEEF2\*\*\*

## Examples

Success response

`JSON` format

```
{
  "DeliveryChannelId": "dc-6q79dm4o9***",
  "RequestId": "994BFEFE-4BB5-5A27-8917-4583DEEF2***"
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

The resource configuration change delivery target arn is invalid.

403

ExceedLimit.DeliveryChannelQuota

The number of delivery channels exceeds the limit.

The number of delivery channels exceeds the limit.

403

NoPermission.AccountScope

The operator is not permitted for this account scope.

The operator is not permitted for this account scope.

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

NoPermission.ResourceDirectory.MemberAccount

ResourceDirectory Member Account is not authorized to perform this operation.

409

InvalidParameter.CustomExpression

Error: %s.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/CreateMultiAccountDeliveryChannel#workbench-doc-change-demo) for a complete list.
