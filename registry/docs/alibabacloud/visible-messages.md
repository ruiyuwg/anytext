When a consumer receives a message from a queue, the message becomes temporarily invisible to other consumers. This prevents multiple consumers from processing the same message simultaneously. The duration of this invisibility is controlled by the visibility timeout period.

## Visible and invisible states

A message in a Simple Message Queue (SMQ, formerly MNS) queue has two states:

-   **Visible**: The message is available in the queue. Any consumer can receive and process it. A consumer is a service or application that receives and processes messages.
    
-   **Invisible**: A consumer has received the message. Other consumers cannot see or receive it until the visibility timeout period expires.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6530913771/CAEQLhiBgIDg9qXylRkiIGE2ZmE1MWIyMDJmNDRmN2U5M2RhNDJhN2NjYTQ5MjY34678288_20240913165815.179.svg)![Visible and invisible states](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8970256471/CAEQLhiBgIDg9qXylRkiIGE2ZmE1MWIyMDJmNDRmN2U5M2RhNDJhN2NjYTQ5MjY34678288_20240913165815.179.svg)

### Message lifecycle

1.  A producer sends a message to the queue. The message is **visible**.
    
2.  A consumer receives the message. The message becomes **invisible** and the visibility timeout period starts.
    
3.  The consumer processes the message and deletes it from the queue.
    
4.  If the consumer does not delete the message before the visibility timeout period expires, the message becomes **visible** again and can be received by the same or a different consumer.
    

## Visibility timeout period

The visibility timeout period is the duration between when a consumer receives a message and when that message becomes visible to other consumers again.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6530913771/CAEQLhiBgMDylPzdlRkiIDAyYzA1Y2E5NTkyYjQ2ZWM5N2E3N2RjMjcyZmM4ZmJj4678288_20240913172724.300.svg)![Visibility timeout period](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8970256471/CAEQLhiBgMDylPzdlRkiIDAyYzA1Y2E5NTkyYjQ2ZWM5N2E3N2RjMjcyZmM4ZmJj4678288_20240913172724.300.svg)

**Parameter**

**Value**

**Valid values**

1 to 143,200 seconds (12 hours)

**Default**

30 seconds

### Failure recovery

If a consumer fails to process and delete a message -- due to application errors, crashes, or connection failures -- the message automatically becomes visible again after the visibility timeout period expires. Another consumer can then pick it up for reprocessing.

**Note**

A visibility timeout that is too high delays failure recovery. For example, with a 12-hour timeout, other consumers must wait the full 12 hours before they can reprocess the message, even if the original consumer crashed immediately after receiving it.

## Set the visibility timeout period

### Console

Set the **Visibility Timeout Period** when you create or edit a queue. For more information, see [Create a queue](/help/en/mns/user-guide/manage-queues-in-the-console#section-2yi-zpx-zly).

### API

Call the [ChangeMessageVisibility](/help/en/mns/developer-reference/changemessagevisibility) operation to adjust the visibility timeout period of a message that has already been received.

## Related topics

-   [Create a queue](/help/en/mns/user-guide/manage-queues-in-the-console)
    
-   [ChangeMessageVisibility](/help/en/mns/developer-reference/changemessagevisibility)
