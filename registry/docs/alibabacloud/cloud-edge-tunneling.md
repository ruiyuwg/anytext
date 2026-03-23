By default, Container Service for Kubernetes (ACK) deploys the **edge-tunnel-server and edge-tunnel-agent** components after you create an ACK Edge cluster whose Kubernetes version is earlier than 1.26. These components are used to establish tunnels from the cloud to the edge. After the tunnels are established, you can access edge nodes from the cloud. This topic describes the features of the components that are related to cloud-edge tunnels in ACK Edge clusters and how to extend the monitoring capabilities of edge nodes.

## Background information

-   The **edge-tunnel-server** component is deployed as a deployment on nodes in the cloud. The **edge-tunnel-agent** component is deployed as a DaemonSet on each edge node.
    
    **Note**
    
    If you create an ACK Edge cluster that runs Kubernetes 1.26 or later, Raven is installed in the cluster. The component allows you to access edge nodes from the cloud. For more information, see [Work with the cloud-edge communication component Raven](/help/en/ack/ack-edge/user-guide/using-the-cloud-side-communication-raven-component).
    
-   In a Kubernetes cluster, the controller components in the cloud control plane must run commands and pass maintenance requests to kubelet on edge nodes. The monitoring component metrics-server must collect monitoring data from edge nodes to the cloud. If the edge nodes of an ACK Edge cluster are deployed in an internal network, you cannot directly access the edge nodes from the cloud.
    
-   When you perform O&M operations by running Kubernetes commands, such as `kubectl logs` and `kubectl exec`, or commands of metrics-server, the requests are sent to port 10250 and port 10255 on kubelet on edge nodes.
    

## Description

-   When you create an ACK Edge cluster, you must create at least one Elastic Compute Service (ECS) instance to deploy the **edge-tunnel-server** component.
    
-   To establish secure and encrypted tunnels over the Internet, the system creates a Server Load Balancer (SLB) instance for **edge-tunnel-server**. The **edge-tunnel-agent** component on an edge node establishes a tunnel to edge-tunnel-server through the SLB instance.
    
-   When components, such as kube-apiserver and metrics-server, access port 10250 and port 10255 on edge nodes from the cloud, ACK Edge clusters forward the requests to edge-tunnel-server. You do not need to modify the components.
    
-   The following figure shows how cloud-edge tunneling works:![G-11](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6482769861/p225154.png)
    

**Note**

-   When edge nodes are disconnected from the cloud or the network connection is unstable, the tunnels may fail to work as normal.
    
-   If you delete or stop the SLB instance through which the tunnels are established, the tunnels cannot work as normal.
    
-   For clusters running early Kubernetes versions such as 1.16.9-aliyunedge.1, to ensure proper component operation, you must deploy components such as metrics-server, on the ECS node where edge-tunnel-server is deployed. Otherwise, the components cannot access edge nodes. For ACK Edge clusters of 1.18.8-aliyunedge.1 or later, you can deploy components, such as metrics-server, and edge-tunnel-server on different ECS nodes.
    

## Configure access to ports other than 10250 and 10255 on edge nodes

When you migrate your business to the cloud, you must configure access to ports other than 10250 and 10255 on edge nodes from the cloud to collect monitoring data. In this example, ports 9051 and 9052 on edge nodes are used.

**Note**

In this example, edge-tunnel-server listens on port 9051 over HTTP and listens on port 9052 over HTTPS.

**Clusters of 1.20.11-aliyunedge.1**

In clusters of 1.20.11-aliyunedge.1, HTTP and HTTPS are supported when components collect monitoring data from edge nodes to the cloud through ports other than 10250 and 10255. The components can also access the localhost endpoints on edge nodes from the cloud.

-   To enable access to ports other than 10250 and 10255 over HTTP, configure the `http-proxy-ports` field in the `edge-tunnel-server-cfg` ConfigMap in the kube-system namespace. Set the value in the following format: port 1, port 2.
    
-   To enable access to ports other than 10250 and 10255 over HTTPS, configure the `https-proxy-ports` field in the `edge-tunnel-server-cfg` ConfigMap in the kube-system namespace. Set the value in the following format: port 1, port 2.
    
-   To enable access to localhost endpoints on edge nodes, configure the `localhost-proxy-ports` field in the `edge-tunnel-server-cfg` ConfigMap in the kube-system namespace. Default value: 10250, 10255, 10266, 10267. You can add more ports.
    

To enable components to collect monitoring data from edge nodes to the cloud through ports 9051 and 9052 and to access localhost endpoints on edge nodes, such as https://127.0.0.1:8080, use the following configuration:

```
cat <<EOF | kubectl apply -f
apiVersion: v1
data:
  http-proxy-ports: "9051"
  https-proxy-ports: "9052, 8080"
  localhost-proxy-ports: "10250, 10255, 10266, 10267, 8080"
kind: ConfigMap
metadata:
  name: edge-tunnel-server-cfg
  namespace: kube-system
EOF
```

**Clusters of 1.18.8-aliyunedge.1**

In clusters of 1.18.8-aliyunedge.1, only HTTP is supported when components collect monitoring data from edge nodes to the cloud through ports other than 10250 and 10255. You must modify the value of the `dnat-ports-pair` field in the `edge-tunnel-server-cfg` ConfigMap in the `kube-system` namespace. Set the value in the following format: port number=10264.

To enable components to access port 9051 on edge nodes from the cloud, use the following configuration:

```
cat <<EOF | kubectl apply -f
apiVersion: v1
data:
  dnat-ports-pair: '9051=10264'
kind: ConfigMap
metadata:
  name: edge-tunnel-server-cfg
  namespace: kube-system
EOF
```
