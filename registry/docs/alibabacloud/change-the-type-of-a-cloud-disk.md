Container Service for Kubernetes (ACK) allows you to create multiple categories of cloud disks in ACK clusters based on your storage requirements and budget for various scenarios. ACK also allows you to change disk categories to meet evolving business requirements. For example, if you initially created a standard SSD for your application but now require higher IOPS, you can upgrade the disk category from standard SSD to Enterprise SSD (ESSD).

## Prerequisites

-   Your cluster uses Kubernetes 1.20 or later and has the Container Storage Interface (CSI) plug-in installed.
    
    To upgrade your cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   [storage-operator](/help/en/ack/product-overview/storage-operator#task-2061194) 1.26.1-50a1499-aliyun or later is installed in the cluster.
    
    **Note**
    
    By default, the storage-operator component is installed in the cluster. You can go to the cluster details page in the ACK console. In the left-side navigation pane of the cluster details page, choose **Operations** > **Add-ons**, and then click the **Storage** tab to check whether storage-operator is installed and view its version. For more information, see [Manage the storage-operator component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-storage-operator-to-deploy-and-upgrade-storage-components).
    
-   If your cluster is an ACK dedicated cluster, you must ensure that the worker Resource Access Management (RAM) role and master RAM role of your cluster have permissions to call the ModifyDiskSpec operation. For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy#task-2149286).
    
    > This authorization is not required for ACK managed clusters.
    
    **Click to view policy content**
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "ecs:CreateSnapshot",
                    "ecs:DescribeSnapshot",
                    "ecs:DeleteSnapshot",
                    "ecs:ModifyDiskSpec",
                    "ecs:DescribeTaskAttribute"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
    

## Usage notes

-   Basic disks and ephemeral disks cannot be changed to other disk categories.
    
    Upgrades and downgrades are supported in the following scenarios:
    
    ### Ultra disks
    
    Ultra disks can be changed into the following disks:
    
    -   Standard SSDs
        
    -   ESSD Entry disks
        
    -   ESSDs at the performance levels 0, 1, 2, or 3 (PL0, PL1, PL2, or PL3 ESSDs)
        
    -   ESSD AutoPL disks
        
    
    **Note**
    
    Only ESSD Entry disks can be attached to instances of [universal instance families](/help/en/ecs/user-guide/general-work-force#t2258297.html) and the [e economy instance family](/help/en/ecs/user-guide/shared-instance-families#e).
    
    ### **Standard SSDs**
    
    Standard SSDs can be changed into the following disks:
    
    -   PL1, PL2, or PL3 ESSDs
        
    -   ESSD AutoPL disks
        
    
    ### ESSDs
    
    -   PL0 ESSDs can be changed into the following disks:
        
        -   PL1, PL2, or PL3 ESSDs
            
        -   ESSD AutoPL disks
            
    -   You can change the categories of PL1, PL2, and PL3 ESSDs based on their billing methods.
        
        -   If ESSDs use the pay-as-you-go billing method, you can make the following changes:
            
            -   Change the ESSDs between PL1, PL2, and PL3.
                
            -   Change the ESSDs into ESSD AutoPL disks.
                
        -   If ESSDs use the subscription billing method, you can upgrade the ESSDs only from a low performance level to a high performance level.
            
            -   You can upgrade PL1 ESSDs to PL2 ESSDs.
                
            -   You can upgrade PL1 ESSDs to PL3 ESSDs.
                
            -   You can upgrade PL2 ESSDs to PL3 ESSDs.
                
            -   You can change PL1 ESSDs into ESSD AutoPL disks.
                
    
    **Note**
    
    -   The performance levels to which ESSDs can be upgraded are determined based on the capacity of the ESSDs. If you cannot select a higher performance level for an ESSD, extend the ESSD and then upgrade its performance level.
        
    -   After you change a disk into a PL3 ESSD, attach the disk to an instance or restart the instance to which the disk is attached so that the PL3 ESSD can deliver optimal performance. Otherwise, the PL3 ESSD cannot deliver optimal performance but data reliability is not affected.
        
    
    ### ESSD AutoPL disks
    
    ESSD AutoPL disks cannot be changed into other disk categories.
    
    **Note**
    
    When you change the configurations of an ESSD AutoPL disk or change a disk into an ESSD AutoPL disk, take note of the following items:
    
    -   You can enable or disable performance provision for the ESSD AutoPL disk based on your needs. After you enable performance provision for an ESSD AutoPL disk, you are charged additional fees. For more details, see [Modify the provisioned performance of an ESSD AutoPL disk](/help/en/ecs/user-guide/modify-the-performance-configurations-of-an-essd-autopl-disk#section-k98-0hy-czs).
        
    -   You cannot configure performance burst for the disk during the change. You can enable or disable performance burst after the change is complete. For more information, see [Enable or disable performance burst for an ESSD AutoPL disk](/help/en/ecs/user-guide/modify-the-performance-configurations-of-an-essd-autopl-disk#section-bh2-kn8-5bm).
        
    
    **Note**
    
    When the disk category change involves regional Enterprise SSD (ESSD), the affinity settings of the volume cannot be modified. For example, after you change an ESSD into a regional ESSD, the pod that uses the disk still cannot be scheduled to other zones.
    
-   The ECS instance types to which a cloud disk can be attached depend on the disk category. When you change the disk category of a volume, ensure that the new disk category is supported by the ECS instance type of the node that hosts the pod to which the volume is mounted. For more information about the matching rules between disk categories and ECS instance types, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
-   Only pay-as-you-go disks can be mounted as volumes. After you change the disk category of a volume, the disk is billed based on the billing rules of the new disk category.
    

For more information, see [Limits](/help/en/ecs/user-guide/change-the-category-of-a-disk#section-s4a-to0-1jx).

## **Step 1: Configure storage-operator to enable disk category change**

Connect to the cluster and run the following command to modify the storage-operator ConfigMap and enable the disk category change feature. By default, the storage-controller plug-in provided by the storage-operator is used to implement this feature.

```
kubectl patch configmap/storage-operator \
  -n kube-system \
  --type merge \
  -p '{"data":{"storage-controller":"{\"imageRep\":\"acs/storage-controller\",\"imageTag\":\"\",\"install\":\"true\",\"template\":\"/acs/templates/storage-controller/install.yaml\",\"type\":\"deployment\"}"}}'
```

## **Step 2: Create a custom resource to perform a disk category change**

**Important**

To minimize impacts on your business, change disk categories or performance levels during off-peak hours.

1.  Create a StatefulSet.
    
    If a StatefulSet that has a cloud disk mounted already exists in your cluster, you can skip this step.
    
    1.  Use the following template to create a file named StatefulSet.yaml.
        
        The YAML file is used to create a StatefulSet that provisions a pod. The pod has a 40-GiB PL1 ESSD mounted.
        
        ```
        apiVersion: apps/v1
        kind: StatefulSet
        metadata:
          name: nginx-diskspec
        spec:
          selector:
            matchLabels:
              app: nginx
          replicas: 1
          template:
            metadata:
              labels:
                app: nginx
            spec:
              containers:
              - name: nginx
                image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
                ports:
                - containerPort: 80
                volumeMounts:
                - name: pvc-disk
                  mountPath: /data
              volumes:
                - name: pvc-disk
                  persistentVolumeClaim:
                    claimName: disk-pvc
          volumeClaimTemplates:
            - metadata:
                name: pvc-disk
                labels:
                  app: nginx
              spec:
                accessModes: [ "ReadWriteOnce" ]
                storageClassName: "alicloud-disk-essd"
                resources:
                  requests:
                    storage: 40Gi    
        ```
        
    2.  Create the StatefulSet.
        
        ```
        kubectl create -f StatefulSet.yaml
        ```
        
    3.  View the pod deployment.
        
        ```
        kubectl get pod -l app=nginx
        ```
        
        Expected output:
        
        ```
        NAME                 READY   STATUS    RESTARTS   AGE
        nginx-diskspec-0     1/1     Running   0          4m4s
        ```
        
    4.  View information about the persistent volume claim (PVC) used by the StatefulSet and obtain the name of the persistent volume (PV) bound to the PVC.
        
        ```
        kubectl get pvc pvc-disk-nginx-diskspec-0
        ```
        
        The following output shows that the name of the bound PV is `d-uf6ijdcp3aeoi82w****`, which is displayed in the `VOLUME` column.
        
        ```
        NAME                           STATUS    VOLUME                   CAPACITY   ACCESS MODES   STORAGECLASS                VOLUMEATTRIBUTESCLASS   AGE
        pvc-disk-nginx-diskspec-0      Bound     d-uf6ijdcp3aeoi82w****   40Gi       RWO            alicloud-disk-essd          <unset>                 5m6s
        ```
        
2.  View the disk category of the PV.
    
    ```
    kubectl get pv d-uf6ijdcp3aeoi82w**** -o=jsonpath='{.metadata.labels}'
    ```
    
    `cloud_essd.PL1` is returned in the output, which indicates that the PV is used to mount a PL1 ESSD.
    
    ```
    {"csi.alibabacloud.com/disktype":"cloud_essd.PL1"}
    ```
    
3.  Create a custom resource to perform a disk category change.
    
    1.  Create a file named cr.yaml.
        
        Copy the following YAML template to the file. Replace `pvNames` and `desiredDiskType` with actual values.
        
        ```
        apiVersion: storage.alibabacloud.com/v1beta1
        kind: ContainerStorageOperator
        metadata:
          name: default
        spec:
          operationType: DISKUPGRADE
          operationParams:
            pvNames: "d-uf6ijdcp3aeoi82w****"
            desiredDiskType: "cloud_auto"
        ```
        
        **Parameter**
        
        **Description**
        
        `operationType`
        
        A value of DISKUPGRADE indicates that the current operation is a cloud disk Upgrade/Downgrade.
        
        `pvNames`
        
        The PV that you want to manage. Separate multiple PVs with commas (,). Example: `"disk-1***,disk-2***,disk-3***"`.
        
        `desiredDiskType`
        
        The new disk category. Specify the value based on the description in the [Usage notes](#section-9sx-neu-fx8) section.
        
        -   `cloud_auto`: ESSD AutoPL disk
            
        -   `cloud_essd.PL0`: PL0 ESSD
            
        -   `cloud_essd.PL1`: PL1 ESSD
            
        -   `cloud_essd.PL2`: PL2 ESSD
            
        -   `cloud_essd.PL3`: PL3 ESSD
            
        -   `cloud_ssd`: standard SSD
            
        
    2.  Create the custom resource.
        
        ```
        kubectl create -f cr.yaml
        ```
        
4.  Verify that the disk category is changed.
    
    1.  Query the status of the custom resource to check whether the disk category is changed.
        
        ```
        kubectl get ContainerStorageOperator default -o yaml
        ```
        
        Check the `status` field in the output. Expected output:
        
        ```
          status:
            message: []
            process: 100%
            status: SUCCESS
        ```
        
    2.  Query the labels of the PV to check whether the disk category is changed to ESSD AutoPL disk.
        
        ```
        kubectl get pv d-uf6ijdcp3aeoi82w**** -o=jsonpath='{.metadata.labels}'
        ```
        
        Expected output:
        
        ```
        {"csi.alibabacloud.com/disktype":"cloud_auto"}
        ```
