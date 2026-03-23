EventBridge event rules filter events from a custom event source and route matching events to ApsaraMQ for RocketMQ as messages. Use event transformation to control the message body, custom properties, message key, and message tag delivered to the target topic.

This topic walks through the full workflow: adding a custom event source, creating an event rule with ApsaraMQ for RocketMQ as the target, publishing a test event, and verifying delivery.

## Prerequisites

Before you begin, make sure that you have:

-   [Activated EventBridge and granted permissions to a RAM user](/help/en/eventbridge/getting-started/activate-eventbridge-and-grant-permissions-to-a-ram-user#task-1947668)
    
-   [Activated ApsaraMQ for RocketMQ and granted the required permissions to a RAM user](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/getting-started/activate-and-grant-permissions-on-apsaramq-for-rocketmq#task-2446141)
    
-   [Created an ApsaraMQ for RocketMQ instance, topic, and group](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/getting-started/create-resources-1#section-0mv-om8-3ov)
    

## Step 1: Add a custom event source

1.  Log on to the [EventBridge console](https://eventbridge.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Event Buses**.
    
3.  In the top navigation bar, select a region. Click the name of the custom event bus that you want to use.
    
4.  In the left-side navigation pane, click **Event Sources**, then click **Add Event Source**.
    
5.  In the **Add Custom Event Source** panel, set **Name** and **Description**, select **Custom Application** from the **Event Provider** drop-down list, and click **OK**.
    

## Step 2: Create an event rule

**Important**

Event targets must reside in the same region as the event rule.

1.  Log on to the [EventBridge console](https://eventbridge.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Event Buses**.
    
3.  In the top navigation bar, select a region. Click the name of the event bus that you want to use.
    
4.  In the left-side navigation pane, click **Event Rules**, then click **Create Rule**.
    
5.  In the **Create Rule** panel, complete the following steps:
    
    1.  **Configure Basic Info**: Enter a rule name and description, then click **Next Step**.
        
    2.  **Configure Event Pattern**: Set **Event Source Type** to **Custom Event Source**, select the event source created in Step 1 from the **Event Source** drop-down list, specify an event pattern in the **Pattern Content** code editor, and click **Next Step**. For supported filter types (exact match, prefix, suffix, and more), see [Event patterns](/help/en/eventbridge/user-guide/event-patterns#task-1938355).
        
    3.  **Configure Targets**: Select **ApsaraMQ for RocketMQ** as the service type and configure the target parameters described in the following section, then click **Create**.
        

**Note**

Each event rule supports up to five event targets.

## ApsaraMQ for RocketMQ target parameters

The following table lists the parameters available when you select **ApsaraMQ for RocketMQ** as the event target. Each parameter uses a [transformation method](#section-f9d2ee99) to extract or construct values from the incoming event.

**Parameter**

**Description**

**Service Type**

Select **ApsaraMQ for RocketMQ**.

**Instance ID**

Select the ID of the ApsaraMQ for RocketMQ instance.

**Topic**

Select the topic to receive events.

**Message Body**

The content extracted from the event and sent as the message body. Specify with a transformation method.

**Custom Property**

Key-value pairs extracted from the event and attached as message properties. Specify with a transformation method.

**Message Index**

The value extracted from the event and set as the message key. Specify with a transformation method.

**Message Tag**

The value extracted from the event and set as the message tag. Specify with a transformation method.

## Event transformation methods

EventBridge transforms event data before delivering it to the target. Each target field (**Message Body**, **Custom Property**, **Message Index**, **Message Tag**) supports the following methods. For full details, see [Event transformation](/help/en/eventbridge/user-guide/event-transformation#task-1938346).

### Partial event

Extract a single value from the event using a JSONPath expression.

**Configuration:**

```
$.data.body
```

**Result** -- Given the sample event in [Verify the result](#section-qkd-nnf-tgg), this returns `"TEST"`.

### Fixed value

Deliver a static string regardless of event content.

**Configuration:**

```
Pay attention to the alert.
```

**Result** -- Every event delivers the string `Pay attention to the alert.` as-is.

### Parameters and template

Define variables from the event using JSONPath, then assemble them into a structured output.

**Step 1 -- Define variables in Parameters:**

```
{
  "type": "$.type"
}
```

**Step 2 -- Reference variables in Template:**

```
The event type is ${type}.
```

**Result** -- Given an event where `$.type` is `mq:Topic:SendMessage`, this produces:

```
The event type is mq:Topic:SendMessage.
```

### Example: Forward user properties and message keys

To forward RocketMQ user properties and the unique message key from the source event, configure **Custom Property** as follows:

**Parameters:**

```
{
  "userProperties": "$.data.userProperties",
  "msgId": "$.data.systemProperties.UNIQ_KEY"
}
```

**Template:**

```
{
  "EB_SYS_EMBED_OBJECT": "${userProperties}",
  "UNIQ_KEY": "${msgId}"
}
```

**Result** -- Given the sample event in [Verify the result](#section-qkd-nnf-tgg), where `$.data.userProperties` is `{}` and `$.data.systemProperties.UNIQ_KEY` is `AC14C305069E1B28CDFA3181CDA2****`, this produces:

```
{
  "EB_SYS_EMBED_OBJECT": "{}",
  "UNIQ_KEY": "AC14C305069E1B28CDFA3181CDA2****"
}
```

## Step 3: Publish an event

1.  Log on to the [EventBridge console](https://eventbridge.console.alibabacloud.com/). In the left-side navigation pane, click **Event Buses**.
    
2.  In the top navigation bar, select a region.
    
3.  Find the target event bus and click **Publish Event** in the **Operations** column.
    
    **Note**
    
    The EventBridge console supports publishing events to custom event buses only.
    
4.  In the **Publish Event to Custom Event Bus** panel, select a source from the **Custom Event Source** drop-down list, enter the event content in the **Event Body** code editor, and click **OK**. For details about event fields, see [Event overview](/help/en/eventbridge/user-guide/event-overview).
    

## Verify the result

Confirm that ApsaraMQ for RocketMQ received the event by querying messages in the RocketMQ console.

1.  Log on to the [ApsaraMQ for RocketMQ console](https://ons.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Instances**.
    
3.  In the top navigation bar, select the region where the instance resides (for example, **China (Hangzhou)**).
    
4.  Find the target instance and choose **More** > **Message Query** in the **Actions** column.
    
5.  On the **Message Query** page, set **Query Method** to **Query by Topic**, select the topic, set the **Time Range**, and click **Search**.
    

The following example shows a received event:

```
{
    "id": "94ebc15f-f0db-4bbe-acce-56fb72fb****",
    "source": "acs:mq",
    "specversion": "1.0",
    "type": "mq:Topic:SendMessage",
    "datacontenttype": "application/json; charset=utf-8",
    "subject": "acs:mq:cn-hangzhou:123456789098****:MQ_INST_123456789098****_BXhFHryi%TopicName",
    "time": "2021-04-08T06:01:20.766Z",
    "aliyunpublishtime": "2021-04-08T06:01:20.725Z",
    "aliyuneventbusname": "BusName",
    "data": {
        "topic": "TopicName",
        "systemProperties": {
            "MIN_OFFSET": "0",
            "TRACE_ON": "true",
            "MAX_OFFSET": "8",
            "MSG_REGION": "cn-hangzhou",
            "KEYS": "systemProperties.KEYS",
            "CONSUME_START_TIME": 1628577790396,
            "UNIQ_KEY": "AC14C305069E1B28CDFA3181CDA2****",
            "TAGS": "systemProperties.TAGS",
            "INSTANCE_ID": "MQ_INST_123456789098****_BXhFHryi"
        },
        "userProperties": {},
        "body": "TEST"
    }
}
```

## Related topics

-   [Event patterns](/help/en/eventbridge/user-guide/event-patterns)
    
-   [Event transformation](/help/en/eventbridge/user-guide/event-transformation)
    
-   [Event overview](/help/en/eventbridge/user-guide/event-overview)
