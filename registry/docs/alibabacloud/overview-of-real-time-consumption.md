Simple Log Service provides a real-time consumption feature that lets you use software development kits (SDKs) to consume data in real time. This topic describes the concept, benefits, scenarios, billing rules, and consumers of this feature.

## Real-time consumption

Real-time consumption allows third-party software, multi-language applications, cloud products, and stream processing frameworks to use SDKs to consume data from Simple Log Service in real time. This feature sequentially reads and writes full data, similar to the Kafka middleware. You can use Structured Process Language (SPL) statements for data processing, and the server-side returns the results. For more information, see [Consume logs based on rules](/help/en/sls/rule-based-consumption).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1234697671/p806712.png)

**Note**

Both real-time consumption and query and analysis are used to read data. For more information about the differences between them, see [Differences between log consumption and queries](/help/en/sls/what-are-the-differences-between-loghub-and-logsearch#concept-cqh-sk1-hfb).

## Scenarios

Real-time consumption is suitable for scenarios such as stream processing and real-time computing. This feature offers low latency, and data is typically processed within seconds. You can customize the data retention period.

## Benefits

Real-time consumption provides the following benefits:

-   Centralized data storage
    
    Simple Log Service centralizes data from different machines. You can simply use an SDK to consume the collected data in real time.
    
-   Data classification
    
    You can use the data classification feature of Simple Log Service. This allows different applications and products to consume different types of data from different projects in real time.
    

## Billing rules

-   If the Logstore uses the pay-by-ingested-data billing mode, you are not charged for real-time consumption. However, if you pull data from a Simple Log Service public endpoint, you are charged for outbound internet traffic. The traffic is calculated based on the compressed data volume. For more information, see [Billable items in pay-by-ingested-data mode](/help/en/sls/billing-items-in-the-pay-per-data-write-mode). To view the billing mode of a Logstore, see [Manage a Logstore](/help/en/sls/manage-a-logstore).
    

-   If the Logstore uses the pay-by-feature billing mode, real-time consumption incurs charges for multiple billable items, including read and write traffic and requests. For more information, see [Billable items in pay-by-feature mode](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    

## Consumption target

The following tables describe the consumers that are supported for real-time consumption in Simple Log Service.

**Type**

**Objective**

**Description**

Third-party software

Flume

You can use Flume to consume data from Simple Log Service in real time. For more information, see [Consume data using Flume](/help/en/sls/use-flume-to-consume-log-data#concept-862261).

Logstash

You can use Logstash to consume data from Simple Log Service in real time. For more information, see [Consume data using Logstash](/help/en/sls/use-logstash-to-consume-log-data#concept-473580).

QRadar

Security information and event management (SIEM) systems, such as QRadar, can consume data from Simple Log Service in real time over the HTTPS or Syslog protocol. For more information, see [Deliver logs to a SIEM system](/help/en/sls/deliver-logs-to-siem#concept-265988) and [Deliver logs to a SIEM system over Syslog](/help/en/sls/ship-logs-to-a-siem-system-over-syslog#concept-266003).

Multi-language applications

Multi-language applications

Applications developed in languages such as Java, Python, and Go can consume data from Simple Log Service as consumers or consumer groups. For more information, see [Consume data using an API](/help/en/sls/log-consumption-through-java-sdk#concept-303715) and [Consume logs using a consumer group](/help/en/sls/log-consumption-by-consumer-group#concept-dv4-xnq-zdb).

Stream processing

Flink

You can use the Flink stream processing framework to consume data from Simple Log Service in real time. For more information, see [Consume data using Flink](/help/en/sls/use-flink-to-consume-data#task-1664085).

Spark

You can use the Spark stream processing framework to consume data from Simple Log Service in real time. For more information, see [Consume data using Spark Streaming](/help/en/sls/use-spark-streaming-to-consume-log-data#concept-uqw-d4q-zdb).

Cloud products

Function Compute

You can use Function Compute to consume data from Simple Log Service in real time. For more information, see [Consume log data using Function Compute](/help/en/sls/use-function-compute-to-consume-log-data#concept-tp3-b4q-zdb).

Blink

You can use real-time computing to consume data from Simple Log Service in real time. For more information, see [Consume data using Realtime Compute for Apache Flink](/help/en/sls/use-realtime-compute-to-consume-log-data#concept-g4n-24q-zdb).
