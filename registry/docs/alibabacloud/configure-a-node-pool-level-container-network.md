The exclusive Elastic Network Interface (ENI) mode is a policy that provides optimal network performance for pods. This mode is ideal for scenarios with strict network performance requirements. For example, this mode provides high network throughput and extremely low network latency for big data analytics, real-time stream processing, and network-sensitive applications such as video streaming, online gaming, or scientific computing. For high-frequency trading scenarios, this mode provides multicast capabilities.

## Limits

-   To add ECS instances, Terway v1.11.0 or later is required. To add Node Lingjun instances, Terway v1.14.3 or later is required. To upgrade the component, see [Terway](/help/en/ack/product-overview/terway).
    
-   After you enable dual-stack for a cluster, the ECS instance type limits of the shared ENI mode apply when you add nodes. The number of IPv4 and IPv6 addresses must be in a 1:1 ratio. For more information about the number of IPv4 and IPv6 addresses that an ECS instance supports, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
-   Node Lingjun instances do not support IPv6 dual-stack.
    
-   Pods that use exclusive ENIs do not support eBPF network acceleration or NetworkPolicy.
    
-   When you use exclusive ENIs, you must use new nodes. If you use existing nodes, the ENIs already on those nodes are not used.
    
-   The exclusive ENI mode takes effect only on new nodes. After a node pool is configured, you cannot switch it to the shared ENI mode. You also cannot switch existing nodes from the shared ENI mode to the exclusive ENI mode.
    

## Configure the container network for a node pool

Exclusive ENI is a node pool mode that is provided by Terway. For a detailed comparison between the exclusive ENI and shared ENI modes, see [Shared ENI mode and exclusive ENI mode](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#9909637f6e34h). Follow this procedure to plan and create a node pool that uses exclusive ENIs. After the node pool is created, you can schedule pods to it.

### **1\. Plan the exclusive ENI node pool**

-   In exclusive ENI mode, the maximum number of pods per node is smaller. A worker node must have more than six ENIs to be added to the cluster. For more information about how to calculate the number of ENIs, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
-   Plan the vSwitches and security groups for the pods.
    

Terway supports multiple configuration methods, listed in descending order of priority:

-   [Configure a static IP address, an independent vSwitch, and a security group for a pod](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-static-ip-address-a-separate-vswitch-and-a-separate-security-group-for-each-pod)
    
-   [Node-level network configurations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-network-settings-for-individual-nodes-in-a-terway-cluster)
    
-   Default cluster configurations. For more information, see [Customize Terway parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/terway-configuration-parameters).
    
    **Important**
    
    Ensure that the configurations include the vSwitches for the node's zone. Otherwise, pods cannot be created.
    
    Node Lingjun node pools do not support [configuring a static IP address, an independent vSwitch, and a security group for a pod](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-static-ip-address-a-separate-vswitch-and-a-separate-security-group-for-each-pod).
    

### 2\. Create an exclusive ENI node pool and verify that the mode is enabled

1.  Create a node pool. For more information, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool). During the creation process, add the label `k8s.aliyun.com/exclusive-mode-eni-type: eniOnly` to the nodes.
    
    Also configure taints to prevent other pods from being scheduled to the exclusive ENI node pool.
    
    **Important**
    
    Configure the label when you create the node pool. You cannot switch existing nodes to the exclusive ENI mode. If you misconfigure the label, delete the node pool and create it again.
    
2.  Run the following command to query the allocatable resources of the node and verify that the exclusive ENI mode is enabled:
    
    ```
    kubectl describe node <node-name> 
    ```
    
    Expected output:
    
    ```
    Capacity:
      aliyun/eni:         7
      cpu:                16
      ephemeral-storage:  123460788Ki
      hugepages-1Gi:      0
      hugepages-2Mi:      0
      memory:             31555380Ki
      pods:               213
    Allocatable:
      aliyun/eni:         7
      cpu:                15890m
      ephemeral-storage:  113781462033
      hugepages-1Gi:      0
      hugepages-2Mi:      0
      memory:             28587828Ki
      pods:               213
    ```
    
    If the output contains `aliyun/eni`, the exclusive ENI mode is enabled.
    

### 3\. Schedule pods to the exclusive ENI node pool

You can use NodeAffinity or the PodNetworking CustomResourceDefinition (CRD) to schedule pods to the exclusive ENI node pool.

-   NodeAffinity: This method does not support pod-level configurations, such as assigning a static IP address or configuring an independent vSwitch and security group.
    
-   PodNetworking: This method supports configuring vSwitches, security groups, and static IP addresses for pods. For more information, see [Configure a static IP address, an independent vSwitch, and a security group for a pod](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-static-ip-address-a-separate-vswitch-and-a-separate-security-group-for-each-pod).
    
    The following YAML file is an example. In the `eniOptions` field, set `eniType` to `ENI` to schedule pods to the exclusive ENI node pool.
    
    ```
    apiVersion: network.alibabacloud.com/v1beta1
    kind: PodNetworking
    metadata:
      name: enionly
    spec:
      eniOptions:
        eniType: ENI
      allocationType:
        type: Elastic
      selector:
        podSelector:
          matchLabels:
            network: enionly
    ```
    

## FAQ

### How can I determine if a pod is using an exclusive ENI?

Terway creates a PodENI resource that has the same name and namespace as the pod. This resource records the network configuration information of the pod.

You can query the resource as follows:

```
kubectl get podeni nginx-9d557694f-rcdzs -oyaml
```

Expected output:

```
apiVersion: network.alibabacloud.com/v1beta1
kind: PodENI
metadata:
  annotations:
    k8s.aliyun.com/pod-uid: 05590939-fc51-47ab-a204-3dd187233bca
  creationTimestamp: "2024-09-13T08:09:27Z"
  finalizers:
  - pod-eni
  generation: 1
  labels:
    k8s.aliyun.com/node: cn-hangzhou.172.XX.XX.25
  name: example-9d557694f-rcdzs
  namespace: default
  resourceVersion: "1131123"
spec:
  allocations:
  - allocationType:
      type: Elastic
    eni:
      attachmentOptions: {}
      id: eni-xxxx
      mac: 00:16:3e:37:xx:xx
      securityGroupIDs:
      - sg-xxxx
      vSwitchID: vsw-xxxx
      zone: cn-hangzhou-j
    ipv4: 172.16.0.30
    ipv4CIDR: 172.16.0.0/24
    ipv6: 2408:4005:xxxx:xxxx:xxxx:xxxx:xxxx:9ad4
    ipv6CIDR: 2408:4005:39c:xxxx::/64
  zone: cn-hangzhou-j
status:
  eniInfos:
    eni-xxxx:
      id: eni-xxxx
      status: Bind
      type: Secondary
  instanceID: i-xxxx
  phase: Bind
```
