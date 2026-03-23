Exports events that occur on a cloud desktop from an Alibaba Cloud Workspace client.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/ExportClientEvents)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/ExportClientEvents)

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

ecd:ExportClientEvents

\*All Resources

`*`

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

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.

cn-hangzhou

EndUserId

string

No

The ID of the endpoint user.

user01

DesktopId

string

No

The cloud computer ID.

ecd-gx2x1dhsmucyy\*\*\*\*

DesktopName

string

No

The cloud computer name.

testName

OfficeSiteId

string

No

The office network ID.

cn-hangzhou+dir-363353\*\*\*\*

OfficeSiteName

string

No

The office network name.

test

EventType

string

No

The type of the event that you want to query. If you provide multiple values for EventTypes, the response will include events of all the specified types. If you provide no values for EventTypes and EventType, the response will include all events in the designated region.

Valid values:

-   DESKTOP\_STOP: the shutdown event.
-   GET\_LITE\_CONNECTION\_TICKET: the event of retrieving the connection ticket.
-   DESKTOP\_DISCONNECT: the session disconnection event.
-   CLIENT\_LOGIN: the user logon event.
-   GET\_CONNECTION\_TICKET: the connection credential retrieval event.
-   DESKTOP\_REBOOT: the restart event.
-   DESKTOP\_CONNECT: the session establishment event.
-   DESKTOP\_START: the start event.

CLIENT\_LOGIN

StartTime

string

No

The beginning of the time range to query. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.

If you do not specify a value for this parameter, all events that occurred before the point in time that you specify for `EndTime` are queried.

2022-03-23T04:10:21Z

EndTime

string

No

The end of the time range to query. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.

If you do not specify a value for this parameter, the current time is used.

2022-03-23T07:11:01Z

EventTypes

array

No

The types of the events that you want to query. You can include multiple event types, and the response will return events matching the specified types or all events if none are specified.

string

No

The type of the event that you want to query.

Valid values:

-   DESKTOP\_STOP: the shutdown event.
-   GET\_LITE\_CONNECTION\_TICKET: the event of retrieving the connection ticket.
-   DESKTOP\_DISCONNECT: the session disconnection event.
-   CLIENT\_LOGIN: the user logon event.
-   GET\_CONNECTION\_TICKET: the connection credential retrieval event.
-   DESKTOP\_REBOOT: the restart event.
-   DESKTOP\_CONNECT: the session establishment event.
-   DESKTOP\_START: the start event.

CLIENT\_LOGIN

LangType

string

No

The language displayed on the frontend page. The backend uses this setting to define the language of exported files.

Valid values:

-   zh-CN: Simplified Chinese.
-   en-GB: British English.

zh-CN

MaxResults

integer

No

The number of entries to return on each page.

-   Maximum value: 5000.
-   Default value: 5000.

50

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

Url

string

The download URL of the exported files.

https://cn-shanghai-servicemanager.oss-cn-shanghai.aliyuncs.com/A0\_CLIENT\_EVENT/EDS\_Events%20List\_20220519234611\_w5HuD83KGs.csv?Expires=1652975773&OSSAccessKeyId=\*\*\*\*&Signature=4erMG\*\*\*\*\*\*\*\*\*k%3D

RequestId

string

The ID of the request.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "Url": "https://cn-shanghai-servicemanager.oss-cn-shanghai.aliyuncs.com/A0_CLIENT_EVENT/EDS_Events%20List_20220519234611_w5HuD83KGs.csv?Expires=1652975773&OSSAccessKeyId=****&Signature=4erMG*********k%3D",
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-11-22

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/ExportClientEvents?updateTime=2022-11-22#workbench-doc-change-demo)

2022-01-20

Add Operation

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/ExportClientEvents?updateTime=2022-01-20#workbench-doc-change-demo)
