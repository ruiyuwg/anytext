Queries the network information of a Tair (Redis OSS-compatible) instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeDBInstanceNetInfo)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeDBInstanceNetInfo)

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

kvstore:DescribeDBInstanceNetInfo

get

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

InstanceId

string

Yes

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

InstanceNetworkType

string

The network type. Valid values:

-   **CLASSIC**: The instance runs in a classic network.
-   **VPC**: The instance runs in a virtual private cloud (VPC).

CLASSIC

RequestId

string

The ID of the request.

FC77D4E1-2A7C-4F0B-A4CC-CE0B9C314B9B

NetInfoItems

array<object>

The network information about the instance.

InstanceNetInfo

object

DirectConnection

integer

Indicates whether the address is a private endpoint. Valid values:

-   **0**: The address is not a private endpoint.
-   **1**: The address is a private endpoint.

0

VSwitchId

string

The ID of the vSwitch.

vsw-bp1e7clcw529l773d\*\*\*\*

DBInstanceNetType

string

The network type of the instance. Valid values:

-   **0**: Internet
-   **1**: classic network
-   **2**: Virtual Private Cloud (VPC)

1

Upgradeable

string

The remaining validity period of the classic network endpoint. Unit: seconds.

**Note** \*\*A value of 0 indicates that the endpoint never expires.

0

ExpiredTime

string

The expiration time of the classic network endpoint. Unit: seconds.

5183779

ConnectionString

string

The endpoint of the instance.

r-bp1zxszhcgatnx\*\*\*\*.redis.rds.aliyuncs.com

IPType

string

The network type of the IP address. Valid values:

-   **Public**: Internet
-   **Inner**: classic network
-   **Private**: VPC

Inner

VPCInstanceId

string

The instance ID.

r-bp1ky7j6qc7umk\*\*\*\*

Port

string

The service port of the instance.

6379

VPCId

string

The ID of the VPC to which the instance belongs.

vpc-bp1nme44gek34slfc\*\*\*\*

IPAddress

string

The IP address.

172.16.49.\*\*\*

IsSlaveProxy

integer

Indicates whether the address is the endpoint for the secondary zone. Valid values: 1 and 0. A value of 1 indicates that the address is the endpoint for the secondary zone.

**Note** This parameter is returned only after you enable the multi-zone read/write splitting architecture for the instance.

1

## Examples

Sample success responses

`JSON`format

```
{
  "InstanceNetworkType": "CLASSIC",
  "RequestId": "FC77D4E1-2A7C-4F0B-A4CC-CE0B9C314B9B",
  "NetInfoItems": {
    "InstanceNetInfo": [
      {
        "DirectConnection": 0,
        "VSwitchId": "vsw-bp1e7clcw529l773d****",
        "DBInstanceNetType": 1,
        "Upgradeable": 0,
        "ExpiredTime": 5183779,
        "ConnectionString": "r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com",
        "IPType": "Inner",
        "VPCInstanceId": "r-bp1ky7j6qc7umk****",
        "Port": 6379,
        "VPCId": "vpc-bp1nme44gek34slfc****",
        "IPAddress": "172.16.49.***",
        "IsSlaveProxy": 1
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeDBInstanceNetInfo?updateTime=2025-03-25#workbench-doc-change-demo)

2023-12-27

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeDBInstanceNetInfo?updateTime=2023-12-27#workbench-doc-change-demo)

2022-07-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeDBInstanceNetInfo?updateTime=2022-07-27#workbench-doc-change-demo)
