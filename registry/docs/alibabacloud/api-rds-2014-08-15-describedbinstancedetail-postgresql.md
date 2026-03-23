You can call the DescribeDBInstanceDetail operation to query the details of an instance.

## Operation description

This operation is phased out.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstanceDetail)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstanceDetail)

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

rds:DescribeDBInstanceDetail

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

The client token that is used to ensure the idempotence of the request.

**Note** You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

ETnLKlblzczshOTUbOCziJZNwH\*\*\*\*

DBInstanceId

string

Yes

The ID of the instance. You can call the [DescribeDBInstances](/help/en/rds/api-query-instances) operation to query the ID of the instance.

rm-bp6wjk5xxxxxxxxxx

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

ActivationState

string

Indicates whether the instance is in the active state.

Invalid

DBInstanceId

string

The ID of the instance.

rm-bp6wjk5xxxxxxxxxx

LicenseType

string

The type of the license.

Normal

RequestId

string

The ID of the request.

06B220E2-EAC5-4DBE-A1FC-1B62DB6A\*\*\*\*

RegionId

string

The region ID of the instance.

cn-hangzhou

## Examples

Sample success responses

`JSON`format

```
{
  "ActivationState": "Invalid",
  "DBInstanceId": "rm-bp6wjk5xxxxxxxxxx",
  "LicenseType": "Normal",
  "RequestId": "06B220E2-EAC5-4DBE-A1FC-1B62DB6A****",
  "RegionId": "cn-hangzhou"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidEngine.NotSupported

Current engine does not support this api.

The operation is not supported for the database engine that is run on the RDS instance.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-08-04

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceDetail?updateTime=2022-08-04#workbench-doc-change-demo)
