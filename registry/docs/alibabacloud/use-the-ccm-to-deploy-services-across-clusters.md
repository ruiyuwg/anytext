To enhance disaster recovery capabilities, reliability, or security isolation, you can deploy Services across clusters. In this scenario, if all backend Services are of the LoadBalancer type, multiple Server Load Balancer (SLB) instances are used, which causes resource waste. You can use the cloud-controller-manager component to mount an existing SLB instance to endpoints inside a cluster and outside the cluster. This enables you to expose Services in different clusters with a single SLB instance and set the weights of the Services.

## Prerequisites

-   A [Classic Load Balancer (CLB) instance](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances#task-ctx-xsm-vdb) or [Network Load Balancer (NLB) instance](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance) is created in the region of your Container Service for Kubernetes (ACK) cluster.
    
-   The [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager) component is installed in the cluster and meets the following version requirement. To update, see [Manage components](/help/en/ack/manage-system-components).
    
    -   CLB instances: v2.0.1 or later
        
    -   NLB instances: v2.9.1 or later
        
-   A kubectl client is connected to the ACK cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    

## Scenario 1: Distribute traffic to a Service in the cluster and an endpoint outside the cluster

To do this, you can mount a Service in the cluster and an endpoint outside the cluster, such as an Elastic Compute Service (ECS) instance, to the same SLB instance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7566972471/CAEQLBiBgIDs28.viBkiIGEyMzM1NjM5NzI1ZDRkN2NiOTUwMWVhMjRjZTMzNjkz4454325_20240625161157.419.svg)

1.  Log on to the [CLB console](https://slb.console.alibabacloud.com/slb) or [NLB console](https://slb.console.alibabacloud.com/nlb) and view the ID of an existing SLB instance.
    
2.  Select the SLB instance when you create a Service.
    
    ## Use the console
    
    When you create a Service in the [ACK console](https://cs.console.alibabacloud.com), set **Service Type** to **SLB** and select **Use Existing Resource**. Then, select the SLB instance from the drop-down list and select **Overwrite Existing Listeners**.
    
    ## Use kubectl
    
    When you use kubectl to create a Service, add an annotation to specify the ID of the SLB instance.
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      annotations:
        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id: ${LB_ID} # Replace ${LB_ID} with the ID of the SLB instance. 
        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-force-override-listeners: "true"  # Set the value to true to automatically create listeners and vServer groups. 
      labels:
        #...
      name: #...
    spec:
      #...
    ```
    
    **Important**
    
    After the Service is created, cloud-controller-manager creates a vServer group and a listener that is associated with the vServer group and listens on the Service port for the SLB instance.
    
3.  Log on to the [CLB console](https://slb.console.alibabacloud.com/slb) or [NLB console](https://slb.console.alibabacloud.com/nlb). Add an endpoint outside the cluster to the vServer group. For more information, see [Create and manage a CLB vServer group](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-a-vserver-group) and [Create and manage a vServer group](/help/en/slb/network-load-balancer/user-guide/create-and-manage-a-server-group).
    
    After you complete the configuration, you can find pods and the external endpoint in the vServer group and set their weights. When a scaling activity is triggered, pods are automatically added to or removed from the vServer group. Scaling activities do not affect the external endpoint.
    

## Scenario 2: Distribute traffic to Services in different ACK clusters

You can mount Services in different ACK clusters to the same SLB instance. The SLB instance serves as a unified ingress.

To automatically update the endpoints of the SLB instance when the backend pods of the Services are changed, you must configure the Services to use the same listener and vServer group of the SLB instance. To do this, you need to manually create a listener and vServer group for the SLB instance, and configure the Services to reuse the vServer group and the listener to listen on the Service port.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7566972471/CAEQLBiBgIDZpP.xiBkiIDRiNGVkMTMzNmMzMTRjNTdiMjlhZDEzMzk0Y2RlNmRl4454325_20240710163504.949.svg)

**Important**

-   The Services in different ACK clusters must use the same port.
    
-   The Services must have different names if they are deployed in the same namespace.
    

1.  Log on to the [CLB console](https://slb.console.alibabacloud.com/slb) or [NLB console](https://slb.console.alibabacloud.com/nlb) and create a listener and vServer group for the SLB instance. For more information, see [CLB listeners](/help/en/slb/classic-load-balancer/user-guide/listener-overview/), [Create and manage a CLB vServer group](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-a-vserver-group), [NLB listeners](/help/en/slb/network-load-balancer/user-guide/overview-of-nlb-listeners/), and [Create and manage a server group](/help/en/slb/network-load-balancer/user-guide/create-and-manage-a-server-group).
    
2.  When you create Services, reuse the vServer group that you manually created.
    
    To do this, add annotations to the Services to specify the IDs of the SLB instance and vServer group. You can also set the weights of the Services.
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      annotations:
        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id: "${YOUR_LB_ID}" # Replace ${YOUR_LB_ID} with the ID of the SLB instance. 
        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-vgroup-port: "${YOUR_VGROUP_ID}:{PORT}" # Replace ${YOUR_VGROUP_ID} with the ID of the vServer group and {PORT} with the port of the Service. 
        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-weight: "100" # This annotation is optional. This annotation specifies the weights of the backend pods of the Service. Valid values: 1 to 1000. Default value: 100. 
      labels:
        #...
      name: #...
    spec:
      #...
    ```
    
    **Note**
    
    If you want to set `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-vgroup-port` to multiple port-to-vServer group mappings, separate the mappings with commas (,). Example: "${YOUR\_VGROUP\_ID\_1}:80, ${YOUR\_VGROUP\_ID\_2}:443".
    
    After you complete the configuration, you can find the pods of the Services in the vServer group in the [SLB console](https://slb.console.alibabacloud.com/overview). If an application is scaled, pods are automatically added to or removed from the vServer group for the application. Pods that belong to other applications are not affected.
    
    **Important**
    
    If you have set the weights of the Services by adding the corresponding annotation, do not modify the weights in the console because the changes cannot be synchronized to the Services.
    

## **References**

-   For more information about annotations, see [Use annotations to configure CLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances) and [Use annotations to configure NLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nlb-instances-by-using-annotations).
    
-   For more information about the release notes for the cloud-controller-manager component, see [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager#concept-wk1-grd-qfb).
