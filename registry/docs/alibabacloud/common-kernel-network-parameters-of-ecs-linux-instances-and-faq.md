This topic describes common Linux kernel network parameters of Elastic Compute Service (ECS) instances. The topic also provides answers to frequently asked questions about the Linux kernel network parameters.

## **Use the self-service troubleshooting tool**

Alibaba Cloud provides a self-service troubleshooting tool to help you quickly check kernel parameter configurations and obtain a clear diagnostic report.

Click Diagnostics to go to self-service troubleshooting page, and switch to the target region.

If the self-service troubleshooting tool cannot locate the issue, you can perform the following steps for manual troubleshooting.

## **View and modify kernel parameters**

### **Precautions**

Before you modify kernel parameters, take note of the following items:

-   We recommend modifying kernel parameters based only on your business requirements and relevant data.
    
-   Understand the function of each parameter. Note that kernel parameters may vary based on the environment type or version. For more information, see [Common Linux kernel parameters](#11ec1ac47b385).
    
-   Back up important data on your ECS instance. For more information, see [Create a snapshot](/help/en/ecs/user-guide/create-a-snapshot).
    

### **Modify parameters**

You can use `/proc/sys/` and `/etc/sysctl.conf` to modify kernel parameters while the instance is running. The differences are as follows:

-   `/proc/sys/` is a virtual file system that provides a method to access kernel parameters. The `net` directory in this file system stores all enabled network kernel parameters in the current system. You can modify the parameters while the system is running, but the modifications become **invalid after the instance restarts**. This method is typically used to temporarily verify the effects of the modifications.
    
-   `/etc/sysctl.conf` is a configuration file. You can modify the default values of kernel parameters in the `/etc/sysctl.conf` file. The modifications **remain valid after the instance restarts**.
    

The files in the `/proc/sys/` directory correspond to the full parameter names in the `/etc/sysctl.conf` configuration file. For example, the `/proc/sys/net/ipv4/tcp_tw_recycle` file corresponds to the `net.ipv4.tcp_tw_recycle` parameter. The content of the file is the parameter value.

**Note**

Linux removed the `tcp_tw_recycle` configuration starting from kernel version 4.12. This means the `net.ipv4.tcp_tw_recycle` configuration is removed from `sysctl.conf`. You can use the `net.ipv4.tcp_tw_recycle` parameter only if your system kernel is earlier than version 4.12.

### The file in the /proc/sys/ directory

1.  Log on to the ECS instance that runs a Linux operating system.
    
    For more information, see [Overview of connection methods for ECS instances](/help/en/ecs/user-guide/connect-to-instance).
    
2.  Run the `cat` command to view the content of the corresponding file.
    
    For example, run the following command to view the value of `net.ipv4.tcp_tw_recycle`.
    
    ```
    cat /proc/sys/net/ipv4/tcp_tw_recycle 
    ```
    
3.  Run the `echo` command to modify the file that corresponds to the kernel parameter.
    
    For example, run the following command to change the value of `net.ipv4.tcp_tw_recycle` to 0.
    
    ```
    echo "0" > /proc/sys/net/ipv4/tcp_tw_recycle 
    ```
    

### /etc/sysctl.conf configuration file

1.  Log on to the ECS instance that runs a Linux operating system.
    
    For more information, see [Overview of connection methods for ECS instances](/help/en/ecs/user-guide/connect-to-instance).
    
2.  View all valid parameters in the current system.
    
    ```
    sysctl -a
    ```
    
    The following sample command output shows specific kernel parameters:
    
    ```
    net.ipv4.tcp_app_win = 31
    net.ipv4.tcp_adv_win_scale = 2
    net.ipv4.tcp_tw_reuse = 0
    net.ipv4.tcp_frto = 2
    net.ipv4.tcp_frto_response = 0
    net.ipv4.tcp_low_latency = 0
    net.ipv4.tcp_no_metrics_save = 0
    net.ipv4.tcp_moderate_rcvbuf = 1
    net.ipv4.tcp_tso_win_divisor = 3
    net.ipv4.tcp_congestion_control = cubic
    net.ipv4.tcp_abc = 0
    net.ipv4.tcp_mtu_probing = 0
    net.ipv4.tcp_base_mss = 512
    net.ipv4.tcp_workaround_signed_windows = 0
    net.ipv4.tcp_challenge_ack_limit = 1000
    net.ipv4.tcp_limit_output_bytes = 262144
    net.ipv4.tcp_dma_copybreak = 4096
    net.ipv4.tcp_slow_start_after_idle = 1
    net.ipv4.cipso_cache_enable = 1
    net.ipv4.cipso_cache_bucket_size = 10
    net.ipv4.cipso_rbm_optfmt = 0
    net.ipv4.cipso_rbm_strictvalid = 1
    ```
    
3.  Modify the kernel parameters.
    
    -   Temporary modifications
        
        ```
        /sbin/sysctl -w kernel.parameter="[$Example]"
        ```
        
        **Note**
        
        Replace \`kernel.parameter\` with the kernel name and \`\[$Example\]\` with the parameter value. For example, run the `sysctl -w net.ipv4.tcp_tw_recycle="0"` command to change the value of the `net.ipv4.tcp_tw_recycle` kernel parameter to 0.
        
    -   This modification is permanent.
        
        1.  Open the `/etc/sysctl.conf` configuration file.
            
            ```
            vim /etc/sysctl.conf
            ```
            
        2.  Press the `i` key to enter edit mode.
            
        3.  Modify kernel parameters as needed.
            
            The following is the format.
            
            ```
            net.ipv6.conf.all.disable_ipv6 = 1
            net.ipv6.conf.default.disable_ipv6 = 1
            net.ipv6.conf.lo.disable_ipv6 = 1
            ```
            
        4.  Press the `Esc` key, enter `:wq`, and press Enter to save the file and exit.
            
        5.  Run the following command for the configurations to take effect:
            
            ```
            /sbin/sysctl -p
            ```
            

## **FAQ about the common kernel network parameters of Linux ECS instances**

-   [What do I do if I cannot connect to a Linux ECS instance and the "nf\_conntrack: table full, dropping packet" error message appears in the /var/log/message log?](#h3-linux-nat-ecs-)
    
-   [Why does a "Time wait bucket table overflow" error message appear in the /var/log/messages log?](#RmFfc)
    
-   [Why does a Linux ECS instance have many TCP connections in the FIN\_WAIT2 state?](#ccbcd560cfs7z)
    
-   [Why does a Linux ECS instance have many TCP connections in the CLOSE\_WAIT state?](#c216d9d0cfi4i)
    
-   [Why am I unable to access an ECS instance or an ApsaraDB RDS instance after I configure NAT for my client?](#b4d2b3c0cfdp6)
    

### **What do I do if I cannot remotely connect to a Linux ECS instance and the** `"nf_conntrack: table full, dropping packet"` error message appears in the /var/log/message log?

#### **Problem description**

You cannot remotely connect to an ECS instance. When you ping the destination instance, packets are lost or the ping command fails. The following error message frequently appears in the `/var/log/message` system log.

```
Feb  6 16:05:07 i-*** kernel: nf_conntrack: table full, dropping packet.
Feb  6 16:05:07 i-*** kernel: nf_conntrack: table full, dropping packet.
Feb  6 16:05:07 i-*** kernel: nf_conntrack: table full, dropping packet.
Feb  6 16:05:07 i-*** kernel: nf_conntrack: table full, dropping packet.
```

#### Cause

`ip_conntrack` is a Linux module that tracks connection entries for NAT. The `ip_conntrack` module uses a hash table to record TCP `established connection` entries. When this hash table is full, new connection packets are dropped, which causes the `nf_conntrack: table full, dropping packet` error.

The Linux system allocates space to maintain each TCP connection. The size of this space is related to the `nf_conntrack_buckets` and `nf_conntrack_max` parameters. The default value of `nf_conntrack_max` is four times the value of `nf_conntrack_buckets`. Therefore, we recommend increasing the value of the `nf_conntrack_max` parameter.

**Note**

Maintaining system connections consumes a significant amount of memory. Increase the value of the `nf_conntrack_max` parameter when the system is idle and has sufficient memory.

#### **Solution**

1.  Use Virtual Network Computing (VNC) to connect to the instance.
    
    For more information, see [Log on to a Linux instance using password authentication](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc).
    
2.  Modify the value of the `nf_conntrack_max` parameter.
    
    1.  Open the `/etc/sysctl.conf` file.
        
        ```
        vi /etc/sysctl.conf
        ```
        
    2.  Press the `i` key to enter edit mode.
        
    3.  Modify the value of the `nf_conntrack_max` parameter.
        
        For example, change the maximum number of hash table entries to `655350`.
        
        ```
        net.netfilter.nf_conntrack_max = 655350
        ```
        
    4.  Press the `Esc` key, enter `:wq`, and press Enter to save the file and exit.
        
3.  Modify the value of the `nf_conntrack_tcp_timeout_established` parameter.
    
    Default value: 432000. Unit: seconds. Example: 1200.
    
    ```
    net.netfilter.nf_conntrack_tcp_timeout_established = 1200
    ```
    
4.  Run the following command for the configurations to take effect:
    
    ```
    sysctl -p
    ```
    

### **Why** does the **"Time wait bucket table overflow" error message** appear in the `/var/log/messages` log?

#### **Problem description**

The "kernel: TCP: time-wait bucket table overflow" error message frequently appears in the `/var/log/messages` log of a Linux ECS instance.

```
Feb 18 12:28:38 i-*** kernel: TCP: time wait bucket table overflow
Feb 18 12:28:44 i-*** kernel: printk: 227 messages suppressed.
Feb 18 12:28:44 i-*** kernel: TCP: time wait bucket table overflow
Feb 18 12:28:52 i-*** kernel: printk: 121 messages suppressed.
Feb 18 12:28:52 i-*** kernel: TCP: time wait bucket table overflow
Feb 18 12:28:53 i-*** kernel: printk: 351 messages suppressed.
Feb 18 12:28:53 i-*** kernel: TCP: time wait bucket table overflow
Feb 18 12:28:59 i-*** kernel: printk: 319 messages suppressed.
```

#### Cause

The `net.ipv4.tcp_max_tw_buckets` parameter controls the number of connections in the TIME\_WAIT state that the kernel can manage. If the number of connections in the TIME\_WAIT state on an ECS instance exceeds the value of `net.ipv4.tcp_max_tw_buckets`, the "kernel: TCP: time-wait bucket table overflow" error message appears in the `/var/log/messages` log. The system kernel then closes the excess TCP connections.

#### **Solution**

You can increase the value of the `net.ipv4.tcp_max_tw_buckets` parameter as needed. We also recommend optimizing TCP connections at the application level. This section describes how to modify the value of the `net.ipv4.tcp_max_tw_buckets` parameter.

1.  Use VNC to connect to the instance.
    
    For more information, see [Log in to a Linux instance using password authentication](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc).
    
2.  Query the number of existing TCP connections.
    
    ```
    netstat -antp | awk 'NR>2 {print $6}' | sort | uniq -c
    ```
    
    The following command output indicates that 6,300 connections are in the TIME\_WAIT state:
    
    ```
    6300 TIME_WAIT
     40 LISTEN
     20 ESTABLISHED
     20 CONNECTED
    ```
    
3.  View the value of the `net.ipv4.tcp_max_tw_buckets` parameter.
    
    ```
    cat /etc/sysctl.conf | grep net.ipv4.tcp_max_tw_buckets
    ```
    
    The following output indicates that the `net.ipv4.tcp_max_tw_buckets` parameter is 20000.
    
    ![2023-04-02_11-03-24](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5025071171/p614405.png)
    
4.  Modify the value of the `net.ipv4.tcp_max_tw_buckets` parameter.
    
    1.  Open the `/etc/sysctl.conf` file.
        
        ```
        vi /etc/sysctl.conf
        ```
        
    2.  Press the `i` key to enter edit mode.
        
    3.  Modify the value of the `net.ipv4.tcp_max_tw_buckets` parameter.
        
        For example, change the value of the `net.ipv4.tcp_max_tw_buckets` parameter to `65535`.
        
        ```
        net.ipv4.tcp_max_tw_buckets = 65535
        ```
        
    4.  Press the `Esc` key, enter `:wq`, and press Enter to save the file and exit.
        
5.  Run the following command for the configurations to take effect:
    
    ```
    sysctl -p
    ```
    

### **Why does a Linux ECS instance have many TCP connections in the FIN\_WAIT2 state?**

#### **Problem description**

Many TCP connections on the Linux ECS instance are in the FIN\_WAIT2 state.

#### **Cause**

This issue may occur because of the following reasons:

-   In the HTTP service, a server proactively terminates a connection for a specific reason. For example, if a response to a keepalive message times out, the server terminates the connection, and the connection enters the FIN\_WAIT2 state.
    
-   The TCP/IP protocol stack supports half-open connections. Different from the TIME\_WAIT state, the FIN\_WAIT2 state does not mean that a connection timed out. If the client does not terminate the connection, the connection remains in the FIN\_WAIT2 state until the system restarts. The increasing number of connections in the FIN\_WAIT2 state causes the kernel to crash.
    

#### **Solution**

You can decrease the value of the `net.ipv4.tcp_fin_timeout` parameter to accelerate the closing of TCP connections in the `FIN_WAIT2` state.

1.  Use VNC to connect to the instance.
    
    For more information, see [Log in to a Linux instance using password authentication](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc).
    
2.  Modify the value of the `net.ipv4.tcp_fin_timeout` parameter.
    
    1.  Open the `/etc/sysctl.conf` file.
        
        ```
        vi /etc/sysctl.conf
        ```
        
    2.  Press the `i` key to enter edit mode.
        
    3.  Modify the value of the `net.ipv4.tcp_fin_timeout` parameter.
        
        For example, change the value of the `net.ipv4.tcp_fin_timeout` parameter to 10.
        
        ```
        net.ipv4.tcp_fin_timeout = 10
        ```
        
    4.  Press the `Esc` key, enter `:wq`, and press Enter to save the file and exit.
        
3.  Run the following command for the configurations to take effect:
    
    ```
    sysctl -p
    ```
    

### Why does a Linux ECS instance have many TCP connections in the CLOSE\_WAIT state?

#### **Problem description**

Many TCP connections on the Linux ECS instance are in the CLOSE\_WAIT state.

#### **Cause**

The issue may occur because the number of TCP connections in the CLOSE\_WAIT state is out of range.

TCP uses a four-way handshake to terminate a connection. Both ends of a TCP connection can initiate a request to terminate the connection. If the peer terminates the connection but the local end does not, the connection enters the CLOSE\_WAIT state. The local end cannot communicate with the peer over this half-open connection and needs to terminate the connection at the earliest opportunity.

#### **Solution**

We recommend verifying that a connection is terminated by the peer in the program.

1.  Connect to the ECS instance.
    
    For more information, see [Connection method overview](/help/en/ecs/user-guide/connect-to-instance).
    
2.  Check and terminate TCP connections in the CLOSE\_WAIT state in the program.
    
    The read and write functions in a programming language can be used to monitor TCP connections in the CLOSE\_WAIT state. You can use one of the following methods to terminate connections in Java or C language:
    
    -   **Java language**
        
        1.  Use the `read` method to check the I/O. When the `read` method returns `-1`, it indicates that the end of the stream has been reached.
            
        2.  Use the `close` method to close the connection.
            
    -   **C language**
        
        Check the return value of the `read` function.
        
        -   If the return value is 0, terminate the connection.
            
        -   If the return value is less than 0, view the error message. If AGAIN is not displayed, terminate the connection.
            

### **Why am I unable to access an ECS instance or an ApsaraDB RDS instance after I configure NAT for my client?**

#### **Problem description**

After NAT is configured, the client cannot access ECS or RDS instances on the server side, including ECS instances in VPCs with source NAT (SNAT) enabled.

#### **Cause**

This issue may occur if the `net.ipv4.tcp_tw_recycle` and `net.ipv4.tcp_timestamps` parameters on the server are both set to 1.

When both the `net.ipv4.tcp_tw_recycle` and `net.ipv4.tcp_timestamps` kernel parameters on the server are enabled (set to 1), the server checks the timestamp of each TCP connection packet. If the timestamps are not in ascending order, the server drops the packet.

#### **Solution**

You can select an appropriate solution to the connection failures based on cloud products deployed on the server side.

-   If the remote server is an ECS instance, set both the `net.ipv4.tcp_tw_recycle` and `net.ipv4.tcp_timestamps` parameters to 0.
    
-   If the remote server is an ApsaraDB RDS instance, you cannot directly modify its kernel parameters. Instead, you must set both the `net.ipv4.tcp_tw_recycle` and `net.ipv4.tcp_timestamps` parameters to 0 on the client.
    

1.  Use VNC to connect to the instance.
    
    For more information, see [Logging on to a Linux instance using password authentication](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc).
    
2.  Change the values of the `net.ipv4.tcp_tw_recycle` and `net.ipv4.tcp_timestamps` parameters to 0.
    
    1.  Open the `/etc/sysctl.conf` file.
        
        ```
        vi /etc/sysctl.conf
        ```
        
    2.  Press the `i` key to enter edit mode.
        
    3.  Change the values of the `net.ipv4.tcp_tw_recycle` and `net.ipv4.tcp_timestamps` parameters to 0.
        
        ```
        net.ipv4.tcp_tw_recycle=0
        net.ipv4.tcp_timestamps=0
        ```
        
    4.  Press the `Esc` key, enter `:wq`, and press Enter to save the file and exit.
        
3.  Run the following command for the configurations to take effect:
    
    ```
    sysctl -p 
    ```
    

## **Common Linux kernel parameters**

Parameter

Description

net.core.rmem\_default

The default size of the socket receive window. Unit: byte.

net.core.rmem\_max

The maximum size of the socket receive window. Unit: byte.

net.core.wmem\_default

The default size of the socket send window. Unit: byte.

net.core.wmem\_max

The maximum size of the socket send window. Unit: byte.

net.core.netdev\_max\_backlog

When the kernel processing speed is slower than the network interface controller (NIC) receive speed, excess packets are stored in the receive queue of the NIC.

This parameter specifies the maximum number of packets allowed to be sent to a queue in the preceding scenario.

net.core.somaxconn

This global parameter specifies the maximum length of a listening queue of each port.

It is related to `net.ipv4.tcp_max_syn_backlog`, which specifies the limit for half-open connections in the three-way handshake. This parameter, however, specifies the limit for connections in the ESTABLISHED state. If your instance has a high workload, you may need to increase this parameter. The `backlog` parameter in the `listen(2)` function also specifies the limit for connections in the ESTABLISHED state on the listening port. If the `backlog` value is greater than `net.core.somaxconn`, the `net.core.somaxconn` value is used.

net.core.optmem\_max

The maximum buffer size of each socket.

net.ipv4.tcp\_mem

This parameter reflects the memory usage of the TCP stack. The unit is memory page that is 4 KB in most cases.

-   The first value is the lower limit of the memory usage.
    
-   The second value is the maximum stress that the buffer can bear when you perform stress testing.
    
-   The third value is the upper limit of the memory usage. If the memory usage exceeds the upper limit, the system discards packets to reduce the memory usage. You can increase the values for networks with a large bandwidth-delay product (BDP). The unit is memory page instead of byte.
    

net.ipv4.tcp\_rmem

The receive buffer size. This parameter specifies the size of memory used by the socket for auto configuration.

-   The first value is the minimum size of the socket receive buffer. Unit: byte.
    
-   The second value is the default value, which can overwrite the rmem\_default value. You can use the default value when the business loads of the system are light. Unit: byte.
    
-   The third value is the maximum size of the socket receive buffer, which can overwrite the rmem\_max value. Unit: byte.
    

net.ipv4.tcp\_wmem

The send buffer size. This parameter specifies the size of memory used by the socket for auto configuration.

-   The first value is the minimum size of the socket send buffer. Unit: byte.
    
-   The second value is the default value, which can overwrite the wmem\_default value. You can use the default value when the business loads of the system are light. Unit: byte.
    
-   The third value is the maximum size of the send buffer in bytes. This value does not overwrite wmem\_max.
    

net.ipv4.tcp\_keepalive\_time

The interval at which TCP sends keepalive messages to check whether a TCP connection is valid. Unit: seconds.

net.ipv4.tcp\_keepalive\_intvl

The interval at which TCP resends a keepalive message if no response is returned. Units: seconds.

net.ipv4.tcp\_keepalive\_probes

The maximum number of keepalive messages that can be sent before a TCP connection is considered invalid.

net.ipv4.tcp\_sack

This parameter specifies whether to enable TCP selective acknowledgment (SACK). A value of 1 indicates that TCP SACK is enabled. The TCP SACK feature allows the server to send only the missing packets, which improves performance. We recommend that you enable this feature for wide area network (WAN) communications. Take note that this feature causes CPU utilization to increase.

net.ipv4.tcp\_timestamps

The TCP timestamp, which is 12 bytes in size and carried in the TCP header. The timestamp is used to trigger the calculation of the round-trip time (RTT) in a more accurate manner than the retransmission timeout method ([RFC 1323](https://tools.ietf.org/html/rfc1323?spm=a2c9r.12641821.0.0.3cfd5e3bRGsNMw#page-28)). To improve performance, we recommend that you enable this option.

net.ipv4.tcp\_window\_scaling

This parameter specifies whether to enable window scaling that is defined in [RFC 1323](https://tools.ietf.org/html/rfc1323?spm=a2c9r.12641821.0.0.3cfd5e3bRGsNMw#page-28). To allow the system to use a TCP window larger than 64 KB, set the value to 1 to enable window scaling. The maximum TCP window size is 1 GB. This parameter takes effect only when window scaling is enabled for both ends of a TCP connection.

net.ipv4.tcp\_syncookies

This parameter indicates whether to enable TCP SYN cookies (`SYN_COOKIES`). The kernel must have CONFIG\_SYN\_COOKIES enabled and compiled. `SYN_COOKIES` can prevent a socket from being overloaded by too many connection attempts.

-   The default value is 0, indicating that the TCP SYN cookie feature is disabled.
    
-   When this parameter is set to 1 and the `SYN_RECV` queue is full, the kernel modifies its response to SYN packets. In the SYN+ACK response packet, the initial serial number is a carefully crafted value calculated from five parameters: source IP, source port, destination IP, destination port, and a timestamp. Because the sequence number confirmed in the ACK packet is not the previously calculated value, malicious attackers cannot respond or may respond incorrectly, while legitimate requesters will respond correctly to the received SYN+ACK packet. When `net.ipv4.tcp_syncookies` is enabled, `net.ipv4.tcp_max_syn_backlog` is ignored.
    

net.ipv4.tcp\_tw\_reuse

This parameter specifies whether a TIME-WAIT socket (TIME-WAIT port) can be used to establish TCP connections.

net.ipv4.tcp\_tw\_recycle

This parameter specifies whether the system recycles TIME-WAIT sockets at the earliest opportunity.

net.ipv4.tcp\_fin\_timeout

The time period within which a TCP connection remains in the FIN-WAIT-2 state after the local end disconnects a socket connection. Unit: seconds. During this period of time, the peer may become disconnected, never terminate the connection, or encounter an unexpected process termination.

net.ipv4.ip\_local\_port\_range

The local TCP/UDP protocol port numbers.

net.ipv4.tcp\_max\_syn\_backlog

This parameter determines the number of TCP connections in the `SYN_RECV` state in the system.

The `SYN_RECV` state is the stage where the system has received a SYN packet, responded with a SYN+ACK packet, and is waiting for the final ACK from the peer in the three-way handshake. This is the maximum number of connection requests that have not yet been acknowledged by the peer that can be saved in the queue. If the server is frequently overloaded, try increasing this number. The default value is affected by the instance memory, with a maximum default of 2048.

net.ipv4.tcp\_westwood

This parameter enables the congestion control algorithm on the client. The congestion control algorithm maintains an evaluation of throughput and attempts to optimize the overall bandwidth usage. We recommend that you enable the preceding algorithm for WAN communications.

net.ipv4.tcp\_bic

This parameter specifies whether binary increase congestion control is enabled for long-distance networks to better use gigabyte connections. We recommend that you enable this feature for WAN communications.

net.ipv4.tcp\_max\_tw\_buckets

The maximum number of allowed connections in the TIME\_WAIT state. If the number of connections in the TIME\_WAIT state is greater than the default value, the connections are immediately terminated. The default value varies based on the instance memory size. The maximum default value is 262144.

net.ipv4.tcp\_synack\_retries

The number of times that a SYN-ACK packet is retransmitted when a connection is in the SYN\_RECV state.

net.ipv4.tcp\_abort\_on\_overflow

A value of 1 enables the system to send RST packets to terminate connections if the system receives many requests within a short period of time and the relevant applications fail to process the requests. We recommend that you improve processing capabilities by optimizing processing efficiency of applications. Default value: 0.

net.ipv4.route.max\_size

The maximum number of routes allowed by the kernel.

net.ipv4.ip\_forward

Message forwarding between interfaces.

net.ipv4.ip\_default\_ttl

The maximum number of hops through which a packet can pass.

net.netfilter.nf\_conntrack\_tcp\_timeout\_established

If no packets are transmitted over the established connection within a specific period of time, the system uses iptables to terminate the connection.

net.netfilter.nf\_conntrack\_max

The maximum hash value that specifies the number of connections that can be tracked.

## References

-   [Linux man-pages](http://man7.org/linux/man-pages/man2/listen.2.html)
    
-   [kernel/git/torvalds/linux.git\_proc](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/filesystems/proc.rst)
    
-   [kernel/git/torvalds/linux.git\_proc\_net\_tcp](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/networking/proc_net_tcp.rst)
    
-   [kernel/git/torvalds/linux.git\_ip-sysctl](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/networking/ip-sysctl.rst)
    
-   [kernel/git/torvalds/linux.git\_netfilter-sysctl](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/networking/netfilter-sysctl.rst)
    
-   [kernel/git/torvalds/linux.git\_nf\_conntrack-sysctl](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/networking/nf_conntrack-sysctl.rst)
