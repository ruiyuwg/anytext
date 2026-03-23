Queries the snapshot chains of cloud disks. A snapshot chain is a chain of all the snapshots created for a disk. A disk corresponds to a chain of snapshots.

## Operation description

## [](#usage-notes)[](#)Usage notes

Take note of the following items:

-   You can specify multiple request parameters, such as `RegionId`, `DiskIds`, and `InstanceId`, to query snapshot chains. Specified parameters have logical AND relations.
-   Only the specified parameters are used as filter conditions. If the `DiskIds` and `SnapshotLinkIds` parameters are set to empty JSON arrays, the values are considered as valid filter conditions. In this case, an empty result is returned.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSnapshotLinks)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSnapshotLinks)

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

ecs:DescribeSnapshotLinks

get

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

The region ID of the disk. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceId

string

No

The instance ID.

i-bp1h6jmbefj2cyqs\*\*\*\*

DiskIds

string

No

The disk IDs. You can specify a JSON array that contains a maximum of 100 disk IDs. Separate the disk IDs with commas (,).

\["d-bp1d6tsvznfghy7y\*\*\*\*", "d-bp1ippxbaql9zet7\*\*\*\*", … "d-bp1ib7bcz07lcxa9\*\*\*\*"\]

SnapshotLinkIds

string

No

The snapshot chain IDs. You can specify a JSON array that contains a maximum of 100 snapshot chain IDs. Separate the snapshot chain IDs with commas (,).

\["sl-bp1grgphbcc9brb5\*\*\*\*", "sl-bp1c4izumvq0i5bs\*\*\*\*", … "sl-bp1akk7isz866dds\*\*\*\*"\]

PageNumber

integer

No

The page number. Pages start from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries per page. Valid values: 1 to 100.

Default value: 10.

50

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

MaxResults

integer

No

The maximum number of entries per page. Maximum value: 100. Default value:

-   If you do not specify this parameter or if you set a value smaller than 10, the default value is 10.
-   If you set a value greater than 100, the default value is 100.

10

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

PageSize

integer

The number of entries per page.

50

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of snapshot chains.

**Note** When using the `MaxResults` and `NextToken` parameters for a paginated query, the returned `TotalCount` parameter value is invalid.

9

SnapshotLinks

array<object>

The information about the snapshot chains.

SnapshotLink

object

InstantAccess

boolean

Indicates whether the instant access feature is enabled. Valid values:

-   true: The instant access feature is enabled. The feature can be enabled only for Enterprise SSDs (ESSDs).
-   false: The instant access feature is disabled. The snapshot is a standard snapshot for which the instant access feature is disabled.

**Note** This parameter is no longer used. By default, standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).

false

TotalSize

long

The total size of all snapshots in the snapshot chain. Unit: byte.

2097152

SourceDiskName

string

The name of the source disk.

testSourceDiskName

SourceDiskSize

integer

The capacity of the source disk. Unit: GiB.

40

SourceDiskType

string

The type of the source disk. Valid values:

-   system: system disk
-   data: data disk

data

InstanceId

string

The ID of the instance.

i-bp1h6jmbefj2cyqs\*\*\*\*

SnapshotLinkId

string

The ID of the snapshot chain.

sl-2ze0y1jwzpb1geqx\*\*\*\*

TotalCount

integer

The total number of snapshots.

1

RegionId

string

The region ID of the source disk.

cn-hangzhou

SourceDiskId

string

The ID of the source disk. This parameter is retained even if the source disk is deleted.

d-bp1d6tsvznfghy7y\*\*\*\*

InstanceName

string

The name of the instance.

testInstanceName

Category

string

The type of the snapshot chain. Valid values:

-   standard: standard snapshot chain.
-   archive: archive snapshot chain.
-   flash: instant access snapshot chain.

standard

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****",
  "PageSize": 50,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 9,
  "SnapshotLinks": {
    "SnapshotLink": [
      {
        "InstantAccess": false,
        "TotalSize": 2097152,
        "SourceDiskName": "testSourceDiskName",
        "SourceDiskSize": 40,
        "SourceDiskType": "data",
        "InstanceId": "i-bp1h6jmbefj2cyqs****",
        "SnapshotLinkId": "sl-2ze0y1jwzpb1geqx****",
        "TotalCount": 1,
        "RegionId": "cn-hangzhou",
        "SourceDiskId": "d-bp1d6tsvznfghy7y****",
        "InstanceName": "testInstanceName",
        "Category": "standard"
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

400

InvalidInstanceId.NotFound

The specified instanceId is not exists.

\-

400

InvalidRegionId

The specified regionId is invalid.

The specified RegionId parameter is invalid.

400

InvalidSnapshotLinkIds

The specified snapshotLinkIds is invalid.

The specified SnapshotLinkId parameter is invalid.

400

InvalidDiskIds

The specified diskIds is invalid.

The specified DiskIds parameter is invalid.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-05-16

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSnapshotLinks?updateTime=2025-05-16#workbench-doc-change-demo)

2024-12-02

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSnapshotLinks?updateTime=2024-12-02#workbench-doc-change-demo)
