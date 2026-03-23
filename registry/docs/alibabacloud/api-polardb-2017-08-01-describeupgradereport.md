Queries the verification reports.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeUpgradeReport)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeUpgradeReport)

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

polardb:DescribeUpgradeReport

get

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

No

The ID of the region.

**Note**

For more information, see [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3).

cn-hangzhou

SourceDBClusterId

string

No

The ID of the source instance.

rm-2zen5pe5vi56447d0

DBType

string

No

The database type. Valid values:

-   **MySQL**
    
-   **Oracle**
    

MySQL

DBVersion

string

No

The compatible database version.

8.0

TaskId

string

No

The task ID.

2321321

PageNumber

integer

No

The page number.

1

PageSize

integer

No

The number of entries per page.

30

Status

string

No

The task status.

Running

Type

string

No

A special metric. This parameter is supported only for instances that use the Tair architecture.

orca

CreationCategory

string

No

The product series. Valid values:

-   **Normal**: Cluster Edition (default)
    
-   **SENormal**: Standard Edition
    

For more information, see [Product series](/help/en/polardb/polardb-for-mysql/enterprise-edition-product-series).

Normal

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

2FED790E-FB61-4721-8C1C-07C627\*\*\*\*\*\*

SourceDBClusterId

string

The ID of the source instance.

rm-2zen5pe5vi56447d0

TotalSize

integer

The total number of entries returned.

137

UpgradeReportList

array<object>

The list of evaluation reports.

object

TaskId

string

The task ID.

275948

CheckTime

string

The check time.

2024-03-15T06:48:44Z

DstVersion

string

The version of the destination instance.

8.0

SrcInsName

string

The name of the source instance.

pc-2ze54671qoz830za9

SrcVersion

string

The version of the source instance.

5.7

UpgradeMode

string

The upgrade mode.

rds2polar\_pengine\_with\_dts

Result

string

The status of the evaluation task.

running

EffectiveTime

string

The effective time of the evaluation.

2024-03-08T06:48:44Z

StartTime

string

The start time of the evaluation.

2025-07-05T01:56:00Z

EndTime

string

The end time of the evaluation.

2024-03-08T06:48:44Z

ItemsSize

integer

The number of entries in the list of Oracle compatibility evaluation details.

10

Items

array<object>

The list of Oracle compatibility evaluation details.

**Note**

This parameter is supported only for **Oracle** instances.

object

The list.

Schema

string

The schema of the evaluation object.

ny\_openapi

Type

string

The type of the evaluation object.

orca

Name

string

The name of the evaluation object.

testName

Status

string

The result of the compatibility evaluation. Valid values:

-   **0**: Failed.
    
-   **1**: Succeeded.
    

1

DDL

string

The Data Definition Language (DDL) statements for object synchronization.

CREATE XXXX

Details

string

The details.

\[\]

SrcDBType

string

The database type of the source instance. Valid values:

-   **MySQL**
    
-   **Oracle**
    

MySQL

DstDBType

string

The database type of the destination instance. Valid values:

-   **MySQL**
    
-   **Oracle**
    

MySQL

SrcDeleted

string

The deletion status of the source instance. Valid values:

-   **0**: Not deleted.
    
-   **1**: Deleted.
    

1

Type

string

A special metric. This parameter is supported only for instances that use the Tair architecture.

tair

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2FED790E-FB61-4721-8C1C-07C627******",
  "SourceDBClusterId": "rm-2zen5pe5vi56447d0",
  "TotalSize": 137,
  "UpgradeReportList": [
    {
      "TaskId": "275948",
      "CheckTime": "2024-03-15T06:48:44Z",
      "DstVersion": "8.0",
      "SrcInsName": "pc-2ze54671qoz830za9",
      "SrcVersion": "5.7",
      "UpgradeMode": "rds2polar_pengine_with_dts",
      "Result": "running",
      "EffectiveTime": "2024-03-08T06:48:44Z",
      "StartTime": "2025-07-05T01:56:00Z",
      "EndTime": "2024-03-08T06:48:44Z"
    }
  ],
  "ItemsSize": 10,
  "Items": [
    {
      "Schema": "ny_openapi",
      "Type": "orca",
      "Name": "testName",
      "Status": "1",
      "DDL": "CREATE XXXX"
    }
  ],
  "Details": "[]",
  "SrcDBType": "MySQL",
  "DstDBType": "MySQL",
  "SrcDeleted": "1",
  "Type": "tair"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeUpgradeReport#workbench-doc-change-demo) for a complete list.
