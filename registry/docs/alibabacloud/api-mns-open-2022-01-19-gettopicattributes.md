Call the GetTopicAttributes operation to retrieve the properties of a topic.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Mns-open/2022-01-19/GetTopicAttributes)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Mns-open/2022-01-19/GetTopicAttributes)

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

mns:GetTopicAttributes

get

\*Topic

`acs:mns:{#regionId}:{#accountId}:/topics/{#TopicName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

TopicName

string

Yes

The name of the topic.

demo-topic

Tag

array<object>

No

The list of resource tags.

object

No

The list of tags.

Key

string

No

The key of the tag.

tag1

Value

string

No

The value of the tag.

test

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

06273500-249F-5863-121D-74D51123\*\*\*\*

Code

integer

The response code.

200

Status

string

The status of the response.

Success

Message

string

The response message.

operation success

Success

boolean

Indicates whether the request was successful.

true

Data

object

The response data.

TopicName

string

The name of the topic.

demo-topic

MessageCount

integer

The number of messages in the topic.

0

MaxMessageSize

integer

The maximum length of a message body that can be sent to the topic, in bytes.

65536

MessageRetentionPeriod

integer

The maximum period for which a message can be retained in the topic, in seconds. After this period elapses from the time the message is sent, the message is deleted regardless of whether it has been successfully pushed to subscribers.

86400

CreateTime

integer

The time when the topic was created. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 00:00:00 UTC on January 1, 1970.

1449554277

LastModifyTime

integer

The last time the topic properties were modified. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 00:00:00 UTC on January 1, 1970.

1449554460

LoggingEnabled

boolean

Indicates whether Log Management is enabled.

-   True: Enabled.
    
-   False: Disabled.
    

True

Tags

array<object>

The list of resource tags.

object

The value associated with the tag key.

TagKey

string

The key of the tag.

tag1

TagValue

string

The value of the tag.

test

TopicType

string

The type of the topic. Valid values:

-   normal: Standard topic
    
-   fifo: FIFO topic
    

normal

TopicUrl

string

http:// 111111111\*\*\*\*.mns.us-west-1.aliyuncs.com/topics/testTopic

TopicInnerUrl

string

http:// 111111111\*\*\*\*.mns.us-west-1-internal.aliyuncs.com/topics/testTopic

## Examples

Success response

`JSON` format

```
{
  "RequestId": "06273500-249F-5863-121D-74D51123****",
  "Code": 200,
  "Status": "Success",
  "Message": "operation success",
  "Success": true,
  "Data": {
    "TopicName": "demo-topic",
    "MessageCount": 0,
    "MaxMessageSize": 65536,
    "MessageRetentionPeriod": 86400,
    "CreateTime": 1449554277,
    "LastModifyTime": 1449554460,
    "LoggingEnabled": true,
    "Tags": [
      {
        "TagKey": "tag1",
        "TagValue": "test"
      }
    ],
    "TopicType": "normal",
    "TopicUrl": "http:// 111111111****.mns.us-west-1.aliyuncs.com/topics/testTopic",
    "TopicInnerUrl": "http:// 111111111****.mns.us-west-1-internal.aliyuncs.com/topics/testTopic"
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Mns-open/2022-01-19/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Mns-open/2022-01-19/GetTopicAttributes#workbench-doc-change-demo) for a complete list.
