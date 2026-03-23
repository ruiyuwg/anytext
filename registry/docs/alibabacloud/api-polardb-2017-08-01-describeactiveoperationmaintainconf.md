Queries the Operations and Maintenance (O&M) configuration for a user, including the active O&M window.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeActiveOperationMaintainConf)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeActiveOperationMaintainConf)

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

polardb:DescribeActiveOperationMaintainConf

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

Yes

The region ID.

cn-hangzhou

ResourceGroupId

string

No

The resource group ID.

rg-re\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

14109129-EF13-5C83-AD86-7581D9552603

Config

object

The configuration information.

CycleType

integer

The cycle type. Valid values:

-   Month: monthly
    
-   Week: weekly
    

Week

CycleTime

string

The day of the cycle.

-   If CycleType is set to Month, this parameter returns a number from 1 to 28 that indicates the day of the month. Multiple days are separated by commas (,).
    
-   If CycleType is set to Week, this parameter returns a number from 1 to 7 that indicates the day of the week. Multiple days are separated by commas (,).
    

1

MaintainStartTime

string

The start time of the maintenance window.

8:00Z

MaintainEndTime

string

The end time of the maintenance window.

09:00Z

Status

integer

Indicates whether the configuration is enabled. Valid values:1: Enabled2: Disabled

1

ModifiedTime

string

The time when the configuration was last modified.

2025-04-02T02:10:08Z

CreatedTime

string

The time when the configuration was created.

2023-07-04T19:28:46

HasConfig

integer

Indicates whether a configuration has been set. Valid values:1: Yes0: NoThe value of this parameter is 0 for the first query.

0

## Examples

Success response

`JSON` format

```
{
  "RequestId": "14109129-EF13-5C83-AD86-7581D9552603",
  "Config": {
    "CycleType": 0,
    "CycleTime": "1",
    "MaintainStartTime": "8:00Z",
    "MaintainEndTime": "09:00Z",
    "Status": 1,
    "ModifiedTime": "2025-04-02T02:10:08Z",
    "CreatedTime": "2023-07-04T19:28:46"
  },
  "HasConfig": 0
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

RequiredParam.NotFound

Required input param is not found.

The specified parameter does not exist.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeActiveOperationMaintainConf#workbench-doc-change-demo) for a complete list.
