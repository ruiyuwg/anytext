Modifies the configuration of a cluster component. This operation may affect your businesses. We recommend that you assess the impact, back up data, and perform the operation during off-peak hours.

## Operation description

You can call this API operation to modify the component parameters of an ACK Basic cluster or the control plane parameters of an ACK Pro cluster:

-   To view the component parameters of an ACK Basic cluster, call the DescribeClusterAddonMetadata API operation. For more information, see [Query the metadata of a cluster component](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-describeclusteraddonmetadata).
-   To view the control plane parameters of an ACK Pro cluster, see [Customize the control plane parameters of an ACK Pro cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-ack-pro-control-plane-component-parameters-1693464061811).

After you call this operation, the component may be redeployed and restarted. We recommend that you assess the impact before you call this operation.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/ModifyClusterAddon)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/ModifyClusterAddon)

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

cs:ModifyClusterAddon

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

-   cs:AddonName
-   cs:AddonNames

none

## Request syntax

```
POST /clusters/{cluster_id}/components/{component_id}/config HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

cluster\_id

string

Yes

The cluster ID.

c71d616e629ff40d5b42d7bb87770\*\*\*\*

component\_id

string

Yes

The component ID.

coredns

body

object

No

The component configuration.

config

string

No

The custom parameter settings that you want to use.

{"CpuRequest":"800m"}

Set `config` to a JSON string.

## Response parameters

Parameter

Type

Description

Example

The current API has no return parameters

## Examples

Sample success responses

`JSON`format

```
{}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
