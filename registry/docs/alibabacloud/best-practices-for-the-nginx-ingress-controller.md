You may need to change the configurations of the Nginx Ingress Controller for different business scenarios. This topic describes best practices to help you configure the Nginx Ingress Controller for optimal performance.

## Index

-   [Improve the performance and stability of the Nginx Ingress Controller](#section-eph-gef-b2h)
    
    -   [Use an appropriate number of replicas and resource limits](#64db54eecdpvs)
        
    -   [Use dedicated nodes to improve the performance and stability of Nginx Ingress](#b8a1c20070d4w)
        
    -   [Optimize Nginx Ingress performance](#5e5068c846jpi)
        
    -   [Configure HPA to automatically scale out the Nginx Ingress Controller](#4)
        
    -   [Configure a proper preStop hook for backend services](#12)
        
-   [Improve the observability of the Nginx Ingress Controller](#section-6xc-cts-hk9)
    
-   [Advanced features of the Nginx Ingress Controller](#section-qe3-8k9-mg2)
    
    -   [Use multiple Nginx Ingress Controllers](#7)
        
    -   [Access the Nginx Ingress Controller from within a cluster](#8)
        
    -   [Use WAF](#9)
        
    -   [Use the Nginx Ingress Controller for blue-green deployments or phased releases of applications](#10)
        
    -   [Use the Nginx Ingress Controller to proxy non-HTTP requests](#11)
        
-   [References](#d41e347)
    

## Improve the performance and stability of the Nginx Ingress Controller

### Use an appropriate number of replicas and resource limits

By default, the number of replicas for an Nginx Ingress Controller is 2, whether it is created with a cluster or installed from the component center. You can adjust the number of replicas as needed. Ensure that the Nginx Ingress Controller is distributed across different nodes to prevent resource preemption and single points of failure. You can also use dedicated nodes for the Nginx Ingress Controller to ensure performance and stability. For more information, see [Use dedicated nodes to improve the performance and stability of Nginx Ingress](#3843c1e8ccafp). We recommend that you do not set resource limits for the Nginx Ingress Controller to prevent traffic interruptions caused by out-of-memory (OOM) errors. If you must set resource limits, we recommend that you set the CPU limit to at least 1,000 millicores and the memory limit to at least 2 GiB.

### Use dedicated nodes to improve the performance and stability of Nginx Ingress

-   If you have high stability requirements for the Ingress Controller, you can assign dedicated nodes to it to prevent resource preemption. For more information, see [Deploy a highly available Nginx Ingress Controller](/help/en/ack/deploy-ingresses-in-a-high-reliability-architecture#task-1339886).
    
-   For high-payload scenarios, you can also configure the Ingress Controller to support high-payload applications. For more information, see [Configure an Nginx Ingress Controller for high-payload scenarios](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-the-nginx-ingress-controller-in-high-load-scenarios#task-2036582).
    

### Optimize Nginx Ingress performance

Performance optimization for the Nginx Ingress Controller is divided into system parameter optimization and Nginx parameter optimization:

-   System parameter optimization: The operating systems on Alibaba Cloud have some common parameters that are optimized by default. Other system parameters that require optimization include the maximum system backlog and the maximum range of available ports. After you optimize the system parameters, Nginx can handle high-concurrency requests and backend connections will not fail due to port exhaustion.
    
-   Nginx parameter optimization:
    
    -   Adjust the maximum number of connections for a single worker to ensure that the Nginx Ingress Controller can handle high-concurrency requests.
        
    -   Increase the connection timeout period: The Nginx Ingress Controller uses persistent connections to send requests to backend application pods by default. To allow a single connection to process more requests and reduce connection overhead, you need to increase the connection timeout period.
        
    -   Set the persistent connection timeout period: Ensure that the persistent connection timeout period of the backend service is not shorter than that of the Nginx Ingress Controller. The default value is 900s in ACK clusters.
        

The Nginx Ingress component has built-in optimizations that deliver optimal performance in most scenarios. If you have special requirements, you can further optimize system parameters and Nginx parameters using the relevant fields in the ConfigMap. For more information about ConfigMaps, see [ConfigMaps](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/).

### Configure HPA to automatically scale out the Nginx Ingress Controller

In most cases, the Nginx Ingress Controller can handle traffic bursts. If the Nginx Ingress Controller cannot meet your requirements in high-payload scenarios, you can configure Horizontal Pod Autoscaler (HPA) to scale out the Nginx Ingress Controller. For more information, see [Use Horizontal Pod Autoscaling (HPA)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/horizontal-pod-autoscaling#task-1830087).

**Important**

Scaling pods may interrupt some service connections. Configure HPA with caution.

The following code provides a sample YAML file:

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

### Configure a proper preStop hook for backend services

During a rolling update of a backend service, the Nginx Ingress Controller removes the endpoints of the pods that are being terminated and maintains the connections for requests that are being processed. If a backend service pod exits immediately after it receives a termination signal, the requests that are being processed may fail. Due to timing issues, some traffic may still be forwarded to the terminated pod, which causes traffic loss.

To prevent traffic loss during rolling updates, we recommend that you configure a preStop hook in the pods of the backend service. This way, the pods continue to run for a period of time after their endpoints are removed. This prevents traffic interruptions.

Add the following content to the container configuration in the pod template:

```
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
      - name: app
        lifecycle:
          # Configure a preStop hook to wait for 30 seconds before exiting.
          # The sleep command must exist in the container.
          preStop:
            exec:
              command:
              - sleep
              - 30
```

## Improve the observability of the Nginx Ingress Controller

### Use SLS and Alibaba Cloud Prometheus to improve observability

The Nginx Ingress Controller provides dashboards based on Simple Log Service (SLS) logs and Prometheus monitoring to help you better understand service traffic.

-   SLS logs:
    
    -   If you enabled the log component and the Ingress Dashboard when you created a cluster, you can view the dashboard provided by Simple Log Service in the **Nginx Ingress Overview** section on the **Network** > **Ingress** page of the [Container Service Management Console](https://cs.console.alibabacloud.com). You can also directly view the logs generated by the Nginx Ingress Controller in **Operations Management** > **Log Center**. For more information, see [Nginx Ingress Access Log Analysis and Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress#task-1796525).
        
    -   If you did not select the log and Ingress options when you created the cluster, you can manually configure the log collection component and rules. For more information, see [Analyze and monitor Nginx Ingress access logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress#task-1796525). For more information about monitoring, see [Ingress Dashboard monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ingress-dashboard#task-2005246).
        
-   Alibaba Cloud Prometheus Monitoring: You can install Alibaba Cloud Prometheus Monitoring when you create a cluster, or install or view it on the **Operations Management** > **Prometheus Monitoring** page after you create the cluster. For more information, see [Use Alibaba Cloud Prometheus for monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster#task-2461398).
    
    **Note**
    
    When you use Alibaba Cloud Prometheus Monitoring, add the `host` field to the Ingress resources in the cluster. Otherwise, some Ingress metrics are not collected by default. You can also add `--metrics-per-host=false` to the startup parameters of the `controller` in the Nginx Ingress Controller deployment to resolve this issue.
    

## Advanced features of the Nginx Ingress Controller

### Use multiple Nginx Ingress Controllers

In some applications, you may need to deploy multiple Nginx Ingress Controllers in a cluster for purposes such as isolating public and private networks. For more information, see [Deploy multiple Ingress controllers](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-multiple-ingress-controllers-in-a-cluster#task-2401664).

### Access the Nginx Ingress Controller from within a cluster

In a cluster, traffic to the external IP address of a LoadBalancer service, which is the public IP address of the Nginx Ingress Controller, is usually routed by iptables or IPVS. If `externalTrafficPolicy` is set to `Local` and no corresponding Nginx Ingress pod exists on the node, a network connection failure occurs. By default, the Nginx Ingress Controller in an ACK cluster uses a LoadBalancer service in Local mode. Therefore, a network connection failure may occur when you access the SLB address bound to the Nginx Ingress Controller from within the cluster. We recommend that you use the Service ClusterIP or the internal domain name (`nginx-ingress-lb.kube-system`) to access the Nginx Ingress Controller. Do not access the Nginx Ingress Controller from itself. This may also cause network connection failures due to hairpin issues. For more information about the solution to this issue, see [Failed to access the SLB address exposed by a LoadBalancer service in a Kubernetes cluster](/help/en/kb-articles/latest/what-can-i-do-if-the-cluster-cannot-access-the-ip-address-of-the-slb-instance-exposed-by-the-loadbalancer-service).

### Use WAF

To block malicious requests, you can enable WAF for the SLB instance used by the Nginx Ingress Controller of the cluster. When you enable WAF on an HTTPS port, you must configure the certificate to be used in the console. In this case, the following issues may occur:

-   TLS requests are terminated at WAF. Therefore, the certificates configured using Secrets in the cluster are not exposed at the Internet egress.
    
-   Accessing port 443 using the SLB IP address or Service ClusterIP from within the cluster may not pass through WAF, which causes a certificate error.
    
-   If WAF is enabled, the Nginx Ingress Controller cannot retrieve the real client IP address by default. You can add the following content to the ConfigMap to enable the Nginx Realip module and use the `X-Forwarded-For` header as the real client IP address. For an Nginx Ingress Controller installed using component management, the default ConfigMap is nginx-configuration in the kube-system namespace.
    
    ```
    use-forwarded-headers: "true" # Use this option for version 0.30.0 and earlier.
    enable-real-ip: "true" # Use this option for version 0.44.0 and later.
    proxy-real-ip-cidr: <The back-to-origin IP address CIDR block that you obtain from WAF>
    ```
    

### Use the Nginx Ingress Controller for blue-green deployments or phased releases of applications

You can use the phased release feature in the [Container Service for Kubernetes (ACK) console](https://cs.console.alibabacloud.com) or manually add an annotation to use the phased release feature provided by the Nginx Ingress Controller. For more information, see [Use Nginx Ingress to implement phased releases and blue-green deployments](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/implement-gray-scale-and-blue-green-publishing-through-nginx-ingress#task-2035658).

**Important**

Ensure that the services to be released in phases, including the original service and the phased release service, are not referenced by Ingress resources other than the phased release Ingress. Otherwise, phased release rule conflicts may occur and cause traffic routing errors.

### Use the Nginx Ingress Controller to proxy non-HTTP requests

By default, the Nginx Ingress Controller uses HTTP to connect to backend services. It also supports multiple backend protocols, such as WebSocket, HTTPS, and gRPC. For more information about the supported backend protocols, see [Backend Protocol](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#backend-protocol).

-   WebSocket: The Nginx Ingress Controller provides native support for WebSocket. You do not need to perform any configuration to forward WebSocket connections. If you have long-running WebSocket connections, you can adjust the timeout period of backend connections using an annotation to prevent service disconnections caused by timeouts. For more information about how to adjust the timeout period, see [Custom timeouts](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#custom-timeouts).
    
-   HTTPS: For backend services that use HTTPS, you can add the `nginx.ingress.kubernetes.io/backend-protocol:"HTTPS"` annotation to the Ingress to switch to HTTPS connections.
    
-   gRPC: gRPC can be accessed only through a TLS port. Therefore, ensure that you use an encrypted TLS port when you access gRPC services through the Nginx Ingress Controller. For more information about how to configure gRPC, see [Deploy a gRPC service at the backend of an Nginx Ingress Controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expose-the-grpc-service-through-the-nginx-ingress-controller#task-2116482).
    

## References

-   [Ingress management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ingress-management-2/#concept-2021501)
    
-   [Nginx Ingress FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#task-2011727)
