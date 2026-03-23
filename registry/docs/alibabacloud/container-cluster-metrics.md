This topic describes the basic metrics for container clusters that are supported by Managed Service for Prometheus.

**Important**

-   Billing for Managed Service for Prometheus is based on the data write volume or the number of reported data points. Metrics are divided into two types:
    
    -   Basic metrics: Managed Service for Prometheus provides free data reporting and writing for basic metrics collected from Alibaba Cloud container services, such as Container Service for Kubernetes (ACK), ACS, ASK, ACK One, and ACK Edge. This benefit does not apply to other types of container clusters.
        
    -   Custom metrics: Any metric that is not a basic metric is a custom metric. Billing for custom metrics started on January 6, 2020.
        
-   Starting from 00:00:00 (UTC+8) on November 12, 2024, Managed Service for Prometheus will adjust the scope of basic metrics collected from Alibaba Cloud container service clusters. The adjusted metric scope is described below.
    

Note that the scope of basic metrics collected by default for container clusters is limited to the metrics described in this topic.

Container cluster metrics outside this scope are custom metrics and are subject to charges. For more information about billing, see [Billing of Prometheus instances](/help/en/prometheus/product-overview/billing-description/).

**cAdvisor (Job name: \_arms/kubelet/cadvisor)**

**Metric**

**Description**

container\_cpu\_usage\_seconds\_total

Total container CPU usage time.

container\_fs\_usage\_bytes

Container file system usage in bytes.

container\_memory\_cache

Container memory cache.

container\_memory\_usage\_bytes

Container memory usage in bytes.

container\_memory\_working\_set\_bytes

Container memory working set in bytes.

container\_network\_receive\_bytes\_total

Total bytes received by the container network.

container\_network\_transmit\_bytes\_total

Total bytes transmitted by the container network.

container\_scrape\_error

Container metric scrape error.

DCGM\_CUSTOM\_CONTAINER\_CP\_ALLOCATED

The proportion of computing power allocated to a container on a GPU card relative to the total computing power of that GPU. The value ranges from 0 to 1. For exclusive GPUs or shared GPUs that only request GPU memory, this metric is 0, which indicates no limit on computing power. For example, if a GPU card has 100 units of computing power and 30 units are allocated to a container, the allocated computing power ratio for that container is 30/100 = 0.3.

DCGM\_CUSTOM\_CONTAINER\_MEM\_ALLOCATED

The GPU memory allocated to the container.

DCGM\_CUSTOM\_DEV\_FB\_ALLOCATED

The proportion of allocated GPU memory to the total GPU memory. The value ranges from 0 to 1.

DCGM\_CUSTOM\_DEV\_FB\_TOTAL

The total GPU memory of the GPU card.

DCGM\_CUSTOM\_DEV\_HEALTH

GPU health status.

DCGM\_CUSTOM\_PROCESS\_DECODE\_UTIL

The decoder utilization of the GPU thread.

DCGM\_CUSTOM\_PROCESS\_ENCODE\_UTIL

The encoder utilization of the GPU thread.

DCGM\_CUSTOM\_PROCESS\_MEM\_COPY\_UTIL

The memory copy utilization of the GPU thread.

DCGM\_CUSTOM\_PROCESS\_MEM\_USED

The GPU memory currently used by the GPU thread.

DCGM\_CUSTOM\_PROCESS\_SM\_UTIL

The SM utilization of the GPU thread.

DCGM\_CUSTOM\_PROF\_MEM\_BANDWIDTH\_USED

GPU memory bandwidth usage.

DCGM\_CUSTOM\_PROF\_TENS\_TFPS\_USED

The usage of the GPU tensor core.

DCGM\_FI\_DEV\_DEC\_UTIL

Decoder utilization.

DCGM\_FI\_DEV\_ENC\_UTIL

Encoder utilization.

DCGM\_FI\_DEV\_FB\_FREE

The amount of available framebuffer memory.

DCGM\_FI\_DEV\_FB\_USED

The amount of used framebuffer memory. This value corresponds to the used value of Memory-Usage in the nvidia-smi command.

DCGM\_FI\_DEV\_GPU\_TEMP

GPU temperature.

DCGM\_FI\_DEV\_GPU\_UTIL

GPU utilization. This is the percentage of time one or more kernel functions are active on the GPU over a period, such as 1s or 1/6s, depending on the GPU product. This metric only shows that a GPU resource is in use by a kernel function, but does not show the specific usage.

DCGM\_FI\_DEV\_MEM\_CLOCK

Memory clock frequency.

DCGM\_FI\_DEV\_MEM\_COPY\_UTIL

Memory bandwidth utilization. For example, for an NVIDIA V100 GPU, the maximum memory bandwidth is 900 GB/sec. If the current memory bandwidth is 450 GB/sec, the memory bandwidth utilization is 50%.

DCGM\_FI\_DEV\_POWER\_USAGE

Power usage.

DCGM\_FI\_DEV\_SM\_CLOCK

SM clock frequency.

DCGM\_FI\_DEV\_TOTAL\_ENERGY\_CONSUMPTION

The energy consumed since the driver was loaded.

DCGM\_FI\_DEV\_XID\_ERRORS

The last XID error number that occurred within a period of time.

DCGM\_FI\_PROF\_DRAM\_ACTIVE

Memory bandwidth utilization. The fraction of cycles where data is sent to or received from the device memory.

This value is an average over the time interval, not an instantaneous value.

A higher value indicates higher utilization of the device memory.

A value of 1 (100%) means that a DRAM instruction is executed in every cycle within the time interval. In practice, a peak of about 0.8 (80%) is the maximum achievable value.

A value of 0.2 (20%) means that 20% of the cycles are used to read from or write to the device memory within the time interval.

DCGM\_FI\_PROF\_NVLINK\_RX\_BYTES

The data rate of data transmitted or received over NVLink, excluding protocol headers.

This value is an average over a time interval, not an instantaneous value.

The rate is averaged over the time interval. For example, if 1 GB of data is transmitted in 1 second, the rate is 1 GB/s, regardless of whether the data is transmitted at a constant rate or in bursts. The theoretical maximum NVLink Gen2 bandwidth is 25 GB/s per link in each direction.

DCGM\_FI\_PROF\_NVLINK\_TX\_BYTES

Total bytes transmitted over NVLink (send direction).

DCGM\_FI\_PROF\_PCIE\_RX\_BYTES

The data rate of data transmitted or received over the PCIe bus, including protocol headers and data payloads.

This value is an average over a time interval, not an instantaneous value.

The rate is averaged over the time interval. For example, if 1 GB of data is transmitted in 1 second, the rate is 1 GB/s, regardless of whether the data is transmitted at a constant rate or in bursts. The theoretical maximum PCIe Gen3 bandwidth is 985 MB/s per channel.

DCGM\_FI\_PROF\_PCIE\_TX\_BYTES

The data rate of data transmitted or received over the PCIe bus, including protocol headers and data payloads.

This value is an average over a time interval, not an instantaneous value.

The rate is averaged over the time interval. For example, if 1 GB of data is transmitted in 1 second, the rate is 1 GB/s, regardless of whether the data is transmitted at a constant rate or in bursts. The theoretical maximum PCIe Gen3 bandwidth is 985 MB/s per channel.

DCGM\_FI\_PROF\_PIPE\_TENSOR\_ACTIVE

The fraction of cycles where the Tensor (HMMA/IMMA) Pipe is active.

This value is an average over a time interval, not an instantaneous value.

A higher value indicates higher utilization of Tensor Cores.

A value of 1 (100%) means that a Tensor instruction is issued every other instruction cycle. One instruction is completed in two cycles.

A value of 0.2 (20%) could mean:

20% of the SMs' Tensor Cores are running at 100% utilization throughout the interval.

100% of the SMs' Tensor Cores are running at 20% utilization throughout the interval.

For 1/5 of the interval, 100% of the Tensor Cores on the SMs are running at 100% utilization.

Other combinations.

DCGM\_FI\_PROF\_SM\_ACTIVE

The percentage of time that at least one warp is active on a Streaming Multiprocessor (SM) within a time interval. This value is the average for all SMs and is not sensitive to the number of threads per block. A warp is active when it is scheduled and allocated resources. It can be in a computing or non-computing state, such as waiting for a memory request. A value less than 0.5 indicates inefficient GPU utilization, and a value greater than 0.8 is necessary. Assume a GPU has N SMs: If a kernel function runs on all SMs using N thread blocks throughout the interval, the value is 1 (100%). If a kernel function runs N/5 thread blocks within the interval, the value is 0.2. If a kernel function uses N thread blocks but runs for only 1/5 of the cycle time within the interval, the value is 0.2.

machine\_cpu\_cores

Number of machine CPU cores.

node\_exporter\_build\_info

Node exporter build information.

nvidia\_gpu\_duty\_cycle

NVIDIA GPU duty cycle percentage.

nvidia\_gpu\_memory\_total\_bytes

Total NVIDIA GPU memory in bytes.

nvidia\_gpu\_memory\_used\_bytes

Amount of used NVIDIA GPU memory.

nvidia\_gpu\_num\_devices

Number of NVIDIA GPU devices.

nvidia\_gpu\_power\_usage\_milliwatts

NVIDIA GPU power consumption in milliwatts.

nvidia\_gpu\_temperature\_celsius

NVIDIA GPU temperature in Celsius.

rdma\_service\_monitor\_local\_ack\_timeout\_err

Number of RDMA network timeout errors.

rdma\_service\_monitor\_out\_of\_seq

Number of out-of-sequence RDMA network datagrams.

rdma\_service\_monitor\_packet\_seq\_err

Number of out-of-sequence RDMA network packet sending errors.

rdma\_service\_monitor\_rx\_bytes

RDMA network receive throughput.

rdma\_service\_monitor\_rx\_packets

Number of received RDMA network packets.

rdma\_service\_monitor\_tx\_bytes

RDMA network send throughput.

rdma\_service\_monitor\_tx\_packets

Number of sent RDMA network packets.

up

Connectivity of metric scraping.

**ACK ControlPlane APIServer (Includes ACK Pro control plane components such as APIServer, etcd, scheduler, KCM, and CCM. ACK Dedicated clusters include only APIServer) (Job name: apiserver)**

**Metric**

**Description**

aggregator\_discovery\_aggregation\_count\_total

Total count of aggregations from aggregator discovery

aggregator\_openapi\_v2\_regeneration\_count

Aggregator OpenAPI V2 regeneration count

aggregator\_openapi\_v2\_regeneration\_duration

Aggregator OpenAPI V2 regeneration duration

aggregator\_unavailable\_apiservice

Unavailable aggregator APIService

aggregator\_unavailable\_apiservice\_count

The number of unavailable APIServices in the aggregator.

aggregator\_unavailable\_apiservice\_total

Total number of unavailable API services in the aggregator

aliyun\_prometheus\_agent\_append\_duration\_seconds

Alibaba Cloud Prometheus Agent append duration (seconds)

aliyun\_prometheus\_agent\_job\_discovery\_status

Alibaba Cloud Prometheus Agent job discovery status

aliyun\_prometheus\_agent\_scrapes\_by\_target\_total

Total scrapes by target for the Alibaba Cloud Prometheus Agent

aliyun\_prometheus\_agent\_target\_info

Alibaba Cloud Prometheus Agent target information

apiextensions\_apiserver\_validation\_ratcheting\_seconds\_bucket

APIServer validation ratcheting seconds bucket

apiextensions\_apiserver\_validation\_ratcheting\_seconds\_count

Count of APIServer validation ratcheting seconds

apiextensions\_apiserver\_validation\_ratcheting\_seconds\_sum

Sum of APIServer validation increment in seconds

apiextensions\_openapi\_v2\_regeneration\_count

Apiextensions OpenAPI V2 regeneration count

apiextensions\_openapi\_v3\_regeneration\_count

Apiextensions OpenAPI V3 regeneration count

apiserver\_accepted\_listall\_requests\_total

The total number of listall requests accepted by the APIServer.

apiserver\_admission\_controller\_admission\_duration\_seconds\_bucket

The bucket for the APIServer admission controller admission duration, in seconds.

apiserver\_admission\_controller\_admission\_duration\_seconds\_count

The number of admission requests processed by the APIServer admission controller.

apiserver\_admission\_controller\_admission\_duration\_seconds\_sum

Total admission duration for the APIServer admission controller, in seconds

apiserver\_admission\_step\_admission\_duration\_seconds\_bucket

The histogram bucket for the duration of an APIServer admission step in seconds.

apiserver\_admission\_step\_admission\_duration\_seconds\_count

Count of API server admission step durations in seconds.

apiserver\_admission\_step\_admission\_duration\_seconds\_sum

Total duration of API server admission steps in seconds

apiserver\_admission\_step\_admission\_duration\_seconds\_summary

Summary of the APIServer admission step duration in seconds.

apiserver\_admission\_step\_admission\_duration\_seconds\_summary\_count

Summary count of the admission duration of an APIServer admission step in seconds.

apiserver\_admission\_step\_admission\_duration\_seconds\_summary\_sum

The sum of the summary of the API server admission step duration, in seconds.

apiserver\_admission\_webhook\_admission\_duration\_seconds\_bucket

APIServer admission webhook admission duration seconds bucket

apiserver\_admission\_webhook\_admission\_duration\_seconds\_count

The count of APIServer admission webhook durations in seconds.

apiserver\_admission\_webhook\_admission\_duration\_seconds\_sum

Sum of the admission duration of API server admission webhooks, in seconds.

apiserver\_admission\_webhook\_fail\_open\_count

API server admission webhook fail open count

apiserver\_admission\_webhook\_rejection\_count

The number of rejections from the API server admission webhook.

apiserver\_admission\_webhook\_request\_total

Total number of API server admission webhook requests

apiserver\_audit\_error\_total

Total number of API Server audit errors

apiserver\_audit\_event\_total

Total APIServer audit events

apiserver\_audit\_level\_total

Total number of API server audit events

apiserver\_audit\_requests\_rejected\_total

Total number of rejected APIServer audit requests.

apiserver\_authorization\_decisions\_total

Total number of API server authorization decisions

apiserver\_cache\_list\_fetched\_objects\_total

The total number of objects fetched from the APIServer cache list.

apiserver\_cache\_list\_returned\_objects\_total

Total number of objects returned by the APIServer cache list

apiserver\_cache\_list\_total

Total number of APIServer cache list operations

apiserver\_cacher\_received\_events

Events received by the APIServer cache

apiserver\_cacher\_sended\_events\_latency\_milliseconds\_bucket

The distribution of latency in milliseconds for events sent by the APIServer cacher.

apiserver\_cacher\_sended\_events\_latency\_milliseconds\_count

The count of latency measurements in milliseconds for events sent by the APIServer cacher.

apiserver\_cacher\_sended\_events\_latency\_milliseconds\_sum

The total latency in milliseconds for events sent by the APIServer cacher.

apiserver\_cacher\_watcher\_channel\_length

APIServer cacher watcher channel length

apiserver\_cel\_compilation\_duration\_seconds\_bucket

Distribution of APIServer CEL compilation durations in seconds

apiserver\_cel\_compilation\_duration\_seconds\_count

Counter of API server CEL compilations

apiserver\_cel\_compilation\_duration\_seconds\_sum

Total APIServer CEL compilation duration (seconds)

apiserver\_cel\_evaluation\_duration\_seconds\_bucket

Distribution of APIServer CEL evaluation durations in seconds.

apiserver\_cel\_evaluation\_duration\_seconds\_count

The number of API server CEL evaluations.

apiserver\_cel\_evaluation\_duration\_seconds\_sum

Total duration of APIServer CEL evaluation in seconds

apiserver\_client\_certificate\_expiration\_seconds\_bucket

Distribution of seconds remaining before the API server client certificate expires.

apiserver\_client\_certificate\_expiration\_seconds\_count

The number of seconds before the API server client certificate expires.

apiserver\_client\_certificate\_expiration\_seconds\_sum

The total number of seconds remaining before the APIServer client certificate expires.

apiserver\_clusterip\_repair\_ip\_errors\_total

Total ClusterIP errors repaired by the API server

apiserver\_clusterip\_repair\_reconcile\_errors\_total

The total number of reconciliation errors for ClusterIP repairs by the APIServer.

apiserver\_conversion\_webhook\_duration\_seconds\_bucket

The distribution of API server conversion webhook durations in seconds.

apiserver\_conversion\_webhook\_duration\_seconds\_count

The number of APIServer conversion webhook calls

apiserver\_conversion\_webhook\_duration\_seconds\_sum

Total duration of API server conversion webhooks in seconds

apiserver\_conversion\_webhook\_request\_total

Total number of API server conversion webhook requests

apiserver\_crd\_conversion\_webhook\_duration\_seconds\_bucket

The distribution of API Server CRD conversion webhook durations in seconds.

apiserver\_crd\_conversion\_webhook\_duration\_seconds\_count

Count of calls to the APIServer CRD conversion webhook

apiserver\_crd\_conversion\_webhook\_duration\_seconds\_sum

Total duration of APIServer CRD conversion webhooks in seconds.

apiserver\_crd\_webhook\_conversion\_duration\_seconds\_bucket

Distribution of APIServer CRD webhook conversion duration in seconds.

apiserver\_crd\_webhook\_conversion\_duration\_seconds\_count

The total number of APIServer CRD webhook conversions.

apiserver\_crd\_webhook\_conversion\_duration\_seconds\_sum

Total duration of APIServer CRD webhook conversions in seconds.

apiserver\_created\_watchers

Number of watchers created by the API server

apiserver\_current\_inflight\_requests

The number of requests the APIServer is currently processing.

apiserver\_current\_inqueue\_requests

The current number of requests in the API server queue.

apiserver\_dropped\_requests\_total

The total number of requests dropped by the APIServer.

apiserver\_encryption\_config\_controller\_automatic\_reload\_failures\_total

Number of failed automatic reloads for the APIServer encryption configuration controller

apiserver\_encryption\_config\_controller\_automatic\_reload\_success\_total

Number of successful automatic reloads for the APIServer encryption configuration controller

apiserver\_envelope\_encryption\_dek\_cache\_fill\_percent

APIServer envelope encryption DEK cache fill percentage

apiserver\_error\_watchers

Number of APIServer fault observers

apiserver\_flowcontrol\_current\_executing\_requests

Number of requests currently being executed by the APIServer throttle

apiserver\_flowcontrol\_current\_executing\_seats

Number of seats currently used by the APIServer throttle

apiserver\_flowcontrol\_current\_inqueue\_requests

Number of requests in the APIServer throttle queue

apiserver\_flowcontrol\_current\_inqueue\_seats

Number of seats in the APIServer throttle queue

apiserver\_flowcontrol\_current\_limit\_seats

Current seat limit for the API server throttle

apiserver\_flowcontrol\_current\_r

Current R value of the APIServer throttle

apiserver\_flowcontrol\_demand\_seats\_average

Average value of requested seats for APIServer throttling

apiserver\_flowcontrol\_demand\_seats\_bucket

Seat distribution for throttled API server requests

apiserver\_flowcontrol\_demand\_seats\_count

APIServer throttle request seat count

apiserver\_flowcontrol\_demand\_seats\_high\_watermark

APIServer throttling request seats high-water mark

apiserver\_flowcontrol\_demand\_seats\_smoothed

Smoothing value for APIServer throttle request seats

apiserver\_flowcontrol\_demand\_seats\_stdev

Standard deviation of request seats for APIServer throttling

apiserver\_flowcontrol\_demand\_seats\_sum

Total requested seats for APIServer throttling

apiserver\_flowcontrol\_dispatch\_r

APIServer throttle scheduling R value

apiserver\_flowcontrol\_dispatched\_requests\_total

Total number of requests scheduled by APIServer throttling

apiserver\_flowcontrol\_latest\_s

Recent S value limit for APIServer throttling

apiserver\_flowcontrol\_lower\_limit\_seats

Minimum seats for APIServer throttling

apiserver\_flowcontrol\_next\_discounted\_s\_bounds

Next discounted S-value threshold for the APIServer throttle

apiserver\_flowcontrol\_next\_s\_bounds

Next S value threshold for APIServer throttling

apiserver\_flowcontrol\_nominal\_limit\_seats

Nominal seat limit for APIServer throttling

apiserver\_flowcontrol\_priority\_level\_request\_count\_samples\_bucket

Sample distribution of APIServer requests by throttling priority level

apiserver\_flowcontrol\_priority\_level\_request\_count\_samples\_count

Sample count of APIServer requests per throttling priority level

apiserver\_flowcontrol\_priority\_level\_request\_count\_samples\_sum

Sum of sampled request counts for the APIServer throttling priority level

apiserver\_flowcontrol\_priority\_level\_request\_count\_watermarks\_bucket

Distribution of request count watermarks across APIServer flow control priority levels

apiserver\_flowcontrol\_priority\_level\_request\_count\_watermarks\_count

API server throttling priority level: request count watermark mark count

apiserver\_flowcontrol\_priority\_level\_request\_count\_watermarks\_sum

Sum of request watermarks for APIServer throttling priority levels

apiserver\_flowcontrol\_priority\_level\_request\_utilization\_bucket

Distribution of APIServer request utilization by flow control priority level

apiserver\_flowcontrol\_priority\_level\_request\_utilization\_count

APIServer throttle priority level request utilization count

apiserver\_flowcontrol\_priority\_level\_request\_utilization\_sum

Total request utilization across APIServer throttling priority levels

apiserver\_flowcontrol\_priority\_level\_seat\_count\_samples\_bucket

Sample distribution of seats across APIServer throttling priority levels

apiserver\_flowcontrol\_priority\_level\_seat\_count\_samples\_count

APIServer throttling priority level seats sample count

apiserver\_flowcontrol\_priority\_level\_seat\_count\_samples\_sum

Sum of seat count samples for the APIServer throttle priority level

apiserver\_flowcontrol\_priority\_level\_seat\_count\_watermarks\_bucket

Distribution of seat watermarks for API server priority levels

apiserver\_flowcontrol\_priority\_level\_seat\_count\_watermarks\_count

APIServer throttle priority level seats watermark mark count

apiserver\_flowcontrol\_priority\_level\_seat\_count\_watermarks\_sum

Total seats at the watermark for the APIServer throttling priority level

apiserver\_flowcontrol\_priority\_level\_seat\_utilization\_bucket

API server: Seat utilization distribution by throttle priority level

apiserver\_flowcontrol\_priority\_level\_seat\_utilization\_count

APIServer flow control priority level seat utilization count

apiserver\_flowcontrol\_priority\_level\_seat\_utilization\_sum

Total seat utilization across API server throttling priority levels

apiserver\_flowcontrol\_read\_vs\_write\_current\_requests\_bucket

Current request count in the APIServer read/write throttle bucket

apiserver\_flowcontrol\_read\_vs\_write\_current\_requests\_count

Current read/write request count for APIServer throttling

apiserver\_flowcontrol\_read\_vs\_write\_current\_requests\_sum

Sum of current read and write requests throttled by the APIServer

apiserver\_flowcontrol\_read\_vs\_write\_request\_count\_samples\_bucket

Sample bucket for the read/write request count of the APIServer throttle.

apiserver\_flowcontrol\_read\_vs\_write\_request\_count\_samples\_count

Number of samples for the APIServer throttled read/write request counter

apiserver\_flowcontrol\_read\_vs\_write\_request\_count\_samples\_sum

Total count of throttled APIServer read/write requests

apiserver\_flowcontrol\_read\_vs\_write\_request\_count\_watermarks\_bucket

APIServer throttling read/write request count watermark bucket

apiserver\_flowcontrol\_read\_vs\_write\_request\_count\_watermarks\_count

APIServer throttled read/write request count watermark

apiserver\_flowcontrol\_read\_vs\_write\_request\_count\_watermarks\_sum

Total count watermark for APIServer throttled read/write requests

apiserver\_flowcontrol\_rejected\_requests\_total

Total requests rejected by APIServer throttling

apiserver\_flowcontrol\_request\_concurrency\_in\_use

APIServer throttled concurrent requests

apiserver\_flowcontrol\_request\_concurrency\_limit

Concurrency limit for APIServer request throttling

apiserver\_flowcontrol\_request\_dispatch\_no\_accommodation\_total

The API server request throttling scheduler cannot accommodate the total number of requests.

apiserver\_flowcontrol\_request\_execution\_seconds\_bucket

APIServer throttled request execution time in seconds (buckets)

apiserver\_flowcontrol\_request\_execution\_seconds\_count

Total execution time in seconds for throttled APIServer requests

apiserver\_flowcontrol\_request\_execution\_seconds\_sum

Sum of execution seconds for throttled APIServer requests

apiserver\_flowcontrol\_request\_queue\_length\_after\_enqueue\_bucket

Post-enqueue length buckets of the APIServer request throttling queue

apiserver\_flowcontrol\_request\_queue\_length\_after\_enqueue\_count

Count of requests in the APIServer throttling queue

apiserver\_flowcontrol\_request\_queue\_length\_after\_enqueue\_sum

Total enqueued requests in APIServer throttling queues

apiserver\_flowcontrol\_request\_wait\_duration\_seconds\_bucket

APIServer request throttling wait time bucket (seconds)

apiserver\_flowcontrol\_request\_wait\_duration\_seconds\_count

Total wait time in seconds for throttled APIServer requests

apiserver\_flowcontrol\_request\_wait\_duration\_seconds\_sum

Total wait time in seconds for throttled APIServer requests

apiserver\_flowcontrol\_seat\_fair\_frac

The APIServer contains the fair allocation ratio from the previous borrowing adjustment period.

apiserver\_flowcontrol\_target\_seats

Target seat count for API server throttling

apiserver\_flowcontrol\_upper\_limit\_seats

Maximum number of seats for APIServer throttling

apiserver\_flowcontrol\_watch\_count\_samples\_bucket

APIServer throttle observation count sample bucket

apiserver\_flowcontrol\_watch\_count\_samples\_count

APIServer throttle observation sample count

apiserver\_flowcontrol\_watch\_count\_samples\_sum

Sum of APIServer throttle observation counts

apiserver\_flowcontrol\_work\_estimated\_seats\_bucket

APIServer flow control's bucket for estimated work seats

apiserver\_flowcontrol\_work\_estimated\_seats\_count

APIServer flow control estimated seat count

apiserver\_flowcontrol\_work\_estimated\_seats\_sum

Total estimated seats for APIServer throttling work

apiserver\_init\_events\_total

Total APIServer initialization events

apiserver\_kube\_aggregator\_x509\_insecure\_sha1\_total

Number of requests using insecure SHA1 signatures

apiserver\_kube\_aggregator\_x509\_missing\_san\_total

APIServer kube-aggregator: Total missing x509 SANs

apiserver\_longrunning\_gauge

APIServer long-running gauge

apiserver\_longrunning\_requests

Long-running APIServer requests

apiserver\_nodeport\_repair\_reconcile\_errors\_total

Total reconciliation faults for APIServer node port repairs

apiserver\_realtime\_watchers

Number of real-time APIServer observers

apiserver\_registered\_watchers

Number of registered observers in APIServer

apiserver\_request\_aborts\_total

Total aborted APIServer requests

apiserver\_request\_body\_size\_bytes\_bucket

APIServer request body size in bytes bucket

apiserver\_request\_body\_size\_bytes\_count

APIServer request body size in bytes

apiserver\_request\_body\_size\_bytes\_sum

Total APIServer request body size in bytes

apiserver\_request\_count

Number of API server requests

apiserver\_request\_duration\_seconds\_bucket

Buckets for APIServer request processing time (in seconds)

apiserver\_request\_duration\_seconds\_count

Count of APIServer request duration in seconds

apiserver\_request\_duration\_seconds\_sum

Total APIServer request duration in seconds

apiserver\_request\_filter\_duration\_seconds\_bucket

APIServer request filter duration bucket (seconds)

apiserver\_request\_filter\_duration\_seconds\_count

Count of APIServer request filter durations in seconds.

apiserver\_request\_filter\_duration\_seconds\_sum

Total duration of APIServer request filters in seconds

apiserver\_request\_latencies\_summary

APIServer request latency distribution summary

apiserver\_request\_no\_resourceversion\_list\_total

Total LIST requests for versions without resources

apiserver\_request\_post\_timeout\_total

Total POST API Request Timeouts

apiserver\_request\_sli\_duration\_seconds\_bucket

API request Service Level Indicator (SLI) duration seconds bucket

apiserver\_request\_sli\_duration\_seconds\_count

Total API request SLI duration in seconds

apiserver\_request\_sli\_duration\_seconds\_sum

Total API request SLI duration in seconds

apiserver\_request\_slo\_duration\_seconds\_bucket

API request SLO duration bucket (seconds)

apiserver\_request\_slo\_duration\_seconds\_count

API request SLO duration seconds count

apiserver\_request\_slo\_duration\_seconds\_sum

Total API request SLO duration in seconds

apiserver\_request\_terminations\_total

Total stopped API requests

apiserver\_request\_timestamp\_comparison\_time\_bucket

Distribution buckets for API request timestamp differences

apiserver\_request\_timestamp\_comparison\_time\_count

API request timestamp comparison sample count

apiserver\_request\_timestamp\_comparison\_time\_sum

Total time for API request timestamp comparison

apiserver\_request\_total

Total API requests

apiserver\_requested\_deprecated\_apis

Number of requests to the API server for deprecated APIs

apiserver\_response\_sizes\_bucket

API response size distribution buckets

apiserver\_response\_sizes\_count

API response size count

apiserver\_response\_sizes\_sum

Total API response size

apiserver\_selfrequest\_total

Total API server self-requests

apiserver\_storage\_data\_key\_generation\_duration\_seconds\_bucket

APIServer storage data key generation duration: seconds buckets

apiserver\_storage\_data\_key\_generation\_duration\_seconds\_count

Count of data key generations by APIServer storage

apiserver\_storage\_data\_key\_generation\_duration\_seconds\_sum

Total data key generation time for APIServer storage, in seconds

apiserver\_storage\_data\_key\_generation\_failures\_total

Total number of data key generation failures for the APIServer store

apiserver\_storage\_db\_total\_size\_in\_bytes

Total size of the APIServer database (bytes)

apiserver\_storage\_decode\_errors\_total

Total APIServer storage decoding errors

apiserver\_storage\_envelope\_transformation\_cache\_misses\_total

Total cache misses for the envelope transform in APIServer storage

apiserver\_storage\_events\_received\_total

Total number of events accepted and stored by the APIServer

apiserver\_storage\_list\_evaluated\_objects\_total

Total objects evaluated from APIServer storage for list operations

apiserver\_storage\_list\_fetched\_objects\_total

Total objects retrieved from the APIServer storage list

apiserver\_storage\_list\_returned\_objects\_total

Total number of objects in a list response from the APIServer

apiserver\_storage\_list\_total

Total APIServer storage list operations

apiserver\_storage\_objects

Number of APIServer objects

apiserver\_storage\_size\_bytes

APIServer storage size (bytes)

apiserver\_terminated\_watchers\_total

Total number of observers for APIServer stop

apiserver\_tls\_handshake\_errors\_total

Total failed TLS handshake requests for the API server

apiserver\_too\_large\_resourceversion\_errors

Number of error requests to APIServer due to oversized resource versions

apiserver\_watch\_cache\_events\_dispatched\_total

Total number of events distributed by the APIServer observation cache

apiserver\_watch\_cache\_events\_received\_total

Total events accepted by the APIServer observation cache

apiserver\_watch\_cache\_initializations\_total

Total APIServer watch cache initializations

apiserver\_watch\_cache\_read\_wait\_seconds\_bucket

APIServer watch cache read wait time bucket (seconds)

apiserver\_watch\_cache\_read\_wait\_seconds\_count

APIServer observation cache read wait seconds count

apiserver\_watch\_cache\_read\_wait\_seconds\_sum

Sum of wait time in seconds for APIServer observation cache reads

apiserver\_watch\_cache\_watch\_cache\_initializations\_total

Total APIServer observation cache initializations

apiserver\_watch\_events\_sizes\_bucket

API server observation event size distribution buckets

apiserver\_watch\_events\_sizes\_count

APIServer observation event size count

apiserver\_watch\_events\_sizes\_sum

Total size of APIServer observation events

apiserver\_watch\_events\_total

Total APIServer observation events

apiserver\_webhooks\_x509\_insecure\_sha1\_total

Number of requests that use insecure SHA1 signatures

apiserver\_webhooks\_x509\_missing\_san\_total

Total missing SANs in APIServerWebhooks

authenticated\_user\_requests

Total number of authenticated user requests

authentication\_attempts

Authentication attempts

authentication\_duration\_seconds\_bucket

Authentication procedure duration buckets (seconds)

authentication\_duration\_seconds\_count

Authentication procedure duration (seconds)

authentication\_duration\_seconds\_sum

Total authentication duration in seconds

authentication\_token\_cache\_active\_fetch\_count

Authentication token cache proactive fetch count

authentication\_token\_cache\_fetch\_total

Total authentication token cache retrievals

authentication\_token\_cache\_request\_duration\_seconds\_bucket

Authentication token cache request latency distribution buckets (seconds)

authentication\_token\_cache\_request\_duration\_seconds\_count

Authentication token cache request latency counter (seconds)

authentication\_token\_cache\_request\_duration\_seconds\_sum

Total duration of authentication token cache requests in seconds

authentication\_token\_cache\_request\_total

Total authentication token cache requests

authorization\_attempts\_total

Total authorization attempts

authorization\_duration\_seconds\_bucket

Distribution buckets for authorization procedure duration (seconds)

authorization\_duration\_seconds\_count

Authorization procedure duration in seconds

authorization\_duration\_seconds\_sum

Total authorization procedure duration in seconds

cardinality\_enforcement\_unexpected\_categorizations\_total

Total by execution and exception category

count

Count

cpu\_utilization\_core

CPU utilization (core)

disabled\_metric\_total

Total disabled metrics

disabled\_metrics\_total

Total disabled metrics

etcd\_bookmark\_counts

Etcd bookmark count

etcd\_db\_total\_size\_in\_bytes

Total etcd database size (bytes)

etcd\_lease\_object\_counts\_bucket

Histogram buckets for etcd lease object count

etcd\_lease\_object\_counts\_count

Total ETCD lease object count

etcd\_lease\_object\_counts\_sum

Total etcd lease object count

etcd\_object\_counts

ETCD object count

etcd\_request\_duration\_seconds\_bucket

Bucket counter for ETCD request processing time (in seconds)

etcd\_request\_duration\_seconds\_count

ETCD request duration count (seconds)

etcd\_request\_duration\_seconds\_sum

Sum of etcd request durations in seconds

etcd\_request\_errors\_total

Total ETCD request faults

etcd\_requests\_total

Total etcd requests

etcd\_watcher\_channel\_length

etcd observer channel length

etcd\_watcher\_received\_events

Events received by the ETCD observer

etcd\_watcher\_sended\_events\_latency\_milliseconds\_bucket

Distribution bucket for etcd observer event send latency (ms)

etcd\_watcher\_sent\_events\_latency\_milliseconds\_count

ETCD observer event send latency in milliseconds

etcd\_watcher\_sent\_events\_latency\_milliseconds\_sum

Sum of etcd observer send event latency in milliseconds

field\_validation\_request\_duration\_seconds\_bucket

Field validation request duration distribution bucket (seconds)

field\_validation\_request\_duration\_seconds\_count

Field validation request duration count (seconds)

field\_validation\_request\_duration\_seconds\_sum

Total field authentication request duration in seconds

get\_token\_count

Get token count

get\_token\_fail\_count

Failed token acquisition count

grpc\_client\_handled\_total

gRPC client: Total processed

grpc\_client\_msg\_received\_total

gRPC client: Total messages received

grpc\_client\_msg\_sent\_total

gRPC client: Total messages sent

grpc\_client\_started\_total

gRPC Client: Total Starts

hidden\_metric\_total

Hidden metric: Total

hidden\_metrics\_total

Hidden metric: Total

http\_request\_duration\_microseconds

HTTP request: Duration (microseconds)

http\_request\_size\_bytes

HTTP request: size (bytes)

http\_requests\_total

HTTP requests: Total

http\_response\_size\_bytes

HTTP response size (bytes)

Job

Job name

job\_instance\_mode

Job instance pattern

kube\_apiserver\_clusterip\_allocator\_allocated\_ips

Kubernetes APIServer: number of IPs allocated by the ClusterIP allocator

kube\_apiserver\_clusterip\_allocator\_allocation\_errors\_total

Kubernetes API server: Total ClusterIP allocator allocation errors

kube\_apiserver\_clusterip\_allocator\_allocation\_total

Kubernetes APIServer: Total allocations by the ClusterIP allocator

kube\_apiserver\_clusterip\_allocator\_available\_ips

Kubernetes API server: Available IP address count for the ClusterIP allocator

kube\_apiserver\_nodeport\_allocator\_allocated\_ports

Kubernetes APIServer: Number of ports allocated by the NodePort allocator

kube\_apiserver\_nodeport\_allocator\_allocation\_errors\_total

Kubernetes APIServer: Total NodePort allocator allocation faults

kube\_apiserver\_nodeport\_allocator\_allocation\_total

Kubernetes APIServer: Total allocations by the NodePort allocator

kube\_apiserver\_nodeport\_allocator\_available\_ports

Kubernetes APIServer: Number of available ports for the NodePort allocator

kube\_apiserver\_pod\_logs\_backend\_tls\_failure\_total

Kubernetes APIServer: Total number of pods/logs requests due to TLS authentication failure

kube\_apiserver\_pod\_logs\_insecure\_backend\_total

Kubernetes APIServer: Total insecure pods/logs requests

kube\_apiserver\_pod\_logs\_pods\_logs\_backend\_tls\_failure\_total

Kubernetes API server: Total pods/logs requests that failed TLS authentication

kube\_apiserver\_pod\_logs\_pods\_logs\_insecure\_backend\_total

Kubernetes API server: Number of insecure pods/logs requests

kubelet\_container\_log\_filesystem\_used\_bytes

Kubelet: File system usage for container logs in bytes

kubelet\_node\_name

Kubelet: Node name

kubelet\_pleg\_relist\_duration\_seconds\_bucket

Kubelet: PLEG relist duration buckets (seconds)

kubelet\_pod\_worker\_duration\_seconds\_bucket

Kubelet: bucketing of pod worker duration in seconds

kubelet\_volume\_stats\_available\_bytes

Kubelet: Available bytes in volume stats

kubelet\_volume\_stats\_capacity\_bytes

Kubelet: Capacity in bytes from volume statistics

kubelet\_volume\_stats\_inodes

Kubelet: Volume statistics for available inodes

kubelet\_volume\_stats\_inodes\_free

Kubelet: Free inode count on the volume

kubelet\_volume\_stats\_inodes\_used

Kubelet: Used inode count for the volume

kubelet\_volume\_stats\_used\_bytes

Kubelet: Volume used bytes

kubernetes\_build\_info

Kubernetes build information

kubernetes\_feature\_enabled

Kubernetes feature status: Enabled

last\_list\_all\_response\_size\_in\_bytes

Total size of the last list response (bytes)

memory\_utilization\_byte

Memory utilization: Bytes

node\_authorizer\_graph\_actions\_duration\_seconds\_bucket

Node authorizer: Graph operation duration bucketing in seconds

node\_authorizer\_graph\_actions\_duration\_seconds\_count

Node authorizer: Graph operation duration in seconds

node\_authorizer\_graph\_actions\_duration\_seconds\_sum

Node authorizer: Total duration of graph operations in seconds

pod\_security\_evaluations\_total

Total pod security assessments

pod\_security\_exemptions\_total

Total pod security exemptions

process\_cpu\_seconds\_total

Total process CPU time in seconds

process\_max\_fds

Maximum number of file descriptors per process

process\_open\_fds

Number of open file descriptors for the process

process\_resident\_memory\_bytes

Process resident memory in bytes

process\_start\_time\_seconds

Process startup time (seconds)

process\_virtual\_memory\_bytes

Process virtual memory in bytes

process\_virtual\_memory\_max\_bytes

Maximum virtual memory of a process in bytes

registered\_metric\_total

Registration metric: Total count

registered\_metrics\_total

Registration metrics: Total

rest\_client\_exec\_plugin\_certificate\_rotation\_age\_bucket

REST client plugin: Certificate rotation age bucketing (seconds)

rest\_client\_exec\_plugin\_certificate\_rotation\_age\_count

REST client plugin: Certificate rotation age in seconds

rest\_client\_exec\_plugin\_certificate\_rotation\_age\_sum

REST client plugin: Sum of certificate rotation age in seconds

rest\_client\_exec\_plugin\_ttl\_seconds

REST client plugin: Certificate TTL in seconds

rest\_client\_request\_duration\_seconds\_bucket

REST client: Request duration bucketing in seconds

rest\_client\_request\_duration\_seconds\_count

REST client: Request duration count in seconds

rest\_client\_request\_duration\_seconds\_sum

REST client: Total request duration in seconds

rest\_client\_request\_latency\_seconds\_bucket

REST client: Request latency bucketing in seconds

rest\_client\_request\_size\_bytes\_bucket

REST client: Request size bucketing (bytes)

rest\_client\_request\_size\_bytes\_count

REST client: Request byte count

rest\_client\_request\_size\_bytes\_sum

REST client: Total request size (bytes)

rest\_client\_requests\_total

REST client: Total requests

rest\_client\_response\_size\_bytes\_bucket

REST client: Response size (bytes) bucketing

rest\_client\_response\_size\_bytes\_count

REST client: Response byte count

rest\_client\_response\_size\_bytes\_sum

REST client: Total response size (bytes)

rest\_client\_transport\_cache\_entries

REST client: number of transport cache entries

rest\_client\_transport\_create\_calls\_total

REST client: Total transport creation calls

scheduler\_pending\_pods

Scheduler: Number of pending pods

scheduler\_pod\_scheduling\_attempts\_bucket

Scheduler: pod scheduling attempt count bucketing

scheduler\_scheduler\_cache\_size

Scheduler: Scheduler cache size

scrape\_duration\_seconds

Scrape duration (seconds)

scrape\_samples\_post\_metric\_relabeling

Number of scraped samples (after metric relabeling)

scrape\_samples\_scraped

Number of scraped samples

scrape\_series\_added

Number of new series scraped

serviceaccount\_invalid\_legacy\_auto\_token\_uses\_total

Total uses of invalid legacy automated service account tokens

serviceaccount\_legacy\_auto\_token\_uses\_total

Total usage count of legacy automated service account tokens

serviceaccount\_legacy\_manual\_token\_uses\_total

Total uses of legacy manual service account tokens

serviceaccount\_legacy\_tokens\_total

Total number of legacy service account tokens

serviceaccount\_stale\_tokens\_total

Total number of legacy service account tokens

serviceaccount\_valid\_tokens\_total

Total valid service account tokens

ssh\_tunnel\_open\_count

Open SSH tunnel count

ssh\_tunnel\_open\_fail\_count

Number of failed SSH tunnel openings

up

Metric collection connectivity

watch\_cache\_capacity

Monitor cache capacity

watch\_cache\_capacity\_decrease\_total

Total reduction in cache capacity

watch\_cache\_capacity\_increase\_total

Total increase in monitoring cache capacity

workqueue\_adds\_total

Total additions to the work queue

workqueue\_depth

Work queue depth

workqueue\_longest\_running\_processor\_seconds

Longest processor run time in the work queue (seconds)

workqueue\_queue\_duration\_seconds\_bucket

Work queue queuing duration (seconds) quantile bucket

workqueue\_queue\_duration\_seconds\_count

Total work queue wait time (seconds)

workqueue\_queue\_duration\_seconds\_sum

Sum of work queue wait time (seconds)

workqueue\_retries\_total

Total work queue retries

workqueue\_unfinished\_work\_seconds

Duration of pending work in the work queue (seconds)

workqueue\_work\_duration\_seconds\_bucket

Work queue duration (seconds) quantile bucket

workqueue\_work\_duration\_seconds\_count

Work queue processing time (seconds)

workqueue\_work\_duration\_seconds\_sum

Total work queue duration (seconds)

**Node Exporter (Job name: node-exporter)**

**Metric**

**Description**

aliyun\_prometheus\_agent\_append\_duration\_seconds

Duration of append operations for the Alibaba Cloud Prometheus agent in seconds.

aliyun\_prometheus\_agent\_job\_discovery\_status

Discovery status of scrape jobs for the Alibaba Cloud Prometheus agent.

aliyun\_prometheus\_agent\_scrapes\_by\_target\_total

Total number of scrapes by target for the Alibaba Cloud Prometheus agent.

aliyun\_prometheus\_agent\_target\_info

Information about the targets of the Alibaba Cloud Prometheus agent.

job

The name of the job.

node\_boot\_time\_seconds

Node boot time in seconds.

node\_context\_switches\_total

Total number of context switches on the node.

node\_cpu\_seconds\_total

Total CPU time spent by the node.

node\_disk\_io\_now

Current disk I/O on the node.

node\_disk\_io\_time\_seconds\_total

Total time spent on disk I/O on the node, in seconds.

node\_disk\_io\_time\_weighted\_seconds\_total

Total weighted time spent on disk I/O on the node, in seconds.

node\_disk\_read\_bytes\_total

Total bytes read from disk on the node.

node\_disk\_read\_time\_seconds\_total

Total time spent reading from disk on the node, in seconds.

node\_disk\_reads\_completed\_total

Total number of completed disk reads on the node.

node\_disk\_reads\_merged\_total

Total number of merged disk reads on the node.

node\_disk\_write\_time\_seconds\_total

Total time spent writing to disk on the node, in seconds.

node\_disk\_writes\_completed\_total

Total number of completed disk writes on the node.

node\_disk\_writes\_merged\_total

Total number of merged disk writes on the node.

node\_disk\_written\_bytes\_total

Total bytes written to disk on the node.

node\_exporter\_build\_info

Build information for Node Exporter.

node\_filefd\_allocated

Number of allocated file descriptors on the node.

node\_filefd\_maximum

Maximum number of file descriptors on the node.

node\_filesystem\_avail\_bytes

Number of available bytes in the file system on the node.

node\_filesystem\_free\_bytes

Number of free bytes in the file system on the node.

node\_filesystem\_size\_bytes

Total size of the file system on the node, in bytes.

node\_intr\_total

Total number of interrupts on the node.

node\_load1

1-minute load average on the node.

node\_load15

15-minute load average on the node.

node\_load5

5-minute load average on the node.

node\_memory\_MemAvailable\_bytes

Available memory on the node, in bytes.

node\_memory\_MemFree\_bytes

Free memory on the node, in bytes.

node\_memory\_MemTotal\_bytes

Total memory on the node, in bytes.

node\_memory\_Slab\_bytes

Slab memory on the node, in bytes.

node\_memory\_SReclaimable\_bytes

Reclaimable slab memory on the node, in bytes.

node\_netstat\_Tcp\_InErrs

Number of TCP receive errors.

node\_netstat\_Tcp\_InSegs

Number of received TCP segments.

node\_netstat\_Tcp\_OutSegs

Number of sent TCP segments.

node\_netstat\_Tcp\_PassiveOpens

Number of passive TCP connection openings.

node\_netstat\_Tcp\_RetransSegs

Number of retransmitted TCP segments.

node\_network\_receive\_bytes\_total

Total number of bytes received over the network.

node\_network\_receive\_drop\_total

Total number of received packets dropped.

node\_network\_receive\_errs\_total

Total number of receive errors.

node\_network\_receive\_packets\_total

Total number of packets received.

node\_network\_transmit\_bytes\_total

Total number of bytes transmitted over the network.

node\_network\_transmit\_drop\_total

Total number of transmitted packets dropped.

node\_network\_transmit\_errs\_total

Total number of transmit errors.

node\_network\_transmit\_packets\_total

Total number of packets transmitted.

node\_network\_up

Indicates whether the network interface is enabled.

node\_processes\_max\_processes

Maximum number of processes.

node\_processes\_max\_threads

Maximum number of threads.

node\_processes\_pids

Number of process IDs.

node\_processes\_state

Distribution of process states.

node\_processes\_threads

Number of threads.

node\_schedstat\_running\_seconds\_total

Total seconds spent in the running state according to scheduling statistics.

node\_sockstat\_TCP\_alloc

Number of allocated TCP sockets.

node\_sockstat\_TCP\_inuse

Number of TCP sockets in use.

node\_sockstat\_TCP\_mem

Memory usage of TCP sockets.

node\_sockstat\_TCP\_mem\_bytes

Memory usage of TCP sockets, in bytes.

node\_sockstat\_TCP\_tw

Number of TCP sockets in the TIME\_WAIT state.

node\_time\_zone\_offset\_seconds

Time zone offset in seconds.

node\_timex\_offset\_seconds

Time offset in seconds.

node\_timex\_sync\_status

Clock synchronization status.

node\_uname\_info

System information from uname.

node\_vmstat\_pgfault

Number of page faults from VM statistics.

node\_vmstat\_pgmajfault

Number of major page faults from VM statistics.

node\_vmstat\_pgpgin

Number of page-ins from VM statistics.

node\_vmstat\_pgpgout

Number of page-outs from VM statistics.

up

Connectivity for metric scraping.

**kube-state-metrics (Job name: \_kube-state-metrics)**

**Metric**

**Description**

kube\_configmap\_info

Information about Kubernetes ConfigMaps

kube\_cronjob\_annotations

Kubernetes CronJob annotations

kube\_cronjob\_created

The creation time of the Kubernetes CronJob.

kube\_cronjob\_info

Kubernetes CronJob information

kube\_cronjob\_labels

Kubernetes CronJob labels

kube\_cronjob\_metadata\_resource\_version

Shows the resource version of the Kubernetes CronJob metadata.

kube\_cronjob\_next\_schedule\_time

The next scheduled time of a Kubernetes CronJob.

kube\_cronjob\_spec\_failed\_job\_history\_limit

Kubernetes CronJob failed job history limit

kube\_cronjob\_spec\_starting\_deadline\_seconds

The starting deadline for the Kubernetes CronJob in seconds.

kube\_cronjob\_spec\_successful\_job\_history\_limit

The retention limit for the history of successful jobs in a Kubernetes CronJob.

kube\_cronjob\_spec\_suspend

The suspend status of a Kubernetes CronJob.

kube\_cronjob\_status\_active

Number of active Kubernetes CronJobs

kube\_cronjob\_status\_last\_schedule\_time

The last schedule time of the Kubernetes CronJob

kube\_cronjob\_status\_last\_successful\_time

The last successful running time of the Kubernetes CronJob

kube\_daemonset\_created

The creation time of the Kubernetes DaemonSet.

kube\_daemonset\_status\_current\_number\_scheduled

The current number of nodes scheduled for the Kubernetes DaemonSet.

kube\_daemonset\_status\_desired\_number\_scheduled

The desired number of scheduled nodes for a Kubernetes DaemonSet.

kube\_daemonset\_status\_number\_available

Number of available nodes in the Kubernetes DaemonSet

kube\_daemonset\_status\_number\_misscheduled

Number of nodes incorrectly running a Kubernetes DaemonSet pod

kube\_daemonset\_status\_number\_ready

The number of ready nodes in a Kubernetes DaemonSet.

kube\_daemonset\_status\_number\_unavailable

Number of unavailable nodes in the Kubernetes DaemonSet

kube\_daemonset\_status\_updated\_number\_scheduled

The number of nodes scheduled with the updated Kubernetes DaemonSet.

kube\_daemonset\_updated\_number\_scheduled

Number of nodes scheduled with the updated Kubernetes DaemonSet.

kube\_deployment\_created

The creation time of the Kubernetes deployment.

kube\_deployment\_labels

Kubernetes deployment labels

kube\_deployment\_metadata\_generation

The generation of the Kubernetes deployment metadata.

kube\_deployment\_spec\_replicas

Number of replicas in the Kubernetes deployment specification

kube\_deployment\_spec\_strategy\_rollingupdate\_max\_unavailable

The maximum number of unavailable pods during a rolling update for a Kubernetes deployment

kube\_deployment\_status\_observed\_generation

The observed generation of the Kubernetes deployment.

kube\_deployment\_status\_replicas

Total number of replicas in a Kubernetes deployment

kube\_deployment\_status\_replicas\_available

Number of available Kubernetes deployment replicas

kube\_deployment\_status\_replicas\_ready

Number of ready replicas in a Kubernetes deployment

kube\_deployment\_status\_replicas\_unavailable

Number of unavailable replicas in a Kubernetes deployment

kube\_deployment\_status\_replicas\_updated

The number of updated replicas in a Kubernetes deployment.

kube\_horizontalpodautoscaler\_info

Information about the Kubernetes HorizontalPodAutoscaler.

kube\_horizontalpodautoscaler\_labels

Kubernetes HorizontalPodAutoscaler labels

kube\_horizontalpodautoscaler\_metadata\_generation

The metadata generation of the Kubernetes HorizontalPodAutoscaler.

kube\_horizontalpodautoscaler\_spec\_max\_replicas

The maximum number of replicas in the specification for a Kubernetes HorizontalPodAutoscaler.

kube\_horizontalpodautoscaler\_spec\_min\_replicas

The minimum number of replicas for a Kubernetes HorizontalPodAutoscaler.

kube\_horizontalpodautoscaler\_spec\_target\_metric

The target metric of a Kubernetes HorizontalPodAutoscaler.

kube\_horizontalpodautoscaler\_status\_condition

The status condition of a Kubernetes HorizontalPodAutoscaler.

kube\_horizontalpodautoscaler\_status\_current\_replicas

The current number of replicas of the Kubernetes HorizontalPodAutoscaler.

kube\_horizontalpodautoscaler\_status\_desired\_replicas

Desired number of replicas for the Kubernetes HorizontalPodAutoscaler

kube\_hpa\_labels

kube\_hpa labels

kube\_hpa\_metadata\_generation

The metadata generation of the Kubernetes HorizontalPodAutoscaler.

kube\_hpa\_spec\_max\_replicas

The maximum number of replicas for a Kubernetes HorizontalPodAutoscaler.

kube\_hpa\_spec\_min\_replicas

The minimum number of replicas in the Kubernetes HorizontalPodAutoscaler specification.

kube\_hpa\_spec\_target\_metric

The target metric for a Kubernetes HorizontalPodAutoscaler.

kube\_hpa\_status\_condition

Kubernetes HorizontalPodAutoscaler status condition

kube\_hpa\_status\_current\_replicas

The current number of replicas for the Kubernetes HorizontalPodAutoscaler.

kube\_hpa\_status\_desired\_replicas

The desired number of replicas for a Kubernetes HorizontalPodAutoscaler.

kube\_ingress\_info

Ingress information

kube\_job\_created

The time when the job was created.

kube\_job\_failed

Total number of failed jobs

kube\_job\_info

Job information

kube\_job\_spec\_completions

The number of completions specified for the job

kube\_job\_status\_active

Number of active jobs

kube\_job\_status\_failed

The number of failed jobs.

kube\_job\_status\_succeeded

The number of jobs that have succeeded.

kube\_namespace\_created

The creation time of the namespace.

kube\_namespace\_labels

Namespace labels

kube\_namespace\_status\_phase

Namespace status phase

kube\_node\_info

Node information

kube\_node\_labels

Node labels

kube\_node\_spec\_taint

Node taint configuration

kube\_node\_spec\_unschedulable

Flag indicating whether the node can be scheduled.

kube\_node\_status\_allocatable

The amount of allocatable resources on a node.

kube\_node\_status\_allocatable\_cpu\_cores

Number of allocatable CPU cores on the node.

kube\_node\_status\_allocatable\_memory\_bytes

Allocatable memory on the node in bytes

kube\_node\_status\_allocatable\_pods

Number of allocatable pods on the node

kube\_node\_status\_capacity

Node capacity

kube\_node\_status\_capacity\_cpu\_cores

The CPU capacity of a node in cores.

kube\_node\_status\_capacity\_memory\_bytes

Node memory capacity in bytes

kube\_node\_status\_capacity\_pods

Node pod capacity

kube\_node\_status\_condition

Node status condition

kube\_persistentvolume\_status\_phase

The status phase of the persistent volume.

kube\_persistentvolumeclaim\_info

Persistent Volume Claim information

kube\_persistentvolumeclaim\_resource\_requests\_storage\_bytes

The amount of storage requested by a persistent volume claim

kube\_persistentvolumeclaim\_status\_phase

The status phase of the persistent volume claim.

kube\_pod\_completion\_time

Pod completion time

kube\_pod\_container\_info

Pod container information

kube\_pod\_container\_resource\_limits

Pod container resource limits

kube\_pod\_container\_resource\_limits\_cpu\_cores

Pod container CPU core limit

kube\_pod\_container\_resource\_limits\_memory\_bytes

Pod container memory limit in bytes

kube\_pod\_container\_resource\_requests

Pod container resource request

kube\_pod\_container\_resource\_requests\_cpu\_cores

Pod container CPU core request

kube\_pod\_container\_resource\_requests\_memory\_bytes

pod container memory resource request in bytes

kube\_pod\_container\_status\_last\_terminated\_reason

Last termination reason of the pod container

kube\_pod\_container\_status\_ready

Pod container readiness status

kube\_pod\_container\_status\_restarts\_total

Pod container restart count

kube\_pod\_container\_status\_running

Pod container runtime status

kube\_pod\_container\_status\_terminated

Pod container termination status

kube\_pod\_container\_status\_terminated\_reason

Pod container stop reason

kube\_pod\_container\_status\_waiting

Pod container waiting status

kube\_pod\_container\_status\_waiting\_reason

Pod container wait reason

kube\_pod\_created

Pod creation time

kube\_pod\_deletion\_timestamp

Pod deletion timestamp

kube\_pod\_info

Pod information

kube\_pod\_labels

Pod label

kube\_pod\_owner

Owner object

kube\_pod\_start\_time

Pod start time

kube\_pod\_status\_container\_ready\_time

Pod container readiness time

kube\_pod\_status\_initialized\_time

Pod status initialization completion time

kube\_pod\_status\_phase

Pod phase

kube\_pod\_status\_ready

Pod readiness status

kube\_pod\_status\_ready\_time

Pod readiness time

kube\_pod\_status\_reason

Pod status reason

kube\_pod\_status\_scheduled\_time

Pod scheduling time

kube\_pod\_status\_unschedulable

Unscheduled pod flag

kube\_replicaset\_owner

ReplicaSet owner object

kube\_replicaset\_status\_ready\_replicas

Number of ready replicas in the ReplicaSet

kube\_resource\_relationship

Resource relationships

kube\_resourcequota

Resource quota

kube\_resourcequota\_created

Resource quota creation time

kube\_secret\_info

Secret information

kube\_service\_info

Service information

kube\_service\_spec\_type

Service type specifications

kube\_service\_status\_load\_balancer\_ingress

Service status and Server Load Balancer endpoint information

kube\_statefulset\_created

Stateful ReplicaSet creation time

kube\_statefulset\_metadata\_generation

Stateful ReplicaSet metadata generation

kube\_statefulset\_replicas

Number of replicas for the stateful ReplicaSet

kube\_statefulset\_status\_replicas

Number of replicas in the Stateful ReplicaSet status

kube\_statefulset\_status\_replicas\_available

Number of active replicas

kube\_statefulset\_status\_replicas\_ready

Stateful ReplicaSet ready replica count

kube\_statefulset\_status\_replicas\_updated

stateful ReplicaSet status: Updated number of replicas

rest\_client\_requests\_total

Total REST client requests

up

Connectivity for metric collection

workqueue\_adds\_total

Total work queue additions

workqueue\_depth

Work queue depth

workqueue\_queue\_duration\_seconds\_bucket

Work queue queuing duration distribution (seconds)

**kube-events (Job name: \_arms/kube-event)**

**Metric**

**Description**

aliyun\_prometheus\_agent\_append\_duration\_seconds

The duration of an append operation for the Alibaba Cloud Prometheus agent, in seconds.

aliyun\_prometheus\_agent\_job\_discovery\_status

The discovery status of a scrape job for the Alibaba Cloud Prometheus agent.

aliyun\_prometheus\_agent\_scrape\_custom\_error

The number of custom scrape errors for the Alibaba Cloud Prometheus agent.

aliyun\_prometheus\_agent\_scrapes\_by\_target\_total

The total number of scrapes by target for the Alibaba Cloud Prometheus agent.

aliyun\_prometheus\_agent\_target\_info

The target information for the Alibaba Cloud Prometheus agent.

eventer\_events\_error\_total

The total number of event processing errors.

eventer\_events\_normal\_total

The total number of normal events.

eventer\_events\_warning\_total

The total number of event warnings.

eventer\_exporter\_duration\_milliseconds\_count

The number of samples for the event export duration, in milliseconds.

eventer\_exporter\_duration\_milliseconds\_sum

The total event export duration, in milliseconds.

eventer\_manager\_last\_time\_seconds

The last operation time of the event manager, in seconds.

eventer\_scraper\_duration\_milliseconds\_count

The count of the event scrape duration, in milliseconds.

eventer\_scraper\_duration\_milliseconds\_sum

The total event scrape duration, in milliseconds.

eventer\_scraper\_events\_total\_number

The total number of events scraped.

eventer\_scraper\_last\_time\_seconds

The last running time of the event scrape, in seconds.

up

The connectivity for metric collection.

**CoreDNS (Job name: arms-ack-coredns)**

**Metric**

**Description**

aliyun\_prometheus\_agent\_append\_duration\_seconds

The duration of append operations for the Alibaba Cloud Prometheus agent, in seconds.

aliyun\_prometheus\_agent\_job\_discovery\_status

The status of scrape job discovery for the Alibaba Cloud Prometheus agent.

aliyun\_prometheus\_agent\_scrape\_custom\_error

Number of custom scrape errors from the Alibaba Cloud Prometheus agent

aliyun\_prometheus\_agent\_scrapes\_by\_target\_total

The total number of scrapes by the Alibaba Cloud Prometheus agent per target.

aliyun\_prometheus\_agent\_target\_info

Target information for the Alibaba Cloud Prometheus agent

coredns\_autopath\_success\_count\_total

Total success count for CoreDNS autopath.

coredns\_autopath\_success\_total

Total number of successful CoreDNS autopaths.

coredns\_build\_info

CoreDNS build information

coredns\_cache\_drops\_total

Total CoreDNS cache drop count

coredns\_cache\_entries

Number of CoreDNS cache entries

coredns\_cache\_evictions\_total

Total number of CoreDNS cache evictions

coredns\_cache\_hits\_total

Total CoreDNS cache hits

coredns\_cache\_misses\_total

Total number of CoreDNS cache misses

coredns\_cache\_requests\_total

Total CoreDNS cache requests

coredns\_cache\_size

The size of the CoreDNS cache.

coredns\_dns\_do\_requests\_total

Total CoreDNS DNS DO requests

coredns\_dns\_request\_count\_total

Total DNS request count for CoreDNS

coredns\_dns\_request\_duration\_seconds\_bucket

CoreDNS DNS request duration quantile (seconds)

coredns\_dns\_request\_duration\_seconds\_count

The count of CoreDNS DNS requests

coredns\_dns\_request\_duration\_seconds\_sum

Total CoreDNS DNS request duration in seconds

coredns\_dns\_request\_size\_bytes\_bucket

CoreDNS DNS request size quantile (bytes)

coredns\_dns\_request\_size\_bytes\_count

CoreDNS DNS request size count (bytes)

coredns\_dns\_request\_size\_bytes\_sum

Sum of CoreDNS DNS request size (bytes)

coredns\_dns\_request\_type\_count\_total

The total number of DNS requests in CoreDNS, categorized by request type.

coredns\_dns\_requests\_total

Total DNS requests handled by CoreDNS

coredns\_dns\_response\_rcode\_count\_total

Total number of CoreDNS DNS responses by response code

coredns\_dns\_response\_size\_bytes\_bucket

CoreDNS DNS response size quantile (bytes)

coredns\_dns\_response\_size\_bytes\_count

CoreDNS DNS response size (bytes) count

coredns\_dns\_response\_size\_bytes\_sum

The sum of CoreDNS DNS response sizes in bytes

coredns\_dns\_responses\_total

Total number of CoreDNS DNS responses

coredns\_forward\_conn\_cache\_hits\_total

Total CoreDNS forward connection cache hits.

coredns\_forward\_conn\_cache\_misses\_total

Total misses in the CoreDNS forward connection cache.

coredns\_forward\_healthcheck\_broken\_total

Total number of failed CoreDNS forward health checks

coredns\_forward\_healthcheck\_failure\_count\_total

Total count of CoreDNS forwarding health check failures

coredns\_forward\_healthcheck\_failures\_total

Total CoreDNS forward health check failures

coredns\_forward\_max\_concurrent\_rejects\_total

Total number of rejections for CoreDNS forwarding due to maximum concurrency

coredns\_forward\_request\_count\_total

Total count of requests forwarded by CoreDNS

coredns\_forward\_request\_duration\_seconds\_bucket

Quantiles for CoreDNS forwarded request duration in seconds.

coredns\_forward\_request\_duration\_seconds\_count

Count of CoreDNS forward request duration (seconds)

coredns\_forward\_request\_duration\_seconds\_sum

Total duration of CoreDNS forward requests in seconds.

coredns\_forward\_requests\_total

Total number of requests forwarded by CoreDNS

coredns\_forward\_response\_rcode\_count\_total

Total count of CoreDNS forwarded response codes

coredns\_forward\_responses\_total

Total number of responses forwarded by CoreDNS

coredns\_forward\_sockets\_open

Number of open sockets for CoreDNS forwarding

coredns\_health\_request\_duration\_seconds\_bucket

Quantile of CoreDNS health check request duration in seconds

coredns\_health\_request\_duration\_seconds\_count

Number of CoreDNS health check requests.

coredns\_health\_request\_duration\_seconds\_sum

Total duration of CoreDNS health check requests in seconds.

coredns\_health\_request\_failures\_total

Total number of failed CoreDNS health check requests

coredns\_hosts\_entries

Number of CoreDNS host entries

coredns\_hosts\_reload\_timestamp\_seconds

CoreDNS host reload timestamp (seconds)

coredns\_kubernetes\_dns\_programming\_duration\_seconds\_bucket

CoreDNS Kubernetes DNS programming duration quantile (seconds)

coredns\_kubernetes\_dns\_programming\_duration\_seconds\_count

CoreDNS Kubernetes DNS request duration (seconds) count

coredns\_kubernetes\_dns\_programming\_duration\_seconds\_sum

CoreDNS: Sum of Kubernetes DNS programming time

coredns\_local\_localhost\_requests\_total

Total CoreDNS requests to localhost

coredns\_panic\_count\_total

Total CoreDNS panics

coredns\_panics\_total

Total CoreDNS panic count

coredns\_plugin\_enabled

CoreDNS plugin status

coredns\_reload\_failed\_total

Total CoreDNS reload failures

coredns\_reload\_version\_info

CoreDNS reload version

coredns\_template\_matches\_total

Total CoreDNS template matches

up

Metric collection connectivity

**CSI (cluster dimension) (Job name: k8s-csi-cluster-pv)**

**Metric**

**Description**

alibaba\_cloud\_storage\_operator\_build\_info

The build information for Alibaba Cloud storage O&M.

aliyun\_prometheus\_agent\_append\_duration\_seconds

The duration of the append operation for the Alibaba Cloud Prometheus agent, in seconds.

aliyun\_prometheus\_agent\_job\_discovery\_status

The discovery status of the scrape job for the Alibaba Cloud Prometheus agent.

aliyun\_prometheus\_agent\_scrape\_custom\_error

The number of custom scrape errors for the Alibaba Cloud Prometheus agent.

aliyun\_prometheus\_agent\_scrapes\_by\_target\_total

The total number of scrapes by target for the Alibaba Cloud Prometheus agent.

aliyun\_prometheus\_agent\_target\_info

The target information of the Alibaba Cloud Prometheus agent.

cluster\_pv\_detail\_num\_total

The total count of detailed information for cluster PVs.

cluster\_pv\_status\_num\_total

The total number of cluster PV statuses.

cluster\_pvc\_detail\_num\_total

The total count of detailed information for cluster PVCs.

cluster\_pvc\_status\_num\_total

The total number of cluster PVC statuses.

cluster\_scrape\_collector\_duration\_seconds

The duration of the cluster scrape collector, in seconds.

cluster\_scrape\_collector\_success

The number of successful attempts by the cluster scrape collector.

up

The connectivity for metric scraping.

**CSI (node dimension) (Job name: k8s-csi-node-pv)**

**Metric**

**Description**

alibaba\_cloud\_csi\_driver\_build\_info

Alibaba Cloud CSI driver build information

aliyun\_prometheus\_agent\_append\_duration\_seconds

Alibaba Cloud Prometheus agent append operation duration in seconds

aliyun\_prometheus\_agent\_job\_discovery\_status

Discovery status of scrape jobs for the Alibaba Cloud Prometheus agent

aliyun\_prometheus\_agent\_scrape\_custom\_error

Number of custom scrape errors from the Alibaba Cloud Prometheus agent

aliyun\_prometheus\_agent\_scrapes\_by\_target\_total

Total number of scrapes by target from the Alibaba Cloud Prometheus agent

aliyun\_prometheus\_agent\_target\_info

Target information for the Alibaba Cloud Prometheus agent

cluster\_scrape\_collector\_duration\_seconds

Duration of the cluster scrape collector in seconds

cluster\_scrape\_collector\_success

Number of successful cluster scrape collections

container\_fs\_available\_bytes

Available bytes in the container file system

container\_fs\_inodes\_free

Available inodes in the container file system

container\_fs\_inodes\_total

Total inodes in the container file system

container\_fs\_inodes\_used

Used inodes in the container file system

container\_fs\_limit\_bytes

Byte limit for the container file system

container\_fs\_usage\_bytes

Used bytes in the container file system

ephemeral\_storage\_pod\_available\_bytes

Available bytes for the ephemeral storage pod

ephemeral\_storage\_pod\_inodes\_free

Available inodes for the ephemeral storage pod

ephemeral\_storage\_pod\_inodes\_total

Total inodes for the ephemeral storage pod

ephemeral\_storage\_pod\_inodes\_used

Used inodes for the ephemeral storage pod

ephemeral\_storage\_pod\_limit\_bytes

Byte limit for the ephemeral storage pod

ephemeral\_storage\_pod\_usage\_bytes

Used bytes for the ephemeral storage pod

node\_volume\_backend\_posix\_access\_total\_counter

Total POSIX access operations on the node volume backend.

node\_volume\_backend\_posix\_getattr\_total\_counter

Total POSIX getattr calls on the node volume backend.

node\_volume\_backend\_posix\_getmode\_total\_counter

Total POSIX get mode operations on the node volume backend.

node\_volume\_backend\_posix\_link\_total\_counter

Total POSIX link operations on the node volume backend.

node\_volume\_backend\_posix\_lookup\_total\_counter

Total POSIX lookup operations on the node volume backend.

node\_volume\_backend\_posix\_mknod\_total\_counter

Total POSIX mknod operations on the node volume backend.

node\_volume\_backend\_posix\_readdir\_total\_counter

Total POSIX readdir operations on the node volume backend.

node\_volume\_backend\_posix\_readlink\_total\_counter

Total POSIX readlink operations on the node volume backend.

node\_volume\_backend\_posix\_remove\_total\_counter

Total POSIX remove operations on the node volume backend.

node\_volume\_backend\_posix\_rename\_total\_counter

Total POSIX rename operations on the node volume backend.

node\_volume\_backend\_posix\_setattr\_total\_counter

Total POSIX setattr operations on the node volume backend.

node\_volume\_backend\_posix\_statfs\_total\_counter

Total POSIX statfs operations on the node volume backend.

node\_volume\_backend\_read\_bytes\_total\_counter

Total bytes read from the node volume backend.

node\_volume\_backend\_read\_completed\_total\_counter

Total completed read requests on the node volume backend.

node\_volume\_backend\_read\_time\_milliseconds\_total\_counter

Total read time in milliseconds on the node volume backend.

node\_volume\_backend\_write\_bytes\_total\_counter

Total bytes written to the node volume backend.

node\_volume\_backend\_write\_completed\_total\_counter

Total completed write requests on the node volume backend.

node\_volume\_backend\_write\_time\_milliseconds\_total\_counter

Total write time in milliseconds on the node volume backend.

node\_volume\_capacity\_bytes\_available

Available capacity of the node volume in bytes.

node\_volume\_capacity\_bytes\_available\_counter

Counter for the available capacity of the node volume in bytes.

node\_volume\_capacity\_bytes\_total

Total capacity of the node volume in bytes.

node\_volume\_capacity\_bytes\_total\_counter

Counter for the total capacity of the node volume in bytes.

node\_volume\_capacity\_bytes\_used

Used capacity of the node volume in bytes.

node\_volume\_capacity\_bytes\_used\_counter

Counter for the used capacity of the node volume in bytes.

node\_volume\_hot\_spot\_head\_file\_top

Ranking of hot spot head files on the node volume.

node\_volume\_hot\_spot\_read\_file\_top

Ranking of hot spot read files on the node volume.

node\_volume\_hot\_spot\_write\_file\_top

Ranking of hot spot write files on the node volume.

node\_volume\_inode\_bytes\_available\_counter

Counter for available bytes for inodes on the node volume.

node\_volume\_inode\_bytes\_total\_counter

Counter for total bytes for inodes on the node volume.

node\_volume\_inode\_bytes\_used\_counter

Counter for used bytes for inodes on the node volume.

node\_volume\_inodes\_available

Available inodes on the node volume.

node\_volume\_inodes\_total

Total inodes on the node volume.

node\_volume\_inodes\_used

Used inodes on the node volume.

node\_volume\_io\_now

Current I/O operations on the node volume.

node\_volume\_io\_time\_seconds\_total

Total I/O time on the node volume in seconds.

node\_volume\_oss\_delete\_object\_total\_counter

Total objects deleted from OSS for the node volume.

node\_volume\_oss\_get\_object\_total\_counter

Total objects retrieved from OSS for the node volume.

node\_volume\_oss\_head\_object\_total\_counter

Total head object operations on OSS for the node volume.

node\_volume\_oss\_post\_object\_total\_counter

Total objects posted to OSS for the node volume.

node\_volume\_oss\_put\_object\_total\_counter

Total objects put to OSS for the node volume.

node\_volume\_posix\_access\_total\_counter

Total POSIX access operations on the node volume.

node\_volume\_posix\_chmod\_total\_counter

Total POSIX chmod operations on the node volume.

node\_volume\_posix\_chown\_total\_counter

Total POSIX chown operations on the node volume.

node\_volume\_posix\_create\_total\_counter

Total POSIX create operations on the node volume.

node\_volume\_posix\_flush\_total\_counter

Total POSIX flush operations on the node volume.

node\_volume\_posix\_fsync\_total\_counter

Total POSIX fsync operations on the node volume.

node\_volume\_posix\_mkdir\_total\_counter

Total POSIX mkdir operations on the node volume.

node\_volume\_posix\_open\_total\_counter

Total POSIX open operations on the node volume.

node\_volume\_posix\_opendir\_total\_counter

Total POSIX opendir operations on the node volume.

node\_volume\_posix\_read\_total\_counter

Total POSIX read operations on the node volume.

node\_volume\_posix\_readdir\_total\_counter

Total POSIX readdir operations on the node volume.

node\_volume\_posix\_release\_total\_counter

Total POSIX release operations on the node volume.

node\_volume\_posix\_rename\_total\_counter

Total POSIX rename operations on the node volume.

node\_volume\_posix\_rmdir\_total\_counter

Total POSIX rmdir operations on the node volume.

node\_volume\_posix\_truncate\_total\_counter

Total POSIX truncate operations on the node volume.

node\_volume\_posix\_write\_total\_counter

Total POSIX write operations on the node volume.

node\_volume\_read\_bytes\_total

Total bytes read from the node volume.

node\_volume\_read\_bytes\_total\_counter

Counter for the total bytes read from the node volume.

node\_volume\_read\_completed\_total

Total completed read operations on the node volume.

node\_volume\_read\_completed\_total\_counter

Counter for total completed read operations on the node volume.

node\_volume\_read\_merged\_total

Total merged read operations on the node volume.

node\_volume\_read\_queue\_time\_milliseconds\_total

Total time spent in the read queue on the node volume, in milliseconds.

node\_volume\_read\_rtt\_time\_milliseconds\_total

Total round trip time for read operations on the node volume, in milliseconds.

node\_volume\_read\_sent\_bytes\_total

Total bytes sent for read operations on the node volume.

node\_volume\_read\_time\_milliseconds\_total

Total time for read operations on the node volume, in milliseconds.

node\_volume\_read\_time\_milliseconds\_total\_counter

Counter for the total time for read operations on the node volume, in milliseconds.

node\_volume\_read\_timeouts\_total

Total read timeouts on the node volume.

node\_volume\_read\_transmissions\_total

Total read transmissions on the node volume.

node\_volume\_vg\_free\_bytes

Free bytes in the node volume group (VG).

node\_volume\_vg\_size\_bytes

Total size of the node volume group (VG) in bytes.

node\_volume\_write\_bytes\_total

Total bytes written to the node volume.

node\_volume\_write\_bytes\_total\_counter

Counter for the total bytes written to the node volume.

node\_volume\_write\_completed\_total

Total completed write operations on the node volume.

node\_volume\_write\_completed\_total\_counter

Counter for total completed write operations on the node volume.

node\_volume\_write\_merged\_total

Total merged write operations on the node volume.

node\_volume\_write\_queue\_time\_milliseconds\_total

Total time spent in the write queue on the node volume, in milliseconds.

node\_volume\_write\_recv\_bytes\_total

Total bytes received for write operations on the node volume.

node\_volume\_write\_rtt\_time\_milliseconds\_total

Total round trip time for write operations on the node volume, in milliseconds.

node\_volume\_write\_time\_milliseconds\_total

Total time for write operations on the node volume, in milliseconds.

node\_volume\_write\_time\_milliseconds\_total\_counter

Counter for the total time for write operations on the node volume, in milliseconds.

node\_volume\_write\_timeouts\_total

Total write timeouts on the node volume.

node\_volume\_write\_transmissions\_total

Total write transmissions on the node volume.

up

Connectivity for metric scraping.

**GPU-Exporter (job name: gpu-exporter)**

**Metric**

**Description**

DCGM\_CUSTOM\_ALLOCATE\_MODE

The operating pattern of the node. The possible values are: 0 (None) indicates that no GPU pods are running on the node. 1 (Exclusive) indicates that GPU pods on the node run in exclusive mode. 2 (Share) indicates that GPU pods on the node run in shared mode.

DCGM\_CUSTOM\_CONTAINER\_CP\_ALLOCATED

Indicates the ratio of the computing power allocated to a container to the total computing power of the GPU card. The value ranges from 0 to 1. The value is 0 if only GPU memory is requested for an exclusive or shared GPU. A value of 0 means computing power is not limited. For example, if a GPU card has 100 units of computing power and 30 units are allocated to a container, the allocated computing power ratio is 30/100 = 0.3.

DCGM\_CUSTOM\_CONTAINER\_MEM\_ALLOCATED

The GPU memory allocated to the container.

DCGM\_CUSTOM\_DEV\_FB\_ALLOCATED

The percentage of total GPU memory that is allocated. The value ranges from 0 to 1.

DCGM\_CUSTOM\_DEV\_FB\_TOTAL

Indicates the total GPU memory of the GPU.

DCGM\_CUSTOM\_ILLEGAL\_PROCESS\_DECODE\_UTIL

Illegal process decode utilization

DCGM\_CUSTOM\_ILLEGAL\_PROCESS\_ENCODE\_UTIL

Illegal process encoding utilization

DCGM\_CUSTOM\_ILLEGAL\_PROCESS\_MEM\_COPY\_UTIL

Illegal process memory copy utilization

DCGM\_CUSTOM\_ILLEGAL\_PROCESS\_MEM\_USED

Memory used by illegal process

DCGM\_CUSTOM\_ILLEGAL\_PROCESS\_SM\_UTIL

Illegal process Streaming Multiprocessor (SM) utilization

DCGM\_CUSTOM\_PROCESS\_DECODE\_UTIL

Indicates the decoder utilization of the GPU thread.

DCGM\_CUSTOM\_PROCESS\_ENCODE\_UTIL

The encoder utilization of the GPU thread.

DCGM\_CUSTOM\_PROCESS\_MEM\_COPY\_UTIL

Indicates the memory copy utilization of GPU threads.

DCGM\_CUSTOM\_PROCESS\_MEM\_USED

The GPU memory currently used by the GPU thread.

DCGM\_CUSTOM\_PROCESS\_SM\_UTIL

The SM utilization of GPU threads.

DCGM\_FI\_DEV\_APP\_MEM\_CLOCK

The application memory clock speed.

DCGM\_FI\_DEV\_APP\_SM\_CLOCK

The SM application clock frequency.

DCGM\_FI\_DEV\_BAR1\_FREE

Indicates the free BAR1 memory.

DCGM\_FI\_DEV\_BAR1\_TOTAL

Total size of Base Address Register 1 (BAR1), which maps GPU memory to the system address space.

DCGM\_FI\_DEV\_BAR1\_USED

The amount of used BAR1.

DCGM\_FI\_DEV\_BOARD\_LIMIT\_VIOLATION

Indicates a violation due to the board limit. The value is the duration of the violation.

DCGM\_FI\_DEV\_CLOCK\_THROTTLE\_REASONS

The reasons for clock throttling.

DCGM\_FI\_DEV\_COUNT

Number of devices

DCGM\_FI\_DEV\_DEC\_UTIL

Indicates the decoder utilization.

DCGM\_FI\_DEV\_ENC\_UTIL

Indicates the encoder utilization.

DCGM\_FI\_DEV\_FB\_FREE

The amount of free framebuffer memory.

DCGM\_FI\_DEV\_FB\_USED

The amount of used framebuffer memory. This value corresponds to the used value for Memory-Usage from the nvidia-smi command.

DCGM\_FI\_DEV\_GPU\_TEMP

Indicates the GPU temperature.

DCGM\_FI\_DEV\_GPU\_UTIL

Indicates GPU utilization. This is the time that one or more kernel functions are active in a set period. The period is 1 s or 1/6 s. It depends on the GPU product. This metric shows that a kernel function is using the GPU. It does not show how the GPU is used.

DCGM\_FI\_DEV\_LOW\_UTIL\_VIOLATION

A violation triggered by the low utilization limit. The value is the duration of the violation.

DCGM\_FI\_DEV\_MEM\_CLOCK

The memory clock frequency.

DCGM\_FI\_DEV\_MEM\_COPY\_UTIL

Indicates the memory bandwidth utilization. For example, an NVIDIA V100 GPU has a maximum memory bandwidth of 900 GB/sec. If the current memory bandwidth is 450 GB/sec, the memory bandwidth utilization is 50%.

DCGM\_FI\_DEV\_MEMORY\_TEMP

Indicates the memory temperature.

DCGM\_FI\_DEV\_NVLINK\_BANDWIDTH\_TOTAL

Total NVLINK bandwidth

DCGM\_FI\_DEV\_PCIE\_REPLAY\_COUNTER

PCIe replay counter (records the number of retries due to data transmission errors)

DCGM\_FI\_DEV\_POWER\_USAGE

Indicates power.

DCGM\_FI\_DEV\_POWER\_VIOLATION

Indicates a violation caused by the power limit. The value is the duration of the violation.

DCGM\_FI\_DEV\_PSTATE

Device power state

DCGM\_FI\_DEV\_RELIABILITY\_VIOLATION

Indicates a violation caused by the board's reliability limit. The value is the duration of the violation.

DCGM\_FI\_DEV\_RETIRED\_DBE

Indicates pages retired due to a double-bit fault.

DCGM\_FI\_DEV\_RETIRED\_PENDING

Number of pages pending retirement (pages in GPU memory marked as unusable due to faults)

DCGM\_FI\_DEV\_RETIRED\_SBE

Indicates pages retired due to a single-bit error.

DCGM\_FI\_DEV\_SM\_CLOCK

Indicates the SM clock frequency.

DCGM\_FI\_DEV\_SYNC\_BOOST\_VIOLATION

Indicates the duration of a violation caused by a sync boost limit.

DCGM\_FI\_DEV\_THERMAL\_VIOLATION

Indicates a thermal violation. The value is the duration of the violation.

DCGM\_FI\_DEV\_TOTAL\_ENERGY\_CONSUMPTION

The total energy consumed since the driver was loaded.

DCGM\_FI\_DEV\_VIDEO\_CLOCK

Video clock frequency

DCGM\_FI\_DEV\_XID\_ERRORS

The error number of the most recent XID error that occurred over a period of time.

DCGM\_FI\_PROF\_DRAM\_ACTIVE

The fraction of cycles that the device memory is active sending or receiving data. This metric measures Memory Bandwidth Utilization.

This value is an average over a time interval, not an instantaneous value.

A higher value indicates higher device memory utilization.

A value of 1 (100%) means that one DRAM instruction is executed in every cycle during the time interval. In practice, the maximum achievable peak value is approximately 0.8 (80%).

For example, a value of 0.2 (20%) means that the device memory is read from or written to during 20% of the cycles in the time interval.

DCGM\_FI\_PROF\_GR\_ENGINE\_ACTIVE

Indicates the percentage of time that a graphics or compute engine is active over a time interval. This value is the average for all graphics and compute engines. An engine is considered active if a graphics or compute Context is attached to a thread and the Context is busy.

DCGM\_FI\_PROF\_NVLINK\_RX\_BYTES

The rate of data received over NVLink, excluding protocol headers.

This value is an average over a time interval, not an instantaneous value.

The rate is averaged over the time interval. For example, if 1 GB of data is transferred in 1 second, the rate is 1 GB/s. This is true whether the data is transferred at a constant rate or in a burst. Theoretically, the maximum NVLink Gen2 bandwidth is 25 GB/s per link in each direction.

DCGM\_FI\_PROF\_NVLINK\_TX\_BYTES

Total bytes sent over NVLink

DCGM\_FI\_PROF\_PCIE\_RX\_BYTES

The rate of data received over the PCIe bus, including protocol headers and data payloads.

This value represents an average over a time interval, not an instantaneous value.

The rate is averaged over the time interval. For example, if 1 GB of data is transferred in 1 second, the rate is 1 GB/s, regardless of whether the transfer is constant or in a burst. The theoretical maximum bandwidth for PCIe Gen3 is 985 MB/s per channel.

DCGM\_FI\_PROF\_PCIE\_TX\_BYTES

Indicates the rate of data sent or received over the PCIe bus. This includes protocol headers and data payloads.

This value is an average over a time interval, not an instantaneous value.

The rate is averaged over the time interval. For example, if 1 GB of data is sent in 1 second, the rate is 1 GB/s. This is true whether the data is sent at a constant rate or in a burst. The theoretical maximum bandwidth for PCIe Gen3 is 985 MB/s per channel.

DCGM\_FI\_PROF\_PIPE\_FP16\_ACTIVE

The fraction of epochs that the FP16 (half-precision) pipeline is active.

This value is an average over a time interval, not an instantaneous value.

A higher value indicates higher utilization of the FP16 Cores.

A value of 1 (100%) means that an FP16 instruction is executed every two epochs for the entire time interval. For example, on a Volta-based GPU.

If the value is 0.2 (20%), the following scenarios are possible:

20% of the Streaming Multiprocessors (SMs) run their FP16 Cores at 100% utilization for the entire time interval.

All SMs run their FP16 Cores at 20% utilization for the entire time interval.

All SMs run their FP16 Cores at 100% utilization for one-fifth of the time interval.

Other combinations.

DCGM\_FI\_PROF\_PIPE\_FP32\_ACTIVE

Indicates the fraction of cycles where the Fused Multiply-Add (FMA) pipeline is active. FMA operations include both single-precision (FP32) and integer types.

This value is an average over a time interval, not an instantaneous value.

A higher value indicates higher utilization of the FP32 Cores.

A value of 1 (100%) indicates that an FP32 instruction is executed every two cycles over the entire time interval, for example, on a Volta-architecture card.

For example, a value of 0.2 (20%) indicates one of the following scenarios:

20% of the FP32 Cores on the Streaming Multiprocessors (SMs) operate at 100% utilization throughout the interval.

All FP32 Cores on the SMs operate at 20% utilization throughout the interval.

All FP32 Cores on the SMs operate at 100% utilization for 20% of the interval.

Other combinations.

DCGM\_FI\_PROF\_PIPE\_FP64\_ACTIVE

The fraction of cycles that the FP64 (double-precision) pipe is active.

This value is an average over a time interval, not an instantaneous value.

A higher value means higher utilization of the FP64 Cores.

A value of 1 (100%) means an FP64 instruction is executed every four cycles over the entire time interval. For example, on a Volta-based GPU.

A value of 0.2 (20%) could mean any of the following:

20% of the Streaming Multiprocessors (SMs) run their FP64 Cores at 100% utilization for the entire interval.

All SMs run their FP64 Cores at 20% utilization for the entire interval.

All SMs run their FP64 Cores at 100% utilization for one-fifth of the interval.

Other combinations.

DCGM\_FI\_PROF\_PIPE\_TENSOR\_ACTIVE

The fraction of epochs that the Tensor (HMMA/IMMA) pipe is active.

This value is an average over a time interval and not an instantaneous value.

A higher value indicates higher Tensor Core utilization.

A value of 1 (100%) means a Tensor instruction is issued every other instruction cycle for the entire interval. This is because one instruction takes two cycles to complete.

For example, a value of 0.2 (20%) could mean:

The Tensor Cores on 20% of the Streaming Multiprocessors (SMs) run at 100% utilization for the entire interval.

The Tensor Cores on 100% of the SMs run at 20% utilization for the entire interval.

The Tensor Cores on 100% of the SMs run at 100% utilization for one-fifth of the interval.

Other combinations.

DCGM\_FI\_PROF\_SM\_ACTIVE

The percentage of time within an interval that at least one warp is active on a Streaming Multiprocessor (SM). This value is the average across all SMs and is not sensitive to the number of threads per block. A warp is active when it has been scheduled and allocated resources. An active warp can be in a computing or a non-computing state, such as waiting for a memory request. A value below 0.5 indicates that the GPU is underutilized, while a value above 0.8 is necessary for high efficiency. Assume a GPU has N SMs. If a kernel function uses N thread blocks and runs on all N SMs for the entire interval, the value is 1 (100%). If a kernel function runs with N/5 thread blocks during the interval, the value is 0.2. If a kernel function uses N thread blocks but runs for only 1/5 of the interval, the value is 0.2.

DCGM\_FI\_PROF\_SM\_OCCUPANCY

The ratio of active warps to the maximum number of resident warps on a Streaming Multiprocessor (SM). This value is the average across all SMs over a time interval. A higher occupancy does not necessarily mean higher GPU utilization. Higher occupancy indicates more effective GPU utilization only for workloads that are limited by GPU memory bandwidth (DCGM\_FI\_PROF\_DRAM\_ACTIVE).

nvidia\_gpu\_allocated\_num\_devices

The number of allocated GPU devices. Warning: This metric will be deprecated.

nvidia\_gpu\_memory\_allocated\_bytes

The allocated memory on the GPU device. Warning: This metric will be deprecated and replaced by DCGM\_CUSTOM\_DEV\_FB\_allocated.

nvidia\_gpu\_sharing\_memory

The memory allocated for GPU sharing. Warning: This metric will be deprecated and replaced by DCGM\_CUSTOM\_DEV\_FB\_allocated.

Up

Connectivity for metric collection

**Cost-Exporter (Job name: alibaba-cloud-cost-exporter)**

**Metric**

**Description**

deducted\_by\_cash\_coupons

The amount deducted by coupons from a bill for the current instance.

deducted\_by\_prepaid\_card

The amount deducted by a prepaid card from a bill for the current instance.

invoice\_discount

The discount amount for a bill of the current instance.

list\_price

The unit price for a bill of the current instance.

node\_current\_price

The actual price of the current node.

node\_payAsYouGo\_price

The pay-as-you-go price of the current node.

node\_payByPeriod\_price

The subscription price of the current node.

node\_spot\_price

The price of the current node, based on the pricing of a Spot Instance with the same specifications.

outstanding\_amount

The outstanding amount for a bill of the current instance.

payent\_amount

The cash payment amount for a bill of the current instance.

pretax\_amount

The amount payable for a bill of the current instance.

pretax\_gross\_amount

The original amount for a bill of the current instance.

usage

The resource usage for a bill of the current instance.

up

The connectivity for metric collection.

**Ingress (Job name: arms-ack-ingress or ingress-ask-default)**

**Metric**

**Description**

aliyun\_prometheus\_agent\_append\_duration\_seconds

The duration of an append operation by the Alibaba Cloud Prometheus agent (in seconds).

aliyun\_prometheus\_agent\_job\_discovery\_status

Status of scrape job discovery for the Alibaba Cloud Prometheus agent

aliyun\_prometheus\_agent\_scrape\_custom\_error

The number of custom scrape errors for the Prometheus agent.

aliyun\_prometheus\_agent\_scrapes\_by\_target\_total

Total number of scrapes by the Alibaba Cloud Prometheus agent per Target

aliyun\_prometheus\_agent\_target\_info

Target information for the Alibaba Cloud Prometheus agent

nginx\_ingress\_controller\_admission\_config\_size

Nginx Ingress controller - Admission configuration size

nginx\_ingress\_controller\_admission\_render\_duration

Nginx Ingress controller - Rendering duration

nginx\_ingress\_controller\_admission\_render\_ingresses

Nginx Ingress controller - Rendered Ingress count

nginx\_ingress\_controller\_admission\_roundtrip\_duration

Nginx Ingress controller - Roundtrip processing duration

nginx\_ingress\_controller\_admission\_tested\_duration

Nginx Ingress controller - Test duration

nginx\_ingress\_controller\_admission\_tested\_ingresses

Nginx Ingress controller - Number of Ingresses tested

nginx\_ingress\_controller\_build\_info

Nginx Ingress controller - Build information

nginx\_ingress\_controller\_bytes\_sent\_bucket

Nginx Ingress controller - Total bytes sent (bucket)

nginx\_ingress\_controller\_bytes\_sent\_count

Nginx Ingress controller - Total bytes sent (count)

nginx\_ingress\_controller\_bytes\_sent\_sum

Nginx Ingress controller - Sent bytes total (Sum)

nginx\_ingress\_controller\_check\_errors

Nginx Ingress controller - Check errors

nginx\_ingress\_controller\_check\_success

Nginx Ingress controller - Successful check count

nginx\_ingress\_controller\_config\_hash

Nginx Ingress controller - Configuration hash

nginx\_ingress\_controller\_config\_last\_reload\_successful

Nginx Ingress controller - Last configuration load successful

nginx\_ingress\_controller\_config\_last\_reload\_successful\_timestamp\_seconds

Nginx Ingress controller - Last successful configuration load time (seconds)

nginx\_ingress\_controller\_connect\_duration\_seconds\_bucket

Nginx Ingress controller - Connection duration (seconds) - Bucket

nginx\_ingress\_controller\_connect\_duration\_seconds\_count

Nginx Ingress controller - connection duration (seconds) - count

nginx\_ingress\_controller\_connect\_duration\_seconds\_sum

Nginx Ingress controller - Connection duration (seconds) - Sum

nginx\_ingress\_controller\_errors

Nginx Ingress controller - Error count

nginx\_ingress\_controller\_header\_duration\_seconds\_bucket

Nginx Ingress controller - Header processing time (s) - Bucket

nginx\_ingress\_controller\_header\_duration\_seconds\_count

Nginx Ingress controller - Header processing time (seconds) - Count

nginx\_ingress\_controller\_header\_duration\_seconds\_sum

Total header processing time for the Nginx Ingress controller (seconds)

nginx\_ingress\_controller\_ingress\_upstream\_latency\_seconds

Nginx Ingress controller upstream latency (seconds)

nginx\_ingress\_controller\_ingress\_upstream\_latency\_seconds\_count

Nginx Ingress controller upstream latency count

nginx\_ingress\_controller\_ingress\_upstream\_latency\_seconds\_sum

Nginx Ingress controller upstream latency sum (seconds)

nginx\_ingress\_controller\_leader\_election\_status

Nginx Ingress controller leader election status

nginx\_ingress\_controller\_nginx\_process\_connections

Nginx Ingress controller nginx process connections

nginx\_ingress\_controller\_nginx\_process\_connections\_total

Total connections for the nginx process in the Nginx Ingress controller

nginx\_ingress\_controller\_nginx\_process\_cpu\_seconds\_total

Total CPU seconds for the Nginx Ingress controller's nginx process

nginx\_ingress\_controller\_nginx\_process\_num\_procs

Number of Nginx processes for the Nginx Ingress controller

nginx\_ingress\_controller\_nginx\_process\_oldest\_start\_time\_seconds

Start time of the oldest nginx process in the Nginx Ingress controller (seconds)

nginx\_ingress\_controller\_nginx\_process\_read\_bytes\_total

Total bytes read by the nginx process of the Nginx Ingress controller

nginx\_ingress\_controller\_nginx\_process\_requests\_total

Total requests for the Nginx Ingress controller's nginx process

nginx\_ingress\_controller\_nginx\_process\_resident\_memory\_bytes

Resident memory size (bytes) of the nginx process for the Nginx Ingress controller

nginx\_ingress\_controller\_nginx\_process\_virtual\_memory\_bytes

Virtual memory of the nginx process for the Nginx Ingress controller in bytes

nginx\_ingress\_controller\_nginx\_process\_write\_bytes\_total

Total bytes written by the nginx process of the Nginx Ingress controller

nginx\_ingress\_controller\_orphan\_ingress

Number of isolated Ingresses for the Nginx Ingress controller

nginx\_ingress\_controller\_request\_duration\_seconds\_bucket

Nginx Ingress controller request latency distribution (seconds)

nginx\_ingress\_controller\_request\_duration\_seconds\_count

Nginx Ingress controller request duration (seconds)

nginx\_ingress\_controller\_request\_duration\_seconds\_sum

Sum of Nginx Ingress controller request time (seconds)

nginx\_ingress\_controller\_request\_size\_bucket

Nginx Ingress controller request size distribution

nginx\_ingress\_controller\_request\_size\_count

Nginx Ingress controller request size count

nginx\_ingress\_controller\_request\_size\_sum

Nginx Ingress controller total request size

nginx\_ingress\_controller\_requests

Total Nginx Ingress controller requests

nginx\_ingress\_controller\_response\_duration\_seconds\_bucket

Nginx Ingress controller response time distribution (seconds)

nginx\_ingress\_controller\_response\_duration\_seconds\_count

Nginx Ingress controller response time (seconds)

nginx\_ingress\_controller\_response\_duration\_seconds\_sum

Total Nginx Ingress controller response time (seconds)

nginx\_ingress\_controller\_response\_size\_bucket

Nginx Ingress controller response size distribution

nginx\_ingress\_controller\_response\_size\_count

Nginx Ingress controller response size count

nginx\_ingress\_controller\_response\_size\_sum

Total Nginx Ingress controller response size

nginx\_ingress\_controller\_ssl\_certificate\_info

Nginx Ingress controller SSL certificate information

nginx\_ingress\_controller\_ssl\_expire\_time\_seconds

Nginx Ingress controller SSL certificate expiration time (seconds)

nginx\_ingress\_controller\_success

Nginx Ingress controller success count

Up

Metric collection connectivity

**Koordinator (Job names: kube-system/koordlet-metrics-podmonitor, koord-manager-metrics-service)**

**Metric**

**Description**

aliyun\_prometheus\_agent\_append\_duration\_seconds

The duration of append operations for the Alibaba Cloud Prometheus agent, in seconds.

aliyun\_prometheus\_agent\_scrapes\_by\_target\_total

The total number of scrapes by the Alibaba Cloud Prometheus agent, per target.

aliyun\_prometheus\_agent\_target\_info

The target information for the Alibaba Cloud Prometheus agent.

koord\_manager\_recommender\_recommendation\_workload\_target

The metric for recommended workload specifications from the resource profiling feature.

koordlet\_container\_resource\_limits

The metric for container resource limits.

koordlet\_container\_resource\_requests

The metric for container resource requests.

koordlet\_node\_priority\_resource\_reclaimable

The metric for node resource priority.

koordlet\_node\_resource\_allocatable

The metric for allocatable resources on a node.

slo\_manager\_recommender\_recommendation\_workload\_target

The metric for recommended workload specifications from the resource profiling feature. (Deprecated)

up

The connectivity for metric scraping.

**ACK dedicated etcd component (Job name: etcd)**

**Metric**

**Description**

aliyun\_prometheus\_agent\_append\_duration\_seconds

Duration of the append operation for the Alibaba Cloud Prometheus agent (seconds)

aliyun\_prometheus\_agent\_job\_discovery\_status

Status of scrape job discovery for the Alibaba Cloud Prometheus agent

aliyun\_prometheus\_agent\_scrape\_custom\_error

The number of errors from custom scrapes by the Alibaba Cloud Prometheus agent.

aliyun\_prometheus\_agent\_scrapes\_by\_target\_total

The total number of scrapes by target for the Alibaba Cloud Prometheus agent.

aliyun\_prometheus\_agent\_target\_info

Target information for an Alibaba Cloud Prometheus agent

cpu\_utilization\_core

CPU core utilization

etcd\_cluster\_version

The version of the etcd cluster.

etcd\_debugging\_auth\_revision

etcd debug authentication revision

etcd\_debugging\_disk\_backend\_commit\_rebalance\_duration\_seconds\_bucket

Etcd debugging disk backend commit rebalance duration distribution (seconds)

etcd\_debugging\_disk\_backend\_commit\_rebalance\_duration\_seconds\_count

The count of commit rebalance durations in seconds for the etcd Multi-Version Concurrency Control (MVCC) database, used for debugging.

etcd\_debugging\_disk\_backend\_commit\_rebalance\_duration\_seconds\_sum

Total commit rebalance duration for the etcd debug disk backend (seconds)

etcd\_debugging\_disk\_backend\_commit\_spill\_duration\_seconds\_bucket

The distribution of commit spill duration for the etcd debugging disk backend

etcd\_debugging\_disk\_backend\_commit\_spill\_duration\_seconds\_count

The total number of commit spills for the etcd debug disk backend.

etcd\_debugging\_disk\_backend\_commit\_spill\_duration\_seconds\_sum

Sum of the commit spill duration for the etcd debugging disk backend (seconds)

etcd\_debugging\_disk\_backend\_commit\_write\_duration\_seconds\_bucket

Etcd debug disk backend commit write duration distribution (seconds)

etcd\_debugging\_disk\_backend\_commit\_write\_duration\_seconds\_count

The total number of write commits to the etcd debug disk backend.

etcd\_debugging\_disk\_backend\_commit\_write\_duration\_seconds\_sum

The total duration of commit writes to the etcd debug disk backend, in seconds.

etcd\_debugging\_lease\_granted\_total

Total number of leases granted for etcd debugging

etcd\_debugging\_lease\_renewed\_total

The total number of etcd debugging lease renewals

etcd\_debugging\_lease\_revoked\_total

Total number of etcd debugging leases revoked.

etcd\_debugging\_lease\_ttl\_total\_bucket

Etcd debug lease TTL total bucket

etcd\_debugging\_lease\_ttl\_total\_count

Total count of etcd debug lease TTLs

etcd\_debugging\_lease\_ttl\_total\_sum

etcd lease TTL sum (seconds)

etcd\_debugging\_mvcc\_compact\_revision

etcd MVCC compaction revision for debugging

etcd\_debugging\_mvcc\_current\_revision

Current MVCC revision for etcd debugging

etcd\_debugging\_mvcc\_db\_compaction\_keys\_total

Total keys compacted in the etcd MVCC database for debugging

etcd\_debugging\_mvcc\_db\_compaction\_last

Last compaction time of the etcd MVCC database for debugging.

etcd\_debugging\_mvcc\_db\_compaction\_pause\_duration\_milliseconds\_bucket

The bucket for the pause duration in milliseconds during etcd MVCC database compaction for debugging.

etcd\_debugging\_mvcc\_db\_compaction\_pause\_duration\_milliseconds\_count

The count of pause durations (in milliseconds) during MVCC database compaction for etcd debugging.

etcd\_debugging\_mvcc\_db\_compaction\_pause\_duration\_milliseconds\_sum

Sum of pause durations for etcd MVCC database compaction during debugging (milliseconds).

etcd\_debugging\_mvcc\_db\_compaction\_total\_duration\_milliseconds\_bucket

Distribution of the total duration of MVCC database compaction for etcd debugging (in milliseconds)

etcd\_debugging\_mvcc\_db\_compaction\_total\_duration\_milliseconds\_count

The total count of etcd debug MVCC database compactions, measured in milliseconds.

etcd\_debugging\_mvcc\_db\_compaction\_total\_duration\_milliseconds\_sum

Sum of the total duration of etcd MVCC database compaction for debugging (milliseconds)

etcd\_debugging\_mvcc\_db\_total\_size\_in\_bytes

Total size of the etcd debug MVCC database in bytes

etcd\_debugging\_mvcc\_delete\_total

Total MVCC delete operations for etcd debugging

etcd\_debugging\_mvcc\_events\_total

Total number of etcd debug events

etcd\_debugging\_mvcc\_index\_compaction\_pause\_duration\_milliseconds\_bucket

The bucket for the etcd debugging MVCC index compaction pause duration in milliseconds.

etcd\_debugging\_mvcc\_index\_compaction\_pause\_duration\_milliseconds\_count

Count of etcd debug MVCC index compaction pauses.

etcd\_debugging\_mvcc\_index\_compaction\_pause\_duration\_milliseconds\_sum

The sum of pause durations in milliseconds for etcd MVCC index compaction during debugging.

etcd\_debugging\_mvcc\_keys\_total

The total number of MVCC keys for etcd debugging.

etcd\_debugging\_mvcc\_pending\_events\_total

Total number of pending MVCC events for etcd debugging

etcd\_debugging\_mvcc\_put\_total

Total number of MVCC put operations for debugging etcd

etcd\_debugging\_mvcc\_range\_total

Total etcd MVCC range queries

etcd\_debugging\_mvcc\_slow\_watcher\_total

Total number of slow watchers for etcd debugging

etcd\_debugging\_mvcc\_total\_put\_size\_in\_bytes

Total MVCC put size for etcd debugging (bytes)

etcd\_debugging\_mvcc\_txn\_total

Total Multi-Version Concurrency Control (MVCC) transactions for etcd debugging

etcd\_debugging\_mvcc\_watch\_stream\_total

Total etcd debug snapshot streams

etcd\_debugging\_mvcc\_watcher\_total

Total number of etcd debug watchers

etcd\_debugging\_server\_lease\_expired\_total

Total expired leases for the etcd debugging server.

etcd\_debugging\_snap\_save\_marshalling\_duration\_seconds\_bucket

Distribution of marshalling durations when saving etcd debug snapshots

etcd\_debugging\_snap\_save\_marshalling\_duration\_seconds\_count

The count of marshalling operations for saving an etcd debug snapshot. The duration is measured in seconds.

etcd\_debugging\_snap\_save\_marshalling\_duration\_seconds\_sum

The total time in seconds spent marshalling debugging snapshots for saving.

etcd\_debugging\_snap\_save\_total\_duration\_seconds\_bucket

The total time it takes to save an etcd debug snapshot, in seconds, by bucket.

etcd\_debugging\_snap\_save\_total\_duration\_seconds\_count

Total count of etcd debug snapshot save operations (duration in seconds)

etcd\_debugging\_snap\_save\_total\_duration\_seconds\_sum

The total time, in seconds, spent saving etcd debug snapshots.

etcd\_debugging\_store\_expires\_total

Total number of etcd debugging store expirations.

etcd\_debugging\_store\_reads\_total

Total debug store reads in etcd.

etcd\_debugging\_store\_watch\_requests\_total

The total number of watch requests for the etcd debug store.

etcd\_debugging\_store\_watchers

Number of etcd debugging store watchers

etcd\_debugging\_store\_writes\_total

Total etcd debug store writes

etcd\_disk\_backend\_commit\_duration\_seconds\_bucket

etcd disk backend commit duration bucket (seconds)

etcd\_disk\_backend\_commit\_duration\_seconds\_count

The total number of etcd disk backend commits.

etcd\_disk\_backend\_commit\_duration\_seconds\_sum

Total duration of etcd disk backend commits, in seconds.

etcd\_disk\_backend\_defrag\_duration\_seconds\_bucket

Distribution of etcd disk WAL fsync duration

etcd\_disk\_backend\_defrag\_duration\_seconds\_count

Duration of etcd disk backend defragmentation (seconds)

etcd\_disk\_backend\_defrag\_duration\_seconds\_sum

The sum of etcd disk backend defragmentation durations, in seconds.

etcd\_disk\_backend\_snapshot\_duration\_seconds\_bucket

Distribution of etcd disk backend snapshot duration (seconds)

etcd\_disk\_backend\_snapshot\_duration\_seconds\_count

The total count of timed etcd disk backend snapshots.

etcd\_disk\_backend\_snapshot\_duration\_seconds\_sum

Total duration of etcd disk backend snapshots in seconds.

etcd\_disk\_defrag\_inflight

etcd disk defragmentation in progress

etcd\_disk\_wal\_fsync\_duration\_seconds\_bucket

etcd disk WAL fsync duration seconds bucket

etcd\_disk\_wal\_fsync\_duration\_seconds\_count

The total number of etcd disk WAL fsync operations.

etcd\_disk\_wal\_fsync\_duration\_seconds\_sum

Sum of the etcd disk WAL fsync duration in seconds.

etcd\_disk\_wal\_write\_bytes\_total

Total bytes written to the etcd disk WAL

etcd\_grpc\_proxy\_cache\_hits\_total

Total number of etcd gRPC proxy cache hits

etcd\_grpc\_proxy\_cache\_keys\_total

The total number of etcd gRPC proxy cache keys.

etcd\_grpc\_proxy\_cache\_misses\_total

Total etcd gRPC proxy cache misses

etcd\_grpc\_proxy\_events\_coalescing\_total

Total number of events merged by the etcd gRPC proxy

etcd\_grpc\_proxy\_watchers\_coalescing\_total

Total number of coalesced watchers in the etcd gRPC proxy.

etcd\_mvcc\_db\_open\_read\_transactions

The number of open read transactions in the etcd MVCC database.

etcd\_mvcc\_db\_total\_size\_in\_bytes

Total size of the etcd MVCC database (bytes)

etcd\_mvcc\_db\_total\_size\_in\_use\_in\_bytes

The total size in use of the etcd MVCC database, in bytes.

etcd\_mvcc\_delete\_total

Total etcd MVCC deletes

etcd\_mvcc\_hash\_duration\_seconds\_bucket

Bucket for etcd MVCC hash duration in seconds.

etcd\_mvcc\_hash\_duration\_seconds\_count

Count of etcd MVCC hash durations (seconds)

etcd\_mvcc\_hash\_duration\_seconds\_sum

Total etcd MVCC hash duration in seconds

etcd\_mvcc\_hash\_rev\_duration\_seconds\_bucket

etcd MVCC hash revision duration distribution (seconds)

etcd\_mvcc\_hash\_rev\_duration\_seconds\_count

The count of etcd MVCC hash revision durations in seconds.

etcd\_mvcc\_hash\_rev\_duration\_seconds\_sum

Sum of etcd MVCC hash revision duration, in seconds

etcd\_mvcc\_put\_total

The total number of etcd MVCC Put operations

etcd\_mvcc\_range\_total

Total number of etcd MVCC range queries

etcd\_mvcc\_txn\_total

Total etcd multiversion concurrency control transactions

etcd\_network\_active\_peers

Number of active etcd network peers

etcd\_network\_client\_grpc\_received\_bytes\_total

Total number of bytes received by the etcd network client over gRPC

etcd\_network\_client\_grpc\_sent\_bytes\_total

The total number of bytes sent by the etcd gRPC client.

etcd\_network\_disconnected\_peers\_total

Total number of disconnected peers in the etcd network

etcd\_network\_peer\_received\_bytes\_total

Total bytes received by the etcd network peer

etcd\_network\_peer\_received\_failures\_total

Total number of failed receives from etcd network peers

etcd\_network\_peer\_round\_trip\_time\_seconds\_bucket

etcd network peer round-trip time distribution (seconds)

etcd\_network\_peer\_round\_trip\_time\_seconds\_count

Count of round trip times in seconds for etcd network peers

etcd\_network\_peer\_round\_trip\_time\_seconds\_sum

Total round trip time in seconds for etcd network peers

etcd\_network\_peer\_sent\_bytes\_total

Total bytes sent to etcd peers

etcd\_network\_peer\_sent\_failures\_total

Total etcd network peer send failures

etcd\_network\_server\_stream\_failures\_total

Total number of etcd network server stream failures

etcd\_network\_snapshot\_receive\_inflights\_total

The number of concurrent requests to receive etcd network snapshots.

etcd\_network\_snapshot\_receive\_success

The etcd network snapshot was accepted successfully.

etcd\_network\_snapshot\_receive\_total\_duration\_seconds\_bucket

Distribution bucket for the total duration, in seconds, of accepting etcd network snapshots.

etcd\_network\_snapshot\_receive\_total\_duration\_seconds\_count

The total count of etcd network snapshot receive operations.

etcd\_network\_snapshot\_receive\_total\_duration\_seconds\_sum

Total time spent receiving etcd network snapshots, in seconds.

etcd\_network\_snapshot\_send\_inflights\_total

The number of concurrent requests for sending etcd network snapshots.

etcd\_network\_snapshot\_send\_success

The etcd network snapshot was sent successfully.

etcd\_network\_snapshot\_send\_total\_duration\_seconds\_bucket

Total duration distribution for sending etcd network snapshots (seconds)

etcd\_network\_snapshot\_send\_total\_duration\_seconds\_count

Total number of etcd network snapshot send operations.

etcd\_network\_snapshot\_send\_total\_duration\_seconds\_sum

Sum of the total duration for sending etcd network snapshots, in seconds.

etcd\_server\_apply\_duration\_seconds\_bucket

etcd server apply duration distribution (seconds)

etcd\_server\_apply\_duration\_seconds\_count

Count of apply operations for the etcd server

etcd\_server\_apply\_duration\_seconds\_sum

The total time, in seconds, that the etcd server has spent applying requests.

etcd\_server\_client\_requests\_total

Total number of client requests to the etcd server

etcd\_server\_go\_version

The Go version of the etcd server

etcd\_server\_has\_leader

The etcd server has a leader.

etcd\_server\_health\_failures

Number of etcd server health check failures

etcd\_server\_health\_success

The etcd server health check is successful.

etcd\_server\_heartbeat\_send\_failures\_total

Total number of failed heartbeat sends from the etcd server

etcd\_server\_id

etcd server ID

etcd\_server\_is\_leader

Is the etcd server the leader

etcd\_server\_is\_learner

Whether the etcd server is a Learner

etcd\_server\_leader\_changes\_seen\_total

The total number of leader changes seen by the etcd server.

etcd\_server\_learner\_promote\_successes

The number of successful learner promotions in the etcd server.

etcd\_server\_proposals\_applied\_total

Total proposals applied on the etcd server

etcd\_server\_proposals\_committed\_total

Total number of proposals committed by the etcd server

etcd\_server\_proposals\_failed\_total

Total number of failed etcd server proposals

etcd\_server\_proposals\_pending

Number of pending etcd server proposals

etcd\_server\_quota\_backend\_bytes

The backend storage quota for the etcd server in bytes.

etcd\_server\_read\_indexes\_failed\_total

Total number of failed index reads on the etcd server.

etcd\_server\_slow\_apply\_total

Total slow applies on the etcd server

etcd\_server\_slow\_read\_indexes\_total

The total number of slow read indexes for the etcd server.

etcd\_server\_snapshot\_apply\_in\_progress\_total

Total etcd server snapshot applications in progress

etcd\_server\_version

etcd server version

etcd\_snap\_db\_fsync\_duration\_seconds\_bucket

Distribution of fsync duration for the etcd snapshot database (seconds).

etcd\_snap\_db\_fsync\_duration\_seconds\_count

Total fsync count for the etcd snapshot database

etcd\_snap\_db\_fsync\_duration\_seconds\_sum

Total fsync duration for the etcd snapshot database, in seconds.

etcd\_snap\_db\_save\_total\_duration\_seconds\_bucket

The bucket for the total duration, in seconds, to save the etcd snapshot database.

etcd\_snap\_db\_save\_total\_duration\_seconds\_count

Total save duration for the ETCD snapshot database in seconds

etcd\_snap\_db\_save\_total\_duration\_seconds\_sum

Total retention duration of the etcd snapshot database (seconds)

etcd\_snap\_fsync\_duration\_seconds\_bucket

Etcd snapshot fsync duration distribution (seconds)

etcd\_snap\_fsync\_duration\_seconds\_count

Etcd snapshot sync duration in seconds

etcd\_snap\_fsync\_duration\_seconds\_sum

etcd snapshot fsync total duration (seconds)

grpc\_server\_handled\_total

Total gRPC server requests processed

grpc\_server\_msg\_received\_total

Total messages received by the gRPC server

grpc\_server\_msg\_sent\_total

Total gRPC server messages sent

grpc\_server\_started\_total

Total gRPC server startups

memory\_utilization\_byte

Memory utilization in bytes

os\_fd\_limit

Operating system file descriptor limit

os\_fd\_used

Operating system file descriptor count

up

Connectivity for metric collection

**ACK Dedicated Scheduler (Job name: ack-scheduler)**

**Metric**

**Description**

aggregator\_discovery\_aggregation\_count\_total

Total count of aggregator discovery aggregations.

aliyun\_prometheus\_agent\_append\_duration\_seconds

Duration of append operations for the Alibaba Cloud Prometheus agent, in seconds.

aliyun\_prometheus\_agent\_job\_discovery\_status

Discovery status of scrape jobs for the Alibaba Cloud Prometheus agent.

aliyun\_prometheus\_agent\_scrape\_custom\_error

Number of custom scrape errors for the Alibaba Cloud Prometheus agent.

aliyun\_prometheus\_agent\_scrapes\_by\_target\_total

Total number of scrapes by target for the Alibaba Cloud Prometheus agent.

aliyun\_prometheus\_agent\_target\_info

Target information for the Alibaba Cloud Prometheus agent.

apiserver\_audit\_event\_total

Total number of API server audit events.

apiserver\_audit\_requests\_rejected\_total

Total number of rejected API server audit requests.

apiserver\_client\_certificate\_expiration\_seconds\_bucket

Distribution of remaining seconds until API server client certificate expiration.

apiserver\_client\_certificate\_expiration\_seconds\_count

Count of remaining seconds until API server client certificate expiration.

apiserver\_client\_certificate\_expiration\_seconds\_sum

Sum of remaining seconds until API server client certificate expiration.

apiserver\_delegated\_authn\_request\_duration\_seconds\_bucket

Distribution of API server delegated authentication request duration, in seconds.

apiserver\_delegated\_authn\_request\_duration\_seconds\_count

Count of API server delegated authentication request duration.

apiserver\_delegated\_authn\_request\_duration\_seconds\_sum

Sum of API server delegated authentication request duration.

apiserver\_delegated\_authn\_request\_total

Total number of API server delegated authentication requests.

apiserver\_delegated\_authz\_request\_duration\_seconds\_bucket

Distribution of API server delegated authorization request duration, in seconds.

apiserver\_delegated\_authz\_request\_duration\_seconds\_count

Count of API server delegated authorization request duration.

apiserver\_delegated\_authz\_request\_duration\_seconds\_sum

Sum of API server delegated authorization request duration, in seconds.

apiserver\_delegated\_authz\_request\_total

Total number of API server delegated authorization requests.

apiserver\_encryption\_config\_controller\_automatic\_reload\_failures\_total

Total number of automatic reload failures for the API server encryption configuration controller.

apiserver\_encryption\_config\_controller\_automatic\_reload\_success\_total

Total number of successful automatic reloads for the API server encryption configuration controller.

apiserver\_envelope\_encryption\_dek\_cache\_fill\_percent

Cache fill percentage for the API server envelope encryption Data Encryption Key (DEK).

apiserver\_storage\_data\_key\_generation\_duration\_seconds\_bucket

Distribution of API server storage data key generation duration.

apiserver\_storage\_data\_key\_generation\_duration\_seconds\_count

Count of API server storage data key generation duration.

apiserver\_storage\_data\_key\_generation\_duration\_seconds\_sum

Sum of API server storage data key generation duration, in seconds.

apiserver\_storage\_data\_key\_generation\_failures\_total

Total number of API server storage data key generation failures.

apiserver\_storage\_envelope\_transformation\_cache\_misses\_total

Total number of cache misses for API server storage envelope transformation.

apiserver\_webhooks\_x509\_insecure\_sha1\_total

Total count of insecure SHA1 in API server webhook X.509 certificates.

apiserver\_webhooks\_x509\_missing\_san\_total

Total count of API server webhooks with missing Subject Alternative Name (SAN) in X.509 certificates.

authenticated\_user\_requests

Authenticated user requests.

authentication\_attempts

Number of authentication attempts.

authentication\_duration\_seconds\_bucket

Distribution of authentication duration.

authentication\_duration\_seconds\_count

Count of authentication duration.

authentication\_duration\_seconds\_sum

Sum of authentication duration, in seconds.

authentication\_token\_cache\_active\_fetch\_count

Count of active fetches from the authentication token cache.

authentication\_token\_cache\_fetch\_total

Total number of fetches from the authentication token cache.

authentication\_token\_cache\_request\_duration\_seconds\_bucket

Distribution of authentication token cache request duration.

authentication\_token\_cache\_request\_duration\_seconds\_count

Count of authentication token cache request duration.

authentication\_token\_cache\_request\_duration\_seconds\_sum

Sum of authentication token cache request duration, in seconds.

authentication\_token\_cache\_request\_total

Total number of authentication token cache requests.

authorization\_attempts\_total

Total number of authorization attempts.

authorization\_duration\_seconds\_bucket

Distribution of authorization duration, in seconds.

authorization\_duration\_seconds\_count

Count of authorization duration.

authorization\_duration\_seconds\_sum

Sum of authorization duration.

cardinality\_enforcement\_unexpected\_categorizations\_total

Total number of unexpected categorizations from cardinality enforcement.

kubernetes\_build\_info

Kubernetes build information.

kubernetes\_feature\_enabled

Enabled Kubernetes feature.

leader\_election\_master\_status

Status of the leader election master.

registered\_metric\_total

Total number of registered metrics.

registered\_metrics\_total

Total number of registered metrics.

rest\_client\_exec\_plugin\_certificate\_rotation\_age\_bucket

Buckets for the age of rotated certificates for the REST client exec plugin.

rest\_client\_exec\_plugin\_certificate\_rotation\_age\_count

Count of the age of rotated certificates for the REST client exec plugin.

rest\_client\_exec\_plugin\_certificate\_rotation\_age\_sum

Sum of the age of rotated certificates for the REST client exec plugin.

rest\_client\_rate\_limiter\_duration\_seconds\_bucket

Distribution of REST client rate limiter duration.

rest\_client\_rate\_limiter\_duration\_seconds\_count

Count of REST client rate limiter duration, in seconds.

rest\_client\_rate\_limiter\_duration\_seconds\_sum

Sum of REST client rate limiter duration, in seconds.

rest\_client\_request\_duration\_seconds\_bucket

Buckets for REST client request duration, in seconds.

rest\_client\_request\_duration\_seconds\_count

Count of REST client request duration.

rest\_client\_request\_duration\_seconds\_sum

Sum of REST client request duration, in seconds.

rest\_client\_request\_retries\_total

Total number of REST client request retries.

rest\_client\_request\_size\_bytes\_bucket

Distribution of REST client request size, in bytes.

rest\_client\_request\_size\_bytes\_count

Count of REST client request size, in bytes.

rest\_client\_request\_size\_bytes\_sum

Sum of REST client request size, in bytes.

rest\_client\_requests\_total

Total number of REST client requests.

rest\_client\_response\_size\_bytes\_bucket

Buckets for REST client response size, in bytes.

rest\_client\_response\_size\_bytes\_count

Count of REST client response size, in bytes.

rest\_client\_response\_size\_bytes\_sum

Sum of REST client response size, in bytes.

rest\_client\_transport\_cache\_entries

Number of REST client transport cache entries.

rest\_client\_transport\_create\_calls\_total

Total number of REST client transport creation calls.

scheduler\_binding\_duration\_seconds\_bucket

Buckets for scheduler binding duration, in seconds.

scheduler\_binding\_duration\_seconds\_count

Count of binding duration.

scheduler\_binding\_duration\_seconds\_sum

Sum of scheduler binding duration, in seconds.

scheduler\_e2e\_scheduling\_duration\_seconds\_bucket

Distribution of scheduler end-to-end scheduling duration.

scheduler\_e2e\_scheduling\_duration\_seconds\_count

Count of scheduler end-to-end scheduling duration.

scheduler\_e2e\_scheduling\_duration\_seconds\_sum

Sum of scheduler end-to-end scheduling duration, in seconds.

scheduler\_framework\_extension\_point\_duration\_seconds\_bucket

Distribution of scheduler framework extension point duration.

scheduler\_framework\_extension\_point\_duration\_seconds\_count

Count of scheduler framework extension point duration.

scheduler\_framework\_extension\_point\_duration\_seconds\_sum

Sum of scheduler framework extension point duration.

scheduler\_goroutines

Number of scheduler goroutines.

scheduler\_pending\_pods

Number of pending pods in the scheduler.

scheduler\_plugin\_evaluation\_total

Total number of scheduler plugin evaluations.

scheduler\_plugin\_execution\_duration\_seconds\_bucket

Distribution of scheduler plugin execution duration, in seconds.

scheduler\_plugin\_execution\_duration\_seconds\_count

Count of scheduler plugin execution duration.

scheduler\_plugin\_execution\_duration\_seconds\_sum

Sum of scheduler plugin execution duration, in seconds.

scheduler\_pod\_preemption\_victims\_bucket

Buckets for the number of pod preemption victims in the scheduler.

scheduler\_pod\_preemption\_victims\_count

Count of pod preemption victims in the scheduler.

scheduler\_pod\_preemption\_victims\_sum

Sum of pod preemption victims in the scheduler.

scheduler\_pod\_scheduling\_attempts\_bucket

Buckets for the number of pod scheduling attempts in the scheduler.

scheduler\_pod\_scheduling\_attempts\_count

Count of pod scheduling attempts in the scheduler.

scheduler\_pod\_scheduling\_attempts\_sum

Sum of pod scheduling attempts in the scheduler.

scheduler\_pod\_scheduling\_duration\_seconds\_bucket

Buckets for pod scheduling duration in the scheduler, in seconds.

scheduler\_pod\_scheduling\_duration\_seconds\_count

Count of pod scheduling duration in the scheduler.

scheduler\_pod\_scheduling\_duration\_seconds\_sum

Sum of pod scheduling duration in the scheduler, in seconds.

scheduler\_pod\_scheduling\_sli\_duration\_seconds\_bucket

Buckets for pod scheduling Service Level Indicator (SLI) duration.

scheduler\_pod\_scheduling\_sli\_duration\_seconds\_count

Count of pod scheduling Service Level Indicator (SLI) duration in the scheduler.

scheduler\_pod\_scheduling\_sli\_duration\_seconds\_sum

Sum of pod scheduling Service Level Indicator (SLI) duration.

scheduler\_preemption\_attempts\_total

Total number of preemption attempts in the scheduler.

scheduler\_preemption\_victims\_bucket

Buckets for the number of preemption victims in the scheduler.

scheduler\_preemption\_victims\_count

Count of preemption victims in the scheduler.

scheduler\_preemption\_victims\_sum

Total number of preemption victims in the scheduler.

scheduler\_queue\_incoming\_pods\_total

Total number of incoming pods in the scheduler queue.

scheduler\_schedule\_attempts\_total

Total number of scheduling attempts in the scheduler.

scheduler\_scheduler\_cache\_size

Size of the scheduler cache.

scheduler\_scheduler\_goroutines

Number of scheduler goroutines.

scheduler\_scheduling\_algorithm\_duration\_seconds\_bucket

Distribution of scheduler scheduling algorithm duration, in seconds.

scheduler\_scheduling\_algorithm\_duration\_seconds\_count

Count of scheduler scheduling algorithm duration, in seconds.

scheduler\_scheduling\_algorithm\_duration\_seconds\_sum

Sum of scheduler scheduling algorithm duration, in seconds.

scheduler\_scheduling\_algorithm\_predicate\_evaluation\_seconds\_bucket

Buckets for scheduler scheduling algorithm predicate evaluation duration, in seconds.

scheduler\_scheduling\_algorithm\_predicate\_evaluation\_seconds\_count

Count of scheduling algorithm predicate evaluation duration, in seconds.

scheduler\_scheduling\_algorithm\_predicate\_evaluation\_seconds\_sum

Sum of scheduling algorithm predicate evaluation duration, in seconds.

scheduler\_scheduling\_algorithm\_preemption\_evaluation\_seconds\_bucket

Buckets for scheduling algorithm preemption evaluation duration, in seconds.

scheduler\_scheduling\_algorithm\_preemption\_evaluation\_seconds\_count

Count of scheduling algorithm preemption evaluation duration, in seconds.

scheduler\_scheduling\_algorithm\_preemption\_evaluation\_seconds\_sum

Sum of scheduling algorithm preemption evaluation duration, in seconds.

scheduler\_scheduling\_algorithm\_priority\_evaluation\_seconds\_bucket

Buckets for scheduler scheduling algorithm priority evaluation duration, in seconds.

scheduler\_scheduling\_algorithm\_priority\_evaluation\_seconds\_count

Count of scheduling algorithm priority evaluation duration, in seconds.

scheduler\_scheduling\_algorithm\_priority\_evaluation\_seconds\_sum

Sum of scheduling algorithm priority evaluation duration, in seconds.

scheduler\_scheduling\_attempt\_duration\_seconds\_bucket

Distribution of scheduler scheduling attempt duration.

scheduler\_scheduling\_attempt\_duration\_seconds\_count

Count of scheduler scheduling attempt duration.

scheduler\_scheduling\_attempt\_duration\_seconds\_sum

Sum of scheduler scheduling attempt duration, in seconds.

scheduler\_scheduling\_duration\_seconds

Scheduler scheduling duration, in seconds.

scheduler\_scheduling\_duration\_seconds\_count

Count of scheduling duration.

scheduler\_scheduling\_duration\_seconds\_sum

Sum of scheduling duration.

scheduler\_total\_preemption\_attempts

Total number of preemption attempts by the scheduler.

scheduler\_unschedulable\_pods

Number of unschedulable pods in the scheduler.

scheduler\_volume\_scheduling\_duration\_seconds\_bucket

Buckets for volume scheduling duration.

scheduler\_volume\_scheduling\_duration\_seconds\_count

Count of scheduler volume scheduling duration, in seconds.

scheduler\_volume\_scheduling\_duration\_seconds\_sum

Sum of scheduler volume scheduling duration, in seconds.

scheduler\_volume\_scheduling\_stage\_error\_total

Total number of errors in the scheduler volume scheduling stage.

scrape\_duration\_seconds

Scrape duration, in seconds.

scrape\_samples\_post\_metric\_relabeling

Number of scraped samples after metric relabeling.

scrape\_samples\_scraped

Number of scraped samples.

scrape\_series\_added

Number of new series added from scrapes.

up

Connectivity for metric scraping.

workqueue\_adds\_total

Total number of additions to the work queue.

workqueue\_depth

Depth of the work queue.

workqueue\_longest\_running\_processor\_seconds

Longest running processor time in the work queue, in seconds.

workqueue\_queue\_duration\_seconds\_bucket

Buckets for the duration items stay in the work queue, in seconds.

workqueue\_queue\_duration\_seconds\_count

Count of the duration items stay in the work queue, in seconds.

workqueue\_queue\_duration\_seconds\_sum

Sum of the duration items stay in the work queue, in seconds.

workqueue\_retries\_total

Total number of retries in the work queue.

workqueue\_unfinished\_work\_seconds

Seconds of unfinished work in the work queue.

workqueue\_work\_duration\_seconds\_bucket

Distribution of work duration in the work queue.

workqueue\_work\_duration\_seconds\_count

Count of work duration in the work queue.

workqueue\_work\_duration\_seconds\_sum

Sum of work duration in the work queue, in seconds.

## **References**

-   To view the metrics for ARMS Application Monitoring, see [Application Monitoring metrics](/help/en/arms/application-monitoring/developer-reference/application-monitoring-metrics).
    
-   [Configure deprecated metrics](/help/en/arms/prometheus-monitoring/configure-metrics#section-2cx-g8a-0bo)
