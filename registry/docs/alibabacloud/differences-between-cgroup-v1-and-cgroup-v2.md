Control groups (cgroups) are a Linux kernel feature that restricts, accounts for, and isolates the physical resources (such as CPU, memory, and I/O) of process groups. A parent process can use cgroups to manage the resource consumption of its child process groups. This document outlines the key differences between the two major versions, cgroup v1 and cgroup v2.

## General interface differences

### **cgroup v1 interfaces**

**Interface name**

**Purpose**

**In-house interface**

**Corresponding cgroup v2 interface**

cgroup.procs

Moves a process into the cgroup by writing its PID to this file.

No

cgroup.procs.

cgroup.clone\_children

If set to 1, a child cgroup inherits the configuration of its parent's cpuset.

**Note**

This applies only to the `cpuset` subsystem but is located in the general interface for historical reasons.

No

N/A

cgroup.sane\_behavior

An interface for an experimental v2 feature. It is kept for backward compatibility after the official release of v2.

No

N/A

notify\_on\_release

When set to 1, the system executes the `release_agent` script when this cgroup becomes empty.

**Note**

This file exists only in the root cgroup.

No

cgroup.events, which implements similar functionality

release\_agent

No

tasks

Moves a thread to the cgroup when its thread ID (TID) is written to this file.

No

cgroup.threads.

pool\_size

Controls the size of the cgroup cache pool. In high-concurrency scenarios, this can accelerate cgroup creation and binding.

**Note**

This depends on `cgroup_rename` and is not currently available in cgroup v2.

Yes

N/A

### **cgroup v2 interfaces**

**Interface name**

**Purpose**

**In-house interface**

**Corresponding cgroup v1 interface**

cgroup.procs

Moves a process into the cgroup by writing its PID to this file.

No

cgroup.procs.

cgroup.type

Write `threaded` to this file to enable thread-granularity control.

**Note**

This is only supported for the [cpu](#df63c663f57l9), [pids](#16d7435178cvp), and [perf\_event](#572a2d4028hwb) subsystems.

No

N/A

cgroup.threads

Moves a thread to the cgroup when its TID is written to this file.

**Note**

`cgroup.type` must be set to `threaded`.

No

tasks.

cgroup.controllers

Lists the subsystems enabled for the current cgroup.

No

N/A

cgroup.subtree\_control

Controls which subsystems are enabled for child cgroups.

**Note**

Subsystems must be a subset of those in `cgroup.controllers`.

No

N/A

cgroup.events

Records whether the cgroup is managing processes and whether it is frozen. You can use `fsnotify` to monitor status changes.

**Note**

This file does not exist in the root cgroup.

No

Similar functionality can be achieved by using `notify_on_release` and `release_agent`.

cgroup.max.descendants

Controls the maximum number of descendant cgroups.

No

N/A

cgroup.max.depth

Controls the maximum depth of descendant cgroups.

No

N/A

cgroup.stat

Shows the number of descendant cgroups and the number of descendant cgroups in a `dying` state (being destroyed).

No

N/A

cgroup.freeze

Freezes or unfreezes all processes in the cgroup.

**Note**

This file does not exist in the root cgroup.

No

freezer.state in the [freezer](#1be625126ebm7) subsystem

cpu.stat

Shows CPU usage statistics.

No

N/A

io.pressure

Shows Pressure Stall Information (PSI). Supports `poll`. For more information, see the following topics:

-   [psi.rst](https://www.kernel.org/doc/Documentation/accounting/psi.rst)
    
-   [Enable the PSI feature for cgroup v1](/help/en/alinux/user-guide/enable-the-psi-feature-for-cgroup-v1)
    

No

After you enable PSI for cgroup v1, this is implemented by `io.pressure`, `memory.pressure`, and `cpu.pressure` under the [cpuacct](#dc9edf3bf9c73) subsystem.

memory.pressure

No

cpu.pressure

No

## Subsystem interface differences

### **CPU**

#### **cgroup v1 interfaces**

**Interface name**

**Purpose**

**In-house interface**

**Corresponding cgroup v2 interface**

cpu.shares

Controls the weight to allocate CPU time slices based on proportion. The default value is 1024.

No

`cpu.weight`, `cpu.weight.nice`. The units are different.

cpu.idle

Sets the scheduling policy for the cgroup to `idle`. An idle group receives time slices based on the minimum CPU share and is no longer guaranteed a minimum runtime. This makes it more likely to yield the CPU to non-idle processes.

**Note**

When `cpu.idle` is 1, `cpu.shares` becomes read-only and its value changes to 3.

No

cpu.idle

cpu.priority

Sets the fine-grained preemptive priority. Preemption is determined during clock interrupts or wake-ups and adjusted based on the priority difference. This makes it easier for high-priority tasks to preempt low-priority ones.

Yes

cpu.priority

cpu.cfs\_quota\_us

The CPU runtime controlled by using Completely Fair Scheduler (CFS). cpu.cfs\_quota\_us specifies the maximum CPU runtime of tasks in a cgroup within a period defined by the cpu.cfs\_period\_us interface.

No

cpu.max

cpu.cfs\_period\_us

No

cpu.cfs\_burst\_us

The amount of burst time a process is allowed to run within a `cpu.cfs_period_us` period. For more information, see [Enable the CPU burst feature for cgroup v1](/help/en/alinux/user-guide/enable-the-cpu-burst-feature-for-cgroup-v1).

No

cpu.max.burst

cpu.cfs\_init\_buffer\_us

The amount of burst time a process is allowed to run at startup.

Yes

cpu.max.init\_buffer

cpu.stat

Shows statistics related to CPU bandwidth control, such as the number of periods elapsed and the number of times throttling occurred.

No

cpu.stat

cpu.rt\_runtime\_us

A real-time (RT) task bandwidth control. For RT processes, within a period defined by `cpu.rt_period_us`, processes in the group can run for a maximum time of `cpu.rt_runtime_us`.

No

N/A

cpu.rt\_period\_us

No

N/A

cpu.bvt\_warp\_ns

Controls the group identity attribute to differentiate between online and offline processes. This provides better CPU quality of service (QoS) for online processes. For more information, see [Group identity feature](/help/en/alinux/user-guide/group-identity-feature).

Yes

cpu.bvt\_warp\_ns

cpu.identity

Yes

cpu.identity

cpu.ht\_stable

Controls whether to generate noise on the simultaneous multithreading (SMT) sibling to stabilize SMT computing power.

Yes

N/A

cpu.ht\_ratio

Controls whether extra quota is calculated due to an idle SMT sibling. This is used to stabilize SMT computing power.

Yes

cpu.ht\_ratio

#### cgroup v2 interfaces

**Note**

Because cgroup v2 no longer supports the `cpuacct` subsystem, some of its interfaces or related features are now implemented in the `cpu` subsystem.

**Interface name**

**Purpose**

**In-house interface**

**Corresponding cgroup v1 interface**

cpu.weight

Controls the weight to allocate CPU time slices based on proportion. The default value is 100.

No

cpu.shares, which uses a different unit

cpu.weight.nice

Controls the weight to allocate CPU time slices based on proportion. The default value is 0.

No

cpu.shares, which uses a different unit

cpu.idle

Sets the scheduling policy for the cgroup to `idle`. An idle group receives time slices based on the minimum CPU share and is no longer guaranteed a minimum runtime. This makes it more likely to yield the CPU to non-idle processes.

**Note**

When `cpu.idle` is 1, `cpu.weight` and `cpu.weight.nice` become read-only and are set to the minimum weight (0.3). Due to rounding, reading `cpu.weight` will return 0.

No

cpu.idle

cpu.priority

Sets the fine-grained preemptive priority. Preemption is determined during clock interrupts or wake-ups and scaled based on the priority difference. This makes it easier for high-priority tasks to preempt low-priority ones.

Yes

cpu.priority

cpu.max

A CFS bandwidth control. Contains two values, `quota` and `period`. Within the `period`, processes in the group can run for a maximum of `quota` time.

No

cpu.cfs\_quota\_us, cpu.cfs\_period\_us

cpu.max.burst

The amount of burst time a process is allowed to run within the `period` defined by `cpu.max`.

No

cpu.max.burst

cpu.max.init\_buffer

The amount of burst time a process is allowed to run at startup.

Yes

cpu.cfs\_init\_buffer\_us

cpu.bvt\_warp\_ns

Controls the group identity attribute to differentiate offline processes. This provides better CPU QoS for online processes.

Yes

cpu.bvt\_warp\_ns

cpu.identity

Yes

cpu.identity

cpu.sched\_cfs\_statistics

Provides CFS-related statistics, such as run time and time spent waiting for sibling or non-sibling cgroups.

**Note**

Requires `kernel.sched_schedstats` to be enabled.

Yes

cpuacct.sched\_cfs\_statistics

cpu.wait\_latency

The latency distribution of processes waiting in the queue.

**Note**

Requires `kernel.sched_schedstats` and `/proc/cpusli/sched_lat_enabled` to be enabled.

Yes

cpuacct.wait\_latency

cpu.cgroup\_wait\_latency

The latency distribution of process groups waiting in the queue. The difference from `wait_latency` is that `wait_latency` tracks the task `sched_entity`, while `cgroup_wait_latency` tracks the group `sched_entity`.

**Note**

Requires `kernel.sched_schedstats` and `/proc/cpusli/sched_lat_enabled` to be enabled.

Yes

cpuacct.cgroup\_wait\_latency

cpu.block\_latency

The latency distribution of processes blocked for non-I/O reasons.

**Note**

Requires `kernel.sched_schedstats` and `/proc/cpusli/sched_lat_enabled` to be enabled.

Yes

cpuacct.block\_latency

cpu.ioblock\_latency

The latency distribution of processes blocked for I/O reasons.

**Note**

Requires `kernel.sched_schedstats` and `/proc/cpusli/sched_lat_enabled`.

Yes

cpuacct.ioblock\_latency

cpu.ht\_ratio

Controls whether extra quota is calculated due to an idle SMT sibling. This is used to stabilize SMT computing power.

**Note**

This takes effect only when core scheduling is enabled.

Yes

cpu.ht\_ratio

### **cpuset**

#### **cgroup v1 interfaces**

**Interface name**

**Purpose**

**In-house interface**

**Corresponding cgroup v2 interface**

cpuset.cpus

Controls the CPUs on which tasks can run.

**Note**

Tasks cannot be attached to a cgroup when this interface is empty.

No

cpuset.cpus

cpuset.mems

Controls the non-uniform memory access (NUMA) nodes that can be allocated to tasks in a cgroup.

**Note**

Tasks cannot be attached to a cgroup when this interface is empty.

No

cpuset.mems

cpuset.effective\_cpus

Queries the effective CPUs on which tasks are running. The value of this interface is affected by CPU hotplug events.

No

cpuset.cpus.effective

cpuset.effective\_mems

Queries the effective NUMA nodes that are allocated to the running tasks. The value of this interface is affected by memory nodes hotplug events.

No

cpuset.mems.effective

cpuset.cpu\_exclusive

Controls which CPUs are exclusively used by a cgroup and cannot be used by other cpusets at the same level in a cgroup.

No

cpuset.cpus.partition, that supports similar functionality

cpuset.mem\_exclusive

Controls which NUMA nodes are exclusively used by a cgroup and cannot be used by other cpusets at the same level in a cgroup.

No

N/A

cpuset.mem\_hardwall

A value of 1 indicates that memory only from the memory nodes that are attached to the cpuset can be allocated to tasks.

No

N/A

cpuset.sched\_load\_balance

Controls whether CPUs are load-balanced within the cpuset. By default, the feature is enabled.

No

N/A

cpuset.sched\_relax\_domain\_level

Controls the range in which to search for CPUs when a scheduler migrates tasks to load-balance CPUs for the tasks. Default value: -1.

-   \-1: enforces the default system policy.
    
-   0: does not perform a search.
    
-   1: searches for hyperthreads within the same core.
    
-   2: searches for cores in the same package.
    
-   3: searches for CPUs on the same node.
    
-   4: searches for CPUs on nodes in the same chunk.
    
-   5: searches for CPUs in the entire system.
    

No

N/A

cpuset.memory\_migrate

A non-zero value indicates that if a task is allocated a memory page in a cpuset and migrated to another cpuset, the memory page can also be migrated to the new cpuset.

No

N/A

cpuset.memory\_pressure

Calculates the memory paging pressure of the current cpuset.

No

N/A

cpuset.memory\_spread\_page

A value of 1 indicates that the kernel evenly allocates the page cache to the memory nodes of the cpuset.

No

N/A

cpuset.memory\_spread\_slab

A value of 1 indicates that the kernel evenly allocates the slab caches to the memory nodes of the cpuset.

No

N/A

cpuset.memory\_pressure\_enabled

A value of 1 indicates that memory pressure statistics collection is enabled for the cpuset.

No

N/A

#### **cgroup v2 interfaces**

**Interface name**

**Purpose**

**In-house interface**

**Corresponding cgroup v1 interface**

cpuset.cpus

Controls the CPUs on which tasks can run.

**Note**

When the value of this interface is empty, the CPUs of the parent cpuset are used.

No

cpuset.cpus

cpuset.mems

Controls the NUMA nodes that can be allocated to tasks in a cgroup.

**Note**

When the value of this interface is empty, the NUMA nodes of the parent cpuset are used.

No

cpuset.mems

cpuset.cpus.effective

Queries the effective CPUs on which tasks are running. The value of this interface is affected by CPU hotplug events.

No

cpuset.effective\_cpus

cpuset.mems.effective

Queries the effective NUMA nodes that are allocated to the running tasks. The value of this interface is affected by memory nodes hotplug events.

No

cpuset.effective\_mems

cpuset.cpus.partition

Controls whether CPUs of a cpuset are exclusively used. If root is written into the interface, CPUs of a cpuset are exclusively used.

No

cpuset.cpu\_exclusive, which implements similar functionality

.\_\_DEBUG\_\_.cpuset.cpus.subpartitions

Queries which CPUs are used exclusively when root is written into the cpuset.cpus.partition interface.

**Note**

This interface is available only if the cgroup\_debug feature is enabled for kernel cmdline.

No

N/A

### **blkio**

#### **cgroup v1 interfaces**

**Interface name**

**Purpose**

**In-house interface**

**Corresponding cgroup v2 interface**

blkio.throttle.read\_bps\_device

Specifies the maximum number of bytes per second that a cgroup can read from a device.

Example:

echo "<major>:<minor> <bps>" > /sys/fs/cgroup/blkio/<cgroup>/blkio.throttle.read\_bps\_device

No

io.max

blkio.throttle.write\_bps\_device

Specifies the maximum number of bytes per second that a cgroup can write to a device.

Example:

echo "<major>:<minor> <bps>" > /sys/fs/cgroup/blkio/<cgroup>/blkio.throttle.write\_bps\_device

No

io.max

blkio.throttle.read\_iops\_device

Specifies the maximum number of read operations per second that a cgroup can perform on a device.

Example:

echo "<major>:<minor> <iops>" > /sys/fs/cgroup/blkio/<cgroup>/blkio.throttle.read\_iops\_device

No

io.max

blkio.throttle.write\_iops\_device

Specifies the maximum number of read operations per second that a cgroup can perform on a device.

Example:

echo "<major>:<minor> <iops>" > /sys/fs/cgroup/blkio/<cgroup>/blkio.throttle.write\_iops\_device

No

io.max

blkio.throttle.io\_service\_bytes

Queries bandwidth statistics.

This interface collects the read, write, sync, async, discard, and total bandwidth statistics of all devices. Unit: bytes.

No

io.stat

blkio.throttle.io\_service\_bytes\_recursive

The recursive version of the blkio.throttle.io\_service\_bytes interface.

Statistics collected by using the blkio.throttle.io\_service\_bytes interface include data of descendant cgroups.

No

N/A

blkio.throttle.io\_serviced

Queries IOPS statistics.

This interface collects the read, write, sync, async, discard, and total IOPS statistics of all devices.

No

io.stat

blkio.throttle.io\_serviced\_recursive

The recursive version of the blkio.throttle.io\_serviced interface.

Statistics collected by using the blkio.throttle.io\_serviced interface include data of descendant cgroups.

No

N/A

blkio.throttle.io\_service\_time

Queries the duration between request dispatch and request completion for I/O operations, which is used to measure the average I/O latency.

For more information, see [Enhance the monitoring of block I/O throttling](/help/en/alinux/user-guide/enhance-the-monitoring-of-block-i-or-o-throttling).

Yes

io.extstat

blkio.throttle.io\_wait\_time

Queries the duration when I/O operations wait in scheduler queues, which is used to measure the average I/O latency.

For more information, see [Enhance the monitoring of block I/O throttling](/help/en/alinux/user-guide/enhance-the-monitoring-of-block-i-or-o-throttling).

Yes

io.extstat

blkio.throttle.io\_completed

Queries the number of completed I/O operations, which is used to measure the average I/O latency.

For more information, see [Enhance the monitoring of block I/O throttling](/help/en/alinux/user-guide/enhance-the-monitoring-of-block-i-or-o-throttling).

Yes

io.extstat

blkio.throttle.total\_bytes\_queued

Queries the number of I/O bytes that were throttled, which is used to analyze whether I/O latency is related to throttling.

For more information, see [Enhance the monitoring of block I/O throttling](/help/en/alinux/user-guide/enhance-the-monitoring-of-block-i-or-o-throttling).

Yes

io.extstat

blkio.throttle.total\_io\_queued

Queries the number of I/O operations that were throttled, which is used to analyze whether I/O latency is related to throttling.

For more information, see [Enhance the monitoring of block I/O throttling](/help/en/alinux/user-guide/enhance-the-monitoring-of-block-i-or-o-throttling).

Yes

io.extstat

blkio.cost.model

Specifies the blk-iocost cost model. The control mode (ctrl) can be set to auto or user.

This interface exists only in the root cgroup. Example:

echo "<major>:<minor> ctrl=user model=linear rbps=<rbps> rseqiops=<rseqiops> rrandiops=<rrandiops> wbps=<wbps> wseqiops=<wseqiops> wrandiops=<wrandiops>" > /sys/fs/cgroup/blkio/blkio.cost.model

For more information, see [Configure the blk-iocost weight-based throttling feature](/help/en/alinux/user-guide/configure-the-weight-based-throttling-feature-of-blk-iocost).

Yes

io.cost.model

blkio.cost.qos

Controls the blk-iocost feature and configures a QoS policy to check for disk congestion.

This interface exists only in the root cgroup. Example:

echo "<major>:<minor> enable=1 ctrl=user rpct= rlat=5000 wpct=95.00 wlat=5000 min=50.00 max=150.00" > /sys/fs/cgroup/blkio/blkio.cost.qos

For more information, see [Configure blk-iocost weight throttling](/help/en/alinux/user-guide/configure-the-weight-based-throttling-feature-of-blk-iocost).

Yes

io.cost.qos

blkio.cost.weight

Specifies the cgroup weight.

This interface exists only in non-root cgroups and can be configured in the following modes:

-   weight: sets the same weight for all devices.
    
-   major:minor + weight: set the weight of a specific device.
    

For more information, see [Configure the blk-iocost weight-based throttling feature](/help/en/alinux/user-guide/configure-the-weight-based-throttling-feature-of-blk-iocost).

Yes

io.cost.weight

blkio.cost.stat

Queries the blk-iocost statistics. The interface exists only in non-root cgroups.

Yes

N/A

#### cgroup v2 interfaces

**Interface name**

**Purpose**

**In-house interface**

**Corresponding cgroup v1 interface**

io.max

The throttling interface that specifies the read and write throttling rates in byte/s and IOPS. Example:

echo "<major>:<minor> rbps=<bps> wbps=<bps> riops=<iops> wiops=<iops>" > /sys/fs/cgroup/<cgroup>/io.max

No

blkio.throttle.read\_bps\_device

blkio.throttle.read\_iops\_device

blkio.throttle.write\_bps\_device

blkio.throttle.write\_iops\_device

io.stat

Queries I/O operation statistics, which include the rates of read, write, and discard operations in byte/s and IOPS.

No

blkio.throttle.io\_service\_bytes

blkio.throttle.io\_serviced

io.extstat

Queries extended I/O statistics, including the wait time, service time, number of completed I/O operations, and throttling rates in byte/s and IOPS.

No

blkio.throttle.io\_service\_time

blkio.throttle.io\_wait\_time

blkio.throttle.io\_completed

blkio.throttle.total\_bytes\_queued

blkio.throttle.total\_io\_queued

io.cost.model

Specifies the blk-iocost cost model. The control mode (ctrl) can be set to auto or user.

This interface exists only in the root cgroup. Example:

echo "<major>:<minor> ctrl=user model=linear rbps=<rbps> rseqiops=<rseqiops> rrandiops=<rrandiops> wbps=<wbps> wseqiops=<wseqiops> wrandiops=<wrandiops>" > /sys/fs/cgroup/io.cost.model

For more information, see [Configure blk-iocost weight throttling](/help/en/alinux/user-guide/configure-the-weight-based-throttling-feature-of-blk-iocost).

No

blkio.cost.model

io.cost.qos

Controls the blk-iocost feature and configures a QoS policy to check for disk congestion.

This interface exists only in the root cgroup. Example:

echo "<major>:<minor> enable=1 ctrl=user rpct= rlat=5000 wpct=95.00 wlat=5000 min=50.00 max=150.00" > /sys/fs/cgroup/io.cost.qos

For more information, see [Configure blk-iocost weight throttling](/help/en/alinux/user-guide/configure-the-weight-based-throttling-feature-of-blk-iocost).

No

blkio.cost.qos

io.cost.weight

Specifies the cgroup weight.

This interface exists only in non-root cgroups and can be configured in the following modes:

-   weight: sets the same weight for all devices.
    
-   major:minor + weight: set the weight of a specific device.
    

For more information, see [Configure blk-iocost weight throttling](/help/en/alinux/user-guide/configure-the-weight-based-throttling-feature-of-blk-iocost).

No

blkio.cost.weight

### **memory**

#### **cgroup v1 interfaces**

**Interface name**

**Purpose**

**In-house interface**

**Corresponding cgroup v2 interface**

memory.usage\_in\_bytes

Queries the current memory usage.

No

N/A

memory.max\_usage\_in\_bytes

Queries the maximum memory usage.

No

N/A

memory.limit\_in\_bytes

Specifies the hard upper limit on memory usage.

No

N/A

memory.soft\_limit\_in\_bytes

Specifies the soft lower limit on memory usage.

No

N/A

memory.failcnt

Queries the number of times the memory usage reached the upper limit.

No

N/A

memory.mglru\_batch\_size

Specifies the size of memory that is proactively reclaimed based on the Multi-Generational Least Recently Used (MGLRU) framework. An attempt is made to release CPUs between batches of memory reclamation.

Yes

N/A

memory.mglru\_reclaim\_kbytes

Specifies the size of memory that is proactively reclaimed based on the MGLRU framework.

Yes

N/A

memory.wmark\_ratio

Controls the memcg backend asynchronous reclaim feature and sets the memcg memory watermark that triggers asynchronous reclamation. Unit: percent of the memcg memory upper limit. Valid values: 0 to 100.

-   The default value is 0, which indicates that the memcg backend asynchronous reclaim feature is disabled.
    
-   When the value is not 0, the memcg backend asynchronous reclaim feature is enabled. You can set the corresponding watermark.
    

For more information, see [Memcg backend asynchronous reclaim](/help/en/alinux/user-guide/memcg-backend-asynchronous-reclaim).

Yes

memory.wmark\_ratio

memory.wmark\_high

A read-only interface.

-   When the memcg memory usage exceeds the value of this interface, backend asynchronous reclamation is started.
    
-   The value of this interface is calculated by using the following formula: memory.wmark\_high = memory.limit\_in\_bytes × memory.wmark\_ratio/100.
    
-   When the memcg backend asynchronous reclaim feature is disabled, memory.wmark\_high defaults to a large value to prevent backend asynchronous reclamation from being triggered.
    
-   This interface file is not stored in the memcg root directory.
    

For more information, see [Memcg backend asynchronous reclaim](/help/en/alinux/user-guide/memcg-backend-asynchronous-reclaim).

Yes

memory.wmark\_low

A read-only interface.

-   When the memcg memory usage falls below the value of this interface, backend asynchronous reclamation ends.
    
-   The value of this interface is calculated by using the following formula: memory.wmark\_low = memory.wmark\_high-memory.limit\_in\_bytes × memory.wmark\_scale\_factor/10000.
    
-   This interface file is not stored in the memcg root directory.
    

For more information, see [Memcg backend asynchronous reclaim](/help/en/alinux/user-guide/memcg-backend-asynchronous-reclaim).

Yes

memory.wmark\_scale\_factor

Specifies the interval between the memory.wmark\_high value and the memory.wmark\_low value. Unit: 0.01 percent of the memcg memory upper limit. Valid values: 1 to 1000.

-   This interface inherits the value of its parent group when the interface is created. The inherited value is 50, which indicates 0.50% of the memcg memory upper limit. This is also the default value.
    
-   This interface file is not stored in the memcg root directory.
    

For more information, see [Memcg backend asynchronous reclaim](/help/en/alinux/user-guide/memcg-backend-asynchronous-reclaim).

Yes

memory.wmark\_min\_adj

The factor that is used in the memcg global minimum watermark rating feature.

The value of this interface indicates an adjustment in percentage over the global minimum watermark. Valid values: -25 to 50.

-   This interface inherits a value of 0 from the parent cgroup when the interface is created. Therefore, the default value is 0.
    
-   A negative value in the value range is an adjustment in percentage over the \[0, WMARK\_MIN\] range, where WMARK\_MIN is the value of global wmark\_min. For example, if memory.wmark\_min\_adj is -25, WMARK\_MIN of a memcg is calculated by using the following formula: memcg WMARK\_MIN = WMARK\_MIN + (WMARK\_MIN - 0) × -25%.
    
-   A positive value in the range is an adjustment in percentage over the `[WMARK_MIN, WMARK_LOW]` range. `WMARK_MIN` is the value of global wmark\_min, and `WMARK_LOW` is the value of global wmark\_low.
    
-   When the offset global minimum watermark is triggered, throttling is performed, and the throttling time is linearly proportional to the excess memory usage. Valid values of the throttling time: 1 to 1000. Unit: milliseconds.
    

For more information, see [Memcg global minimum watermark rating](/help/en/alinux/user-guide/memcg-global-minimum-watermark-rating).

Yes

memory.force\_empty

Specifies whether to forcefully reclaim memory pages.

No

N/A

memory.use\_hierarchy

Specifies whether to collect hierarchical statistics.

Yes

N/A

memory.swappiness

Specifies the swappiness parameter of vmscan, which controls the tendency of the kernel to use the swap partition.

No

N/A

memory.priority

Specifies the memcg priority. This interface provides 13 memcg out-of-memory (OOM) priorities to sort business. Valid values: 0 to 12. A larger value indicates a higher priority. The priority of a parent cgroup is not inherited by its descendant cgroups. Default value: 0.

-   This interface is used to implement memcg QoS. The priority values, rather than global variables, are used to sort sibling cgroups only in the same parent cgroup.
    
-   The sibling memcgs with the same priority are sorted by memory usage. An OOM error is triggered on the child memcg that consumes the largest amount of memory.
    

Yes

memory.priority

memory.move\_charge\_at\_immigrate

Specifies whether charges of a task are moved along the task when the task is migrated between cgroups, which is a statistical control policy.

No

N/A

memory.oom\_control

Specifies whether to trigger the OOM killer to terminate tasks when an OOM error occurs and generate notifications about OOM status.

No

N/A

memory.oom.group

Controls the OOM group feature that can terminate all tasks in a memcg if an OOM error occurs.

Yes

memory.oom.group

memory.pressure\_level

Specifies memory pressure notifications.

No

N/A

memory.kmem.limit\_in\_bytes

Specifies the hard limit on the memory usage of the kernel.

No

N/A

memory.kmem.usage\_in\_bytes

Queries the memory usage of the kernel.

No

N/A

memory.kmem.failcnt

Queries the number of times the memory usage of the kernel reached the upper limit.

No

N/A

memory.kmem.max\_usage\_in\_bytes

Queries the maximum memory usage of the kernel.

No

N/A

memory.kmem.slabinfo

Queries the slab memory usage of the kernel.

No

N/A

memory.kmem.tcp.limit\_in\_bytes

Specifies the hard limit on the TCP memory usage of the kernel.

No

N/A

memory.kmem.tcp.usage\_in\_bytes

Queries the TCP memory usage of the kernel.

No

N/A

memory.kmem.tcp.failcnt

Queries the number of times the TCP memory usage of the kernel reached the upper limit.

No

N/A

memory.kmem.tcp.max\_usage\_in\_bytes

Queries the maximum TCP memory usage of the kernel.

No

N/A

memory.memsw.usage\_in\_bytes

Queries the memory usage and swap memory usage.

No

N/A

memory.memsw.max\_usage\_in\_byte

Queries the maximum usage of memory and swap memory.

No

N/A

memory.memsw.limit\_in\_bytes

Specifies the upper limit on the total usage of memory and swap memory used by tasks in the cgroup.

No

N/A

memory.memsw.failcnt

Queries the number of times the total usage of memory and swap memory reached the upper limit.

No

N/A

memory.swap.high

Specifies the upper limit on available swap memory usage in a cgroup.

Yes

memory.swap.high

memory.swap.events

Queries the events occuring when the swap memory usage reached the upper limit.

Yes

memory.swap.events

memory.min

Specifies a minimum amount of memory that a cgroup must retain, which is a hard guarantee of memory.

For more information, see [Memcg QoS feature of the cgroup v1 interface](/help/en/alinux/user-guide/memcg-qos-function-ensures-system-stability-and-response-speed).

Yes

memory.min

memory.low

Specifies the lower limit of memory that a cgroup can retain, which is a soft guarantee of memory. For more information, see [Memcg QoS feature of the cgroup v1 interface](/help/en/alinux/user-guide/memcg-qos-function-ensures-system-stability-and-response-speed).

Yes

memory.low

memory.high

Specifies the throttle limit of the memory usage. For more information, see [Memcg QoS feature of the cgroup v1 interface](/help/en/alinux/user-guide/memcg-qos-function-ensures-system-stability-and-response-speed).

Yes

memory.high

memory.allow\_duptext

When the /sys/kernel/mm/duptext/enabled parameter is configured to globally enable the code duptext feature, the interface is used to control whether to enable the code duptext feature for tasks in a specific memcg. Valid values: 0 and 1. Default value: 0.

-   1: enables the code duptext feature for tasks in a specific memcg.
    
-   0: disables the code duptext feature for tasks in a specific memcg.
    

For more information, see [Code duptext feature](/help/en/alinux/user-guide/cross-node-code-copy).

Yes

memory.allow\_duptext

memory.allow\_duptext\_refresh

Specifies whether the code duptext feature is immediately started when a binary file is generated or downloaded. The code duptext feature does not take effect in case of PageDirty or PageWriteback. The interface uses the asynchronous task mode to refresh tasks **when the code duptext feature does not take effect in scenarios of PageDirty or PageWriteback**.

Yes

memory.allow\_duptext\_refresh

memory.duptext\_nodes

Limits the duptext memory allocation nodes.

Yes

memory.duptext\_nodes

memory.allow\_text\_unevictable

Specifies whether the memcg snippet is locked.

Yes

memory.allow\_text\_unevictable

memory.text\_unevictable\_percent

Specifies the ratio of the amount of memory used by locked memcg code snippet to the total amount of memory used by memcg code.

Yes

memory.text\_unevictable\_percent

memory.thp\_reclaim

Controls the Transparent Huge Pages (THP) reclaim feature. Valid values:

-   reclaim: enables the THP reclaim feature.
    
-   swap: is reserved for future use.
    
-   disable: disables the THP reclaim feature.
    

Default value: disable.

For more information, see [THP reclaim](/help/en/alinux/user-guide/thp-reclaim).

Yes

memory.thp\_reclaim

memory.thp\_reclaim\_stat

Queries the status of the THP reclaim feature. Parameters of this interface:

-   queue\_length: the number of THPs in the queue of each node. If the THP reclaim feature is enabled, THPs are added to a reclaim queue.
    
-   split\_hugepage: the total number of THPs that are split by the THP reclaim feature for each node.
    
-   reclaim\_subpage: the total number of zero subpages that are reclaimed by the THP reclaim feature for each node.
    

The values of the preceding parameters are listed in ascending order by NUMA node ID, such as node0 and node1, from left to right.

For more information, see [THP reclaim](/help/en/alinux/user-guide/thp-reclaim).

Yes

memory.thp\_reclaim\_stat

memory.thp\_reclaim\_ctrl

Specifies how the THP reclaim feature is triggered. Parameters of this interface:

-   threshold: the maximum number of zero subpages in a THP. If the number of zero subpages in a THP exceeds the threshold value, the THP reclaim feature is triggered. Default value: 16.
    
-   reclaim: triggers the THP reclaim feature.
    

For more information, see [THP reclaim](/help/en/alinux/user-guide/thp-reclaim).

Yes

memory.thp\_reclaim\_ctrl

memory.thp\_control

Controls the memcg THP feature. This interface can be used to prohibit the application of anon, shmem, and file THPs.

For example, an offline memcg is not allowed to use THPs. This helps reduce THP contention and memory waste, even though memory fragmentation cannot be prevented.

Yes

memory.thp\_control

memory.reclaim\_caches

Specifies whether the kernel proactively reclaims the cache in memcgs. Example: `echo 100M > memory.reclaim_caches`.

Yes

memory.reclaim\_caches

memory.pgtable\_bind

Specifies whether to forcefully apply for page table memory on the current node.

Yes

memory.pgtable\_bind

memory.pgtable\_misplaced

Queries statistics about page memory in page tables when page memory is allocated across nodes.

Yes

memory.pgtable\_misplaced

memory.oom\_offline

In the Quick OOM feature, you can use this interface to mark the memcg of an offline task.

Yes

memory.oom\_offline

memory.async\_fork

Controls the Async-fork feature, formerly known as fast convergent merging (FCM), for memcgs.

Yes

memory.async\_fork

memory.direct\_compact\_latency

Specifies the latency in direct memory compaction of the memsli feature.

Yes

memory.direct\_compact\_latency

memory.direct\_reclaim\_global\_latency

Specifies the latency in direct global memory reclamation of the memsli feature.

Yes

memory.direct\_reclaim\_global\_latency

memory.direct\_reclaim\_memcg\_latency

Specifies the latency in direct memcg memory reclamation of the memsli feature.

Yes

memory.direct\_reclaim\_memcg\_latency

memory.direct\_swapin\_latency

Specifies the latency in direct memory swap-in of the memsli feature.

Yes

memory.direct\_swapin\_latency

memory.direct\_swapout\_global\_latency

Specifies the latency in direct global memory swap-out of the memsli feature.

Yes

memory.direct\_swapout\_global\_latency

memory.direct\_swapout\_memcg\_latency

Specifies the latency in direct memcg memory swap-out of the memsli feature.

Yes

memory.direct\_swapout\_memcg\_latency

memory.exstat

Queries statistics about extended memory and extra memory. Statistics about the following in-house features are collected:

-   wmark\_min\_throttled\_ms: the throttling time elapsed since the offset global minimum watermark was exceeded.
    
-   wmark\_reclaim\_work\_ms: the duration in which the kernel attempts to reclaim memory from a cgroup.
    
-   unevictable\_text\_size\_kb: the size of a code snippet to be locked.
    
-   pagecache\_limit\_reclaimed\_kb: the limit of a page cache.
    

For more information, see [Memcg Exstat feature](/help/en/alinux/user-guide/memcg-exstat-feature).

Self-developed enhancement

memory.exstat

memory.idle\_page\_stats

Queries statistics about kidled memory usage of a memcg and the hierarchical information of the cgroup.

Yes

memory.idle\_page\_stats

memory.idle\_page\_stats.local

Queries statistics about kidled memory usage of a memcg.

Yes

memory.idle\_page\_stats.local

memory.numa\_stat

Queries NUMA statistics for anonymous, file, and locked memory.

No

memory.numa\_stat

memory.pagecache\_limit.enable

Controls the Page Cache Limit feature.

For more information, see [Page Cache Limit feature](/help/en/alinux/user-guide/page-cache-restriction-feature).

Yes

memory.pagecache\_limit.enable

memory.pagecache\_limit.size

Specifies the size of the limited page cache.

Yes

memory.pagecache\_limit.size

memory.pagecache\_limit.sync

Specifies the mode of the Page Cache Limit feature, which is synchronous or asynchronous.

Yes

memory.pagecache\_limit.sync

memory.reap\_background

Specifies whether the zombie memcg reapers reap memory of memcgs in the backend asynchronous manner.

Yes

memory.reap\_background

memory.stat

Queries memory statistics.

No

memory.stat

memory.use\_priority\_oom

Controls the memcg OOM priority policy feature.

For more information, see [Memcg OOM priority policy](/help/en/alinux/user-guide/memcg-oom-priority-policy).

Yes

memory.use\_priority\_oom

memory.use\_priority\_swap

Specifies whether the memory is swapped based on the priorities of cgroups.

For more information, see [Memcg OOM priority policy](/help/en/alinux/user-guide/memcg-oom-priority-policy).

Yes

memory.use\_priority\_swap

#### cgroup v2 interfaces

**Interface name**

**Purpose**

**In-house interface**

**Corresponding cgroup v1 interface**

memory.current

Queries the memory usage.

No

N/A

memory.min

Specifies a minimum amount of memory that a cgroup must retain, which is a hard guarantee of memory.

For more information, see [Memcg QoS feature of the cgroup v1 interface](/help/en/alinux/user-guide/memcg-qos-function-ensures-system-stability-and-response-speed).

No

memory.min

memory.low

Specifies the lower limit of memory that a cgroup can retain, which is a soft guarantee of memory.

For more information, see [Memcg QoS feature of the cgroup v1 interface](/help/en/alinux/user-guide/memcg-qos-function-ensures-system-stability-and-response-speed).

No

memory.low

memory.high

Specifies the upper limit on memory usage.

For more information, see [Memcg QoS feature of the cgroup v1 interface](/help/en/alinux/user-guide/memcg-qos-function-ensures-system-stability-and-response-speed).

No

memory.high

memory.max

Specifies the throttle limit of the memory usage.

No

memory.max

memory.swap.current

Queries swap memory in use.

No

N/A

memory.swap.high

Specifies the upper limit on available swap memory usage in a cgroup.

No

N/A

memory.swap.max

Specifies a hard limit on swap memory.

No

N/A

memory.swap.events

Queries the events occuring when the swap memory usage reached the upper limit.

No

N/A

memory.oom.group

Specifies whether the OOM group feature is enabled, which can kill all tasks in a memcg if an OOM error occurs.

No

memory.oom.group

memory.wmark\_ratio

Controls the memcg backend asynchronous reclaim feature and sets the memcg memory watermark that triggers asynchronous reclamation. Unit: percent of the memcg memory upper limit. Valid values: 0 to 100.

-   The default value is 0, which indicates that the memcg backend asynchronous reclaim feature is disabled.
    
-   When the value is not 0, the memcg backend asynchronous reclaim feature is enabled. You can set the corresponding watermark.
    

For more information, see [Memcg backend asynchronous reclaim](/help/en/alinux/user-guide/memcg-backend-asynchronous-reclaim).

Yes

memory.wmark\_ratio

memory.wmark\_high

A read-only interface.

-   When the memcg memory usage exceeds the value of this interface, backend asynchronous reclamation is started.
    
-   The value of this interface is calculated by using the following formula: memory.wmark\_high = memory.limit\_in\_bytes × memory.wmark\_ratio/100.
    
-   When the memcg backend asynchronous reclaim feature is disabled, memory.wmark\_high defaults to a large value to prevent backend asynchronous reclamation from being triggered.
    
-   This interface file is not stored in the memcg root directory.
    

For more information, see [Memcg backend asynchronous reclaim](/help/en/alinux/user-guide/memcg-backend-asynchronous-reclaim).

Yes

memory.wmark\_high

memory.wmark\_low

A read-only interface.

-   When the memcg memory usage falls below the value of this interface, backend asynchronous reclamation ends.
    
-   The value of this interface is calculated by using the following formula: memory.wmark\_low = memory.wmark\_high-memory.limit\_in\_bytes × memory.wmark\_scale\_factor/10000.
    
-   This interface file is not stored in the memcg root directory.
    

For more information, see [Memcg backend asynchronous reclaim](/help/en/alinux/user-guide/memcg-backend-asynchronous-reclaim).

Yes

memory.wmark\_low

memory.wmark\_scale\_factor

Specifies the interval between the memory.wmark\_high value and the memory.wmark\_low value. Unit: 0.01 percent of the memcg memory upper limit. Valid values: 1 to 1000.

-   This interface inherits the value of its parent group when the interface is created. The inherited value is 50, which indicates 0.50% of the memcg memory upper limit. This is also the default value.
    
-   This interface file is not stored in the memcg root directory.
    

For more information, see [Memcg backend asynchronous reclaim](/help/en/alinux/user-guide/memcg-backend-asynchronous-reclaim).

Yes

memory.wmark\_scale\_factor

memory.wmark\_min\_adj

The factor that is used in the memcg global minimum watermark rating feature.

The value of this interface indicates an adjustment in percentage over the global minimum watermark. Valid values: -25 to 50.

-   This interface inherits a value of 0 from the parent cgroup when the interface is created. Therefore, the default value is 0.
    
-   A negative value in the value range is an adjustment in percentage over the \[0, WMARK\_MIN\] range, where WMARK\_MIN is the value of global wmark\_min. For example, if memory.wmark\_min\_adj is -25, WMARK\_MIN of a memcg is calculated by using the following formula: memcg WMARK\_MIN = WMARK\_MIN + (WMARK\_MIN - 0) × -25%.
    
-   A positive value in the range is an adjustment in percentage over the `[WMARK_MIN, WMARK_LOW]` range. `WMARK_MIN` is the value of global wmark\_min, and `WMARK_LOW` is the value of global wmark\_low.
    
-   When the offset global minimum watermark is triggered, throttling is performed, and the throttling time is linearly proportional to the excess memory usage. Valid values of the throttling time: 1 to 1000. Unit: milliseconds.
    

For more information, see [Memcg global minimum watermark rating](/help/en/alinux/user-guide/memcg-global-minimum-watermark-rating).

Yes

memory.wmark\_min\_adj

memory.priority

Specifies the memcg priority. This interface provides 13 memcg OOM priorities to sort business. Valid values: 0 to 12. A larger value indicates a higher priority. The priority of a parent cgroup is not inherited by its descendant cgroups. Default value: 0.

-   This interface is used to implement memcg QoS. The priority values, rather than global variables, are used to sort sibling cgroups only in the same parent cgroup.
    
-   The sibling memcgs with the same priority are sorted by memory usage. An OOM error is triggered on the child memcg that consumes the largest amount of memory.
    

For more information, see [Memcg OOM priority policy](/help/en/alinux/user-guide/memcg-oom-priority-policy).

Yes

memory.priority

memory.use\_priority\_oom

Controls the memcg OOM priority policy feature.

For more information, see [Memcg OOM priority policy](/help/en/alinux/user-guide/memcg-oom-priority-policy).

Yes

memory.use\_priority\_oom

memory.use\_priority\_swap

Specifies whether the memory is swapped based on the priorities of cgroups.

For more information, see [Memcg OOM priority policy](/help/en/alinux/user-guide/memcg-oom-priority-policy).

Yes

memory.use\_priority\_swap

memory.direct\_reclaim\_global\_latency

Specifies the latency in direct global memory reclamation of the memsli feature.

Yes

memory.direct\_reclaim\_global\_latency

memory.direct\_reclaim\_memcg\_latency

Specifies the latency in direct memcg memory reclamation of the memsli feature.

Yes

memory.direct\_reclaim\_memcg\_latency

memory.direct\_compact\_latency

Specifies the latency in direct memory compaction of the memsli feature.

Yes

memory.direct\_compact\_latency

memory.direct\_swapout\_global\_latency

Specifies the latency in direct global memory swap-out of the memsli feature.

Yes

memory.direct\_swapout\_global\_latency

memory.direct\_swapout\_memcg\_latency

Specifies the latency in direct memcg memory swap-out of the memsli feature.

Yes

memory.direct\_swapout\_memcg\_latency

memory.direct\_swapin\_latency

Specifies the latency in direct memory swap-in of the memsli feature.

Yes

memory.direct\_swapin\_latency

memory.exstat

Queries statistics about extended memory and extra memory. Statistics about the following in-house features are collected:

-   wmark\_min\_throttled\_ms: the throttling time elapsed since the offset global minimum watermark was exceeded.
    
-   wmark\_reclaim\_work\_ms: the duration in which the kernel attempts to reclaim memory from a cgroup.
    
-   unevictable\_text\_size\_kb: the size of a code snippet to be locked.
    
-   pagecache\_limit\_reclaimed\_kb: the limit of a page cache.
    

For more information, see [Memcg Exstat](/help/en/alinux/user-guide/memcg-exstat-feature).

Yes

memory.exstat

memory.pagecache\_limit.enable

Controls the Page Cache Limit feature.

For more information, see [Page Cache Limit feature](/help/en/alinux/user-guide/page-cache-restriction-feature).

Yes

memory.pagecache\_limit.enable

memory.pagecache\_limit.size

Specifies the size of the limited page cache.

For more information, see [Page Cache Limit feature](/help/en/alinux/user-guide/page-cache-restriction-feature).

Yes

memory.pagecache\_limit.size

memory.pagecache\_limit.sync

Specifies the mode of the Page Cache Limit feature, which is synchronous or asynchronous.

For more information, see [Page Cache Limit feature](/help/en/alinux/user-guide/page-cache-restriction-feature).

Yes

memory.pagecache\_limit.sync

memory.idle\_page\_stats

Queries statistics about kidled memory of individual memcgs of each hierarchy.

Yes

memory.idle\_page\_stats

memory.idle\_page\_stats.local

Queries statistics about kidled memory of individual memcgs.

Yes

memory.idle\_page\_stats.local

memory.numa\_stat

Queries NUMA statistics for anonymous, file, and locked memory.

Yes

memory.numa\_stat

memory.reap\_background

Specifies whether the zombie memcg reapers reap memory of memcgs in the backend asynchronous manner.

Yes

memory.reap\_background

memory.stat

Queries memory statistics.

No

memory.stat

memory.use\_priority\_oom

Controls the memcg OOM priority policy feature.

For more information, see [Memcg OOM priority policy](/help/en/alinux/user-guide/memcg-oom-priority-policy).

Yes

memory.use\_priority\_oom

### **cpuacct**

**Interface name**

**Purpose**

**In-house interface**

**Corresponding cgroup v2 interface**

cpuacct.usage

Queries the total CPU time used. Unit: nanoseconds.

No

cpu.stat, which displays similar data

cpuacct.usage\_user

Queries the CPU time used in user mode. Unit: nanoseconds.

No

cpuacct.usage\_sys

Queries the CPU time used in kernel mode. Unit: nanoseconds.

No

cpuacct.usage\_percpu

Queries the use time of each CPU. Unit: nanoseconds.

No

cpuacct.usage\_percpu\_user

Queries the use time of each CPU in user mode. Unit: nanoseconds.

No

cpuacct.usage\_percpu\_sys

Queries the use time of each CPU in kernel mode. Unit: nanoseconds.

No

cpuacct.usage\_all

Queries the summary of the cpuacct.usage\_percpu\_user and cpuacct.usage\_percpu\_sys interfaces. Unit: nanoseconds.

No

cpuacct.stat

Queries the CPU time used in user mode and kernel mode. Unit: tick.

No

cpuacct.proc\_stat

Queries data such as the CPU time, average loads (loadavg), and number of running tasks at the container level.

Yes

cpuacct.enable\_sli

Controls whether to count loadavgs at the container level.

Yes

N/A

cpuacct.sched\_cfs\_statistics

Queries statistics about CFS, such as the runtime of a cgroup and the waiting time of cgroups at the same level or different levels.

Yes

cpu.sched\_cfs\_statistics

cpuacct.wait\_latency

Queries the latency of tasks waiting in the queue.

Yes

cpu.wait\_latency

cpuacct.cgroup\_wait\_latency

Queries the latency of cgroups waiting in the queue. The wait\_latency interface counts the latency of task SEs, and the cgroup\_wait\_latency interface counts the latency of group SEs.

Yes

cpu.cgroup\_wait\_latency

cpuacct.block\_latency

Queries the latency of tasks blocked due to non-I/O causes.

Yes

cpu.block\_latency

cpuacct.ioblock\_latency

Queries the latency of tasks blocked due to I/O operations.

Yes

cpu.ioblock\_latency

io.pressure

Query PSI for I/O performance, memory, and CPUs. The information can be polled. For more information, see the following topics:

-   [psi.rst](https://www.kernel.org/doc/Documentation/accounting/psi.rst)
    
-   [Enable the PSI feature for cgroup v1](/help/en/alinux/user-guide/enable-the-psi-feature-for-cgroup-v1)
    

No

N/A

memory.pressure

No

cpu.pressure

No

### **freezer**

**Interface name**

**Purpose**

**In-house interface**

**Corresponding cgroup v2 interface**

freezer.state

Controls the freeze status. Valid values: `FROZEN` and `THAWED`.

No

cgroup.freeze

freezer.self\_freezing

Queries whether a cgroup is frozen because of its own frozen state.

No

N/A

freezer.parent\_freezing

Queries whether a cgroup is frozen because its ancestor is frozen.

No

N/A

### **ioasids**

The cgroup v1 interfaces and the cgroup v2 interfaces of the ioasids subsystem are the same.

**Interface name**

**Purpose**

**In-house interface**

ioasids.current

Queries the number of ioasids allocated to the current cgroup.

Yes

ioasids.events

Queries the number of events that occurred because the upper limit of allocable ioasids was exceeded.

Yes

ioasids.max

Queries the total number of ioasids that can be allocated to the current cgroup.

Yes

### **net\_cls and net\_prio**

**Interface name**

**Purpose**

**In-house interface**

**Corresponding cgroup v2 interface**

net\_cls.classid

Specifies the class identifer that tags network packets of the current cgroup. This interface works with qdisc or iptable.

No

N/A

**Note**

The corresponding interfaces are removed from cgroup v2. You can use [ebpf](https://docs.kernel.org/bpf/prog_cgroup_sockopt.html) to filter and shape traffic.

net\_prio.prioidx

Queries the index value of the current cgroup in the data structure. The interface is read-only and used internally by the kernel.

No

net\_prio.ifpriomap

Specifies the network priority value for each network interface controller (NIC).

No

### **perf\_event**

The perf\_event subsystem does not provide interfaces. The perf\_event subsystem is enabled by default for cgroup v2 and provides the same functionality as the perf\_event subsystem in cgroup v1.

### **pids**

The cgroup v1 interfaces and the cgroup v2 interfaces of the pids subsystem are the same.

**Interface name**

**Purpose**

**In-house interface**

pids.max

Specifies the maximum number of tasks in a cgroup.

No

pids.current

Queries the current number of tasks in a cgroup.

No

pids.events

Queries the number of events in which the fork operation fails because the maximum number of supported tasks is reached. The fsnotify library is supported to provide filesystem notifications about the events.

No

### **rdma**

The cgroup v1 interfaces and the cgroup v2 interfaces of the rdma subsystem are the same.

**Interface name**

**Purpose**

**In-house interface**

rdma.max

Specifies the upper limit on the resource usage of the Remote Direct Memory Access (RDMA) adapter.

No

rdma.current

Queries the resource usage of the RDMA adapter.

No
