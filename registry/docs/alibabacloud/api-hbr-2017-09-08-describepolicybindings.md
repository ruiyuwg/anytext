You can query the data sources attached to a policy, or the policies attached to a data source.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribePolicyBindings)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribePolicyBindings)

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

hbr:DescribePolicyBindings

list

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

NextToken

string

No

The token that is used to retrieve the next page of results.

caeba0bbb2be03f84eb48b699f0a

MaxResults

integer

No

The number of results to return for each query.

Valid values: 10 to 100. Default value: 10.

10

PolicyId

string

No

The policy ID.

po-000\*\*\*\*\*\*\*\*\*\*\*\*hky

DataSourceIds

array

No

A list of data source IDs.

string

No

The data source ID.

i-uf6\*\*\*\*\*\*\*\*\*\*\*\*68n

SourceType

string

No

The type of the data source. Valid value:

-   **UDM\_ECS**: ECS instance backup.
    

UDM\_ECS

Filters

array<object>

No

The query filters.

object

No

The query filters.

Key

string

No

The key of the filter. Valid values:

-   **PolicyId**: the backup policy ID
    
-   **DataSourceId**: the ECS instance ID
    
-   **DataSourceType**: the data source type
    

DataSourceType

Operator

string

No

The matching method. The default value is IN. This parameter specifies the operator to use for matching the key and value. Valid values:

-   **EQUAL**: equal to
    
-   **NOT\_EQUAL**: not equal to
    
-   **GREATER\_THAN**: greater than
    
-   **GREATER\_THAN\_OR\_EQUAL**: greater than or equal to
    
-   **LESS\_THAN**: less than
    
-   **LESS\_THAN\_OR\_EQUAL**: less than or equal to
    
-   **BETWEEN**: between. The value is a JSON array in the format of `[lower_bound,upper_bound]`.
    
-   **IN**: in a set. The value is an array.
    

IN

Values

array

No

The value to match in the filter.

string

No

The value to match in the filter.

UDM\_ECS

## Response elements

**Element**

**Type**

**Description**

**Example**

object

DescribePolicyBindingsResponse

PolicyBindings

array<object>

The list of policy bindings.

array<object>

The details of the policy binding.

CreatedTime

integer

The time when the policy binding was created. This value is a UNIX timestamp. Unit: seconds.

1661399570

UpdatedTime

integer

The time when the policy binding was last updated. This value is a UNIX timestamp. Unit: seconds.

1653611573

PolicyBindingId

string

The ID of the policy binding.

pd-000\*\*\*\*\*\*\*\*\*\*\*\*slc

PolicyBindingDescription

string

The description of the policy binding.

po-000\*\*\*\*\*\*\*\*\*\*\*\*eslc-i-uf6\*\*\*\*\*\*\*\*\*\*\*\*y5g

PolicyId

string

The policy ID.

po-000\*\*\*\*\*\*\*\*\*\*\*\*56y

DataSourceId

string

The data source ID.

i-8vb\*\*\*\*\*\*\*\*\*\*\*\*5ly

Disabled

boolean

Indicates whether the policy is paused for the data source.

-   true: The policy is paused.
    
-   false: The policy is not paused.
    

true

Source

string

-   If SourceType is set to **OSS**, this parameter specifies the prefix of objects to back up. If you do not specify this parameter, the entire bucket is backed up.
    
-   If SourceType is set to **ECS\_FILE** or **File**, this parameter specifies the paths to the files to back up. If you do not specify this parameter, all directories are backed up.
    

backup/

Include

string

This parameter is required only if **SourceType** is set to **ECS\_FILE** or **File**. This parameter specifies the file types to back up. All files of the specified types are backed up. This parameter supports a maximum of 255 characters.

\[\\"\*.doc\\",\\"\*.xltm\\"\]

Exclude

string

This parameter is required only if **SourceType** is set to **ECS\_FILE** or **File**. This parameter specifies the file types to exclude from the backup. All files of the specified types are not backed up. This parameter supports a maximum of 255 characters.

\[\\"\*.doc\\",\\"\*.xltm\\"\]

SpeedLimit

string

This parameter is required only if **SourceType** is set to **ECS\_FILE** or **File**. This parameter specifies the traffic shaping settings for the backup. The format is `{start}:{end}:{bandwidth}`. You can specify multiple settings. Separate them with commas (,). The time periods cannot overlap.

-   **start**: the start hour.
    
-   **end**: the end hour.
    
-   **bandwidth**: the throttling speed. Unit: KB/s.
    

0:24:10240

AdvancedOptions

object

The advanced options.

UdmDetail

object

The advanced options for ECS instance backup.

ExcludeDiskIdList

array

The list of disk IDs to exclude from the backup. This parameter is ignored if \`DiskIdList\` is not empty.

string

The ID of the disk to exclude from the backup.

d-bp1\*\*\*\*\*\*\*\*\*\*\*\*apo

DiskIdList

array

The list of disk IDs to back up. If you want to back up all disks, leave this parameter empty.

string

The ID of the disk to back up.

d-bp1\*\*\*\*\*\*\*\*\*\*\*\*apo

SnapshotGroup

boolean

Indicates whether to create a snapshot-consistent group. You can create a snapshot-consistent group only when all disks of the instance are Enhanced SSDs (ESSDs).

true

AppConsistent

boolean

Indicates whether to create an application-consistent snapshot. You can create an application-consistent snapshot only when all disks of the instance are ESSDs.

false

RamRoleName

string

This parameter is required only if **AppConsistent** is set to **true**. This parameter specifies the name of the RAM role that is required to create an application-consistent snapshot.

AliyunECSInstanceForHbrRole

PreScriptPath

string

This parameter is required only if **AppConsistent** is set to **true**. This parameter specifies the path of the pre-freeze script that is run before the application-consistent snapshot is created.

/tmp/prescript.sh

PostScriptPath

string

This parameter is required only if **AppConsistent** is set to **true**. This parameter specifies the path of the post-thaw script that is run after the application-consistent snapshot is created.

/tmp/postscript.sh

EnableFsFreeze

boolean

This parameter is required only if **AppConsistent** is set to **true**. This parameter indicates whether to use the \`fsfreeze\` command of the Linux operating system to put the file system in a read-only state before you create an application-consistent snapshot. The default value is true.

true

TimeoutInSeconds

integer

This parameter is required only if **AppConsistent** is set to **true**. This parameter specifies the timeout period for I/O freeze. The default value is 30 seconds.

30

EnableWriters

boolean

This parameter is required only if **AppConsistent** is set to **true**. Indicates whether to create an application-consistent snapshot:

-   true: Create an application-consistent snapshot.
    
-   false: Create a file system-consistent snapshot.
    

Default value: true.

true

DestinationKmsKeyId

string

The ID of a customer managed key (CMK) in the destination region. If you enable cross-region replication and specify this parameter, the cross-region backup is encrypted using the specified key.

4ed37b1e-da51-4187-aceb-9db4f9b7148b

OssDetail

object

The advanced options for OSS backup.

InventoryId

string

The name of the OSS inventory. If you specify this parameter, an OSS inventory is used for performance optimization.

-   The storage fees for inventory files are charged by OSS.
    
-   It takes time to generate an OSS inventory file. The backup job may fail before the inventory file is generated. You can wait for the next backup cycle to run.
    

inventory\_test

InventoryCleanupPolicy

string

Indicates whether to delete the inventory file after a backup. This parameter is valid only when an OSS inventory is used. Valid values:

-   **NO\_CLEANUP**: The inventory file is not deleted.
    
-   **DELETE\_CURRENT**: The current inventory file is deleted.
    
-   **DELETE\_CURRENT\_AND\_PREVIOUS**: All inventory files are deleted.
    

DELETE\_CURRENT\_AND\_PREVIOUS

IgnoreArchiveObject

boolean

Indicates whether to exclude archive objects from the backup job statistics and the list of failed files.

true

FileDetail

object

The advanced options for file backup.

UseVSS

boolean

Indicates whether to enable the Volume Shadow Copy Service (VSS) feature. This feature is available only for Windows instances. Valid values:

-   **true**: Enable the VSS feature.
    
-   **false**: Disable the VSS feature.
    

false

AdvPolicy

boolean

Indicates whether to use an advanced policy. Valid values:

-   **true**: Use an advanced policy.
    
-   **false**: Do not use an advanced policy.
    

false

CommonNasDetail

object

The advanced options for on-premises NAS.

FullOnIncrementFail

boolean

Indicates whether to run a full backup if an incremental backup fails. Valid values:

-   **true**: Run a full backup.
    
-   **false**: Do not run a full backup.
    

true

FetchSliceSize

integer

The size of a backup shard, which is the number of files.

100000

ClientId

string

The backup client ID.

c-0001eg6mcvjs93f46s2d

ClusterId

string

The client group ID.

cl-000gkcofngi04j6k680a

CommonFileSystemDetail

object

The advanced options for large-scale file system backup.

FullOnIncrementFail

boolean

Indicates whether to run a full backup if an incremental backup fails. Valid values:

-   **true**: Run a full backup.
    
-   **false**: Do not run a full backup.
    

true

FetchSliceSize

integer

The size of a backup shard, which is the number of files.

100000

SourceType

string

The type of the data source. Valid value:

-   **UDM\_ECS**: ECS instance backup
    

UDM\_ECS

CrossAccountType

string

The type of cross-account backup. Valid values:

-   SELF\_ACCOUNT: Backs up data within the same account.
    
-   CROSS\_ACCOUNT: Backs up data across accounts.
    

CROSS\_ACCOUNT

CrossAccountUserId

integer

The ID of the source account for cross-account backup.

1480\*\*\*\*\*\*\*\*\*\*\*\*

CrossAccountRoleName

string

The name of the RAM role that is created in the source account for cross-account backup.

hbrcrossrole

CreatedByTag

boolean

Indicates whether the data source is automatically bound to the backup policy based on tags.

false

HitTags

array<object>

The matched tag rules.

object

Key

string

The tag key.

env

Value

string

The tag value.

prod

Operator

string

The tag matching rule.

-   **EQUAL**: Matches the tag key and tag value.
    
-   **NOT**: Matches the tag key but not the tag value.
    

EQUAL

NextToken

string

The token that is used to retrieve the next page of policy bindings.

caeba0bbb2be03f84eb48b699f0a

MaxResults

integer

The number of results returned for each query.

Valid values: 10 to 100. Default value: 10.

10

TotalCount

integer

The total number of records.

38

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

Code

string

The return code. A value of 200 indicates that the request was successful.

200

Message

string

The returned message. If the request is successful, \`successful\` is returned. If the request fails, an error message is returned.

successful

RequestId

string

The request ID.

5225929A-4EBD-55EE-9FE1-4A130E582A76

## Examples

Success response

`JSON` format

```
{
  "PolicyBindings": [
    {
      "CreatedTime": 1661399570,
      "UpdatedTime": 1653611573,
      "PolicyBindingId": "pd-000************slc",
      "PolicyBindingDescription": "po-000************eslc-i-uf6************y5g",
      "PolicyId": "po-000************56y",
      "DataSourceId": "i-8vb************5ly",
      "Disabled": true,
      "Source": "backup/",
      "Include": "[\\\"*.doc\\\",\\\"*.xltm\\\"]",
      "Exclude": "[\\\"*.doc\\\",\\\"*.xltm\\\"]",
      "SpeedLimit": "0:24:10240",
      "AdvancedOptions": {
        "UdmDetail": {
          "ExcludeDiskIdList": [
            "d-bp1************apo\n"
          ],
          "DiskIdList": [
            "d-bp1************apo\n"
          ],
          "SnapshotGroup": true,
          "AppConsistent": false,
          "RamRoleName": "AliyunECSInstanceForHbrRole",
          "PreScriptPath": "/tmp/prescript.sh",
          "PostScriptPath": "/tmp/postscript.sh",
          "EnableFsFreeze": true,
          "TimeoutInSeconds": 30,
          "EnableWriters": true,
          "DestinationKmsKeyId": "4ed37b1e-da51-4187-aceb-9db4f9b7148b"
        },
        "OssDetail": {
          "InventoryId": "inventory_test",
          "InventoryCleanupPolicy": "DELETE_CURRENT_AND_PREVIOUS",
          "IgnoreArchiveObject": true
        },
        "FileDetail": {
          "UseVSS": false,
          "AdvPolicy": false
        },
        "CommonNasDetail": {
          "FullOnIncrementFail": true,
          "FetchSliceSize": 100000,
          "ClientId": "c-0001eg6mcvjs93f46s2d",
          "ClusterId": "cl-000gkcofngi04j6k680a"
        },
        "CommonFileSystemDetail": {
          "FullOnIncrementFail": true,
          "FetchSliceSize": 100000
        }
      },
      "SourceType": "UDM_ECS",
      "CrossAccountType": "CROSS_ACCOUNT",
      "CrossAccountUserId": 0,
      "CrossAccountRoleName": "hbrcrossrole",
      "CreatedByTag": false,
      "HitTags": [
        {
          "Key": "env",
          "Value": "prod",
          "Operator": "EQUAL"
        }
      ]
    }
  ],
  "NextToken": "caeba0bbb2be03f84eb48b699f0a",
  "MaxResults": 10,
  "TotalCount": 38,
  "Success": true,
  "Code": "200",
  "Message": "successful",
  "RequestId": "5225929A-4EBD-55EE-9FE1-4A130E582A76"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribePolicyBindings#workbench-doc-change-demo) for a complete list.
