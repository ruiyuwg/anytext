After an Express Connect circuit is deployed, you must test its network performance to ensure that the Express Connect circuit can meet your business requirements. This topic describes how to test the performance of an Express Connect circuit by using Netperf and iPerf3.

## Prerequisites

-   An Express Connect circuit is deployed and configured. Your data center is connected to Alibaba Cloud through the Express Connect circuit.
-   An on-premises device is prepared to serve as the client or server in the Netperf or iPerf3 test.
    
    In this example, the IP address of the on-premises device is 192.168.100.1.
    
-   Eight Elastic Compute Service (ECS) instances are created and deployed in virtual private clouds (VPCs). The ECS instances serve as clients or servers in the Netperf or iPerf3 test. The ECS instances are connected to the on-premises device to transmit configuration information and test results.
    
    In this example, ECS instances of the ecs.se1.2xlarge type are created. The image is centos\_7\_2\_64\_40G\_base\_20170222.vhd and the IP address range is 172.16.0.2 to 172.16.0.9.
    

## Set up the test environment

### Install Netperf and iPerf3

To install Netperf and iPerf3 on the on-premises device and ECS instances, perform the following operations:

**Note** The following operations show how to install Netperf and iPerf3 on an ECS instance.

1.  Log on to the ECS instance. For more information, see [Connection methods](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
2.  Install Netperf.
    1.  Run the following command to download the Netperf installation package:
        
        ```
        wget -c "https://codeload.github.com/HewlettPackard/netperf/tar.gz/netperf-2.5.0" -O netperf-2.5.0.tar.gz
        ```
        
    2.  Run the following commands in sequence to install Netperf:
        
        ```
        tar -zxvf netperf-2.5.0.tar.gz
        cd netperf-netperf-2.5.0
        ./configure 
        make 
        make install
        ```
        
    3.  Run `netperf -V` or `netserver -V` to check whether Netperf is installed.
        
        If the system returns the following information, Netperf is installed:
        
        ```
        Netperf version 2.5.0
        ```
        
3.  Install iPerf3.
    1.  Run the following commands to download iPerf3:
        
        ```
        yum install git -y  
        git clone https://github.com/esnet/iperf
        ```
        
    2.  Run the following commands to install iPerf3:
        
        ```
        cd iperf
        ./configure && make && make install && cd ..
        cd src
        ADD_PATH="$(pwd)" 
        PATH="${ADD_PATH}:${PATH}"
        export PATH
        ```
        
    3.  Run the `iperf3 -v` command to check whether iPerf3 is installed.
        
        If the system returns the following information, Netperf is installed:
        
        ```
        iperf 3.10.1+ (cJSON 1.7.13)
        Linux iZbp15y0zrhx2ry6vo1b4wZ 3.10.0-957.21.3.el7.x86_64 #1 SMP Tue Jun 18 16:35:19 UTC 2019 x86_64
        ```
        

### Enable the multi-queue feature

Assume that the interface eth0 is connected to the Express Connect circuit. Run the `ethtool -L eth0 combined 4` command on the on-premises device to enable the multi-queue feature.

In this example, the following information is returned:

```
echo "ff" > /sys/class/net/eth0/queues/rx-0/rps_cpus
echo "ff" > /sys/class/net/eth0/queues/rx-1/rps_cpus
echo "ff" > /sys/class/net/eth0/queues/rx-2/rps_cpus
echo "ff" > /sys/class/net/eth0/queues/rx-3/rps_cpus
```

## Use Netperf to test the packet forwarding performance of the Express Connect circuit.

### Overview of Netperf

After Netperf is installed, two command-line interface (CLI) tools are created: netserver (server) and netperf (client). The following table describes the main parameters.

Tool

Main parameter

Description

netserver

\-p

The port number of the listener.

netperf

\-H

The IP address of the on-premises device or ECS instance.

\-p

The port of the on-premises device or ECS instance.

\-l

The uptime of the tool.

\-t

The protocol used to send packets. Valid values: TCP\_STREAM and UDP\_STREAM.

We recommend that you use UDP\_STREAM.

\-m

The size of data packets.

-   We recommend that you set the value to 1 when you test packets per second (PPS).
-   We recommend that you set the value to 1400 when you test bits per second (BPS).

### Test the packet forwarding performance of the on-premises device as a server.

1.  Run the following commands to start the netserver process on the on-premises device and specify different ports:
    
    ```
     netserver -p 11256
     netserver -p 11257 
     netserver -p 11258 
     netserver -p 11259 
     netserver -p 11260 
     netserver -p 11261 
     netserver -p 11262 
     netserver -p 11263
    ```
    
2.  Run the `netperf -H server_ip -p port 6 -t UDP_STREAM -l 300 -- -m 1` command on the eight ECS instances to start the netperf process and specify the ports of netserver as the ports of the ECS instances.
    
    -   Run the following commands to test PPS:
        
        ```
        netperf -H 192.168.100.1 -p 11256 -t UDP_STREAM -l 300 -- -m 1 #The first ECS instance
        netperf -H 192.168.100.1 -p 11257 -t UDP_STREAM -l 300 -- -m 1 #The second ECS instance
        netperf -H 192.168.100.1 -p 11258 -t UDP_STREAM -l 300 -- -m 1 #The third ECS instance
        netperf -H 192.168.100.1 -p 11259 -t UDP_STREAM -l 300 -- -m 1 #The fourth ECS instance
        netperf -H 192.168.100.1 -p 11260 -t UDP_STREAM -l 300 -- -m 1 #The fifth ECS instance
        netperf -H 192.168.100.1 -p 11261 -t UDP_STREAM -l 300 -- -m 1 #The sixth ECS instance
        netperf -H 192.168.100.1 -p 11262 -t UDP_STREAM -l 300 -- -m 1 #The seventh ECS instance
        netperf -H 192.168.100.1 -p 11263 -t UDP_STREAM -l 300 -- -m 1 #The eighth ECS instance
        ```
        
    -   Run the following commands to test BPS:
        
        ```
        netperf -H 192.168.100.1 -p 11256 -t UDP_STREAM -l 300 -- -m 1400 #The first ECS instance
        netperf -H 192.168.100.1 -p 11257 -t UDP_STREAM -l 300 -- -m 1400 #The second ECS instance
        netperf -H 192.168.100.1 -p 11258 -t UDP_STREAM -l 300 -- -m 1400 #The third ECS instance
        netperf -H 192.168.100.1 -p 11259 -t UDP_STREAM -l 300 -- -m 1400 #The fourth ECS instance
        netperf -H 192.168.100.1 -p 11260 -t UDP_STREAM -l 300 -- -m 1400 #The fifth ECS instance
        netperf -H 192.168.100.1 -p 11261 -t UDP_STREAM -l 300 -- -m 1400 #The sixth ECS instance
        netperf -H 192.168.100.1 -p 11262 -t UDP_STREAM -l 300 -- -m 1400 #The seventh ECS instance
        netperf -H 192.168.100.1 -p 11263 -t UDP_STREAM -l 300 -- -m 1400 #The eighth ECS instance
        ```
        
    

### Test the packet forwarding performance of the on-premises device as a client

1.  Run the `netserver -p 11256` command on the ECS instances to start the netserver process and specify ports.
2.  Run the `netperf -H ECS_ip -p port -t UDP_STREAM -l 300 -- -m 1` command on the on-premises device to start eight netperf processes and specify different IP addresses for the ECS instances.
    
    -   Run the following commands to test PPS:
        
        ```
         netperf -H 172.16.0.2 -p 11256 -t UDP_STREAM -l 300 -- -m 1 #The first ECS instance
         netperf -H 172.16.0.3 -p 11256 -t UDP_STREAM -l 300 -- -m 1 #The second ECS instance
         netperf -H 172.16.0.4 -p 11256 -t UDP_STREAM -l 300 -- -m 1 #The third ECS instance
         netperf -H 172.16.0.5 -p 11256 -t UDP_STREAM -l 300 -- -m 1 #The fourth ECS instance
         netperf -H 172.16.0.6 -p 11256 -t UDP_STREAM -l 300 -- -m 1 #The fifth ECS instance
         netperf -H 172.16.0.7 -p 11256 -t UDP_STREAM -l 300 -- -m 1 #The sixth ECS instance
         netperf -H 172.16.0.8 -p 11256 -t UDP_STREAM -l 300 -- -m 1 #The seventh ECS instance
         netperf -H 172.16.0.9 -p 11256 -t UDP_STREAM -l 300 -- -m 1 #The eighth ECS instance
        ```
        
    -   Run the following commands to test BPS:
        
        ```
         netperf -H 172.16.0.2 -p 11256 -t UDP_STREAM -l 300 -- -m 1400 #The first ECS instance
         netperf -H 172.16.0.3 -p 11257 -t UDP_STREAM -l 300 -- -m 1400 #The second ECS instance
         netperf -H 172.16.0.4 -p 11258 -t UDP_STREAM -l 300 -- -m 1400 #The third ECS instance
         netperf -H 172.16.0.5 -p 11259 -t UDP_STREAM -l 300 -- -m 1400 #The fourth ECS instance
         netperf -H 172.16.0.6 -p 11260 -t UDP_STREAM -l 300 -- -m 1400 #The fifth ECS instance
         netperf -H 172.16.0.7 -p 11261 -t UDP_STREAM -l 300 -- -m 1400 #The sixth ECS instance
         netperf -H 172.16.0.8 -p 11262 -t UDP_STREAM -l 300 -- -m 1400 #The seventh ECS instance
         netperf -H 172.16.0.9 -p 11263 -t UDP_STREAM -l 300 -- -m 1400 #The eighth ECS instance
        ```
        
    

### Analyze the test result

The following result is displayed when netperf processes are complete on the client side. You can use the following formula to calculate the PPS: PPS = Number of packets that are sent/Duration of the test.

```
Socket  Message  Elapsed      Messages
Size    Size     Time         Okay Errors   Throughput
bytes   bytes    secs            #      #   10^6bits/sec
124928       1   10.00     4532554      0       3.63
212992           10.00     1099999              0.88
```

The following table describes the fields in the test result.

Field

Description

Socket Size

The buffer size.

Message Size

The packet size. Unit: bytes.

Elapsed Time

The duration of the test. Unit: seconds.

Message Okay

The number of packets that are sent.

Message Errors

The number of packets that fail to be sent.

Throughput

The network throughput. Unit: Mbit/s.

## Use iPerf3 to test the bandwidth of the Express Connect circuit

### Overview of iPerf3

The following table describes the main parameters of iPerf3.

Main parameter

Description

\-s

Applies only to the server. The parameter specifies that iPerf3 runs in server mode.

\-c

Applies only to the client. The parameter specifies that iPerf3 runs in client mode.

\-i

Specifies the interval between two reports. Unit: seconds.

\-p

-   Specifies the port of the server listener. The default port number is 5201. The listener listens on both TCP and UDP ports.
-   Specifies the port of the client. The default port number is 5201. If the -u parameter is also set, UDP is used to initiate connections. Otherwise, TCP is used by default.

\-u

Uses UDP to send packets. If this parameter is not set, TCP is used.

\-l

Specifies the length of the read/write buffer. We recommend that you set the value to 16 when you test the packet forwarding performance. When you test the bandwidth, we recommend that you set the value to 1400.

\-b

Specifies the bandwidth used in UDP mode. Unit: bit/s.

\-t

Specifies the duration of transmission. iPerf3 repeatedly sends packets of the specified length within the specified duration. The default duration is 10 seconds.

\-A

The CPU affinity. You can bind an iPerf3 process to the logical CPU with the corresponding ID to avoid scheduling the iPerf3 process across CPUs.

### Test the bandwidth of the on-premises device as a server

1.  Run the following commands on the on-premises device to start the iPerf3 process in server mode and specify different ports:
    
    ```
     iperf3 -s -i 1 -p 16001
     iperf3 -s -i 1 -p 16002
     iperf3 -s -i 1 -p 16003
     iperf3 -s -i 1 -p 16004
     iperf3 -s -i 1 -p 16005
     iperf3 -s -i 1 -p 16006
     iperf3 -s -i 1 -p 16007
     iperf3 -s -i 1 -p 16008
    ```
    
2.  Run the `iperf3 -u -l 16 -b 100m -t 120 -c server_ip -i 1 -p port -A 1` command on the ECS instances to start the iPerf3 process in client mode and specify the ports of the on-premises device as the ports of the ECS instances.
    
    Run the following commands:
    
    ```
     iperf3 -u -l 16 -b 100m -t 120 -c 192.168.100.1 -i 1 -p 16001 -A 1 #The first ECS instance
     iperf3 -u -l 16 -b 100m -t 120 -c 192.168.100.1 -i 1 -p 16002 -A 2 #The second ECS instance
     iperf3 -u -l 16 -b 100m -t 120 -c 192.168.100.1 -i 1 -p 16003 -A 3 #The third ECS instance
     iperf3 -u -l 16 -b 100m -t 120 -c 192.168.100.1 -i 1 -p 16004 -A 4 #The fourth ECS instance
     iperf3 -u -l 16 -b 100m -t 120 -c 192.168.100.1 -i 1 -p 16005 -A 5 #The fifth ECS instance
     iperf3 -u -l 16 -b 100m -t 120 -c 192.168.100.1 -i 1 -p 16006 -A 6 #The sixth ECS instance
     iperf3 -u -l 16 -b 100m -t 120 -c 192.168.100.1 -i 1 -p 16007 -A 7 #The seventh ECS instance
     iperf3 -u -l 16 -b 100m -t 120 -c 192.168.100.1 -i 1 -p 16008 -A 8 #The eighth ECS instance
    ```
    

### Test the bandwidth of the on-premises device as a client

1.  Run the `iperf3 -s -i 1 -p 16001` command on the ECS instances to start the iPerf3 process in server mode and specify ports.
2.  Run the following commands on the on-premises device to start eight iPerf3 processes in client mode:
    
    ```
     iperf3 -u -l 16 -b 100m -t 120 -c 172.16.0.2 -i 1 -p 16001 -A 1
     iperf3 -u -l 16 -b 100m -t 120 -c 172.16.0.3 -i 1 -p 16001 -A 2
     iperf3 -u -l 16 -b 100m -t 120 -c 172.16.0.4 -i 1 -p 16001 -A 3
     iperf3 -u -l 16 -b 100m -t 120 -c 172.16.0.5 -i 1 -p 16001 -A 4
     iperf3 -u -l 16 -b 100m -t 120 -c 172.16.0.6 -i 1 -p 16001 -A 5
     iperf3 -u -l 16 -b 100m -t 120 -c 172.16.0.7 -i 1 -p 16001 -A 6
     iperf3 -u -l 16 -b 100m -t 120 -c 172.16.0.8 -i 1 -p 16001 -A 7
     iperf3 -u -l 16 -b 100m -t 120 -c 172.16.0.9 -i 1 -p 16001 -A 8
    ```
    

### Analyze the test result

The following result is displayed when iPerf3 processes are complete on the client side. You can use the following formula to calculate the PPS: PPS = Number of packets that are received by the peer/Duration of the test.

```
[ ID]  Interval        Transfer    Bandwidth      Jitter    Lost/Total Datagrams
[  4]  0.00-10.00 sec  237 MBytes  199 Mbits/sec  0.027 ms  500/30352 (1.6%)
[  4]  Sent 30352  datagrams
```

**Note** We recommend that you run the `sar` command on the server side to count the packets that are actually received. Example: `sar -n DEV 1 320`.

The following table describes the fields in the test result.

Field

Description

Transfer

The total amount of data that is transmitted.

Bandwidth

The bandwidth.

Jitter

The network jitter.

Lost/Total Datagrams

The packet loss rate, which is calculated based on the following formula: Packet loss rate = Number of dropped packets/Total number of packets.
