When the default containerd configuration does not meet your business requirements, you can customize containerd parameters at the node pool level to tailor cluster node behavior. For example, you can configure multiple mirror repositories for a specific image repository or skip TLS certificate verification for a specific image repository.

## Limits

Your node pool must use containerd as its runtime. The containerd version must be 1.6.20 or later. If your containerd version is earlier than 1.6.20, [upgrade the node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates).

## Important notes

-   Custom containerd configurations apply to nodes in batches. Changes take effect immediately on existing nodes in the node pool. New nodes automatically use the updated configuration.
    
-   Do not modify [supported containerd parameters](#section-n1l-7vc-b8i) using the command line. ACK blocks such changes and they do not take effect. Restore those parameters to their original values.
    
-   When a custom containerd configuration takes effect, the system automatically normalizes the format and corrects invalid syntax.
    

## Supported containerd parameters

### **Customize container runtime configuration**

**Parameter**

**Description**

**Type**

**Valid values**

`max_concurrent_downloads`

Maximum number of concurrent image layer downloads. Increasing this value speeds up pulling multi-layer images but increases network and I/O load.

Int

-   Valid range: \[1, 20\]
    
-   Default: depends on the containerd version.
    
    -   containerd 2.x and later: `3`.
        
    -   containerd 1.x and earlier: download behavior is determined by internal runtime logic.
        

`ignore_image_defined_volumes`

Whether to ignore anonymous volumes defined in the image using the `VOLUME` instruction. Set this parameter to `true` to prevent containers from automatically creating anonymous volumes.

Bool

Default: true

`limitCore`

Maximum size (in bytes) of core dump files generated when processes in a container crash.

Key values:

-   `0`: disables core dump file generation.
    
-   `infinity`: no size limit.
    

Int

-   Valid range: non-negative integer
    
-   Default: `infinity`
    

`limitNoFile`

Maximum number of file descriptors that processes in a container can open.

Int

-   Valid range: ≥ 1024
    
-   Default: 1048576
    

`limitMemLock`

Maximum amount of memory (in bytes) that processes in a container can lock.

Int

-   Valid range: ≥ 65536
    
-   Default: usually `65536`, matching the host operating system.
    
    For Lingjun nodes or nodes where RDMA or EDMA devices are detected during initialization, the default is automatically set to `infinity`. Attaching devices after the node becomes ready does not trigger this behavior.
    

### **Registry Mirror Configuration**

**Description**

**Recommendations**

Configure registry mirrors to let the container runtime use alternative image repositories when pulling images. This accelerates image pulls.

Each mirror supports custom path mapping using the `override_path` parameter.

> This change does not restart containers.

-   Add a local image repository to speed up image pulls.
    
-   Configure multiple image repositories to improve fault tolerance and availability.
    

### **Image Registries Skipping Certificate Authentication (Insecure Registries)**

**Description**

**Recommendations**

Let the container runtime skip TLS certificate verification for specified image repositories when pulling images. Use this in staging environments to pull images from repositories that use self-signed certificates.

> This change does not restart containers.

-   Skipping certificate verification poses security risks. Use this only in development or staging environments.
    
-   Use this only for private image repositories that use self-signed certificates or cannot provide valid certificates.
    

## Customize containerd parameters for node pools using the console

Changing containerd configuration does not affect existing containers. To ensure cluster stability, perform this operation during off-peak hours.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the left navigation pane, click **Nodes** > **Node Pools**.
    
3.  On the node pool list page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4503103471/p931503.png) > **Containerd Configuration** in the **Actions** column of the target node pool.
    
4.  Read the important notes on the current page. Follow the page instructions to add parameters, select target nodes, and set the batch configuration policy. Then click **Submit**.
    
    > See the [configuration examples](#74c1a184300pl) below.
    
    -   When you remove a [container runtime configuration](#3c46ea50edik7), it reverts to the default value automatically.
        
    -   After you submit, containerd configuration applies to nodes in batches. This process takes time. You can view progress in the Events section and control execution—for example, pause, resume, or cancel. If a node task fails, troubleshoot the node issue and click **Continue** to retry.
        
        Use the pause feature to verify nodes that have already been upgraded. When you pause, nodes currently being configured finish applying the configuration. Nodes not yet started wait until you resume. Complete the configuration task as soon as possible. Tasks paused for more than 7 days are canceled automatically. Related events and logs are also cleaned up.
        

## Configuration examples

**Configure a replacement image repository for docker.io**

**Skip certificate verification for a private repository**

**Configure an HTTP private image repository**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3766543771/p920660.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5958042471/p920661.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3766543771/p920664.png)

## **FAQ**

#### **Does customizing containerd parameters affect normal business operations?**

The change does not affect running pods. It applies only to new pods created after the change. Perform this operation during off-peak hours.

To apply the new configuration to existing pods, manually recreate them.

#### **I get an error like**`not match XXX`**or**`**must be between XXX**`**when customizing containerd parameters. How do I fix it?**

Common causes include the following:

-   `must be between XXX`: the parameter value or format is invalid. Check whether the value is valid—for example, whether the format is correct or the value is within the allowed range.
    
-   `not match XXX`: you modified the configuration file directly using the command line. ACK blocks such changes. Restore the parameter to its original value.
    

## **References**

-   For automated O&M capabilities supported by node pools, see [Automated O&M capabilities](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-overview/#807e154b6au5m).
    
-   If your nodes, pods, containerd, or kubelet report errors or behave abnormally, see [Troubleshoot node issues](/help/en/ack/ack-managed-and-ack-dedicated/support/node-troubleshooting-2), [Troubleshoot pod issues](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#section-qv2-yd8-1eg), and [Node and node pool FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-management).
