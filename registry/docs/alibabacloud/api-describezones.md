Queries all zones in a region and the file system types that are supported in each zone.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/NAS/2017-06-26/DescribeZones)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/NAS/2017-06-26/DescribeZones)

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

nas:DescribeZones

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

The ID of the region where you want to query zones.

You can call the DescribeRegions operation to query the latest region list.

cn-hangzhou

FileSystemType

string

No

The type of the file system.

Valid value:

-   standard: General-purpose Apsara File Storage NAS (NAS) file system
-   extreme: Extreme NAS file system.
-   cpfs: CPFS file system.

standard

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

A70BEE5D-76D3-49FB-B58F-1F398211\*\*\*\*

Zones

array<object>

The queried zones.

Zone

object

Performance

array

This parameter is reserved. You can ignore this parameter.

Protocol

string

This parameter is reserved. You can ignore this parameter.

nfs

Capacity

array

This parameter is reserved. You can ignore this parameter.

Protocol

string

This parameter is reserved. You can ignore this parameter.

nfs

ZoneId

string

The zone ID.

cn-hangzhou-b

InstanceTypes

array<object>

The details about file system types.

InstanceType

object

StorageType

string

The storage type.

-   If the FileSystemType parameter is set to standard, the storage type is Performance or Capacity.
-   If the FileSystemType parameter is set to extreme, the storage type is standard or advance.
-   If the FileSystemType parameter is set to cpfs, the storage type is advance\_100 (100 MB/s/TiB baseline) or advance\_200 (200 MB/s/TiB baseline).

Capacity

ProtocolType

string

The protocol type.

-   If the FileSystemType parameter is set to standard, the protocol type is nfs or smb.
-   If the FileSystemType parameter is set to extreme, the protocol type is nfs.
-   If the FileSystemType parameter is set to cpfs, the protocol type is cpfs.

nfs

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "A70BEE5D-76D3-49FB-B58F-1F398211****",
  "Zones": {
    "Zone": [
      {
        "Performance": {
          "Protocol": [
            "nfs"
          ]
        },
        "Capacity": {
          "Protocol": [
            "nfs"
          ]
        },
        "ZoneId": "cn-hangzhou-b",
        "InstanceTypes": {
          "InstanceType": [
            {
              "StorageType": "Capacity",
              "ProtocolType": "nfs"
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

404

InvalidRegionId.NotFound

The specified Region is not found.

The requested region does not exist or the service is not yet available.

500

InternalError

The request processing has failed due to some unknown error.

The request failed due to an unknown error. Please try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/NAS/2017-06-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-09-05

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/DescribeZones?updateTime=2024-09-05#workbench-doc-change-demo)
