Retrieves the top 100 hot keys within a specific time range.

## Operation description

A key is a hot key if its queries per second (QPS) exceed 3,000.

-   If you use an Alibaba Cloud SDK, use aliyun-sdk-core version 4.3.3 or later. We recommend using the latest version.
    
-   Use DAS SDK version 1.0.2 or later.
    
-   When you call the DAS service using an SDK, set the region to cn-shanghai.
    
-   This operation applies only to Redis instances that meet both of the following requirements:
    -   The instance is an open source Redis instance or a Tair memory-optimized instance.
        
    -   The instance runs the latest minor version.
        

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DAS/2020-01-16/DescribeTopHotKeys)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DAS/2020-01-16/DescribeTopHotKeys)

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

hdm:DescribeTopHotKeys

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

ConsoleContext

string

No

A reserved parameter.

None

InstanceId

string

Yes

The ID of the Redis instance.

r-bp18ff4a195d\*\*\*\*

NodeId

string

No

The ID of the data shard of the Redis instance.

r-\*\*\*\*-db-0

StartTime

string

Yes

The beginning of the time range to query. Specify the time in UNIX timestamp format, in milliseconds.

1596177993000

EndTime

string

Yes

The end of the time range to query. Specify the time in UNIX timestamp format, in milliseconds.

**Note**

-   The end time must be later than the start time.
    
-   You can query data only within the last four days.
    
-   The maximum time range between **StartTime** and **EndTime** is three hours.
    

1596177993001

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Message

string

The returned message.

Successful

RequestId

string

The request ID.

B6D17591-B48B-4D31-9CD6-9B9796B2\*\*\*\*

Data

object

HotKey

array<object>

The list of hot keys.

object

The list of hot keys.

Db

integer

The database in which the key is stored.

0

Key

string

The specific key.

abc:def:eng

Hot

string

The access frequency of the key. This value indicates the number of times the key is accessed per second.

5500~6000

KeyType

string

The type of the key.

zset

Lfu

integer

The statistical value of the Least Frequently Used (LFU) algorithm.

253

NodeId

string

The ID of the data shard of the Redis instance.

r-x\*\*\*\*-db-0

InBytes

integer

OutBytes

integer

Category

string

Code

string

The response code.

200

Success

string

Indicates whether the request was successful.

-   **true**: The request was successful.
    
-   **false**: The request failed.
    

true

## Examples

Success response

`JSON` format

```
{
  "Message": "Successful",
  "RequestId": "B6D17591-B48B-4D31-9CD6-9B9796B2****",
  "Data": {
    "HotKey": [
      {
        "Db": 0,
        "Key": "abc:def:eng",
        "Hot": "5500~6000",
        "KeyType": "zset",
        "Lfu": 253,
        "NodeId": "r-x****-db-0",
        "InBytes": 0,
        "OutBytes": 0,
        "Category": ""
      }
    ]
  },
  "Code": "200",
  "Success": "true"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParams

The request parameters are invalid.

403

NoPermission

You are not authorized to do this action.

See [Error Codes](https://api.alibabacloud.com/document/DAS/2020-01-16/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/DAS/2020-01-16/DescribeTopHotKeys#workbench-doc-change-demo) for a complete list.
