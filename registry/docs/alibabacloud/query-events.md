EventBridge **Event Tracking** lets you look up events by ID or filter by time range. You can then inspect the event trace to view event information and delivery details.

## Prerequisites

Before you begin, make sure that you have:

-   An EventBridge event bus with events published to it
    
-   Access to the [EventBridge console](https://eventbridge.console.alibabacloud.com/)
    

## Navigate to Event Tracking

Both query methods start from the same page. Complete these steps first:

1.  Log on to the [EventBridge console](https://eventbridge.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Event Buses**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Event Buses** page, click the name of the event bus.
    
5.  In the left-side navigation pane, click **Event Tracking**.
    

## Query by event ID

Use this method when you already have the event ID and want to go straight to its processing status.

1.  On the **Event Tracking** page, click the **Query By Event ID** tab.
    
2.  Enter the event ID and click **Query**.
    

The matching event appears in the result list. See [View event trace and details](#section-ff987e93) to inspect the event.

## Query by time range

Use this method to find events within a specific time window. You can narrow results by source, type, or rule.

1.  On the **Event Tracking** page, click the **Query By Time Range** tab.
    
2.  Set the query parameters and click **Query**.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Time Range**
    
    Yes
    
    Select a preset range, or specify a custom start time and end time from the drop-down list
    
    **Event Source**
    
    No
    
    Filter by event source
    
    **Event Type**
    
    No
    
    Filter by event type
    
    **Rule Name**
    
    No
    
    Filter by event rule
    

Matching events appear in the result list. See [View event trace and details](#section-ff987e93) to inspect an event.

## View event trace and details

The result list shows all matching events. For each event, the **Operations** column provides two actions:

### Event Trace

Click **Event Trace** to see how EventBridge processed the event. The trace is split into two sections:

-   **Event Reception**: When and how the event was ingested.
    
-   **Event Delivery**: Delivery details for each target.
    

**Note** To save the trace data, click **Export Event Trace** in the upper-right corner of the Event Trace message.

### Event Detail

Click **Event Detail** to view the full event payload in JSON format. The following sample shows the parameters of an event:

```
{
    "datacontenttype": "application/json;charset=utf-8",
    "aliyunaccountid": "123456789098****",
    "data": {
        "number": 100,
        "name": "Eventbridge"
    },
    "subject": "my:subject",
    "source": "aliyun.ui",
    "type": "ui:Created:PostObject",
    "dataschema": "http://example.com/item.json",
    "aliyunpublishtime": "2021-03-08T08:34:01.462Z",
    "specversion": "1.0",
    "aliyuneventbusname": "mybus",
    "id": "1ad8djaf-j6be-i648-f6i1-3ijh6bbb****",
    "aliyunregionid": "cn-hangzhou",
    "aliyunpublishaddr": "42.120.XX.XX"
}
```

The following table describes key fields in the event payload:

**Field**

**Description**

`id`

Unique event identifier

`source`

Event source that published the event

`type`

Event type identifier

`specversion`

Specification version

`data`

Event-specific payload data

`aliyunaccountid`

Alibaba Cloud account ID (partially masked)

`aliyuneventbusname`

Name of the event bus that received the event

`aliyunpublishtime`

Timestamp when the event was published (UTC)

`aliyunregionid`

Region where the event was processed

For more information about the parameters, see [Event overview](/help/en/eventbridge/user-guide/event-overview#concept-1938024).
