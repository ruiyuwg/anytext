After you register external Kubernetes clusters to Container Service for Kubernetes (ACK), you can use the backup center of ACK to back up applications and data in the clusters, and restore the backup files in ACK clusters. This topic describes how to use the backup center of ACK to migrate applications from external Kubernetes clusters to ACK clusters.

## Prerequisites

-   [A registered cluster is created](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/create-ack-one-registered-clusters#task-skz-qwk-qfb) and an external cluster whose Kubernetes version is later than 1.16 is registered to the registered cluster.
    
-   [An ACK managed cluster is created](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/) in the same region as the registered cluster for application restoration. We recommend that you use Kubernetes 1.18 or later.
    
    **Important**
    
    -   The restore cluster must use the Container Storage Interface (CSI) plug-in. Application restoration is not supported in clusters that use FlexVolume or use csi-compatible-controller and FlexVolume.
        
    -   The backup center is used to back up and restore applications. Before you run a restore task, you must install and configure system components in the restore cluster. Example:
        
        -   **aliyun-acr-credential-helper**: You need to grant permissions to the restore cluster and configure acr-configuration.
            
        -   **alb-ingress-controller**: You need to configure an ALBConfig.
            
    
-   [The backup component migrate-controller is installed and granted permissions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#task-1955156) for the registered cluster and the ACK cluster you created.
    
-   A route is configured that points to the internal network of the region in which the Object Storage Service (OSS) bucket for the registered cluster resides if the cluster is connected to a virtual private cloud (VPC) by using Cloud Enterprise Network (CEN), Express Connect, or VPN connections. For more information, see [Internal OSS endpoints and VIP ranges](/help/en/oss/user-guide/access-oss-via-bucket-domain-name).
    
-   [Cloud Backup is activated](/help/en/cloud-backup/product-overview/activate-hbr).
    

## Scenarios

Cloud Backup for disaster recovery: integrated backup, disaster recovery, and migration solutions to quickly enable application migration to the cloud and data disaster recovery. For more information, see [Overview of registered clusters](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/overview-9#fDaHN).

## Usage notes

-   Before you back up the data in the external cluster, you must create persistent volumes (PVs) and persistent volume claims (PVCs) to mount local volumes to the cluster. The Container Storage Interface (CSI) plug-in provided by Alibaba Cloud allows you to mount volumes to registered clusters. For more information, see [Local storage volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-17/#concept-1935419).
    
-   The registered cluster, ACK cluster, and OSS bucket must be deployed in the same region.
    

## Before you begin

In this example, a MySQL application that runs in an external cluster is backed up and then the backup file is restored in an ACK cluster. Before you migrate the application, you must make sure that the registered cluster and the ACK cluster are deployed in the same region and both have the cluster backup feature enabled. You must also make sure that the following conditions are met:

-   Registered cluster: A Resource Access Management (RAM) user is created and granted the permissions to access OSS and Cloud Backup. A Secret named alibaba-addon-secret is created in the csdr namespace of the registered cluster to store the AccessKey ID and AccessKey secret of the RAM user.
    
    Run the following command to check whether the alibaba-addon-secret Secret exists:
    
    ```
    kubectl get secret alibaba-addon-secret -n csdr
    ```
    
    Expected output:
    
    ```
    alibaba-addon-secret   Opaque   2      5d22h
    ```
    
-   ACK cluster:
    
    -   If you use an ACK managed cluster, make sure that Cloud Backup is activated and an OSS bucket named cnfs-oss-\*\*\*\* is created.
        
    -   If you use an ACK dedicated cluster, make sure that the worker RAM role of the cluster has the permissions to access OSS and Cloud Backup. For more information, see [Grant OSS permissions to an ACK dedicated cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#section-0go-kbf-mzg) and [Grant Cloud Backup permissions to an ACK dedicated cluster or registered cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#section-fs8-9si-oz8).
        

## Step 1: Deploy an application in the external cluster

1.  Run the following command to create a namespace named test1:
    
    ```
    kubectl create namespace test1
    ```
    
2.  Create a file named app-mysql.yaml and add the following content to the file.
    
    Replace `<your-hostname>` with the name of the node that you want to back up. Set the `username` and `password` parameters to the username and password that are used to log on to the application.
    
    ```
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: mysql-sts
      namespace: test1
    spec:
      selector:
        matchLabels:
          app: mysql-sts
      serviceName: mysql-sts
      template:
        metadata:
          labels:
            app: mysql-sts
        spec:
          containers:
          - name: mysql-sts
            image: mysql:5.7
            env:
            - name: MYSQL_ROOT_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: mysql-pass
                  key: password
            ports:
            - containerPort: 3306
              name: mysql-sts
            volumeMounts:
            - name: mysql
              mountPath: /var/lib/mysql
          volumes:
            - name: mysql
              persistentVolumeClaim:
                claimName: example-pvc
    ---
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: example-pv
    spec:
      capacity:
        storage: 100Gi
      volumeMode: Filesystem
      accessModes:
      - ReadWriteOnce
      persistentVolumeReclaimPolicy: Delete
      storageClassName: local-storage
      local:
        path: /mnt/disk
      nodeAffinity:
        required:
          nodeSelectorTerms:
          - matchExpressions:
            - key: kubernetes.io/hostname
              operator: In
              values:
              - <your-hostname> # Specify the name of the node that you want to back up. 
    ---
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: example-pvc
      namespace: test1
    spec:
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: 25Gi
      storageClassName: local-storage
      volumeName: example-pv
    ---
    apiVersion: v1
    kind: Secret
    metadata:
      name: mysql-pass
      namespace: test1
    type: Opaque
    data:
      username: dGVz****             # Replace the value with the username that is used to log on to the MySQL application that you want to back up. 
      password: dGVzdDEt****     # Replace the value with the password that is used to log on to the MySQL application that you want to back up.
    ```
    
3.  Run the following command to create a MySQL application, a PV, and a PVC. The PV and PVC are used to mount a local disk to the MySQL application.
    
    ```
    kubectl create -f app-mysql.yaml
    ```
    
    Expected output:
    
    ```
    statefulset.apps/mysql-sts created
    persistentvolume/example-pv created
    persistentvolumeclaim/example-pvc created
    secret/mysql-pass created
    ```
    
4.  Run the following command to check whether the MySQL application is created:
    
    ```
    kubectl get pod -n test1 | grep mysql-sts
    ```
    
    Expected output:
    
    ```
    mysql-sts-0   1/1     Running   1 (4m51s ago)   4m58s
    ```
    

## Step 2: Back up the MySQL application and data in the external cluster

You can register the external cluster to ACK and then perform the backup operation in the registered cluster.

1.  Create a backup vault in the registered cluster. For more information, see [Create a backup vault](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/back-up-and-restore-applications-in-an-ack-cluster#section-q5x-mc1-qx2).
    
2.  Create a real-time backup task named MySQL in the registered cluster. For more information, see [Create a backup plan or back up instantly](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/back-up-and-restore-applications-in-an-ack-cluster#section-7ba-qxw-1k3).
    
    Set **Name** to MySQL, select the backup vault that you created in the previous step from the **Backup Vaults** drop-down list, and then select **test1** from the **Backup Namespaces** drop-down list.
    
3.  On the **Application Backup** page, click the **Backup Records** tab. If the status of the mysql-backup task changes from **InProgress** to **Completed**, the data are backed up.
    

## Step 3: Restore the backup file in the ACK cluster

In this example, the StorageClass of an external cluster is converted to alibabacloud-cnfs-nas. This example shows how to restore the backup file of the MySQL application in the ACK cluster. Perform the following steps:

1.  Create a restoration task named mysql-restore to deploy the MySQL application in the test2 namespace of the ACK cluster and convert its StorageClass to alibabacloud-cnfs-nas. For more information, see [Restore applications and volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/back-up-and-restore-applications-in-an-ack-cluster#section-t9t-wqi-820).
    
    **Parameter**
    
    **Example**
    
    **Name**
    
    mysql-restore.
    
    **Backup Vaults**
    
    Select the backup vault that you created. After you select a backup vault, click **Initialize Backup Vault** to associate the restore cluster with the backup vault.
    
    **Select Backup**
    
    Select MySQL.
    
    **Reset Namespace**
    
    Change from **test1** to **test2**.
    
    **StorageClass Conversion**
    
    Select the **alibabacloud-cnfs-nas** StorageClass for the **example-pvc** PVC in the list of converted PVCs.
    
2.  Click **View Restoration Records** on the right side of **Restore**. If the status of the mysql-restore restoration task changes from **InProgress** to **Completed**, the MySQL application and data are restored.
    
3.  Run the following command in the ACK cluster to check whether the MySQL application is deployed:
    
    ```
    kubectl get pod -n test2 | grep mysql-sts
    ```
    
    Expected output:
    
    ```
    mysql-sts-0   1/1     Running   0          4s
    ```
    
4.  Run the following command in the ACK cluster to check whether the data is restored:
    
    1.  Check whether the StorageClass of the PVC is changed to alibaba-cnfs-nas:
        
        ```
        kubectl get pvc -n test2 | grep example-pvc
        ```
        
        Expected output:
        
        ```
        example-pvc   Bound    nas-acde4acd-59b6-4332-90af-b74ef6******   25Gi       RWO            alibabacloud-cnfs-nas   31m
        ```
        
    2.  Check whether the example-pvc PVC is mounted to the MySQL application:
        
        ```
        kubectl describe pvc example-pvc -n test2 | grep "Used By"
        ```
        
        Expected output:
        
        ```
        Used By:       mysql-sts-0
        ```
