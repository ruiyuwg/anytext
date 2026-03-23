Applies for an Express Connect circuit.

## Operation description

You can apply for a dedicated Express Connect circuit for yourself or create a hosted connection for a tenant. After your application is approved, the Express Connect circuit changes to the **Initial** state. You can contact the connectivity provider to start construction.

When you call this operation, take note of the following limits:

-   If your Alibaba Cloud account has more than five Express Connect circuits that are not in the **Enabled** state, you cannot apply for another Express Connect circuit.
-   If your Alibaba Cloud account has an Express Connect circuit with overdue payments, you cannot apply for another Express Connect circuit.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreatePhysicalConnection)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreatePhysicalConnection)

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

vpc:CreatePhysicalConnection

create

\*PhysicalConnection

`acs:vpc:{#regionId}:{#accountId}:physicalconnection/*`

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

AccessPointId

string

Yes

The access point ID of the Express Connect circuit.

ap-cn-beijing-ft-A

Type

string

No

The type of Express Connect circuit. Default value: **VPC**.

VPC

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

bandwidth

integer

No

The maximum bandwidth of the hosted connection. Unit: Mbit/s.

Valid values: **50**, **100**, **200**, **300**, **400**, **500**, **1000**, **2000**, **4000**, **5000**, **8000**, and **10000**.

50

PeerLocation

string

No

The geographical location of the data center.

cn-hangzhou

PortType

string

No

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

RedundantPhysicalConnectionId

string

No

The ID of the redundant Express Connect circuit. The redundant Express Connect circuit must be in the **Allocated**, **Confirmed**, or **Enabled** state.

pc-119mfjzm\*\*\*\*

Description

string

No

The description of the Express Connect circuit.

The description must be 2 to 256 characters in length. The description must start with a letter but cannot start with `http://` or `https://`.

description

Name

string

No

The name of the Express Connect circuit.

The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`.

test

CircuitCode

string

No

The circuit code of the Express Connect circuit. The circuit code is provided by the connectivity provider.

longtel001

ClientToken

string

Yes

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-42665544\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group to which the Express Connect circuit belongs.

rg-acfmoiyermp\*\*\*\*

Tag

array<object>

No

The tag list.

object

No

Key

string

No

The key of tag to add to the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.

The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.

FinanceDept

Value

string

No

The tag value to add to the resource. You can specify up to 20 tag values The tag value can be an empty string.

The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.

FinanceJoshua

DeviceAdvancedCapacity

array

No

The advanced features of the device.

string

No

The advanced features. Valid values:

-   **SubifRateLimit**: bandwidth throttling based on virtual border routers (VBRs).
-   **DualStack**: IPv6
-   **BFD**: Bidirectional Forwarding Detection (BFD)
-   **CEN**: MP-BGP
-   **CENv6**: MP-BGPv6

CENv6

## Response parameters

Parameter

Type

Description

Example

object

The returned results.

PhysicalConnectionId

string

The ID of the Express Connect circuit.

pc-bp1ciz7ekd2grn1as\*\*\*\*

RequestId

string

The request ID.

8A6A5EC5-6F6C-4906-9689-56ACE58A13E0

## Examples

Sample success responses

`JSON`format

```
{
  "PhysicalConnectionId": "pc-bp1ciz7ekd2grn1as****",
  "RequestId": "8A6A5EC5-6F6C-4906-9689-56ACE58A13E0"
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

InvalidAccessPointId.NotEnabled

Invalid access point status.

\-

400

ResourceNotFound.AccessPointId

The specified resource of access point id is not found.

The current access point information does not exist. Please check and try again.

400

OperationFailed.PconnTrafficNotEnable

The operation failed because Outbound Data Transfer service is not activated.

The operation is failed because of PconnTrafficNotEnable.

404

InvalidPortType.NotFound

There are no resources with the portType.

The specified port type is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-07-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreatePhysicalConnection?updateTime=2024-07-15#workbench-doc-change-demo)

2024-06-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreatePhysicalConnection?updateTime=2024-06-28#workbench-doc-change-demo)

2023-10-12

API Description Update. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreatePhysicalConnection?updateTime=2023-10-12#workbench-doc-change-demo)

2023-03-14

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreatePhysicalConnection?updateTime=2023-03-14#workbench-doc-change-demo)

2021-11-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreatePhysicalConnection?updateTime=2021-11-25#workbench-doc-change-demo)
