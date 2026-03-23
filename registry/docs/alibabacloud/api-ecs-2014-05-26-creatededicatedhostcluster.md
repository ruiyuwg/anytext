Creates a dedicated host group.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateDedicatedHostCluster)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateDedicatedHostCluster)

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

ecs:CreateDedicatedHostCluster

create

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

Yes

The region ID of the host group. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized Resource Access Management (RAM) users, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

Default value: false.

false

Tag

array<object>

No

The tags of the host group.

object

No

The tags of the host group.

Key

string

No

The tag key. Valid values of N: 1 to 20. The tag key cannot be an empty string. It can be no more than 64 characters in length, and can neither contain `http://` or `https://` nor start with `acs:` or `aliyun`.

TestKey

Value

string

No

The tag value. Valid values of N: 1 to 20. The tag value cannot be an empty string. It can be no more than 64 characters in length and cannot contain `http://` or `https://`.

TestValue

ResourceGroupId

string

No

The resource group ID of the host group.

rg-bp67acfmxazb4p\*\*\*\*

ZoneId

string

Yes

The zone ID of the host group. You can call the [DescribeZones](/help/en/ecs/api-describezones) operation to query the most recent zone list.

cn-hangzhou-f

DedicatedHostClusterName

string

No

The name of the host group. It must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

This parameter is left empty by default.

myDDHCluster

Description

string

No

The description of the host group. It must be 2 to 256 characters in length, and cannot start with `http://` or `https://`.

This parameter is left empty by default.

This-is-my-DDHCluster

## Response parameters

Parameter

Type

Description

Example

object

DedicatedHostClusterId

string

The ID of the host group.

dc-bp12wlf6bw0vz9v2\*\*\*\*

RequestId

string

The request ID.

E2A664A6-2933-4C64-88AE-5033D003\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "DedicatedHostClusterId": "dc-bp12wlf6bw0vz9v2****",
  "RequestId": "E2A664A6-2933-4C64-88AE-5033D003****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

404

InvalidZone.NotFound

The ZoneId provided does not exist in our records.

The specified zone ID does not exist.

404

QuotaExceed.Region

The maximum region quota of Dedicated Host Cluster has exceeded.

\-

404

QuotaExceed.Zone

The maximum zone quota of Dedicated Host Cluster has exceeded.

\-

404

InvalidParam.Zone

The specified zone not match region.

\-

404

InvalidRegionId.NotFound

The regionId provided does not exist in our records.

The RegionId provided does not exist

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDedicatedHostCluster?updateTime=2025-02-20#workbench-doc-change-demo)

2023-06-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDedicatedHostCluster?updateTime=2023-06-13#workbench-doc-change-demo)
