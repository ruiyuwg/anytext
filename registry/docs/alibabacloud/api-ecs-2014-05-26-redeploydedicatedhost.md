Migrates Elastic Compute Service (ECS) instances from a failed dedicated host.

## Operation description

If a dedicated host is in the `UnderAssessment` state, we recommend that you call this operation to migrate ECS instances away from the dedicated host to prevent permanent failures. You can call the [DescribeDedicatedHosts](/help/en/dedicated-host/developer-reference/api-describededicatedhosts) operation to query the status of a dedicated host.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/RedeployDedicatedHost)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/RedeployDedicatedHost)

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

ecs:RedeployDedicatedHost

update

\*DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

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

Yes

The region ID of the dedicated host. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

DedicatedHostId

string

Yes

The ID of the dedicated host.

dh-bp165p6xk2tlw61e\*\*\*\*

MigrationType

string

No

Specifies whether to stop the instance before it is migrated to the destination dedicated host. Valid values:

-   reboot: stops the instance before migration.
-   LiveMigrationFirst: migrates the instance without stopping it. If you set MigrationType to LiveMigrationFirst, you must specify DedicatedHostId. In this case, you cannot change the instance type of the ECS instance when the instance is migrated. If the migration in LiveMigrationFirst mode fails, the system switches to the Reboot mode.

Default value: reboot.

Reboot

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

FCED4B7A-53D5-4C04-ABE3-26D4F3890D57

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "FCED4B7A-53D5-4C04-ABE3-26D4F3890D57"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDedicatedHostStatus.Malformed

The specified DedicatedHost is in inValid status to execute redeployment.

\-

400

InvalidInstanceStatus.Unstopped

There is unstopped instances on DedicatedHost.

\-

403

InvalidUser.Unauthorized

The user is not authorized.

The account you are currently using does not have permission.

404

InvalidDedicatedHostId.NotFound

The specified DedicatedHostId does not exist.

\-

404

InvalidDedicatedHostId.NotFound

The specified Dedicated Host does not exist.

The specified dedicated host does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RedeployDedicatedHost?updateTime=2025-02-20#workbench-doc-change-demo)

2024-11-22

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RedeployDedicatedHost?updateTime=2024-11-22#workbench-doc-change-demo)
