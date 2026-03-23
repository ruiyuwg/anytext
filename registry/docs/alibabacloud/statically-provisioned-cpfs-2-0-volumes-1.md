Cloud Parallel File System (CPFS) provides high throughput and high input/output operations per second (IOPS). It is suitable for high-performance computing (HPC) scenarios, such as AI training, autonomous driving, gene computing, and video rendering. This topic describes how to create a statically provisioned volume of CPFS General-purpose Edition and mount it to a workload.

## Prerequisites

Ensure that the csi-plugin and csi-provisioner components are version v1.22.11-abbb810e-aliyun or later. To upgrade the components, see [Upgrade CSI components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).

## Limits

-   CPFS General-purpose Edition is available only in specific regions. For more information, see [Available regions](/help/en/cpfs/bmcpfs/product-overview/what-is-cpfs-for-lingjun#52f4b2b1f1su4).
    
-   Only the NFS protocol is supported for mounting. The POSIX protocol is not supported.
    
-   CPFS supports only nodes that use the x86 architecture.
    
-   Volumes can be mounted only to clusters that are in the same VPC.
    
-   You cannot mount volumes to nodes that run the ContainerOS operating system.
    

## Configure storage components

Choose a configuration method based on the version of the csi-plugin component.

-   **csi-plugin version 1.33 or later**
    
    Install the cnfs-nas-daemon component and configure the csi-plugin to enable the `AlinasMountProxy=true` FeatureGate. This allows the CSI component to call cnfs-nas-daemon for mounting. For more information, see [Manage the cnfs-nas-daemon component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-cnfs-nas-daemon).
    
-   **csi-plugin version earlier than 1.33**
    
    1.  Configure a ConfigMap to enable the NFS protocol for mounting CPFS General-purpose Edition.
        
        ```
        cat << EOF | kubectl apply -f -
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: csi-plugin
          namespace: kube-system
        data:
          cpfs-nas-enable: "true"   # Use the NFS protocol to mount CPFS General-purpose Edition.
        EOF
        ```
        
    2.  Restart the csi-plugin to install related dependencies.
        
        This operation does not affect your services.
        
        ```
        kubectl -n kube-system rollout restart daemonset csi-plugin
        ```
        
        Expected output:
        
        ```
        daemonset.apps/csi-plugin restarted
        ```
        

## **Step 1: Create a CPFS file system and a protocol service**

CPFS supports only static mounting. You must create a CPFS file system and a corresponding protocol service, and then obtain the mount address to use for mounting.

1.  [Create a CPFS General-purpose Edition file system](/help/en/cpfs/cpfsonecs/user-guide/create-a-cpfs-file-system-1#task-1960120).
    
    -   Create the CPFS file system in the same region as your cluster.
        
    -   If you use an existing CPFS file system, go to the [NAS console](https://nas.console.alibabacloud.com/). On the **File System List** page, click the target CPFS file system. On the **Basic Information** page, verify that the CPFS version is 2.3.0 or later. If the version is earlier than 2.3.0, create a new CPFS file system.
        
2.  [Create a protocol service](/help/en/cpfs/manage-protocol-services).
    
    -   Use the VPC and vSwitch of the cluster to create the protocol service and generate a mount target.
        
    -   If you use an existing protocol service, make sure that it uses the same VPC as the cluster. CPFS does not support cross-VPC mounting. If the protocol service is in a different VPC, you must create a new protocol service.
        
3.  Obtain the mount address of the protocol service.
    
    On the **Protocol Service** page, click **Export Directory**. In the **Mount Address** column, copy the mount address and save it. The address consists of the mount target domain name and the mount directory. For example, if the exported directory is `/` , the mount address is displayed as `cpfs-****.<Region ID>.cpfs.aliyuncs.com:/share`.
    

## **Step 2: Create a PV and a PVC**

1.  Create a persistent volume (PV) and a persistent volume claim (PVC) based on the existing CPFS file system.
    
    1.  Save the following content as cpfs-pv-pvc.yaml.
        
        ```
        apiVersion: v1
        kind: PersistentVolume
        metadata:
          name: cpfs-pv
          labels:
            alicloud-pvname: cpfs-pv
        spec:
          accessModes:
          - ReadWriteMany
          capacity:
            storage: 20Gi
          csi:
            driver: nasplugin.csi.alibabacloud.com
            volumeAttributes:
              mountProtocol: cpfs-nfs                                         # Mounts the file system over the NFS protocol.
              path: "/share"                                                  # The directory in the mount address.
              volumeAs: subpath                                               # A subdirectory.
              server: "cpfs-******-******.cn-shanghai.cpfs.aliyuncs.com"      # The domain name in the mount address.
            volumeHandle: cpfs-pv                                             # Must be the same as the PV name.
          mountOptions:
          - rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport
          - vers=3
        ---
        apiVersion: v1
        kind: PersistentVolumeClaim
        metadata:
          name: cpfs-pvc
        spec:
          accessModes:
          - ReadWriteMany
          resources:
            requests:
              storage: 20Gi
          selector:
            matchLabels:
              alicloud-pvname: cpfs-pv
        ```
        
        -   PV parameters
            
            **Parameter**
            
            **Description**
            
            `labels`
            
            Set a label. This allows a PVC to use a `selector` to match and attach to the PV.
            
            `accessModes`
            
            The access mode of the PV.
            
            `capacity.storage`
            
            The storage capacity of the volume.
            
            `csi.driver`
            
            The driver type. Set it to `nasplugin.csi.alibabacloud.com`.
            
            `csi.volumeAttributes`
            
            The properties of the CPFS volume.
            
            -   `mountProtocol`: Set to `cpfs-nfs`. This indicates that CPFS is mounted over the NFS protocol.
                
            -   `path`: Set to the path of the exported directory of the CPFS General-purpose Edition protocol service, such as `/share`. You can also set it to a subdirectory, such as `/share/dir`.
                
            -   `volumeAs`: Set to `subpath`. This indicates that a subdirectory-type PV is created.
                
            -   `server`: Set to the domain name in the mount address of the exported directory of the CPFS General-purpose Edition protocol service.
                
            
            `csi.volumeHandle`
            
            Must be the same as the PV name.
            
        -   PVC parameters
            
            **Parameter**
            
            **Description**
            
            `accessModes`
            
            The access mode that the PVC requests from the PV.
            
            `selector`
            
            Uses the label on the PV to match and attach.
            
            `resources.requests.storage`
            
            The storage capacity allocated to the pod. It cannot be larger than the PV capacity.
            
    2.  Create the PV and PVC.
        
        ```
        kubectl apply -f cpfs-pv-pvc.yaml
        ```
        
2.  Confirm that the PVC is bound to the PV.
    
    ```
    kubectl get pvc cpfs-pvc
    ```
    
    The following example shows a sample output:
    
    ```
    NAME       STATUS   VOLUME    CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
    cpfs-pvc   Bound    cpfs-pv   20Gi       RWO                           <unset>                 18m
    ```
    

## **Step 3: Create an application and mount the CPFS volume**

1.  Create a StatefulSet and mount the statically provisioned volume of CPFS General-purpose Edition.
    
    1.  Save the following content as cpfs-test.yaml.
        
        ```
        apiVersion: apps/v1
        kind: StatefulSet
        metadata:
          name: cpfs-sts
        spec:
          selector:
            matchLabels:
              app: nginx
          serviceName: "nginx"
          replicas: 1
          template:
            metadata:
              labels:
                app: nginx
            spec:
              containers:
              - name: nginx
                image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
                volumeMounts:
                - name: cpfs-pvc
                  mountPath: /data
              volumes:
              - name: cpfs-pvc
                persistentVolumeClaim:
                  claimName: cpfs-pvc
        ```
        
    2.  Create the StatefulSet.
        
        ```
        kubectl apply -f cpfs-test.yaml
        ```
        
2.  Confirm that the statically provisioned volume of CPFS General-purpose Edition is mounted.
    
    ```
    kubectl exec cpfs-sts-0 -- mount | grep /data
    ```
    
    The following output indicates that the statically provisioned volume of CPFS General-purpose Edition is successfully mounted.
    
    ```
    cpfs-******-******.cn-shanghai.cpfs.aliyuncs.com:/share on /data type nfs (rw,relatime,vers=3,rsize=1048576,wsize=1048576,namlen=255,hard,nolock,noresvport,proto=tcp,port=30000,timeo=600,retrans=2,sec=sys,mountaddr=127.0.1.255,mountvers=3,mountport=30000,mountproto=tcp,local_lock=all,addr=127.0.1.255)
    ```
