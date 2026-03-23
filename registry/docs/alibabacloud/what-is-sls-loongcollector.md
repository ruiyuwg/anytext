LoongCollector is an advanced data collector from Simple Log Service (SLS). It combines performance, stability, and programmability to create next-generation observability pipelines. LoongCollector enhances and integrates the observability technology stack, addressing the limitations of traditional log collectors. It supports collecting, processing, routing, and sending logs, metrics, traces, events, and profiles.

## Use cases

-   [Collect text logs from hosts](/help/en/sls/host-text-log-collection-auto-install)
    
-   [Collect container logs from Kubernetes clusters](/help/en/sls/container-log-collection-in-a-kubernetes-cluster/)
    
-   [Collect HTTP data](/help/en/sls/collect-http-data)
    

For more information, see [Log collection](/help/en/sls/sls-log-collection/).

## **Core advantages**

### **On-device collection integration**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3973943471/p931213.png)

LoongCollector allows a single agent to handle all collection tasks, including collecting, processing, routing, and sending logs, metrics, traces, events, and profiles. In Kubernetes, it uses the standard Container Runtime Interface (CRI) API to interact with pod definitions. This enables automatic attachment of Kubernetes metadata labels, such as Namespace, Pod, Container, and Labels, to the collected data without altering container configurations, ensuring accurate association with the infrastructure.

### **Flexible programmable pipelines**

LoongCollector is enhanced with the Structured Process Language (SPL) and multi-language plugin engines to build a comprehensive programmable system. These engines can be interconnected and flexibly combined to provide the desired computing capabilities.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3124993671/CAEQTxiBgIDK4.nB1RkiIGY2ZWZjYmZjMWNhZjQ2NmQ5MjJlMTBkMzhlNzc5Y2Vk4457584_20250313180222.561.svg)

If execution efficiency is your priority, use native plugins and supplement them with extended plugins. If you require comprehensive operator coverage and need to process complex data, select the SPL engine.

**Programmable engine**

**Classification**

**Features**

[Multi-language plugin engine](/help/en/sls/processing-plug-ins/)

Native plugin

Implemented in C++. It provides high performance, low resource overhead, and relatively complete operator capabilities.

Extended plugin

Implemented in Go. It provides high performance, low resource overhead, and relatively complete operator capabilities.

[SPL engine](/help/en/sls/spl-overview/)

SPL engine

Implemented in C++. It features a columnar model, vectorized execution, high performance, and low resource overhead. It provides comprehensive operator capabilities with over 100 operators, a pipeline design, and flexible combinations to process complex data.

### **High performance and reliability**

LoongCollector is designed for high performance and reliability to provide stable and efficient unified observability data collection for large-scale distributed systems.

-   **High performance:** LoongCollector features lock-free designs for core processes, an event-driven mechanism, and a throughput of hundreds of MB/s for a single thread in core scenarios.
    
-   **High reliability:** LoongCollector ensures high reliability through fair scheduling based on time slices, backpressure control based on high and low queue watermarks, multi-tenant data isolation between pipelines, and a copy-free data stream mechanism to conserve memory resources.
    
-   **Large-scale production-grade standards:** The commercial edition has been deployed on tens of millions of instances and tested in numerous online sales promotions and extreme scenarios.
