ConfigMaps decouple configuration from container images. You can store non-sensitive configuration data in a ConfigMap and inject it into pods at runtime, so the same image works across development, staging, and production environments.

For sensitive data such as passwords or API keys, use [Secrets](https://www.alibabacloud.com/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-secrets) instead.

## Injection methods

**Method**

**Best for**

**Auto-update**

**Restart required**

**Volume mounting (recommended)**

Complete configuration files, dynamic updates

Yes. Changes automatically sync to mounted files.

No

**Environment variable injection**

Simple key-value parameters such as feature flags

No

Yes

## Prerequisites

Before you begin, make sure that you have the following:

-   An ACK cluster. See [Create a stateless Deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment).
    
-   A kubectl client connected to the cluster. See [Connect to an ACK cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-ubf-lhg-vdb).
    
-   Public network access for the cluster to pull images. If you selected **Configure SNAT for VPC** when you created the cluster (enabled by default), no extra configuration is required. Otherwise, see [Enable an ACK cluster to access the Internet](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-an-existing-ack-cluster-to-access-the-internet).
    

## Create a ConfigMap

The following example creates a ConfigMap named `app-config` in the `default` namespace that contains an Nginx configuration file.

> The workload and the ConfigMap that it references must be in the same cluster and namespace.

### Console

1.  Log on to the [Container Service for Kubernetes (ACK) console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  Click the name of the target cluster. In the left-side navigation pane, choose **Configuration** > **ConfigMaps**.
    
3.  Set **Namespace** to `default` and click **Create**.
    
4.  Set **ConfigMap Name** to `app-config`.
    
5.  Click **\+ Add** and enter the following **Name** and **Value**. Then click **OK**.
    
    -   **Name**: `nginx.conf`
        
    -   **Value**: `server { listen 80; location / { root /usr/share/nginx/html; index index.html; } location /health { return 200 "healthy\n"; add_header Content-Type text/plain; } }`
        
    
    > You can also click **Import from File** to create a ConfigMap from a JSON file.
    

### kubectl

1.  Connect to the ACK cluster using kubectl.
    
2.  Create the ConfigMap.
    
    ```
       kubectl create configmap app-config \
         --namespace=default \
         --from-literal=nginx.conf="$(cat <<'EOF'
       server {
           listen 80;
           location / {
               root /usr/share/nginx/html;
               index index.html;
           }
           location /health {
               return 200 "healthy\n";
               add_header Content-Type text/plain;
           }
       }
       EOF
       )"
    ```
    
3.  Verify the ConfigMap. The output `DATA: 1` confirms that the ConfigMap was created.
    
    ```
       kubectl get configmap app-config
    ```
    

## Mount a ConfigMap as a volume (recommended)

Mount a ConfigMap as a volume to expose configuration data as files inside the container. Changes to the ConfigMap automatically sync to the mounted files without requiring a pod restart.

### Console

1.  Log on to the[ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  Click the name of the target cluster. In the left-side navigation pane, choose **Workloads** > **Deployments**.
    
3.  On the **Stateless** page, click **Create From Image**.
    
4.  On the **Basic Information** page, configure the following settings and click **Next**.
    
    **Setting**
    
    **Value**
    
    **Name**
    
    `nginx-volume-demo`
    
    **Namespace**
    
    `default`
    
    **Replicas**
    
    `2`
    
    **Type**
    
    `Stateless (Deployment)`
    
5.  On the **Container Configuration** page, configure the image and port.
    
    **Setting**
    
    **Value**
    
    **Image Name**
    
    `anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6`
    
    **Container Port**
    
    `80`, Protocol: `TCP`
    
6.  In the **Volumes** section, click **Add Local Storage** and configure the following settings. Then click **Next**.
    
    **Setting**
    
    **Value**
    
    **PV Type**
    
    ConfigMap
    
    **Name**
    
    `nginx-config`
    
    **Mount Source**
    
    `app-config`
    
    **Container Path**
    
    `/etc/nginx/conf.d`
    
7.  On the **Advanced Configuration** page, configure scaling, scheduling, and labels and annotations as needed. Click **Create**.
    
8.  In the **Application Creation Task Submitted** panel, click **View Application Details** and verify that the pod status is `Running`.
    
9.  Verify the mounted ConfigMap. Select the target container (for example, nginx-volume-demo-7xxxxxx\*\*\*\*). In the **Actions** column, click **Terminal** and select nginx.
    
    1.  List the mounted files: `bash ls -la /etc/nginx/conf.d/`
        
        The output contains the nginx.conf file, confirming the ConfigMap is mounted.
        
    2.  Check the file content: `bash cat /etc/nginx/conf.d/nginx.conf`
        
        The output matches the ConfigMap content.
        

### kubectl

1.  Create a file named `nginx-volume-demo.yaml` with the following content:
    
    ```
       apiVersion: apps/v1
       kind: Deployment
       metadata:
         name: nginx-volume-demo
         namespace: default
       spec:
         replicas: 2
         selector:
           matchLabels:
             app: nginx-volume
         template:
           metadata:
             labels:
               app: nginx-volume
           spec:
             containers:
             - name: nginx
               image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
               ports:
               - containerPort: 80
               volumeMounts:
               - name: nginx-config       # Volume name reference
                 mountPath: /etc/nginx/conf.d
             volumes:
             - name: nginx-config         # Volume name
               configMap:
                 name: app-config         # ConfigMap name
                 items:
                 - key: nginx.conf        # Key from the ConfigMap
                   path: nginx.conf       # File name in the mount path
    ```
    
2.  Apply the Deployment.
    
    ```
       kubectl apply -f nginx-volume-demo.yaml
    ```
    
3.  Verify that the pods are running. A `Running` status confirms successful creation.
    
    ```
       kubectl get pods -l app=nginx-volume -n default
    ```
    
4.  Verify the mounted file. The output contains the `nginx.conf` file.
    
    ```
       kubectl exec deployment/nginx-volume-demo -n default -- ls -la /etc/nginx/conf.d/
    ```
    
5.  Verify the file content. The output matches the ConfigMap content.
    
    ```
       kubectl exec deployment/nginx-volume-demo -n default -- cat /etc/nginx/conf.d/nginx.conf
    ```
    

## Inject a ConfigMap as environment variables

Inject all key-value pairs from a ConfigMap as environment variables in the container. Environment variables are set at pod startup and do not automatically update when the ConfigMap changes.

### Console

1.  Log on to the[ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  Click the name of the target cluster. In the left navigation pane, choose **Workloads** > **Deployments**.
    
3.  On the **Stateless** page, click **Create From Image**.
    
4.  On the **Basic Information** page, configure the following settings and click **Next**.
    
    **Setting**
    
    **Value**
    
    **Application Name**
    
    `nginx-env-demo`
    
    **Namespace**
    
    `default`
    
    **Replicas**
    
    `2`
    
    **Type**
    
    `Stateless (Deployment)`
    
5.  On the **Container Configuration** page, configure the image and port.
    
    **Setting**
    
    **Value**
    
    **Image Name**
    
    `anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6`
    
    **Container Port**
    
    `80`, Protocol: `TCP`
    
6.  In the **Environment Variables** section, click **Add** and configure the following settings. Then click **Next**.
    
    **Setting**
    
    **Value**
    
    Type
    
    configuration item
    
    Name
    
    `CONFIG_`
    
    Variable/Variable reference
    
    `app-config`
    
7.  On the **Advanced Configuration** page, configure scaling, scheduling, and labels and annotations as needed. Then click **Create**.
    
8.  In the **Application Creation Task Submitted** panel, click **View Application Details** and verify that the container status is `Running`.
    
9.  Verify the injected environment variables. Select the target container (for example, nginx-env-demo-7xxxxxx\*\*\*\*). In the **Actions** column, click **Terminal** and select nginx. The output shows the ConfigMap content as environment variables.
    
    ```
       env | grep CONFIG_
    ```
    

### kubectl

1.  Create a file named `nginx-env-demo.yaml` with the following content:
    
    ```
       apiVersion: apps/v1
       kind: Deployment
       metadata:
         name: nginx-env-demo
         namespace: default
       spec:
         replicas: 2
         selector:
           matchLabels:
             app: nginx-env
         template:
           metadata:
             labels:
               app: nginx-env
           spec:
             containers:
             - name: nginx
               image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
               ports:
               - containerPort: 80
               # Inject all key-value pairs from the ConfigMap.
               envFrom:
               - prefix: CONFIG_
                 configMapRef:
                   name: app-config
    ```
    
2.  Apply the Deployment.
    
    ```
       kubectl apply -f nginx-env-demo.yaml
    ```
    
3.  Verify that the pods are running. A `Running` status confirms successful creation.
    
    ```
       kubectl get pods -l app=nginx-env -n default
    ```
    
4.  Verify the injected environment variables. The output shows the ConfigMap content as environment variables.
    
    ```
       kubectl exec deployment/nginx-env-demo -n default -- env | grep CONFIG_
    ```
    

## Manage ConfigMaps

After you create ConfigMaps, manage them on the **Configuration** > **ConfigMaps** page.

**Operation**

**Steps**

Edit a ConfigMap

In the **Actions** column of the target ConfigMap, click **Edit**. Modify the **Name** and **Value** of the configuration item.

Delete a ConfigMap

In the **Actions** column of the target ConfigMap, click **Delete** to remove an unused ConfigMap.

**Important**

Modifying a ConfigMap that is in use directly affects the associated applications, which can cause service restarts or errors. Assess the impact before making changes and perform the operation during off-peak hours.

In addition, do not delete system-generated ConfigMaps in the kube-system and kube-public namespaces, such as the CoreDNS configuration. Deleting these ConfigMaps can affect cluster stability.

## References

-   [Troubleshoot pod exceptions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/pod-troubleshooting-1)
    
-   [Create a stateless Deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment)
    
-   [Kubernetes ConfigMaps documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/)
