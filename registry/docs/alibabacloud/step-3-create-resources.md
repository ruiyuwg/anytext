Before you send or receive messages with ApsaraMQ for Kafka, create topics and consumer groups on your deployed instance. Producers send messages to topics. Consumers read messages from topics through consumer groups. Before consumers can consume messages, the consumer group must subscribe to the corresponding topics. A consumer group can subscribe to multiple topics, and a topic can serve multiple consumer groups.

## Prerequisites

Before you begin, make sure that you have:

-   A purchased and deployed ApsaraMQ for Kafka instance
    
    -   [Purchase and deploy a VPC-connected instance](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/getting-started/purchase-and-deploy-a-vpc-connected-instance#concept-99954-zh)
        
    -   [Purchase and deploy an Internet- and VPC-connected instance](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/getting-started/purchase-and-deploy-an-internet-and-vpc-connected-instance#concept-99956-zh)
        

## Step 1: Create a topic

**Important**

Create topics in the same region as the Elastic Compute Service (ECS) instance where your producers and consumers run. Topics cannot be used across regions. For example, if your ECS instance is in the China (Beijing) region, the topic must also be in the China (Beijing) region.

1.  Log on to the [ApsaraMQ for Kafka console](https://kafka.console.alibabacloud.com/?spm=a2c4g.11186623.2.22.6bf72638IfKzDm).
    
2.  In the **Resource Distribution** section of the **Overview** page, select the region where your instance is deployed.
    
3.  On the **Instances** page, click the name of your instance.
    
4.  In the left-side navigation pane, click **Topics**.
    
5.  On the **Topics** page, click **Create Topic**.
    
6.  In the **Create Topic** panel, configure the following parameters and click **OK**. After the topic is created, it appears on the **Topics** page.
    
    ****Parameter****
    
    ****Description****
    
    ****Example****
    
    **Name**
    
    The topic name.
    
    demo
    
    **Description**
    
    A brief description of the topic.
    
    demo test
    
    **Partitions**
    
    The number of partitions.
    
    12
    
    **Storage Engine**
    
    The storage engine type. Available only for Professional Edition instances. Standard Edition defaults to **Cloud Storage**. For details, see the Storage engine options section below.
    
    **Cloud Storage**
    
    **Message Type**
    
    The message ordering behavior. Automatically determined by the storage engine. For details, see the Message type options section below.
    
    **Normal Message**
    
    **Log Cleanup Policy**
    
    Required only when **Storage Engine** is **Local Storage** (Professional Edition). For details, see the Log cleanup policy options section below.
    
    **Delete**
    
    **Tag**
    
    Tags to attach to the topic.
    
    demo
    

**Note**

The system automatically creates two internal topics when you deploy an instance: `__alikafka_housekeeping_local_topic` and `__alikafka_housekeeping_cloud_topic`. Do not delete these topics. For more information, see [Inspection description](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/product-overview/inspection-description#f776fb6c996qh).

### Storage engine options

**Note**

This parameter is available only for Professional Edition instances. Standard Edition instances use **Cloud Storage** by default.

-   **Cloud Storage**: Stores messages on Alibaba Cloud disks with three replicas in distributed mode. Provides low latency, high performance, high durability, and high reliability. If you set **Instance Edition** to **Standard (High Write)** during instance creation, only **Cloud Storage** is available.
    
-   **Local Storage**: Uses the in-sync replicas (ISR) algorithm from open source Apache Kafka. Stores data in three replicas in distributed mode.
    

### Message type options

-   **Normal Message**: Messages with the same key are stored in the same partition in send order. If a broker fails, message ordering across partitions may not be preserved. Automatically set when **Storage Engine** is **Cloud Storage**.
    
-   **Partitionally Ordered Message**: Messages with the same key are stored in the same partition in send order. If a broker fails, ordering is preserved, but some partitions become unavailable until the broker recovers. Automatically set when **Storage Engine** is **Local Storage**.
    

### Log cleanup policy options

Required only when **Storage Engine** is **Local Storage** (Professional Edition only).

-   **Delete** (default): Retains messages based on the maximum retention period. When storage usage exceeds 85%, the system deletes the earliest messages to maintain service availability.
    
-   **Compact**: Applies the [log compaction policy from Apache Kafka](https://kafka.apache.org/documentation/?spm=a2c4g.11186623.2.15.1cde7bc3c8pZkD#compaction). Retains only the latest value for each message key. Use this policy for components that store state or configuration data, such as Kafka Connect and Confluent Schema Registry. For more information, see [aliware-kafka-demos](https://github.com/AliwareMQ/aliware-kafka-demos?spm=a2c63.p38356.0.0.5b1a6e41TTNpd0).
    
    **Important**
    
    Log-compacted topics are supported only for specific cloud-native components such as Kafka Connect and Confluent Schema Registry.
    

## Step 2: Create a consumer group

1.  Log on to the [ApsaraMQ for Kafka console](https://kafka.console.alibabacloud.com/?spm=a2c4g.11186623.2.22.6bf72638IfKzDm).
    
2.  In the **Resource Distribution** section of the **Overview** page, select the region where your instance is deployed.
    
3.  On the **Instances** page, click the name of your instance.
    
4.  In the left-side navigation pane, click **Groups**.
    
5.  On the **Groups** page, click **Create Group**.
    
6.  In the **Create Group** panel, enter a group name in the **Group ID** field and a description in the **Description** field, attach tags if needed, and click **OK**. After the consumer group is created, it appears on the **Groups** page.
    

## What's next

After creating topics and consumer groups, use an SDK to produce and consume messages. See [Step 4: Use an SDK to send and receive messages](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/getting-started/step-4-use-the-sdk-to-send-and-subscribe-to-messages/).

## Related topics

-   To enable automatic resource creation, see [Automatically create topics](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/user-guide/automatically-create-topics) and [Use the flexible group creation feature](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/user-guide/use-the-flexible-group-creation-feature).
    
-   To create resources programmatically, see the [CreateTopic](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/developer-reference/api-alikafka-2019-09-16-createtopic) and [CreateConsumerGroup](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/developer-reference/api-alikafka-2019-09-16-createconsumergroup) API references.
