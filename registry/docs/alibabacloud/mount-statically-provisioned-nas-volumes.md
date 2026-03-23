Alibaba Cloud File Storage NAS (Network Attached Storage) is a distributed file system that supports shared access, elastic scaling, high reliability, and high performance. It is ideal for use cases such as big data analytics, data sharing, web applications, and log storage. Using the Container Storage Interface (CSI) plugin, you can create Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) from an existing NAS file system and mount them into Kubernetes workloads. This enables persistent and shared data storage across containers and pods.

## Prerequisites

-   The CSI plug-in is installed in the cluster. If an upgrade is required, refer to [Upgrade csi-plugin and csi-provisioner](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
    
    **Note**
    
    If your cluster uses FlexVolume, upgrade to CSI, because FlexVolume is deprecated. For details, see [Upgrade from FlexVolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-from-flexvolume-to-csi/). To verify your storage component type, go to the **Add-ons** page, and click the **Storage** tab.
    
-   Ensure your existing NAS file system meets the following requirements. Otherwise, [create a file system](/help/en/nas/user-guide/create-a-file-system#task-27530-zh) or [mount a dynamically provisioned NAS volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-a-dynamically-provisioned-nas-volume).
    
    -   Protocol type:
        
        -   Must be Network File System (NFS).
            
        -   ACK does not support mounting NAS file systems that use the Server Message Block (SMB) protocol.
            
    -   Mount target:
        
        -   Must be in the same VPC as the cluster nodes.
            
        -   Its **Status** must be **Available**.
            
        
        For instructions on creating a mount target, see [Manage mount targets](/help/en/nas/user-guide/manage-mount-targets#task-27531-zh).
        

-   VPC restrictions:
    
    -   NAS can only be mounted to pods that are running within the same VPC.
        
    -   Cross-VPC mounting is not supported, even if VPC peering or Cloud Enterprise Network (CEN) is configured.
        
        This ensures low-latency, secure connectivity between the compute nodes and the storage system.
        
-   Within the same VPC, NAS supports cross-AZ mounting.
    

**Note**

To encrypt data in a NAS volume, configure encryption when creating the NAS file system.

## Usage notes

-   NAS is a shared storage service. A single NAS volume can be mounted to multiple pods. If multiple pods write data simultaneously, applications must independently ensure data consistency.
    
    For more information about the limits on concurrent writes to NAS, see [How do I prevent exceptions that may occur when multiple processes or clients concurrently write data to a log file?](/help/en/nas/user-guide/cross-mount-compatibility-faq#section-xid-0j6-nr4) and [How do I resolve the latency in writing data to an NFS file system?](/help/en/nas/user-guide/cross-mount-compatibility-faq#section-bhg-7ne-fzs)
    
-   If your application template includes the `securityContext.fsgroup` parameter, kubelet performs `chmod` or `chown` operations after mounting, which can increase mount time.
    
    Avoid this setting to reduce latency. For more details, see [Extended mount times for NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#section-7pu-jd2-a39).
    
-   Do not delete the NAS mount target after mounting. Doing so may cause the system to become unresponsive.
    

## **Mount a statically provisioned NAS volume (using kubectl)**

### **Step 1: Create a** **PV**

1.  Modify the following YAML template and save it as pv-nas.yaml:
    
    ```
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: pv-nas
      labels:
        alicloud-pvname: pv-nas
    spec:
      capacity:
        storage: 5Gi
      accessModes:
        - ReadWriteMany
      csi:
        driver: nasplugin.csi.alibabacloud.com
        volumeHandle: pv-nas   # Enter the name of the PV.
        volumeAttributes:
          server: "0c47****-mpk25.cn-shenzhen.nas.aliyuncs.com"  # The mount target address. The VPC to which the mount target belongs must be the same as the VPC to which the cluster belongs.
          path: "/csi"  # Specify the subdirectory of the NAS file system.
      mountOptions:
      - nolock,tcp,noresvport
      - vers=3
    ```
    
    **Parameter**
    
    **Description**
    
    `name`
    
    Name of the PV.
    
    `labels`
    
    Labels for the PV.
    
    `storage`
    
    PV capacity.
    
    **Important**
    
    The actual available capacity is determined by the NAS file system specifications, not this value. See [General-purpose NAS](/help/en/nas/product-overview/general-purpose-nas-file-systems) and [Extreme NAS](/help/en/nas/product-overview/extreme-nas-file-systems) for details.
    
    `accessModes`
    
    Access mode. Default: `ReadWriteMany`. Also supports `ReadWriteOnce` and `ReadOnlyMany`.
    
    `driver`
    
    Must be `nasplugin.csi.alibabacloud.com`. This indicates that the CSI plug-in provided by Alibaba Cloud is used.
    
    `volumeHandle`
    
    Unique identifier for the PV. Must match the PV name. Each PV must have a unique value.
    
    `server`
    
    NAS mount target address. The mount target must be in the same VPC as the cluster. See [Manage mount targets](/help/en/nas/user-guide/manage-mount-targets#section-sjv-ozt-711).
    
    `path`
    
    Subdirectory in the NAS file system to mount.
    
    -   If not set, defaults to root (`/`for General-purpose NAS, `/share` for Extreme NAS).
        
    -   If the directory doesn't exist, it will be created.
        
    
    **Note**
    
    For Extreme NAS, paths must start with `/share`, such as `/share/data`.
    
    `mountOptions`
    
    NAS mount parameter, including NFS protocol version. We recommend using NFS v3 protocol, because Extreme NAS only supports NFS v3. For more information about the NFS protocol, see [NFS protocol](/help/en/nas/product-overview/nfsnfs).
    
2.  Create the PV:
    
    ```
    kubectl create -f pv-nas.yaml
    ```
    
3.  View the PV:
    
    ```
    kubectl get pv
    ```
    
    Expected output:
    
    ```
    NAME     CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM    STORAGECLASS     VOLUMEATTRIBUTESCLASS   REASON   AGE
    pv-nas   5Gi        RWX            Retain           Available                             <unset>                          25s
    ```
    

### **Step 2: Create a PVC**

1.  Save the following YAML template as pvc-nas.yaml:
    
    ```
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: pvc-nas
    spec:
      accessModes:
        - ReadWriteMany
      resources:
        requests:
          storage: 5Gi
      selector:
        matchLabels:
          alicloud-pvname: pv-nas
    ```
    
    **Parameter**
    
    **Description**
    
    `name`
    
    Name of the PVC.
    
    `accessModes`
    
    Must match the PV’s access mode. Default: `ReadWriteMany`. You can also set the value to `ReadWriteOnce` or `ReadOnlyMany`.
    
    `storage`
    
    Requested storage capacity. Cannot exceed the PV's capacity.
    
    **Important**
    
    The actual available capacity is determined by the NAS file system specifications, not this value. See [General-purpose NAS](/help/en/nas/product-overview/general-purpose-nas-file-systems) and [Extreme NAS](/help/en/nas/product-overview/extreme-nas-file-systems) for details.
    
    `matchLabels`
    
    Labels used to bind the PVC to the PV.
    
2.  Create the PVC:
    
    ```
    kubectl create -f pvc-nas.yaml
    ```
    
3.  View the PVC:
    
    ```
    kubectl get pvc
    ```
    
    Expected output:
    
    ```
    NAME       STATUS   VOLUME    CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
    pvc-nas    Bound    pv-nas    5Gi        RWX                           <unset>                 5s
    ```
    

### **Step 3: Create an application and mount the NAS volume**

1.  Save the following YAML as nas.yaml:
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nas-test
      labels:
        app: nginx
    spec:
      replicas: 2
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
              - name: pvc-nas
                mountPath: "/data"
          volumes:
            - name: pvc-nas
              persistentVolumeClaim:
                claimName: pvc-nas
    ```
    
    **Parameter**
    
    **Description**
    
    `mountPath`
    
    Container path where the NAS volume is mounted.
    
    `claimName`
    
    Name of the PVC to bind.
    
2.  Deploy the application:
    
    ```
    kubectl create -f nas.yaml
    ```
    
3.  Check pod status:
    
    ```
    kubectl get pod -l app=nginx
    ```
    
    Expected output:
    
    ```
    NAME                  READY   STATUS    RESTARTS   AGE
    nas-test-****-***a    1/1     Running   0          32s
    nas-test-****-***b    1/1     Running   0          32s
    ```
    

## **Mount a statically provisioned NAS volume (using console)**

### **Step 1: Create a** **PV**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left navigation pane, choose **Volumes** > **Persistent Volumes**.
    
3.  On the **Persistent Volumes** page, click **Create**.
    
4.  In the dialog box that appears, configure the parameters.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **PV Type**
    
    Select **NAS**.
    
    NAS
    
    **Volume Name**
    
    The name of the volume. The name must be unique in the cluster.
    
    pv-nas
    
    **Capacity**
    
    The capacity of the PV.
    
    **Important**
    
    The actual available capacity is determined by the NAS file system specifications, not this value. See [General-purpose NAS](/help/en/nas/product-overview/general-purpose-nas-file-systems) and [Extreme NAS](/help/en/nas/product-overview/extreme-nas-file-systems) for details.
    
    5Gi
    
    **Access Mode**
    
    Choose **ReadWriteMany** or **ReadWriteOnce**.
    
    ReadWriteMany
    
    **Enable CNFS**
    
    Specify whether to enable Container Network File System (CNFS). [Using CNFS to manage NAS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cnfs-overview/) can improve the performance and Quality of Service (QoS) control of NAS.
    
    This guide uses direct NAS mounting. For more information about how to configure an existing NAS file system with CNFS, see [Use CNFS to manage NAS file systems (recommended)](/help/en/doc-detail/473920.html).
    
    Disable
    
    **Mount Target Domain Name**
    
    Required when CNFS is disabled.
    
    Select **Select Mount Target** or **Custom** to configure the NAS file system that you want to mount. For details on how to view the mount target address, see [Manage mount targets](/help/en/nas/user-guide/manage-mount-targets#section-sjv-ozt-711).
    
    0c47\*\*\*\*-mpk25.cn-shenzhen.nas.aliyuncs.co
    
    **Advanced Options (Optional)**
    
    **Mount Path**
    
    Subdirectory in the NAS file system to mount.
    
    -   If not set, defaults to root (`/`for General-purpose NAS, `/share` for Extreme NAS).
        
    -   If the directory doesn't exist, it will be created.
        
    
    **Note**
    
    For Extreme NAS, paths must start with `/share`, such as `/share/data`.
    
    /data
    
    **Reclaim Policy**
    
    The default value is **Retain**. This indicates that when a PVC is deleted, the related PV and NAS file system are retained and can only be manually deleted.
    
    **Note**
    
    **Delete** must be used with `archiveOnDelete`. Because static PVs do not support `archiveOnDelete`, when you select **Delete** here, the PV and NAS file system are not actually deleted when the PVC is deleted. If you want to configure `archiveOnDelete`, [use a dynamically provisioned NAS volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-a-dynamically-provisioned-nas-volume).
    
    Retain
    
    **Mount Options**
    
    NAS mount parameter, including NFS protocol version. We recommend using NFS v3 protocol, because Extreme NAS only supports NFS v3. For more information about the NFS protocol, see [NFS protocol](/help/en/nas/product-overview/nfsnfs).
    
    -   nolock,tcp,noresvport
        
    -   vers=3
        
    
    **Label**
    
    Optional labels for the PV.
    
    pv-nas
    
    Click **Create**. The PV appears on the **Persistent Volumes** page.
    

### Step 2: **Create a** PVC

1.  In the left-side navigation pane of the details page, choose **Volumes** > **Persistent Volume Claims**.
    
2.  On the **Persistent Volume Claims** page, click **Create**.
    
3.  In the dialog box that appears, configure the parameters and click **Create**.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Storage Claim Type**
    
    Select **NAS**.
    
    NAS
    
    **Name**
    
    The name of the PVC. The name must be unique in the cluster.
    
    pvc-nas
    
    **Allocation Mode**
    
    Select **Existing Volumes**.
    
    **Note**
    
    If no PV is created, you can set the **Allocation Mode** parameter to **Create Volume** and configure the required parameters to create a PV.
    
    Select Existing Volumes
    
    **Existing Storage Volume**
    
    Click **Select Existing Volume**, find the PV that you want to use, and click **Select** in the **Actions** column.
    
    pv-nas
    
    **Capacity**
    
    The capacity of the PV. The claimed capacity cannot exceed the total capacity of the PV.
    
    **Important**
    
    The actual available capacity is determined by the NAS file system specifications, not this value. See [General-purpose NAS](/help/en/nas/product-overview/general-purpose-nas-file-systems) and [Extreme NAS](/help/en/nas/product-overview/extreme-nas-file-systems) for details.
    
    5
    
    **Access Mode**
    
    The default value is **ReadWriteMany**. You can also set the value to **ReadWriteOnce** or **ReadOnlyMany**.
    
    **ReadWriteMany**
    

### **Step 3: Create an application and mount the NAS volume**

1.  In the navigation pane on the left of the cluster details page, go to **Workloads** > **Deployments**.
    
2.  On the **Deployments** page, click **Create From Image**.
    
3.  Configure the parameters of the application. After doing so, click **Create**.
    
    The following table describes the key parameters. Use default settings for other parameters. For more information, see [Create a stateless application using a Deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment).
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Basic Information**
    
    **Name**
    
    Enter a custom name for the Deployment. The name must meet the format requirements displayed in the console.
    
    nas-test
    
    **Replicas**
    
    Number of pod replicas.
    
    2
    
    **Container**
    
    **Image Name**
    
    Container image.
    
    anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
    
    **Required Resources**
    
    CPU and memory.
    
    0.25 Core, 512 MiB
    
    **Volume**
    
    Click **Add PVC** and configure the parameters.
    
    -   **Mount Source**: Select the PVC that you created.
        
    -   **Container Path**: Specify the container path to which you want to mount the NAS file system.
        
    
    -   Mount Source: pvc-nas
        
    -   Container Path: /data
        
    
4.  View the application deployment status.
    
    1.  On the **Deployments** page, click the name of the application.
        
    2.  On the **Pods** tab, confirm pods are in the **Running** state.
        

## **Verify the shared storage and persistent storage features of NAS**

The Deployment created in the preceding example provisions two pods and mounts a NAS file system to the pods. You can use the following methods to verify this:

-   Create a file in one pod and view the file from the other pod to verify shared storage.
    
-   Recreate the Deployment. Then, check whether data stored in the file system exists in the newly created pod to verify persistent storage.
    

1.  View the pod information.
    
    ```
    kubectl get pod | grep nas-test
    ```
    
    Sample result:
    
    ```
    nas-test-*****a   1/1     Running   0          40s
    nas-test-*****b   1/1     Running   0          40s
    ```
    
2.  Verify shared storage.
    
    1.  Create a file in a pod.
        
        In this example, the `nas-test-*****a` pod is used:
        
        ```
        kubectl exec nas-test-*****a -- touch /data/test.txt
        ```
        
    2.  View the file from the other pod.
        
        In this example, the `nas-test-*****b` pod is used:
        
        ```
        kubectl exec nas-test-*****b -- ls /data
        ```
        
        Expected output shows that the newly created file `test.txt` is shared:
        
        ```
        test.txt
        ```
        
3.  Verify persistent storage.
    
    1.  Recreate the Deployment.
        
        ```
        kubectl rollout restart deploy nas-test
        ```
        
    2.  Wait until the pods are recreated.
        
        ```
        kubectl get pod | grep nas-test
        ```
        
        Sample result:
        
        ```
        nas-test-*****c   1/1     Running   0          67s
        nas-test-*****d   1/1     Running   0          49s
        ```
        
    3.  Log on to a recreated pod and check whether the file still exists in the file system.
        
        In this example, the `nas-test-*****c` pod is used:
        
        ```
        kubectl exec nas-test-*****c -- ls /data
        ```
        
        The following output shows that the file still exists in the NAS file system and can be accessed from the mount directory in the recreated pod.
        
        ```
        test.txt
        ```
        

## **FAQs**

If you encounter issues when mounting or using NAS volumes, refer to:

-   [Troubleshoot storage issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-troubleshooting-1)
    
-   [NAS volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes)
    
-   [FAQ about read and write access to files](/help/en/nas/user-guide/cross-mount-compatibility-faq)
    

## **References**

CNFS enables independent management of NAS file systems, improving performance and QoS control. For best practices, see [Use CNFS to manage NAS file systems (recommended)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-nas-file-systems).
