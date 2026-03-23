Container Service for Kubernetes (ACK) provides node-level GPU diagnostics to help you troubleshoot GPU-related issues. If your ACK Pro cluster encounters errors when using GPU-accelerated nodes, you can enable the GPU-accelerated node diagnostics feature to collect basic GPU metrics for troubleshooting. This topic describes how to use the node diagnostics feature to diagnose GPU-accelerated nodes. This topic also provides a table of NVIDIA System Management Interface (nvidia-smi) status codes and two tables of XIDs to help you troubleshoot node issues.

## Prerequisites

-   An ACK Pro cluster is created. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
    
-   The ACK Pro cluster runs as normal. You can log on to the [ACK console](https://cs.console.alibabacloud.com) and check whether the cluster is in the **Running** state on the **Clusters** page.
    

## **Enable node diagnostics**

You can select GPU-accelerated nodes to initiate a node diagnostic and fix the issue based on the diagnostic report.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you want to diagnose. In the left-side navigation pane, choose **Inspections and Diagnostics** > **Diagnostics**.
    
3.  On the **Diagnosis** page, click **Node diagnosis**.
    
4.  In the **Select node** panel, specify **Node name**, read the warning and select **I know and agree**, and then click **Create diagnosis**.
    
    Wait until the **Status** column of the diagnostic report on the **Diagnosis** page displays **Success**.
    

If you diagnose a single GPU-accelerated node, the diagnostic list displays GPU metrics. You can troubleshoot the issue based on the diagnostic result, [nvidia-smi status codes](#397f06602f151), and [XIDs](#c8db76e02fiaq).

If you want to [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request technical support, provide the diagnostic information of the GPU-accelerated node in the ticket.

## **Troubleshoot based on** nvidia-smi **status codes**

nvidia-smi is a command-line utility used to monitor the status of NVIDIA GPU devices and manage the performance and health of GPU servers. You can look up the **NVIDIASMIStatusCode** in your diagnostic report in the following table to view its description and the corresponding solution.

**nvidia-smi status code**

**Description**

**Solution**

0

Success.

None.

3

The requested operation is not available on target device. Check whether the target device supports nvidia-smi or whether a driver issue exists.

Check the driver installation log `/var/log/nvidia-installer.log` and run the `dmesg | grep -i nv` command to check whether error logs related to the driver are generated.

6

Driver issue: A query to find an object was unsuccessful.

Check the driver installation log `/var/log/nvidia-installer.log` and run the `dmesg | grep -i nv` command to check whether error logs related to the driver are generated.

8

Hardware issue: The external power cables of a device are not properly attached.

[Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request Elastic Computer Service (ECS) technical support.

9

Driver issue: The NVIDIA driver is not loaded.

Check the driver installation log `/var/log/nvidia-installer.log` and run the `dmesg | grep -i nv` command to check whether error logs related to the driver are generated.

10

The NVIDIA kernel detected an interrupt issue with a GPU.

Check the driver installation log `/var/log/nvidia-installer.log`, run the `dmesg | grep -i nv` command to check whether error logs related to the driver are generated, or check the XID.

12

NVML Shared Library cannot be found or loaded.

Check the driver installation log `/var/log/nvidia-installer.log`, run the `dmesg | grep -i nv` command to check whether error logs related to the driver are generated, or check the XID.

13

The local version of NVML does not implement this function.

Check the driver installation log `/var/log/nvidia-installer.log`, run the `dmesg | grep -i nv` command to check whether error logs related to the driver are generated, or check the XID.

14

Hardware issue: infoROM is corrupted.

[Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request ECS technical support.

15

Hardware issue: The GPU has fallen off the bus.

[Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request ECS technical support.

255

Other errors or internal driver errors occurred.

Check the driver installation log `/var/log/nvidia-installer.log`, run the `dmesg | grep -i nv` command to check whether error logs related to the driver are generated, or check the XID.

\-1

nvidia-smi timed out.

Check the driver installation log `/var/log/nvidia-installer.log`, run the `dmesg | grep -i nv` command to check whether error logs related to the driver are generated, or check the XID.

## **Troubleshoot based on XIDs**

XID messages are error reports printed from the NVIDIA driver to the kernel log or event log of the operating system. An XID message is a GPU error that indicates a hardware problem, NVIDIA software problem, or user application problem. The XID message also indicates the location of the error and the error code.

In a diagnostic report, if the check item **XID exceptions on GPU-accelerated node** is empty, no XID message is generated. If the check item is not empty, look up the XID in the following table for solutions or submit a ticket to request technical support.

### **XID table for troubleshooting by users**

When you receive the following XIDs, we commend that you perform the following steps to troubleshoot the errors:

1.  Resubmit the workload and check whether the same XID is returned.
    
2.  If the same XID is returned, inspect the code or analyze the logs. Make sure that the error is not caused by the code.
    
3.  If no error is found in the code, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

**XID**

**Description**

13

Graphics Engine Exception. In most cases, arrays are out of their declared ranges or an instruction error occurs. In rare cases, a hardware error occurs.

31

GPU memory page fault. In most cases, the application accesses an illegal address. In rare cases, a driver or hardware error occurs.

43

GPU stopped processing. In most cases, the application encounters an error.

45

Preemptive cleanup, due to previous errors -- Most likely to see when running multiple cuda applications and hitting a DBE. In most cases, the application is manually stopped or the application stops due to another error, such as a hardware issue or resource limits. XID 45 only indicates the result. You need to analyze the log to locate the cause.

68

NVDEC0 Exception. In most cases, a hardware or driver error occurs.

### **XID table for submitting tickets to request technical support**

When the following XIDs are returned, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request technical support and include the diagnostic information of the GPU-accelerated node in the ticket.

**XID**

**Description**

32

Invalid or corrupted push buffer stream. The event is reported by the DMA controller of the PCIE bus that manages communication between the NVIDIA driver and GPU. In most cases, a PCI quality issue occurs.

38

Driver firmware error. In most cases, a driver firmware issue occurs.

48

Double Bit ECC Error (DBE). This event is reported when the GPU encounters an uncorrectable error. The error is also reported to your application. In most cases, you need to reset the GPU or node to fix this error.

61

Internal micro-controller breakpoint/warning. The GPU internal engine stops working. Consequently, your businesses are affected.

62

Internal micro-controller halt. This event is similar to XID61.

63

ECC page retirement or row remapping recording event. When the application encounters a GPU memory hardware error, the Error Correction Code (ECC) mechanism of NVIDIA retires or remaps the faulty memory region. The retirement or remapping information must be recorded in infoROM to ensure that the retirement or remapping is permanently effective.

-   Volt architecture: successfully record the ECC page retirement event in infoROM.
    
-   Ampere architecture: successfully record the row remapping event in infoROM.
    

64

ECC page retirement or row remapper recording failure. This event is similar to XID 63. However, XID 63 indicates that the retirement or remapping information is successfully recorded in infoROM. XID 64 indicates that the retirement or remapping information fails to be recorded.

74

NVLINK Error. The XID indicates an NVLink hardware error. The GPU encounters a critical hardware error and must be repaired.

79

GPU has fallen off the bus. The GPU has fallen off the bus and the bus cannot find the GPU. This means that the GPU encounters a critical hardware error and must be repaired.

92

High single-bit ECC error rate. A hardware or driver error occurs.

94

Contained ECC error. When the application encounters an uncorrectable GPU memory ECC error, the ECC mechanism of NVIDIA attempts to suppress the error in the faulty application in case the error affects other applications on the GPU-accelerated node. This event is generated if the error suppression mechanism successfully suppresses the error. In this case, only the faulty application is affected by the uncorrectable ECC error.

95

Uncontained ECC error. This event is similar to XID 94. However, XID 94 indicates that the error is suppressed. XID 95 indicates that the error fails to be suppressed. Other applications on the GPU-accelerated node are also affected.

## **References**

-   [GPU monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gpu-monitoring/#title-bkk-ce7-1dn)
    
-   [GPU management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gpu-management/#title-ogc-6gb-jgk)
    
-   [GPU FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gpu-faq)
    
-   [Cluster check](/help/en/doc-detail/605585.html#title-t2f-m70-nl4)
    
-   [Cluster inspections](/help/en/doc-detail/605586.html#title-ybl-yew-pk8)
    
-   [Cluster diagnostics](/help/en/doc-detail/605587.html#ariaid-title1)
