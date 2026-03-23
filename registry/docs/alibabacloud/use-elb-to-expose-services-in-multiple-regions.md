In Kubernetes clusters, Services are used to expose pods to external access in order to decouple the front end and back end. This allows you to use a loosely coupled microservices design. In ACK Edge clusters, LoadBalancer Services are usually used to expose applications. This topic describes how to use Edge Load Balancer (ELB) instances to expose Services deployed in Edge Node Service (ENS) node pools in multiple regions.

## **Introduction**

Node pools in ACK Edge clusters can be classified into on-cloud node pools and edge node pools. In ACK Edge clusters, you can use LoadBalancer Services to expose applications deployed in on-cloud node pools or edge node pools.

In this topic, ELB Services are used to expose applications deployed in edge node pools. In the following figure, the control planes of ACK Edge clusters are deployed in a virtual private cloud (VPC). You can connect computing resources in data centers of different networks to the cloud and use a LoadBalancer Service to expose a group of applications in different regions. This means that a LoadBalancer Service is mapped to endpoints in multiple data centers.

In this example, ENS node pools are created in the China (Hefei) and China (Chengdu) regions. ELB instances are used to distribute requests from applications in the two regions.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1612736671/CAEQJxiBgICL0ebXgBkiIDI2ODAzYTg2MmE2MTRkODg4ZWQxNmM4MDc3MDAwYzNh4409614_20240509134841.057.svg)

ACK Edge clusters allow you to create custom cluster resources PoolServices. The edge-controller-manager (ECM) component can automatically select a PoolService managed by a node pool based on the LoadBalancer Service you created and bind the lifecycle of Server Load Balancer (SLB) instances in the same region to the PoolService.

## Precautions

-   The ECM configures SLB instances only for Services whose types are `Type=LoadBalancer`. The ECM version must be 2.1.0 or later.
    
-   ELB instances managed by the ECM are named in the `k8s/${Service_Name}/${Service_Namespace}/${NodePool_Id}/${Cluster_Id}` format. Do not use duplicate names in case the ELB instances with the same names are accidentally deleted.
    
-   Elastic IP addresses (EIPs) managed by the ECM are named in the `k8s/${Service_Name}/${Service_Namespace}/${NodePool_Id}/${Cluster_Id}` format. Do not use duplicate names in case the EIPs with the same names are accidentally deleted.
    
-   To create multiple Services that share one ELB instance, you must choose self-managed EIPs and ELB instance. In addition, the type of the external traffic policy must be Cluster.
    
-   We recommend that you create edge networks, create ENS instances that are not assigned elastic network interfaces (ENIs), and use ELB instances to expose the ENS instances. To enable Internet access for the ENS instances, you can assign EIPs to the ENS instances or configure NAT.
    
-   ELB instances are also needed if you create ENS instances that are assigned ENIs. In this case, you must add routing rules to the host networks of the ENS instances.
    
    ```
    # In this example, 10.0.0.3 indicates the internal network interface controller, and 10.0.0.1 indicates the internal gateway address.
    ip rule add from 10.0.0.3 lookup 4
    ip route add default via 10.0.0.1 table 4
    ```
    

## Step 1: Deploy an application

In this example, an application named cube is deployed on each node in ENS node pools.

1.  The following YAML file creates a DeamonSet:
    
    ```
    apiVersion: apps/v1
    kind: DaemonSet
    metadata:
      name: cube
      labels:
        app: cube
    spec:
      selector:
        matchLabels:
          app: cube 
      template:
        metadata:
          labels:
            app: cube
        spec:
          containers:
          - name: cube
            image: registry.cn-hangzhou.aliyuncs.com/acr-toolkit/ack-cube:1.0
            ports:
            - containerPort: 80 #Expose the port.
    ```
    
2.  Deploy the application.
    
    ```
    kubectl apply -f cube.yaml
    ```
    
3.  Query the status of the application.
    
    ```
    kubectl get ds cube
    ```
    
    Expected output:
    
    ```
    NAME   DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
    cube   4         4         4       4            4           <none>          3d1h
    ```
    

## Step 2: Add attribute annotations and Service labels to all node pools

You must add attribute annotations and Service labels to all ENS node pools at the edge. In this example, perform the following operations on ENS node pools in the China (Hefei) and China (Chengdu) regions.

1.  Get the node pool name.
    
    ```
    kubectl get nodepool
    ```
    
2.  Add a network ID.
    
    ```
    kubectl annotate nodepool np-xxx alibabacloud.com/ens-network-id=n-xxx 
    ```
    
3.  Add an ENS node ID (VPC ID).
    
    ```
    kubectl annotate nodepool np-xxx alibabacloud.com/ens-region-id=cn-xxx-xxx
    ```
    
4.  Add a vSwitch ID.
    
    ```
    kubectl annotate nodepool np-xxx alibabacloud.com/ens-vswitch-id=vsw-xxx,vsw-xxx
    ```
    
5.  Add a Service label.
    
    ```
    kubectl label nodepool np-xxx k8s-svc=cube
    ```
    

## Step 3: Use a multi-region ELB Service to expose the application

**Important**

-   When you create the Service, set the Service type to `type: LoadBalancer`.
    
-   To create an ELB Service, you must set the LoadBalancer type to `loadBalancerClass: alibabacloud.com/elb`.
    

You can use an existing ELB instance to expose the application. If no ELB instance is available, you can use an automatically created ELB instance to expose the application.

The ELB update policy varies based on the method that you use to expose the application. For more information, see [ELB update policy](#218a207336ma9).

## Use an automatically created multi-region ELB Service to expose the application

**Important**

The following operations delete the automatically created ELB instances and EIPs. Proceed with caution.

-   If you delete the ELB Service, the ELB instances corresponding to all node pools are deleted.
    
-   If you delete the node pools, the corresponding ELB instances are also deleted.
    
-   Updating the node pool selector of the Service also deletes the ELB instances corresponding to the node pools that do not match the selector.
    
-   If you update the labels of a node pool, the node pool may fail to match the node pool selector of the Service. Consequently, the ELB instance corresponding to the node pool is deleted.
    

1.  Create a file named cube-svc.yaml and add the following YAML content to the file:
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      name: cube-svc
      labels:
        app: cube
      annotations:
        openyurt.io/topologyKeys: openyurt.io/nodepool            #Enable the Service topology feature.
        service.openyurt.io/nodepool-labelselector: k8s-svc=cube  #Select ENS node pools. 
    spec:
      selector:
        app: cube
      type: LoadBalancer
      loadBalancerClass: alibabacloud.com/elb
      externalTrafficPolicy: Local
      ports:
      - name: cube
        port: 80
        protocol: TCP
        targetPort: 80
    ```
    
2.  Deploy a Service named `cube-svc` and use the Service to expose the application.
    
    ```
    kubectl apply -f cube-svc.yaml
    ```
    
3.  Confirm that the `cube-svc` Service is created.
    
    ```
    kubectl get cube-svc
    ```
    
    Expected output:
    
    ```
    NAME           TYPE           CLUSTER-IP        EXTERNAL-IP                    PORT(S)        AGE
    cube-svc       LoadBalancer   192.168.xxx.xxx   39.106.XX.XX,144.121.XX.XX     80:30081/TCP   5m
    ```
    
4.  Access the application.
    
    **Note**
    
    Replace `<YOUR-External-IP>` with the `EXTERNAL-IP` returned in the preceding step.
    
    ```
    curl http://<YOUR-External-IP>:80  
    ```
    

## Use an existing multi-region ELB Service to expose the application

1.  Create a file named cube-svc and add the following YAML content to the file:
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      name: cube-svc
      labels:
        app: cube
      annotations:
        openyurt.io/topologyKeys: openyurt.io/nodepool             #Enable the Service topology feature.
        service.openyurt.io/nodepool-labelselector: k8s-svc=cube   #Select ENS node pools. 
        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-managed-by-user: "true" #Mount the Service to a self-managed load balancer.
    spec:
      selector:
        app: cube
      type: LoadBalancer
      loadBalancerClass: alibabacloud.com/elb
      externalTrafficPolicy: Local
      ports:
      - name: cube
        port: 80
        protocol: TCP
        targetPort: 80
    ```
    
2.  Deploy a Service named `cube-svc` and use the Service to expose the application.
    
    ```
    kubectl apply -f cube-svc.yaml
    ```
    
3.  Query the automatically created PoolServices.
    
    ```
    kubectl get ps 
    ```
    
    Expected output:
    
    ```
    NAME                             AGE
    cube-svc-np-heifei               32s
    cube-svc-np-chengdu              32s
    ```
    
4.  Specify an existing ELB instance for the PoolService in each region.
    
    In this example, an existing ELB instance is specified for each PoolService in the China (Hefei) and China (Chengdu) regions.
    
    -   Specify an existing ELB instance for the node pool in the China (Hefei) region.
        
        ```
        kubectl annotate ps cube-svc-np-heifei  service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id=lb-xxx
        ```
        
    -   Specify an existing ELB instance for the node pool in the China (Chengdu) region.
        
        ```
        kubectl annotate ps cube-svc-np-chengdu service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id=lb-xxx
        ```
        
    
5.  Confirm that the `cube-svc` Service is created.
    
    ```
    kubectl get cube-svc
    ```
    
    Expected output:
    
    ```
    NAME           TYPE           CLUSTER-IP        EXTERNAL-IP                    PORT(S)        AGE
    cube-svc       LoadBalancer   192.168.xxx.xxx   39.106.XX.XX,144.121.XX.XX     80:30081/TCP   5m
    ```
    
6.  Access the application.
    
    **Note**
    
    Replace `<YOUR-External-IP>` with the `EXTERNAL-IP` returned in the preceding step.
    
    ```
    curl http://<YOUR-External-IP>:80
    ```
    

## ELB update policy

**Resource object**

**ELB instances managed by you (manually created ELB instances)**

**ELB instances managed by the ECM (automatically created ELB instances)**

ELB attributes

-   Create: You must specify the node pool selector and ELB instance ID. Add the following annotations:
    
    -   `service.openyurt.io/nodepool-labelselector`
        
    -   `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-managed-by-user`
        
    
-   Update: The attributes of ELB instances cannot be updated.
    
-   Delete: ELB instances cannot be automatically released.
    

-   Create: You must specify the node pool selector. Add the following annotations:
    
    `service.openyurt.io/nodepool-labelselector`
    
-   Update: The attributes of ELB instances cannot be updated.
    
-   Delete: ELB instances cannot be automatically deleted.
    

Backend server groups

-   Create: Backend server groups are updated based on the status of the Service and pods.
    
-   Update: In local mode, backend servers are dynamically added or removed.
    
-   Delete: The backend server groups of ELB instances cannot be automatically deleted. You need to manually delete them.
    

-   Create: Backend server groups are updated based on the status of the Service and pods.
    
-   Update: In local mode, backend servers are dynamically added or removed.
    
-   Delete: All backend server groups are automatically deleted.
    

Listeners

-   Create: Listeners are automatically added based on the spec.Ports of the Service.
    
-   Update: Listeners are automatically added, updated, and deleted based on the port changes of the Service.
    
-   Delete: Listening ports are not automatically deleted. You need to manually delete them.
    

-   Create: Listeners are automatically added based on the spec.Ports of the Service.
    
-   Update: Listeners are automatically added, updated, and deleted based on the port changes of the Service.
    
-   Delete: All listeners are automatically deleted.
    

EIP attributes

-   Create: EIPs cannot be automatically created. You need to manually manage EIPs.
    
-   Update: The attributes of EIPs cannot be updated.
    
-   Delete: EIPs cannot be automatically deleted.
    

-   Create: EIPs are automatically created in the regions of ELB instances.
    
-   Update: The bandwidth of EIPs can be increased and decreased.
    
-   Delete: EIPs can be automatically deleted.
    

## References

-   You can add annotations to the YAML file of a Service to use various load balancing features. For more information, see [Use annotations to configure ELB instances](/help/en/ack/ack-edge/user-guide/configure-elb-by-using-annotation).
    
-   For more information about ELB, see [What is ELB?](/help/en/ens/what-is-elb)
