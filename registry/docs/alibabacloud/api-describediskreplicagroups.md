Queries information about one or more replication pair-consistent groups in a specified region.

## Operation description

## Description

To perform a paged query, you can use the MaxResults and NextToken parameters.

When you query the first page, set `MaxResults` to specify the number of entries to return. The `NextToken` value in the response is the token used to query subsequent pages. To query a subsequent page, set `NextToken` to the value from the previous response and set MaxResults to specify the number of entries for the current page.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ebs/2021-07-30/DescribeDiskReplicaGroups)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ebs/2021-07-30/DescribeDiskReplicaGroups)

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

ebs:DescribeDiskReplicaGroups

list

\*DiskReplicaGroup

`acs:ebs:{#regionId}:{#accountId}:diskreplicagroup/*`

\*DiskReplicaGroup

`acs:ebs:{#regionId}:{#accountId}:diskreplicagroup/{#ReplicaGroupId}`

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

The region ID of the replication pair-consistent group.

cn-beijing

MaxResults

integer

No

The maximum number of entries to return on a single page. You can use this parameter with NextToken.

Valid values: 1 to 500.

Default value: 10.

10

NextToken

string

No

The query token. Set this parameter to the NextToken value returned from the previous call to this operation. You do not need to set this parameter for the first call. If you set NextToken, the PageSize and PageNumber parameters are ignored, and the TotalCount in the response is invalid.

AAAAAdDWBF2\*\*\*\*

GroupIds

string

No

The IDs of the replication pair-consistent groups. You can specify one or more group IDs. Separate multiple IDs with a comma (,).

If you do not specify this parameter, all replication pair-consistent groups in the current region are queried. You can specify up to 100 group IDs.

AAAAAdDWBF2\*\*\*\*

Site

string

No

The site to query. This parameter is used when replication pairs are deployed across zones.

-   If you do not specify this parameter, the records and status information of replication pairs at the production site are returned.
    
-   If you specify this parameter, only the records and status information of replication pairs at the specified site are returned. Valid values:
    
    -   production: The production site.
        
    -   backup: The disaster recovery site.
        

production

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

The ID of the resource group to which the replication pair-consistent group belongs.

rg-aekz\*\*\*\*\*

Name

string

No

The name of the replication group. Fuzzy search is supported.

pg-name\*\*\*

Tag

array<object>

No

The tags. The list can contain up to 20 tags.

object

No

The information about the tag.

Value

string

No

The value of the tag of the replication pair-consistent group.

tag-value

Key

string

No

The key of the tag of the replication pair-consistent group.

tag-key

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

The query token returned in this call.

AAAAAdDWBF2\*\*\*\*

ReplicaGroups

array<object>

The information about the replication pair-consistent groups.

array<object>

GroupName

string

The name of the replication pair-consistent group.

myreplicagrouptest

Site

string

The site of the replication pair and the replication pair-consistent group. Valid values:

-   production: The production site.
    
-   backup: The disaster recovery site.
    

production

Description

string

The description of the replication pair-consistent group.

This is description.

StandbyZone

string

The initial destination zone of the replication group.

cn-shanghai-e

ResourceGroupId

string

The ID of the resource group to which the replication group belongs.

rg-aek2a\*\*\*\*\*\*\*

LastRecoverPoint

integer

The time when the last asynchronous replication was completed for the replication pair-consistent group. This parameter is a UNIX timestamp. Unit: seconds.

1637835114

ReplicaGroupId

string

The ID of the replication pair-consistent group.

pg-myreplica\*\*\*\*

RPO

integer

The recovery point objective (RPO) of the replication pair-consistent group. Unit: seconds.

180

SourceRegionId

string

The region ID of the production site.

cn-beijing

DestinationRegionId

string

The region ID of the disaster recovery site.

cn-shanghai

Bandwidth

integer

The bandwidth. Unit: Kbit/s. This parameter is not yet available. The return value is preset by the system.

0

PrimaryZone

string

The initial source zone of the replication group.

cn-beijing-h

SourceZoneId

string

The zone ID of the production site.

cn-beijing-f

Tags

array<object>

The tags of the replication group.

object

TagKey

string

The key of the tag of the replication group.

testKey

TagValue

string

The value of the tag of the replication group.

testValue

Status

string

The status of the replication pair-consistent group. Valid values:

-   invalid: The replication pair-consistent group is invalid. This status indicates that a replication pair in the group is abnormal.
    
-   creating: The replication pair-consistent group is being created.
    
-   created: The replication pair-consistent group is created.
    
-   create\_failed: The replication pair-consistent group failed to be created.
    
-   manual\_syncing: The replication pair-consistent group is performing a one-time synchronization. The group is also in this state during the first one-time synchronization.
    
-   syncing: The replication pair-consistent group is synchronizing data. The group is in this state when data is asynchronously replicated from the primary disk to the secondary disk for a subsequent time.
    
-   normal: Normal. When data replication is complete in the current asynchronous replication cycle, the group is in this state.
    
-   stopping: The replication pair-consistent group is being stopped.
    
-   stopped: The replication pair-consistent group is stopped.
    
-   stop\_failed: The replication pair-consistent group failed to be stopped.
    
-   failovering: A failover is being performed.
    
-   failovered: The failover is complete.
    
-   failover\_failed: The failover failed.
    
-   reprotecting: A reverse replication is being performed.
    
-   reprotect\_failed: The reverse replication failed.
    
-   deleting: The replication pair-consistent group is being deleted.
    
-   delete\_failed: The replication pair-consistent group failed to be deleted.
    
-   deleted: The replication pair-consistent group is deleted.
    

created

PairNumber

integer

The number of replication pairs in the replication pair-consistent group.

2

PrimaryRegion

string

The initial source region of the replication group.

cn-beijing

PairIds

array

The list of replication pair IDs in the replication pair-consistent group.

string

The IDs of the replication pairs in the replication pair-consistent group.

pair-cn-dsa\*\*\*\*,pair-cn-asd\*\*\*\*

EnableRtc

boolean

Specifies whether to enable replication time control (RTC). Valid values:

-   false: Disables RTC.
    
-   true: Enables RTC.
    

**Note**

If you set this parameter to true, RTC is enabled for the replication pair-consistent group and all asynchronous replication pairs that are added to the group.

true

DestinationZoneId

string

The zone ID of the disaster recovery site.

cn-shanghai-e

StandbyRegion

string

The initial destination region of the replication group.

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

The total number of entries returned.

60

## Examples

Success response

`JSON` format

```
{
  "RequestId": "AAA478A0-BEE6-1D42-BEB6-A9CFEAD6****",
  "NextToken": "AAAAAdDWBF2****",
  "ReplicaGroups": [
    {
      "GroupName": "myreplicagrouptest",
      "Site": "production",
      "Description": "This is description.",
      "StandbyZone": "cn-shanghai-e",
      "ResourceGroupId": "rg-aek2a*******",
      "LastRecoverPoint": 1637835114,
      "ReplicaGroupId": "pg-myreplica****",
      "RPO": 180,
      "SourceRegionId": "cn-beijing",
      "DestinationRegionId": "cn-shanghai",
      "Bandwidth": 0,
      "PrimaryZone": "cn-beijing-h",
      "SourceZoneId": "cn-beijing-f",
      "Tags": [
        {
          "TagKey": "testKey",
          "TagValue": "testValue"
        }
      ],
      "Status": "created",
      "PairNumber": 2,
      "PrimaryRegion": "cn-beijing",
      "PairIds": [
        "pair-cn-dsa****,pair-cn-asd****"
      ],
      "EnableRtc": true,
      "DestinationZoneId": "cn-shanghai-e",
      "StandbyRegion": "cn-shanghai\n"
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

See [Release Notes](https://api.alibabacloud.com/document/ebs/2021-07-30/DescribeDiskReplicaGroups#workbench-doc-change-demo) for a complete list.
