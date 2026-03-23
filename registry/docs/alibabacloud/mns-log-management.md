The log management feature of Simple Message Queue (formerly MNS) pushes message request logs to Simple Log Service (SLS). You can then use the query and analysis features of SLS to troubleshoot issues.

## **Scenarios**

Have you encountered the following issues when you send and receive messages?

-   A message is sent to a queue, but the consumer cannot receive it. Where did the message go?
    
-   Who consumed the message? How many times was it consumed?
    
-   The consumer is unavailable. When can a failed message be consumed again?
    
-   A message is published to a topic, but the endpoint does not receive it. Why is there a delay?
    

You can solve these issues using the log management feature of Simple Message Queue (formerly MNS). The methods are as follows:

-   Push logs to SLS and view the complete message trace in the console.
    
-   Use the query tool on the official website. Specify the required parameters to view the message processing logs.
    

## Billing

-   Simple Message Queue (formerly MNS) does not charge extra fees for the log management feature.
    
-   Simple Message Queue (formerly MNS) pushes logs to SLS. SLS charges you based on factors such as storage space, traffic, and the number of requests. For more information, see [Billing overview](/help/en/sls/billing-overview).
    

## **Queue log format**

Queue message operation logs are generated from operations on queue messages, such as sending, consuming, and deleting messages. Each operation log contains multiple fields. Each field has a specific meaning. The fields included in a log vary depending on the operation. The following sections describe the meaning of each field and list the fields that are included for different operations.

-   Log field descriptions
    
    Each operation log contains multiple fields. The following table describes these fields.
    
    **Field**
    
    **Description**
    
    Time
    
    The time when the operation occurred.
    
    MessageId
    
    The ID of the message that is processed in the operation.
    
    QueueName
    
    The name of the queue for which the operation is performed.
    
    AccountId
    
    The ID of the account that owns the queue.
    
    RemoteAddress
    
    The IP address of the client that initiated the operation.
    
    NextVisibleTime
    
    The next time the message becomes visible after the operation is complete.
    
    ReceiptHandleInRequest
    
    The ReceiptHandle parameter that the client passes in for the operation.
    
    ReceiptHandleInResponse
    
    The ReceiptHandle that is returned to the client after the operation is complete.
    
    ProcessTime
    
    The time it takes to process the operation.
    
    RequestId
    
    The ID of the task.
    
    Action
    
    The action, such as delete or send.
    
-   Fields for each operation
    
    The fields included in a log vary depending on the operation. The following table lists the fields for each operation.
    
    **Operation**
    
    **Time**
    
    **QueueName**
    
    **AccountId**
    
    **MessageId**
    
    **RemoteAddress**
    
    **NextVisibleTime**
    
    **ReceiptHandleInResponse**
    
    **ReceiptHandleInRequest**
    
    SendMessage/BatchSendMessage
    
    Yes
    
    Yes
    
    Yes
    
    Yes
    
    Yes.
    
    Yes.
    
    No
    
    None
    
    PeekMessage/BatchPeekMessage
    
    Yes
    
    Yes
    
    Yes
    
    Yes
    
    Yes.
    
    No
    
    No
    
    No
    
    ReceiveMessage/BatchReceiveMessage
    
    Yes.
    
    Yes
    
    Yes
    
    Yes
    
    Yes
    
    Yes
    
    Yes
    
    No
    
    ChangeMessageVisibility
    
    Yes.
    
    Yes
    
    Yes.
    
    Yes
    
    Yes
    
    Yes
    
    Yes
    
    Yes.
    
    DeleteMessage/BatchDeleteMessage
    
    Yes
    
    Yes.
    
    Yes
    
    Yes
    
    Yes
    
    Yes
    
    No
    
    Yes
    

## **Topic log format**

Topic message operation logs are generated from operations on topic messages. These operations are primarily of two types: publishing messages and pushing messages. The following sections describe the meaning of each field in a topic message operation log and list the fields that are included for different operations.

-   Log field descriptions
    
    Each operation log contains multiple fields. The following table describes these fields.
    
    **Field**
    
    **Description**
    
    Time
    
    The time when the operation occurred.
    
    MessageId
    
    The ID of the message that is processed in the operation.
    
    TopicName
    
    The name of the topic for which the operation is performed.
    
    SubscriptionName
    
    The name of the subscription for which the operation is performed.
    
    AccountId
    
    The ID of the account that owns the topic.
    
    RemoteAddress
    
    The IP address of the client that initiated the operation.
    
    NotifyStatus
    
    The HTTP status code or error information that is returned by the user when Simple Message Queue (formerly MNS) pushes a message.
    
    ProcessTime
    
    The time it takes to process the operation.
    
    MessageTag
    
    The message tag.
    
    RequestId
    
    The ID of the task.
    
    Action
    
    The action, such as delete or send.
    
-   Fields for each operation
    
    The fields included in a log vary depending on the operation. The following table lists the fields for each operation.
    
    **Operation**
    
    **Time**
    
    **MessageId**
    
    **TopicName**
    
    **SubscriptionName**
    
    **AccountId**
    
    **RemoteAddress**
    
    **NotifyStatus**
    
    **Subscription Name**
    
    PublishMessage
    
    Yes.
    
    Yes
    
    Yes
    
    No
    
    Yes
    
    Yes
    
    None
    
    No
    
    Notify
    
    Yes
    
    Yes
    
    Yes
    
    Yes
    
    Yes
    
    No
    
    Yes.
    
    Yes
    
-   NotifyStatus
    
    NotifyStatus is a field specific to message push logs. This field helps you troubleshoot failures that occur when Simple Message Queue (formerly MNS) pushes messages to an endpoint. You can resolve issues based on the suggestions that are provided in the following table for different NotifyStatus values.
    
    **Error code**
    
    **Description**
    
    **Suggested solution**
    
    2xx
    
    The message is pushed successfully.
    
    None.
    
    Other HTTP status codes
    
    The endpoint returns a non-2xx status code when the message is pushed.
    
    Check the processing logic at the endpoint.
    
    InvalidHost
    
    The endpoint specified in the subscription is invalid.
    
    Confirm that the endpoint in the subscription is valid. You can use curl or telnet to check.
    
    ConnectTimeout
    
    The connection to the endpoint specified in the subscription timed out.
    
    Confirm that the endpoint in the subscription is accessible. You can use curl or telnet to check.
    
    ConnectFailure
    
    Failed to connect to the endpoint specified in the subscription.
    
    Confirm that the endpoint in the subscription is accessible. You can use curl or telnet to check.
    
    UnknownError
    
    An unknown error occurred.
    
    Contact Simple Message Queue (formerly MNS) technical support.
    

## **Log management operations**

Before you use the log feature, complete the following prerequisites:

-   Create a queue and a topic in Simple Message Queue (formerly MNS). For more information, see [Queue operations](/help/en/mns/user-guide/manage-queues-in-the-console) and [Topic operations](/help/en/mns/user-guide/manage-topics-in-the-console).
    

-   Create a project and a Logstore in Simple Log Service. For more information, see [Manage a project](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb) and [Create a Logstore](/help/en/sls/manage-a-logstore#section-v52-2jx-ndb).
    
    Your MNS operation logs can only be pushed to an SLS project in the same region.
    
-   Grant the AliyunMNSLoggingRole role to MNS to export logs.
    
    Click [Cloud Resource Access Authorization](https://ram.console.alibabacloud.com/?spm=5176.mns.0.0.3f9c637462ljRq#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunMNSLoggingRole%22,%20%22TemplateId%22:%20%22Logging%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fmns.console.alibabacloud.com%2F%22,%20%22Service%22:%20%22MNS%22%7D) and follow the on-screen instructions to grant the permissions.
    
    **Warning**
    
    Do not revoke the authorization or delete the RAM role. Otherwise, Simple Message Queue (formerly MNS) logs cannot be pushed to Simple Log Service.
    

### **Enable or disable the log feature**

### Enable**/disable** the queue logging feature

1.  Log on to the [SMQ console](https://mns.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Queue List**.
    
3.  In the top menu bar, select a region.
    
4.  On the **Queue List** page, find the target queue. In the **Actions** column, click the **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3355898371/p902028.png)** > **Edit**.
    
5.  In the **Edit Queue Parameters** panel, turn on or turn off the **Enable Logging** switch.
    
    On the **Queue List** page, the **Logging** column for the target queue displays **Enabled** or **Disabled**.
    

### Enable**/disable** the logging feature for a subject

1.  Log on to the [SMQ console](https://mns.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Topic List**.
    
3.  In the top menu bar, select a region.
    
4.  On the **Topic List** page, find the target topic. In the **Actions** column, click **Edit**.
    
5.  In the **Edit Topic Parameters** panel, turn on or turn off the **Enable Logging** switch.
    
    On the **Topic List** page, the **Logging** column for each topic shows ****Enabled** or **Disabled****.
    

### **Push logs to Simple Log Service**

**Procedure**

1.  Log on to the [SMQ console](https://mns.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Log Management**.
    
3.  In the top menu bar, select a region.
    
4.  On the **Log Management** page, in the **Select Target** step of the configuration wizard, select **Simple Log Service (SLS)**.
    
5.  In the **Configure Target** step of the configuration wizard, select a **Project Name** and a **Logstore Name**, and then click **Enable**.
    
    On the **Log Management** page, the configured project and Logstore are displayed.
    

### **View logs**

**Procedure**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the one you want.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  On the **Log Storage** > **Logstores** tab, click the logstore you want.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9156874471/p768903.png)
    
4.  Enter a search statement, click **Last 15 Minutes**, and then set a time range for the query. For more information, see [Quick start for search and analysis](/help/en/sls/quick-guide-to-query-and-analysis).
    

## **Log analysis examples**

#### **Query the trace of a queue message**

This example shows how to query the trace of a queue message. Enter the queue name and message ID. The format of the search statement is `$QueueName and $MessageId`, for example, `log and EED287A265726135146E6A9CADC8XXXX`.

The following figure shows the query result. The result records the lifecycle of the message from the time it is sent to the time it is received.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9911094271/p771170.png)

#### **Query the trace of a topic message**

This example shows how to query the trace of a topic message. Enter the topic name and message ID. The format of the search statement is `$TopicName and $MessageId`, for example, `logtest and 8798453B65727FC6433E6AB4F746XXXX`.

The following figure shows the query result. The result records the lifecycle of the message from the time it is sent to the time it is delivered.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9911094271/p771170.png)

#### **Query the number of sent queue messages**

This example shows how to query the number of sent queue messages. Enter the queue name and the send operation. The format of the search statement is `$QueueName and (SendMessage or BatchSendMessage)`, for example, `log and (SendMessage or BatchSendMessage)`.

The following figure shows the query result. Within the specified time range, the producer sent three messages to the log queue.![查看队列消息写入量](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1476554061/p32449.jpg)

#### **Query the number of sent topic messages**

This example shows how to query the number of sent topic messages. Enter the topic name and the publish operation. The format of the search statement is `$TopicName and PublishMessage`, for example, `logtest and PublishMessage`.

The following figure shows the query result. Within the specified time range, the producer sent three messages to the logtest topic.![查看主题消息发布量](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2476554061/p32453.jpg)

#### **Query the number of consumed queue messages**

This example shows how to query the number of consumed queue messages. Enter the queue name and the consume operation. The format of the search statement is `$QueueName and (ReceiveMessage or BatchReceiveMessage)`, for example, `log and (ReceiveMessage or BatchReceiveMessage)`.

The following figure shows the query result. Within the specified time range, 12 messages in the log queue were consumed.![查看队列消息消费量](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1476554061/p32450.jpg)

#### **Query the number of deleted queue messages**

This example shows how to query the number of deleted queue messages. Enter the queue name and the delete operation. The format of the search statement is `$QueueName and (DeleteMessage or BatchDeleteMessage)`, for example, `log and (DeleteMessage or BatchDeleteMessage)`.

The following figure shows the query result. Within the specified time range, 61 messages in the log queue were deleted.![查看队列消息删除量](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307554061/p32451.jpg)

#### **Query the number of messages processed by a client**

This example shows how to query the number of messages processed by a specific client. Enter the client IP address. The format of the search statement is `$ClientIP`, for example, `10.10.10.0`.

If you want to query the logs of a specific operation for a client, you can use a combination of keywords, for example, `$ClientIP and (SendMessage or BatchSendMessage)`.

The following figure shows the query result. Within the specified time range, the client processed 66 messages.![查看某个客户端消息处理量](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307554061/p32454.jpg)
