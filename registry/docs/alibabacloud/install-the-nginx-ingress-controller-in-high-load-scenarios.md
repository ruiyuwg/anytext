If your NGINX Ingress controller frequently experiences high loads, you can improve its performance by adjusting the cluster network plug-in, node specifications, and controller configurations. This topic describes how to configure a high-performance NGINX Ingress controller.

**Important**

The configuration methods described in this topic are for reference only. You need to select specific configurations and parameter values based on the actual load of your controller.

## **Container network plug-in**

The Container Network Interface (CNI) plug-in of your cluster affects the network communication performance within the cluster, which in turn affects the performance of the NGINX Ingress controller. We recommend that you use Terway as the container network plug-in. If you have higher requirements for network performance, you can consider using Terway in exclusive elastic network interface (ENI) mode. However, this mode reduces the maximum number of pods that can be deployed on a node. For more information about Terway, see [Work with Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway).

## **Node specification selection**

The network performance of the NGINX Ingress controller pods is limited by the node specifications. For example, if the packets per second (PPS) of a node is 300,000, the maximum PPS of a controller pod is also 300,000. We recommend that you select the following high-performance Elastic Compute Service (ECS) instance types:

-   Compute-optimized instance: ecs.c6e.8xlarge (32 vCPUs, 64 GB, 6,000,000 PPS)
    
-   Network-optimized instance: ecs.g6e.8xlarge (32 vCPUs, 128 GB, 6,000,000 PPS)
    

For more information about ECS instance types, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).

## **NGINX Ingress controller configuration**

### **CLB instance** specification

The NGINX Ingress controller uses a Classic Load Balancer (CLB) instance to receive external requests. The specification of the CLB instance affects the performance of the controller. You can specify the CLB specification by using annotations in the Service that is associated with the NGINX Ingress controller.

**Change the CLB instance specification**

1.  Run the following command to change the Service that is associated with the NGINX Ingress controller:
    
    ```
    kubectl edit service -n kube-system nginx-ingress-lb
    ```
    
2.  Add the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec` annotation to the Service.
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      annotations:
        ...
        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec: "slb.s3.large" # Specify the CLB specification
      name: nginx-ingress-lb
      namespace: kube-system
      ...
    spec:
      ...
    ```
    
    **Important**
    
    Higher-specification instances incur higher costs. For information about the performance and billing of CLB specifications, see [Performance specifications](/help/en/slb/classic-load-balancer/user-guide/clb-instance/#title-x4j-hqs-xg5).
    

### Node exclusively occupied by a pod

Due to the basic overhead of NGINX, a single high-specification pod (such as a 32-vCPU pod) performs better than multiple low-specification pods (such as two 16-vCPU pods) with the same total resources. Therefore, while ensuring high availability, use a small number of high-specification pods instead of multiple lower-specification pods.

For example, create a node pool with high-specification but only a small number of nodes, and configure taints and tolerations to make each node exclusively occupied by an NGINX Ingress controller pod. This allows the NGINX Ingress controller to maximize resource utilization and is not affected by other applications in the cluster.

**Configure controller pods to exclusively occupy nodes**

1.  Create a new node pool in the cluster and configure the following parameters. For more information, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#task-2457443).
    
    -   Set **Expected Nodes** to 3.
        
    -   Set **Operating System** to **Alibaba Cloud Linux 3**.
        
    -   Configure **Node Labels** and **Taints**.
        
        -   In **Taints**, add `ingress-pod`, set **Value** to `yes`, and set **Effect** to **NoExecute**.
            
        -   In **Node Labels**, add `ingress-node` and set **Value** to `yes`.
            
    -   Set **CPU Policy** to **Static**.
        
2.  Run the following command to change the Deployment of the controller:
    
    ```
    kubectl edit deploy nginx-ingress-controller -n kube-system
    ```
    
3.  Make the following changes to the Deployment:
    
    1.  Set `replicas` to 3, which is the same as the number of nodes in the node pool.
        
        ```
        spec:
          replicas: 3
        ```
        
    2.  Modify the `nginx-ingress-controller` `requests` and `limits` of the container. Set CPU to 32 vCPUs and memory to 64 GB.
        
        ```
        containers:
          - args:
            ...
            resources:
              limits:
                cpu: "32"
                memory: 64Gi
              requests:
                cpu: "32"
                memory: 64Gi
        ```
        
    3.  Set node affinity and tolerations to ensure that pods are scheduled only to nodes with the `ingress-node:yes` label and can tolerate the `ingress-pod:yes` taint.
        
        ```
        nodeSelector:
          kubernetes.io/os: linux
          ingress-node: "yes"
        tolerations:
        - effect: NoExecute
          key: ingress-pod
          operator: Equal
          value: "yes"
        ```
        
    4.  Make sure that the Deployment has the following anti-affinity configuration, which ensures that each node has at most one NGINX Ingress controller pod.
        
        ```
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
              - key: app
              operator: In
              values:
              - ingress-nginx
           topologyKey: kubernetes.io/hostname
        ```
        

### **Disable metrics collection**

The NGINX Ingress controller collects metrics by default for other components to use. However, metrics collection consumes CPU resources. If you do not need to obtain metrics, we recommend that you disable metrics collection. You can disable all metrics collection by adding `--enable-metrics=false` to the NGINX startup parameters.

NGINX Ingress controller versions later than v1.9.3 include additional parameters for custom metrics collection. For example, after you add `--exclude-socket-metrics`, the collection of socket-related metrics is stopped. For more information about startup parameters, see [cli-arguments](https://github.com/kubernetes/ingress-nginx/blob/main/docs/user-guide/cli-arguments.md).

**Disable metrics collection**

1.  Run the following command to modify the Deployment of the controller:
    
    ```
    kubectl edit deploy nginx-ingress-controller -n kube-system
    ```
    
2.  Add `--enable-metrics=false` to the container configuration section to disable all metrics collection. `--exclude-socket-metrics` can stop the collection of socket-related metrics.
    
    ```
    containers:
    - args:
      - ...
      - --enable-metrics=false
      - --exclude-socket-metrics # Valid when --enable-metrics=true
    ```
    

### Adjust timeout policies

You can reduce the timeout periods for FIN\_WAIT2 and TIME\_WAIT states to allow the NGINX Ingress controller to close connections that have completed data transmission more quickly, which reduces resource usage.

In the NGINX Ingress controller, the related configurations are:

-   `net.ipv4.tcp_fin_timeout`: The timeout period for the FIN\_WAIT2 state. The default value is 60 seconds.
    
-   `net.netfilter.nf_conntrack_tcp_timeout_time_wait`: The connection keep-alive time in the TIME\_WAIT state. The default value is 60 seconds.
    

**Important**

FIN\_WAIT2 and TIME\_WAIT are container kernel configurations. Modifying these configurations affects the performance of the NGINX Ingress controller. If you need to modify these configurations, make sure that you understand the principles of TCP connections. After you modify the configurations, continuously monitor the connection status and resource usage to ensure that the adjustments are safe and effective.

**Adjust timeout policies**

1.  Run the following command to modify the Deployment of the controller:
    
    ```
    kubectl edit deploy nginx-ingress-controller -n kube-system
    ```
    
2.  Add `sysctl -w net.ipv4.tcp_fin_timeout` and `sysctl -w net.netfilter.nf_conntrack_tcp_timeout_time_wait` to `initContainers`.
    
    ```
    initContainers:
          - command:  
            - /bin/sh
            - -c
            - |
              if [ "$POD_IP" != "$HOST_IP" ]; then
              mount -o remount rw /proc/sys
              sysctl -w net.core.somaxconn=65535
              sysctl -w net.ipv4.ip_local_port_range="1024 65535"
              sysctl -w kernel.core_uses_pid=0
              sysctl -w net.ipv4.tcp_fin_timeout=15 # Set the upper limit of the FIN_WAIT2 state to 15 seconds
              sysctl -w net.netfilter.nf_conntrack_tcp_timeout_time_wait=30 # Set the upper limit of the TIME_WAIT state to 30 seconds
              fi
    ```
    

### **ConfigMap configuration**

The global configuration of the NGINX Ingress controller is stored in a ConfigMap. Run the following command to modify it:

```
kubectl edit cm -n kube-system nginx-configuration
```

#### **Parameter description**

The following table describes the key parameters in the ConfigMap.

**Configuration item**

**Configuration parameter**

**Description**

Downstream `keepalive`

`keep-alive: "60"`

Specifies the timeout period of downstream `keepalive` connections. Unit: seconds.

`keep-alive-requests: "10000"`

Specifies the maximum number of downstream `keepalive` requests.

Upstream `keepalive`

`upstream-keepalive-connections: "1000"`

The maximum number of upstream `keepalive` connections.

`upstream-keepalive-requests: "2147483647"`

The maximum number of upstream `keepalive` requests that are allowed.

`upstream-keepalive-time: 1h`

The maximum keep-alive time of upstream `keepalive` connections.

`upstream-keepalive-timeout: "150"`

Specifies the idle timeout period of upstream `keepalive` connections. Unit: seconds.

Connection upper limit of each work process

`max-worker-connections: "65536"`

The maximum number of simultaneous connections that can be opened by a worker process.

Timeout settings

**Note**

You can modify the parameter values based on your business requirements.

`proxy-connect-timeout: "3"`

The timeout period for establishing a connection. Unit: seconds.

`proxy-read-timeout: "5"`

The timeout period for reading data. Unit: seconds.

`proxy-send-timeout: "5"`

The timeout period for sending data. Unit: seconds.

Retry settings

**Note**

When errors occur on backend services, multiple retries may lead to excessive requests. This may increase the load on the backend services or even cause a service avalanche. For more information, see [Ingress-nginx official documentation](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#proxy-next-upstream).

`proxy-next-upstream-tries: "3"`

The number of retries after a request fails to be sent. Default value: 3. The default value includes the original request and two retries.

`proxy-next-upstream: "off"`

The conditions in which retries are triggered. To disable retries, set the value to `off`.

`proxy-next-upstream-timeout`

The timeout period of a request retry. Unit: seconds. Modify the value based on your business requirements.

#### **Configure automatic log rotation**

By default, the NGINX Ingress controller pod records logs to `/dev/stdout`. As the log file grows, more resources are consumed to record new logs. Reduce the resource consumption of log recording by periodically rotating logs. This method saves logs from a specific time period to a separate file and clears the original log records.

1.  Log on to the ECS node where the NGINX Ingress controller pod is deployed by using SSH. For more information, see [Connect to a Linux instance using OpenSSH or Xshell](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-an-ssh-key-pair).
    
2.  Add the `nginx-log-rotate.sh` file to the `/root` directory.
    
    ## Containerd node
    
    ```
    #!/bin/bash
    # Specify the maximum number of log files that are retained. You can change the number based on your requirements.
    keep_log_num=5
    
    #Get the IDs of all running ingress-nginx containers
    ingress_nginx_container_ids=$(crictl ps | grep nginx-ingress-controller | grep -v pause | awk '{print $1}')
    if [[ -z "$ingress_nginx_container_ids" ]]; then
     echo "error: failed to get ingress nginx container ids"
     exit 1
    fi
    
    # Make the NGINX Ingress controller pods sleep for a time period of a random length between 5 and 10 seconds.
    sleep $(( RANDOM % (10 - 5 + 1 ) + 5 ))
    for id in $ingress_nginx_container_ids; do
     crictl exec $id bash -c "cd /var/log/nginx; if [[ \$(ls access.log-* | wc -l) -gt $keep_log_num ]]; then rm -f \$(ls -t access.log-* | tail -1); fi ; mv access.log access.log-\$(date +%F:%T) ; kill -USR1 \$(cat /tmp/nginx/nginx.pid)"
    done	
    ```
    
    ## Docker node
    
    ```
    #!/bin/bash
    # Specify the maximum number of log files that are retained. You can change the number based on your requirements.
    keep_log_num=5
    
    #Get the IDs of all running ingress-nginx containers
    ingress_nginx_container_ids=$(docker ps | grep nginx-ingress-controller | grep -v pause | awk '{print $1}')
    if [[ -z "$ingress_nginx_container_ids" ]]; then
     echo "error: failed to get ingress nginx container ids"
     exit 1
    fi
    
    # Make the NGINX Ingress controller pods sleep for a time period of a random length between 5 and 10 seconds.
    sleep $(( RANDOM % (10 - 5 + 1 ) + 5 ))
    for id in $ingress_nginx_container_ids; do
     docker exec $id bash -c "cd /var/log/nginx; if [[ \$(ls access.log-* | wc -l) -gt $keep_log_num ]]; then rm -f \$(ls -t access.log-* | tail -1); fi ; mv access.log access.log-\$(date +%F:%T) ; kill -USR1 \$(cat /tmp/nginx/nginx.pid)"
    done	
    	
    ```
    
3.  Run the following command to add executable permissions to the `nginx-log-rotate.sh` file:
    
    ```
    chmod 755 /root/nginx-log-rotate.sh
    ```
    
4.  Add the following content to the end of the `/etc/crontab` file:
    
    ```
    */15 * * * *  root /root/nginx-log-rotate.sh
    ```
    
    **Note**
    
    This example uses a cron expression to rotate logs every 15 minutes. Adjust the frequency based on your requirements.
    

#### **Enable Brotli compression**

Although data compression consumes additional CPU time, compressed data packets reduce bandwidth usage, which increases network throughput. Brotli is an open source compression algorithm developed by Google. Compared with the commonly used `gzip` compression algorithm (which is used by the NGINX Ingress controller by default), Brotli typically achieves a 15% to 30% higher compression ratio for text data such as web resources. However, the specific improvement depends on the details of the scenario. To enable Brotli compression in the NGINX Ingress controller, configure the following parameters:

-   `enable-brotli`: Specifies whether to enable the Brotli compression algorithm. Valid values: `true` and `false`.
    
-   `brotli-level`: The compression level. Valid values: 1 to 11. Default value: 4. A higher compression level requires a higher amount of CPU resources.
    
-   `brotli-types`: The Multipurpose Internet Mail Extensions (MIME) types for which Brotli real-time compression is used.
    

Enable Brotli compression by adding the following configurations to the ConfigMap:

```
data:
  enable-brotli: "true"
  brotli-level: "6"
  brotli-types: "text/xml image/svg+xml application/x-font-ttf image/vnd.microsoft.icon application/x-font-opentype application/json font/eot application/vnd.ms-fontobject application/javascript font/otf application/xml application/xhtml+xml text/javascript application/x-javascript text/plain application/x-font-truetype application/xml+rss image/x-icon font/opentype text/css image/x-win-bitmap"
```

#### **HTTPS performance optimization**

To improve the HTTPS performance of the NGINX Ingress controller, configure the following parameters: SSL session caching, OCSP stapling, TLS 1.3 early data, and cipher suite priorities.

-   SSL session caching and timeout
    
    You can reduce the overhead of SSL handshakes by setting the size of the [SSL shared session cache](https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_session_cache) and the time period for [reusing sessions stored in the cache](https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_session_timeout).
    
    -   ConfigMap configuration:
        
        ```
        data:
          ssl-session-cache-size: "10m"
          ssl-session-timeout: "10m"
        ```
        
    -   The corresponding `nginx.conf` configuration on the NGINX side. Adjust the configuration based on your business requirements.
        
        ```
        ssl_session_cache shared:SSL:120m;   # 1m can store 4,000 sessions.
        ssl_session_timeout 1h;              # The session timeout period is 1 hour.
        ```
        
-   Enable OCSP stapling
    
    OCSP stapling reduces the time required for client certificate verification.
    
    ```
    data:
      enable-ocsp: "true"
    ```
    
-   Support for TLS 1.3 early data (0-RTT)
    
    The TLS 1.3 early data feature, also known as zero round trip-time (0-RTT), enables clients to send data before the handshake is completed. This reduces response time.
    
    ```
    data:
      ssl-early-data: "true"
      ssl-protocols: "TLSv1.3"
    ```
    
-   Cipher suite priorities (no manual tuning required)
    
    Adjust the cipher suite priorities to reduce network latency. ACK has optimized the cipher suite priorities for the NGINX Ingress controller configurations.
    
    ```
    ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384';
    ssl_prefer_server_ciphers on;    # Prioritize the cipher configuration on the server side.
    ```
