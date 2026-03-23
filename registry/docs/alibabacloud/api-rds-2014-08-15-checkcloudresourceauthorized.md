Checks permissions that are granted on an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/CheckCloudResourceAuthorized)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/CheckCloudResourceAuthorized)

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

rds:CheckCloudResourceAuthorized

get

\*All Resources

`*`

-   rds:ResourceTag

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

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-t4n7j9eb52y7c1960

TargetRegionId

string

No

The destination region ID. You can call the DescribeRegions operation to query the most recent region list.

us-east-1

ResourceGroupId

string

No

The resource group ID.

rg-acfmy\*\*\*\*\*\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

8B993DA9-5272-5414-94E3-4CA8BA0146C2

RoleArn

string

The Alibaba Cloud Resource Name (ARN) of the RAM role. A RAM role is a virtual identity that you can create within your Alibaba Cloud account. For more information, see [RAM role overview](/help/en/ram/user-guide/ram-role-overview).

acs:ram::1406926\*\*\*\*:role/aliyunrdsinstanceencryptiondefaultrole

AuthorizationState

integer

The authorization status. Valid values:

-   **1**: authorized
-   **0**: not authorized

1

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "8B993DA9-5272-5414-94E3-4CA8BA0146C2",
  "RoleArn": "acs:ram::1406926****:role/aliyunrdsinstanceencryptiondefaultrole",
  "AuthorizationState": 1
}
```

## Error codes

HTTP status code

Error code

Error message

400

InvalidParameter.ByokInsnameAndRegionAllEmpty

The insName and targetRegionId can't be all empty.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-22

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CheckCloudResourceAuthorized?updateTime=2024-11-22#workbench-doc-change-demo)

2022-07-27

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CheckCloudResourceAuthorized?updateTime=2022-07-27#workbench-doc-change-demo)
