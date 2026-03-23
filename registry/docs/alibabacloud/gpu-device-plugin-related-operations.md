The NVIDIA Device Plugin is a component in a Kubernetes cluster that manages the GPUs on each node. It enables Kubernetes to use GPU resources more easily and efficiently. This topic describes how to upgrade and restart the NVIDIA Device Plugin, isolate GPU devices, and view and update the component version on ACK nodes in a dedicated GPU scheduling scenario.

## **Usage notes**

> For more information about how to view the version, upgrade, and restart the NVIDIA Device Plugin, and isolate GPU devices, see [Configure and manage the NVIDIA Device Plugin](#).

Note the following points about the NVIDIA Device Plugin deployed as a DaemonSet:

-   The component is automatically installed when you create a cluster.
    
-   If you uninstall this component, scaled-out GPU nodes cannot report GPU resources.
    
-   When you upgrade a cluster from an earlier version to version 1.32, the NVIDIA Device Plugin deployed as a static pod is also upgraded to an ACK component.
    
-   The DaemonSet has a NodeSelector (\`ack.node.gpu.schedule=default\`). When a GPU node is added to the cluster, the ACK script for adding nodes automatically adds this label to the GPU node. This ensures that the DaemonSet deploys the corresponding pod on the GPU node.
    

**Important**

-   If the node operating system is Ubuntu 22.04 or Red Hat Enterprise Linux (RHEL) 9.3 64-bit, the NVIDIA Device Plugin may fail to work correctly. This is because the `ack-nvidia-device-plugin` component sets the `NVIDIA_VISIBLE_DEVICES=all` environment variable for pods by default. As a result, the plugin cannot access GPU devices after the node runs the `systemctl daemon-reload` or `systemctl daemon-reexec` command. For more information, see [What do I do if the "Failed to initialize NVML: Unknown Error" error occurs when I run a GPU container?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gpu-faq#22dd25e792z6p).
    
-   If you upgrade a cluster from an earlier version to version 1.32 before May 1, 2025, the cluster may have NVIDIA Device Plugins deployed as both static pods and DaemonSets. You can run the following script to view the nodes where the plugin is deployed as a static pod.
    
    ```
    #!/bin/bash
    for i in $(kubectl get po -n kube-system -l component=nvidia-device-plugin | grep -v NAME | awk '{print $1}');do
        if kubectl get po $i -o yaml -n kube-system | grep 'kubernetes.io/config.source: file' &> /dev/null;then
        kubectl get pod $i -n kube-system -o jsonpath='{.spec.nodeName}{"\n"}'
        fi
    done
    ```
    
    Expected output:
    
    ```
    cn-beijing.10.12.XXX.XX
    cn-beijing.10.13.XXX.XX
    ```
    
    The expected output indicates that the NVIDIA Device Plugin is still deployed as a static pod on some nodes. You can migrate the NVIDIA Device Plugin from a static pod deployment to a DaemonSet deployment by running the following script.
    
    ```
    kubectl label nodes <NODE_NAME> ack.node.gpu.schedule=default
    ```
    

## Version differences

The implementation and management policy of the `ack-nvidia-device-plugin` component vary based on the cluster version. If your cluster version is earlier than 1.20, [manually upgrade the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster). The differences are as follows:

**Attribute**

**Cluster versions 1.32 and later**

**Cluster versions 1.20 to 1.31**

Deployment method

DaemonSet

Static Pod

Management method

Component management in the console

Manual maintenance

Node label requirements

ack.node.gpu.schedule=default

No special requirements

## Prerequisites

-   Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
-   [Use kubectl on CloudShell to connect to an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kubectl-on-cloud-shell-to-manage-ack-clusters-1690962464408#31bd769622drs).
    

## View the **NVIDIA Device Plugin** version

## Cluster versions 1.32 and later

For components deployed as a DaemonSet, you can locate the ack-nvidia-device-plugin component on the **Component Management** page in the console and view the current version on the component card.

## Cluster versions 1.20 to 1.31

For components deployed as a static pod, run the following command to view the component version.

```
kubectl get pods -n kube-system -l component=nvidia-device-plugin \
  -o jsonpath='{range .items[*]}{.spec.containers[0].image}{"\t"}{.spec.nodeName}{"\n"}{end}' \
  | awk -F'[:/]' '{split($NF, a, "-"); print a[1] "\t" $0}' \
  | sort -k1,1V \
  | cut -f2- \
  | awk -F'\t' '{split($1, img, ":"); print img[NF] "\t" $2}'
```

## Upgrade the **NVIDIA Device Plugin**

1.  Upgrade the ack-nvidia-device-plugin component.
    
    ## For cluster versions 1.32 and later
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Operations** > **Add-ons**.
        
    3.  On the Component Management page, search for the **ack-nvidia-device-plugin** component and click **Upgrade** on its card.
        
    4.  In the dialog box that appears, click **OK**.
        
    
    ## For cluster versions from 1.20 to 1.31
    
    1.  On the **Clusters** page, click the name of the one you want to change. In the navigation pane on the left, choose **Nodes** > **Nodes**.
        
    2.  Select the GPU nodes on which you want to perform batch operations. Below the node list, click **Batch Operations**. In the **Batch Operations** dialog box, select **Execute Shell Command** and click **OK**.
        
        **Important**
        
        First, select a small number of GPU nodes to upgrade. After you verify that the Device Plugin works as expected on these nodes, perform the operation on a larger batch of nodes.
        
    3.  You are redirected to the OOS interface. Set **Execution Mode** to **Pause On Failure**, and then click **Next: Set Parameters**.
        
    4.  On the Set Parameters page, select **Run Shell Script** and paste the following sample script.
        
        **Note**
        
        In the script, change the `RUN_PKG_VERSION` parameter to the major version of your cluster, such as 1.30. Do not enter a minor version, such as 1.30.1. Otherwise, the script fails.
        
        ```
        #!/bin/bash
        set -e
        
        RUN_PKG_VERSION=1.30
        
        function update_device_plugin() {
        	base_dir=/tmp/update_device_plugin
        	rm -rf $base_dir
        	mkdir -p $base_dir
        	cd $base_dir
        	region_id=$(curl -ssL 100.100.100.200/latest/meta-data/region-id  2> /dev/null || echo "")
        	if [[ $region_id == "" ]]; then
        		echo "Error: failed to get region id,region id is null"
        		exit 1
        	fi
        	PKG_URL=https://aliacs-k8s-${region_id}.oss-${region_id}.aliyuncs.com/public/pkg/run/run-${RUN_PKG_VERSION}.tar.gz
        	curl -sSL --retry 3 --retry-delay 2 -o run.tar.gz $PKG_URL
        	tar -xf run.tar.gz
        
        	local dir=pkg/run/$RUN_PKG_VERSION/module
        	sed -i "s@registry.cn-hangzhou.aliyuncs.com/acs@registry-${region_id}-vpc.ack.aliyuncs.com/acs@g" $dir/nvidia-device-plugin.yml
        	mkdir -p /etc/kubernetes/device-plugin-backup
        	mkdir -p /etc/kubernetes/manifests
        	mv  /etc/kubernetes/manifests/nvidia-device-plugin.yml /etc/kubernetes/device-plugin-backup/nvidia-device-plugin.yml.$(date +%s)
        	sleep 5
        	cp -a $dir/nvidia-device-plugin.yml /etc/kubernetes/manifests
        	echo "succeeded to update device plugin"
        }
        
        if [ -f /etc/kubernetes/manifests/nvidia-device-plugin.yml ]; then
        	update_device_plugin
        else
        	echo "skip to update device plugin"
        fi
        ```
        
    5.  Click **Next: Confirm**. After you confirm the information, click **Create**.
        
        After the task is created, you are redirected to the **Task Execution Management** page where you can view the task status. If the **Execution Output** shows `succeeded to update device plugin`, the update was successful.
        
    
2.  Check whether the component is running as expected.
    
    Run the following command to check whether the Device Plugin is working as expected on the GPU nodes.
    
    1.  [Connect to the cluster using kubectl in Workbench or CloudShell](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kubectl-on-cloud-shell-to-manage-ack-clusters-1690962464408#31bd769622drs).
        
    2.  Run the following command to check whether the NVIDIA Device Plugin has restarted:
        
        ```
        kubectl get po -n kube-system -l component=nvidia-device-plugin 
        ```
        
        Sample output:
        
        ```
        NAME                             READY   STATUS    RESTARTS      AGE
        nvidia-device-plugin-xxxx        1/1     Running   1             1m
        ```
        
    3.  After all Pods are restarted, run the following script to check whether the nodes report GPU resources:
        
        ```
        #!/bin/bash
        
        # Get all eligible NVIDIA Device Plugin Pods and the nodes where they are located.
        PODS=$(kubectl get po -n kube-system -l component=nvidia-device-plugin -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.spec.nodeName}{"\n"}{end}')
        
        # Iterate over the node of each Pod.
        echo "$PODS" | while IFS=$'\t' read -r pod_name node_name; do
            # Get the value of nvidia.com/gpu resource allocation for the node.
            gpu_allocatable=$(kubectl get node "$node_name" -o jsonpath='{.status.allocatable.nvidia\.com/gpu}' 2>/dev/null)
        
            # Check if the resource value is 0.
            if [ "$gpu_allocatable" == "0" ]; then
                echo "Error: node=$node_name, pod=$pod_name, resource(nvidia.com/gpu) is 0"
            fi
        done
        ```
        
        If a node reports 0 for the resource, see [Restart the NVIDIA Device Plugin](#32285c6622jh2).
        
    

## Restart the **NVIDIA Device Plugin**

In a dedicated GPU scheduling scenario in ACK, the Device Plugin that reports GPU devices on a node is deployed as a pod by default. Therefore, the restart process must be performed on the target node.

## Clusters of version 1.32 and later

1.  Run the following command to find the Device Plugin pod on the node.
    
    ```
    kubectl get pod -n kube-system -l component=nvidia-device-plugin -o wide | grep <NODE>
    ```
    
2.  Run the following command to restart the Device Plugin pod.
    
    ```
    kubectl delete po <DEVICE_PLUGIN_POD> -n kube-system 
    ```
    

## Clusters of versions from 1.20 to 1.31

1.  On the **Clusters** page, find the cluster to manage and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
2.  On the **Node Pools** page, click the name of the node pool, and then log on to the target GPU node.
    
    > If the operating system is ContainerOS, direct user logon is not supported to mitigate potential security risks and prevent untraceable operations. The Secure Shell (SSH) feature is also unavailable for logon. To log on to an instance for operations and maintenance (O&M), see [Perform O&M on a ContainerOS node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-administrative-container-of-containeros).
    
3.  Select the GPU nodes that require batch maintenance. Below the node list, click **Batch Operations**. In the **Batch Operations** dialog box, select **Execute Shell Command**, and click **OK**.
    
    **Important**
    
    First, restart a small number of GPU nodes. After you verify that the Device Plugin works as expected on the restarted nodes, perform the operation on a larger batch of nodes.
    
4.  On the OOS page that appears, set **Execution Mode** to **Pause On Failure**, and then click **Next: Set Parameters**.
    
5.  On the Set Parameters page, select **Run Shell Script**, and paste the following sample script.
    
    ```
    #!/bin/bash
    set -e
    
    if [ -f /etc/kubernetes/manifests/nvidia-device-plugin.yml ]; then
    	cp -a /etc/kubernetes/manifests/nvidia-device-plugin.yml /etc/kubernetes
    	rm -rf /etc/kubernetes/manifests/nvidia-device-plugin.yml
    	sleep 5
    	mv /etc/kubernetes/nvidia-device-plugin.yml /etc/kubernetes/manifests
    	echo "The NVIDIA device is restarted."
    else
    	echo "No need to restart the NVIDIA device plugin."
    fi
    ```
    
6.  Click **Next: Confirm**. After you confirm that the information is correct, click **Create**. You are then redirected to the **Task Execution Management** page, where you can view the task status.
    
7.  Run the following command to check whether the Device Plugin on the GPU node works as expected.
    
    ```
    kubectl get nodes <NODE_NAME> -o jsonpath='{.metadata.name} ==> nvidia.com/gpu: {.status.allocatable.nvidia\.com/gpu}'
    ```
    
    Expected output:
    
    ```
    cn-hangzhou.172.16.XXX.XX ==> nvidia.com/gpu: 1
    ```
    
    If the value of the `nvidia.com/gpu` extended resource reported by the GPU node is not 0, the Device Plugin is working as expected.
    

## Modify the **NVIDIA Device Plugin** device ID

When the Device Plugin allocates a device to a pod, it creates a checkpoint file on the node. This file records which devices are allocated and their corresponding pod information. In the NVIDIA Device Plugin, the checkpoint file uses the GPU's UUID as the unique identifier (key) for each GPU device by default. You can change this key to the device index to resolve issues, such as UUID loss caused by VM cold migration.

## For cluster versions 1.32 and later

1.  Run the following command to modify the NVIDIA Device Plugin DaemonSet.
    
    ```
    kubectl get ds -n kube-system ack-nvidia-device-plugin
    ```
    
2.  Add the following environment variable `CHECKPOINT_DEVICE_ID_STRATEGY`.
    
    ```
        env:
          - name: CHECKPOINT_DEVICE_ID_STRATEGY
            value: index
    ```
    
3.  [Restart the NVIDIA Device Plugin](#32285c6622jh2) for the changes to take effect.
    

## For cluster versions from 1.20 to 1.31

1.  On the target node, check the image tag of the Device Plugin in the `/etc/kubernetes/manifests/nvidia-device-plugin.yml` file. The tag represents the version number. If the version number is earlier than 0.9.3, update it to the latest version, `v0.9.3-0dd4d5f5-aliyun`.
    
2.  In the `/etc/kubernetes/manifests/nvidia-device-plugin.yml` file, add the `CHECKPOINT_DEVICE_ID_STRATEGY` environment variable to the static pod configuration.
    
    ```
        env:
          - name: CHECKPOINT_DEVICE_ID_STRATEGY
            value: index
    ```
    
3.  [Restart the NVIDIA Device Plugin](#32285c6622jh2) for the changes to take effect.
    

## Enable GPU device isolation

**Important**

GPU device isolation is supported only in `nvidia-device-plugin` v0.9.1 and later. For more information, see [View the NVIDIA Device Plugin version](#5d34fdf488hat).

In a dedicated GPU scheduling scenario in ACK, you may need to isolate a GPU device on a node for reasons such as a device failure. ACK provides a mechanism for you to manually isolate a device on a node to prevent new GPU application pods from being allocated to that device. The procedure is as follows:

On the target node, create or edit the `unhealthyDevices.json` file in the `/etc/nvidia-device-plugin/` directory. The `unhealthyDevices.json` file must use the following JSON format.

```
{
  "index": ["x", "x" ..],
  "uuid": ["xxx", "xxx" ..]
}
```

You can specify the device to isolate using its `index` or `uuid` in the JSON file. You only need to specify one identifier for each device. The changes take effect automatically after you save the file.

After the configuration is complete, you can check the number of `nvidia.com/gpu` resources reported by the Kubernetes node to verify that the device is isolated.

## References

-   If you encounter issues with GPU nodes, see [Troubleshoot GPU nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-node-diagnosis-to-self-troubleshoot-gpu-node-problems) and [GPU FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gpu-faq).
    
-   For more information about shared GPU scheduling, see [Shared GPU scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cgpu-overview/).
