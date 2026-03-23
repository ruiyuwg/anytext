LoongCollector is the next-generation log collection agent for Alibaba Cloud Simple Log Service (SLS) and is an upgraded version of Logtail. This topic describes how to install LoongCollector in a Kubernetes cluster. You can install it in either DaemonSet mode or Sidecar mode.

## **Preparations**

Before you install LoongCollector, verify the network connection between your cluster nodes and the SLS endpoint. This ensures that LoongCollector can report data correctly.

1.  **Obtain the service endpoint:**
    
    1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/?spm=a2c4g.11186623.0.0.70905a3dccueNa). In the project list, click the destination project.
        
    2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4287915571/p995186.png) icon next to the project name to go to the project overview page.
        
    3.  In the Endpoint section, locate the public and private endpoints for the project's region.
        
2.  **Test the connection:** Log on to the cluster node where you plan to install the LoongCollector component and run the following `curl` command. Replace `${ProjectName}` and `${SLS_ENDPOINT}` with your actual information.
    
    ```
    curl https://${Project_Name}.${SLS_ENDPOINT}
    ```
    
3.  **Check the result:**
    
    -   If the command returns `{"Error":{"Code":"OLSInvalidMethod",...}}`, the network connection between your node and SLS is working.
        
        **Note**
        
        This test verifies only network-layer connectivity. SLS returns an error because the request is missing required API parameters. This behavior is expected.
        
    -   If the command times out or returns other network-layer errors, such as `Connection refused`, this indicates a network connectivity failure. Check the node's network configuration, security group rules, or DNS resolution.
        

## **Choose an installation method**

Choose an installation method from the following table based on your cluster type and requirements.

**Installation method**

**Use cases**

[Install on an ACK cluster (DaemonSet mode)](#e164a5e1b0n2j)

Collect logs from [ACK managed and dedicated clusters](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/what-is-ack) within the **same Alibaba Cloud account and region**.

[Install on a self-managed cluster (DaemonSet mode)](#1c46d1a5b22o2)

-   Collect logs from Alibaba Cloud ACK clusters **across different Alibaba Cloud accounts or regions**.
    
-   Collect logs from Kubernetes clusters deployed in your self-managed data centers.
    
-   Collect logs from Kubernetes clusters deployed on **other cloud providers**.
    

[Install in Sidecar mode](#98831c165cj5h)

Collect logs from specific applications with the following requirements:

-   **Resource isolation**: Prevents the DaemonSet agent from affecting other pods on the node.
    
-   **Fine-grained collection**: Configure a separate collection source, filter rules, and output destination for each application.
    

## **Install on an ACK cluster (DaemonSet mode)**

**Note**

If you are using logtail-ds and want to upgrade to LoongCollector, you must uninstall logtail-ds before you install LoongCollector.

Install LoongCollector with a single click in the Alibaba Cloud Container Service for Kubernetes (ACK) console. By default, container logs from the cluster are collected into an SLS project in the same account and region. To collect logs across accounts or regions, see [Install on a self-managed cluster (DaemonSet mode)](#1c46d1a5b22o2).

#### **Install on an existing ACK managed cluster**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Logs and Monitoring** tab, find **loongcollector**, and click **Install**.
    
4.  After the installation is complete, SLS automatically creates the following resources in the region where the ACK cluster is located. Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) to view them.
    
    **Resource type**
    
    **Resource name**
    
    **Purpose**
    
    Project
    
    `k8s-log-${cluster_id}`
    
    A resource management unit that isolates logs from different services.
    
    Machine group
    
    `k8s-group-${cluster_id}`
    
    The machine group for loongcollector-ds. It is mainly used for log collection.
    
    `k8s-group-${cluster_id}-cluster`
    
    The machine group for loongcollector-cluster. It is mainly used for metric collection.
    
    `k8s-group-${cluster_id}-singleton`
    
    A single-instance machine group. It is mainly used for some single-instance collection configurations.
    
    Logstore
    
    `config-operation-log`
    
    **Important**
    
    Do not delete this logstore.
    
    Stores logs from the alibaba-log-controller in the LoongCollector component. **It is billed in the same way as a standard logstore. For more information, see** [Billing items for the pay-by-data-written mode](/help/en/sls/billing-items-in-the-pay-per-data-write-mode)**.** Do not create collection configurations in this logstore.
    

## **Install when creating a new ACK managed cluster**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  Click **Create Kubernetes Cluster**. On the **Advanced Settings** section, SLS is enabled by default. Click **Modify Default Configuration** to create a project or use an existing project.
    
    > This topic describes only the configurations related to SLS. For more information about other configuration items, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).
    
3.  When you select **Create Project**, SLS creates the following resources by default. Log on to [the Simple Log Service console](https://sls.console.alibabacloud.com/) to view them.
    
    **Resource type**
    
    **Resource name**
    
    **Purpose**
    
    Project
    
    `k8s-log-${cluster_id}`
    
    A resource management unit that isolates logs from different services.
    
    Machine group
    
    `k8s-group-${cluster_id}`
    
    The machine group for loongcollector-ds. It is mainly used for log collection.
    
    `k8s-group-${cluster_id}-cluster`
    
    The machine group for loongcollector-cluster. It is mainly used for metric collection.
    
    `k8s-group-${cluster_id}-singleton`
    
    A single-instance machine group. It is mainly used for some single-instance collection configurations.
    
    Logstore
    
    `config-operation-log`
    
    **Important**
    
    Do not delete this logstore.
    
    Stores logs from the alibaba-log-controller in the LoongCollector component. **It is billed in the same way as a standard logstore. For more information, see** [Billing items for the pay-by-data-written mode](/help/en/sls/billing-items-in-the-pay-per-data-write-mode)**.** Do not create collection configurations in this logstore.
    

## **Install on a self-managed cluster (DaemonSet mode)**

#### **Use cases**

-   Kubernetes clusters in self-managed data centers
    
-   Kubernetes clusters deployed on other cloud providers
    
-   Collecting container logs from Alibaba Cloud ACK clusters across different accounts or regions
    

**Note**

Ensure your self-managed cluster runs Kubernetes 1.6 or later.

#### **User guide**

1.  **Download and decompress the installation package**: On a machine where kubectl is installed and configured, run the command for your cluster's region to download LoongCollector and its dependent components.
    
    ```
    #China regions
    wget https://aliyun-observability-release-cn-shanghai.oss-cn-shanghai.aliyuncs.com/loongcollector/k8s-custom-pkg/3.0.12/loongcollector-custom-k8s-package.tgz; tar xvf loongcollector-custom-k8s-package.tgz; chmod 744 ./loongcollector-custom-k8s-package/k8s-custom-install.sh
    
    #Regions outside China
    wget https://aliyun-observability-release-ap-southeast-1.oss-ap-southeast-1.aliyuncs.com/loongcollector/k8s-custom-pkg/3.1.6/loongcollector-custom-k8s-package.tgz; tar xvf loongcollector-custom-k8s-package.tgz; chmod 744 ./loongcollector-custom-k8s-package/k8s-custom-install.sh
    ```
    
2.  **Modify the** `**values.yaml**` **configuration file**: In the `loongcollector-custom-k8s-package` folder, modify the `./loongcollector/values.yaml` configuration file.
    
    **Description**
    
    ## values.yaml
    
    ```
    # ===================== Required parameters =====================
    # The name of the project for log collection in this cluster. Example: k8s-log-custom-sd89ehdq
    projectName: ""
    # The region of the project. Example for Shanghai: cn-shanghai
    region: ""
    # The ID of the Alibaba Cloud account that owns the project. Enclose the ID in quotation marks. Example: "123456789"
    aliUid: ""
    # The network to use. Options: Internet or Intranet. Default: Internet
    net: Internet
    # The AccessKey ID and AccessKey secret of the Alibaba Cloud account or RAM user.
    accessKeyID: ""
    accessKeySecret: ""
    # A custom cluster ID. The ID can contain uppercase letters, lowercase letters, digits, and hyphens (-).
    clusterID: ""
    
    # ... Other optional parameters are omitted ...
    ```
    
    **projectName** `_String_` (Required)
    
    The name of the project to which LoongCollector uploads logs. The naming conventions are as follows:
    
    -   The project name can contain only lowercase letters, digits, and hyphens (-).
        
    -   It must start with a lowercase letter and end with a lowercase letter or a digit.
        
    -   The name must be 3 to 63 characters in length.
        
    
    **region** `_String_` (Required)
    
    The ID of the region where the project is located. For more information, see [Regions](#46ebf58207utn).
    
    **aliUid** `_String_` (Required)
    
    The ID of the **Alibaba Cloud account** that owns the project.
    
    **net** `_String_` (Required)
    
    The [network type](#7c492e9a328zt) used to transmit log data.
    
    -   Internet (default): The public network.
        
    -   Intranet: The internal network.
        
    
    **accessKeyID** `_String_` (Required)
    
    The AccessKey ID used to access the project. Use the AccessKey of a Resource Access Management (RAM) user and grant the AliyunLogFullAccess system policy to the RAM user. For more information about RAM, see [Overview of RAM users](/help/en/ram/user-guide/overview-of-ram-users).
    
    **accessKeySecret** `_String_` (Required)
    
    The AccessKey secret that corresponds to the specified AccessKey ID.
    
    **clusterID** `_String_` (Required)
    
    A custom ID for the cluster. The name can contain only uppercase letters, lowercase letters, digits, and hyphens (-).
    
    **Important**
    
    Do not use the same cluster ID for different Kubernetes clusters.
    
3.  **Execute the installation script**: In the `loongcollector-custom-k8s-package` folder, run the following command to install LoongCollector and its dependent components.
    
    ```
    bash k8s-custom-install.sh install
    ```
    
4.  **Verify the installation**: After the installation is complete, run the following command to check the component status:
    
    ```
    # Check the pod status
    kubectl get po -n kube-system | grep loongcollector-ds
    ```
    
    Sample result:
    
    ```
    loongcollector-ds-gnmnh   1/1     Running   0    63s
    ```
    
    If a component fails to start (its status is not Running):
    
    1.  Check the configuration: Verify that the configuration items in `values.yaml` are correct.
        
    2.  Check the image: Run the following command and check the `Events` section of the output to confirm that the container image was pulled successfully.
        
        ```
        kubectl describe pod loongcollector-ds -n kube-system
        ```
        
5.  After the components are installed, SLS automatically creates the following resources. Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) to view them.
    
    **Resource type**
    
    **Resource name**
    
    **Purpose**
    
    Project
    
    The value of `projectName` that you specified in the `values.yaml` file
    
    A resource management unit that isolates logs of different services.
    
    Machine group
    
    `k8s-group-${cluster_id}`
    
    A collection of log collection nodes.
    
    `k8s-group-${cluster_id}-cluster`
    
    The machine group for loongcollector-cluster, mainly used for metric collection.
    
    `k8s-group-${cluster_id}-singleton`
    
    A single-instance machine group, mainly used for single-instance collection configurations.
    
    Logstore
    
    `config-operation-log`
    
    **Important**
    
    Do not delete this logstore.
    
    Stores logs of the alibaba-log-controller component in LoongCollector. The billing is the same as that for a standard logstore. For more information, see [Billing items for the pay-by-data-written mode](/help/en/sls/billing-items-in-the-pay-per-data-write-mode). Do not create collection configurations in this logstore.
    

## **Install using the sidecar pattern**

Use the sidecar pattern for fine-grained log management, multi-tenant data isolation, or to bind log collection to the application lifecycle. This pattern injects a separate LoongCollector (Logtail) container into the application pod to enable dedicated log collection within that pod. If you have not deployed an application or want to test the process, use the [Appendix: YAML example](#5f07637b04nul) to quickly verify the flow.

### **1\. Modify the application pod YAML configuration**

1.  Define the shared volumes
    
    In `spec.template.spec.volumes`, add three shared volumes at the same level as the `containers` section:
    
    ```
    volumes:
      # Shared log directory (written by the application container, read by the Sidecar)
      - name: ${shared_volume_name} # <-- The name must be the same as the name in volumeMounts.
        emptyDir: {}
      
      # Signaling directory for inter-container communication (for graceful start and stop)
      - name: tasksite
        emptyDir:
          medium: Memory  # Use memory as the medium for better performance.
          sizeLimit: "50Mi"
      
      # Shared host timezone configuration: Synchronize the timezones of all containers in the pod.
      - name: tz-config # <-- The name must be the same as the name in volumeMounts.
        hostPath:
          path: /usr/share/zoneinfo/Asia/Shanghai  # Modify the timezone as needed.
    ```
    
2.  Configure the volume mounts for the application container
    
    In the `volumeMounts` section of your application container, such as `your-business-app-container`, add the following mount configurations:
    
    > Ensure that the application container writes logs to the `${shared_volume_path}` directory so that LoongCollector can collect them.
    
    ```
    volumeMounts:
      # Mount the shared log volume to the application log output directory.
      - name: ${shared_volume_name}
        mountPath: ${shared_volume_path}  # Example: /var/log/app
    
      # Mount the communication directory.
      - name: tasksite
        mountPath: /tasksite  # Shared directory for communication with the LoongCollector container.
    
      # Mount the timezone file.
      - name: tz-config
        mountPath: /etc/localtime
        readOnly: true
    ```
    
3.  Inject the LoongCollector Sidecar container
    
    In the `spec.template.spec.containers` array, add the following Sidecar container definition:
    
    ```
    - name: loongcollector
      image: aliyun-observability-release-registry.cn-shenzhen.cr.aliyuncs.com/loongcollector/loongcollector:v3.1.1.0-20fa5eb-aliyun
      command: ["/bin/bash", "-c"]
      args:
        - |
          echo "[$(date)] LoongCollector: Starting initialization"
          
          # Start the LoongCollector service.
          /etc/init.d/loongcollectord start
          
          # Wait for the configuration to be downloaded and the service to be ready.
          sleep 15
          
          # Verify the service status.
          if /etc/init.d/loongcollectord status; then
            echo "[$(date)] LoongCollector: Service started successfully"
            touch /tasksite/cornerstone
          else
            echo "[$(date)] LoongCollector: Failed to start service"
            exit 1
          fi
          
          # Wait for the application container to complete (via the tombstone file signal).
          echo "[$(date)] LoongCollector: Waiting for business container to complete"
          until [[ -f /tasksite/tombstone ]]; do
            sleep 2
          done
          
          # Allow time to upload remaining logs.
          echo "[$(date)] LoongCollector: Business completed, waiting for log transmission"
          sleep 30
          
          # Stop the service.
          echo "[$(date)] LoongCollector: Stopping service"
          /etc/init.d/loongcollectord stop
          echo "[$(date)] LoongCollector: Shutdown complete"
      # Health check
      livenessProbe:
        exec:
          command: ["/etc/init.d/loongcollectord", "status"]
        initialDelaySeconds: 30
        periodSeconds: 10
        timeoutSeconds: 5
        failureThreshold: 3
      # Resource configuration
      resources:
        requests:
          cpu: "100m"
          memory: "128Mi"
        limits:
          cpu: "2000m"
          memory: "2048Mi"
      # Environment variable configuration
      env:
        - name: ALIYUN_LOGTAIL_USER_ID
          value: "${your_aliyun_user_id}"
        - name: ALIYUN_LOGTAIL_USER_DEFINED_ID
          value: "${your_machine_group_user_defined_id}"
        - name: ALIYUN_LOGTAIL_CONFIG
          value: "/etc/ilogtail/conf/${your_region_config}/ilogtail_config.json"
        # Enable full drain mode to ensure all logs are sent before the pod terminates.
        - name: enable_full_drain_mode
          value: "true"  
        # Append pod environment information as log tags.
        - name: ALIYUN_LOG_ENV_TAGS
          value: "_pod_name_|_pod_ip_|_namespace_|_node_name_|_node_ip_"
        # Automatically inject pod and node metadata as log tags.
        - name: "_pod_name_"
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: "_pod_ip_"
          valueFrom:
            fieldRef:
              fieldPath: status.podIP
        - name: "_namespace_"
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        - name: "_node_name_"
          valueFrom:
            fieldRef:
              fieldPath: spec.nodeName
        - name: "_node_ip_"
          valueFrom:
            fieldRef:
              fieldPath: status.hostIP
      # Volume mounts (shared with the application container)
      volumeMounts:
        # Read-only mount of the application log directory.
        - name: ${shared_volume_name} # <-- Shared log directory name
          mountPath: ${dir_containing_your_files} # <-- Path of the shared directory in the sidecar
          readOnly: true
        # Mount the communication directory.
        - name: tasksite
          mountPath: /tasksite
        # Mount the timezone.
        - name: tz-config
          mountPath: /etc/localtime
          readOnly: true
    ```
    

### **2\. Modify the application container's lifecycle logic**

Depending on the workload type, you must modify the application container to support a coordinated exit with the Sidecar.

#### Short-lived tasks (Job/CronJob)

```
# 1. Wait for LoongCollector to be ready.
echo "[$(date)] Business: Waiting for LoongCollector to be ready..."
until [[ -f /tasksite/cornerstone ]]; do
  sleep 1
done
echo "[$(date)] Business: LoongCollector is ready, starting business logic"

# 2. Execute the core business logic (ensure logs are written to the shared directory).
echo "Hello, World!" >> /app/logs/business.log

# 3. Save the exit code.
retcode=$?
echo "[$(date)] Business: Task completed with exit code: $retcode"

# 4. Notify LoongCollector that the business task is complete.
touch /tasksite/tombstone
echo "[$(date)] Business: Tombstone created, exiting"

exit $retcode
```

#### Long-lived services (Deployment/StatefulSet)

```
# Define the signal handler function.
_term_handler() {
    echo "[$(date)] [nginx-demo] Caught SIGTERM, starting graceful shutdown..."

    # Send a QUIT signal to Nginx for a graceful stop.
    if [ -n "$NGINX_PID" ]; then
        kill -QUIT "$NGINX_PID" 2>/dev/null || true
        echo "[$(date)] [nginx-demo] Sent SIGQUIT to Nginx PID: $NGINX_PID"

        # Wait for Nginx to stop gracefully.
        wait "$NGINX_PID"
        EXIT_CODE=$?
        echo "[$(date)] [nginx-demo] Nginx stopped with exit code: $EXIT_CODE"
    fi

    # Notify LoongCollector that the application container has stopped.
    echo "[$(date)] [nginx-demo] Writing tombstone file"
    touch /tasksite/tombstone

    exit $EXIT_CODE
}

# Register the signal handler.
trap _term_handler SIGTERM SIGINT SIGQUIT

# Wait for LoongCollector to be ready.
echo "[$(date)] [nginx-demo]: Waiting for LoongCollector to be ready..."
until [[ -f /tasksite/cornerstone ]]; do 
    sleep 1
done
echo "[$(date)] [nginx-demo]: LoongCollector is ready, starting business logic"

# Start Nginx.
echo "[$(date)] [nginx-demo] Starting Nginx..."
nginx -g 'daemon off;' &
NGINX_PID=$!
echo "[$(date)] [nginx-demo] Nginx started with PID: $NGINX_PID"

# Wait for the Nginx process.
wait $NGINX_PID
EXIT_CODE=$?

# Also notify LoongCollector if the exit was not caused by a signal.
if [ ! -f /tasksite/tombstone ]; then
    echo "[$(date)] [nginx-demo] Unexpected exit, writing tombstone"
    touch /tasksite/tombstone
fi

exit $EXIT_CODE
```

### **3\. Set the graceful termination period**

In `spec.template.spec`, set a sufficient termination grace period to ensure that LoongCollector has enough time to upload the remaining logs.

```
spec:
  # ... Your other existing spec configurations ...
  template:
    spec:
      terminationGracePeriodSeconds: 600  # 10-minute graceful stop period
```

### **4\. Parameter description**

**Variable**

**Description**

`${your_aliyun_user_id}`

Set this to the ID of your Alibaba Cloud account. For more information, see [Configure user identifiers](/help/en/sls/configure-a-user-identifier#section-dzm-o12-6id).

`${your_machine_group_user_defined_id}`

Set a custom identifier for the machine group to create a custom machine group. For example, `nginx-log-sidecar`.

**Important**

Make sure that this identifier is unique within the region of your project.

`${your_region_config}`

Specify this based on the region of the Simple Log Service project and the network type for access. For information about regions, see [Service regions](/help/en/sls/sls-supported-regions1).

Example: If the project is in the China (Hangzhou) region, use `cn-hangzhou` for access over the Alibaba Cloud internal network, and use `cn-hangzhou-internet` for access over the public network.

`${shared_volume_name}`

Set a custom name for the volume.

**Important**

The `name` parameter under the `volumeMounts` node and the `name` parameter under the `volumes` node must be set to the same value. This ensures that the LoongCollector container and the application container mount the same volume.

`${dir_containing_your_files}`

Set the mount path, which is the directory in the container where the text logs to be collected are located.

### **5\. Apply the configuration and verify the result**

1.  Run the following command to deploy the changes:
    
    ```
    kubectl apply -f <YOUR-YAML>
    ```
    
2.  View the pod status to confirm that the LoongCollector container is successfully injected:
    
    ```
    kubectl describe pod <YOUR-POD-NAME>
    ```
    
    If you see two containers (the application container and the `loongcollector` container) and their status is normal, the injection is successful.
    

### **6\. Create a machine group with a custom identifier**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) and click the target project.
    
2.  In the navigation pane on the left, choose **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4287915571/p995093.png)Resources** > **Machine Groups**. Next to **Machine Groups**, click **![机器组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4287915571/p995019.png)** > **Create Machine Group**.
    
3.  In the **Create Machine Group** dialog box, configure the following parameters and click **OK**.
    
    -   **Name**: The name of the machine group. It cannot be modified after creation. The naming conventions are as follows:
        
        -   Can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
            
        -   Must start and end with a lowercase letter or a digit.
            
        -   Must be 2 to 128 characters in length.
            
    -   **Machine Group Identifier**: Select **Custom Identifier**.
        
    -   **Custom Identifier**: Enter the value of the `ALIYUN_LOGTAIL_USER_DEFINED_ID` environment variable that you set for the LoongCollector container in the YAML file in [1\. Modify the application pod YAML configuration](/help/en/sls/loongcollector-installation-kubernetes-1). **The value must be an exact match**. Otherwise, the association will fail.
        
4.  Check the heartbeat status of the machine group: After the machine group is created, click its name and view the heartbeat status in the status area.
    
    -   **OK:** Indicates that LoongCollector has successfully connected to SLS and the machine group is registered.
        
    -   **FAIL:**
        
        -   The configuration may not have taken effect yet. It takes about 2 minutes for the configuration to become effective. Refresh the page and try again later.
            
        -   If the status is still **FAIL** after 2 minutes, see [Troubleshoot Logtail machine group issues](/help/en/sls/troubleshoot-the-errors-related-to-logtail-machine-groups#concept-nfs-hs3-bfb) to diagnose the issue.
            

> Each pod corresponds to a separate LoongCollector instance. Use different custom identifiers for different applications or environments to facilitate fine-grained management.

## **FAQ**

### **How do I modify the LoongCollector configuration for an ACK managed cluster to collect logs across accounts or regions?**

If you installed LoongCollector from the Alibaba Cloud ACK console, it collects container logs from the cluster to an SLS project under the same Alibaba Cloud account by default. To collect container logs across accounts or regions, use one of the following two methods:

**Method 1: Uninstall and reinstall.**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Logs and Monitoring** tab, find **loongcollector** and click **Uninstall**.
    
4.  Reinstall the component. For more information, see [Install on a self-managed cluster (DaemonSet mode)](#1c46d1a5b22o2).
    

**Method 2: Update the Helm configuration and redeploy LoongCollector.**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). Enter the cluster page. In the left navigation pane, choose **Applications** > **Helm**.
    
2.  On the Helm page, find **loongcollector**, and in the Actions column, click **Update**. On the **Update Release** page, modify only the configurations described in the following table, and then click **OK**.
    
    **Cluster and project**
    
    **Parameter to modify**
    
    **Same account, different region**
    
    `**region**`: The [Region ID](#46ebf58207utn) of the region where the SLS Project is located.
    
    `**net**`: Set the value to \`Internet\`. Data cannot be transferred between different regions over an internal network.
    
    **Different account, same region**
    
    `**aliUid**`: The ID of the Alibaba Cloud account where the SLS Project resides. Separate multiple account IDs with commas (,).
    
    `**net**`: Set the value to \`Intranet\`. Data can be transferred within the same region over the internal network.
    
    **Different account, different region**
    
    `**aliUid**`: The ID of the Alibaba Cloud account where the SLS Project resides. Separate multiple account IDs with commas (,).
    
    `**region**`: The [Region ID](#46ebf58207utn) of the region where the Project is located.
    
    `**net**`: Set the value to \`Internet\`. Data cannot be transferred between different regions over an internal network.
    
3.  **Create a machine group**:
    
    1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) and click the target Project.
        
    2.  In the left navigation pane, go to **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4287915571/p995092.png)Resources** > **Machine Groups**. To the right of **Machine Groups**, click **![机器组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4287915571/p995019.png)** > **Create Machine Group**.
        
    3.  In the **Create Machine Group** dialog box, configure the following parameters and click **OK**.
        
        1.  Enter a name for the machine group.
            
        2.  Set **Machine Group Identifier** to **Custom Identifier**.
            
        3.  In the **Custom Identifier** field, enter `k8s-group-${cluster_id}`. Replace `${cluster_id}` with the actual `clusterID` of your cluster.
            
    4.  After a machine group is created, find it in the machine group list and click its name. In the **Machine Group Configurations** > **Machine Group Status** section, check the **Heartbeat** status. A status of OK indicates that the machine group was created successfully. If the heartbeat fails, verify the user identity and custom identifier.
        
4.  After you modify the configuration, click **OK**.
    

* * *

### **How do I collect container logs from Alibaba Cloud ACK Edge, ACK One, ACS, and ACK Serverless clusters?**

-   You cannot install LoongCollector on Alibaba Cloud [ACK Edge](/help/en/ack/ack-edge/product-overview/ack-edge-overview) and [ACK One](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/product-overview/ack-one-overview) clusters. To collect logs, see the following topics:
    
    -   [Collect container logs using Simple Log Service](/help/en/ack/ack-edge/user-guide/use-log-service-to-collect-log-data-from-containers-of-ack-edge-clusters)
        
    -   [Connect Simple Log Service to an ACK One registered cluster](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/enable-log-service-for-an-external-kubernetes-cluster)
        
-   LoongCollector installation is not required for Alibaba Cloud [ACS](/help/en/cs/product-overview/product-introduction) and [ACK Serverless clusters](/help/en/ack/serverless-kubernetes/product-overview/ask-overview). You must deploy the `alibaba-log-controller` component. To collect logs, see the following topics:
    
    -   [Use a CRD to collect application logs from an ACS cluster](/help/en/cs/user-guide/use-crd-to-collect-application-logs)
        
    -   [Use a CRD to collect application logs from an ACK Serverless cluster](/help/en/ack/serverless-kubernetes/user-guide/enable-log-service-for-an-ask-cluster)
        

## **Next steps**

After you install LoongCollector, see [Collect container logs from a Kubernetes cluster](/help/en/sls/kubernetes-cluster-container-log-collection-instructions). This topic describes core principles, key processes, selection recommendations, and best practices. Then, create a collection configuration using one of the following methods:

-   [Kubernetes-CRD](/help/en/sls/collect-text-logs-of-self-built-k8s-clusters-deploy-logtail-in-daemonset-mode-2)
    
-   [Simple Log Service console](/help/en/sls/container-log-collection-in-a-kubernetes-cluster/)
    

## **Appendix: YAML examples**

This example provides a complete Kubernetes deployment configuration that includes an NGINX application container and a LoongCollector sidecar container. This configuration is suitable for collecting container logs using the sidecar pattern.

Before you start, make the following three replacements:

1.  Replace `${your_aliyun_user_id}` with your Alibaba Cloud account UID.
    
2.  Replace `${your_machine_group_user_defined_id}` with [the custom ID of the machine group that you created in Step 3](/help/en/sls/collect-k8s-cluster-logs-through-sidecar#e2a07b3535pcu). The ID must be an exact match.
    
3.  Replace `${your_region_config}` with the configuration name that matches the region and network type of your SLS project.
    
    For example, for a project in the China (Hangzhou) region, use `cn-hangzhou` for internal network access or `cn-hangzhou-internet` for public network access.
    

### Short-lived tasks (Job/CronJob)

```
apiVersion: batch/v1
kind: Job
metadata:
  name: demo-job
spec:
  backoffLimit: 3                   
  activeDeadlineSeconds: 3600        
  completions: 1                     
  parallelism: 1                    
  
  template:
    spec:
      restartPolicy: Never         
      terminationGracePeriodSeconds: 300 
      
      containers:
        # Application container
        - name: demo-job
          image: debian:bookworm-slim
          command: ["/bin/bash", "-c"]
          args:
            - |
              # Wait for LoongCollector to be ready.
              echo "[$(date)] Business: Waiting for LoongCollector to be ready..."
              until [[ -f /tasksite/cornerstone ]]; do 
                sleep 1
              done
              echo "[$(date)] Business: LoongCollector is ready, starting business logic"
              
              # Execute business logic.
              echo "Hello, World!" >> /app/logs/business.log
              
              # Save the exit code.
              retcode=$?
              echo "[$(date)] Business: Task completed with exit code: $retcode"
              
              # Notify LoongCollector that the business task is complete.
              touch /tasksite/tombstone
              echo "[$(date)] Business: Tombstone created, exiting"
              
              exit $retcode
          
          # Resource limits
          resources:
            requests:
              cpu: "100m"
              memory: "128Mi"
            limits:
              cpu: "500"
              memory: "512Mi"
          
          # Volume mounts
          volumeMounts:
            - name: app-logs
              mountPath: /app/logs
            - name: tasksite
              mountPath: /tasksite


        # LoongCollector Sidecar container
        - name: loongcollector
          image: aliyun-observability-release-registry.cn-hongkong.cr.aliyuncs.com/loongcollector/loongcollector:v3.1.1.0-20fa5eb-aliyun
          command: ["/bin/bash", "-c"]
          args:
            - |
              echo "[$(date)] LoongCollector: Starting initialization"
              
              # Start the LoongCollector service.
              /etc/init.d/loongcollectord start
              
              # Wait for the configuration to be downloaded and the service to be ready.
              sleep 15
              
              # Verify the service status.
              if /etc/init.d/loongcollectord status; then
                echo "[$(date)] LoongCollector: Service started successfully"
                touch /tasksite/cornerstone
              else
                echo "[$(date)] LoongCollector: Failed to start service"
                exit 1
              fi
              
              # Wait for the application container to complete.
              echo "[$(date)] LoongCollector: Waiting for business container to complete"
              until [[ -f /tasksite/tombstone ]]; do 
                sleep 2
              done
              
              echo "[$(date)] LoongCollector: Business completed, waiting for log transmission"
              # Allow enough time to transmit remaining logs.
              sleep 30
              
              echo "[$(date)] LoongCollector: Stopping service"
              /etc/init.d/loongcollectord stop
              
              echo "[$(date)] LoongCollector: Shutdown complete"
          
          # Health check
          livenessProbe:
            exec:
              command: ["/etc/init.d/loongcollectord", "status"]
            initialDelaySeconds: 30
            periodSeconds: 10
            timeoutSeconds: 5
            failureThreshold: 3
          
          # Resource configuration
          resources:
            requests:
              cpu: "100m"
              memory: "128Mi"
            limits:
              cpu: "500m"
              memory: "512Mi"
          
          # Environment variable configuration
          env:
            - name: ALIYUN_LOGTAIL_USER_ID
              value: "your-user-id"
            - name: ALIYUN_LOGTAIL_USER_DEFINED_ID
              value: "your-user-defined-id"
            - name: ALIYUN_LOGTAIL_CONFIG
              value: "/etc/ilogtail/conf/cn-hongkong/ilogtail_config.json"
            - name: ALIYUN_LOG_ENV_TAGS
              value: "_pod_name_|_pod_ip_|_namespace_|_node_name_"
            
            # Pod information injection
            - name: "_pod_name_"
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: "_pod_ip_"
              valueFrom:
                fieldRef:
                  fieldPath: status.podIP
            - name: "_namespace_"
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
            - name: "_node_name_"
              valueFrom:
                fieldRef:
                  fieldPath: spec.nodeName
          
          # Volume mounts
          volumeMounts:
            - name: app-logs
              mountPath: /app/logs
              readOnly: true
            - name: tasksite
              mountPath: /tasksite
            - name: tz-config
              mountPath: /etc/localtime
              readOnly: true
      
      # Volume definitions
      volumes:
        - name: app-logs
          emptyDir: {}
        - name: tasksite
          emptyDir:
            medium: Memory
            sizeLimit: "10Mi"
        - name: tz-config
          hostPath:
            path: /usr/share/zoneinfo/Asia/Shanghai

```

### Long-lived services (Deployment/StatefulSet)

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-demo
  namespace: production
  labels:
    app: nginx-demo
    version: v1.0.0
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1      
      maxSurge: 1          
  selector:
    matchLabels:
      app: nginx-demo
  template:
    metadata:
      labels:
        app: nginx-demo
        version: v1.0.0    
    spec:
      terminationGracePeriodSeconds: 600  # 10-minute graceful stop period
      
      containers:
        # Application container - Web application
        - name: nginx-demo
          image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6          
          # Start command and signal handling
          command: ["/bin/sh", "-c"]
          args:
            - |
              # Define the signal handler function.
              _term_handler() {
                  echo "[$(date)] [nginx-demo] Caught SIGTERM, starting graceful shutdown..."
                  
                  # Send a QUIT signal to Nginx for a graceful stop.
                  if [ -n "$NGINX_PID" ]; then
                      kill -QUIT "$NGINX_PID" 2>/dev/null || true
                      echo "[$(date)] [nginx-demo] Sent SIGQUIT to Nginx PID: $NGINX_PID"
                      
                      # Wait for Nginx to stop gracefully.
                      wait "$NGINX_PID"
                      EXIT_CODE=$?
                      echo "[$(date)] [nginx-demo] Nginx stopped with exit code: $EXIT_CODE"
                  fi
                  
                  # Notify LoongCollector that the application container has stopped.
                  echo "[$(date)] [nginx-demo] Writing tombstone file"
                  touch /tasksite/tombstone
                  
                  exit $EXIT_CODE
              }
              
              # Register the signal handler.
              trap _term_handler SIGTERM SIGINT SIGQUIT

              # Wait for LoongCollector to be ready.
              echo "[$(date)] [nginx-demo]: Waiting for LoongCollector to be ready..."
              until [[ -f /tasksite/cornerstone ]]; do 
                sleep 1
              done
              echo "[$(date)] [nginx-demo]: LoongCollector is ready, starting business logic"
              
              # Start Nginx.
              echo "[$(date)] [nginx-demo] Starting Nginx..."
              nginx -g 'daemon off;' &
              NGINX_PID=$!
              echo "[$(date)] [nginx-demo] Nginx started with PID: $NGINX_PID"
              
              # Wait for the Nginx process.
              wait $NGINX_PID
              EXIT_CODE=$?
              
              # Also notify LoongCollector if the exit was not caused by a signal.
              if [ ! -f /tasksite/tombstone ]; then
                  echo "[$(date)] [nginx-demo] Unexpected exit, writing tombstone"
                  touch /tasksite/tombstone
              fi
              
              exit $EXIT_CODE
                    
          # Resource configuration
          resources:
            requests:
              cpu: "200m"
              memory: "256Mi"
            limits:
              cpu: "1000m"
              memory: "1Gi"
          
          # Volume mounts
          volumeMounts:
            - name: nginx-logs
              mountPath: /var/log/nginx
            - name: tasksite
              mountPath: /tasksite
            - name: tz-config
              mountPath: /etc/localtime
              readOnly: true

        # LoongCollector Sidecar container
        - name: loongcollector
          image: aliyun-observability-release-registry.cn-shenzhen.cr.aliyuncs.com/loongcollector/loongcollector:v3.1.1.0-20fa5eb-aliyun
          command: ["/bin/bash", "-c"]
          args:
            - |
              echo "[$(date)] LoongCollector: Starting initialization"
              
              # Start the LoongCollector service.
              /etc/init.d/loongcollectord start
              
              # Wait for the configuration to be downloaded and the service to be ready.
              sleep 15
              
              # Verify the service status.
              if /etc/init.d/loongcollectord status; then
                echo "[$(date)] LoongCollector: Service started successfully"
                touch /tasksite/cornerstone
              else
                echo "[$(date)] LoongCollector: Failed to start service"
                exit 1
              fi
              
              # Wait for the application container to complete.
              echo "[$(date)] LoongCollector: Waiting for business container to complete"
              until [[ -f /tasksite/tombstone ]]; do 
                sleep 2
              done
              
              echo "[$(date)] LoongCollector: Business completed, waiting for log transmission"
              # Allow enough time to transmit remaining logs.
              sleep 30
              
              echo "[$(date)] LoongCollector: Stopping service"
              /etc/init.d/loongcollectord stop
              
              echo "[$(date)] LoongCollector: Shutdown complete"
          
          # Health check
          livenessProbe:
            exec:
              command: ["/etc/init.d/loongcollectord", "status"]
            initialDelaySeconds: 30
            periodSeconds: 10
            timeoutSeconds: 5
            failureThreshold: 3
          # Resource configuration
          resources:
            requests:
              cpu: "100m"
              memory: "128Mi"
            limits:
              cpu: "2000m"
              memory: "2048Mi"
          
          # Environment variable configuration
          env:
            - name: ALIYUN_LOGTAIL_USER_ID
              value: "${your_aliyun_user_id}"
            - name: ALIYUN_LOGTAIL_USER_DEFINED_ID
              value: "${your_machine_group_user_defined_id}"
            - name: ALIYUN_LOGTAIL_CONFIG
              value: "/etc/ilogtail/conf/${your_region_config}/ilogtail_config.json"
            
            # Enable full drain mode to ensure all logs are sent when the pod stops.
            - name: enable_full_drain_mode
              value: "true"
            
            # Append pod environment information as log tags.
            - name: "ALIYUN_LOG_ENV_TAGS"
              value: "_pod_name_|_pod_ip_|_namespace_|_node_name_|_node_ip_"
            # Get pod and node information.
            - name: "_pod_name_"
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: "_pod_ip_"
              valueFrom:
                fieldRef:
                  fieldPath: status.podIP
            - name: "_namespace_"
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
            - name: "_node_name_"
              valueFrom:
                fieldRef:
                  fieldPath: spec.nodeName
            - name: "_node_ip_"
              valueFrom:
                fieldRef:
                  fieldPath: status.hostIP
          
          # Volume mounts
          volumeMounts:
            - name: nginx-logs
              mountPath: /var/log/nginx
              readOnly: true
            - name: tasksite
              mountPath: /tasksite
            - name: tz-config
              mountPath: /etc/localtime
              readOnly: true
      
      # Volume definitions
      volumes:
        - name: nginx-logs
          emptyDir: {}
        - name: tasksite
          emptyDir:
            medium: Memory
            sizeLimit: "50Mi"
        - name: tz-config
          hostPath:
            path: /usr/share/zoneinfo/Asia/Shanghai

```

## **Related information**

### **Regions**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/?spm=a2c4g.11186623.0.0.70905a3dccueNa). In the Project list, click the destination project.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4287915571/p995186.png) icon to the right of the project name to open the project overview page.
    
3.  In the Basic Information section, view the region name of the current project. For the mapping between region names and Region IDs, see the following table.
    
    > A region is the geographical location of the physical data center for an Alibaba Cloud service. A Region ID is the unique identifier of an Alibaba Cloud service region.
    
    **Region name**
    
    **Region ID**
    
    China (Qingdao)
    
    cn-qingdao
    
    China (Beijing)
    
    cn-beijing
    
    China (Zhangjiakou)
    
    cn-zhangjiakou
    
    China (Hohhot)
    
    cn-huhehaote
    
    China (Ulanqab)
    
    cn-wulanchabu
    
    China (Hangzhou)
    
    cn-hangzhou
    
    China (Shanghai)
    
    cn-shanghai
    
    China (Nanjing - Local Region - Decommissioning)
    
    cn-nanjing
    
    China (Fuzhou - Local Region - Decommissioning)
    
    cn-fuzhou
    
    China (Shenzhen)
    
    cn-shenzhen
    
    China (Heyuan)
    
    cn-heyuan
    
    China (Guangzhou)
    
    cn-guangzhou
    
    Philippines (Manila)
    
    ap-southeast-6
    
    South Korea (Seoul)
    
    ap-northeast-2
    
    Malaysia (Kuala Lumpur)
    
    ap-southeast-3
    
    Japan (Tokyo)
    
    ap-northeast-1
    
    Thailand (Bangkok)
    
    ap-southeast-7
    
    China (Chengdu)
    
    cn-chengdu
    
    Singapore
    
    ap-southeast-1
    
    Indonesia (Jakarta)
    
    ap-southeast-5
    
    China (Hong Kong)
    
    cn-hongkong
    
    Germany (Frankfurt)
    
    eu-central-1
    
    US (Virginia)
    
    us-east-1
    
    US (Silicon Valley)
    
    us-west-1
    
    UK (London)
    
    eu-west-1
    
    UAE (Dubai)
    
    me-east-1
    
    SAU (Riyadh - Partner Region)
    
    me-central-1
    

### **Loongcollector network transfer types**

An endpoint is the access domain name for SLS. It is a URL that is used to access a project and its log data, and it is related to the region where the project is located. SLS provides internal, public, and transfer acceleration endpoints. View the endpoints by performing the following steps:

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com) and click the name of the destination project.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4287915571/p995186.png) icon next to the project name to go to the project overview page.
    
3.  In the Endpoint section, view the endpoint information for the current project. Different network transmission methods correspond to different endpoints. Choosing a suitable network transmission method helps ensure faster and more stable log data transmission.
    

**Network type**

**Endpoint type**

**Description**

**Scenarios**

Alibaba Cloud internal network

Private endpoint

The Alibaba Cloud internal network is a gigabit shared network. Transmitting log data over the Alibaba Cloud internal network is faster and more stable than over the Internet. The internal network includes VPC and classic network.

Use this method when an ECS instance and SLS project are in the same region, or when an [on-premises server is connected to the internal network](/help/en/ecs/user-guide/manage-servers-that-are-not-provided-by-alibaba-cloud#bdcc5a304b7sl).

**Note**

We recommend creating an SLS project in the same region as your ECS instance. This lets you collect logs from the ECS instance over the Alibaba Cloud internal network without consuming public bandwidth.

Internet

Public endpoint

Transmitting log data over the Internet is not only limited by network bandwidth but can also be affected by network jitter, latency, and packet loss, which can impact the speed and stability of data collection.

Choose to transmit data over the Internet in the following two situations.

-   The ECS instance and the SLS project are in different regions.
    
-   The server is from another cloud provider or is an on-premises server.
    

Transfer acceleration

Acceleration endpoint

This method uses Alibaba Cloud CDN edge nodes to accelerate log collection. It offers significant advantages in terms of network latency and stability compared to collection over the Internet, but it incurs additional traffic fees.

If your business server and SLS project are in different regions, such as one in the Chinese mainland and one outside, transmitting data over the Internet may cause high network latency and instability. You can choose to use transfer acceleration. For more information, see [Transfer acceleration](/help/en/sls/select-a-network-type#2ba2d6a585eny).

### **Loongcollector running modes**

**Attribute**

**DaemonSet mode**

**Sidecar mode**

Deployment method

Deploys one collection container on each node.

Deploys one collection container in each pod.

Resource consumption

Low (shares node resources)

High (occupied by each pod individually)

Use cases

Unified log collection at the node level.

Isolated log collection for specific applications.

Isolation

Node-level sharing

Pod-level independence

#### **How DaemonSet mode works**

A LoongCollector is deployed on each node of the cluster to collect logs from all containers on that node. This mode features simple O&M, low resource consumption, and flexible configuration. However, it provides weak isolation.

-   In DaemonSet mode, the Kubernetes cluster ensures that only one LoongCollector container runs on each node. This container collects logs from all other containers on the same node.
    
-   When a new node joins the cluster, Kubernetes automatically creates a LoongCollector container on it. When a node leaves the cluster, Kubernetes automatically destroys the LoongCollector container on that node. The auto-scaling mechanism of DaemonSet and identifier-based machine groups eliminates the need for manual management of LoongCollector instances.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2756409671/CAEQTRiBgMCw_8ioyxkiIDVhZTBjOTRlOGFkNjRiNDRiYjg1ZGVkNGNhYzg2MDhl4246905_20240307160520.367.svg)

#### **How Sidecar mode works**

A LoongCollector Sidecar container is injected into each pod alongside the application container. The log directory of the application container is mounted as a shared volume using a Kubernetes volume, such as emptyDir, hostPath, or a persistent volume (PV). This makes the log files available in the mount paths of both the application container and the Sidecar container so that LoongCollector can read them directly. This mode features good multi-tenant data isolation and performance. However, it consumes more resources and is more complex to configure and maintain.

-   In Sidecar mode, a LoongCollector container runs in each pod to collect logs from all other containers within that pod. Log collection for different pods is isolated.
    
-   To collect log files from other containers in the same pod, you can use a shared volume. The same volume must be mounted to both the application container and the LoongCollector container.
    
-   If the data volume of pods on a node is exceptionally large and exceeds the collection performance limit of DaemonSet mode, you can use Sidecar mode to allocate specific resources to LoongCollector. This improves log collection performance and stability.
    
-   Serverless containers do not have the concept of nodes, so the traditional DaemonSet deployment mode cannot be used. In this scenario, Sidecar mode can be combined with a serverless architecture to ensure a flexible and adaptable log collection process.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2756409671/CAEQTRiBgMD06cmoyxkiIGViODk2ZWI5Y2UwMDRiYTA5ODQ1Njg1ZTAxMDhmNzc24246905_20240307160520.367.svg)
