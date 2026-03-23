High availability (HA) is a system design approach that improves service reliability and continuity. Container Service for Kubernetes provides various high-availability mechanisms based on the Kubernetes architecture. These mechanisms ensure high availability for the cluster control plane, nodes, node pools, workloads, and load balancing. This helps you build a stable, secure, and reliable architecture for your clusters and applications.

## **Guidance for This Document**

This topic is intended for cluster developers and administrators who use Container Service for Kubernetes. It provides general recommendations for planning and building high-availability clusters. The actual configurations may vary based on your cluster environment and business requirements. You can use the suggested HA configurations for control planes and data planes in this topic as a reference.

**Document Architecture**

**Maintenance Role**

**Applicable Cluster Types**

[Control Plane Architecture High Availability](#3fd55002f0q5j)

Managed by ACK.

Applies only to certain managed ACK clusters, including ACK managed clusters (Pro Edition, Basic Edition), ACK Serverless clusters (Pro Edition, Basic Edition), ACK Edge clusters, and LINGJUN Clusters. Other cluster types, such as ACK dedicated clusters and registered clusters, are not applicable because you maintain their control planes. However, you can refer to this section for configuration recommendations.

[Node Pool and Virtual Node High Availability Configurations](#RbHWV)

Maintained by you.

General.

[Workload High Availability Configurations](#uaVtM)

[Load Balancing High Availability Configurations](#0d1f8a9d0cx66)

[Component Recommended Configurations](#47d8a5d5d9r1x)

## **Cluster Example Architecture**

An ACK cluster consists of two main parts: the control plane, and regular or virtual nodes.

-   The cluster control plane manages and coordinates the cluster, such as scheduling workloads and maintaining cluster status. Take an ACK managed cluster as an example. An ACK managed cluster uses a Kubernetes-on-Kubernetes architecture to host your cluster's control plane components, such as the Kube API Server, etcd, and Kube Scheduler.
    
-   Regular or virtual nodes: ACK clusters support regular nodes, which are ECS instances, and virtual nodes. Nodes run the actual workloads and provide the resources for running containers.
    

By default, ACK clusters provide a multi-availability zone (multi-AZ) high-availability cluster deployment architecture. For example, the following figure shows the cluster architecture for an ACK managed cluster.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9692507171/p770284.png)

## **Control Plane Architecture High Availability**

For managed ACK clusters, such as ACK managed clusters (Pro Edition and Basic Edition), ACK Serverless clusters (Pro Edition and Basic Edition), ACK Edge clusters, and LINGJUN Clusters, ACK manages their control planes and related components, such as kube-apiserver, etcd, and kube-scheduler.

-   Multi-zone regions: All managed components use a multi-replica, multi-AZ balanced deployment strategy. This ensures that the cluster continues to provide services if a single zone or node fails.
    
-   Single-zone regions: All managed components use a multi-replica, multi-node deployment strategy. This ensures that the cluster continues to provide services if a single node fails.
    

Specifically, etcd has at least three replicas, and kube-apiserver has at least two replicas. All kube-apiserver replicas achieve network connectivity with the cluster VPC by mounting Elastic Network Interfaces (ENIs). The kubelet and Kube Proxy on the nodes connect to kube-apiserver through the API Server Classic Load Balancer (CLB) or an ENI.

All core ACK managed components can scale elastically based on actual resource usage, such as CPU and memory usage. This feature dynamically meets the resource requirements of the API Server and provides stable Service-Level Agreement (SLA) guarantees.

* * *

In addition to the default multi-zone high-availability architecture for the cluster control plane, you must also configure a high-availability architecture for the cluster data plane. This includes [High-Availability Configurations for Node Pools and Virtual Nodes](#RbHWV), [High-Availability Configurations for Workloads](#uaVtM), [High-Availability Configurations for Load Balancing](#0d1f8a9d0cx66), and [Recommended Component Configurations](#47d8a5d5d9r1x).

## **Node Pool and Virtual Node High Availability Configurations**

ACK clusters support regular nodes (ECS instances) and virtual nodes. You can manage nodes using node pools. This lets you group nodes for operations such as upgrades, scaling, and daily O&M. If your service traffic is relatively stable or has predictable peaks and troughs, we recommend that you use ECS instances. If your service experiences unpredictable instantaneous peaks, you can use virtual nodes to handle burst traffic and reduce computing costs. For more information, see [Node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-overview/), [Overview of managed node pools](/help/en/ack/overview-of-managed-node-pools), and [Virtual nodes](/help/en/ack/ack-on-eci).

### **Node Pool High Availability Configurations**

You can use node autoscaling, deployment sets, and multi-zone deployments in combination with Kubernetes scheduling topology spread constraints. This ensures that services have sufficient and isolated resources across different failure domains. If a failure domain encounters an issue, services continue to run. This reduces the risk of single points of failure and improves overall system reliability and availability.

#### **Configure Node Autoscaling**

Each node pool is backed by an Auto Scaling group (ESS). This supports manual and automatic scaling of nodes at the load scheduling layer or the cluster resource layer. This lets you adjust elastic computing resources with lower costs and greater flexibility. For more information about the autoscaling solutions of ACK, see [Auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-overview/) and [Enable node autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes).

#### **Enable Deployment Sets**

A deployment set is a strategy that controls the distribution of ECS instances. This strategy disperses ECS instances across different physical servers, which prevents multiple ECS instances from failing due to a single physical machine failure. You can specify a deployment set for a node pool to ensure that the ECS instances that are scaled out by the node pool are not distributed on the same physical machine. Affinity configurations allow your applications to perceive the underlying node topology and be evenly distributed across different nodes. This guarantees the disaster recovery capabilities and high availability of your applications. For more information about how to enable the deployment set feature, see [Best practices for node pool deployment sets](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-associating-deployment-sets-with-node-pools).

#### **Configure Multi-AZ Distribution**

ACK supports multi-zone node pools. When you create and run a node pool, you can select multiple vSwitches from different zones for the node pool. When you configure the **Scaling Policy**, select the **Distribution Balancing**. This allows ECS instances to be evenly distributed across the zones that are specified in the scaling group, which corresponds to multiple vSwitches. If a resource imbalance occurs between zones due to reasons such as an out-of-stock event, you can perform a rebalance operation to balance the resource distribution across zones. For more information about how to configure autoscaling policies, see [Enable node autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes#section-3bg-2ko-inl).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9692507171/p768848.png)

#### **Enable Topology Spread Constraints**

Node autoscaling, deployment sets, and multi-zone distribution, in combination with Kubernetes scheduling topology spread constraints ([Topology Spread Constraints](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/)), help achieve different levels of fault domain isolation. All nodes in an ACK node pool automatically have topology-related labels added, such as `kubernetes.io/hostname`, `topology.kubernetes.io/zone`, and `topology.kubernetes.io/region`. You can use topology spread constraints to control how pods are distributed across different fault domains. This improves the tolerance to underlying infrastructure failures.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0446282771/CAEQVBiBgICapOGS5hkiIGM2ZmE0ZjlmNjZjMzQ2MmM5YTliMGJkMTcxY2ZiYjNm4210557_20240222135626.153.svg)

For more information about how to use topology-aware scheduling in ACK clusters, such as retrying pods in multiple topology domains or scheduling pods to ECS instances that belong to the same low-latency deployment set, see [Topology-aware scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/topology-aware-scheduling).

### **Virtual Node High Availability Configurations**

You can use ACK virtual nodes to quickly schedule pods to run on Elastic Container Instance (ECI). With ECI, you do not need to purchase and manage underlying ECS servers. This lets you focus on your containerized applications rather than on underlying infrastructure maintenance. You can create ECI instances as needed and pay only for the resources that are configured for your containers on a pay-as-you-go basis, billed by the second.

However, when you rapidly scale out services horizontally to handle burst traffic or launch many instances for Job task processing, you may encounter situations such as an insufficient instance inventory in the specified zone or the exhaustion of IP addresses in the specified vSwitch. This can lead to ECI instance creation failures. The multi-zone feature of ACK Serverless clusters helps improve the success rate of ECI instance creation.

You can configure the ECI Profile for virtual nodes and specify vSwitches across different zones to achieve multi-zone application deployment.

-   ECI distributes pod creation requests across all vSwitches to effectively spread the load.
    
-   If a pod cannot be created due to insufficient inventory for a vSwitch, ECI automatically attempts to create the pod using the next vSwitch.
    

You can run the following command to modify the `vSwitchIds` field in the **kube-system/eci-profile** ConfigMap. You can append vSwitch IDs and separate multiple IDs with commas (,). The changes take effect immediately. For more information, see [Create multi-zone ECI pods](/help/en/ack/create-ecis-across-zones).

```
kubectl -n kube-system edit cm eci-profile
```

```
apiVersion: v1
data:
  kube-proxy: "true"
  privatezone: "true"
  quota-cpu: "192000"
  quota-memory: 640Ti
  quota-pods: "4000"
  regionId: cn-hangzhou
  resourcegroup: ""
  securitygroupId: sg-xxx
  vpcId: vpc-xxx
  vSwitchIds: vsw-xxx,vsw-yyy,vsw-zzz
kind: ConfigMap
```

## **Workload High Availability Configurations**

Workload high availability ensures that application pods run as normal or can quickly recover in the event of a failure. You can achieve high availability for application pods by configuring topology spread constraints, pod anti-affinity, Pod Disruption Budgets (PDBs), and pod health checks with self-healing.

### **Configure Topology Spread Constraints**

Topology spread constraints ([Topology Spread Constraints](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/)) is a feature in Kubernetes clusters that manages pod distribution. It ensures that pods are evenly distributed across different nodes and zones to improve application high availability and stability. This technology applies to workload types such as Deployment, StatefulSet, DaemonSet, Job, and CronJob.

You can set configurations such as `maxSkew.topologyKey` to control pod distribution. This ensures that pods are deployed based on the desired topology in the cluster. For example, you can evenly distribute workloads across different zones to improve reliability and availability. The following is an example.

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-run-per-zone
spec:
  replicas: 3
  selector:
    matchLabels:
      app: app-run-per-zone
  template:
    metadata:
      labels:
        app: app-run-per-zone
    spec:
      containers:
        - name: app-container
          image: app-image
      topologySpreadConstraints:
        - maxSkew: 1
          topologyKey: "topology.kubernetes.io/zone"
          whenUnsatisfiable: DoNotSchedule
          labelSelector:
            matchLabels:
              app: app-run-per-zone
```

### **Configure Pod Anti-Affinity**

Pod anti-affinity is a Kubernetes scheduling policy. It ensures that pods are not scheduled onto the same node to improve application high availability and fault isolation. The following is an example.

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-run-per-node
spec:
  replicas: 3
  selector:
    matchLabels:
      app: app-run-per-node
  template:
    metadata:
      labels:
        app: app-run-per-node
    spec:
      containers:
        - name: app-container
          image: app-image
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            - labelSelector:
                matchExpressions:
                  - key: app
                    operator: In
                    values:
                      - app-run-per-node
              topologyKey: "kubernetes.io/hostname"
```

Using topology spread constraints, you can also ensure that a maximum of one pod runs on each node. When you specify `topologyKey: "kubernetes.io/hostname"`, each node acts as a topology domain.

The following example creates a topology spread constraint. `maxSkew` is set to `1`, `topologyKey` is set to `"kubernetes.io/hostname"`, and `whenUnsatisfiable` is set to `DoNotSchedule`. This indicates that the number of pods in the same topology domain (node) can be at most one more than in other domains. This forces pods to be distributed to achieve node high availability.

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-app-container
          image: my-app-image
      topologySpreadConstraints:
        - maxSkew: 1
          topologyKey: "kubernetes.io/hostname"
          whenUnsatisfiable: DoNotSchedule
          labelSelector:
            matchLabels:
              app: my-app
```

### **Configure Pod Disruption Budget**

You can use a [Pod Disruption Budget](https://kubernetes.io/docs/tasks/run-application/configure-pdb/) (PDB) to further improve application availability. A PDB defines the minimum number of available replicas. When a node is in a maintenance or failed state, the cluster ensures that at least the specified number of replicas remain running. A PDB prevents too many replicas from being terminated at the same time. This is especially suitable for scenarios where multiple replicas handle high volumes of traffic. The following is an example.

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-with-pdb
spec:
  replicas: 3
  selector:
    matchLabels:
      app: app-with-pdb
  template:
    metadata:
      labels:
        app: app-with-pdb
    spec:
      containers:
        - name: app-container
          image: app-container-image
          ports:
            - containerPort: 80
--- 
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: pdb-for-app
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: app-with-pdb
```

### **Configure Pod Health Checks and Self-Healing**

In an ACK cluster, you can configure different types of probes to monitor and manage container status and availability. These include liveness probes, readiness probes, and startup probes. You can configure these probes by adding them and restart policies to the pod configuration. The following is an example.

```
apiVersion: v1
kind: Pod
metadata:
  name: app-with-probe
spec:
  containers:
    - name: app-container
      image: app-image
      livenessProbe:
        httpGet:
          path: /health
          port: 80
        initialDelaySeconds: 10
        periodSeconds: 5
      readinessProbe:
        tcpSocket:
          port: 8080
        initialDelaySeconds: 15
        periodSeconds: 10
      startupProbe:
        exec:
          command:
            - cat
            - /tmp/ready
        initialDelaySeconds: 20
        periodSeconds: 15
  restartPolicy: Always
```

## **Load Balancing High Availability Configurations**

Achieving high availability for load balancing in a cluster is crucial for improving service stability, response speed, and fault isolation. You can achieve this by specifying primary and secondary zones for Server Load Balancer (SLB) instances and enabling topology-aware hints.

### **Specify Primary and Secondary Zones for CLB Instances**

Classic Load Balancer (CLB) is deployed across multiple zones in most regions to achieve cross-data center disaster recovery within the same region. You can specify the primary and secondary zones for CLB instances using Service annotations. This ensures consistency between the primary and secondary zones of the CLB instance and the zones of the ECS instances in the node pool. This reduces cross-zone data forwarding and improves network access performance. For more information about the regions and zones that CLB supports, see [Regions and zones that support CLB](/help/en/slb/classic-load-balancer/product-overview/regions-that-support-clb). For more information about how to specify primary and secondary zones for CLB instances, see [Specify primary and secondary zones when you create a CLB instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#7e1ff7a06cj1y).

The following is an example.

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-master-zoneid: "cn-hangzhou-b"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-slave-zoneid: "cn-hangzhou-i"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### Enable Topology Aware Hints

To reduce cross-zone network traffic and improve network performance, Kubernetes 1.23 introduced topology-aware routing, also known as topology-aware hints. This feature enables topology-aware proximity routing.

You can enable this feature in the Service. After the feature is enabled, if sufficient endpoints are available within a zone, the EndpointSlice controller prioritizes routing traffic to endpoints that are closer to the request's origin. This is based on the topology hint information on the EndpointSlice. In scenarios with cross-zone network traffic, this feature prioritizes keeping network traffic within the same zone. This improves network efficiency and reduces associated costs. For more information, see [Topology Aware Routing](https://kubernetes.io/docs/concepts/services-networking/topology-aware-routing/).

## Component Recommended Configurations

ACK provides various types of components. You can configure specific components for new or existing clusters as needed to extend cluster functionality. For more information about the components that ACK supports, their descriptions, and change records, see [Component overview and release notes](/help/en/ack/product-overview/release-notes-for-components/). For more information about how to upgrade and manage components, such as configuration, uninstallation, and upgrades, see [Manage components](/help/en/ack/manage-system-components).

### **Properly Deploy Nginx Ingress Controller**

When you deploy Nginx Ingress Controller, make sure that it is distributed across different nodes. This prevents resource contention and single points of failure between different Nginx Ingress controllers. You can also use dedicated nodes for Nginx Ingress Controller to ensure performance and stability. For more information, see [Use dedicated nodes to ensure the performance and stability of Nginx Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-the-nginx-ingress-controller-2#task-2170008).

Do not set resource limits for Nginx Ingress Controller. This helps avoid traffic interruptions that are caused by out-of-memory (OOM) errors. If resource limits are necessary, set the CPU limit to at least 1,000 millicores (formatted as 1000m in the YAML configuration) and the memory limit to at least 2 GiB. For more configuration recommendations for Nginx Ingress Controller, see [Usage recommendations for Nginx Ingress Controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-the-nginx-ingress-controller-2#task-2175597).

**Note**

If you create an ALB Ingress controller or an MSE Ingress controller, you must configure multiple zones when you create the Ingress controller. For more information, see [Create a cloud-native gateway](/help/en/mse/user-guide/create-a-cloud-native-gateway-1) and [Create and use an ALB Ingress to expose Services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-and-use-alb-ingress-to-expose-services-to-the-public#task-2098039). For a comparison of different Ingress controllers, see [Comparison of Nginx Ingress, ALB Ingress, and MSE Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-among-nginx-ingresses-alb-ingresses-and-mse-ingresses-1).

### **Properly Deploy CoreDNS**

When you deploy CoreDNS replicas, distribute them across different zones and cluster nodes. This helps avoid single-node and single-zone failures. By default, CoreDNS is configured with weak anti-affinity per node. Insufficient node resources may cause some or all replicas to be deployed on the same node. If this occurs, you can delete the pod to re-trigger its scheduling.

The cluster nodes that run CoreDNS should not have full CPU and memory usage. Otherwise, the DNS queries per second (QPS) and response latency are affected. For more configuration recommendations for CoreDNS, see [DNS best practices](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-best-practices#task-2175597).

## **References**

-   Use larger ECS instance types for your worker nodes. For more information, see [Recommended ECS instance type configurations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/select-ecs-instances-to-create-the-master-and-worker-nodes-of-an-ack-cluster).
    
-   If your ACK managed cluster Pro Edition is large (typically more than 500 nodes or 10,000 pods), see [Usage recommendations for large-scale clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/suggestions-on-how-to-work-with-large-ack-pro-clusters) for usage advice.
    
-   For more information about the best practices for nodes and node pools, see [Best practices for nodes and node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-nodes-and-node-pools/).
    
-   For more information about the best practices for auto scaling, see [Best practices for auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-auto-scaling/).
