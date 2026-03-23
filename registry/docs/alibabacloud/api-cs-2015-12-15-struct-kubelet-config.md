Parameter

Type

Description

Example

object

The supported kubelet configurations.

registryPullQPS

long

The maximum queries per second (QPS) of the image repository.

5

registryBurst

long

The maximum number of images that can be pulled from bursty image pulls.

10

eventRecordQPS

long

Specifies the maximum number of events that can be generated per second.

5

eventBurst

long

The maximum number of burst peaks for the event records.

10

kubeAPIQPS

long

The QPS when kubelet communicates with the Kubernetes API server.

5

kubeAPIBurst

long

The maximum number of burst requests sent to the API server per second.

10

serializeImagePulls

boolean

Specifies whether to pull one image at a time.

true

cpuManagerPolicy

string

The CPU management policy used by kubelet.

none

evictionHard

object

A set of eviction thresholds that will trigger a pod eviction if met.

evictionSoft

object

A set of eviction thresholds that will trigger a pod eviction if met over a corresponding grace period.

evictionSoftGracePeriod

object

A set of grace periods for eviction thresholds.

systemReserved

object

A set of configurations that specify reserved resources for the system.

kubeReserved

object

A set of configurations that specify resources reserved for the Kubernetes system.

readOnlyPort

long

The read-only port.

0

maxPods

long

The maximum number of running pods.

110

containerLogMaxSize

string

The maximum size that a log file can reach before it is rotated.

10Mi

containerLogMaxFiles

long

The maximum number of log files that can be stored in each container.

5

featureGates

object

A feature gate that is used to enable an experimental feature.

allowedUnsafeSysctls

array

The whitelisted unsafe sysctls.

string

The whitelisted unsafe sysctls.

net.core.somaxconn

reservedMemory

array<object>

A list of configurations that specify memory reservations for non-uniform memory access (NUMA) nodes.

object

The memory limit.

numaNode

integer

The NUMA node identifier.

0

limits

object

The memory limit.

{"memory": "1Gi"}

memoryManagerPolicy

string

The name of the policy to be used by the memory manager.

none

cpuCFSQuota

boolean

Specifies whether to use Completely Fair Scheduler (CFS) quota to enforce pod CPU limits.

true

cpuCFSQuotaPeriod

string

The duration for the CPU CFS quota.

100ms

imageGCHighThresholdPercent

integer

The percentage of disk usage after which image garbage collection always runs.

85

imageGCLowThresholdPercent

integer

The percentage of disk usage before which image garbage collection never runs.

80

podPidsLimit

long

The maximum number of processes per pod.

\-1

topologyManagerPolicy

string

The name of the Topology Manager policy that you want to use.

restricted

clusterDNS

array

The list of IP addresses of the DNS servers.

string

A DNS server IP address.

127.0.xx.xx

tracing

object

The versioned configuration information for the Managed Service for OpenTelemetry client.

endpoint

string

The endpoint of the collector.

localhost:4317

samplingRatePerMillion

integer

The number of samples to be collected per million spans.

200000

containerLogMaxWorkers

integer

The maximum number of concurrent programs that rotate logs

1

containerLogMonitorInterval

string

The duration at which the container logs are monitored for rotating logs.

10s
