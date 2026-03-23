When you configure workloads such as deployments, StatefulSets, DaemonSets, Jobs, and CronJobs in an ACK cluster, you must consider multiple factors to ensure that your applications run in a stable and reliable manner.

## **Declare requests and limits for each pod**

Scheduling too many pods on a node in a Kubernetes cluster can cause high loads and prevent services from functioning correctly. When you configure a pod, declare the required `requests` and `limits`. This allows the cluster to find a suitable node based on resource requirements during pod deployment.

In the following example, the Nginx pod is configured with these resources:

-   CPU request of 1 core and memory request of 1024 Mi
    
-   CPU limit of 2 cores and memory limit of 4096 Mi
    

```
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
    resources: # Resource declaration
      requests:
        memory: "1024Mi"
        cpu: "1000m"
      limits:
        memory: "4096Mi"
        cpu: "2000m"
```

Kubernetes uses a static resource scheduling mechanism. The remaining resources on a node are calculated using the following formula: `Remaining node resources = Total node resources - Allocated resources`. When you manually run a resource-intensive program, Kubernetes cannot detect its actual resource usage because the formula is based on allocated resources, not actual usage.

In addition, all pods must declare `resources`. If a pod does not declare `resources`, Kubernetes does not reserve resources for the pod after scheduling it to a node. This can result in too many pods on a node, which causes resource contention.

You can use the [resource profile](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling) feature in ACK. This feature provides container-level resource recommendations based on historical usage data. This simplifies the configuration of container `requests` and `limits`.

## **Wait for downstream services at startup and do not exit immediately**

Some applications have external dependencies. For example, they may need to read data from a database (DB) or rely on the API of another service. At startup, these dependencies may not be ready. Traditional manual operations and maintenance (O&M) often uses a fail-fast approach, in which the application exits if a dependency is not met. However, in Kubernetes, most O&M operations are automated. For example, the system automatically selects a node and starts an application during deployment. If an application fails, the system automatically restarts it. If the load increases, the Horizontal Pod Autoscaler (HPA) can automatically scale out the application.

For example, consider two applications, A and B, where A depends on B, and both run on the same node. If the node restarts for any reason, A may start before B. In this case, the dependency of A is not met. If A exits immediately, as is common in traditional environments, it will not automatically recover even after B starts. This requires manual intervention.

In a Kubernetes cluster, an application must check for dependencies at startup. If a dependency is not met, the application must wait and poll for the dependency instead of immediately exiting. You can implement this behavior using an [Init Container](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/#what-can-init-containers-be-used-for).

## **Configure the restart policy**

While a pod is running, its processes can exit for many reasons. For example, a bug in the code or high memory usage can cause an application process to exit, which in turn terminates the pod. You can configure a [restartPolicy](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy) for the pod to ensure that it automatically restarts after it exits.

```
apiVersion: v1
kind: Pod
metadata:
  name: nginx-test
spec:
  restartPolicy: OnFailure 
  containers:
  - name: nginx
    image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
```

The `restartPolicy` can be set to one of the following values:

-   `Always`: Automatically restarts the container.
    
-   `OnFailure`: Automatically restarts the container only if it exits with a non-zero status code.
    
-   `Never`: Does not restart the container.
    

## **Configure health check probes**

You can configure probes to handle issues such as application deadlocks, slow startups, or service failures. Probes provide Kubernetes with automatic fault recovery and traffic shaping capabilities. This allows Kubernetes to automatically restart abnormal containers and send requests only to ready instances. This is a key mechanism for ensuring service high availability and stability.

-   `startupProbe` (Startup probe): Checks whether an application has finished starting. This is useful for applications that start slowly, such as Java applications. The readiness and liveness probes are not executed until the startup probe succeeds. This prevents the kubelet from misinterpreting a slow-starting application as a failed application and restarting it.
    
-   `readinessProbe` (Readiness probe): Used to control traffic shaping. The IP address of the pod is added to the Endpoints list of the service only after this probe succeeds. This ensures that external requests are sent only to containers that are ready to process them.
    
-   `livenessProbe` (Liveness probe): Monitors the health of the container. If the probe detects a deadlock or a crash, the kubelet triggers an automatic restart to facilitate fault recovery.
    

The following example shows how to configure health check probes for a stateless Nginx deployment.

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment-demo
spec:
  replicas: 1                 # For production environments, set this to 2 or more to ensure high availability
  selector:
    matchLabels:
      app: nginx-demo
  template:
    metadata:
      labels:
        app: nginx-demo 
    spec:
      containers:
      - name: nginx
        image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
        ports:
        - containerPort: 80
        resources:
          requests:
            cpu: 500m
            memory: 1Gi
          limits:
            cpu: 500m
        # --- Health check probes ---
        # Startup Probe: Ensures the application in the container has started.
        startupProbe:
          httpGet:
            path: / # Accessing the Nginx default root path indicates a successful startup.
            port: 80
          # Allow enough time for the application to start. Total timeout = failureThreshold × periodSeconds, which is 30 × 10 = 300 seconds.
          failureThreshold: 30
          periodSeconds: 10
        # Readiness Probe: Determines if the container is ready to accept traffic.
        readinessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 5  # Starts probing 5 seconds after the container starts.
          periodSeconds: 5        # Probes every 5 seconds.
          timeoutSeconds: 2       # Probe timeout.
          successThreshold: 1     # 1 success marks it as ready.
          failureThreshold: 3     # 3 consecutive failures mark it as not ready.
        # Liveness Probe: Determines if the container is "alive" for automatic fault recovery.
        # This configuration should be looser than the readinessProbe to avoid unnecessary restarts due to temporary jitter.
        livenessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 15 # Starts the first probe 15 seconds after the container starts, allowing the application to initialize and stabilize.
          periodSeconds: 10       # The probe frequency is lower than the readinessProbe to reduce system resource consumption.
          timeoutSeconds: 3       # The timeout can be slightly longer than the readinessProbe.
          successThreshold: 1     # 1 success marks it as alive.
          failureThreshold: 3     # After 3 consecutive failures (3 × 10 = 30 seconds), the kubelet restarts the container.
```

For more information about how to configure zero-downtime rolling deployments in a production environment, see Implement zero-downtime rolling deployments.

## **One process per container**

Some developers treat containers as if they are virtual machines (VMs). They run multiple processes, such as monitoring, logging, and sshd processes, or even a full Systemd, in a single container. This practice causes the following problems:

-   It is more complex to determine the overall resource usage of the pod and more difficult to correctly configure requests and limits.
    
-   If a container runs only a single process, the external container engine can immediately detect when that process breaks and then restart the container. If a container runs multiple processes, the external container engine cannot detect if one of the processes crashes. This may cause the container to stop functioning correctly.
    

Kubernetes supports multiple processes that work together. For example, Nginx and PHP-FPM can communicate through a Unix Domain Socket. To achieve this, you can create a pod that contains two containers and store the Unix Domain Socket in a volume that is shared between the containers.

## **Avoid single points of failure**

If an application has only one instance, a failure of that instance inevitably causes a brief service interruption, even if Kubernetes can automatically restart it. Similar service interruptions can also occur when you update the application or release a new version.

In Kubernetes, you should avoid managing pods directly. Instead, use a deployment or StatefulSet to manage them. You must also ensure that your application runs at least two pod instances. This approach improves system high availability and prevents service interruptions that are caused by single-instance failures.

## **References**

-   ACK can implement phased releases, blue-green deployments, and other release strategies for applications. For more information, see [Deployment and release](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deployment-and-release/).
    
-   For more information about best practices for application management, see [Workload best practices](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-workload-managment/).
    
-   If a pod is abnormal, you can perform a self-check by referring to [Troubleshoot pod exceptions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/pod-troubleshooting-1) and [Workload FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-applications).
