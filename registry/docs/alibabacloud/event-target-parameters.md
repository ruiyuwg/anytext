This topic describes the metadata parameters of an event target.

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

EventBusName

String

Yes

default

The name of the event bus. For more information, see [Limits](/help/en/eventbridge/product-overview/limits#concept-337381).

RuleName

String

Yes

MNSRule

The name of the event rule. For more information, see [Limits](/help/en/eventbridge/product-overview/limits#concept-337381).

Description

String

No

The filtering rule for MNS.

The description of the rule.

Status

String

No

ENABLE

The status of the rule. Valid values:

-   ENABLE: The rule is enabled.
    
-   DISABLE: The rule is disabled.
    

Default value: ENABLE.

FilterPattern

String

No

{\\"source\\": \[{\\"prefix\\": \\"acs.\\"}\],\\"type\\": \[{\\"prefix\\":\\"oss:ObjectReplication\\"}\],\\"subject\\":\[{\\"prefix\\":\\"acs:oss:cn-hangzhou:123456789098\*\*\*\*:my-movie-bucket/\\", \\"suffix\\":\\".txt\\"}\]}

The event pattern. The value is in JSON format. For more information about the values, see [Event pattern](/help/en/eventbridge/user-guide/event-patterns#task-1938355).

Targets

List<Target>

Yes

The destination of the event.

Id

String

Yes

1

The custom ID of the event target. The ID must be unique within the current rule.

Type

String

Yes

`acs.mns.queue`

The type of the event target. For more information, see the detailed description of each event target in the following sections.

Endpoint

String

No

`acs:mns:cn-hangzhou:123456789098****:queues/myqueue`

The endpoint link for delivery. For more information, see the Endpoint format for each event target in the following sections.

PushRetryStrategy

String

Yes

BACKOFF\_RETRY

The retry policy for pushing events. Valid values:

-   BACKOFF\_RETRY: Backoff retry. Retries up to 3 times. The interval for each retry is a random value between 10 and 20 seconds.
    
-   EXPONENTIAL\_DECAY\_RETRY: Exponential decay retry. Retries up to 176 times. The interval for each retry increases exponentially to 512 seconds. The total retry time is 1 day. The specific interval for each retry is: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 512, ..., 512 seconds (a total of 167 retries at 512 seconds).
    

DeadLetterQueue

String

No

The dead-letter queue. Events that are not processed or have exceeded the maximum number of retries are written to the dead-letter queue. Supported queue types are Simple Message Queue (formerly MNS) and ApsaraMQ for RocketMQ.

Arn

String

No

`acs:mns:cn-hangzhou:123456789098****:/queues/rule-deadletterqueue` or `acs:mq:cn-hangzhou:123456789098****:/instances/myinstance/topic/mytopic`

The Alibaba Cloud Resource Name (ARN) of the dead-letter queue. Events that are not processed or have exceeded the maximum number of retries are written to the dead-letter queue. Supported queue types are Simple Message Queue (formerly MNS) and ApsaraMQ for RocketMQ.

ParamList

List<Param>

Yes

The parameters passed by the event.

resourceKey

String

Yes

body

The parameter of the destination service.

form

String

Yes

TEMPLATE

The format for event transformation. Four types are available:

-   ORIGINAL: Complete event. You do not need to define value and template. EventBridge routes the complete structure of the original CloudEvents event to the event target without transformation. For more information, see [Complete event](/help/en/eventbridge/user-guide/event-transformation#section-0xq-w7m-vxe).
    
-   JSONPATH: Partial event. You do not need to define template. You only need to define value. EventBridge extracts parameters from the CloudEvents event using JSONPath and routes the specified event content to the event target. For more information, see [Partial event](/help/en/eventbridge/user-guide/event-transformation#section-0dh-85n-u88).
    
    The following is a sample value.
    
    ```
    $.data.name
    ```
    
-   CONSTANT: Constant. You do not need to define template. You only need to define value. Regardless of the event content, EventBridge routes only the constant defined in value to the event target. For more information, see [Constant](/help/en/eventbridge/user-guide/event-transformation#section-dw4-tmt-4o1).
    
    The following is a sample value.
    
    ```
    "test1"
    ```
    
-   TEMPLATE: Template. You must define value and template. EventBridge extracts parameters from the CloudEvents event using **JSONPath**, stores the parameter values in value, and then routes them to the event target in the format defined by template. For more information, see [Template](/help/en/eventbridge/user-guide/event-transformation#section-qp6-pcr-r8u).
    
    The following is a sample value.
    
    ```
    {
        "name":"$.data.name",
        "constant":"Please deal with it timely."
    }
    ```
    
    The following is a sample template.
    
    ```
    The instance is broken, which name is ${name}, ${constant}
    ```
    

value

String

Yes

`{\"key\"=\"value\"}`

The value of the transformed event.

template

String

No

```
The value of ${key} is ${value}!
```

The style of the event transformation template.

## Response parameters

**Parameter**

**Type**

**Example value**

**Description**

RuleARN

String

`acs:eventbridge:cn-hangzhou:123456789098****:eventbus/default/rule/MNSRule`

The ARN of the event rule, used for authorization.

## DingTalk

If you select DingTalk as the event target, the value of the Type parameter in the metadata is `acs.dingtalk` and the Endpoint parameter is the configured DingTalk URL. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

URL

Yes

CONSTANT

The URL.

None

SecretKey

Yes

CONSTANT

The secret key.

None

Body

Yes

TEMPLATE

Define the key and value for the TEMPLATE.

Define the template of the message body.

The following is a **JSONPath** example:

```
{
    "Id":"KD20k9rpqDRXPq0SXXlqeT****",
    "Type":"acs.dingtalk",
    "Endpoint":"https://oapi.dingtalk.com/robot/send?access_token=1560abe367f48877c69bb6a9916244979927abbbbf82f4fe8801692cd6ea****",
    "ParamList":[
        {
            "Value":"https://oapi.dingtalk.com/robot/send?access_token=1560abe367f48877c69bb6a9916244979927abbbbf82f4fe8801692cd6ea****",
            "ResourceKey":"URL",
            "Form":"CONSTANT"
        },
        {
            "Value":"SEC1eca5209e0c6c23165b9504967522d47b0d0004e1caf3a75f6ddfda7359d****",
            "ResourceKey":"SecretKey",
            "Form":"CONSTANT"
        },
        {
            "Value":{
                "content":"$.data.content"
            },
            "ResourceKey":"Body",
            "Form":"TEMPLATE",
            "Template":{
                "Msgtype":"text",
                "Text":{
                    "content":"@1851111***** ${content}"
                },
                "At":{

                }
            }
        }
    ]
}
```

## Mailbox

If you select mailbox as the event target, the value of the Type parameter in the metadata is `acs.mail` and the Endpoint parameter is the configured mailbox URL in the `acs:mail:${region}:${uid}` format. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

Subject

Yes

CONSTANT

The subject.

None

AccountName

Yes

CONSTANT

The sender address.

None

AddressType

Yes

CONSTANT

The address type.

None

ReplyToAddress

Yes

CONSTANT

The reply-to address.

None

ToAddress

Yes

-   CONSTANT
    
-   JSONPATH
    

The recipient address.

None

IsHtmlBody

Yes

CONSTANT

Specifies whether the body is in HTML format. Valid values:

-   true: The body is in HTML format.
    
-   false: The body is not in HTML format.
    

None

Body

Yes

TEMPLATE

Define the key and value for the TEMPLATE.

Define the template of the message body.

The following is a **JSONPath** example:

```
{
    "Id":"KD20k9rpqDRXPq0SXXlqeT****",
    "Type":"acs.mail",
    "Endpoint":"acs:mail:cn-hangzhou:164901546557****",
    "ParamList":[
        {
            "Value":"test",
            "ResourceKey":"Subject",
            "Form":"CONSTANT"
        },
        {
            "Value":"example.com",
            "ResourceKey":"AccountName",
            "Form":"CONSTANT"
        },
        {
            "Value":"1",
            "ResourceKey":"AddressType",
            "Form":"CONSTANT"
        },
        {
            "Value":"true",
            "ResourceKey":"ReplyToAddress",
            "Form":"CONSTANT"
        },
        {
            "Value":"$.data.name",
            "ResourceKey":"ToAddress",
            "Form":"JSONPATH"
        },
        {
            "Value":"true",
            "ResourceKey":"IsHtmlBody",
            "Form":"CONSTANT"
        },
        {
            "Value":{
                "Mobile":"$.data.mobile",
                "Subject":"$.subject"
            },
            "ResourceKey":"Body",
            "Form":"TEMPLATE",
            "Template":{
                "Code":"${subject}"
            }
        }
    ]
}
```

## Text message

If you select text message as the event target, the value of the Type parameter in the metadata is `acs.sms` and the Endpoint parameter is the configured Short Message Service URL in the `acs:sms:${region}:${uid}` format. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

PhoneNumbers

Yes

-   CONSTANT
    
-   JSONPATH
    

The mobile phone number.

None

SignName

Yes

CONSTANT

The signature name.

None

TemplateCode

Yes

CONSTANT

The template code of the Short Message Service.

None

TemplateParam

Yes

TEMPLATE

Define the key and value for the TEMPLATE.

Define the template of the message body.

The following is a **JSONPath** example:

```
{
    "Id":"KD20k9rpqDRXPq0SXXlqeT****",
    "Type":"acs.sms",
    "Endpoint":"acs:sms:cn-hangzhou:164901546557****",
    "ParamList":[
        {
            "Value":"$.data",
            "ResourceKey":"PhoneNumbers",
            "Form":"JSONPATH"
        },
        {
            "Value":"[For testing only] Alibaba Cloud Communications",
            "ResourceKey":"SignName",
            "Form":"CONSTANT"
        },
        {
            "Value":"[For testing only] Alibaba Cloud Communications test template",
            "ResourceKey":"TemplateCode",
            "Form":"CONSTANT"
        },
        {
            "Value":{
                "Mobile":"$.data.mobile",
                "Subject":"$.subject"
            },
            "ResourceKey":"TemplateParam",
            "Form":"TEMPLATE",
            "Template":{
                "Code":"${subject}"
            }
        }
    ]
}
```

## Function Compute

If you select Function Compute as the event target, the value of the Type parameter in the metadata is `acs.fc.function` and the Endpoint parameter is the configured URL in the `acs:fc:${region}:${uid}:services/${serviceName}.${Qualifier}/functions/${functionName}` format. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

serviceName

Yes

CONSTANT

The service.

None

functionName

Yes

CONSTANT

The function.

None

Body

Yes

-   ORIGINAL
    
-   CONSTANT
    
-   JSONPATH
    
-   TEMPLATE
    

The message body content of the function. Define the key and value for the TEMPLATE.

Define the template of the message body.

Qualifier

Yes

CONSTANT

The service version or alias.

None

InvocationType

Yes

CONSTANT

The invocation type. Valid values:

-   Sync: synchronous call.
    
-   Async: asynchronous invocation.
    

None

DataFormat

Yes

CONSTANT

Defines the format for data shipping:

-   Object
    
-   ObjectList 
    

None

The following is a **JSONPath** example:

```
{
    "Id":"KD20k9rpqDRXPq0SXXlqeT****",
    "Type":"acs.fc.function",
    "Endpoint":"acs:fc:cn-hangzhou:164901546557****:services/guide-hello_world.LATEST/functions/hello_world",
    "ParamList":[
        {
            "Value":"guide-hello_world",
            "ResourceKey":"serviceName",
            "Form":"CONSTANT"
        },
        {
            "Value":"hello_world",
            "ResourceKey":"functionName",
            "Form":"CONSTANT"
        },
        {
            "ResourceKey": "Qualifier",
            "Form": "CONSTANT",
            "Value": "LATEST"
        },
        {
            "ResourceKey": "InvocationType",
            "Form": "CONSTANT",
            "Value": "Sync"
        },
        {
            "Value":"$.data.name",
            "ResourceKey":"Body",
            "Form":"JSONPATH"
        },
        {
            "ResourceKey": "DataFormat",
            "Form": "CONSTANT",
            "Value": "Object"
        }
    ]
}
```

## Lightweight message queue

If you select Simple Message Queue (formerly MNS) as the event target, the value of the Type parameter in the metadata is `acs.mns.queue` and the Endpoint parameter is the configured URL in the `acs:mns:${region}:${uid}:queues/${queue}` format. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

queue

Yes

CONSTANT

The queue.

None

Body

Yes

-   ORIGINAL
    
-   CONSTANT
    
-   JSONPATH
    
-   TEMPLATE
    

Configure the message content based on the form.

If you set form to TEMPLATE, configure the template here.

The following is a **JSONPath** example:

```
{
    "Id":"KD20k9rpqDRXPq0SXXlqeT****",
    "Type":"acs.mns.queue",
    "Endpoint":"acs:mns:cn-hangzhou:164901546557****:queues/MyQueue",
    "ParamList":[
        {
            "Value":"MyQueue",
            "ResourceKey":"queue",
            "Form":"CONSTANT"
        },
        {
            "Value":{
                "Source":"$.source"
            },
            "ResourceKey":"Body",
            "Form":"TEMPLATE",
            "Template":"The event comes from ${source} is abnormal."
        }
    ]
}
```

## ApsaraMQ for RocketMQ

If you select ApsaraMQ for RocketMQ as the event target, the value of the Type parameter in the metadata is `acs.rocketmq` and the Endpoint parameter is the configured URL in the `acs:mq:${region}:${uid}:/instances/${instanceId}/topic/${topic}` format. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

InstanceId

Yes

CONSTANT

The instance ID.

None

Topic

Yes

CONSTANT

The topic.

None

Body

Yes

-   ORIGINAL
    
-   JSONPATH
    
-   CONSTANT
    
-   TEMPLATE
    

The message body.

If you set form to TEMPLATE, configure the template here.

Properties

No

-   JSONPATH
    
-   TEMPLATE
    

The properties.

None

Keys

No

-   JSONPATH
    
-   CONSTANT
    
-   TEMPLATE
    

The key identifiers.

If you set form to TEMPLATE, configure the template here.

Tags

No

-   JSONPATH
    
-   CONSTANT
    
-   TEMPLATE
    

The tags.

If you set form to TEMPLATE, configure the template here.

The following is a **JSONPath** example:

```
{
    "Id":"KD20k9rpqDRXPq0SXXlqeT****",
    "Type":"acs.rocketmq",
    "Endpoint":"acs:mq:cn-hangzhou:164901546557****:/instances/${instanceId}/topic/${topic}",
    "ParamList":[
        {
            "Value":"MQ_INST_164901546557****_BAAQ4gWo",
            "ResourceKey":"InstanceId",
            "Form":"CONSTANT"
        },
        {
            "Value":"test-topic1",
            "ResourceKey":"Topic",
            "Form":"CONSTANT"
        },
        {
            "Value":"$.data.name",
            "ResourceKey":"Body",
            "Form":"JSONPATH"
        },
        {
            "Value":"$.data.userProperties",
            "ResourceKey":"Properties",
            "Form":"JSONPATH"
        },
        {
            "Value":"$.data.systemProperties.KEYS",
            "ResourceKey":"Keys",
            "Form":"JSONPATH"
        },
        {
            "Value":"$.data.systemProperties.TAGS",
            "ResourceKey":"Tags",
            "Form":"JSONPATH"
        }
    ]
}
```

## ApsaraMQ for RabbitMQ

If you select ApsaraMQ for RabbitMQ as the event target, the value of the Type parameter in the metadata is `acs.rabbitmq` and the Endpoint parameter is the configured URL in the `acs:amqp:${region}:${uid}:/instances/${instanceId}/vhosts/${vhostName}/exchanges/${exchangeName}` format. The following table describes the ParamList parameter’s resourceKey field.

**resourceKey**

**Required**

**form**

**value**

**template**

InstanceId

Yes

CONSTANT

The instance ID.

None

Vhost

Yes

CONSTANT

virtual machine.

None

TargetType

Yes

CONSTANT

Target type.

**Note**

You can select only one of the Exchange and Queue parameters.

None

Exchange

No. This parameter is required only if you set TargetType to Exchange.

CONSTANT

The Exchange mode.

None

Queue

No. This parameter is required only if you set TargetType to Queue.

CONSTANT

**Note**

You can select only one of the Exchange and Queue parameters.

The Queue mode.

None

Body

Yes

-   ORIGINAL
    
-   JSONPATH
    
-   CONSTANT
    
-   TEMPLATE
    

The message body.

If you set form to TEMPLATE, configure the template here.

MessageId

No. By default, this value is automatically generated.

-   JSONPATH
    
-   CONSTANT
    
-   TEMPLATE
    

The message ID.

If you set form to TEMPLATE, configure the template here.

Properties

No

-   JSONPATH
    
-   TEMPLATE
    

The properties.

If you set form to TEMPLATE, configure the template here.

The following are **JSONPath** examples:

Example 1: **Destination type** is **Exchange**

```
{
    "Id":"KD20k9rpqDRXPq0SXXlqeT****",
    "Type":"acs.rabbitmq",
    "Endpoint":"acs:amqp:cn-hangzhou:164901546557****:/instances/${instanceId}/vhosts/${vhostName}/exchanges/${exchangeName}",
    "ParamList":[
        {
            "Value":"amqp-cn-i7m29o3s****",
            "ResourceKey":"InstanceId",
            "Form":"CONSTANT"
        },
        {
            "Value":"test.host",
            "ResourceKey":"Vhost",
            "Form":"CONSTANT"
        },
        {
            "Value":"Exchange",
            "ResourceKey":"TargetType",
            "Form":"CONSTANT"
        },
        {
            "Value":"amq.direct",
            "ResourceKey":"Exchange",
            "Form":"CONSTANT"
        },
        {
            "Value":"$.data.name",
            "ResourceKey":"RoutingKey",
            "Form":"JSONPATH"
        },
        {
            "Value":"$.data.name",
            "ResourceKey":"Body",
            "Form":"JSONPATH"
        },
        {
            "Value":"$.data.message",
            "ResourceKey":"MessageId",
            "Form":"JSONPATH"
        },
        {
            "Value":"$.data.userProperties",
            "ResourceKey":"Properties",
            "Form":"JSONPATH"
        }
    ]
}
```

Example 2: **Destination type** is **Queue**

```
{
    "Id":"EldwXoVAws5Ix8VpVmrDmr****",
    "Type":"acs.rabbitmq",
    "Endpoint":"acs:amqp:cn-hangzhou:164901546557****:/instances/${instanceId}/vhosts/${vhostName}/exchanges/${exchangeName}",
    "ParamList":[
        {
            "Value":"amqp-cn-i7m29o3s****",
            "ResourceKey":"InstanceId",
            "Form":"CONSTANT"
        },
        {
            "Value":"test.host",
            "ResourceKey":"Vhost",
            "Form":"CONSTANT"
        },
        {
            "Value":"Queue",
            "ResourceKey":"TargetType",
            "Form":"CONSTANT"
        },
        {
            "Value":"test.event",
            "ResourceKey":"Queue",
            "Form":"CONSTANT"
        },
        {
            "Value":"$.data.body",
            "ResourceKey":"Body",
            "Form":"JSONPATH"
        },
        {
            "Value":"$.data.message",
            "ResourceKey":"MessageId",
            "Form":"JSONPATH"
        },
        {
            "Value":"$.data.userproperties",
            "ResourceKey":"Properties",
            "Form":"JSONPATH"
        }
    ]
}
```

## ApsaraMQ for Kafka

If you select ApsaraMQ for Kafka as the event target, the value of the Type parameter in the metadata is `acs.alikafka` and the Endpoint parameter is the configured URL in the `acs:alikafka:${regionId}:${accountId}:topics/${topic}` format. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

InstanceId

Yes

CONSTANT

The Kafka instance ID.

None

Topic

Yes

CONSTANT

The topic name.

None

Value

Yes

-   CONSTANT
    
-   ORIGINAL
    
-   JSONPATH
    
-   TEMPLATE
    

The message body.

The format for event transformation. Four types are available:

-   ORIGINAL: Complete event. You do not need to define value and template. EventBridge routes the complete structure of the original CloudEvents event to the event target without transformation. For more information, see [Complete event](/help/en/eventbridge/user-guide/event-transformation#section-0xq-w7m-vxe).
    
-   JSONPATH: Partial event. You do not need to define template. You only need to define value. EventBridge extracts parameters from the CloudEvents event using JSONPath and routes the specified event content to the event target. For more information, see [Partial event](/help/en/eventbridge/user-guide/event-transformation#section-0dh-85n-u88).
    
    The following is a sample value.
    
    ```
    $.data.name
    ```
    
-   CONSTANT: Constant. You do not need to define template. You only need to define value. Regardless of the event content, EventBridge routes only the constant defined in value to the event target. For more information, see [Constant](/help/en/eventbridge/user-guide/event-transformation#section-dw4-tmt-4o1).
    
    The following is a sample value.
    
    ```
    "test1"
    ```
    
-   TEMPLATE: Template. You must define value and template. EventBridge extracts parameters from the CloudEvents event using **JSONPath**, stores the parameter values in value, and then routes them to the event target in the format defined by template. For more information, see [Template](/help/en/eventbridge/user-guide/event-transformation#section-qp6-pcr-r8u).
    
    The following is a sample value.
    
    ```
    {
        "name":"$.data.name",
        "constant":"Please deal with it timely."
    }
    ```
    
    The following is a sample template.
    
    ```
    The instance is broken, which name is ${name}, ${constant}
    ```
    

Key

Yes

JSONPATH

The message key.

See the template for Value.

Acks

Yes

CONSTANT

The acknowledgment mode.

None

The following is a **JSONPath** example:

```
{
    "id":"1rypRt1I9ET6Aks9Y6NNg6U****",
    "type":"acs.alikafka",
    "endpoint":"acs:alikafka:cn-huhehaote:118609547428****:topics/test-topic",
    "pushSelector":"PARAM_TRANSFORMER",
    "errorsTolerance":"ALL",
    "pushRetryStrategy":"BACKOFF_RETRY",
    "paramList":[
        {
            "value":"alikafka_pre-cn-zpr3fwhe****",
            "resourceKey":"InstanceId",
            "form":"CONSTANT"
        },
        {
            "value":"test-topic",
            "resourceKey":"Topic",
            "form":"CONSTANT"
        },
        {
            "value":"$.data",
            "resourceKey":"Value",
            "form":"JSONPATH"
        },
        {
            "value":"$.data.key",
            "resourceKey":"Key",
            "form":"JSONPATH"
        },
        {
            "value":"0",
            "resourceKey":"Acks",
            "form":"CONSTANT"
        }
    ]
}
```

## **Simple Log Service**

If you select Simple Log Service (SLS) as the event target, the value of the Type parameter in the metadata is `acs.sls` and the Endpoint parameter is the configured URL in the `acs:sls:${regionId}:${accountId}:project/${project}/logstore/${logstore}` format. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

Project

Yes

CONSTANT

The name of the log project.

None

LogStore

Yes

CONSTANT

The name of the Logstore.

None

Topic

No

-   CONSTANT
    
-   TEMPLATE
    
-   JSONPATH
    

The log topic.

The format for event transformation. Four types are available:

-   ORIGINAL: Complete event. You do not need to define value and template. EventBridge routes the complete structure of the original CloudEvents event to the event target without transformation. For more information, see [Complete event](/help/en/eventbridge/user-guide/event-transformation#section-0xq-w7m-vxe).
    
-   JSONPATH: Partial event. You do not need to define template. You only need to define value. EventBridge extracts parameters from the CloudEvents event using JSONPath and routes the specified event content to the event target. For more information, see [Partial event](/help/en/eventbridge/user-guide/event-transformation#section-0dh-85n-u88).
    
    The following is a sample value.
    
    ```
    $.data.name
    ```
    
-   CONSTANT: Constant. You do not need to define template. You only need to define value. Regardless of the event content, EventBridge routes only the constant defined in value to the event target. For more information, see [Constant](/help/en/eventbridge/user-guide/event-transformation#section-dw4-tmt-4o1).
    
    The following is a sample value.
    
    ```
    "test1"
    ```
    
-   TEMPLATE: Template. You must define value and template. EventBridge extracts parameters from the CloudEvents event using **JSONPath**, stores the parameter values in value, and then routes them to the event target in the format defined by template. For more information, see [Template](/help/en/eventbridge/user-guide/event-transformation#section-qp6-pcr-r8u).
    
    The following is a sample value.
    
    ```
    {
        "name":"$.data.name",
        "constant":"Please deal with it timely."
    }
    ```
    
    The following is a sample template.
    
    ```
    The instance is broken, which name is ${name}, ${constant}
    ```
    

Body

No

-   CONSTANT
    
-   ORIGINAL
    
-   JSONPATH
    
-   TEMPLATE
    

The log content.

See the template for Topic.

ContentType

Yes

CONSTANT

The content type.

Valid values: JSON and KeyValue. Default value: JSON.

-   If you select JSON, the index field of the log delivered to SLS is `content`, and its value is the event content defined in the Body parameter.
    
-   If you select KeyValue, the index field and value of the log delivered to SLS are determined by the structure defined by ContentSchema.
    

RoleName

Yes

CONSTANT

The role configuration.

None

ContentSchema

No

CONSTANT

A custom content template for the indexes and values of logs that are written to SLS.

```
{
    "Key_1":{
        "form":"CONSTANT",
        "value":"myKey01"
    },
    "Value_1":{
        "form":"JSONPATH",
        "value":"$.data.myValue01"
    }
}
```

The field names "Key\_1" and "Value\_1" represent an index-value pair.

The following is a **JSONPath** example:

```
{
    "id":"MwOpn5yyemTlQjE5JwYjme****",
    "type":"acs.sls",
    "endpoint":"acs:sls:cn-hangzhou:182572506381****:project/${project}/logstore/${logstore}",
    "pushSelector":"PARAM_TRANSFORMER",
    "errorsTolerance":"ALL",
    "pushRetryStrategy":"BACKOFF_RETRY",
    "paramList":[
        {
            "value":"testproject37****",
            "resourceKey":"Project",
            "form":"CONSTANT"
        },
        {
            "value":"testlogstore37****",
            "resourceKey":"LogStore",
            "form":"CONSTANT"
        },
        {
            "value":"$.data.topic",
            "resourceKey":"Topic",
            "form":"JSONPATH"
        },
        {
            "value":"KeyValue",
            "resourceKey":"ContentType",
            "form":"CONSTANT"
        },
        {
            "value":"AliyunEventBridgeSLS-248QJd****",
            "resourceKey":"RoleName",
            "form":"CONSTANT"
        },
        {
            "value":"{\"Key_1\":{\"form\":\"CONSTANT\",\"value\":\"name\"},\"Value_1\":{\"form\":\"CONSTANT\",\"value\":\"age\"}}",
            "resourceKey":"ContentSchema",
            "form":"CONSTANT"
        }
    ]
}
```

## HTTP/HTTPS

If you select HTTP/HTTPS as the event target, the value of the Type parameter in the metadata is `http` or `https` and the Endpoint parameter is the configured URL. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

url

Yes

CONSTANT

The URL.

None

Body

Yes

-   ORIGINAL
    
-   CONSTANT
    
-   JSONPATH
    
-   TEMPLATE
    

Currently, only data transfer through the body of a POST request is supported. To use headers or queries, see [Manage API destinations](/help/en/eventbridge/user-guide/manage-api-destinations#task-2274989).

If form is set to TEMPLATE, configure the corresponding template here. The variables in the template come from the value.

Network

Yes

CONSTANT

The network type. Valid values:

-   PublicNetwork: The public network.
    
-   PrivateNetwork: VPC network. If you select this option, you must configure VPC, vSwitch, and SecurityGroup information.
    

None

VPCNameAndId

No. This parameter is required only if you set Network to PrivateNetwork.

CONSTANT

The information about the VPC where the destination resides. Format: `VPCName+"/" + VPCId`.

None

VSwitchesNameAndId

No. This parameter is required only if you set Network to PrivateNetwork.

CONSTANT

The information about the vSwitches of the VPC where the destination is deployed. Multiple vSwitches are supported. The format is a JSON string. For example: `[VSwitchName+"/"+VSwitchId , VSwitchName+"/"+VSwitchId ]` .

None

SecurityGroupNameAndId

No. This parameter is required only if you set Network to PrivateNetwork.

CONSTANT

The information about the security group of the VPC where the destination resides. Format: `SecurityGroupName+"/" + SecurityGroupId`.

None

Token

No. By default, this parameter is empty.

CONSTANT

Used for signature verification. The Header Key is fixed to `"x-eventbridge-signature-token"`, and the Value is the entered value.

None

The following are **JSONPath** examples:

Example 1: **Network type** is **Internet**

```
{
    "Id":"KD20k9rpqDRXPq0SXXlqeT****",
    "Type":"https",
    "Endpoint":"http(s)://www.****.com/product/aliware/eventbridge",
    "ParamList":[
        {
            "Value":"http(s)://www.****.com/product/aliware/eventbridge",
            "ResourceKey":"url",
            "Form":"CONSTANT"
        },
        {
            "Value":"",
            "ResourceKey":"Body",
            "Form":"ORIGINAL"
        },
        {
            "Value":"PublicNetwork",
            "ResourceKey":"Network",
            "Form":"CONSTANT"
        }
    ]
}
```

Example 2: **Network type** is **virtual private cloud (VPC)**

```
{
    "Id":"ZOiNcqqzTGSrDJanZQ72vj****",
    "Type":"http",
    "Endpoint":"http(s)://192.168.XX.XX:8080",
    "ParamList":[
        {
            "Value":"http(s)://192.168.XX.XX:8080",
            "ResourceKey":"url",
            "Form":"CONSTANT"
        },
        {
            "Value":"",
            "ResourceKey":"Body",
            "Form":"ORIGINAL"
        },
        {
            "Value":"PrivateNetwork",
            "ResourceKey":"Network",
            "Form":"CONSTANT"
        },
        {
            "Value":"catalog-system/vpc-bp1ohdo84u2lt9wzq****",
            "ResourceKey":"VPCNameAndId",
            "Form":"CONSTANT"
        },
        {
            "Value":"[\"eb/vsw-bp10rbrt6rb6vrd89****\"]",
            "ResourceKey":"VSwitchesNameAndId",
            "Form":"CONSTANT"
        },
        {
            "Value":"sg-catalog-eventlistener/sg-bp14zrnfyik5av27****",
            "ResourceKey":"SecurityGroupNameAndId",
            "Form":"CONSTANT"
        },
        {
            "Value":"",
            "ResourceKey":"Token",
            "Form":"CONSTANT"
        }
    ]
}
```

## Database

-   If you select an RDS for MySQL database as the event target, the value of the Type parameter in the metadata is `acs.rds.mysql` and the Endpoint parameter is the configured URL in the `acs:rds:${region}:${uid}:dbinstance/${dbinstanceid}` format. The following table describes the resourceKey field in the ParamList parameter.
    
    **resourceKey**
    
    **Required**
    
    **form**
    
    **value**
    
    **template**
    
    InstanceId
    
    Yes
    
    CONSTANT
    
    The instance ID.
    
    None
    
    DBName
    
    Yes
    
    CONSTANT
    
    The database name.
    
    None
    
    AccountName
    
    Yes
    
    CONSTANT
    
    The database account.
    
    None
    
    AccountPassword
    
    Yes
    
    CONSTANT
    
    The database password.
    
    None
    
    ExecuteSQL
    
    Yes
    
    -   ORIGINAL
        
    -   CONSTANT
        
    -   JSONPATH
        
    -   TEMPLATE
        
    
    The custom SQL statement.
    
    If you set form to TEMPLATE, configure the template here.
    
    VpcId
    
    Yes
    
    CONSTANT
    
    The VPC ID.
    
    None
    
    VSwitchIds
    
    Yes
    
    CONSTANT
    
    The virtual switch ID.
    
    None
    
    SecurityGroupId
    
    Yes
    
    CONSTANT
    
    The security group ID.
    
    None
    
    The following is a **JSONPath** example:
    
    ```
    {
        "Id":"BRTt1sNe3IvdvejN07k5Sb****",
        "Type":"acs.rds.mysql",
        "Endpoint":"acs:rds:cn-zhangjiakou:164901546557****:dbinstance/${dbinstanceid}",
        "ConcurrentConfig":{
            "Concurrency":10
        },
        "ParamList":[
            {
                "Value":"rm-8vban2a66q93o****",
                "ResourceKey":"InstanceId",
                "Form":"CONSTANT"
            },
            {
                "Value":"db-test",
                "ResourceKey":"DBName",
                "Form":"CONSTANT"
            },
            {
                "Value":"db_name",
                "ResourceKey":"AccountName",
                "Form":"CONSTANT"
            },
            {
                "Value":"Aliyun****",
                "ResourceKey":"AccountPassword",
                "Form":"CONSTANT"
            },
            {
                "Value":"{\n    \"tableName\": \"customer\",\n    \"column1\": \"$.data.tableName\",\n    \"column1_value\": \"$.data.id\"\n}",
                "Template":"INSERT INTO ${tableName} \n (${column1}) VALUES('${column1_value}')",
                "ResourceKey":"ExecuteSQL",
                "Form":"TEMPLATE"
            },
            {
                "Value":"vpc-8vbeokru8z8erie8e****",
                "ResourceKey":"VpcId",
                "Form":"CONSTANT"
            },
            {
                "Value":"vsw-8vb9alm00nf29ijxt****",
                "ResourceKey":"VSwitchIds",
                "Form":"CONSTANT"
            },
            {
                "Value":"sg-8vbb59f5vq1ydiwr****",
                "ResourceKey":"SecurityGroupId",
                "Form":"CONSTANT"
            }
        ]
    }
    ```
    
-   If you select a self-managed MySQL database as the event target, the value of the Type parameter in the metadata is `mysql` and the Endpoint parameter is configured in the `Database address ${ConnectionStringAndPort}` format. The following table describes the resourceKey field in the ParamList parameter.
    
    **resourceKey**
    
    **Required**
    
    **form**
    
    **value**
    
    **template**
    
    ConnectionStringAndPort
    
    Yes
    
    CONSTANT
    
    The database address.
    
    None
    
    DBName
    
    Yes
    
    CONSTANT
    
    The database name.
    
    None
    
    AccountName
    
    Yes
    
    CONSTANT
    
    The database account.
    
    None
    
    AccountPassword
    
    Yes
    
    CONSTANT
    
    The database password.
    
    None
    
    ExecuteSQL
    
    Yes
    
    -   ORIGINAL
        
    -   CONSTANT
        
    -   JSONPATH
        
    -   TEMPLATE
        
    
    The custom SQL statement.
    
    None
    
    Network
    
    Yes
    
    CONSTANT
    
    The network type. Valid values:
    
    -   PublicNetwork: Internet.
        
    -   PrivateNetwork: VPC network. If you select this option, you must configure VPC, vSwitch, and SecurityGroup information.
        
    
    None
    
    VpcId
    
    No. This parameter is required only if you set Network to PrivateNetwork.
    
    CONSTANT
    
    The VPC ID.
    
    None
    
    VSwitchIds
    
    No. This parameter is required only if you set Network to PrivateNetwork.
    
    CONSTANT
    
    The virtual switch ID.
    
    None
    
    SecurityGroupId
    
    No. This parameter is required only if you set Network to PrivateNetwork.
    
    CONSTANT
    
    The security group ID.
    
    None
    
    Example 1: **Network configuration** is **Internet**
    
    ```
    {
        "Id":"HmfVOvdG4k1NK9qJiqrxtv****",
        "Type":"mysql",
        "Endpoint":"192.168.XX.XX:3306",
        "ConcurrentConfig":{
            "Concurrency":10
        },
        "ParamList":[
            {
                "Value":"192.168.XX.XX:3306",
                "ResourceKey":"ConnectionStringAndPort",
                "Form":"CONSTANT"
            },
            {
                "Value":"db-test",
                "ResourceKey":"DBName",
                "Form":"CONSTANT"
            },
            {
                "Value":"dbTest",
                "ResourceKey":"AccountName",
                "Form":"CONSTANT"
            },
            {
                "Value":"Mydb****",
                "ResourceKey":"AccountPassword",
                "Form":"CONSTANT"
            },
            {
                "Value":"{\n    \"tableName\": \"user\",\n    \"column1\": \"$.data.tableName\",\n    \"column1_value\": \"$.data.id\"\n}",
                "Template":"INSERT INTO ${tableName} \n (${column1}) VALUES('${column1_value}')",
                "ResourceKey":"ExecuteSQL",
                "Form":"TEMPLATE"
            }
        ]
    }
    ```
    
    Example 2: **Network configuration** is **virtual private cloud (VPC)**
    
    ```
    {
        "Id":"HmfVOvdG4k1NK9qJiqrxtv****",
        "Type":"mysql",
        "Endpoint":"192.168.XX.XX:3306",
        "ConcurrentConfig":{
            "Concurrency":10
        },
        "ParamList":[
            {
                "Value":"vpc-8vbeokru8z8erie8e****",
                "ResourceKey":"VpcId",
                "Form":"CONSTANT"
            },
            {
                "Value":"vsw-8vbo9jk84z0obm24f****",
                "ResourceKey":"VSwitchIds",
                "Form":"CONSTANT"
            },
            {
                "Value":"192.168.XX.XX:3306",
                "ResourceKey":"ConnectionStringAndPort",
                "Form":"CONSTANT"
            },
            {
                "Value":"my-db",
                "ResourceKey":"DBName",
                "Form":"CONSTANT"
            },
            {
                "Value":"dmsTest",
                "ResourceKey":"AccountName",
                "Form":"TEMPLATE"
            },
            {
                "Value":"Mydb****",
                "ResourceKey":"AccountPassword",
                "Form":"CONSTANT"
            },
            {
                "Value":"{\n    \"tableName\": \"user\",\n    \"column1\": \"$.data.tableName\",\n    \"column1_value\": \"$.data.id\"\n}",
                "Template": "INSERT INTO ${tableName} \n (${column1}) VALUES('${column1_value}')",
                "ResourceKey":"ExecuteSQL",
                "Form":"TEMPLATE"
            }
        ]
    }
    ```
    

## EventBridge

If you select EventBridge as the event target, the Type parameter in the metadata has a value of `acs.eventbridge`. The Endpoint parameter follows the `acs:eventbridge:${region}:${AccountId}:eventbus/${EventBusName}` format. The resourceKey field in the ParamList parameter is described in the following table.

**resourceKey**

**Required**

**form**

**value**

**template**

RegionId

Yes

CONSTANT

The ID of the destination region.

None

AccountType

Yes

CONSTANT

The account type. Valid values:

-   AnotherAccount: Another Alibaba Cloud account.
    
-   SameAccount: The current Alibaba Cloud account.
    

None

AccountId

No. By default, the current account is used.

CONSTANT

The ID of the destination account. If AccountType is SameAccount, you do not need to specify this parameter.

None

EventBusName

Yes

CONSTANT

The name of the destination bus.

None

RAMRoleName

No. This parameter is required for cross-account delivery.

CONSTANT

The name of the granted role. For more information, see [Route events to EventBridge](/help/en/eventbridge/user-guide/route-events-to-eventbridge#task-2234742). If AccountType is SameAccount, you do not need to specify this parameter.

None

Body

Yes

ORIGINAL, which indicates that the complete event is delivered.

None.

None

The following are **JSONPath** examples:

Example 1: Write to the event bus of the current account

```
{
    "Id":"KD20k9rpqDRXPq0SXXlqeT****",
    "Type":"acs.eventbridge",
    "Endpoint":"acs:eventbridge:cn-hangzhou:xxxxx:eventbus/xxxxx",
    "ParamList":[
        {
            "Value":"cn-hangzhou",
            "ResourceKey":"RegionId",
            "Form":"CONSTANT"
        },
        {
            "Value":"SameAccount",
            "ResourceKey":"AccountType",
            "Form":"CONSTANT"
        },
        {
            "Value":"xxxxx",
            "ResourceKey":"EventBusName",
            "Form":"CONSTANT"
        },
        {
            "ResourceKey":"Body",
            "Form":"ORIGINAL"
        }
    ]
}
```

Example 2: Write to the event bus of another account

```
{
    "Id":"KD20k9rpqDRXPq0SXXlqeT****",
    "Type":"acs.eventbridge",
    "Endpoint":"acs:eventbridge:cn-hangzhou:xxxxx:eventbus/xxxxx",
    "ParamList":[
        {
            "Value":"cn-hangzhou",
            "ResourceKey":"RegionId",
            "Form":"CONSTANT"
        },
        {
            "Value":"AnotherAccount",
            "ResourceKey":"AccountType",
            "Form":"CONSTANT"
        },
        {
            "Value":"xxxxx",
            "ResourceKey":"AccountId",
            "Form":"CONSTANT"
        },
        {
            "Value":"xxxxx",
            "ResourceKey":"EventBusName",
            "Form":"CONSTANT"
        },
        {
            "Value":"xxxxx",
            "ResourceKey":"RAMRoleName",
            "Form":"CONSTANT"
        },
        {
            "ResourceKey":"Body",
            "Form":"ORIGINAL"
        }
    ]
}
```

## **API Trigger**

If you select an API destination as the event target, the value of the Type parameter in the metadata is `acs.api.destination` and the Endpoint parameter is in the `acs:api-destination:${region}:${AccountId}:name/${APIName}` format. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

Name

Yes

CONSTANT

The name of the API destination.

None

HeaderParameters

No

TEMPLATE

The request header parameters.

Configure the template here.

BodyParameters

No

TEMPLATE

The request body parameters.

Configure the template here.

QueryStringParameters

No

TEMPLATE

The request path parameters.

Configure the template here.

The following is a **JSONPath** example:

```
{
    "id":"gwrxsJKAnLxSEo4GHhV69q****",
    "type":"acs.api.destination",
    "endpoint":"acs:api-destination:cn-hangzhou:11860954742****:name/api-key-test",
    "pushSelector":"PARAM_TRANSFORMER",
    "errorsTolerance":"ALL",
    "pushRetryStrategy":"BACKOFF_RETRY",
    "paramList":[
        {
            "resourceKey":"Name",
            "form":"CONSTANT",
            "value":"api-key-test"
        },
        {
            "resourceKey":"HeaderParameters",
            "form":"TEMPLATE",
            "value":"{\"headerKey1\":\"Content-Type\",\"headerValue1\":\"multipart/form-data\",\"headerKey2\":\"name\",\"headerValue2\":\"$.data.name\",\"headerKey3\":\"$.data.number\",\"headerValue3\":\"name\"}",
            "template":"{\"${headerKey1}\":\"${headerValue1}\",\"${headerKey2}\":\"${headerValue2}\",\"${headerKey3}\":\"${headerValue3}\"}"
        },
        {
            "resourceKey":"BodyParameters",
            "form":"TEMPLATE",
            "value":"{\"bodyKey1\":\"name\",\"bodyValue1\":\"$.data.name\"}",
            "template":"{\"${bodyKey1}\":\"${bodyValue1}\"}"
        },
        {
            "resourceKey":"QueryStringParameters",
            "form":"TEMPLATE",
            "value":"{\"queryKey1\":\"name\",\"queryValue1\":\"$.data.name\",\"queryKey2\":\"$.data.name\",\"queryValue2\":\"name\"}",
            "template":"{\"${queryKey1}\":\"${queryValue1}\",\"${queryKey2}\":\"${queryValue2}\"}"
        }
    ]
}
```

## **CloudFlow**

If you select CloudFlow as the event target, the value of the Type parameter in the metadata is `acs.fnf` and the Endpoint parameter is in the `acs:fnf:${region}:${AccountId}:flow/${flow}` format. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

FlowName

Yes

CONSTANT

The flow name.

None

ExecutionName

No

-   JSONPATH
    
-   CONSTANT
    
-   TEMPLATE
    

The execution name.

The format for event transformation. Four types are available:

-   ORIGINAL: Complete event. You do not need to define value and template. EventBridge routes the complete structure of the original CloudEvents event to the event target without transformation. For more information, see [Complete event](/help/en/eventbridge/user-guide/event-transformation#section-0xq-w7m-vxe).
    
-   JSONPATH: Partial event. You do not need to define template. You only need to define value. EventBridge extracts parameters from the CloudEvents event using JSONPath and routes the specified event content to the event target. For more information, see [Partial event](/help/en/eventbridge/user-guide/event-transformation#section-0dh-85n-u88).
    
    The following is a sample value.
    
    ```
    $.data.name
    ```
    
-   CONSTANT: Constant. You do not need to define template. You only need to define value. Regardless of the event content, EventBridge routes only the constant defined in value to the event target. For more information, see [Constant](/help/en/eventbridge/user-guide/event-transformation#section-dw4-tmt-4o1).
    
    The following is a sample value.
    
    ```
    "test1"
    ```
    
-   TEMPLATE: Template. You must define value and template. EventBridge extracts parameters from the CloudEvents event using **JSONPath**, stores the parameter values in value, and then routes them to the event target in the format defined by template. For more information, see [Template](/help/en/eventbridge/user-guide/event-transformation#section-qp6-pcr-r8u).
    
    The following is a sample value.
    
    ```
    {
        "name":"$.data.name",
        "constant":"Please deal with it timely."
    }
    ```
    
    An example value for template is as follows.
    
    ```
    The instance is broken, which name is ${name}, ${constant}
    ```
    

Input

No

JSONPATH

The input information for the execution.

See the TEMPLATE for ExecutionName.

RoleName

Yes

CONSTANT

The role configuration.

None

The following is a **JSONPath** example:

```
{
    "id":"KLUGLVJeuWDw1bIJ6lgURl****",
    "type":"acs.fnf",
    "endpoint":"acs:fnf:cn-hangzhou:118609547428****:flow/${flow}",
    "pushSelector":"PARAM_TRANSFORMER",
    "errorsTolerance":"ALL",
    "pushRetryStrategy":"BACKOFF_RETRY",
    "paramList":[
        {
            "value":"serverless",
            "resourceKey":"FlowName",
            "form":"CONSTANT"
        },
        {
            "value":"$.data",
            "resourceKey":"ExecutionName",
            "form":"JSONPATH"
        },
        {
            "value":"$.data",
            "resourceKey":"Input",
            "form":"JSONPATH"
        },
        {
            "value":"AliyunEventBridgeFNF-FZwEeE****",
            "resourceKey":"RoleName",
            "form":"CONSTANT"
        }
    ]
}
```

## **Container Service for Kubernetes**

If you select Container Service for Kubernetes as the event target, the value of the Type parameter in the metadata is `acs.k8s` and the Endpoint parameter value is `kubernetes`. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

KubeConfig

Yes

CONSTANT

The cluster configuration file.

None

YamlContent

Yes

CONSTANT

The YAML configuration.

The format for event transformation. Four types are available:

-   ORIGINAL: Complete event. You do not need to define value and template. EventBridge routes the complete structure of the original CloudEvents event to the event target without transformation. For more information, see [Complete event](/help/en/eventbridge/user-guide/event-transformation#section-0xq-w7m-vxe).
    
-   JSONPATH: Partial event. You do not need to define template. You only need to define value. EventBridge extracts parameters from the CloudEvents event using JSONPath and routes the specified event content to the event target. For more information, see [Partial event](/help/en/eventbridge/user-guide/event-transformation#section-0dh-85n-u88).
    
    The following is a sample value.
    
    ```
    $.data.name
    ```
    
-   CONSTANT: Constant. You do not need to define template. You only need to define value. Regardless of the event content, EventBridge routes only the constant defined in value to the event target. For more information, see [Constant](/help/en/eventbridge/user-guide/event-transformation#section-dw4-tmt-4o1).
    
    The following is a sample value.
    
    ```
    "test1"
    ```
    
-   TEMPLATE: Template. You must define value and template. EventBridge extracts parameters from the CloudEvents event using **JSONPath**, stores the parameter values in value, and then routes them to the event target in the format defined by template. For more information, see [Template](/help/en/eventbridge/user-guide/event-transformation#section-qp6-pcr-r8u).
    
    The following is a sample value.
    
    ```
    {
        "name":"$.data.name",
        "constant":"Please deal with it timely."
    }
    ```
    
    The following is a sample template.
    
    ```
    The instance is broken, which name is ${name}, ${constant}
    ```
    

Network

Yes

CONSTANT

Network access.

None

QPSLimit

Yes

CONSTANT

The rate limiting configuration.

None

The following is a **JSONPath** example:

```
{
    "id":"Grdzk1cR4DNjmHa0oPJp8j****",
    "type":"acs.k8s",
    "endpoint":"kubernetes",
    "pushSelector":"PARAM_TRANSFORMER",
    "errorsTolerance":"ALL",
    "pushRetryStrategy":"BACKOFF_RETRY",
    "paramList":[
        {
            "form":"CONSTANT",
            "value":"PublicNetwork",
            "resourceKey":"Network"
        },
        {
            "form":"CONSTANT",
            "value":5,
            "resourceKey":"QPSLimit"
        },
        {
            "form":"CONSTANT",
            "value":"test1",
            "resourceKey":"KubeConfig"
        },
        {
            "form":"CONSTANT",
            "resourceKey":"YamlContent",
            "value":"test2"
        }
    ]
}
```

## **Serverless App Engine**

If you select Serverless App Engine as the event target, the value of the Type parameter in the metadata is `acs.sae` and the Endpoint parameter is `http://sae.cn-huhehaote.aliyuncs.com/pop/v1/sam/job/execJob`. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

RegionId

Yes

CONSTANT

The region ID.

The format for event transformation. Four types are available:

-   ORIGINAL: Complete event. You do not need to define value and template. EventBridge routes the complete structure of the original CloudEvents event to the event target without transformation. For more information, see [Complete event](/help/en/eventbridge/user-guide/event-transformation#section-0xq-w7m-vxe).
    
-   JSONPATH: Partial event. You do not need to define template. You only need to define value. EventBridge extracts parameters from the CloudEvents event using JSONPath and routes the specified event content to the event target. For more information, see [Partial event](/help/en/eventbridge/user-guide/event-transformation#section-0dh-85n-u88).
    
    The following is a sample value.
    
    ```
    $.data.name
    ```
    
-   CONSTANT: Constant. You do not need to define template. You only need to define value. Regardless of the event content, EventBridge routes only the constant defined in value to the event target. For more information, see [Constant](/help/en/eventbridge/user-guide/event-transformation#section-dw4-tmt-4o1).
    
    The following is a sample value.
    
    ```
    "test1"
    ```
    
-   TEMPLATE: Template. You must define value and template. EventBridge extracts parameters from the CloudEvents event using **JSONPath**, stores the parameter values in value, and then routes them to the event target in the format defined by template. For more information, see [Template](/help/en/eventbridge/user-guide/event-transformation#section-qp6-pcr-r8u).
    
    The following is a sample value.
    
    ```
    {
        "name":"$.data.name",
        "constant":"Please deal with it timely."
    }
    ```
    
    The following is a sample template.
    
    ```
    The instance is broken, which name is ${name}, ${constant}
    ```
    

AppId

Yes

CONSTANT

The ID of the job template.

See the template for RegionId.

EventId

Yes

JSONPATH

The event ID.

See the template for RegionId.

Parameters

Yes

CONSTANT

The CommandArgs and Envs parameters of execjob.

See the template for RegionId.

The following is a **JSONPath** example:

```
{
    "id":"xp0dEW4mVbS5tDQzIBiZrY****",
    "type":"acs.sae",
    "endpoint":"http://sae.cn-huhehaote.aliyuncs.com/pop/v1/sam/job/execJob",
    "pushSelector":"PARAM_TRANSFORMER",
    "errorsTolerance":"ALL",
    "pushRetryStrategy":"BACKOFF_RETRY",
    "paramList":[
        {
            "value":"cn-huhehaote",
            "resourceKey":"RegionId",
            "form":"CONSTANT"
        },
        {
            "value":"3F2504E0-4F89-11D3-9A0C-0305E82C****",
            "resourceKey":"AppId",
            "form":"CONSTANT"
        },
        {
            "value":"$.id",
            "resourceKey":"EventId",
            "form":"JSONPATH"
        },
        {
            "value":"[\"a\",\"b\"]",
            "resourceKey":"Parameters",
            "form":"CONSTANT"
        }
    ]
}
```

## **EventBridge: Event Analysis**

If you select event analysis as the event target, the value of the Type parameter in the metadata is `acs.eventbridge.olap` and the Endpoint parameter is in the `${SchemaURI}` format. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

UseSchema

Yes

CONSTANT

The binding and mapping method. Valid values:

-   FromEvent: Use the schema specified in the dataschema field of an event.
    
-   FromRule: Use the schema specified in the rule.
    

None

SchemaGroup

Yes

CONSTANT

The group name.

None

SchemaID

Yes

CONSTANT

The schema ID.

None

SchemaVersion

Yes

CONSTANT

The schema version.

None

The following is a **JSONPath** example:

```
{
    "id":"DLuVyP3JcAAb3q2CibqZI6****",
    "type":"acs.eventbridge.olap",
    "endpoint":"${SchemaURI}",
    "pushSelector":"PARAM_TRANSFORMER",
    "errorsTolerance":"ALL",
    "pushRetryStrategy":"BACKOFF_RETRY",
    "paramList":[
        {
            "value":"FromRule",
            "resourceKey":"UseSchema",
            "form":"CONSTANT"
        },
        {
            "value":"DEFAULT_SCHEMA_GROUP",
            "resourceKey":"SchemaGroup",
            "form":"CONSTANT"
        },
        {
            "value":"test",
            "resourceKey":"SchemaID",
            "form":"CONSTANT"
        },
        {
            "value":"1",
            "resourceKey":"SchemaVersion",
            "form":"CONSTANT"
        }
    ]
}
```

## **DataHub**

If you select DataHub as the event target, the value of the Type parameter in the metadata is `acs.datahub` and the Endpoint parameter is in the `acs:datahub:${region}:${AccountId}:project/${project}/topic/${topic}` format. The following table describes the resourceKey field in the ParamList parameter.

**resourceKey**

**Required**

**form**

**value**

**template**

Project

Yes

CONSTANT

The project name.

None

Topic

Yes

CONSTANT

The topic name.

None

TopicType

Yes

CONSTANT

The data type of the topic. Valid values:

-   TUPLE: Supports records similar to database records. Each record contains multiple columns.
    
-   BLOB: Supports writing only one block of binary data.
    

None

TopicSchema

Required only if TopicType is set to TUPLE. Not required if TopicType is set to BLOB.

Template

The topic schema.

TEMPLATE. Sample value:

```
{
    "resourceKey":"TopicSchema",
    "value":"{\"k1-0\":\"a\",\"k2-1\":\"$.data.name\",\"k3-2\":\"v\"}",
    "form":"TEMPLATE",
    "template":"{\"k1\":\"${k1-0}\",\"k2\":\"${k2-1}\",\"k3\":\"${k3-2}\"}"
}
```

In the template, ki (where i = 1, 2, 3, ...) represents the ith field of the topic. The corresponding value is defined in the value parameter and can be a partial event or constant.

RoleName

Yes

CONSTANT

The role configuration.

None

The following is a **JSONPath** example:

```
{
    "id":"ZXoGuhjAT5UfqngBPapXro****",
    "type":"acs.datahub",
    "endpoint":"acs:datahub:cn-hangzhou:175299981560****:project/demo_project/topic/demo_topic",
    "errorsTolerance":"ALL",
    "pushRetryStrategy":"BACKOFF_RETRY",
    "paramList":[
        {
            "Form":"CONSTANT",
            "Value":"demo_project",
            "ResourceKey":"Project"
        },
        {
            "Form":"CONSTANT",
            "Value":"demo_topic",
            "ResourceKey":"Topic"
        },
        {
            "Form":"CONSTANT",
            "Value":"TUPLE",
            "ResourceKey":"TopicType"
        },
        {
            "Form":"TEMPLATE",
            "Value":"{\"k1-0\":\"1\",\"k2-1\":\"2\",\"k3-2\":\"3\"}",
            "Template":"{\"k1\":\"${k1-0}\",\"k2\":\"${k2-1}\",\"k3\":\"${k3-2}\"}",
            "ResourceKey":"TopicSchema"
        },
        {
            "Form":"CONSTANT",
            "Value":"AliyunEventBridgeDataHubRole-2HwuVf****",
            "ResourceKey":"RoleName"
        }
    ]
}
```
