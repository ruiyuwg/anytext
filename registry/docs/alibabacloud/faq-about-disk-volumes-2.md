This topic provides answers to some frequently asked questions about disk volumes that are used in ACK Serverless clusters.

## FAQ about disk creation

-   [Why does the system prompt InvalidDataDiskCatagory.NotSupported when I create a dynamically provisioned PV?](#section-qjb-zsa-1sq)
    
-   [Why does the system prompt The specified AZone inventory is insufficient when I create a dynamically provisioned PV?](#section-w11-s2o-65d)
    
-   [Why does the system prompt disk size is not supported when I create a dynamically provisioned PV?](#section-hh8-u9p-zhp)
    
-   [What do I do if I fail to create a PV that is dynamically provisioned by using a StorageClass in WaitForFirstConsumer mode?](#section-zip-avp-mzi)
    

## Why does the system prompt InvalidDataDiskCatagory.NotSupported when I create a dynamically provisioned PV?

## Problem

You failed to create a dynamically provisioned persistent volume (PV) and the system generates a persistent volume claim (PVC) event: InvalidDataDiskCatagory.NotSupported.

## Cause

The zone does not support the disk type that is specified in the StorageClass used to create the PV or the disks of the specified disk type is out of stock in the zone.

## Solution

-   Specify multiple disk types in the StorageClass used to create the PV. For more information, see [Use a dynamically provisioned disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes#section-qlr-jkq-hi2). You can also update the Container Storage Interface (CSI) plug-in used by the cluster to the latest version. This way, you can use the alicloud-disk-topology-alltype StorageClass to create the PV.
-   Add nodes in new zones to the clusters. For more information, see [Recommended storage settings for cross-zone deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/recommended-storage-settings-for-cross-zone-deployment#task-2269269).

## Why does the system prompt The specified AZone inventory is insufficient when I create a dynamically provisioned PV?

## Problem

You failed to create a dynamically provisioned PV and the system generates a PVC event: The specified AZone inventory is insufficient.

## Cause

The system failed to create the disk because Elastic Compute Service (ECS) instances are out of stock.

## Solution

-   Specify multiple disk types in the StorageClass used to create the PV. For more information, see [Use a dynamically provisioned disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes#section-qlr-jkq-hi2). You can also update the CSI plug-in used by the cluster to the latest version. This way, you can use the alicloud-disk-topology-alltype StorageClass to create the PV.
-   Add nodes in new zones to the cluster. For more information, see [Recommended storage settings for cross-zone deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/recommended-storage-settings-for-cross-zone-deployment#task-2269269).

## Why does the system prompt disk size is not supported when I create a dynamically provisioned PV?

## Problem

Your attempt to dynamically provision a PV failed and the system generates a PVC event: disk size is not supported.

## Cause

The disk size specified in the PVC is invalid. The minimum disk size limit varies based on the disk type. For example, the size of an ultra disk or SSD must be 20 GiB or larger. For more information about the limits, see [Disk categories](/help/en/ecs/user-guide/disks-2#section-d9f-cog-644).

## Solution

Modify the disk size specified in the PVC to meet the requirement.

## What do I do if I fail to create a PV that is dynamically provisioned by using a StorageClass in WaitForFirstConsumer mode?

### Problem

You failed to create a persistent volume (PV) that is dynamically provisioned by using a StorageClass in WaitForFirstConsumer mode. However, you can create a PV that is dynamically provisioned by using a StorageClass in Immediate mode.

### Cause

If you want to create a PV that is dynamically provisioned in an ACK Serverless cluster by using a StorageClass in WaitForFirstConsumer mode, you must use extra configurations.

### Solution

1.  Update csi-provisioner to the latest version. For more information, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).
    
2.  Run the following command to edit the eci-profile ConfigMap:
    
    ```
    kubectl edit configmap eci-profile -n kube-system
    ```
    
3.  Change the value of the `WaitForFirstConsumer` parameter in the `featureGates` section from `false` to `true`.
    
    ```
    featureGates: MetricsVpcNet=true,WaitForFirstConsumer=true
    ```
