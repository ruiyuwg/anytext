Creates a backup job.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateBackupJob)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateBackupJob)

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

hbr:CreateBackupJob

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

JobName

string

No

The name of the backup job.

k8s-backup-infra-20220131150046-hbr

SourceType

string

Yes

The type of the data source. Valid values:

-   **UDM\_ECS**: Elastic Compute Service (ECS) instance

CONTAINER

Retention

long

Yes

The retention period of the backup data. Unit: days.

15

InstanceId

string

No

This parameter is required only if you set the **SourceType** parameter to **UDM\_ECS**. This parameter specifies the ID of the ECS instance.

i-bp1xxxxxxxxxxxxxxysm

Detail

object

No

This parameter is required only if you set the **SourceType** parameter to **UDM\_ECS**. The value is a JSON string. Valid values:

-   doCopy: specifies whether to enable remote replication.
    
-   destinationRegionId: the destination region for remote replication.
    
-   destinationRetention: the retention period of the backup point for remote replication.
    
-   diskIdList: the IDs of the disks that are to be backed up. If this parameter is left empty, all disks are backed up.
    
-   snapshotGroup: specifies whether to use a snapshot-consistent group. This parameter is valid only if all disks of the ECS instance are Enterprise SSDs (ESSDs).
    
-   appConsistent: specifies whether to use the application-consistent backup feature. This parameter must be used with the preScriptPath and postScriptPath parameters.
    
-   preScriptPath: the path to the pre-freeze scripts.
    
-   postScriptPath: the path to the post-thaw scripts.
    
-   enableWriters: This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies whether to create application-consistent snapshots.
    
    -   true: creates application-consistent snapshots.
    -   false: creates file system-consistent snapshots.
-   enableFsFreeze: This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies whether to enable Linux fsfreeze to put file systems into the read-only state before application-consistent snapshots are created. Default value: true.
    
-   timeoutSeconds: This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies the I/O freeze timeout period. Default value: 30. Unit: seconds.
    

{ "doCopy": false, "destinationRegionId": "", "destinationRetention": null, "diskIdList": \[\], "snapshotGroup": false, "appConsistent": false, "enableWriters": true, "preScriptPath": "", "postScriptPath": "", "enableFsFreeze": true, "timeoutInSeconds": 60 }

BackupType

string

No

The backup type. This parameter is required only if you set the SourceType parameter to UDM\_ECS.

-   **COMPLETE**: full backup

INCREMENTAL

VaultId

string

No

The ID of the backup vault. This parameter is not required if you set the SourceType parameter to UDM\_ECS.

v-000xxxxxxxxxxxxxxy1v

SpeedLimit

string

No

This parameter does not take effect if you set the **SourceType** parameter to **UDM\_ECS**. This parameter specifies the throttling rules. Format: `{start}|{end}|{bandwidth}`. Separate multiple throttling rules with vertical bars (|). A specified time range cannot overlap with another time range.

-   **start**: the start hour.
-   **end**: the end hour.
-   **bandwidth**: the bandwidth. Unit: KB/s.

0:24:NaN

Options

string

No

You do not need to specify this parameter.

{"UseVSS":false}

Include

string

No

This parameter does not take effect if you set the **SourceType** parameter to **UDM\_ECS**. This parameter specifies the paths to the files that are backed up. The value can be up to 255 characters in length.

\["/home/alice/\*.pdf", "/home/bob/\*.txt"\]

Exclude

string

No

This parameter does not take effect if you set the **SourceType** parameter to **UDM\_ECS**. This parameter specifies the paths to the files that are excluded from the backup job. The value can be up to 255 characters in length.

\["/var", "/proc"\]

ClusterId

string

No

You do not need to specify this parameter.

cl-00068btz\*\*\*\*\*\*oku

ContainerResources

string

No

You do not need to specify this parameter.

\[{\\"resourceType\\":\\"PV\\",\\"backupMethod\\":\\"FILE\\",\\"resourceId\\":\\"674dac6d-74cd-47e9-a675-09e2f10d2c45\\",\\"resourceInfo\\":\\"{\\\\\\"pv\_name\\\\\\":\\\\\\"nas-650dac6d-74cd-47e9-a675-09e2f10d2c45\\\\\\",\\\\\\"pv\_size\\\\\\":\\\\\\"8Gi\\\\\\",\\\\\\"storage\_class\\\\\\":\\\\\\"alibabacloud-cnfs-nas\\\\\\",\\\\\\"pvc\_name\\\\\\":\\\\\\"data-postgresql-default-0\\\\\\",\\\\\\"namespace\\\\\\":\\\\\\"database\\\\\\"}\\",\\"host\\":\\"cn-huhehaote.192.168.13.133\\",\\"hostPrefix\\":\\"6f5e758e-8d35-4584-b9ce-8333adfc7547/volumes/kubernetes.io~csi/nas-670dac6d-74cd-47e9-a675-09e2f10d2c45/mount\\",\\"pvPath\\":\\"/\\"}\]

InitiatedByAck

boolean

No

false or left empty

false

ContainerClusterId

string

No

You do not need to specify this parameter.

cc-000xxxxxxxxxxxxxxi00

CrossAccountType

string

No

Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:

-   SELF\_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
-   CROSS\_ACCOUNT: Data is backed up across Alibaba Cloud accounts.

SELF\_ACCOUNT

CrossAccountUserId

long

No

The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

158975xxxxxx4625

CrossAccountRoleName

string

No

The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

BackupRole

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The HTTP status code. The status code 200 indicates that the request was successful.

200

Message

string

The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

RequestId

string

The request ID.

25F49E7B-7E39-542E-83AD-62E6E7F73786

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

JobId

string

The ID of the backup job.

job-000csy09q50a2jdcbwbo

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "25F49E7B-7E39-542E-83AD-62E6E7F73786",
  "Success": true,
  "JobId": "job-000csy09q50a2jdcbwbo"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
