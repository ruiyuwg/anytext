CPFS for Lingjun delivers high throughput and IOPS performance. It supports end-to-end RDMA network acceleration and is ideal for intelligent computing scenarios such as AIGC and autonomous driving. ACK lets you mount CPFS for Lingjun file systems as static persistent volumes (PVs) for your workloads.

**Important**

[CPFS for Lingjun](/help/en/cpfs/bmcpfs/product-overview/what-is-cpfs-for-lingjun) is currently in invitational preview. It is available only in select regions and zones. To use it, contact your account manager to request access.

## **Function Introduction**

Using the CSI add-on, ACK mounts CPFS for Lingjun static persistent volumes to workloads via PVs and PVCs. The CSI add-on automatically selects the optimal mounting method based on the node type where the pod is scheduled:

-   VSC mounting: Supported only on Lingjun nodes. You must submit tickets to both the CPFS product and the Lingjun product to enable the whitelist.[submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    
-   VPC mounting: Supported on non-Lingjun nodes. Create a VPC mount target to enable mounting. Nodes in the same VPC can all mount and access the file system.
    

## **Prerequisites**

-   Review the [Limits for CPFS for Lingjun](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cpfs-for-lingjun-storage-volume/#c694f5655bhwo).
    
-   Your cluster meets the following conditions:
    
    -   Cluster version: 1.26 or later. To upgrade your cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
        
    -   Node operating system: Alibaba Cloud Linux 3.
        
    -   You have installed the following storage components at the required versions.
        
        > Go to the **Add-ons** page to check versions, install, or upgrade components.
        
        -   CSI add-on ([csi-plugin](/help/en/ack/product-overview/csi-plugin) and [csi-provisioner](/help/en/ack/product-overview/csi-provisioner)): v1.33.1 or later. To upgrade, see [Manage CSI add-ons](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
            
        -   [cnfs-nas-daemon add-on](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-cnfs-nas-daemon): 0.1.2 or later.
            
            Expand to view details about [cnfs-nas-daemon](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-cnfs-nas-daemon)
            
            The cnfs-nas-daemon add-on manages EFC processes. It consumes significant resources and directly affects storage performance. Adjust its resource configuration on the **Add-ons** page. Use these recommendations:
            
            -   CPU: CPU requests scale with total node bandwidth. Allocate 0.5 core per 1 Gb/s of bandwidth, plus 1 extra core for metadata management. Adjust CPU settings using this rule.
                
                > For example, for a node with a 100 Gb/s NIC, set the CPU request to `100 * 0.5 + 1 = 51` cores.
                
            -   Memory: CPFS for Lingjun uses FUSE. Data read/write caching and file metadata consume memory. Set the memory request to 15% of the node’s total memory.
                
            
            After adjusting the configuration, scale resources up or down dynamically based on actual workload.
            
            **Important**
            
            -   Update behavior: The cnfs-nas-daemon DaemonSet uses the `OnDelete` update strategy by default. After changing CPU or memory settings on the **Add-ons** page, manually delete the existing cnfs-nas-daemon pod on each node to trigger a rebuild and apply the new settings.
                
                Perform this operation during off-peak hours to ensure business stability.
                
            -   Risk: Deleting or restarting the cnfs-nas-daemon pod temporarily interrupts CPFS mounting on that node.
                
                -   Nodes without hot upgrade support①: This causes a hardware interrupt. Application pods fail and require manual deletion. After deletion, application pods restart and recover automatically.
                    
                -   Nodes with hot upgrade support①: Application pods recover automatically after the cnfs-nas-daemon pod restarts.
                    
                
                ① Nodes support hot upgrades if they meet all of these conditions:
                
                -   Kernel version is 5.10.134-18 or later.
                    
                -   bmcpfs-csi-controller and bmcpfs-csi-plugin versions are 1.35.1 or later.
                    
                -   cnfs-nas-daemon version is 0.1.9-compatible.1 or later.
                    
            
        -   bmcpfs-csi add-on: Includes bmcpfs-csi-controller (a control-plane component managed by ACK) and bmcpfs-csi-node (a node-side component deployed as a DaemonSet in the cluster).
            

## **Important Notes**

-   When using VSC mounting, the node running the pod must be in the same hpn-zone as the CPFS for Lingjun file system instance.
    
-   A Lingjun node must be associated with a CPFS for Lingjun file system during initialization. Otherwise, CSI mounting fails.
    
-   Before taking a Lingjun node offline due to failure, drain all pods from it. Skipping this step causes inconsistent cluster metadata, leaving behind unrecoverable pod resources.
    
-   You cannot mount different subdirectories of the same CPFS instance into one pod using multiple PVs. Due to driver limitations, this configuration causes pod mounting to fail and prevents the pod from starting.
    
    Instead, create one PV/PVC for the CPFS instance. Then use the `volumeMounts` configuration in your pod spec and set the `subPath` field to mount the required subdirectories.
    
    > `subPath` field uses a lightweight `bind mount` mechanism. It adds no performance overhead.
    

## **Step 1: Create a CPFS File System**

1.  Create a CPFS for Lingjun file system. See [Create a CPFS for Lingjun File System](/help/en/cpfs/bmcpfs/user-guide/create-a-file-system). Record the file system ID.
    
2.  (Optional) If you want to mount on non-Lingjun nodes, create a VPC mount target [create a VPC mount target](/help/en/cpfs/bmcpfs/user-guide/manage-vpc-mount-points-1) (in the same VPC as your cluster nodes), and record the mount target domain name. The format is `cpfs-***-vpc-***.<Region>.cpfs.aliyuncs.com`.
    
    > If pods schedule to Lingjun nodes, VSC mounting is used by default. Skip this step.
    

## **Step 2: Create a PV and a PVC**

1.  Create a PV and a PVC for your existing CPFS file system.
    
    1.  Modify the YAML example below and save it as bmcpfs-pv-pvc.yaml.
        
        ```
        apiVersion: v1
        kind: PersistentVolume
        metadata:
          name: bmcpfs
        spec:
          accessModes:
          - ReadWriteMany
          capacity:
            storage: 10Ti
          claimRef:
            name: bmcpfs
            namespace: default
          csi:
            driver: bmcpfsplugin.csi.alibabacloud.com
            volumeAttributes:
               # Required if pods schedule to non-Lingjun nodes or cross-zone automatic VPC switching is enabled. Mounting fails otherwise.
              vpcMountTarget: cpfs-***-vpc-***.<Region>.cpfs.aliyuncs.com
              # If pods schedule to nodes in a different zone than the bmcpfs file system, use the vpcMountTarget to access CPFS.
              mountpointAutoSwitch: "true"
            # Replace volumeHandle with your CPFS for Lingjun file system ID.
            volumeHandle: bmcpfs-*****
          mountOptions: []
        
        ---
        apiVersion: v1
        kind: PersistentVolumeClaim
        metadata:
          name: bmcpfs
          namespace: default
        spec:
          accessModes:
          - ReadWriteMany
          resources:
            requests:
              storage: 10Ti
          volumeMode: Filesystem
          volumeName: bmcpfs
        ```
        
        -   PV parameters
            
            **Parameter**
            
            **Description**
            
            `accessModes`
            
            Access mode for the PV.
            
            `capacity.storage`
            
            Declared storage capacity. This declaration does not affect actual capacity.
            
            `csi.driver`
            
            Driver type. For CPFS for Lingjun, use `bmcpfsplugin.csi.alibabacloud.com`.
            
            `csi.volumeAttributes.vpcMountTarget`
            
            VPC mount target domain name for CPFS. Leaving this empty causes mounting to fail on non-Lingjun nodes.
            
            > Do not set this if pods schedule to Lingjun nodes.
            
            `csi.volumeAttributes.mountpointAutoSwitch`
            
            Allow bmcpfs to switch automatically between the default VSC mount point and the specified VPC mount point.
            
            > Use with `csi.volumeAttributes.vpcMountTarget`.
            
            `csi.volumeHandle`
            
            ID of the CPFS file system.
            
            `mountOptions`
            
            Mount options.
            
        -   PVC parameters
            
            **Parameter**
            
            **Description**
            
            `accessModes`
            
            Access mode requested by the PVC. Must match the PV.
            
            `resources.requests.storage`
            
            Storage capacity allocated to the pod. Must not exceed the PV capacity.
            
            `volumeMode`
            
            Mount mode. Set to `Filesystem`.
            
            `volumeName`
            
            Name of the PV to bind to this PVC.
            
    2.  Create the PV and PVC.
        
        ```
        kubectl apply -f bmcpfs-pv-pvc.yaml
        ```
        
2.  Confirm the PVC is bound to the PV.
    
    ```
    kubectl get pvc bmcpfs
    ```
    
    Expected output:
    
    ```
    NAME     STATUS   VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
    bmcpfs   Bound    bmcpfs   10Ti       RWX                           <unset>                 51s
    ```
    
    The `STATUS` value is `Bound`. The binding succeeded.
    

## **Step 3: Deploy an Application and Mount CPFS**

### **Scenario 1: Mount the Entire CPFS File System**

This scenario mounts the full CPFS file system into a container.

1.  Create a file named `cpfs-test.yaml` using the YAML below. This declares a deployment that mounts the CPFS for Lingjun static persistent volume.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: cpfs-test
      labels:
        app: cpfs-test
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: cpfs-test
      template:
        metadata:
          labels:
            app: cpfs-test
        spec:
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            ports:
            - containerPort: 80
            volumeMounts:
              - name: pvc-cpfs
                mountPath: /data
          volumes:
            - name: pvc-cpfs
              persistentVolumeClaim:
                claimName: bmcpfs
    ```
    
2.  Create the deployment.
    
    ```
    kubectl create -f cpfs-test.yaml
    ```
    
3.  Check pod deployment status.
    
    ```
    kubectl get pod -l app=cpfs-test
    ```
    
    Expected output:
    
    ```
    NAME                         READY   STATUS    RESTARTS   AGE
    cpfs-test-76b77d64b5-2hw96   1/1     Running   0          42s
    cpfs-test-76b77d64b5-dnwdx   1/1     Running   0          42s
    ```
    
4.  Enter any pod and verify the CPFS for Lingjun static persistent volume mounted successfully.
    
    ```
    kubectl exec -it <pod-name> -- mount | grep /data
    ```
    
    Expected output shows successful mounting:
    
    ```
    bindroot-f0a5c-******:cpfs-*******-vpc-****.cn-shanghai.cpfs.aliyuncs.com:/ on /data type fuse.aliyun-alinas-efc (rw,relatime,user_id=0,group_id=0,default_permissions,allow_other,max_read=1048576)
    ```
    

### **Scenario 2: Mount a Subdirectory of the CPFS File System**

In shared storage scenarios—such as multi-tenant or multitasking setups—you can let multiple application pods share one CPFS volume while keeping their data isolated in separate directories. Use the `volumeMounts.subPath` field to do this.

1.  Create a file named pod.yaml using the content below. This pod runs two containers. Each mounts a different subdirectory of the same PVC (`bmcpfs`) using `subPath`.
    
    > If the `subPath` directory (for example, `workspace/alpha`) does not exist in the CPFS file system, the system creates it automatically.
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: cpfs-subpath-demo-pod
    spec:
      containers:
        - name: task-alpha-container
          image: busybox:1.35
          command: ["/bin/sh", "-c", "sleep 3600"]
          volumeMounts:
            - name: cpfs-storage
              mountPath: /data/workspace # Mount path inside the container
              subPath: workspace/alpha   # Mount the workspace/alpha subdirectory—not the full volume
    
        - name: task-beta-container
          image: busybox:1.35
          command: ["/bin/sh", "-c", "sleep 3600"]
          volumeMounts:
            - name: cpfs-storage
              mountPath: /data/workspace # Mount path can be identical
              subPath: workspace/beta    # Mount the workspace/beta subdirectory—not the full volume
      volumes:
        - name: cpfs-storage
          persistentVolumeClaim:
            claimName: bmcpfs # Reference the PVC created earlier
    ```
    
2.  Deploy the pod.
    
    ```
    kubectl apply -f pod.yaml
    ```
    
3.  Verify mounting and write access for the task-alpha container.
    
    1.  Connect to the task-alpha container.
        
        ```
        kubectl exec -it cpfs-subpath-demo-pod -c task-alpha-container -- /bin/sh
        ```
        
    2.  Check mounted file systems to confirm the CPFS volume is present.
        
        ```
        df -h
        ```
        
        Expected output confirms the shared directory (/share) is mounted at /data/workspace inside the container:
        
        ```
        Filesystem                Size      Used Available Use% Mounted on
        ...
        192.XX.XX.0:/share          10.0T     1.0G     10.0T   0% /data/workspace
        ...
        ```
        
    3.  Check the parent directory structure of the mount point.
        
        ```
        ls -l /data/
        ```
        
        Expected output shows the workspace subdirectory exists under /data:
        
        ```
        total 4
        drwxr-xr-x    2 root     root          4096 Aug 15 10:00 workspace
        ```
        
    4.  Create a file in the mounted directory to test write access.
        
        ```
        echo "hello from alpha" > /data/workspace/alpha.log
        exit
        ```
        
4.  Verify mounting and data isolation for the task-beta container.
    
    1.  Connect to the `task-beta` container.
        
        ```
        kubectl exec -it cpfs-subpath-demo-pod -c task-beta-container -- /bin/sh
        ```
        
    2.  Create a file in the container’s mount point (/data/workspace).
        
        ```
        echo "hello from beta" > /data/workspace/beta.log
        ```
        
    3.  List files in /data/workspace/.
        
        ```
        ls -l /data/workspace/
        ```
        
        Expected output shows beta.log was written successfully and alpha.log is absent. Data is isolated between containers:
        
        ```
        total 4
        -rw-r--r--    1 root     root            16 Aug 15 10:05 beta.log
        ```
