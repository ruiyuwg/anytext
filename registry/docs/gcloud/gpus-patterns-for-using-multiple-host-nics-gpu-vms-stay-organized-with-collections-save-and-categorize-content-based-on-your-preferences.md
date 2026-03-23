-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Compute](https://docs.cloud.google.com/docs/compute-area)
-   [Compute Engine](https://docs.cloud.google.com/compute/docs)
-   [Guides](https://docs.cloud.google.com/compute/docs/overview)

Send feedback

# Patterns for using multiple host NICs (GPU VMs) Stay organized with collections Save and categorize content based on your preferences.

Some accelerator-optimized machines, including A4X Max, A4X, A4, and A3 Ultra, have two network interfaces that can attach to regular Virtual Private Cloud (VPC) networks. These machines also have `MRDMA` network interfaces that must attach to an RoCE VPC network. On the host, these are [Titanium IPUs](https://cloud.google.com/titanium) which are plugged into separate CPU sockets and non-uniform memory access (NUMA) nodes. These IPUs are [available inside the VM](/compute/docs/gpus/gpu-network-bandwidth#h200-gpus) as Google Virtual NICs (gVNICs), and provide network bandwidth for storage activities such as checkpointing, loading training data, loading models, and other general networking needs. The machine's NUMA topology, including that of the gVNICs, is visible to the guest operating system (OS).

This document describes best practices for using the two gVNICs on these machines.

## Overview

In general, we recommend that you use the following configurations, regardless of how you plan to use multiple host NICs:

-   **Network settings:** [Each gVNIC network interface must use a unique VPC network](/vpc/docs/multiple-interfaces-concepts). For a VPC set up, consider the following:
    -   Use a large [maximum transmission unit](/vpc/docs/mtu) (MTU) for each VPC network. We recommend that you use 8896, which is the maximum supported MTU. The ingress performance for some workloads might be slowed down due to the system dropping incoming data packets on the receiver side. You can use the ethtool tool to check for this issue. In this scenario, it can be helpful to adjust the TCP MSS, interface MTU, or VPC MTU to allow for efficient data allocation from the page cache, which allows the incoming layer 2 frame to fit within two 4KB buffers.
-   **Application settings**
    -   NUMA-align the application. Use CPU cores, memory allocations, and a network interface from the same NUMA node. If you are running a dedicated instance of the application to use a specific NUMA node or network interface, you can use tools like `numactl` to attach the application's CPU and memory resources to a specific NUMA node.
-   **Operating system settings**
    -   Enable TCP segmentation offload (TSO) and large receive offload (LRO).
    -   For each gVNIC interface, ensure that the SMP affinity is set up so that its interrupt requests (IRQs) are handled on the same NUMA node as the interface, and spread interrupts out across cores. If you're running a Google-supplied guest OS image, this process happens automatically using the `google_set_multiqueue` script.
    -   Evaluate settings like [RFS, RPS, and XPS](https://www.kernel.org/doc/Documentation/networking/scaling.txt) to see if they may be helpful for your workload.
    -   For A4X and A4X Max, Nvidia recommends [disabling automatic NUMA scheduling](https://docs.nvidia.com/grace-perf-tuning-guide/os-settings.html#automatic-numa-scheduling-and-balancing).
    -   Linux kernel bonding is not supported for the gVNICs on these machines.

## Patterns for using multiple host NICs

The section outlines general patterns for using multiple host NICs on Google Cloud.

Pattern

Supported process layout

Deployment path: Compute Engine

Deployment path: GKE

Deployment path: Slurm

Notes

[Change application to use a specific interface](#application-use-specific-interface)

Process shard per interface

Yes

Yes

Yes

Requires code changes to the application

[Change application to use both interfaces](#application-use-both-interfaces)

Dual-interface process

Yes

Yes

Yes

Requires code changes to the application

[Use a dedicated network namespace for specific applications](#dedicated-namespace)

Process shard per interface

Yes

Yes (privileged containers only)

No

[Map an entire container's traffic to a single interface](#map-container)

All container traffic mapped to one interface

Yes

Yes

No

[Peer the VPCs and let the system load-balance sessions across interfaces](#peer-and-load-balance)

Dual-interface process

Yes\*

Yes\*

Yes\*

Challenging or impossible to NUMA-align Need Linux Kernel 6.16 or later\*

[Shard traffic across networks](#shard-traffic-across-networks)

Dual-interface process Process shard per interface

Yes\*

Yes\*

Yes\*

Might require code changes to NUMA-align if running a dual-interface process.

[Use SNAT to choose the source interface](#use-snat)

Dual-interface process Process shard per interface

Yes

Yes (setup requires administrator privileges)

Yes (setup requires administrator privileges)

Can be more challenging to configure correctly

_\* This option is not generally recommended but might be useful for limited workloads on x86 (A3 Ultra and A4) platforms._

## Change application to use a specific interface

**Requirements:**

-   This method requires code changes to your application.
-   Requires permissions for one or more of the following methods:
    -   `bind()` only requires special permissions if using a privileged source port.
    -   `SO_BINDTODEVICE`: requires `CAP_NET_RAW` permission.
-   This method can require you to modify your kernel routing table to establish routes and to prevent asymmetric routing.

**High-level overview**

**Note:** Some applications and libraries are already capable of and optimized for multi-NUMA or multi-socket scenarios, including multiple network interfaces. If you're using third-party or open source software, be sure to check the documentation for that software.

With this pattern, you complete the following:

1.  Add network interface binding to your application's source code by using one of the following options:
    -   Use `bind()`to bind a socket to a particular source IP address
    -   Use the `SO_BINDTODEVICE` socket option to bind a socket to a particular network interface
2.  Modify the kernel routing table as needed to ensure a route exists from the source network interface to the destination address. In addition, routes might be required to prevent asymmetric routing. We recommend that you configure policy routing as described in [Configure routing for an additional network interface](/vpc/docs/configure-routing-additional-interface).
3.  You can also use the `numactl` command to run your application. In this approach, you use the memory and CPUs that are on the same NUMA node as your chosen network interface.

After you complete the preceding steps, instances of your application run using a specific network interface.

## Change application to use both interfaces

**Requirements:**

-   This method requires code changes to your application.
-   You require permissions for one or more of the following methods:
    -   `bind()` only requires special permissions if using a privileged source port.
    -   `SO_BINDTODEVICE`: requires `CAP_NET_RAW` permission.
-   This method can require you to modify your kernel routing table to establish routes and to prevent asymmetric routing.

**High-level overview**

**Note:** Some applications and libraries are already capable of and optimized for multi-NUMA or multi-socket scenarios along with multiple network interfaces. If using third-party or open source software, be sure to check the documentation for that software.

To implement this pattern, you do the following:

1.  Add network interface binding to your application's source code by using one of the following options:
    1.  Use the `bind()` system call to bind a socket to a particular source IP address
    2.  Use the `SO_BINDTODEVICE` socket option to bind a socket to a particular network interface
2.  If your application is acting as the client, you will need to create a separate client socket for each source network interface.
3.  Modify the kernel routing table as needed to ensure a route exists from the source network interface to the destination address. In addition, you might also require routes to prevent asymmetric routing. We recommend that you configure policy routing as described in [Configure routing for an additional network interface](/vpc/docs/configure-routing-additional-interface).
4.  We recommend that you partition network activity into threads that run on the same NUMA node as the gVNIC interface. One common way of requesting a specific NUMA node for a thread is to call `pthread_setaffinity_np`.
    1.  Since the application utilizes resources on multiple NUMA nodes, avoid using `numactl` or ensure your `numactl` command includes the NUMA nodes of all network interfaces used by your application.

## Use a dedicated network namespace for specific applications

**Requirements:**

-   Requires `CAP_SYS_ADMIN` capability.
-   Not compatible with GKE autopilot.
-   If using GKE, you must have a privileged container.

This section describes patterns that you can use to create a network namespace that uses a secondary network interface. The right pattern for your workload depends on your specific scenario. The approaches that use virtual switch or IPvlan are better suited to cases where multiple applications need to use the secondary interface from different network namespaces.

**High-level overview: moving secondary interface into dedicated network namespace**

This pattern involves creating a network namespace, moving the secondary gVNIC interface into the new namespace, and then running the application from this namespace. This pattern might be less complicated to set up and tune compared to using a virtual switch. However, applications outside of the new network namespace will be unable to access the secondary gVNIC.

The following example shows a series of commands that can be used to move eth1 into the new network namespace called second.

```
ip netns add second
ip link set eth1 netns second
ip netns exec second ip addr add ${ETH1_IP}/${PREFIX} dev eth1
ip netns exec second ip link set dev eth1 up
ip netns exec second ip route add default via ${GATEWAY_IP} dev eth1
ip netns exec second <command>
```

When this command is run, the <command> expression is then executed inside the network namespace, and uses the eth1 interface.

Applications running inside the new network namespace now use the secondary gVNIC. You can also use the `numactl` command to run your application using the memory and CPUs that are on the same NUMA node as your chosen network interface.

**High-level overview: using a virtual switch and network namespace for a secondary interface** This pattern involves creating a virtual switch setup to use the secondary gVNIC from a network namespace.

The high-level steps are as follows:

1.  Create a Virtual Ethernet (veth) device pair. Adjust the maximum transmission unit (MTU) on each of the devices to match the MTU of the secondary gVNIC.
2.  Run the following to ensure that IP forwarding is enabled for IPv4: sysctl -w net.ipv4.ip\_forward=1
3.  Move one end of the veth pair into a new network namespace, and leave the other end in the root namespace.
4.  Map traffic from the veth device to the secondary gVNIC interface. There are several ways to do this, however, we recommend that you [create an IP alias range for the VM's secondary interface](/vpc/docs/alias-ip) and assign an IP address from this range to the child interface in the namespace.
5.  Run the application from the new network namespace. You can use the `numactl` command to run your application using memory and CPUs that are on the same NUMA node as the chosen network interface.

Depending on the guest and workload setup, alternatively, you can use the [IPvlan](https://www.kernel.org/doc/Documentation/networking/ipvlan.txt) driver with an IPvlan interface linked to the secondary gVNIC instead of creating the veth devices.

## Map an entire container's traffic to a single interface

**Requirements:**

-   Your application must run inside a container that uses a network namespace for container networking, such as GKE, Docker, or Podman. You can't use the host network.

Many container technologies, such as GKE, Docker, and Podman use a dedicated network namespace for a container to isolate its traffic. This network namespace may then be modified, either directly or using the container technology's tools to map traffic to a different network interface.

GKE requires that the primary interface is present for Kubernetes-internal communication. However, the default route in the pod can be changed to use the secondary interface, as shown in the following GKE pod manifest.

```
metadata:
  …
  annotations:
    networking.gke.io/default-interface: 'eth1'
    networking.gke.io/interfaces: |
      [
        {"interfaceName":"eth0","network":"default"},
        {"interfaceName":"eth1","network":"secondary-network"},
      ]
```

This approach does not guarantee NUMA alignment between the default network interface and CPUs or memory.

## Use VPC peering and let the system load-balance sessions across interfaces

**Requirements:**

-   VPC peering must be established between the VPC networks of the primary and secondary gVNICs.
-   Linux kernel version 6.16 is required to load-balance TCP sessions across source interfaces if sending to a single destination IP and port.
-   The workload can still meet your performance requirements when the networking stack generates cross-socket memory transfers.

**High level overview**

In some cases, it's challenging to shard network connections within an application or between instances of an application. In this scenario, for some applications running on A3U or A4 VMs that are not sensitive to cross-NUMA or cross-socket transfer, it can be convenient to treat the two interfaces as fungible.

One method to achieve this is to use the fib\_multipath\_hash\_policy sysctl and a multipath route:

```
PRIMARY_GW=192.168.1.1  # gateway of nic0
SECONDARY_GW=192.168.2.1  # gateway of nic1
PRIMARY_IP=192.168.1.15  # internal IP for nic0
SECONDARY_IP=192.168.2.27  # internal IP nic1

sysctl -w net.ipv4.fib_multipath_hash_policy=1  # Enable L4 5-tuple ECMP hashing
ip route add <destination-network/subnet-mask> nexthop via ${PRIMARY_GW} nexthop
via ${SECONDARY_GW}
```

## Shard traffic across networks

**Requirements:**

-   `nic0` and `nic1` on the VM are in separate VPC networks and subnets. This pattern requires that the **destination** addresses are sharded across `nic0`'s and `nic1`'s VPC networks.

**High level overview**

By default, the Linux kernel creates routes for `nic0`'s subnet and `nic1`'s subnet that will route traffic by destination through the appropriate network interface.

For example, suppose `nic0` uses VPC network `net1` with subnet `subnet-a`, and `nic1` uses VPC network `net2` with subnet `subnet-b`. By default, communications to peer IP addresses in `subnet-a` will use `nic0`, and communications to peer IP addresses in `subnet-b` will use `nic1`. For example, this scenario can occur with a set of peer single-NIC VMs connected to `net1` and a set connected to `net2`.

**Tip:** If two instances of the application can be run (one per VPC network), the `numactl` tool can be used to NUMA-align the application's memory and compute resources with its network interface to minimize cross-socket transfer.

## Use SNAT to choose the source interface

**Warning:** This pattern is complex and has multiple interdependent parts. Make sure that you evaluate these rules in context of other networking configurations on your machine. If rules are misconfigured, system-wide traffic could be misrouted or dropped entirely.

**Requirements:**

-   `CAP_NET_ADMIN` is required for setting up initial iptables rules, though not for running the application.
-   You must carefully evaluate rules when using them in combination with other nontrivial iptables rules or routing configurations.

**Note:**

-   The NIC binding is only correct at the time the connection is created. If a thread moves to a CPU associated with a different NUMA node, the connection will suffer cross-NUMA penalties. Therefore, this solution is most useful when there is some mechanism to bind threads to specific CPU sets.
-   Only connections originated by this machine will be bound to a specific NIC. Inbound connections will be associated with the NIC matching whatever address they are destined to.

**High-level overview**

In scenarios where it's challenging to use network namespaces or make application changes, you can use NAT to pick a source interface. You can use tools like iptables to rewrite the source IP for a flow to match a particular interface's IP based on a property of the sending application, such as cgroup, user, or CPU.

The following example uses CPU-based rules. The end result is that a flow that originates from a thread running on any given CPU is transmitted by the gVNIC that's attached to that CPU's corresponding NUMA node.

```
# --- Begin Configuration ---
OUTPUT_INTERFACE_0="enp0s19"        # CHANGEME: NIC0
OUTPUT_INTERFACE_1="enp192s20"      # CHANGEME: NIC1

CPUS_0=($(seq 0 55; seq 112 167))   # CHANGEME: CPU IDs for NIC0
GATEWAY_0="10.0.0.1"                # CHANGEME: Gateway for NIC0
SNAT_IP_0="10.0.0.2"                # CHANGEME: SNAT IP for NIC0
CONNMARK_0="0x1"
RT_TABLE_0="100"

CPUS_1=($(seq 56 111; seq 168 223)) # CHANGEME: CPU IDs for NIC1
GATEWAY_1="10.0.1.1"                # CHANGEME: Gateway for NIC1
SNAT_IP_1="10.0.1.2"                # CHANGEME: SNAT IP for NIC1
CONNMARK_1="0x2"
RT_TABLE_1="101"
# --- End Configuration ---

# This informs which interface to use for packets in each table.
ip route add default via "$GATEWAY_0" dev "$OUTPUT_INTERFACE_0" table "$RT_TABLE_0"
ip route add default via "$GATEWAY_1" dev "$OUTPUT_INTERFACE_1" table "$RT_TABLE_1"

# This is not required for connections we originate, but replies to
# connections from peers need to know which interface to egress from.
# Add it before the fwmark rules to implicitly make sure fwmark takes precedence.
ip rule add from "$SNAT_IP_0" table "$RT_TABLE_0"
ip rule add from "$SNAT_IP_1" table "$RT_TABLE_1"

# This informs which table to use based on the packet mark set in OUTPUT.
ip rule add fwmark "$CONNMARK_0" table "$RT_TABLE_0"
ip rule add fwmark "$CONNMARK_1" table "$RT_TABLE_1"

# Relax reverse path filtering.
# Otherwise, we will drop legitimate replies to the SNAT IPs.
sysctl -w net.ipv4.conf."$OUTPUT_INTERFACE_0".rp_filter=2
sysctl -w net.ipv4.conf."$OUTPUT_INTERFACE_1".rp_filter=2

# Mark packets/connections with a per-nic mark based on the source CPU.
# The `fwmark` rules will then use the corresponding routing table for this traffic.
for cpu_id in "${CPUS_0[@]}"; do
    iptables -t mangle -A OUTPUT -m state --state NEW -m cpu --cpu "$cpu_id" -j CONNMARK --set-mark "$CONNMARK_0"
    iptables -t mangle -A OUTPUT -m state --state NEW -m cpu --cpu "$cpu_id" -j MARK --set-mark "$CONNMARK_0"
done
for cpu_id in "${CPUS_1[@]}"; do
    iptables -t mangle -A OUTPUT -m state --state NEW -m cpu --cpu "$cpu_id" -j CONNMARK --set-mark "$CONNMARK_1"
    iptables -t mangle -A OUTPUT -m state --state NEW -m cpu --cpu "$cpu_id" -j MARK --set-mark "$CONNMARK_1"
done

# For established connections, restore the connection mark.
# Otherwise, we will send the packet to the wrong NIC, depending on existing
# routing rules.
iptables -t mangle -A OUTPUT -m conntrack --ctstate ESTABLISHED,RELATED -j CONNMARK --restore-mark

# These rules NAT the source address after the packet is already destined to
# egress the correct interface. This lets replies to this flow target the correct NIC,
# and may be required to be accepted into the VPC network.
iptables -t nat -A POSTROUTING -m mark --mark "$CONNMARK_0" -j SNAT --to-source "$SNAT_IP_0"
iptables -t nat -A POSTROUTING -m mark --mark "$CONNMARK_1" -j SNAT --to-source "$SNAT_IP_1"

```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
