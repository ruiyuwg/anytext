Creates pay-as-you-go or subscription dedicated hosts. A dedicated host is a physical server dedicated to a single tenant. You can create Elastic Compute Service (ECS) instances on a dedicated host and view the attributes of a dedicated host.

## Operation description

Before you create a dedicated host, you can call the [DescribeAvailableResource](/help/en/ecs/api-describeavailableresource) operation to query the resources available in a specific region or zone.

We recommend that you understand the billing methods of resources before you create a dedicated host. You are charged for resources used by the created dedicated host. For more information, see [Billing overview](/help/en/dedicated-host/product-overview/billing-overview).

-   You can create up to 100 pay-as-you-go or subscription dedicated hosts at a time.
-   After a dedicated host is created, you can use the returned dedicated host ID as the value of a request parameter to call the [DescribeDedicatedHosts](/help/en/dedicated-host/developer-reference/api-describededicatedhosts) operation to query the state of the dedicated host.
-   After you submit a request to create a dedicated host, an error is returned if a specific parameter is invalid or if the requested resources are insufficient. For more information about error causes, see the "Error codes" section of this topic.
-   After a dedicated host is created, you can call the [ModifyInstanceDeployment](/help/en/dedicated-host/developer-reference/api-modifyinstancedeployment) operation to migrate ECS instances from a shared host to the dedicated host. You can also migrate ECS instances from another dedicated host to the created dedicated host.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/AllocateDedicatedHosts)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/AllocateDedicatedHosts)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

ecs:AllocateDedicatedHosts

create

\*DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The ID of the region in which to create the dedicated host. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Tag

array<object>

No

The tags to add to the dedicated host.

object

No

The tag to add to the dedicated host.

Key

string

No

The key of tag N to add to the dedicated host. Valid values of N: 1 to 20.

The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with acs: or aliyun.

Environment

Value

string

No

The value of tag N to add to the dedicated host. Valid values of N: 1 to 20.

The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

Production

ResourceGroupId

string

No

The ID of the resource group to which to assign the dedicated host.

rg-bp67acfmxazb4ph\*\*\*

ZoneId

string

No

The ID of the zone in which to create the dedicated host.

This parameter is empty by default. If you do not specify a zone, the system selects a zone.

cn-hangzhou-f

DedicatedHostName

string

No

The name of the dedicated host. The name must be 2 to 128 characters in length and can contain letters and digits. The name can contain colons (:), underscores (\_), periods (.), and hyphens (-).

myDDH

DedicatedHostClusterId

string

No

The ID of the dedicated host cluster in which to create the dedicated host.

dc-bp12wlf6am0vz9v2\*\*\*\*

DedicatedHostType

string

Yes

The dedicated host type. You can call the [DescribeDedicatedHostTypes](/help/en/dedicated-host/developer-reference/api-describededicatedhosttypes) operation to query the most recent list of dedicated host types.

ddh.c5

ActionOnMaintenance

string

No

The policy for migrating the instances deployed on the dedicated host when the dedicated host fails or needs to be repaired online. Valid values:

-   Migrate: The instances are migrated to another physical machine and then restarted.
    
    If cloud disks are attached to the dedicated host, the default value is Migrate.
    
-   Stop: The instances are stopped. If the dedicated host cannot be repaired, the instances are migrated to another physical machine and then restarted.
    
    If local disks are attached to the dedicated host, the default value is Stop.
    

Migrate

NetworkAttributes.SlbUdpTimeout

integer

No

The timeout period for a UDP session between a Server Load Balancer (SLB) instance and the dedicated host. Unit: seconds. Valid values: 15 to 310.

60

NetworkAttributes.UdpTimeout

integer

No

The timeout period for a UDP session between a user and an Alibaba Cloud service on the dedicated host. Unit: seconds. Valid values: 15 to 310.

60

Description

string

No

The description of the dedicated host. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

This-is-my-DDH

AutoPlacement

string

No

Specifies whether to add the dedicated host to the resource pool for automatic deployment. If you create an ECS instance on a dedicated host without specifying the **DedicatedHostId** parameter, Alibaba Cloud selects a dedicated host from the resource pool to host the instance. For more information, see [Automatic deployment](/help/en/dedicated-host/product-overview/functions-and-features). Valid values:

-   on: adds the dedicated host to the resource pool for automatic deployment.
-   off: does not add the dedicated host to the resource pool for automatic deployment.

Default value: on.

**Note** If you do not want to add the dedicated host to the resource pool for automatic deployment, set this parameter to off.

off

CpuOverCommitRatio

float

No

The CPU overcommit ratio. You can configure CPU overcommit ratios only for the following dedicated host types: g6s, c6s, and r6s. Valid values: 1 to 5.

The CPU overcommit ratio affects the number of available vCPUs on a dedicated host. You can use the following formula to calculate the number of available vCPUs on a dedicated host: Number of available vCPUs = Number of physical CPU cores × 2 × CPU overcommit ratio. For example, the number of physical CPU cores on each g6s dedicated host is 52. If you set the CPU overcommit ratio of a g6s dedicated host to 4, the number of available vCPUs on the dedicated host is 416. For scenarios that have minimal requirements on CPU stability or where CPU load is not heavy, such as development and test environments, you can increase the number of available vCPUs on a dedicated host by increasing the CPU overcommit ratio. This way, you can deploy more ECS instances of the same specifications on the dedicated host and reduce the unit deployment cost.

1

MinQuantity

integer

No

The minimum number of dedicated hosts to create. Valid values: 1 to 100.

**Note** If the number of available dedicated hosts is less than the minimum number of dedicated hosts to create, the dedicated hosts fail to be created.

2

ChargeType

string

No

The billing method of the dedicated host. Valid values:

-   PrePaid: subscription. If you set this parameter to PrePaid, make sure that you have sufficient account balance or credits. Otherwise, `InvalidPayMethod` is returned.
-   PostPaid: pay-as-you-go.

Default value: PostPaid.

PrePaid

Quantity

integer

No

The number of dedicated hosts that you want to create. Valid values: 1 to 100.

Default value: 1.

2

Period

integer

No

The subscription duration of the dedicated host. The `Period` parameter is required and takes effect only when the `ChargeType` parameter is set to `PrePaid`. Valid values:

-   Valid values when the PeriodUnit parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
-   Valid values when the PeriodUnit parameter is set to Year: 1, 2, 3, 4, and 5.

6

PeriodUnit

string

No

The unit of the subscription duration of the dedicated host. Valid values:

-   Month
-   Year

Default value: Month.

Month

AutoRenew

boolean

No

Specifies whether to automatically renew the subscription dedicated host.

**Note** The **AutoRenew** parameter takes effect only when the **ChargeType** parameter is set to PrePaid.

Default value: false

false

AutoRenewPeriod

integer

No

The auto-renewal duration of the dedicated host. The **AutoRenewPeriod** parameter takes effect and is required only when the **AutoRenew** parameter is set to true. Valid values:

Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, and 12.

1

AutoReleaseTime

string

No

The time when to automatically release the dedicated host. Specify the time in the `ISO 8601` standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

**Note**

-   It must be at least half an hour later than the current time.
    
-   It must be at most three years later than the current time.
    
-   If the value of seconds (ss) is not 00, it is automatically set to 00.
    

2019-08-21T12:30:24Z

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

E2A664A6-2933-4C64-88AE-5033D003\*\*\*\*

DedicatedHostIdSets

array

A list of dedicated host IDs.

DedicatedHostId

string

The dedicated host ID.

dh-bp67acfmxazb4d\*\*\*\*

OrderId

string

The ID of the order.

**Note** This parameter has a return value only when the dedicated host is a subscription one (request parameter **ChargeType set to PrePaid**).

23841229\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "E2A664A6-2933-4C64-88AE-5033D003****",
  "DedicatedHostIdSets": {
    "DedicatedHostId": [
      "dh-bp67acfmxazb4d****"
    ]
  },
  "OrderId": "23841229****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidInstanceType.ValueUnauthorized

The specified InstanceType is not authorized.

You are not authorized to use the specified instance type.

400

InvalidDescription.Malformed

The specified parameter "Description" is not valid.

The source description can be 2 to 256 characters in length. It cannot start with http:// and https://.

400

InvalidParameter.Conflict

The specified region and cluster do not match.

The specified region and cluster do not correspond to each other.

400

InvalidAutoRenewPeriod.ValueNotSupported

The specified autoRenewPeriod is not valid.

The specified AutoRenewPeriod parameter is invalid.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidDedicatedHostType.ValueNotSupported

%s

\-

400

RegionUnauthorized

%s

\-

400

Zone.NotOnSale

%s

The requested resources are unavailable in the specified zone. %s is a variable. An error message is dynamically returned based on call conditions.

400

OperationDenied

The specified DedicatedHostType or Zone is not available or not authorized.

The specified dedicated host type or zone is unavailable or you are not authorized to manage the resources.

400

InvalidPeriodUnit.ValueNotSupported

The specified parameter PeriodUnit is not valid.

The specified PeriodUnit parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

QuotaExceed.AfterpayDedicatedHost

The maximum number of Pay-As-You-Go DedicatedHosts is exceeded: %s

\-

400

InvalidChargeType.ValueNotSupported

ChargeType is not valid

The billing method is invalid.

400

InvalidParameter.SlbUdpTimeout

The specified value is invalid.

The specified SlbUdpTimeout parameter is invalid.

400

InvalidParameter.UdpTimeout

The specified value is invalid.

The specified UdpTimeout parameter is invalid.

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

400

InvalidParameter.Quantity

The specified Quantity is invalid.

The specified quantity parameter (Quantity) is invalid.

400

InvalidDedicatedHostPrice.NotFound

The specified Dedicated price is not found.

The specified dedicated host configuration request failed.

400

InvalidDedicatedHostType.CpuOverCommitRatioNotSupported

%s

\-

400

InvalidCpuOverCommitRatio.ValueNotSupported

%s

\-

400

InvalidDedicatedHostType.ValueNotSupported

The specified HostType does not exist or beyond the permitted range.

The specified HostType is illegal (beyond the permitted range).

403

OperationDenied

The creation of Host to the specified Zone is not allowed.

Dedicated hosts cannot be created in the specified zone.

403

OperationDenied.NoStock

The requested resource is sold out in the specified zone; try other types of resources or other regions and zones.

The requested resources are insufficient.

403

OperationDenied

Sales of this resource are temporarily suspended in the specified region; please try again later.

The requested resource is unavailable in the specified region. Try again later.

403

NodeControllerUnavailable

The Node Controller is temporarily unavailable.

The node controller is unavailable.

403

OperationDenied

The resource is out of usage.

Insufficient resource inventory

403

InvalidParameter.ResourceOwnerAccount

ResourceOwnerAccount is Invalid.

The specified ResourceOwnerAccount parameter is invalid.

403

InvalidUserData.Forbidden

User not authorized to input the parameter "UserData", please apply for permission "UserData"

\-

403

Zone.NotOpen

The specified zone is not granted to you to buy resources yet.

You are not authorized to purchase resources in the specified zone.

403

Zone.NotOnSale

The specified zone is not available for purchase.

The requested resources are unavailable in the specified zone. Try a different instance type or select a different region or zone.

403

InvalidResourceType.NotSupported

%s

The specified resource combination does not exist. Change to another zone or specification.

403

InvalidDedicatedHostType.ValueNotSupported

The specified DedicatedHostType does not exist or beyond the permitted range.

\-

403

InvalidDedicatedHostType.ZoneNotSupported

The specified zone does not support this dedicatedHostType.

\-

403

InvalidUserData.Base64FormatInvalid

The specified UserData is not valid

An error occurred when the specified UserData parameter is encoded.

403

InvalidParameter.NotMatch

%s

A specified parameter is invalid. Check whether parameter conflicts exist.

403

Account.Arrearage

Your account has been in arrears.

Your account does not have enough balance. Please add funds to your account.

404

InvalidZoneId.NotFound

The ZoneId provided does not exist in our records.

The specified zone ID does not exist.

404

OperationDenied

Another Host has been creating

Another host is being created.

404

PaymentMethodNotFound

No payment method has been registered on the account.

You have not configured a payment method for your account.

404

InvalidDedicatedHostName.Malformed

The specified parameter DedicatedHostName is not valid.

\-

404

InvalidZoneId.NotFound

The specified ZoneId does not exist.

The specified zone ID does not exist.

404

InvalidDedicatedHostClusterId.NotFound

The specified DedicatedHostClusterId does not exist.

\-

404

InvalidDedicatedHostClusterId.ExceedMaxSize

The specified Dedicated Host Cluster exceeded max capacity.

\-

404

InvalidParameter.ActionOnMaintenance

The specified ActionOnMaintenance does not exist.

\-

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

500

InternalError

%s

An internal error has occurred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AllocateDedicatedHosts?updateTime=2025-03-18#workbench-doc-change-demo)

2025-02-24

API Description Update. The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AllocateDedicatedHosts?updateTime=2025-02-24#workbench-doc-change-demo)

2025-02-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AllocateDedicatedHosts?updateTime=2025-02-20#workbench-doc-change-demo)

2023-09-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AllocateDedicatedHosts?updateTime=2023-09-04#workbench-doc-change-demo)
