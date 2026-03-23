The versions of ossfs 1.0 are iterated together with the Container Storage Interface (CSI) component. This topic describes the release notes for ossfs 1.0 and describes how to view and change the versions of ossfs 1.0.

## Features

When you use CSI to mount Object Storage Service (OSS) volumes, the csi-plugin component launches the ossfs process to mount objects on the OSS server to the specified path in a container. You can use POSIX to read or write objects on the OSS server in the same way as reading or writing regular files. This facilitates resource access and management in the cloud.

[ossfs 1.0](/help/en/oss/developer-reference/ossfs) is a user space file system used to mount [OSS](/help/en/oss/user-guide/what-is-oss) buckets to local file systems in Linux. ossfs 1.0 allows you to access and manage OSS objects in the same way as you manage local files. You can manage and share OSS objects seamlessly. ossfs provides the following features:

-   Supports most features described in POSIX standards, such as file and directory uploads and downloads, and user permission management.
    
-   Uses multipart upload and resumable upload to upload OSS objects by default.
    
-   Supports MD5 verification to ensure data integrity.
    
-   Supports all S3FS features because ossfs is developed based on S3FS.
    

## Version description

The versions of ossfs 1.0 are displayed in the **x.yy.z** format.

-   **x.yy** indicates a version developed based on open source s3fs. You can configure CSI environment variables to roll back to a historical **x.yy** version.
    
-   **z** indicates an iterated version of ossfs. The version may involve optimizations to the OSS and ACK environments. For example, the version may introduce new monitoring, authentication, and encryption features. For more information, see [csi-plugin](/help/en/ack/product-overview/csi-plugin).
    
-   To distinguish between [open source ossfs](https://github.com/aliyun/ossfs) versions and ACK ossfs versions, the **.ack.1** prefix is appended to ACK ossfs versions, such as **1.80.6.ack.1**.
    

#### **Ossfs major version release notes**

**Important**

If you have high requirements on file systems, we recommend that you update the version of ossfs 1.0 to 1.91 or later. For more information about the applicable scenarios of version 1.91 and later, see [Best practices for changing ossfs 1.0 to version 1.91 or later](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-of-new-functions-and-performance-pressure-measurement-of-ossfs-version-1-91-and-above#67bbc45e76h22). For information about how to change the version of ossfs 1.0, see [Change the version of ossfs 1.0 to 1.91 or later](#21e93976c2l12).

**Architecture**

**ossfs 1.0 version**

**CSI version**

Arm64

1.91 and later

-   v1.30.1-98960d8-aliyun (Used through feature gates)
    
-   v1.30.4-fe12624-aliyun (Used by default)
    

1.80.x

v1.20.5-ff6490f-aliyun (the first CSI version that supports ARM64)

AMD64

1.91 and later

-   v1.30.1-98960d8-aliyun (Used through feature gates)
    
-   v1.30.4-fe12624-aliyun (Used by default)
    

1.88.x

v1.22.14-820d8870-aliyun

1.86.x

v1.16.9.43-f36bb540-aliyun

1.80.x

Initial version

For detailed release notes of ossfs v1.91.0 and later, see [Version updates and new features](/help/en/oss/developer-reference/ossfs-version-update-function-introduction/).

## **View the ossfs version**

-   When the CSI version is earlier than 1.28 and does not include 1.26.6, ossfs 1.0 runs on the node. You can log on to any node and run the following command to check the version of ossfs 1.0.
    
    ```
    /usr/local/bin/ossfs --version
    ```
    

-   When the CSI version is 1.26.6, or 1.28.1 or later, ossfs 1.0 runs as a container in a pod in the cluster. You can use the following method to query the version of ossfs 1.0.
    
    ## CSI 1.30.4 or later
    
    **Note**
    
    If the CSI version is 1.30.4 or later, after an OSS volume is mounted, the CSI component automatically creates related pods in the `ack-csi-fuse` namespace.
    
    1.  Query the running pods.
        
        ```
        kubectl -n ack-csi-fuse get pod | grep csi-fuse-ossfs
        ```
        
    2.  Check the version of ossfs 1.0.
        
        ```
        kubectl -n ack-csi-fuse exec -it <csi-fuse-ossfs-xxxx> -- ossfs --version
        ```
        
    
    ## CSI earlier than 1.30.4
    
    **Note**
    
    If the CSI version is earlier than 1.30.4, after an OSS volume is mounted, the CSI component automatically creates related pods in the `kube-system` namespace.
    
    1.  Query the running pods.
        
        ```
        kubectl -n kube-system get pod | grep csi-fuse-ossfs
        ```
        
    2.  Check the ossfs version.
        
        ```
        kubectl -n kube-system exec -it <csi-fuse-ossfs-xxxx> -- ossfs --version
        ```
        
    

## Change the version of ossfs 1.0 to 1.91 or later

### **Method 1: Update the CSI version**

In CSI versions 1.30.4 and later, ossfs 1.0 uses version 1.91 and later by default. You can change the version of ossfs 1.0 by upgrading CSI.

### **Method 2: Enable the feature gate**

To change the version of ossfs 1.0 to 1.91 or later, you must enable the `UpdatedOssfsVersion` feature gate. To do this, perform the following steps:

**Note**

By default, pods that mount the same OSS volume on the same node share one ossfs process. This means that only one pod named `csi-fuse-ossfs-***` is started in the cluster. After the `UpdatedOssfsVersion` feature gate is enabled, newly started ossfs containers automatically use the 1.91 or later version image. Services that are using OSS volumes are not affected. To manually trigger an upgrade of the ossfs version used by current services, see [How do I restart the ossfs process when the OSS volume is shared by multiple pods?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#554e496c0at2c)

1.  Make sure that the version of csi-plugin is 1.30.1 or later.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the one you want to manage and click its name. In the left-side navigation pane, choose **Operations** > **Add-ons**.
        
    3.  On the Add-ons page, find csi-plugin and view its version.
        
        If the version of csi-plugin is earlier than 1.30.1, click **Upgrade** in the lower-right corner of the component to upgrade the component to the latest version.
        
2.  Enable the `UpdatedOssfsVersion` feature gate.
    
    **Note**
    
    If you use the console to enable the feature gate, the FeatureGate parameters overwrite the existing settings. If you cannot confirm whether kubectl is already used to enable other feature gates, we recommend that you use kubectl to enable the preceding feature gate.
    
    ## Use kubectl
    
    1.  Modify the DaemonSet file of csi-plugin.
        
        ```
        kubectl -n kube-system edit ds csi-plugin
        ```
        
    2.  In the `args` of the csi-plugin container (not the Init Container), add the parameter `--feature-gates=UpdatedOssfsVersion=true`.
        
        **Note**
        
        If other feature gates are already enabled, use the following format: `--feature-gates=xxxxxx=true,yyyyyy=false,UpdatedOssfsVersion=true`.
        
        The modified args field:
        
        ```
        - args:
          - --endpoint=$(CSI_ENDPOINT)
          - --v=2
          - --driver=oss,nas,disk
          - --feature-gates=UpdatedOssfsVersion=true
        ```
        
    
    ## Use the console
    
    1.  After you upgrade the csi-plugin component, click **Configure** in the csi-plugin component card.
        
    2.  On the **csi-plugin Parameters** page, set the FeatureGate parameter to **UpdatedOssfsVersion=true**, and then click **OK**.
        
        If other feature gates are already enabled, use the following format: `xxxxxx=true,yyyyyy=false,UpdatedOssfsVersion=true`.
        
    

## References

For information about the new features and performance test results of ossfs 1.91 or later, see [New features of ossfs 1.0 and ossfs performance benchmarking](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-of-new-functions-and-performance-pressure-measurement-of-ossfs-version-1-91-and-above).
