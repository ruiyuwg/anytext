Queries information about all topics in your account.

## Operation description

**Important** Alibaba Cloud OpenAPI is a management API that you can use to manage and query resources of Alibaba Cloud services. Integrate this API for management purposes only. Do not rely on this API for core data links that send and receive messages. This can create security threats for your data links.

This operation is typically used to generate a list of resources, not to view specific details.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ons/2019-02-14/OnsTopicList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ons/2019-02-14/OnsTopicList)

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

mq:ListTopic

list

Instance

`acs:mq:{#regionId}:{#accountId}:{#InstanceId}`

None

-   mq:QueryInstanceBaseInfo

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Topic

string

No

Specify the topic to query. If you leave this parameter empty, all topics are queried.

test

InstanceId

string

No

The ID of the instance that contains the topics you want to query.

MQ\_INST\_188077086902\*\*\*\*\_BXSuW61e

Tag

array<object>

No

The list of tags that are attached to the topic. The list can contain a maximum of 20 elements.

object

No

The structure of the returned tag.

Key

string

Yes

The tag key of the topic. You must specify the **Key** and **Value** parameters at the same time, or leave them both empty. If you specify both parameters, this operation queries topics that have the specified tag. If you leave both parameters empty, this operation queries all topics.

-   If you specify this parameter, its value cannot be an empty string.
    
-   The value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
    

CartService

Value

string

Yes

The tag value of the topic. You must specify the **Key** and **Value** parameters at the same time, or leave them both empty. If you specify both parameters, this operation queries topics that have the specified tag. If you leave both parameters empty, this operation queries all topics.

-   If you specify this parameter, its value can be an empty string.
    
-   The value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
    

ServiceA

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned data structure.

RequestId

string

This is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.

4A978869-7681-4529-B470-107E1379\*\*\*\*

Data

object

PublishInfoDo

array<object>

The list of topics in the specified instance.

array<object>

The data structure of the returned topic.

MessageType

integer

The message type. Valid values:

-   **0**: Normal message
    
-   **1**: Partitionally ordered message
    
-   **2**: Globally ordered message
    
-   **4**: Transactional message
    
-   **5**: Scheduled and delayed message
    

0

RelationName

string

The relation name. Valid values are Owner, Subscribable, Publishable, and Publishable and Subscribable.

授权发布/订阅

Owner

string

The ID of the topic owner. This is the ID of an Alibaba Cloud account.

138015630679\*\*\*\*

IndependentNaming

boolean

Indicates whether the instance that contains the topic has a namespace. Valid values:

-   **true**: The instance has an independent namespace. The resource name must be unique within the instance. The resource name can be the same as a resource name in another instance.
    
-   **false**: The instance does not have an independent namespace. The resource name must be globally unique within and across all instances.
    

true

Remark

string

The remarks.

测试

Relation

integer

The relation ID. Valid values:

-   **1**: The owner of the topic.
    
-   **2**: The account can publish messages to the topic.
    
-   **4**: The account can subscribe to the topic.
    
-   **6**: The account can publish messages to and subscribe to the topic.
    

6

CreateTime

integer

The time when the topic was created.

1570700947000

Topic

string

The topic name.

test

Tags

object

Tag

array<object>

The tags that are attached to the topic.

object

The definition of the tag structure.

Key

string

The tag key.

CartService

Value

string

The tag value.

SrviceA

InstanceId

string

The ID of the instance that contains the topic.

MQ\_INST\_188077086902\*\*\*\*\_BXSuW61e

ServiceStatus

integer

The status of the asynchronous topic creation. Valid values:

-   **0**: Creating.
    
-   **1**: In service.
    

0

## Examples

Success response

`JSON` format

```
{
  "RequestId": "4A978869-7681-4529-B470-107E1379****",
  "Data": {
    "PublishInfoDo": [
      {
        "MessageType": 0,
        "RelationName": "授权发布/订阅",
        "Owner": "138015630679****",
        "IndependentNaming": true,
        "Remark": "测试",
        "Relation": 6,
        "CreateTime": 1570700947000,
        "Topic": "test",
        "Tags": {
          "Tag": [
            {
              "Key": "CartService",
              "Value": "SrviceA"
            }
          ]
        },
        "InstanceId": "MQ_INST_188077086902****_BXSuW61e",
        "ServiceStatus": 0
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ons/2019-02-14/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ons/2019-02-14/OnsTopicList#workbench-doc-change-demo) for a complete list.
