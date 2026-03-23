If a pod has an abnormal status when you mount or use a persistent volume (PV), you can identify and resolve the issue by checking the status and events of the pod and its PersistentVolumeClaim (PVC), and the status of the Container Storage Interface (CSI) components. This topic describes how to troubleshoot storage-related issues and provides information about common storage issues.

![流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2527079661/p512743.png)

## **1\. Check if the pod abnormality is caused by a storage issue**

Check the pod or PVC events to confirm that a storage issue is preventing the pod from starting.

1.  View the events of the abnormal pod.
    
    ```
    kubectl describe pod <pod-name>
    ```
    
    -   If an event indicates a storage issue, continue with the troubleshooting steps in this topic. For example, the `FailedScheduling` event in the following sample output has a `Message` indicating that scheduling failed because the volume and node do not match.
        
        ```
        Events:
          Type     Reason            Age    From               Message
          ----     ------            ----   ----               -------
          Warning  FailedScheduling  4m37s  default-scheduler  0/1 nodes are available: 1 node(s) had volume node affinity conflict. preemption: 0/1 nodes are available: 1 Preemption is not helpful for scheduling.,
        ```
        
    -   If an event, such as the `SuccessfulAttachVolume` event in the sample output, indicates that the volume was successfully attached but the pod is not running (for example, it is in the `CrashLoopBackOff` state), the issue is not related to storage. Check the events for other issues, or [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
        
        ```
        Events:
          Type    Reason                  Age   From                     Message
          ----    ------                  ----  ----                     -------
          Normal  Scheduled               97s   default-scheduler        Successfully assigned default/disk-test-0 to cn-shanghai.192.168.5.2
          Normal  SuccessfulAttachVolume  97s   attachdetach-controller  AttachVolume.Attach succeeded for volume "d-uf6b8s2l5ypf48*****"
        ```
        
2.  If you do not see any storage-related events for the pod, view all events.
    
    ```
    kubectl get events
    ```
    
    -   If an event indicates a storage issue, continue with the troubleshooting steps in this topic. For example, the `FailedBinding` event in the sample output indicates that the PVC failed to bind to a PV.
        
        ```
        LAST SEEN   TYPE      REASON                 OBJECT                                                  MESSAGE
        2m56s       Normal    FailedBinding          persistentvolumeclaim/data-my-release-mariadb-0         no persistent volumes available for this claim and no storage class is set
        41s         Normal    ExternalProvisioning   persistentvolumeclaim/pvc-nas-dynamic-create-subpath8   waiting for a volume to be created, either by external provisioner "nasplugin.csi.alibabacloud.com" or manually created by system administrator
        3m31s       Normal    Provisioning           persistentvolumeclaim/pvc-nas-dynamic-create-subpath8   External provisioner is provisioning volume for claim "default/pvc-nas-dynamic-create-subpath8"
        ```
        
    -   If there are no storage-related events, check the events for other issues, or [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
        

## **2\. Check if storage components are normal**

**Note**

If your cluster currently uses FlexVolume components, we recommend that you migrate to CSI components as soon as possible because FlexVolume is deprecated. For more information, see [Migrate from FlexVolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-from-flexvolume-to-csi/).

1.  Check if the CSI storage components are working correctly.
    
    ```
    kubectl get pod -n kube-system |grep csi
    ```
    
    The following sample output is returned. If a pod is not in the \`Running\` state, run `kubectl describe pods <pod-name> -n kube-system` to view the pod events and the reason why the container exited.
    
    **Note**
    
    CSI storage components include csi-plugin and csi-provisioner. By default, the managed version of csi-provisioner is installed. Managed components are maintained by Alibaba Cloud. You cannot see the pods for these components in your cluster.
    
    ```
    NAME                     READY   STATUS        RESTARTS   AGE
    csi-plugin-bpz28         4/4     Running       0          3d
    csi-plugin-h2tdg         4/4     Running       0          3d
    csi-plugin-qpnm4         4/4     Running       0          3d
    csi-plugin-wczgm         4/4     Running       0          3d
    ```
    
2.  Check if the CSI storage components are the latest version.
    
    ```
    kubectl get ds csi-plugin -n kube-system -o yaml |grep image
    ```
    
    You can find the image version in the `image` field of the returned information. The following is a sample output:
    
    ```
    image: registry-cn-shanghai-vpc.ack.aliyuncs.com/acs/csi-plugin:v1.33.1-67e8986-aliyun
    ```
    
    If the storage components are not the latest version, [upgrade the CSI components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb). For more information about the latest versions of storage components, see [csi-plugin](/help/en/ack/product-overview/csi-plugin#concept-2043905).
    
    **Note**
    
    You can also go to the **Add-ons** page in the console, find the csi-plugin and csi-provisioner components, and check their versions and upgrade them.
    
3.  Check the YAML files of the PV, PVC, and StorageClass to confirm that the driver configuration (`driver` or `provisioner` field) is set to use CSI storage components and is consistent with the storage components used by your cluster.
    

## **3.** Check if the PVC status is Bound

1.  View the PVC status.
    
    ```
    kubectl get pvc
    ```
    
2.  If the PVC is not in the \`Bound\` state, troubleshoot and resolve the issue as follows.
    
    **Cause**
    
    -   **Static**: The selectors of the PVC and PV do not meet the binding conditions. For example, the selector configuration in the PVC is inconsistent with the configuration in the PV, the StorageClass names are inconsistent, or the PV status is \`Released\`.
        
    -   **Dynamic**: An issue occurred with the csi-provisioner component.
        
    
    **Solution**
    
    -   **Static**: Check if the related YAML files are written correctly. For more information, see the following topics:
        
        -   [Use a static cloud disk persistent volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-a-statically-provisioned-disk-volume#section-qvl-1ni-1o1)
            
        -   [Use a static NAS persistent volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-nas-volumes#section-jgf-w0l-0hh)
            
        -   [Use a static ossfs 1.0 persistent volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes#section-9ni-1vb-guw) or [Use a static ossfs 2.0 persistent volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-oss-volumes-through-ossfs-2-0)
            
        
        **Note**
        
        If the PV status is \`Released\`, the PV cannot be reused. You can obtain information about the storage resource from the PV and then re-create the PV.
        
    -   **Dynamic**: Run `kubectl describe pvc <pvc-name> -n <namespace>` to view the PVC events.
        
        -   Handle the issue based on the event message. For more information, see the following topics:
            
            -   [Cloud disk persistent volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#section-ifp-iao-kk4)
                
            -   [NAS persistent volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#task-2100786)
                
            -   [ossfs 1.0 persistent volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#task-2115055) or [ossfs 2.0 persistent volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs2-0-storage-volume-faqs)
                
        -   If there are no relevant event messages, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
            
    -   If you are using a cloud disk persistent volume, an issue may have occurred when the ECS OpenAPI created the cloud disk. For more information, see [ECS Error Center](https://error-center.aliyun.com/status/product/Ecs?spm=5176.10421674.home.5.38736e3ajgSyaA) to troubleshoot the issue. If the issue persists, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
        

## **4.** Check if the pod status is **Running**

1.  View the pod status.
    
    ```
    kubectl get pod
    ```
    
2.  If the PVC is in the \`Bound\` state but the pod is not in the \`Running\` state, troubleshoot and resolve the issue based on the persistent volume type as follows.
    
    ## Cloud disk persistent volumes
    
    **Important**
    
    When you use a cloud disk persistent volume, make sure that the instance type of the ECS node to which the pod is scheduled supports attaching the specified type of cloud disk, and that the pod and the cloud disk are in the same region and zone. For information about the mappings between disk types and ECS instance types, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
    **Cause**
    
    -   No eligible nodes are available for scheduling.
        
    -   An issue occurred when attaching the cloud disk.
        
    -   The ECS instance type and cloud disk type do not match.
        
    
    **Solution**
    
    -   To quickly recover, you can schedule the pod to another node. For more information, see [Schedule applications to specified nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/schedule-pods-to-specific-nodes#task-1779995).
        
    -   Run `kubectl describe pods <pod-name>` to view the pod events.
        
        -   Handle the issue based on the event message. For more information, see [Cloud disk persistent volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#section-ikt-kk6-6um).
            
        -   If there are no relevant event messages, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
            
    -   If the issue is caused by a mismatch between the ECS instance type and the cloud disk type, you can select a suitable disk type. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
        
    -   For more information about how to handle other ECS OpenAPI issues, see [ErrorCode](https://next.api.aliyun.com/document/Ecs/2014-05-26/errorCode).
        
    
    ## NAS persistent volumes
    
    **Important**
    
    -   The node and the NAS file system must be in the same VPC. If they are not in the same VPC, you can use Cloud Enterprise Network (CEN) to connect them.
        
    -   NAS supports cross-zone mounting.
        
    -   The mount path for an Extreme NAS file system must start with `/share`.
        
    
    **Cause**
    
    -   When you use `fsGroups` to mount the NAS file system, many files can slow down the \`chmod\` operation.
        
    -   Port 2049 is blocked in the security group, which prevents the NAS file system from being mounted.
        
    -   The NAS file system and the node are not in the same VPC.
        
    
    **Solution**
    
    -   Check if `fsGroups` is set. If it is, you can remove it, restart the pod, and mount the volume again.
        
    -   Confirm whether port 2049 is blocked on the node where the pod is scheduled. If the port is blocked, you can open port 2049 and then mount the volume again. For more information, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
        
    -   Confirm that the NAS file system and the node are in the same VPC. If they are not, use CEN to connect them.
        
    -   For other issues, run `kubectl describe pods <pod-name>` to view the pod events.
        
        -   Handle the issue based on the event message. For more information, see [NAS persistent volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#task-2100786).
            
        -   If there are no relevant event messages, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
            
    
    ## OSS persistent volumes
    
    **Important**
    
    -   When a node mounts an OSS bucket, the PV must contain AccessKey information. You can provide this information using a Secret.
        
    -   When you use OSS across regions, change the bucket URL to a public endpoint. Within the same region, we recommend that you use an internal endpoint.
        
    
    **Cause**
    
    -   Using `fsGroups` to mount an OSS bucket with many files slows down the chmod operation.
        
    -   An internal endpoint is used for cross-region access, which prevents the connection to the bucket endpoint.
        
    
    **Solution**
    
    -   Check if `fsGroups` is set. If it is, you can remove it, restart the pod, and mount the volume again.
        
    -   Check whether you are accessing the bucket across regions using an internal endpoint. If you are, use a public endpoint instead.
        
    -   For other issues, run `kubectl describe pods <pod-name>` to view the pod events.
        
        -   Handle the issue based on the event message. For more information, see [ossfs 1.0 persistent volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#task-2115055) or [ossfs 2.0 persistent volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs2-0-storage-volume-faqs).
            
        -   If there are no relevant event messages, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
            
    

## **FAQ**

### **When I create or mount a persistent volume, the PVC shows the message** **no volume plugin matched**

**Symptom**

When you create or mount a persistent volume, a PVC event shows the message: Unable to attach or mount volumes: unmounted volumes=\[xxx\], unattached volumes=\[xxx\]: failed to get Plugin from volumeSpec for volume "xxx" err=no volume plugin matched.

**Cause**

The storage component specified in the YAML template cannot be found in the cluster.

**Solution**

Check whether the storage component exists in the cluster.

-   If the storage component is not installed, you can install it in the cluster. For more information, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).
    
-   If the storage component is installed, make sure that it matches the YAML templates for the PV and PVC and that the following conditions are met:
    
    -   CSI storage components are deployed using CSI-related documents. For more information, see [CSI](/help/en/ack/storage-management-csi).
        
    -   FlexVolume storage components are deployed using FlexVolume-related documents. For more information, see [FlexVolume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deprecated-storage-management-flexvolume/).
        
        **Important**
        
        Because FlexVolume is deprecated, we recommend that you migrate to CSI components as soon as possible. For more information, see [Migrate from FlexVolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-from-flexvolume-to-csi/).
        

### Pod event shows the message 0/x nodes are available: x pod has unbound immediate PersistentVolumeClaims

**Symptom**

The pod fails to start, and a pod event shows the following message:

```
0/x nodes are available: x pod has unbound immediate PersistentVolumeClaims. preemption: 0/x nodes are available: x Preemption is not helpful for scheduling
```

**Cause**

The custom StorageClass referenced by the pod was not created and therefore cannot be found.

**Solution**

Check whether the StorageClass referenced by the pod exists. If it does not exist, you can re-create the StorageClass.

### **A PV is in the Released state and cannot be bound by re-creating a PVC**

**Symptom**

After a PVC is accidentally deleted, the PV enters the `Released` state and cannot be bound by re-creating the PVC.

**Cause**

If the `reclaimPolicy` of a PV is `Retain`, the PV enters the `Released` state when its bound PVC is accidentally deleted.

**Solution**

You can delete the `pv.spec.claimRef` field from the PV and then re-bind it using the static volume method. The PV then enters the `Bound` state.

### **A PV is in the Lost state and cannot be bound by re-creating a PVC**

**Symptom**

After a PVC and a PV are created, the PV enters the `Lost` state and cannot be bound to the PVC.

**Cause**

The PVC name referenced by the `claimRef` field in the PV does not exist. This causes the PV to enter the `Lost` state.

**Solution**

You can delete the `pv.spec.claimRef` field from the PV and then re-bind it using the static volume method. The PV then enters the `Bound` state.

### **Do StorageClass changes affect existing storage?**

No, they do not. If the YAML files for the PVC and PV are not changed, changes to the StorageClass do not affect existing storage. For example, if you modify the `allowVolumeExpansion` field of a StorageClass, the change takes effect only after you modify the `capacity` of the PVC. If the PVC's YAML file is not changed, this change does not affect the existing configuration.
