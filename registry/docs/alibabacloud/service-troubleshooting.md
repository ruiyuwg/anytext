This topic describes the procedure for diagnosing LoadBalancer Services and how to troubleshoot errors.

## Background information

When the type of a Service is set to `Type=LoadBalancer`, the cloud controller manager (CCM) of Container Service for Kubernetes (ACK) automatically creates or configures Server Load Balancer (SLB) resources for the Service, including an SLB instance, listeners, and backend server groups. For more information about the policies that are used to automatically update SLB resources, see [Considerations for configuring a LoadBalancer Service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#section-sm9-gly-kmn).

## Procedure

Make sure that the CCM version is 1.9.3.276-g372aa98-aliyun or later before troubleshooting. For more information about how to update the CCM, see [Update the CCM](/help/en/ack/product-overview/update-the-ccm#section-lkb-uza-33p). For more information about the release notes of the CCM, see [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager#concept-wk1-grd-qfb).

![Service troubleshooting process](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3937796461/p392947.png)

1.  Run the following command to query the Service that is associated with the SLB instance:
    
    ```
    kubectl get svc -A |grep -i LoadBalancer|grep ${XXX.XXX.XXX.XXX}  #XXX.XXX.XXX.XXX is the IP address of the SLB instance.
    ```
    
2.  Run the following command to check whether events are generated for Service errors:
    
    ```
    kubectl -n {your-namespace} describe svc {your-svc-name}
    ```
    
    **Important**
    
    If no events are generated for Service errors, check whether the CMM version is 1.9.3.276-g372aa98-aliyun or later. For more information about how to update the CCM, see [Update the CCM](/help/en/ack/product-overview/update-the-ccm#section-lkb-uza-33p).
    
    -   If events are generated for Service errors, refer to [Service errors and solutions](#section-lzw-o22-ajy).
        
    -   If no events are generated for Service errors, refer to [Troubleshooting](#section-pbd-avq-kbo).
        
3.  If the issue persists, [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

## Service errors and solutions

The following table describes how to fix the errors that occur in Services.

**Error message**

**Description and solution**

`The backend server number has reached to the quota limit of this load balancers`

The quota of backend servers is insufficient.

Solution: You can use the following methods to resolve this issue.

-   By default, you can associate up to 200 backend servers with each SLB instance. To request a quota increase, submit a ticket. For more information about how to query and increase the quota, go to the [Quota Management page in the SLB console](https://slb.console.alibabacloud.com/slb/quota).
    
-   We recommend that you set externalTrafficPolicy of the SLB instance to Local (`externalTrafficPolicy: Local`). The system may create a large number of backend servers in Cluster mode. If you want to use the Cluster mode, we recommend that you use the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-backend-label` label to specify the vServers that you want to use. This reduces the number of vServer groups that are required. For more information about how to associate backend servers with an SLB instance by using the preceding label, see [Add annotations to the YAML file of a Service to configure CLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948).
    
-   If multiple Services share an SLB instance, all backend servers used by the Services are counted. We recommend that you create an SLB instance for each Service.
    

`The loadbalancer does not support backend servers of eni type`

Shared-resource SLB instances do not support elastic network interfaces (ENIs).

Solution: If you want to specify an ENI as a backend server, create a high-performance SLB instance. Add the `annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec: "slb.s1.small"` annotation to the Service.

**Important**

Make sure that the annotations that you add meet the requirements of the CCM version. For more information about the correlation between annotations and CCM versions, see [Common annotations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#section-3pu-lhe-9wm).

`There are no available nodes for LoadBalancer`

No backend server is associated with the SLB instance. Check whether pods are associated with the Service and whether the pods run as normal.

Solution:

-   If no pod is associated with the Service, associate application pods with the Service.
    
-   If the associated pods do not run as normal, refer to [Pod troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029) and troubleshoot the issue.
    
-   If no backend server is associated with the SLB instance, but the pods run as normal, check whether the pods are deployed on master nodes. If the pods are deployed on master nodes, evict the pods to worker nodes. If the pods are not deployed on master nodes, [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

-   `alicloud: not able to find loadbalancer named [%s] in openapi, but it's defined in service.loaderbalancer.ingress. this may happen when you removed loadbalancerid annotation`
    
-   `alicloud: can not find loadbalancer, but it's defined in service`
    

The system fails to associate a Service with the SLB instance.

Solution: Log on to the [SLB console](https://slb.console.alibabacloud.com/slb) and search for the SLB instance in the region of the Service based on the `EXTERNAL-IP`.

1.  If the SLB instance does not exist and the Service is no longer used, delete the Service.
    
2.  If the SLB instance exists, perform the following steps:
    
    1.  If the SLB instance is created in the SLB console, add the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation to the Service. For more information, see [Add annotations to the YAML file of a Service to configure CLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948).
        
    2.  If the SLB instance is automatically created by the CCM, check whether the **kubernetes.do.not.delete** label is added to the SLB instance. If the label is not added to the SLB instance, add the label to the SLB instance. For more information, see [How do I rename an SLB instance when the CCM version is V1.9.3.10 or earlier?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-61e-9ty-sgk)
        

`ORDER.ARREARAGE Message: The account is arrearage.`

Your account has overdue payments.

`PAY.INSUFFICIENT_BALANCE Message: Your account does not have enough balance.`

The account balance is insufficient.

`Status Code: 400 Code: Throttlingxxx`

API throttling is triggered for SLB.

Solution:

1.  Go to the [Quota Management page in the SLB console](https://slb.console.alibabacloud.com/slb/quota) and check whether the SLB resource quotas are sufficient.
    
2.  Run the following command to check whether errors occur in the Service. If errors occur in the Service, refer to the information provided in this table to troubleshoot the errors.
    
    ```
    kubectl -n {your-namespace} describe svc {your-svc-name}
    ```
    

`Status Code: 400 Code: RspoolVipExist Message: there are vips associating with this vServer group.`

The listener that is associated with the vServer group cannot be deleted.

Solution:

1.  Check whether the annotation of the Service contains the ID of the SLB instance. Example: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id: {your-slb-id}`.
    
    If the annotation of the Service contains the ID of the SLB instance, the SLB instance is reused.
    
2.  Log on to the SLB console and delete the listener that uses the Service port. For more information about how to delete listeners for an SLB instance, see [Manage forwarding rules for a listener](/help/en/slb/application-load-balancer/user-guide/manage-forwarding-rules-for-a-listener#task-2021459).
    

`Status Code: 400 Code: NetworkConflict`

The reused internal-facing SLB instance and the cluster are not deployed in the same virtual private cloud (VPC).

Solution: Make sure that your SLB instance and the cluster are deployed in the same VPC.

`Status Code: 400 Code: VSwitchAvailableIpNotExist Message: The specified VSwitch has no available ip.`

The idle IP addresses in the vSwitch are insufficient.

Solution: Use `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-vswitch-id: "${YOUR_VSWITCH_ID}"` to specify another vSwitch in the same VPC.

`The specified Port must be between 1 and 65535.`

The `targetPort` field does not support STRING type values in ENI mode.

Solution: Set the `targetPort` field in the Service YAML file to a value of the INTEGER type or update the CCM. For more information about how to update the CCM, see [Update the CCM](/help/en/ack/product-overview/update-the-ccm#section-lkb-uza-33p).

`Status Code: 400 Code: ShareSlbHaltSales Message: The share instance has been discontinued.`

By default, earlier versions of CCM automatically create shared-resource SLB instances, which are no longer available for purchase.

Solution: [Update the CCM](/help/en/ack/product-overview/update-the-ccm#section-lkb-uza-33p).

`can not change ResourceGroupId once created`

You cannot modify the resource group of an SLB instance after the resource group is created.

Solution: Delete the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-resource-group-id:"rg-xxxx"` annotation from the Service.

`can not find eniid for ip x.x.x.x in vpc vpc-xxxx`

The specified IP address of the ENI cannot be found in the VPC.

Solution: Check whether the `service.beta.kubernetes.io/backend-type: eni` annotation is added to the Service. If the annotation is added to the Service, check whether Flannel is used as the network plug-in of the cluster. If Flannel is used, delete the annotation from the Service. Flannel does not support the ENI mode.

-   `The operation is not allowed because the instanceChargeType of loadbalancer is PayByCLCU.`
    
-   `User does not have permission modify InstanceChargeType to spec.`
    

You cannot change the billing method of the SLB instance used by a Service from pay-as-you-go to pay-by-specification.

Solution:

-   Delete the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec` annotation from the Service.
    
-   If `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-instance-charge-type` is added to the Service, set the value to `PayByCLCU`.
    

`SyncLoadBalancerFailed the loadbalancer xxx can not be reused, can not reuse loadbalancer created by kubernetes.`

The SLB instance created by the CCM is reused.

Solution:

1.  Check the YAML file of the related Service and record the SLB instance ID in the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation.
    
2.  Troubleshoot the issue based on the status of the Service.
    
    -   If the Service is in the Pending state, change the value of the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation to the ID of an SLB instance that is manually created in the [CLB console](https://slb.console.alibabacloud.com/slb).
        
    -   If the Service is not in the Pending state, perform the following operations:
        
        -   If the IP address of the SLB instance is the same as the external IP addresses of the Service, delete the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation.
            
        -   If the IP address of the SLB instance is different from the external IP addresses of the Service, log on to the [CLB console](https://slb.console.alibabacloud.com/slb), select the region in which the cluster resides, find the SLB instances based on the external IP of the Service, and then change the value of the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation to the ID of a manually created SLB instance. If no corresponding SLB instance is found, change the value of the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation to the ID of an SLB instance that is manually created in the SLB console. Then, recreate the Service.
            

`alicloud: can not change LoadBalancer AddressType once created. delete and retry`

You cannot change the type of an SLB instance after it is created.

Solution: Recreate the related Service.

`the loadbalancer lb-xxxxx can not be reused, service has been associated with ip [xxx.xxx.xxx.xxx], cannot be bound to ip [xxx.xxx.xxx.xxx]`

You cannot associate an SLB instance with a Service that is already assocaited with another SLB instance.

Solution: You cannot reuse an existing SLB instance by modifying the value of the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation. To change the SLB instance that is associated with a Service, you must delete and recreate the Service.

## Troubleshooting

You can refer to the information provided in the following table to troubleshoot errors other than Service errors.

**Category**

**Issue**

**Solution**

Issues that occur when you access an SLB instance

The SLB instance does not evenly distribute traffic.

[The SLB instance does not evenly distribute traffic](#1)

The 503 error occurs when I access the SLB instance during application updates.

[The 503 error occurs when I access the SLB instance during application updates](#2)

The SLB instance cannot be accessed from within the cluster.

[The SLB instance cannot be accessed from within the cluster](#3)

The SLB instance cannot be accessed from outside the cluster.

[The SLB instance cannot be accessed from outside the cluster](#4437a37022v5v)

The `The plain HTTP request was sent to HTTPS port` error occurs when a request is sent to an HTTPS port

[Why do I fail to access backend HTTPS services?](#4)

Issues related to SLB configurations

The annotations of the Service do not take effect.

[What do I do if the annotations of a Service do not take effect?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-slc-3sk-7vf)

The configuration of the SLB instance is modified.

[Why is the configuration of an SLB instance modified?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-g0s-3ac-8p8)

The system fails to reuse an existing SLB instance.

[Why does the system fail to use an existing SLB instance for more than one Services?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#test)

No listener is created when an existing SLB instance is reused.

[Why is no listener created when I reuse an existing SLB instance?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-a33-ozj-j1k)

The endpoint of the Service is different from that specified for the backend server of the SLB instance.

[What do I do if the vServer groups of an SLB instance are not updated?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-nmr-gvy-po3)

Issues related to SLB deletion

The SLB instance is deleted.

[When is the SLB instance automatically deleted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-nff-cbv-3de)

The SLB instance is not deleted together with the Service.

[When is the SLB instance automatically deleted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-nff-cbv-3de)

### The SLB instance does not evenly distribute traffic

**Cause**

The scheduling algorithm specified for the SLB instance is improper.

**Issue**

Traffic is not evenly distributed to the backend servers of an SLB instance.

**Solution**

-   If you set `externalTrafficPolicy: Local` for a Service, set the scheduling algorithm of the SLB instance to Weighted Round-Robin (WRR) by adding the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-scheduler:"wrr"` annotation to the Service.
    
-   If long-lived connections are established to your Service, set the scheduling algorithm of the SLB instance to Weighted Least Connections (WLC) by adding the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-scheduler:"wlc"` annotation.
    

### The 503 error occurs when I access the SLB instance during application updates

**Cause**

Connection draining is not configured for the SLB listener or graceful shutdown is not configured for the pod.

**Issue**

The 503 error occurs when you access the SLB instance during application updates.

**Solution**

1.  Add the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-connection-drain` annotation to configure connection training for the SLB listener. For more information about the annotation, see [Common operations to manage listeners](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#section-ynz-cbo-l0h).
    
2.  Set the `preStop` and `readinessProbe` parameters for the pod based on the network mode of the pod.
    
    -   `readinessProbe` checks whether the container is ready to accept network traffic. The pod is added to the endpoint only if the pod passes the readiness probing. The node is attached to the SLB instance only if ACK identifies that the endpoint is updated. You must set a proper probing interval, delay period, and unhealthy threshold for `readinessProbe` because some applications may require a long time period to start. If you specify a short time period, the application pods repeatedly restart.
        
    -   We recommend that you set the value of `preStop` to a time period that the application pods require to handle the remaining requests. We recommend that you set the value of `terminationGracePeriodSeconds` to a time period that is 30 seconds longer than `preStop`.
        
    
    Pod configuration example:
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
      namespace: default
    spec:
      containers:
      - name: nginx
        image: nginx
        # Liveness probing
        livenessProbe:
          failureThreshold: 3
          initialDelaySeconds: 30
          periodSeconds: 30
          successThreshold: 1
          tcpSocket:
            port: 5084
          timeoutSeconds: 1
        # Readiness probing
        readinessProbe:
          failureThreshold: 3
          initialDelaySeconds: 30
          periodSeconds: 30
          successThreshold: 1
          tcpSocket:
            port: 5084
          timeoutSeconds: 1
        # Graceful shutdown
        lifecycle:
          preStop:
            exec:
              command:
              - sleep
              - 30
      terminationGracePeriodSeconds: 60
    ```
    

### The SLB instance cannot be accessed from within the cluster

**Cause**

`externalTrafficPolicy: Local` is set for the LoadBalancer. In Local mode, the IP address of the LoadBalancer is accessible only from pods that are provisioned on the local node (the node that runs the LoadBalancer). The IP address of the LoadBalancer is inaccessible from pods on other nodes in the cluster. The IP address of the LoadBalancer is external to the Kubernetes cluster. If nodes or pods in the ACK cluster cannot access the IP address without using a second hop, requests do not pass through the LoadBalancer. As a result, the IP address of the LoadBalancer is considered an extended IP address of the Service that uses the LoadBalancer. Requests are forwarded by kube-proxy based on iptables or IP Virtual Server (IPVS).

In this scenario, if the requested pod is not provisioned on the local node, a connectivity issue occurs. The IP address of the LoadBalancer is accessible only if the requested pod is provisioned on the local node. For more information, see [Why kube-proxy add external-lb's address to node local iptables rule?](https://github.com/kubernetes/kubernetes/issues/66607?spm=a2c4g.171437.0.0.62e175f4OloUv5).

**Issue**

The SLB instance cannot be accessed from within the cluster.

**Solution**

-   Use the cluster IP or Ingress name.
    
    The Ingress name is `nginx-ingress-lb.kube-system`.
    
-   Set externalTrafficPolicy of the LoadBalancer Service to Cluster. However, client source IP addresses cannot be preserved in this case. You need to run the following command to modify the Ingress.
    
    **Note**
    
    If the SLB instance is used by the Ingress, only the pods on the node that hosts the Ingress pod can access the Services exposed by the Ingress or SLB instance.
    
    ```
    kubectl edit svc nginx-ingress-lb -n kube-system
    ```
    
-   If the cluster uses Terway in ENI mode, set externalTrafficPolicy of the LoadBalancer Service to Cluster and add an annotation in the following format, such as `annotation: service.beta.kubernetes.io/backend-type:"eni"`, to directly access the ENI. This way, client source IP addresses can be preserved and the SLB instance can be accessed from within the cluster. For more information, see [Add annotations to the YAML file of a Service to configure CLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances).
    
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
    

### The SLB instance cannot be accessed from outside the cluster

**Cause**

You configured access control list (ACL) rules for the SLB instance or the SLB instance does not run as normal.

**Issue**

You cannot access the SLB instance from outside the cluster.

**Solution**

1.  Run the following command to query Service events and troubleshoot errors. For more information, see [Service errors and solutions](#section-lzw-o22-ajy).
    
    ```
    kubectl -n {your-namespace} describe svc {your-svc-name}
    ```
    
2.  Check whether ACL rules are configured for the SLB instance.
    
    If ACL rules are configured for the SLB instance, check whether the client IP address is allowed to access the SLB instance. For more information about how to configure ACL rules for an SLB instance, see [Access control overview](/help/en/slb/classic-load-balancer/user-guide/overview-3#concept-2167216).
    
3.  Check whether the SLB instance is associated with a vServer group.
    
    If no vServer group is associated, check whether the application pods are associated with the Service and whether the application pods run as normal. If the application pods do not run as normal, identify the causes and troubleshoot the errors. For more information, see [Pod troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).
    
4.  Check whether unhealthy backend servers are detected by the SLB listeners.
    
    If unhealthy backend servers are detected, check whether the application pods run as normal. For more information about health checks for SLB, see [Execute a health check script](/help/en/doc-detail/144164.html#task-2334619).
    
5.  If the issue persists, [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

### Backend HTTPS services cannot be accessed

**Cause**

After you specify the certificate information in the SLB instance, the SLB instance decrypts HTTPS requests and then sends HTTP requests to the backend pods.

**Issue**

You cannot access backend HTTPS services.

**Solution**

Set targetPort to an HTTP port in the Service. targetPort specifies the port to which the HTTPS port is mapped. For example, the HTTPS port is 443 in the following NGINX Service. In this case, you must change the value of `targetPort` to `80`.

Example:

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "https:443"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id: "${YOUR_CERT_ID}"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  - port: 443
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

## References

-   [Service FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#task-2039653)
    
-   [Add annotations to the YAML file of a Service to configure CLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948)
    
-   [Considerations for configuring a LoadBalancer Service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#task-1941987)
