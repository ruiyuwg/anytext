Queries detailed information about one or more deployment sets.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDeploymentSets)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDeploymentSets)

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

ecs:DescribeDeploymentSets

get

\*DeploymentSet

`acs:ecs:{#regionId}:{#accountId}:deploymentset/*`

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

The region ID of the deployment set. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

PageNumber

integer

No

The page number.

Pages start from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries to return on each page.

Valid values: 1 to 50.

Default value: 10.

10

DeploymentSetIds

string

No

The IDs of deployment sets. The value can be a JSON array that consists of deployment set IDs in the format of `["ds-xxxxxxxxx", "ds-yyyyyyyyy", ... "ds-zzzzzzzzz"]`. You can specify up to 100 deployment set IDs in each request. Separate the deployment set IDs with commas (,).

\["ds-bp67acfmxazb4ph\*\*\*\*", "ds-bp67acfmxazb4pi\*\*\*\*", … "ds-bp67acfmxazb4pj\*\*\*\*"\]

NetworkType

string

No

**Note** This parameter is deprecated.

null

Strategy

string

No

The deployment strategy. Valid values:

-   Availability: high availability strategy
-   AvailabilityGroup: high availability group strategy

Availability

DeploymentSetName

string

No

The name of the deployment set. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain digits, letters, colons (:), underscores (\_), and hyphens (-).

testDeploymentSetName

Granularity

string

No

**Note** This parameter is deprecated.

null

Domain

string

No

**Note** This parameter is deprecated.

null

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries per page.

1

PageNumber

integer

The page number.

1

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TotalCount

integer

The total number of queried deployment sets.

1

RegionId

string

The ID of the region.

cn-hangzhou

DeploymentSets

array<object>

Details about the deployment sets.

DeploymentSet

object

CreationTime

string

The time when the deployment set was created.

2021-12-07T06:01:46Z

Strategy

string

The deployment strategy.

LooseDispersion

DeploymentSetId

string

The ID of the deployment set.

ds-bp67acfmxazb4ph\*\*\*\*

DeploymentStrategy

string

The deployment strategy. The return value of this parameter is the value of the `Strategy` request parameter.

Availability

DeploymentSetDescription

string

The description of the deployment set.

testDeploymentSetDescription

Domain

string

The deployment domain.

default

GroupCount

integer

The number of deployment set groups in the deployment set.

**Note** This parameter is valid only when the Strategy request parameter is set to AvailabilityGroup.

3

Granularity

string

The deployment granularity.

host

DeploymentSetName

string

The name of the deployment set.

testDeploymentSetName

InstanceAmount

integer

The number of instances in the deployment set.

3

InstanceIds

array

The IDs of the Elastic Compute Service (ECS) instances in the deployment set.

InstanceId

string

The ID of the ECS instance in the deployment set.

i-bp67acfmxazb4ph\*\*\*\*

Capacities

array<object>

Details of the capacities of the deployment set. This parameter is valid only when the deployment set contains ECS instances. The value contains information about the capacities of the deployment set in different zones.

Capacity

object

ZoneId

string

The ID of the zone. Only the zone IDs of existing ECS instances in the deployment set are returned.

cn-hangzhou-i

UsedAmount

integer

The number of ECS instances that reside in the zone in the deployment set.

2

AvailableAmount

integer

The number of ECS instances that can be added to the deployment set within the zone.

18

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 1,
  "PageNumber": 1,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TotalCount": 1,
  "RegionId": "cn-hangzhou",
  "DeploymentSets": {
    "DeploymentSet": [
      {
        "CreationTime": "2021-12-07T06:01:46Z",
        "Strategy": "LooseDispersion",
        "DeploymentSetId": "ds-bp67acfmxazb4ph****",
        "AccountId": 0,
        "DeploymentStrategy": "Availability",
        "DeploymentSetDescription": "testDeploymentSetDescription",
        "Domain": "default",
        "GroupCount": 3,
        "Granularity": "host",
        "DeploymentSetName": "testDeploymentSetName",
        "InstanceAmount": 3,
        "InstanceIds": {
          "InstanceId": [
            "i-bp67acfmxazb4ph****"
          ]
        },
        "Capacities": {
          "Capacity": [
            {
              "ZoneId": "cn-hangzhou-i",
              "UsedAmount": 2,
              "AvailableAmount": 18
            }
          ]
        }
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

403

InvalidDeploymentSetIds.TooManyInput

The parameter DeploymentSets size should less than 100.

The number of specified deployment sets exceeds 100.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-01-17

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDeploymentSets?updateTime=2022-01-17#workbench-doc-change-demo)
