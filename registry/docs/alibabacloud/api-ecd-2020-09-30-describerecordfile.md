Retrieve the list of screen recording files across all regions.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeRecordFile)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeRecordFile)

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

The region ID. Call [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) to get a list of regions supported by Elastic Desktop Service (EDS).

cn-shanghai

DesktopId

string

No

The cloud computer ID.

ecd-7w78ozhjcwa3u\*\*\*\*

EndUserId

string

No

The end user ID.

Alice

StartTime

string

No

The query start time.

20251218175715

EndTime

string

No

The query end time.

20251218205715

Status

integer

Yes

The status of the screen recording file.

-   0: Upload successful.
    
-   1: Uploading.
    

1

RecordType

string

No

The record type of the screen recording file.

-   alltime: Full-time screen recording.
    
-   period: Interval screen recording.
    
-   event: Event-triggered screen recording.
    
-   session: Session screen recording.
    

alltime

OrderBy

string

No

The field for sorting. If not specified, records are sorted by screen recording start time in descending order.

-   startTime: The screen recording start time.
    

startTime

OrderSort

string

No

The sorting order.

-   asc: Ascending order.
    
-   desc: Descending order.
    

asc

PageNumber

integer

No

The current page number.

1

PageSize

integer

No

The maximum number of rows per page for a paged query.

20

FileName

string

No

The screen recording file name.

Task7

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

05C2791F-41A7-5E7C-B5E4-1401FD0E\*\*\*\*

TotalCount

integer

The total number of screen recording files that match your query.

2

RecordFiles

array<object>

The details of the screen recording files.

array<object>

The details of the screen recording files.

Status

integer

The status of the screen recording file.

-   0: Upload successful.
    
-   1: Uploading.
    

1

RecordExpire

integer

The time-to-live (TTL) of the screen recording file.

1774656000000

RecordType

integer

The record type of the screen recording file.

-   alltime: Full-time screen recording.
    
-   period: Interval screen recording.
    
-   event: Event-triggered screen recording.
    
-   session: Session screen recording.
    

period

EndUserId

string

The name of the end user.

Alice

RecordEndTime

string

The screen recording end time. Format: _yyyy-MM-dd_T_HH:mm:ss_Z (UTC time).

2025-12-18T06:02:25Z

RecordStartTime

string

The screen recording start time. Format: _yyyy-MM-dd_T_HH:mm:ss_Z (UTC time).

2025-12-18T06:02:25Z

FileName

string

The screen recording file name.

Task3

DesktopId

string

The Cloud Desktop ID.

ecd-7yulhw1g1attet7d2

FileSize

integer

The file size, in bytes.

139

EventDetails

array<object>

The event details.

object

The event data object.

EventTime

integer

The time when the event occurred, in seconds.

60

EventType

string

The event type.

UserInput

EventName

string

The event details.

{\\n\\t\\"messageInfo\\" : \\"mouse\_move\\",\\n\\t\\"messageType\\" : \\"UserInput\\"\\n}\\n"

DesktopName

string

The Cloud Desktop name.

fvt-ecd

PolicyId

string

The control policy ID.

pg-\*\*

RegionId

string

The region where the Cloud Desktop is located.

cn-beijing

ResourceGroupId

string

The resource group ID.

rg-f3s3dgt8dtb0vlqc8

ResourceGroupName

string

The resource group name.

resource

## Examples

Success response

`JSON` format

```
{
  "RequestId": "05C2791F-41A7-5E7C-B5E4-1401FD0E****",
  "TotalCount": 2,
  "RecordFiles": [
    {
      "Status": 1,
      "RecordExpire": 1774656000000,
      "RecordType": 0,
      "EndUserId": "Alice",
      "RecordEndTime": "2025-12-18T06:02:25Z",
      "RecordStartTime": "2025-12-18T06:02:25Z",
      "FileName": "Task3",
      "DesktopId": "ecd-7yulhw1g1attet7d2",
      "FileSize": 139,
      "EventDetails": [
        {
          "EventTime": 60,
          "EventType": "UserInput",
          "EventName": "{\\n\\t\\\"messageInfo\\\" : \\\"mouse_move\\\",\\n\\t\\\"messageType\\\" : \\\"UserInput\\\"\\n}\\n\""
        }
      ],
      "DesktopName": "fvt-ecd",
      "PolicyId": "pg-**",
      "RegionId": "cn-beijing",
      "ResourceGroupId": "rg-f3s3dgt8dtb0vlqc8",
      "ResourceGroupName": "resource"
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeRecordFile#workbench-doc-change-demo) for a complete list.
