Queries the details of automatic snapshot policies that are created in a specific region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeAutoSnapshotPolicyEx)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeAutoSnapshotPolicyEx)

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

ecs:DescribeAutoSnapshotPolicyEx

get

AutoSnapshotPolicy

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/*`

AutoSnapshotPolicy

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/{#snapshotpolicyId}`

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

The region ID of the automatic snapshot policy. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

AutoSnapshotPolicyId

string

No

The ID of the automatic snapshot policy.

sp-bp67acfmxazb4ph\*\*\*\*

AutoSnapshotPolicyName

string

No

The name of the automatic snapshot policy.

TestName

PageNumber

integer

No

The page number.

Pages start from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries per page.

Valid values: 1 to 100.

Default value: 10.

10

Tag

array<object>

No

The tags of the automatic snapshot policy.

object

No

Key

string

No

The key of tag N of the automatic snapshot policy. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.

TestKey

Value

string

No

The value of tag N of the automatic snapshot policy. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://. The tag value cannot start with acs:.

TestValue

ResourceGroupId

string

No

The ID of the resource group. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.

**Note** Resources in the default resource group are displayed in the response regardless of how this parameter is set.

rg-aek2kkmhmhs\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries per page.

10

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of automatic snapshot policies

1

AutoSnapshotPolicies

array<object>

Details about the automatic snapshot policies.

AutoSnapshotPolicy

object

TimePoints

string

The points in time of the day at which to create automatic snapshots.

The time is displayed in UTC+8. Unit: hours. Valid values: 0 to 23, which correspond to the 24 points in time on the hour from 00:00:00 to 23:00:00. For example, 1 indicates 01:00:00. Multiple points in time can be specified.

The parameter value is a JSON array that contains up to 24 points in time separated by commas (,). Example: `["0", "1", ... "23"]`.

\["1"\]

CreationTime

string

The time when the automatic snapshot policy was created. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.

2019-12-10T16:00Z

Status

string

The status of the automatic snapshot policy. Valid values:

-   Normal: The automatic snapshot policy is normal.
-   Expire: The automatic snapshot policy cannot be used because your account has overdue payments.

Normal

AutoSnapshotPolicyName

string

The name of the automatic snapshot policy.

testAutoSnapshotPolicyName

TargetCopyRegions

string

**Note** This parameter is in invitational preview and is not publicly available.

test

CopiedSnapshotsRetentionDays

integer

**Note** This parameter is in invitational preview and is not publicly available.

0

AutoSnapshotPolicyId

string

The ID of the automatic snapshot policy.

sp-bp67acfmxazb4ph\*\*\*\*

RetentionDays

integer

The retention period of the automatic snapshots. Unit: days. Valid values:

-   \-1: Automatic snapshots are retained until they are deleted.
-   1 to 65536: Auto snapshots are retained for the specified number of days. After the retention period of auto snapshots expires, the auto snapshots are automatically deleted.

7

RegionId

string

The region ID of the automatic snapshot policy.

cn-hangzhou

DiskNums

integer

The number of disks to which the automatic snapshot policy is applied.

1

EnableCrossRegionCopy

boolean

**Note** This parameter is in invitational preview and is not publicly available.

false

RepeatWeekdays

string

The days of the week on which to create automatic snapshots. Valid values: 1 to 7, which correspond to the days of the week. For example, 1 indicates Monday. One or more days can be specified.

\["6"\]

VolumeNums

integer

The number of extended volumes to which the automatic snapshot policy is applied.

2

ResourceGroupId

string

The ID of the resource group.

rg-aek2kkmhmhs\*\*\*\*

Tags

array<object>

The tags of the automatic snapshot policy.

Tag

object

TagValue

string

The tag value of the automatic snapshot policy.

TestValue

TagKey

string

The tag key of the automatic snapshot policy.

TestKey

CopyEncryptionConfiguration

object

Encryption configurations for cross-region snapshot replication.

Encrypted

boolean

Whether to enable encryption for cross-region snapshot replication. Valid values:

-   true
-   false

Default value: false.

false

KMSKeyId

string

The ID of the Key Management Service (KMS) key used to encrypt snapshots in cross-region snapshot replication.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

Type

string

The type of the automatic snapshot policy. Valid values:

-   Custom: user-defined snapshot policy.
-   System: system-defined snapshot policy.

Custom

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 1,
  "AutoSnapshotPolicies": {
    "AutoSnapshotPolicy": [
      {
        "TimePoints": [
          1
        ],
        "CreationTime": "2019-12-10T16:00Z",
        "Status": "Normal",
        "AutoSnapshotPolicyName": "testAutoSnapshotPolicyName",
        "TargetCopyRegions": "test",
        "CopiedSnapshotsRetentionDays": 0,
        "AutoSnapshotPolicyId": "sp-bp67acfmxazb4ph****",
        "RetentionDays": 7,
        "RegionId": "cn-hangzhou",
        "DiskNums": 1,
        "EnableCrossRegionCopy": false,
        "RepeatWeekdays": [
          6
        ],
        "VolumeNums": 2,
        "ResourceGroupId": "rg-aek2kkmhmhs****",
        "Tags": {
          "Tag": [
            {
              "TagValue": "TestValue",
              "TagKey": "TestKey"
            }
          ]
        },
        "CopyEncryptionConfiguration": {
          "Encrypted": false,
          "KMSKeyId": "0e478b7a-4262-4802-b8cb-00d3fb40****"
        },
        "Type": "Custom"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

400

InvalidTag.Mismatch

The specified Tag.n.Key and Tag.n.Value are not match.

The specified Tag.N.Key and Tag.N.Value parameters do not correspond to each other.

400

InvalidTagCount

The specified tags are beyond the permitted range.

The number of specified tags exceeds the upper limit.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-02

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeAutoSnapshotPolicyEx?updateTime=2024-12-02#workbench-doc-change-demo)

2024-02-28

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeAutoSnapshotPolicyEx?updateTime=2024-02-28#workbench-doc-change-demo)

2024-02-02

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeAutoSnapshotPolicyEx?updateTime=2024-02-02#workbench-doc-change-demo)
