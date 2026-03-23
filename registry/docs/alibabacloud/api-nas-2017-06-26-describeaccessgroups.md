Queries permission groups.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/NAS/2017-06-26/DescribeAccessGroups)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/NAS/2017-06-26/DescribeAccessGroups)

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

nas:DescribeAccessGroups

list

\*AccessGroup

`acs:nas:{#regionId}:{#accountId}:accessgroup/{#accessgroupName}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

AccessGroupName

string

No

The name of the permission group.

Limits:

-   The name must be 3 to 64 characters in length.
-   The name must start with a letter and can contain letters, digits, underscores (\_), and hyphens (-).

DEFAULT\_VPC\_GROUP\_NAME

PageSize

integer

No

The number of permission groups returned per page.

Valid values: 1 to 100.

Default value: 10.

2

PageNumber

integer

No

The page number.

Pages start from page 1. Default value: 1.

1

UseUTCDateTime

boolean

No

Specifies whether the time to return is displayed in UTC.

Valid values:

-   true (default): The time is displayed in UTC.
-   false: The time is not displayed in UTC.

true

FileSystemType

string

No

The type of the file system.

Valid values:

-   standard: General-purpose NAS
-   extreme: Extreme NAS
-   cpfs: CPFS

standard

## Response parameters

Parameter

Type

Description

Example

object

AccessGroups

array<object>

The queried permission groups.

AccessGroup

object

AccessGroupName

string

The name of the permission group.

DEFAULT\_VPC\_GROUP\_NAME

Description

string

The description of the permission group.

This is a test access group.

CreateTime

string

The time when the permission group was created.

2020-01-05T16:00:00Z

AccessGroupType

string

The network type of the permission group. Valid value: **Vpc**.

Vpc

RuleCount

integer

The total number of rules in the permission group.

0

MountTargetCount

integer

The number of mount targets to which the permission group is attached.

0

FileSystemType

string

The type of the file system.

Valid values:

-   standard: General-purpose NAS
-   extreme: Extreme NAS
-   cpfs: CPFS

standard

RegionId

string

Region ID.

cn-hangzhou

TotalCount

integer

The total number of permission groups.

1

RequestId

string

The request ID.

2514F97E-FFF0-4A1F-BF04-729CEAC6\*\*\*\*

PageSize

integer

The number of permission groups returned per page.

2

PageNumber

integer

The page number.

1

## Examples

Sample success responses

`JSON`format

```
{
  "AccessGroups": {
    "AccessGroup": [
      {
        "AccessGroupName": "DEFAULT_VPC_GROUP_NAME",
        "Description": "This is a test access group.",
        "CreateTime": "2020-01-05T16:00:00Z",
        "AccessGroupType": "Vpc",
        "RuleCount": 0,
        "MountTargetCount": 0,
        "FileSystemType": "standard",
        "RegionId": "cn-hangzhou"
      }
    ]
  },
  "TotalCount": 1,
  "RequestId": "2514F97E-FFF0-4A1F-BF04-729CEAC6****",
  "PageSize": 2,
  "PageNumber": 1
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/NAS/2017-06-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-02-26

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/DescribeAccessGroups?updateTime=2024-02-26#workbench-doc-change-demo)

2023-11-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/DescribeAccessGroups?updateTime=2023-11-03#workbench-doc-change-demo)
