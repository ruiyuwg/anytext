Modifies an automatic snapshot policy's parameters, including its name and snapshot retention period.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyAutoSnapshotPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyAutoSnapshotPolicy)

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

The region ID. Call [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) to get a list of regions where Elastic Desktop Service (EDS) is available.

cn-hangzhou

PolicyId

string

Yes

The ID of the automatic snapshot policy.

sp-itcmrhqt01tdo\*\*\*\*

PolicyName

string

No

The name of the automatic snapshot policy. The name must be 2 to 128 characters in length. It must start with a letter. The name cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-). The default value is empty.

系统自动快照

RetentionDays

integer

No

The retention period of automatic snapshots. Unit: days. Valid values: 1 to 180.

2

CronExpression

string

No

The cron expression.

0 20 16 ? \* 1,2,3,4,5,6,7

DiskType

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

51592A88-0F2C-55E6-AD2C-2AD9C10D\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "51592A88-0F2C-55E6-AD2C-2AD9C10D****"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/ModifyAutoSnapshotPolicy#workbench-doc-change-demo) for a complete list.
