When you set a service type to load balancing, that is, `Type=LoadBalancer`, the Cloud Controller Manager (CCM) component of Alibaba Cloud Container Service for Kubernetes (ACK) creates or configures a load balancer instance for the service. The instance can be a Classic Load Balancer (CLB) or a Network Load Balancer (NLB). The configuration includes resources such as the instance, listeners, and backend server groups. This topic describes important notes for configuring service load balancing and explains the resource update policies of CCM.

## Notes

### **Which** load balancers **can be reused?**

-   You can only reuse instances created in the Server Load Balancer (SLB) console. You cannot reuse SLB instances that are automatically created by cloud-controller-manager or other SLB instances that are managed by ACK, such as the load balancer used by the API Server.
    
-   To reuse a private network SLB instance in an ACK cluster, the instance must be in the same virtual private cloud (VPC) as the ACK cluster. Cross-VPC reuse applies only to NLB instances.
    
-   The address type of the reused SLB instance must match the access type of the Service. If the Service is for **public network access** (that is, `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type: "internet"`), the **Address Type** of the SLB instance must be **Public**. If the Service is for **internal access** (that is, `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type: "intranet"`), the **Address Type** of the SLB instance must be **Private**.
    
-   Multiple Services cannot use the same listener port on the same SLB instance simultaneously.
    
-   When you reuse an existing SLB instance across clusters, ensure that the combination of namespace and Service name is unique for each cluster.
    

### **Notes on CCM-managed** load balancers

-   CCM configures load balancing for Services of the `Type=LoadBalancer` type, but not for Services of other types.
    

**Important**

If you change a Service from `Type=LoadBalancer` to another type (`Type!=LoadBalancer`), CCM deletes the load balancer configuration. This makes the Service inaccessible through the SLB instance.

-   CCM uses a declarative API. It automatically refreshes the load balancer configuration based on the Service configuration under certain conditions. Any configurations that you modify in the SLB console are at risk of being overwritten.
    

**Important**

Do not manually modify any configuration of an SLB instance created and maintained by ACK in the SLB console. This can cause configuration loss and make the Service inaccessible.

-   Do not manually delete or modify the `service.k8s.alibaba/resources` or `service.k8s.alibaba/nlb` Finalizer on a Service. Manually changing the Finalizer may prevent CLB or NLB resources from being released correctly.
    
-   For [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager) v2.5.0 and later, the Classic Load Balancer (CLB) instance option is a whitelist feature available when you create a service in the console. To use this feature, submit a request on the [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas) platform.
    

### **Notes on accessing the external IP of a LoadBalancer service from within a cluster**

Depending on the network plugin type, plugin version, and cluster version, when you access the CLB IP of a `LoadBalancer` Service from within a cluster, the cluster network intercepts the traffic on the node. It then forwards the traffic directly to the backend Service Endpoint.

This process bypasses the external CLB instance. This can cause specific configurations that rely on the CLB instance to fail and can lead to access issues. The main scenarios affected include the following:

-   `externalTrafficPolicy` is set to `Local`: Traffic might be forwarded to a node that has no backend pods, causing the access to fail.
    
-   Proxy Protocol is enabled: The backend Service cannot obtain the Proxy Protocol header added by the CLB instance. This causes the protocol handshake to fail.
    
-   HTTP/HTTPS listener is used: Operations that rely on the CLB instance, such as TLS termination or adding specific headers such as `X-Forwarded-For`, will not take effect.
    

Therefore, to access a `LoadBalancer` Service from within the cluster:

-   Use the Service's in-cluster address. This method is standard and more stable. For inter-service communication within the cluster, use the Service's ClusterIP or its DNS name, such as `<service-name>.<namespace>.svc.cluster.local`.
    
-   If you must use the CLB address, access it through a hostname. Add the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-hostname` annotation to the Service. Then, use the configured domain name instead of the IP address to access the Service. This ensures that traffic is processed correctly. For more information about the annotation, see [Set a hostname for a service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#4b9511206c47y).
    
    **Important**
    
    When you use this feature to bypass the CLB instance, avoid scheduling the client pod and the backend pod on the same node. Otherwise, access may fail because of asymmetric routing issues.
    

### Notes on managing large-scale load balancing **in a single cluster with CCM**

CCM has a limited capacity for processing Service events. In large clusters with many nodes or many \`LoadBalancer\` Services, CCM might experience delays. These delays can occur during operations such as creating or deleting SLB instances and updating endpoints in server groups. This is common during batch creation or deletion of Services, simultaneous changes to many Service Endpoints, or when nodes are added or removed.

If your business requires large-scale batch changes, perform capacity assessments and stress testing in advance. This helps prevent business disruptions caused by CCM processing delays.

### How to replace the SLB instance for a service

You cannot reuse or replace the SLB instance for an existing LoadBalancer Service. To replace the SLB instance, delete and then recreate the Service.

## Quota limits

### **VPC**

-   Each node in a cluster corresponds to one entry in the route table. By default, a VPC supports only 200 route table entries. If your cluster has more than 200 nodes, [log on to the Quota Center console and submit an application](https://quotas.console.alibabacloud.com/products/csk/quotas).
    
-   For more information about VPC limits, see [Limits and quotas](/help/en/vpc/understanding-vpc-quotas-in-alibaba-cloud#concept-dyx-jkx-5db).
    
    To query VPC quotas, see [VPC quota management](https://vpc.console.alibabacloud.com/quota%EF%BC%89).
    

### **Server Load Balancer**

-   CCM creates an SLB instance for each `Type=LoadBalancer` Service. By default, a user can have up to 60 instances. If you need more than 60 instances, [log on to the Quota Center console and submit an application](https://quotas.console.alibabacloud.com/products/csk/quotas).
    
-   CCM attaches ECS instances or ENIs to the backend server group of the SLB instance based on the Service configuration.
    
    -   CCM creates a separate server group for each targetPort in the Service. Therefore, when you calculate the backend server quota for an SLB instance, multiply it by the number of targetPorts.
        
    -   By default, a single ECS instance or ENI can be attached to a maximum of 50 different backend server groups. If an ECS instance needs to be attached to more backend server groups, [log on to the Quota Center console and submit an application](https://quotas.console.alibabacloud.com/products/csk/quotas).
        
    -   By default, an SLB instance can have up to 200 backend servers. If you need more backend servers, [log on to the Quota Center console and submit an application](https://quotas.console.alibabacloud.com/products/csk/quotas).
        
-   CCM creates listeners based on the ports defined in the Service. By default, an SLB instance can have up to 50 listeners. If you need more listeners, [log on to the Quota Center console and submit an application](https://quotas.console.alibabacloud.com/products/csk/quotas).
    
-   For more information about SLB limits, see [CLB limits](/help/en/slb/classic-load-balancer/product-overview/limits-1#concept-mfm-mp4-tdb) and [NLB limits](/help/en/slb/network-load-balancer/product-overview/restrictions-on-use).
    
    To query SLB quotas, see [Server Load Balancer quota management](https://slb.console.alibabacloud.com/slb/quota).
    

## Load balancing update policies

ACK lets you specify an existing SLB instance for a Service or have CCM automatically create a new one. The resource update policies for these two methods differ, as shown in the following table.

**Resource object**

**Specify an existing SLB instance**

**CCM-managed SLB instance**

Server Load Balancer

Set the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation.

-   CCM uses this instance as the load balancer for the service and configures it based on other annotations. It automatically creates multiple vServer groups for the SLB instance.
    
-   When the service is deleted, CCM does not delete the SLB instance that you specified by its ID.
    

-   CCM automatically creates and configures resources, such as the SLB instance, listeners, and vServer groups, based on the service configuration. All resources are managed by CCM.
    
-   When the service is deleted, CCM deletes the automatically created SLB instance.
    

Listener

Set the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-force-override-listeners` annotation:

-   If set to `"false"`, CCM does not manage any listener configurations for the SLB instance.
    
-   If set to `"true"`, CCM manages listeners based on the service configuration. If a listener already exists, CCM overwrites it.
    

CCM automatically creates and configures listener policies based on the service configuration.

Backend server group

When the backend Endpoints of a service or the cluster nodes change, CCM automatically updates the backend vServer group of the SLB instance.

-   For the Terway network plugin, CCM attaches pod IPs to the SLB backend by default, not ECS nodes.
    
-   For the Flannel network plugin, the update policy for the backend server group differs based on the service mode.
    
    -   Cluster mode (`spec.externalTrafficPolicy = Cluster`): By default, CCM attaches all nodes to the SLB backend, unless you configure the backend using the BackendLabel label.
        
        **Important**
        
        SLB has a quota limit on how many SLB instances an ECS instance can be attached to. This method quickly consumes the quota. When the quota is exhausted, the service fails to reconcile. To resolve this, use a service in Local mode.
        
    -   Local mode (`spec.externalTrafficPolicy = Local`): By default, CCM only adds the nodes where the service's pods are located to the SLB backend. This reduces quota consumption and supports Layer 4 source IP retention.
        
-   For the Flannel network plugin, CCM never adds master nodes to the SLB backend.
    
-   For the Flannel network plugin, CCM does not, by default, remove nodes that are drained (`kubectl drain`) or have scheduling disabled (`kubectl cordon`) from the SLB backend. To remove these nodes, set `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-remove-unscheduled-backend` to `on`.
    

## Enable deletion protection for a service

You can enable deletion protection for Services that involve critical business operations or sensitive data. This prevents accidental deletions and associated costs. After you enable this feature, the corresponding resources can be deleted only after you manually disable deletion protection. For more information about how to enable deletion protection for a service, see [Enable deletion protection for a service](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/configure-and-enforce-ack-pod-security-policies#96ca3b02e7t1d).
