This topic describes how to diagnose and troubleshoot LoadBalancer service issues.

## Background information

When you set the service type to`Type=LoadBalancer`, the ACK Cloud Controller Manager (CCM) component automatically creates or configures an Alibaba Cloud Classic Load Balancer (CLB) instance for the service. This includes resources such as the CLB instance, listeners, and backend server groups. For more information about the automatic update policy for CLB, see [Notes on Server Load Balancer configurations for services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#section-sm9-gly-kmn).

## Diagnostic process

Ensure that your CCM component version is V1.9.3.276-g372aa98-aliyun or later. For more information about how to upgrade the CCM component, see [Upgrade the CCM component](/help/en/ack/product-overview/update-the-ccm#section-lkb-uza-33p). For the release notes of CCM, see [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager#concept-wk1-grd-qfb).

1.  Run the following command to identify the service associated with the CLB instance.
    
    ```
    kubectl get svc -A |grep -i LoadBalancer|grep {XXX.XXX.XXX.XXX}  # XXX.XXX.XXX.XXX is the load balancer IP address.
    ```
    
2.  Run the following command to check whether the service has error events.
    
    ```
    kubectl -n {your-namespace} describe svc {your-svc-name}
    ```
    
    -   If error events exist, see [Service error events and solutions](#section-lzw-o22-ajy).
        
    -   If no error events exist, see [Troubleshooting methods](#section-pbd-avq-kbo).
        

## Service error events and solutions

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

## Troubleshooting methods

For issues that are not service errors, troubleshoot them as described in the following table.

**Issue category**

**Symptom**

**Solution**

CLB access issues

Uneven load distribution across CLB backends

[Uneven load distribution across CLB backends](#1)

A 503 error occurs when you access the CLB instance during an application update

[A 503 error occurs when you access the CLB instance during an application update](#2)

The CLB instance cannot be accessed from within the cluster

[The CLB instance cannot be accessed from within the cluster](#3)

The CLB instance cannot be accessed from outside the cluster

[The CLB instance cannot be accessed from outside the cluster](#4437a37022v5v)

An error "`The plain HTTP request was sent to HTTPS port`" occurs when you access an HTTPS port

[Cannot connect to the backend HTTPS service](#4)

Configuration class for CLB

Service annotations do not take effect

[What do I do if service annotations do not take effect?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-slc-3sk-7vf)

The CLB configuration is modified

[Why is the configuration of my CLB instance modified?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-g0s-3ac-8p8)

Reusing an existing CLB instance does not take effect

[Service FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#test)

No listener is configured when an existing CLB instance is reused

[Why is no listener configured when I reuse an existing CLB instance?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-a33-ozj-j1k)

Inconsistent CLB backends

[What do I do if the SLB vServer group is not updated?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-nmr-gvy-po3)

CLB deletion issues

The CLB instance is deleted

[When is an SLB instance automatically deleted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-nff-cbv-3de)

The CLB instance is not deleted after the service is deleted

[When is an SLB instance automatically deleted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-nff-cbv-3de)

### Uneven load distribution across CLB backends

**Cause**

The scheduling algorithm of the CLB instance is not properly configured.

**Symptom**

The load is unevenly distributed across the backend servers of the CLB instance.

**Solution**

-   For a service in Local mode (`externalTrafficPolicy: Local`), set the CLB scheduling algorithm to weighted round-robin. You can do this by adding the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-scheduler:"wrr"` annotation to the service.
    
-   If your application uses persistent connections, the load may be unbalanced because multiple requests are sent over each connection. In this case, set the CLB scheduling algorithm to weighted least connections by adding the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-scheduler:"wlc"` annotation to the service.
    

### A 503 error occurs when you access the CLB instance during an application update

**Cause**

Connection draining is not configured for the CLB listener, or graceful termination is not configured for the pod.

**Symptoms**

When you access the CLB instance during an application update, a 503 error is returned.

**Solution**

1.  Use annotations such as `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-connection-drain` to configure connection draining for the CLB listener. For more information about the annotations, see [Common operations to manage listeners](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#section-ynz-cbo-l0h).
    
2.  Configure `preStop` and `readinessProbe` for the pod based on your container network mode.
    
    -   `readinessProbe` is a readiness probe. A pod is added to an Endpoint only after the pod passes the readiness probe. After ACK detects a change in the Endpoint, it attaches the node to the backend of the CLB instance. You must properly configure the probe frequency, delay, and unhealthy threshold for the `readinessProbe`. Some applications take a long time to start. If the timeout period is too short, the pod may restart repeatedly.
        
    -   Set the `preStop` period to the time required for the application to process all remaining requests. Set the `terminationGracePeriodSeconds` period to a value that is at least 30 seconds longer than the `preStop` period.
        
    
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
        # Liveness probe
        livenessProbe:
          failureThreshold: 3
          initialDelaySeconds: 30
          periodSeconds: 30
          successThreshold: 1
          tcpSocket:
            port: 5084
          timeoutSeconds: 1
        # Readiness probe
        readinessProbe:
          failureThreshold: 3
          initialDelaySeconds: 30
          periodSeconds: 30
          successThreshold: 1
          tcpSocket:
            port: 5084
          timeoutSeconds: 1
        # Graceful exit
        lifecycle:
          preStop:
            exec:
              command:
              - sleep
              - 30
      terminationGracePeriodSeconds: 60
    ```
    

### The CLB instance cannot be accessed from within the cluster

**Cause**

The `externalTrafficPolicy: Local` setting is configured for the Service. When this setting is used, kube-proxy forwards traffic only to local endpoints. If a request originates from a node that does not have a backend pod for the Service, the request fails. Although the CLB address is intended for access from outside the cluster, requests from within the cluster are still routed by kube-proxy based on this policy.

If no backend service pod for the Service exists on the node that receives the request, a network connection failure occurs. If a backend service pod exists on the node, the access is successful. For more information about this issue, see [kube-proxy adds external-lb address to node-local iptables rule](https://github.com/kubernetes/kubernetes/issues/66607?spm=a2c4g.171437.0.0.62e175f4OloUv5).

**Symptom**

The CLB instance cannot be accessed from within the cluster.

**Solution**

-   From within the Kubernetes cluster, access the service using its ClusterIP or service name.
    
    The service name of the Ingress is `nginx-ingress-lb.kube-system`.
    
-   Change the value of externalTrafficPolicy in the LoadBalancer service to Cluster. However, this causes the source IP address to be lost in the application. The following command shows how to modify the Ingress service:
    
    **Note**
    
    If you use an Ingress CLB instance, a pod can access a service that is exposed through the Ingress or CLB instance only on the node where the Ingress pod resides.
    
    ```
    kubectl edit svc nginx-ingress-lb -n kube-system
    ```
    
-   If your cluster uses Terway with ENIs or multiple IP addresses per ENI, you can change the value of externalTrafficPolicy in the LoadBalancer service to Cluster and add an annotation for ENI pass-through, such as `annotation: service.beta.kubernetes.io/backend-type: "eni"`. The following code provides an example. This method preserves the source IP address and lets you access the service from within the cluster without issues. For more information, see [Use annotations to configure a Classic Load Balancer (CLB) instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances).
    
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
    

### The CLB instance cannot be accessed from outside the cluster

**Cause**

An access control list (ACL) is configured for the CLB instance, or the CLB instance is not running as expected.

**Symptom**

The CLB instance cannot be accessed from outside the cluster.

**Solution**

1.  Run the following command to view the service event information and resolve any error events. For more information, see [Service error events and solutions](#section-lzw-o22-ajy).
    
    ```
    kubectl -n {your-namespace} describe svc {your-svc-name}
    ```
    
2.  Check whether an ACL is configured for the CLB instance.
    
    If an ACL is configured, check whether the ACL allows access from the client IP address. For more information about CLB ACL configurations, see [Resource Access Management](/help/en/slb/classic-load-balancer/user-guide/overview-3#concept-2167216).
    
3.  Check whether the CLB vServer group is empty.
    
    If the vServer group is empty, check whether the application pod is associated with the service and whether the application pod is running as expected. If the associated pod is abnormal, locate and resolve the pod issue. For more information, see [Troubleshoot pod issues](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).
    
4.  Check whether the health check for the CLB listener is normal.
    
    If the CLB health check is abnormal, check whether the application pod is running as expected. For more information about CLB health check issues, see [CLB health check FAQ](/help/en/slb/classic-load-balancer/user-guide/faq-about-health-checks).
    

### Cannot connect to the backend HTTPS service

**Cause**

After a certificate is configured on the CLB instance, decryption is performed on the CLB instance. As a result, the requests that are sent to the backend pods are HTTP requests.

**Symptoms**

Cannot connect to the backend HTTPS service.

**Solution**

Set the targetPort that corresponds to the HTTPS port in the service to an HTTP port. For example, if Nginx uses HTTPS port 443, the corresponding `targetPort` must be changed to `80`.

Configuration example:

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
    
-   [Use annotations to configure a Classic Load Balancer (CLB) instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948)
    
-   [Notes on Server Load Balancer configurations for services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#task-1941987)
