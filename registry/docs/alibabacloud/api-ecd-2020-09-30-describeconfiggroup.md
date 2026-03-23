Queries configuration groups.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeConfigGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeConfigGroup)

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

ecd:DescribeConfigGroup

list

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

No

The ID of the region. Set the value to `cn-shanghai`.

cn-hangzhou

GroupId

string

No

The ID of the configuration group.

cg-i1ruuudp92qpj\*\*\*\*

Name

string

No

The name of the configuration group.

ScheduledTask

Type

string

No

The type of the configuration group.

Valid value:

-   Timer: the scheduled task type.

Timer

ProductType

string

No

The service type of the configuration group.

Valid value:

-   CLOUD\_DESKTOP: the cloud computer service.

CLOUD\_DESKTOP

Statuses

array

No

The status of the configuration groups.

string

No

The state of the configuration group.

Valid values:

-   AVAILABLE: The configuration group is available.
-   UNAVAILABLE: The configuration group is deleted.
-   DELETING: The configuration group is being deleted.
-   UPDATING: The configuration group is being modified.

AVAILABLE

PageNumber

integer

No

The page number.

1

PageSize

integer

No

The number of entries per page.

20

GroupIds

array

No

The IDs of the configuration groups.

string

No

The ID of the configuration group.

ccg-0cwz8naid24v\*\*\*\*\*

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

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

Data

array<object>

The configuration groups.

data

object

The configuration group.

GroupId

string

The ID of the configuration group.

ccg-0cid8v30an12\*\*\*\*

Name

string

The name of the configuration group.

ScheduledTask

Description

string

The description of the configuration group.

ScheduledTask

Type

string

The type of the configuration group.

Valid values:

-   Timer: the scheduled task type.

Timer

ProductType

string

The service type of the configuration group.

Valid values:

-   CLOUD\_DESKTOP: the cloud computer service.

CLOUD\_DESKTOP

Status

string

The state of the configuration group.

Valid values:

-   AVAILABLE: The configuration group is available.
-   UNAVAILABLE: The configuration group is deleted.
-   DELETING: The configuration group is being deleted.
-   UPDATING: The configuration group is being modified.

AVAILABLE

BindCount

integer

The number of resources that are bound to the configuration group.

4

BindCountMap

object

The number of bound cloud computers.

integer

The number of bound resources.

10

PageNumber

integer

The page number.

1

PageSize

integer

The number of entries per page.

20

TotalCount

integer

The total number of entries returned.

20

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "Data": [
    {
      "GroupId": "ccg-0cid8v30an12****",
      "Name": "ScheduledTask",
      "Description": "ScheduledTask",
      "Type": "Timer",
      "ProductType": "CLOUD_DESKTOP",
      "Status": "AVAILABLE",
      "BindCount": 4,
      "BindCountMap": {
        "key": 10
      }
    }
  ],
  "PageNumber": 1,
  "PageSize": 20,
  "TotalCount": 20
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-23

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeConfigGroup?updateTime=2025-12-23#workbench-doc-change-demo)
