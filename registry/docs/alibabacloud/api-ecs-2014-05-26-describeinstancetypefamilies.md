Queries the instance families provided by Elastic Compute Service (ECS). You can call the DescribeInstanceTypeFamilies operation to obtain information about different series of instance families. This helps you better understand the available instance types and choose appropriate instance types to create ECS instances.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceTypeFamilies)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceTypeFamilies)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the instance family. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Generation

string

No

The series of the instance family. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families). Valid values:

-   ecs-1: Series I, which consists of the earliest and cost-effective instance types
-   ecs-2: Series II, which provides upgraded software and hardware and higher performance than Series I
-   ecs-3: Series III, which consists of high-performance instance families and is suitable for different business scenarios
-   ecs-4: Series IV, which consists of enterprise-level instance families (such as g5, c5, and r5), ECS Bare Metal Instance families (such as ebmc5s, ebmg5s, and ebmr5s), and burstable instance families (such as t5) and can meet a wide variety of business requirements with lower latency
-   ecs-5: Series V, which consists of enterprise-level instance families (such as g6, c6, and r6), ECS Bare Metal Instance families (such as ebmg6, ebmg6e, and ebmc6), and storage-enhanced instance families (such as g6e) and delivers quick response times and higher performance
-   ecs-6: Series VI, which consists of enterprise-level instance families (such as hfc7, hfg7, and hfr7) and ECS Bare Metal Instance families (such as ebmhfg7)

ecs-5

## Response parameters

Parameter

Type

Description

Example

object

The data returned.

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

InstanceTypeFamilies

array<object>

The instance families.

InstanceTypeFamily

object

The series of the instance family.

Generation

string

The series of the instance family.

ecs-5

InstanceTypeFamilyId

string

The ID of the instance family.

ecs.g6

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "InstanceTypeFamilies": {
    "InstanceTypeFamily": [
      {
        "Generation": "ecs-5",
        "InstanceTypeFamilyId": "ecs.g6"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-01-14

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceTypeFamilies?updateTime=2025-01-14#workbench-doc-change-demo)
