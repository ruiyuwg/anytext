Queries the top 100 large keys over a period of time.

## Operation description

The list, hash, set, and zset keys are sorted based on the number of elements in these keys. The top three keys that have the most elements are considered large keys.

-   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
    
-   The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
    
-   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    
-   This operation is available only for an ApsaraDB for Redis instance of one of the following versions:
    
    -   The instance is ApsaraDB for Redis Community Edition instances that use a major version of 5.0 or later or a performance-enhanced instance of the ApsaraDB for Redis Enhanced Edition (Tair).
        
    -   The ApsaraDB for Redis instance is updated to the latest minor version.
        

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DAS/2020-01-16/DescribeTopBigKeys)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DAS/2020-01-16/DescribeTopBigKeys)

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

hdm:DescribeTopBigKeys

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

The reserved parameter.

None

InstanceId

string

Yes

The ID of the ApsaraDB for Redis instance.

r-bp18ff4a195d\*\*\*\*

NodeId

string

No

The ID of the data shard on the ApsaraDB for Redis instance.

r-x\*\*\*\*-db-0

StartTime

string

Yes

The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.

1596177993000

EndTime

string

Yes

The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.

**Note**

-   The end time must be later than the start time.
    
-   Only data within the last four days can be queried.
    
-   The maximum interval between the **start time** and the\*\* end time\*\* is 3 hours.
    

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

BigKey

array<object>

The detailed information about the large keys.

**Note**

This parameter is left empty If no large keys exist within the specified time range.

object

Key

string

The key.

abc:def:eng

Db

integer

The database in which the key is stored.

0

KeyType

string

The type of the key.

zset

Size

integer

The number of elements in the key.

2

NodeId

string

The ID of the data shard on the ApsaraDB for Redis instance.

r-x\*\*\*\*-db-0

Code

string

The HTTP status code returned.

200

Success

string

Indicates whether the request was successful. Valid values:

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
    "BigKey": [
      {
        "Key": "abc:def:eng",
        "Db": 0,
        "KeyType": "zset",
        "Size": 2,
        "NodeId": "r-x****-db-0"
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

See [Release Notes](https://api.alibabacloud.com/document/DAS/2020-01-16/DescribeTopBigKeys#workbench-doc-change-demo) for a complete list.
