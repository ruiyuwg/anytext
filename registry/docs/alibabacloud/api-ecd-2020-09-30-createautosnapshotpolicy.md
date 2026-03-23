Creates an automatic snapshot policy that schedules snapshots for WUYING Workspace based on a cron expression.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/CreateAutoSnapshotPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/CreateAutoSnapshotPolicy)

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

The region ID. For more information, see [DescribeRegions](/help/en/wuying-workspace/describeregions) to get a list of regions supported by WUYING Workspace.

cn-hangzhou

PolicyName

string

Yes

The name of the automatic snapshot policy. It can contain 2 to 128 English or Chinese characters. It must start with a letter or a Chinese character, and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (\_), or hyphens (-). Default value: empty.

test\_auto\_policy

RetentionDays

integer

Yes

The retention period of the automatic snapshot, in days. Valid values: 1 to 180.

2

CronExpression

string

Yes

The cron expression for the recurring schedule.

0 0 2 ? \* 1-7

DiskType

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

PolicyId

string

The ID of the automatic snapshot policy.

sp-3hpa78d0qyt99\*\*\*\*

RequestId

string

The request ID.

51592A88-0F2C-55E6-AD2C-2AD9C10D\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "PolicyId": "sp-3hpa78d0qyt99****",
  "RequestId": "51592A88-0F2C-55E6-AD2C-2AD9C10D****"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/CreateAutoSnapshotPolicy#workbench-doc-change-demo) for a complete list.
