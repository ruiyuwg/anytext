You can call the DescribeDBInstancePerformance operation to query the performance of instances.

## Operation description

This operation is phased out.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstancesByPerformance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstancesByPerformance)

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

rds:DescribeDBInstancesByPerformance

get

DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length.

ETnLKlblzczshOTUbOCzxxxxxx

proxyId

string

No

The ID of the proxy mode.

API

DBInstanceId

string

No

The ID of the instance.

rm-uf6wjk5xxxxxx

PageSize

integer

No

The number of entries to return on each page. Valid values: **5** to **100**.

Default value: **30**.

30

PageNumber

integer

No

The number of the page to return. Valid values: any non-zero positive integer.

Default value: **1**.

1

SortMethod

string

No

The sorting method.

ASC

SortKey

string

No

The sorting basis.

CPU\_Usage

Tags

string

No

The tags that are added to the instances. Each tag is a key-value pair that consists of two parts: TagKey and TagValue. Format: `{"key1":"value1"}`.

{"key1":"value1"}

Tag.1.key

string

No

The key of tag 1 that is added to the instances.

key1

Tag.2.key

string

No

The key of tag 2 that is added to the instances.

key2

Tag.3.key

string

No

The key of tag 3 that is added to the instances.

key3

Tag.4.key

string

No

The key of tag 4 that is added to the instances.

key4

Tag.5.key

string

No

The key of tag 5 that is added to the instances.

key5

Tag.1.value

string

No

The value of tag 1 that is added to the instances.

value1

Tag.2.value

string

No

The value of tag 2 that is added to the instances.

value2

Tag.3.value

string

No

The value of tag 3 that is added to the instances.

value3

Tag.4.value

string

No

The value of tag 4 that is added to the instances.

value4

Tag.5.value

string

No

The value of tag 5 that is added to the instances.

value5

RegionId

string

No

The region ID of the instance. You can call the [DescribeRegions](/help/en/rds/api-query-regions) operation to query the most recent region list.

cn-hangzhou

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmy\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

23907437-79B9-411A-9EE6-75A8F0F1C619

PageNumber

integer

The page number of the returned page.

1

PageRecordCount

integer

The number of entries returned on the current page.

28

TotalRecordCount

integer

The total number of entries returned.

28

Items

array<object>

The details about the instance.

DBInstancePerformance

object

The details about the instance.

CPUUsage

string

The CPU utilization of the instance in percentage.

0.70

SessionUsage

string

The number of sessions.

0.10

DBInstanceId

string

The ID of the instance.

rm-uf6wjk5xxxxxx

DBInstanceDescription

string

The name of the instance.

DatabaseTest

IOPSUsage

string

The IOPS usage of the instance in percentage.

0.15

DiskUsage

string

The disk usage of the instance in percentage.

14.56

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "23907437-79B9-411A-9EE6-75A8F0F1C619",
  "PageNumber": 1,
  "PageRecordCount": 28,
  "TotalRecordCount": 28,
  "Items": {
    "DBInstancePerformance": [
      {
        "CPUUsage": 0.7,
        "SessionUsage": 0.1,
        "DBInstanceId": "rm-uf6wjk5xxxxxx",
        "DBInstanceDescription": "DatabaseTest",
        "IOPSUsage": 0.15,
        "DiskUsage": 14.56
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstancesByPerformance?updateTime=2024-11-20#workbench-doc-change-demo)
