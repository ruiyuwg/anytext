You can create volume snapshots from disks to back up application data and then restore the application data from the volume snapshots. If multiple disks are used by your Container Service for Kubernetes (ACK) cluster, you can use the VolumeSnapshot resource to create a volume snapshot from each disk. However, the snapshots may not be created at the same time, which may cause data inconsistency among the snapshots. In this case, you can create group snapshots from the disks to manage and back up data on the disks in a unified manner. This helps you reduce the risks of data inconsistency caused by asynchronous volume creation.

## Prerequisites

-   An ACK managed cluster that runs Kubernetes 1.28 or later is created. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).
    
-   The Container Storage Interface (CSI) plug-in is installed in the cluster and the version of the CSI plug-in is 1.31.4 or later. For more information about how to update csi-plugin and csi-provisioner, see [Update csi-plugin and csi-provisioner](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
    
    **Note**
    
    If the cluster uses FlexVolume, which has been deprecated in ACK, upgrade from FlexVolume to CSI and then create group snapshots. For more information, see [Upgrade from FlexVolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-from-flexvolume-to-csi/). Go to the cluster details page in the ACK console. In the left-side navigation pane, choose **Operations** > **Add-ons**. Then, click the **Storage** tab to check the type of volume plug-in that is installed in the cluster.
    
-   The Elastic Compute Service (ECS) Snapshot service is activated. You can activate the ECS Snapshot service free of charge. You are charged only for the snapshots that you create. For more information, see [Activate ECS Snapshot](/help/en/ecs/user-guide/activate-ecs-snapshot#task-ojj-1tr-lgb).
    
-   [A kubectl client is connected to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    

## Billing

Group snapshots are implemented based on the [snapshot-consistent group](/help/en/ecs/user-guide/snapshot-consistency-group-overview/) feature of ECS. Snapshot-consistent groups are free of charge but snapshots in snapshot-consistent groups are billed based on the amount of storage space consumed by the snapshots. For more information, see [Snapshot billing](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb).

## **Limits**

The same limits apply to group snapshots and ECS snapshots. For more information, see [Limits](/help/en/ecs/user-guide/create-a-snapshot-consistent-group#a383a34054gtz).

## Usage notes

ACK provides the following CustomResourceDefinitions (CRDs) that you can use to create custom resources to manage group snapshots.

**CRD**

**Description**

VolumeGroupSnapshotClass

Specifies the parameters used to create a VolumeGroupSnapshot, such as the deletion policy.

VolumeGroupSnapshot

A request for a volume group snapshot. A VolumeGroupSnapshot specifies the disks that you want to back up.

VolumeGroupSnapshotContent

Records information about an ECS snapshot-consistent group.

VolumeSnapshot

A request for a volume snapshot. After you create a VolumeGroupSnapshot, a group of VolumeSnapshots is automatically created for the disks that you want to back up at the same time.

VolumeSnapshotContent

Records information about an ECS snapshot.

A VolumeGroupSnapshotClass is similar to a StorageClass. A VolumeGroupSnapshot is similar to a persistent volume claim (PVC). A VolumeGroupSnapshotContent is similar to a persistent volume (PV). After you create a VolumeGroupSnapshot, CSI creates an ECS snapshot-consistent group to automatically generate a group of VolumeSnapshots and VolumeSnapshotContents. If errors occur on a disk, you can restore the data on the disk by using the VolumeSnapshot that backs up the disk.

## Example

### **1\. Enable feature gates related to group snapshots**

Before you create a group snapshot, you must enable the `EnableVolumeGroupSnapshots` feature gate.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side navigation pane, choose **Operations** > **Add-ons**.
    
3.  On the **Add-ons** page, find the csi-provisioner card and click **Configuration** in the lower-right corner of the csi-provisioner card.
    
4.  In the **csi-provisioner Parameters** dialog box, specify `EnableVolumeGroupSnapshots=true` in the FeatureGate field and click **OK**.
    
    If other feature gates have been enabled, set the FeatureGate field in the `xxxxxx=true,yyyyyy=false,EnableVolumeGroupSnapshots=true` format.
    

### 2\. Create a MySQL application

1.  Create a file named mysql.yaml and copy the following content to the file:
    
    **Click to view the content of the mysql.yaml file**
    
    ```
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: mysql
    spec:
      selector:
        matchLabels:
          app: mysql
      serviceName: "mysql"
      replicas: 2
      template:
        metadata:
          labels:
            app: mysql
        spec:
          containers:
          - name: mysql
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/mysql:8.0.30-8.6
            env:
            - name: MYSQL_ROOT_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: mysql-pass
                  key: password
            imagePullPolicy: IfNotPresent
            volumeMounts:
            - name: data
              # The directory of MySQL data.
              mountPath: /var/lib/mysql
              subPath: mysql
      volumeClaimTemplates:
      - metadata:
          name: data
        spec:
          accessModes: [ "ReadWriteOnce" ]
          storageClassName: "alicloud-disk-essd"
          resources:
            requests:
              storage: 20Gi
    ---
    apiVersion: v1
    kind: Secret
    metadata:
      name: mysql-pass
    type: Opaque
    data:   # The username and password used to log on to the MySQL database. The following data is encoded in Base64. 
      password: MTIzNDU2   
      username: cm9vdA==  
    ```
    
2.  Create a stateful application to deploy MySQL.
    
    ```
    kubectl apply -f mysql.yaml
    ```
    
3.  Write data to two pod replicas of the MySQL application.
    
    1.  Log on to the mysql-0 pod and connect to the MySQL database.
        
        ```
        kubectl exec -it mysql-0 -- bash  # Log on to the pod. 
        mysql -uroot -p123456  # Connect to the MySQL database.
        ```
        
    2.  Run the following command to write data to the database:
        
        ```
        create database test;
        use test;
        create table scores( name VARCHAR(50) NOT NULL, score INT AUTO_INCREMENT PRIMARY KEY );
        insert into scores(name,score) values("Amy",95);
        select * from scores;
        ```
        
        Expected output:
        
        ```
        +------+-------+
        | name | score |
        +------+-------+
        | Amy  |    95 |
        +------+-------+
        ```
        
    3.  Perform the preceding operations again to write data to the mysql-1 pod.
        

### 3\. Create group snapshots for the MySQL application

1.  Create a VolumeGroupSnapshotClass.
    
    A default VolumeGroupSnapshotClass named alibabacloud-disk-group-snapshot is created in the cluster. You can use the following group-snapshot-class-demo.yaml file to create a custom VolumeGroupSnapshotClass:
    
    ```
    apiVersion: groupsnapshot.storage.k8s.io/v1alpha1
    kind: VolumeGroupSnapshotClass
    metadata:
      name: group-snapshot-class-demo
    deletionPolicy: Delete
    driver: diskplugin.csi.alibabacloud.com
    ```
    
    Valid values of the `deletionPolicy` parameter:
    
    -   `Delete`: When you delete the VolumeGroupSnapshot, the VolumeGroupSnapshotContent and related group snapshots are also deleted.
        
    -   `Retain`: When you delete the VolumeGroupSnapshot, the VolumeGroupSnapshotContent and related group snapshots are retained.
        
    
    **Note**
    
    You cannot set an expiration time for an ECS snapshot-consistent group. You need to manually delete group snapshots.
    
2.  Create a VolumeGroupSnapshotClass.
    
    ```
    kubectl apply -f group-snapshot-class-demo.yaml
    ```
    
3.  Use the following group-snapshot-demo.yaml file to create group snapshots from the two disk volumes mounted to the MySQL application:
    
    ```
    apiVersion: groupsnapshot.storage.k8s.io/v1alpha1
    kind: VolumeGroupSnapshot
    metadata:
      name: group-snapshot-demo
      namespace: default
    spec:
      source:
        selector:
          matchLabels:
            app: mysql
      volumeGroupSnapshotClassName:
        group-snapshot-class-demo
    ```
    
    `source.selector`: the label selector that the VolumeGroupSnapshot uses to select the PVC for backup.
    
    Labels are added to the PVCs created based on the parameters in the volumeClaimTemplates section to indicate the application to which the PVCs are mounted. If you use other methods to create PVCs that are used by the application, you must manually add labels to the PVCs to indicate the application to which the PVCs are mounted.
    
4.  Create group snapshots.
    
    ```
    kubectl apply -f group-snapshot-demo.yaml
    ```
    

### 4\. Check whether the group snapshots are created

1.  Query the VolumeGroupSnapshots. If the VolumeGroupSnapshots are being created, wait until they are created.
    
    ```
    kubectl get vgs group-snapshot-demo -w
    ```
    
    If the value of the `READYTOUSE` parameter changes from `false` to `true`, the group snapshots are created.
    
2.  Query the PVCs that are backed up and the VolumeSnapshot created for each backup PVC.
    
    ```
    kubectl describe vgs group-snapshot-demo
    ```
    
    Expected output:
    
    ```
    Status:
      Bound Volume Group Snapshot Content Name: groupsnapcontent-adcef6ef-811a-4e9d-ba51-3927caxxxxxx
      Creation Time: 2024-11-27T06:02:56Z
      Pvc Volume Snapshot Ref List:
        Persistent Volume Claim Ref:
          Name: disk-mysql-0
        Volume Snapshot Ref:
          Name: snapshot-1c2c5bcaf47ee2bffcc5b2f52dff65a4aacaaea38032c05d75acd536f7xxxxxx-2024-11-27-6.4.7
        Persistent Volume Claim Ref:
          Name: disk-mysql-1
        Volume Snapshot Ref:
          Name: snapshot-37a2fbf634d68cd2103f261313c2ed781fbd2bd52b5a0d0e0c0ef7c339xxxxxx-2024-11-27-6.4.9
    ```
    
    **Parameter**
    
    **Description**
    
    `Bound Volume Group Snapshot Content Name`
    
    The VolumeGroupSnapshotContent bound to the VolumeGroupSnapshot.
    
    `Pvc Volume Snapshot Ref List`
    
    The VolumeSnapshot associated with the PVC. The following parameters are displayed:
    
    -   `Persistent Volume Claim Ref`: the name of the backup PVC.
        
    -   `Volume Snapshot Ref`: the name of the VolumeSnapshot created for the PVC.
        
    
3.  Query the VolumeSnapshots that are created.
    
    ```
    kubectl get volumesnapshot \ 
    ```
    
    Expected output:
    
    ```
    snapshot-1c2c5bcaf47ee2bffcc5b2f52dff65a4aacaaea38032c05d75acd536f7xxxxxx-2024-11-27-6.4.7 \
    snapshot-37a2fbf634d68cd2103f261313c2ed781fbd2bd52b5a0d0e0c0ef7c339xxxxxx-2024-11-27-6.4.9
    ```
    
    If the values of the `READYTOUSE` parameters of the two VolumeSnapshots are both `true`, the VolumeSnapshots are created.
    
4.  Query the ECS snapshot-consistent group that is created.
    
    ```
    kubectl describe vgsc groupsnapcontent-adcef6ef-811a-4e9d-ba51-3927caxxxxxx
    ```
    
    Expected output:
    
    ```
      Volume Group Snapshot Handle:  ssg-2zeg72d1qym6vnxxxxxx
    ```
    
    Go to the [ECS console](https://ecs.console.alibabacloud.com). In the left-side navigation pane, choose **Storage & Snapshots** > **Snapshots**. On the **Snapshot-consistent Groups** tab, enter `ssg-2zeg72d1qym6vnxxxxxx` (the snapshot-consistent group ID returned in the preceding output) in the search box and click the search icon. You can view the snapshot-consistent group that is created.
    

### 5\. Restore disk volumes from the snapshots

You can [manually restore the disk volumes one after one](#zTrNN) or [run a script to restore the disk volumes from the snapshots in one batch](#SQ6hr).

#### **Manually restore the disk volumes one after one**

The following example describes how to restore the disk volume mounted to the disk-mysql-0 pod.

1.  Create a file named disk-mysql-0-copy.yaml and copy the following content to the file. The file is used to create a PVC that can provision a disk volume. CSI automatically creates a new disk based on the PVC. The disk stores the same data as the disk attached to the disk-mysql-0 pod.
    
    ```
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: disk-mysql-0-copy
    spec:
      volumeMode: Filesystem
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: 20Gi 
      storageClassName: "alicloud-disk-essd"
      dataSource:
        # The VolumeSnapshot created for the PVC mounted to the disk-mysql-0 pod. 
        name: snapshot-1c2c5bcaf47ee2bffcc5b2f52dff65a4aacaaea38032c05d75acd536f7xxxxxx-2024-11-27-6.4.7
        kind: VolumeSnapshot
        apiGroup: snapshot.storage.k8s.io
    ```
    
2.  Restore the disk volume.
    
    ```
    kubectl apply -f disk-mysql-0-copy.yaml
    ```
    
3.  Query the PVC that is created.
    
    ```
    kubectl get pvc disk-mysql-0-copy
    ```
    
    Expected output:
    
    ```
    disk-mysql-0-copy   Bound    d-2ze0iwwqg0s6b0xxxxxx             20Gi       RWO            alicloud-disk-essd               <unset>                 69s
    ```
    
    Go to the [ECS console](https://ecs.console.alibabacloud.com). In the left-side navigation pane, choose ****Storage & Snapshots** > **Block Storage****. On the **Cloud Disk** tab, enter `d-2ze0iwwqg0s6b0xxxxxx` (the disk ID returned in the preceding output) in the search box and click the search icon. You can view the disk that is created. Click the disk ID to go to the disk details page. You can find that the disk is created from a snapshot.
    

#### **Run a script to restore the disk volumes from the snapshots in one batch**

The following example describes how to use group snapshots to restore the PVCs mounted to the MySQL application in one batch.

1.  Scale the number of pod replicas provisioned by the MySQL application to zero.
    
    ```
    kubectl scale sts mysql --replicas=0
    ```
    
2.  Delete the two disk volumes mounted to the MySQL application.
    
    ```
    kubectl delete pvc data-mysql-0 data-mysql-1
    ```
    
3.  Use the following content to create a script named generate\_pvc.sh and then use the script to create a YAML file that deploys PVCs from snapshots in sequence.
    
    1.  You must first install the jq command-line tool.
        
        **Click to view how to install jq**
        
        -   **CentOS**:
            
            ```
            yum install jq 
            ```
            
        -   **Ubuntu**:
            
            ```
            apt-get install jq
            ```
            
        
        **Click to view the content of the generate\_pvc.sh script**
        
        ```
        #!/bin/bash
        
        # Input parameters. 
        NAMESPACE=$1
        VGS_NAME=$2
        STORAGE_CLASS_NAME=$3
        CAPACITY=$4
        KUBECONFIG_PATH=$5
        OUTPUT_FILE=$6
        
        # Obtain information about the specified VolumeGroupSnapshot. 
        VGS_INFO=$(kubectl --kubeconfig=${KUBECONFIG_PATH} -n ${NAMESPACE} get vgs ${VGS_NAME} -o json)
        
        # Check whether the .status.pvcVolumeSnapshotRefList parameter exists. 
        if !  echo ${VGS_INFO} | jq -e '.status.pvcVolumeSnapshotRefList' &>/dev/null; then
          echo "Error: .status.pvcVolumeSnapshotRefList not found in VolumeGroupSnapshot."
          exit 1
        fi
        
        # Parse the .status.pvcVolumeSnapshotRefList parameter. 
        PVCS=($(echo ${VGS_INFO} | jq -r '.status.pvcVolumeSnapshotRefList[].persistentVolumeClaimRef.name'))
        SNAPSHOTS=($(echo ${VGS_INFO} | jq -r '.status.pvcVolumeSnapshotRefList[].volumeSnapshotRef.name'))
        
        # Clear the output file. 
        > ${OUTPUT_FILE}
        
        # Generate the YAML files of N PVCs. 
        for i in "${!PVCS[@]}"; do
          PVC_NAME=${PVCS[$i]}
          SNAPSHOT_NAME=${SNAPSHOTS[$i]}
        
          cat <<EOF >> ${OUTPUT_FILE}
        ---
        kind: PersistentVolumeClaim
        apiVersion: v1
        metadata:
          name: ${PVC_NAME}
        spec:
          volumeMode: Filesystem
          accessModes:
          - ReadWriteOnce
          resources:
            requests:
              storage: ${CAPACITY}
          storageClassName: "${STORAGE_CLASS_NAME}"
          dataSource:
            name: ${SNAPSHOT_NAME}
            kind: VolumeSnapshot
            apiGroup: snapshot.storage.k8s.io
        EOF
        done
        
        echo "PVC YAML files have been written to ${OUTPUT_FILE}"
        ```
        
        The following table describes the input parameters in the generate\_pvc.sh script.
        
        **Input parameter**
        
        **Description**
        
        **Example**
        
        1
        
        The namespace to which the VolumeGroupSnapshot belongs.
        
        default
        
        2
        
        The name of the VolumeGroupSnapshot.
        
        group-snapshot-demo
        
        3
        
        The name of the StorageClass.
        
        alicloud-disk-essd
        
        4
        
        The disk capacity.
        
        20Gi
        
        5
        
        The path of the kubeconfig file.
        
        .kube/config (default)
        
        6
        
        The path of the generated PVC YAML files.
        
        ./output.yaml
        
    2.  Generate YAML files of the PVCs that are created from snapshots.
        
        ```
        bash generate_pvc.sh default group-snapshot-demo alicloud-disk-essd 20Gi .kube/config ./output.yaml
        ```
        
        The following YAML template provides an example of the output.yaml file. You can edit the file based on your business requirements and then deploy the file in the cluster.
        
        ```
        ---
        kind: PersistentVolumeClaim
        apiVersion: v1
        metadata:
          name: disk-mysql-0
        spec:
          volumeMode: Filesystem
          accessModes:
          - ReadWriteOnce
          resources:
            requests:
              storage: 20Gi
          storageClassName: "alicloud-disk-essd"
          dataSource:
            name: snapshot-1c2c5bcaf47ee2bffcc5b2f52dff65a4aacaaea38032c05d75acd536f7adb850-2024-11-27-6.4.7
            kind: VolumeSnapshot
            apiGroup: snapshot.storage.k8s.io
        ---
        kind: PersistentVolumeClaim
        apiVersion: v1
        metadata:
          name: disk-mysql-1
        spec:
          volumeMode: Filesystem
          accessModes:
          - ReadWriteOnce
          resources:
            requests:
              storage: 20Gi
          storageClassName: "alicloud-disk-essd"
          dataSource:
            name: snapshot-37a2fbf634d68cd2103f261313c2ed781fbd2bd52b5a0d0e0c0ef7c3396fea1c-2024-11-27-6.4.9
            kind: VolumeSnapshot
            apiGroup: snapshot.storage.k8s.io
        ```
        
    3.  Deploy the output.yaml file in the cluster to restore PVCs for disks in one batch.
        
        ```
        kubectl apply -f output.yaml
        ```
        
4.  Scale the number of pod replicas provisioned by the MySQL application to two.
    
    ```
    kubectl scale sts mysql --replicas=2
    ```
    
5.  After the application is restarted, check whether the data is restored.
    
    ```
    kubectl exec -it mysql-0 -- bash   # Log on to the pod. 
    mysql -uroot -p123456              # Run this command in the pod. 
    use test;                          # Run this command in the database. 
    select * from scores;
    ```
    
    Expected output:
    
    ```
    +------+-------+
    | name | score |
    +------+-------+
    | Amy  |    95 |
    +------+-------+
    ```
    

## References

For more information about how to create a snapshot of a disk volume, see [Create a snapshot of a disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-volume-snapshots-created-from-disks).
