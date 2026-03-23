Queries cloud computer shares.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeDesktopGroupSessions)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeDesktopGroupSessions)

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

No

The ID of the region. You can call the [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.

cn-hangzhou

SessionStatus

string

No

The status of the session.

**Valid values:**

-   Connected :
    
-   Disconnected :
    

Connected

OwnType

integer

No

The type of the session.

**Valid values:**

-   0 :
    
    Single-session
    
-   1 :
    
    Multi-session
    

1

EndUserId

string

No

The user ID of the terminal that connects to the session.

alice

StartTime

string

No

The beginning of the time range to query.

"2022-08-31T06:56:45Z"

EndTime

string

No

The end of the time range to query.

"2022-08-31T06:56:45Z"

MaxResults

integer

No

The number of entries per page.

20

NextToken

string

No

A pagination token. It can be used in the next request to retrieve a new page of results.

AAAAAV3MpHK1AP0pfERHZN5pu6ljnKKgSRjo8yXAIT5QSvkU

FillTerminalInfo

boolean

No

Whether to supplement terminal information.

Language

string

No

The language of the response.

zh-CN

DesktopGroupIds

array

No

The IDs of shared desktop groups.

string

No

The ID of the shared desktop group.

dg-4oyi32wmrctgx\*\*\*\*

DesktopGroupName

string

No

The name of the shared desktop.

ecd-4oyi32wmrctgx\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Returns an object.

RequestId

string

The request ID.

D0920845-7359-59FC-9899-B\*\*\*\*

TotalCount

integer

The total number of sessions.

15

Sessions

array<object>

The sessions.

array<object>

The session details.

EndUserId

string

The user ID of the terminal that connects to the session.

alice

DesktopGroupId

string

The ID of the shared cloud computer.

dg-iaqu3bi2xtie\*\*\*\*

DesktopGroupName

string

The name of the cloud computer share.

DemoCCGroup

OfficeSiteId

string

The office network ID.

cn-hangzhou+dir-8904\*\*\*\*

OfficeSiteName

string

The office network name.

DemoOfficeNetwork

OwnType

integer

The type of the session.

**Valid values:**

-   0 :
    
    Single-session
    
-   1 :
    
    Multi-session
    

0

SessionStatus

string

The state of the session.

**Valid values:**

-   Connected :
    
-   Disconnected :
    

Connected

DesktopId

string

If the session status is Connected, it indicates the ID of the cloud computer that is currently connected. If the session status is Disconnected, it indicates the ID of the cloud computer that was last connected.

ecd-g6t1ukbaea\*\*\*\*

ClientOS

string

The operating system of the client.

windows

ClientVersion

string

The version of the client.

7.8.0

ClientIp

string

The IP address of the client.

172.21.XX.XX

LatestConnectionTime

integer

The duration of the most recent session. Unit: seconds.

120

TotalConnectionDuration

integer

The total duration of the sessions. Unit: seconds.

120

SessionIdleTime

integer

The idle duration of the cloud computer. Unit: seconds.

120

ProtocolType

string

The protocol type supported by the rule.

**Valid values:**

-   HDX :
    
    High-definition Experience (HDX).
    
-   ASP :
    
    ASP.
    

ASP

LastSessionStartTime

string

The start time of the most recent connection.

2022-08-31 06:56:45

LastSessionEndTime

string

The end time of the most recent connection.

2022-08-31 07:56:45

OsType

string

The operating system type of the cloud computer.

**Valid values:**

-   linux :
    
-   windows :
    

Windows

EndUserApplyCoordinateTime

integer

The point in time when the end user applies for administrator assistance.

1678794261000

TerminalInfo

object

Terminal Info

ProductName

string

The terminal type.

Mac

SerialNumber

string

Terminal Serial Number

96c530bc-6095-4014-8bbc-d461b8ac\*\*\*\*

Model

string

The type of the terminal.

wuying\_mac\_x86\_64

Uuid

string

The terminal UUID.

EBFDC7773BEBAD418A9F89429652\*\*\*\*

DirectoryType

string

The office network type.

SIMPLE

AccountType

string

The account type.

SIMPLE

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

caeba0bbb2

## Examples

Success response

`JSON` format

```
{
  "RequestId": "D0920845-7359-59FC-9899-B****",
  "TotalCount": 15,
  "Sessions": [
    {
      "EndUserId": "alice",
      "DesktopGroupId": "dg-iaqu3bi2xtie****",
      "DesktopGroupName": "DemoCCGroup",
      "OfficeSiteId": "cn-hangzhou+dir-8904****",
      "OfficeSiteName": "DemoOfficeNetwork",
      "OwnType": 0,
      "SessionStatus": "Connected",
      "DesktopId": "ecd-g6t1ukbaea****",
      "ClientOS": "windows",
      "ClientVersion": "7.8.0",
      "ClientIp": "172.21.XX.XX",
      "LatestConnectionTime": 120,
      "TotalConnectionDuration": 120,
      "SessionIdleTime": 120,
      "ProtocolType": "ASP",
      "LastSessionStartTime": "2022-08-31 06:56:45",
      "LastSessionEndTime": "2022-08-31 07:56:45",
      "OsType": "Windows",
      "EndUserApplyCoordinateTime": 1678794261000,
      "TerminalInfo": {
        "ProductName": "Mac",
        "SerialNumber": "96c530bc-6095-4014-8bbc-d461b8ac****",
        "Model": "wuying_mac_x86_64",
        "Uuid": "EBFDC7773BEBAD418A9F89429652****"
      },
      "DirectoryType": "SIMPLE",
      "AccountType": "SIMPLE"
    }
  ],
  "NextToken": "caeba0bbb2"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeDesktopGroupSessions#workbench-doc-change-demo) for a complete list.
