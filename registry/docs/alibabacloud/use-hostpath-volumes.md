A HostPath volume mounts a file or directory from the host node's file system into a pod. This gives containers direct access to host-level data, which is useful for reading node logs, accessing node configuration files, or sharing data between pods on the same node during development. Because HostPath breaks container isolation, use it only when no other volume type meets your requirements.

**Warning**

HostPath volumes present significant security risks. A container with HostPath access can read sensitive host credentials, access the container runtime socket, and modify critical system files. Mounting the host file system breaks container isolation. Misconfigured mounts, such as mounting the root directory `/`, or containers with vulnerabilities can compromise the security and stability of the node.

## Scope

HostPath volumes are supported only on Elastic Compute Service (ECS) nodes.

On other node types, such as GPU, Lingjun, ECI, or ACS nodes, use NAS file systems or dynamically provisioned cloud disk volumes instead.

## **Limitations**

A HostPath volume binds a pod directly to physical storage on a specific node. Data in a HostPath volume is specific to that node and does not persist if the pod moves to a different node.

-   Do not use HostPath for stateful applications that need high availability and persistent storage, such as databases or caches. If a pod is restarted or updated and rescheduled to another node, it loses access to its original data.
    
-   HostPath is not suitable for nodes that have a read-only root file system, such as [ContainerOS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/containeros-overview/).
    

## How it works

After a pod is scheduled to the target node, the kubelet on that node mounts the [HostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath) volume before the container starts. The kubelet validates and prepares the host path (`path`) based on the mount type (`type`) defined in the `hostPath` field.

**Type**

**Behavior**

`DirectoryOrCreate`

If the specified host path does not exist, the kubelet creates an empty directory with permissions set to 0755. The directory owner and group match those of the kubelet.

`Directory`

The specified host path must exist and be a directory. Otherwise, the pod fails to start.

`FileOrCreate`

If the specified host path does not exist, the kubelet creates an empty file with permissions set to 0644. The file owner and group match those of the kubelet.

`File`

The specified host path must exist and be a file. Otherwise, the pod fails to start.

After validation passes, the kubelet bind-mounts the host path into the container. All subsequent read and write operations on the mount point are performed directly on the host file system.

## Usage methods

Choose one of the following methods based on your requirements:

**Method**

**When to use**

**Mount HostPath directly in a pod**

Simple setups. Defines `hostPath` directly in the pod's `volumes`. Tightly couples storage to the application. Avoid for production applications that require long-term maintenance or may require storage changes.

**Mount HostPath using a PV and PVC**

Production or maintainable setups. Defines `hostPath` in a standalone PersistentVolume (PV). The pod requests the storage through a PersistentVolumeClaim (PVC). Decouples storage from the application, so you can manage the underlying storage independently without changing the pod configuration.

## Mount HostPath directly in a pod

1.  ### Step 1: Create the manifest
    
    Create a file named `pod-hostpath-direct.yaml`.
    
    > This example mounts the node's `/data` directory to the `/test` directory in the pod.
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: test-pod
    spec:
      containers:
      - image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
        name: test-container
        volumeMounts:
        - mountPath: /test
          name: test-volume
      volumes:
      - name: test-volume
        hostPath:
          # Specify the host path
          path: /data
          # Specify the mount type
          type: DirectoryOrCreate
    ```
    
2.  ### Step 2: Deploy the pod
    
    ```
    kubectl apply -f pod-hostpath-direct.yaml
    ```
    
3.  ### Step 3: Verify the mount
    
    Create a file inside the pod, then check whether the file exists on the node.
    
    1.  Create a `test.txt` file in the pod's `/test` directory (the mount point).
        
        ```
        kubectl exec test-pod -- sh -c 'echo "This file was created from within the Pod." > /test/test.txt'
        ```
        
    2.  Get the name of the node where the pod is running.
        
        ```
        NODE_NAME=$(kubectl get pod test-pod -o jsonpath='{.spec.nodeName}')
        echo "Pod is running on node: $NODE_NAME"
        ```
        
    3.  Log on to the node and verify the file.
        
        For more information, see [Log on to a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-management/#ac78e94553p3v). Run the `ls /data` command to check whether the `/data` directory contains the file that you just created.
        
        If the output includes the `test.txt` file, the HostPath volume was mounted successfully.
        

## Mount HostPath using a PV and PVC

1.  ### Step 1: Create the manifest
    
    Create a file named `pv-pvc-hostpath.yaml`.
    
    > This example creates a PV that points to the host's `/data` directory, a PVC that requests that storage, and a pod that uses the PVC.
    
    ```
    # --- PersistentVolume definition ---
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: hostpath-pv
      labels:
        type: local
    spec:
      capacity:
        storage: 10Gi
      accessModes:
        - ReadWriteOnce
      hostPath:
        path: "/data"
    ---
    # --- PersistentVolumeClaim definition ---
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: hostpath-pvc
    spec:
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: 10Gi
      # Use selector to ensure the PVC binds to the PV created earlier
      selector:
        matchLabels:
          type: local
    ---
    # --- Pod definition ---
    apiVersion: v1
    kind: Pod
    metadata:
      name: test-pod-pvc
    spec:
      containers:
        - name: test-container
          image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
          ports:
            - containerPort: 80
          volumeMounts:
            - mountPath: "/usr/share/nginx/html"
              name: storage
      volumes:
        - name: storage
          persistentVolumeClaim:
            # Reference the PVC defined earlier
            claimName: hostpath-pvc
    ```
    
2.  ### Step 2: Create the PV, PVC, and pod
    
    ```
    kubectl apply -f pv-pvc-hostpath.yaml
    ```
    
3.  ### Step 3: Verify the mount
    
    Create a file inside the pod, then check whether the file exists on the node.
    
    1.  Create a `test.txt` file in the pod's `/usr/share/nginx/html` directory (the mount point).
        
        ```
        kubectl exec test-pod-pvc -- sh -c 'echo "File from PV/PVC Pod." > /usr/share/nginx/html/test.txt'
        ```
        
    2.  Get the name of the node where the pod is running.
        
        ```
        NODE_NAME=$(kubectl get pod test-pod-pvc -o jsonpath='{.spec.nodeName}')
        echo "Pod is running on node: $NODE_NAME"
        ```
        
    3.  Log on to the node and verify the file.
        
        For more information, see [Log on to a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-management/#ac78e94553p3v). Run the `ls /data` command to check whether the `/data` directory contains the file that you just created.
        
        If the output includes the `test.txt` file, the HostPath volume was mounted successfully using the PV and PVC.
        

## Security and operations

### Security isolation

-   **Mount as read-only**: If your application only reads data from the node, mount the volume as read-only (`readOnly: true` in `volumeMounts`). This prevents accidental changes to host files.
    
-   **Follow the principle of least privilege**: Do not mount the host root directory (`/`) or sensitive system directories, such as `/etc` or `/var`. Use a dedicated directory for HostPath instead.
    

### Node resource monitoring

-   **Monitor host disk**: Containers that write to a HostPath volume consume the node's disk space. Implement [monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-management/#d6c83b3d48nti) and [alerting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster#5ebd6dd0308cy) for disk partitions to prevent nodes from failing due to disk exhaustion.
    
-   **Evaluate I/O impact**: Frequent read and write operations on a HostPath volume consume the node's I/O resources. This can affect other application pods or impact kubelet stability. Assess the potential performance impact before deploying.
    

## FAQ

### Does data in a HostPath volume persist after a pod is deleted and recreated?

This depends on the node to which the new pod is scheduled.

-   **Scheduled to the same node**: The new pod mounts the same directory on the node and can access all previous data.
    
-   **Scheduled to a different node**: The new pod mounts an empty directory on the new node. The data on the original node becomes inaccessible to the new pod.
    

\=
