EventBridge is a fully managed, serverless event data service that acts as a central hub for data integration and processing in the AI-native era. Built on the [CloudEvents 1.0](https://cloudevents.io/) standard, it connects application components through events to build loosely coupled and scalable event-driven architectures (EDAs).

EventBridge ingests events from Alibaba Cloud services, custom applications, and SaaS platforms, then filters, transforms, and delivers them to targets without integration code. This event-driven architecture (EDA) -- a design pattern where components communicate by publishing and responding to events rather than calling each other directly -- scales naturally as workloads grow and applies to microservice orchestration, real-time data processing, and automated O&M.

For more background information, see:

-   [What is SaaS?](https://www.aliyun.com/getting-started/what-is/what-is-saas)
    
-   [What is routing?](https://www.aliyun.com/getting-started/what-is/what-is-routing)
    

## Core resources

EventBridge provides three resource types for different event processing patterns:

**Dimension**

**Event bus**

**Event stream**

**Event house**

**Function**

Event routing and distribution

Continuous collection and transmission of large-scale data

Persistent storage and query analysis of events

**Routing pattern**

N:M (many-to-many)

1:1 (one-to-one)

\--

**Core capabilities**

Filtering, transformation, and multi-target delivery

High throughput, low latency, and consumption replay

Instant SQL queries and low-cost storage

**Typical scenarios**

Microservice decoupling, SaaS integration, and automated O&M

Log collection, IoT data aggregation, and real-time ETL

Event auditing, root cause analysis, and BI reports

### Event bus

An event bus receives events and distributes them to one or more targets based on configurable event rules.

Events arrive from Alibaba Cloud services, custom applications, or SaaS platforms. Each event rule defines a filter condition and one or more delivery targets, such as Function Compute, ApsaraMQ for RocketMQ, or DingTalk. During routing, the event structure is transformed to match the format each target expects.

**Key capabilities**

-   **Content filtering** -- Match events by their payload content using event rules.
    
-   **Event transformation** -- Reshape event data during routing to fit each target's expected format.
    
-   **Multi-target delivery** -- Deliver a single event to multiple downstream services simultaneously.
    

**Use cases**

-   **Microservice decoupling** -- An order service publishes an "Order Created" event. The inventory, logistics, and rewards services each subscribe independently, with no direct dependencies on each other.
    
-   **SaaS integration** -- When customer information changes in Salesforce, the update syncs automatically to an internal CRM system.
    
-   **Automated O&M** -- Cloud Monitor detects an instance failure and triggers a remediation script or sends an alert notification.
    

### Event stream

An event stream provides a high-throughput, one-to-one (1:1) data channel for continuous collection and real-time processing of large-scale data. Unlike the many-to-many routing of an event bus, an event stream is optimized for ordered, high-volume data such as logs, monitoring metrics, and user behavior events.

**Key capabilities**

-   **High throughput, low latency** -- Handle millions of transactions per second (TPS) for both writes and reads.
    
-   **Consumption replay** -- Reprocess data by pulling from a specific point in the past.
    

**Use cases**

-   **Real-time data warehouse** -- Collect binary logs (binlogs) from business databases and application logs in real time, process them with Flink, and write the results to a data warehouse.
    
-   **IoT data aggregation** -- Aggregate status data from a large number of devices and distribute it to downstream analytics systems.
    
-   **Clickstream analysis** -- Capture user behavior data from websites or apps in real time for recommendation systems.
    

### Event house

An event house persistently stores all event data that passes through EventBridge and makes it available for SQL-based querying at any time. Its columnar, tiered storage architecture keeps storage costs low while maintaining query performance, making it suitable for both long-term retention and real-time analysis.

**Key capabilities**

-   **Instant SQL queries** -- Run standard SQL queries directly on historical events without moving data to a separate data warehouse. Supports multi-dimensional aggregation, filtering, and analysis.
    
-   **Low-cost lakehouse storage** -- Tiered storage architecture optimized for long-term retention of large event datasets.
    

**Use cases**

-   **Root cause analysis** -- When a system fails, query the chain of anomalous events within the failure time window to pinpoint the root cause.
    
-   **Business intelligence reports** -- Connect tools such as Quick BI to an event house to generate real-time reports from event streams.
    
-   **Event audit and compliance** -- Retain business event records long-term to meet regulatory and audit requirements.
    

### Choose the right resource

**Scenario**

**Resource**

**Example**

Route events from many sources to many targets

Event bus

An order event needs to notify the inventory, logistics, and rewards systems simultaneously

Build a high-throughput pipeline between two systems

Event stream

Continuously sync database change logs to a downstream analytics system

Store and query historical events

Event house

Analyze the distribution of failed payment events over the past month

These three resources work together. An event bus receives and routes events, an event stream provides a high-throughput channel between two systems, and an event house stores all historical data for querying and analysis.

## AI scenarios

The built-in filtering and transformation engine preprocesses event data -- scrubbing noise and enriching features -- before it reaches an AI model. EventBridge also routes processed events to machine learning platforms and vector databases.

**Scenario**

**Resource**

**How it works**

Real-time inference trigger

Event bus

An image uploaded to OSS triggers a Function Compute function that calls an AI model for recognition

Training data pipeline

Event stream

Continuously collect user behavior data as a real-time input source for model fine-tuning

AI agent context

Event Store

Serve as a knowledge source for retrieval-augmented generation (RAG), letting an AI agent query historical business events

## Key concepts

**Concept**

**Definition**

Event

A data record that represents a state change. The basic unit that EventBridge processes.

Event source

The origin of an event -- an Alibaba Cloud service, a custom application, or a SaaS platform.

Event target

The destination that consumes an event -- Function Compute, ApsaraMQ for RocketMQ, an HTTP endpoint, or another service.

Event bus

The routing hub that receives, filters, transforms, and distributes events.

Event rule

A configuration that defines which events to match and where to deliver them.

For detailed definitions, see [Terms](/help/en/eventbridge/product-overview/terms#concept-2475434).

## Benefits

-   [Availability](/help/en/eventbridge/product-overview/benefits#section-hf0-60r-chs)
    
-   [Ease of use](/help/en/eventbridge/product-overview/benefits#section-kpz-p4r-mqs)
    
-   [Security](/help/en/eventbridge/product-overview/benefits#section-w53-tq3-je3)
    
-   [Scalability](/help/en/eventbridge/product-overview/benefits#section-wxi-xmp-roz)
    

## Billing

For details, see [Billing overview](/help/en/eventbridge/product-overview/billing-overview).
