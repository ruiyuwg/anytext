Queries the detailed session information for cloud computers.

## Operation description

You can retrieve data only from the last 30 days.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeDesktopSessions)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeDesktopSessions)

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

The ID of the region. Call [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) to obtain a list of regions that Elastic Desktop Service (EDS) supports.

cn-hangzhou

OfficeSiteId

string

No

The ID of the cloud computer.

cn-hangzhou+dir-363353\*\*\*\*

EndUserId

string

No

The ID of the end user.

alice

SessionStatus

string

No

The connection status of the session.

**Valid values:**

-   Connected :
    
    The session is connected.
    
-   Disconnected :
    
    The session is disconnected.
    

Connected

StartTime

string

No

The start time of the query.

2023-01-28T02:31:43Z

EndTime

string

No

The end time of the query.

2023-02-13T02:51:43Z

PageNumber

integer

No

The page number for a paged query.

1

PageSize

integer

No

The maximum number of entries to return on each page for a paged query.

10

DesktopId

array

No

The ID of the cloud computer. You can specify 1 to 100 IDs.

string

No

The ID of the cloud computer.

ecd-gx2x1dhsmucyy\*\*\*\*"

DesktopName

string

No

The name of the cloud computer.

DemoComputer

SubPayType

string

No

The billing method of the cloud computer.

**Valid values:**

-   duration :
    
    Duration package (whitelisted)
    
-   postPaid :
    
    Pay-as-you-go
    
-   monthPackage :
    
    Monthly subscription (120 hours/250 hours)
    
-   prePaid :
    
    Monthly subscription (unlimited usage)
    

monthPackage

CheckOsSession

boolean

No

Specifies whether to check the session status within the cloud computer.

true

EndUserIdFilter

string

No

The ID of the end user. This parameter is the same as the `EndUserId` parameter. Specify only one of them.

alice

ResourceGroupId

string

No

FillHardwareInfo

boolean

No

Specifies whether to return information about the terminal.

Language

string

No

The language of the returned information.

zh-CN

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalCount

integer

The total number of query results.

1

RequestId

string

The request ID.

3EC4A6DB-EC8D-55B0-9038-543DE671\*\*\*\*

Sessions

array<object>

The session details.

array<object>

The session details.

SessionStatus

string

The connection status of the session.

**Valid values:**

-   Connected :
    
    The session is connected.
    
-   Disconnected :
    
    The session is disconnected.
    

Connected

EndUserId

string

The ID of the end user.

alice

OfficeSiteId

string

The ID of the workspace.

cn-hangzhou+dir-8904\*\*\*\*

ClientIp

string

The IP address of the client.

172.21.XX.XX

ClientOS

string

The operating system of the client.

windows\_\\"Windows10Enterprise\\"10.0(Build22000)

DesktopId

string

The ID of the cloud computer.

ecd-g6t1ukbaea\*\*\*\*

DesktopName

string

The name of the cloud computer.

DemoComputer

OfficeSiteName

string

The name of the office site.

TestOfficeSite

ClientVersion

string

The version of the client.

2.0.0-R-20221030.08\*\*\*\*

ProtocolType

string

The protocol type.

**Valid values:**

-   HDX :
    
    HDX protocol
    
-   ASP :
    
    Adaptive Streaming Protocol (ASP) developed by Alibaba Cloud
    

ASP

LatestConnectionTime

integer

The duration of the last connection to the cloud computer. Unit: seconds.

120

TotalConnectionTime

integer

The total connection duration. Unit: seconds.

240

SessionStartTime

string

The time when the session started.

2023-01-28T02:31:43Z

SessionEndTime

string

The time when the session ended.

2023-01-28T02:31:43Z

SessionIdleTime

integer

The duration for which the session was idle. Unit: seconds.

120

OsType

string

The operating system type.

**Valid values:**

-   Linux :
    
    Linux
    
-   Windows :
    
    Windows
    

Windows

EndUserApplyCoordinateTime

integer

The duration of remote assistance initiated by the end user. Unit: seconds.

120

SubPayType

string

The billing method of the cloud computer.

**Valid values:**

-   duration :
    
    Duration package (whitelisted)
    
-   postPaid :
    
    Pay-as-you-go
    
-   monthPackage :
    
    Monthly subscription (120 hours/250 hours)
    
-   prePaid :
    
    Monthly subscription (unlimited usage)
    

monthPackage

OsSessionStatus

string

Indicates the session status of the cloud desktop.

true

TerminalInfo

object

The description of the terminal device.

ProductName

string

The type of the terminal device.

Mac

SerialNumber

string

The serial number of the terminal device.

96c530bc-6095-4014-8bbc-d461b8ac\*\*\*\*

Model

string

The model of the terminal device.

Mac

Uuid

string

The universally unique identifier (UUID) of the logon device.

EBFDC7773BEBAD418A9F89429652\*\*\*\*

DirectoryType

string

The type of the office network.

SIMPLE

AccountType

string

The type of the account.

SIMPLE

ResourceGroups

array<object>

The information about the resource group.

object

The resource group.

Id

string

The ID of the resource group.

rg-8whrmo2gtsb8bxxxx

Name

string

The name of the resource group.

RgTest

The SessionIdleTime parameter is returned only when the operating system of the cloud computer is Windows.

## Examples

Success response

`JSON` format

```
{
  "TotalCount": 1,
  "RequestId": "3EC4A6DB-EC8D-55B0-9038-543DE671****",
  "Sessions": [
    {
      "SessionStatus": "Connected",
      "EndUserId": "alice",
      "OfficeSiteId": "cn-hangzhou+dir-8904****",
      "ClientIp": "172.21.XX.XX",
      "ClientOS": "windows_\\\"Windows10Enterprise\\\"10.0(Build22000)",
      "DesktopId": "ecd-g6t1ukbaea****",
      "DesktopName": "DemoComputer",
      "OfficeSiteName": "TestOfficeSite",
      "ClientVersion": "2.0.0-R-20221030.08****",
      "ProtocolType": "ASP",
      "LatestConnectionTime": 120,
      "TotalConnectionTime": 240,
      "SessionStartTime": "2023-01-28T02:31:43Z\n",
      "SessionEndTime": "2023-01-28T02:31:43Z",
      "SessionIdleTime": 120,
      "OsType": "Windows",
      "EndUserApplyCoordinateTime": 120,
      "SubPayType": "monthPackage",
      "OsSessionStatus": "true",
      "TerminalInfo": {
        "ProductName": "Mac",
        "SerialNumber": "96c530bc-6095-4014-8bbc-d461b8ac****",
        "Model": "Mac",
        "Uuid": "EBFDC7773BEBAD418A9F89429652****"
      },
      "DirectoryType": "SIMPLE",
      "AccountType": "SIMPLE",
      "ResourceGroups": [
        {
          "Id": "rg-8whrmo2gtsb8bxxxx",
          "Name": "RgTest"
        }
      ]
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeDesktopSessions#workbench-doc-change-demo) for a complete list.
