You can call this operation to learn of zones where a cluster can be created in an Alibaba Cloud region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/OceanBasePro/2019-09-01/DescribeZones)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/OceanBasePro/2019-09-01/DescribeZones)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

Series

string

No

The deployment mode.

Enumeration Value:

-   NORMAL: NORMAL.

NORMAL

DeployType

string

No

The operation that you want to perform.  
Set the value to **DescribeZones**.

Enumeration Value:

-   multiple
-   single
-   dual

single

## Response parameters

Parameter

Type

Description

Example

object

Example 1

RequestId

string

```
http(s)://[Endpoint]/?Action=DescribeZones
&Series=normal
&DeployType=single
&Common request parameters
```

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Zones

array<object>

You can call this operation to learn of zones where a cluster can be created in an Alibaba Cloud region.

Data

object

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Zones": [
    {
      "ZoneId": "cn-hangzhou-i,cn-hangzhou-j,cn-hangzhou-h",
      "ZoneName": "H/I/J",
      "Series": "NORMAL",
      "DeployType": "1-1-1"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-04-15

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeZones?updateTime=2024-04-15#workbench-doc-change-demo)
