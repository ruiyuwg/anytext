## API standard and pre-built SDKs in multi-language

This product (`NAS/2017-06-26`) OpenAPI adopts an RPC\-style signature mechanism. For implementation details, please refer to the [Signature Mechanism documentation](/help/en/sdk/product-overview/v3-request-structure-and-signature).

To streamline development, we provide official SDKs for major programming languages. [Using the SDK](https://api.alibabacloud.com/api-tools/sdk/NAS?version=2017-06-26) allows you to call APIs directly without worrying about low-level details such as request signatures, significantly lowering the barrier to entry and reducing integration complexity.

## Custom signature

If your use case requires direct API integration with custom signatures, consult our technical support team first. Join our DingTalk support group (147535001692) to receive expert guidance.

## Before you begin

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. To call APIs securely, create a [Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API access only, configure its AccessKey pairs, and implement the principle of least privilege (PoLP) through RAM policies. Use the Alibaba Cloud account only when its permissions are explicitly required for specific scenarios.

## Open service

API

Title

Description

[OpenNASService](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-opennasservice-cpfs)

OpenNASService

Activates File Storage NAS.

## Regions

API

Title

Description

[DescribeZones](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describezones-cpfs)

DescribeZones

Queries all zones in a region and the file system types that are supported in each zone.

[DescribeRegions](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeregions-cpfs)

DescribeRegions

Queries the regions in which File Storage NAS is available.

## File systems

API

Title

Description

[CreateFileSystem](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createfilesystem-cpfs)

CreateFileSystem

Creates a file system.

[DeleteFileSystem](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-deletefilesystem-cpfs)

DeleteFileSystem

Deletes a file system.

[ModifyFileSystem](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-modifyfilesystem-cpfs)

ModifyFileSystem

Modifies the description of a file system.

[DescribeFileSystems](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describefilesystems-cpfs)

DescribeFileSystems

Queries file systems.

[UpgradeFileSystem](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-upgradefilesystem-cpfs)

UpgradeFileSystem

Scales up an Extreme NAS file system or a Cloud Parallel File Storage (CPFS) file system.

[DescribeFilesystemsAssociatedHpnZones](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describefilesystemsassociatedhpnzones-cpfs)

DescribeFilesystemsAssociatedHpnZones

Retrieves the list of HpnZones for a file system. Access performance is optimal when compute nodes are located in one of the associated HpnZones.

## Mount targets

API

Title

Description

[CreateMountTarget](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createmounttarget-cpfs)

CreateMountTarget

Creates a mount target.

[DeleteMountTarget](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-deletemounttarget-cpfs)

DeleteMountTarget

Deletes a mount target.

[DescribeMountTargets](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describemounttargets-cpfs)

DescribeMountTargets

Queries mount targets.

## Permission groups

API

Title

Description

[DescribeAccessGroups](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeaccessgroups-cpfs)

DescribeAccessGroups

Queries permission groups.

## Fileset

API

Title

Description

[CreateFileset](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createfileset-cpfs)

CreateFileset

Creates a fileset.

[DeleteFileset](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-deletefileset-cpfs)

DeleteFileset

Deletes a fileset.

[ModifyFileset](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-modifyfileset-cpfs)

ModifyFileset

Modifies a fileset.

[GetFileset](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-getfileset-cpfs)

GetFileset

Queries the information about the created fileset.

[DescribeFilesets](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describefilesets-cpfs)

DescribeFilesets

Queries the information about created filesets.

## Data flows

API

Title

Description

[CreateDataFlow](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createdataflow-cpfs)

CreateDataFlow

Creates a dataflow for a Cloud Parallel File Storage (CPFS) file system and source storage.

[DeleteDataFlow](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-deletedataflow-cpfs)

DeleteDataFlow

Deletes a dataflow.

[ModifyDataFlow](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-modifydataflow-cpfs)

ModifyDataFlow

Modifies the attributes of a dataflow.

[DescribeDataFlows](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describedataflows-cpfs)

DescribeDataFlows

Queries the dataflows of a CPFS file system.

[StopDataFlow](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-stopdataflow-cpfs)

StopDataFlow

Disables a dataflow.

[StartDataFlow](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-startdataflow-cpfs)

StartDataFlow

Enables a dataflow.

[CreateDataFlowTask](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createdataflowtask-cpfs)

CreateDataFlowTask

Creates a dataflow task.

[CancelDataFlowTask](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-canceldataflowtask-cpfs)

CancelDataFlowTask

Cancels a batch or streaming task that is in the Pending or Execute state.

[DescribeDataFlowTasks](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describedataflowtasks-cpfs)

DescribeDataFlowTasks

Queries the details of dataflow tasks.

[ApplyDataFlowAutoRefresh](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-applydataflowautorefresh-cpfs)

ApplyDataFlowAutoRefresh

Adds AutoRefresh configurations to a dataflow.

[CancelDataFlowAutoRefresh](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-canceldataflowautorefresh-cpfs)

CancelDataFlowAutoRefresh

Cancels the AutoRefresh configuration for a dataflow.

[ModifyDataFlowAutoRefresh](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-modifydataflowautorefresh-cpfs)

ModifyDataFlowAutoRefresh

Modifies an AutoRefresh configuration of a dataflow.

## Resource group

API

Title

Description

[ChangeResourceGroup](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-changeresourcegroup-cpfs)

ChangeResourceGroup

Changes the resource group to which a file system belongs.

## Protocol service

API

Title

Description

[CreateProtocolService](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createprotocolservice-cpfs)

CreateProtocolService

Creates a protocol service for a Cloud Parallel File Storage (CPFS) file system. The creation takes about 5 to 10 minutes.

[DeleteProtocolService](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-deleteprotocolservice-cpfs)

DeleteProtocolService

Deletes a protocol service of a Cloud Parallel File Storage (CPFS) file system.

[ModifyProtocolService](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-modifyprotocolservice-cpfs)

ModifyProtocolService

Modifies a protocol service. You can modify the description of a protocol service.

[DescribeProtocolService](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolservice-cpfs)

DescribeProtocolService

Queries the information about protocol services.

[CreateProtocolMountTarget](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createprotocolmounttarget-cpfs)

CreateProtocolMountTarget

Creates an export directory for a protocol service.

[DeleteProtocolMountTarget](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-deleteprotocolmounttarget-cpfs)

DeleteProtocolMountTarget

Deletes an export directory of a protocol service.

[ModifyProtocolMountTarget](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-modifyprotocolmounttarget-cpfs)

ModifyProtocolMountTarget

Modifies the export directory parameters of a protocol service. Only the description can be modified. The virtual private cloud (VPC) ID and vSwitch ID cannot be changed. To change these IDs, you must delete the export directory and create a new one.

[DescribeProtocolMountTarget](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolmounttarget-cpfs)

DescribeProtocolMountTarget

Queries the export directories of a protocol service.

[GetProtocolMountTarget](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-getprotocolmounttarget-cpfs)

GetProtocolMountTarget

Query the export directory information of the protocol service

## 其他-不发布文档

API

Title

Description

LDAP

LDAP

[CreateLDAPConfig](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createldapconfig-cpfs)

CreateLDAPConfig

Creates LDAP configurations.

[DeleteLDAPConfig](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-deleteldapconfig-cpfs)

{"title1":"DeleteLDAPConfig"}

{"summary1":""}
