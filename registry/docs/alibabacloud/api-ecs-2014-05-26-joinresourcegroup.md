Adds an Elastic Compute Service (ECS) resource or service to a resource group.

## Operation description

## [](#usage-notes)[](#)Usage notes

A resource is a cloud service entity that you create on Alibaba Cloud, such as an ECS instance, an elastic network interface (ENI), or an image. A resource group is a collection of infrastructure for projects, environments, or stacks. In a resource group, you can manage resources and monitor and run tasks in a centralized manner without the need to switch between Alibaba Cloud services.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/JoinResourceGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/JoinResourceGroup)

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

ecs:JoinResourceGroup

update

DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/{#keypairId}`

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}`

SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#SnapshotId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ResourceType

string

No

The type of the ECS resource. Valid values:

-   instance: instance
-   disk: Elastic Block Storage (EBS) device
-   snapshot: snapshot
-   image: image
-   securitygroup: security group
-   ddh: dedicated host
-   ddhcluster: dedicated host cluster
-   eni: ENI
-   keypair: SSH key pair
-   launchtemplate: launch template
-   command: Cloud Assistant command
-   activation: activation code for a Cloud Assistant managed instance
-   managedinstance: Cloud Assistant managed instance

The values are case-sensitive.

securitygroup

ResourceId

string

No

The ID of the resource. For example, if you set ResourceType to instance, set this parameter to the ID of the instance.

sg-bp67acfmxazb4p\*\*\*\*

RegionId

string

No

The region ID of the resource. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceGroupId

string

No

The ID of the resource group to which you want to add the instance.

rg-bp67acfmxazb4p\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

EntityExists.AssociatedTransferTasks

An associated transfer task is in progress. Try again later.

\-

403

MissingParameter

The input parameter "ResourceId" that is mandatory for processing this request is not supplied.

\-

403

MissingParameter

The input parameter "ResourceGroupId" that is mandatory for processing this request is not supplied.

\-

403

MissingParameter

The input parameter "RegionId" that is mandatory for processing this request is not supplied.

\-

403

InvalidResourceGroup.Duplicate

The ResourceId provided has a ResourceGroup in our records.

\-

403

InvalidRegionId.ResourceGroup

The specified region does not support resource group yet.

\-

403

InvalidStatus.ResourceGroup

You cannot perform an operation on a resource group that is being created or deleted.

Operation not allowed while resource group is being created or deleted.

404

InvalidResourceType.NotFound

The ResourceType provided does not exist in our records.

The specified resource type does not exist.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

404

InvalidResourceId.NotFound

The ResourceId provided does not exist in our records.

The specified resource does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-11-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/JoinResourceGroup?updateTime=2023-11-20#workbench-doc-change-demo)

2023-05-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/JoinResourceGroup?updateTime=2023-05-22#workbench-doc-change-demo)

2023-03-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/JoinResourceGroup?updateTime=2023-03-17#workbench-doc-change-demo)
