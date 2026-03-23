Triggers are mechanisms that define when a function is executed in response to specific events or conditions. They act as a bridge between an event and the action of a function, enabling event-driven architectures and simplifying complex workflows.

## What is a trigger?

A function can be invoked by using the [Function Compute console](https://fc.console.alibabacloud.com/), [SDKs](/help/en/functioncompute/fc-2-0/developer-reference/sdks#concept-2260089), or event sources. Triggers act as a way to automatically call a function when certain events occur. They are a fundamental building block of event-driven applications.

When a trigger is created for a function, it defines a specific set of conditions or criteria that, when met, will cause the function to be executed automatically.

**Note**

If you want to invoke multiple functions with a single event, you can combine Function Compute with CloudFlow. Specifically, you can invoke a function that starts a CloudFlow process, during which multiple other functions are invoked.

## Sample scenarios

Triggers automate function execution. The following examples illustrate common scenarios where triggers can be used. Once set up, the trigger will automatically execute the specified function when certain criteria are met, as well as at defined times or intervals, without any manual intervention.

-   OSS trigger
    
    You have an application that uploads images to your Object Storage Service (OSS) bucket, along with a function that can download, process, and save these images back to the bucket or to another service. To avoid having to manually invoke the function each time a new image is uploaded, you can configure an OSS trigger to do this automatically.
    
-   Simple Log Service trigger
    
    You have an application that uses Simple Log Service for log collection, along with a function that can query and analyze these logs. To avoid having to manually invoke the function each time a new log is collected, you can configure a Simple Log Service trigger to do this automatically.
    
-   Time trigger
    
    You have an application that requires hourly data collection, along with a function that can collect and process the data. To avoid having to manually invoke the function every hour, you can configure a time trigger to do this automatically.
    

## Trigger types

Function Compute supports the following types of triggers, classified according to their integration methods:

-   Two-way integrated triggers: This type of trigger can be configured in both Function Compute and the event sources.
    
-   One-way integrated triggers: This type of trigger can only be configured in the event sources.
    
-   Event triggers for Alibaba Cloud services: This type of trigger can only be configured in Function Compute, but it allows you to set triggering rules in EventBridge instead of configuring them directly in the event sources.
    

Based on how they invoke a function, triggers can also be classified into synchronous invocation triggers and asynchronous invocation triggers. The following items describe the differences between the invocation methods. For more information, see [Synchronous invocations](/help/en/functioncompute/fc-2-0/user-guide/synchronous-invocations#concept-2259967).

-   Synchronous invocation: The function returns a response only after it finishes processing the event. For example, function invocations initiated in the Function Compute console are all synchronous invocations.
    
-   Asynchronous invocation: Function Compute returns a response immediately upon receiving the event and places it into an internal queue for processing.
    

### Two-way integrated triggers

**Trigger name**

**Supported invocation method**

**Document link**

Time trigger

Asynchronous

[Time trigger overview](/help/en/functioncompute/fc-2-0/overview-38#concept-2260014)

OSS trigger

Asynchronous

[Overview of OSS event triggers](/help/en/functioncompute/fc-2-0/user-guide/overview-of-oss-event-triggers#multiTask8408)

Simple Log Service trigger

Synchronous

[Overview of Simple Log Service triggers](/help/en/functioncompute/fc-2-0/overview-33#multiTask4600)

CDN trigger

Synchronous

[CDN trigger overview](/help/en/functioncompute/fc-2-0/user-guide/overview-27#multiTask6945)

Tablestore trigger

Synchronous

[Tablestore trigger overview](/help/en/functioncompute/fc-2-0/overview-20#multiTask8694)

Self-managed Apache RocketMQ trigger

Synchronous and asynchronous

[Create an Apache RocketMQ trigger](/help/en/functioncompute/fc-2-0/user-guide/apache-rocketmq-trigger)

Simple Message Queue (formerly MNS) topic trigger

Asynchronous

[Overview of Simple Message Queue (formerly MNS) topic trigger](/help/en/functioncompute/fc-2-0/overview-18#concept-2259991)

HTTP trigger

Synchronous and asynchronous

[HTTP trigger overview](/help/en/functioncompute/fc-2-0/user-guide/overview-36#multiTask12687)

EventBridge\-based triggers

Simple Message Queue (formerly MNS) queue trigger

Synchronous and asynchronous

[Simple Message Queue (formerly MNS) queue triggers](/help/en/functioncompute/fc-2-0/user-guide/mns-queue-triggers#task-1999574)

ApsaraMQ for RocketMQ trigger

Synchronous and asynchronous

[ApsaraMQ for RocketMQ triggers](/help/en/functioncompute/fc-2-0/user-guide/apsaramq-for-rocketmq-triggers#task-1999570)

ApsaraMQ for RabbitMQ trigger

Synchronous and asynchronous

[RabbitMQ triggers](/help/en/functioncompute/fc-2-0/user-guide/apsaramq-for-rocketmq-triggers-1#task-2045124)

ApsaraMQ for Kafka trigger

Synchronous and asynchronous

[ApsaraMQ for Kafka triggers](/help/en/functioncompute/fc-2-0/user-guide/apsaramq-for-kafka-trigger#task-2533588)

ApsaraMQ for MQTT trigger

Synchronous and asynchronous

[ApsaraMQ for MQTT triggers](/help/en/functioncompute/fc-2-0/user-guide/message-queue-for-mqtt-triggers)

Data Transmission Service (DTS) trigger

Synchronous and asynchronous

[DTS triggers](/help/en/functioncompute/fc-2-0/user-guide/dts-triggers#task-2304606)

### One-way integrated triggers

**Note**

For one-way integrated triggers, you must configure them in the event sources.

**Trigger name**

**Supported invocation method**

**Document link**

API Gateway trigger

Synchronous and asynchronous

[API Gateway trigger overview](/help/en/functioncompute/fc-2-0/user-guide/api-gateway-trigger-overview#concept-2507388)

Application Load Balancer (ALB) trigger

Synchronous and asynchronous

[ALB triggers](/help/en/functioncompute/fc-2-0/user-guide/alb-triggers)

DataHub one-way trigger

Synchronous and asynchronous

[DataHub one-way trigger](/help/en/functioncompute/fc-2-0/user-guide/datahub-one-way-trigger)

IoT Platform trigger

Asynchronous

[IoT Platform](/help/en/functioncompute/fc-2-0/user-guide/iot-platform)

DataWorks trigger

Synchronous and asynchronous

[DataWorks](/help/en/functioncompute/fc-2-0/user-guide/dataworks-big-data-development-and-governance-platform)

CloudFlow

Synchronous and asynchronous

[Serverless workflow](/help/en/functioncompute/fc-2-0/user-guide/serverless-workflow)

### Event triggers for Alibaba Cloud services

**Trigger name**

**Supported invocation method**

**Document link**

Event triggers for Alibaba Cloud services

Synchronous and asynchronous

[Configure event triggers for Alibaba Cloud services](/help/en/functioncompute/fc-2-0/user-guide/configure-event-triggers-for-alibaba-cloud-services#task-1951456)
