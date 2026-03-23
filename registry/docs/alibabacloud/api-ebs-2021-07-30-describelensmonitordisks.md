Queries information about one or more of your Elastic Block Storage (EBS) disks.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ebs/2021-07-30/DescribeLensMonitorDisks)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ebs/2021-07-30/DescribeLensMonitorDisks)

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

ebs:DescribeLensMonitorDisks

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

RegionId

string

Yes

The region ID. You can call the DescribeRegions operation to query the list of regions that support EBS Lens.

cn-hangzhou

DiskIds

array

No

A list of disk IDs.

\['d-1', 'd-2'\]

string

No

The disk ID.

d-cd40hxfu0v\*\*\*\*\*

DiskCategory

string

No

The category of the disk. Valid values:

-   cloud: basic disk.
    
-   cloud\_efficiency: ultra disk.
    
-   cloud\_ssd: standard SSD.
    
-   cloud\_essd: Enhanced SSD (ESSD).
    
-   cloud\_auto: ESSD AutoPL disk.
    
-   cloud\_essd\_entry: ESSD Entry disk.
    

cloud\_auto

LensTags

array

No

A list of event tags. This parameter is used to filter disks for which the specified types of events occurred within the last 24 hours. Valid values:

-   NoSnapshot: data protection
    
-   BurstIOTriggered: burst I/O
    
-   CostOptimizationNeeded: cost optimization
    
-   DiskSpecNotMatchedWithInstance: The disk specifications do not match the instance type.
    
-   DiskIONo4kAligned: non-4K aligned read/write
    
-   DiskIOHang: An I/O hang occurred on the disk.
    
-   InstanceIOPSExceedInstanceMaxLimit: The IOPS of the instance has reached its upper limit.
    
-   InstanceBPSExceedInstanceMaxLimit: The BPS of the instance has reached its upper limit.
    
-   DiskIOPSExceedInstanceMaxLimit: The IOPS of the disk has reached the upper limit of the instance.
    
-   DiskBPSExceedInstanceMaxLimit: The BPS of the disk has reached the upper limit of the instance.
    
-   DiskIOPSExceedDiskMaxLimit: The IOPS of the disk has reached its upper limit.
    
-   DiskBPSExceedDiskMaxLimit: The BPS of the disk has reached its upper limit.
    

string

No

The event tag of the disk.

NoSnapshot

NextToken

string

No

The token used to start the next query. Set this parameter to the NextToken value returned from a previous call to this operation.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

MaxResults

integer

No

The number of entries per page. Maximum value: 100. Default value:

-   10.
    
-   If you set this parameter to a value greater than 100, the default value is 100.
    

10

DiskIdPattern

string

No

A regular expression to filter disk IDs in a fuzzy query.

d-cd40hxfu0v\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

DescribeLensMonitorDisksResponse

DiskInfos

array<object>

The list of disk information.

array<object>

The disk information.

DiskId

string

The disk ID.

d-cd401\*\*\*\*

DiskName

string

The disk name.

disk-28c6b\*\*\*\*

DiskType

string

The type of the disk. Valid values:

-   system: system disk.
    
-   data: data disk.
    

system

DiskStatus

string

The status of the disk. Valid values:

-   Available: in use.
    
-   Deleted: deleted.
    

Available

RegionId

string

The region ID.

cn-hangzhou

DiskCategory

string

The category of the disk. Valid values:

-   cloud: basic disk.
    
-   cloud\_efficiency: ultra disk.
    
-   cloud\_ssd: standard SSD.
    
-   cloud\_essd: ESSD.
    
-   cloud\_auto: ESSD AutoPL disk.
    
-   cloud\_essd\_entry: ESSD Entry disk.
    

cloud\_essd

PerformanceLevel

string

The performance level of the ESSD. Valid values:

-   PL0: A maximum of 10,000 random read/write IOPS per disk.
    
-   PL1: A maximum of 50,000 random read/write IOPS per disk.
    
-   PL2: A maximum of 100,000 random read/write IOPS per disk.
    
-   PL3: A maximum of 1,000,000 random read/write IOPS per disk.
    

PL0

Tags

array<object>

The collection of tags for the disk.

object

The tag of the disk.

TagValue

string

The tag value.

user

TagKey

string

The tag key.

tag1

ZoneId

string

The ID of the zone to which the disk belongs.

cn-hangzhou-j

Size

integer

The size of the disk, in GiB.

64

Iops

integer

The maximum number of input/output operations per second (IOPS).

4000

Bps

integer

The maximum throughput. Unit: MB/s.

300

ProvisionedIops

integer

The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50000, 1000 \* capacity - baseline performance}.

Baseline performance = min{1,800 + 50 \* capacity, 50,000}.

This parameter is returned only when `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

4000

BurstingEnabled

boolean

Indicates whether the performance burst feature is enabled. Valid values:

-   true: Yes.
    
-   false: No.
    

This parameter is returned only when `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

true

LensTags

array

A collection of event tags for the disk. The event tags indicate the events that occurred on the disk in the last 24 hours. The data may have a delay of up to 1 hour.

string

The event tag of the disk.

\["NoSnapshot", "DiskIOHang"\]

SharingEnabled

string

Indicates whether the disk is a shared disk.

true

NextToken

string

The token to use to retrieve the next page of results. This value is not returned when there are no more results to return.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

TotalCount

integer

The total number of entries.

6

RequestId

string

The ID of the request. This ID is returned for every request, regardless of the result.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "DiskInfos": [
    {
      "DiskId": "d-cd401****",
      "DiskName": "disk-28c6b****",
      "DiskType": "system",
      "DiskStatus": "Available",
      "RegionId": "cn-hangzhou",
      "DiskCategory": "cloud_essd",
      "PerformanceLevel": "PL0",
      "Tags": [
        {
          "TagValue": "user",
          "TagKey": "tag1"
        }
      ],
      "ZoneId": "cn-hangzhou-j",
      "Size": 64,
      "Iops": 4000,
      "Bps": 300,
      "ProvisionedIops": 4000,
      "BurstingEnabled": true,
      "LensTags": [
        "[\"NoSnapshot\", \"DiskIOHang\"]"
      ],
      "SharingEnabled": "true"
    }
  ],
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****",
  "TotalCount": 6,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter

The parameter %s is invalid.

The specified parameter value is invalid.

400

InvalidParameter.Conflict

The specified parameter %s and %s are not blank at the same time.

400

InvalidParameter.Format

Specified parameter format is not valid.

english description

400

MissingParameter

The input parameter %s that is mandatory for processing this request is not supplied.

The parameter must be specified.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred.

403

Forbidden

User is not authorized to operate.

You are not authorized to manage the resource. Check the account permissions or contact the Alibaba Cloud account.

403

Forbidden.Action

User is not authorized to operate this action.

You are not authorized to perform this operation. Check the account permissions or contact the Alibaba Cloud account.

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

403

LastTokenProcessing

The last token request is processing.

The value of clientToken is used in another request that is being processed. Try again later.

403

NoPermission.SLR

The RAM user does not have the permission to create service linked role: AliyunServiceLinkedRoleForEBS.

You are not authorized to create service-linked roles.

403

OperationDenied

The operation is not allowed.

The operation is not supported.

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

429

BLOCK.LimitedRequest

Request was denied due to user flow control.

See [Error Codes](https://api.alibabacloud.com/document/ebs/2021-07-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ebs/2021-07-30/DescribeLensMonitorDisks#workbench-doc-change-demo) for a complete list.
