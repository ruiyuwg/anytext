Dynamic provisioning automatically creates a subdirectory in a File Storage NAS (NAS) file system and maps it to a persistent volume (PV). Applications in your Container Service for Kubernetes (ACK) cluster can then consume these PVs through persistent volume claims (PVCs).

## Prerequisites

Before you begin, make sure that you have:

-   An ACK managed or dedicated cluster with the FlexVolume plugin installed. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
    
-   The `alicloud-nas-controller` component deployed in the cluster. For more information, see [Install and upgrade FlexVolume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-flexvolume#concept-vgg-45s-vdb).
    

To verify that `alicloud-nas-controller` is running:

```
kubectl get pods -n kube-system | grep alicloud-nas-controller
```

Expected output:

```
alicloud-nas-controller-xxxxxxxxx-xxxxx   1/1     Running   0          1d
```

**Note**

If `securityContext.fsgroup` is set in the application template, kubelet runs `chmod` or `chown` after the volume is mounted. This increases mount time. For more information, see [Why does it require a long time to mount a NAS volume?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes-1#section-td0-7vk-92o).

## Step 1: Create a StorageClass

1.  Save the following YAML content as `nas-sc.yaml`.
    
    ```
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: alicloud-nas
    mountOptions:
    - nolock,tcp,noresvport
    - vers=3
    parameters:
      server: "23a9649583-i****.cn-shenzhen.nas.aliyuncs.com:/nasroot1/"
      driver: flexvolume
    provisioner: alicloud/nas
    reclaimPolicy: Delete
    ```
    
2.  Create the StorageClass:
    
    ```
    kubectl apply -f nas-sc.yaml
    ```
    
3.  Verify the StorageClass:
    
    ```
    kubectl get sc alicloud-nas
    ```
    
    Expected output:
    
    ```
    NAME            PROVISIONER    RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
    alicloud-nas    alicloud/nas   Delete          Immediate           false                  10s
    ```
    

### StorageClass parameters

**Parameter**

**Description**

mountOptions

NAS volume mount options applied to the PV.

server

Mount target list for provisioning PVs. Format: nfsurl1:/path1,nfsurl2:/path2. Multiple servers distribute PVs in round-robin order. For Extreme NAS file systems, the path must start with /share.

driver

Volume driver type. Default: `nfs`. Valid values: `flexvolume`, `nfs`.

reclaimPolicy

PV reclaim policy. `Delete` automatically renames the mapped subdirectory (for example, _path-name_ becomes _archived-path-name_). To permanently delete subdirectories instead of archiving, set `archiveOnDelete` to false.

Valid values: `Delete`, Retain (recommended to prevent data loss).

## Step 2: Deploy a StatefulSet with NAS volumes

1.  Save the following YAML content as `nas-statefulset.yaml`. This creates a headless Service and a StatefulSet that uses dynamically provisioned NAS volumes.
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      ports:
      - port: 80
        name: web
      clusterIP: None
      selector:
        app: nginx
    ---
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: web
    spec:
      selector:
        matchLabels:
          app: nginx
      serviceName: "nginx"
      replicas: 5
      volumeClaimTemplates:
      - metadata:
          name: html
        spec:
          accessModes:
            - ReadWriteOnce
          storageClassName: alicloud-nas
          resources:
            requests:
              storage: 2Gi
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx:alpine
            volumeMounts:
            - mountPath: "/data"
              name: html
    ```
    
2.  Deploy the Service and StatefulSet:
    
    ```
    kubectl apply -f nas-statefulset.yaml
    ```
    
3.  Verify that the PVCs are bound:
    
    ```
    kubectl get pvc
    ```
    
    Expected output:
    
    ```
    NAME         STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
    html-web-0   Bound    pvc-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   2Gi        RWO            alicloud-nas   2m
    html-web-1   Bound    pvc-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   2Gi        RWO            alicloud-nas   2m
    html-web-2   Bound    pvc-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   2Gi        RWO            alicloud-nas   1m
    html-web-3   Bound    pvc-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   2Gi        RWO            alicloud-nas   1m
    html-web-4   Bound    pvc-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   2Gi        RWO            alicloud-nas   1m
    ```
    
4.  Verify that all pods are running:
    
    ```
    kubectl get pods -l app=nginx
    ```
    
    Expected output:
    
    ```
    NAME    READY   STATUS    RESTARTS   AGE
    web-0   1/1     Running   0          3m
    web-1   1/1     Running   0          2m
    web-2   1/1     Running   0          2m
    web-3   1/1     Running   0          1m
    web-4   1/1     Running   0          1m
    ```
    

## Verify data persistence

After the StatefulSet is running, confirm that data persists across pod restarts.

1.  Write a test file to a pod:
    
    ```
    kubectl exec web-0 -- sh -c "echo 'Hello from NAS' > /data/test.txt"
    ```
    
2.  Read the file:
    
    ```
    kubectl exec web-0 -- cat /data/test.txt
    ```
    
    Expected output:
    
    ```
    Hello from NAS
    ```
    
3.  Delete the pod and wait for Kubernetes to recreate it:
    
    ```
    kubectl delete pod web-0
    kubectl wait --for=condition=Ready pod/web-0 --timeout=120s
    ```
    
4.  Read the file again after pod recreation:
    
    ```
    kubectl exec web-0 -- cat /data/test.txt
    ```
    
    If the output still shows `Hello from NAS`, the NAS volume persists data correctly.
    

## Clean up resources

Delete the resources in the following order:

1.  Delete the StatefulSet:
    
    ```
    kubectl delete statefulset web
    ```
    
2.  Delete the Service:
    
    ```
    kubectl delete service nginx
    ```
    
3.  Delete the PVCs:
    
    ```
    kubectl delete pvc -l app=nginx
    ```
    
4.  Delete the StorageClass:
    
    ```
    kubectl delete sc alicloud-nas
    ```
    

**Note**

If `reclaimPolicy` is set to `Delete`, the PVs are automatically removed and the corresponding NAS subdirectories are renamed (archived) when PVCs are deleted. To permanently delete subdirectories instead of archiving them, set `archiveOnDelete` to `false` in the StorageClass. If `reclaimPolicy` is set to `Retain`, you must manually delete the PVs and NAS subdirectories after deleting the PVCs.
