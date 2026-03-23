Generates a report for an installed Express Connect circuit.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CompletePhysicalConnectionLOA)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CompletePhysicalConnectionLOA)

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

vpc:CompletePhysicalConnectionLOA

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

You can use the client to generate the value, but you must ensure that it is unique among different requests.

**Note** If you do not set this parameter, the system automatically uses **RequestId** as **ClientToken**. **RequestId** of each API request may be different.

02fb3da4-230e-11e9-8e44-0016e04115b

RegionId

string

Yes

The region ID of the Express Connect circuit.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-shanghai

InstanceId

string

Yes

The ID of the Express Connect circuit.

pc-bp10tvlhnwkw\*\*\*\*

LineCode

string

No

The circuit code provided by the connectivity provider.

aaa111\*\*\*\*

LineLabel

string

No

The label of the cable in the data center.

bbb222\*\*\*\*

LineServiceProvider

string

No

The ISP. Valid values:

-   **China Telecom**
-   **China Unicom**
-   **China Mobile**
-   **Other ISPs in China**

Other ISPs in China

LineSPContactInfo

string

No

The contact information about line O&M.

1388888\*\*\*\*

FinishWork

boolean

No

Specifies whether the construction is completed. Valid values:

-   **true**
-   **false**

true

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

F8983C74-E068-4509-B442-89BD82C8F43B

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "F8983C74-E068-4509-B442-89BD82C8F43B"
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

InvalidInstanceId.NotFound

%s

\-

400

IncorrectStatus.PhysicalConnectionLOA

%s

\-

400

IllegalParam.LineCode

%s

\-

400

IllegalParam.LineLabel

%s

\-

400

OperationDenied.LOAStatusNotAllowComplete

The operation is not allowed because of LOAStatusNotAllowComplete.

The LOA status of the port does not allow completion reporting or line O&M.

400

IllegalParam.LineSPContactInfo

LineSPContactInfo is illegal.

The contact information of the operator's line operation and maintenance is illegal.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-11-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CompletePhysicalConnectionLOA?updateTime=2023-11-07#workbench-doc-change-demo)

2023-09-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CompletePhysicalConnectionLOA?updateTime=2023-09-08#workbench-doc-change-demo)

2023-09-07

API Description Update. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CompletePhysicalConnectionLOA?updateTime=2023-09-07#workbench-doc-change-demo)
