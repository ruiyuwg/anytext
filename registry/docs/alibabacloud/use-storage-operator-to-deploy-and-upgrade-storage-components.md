The storage-operator component provides features such as auto scaling of volumes, online modification of disk configurations, and resource monitoring to improve the O&M efficiency of Alibaba Cloud storage resources in ACK clusters.

## **Prerequisites**

-   The cluster is version 1.20 or later. To upgrade the cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   The Container Storage Interface (CSI) plugin is installed.
    
    > You can view the installation status of the component on the **Add-ons** page.
    

## Component introduction

By default, storage-operator is deployed in the cluster as a Deployment with the following features enabled.

-   Volume auto scaling: Automatically scales disk and NAS volumes.
    
    To disable this feature, add the Feature Gate `Expander=false`.
    
-   Disk configuration modification: Modifies disk configurations.
    
    To disable this feature, add the Feature Gate `DiskVolumeUpgradeControl=false`.
    
-   Stateful application migration: Migrates stateful applications across zones.
    
    To disable this feature, add the Feature Gate `ApplicationMigrationAcrossAZ=false`.
    

## Manage the storage-operator component

### **Check the component running status**

Run the following command to check the status of the component pod and verify that storage-operator is running.

```
kubectl get pods -n kube-system -l app=storage-operator
```

Expected output:

```
NAME                                READY   STATUS    RESTARTS   AGE
storage-operator-57bdfd7f56-kl86k   1/1     Running   0          12m
```

### **Upgrade the component**

Before you upgrade the component, review the [storage-operator component release notes](/help/en/ack/product-overview/storage-operator).

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  Locate storage-operator and follow the on-screen instructions to upgrade the component.
