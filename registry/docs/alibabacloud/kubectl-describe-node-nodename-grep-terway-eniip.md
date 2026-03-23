Connection tracking (conntrack) is a connection tracking mechanism that monitors and logs network connection status, including TCP states such as SYN, ESTABLISHED, and CLOSED. In Terway Datapath V2 and IPvlan modes, conntrack uses extended Berkeley Packet Filter (eBPF) maps to store information about container traffic. In other modes, the traditional Linux conntrack implementation is used. This topic describes how to modify the size of the eBPF conntrack table for optimal performance.

## Check the conntrack table size

The eBPF conntrack table size depends on the memory capacity of the node.

Run the following commands to view the conntrack table size on a node.

1.  Retrieve the terway-eniip pod name:
    

```
# kubectl describe node <nodename>  | grep terway-eniip
  kube-system                 terway-eniip-xxxx         350m (8%)     1100m (28%)  200Mi (3%)       256Mi (3%)     16h
```

2.  Query the conntrack table size:
    

```
# kubectl exec -it -nkube-system terway-eniip-xxxx -c policy -- cilium status --verbose
...
BPF Maps:   dynamic sizing: on (ratio: 0.002500)
  Name                          Size
  Auth                          524288
  Non-TCP connection tracking   65536
  TCP connection tracking       131072
  Endpoint policy               65535
...
```

Parameter description:

-   `dynamic sizing: on`: enables a dynamic upper limit for eBPF maps. If the value is set to `off`, you can configure the `bpf-map-dynamic-size-ratio` parameter to enable dynamic adjustment or configure the `bpf-ct-global-any-max`, `bpf-ct-global-tcp-max`, and `bpf-nat-global-max` parameters to specify the sizes of different tables.
    
-   `ratio: 0.002500`: the maximum size of eBPF maps based on the specified proportion of total system memory.
    
-   `Non-TCP connection tracking`: the maximum entries in a non-TCP conntrack table.
    
-   `TCP connection tracking`: the maximum entries in the TCP conntrack table.
    

## **Check the number of conntrack entries**

By default, each node exposes a Prometheus metric port. The default port is `9962`. The following table describes the metric you can collect by using the monitoring component.

**Metric**

**Labels and values**

cilium\_datapath\_conntrack\_gc\_entries

family: the IP address type. Valid values: `ipv4` and `ipv6`.

protocol: the protocol type. Valid values: `non-TCP` and `TCP`.

status: the cleanup status. By combining all states, you can obtain the number of conntrack entries before cleanup. Valid values: `alived` and `deleted`.

### **Modify the default monitoring port**

**Parameter**

**Description**

prometheus-serve-addr

The Prometheus listening port. To disable the port, set the value to `\"\"`.

-   Terway ≥ 1.14.0: disabled by default
    
-   Terway < 1.14.0: set to `:9962` by default.
    

For more information about how to modify this parameter, see the `cilium_args` parameter description in [Customize Terway configuration parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/terway-configuration-parameters).

## Adjust the eBPF conntrack size

The eBPF conntrack and Linux conntrack are functionally identical. The default settings can meet the requirements of most business scenarios without the need for additional configurations.

You must modify the settings based on your business requirements in the following scenarios:

-   A large number of long-lived connections exist.
    
-   Pods are directly exposed to the Internet, and a large number of half-open connections may exist.
    

**Important**

Adjusting the conntrack table size is a high-risk operation. Before you adjust the conntrack table size in a production environment, we recommend that you evaluate the effect of the adjustment. After you adjust the conntrack table size, refer to the **Check the conntrack table size** section in this topic to check whether the adjustment takes effect.

**Parameter**

**Description**

bpf-map-dynamic-size-ratio

The maximum size of eBPF maps based on the specified proportion of total system memory.

`off`: disables auto scaling (fixed map size)

`0.0025`: sets map limit to 0.0025 of total system memory

bpf-ct-timeout-regular-any

The timeout period of entries in a non-TCP conntrack table.

Default value: `1m0s`.

bpf-ct-timeout-regular-tcp

The timeout period of established connection entries in the TCP conntrack table.

Default value: `6h0m0s`.

bpf-ct-timeout-regular-tcp-fin

The timeout period of closing connections in the TCP conntrack table.

Default value: `10s`.

bpf-ct-timeout-regular-tcp-syn

The timeout period of establishing connections in the TCP conntrack table.

Default value: `1m0s`.

bpf-ct-timeout-service-any

The timeout period of entries in a non-TCP service conntrack table.

Default value: `1m0s`.

bpf-ct-timeout-service-tcp

The timeout period of established service connections in the TCP service conntrack table.

Default value: `6h0m0s`.

bpf-ct-timeout-service-tcp-grace

The timeout period of graceful service shutdown in the TCP service conntrack table.

Default value: `1m0s`.

conntrack-gc-interval

The conntrack table cleanup interval.

Default value: `5m0s`.

**Note**

This parameter specifies the interval at which cilium-agent proactively cleans up the conntrack table. Do not specify a value greater than the default value.

A shorter cleanup interval increases the CPU consumption of cilium-agent but prevents the conntrack table from being full. You can adjust the CPU limit of the Terway container in the Container Service for Kubernetes (ACK) console.

bpf-ct-global-any-max

The maximum size of a non-TCP service conntrack table.

**Note**

When dynamic sizing is enabled (dynamic sizing: on), we recommend that you use the `bpf-map-dynamic-size-ratio` parameter to adjust the table size. This helps you better control and optimize the dynamic adjustment mechanism of BPF maps.

bpf-ct-global-tcp-max

The maximum size of the TCP service conntrack table.

**Note**

When dynamic sizing is enabled (dynamic sizing: on), we recommend that you use the `bpf-map-dynamic-size-ratio` parameter to adjust the table size. This parameter helps you better control and optimize the dynamic adjustment mechanism of BPF maps.

bpf-nat-global-max

The maximum size of the BPF NAT table.

**Note**

The value of the bpf-nat-global-max parameter must be less than the values of the bpf-ct-global-any-max and bpf-ct-global-tcp-max parameters.

The default size = (Value of bpf-ct-global-any-max + Value of bpf-ct-global-tcp-max) × 2/3

When dynamic sizing is enabled (dynamic sizing: on), we recommend that you use the `bpf-map-dynamic-size-ratio` parameter to adjust the table size. This helps you better control and optimize the dynamic adjustment mechanism of BPF maps.

For more information about how to modify this parameter, see the `cilium_args` parameter description in [Customize Terway configuration parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/terway-configuration-parameters).

With `bpf-map-dynamic-size-ratio` set to `0.0025`, the map sizes for different node memory capacities are as follows:

**Node memory**

**CT map size (TCP)**

**CT map size (any)**

**NAT map size**

7.5 GiB

131,072

65,536

131,072

16 GiB

151,765

75,882

151,765

30 GiB

284,560

142,280

284,560

240 GiB

2,276,484

1,138,242

2,276,484

### **Example**

The following sample code block sets `bpf-map-dynamic-size-ratio` to `0.003` and `bpf-ct-timeout-regular-tcp` to `1h`.

```
10-terway.conf: |
{
  "cniVersion": "0.4.0",
  "name": "terway",
  "capabilities": {"bandwidth": true},
  "eniip_virtual_type": "IPvlan",
  "cilium_args": "--bpf-map-dynamic-size-ratio=0.003 --bpf-ct-timeout-regular-tcp=1h",
  "type": "terway"
}
```
