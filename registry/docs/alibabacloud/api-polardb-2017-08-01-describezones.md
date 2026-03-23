Queries the available zones.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeZones)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeZones)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Engine

string

No

The database engine.

POLARDB

RegionId

string

No

The region ID.

**Note**

Call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to view information about all available regions for your account, including region IDs.

cn-zhangjiakou

Extra

string

No

The engine extension.

local

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

E2FDB684-751D-424D-98B9-704BEA\*\*\*\*\*\*

Zones

array<object>

A list of zones.

object

The data structure of the zone.

ModeCode

string

The enumeration of statuses. Valid values:

-   **UnSet**: The zone is not open for use.
    
-   **SoldOut**: The resources in the zone are sold out.
    
-   **WithStock**: The zone has available resources.
    

UnSet

Priority

string

The priority.

50

Status

string

The status of the zone. Valid values:

-   **ON**: The zone is available.
    
-   **OFF**: The zone is unavailable.
    

ON

ZoneId

string

The ID of the zone.

cn-beijing-h

## Examples

Success response

`JSON` format

```
{
  "RequestId": "E2FDB684-751D-424D-98B9-704BEA******\t\n",
  "Zones": [
    {
      "ModeCode": "UnSet",
      "Priority": "50",
      "Status": "ON",
      "ZoneId": "cn-beijing-h"
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeZones#workbench-doc-change-demo) for a complete list.
