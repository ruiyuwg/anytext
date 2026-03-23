Creates the endpoint that is used to connect to the dedicated proxy of an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL

### [](#references)[](#)References

**Note** Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

-   [Configure the dedicated proxy endpoint of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/manage-the-dedicated-proxy-endpoints-of-an-apsaradb-rds-for-mysql-instance)
-   [Configure the dedicated proxy endpoint of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-database-proxy-endpoints-of-an-apsaradb-rds-for-postgresql-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateDBProxyEndpointAddress)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateDBProxyEndpointAddress)

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

rds:CreateDBProxyEndpointAddress

create

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:DBProxyConnectStringNetType

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

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-t4n3axxxxx

DBProxyEndpointId

string

Yes

The proxy endpoint ID. You can call the DescribeDBProxyEndpoint operation to query the proxy endpoint ID.

ta9um4xxxxx

ConnectionStringPrefix

string

Yes

The prefix of the proxy endpoint Enter a custom prefix.

test1234

DBProxyNewConnectStringPort

string

No

The port number that is associated with the proxy endpoint.

-   If the instance runs MySQL, the default value is **3306**.
-   If the instance runs PostgreSQL, the default value is **5432**.

3306

DBProxyConnectStringNetType

string

Yes

The network type of the proxy endpoint. Valid values:

-   **Public**: Internet
-   **VPC**: Virtual Private Cloud (VPC)
-   **Classic**: classic network

Default value: **Classic**

Public

VPCId

string

No

The ID of the VPC to which the proxy endpoint belongs. You can call the DescribeDBInstanceAttribute operation to query the information.

**Note** This parameter must be specified when **DBProxyConnectStringNetType** is set to **VPC**.

vpc-bpxxxxxx

VSwitchId

string

No

The ID of the vSwitch that is associated with the specified VPC. You can call the DescribeDBInstanceAttribute operation to query the vSwitch ID.

**Note** This parameter must be specified when **DBProxyConnectStringNetType** is set to **VPC**.

vsw-bpxxxxxx

DBProxyEngineType

string

No

A reserved parameter. You do not need to specify this parameter.

normal

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmy\*\*\*\*\*

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

F2911788-25E8-42E5-A3A3-1B38D263F01E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "F2911788-25E8-42E5-A3A3-1B38D263F01E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidPort.Malformed

Specified port is not valid.

The port number is invalid.

400

NetTypeExists

Specified net type already existed.

400

IncorrectDBInstanceNetType

Current DB instance net type does not support this operation.

The operation failed. The operation is not supported for the network type of the RDS instance.

400

InvalidConnectionString.Duplicate

Specified connection string already exists in the Aliyun RDS.

The endpoint is duplicate. Specify a different endpoint.

400

InvalidConnVPCId

Specified conn vpc id is not valid.

The specified VPC ID is invalid.

400

InvalidVpcInstanceId

Specified vpc instance id is not valid.

The specified VPC ID is invalid.

400

InvalidDBInstanceName

Specified parameter DBInstanceName is not valid.

The value of the DBInstanceName parameter is invalid. Check that the value of this parameter is not null or an empty string.

400

InvalidVpcIdOrVswitchId.NotSupported

The specified vpcId or vSwitchId is not supported.

The VPC that is specified by the vpcId parameter or the vSwitch that is specified by the vSwitchId parameter is not supported. Check the values of these parameters.

400

InvalidPrivateIpAddress.Mismatch

Specified private IP address is not in the CIDR block of virtual switch.

The VPC endpoint is invalid.

400

InvalidVpcParameter

Specified VPCId VSwitchId or IPAddress or TunnelId is not valid.

The values of the VPCId parameter and the VSwitchId parameter are invalid. Check the values of these parameters.

400

InvalidBizType.Format

Specified biz type is not valid.

\-

400

InvalidVSwitchId.NotFound

Specified vSwitch is not found in specified VPC.

No vSwitch is found in the VPC.

400

InvalidVSwitchId.Mismatch

Specified instance and virtual switch are not in the same zone.

The RDS instance and the vSwitch are not in the same zone.

400

InvalidPrivateIpAddress.AlreadyUsed

The specified IP is already used.

The IP address has been used.

400

VswitchIpExhausted

No available ip in the specified vswitch.

No available IP address exists in the specified vSwitch.

400

MaxscaleNotSupport

Current custins can not support Maxscale.

This operation is not supported for instances with maxscale.

400

InvalidConnectionString.Format

Specified connection string is not valid.

The endpoint of the RDS instance is invalid. The prefix of the endpoint must be 5 to 40 characters in length.

400

Order.ComboInstanceNotAllowOperate

A package instance is not allowed to operate independently.

A package instance is not allowed to operate independently.

400

Price.PricingPlanResultNotFound

Pricing plan price result not found.

Pricing plan price result not found.

400

Order.NoRealNameAuthentication

You have not passed the real-name authentication and do not meet the purchase conditions. Please log in to the user center for real-name authentication.

You have not passed the real-name authentication and do not meet the purchase conditions. Please log in to the cost and cost for real-name authentication.

403

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation failed. The RDS instance is not in a ready state.

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

IncorrectDBInstanceEngine

Current DB Instance engine does not support this operation.

The operation failed. The operation is not supported for the database engine that is run on the RDS instance.

403

IncorrectKindCode

Current custins kindCode does not support this operation.

The operation failed. The operation is not supported for the database engine that is run on the RDS instance.

403

IncorrectDBInstanceConnType

Current DB instance conn type does not support this operation.

The operation is not supported for the connection type of the RDS instance.

404

Endpoint.NotFound

Specified endpoint is not found.

The port that is associated with the dedicated proxy endpoint cannot be found.

404

Maxscale.NotFound

The related maxscale instance is not found.

The operation failed. No associated MaxScale instances can be found.

404

IncorrectVswitchId

The specified parameter VSwitchId is not valid.

The vSwitch ID is invalid.

404

InvalidDBInstanceName.NotFound

Invalid DBInstanceId NotFound.

The instance ID cannot be found.

404

InvalidDBInstance.NotFound

Specified instance does not exist or not support.

The RDS instance cannot be found, is deleted, or does not support the operation.

404

InsufficientResourceCapacity

Current cluster resources are insufficient. Try again later.

Current cluster resources are insufficient. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBProxyEndpointAddress?updateTime=2025-03-24#workbench-doc-change-demo)

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBProxyEndpointAddress?updateTime=2025-02-27#workbench-doc-change-demo)

2024-12-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBProxyEndpointAddress?updateTime=2024-12-13#workbench-doc-change-demo)

2023-12-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBProxyEndpointAddress?updateTime=2023-12-19#workbench-doc-change-demo)

2023-06-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBProxyEndpointAddress?updateTime=2023-06-13#workbench-doc-change-demo)

2022-06-08

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBProxyEndpointAddress?updateTime=2022-06-08#workbench-doc-change-demo)
