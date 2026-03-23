The cnfs-nas-daemon component integrates the client tools required for mounting File Storage NAS (Network Attached Storage) and Cloud Parallel File Storage (CPFS) volumes, supporting their advanced features. This topic describes how to install and use the cnfs-nas-daemon component.

## Overview

The cnfs-nas-daemon component operates as a containerized DaemonSet, embedding client tools for NAS and CPFS. This component:

-   Does not require installation of client tools on Kubernetes nodes.
    
-   Supports:
    
    -   **NAS**: [Mount via Elastic File Client (EFC) client using CNFS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-efc-client-to-mount-nas-through-cnfs)
        
    -   **CPFS**: [Mount statically provisioned CPFS for Lingjun volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cpfs-for-lingjun-statically-provisioned-volumes)
        

## **Prerequisites**

-   The cluster runs Kubernetes 1.26 or later. [Manually upgrade the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster) if needed.
    
-   The [csi-plugin](/help/en/ack/product-overview/csi-plugin) component V1.33.1 or later is installed in the cluster. To upgrade, see [Manage the csi-plugin and csi-provisioner components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
    

## Procedure

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  Click the **Storage** tab.
    
4.  Install the cnfs-nas-daemon component.
    
    After installing cnfs-nas-daemon, the system will automatically deploy a DaemonSet in the cluster.
    
    1.  Find the **cnfs-nas-daemon** component and click **Install**.
        
    2.  Configure the DaemonSet parameters for cnfs-nas-daemon as needed and click **OK**.
        
        **Important**
        
        The DaemonSet for cnfs-nas-daemon defaults to `updateStrategy: OnDelete`, preventing mass disruption of pods with mounted volumes during component upgrades. You can manually delete the original pods to complete the update, or modify `updateStrategy` to `RollingUpdate`.
        
    3.  Verify the deployment status of the DaemonSet for cnfs-nas-daemon:
        
        ```
        kubectl get pods -n cnfs-system -l app=cnfs-nas-daemon 
        ```
        
        Expected output:
        
        ```
        NAME                    READY   STATUS    RESTARTS   AGE
        cnfs-nas-daemon-47mjw   1/1     Running   0          56s
        cnfs-nas-daemon-dkf4d   1/1     Running   0          56s
        cnfs-nas-daemon-s2btk   1/1     Running   0          56s
        ```
        
        **Important**
        
        When a cnfs-nas-daemon pod restarts, it also restarts the related NAS or CPFS client process:
        
        -   During this restart period, I/O operations on the mount point will be temporarily blocked or delayed.
            
        -   After the restart is complete, I/O operations will automatically resume normal functionality, typically without causing service disruption.
            
        
5.  Modify the parameter configuration of csi-plugin to enable cnfs-nas-daemon:
    
    1.  Locate the **csi-plugin** component and click **Configuration**.
        
    2.  Add `AlinasMountProxy=true` to **FeatureGate**.
        
        After adding this feature gate, Container Storage Interface (CSI) will use cnfs-nas-daemon for mounting.
