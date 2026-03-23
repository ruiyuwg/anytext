Creates a scheduled task policy for a serverless cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateCronJobPolicyServerless)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateCronJobPolicyServerless)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

polardb:CreateCronJobPolicyServerless

create

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterId

string

Yes

The cluster ID.

pc-xxxxxxxxxx

RegionId

string

Yes

The region ID.

cn-hangzhou

CronExpression

string

Yes

The Cron expression.

0 0 13 \* \* ?

ScaleMin

string

No

The minimum number of PolarDB Capacity Units (PCUs). The value must be from 0.25 to 32 and must be less than or equal to the value of ScaleMax.

1

ScaleMax

string

No

The maximum number of PCUs. The value must be from 1 to 32.

3

ScaleRoNumMin

string

No

The minimum number of read-only nodes. Valid values: 0 to 15.

2

ScaleRoNumMax

string

No

The maximum number of read-only nodes. Valid values: 0 to 15. The value must be greater than or equal to the value of ScaleRoNumMin.

4

AllowShutDown

string

No

Specifies whether to enable no-activity suspension. Valid values:

-   **true**: Enables the feature.
    
-   **false** (default): Disables the feature.
    

true

SecondsUntilAutoPause

string

No

The period of inactivity in minutes before the cluster is automatically paused. The value must be a multiple of 5 and range from 5 to 1440.

10

ScaleApRoNumMin

string

No

The minimum number of read-only column store nodes. Valid values: 0 to 15.

1

ScaleApRoNumMax

string

No

The maximum number of read-only column store nodes. Valid values: 0 to 15.

1

ServerlessRuleCpuEnlargeThreshold

string

No

The CPU utilization percentage that triggers a scale-up. Valid values: 40 to 100.

60

ServerlessRuleCpuShrinkThreshold

string

No

The CPU utilization percentage that triggers a scale-down. Valid values: 10 to 100. The value of ServerlessRuleCpuEnlargeThreshold minus the value of this parameter must be 30 or greater.

30

ServerlessRuleMode

string

No

The scaling sensitivity. Valid values:

-   normal: standard
    
-   flexible: flexible
    

normal

StartTime

string

No

The start time of the task. Use the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in Coordinated Universal Time (UTC).

2020-11-14T00:00Z

EndTime

string

Yes

The end time of the task. Use the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.

2021-09-23T01:01:00Z

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

45D24263-7E3A-4140-9472-\*\*\*\*\*\*\*\*\*\*\*\*

JobId

string

The ID of the scheduled task.

1fa3c0e7-b568-4f41-b703-463c96a91bd8

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RegionId

string

The region ID.

cn-hangzhou

Status

string

The status of the task. Valid values:

-   `working`: The scheduled task is running.
    
-   `finish`: The scheduled task is complete.
    

working

CronExpression

string

The Cron expression.

0 0 8 \* \* ?

Action

string

The action of the scheduled task. The value is fixed as `ModifyDBClusterServerlessConf`.

ModifyDBClusterServerlessConf

StartTime

string

The start time of the task. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and in UTC.

2020-05-01T00:00Z

EndTime

string

The end time of the task. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and in UTC.

2021-04-07T04:00Z

## Examples

Success response

`JSON` format

```
{
  "RequestId": "45D24263-7E3A-4140-9472-************",
  "JobId": "1fa3c0e7-b568-4f41-b703-463c96a91bd8",
  "DBClusterId": "pc-****************",
  "RegionId": "cn-hangzhou",
  "Status": "working",
  "CronExpression": "0 0 8 * * ?",
  "Action": "ModifyDBClusterServerlessConf",
  "StartTime": "2020-05-01T00:00Z",
  "EndTime": "2021-04-07T04:00Z"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidRegionId.Malformed

The specified parameter RegionId is not valid.

The specified RegionId parameter is invalid.

400

InvalidStartTime.Malformed

The specified parameter StartTime is not valid.

The specified StartTime parameter is invalid.

400

InvalidEndTime.Malformed

The specified parameter EndTime is not valid.

The specified EndTime parameter is invalid.

400

InvalidCronJobParam.Type

The specified type is not valid.

The specified type is not valid.

400

InvalidCronJobParam.InstanceId

The specified instanceId is not valid.

The specified instanceId is invalid.

400

InvalidCronJobParam.CronExpression

The specified cronExpression is not valid.

The specified cronExpression is not valid.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

409

InvalidCronJob.DuplicateJob

This instance has tasks with duplicate crontab expressions.

This instance has tasks with duplicate crontab expressions.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/CreateCronJobPolicyServerless#workbench-doc-change-demo) for a complete list.
