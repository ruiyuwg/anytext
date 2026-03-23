Different types and versions of ACK clusters install different versions of the NVIDIA driver by default. If your CUDA library requires a newer NVIDIA driver version for compatibility, you can customize the NVIDIA driver on your GPU nodes. This topic describes how to specify a custom NVIDIA driver version for GPU nodes using node pool labels.

## **Precautions**

-   ACK does not guarantee compatibility between GPU driver versions and CUDA library versions. You must verify the compatibility yourself.
    
-   For more information about the driver version requirements for different NVIDIA card models, see the [official NVIDIA documentation](https://www.nvidia.com/Download/index.aspx).
    
-   For custom operating system images that already have GPU components such as the GPU driver and NVIDIA Container Runtime installed, ACK cannot guarantee that the custom GPU driver is compatible with other ACK GPU components, such as monitoring components.
    
-   When you specify the GPU driver version using a node pool label, the driver installation is triggered when a node is added. Therefore, this method applies only to new or scaled-out nodes. Existing nodes are not affected. To apply a new driver to existing nodes, you must [remove the nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11) and then [add them again](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster).
    
-   The [gn7](/help/en/egs/gpu-accelerated-compute-optimized-instance-families#e698265f930a2) and [ebmgn7](/help/en/egs/gpu-accelerated-compute-optimized-instance-families#section-esc-xnn-7aa) instance types have compatibility issues with driver versions 510.xxx and 515.xxx. You can use a driver version earlier than 510, such as 470.xxx.xxxx, with GSP disabled, or use driver version 525.125.06 or later.
    
-   ECS instances of the [ebmgn7](/help/en/egs/gpu-accelerated-compute-optimized-instance-families#section-esc-xnn-7aa) or [ebmgn7e](/help/en/egs/gpu-accelerated-compute-optimized-instance-families#c845008dd8bsl) instance type support only NVIDIA driver versions 460.32.03 or later.
    
-   During node pool creation, if the specified driver version is not listed in [ACK's supported NVIDIA driver versions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-nvidia-driver-version-list#6de5bde021doh), ACK will automatically install the default driver version. Specifying driver versions incompatible with the latest OS may cause node addition failures. In such cases, always select the latest supported driver version.
    

## Step 1: Determine the NVIDIA driver version

Select an NVIDIA driver version that meets your business requirements from the [](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-nvidia-driver-version-list#6de5bde021doh). This topic uses driver version 550.144.03 as an example.

## **Step 2: Create a node pool with the specified driver version**

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Nodes** > **Node Pools**.
    
3.  In the upper-left corner, click **Create Node Pool**. For more information about the configuration items, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool). The key configurations are as follows:
    
    In the **Node Labels** section, add a label. Click the ![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5146487161/p245638.png) icon. Then, in the **Key** text box, enter `ack.aliyun.com/nvidia-driver-version`. In the **Value** text box, enter `550.144.03`.
    

## **Step 3: Verify the custom installation of the NVIDIA driver**

1.  Run the following command to view the pods that have the `component: nvidia-device-plugin` label:
    
    ```
    kubectl get po -n kube-system -l component=nvidia-device-plugin -o wide
    ```
    
    Expected output:
    
    ```
    NAME                             READY   STATUS    RESTARTS   AGE     IP              NODE                       NOMINATED NODE   READINESS GATES
    ack-nvidia-device-plugin-fnctc   1/1     Running   0          2m33s   10.117.227.43   cn-qingdao.10.117.XXX.XX   <none>           <none>
    ```
    
    The output shows that the pod name that corresponds to the newly added node in the NODE column is `ack-nvidia-device-plugin-fnctc`.
    
2.  Run the following command to check whether the driver version of the node is the expected version:
    
    ```
    kubectl exec -ti ack-nvidia-device-plugin-fnctc -n kube-system -- nvidia-smi
    ```
    
    Expected output:
    
    ```
    Mon Mar 24 08:51:55 2025       
    +-----------------------------------------------------------------------------------------+
    | NVIDIA-SMI 550.144.03             Driver Version: 550.144.03     CUDA Version: 12.6     |
    |-----------------------------------------+------------------------+----------------------+
    | GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
    | Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
    |                                         |                        |               MIG M. |
    |=========================================+========================+======================|
    |   0  Tesla P4                       On  |   00000000:00:07.0 Off |                    0 |
    | N/A   33C    P8              7W /   75W |       0MiB /   7680MiB |      0%      Default |
    |                                         |                        |                  N/A |
    +-----------------------------------------+------------------------+----------------------+
                                                                                             
    +-----------------------------------------------------------------------------------------+
    | Processes:                                                                              |
    |  GPU   GI   CI        PID   Type   Process name                              GPU Memory |
    |        ID   ID                                                               Usage      |
    |=========================================================================================|
    |  No running processes found                                                             |
    +-----------------------------------------------------------------------------------------+
    ```
    
    The output shows that the driver version is 550.144.03. This indicates that the custom NVIDIA driver was successfully installed on the node.
    

## **Other methods**

When you use the [CreateClusterNodePool](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createclusternodepool) API operation to create a node pool, you can set the label for the custom driver in the configuration of the node pool. The following code provides an example:

```
{
  // The other parts are omitted.
  ......
    "tags": [
        {
            "key": "ack.aliyun.com/nvidia-driver-version",
            "value": "550.144.03"
        }
    ],
  // The other parts are omitted.
  ......
}
```
