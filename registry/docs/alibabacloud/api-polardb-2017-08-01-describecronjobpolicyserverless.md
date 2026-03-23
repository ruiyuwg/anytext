Queries the policies for automatically triggered tasks.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeCronJobPolicyServerless)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeCronJobPolicyServerless)

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

polardb:DescribeCronJobPolicyServerless

list

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

The ID of the serverless cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RegionId

string

Yes

The region ID.

cn-hangzhou

JobId

string

No

The ID of the scheduled task.

8006e51c-dab3-4602-bc69-4f728002c6ce

PageSize

integer

No

The number of records to return on each page. Valid values:

-   **30**
    
-   **50**
    
-   **100**
    

Default value: **30**.

30

PageNumber

integer

No

The page number. Default value: 1.

1

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

9B7BFB11-C077-4FE3-B051-F69CEB\*\*\*\*\*\*

TotalRecordCount

integer

The total number of records.

5

PageNumber

integer

The page number.

1

PageSize

integer

The number of records on each page. Valid values:

-   **30**
    
-   **50**
    
-   **100**
    

Default value: **30**.

30

Items

array<object>

The list of tasks.

object

The scheduled task objects.

JobId

string

The ID of the scheduled task.

12eee3eb-60bd-40ac-a403-218e02eb99c7

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RegionId

string

The region ID.

cn-hangzhou

StartTime

string

The start time of the task. The time is in the `yyyy-MM-ddTHH:mmZ` format and in UTC.

2020-06-09T18:00:00Z

EndTime

string

The end time of the task. The time is in the yyyy-MM-ddTHH:mm:ssZ format and in UTC.

2024-12-04T02:25:00Z

Status

string

The status of the task. Valid values:

-   **working**: The scheduled task is running.
    
-   **finish**: The scheduled task is complete.
    

3

OrderId

string

The order ID.

254752088000354

CronExpression

string

The Cron expression for the scheduled task.

0 0 8 \* \* ?

Action

string

A system parameter. Set the value to **ModifyDBClusterServerlessConf**.

ModifyDBClusterServerlessConf

ScaleMin

string

The minimum capacity. The value must be from 0.25 to 32 and less than or equal to the maximum capacity. Unit: PolarDB Capacity Unit (PCU).

1

ScaleMax

string

The maximum capacity. The value must be from 1 to 32. Unit: PCU.

9

ScaleRoNumMin

string

The minimum number of read-only nodes. Valid values: 0 to 15.

2

ScaleRoNumMax

string

The maximum number of read-only nodes. The value must be greater than or equal to the minimum value. Valid values: 0 to 15.

3

AllowShutDown

string

Specifies whether to enable No-activity Suspension. Valid values:

-   **true**: enabled
    
-   **false**: disabled (default)
    

true

SecondsUntilAutoPause

string

The detection period for No-activity Suspension. The value must be a multiple of 5. Valid values: 5 to 1440. Unit: minutes.

1200

ScaleApRoNumMin

string

The minimum number of read-only IMCI nodes. Valid values: 0 to 15.

1

ScaleApRoNumMax

string

The maximum number of read-only IMCI nodes. Valid values: 1 to 15.

2

ServerlessRuleMode

string

The elasticity sensitivity. Valid values:

-   normal: standard
    
-   flexible: sensitive
    

normal

ServerlessRuleCpuEnlargeThreshold

string

The CPU utilization threshold for scaling up. Valid values: 40 to 100. Unit: %.

70

ServerlessRuleCpuShrinkThreshold

string

The CPU utilization threshold for scaling down. Valid values: 10 to 100. Unit: %. The difference between the scale-up threshold and the scale-down threshold must be 30 or greater.

40

## Examples

Success response

`JSON` format

```
{
  "RequestId": "9B7BFB11-C077-4FE3-B051-F69CEB******",
  "TotalRecordCount": 5,
  "PageNumber": 1,
  "PageSize": 30,
  "Items": [
    {
      "JobId": "12eee3eb-60bd-40ac-a403-218e02eb99c7",
      "DBClusterId": "pc-*****************",
      "RegionId": "cn-hangzhou",
      "StartTime": "2020-06-09T18:00:00Z",
      "EndTime": "2024-12-04T02:25:00Z",
      "Status": "3",
      "OrderId": "254752088000354",
      "CronExpression": "0 0 8 * * ?",
      "Action": "ModifyDBClusterServerlessConf",
      "ScaleMin": "1",
      "ScaleMax": "9",
      "ScaleRoNumMin": "2",
      "ScaleRoNumMax": "3",
      "AllowShutDown": "true",
      "SecondsUntilAutoPause": "1200",
      "ScaleApRoNumMin": "1",
      "ScaleApRoNumMax": "2",
      "ServerlessRuleMode": "normal",
      "ServerlessRuleCpuEnlargeThreshold": "70",
      "ServerlessRuleCpuShrinkThreshold": "40"
    }
  ]
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

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

404

InvalidJobId.NotFound

The Specified jobId does not found.

The Specified jobId does not found.

404

InvalidCronJob.NotFound

The CronJob for jobId does not found.

The CronJob for jobId does not found.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeCronJobPolicyServerless#workbench-doc-change-demo) for a complete list.
