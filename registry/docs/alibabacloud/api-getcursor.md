Retrieves a cursor based on a specified time.

## Operation description

### Description

-   The host consists of a project name and a Simple Log Service endpoint. You must specify the project name in the host.
    
-   The relationship among a cursor, a project, a Logstore, and a shard is as follows:
    
    -   A project contains multiple Logstores.
        
    -   Each Logstore contains multiple shards.
        
    -   A cursor indicates the position of a specific log.
        

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Sls/2020-12-30/GetCursor)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Sls/2020-12-30/GetCursor)

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

log:GetCursorOrData

get

\*LogStore

`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}`

-   log:TLSVersion
    

None

## Request syntax

```
GET /logstores/{logstore}/shards/{shardId}?type=cursor HTTP/1.1
```

## **Path Parameters**

**Parameter**

**Type**

**Required**

**Description**

**Example**

logstore

string

Yes

The logstore name.

sls-test-logstore

shardId

integer

Yes

The shard ID.

1

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

project

string

Yes

The project name.

ali-test-project

from

string

Yes

A point in time. This can be a UNIX timestamp or the string `begin` or `end`.

begin

You can use the from parameter to locate logs within the lifecycle of a shard. If the lifecycle of the Logstore is \[begin\_time,end\_time) and the `from` parameter is set to `from_time`, the behavior is as follows:

-   If from\_time is less than or equal to begin\_time, or if from\_time is set to 'begin', the cursor for the position at `begin_time` is returned.
    
-   If from\_time is greater than or equal to end\_time, or if `from_time` is set to 'end', the cursor for the position where the next log will be written is returned. No data exists at this cursor position.
    
-   If from\_time is greater than begin\_time and less than end\_time, the cursor for the first data packet whose server reception time is greater than or equal to `from_time` is returned.
    

**Note**

The lifecycle of a Logstore is specified by the TTL field in its properties. For example, if the current time is `2018-11-11 09:00:00` and the TTL is 5, the time range of data that can be consumed in each shard is `[2018-11-05 09:00:00,2018-11-11 09:00:00)`. This time refers to the server time. For more information, see [Data retention period](/help/en/sls/manage-a-logstore).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The cursor value.

cursor

string

The cursor value.

MTQ0NzI5OTYwNjg5NjYzMjM1Ng==

## Examples

Success response

`JSON` format

```
{
  "cursor": "MTQ0NzI5OTYwNjg5NjYzMjM1Ng=="
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Sls/2020-12-30/GetCursor#workbench-doc-change-demo) for a complete list.
