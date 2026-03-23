Creates a restore job.

## Operation description

-   This operation creates a restore job from a selected backup snapshot to a specified restore destination.
    
-   The source and destination must have the same data source type.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateRestoreJob)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateRestoreJob)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

hbr:CreateRestoreJob

create

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RestoreType

string

Yes

The type of the destination data source. Valid values:

-   **ECS\_FILE**: Restores Elastic Compute Service (ECS) files.
    
-   **OSS**: Restores data to Object Storage Service (OSS).
    
-   **NAS**: Restores data to NAS.
    
-   **COMMON\_FILE\_SYSTEM**: Restores data to Cloud Parallel File System (CPFS).
    
-   **OTS\_TABLE**: Restores data to Tablestore.
    
-   **UDM\_ECS\_ROLLBACK**: Rolls back an entire ECS instance.
    

ECS\_FILE

VaultId

string

No

The ID of the backup repository to which the backup snapshot belongs.

v-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

SnapshotId

string

No

The ID of the backup snapshot.

s-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

SnapshotHash

string

No

The hash value of the backup snapshot.

f2fe...

SourceType

string

Yes

The type of the source data. Valid values:

-   **ECS\_FILE**: ECS files.
    
-   **OSS**: OSS data.
    
-   **NAS**: NAS data.
    
-   **COMMON\_FILE\_SYSTEM**: CPFS data.
    
-   **OTS\_TABLE**: Tablestore data.
    
-   **UDM\_ECS**: An entire ECS instance.
    

ECS\_FILE

Options

string

No

Specifies the parameters for the restore job.

{\\"includes\\":\[\],\\"excludes\\":\[\],\\"conflictPolicy\\":\\"OVERWRITE\_EXISTING\\"}

TargetFileSystemId

string

No

The ID of the destination file system. This parameter is valid only when **RestoreType** is set to **NAS**.

005494

TargetCreateTime

integer

No

The time when the destination file system was created. This parameter is valid only when **RestoreType** is set to **NAS**.

1554347313

TargetPath

string

No

The destination path for the restore. This parameter is valid only when **RestoreType** is set to **ECS\_FILE**.

C:\\

TargetBucket

string

No

The name of the destination OSS bucket. This parameter is valid only when **RestoreType** is set to **OSS**.

hbr-backup-oss

TargetPrefix

string

No

The prefix of the destination path for the objects that you want to restore. This parameter is valid only when **RestoreType** is set to **OSS**.

hbr

UdmDetail

object

No

The details of the entire instance backup. This parameter is a JSON string and is valid only when SourceType is set to UDM\_ECS. The content of this parameter varies based on the value of RestoreType:

-   **UDM\_ECS\_DISK**: Clones an ECS disk.
    -   **targetInstanceId**: string, required. The ID of the destination ECS instance to which the cloned disk is attached.
        
    -   **diskCategory**: string, required. The type of the destination disk.
        
    -   diskPerformanceLevel: string. The performance level of the disk when diskCategory is set to **essd**. Valid values are PL0, PL1, PL2, and PL3. The default value is PL1.
        
-   **UDM\_ECS\_DISK\_ROLLBACK**: Recovers an ECS disk.
    -   **sourceInstanceId**: string, required. The ID of the source ECS instance.
        
    -   forceRestore: boolean. The default value is false. Specifies whether to forcefully recover the disk. If you set **forceRestore** to true, the disk is recovered even if it has been uninstalled from the original ECS instance or attached to a new ECS instance. Use this option with caution.
        
    -   **bootAfterRestore**: boolean. The default value is false. Specifies whether to start the ECS instance after recovery.
        
-   **UDM\_ECS**: Clones an entire ECS instance.
    -   **bootAfterRestore**: boolean. The default value is false. Specifies whether to start the ECS instance after recovery.
        
    -   **diskCategory**: string, required. The type of the destination disk.
        
    -   diskPerformanceLevel: string. The performance level of the disk when diskCategory is set to **essd**. Valid values are PL0, PL1, PL2, and PL3. The default value is PL1.
        
    -   **instanceType**: string, required. The instance type of the destination ECS instance.
        
    -   **restoredNetwork**: string, required. The ID of the vSwitch for the destination ECS instance.
        
    -   **securityGroup**: string, required. The ID of the security group for the destination ECS instance.
        
    -   **restoredName**: string, required. The name of the destination ECS instance.
        
    -   **restoredHostName**: string, required. The hostname of the destination ECS instance.
        
    -   **allocatePublicIp**: boolean. The default value is false. Specifies whether to assign a public IP address to the destination ECS instance.
        
    -   **privateIpAddress**: string. The private IP address of the destination ECS instance. If you do not specify this parameter, a random IP address is assigned by DHCP.
        
-   **UDM\_ECS\_ROLLBACK**: Rolls back an entire ECS instance.
    -   **sourceInstanceId**: string, required. The ID of the source ECS instance.
        
    -   forceRestore: boolean. The default value is false. Specifies whether to forcefully recover the instance. If you set **forceRestore** to true, the disk is recovered even if it has been uninstalled from the original ECS instance or attached to a new ECS instance. Use this option with caution.
        
    -   **bootAfterRestore**: boolean. The default value is false. Specifies whether to start the ECS instance after recovery.
        

{\\"sourceInstanceId\\":\\"i-uf62te6pm3iwsyxyz66q\\",\\"bootAfterRestore\\":false}

UdmRegionId

string

No

The destination region for the recovery. This parameter is valid only when **SourceType** is set to **UDM\_ECS**.

cn-shanghai

TargetInstanceId

string

No

The ID of the destination ECS instance. This parameter is valid only when **RestoreType** is set to **ECS\_FILE**.

i-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Include

string

No

The path from which to restore all documents. The path cannot exceed 255 characters in length.

\["/home/alice/\*.pdf", "/home/bob/\*.txt"\]

Exclude

string

No

The paths of the files to exclude from the restore job. All files in the specified paths are not restored. The value is a JSON array of strings. Each path can be up to 255 characters in length.

\["/var", "/proc"\]

TargetContainer

string

No

The details of the destination container. This parameter is a JSON string.

{\\"host\\":\\"k8s-node1\\",\\"hostPrefix\\":\\"/var/lib/kubelet/pods/4acb31fe-8577-40ff-bc8c-eccabd835f73/volumes/kubernetes.io~csi/pvc-b050b00e-ef17-4792-aab1-1642355cf1f4/mount\\",\\"pvPath\\":\\"/\\"}

InitiatedByAck

boolean

No

Specifies whether the restore job is initiated by Container Service for Kubernetes (ACK). The default value is false.

false

TargetContainerClusterId

string

No

The ID of the destination container cluster.

cc-000amjsc7o1h9506oob7

TargetInstanceName

string

No

The name of the destination Tablestore instance.

instancename

TargetTableName

string

No

The name of the destination table in the Tablestore instance.

tablename

TargetTime

integer

No

The time to which you want to restore the Tablestore data. This is a UNIX timestamp. Unit: seconds.

1642496881

OtsDetail

[OtsTableRestoreDetail](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-struct-otstablerestoredetail)

No

The details of the Tablestore instance.

CrossAccountType

string

No

The type of the cross-account restore. Valid values:

-   SELF\_ACCOUNT: Restores data within the same account.
    
-   CROSS\_ACCOUNT: Restores data from a different account.
    

SELF\_ACCOUNT

CrossAccountUserId

integer

No

The ID of the source account that contains the backup data for a cross-account restore.

158975xxxxx4625

CrossAccountRoleName

string

No

The name of the RAM role that you create in the source account to perform a cross-account restore.

BackupRole

FailbackDetail

object

No

Specifies the details of an on-premises restore.

{"cpu":4,"extra":"{\\"restoreVMNamePrefix\\":\\"627-\\",\\"dataCenterName\\":\\"SDDC-Datacenter\\",\\"dataStoreId\\":\\"datastore-50\\",\\"folderId\\":\\"group-v49\\",\\"resourcePoolId\\":\\"resgroup-46\\",\\"locationName\\":\\"vcenter.pc-uf600a\*\*\*\*\*\*1.acvs.aliyuncs.com/SDDC-Datacenter/Workloads\\",\\"computeResourceName\\":\\"SDDC-Datacenter/Default\_c-uf600a\*\*\*\*\*\*\\",\\"dataStoreName\\":\\"Default\_c-uf600a\*\*\*\*\*\*/WorkloadDatastore\\",\\"networkMoReference\\":\\"DistributedVirtualPortgroup:dvportgroup-1001\\",\\"useHotAdd\\":false}","instanceId":"i-2vc\*\*\*\*\*\*z","memoryInMB":8192,"serverId":"0fdc0c86-eb92-4e05-91ab-eeaf9fb6ad01","uefiBoot":false}

Edition

string

No

The edition of Cloud Backup. Valid values:

-   **STANDARD**: Standard Edition. This is the default value.
    
-   **BASIC**: Basic Edition. This edition is available only for basic ECS file backup plans.
    

STANDARD

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

string

The return code. A value of 200 indicates that the call is successful.

200

Message

string

The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.

successful

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

RestoreId

string

The ID of the restore job.

r-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
  "Message": "successful",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Success": true,
  "RestoreId": "r-*********************"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateRestoreJob#workbench-doc-change-demo) for a complete list.
