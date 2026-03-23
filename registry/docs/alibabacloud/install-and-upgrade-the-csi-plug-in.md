The Container Storage Interface (CSI) components handle dynamic volume lifecycle operations in ACK clusters. This guide covers component roles, upgrade procedures, and troubleshooting.

## CSI component overview

ACK installs two CSI components by default when creating a cluster:

**Component**

**Role**

**Deployment type**

[csi-plugin](/help/en/ack/product-overview/csi-plugin)

Mounts, unmounts, and formats volumes

DaemonSet

[csi-provisioner](/help/en/ack/product-overview/csi-provisioner)

Dynamically creates and scales out volumes, and creates snapshots. Supports Elastic Block Storage (EBS), NAS, and OSS volumes by default.

Deployment

**Note**

New clusters install the managed version of csi-provisioner by default. Alibaba Cloud handles operations and maintenance (O&M) for managed components, so the related pods are not visible in the cluster.

## Upgrade csi-plugin and csi-provisioner

Check for available updates and upgrade the CSI components from the ACK console.

**Important**

If the csi-compatible-controller component is in use for FlexVolume-to-CSI migration and the migration is not complete, automatic upgrades are blocked. Complete the migration first, or manually upgrade the CSI components during migration. For details, see [Upgrade components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-compatible-controller-to-migrate-from-flexvolume-to-csi).

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster and click its name. In the left navigation pane, click **Add-ons**.
    
3.  Click the **Storage** tab. In the **csi-plugin** and **csi-provisioner** cards, check for available upgrades and apply them.
    
    **Note**
    
    If the upgrade fails in the console, see [Component upgrade failures](#468ac3d6154nr) for troubleshooting steps.
    

## Troubleshooting

### Component issues

#### csi-plugin fails to start with exec format error

The csi-plugin container reports:

```
exec /usr/bin/plugin.csi.alibabacloud.com: exec format error
```

**Cause:** csi-plugin supports both amd64 and arm64 architectures. This error occurs when an image pull is incomplete -- the image metadata exists, but the binary is invalid. A forced node shutdown during the image pull is a common trigger. Check the ActionTrail logs for the ECS instance to confirm whether a shutdown command was executed.

**Solution:**

-   **Option A:** Scale out the cluster by adding a new node, then drain the current node.
    
-   **Option B:** If adding a new node is not possible:
    
    1.  Drain all applications from the current node, then remove the node from the cluster.
        
    2.  Log on to the node and delete all containers, if any.
        
    3.  Delete all files in the `/var/lib/containerd` directory.
        
    4.  Add the node back to the cluster.
        

#### Out-of-memory (OOM) errors from csi-provisioner

The sidecar container in the csi-provisioner pod caches information about pods, persistent volumes (PVs), and persistent volume claims (PVCs). As the cluster grows, this cache can cause OOM errors.

-   **Managed version:** [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
    
-   **Self-managed version:** Adjust the memory limit based on cluster size: ![Modify memory limit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1798505761/p542123.png)
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the target cluster and click its name. In the left navigation pane, click **Add-ons**.
        
    3.  On the **Add-ons** page, find **csi-provisioner**, click the ![icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7699215761/p542138.png) icon, and select **View YAML**.
        
    4.  Edit the YAML file to increase the memory limit.
        

#### High network traffic on the csi-plugin pod

Pod monitoring shows unusually high network traffic for csi-plugin.

**Cause:** csi-plugin mounts NAS volumes on nodes. When a pod uses a NAS volume, the NAS request traffic from that pod passes through the csi-plugin namespace. Cluster monitoring records this traffic against the csi-plugin pod.

**No action required.** The traffic is only recorded by monitoring. It is not duplicated and does not consume extra bandwidth.

#### csi-provisioner logs show failed to renew lease error

Running `kubectl logs csi-provisioner-xxxx -n kube-system` shows:

```
failed to renew lease xxx timed out waiting for the condition
```

**Cause:** csi-provisioner is a high availability (HA) component that runs multiple replicas. The pods use the Kubernetes Lease object for leader election. The pod that acquires the lease becomes the leader and serves the cluster. This error means a pod failed to reach the API server.

**Solution:** Check whether the cluster network and the API server are functioning normally. If the issue persists, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.

### Component upgrade failures

#### csi-plugin pre-check fails

-   **Non-production cluster or no volumes in use:** Manually update the image:
    
    ```
      kubectl set image -n kube-system daemonset/csi-plugin csi-plugin=<image url>
    ```
    
    Replace `<image url>` with the target version's image URL. For available versions, see [csi-plugin](/help/en/ack/product-overview/csi-plugin).
    
-   **Production cluster with critical data:** [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request a manual upgrade.
    

#### csi-plugin pre-check passes but upgrade fails

The csi-plugin component is a DaemonSet. The upgrade fails if any node in the cluster is in the NotReady state or any state other than Running. Fix the faulty nodes first, then retry the upgrade.

If the cause is unclear, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request a manual upgrade.

#### Console shows csi-plugin but not csi-provisioner

Earlier versions of csi-provisioner (1.14 and earlier) were deployed as a StatefulSet. If a csi-provisioner StatefulSet exists in the cluster, delete it and reinstall:

```
kubectl delete sts csi-provisioner
```

Then reinstall the csi-provisioner component from the console. If an error occurs, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request a manual upgrade.

#### csi-provisioner pre-check fails

-   **Non-production cluster or no dynamically provisioned volumes:** Manually update the image:
    
    ```
    kubectl set image -n kube-system deployment/csi-provisioner csi-provisioner=<image url>
    ```
    
    Replace `<image url>` with the target version's image URL. For available versions, see [csi-provisioner](/help/en/ack/product-overview/csi-provisioner).
    
-   **Production cluster with dynamically provisioned disk, NAS, or OSS volumes and critical data:** [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request a manual upgrade.
    

#### csi-provisioner pre-check passes but upgrade fails

[Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request a manual upgrade.

#### csi-provisioner upgrade fails due to node count requirements

This issue has two variants:

**Variant 1 -- Pre-check fails with a node count error**

The pre-check reports that the number of cluster nodes does not meet requirements. To ensure high availability, csi-provisioner runs primary and secondary pods that must be deployed on different nodes. The upgrade fails if the cluster has only one node.

**Solution:** Update the csi-provisioner component. For details, see [Manage the csi-plugin and csi-provisioner components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in).

**Variant 2 -- Pre-check passes but the pod enters CrashLoopBackOff with 403 Forbidden**

The csi-provisioner pod logs show a `403 Forbidden` response:

```
time="2023-08-05T13:54:00+08:00" level=info msg="Use node id : <?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n         \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n <head>\n  <title>403 - Forbidden</title>\n </head>\n <body>\n  <h1>403 - Forbidden</h1>\n </body>\n</html>\n"
```

Security hardening is enabled on the node where the pod is running. This blocks access to the metadata server, which CSI requires.

**Solution:** Disable security hardening on the node. CSI requires access to the node's metadata.

#### csi-provisioner upgrade fails due to StorageClass property changes

The pre-check fails with an error indicating that StorageClass properties do not meet expectations.

**Cause:** The properties of a default StorageClass were changed. This can happen when deleting and recreating a StorageClass with the same name. StorageClass properties are immutable. Modifying them causes the upgrade to fail.

**Solution:**

1.  Delete the default StorageClasses in the cluster: `alicloud-disk-essd`, `alicloud-disk-available`, `alicloud-disk-efficiency`, `alicloud-disk-ssd`, and `alicloud-disk-topology`. This deletion does not affect existing applications.
    
2.  Reinstall the csi-provisioner component. The system automatically recreates the StorageClasses.
    

**Important**

To use a custom StorageClass, create a new one with a different name. Do not modify the default StorageClasses.

## References

-   For more information about CSI, see [alibaba-cloud-csi-driver](https://github.com/kubernetes-sigs/alibaba-cloud-csi-driver).
    
-   For more information about component installation and uninstallation, see [Components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/component-overview).
