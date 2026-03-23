Queries the execution status of scripts in EdgeScript (ES).

## Operation description

-   You can call this operation up to 30 times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeEsExecuteData)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeEsExecuteData)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   The required resource types are displayed in bold characters.
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cdn:DescribeEsExecuteData

none

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

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2021-02-17T20:00:00Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

**Note** The end time must be later than the start time.

2021-02-18T20:00:00Z

RuleId

string

Yes

The ID of the rule. You can call the [DescribeCdnDomainConfigs](/help/en/cdn/api-describecdndomainconfigs) operation to query script IDs.

212896\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

99D61AB3-6164-4CF2-A0DE-129C9B07618B

Contents

array<object>

The content of the script.

Content

object

Name

string

The name of the table that shows the status of the script.

Exception

Points

array

The list of timestamps and values in the corresponding columns of the table that shows the status of the script.

points

string

The timestamp and value of the corresponding columns in the table that shows the status of the script.

2021-02-18T19:05:00Z,8

Columns

array

The time and column names in the table that shows the status of the script.

columns

string

The time and column names in the table that shows the status of the script.

time,Exception

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "99D61AB3-6164-4CF2-A0DE-129C9B07618B",
  "Contents": [
    {
      "Name": "Exception",
      "Points": [
        "2021-02-18T19:05:00Z,8"
      ],
      "Columns": [
        "time,Exception"
      ]
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeEsExecuteData?updateTime=2024-12-18#workbench-doc-change-demo)

2023-06-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeEsExecuteData?updateTime=2023-06-07#workbench-doc-change-demo)
