Registers a Container Service for Kubernetes (ACK) cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/AddContainerCluster)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/AddContainerCluster)

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

hbr:AddContainerCluster

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

Identifier

string

Yes

The ID of the cluster that you want to register.

cca8f35f0e0d84540b49d994511c2c87a

Name

string

No

The name of the cluster.

ack\_pv\_backup\_location

Description

string

No

The description of the cluster.

description ack pv backup

ClusterType

string

Yes

The type of the cluster. Only Container Service for Kubernetes (ACK) clusters are supported.

ACK

NetworkType

string

Yes

The network type of the cluster. Valid values:

-   **CLASSIC**: the classic network
-   **VPC**: a virtual private cloud (VPC)

VPC

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

1FCBC078-FFCB-542A-8555-566477679720

Token

string

The token that is used to register the Hybrid Backup Recovery (HBR) client in the cluster.

eyJhY2NvdW\*\*\*\*\*VnZpgXQC5A==

Success

boolean

Indicates whether the request is successful.

-   true: The request is successful.
-   false: The request fails.

true

Code

string

The HTTP status code. The status code 200 indicates that the request is successful.

200

Message

string

The message that is returned. If the request is successful, a value of successful is returned. If the request fails, an error message is returned.

successful

ClusterId

string

The ID of the cluster.

cc-00049slr9iuvvv6pp134

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1FCBC078-FFCB-542A-8555-566477679720",
  "Token": "eyJhY2NvdW*****VnZpgXQC5A==",
  "Success": true,
  "Code": 200,
  "Message": "successful",
  "ClusterId": "cc-00049slr9iuvvv6pp134"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
