ApsaraMQ for RabbitMQ is a messaging service built on the AMQP 0-9-1 protocol. It uses a high-availability distributed storage architecture to deliver reliable messaging at scale, without the operational overhead of running your own RabbitMQ clusters.

Compatible with open source RabbitMQ clients, ApsaraMQ for RabbitMQ lets existing applications connect with minimal code changes while providing cloud-native capabilities: high concurrency, distributed architecture, and elastic scaling. The managed infrastructure eliminates common self-hosted stability issues such as message accumulation and split-brain.

## Who should use ApsaraMQ for RabbitMQ?

ApsaraMQ for RabbitMQ is designed for developers, architects, and operations teams who:

-   Need a standards-based message broker (AMQP 0-9-1) without managing infrastructure
    
-   Want to migrate from self-hosted RabbitMQ to a managed service with full client compatibility
    
-   Require high-availability messaging with built-in fault tolerance and elastic scaling
    

### Managed service vs. self-hosted RabbitMQ

ApsaraMQ for RabbitMQ has key advantages over open source RabbitMQ in performance, stability, and features. As a managed service, it eliminates the operational burden of managing broker nodes, storage, and failover. For a detailed comparison, see [Comparison with open source RabbitMQ](/help/en/apsaramq-for-rabbitmq/product-overview/comparison-between-apsaramq-for-rabbitmq-and-open-source-rabbitmq#concept-1988802).

## Key concepts

**Concept**

**Description**

**Producer**

An application that sends messages to an exchange.

**Consumer**

An application that receives and processes messages from a queue.

**Exchange**

Receives messages from producers and routes them to one or more queues based on routing rules.

**Queue**

A buffer that stores messages until a consumer retrieves them.

**Binding**

A link between an exchange and a queue that defines the routing rule.

**Routing key**

A message attribute that the exchange evaluates against bindings to determine which queues receive the message. Think of it as an address label on the message.

**Connection**

A TCP connection between your application and the ApsaraMQ for RabbitMQ broker.

**Channel**

A lightweight virtual connection inside a TCP connection. All publish and consume operations run over channels, allowing multiple concurrent operations on a single connection.

For a complete list of terms, see [Glossary](/help/en/apsaramq-for-rabbitmq/product-overview/terms#concept-101628-zh).

## How it works

A message moves through ApsaraMQ for RabbitMQ in five steps:

1.  A producer publishes a message to an exchange and specifies a routing key.
    
2.  The exchange evaluates the routing key against its bindings.
    
3.  Based on the exchange type and binding rules, the exchange routes the message to one or more queues.
    
4.  The message stays in the queue until a consumer retrieves it.
    
5.  The consumer pulls the message from the queue, processes it, and sends an acknowledgment.
    

### Exchange types

The exchange type determines how messages are routed:

**Type**

**Routing behavior**

**Direct**

Routes messages to queues whose binding key exactly matches the routing key.

**Fanout**

Broadcasts messages to all bound queues, ignoring routing keys.

**Topic**

Routes messages by wildcard pattern matching between the routing key and binding patterns.

**Headers**

Routes messages based on header attributes instead of the routing key.

![dg_msg_flow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7131994861/p71472.png)

## Benefits

Compared with self-hosted RabbitMQ, ApsaraMQ for RabbitMQ is flexible and easy to use. It provides enhanced features, superior performance, and high reliability:

-   **No operational overhead** -- As a managed service, you can focus on your applications instead of broker maintenance.
    
-   **High availability** -- Built on distributed storage with automatic failover. Eliminates split-brain risks.
    
-   **Elastic scaling** -- Scale throughput and storage on demand.
    
-   **High concurrency** -- Handles large volumes of concurrent connections and messages.
    
-   **Full compatibility** -- Works with existing open source RabbitMQ client libraries.
    

For more details, see [Benefits](/help/en/apsaramq-for-rabbitmq/product-overview/benefits#concept-101629-zh).

## Features

Beyond open source RabbitMQ, the managed service adds:

-   **Open source compatibility** -- Supports AMQP 0-9-1 and works with standard RabbitMQ client libraries.
    
-   **Multiple message types** -- Supports multiple message types for various messaging patterns.
    
-   **Comprehensive O&M support** -- Built-in monitoring and operations support through the Alibaba Cloud console.
    

For the full feature list, see [Features](/help/en/apsaramq-for-rabbitmq/product-overview/features#concept-2319286).

## Use cases

ApsaraMQ for RabbitMQ is used across industries including finance, insurance, government and enterprise, e-commerce, new retail, logistics, interactive video, and energy. Typical use cases include:

-   **Asynchronous decoupling** -- Separate time-consuming backend processing from user-facing services. For example, place order processing tasks in a queue so the web service stays responsive while workers handle fulfillment independently.
    
-   **Peak-load shifting** -- Buffer sudden traffic spikes in queues and let consumers process messages at a sustainable rate, preventing downstream systems from being overwhelmed.
    
-   **Distributed cache synchronization** -- Broadcast cache invalidation events to multiple services through fanout exchanges, keeping distributed caches consistent across your architecture.
    

For detailed use case descriptions, see [Scenarios](/help/en/apsaramq-for-rabbitmq/product-overview/scenarios#concept-2425411).

## Limits

ApsaraMQ for RabbitMQ enforces limits on clusters, API calls, and characters. Exceeding these limits causes application errors. For specific values, see [Limits](/help/en/apsaramq-for-rabbitmq/product-overview/limits#concept-101627-zh).

## What's next

-   [Comparison with open source RabbitMQ](/help/en/apsaramq-for-rabbitmq/product-overview/comparison-between-apsaramq-for-rabbitmq-and-open-source-rabbitmq#concept-1988802): Performance, stability, and feature comparison.
    
-   [Benefits](/help/en/apsaramq-for-rabbitmq/product-overview/benefits#concept-101629-zh): Advantages over self-hosted RabbitMQ.
    
-   [Features](/help/en/apsaramq-for-rabbitmq/product-overview/features#concept-2319286): Complete feature reference.
    
-   [Scenarios](/help/en/apsaramq-for-rabbitmq/product-overview/scenarios#concept-2425411): Industry-specific use case details.
    
-   [Glossary](/help/en/apsaramq-for-rabbitmq/product-overview/terms#concept-101628-zh): Full terminology reference.
