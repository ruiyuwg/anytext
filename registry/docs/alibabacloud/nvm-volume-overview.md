Non-volatile memory (NVM) volumes can be provisioned based on the persistent memory (PMEM) product provided by Intel. You can use NVM to expand the memory capacity at lower costs and access persistent data with lower latency. NVM provides the benefits of memory and storage products. This topic describes how to use NVM volumes in Container Service for Kubernetes (ACK) clusters and provides examples.

## Background information

PMEM provides high-performance memory that supports data persistence. PMEM resides on the memory bus and allows you to access data in the same way as when you use dynamic random access memory (DRAM). PMEM provides almost the same speed and latency as DRAM and the non-volatility of NAND flash. PMEM provides the following benefits:

-   Lower latency than flash SSDs when you access data.
    
-   Higher throughput than flash storage.
    
-   Lower costs than DRAM.
    
-   Data caching. This resolves the issue that data transmitted through Peripheral Component Interconnect Express (PCIe) cannot be cached in the CPU.
    
-   Real-time access to data and ultra-high-speed access to large datasets.
    
-   Data is retained in memory after the machine is powered off. This provides the same benefit as flash memory.
    

## How to use NVM volumes

You can use the Container Storage Interface (CSI) driver that is provided by Alibaba Cloud to manage the lifecycle of NVM devices in ACK clusters. This allows you to allocate, mount, and use NVM resources by using declarative claims.

You can use NVM volumes in ACK clusters by using one of the following methods:

-   **PMEP-LVM (use NVM as non-intrusive block storage)**
    
    NVM resources can be used as block storage or file systems. You can directly claim NVM resources without the need to modify your applications. You can use Logical Volume Manager (LVM) to virtualize PMEM resources on a node into volume groups (VGs). Then, you can create persistent volume claims (PVCs) of the required type and capacities.
    
    This method is suitable for serverless applications, low-latency and high-throughput data computing applications, and short-CI/CD period applications that require high-speed temporary storage. This allows you to improve the I/O throughput by 2 to 10 times. For more examples, see [Use AEP non-volatile memory to improve read and write performance](/help/en/ack/use-nvm-volumes-to-improve-read-and-write-performance#task-1956751).
    
-   **PMEM-direct memory**
    
    NVM resources can be used as direct memory. You can use PMEM as direct memory by making a specific number of modifications to the memory allocation functions based on the PMEM SDK. This allows you to provision NVM resources as direct memory that provides memory-like throughput and latency.
    
    This method is suitable for in-memory databases such as Redis and SAP HANA in terms of large memory and cost-effectiveness. This method reduces memory costs by 30% to 50%. For more examples, see [Deploy a Redis instance with an NVM volume mounted as direct memory](/help/en/ack/deploy-a-redis-instance-that-has-an-nvm-volume-mounted-as-direct-memory#task-1956752).
    

The following table describes the comparison details among different methods using NVM volumes.

**Method**

**Support for fragmented storage**

**Support for online expansion**

**Support for memory persistence**

**Support for application modification**

**Latency (4K/RW)**

**Throughput (4K/RW)**

**Maximum capacity of a single ECS instance (ecs.ebmre6p.26xlarge)**

PMEM-LVM

No

Yes

Yes

No

10 us

10W

1536 GB

PMEM-Direct

Yes

No

No

Yes

1.2 us

56W

768 GB

SSD

No

Yes

Yes

No

100 us

1W

32 TB

## Deploy CSI components

### **Introduction to CSI components**

To use NVM in ACK clusters, you must deploy the following components:

-   **CSI-Plugin**: initializes PMEM devices and creates, deletes, mounts, and unmounts volumes.
    
-   **CSI-Provisioner**: detects and initiates volume creation and deletion requests.
    
-   **CSI-Scheduler**: schedules storage (The ACK scheduler is a preinstalled component).
    

### **Deploy CSI components**

1.  Add Elastic Compute Service (ECS) instances that are equipped with PMEM resources to your ACK cluster. For example, you can add ECS instances of ecs.ebmre6p.26xlarge. The [re6p persistent memory-optimized instance family](/help/en/ecs/user-guide/overview-of-instance-families#re6p) and the [ebmre6p persistent memory-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/overview-of-instance-families#section-xli-oah-7tq) support the first generation of PMEM.
    
2.  To ensure that the CSI plug-in can be used to mount PMEM resources, add the following labels to ECS instances equipped with PMEM resources:
    
    -   `pmem.csi.alibabacloud.com`: enables automatic O&M for NVM devices.
        
    -   `pmem.csi.alibabacloud.com/type: lvm`: enables support for the PMEM-LVM method.
        
    -   `pmem.csi.alibabacloud.com/type: direct`: enables support for the PMEM-direct memory method.
        
3.  Deploy the CSI plug-in for PMEM.
    
    1.  Deploy CSI-Plugin.
        
        **Expand to view the deployment of CSI-Plugin YAML file**
        
        ```
        apiVersion: storage.k8s.io/v1
        kind: CSIDriver
        metadata:
          name: localplugin.csi.alibabacloud.com
        spec:
          attachRequired: false
          podInfoOnMount: true
        ---
        kind: DaemonSet
        apiVersion: apps/v1
        metadata:
          name: csi-local-plugin
          namespace: kube-system
        spec:
          selector:
            matchLabels:
              app: csi-local-plugin
          template:
            metadata:
              labels:
                app: csi-local-plugin
            spec:
              tolerations:
                - operator: Exists
              serviceAccount: admin
              priorityClassName: system-node-critical
              hostNetwork: true
              hostPID: true
              containers:
                - name: driver-registrar
                  image: registry.cn-hangzhou.aliyuncs.com/acs/csi-node-driver-registrar:v1.3.0-6e9fff3-aliyun
                  imagePullPolicy: Always
                  args:
                    - "--v=5"
                    - "--csi-address=/csi/csi.sock"
                    - "--kubelet-registration-path=/var/lib/kubelet/csi-plugins/localplugin.csi.alibabacloud.com/csi.sock"
                  env:
                    - name: KUBE_NODE_NAME
                      valueFrom:
                        fieldRef:
                          apiVersion: v1
                          fieldPath: spec.nodeName
                  volumeMounts:
                    - name: plugin-dir
                      mountPath: /csi
                    - name: registration-dir
                      mountPath: /registration
        
                - name: csi-localplugin
                  securityContext:
                    privileged: true
                    capabilities:
                      add: ["SYS_ADMIN"]
                    allowPrivilegeEscalation: true
                  image: registry.cn-hangzhou.aliyuncs.com/acs/csi-plugin:v1.20.6-2be29b1-aliyun 
                  imagePullPolicy: "Always"
                  args :
                    - "--endpoint=$(CSI_ENDPOINT)"
                    - "--v=5"
                    - "--nodeid=$(KUBE_NODE_NAME)"
                    - "--driver=localplugin.csi.alibabacloud.com"
                  env:
                    - name: KUBE_NODE_NAME
                      valueFrom:
                        fieldRef:
                          apiVersion: v1
                          fieldPath: spec.nodeName
                    - name: CSI_ENDPOINT
                      value: unix://var/lib/kubelet/csi-plugins/localplugin.csi.alibabacloud.com/csi.sock
                  volumeMounts:
                    - name: pods-mount-dir
                      mountPath: /var/lib/kubelet
                      mountPropagation: "Bidirectional"
                    - mountPath: /dev
                      mountPropagation: "HostToContainer"
                      name: host-dev
                    - mountPath: /var/log/
                      name: host-log
              volumes:
                - name: plugin-dir
                  hostPath:
                    path: /var/lib/kubelet/csi-plugins/localplugin.csi.alibabacloud.com
                    type: DirectoryOrCreate
                - name: registration-dir
                  hostPath:
                    path: /var/lib/kubelet/plugins_registry
                    type: DirectoryOrCreate
                - name: pods-mount-dir
                  hostPath:
                    path: /var/lib/kubelet
                    type: Directory
                - name: host-dev
                  hostPath:
                    path: /dev
                - name: host-log
                  hostPath:
                    path: /var/log/
          updateStrategy:
            rollingUpdate:
              maxUnavailable: 10%
            type: RollingUpdate
        	  
        ```
        
    2.  Deploy CSI-Provisioner.
        
        **Expand to view the deployment of CSI-Provisioner YAML file**
        
        ```
        kind: Deployment
        apiVersion: apps/v1
        metadata:
          name: csi-local-provisioner
          namespace: kube-system
        spec:
          selector:
            matchLabels:
              app: csi-local-provisioner
          replicas: 2
          template:
            metadata:
              labels:
                app: csi-local-provisioner
            spec:
              tolerations:
              - operator: "Exists"
              affinity:
                nodeAffinity:
                  preferredDuringSchedulingIgnoredDuringExecution:
                  - weight: 1
                    preference:
                      matchExpressions:
                      - key: node-role.kubernetes.io/master
                        operator: Exists
              priorityClassName: system-node-critical
              serviceAccount: admin
              hostNetwork: true
              containers:
                - name: external-local-provisioner
                  image: registry.cn-hangzhou.aliyuncs.com/acs/csi-provisioner:v1.6.0-b6f763a43-ack
                  args:
                    - "--csi-address=$(ADDRESS)"
                    - "--feature-gates=Topology=True"
                    - "--volume-name-prefix=disk"
                    - "--strict-topology=true"
                    - "--timeout=150s"
                    - "--extra-create-metadata=true"
                    - "--enable-leader-election=true"
                    - "--leader-election-type=leases"
                    - "--retry-interval-start=500ms"
                    - "--v=5"
                  env:
                    - name: ADDRESS
                      value: /socketDir/csi.sock
                  imagePullPolicy: "Always"
                  volumeMounts:
                    - name: socket-dir
                      mountPath: /socketDir
                - name: external-local-resizer
                  image: registry.cn-hangzhou.aliyuncs.com/acs/csi-resizer:v0.3.0
                  args:
                    - "--v=5"
                    - "--csi-address=$(ADDRESS)"
                    - "--leader-election"
                  env:
                    - name: ADDRESS
                      value: /socketDir/csi.sock
                  imagePullPolicy: "Always"
                  volumeMounts:
                    - name: socket-dir
                      mountPath: /socketDir/
              volumes:
                - name: socket-dir
                  hostPath:
                    path: /var/lib/kubelet/csi-plugins/localplugin.csi.alibabacloud.com
                    type: DirectoryOrCreate
        	  
        ```
        
    3.  **Create StorageClasses.**
        
        **Expand to view the deployment of StorageClass YAML file**
        
        ```
        apiVersion: storage.k8s.io/v1
        kind: StorageClass
        metadata:
            name: csi-pmem-direct
        provisioner: localplugin.csi.alibabacloud.com
        mountOptions:
        - dax
        parameters:
            volumeType: PMEM
            pmemType: "direct"
        reclaimPolicy: Delete
        volumeBindingMode: WaitForFirstConsumer
        allowVolumeExpansion: true
        
        ---
        apiVersion: storage.k8s.io/v1
        kind: StorageClass
        metadata:
            name: pmem-lvm
        provisioner: localplugin.csi.alibabacloud.com
        mountOptions:
        - dax
        parameters:
            volumeType: PMEM
            nodeAffinity: "true"
            pmemType: "lvm"
        reclaimPolicy: Delete
        volumeBindingMode: WaitForFirstConsumer
        allowVolumeExpansion: true
        	  	  
        	  
        ```
        

## Examples

### **Use AEP as block storage volumes**

1.  Create a PVC with the following YAML template.
    
    To schedule the PVC to a specific NVM node, add the `annotations: volume.kubernetes.io/selected-node` annotation.
    
    ```
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      annotations:
        volume.kubernetes.io/selected-node: cn-zhangjiakou.192.168.XX.XX
      name: pmem-lvm
    spec:
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: 10Gi
      storageClassName: pmem-lvm
    ```
    
2.  Deploy a workload with the following YAML template:
    
    ```
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: sts-lvm
      labels:
        app: busybox-lvm
    spec:
      selector:
        matchLabels:
          app: busybox-lvm
      serviceName: "busybox"
      template:
        metadata:
          labels:
            app: busybox-lvm
        spec:
          containers:
          - name: busybox
            image: busybox
            command: ["sh", "-c"]
            args: ["sleep 10000"]
            volumeMounts:
              - name: pmem-pvc
                mountPath: "/data"
          volumes:
            - name: pmem-pvc
              persistentVolumeClaim:
                claimName: pmem-lvm
    ```
    
3.  View the results.
    
    -   Run the following command to query the created PVC:
        
        ```
        kubectl get pvc 
        ```
        
        Expected output:
        
        ```
        NAME               STATUS    VOLUME     CAPACITY   ACCESS MODES   STORAGECLASS              AGE
        pmem-lvm           Bound    disk-****   10Gi       RWO            pmem-lvm                  10m
        ```
        
    -   Run the following command to query the created pod:
        
        ```
        kubectl get pod
        ```
        
        Expected output:
        
        ```
        NAME                                READY   STATUS    RESTARTS   AGE
        sts-lvm-0                           1/1     Running   0          10m
        ```
        
4.  Run the following command to log on to the application and check the mount path of the volume:
    
    ```
    kubectl exec -ti sts-lvm-0 -- df /data
    ```
    
    The following output indicates that a block storage volume is created and mounted to the application pod:
    
    ```
    Filesystem                            1K-blocks  Used   Available Use% Mounted on
    /dev/mapper/pmemvgregion0-disk--****  10255636   36888  10202364  1%   /data
    ```
    

### **Use NVM as direct memory volumes**

1.  Create a PVC with the following YAML template.
    
    To schedule the PVC to a specific NVM node, add the `annotations: volume.kubernetes.io/selected-node` annotation.
    
    ```
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      annotations:
        volume.kubernetes.io/selected-node: cn-zhangjiakou.192.168.XX.XX
      name: pmem-direct
    spec:
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: 9Gi
      storageClassName: pmem-direct
    ```
    
2.  Deploy a workload with the following template:
    
    ```
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: sts-direct
      labels:
        app: busybox-direct
    spec:
      selector:
          matchLabels:
            app: busybox-direct
      serviceName: "busybox"
      template:
        metadata:
          labels:
            app: busybox-direct
        spec:
          containers:
          - name: busybox
            image: busybox
            command: ["sh", "-c"]
            args: ["sleep 1000"]
            volumeMounts:
              - name: pmem-pvc
                mountPath: "/data"
          volumes:
            - name: pmem-pvc
              persistentVolumeClaim:
                claimName: pmem-direct
    ```
    
3.  View the results.
    
    -   Run the following command to query the created PVC:
        
        ```
        kubectl get pvc pmem-direct
        ```
        
        Expected output:
        
        ```
        NAME          STATUS   VOLUME      CAPACITY   ACCESS MODES   STORAGECLASS   AGE
        pmem-direct   Bound    disk-****   9Gi        RWO            pmem-direct    17m
        ```
        
    -   Run the following command to query the created pod:
        
        ```
        kubectl get pod
        ```
        
        Expected output:
        
        ```
        NAME                                READY   STATUS    RESTARTS   AGE
        sts-direct-0                        1/1     Running   0          17m
        ```
        
4.  Run the following command to log on to the application and check the mount path of the volume:
    
    ```
    kubectl exec -ti sts-direct-0 -- df /data
    ```
    
    The following output indicates that a block storage volume is created and mounted to the application pod:
    
    ```
    Filesystem     1K-blocks  Used    Available  Use%  Mounted on
    /dev/pmem0     9076344    36888   9023072    1%    /data
    ```
