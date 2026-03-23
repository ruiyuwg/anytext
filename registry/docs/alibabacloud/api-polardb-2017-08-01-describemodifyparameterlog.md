Queries the modification history of parameters.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeModifyParameterLog)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeModifyParameterLog)

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

polardb:DescribeModifyParameterLog

none

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

DBClusterId

string

Yes

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

EndTime

string

Yes

The end of the time range to query. The end time must be later than the start time. The time is in the `YYYY-MM-DDThh:mmZ` format and is in UTC.

2021-04-07T04:00Z

StartTime

string

Yes

The beginning of the time range to query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is in UTC.

2020-11-14T00:00Z

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

CD35F3-F3-44CA-AFFF-BAF869\*\*\*\*\*\*

Engine

string

The cluster engine.

polardb\_mysql

EngineVersion

string

The engine version.

8.0

Items

array<object>

The list of parameter modification history.

object

A parameter modification record.

Status

string

Indicates whether the modification was applied successfully.

True

OldParameterValue

string

The parameter value before the modification.

test

ParameterName

string

The parameter name.

hz

NewParameterValue

string

The parameter value after the modification.

test01

ModifyTime

string

The time when the parameter was last modified.

2024-10-29T09:31:37Z

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CD35F3-F3-44CA-AFFF-BAF869******",
  "Engine": "polardb_mysql",
  "EngineVersion": "8.0",
  "Items": [
    {
      "Status": "True",
      "OldParameterValue": "test",
      "ParameterName": "hz",
      "NewParameterValue": "test01",
      "ModifyTime": "2024-10-29T09:31:37Z"
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeModifyParameterLog#workbench-doc-change-demo) for a complete list.
