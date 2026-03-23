Queries applications installed on a cloud computer.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/ListInstalledApps)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/ListInstalledApps)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

DesktopId

string

Yes

The cloud computer ID.

ecd-39clsqyxr\*\*\*\*

PageSize

integer

No

The number of entries per page.  
Default value: 20.

20

PageNumber

integer

No

The page number.  
Default value: 1.

1

## Response parameters

Parameter

Type

Description

Example

object

The returned information.

RequestId

string

The unique ID of the request.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

TotalCount

long

The total number of entries returned.

94

Apps

array<object>

The information about the application.

App

object

The application details.

AppName

string

The name of the application.

test\_app

AppVersion

string

The application version.

2.0.1

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "TotalCount": 94,
  "Apps": [
    {
      "AppName": "test_app",
      "AppVersion": "2.0.1"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-03

Add Operation

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/ListInstalledApps?updateTime=2025-11-03#workbench-doc-change-demo)
