Queries threat events for disks.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ebs/2021-07-30/DescribeEvents)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ebs/2021-07-30/DescribeEvents)

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

ebs:DescribeEvents

none

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

RegionId

string

Yes

The region ID. Call DescribeRegions to query the list of regions where EBS Lens is supported.

cn-hangzhou

EventName

string

No

The event name. Valid values:

-   NoSnapshot: Data protection
    
-   BurstIOTriggered: Burst IO
    
-   CostOptimizationNeeded: Cost optimization
    
-   DiskSpecNotMatchedWithInstance: The disk specifications do not match the instance type.
    
-   DiskIONo4kAligned: Read/write operations are not 4K-aligned.
    
-   DiskIOHang: An I/O hang event occurred on the disk.
    
-   InstanceIOPSExceedInstanceMaxLimit: The IOPS of the instance reached the upper limit.
    
-   InstanceBPSExceedInstanceMaxLimit: The BPS of the instance reached the upper limit.
    
-   DiskIOPSExceedInstanceMaxLimit: The IOPS of the disk reached the upper limit of the instance.
    
-   DiskBPSExceedInstanceMaxLimit: The BPS of the disk reached the upper limit of the instance.
    
-   DiskIOPSExceedDiskMaxLimit: The IOPS of the disk reached the upper limit of the disk.
    
-   DiskBPSExceedDiskMaxLimit: The BPS of the disk reached the upper limit of the disk.
    

DiskIOHang

ResourceId

string

No

The resource ID.

d-bp67acfmxazb4p\*\*\*\*

ResourceType

string

No

The resource type. Valid values:

-   disk: disk
    

disk

Status

string

No

The event status. Valid values:

-   WillExecute: Pending
    
-   Executing: In progress
    
-   Executed: Processed
    
-   Ignore: Ignored
    
-   Expired: Expired
    
-   Deleted: Deleted
    

WillExecute

StartTime

string

No

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2023-06-01T03:00:00Z

EndTime

string

No

The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2023-06-01T04:00:00Z

MaxResults

integer

No

The maximum number of entries to return on each page. If you set this parameter, you must use it with the `NextToken` parameter to perform a paged query.

Valid values: 1 to 100.

Default value: 10.

10

NextToken

string

No

The query token. Set it to the NextToken value returned from the previous API call.

AAAAAdDWBF2\*\*\*\*

EventLevel

string

No

The event level. Valid values:

-   **INFO**: Notification
    
-   **WARN**: Warning
    
-   **CRITICAL**: Critical
    

WARN

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

RequestId

string

Id of the request

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

TotalCount

integer

The total number of entries returned for the paged query.

1

NextToken

string

The token to use for the next query. If this parameter is empty, all results have been returned.

AAAAAdDWBF2\*\*\*\*

ResourceEvents

array<object>

The list of events.

object

EventType

string

The event type. Possible values:

1.  Notification
    
2.  SystemException
    
3.  Alert
    

Alert

EventName

string

The event name. Possible values:

-   NoSnapshot: Data protection
    
-   BurstIOTriggered: Burst IO
    
-   CostOptimizationNeeded: Cost optimization
    
-   DiskSpecNotMatchedWithInstance: The disk specifications do not match the instance type.
    
-   DiskIONo4kAligned: Read/write operations are not 4K-aligned.
    
-   DiskIOHang: An I/O hang event occurred on the disk.
    
-   InstanceIOPSExceedInstanceMaxLimit: The IOPS of the instance reached the upper limit.
    
-   InstanceBPSExceedInstanceMaxLimit: The BPS of the instance reached the upper limit.
    
-   DiskIOPSExceedInstanceMaxLimit: The IOPS of the disk reached the upper limit of the instance.
    
-   DiskBPSExceedInstanceMaxLimit: The BPS of the disk reached the upper limit of the instance.
    
-   DiskIOPSExceedDiskMaxLimit: The IOPS of the disk reached the upper limit of the disk.
    
-   DiskBPSExceedDiskMaxLimit: The BPS of the disk reached the upper limit of the disk.
    

DiskIOHang

ResourceId

string

The resource ID.

d-bp67acfmxazb4p\*\*\*\*

ResourceType

string

The resource type.

disk

Status

string

The event status. Possible values:

1.  WillExecute: Pending
    
2.  Executing: In progress
    
3.  Executed: Processed
    
4.  Ignore: Ignored
    
5.  Expired: Expired
    
6.  Deleted: Deleted
    

WillExecute

StartTime

string

The start time of the event. This value is a UNIX timestamp in milliseconds.

1684204822000

Description

string

The event description.

need snapshot

RecommendAction

string

The recommended action after the event occurred. Possible values:

-   ModifyDiskSpec: Upgrade or downgrade the disk.
    
-   CreateSnapshot: Create a snapshot.
    
-   ResizeDisk: Scale out the disk.
    
-   AdjustProvision: Adjust the provisioned performance.
    
-   ModifyInstanceSpec: Upgrade or downgrade the instance.
    

AdjustProvision

RecommendParams

string

The parameters for the recommended action.

4296

EventLevel

string

The event level. Possible values:

1.  INFO
    
2.  WARN
    
3.  CRITICAL
    

INFO

EndTime

string

The end time of the event. This value is a UNIX timestamp in milliseconds.

1679538083000

ExtraAttributes

string

The additional properties. Possible fields include the following:

-   EcsInstanceId: The ID of the ECS instance to which the disk is attached.
    
-   Adapter: The mount target of the disk.
    

{\\"EcsInstanceId\\":\\"i-uf6dkn9qpcw6y94g7ag7\\",\\"Adapter\\":\\"hda\\"}

## Examples

Success response

`JSON` format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "TotalCount": 1,
  "NextToken": "AAAAAdDWBF2****",
  "ResourceEvents": [
    {
      "EventType": "Alert",
      "EventName": "DiskIOHang",
      "ResourceId": "d-bp67acfmxazb4p****\n",
      "ResourceType": "disk",
      "Status": "WillExecute",
      "StartTime": "1684204822000",
      "Description": "need snapshot",
      "RecommendAction": "AdjustProvision",
      "RecommendParams": "4296",
      "EventLevel": "INFO",
      "EndTime": "1679538083000",
      "ExtraAttributes": "{\\\"EcsInstanceId\\\":\\\"i-uf6dkn9qpcw6y94g7ag7\\\",\\\"Adapter\\\":\\\"hda\\\"}"
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

App.NumberExceed

The number of apps exceeded.

400

DocumentConvertFailed.ExceedFileSizeLimit

The conversion has been failed, exceed file size limit.

english description1

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

400

IdempotentParameterMismatch

The specified parameter has changed while using an already used clientToken.

The request and a previous request contains the same client token but different parameters.

400

InvalidDiskSize.NotSupported

The specified parameter size is not valid.

400

InvalidParameter

The parameter %s is invalid.

The specified parameter value is invalid.

400

InvalidParameter.Conflict

The specified parameter %s and %s are not blank at the same time.

400

InvalidParameter.EndTime

The specified parameter EndTime is earlier than StartTime.

400

InvalidParameter.Format

Specified parameter format is not valid.

english description

400

InvalidParameter.TooManyDataQueried

Too many data queried.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred.

403

AliCroup2CloudUserCannotBuyNotInnerCommodity

There is no group cloud commodity label, and users within the group are not allowed to purchase.

There is no group cloud commodity label, and users within the group are not allowed to purchase.

403

Forbidden

User is not authorized to operate.

You are not authorized to manage the resource. Check the account permissions or contact the Alibaba Cloud account.

403

Forbidden.Action

User is not authorized to operate this action.

You are not authorized to perform this operation. Check the account permissions or contact the Alibaba Cloud account.

403

IncorrectDiskStatus.CreatingSnapshot

A previous snapshot creation is in process.

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

403

InvalidDiskCategory.NotSupported

The specified disk category is not supported.

404

InvalidApi.NotFound

Specified api is not found, please check your url and method.

404

NoSuchResource

The specified resource does not exist.

The specified resource does not exist.

504

RequestTimeout

The request is timeout, please try again later.

The request has timed out. Try again later.

See [Error Codes](https://api.alibabacloud.com/document/ebs/2021-07-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ebs/2021-07-30/DescribeEvents#workbench-doc-change-demo) for a complete list.
