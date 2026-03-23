Creates Express Connect circuits in high reliability mode. This improves the stability of multiple Express Connect circuits and prevents service interruptions caused by single points of failures (SPOFs).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateHighReliablePhysicalConnection)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateHighReliablePhysicalConnection)

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

vpc:CreateHighReliablePhysicalConnection

create

\*All Resources

`*`

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

The region ID of the Express Connect circuit.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-shanghai

ClientToken

string

Yes

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmxazb4p\*\*\*\*

Tag

array<object>

No

The tags.

object

No

The tag.

Key

string

No

The key of tag N to add to the resource. Valid values of N: 1 to 20. The tag key cannot be an empty string.

The tag key can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter but cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The value of tag N to add to the resource. Valid values of N: 1 to 20. The tag value cannot be an empty string.

The tag value can be up to 128 characters in length and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter but cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

FinanceJoshua

HighReliableType

string

Yes

The high availability mode. Valid values:

-   **MultiApMultiDevice** : This mode supports two access points and two devices, and provides the maximum disaster recovery capability.
-   **MultiApSingleDevice** : This mode supports two access points and one device, and provides robust disaster recovery capability.
-   **SingleApMultiDevice** : This mode supports one access point and two devices, and is recommended for non-critical business test and development.
-   **SingleApMultiConnection** : This mode supports one access point, one device, and multiple physical ports. Only users in the whitelist can use this mode. To use this mode, contact your account manager.

MultiApMultiDevice

PortType

string

Yes

The port type. Valid values:

-   **100Base-T**: 100 Mbit/s copper Ethernet port
-   **1000Base-T**: 1,000 Mbit/s copper Ethernet port
-   **1000Base-LX**: 1,000 Mbit/s single-mode optical port (10 km)
-   **10GBase-T**: 10,000 Mbit/s copper Ethernet port
-   **10GBase-LR**: 10,000 Mbit/s single-mode optical port (10 km)
-   **40GBase-LR**: 40,000 Mbit/s single-mode optical port
-   **100GBase-LR**: 100,000 Mbit/s single-mode optical port

**Note** To use ports 40GBase-LR and 100GBase-LR, you must first contact your account manager.

1000Base-T

DeviceAdvancedCapacity

array

No

The advanced features of the device.

string

No

The advanced features of the device.

SubifRateLimit, DualStack

ApList

array<object>

Yes

The access points.

object

Yes

The access points.

Name

string

No

The name of the Express Connect circuit.

The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). It must start with a letter but cannot start with `http://` or `https://`.

test

Description

string

No

The description of the Express Connect circuit.

The description must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.

description

RegionId

string

Yes

The region ID of the Express Connect circuit.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-shanghai

LineOperator

string

Yes

The connectivity provider of the Express Connect circuit. Valid values:

-   **CT**: China Telecom.
-   **CU**: China Unicom.
-   **CM**: China Mobile.
-   **CO**: other connectivity providers in the Chinese mainland.
-   **Equinix**: Equinix.
-   **Other**: other connectivity providers outside the Chinese mainland.

CT

AccessPointId

string

Yes

The ID of the access point that is associated with the Express Connect circuit.

**Note** Two access points must be specified when **HighReliableType** is set to **MultiApMultiDevice** or **MultiApSingleDevice**. One access point must be specified when **HighReliableType** is set to **SingleApMultiDevice** or **SingleApMultiConnection**.

ap-cn-beijing-ft-A

PortNum

integer

No

The number of ports. Valid values: 2 to 16. This parameter is required only when **HighReliableType** is set to **SingleApMultiConnection**.

2

Type

string

No

The type of the Express Connect circuit. Default value: **VPC**.

VPC

Bandwidth

long

No

The maximum bandwidth of the hosted connection. Unit: Mbit/s.

Valid values: 50, 100, 200, 300, 400, 500, 1000, 2000, 4000, 5000, 8000, and 10000.

50

PeerLocation

string

No

The geographical location of the data center.

ram-test

CircuitCode

string

No

The circuit code of the Express Connect circuit, which is provided by the connectivity provider.

longtel001

DryRun

string

No

Specifies whether to perform a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

AcceptLanguage

string

No

The language to display the results. Valid values:

-   **zh-CN** (default): Chinese
-   **en-US**: English

zh-CN

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

PhysicalConnectionList

array<object>

The Express Connect circuits.

physicalConnectionList

object

The Express Connect circuit.

InstanceId

string

The ID of the Express Connect circuit.

pc-j5e5qqo616p81ncspbll1

RegionNo

string

The region ID of the Express Connect circuit.

cn-shanghai

RequestId

string

The request ID.

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

ErrorInfoList

array<object>

If the request fails the dry run, the following error codes and error messages may be returned:

-   pconn.high.reliable.dryrun.error.disable.outbound.data.transfer.billing. Billing for outbound data transfer is not enabled.
-   pconn.high.reliable.dryrun.error.incompatable.device.capacity. No device in the access point supports advanced features.
-   pconn.high.reliable.dryrun.error.quota.exceeded. The quota is insufficient.
-   pconn.high.reliable.dryrun.error.not.enough.resource. The access point resources are insufficient.

errorInfoList

object

ErrorCode

string

Error codes.

pconn.high.reliable.dryrun.error.disable.outbound.data.transfer.billing

ErrorMessage

string

The returned error message.

pconn.high.reliable.dryrun.error.disable.outbound.data.transfer.billing

InstanceId

string

The ID of the Express Connect circuit.

pc-j5e5qqo616p81ncspbll1

## Examples

Sample success responses

`JSON`format

```
{
  "PhysicalConnectionList": {
    "physicalConnectionList": [
      {
        "InstanceId": "pc-j5e5qqo616p81ncspbll1",
        "RegionNo": "cn-shanghai"
      }
    ]
  },
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0",
  "ErrorInfoList": {
    "errorInfoList": [
      {
        "ErrorCode": "pconn.high.reliable.dryrun.error.disable.outbound.data.transfer.billing",
        "ErrorMessage": "pconn.high.reliable.dryrun.error.disable.outbound.data.transfer.billing",
        "InstanceId": "pc-j5e5qqo616p81ncspbll1"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Invalid.Status

The device or interface status invalid, or has been used..

The Status parameter is set to an invalid value.

400

InvalidType.Malformd

The Type provided was invalid.

Type is set to an invalid value.

400

InvalidPeerLocation.Malformd

The PeerLocation provided was invalid.

PeerLocation is set to an invalid value.

400

InvalidLineOperator.Malformd

The LineOperator provided was invalid.

The value of the LineOperator parameter is invalid.

400

InvalidPortType.Malformd

The PortType provided was invalid.

The specified port type is invalid.

400

InvalidDescription.Malformed

The specifid ?Description? is not valid.

The error message returned because the specified resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

400

InvalidRedundantPhysicalConnectionId.NotFound

The RedundantPhysicalConnectionId does not found.

The specified redundant Express Connect circuit does not exist.

400

InvalidName.Malformed

The specified ?Name? is not valid.

The error message returned because the name format is invalid.

400

QuotaExceeded.pConnPerAP

Physical connection count per ap quota exceed.

The number of Express Connect circuits that are connected to the specified access point has reached the upper limit.

400

InvalidBandwidth

invalid physical connection banwidth.

The specified maximum bandwidth of the Express Connect circuit is invalid.

400

InvalidRedundantPhysicalConnection

redundant physical connection doesn't belong to current user.

The specified redundant Express Connect circuit does not belong to your Alibaba Cloud account.

400

InvalidRedundantPhysicalConnectionStatus

invalid redundant physical connection status.

The redundant Express Connect circuit is in an invalid state.

400

InvalidCircuitCode.Malformed

circuitCode is illegal.

The error message returned because CircuitCode is set to an invalid value.

400

QuotaExceeded.freePconnPerAP

free physical connections count excceeded.

The quota on Express Connect circuits is exhausted.

400

InvalidPhysicalConnectionOperator.Malformed

Specified PhysicalConnection Operator is not valid.

The operation on the Express Connect circuit is invalid.

400

InvalidPhysicalConnectionPortType.Malformed

Specified PhysicalConnection PortType is not valid.

The port type of the Express Connect circuit is invalid.

400

InvalidPhysicalConnectionBandwidth.Malformed

Specified PhysicalConnection Bandwidth is not valid.

The bandwidth of the Express Connect circuit is set to an invalid value.

400

IllegalParam.ClientToken

Token verify failed because client token length too long.

The ClientToken parameter is set to an invalid value.

400

InvalidPortType.NotFound

Specified port type is not found.

The portType parameter is not set.

400

OperationFailed.PconnTrafficNotEnable

The operation is failed because of PconnTrafficNotEnable.

Billing for outbound data transfer is disabled.

400

EcNotSupportRegion

High reliable physical connection is not support in this region.

Highly reliable physical lines are temporarily not supported for sale in the local region.

400

EcFailToGetAp

Fail to get access point details.

Unable to query the corresponding access point information.

400

EcNotEnoughResource

Insufficient access point resources.

Insufficient Access Point Resources

400

IllegalParam.UnsupportedAccessPoint

The access point type does not support the creation of a highly reliable physical connection.

You cannot create a high-availability Express Connect circuit for an access point of this type.

400

ResourceNotFound.AccessPointId

The specified resource of access point id is not found.

The current access point information does not exist. Please check and try again.

404

InvalidPortType.NotFound

There are no resources with the portType.

The specified port type is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-06-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateHighReliablePhysicalConnection?updateTime=2024-06-28#workbench-doc-change-demo)
