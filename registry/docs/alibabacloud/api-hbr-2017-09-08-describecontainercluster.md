Queries one or more container clusters that meet the specified conditions.

## Operation description

You can call this operation to query only Container Service for Kubernetes (ACK) clusters.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeContainerCluster)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeContainerCluster)

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

hbr:DescribeContainerCluster

get

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

PageNumber

integer

No

The number of the page to return. Pages start from page 1. Default value: 1.

1

PageSize

integer

No

The number of entries to return on each page. Valid values: 1 to 99. Default value: 10.

10

ClusterId

string

No

The cluster ID.

cc-000\*\*\*\*\*\*\*\*\*\*\*\*\*hg9

Identifier

string

No

The identifier of the container cluster. For a Container Service for Kubernetes (ACK) cluster, specify the cluster ID.

cca\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*87a

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

CC94B755-C3C2-5B9D-BD77-E0FE819A4DB2

Success

boolean

Indicates whether the call is successful. Valid values:

-   true: The call is successful.
-   false: The call fails.

true

Code

string

The HTTP status code. The status code 200 indicates that the call is successful.

200

Message

string

The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.

successful

PageSize

integer

The number of entries returned on each page. Valid values: 1 to 99. Default value: 10.

100

PageNumber

integer

The page number of the returned page. Pages start from page 1. Default value: 1.

1

TotalCount

long

The total number of returned entries.

8

Clusters

array<object>

The information of clusters.

Cluster

object

The information of clusters.

Token

string

The token that is used to register the Hybrid Backup Recovery (HBR) client in the cluster.

eyJhY2Nvd\*\*\*\*\*\*A/VnZpgXQC5A==

Description

string

The description.

description ack pv backup

ClusterType

string

The type of the cluster. Valid value: ACK, which indicates ACK clusters.

ACK

Identifier

string

The identifier of the cluster.

c5bbd0931a30947f4ab85efd19380a72d

NetworkType

string

The network type of the cluster. Valid values:

-   **CLASSIC**: the classic network
-   **VPC**: virtual private cloud (VPC)

VPC

Name

string

The name of the instance.

ack\_pv\_backup\_location

AgentStatus

string

The status of the client. Valid values:

-   **MISS**: The client is disconnected.
-   **UNKNOWN**: The client is in an unknown state.
-   **READY**: The client is ready.

READY

ClusterId

string

The ID of the cluster.

cl-0006gwppd0jtttpmb0ri

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "CC94B755-C3C2-5B9D-BD77-E0FE819A4DB2",
  "Success": true,
  "Code": 200,
  "Message": "successful",
  "PageSize": 100,
  "PageNumber": 1,
  "TotalCount": 8,
  "Clusters": [
    {
      "Token": "eyJhY2Nvd******A/VnZpgXQC5A==",
      "Description": "description ack pv backup",
      "ClusterType": "ACK",
      "Identifier": "c5bbd0931a30947f4ab85efd19380a72d",
      "NetworkType": "VPC",
      "Name": "ack_pv_backup_location",
      "AgentStatus": "READY",
      "ClusterId": "cl-0006gwppd0jtttpmb0ri"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-04-21

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribeContainerCluster?updateTime=2023-04-21#workbench-doc-change-demo)
