This guide shows how to customize the NVIDIA driver on GPU nodes by using node pool labels and an Object Storage Service (OSS) URL.

## Prerequisites

-   You have a running ACK cluster with GPU-accelerated nodes or plan to create one.
    
-   You have access to an OSS bucket in the same region as your cluster.
    

## Precautions

### Compatibility constraints

ACK does not guarantee compatibility between custom-uploaded drivers and cluster components. You are responsible for verifying CUDA compatibility between the driver version you specify and the GPU applications running in your workloads. Refer to the [List of NVIDIA driver versions supported by ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-supported-nvidia-driver-version-list) for the versions that ACK has validated.

The following instance-type constraints apply regardless of the driver version you upload:

**Instance family**

Unsupported driver versions

Recommended versions

ecs.gn7.xxxxx, ecs.ebmgn7.xxxx

510.xxx, 515.xxx

Earlier than 510.xxx with GSP disabled (for example, 470.xxx.xxxx), or 525.125.06 or later

[ebmgn7](/help/en/egs/gpu-accelerated-compute-optimized-instance-families#section-esc-xnn-7aa), [ebmgn7e](/help/en/egs/gpu-accelerated-compute-optimized-instance-families#c845008dd8bsl)

Earlier than or equal to 460.32.03

Later than 460.32.03

### Operational behavior

**Important**

Node pool labels take effect only when new nodes are added to the node pool. The specified driver is NOT installed on nodes that already exist in the node pool. To apply the driver to existing nodes, remove each node from the node pool and re-add it. For instructions, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11) and [Add existing ECS instances to an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster).

## Step 1: Download the NVIDIA driver

Download the NVIDIA driver runfile for your target version from the [NVIDIA Driver Downloads](https://www.nvidia.com/Download/index.aspx) page.

The file name follows the pattern `NVIDIA-Linux-x86_64-<version>.run`, for example: `NVIDIA-Linux-x86_64-550.90.07.run`.

## Step 2: Download NVIDIA Fabric Manager

Download the NVIDIA Fabric Manager RPM package that matches your driver version from the [NVIDIA YUM](https://developer.download.nvidia.cn/compute/cuda/repos/rhel7/x86_64/) repository. The version of NVIDIA Fabric Manager must be the same as that of the NVIDIA driver.

```
wget https://developer.download.nvidia.cn/compute/cuda/repos/rhel7/x86_64/nvidia-fabric-manager-550.90.07-1.x86_64.rpm
```

The file name follows the pattern `nvidia-fabric-manager-<version>-1.x86_64.rpm`, for example: `nvidia-fabric-manager-550.90.07-1.x86_64.rpm`.

## Step 3: Create an OSS bucket

Log on to the [OSS console](https://oss.console.alibabacloud.com/) and create a bucket. For step-by-step instructions, see [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4).

**Note**

Create the OSS bucket in the same region as your ACK cluster. ACK pulls the driver from OSS through the internal network during node initialization, so using the same region reduces latency and avoids cross-region access failures.

## Step 4: Upload the NVIDIA driver and NVIDIA Fabric Manager to the OSS bucket

**Important**

ACK pulls the NVIDIA driver from an HTTP URL (not HTTPS) during node initialization, and constructs the file URL from the bucket endpoint and filename directly. To ensure successful retrieval:

-   Upload files to the root directory of the bucket, not to a subdirectory.
    
-   Disable **HTTPS** on each uploaded file after upload.
    
-   Use the bucket's internal endpoint (containing the `-internal` keyword) or an accelerated domain name (containing `oss-accelerate`) when you configure the node pool label in Step 5. Do not use an external endpoint — it is slow and may cause ACK to fail when adding GPU-accelerated nodes.
    

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/) and [upload files](/help/en/oss/user-guide/simple-upload) — `NVIDIA-Linux-x86_64-550.90.07.run` and `nvidia-fabric-manager-550.90.07-1.x86_64.rpm` — to the root directory of the bucket.
    
2.  In the bucket's left navigation pane, choose **Files** > **Objects**. In the **Actions** column for the driver file, click **Details**.
    
3.  In the **Details** panel, disable **HTTPS**.
    
4.  Repeat steps 2–3 for the Fabric Manager RPM file.
    
5.  In the bucket's left navigation pane, click **Overview** and record the bucket's internal endpoint. You will use this value in Step 5.
    
    **Note**
    
    If you encounter file retrieval failures, check your bucket access configuration. See [OSS access control](/help/en/oss/user-guide/permissions-and-access-control-overview).
    

## Step 5: Configure node pool labels

Add three node pool labels to instruct ACK to pull your driver files from OSS during node initialization. Each label key controls a specific part of the retrieval process:

**Label key**

Purpose

Example value

`ack.aliyun.com/nvidia-driver-oss-endpoint`

OSS bucket endpoint ACK uses to locate your files. Must be the internal or accelerated endpoint from Step 4.

`my-nvidia-driver.oss-cn-beijing-internal.aliyuncs.com`

`ack.aliyun.com/nvidia-driver-runfile`

Filename of the NVIDIA driver runfile uploaded in Step 4.

`NVIDIA-Linux-x86_64-550.90.07.run`

`ack.aliyun.com/nvidia-fabricmanager-rpm`

Filename of the Fabric Manager RPM uploaded in Step 4.

`nvidia-fabric-manager-550.90.07-1.x86_64.rpm`

To configure these labels on a new node pool through the console:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the left navigation pane, click **Nodes** > **Node Pools**.
    
3.  Click **Create Node Pool** and configure your GPU-accelerated nodes. For details on all parameters, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).
    
4.  In the **Node Labels** section, click the ![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5146487161/p245638.png) icon and add the three label keys from the table above, replacing each example value with your actual OSS endpoint, driver filename, and Fabric Manager filename.
    
5.  Complete the node pool creation. ACK installs the specified driver on each new node as it is added to the pool.
    

## Step 6: Verify that the specified NVIDIA driver version is installed

After nodes are added to the node pool, verify that the specified driver version is running.

1.  Run the following command to list the `nvidia-device-plugin` pods and identify the pod running on your new node:
    
    ```
    kubectl get po -n kube-system -l component=nvidia-device-plugin -o wide
    ```
    
    The output includes a **NODE** column showing which node each pod is scheduled on. Identify the pod name for your new node (for example, `nvidia-device-plugin-cn-beijing.192.168.1.128`).
    
2.  Run the following command to check the driver version on the node:
    
    ```
    kubectl exec -ti <pod-name> -n kube-system -- nvidia-smi
    ```
    
    Replace `<pod-name>` with the pod name from the previous step. The `nvidia-smi` output shows the driver version and CUDA version. Confirm that the driver version matches the version you uploaded — for example, **550.90.07** and **CUDA Version 12.4**.
    

## Configure via API

Instead of using the ACK console, create a node pool through the [CreateClusterNodePool](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createclusternodepool) API. Add the three label keys to the `tags` array in the request body:

```
{
  "tags": [
    {
      "key": "ack.aliyun.com/nvidia-driver-oss-endpoint",
      "value": "my-nvidia-driver.oss-cn-beijing-internal.aliyuncs.com"
    },
    {
      "key": "ack.aliyun.com/nvidia-driver-runfile",
      "value": "NVIDIA-Linux-x86_64-550.90.07.run"
    },
    {
      "key": "ack.aliyun.com/nvidia-fabricmanager-rpm",
      "value": "nvidia-fabric-manager-550.90.07-1.x86_64.rpm"
    }
  ]
}
```

Replace each value with your actual OSS endpoint, driver runfile name, and Fabric Manager RPM name from your setup.
