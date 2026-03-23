The dynamic volume provisioning mechanism provides automated, on-demand storage for CPFS for Lingjun, eliminating the complexity of manual persistent volume (PV) management. This method supports parallel read and write operations for multiple applications. It is especially suitable for scenarios such as AI training and data analytics, enabling efficient sharing of data such as code, configuration files, and intermediate computation results.

## **Preparations**

-   Review the [Limits for CPFS for Lingjun](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cpfs-for-lingjun-storage-volume/#c694f5655bhwo).
    
-   Ensure the cluster meets these requirements:
    
    -   Cluster version: 1.26 or later. To upgrade your cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
        
    -   Node operating system: Alibaba Cloud Linux 3.
        
    -   The following storage components are installed and meet the version requirements.
        
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
                    
            
        -   bmcpfs-csi component: 1.35.1 or later.
            
            This includes bmcpfs-csi-controller (control plane component, managed by ACK) and bmcpfs-csi-node (node-side component, deployed as a DaemonSet in the cluster).
            

## **Important Notes**

-   When using VSC mounting, the node running the pod must be in the same hpn-zone as the CPFS for Lingjun file system instance.
    
-   A Lingjun node must be associated with a CPFS for Lingjun file system during initialization. Otherwise, CSI mounting fails.
    
-   Before taking a Lingjun node offline due to failure, drain all pods from it. Skipping this step causes inconsistent cluster metadata, leaving behind unrecoverable pod resources.
    
-   Do not mount multiple volumes from the same CPFS for Lingjun file system in a single pod (for example, multiple PVs created by a StorageClass containing the same `bmcpfsId`). Because of native protocol limitations, when the same pod attempts to mount the same file system instance multiple times (even if to different subdirectories), it leads to unexpected behavior.
    

## **Step 1: Create a CPFS File System**

1.  Create a CPFS for Lingjun file system. See [Create a CPFS for Lingjun File System](/help/en/cpfs/bmcpfs/user-guide/create-a-file-system). Record the file system ID.
    
2.  (Optional) If you want to mount on non-Lingjun nodes, create a VPC mount target [create a VPC mount target](/help/en/cpfs/bmcpfs/user-guide/manage-vpc-mount-points-1) (in the same VPC as your cluster nodes), and record the mount target domain name. The format is `cpfs-***-vpc-***.<Region>.cpfs.aliyuncs.com`.
    
    > If pods schedule to Lingjun nodes, VSC mounting is used by default. Skip this step.
    

## **Step 2:** Create a StorageClass

Create a `StorageClass` object as a storage template.

1.  You can create `sc.yaml` using the following content.
    
    ```
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: alicloud-bmcpfs-test
    provisioner: bmcpfsplugin.csi.alibabacloud.com
    parameters:
      # CPFS for Lingjun file system ID
      bmcpfsId: bmcpfs-29000z8xz3lf5nj*****  
      # Specify the subdirectory within the file system
      # path: "/shared"  
    # Allow subsequent expansion
    allowVolumeExpansion: true  
    # Delete (automatic cleanup) or Retain (keep data)
    reclaimPolicy: Delete  
    ```
    
    Parameter description:
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    `bmcpfsId`
    
    Yes
    
    BMCPFS file system ID, in the format `bmcpfs-xxxxxxxxx` or `cpfs-xxxxxxxxx`.
    
    `path`
    
    No
    
    The subdirectory within the file system.
    
    -   When specified: The volume creates under the `{path}/{volumeName}/` path.
        
    -   When not specified: The volume creates under the `/{volumeName}/` path.
        
    
    `allowVolumeExpansion`
    
    No
    
    Allow automatic expansion through PVC later.
    
    The current version does not support dynamic expansion. This is a reserved parameter.
    
    `reclaimPolicy`
    
    No
    
    -   `Delete` (default): Automatically deletes the fileset in the backend file system when you delete the PVC.
        
    -   `Retain`: Retains the fileset in the backend file system when you delete the PVC. Manually clean up. Recommended for production environments.
        
    
2.  You can create the StorageClass.
    
    ```
    kubectl apply -f sc.yaml
    ```
    

## **Step 3: Create a PVC**

Applications request volumes through PVCs and reference StorageClass as a configuration template.

1.  You can create `pvc.yaml` using the following content.
    
    ```
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: bmcpfs-vsc
      namespace: default
    spec:
      accessModes:
        # CPFS for Lingjun volumes support multiple pods reading and writing simultaneously
        - ReadWriteMany  
      resources:
        requests:
          # Supports large-capacity storage (Ti level)
          storage: 10Ti  
      # Only supports Filesystem
      volumeMode: Filesystem
      # Specify the StorageClass created earlier
      storageClassName: alicloud-bmcpfs-test
    ```
    
    Parameter description:
    
    > The following parameters are required.
    
    **Parameter**
    
    **Description**
    
    `accessModes`
    
    Only supports `ReadWriteMany`, meaning multiple pods can mount and read/write simultaneously.
    
    `storage`
    
    The requested storage capacity, supporting units such as Gi and Ti.
    
    `volumeMode`
    
    Only supports `Filesystem`.
    
    `storageClassName`
    
    Specify the `StorageClass` to use, triggering dynamic volume creation.
    
2.  You can create the PVC.
    
    ```
    kubectl apply -f pvc.yaml
    ```
    
3.  You can execute the following commands to confirm the PVC status.
    
    -   Execute `kubectl get pvc bmcpfs-vsc -n default` to view the PVC status. If `STATUS` is `Bound`, this indicates that the system has automatically created the corresponding PV.
        
    -   Execute `kubectl describe pvc bmcpfs-vsc -n default` and check for the `Provisioning succeeded` message in `Events`.
        

## **Step 4: Create a Workload and Mount the PVC**

After PVC creation, you can deploy a sample workload and mount the PV bound to the PVC to the application.

1.  You can create `deploy.yaml` using the following content.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: cpfs-shared-example
    spec:
      # Create 3 replicas to verify shared storage for multiple pods
      replicas: 3
      selector:
        matchLabels:
          app: cpfs-shared-app
      template:
        metadata:
          labels:
            app: cpfs-shared-app
        spec:
          # Ensure the pod can be scheduled to a Lingjun node
          tolerations:
            - key: node-role.alibabacloud.com/lingjun
              operator: Exists
              effect: NoSchedule
          # Optional: To schedule all pods to a specific node, uncomment this line and modify the node name
          # nodeName: cn-hangzhou.10.XX.XX.226
          containers:
          - name: app-container
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            volumeMounts:
              - name: pvc-cpfs
                # Mount the shared volume to the /data directory inside the container
                mountPath: /data
            # Simple lifecycle command to verify data writing and sharing
            # After the pod starts, it writes a file containing its hostname to the shared directory
            lifecycle:
              postStart:
                exec:
                  command:
                    - /bin/sh
                    - -c
                    - >
                      echo "Data written by $(hostname)" > /data/$(hostname).txt && 
                      echo "Deployment is running, check shared data in /data." && 
                      sleep 3600
          volumes:
            - name: pvc-cpfs
              persistentVolumeClaim:
                # Reference the PVC created earlier
                claimName: bmcpfs-vsc
    ```
    
2.  You can create the Deployment.
    
    ```
    kubectl apply -f deploy.yaml
    ```
    

## Resource Release Guide

To avoid unexpected costs and ensure data security, follow these steps to release unused resources.

1.  Delete Workloads
    
    -   Operation: Delete all applications using the relevant PVCs, such as Deployment or StatefulSet, to stop applications and unmount volumes.
        
    -   Command example: `kubectl delete deployment <your-deployment-name>`
        
2.  Delete PVCs
    
    -   Operation: Delete the PVC associated with the application. The handling of backend data depends on the reclaim policy (`reclaimPolicy`) of the `StorageClass`.
        
        -   `Retain` (recommended): After deleting the PVC, the backend CPFS for Lingjun fileset and its data remain intact.
            
        -   `Delete`: Deleting the PVC permanently deletes its bound PV and the backend CPFS for Lingjun fileset. This operation is irreversible. Use with caution.
            
    -   Command example: `kubectl delete pvc <your-pvc-name>`
        
3.  Delete PVs (when the reclaim policy is `Retain`)
    
    -   Operation: If the reclaim policy is `Retain`, the PV changes to `Released` status after you delete the PVC. You must manually delete the PV. This operation only removes the resource definition in Kubernetes and does not affect backend data.
        
    -   Command example: `kubectl delete pv <your-pv-name>`
        
4.  Delete StorageClass (Optional)
    
    -   Operation: If you no longer need this storage class, you can delete the `StorageClass`. This operation does not affect already created volumes.
        
    -   Command example: `kubectl delete sc <your-sc-name>`
        
5.  Delete the Backend CPFS for Lingjun File System
    
    -   Operation: This operation permanently deletes all data on the file system (including data retained by the `Retain` policy) and cannot be recovered. Before executing, confirm that the file system has no business dependencies. For details, see [Delete a File System](/help/en/cpfs/bmcpfs/user-guide/delete-a-file-system).
        

## **FAQ**

#### **Why is the PVC always in `Pending` status?**

A PVC in `Pending` status usually indicates that dynamic volume provisioning failed. You can follow these steps to troubleshoot.

1.  Check PVC events. They usually directly explain the failure reason.
    
    ```
    kubectl describe pvc <your-pvc-name> -n <your-namespace>
    ```
    
    Pay attention to the alert information in the `Events` section. Common reasons include the following:
    
    -   `StorageClass not found`: The `storageClassName` field is incorrect, or the corresponding StorageClass does not exist.
        
    -   `provisioning failed` or `failed to create fileset`: There is an issue interacting with the backend storage. Continue with the subsequent steps.
        
2.  Check StorageClass and CSI Driver Configuration
    
    If the event log points to a configuration issue or there is no clear error, you can check the `StorageClass` configuration and the CSI driver status.
    
    ```
    # 1. Check the StorageClass YAML configuration
    kubectl get storageclass <your-sc-name> -o yaml
    
    # 2. Check if the CSI driver is registered in the cluster
    kubectl get csidriver bmcpfsplugin.csi.alibabacloud.com
    ```
    
    You can confirm the following:
    
    -   StorageClass configuration: The `provisioner` field is correct, and the `parameters` for `bmcpfsId` are correctly filled and the file system ID exists.
        
    -   bmcpfs-csi status: If the `get csidriver` command reports an error or returns no output, it indicates that the driver is not correctly installed. On the cluster's **Add-ons** page, you can install bmcpfs-csi-controller, bmcpfs-csi-node, and cnfs-nas-daemon.
        

#### **Why is the pod always in `ContainerCreating` status, or why does the `MountVolume.Setup failed` error appear in events?**

This error indicates that the pod has been scheduled to a node but failed to mount the volume on the node. You can follow this troubleshooting process.

1.  **View Pod Events to Identify the Cause**
    
    You can view the pod's event logs using the `describe pod` command.
    
    ```
    kubectl describe pod <pod-name> -n <your-namespace>
    ```
    
    Focus on `Warning` messages in the `Events` section, such as `FailedMount` or `MountVolume.Setup failed`.
    
2.  Check Mount Prerequisites
    
    Confirm the PVC status is `Bound`. Pods can only mount successfully bound volumes.
    
    ```
    kubectl get pvc <your-pvc-name>
    ```
    
    The PVC's `STATUS` must be `Bound`. If it is `Pending`, it indicates an issue during volume creation. See [Why is the PVC always in Pending status?](#73c54a8e289kt).
    
3.  Check Detailed Logs of the Node CSI Plug-in
    
    If the PVC is `Bound` and the pod is on the correct node, you can further confirm the mount operation performed by the node-side `csi-plugin` component.
    
    ```
    # View the csi-plugin logs on the pod's node to get the final failure reason
    kubectl get pods -n kube-system -l app.kubernetes.io/name=bmcpfs-csi-driver   --field-selector spec.nodeName=<nodeName>   -o name | xargs kubectl logs -n kube-system -c csi-plugin
    ```
    
    This log contains the lowest-level error messages, such as network connectivity issues from the node to the storage backend, mount target permission issues, or underlying I/O errors.
