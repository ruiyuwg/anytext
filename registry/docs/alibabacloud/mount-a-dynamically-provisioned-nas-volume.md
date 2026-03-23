Manually creating persistent volumes (PVs) for each workload does not scale when multiple pods need shared, persistent file storage. Dynamic provisioning automatically creates and binds PVs to persistent volume claims (PVCs) based on a StorageClass, which makes it ideal for workloads that require concurrent read/write access across pods.

## Dynamic provisioning workflow

When you create a PVC, the system uses the referenced StorageClass to automatically create a PV and the corresponding NAS storage resource.

1.  **Create a StorageClass**: Define a storage template that specifies the NAS mount target and mount mode.
    
2.  **Create a PVC**: Request storage. The system automatically creates a PV and binds it to the PVC.
    
3.  **Mount the volume**: Reference the PVC in your pod spec to mount the NAS volume inside the container.
    

### Choose a mount mode

Set the mount mode with the `volumeAs` parameter in the StorageClass. This parameter defines how each PV maps to NAS storage.

**Mount mode**

**How it works**

**Best for**

**Cost**

**Isolation**

**subpath** (recommended)

Each PV maps to a dedicated subdirectory in a single NAS file system.

Multiple pods that share or isolate data on a single NAS file system.

Low—one file system is shared across PVs.

Directory-level isolation.

**sharepath**

All PVs map to the same directory defined in the StorageClass.

Multiple pods across namespaces that need access to the same NAS subdirectory.

Low—one file system, one directory.

No isolation—all PVs share one directory.

**filesystem** (not recommended)

Each PV maps to a newly created, standalone NAS file system instance.

Workloads that require strict performance or security isolation.

High—one file system and mount target per PV.

Full file system isolation.

For most use cases, **subpath** offers the best balance of isolation and cost. Use **sharepath** when you need cross-namespace access to the same directory. Use **filesystem** only when strict isolation is required, and you can accept the higher cost.

## Prerequisites

Before you begin, make sure that the following requirements are met:

-   The csi-plugin and csi-provisioner add-ons installed in your cluster.
    
    > These CSI add-ons are installed by default. You can verify their status on the **Add-ons** page. [Upgrade the CSI components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in) to the latest version.
    
-   (Subpath and sharepath only) A NAS file system that meets the following conditions. If no file system exists, [create one](/help/en/nas/user-guide/create-a-file-system#task-27530-zh).
    
    -   **Protocol type**: NFS only.
        
    -   **VPC**: The NAS file system must be in the same VPC as your cluster. NAS supports cross-zone mounting but does not support cross-VPC mounting.
        
    -   **Mount target**: A mount target in the same VPC as your cluster with an active status. For more information, see [Manage mount targets](/help/en/nas/user-guide/manage-mount-targets#section-sjv-ozt-711). Note the mount target address for later use.
        
    -   (Optional) **Encryption type**: To encrypt data on the storage volume, configure the encryption type when you create the NAS file system.
        
    
    > NAS has [limits](/help/en/nas/user-guide/manage-directory-quotas#section-jyq-ow8-pjw) on the number of mount connections, file systems, and supported protocol types.
    
-   (Subpath only) CSI component version 1.31.4 or later. For upgrade instructions, see [Upgrade CSI components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
    

## Before you start

-   **Do not delete the mount target while volumes are in use.** Deleting the mount target in the NAS console while volumes are mounted causes I/O errors on the node.
    
-   **Handle concurrent writes at the application level.** NAS is a shared storage service. When multiple pods write to the same volume, your application must manage data consistency. For more information, see [Multiple processes writing to the same log file](/help/en/nas/user-guide/cross-mount-compatibility-faq) and [File read and write issues](/help/en/nas/user-guide/cross-mount-compatibility-faq).
    
-   **Avoid** `**securityContext.fsgroup**` **when possible.** Setting `securityContext.fsgroup` in your pod spec causes kubelet to recursively run `chmod` or `chown` after mounting, which can significantly slow down pod startup. For optimization options, see [NAS Persistent Volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes).
    

## Method 1: Mount using subpath (recommended)

In subpath mode, each PVC automatically gets a dedicated subdirectory in the NAS file system as its PV.

### Step 1: Create a StorageClass

#### kubectl

1.  Create a file named `alicloud-nas-subpath.yaml` with the following content.
    
    **StorageClass parameters (subpath)**
    
    **Parameter**
    
    **Description**
    
    **Default**
    
    `mountOptions`
    
    Mount options for NAS, including the NFS protocol version. NAS uses NFS v3 by default. To use a different version, set `vers=4.0`. For supported NFS versions per NAS type, see [NFS protocol](/help/en/nas/product-overview/nfsnfs).
    
    `vers=3`
    
    `parameters.volumeAs`
    
    Mount mode. Set to `subpath`.
    
    \--
    
    `parameters.server`
    
    The NAS mount target address and subdirectory path. Format: `<mount-target-address>:/<path>`.  
    \- `<mount-target-address>`: The mount target address. See [Manage mount targets](/help/en/nas/user-guide/manage-mount-targets#section-sjv-ozt-711).  
    \- `:/<path>`: The NAS subdirectory to mount. If unset or if the subdirectory does not exist, the root directory is mounted by default. General-purpose NAS root: `/`. Extreme NAS root: `/share` (subdirectory paths must start with `/share`, for example, `/share/data`).
    
    Root directory
    
    `parameters.archiveOnDelete`
    
    Controls whether backend data is permanently deleted when you delete a PVC. This setting applies only when `reclaimPolicy` is `Delete`.  
    \- `true`: Data is not deleted. The subdirectory is archived and renamed to `archived-{pvName}.{timestamp}`.  
    \- `false`: The subdirectory and its data are permanently deleted (only the subdirectory, not the NAS file system).
    
    **Note**
    
    Setting this to `false` with frequent PV creation and deletion may block the CSI controller task queue and prevent new PVs from being provisioned. See [CSI controller task queue is full](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes).
    
    `true`
    
    `provisioner`
    
    The CSI driver. Set to `nasplugin.csi.alibabacloud.com` for Alibaba Cloud NAS.
    
    \--
    
    `reclaimPolicy`
    
    Reclaim policy for the PV.
    
    -   `Delete`: Handles backend data based on the `archiveOnDelete` setting.
        
    -   `Retain`: The PV and NAS data remain intact when you delete the PVC. You must delete them manually. Use this for production environments.
        
    
    `Delete`
    
    `allowVolumeExpansion`
    
    Enables online expansion of PVs by modifying the PVC capacity. Supported only for General-purpose NAS. The CSI driver uses NAS [directory quota](/help/en/nas/user-guide/manage-directory-quotas) to enforce capacity limits. To expand, edit the `spec.resources.requests.storage` field in the PVC. See [Set directory quotas for NAS dynamically provisioned volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-nas-volume).
    
    **Note**
    
    NAS directory quotas are applied asynchronously. Immediately after creating or expanding a PV, high-speed bulk writes may exceed the quota before it fully takes effect. See [Limits](/help/en/nas/user-guide/manage-directory-quotas#section-jyq-ow8-pjw).
    
    \--
    
    ```
       apiVersion: storage.k8s.io/v1
       kind: StorageClass
       metadata:
         # StorageClass name. Must be unique in the cluster.
         name: alicloud-nas-subpath
       mountOptions:
       - nolock,tcp,noresvport
       - vers=3
       parameters:
         # Mount mode: subpath creates a subdirectory per PV.
         volumeAs: subpath
         # NAS mount target address and base path. Format: <mount-target-address>:/<path>
         server: "0cd8b4a576-g****.cn-hangzhou.nas.aliyuncs.com:/k8s"
         # Archive (not delete) subdirectory data when PVC is deleted with reclaimPolicy: Delete.
         archiveOnDelete: "true"
       provisioner: nasplugin.csi.alibabacloud.com
       reclaimPolicy: Retain
       allowVolumeExpansion: true
    ```
    
2.  Create the StorageClass.
    
    ```
       kubectl create -f alicloud-nas-subpath.yaml
    ```
    

#### Console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the target cluster. In the left navigation pane, choose **Volumes** > **StorageClasses**.
    
3.  Click **Create**. Enter a unique name for the StorageClass, set **PV Type** to **NAS**, and complete the remaining fields as described below.
    
    **Configuration item**
    
    **Description**
    
    **Select Mount Target**
    
    The mount target address of the NAS file system.
    
    **Volume Mode**
    
    Select **Subdirectory** (subpath). The system automatically creates a subdirectory under the mount path. Data is stored at `<NAS mount target>:<mount path>/<pv-name>/`.
    
    **Mount Path**
    
    The subdirectory of the NAS file system to mount. If you leave this blank, the root directory is mounted by default. If the directory does not exist, it is automatically created.
    
    -   General-purpose NAS: Root directory is `/`.
        
    -   Extreme NAS: Root directory is `/share`. Subdirectory paths must start with `/share` (for example, `/share/data`).
        
    
    **Reclaim Policy**
    
    Reclaim policy for the PV.
    
    -   `Delete` (default): Handles backend data based on the `archiveOnDelete` setting.
        
    -   `Retain`: The PV and NAS data remain intact. You must delete them manually.
        
    
    **Mount Options**
    
    Mount options for NAS, including the NFS protocol version. The default version is NFS v3. To use a different version, set `vers=4.0`. For supported versions, see [NFS protocol](/help/en/nas/product-overview/nfsnfs).
    

After the StorageClass is created, you can view it in the **Storage Classes** list on the console.

### Step 2: Create a PVC

#### kubectl

1.  Create a file named `nas-pvc.yaml` with the following content.
    
    **PVC parameters**
    
    **Parameter**
    
    **Description**
    
    **Default**
    
    `accessModes`
    
    Volume access mode. This field is required. Valid values:
    
    -   `ReadWriteMany`: Read-write by many nodes. Recommended for NAS.
        
    -   `ReadWriteOnce`: Read-write by a single node.
        
    -   `ReadOnlyMany`: Read-only by many nodes.
        
    
    `ReadWriteMany`
    
    `storageClassName`
    
    The name of the StorageClass to bind.
    
    \--
    
    `storage`
    
    Requested volume capacity. By default, this is a resource request and does not restrict the actual storage available to the pod. The maximum NAS capacity depends on the specification. See [General-purpose NAS](/help/en/nas/product-overview/general-purpose-nas-file-systems) and [Extreme NAS](/help/en/nas/product-overview/extreme-nas-file-systems).  
      
    When `allowVolumeExpansion` is set to `true` in the StorageClass, this value becomes a hard limit enforced by NAS directory quota.
    
    \--
    
    ```
       kind: PersistentVolumeClaim
       apiVersion: v1
       metadata:
         name: nas-csi-pvc
       spec:
         accessModes:
         - ReadWriteMany
         # Reference the StorageClass created in Step 1.
         storageClassName: alicloud-nas-subpath
         resources:
           requests:
             # Requested volume capacity. See the storage parameter description below.
             storage: 20Gi
    ```
    
2.  Create the PVC.
    
    ```
       kubectl create -f nas-pvc.yaml
    ```
    
3.  Verify that the PV was automatically created and bound:
    
    ```
       kubectl get pv
    ```
    
    ```
       NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                 STORAGECLASS             VOLUMEATTRIBUTESCLASS   REASON   AGE
       nas-a7540d97-0f53-4e05-b7d9-557309******   20Gi       RWX            Retain           Bound    default/nas-csi-pvc   alicloud-nas-subpath     <unset>                          5m
    ```
    

#### Console

1.  In the left navigation pane, choose **Volumes** > **Persistent Volume Claims**.
    
2.  On the **Persistent Volume Claims** page, click **Create**. Configure the PVC as described below and click **Create**.
    
    **Configuration item**
    
    **Description**
    
    **PVC Type**
    
    Select NAS.
    
    **Name**
    
    PVC name. Must be unique within the namespace.
    
    **Allocation Mode**
    
    Select **Use StorageClass**.
    
    **Existing Storage Class**
    
    Click **Select** and choose the StorageClass you created earlier.
    
    **Capacity**
    
    Requested volume capacity. By default, this is a resource request and does not restrict the actual storage available to the pod. The maximum NAS capacity depends on the specification. See [General-purpose NAS](/help/en/nas/product-overview/general-purpose-nas-file-systems) and [Extreme NAS](/help/en/nas/product-overview/extreme-nas-file-systems).  
      
    When `allowVolumeExpansion` is set to `true` in the StorageClass, this value becomes a hard limit enforced by NAS directory quota.
    
    **Access Mode**
    
    Volume access mode. Valid values:
    
    -   `ReadWriteMany` (default): Read-write by many nodes.
        
    -   `ReadWriteOnce`: Read-write by a single node.
        
    -   `ReadOnlyMany`: Read-only by many nodes.
        
    

### Step 3: Create an application and mount the volume

Mount the PVC to your application pods. The following example creates two Deployments that reference the same PVC to share a single NAS subdirectory.

> To mount different subdirectories of the same NAS file system to multiple pods, create separate StorageClasses and PVCs for each subdirectory, then mount each PVC separately.

#### kubectl

1.  Create two files named `nginx-1.yaml` and `nginx-2.yaml` with the following content. Both reference the same PVC.
    
    nginx-1.yaml
    
    ```
       apiVersion: apps/v1
       kind: Deployment
       metadata:
         name: nas-test-1
         labels:
           app: nginx
       spec:
         selector:
           matchLabels:
             app: nginx
         template:
           metadata:
             labels:
               app: nginx
           spec:
             containers:
             - name: nginx
               image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
               ports:
               - containerPort: 80
               volumeMounts:
                 - name: nas-pvc
                   # Path inside the container where NAS is mounted.
                   mountPath: "/data"
             volumes:
               - name: nas-pvc
                 persistentVolumeClaim:
                   # Reference the PVC created in Step 2.
                   claimName: nas-csi-pvc
    ```
    
    nginx-2.yaml
    
    ```
       apiVersion: apps/v1
       kind: Deployment
       metadata:
         name: nas-test-2
         labels:
           app: nginx
       spec:
         selector:
           matchLabels:
             app: nginx
         template:
           metadata:
             labels:
               app: nginx
           spec:
             containers:
             - name: nginx
               image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
               ports:
               - containerPort: 80
               volumeMounts:
                 - name: nas-pvc
                   # Path inside the container where NAS is mounted.
                   mountPath: "/data"
             volumes:
               - name: nas-pvc
                 persistentVolumeClaim:
                   # Reference the PVC created in Step 2.
                   claimName: nas-csi-pvc
    ```
    
2.  Create the two Deployments.
    
    ```
       kubectl create -f nginx-1.yaml -f nginx-2.yaml
    ```
    
3.  Check the pod status:
    
    ```
       kubectl get pod -l app=nginx
    ```
    
    ```
       NAME                         READY   STATUS    RESTARTS   AGE
       nas-test-1-b75d5b6bc-*****   1/1     Running   0          51s
       nas-test-2-b75d5b6bc-*****   1/1     Running   0          44s
    ```
    
4.  Confirm that the PVC is mounted. Replace `<podName>` with the actual pod name. Both pods should show `nas-csi-pvc` as the claim name, confirming they share the same NAS subdirectory.
    
    ```
       kubectl describe pod <podName> | grep "ClaimName:"
    ```
    

#### Console

Repeat the following steps to create two Deployments that mount the same PVC.

1.  On the [ACK Clusters](https://cs.console.alibabacloud.com) page, click the name of the target cluster. In the left navigation pane, choose **Workloads** > **Deployments**.
    
2.  Click **Create from Image**. Configure the application as described below. Keep other parameters at their default values. For more information, see [Create a Deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment).
    
    **Configuration page**
    
    **Parameter**
    
    **Description**
    
    **Basic Information**
    
    **Replicas**
    
    Number of replicas for the Deployment.
    
    **Container**
    
    **Image Name**
    
    Image address used to deploy the application.
    
    **Required Resources**
    
    vCPU and memory resources required.
    
    **Volume**
    
    Click **Add PVC**, then complete:
    
    -   **Mount Source**: Select the PVC created earlier.
        
    -   **Container Path**: Path in the container where the NAS file system is mounted.
        
    

After the Deployment completes, click the application name on the **Stateless** page and confirm that the pod status is **Running** on the **Container Group** tab.

To verify that storage is shared and persistent, see [Verify shared and persistent storage](#1bf579086c5uu).

## Method 2: Mount using sharepath

In sharepath mode, all PVCs created from the same StorageClass map to the same NAS directory. No new directories are created for individual PVs. Use this mode when pods in different namespaces need to read from and write to the same files.

### Step 1: Create a StorageClass

#### kubectl

1.  Create a file named `alicloud-nas-sharepath.yaml` with the following content.
    
    **StorageClass parameters (sharepath)**
    
    **Parameter**
    
    **Description**
    
    **Default**
    
    `mountOptions`
    
    Mount options for NAS, including the NFS protocol version. The default version is NFS v3. To use a different version, set `vers=4.0`. For supported versions, see [NFS protocol](/help/en/nas/product-overview/nfsnfs).
    
    `vers=3`
    
    `parameters.volumeAs`
    
    Mount mode. Set to `sharepath`.
    
    \--
    
    `parameters.server`
    
    The NAS mount target address and subdirectory path. Format: `<mount-target-address>:/<path>`.  
    \- `<mount-target-address>`: The mount target address. See [Manage mount targets](/help/en/nas/user-guide/manage-mount-targets#section-sjv-ozt-711).  
    \- `:/<path>`: The NAS subdirectory to mount. If unset or if the subdirectory does not exist, the root directory is mounted by default. General-purpose NAS root: `/`. Extreme NAS root: `/share` (subdirectory paths must start with `/share`).  
      
    
    Root directory
    
    `provisioner`
    
    The CSI driver. Set to `nasplugin.csi.alibabacloud.com`.
    
    \--
    
    `reclaimPolicy`
    
    For sharepath, always set this to `Retain` to prevent data loss. The default Kubernetes value is `Delete`.
    
    \--
    
    ```
       apiVersion: storage.k8s.io/v1
       kind: StorageClass
       metadata:
         name: alicloud-nas-sharepath
       mountOptions:
       - nolock,tcp,noresvport
       - vers=3
       parameters:
         # Mount mode: sharepath maps all PVs to the same directory.
         volumeAs: sharepath
         # NAS mount target address and shared directory path.
         server: "0cd8b4a576-g****.cn-hangzhou.nas.aliyuncs.com:/k8s"
       provisioner: nasplugin.csi.alibabacloud.com
       # Sharepath only supports Retain.
       reclaimPolicy: Retain
    ```
    
2.  Create the StorageClass.
    
    ```
       kubectl create -f alicloud-nas-sharepath.yaml
    ```
    

#### Console

1.  On the **Clusters** page, click the name of the target cluster. In the left navigation pane, choose **Volumes** > **StorageClasses**.
    
2.  Click **Create**. Enter a unique name for the StorageClass, set **PV Type** to NAS, and complete the remaining fields as described below.
    
    **Configuration item**
    
    **Description**
    
    **Select mount target**
    
    The mount target address of the NAS file system.
    
    **Volume mode**
    
    Select **Shared directory** (sharepath).
    
    **Mount path**
    
    The subdirectory of the NAS file system to mount. If you leave this blank, the root directory is mounted by default. If the directory does not exist, it is automatically created.  
    \- General-purpose NAS: Root directory is `/`.  
    \- Extreme NAS: Root directory is `/share`. Subdirectory paths must start with `/share`.  
      
    
    **Reclaim Policy**
    
    For sharepath, set this to `Retain`.
    
    **Mount options**
    
    Mount options for NAS, including the NFS protocol version. The default version is NFS v3. To use a different version, set `vers=4.0`. For supported versions, see [NFS protocol](/help/en/nas/product-overview/nfsnfs).
    

### Step 2: Create PVCs in multiple namespaces

To demonstrate cross-namespace sharing, create a PVC with the same name in two namespaces. Although the PVCs share a name, they are independent resources in separate namespaces. Both use the same StorageClass to obtain PVs that point to the same NAS directory.

#### kubectl

1.  Create the `ns1` and `ns2` namespaces.
    
    ```
       kubectl create ns ns1
       kubectl create ns ns2
    ```
    
2.  Create a file named `pvc.yaml` with the following content.
    
    **PVC parameters**
    
    **Parameter**
    
    **Description**
    
    **Default**
    
    `accessModes`
    
    Volume access mode. This field is required. Valid values:
    
    -   `ReadWriteMany`: Read-write by many nodes. Recommended for NAS.
        
    -   `ReadWriteOnce`: Read-write by a single node.
        
    -   `ReadOnlyMany`: Read-only by many nodes.
        
    
    `ReadWriteMany`
    
    `storageClassName`
    
    The name of the StorageClass to bind.
    
    \--
    
    `storage`
    
    Requested volume capacity. By default, this is a resource request and does not restrict actual storage. The maximum NAS capacity depends on the specification. See [General-purpose NAS](/help/en/nas/product-overview/general-purpose-nas-file-systems) and [Extreme NAS](/help/en/nas/product-overview/extreme-nas-file-systems).  
      
    When `allowVolumeExpansion` is set to `true` in the StorageClass, this value becomes a hard limit enforced by NAS directory quota.  
      
    
    \--
    
    ```
       kind: PersistentVolumeClaim
       apiVersion: v1
       metadata:
         name: nas-csi-pvc
         namespace: ns1
       spec:
         accessModes:
         - ReadWriteMany
         storageClassName: alicloud-nas-sharepath
         resources:
           requests:
             storage: 20Gi
       ---
       kind: PersistentVolumeClaim
       apiVersion: v1
       metadata:
         name: nas-csi-pvc
         namespace: ns2
       spec:
         accessModes:
         - ReadWriteMany
         storageClassName: alicloud-nas-sharepath
         resources:
           requests:
             storage: 20Gi
    ```
    
3.  Create the PVCs.
    
    ```
       kubectl create -f pvc.yaml
    ```
    
4.  Verify that PVs were automatically created and bound. Both PVs should show `Bound` status, each linked to a PVC in a different namespace:
    
    ```
       kubectl get pv
    ```
    
    ```
       NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                 STORAGECLASS             VOLUMEATTRIBUTESCLASS   REASON   AGE
       nas-0b448885-6226-4d22-8a5b-d0768c******   20Gi       RWX            Retain           Bound    ns1/nas-csi-pvc       alicloud-nas-sharepath   <unset>                          74s
       nas-bcd21c93-8219-4a11-986b-fd934a******   20Gi       RWX            Retain           Bound    ns2/nas-csi-pvc       alicloud-nas-sharepath   <unset>                          74s
    ```
    

#### Console

1.  Create namespaces.
    
    -   On the **Clusters** page, click the cluster name. In the left navigation pane, click **Namespaces and Quotas**.
        
    -   Click **Create**. Follow the prompts to create the `ns1` and `ns2` namespaces.
        
2.  In the left navigation pane, choose **Volumes** > **Persistent Volume Claims**.
    
3.  Create a PVC in the `ns1` namespace. Set **Namespace** to `ns1` and configure the PVC as described below.
    
    **Configuration item**
    
    **Description**
    
    **PVC Type**
    
    Select NAS.
    
    **Name**
    
    PVC name. Must be unique within the namespace.
    
    **Allocation Mode**
    
    Select **Use StorageClass**.
    
    **Existing Storage Class**
    
    Click **Select** and choose the StorageClass created earlier.
    
    **Capacity**
    
    Requested volume capacity. By default, this is a resource request and does not restrict actual storage.  
      
    When `allowVolumeExpansion` is set to `true` in the StorageClass, this value becomes a hard limit enforced by NAS directory quota.
    
    **Access Mode**
    
    Volume access mode. Valid values:
    
    -   `ReadWriteMany` (default): Read-write by many nodes.
        
    -   `ReadWriteOnce`: Read-write by a single node.
        
    -   `ReadOnlyMany`: Read-only by many nodes.
        
    
4.  Repeat the previous step to create a PVC in the `ns2` namespace.
    

After the PVCs are created, return to the **Persistent Volume Claims** page and confirm that the PVCs in `ns1` and `ns2` are bound to automatically created PVs.

### Step 3: Create applications and mount the volume

Create Deployments in both namespaces that mount their respective PVCs to share the NAS directory defined in the StorageClass.

#### kubectl

1.  Create two files named `nginx-ns1.yaml` and `nginx-ns2.yaml`. Each binds the PVC in its namespace.
    
    nginx-ns1.yaml
    
    ```
       apiVersion: apps/v1
       kind: Deployment
       metadata:
         name: nas-test
         # Deploy to the ns1 namespace.
         namespace: ns1
       spec:
         selector:
           matchLabels:
             app: nginx
         template:
           metadata:
             labels:
               app: nginx
           spec:
             containers:
             - name: nginx
               image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
               ports:
               - containerPort: 80
               volumeMounts:
                 - name: nas-pvc
                   mountPath: "/data"
             volumes:
               - name: nas-pvc
                 persistentVolumeClaim:
                   claimName: nas-csi-pvc
    ```
    
    nginx-ns2.yaml
    
    ```
       apiVersion: apps/v1
       kind: Deployment
       metadata:
         name: nas-test
         # Deploy to the ns2 namespace.
         namespace: ns2
       spec:
         selector:
           matchLabels:
             app: nginx
         template:
           metadata:
             labels:
               app: nginx
           spec:
             containers:
             - name: nginx
               image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
               ports:
               - containerPort: 80
               volumeMounts:
                 - name: nas-pvc
                   mountPath: "/data"
             volumes:
               - name: nas-pvc
                 persistentVolumeClaim:
                   claimName: nas-csi-pvc
    ```
    
2.  Create the two Deployments.
    
    ```
       kubectl create -f nginx-ns1.yaml -f nginx-ns2.yaml
    ```
    
3.  Check the pod status:
    
    ```
       kubectl get pod -A -l app=nginx
    ```
    
    ```
       NAMESPACE   NAME                         READY   STATUS    RESTARTS   AGE
       ns1         nas-test-b75d5b6bc-*****     1/1     Running   0          2m19s
       ns2         nas-test-b75d5b6bc-*****     1/1     Running   0          2m11s
    ```
    
4.  Confirm that the PVC is mounted. Replace `<namespace-name>` and `<pod-name>` with actual values. The two pods mount `ns1/nas-csi-pvc` and `ns2/nas-csi-pvc`, respectively. Both point to the same NAS directory.
    
    ```
       kubectl describe pod -n <namespace-name> <pod-name> | grep "ClaimName:"
    ```
    

#### Console

1.  On the [ACK Clusters](https://cs.console.alibabacloud.com) page, click the name of the target cluster. In the left navigation pane, choose **Workloads** > **Deployments**.
    
2.  Create a Deployment in the `ns1` namespace and mount the corresponding PVC.
    
    1.  Set **Namespace** to **ns1** and click **Create from Image**.
        
    2.  Complete the application creation as described below. Keep other parameters at their default values. For more information, see [Create a Deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment).
        
    
    **Configuration page**
    
    **Parameter**
    
    **Description**
    
    **Basic Information**
    
    **Replicas**
    
    Number of replicas for the Deployment.
    
    **Container**
    
    **Image Name**
    
    Image address used to deploy the application.
    
    **Required Resources**
    
    vCPU and memory resources required.
    
    **Volumes**
    
    Click **PVC**, then complete:
    
    -   **Mount Source**: Select the PVC created earlier.
        
    -   **Container Path**: Path in the container where the NAS file system is mounted (for example, `/data`).
        
    
3.  Repeat the previous step to create a Deployment in the `ns2` namespace and mount the corresponding PVC.
    

> Return to the **Stateless** page to check the Deployment status in both namespaces and confirm that pods are running with their PVCs mounted.

To verify that storage is shared and persistent, see [Verify shared and persistent storage](#1bf579086c5uu).

## Method 3: Mount using filesystem (not recommended)

In filesystem mode, each PV maps to an independent NAS file system instance and mount target. Use this mode only when you require strict isolation for performance or security, and can accept the higher cost.

> Each filesystem-mode PV creates one independent NAS file system and one mount target.

-   By default, NAS file systems and mount targets are retained when you delete a filesystem-mode PV. To delete them along with the PV, set both `reclaimPolicy: Delete` and `parameters.deleteVolume: "true"` in the StorageClass.
    
-   For ACK dedicated clusters, grant the required permissions to csi-provisioner. See the authorization steps below.
    

Authorization for ACK dedicated clusters

Dynamically creating and deleting NAS file systems and mount targets requires csi-provisioner to have specific permissions in ACK dedicated clusters.

The following is the minimum required RAM policy:

```
{
    "Action": [
        "nas:DescribeMountTargets",
        "nas:CreateMountTarget",
        "nas:DeleteFileSystem",
        "nas:DeleteMountTarget",
        "nas:CreateFileSystem"
    ],
    "Resource": [
        "*"
    ],
    "Effect": "Allow"
}
```

Grant these permissions by using one of the following methods:

-   Edit the custom policy attached to the Master RAM role of the ACK dedicated cluster and add the NAS-related permissions. For more information, see [Modify the content and description of a custom policy](/help/en/ram/modify-the-document-and-description-of-a-custom-policy).
    
-   Create a RAM user, attach the RAM policy, generate an AccessKey, and configure the AccessKey in the `env` variable of csi-provisioner:
    
    ```
      env:
      - name: CSI_ENDPOINT
        value: unix://socketDir/csi.sock
      - name: ACCESS_KEY_ID
        value: ""
      - name: ACCESS_KEY_SECRET
        value: ""
    ```
    

**Step 1: Create a StorageClass**

1.  Create a file named `alicloud-nas-fs.yaml` with the following content.
    
    **StorageClass parameters (filesystem)**
    
    **Parameter**
    
    **Description**
    
    **Default**
    
    `mountOptions`
    
    Mount options for NAS, including the NFS protocol version. The default version is NFS v3. To use a different version, set `vers=4.0`. For supported versions, see [NFS protocol](/help/en/nas/product-overview/nfsnfs).
    
    `vers=3`
    
    `parameters.volumeAs`
    
    Mount mode. Set to `filesystem`.
    
    \--
    
    `parameters.fileSystemType`
    
    NAS file system type.
    
    -   `standard`: General-purpose NAS.
        
    -   `extreme`: Extreme NAS.
        
    
    `standard`
    
    `parameters.storageType`
    
    Storage specification.
    
    -   General-purpose NAS: `Performance` (compute-optimized) or `Capacity` (storage-optimized).
        
    -   Extreme NAS: `standard` or `advance`.
        
    
    `Performance` (General-purpose), `standard` (Extreme)
    
    `parameters.regionId`
    
    Region where the NAS file system is created. Must match the cluster region.
    
    \--
    
    `parameters.zoneId`
    
    Zone where the NAS file system is created. NAS supports cross-zone mounting within the same VPC.
    
    -   For General-purpose NAS zones, see [Regions and zones](/help/en/nas/product-overview/extreme-nas-file-systems#7f8c2d4703wmi).
        
    -   For Extreme NAS zones, see [Regions and zones](/help/en/nas/product-overview/extreme-nas-file-systems#7f8c2d4703wmi).
        
    
    \--
    
    `parameters.vpcId`
    
    VPC for the mount target. Must match the cluster VPC.
    
    \--
    
    `parameters.vSwitchId`
    
    vSwitch ID for the mount target.
    
    \--
    
    `parameters.accessGroupName`
    
    Permission group for the mount target.
    
    `DEFAULT_VPC_GROUP_NAME`
    
    `parameters.deleteVolume`
    
    Whether to delete the NAS file system and mount target when the PVC is deleted. Both `deleteVolume: "true"` and `reclaimPolicy: Delete` must be set for automatic deletion.
    
    `false`
    
    `provisioner`
    
    The CSI driver. Set to `nasplugin.csi.alibabacloud.com`.
    
    \--
    
    `reclaimPolicy`
    
    Reclaim policy. The PV, NAS file system, and mount target are deleted only when `reclaimPolicy` is `Delete` and `deleteVolume` is `true`.
    
    **Important**
    
    Always specify this field explicitly. The default Kubernetes value is `Delete`, which may cause unintended data loss in filesystem mode. Set this to `Retain` in production environments.
    
    \--
    
    ```
       apiVersion: storage.k8s.io/v1
       kind: StorageClass
       metadata:
         name: alicloud-nas-fs
       mountOptions:
       - nolock,tcp,noresvport
       - vers=3
       parameters:
         # Mount mode: filesystem creates an independent NAS file system per PV.
         volumeAs: filesystem
         # NAS file system type: standard (General-purpose) or extreme.
         fileSystemType: standard
         # Storage specification: Performance or Capacity for General-purpose; standard or advance for Extreme.
         storageType: Performance
         # Region and zone must match the cluster.
         regionId: cn-beijing
         zoneId: cn-beijing-e
         # VPC and vSwitch for the mount target.
         vpcId: "vpc-2ze2fxn6popm8c2mzm****"
         vSwitchId: "vsw-2zwdg25a2b4y5juy****"
         # Permission group for mount target access control.
         accessGroupName: DEFAULT_VPC_GROUP_NAME
         # Whether to delete NAS file system and mount target when PVC is deleted.
         deleteVolume: "false"
       provisioner: nasplugin.csi.alibabacloud.com
       reclaimPolicy: Retain
    ```
    
2.  Create the StorageClass.
    
    ```
       kubectl create -f alicloud-nas-fs.yaml
    ```
    

**Step 2: Create a PVC**

1.  Create a file named `nas-pvc-fs.yaml` with the following content.
    
    **PVC parameters**
    
    **Parameter**
    
    **Description**
    
    **Default**
    
    `accessModes`
    
    Volume access mode. This field is required. Valid values:
    
    -   `ReadWriteMany`: Read-write by many nodes. Recommended for NAS.
        
    -   `ReadWriteOnce`: Read-write by a single node.
        
    -   `ReadOnlyMany`: Read-only by many nodes.
        
    
    `ReadWriteMany`
    
    `storageClassName`
    
    The name of the StorageClass to bind.
    
    \--
    
    `storage`
    
    Capacity of the NAS volume to create.
    
    **Note**
    
    The minimum capacity for Extreme NAS is 100 GiB. If your StorageClass specifies Extreme NAS, set `storage` to 100 GiB or more.
    
    \--
    
    ```
       kind: PersistentVolumeClaim
       apiVersion: v1
       metadata:
         name: nas-csi-pvc-fs
       spec:
         accessModes:
           - ReadWriteMany
         storageClassName: alicloud-nas-fs
         resources:
           requests:
             storage: 20Gi
    ```
    
2.  Create the PVC.
    
    ```
       kubectl create -f nas-pvc-fs.yaml
    ```
    

**Step 3: Create an application and mount the volume**

1.  Create a file named `nas-fs.yaml` with the following content.
    
    ```
       apiVersion: apps/v1
       kind: Deployment
       metadata:
         name: deployment-nas-fs
         labels:
           app: nginx-test
       spec:
         selector:
           matchLabels:
             app: nginx
         template:
           metadata:
             labels:
               app: nginx
           spec:
             containers:
             - name: nginx
               image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
               ports:
               - containerPort: 80
               volumeMounts:
                 - name: nas-pvc
                   mountPath: "/data"
             volumes:
               - name: nas-pvc
                 persistentVolumeClaim:
                   claimName: nas-csi-pvc-fs
    ```
    
2.  Create the Deployment.
    
    ```
       kubectl create -f nas-fs.yaml
    ```
    
3.  Verify that the PVC is bound:
    
    ```
       kubectl get pvc nas-csi-pvc-fs
    ```
    
    ```
       NAME             STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS      VOLUMEATTRIBUTESCLASS   AGE
       nas-csi-pvc-fs   Bound    nas-8338540d-34a1-4796-89cf-be2a7*******   20Gi       RWX            alicloud-nas-fs   <unset>                 13m
    ```
    
4.  Check the NAS file system ID in the PV. Replace the PV name with the actual value from the previous output. The output shows the NAS file system ID, which you can verify on the **File Systems** page in the [NAS console](https://nas.console.alibabacloud.com/).
    
    ```
       kubectl describe pv nas-8338540d-34a1-4796-89cf-be2a7******* | grep "fileSystemId"
    ```
    

## Verify shared and persistent storage

After you deploy your application, verify that the volume works as expected. The following examples use subpath mode with the `nas-test-1` and `nas-test-2` Deployments.

### Verify shared storage

Create a file in one pod and check for it in another pod.

1.  Get the pod names:
    
    ```
       kubectl get pod | grep nas-test
    ```
    
    ```
       nas-test-1-b75d5b6bc-*****           1/1     Running   0          50s
       nas-test-2-b75d5b6bc-*****           1/1     Running   0          60s
    ```
    
2.  Create a file in the first pod. Replace the pod name with the actual value.
    
    ```
       kubectl exec nas-test-1-b75d5b6bc-***** -- touch /data/test.txt
    ```
    
3.  Check for the file in the second pod. The file should appear in both pods, which confirms shared storage.
    
    ```
       kubectl exec nas-test-2-b75d5b6bc-***** -- ls /data
    ```
    
    ```
       test.txt
    ```
    

### Verify persistent storage

Restart the Deployment and check for the file in the new pod.

1.  Restart the Deployment to trigger pod recreation.
    
    ```
       kubectl rollout restart deploy nas-test-1
    ```
    
2.  Wait for the new pod to reach the Running state:
    
    ```
       kubectl get pod | grep nas-test
    ```
    
    ```
       nas-test-1-5bb845b795-*****           1/1     Running   0          115m
       nas-test-2-5b6bccb75d-*****           1/1     Running   0          103m
    ```
    
3.  Check for the previously created file in the new pod. Replace the pod name with the actual value. The file should persist after the pod restart, which confirms persistent storage.
    
    ```
       kubectl exec nas-test-1-5bb845b795-***** -- ls /data
    ```
    
    ```
       test.txt
    ```
    

## Recommendations for production

### Security and data protection

-   **Use the Retain reclaim policy.** Set `reclaimPolicy` to `Retain` in your StorageClass to prevent accidental data loss when a PVC is deleted.
    
-   **Restrict access with NAS permission groups.** NAS uses [permission groups](/help/en/nas/user-guide/manage-a-permission-group) to manage network access. Follow the principle of least privilege by adding only the private IP addresses of cluster nodes or their vSwitch CIDR block. Avoid granting overly broad permissions such as `0.0.0.0/0`.
    

### Performance and cost

-   **Select a suitable NAS type.** See [Select a file system type](/help/en/nas/product-overview/how-do-i-select-file-systems) to choose a NAS type that matches the IOPS and throughput requirements of your application.
    
-   **Optimize mount options.** Adjust NFS mount parameters based on your workload characteristics. Using `vers=4.0` or `vers=4.1` may improve performance and file locking in some scenarios. For large-scale reads and writes, test different `rsize` and `wsize` values to optimize throughput.
    

### Operations and reliability

-   **Configure liveness probes.** Add liveness probes to your pods to check whether the mount target is reachable. If a mount fails, ACK can automatically restart the pod to trigger a remount.
    
-   **Enable storage monitoring.** Use [container storage monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-plugin-to-monitor-storage-resources-at-the-node-side) to set up alerts and detect volume exceptions or performance bottlenecks.
    

## Clean up resources

To avoid unexpected charges, release resources in the following order when you no longer need the NAS volumes:

### Step 1: Delete workloads

Delete all Deployments, StatefulSets, and other workloads that use the NAS volume. This unmounts the volume from all pods.

```
kubectl delete deployment <your-deployment-name>
```

### Step 2: Delete PVCs

Delete the PVCs associated with your workloads. The behavior of the bound PV and backend NAS depends on the `reclaimPolicy` defined in the StorageClass.

```
kubectl delete pvc <your-pvc-name>
```

### Step 3: Delete PVs

Delete a PV when its status is `Available` or `Released`. This removes only the PV definition from the cluster—it does not delete data on the backend NAS file system.

```
kubectl delete pv <your-pv-name>
```

### Step 4: Delete the backend NAS file system (optional)

-   **subpath and sharepath modes**: See [Delete a file system](/help/en/nas/user-guide/delete-a-file-system). This operation permanently deletes all data on the NAS file system and cannot be undone. Confirm that no workloads depend on the file system before proceeding.
    
-   **filesystem mode**: If the backend NAS file system was not automatically deleted when you deleted the PVC, see [Delete a file system](/help/en/nas/user-guide/delete-a-file-system) to locate and delete it manually.
    

### Cleanup behavior by mode

The following table summarizes what happens to backend storage when you delete a PVC, based on mount mode and reclaim policy.

**Mount mode**

**Reclaim policy**

**Key parameter**

**PV behavior**

**Backend NAS behavior**

subpath

`Retain`

\--

Enters `Released` state.

Subdirectory and data retained. Delete manually.

subpath

`Delete`

`archiveOnDelete: "true"`

Automatically deleted.

Subdirectory archived as `archived-{pvName}.{timestamp}`.

subpath

`Delete`

`archiveOnDelete: "false"`

Automatically deleted.

Subdirectory and data permanently deleted.

sharepath

`Retain` (only supported)

\--

Enters `Released` state.

Shared directory and data retained.

filesystem

`Retain`

\--

Enters `Released` state.

NAS file system and mount target retained.

filesystem

`Delete`

`deleteVolume: "false"`

Automatically deleted.

NAS file system and mount target retained. Delete manually.

filesystem

`Delete`

`deleteVolume: "true"`

Automatically deleted.

NAS file system and mount target automatically deleted.

> In ACK Serverless clusters, even with `reclaimPolicy: Delete`, the backend NAS subdirectory and data are not deleted or archived due to permission restrictions. Only the PV object is deleted.

## References

-   Troubleshooting
    
    -   [Troubleshoot storage exceptions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-troubleshooting-1)
        
    -   [NAS storage volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes)
        
    -   [File read and write access issues](/help/en/nas/user-guide/cross-mount-compatibility-faq)
        
-   Advanced features
    
    -   [Manage NAS file systems with CNFS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-nas-file-systems)—Manage NAS file systems independently for improved performance and QoS control.
        
    -   [Set directory quotas for NAS dynamically provisioned volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-nas-volume)—Enforce capacity limits on subpath-mode volumes.
