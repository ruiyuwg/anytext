This topic describes Sidecar Acceleration using eBPF and its limits, usage notes, and change records, and provides answers to some frequently asked questions.

## **Introduction**

After a sidecar proxy is injected into an application pod in which a Service Mesh (ASM) instance runs, inbound and outbound requests go through the sidecar proxy. This slightly increases the request latency. Sidecar Acceleration using eBPF adopts sockops to accelerate Transmission Control Protocol (TCP)-based communication between sidecar proxies in the same node, and communication between an application container and a sidecar proxy in the same pod.

## **Limits**

-   The version of an ASM instance must be 1.10 or later.
    
-   The kernel versions of the nodes in your Container Service for Kubernetes (ACK) cluster must be 5.10 or later. We recommend that you use Alibaba Cloud Linux 3.
    
    **Note**
    
    If the nodes in your ACK cluster use different types of operating systems (OSs), Sidecar Acceleration using eBPF takes effect only in the nodes whose kernel versions are 5.10 or later. Sidecar Acceleration using eBPF does not take effect in nodes, including virtual nodes, whose kernel versions are earlier than 5.10. This generates no other adverse effects.
    
-   Only ACK managed clusters and ACK dedicated clusters support Sidecar Acceleration using eBPF.
    

## **Usage notes**

To install Sidecar Acceleration using eBPF, perform the following steps.

**Important**

After you install Sidecar Acceleration using eBPF, in the application pod into which a sidecar proxy is injected in the ACK cluster, TCP packets with the PSH flag for the communication between the application container and the sidecar proxy cannot be captured in the loopback device. TCP packets with the PSH flag for the communication between the sidecar proxies in the same node cannot be captured as well.

1.  Create an ASM instance. For more information, see [Create an ASM instance](/help/en/asm/sidecar/create-an-asm-instance-with-sidecar-mode).
    
2.  Add an ACK cluster to the ASM instance. For more information, see [Add a cluster to an ASM instance](/help/en/asm/sidecar/add-a-cluster-to-an-asm-instance-1).
    
    When you create an ACK cluster, we recommend that you use Alibaba Cloud Linux 3 images as node images.
    
3.  Log on to the [ACK console](https://cs.console.alibabacloud.com). Find the desired cluster and click its name. On the page that appears, choose **Operations** > **Add-ons**. On the Add-ons page, click the **Networking** tab, find Sidecar Acceleration using eBPF, and then install Sidecar Acceleration using eBPF. For more information, see [Manage components](/help/en/ack/manage-system-components).
    
    After Sidecar Acceleration using eBPF is installed, it takes effect only in the ACK cluster where it is installed. If ASM manages multiple ACK clusters, you must install Sidecar Acceleration using eBPF in each ACK cluster.
    

## **FAQ**

### **How do I know whether Sidecar Acceleration using eBPF accelerates TCP-based communication?**

Sidecar Acceleration using eBPF adopts [eBPF sockops](https://github.com/AliyunContainerService/asm-labs/tree/main/sidecar-acceleration) to accelerate TCP-based communication. If TCP-based communication is accelerated after a TCP connection is established, TCP requests are no longer transmitted by the TCP/IP protocol stack. To determine whether the communication is accelerated, you can use a packet capture tool such as [tcpdump](https://www.tcpdump.org/) to check whether packets with the PSH flag are transmitted over the TCP connection.

The acceleration performance depends on the actual business scenarios and deployment environments. Therefore, this topic does not provide a performance comparison before and after Sidecar Acceleration using eBPF is installed.

### **Does Sidecar Acceleration using eBPF accelerate requests sent among pods without sidecar proxies injected?**

No. Sidecar Acceleration using eBPF only accelerates TCP requests between an application and a sidecar proxy and those between sidecar proxies in the same node. Therefore, Sidecar Acceleration using eBPF does not accelerate requests between application pods that are not injected with sidecar proxies.

### **Does Sidecar Acceleration using eBPF accelerate TCP connections established before Sidecar Acceleration using eBPF is installed?**

No. Sidecar Acceleration using eBPF does not accelerate TCP connections established before Sidecar Acceleration using eBPF is installed.

## Change records

### **September 2023**

**Version**

**Changed at**

**Description**

**Impact**

1.0.15

September 20, 2023

Sidecar Acceleration using eBPF is launched.

No impact.
