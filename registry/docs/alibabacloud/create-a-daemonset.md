A DaemonSet ensures that a single pod runs on each node. When a new node is added to the cluster, the DaemonSet automatically creates a pod for it. This is useful for scenarios such as log collection components like Fluentd and node monitoring agents like Prometheus Node Exporter. This topic describes the features of a DaemonSet and how to create one using the console and kubectl.

## **What is a DaemonSet?**

By default, a DaemonSet runs one pod on each node. However, this is affected by the following scheduling policies. For more information about scheduling policies, see [Scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scheduling-overview/).

-   Taints and tolerations: DaemonSet pods are subject to taint restrictions and do not run on nodes they cannot tolerate. However, they tolerate the following taints by default:
    
    -   `node.kubernetes.io/unschedulable:NoSchedule`
        
    -   `node.kubernetes.io/not-ready:NoExecute` (tolerated for 300 seconds)
        
    -   `node.kubernetes.io/unreachable:NoExecute` (tolerated for 300 seconds)
        
-   nodeSelector: DaemonSet pods are also subject to `nodeSelector` restrictions. For example, if a DaemonSet is configured with `nodeSelector: { disktype: ssd }`, it runs only on nodes with the `disktype=ssd` label.
    
-   Affinity configuration: Node and pod affinity and anti-affinity configurations also apply to DaemonSets.
    

**Note**

Although a DaemonSet can implement some scheduling policies, this is not its design goal. To perform more complex scheduling, consider using a [Deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment). For more information about DaemonSets, see the [official documentation](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/).

**View kube-proxy pods**

The default Kubernetes component, kube-proxy, is deployed on each node by a DaemonSet. Run the following command to view the pods that belong to kube-proxy.

```
kubectl get pods --all-namespaces -o wide | grep kube-proxy
```

The expected output is shown below. A kube-proxy pod exists on each node. Because kube-proxy uses hostNetwork mode (`hostNetwork: true`), the pod's IP address is the same as its node's IP address.

```
kube-system     kube-proxy-worker-hfzkh     1/1     Running     0          2d21h   192.168.*.92    cn-shanghai.192.168.*.92   <none>           <none>
kube-system     kube-proxy-worker-pxnnf     1/1     Running     0          2d21h   192.168.*.11    cn-shanghai.192.168.*.11   <none>           <none>
kube-system     kube-proxy-worker-r2t26     1/1     Running     0          2d21h   192.168.*.7     cn-shanghai.192.168.*.7    <none>           <none>
```

**Important**

The image used in the examples in this topic is a public image. To pull the image, your cluster or nodes must have public network access:

-   [Enable public network access for a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-an-existing-ack-cluster-to-access-the-internet) (Recommended): Create an Internet NAT gateway for the VPC where the cluster resides. This allows all resources in the cluster to access the public network.
    
-   Assign a [static public IP address](/help/en/ecs/user-guide/public-ip-address) to a node: Nodes with public IP addresses can pull public images. However, you must assign a public IP address to each node where the workload is deployed.
    

## Create a DaemonSet

You can create a DaemonSet using the console or kubectl.

## Create via the console

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Workloads** > **DaemonSets**.
    
3.  On the **DaemonSets** page, click **Create from Image**.
    
4.  Because of the features of a DaemonSet, the console configuration items differ from those of a Deployment in the following ways:
    
    -   **Basic Information**: The number of pods for a DaemonSet is determined by the number of nodes. Therefore, there is no **Replicas:** configuration.
        
    -   **Advanced**: For the same reason, DaemonSet also lacks **Scaling**.
        
    
    The other configuration items are the same as for a Deployment. For more information about the configuration items, see [Create a Deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment) and use them to create the DaemonSet.
    

## Create a DaemonSet using kubectl

**Important**

Before you create the workload, make sure that you have connected to the cluster using kubectl. For more information, see [Connect to a cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).

1.  Copy the following YAML content and save it to a file named daemonset.yaml.
    
    ```
    apiVersion: apps/v1
    kind: DaemonSet
    metadata:
      name: nginx-test
      namespace: default  # Change the namespace as needed.
      labels:
        app: nginx
    spec:
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            resources:
              limits:
                cpu: '1'
                memory: 2Gi
              requests:
                cpu: 500m
                memory: 512Mi
    ```
    
2.  Run the following command to create the DaemonSet.
    
    ```
    kubectl apply -f daemonset.yaml
    ```
    
    Expected output:
    
    ```
    daemonset.apps/nginx-test created
    ```
    
3.  Run the following command to query the details of the DaemonSet pods.
    
    ```
    kubectl get pods --all-namespaces -o wide | grep nginx-test
    ```
    
    The following output shows that each node runs a pod.
    
    ```
    default     nginx-test-8mqvh     1/1     Running     0          3m38s   192.168.*.**    cn-shanghai.192.168.**.250   <none>           <none>
    default     nginx-test-ltlx6     1/1     Running     0          3m38s   192.168.*.**    cn-shanghai.192.168.**.98    <none>           <none>
    default     nginx-test-n6zrv     1/1     Running     0          3m38s   192.168.*.**    cn-shanghai.192.168.**.17    <none>           <none>
    ```
    

## **References**

-   If you have issues when you create a workload, see [Workload FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-applications).
    
-   If a pod is abnormal, see [Troubleshoot pod issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/pod-troubleshooting-1).
