This topic describes the diagnostic procedure for storage and how to troubleshoot storage exceptions.

## Diagnostic procedure

![流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2527079661/p512743.png)

1.  View the pod events to confirm that the pod cannot start due to storage issues.
    
    ```
    kubectl describe pods <pod-name>
    ```
    
    If the pod is in the state shown in the following figure, the storage has been successfully mounted. In this case, if the pod does not start (for example, CrashLoopBackOff), it is not a storage issue. Please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.![pod](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6482079661/p515432.png)
    
2.  Check if the CSI storage plug-in is working properly.
    
    ```
    kubectl get pod -n kube-system |grep csi
    ```
    
    Expected output:
    
    ```
    NAME                       READY   STATUS             RESTARTS   AGE
    csi-plugin-***             4/4     Running            0          23d
    csi-provisioner-***        7/7     Running            0          14d
    ```
    
    **Note**
    
    If the pod status is not Running, use `kubectl describe pods <pod-name> -n kube-system` to view the specific reason for the container exit and the pod events.
    
3.  Check if the CSI storage plug-in is the latest version.
    
    ```
    kubectl get ds csi-plugin -n kube-system -oyaml |grep image
    ```
    
    Expected output:
    
    ```
    image: registry.cn-****.aliyuncs.com/acs/csi-plugin:v*****-aliyun
    ```
    
    For information about the latest version of the storage plug-in, see [csi-plugin](/help/en/ack/product-overview/csi-plugin#concept-2043905) and [csi-provisioner](/help/en/ack/product-overview/csi-provisioner#concept-2043907). If the storage plug-in is not the latest version, [upgrade the CSI plug-in](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in).
    
    For troubleshooting other storage component upgrade failures, see [Troubleshoot component update failures](#section-0z6-a64-cqe).
    
4.  Troubleshoot the pod pending issue.
    
    -   For disk pod pending issues, see [The status of the disk pod is not Running](#pod-1) below.
        
    -   For NAS pod pending issues, see [The status of the NAS pod is not Running](#pod-2) below.
        
    -   For OSS pod pending issues, see [The status of the OSS pod is not Running](#pod-3) below.
        
5.  Troubleshoot the issue that the status of the persistent volume claim (PVC) is not Bound.
    
    -   For disk PVC non-Bound issues, see [The status of the disk PVC is not Bound](#pvc-1) below.
        
    -   For NAS PVC non-Bound issues, see [The status of the NAS PVC is not Bound](#pvc-2) below.
        
    -   For OSS PVC non-Bound issues, see [The status of the OSS PVC is not Bound](#pvc-3) below.
        
6.  If the issue persists after troubleshooting, please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
    

## Troubleshoot component update failures

If you fail to update the csi-provisioner and csi-plugin components, perform the following steps to troubleshoot the issue.

### Csi-provisioner

-   This component is a Deployment with 2 replicas by default, deployed on different nodes in a mutually exclusive manner. If the upgrade fails, first check if there is only one available node in the cluster.
    
-   The historical version of this component (1.14 and earlier) is a StatefulSet. If there is a StatefulSet type csi-provisioner in the cluster, execute `kubectl delete sts csi-provisioner` to delete it, and then log on to the [Container Service console](https://cs.console.alibabacloud.com) to reinstall the csi-provisioner component. For more information, see [Components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/component-overview).
    

### Csi-plugin

-   Check if there are `NotReady` nodes in the cluster. If there are, the DaemonSet corresponding to csi-plugin will fail to upgrade.
    
-   If the component upgrade fails but all plugins are working normally, it may be because the component center detected a timeout and automatically rolled back. If you encounter this issue, please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
    

## Disk troubleshooting

**Important**

-   The node to which the pod belongs and the disk must be in the same region and zone. Cross-region and cross-zone usage is not supported.
    
-   Different types of ECS instances support different types of disks. For more information, see [Instance family](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    

### The status of the pod is not running

**Issue**

The status of the PVC is Bound but the status of the pod is not Running.

**Cause**

-   No node is available for scheduling.
    
-   An error occurs when the system mounts the disk.
    
-   The ECS instance does not support the specified disk type.
    

**Solution**

-   Schedule the pod to another node to quickly recover. For more information, see [Schedule applications to specified nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/schedule-pods-to-specific-nodes#task-1779995).
    
-   Use `kubectl describe pods <pod-name>` to view the pod events.
    
    -   Troubleshoot the issue based on the event.
        
        -   For disk mounting issues, see [Disk volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#section-ikt-kk6-6um).
            
        -   For disk unmounting issues, see [Disk volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#section-cre-9hu-9ac).
            
    -   If there is no relevant event information, please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
        
-   If the ECS instance does not support the specified disk type, select a disk type that is supported by the ECS instance. For more information, see [Instance family](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
-   For other ECS OpenAPI type issues, see [ErrorCode](https://next.api.aliyun.com/document/Ecs/2014-05-26/errorCode).
    

### The status of the PVC is not bound

**Issue**

The status of the PVC is not Bound and the status of the pod is not Running.

**Cause**

-   Static: The selectors of the PVC and PV fail to meet certain conditions. Therefore, the PV and PVC cannot be associated. For example, the selector configuration of the PVC is different from that of the PV, the selectors use different StorageClass names, or the status of the PV is Release.
    
-   Dynamic: The csi-provisioner component fails to create the disk.
    

**Solution**

-   Static: Check the relevant YAML content. For more information, see [Use static disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-a-statically-provisioned-disk-volume#section-qvl-1ni-1o1).
    
    **Note**
    
    If the status of the PV is Release, the PV cannot be reused. You need to create a new PV to use the disk.
    
-   Dynamic: Use `kubectl describe pvc <pvc-name> -n <namespace>` to view the PVC events.
    
    -   Troubleshoot the issue based on the event.
        
        -   For disk creation issues, see [Disk volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#section-ifp-iao-kk4).
            
        -   For disk expansion issues, see [Disk volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#section-sob-anx-oq6).
            
    -   If there is no relevant event information, please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
        
-   There might be an issue with the ECS OpenAPI when creating the disk. See [ECS Error Center](https://error-center.aliyun.com/status/product/Ecs?spm=5176.10421674.home.5.38736e3ajgSyaA) for troubleshooting. If troubleshooting fails, please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
    

## Nas troubleshooting

**Important**

-   To mount a NAS file system to a node, make sure that the node and NAS file system are deployed in the same virtual private cloud (VPC). If the node and NAS file system are deployed in different VPCs, use Cloud Enterprise Network (CEN) to connect them.
    
-   You can mount a NAS file system to a node that is deployed in a zone different from the NAS file system.
    
-   The mount directory for Extreme NAS file system and CPFS 2.0 must start with `/share`.
    

### The status of the pod is not running

**Issue**

The status of the PVC is Bound but the status of the pod is not Running.

**Cause**

-   When mounting the NAS file system, `fsGroups` is used, and there are many files, resulting in slow chmod speed.
    
-   Port 2049 is blocked in the security group rules.
    
-   The NAS file system and node are deployed in different VPCs.
    

**Solution**

-   Check if `fsGroups` is set. If it is, remove it, restart the pod, and remount.
    
-   Check whether port 2049 of the node that hosts the pod is blocked. If yes, unblock the port and try again. For more information, see [Add security group rules](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
    
-   If the NAS file system and node are deployed in different VPCs, use CEN to connect them.
    
-   For other issues, use `kubectl describe pods <pod-name>` to view the pod events.
    
    -   Troubleshoot the issue based on the event. For more information, see [NAS volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#task-2100786).
        
    -   If there is no relevant event information, please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
        

### The status of the PVC is not bound

**Issue**

The status of the PVC is Bound but the status of the pod is not Running.

**Cause**

-   Static: The selectors of the PVC and persistent volume (PV) fail to meet certain conditions. Therefore, the PV and PVC cannot be associated. For example, the selector configuration of the PVC is different from that of the PV, the selectors use different StorageClass names, or the status of the PV is Release.
    
-   Dynamic: The csi-provisioner component fails to mount the NAS file system.
    

**Solution**

-   Static: Check the relevant YAML content. For more information, see [Use static NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-nas-volumes#section-jgf-w0l-0hh).
    
    **Note**
    
    If the status of the PV is Release, the PV cannot be reused. Create a new PV that uses the NAS file system.
    
-   Dynamic: Use `kubectl describe pvc <pvc-name> -n <namespace>` to view the PVC events.
    
    -   Troubleshoot the issue based on the event. For more information, see [NAS volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#task-2100786).
        
    -   If there is no relevant event information, please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
        

## Oss troubleshooting

**Important**

-   When mounting an OSS bucket to a node, you need to fill in the AccessKey information in the PV, which can be used through the Secret method.
    
-   When using OSS across regions, you need to change the Bucket URL to a public network address. For the same region, it is recommended to use an internal network address.
    

### The status of the pod is not running

**Issue**

The status of the PVC is Bound but the status of the pod is not Running.

**Cause**

-   When mounting the OSS bucket, `fsGroups` is used, and there are many files, resulting in slow chmod speed.
    
-   The OSS bucket and node are created in different regions and the private endpoint of the OSS bucket is used. As a result, the node fails to connect to the bucket endpoint.
    

**Solution**

-   Check if `fsGroups` is set. If it is, remove it, restart the pod, and remount.
    
-   Check if you are accessing the bucket across regions using an internal network address. If so, please use a public network address instead.
    
-   For other issues, use `kubectl describe pods <pod-name>` to view the pod events.
    
    -   Troubleshoot the issue based on the event. For more information, see [OSS volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#task-2115055).
        
    -   If there is no relevant event information, please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
        

### The status of the PVC is not bound

**Issue**

The status of the PVC is not Bound and the status of the pod is not Running.

**Cause**

-   Static: The selectors of the PVC and PV fail to meet certain conditions. For example, the selector configuration of the PVC is different from that of the PV, the selectors use different StorageClass names, or the status of the PV is Release.
    
-   Dynamic: The csi-provisioner component fails to mount the OSS bucket.
    

**Solution**

-   Static: Check the relevant YAML content. For more information, see [Use static OSS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes#section-9ni-1vb-guw).
    
    **Note**
    
    If the status of the PV is Release, the PV cannot be reused. You need to extract the bucket address and create a new PV.
    
-   Dynamic: Use `kubectl describe pvc <pvc-name> -n <namespace>` to view the PVC events.
    
    -   Troubleshoot the issue based on the event. For more information, see [OSS volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#task-2115055).
        
    -   If there is no relevant event information, please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
