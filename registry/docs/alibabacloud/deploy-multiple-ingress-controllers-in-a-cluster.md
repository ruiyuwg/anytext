Deploy multiple independent Nginx Ingress controllers in a cluster to isolate traffic across different services, environments, or network boundaries. Each controller manages its own load balancer and Ingress rules independently, providing full fault and configuration isolation.

## How it works

Each controller is identified by a unique IngressClass name. When you create an Ingress resource, you specify which controller handles it by setting the `spec.ingressClassName` field. Only the controller whose IngressClass name matches will process that Ingress resource. Other controllers ignore it. This mechanism enables traffic isolation.

The following diagram illustrates a public and private network isolation scenario.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5301283771/CAEQVBiBgICKmsj95RkiIGVkYTI2YTUyY2UwMTQ3NTRhMzk2OTRkNWMxYWFhZGI05819318_20251024161817.774.svg)

## Helm controllers vs. component management controllers

By default, ACK deploys a Nginx Ingress Controller through the **Component Management** page. You can deploy additional controllers as **Helm** applications to serve different traffic domains.

**Important**

Controllers installed as **Helm** applications differ from those deployed through **Component Management** in the following ways:

-   **Component Management** controllers provide additional capabilities such as [grayscale upgrade](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-nginx-ingress-controller), [logs and monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress), and [cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
    
-   You are responsible for the full lifecycle of **Helm** controllers, including version upgrades, configuration changes, and troubleshooting.
    

## Limits

-   This topic applies to clusters that run Kubernetes 1.22 or later.
    
-   Components for clusters that run Kubernetes 1.20 or earlier are no longer maintained. For more information, see [Announcement on the end of maintenance for Nginx Ingress Controller v1.2 and earlier](/help/en/ack/product-overview/product-announcement-announcement-on-stopping-maintenance-of-nginx-ingress-controller-v1-2-and-below). To upgrade your cluster, see [Manually upgrade an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    

## Deploy a new Ingress controller

1.  On the [ACK Clusters](https://cs.console.alibabacloud.com) page, click the name of your cluster. In the left navigation pane, click **Applications** > **Helm**.
    
2.  Click **Create** and install `ack-ingress-nginx-v1`.
    
    Configure the following key parameters. You can use the default values for all other settings.
    
    **Parameter**
    
    **Description**
    
    **Application Name**
    
    Enter a name that is unique within the cluster.
    
    **Important**
    
    This name is used as a prefix for auto-generated Service resources. The resulting Service name follows the format `<Application Name>-ack-ingress-nginx-v1-controller` for public services, or `<Application Name>-ack-ingress-nginx-v1-controller-internal` for private services. The total length must not exceed 63 characters.
    
    **Chart**
    
    Search for and select `ack-ingress-nginx-v1`.
    
    **Note**
    
    The older `ack-ingress-nginx` chart is no longer maintained.
    
    **Chart Version**
    
    -   Kubernetes 1.24 or later: Use chart version 4.0.22 or later.
        
    -   Kubernetes 1.22: Use chart versions 4.0.16 to 4.0.21.
        
    
    **Chart Parameters**
    
    By default, the chart deploys a Nginx Ingress Controller with 2 replicas as a Deployment. It automatically creates a public LoadBalancer-type Service backed by a CLB instance.
    
    For a full list of configurable parameters, see the [parameter reference](#e680601d986k6).
    
    > This example deploys a private network controller. Set `controller.service.external.enabled` to `false` and `controller.service.internal.enabled` to `true`.
    
    **Important**
    
    When you deploy multiple controllers, the values for [controller.ingressClassResource.name](#98e2d04025h8u) and [controller.ingressClassResource.controllerValue](#98e2f75025coe) must be unique within the cluster to avoid IngressClass conflicts.
    
    After creation, go to the **Helm** page. In the **Basic Information** area, note the **namespace**. In the **Resources** area, note the IngressClass name and Service name for use in subsequent steps.
    

## Verify traffic isolation

This section walks through a public and private network separation scenario to verify traffic isolation:

-   **Default controller**: The Nginx Ingress Controller deployed through **Component Management**. This controller is bound to a public SLB instance.
    
    > If you have not set up the default controller, see [Expose services with Nginx Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-nginx-ingress-1#undefined).
    
-   **New controller**: The controller you deployed in the preceding steps. This controller is bound to a private SLB instance and is accessible only within the VPC.
    

You will deploy a test application with Ingress rules that target only the new controller, then verify that the default controller does not handle those rules.

### Step 1: Deploy a test application

1.  Create an `nginx.yaml` file with the following content.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx
    spec:
      replicas: 1
      selector:
        matchLabels:
          run: nginx
      template:
        metadata:
          labels:
            run: nginx
        spec:
          containers:
          - image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            imagePullPolicy: Always
            name: nginx
            ports:
            - containerPort: 80
              protocol: TCP
          restartPolicy: Always
    ---
    apiVersion: v1
    kind: Service
    metadata:
      name: nginx
    spec:
      ports:
      - port: 80
        protocol: TCP
        targetPort: 80
      selector:
        run: nginx
      sessionAffinity: None
      type: NodePort
    ```
    
2.  Run the following command to deploy the application.
    
    ```
    kubectl apply -f nginx.yaml
    ```
    

### Step 2: Create Ingress rules that target the new controller

1.  Create an `ingress.yaml` file with the following content.
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: nginx
    spec:
      # Replace with the IngressClass name of your new controller (controller.ingressClassResource.name).
      ingressClassName: "<YOUR_INGRESS_CLASS>"
      rules:
      # The following domain name is for testing only. Replace it with your actual domain name in production.
      - host: foo.bar.com
        http:
          paths:
          - path: /
            backend:
              service:
                name: nginx
                port:
                  number: 80
            pathType: ImplementationSpecific
    ```
    
2.  Run the following command to create the Ingress resource.
    
    ```
    kubectl apply -f ingress.yaml
    ```
    

### Step 3: Test access

1.  Obtain the IP addresses of both controllers.
    
    -   Default public controller:
        
        ```
        PUBLIC_IP=$(kubectl get svc -n kube-system nginx-ingress-lb -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
        echo "Public Ingress IP: $PUBLIC_IP"
        ```
        
    -   New private controller:
        
        ```
        # Replace <YourNamespace> with the namespace of the new controller (for example, default).
        # Replace <YourChartName> with the Helm release name of the new controller.
        INTERNAL_IP=$(kubectl get svc -n <YourNamespace> <YourChartName>-ack-ingress-nginx-v1-controller-internal -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
        echo "Internal Ingress IP: $INTERNAL_IP"
        ```
        
2.  From a machine inside the VPC, send a request through the private controller. If `200` is returned, the private controller has correctly proxied the traffic.
    
    ```
    curl -o /dev/null -s -w "%{http_code}\n" -H "Host: foo.bar.com" http://$INTERNAL_IP
    ```
    
3.  Send a request through the public controller. If `404 Not Found` is returned, the public controller did not process this Ingress rule. This confirms that traffic isolation is working.
    
    ```
    curl -H "Host: foo.bar.com" http://$PUBLIC_IP
    ```
    

## Production checklist

Before you use the new controller in production, review the following recommendations.

-   **High availability**: Configure the following parameters in the Helm chart to ensure resilience:
    
    -   Set `controller.replicaCount` to 2 or more.
        
    -   Set `controller.resources.requests` and `controller.resources.limits` to appropriate values.
        
    -   Add `podAntiAffinity` rules in `controller.affinity` to spread pods across different nodes.
        
-   **Monitoring and alerting**: Set `controller.metrics.enabled: true` and `controller.metrics.serviceMonitor.enabled: true` to export metrics to Prometheus. Monitor request latency and error rates (4xx/5xx), and [configure alerting rules](/help/en/prometheus/user-guide/manage-container-environments-custom-collection-rules/).
    
-   **Performance**: For low-latency workloads, use [NLB](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/) instead of CLB:
    
    -   Private network: `controller.service.internal.loadBalancerClass: "alibabacloud.com/nlb"`
        
    -   Public network: `controller.service.loadBalancerClass: "alibabacloud.com/nlb"`
        
-   **Version maintenance**:
    
    -   Track the [Nginx Ingress Controller release notes](/help/en/ack/product-overview/nginx-ingress-controller) and apply security patches promptly.
        
    -   Use network policies to restrict the backend services that each controller can access.
        

## Parameter reference

The following table describes the main parameters for the `ack-ingress-nginx-v1` Helm chart.

**Parameter**

**Description**

`controller.image.repository`

The container image registry address for the Nginx Ingress Controller.

`controller.image.tag`

The [image version](/help/en/ack/product-overview/nginx-ingress-controller#concept-2461414) of the Nginx Ingress Controller.

`controller.ingressClassResource.name`

The name of the IngressClass resource. This value must be unique within the cluster and cannot be `nginx`, which is reserved by the default controller.

`controller.ingressClassResource.controllerValue`

The controller class identifier. This value must be unique within the cluster and cannot be `k8s.io/ingress-nginx`, which is reserved by the default controller.

`controller.replicaCount`

The number of controller pod replicas. Set to 2 or more for high availability.

`controller.service.enabled`

Specifies whether to create a LoadBalancer-type Service for the controller.

`controller.service.external.enabled`

If set to `true`, creates a public-facing SLB Service.

`controller.service.internal.enabled`

If set to `true`, creates a private SLB Service accessible only within the VPC.

`controller.kind`

The workload type: `Deployment` or `DaemonSet`.

`controller.electionID`

The identifier for leader election among controller replicas. When you deploy multiple controllers in the same namespace, this value must be unique.

`controller.metrics.enabled`

If set to `true`, exposes a Prometheus metrics endpoint.

`controller.metrics.serviceMonitor.enabled`

If set to `true`, creates a ServiceMonitor resource for automatic Prometheus discovery. Requires `controller.metrics.enabled` to be `true`.

`controller.service.loadBalancerClass`

The load balancer type for the public network Service.

-   `"alibabacloud.com/clb"` (default): [CLB](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/).
    
-   `"alibabacloud.com/nlb"`: [NLB](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/).
    

`controller.service.internal.loadBalancerClass`

The load balancer type for the private network Service.

-   `"alibabacloud.com/clb"` (default): [CLB](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/).
    
-   `"alibabacloud.com/nlb"`: [NLB](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/).
    

## References

-   [Configure the network type of an Nginx Ingress Controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-an-ingress-controller-to-use-an-internal-facing-slb-instance): Configure public and private network access on the default **Component Management** controller. This approach shares a single set of controller pods for all traffic and does not provide fault or configuration isolation.
    
-   [Deploy a highly available Nginx Ingress Controller](/help/en/ack/deploy-ingresses-in-a-high-reliability-architecture#task-1339886)
