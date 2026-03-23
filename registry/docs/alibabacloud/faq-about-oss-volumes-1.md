This topic describes common issues and solutions when you use ossfs 1.0 volumes.

## **Issue navigation**

**Type**

**Issue**

Mounting

-   [OSS volume mount time is extended](#section-hj8-ax9-t7i)
    
-   [OSS volume mount permission issues](#section-x2l-anl-0qz)
    
-   [OSS volume mount failure](#section-vzb-se7-78u)
    
-   [How do I mount only a specific file in OSS using an OSS volume?](#section-emh-32n-fih)
    
-   [How do I use specified ARNs or a ServiceAccount for RRSA authentication?](#65c4c04f5fvuj)
    
-   [How do I mount an OSS Bucket across accounts?](#98ed6a17e54md)
    
-   [How do I enable exclusive mount mode after ossfs is containerized?](#e8b96389ad21s)
    
-   [An exception occurs when you mount an OSS volume using subpath or subpathExpr](#455ea1d6f2659)
    

Usage

-   [Access to an OSS Bucket through an OSS volume is slow](#section-atz-t7c-32l)
    
-   [File size is 0 in the OSS console](#section-x3m-odc-pqm)
    
-   [An application reports the "Transport endpoint is not connected" error when accessing a mount target](#3356809b31x49)
    
-   [An application reports the "Input/output error" error when accessing a mount target](#fecd7256a3u6q)
    
-   [A directory is displayed as a file object after being mounted](#section-bwq-m47-uvj)
    
-   [Many abnormal requests are monitored on the OSS server](#8d700b405dwui)
    
-   [The Content-Type metadata of file objects written through an OSS volume is always application/octet-stream](#b707dfe1e0mmx)
    
-   [The "Operation not supported" or "Operation not permitted" error is returned when you create a hard link](#f98acf0ad8c51)
    
-   [How do I view the records of access to OSS through an OSS volume?](#55e7342c5e7z3)
    
-   [How do I restart the ossfs process in shared mount mode?](#554e496c0at2c)
    
-   [How do I check the ossfs version used to mount an OSS volume?](#cf6198b7dcxfx)
    

Scaling

[Do I need to scale out a volume when the actual storage capacity exceeds the volume's configuration?](#bdca5d2e771t0)

Uninstall

[Unmounting a statically provisioned OSS volume fails and the pod remains in the Terminating state](#7a836056092bn)

## **Mounting**

### **OSS volume mount time is extended**

**Symptom**

The OSS volume mount time increases.

**Cause**

If the following conditions are met, kubelet runs the chmod or chown operation during the volume mount process. This increases the mount time.

-   The `AccessModes` in the PV and PVC is set to `ReadWriteOnce`.
    
-   The `securityContext.fsgroup` is configured in the application template.
    

**Solution**

-   The ossfs mount tool lets you use parameters to modify the UID, GID, and mode of files within its mount target.
    
    **Parameter**
    
    **Description**
    
    **uid**
    
    Specifies the UID of the user who owns the subdirectories and files in the mount directory.
    
    **gid**
    
    Specifies the GID of the user who owns the subdirectories and files in the mount directory.
    
    **umask**
    
    Sets the permission mask for subdirectories and files in the mount directory. This parameter is used in a way similar to mp\_umask, but it does not depend on the allow\_other configuration item.
    
    After the configuration is complete, delete the fsgroup parameter from securityContext.
    
-   For Kubernetes clusters of version 1.20 or later, in addition to the solutions above, you can also configure fsGroupChangePolicy to OnRootMismatch. This ensures that the `chmod` or `chown` operations are executed only on the first startup, and subsequent mount times return to normal. For more information about fsGroupChangePolicy, see [Configure a Security Context for a Pod or Container](https://kubernetes.io/zh/docs/tasks/configure-pod-container/security-context/#%E4%B8%BA-pod-%E9%85%8D%E7%BD%AE%E5%8D%B7%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90%E5%92%8C%E5%B1%9E%E4%B8%BB%E5%8F%98%E6%9B%B4%E7%AD%96%E7%95%A5).
    

### **OSS volume mount permission issues**

When you perform operations in the following scenarios, you may receive the **Permission Denied or Operation not permitted** error.

#### **Scenario 1: The client has insufficient permissions to access OSS**

**Cause**

The RAM user or RAM role used by the OSS volume has insufficient permissions. For example, access is blocked by an OSS bucket policy, or the `Resource` field of the RAM authorization policy does not include the full mount path.

**Solution**

1.  Check and correct the OSS bucket policy:
    
    Make sure that the bucket policy does not block access to the following API operations: ListObjects, GetObject, PutObject, DeleteObject, AbortMultipartUpload, and ListMultipartUploads. For more information, see [Bucket Policy](/help/en/oss/user-guide/oss-bucket-policy/).
    
2.  Check and correct the RAM authorization policy:
    
    Make sure that the `Action` field in the policy of the RAM user or role used by the OSS volume includes the necessary permissions listed in the previous step.
    
    To restrict permissions to a specific subdirectory (for example, path/) of a bucket, you must grant permissions on both the directory itself (path/) and all its contents (path/\*).
    
    The following code provides an example.
    
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
                    "acs:oss:*:*:mybucket/path",
                    "acs:oss:*:*:mybucket/path/*"
                ]
            }
        ],
        "Version": "1"
    }
    ```
    

#### **Scenario 2: The "Permission Denied" error is reported when you access the mount directory**

**Cause**

By default, ossfs mounts the volume as the Linux root user with permissions set to 700. When a container process runs as a non-root user, the permissions are insufficient.

**Solution**

Add configuration items to modify the permissions of the root mount directory.

**Parameter**

**Description**

**allow\_other**

Sets the permissions of the mount directory to 777.

**mp\_umask**

Sets the permission mask for the mount directory. This option takes effect only when the `allow_other` option is set. The default value is 000. For example:

-   To set the permissions of the mount directory to 770, add `-o allow_other -o mp_umask=007`.
    
-   To set the permissions of the mount directory to 700, add `-o allow_other -o mp_umask=077`.
    

#### **Scenario 3: The "Permission Denied" error is reported when you access files uploaded using other methods such as ossutil, the OSS console, or an SDK**

**Cause**

Files uploaded using other methods have default permissions of 640 in ossfs. When a container process runs as a non-root user, the permissions are insufficient.

**Solution**

Use the root user to run the chmod command to modify the permissions of the object file. Alternatively, use the following configuration items to modify the permissions of subdirectories and files in the mount directory.

**Parameter**

**Description**

**umask**

Sets the permission mask for subdirectories and files in the mount directory. This parameter is used in a way similar to mp\_umask, but it does not depend on the allow\_other configuration item.

The umask parameter can modify the permissions of files only in the current ossfs instance. The changes do not persist after remounting and are not visible to other ossfs processes. For example:

-   After you configure `-o umask=022`, you can use the `stat` command to view a file uploaded through the OSS console. The permissions are 755. If you remove the `-o umask=022` configuration and mount again, the permissions revert to 640.
    
-   If a container process running as the root user is configured with `-o umask=133`, and you use the chmod command to set a file's permissions to 777, the `stat` command still shows the file permissions as 644. If you remove the `-o umask=133` configuration and mount again, the permissions change to 777.
    

#### **Scenario 4: Using different containers to read, write, and run files created by other containers**

**Cause**

Files created in ossfs have default permissions of 644. Configuring the `fsGroup` field in `securityContext`, or running chmod or chown on a file after creation, can change the permissions or owner. When a process in another container operates on the file as a different user, a permission issue may occur.

**Solution**

Run the `stat` command on the object file to check its permissions. If the permissions are insufficient, use the root user to run the chmod command to modify the permissions of the object file.

The solutions for the preceding three scenarios involve increasing the permissions of directories or files to resolve the issue of insufficient permissions for the current container process user. You can also resolve this issue by modifying the user who owns the subdirectories and files in the ossfs mount directory.

If you specify a user to run the container when you build the container image, or if the `securityContext.runAsUser` and `securityContext.runAsGroup` fields in the application template are not empty, the application's container process runs as a non-root user.

Use the following configuration items to modify the UID and GID of the subdirectories and files in the ossfs mount directory to match the container process user.

**Parameter**

**Description**

**uid**

Specifies the UID of the user who owns the subdirectories and files in the mount directory.

**gid**

Specifies the GID of the user who owns the subdirectories and files in the mount directory.

For example, if the process ID for the container that accesses OSS is `uid=1000(biodocker)`, `gid=1001(biodocker)`, and `groups=1001(biodocker)`, you need to configure `-o uid=1000` and `-o gid=1001`.

#### **Scenario 5: A secret is used to store AccessKey information for an OSS mount, and the secret is specified in the PV through the** `**nodePublishSecretRef**` **field. The original AccessKey is revoked due to rotation or other reasons, and the updated AccessKey in the secret does not take effect**

**Cause**

An OSS volume is a FUSE file system mounted using the ossfs tool. After a successful mount, the AccessKey information cannot be updated. Applications that have already mounted the OSS volume still use the original AccessKey to send requests to the OSS server.

**Solution**

To use the new AccessKey, you must update the secret and remount the volume. For non-containerized versions or containerized versions with exclusive mount mode enabled, you need only to restart the application pod to trigger an ossfs restart. For more information, see [How do I restart the ossfs process in shared mount mode?](#554e496c0at2c).

#### **Scenario 6: The "Operation not permitted" error is returned when you perform a hard link operation**

**Cause**

OSS volumes do not support hard link operations. In earlier versions of the Container Storage Interface (CSI), the error returned for a hard link operation was **Operation not permitted**.

**Solution**

Modify your application to avoid hard link operations when you use OSS volumes. If your application must use hard link operations, we recommend that you switch to a different storage type.

#### **Scenario 7: Insufficient read and write permissions when you mount an OSS volume using subpath or subpathExpr**

**Cause**

The application container that runs as a non-root user does not have permissions on the files in the `/path/subpath/in/oss/` directory. The default permission is 640. When you mount an OSS volume using subpath, the actual directory mounted by ossfs on the OSS server is the path directory defined in the PV, which is `/path` in the preceding example, not `/path/subpath/in/oss/`. The allow\_other or mp\_umask mount option takes effect only for the `/path` directory. The `/path/subpath/in/oss/` directory, as a subdirectory, still has the default permission of 640.

**Solution**

Use the umask configuration item to modify the default permissions of the subdirectory. For example, `-o umask=000` changes the default permissions to 777.

### **OSS volume mount failure**

**Symptom**

The OSS volume fails to mount, the pod cannot start, and the event indicates FailedMount.

**Cause**

-   **Cause 1**: Earlier versions of ossfs do not support mounting to a directory that does not exist in a bucket. The mount fails because the specified mount directory does not exist.
    
    **Important**
    
    A subdirectory visible in the OSS console may not actually exist on the server. The result returned by ossutil or the OSS API prevails. For example, if you directly create the `/a/b/c/` directory, `/a/b/c/` is a separate directory object, but the `/a/` and `/a/b/` directory objects do not actually exist. Similarly, if you upload files to `/a/*`, `/a/b` and `/a/c` are separate file objects, but the `/a/` directory object does not exist.
    
-   **Cause 2:** The mount fails because the AccessKey or the role information used by RRSA is incorrect or the permissions are insufficient.
    
-   **Cause 3**: Access from the application's runtime environment is blocked by the OSS bucket policy.
    
-   **Cause 4:** The event contains `failed to get secret secrets "xxx" is forbidden: User "serverless-xxx" cannot get resource "secrets" in API group "" in the namespace "xxx"`. For applications created on virtual nodes (ACS Pods), when the PVC needs to specify authentication information through the nodePublishSecretRef field, the secret must be in the same namespace as the PVC.
    
-   **Cause 5**: If the CSI version is 1.30.4 or later, the pod where ossfs is located runs in the `ack-csi-fuse` namespace. During mounting, CSI first starts the pod where ossfs is located, and then sends an RPC request to start the ossfs process in the pod. If the event contains `FailedMount /run/fuse.ossfs/xxxxxx/mounter.sock: connect: no such file or directory`, the cause is that the ossfs pod failed to start or was unexpectedly deleted.
    
-   **Cause 6**: The event contains `Failed to find executable /usr/local/bin/ossfs: No such file or directory`. The cause is that ossfs failed to be installed on the node.
    
-   **Cause 7**: The event contains `error while loading shared libraries: xxxxx: cannot open shared object file: No such file or directory`. The mount fails because the current CSI version of ossfs runs directly on the node, and the operating system lacks some dynamic libraries required for ossfs to run. The following situations can cause this error:
    
    -   You manually installed another version of the ossfs tool on the node, and the tool is not compatible with the current node's operating system.
        
    -   The default version of OpenSSL changed due to an operating system upgrade on the node, for example, from Alibaba Cloud Linux 2 to Alibaba Cloud Linux 3.
        
    -   When ossfs runs on a node, it does not support operating systems other than CentOS, Alibaba Cloud Linux, ContainerOS, and Anolis OS.
        
    -   On a node that meets the operating system requirements, you deleted the default dynamic libraries required for ossfs to run, such as FUSE, cURL, and xml2, or changed the default version of OpenSSL.
        
-   **Cause 8**: When you mount a subdirectory of an OSS bucket, the AccessKey or the role used by RRSA is granted permissions only on the subdirectory. This causes the mount to fail. The ossfs pod log contains both `403 AccessDenied` and `404 NoSuchKey` errors.
    
    When ossfs starts, it automatically performs permission verification and connectivity checks on the OSS bucket. When the mount target is an OSS subdirectory, ossfs versions earlier than 1.91.5 first try to access the root directory of the bucket. If the access fails, it retries to access the subdirectory. With full read-only permissions on the bucket, newer versions of ossfs allow mounting to a subdirectory that does not exist in the OSS bucket.
    
    Therefore, if the AccessKey or the role used by RRSA is granted permissions only on the subdirectory, a `403 AccessDenied` error is reported during the initial verification. If the subdirectory does not exist, a `404 NoSuchKey` error is reported and the process exits abnormally, which causes the mount to fail.
    
-   **Cause 9**: The bucket is configured with mirroring-based back-to-origin, and the mount directory is not synchronized from the origin.
    
-   **Cause 10**: The bucket is configured for static website hosting. When ossfs checks the mount directory on the OSS side, the request is forwarded to files such as index.html.
    

**Solution**

-   **Solution for Cause 1:**
    
    Check whether the subdirectory exists on the OSS server.
    
    Assume the mount path of the PV is `sub/path/`. You can use the [stat (view bucket and object information)](/help/en/oss/developer-reference/stat) command to query the object with `objectname` as `sub/path/`, or use the [HeadObject](https://api.alibabacloud.com/api/Oss/2019-05-17/HeadObject?sdkStyle=dara) OpenAPI operation to query the object with `key` as `sub/path/`. A 404 response confirms that the subdirectory does not exist on the server.
    
    -   You can manually create the missing bucket or subdirectory using tools such as ossutil, an SDK, or the OSS console, and then remount.
        
    -   ossfs 1.91 and later versions do not require the mount directory to exist. You can also resolve this issue by upgrading the ossfs version. For more information, see [New features and performance stress testing of ossfs 1.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-of-new-functions-and-performance-pressure-measurement-of-ossfs-version-1-91-and-above#21e93976c2l12). If the mount still fails after the upgrade, see [Cause 6](#3f935f302djgr) in this topic.
        
-   **Solution for Cause 2:**
    
    -   Make sure that the policy of the RAM user or RAM role used for mounting includes the permissions listed in [Step 2: Grant permissions to the demo-role-for-rrsa role](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes#5b3dc8bbf55jb).
        
    -   Confirm the file system permissions of the root mount path and the subpath. For more information, see Scenarios 2 and 7 in [OSS volume mount permission issues](#section-x2l-anl-0qz).
        
    -   For volumes mounted using RAM user AccessKey authentication, confirm whether the AccessKey used for mounting has been disabled or rotated. For more information, see Scenario 5 in [OSS volume mount permission issues](#section-x2l-anl-0qz).
        
    -   For volumes mounted using RRSA authentication, confirm whether a correct trust policy is configured for the RAM role. For information about how to configure a trust policy, see [Step 1: Create a RAM role](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes#94c3526e03btf). By default, the trusted ServiceAccount is csi-fuse-ossfs in the ack-csi-fuse namespace, not the ServiceAccount used by the application.
        
        **Important**
        
        This mount method supports only ACK managed clusters and ACK Serverless clusters that run Kubernetes 1.26 or later and have Container Storage Interface (CSI) 1.30.4 or later installed. If RRSA is enabled for your cluster and a CSI version earlier than 1.30.4 is installed in the cluster, refer to [\[Product Changes\] Version upgrade and mounting process optimization of ossfs in CSI](/help/en/ack/product-overview/announcement-on-csi-oss-driver-upgrade) to grant permissions to the RAM role used by your cluster.
        
-   **Solution for Cause 3:**
    
    Check and correct the OSS bucket policy. For more information, see Scenario 1 in [OSS volume mount permission issues](#section-x2l-anl-0qz).
    
-   **Solution for Cause 4:**
    
    Create the required secret in the same namespace as the PVC. When you create a new PV, point the `nodePublishSecretRef` to this secret. For more information, see [Mount a volume using RAM user AccessKey authentication](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes#29dd65f82fgm4).
    
-   **Solution for Cause 5:**
    
    1.  Run the following command to confirm that the ossfs pod exists. In the command, `PV_NAME` is the name of the mounted OSS PV, and `NODE_NAME` is the name of the node where the application pod that needs to mount the volume is located.
        
        ```
        kubectl -n ack-csi-fuse get pod -l csi.alibabacloud.com/volume-id=<PV_NAME> -owide | grep <NODE_NAME>
        ```
        
        If the pod exists and its status is not \`Running\`, troubleshoot the cause of the abnormality. Make sure the pod is running normally, and then restart the application pod to trigger a remount. If the pod does not exist, proceed to the next steps to continue troubleshooting.
        
    2.  (Optional) Check audit logs or other methods to confirm whether the pod was unexpectedly deleted. Common reasons for unexpected deletion include application script cleanup, draining a node, and node self-healing. We recommend that you make relevant adjustments to prevent the issue from recurring.
        
    3.  After you confirm that both the CSI provisioner and CSI plugin are upgraded to 1.30.4 or later:
        
        1.  Run the following steps to check for any remaining VolumeAttachment resources.
            
            ```
            kubectl get volumeattachment | grep <PV_NAME> | grep <NODE_NAME>
            ```
            
            If any exist, delete the VolumeAttachment resource.
            
        2.  Restart the application pod to trigger a remount and confirm that the ossfs pod creation process is normal.
            
-   **Solution for Cause 6:**
    
    1.  We recommend that you upgrade the csi-plugin to version v1.26.2 or later. This version fixes the issue where ossfs installation fails during the initialization of a newly scaled-out node.
        
    2.  Run the following command to try restarting the csi-plugin on the corresponding node, and then check if the pod can start normally.
        
        In the following code, `csi-plugin-****` is the pod name of the csi-plugin on the node.
        
        ```
        kubectl -n kube-system delete pod csi-plugin-****
        ```
        
    3.  If the issue persists after you upgrade or restart the component, log on to the node and run the following command.
        
        ```
        ls /etc/csi-tool
        ```
        
        Partial expected output:
        
        ```
        ... ossfs_<ossfsVer>_<ossfsArch>_x86_64.rpm ...
        ```
        
        -   If the output contains the ossfs RPM Package Manager (RPM) package, execute the following command to check if the pod starts normally.
            
            ```
            rpm -i /etc/csi-tool/ossfs_<ossfsVer>_<ossfsArch>_x86_64.rpm
            ```
            
        -   If the output does not contain the ossfs RPM package, see [Install ossfs 1.0](/help/en/oss/developer-reference/install-ossfs-1-0) to download the latest version.
            
-   **Solution for Cause 7:**
    
    -   If you manually installed the ossfs tool, check whether the tool is compatible with the node's operating system.
        
    -   If you have upgraded the node's operating system, you can run the following command to restart the csi-plugin, update the ossfs version, and then try to mount again.
        
        ```
        kubectl -n kube-system delete pod -l app=csi-plugin
        ```
        
    -   We recommend that you upgrade CSI to version 1.28 or later. When you mount an OSS volume, ossfs runs as a container in the cluster, with no dependencies on the node's operating system.
        
    -   If your cluster cannot be upgraded to a later CSI version, you can switch to a compliant OS or manually install the missing dynamic libraries. Take an Ubuntu node as an example:
        
        -   Use the which command to query the current installation location of ossfs. The default installation path is `/usr/local/bin/ossfs`.
            
            ```
            which ossfs
            ```
            
        -   Use the ldd command to query the missing dynamic library files for ossfs.
            
            ```
            ldd /usr/local/bin/ossfs
            ```
            
        -   Use the apt-file command to query the package to which the missing dynamic library file (such as libcrypto.so.10) belongs.
            
            ```
            apt-get install apt-file
            apt-file update
            apt-file search libcrypto.so.10
            ```
            
        -   Use the apt-get command to install the corresponding package (such as libssl.1.0.0).
            
            ```
            apt-get install libssl1.0.0
            ```
            
-   **Solution for Cause 8:**
    
    -   Recommended solution: Upgrade the CSI version to v1.32.1-35c87ee-aliyun or later.
        
    -   Alternative solution 1: See [Cause 1](#55659aa16cvlf) in this topic to confirm whether the subdirectory exists.
        
    -   Alternative solution 2: To mount subdirectories long-term, we recommend that you expand the permission scope to the entire bucket.
        
-   **Solution for Cause 9:**
    
    You need to synchronize the data from the origin before you mount the volume. For more information, see [Overview of back-to-origin configurations](/help/en/oss/back-to-origin-configuration-overview).
    
-   **Solution for Cause 10:**
    
    You need to disable or adjust the static website hosting configuration before you mount the volume. For more information, see [Static website hosting](/help/en/oss/user-guide/hosting-static-websites).
    

### **How do I mount only a specific file in OSS using an OSS volume?**

An OSS volume uses the ossfs tool to mount a path in OSS as a file system to a pod. ossfs itself does not support mounting files. If you want to make only a specific file from OSS visible in the pod, you can use the subPath method:

Assume you need to mount the a.txt and b.txt files from bucket:/subpath in OSS to two different pods, with the storage paths in the pods being /path/to/file/. You can create the corresponding PV using the following YAML:

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
```

After you create the corresponding PVC, configure the VolumeMounts for the PVC in the pod as follows:

```
  volumeMounts:
    - mountPath: /path/to/file/a.txt # The mount path in the pod that corresponds to bucket:/subpath
      name: oss-pvc # Must be the same as the name in Volumes
      subPath: a.txt # Or b.txt. The relative path of the file in bucket:/subpath
```

After mounting, the full path to access a.txt in the pod is `/path/to/file/a.txt`, which actually accesses bucket:/subpath/a.txt.

For basic instructions on how to use OSS volumes, see [Use a statically provisioned ossfs 1.0 volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes).

**Note**

-   In the preceding example, the actual OSS path that corresponds to the mount target on the node is bucket:/subpath. For processes such as file scanning on the node, or for pods mounted without using subPath, the visible content is still all of bucket:/subpath.
    
-   For containers that run as non-root users, pay attention to the permission configuration of subPath. For more information, see [An exception occurs when you mount an OSS volume using subpath or subpathExpr](#455ea1d6f2659)
    

### How do I use specified ARNs or a ServiceAccount for RRSA authentication?

When you use RRSA to authenticate an OSS volume, you may encounter requirements that the default configuration cannot meet, such as using a third-party OIDC IdP or a non-default ServiceAccount.

By default, you need only to specify the RAM role name using the roleName configuration item in the PV. The CSI storage plugin then obtains the default Role ARN and OIDC Provider ARN. To implement custom RRSA authentication, change the PV configuration as follows:

**Note**

The `roleArn` and `oidcProviderArn` parameters must be configured together. After they are configured, you do not need to configure `roleName`.

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
      otherOpts: "-o umask=022 -o max_stat_cache_size=0 -o allow_other"
      authType: "rrsa"
      oidcProviderArn: "<oidc-provider-arn>"
      roleArn: "<role-arn>"
      #roleName: "<role-name>" # After you configure roleArn and oidcProviderArn, roleName becomes invalid.
      serviceAccountName: "csi-fuse-<service-account-name>" 
```

**Parameter**

**Description**

oidcProviderArn

You can obtain the OidcProviderArn after creating an OIDC IdP. For more information, see [Manage OIDC IdPs](/help/en/ram/manage-an-oidc-idp).

roleArn

You can obtain the RoleArn after creating a RAM role whose trusted entity is the preceding OIDC IdP. For more information, see [Example of role-based SSO that uses OIDC](/help/en/ram/implement-oidc-based-sso-from-okta#section-h6p-5la-5wf).

serviceAccountName

Optional. The name of the ServiceAccount used by the pod where the ossfs container is located. You must create this in advance.

If this is left empty, the default ServiceAccount maintained by CSI is used.

**Important**

The ServiceAccount name must start with csi-fuse-.

### **How do I mount an OSS Bucket across accounts?**

You can use RRSA authentication to mount an OSS Bucket across accounts.

> Make sure that the cluster and CSI component versions meet the requirements for RRSA authentication.

The following steps describe how to mount a bucket that belongs to Account B in Account A. Account A is where the cluster is located. Account B is where the OSS Bucket is located. You must complete the RAM authorization preparations before you create a volume that uses RRSA authentication.

1.  Perform the following operations in Account B:
    
    1.  In Account B, create a RAM role named roleB whose trusted entity is Account A. For more information, see [Create a RAM role for a trusted Alibaba Cloud account](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-account).
        
    2.  Grant roleB permissions on the OSS Bucket that needs to be mounted.
        
    3.  In the [RAM console](https://ram.console.alibabacloud.com/), go to the role details page for roleB and copy its ARN, such as `acs:ram::130xxxxxxxx:role/roleB`.
        
2.  Perform the following operations in Account A:
    
    1.  Create a RAM role named roleA for the application to use for RRSA authentication. The trusted entity type is OIDC IdP.
        
    2.  Grant roleA the permission to assume roleB. For more information, see [Mount a volume using RRSA authentication](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes#93b5a917ddf97) (statically provisioned volume) or [Mount a volume using RRSA authentication](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-oss-volumes#33374311fdkac) (dynamically provisioned volume).
        
        You do not need to grant OSS-related permission policies to roleA, but you must grant a permission policy that includes the `sts:AssumeRole` API operation, such as the system policy `AliyunSTSAssumeRoleAccess`.
        
3.  Configure the volume in the cluster:
    
    When you create the volume, set the `assumeRoleArn` parameter to the ARN of `roleB`:
    
    -   Statically provisioned volume (PV): In `volumeAttributes`, add:
        
        ```
        assumeRoleArn: <ARN of roleB>
        ```
        
    -   Dynamically provisioned volume (StorageClass): In `parameters`, add:
        
        ```
        assumeRoleArn: <ARN of roleB>
        ```
        

### **How do I enable exclusive mount mode after ossfs is containerized?**

**Symptom**

Multiple pods on the same node that mount the same OSS volume share a mount target.

**Cause**

Before ossfs was containerized, it used exclusive mount mode by default. This means that for each pod that mounts an OSS volume, an ossfs process is started on the corresponding node for that volume. The mount targets that correspond to different ossfs processes are completely independent, which means that different pods that mount the same OSS volume do not affect each other's read and write operations.

After ossfs is containerized, the ossfs process runs as a container in a pod, specifically a pod named `csi-fuse-ossfs-*` in the `kube-system` or `ack-csi-fuse` namespace. In multi-mount scenarios, exclusive mount mode would start numerous pods in the cluster, which leads to issues such as insufficient ENIs. Therefore, after containerization, shared mount mode is used by default. This means that multiple pods on the same node that mount the same OSS volume share a mount target, all correspond to the same `csi-fuse-ossfs-*` pod, and the mount is actually handled by the same ossfs process.

**Solution**

**Important**

CSI 1.30.4 and later no longer support enabling exclusive mount mode. To restart or change the ossfs configuration, see [How do I restart the ossfs process in shared mount mode?](#554e496c0at2c) If you have other requirements for ossfs exclusive mount mode, join the DingTalk group (ID: 33936810) to contact us.

If you want to restore the exclusive mount mode used before containerization, add the `useSharedPath` configuration item and set it to `"false"` when you create the OSS volume. The following code provides an example:

```
apiVersion: v1
kind: PersistentVolume
metadata:
  name: oss-pv
spec:
  accessModes:
  - ReadOnlyMany
  capacity:
    storage: 5Gi
  csi:
    driver: ossplugin.csi.alibabacloud.com
    nodePublishSecretRef:
      name: oss-secret
      namespace: default
    volumeAttributes:
      bucket: bucket-name
      otherOpts: -o max_stat_cache_size=0 -o allow_other
      url: oss-cn-zhangjiakou.aliyuncs.com
      useSharedPath: "false" 
    volumeHandle: oss-pv
  persistentVolumeReclaimPolicy: Delete
  volumeMode: Filesystem
```

### **An exception occurs when you mount an OSS volume using subpath or subpathExpr**

**Symptom**

When you mount an OSS volume using subpath or subpathExpr, the following exceptions occur:

-   **Mount failure:** After the pod that mounts the OSS volume is created, it remains in the CreateContainerConfigError state, and an event similar to the following appears.
    
    ```
    Warning  Failed          10s (x8 over 97s)  kubelet            Error: failed to create subPath directory for volumeMount "pvc-oss" of container "nginx"
    ```
    
-   **Read/write exception:** When you perform read and write operations on the mounted OSS volume, a permission error message such as `Operation not permitted` or `Permission denied` is reported.
    
-   **Unmount failure:** When you delete the pod that has the OSS volume mounted, the pod remains in the Terminating state.
    

**Cause**

To explain the causes and solutions, assume the PV is configured as follows:

```
...
    volumeAttributes:
      bucket: bucket-name
      path: /path
      ...
```

The pod is configured as follows:

```
...
       volumeMounts:
      - mountPath: /path/in/container
        name: oss-pvc
        subPath: subpath/in/oss
      ...
```

Then, the subpath mount directory on the OSS server is `/path/subpath/in/oss/` in the bucket.

-   **Causes of mount failure**:
    
    -   **Cause 1:** The mount directory `/path/subpath/in/oss/` does not exist on the OSS server, and the user or role used by the OSS volume is not granted the PutObject permission. For example, in a read-only scenario, only OSS ReadOnly permissions are configured.
        
        kubelet fails to create the `/path/subpath/in/oss/` directory on the OSS server due to insufficient permissions.
        
    -   **Cause 2:** A directory object at a certain level of the mount directory `/path/subpath/in/oss/` on the OSS server (a key ending with "/", such as `path/` or `path/subpath/`) is parsed by the file system as a file. This prevents Kubelet from correctly determining the status of the subpath.
        
-   **Cause of read/write exception**: The application container that runs as a non-root user does not have permissions on the files in the `/path/subpath/in/oss/` directory. The default permission is 640. When you mount an OSS volume using subpath, the actual directory mounted by ossfs on the OSS server is the path directory defined in the PV, which is `/path` in the preceding example, not `/path/subpath/in/oss/`. The allow\_other or mp\_umask mount option takes effect only for the `/path` directory. The `/path/subpath/in/oss/` directory, as a subdirectory, still has the default permission of 640.
    
-   **Cause of unmount failure**: The `/path/subpath/in/oss/` mount directory on the OSS server is deleted, which blocks kubelet from reclaiming the subpath and causes the unmount to fail.
    

**Solution**

-   **Solution for mount failure**:
    
    -   Cause 1:
        
        1.  Pre-create the `/path/subpath/in/oss/` directory on the OSS server to provide a mount path for kubelet.
            
        2.  If many directories need to be created (for example, when you mount an OSS volume using subpathExpr) and cannot all be pre-created, you can grant the putObject permission to the user or role used by the OSS volume.
            
    -   Cause 2:
        
        1.  See the solution for Cause 1 in [A directory is displayed as a file object after being mounted](#section-bwq-m47-uvj) to confirm whether each directory object exists on the OSS server (by querying for keys such as `path/` and `path/subpath/` without a leading "/") and to check the `content-type` and `content-length` fields. If the following conditions are met, the directory object is abnormally identified as a file in the file system:
            
            The directory object exists **(assuming a 20X API return code, because the** `**content-type**` **and** `**content-length**` **fields are otherwise meaningless)**, and its `content-type` is not plain, octet-stream, or x-directory (such as json or tar), and its `content-length` is not 0.
            
        2.  If the preceding conditions are met, see the solution for Cause 1 in [A directory is displayed as a file object after being mounted](#section-bwq-m47-uvj) to clear the abnormal directory object.
            
-   **Solution for read/write exception**: Use the umask configuration item to modify the default permissions of the subdirectory. For example, `-o umask=000` changes the default permissions to 777.
    
-   **Solution for unmount failure**: See the solution for Cause 2 in [Unmounting a statically provisioned OSS volume fails and the pod remains in the Terminating state](#7a836056092bn).
    

## **Usage**

### **Access to an OSS Bucket through an OSS volume is slow**

**Symptom**

Access to an OSS Bucket through an OSS volume is slow.

**Cause**

-   **Cause 1**: OSS itself has no file count limit, but when the number of files is large, FUSE access to OSS metadata becomes excessive, which causes slow bucket access.
    
-   **Cause 2**: After versioning is enabled for OSS, the performance of listObjectsV1 decreases when many delete markers exist in the bucket.
    
-   **Cause 3:** The [storage class](/help/en/oss/user-guide/overview-53/) on the OSS server is set to something other than Standard. Other storage classes reduce data access performance to varying degrees.
    

**Solution**

-   **Solution for Cause 1:** We recommend that you access the OSS Bucket in read-only mode. For buckets with many small objects, use non-file system mounting methods such as the OSS SDK or CLI to access the bucket data. For more information, see [SDK example overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).
    
-   **Solution for Cause 2:**
    
    1.  Upgrade the CSI plugin component to v1.26.6. ossfs supports accessing buckets through listObjectsV2.
        
    2.  In the `otherOpts` field of the statically provisioned OSS volume PV, add `-o listobjectsv2` to resolve the issue.
        
-   **Solution for Cause 3:** Modify the storage class or [restore files](/help/en/oss/user-guide/restore-objects-for-access).
    

### **File size is 0 in the OSS console**

**Symptom**

When an OSS volume is mounted in a container and data is written to a file, the file size is 0 in the OSS console.

**Cause**

The container mounts OSS using ossfs, which is based on FUSE. The file content is uploaded to the OSS server only when the file is closed or flushed.

**Solution**

Use the \`lsof + file name\` command to check if the file is occupied by another process. Close the corresponding process to release the file descriptor (fd). For more information, see [lsof](https://man7.org/linux/man-pages/man8/lsof.8.html).

### **An application reports the "Transport endpoint is not connected" error when accessing a mount target**

**Symptom**

After an OSS volume is mounted in a container, access to the mount target suddenly fails, and the error "Transport endpoint is not connected" is reported.

**Cause**

The container mounts OSS using ossfs. During data access to OSS, the ossfs process exits unexpectedly, which causes the mount target to be disconnected.

The main reasons for the ossfs process to exit unexpectedly are:

-   Exits due to insufficient resources, such as OOM Killed.
    
-   ossfs exits due to a segmentation fault during data access.
    

**Solution**

1.  Confirm the reason for the unexpected exit of the ossfs process.
    
    **Important**
    
    If your online service is affected by a disconnected mount target and this is an occasional issue, you can first fix it by redeploying the application container to remount the OSS volume.
    
    Remounting the OSS volume will cause some of the information required for the following troubleshooting steps to be lost. The relevant steps are noted.
    
    1.  Confirm whether it exited due to insufficient resources.
        
        1.  **Pod-level resource insufficiency**: If the CSI version is 1.28 or later, check if the pod where ossfs is located has been restarted, and if the reason for the last unexpected exit was OOM Killed or similar. For information about how to retrieve the pod where ossfs is located, see [Troubleshoot ossfs 1.0 exceptions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-ossfs-exception).
            
        2.  **Node-level resource insufficiency**: If the abnormal pod has been deleted due to remounting, or if the CSI version is earlier than 1.28, you can check the ACK or ECS monitoring dashboard to confirm if the node was at a high resource watermark during the volume mount.
            
    2.  Confirm whether it exited due to a segmentation fault.
        
        1.  If the CSI version is earlier than 1.28, ossfs runs as a process on the node. You need to log on to the node and query the system logs. Check for information related to a segmentation fault exit.
            
            ```
            journalctl -u ossfs | grep segfault
            ```
            
        2.  If the CSI version is 1.28 or later, directly query the logs of the pod where ossfs is located. Check for information related to a segmentation fault exit, such as `"signal: segmentation fault"`.
            
            **Note**
            
            The following situations may prevent you from obtaining the relevant logs. If you have confirmed that the ossfs process did not exit due to insufficient resources, we recommend that you proceed with troubleshooting for a segmentation fault.
            
            -   If the segmentation fault occurred a long time ago, the logs on the node or pod may have been lost due to rotation.
                
            -   If the application container has been remounted, the logs are lost because the pod was deleted.
                
            
2.  If ossfs exited due to insufficient resources, adjust the resource limits of the pod where ossfs is located, or schedule the application pod that mounts the OSS volume to a node with more abundant resources.
    
    If you confirm that ossfs itself is consuming a lot of memory, the cause may be that the application or a third-party scanning software's readdir operation on the mount target triggers ossfs to send numerous HeadObject requests to the OSS server. You can consider enabling the readdir optimization feature. For more information, see [Added readdir optimization feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-of-new-functions-and-performance-pressure-measurement-of-ossfs-version-1-91-and-above#b5f5ea625amyu).
    
3.  Most segmentation fault issues in older ossfs versions have been fixed in version 1.91 and later. If ossfs exits due to a segmentation fault, you should first consider upgrading the ossfs version to 1.91 or later, which means upgrading the CSI version to 1.30.4 or later. For ossfs version details, see [ossfs 1.0 version guide](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-release-notes).
    
    If your CSI version already meets the requirements, follow the steps below to further collect the segmentation fault coredump file and [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//smartservice.console.alibabacloud.com/%23).
    
    -   If the node's operating system is Alibaba Cloud Linux 3, the node has default core dump parameters configured. After an ossfs segmentation fault occurs, you can log on to the node and find the packaged coredump file `core.ossfs.xxx.lz4` in the `/var/lib/systemd/coredump/` path.
        
    -   For nodes with an operating system other than Alibaba Cloud Linux 3, you need to confirm that the node allows processes to generate coredump files. For example, for an Alibaba Cloud Linux 2 node, you can log on to the node and perform the following operation:
        
        ```
        echo "|/usr/lib/systemd/systemd-coredump %P %u %g %s %t %c %h %e" > /proc/sys/kernel/core_pattern
        ```
        
        After configuration, similar to Alibaba Cloud Linux 3, when an ossfs segmentation fault occurs, you can log on to the node and find the packaged coredump file `core.ossfs.xxx.xz` in the `/var/lib/systemd/coredump/` path.
        

### **An application reports the "Input/output error" error when accessing a mount target**

**Symptom**

An application reports the "Input/output error" error when accessing a mount target.

**Cause**

-   **Cause 1**: The object name under the OSS mount path contains special characters, which causes the server's response to be unparsable.
    
-   **Cause 2**: The FUSE file system does not support operations such as chmod or chown on the root mount target.
    
-   **Cause 3**: When the Resource in the RAM authorization policy is for a single bucket or a directory within it, the authorization is incomplete.
    

**Solution**

-   **Solution for Cause 1:**
    
    See [Troubleshoot ossfs 1.0 exceptions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-ossfs-exception) to retrieve the ossfs client log, which contains an error log similar to the following:
    
    ```
    parser error : xmlParseCharRef: invalid xmlChar value 16
        <Prefix>xxx&#16;xxxx/</Prefix>
    ```
    
    Here, `&#16;` represents an unparsable Unicode character. `xxx&#16;xxxx/` represents the full name of the object (a directory object in this example). Use an API, the console, or other methods to confirm that the object exists on the OSS server. The character may appear as a space in the OSS console.
    
    See [Rename an object](/help/en/oss/user-guide/rename-objects) to rename the object on the OSS server. If the object is a directory, we recommend that you see [Common operations](/help/en/oss/developer-reference/commonly-used-function-of-ossbrowser2-0#section-2zb-5rr-8yc) and use **ossbrowser 2.0** to rename the entire directory.
    
-   **Solution for Cause 2:**
    
    Use the `-o allow_other` and `-o mp_umask` mount parameters to achieve an effect similar to chmod on the mount path:
    
    **Parameter**
    
    **Description**
    
    **allow\_other**
    
    Sets the permissions of the mount directory to 777.
    
    **mp\_umask**
    
    Sets the permission mask for the mount directory. This option takes effect only when the `allow_other` option is set. The default value is 000. For example:
    
    -   To set the permissions of the mount directory to 770, add `-o allow_other -o mp_umask=007`.
        
    -   To set the permissions of the mount directory to 700, add `-o allow_other -o mp_umask=077`.
        
    
    Use the `-o gid` and `-o uid` mount parameters to achieve an effect similar to chown on the mount path:
    
    **Parameter**
    
    **Description**
    
    **uid**
    
    Specifies the UID of the user who owns the subdirectories and files in the mount directory.
    
    **gid**
    
    Specifies the GID of the user who owns the subdirectories and files in the mount directory.
    
-   **Solution for Cause 3:**
    
    To grant permissions only for a specific bucket or a path within a bucket, see the authorization policy in [Step 2: Grant permissions to the demo-role-for-rrsa role](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes#38aa376ca133x). You need to grant permissions for both `mybucket` and `mybucket/*` (to authorize a bucket), or for `mybucket/subpath` and `mybucket/subpath/*` (to authorize a path).
    

### **A directory is displayed as a file object after being mounted**

**Symptom**

When an OSS volume is mounted in a container, a directory is displayed as a file object after being mounted.

**Cause**

-   **Cause 1:** The content-type of the directory object on the OSS server is not the default `application/octet-stream` type (such as text/html or image/jpeg), or the size of the directory object is not 0. ossfs treats it as a file object based on its metadata.
    
-   **Cause 2:** The issue is not caused by the reasons in Cause 1, but the directory object is missing the `x-oss-meta-mode` metadata.
    

**Solution**

-   **Solution for Cause 1:**
    
    Use [HeadObject](/help/en/oss/developer-reference/headobject) or [stat (view bucket and object information)](/help/en/oss/developer-reference/stat) to retrieve the metadata of the directory object. The directory object must end with a forward slash (`/`), for example, `a/b/`. The following code provides an example of an API response.
    
    ```
    {
      "server": "AliyunOSS",
      "date": "Wed, 06 Mar 2024 02:48:16 GMT",
      "content-type": "application/octet-stream",
      "content-length": "0",
      "connection": "keep-alive",
      "x-oss-request-id": "65E7D970946A0030334xxxxx",
      "accept-ranges": "bytes",
      "etag": "\"D41D8CD98F00B204E9800998ECFxxxxx\"",
      "last-modified": "Wed, 06 Mar 2024 02:39:19 GMT",
      "x-oss-object-type": "Normal",
      "x-oss-hash-crc6xxxxx": "0",
      "x-oss-storage-class": "Standard",
      "content-md5": "1B2M2Y8AsgTpgAmY7Phxxxxx",
      "x-oss-server-time": "17"
    }
    ```
    
    In the preceding response example:
    
    -   `content-type`: is `application/octet-stream`, which means the directory object is of the application/octet-stream type.
        
    -   `content-length`: is 0, which means the size of the directory object is 0.
        
    
    If these conditions are not met, you can fix it as follows:
    
    1.  You can use [GetObject](/help/en/oss/developer-reference/getobject) or [ossutil Quick Start](/help/en/oss/command-line-tools-ossutil-quickstart#section-iew-p7g-7fr) to retrieve the object and confirm whether the data is useful. If the data is useful or you are unsure, we recommend that you back it up. For example, you can rename the object (for a directory object such as `xx/`, do not use `xx` as the new name) and upload it to OSS.
        
    2.  Use [DeleteObject](/help/en/oss/developer-reference/deleteobject) or [rm (delete)](/help/en/oss/developer-reference/rm#section-11j-asv-qx9) to delete the problematic directory object, and then confirm if ossfs displays the directory normally.
        
-   **Solution for Cause 2:**
    
    If the solution for Cause 1 does not fix the issue, you can add `-o complement_stat` to the `otherOpts` field of the statically provisioned OSS volume PV when you mount the OSS volume in the container.
    
    **Note**
    
    For CSI plugin component versions v1.26.6 and later, this configuration item is enabled by default. You can upgrade the storage component to v1.26.6 or later, restart the application pod, and remount the statically provisioned OSS volume to resolve the issue.
    

### **Many abnormal requests are monitored on the OSS server**

**Symptom**

When an OSS volume is mounted in a container, the number of requests monitored on the OSS server is much higher than expected.

**Cause**

When ossfs mounts OSS, it creates a mount path on the node. Scans of this mount path by other processes on the ECS instance are also converted into requests to OSS. Numerous requests can incur costs.

**Solution**

Trace the requesting process through auditing and address it. You can perform the following operations on the node.

1.  Install and start auditd.
    
    ```
    sudo yum install auditd
    sudo service auditd start
    ```
    
2.  Set the ossfs mount path as the monitored directory.
    
    -   To add all mount paths, run the following command.
        
        ```
        for i in $(mount | grep -i ossfs | awk '{print $3}');do auditctl -w ${i};done
        ```
        
    -   To add the mount path of a specific PV, run the following command.
        
        `<pv-name>` is the name of the specified PV.
        
        ```
        for i in $(mount | grep -i ossfs | grep -i <pv-name> | awk '{print $3}');do auditctl -w ${i};done
        ```
        
3.  In the audit log, check which processes accessed the path in the OSS Bucket.
    
    ```
    ausearch -i 
    ```
    
    The following code provides an example of audit log analysis. In this example, the audit logs between the `---` separators form a group, which records a single operation on the monitored mount target. This example shows that the `updatedb` process performed an `open` operation on a subdirectory in the mount target. The process PID is 1636611.
    
    ```
    ---
    type=PROCTITLE msg=audit (September 22, 2023 15:09:26.244:291) : proctitle=updatedb
    type=PATH msg=audit (September 22, 2023 15:09:26.244:291) : item=0 name=. inode=14 dev=00:153 mode=dir,755 ouid=root ogid=root rdev=00:00 nametype=NORMAL cap_fp=none cap_fi=none cap_fe=0 cap_fver=0
    type=CWD msg=audit (September 22, 2023 15:09:26.244:291) : cwd=/subdir1/subdir2
    type=SYSCALL msg=audit (September 22, 2023 15:09:26.244:291) : arch=x86_64 syscall=open success=yes exit=9 a0=0x55f9f59da74e a1=O_RDONLY | O_DIRECTORY | O_NOATIME a2=0x7fff78c34f40 a3=0x0 items=1 ppid=1581119 pid=1636611 auid=root uid=root gid=root euid=root suid=root fsuid=root egid=root sgid=root fsgid=root tty=pts1 ses=1355 comm=updatedb exe=/usr/bin/updatedb key=(null)
    ---
    ```
    
4.  Use the logs to further confirm if there are any non-application process calls and fix them.
    
    For example, if the audit log shows that [updatedb](https://linux.die.net/man/8/updatedb) scanned the mounted directory, you can modify `/etc/updatedb.conf` to make it skip the directory. Perform the following operations.
    
    1.  Add `fuse.ossfs` after `RUNEFS =`.
        
    2.  Add the mounted directory after `PRUNEPATHS =`.
        

### **The Content-Type metadata of file objects written through an OSS volume is always application/octet-stream**

**Symptom**

The Content-Type metadata of file objects written through an OSS volume is always application/octet-stream, which prevents browsers or other clients from correctly identifying and processing these files.

**Cause**

-   If the Content-Type is not specified, ossfs treats the file object as a binary stream file by default.
    
-   The Content-Type was specified through the /etc/mime.types configuration file, but it did not take effect.
    

**Solution**

1.  Confirm the CSI component version. Versions 1.26.6 and 1.28.1 have compatibility issues with Content-Type configuration. If you are using these versions, upgrade CSI to the latest version. For more information, see [\[Component Announcement\] Compatibility issues with csi-plugin and csi-provisioner versions 1.26.6 and 1.28.1](/help/en/ack/product-overview/csi-plugin-and-csi-provisioner-component-compatibility-issues-for-versions-1-26-6-and-1-28-1).
    
2.  If you have already specified the Content-Type using `mailcap` or `mime-support` to generate `/etc/mime.types` on the node, upgrade the CSI version and then remount the corresponding OSS volume.
    
3.  If you have not specified the Content-Type, you can do so in one of the following two ways:
    
    -   **Node-level configuration**: Generate the `/etc/mime.types` configuration file on the node. This takes effect for all new OSS volumes mounted on that node. For more information, see [FAQ](/help/en/oss/developer-reference/ossfs-faq#section-t5j-k98-z3d).
        
    -   **Cluster-level configuration**: This method takes effect for all new OSS volumes mounted in the cluster. The content of `/etc/mime.types` is consistent with the content generated by `mailcap` by default.
        
        1.  Check if the csi-plugin configuration file exists.
            
            ```
            kubectl -n kube-system get cm csi-plugin
            ```
            
            If it does not exist, create a ConfigMap with the same name as csi-plugin using the following content. If it exists, you need to add the content `mime-support="true"` to `data.fuse-ossfs` in the original ConfigMap.
            
            ```
            apiVersion: v1
            kind: ConfigMap
            metadata:
              name: csi-plugin
              namespace: kube-system
            data:
              fuse-ossfs: |
                mime-support=true
            ```
            
        2.  Restart the csi-plugin for the configuration to take effect.
            
            Restarting the csi-plugin does not affect the use of currently mounted volumes.
            
            ```
            kubectl -n kube-system delete pod -l app=csi-plugin
            ```
            
4.  Remount the corresponding OSS volume.
    

### **The "Operation not supported" or "Operation not permitted" error is returned when you create a hard link**

**Symptom**

The error **Operation not supported** or **Operation not permitted** is returned when you create a hard link.

**Cause**

OSS volumes do not support hard link operations and will return the **Operation not supported** error. In earlier versions of CSI, the error returned for a hard link operation was **Operation not permitted**.

**Solution**

Modify your application to avoid hard link operations when you use OSS volumes. If your application must use hard link operations, we recommend that you switch to a different storage type.

### **How do I view the records of access to OSS through an OSS volume?**

You can view the operation records of OSS in the [OSS console](https://oss.console.alibabacloud.com/). Make sure that you have [enabled real-time log query](/help/en/oss/user-guide/real-time-log-query/#a110b8b72fsyf).

1.  Log on to the [OSS](https://oss.console.alibabacloud.com/) console.
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the desired bucket.
    
3.  In the navigation pane on the left, choose **Logging** > **Real-time Log Query**.
    
4.  On the **Real-time Log Query** tab, enter a query statement based on the [query syntax](/help/en/sls/log-search-overview) and [analysis syntax](/help/en/sls/log-analysis-overview) to analyze [OSS logs](/help/en/sls/log-fields-13). You can use the **user\_agent** and **client\_ip** fields to determine whether the log originates from ACK.
    
    1.  To locate OSS operation requests sent from ACK, you need to select the **user\_agent** field. After you expand it, you can select any entry where **user\_agent** contains **ossfs**.
        
        **Important**
        
        -   The value of the user-agent field depends on the ossfs version. Different ossfs versions have different user-agent field values, but they all start with `aliyun-sdk-http/1.0()/ossfs`.
            
        -   If you also mount through ossfs on an ECS instance, the related logs will be coupled here.
            
        
    2.  To locate a specific ECS instance or cluster, you can select the **client\_ip** field and then select the corresponding IP address.
        
    
    By combining the selection of these two fields, the queried log example is shown in the following figure.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8211289171/p782861.png)
    
    **Description of some log query fields**
    
    **Field**
    
    **Description**
    
    **operation**
    
    The type of operation on OSS. For example, GetObject, GetBucketStat. For more information, see [API overview](/help/en/oss/developer-reference/list-of-operations-by-function).
    
    **object**
    
    The object name, which can be a directory or file in OSS.
    
    **request\_id**
    
    The unique identifier of the request. If you have a request ID, you can perform a term query for a specific request.
    
    **http\_status, error\_code**
    
    For querying request results. For more information, see [HTTP status codes](/help/en/oss/user-guide/http-status-code/).
    

### **How do I restart the ossfs process in shared mount mode?**

**Symptom**

After you modify authentication information or the ossfs version, the already running ossfs process is not automatically updated.

**Cause**

-   After ossfs is running, configurations such as authentication information cannot be changed. To change the configuration, you need to restart the ossfs process (which, after containerization, is the `csi-fuse-ossfs-*` pod in the `kube-system` or `ack-csi-fuse` namespace) and the corresponding application pod, which causes service interruption. Therefore, by default, CSI does not change an already running ossfs process.
    
-   In the normal usage flow, the deployment and deletion of ossfs are both handled by CSI. Manually deleting the pod where the ossfs process is located will not trigger a redeployment by CSI, nor will it trigger the deletion of related resources (such as `VolumeAttachment`).
    

**Solution**

**Important**

The process of restarting the ossfs process requires restarting the application pod that mounts the corresponding OSS volume. Proceed with caution.

If you are using a non-containerized version of CSI, or have enabled exclusive mount, you can directly restart the corresponding application pod. **After containerization, shared mount mode is used by default,** which means that all application pods on the same node that mount the same OSS volume share the ossfs process for mounting.

1.  Confirm which application pods are using the current FUSE pod.
    
    1.  Run the following command to confirm the `csi-fuse-ossfs-*` pod that needs to be changed.
        
        In the command, `<pv-name>` is the PV name, and `<node-name>` is the node name.
        
        If the CSI version is earlier than 1.30.4, perform the following operation:
        
        ```
        kubectl -n kube-system get pod -lcsi.alibabacloud.com/volume-id=<pv-name> -owide | grep <node-name>
        ```
        
        If the CSI version is 1.30.4 or later, perform the following operation:
        
        ```
        kubectl -n ack-csi-fuse get pod -lcsi.alibabacloud.com/volume-id=<pv-name> -owide | grep <node-name>
        ```
        
        Expected output:
        
        ```
        csi-fuse-ossfs-xxxx   1/1     Running   0          10d     192.168.128.244   cn-beijing.192.168.XX.XX   <none>           <none>
        ```
        
    2.  Run the following command to confirm all pods that are currently mounting the OSS volume.
        
        In the command, `<ns>` is the namespace name, and `<pvc-name>` is the PVC name.
        
    3.  ```
        kubectl -n <ns> describe pvc <pvc-name>
        ```
        
        Expected output (including Used By):
        
        ```
        Used By:       oss-static-94849f647-4****
                       oss-static-94849f647-6****
                       oss-static-94849f647-h****
                       oss-static-94849f647-v****
                       oss-static-94849f647-x****
        ```
        
    4.  Run the following command to retrieve the pods mounted by `csi-fuse-ossfs-xxxx`, which are the pods running on the same node as csi-fuse-ossfs-xxxx.
        
        ```
        kubectl -n <ns> get pod -owide | grep cn-beijing.192.168.XX.XX 
        ```
        
        Expected output:
        
        ```
        NAME                         READY   STATUS    RESTARTS   AGE     IP               NODE                         NOMINATED NODE   READINESS GATES
        oss-static-94849f647-4****   1/1     Running   0          10d     192.168.100.11   cn-beijing.192.168.100.3     <none>           <none>
        oss-static-94849f647-6****   1/1     Running   0          7m36s   192.168.100.18   cn-beijing.192.168.100.3     <none>           <none>
        ```
        
2.  Restart the application and ossfs processes.
    
    Simultaneously delete the application pods (oss-static-94849f647-4\*\*\*\* and oss-static-94849f647-6\*\*\*\* in the preceding example) using methods such as `kubectl scale`. When no application pod is mounted, the `csi-fuse-ossfs-xxxx` pod will be automatically reclaimed. After the number of replicas is restored, it will be remounted with the new PV configuration, and CSI will create a new `csi-fuse-ossfs-yyyy` pod.
    
    If you cannot ensure that these pods are deleted simultaneously (for example, deleting pods managed by a Deployment, StatefulSet, or DaemonSet will immediately trigger a restart), or if the pod can tolerate OSS read/write failures:
    
    -   If the CSI version is earlier than 1.30.4, you can directly delete the `csi-fuse-ossfs-xxxx` pod. At this point, reading and writing to OSS within the application pod will return a `disconnected error`.
        
    -   If the CSI version is 1.30.4 or later, you can perform the following operation:
        
        ```
        kubectl get volumeattachment | grep <pv-name> | grep cn-beijing.192.168.XX.XX 
        ```
        
        Expected output:
        
        ```
        csi-bd463c719189f858c2394608da7feb5af8f181704b77a46bbc219b**********   ossplugin.csi.alibabacloud.com    <pv-name>                   cn-beijing.192.168.XX.XX    true       12m
        ```
        
        Directly delete this VolumeAttachment. At this point, reading and writing to OSS within the application pod will return a `disconnected error`.
        
    
    Then, restart the application pods one by one. The restarted pods will resume OSS read/write operations through the new `csi-fuse-ossfs-yyyy` pod created by CSI.
    

### **How do I check the ossfs version used to mount an OSS volume?**

The ossfs version corresponds to the CSI version. The ossfs version used by ACK is based on the public OSS version, for example, 1.91.1.ack.1. For more information, see [Version guide](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-release-notes#49a4161650pxn). To query public versions, see [Install ossfs 1.0](/help/en/oss/developer-reference/install-ossfs-1-0) and [Install ossfs 2.0](/help/en/oss/developer-reference/install-ossfs-2-0).

-   The default ossfs version used to mount an OSS volume depends on the Container Storage Interface (CSI) component version. You can query the [csi-provisioner](/help/en/ack/product-overview/csi-provisioner) to find the specific version used.
    
    **Note**
    
    For CSI versions that are earlier than 1.28 but not 1.26.6, the system uses the ossfs version that is installed on the node. You need to use the following method to query the ossfs version.
    
-   To check the ossfs version of a volume that is already mounted, see [View the ossfs version](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-release-notes#d19e9f3c13xgz).
    

The version of the CSI component determines the default version of ossfs. The ossfs version used by ACK adds a `.ack.x` suffix to the community version number (such as `1.91.1.ack.1`). For more information, see [Version guide](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-release-notes#49a4161650pxn).

> For information about public community versions, see [Install ossfs 1.0](/help/en/oss/developer-reference/install-ossfs-1-0) and [Install ossfs 2.0](/help/en/oss/developer-reference/install-ossfs-2-0).

You can query the version information in the following ways:

-   Version correspondence: To understand the ossfs version that corresponds to different CSI versions, see [csi-provisioner](/help/en/ack/product-overview/csi-provisioner).
    
    > For older CSI versions (before v1.28 and not v1.26.6), ossfs 1.0 runs directly on the node. Its version is determined by the version installed on the node and is not controlled by CSI. Please query the actual version directly.
    
-   Verify the actual version: To confirm the exact ossfs version that is currently running for a mounted volume, see [View the ossfs version](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-release-notes#d19e9f3c13xgz).
    

## **Scaling**

### **Do I need to scale out a volume when the actual storage capacity exceeds the volume's configuration?**

OSS does not limit the capacity of a bucket or subdirectory, nor does it provide a capacity quota feature. Therefore, the `.spec.capacity` field of the PV and the `.spec.resources.requests.storage` field of the PVC are ignored and do not take effect. You need only to ensure that the capacity configuration values of the bound PV and PVC are consistent.

If the actual storage capacity exceeds the configuration, normal use is not affected, and you do not need to scale out the volume.

## **Uninstall**

### **Unmounting a statically provisioned OSS volume fails and the pod remains in the Terminating state**

**Symptom**

Unmounting a statically provisioned OSS volume fails, and the pod remains in the Terminating state.

**Cause**

There are many reasons why a pod gets stuck in the Terminating state during deletion. You can first check the kubelet logs to identify the cause. Common reasons for OSS volume unmount failure are as follows:

-   **Cause 1**: The corresponding mount target on the node is occupied. The CSI plugin cannot unmount the mount target.
    
-   **Cause 2**: The OSS bucket or directory (path) specified in the PV is deleted. The status of the current mount target cannot be determined.
    

**Solution**

-   **Solution for Cause 1**
    
    1.  Run the following command in the cluster to retrieve the pod's UID.
        
        Replace <ns-name> and <pod-name> with your actual values.
        
        ```
        kubectl -n <ns-name> get pod <pod-name> -ogo-template --template='{{.metadata.uid}}'
        ```
        
        Expected output:
        
        ```
        5fe0408b-e34a-497f-a302-f77049****
        ```
        
    2.  Log on to the node where the Terminating pod is located.
        
    3.  On the node, run the following command to check if any process is currently occupying the mount target.
        
        ```
        lsof /var/lib/kubelet/pods/<pod-uid>/volumes/kubernetes.io~csi/<pv-name>/mount/
        ```
        
        If there is any output, confirm and clean up the relevant processes.
        
-   **Solution for Cause 2**
    
    1.  Log on to the [OSS](https://oss.console.alibabacloud.com/) console.
        
    2.  Check if the bucket or directory has been deleted. If you mounted the OSS volume using subpath, you also need to confirm if the subpath mount directory has been deleted.
        
    3.  If the unmount failure is due to a deleted directory, perform the following operations.
        
        1.  Run the following command in the cluster to retrieve the pod's UID.
            
            Replace <ns-name> and <pod-name> with your actual values.
            
            ```
            kubectl -n <ns-name> get pod <pod-name> -ogo-template --template='{{.metadata.uid}}'
            ```
            
            Expected output:
            
            ```
            5fe0408b-e34a-497f-a302-f77049****
            ```
            
        2.  Log on to the node where the Terminating pod is located. On the node, run the following command to query the mount targets related to the pod.
            
            ```
            mount | grep <pod-uid> | grep fuse.ossfs
            ```
            
            Expected output:
            
            ```
            ossfs on /var/lib/kubelet/pods/<pod-uid>/volumes/kubernetes.io~csi/<pv-name>/mount type fuse.ossfs (ro,nosuid,nodev,relatime,user_id=0,group_id=0,allow_other)
            ossfs on /var/lib/kubelet/pods/<pod-uid>/volume-subpaths/<pv-name>/<container-name>/0 type fuse.ossfs (ro,relatime,user_id=0,group_id=0,allow_other)
            ```
            
            The path between `ossfs on` and `type` is the actual mount target on the node.
            
        3.  Manually unmount the mount target.
            
            ```
            umount /var/lib/kubelet/pods/<pod-uid>/volumes/kubernetes.io~csi/<pv-name>/mount
            umount /var/lib/kubelet/pods/<pod-uid>/volume-subpaths/<pv-name>/<container-name>/0
            ```
            
        4.  Wait for kubelet to reclaim it normally on retry, or directly delete the pod using `--force`.
