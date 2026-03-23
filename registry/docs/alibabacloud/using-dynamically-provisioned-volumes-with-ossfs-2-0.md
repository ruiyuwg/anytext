For applications that require persistent storage or data sharing between pods, you can mount an Object Storage Service (OSS) bucket as an ossfs 2.0 volume using a dynamically provisioned persistent volume (PV). This approach uses a StorageClass as a template to automatically create and bind a PV, which not only simplifies storage management but also allows applications to read and write data in OSS using standard POSIX interfaces, just like a local filesystem.

Compared to [ossfs 1.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs1-0/), [ossfs 2.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-2-0/) excels in sequential read and write performance, making it ideal for leveraging the high bandwidth of OSS.

> For details on performance, see [ossfs 2.0 client performance benchmarks](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs2-0-client-stress-test-performance).

## **Workflow overview**

The following figure and steps describe the main workflow for mounting a dynamically provisioned ossfs 2.0 volume in a Container Service for Kubernetes (ACK) cluster.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0803371671/CAEQThiBgIC4o7an0RkiIGNmYTZmYWMzZTY0ZjQyNmE4NWU5MzE3ZDkxMDFhZjIz5617446_20250901160522.391.svg)

1.  **Choose an authentication method**: Decide whether to use RAM Roles for Service Accounts (RRSA) or a static AccessKey and prepare the necessary credentials.
    
    **Authentication method comparison**
    
    -   [RRSA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services): Provides higher security by using auto-rotating, temporary credentials and supports pod-level permission isolation. This method is suitable for production and multi-tenant environments with high security requirements.
        
        If you use RRSA, first create and authorize a Resource Access Management (RAM) role specifically for OSS access.
        
    -   AccessKey: This method is simple to configure but uses a long-term static key, which poses a security risk if exposed. This method is recommended for testing or development environments only.
        
        If you use AccessKey, first create a RAM user, obtain its AccessKey pair, and store the key pair as a Kubernetes Secret.
        
    
2.  **Create a StorageClass**: Define a storage template that includes the OSS bucket information, mount parameters, and authentication configuration.
    
3.  **Create a PVC**: Request OSS storage resources. This action automatically triggers the dynamic provisioning of a PV based on the specified StorageClass and binds it to the PVC.
    
4.  **Mount the volume in your application**: Mount the PVC as a volume in your container's specified directory.
    

## **Considerations**

-   **Workload suitability**: ossfs 2.0 is designed for **read-only** and **sequential-append** **write** scenarios. For random or concurrent write scenarios, data consistency cannot be guaranteed. We recommend using ossfs 1.0 for these cases.
    
-   **Data safety**: Any modification or deletion of files in an ossfs mount point (either from within the pod or on the host node) is immediately synchronized with the source OSS bucket. To prevent accidental data loss, we recommend enabling [versioning](/help/en/oss/user-guide/overview-78/) for the bucket.
    
-   **Application health checks**: Configure a health check (liveness probe) for pods that use OSS volumes. For example, verify that the mount point is still accessible. If the mount becomes unhealthy, the pod will be automatically restarted to restore connectivity.
    
-   **Multipart upload management**: When uploading large files (> 10 MB), ossfs automatically uses multipart uploads. If an upload is interrupted, incomplete parts will remain in the bucket. [Manually delete these parts](/help/en/oss/user-guide/delete-parts#concept-r3h-c1y-5db) or [configure a lifecycle rule to automatically clean up these parts](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time#concept-y2g-szy-5db) to save storage costs.
    

## **Method 1:** **Authenticate** **using RRSA**

By leveraging RRSA, you can achieve fine-grained, PV-level permission isolation for accessing cloud resources, which significantly reduces security risks. For details, see [Use RRSA to authorize different pods to access different cloud services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#section-t46-s43-us4).

### **Prerequisites**

-   You have an ACK cluster running Kubernetes 1.26 or later. [Manually upgrade the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster) if needed.
    
-   The Container Storage Interface (CSI) plugin version is 1.33.1 or later. To upgrade it, see [Update csi-plugin and csi-provisioner](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
    
    > If you use RRSA in a version earlier than 1.30.4, see [\[Product Changes\] Version upgrade and mounting process optimization of ossfs in CSI](/help/en/ack/product-overview/announcement-on-csi-oss-driver-upgrade) to configure the RAM role authorization.
    
-   You have created [an OSS bucket](/help/en/oss/user-guide/create-a-bucket-4) in the same Alibaba Cloud account as your cluster.
    
    > To mount an OSS bucket across accounts, we recommend using the RRSA authentication method. For details, see [FAQ about ossfs 2.0 volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs2-0-storage-volume-faqs#98ed6a17e54md)
    

### **Step 1: Create a RAM role**

If you have mounted an OSS volume in the cluster using RRSA, skip this step. If this is your first time, follow these steps:

1.  [Enable the RRSA feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#section-ywl-59g-j8h) in the [ACK console](https://cs.console.alibabacloud.com).
    
2.  [Create a RAM role for an OIDC IdP](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-idp#section-mra-74d-14w). This role will be assumed using RRSA.
    
    The following table lists the key parameters for the sample role `demo-role-for-rrsa`:
    
    **Parameter**
    
    **Description**
    
    **Identity Provider Type**
    
    Select **OIDC**.
    
    **Identity Provider**
    
    Select the provider associated with your cluster, such as `ack-rrsa-<cluster_id>`, where `<cluster_id>` is your actual cluster ID.
    
    **Condition**
    
    -   **oidc:iss**: Keep the default value.
        
    -   **oidc:aud**: Keep the default value.
        
    -   **oidc:sub**: Manually add the following condition:
        
        -   **Key**: Select **oidc:sub**.
            
        -   **Operator**: Select **StringEquals**.
            
        -   **Value**: Enter `system:serviceaccount:ack-csi-fuse:csi-fuse-ossfs`.
            
            In this value, `ack-csi-fuse` is the namespace where the ossfs client is located, and cannot be customized. `csi-fuse-ossfs` is the service account name, and can be changed as needed.
            
            > For more information about how to modify the service account name, see [FAQ about ossfs 2.0 volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs2-0-storage-volume-faqs#65c4c04f5fvuj)
            
    
    **Role Name**
    
    Enter `demo-role-for-rrsa`.
    

### **Step 2: Grant permissions to the demo-role-for-rrsa role**

1.  Create a custom policy to grant OSS access permissions to the RAM user. For more information, see [Create custom policies](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m).
    
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
        
2.  Optional. If the objects in the OSS bucket are encrypted by using a specified customer master key (CMK) in Key Management Service (KMS), you need to grant KMS access permissions to the RAM user. For more information, see [Encryption](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/encrypt-an-oss-volume#section-jjo-z1l-4p6).
    
3.  Grant the required permissions to the demo-role-for-rrsa role. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    
    **Note**
    
    If you want to use an existing RAM role that has OSS access permissions, you can modify the trust policy of the RAM role. For more information, see [Use an existing RAM role and grant the required permissions to the RAM role](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#p-2pl-vki-tcf).
    

### **Step 3: Create a StorageClass**

Create a StorageClass to use as a template for dynamically provisioning PVs.

1.  Create a file named `ossfs2-sc-rrsa.yaml` with the following content:
    
    ```
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: ossfs2-sc  # The name of the StorageClass.
    parameters:
      bucket: cnfs-oss-test  # The name of the bucket.
      path: /subpath  # The subdirectory to mount. If left empty, the root directory is mounted.
      url: oss-cn-hangzhou-internal.aliyuncs.com  # The endpoint of the region where the OSS Bucket is located.
      authType: rrsa
      roleName: demo-role-for-rrsa  # The RAM role created earlier.
      fuseType: ossfs2
      volumeAs: sharepath
      otherOpts: "-o close_to_open=false"
    provisioner: ossplugin.csi.alibabacloud.com  # This value is fixed.
    reclaimPolicy: Retain  # The reclaim policy for the dynamically provisioned PV. Only Retain is supported, which means the PV and the data in the OSS Bucket are not deleted when the PVC is deleted.
    volumeBindingMode: Immediate  # The volume binding mode. OSS volumes do not require zone-based node affinity, so you can use the default value Immediate.
    ```
    
    The following table describes the parameters in the `parameters` field:
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    `bucket`
    
    Yes
    
    The name of the OSS bucket to mount.
    
    `path`
    
    Yes
    
    The base path within the bucket. When `volumeAs` is set to `sharepath`, each dynamically provisioned PV is assigned a unique subdirectory under this path, such as `/ack/<pv-name>`.
    
    `url`
    
    Yes
    
    The access [endpoint](/help/en/oss/user-guide/regions-and-endpoints) for the OSS bucket.
    
    -   Use an internal endpoint if your cluster nodes and the bucket are in the same region, or if a Virtual Private Cloud (VPC) connection is established.
        
    -   Use a public endpoint if the mount node and the bucket are in different regions.
        
    
    The following are common formats for different access endpoints:
    
    -   Internal: `http://oss-{{regionName}}-internal.aliyuncs.com` or `https://oss-{{regionName}}-internal.aliyuncs.com`.
        
        > The internal access endpoint format `vpc100-oss-{{regionName}}.aliyuncs.com` is deprecated. Switch to the new format as soon as possible.
        
    -   Public: `http://oss-{{regionName}}.aliyuncs.com` or `https://oss-{{regionName}}.aliyuncs.com`.
        
    
    `fuseType`
    
    Yes
    
    Specifies the client to use for the mount. Must be set to `ossfs2` to use the ossfs 2.0 client.
    
    `authType`
    
    Yes
    
    Set to `rrsa` to declare that the RRSA authentication method is used.
    
    `roleName`
    
    Yes
    
    Set to the name of the RAM role you created or modified.
    
    To assign different permissions for different PVs, create a separate RAM role for each permission set. Then, in each PV's definition, use the `roleName` parameter to associate it with the corresponding role.
    
    `volumeAs`
    
    No
    
    Defines how the PV is provisioned. `sharepath` indicates that each PV creates a separate subdirectory in the directory specified by `path`.
    
    `otherOpts`
    
    No
    
    Additional mount options passed to the OSS volume, specified as a string of space-separated flags in the format `-o *** -o ***`. For example, `-o close_to_open=false`.
    
    > The `close-to-open` option controls metadata consistency. When set to `false` (default), metadata is cached to improve performance for small file reads. When set to `true`, the client fetches fresh metadata from OSS by sending a `GetObjectMeta` request every time a file is opened, ensuring real-time consistency at the cost of increased latency and API calls.
    
    For more optional parameters, see [ossfs 2.0 mount options](/help/en/oss/developer-reference/description-of-mount-options).
    
2.  Apply the StorageClass.
    
    ```
    kubectl create -f ossfs2-sc-rrsa.yaml
    ```
    
3.  Check the StorageClass status.
    
    ```
    kubectl get sc ossfs2-sc
    ```
    
    Expected output:
    
    ```
    NAME        PROVISIONER                      RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
    ossfs2-sc   ossplugin.csi.alibabacloud.com   Retain          Immediate                                  10s
    ```
    

### **Step 4: Create a PVC**

Create a PVC to request storage resources from the StorageClass. This operation triggers the automatic creation of the underlying PV.

1.  Create a file named `ossfs2-pvc-dynamic.yaml` with the following content:
    
    ```
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: pvc-ossfs2 # The name of the PVC.
      namespace: default
    spec:
      accessModes:
        - ReadWriteMany
      resources:
        requests:
          storage: 20Gi
      storageClassName: ossfs2-sc   # The StorageClass created earlier.
    ```
    
2.  Create the PVC.
    
    ```
    kubectl create -f ossfs2-pvc-dynamic.yaml
    ```
    
3.  Verify that the PVC is `Bound`, indicating that it is bound to the automatically created PV.
    
    ```
    kubectl get pvc pvc-ossfs2
    ```
    
    Expected output:
    
    ```
    NAME        STATUS   VOLUME                   CAPACITY   ACCESS MODES   STORAGECLASS     AGE
    pvc-ossfs2  Bound    d-bp17y03tpy2b8x******   20Gi       RWX            ossfs2-sc        25s
    ```
    

### **Step 5: Create an application and mount the volume**

You can now mount the storage resources to which the PVC is bound in your application.

1.  Create a file named `ossfs2-test.yaml` that has the following content.
    
    > The following YAML template creates a StatefulSet that consists of one pod. The pod requests storage resources through a PVC named `pvc-ossfs2` and mounts the volume to the `/data` path.
    
    **YAML template**
    
    ```
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: ossfs2-test
      namespace: default
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: ossfs2-test
      template:
        metadata:
          labels:
            app: ossfs2-test
        spec:
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            ports:
            - containerPort: 80
            volumeMounts:
            - name: pvc-ossfs2
              mountPath: /data
          volumes:
            - name: pvc-ossfs2
              persistentVolumeClaim:
                claimName: pvc-ossfs2
    ```
    
2.  Deploy the application.
    
    ```
    kubectl create -f ossfs2-test.yaml
    ```
    
3.  Check the deployment status of the pod.
    
    ```
    kubectl get pod -l app=ossfs2-test
    ```
    
    Expected output:
    
    ```
    NAME            READY   STATUS    RESTARTS   AGE
    ossfs2-test-0   1/1     Running   0          2m
    ```
    
4.  Verify that you can read from and write to the mount point.
    
    ```
    # Write a test file to the mount target.
    kubectl exec -it ossfs2-test-0 -- touch /data/test.txt
    # View the content of the mount target.
    kubectl exec -it ossfs2-test-0 -- ls /data
    ```
    
    The output should show the `test.txt` file you created, indicating that the volume is mounted and you have write permissions.
    

## **Method 2:** **Authenticate using an AccessKey**

ACK supports authenticating OSS volume mounts by storing a static AccessKey in a Kubernetes Secret. This approach is suitable for scenarios where a specific application requires long-term, fixed access permissions.

-   If the AccessKey referenced by the PV is revoked or its permissions are changed, any application using the volume will immediately lose access and encounter permission errors. To restore access, update the credentials in the Secret, then restart the application's pods to force a remount. This process causes a brief service interruption and should only be performed during a scheduled maintenance window.
    
-   To avoid the downtime associated with manual key rotation, we strongly recommend [using the RRSA authentication method](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes#93b5a917ddf97) instead.
    

### **Prerequisites**

-   You have an ACK cluster with CSI V1.33.1 or later installed. To upgrade the component, see [Update csi-plugin and csi-provisioner](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
    
-   You have [an OSS bucket](/help/en/oss/user-guide/create-a-bucket-4) in the same Alibaba Cloud account as your cluster.
    
    > To mount an OSS bucket across accounts, we recommend using RRSA for authentication. For details, see [FAQ about ossfs 2.0 volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs2-0-storage-volume-faqs#98ed6a17e54md)
    

### **Step 1: Create a RAM user with OSS access permissions and obtain an AccessKey pair**

#### **Create a RAM user and grant permissions**

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
    

#### Create a Secret to store the AccessKey credentials

Run the following command to create a Secret for OSS authentication. Replace `akId` and `akSecret` with your actual credentials.

```
kubectl create -n default secret generic oss-secret --from-literal='akId=xxxxxx' --from-literal='akSecret=xxxxxx'
```

### **Step 2: Create a StorageClass**

1.  Create a file named `ossfs2-sc.yaml` with the following content:
    
    ```
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: ossfs2-sc
    parameters:
      # Use the Secret created in the preparations.
      csi.storage.k8s.io/node-publish-secret-name: oss-secret  
      csi.storage.k8s.io/node-publish-secret-namespace: default
      fuseType: ossfs2
      bucket: cnfs-oss-test # The name of the bucket.
      path: /subpath  # The subdirectory to mount. If left empty, the root directory is mounted.
      url: oss-cn-hangzhou-internal.aliyuncs.com  # The endpoint of the region where the OSS Bucket is located.
      otherOpts: "-o close_to_open=false"
    provisioner: ossplugin.csi.alibabacloud.com  # This value is fixed.
    reclaimPolicy: Retain  # The reclaim policy for the dynamically provisioned PV. Only Retain is supported, which means the PV and the data in the OSS Bucket are not deleted when the PVC is deleted.
    volumeBindingMode: Immediate  # The volume binding mode. OSS volumes do not require zone-based node affinity, so you can use the default value Immediate.
    ```
    
    The following table describes the parameters in the `parameters` field:
    
    -   Secret configuration
        
        **Parameter**
        
        **Required**
        
        **Description**
        
        `csi.storage.k8s.io/node-publish-secret-name`
        
        Yes
        
        The name of the Secret that stores the AccessKey information.
        
        `csi.storage.k8s.io/node-publish-secret-namespace`
        
        Yes
        
        The namespace where the Secret storing the AccessKey information is located.
        
    -   Volume configuration
        
        **Parameter**
        
        **Required**
        
        **Description**
        
        `fuseType`
        
        Yes
        
        Specifies the client to use for the mount. Must be set to `ossfs2` to use the ossfs 2.0 client.
        
        `bucket`
        
        Yes
        
        The name of the OSS bucket you want to mount.
        
        `path`
        
        No
        
        The mount path of the OSS bucket**,** which represents the directory structure relative to the bucket root.
        
        `url`
        
        Yes
        
        The endpoint of the OSS bucket you want to mount. You can retrieve the endpoint from the Overview page of the bucket in the OSS console.
        
        -   If the bucket is mounted to a node in the same region as the bucket or the bucket can be connected to the node through a virtual private cloud (VPC), use the internal endpoint of the bucket.
            
        -   If the bucket is mounted to a node in a different region, use the public endpoint of the bucket.
            
        
        Public endpoints and internal endpoints have different formats:
        
        -   Format of internal endpoints: `http://oss-{{regionName}}-internal.aliyuncs.com` or `https://oss-{{regionName}}-internal.aliyuncs.com`.
            
        -   Format of public endpoints: `http://oss-{{regionName}}.aliyuncs.com` or `https://oss-{{regionName}}.aliyuncs.com`.
            
        
        **Important**
        
        The `vpc100-oss-{{regionName}}.aliyuncs.com` format for internal endpoints is deprecated.
        
        `otherOpts`
        
        No
        
        Enter custom parameters for the OSS volume in the format `-o *** -o ***`, for example, `-o close_to_open=false`.
        
        > **close-to-open**: Disabled by default. If enabled, the system sends a GetObjectMeta request to OSS each time a file is opened to get the latest metadata. This ensures metadata is always up-to-date. However, in scenarios with many small file reads, frequent metadata queries can significantly increase access latency.
        
        For more optional parameters, see [ossfs 2.0 mount options](/help/en/oss/developer-reference/description-of-mount-options).
        
2.  Create the StorageClass.
    
    ```
    kubectl create -f ossfs2-sc.yaml
    ```
    

### **Step 3: Create a PVC**

Create a PVC to request storage resources from the StorageClass. This operation triggers the automatic creation of the underlying PV.

1.  Create a file named `ossfs2-pvc-dynamic.yaml` with the following content:
    
    ```
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: pvc-ossfs2 # The name of the PVC.
      namespace: default
    spec:
      accessModes:
        - ReadWriteMany
      resources:
        requests:
          storage: 20Gi
      storageClassName: ossfs2-sc   # The StorageClass created earlier.
    ```
    
2.  Create the PVC.
    
    ```
    kubectl create -f ossfs2-pvc-dynamic.yaml
    ```
    
3.  Verify that the PVC is `Bound`, indicating that it is bound to the automatically created PV.
    
    ```
    kubectl get pvc pvc-ossfs2
    ```
    
    Expected output:
    
    ```
    NAME        STATUS   VOLUME                   CAPACITY   ACCESS MODES   STORAGECLASS     AGE
    pvc-ossfs2  Bound    d-bp17y03tpy2b8x******   20Gi       RWX            ossfs2-sc        25s
    ```
    

### **Step 4: Create an application and mount the volume**

You can now mount the storage resources to which the PVC is bound in your application.

1.  Create a file named `ossfs2-test.yaml` that has the following content.
    
    > The following YAML template creates a StatefulSet that consists of one pod. The pod requests storage resources through a PVC named `pvc-ossfs2` and mounts the volume to the `/data` path.
    
    **YAML template**
    
    ```
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: ossfs2-test
      namespace: default
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: ossfs2-test
      template:
        metadata:
          labels:
            app: ossfs2-test
        spec:
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            ports:
            - containerPort: 80
            volumeMounts:
            - name: pvc-ossfs2
              mountPath: /data
          volumes:
            - name: pvc-ossfs2
              persistentVolumeClaim:
                claimName: pvc-ossfs2
    ```
    
2.  Deploy the application.
    
    ```
    kubectl create -f ossfs2-test.yaml
    ```
    
3.  Check the deployment status of the pod.
    
    ```
    kubectl get pod -l app=ossfs2-test
    ```
    
    Expected output:
    
    ```
    NAME            READY   STATUS    RESTARTS   AGE
    ossfs2-test-0   1/1     Running   0          2m
    ```
    
4.  Verify that you can read from and write to the mount point.
    
    ```
    # Write a test file to the mount target.
    kubectl exec -it ossfs2-test-0 -- touch /data/test.txt
    # View the content of the mount target.
    kubectl exec -it ossfs2-test-0 -- ls /data
    ```
    
    The output should show the `test.txt` file you created, indicating that the volume is mounted and you have write permissions.
    

## **Apply in production**

**Category**

**Best practices**

Security and permissions

-   **Prefer RRSA for authentication**: It provides temporary, auto-rotating credentials through OpenID Connect (OIDC) and Security Token Service (STS) and enables fine-grained, pod-level permission isolation, significantly reducing the risk of credential leakage.
    
-   **Follow the principle of least privilege**: When creating RAM roles or users, grant only the minimum permissions required for the application to function.
    

Performance and cost

-   **Optimize mount options (**`**otherOpts**`**)**:
    
    -   Metadata caching (`-o close_to_open=false`): This is the default behavior. It caches file metadata, which reduces latency and API call costs, making it ideal for workloads that read many small files.
        
    -   Real-time metadata (`-o close_to_open=true`): Use this only if another system frequently updates files in OSS and your Pod needs to see those changes immediately. This option increases latency and API costs.
        
    
    For more fine-grained performance optimization based on your business scenario, see [ossfs 2.0 Mount Options](/help/en/oss/developer-reference/description-of-mount-options).
    
-   **Understand your workload**:
    
    -   ossfs 2.0 is best for read-heavy and append-only write patterns that do not rely on full POSIX-based APIs, such as AI training, inference, big data processing, and autonomous driving.
        
    -   ossfs 2.0 is **not suitable** for random-write workloads that require frequent modification of file content, such as databases or collaborative editing applications.
        
-   **Clean up incomplete uploads:** If your application frequently aborts large file uploads, configure a lifecycle rule on your OSS bucket to automatically delete incomplete multipart uploads on a regular basis. This will prevent unmerged parts from accumulating and incurring unnecessary storage costs.
    
-   **Use an internal endpoint**: If your cluster and OSS bucket are in the same region, always use the internal endpoint to avoid public data transfer costs and reduce network latency.
    

O&M management

-   **Configure** [**health checks**](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/recommended-configurations-for-high-reliability#1ab4ed604bn91): Configure a liveness probe in your application pods to check the availability of the mount point. If the mount fails, Kubernetes will automatically restart the pod, triggering a remount.
    
-   **Set up monitoring and alerting**: Use [container storage monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-plugin-to-monitor-storage-resources-at-the-node-side) to track volume performance and capacity, and configure alerts to proactively identify issues
    

## **FAQ**

-   [FAQ about ossfs 2.0 volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs2-0-storage-volume-faqs)
    
-   [Storage troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-troubleshooting-1)
    
-   [FAQ about CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-csi)
