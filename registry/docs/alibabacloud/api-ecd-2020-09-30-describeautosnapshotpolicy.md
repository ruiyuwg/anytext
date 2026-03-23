Query automatic snapshot policies.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeAutoSnapshotPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeAutoSnapshotPolicy)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

Region ID. Call [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) to query the list of regions supported by Elastic Desktop Service (EDS).

cn-hangzhou

PolicyId

string

No

Automatic snapshot policy ID.

sp-c5tv9d64ebjnj\*\*\*\*

PolicyName

string

No

Automatic snapshot policy name.

测试1201

MaxResults

integer

No

Maximum number of entries per page for paged query.

-   Maximum: 50
    
-   Default: 50
    

10

NextToken

string

No

The token that marks the start of the next query. If NextToken is empty, no next query exists.

AAAAAV3MpHK1AP0pfERHZN5pu6mqIGdPhID94rjhZFGsvpJo

## Response elements

**Element**

**Type**

**Description**

**Example**

object

NextToken

string

The token that marks the start of the next query. If NextToken is empty, no next query exists.

caeba0bbb2be03f84eb48b699f0a4883

RequestId

string

Request ID.

A7F6612E-59CC-59F9-9DD1-91867FCC\*\*\*\*

AutoSnapshotPolicies

array<object>

List of automatic snapshot policies.

object

Automatic snapshot policy.

TimePoints

string

Time points for creating automatic snapshots.

Pass parameters in JSON array format: `["0", "1", ... "23"]`. A maximum of 24 time points are allowed, separated by commas.

\["17","18"\]

CreationTime

string

Creation time. This value follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard and uses UTC time. Format: `yyyy-mm-ddthh:mm:ssz`.

2023-01-11T09:14:00Z

Status

string

Status of the automatic snapshot policy.

**Valid values:**

-   Expire :
    
    The policy is unavailable because of overdue payment.
    
-   Normal :
    
    Normal.
    

Normal

DesktopNum

integer

Number of WUYING Workspaces attached to this snapshot policy.

1

CronExpression

string

Cron expression that specifies the snapshot creation time.

0 0 5,7 ? \* 2/2

RetentionDays

string

Retention period of automatic snapshots, in days. Valid values: 1 to 180.

2

PolicyName

string

Automatic snapshot policy name.

snapshot01

PolicyId

string

Automatic snapshot policy ID.

sp-3e3bmfcdkjfl1\*\*\*\*

RegionId

string

Region ID to which the automatic snapshot policy belongs.

cn-hangzhou

DiskType

string

## Examples

Success response

`JSON` format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a4883",
  "RequestId": "A7F6612E-59CC-59F9-9DD1-91867FCC****",
  "AutoSnapshotPolicies": [
    {
      "TimePoints": "[\"17\",\"18\"]",
      "CreationTime": "2023-01-11T09:14:00Z",
      "Status": "Normal",
      "DesktopNum": 1,
      "CronExpression": "0 0 5,7 ? * 2/2",
      "RetentionDays": "2",
      "PolicyName": "snapshot01",
      "PolicyId": "sp-3e3bmfcdkjfl1****",
      "RegionId": "cn-hangzhou",
      "DiskType": ""
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeAutoSnapshotPolicy#workbench-doc-change-demo) for a complete list.
