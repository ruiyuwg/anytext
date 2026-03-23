This topic describes common issues and solutions for ossfs 2.0 persistent volumes (PVs).

## **Quick navigation**

**Category**

**Question**

Mount

-   [OSS persistent volume mount fails](#bb1df9c5fa28c)
    
-   [How to mount a single file from an OSS bucket using a persistent volume](#c0b7f28da3i75)
    
-   [How to mount an OSS Bucket across different accounts](#98ed6a17e54md)
    
-   [How to use CoreDNS to resolve OSS access endpoints](#dcc61198db1qg)
    
-   [How to use a specific ARN or ServiceAccount for RRSA-based authorization](#d1b53fe277cwx)
    

Scale-out

[Do I need to scale out a volume when the actual storage capacity exceeds the volume's configuration?](#22e669f8carby)

Usage

[How to restart the ossfs 2.0 process](#b8f68af2701wk)

## **Mount**

### **OSS persistent volume mount fails**

**Symptoms**

When you mount an OSS PV using ossfs 2.0, the pod fails to start and a FailedMount error is reported in the pod events.

**Cause**

-   **Cause 1**: The mount fails because the AccessKey lacks the required permissions.
    
-   **Cause 2:** The event log contains the error message `failed to get secret secrets "xxx" is forbidden: User "serverless-xxx" cannot get resource "secrets" in API group "" in the namespace "xxx"`. For applications that run on virtual nodes (ACS pods), if a PersistentVolumeClaim (PVC) uses the nodePublishSecretRef field to specify authentication credentials, the Secret must be in the same namespace as the PVC.
    
-   **Cause 3**: The event log contains the error message `FailedMount /run/fuse.ossfs/xxxxxx/mounter.sock: connect: no such file or directory`. This error occurs because the ossfs 2.0 pod did not start correctly or was deleted unexpectedly.
    
-   **Cause 4**: The OSS Bucket is configured for mirroring-based back-to-origin, and the mount directory has not been synchronized from the source.
    
-   **Cause 5**: The OSS Bucket is configured for static website hosting. When ossfs 2.0 checks the mount directory in OSS, the request is redirected to files such as index.html.
    

**Solutions**

-   **Solution for Cause 1**
    
    -   Verify that the access policy of the RAM user that is used for mounting meets the requirements. For more information, see [Use a statically provisioned ossfs 2.0 volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-oss-volumes-through-ossfs-2-0).
        
    -   Check whether the AccessKey used for mounting has been disabled or rotated.
        
        **Important**
        
        Changes to the AccessKey in the Secret that is specified by the `nodePublishSecretRef` field in the PV do not take effect immediately. You must restart the ossfs 2.0 client pod. For more information about how to restart the client, see [How to restart the ossfs 2.0 process](#b8f68af2701wk).
        
-   **Solution for Cause 2:**
    
    Create the required Secret in the same namespace as the PVC. When you create the new PV, set the `nodePublishSecretRef` field to this Secret. For more information, see [Method 2: Authenticate using a RAM user's AccessKey](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-oss-volumes-through-ossfs-2-0#ab925b0ee64gz).
    
-   **Solution for Cause 3**
    
    1.  Verify that the ossfs 2.0 pod exists.
        
        In the following command, `PV_NAME` specifies the name of the mounted OSS PV, and `NODE_NAME` specifies the name of the node where the application pod that requires the volume is located.
        
        ```
        kubectl -n ack-csi-fuse get pod -l csi.alibabacloud.com/volume-id=<PV_NAME> -owide | grep <NODE_NAME>
        ```
        
        -   If the pod exists but is in an abnormal state, troubleshoot the pod to resolve the issue. Make sure that the pod is in the Running state, and then restart the application pod to trigger a remount.
            
        -   If the pod does not exist, proceed to the next step.
            
    2.  (Optional) Check audit logs or other records to determine whether the pod was deleted unexpectedly.
        
        Common reasons for unexpected deletion include cleanup scripts, node drain operations, and node auto-healing. Adjust your configurations to prevent this issue from recurring.
        
    3.  Check for any remaining VolumeAttachment resources.
        
        ```
        kubectl get volumeattachment | grep <PV_NAME> | grep <NODE_NAME>
        ```
        
    4.  Restart the application pod to trigger a remount and verify that the ossfs 2.0 pod is created successfully.
        
-   **Solution for Cause 4**
    
    You must synchronize the data from the source before you mount the volume. For more information, see [Back-to-origin configurations](/help/en/oss/back-to-origin-configuration-overview).
    
-   **Solution for Cause 5**
    
    You must disable or adjust the static website hosting configuration before you mount the volume. For more information, see [Host a static website](/help/en/oss/user-guide/hosting-static-websites).
    

### **How to mount a single file from an OSS bucket using a persistent volume**

The ossfs 2.0 tool can mount a path from an OSS bucket as a file system in a pod, but it cannot mount a single file directly. To allow a pod to access a specific file in OSS, you can use the subpath option.

For example, to mount the a.txt and b.txt files from the `/subpath` directory of an OSS bucket to two different pods at the `/path/to/file/` path, use the following PV configuration:

```
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-oss
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadOnlyMany
  persistentVolumeReclaimPolicy: Retain
  csi:
    driver: ossplugin.csi.alibabacloud.com
    volumeHandle: pv-oss 
    volumeAttributes:
      bucket: bucket
      path: subpath # The parent path of a.txt and b.txt
      url: "oss-cn-hangzhou.aliyuncs.com"
      fuseType: ossfs2
```

After you create the corresponding PVC, configure the \`volumeMounts\` in the pod as follows:

```
  volumeMounts:
    - mountPath: /path/to/file # The mount path in the pod that corresponds to bucket:/subpath
      name: oss-pvc # Must be the same as the name in Volumes
      subPath: a.txt # Or b.txt. This is the relative path of the file in bucket:/subpath
```

After mounting, the full path to access a.txt in the pod is `/path/to/file/a.txt`, which corresponds to `bucket:/subpath/a.txt`.

For more information, see [Use a statically provisioned ossfs 2.0 volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-oss-volumes-through-ossfs-2-0).

### **How to mount an OSS Bucket across different accounts**

You can use **RRSA-based authorization to mount an OSS Bucket across different accounts**.

> Ensure that your cluster and CSI component versions meet the requirements for RRSA-based authorization.

The following steps describe how to mount a bucket from Account B, where the OSS Bucket resides, to a cluster in Account A, where the cluster resides. Before you create a volume with RRSA-based authorization, you must complete the RAM authorization prerequisites.

1.  In Account B:
    
    1.  Create a RAM role named roleB that trusts Account A. For more information, see [Create a RAM role for a trusted Alibaba Cloud account](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-account).
        
    2.  Grant roleB permissions to access the OSS Bucket that you want to mount.
        
    3.  In the [RAM console](https://ram.console.alibabacloud.com/), go to the details page of roleB and copy its ARN, such as `acs:ram::130xxxxxxxx:role/roleB`.
        
2.  In Account A:
    
    1.  Create a RAM role named roleA for RRSA-based authorization for the application. Set the trusted entity type to OIDC IdP.
        
    2.  Grant roleA permission to assume roleB. For more information, see [1\. Enable RRSA in a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes#93b5a917ddf97) (statically provisioned volume) or [Use a dynamically provisioned ossfs 1.0 volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-oss-volumes#33374311fdkac) (dynamically provisioned volume).
        
        roleA does not need an access policy for OSS. However, it requires an access policy that includes the `sts:AssumeRole` API action, such as the system policy `AliyunSTSAssumeRoleAccess`.
        
3.  Configure the volume in the cluster:
    
    When you create the volume, set the `assumeRoleArn` parameter to the ARN of `roleB`:
    
    -   Statically provisioned volume (PV): In `volumeAttributes`, add:
        
        ```
        assumeRoleArn: <ARN of roleB>
        ```
        
    -   Dynamically provisioned volume (StorageClass): In `parameters`, add:
        
        ```
        assumeRoleArn: <ARN of roleB>
        ```
        

### **How to use CoreDNS to resolve OSS access endpoints**

To point an OSS access endpoint to a domain name inside your cluster, you can configure a specific DNS policy for the pod where ossfs runs. This forces the pod to prioritize the cluster's CoreDNS during mounting.

This feature is supported only in CSI component versions v1.34.2 and later. To upgrade, see [Upgrade the CSI component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).

-   Statically provisioned volume (PV): In the `spec.csi.volumeAttributes` field of the PV, add the `dnsPolicy` field.
    
    ```
    dnsPolicy: ClusterFirstWithHostNet
    ```
    
-   Dynamically provisioned volume (StorageClass): In the `parameters` field of the StorageClass, add the `dnsPolicy` field.
    
    ```
    dnsPolicy: ClusterFirstWithHostNet
    ```
    

### How to use a specific ARN or ServiceAccount for RRSA-based authorization

When you use RRSA for OSS PV authentication, you may have requirements that the default setup cannot meet, such as using a third-party OIDC IdP or a non-default ServiceAccount.

To address this, you can specify the RAM role name using the `roleName` configuration item in the PV. The CSI storage plugin then automatically retrieves the default Role ARN and OIDC Provider ARN. For more customized RRSA-based authorization, you can modify the PV configuration as follows.

> The `roleArn` and `oidcProviderArn` parameters must be configured together. If you set these parameters, you do not need to configure `roleName`.

```
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-oss
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadOnlyMany
  persistentVolumeReclaimPolicy: Retain
  csi:
    driver: ossplugin.csi.alibabacloud.com
    volumeHandle: pv-oss # Must be the same as the PV name.
    volumeAttributes:
      bucket: "oss"
      url: "oss-cn-hangzhou.aliyuncs.com"
      authType: "rrsa"
      fuseType: "ossfs2"
      oidcProviderArn: "<oidc-provider-arn>"
      roleArn: "<role-arn>"
      #roleName: "<role-name>" # After you configure roleArn and oidcProviderArn, roleName becomes invalid.
      serviceAccountName: "csi-fuse-<service-account-name>" 
```

**Parameter**

**Description**

`oidcProviderArn`

The ARN of the OIDC IdP. You can obtain it after you create the OIDC IdP. For more information, see [Manage an OIDC IdP](/help/en/ram/manage-an-oidc-idp).

`roleArn`

The ARN of the RAM role. You can obtain it after you create a RAM role that trusts the OIDC IdP. For an example, see [Example of role-based SSO that uses OIDC](/help/en/ram/implement-oidc-based-sso-from-okta#section-h6p-5la-5wf).

`serviceAccountName`

Optional. The name of the ServiceAccount that the pod for the ossfs container uses. The name must start with csi-fuse- and you must create the ServiceAccount in advance. If this parameter is not set, CSI uses its default maintained ServiceAccount.

## **Scale-out**

### **Do I need to scale out a volume when the actual storage capacity exceeds the volume's configuration?**

OSS does not limit the capacity of a bucket or subdirectory, nor does it provide a capacity quota feature. Therefore, the `.spec.capacity` field of the PV and the `.spec.resources.requests.storage` field of the PVC are ignored and do not take effect. You need only to ensure that the capacity configuration values of the bound PV and PVC are consistent.

If the actual storage capacity exceeds the configuration, normal use is not affected, and you do not need to scale out the volume.

## **Usage**

### **How to restart the ossfs 2.0 process**

**Symptoms**

After you modify the authorization information or the ossfs 2.0 version, the running ossfs 2.0 process is not automatically updated.

**Cause**

-   After an ossfs 2.0 process starts, you cannot dynamically change its configuration, such as authentication credentials. Modifying the configuration requires restarting both the ossfs 2.0 process (the pod named `csi-fuse-ossfs2-*` in the `ack-csi-fuse` namespace) and the corresponding application pods, which causes service interruption. For this reason, CSI does not automatically apply changes to a running ossfs 2.0 process.
    
-   During normal operations, CSI fully manages the lifecycle of an ossfs 2.0 volume. If you manually terminate the pod that runs ossfs 2.0, CSI cannot trigger the automatic recovery or recreation of the volume.
    

**Solution**

**Important**

Restarting the ossfs 2.0 process requires restarting the application pods that use the corresponding OSS PV. Proceed with caution.

1.  Identify the application pods that use the current FUSE pod.
    
    1.  Identify the `csi-fuse-ossfs2-*` pod that you want to change.
        
        Replace `<pv-name>` with the PV name and `<node-name>` with the node name.
        
        ```
        kubectl -n ack-csi-fuse get pod -lcsi.alibabacloud.com/volume-id=<pv-name> -owide | grep <node-name>
        ```
        
    2.  Identify all pods that are mounting this OSS PV.
        
        Replace `<ns>` with the namespace and `<pvc-name>` with the PVC name.
        
        ```
        kubectl -n <ns> describe pvc <pvc-name>
        ```
        
        The expected output contains a Used By field:
        
        ```
        Used By:       oss-static-94849f647-4****
                       oss-static-94849f647-6****
                       oss-static-94849f647-h****
                       oss-static-94849f647-v****
                       oss-static-94849f647-x****
        ```
        
    3.  Find the application pods that are mounted through `csi-fuse-ossfs2-xxxx`. These are the pods that are running on the same node as `csi-fuse-ossfs2-xxxx`.
        
        ```
        kubectl -n <ns> get pod -owide | grep cn-beijing.192.168.XX.XX
        ```
        
        Expected output:
        
        ```
        NAME                         READY   STATUS    RESTARTS   AGE     IP               NODE                         NOMINATED NODE   READINESS GATES
        oss-static-94849f647-4****   1/1     Running   0          10d     192.168.xx.xx    cn-beijing.192.168.xx.xx     <none>           <none>
        oss-static-94849f647-6****   1/1     Running   0          7m36s   192.168.xx.xx    cn-beijing.192.168.xx.xx     <none>           <none>
        ```
        
2.  Restart the application and the ossfs 2.0 process.
    
    Delete all application pods (in the preceding example, `oss-static-94849f647-4****` and `oss-static-94849f647-6****`) at the same time using a command such as `kubectl scale`. When no application pods are using the mount, the `csi-fuse-ossfs2-xxxx` pod is automatically reclaimed. After the number of replicas is restored, the volume is remounted with the new PV configuration, and CSI creates a new `csi-fuse-ossfs2-yyyy` pod.
    
    If you cannot ensure that these pods are deleted at the same time (for example, deleting pods managed by a Deployment, StatefulSet, or DaemonSet immediately triggers a restart), or if the pods can tolerate OSS read and write failures, run the following command to find the volumeattachment resource that corresponds to the volume:
    
    ```
    kubectl get volumeattachment | grep <pv-name> | grep cn-beijing.192.168.XX.XX
    ```
    
    Expected output:
    
    ```
    csi-bd463c719189f858c2394608da7feb5af8f181704b77a46bbc219b**********   ossplugin.csi.alibabacloud.com    <pv-name>                   cn-beijing.192.168.XX.XX    true       12m
    ```
    
    Directly delete the VolumeAttachment. At this point, read and write operations to OSS from the application pod return a `disconnected error`.
    
    Then, restart the application pods one by one. The restarted pods will resume read and write operations to OSS through the new `csi-fuse-ossfs2-yyyy` pod created by CSI.
