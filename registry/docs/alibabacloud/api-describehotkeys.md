Call the DescribeHotKeys operation to query the hot keys in a Redis instance.

## Operation description

Before you call this operation, make sure that the following requirements are met:

-   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is 4.3.3 or later. We recommend that you use the latest version.
    
-   The Database Autonomy Service (DAS) SDK version must be 1.0.2 or later.
    
-   If you use an SDK to call the DAS service, you must set the region to cn-shanghai.
    
-   This operation applies only to Redis instances that meet the following requirements:
    -   The instance is a Redis Community Edition instance or a Tair (Enterprise Edition) memory-optimized instance.
        
    -   The instance is updated to the latest minor version.
        

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DAS/2020-01-16/DescribeHotKeys)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DAS/2020-01-16/DescribeHotKeys)

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

hdm:DescribeHotKeys

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

InstanceId

string

Yes

The ID of the Redis instance.

r-bp18ff4a195d\*\*\*\*

NodeId

string

No

The data shard ID of the Redis instance.

r-x\*\*\*\*-db-0

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Message

string

The returned message.

**Note**

If the request is successful, Successful is returned. If the request fails, an error message such as an error code is returned.

Successful

RequestId

string

The request ID.

B6D17591-B48B-4D31-9CD6-9B9796B2\*\*\*\*

Data

object

HotKey

array<object>

The details of the hot keys.

object

The result set.

Key

string

The hot key.

abc:def:eng

Db

integer

The database where the key is stored.

0

Hot

string

The access frequency of the key, which is the number of accesses per second.

5500~6000

KeyType

string

The type of the key.

zset

Size

integer

The number of elements in the key.

2

InBytes

integer

The inbound traffic. Unit: bytes.

85766

OutBytes

integer

The outbound traffic. Unit: bytes.

1054688

NodeId

string

The node ID.

r-x\*\*\*\*-db-0

Category

string

The category of the hot key. Valid values:

-   **qps**: The hot keys are identified based on queries per second (QPS).
    
-   **traffic**: The hot keys are identified based on traffic.
    

qps

Code

string

The HTTP status code.

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
    "HotKey": [
      {
        "Key": "abc:def:eng",
        "Db": 0,
        "Hot": "5500~6000",
        "KeyType": "zset",
        "Size": 2,
        "InBytes": 85766,
        "OutBytes": 1054688,
        "NodeId": "r-x****-db-0",
        "Category": "qps"
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

See [Release Notes](https://api.alibabacloud.com/document/DAS/2020-01-16/DescribeHotKeys#workbench-doc-change-demo) for a complete list.
