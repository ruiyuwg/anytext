The NGINX Ingress controller is deployed in Container Service for Kubernetes (ACK) clusters and used to control Ingresses. The NGINX Ingress controller provides high performance and allows you to customize the controller configuration. The NGINX Ingress controller provided by ACK is developed based on the open source version and can be integrated with Alibaba Cloud services. The NGINX Ingress controller is deployed in ACK clusters. The stability of the NGINX Ingress controller is reliant on its configuration and the status of the cluster. This topic describes the usage notes of the NGINX Ingress controller.

## Table of contents

-   [Improve the performance and stability of the NGINX Ingress controller](#section-eph-gef-b2h)
    
    -   [Specify a proper number of controller pods and configure proper resource limits](#1)
        
    -   [Use exclusive nodes to ensure the performance and stability of the NGINX Ingress controller](#2)
        
    -   [Optimize the performance of the NGINX Ingress controller](#3)
        
    -   [Configure HPA to perform auto scaling based on loads](#4)
        
    -   [Configure PreStop hooks for backend applications](#12)
        
-   [Improve the observability of the NGINX Ingress controller](#section-6xc-cts-hk9)
    
-   [Advanced features of the NGINX Ingress controller](#section-qe3-8k9-mg2)
    
    -   [Use multiple NGINX Ingress controllers](#7)
        
    -   [Access the NGINX Ingress controller from within the cluster](#8)
        
    -   [Use WAF or transparent WAF](#9)
        
    -   [Use the NGINX Ingress controller to perform blue-green deployments and canary releases](#10)
        
    -   [Use the NGINX Ingress controller as a proxy to distribute non-HTTP requests](#11)
        
-   [References](#d41e347)
    

## Improve the performance and stability of the NGINX Ingress controller

### Specify a proper number of controller pods and configure proper resource limits

By default, two pods are provisioned if you install the NGINX Ingress controller from the Add-ons page or when you create a cluster. You can adjust the number of controller pods based on your business requirements.

When you deploy the NGINX Ingress controller, make sure that the controller pods are distributed across different nodes. This helps prevent resource contention among controller pods and single points of failure (SPOFs). You can schedule the controller pods to exclusive nodes to ensure the performance and stability of the NGINX Ingress controller. For more information, see [Use exclusive nodes to ensure the performance and stability of the NGINX Ingress controller](#2). We recommend that you do not set resource limits for the NGINX Ingress controller pods. This helps prevent service interruptions that are caused by out of memory (OOM) errors. If resource limits are required, we recommend that you set the CPU limit to 1,000 millicores or greater, and set the memory limit to 2 GiB or greater. The format of the CPU limit in the YAML file is `1000m`.

### Use exclusive nodes to improve the performance and stability of the NGINX Ingress controller

-   If you want to ensure the high stability of the NGINX Ingress controller, you can schedule the controller pods to exclusive nodes. This helps prevent resource contention among pods. For more information, see [Deploy a highly-reliable Ingress controller](/help/en/ack/deploy-ingresses-in-a-high-reliability-architecture#task-1339886).
    
-   You can also configure the NGINX Ingress controller for applications that need to handle heavy traffic. For more information, see [Install the NGINX Ingress controller in high-load scenarios](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-the-nginx-ingress-controller-in-high-load-scenarios#task-2036582).
    

### Optimize the performance of the NGINX Ingress controller

You can modify system settings and tune NGINX parameters to optimize the performance of the NGINX Ingress controller:

-   Modify system settings: By default, some common settings of the operating systems provided by Alibaba Cloud are optimized. You can also modify other system settings, such as the backlog queue and the maximum range of ports that are available. After you modify the system settings, the NGINX Ingress controller can process a large number of concurrent connections. This also prevents connection failures due to insufficient ports.
    
-   Tune NGINX parameters:
    
    -   Maximum number of connections that each worker process can handle: You can modify the maximum number of connections to each worker to ensure that the NGINX Ingress controller can process a large number of concurrent connections.
        
    -   Keepalive requests: The NGINX Ingress controller sends requests to backend pods through keepalive connections. You can increase the maximum number of requests that can be processed on each keepalive connection. This way, keepalive connections can be persisted longer to process more requests.
        
    -   Keepalive timeout: Make sure that the timeout period of keepalive connections to the backend pods is not shorter than the timeout period of connections to the NGINX Ingress controller. By default, the timeout period of connections to the NGINX Ingress controller is 900 seconds for ACK clusters.
        

By default, the preceding parameters are optimized in the NGINX Ingress component. In most cases, the configurations of the NGINX Ingress controller can meet your business requirements. If you have other requirements, you can modify the system settings and NGINX configurations in the ConfigMap. For more information, see [ConfigMaps](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/).

### Configure HPA to perform auto scaling based on loads

In most cases, the NGINX Ingress controller can handle traffic spikes. If the NGINX Ingress controller cannot meet your requirements in heavy load scenarios, you can configure Horizontal Pod Autoscaler (HPA) to scale out the Ingress controller pods. For more information, see [Implement horizontal pod autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/horizontal-pod-autoscaling#task-1830087).

**Important**

When HPA scales the controller pods, service interruptions may occur. Proceed with caution when you configure HPA.

The following YAML template provides an example on how to configure HPA:

```
apiVersion: autoscaling/v2beta1
kind: HorizontalPodAutoscaler
metadata:
  name: nginx-ingress-controller-hpa
  namespace: kube-system
spec:
   scaleTargetRef:
     apiVersion: apps/v1
     kind: Deployment
     name: nginx-ingress-controller
   minReplicas: 2
   maxReplicas: 5
   metrics:
    - type: Resource
      resource:
        name: cpu
        targetAverageUtilization: 50
```

### Configure PreStop hooks for backend applications

When a rolling update is performed on a backend application, the NGINX Ingress controller removes the endpoints of the pods that are being terminated and maintains connections for requests that are being processed. If a backend pod is immediately terminated after it receives the termination signal, requests that have been sent to the pod and are being processed may fail. In this case, subsequent requests may still be sent to the pod due to time sequence issues. This leads to traffic loss.

To avoid traffic loss caused by this issue, we recommend that you configure PreStop hooks for backend pods. This way, backend pods continue running for a period of time after their endpoints are removed.

Add the following configuration to the pod template:

```
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
      - name: app
        lifecycle:
          # Configure a PreStop hook to keep the pod running for 30 seconds before it is terminated. 
          # You can specify the sleep command in the pod template. 
          preStop:
            exec:
              command:
              - sleep
              - 30
```

## Improve the observability of the NGINX Ingress controller

### Use Simple Log Service and Managed Service for Prometheus to improve the observability of the NGINX Ingress controller

The NGINX Ingress controller provides the Ingress dashboard based on Simple Log Service and Managed Service for Prometheus, which helps you gain better insights into the traffic to your service.

-   Log Service:
    
    -   If you select Enable Log Service and Create Ingress Dashboard when you create a cluster, log on to the [ACK console](https://cs.console.alibabacloud.com), choose **Network** > **Ingresses**, and then you can view the Ingress dashboard provided by ACK based on Simple Log Service in the **Ingress Overview** section. You can also choose **Operations** > **Log Center** to view the log of the NGINX Ingress controller. For more information, see [Analyze and monitor the access log of nginx-ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress#task-1796525).
        
    -   If you do not select Enable Log Service or Create Ingress Dashboard when you create a cluster, you can manually configure components and rules for log collection. For more information, see [Analyze and monitor the access log of nginx-ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress#task-1796525). For more information about how to monitor the NGINX Ingress controller, see [Ingress dashboard monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ingress-dashboard#task-2005246).
        
-   Managed Service for Prometheus: You can enable Managed Service for Prometheus when you create a cluster. You can also choose **Operations** > **Prometheus Monitoring** to enable and access Managed Service for Prometheus after you create a cluster. For more information, see [Use Managed Service for Prometheus to monitor an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster#task-2461398).
    
    **Note**
    
    If you use Managed Service for Prometheus, add the `host` field to the Ingresses that are created in the cluster. Otherwise, some Ingress metrics are not displayed by default. You can also add `--metrics-per-host=false` to the startup parameter of the `controller` in the Deployment of the NGINX Ingress controller to resolve the issue.
    

## Advanced features of the NGINX Ingress controller

### Use multiple NGINX Ingress controllers

You may want to deploy multiple NGINX Ingress controllers in a cluster to isolate the internal network from the Internet. For more information, see [Deploy multiple Ingress controllers in a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-multiple-ingress-controllers-in-a-cluster#task-2401664).

### Access the NGINX Ingress controller from within the cluster

In most cases, requests to the public IP address of a LoadBalancer Service in an ACK cluster are blocked by iptables and IP Virtual Server (IPVS). The public IP address of the LoadBalancer Service is the same as that of the NGINX Ingress controller. If `externalTrafficPolicy` of the Service is set to `Local` and no NGINX Ingress controller pod is scheduled to the cluster node, connectivity issues occur. By default, the NGINX Ingress controller in ACK clusters uses the LoadBalancer Service in Local mode. Therefore, when you access the IP address of the Classic Load Balancer (CLB) instance that is associated with the NGINX Ingress controller from within the cluster, you may encounter connectivity issues.

If you want to use a public IP address or a domain name that is mapped to a public IP address to access the NGINX Ingress controller from within the cluster, we recommend that you use the cluster IP address of the LoadBalancer Service or the internal domain name `nginx-ingress-lb.kube-system`. If you access the NGINX Ingress controller from within the cluster, connectivity issues may occur due to the hairpin issue. For more information about how to resolve the issue, see [What can I do if the cluster cannot access the IP address of the SLB instance exposed by the LoadBalancer Service](https://www.alibabacloud.com/help/kb-articles/latest/what-can-i-do-if-the-cluster-cannot-access-the-ip-address-of-the-slb-instance-exposed-by-the-loadbalancer-service).

### Use WAF or transparent WAF

To block malicious requests, you can log on to the [Web Application Firewall (WAF) console](https://yundun.console.aliyun.com/?p=waf) or [Application Load Balancer (ALB) console](https://slb.console.alibabacloud.com/alb) and enable WAF or transparent WAF for the CLB instance that is used by the NGINX Ingress controller. To enable WAF or transparent WAF on HTTPS ports, you must configure the required certificate in the console. The following issues may occur when you configure the certificate:

-   Transport Layer Security (TLS) requests are blocked by WAF or transparent WAF. Therefore, the certificate that is configured in the Secret of the cluster is not exposed to the Internet.
    
-   When you use the IP address of the CLB instance or the cluster IP address of the LoadBalancer Service to access port 443 from within the cluster, traffic may fail to pass through WAF or transparent WAF. As a result, an error occurs when the system returns the certificate.
    
-   When WAF or transparent WAF is enabled, the NGINX Ingress controller cannot preserve client IP addresses by default. You can add the following content to the ConfigMap of the NGINX Ingress controller to enable the realip module of NGINX and use the `X-Forwarded-For` header to preserve client IP addresses. If you install the NGINX Ingress controller from the Add-ons page, the ConfigMap is named nginx-configuration and belongs to the kube-system namespace by default.
    
    ```
    use-forwarded-headers: "true" # Use this option if the version of the NGINX Ingress controller is 0.30.0 or earlier. 
    enable-real-ip: "true" # Use this option if the version of the NGINX Ingress controller is 0.44.0 or later. 
    proxy-real-ip-cidr: <The back-to-origin CIDR block that you obtain from WAF>
    ```
    

### Use the NGINX Ingress controller to perform blue-green deployments and canary releases

You can use the canary release feature provided by the NGINX Ingress controller in the [ACK console](https://cs.console.alibabacloud.com) or by adding annotations. For more information, see [Use the NGINX Ingress controller to implement canary releases and blue-green deployments](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/implement-gray-scale-and-blue-green-publishing-through-nginx-ingress#task-2035658).

**Important**

Make sure that the old version and new version of the Service for which you want to perform canary releases are associated only with the canary Ingress. Otherwise, conflicts may occur in canary release rules and traffic is distributed to other Ingresses.

### Use the NGINX Ingress controller as a proxy to distribute non-HTTP requests

By default, the NGINX Ingress controller connects to backend Services over HTTP. The NGINX Ingress controller supports the following protocols for connecting to backend Services: WebSocket, HTTPS, and gRPC. For more information about the protocols that are supported by the NGINX Ingress controller, see [Backend Protocol](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#backend-protocol).

-   WebSocket: The NGINX Ingress controller supports the WebSocket by default. You do not need to configure the NGINX Ingress controller to distribute WebSocket requests. If you want to keep WebSocket connections alive, you can adjust the timeout period of connections to backend Services by using annotations. This prevents service interruptions that are caused by connection timeouts. For more information, see [Custom timeouts](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#custom-timeouts).
    
-   HTTPS: You can add the annotation `nginx.ingress.kubernetes.io/backend-protocol:"HTTPS"` in the Ingress if you want to access HTTPS Services through the NGINX Ingress controller.
    
-   gRPC: gRPC services can be accessed only through TLS ports. Make sure that TLS-encrypted connections are used when you access gRPC services through the NGINX Ingress controller. For more information about how to configure gRPC, see [Deploy gRPC services on the backend of the NGINX Ingress controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expose-the-grpc-service-through-the-nginx-ingress-controller#task-2116482).
    

## References

-   [Ingress overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ingress-management-2/#concept-2021501)
    
-   [Nginx Ingress FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#task-2011727)
