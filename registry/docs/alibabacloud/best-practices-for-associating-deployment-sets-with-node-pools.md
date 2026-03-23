A deployment set contains Elastic Compute Service (ECS) instances that are distributed across different physical servers. You can use deployment sets to improve the availability of your applications and implement disaster recovery. A node pool that is associated with a deployment set contains ECS nodes that are distributed across multiple physical servers. You can configure pod affinity to deploy your application pods to different ECS nodes. This way, disaster recovery is implemented and the availability of your applications is improved.

## Prerequisites

A deployment set is created. For more information, see [Step 1: Create a deployment set](/help/en/ecs/user-guide/overview-43).

## Background information

To ensure the high availability of your application in a zone, you must deploy your application across multiple hosts. However, when a physical server is down, all application pods are affected. To resolve this issue, you can use deployment sets that are provided by ECS. The ECS instances that are contained in a deployment set are distributed across multiple physical servers and are isolated from each other. This helps prevent service disruptions that are caused by single points of failure. For more information about deployment sets, see [Deployment set](/help/en/ecs/user-guide/overview-43#concept-1846521).

## Limits

#### **Cluster feature usage guidelines**

-   Deployment sets are supported by ACK dedicated clusters and ACK managed clusters.
    
-   You can associate a deployment set with a node pool only when you create the node pool. Existing node pools cannot have deployment sets enabled. You can associate only one deployment set with each node pool.
    
-   You cannot manually add ECS instances to or remove ECS instances from deployment sets. If you want to change the number of ECS instances in a deployment set, you can scale the node pool with which the deployment set is associated. For more information, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#section-a2i-luy-mnw).
    
-   After you associate a deployment set with a node pool, the node pool does not support preemptible instances.
    

#### **Deployment set quotas and specifications limits**

-   **Deployment set** **quota** **limits**
    
    -   By default, node pool deployment sets are implemented based on a high-availability strategy. In a deployment set that adopts the high availability strategy, you can create up to 20 ECS instances per zone. You can use the following formula to calculate the maximum number of ECS instances that you can create in a deployment set within an Alibaba Cloud region: `20 × Number of zones within the region`. Ensure that there are sufficient ECS instances within the deployment set and adequate stock of the required instance types. For more information, see [Deployment set](/help/en/ecs/user-guide/overview-43).
        
        You cannot increase the number of ECS instances in a deployment set. However, if you want to increase the maximum number of deployment sets that your Alibaba Cloud account can have, request a quota increase in the [Quota Center console](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas). For more information about the limits and quotas of deployment sets, see [Deployment sets](/help/en/ecs/user-guide/limitations#DSQuota).
        
    -   Insufficient instance resources within the region may result in a failure to create ECS instances or start pay-as-you-go instances that were stopped in economical mode in a deployment set. Wait for a while and then try to create or start the instances again.
        

-   **Instance family limits**
    
    Deployment strategies that can be used may vary based on the instance family. The following table describes the deployment strategies that are supported by different instance families.
    
    **Note**
    
    To query the instance families that support a specific deployment strategy, call the [DescribeDeploymentSetSupportedInstanceTypeFamily](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describedeploymentsetsupportedinstancetypefamily) operation.
    
    **Deployment strategy**
    
    **Instance families that support the deployment strategy**
    
    High availability strategy or high availability group strategy
    
    -   g8a, g8i, g8y, g7se, g7a, g7, g7h, g7t, g7ne, g7nex, g6, g6e, g6a, g5, g5ne, sn2ne, sn2, and sn1
        
    -   c8a, c8i, c8y, c7se, c7, c7t, c7nex, c7a, c6, c6a, c6e, c5, ic5, and sn1ne
        
    -   r8a, r8i, r8y, r7, r7se, r7t, r7a, r6, r6e, r6a, re6, re6p, r5, re4, se1ne, and se1
        
    -   hfc8i, hfg8i, hfr8i, hfc7, hfg7, hfr7, hfc6, hfg6, hfr6, hfc5, and hfg5
        
    -   d3c, d2s, d2c, d1, d1ne, d1-c14d3, and d1-c8d3
        
    -   i3g, i3, i2, i2g, i2ne, i2gne, and i1
        
    -   ebmg5, ebmc7, ebmg7, ebmr7, sccgn6, scch5, scch5s, sccg5, and sccg5s
        
    -   e, t6, xn4, mn4, n4, e4, n2, and n1
        
    -   gn6i
        
    
    Low latency strategy
    
    -   g8a, g8i, g8ae, and g8y
        
    -   c8a, c8i, c8ae, and c8y
        
    -   ebmc8i, ebmg8i, and ebmr8i
        
    -   r8a, r8i, r8ae, and r8y
        
    -   ebmc7, ebmg7, and ebmr7
        
    

## Associate a deployment set with a node pool in the ACK console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, click **Create Node Pool**. In the **Create Node Pool** dialog box, configure the parameters, select a deployment set, and then click **Confirm Order**.
    
    For more information about the parameters, see [Create a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#section-eq0-lmv-4a7).![部署集.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1803935271/p381731.png)
    

## Examples

### Pod anti-affinity is configured for pods that belong to the same workload in the same node pool and each node can host only one pod

This example shows how to schedule three replicated pods in a Deployment to three different nodes.

1.  Create a node pool that contains three nodes and specify the ID of the deployment set that you want to associate with the node pool. For more information, see [Associate a deployment set with a node pool in the ACK console](#section-yi5-p53-7nz).
    
    After you create the node pool, click the name of the node pool on the **Node Pools** page. The **Nodes** tab shows the nodes that are contained in the node pool.![部署集1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7926328471/p384047.png)
    
    Log on to the [ECS console](https://ecs.console.alibabacloud.com/#/server). In the left-side navigation pane, choose **Deployment & Elasticity** > **Deployment Sets**. The **Deployment Sets** page shows that the three nodes belong to the specified deployment set.![部署集2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7926328471/p384059.png)
    
2.  Create a YAML file based on the following content.
    
    Deploy three pods and configure anti-affinity to schedule the pods to three different nodes.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      replicas: 3
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: nginx
          labels:
            app: nginx
        spec:
          affinity:
            podAntiAffinity:
              requiredDuringSchedulingIgnoredDuringExecution:  # Configure the scheduling policy. 
              - labelSelector:
                  matchExpressions:
                  - key: app
                    operator: In
                    values:
                    - nginx
                topologyKey: kubernetes.io/hostname
          nodeSelector:
              alibabacloud.com/nodepool-id: <nodepool-id>  # Specify the ID of the node pool. 
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            resources:
              limits:
                cpu: 1
              requests:
                cpu: 1
    ```
    
    **Results**
    
    On the **Deployments** page, click the Deployment that you want to manage. The **Pods** tab shows that the pods are scheduled to three different nodes.![部署集3.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7926328471/p384066.png)
    

### Pods that belong to the same workload in the same node pool can be scheduled to different nodes across multiple zones

1.  Create a node pool that contains four nodes, specify the ID of the deployment set that you want to associate with the node pool, and select vSwitches that are deployed in multiple zones. For more information, see [Associate a deployment set with a node pool in the ACK console](#section-yi5-p53-7nz).
    
    After you create the node pool, click the name of the node pool on the **Node Pools** page. Click the **Nodes** tab, four nodes and four zones are displayed. ECS instances are deployed in four different zones and are added to the same deployment set based on the balanced distribution policy of Auto Scaling.![部署集4.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7926328471/p384096.png)
    
    Log on to the [ECS console](https://ecs.console.alibabacloud.com/#/server). In the left-side navigation pane, choose **Deployment & Elasticity** > **deployment set**. The **Deployment Sets** page shows that the four nodes in the node pool belong to the specified deployment set.![部署集5.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7926328471/p384098.png)
    
2.  Create a YAML file based on the following content.
    
    You can use pod topology spread constraints to schedule pods that belong to the same application to different nodes across multiple zones. For more information, see [Pod topology spread constraints](https://kubernetes.io/zh-cn/docs/concepts/scheduling-eviction/topology-spread-constraints/).
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      replicas: 4
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: nginx
          labels:
            app: nginx
        spec:
          topologySpreadConstraints:
            - maxSkew: 1
              topologyKey: kubernetes.io/hostname
              whenUnsatisfiable: DoNotSchedule
              labelSelector:
                  matchLabels:
                    app: nginx
            - maxSkew: 1
              topologyKey: topology.kubernetes.io/zone
              whenUnsatisfiable: DoNotSchedule
              labelSelector:
                  matchLabels:
                    app: nginx
          nodeSelector:
              alibabacloud.com/nodepool-id: <nodepool-id>  #Specify the ID of the node pool. 
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            resources:
              limits:
                cpu: 1
              requests:
                cpu: 1
    ```
    
    **Results**
    
    On the **Deployments** page, click the Deployment that you want to manage. The **Pods** tab shows that pods belonging to the same application are scheduled to different nodes across multiple zones.![部署集6](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7926328471/p384104.png)
    

## References

-   You can also [use Terraform to associate a deployment set with a node pool](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/use-terraform-to-associate-a-deployment-set-with-a-node-pool#task-2171641).
    
-   For more information about recommended configurations on high availability clusters architecture, see [Suggested configurations for creating HA clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-high-availability-architecture-recommend-configuration).
