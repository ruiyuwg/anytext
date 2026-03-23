Applies for a Letter of Authorization (LOA) for an Express Connect circuit.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ApplyPhysicalConnectionLOA)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ApplyPhysicalConnectionLOA)

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

vpc:ApplyPhysicalConnectionLOA

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

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

RegionId

string

Yes

The region ID of the Express Connect circuit.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

Bandwidth

integer

No

The bandwidth of the Express Connect circuit. Unit: Mbit/s.

Valid values: **2** to **10240**.

3

PeerLocation

string

No

The geographic location where the Express Connect circuit is deployed.

cn-hangzhou

InstanceId

string

Yes

The ID of the Express Connect circuit.

pc-bp1qrb3044eqi\*\*\*\*

CompanyName

string

Yes

The name of the customer company that requires the Express Connect circuit.

company

LineType

string

Yes

The type of the Express Connect circuit. Valid values:

-   **MSTP**: MSTP line
-   **MPLSVPN**: MPLSVPN line
-   **FIBRE**: fiber line
-   **Other**: other types

FIBRE

Si

string

Yes

The construction company.

company

ConstructionTime

string

Yes

The time when construction started. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.

2022-02-28T16:00:00Z

PMInfo

array<object>

No

The information about the construction engineer.

object

Yes

PMCertificateNo

string

Yes

The ID number of the construction engineer. You can specify the ID number of an ID card or an international passport.

You can configure information for up to 16 construction engineers.

5\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*9

PMName

string

Yes

The name of the construction engineer.

Zhangsan

PMCertificateType

string

Yes

The type of the identity document of the construction engineer. Valid values:

-   **IDCard**
-   **Passport**

IDCard

PMGender

string

Yes

The gender of the construction engineer.

Male

PMContactInfo

string

Yes

The contact information about the construction engineer.

1390000\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

A47BD386-7FDE-42C4-8D22-C6223D18AA1C

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "A47BD386-7FDE-42C4-8D22-C6223D18AA1C"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParam.AliUid

%s

\-

400

MissingParam.InstanceId

%s

\-

400

MissingParam.RegionNo

%s

\-

400

MissingParam.PMInfo

%s

\-

400

IllegalParam.LineOperator

%s

\-

400

IllegalParam.LineType

%s

\-

400

IllegalParam.PeerLocation

%s

\-

400

IllegalParam.PmCertificateType

%s

\-

400

IllegalParam.PmCertificateNo

%s

\-

400

IllegalParam.PmContactInfo

%s

\-

400

IllegalParam.PmGender

%s

\-

400

IllegalParam.PmName

%s

\-

400

IllegalParam.Si

%s

\-

400

InvalidConstructionTime.Malformed

%s

\-

400

InvalidInstanceId.NotFound

%s

\-

400

IncorrectStatus.PhysicalConnectionLOA

%s

\-

400

IncorrectStatus.PhysicalConnection

%s

\-

400

IllegalParam.CompanyName

%s

\-

400

OperationFailed.PconnTrafficNotEnable

The operation is failed because of PconnTrafficNotEnable.

Billing for outbound data transfer is disabled.

400

IllegalParam.Bandwidth

The param of bandwidth is illegal.

The Bandwidth parameter is set to an invalid value.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2021-11-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ApplyPhysicalConnectionLOA?updateTime=2021-11-17#workbench-doc-change-demo)
