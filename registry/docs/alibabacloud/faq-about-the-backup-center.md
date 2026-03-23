This topic provides answers to some frequently asked questions about the backup center.

## **Table of contents**

**Category**

**Issue**

Obtaining error messages

[Common operations](#1e1af2bb10360)

Console

-   [The console displays "The working component is abnormal" or "Failed to fetch current data"](#section-el0-92k-iqi)
    
-   [If the console reports that a resource with the same name already exists, change the name and try again.](#8bf96d5046cnd)
    
-   [I cannot select an existing backup when I restore an application across clusters](#section-xr3-gzw-r86)
    
-   [The console displays "The service role required by the current component has not been authorized"](#451b7eb9d6f3u)
    
-   [The console displays "The current account has not been granted the cluster RBAC permissions required for this operation"](#aa10c4eb01119)
    
-   [The backup center component fails to be upgraded or uninstalled](#b5f54aa2cc3bk)
    

General

-   [The Job status is Failed and an "internal error" message is returned](#926003372agww)
    
-   [The job status is Failed and the "create cluster resources timeout" error is returned](#24c0213f059gk)
    
-   [The status of the Job is Failed and the "addon status is abnormal" error is returned](#d9280b50dc5mc)
    
-   [The job status is Failed and the error message contains "VaultError: xxx"](#c90f9078d47af)
    
-   [Job status is Failed, and the message contains "HBRError: check HBR vault error"](#2b40986422e97)
    
-   [The job status is Failed, and the message contains "HBRError: ... code: 400, Illegal request. Please modify the parameters"](#fe635951d94jx)
    
-   [The task status is Failed, and the message contains "hbr task finished with unexpected status: FAILED, errMsg ClientNotExist"](#0ef534920ffv2)
    
-   [A job remains in the InProgress state for a long time](#section-g9t-9u6-hi1)
    

Backup

-   [The status of the backup task is Failed and the "backup already exists in OSS bucket" error is returned](#36695d6d58hbr)
    
-   [The backup status is Failed and the error message "get target namespace failed" is displayed](#c2be2932044di)
    
-   [The backup status is Failed and the error message contains "velero backup process timeout"](#c5bd7db130hk8)
    
-   [The status of the backup task is Failed and the "HBR backup request failed" error is returned](#73c13b161a05y)
    
-   [The status of the backup task is Failed and the "hbr task finished with unexpected status: FAILED, errMsg SOURCE\_NOT\_EXIST" error is returned](#17b4bcaadd43x)
    
-   [The status of the backup task is Failed, and the error message contains "check backup files in OSS bucket failed", "upload backup files to OSS bucket failed", or "download backup files from OSS bucket failed".](#a937c2f558zpt)
    
-   [The status of the backup task is PartiallyFailed and the "PROCESS velero partially completed" error is returned](#12ac9d18d3he0)
    
-   [The backup status is PartiallyFailed, and the message contains "PROCESS hbr partially completed"](#ecd8899a3cy0l)
    

Storage class conversion

(Optional step during restoration)

-   [The status of the StorageClass conversion task is Failed and the "storageclass xxx not exists" error is returned](#768c7de1b266s)
    
-   [The status of the StorageClass conversion task is Failed and the "only support convert to storageclass with CSI diskplugin or nasplugin provisioner" error is returned](#592f29b59f4w4)
    
-   [The status of the StorageClass conversion task is Failed and the "current cluster is multi-zoned" error is returned](#ed3ace89a8uwg)
    

Restore

-   [The status of the restore job is Failed, and the "multi-node writing is only supported for block volume" error is returned](#a10e009741jp6)
    
-   [The status of the restore job is Failed and the "only disk type PVs support cross-region restore in current version" error is returned](#a273d0bb56702)
    
-   [The status of the restore job is Failed and the "ECS snapshot cross region request failed" error is returned](#9fb6d4df8cc14)
    
-   [What do I do if the status of the restore task is Failed and the "accessMode of PVC xxx is xxx" error is returned?](#6d3b45c6cfdmx)
    
-   [The status of the restore job is Completed, but some resources are not created in the restore cluster](#b151e76046u09)
    

Others

-   [The migrate-controller component of the FlexVolume cluster fails to start](#section-fgd-bz0-jf3)
    
-   [Can I modify the backup vault?](#section-z0z-5e4-kgk)
    
-   [Can I associate a backup vault with an OSS bucket whose name is not in the cnfs-oss-\* format?](#706d1fb745pw9)
    
-   [How do I specify the backup cycle when I create a backup plan?](#b5f8821f42xhu)
    
-   [What default adjustments does a restore job make to backed-up YAML resources?](#0eadedb598zqn)
    
-   [How do I view the specific resources in a backup?](#0580d3efb1gsp)
    
-   [Can I back up applications from a cluster that runs an earlier Kubernetes version and restore them to a cluster that runs a later Kubernetes version?](#7e1dc56232naz)
    
-   [Is traffic automatically switched to SLB instances during restoration?](#21fb9fe7d174e)
    
-   [Why are resources in the csdr, ack-csi-fuse, kube-system, kube-public, and kube-node-lease namespaces not backed up by default?](#217f7dbc9ag8w)
    
-   [Does the backup center use ECS disk snapshots to back up all data on disks? What is the default snapshot type?](#b3fd8da285pe3)
    
-   [Why is the validity period of ECS disk snapshots created from backups different from the validity period specified in the backup configuration?](#1628749679sqj)
    
-   [What is volume data backup, and in what scenarios do I need to back up volumes when backing up applications?](#4421274c772ur)
    
-   [How do I select nodes that can be used to back up file systems in data protection?](#80625b882e2na)
    
-   [What are the scenarios for application backup and data protection?](#83ca43453b1w9)
    
-   [How do I exclude some persistent volumes from backup and recovery?](#895485b780bel)
    
-   [Does the backup center support data encryption for associated OSS buckets? How do I grant the permissions to use Key Management Service (KMS) for server-side encryption?](#1d890015a0ssv)
    
-   [How do I change the images used by applications during restoration?](#77d8a4f90144z)
    

## **Common operations**

**Note**

If you use the backup center with kubectl, upgrade the migrate-controller component to the latest version before you troubleshoot issues. This upgrade does not affect existing backups. For more information about how to upgrade the component, see [Manage components](/help/en/ack/manage-system-components).

When the status of a backup job, StorageClass conversion task, or restore job is **Failed** or **PartiallyFailed**, you can retrieve error messages using the following methods:

-   Move the pointer over **Failed** or **PartiallyFailed** in the Status column to view a brief error message, such as `RestoreError: snapshot cross region request failed`.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6940744171/p749367.png)
    
-   To retrieve more detailed error messages, run the following commands to query the events of the task. An example error message is `RestoreError: process advancedvolumesnapshot failed avs: snapshot-hz, err: transition canceled with error: the ECS-snapshot related ram policy is missing`.
    
    -   **Backup job**
        
        ```
        kubectl -n csdr describe applicationbackup <backup-name> 
        ```
        
    -   **StorageClass conversion task**
        
        ```
        kubectl -n csdr describe converttosnapshot <backup-name>
        ```
        
    -   **Restore job**
        
        ```
        kubectl -n csdr describe applicationrestore <restore-name>
        ```
        

## **The console displays "The working component is abnormal" or "Failed to fetch current data"**

#### **Issue**

The console displays an error: **The components are abnormal** or **Failed to retrieve the data**.

#### **Cause**

The backup center component was not installed correctly.

#### **Solution**

-   Check if nodes exist in the cluster. The backup center cannot be deployed if no nodes exist.
    
-   If the cluster uses FlexVolume, you must switch to CSI. For more information, see [The migrate-controller component in a cluster that uses FlexVolume cannot be launched](#section-fgd-bz0-jf3).
    
-   If you use the backup center with kubectl, check if the YAML configurations are correct. For more information, see [Use kubectl to back up and restore applications](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kubectl-cli-to-backup-and-restore-data#task-2279498).
    
-   If your cluster is an ACK dedicated cluster or a registered cluster, check if the required permissions are granted. For more information, see [ACK dedicated cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#7db0264084n9c) and [Registered cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#50a56040f4q4q).
    
-   Check if the csdr-controller and csdr-velero stateless applications in the csdr namespace failed to deploy due to resource or scheduling limits. If they did, resolve the issue.
    

## The console displays the following error: The name has been used. Change the name and try again

#### **Issue**

The console displays the **The name has been used. Change the name and try again** error if you specify a duplicate name when you create or delete a backup, StorageClass conversion, or restore job.

#### **Cause**

When you delete a task in the console, a `deleterequest` resource is created in the cluster. The component then performs a series of deletion operations, which involves more than just deleting the corresponding backup resource. The same applies to command line operations. For more information, see [Use kubectl to back up and restore applications](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kubectl-cli-to-backup-and-restore-data#p-y8k-83s-c1c).

If the deletion operation is incorrect or an error occurs while the `deleterequest` resource is being processed, some resources in the cluster may not be deleted. This causes the error message indicating that a resource with the same name already exists.

#### **Solution**

-   Delete the resources with the same name as indicated in the prompt. For example, if the error message `deleterequests.csdr.alibabacloud.com "xxxxx-dbr" already exists` is returned, run the following command to delete the resource:
    
    ```
    kubectl -n csdr delete deleterequests xxxxx-dbr
    ```
    
-   Create a task with a new name.
    

## I cannot select an existing backup when I restore an application across clusters

#### **Issue**

I cannot select a backup job when I restore an application across clusters.

#### **Cause**

-   **Cause 1:** The backup vault is not associated with the current cluster. This means the backup vault is not initialized.
    
    The system initializes the backup vault and synchronizes its basic information, including the OSS bucket information, to the cluster. Then, the system initializes the backup files from the backup vault in the cluster. You can select a backup file for restoration only after the initialization is complete.
    
-   **Cause 2:** The backup vault failed to initialize. The status of the **backuplocation** resource in the current cluster is `Unavailable`.
    
-   **Cause 3:** The backup job is incomplete or has failed.
    

#### **Solution**

-   **Solution 1:**
    

On the **Restore** page, find **Backup Vault** and click **Initialize Backup Vault**. After the backup vault is initialized, select the job to restore.

-   **Solution 2:**
    

Run the following command to check the status of the backuplocation resource.

```
kubectl get -n csdr backuplocation <backuplocation-name> 
```

Expected output:

```
NAME                    PHASE       LAST VALIDATED   AGE
<backuplocation-name>   Available   3m36s            38m
```

If the status is `Unavailable`, see the solution in [The status of the task is Failed and the "VaultError: xxx" error is returned](#c90f9078d47af).

**Solution 3:**

In the backup cluster console, confirm that the backup job has a Completed status. If the backup status is not **Completed**, troubleshoot the issue. For more information, see [index](#80874182f3api).

## **The console displays "The service role required by the current component has not been authorized"**

#### Issue

When you access the application backup console, the console displays the message "The service role required by the current component has not been authorized" and returns the error code **AddonRoleNotAuthorized**.

#### Cause

The cloud resource authentication logic for the migrate-controller component in ACK managed clusters was optimized in migrate-controller 1.8.0. When you install or upgrade the component to this version for the first time, the Alibaba Cloud account must complete the cloud resource authorization.

#### Solution

-   If you are logged on with an Alibaba Cloud account, click [Authorize](https://ram.console.alibabacloud.com/role/authorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Fcs.console.alibabacloud.com%2F%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunCSManagedBackupRestoreRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedBackupRestoreRole%22%7D%5D%2C%22Service%22%3A%22CS%22%7D%5D%7D) to complete the authorization.
    
-   If you are logged in as a RAM user, click **Copy Authorization Link** and send the link to the Alibaba Cloud account for authorization.
    

## **The console displays "The current account has not been granted the cluster RBAC permissions required for this operation"**

#### **Issue**

When you access the application backup console, the console displays "The current account has not been granted the cluster RBAC permissions required for this operation. Contact the primary account or permission administrator for authorization." The error code is APISERVER.403.

#### **Cause**

The console interacts with the API server to submit backup and restore jobs and retrieve real-time job status. The default permission list for cluster O&M engineers and developers lacks some permissions required by the backup center component. The primary account or permission administrator needs to grant these permissions.

#### **Solution**

Refer to [Use custom RBAC roles to restrict resource operations in a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-an-rbac-role) and grant the following ClusterRole permissions to backup center operators:

```
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: csdr-console
rules:
  - apiGroups: ["csdr.alibabacloud.com","velero.io"]
    resources: ['*']
    verbs: ["get","create","delete","update","patch","watch","list","deletecollection"]
  - apiGroups: [""]
    resources: ["namespaces"]
    verbs: ["get","list"]
  - apiGroups: ["storage.k8s.io"]
    resources: ["storageclasses"]
    verbs: ["get","list"]
```

## **The backup center component fails to be upgraded or uninstalled**

#### **Issue**

The backup center component fails to be upgraded or uninstalled, and the csdr namespace remains in the Terminating state.

#### Cause

The backup center component exited abnormally during operation, which left jobs in the InProgress state in the csdr namespace. The `finalizers` field of these jobs may prevent resources from being deleted, which causes the csdr namespace to remain in the Terminating state.

#### **Solution**

-   Run the following command to check why the csdr namespace is in the Terminating state:
    
    ```
    kubectl describe ns csdr
    ```
    
    Confirm that the stuck jobs are no longer needed and delete their `finalizers`.
    
-   After you confirm that the csdr namespace is deleted:
    
    -   For component upgrades, you can reinstall the migrate-controller component of the backup center.
        
    -   For component uninstalls, the component should now be uninstalled.
        

## The status of the task is Failed and the "internal error" error is returned

#### **Issue**

The status of the task is **Failed** and the "internal error" error is returned.

#### **Cause**

The component or the underlying cloud service encountered an unexpected exception. For example, the cloud service may not be available in the current region.

#### **Solution**

If the error message is "HBR backup/restore internal error", go to the Cloud Backup console to check if the container backup feature is available.

## **The status of the task is Failed and the "create cluster resources timeout" error is returned**

#### **Issue**

The status of the task is **Failed** and the "create cluster resources timeout" error is returned.

#### **Cause**

During a StorageClass conversion or a restoration, temporary pods, persistent volume claims (PVCs), and persistent volumes (PVs) may be created. If these resources remain unavailable for a long time after creation, the "create cluster resources timeout" error is returned.

#### **Solution**

1.  Run the following command to locate the abnormal resource and identify the cause based on its events:
    
    ```
    kubectl -n csdr describe <applicationbackup/converttosnapshot/applicationrestore> <task-name> 
    ```
    
    Expected output:
    
    ```
    ……wait for created tmp pvc default/demo-pvc-for-convert202311151045 for convertion bound time out
    ```
    
    This indicates that the PVC used for StorageClass conversion remains unbound for a long time. The PVC is in the `default` namespace and is named `demo-pvc-for-convert202311151045`.
    
2.  Run the following command to check the status of the PVC and identify the cause of the issue:
    
    ```
    kubectl -ndefault describe pvc demo-pvc-for-convert202311151045 
    ```
    
    The following are common causes of issues in the backup center. For more information, see [Troubleshoot storage issues](/help/en/ack/ack-managed-and-ack-dedicated/support/storage-troubleshooting).
    
    -   The cluster or node resources are insufficient or abnormal.
        
    -   The restore cluster does not have the required storage class. Use the StorageClass conversion feature to select an existing storage class in the restore cluster and then restore the application.
        
    -   The underlying storage associated with the storage class is unavailable. For example, the specified disk type is not supported in the current zone.
        
    -   The Container Network File System (CNFS) associated with alibabacloud-cnfs-nas is abnormal. For more information, see [Use CNFS to manage NAS file systems (recommended)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-nas-file-systems#section-qqn-h8b-5u9).
        
    -   You selected a storage class whose **volumeBindingMode** is set to `Immediate` when restoring applications in a multi-zone cluster.
        

## **The status of the task is Failed and the "addon status is abnormal" error is returned**

#### **Issue**

The status of the task is **Failed** and the "addon status is abnormal" error is returned.

#### **Cause**

The components in the csdr namespace are abnormal.

#### **Solution**

Refer to [Cause 1 and solution: The components in the csdr namespace are abnormal](#p-cqd-lqk-80d).

## **The status of the task is Failed and the "VaultError: xxx" error is returned**

#### **Issue**

The status of the backup, restore, or StorageClass conversion task is Failed and the error message VaultError: backup vault is unavailable: xxx is returned.

#### **Cause**

-   The specified OSS bucket does not exist.
    
-   The cluster does not have the permissions to access OSS.
    
-   The OSS bucket network is unreachable.
    

#### **Solution**

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/) and check if the OSS bucket associated with the backup vault exists.
    
    If the OSS bucket does not exist, create a bucket and re-associate it. For more information, see [Create buckets](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb).
    
2.  Check whether the cluster has the permissions to access OSS.
    
    -   For an ACK Pro cluster, you do not need to configure OSS permissions, provided that the name of the OSS bucket associated with the cluster's backup vault starts with **cnfs-oss-\*\***.
        
    -   For an ACK dedicated cluster or a registered cluster, you must configure OSS permissions. For more information, see [Install migrate-controller and grant permissions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#task-1955156).
        
    
    For ACK managed clusters where components are installed or upgraded to v1.8.0 or later without using the console, OSS-related permissions may be missing. You can run the following command to check whether a cluster has permissions to access OSS:
    
    ```
    kubectl get secret -n kube-system | grep addon.aliyuncsmanagedbackuprestorerole.token
    ```
    
    Expected output:
    
    ```
    addon.aliyuncsmanagedbackuprestorerole.token          Opaque                      1      62d
    ```
    
    If the returned content is the same as the preceding expected output, the cluster has permissions to access OSS. You only need to specify an OSS bucket that is named in the cnfs-oss-\* format for the cluster.
    
    If the returned content is not the same as the expected output, use one of the following methods to grant permissions:
    
    -   Refer to the instructions for ACK dedicated clusters and registered clusters to configure OSS permissions. For more information, see [Install the backup service component and configure permissions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#task-1955156).
        
    -   Click [Authorize](https://ram.console.alibabacloud.com/role/authorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Fcs.console.alibabacloud.com%2F%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunCSManagedBackupRestoreRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedBackupRestoreRole%22%7D%5D%2C%22Service%22%3A%22CS%22%7D%5D%7D) to complete the authorization for your Alibaba Cloud account. You need to perform this operation only once for each Alibaba Cloud account.
        
    
    **Note**
    
    You cannot create a backup vault with the same name as a deleted one. You also cannot associate a backup vault with an OSS bucket whose name does not follow the `cnfs-oss-**` format. If you have an existing backup vault associated with an incorrectly named OSS bucket, you must create a new backup vault with a different name and associate it with an OSS bucket that follows the `cnfs-oss-**` format.
    
3.  Run the following command to check the network configurations of the cluster.
    
    ```
    kubectl get backuplocation <backuplocation-name> -n csdr -o yaml | grep network
    ```
    
    The output is similar to the following content:
    
    ```
    network: internal
    ```
    
    -   If the value of network is `internal`, the backup vault accesses the OSS bucket over the internal network.
        
    -   If the value of network is `public`, the backup vault accesses the OSS bucket over the Internet. If the backup vault accesses the OSS bucket over the Internet and the error message indicates a timeout, check whether the cluster can access the Internet. For more information, see [Enable an existing ACK cluster to access the Internet](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-an-existing-ack-cluster-to-access-the-internet).
        
    
    The backup vault must access the OSS bucket over the public network in the following scenarios:
    
    -   The cluster and the OSS bucket are deployed in different regions.
        
    -   The current cluster is an ACK Edge cluster.
        
    -   The current cluster is a registered cluster that is not connected to a virtual private cloud (VPC) using Cloud Enterprise Network (CEN), Express Connect, or a VPN. Another possibility is that the cluster is connected to a VPC, but no route is configured to the internal OSS CIDR block of the region. In this case, you must configure a route to the internal OSS CIDR block.
        
        -   For more information about how to connect an on-premises data center to a VPC, see [Methods that are used to connect data centers to Alibaba Cloud](/help/en/cen/use-cases/combine-multiple-connection-methods-to-build-an-enterprise-class-hybrid-cloud#section-mdc-bny-8bl).
            
        -   For more information about the mapping between internal OSS endpoints and virtual IP address (VIP) CIDR blocks, see [Access OSS using bucket domain names](/help/en/oss/user-guide/access-oss-via-bucket-domain-name).
            
    
    If the backup vault must access the OSS bucket over the public network, run the following commands to change the access method to public network access. In the following code, `<backuplocation-name>` specifies the name of the backup vault and `<region-id>` specifies the region where the OSS bucket is deployed, such as cn-hangzhou.
    
    ```
    kubectl patch -n csdr backuplocation/<backuplocation-name> --type='json' -p   '[{"op":"add","path":"/spec/config","value":{"network":"public","region":"<region-id>"}}]'
    kubectl patch -n csdr backupstoragelocation/<backuplocation-name> --type='json' -p   '[{"op":"add","path":"/spec/config","value":{"network":"public","region":"<region-id>"}}]'
    ```
    

## **The status of the task is Failed and the "HBRError: check HBR vault error" error is returned**

#### **Symptoms**

The status of the backup, restore, or StorageClass conversion task is Failed and the **"**HBRError: check HBR vault error" error is returned.

#### **Cause**

Cloud Backup is not activated or lacks the required permissions.

#### **Solution**

1.  Confirm that you have enabled the Cloud Backup service. For more information, see [Enable Cloud Backup](/help/en/cloud-backup/product-overview/activate-hbr).
    
2.  If your cluster is in a region such as China (Ulanqab), China (Heyuan), or China (Guangzhou), you must also authorize the Cloud Backup service to access API Gateway after you enable the service. For more information, see [(Optional) Step 3: Authorize the Cloud Backup service to access API Gateway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#6d14ddd22b5a7).
    
3.  If your cluster is an ACK Dedicated cluster or a registered cluster, ensure that the relevant Cloud Backup RAM permissions are granted. For more information, see [Install the migrate-controller backup service component and configure permissions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions).
    

## **The status of the task is Failed and the "HBRError: ...** code: 400, Illegal request. Please modify the parameters**" error is returned**

#### **Issue**

The status of the backup, restore, or StorageClass conversion task is Failed and the **"**HBRError**: ...** code: 400, Illegal request. Please modify the parameters" error is returned.

#### **Cause**

The ack-backup-data repository of the Cloud Backup service in the region where the cluster of the failed task resides is deleted.

When you use the backup center to create a backup in a region for the first time, the component automatically creates a repository named ack-backup-data in the region to store the backups created by the backup center. The backups are automatically deleted after the specified validity period expires.

#### **Solution**

**Important**

After the Cloud Backup service repository is deleted, the backups that were created cannot be restored. The following steps can only be used to create a new Cloud Backup service repository for subsequent backup and restore jobs.

1.  In **all** clusters that use the backup center in the current region, run the following commands to clear the records of initialized backup vaults.
    
    ```
    kubectl -ncsdr delete backuplocation --all
    kubectl -ncsdr delete backupstoragelocation --all
    ```
    
2.  Return to the cluster that you want to back up and create a backup. The component automatically creates an ack-backup-data Cloud Backup service repository and associates it with the backup vault.
    

## **The status of the task is Failed and the "**hbr task finished with unexpected status: FAILED, errMsg ClientNotExist" error is returned

#### **Issue**

The status of the backup, restore, or StorageClass conversion task is Failed and the error message hbr task finished with unexpected status: FAILED, errMsg ClientNotExist is returned.

#### **Cause**

The Cloud Backup client is abnormally deployed on the corresponding node. This means that the replica of the hbr-client DaemonSet on the node in the csdr namespace is abnormal.

#### **Solution**

1.  Run the following command to check whether abnormal hbr-client pods exist in the cluster:
    
    ```
    kubectl -n csdr get pod -lapp=hbr-client
    ```
    
2.  If pods are in an abnormal state, first check whether the issue is caused by insufficient pod IP addresses, memory, or CPU resources. If the status of a pod is CrashLoopBackOff, run the following command to view the logs of the pod:
    
    ```
    kubectl -n csdr logs -p <hbr-client-pod-name>
    ```
    
    If the output contains "SDKError:\\n StatusCode: 403\\n Code: MagpieBridgeSlrNotExist\\n Message: code: 403, AliyunServiceRoleForHbrMagpieBridge doesn't exist, please create this role. ", see [(Optional) Step 3: Authorize Cloud Backup to access API Gateway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#6d14ddd22b5a7) to grant permissions to Cloud Backup.
    
3.  If the log output contains other types of SDK errors, you can troubleshoot them using the EC error code (Error
    
    Code). For more information, see [Troubleshoot issues using EC error codes](/help/en/oss/support/self-troubleshooting-by-using-error-codes).
    

## The task remains in the InProgress state for a long period of time

#### **Cause 1 and solution: The components in the csdr namespace are abnormal**

Check the status of the components and identify the cause of the abnormality.

1.  Run the following command to check whether the components in the csdr namespace are restarting or cannot be started:
    
    ```
    kubectl get pod -n csdr
    ```
    
2.  Run the following command to check why the components are restarting or cannot be started:
    
    ```
    kubectl describe pod <pod-name> -n csdr
    ```
    

## If the cause is OOM Restart

-   If an out-of-memory (OOM) exception occurs during restoration, the pod is csdr-velero-\*\*\*, and many applications are running in the restore cluster, such as dozens of production namespaces. The OOM exception may occur because Velero uses the Informer Cache by default to accelerate the restore process, and this cache consumes memory.
    
    If the number of resources to be restored is small or you can accept a performance impact during restoration, you can run the following command to disable the Informer Cache feature:
    
    ```
    kubectl -nkube-system edit deploy migrate-controller
    ```
    
    Add the parameter `--disable-informer-cache=true` to the `args` of the migrate-controller container:
    
    ```
            name: migrate-controller
            args:
            - --disable-informer-cache=true
    ```
    
-   In other cases, or if you do not want to reduce the speed of cluster resource restoration, run the following command to adjust the Limit value of the corresponding deployment.
    
    For `csdr-controller-***`, `<deploy-name>` is `csdr-controller`. For `csdr-velero-***`, `<deploy-name>` is `csdr-velero`.
    
    ```
    kubectl patch deploy  <deploy-name> -p '{"spec":{"containers":{"resources":{"limits":"<new-limit-memory>"}}}}'
    ```
    

## If the cause is "HBR Permissions Are Not Configured, Which Causes The Launch To Fail"

1.  Confirm that the cluster has the Cloud Backup service activated.
    
    -   If it is not activated, activate the Cloud Backup service. For more information, see [Cloud Backup](https://www.alibabacloud.com/zh/product/hybrid-backup-recovery).
        
    -   If Cloud Backup is activated, proceed to the next step.
        
2.  Confirm that the ACK dedicated cluster and the registered cluster have Cloud Backup permissions configured.
    
    -   If they are not configured, configure Cloud Backup permissions. For more information, see [Install migrate-controller and grant permissions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#task-1955156).
        
    -   Configured: You can proceed to the next step.
        
3.  Run the following command to confirm whether the token required by the Cloud Backup Client component exists.
    
    ```
    kubectl describe <hbr-client-***>
    ```
    
    If the event error message couldn't find key HBR\_TOKEN is returned, the token is missing. Perform the following steps to resolve the issue:
    
    1.  Run the following command to query the node where `hbr-client-***` is located:
        
        ```
        kubectl get pod <hbr-client-***> -n csdr -owide
        ```
        
    2.  Run the following command to change the `labels: csdr.alibabacloud.com/agent-enable` of the corresponding Node from `true` to `false`.
        
        ```
        kubectl label node <node-name> csdr.alibabacloud.com/agent-enable=false --overwrite
        ```
        
        **Important**
        
        -   When you back up and restore applications again, the token is automatically created and hbr-client is launched.
            
        -   If you copy the token from another cluster to the current cluster, the hbr-client that is started will not be active. You need to delete the copied token and the `hbr-client-*** Pod` that is started by this token, and then perform the preceding steps.
            
        

#### **Cause 2 and solution: Cluster snapshot permissions are not configured for disk volume backup**

When you use the data backup feature for an application that has a disk volume mounted, if the backup job remains in the InProgress state for a long period of time, run the following command to query the newly created VolumeSnapshot resources in the cluster:

```
kubectl get volumesnapshot -n <backup-namespace>
```

Sample output:

```
NAME                    READYTOUSE      SOURCEPVC         SOURCESNAPSHOTCONTENT         ...
<volumesnapshot-name>   true                              <volumesnapshotcontent-name>  ...
```

If the `READYTOUSE` field of all `volumesnapshot` resources remains `false` for a long time, perform the following steps:

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com) and check whether the disk snapshot feature is enabled.
    
    -   If the disk snapshot feature is not enabled, enable it in the corresponding region. For more information, see [Enable Snapshots](/help/en/ecs/user-guide/activate-ecs-snapshot#task-ojj-1tr-lgb).
        
    -   If the disk snapshot feature is enabled, proceed to the next step.
        
2.  Check whether the CSI component of the cluster runs as expected.
    
    ```
    kubectl -nkube-system get pod -l app=csi-provisioner
    ```
    
3.  Check whether permissions to use disk snapshots are configured.
    
    ## Managed cluster
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
        
    2.  In the left-side navigation pane, choose **Identities** > **Roles**.
        
    3.  On the **Roles** page, search for AliyunCSManagedBackupRestoreRole in the search box and verify that the role's authorization policy includes the following content:
        
        ```
        {
          "Statement": [
            {
              "Effect": "Allow",
              "Action": [
                "hbr:CreateVault",
                "hbr:CreateBackupJob",
                "hbr:DescribeVaults",
                "hbr:DescribeBackupJobs2",
                "hbr:DescribeRestoreJobs",
                "hbr:SearchHistoricalSnapshots",
                "hbr:CreateRestoreJob",
                "hbr:AddContainerCluster",
                "hbr:DescribeContainerCluster",
                "hbr:CancelBackupJob",
                "hbr:CancelRestoreJob",
                "hbr:DescribeRestoreJobs2"
              ],
              "Resource": "*"
            },
            {
              "Effect": "Allow",
              "Action": [
                "ecs:CreateSnapshot",
                "ecs:DeleteSnapshot",
                "ecs:DescribeSnapshotGroups",
                "ecs:CreateAutoSnapshotPolicy",
                "ecs:ApplyAutoSnapshotPolicy",
                "ecs:CancelAutoSnapshotPolicy",
                "ecs:DeleteAutoSnapshotPolicy",
                "ecs:DescribeAutoSnapshotPolicyEX",
                "ecs:ModifyAutoSnapshotPolicyEx",
                "ecs:DescribeSnapshots",
                "ecs:DescribeInstances",
                "ecs:CopySnapshot",
                "ecs:CreateSnapshotGroup",
                "ecs:DeleteSnapshotGroup"
              ],
              "Resource": "*"
            },
            {
              "Effect": "Allow",
              "Action": [
                "oss:PutObject",
                "oss:GetObject",
                "oss:DeleteObject",
                "oss:GetBucket",
                "oss:ListObjects",
                "oss:ListBuckets",
                "oss:GetBucketStat"
              ],
              "Resource": "acs:oss:*:*:cnfs-oss*"
            }
          ],
          "Version": "1"
        }
        ```
        
        -   If the AliyunCSManagedBackupRestoreRole role is missing, go to the [RAM Quick Authorization](https://ram.console.alibabacloud.com/authorize?request=%7B%22template%22%3A%22OldRoleAuthorize%22%2C%22referrer%22%3A%22https%3A%2F%2Faccount.aliyun.com%2F%22%2C%22payloads%22%3A%5B%7B%22missionId%22%3A%22CS.AliyunCSManagedBackupRestoreRole%22%2C%22roleName%22%3A%22AliyunCSManagedBackupRestoreRole%22%7D%5D%2C%22callback%22%3A%22https%3A%2F%2Fcs.console.alibabacloud.com%2F%22%7D) page to grant the AliyunCSManagedBackupRestoreRole role.
            
        -   If the AliyunCSManagedBackupRestoreRole role exists but the policy content is incomplete, grant the preceding permissions to the role. For more information, see [Create custom policies](/help/en/ram/create-a-custom-policy#task-2149286) and [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
            
    
    ## Dedicated cluster
    
    1.  Log on to the [Container Service for Kubernetes (ACK) console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, click the name of the target cluster. In the navigation pane on the left, choose **Cluster Information**.
        
    3.  On the **Cluster Information** page, find the **Master RAM Role** parameter and click the link to the right.
        
    4.  On the **Permission Management** tab, you can check the status of the disk snapshot permissions.
        
        If the k8sMasterRolePolicy-Csi-\*\*\* permission policy does not exist or does not include the following permissions, grant the following disk snapshot permission policy to the Master RAM role. For more information, see [Create a custom permission policy](/help/en/ram/create-a-custom-policy#task-2149286) and [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
        
        ```
        {
          "Statement": [
            {
              "Effect": "Allow",
              "Action": [
                "hbr:CreateVault",
                "hbr:CreateBackupJob",
                "hbr:DescribeVaults",
                "hbr:DescribeBackupJobs2",
                "hbr:DescribeRestoreJobs",
                "hbr:SearchHistoricalSnapshots",
                "hbr:CreateRestoreJob",
                "hbr:AddContainerCluster",
                "hbr:DescribeContainerCluster",
                "hbr:CancelBackupJob",
                "hbr:CancelRestoreJob",
                "hbr:DescribeRestoreJobs2"
              ],
              "Resource": "*"
            },
            {
              "Effect": "Allow",
              "Action": [
                "ecs:CreateSnapshot",
                "ecs:DeleteSnapshot",
                "ecs:DescribeSnapshotGroups",
                "ecs:CreateAutoSnapshotPolicy",
                "ecs:ApplyAutoSnapshotPolicy",
                "ecs:CancelAutoSnapshotPolicy",
                "ecs:DeleteAutoSnapshotPolicy",
                "ecs:DescribeAutoSnapshotPolicyEX",
                "ecs:ModifyAutoSnapshotPolicyEx",
                "ecs:DescribeSnapshots",
                "ecs:DescribeInstances",
                "ecs:CopySnapshot",
                "ecs:CreateSnapshotGroup",
                "ecs:DeleteSnapshotGroup"
              ],
              "Resource": "*"
            },
            {
              "Effect": "Allow",
              "Action": [
                "oss:PutObject",
                "oss:GetObject",
                "oss:DeleteObject",
                "oss:GetBucket",
                "oss:ListObjects",
                "oss:ListBuckets",
                "oss:GetBucketStat"
              ],
              "Resource": "acs:oss:*:*:cnfs-oss*"
            }
          ],
          "Version": "1"
        }
        ```
        
    
    ## Registered cluster
    
    Only registered clusters whose nodes are all Alibaba Cloud Elastic Compute Service (ECS) instances can use the disk snapshot feature. Check whether the related permissions are granted when you install the CSI storage plug-in. For more information, see [Configure RAM permissions for the CSI component](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/use-alibaba-cloud-csi-storage-in-registered-clusters#492b7b20297bq).
    

#### **Cause 3 and solution: Storage volumes other than disk volumes are used**

The migrate-controller component of the backup center supports cross-region restoration for backups of disk volumes in versions 1.7.7 and later. Backups of other volume types cannot be restored across regions. If you are using a storage service that supports Internet access, such as OSS, you can create a statically provisioned PV and PVC and then restore the application. For more information, see [Use an ossfs 1.0 statically provisioned volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes).

## **The status of the backup task is Failed and the "backup already exists in OSS bucket" error is returned**

#### **Issue**

The status of the backup job is **Failed** and the "backup already exists in OSS bucket" error is returned.

#### **Cause**

A backup with the same name is stored in the OSS bucket associated with the backup vault.

A backup may be invisible in the current cluster for the following reasons:

-   Backups in ongoing backup jobs and failed backup jobs are not synchronized to other clusters.
    
-   If you delete a backup in a cluster other than the source backup cluster, the backup file in the OSS bucket is labeled but not deleted. This labeled backup file is not synchronized to newly associated clusters.
    
-   The current cluster is not associated with the backup vault that stores the backup. This means the backup vault is not initialized.
    

#### **Solution**

Create a backup vault with a new name.

## The status of the backup task is Failed and the "get target namespace failed" error is returned

#### **Issue**

The status of the backup job is **Failed** and the "get target namespace failed" error is returned.

#### **Cause**

In most cases, this error occurs in backup jobs that are created at a scheduled time. The cause varies based on how you select namespaces.

-   If you select **Include**, all selected namespaces will be deleted.
    
-   If you select **Exclude**, the selected namespaces are excluded from the cluster.
    

#### **Solution**

Modify the backup plan to change the method that is used to select namespaces and change the namespaces that you have selected.

## The status of the backup task is Failed and the "velero backup process timeout" error is returned

#### **Issue**

The status of the backup job is **Failed** and the "velero backup process timeout" error is returned.

#### **Cause**

-   **Cause 1**: The subtask of the application backup times out. The duration of a subtask varies depending on the number of cluster resources and the response latency of the API server. In migrate-controller 1.7.7 and later, the default timeout period of subtasks is 60 minutes.
    
-   **Cause 2**: The storage class of the bucket used by the backup vault is Archive, Cold Archive, or Deep Cold Archive. To ensure data consistency during the backup process, the backup center component must update metadata files on the OSS server. The backup center component cannot update files that have not been restored from Archive Storage.
    

#### **Solution**

-   **Solution 1**: Modify the global configuration of the subtask timeout period in the backup cluster.
    
    Run the following command to add the `velero_timeout_minutes` configuration item to applicationBackup. The unit is minutes.
    
    ```
    kubectl edit -n csdr cm csdr-config
    ```
    
    For example, the following code block sets the timeout period to 100 minutes:
    
    ```
    apiVersion: v1
    data:
      applicationBackup: |
        ... #Details not shown.
        velero_timeout_minutes: 100
    ```
    
    After you modify the timeout period, run the following command to restart csdr-controller for the modification to take effect:
    
    ```
    kubectl -n csdr delete pod -l control-plane=csdr-controller
    ```
    
-   **Solution 2**: Change the storage class of the bucket used by the backup vault to Standard.
    
    If you want to store backup data in Archive Storage, you can configure a lifecycle rule to automatically convert the storage class. You must restore the data before you can perform a recovery. For more information, see [Convert storage classes](/help/en/oss/user-guide/convert-storage-classes).
    

## **The status of the backup task is Failed and the "HBR backup request failed" error is returned**

#### **Issue**

The status of the backup job is **Failed** and the "HBR backup request failed" error is returned.

#### **Cause**

-   **Cause 1**: The storage plug-in used by the cluster is not compatible.
    
-   **Cause 2**: Cloud Backup does not support backing up volumes whose volumeMode is Block. For more information, see [Volume Mode](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#volume-mode).
    
-   **Cause 3**: The Cloud Backup client is abnormal, which causes the backup or restore job for file system volumes, such as OSS volumes, NAS volumes, CPFS volumes, or local volumes, to time out or fail.
    

#### **Solution**

-   **Solution 1:** If your cluster uses a non-Alibaba Cloud CSI storage plug-in, or if the persistent volume (PV) is not a common Kubernetes storage volume such as an NFS or LocalVolume, and you encounter compatibility issues, please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
    
-   **Solution 2:** In most cases, only disk storage requires volumes in Block mode. If the storage plug-in of your cluster is CSI, disk snapshots are used for data backup by default. Disk snapshots support the backup of volumes in Block mode. If the storage plug-in type is incorrect, switch the storage plug-in to CSI, reinstall the backup component, and then perform the backup again.
    
-   **Solution 3:** Perform the following steps:
    
    1.  Log on to the [Cloud Backup console](https://hbr.console.alibabacloud.com).
        
    2.  In the left navigation pane, choose **Backup >** **Container Backup**. On the Container Backup page, click the **Backup Jobs** tab.
        
    3.  In the top navigation bar, select a region.
        
    4.  On the **Backup Jobs** tab, click the drop-down menu next to the search box, select **Job Name**, and then search for `<backup-name>-hbr` to view the status of the backup job and the reason for its status. For more information, see [Back up ACK clusters](/help/en/cloud-backup/user-guide/view-cluster-backups#section-atj-rnb-d9r).
        
        **Note**
        
        If you want to query a StorageClass conversion or backup job, search for the corresponding backup name.
        
    

## The status of the backup task is Failed, **and the "**hbr task finished with unexpected status: FAILED, errMsg SOURCE\_NOT\_EXIST" error is returned

#### **Issue**

The status of the backup job is **Failed**, and the "hbr task finished with unexpected status: FAILED, errMsg SOURCE\_NOT\_EXIST" error is returned.

#### **Cause**

-   For CSI of other cloud vendors, or self-managed storage types such as NFS and Ceph:
    
    In hybrid cloud scenarios, the backup center uses the standard Kubernetes volume mount path as the data backup path by default. For example, for the standard CSI storage driver, the default mount path is `/var/lib/kubelet/pods/<pod-uid>/volumes/kubernetes.io~csi/<pv-name>/mount`. The same applies to storage drivers that are officially supported by Kubernetes, such as NFS and FlexVolume.
    
    In this case, `/var/lib/kubelet` is the default kubelet root path. If you modify this path in your Kubernetes cluster, Cloud Backup may not be able to access the data that needs to be backed up.
    
-   For the HostPath storage type:
    
    HostPath storage does not create a mount path under the kubelet root path. Instead, the pod directly mounts the specified node path. By default, the backup component cannot read data from the node path, which causes the backup to fail.
    

#### **Solution**

-   For CSI of other cloud vendors, or self-managed storage types such as NFS and Ceph:
    
    Log on to the node where the volume is mounted and perform the following steps to troubleshoot the issue:
    
    1.  Check whether the kubelet root path of the node is changed
        
        1.  Run the following command to query the kubelet startup command
            
            ```
            ps -elf | grep kubelet
            ```
            
            If the startup command contains the `--root-dir` parameter, the value of this parameter is the kubelet root path.
            
            If the startup command contains the `--config` parameter, the value of this parameter is the kubelet configuration file. If the file contains the `root-dir` field, the value of this field is the kubelet root path.
            
        2.  If the startup command does not contain root path information, query the content of the kubelet service startup file `/etc/systemd/system/kubelet.service`. If the file contains the EnvironmentFile field, such as:
            
            ```
            EnvironmentFile=-/etc/kubernetes/kubelet
            ```
            
            The environment variable configuration file is `/etc/kubernetes/kubelet`. Query the content of the configuration file. If the file contains the following content:
            
            ```
            ROOT_DIR="--root-dir=/xxx"
            ```
            
            The kubelet root path is /xxx.
            
        3.  If you cannot find any changes, the kubelet root path is the default path `/var/lib/kubelet`.
            
    2.  Run the following command to check whether the kubelet root path is a symbolic link to another path:
        
        ```
        ls -al <root-dir>
        ```
        
        If the output is similar to the following content:
        
        ```
        lrwxrwxrwx   1 root root   26 Dec  4 10:51 kubelet -> /var/lib/container/kubelet
        ```
        
        The actual root path is `/var/lib/container/kubelet`.
        
    3.  Verify that the data of the target storage volume exists under the root path.
        
        Make sure that the volume mount path `<root-dir>/pods/<pod-uid>/volumes` exists and that the subpath of the target type of storage volume exists under the path, such as `kubernetes.io~csi` or `kubernetes.io~nfs`.
        
    4.  Add the environment variable `KUBELET_ROOT_PATH = /var/lib/container/kubelet/pods` to the `csdr/csdr-controller` stateless application. `/var/lib/container/kubelet` is the actual kubelet root path that you retrieved by querying the configuration and symbolic link.
        
    
-   For the HostPath storage type:
    
    Please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

## **The status of the backup task is Failed and the "check backup files in OSS bucket failed" or "upload backup files to OSS bucket failed" or "download backup files from OSS bucket failed" error is returned**

#### **Issue**

The status of the backup job is **Failed** and the "upload backup files to OSS bucket failed" error is returned.

#### **Cause**

The OSS server returns an error when the component checks, uploads, or downloads backup files in the OSS bucket associated with the backup vault. The issue may arise from one of the following causes:

-   **Cause 1**: Data encryption is enabled for the OSS bucket, but the related KMS permissions are not granted.
    
-   **Cause 2**: Some read and write permissions are missing when you install the component and configure permissions for ACK dedicated clusters and registered clusters.
    
-   **Cause 3**: The authentication credential of the RAM user that is used to configure permissions for ACK dedicated clusters and registered clusters is revoked.
    

#### **Solution**

-   **Solution 1**: See [Does the backup center support data encryption for associated OSS buckets? How do I grant the permissions to use Key Management Service (KMS) for server-side encryption?](#1d890015a0ssv)
    
-   **Solution 2**: Check the permission policy of the RAM user that is used to configure permissions. For more information about the permission policy required by the component, see [Step 1: Configure permissions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#5dcb22512a8zp).
    
-   **Solution 3**: Confirm whether the authentication credentials of the RAM user used for configuring permissions are enabled. If they have been revoked, obtain new authentication credentials and update the content of the Secret `alibaba-addon-secret` in the csdr namespace. Then, perform the following operation to restart the component:
    
    ```
    kubectl -nkube-system delete pod -lapp=migrate-controller
    ```
    

## **The status of the backup task is PartiallyFailed and the "PROCESS velero partially completed" error is returned**

#### **Issue**

The status of the backup job is **PartiallyFailed** and the "PROCESS velero partially completed" error is returned.

#### **Cause**

When you use the velero component to back up applications, which are resources in the cluster, the component fails to back up some of the resources.

#### **Solution**

Run the following command to identify the resources that failed to be backed up and the cause of the failure:

```
 kubectl -n csdr exec -it $(kubectl -n csdr get pod -l component=csdr | tail -n 1 | cut -d ' ' -f1) -- ./velero describe backup <backup-name>
```

Fix the issue based on the information in the `Errors` and `Warnings` fields of the output.

If no direct cause of the failure is displayed, run the following command to obtain the related exception logs:

```
 kubectl -n csdr exec -it $(kubectl -n csdr get pod -l component=csdr | tail -n 1 | cut -d ' ' -f1) -- ./velero backup logs <backup-name>
```

## **The status of the backup task is PartiallyFailed and the "PROCESS hbr partially completed" error is returned**

#### **Issue**

The status of the backup job is **PartiallyFailed** and the error message "PROCESS hbr partially completed" is returned.

#### **Cause**

When you use Cloud Backup to back up file system volumes, such as OSS volumes, NAS volumes, CPFS volumes, or local volumes, Cloud Backup fails to back up some resources. The issue may arise from one of the following causes:

-   **Cause 1**: The storage plug-in used by some volumes is not supported.
    
-   **Cause 2**: Cloud Backup does not guarantee data consistency. If files are deleted during backup, the backup may fail.
    

#### **Solution**

1.  Log on to the [Cloud Backup console](https://hbr.console.alibabacloud.com).
    
2.  In the left navigation pane, choose **Backup >** **Container Backup**. On the Container Backup page, click the **Backup Jobs** tab.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Backup Jobs** tab, click the drop-down menu next to the search box, select **Job Name**, and search for `<backup-name>-hbr` to determine why the persistent volume backup failed or partially failed. For more information, see [Back up ACK clusters](/help/en/cloud-backup/user-guide/view-cluster-backups#section-atj-rnb-d9r).
    

## **The status of the StorageClass conversion task is Failed and the "storageclass xxx not exists" error is returned**

#### **Issue**

The status of the StorageClass conversion task is **Failed** and the "storageclass xxx not exists" error is returned.

#### **Cause**

The target storage class that you select for StorageClass conversion does not exist in the current cluster.

#### **Solution**

1.  Run the following command to reset the StorageClass conversion task:
    
    ```
    cat << EOF | kubectl apply -f -
    apiVersion: csdr.alibabacloud.com/v1beta1
    kind: DeleteRequest
    metadata:
      name: reset-convert
      namespace: csdr
    spec:
      deleteObjectName: "<backup-name>"
      deleteObjectType: "Convert"
    EOF
    ```
    
2.  Create the desired storage class in the current cluster.
    
3.  Run the restore job again and configure StorageClass conversion.
    

## **The status of the StorageClass conversion task is Failed and the "only support convert to storageclass with CSI diskplugin or nasplugin provisioner" error is returned**

#### **Issue**

The status of the StorageClass conversion task is **Failed** and the error message "only support convert to storageclass with CSI diskplugin or nasplugin provisioner" is returned.

#### **Cause**

The target storage class that you select for StorageClass conversion is not an Alibaba Cloud CSI disk volume or NAS volume.

#### **Solution**

-   The current version supports snapshot creation and recovery only for disk, NAS, and OSS types by default. If you have other recovery requirements, please contact support by [submitting a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    
-   If you are using a storage service that supports public network access, such as OSS, you can create a statically provisioned PV and PVC and then restore the application without the StorageClass conversion step. For more information, see [Use an ossfs 1.0 statically provisioned volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes).
    

## **The status of the StorageClass conversion task is Failed and the "current cluster is multi-zoned" error is returned**

#### **Issue**

The status of the StorageClass conversion task is **Failed** and the "current cluster is multi-zoned" error is returned.

#### **Cause**

The current cluster is a multi-zone cluster. When you convert to a disk-type StorageClass, the volumeBindingMode of the target StorageClass is Immediate. If you use this type of StorageClass in a multi-zone cluster, pods cannot be scheduled to the specified node and remain in the Pending state after a persistent volume is created. For more information about the volumeBindingMode field, see [StorageClass](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/disk-volume-overview-3/#section-6v0-0tf-eqw).

#### **Solution**

1.  Run the following command to reset the StorageClass conversion task:
    
    ```
    cat << EOF | kubectl apply -f -
    apiVersion: csdr.alibabacloud.com/v1beta1
    kind: DeleteRequest
    metadata:
      name: reset-convert
      namespace: csdr
    spec:
      deleteObjectName: "<backup-name>"
      deleteObjectType: "Convert"
    EOF
    ```
    
2.  If you want to convert to a disk storage class:
    
    -   If you use the console, select **alicloud-disk**. The default storage class for **alicloud-disk** is **alicloud-disk-topology-alltype**.
        
    -   If you use the command line, select the **alicloud-disk-topology-alltype** type. **alicloud-disk-topology-alltype** is the default storage class provided by the CSI storage plug-in. You can also set volumeBindingMode to WaitForFirstConsumer.
        
3.  Run the restore job again and configure StorageClass conversion.
    

## **The status of the restore task is Failed and the "multi-node writing is only supported for block volume" error is returned**

#### **Issue**

The status of the restore or StorageClass conversion task is Failed and the error message "multi-node writing is only supported for block volume. For Kubernetes users, if unsure, use ReadWriteOnce access mode in PersistentVolumeClaim for disk volume" is returned.

#### **Cause**

To prevent the risk of a forced disk detachment when a disk is mounted to another node, CSI checks the `AccessModes` configuration of disk volumes during mounting and prohibits the use of ReadWriteMany or ReadOnlyMany.

The application to be backed up mounts a volume whose AccessMode is ReadWriteMany or ReadOnlyMany. This is common for network storage that supports multiple mounts, such as OSS or NAS. When you restore the application to Alibaba Cloud disk storage, which does not support multiple mounts by default, CSI may return the preceding error.

Specifically, the following three scenarios may cause this error:

**Scenario 1**: The CSI version of the backup cluster is earlier, or the cluster uses the FlexVolume storage plug-in. Earlier CSI versions do not check the AccessModes field of Alibaba Cloud disk volumes during mounting. This causes the original disk volume to report an error when it is restored in a cluster with a later CSI version.

**Scenario 2**: The custom storage class used by the backup volume does not exist in the restore cluster. According to a certain matching rule, the volume is restored as an Alibaba Cloud disk volume by default in the new cluster.

**Scenario 3**: During restoration, you use the StorageClass conversion feature to manually specify that the backup volume is restored as an Alibaba Cloud disk volume.

#### **Solution**

**Scenario 1**: Starting from v1.8.4, the backup component supports automatic conversion of the AccessModes field of disk volumes to ReadWriteOnce. Upgrade the backup center component and then restore the application again.

**Scenario 2**: Automatic restoration of the storage class by the component in the destination cluster may risk data inaccessibility or data overwriting. Create a storage class with the same name in the destination cluster before restoration, or use the StorageClass conversion feature to specify the storage class to be used during restoration.

**Scenario 3**: When you restore a network storage volume as a disk volume, configure the convertToAccessModes parameter to convert AccessModes to ReadWriteOnce. For more information, see [convertToAccessModes: the list of target AccessModes.](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kubectl-cli-to-backup-and-restore-data#8766e38022v5t)

## **The status of the restore task is Failed and the "only disk type PVs support cross-region restore in current version" error is returned**

#### **Issue**

The status of the restore job is **Failed** and the error message "only disk type PVs support cross-region restore in current version" is returned.

#### **Cause**

In migrate-controller 1.7.7 and later versions, backups of disk volumes can be restored across regions. Backups of other volume types cannot be restored across regions.

#### **Solution**

-   If you are using a storage service that supports Internet access, such as OSS, you can create a statically provisioned PV and PVC and then restore the application. For more information, see [Use an ossfs 1.0 statically provisioned volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes).
    

## **The status of the restore task is Failed and the "ECS snapshot cross region request failed" error is returned**

#### **Issue**

The status of the restore job is **Failed** and the "ECS snapshot cross region request failed" error is returned.

#### **Cause**

In migrate-controller 1.7.7 and later versions, backups of disk volumes can be restored across regions, but the permissions to use ECS disk snapshots are not granted.

#### **Solution**

If your cluster is an ACK dedicated cluster or a registered cluster that is connected to a self-managed Kubernetes cluster deployed on ECS instances, you must grant the permissions to use ECS disk snapshots. For more information, see [Registered cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#50a56040f4q4q).

## The status of the restore task is Failed and the "accessMode of PVC xxx is xxx" error is returned

#### **Issue**

The status of the restore job is Failed and the "accessMode of PVC xxx is xxx" error is returned.

#### **Cause**

The `AccessMode` of the disk volume to be restored is set to `ReadOnlyMany` (read-only multi-mount) or `ReadWriteMany` (read-write multi-mount).

When you restore the disk volume, the new volume is mounted using CSI. Take note of the following items when you use the current version of CSI:

-   Only volumes with the `multiAttach` feature enabled can be mounted to multiple instances.
    
-   Volumes whose `VolumeMode` is set to `Filesystem` (mounted using a file system such as ext4 or xfs) can only be mounted to multiple instances in read-only mode.
    

For more information about disk storage, see [Use a dynamically provisioned disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes).

#### **Solution**

-   If you are using the StorageClass conversion feature to convert a volume that supports multiple mounts, such as an OSS or NAS volume, to a disk volume, and you want to ensure that different replicas of your application can normally share data on the volume, we recommend that you create a new restore job and select `alibabacloud-cnfs-nas` as the target type for StorageClass conversion. This way, a NAS volume managed by CNFS is used. For more information, see [Use CNFS to manage NAS file systems (recommended)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-nas-file-systems).
    
-   If the CSI version was low when you backed up the disk persistent volume (without `AccessMode` detection) and the backed-up persistent volume itself does not meet the current CSI creation requirements, you should prioritize [using dynamically provisioned disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes) to transform your original workloads to avoid the threat of forced disk detachment when scheduling to other nodes.
    

## **The status of the restore task is Completed but some resources are not created in the restore cluster**

#### **Issue**

The status of the restore job is **Completed** but some resources are not created in the restore cluster.

#### **Cause**

-   **Cause 1:** The resource was not backed up.
    
-   **Cause 2:** The resource was excluded during restoration based on the configuration.
    
-   **Cause 3:** The application restore subtask partially failed.
    
-   **Cause 4:** The resource was successfully restored but was recycled due to the `ownerReferences` configuration or other business logic.
    

#### **Solution**

**Solution 1:**

Run the following command to view the backup details:

```
 kubectl -n csdr exec -it $(kubectl -n csdr get pod -l component=csdr | tail -n 1 | cut -d ' ' -f1) -- ./velero describe backup <backup-name> --details
```

Check if the target resource was backed up. If the target resource was not backed up, check if it was excluded due to the namespace, resource, or other configurations specified in the backup job. Then, back up the resource again. By default, cluster-level resources of running applications (pods) in namespaces that are not selected are not backed up. If you want to back up all cluster-level resources, see [Cluster-level backup](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-backup-center-to-migrate-applications-from-clusters-running-lower-kubernetes-versions#146a86b07d9iu).

**Solution 2:**

If the target resource was not restored, check whether it was excluded due to the namespace, resource, or other configurations specified in the restore job, and then restore the resource again.

**Solution 3:**

Run the following command to identify the resources that failed to be restored and the cause of the failure:

```
 kubectl -n csdr exec -it $(kubectl -n csdr get pod -l component=csdr | tail -n 1 | cut -d ' ' -f1) -- ./velero describe restore <restore-name> 
```

Fix the issues according to the prompts in the `Errors` and `Warnings` fields in the outputs.

**Solution 4:**

Check the audit logs of the corresponding resource to determine whether it was abnormally deleted after it was created.

## The migrate-controller component in a cluster that uses FlexVolume cannot be launched

The migrate-controller component does not support clusters that use FlexVolume. To use the backup center feature, use one of the following methods to migrate from FlexVolume to CSI:

-   [Migrate from FlexVolume to CSI using the csi-compatible-controller component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-compatible-controller-to-migrate-from-flexvolume-to-csi#main-2350226)
    
-   [Migrate FlexVolume without a storage cluster to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-from-flexvolume-to-csi-for-clusters-where-no-data-is-stored#task-2279380)
    
-   [Migrate statically provisioned NAS volumes from Flexvolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-to-take-over-the-statically-provisioned-nas-volumes-managed-by-flexvolume#task-2293440)
    
-   [Migrate statically provisioned OSS volumes from FlexVolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-to-take-over-the-statically-provisioned-oss-volumes-managed-by-flexvolume#task-2293442)
    
-   In other cases, join the DingTalk user group (group ID: 35532895) for consultation.
    

To back up applications in a FlexVolume cluster and restore them in a CSI cluster during the migration from FlexVolume to CSI, see [Use the backup center to migrate applications in a Kubernetes cluster that runs an older version](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-backup-center-to-migrate-applications-from-clusters-running-lower-kubernetes-versions).

## Can I modify the backup vault?

No, you cannot modify a backup vault. To make changes, you must delete the current backup vault and create a new one with a different name.

Because a backup vault is a shared resource, it may be in a **Backup** or **Restore** state at any time. If you modify the vault's parameters, the system may be unable to find the required data during an application backup or restore. Therefore, you cannot modify a backup vault or create a new one with the same name.

## **Can I associate a backup vault with an OSS bucket whose name is not in the "cnfs-oss-\*" format?**

For clusters other than ACK dedicated clusters and registered clusters, the backup center component has read and write permissions on OSS buckets whose names are in the `cnfs-oss-*` format by default. To prevent backups from overwriting existing data in the bucket, we recommend that you create a dedicated OSS bucket whose name is in the `cnfs-oss-*` format for the backup center.

1.  If you want to associate a backup vault with an OSS Bucket whose name is **not in the "cnfs-oss-\*"** format, you must configure permissions for the component. For more information, see [ACK dedicated cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#7db0264084n9c).
    
2.  After you grant permissions, run the following command to restart the backup service component:
    
    ```
    kubectl -n csdr delete pod -l control-plane=csdr-controller
    kubectl -n csdr delete pod -l component=csdr
    ```
    
    If you have created a backup vault that is associated with an OSS bucket whose name is **not in the "cnfs-oss-\*"** format, wait until the connectivity check is complete and the status changes to **Available** before you attempt to back up or restore applications. The interval of connectivity checks is about five minutes. You can run the following command to query the status of the backup vault:
    
    ```
    kubectl -n csdr get backuplocation
    ```
    
    Expected output:
    
    ```
    NAME                    PHASE       LAST VALIDATED   AGE
    a-test-backuplocation   Available   7s               6d1h
    ```
    

## **How do I specify the backup cycle when I create a backup plan?**

The backup cycle supports Crontab expressions, such as `1 4 * * *`, or interval-based backup, such as 6h30m, which means that a backup is created every 6 hours and 30 minutes.

The following describes how to parse Crontab expressions. The optional values are the same as the standard Crontab expressions, except that the optional values of minute are 0 to 59. `*` indicates any available value for the given field. Sample Crontab expressions:

-   `1 4 * * *`: Create a backup at 4:01 AM every day.
    
-   `0 2 15 * 1`: Create a backup at 2:00 AM on the 15th day of each month.
    

```
 *  *  *  *  * 
 |  |  |  |  |
 |  |  |  |  ·----- day of week (0 - 6) (Sun to Sat)
 |  |  |  ·-------- month (1 - 12) 
 |  |  .----------- day of month (1 - 31)
 |  ·-------------- hour (0 - 23) 
 ·----------------- minute (0 - 59)  
 
```

## **What changes are made to the YAML files of resources when I run a restore job?**

When you restore resources, the following changes are made to the YAML files of resources:

**Change 1**:

If the size of a disk volume is less than 20 GiB, the volume size is changed to 20 GiB.

**Change 2**:

Services are restored based on their type:

-   NodePort Services: By default, Service ports are retained when you restore Services across clusters.
    
-   LoadBalancer Services: When ExternalTrafficPolicy is set to Local, HealthCheckNodePort uses a random port by default. If you want to retain the port number, set `spec.preserveNodePorts: true` when you create a restore job.
    
    -   If you restore a Service that uses an existing Server Load Balancer (SLB) instance in the backup cluster, the restored Service uses the same SLB instance and disables the listeners by default. You need to log on to the SLB console to configure the listeners.
        
    -   If you restore a Service whose SLB instance is managed by CCM in the backup cluster, CCM creates a new SLB instance. For more information, see [Considerations for configuring a LoadBalancer Service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#section-3g5-unp-i66).
        

## **How do I view backup resources?**

#### **Resources in cluster application backups**

The YAML files in the cluster are stored in the OSS bucket associated with the backup vault. You can use one of the following methods to view backup resources:

-   Run the following command in a cluster to which backup files are synchronized to view backup resources:
    
    ```
    kubectl -n csdr get pod -l component=csdr | tail -n 1 | cut -d ' ' -f1
    kubectl -n csdr exec -it csdr-velero-xxx -c velero -- ./velero describe backup <backup-name> --details
    ```
    
-   You can view this in the Container Service console.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, choose **Clusters**.
        
    2.  On the **Clusters** page, click the name of the target cluster. In the navigation pane on the left, choose **Operations** > **Application Backup**.
        
    3.  On the **Application Backup** page, click the **Backup Records** tab. In the **Backup Records** column, click a backup record.
        

#### **Resources in disk volume backups**

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Storage & Snapshots** > **Snapshots**.
    
3.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
4.  On the Snapshots page, query snapshots based on the disk ID.
    

#### **Resources in non-disk volume backups**

1.  Log on to the [Cloud Backup console](https://hbr.console.alibabacloud.com).
    
2.  In the navigation pane on the left, choose **Backup** > **Container Backup**.
    
3.  In the top navigation bar, select a region.
    
4.  View the basic information of cluster backups.
    
    -   **Clusters**: The list of clusters that have been backed up and protected. Click **ACK Cluster ID** to view the protected persistent volume claims (PVCs). For more information about PVCs, see [Persistent volume claim (PVC)](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/terms#concept-b4m-chb-5db).
        
        If **Client Status** is abnormal, Cloud Backup is not running as expected in the ACK cluster. Go to the DaemonSets page in the ACK console to troubleshoot the issue.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7353392271/p816592.png)
        
    -   **Backup Jobs**: The status of backup jobs.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7353392271/p816615.png)
        
    

## **Can I back up applications in a cluster that runs an earlier Kubernetes version and restore the applications in a cluster that runs a later Kubernetes version?**

Yes, this is supported.

By default, when you back up resources, all API versions supported by the resources are backed up. For example, a deployment in a cluster that runs Kubernetes 1.16 supports extensions/v1beta1, apps/v1beta1, apps/v1beta2, and apps/v1. When you back up the deployment, the backup vault stores all four API versions regardless of which version you use when you create the deployment. The KubernetesConvert feature is used for API version conversion.

When you restore resources, the API version recommended by the restore cluster is used for restoration. For example, if you restore the preceding deployment in a cluster that runs Kubernetes 1.28 and the recommended API version is apps/v1, the restored deployment will use apps/v1.

**Important**

If no API version is supported by both clusters, you must manually deploy the resource. For example, Ingresses in clusters that run Kubernetes 1.16 support extensions/v1beta1 and networking.k8s.io/v1beta1. You cannot restore the Ingresses to clusters that run Kubernetes 1.22 or later because Ingresses in these clusters support only networking.k8s.io/v1. For more information about Kubernetes API version migration, see [the official documentation](https://kubernetes.io/zh-cn/docs/reference/using-api/deprecation-guide/#v1-16). Due to API version compatibility issues, we recommend that you do not use the backup center to migrate applications from clusters of later Kubernetes versions to clusters of earlier Kubernetes versions. We also recommend that you do not migrate applications from clusters of Kubernetes versions earlier than 1.16 to clusters of later Kubernetes versions.

## **Is traffic automatically switched to SLB instances during restoration?**

No, it is not.

Services are restored based on their type:

-   NodePort Services: By default, Service ports are retained when you restore Services across clusters.
    
-   LoadBalancer Services: When ExternalTrafficPolicy is set to Local, HealthCheckNodePort uses a random port by default. If you want to retain the port number, set `spec.preserveNodePorts: true` when you create a restore job.
    
    -   If you restore a Service that uses an existing Server Load Balancer (SLB) instance in the backup cluster, the restored Service uses the same SLB instance and disables the listeners by default. You need to log on to the SLB console to configure the listeners.
        
    -   If you restore a Service whose SLB instance is managed by CCM in the backup cluster, CCM creates a new SLB instance. For more information, see [Considerations for configuring a LoadBalancer Service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#section-3g5-unp-i66).
        

By default, after listeners are disabled or new SLB instances are used, traffic is not automatically switched to the new SLB instances. If you use other cloud services or third-party service discovery and do not want automatic service discovery to switch traffic to the new SLB instances, you can exclude Service resources during backup and manually deploy them when you need to switch traffic.

## **Why are resources in the csdr,** ack-csi-fuse, **kube-system, kube-public, and kube-node-lease namespaces not backed up by default?**

-   csdr is the namespace of the backup center. If you directly back up and restore this namespace, components will fail to work in the restore cluster. Additionally, the backup center has a backup synchronization logic, which means you do not need to manually migrate backups to a new cluster.
    
-   ack-csi-fuse is the namespace of the CSI storage component and is used to run FUSE client pods maintained by CSI. When you restore storage in a new cluster, the CSI of the new cluster automatically synchronizes to the corresponding client. You do not need to manually back up and restore this namespace.
    
-   kube-system, kube-public, and kube-node-lease are the default system namespaces of Kubernetes clusters. Due to differences in cluster parameters and configurations, you cannot restore these namespaces across clusters. Additionally, the backup center is used to back up and restore applications. Before you run a restore job, you must install and configure system components in the restore cluster, such as:
    
    -   Container Registry password-free image pulling component: You need to grant permissions to and configure acr-configuration in the restore cluster.
        
    -   ALB Ingress component: You need to configure ALBConfig.
        
    
    If you directly back up system components in the kube-system namespace to a new cluster, the system components may fail to run in the new cluster.
    

## **Does the backup center use ECS disk snapshots to back up disk volumes? What is the default type of snapshots?**

In the following scenarios, the backup center uses ECS disk snapshots to back up disk volumes by default:

1.  The cluster is an ACK managed cluster or an ACK dedicated cluster.
    
2.  The cluster runs Kubernetes 1.18 or later and uses CSI 1.18 or later.
    

In other scenarios, the backup center uses Cloud Backup to back up disk data by default.

Disk snapshots created by the backup center have the instant access feature enabled by default. The validity period of disk snapshots is the same as the validity period specified in the backup configuration by default. Starting from October 12, 2023, 11:00, Alibaba Cloud no longer charges for snapshot instant access storage or snapshot instant access operations in all regions. For more information, see [Use the instant access feature](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).

## **Why is the validity period of ECS disk snapshots created from backups different from the validity period specified in the backup configuration?**

The creation of disk snapshots depends on the csi-provisioner component or managed-csiprovisioner component of a cluster. If the version of the csi-provisioner component is earlier than 1.20.6, you cannot specify the validity period or enable the snapshot instant access feature when you create VolumeSnapshots. In this case, the validity period in the backup configuration does not affect disk snapshots.

**Therefore, when you use the volume data backup feature for disk volumes, you must upgrade the csi-provisioner component to 1.20.6 or later.**

If csi-provisioner cannot be upgraded to this version, you can configure the default snapshot validity period in the following ways:

1.  Update the backup center component migrate-controller to v1.7.10 or later.
    
2.  Run the following command to check whether a VolumeSnapshotClass whose retentionDays is 30 exists in the cluster:
    
    ```
    kubectl get volumesnapshotclass csdr-disk-snapshot-with-default-ttl
    ```
    
    -   If the VolumeSnapshotClass does not exist, you can use the following YAML to create a VolumeSnapshotClass named csdr-disk-snapshot-with-default-ttl.
        
    -   If the VolumeSnapshotClass exists, set the `retentionDays` parameter of the default csdr-disk-snapshot-with-default-ttl VolumeSnapshotClass to 30.
        
        ```
        apiVersion: snapshot.storage.k8s.io/v1
        deletionPolicy: Retain
        driver: diskplugin.csi.alibabacloud.com
        kind: VolumeSnapshotClass
        metadata:
          name: csdr-disk-snapshot-with-default-ttl
        parameters:
          retentionDays: "30"
        ```
        
3.  After the configuration is complete, all disk volume backups created in the cluster will create disk snapshots with the same validity period as the `retentionDays` field.
    
    **Important**
    
    If you want the validity period of ECS disk snapshots created from backups to be the same as the validity period specified in the backup configuration, we recommend that you upgrade the csi-provisioner component to 1.20.6 or later.
    

## What is volume data backup, and in what scenarios do I need to back up volumes when backing up applications?

#### **What is volume data backup?**

Volume data is backed up to cloud storage using ECS disk snapshots or the Cloud Backup service. When you restore the application, the data is stored in a new disk or NAS file system for the restored application to use. The restored application and the original application do not share data sources and do not affect each other.

If you do not need to copy data or if you have shared data source requirements, you can choose not to back up volume data. In this case, ensure that the list of excluded resources in the backup does not include PVC or PV resources. During restoration, the volumes are deployed to the new cluster based on the original YAML files.

#### **In what scenarios do I need to back up volumes?**

-   Disaster recovery and version records.
    
-   The storage type is disk volume because basic disks can be mounted to only a single node.
    
-   You want to implement cross-region backup and restoration. In most cases, storage types other than OSS do not support cross-region access.
    
-   You want to isolate data between the backup application and the restored application.
    
-   The storage plug-ins or versions of the backup cluster and the restore cluster are significantly different, and the YAML files cannot be directly restored.
    

#### **What are the risks of not backing up volumes for stateful applications?**

If you do not back up volumes when you back up stateful applications, the following behaviors occur during restoration:

-   **For volumes whose reclaim policy is Delete:**
    
    Similar to when you deploy a PVC for the first time, if the restore cluster has a corresponding storage class, CSI automatically creates a new PV. For example, for disk storage, a new empty disk is mounted to the restored application. For static volumes that do not have a storage class specified or if the restore cluster does not have a corresponding storage class, the restored PVC and pod remain in the Pending state until you manually create a corresponding PV or storage class.
    
-   **For volumes whose reclaim policy is Retain:**
    
    During restoration, resources are restored in the order of PV first and then PVC based on the original YAML files. For storage that supports multiple mounts, such as NAS and OSS, the original file system or bucket can be directly reused. For disks, there may be a risk of forced disk detachment.
    

You can run the following command to query the reclaim policy of volumes:

```
kubectl get pv -o=custom-columns=CLAIM:.spec.claimRef.name,NAMESPACE:.spec.claimRef.namespace,NAME:.metadata.name,RECLAIMPOLICY:.spec.persistentVolumeReclaimPolicy
```

Expected output:

```
CLAIM               NAMESPACE           NAME                                       RECLAIMPOLICY
www-web-0           default             d-2ze53mvwvrt4o3xxxxxx                     Delete
essd-pvc-0          default             d-2ze5o2kq5yg4kdxxxxxx                     Delete
www-web-1           default             d-2ze7plpd4247c5xxxxxx                     Delete
pvc-oss             default             oss-e5923d5a-10c1-xxxx-xxxx-7fdf82xxxxxx   Retain
```

## How do I select nodes that can be used to back up file systems in data protection?

By default, when you back up storage volumes other than Alibaba Cloud disk volumes, Cloud Backup is used for data backup and restoration. In this scenario, a Cloud Backup task must be executed on a node. The default scheduling policy of the ACK Scheduler is the same as that of the community [Kubernetes scheduler](https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/). You can also configure tasks to be scheduled only to specific nodes if required.

**Note**

-   Cloud Backup jobs cannot be scheduled to virtual nodes.
    
-   By default, backup jobs are low-priority jobs. For the same backup job, a maximum of one volume backup job can be executed on a node.
    

### **Node scheduling policies of the backup center**

-   exclude policy (default): By default, all nodes can be used for backup and restoration. If you do not want Cloud Backup jobs to be scheduled to specific nodes, add the `csdr.alibabacloud.com/agent-excluded="true"` label to the nodes.
    
    ```
    kubectl label node <node-name-1> <node-name-2>  csdr.alibabacloud.com/agent-excluded="true"
    ```
    
-   include policy: By default, nodes without labels cannot be used for backup and restoration. Add the `csdr.alibabacloud.com/agent-included="true"` label to nodes that are allowed to execute Cloud Backup jobs.
    
    ```
    kubectl label node <node-name-1> <node-name-2>  csdr.alibabacloud.com/agent-included="true"
    ```
    
-   prefer policy: By default, all nodes can be used for backup and restoration. The scheduling priority is as follows:
    
    1.  Nodes with the `csdr.alibabacloud.com/agent-included="true"` label have the highest priority.
        
    2.  Nodes without special labels have the second highest priority.
        
    3.  It is scheduled to a node that has the `csdr.alibabacloud.com/agent-excluded="true"` label.
        
    

### **Change the node selection policy**

1.  Run the following command to edit the `csdr-config` ConfigMap:
    
    ```
    kubectl -n csdr edit cm csdr-config
    ```
    
    Add the `node_schedule_policy` configuration to the `applicationBackup` configuration. Example:
    
    **Click to view the complete example**
    
    ```
    apiVersion: v1
    data:
      applicationBackup: |
        backup_max_worker_num: 15
        restore_max_worker_num: 5
        delete_max_worker_num: 30
        schedule_max_worker_num: 20
        convert_max_worker_num: 15
        node_schedule_policy: include  # Add this configuration. Valid values: include, exclude, and prefer.
      pvBackup: |
        batch_snapshot_max_num: 20
        enable_ecs_snapshot: "true"
    kind: ConfigMap
    ```
    
2.  Run the following command to restart the `csdr-controller` deployment for the configuration to take effect:
    
    ```
    kubectl -n csdr delete pod -lapp=csdr-controller
    ```
    

## **What are the scenarios for application backup and data protection?**

**Application backup:**

-   You want to back up your business in your cluster, including applications, services, and configuration files.
    
-   Optional: When you back up an application, you want to also back up the volumes mounted to the application.
    
    **Note**
    
    The application backup feature does not back up volumes that are not mounted to pods.
    
    If you want to back up applications and all volumes, you can create data protection backup jobs.
    
-   You want to migrate applications between clusters and quickly restore applications for disaster recovery.
    

**Data protection:**

-   You want to back up volumes, including only PVCs and PVs.
    
-   You want to restore PVCs, which are independent of the backup data. When you use the backup center to restore a deleted PVC, a new disk is created and the data on the disk is identical to the data in the backup file. In this case, the mount parameters of the new PVC remain unchanged. The new PVC can be directly mounted to applications.
    
-   You want to implement data replication and disaster recovery.
    

## How do I exclude some persistent volumes from backup and recovery?

In a production environment, data in some volumes, such as log data, is considered disposable and does not need to be preserved during migration or disaster recovery.

For some storage sources that provide features such as mass storage, cross-zone or cross-region access, and multi-copy disaster recovery, such as OSS, you can also consider skipping data backup and restoration for low-priority services.

Assume that the business namespace to be backed up contains **Volume A (data does not need to be backed up)** and **Volume B (data needs to be backed up)**:

**Backup flow**

1.  Use the data protection feature to select persistent volume B for backup. The data protection feature **simultaneously backs up the YAML file and corresponding data of persistent volume B**. See [Back up and restore applications in a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/back-up-and-restore-applications-in-an-ack-cluster#section-7ba-qxw-1k3).
    
    **Note**
    
    Backing up data means generating an independent backup source from the data source of Volume B using snapshots or Cloud Backup. The volume restored from the backup source has the same content as the original volume, but they are two separate copies and do not affect each other.
    
2.  You can use the application backup feature to select the namespace that contains the application you want to back up. For the **Backup Volume** feature, select **Disable**. The application backup feature will then **back up the YAML files for persistent volumes A and B by default**. For more information, see [Back up and restore applications in a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/back-up-and-restore-applications-in-an-ack-cluster#section-7ba-qxw-1k3).
    
    **Note**
    
    If you do not need to restore Volume A to the new cluster, you can specify `pvc, pv` in **Excluded Resources** in the advanced configuration.
    

**Restore flow**

Similar to deploying a new application in a cluster, you need to restore the volumes and data before you restore the upper-layer workloads.

1.  Restore data protection in the target cluster. This will restore the YAML file and data of persistent volume B. For more information, see [Back up and restore applications within a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/back-up-and-restore-applications-in-an-ack-cluster#section-t9t-wqi-820).
    
2.  Restore the application backup in the target cluster. This action restores the YAML file of PV A and other application resources. The Container Storage Interface (CSI) then uses the reclaim policy of PV A to dynamically create a new storage source or reuse the existing one. For more information, see the **What are the potential risks of not backing up persistent volume data for stateful applications?** section in [When should you back up persistent volume data in an application backup?](#4421274c772ur)
    

At this point, the application, Volume A, and Volume B (and its data) are restored.

## **Does the backup center support data encryption for associated OSS buckets? How do I grant the permissions to use KMS for server-side encryption?**

OSS buckets support both server-side encryption and client-based encryption. However, the backup center supports only server-side encryption for OSS buckets. You can manually enable server-side encryption for the attached bucket and configure the encryption method in the OSS console. For more information about server-side encryption for OSS buckets and how to enable it, see [Server-side encryption](/help/en/oss/user-guide/server-side-encryption-8).

-   If you **use a customer master key (CMK) managed by KMS for encryption and decryption and use your own key (BYOK)**, which means that you specify a CMK ID, you need to grant the backup center permissions to access KMS. Follow these steps:
    
    -   Create a custom permission policy as follows. For more information, see [Create a custom permission policy](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m).
        
        ```
        {
          "Version": "1",
          "Statement": [
            {
              "Effect": "Allow",
              "Action": [
                "kms:List*",
                "kms:DescribeKey",
                "kms:GenerateDataKey",
                "kms:Decrypt"
              ],
              "Resource": [
                "acs:kms:*:141661496593****:*"
              ]
            }
          ]
        }
        ```
        
        The preceding access policy lets you call all KMS keys under the Alibaba Cloud account ID. If you need more fine-grained Resource configuration, see [Authorization information](/help/en/kms/key-management-service/security-and-compliance/authorization-information#p-emi-tgs-48w).
        
    -   For ACK dedicated clusters and registered clusters, grant permissions to the RAM user that is used during installation. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800). For other clusters, grant permissions to the AliyunCSManagedBackupRestoreRole role. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
        
-   If you **use a KMS key managed by OSS** or **use a key fully managed by OSS for encryption and decryption**, you do not need to grant additional permissions.
    

## **How do I change the images used by applications during restoration?**

Assume that the image used by the application in the backup is: `docker.io/library/app1:v1`

-   Change the image repository address (registry)
    
    In hybrid cloud scenarios, you may need to deploy an application across multiple cloud providers or migrate an application from a data center to the cloud. In these cases, you must upload the application's image to an image repository in Alibaba Cloud Container Registry (ACR).
    
    You must use the imageRegistryMapping field to specify the image repository address. For example, the following configuration changes the image to `registry.cn-beijing.aliyuncs.com/my-registry/app1:v1`.
    
    ```
    docker.io/library/: registry.cn-beijing.aliyuncs.com/my-registry/
    ```
    
-   Change the image repository (repository) and version
    
    This type of adjustment is an advanced configuration that requires you to define an adjustment policy in the ConfigMap before recovery.
    
    If you want to change the image repository to `app2:v2`, create the following configuration:
    
    ```
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: <configuration-name>
      namespace: csdr
      labels:
        velero.io/plugin-config: ""
        velero.io/change-image-name: RestoreItemAction
    data:
      "case1":"app1:v1,app2:v2"
      # If you want to change only the repository, use the following setting.
      # "case1": "app1,app2"
      # If you want to change only the version, use the following setting.
      # "case1": "v1:v2"
      # If you want to change only an image in a registry, use the following setting.
      # "case1": "docker.io/library/app1:v1,registry.cn-beijing.aliyuncs.com/my-registry/app2:v2"
    ```
    
    If you have multiple change requirements, you can continue to configure case2, case3, and so on in the `data` field.
    
    After the ConfigMap is created, create a restore job as normal and **leave the imageRegistryMapping field empty**.
    
    **Note**
    
    The changes take effect on all restore jobs in the cluster. We recommend that you configure fine-grained modifications based on the preceding comment, such as limiting the scope of changes to a specific registry. If the configuration is no longer required, delete it.
