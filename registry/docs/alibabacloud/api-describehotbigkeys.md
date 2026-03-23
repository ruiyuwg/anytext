Call the DescribeHotBigKeys operation to retrieve real-time information about hot keys and big keys in memory.

## Operation description

For keys that use the List, Hash, Set, or Zset data structure, the system sorts them by the number of elements. The top three keys are recorded as big keys. A key is recorded as a hot key if its queries per second (QPS) exceeds 3,000.

-   When you use an Alibaba Cloud software development kit (SDK), make sure that the version of aliyun-sdk-core is later than 4.3.3. We recommend that you use the latest version.
    
-   The Database Autonomy Service (DAS) SDK must be version 1.0.2 or later.
    
-   When you use an SDK to call the DAS service, set the region to cn-shanghai.
    
-   This operation applies only to the following Redis instances:
    -   The instance is an open source Redis instance or a memory-optimized Tair (Enterprise Edition) instance.
        
    -   The instance runs the latest minor version.
        

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DAS/2020-01-16/DescribeHotBigKeys)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DAS/2020-01-16/DescribeHotBigKeys)

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

hdm:DescribeHotBigKeys

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

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Message

string

The message returned for the request.

Successful

RequestId

string

The request ID.

B6D17591-B48B-4D31-9CD6-9B9796B2\*\*\*\*

Data

object

The list of detailed information.

HotKeys

object

HotKey

array<object>

The list of hot keys ranked by QPS.

object

The list of hot keys ranked by QPS.

Key

string

The specific key.

abc:def:eng

Db

integer

The DB where the key is stored.

0

Hot

string

The number of times the key is accessed per second.

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

Size

integer

The number of elements.

2

BigKeys

object

BigKey

array<object>

The list of big keys ranked by the number of sub-elements.

object

The list of big keys ranked by the number of sub-elements.

Db

integer

The DB where the key is stored.

0

Key

string

The specific key.

abc:def:eng

KeyType

string

The type of the key.

zset

Size

integer

The number of elements.

2

NodeId

string

The ID of the data shard of the Redis instance.

r-x\*\*\*\*-db-0

HotKeyMsg

string

The reason why the hot keys ranked by QPS failed to be obtained.

current version doesn't support

BigKeyMsg

string

The reason why the big keys ranked by the number of sub-elements failed to be obtained.

current version doesn't support

HighTrafficKeyMsg

string

The reason why the hot keys ranked by traffic failed to be obtained.

current version doesn't support

HighTrafficKeys

object

HighTrafficKey

array<object>

The list of hot keys ranked by traffic.

object

The list of hot keys ranked by traffic.

Key

string

The specific key.

abc:def:eng

Db

integer

The DB where the key is stored.

0

Hot

string

The number of times the key is accessed per second.

1988

KeyType

string

The type of the key.

string

NodeId

string

The node ID.

r-x\*\*\*\*-db-0

inBytes

integer

The inbound traffic, in bytes.

85767

outBytes

integer

The outbound traffic, in bytes.

1054684

Size

integer

The number of elements.

2

LargeKeys

object

LargeKey

array<object>

The list of big keys ranked by memory usage.

object

The list of big keys ranked by memory usage.

Db

string

The DB where the key is stored.

0

Key

string

The specific key.

abc:def:eng

KeyType

string

The type of the key.

string

DataSize

string

The memory usage of the key, in bytes.

33554439

NodeId

string

The node ID.

r-x\*\*\*\*-db-0

LargeKeyMsg

string

The reason why the big keys ranked by memory usage failed to be obtained.

current version doesn't support

Code

string

The returned status code.

200

Success

string

Indicates whether the request was successful:

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
    "HotKeys": {
      "HotKey": [
        {
          "Key": "abc:def:eng",
          "Db": 0,
          "Hot": "5500~6000",
          "KeyType": "zset",
          "Lfu": 253,
          "NodeId": "r-x****-db-0",
          "Size": 2
        }
      ]
    },
    "BigKeys": {
      "BigKey": [
        {
          "Db": 0,
          "Key": "abc:def:eng",
          "KeyType": "zset",
          "Size": 2,
          "NodeId": "r-x****-db-0"
        }
      ]
    },
    "HotKeyMsg": "current version doesn't support",
    "BigKeyMsg": "current version doesn't support",
    "HighTrafficKeyMsg": "current version doesn't support",
    "HighTrafficKeys": {
      "HighTrafficKey": [
        {
          "Key": "abc:def:eng",
          "Db": 0,
          "Hot": "1988",
          "KeyType": "string",
          "NodeId": "r-x****-db-0\n",
          "inBytes": 85767,
          "outBytes": 1054684,
          "Size": 2
        }
      ]
    },
    "LargeKeys": {
      "LargeKey": [
        {
          "Db": "0",
          "Key": "abc:def:eng",
          "KeyType": "string",
          "DataSize": "33554439",
          "NodeId": "r-x****-db-0"
        }
      ]
    },
    "LargeKeyMsg": "current version doesn't support"
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

See [Release Notes](https://api.alibabacloud.com/document/DAS/2020-01-16/DescribeHotBigKeys#workbench-doc-change-demo) for a complete list.
