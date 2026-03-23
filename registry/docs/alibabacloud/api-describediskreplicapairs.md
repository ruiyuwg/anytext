Queries information about one or more replication pairs in a specified region.

## Operation description

## Description

-   For information about the regions that support asynchronous replication, see [Overview of asynchronous replication for disks](/help/en/ecs/user-guide/overview-8/).
    
-   If the primary or secondary disk of an asynchronous replication pair is in the specified region, the query returns information about that replication pair.
    
-   To perform a paged query, use the MaxResults and NextToken parameters. For the first page, set MaxResults to limit the number of entries returned. The `NextToken` value in the response is the token for the next page. For subsequent pages, set `NextToken` to the value from the previous response and set `MaxResults` to limit the number of entries.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ebs/2021-07-30/DescribeDiskReplicaPairs)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ebs/2021-07-30/DescribeDiskReplicaPairs)

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

ebs:DescribeDiskReplicaPairs

get

\*DiskReplicaPair

`acs:ebs:{#regionId}:{#accountId}:diskreplicapair/*`

\*DiskReplicaPair

`acs:ebs:{#regionId}:{#accountId}:diskreplicapair/{#ReplicaPairId}`

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

The ID of the region where the primary or secondary disk of the replication pair resides. Call the [DescribeRegions](/help/en/ecs/api-disks-describeregions) operation to query the regions that support asynchronous replication.

cn-beijing

MaxResults

integer

No

The maximum number of entries to return on each page. Use this parameter with NextToken.

Valid values: 1 to 500.

Default value: 10.

1

NextToken

string

No

The query token. Set this parameter to the NextToken value returned from the previous call to this operation. You do not need to set this parameter for the first call. If you set NextToken, the PageSize and PageNumber parameters are ignored, and the TotalCount value in the response is invalid.

AAAAAdDWBF2\*\*\*\*

PairIds

string

No

The IDs of replication pairs. Specify one or more replication pair IDs. The IDs must be in the `pair-cn-dsa****,pair-cn-asd****` format.

If you leave this parameter empty, all replication pairs in the current region are queried. You can specify up to 100 replication pair IDs.

pair-cn-dsa\*\*\*\*

Site

string

No

The site from which to query data. Query data from the production site or the disaster recovery site. Valid values:

-   production: the production site.
    
-   backup: the disaster recovery site.
    

Default value: production.

production

ReplicaGroupId

string

No

The ID of the replication pair-consistent group. Specify the ID of a replication pair-consistent group to query the replication pairs in the group. The ID must be in the `pg-****` format.

If you leave this parameter empty, all replication pairs in the current region are queried.

**Note**

If you set this parameter to `-`, replication pairs that are not in any replication pair-consistent group are returned.

pg-\*\*\*\*

PageNumber

integer

No

The page number.

5

PageSize

integer

No

The number of entries per page. Valid values: 1 to 100.

10

ResourceGroupId

string

No

The ID of the resource group to which the replication pair belongs.

rg-acfmvs\*\*\*\*\*\*

Name

string

No

The name of the replication pair. Fuzzy matching is supported.

name\*\*\*

Tag

array<object>

No

The tags. You can specify up to 20 tags.

object

No

The tag.

Value

string

No

The value of the tag.

TestValue

Key

string

No

The key of the tag.

TestKey

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response schema.

RequestId

string

The request ID.

AAA478A0-BEE6-1D42-BEB6-A9CFEAD6\*\*\*\*

NextToken

string

The query token returned from this call.

AAAAAdDWBF2\*\*\*\*

ReplicaPairs

array<object>

The replication pairs.

array<object>

Site

string

The site type of the replication pair or replication pair-consistent group. Valid values:

-   production: the production site.
    
-   backup: the disaster recovery site.
    

production

DestinationDiskId

string

The ID of the secondary disk.

d-asdfjl2342kj2l3k4\*\*\*\*

Description

string

The description of the replication pair.

This is description.

StandbyZone

string

The initial destination zone of the replication pair.

cn-shanghai-b

ResourceGroupId

string

The ID of the resource group to which the replication pair belongs.

rg-acfmvs\*\*\*\*\*

DestinationRegion

string

The region of the secondary disk.

cn-shanghai

ReplicaPairId

string

The ID of the replication pair.

pair-cn-dsa\*\*\*\*

LastRecoverPoint

integer

The time when the last asynchronous replication was completed. This value is a UNIX timestamp. Unit: seconds.

1649751977

ReplicaGroupId

string

The ID of the replication pair-consistent group to which the replication pair belongs.

pg-xxxx\*\*\*\*

SourceDiskId

string

The ID of the primary disk.

d-bp131n0q38u3a4zi\*\*\*\*

RPO

integer

The recovery point objective (RPO) of the replication pair. Unit: seconds.

900

PairName

string

The name of the replication pair.

TestReplicaPair

Bandwidth

integer

The bandwidth used for asynchronous replication. Unit: Kbit/s.

10240

ExpiredTime

integer

The expiration time of the replication pair. This value is a UNIX timestamp. Unit: seconds.

1649750977

PrimaryZone

string

The initial source zone of the replication pair.

cn-beijing-a

SourceZoneId

string

The zone of the primary disk.

cn-beijing-a

Tags

array<object>

The tags of the replication pair.

object

The tag.

TagKey

string

The key of the tag.

testKey

TagValue

string

The value of the tag.

testValue

Status

string

The status of the replication pair. Valid values:

-   invalid: The replication pair is invalid. This status indicates that the replication pair is not working correctly.
    
-   creating: The replication pair is being created.
    
-   created: The replication pair is created.
    
-   create\_failed: The replication pair failed to be created.
    
-   initial\_syncing: The replication pair is in the initial synchronization state. After a replication pair is created and started, it enters this state during the first asynchronous replication of data from the primary disk to the secondary disk.
    
-   manual\_syncing: The replication pair is being manually synchronized. After the manual synchronization is complete, the replication pair returns to the stopped state. If it is the first one-time synchronization, the status is also manual\_syncing.
    
-   syncing: The replication pair is synchronizing data. The replication pair is in this state when data is asynchronously replicated from the primary disk to the secondary disk for a second or subsequent time.
    
-   normal: The replication pair is in the normal state. The replication pair enters this state when data replication is complete in the current replication cycle.
    
-   stopping: The replication pair is being stopped.
    
-   stopped: The replication pair is stopped.
    
-   stop\_failed: The replication pair failed to be stopped.
    
-   failovering: A failover is in progress.
    
-   failovered: The failover is complete.
    
-   failover\_failed: The failover failed.
    
-   reprotecting: A reverse replication is in progress.
    
-   reprotect\_failed: The reverse replication failed.
    
-   deleting: The replication pair is being deleted.
    
-   delete\_failed: The replication pair failed to be deleted.
    
-   deleted: The replication pair is deleted.
    

created

PrimaryRegion

string

The initial source region of the replication pair.

cn-beijing

CreateTime

integer

The creation time. This value is a UNIX timestamp. Unit: seconds.

1649750977

SourceRegion

string

The region of the primary disk.

cn-beijing

StatusMessage

string

The status message of the replication pair. This parameter is returned when the Status is `invalid` or `create_failed`. Valid values:

-   PrePayOrderExpired: The subscription replication pair has expired.
    
-   PostPayOrderCeaseService: The service for the pay-as-you-go replication pair is suspended, usually due to an overdue payment.
    
-   DeviceRemoved: The primary or secondary disk is deleted.
    
-   DeviceKeyChanged: The `DeviceKey` mapping of the primary or secondary disk has changed.
    
-   DeviceSizeChanged: The `DeviceSize` of the primary or secondary disk has changed.
    
-   OperationDenied.QuotaExceed: The number of created replication pairs exceeds the quota.
    

PrePayOrderExpired

EnableRtc

boolean

Specifies whether real-time control (RTC) is enabled. Valid values:

-   false: Disabled.
    
-   true: Enabled.
    

**Note**

If the replication pair is in a replication pair-consistent group, the value of this parameter is the same as that of the group.

ChargeType

string

The billing method of the replication pair. Valid values:

-   PREPAY: subscription.
    
-   POSTPAY: pay-as-you-go.
    

PREPAY

DestinationZoneId

string

The zone of the secondary disk.

cn-shanghai-b

ReplicaGroupName

string

The name of the replication pair-consistent group to which the replication pair belongs.

pg-name\*\*\*\*

StandbyRegion

string

The initial destination region of the replication pair.

cn-shanghai

PageNumber

integer

The page number.

1

PageSize

integer

The number of entries per page.

10

TotalCount

integer

The total number of entries.

60

## Examples

Success response

`JSON` format

```
{
  "RequestId": "AAA478A0-BEE6-1D42-BEB6-A9CFEAD6****",
  "NextToken": "AAAAAdDWBF2****",
  "ReplicaPairs": [
    {
      "Site": "production",
      "DestinationDiskId": "d-asdfjl2342kj2l3k4****",
      "Description": "This is description.",
      "StandbyZone": "cn-shanghai-b",
      "ResourceGroupId": "rg-acfmvs*****",
      "DestinationRegion": "cn-shanghai",
      "ReplicaPairId": "pair-cn-dsa****",
      "LastRecoverPoint": 1649751977,
      "ReplicaGroupId": "pg-xxxx****",
      "SourceDiskId": "d-bp131n0q38u3a4zi****",
      "RPO": 900,
      "PairName": "TestReplicaPair",
      "Bandwidth": 10240,
      "ExpiredTime": 1649750977,
      "PrimaryZone": "cn-beijing-a",
      "SourceZoneId": "cn-beijing-a",
      "Tags": [
        {
          "TagKey": "testKey",
          "TagValue": "testValue"
        }
      ],
      "Status": "created",
      "PrimaryRegion": "cn-beijing",
      "CreateTime": 1649750977,
      "SourceRegion": "cn-beijing",
      "StatusMessage": "PrePayOrderExpired",
      "EnableRtc": false,
      "ChargeType": "PREPAY",
      "DestinationZoneId": "cn-shanghai-b",
      "ReplicaGroupName": "pg-name****",
      "StandbyRegion": "cn-shanghai"
    }
  ],
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 60
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred.

403

OperationDenied

The operation is not allowed.

The operation is not supported.

403

OperationDenied.InvalidStatus

The operation is not allowed in current status.

The operation is not supported in the current state.

403

Forbidden

User is not authorized to operate.

You are not authorized to manage the resource. Check the account permissions or contact the Alibaba Cloud account.

403

Forbidden.Action

User is not authorized to operate this action.

You are not authorized to perform this operation. Check the account permissions or contact the Alibaba Cloud account.

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

See [Release Notes](https://api.alibabacloud.com/document/ebs/2021-07-30/DescribeDiskReplicaPairs#workbench-doc-change-demo) for a complete list.
