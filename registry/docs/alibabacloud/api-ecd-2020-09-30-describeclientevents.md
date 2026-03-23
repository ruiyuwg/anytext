Query operation logs for end users. Events include starting or stopping a WUYING Workspace and disconnecting a session.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeClientEvents)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeClientEvents)

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

Region ID. Call [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) to list regions that support WUYING Workspace.

cn-hangzhou

EndUserId

string

No

User information. Enter a RAM user ID or an Active Directory (AD) username. If you omit this parameter, the API returns events for all users in the region.

28961708130834\*\*\*\*

DesktopId

string

No

The ID of the cloud desktop. If you do not specify this parameter, the system queries all cloud desktops in the region.

ecd-8fupvkhg0aayu\*\*\*\*

DesktopIp

string

No

IP address of the WUYING Workspace. If you omit this parameter, the API returns events for all WUYING Workspaces in the region.

10.10.\*.\*

DirectoryId

string

No

**Note**

This parameter is not available.

To be hidden.

OfficeSiteId

string

No

ID of the office site where the WUYING Workspace resides. If you omit this parameter, the API returns events for all users across all office sites in the region.

cn-hangzhou+dir-bh77qa8nmjot4\*\*\*\*

EventType

string

No

Event type to query. If the EventTypes parameter is not empty, the API uses it as the filter. If both EventTypes and EventType are empty, the API returns all events.

**Valid values:**

-   DESKTOP\_STOP :
    
    Stop
    
-   GET\_LITE\_CONNECTION\_TICKET :
    
    Get auto-reconnect ticket for the WUYING Workspace
    
-   DESKTOP\_DISCONNECT :
    
    Disconnect session
    
-   GET\_CONNECTION\_TICKET :
    
    WUYING Workspace connection request
    
-   CLIENT\_LOGIN :
    
    User login
    
-   DESKTOP\_REBOOT :
    
    Reboot
    
-   DESKTOP\_CONNECT :
    
    Establish session
    
-   DESKTOP\_START :
    
    Start
    

DESKTOP\_DISCONNECT

StartTime

string

No

Start time. Specify in ISO 8601 format using UTC+0 time. Format: YYYY-MM-DDThh:mm:ssZ.  
If you omit this parameter, the API queries backward from the time specified by `EndTime`.  
  

2020-11-30T06:32:31Z

EndTime

string

No

End time. Specify in ISO 8601 format using UTC+0 time. Format: YYYY-MM-DDThh:mm:ssZ.  
If you omit this parameter, the API uses the current time.  
  

2020-11-31T06:32:31Z

MaxResults

integer

No

Maximum number of entries per page for paged queries.  
Default value: 100.  
  

10

NextToken

string

No

Pagination token. Set to the value of NextToken returned by the previous API call.

AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL\*\*\*\*

OfficeSiteName

string

No

The name of the office network.

test

DesktopName

string

No

The name of the cloud desktop.

test

EventTypes

array

No

Array of event types to query. The API returns events matching any of the specified types.

string

No

Event type to query.

**Valid values:**

-   DESKTOP\_STOP :
    
    Stop
    
-   GET\_LITE\_CONNECTION\_TICKET :
    
    Get auto-reconnect ticket for the WUYING Workspace
    
-   DESKTOP\_DISCONNECT :
    
    Disconnect session
    
-   GET\_CONNECTION\_TICKET :
    
    WUYING Workspace connection request
    
-   CLIENT\_LOGIN :
    
    User login
    
-   DESKTOP\_REBOOT :
    
    Reboot
    
-   DESKTOP\_CONNECT :
    
    Establish session
    
-   DESKTOP\_START :
    
    Start
    

DESKTOP\_START

Language

string

No

FillHardwareInfo

boolean

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Response object.

NextToken

string

Token for the next page of results. An empty value means no more pages.

AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL\*\*\*\*

RequestId

string

Request ID.

28A40F12-F340-442B-A35F-46EF6A03227B

Events

array<object>

User events.

array<object>

User event.

Status

string

Status of the event. This field appears in `DESKTOP_DISCONNECT` and `GET_CONNECTION_TICKET` events. Possible values:

-   200: Success.
    
-   Error message, such as FailedToGetConnectionTicket.
    

200

BytesReceived

string

Number of bytes received, in bytes.

8665

DesktopIp

string

The IP address of the cloud desktop.

10.10.XX.XX

EventTime

string

Time when the event occurred.

2020-11-30T06:32:31Z

BytesSend

string

Number of bytes sent, in bytes.

2345

OfficeSiteId

string

The ID of the office site.

cn-hangzhou+dir-bh77qa8nmjot4\*\*\*\*

AliUid

string

Alibaba Cloud account ID associated with the event.

112259558861\*\*\*\*

DesktopId

string

The ID of the cloud desktop.

ecd-8fupvkhg0aayu\*\*\*\*

RegionId

string

Region ID.

cn-hangzhou

EventId

string

Event ID.

5651188b-3070-d1cc-5311-75753d59\*\*\*\*

DirectoryType

string

Directory type.

RAM

EventType

string

Event type.

DESKTOP\_DISCONNECT

EndUserId

string

User information. Enter a RAM user ID or an Active Directory (AD) username.

28961708130834\*\*\*\*

ClientIp

string

Client IP address.

100.68.\*.\*

ClientOS

string

Client operating system.

Darwin 17.7.0 x64

OfficeSiteType

string

Type of account system used by the office site.

**Valid values:**

-   SIMPLE :
    
    Convenience account
    
-   AD\_CONNECTOR :
    
    Enterprise AD account
    

SIMPLE

DirectoryId

string

The directory ID of the cloud computer.

cn-hangzhou+dir-bh77qa8nmjot4\*\*\*\*

ClientVersion

string

Client version.

1.0.4 202012021700

OfficeSiteName

string

Name of the office site.

test

DesktopName

string

The name of the cloud desktop.

test

DesktopGroupId

string

ID of the desktop group.

dg-kadkdfaf\*\*\*\*

DesktopGroupName

string

Name of the desktop group.

testName

Description

string

Description.

test

TerminalInfo

object

ProductName

string

SerialNumber

string

Model

string

## Examples

Success response

`JSON` format

```
{
  "NextToken": "AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****",
  "RequestId": "28A40F12-F340-442B-A35F-46EF6A03227B",
  "Events": [
    {
      "Status": "200",
      "BytesReceived": "8665",
      "DesktopIp": "10.10.XX.XX",
      "EventTime": "2020-11-30T06:32:31Z",
      "BytesSend": "2345",
      "OfficeSiteId": "cn-hangzhou+dir-bh77qa8nmjot4****",
      "AliUid": "112259558861****",
      "DesktopId": "ecd-8fupvkhg0aayu****",
      "RegionId": "cn-hangzhou",
      "EventId": "5651188b-3070-d1cc-5311-75753d59****",
      "DirectoryType": "RAM",
      "EventType": "DESKTOP_DISCONNECT",
      "EndUserId": "28961708130834****",
      "ClientIp": "100.68.*.*",
      "ClientOS": "Darwin 17.7.0 x64",
      "OfficeSiteType": "SIMPLE",
      "DirectoryId": "cn-hangzhou+dir-bh77qa8nmjot4****",
      "ClientVersion": "1.0.4 202012021700",
      "OfficeSiteName": "test",
      "DesktopName": "test",
      "DesktopGroupId": "dg-kadkdfaf****",
      "DesktopGroupName": "testName",
      "Description": "test",
      "TerminalInfo": {
        "ProductName": "",
        "SerialNumber": "",
        "Model": ""
      }
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeClientEvents#workbench-doc-change-demo) for a complete list.
