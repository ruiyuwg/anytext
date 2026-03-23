Binds one or more data sources to a backup policy.

## Operation description

-   You can bind data sources to only one policy in each request.
-   Elastic Compute Service (ECS) instances can be bound to only one policy.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/CreatePolicyBindings)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/CreatePolicyBindings)

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

hbr:CreatePolicyBindings

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

PolicyId

string

No

The ID of the backup policy.

po-000\*\*\*\*\*\*\*\*\*\*\*\*8ep

PolicyBindingList

array<object>

No

The data sources that you want to bind to the backup policy.

object

No

The details of the data sources that you want to bind to the backup policy.

PolicyBindingDescription

string

No

The description of the association.

Bind data sources to a backup policy

DataSourceId

string

No

The ID of the data source. The meaning of this parameter depends on the **SourceType** parameter. Valid values:

-   **UDM\_ECS**: the ID of the Elastic Compute Service (ECS) instance
-   **OSS**: the name of the Object Storage Service (OSS) bucket
-   **NAS**: the ID of the File Storage NAS (NAS) file system
-   **COMMON\_NAS**: the ID of the on-premises NAS file system
-   **ECS\_FILE**: the ID of the ECS instance
-   **File**: the ID of the Cloud Backup client
-   **COMMON\_FILE\_SYSTEM**: the ID of the Cloud Parallel File Storage (CPFS) backup data source

i-bp1\*\*\*\*\*\*\*\*\*\*\*\*dl8

Disabled

string

No

Specifies whether to disable the backup policy for the data source. Valid values:

-   true: disables the backup policy for the data source
-   false: enables the backup policy for the data source

true

SourceType

string

No

The type of the data source. Valid values:

-   **UDM\_ECS**: ECS instance
-   **OSS**: OSS bucket
-   **NAS**: NAS file system
-   **COMMON\_NAS**: on-premises NAS file system
-   **ECS\_FILE**: ECS file
-   **File**: on-premises file
-   **COMMON\_FILE\_SYSTEM**: CPFS file system

UDM\_ECS

Source

string

No

-   If the SourceType parameter is set to **OSS**, set the Source parameter to the prefix of the path to the folder that you want to back up. If you do not specify the Source parameter, the entire bucket (root directory) is backed up.
-   If the SourceType parameter is set to **ECS\_FILE** or **File**, set the Source parameter to the path to the files that you want to back up. If you do not specify the Source parameter, all paths are backed up.
-   This parameter is required if the SourceType parameter is set to **COMMON\_FILE\_SYSTEM**. This parameter specifies the path to be backed up. To back up the /src path, enter \["/src"\]. To back up the root path, enter \["/"\].

backup/

Include

string

No

This parameter is required only if you set the **SourceType** parameter to **ECS\_FILE**, **File**, **NAS**, **COMMON\_NAS**, or **COMMON\_FILE\_SYSTEM**. This parameter specifies the type of files to be backed up. All files of the specified type are backed up. The value can be up to 255 characters in length.

\[\\"\*.doc\\",\\"\*.xltm\\"\]

Exclude

string

No

This parameter is required only if you set the **SourceType** parameter to **ECS\_FILE**, **File**, **NAS**, **COMMON\_NAS**, or **COMMON\_FILE\_SYSTEM**. This parameter specifies the type of files that do not need to be backed up. No files of the specified type are backed up. The value can be up to 255 characters in length.

\[\\"\*.doc\\",\\"\*.xltm\\"\]

SpeedLimit

string

No

This parameter is required only if you set the **SourceType** parameter to **ECS\_FILE** or **File**. This parameter specifies the throttling rules. Format: `{start}{end}{bandwidth}`. Separate multiple throttling rules with vertical bars (|). The time ranges of the throttling rules cannot overlap.

-   **start**: the start hour.
-   **end**: the end hour.
-   **bandwidth**: the bandwidth. Unit: KB/s.

0:24:1024

AdvancedOptions

object

No

The advanced options.

UdmDetail

object

No

The advanced options for ECS instance backup.

ExcludeDiskIdList

array

No

The IDs of the disks that do not need to be protected. If the DiskIdList parameter is not empty, this parameter is ignored.

string

No

The ID of the disk that does not need to be protected.

d-bp1\*\*\*\*\*\*\*\*\*\*\*\*apo

DiskIdList

array

No

The IDs of the disks that need to be protected. If all disks need to be protected, this parameter is empty.

string

No

The ID of the disk that needs to be protected.

d-bp1\*\*\*\*\*\*\*\*\*\*\*\*apo

SnapshotGroup

boolean

No

Specifies whether to create a snapshot-consistent group. You can create a snapshot-consistent group only if all disks are Enterprise SSDs (ESSDs).

true

AppConsistent

boolean

No

Specifies whether to enable application consistency. You can enable application consistency only if all disks are ESSDs.

false

RamRoleName

string

No

This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies the name of the Resource Access Management (RAM) role that is required to create application-consistent snapshots.

AliyunECSInstanceForHbrRole

PreScriptPath

string

No

This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies the path of the pre-freeze scripts that are executed before application-consistent snapshots are created.

/tmp/prescript.sh

PostScriptPath

string

No

This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies the path of the post-thaw scripts that are executed after application-consistent snapshots are created.

/tmp/postscript.sh

EnableFsFreeze

boolean

No

This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies whether to enable Linux fsfreeze to put file systems into the read-only state before application-consistent snapshots are created. Default value: true.

true

TimeoutInSeconds

long

No

This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies the I/O freeze timeout period. Default value: 30. Unit: seconds.

30

EnableWriters

boolean

No

This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies whether to create application-consistent snapshots. Valid values:

-   true: creates application-consistent snapshots.
-   false: creates file system-consistent snapshots.

Default value: true.

true

OssDetail

object

No

The advanced options for Object Storage Service (OSS) backup.

InventoryId

string

No

The name of the OSS inventory. If this parameter is not empty, the OSS inventory is used for performance optimization.

-   If you want to back up more than 100 million OSS objects, we recommend that you use inventory lists to accelerate incremental backup. Storage fees for inventory lists are included into your OSS bills.
-   A certain amount of time is required for OSS to generate inventory lists. Before inventory lists are generated, OSS objects may fail to be backed up. In this case, you can back up the OSS objects in the next backup cycle.

oss-inventory-default

InventoryCleanupPolicy

string

No

Specifies whether the system deletes the inventory lists when a backup is completed. This parameter is valid only when OSS inventories are used. Valid values:

-   **NO\_CLEANUP**: does not delete inventory lists.
-   **DELETE\_CURRENT**: deletes the current inventory list.
-   **DELETE\_CURRENT\_AND\_PREVIOUS**: deletes all inventory lists.

NO\_CLEANUP

IgnoreArchiveObject

boolean

No

Do not prompt for archival type objects in task statistics and failed file lists.

true

FileDetail

object

No

The advanced options for file backup.

UseVSS

boolean

No

Specifies whether to enable the Volume Shadow Copy Service (VSS) feature. Valid values:

-   **true**: enables the feature.
-   **false**: disables the feature.

true

AdvPolicy

boolean

No

Specifies whether to use an advanced policy. Valid values:

-   **true**: uses the advanced policy.
-   **false**: does not use the advanced policy.

true

CommonNasDetail

object

No

The advanced options for on-premises NAS backup.

FullOnIncrementFail

boolean

No

Specifies whether the system performs full backup if incremental backup fails. Valid values:

-   **true**: The system performs full backup if incremental backup fails.
-   **false**: The system does not perform full backup if incremental backup fails.

true

FetchSliceSize

long

No

The size of backup shards (the number of files).

100000

ClusterId

string

No

The ID of the backup client group. When you perform on-premises NAS backup, Cloud Backup selects clients from the specified backup client group.

cl-000\*\*\*\*\*\*\*\*\*\*\*\*\*\*ggu

CommonFileSystemDetail

object

No

The advanced options for CPFS backup.

FullOnIncrementFail

boolean

No

Specifies whether the system performs full backup if incremental backup fails. Valid values:

-   **true**: The system performs full backup if incremental backup fails.
-   **false**: The system does not perform full backup if incremental backup fails.

true

FetchSliceSize

long

No

The size of backup shards (the number of files).

100000

CrossAccountType

string

No

Specifies whether to back up and restore data within the same Alibaba Cloud account or across Alibaba Cloud accounts. Default value: SELF\_ACCOUNT. Valid values:

-   **SELF\_ACCOUNT**: backs up data within the same Alibaba Cloud account.
-   **CROSS\_ACCOUNT**: backs up data across Alibaba Cloud accounts.

SELF\_ACCOUNT

CrossAccountUserId

long

No

The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

144\*\*\*\*\*\*\*\*\*\*732

CrossAccountRoleName

string

No

The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

hbrcrossrole

## Response parameters

Parameter

Type

Description

Example

object

CreatePolicyBindingsResponse

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

RequestId

string

The ID of the request.

82CC5B6C-72F7-5D39-92F6-67887DF9AD46

## Examples

Sample success responses

`JSON`format

```
{
  "Success": true,
  "Code": 200,
  "Message": "successful",
  "RequestId": "82CC5B6C-72F7-5D39-92F6-67887DF9AD46"
}
```

## Error codes

HTTP status code

Error code

Error message

400

PolicyAlreadyBoundWithThisDataSource

This datasource has already been bound with the policy, please use another one.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreatePolicyBindings?updateTime=2024-11-13#workbench-doc-change-demo)

2024-03-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreatePolicyBindings?updateTime=2024-03-13#workbench-doc-change-demo)
