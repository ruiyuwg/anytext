ApsaraMQ for RocketMQ provides instances in two editions: Enterprise Platinum Edition and Standard Edition.

The following table compares the two editions to help you select the instance type that best suits your needs.

**Item**

**Enterprise Platinum Edition**

**Standard Edition**

Billing method

Subscription

Pay-as-you-go

Instance type

Dedicated instances. Each instance has exclusive use of a physical node.

Shared instances with virtual isolation.

Availability

99.99%. The cumulative downtime is no more than 4.3 minutes per month.

99.95%. The cumulative downtime is no more than 21.5 minutes per month.

Expert service

-   Product and R&D experts provide online support to help you promptly troubleshoot online issues.
    
-   Support is provided for events such as sales promotions and new business launches.
    
-   Get recommendations for the architecture design, stability, parameter tuning, and best practices for ApsaraMQ for RocketMQ.
    

Not supported

Message retention period

3 days

If the storage space of your purchased instance is insufficient, ApsaraMQ for RocketMQ performs a rolling deletion of the earliest messages based on their storage time. In this case, the message storage duration may be less than 3 days.

**Note**

The storage duration for scheduled and delayed messages starts when the scheduled time or delay period ends.

For example, a producer sends a delayed message with a delay of 10 days. The message storage duration starts after the 10-day delay ends. The maximum time this message can be stored from sending to expiration is 10 + 3 = 13 days.

SQL attribute filtering

Use SQL expressions to accurately filter message attributes. This makes message subscription and processing more efficient.

For more information about SQL attribute filtering, see [Message filtering](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/developer-reference/message-filtering#concept-2047069).

Not supported

Data transmission encryption

Supports Secure Sockets Layer (SSL)/Transport Layer Security (TLS) encryption for data in transit. This feature requires a client that uses the TCP client software development kit (SDK) for Java V2.x.x.

For more information about the SDK, see [Java SDK release notes](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/developer-reference/release-notes-11#concept-2335081).

Supports SSL/TLS data encryption. To use this feature, [submit a ticket](https://smartservice.console.alibabacloud.com). This feature requires a client that uses the TCP client SDK for Java V2.x.x.

For more information about the SDK, see [Java SDK release notes](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/developer-reference/release-notes-11#concept-2335081).

Pull-based message subscription using the Java SDK

Supported

For more information about how to use the Java SDK to subscribe to messages in pull mode, see [Subscribe to messages](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/developer-reference/subscribe-to-messages-2#concept-2047092).

Not supported

Message trace

Supported

For more information about message traces, see [Query message traces](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/user-guide/query-a-message-trace#task-2335151).

Supported

Disaster recovery and high availability

**Note**

The zones are controlled by server-side resource deployment and cannot be customized.

-   Service: Multi-zone deployment
    
-   Data: Three replicas
    

-   Service: Multi-zone deployment
    
-   Data: Three replicas
