This topic describes frequently asked questions and solutions for issues encountered when using Network Attached Storage (NAS) volumes.

## **Quick navigation**

**Category**

**Issue**

Mounting

-   [Error during mount: chown: Operation not permitted](#section-srw-s3w-230)
    
-   [Controller task queue is full when mounting a dynamically provisioned NAS volume](#section-25a-w2m-h8u)
    
-   [The time required to mount a NAS persistent volume increases](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes-1#section-td0-7vk-92o)
    
-   [Error during mount: unknown filesystem type "xxx"](#section-ahv-hi5-iz0)
    
-   [Why is my pod stuck in ContainerCreating when I mount two NAS PVCs?](#section-nqe-dto-jor)
    
-   [How do I mount a NAS file system with TLS using CSI?](#7ef12ff020fgw)
    
-   [How do I implement user or group isolation on NAS?](#9ac24a9b81se0)
    
-   [Can multiple applications use the same NAS volume?](#00381528e3tag)
    
-   [Error when mounting a NAS volume in ACS: failed to do setup volume](#a04406f920xvq)
    

Usage

-   [Cannot create or modify directories on a NAS volume](#section-wg3-a79-gg3)
    
-   [NFS Stale File Handle error during read/write operations](#section-mhx-1q1-nat)
    

Unmounting

[Unmount times out and pod is stuck in Terminating state](#1907f33d23nz2)

## **Mounting**

### Error during mount: `**chown: Operation not permitted**`

**Symptom**

When mounting a NAS volume, the process fails with a `chown: Operation not permitted` error.

**Cause**

The user account under which the container is running does not have permission to change the ownership of files on the NAS volume.

**Solution**

1.  **Run as root or use** `**fsGroup**`: Ensure the container process has the necessary permissions. Use the root user to run the `chown` and `chgrp` operations. If the `accessModes` of the persistent volume (PV) is set to `ReadWriteOnce`, you can also use `securityContext.fsGroup` to configure volume access permissions and the ownership change policy for pods. For more information, see [Configure a security context for a pod or container](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/).
    
2.  **Check NAS access group settings**: If the error persists even when running as root, check the permission group of the NAS mount target to ensure that root users are allowed to access the file system. The permission rule must be set to **no\_squash**, which prevents mapping the root user to an anonymous user. For details, see [Manage permission groups](/help/en/nas/user-guide/manage-a-permission-group).
    

### **Controller task queue is full when mounting a dynamically provisioned NAS volume**

**Symptom**

When using dynamically provisioned NAS volumes, if the rate of subdirectory creation is faster than the rate of deletion, the controller's task queue can become blocked, preventing the creation of new PVs.

**Cause**

This issue occurs when a cluster uses dynamically provisioned NAS volumes, and the `reclaimPolicy` of the StorageClass is set to `Delete` while `archiveOnDelete` is set to `false`.

**Solution**

Set `archiveOnDelete` to `true` in your StorageClass. When `true`, deleting a PV only renames the corresponding subdirectory on the NAS file system instead of permanently deleting its contents. This operation is much faster and avoids blocking the controller. You are then responsible for cleaning up the archived directories separately, for example, by running a scheduled cleanup job in the root directory of an overloaded node, or by using multiple pods to concurrently delete subdirectories that match a specific format.

### Extended mount times for NAS volumes

**Symptom**

Mounting a NAS volume takes a considerably long time.

**Cause**

Mount times may be extended if `chmod` or `chown` operations are recursively applied to the mounted PV and Persistent Volume Claim (PVC). This typically occurs when both of the following conditions are met:

-   The `AccessModes` parameter is set to `ReadWriteOnce` in the PV and PVC templates.
    
-   The `securityContext.fsGroup` parameter is configured in the application's manifest.
    

**Solution**

Choose one of the following solutions:

-   **Remove** `**fsGroup**`: If possible, remove the `fsGroup` parameter from the `securityContext` block in your application manifest.
    
-   **Pre-set permissions manually**: To change the files in the mount directory to the target UID or `mode`, manually mount the target directory to an ECS instance. Then, run the `chown` or `chmod` commands to set the desired permissions. Once complete, you can use the NAS volume through the Container Storage Interface (CSI). For how to use a NAS volume through CSI, see [Mount a statically provisioned NAS volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-nas-volumes#task-2022002) or [Use dynamically provisioned NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-a-dynamically-provisioned-nas-volume#task-2342476).
    
-   **Use** `**fsGroupChangePolicy**` **(Kubernetes 1.20+)**: Set `fsGroupChangePolicy` to `OnRootMismatch` in your pod's `securityContext`. This policy ensures that `chmod` and `chown` operations are performed only during the first time the volume is mounted. Subsequent mounts will be much faster. For details, see [Configure a Security Context for a Pod or a Container](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#%E4%B8%BA-pod-%E9%85%8D%E7%BD%AE%E5%8D%B7%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90%E5%92%8C%E5%B1%9E%E4%B8%BB%E5%8F%98%E6%9B%B4%E7%AD%96%E7%95%A5).
    

### Error during mount: `**unknown filesystem type "xxx"**`

**Symptom**

Mounting a NAS volume fails with the error `unknown filesystem type "xxx"`.

**Cause**

The node where the pod is scheduled is missing the required storage dependencies.

**Solution**

Verify that the configurations of the volume are correct.

### **Why is my pod stuck in** `**ContainerCreating**` **when I mount two NAS PVCs?**

**Symptom**

A pod that mounts two different PVCs for the same NAS file system gets stuck in the ContainerCreating state. Mounting either PVC individually works correctly.

**Cause**

The PVs associated with the two PVCs share the same value for `spec.csi.volumeHandle`. The kubelet treats the two PVs as the same one, leading to a mounting conflict.

**Solution**

Modify the `spec.csi.volumeHandle` field for each PV to ensure it is unique. A best practice is to set its value to be the same as the PV name (`metadata.name`).

### **How** do I mount a NAS file system with TLS using CSI**?**

You can enable TLS to encrypt data in transit between your pods and the NAS service. This is achieved by using the alinas mount protocol, which leverages the Alibaba Cloud NAS client.

**Important**

The NAS client uses Stunnel for TLS encryption, which can consume significant CPU resources for high-throughput workloads. In extreme cases, a single mount point might consume an entire CPU core. For details, see [Encryption in transit for NFS file systems](/help/en/nas/user-guide/encryption-in-transit-for-nfs-file-systems).

1.  [Install the cnfs-nas-daemon component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-cnfs-nas-daemon).
    
2.  On the **Add-ons** page, edit the `csi-plugin` configuration to enable the `AlinasMountProxy=true` FeatureGate.
    
3.  Use the following examples to mount a NAS volume with TLS.
    
    ## Dynamically provisioned NAS volume example
    
    ```
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: alicloud-nas-tls
    mountOptions:
    - nolock,tcp,noresvport
    - vers=3
    - tls   # Add the tls mount option.
    parameters:
      volumeAs: subpath
      server: "0cd8b4a576-g****.cn-hangzhou.nas.aliyuncs.com:/k8s/"
      mountProtocol: alinas  # Declare that the alinas client is used for mounting.
    provisioner: nasplugin.csi.alibabacloud.com
    reclaimPolicy: Retain
    ---
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: nas-tls
    spec:
      accessModes:
        - ReadWriteMany
      storageClassName: alicloud-nas-tls
      resources:
        requests:
          storage: 20Gi
    ```
    
    **Parameter**
    
    **Description**
    
    `parameters.mountProtocol`
    
    Specifies the client used for mounting. 
    
    -   `alinas`: Use the Alibaba Cloud NAS client. 
        
    -   `""` (Default): Use the standard NFS protocol.
        
    
    `mountOptions`
    
    A list of mount options. To enable TLS encryption, include `tls` in this list. 
    
    **Note**
    
    The `tls` option is only effective when `parameters.mountProtocol` is set to `alinas`. By default, TLS is disabled.
    
    ## Statically provisioned NAS volume example
    
    ```
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: pv-nas-tls
      labels:
        alicloud-pvname: pv-nas-tls
    spec:
      capacity:
        storage: 5Gi
      accessModes:
        - ReadWriteMany
      csi:
        driver: nasplugin.csi.alibabacloud.com
        volumeHandle: pv-nas   # Must be the same as the PV name.
        volumeAttributes:
          server: "2564f4****-ysu87.cn-shenzhen.nas.aliyuncs.com"
          path: "/csi"
          mountProtocol: alinas # Declare that the alinas client is used for mounting.
      mountOptions:
      - nolock,tcp,noresvport
      - vers=3
      - tls # Add the tls mount option.
    ---
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: pvc-nas-tls
    spec:
      accessModes:
        - ReadWriteMany
      resources:
        requests:
          storage: 5Gi
      selector:
        matchLabels:
          alicloud-pvname: pv-nas-tls
    ```
    
    **Parameter**
    
    **Description**
    
    `spec.csi.volumeAttributes.mountProtocol`
    
    Specifies the client used for mounting. 
    
    -   `alinas`: Use the Alibaba Cloud NAS client. 
        
    -   `""` (Default): Use the standard NFS protocol.
        
    
    `spec.mountOptions`
    
    A list of mount options. To enable TLS encryption, add `tls` in this list. 
    
    **Note**
    
    The `tls` option is only effective when `parameters.mountProtocol` is set to `alinas`. By default, TLS is disabled.
    

### **How do I implement user or group isolation on NAS?**

To ensure data security between different users and groups, perform the following operations to isolate users or groups for NAS.

1.  Use the `securityContext` field in your workload manifest to run container processes as the `nobody` user (UID/GID 65534).
    
    ```
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: nas-sts
    spec:
      selector:
        matchLabels:
          app: nginx
      serviceName: "nginx"
      replicas: 1
      template:
        metadata:
          labels:
            app: nginx
        spec:
          securityContext:
            fsGroup: 65534    # When a directory or file is created, the UID/GID is 65534 (nobody user).
            fsGroupChangePolicy: "OnRootMismatch"    # Changes the owner and permissions of the content only if the owner and permissions of the root directory do not match the expected permissions of the volume.
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            securityContext:
              runAsUser: 65534    # All processes in the container run with the user ID 65534 (nobody user).
              runAsGroup: 65534   # All processes in the container run with the primary group ID 65534 (nobody user).
              allowPrivilegeEscalation: false
            volumeMounts:
            - name: nas-pvc
              mountPath: /data
      volumeClaimTemplates:
      - metadata:
          name: nas-pvc
        spec:
          accessModes: [ "ReadWriteOnce" ]
          storageClassName: "alicloud-nas-subpath"
          resources:
            requests:
              storage: 100Gi
    ```
    
2.  Run the `top` command in the container to verify that the `USER` is `nobody`.
    
    ```
    kubectl exec nas-sts-0 -- "top"
    ```
    
    Expected output:
    
    ```
    Mem: 11538180K used, 52037796K free, 5052K shrd, 253696K buff, 8865272K cached
    CPU:  0.1% usr  0.1% sys  0.0% nic 99.7% idle  0.0% io  0.0% irq  0.0% sirq
    Load average: 0.76 0.60 0.58 1/1458 54
      PID  PPID USER     STAT   VSZ %VSZ CPU %CPU COMMAND
       49     0 nobody   R     1328  0.0   9  0.0 top
        1     0 nobody   S     1316  0.0  10  0.0 sleep 3600
    ```
    
    The expected output indicates that the `nobody` user runs the `top` command.
    
3.  Verify that new directories and files are created in the NAS mount directory with `nobody` ownership.
    
    ```
    kubectl exec nas-sts-0 -- sh -c "touch /data/test; mkdir /data/test-dir; ls -arlth /data/"
    ```
    
    Expected output:
    
    ```
    total 5K
    drwxr-xr-x    1 root     root        4.0K Aug 30 10:14 ..
    drwxr-sr-x    2 nobody   nobody      4.0K Aug 30 10:14 test-dir
    -rw-r--r--    1 nobody   nobody         0 Aug 30 10:14 test
    drwxrwsrwx    3 root     nobody      4.0K Aug 30 10:14 .
    ```
    
    The output should show `nobody` `nobody` as the owner of the new `test` file and `test-dir` directory.
    

### **Can multiple applications use the same NAS volume?**

Yes. NAS provides shared storage, meaning a single volume (represented by a PVC) can be mounted and used by multiple pods at the same time.

-   For conditions on NAS concurrent writes, see [How do I prevent exceptions that may occur when multiple processes or clients concurrently write data to a log file?](/help/en/nas/user-guide/cross-mount-compatibility-faq#section-xid-0j6-nr4) and [How do I resolve the latency in writing data to an NFS file system?](/help/en/nas/user-guide/cross-mount-compatibility-faq#section-bhg-7ne-fzs)
    
-   For mounting instructions, see [Use CNFS to manage NAS file systems (recommended)](/help/en/doc-detail/473920.html), [Mount a statically provisioned NAS volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-nas-volumes), and [Use dynamically provisioned NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-a-dynamically-provisioned-nas-volume).
    

### **Error when mounting a NAS volume in ACS:** `failed to do setup volume`

When using a NAS volume with Container Compute Service (ACS), you may encounter mount failures that time out with the error failed to do setup volume. This is often caused by an incorrect NAS configuration. For the correct setup process, see [Mount NAS file systems on ACS](/help/en/nas/user-guide/acs-mount-file-system-of-alibaba-cloud-container-computing-service).

The most common cause of this error is a virtual private cloud (VPC) mismatch, where the NAS mount target specified in your StorageClass is not in the same VPC as your cluster. Follow these steps to verify your configuration:

1.  Get the cluster's VPC ID.
    
    1.  Log on to the [ACS console](https://acs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, click the name of the target cluster. In the left navigation pane, choose **Configurations** > **ConfigMaps**.
        
    3.  Switch to the `kube-system` namespace, and click on `acs-profile`. Find and record the `vpcId` value (such as `vpc-gw87c9kdqs25al2z****`).
        
2.  Find the VPC of the NAS mount target.
    
    1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/). In the left navigation pane, choose **File System** > **File System List**, and click the name of the target NAS.
        
    2.  In the left navigation pane, click **Mount Targets**. In the **Mount Target** section, identify the mount target you are using through VPC ID.
        
3.  Verify and resolve any mismatch.
    
    Compare the VPC ID from Step 1 with the one from Step 2. If they do not match, you must reconfigure your storage. Follow the instructions in [Mount NAS file systems on ACS](/help/en/nas/user-guide/acs-mount-file-system-of-alibaba-cloud-container-computing-service) to create a mount target in the correct VPC or to update your StorageClass to use the correct mount target address.
    

## **Usage**

### **Cannot create or modify directories on a NAS volume**

**Symptom**

A non-root user inside a container cannot create or modify directories on a mounted NAS volume.

**Cause**

The user does not have the necessary write permissions for the PV and is not allowed to create or modify directories.

**Solution**

Change the permissions of the mount path using `chmod` or `chown`. You can do this in two ways:

-   **Use an init container**: Start an Init container with root permissions to mount the PV. Then, run the `chmod` or `chown` command to modify the permissions of the mount directory.
    
-   **Use** `**fsGroupChangePolicy**`: Set `fsGroupChangePolicy` to `OnRootMismatch` in the pod's `securityContext`. This will automatically run `chmod` and `chown` the first time the volume is mounted.
    

### `**NFS Stale File Handle**` **error** during read/write operations

**Symptom**

An application receives an `NFS Stale File Handle` error when reading from or writing to a file.

**Cause**

This is a standard NFS behavior that occurs when a file is deleted by one client while another client still has an open file descriptor for it. For example:

1.  Client 1 opens `/data/file.txt`.
    
2.  Client 2 deletes `/data/file.txt`.
    
3.  Client 1 attempts to read or write using its now-invalid file descriptor and receives the error.
    

**Solution**

NAS does not enforce data consistency at this level. Your application logic must be designed to handle these scenarios gracefully, for example, by implementing locking mechanisms or by re-opening file handles when this error occurs.

## Unmounting

### Unmount times out and pod is stuck in `Terminating` state

**Symptom**

When a pod with a mounted NAS volume is deleted, it gets stuck in the `Terminating` state because the volume unmount operation times out.

**Cause**

This can be caused by an incorrect configuration in the csi-plugin DaemonSet, where `/var/run` is mounted directly as a hostPath volume. You can confirm this by running:

```
kubectl get ds -n kube-system csi-plugin -ojsonpath='{.spec.template.spec.volumes[?(@.hostPath.path=="/var/run/")]}'
```

If this command returns any output, the misconfiguration is present.

**Solution**

Patch the csi-plugin DaemonSet to correct the volume mounts.

```
kubectl patch -n kube-system daemonset csi-plugin -p '
spec:
  template:
    spec:
      containers:
        - name: csi-plugin
          volumeMounts:
            - mountPath: /host/var/run/efc
              name: efc-metrics-dir
            - mountPath: /host/var/run/ossfs
              name: ossfs-metrics-dir
            - mountPath: /host/var/run/
              $patch: delete
      volumes:
        - name: ossfs-metrics-dir
          hostPath:
            path: /var/run/ossfs
            type: DirectoryOrCreate
        - name: efc-metrics-dir
          hostPath:
            path: /var/run/efc
            type: DirectoryOrCreate
        - name: fuse-metrics-dir
          $patch: delete'
```

After the patch is applied, the csi-plugin pods will restart with the correct configuration, and the issue should be resolved.
