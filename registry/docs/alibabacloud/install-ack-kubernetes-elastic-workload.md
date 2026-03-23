The ack-kubernetes-elastic-workload component monitors a Kubernetes workload and distributes replicas between source workloads and elastic units based on scheduling policies. When the replica count exceeds a configured threshold, extra replicas are scheduled to virtual nodes backed by Elastic Container Instance (ECI).

**Important**

You can still use Elastic Workload. However, Elastic Workload has been in the inactive development state since June 2024. We recommend that you use [UnitedDeployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-uniteddeployment-controller-in-ack-clusters#/) instead. For a comparison of virtual node scheduling solutions, see [Schedule a pod to a virtual node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-and-introduction-of-virtual-node-scheduling-scheme-ack/).

## Prerequisites

Before you begin, ensure that you have:

-   An ACK managed or dedicated cluster
    
-   The ack-virtual-node component (v2.0.0.102-045a06eb4-aliyun or later) deployed in the cluster. For more information, see [Schedule pods to elastic container instances through virtual nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-the-virtual-node-controller-and-use-it-to-create-elastic-container-instance-based-pods).
    

## Limitations

-   ack-kubernetes-elastic-workload does not support OpenKruise workloads. Use the [UnitedDeployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-uniteddeployment-controller-in-ack-clusters#/) controller instead.
    

## Install ack-kubernetes-elastic-workload

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com).
    
2.  In the left navigation pane, choose **Marketplace** > **Marketplace**.
    
3.  On the **Marketplace** page, click the **App Catalog** tab. Find and click **ack-kubernetes-elastic-workload**.
    
4.  Click **Deploy**.
    
5.  In the **Deploy** panel, select a cluster and namespace, then click **Next**.
    
6.  In the **Parameters** step, configure the parameters and click **OK**.
    
7.  Verify the installation: Go to the cluster details page. In the left-side navigation pane, choose **Applications** > **Helm**. Confirm that ack-kubernetes-elastic-workload appears in the list.
    

## Schedule elastic replicas to virtual nodes

This example shows capacity planning for an application with these requirements:

-   Up to 4 replicas run on Elastic Compute Service (ECS) instances
    
-   2 replicas are retained during off-peak hours
    
-   Replicas exceeding 4 are scheduled to virtual nodes (ECI)
    

### Step 1: Create a Deployment

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment-basic
  labels:
    app: nginx
spec:
  replicas: 2
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
        ports:
        - containerPort: 80
        resources:
          limits:
            cpu: "500m"
```

### Step 2: Define an ElasticWorkload

```
apiVersion: autoscaling.alibabacloud.com/v1beta1
kind: ElasticWorkload
metadata:
  name: elasticworkload-sample
spec:
  sourceTarget:
    name: nginx-deployment-basic
    kind: Deployment
    apiVersion: apps/v1
    min: 2        # The minimum number of replicas.
    max: 4        # The maximum number of replicas.
  replicas: 6
  elasticUnit:
  - name: virtual-kubelet
    labels:
      alibabacloud.com/eci: "true"
```

ack-kubernetes-elastic-workload is deployed as an external add-on and does not affect your existing business.

The ElasticWorkload custom resource definition (CRD) has two key sections:

**Field**

**Description**

`sourceTarget`

Defines the source workload type and the replica range. Replicas within the `min`\-`max` range are scheduled to the source workload.

`elasticUnit`

An array of scheduling policies for elastic units. To define scheduling policies for multiple elastic units, specify related parameters in the order defined. When replicas exceed `max`, extra replicas are scheduled to elastic units in the order defined.

In this example:

-   `sourceTarget` limits the source workload (nginx-deployment-basic) to 2-4 replicas on ECS instances.
    
-   The total replica count (6) exceeds the `max` value (4). The remaining 2 replicas are scheduled to the virtual-kubelet elastic unit with the label `alibabacloud.com/eci=true`.
    

### Step 3: Verify the deployment

Check the elastic workload status:

```
kubectl describe ew elasticworkload-sample
```

The output shows `Desired Replicas` for both the source workload and the elastic unit:

```
Status:
  Elastic Units Status:
    Desired Replicas:  2
    Name:              nginx-deployment-basic-unit-virtual-kubelet
  Replicas:            6
  Source Target:
    Desired Replicas:  4
    Kind:              Deployment
    Name:              nginx-deployment-basic
```

Check the pod distribution across nodes:

```
kubectl get pod -o wide
```

Expected output:

```
NAME                                                           READY   STATUS    RESTARTS   AGE   IP              NODE
nginx-deployment-basic-5bf87f5f59-22jnw                        1/1     Running   0          16m   10.34.0.131     cn-beijing.172.16.0.1
nginx-deployment-basic-5bf87f5f59-gfp24                        1/1     Running   0          13m   10.34.0.133     cn-beijing.172.16.0.1
nginx-deployment-basic-5bf87f5f59-pw2zx                        1/1     Running   0          13m   10.34.0.134     cn-beijing.172.16.0.1
nginx-deployment-basic-5bf87f5f59-qvh7m                        1/1     Running   0          16m   10.34.0.132     cn-beijing.172.16.0.1
nginx-deployment-basic-unit-virtual-kubelet-65fb6f4cd7-48ssb   1/1     Running   0          13m   172.16.22.157   virtual-kubelet-cn-beijing-e
nginx-deployment-basic-unit-virtual-kubelet-65fb6f4cd7-gjqhm   1/1     Running   0          13m   172.16.22.158   virtual-kubelet-cn-beijing-e
```

The first 4 pods run on ECS nodes. The remaining 2 pods run on virtual nodes (ECI).

## Use HPA with elastic workloads

Horizontal Pod Autoscaler (HPA) can target ElasticWorkload resources directly. When scaling down, elastic unit replicas are reduced first.

```
apiVersion: autoscaling/v2beta2
kind: HorizontalPodAutoscaler
metadata:
  name: elastic-workload-demo
  namespace: default
spec:
  scaleTargetRef:
    apiVersion: autoscaling.alibabacloud.com/v1beta1
    kind: ElasticWorkload
    name: elasticworkload-sample
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50
```

When the HPA reduces replicas (for example, from 6 to 4), the elastic workload removes replicas from elastic units first, keeping the source workload replicas stable.
