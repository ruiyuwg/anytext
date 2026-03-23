Queries the information about a basic Global Accelerator (GA) instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ga/2019-11-20/GetBasicAccelerator)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ga/2019-11-20/GetBasicAccelerator)

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

ga:GetBasicAccelerator

get

\*BasicAccelerator

`acs:ga:{#regionId}:{#accountId}:ga/{#BasicAcceleratorId}`

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

The ID of the region to which the basic GA instance belongs. Set the value to **cn-hangzhou**.

cn-hangzhou

AcceleratorId

string

Yes

The ID of the basic GA instance that you want to query.

ga-bp17frjjh0udz4qz\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

Description

string

The description of the basic GA instance.

BasicAccelerator

RequestId

string

The ID of the request.

F591955F-5CB5-4CCE-A75D-17CF2085CE22

InstanceChargeType

string

The billing method of the basic GA instance. Only **PREPAY** is returned, which indicates the subscription billing method.

PREPAY

CreateTime

long

The timestamp that indicates when the basic GA instance is created.

1637734547

CrossDomainBandwidthPackage

object

The details about the cross-border acceleration bandwidth plan that is associated with the GA instance.

This array is returned only for GA instances that are created on the international site (alibabacloud.com).

Bandwidth

integer

The bandwidth value of the cross-border acceleration bandwidth plan. Unit: Mbit/s.

2

InstanceId

string

The ID of the cross-border acceleration bandwidth plan.

gbwp-bp1d8xk8bg139j0fw\*\*\*\*

Name

string

The name of the basic GA instance.

BasicAccelerator

BasicBandwidthPackage

object

The details about the basic bandwidth plan that is associated with the basic GA instance.

Bandwidth

integer

The bandwidth value of the basic bandwidth plan. Unit: Mbit/s.

2

BandwidthType

string

The type of the bandwidth that is provided by the basic bandwidth plan.

-   **Basic**: basic
-   **Enhanced**: enhanced
-   **Advanced**: premium

Basic

InstanceId

string

The ID of the basic bandwidth plan.

gbwp-bp1d8xk8bg139j0fw\*\*\*\*

State

string

The status of the basic GA instance.

-   **init**: The GA instance is being initialized.
-   **active**: The GA instance is available.
-   **configuring**: The GA instance is being configured.
-   **binding**: The GA instance is being associated.
-   **unbinding**: The GA instance is being disassociated.
-   **deleting**: The GA instance is being deleted.
-   **finacialLocked**: The GA instance is locked due to overdue payments.

active

ExpiredTime

long

The timestamp that indicates when the basic GA instance expires.

The time follows the UNIX time format. It is the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.

1640326547

CenId

string

The ID of the Cloud Enterprise Network (CEN) instance to which the basic GA instance is attached.

cen-hjkduu767hc\*\*\*\*

RegionId

string

The ID of the region where the basic GA instance is deployed.

cn-hangzhou

AcceleratorId

string

The ID of the basic GA instance.

ga-bp17frjjh0udz4qz\*\*\*\*

BasicEndpointGroupId

string

The ID of the endpoint group.

epg-bp1dmlohjjz4kqaun\*\*\*\*

BasicIpSetId

string

The ID of the acceleration region.

ips-bp11ilwqjdkjeg9r7\*\*\*\*

BandwidthBillingType

string

The bandwidth metering method.

-   **BandwidthPackage**: billed based on bandwidth plans.
-   **CDT**: billed by Cloud Data Transfer (CDT) and based on data transfer.
-   **CDT95**: billed by CDT and based on the 95th percentile bandwidth. This bandwidth metering method is available only to users that are included in the whitelist.

CDT

CrossPrivateState

string

Indicates whether cross-border acceleration is enabled.

-   **true**: yes
-   **false**: no

false

CrossBorderStatus

boolean

Indicates whether cross-border acceleration is enabled for the basic GA instance. Valid values:

-   **true**
-   **false**

false

ResourceGroupId

string

The ID of the resource group to which the basic GA instance belongs.

rg-aekzrnd67gq\*\*\*\*

Tags

array<object>

The tags of the basic GA instance.

Tags

object

The tags of the basic GA instance.

Key

string

The tag key.

tag-key

Value

string

The tag value.

tag-value

## Examples

Sample success responses

`JSON`format

```
{
  "Description": "BasicAccelerator",
  "RequestId": "F591955F-5CB5-4CCE-A75D-17CF2085CE22",
  "InstanceChargeType": "PREPAY",
  "CreateTime": 1637734547,
  "CrossDomainBandwidthPackage": {
    "Bandwidth": 2,
    "InstanceId": "gbwp-bp1d8xk8bg139j0fw****"
  },
  "Name": "BasicAccelerator",
  "BasicBandwidthPackage": {
    "Bandwidth": 2,
    "BandwidthType": "Basic",
    "InstanceId": "gbwp-bp1d8xk8bg139j0fw****"
  },
  "State": "active",
  "ExpiredTime": 1640326547,
  "CenId": "cen-hjkduu767hc****",
  "RegionId": "cn-hangzhou",
  "AcceleratorId": "ga-bp17frjjh0udz4qz****",
  "BasicEndpointGroupId": "epg-bp1dmlohjjz4kqaun****",
  "BasicIpSetId": "ips-bp11ilwqjdkjeg9r7****",
  "BandwidthBillingType": "CDT",
  "CrossPrivateState": "false",
  "CrossBorderStatus": false,
  "ResourceGroupId": "rg-aekzrnd67gq****",
  "Tags": [
    {
      "Key": "tag-key",
      "Value": "tag-value"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ga/2019-11-20/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-04-06

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ga/2019-11-20/GetBasicAccelerator?updateTime=2023-04-06#workbench-doc-change-demo)
