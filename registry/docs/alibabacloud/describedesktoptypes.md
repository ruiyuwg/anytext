Queries the details of cloud computer specifications.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeDesktopTypes)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeDesktopTypes)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

Region ID. Call [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) to get a list of regions that Elastic Desktop Service (EDS) supports.

cn-hangzhou

DesktopTypeId

string

No

Type ID.

**Note**

If both the `InstanceTypeFamily` and `DesktopTypeId` parameters are empty, query information about all WUYING Workspace types.

**Valid values:**

-   eds.enterprise\_office.4c8g :
    
    eds.enterprise\_office.4c8g
    
-   eds.hf.4c8g :
    
    eds.hf.4c8g
    
-   ecd.basic.large :
    
    ecd.basic.large
    
-   ecd.advanced.large :
    
    ecd.advanced.large
    
-   eds.enterprise\_office.8c16g :
    
    eds.enterprise\_office.8c16g
    
-   ecd.basic.small :
    
    ecd.basic.small
    
-   ecd.graphics.2xlarge :
    
    ecd.graphics.2xlarge
    
-   eds.hf.8c16g :
    
    eds.hf.8c16g
    
-   eds.hf.12c24g :
    
    eds.hf.12c24g
    
-   eds.general.8c16g :
    
    eds.general.8c16g
    
-   eds.general.16c32g :
    
    eds.general.16c32g
    
-   ecd.advanced.xlarge :
    
    ecd.advanced.xlarge
    
-   eds.graphics.16c1t4 :
    
    eds.graphics.16c1t4
    
-   ecd.graphics.xlarge :
    
    ecd.graphics.xlarge
    
-   ecd.performance.2xlarge :
    
    ecd.performance.2xlarge
    
-   eds.general.8c32g :
    
    eds.general.8c32g
    
-   eds.general.2c2g :
    
    eds.general.2c2g
    
-   eds.general.2c4g :
    
    eds.general.2c4g
    
-   eds.graphics.24c1t4 :
    
    eds.graphics.24c1t4
    
-   eds.general.4c8g :
    
    eds.general.4c8g
    
-   eds.enterprise\_office.2c4g :
    
    eds.enterprise\_office.2c4g
    
-   eds.general.4c16g :
    
    eds.general.4c16g
    
-   eds.general.2c8g :
    
    eds.general.2c8g
    

ecd.graphics.xlarge

InstanceTypeFamily

string

No

Family name.

**Note**

If both the `InstanceTypeFamily` and `DesktopTypeId` parameters are empty, query information about all WUYING Workspace types.

**Valid values:**

-   ecd.advanced :
    
    ecd.advanced
    
-   eds.graphics :
    
    eds.graphics
    
-   ecd.basic :
    
    ecd.basic
    
-   eds.enterprise\_office :
    
    eds.enterprise\_office
    
-   eds.hf :
    
    eds.hf
    
-   ecd.graphics :
    
    ecd.graphics
    
-   eds.general :
    
    eds.general
    
-   ecd.performance :
    
    ecd.performance
    

ecd.graphics

CpuCount

integer

No

vCPU count.

2

MemorySize

integer

No

Memory size. Unit: MiB.

4096

GpuCount

number

No

GPU count.

1

DesktopIdForModify

string

No

When upgrading or downgrading, enter the ID of the WUYING Workspace to upgrade or downgrade. The return value includes compatibility information between the type and the cloud computer.

ecd-gx2x1dhsmucyy\*\*\*\*

OrderType

string

No

Order type.

**Valid values:**

-   DOWNGRADE :
    
    Downgrade configuration
    
-   UPGRADE :
    
    Upgrade configuration
    

DOWNGRADE

AppliedScope

string

No

Scope of the type. Default value: `Public`.

**Valid values:**

-   Public :
    
    Public
    
-   SavingPlan :
    
    SavingPlan
    

Public

DesktopGroupIdForModify

string

No

When upgrading or downgrading, enter the ID of the cloud computer share to upgrade or downgrade. The return value includes compatibility information between the type and the shared cloud computers.

dg-abcdefg\*\*\*\*

GpuDriverType

string

No

GPU driver type.

**Valid values:**

-   T4 :
    
    T4
    
-   A10 :
    
    A10
    
-   G28 :
    
    G28
    
-   G39 :
    
    G39
    

A10

OrderBy

string

No

Sorting field. If not specified, sort by creation time in descending order.

**Valid values:**

-   Memory :
    
    Sort by memory size
    
-   Cpu :
    
    Sort by CPU count
    

Memory

SortType

string

No

Sorting method.

**Valid values:**

-   ASC :
    
    Ascending \[Default value\]
    
-   DESC :
    
    Descending
    

ASC

Scope

string

No

Selling method of the type.

**Valid values:**

-   MonthPackage :
    
    Purchase by monthly package
    
-   FastBuy :
    
    Quick purchase
    

FastBuy

DesktopTypeIdList

array

No

List of type IDs.

string

No

Type ID.

eds.enterprise.4c8g

SupportMinSessionCount

integer

No

Query the number of multi-sessions that the rule supports.

2

ZoneId

string

No

**Note**

This parameter is not publicly available.

无

GpuMemory

integer

No

The GPU memory size. Unit: MB.

ScopeSet

array

No

string

No

OfficeSiteId

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

DesktopTypes

array<object>

The details of the specifications.

object

The details of the specification.

SystemDiskSize

string

The system disk size. Unit: GiB.

150

DesktopTypeId

string

The specification ID.

ecd.graphics.xlarge

DataDiskSize

string

The data disk size. Unit: GiB.

150

CpuCount

string

The number of vCPUs.

2

GpuCount

number

The number of GPU cores.

1

GpuSpec

string

The GPU memory.

16 GiB

InstanceTypeFamily

string

The specification family.

ecd.graphics

MemorySize

string

The memory size. Unit: MiB.

23552

DesktopTypeStatus

string

The status of the specification. If `SUFFICIENT` is returned, the resources for the specification are sufficient.

SUFFICIENT

Scopes

array

A list of purchase methods for the specification.

string

The purchase method for the specification.

**Valid values:**

-   MonthPackage :
    
    Purchase a monthly package
    
-   FastBuy :
    
    Quick Purchase
    

FastBuy

StockState

string

The inventory status.

**Valid values:**

-   Insufficient :
    
    No Inventory
    
-   Sufficient :
    
    Sufficient Inventory
    

Sufficient

GpuMemory

integer

The GPU memory size. This parameter is returned only for GPU-accelerated workspaces. Unit: MB.

2048

MaxSessionCount

integer

The number of concurrent sessions supported by the specification.

4

Description

string

EnvType

string

EnvId

string

## Examples

Success response

`JSON` format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "DesktopTypes": [
    {
      "SystemDiskSize": "150",
      "DesktopTypeId": "ecd.graphics.xlarge",
      "DataDiskSize": "150",
      "CpuCount": "2",
      "GpuCount": 1,
      "GpuSpec": "16 GiB",
      "InstanceTypeFamily": "ecd.graphics",
      "MemorySize": "23552",
      "DesktopTypeStatus": "SUFFICIENT",
      "Scopes": [
        "FastBuy"
      ],
      "StockState": "Sufficient",
      "GpuMemory": 2048,
      "MaxSessionCount": 4,
      "Description": "",
      "EnvType": "",
      "EnvId": ""
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeDesktopTypes#workbench-doc-change-demo) for a complete list.
