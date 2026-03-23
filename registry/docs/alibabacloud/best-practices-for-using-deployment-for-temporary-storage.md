If your application needs additional storage but does not require persistent storage, you can mount an ephemeral volume to a pod. These volumes are created and deleted along with their corresponding pods, which simplifies application deployment and management. This topic describes how to use a disk as an ephemeral volume, mount the volume to a pod using `ephemeral.volumeClaimTemplate`, and verify that the persistent volume (PV) and persistent volume claim (PVC) are automatically deleted when the pod is deleted.

## Scenarios

This method is suitable for scenarios that require ephemeral storage, such as:

-   Your application needs ephemeral storage to save intermediate data but does not require the data to be persistent.
    
-   Your application outputs logs with high throughput. Using temporary, non-shared storage helps ensure storage performance.
    

## **Prerequisites**

An ACK cluster that runs version 1.22 or later has been created.

## Create a deployment **and mount an ephemeral volume**

When you create a deployment, you can use a `VolumeClaimTemplate` to automatically create a PVC and a PV. A `VolumeClaimTemplate` is a template that defines PVCs. The system creates a number of PVCs based on the number of replicas specified in the deployment configuration. These PVCs share the same configuration, except for their names.

**Note**

You can use `ephemeral.volumeClaimTemplate` to mount ephemeral volumes for deployments, StatefulSets, and pods. This topic uses a deployment as an example.

1.  Modify the following YAML content based on the parameter descriptions in the table. Save the content as ephemeral-example.yaml.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: ephemeral-example
    spec:
      replicas: 2
      selector:
        matchLabels:
          pod: example-pod
      strategy:
        type: Recreate      
      template:
        metadata:
          labels:
            pod: example-pod
        spec:
          containers:
            - name: nginx
              image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
              resources:
                requests:
                  cpu: 500m
                  memory: 2Gi
                  ephemeral-storage: 2Gi
              volumeMounts:
              - mountPath: "/scratch"
                name: scratch-volume
          volumes:
            - name: scratch-volume
              ephemeral:      # Declare the current storage as ephemeral storage
                volumeClaimTemplate:
                  spec:
                    accessModes: [ "ReadWriteOncePod" ]
                    storageClassName: alicloud-disk-topology-alltype
                    resources:
                      requests:
                        storage: 30Gi
    ```
    
    The following table describes the parameters in `volumeClaimTemplate`.
    
    **Parameter**
    
    **Description**
    
    `accessModes`
    
    The access mode of the persistent volume. You can set this parameter to `ReadWriteOncePod` or `ReadWriteOnce`.
    
    If your cluster is version 1.29 or later, use `ReadWriteOncePod`. This ensures that a disk is used by only one pod.
    
    `storageClassName`
    
    The name of the StorageClass to use.
    
    This example uses `alicloud-disk-topology-alltype`, which is a default StorageClass provided by ACK. This StorageClass defines the configuration for disk volumes. It attempts to create disks in the following order: enterprise SSD (ESSD), standard SSD, and ultra disk.
    
    **Note**
    
    Disks are billed on a pay-as-you-go basis. For more information, see [Elastic Block Storage billing](/help/en/ecs/block-storage-devices) and [Elastic Block Storage pricing](https://www.alibabacloud.com/product/ecs).
    
    `storage`
    
    The capacity of the ephemeral volume.
    
    **Note**
    
    The StorageClass used in the example (`alicloud-disk-topology-alltype`) creates a PL1 [ESSD](/help/en/ecs/user-guide/essds#concept-727754) by default. The minimum capacity is 20 GiB.
    
2.  Use the ephemeral-example.yaml file to create the deployment.
    
    ```
    kubectl create -f ephemeral-example.yaml
    ```
    
3.  Check the deployment status of the pods.
    
    ```
    kubectl get pod -l pod=example-pod
    ```
    
    Expected output:
    
    ```
    NAME                                 READY   STATUS    RESTARTS   AGE
    ephemeral-example-7f795798f9-kbplx   1/1     Running   0          38s
    ephemeral-example-7f795798f9-p98lt   1/1     Running   0          38s
    ```
    
4.  Check the PVCs.
    
    ```
    kubectl get pvc
    ```
    
    The following output is expected. The PVCs and PVs that correspond to the pods are automatically created. The disk ID is in the `VOLUME` field.
    
    ```
    NAME                                                STATUS   VOLUME                   CAPACITY   ACCESS MODES   STORAGECLASS                     VOLUMEATTRIBUTESCLASS   AGE
    ephemeral-example-7f795798f9-kbplx-scratch-volume   Bound    d-uf61678cuo33eunn****   30Gi       RWOP           alicloud-disk-topology-alltype   <unset>                 74s
    ephemeral-example-7f795798f9-p98lt-scratch-volume   Bound    d-uf6dwkdcowyf2fj6****   30Gi       RWOP           alicloud-disk-topology-alltype   <unset>                 74s
    ```
    

## **Verify that the PV and PVC are deleted when the pod is scaled in**

When you create the deployment as described in the previous section, a disk is automatically mounted to each pod as an ephemeral volume. These volumes are automatically deleted when their corresponding pods are deleted. The following example demonstrates how to verify this behavior.

1.  Reduce the number of replicas for the deployment.
    
    The following command reduces the number of replicas in the deployment to 1.
    
    ```
    kubectl scale deploy ephemeral-example --replicas=1
    ```
    
2.  Check the pods to confirm that the scale-in is complete.
    
    ```
    kubectl get pod -l pod=example-pod
    ```
    
    Expected output:
    
    ```
    NAME                                 READY   STATUS    RESTARTS   AGE
    ephemeral-example-7f795798f9-kbplx   1/1     Running   0          5m29s
    ```
    
3.  Check the PVs and PVCs to confirm that the resources for the deleted pod are also deleted.
    
    1.  Check the PVs.
        
        ```
        kubectl get pv
        ```
        
        The following output is expected. The PV for the deleted pod is also deleted.
        
        ```
        NAME                     CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                                                       STORAGECLASS                     VOLUMEATTRIBUTESCLASS   REASON   AGE
        d-uf61678cuo33eunn****   30Gi       RWOP           Delete           Bound    default/ephemeral-example-7f795798f9-kbplx-scratch-volume   alicloud-disk-topology-alltype   <unset>                          5m52s
        ```
        
    2.  Check the PVCs.
        
        ```
        kubectl get pvc
        ```
        
        The following output is expected. The PVC for the deleted pod is also deleted.
        
        ```
        NAME                                                STATUS   VOLUME                   CAPACITY   ACCESS MODES   STORAGECLASS                     VOLUMEATTRIBUTESCLASS   AGE
        ephemeral-example-7f795798f9-kbplx-scratch-volume   Bound    d-uf61678cuo33eunn****   30Gi       RWOP           alicloud-disk-topology-alltype   <unset>                 7m11s
        ```
        

## **References**

-   For more information about how to monitor the usage of ephemeral storage, see [Ephemeral storage monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-plugin-to-monitor-storage-resources-at-the-node-side#4bf617351c88g).
    
-   For more information about using disks for persistent storage, see [Disk volumes](/help/en/ack/disk-volumes-1).
