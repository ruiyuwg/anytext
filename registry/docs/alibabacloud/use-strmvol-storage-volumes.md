In containerized environments, traditional solutions often use Filesystem in Userspace (FUSE)-based file systems, such as ossfs, to mount object storage data. However, for small file read-intensive scenarios (such as AI training dataset loading, time-series log analysis, and other business operations that require fast traversal of millions of small files), traditional solutions cannot meet high throughput and low latency requirements. In these cases, we recommend that you use a virtual block device solution by mounting object storage data through strmvol volumes to optimize small file read performance.

## **Usage notes**

**strmvol volumes**

-   Only internal endpoints can be used to access Object Storage Service (OSS) data.
    
-   The virtual block device needs to build a complete file metadata index during initialization, which requires some node resources during this phase. The application pod remains in the ContainerCreating state. The required resources and time directly correlate to the number of files in the OSS bucket mount path.
    
    -   When selecting the OSS bucket mount path, follow the principle of least privilege.
        
        For example, if application A accesses content under `/app/a/` in the OSS bucket, and application B accesses content under `/app/b/`, we recommend that you create separate storage volumes for A and B with target mount paths of `/app/a/` and `/app/b/` respectively.
        
    -   For the time and resource overhead during initialization, see [Metadata index building](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/strmvol-client-performance-stress-test#91f1aafe0fsnw).
        
-   The resource occupied by the virtual block device during mounting is limited by the configurations on the persistent volume (PV), except in the initialization phase. Reserve sufficient node resources.
    
-   A virtual block device allows you to store up to 16 TiB of data in the attached OSS path.
    

**Cluster and node requirements**

-   The cluster must be an ACK managed Pro cluster or ACK dedicated cluster, with Kubernetes version 1.20 or later, and the storage plug-in type must be CSI.
    
-   The kernel version of the node is 4.19 or later. We recommend that you set the resource specifications to 4C8G or more.
    
-   Supported node operating systems: Alibaba Cloud Linux 3, Alibaba Cloud Linux 2, and CentOS 7. To optimize data access performance by using the [erofs operating system](https://docs.kernel.org/filesystems/erofs.html), we recommend that you use Alibaba Cloud Linux 3.
    
    **Note**
    
    CentOS 7 and Alibaba Cloud Linux 2 have reached end-of-life (EOL). For more information, see [\[Product Changes\] EOL of Alibaba Cloud Linux 2 and CentOS 7](/help/en/ack/product-overview/announcement-on-stopping-maintenance-of-alibaba-cloud-linux-2-and-centos-7).
    
-   You cannot mount a strmvol volume to a serverless pod scheduled to a virtual node.
    

## **Preparations**

### **Step 1: Deploy strmvol-csi-driver**

strmvol volumes require a separate Container Storage Interface (CSI) driver (strmvol-csi-driver). After the CSI driver is deployed, it operates independently of the csi-provisioner and csi-plugin components in the ACK cluster.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, choose **Marketplace** > **Marketplace**.
    
2.  On the **Marketplace** page, search for strmvol-csi-driver, and then click the corresponding card.
    
3.  On the details page, click **Deploy** in the upper-right corner.
    
4.  In the panel that appears, configure the basic information and parameters, and then click **OK**.
    

### **Step 2: Configure OSS access permissions**

1.  Create a RAM user and grant permissions.
    
    1.  Create a RAM user. You can skip this step if you have an existing RAM user. For more information about how to create a RAM user, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
        
    2.  Create a custom policy to grant OSS access permissions to the RAM user. For more information, see [Create custom policies](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m).
        
        Select the read-only policy or read-write policy based on your business requirements. Replace `mybucket` with the name of the bucket you created.
        
        -   **Policy that provides read-only permissions on OSS**
            
            **Click to view policy content**
            
            ```
            {
                "Statement": [
                    {
                        "Action": [
                            "oss:Get*",
                            "oss:List*"
                        ],
                        "Effect": "Allow",
                        "Resource": [
                            "acs:oss:*:*:mybucket",
                            "acs:oss:*:*:mybucket/*"
                        ]
                    }
                ],
                "Version": "1"
            }
            ```
            
        -   **Policy that provides read-write permissions on OSS**
            
            **Click to view policy content**
            
            ```
            {
                "Statement": [
                    {
                        "Action": "oss:*",
                        "Effect": "Allow",
                        "Resource": [
                            "acs:oss:*:*:mybucket",
                            "acs:oss:*:*:mybucket/*"
                        ]
                    }
                ],
                "Version": "1"
            }
            ```
            
    3.  Optional. If the objects in the OSS bucket are encrypted by using a specified customer master key (CMK) in Key Management Service (KMS), you need to grant KMS access permissions to the RAM user. For more information, see [Encryption](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/encrypt-an-oss-volume#section-jjo-z1l-4p6).
        
    4.  Grant OSS access permissions to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
        
    5.  Create an AccessKey pair for the RAM user. For more information, see [Create an AccessKey pair](/help/en/doc-detail/175967.html#task-354412).
        
2.  Create a Secret that stores authentication information for accessing OSS data.
    
    The following is an example command. Replace `akId` and `akSecret` with your actual AccessKey.
    
    ```
    kubectl create -n default secret generic strmvol-secret --from-literal='akId=xxxxxx' --from-literal='akSecret=xxxxxx'
    ```
    

## **Mount strmvol volumes**

### **Step 1: Create strmvol volumes**

## Mount a statically provisioned strmvol volume

1.  Create a PV.
    
    1.  Modify the following YAML file and save it as strmvol-pv.yaml.
        
        ```
        apiVersion: v1
        kind: PersistentVolume
        metadata:
          name: pv-strmvol
        spec:
          capacity:
          # The OSS mount target can store up to 16 TiB of data.
            storage: 20Gi
          # Only the ReadOnlyMany access mode is supported.
          accessModes:
            - ReadOnlyMany
          # To prevent remote data from being deleted, only Retain is supported. 
          persistentVolumeReclaimPolicy: Retain
          csi:
            driver: strmvolplugin.csi.alibabacloud.com
            volumeHandle: pv-strmvol
            # Use the created Secret.
            nodeStageSecretRef:
              name: strmvol-secret
              namespace: default
            volumeAttributes:
              bucket: cnfs-oss-test
              path: /subpath
              # The strmvol volume can access OSS data only over the internal network.
              url: oss-cn-hangzhou-internal.aliyuncs.com
              umask: "000"
              directMode: "false"
              resourceLimit: "2c4g"
        ```
        
        -   `nodeStageSecretRef`
            
            **Parameter**
            
            **Required**
            
            **Description**
            
            `name`
            
            Required
            
            The name of the Secret that stores the AccessKey information.
            
            `namespace`
            
            Required
            
            The namespace of the Secret that stores the AccessKey information.
            
        -   `volumeAttributes`
            
            **Parameter**
            
            **Required**
            
            **Description**
            
            `bucket`
            
            Required
            
            The OSS bucket that you want to mount.
            
            `path`
            
            Optional
            
            The OSS Bucket mount path**,** which represents the directory structure relative to the root file of the bucket when mounting.
            
            **Important**
            
            Select the mount path based on the principle of least privilege.
            
            `url`
            
            Required
            
            The internal endpoint that is used to mount OSS. You can view the internal endpoint on the Bucket page in the OSS console. Common endpoint format:
            
            `http://oss-{{regionName}}-internal.aliyuncs.com` or `https://oss-{{regionName}}-internal.aliyuncs.com`.
            
            **Important**
            
            The internal access endpoint format `vpc100-oss-{{regionName}}.aliyuncs.com` is deprecated. Switch to the new format at the earliest opportunity.
            
            `umask`
            
            Optional
            
            The mask of the default file system permissions after the virtual block device is mounted.
            
            If you want to use 755 as the default file system permission, set umask to 022.
            
            `directMode`
            
            Optional
            
            Specifies whether to enable the direct mode.
            
            -   `"true"`: When you enable the direct mode, prefetching and local data caching are disabled. This mode is suitable for random reading of small files, such as random batch reading of training datasets.
                
            -   `"false"`: By default, the direct mode is disabled. This mode is suitable for general scenarios such as sequential reading of small files and large files. If your business has no obvious data reading features, disable the direct mode.
                
            
            `resourceLimit`
            
            Optional
            
            The maximum resource limit of a node after a virtual block device is mounted.
            
            For example, `"2c4g"` indicates that the virtual block device can use up to 2 vCPUs and 4 GiB of memory from the node.
            
            **Note**
            
            -   The memory is used for data prefetching and local caching. When you enable the direct mode, the required memory is significantly lower than the default value.
                
            -   Operating systems other than Alibaba Cloud Linux 3 have the same upper limit of data reading performance. Therefore, we do not recommend that you use advanced performance configurations. For more information, see [Data reading performance test](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/strmvol-client-performance-stress-test#70345e7bdfaic).
                
            
    2.  Create a PV.
        
        ```
        kubectl create -f strmvol-pv.yaml
        ```
        
    3.  Check the PV status.
        
        ```
        kubectl get pv pv-strmvol
        ```
        
        Expected output:
        
        ```
        NAME         CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM   STORAGECLASS   VOLUMEATTRIBUTESCLASS   REASON   AGE
        pv-strmvol   20Gi       ROX            Retain           Available                          <unset>                          18s
        ```
        
2.  Create a persistent volume claim (PVC).
    
    1.  Modify the following YAML file and save it as strmvol-pvc-static.yaml.
        
        ```
        kind: PersistentVolumeClaim
        apiVersion: v1
        metadata:
          name: pvc-strmvol
          namespace: default
        spec:
          # The following configurations must match those of the PV.
          accessModes:
            - ReadOnlyMany
          resources:
            requests:
              storage: 20Gi
          volumeName: pv-strmvol
        ```
        
    2.  Create a PVC.
        
        ```
        kubectl create -f strmvol-pvc-static.yaml
        ```
        
    3.  Check the PVC status.
        
        ```
        kubectl get pvc pvc-strmvol
        ```
        
        The following output shows that a PV is bound to the PVC.
        
        ```
        NAME            STATUS   VOLUME       CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
        pvc-strmvol-2   Bound    pv-strmvol   20Gi       ROX                           <unset>                 16s
        ```
        

## Mount a dynamically provisioned strmvol volume

1.  Create a StorageClass.
    
    1.  Modify the following YAML file and save it as strmvol-sc.yaml.
        
        ```
        apiVersion: storage.k8s.io/v1
        kind: StorageClass
        metadata:
          name: strmvol-test
        parameters:
          # Use the created Secret.
          csi.storage.k8s.io/node-stage-secret-name: strmvol-secret  
          csi.storage.k8s.io/node-stage-secret-namespace: default
          bucket: cnfs-oss-test 
          path: /subpath
          # The strmvol volume can access OSS data only over the internal network.
          url: oss-cn-hangzhou-internal.aliyuncs.com 
          umask: "000"
          directMode: "false"
          resourceLimit: "2c4g"
        provisioner: strmvolplugin.csi.alibabacloud.com
        # To prevent remote data from being deleted, only Retain is supported 
        reclaimPolicy: Retain
        volumeBindingMode: Immediate
        ```
        
        The following table describes the `parameters`:
        
        -   Configure a Secret
            
            **Parameter**
            
            **Required**
            
            **Description**
            
            `csi.storage.k8s.io/node-stage-secret-name`
            
            Required
            
            The name of the Secret that stores the AccessKey information.
            
            `csi.storage.k8s.io/node-stage-secret-namespace`
            
            Required
            
            The namespace of the Secret that stores the AccessKey information.
            
        -   Configure a PV
            
            **Parameter**
            
            **Required**
            
            **Description**
            
            `bucket`
            
            Required
            
            The OSS bucket that you want to mount.
            
            `path`
            
            Optional
            
            The OSS Bucket mount path**,** which represents the directory structure relative to the root file of the bucket when mounting.
            
            **Important**
            
            Select the mount path based on the principle of least privilege.
            
            `url`
            
            Required
            
            The internal endpoint that is used to mount OSS. You can view the internal endpoint on the Bucket page in the OSS console. Common endpoint format:
            
            `http://oss-{{regionName}}-internal.aliyuncs.com` or `https://oss-{{regionName}}-internal.aliyuncs.com`.
            
            **Important**
            
            The internal access endpoint format `vpc100-oss-{{regionName}}.aliyuncs.com` is deprecated. Switch to the new format at the earliest opportunity.
            
            `umask`
            
            Optional
            
            The mask of the default file system permissions after the virtual block device is mounted.
            
            If you want to use 755 as the default file system permission, set umask to 022.
            
            `directMode`
            
            Optional
            
            Specifies whether to enable the direct mode.
            
            -   `"true"`: When you enable the direct mode, prefetching and local data caching are disabled. This mode is suitable for random reading of small files, such as random batch reading of training datasets.
                
            -   `"false"`: By default, the direct mode is disabled. This mode is suitable for general scenarios such as sequential reading of small files and large files. If your business has no obvious data reading features, disable the direct mode.
                
            
            `resourceLimit`
            
            Optional
            
            The maximum resource limit of a node after a virtual block device is mounted.
            
            For example, `"2c4g"` indicates that the virtual block device can use up to 2 vCPUs and 4 GiB of memory from the node.
            
            **Note**
            
            -   The memory is used for data prefetching and local caching. When you enable the direct mode, the required memory is significantly lower than the default value.
                
            -   Operating systems other than Alibaba Cloud Linux 3 have the same upper limit of data reading performance. Therefore, we do not recommend that you use advanced performance configurations. For more information, see [Data reading performance test](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/strmvol-client-performance-stress-test#70345e7bdfaic).
                
            
    2.  Create a StorageClass.
        
        ```
        kubectl create -f strmvol-sc.yaml
        ```
        
2.  Create a PVC.
    
    1.  Modify the following YAML file and save it as strmvol-pvc-dynamic.yaml.
        
        ```
        kind: PersistentVolumeClaim
        apiVersion: v1
        metadata:
          name: pvc-strmvol
          namespace: default
        spec:
          # Only the ReadOnlyMany access mode is supported
          accessModes:
            - ReadOnlyMany
          # Specify a StorageClass
          storageClassName: strmvol-test
          resources:
            requests:
              # The OSS mount target can store up to 16 TiB of data
              storage: 20Gi
        ```
        
    2.  Create a PVC.
        
        ```
        kubectl create -f strmvol-pvc-dynamic.yaml
        ```
        
    3.  Check the PVC status.
        
        ```
        kubectl get pvc pvc-strmvol
        ```
        
        The following output shows that a PV is automatically created by the CSI plug-in and bound to the PVC.
        
        ```
        NAME          STATUS   VOLUME                                         CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
        pvc-strmvol   Bound    strmvol-d8d1d22a-e1d7-4caa-b875-54f378dec769   20Gi       ROX            strmvol-test   <unset>                 3m
        ```
        

### **Step 2: Create an application and mount strmvol volumes**

1.  Create a file named strmvol-test.yaml and copy the following content to the file:
    
    The following YAML example creates a StatefulSet with one pod. The pod requests storage resources through a PVC named `pvc-strmvol` and mounts the volume to the `/data` path.
    
    ```
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: strmvol-test
      namespace: default
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: strmvol-test
      template:
        metadata:
          labels:
            app: strmvol-test
        spec:
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            ports:
            - containerPort: 80
            volumeMounts:
            - name: pvc-strmvol
              mountPath: /data
          volumes:
            - name: pvc-strmvol
              persistentVolumeClaim:
                claimName: pvc-strmvol
    ```
    
2.  Create a StatefulSet and mount a strmvol volume to the StatefulSet.
    
    ```
    kubectl create -f strmvol-test.yaml
    ```
    
3.  Check whether the pod provisioned by the StatefulSet is deployed.
    
    ```
    kubectl get pod -l app=strmvol-test
    ```
    
    Expected output:
    
    ```
    NAME             READY   STATUS    RESTARTS   AGE
    strmvol-test-0   1/1     Running   0          14s
    ```
    
4.  The output indicates that the mount point is a block device and that the application can access OSS data.
    
    ```
    kubectl exec -it strmvol-test-0 -- sh -c "df /data && ls /data"
    ```
    
    A response similar to the following command output is returned:
    
    ```
    Filesystem     1K-blocks  Used Available Use% Mounted on
    /dev/ublkb1        24812 24812         0 100% /data
    <data in OSS mountpath>
    ```
    

## **References**

[Performance testing for strmvol volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/strmvol-client-performance-stress-test)
