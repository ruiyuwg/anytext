Queries basic information about all recently created Cloud Desktops and their usage duration records.

## Operation description

-   For the Alibaba Cloud China site, select the Shanghai region. For the Alibaba Cloud International site, select the Singapore region.
    
-   By default, this operation returns both active and deleted Cloud Desktops.
    
-   You can query only Cloud Desktops that were deleted within the last three months.
    
-   You cannot combine sorting with other query conditions.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeGlobalDesktopRecords)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeGlobalDesktopRecords)

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

Region ID.

-   Shanghai
    
-   Singapore
    

cn-shanghai

OfficeSiteId

string

No

Office site ID.

cn-hangzhou+dir-363353\*\*\*\*

StartTime

string

No

Start time. Format: YYYY-MM-DDThh:mm:ssZ.

-   Format: YYYY-MM-DDThh:mm:ssZ.
    

2022-03-23T04:10:21Z

EndTime

string

No

End time. The interval between start time and end time must be no more than 30 days. Format: YYYY-MM-DDThh:mm:ssZ.

-   Format: YYYY-MM-DDThh:mm:ssZ.
    

2022-08-31T06:56:45Z

PageNumber

integer

No

Page number of the current page in a paged query.  
Default value: 1.  

1

PageSize

integer

No

Number of entries per page. Maximum value: 100.

20

DesktopId

array

No

Cloud Desktop ID. You can specify up to 100 IDs.

string

No

Cloud Desktop ID.

ecd-gx2x1dhsmucyy\*\*\*\*

DesktopName

string

No

Cloud Desktop name.

DemoComputer

SubPayType

string

No

Cloud Desktop billing method. Valid values:

-   prePaid: Subscription billing.
    
-   postPaid: Pay-as-you-go billing.
    
-   monthPackage: Monthly time-based package.
    

monthPackage

Scope

string

No

Query scope. Default value: empty. Valid value:

-   ADVANCED: Query connection duration and other statistics.
    

ADVANCED

OrderBy

string

No

Sort field. If not specified, results are sorted by creation time in descending order. Valid value:

-   uptime: Sort by Cloud Desktop uptime.
    

uptime

SortType

string

No

Sort order. Default value: Asc. Valid values:

-   Asc: Ascending order.
    
-   Desc: Descending order.
    

Asc

EndUserId

string

No

End user ID.

TestUser

DesktopType

string

No

Cloud Desktop specification. Call [DescribeDesktopTypes](/help/en/wuying-workspace/describedesktoptypes) to query supported specifications.

eds.enterprise\_office.2c4g

ResourceGroupId

string

No

Resource group ID.

rg-3mtuc28rx95lx\*\*\*\*

DesktopStatusList

array

No

string

No

ExcludeDesktopStatusList

array

No

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalCount

integer

Total number of entries returned.

1

RequestId

string

Request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

Sessions

array<object>

Session details.

array<object>

Session details.

Platform

string

Operating system version.

Windows 10

StatusChangeTime

integer

Time when the Cloud Desktop status changed.

1760583xxxx

Memory

integer

Cloud Desktop memory size. Unit: MiB.

4096

DesktopName

string

Cloud Desktop name.

DemoComputer

Cpu

integer

Number of vCPUs.

2

SubPayType

string

Cloud Desktop billing method. Valid values:

-   prePaid: Subscription billing.
    
-   postPaid: Pay-as-you-go billing.
    
-   monthPackage: Monthly time-based package.
    

monthPackage

EndUserId

string

End user ID.

TestUser

OsType

string

Operating system type. Valid values:

-   Windows
    
-   Linux
    

Linux

SessionIdleTime

integer

Session idle time. Unit: minutes.

120

OfficeSiteName

string

Office site name.

TestOfficeSite

ConnectionStatus

string

Connection status.

Connected

Sessions

array<object>

Session details.

object

End user information.

EndUserId

string

End user ID.

TestUser

EstablishmentTime

string

Session creation time.

2022-08-31T06:56:45Z

DesktopId

string

Cloud Desktop ID.

ecd-g6t1ukbaea\*\*\*\*

EndUserIds

array

List of assigned end user IDs.

string

End user ID.

TestUser

ResourceGroups

array<object>

Enterprise resource group names.

object

Enterprise resource group name.

ResourceGroupId

string

Resource group ID.

rg-f3s3dgt8dtb0vlqc8

ResourceGroupName

string

Resource group name.

dms\_test

OfficeSiteId

string

Office site ID.

cn-hangzhou+dir-8904\*\*\*\*

UpTime

integer

Cloud Desktop uptime. Unit: seconds.

86400

ProtocolType

string

Protocol type.

-   HDX
    
-   ASP
    

ASP

GpuSpec

string

GPU memory size.

8GiB

LatestConnectionTime

integer

Duration of the most recent connection to the Cloud Desktop. Unit: seconds.

120

TotalConnectionTime

integer

Total connection time. Unit: seconds.

240

RegionId

string

Region ID.

cn-beijing

DesktopGroupId

string

Shared Cloud Desktop ID.

dg-iaqu3bi2xtie\*\*\*\*

DesktopGroupName

string

Shared Cloud Desktop name.

DemoCCGroup

DesktopStatus

string

Desktop status.

Running

OfficeSiteType

string

Office site type.

Simple

## Examples

Success response

`JSON` format

```
{
  "TotalCount": 1,
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "Sessions": [
    {
      "Platform": "Windows 10",
      "StatusChangeTime": 0,
      "Memory": 4096,
      "DesktopName": "DemoComputer",
      "Cpu": 2,
      "SubPayType": "monthPackage",
      "EndUserId": "TestUser",
      "OsType": "Linux",
      "SessionIdleTime": 120,
      "OfficeSiteName": "TestOfficeSite",
      "ConnectionStatus": "Connected",
      "Sessions": [
        {
          "EndUserId": "TestUser",
          "EstablishmentTime": "2022-08-31T06:56:45Z"
        }
      ],
      "DesktopId": "ecd-g6t1ukbaea****",
      "EndUserIds": [
        "TestUser"
      ],
      "ResourceGroups": [
        {
          "ResourceGroupId": "rg-f3s3dgt8dtb0vlqc8",
          "ResourceGroupName": "dms_test"
        }
      ],
      "OfficeSiteId": "cn-hangzhou+dir-8904****",
      "UpTime": 86400,
      "ProtocolType": "ASP",
      "GpuSpec": "8GiB",
      "LatestConnectionTime": 120,
      "TotalConnectionTime": 240,
      "RegionId": "cn-beijing",
      "DesktopGroupId": "dg-iaqu3bi2xtie****",
      "DesktopGroupName": "DemoCCGroup",
      "DesktopStatus": "Running",
      "OfficeSiteType": "Simple"
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeGlobalDesktopRecords#workbench-doc-change-demo) for a complete list.
