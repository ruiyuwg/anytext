This topic answers frequently asked questions (FAQs) about services in Container Service for Kubernetes (ACK). It provides solutions to common issues, such as the inaccessibility of a Server Load Balancer (SLB) IP address from within a cluster, failures when reusing an existing SLB instance, and how to handle a failed Cloud Controller Manager (CCM) upgrade.

## Index

**SLB-related questions**

-   [The specific purposes of SLB instances in an ACK cluster](#KWSsF)
    
-   [How to choose between the Local and Cluster external traffic policies when you create a service](#section-yv3-jel-jtb)
    
-   [Why are events for the service and LoadBalancer synchronization process not visible?](#section-690-vh0-1lt)
    
-   [What to do if an SLB instance remains in the Pending state during creation](#section-og0-e8q-4am)
    
-   [What to do if an SLB vServer group is not updated](#section-nmr-gvy-po3)
    
-   [What to do if a service annotation does not take effect](#section-slc-3sk-7vf)
    
-   [Why was the configuration of my SLB instance modified?](#section-g0s-3ac-8p8)
    
-   [Why is an SLB IP address inaccessible from within a cluster?](#section-bp8-26q-o83)
    
-   [When are SLB instances automatically deleted?](#section-nff-cbv-3de)
    
-   [What to do if I accidentally delete an SLB instance](#section-s2u-6bx-q0b)
    
-   [Does deleting a service also delete the SLB instance?](#section-apr-koj-k8v)
    
-   [How to enable SLB renaming for older CCM versions](#section-61e-9ty-sgk)
    
-   [How are node weights automatically set in Local mode?](#section-7xa-hpn-yfw)
    
-   [How to query the IP addresses, names, and types of all SLB instances in a cluster](#cd03f6dd41gif)
    
-   [How to ensure that a LoadBalancer can gracefully close existing connections when backend servers of a LoadBalancer service are replaced](#f74aef168cabi)
    

**FAQ about reusing an existing SLB instance**

-   [Why does reusing an existing SLB instance fail?](#title-cqd-n38-p1d)
    
-   [Why is a listener not configured when I reuse an existing SLB instance?](#section-a33-ozj-j1k)
    

**Other questions**

-   [Service error messages and solutions](#section-kr4-89m-2dh)
    
-   [What to do if a CCM upgrade fails](#section-xyq-0k8-8ea)
    
-   [How to enable session persistence for a Kubernetes service](/help/en/kb-articles/latest/how-do-i-perform-session-persistence-for-a-kubernetes-service)
    
-   [How to configure a listener for a NodePort service](#section-znw-fjm-zni)
    
-   [How to access a NodePort service](#section-z2f-5gp-efu)
    
-   [How to correctly configure the NodePort range](#023c3ce009sv0)
    
-   [How to add required permissions when you upgrade the CCM component to a later version in an ACK dedicated cluster](#8be85e7b2ebec)
    

## **SLB-related questions**

### The specific purposes of SLB instances in an ACK cluster

If you install the Nginx Ingress Controller add-on when you create a Kubernetes cluster, the cluster creates two SLB instances by default.

The two SLB instances serve the following purposes:

-   **API Server SLB**: This SLB instance is the access endpoint for the API Server. All access requests to the cluster must pass through this SLB instance. It listens on TCP port 6443. The backend servers are API Server pods or master ECS instances.
    
-   **Nginx Ingress Controller SLB**: This SLB instance is associated with the `nginx-ingress-controller` service in the kube-system namespace. The vServer group dynamically binds to Nginx Ingress Controller pods to load balance and forward external requests. It listens on ports 80 and 443 over TCP.
    

### **How to choose between the Local and Cluster external traffic policies when you create a service**

The Local and Cluster external traffic policies provide different features for different network plug-ins. For more information about the differences between the Local and Cluster external traffic policies, see [External traffic policies: Local and Cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-management/#section-qr2-2yu-zk9).

### **Why are events for the service and LoadBalancer synchronization process not visible?**

If no event information is displayed after you run the `kubectl -n {your-namespace} describe svc {your-svc-name}` command, check the version of your CCM component.

-   Versions earlier than v1.9.3.276-g372aa98-aliyun: The CCM component does not display events for the service and LoadBalancer synchronization. Upgrade the component. For more information about how to view and upgrade the CCM version, see [Upgrade the CCM component](/help/en/ack/product-overview/update-the-ccm#section-lkb-uza-33p).
    
-   For versions v1.9.3.276-g372aa98-aliyun and later, you can [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

### **What to do if an SLB instance remains in the Pending state during creation**

1.  Run the `kubectl -n {your-namespace} describe svc {your-svc-name}` command to view event information.
    
2.  Resolve the errors reported in the events. For information about how to handle different error messages in events, see [Error events and solutions](#section-kr4-89m-2dh).
    
    If no error message is displayed, see [Why are events for the service and LoadBalancer synchronization process not visible?](#section-690-vh0-1lt).
    

### **What to do if an SLB vServer group is not updated**

1.  Run the `kubectl -n {your-namespace} describe svc {your-svc-name}` command to view event information.
    
2.  Resolve the errors reported in the events. For information about how to handle different error messages in events, see [Error events and solutions](#section-kr4-89m-2dh).
    
    If no error message is displayed, see [Why are events for the service and LoadBalancer synchronization process not visible?](#section-690-vh0-1lt).
    

### **What to do if a service annotation does not take effect**

1.  Check for error messages.
    
    1.  Run the `kubectl -n {your-namespace} describe svc {your-svc-name}` command to view event information.
        
    2.  Resolve the errors reported in the events. For information about how to handle different error messages in events, see [Error events and solutions](#section-kr4-89m-2dh).
        
2.  If no error message is displayed, resolve the issue based on one of the following scenarios:
    
    -   Make sure that your CCM version meets the version requirements of the annotation. For more information about the mappings between annotations and CCM versions, see [Use annotations to configure a Classic Load Balancer (CLB) instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#section-3pu-lhe-9wm).
        
    -   Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com). On the **Services** page, click the name of the target service and confirm that the Service has the corresponding annotations. If the Service does not have annotations, configure them.
        
        For more information about how to add an annotation, see [Use annotations to configure a Classic Load Balancer (CLB) instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948).
        
        For more information about how to view the list of services, see [Manage services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-management/#task-1779995).
        
    -   Check whether the annotation is correctly configured.
        

### **Why was the configuration of my SLB instance modified?**

CCM uses a declarative API and automatically updates the SLB configuration based on the service configuration under certain conditions. Any configurations that you modify in the SLB console are at risk of being overwritten. We recommend that you configure the SLB instance using annotations. For more information about how to use annotations, see [Use annotations to configure a Classic Load Balancer (CLB) instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948).

**Important**

Do not manually modify any configurations of an SLB instance that is created and maintained by Kubernetes in the SLB console. Otherwise, configurations may be lost and the service may become inaccessible.

### **Why is an SLB IP address inaccessible from within a cluster?**

-   Scenario 1: If you use a private IP address for an SLB instance that was not created by a service, access from within the cluster may fail. This failure occurs if the pod accessing the SLB instance is on the same node as a backend pod.
    
    For Layer 4 load balancing services, an ECS instance cannot act as both a backend server and a client that accesses the service. To resolve this issue and prevent the client and destination from being on the same node, use one of the following methods.
    
    -   Change the SLB IP address to a public IP address.
        
    -   Create the SLB instance using a service and set the external traffic policy to Cluster. In this case, kube-proxy intercepts the traffic sent to the SLB instance from within the cluster, which bypasses the SLB limitation.
        
-   Scenario 2: You set the external traffic policy to Local when you expose the service. This causes access to the SLB IP address from within the cluster to fail.
    
    For more information about the cause and solution of this issue, see [How do I resolve the issue where the SLB address exposed by a LoadBalancer service is inaccessible from within a Kubernetes cluster?](#9df8f4cb31qmb).
    

### **How do I resolve the issue where the SLB address exposed by a LoadBalancer service is inaccessible from within a Kubernetes cluster?**

#### **Problem description**

In a Kubernetes cluster, some nodes can access the SLB instance with an external traffic policy of Local that is exposed by the cluster, but other nodes cannot. This issue frequently occurs with Ingresses.

#### **Cause**

The SLB instance is configured with `externalTrafficPolicy: Local`. With this policy, the SLB address is accessible only from nodes that host the corresponding backend pods. Because the SLB address is intended for external use, if a node or pod within the cluster tries to access it, the request is not sent to the SLB instance. Instead, kube-proxy intercepts the request and forwards it based on local routing rules (iptables or IPVS).

If the node where the client pod resides does not host a backend pod for the service, the network connection fails. If the node hosts a backend pod, the service can be accessed as expected. For more information about this issue, see [kube-proxy adds external-lb address to local node iptables rules](https://github.com/kubernetes/kubernetes/issues/66607).

#### **Solutions**

You can use one of the following methods to resolve the issue. We recommend that you use the first method.

-   Access internal services from within the Kubernetes cluster using their ClusterIP addresses or service names. The service name of the Ingress is `nginx-ingress-lb.kube-system`.
    
-   Change the externalTrafficPolicy of the LoadBalancer service to Cluster. This method ensures that traffic can be forwarded to pods on all nodes. However, it causes the loss of source IP addresses because the cluster performs source network address translation (SNAT). This means the backend application cannot retrieve the real IP address of the client. Run the following command to modify the Ingress service:
    
    ```
    kubectl edit svc nginx-ingress-lb -n kube-system
    ```
    
-   If you use a Terway cluster with ENIs or multiple IP addresses per ENI, change the externalTrafficPolicy of the LoadBalancer service to Cluster and add an annotation for ENI passthrough, such as `annotation: service.beta.kubernetes.io/backend-type: "eni"`. The following code block shows the format. This method preserves the source IP address and allows access from within the cluster. For more information, see [Use annotations to configure a Classic Load Balancer (CLB) instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances).
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      annotations:
        service.beta.kubernetes.io/backend-type: eni
      labels:
        app: nginx-ingress-lb
      name: nginx-ingress-lb
      namespace: kube-system
    spec:
      externalTrafficPolicy: Cluster
    ```
    

### **When are SLB instances automatically deleted?**

The policy for automatically deleting an SLB instance depends on whether the SLB instance was automatically created by CCM. The following table describes the deletion policies.

**Service operation**

**SLB instance automatically created by CCM**

**Reused SLB instance**

Delete the service

The SLB instance is deleted.

The SLB instance is retained.

Change the service type from LoadBalancer to another type

Delete an SLB instance

The SLB instance is retained.

### **Does deleting a service also delete the SLB instance?**

If you reuse an existing SLB instance (the service has the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id: {your-slb-id}` annotation), deleting the service does not delete the SLB instance. Otherwise, deleting the service also deletes the corresponding SLB instance.

If you change the service type (for example, from LoadBalancer to NodePort), the corresponding SLB instance that was automatically created by CCM is also deleted.

**Important**

Do not manually edit a service to change an SLB instance that was automatically created by CCM to a reused SLB instance. This disassociates the service from the automatically created SLB instance. When you delete the service, the corresponding SLB instance cannot be automatically deleted.

### **What to do if I accidentally delete an SLB instance**

-   **Scenario 1: What to do if you accidentally delete the API Server SLB instance**
    
    The instance cannot be recovered. You must recreate the cluster. For more information, see [Create an ACK Pro cluster](/help/en/doc-detail/176833.html#task-skz-qwk-qfb).
    
-   **Scenario 2: What to do if you accidentally delete the Ingress SLB instance**
    
    The following steps use Nginx Ingress as an example to show how to recreate an SLB instance.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster you want and click its name. In the left navigation pane, choose **Network** > **Services**.
        
    3.  At the top of the **Services** page, select **kube-system** from the **Namespace** drop-down list.
        
        1.  In the service list, find the target service **nginx-ingress-lb**, click **Edit YAML** in the **Actions** column, remove the `status.loadBalancer` field and its content, and then click **OK** to trigger the CCM to rebuild the SLB.
            
        2.  If **nginx-ingress-lb** does not appear in the service list, click **Create from YAML** in the upper-left corner of the page and use the following template to create a Service named **nginx-ingress-lb**.
            
            ```
            apiVersion: v1
            kind: Service
            metadata:
              labels:
                app: nginx-ingress-lb
              name: nginx-ingress-lb
              namespace: kube-system
            spec:
              externalTrafficPolicy: Local
              ports:
              - name: http
                port: 80
                protocol: TCP
                targetPort: 80
              - name: https
                port: 443
                protocol: TCP
                targetPort: 443
              selector:
                app: ingress-nginx
              type: LoadBalancer
            ```
            
-   **Scenario 3: What to do if you accidentally delete an application-specific SLB instance**
    
    -   If the service corresponding to the SLB instance is no longer needed, delete the service.
        
    -   If the corresponding service is still in use, perform the following steps:
        
        1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
            
        2.  On the **Clusters** page, find the cluster you want and click its name. In the left navigation pane, choose **Network** > **Services**.
            
        3.  From the **Namespace** drop-down list at the top of the **Services** page, click **All Namespaces**, and then find your service in the service list.
            
        4.  In the **Actions** column for the target service, click **Edit YAML**, delete the `status.loadBalancer` content, and click **OK** to allow CCM to rebuild the SLB.
            

### **How to enable SLB renaming for older CCM versions**

SLB instances created by Cloud Controller Manager (CCM) v1.9.3.10 and later are automatically tagged to support renaming. For SLB instances created by v1.9.3.10 and earlier versions, you must manually add a specific tag to enable renaming.

**Note**

-   Manually adding a tag to enable renaming is required only for SLB instances created by CCM v1.9.3.10 and earlier.
    
-   The service type must be LoadBalancer.
    

1.  Log on to the master node of the Kubernetes cluster. For more information, see [Connect to an ACK cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136).
    
2.  Run the `kubectl get svc -n ${namespace} ${service}` command to view the service type and IP address.![service type](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3545359951/p44550.png)
    
    **Note**
    
    Replace _namespace_ and _service_ with the namespace and service name of your cluster.
    
3.  Run the following command to generate the required tag for the SLB instance.
    
    ```
    kubectl get svc -n ${namespace} ${service} -o jsonpath="{.metadata.uid}"|awk -F "-" '{print "kubernetes.do.not.delete: "substr("a"$1$2$3$4$5,1,32)}'
    ```
    
    ![tag](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3545359951/p44551.png)
    
4.  Log on to the [Server Load Balancer console](https://slb.console.alibabacloud.com). Based on the IP address retrieved in Step 2, search for the SLB instance in the corresponding region.
    
5.  Add a tag to the SLB instance using the key and value generated in Step 3. The key and value correspond to 1 and 2 in the preceding figure. For more information, see [Create and manage a CLB instance](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances#section-6cc-bqc-x5v).
    

### **How are node weights automatically set in Local mode?**

This section uses a scenario where an application pod (app=nginx) is deployed on three ECS instances and exposed through Service A to explain how node weights are calculated in Local mode.

![CCM2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4545359951/p103113.png)

#### **Versions v1.9.3.276-g372aa98-aliyun and later**

Due to precision issues in the weight calculation, a slight load imbalance may still occur among pods. In CCM v1.9.3.276-g372aa98-aliyun and later, CCM sets the node weight to the number of pods deployed on the node. As shown in the following figure, the weights of the three ECS instances are 1, 2, and 3. Traffic is distributed to the three ECS instances at a ratio of 1:2:3, resulting in a more balanced load across the pods.

The formula is as follows:![node weight](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4545359951/p118174.png)

![node](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4545359951/p118175.png)

#### **Versions later than v1.9.3.164-g2105d2e-aliyun and earlier than v1.9.3.276-g372aa98-aliyun**

As shown in the following figure, in CCM versions later than v1.9.3.164-g2105d2e-aliyun and earlier than v1.9.3.276-g372aa98-aliyun, CCM calculates the node weight based on the number of pods deployed on the node. The calculated weights of the three ECS instances are 16, 33, and 50. Therefore, traffic is distributed to the three ECS instances at a ratio of approximately 1:2:3, resulting in a more balanced load across the pods.

The formula is as follows:![calculation formula](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4545359951/p103112.png)

![ccm4](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4545359951/p103117.png)

#### **Versions earlier than v1.9.3.164-g2105d2e-aliyun**

As shown in the following figure, in versions earlier than v1.9.3.164-g2105d2e-aliyun, the weight of all backend servers for a service in Local mode is 100. This means traffic is evenly distributed to the three ECS instances. This causes a heavy load on the pod on ECS 1 and a light load on the pods on ECS 3, resulting in an unbalanced load across pods.

![CCM3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4545359951/p103116.png)

### How to query the IP addresses, names, and types of all SLB instances in a cluster**?**

1.  [Connect to an ACK cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    
2.  Run the following command to retrieve the name, IP address, and address type of each LoadBalancer service in all namespaces.
    
    ```
    kubectl get services -A -ojson | jq '.items[] | select(.spec.type == "LoadBalancer") | {name: .metadata.name, namespace: .metadata.namespace, ip: .status.loadBalancer.ingress[0].ip, lb_type: .metadata.annotations."service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type"}'
    ```
    
    The following output is expected:
    
    ```
    {
      "name": "test",
      "namespace": "default",
      "ip": "192.168.*.*",
      "lb_type": "intranet"
    }
    {
      "name": "nginx-ingress-lb",
      "namespace": "kube-system",
      "ip": "47.97.*.*",
      "lb_type": "null"
    }
    ```
    

### How to ensure that a LoadBalancer can gracefully close existing connections when backend servers of a LoadBalancer service are replaced**?**

You can configure connection draining using the service.beta.kubernetes.io/alibaba-cloud-loadbalancer-connection-drain and service.beta.kubernetes.io/alibaba-cloud-loadbalancer-connection-drain-timeout annotations. After a backend server is removed from the service, the LoadBalancer continues to process existing connections within the drain-timeout period. For more information, see [Enable connection draining for a listener](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#d7b802b06cvhj).

## **FAQ about reusing an existing SLB instance**

### **Why does reusing an existing SLB instance fail?**

-   Check the CCM version. CCM versions earlier than v1.9.3.105-gfd4e547-aliyun do not support reusing SLB instances. For more information about how to view and upgrade the CCM version, see [Upgrade the CCM component](/help/en/ack/product-overview/update-the-ccm#section-lkb-uza-33p).
    
-   Check whether the SLB instance that you want to reuse was created by the cluster. You cannot reuse an SLB instance that was created by the cluster.
    
-   Check whether the SLB instance is the SLB instance for the API Server. You cannot reuse the SLB instance for the API Server.
    
-   If you want to reuse a private-facing SLB instance, make sure that the SLB instance and the cluster are in the same VPC. You cannot reuse an SLB instance across VPCs.
    

### **Why is a listener not configured when I reuse an existing SLB instance?**

Check whether the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-force-override-listeners` annotation is set to `"true"`. If this annotation is not configured, a listener is not automatically created.

**Note**

The CCM does not overwrite the listeners of an existing CLB instance due to the following reasons:

-   If the listeners of the CLB instance are associated with applications, service interruptions may occur after the listeners are overwritten.
    
-   The CCM supports limited backend configurations and cannot handle complex configurations. To use complex backend configurations, you can create listeners in the console. The listeners do not overwrite the existing ones.
    

Therefore, we recommend that you do not overwrite the listeners of an existing CLB instance. You can forcibly overwrite the listeners if the ports on which these listeners listen are no longer used.

## **Other questions**

### **What to do if a CCM upgrade fails**

For more information about how to resolve a failed CCM component upgrade, see [Cloud Controller Manager (CCM) upgrade check fails](/help/en/kb-articles/latest/how-can-i-troubleshoot-a-check-failure-that-occurs-before-i-update-the-ccm).

### **Service error messages and solutions**

The following table describes the solutions for different error messages.

**Error message**

**Description and solution**

`The backend server number has reached to the quota limit of this load balancers`

The number of backend servers for the CLB instance has reached the quota limit.

Solution: Optimize your quota usage in one of the following ways:

-   By default, a CLB instance can have up to 200 backend servers attached. You can request a quota increase. To query and increase your quota, log on to the [SLB Quota Management page](https://slb.console.alibabacloud.com/slb/quota).
    
-   Set the external traffic policy of the CLB instance to Local mode by setting `externalTrafficPolicy: Local`. The Cluster mode consumes quotas quickly. When you use the Cluster mode, use the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-backend-label` label to specify the virtual servers to use. This reduces quota consumption. For more information about how to use an annotation to associate backend virtual servers with a label, see [Use annotations to configure a Classic Load Balancer (CLB) instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948).
    
-   When multiple services reuse a CLB instance, the number of backend servers is cumulative. Create a new CLB instance when you create a service.
    

`The loadbalancer does not support backend servers of eni type`

Shared CLB instances do not support ENIs.

Solution: If the CLB backend uses ENIs, you must select a high-performance CLB instance. You can add the `annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec: "slb.s1.small"` annotation to the service.

**Important**

Make sure that the annotation is compatible with your CCM version. For more information about the mapping between annotations and CCM versions, see [Use annotations to configure a Classic Load Balancer (CLB) instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#section-3pu-lhe-9wm).

`There are no available nodes for LoadBalancer`

The CLB instance has no backend servers. Check whether the service is associated with a pod and whether the pod is running as expected.

Solution:

-   If no pod is associated, associate the service with an application pod.
    
-   If the associated pod is abnormal, locate and resolve the pod issue. For more information, see [Troubleshoot pod issues](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).
    
-   If the CLB instance has no backend servers but the pod is running as expected, check whether the pod is on a master node. If it is, evict the application pod to a worker node.
    

-   `alicloud: not able to find loadbalancer named [%s] in openapi, but it's defined in service.loaderbalancer.ingress. this may happen when you removed loadbalancerid annotation`
    
-   `alicloud: can not find loadbalancer, but it's defined in service`
    

The CLB instance cannot be associated based on the service.

Solution: Log on to the [Server Load Balancer console](https://slb.console.alibabacloud.com/slb). In the region where the service resides, search for the CLB instance based on the `EXTERNAL-IP` of the service.

1.  If the CLB instance is not found and the service is no longer needed, delete the service.
    
2.  If the CLB instance exists, perform the following steps:
    
    1.  If the CLB instance was manually created in the CLB console, add the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation to the service. For more information, see [Use annotations to configure a Classic Load Balancer (CLB) instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948).
        
    2.  If the CLB instance was automatically created by CCM, check whether the Service has the `kubernetes.do.not.delete` label. If not, add the label. For more information, see [How do I rename an SLB instance if I am using an earlier version of CCM?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-61e-9ty-sgk).
        

`ORDER.ARREARAGE Message: The account is arrearage.`

Your account has an overdue payment.

`PAY.INSUFFICIENT_BALANCE Message: Your account does not have enough balance.`

Your account balance is insufficient.

`Status Code: 400 Code: Throttlingxxx`

The CLB OpenAPI is being throttled.

Solution:

1.  Log on to the [SLB Quota Management page](https://slb.console.alibabacloud.com/slb/quota) to view and ensure that your CLB quota is sufficient.
    
2.  Run the following command to check whether the cluster service has an error. If an error exists, resolve the event as described in this table.
    
    ```
    kubectl -n {your-namespace} describe svc {your-svc-name}
    ```
    

`Status Code: 400 Code: RspoolVipExist Message: there are vips associating with this vServer group.`

The listener associated with the vServer group cannot be deleted.

Solution:

1.  Check whether the annotation in the service contains the ID of the CLB instance, for example, `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id: {your-clb-id}`.
    
    If the annotation contains the CLB instance ID, the CLB instance is reused.
    
2.  In the CLB console, delete the listener that corresponds to the port in the service. For more information about how to delete a CLB listener, see [Configure listener forwarding rules](/help/en/slb/application-load-balancer/user-guide/manage-forwarding-rules-for-a-listener#task-2021459).
    

`Status Code: 400 Code: NetworkConflict`

This error occurs if you reuse an internal-facing CLB instance that is not in the same VPC as the cluster.

Solution: Make sure that your CLB instance and cluster are in the same VPC.

`Status Code: 400 Code: VSwitchAvailableIpNotExist Message: The specified VSwitch has no available ip.`

The number of available IP addresses in the vSwitch is insufficient.

Solution: Use `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-vswitch-id: "${YOUR_VSWITCH_ID}"` to specify another vSwitch in the same VPC.

`The specified Port must be between 1 and 65535.`

The ENI mode does not support a string value for `targetPort`.

Solution: Change the value of the `targetPort` field in the service YAML file to an integer, or upgrade CCM. For more information about how to upgrade CCM, see [Upgrade the CCM component](/help/en/ack/product-overview/update-the-ccm#section-lkb-uza-33p).

`Status Code: 400 Code: ShareSlbHaltSales Message: The share instance has been discontinued.`

Earlier versions of CCM create shared CLB instances by default. However, shared CLB instances are discontinued.

Solution: [Upgrade the CCM component](/help/en/ack/product-overview/update-the-ccm#section-lkb-uza-33p).

`can not change ResourceGroupId once created`

The resource group of a CLB instance cannot be changed after the instance is created.

Solution: Remove the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-resource-group-id:"rg-xxxx"` annotation from the service.

`can not find eniid for ip x.x.x.x in vpc vpc-xxxx`

The specified ENI IP address cannot be found in the VPC.

Solution: Check whether the `service.beta.kubernetes.io/backend-type: eni` annotation is configured in the service. If it is, check whether the cluster network plugin is Flannel. The Flannel network mode does not support the ENI mode. If this is the case, remove the annotation from the service.

-   `The operation is not allowed because the instanceChargeType of loadbalancer is PayByCLCU.`
    
-   `User does not have permission modify InstanceChargeType to spec.`
    

The billing method of the CLB instance cannot be changed from pay-as-you-go to pay-by-specification.

Solution:

-   Remove the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec` annotation from the service.
    
-   If the service contains the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-instance-charge-type` annotation, set its value to `PayByCLCU`.
    

`SyncLoadBalancerFailed the loadbalancer xxx can not be reused, can not reuse loadbalancer created by kubernetes.`

This error occurs when a CLB instance created by CCM is reused.

Solution:

1.  View the CLB ID that corresponds to the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation in the service YAML file.
    
2.  Resolve the error based on the service status.
    
    -   If the Service is in the pending state, replace the CLB ID in the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation with the ID of a CLB instance that you manually created in the [Classic Load Balancer (CLB) console](https://slb.console.alibabacloud.com/slb).
        
    -   If the service is not in the pending state, perform the following steps:
        
        -   If the IP address of the CLB instance is the same as the external IP address of the service, delete the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation.
            
        -   If the IP address of the CLB instance does not match the external IP address of the Service, log on to the [Classic Load Balancer (CLB) console](https://slb.console.alibabacloud.com/slb). In the cluster's region, find the corresponding CLB instance based on the external IP address of the Service, and then change the CLB ID in the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation. If you cannot find the corresponding CLB instance, change the CLB ID in the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation to the ID of a CLB instance that you manually created in the CLB console, and then recreate the Service.
            

`alicloud: can not change LoadBalancer AddressType once created. delete and retry`

The type of a CLB instance cannot be changed after the instance is created. This error occurs if you change the CLB type after you create the service.

Solution: Delete and recreate the service.

`the loadbalancer lb-xxxxx can not be reused, service has been associated with ip [xxx.xxx.xxx.xxx], cannot be bound to ip [xxx.xxx.xxx.xxx]`

The service is already attached to a CLB instance and cannot be attached to another one.

Solution: You cannot reuse an existing CLB instance by changing the CLB ID in the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation. To change the attached CLB instance, you must delete and recreate the service.

### **How to configure a listener for a NodePort service**

CCM supports configuring listeners only for LoadBalancer services. You need to change the service type from NodePort to LoadBalancer.

### **How to access a NodePort service**

-   To access the Service from within the cluster (on a cluster node), you can use **ClusterIP + Port** or **Node IP + Service NodePort**. The default port number exposed by a NodePort Service is greater than 30000.
    
-   To access the Service from outside the cluster (outside the cluster nodes), you can use **the node IP address and the NodePort of the Service**. The default port number exposed by a NodePort Service is greater than 30000.
    
-   To access the service from outside the VPC (from another VPC or the Internet), you need to expose a LoadBalancer service and then access the service through its external endpoint.
    
    **Note**
    
    If you set the external traffic policy of your service to Local, make sure that the node you access hosts a backend pod of the service. For more information about external traffic policies, see [External traffic policies: Local and Cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-management/#section-qr2-2yu-zk9).
    

### **How to correctly configure the NodePort range**

In Kubernetes, the API Server provides the ServiceNodePortRange parameter ( `--service-node-port-range` command-line parameter). This parameter limits the range of NodePorts that NodePort or LoadBalancer services can listen on. The default value is 30000 to 32767. In an ACK Pro cluster, you can modify this port range by customizing the parameters of the control plane. For more information, see [Customize the parameters of the control plane for an ACK Pro cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-ack-pro-control-plane-component-parameters-1693464061811).

-   You must be very careful when you modify the NodePort range. Make sure that the NodePort range does not conflict with the port range specified by the `net.ipv4.ip_local_port_range` kernel parameter on the cluster nodes. The `ip_local_port_range` kernel parameter controls the range of local port numbers that any application on the Linux system can use. The default value of `ip_local_port_range` is 32768 to 60999.
    
-   With the default configurations of your ACK cluster, the ServiceNodePortRange parameter and the `ip_local_port_range` parameter do not conflict. If you have previously adjusted either of these parameters to increase the port limit, causing their ranges to overlap, sporadic network exceptions may occur on the nodes. In severe cases, this can lead to business health check failures and offline cluster nodes. We recommend that you restore the default values or adjust both port ranges so that they do not overlap at all.
    
-   After you adjust the port range, some NodePort or LoadBalancer services in the cluster may still use ports within the `ip_local_port_range` parameter's range as NodePorts. You need to reconfigure these services to avoid conflicts. You can run the `kubectl edit <service-name>` command to directly change the value of the `spec.ports.nodePort` field to an unused NodePort.
    

### How to add required permissions when you upgrade the CCM component to a later version in an ACK dedicated cluster

To improve performance, later versions of CCM gradually introduce Alibaba Cloud APIs that require additional RAM permissions (for example, v2.11.2 for route management in Flannel networks and v2.12.1 for batch management of NLB).

Therefore, if you want to upgrade the component to v2.11.2 or later in an ACK dedicated cluster, you must grant the required permissions to its RAM role before the upgrade to ensure that the component works as expected.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster and click its name. In the navigation pane on the left, click **Cluster Information**.
    
3.  Click the **Basic Information** tab, then click the role name for **Master RAM Role**.
    
4.  On the role details page in the Resource Access Management console, click **Permissions** > **Policies** in the navigation panel on the left, find the custom policy that starts with `k8sMasterRolePolicy-Ccm-` in the policy list, and click the policy name to go to the access policy management page.
    
    > For clusters that were created at an earlier time, the policy may not exist. You can select a custom policy whose name starts with `k8sMasterRolePolicy-`.
    
5.  Click **Edit Policy Document** and add the `nlb:ListAsynJobs` permission to the NLB permissions.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8775822671/p1022925.png)
    

If you use a Flannel cluster, you must also add the `vpc:CreateRouteEntries` and `vpc:DeleteRouteEntries` permissions to the VPC-related permissions.

![p976639](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8775822671/p1022924.png)

After you add the permissions, submit the policy as prompted on the page. After the changes are saved, you can upgrade the CCM component.

## References

If this document does not solve your problem, see [Troubleshoot service-related issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-troubleshooting-2#task-2179344) to further investigate the cause of the issue.
