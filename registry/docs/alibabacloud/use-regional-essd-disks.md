The regional Enterprise SSD (ESSD) is a new type of ESSD that automatically and synchronously replicates data across multiple zones within the same region. Each zone is a physically isolated location with independent power, cooling, and networking. By deploying stateful applications with regional ESSDs, you can upgrade a single-zone application to one with multi-zone disaster recovery capabilities without code changes. If a node or an entire zone fails, or if resources in a zone are insufficient, Kubernetes can automatically reschedule the application's pods to another zone. The pods can then re-mount the same storage volume, eliminating the need for complex data synchronization and validation and simplifying your high-availability architecture.

## Before you start

To better understand regional ESSDs, we recommend reading the following topics:

-   For an introduction to regional ESSDs, see [Disk overview](/help/en/ecs/user-guide/regional-essd-disks#068134ccf3f5g).
    
-   For a list of supported regions and other limitations, see [Limits](/help/en/ecs/user-guide/regional-essd-disks#e6a30ae806qud).
    
-   Regional ESSDs are billed based on disk capacity and support only the pay-as-you-go billing model when used as a Kubernetes volume. For details, see [Elastic Block Storage billing](/help/en/ecs/block-storage-devices#concept-1937442).
    

## Prerequisites

-   You have an [ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/) running Kubernetes version 1.26 or later.
    
-   The [csi-plugin](/help/en/ack/product-overview/csi-plugin) and [csi-provisioner](/help/en/ack/product-overview/csi-provisioner) components in your cluster are version 1.33.4 or later.
    

## Procedure

1.  Confirm that your cluster has nodes supporting regional ESSDs.
    
    ```
    kubectl get node -lnode.csi.alibabacloud.com/disktype.cloud_regional_disk_auto=available
    ```
    
    This command returns all nodes in the cluster that can mount regional ESSDs. To verify the cross-zone migration capability, you must have at least two supported nodes in different zones. This topic uses `cn-beijing-i` and `cn-beijing-l` as an example.
    
2.  Create a StorageClass.
    
    1.  Create a file named `sc-regional.yaml` with the following content.
        
        The `type` parameter is set to `cloud_regional_disk_auto`.
        
        ```
        apiVersion: storage.k8s.io/v1
        kind: StorageClass
        metadata:
          name: alibabacloud-disk-regional
        parameters:
          type: cloud_regional_disk_auto
        provisioner: diskplugin.csi.alibabacloud.com
        reclaimPolicy: Delete
        volumeBindingMode: WaitForFirstConsumer
        allowVolumeExpansion: true
        ```
        
    2.  Apply the manifest to create the StorageClass.
        
        ```
        kubectl apply -f sc-regional.yaml
        ```
        
3.  Deploy a sample stateful application.
    
    1.  Create a file named `disk-test.yaml` to define a StatefulSet that uses the new StorageClass.
        
        ```
        apiVersion: apps/v1
        kind: StatefulSet
        metadata:
          name: disk-test
        spec:
          replicas: 1
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
                - name: pvc-disk
                  mountPath: /data
          volumeClaimTemplates:
          - metadata:
              name: pvc-disk
            spec:
              accessModes: [ "ReadWriteOnce" ]
              storageClassName: alibabacloud-disk-regional
              resources:
                requests:
                  storage: 20Gi
        ```
        
    2.  Deploy the application. This will trigger the dynamic provisioning of the required disk.
        
        ```
        kubectl apply -f disk-test.yaml
        ```
        
4.  Confirm that the application is running and check its current zone.
    
    1.  Check the status of the Persistent Volume Claim (PVC) and the pod.
        
        ```
        kubectl get pvc pvc-disk-disk-test-0
        kubectl get pod disk-test-0
        ```
        
        Expected output:
        
        ```
        NAME                   STATUS   VOLUME                   CAPACITY   ACCESS MODES   STORAGECLASS                 VOLUMEATTRIBUTESCLASS   AGE
        pvc-disk-disk-test-0   Bound    d-2ze5xxxxxxxxxxxxxxxx   20Gi       RWO            alibabacloud-disk-regional   <unset>                 14m
        NAME          READY   STATUS    RESTARTS   AGE
        disk-test-0   1/1     Running   0          14m
        ```
        
        The output shows that the regional ESSD was successfully requested, the pod has mounted the disk, and is running as expected.
        
    2.  Identify the node and zone where the pod is currently running.
        
        ```
        kubectl get node $(kubectl get pod disk-test-0 -ojsonpath='{.spec.nodeName}') -Ltopology.kubernetes.io/zone
        ```
        
        Expected output:
        
        ```
        NAME                       STATUS   ROLES    AGE     VERSION            ZONE
        cn-beijing.172.25.xxx.xx   Ready    <none>   6m32s   v1.32.1-aliyun.1   cn-beijing-i
        ```
        
        The output shows that the pod is scheduled to the `cn-beijing-i` zone.
        
5.  Add a taint to all nodes in the pod's current zone to make them unschedulable, simulating a zone failure. Then, verify that the pod and its disk are successfully recreated in another zone.
    
    **Warning**
    
    This operation will affect all pods running in the target zone. Do not perform this in a production environment.
    
    1.  Taint all nodes in the pod's current zone.
        
        ```
        kubectl taint node -ltopology.kubernetes.io/zone=cn-beijing-i testing=regional:NoExecute
        ```
        
    2.  The Kubernetes Controller Manager (KCM) will evict the pod from the tainted node and reschedule it in another zone. Watch the pod's status and check its new node location.
        
        ```
        kubectl get pod disk-test-0
        kubectl get node $(kubectl get pod disk-test-0 -ojsonpath='{.spec.nodeName}') -Ltopology.kubernetes.io/zone
        ```
        
        Expected output:
        
        ```
        NAME          READY   STATUS    RESTARTS   AGE
        disk-test-0   1/1     Running   0          20s
        NAME                       STATUS   ROLES    AGE   VERSION            ZONE
        cn-beijing.172.26.xxx.xx   Ready    <none>   32m   v1.32.1-aliyun.1   cn-beijing-l
        ```
        
        The output shows that the pod has been successfully recreated to a new node in the `cn-beijing-l` zone, demonstrating a successful cross-zone failover. The data on the disk remains accessible in the new zone.
        
6.  Remove the taint and delete the test resources.
    
    ```
    kubectl taint node -ltopology.kubernetes.io/zone=cn-beijing-i testing-
    kubectl delete sts disk-test
    kubectl delete pvc pvc-disk-disk-test-0
    ```
