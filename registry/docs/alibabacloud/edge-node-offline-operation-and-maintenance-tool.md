In most cloud-edge collaboration scenarios, edge nodes may go offline due to network instability. If node autonomy is enabled on these offline edge nodes, business operations can run uninterruptedly. However, in such scenarios, performing O&M tasks, such as business updates and configuration changes, becomes challenging. Container Service for Kubernetes (ACK) Edge clusters provide an offline O&M tool that allows users to perform O&M operations on edge nodes during emergencies, such as version rollback, resource reconfiguration, and configuration updates. This topic describes how to use the offline O&M tool to manage edge nodes.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6290747371/CAEQLhiBgIDB2e.WlxkiIGJjZjM2NDUzN2JhNTRiZjRhMjRkZTU4NDQ5YWFhNGY14710245_20241015174427.661.svg)

## Prerequisites

-   An ACK Edge cluster that runs Kubernetes version 1.26 or later has been created. For more information, see [Create an ACK Edge cluster](/help/en/ack/ack-edge/user-guide/create-an-ack-edge-cluster-1#task-skz-qwk-qfb).
    
-   Edge nodes have been added to the ACK Edge cluster. For more information, see [Add edge nodes](/help/en/ack/ack-edge/user-guide/add-an-edge-node).
    

## Limits

-   The O&M tool is intended for emergency use when edge nodes are offline.
    
-   Only three resource types can be modified: Pod, ConfigMap, and Secret.
    
-   Resource modifications are local to the node. For example, changes to a ConfigMap affect only that node, and not others using the same ConfigMap.
    
-   Changes made with the O&M tool are not synchronized to the cloud. Once the node status returns to normal, the changes made by using the tool will be overwritten by the content in the cloud. Permanent changes to the cluster must be made in the cloud.
    

## Obtain the edgeadm O&M tool

Run the following command to obtain the offline O&M tool:

```
 export REGION="" INTERCONNECT_MODE="" CLUSTER_VERSION=""; export ARCH=$(uname -m | awk '{print ($1 == "x86_64") ? "amd64" : (($1 == "aarch64") ? "arm64" : "amd64")}') INTERNAL=$( [ "$INTERCONNECT_MODE" = "private" ] && echo "-internal" || echo "" ); wget http://aliacs-k8s-${REGION}.oss-${REGION}${INTERNAL}.aliyuncs.com/public/pkg/run/attach/${CLUSTER_VERSION}/${ARCH}/edgeadm -O edgeadm; chmod u+x edgeadm;
```

The following table describes the parameters.

**Parameter**

**Description**

**Example**

CLUSTER\_VERSION

Replace with the ACK Edge cluster version. For more information about the Kubernetes versions supported by ACK Edge clusters, see [Release notes for Kubernetes versions supported](/help/en/ack/ack-edge/user-guide/release-notes-for-kubernetes-versions-supported-by-ack-edge/).

1.26.3-aliyun.1

REGION

The ID of the region where the ACK Edge cluster resides. For more information about the regions supported by ACK Edge clusters, see [Supported regions](/help/en/ack/product-overview/supported-regions).

cn-hangzhou

INTERCONNECT\_MODE

The network type of connections to the node:

-   basic: public network.
    
-   private: Express Connect circuits.
    

basic

## Common O&M operations

The following table describes the variables you need to replace when running the command, and how to obtain them.

**Variable**

**Description**

**How to obtain it**

`{pod-name}`

Replace with the name of the pod to be modified.

Query by running the command `crictl pods` on the node.

`{namespace}`

Replace with the name of the namespace to which the pod belongs.

`{pod-id}`

Replace with the ID corresponding to the pod.

`{configmap-name}`

Replace with the name of the ConfigMap to be modified.

Query by running the command `ls /etc/kubernetes/cache/kubelet/configmaps.v1.core/{namespace}` on the node.

`{secret-name}`

Replace with the name of the Secret to be modified.

Query by running the command `ls /etc/kubernetes/cache/kubelet/secrets.v1.core/{namespace}` on the node.

### **Scenario 1: Modify** a pod template

1.  Run the following command on the edge node where the pod resides to enter the edit mode:
    
    ```
    edgeadm -n {namespace}  edit pod {pod-name} 
    ```
    
2.  Enter edit mode, modify the pod template, save the changes, and exit.
    
3.  After the modification, the pod will restart automatically. Run the following command to query the pod configuration and verify whether the changes have taken effect:
    
    ```
    crictl inspectp {pod-id}
    ```
    

### Scenario 2: Modify the ConfigMap of a specific pod

1.  Run the following command on the edge node where the pod resides to enter the edit mode:
    
    ```
    edgeadm -n {namespace} -p {pod-name} edit configmap {configmap-name}
    ```
    
2.  Enter edit mode, modify the ConfigMap template, save the changes, and exit.
    
3.  After the modification, the specified pod will restart and use the updated ConfigMap. For other pods on the same node using this ConfigMap, run the following command to manually restart them to apply the changes:
    
    ```
    crictl stopp {pod-id}
    ```
    
    **Note**
    
    When you run this command, it will stop only the specified pod, after which kubelet will automatically restart the pod.
    

### Scenario 3: Modify the Secret of a specific pod

1.  Run the following command on the edge node where the pod resides to enter the edit mode:
    
    ```
    edgeadm -n {namespace} -p {pod-name} edit secret {secret-name}
    ```
    
2.  Enter edit mode, modify the Secret template, save the changes, and exit.
    
3.  After the modification, the specified pod will restart and use the new Secret. For other pods on the same node using this Secret, run the following command to manually restart them to apply the changes:
    
    ```
    crictl stopp {pod-id}
    ```
