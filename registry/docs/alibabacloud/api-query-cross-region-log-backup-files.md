You can call the DescribeCrossRegionLogBackupFiles operation to query the cross-region log backup files of an ApsaraDB RDS instance.

For more information about how to query the cross-region data backup files of an RDS instance, see [DescribeCrossRegionBackups](/help/en/rds/api-query-cross-region-data-backup-files).

Before you call this operation, make sure that the instance runs one of the following database engine versions and RDS editions:

-   MySQL 8.0 on RDS High-availability Edition (with local SSDs)
-   MySQL 5.7 on RDS High-availability Edition (with local SSDs)
-   MySQL 5.6

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=DescribeCrossRegionLogBackupFiles&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

DescribeCrossRegionLogBackupFiles

The operation that you want to perform. Set the value to **DescribeCrossRegionLogBackupFiles**.

DBInstanceId

String

Yes

rm-uf6wjk5xxxxxxxxxx

The ID of the instance.

EndTime

String

Yes

2019-06-15T12:10:00Z

The end of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

RegionId

String

Yes

cn-hangzhou

The region ID of the instance. You can call the [DescribeRegions](/help/en/rds/api-query-regions) operation to query the most recent region list.

StartTime

String

Yes

2019-05-30T12:10:00Z

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

CrossBackupRegion

String

No

cn-shanghai

The ID of the destination region where the cross-region backup files of the instance are stored. You can call the [DescribeCrossRegionBackupDBInstance](/help/en/rds/api-query-apsaradb-for-rds-instances-on-which-cross-region-backup-is-enabled) operation to query the most recent region list.

PageSize

Integer

No

30

The number of entries to return on each page. Valid values:

-   **30**
-   **50**
-   **100**

Default value: 30.

PageNumber

Integer

No

1

The number of the page to return. Pages start from page 1.

Default value: **1**.

## Response parameters

   

Parameter

Type

Example

Description

DBInstanceId

String

rm-uf6wjk5xxxxxxxxxx

The ID of the instance.

StartTime

String

2019-05-30T12:10:00Z

The beginning of the time range queried. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_hh:mm:ss_Z format. The time is displayed in UTC.

EndTime

String

2019-06-15T12:10:00Z

The end of the time range queried. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_hh:mm:ss_Z format. The time is displayed in UTC.

TotalRecordCount

Integer

100

The total number of entries returned.

PageNumber

Integer

1

The page number of the returned page. Pages start from page 1.

Default value: **1**.

PageRecordCount

Integer

30

The number of cross-region log backup files on the current page.

RegionId

String

cn-hangzhou

The region ID of the instance.

RequestId

String

DAC241E8-28E6-49DA-BFB0-B2DD090885C1

The ID of the request.

Items

Array of Item

An array that consists of cross-region log backup files.

Item

CrossBackupRegion

String

cn-shanghai

The ID of the destination region where the cross-region log backup file is stored.

CrossDownloadLink

String

http://rdsddrlog-zb.oss-cn-zhangjiakou.aliyuncs.com/xxxxx

The external URL from which you can download the cross-region log backup file.

CrossIntranetDownloadLink

String

http://rdsddrlog-zb.oss-cn-zhangjiakou-internal.aliyuncs.com/xxxxx

The internal URL from which you can download the cross-region log backup file.

CrossLogBackupId

Integer

14567

The ID of the cross-region log backup file.

CrossLogBackupSize

Long

5312836

The size of the cross-region log backup file. Unit: bytes.

InstanceId

Integer

8161055

The ID of the instance.

LinkExpiredTime

String

2019-06-30T15:00:00Z

The time when the download URL of the cross-region log backup file expires. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_hh:mm:ss_Z format. The time is displayed in UTC.

LogBeginTime

String

2019-05-30T12:10:00Z

The start time of the cross-region log backup file. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_hh:mm:ss_Z format. The time is displayed in UTC.

LogEndTime

String

2019-05-30T20:10:00Z

The end time of the cross-region log backup file. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_hh:mm:ss_Z format. The time is displayed in UTC.

LogFileName

String

cn-hangzhou\_rm-bpxxxxx\_7198739\_mysql-bin.000230

The name of the cross-region log backup file.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=DescribeCrossRegionLogBackupFiles
&DBInstanceId=rm-uf6wjk5xxxxxxxxxx
&StartTime=2019-05-30T12:10:00Z
&EndTime=2019-06-15T12:10:00Z
&<Common request parameters>
```

Sample success responses

`XML` format

```
<DescribeCrossRegionLogBackupFilesResponse>
  <Items>
            <Item>
                  <LinkExpiredTime>2019-06-02T07:36:18Z</LinkExpiredTime>
                  <CrossBackupRegion>cn-zhangjiakou</CrossBackupRegion>
                  <LogEndTime>2019-06-01T06:11:49Z</LogEndTime>
                  <LogBeginTime>2019-06-01T00:11:44Z</LogBeginTime>
                  <InstanceId>7198743</InstanceId>
                  <CrossLogBackupSize>770014</CrossLogBackupSize>
                  <CrossDownloadLink>http://rdsddrlog-zb.oss-cn-zhangjiakou.aliyuncs.com/xxxxxx</CrossDownloadLink>
                  <CrossIntranetDownloadLink>http://rdsddrlog-zb.oss-cn-zhangjiakou-internal.aliyuncs.com/xxxxx</CrossIntranetDownloadLink>
            </Item>
      </Items>
      <PageNumber>1</PageNumber>
      <TotalRecordCount>52</TotalRecordCount>
      <DBInstanceId>rm-xxxxx</DBInstanceId>
      <RegionId>cn-hangzhou</RegionId>
      <RequestId>A9723BCE-F32F-4F05-9922-8371C0842FA7</RequestId>
      <EndTime>EndTime=2019-06-15T12:10:00Z</EndTime>
      <StartTime>2019-05-30T12:10:00Z</StartTime>
      <PageRecordCount>10</PageRecordCount>
</DescribeCrossRegionLogBackupFilesResponse>
```

`JSON` format

```
{"Items":{
    "Item":[{
    "LinkExpiredTime":"2019-06-02T07:36:18Z",
    "CrossBackupRegion":"cn-zhangjiakou",
    "LogEndTime":"2019-06-01T06:11:49Z",
    "LogBeginTime":"2019-06-01T00:11:44Z",
    "InstanceId":7198743,
    "CrossLogBackupSize":770014,
    "CrossDownloadLink":"http://rdsddrlog-zb.oss-cn-zhangjiakou.aliyuncs.com/xxxxxx",
    "CrossIntranetDownloadLink":"http://rdsddrlog-zb.oss-cn-zhangjiakou-internal.aliyuncs.com/xxxxx"}
    ]},
    "PageNumber":1,
    "TotalRecordCount":52,
    "DBInstanceId":"rm-xxxxx",
    "RegionId":"cn-hangzhou",
    "RequestId":"A9723BCE-F32F-4F05-9922-8371C0842FA7",
    "EndTime":"EndTime=2019-06-15T12:10:00Z",
    "StartTime":"2019-05-30T12:10:00Z",
    "PageRecordCount":10}
```

## Error codes

   

HTTP status code

Error code

Error message

Description

400

InvalidStartTime.Format

Specified start time is not valid.

The error message returned because the specified beginning time is invalid.

400

InvalidEndTime.Format

Specified end time is not valid.

The error message returned because the specified end time is invalid.

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
