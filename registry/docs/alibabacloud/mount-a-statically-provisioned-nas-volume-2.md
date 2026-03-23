You can use the FlexVolume plug-in provided by Alibaba Cloud to mount File Storage NAS (NAS) file systems to Container Service for Kubernetes (ACK) clusters. This topic describes how to mount a statically provisioned NAS volume.

## Prerequisites

-   FlexVolume is upgraded to the latest version. For more information, see [Install and upgrade FlexVolume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-flexvolume#concept-vgg-45s-vdb).
    
-   A kubectl client is connected to the cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136).
    

## Background information

After FlexVolume installed in the cluster, you can mount NAS file systems by using persistent volumes (PVs) and persistent volume claims (PVCs).

## Precautions

If the securityContext.fsgroup parameter is set in the application template, kubelet performs the `chmod` or `chown` operation after the volume is mounted, which increases the time consumption.

**Note**

For more information about how to speed up the mounting process when the securityContext.fsgroup parameter is set, see [Why does it require a long time to mount a NAS volume?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes-1#section-td0-7vk-92o).

## Procedure

You can mount a NAS file system by using a PV and a PVC.

1.  Create a PV.
    
    You can create a PV in the ACK console or by using a YAML file.
    
    -   Create a PV by using a YAML file.
        
        Use the following nas-pv.yaml file to create a PV:
        
        ```
        apiVersion: v1
        kind: PersistentVolume
        metadata:
          name: pv-nas
        spec:
          capacity:
            storage: 5Gi
          storageClassName: nas
          accessModes:
            - ReadWriteMany
          flexVolume:
            driver: "alicloud/nas"
            options:
              server: "0cd8b4a576-u****.cn-hangzhou.nas.aliyuncs.com"
              path: "/k8s"
              vers: "3"
              options: "nolock,tcp,noresvport"
        ```
        
    -   Create a PV in the ACK console.
        
        1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
            
        2.  On the **Clusters** page, find the cluster that you want to manage. Then, click the name of the cluster or click **Details** in the **Actions** column.
            
        3.  In the left-side navigation pane of the cluster details page, choose **Volumes** > **Persistent Volumes**.
            
        4.  On the **Volumes** page, click **Create** in the upper-right corner of the page.
            
        5.  In the Create PV dialog box, set the parameters.
            
            **Parameter**
            
            **Description**
            
            **PV Type**
            
            In this example, NAS is selected.
            
            **Volume Name**
            
            The name of the PV that you want to create. The name must be unique in the cluster. In this example, **pv-nas** is used.
            
            **Volume Plug-in**
            
            In this example, Flexvolume is selected.
            
            **Capacity**
            
            The capacity of the PV that you want to create. The capacity of the PV cannot exceed that of the NAS file system to be mounted.
            
            **Access Mode**
            
            Default value: ReadWriteMany.
            
            **Mount Target Domain Name**
            
            The domain name of the mount target that is used to mount the NAS file system to the cluster. For more information about how to manage the mount targets of a NAS file system, see [Manage mount targets](/help/en/nas/user-guide/manage-mount-targets#task-27531-zh).
            
            **Subdirectory**
            
            Enter a subdirectory in the NAS file system. The subdirectory must start with a forward slash (/). If this parameter is set, the PV will be mounted to the specified subdirectory.
            
            -   If the specified subdirectory does not exist, the system automatically creates the subdirectory in the NAS file system and mounts the subdirectory to the cluster.
                
            -   If you do not set this parameter, the root directory of the NAS file system is mounted.
                
            -   If you specify a subdirectory of an Extreme NAS file system, the subdirectory must start with /share.
                
            
            **Permissions**
            
            The access permissions on the mounted directory. For example, you can set this parameter to 755, 644, or 777.
            
            **Note**
            
            -   You can set access permissions only on subdirectories.
                
            -   If the mounted directory stores a large number of files, we recommend that you do not set this parameter. Otherwise, the process of running the chmod command may require an excessive amount of time.
                
            
            If the mounted directory is a subdirectory, this parameter is optional.
            
            -   If you do not set this parameter, the original permissions on the mounted directory are used.
                
            -   Take note of the following items when you set the permissions:
                
                -   For FlexVolume versions earlier than V1.14.6.15-8d3b7e7-aliyun, use the recursive mode when you configure permission settings. The permissions on all files and directories under the mounted directory will be modified.
                    
                -   For FlexVolume V1.14.6.15-8d3b7e7-aliyun and later, set the **chmod (Change Mode)** parameter to configure permission settings.
                    
            
            **chmod (Change Mode)**
            
            The change mode of access permissions. Valid values: Non-recursive and Recursive.
            
            -   Non-recursive: The permission changes apply only to the mounted directory. The subdirectories and files in the mounted directory are not affected.
                
            -   Recursive mode: The permission changes apply recursively to the subdirectories and contained files of the mounted directory, modifying all permissions.
                
                **Note**
                
                If you select the recursive mode for a mounted directory that contains a large number of files, the process of running the chmod command may require an excessive amount of time. The mount or unmount operation may fail. Exercise caution when you set this parameter.
                
            
            **Version**
            
            The version of the NFS protocol. We recommend that you use NFSv3. Extreme NAS file systems support only NFSv3.
            
            **Labels**
            
            Add labels to the PV.
            
        6.  Click **Create**.
            
    
2.  Create a PVC.
    
    Use the following nas-pvc.yaml file to create a PVC:
    
    ```
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: pvc-nas
    spec:
      accessModes:
        - ReadWriteMany
      storageClassName: nas
      resources:
        requests:
          storage: 5Gi
    ```
    
3.  Create a pod.
    
    Use the following nas-pod.yaml file to create a pod:
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nas-static
      labels:
        app: nginx
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
            image: nginx
            ports:
            - containerPort: 80
            volumeMounts:
              - name: pvc-nas
                mountPath: /data
          volumes:
            - name: pvc-nas
              persistentVolumeClaim:
                claimName: pvc-nas
        
    ```
