Edge Node Service (ENS) disks are used on ENS nodes in an ACK Edge cluster. You can create statically and dynamically provisioned ENS disk volumes by using the Container Storage Interface (CSI) plug-in in ACK Edge clusters. This topic describes how to mount statically and dynamically provisioned ENS disk volumes created by using the CSI plug-in.

## Prerequisites

-   An ACK Edge cluster is created. For more information, see [Create an ACK Edge cluster](/help/en/ack/ack-edge/user-guide/create-an-ack-edge-cluster-1#task-skz-qwk-qfb).
    
-   An edge node is created. For more information, see [Create an instance](/help/en/ens/create-an-instance). The edge node is added to the ACK Edge cluster. For more information, see [Add an edge node](/help/en/ack/ack-edge/user-guide/add-an-edge-node#section-yai-3e9-2od).
    
-   The csi-ens-plugin and csi-ens-provisioner components are installed. For more information, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).
    
-   A kubectl client is connected to the cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136).
    
-   If you use a statically provisioned disk volume, make sure that you created a pay-as-you-go ENS disk and recorded the disk ID as `d-wz92s6d95go6ki9x****`.
    

## Usage notes

-   During application deployment, we recommend that you use a StorageClass to automatically create a persistent volume (PV) to purchase disks. If you purchased a disk, you can use [statically provisioned disk volumes](#title-i4o-3dm-2hh).
    
-   When you purchase a disk, the disk size that you specify cannot exceed the corresponding capacity range for individual disks. For more information, see [Disk types](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/disk-volume-overview-3/#section-fm9-xv2-0ny).
    
-   When the system recreates a pod, the original disk mounted to the pod is remounted. If the system fails to schedule the pod to the original zone during the recreation, the pod remains in the Pending state.
    
-   Dynamic provisioning supports only pay-as-you-go disks. For more information about the billable items of disks, see [Billing of block storage devices](/help/en/ecs/block-storage-devices). For more information about the pricing of disks, visit the [Elastic Compute Service product page](https://www.alibabacloud.com/product/ecs#pricing).
    
-   ENS disks provided by the Alibaba Cloud storage team cannot be shared. A disk can be mounted to only one pod.
    
-   In an ACK Edge cluster, ENS disks can be mounted only to ENS nodes that reside in the same region as the ENS disks.
    
-   You cannot reclaim or delete ENS disks. You can perform related operations in the Edge Node Service console.
    

## Use a dynamically provisioned ENS disk volume

### **Step 1: Create a StorageClass**

For clusters in different regions, you can use one of the following methods to create a StorageClass:

**Method 1: Create a StorageClass in WaitForFirstConsumer mode**

The WaitForFirstConsumer mode can resolve the issue that multiple regions are available in an ACK Edge cluster. In the following example, a StorageClass is created by using a storage-class-csi-topology.yaml file.

1.  Create a file named storage-class-topology.yaml and copy the following content to the file:
    
    ```
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: alicloud-ens-disk-available
    provisioner: ensplugin.csi.alibabacloud.com
    parameters:
      type: available
      fsType: ext4
    volumeBindingMode: WaitForFirstConsumer
    reclaimPolicy: Retain
    allowVolumeExpansion: false
    ```
    
    **Parameter**
    
    **Description**
    
    name
    
    The name of the StorageClass.
    
    provisioner
    
    Set the value to `ensplugin.csi.alibabacloud.com`. Use the ENS disk provisioner plug-in to create the StorageClass.
    
    type
    
    The type of the disk.
    
    regionId
    
    Optional. The region where the disk is automatically created.
    
    reclaimPolicy
    
    The disk reclaim policy. Only `Retain` is supported. When you delete a persistent volume claim (PVC), the PV and disk data are retained and must be manually deleted.
    
    volumeBindingMode
    
    The binding mode of the disk. Default value: `Immediate`. You can also set this parameter to `WaitForFirstConsumer`.
    
    -   `Immediate`: creates a disk when the PVC that uses the StorageClass is created. This way, a disk is created and a PV is provisioned before you create a pod that uses the disk.
        
    -   `WaitForFirstConsumer`: delays the binding and provisioning of a PV until a pod that uses the PVC is created. After the pod is scheduled to a node, a disk is created in the zone where the node is deployed and provisioned as the PV.
        
    
2.  Run the following command to create a StorageClass:
    
    ```
    kubectl apply -f storage-class-topology.yaml
    ```
    
3.  View the created StorageClass.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Volumes** > **StorageClasses**.
        
    
    On the **StorageClasses** page, you can view the created StorageClass.
    

**Method 2: Create a StorageClass by creating a disk and then creating a pod**

1.  Create a file named storage-class-csi.yaml and copy the following content to the file:
    
    ```
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: alicloud-ens-disk-available
    provisioner: ensplugin.csi.alibabacloud.com
    parameters:
      type: available
      regionId: xxx
    reclaimPolicy: Retain
    allowVolumeExpansion: false
    volumeBindingMode: Immediate
    ```
    
2.  Run the following command to create a StorageClass:
    
    ```
    kubectl apply -f storage-class-csi.yaml
    ```
    
3.  View the created StorageClass.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Volumes** > **StorageClasses**.
        
    
    On the **StorageClasses** page, you can view the created StorageClass.
    

### **Step 2: Create a PVC**

1.  Create a file named pvc-ssd.yaml and copy the following content to the file:
    
    ```
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: disk-pvc
    spec:
      accessModes:
      - ReadWriteOnce
      volumeMode: Filesystem
      resources:
        requests:
          storage: 25Gi
      storageClassName: alicloud-ens-disk-available
    ```
    
2.  Run the following command to create a PVC:
    
    ```
    kubectl create -f pvc-ssd.yaml
    ```
    
3.  View the created PVC.
    
    In the left-side navigation pane of the details page, choose **Volumes** > **Persistent Volume Claims**. On the **Persistent Volume Claims** page, you can view the created PVC.
    

### **Step 3: Create an application**

1.  Create a file named pvc-dynamic.yaml and copy the following content to the file:
    
    Use the following template to create an application named nginx-dynamic and mount the PVC to the application.
    
    ```
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: nginx-dynamic
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
            image: nginx
            ports:
            - containerPort: 80
              name: web
            volumeMounts:
            - name: pvc-disk
              mountPath: /data
          volumes:
            - name: pvc-disk
              persistentVolumeClaim:
                claimName: disk-pvc
    ```
    
    **Parameter**
    
    **Description**
    
    mountPath
    
    The path to which the disk is mounted.
    
    claimName
    
    The name of the PVC that is mounted to the application.
    
2.  Run the following command to create the application and mount the PVC to the application:
    
    ```
    kubectl create -f pvc-dynamic.yaml
    ```
    
3.  View the created application.
    
    In the left-side navigation pane of the details page, choose **Workloads** > **StatefulSets**. On the **StatefulSets** page, you can find the created application.
    

## Use a statically provisioned ENS disk volume

### **Step 1: Create a PV**

1.  Create a file named pv-static.yaml and copy the following content to the file:
    
    ```
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: csi-pv
      labels:
        alicloud-pvname: static-disk-pv
    spec:
      capacity:
        storage: 25Gi
      accessModes:
        - ReadWriteOnce
      persistentVolumeReclaimPolicy: Retain
      csi:
        driver: ensplugin.csi.alibabacloud.com
        volumeHandle: "<your-disk-id>"
      nodeAffinity:
        required:
          nodeSelectorTerms:
          - matchExpressions:
            - key: topology.ensplugin.csi.alibabacloud.com/region
              operator: In
              values:
              - "<your-node-region-id>"     # The region ID of the ENS node. To view the region ID of an ENS node, view the topology.ensplugin.csi.alibabacloud.com/region parameter in the label of the ENS node.
    ```
    
    **Parameter**
    
    **Description**
    
    name
    
    The name of the PV.
    
    labels
    
    The labels that you want to add to the PV.
    
    storage
    
    The available storage of the cloud disk.
    
    accessModes
    
    The access mode of the PV.
    
    persistentVolumeReclaimPolicy
    
    The reclaim policy of the PV.
    
    driver
    
    The type of driver. The value `ensplugin.csi.alibabacloud.com` specifies that the ENS disk in the CSI plug-in is used.
    
    volumeHandle
    
    The ID of the cloud disk that is associated with the PV.
    
    nodeAffinity
    
    The information about the zone to which the PV and PVC belong.
    
    You can configure this parameter to specify the zone to which the pod that uses the PV and PVC is scheduled.
    
2.  Run the following command to create the PV:
    
    ```
    kubectl create -f pv-static.yaml
    ```
    
3.  View the PV that you created.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Volumes** > **Persistent Volumes**.
        
    
    On the **Persistent Volumes** page, you can view the created PV.
    

### **Step 2: Create a PVC**

1.  Create a file named pvc-static.yaml and copy the following content to the file:
    
    ```
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: csi-pvc
    spec:
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: 25Gi
      selector:
        matchLabels:
          alicloud-pvname: static-disk-pv
    ```
    
    **Parameter**
    
    **Description**
    
    name
    
    The name of the PVC.
    
    accessModes
    
    The access mode of the PVC.
    
    storage
    
    The capacity claimed by the PVC. The claimed capacity cannot exceed the capacity of the PV that is bound to the PVC.
    
    matchLabels
    
    The labels that are used to select and bind a PV to the PVC. The labels must be the same as those of the PV to be bound to the PVC.
    
2.  Run the following command to create a PVC:
    
    ```
    kubectl create -f pvc-static.yaml
    ```
    
3.  View the created PVC.
    
    In the left-side navigation pane of the details page, choose **Volumes** > **Persistent Volume Claims**. On the **Persistent Volume Claims** page, you can view the created PVC.
    

### **Step 3: Create an application**

In this example, a web application is created and mounted with the PVC you created.

1.  Create a file named web.yaml and copy the following content to the file:
    
    ```
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: web
    spec:
      selector:
        matchLabels:
          app: nginx
      serviceName: "nginx"
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx
            ports:
            - containerPort: 80
              name: web
            volumeMounts:
            - name: pvc-disk
              mountPath: /data
          volumes:
            - name: pvc-disk
              persistentVolumeClaim:
                claimName: csi-pvc
    ```
    
    **Parameter**
    
    **Description**
    
    mountPath
    
    The path to which the disk is mounted.
    
    claimName
    
    The name of the PVC that is mounted to the application.
    
2.  Run the following command to create an application that is mounted with a statically provisioned ENS disk volume by using the PVC:
    
    ```
    kubectl apply -f web.yaml
    ```
    
3.  In the left-side navigation pane of the details page, choose **Workloads** > **StatefulSets**.
    
    On the **StatefulSets** page, you can view the web application and the application can be started as expected. This indicates that the ENS disk is mounted.
