GeminiStateBackend is a key-value (KV) storage engine designed for stream processing. It is the default state backend for Realtime Compute for Apache Flink. This topic describes the core design of GeminiStateBackend and compares its performance with RocksDBStateBackend.

## Overview

Stateful computation is a complex and challenging scenario in stream processing. Data access in stream processing has the following characteristics:

-   Large volumes of random access with few range queries.
    
-   Data traffic and hot spots change dynamically and frequently. This means that even different concurrent instances of the same operator can have different data access patterns.
    

GeminiStateBackend is designed to address these characteristics. Its core design includes the following highlights:

-   **New architecture and data structure design for comprehensive performance improvements.**
    
    The overall architecture of GeminiStateBackend is built on a Log-Structured Merge-tree (LSM-tree) data structure. It includes three key capabilities: adaptive adjustments based on data scale and access patterns, tiered storage for hot and cold data, and flexible switching between anti-caching and caching architectures. Additionally, it features a hash-based storage structure that is optimized for random queries. The results from the [Nexmark performance comparison](#section-hvt-vk0-5dt) show that GeminiStateBackend significantly outperforms RocksDBStateBackend. In about half of the use cases, GeminiStateBackend's performance is over 70% better than that of RocksDBStateBackend.
    
-   **Support for decoupling storage and compute to overcome local disk storage limits for state data.**
    
    In environments with limited local disk space, jobs with large states often run out of disk space. Jobs that use RocksDBStateBackend typically resolve this issue by adding resources, such as increasing concurrency. GeminiStateBackend decouples storage and compute. This allows state storage to operate independently of local disks, which prevents job failures caused by state data exceeding local disk capacity. For information about how to configure storage and compute decoupling, see [Storage and compute decoupling configuration](/help/en/flink/realtime-flink/user-guide/configurations-of-geministatebackend#section-u0y-on0-owo).
    
-   **Support for adaptive key-value separation to significantly improve the performance of dual-stream or multi-stream join jobs.**
    
    Dual-stream or multi-stream joins are among the most challenging scenarios in stream processing and are a typical case where state storage can become a bottleneck. In many of these scenarios, join success rates are low or the values of state data are large. To address this, GeminiStateBackend introduces key-value (KV) separation technology. This technology greatly improves the performance of dual-stream or multi-stream join jobs. The feature is fully adaptive and requires no extra configuration or tuning. This technology was verified by Alibaba Group's core services during the Double 11 shopping festival. With KV separation enabled, job throughput capacity increased by 50% to 70%. The average utilization of compute resources increased by 50%, and in scenarios that benefited most, utilization increased by 100% to 200%. For information about how to configure KV separation, see [KV separation configuration](/help/en/flink/realtime-flink/user-guide/configurations-of-geministatebackend#section-vtl-p1u-83d).
    
-   **Lightweight job snapshots to significantly speed up checkpoint and snapshot completion for large-state jobs.**
    
    GeminiStateBackend supports more fine-grained job snapshots and decouples checkpoints from the LSM compaction mechanism. This makes checkpoints and snapshots faster and more stable. In addition, GeminiStateBackend supports native incremental savepoints. When combined with the native snapshots provided by Realtime Compute for Apache Flink, the performance of these savepoints approaches that of checkpoints, which greatly improves snapshot availability.
    
-   **Adaptive parameter tuning to eliminate manual tuning.**
    
    In stream processing tasks, different operators often have different state access patterns. State storage typically requires different parameter combinations to achieve optimal performance. These parameters are often numerous and involve low-level details, which makes manual tuning difficult and time-consuming. GeminiStateBackend uses adaptive parameter tuning technology to automatically adjust parameters at runtime based on current data access patterns and traffic. This achieves optimal performance across various scenarios. This technology was verified by Alibaba Group's core services during the Double 11 shopping festival. It eliminates the need for manual tuning in over 95% of cases and increases single-core throughput capacity by 10% to 40%. For information about how to configure adaptive parameter tuning, see [Adaptive parameter tuning configuration](/help/en/flink/realtime-flink/user-guide/configurations-of-geministatebackend#section-o4a-ju0-pem).
    

## Nexmark performance comparison

We used the state-bottlenecked use cases from [Nexmark](https://github.com/nexmark/nexmark) and identical hardware resources to test and compare the performance of RocksDBStateBackend and GeminiStateBackend.

**Note**

The [Nexmark](https://github.com/nexmark/nexmark) website is a third-party site. Access to this site may be slow or unavailable.

The results show that GeminiStateBackend significantly improves overall job efficiency, which is measured by single-core throughput capacity. The specific results are shown in the following table.

**Case name**

**Gemini TPS/Core**

**RocksDB TPS/Core**

**Gemini vs. RocksDB improvement**

q4

83.63 K/s

53.26 K/s

57.02%

q5

84.52 K/s

57.86 K/s

46.08%

q8

468.96 K/s

361.37 K/s

29.77%

q9

59.42 K/s

26.56 K/s

123.72%

q11

93.08 K/s

48.82 K/s

90.66%

q18

150.93 K/s

87.37 K/s

72.75%

q19

143.46 K/s

58.5 K/s

145.23%

q20

75.69 K/s

22.44 K/s

237.30%

## **References**

-   To learn how to create, view, and delete state sets and recover from a specified state, see [Manage job state sets](/help/en/flink/realtime-flink/user-guide/manage-a-state-set).
    
-   For information about the differences between RocksDB and Gemini in terms of migration efficiency and job performance during state data migration, see [Overview](/help/en/flink/user-guide/overview-8).
    
-   For details about the compatibility impact of SQL modifications, see [SQL modifications and compatibility](/help/en/flink/realtime-flink/user-guide/sql-modifications-and-impact-on-compatibility/).
    
-   For the procedure for using Nexmark to test the performance of Realtime Compute for Apache Flink, see [Performance Whitepaper (Nexmark Performance Testing)](/help/en/flink/realtime-flink/support/nexmark-performance-testing).
    
-   For frequently asked questions (FAQ) about system checkpoints or job snapshots in Realtime Compute for Apache Flink, see [System checkpoints or job snapshots](/help/en/flink/realtime-flink/support/faq-about-checkpoints-or-savepoints-of-a-deployment).
