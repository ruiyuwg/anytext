Modifies the configurations of an Express Connect circuit.

## Operation description

When you call this operation, take note of the following limits:

-   If an Express Connect circuit is in the **Initial**, **Enabled**, or **Rejected** state, you can modify the specifications of the Express Connect circuit and the ID of the redundant circuit.
-   If an Express Connect circuit is in the **Canceled**, **Allocating**, **AllocationFailed**, or **Terminated** state, you cannot modify the specifications of the Express Connect circuit.
-   After you modify the specifications of an Express Connect circuit that is in the **Rejected** state, the Express Connect circuit enters the **Initial** state.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifyPhysicalConnectionAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifyPhysicalConnectionAttribute)

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

vpc:ModifyPhysicalConnectionAttribute

update

\*PhysicalConnection

`acs:vpc:{#regionId}:{#accountId}:physicalconnection/{#PhysicalConnectionId}`

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

PhysicalConnectionId

string

Yes

The ID of the Express Connect circuit.

pc-119mfjzm\*\*\*\*\*\*

LineOperator

string

No

The connectivity provider of the Express Connect circuit. Valid values:

-   **CT**: China Telecom
-   **CU**: China Unicom
-   **CM**: China Mobile
-   **CO**: other connectivity providers in the Chinese mainland
-   **Equinix**: Equinix
-   **Other**: other connectivity providers outside the Chinese mainland

CT

bandwidth

integer

No

The bandwidth value for the connection over the Express Connect circuit. Unit: Mbit/s. Valid values: 2 to 10240.

5

PeerLocation

string

No

The geographical location of the data center.

XX Number, XX Road, XX Town, XX District, Hangzhou City, Zhejiang Province.

PortType

string

No

The port type of the Express Connect circuit. Valid values:

-   **100Base-T**: 100 Mbit/s copper Ethernet port
-   **1000Base-T** (default): 1,000 Mbit/s copper Ethernet port
-   **1000Base-LX**: 1,000 Mbit/s single-mode optical port (10 kilometers)
-   **10GBase-T**: 10,000 Mbit/s copper Ethernet port
-   **10GBase-LR**: 10,000 Mbit/s single-mode optical port (10 kilometers)
-   **40GBase-LR**: 40,000 Mbit/s single-mode optical port
-   **100GBase-LR**: 100,000 Mbit/s single-mode optical port

**Note** To use ports 40GBase-LR and 100GBase-LR, you must first contact your account manager.

1000Base-LX

RedundantPhysicalConnectionId

string

No

The ID of the redundant Express Connect circuit. The redundant Express Connect circuit must be in the **Allocated**, **Confirmed**, or **Enabled** state.

pc-119mfjzm7

Description

string

No

The description of the Express Connect circuit.

The description must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.

The description of the Express Connect circuit.

Name

string

No

The name of the Express Connect circuit.

The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter but cannot start with `http://` or `https://`.

Name

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

efefe566754h

CircuitCode

string

No

The circuit code of the Express Connect circuit. The circuit code is provided by the connectivity provider.

longtel001

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

013EE132-A109-4247-91B0-099A8FF49AD7

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "013EE132-A109-4247-91B0-099A8FF49AD7"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidLineOperator.Malformd

The LineOperator provided was invalid.

The value of the LineOperator parameter is invalid.

400

InvalidPeerLocation.Malformd

The PeerLocation provided was invalid.

PeerLocation is set to an invalid value.

400

InvalidPortType.Malformd

The PortType provided was invalid.

The specified port type is invalid.

400

InvalidName.Malformed

The specified ?Name? is not valid.

The error message returned because the name format is invalid.

400

InvalidStatus

invalid physical connection status.

The Express Connect circuit is in an invalid state.

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

InvalidPhysicalConnectionOperator.Malformed

Specified PhysicalConnection Operator is not valid.

The operation on the Express Connect circuit is invalid.

400

InvalidPhysicalConnectionBandwidth.Malformed

Specified PhysicalConnection Bandwidth is not valid.

The bandwidth of the Express Connect circuit is set to an invalid value.

400

InvalidDescription.Malformed

The specified Description is not valid.

Parameter Description value is illegal

400

OperationDenied.VPconn

The operation is not allowed because of VPconn.

The operation failed because the hosted connection does not support the operation.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId parameter is set to an invalid value. Specify a valid value and try again.

404

InvalidPhysicalConnectionId.NotFound

The PhysicalConnectionId provided does not exist in our records.

The Express Connect circuit does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-06-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyPhysicalConnectionAttribute?updateTime=2024-06-13#workbench-doc-change-demo)

2024-02-28

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyPhysicalConnectionAttribute?updateTime=2024-02-28#workbench-doc-change-demo)
