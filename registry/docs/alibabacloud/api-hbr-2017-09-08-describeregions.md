Queries available regions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeRegions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeRegions)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

The current API does not require request parameters

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The response code. The status code 200 indicates that the request was successful.

200

Message

string

The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

RequestId

string

The request ID.

B3395EC6-7A4A-5282-A9AB-7A442F2CFC90

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

Regions

array<object>

The regions returned.

Region

object

LocalName

string

The region name.

China (Hangzhou)

RegionId

string

The region ID.

cn-hangzhou

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "B3395EC6-7A4A-5282-A9AB-7A442F2CFC90",
  "Success": true,
  "Regions": {
    "Region": [
      {
        "LocalName": "China (Hangzhou)",
        "RegionId": "cn-hangzhou"
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-02-26

The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribeRegions?updateTime=2024-02-26#workbench-doc-change-demo)

2022-01-12

Add Operation

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribeRegions?updateTime=2022-01-12#workbench-doc-change-demo)
