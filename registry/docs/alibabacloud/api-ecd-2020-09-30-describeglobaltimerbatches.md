Queries the execution history of scheduled tasks to retrieve batch information and a summary of the execution results.

## Description

-   This operation uses a centralized domain name with endpoints in Shanghai and Singapore. You cannot call this operation from other regions.

## Debugging

[You can call this operation directly in OpenAPI Explorer. This eliminates the need to calculate signatures. After a successful call, OpenAPI Explorer automatically generates software development kit (SDK) code examples.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeGlobalTimerBatches)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeGlobalTimerBatches)

## Authorization information

The following table describes the authorization information for this operation. You can add this information to the `Action` element of a Resource Access Management (RAM) access policy to grant a RAM user or RAM role the permissions to call this operation. The following terms are used:

-   Operation: The specific permission.
-   Access level: The access level of each operation. Valid values: Write, Read, and List.
-   Resource type: The resource type that supports authorization. The following rules apply:
    -   An asterisk ( \* ) indicates a required resource type.
    -   If the operation does not support resource-level authorization, the value is `All Resources`.
-   Condition key: The condition key that is defined by the cloud product.
-   Associated operation: Other operations that are required to call this operation. You must have the permissions to perform these associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

ecd:DescribeGlobalTimerBatches

list

\*All Resources

`*`

None

None

## Request parameters

Name

Type

Required

Description

Example

RegionId

string

Yes

The region ID.

-   Shanghai
-   Singapore

cn-shanghai

TimerType

string

No

The type of the scheduled task for which you want to query batch information.

-   TimerBoot: Scheduled startup
-   TimerShutdown: Scheduled shutdown
-   TimerReboot: Scheduled restart
-   TimerReset: Scheduled reset
-   TimerMaintenance: Scheduled maintenance
-   TimerHibernate: Scheduled hibernation

1

MaxResults

string

No

The maximum number of entries to return.

20

NextToken

string

No

The token to start the next query. If this parameter is empty, all results have been returned.

caeba0bbb2be03f84eb48b699f0a4883

SearchRegionId

string

No

The ID of the region to search in. Use this parameter to filter cloud computers by region.

cn-hangzhou

GroupId

string

No

The ID of the scheduled task group.

ccg-i1ruuudp92qpj\*\*\*\*

## Response parameters

Name

Type

Description

Example

object

The response schema.

RequestId

string

The request ID.

E54EB497-D7B7-5F04-B744-D8DFA7B\*\*\*\*\*\*

Count

integer

The total number of entries.

1

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. If this parameter is empty, all results have been returned.

caeba0bbb2be03f84eb48b699f0a4883

Results

array<object>

A list of the returned execution batches.

Batch

object

The array of results.

BatchId

string

The ID of the scheduled task execution batch.

ccg-0cvfvf6u1enx1\*\*\*\*

TimerType

string

The type of the scheduled task.

TimerBoot

CreateTime

string

The time when the record was created.

2023-08-03T08:27:29Z

SucceedCount

integer

The total number of successful task executions.

0

FailedCount

integer

The number of failed executions.

0

SkippedCount

integer

The number of skipped executions.

0

RunningCount

integer

The number of running executions.

0

## Examples

Sample response

`JSON` format

```
{
  "RequestId": "E54EB497-D7B7-5F04-B744-D8DFA7B******",
  "Count": 1,
  "NextToken": "caeba0bbb2be03f84eb48b699f0a4883",
  "Results": [
    {
      "BatchId": "ccg-0cvfvf6u1enx1****",
      "TimerType": "TimerBoot",
      "CreateTime": "2023-08-03T08:27:29Z",
      "SucceedCount": 0,
      "FailedCount": 0,
      "SkippedCount": 0,
      "RunningCount": 0
    }
  ]
}
```

## Error codes

For more information about error codes, see the [Error Center](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change date

Change Summary

Operations

2025-12-17

Added support for OpenAPI

[View details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeGlobalTimerBatches?updateTime=2025-12-17#workbench-doc-change-demo)
