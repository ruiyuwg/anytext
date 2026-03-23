Modifies the information about a dedicated host, such as the name, description, and instance migration policy that is applied when the dedicated host fails.

## Operation description

## [](#usage-notes)[](#)Usage notes

-   All Elastic Compute Service (ECS) instances that are hosted on a dedicated host must be in the Stopped (`Stopped`) state before you can modify the CPU overcommit ratio of the dedicated host.
-   Changes to the CPU overcommit ratio of a dedicated host do not affect the running status of the dedicated host. After the CPU overcommit ratio is changed, the number of allocated vCPUs on the dedicated host cannot exceed the new total number of vCPUs. Otherwise, ECS instances that use the excess vCPUs cannot start.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDedicatedHostAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDedicatedHostAttribute)

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

ecs:ModifyDedicatedHostAttribute

update

\*DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

DedicatedHostCluster

`acs:ecs:{#regionId}:{#accountId}:ddhcluster/{#ddhclusterId}`

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

The ID of the region where the dedicated host resides. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

DedicatedHostId

string

Yes

The ID of the dedicated host.

dh-bp165p6xk2tlw61e\*\*\*\*

DedicatedHostName

string

No

The name of the dedicated host. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

testDedicatedHostName

Description

string

No

The description of the dedicated host. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

testDescription

ActionOnMaintenance

string

No

The policy for migrating the instances deployed on the dedicated host when the dedicated host fails or needs to be repaired online. Valid values:

-   Migrate: The instances are migrated to another physical machine and then restarted.
-   Stop: The instances are stopped. If the dedicated host cannot be repaired, the instances are migrated to another physical machine and then restarted.

If the dedicated host has cloud disks attached, the default value is Migrate.

If the dedicated host has local disks attached, the default value is Stop.

Migrate

NetworkAttributes.SlbUdpTimeout

integer

No

The timeout period for a UDP session between a Server Load Balancer (SLB) instance and the dedicated host. Unit: seconds. Valid values: 15 to 310.

60

NetworkAttributes.UdpTimeout

integer

No

The timeout period for a UDP session between a user and an Alibaba Cloud service on the dedicated host. Unit: seconds. Valid values: 15 to 310.

60

AutoPlacement

string

No

Specifies whether to add the dedicated host to the resource pool for automatic deployment. If you do not specify **DedicatedHostId** when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. Valid values:

-   on: adds the dedicated host to the resource pool for automatic deployment.
-   off: does not add the dedicated host to the resource pool for automatic deployment.

For information about automatic deployment, see [Functions and features](/help/en/dedicated-host/product-overview/functions-and-features).

on

DedicatedHostClusterId

string

No

The ID of the dedicated host cluster to which to assign the dedicated host.

dc-bp165p6xk2tlw61e\*\*\*\*

CpuOverCommitRatio

float

No

The CPU overcommit ratio. You can configure CPU overcommit ratios only for the following dedicated host types: g6s, c6s, and r6s. Valid values: 1 to 5.

The CPU overcommit ratio affects the number of available vCPUs on a dedicated host. You can use the following formula to calculate the number of available vCPUs on a dedicated host: Number of available vCPUs = Number of physical CPU cores × 2 × CPU overcommit ratio. For example, the number of physical CPU cores on each g6s dedicated host is 52. If you change the CPU overcommit ratio of a g6s dedicated host to 4, the number of available vCPUs on the dedicated host is 416. For scenarios that have minimal requirements for CPU stability or where CPU load is not heavy, such as development and test environments, you can increase the number of available vCPUs on a dedicated host by increasing the CPU overcommit ratio. This allows you to deploy more ECS instances of the same specifications on the dedicated host and reduce the unit deployment cost.

1

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

2A4EA075-CB5B-41B7-B0EB-70D339F6\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "2A4EA075-CB5B-41B7-B0EB-70D339F6****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDedicatedHostName.Malformed

The specified parameter DedicatedHostName is not valid.

\-

400

InvalidDescription.Malformed

The specified parameter Description is not valid.

The resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

400

InvalidParameter.SlbUdpTimeout

The specified value is invalid.

The specified SlbUdpTimeout parameter is invalid.

400

InvalidParameter.UdpTimeout

The specified value is invalid.

The specified UdpTimeout parameter is invalid.

400

InvalidDedicatedHostType.CpuOverCommitRatioNotSupported

%s

\-

400

InvalidCpuOverCommitRatio.ValueNotSupported

%s

\-

403

InvalidUser.Unauthorized

The user is not authorized

You are not authorized to perform this operation.

404

InvalidDedicatedHostId.NotFound

The specified DedicatedHostId does not exist.

\-

404

InvalidDedicatedHostClusterId.NotFound

The specified DedicatedHostClusterId does not exist.

\-

404

InvalidDedicatedHostClusterId.ExceedMaxSize

The specified Dedicated Host Cluster exceeded max capacity.

\-

404

InvalidDedicatedHostClusterId.NotMatch

The specified DedicatedHostCluster does not match request.

\-

404

InvalidParameter.ActionOnMaintenance

The specified ActionOnMaintenance does not exist.

\-

404

InvalidDedicatedHostId.NotFound

The specified Dedicated Host does not exist.

The specified dedicated host does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDedicatedHostAttribute?updateTime=2025-02-20#workbench-doc-change-demo)

2023-09-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDedicatedHostAttribute?updateTime=2023-09-04#workbench-doc-change-demo)
