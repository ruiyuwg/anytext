Configures the operations and maintenance (O&M) settings for a user. These settings include the active maintenance window.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyActiveOperationMaintainConf)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyActiveOperationMaintainConf)

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

polardb:ModifyActiveOperationMaintainConf

update

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

The ID of the region.

cn-chengdu

CycleType

string

Yes

The cycle type. Valid values:

-   Month
    
-   Week
    

Week

CycleTime

string

Yes

The time of the cycle.

-   If CycleType is set to Month, specify the day of the month. Valid values: 1 to 28. Use commas (,) to separate multiple days.
    
-   If CycleType is set to Week, specify the day of the week. Valid values: 1 to 7. Use commas (,) to separate multiple days.
    

1

MaintainStartTime

string

Yes

The start time of the task. The time must be in UTC and in the yyyy-mm-ddThh:mm:ssZ format.

8:00Z

MaintainEndTime

string

Yes

The end time of the maintenance window. Use the HH:mmZ format. The time is in UTC.

12:00Z

Status

integer

Yes

Specifies whether to enable the configuration. Valid values: 1 (Enable) and 2 (Disable).

1

Comment

string

No

The remarks for the operation.

test

ResourceGroupId

string

No

The ID of the resource group.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

1CC9CB4B-BBAF-5963-9545-A8DE9FFC7DFB

## Examples

Success response

`JSON` format

```
{
  "RequestId": "1CC9CB4B-BBAF-5963-9545-A8DE9FFC7DFB"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParam

Input param format error.

The specified parameter format is invalid.

400

RequiredParam.NotFound

Required input param is not found.

The specified parameter does not exist.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyActiveOperationMaintainConf#workbench-doc-change-demo) for a complete list.
