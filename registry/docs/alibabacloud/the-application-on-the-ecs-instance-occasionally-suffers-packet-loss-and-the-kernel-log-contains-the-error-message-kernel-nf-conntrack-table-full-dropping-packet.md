## Problem description

You might experience occasional packet loss when connecting to applications on an ECS instance. An investigation shows that the external network of the ECS instance is normal, but the kernel logs (`dmesg`) contain the error message `kernel: nf_conntrack: table full, dropping packet`. This issue affects ECS instances with the following:

-   Image: `aliyun-2.1903-x64-20G-alibase-20190327.vhd` or later
    
-   Kernel: `kernel-4.19.24-9.al7` or later
    

## Cause

`nf_conntrack` is a module in the Linux kernel that tracks connection entries for Network Address Translation (NAT). The `nf_conntrack` module stores established connections in a hash table. When this hash table becomes full, new connections trigger the `nf_conntrack: table full, dropping packet` error. Key parameters of the `nf_conntrack` module include:

-   `nf_conntrack_buckets`: The size of the connection tracking hash table. You can specify this value when the module is loaded or modify it by using the `sysctl` command. For systems with 4 GB or more of memory, the default value is 65536.
    
-   `nf_conntrack_max`: The maximum number of connections the `nf_conntrack` module can track. For systems with 4 GB or more of memory, the default value is 262144. This default value may be too low for servers that handle many connections.
    
-   `nf_conntrack_tcp_timeout_time_wait`: How long `nf_conntrack` keeps a TCP connection's tracking entry in the `TIME_WAIT` state. The default value is 120s.
    

## Solutions

Choose the solution that best fits your use case.

### **Solution 1:** Adjust nf\_conntrack parameters

Determine the maximum number of connections that your application might require, and then run the following commands to adjust the `nf_conntrack` module parameters.

```
sysctl -w net.netfilter.nf_conntrack_max=1503232
sysctl -w net.netfilter.nf_conntrack_buckets=375808  # This option cannot be modified during runtime if the kernel version is not 4.19.
sysctl -w net.netfilter.nf_conntrack_tcp_timeout_time_wait=60
```

**Important**

The parameter values in these commands are examples. Tune them based on your actual workload and business requirements. Before making changes, create a snapshot or back up important files.

**Note**

Review the following recommendations for parameter settings:

-   If your workload involves a high number of concurrent, short-lived connections, increase the values of `nf_conntrack_max` and `nf_conntrack_buckets`. This prevents the `nf_conntrack` hash table from filling up. We recommend setting the `nf_conntrack_max` value to four times the `nf_conntrack_buckets` value.
    
-   Adjust the `nf_conntrack_buckets` and `nf_conntrack_max` parameters together. If you only increase `nf_conntrack_max`, the linked lists in the hash table can become too long, which reduces lookup efficiency. Changing only `nf_conntrack_buckets` will not resolve the issue.
    
-   Before you adjust the `nf_conntrack_tcp_timeout_time_wait` parameter, make sure you understand its purpose and potential effects. Adjust this parameter with caution based on your application's use case and performance monitoring results. The following examples provide references for different scenarios:
    
    -   For high-concurrency services that handle many short-lived connections, such as a web server, consider setting `nf_conntrack_tcp_timeout_time_wait` to a shorter duration, such as 30 or 60 seconds. This clears connection tracking entries faster, freeing up capacity for new connections. However, you must ensure that your application can tolerate a small amount of potential data retransmission or latency.
        
    -   If your application requires extremely high data integrity, such as a financial trading system, it is safer to keep the default value for `nf_conntrack_tcp_timeout_time_wait`. This helps ensure that all data packets are delivered correctly.
        
    -   In environments with high or unstable network latency, a shorter `nf_conntrack_tcp_timeout_time_wait` value can increase the risk of data loss. A more conservative setting is recommended.
        

### **Solution 2:** Filter untracked connections with iptables rules

Add `iptables` rules with the `-j NOTRACK` target to prevent specific connections from being tracked. Connections that match these rules are not added to the tracking table, which prevents it from becoming full.

```
sudo iptables -t raw -A PREROUTING -p udp -j NOTRACK
sudo iptables -t raw -A PREROUTING -p tcp --dport 22 -j NOTRACK
```

**Note**

The example commands disable connection tracking for all UDP traffic and for TCP traffic on port 22. These rules are examples. Configure them based on your specific requirements and environment.

## References

-   [Introductions to nf\_conntrack parameters](https://www.kernel.org/doc/Documentation/networking/nf_conntrack-sysctl.txt)
    
-   [Common kernel network parameters of Linux ECS instances and FAQ](/help/en/ecs/support/common-kernel-network-parameters-of-ecs-linux-instances-and-faq)
