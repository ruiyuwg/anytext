Use these metrics to build custom Grafana dashboards and PromQL queries for ARMS Application Monitoring.

**Important**

Applications connected through Managed Service for OpenTelemetry support only business metrics. JVM metrics, system metrics, and other metric categories are not available for these applications.

## Metric naming conventions

ARMS metrics follow consistent naming patterns. Understanding these patterns helps you find the right metric and construct queries faster.

### Business metrics

Business metrics use the pattern `arms_$callType_requests_<suffix>`, where `$callType` is the service access type. Replace `$callType` with the actual access type when querying.

**Example:** To query HTTP request counts, use `arms_http_requests_count`.

For all supported access types, see [Service access types and dimensions](#section-3d3-i77-4ib).

### Aggregated business metrics

Aggregated metrics use two naming patterns:

**Pattern**

**Format**

**Description**

Full-dimension

`<prefix>_raw`

Includes all observation dimensions

Reduced-dimension

`<prefix>_ign_x_y`

Excludes dimensions `x` and `y` from the metric

Reduced-dimension metrics improve query performance by pre-excluding unused dimensions. Choose the variant with only the dimensions your query requires.

### How ARMS Gauge metrics differ from open-source frameworks

**Important**

Except for quantile and Counter-type metrics, ARMS metrics are Gauge type. Each data point represents the **cumulative total within the 15-second collection interval**, not an instantaneous value. This affects how you write PromQL expressions.

**Scenario**

**ARMS PromQL**

**Open-source equivalent**

Average QPS over 1 minute

`sum_over_time(arms_$callType_requests_count[1m]) / 60`

`rate(http_server_requests_count[1m])`

Error rate over 5 minutes

`sum_over_time(arms_http_requests_error_count[5m]) / sum_over_time(arms_http_requests_count[5m])`

`rate(http_server_requests_error_count[5m]) / rate(http_server_requests_count[5m])`

P99 latency

`arms_http_requests_latency_seconds{quantile="0.99"}`

`histogram_quantile(0.99, rate(http_server_requests_seconds_bucket[5m]))`

## Metric storage locations

Metrics are stored in one of two metric libraries. Specify the correct metricstore when querying.

**Storage location**

**Metricstore name**

**Metric categories**

Core metric library

`metricstore-apm-metrics`

JVM, system, thread pool/connection pool, Go runtime, and the following aggregated business metrics: `arms_app_requests_{metric}_ign_destid_endpoint_parent_ppid_prpc_rpc`, `arms_app_requests_{metric}_ign_destid_endpoint_rpc_prpc`, `arms_app_requests_{metric}_ign_destid_endpoint_parent_ppid_prpc`

Detailed metric library

`metricstore-apm-metrics-detail`

Business metrics, scheduled task metrics, and all other aggregated business metrics

## Business metrics

Business metrics track request count, errors, latency, and slow requests per service access type.

### Common dimensions

**Dimension**

**Key**

Service name

`service`

Service PID

`pid`

Machine IP

`serverIp`

Interface

`rpc`

### Metric list

All metrics use a 15-second collection interval.

**Metric name**

**Metric**

**Type**

**Unit**

**Dimensions**

Request count

`arms_$callType_requests_count`

Gauge

\--

Varies by access type. See [Service access types and dimensions](#section-3d3-i77-4ib).

Error request count

`arms_$callType_requests_error_count`

Gauge

\--

Same as above

Request duration

`arms_$callType_requests_seconds`

Gauge

Seconds

Same as above

Slow request count

`arms_$callType_requests_slow_count`

Gauge

\--

Same as above

Request duration quantiles

`arms_$callType_requests_latency_seconds`

Summary

Seconds

Available only for HTTP access type with quantile statistics enabled. Quantile values: 0.5, 0.75, 0.90, 0.99. To enable quantile statistics, see [Advanced Settings](/help/en/arms/application-monitoring/user-guide/customize-application-settings#sc-advanced-options).

## Aggregated business metrics

Per-access-type business metrics create long PromQL expressions when an application uses multiple access types (such as HTTP and Dubbo). They also include all observation dimensions, which can degrade query performance when you need only a subset.

Aggregated business metrics solve both problems: they combine access types into unified metrics and offer reduced-dimension variants for faster queries.

Unless otherwise specified, all aggregated business metrics are Gauge type with a 15-second collection interval.

### Common dimensions

Every aggregated metric includes these dimensions:

**Dimension**

**Key**

**Description**

Application PID

`pid`

Process identifier

Application name

`service`

Service name

Instance IP

`serverIp`

Host IP address

Metric source

`source`

`apm` = ARMS agent, `xtrace` = Managed Service for OpenTelemetry, `ebpf` = eBPF agent

### Categories

Aggregated business metrics are organized into six categories:

**Category**

**Tracks**

**Scope**

General

Request count, error count, slow request count, request duration

All access types

Database

Request count, error count, slow request count, request duration

Database access types only

SQL

Same as Database, plus SQL statement dimension

Database access types only

Exception

Request count, request duration

All access types, only when exceptions occur

Status code

Request count by HTTP status code

HTTP access type only

Quantile

Request duration quantiles

All access types (agent V4.x+)

### General metrics

**Additional dimensions for `_raw` metrics:**

**Dimension**

**Key**

**Description**

Access type

`callType`

HTTP, Dubbo, database, etc.

Interface name

`rpc`

Endpoint or method name

Upstream interface

`prpc`

Caller interface

Upstream application PID

`ppid`

Caller process ID

Upstream application name

`parent`

Caller service name

Peer address

`endpoint`

For `http_client`: peer interface. For other types: remote address.

Target identifier

`destId`

For database types: database name. For other types: remote address.

#### Request count

**Metric**

**Excluded dimensions**

`arms_app_requests_count_raw`

None (all dimensions included)

`arms_app_requests_count_ign_destid_endpoint_parent_ppid_prpc_rpc`

destId, endpoint, parent, ppid, prpc, rpc

`arms_app_requests_count_ign_destid_endpoint_rpc_prpc`

destId, endpoint, rpc, prpc

`arms_app_requests_count_ign_destid_endpoint_parent_ppid_prpc`

destId, endpoint, parent, ppid, prpc

`arms_app_requests_count_ign_parent_ppid_prpc_rpc`

parent, ppid, prpc, rpc

#### Error request count

**Metric**

**Excluded dimensions**

`arms_app_requests_error_count_raw`

None (all dimensions included)

`arms_app_requests_error_count_ign_destid_endpoint_rpc_prpc`

destId, endpoint, rpc, prpc

`arms_app_requests_error_count_ign_destid_endpoint_parent_ppid_prpc`

destId, endpoint, parent, ppid, prpc

`arms_app_requests_error_count_ign_parent_ppid_prpc_rpc`

parent, ppid, prpc, rpc

#### Slow request count

**Metric**

**Excluded dimensions**

`arms_app_requests_slow_count_raw`

None (all dimensions included)

`arms_app_requests_slow_count_ign_destid_endpoint_parent_ppid_prpc_rpc`

destId, endpoint, parent, ppid, prpc, rpc

`arms_app_requests_slow_count_ign_destid_endpoint_rpc_prpc`

destId, endpoint, rpc, prpc

`arms_app_requests_slow_count_ign_destid_endpoint_parent_ppid_prpc`

destId, endpoint, parent, ppid, prpc

`arms_app_requests_slow_count_ign_parent_ppid_prpc_rpc`

parent, ppid, prpc, rpc

#### Request duration

**Metric**

**Unit**

**Excluded dimensions**

`arms_app_requests_seconds_raw`

Seconds

None (all dimensions included)

`arms_app_requests_seconds_ign_destid_endpoint_parent_ppid_prpc_rpc`

Seconds

destId, endpoint, parent, ppid, prpc, rpc

`arms_app_requests_seconds_ign_destid_endpoint_rpc_prpc`

Seconds

destId, endpoint, rpc, prpc

`arms_app_requests_seconds_ign_destid_endpoint_parent_ppid_prpc`

Seconds

destId, endpoint, parent, ppid, prpc

`arms_app_requests_seconds_ign_parent_ppid_prpc_rpc`

Seconds

parent, ppid, prpc, rpc

### Database metrics

**Additional dimensions:**

**Dimension**

**Key**

**Description**

Access type

`callType`

Database type (MySQL, PostgreSQL, etc.)

Interface name

`rpc`

Query method

Database instance address

`endpoint`

Connection endpoint

Database name

`destId`

Target database

**Metric name**

**Full-dimension metric**

**Reduced-dimension metric (excludes rpc)**

Request count

`arms_db_requests_count_raw`

`arms_db_requests_count_ign_rpc`

Error request count

`arms_db_requests_error_count_raw`

`arms_db_requests_error_count_ign_rpc`

Slow request count

`arms_db_requests_slow_count_raw`

`arms_db_requests_slow_count_ign_rpc`

Request duration

`arms_db_requests_seconds_raw`

`arms_db_requests_seconds_ign_rpc`

### SQL metrics

SQL metrics extend database metrics by adding the SQL statement dimension.

**Additional dimensions:** Same as Database metrics, plus:

**Dimension**

**Key**

**Description**

SQL statement ID

`sqlId`

Identifier for the SQL statement

**Metric name**

**Full-dimension metric**

**Reduced-dimension metric (excludes rpc)**

Request count

`arms_sql_requests_count_raw`

`arms_sql_requests_count_ign_rpc`

Error request count

`arms_sql_requests_error_count_raw`

`arms_sql_requests_error_count_ign_rpc`

Slow request count

`arms_sql_requests_slow_count_raw`

`arms_sql_requests_slow_count_ign_rpc`

Request duration

`arms_sql_requests_seconds_raw`

`arms_sql_requests_seconds_ign_rpc`

### Exception metrics

**Additional dimensions:**

**Dimension**

**Key**

**Description**

Access type

`callType`

Service access type

Interface name

`rpc`

Endpoint or method name

Peer address

`endpoint`

For `http_client`: peer interface. For other types: remote address.

Target identifier

`destId`

For database types: database name. For other types: remote address.

Exception encoding method

`excepInfo`

Encoding format

Exception encoding ID

`excepType`

Unique exception identifier

Exception name

`excepName`

Exception class name

**Metric name**

**Metric**

**Excluded dimensions**

Exception request count

`arms_exception_requests_count_raw`

None

`arms_exception_requests_count_ign_destid_endpoint_rpc`

destId, endpoint, rpc

`arms_exception_requests_count_ign_destid_endpoint`

destId, endpoint

Exception request duration

`arms_exception_requests_seconds_raw`

None

`arms_exception_requests_seconds_ign_destid_endpoint_rpc`

destId, endpoint, rpc

`arms_exception_requests_seconds_ign_destid_endpoint`

destId, endpoint

### Status code metrics

**Additional dimensions:**

**Dimension**

**Key**

**Description**

Interface name

`rpc`

HTTP endpoint

Status code

`status`

`200`, `2xx` (201-299), `3xx` (300-399), `4xx` (400-499), `5xx` (500+)

**Metric name**

**Metric**

**Excluded dimensions**

Request count by status code

`arms_requests_by_status_count_raw`

None

`arms_requests_by_status_count_ign_rpc`

rpc

### Quantile metrics

> Quantile metrics require agent V4.x or later.

**Additional dimensions:**

**Dimension**

**Key**

**Description**

Access type

`callType`

Service access type

Interface name

`rpc`

Endpoint or method name

Quantile

`quantile`

`0.5` (p50), `0.75` (p75), `0.90` (p90), `0.99` (p99)

Peer address

`endpoint`

For `http_client`: peer interface. For other types: remote address.

Target identifier

`destId`

For database types: database name. For other types: remote address.

Exception encoding method

`excepInfo`

Encoding format

Exception encoding ID

`excepType`

Unique exception identifier

Exception name

`excepName`

Exception class name

Status code

`status`

`200`, `2xx`, `3xx`, `4xx`, `5xx`

**Metric**

**Type**

`arms_uni_requests_latency_seconds`

Summary

### Choose the right metric

Use the following examples to select the best metric variant for your query.

**Example 1: Count requests across all interfaces**

1.  The General category provides request count metrics.
    
2.  Your query needs the interface dimension (`rpc`) but not upstream, peer, or database dimensions.
    
3.  Pick the variant that retains `rpc` while excluding the most unnecessary dimensions.
    

**Best choice:** `arms_app_requests_count_ign_destid_endpoint_parent_ppid_prpc`

This metric keeps `rpc` (interface) and `callType` while excluding `destId`, `endpoint`, `parent`, `ppid`, and `prpc`, giving you the right data with optimal query performance.

**Example 2: Calculate error rate by service**

1.  You need error count and total request count at the service level -- no per-interface breakdown.
    
2.  Use the most reduced-dimension variants for both metrics.
    

```
sum_over_time(arms_app_requests_error_count_ign_destid_endpoint_parent_ppid_prpc_rpc[5m])
/
sum_over_time(arms_app_requests_count_ign_destid_endpoint_parent_ppid_prpc_rpc[5m])
```

**Example 3: Monitor slow database queries**

1.  The Database category tracks slow requests.
    
2.  You need the database name (`destId`) and endpoint, but not the query method (`rpc`).
    

**Best choice:** `arms_db_requests_slow_count_ign_rpc`

## JVM metrics

All JVM metrics use a 15-second collection interval.

### Common dimensions

**Dimension**

**Key**

Service name

`service`

Service PID

`pid`

Machine IP

`serverIp`

### Garbage collection

**Metric name**

**Metric**

**Type**

**Unit**

Total GC count

`arms_jvm_gc_total`

Counter

\--

Total GC duration

`arms_jvm_gc_seconds_total`

Counter

Seconds

GC count per interval

`arms_jvm_gc_delta`

Gauge

\--

GC duration per interval

`arms_jvm_gc_seconds_delta`

Gauge

Seconds

**Dimensions:**

-   **Generational GC area:** `Young` (young generation), `Old` (old generation)
    
-   **Cause** (agent V4.4.0+): The GC trigger reason. Common causes include:
    

**Cause**

**Description**

`Allocation Failure`

JVM could not allocate memory for a new object, indicating memory pressure

`System.gc()`

Triggered by an explicit `System.gc()` call in application code

`Heap Dump Initiated GC`

Triggered during a heap dump operation

`Metadata GC Threshold`

Triggered when metaspace usage reaches the threshold

`G1 Evacuation Pause`

G1 collector evacuation pause

`G1 Humongous Allocation`

G1 collector humongous object allocation

`No GC`

JVM triggered GC based on internal heuristics (such as CMS heap usage prediction) rather than a specific condition

**All GC causes**

-   `System.gc()`
    
-   `FullGCAlot` / `ScavengeAlot`
    
-   `Allocation Profiler`
    
-   `JvmtiEnv ForceGarbageCollection`
    
-   `Heap Inspection Initiated GC` / `Heap Dump Initiated GC`
    
-   `WhiteBox Initiated Young GC` / `WhiteBox Initiated Full GC` / `Run to Breakpoint`
    
-   `No GC`
    
-   `Allocation Failure`
    
-   `CodeCache GC Threshold` / `Aggressive`
    
-   `Metadata GC Threshold` / `Clear Soft References`
    
-   `G1 Evacuation Pause` / `G1 Compaction Pause` / `G1 Humongous Allocation` / `G1 Periodic Collection`
    
-   `Diagnostic Command`
    
-   Shenandoah GC causes
    
-   ZGC causes (`Timer`, `Warmup`, `Allocation Rate`, `Proactive`, etc.)
    
-   `ILLEGAL VALUE`
    

### Threads

**Metric name**

**Metric**

**Type**

**Unit**

JVM thread count

`arms_jvm_threads_count`

Gauge

\--

**Dimension -- State:**

`Blocked`, `Live`, `Daemon`, `New`, `Dead-lock`, `Runnable`, `Terminated`, `Timed-wait`, `Wait`

### Memory

**Metric name**

**Metric**

**Type**

**Unit**

Initial memory size

`arms_jvm_mem_init_bytes`

Gauge

Bytes

Maximum memory size

`arms_jvm_mem_max_bytes`

Gauge

Bytes

Used memory size

`arms_jvm_mem_used_bytes`

Gauge

Bytes

Committed memory size

`arms_jvm_mem_committed_bytes`

Gauge

Bytes

Memory usage ratio

`arms_jvm_mem_usage_ratio`

Gauge

Ratio (0-1)

**Dimensions:**

-   **Area:** `Heap`, `Nonheap`, `Total`
    
-   **ID (region breakdown):** `Eden`, `Old`, `Survivor`, `Metaspace`, `Code cache`, `Compressed class space`, `Total`
    

### Classes

**Metric name**

**Metric**

**Type**

**Unit**

Loaded classes

`arms_class_load_loaded`

Counter

\--

Unloaded classes

`arms_class_load_un_loaded`

Counter

\--

### Buffer pools

**Metric name**

**Metric**

**Type**

**Unit**

Buffer pool total size

`arms_jvm_buffer_pool_total_bytes`

Gauge

Bytes

Buffer pool used size

`arms_jvm_buffer_pool_used_bytes`

Gauge

Bytes

Buffer pool count

`arms_jvm_buffer_pool_count`

Gauge

\--

**Dimension -- ID:** `Direct`, `Mapped`

### File descriptors

**Metric name**

**Metric**

**Type**

**Unit**

Open file descriptors

`arms_file_desc_open_count`

Gauge

\--

Open file descriptor ratio

`arms_file_desc_open_ratio`

Gauge

Ratio (0-1)

## System metrics

All system metrics are Gauge type with a 15-second collection interval.

### Common dimensions

**Dimension**

**Key**

Service name

`service`

Service PID

`pid`

Machine IP

`serverIp`

### CPU

**Metric name**

**Metric**

**Unit**

CPU idle

`arms_system_cpu_idle`

Percentage

CPU I/O wait

`arms_system_cpu_io_wait`

Percentage

CPU system

`arms_system_cpu_system`

Percentage

CPU user

`arms_system_cpu_user`

Percentage

System load (1 min)

`arms_system_load`

\--

### Disk

**Metric name**

**Metric**

**Unit**

Free disk space

`arms_system_disk_free_bytes`

Bytes

Total disk space

`arms_system_disk_total_bytes`

Bytes

Disk usage ratio

`arms_system_disk_used_ratio`

Ratio (0-1)

### Memory

**Metric name**

**Metric**

**Unit**

Buffer size

`arms_system_mem_buffers_bytes`

Bytes

Cache size

`arms_system_mem_cached_bytes`

Bytes

Free memory

`arms_system_mem_free_bytes`

Bytes

Free swap

`arms_system_mem_swap_free_bytes`

Bytes

Total swap

`arms_system_mem_swap_total_bytes`

Bytes

Total memory

`arms_system_mem_total_bytes`

Bytes

Used memory

`arms_system_mem_used_bytes`

Bytes

### Network

**Metric name**

**Metric**

**Unit**

Inbound traffic

`arms_system_net_in_bytes`

Bytes

Outbound traffic

`arms_system_net_out_bytes`

Bytes

Inbound errors

`arms_system_net_in_err`

\--

Outbound errors

`arms_system_net_out_err`

\--

## Thread pool and connection pool metrics

Metric names and dimensions differ between agent versions. Check your agent version and refer to the matching section.

### Agent V4.1.x and later

All metrics use a 15-second collection interval.

#### Thread pool metrics

**Metric name**

**Metric**

**Type**

Core thread count

`arms_thread_pool_core_pool_size`

Gauge

Maximum thread count

`arms_thread_pool_max_pool_size`

Gauge

Active thread count

`arms_thread_pool_active_thread_count`

Gauge

Current thread count

`arms_thread_pool_current_thread_count`

Gauge

Peak thread count

`arms_thread_pool_max_thread_count`

Gauge

Scheduled task count

`arms_thread_pool_scheduled_task_count`

Counter

Completed task count

`arms_thread_pool_completed_task_count`

Counter

Rejected task count

`arms_thread_pool_rejected_task_count`

Counter

Task queue size

`arms_thread_pool_queue_size`

Gauge

**Dimensions:**

**Dimension**

**Key**

**Example**

Thread name pattern

`thread_name_pattern`

`http-nio-8080-*`

Thread pool purpose

`thread_pool_usage`

Tomcat, Dubbo, Undertow

#### Connection pool metrics

**Metric name**

**Metric**

**Type**

Connections

`arms_connection_pool_connection_count`

Gauge

Minimum idle connections

`arms_connection_pool_connection_min_idle_count`

Gauge

Maximum idle connections

`arms_connection_pool_connection_max_idle_count`

Gauge

Maximum connections

`arms_connection_pool_connection_max_count`

Gauge

Pending connection requests

`arms_connection_pool_pending_request_count`

Counter

**Dimensions:**

**Dimension**

**Key**

**Description**

Connection state

`state`

`used` or `idle` (applies to `arms_connection_pool_connection_count` only)

Connection pool type

`pool_type`

Druid, c3p0, etc.

Database connection string

`url`

JDBC connection URL

### Agent versions earlier than V4.1.x

> If you use agent V4.1.x or later, refer to the previous section instead.

All metrics are Gauge type with a 15-second collection interval.

**Common dimensions:** `service`, `pid`, `serverIp`, `name` (thread pool name), `type` (thread pool type)

**Metric name**

**Metric**

Core pool size

`arms_threadpool_core_size`

Maximum pool size

`arms_threadpool_max_size`

Active thread count

`arms_threadpool_active_size`

Queue size

`arms_threadpool_queue_size`

Current pool size

`arms_threadpool_current_size`

Task count by state

`arms_threadpool_task_total`

**Dimension for `arms_threadpool_task_total` -- Status:** `Scheduled`, `Completed`, `Rejected`

## Scheduled task metrics

Available only for scheduled tasks.

All metrics are Gauge type with a 15-second collection interval.

### Common dimensions

**Dimension**

**Key**

Service name

`service`

Service PID

`pid`

Machine IP

`serverIp`

Task ID

`rpc`

### Metric list

**Metric name**

**Metric**

**Unit**

Scheduling delay

`arms_$callType_delay_milliseconds`

Milliseconds

Replace `$callType` with the scheduled task type: `xxl_job`, `spring_scheduled`, `quartz`, `elasticjob`, `jdk_timer`, or `schedulerx`.

## Go runtime metrics

All Go runtime metrics use a 15-second collection interval.

### Common dimensions

**Dimension**

**Key**

Service name

`service`

Service PID

`pid`

Machine IP

`serverIp`

### Metric list

**Metric name**

**Metric**

**Type**

Application uptime

`arms_golang_runtime_uptime`

Int64Counter

Goroutine count

`arms_golang_process_runtime_go_goroutines`

Gauge

Heap allocated memory

`arms_golang_process_runtime_go_mem_heap_alloc`

Gauge

Idle heap memory

`arms_golang_process_runtime_go_mem_heap_idle`

Gauge

In-use heap memory

`arms_golang_process_runtime_go_mem_heap_inuse`

Gauge

Heap object count

`arms_golang_process_runtime_go_mem_heap_objects`

Gauge

Released heap memory

`arms_golang_process_runtime_go_mem_heap_released`

Gauge

System-requested virtual memory

`arms_golang_process_runtime_go_mem_heap_sys`

Gauge

Live object count

`arms_golang_process_runtime_go_mem_live_objects`

Gauge

GC cycle count

`arms_golang_process_runtime_go_gc_count`

Gauge

Cumulative STW GC pause time

`arms_golang_process_runtime_go_gc_pause_total_ns`

Int64Counter

GC pause time distribution

`arms_golang_process_runtime_go_gc_pause_ns`

Int64Histogram

## Service access types and dimensions

When querying business metrics (`arms_$callType_requests_*`), replace `$callType` with one of the access types listed below. Each category has its own set of available dimensions.

### Client-side types

**Access types:** `http_client`, `dubbo_client`, `hsf_client`, `dsf_client`, `notify_client`, `grpc_client`, `thrift_client`, `sofa_client`, `mq_client`, `kafka_client`

**Dimension**

**Key**

**Description**

Upstream service name

`parent`

Caller service

Upstream service PID

`ppid`

Caller process ID

Peer extended info

`destId`

Additional request peer metadata

Peer address

`endpoint`

Request peer address

Exception ID

`excepType`

Exception identifier

Exception encoding rule

`excepInfo`

Exception ID encoding format

Exception name

`excepName`

Exception class name

Stack trace ID

`stackTraceId`

Trace identifier for stack analysis

### Database types

**Access types:** `mysql`, `oracle`, `mariadb`, `postgresql`, `ppas`, `sqlserver`, `mongodb`, `dmdb`

**Dimension**

**Key**

**Description**

Upstream service name

`parent`

Caller service

Upstream service PID

`ppid`

Caller process ID

Database name

`destId`

Target database

Database address

`endpoint`

Connection endpoint

Exception ID

`excepType`

Exception identifier

Exception encoding rule

`excepInfo`

Exception ID encoding format

Exception name

`excepName`

Exception class name

Stack trace ID

`stackTraceId`

Trace identifier for stack analysis

SQL statement ID

`sqlId`

SQL identifier

### Server-side types

**Access types:** `http`, `dubbo`, `hsf`, `dsf`, `user_method`, `mq`, `kafka`, `grpc`, `thrift`, `sofa`

**Dimension**

**Key**

**Description**

Upstream interface

`prpc`

Caller interface

Upstream service name

`parent`

Caller service

Upstream service PID

`ppid`

Caller process ID

Service address

`endpoint`

Address of the service

Exception ID

`excepType`

Exception identifier

Exception encoding rule

`excepInfo`

Exception ID encoding format

Exception name

`excepName`

Exception class name

Stack trace ID

`stackTraceId`

Trace identifier for stack analysis

### Scheduled task types

**Access types:** `xxl_job`, `spring_scheduled`, `quartz`, `elasticjob`, `jdk_timer`, `schedulerx`

**Dimension**

**Key**

**Description**

Upstream interface

`prpc`

Caller interface

Upstream service name

`parent`

Caller service

Upstream service PID

`ppid`

Caller process ID

Exception ID

`excepType`

Exception identifier

Exception encoding rule

`excepInfo`

Exception ID encoding format

Exception name

`excepName`

Exception class name

Stack trace ID

`stackTraceId`

Trace identifier for stack analysis

## References

-   [Application monitoring overview](/help/en/arms/application-monitoring/user-guide/application/)
    
-   [Create a custom Grafana dashboard with ARMS metrics](/help/en/arms/application-monitoring/use-application-monitoring-metrics-to-generate-custom-grafana-dashboards)
