Updates the association between a backup policy and a data source.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/UpdatePolicyBinding)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/UpdatePolicyBinding)

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

hbr:UpdatePolicyBinding

update

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

PolicyId

string

Yes

The ID of the backup policy.

po-000\*\*\*\*\*\*\*\*\*\*\*\*ky9

DataSourceId

string

Yes

The ID of the data source.

i-bp1\*\*\*\*\*\*\*\*\*\*\*\*dtv

SourceType

string

Yes

The type of the data source. Valid value:

-   **UDM\_ECS**: ECS instance backup
    

UDM\_ECS

PolicyBindingDescription

string

No

The description of the policy binding.

po-000\*\*\*\*\*\*\*\*\*\*\*\*5xx-i-2ze\*\*\*\*\*\*\*\*\*\*\*\*nw4

Disabled

boolean

No

Specifies whether to disable the backup policy for the data source.

-   true: The backup policy is disabled.
    
-   false: The backup policy is not disabled.
    

true

Source

string

No

This parameter has different meanings based on the value of SourceType.

-   **OSS**: The prefix of the objects that you want to back up. If you do not specify this parameter, the entire bucket is backed up. Only a single prefix is supported. To back up the /backup directory, set this parameter to /backup.
    
-   **ECS\_FILE**: The paths to the files that you want to back up. If you do not specify this parameter, all files are backed up. You can specify multiple paths. To back up the files in the /a and /b paths, set this parameter to \["/a", "/b"\].
    
-   **File**: The paths to the files that you want to back up. If you do not specify this parameter, all files are backed up. You can specify multiple paths. To back up the files in the /a and /b directories, set this parameter to \["/a", "/b"\].
    
-   **COMMON\_FILE\_SYSTEM**: Required. The backup paths. You can specify multiple paths. To back up the /a and /b paths, set this parameter to \["/a", "/b"\]. To back up the root directory, set this parameter to \["/"\].
    
-   **COMMON\_NAS**: Required. The backup path. Only a single path is supported. To back up the /a path, set this parameter to \["/a"\]. To back up the root directory, set this parameter to \["/"\].
    
-   **OTS**: The list of tables that you want to back up. If you do not specify this parameter, all tables are backed up. You can specify multiple tables. To back up Table a and Table b, set this parameter to \["a", "b"\].
    

backup/

Include

string

No

This parameter is available only if you set **SourceType** to **ECS\_FILE**, **File**, **NAS**, **COMMON\_NAS**, or **COMMON\_FILE\_SYSTEM**. This parameter specifies the file types to be backed up. All files of the specified types are backed up. The value can be up to 255 characters in length.

\[\\"\*.doc\\",\\"\*.xltm\\"\]

Exclude

string

No

This parameter is required when **SourceType** is set to **ECS\_FILE**, **File**, **NAS**, **COMMON\_NAS**, or **COMMON\_FILE\_SYSTEM**. It specifies the file types to include in the backup. The value can be up to 255 characters in length.

\[\\"\*.doc\\",\\"\*.xltm\\"\]

SpeedLimit

string

No

This parameter is required only if you set **SourceType** to **ECS\_FILE** or **File**. This parameter specifies the throttling rules for backups. The format is `{start}{end}{bandwidth}`. Separate multiple throttling rules with a vertical bar (|). The time periods of the rules cannot overlap.

-   **start**: The start hour.
    
-   **end**: The end hour.
    
-   **bandwidth**: The throttling speed. Unit: KB/s.
    

0:24:5120

AdvancedOptions

object

No

The advanced options.

UdmDetail

object

No

The details of the ECS instance backup.

ExcludeDiskIdList

array

No

The list of cloud disk IDs that do not need to be protected. This parameter is ignored when DiskIdList is not empty.

string

No

The ID of a cloud disk that does not need to be protected.

d-bp1\*\*\*\*\*\*\*\*\*\*\*\*apo

DiskIdList

array

No

The list of cloud disk IDs that need to be protected. If you want to protect all cloud disks, leave this parameter empty.

string

No

The ID of a cloud disk that needs to be protected.

d-bp1\*\*\*\*\*\*\*\*\*\*\*\*apo

SnapshotGroup

boolean

No

Specifies whether to create a snapshot-consistent group. You can create a snapshot-consistent group only if all disk types are Enhanced SSDs (ESSDs).

true

AppConsistent

boolean

No

Specifies whether to enable application consistency. You can enable application consistency only if all disk types are ESSDs.

false

RamRoleName

string

No

This parameter is required only if you set **AppConsistent** to **true**. This parameter specifies the name of the RAM role that is required to create application-consistent snapshots.

AliyunECSInstanceForHbrRole

PreScriptPath

string

No

This parameter is required only if you set **AppConsistent** to **true**. This parameter specifies the path to the pre-freeze script that is run before an application-consistent snapshot is created.

/tmp/prescript.sh

PostScriptPath

string

No

This parameter is required only if you set **AppConsistent** to **true**. This parameter specifies the path to the post-thaw script that is run after an application-consistent snapshot is created.

/tmp/postscript.sh

EnableFsFreeze

boolean

No

This parameter is required only if you set **AppConsistent** to **true**. This parameter specifies whether to use the FsFreeze mechanism of Linux to ensure file system read consistency before an application-consistent snapshot is created. The default value is true.

true

TimeoutInSeconds

integer

No

This parameter is required only if you set **AppConsistent** to **true**. This parameter specifies the I/O freeze timeout period. The default value is 30 seconds.

30

EnableWriters

boolean

No

This parameter is required only if you set **AppConsistent** to **true**. This parameter specifies whether to create an application-consistent snapshot:

-   true: Create an application-consistent snapshot.
    
-   false: Create a file system-consistent snapshot.
    

The default value is true.

true

OssDetail

object

No

The details of the OSS backup.

InventoryId

string

No

The name of the OSS inventory. If you specify this parameter, OSS inventory is used for performance tuning.

-   Use an inventory to improve the performance of incremental backups when you back up more than 100 million OSS objects. The storage fees for the inventory files are charged by OSS.
    
-   It takes time to generate an OSS inventory file. Before the inventory file is generated, the backup job may fail. You can wait for the next backup cycle to run.
    

30663060

InventoryCleanupPolicy

string

No

Specifies whether to delete the inventory file after a backup. This parameter is valid only when you use an OSS inventory. Valid values:

-   **NO\_CLEANUP**: Does not delete the inventory file.
    
-   **DELETE\_CURRENT**: Deletes the current file.
    
-   **DELETE\_CURRENT\_AND\_PREVIOUS**: Deletes all files.
    

NO\_CLEANUP

IgnoreArchiveObject

boolean

No

Specifies whether to exclude archive objects from task statistics and the list of failed files.

true

CommonFileSystemDetail

object

No

The details of the large-scale file system backup.

FullOnIncrementFail

boolean

No

Specifies whether to run a full backup if an incremental backup fails. Valid values:

-   **true**: Runs a full backup.
    
-   **false**: Does not run a full backup.
    

true

FetchSliceSize

integer

No

The size of the backup shard (the number of files).

100000

## Response elements

**Element**

**Type**

**Description**

**Example**

object

UpdatePolicyBindingResponse

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

Code

string

The return code. The value 200 indicates that the request was successful.

200

Message

string

The message that is returned. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

RequestId

string

The request ID.

B6F24C46-54B9-519B-9AB8-A8988D705E67

## Examples

Success response

`JSON` format

```
{
  "Success": true,
  "Code": "200",
  "Message": "successful",
  "RequestId": "B6F24C46-54B9-519B-9AB8-A8988D705E67"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/UpdatePolicyBinding#workbench-doc-change-demo) for a complete list.
