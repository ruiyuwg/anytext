With ossfs 1.0, you can mount an existing Object Storage Service (OSS) Bucket as persistent storage by creating a statically provisioned volume. This method is ideal for general-purpose use cases with concurrent reads, infrequent random writes, and modified file permissions, such as mounting configuration files, images, or video resources.

## Prerequisites

Ensure your cluster and Container Storage Interface (CSI) components (csi-plugin and csi-provisioner) meet the version requirements:

-   [Mount using RAM Roles for Service Accounts (RRSA) authentication](#59c52ac8dbdn2): Your cluster must be version 1.26 or later, and your CSI version must be v1.30.4 or later.
    
    > If you used the RRSA feature in a version earlier than 1.30.4, you must add RAM Role authorization configurations as described in[\[Product Change\] CSI ossfs version upgrade and mount process optimization](/help/en/ack/product-overview/announcement-on-csi-oss-driver-upgrade).
    
-   [Use AccessKey](#1f73d18448r9z): For stable mounts, we recommend CSI v1.18.8.45 or later.
    

To upgrade your cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster). To upgrade components, see [Upgrade CSI components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).

> Starting from CSI v1.30.4-\*, [mounting OSS statically provisioned volumes depends on the csi-provisioner component](/help/en/ack/product-overview/announcement-on-csi-oss-driver-upgrade#e1d7622f25vx6).

## Step 1: Choose an authentication method and prepare credentials

To access OSS Bucket resources securely, first configure an authentication mechanism.

-   [RRSA authentication](#59c52ac8dbdn2): Grants Pods temporary, automatically rotating RAM roles for fine-grained, application-level permission isolation. This method is more secure.
    
-   [AccessKey authentication](#1f73d18448r9z): Stores static, long-term keys in a Secret. This method is simpler to configure but less secure.
    

**Important**

-   In clusters version 1.26 and later, we recommend using RRSA authentication to avoid service interruptions caused by `ossfs` remounts when an AccessKey is rotated.
    
-   This guide assumes the cluster and the [OSS Bucket](/help/en/oss/user-guide/create-a-bucket-4) are under the same Alibaba Cloud account. To [mount an OSS Bucket across accounts](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#98ed6a17e54md), we recommend using RRSA authentication.
    

## Use RRSA

### **1\. Enable RRSA in your cluster**

1.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, click **Cluster Information**.
    
2.  On the **Basic Information** tab, find the **Security and Auditing** section. To the right of **RRSA OIDC**, click **Enable**. Follow the on-screen prompts to enable RRSA during off-peak hours.
    
    When the cluster status changes from **Updating** to **Running**, RRSA has been successfully enabled.
    
    **Important**
    
    After you enable RRSA, the maximum validity period for new ServiceAccount tokens created in the cluster is limited to 12 hours.
    

Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.

### **2\. Create and authorize a RAM role**

Create a RAM role that your Pods can assume to access the OSS volume.

View the steps

1.  Create a RAM role.
    
    1.  Go to the [Create Role](https://ram.console.alibabacloud.com/) page in the RAM Console. Select **Identity Provider** as the **Trusted Entity Type**, then click **Switch Editor** to open the **Visual Editor** page.
        
    2.  Select **Identity Provider** as the **Trusted Entity** and click **Edit**. Configure the settings as described below.
        
        > Configure the main settings below. You can use the default values for other parameters. For details, see [Create a RAM role for an OIDC IdP](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-idp#section-mra-74d-14w).
        
        **Parameter**
        
        **Description**
        
        **Identity Provider Type**
        
        Select **OIDC**.
        
        **Identity Provider**
        
        Select `ack-rrsa-<cluster_id>`, where `<cluster_id>` is your cluster ID.
        
        **Condition**
        
        Manually add `oidc:sub`.
        
        -   Condition key: Select **oidc:sub**.
            
        -   Operator: Select **StringEquals**.
            
        -   Condition Value: Enter `system:serviceaccount:ack-csi-fuse:csi-fuse-ossfs`.
            
            -   `ack-csi-fuse`: The namespace where the ossfs client resides. This cannot be customized.
                
            -   `csi-fuse-ossfs`: The ServiceAccount name.
                
                > For information on how modify this, see [How do I use specified ARNs or ServiceAccounts with RRSA authentication?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#65c4c04f5fvuj).
                
        
        **Role Name**
        
        In this example, the name is `demo-role-for-rrsa`.
        
    
2.  Create an Access Policy.
    
    Following the least privilege principle, [create a custom policy](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m) that grants access to the target OSS Bucket (either read-only or read-write permissions).
    
    1.  Go to the [Create Policy](https://ram.console.alibabacloud.com/policies/create) page in the RAM console, switch to the **Script Editor**, and enter the following policy script.
        
        > If you already have a RAM role with OSS permissions, you can reuse it by modifying its trust policy. For details, see [Pod permission isolation based on RRSA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#p-2pl-vki-tcf).
        
        ## **OSS read-only policy**
        
        > Replace `<myBucketName>` with your actual bucket name.
        
        ```
        {
            "Statement": [
                {
                    "Action": [
                        "oss:Get*",
                        "oss:List*"
                    ],
                    "Effect": "Allow",
                    "Resource": [
                        "acs:oss:*:*:<myBucketName>",
                        "acs:oss:*:*:<myBucketName>/*"
                    ]
                }
            ],
            "Version": "1"
        }
        ```
        
        ## OSS **read/write policy**
        
        > Replace `<myBucketName>` with your actual bucket name.
        
        ```
        {
            "Statement": [
                {
                    "Action": "oss:*",
                    "Effect": "Allow",
                    "Resource": [
                        "acs:oss:*:*:<myBucketName>",
                        "acs:oss:*:*:<myBucketName>/*"
                    ]
                }
            ],
            "Version": "1"
        }
        ```
        
    2.  (Optional) If you are encrypting OSS objects with a specific CMK ID managed by KMS, you must also grant the role KMS permissions. For details, see [Use a specified CMK ID managed by KMS for encryption](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/encrypt-an-oss-volume#2d6b2dfe9ffds).
        
    
3.  Attach the policy to the RAM role.
    
    1.  Go to the [Roles](https://ram.console.alibabacloud.com/roles) page in the RAM console. In the **Actions** column for the target role, click **Add Permissions**.
        
    2.  In the **Access Policy** section, search for and select the policy you created, and grant the permissions.
        
    

## **Use AccessKey**

Create a RAM user with OSS access permissions and obtain its AccessKey. This grants the user permissions to perform operations on the OSS Bucket.

1.  Create a RAM user (skip this step if you already have one).
    
    Go to the [Create User](https://ram.console.alibabacloud.com/users/create) page in the RAM console. Follow the on-screen instructions to create a RAM user. You must set a logon name and password.
    
2.  Create an access policy.
    
    This example follows the principle of least privilege. [Create a custom policy](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m) to grant permissions to access the target OSS Bucket (read-only or read/write permissions).
    
    1.  Go to the [Create Policy](https://ram.console.alibabacloud.com/policies/create) page in the RAM console. Switch to the **Script Editor** tab and enter the policy script.
        
        ## **OSS read-only policy**
        
        > Replace `<myBucketName>` with the actual bucket name.
        
        ```
        {
            "Statement": [
                {
                    "Action": [
                        "oss:Get*",
                        "oss:List*"
                    ],
                    "Effect": "Allow",
                    "Resource": [
                        "acs:oss:*:*:<myBucketName>",
                        "acs:oss:*:*:<myBucketName>/*"
                    ]
                }
            ],
            "Version": "1"
        }
        ```
        
        ## OSS **read/write policy**
        
        > Replace `<myBucketName>` with the actual bucket name.
        
        ```
        {
            "Statement": [
                {
                    "Action": "oss:*",
                    "Effect": "Allow",
                    "Resource": [
                        "acs:oss:*:*:<myBucketName>",
                        "acs:oss:*:*:<myBucketName>/*"
                    ]
                }
            ],
            "Version": "1"
        }
        ```
        
        When you create a PV in the console, you also need the `oss:ListBuckets` permission.
        
        ```
        {
          "Effect": "Allow",
          "Action": "oss:ListBuckets",
          "Resource": "*"
        }
        ```
        
    2.  (Optional) If you use a customer master key (CMK) ID managed by KMS to encrypt OSS objects, you must also configure KMS permissions for the RAM user. For more information, see [Use a specified CMK ID managed by KMS for encryption](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/encrypt-an-oss-volume#2d6b2dfe9ffds).
        
    
3.  Grant the policy to the RAM user.
    
    1.  Go to the [Users](https://ram.console.alibabacloud.com/users) page in the RAM console. In the **Actions** column for the target user, click **Add Permissions**.
        
    2.  In the **Access Policy** section, search for and select the policy that you created in the previous step, and then add it to the permissions.
        
    
4.  Create an AccessKey for the RAM user. You will store it as a secret for the PV to use.
    
    1.  Go to the [Users](https://ram.console.alibabacloud.com/users) page in the RAM console. Click the target user. Then, in the **AccessKey** section, click **Create AccessKey**.
        
    2.  In the dialog box that appears, follow the on-screen instructions to create an AccessKey. You must obtain and securely store the AccessKey ID and AccessKey secret.
        
    

## **Step 2: Create a PV**

Create a Persistent Volume (PV) to register the existing OSS Bucket in your cluster.

## RRSA method

1.  Create a file named `pv-oss-rrsa.yaml`.
    
    ```
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      # PV name
      name: pv-oss   
      # PV labels
      labels:    
        alicloud-pvname: pv-oss
    spec:
      capacity:
        # Define the volume capacity
        storage: 10Gi  
      # Access mode
      accessModes:  
        - ReadOnlyMany
      persistentVolumeReclaimPolicy: Retain
      csi:
        driver: ossplugin.csi.alibabacloud.com
        # Must be the same as the PV name (metadata.name)
        volumeHandle: pv-oss  
        volumeAttributes:
          # Replace with the actual bucket name
          bucket: "your-bucket-name"  
          # Mount the root directory or a specified subdirectory of the bucket
          path: /  
          # The endpoint of the region where the bucket is located
          url: "http://oss-cn-hangzhou-internal.aliyuncs.com"  
          otherOpts: "-o umask=022 -o max_stat_cache_size=100000 -o allow_other"
          authType: "rrsa"
          # The RAM role that you created or modified
          roleName: "demo-role-for-rrsa"
          # OSS request signature version
          sigVersion: "v4"  
    ```
    
    **Parameter**
    
    **Description**
    
    `storage`
    
    Defines the capacity of the OSS volume. This value is used only to match the PV with a PVC.
    
    `accessModes`
    
    Configures the Access Mode. Supports `ReadOnlyMany` and `ReadWriteMany`.
    
    If you select `ReadOnlyMany`, ossfs mounts the OSS Bucket in read-only mode.
    
    `persistentVolumeReclaimPolicy`
    
    The PV reclaim policy. OSS volumes currently only support `Retain`, meaning the PV and the data in the OSS Bucket are retained after the PVC is deleted.
    
    `driver`
    
    Defines the driver type. Must be `ossplugin.csi.alibabacloud.com` when using the Alibaba Cloud OSS CSI plug-in.
    
    `volumeHandle`
    
    Must be the same as the PV name (`metadata.name`).
    
    `bucket`
    
    The OSS Bucket to be mounted.
    
    `path`
    
    > Requires CSI component version v1.14.8.32-c77e277b-aliyun or later.
    
    Specifies the mount path relative to the bucket's root directory. Defaults to `/`, which mounts the entire bucket.
    
    If the [ossfs version](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-release-notes#d19e9f3c13xgz) is earlier than 1.91, the specified `path` must already exist in the OSS Bucket. For details, see [New features in ossfs 1.91 and later](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-of-new-functions-and-performance-pressure-measurement-of-ossfs-version-1-91-and-above#5ff79b4cf5rb8).
    
    `url`
    
    The access [endpoint](/help/en/oss/user-guide/regions-and-endpoints) for the OSS bucket.
    
    -   Use an internal endpoint if your cluster nodes and the bucket are in the same region, or if a Virtual Private Cloud (VPC) connection is established.
        
    -   Use a public endpoint if the mount node and the bucket are in different regions.
        
    
    The following are common formats for different access endpoints:
    
    -   Internal: `http://oss-{{regionName}}-internal.aliyuncs.com` or `https://oss-{{regionName}}-internal.aliyuncs.com`.
        
        > The internal access endpoint format `vpc100-oss-{{regionName}}.aliyuncs.com` is deprecated. Switch to the new format as soon as possible.
        
    -   Public: `http://oss-{{regionName}}.aliyuncs.com` or `https://oss-{{regionName}}.aliyuncs.com`.
        
    
    `otherOpts`
    
    Enter custom parameters for the OSS volume in the format `-o *** -o ***`, such as `-o umask=022 -o max_stat_cache_size=100000 -o allow_other`.
    
    **View description**
    
    -   `umask`: Changes the read permissions for ossfs files.
        
        For example, `umask=022` changes the permissions of ossfs files to 755. This resolves permission issues for files uploaded through other methods, such as the SDK or the OSS console, which have a default permission of 640. We recommend configuring this parameter for read/write splitting or multi-user access.
        
    -   `max_stat_cache_size`: Sets the upper limit for metadata cache entries (for example, `100000`). It caches object metadata in memory to improve the performance of operations such as `ls` and `stat`.
        
        However, this cache cannot promptly detect file modifications made through the OSS console, SDK, or ossutil. This may cause the application to read inconsistent data. If you have strict data consistency requirements, set this parameter to `0` (to disable the cache) or lower the cache expiration time with the `stat_cache_expire` parameter. This will reduce read performance.
        
    -   `allow_other`: Allows users other than the mounting user to access files and directories in the mount target. This is suitable for multi-user shared environments where non-mounting users also need to access data.
        
    
    For more optional parameters, see [Options supported by ossfs](/help/en/oss/developer-reference/common-options#section-r8r-tkk-xvq) and [ossfs 1.0 configuration best practices](/help/en/oss/developer-reference/best-practices/).
    
    `authType`
    
    Set to `rrsa` to use RRSA authentication.
    
    `roleName`
    
    Set to the RAM role that you created or modified.
    
    To configure different permissions for different PVs, create different RAM roles and specify different `roleName` values in the PVs.
    
    `sigVersion`
    
    The signature version for requests to the OSS server.
    
    -   `"v1"` (default): Uses OSS [Signature Version 1](/help/en/oss/developer-reference/ddd-signatures-to-urls).
        
    -   `"v4"` (recommended): Uses OSS [Signature Version 4](/help/en/oss/developer-reference/add-signatures-to-urls).
        
    
    > If the default RRSA authentication does not meet your needs (such as if you use a non-default ServiceAccount or a third-party OIDC), you can modify the PV configuration to specify a specific ARN or ServiceAccount. For more information, see [How do I use specified ARNs or ServiceAccounts with RRSA authentication?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#65c4c04f5fvuj).
    
2.  Create the PV.
    
    ```
    kubectl create -f pv-oss-rrsa.yaml
    ```
    

## AccessKey method

## kubectl

1.  Create a file named `oss-secret.yaml` to store the AccessKey obtained in [Step 1](#1f73d18448r9z) as a secret for use by the PV.
    
    ```
    apiVersion: v1
    kind: Secret
    metadata:
      name: oss-secret
      # Must be the same as the namespace where the application resides
      namespace: default
    stringData:
      # Replace with the AccessKey ID you obtained
      akId: <your AccessKey ID>
      # Replace with the AccessKey secret you obtained
      akSecret: <your AccessKey Secret>
    ```
    
2.  Create the Secret.
    
    ```
    kubectl create -f  oss-secret.yaml
    ```
    
3.  Create a file named `pv-oss-ram.yaml`.
    
    ```
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      # PV name
      name: pv-oss
      # PV labels
      labels:
        alicloud-pvname: pv-oss
    spec:
      capacity:
        storage: 10Gi
      accessModes:
        - ReadOnlyMany
      persistentVolumeReclaimPolicy: Retain
      csi:
        driver: ossplugin.csi.alibabacloud.com
        # Must be the same as the PV name (metadata.name)
        volumeHandle: pv-oss  
        # Specify the secret object to obtain AccessKey information
        nodePublishSecretRef:
          name: oss-secret
          namespace: default
        volumeAttributes:
          # Replace with the actual bucket name
          bucket: "your-bucket-name"  
          url: "http://oss-cn-hangzhou-internal.aliyuncs.com"
          otherOpts: "-o umask=022 -o max_stat_cache_size=100000 -o allow_other"
          path: "/"
    ```
    
    **Parameter**
    
    **Description**
    
    `storage`
    
    Defines the capacity of the OSS volume. This value is used only to match the PV with a PVC.
    
    `accessModes`
    
    Configures the Access Mode. Supports `ReadOnlyMany` and `ReadWriteMany`.
    
    If you select `ReadOnlyMany`, ossfs mounts the OSS Bucket in read-only mode.
    
    `persistentVolumeReclaimPolicy`
    
    The PV reclaim policy. OSS volumes currently only support `Retain`, meaning the PV and the data in the OSS Bucket are retained after the PVC is deleted.
    
    `driver`
    
    Defines the driver type. Must be `ossplugin.csi.alibabacloud.com` when using the Alibaba Cloud OSS CSI plug-in.
    
    `nodePublishSecretRef`
    
    Specifies the Secret that provides the AccessKey information when mounting the PV.
    
    `volumeHandle`
    
    Must be the same as the PV name (`metadata.name`).
    
    `bucket`
    
    The OSS Bucket to be mounted.
    
    `url`
    
    The access [endpoint](/help/en/oss/user-guide/regions-and-endpoints) for the OSS bucket.
    
    -   Use an internal endpoint if your cluster nodes and the bucket are in the same region, or if a Virtual Private Cloud (VPC) connection is established.
        
    -   Use a public endpoint if the mount node and the bucket are in different regions.
        
    
    The following are common formats for different access endpoints:
    
    -   Internal: `http://oss-{{regionName}}-internal.aliyuncs.com` or `https://oss-{{regionName}}-internal.aliyuncs.com`.
        
        > The internal access endpoint format `vpc100-oss-{{regionName}}.aliyuncs.com` is deprecated. Switch to the new format as soon as possible.
        
    -   Public: `http://oss-{{regionName}}.aliyuncs.com` or `https://oss-{{regionName}}.aliyuncs.com`.
        
    
    `otherOpts`
    
    Enter custom parameters for the OSS volume in the format `-o *** -o ***`, such as `-o umask=022 -o max_stat_cache_size=100000 -o allow_other`.
    
    **View description**
    
    -   `umask`: Changes the read permissions for ossfs files.
        
        For example, `umask=022` changes the permissions of ossfs files to 755. This resolves permission issues for files uploaded through other methods, such as the SDK or the OSS console, which have a default permission of 640. We recommend configuring this parameter for read/write splitting or multi-user access.
        
    -   `max_stat_cache_size`: Sets the upper limit for metadata cache entries (for example, `100000`). It caches object metadata in memory to improve the performance of operations such as `ls` and `stat`.
        
        However, this cache cannot promptly detect file modifications made through the OSS console, SDK, or ossutil. This may cause the application to read inconsistent data. If you have strict data consistency requirements, set this parameter to `0` (to disable the cache) or lower the cache expiration time with the `stat_cache_expire` parameter. This will reduce read performance.
        
    -   `allow_other`: Allows users other than the mounting user to access files and directories in the mount target. This is suitable for multi-user shared environments where non-mounting users also need to access data.
        
    
    For more optional parameters, see [Options supported by ossfs](/help/en/oss/developer-reference/common-options#section-r8r-tkk-xvq) and [ossfs 1.0 configuration best practices](/help/en/oss/developer-reference/best-practices/).
    
    `path`
    
    > Requires CSI component version v1.14.8.32-c77e277b-aliyun or later.
    
    Specifies the mount path relative to the bucket's root directory. Defaults to `/`, which mounts the entire bucket.
    
    If the [ossfs version](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-release-notes#d19e9f3c13xgz) is earlier than 1.91, the specified `path` must already exist in the OSS Bucket. For details, see [New features in ossfs 1.91 and later](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-of-new-functions-and-performance-pressure-measurement-of-ossfs-version-1-91-and-above#5ff79b4cf5rb8).
    
    `sigVersion`
    
    The signature version for requests to the OSS server.
    
    -   `"v1"` (default): Uses OSS [Signature Version 1](/help/en/oss/developer-reference/ddd-signatures-to-urls).
        
    -   `"v4"` (recommended): Uses OSS [Signature Version 4](/help/en/oss/developer-reference/add-signatures-to-urls).
        
    
4.  Create the PV.
    
    ```
    kubectl create -f pv-oss-ram.yaml
    ```
    

## Console

Store the AccessKey obtained in [Step 1](#1f73d18448r9z) as a secret for the PV to use.

1.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Workloads** > **Deployments**.
    

Click **Create From YAML** and follow the on-screen instructions to create a secret.

```
apiVersion: v1
kind: Secret
metadata:
  name: oss-secret
  # Must be the same as the namespace where the application resides
  namespace: default
stringData:
  # Replace with the AccessKey ID you obtained
  akId: <your AccessKey ID>
  # Replace with the AccessKey secret you obtained
  akSecret: <your AccessKey Secret>
```

1.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Volumes** > **Persistent Volume Claims**.
    
2.  On the **PersistentVolumes** page, click **Create**. Set **Volume Type** to OSS, configure the parameters, and then submit them.
    
    The following table lists the key parameters.
    
    **Parameter**
    
    **Description**
    
    **Total Capacity**
    
    The capacity of the volume to create.
    
    **Access Mode**
    
    Configures the Access Mode. Supports `ReadOnlyMany` and `ReadWriteMany`.
    
    If you select `ReadOnlyMany`, ossfs mounts the OSS Bucket in read-only mode.
    
    **Access Credential**
    
    Configure the secret required to access OSS. This is the AccessKey ID and AccessKey secret obtained in [Step 1](#1f73d18448r9z).
    
    **Optional Parameters**
    
    Enter custom parameters for the OSS volume in the format `-o *** -o ***`, such as `-o umask=022 -o max_stat_cache_size=100000 -o allow_other`.
    
    **View description**
    
    -   `umask`: Changes the read permissions for ossfs files.
        
        For example, `umask=022` changes the permissions of ossfs files to 755. This resolves permission issues for files uploaded through other methods, such as the SDK or the OSS console, which have a default permission of 640. We recommend configuring this parameter for read/write splitting or multi-user access.
        
    -   `max_stat_cache_size`: Sets the upper limit for metadata cache entries (for example, `100000`). It caches object metadata in memory to improve the performance of operations such as `ls` and `stat`.
        
        However, this cache cannot promptly detect file modifications made through the OSS console, SDK, or ossutil. This may cause the application to read inconsistent data. If you have strict data consistency requirements, set this parameter to `0` (to disable the cache) or lower the cache expiration time with the `stat_cache_expire` parameter. This will reduce read performance.
        
    -   `allow_other`: Allows users other than the mounting user to access files and directories in the mount target. This is suitable for multi-user shared environments where non-mounting users also need to access data.
        
    
    For more optional parameters, see [Options supported by ossfs](/help/en/oss/developer-reference/common-options#section-r8r-tkk-xvq) and [ossfs 1.0 configuration best practices](/help/en/oss/developer-reference/best-practices/).
    
    **Bucket ID**
    
    The OSS Bucket to use.
    
    Only buckets that can be accessed with the configured AccessKey are displayed here.
    
    **OSS Path**
    
    > Requires CSI component version v1.14.8.32-c77e277b-aliyun or later.
    
    Specifies the mount path relative to the bucket's root directory. Defaults to `/`, which mounts the entire bucket.
    
    If the [ossfs version](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-release-notes#d19e9f3c13xgz) is earlier than 1.91, the specified `path` must already exist in the OSS Bucket. For details, see [New features in ossfs 1.91 and later](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-of-new-functions-and-performance-pressure-measurement-of-ossfs-version-1-91-and-above#5ff79b4cf5rb8).
    
    **Endpoint**
    
    The access [endpoint](/help/en/oss/user-guide/regions-and-endpoints) for the OSS bucket.
    
    -   Use an internal endpoint if your cluster nodes and the bucket are in the same region, or if a Virtual Private Cloud (VPC) connection is established.
        
    -   Use a public endpoint if the mount node and the bucket are in different regions.
        
    
    The following are common formats for different access endpoints:
    
    -   Internal: `http://oss-{{regionName}}-internal.aliyuncs.com` or `https://oss-{{regionName}}-internal.aliyuncs.com`.
        
        > The internal access endpoint format `vpc100-oss-{{regionName}}.aliyuncs.com` is deprecated. Switch to the new format as soon as possible.
        
    -   Public: `http://oss-{{regionName}}.aliyuncs.com` or `https://oss-{{regionName}}.aliyuncs.com`.
        
    
    > When you access over an internal network, the HTTP protocol is used by default. To use HTTPS, use the [kubectl](#fa850a0e000ad) method.
    

## **Step 3: Create a PVC**

Create a PersistentVolumeClaim (PVC) to request the persistent storage capacity needed by your application.

## kubectl

1.  Create a file named `pvc-oss.yaml`.
    
    ```
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      # PVC name
      name: pvc-oss
      namespace: default
    spec:
      # Configure the access mode. ReadOnlyMany indicates that ossfs will mount the OSS Bucket in read-only mode.
      accessModes:
        - ReadOnlyMany
      resources:
        requests:
          # Declare the storage capacity. This cannot be greater than the total volume capacity.
          storage: 10Gi
      selector:
        matchLabels:
          # Match the PV by its label
          alicloud-pvname: pv-oss
    ```
    
2.  Create the PVC.
    
    ```
    kubectl create -f pvc-oss.yaml
    ```
    
3.  Check the PVC status.
    
    ```
    kubectl get pvc pvc-oss
    ```
    
    The output shows that the PVC is `Bound` to the PV.
    
    ```
    NAME      STATUS   VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
    pvc-oss   Bound    pv-oss   10Gi       ROX                           <unset>                 6s
    ```
    

## Console

1.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Volumes** > **Persistent Volume Claims**.
    
2.  On the **PersistentVolumeClaims** page, click **Create**. Select **OSS** as the **PVC Type** and configure the parameters as prompted.
    
    The following table lists the key parameters.
    
    **Parameter**
    
    **Description**
    
    **Provisioning Mode**
    
    Select **Use Existing PersistentVolume**.
    
    > If you have not created a PV, you can set the **Provisioning Mode** to **Create PersistentVolume** and configure the PV parameters.
    
    **Total Capacity**
    
    The capacity of the PVC, which cannot exceed the PV's capacity.
    

## **Step 4: Create an application and mount the volume**

Reference the PVC in your application to complete the mount.

## kubectl

1.  Create a file named `oss-static.yaml`.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: oss-static
      labels:
        app: nginx
    spec:
      replicas: 2
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
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            ports:
            - containerPort: 80
            volumeMounts:
              # The mount path in the container
              - name: pvc-oss
                mountPath: "/data"
            # Configure a health check
            livenessProbe:
              exec:
                command:
                - ls
                - /data
              initialDelaySeconds: 30
              periodSeconds: 30
          volumes:
            - name: pvc-oss
              persistentVolumeClaim:
                # Reference the PVC you created
                claimName: pvc-oss
    ```
    
2.  Create the application.
    
    ```
    kubectl create -f oss-static.yaml
    ```
    
3.  Verify the mount result.
    
    -   Confirm that the Pods are in the `Running` state.
        
        ```
        kubectl get pod -l app=nginx
        ```
        
    -   Enter a Pod and inspect the mount point.
        
        ```
        kubectl exec -it <pod-name> -- ls /data
        ```
        
        The output should show the data from the OSS mount path.
        

## Console

1.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Workloads** > **Deployments**.
    
2.  In the upper-right corner of the **Deployments** page, click **Create from Image**.
    
3.  Configure the application parameters as prompted.
    
    The key parameters are described below. You can keep the default values for other parameters. For details, see [Create a stateless workload (Deployment)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment).
    
    **Configuration Page**
    
    **Parameter**
    
    **Description**
    
    **Basic Information**
    
    **Number Of Replicas**
    
    The number of replicas for the Deployment.
    
    **Container Configuration**
    
    **Image Name**
    
    The address of the image used to deploy the application, such as `anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6`.
    
    **Required Resources**
    
    The required vCPU and memory resources.
    
    **Volume**
    
    Click **Add Cloud Storage Claim** and configure the parameters.
    
    -   **Mount Source**: Select the PVC you created earlier.
        
    -   **Container Path**: Enter the path inside the container where the OSS volume should be mounted, such as `/data`.
        
    
    **Labels And Annotations**
    
    **Pod Label**
    
    For example, a label with the name `app` and value `nginx`.
    
4.  Check the application deployment status.
    
    On the **Deployments** page, click the application name. On the **Pods** tab, confirm that the Pods are running normally (Status is **Running**).
    

## Step 5: Verify shared and persistent storage

### **Verify shared storage**

Create a file in one Pod and then view it in another to verify the shared storage feature.

1.  View the Pod information and get the Pod names from the output.
    
    ```
    kubectl get pod -l app=nginx
    ```
    
2.  Create a file named `tmpfile` in one of the pods. For a Pod named `oss-static-66fbb85b67-d****`:
    
    -   `ReadWriteMany`: Create a `tmpfile` file in the `/data` path.
        
        ```
        kubectl exec oss-static-66fbb85b67-d**** -- touch /data/tmpfile
        ```
        
    -   `ReadOnlyMany`: Upload the `tmpfile` to the corresponding path in the OSS Bucket using the [OSS console](https://oss.console.alibabacloud.com/bucket) or by [uploading a file with cp](/help/en/oss/developer-reference/upload-objects-6#section-6on-dhb-w2g).
        
3.  View the file from the mount path of another Pod.
    
    For a Pod named `oss-static-66fbb85b67-l****` with a mount path of `/data`:
    
    ```
    kubectl exec oss-static-66fbb85b67-l**** -- ls /data | grep tmpfile
    ```
    
    The output `tmpfile` confirms that the Pods share data.
    
    ```
    tmpfile
    ```
    
    > If you do not see the expected output, confirm that your [CSI component](/help/en/ack/product-overview/csi-plugin) version is v1.20.7 or later.
    

### **Verify persistent storage**

Delete and recreate a Pod, then check if the file still exists in the new Pod to verify data persistence.

1.  Delete an application Pod to trigger a rebuild.
    
    ```
    kubectl delete pod oss-static-66fbb85b67-d****
    ```
    
2.  Check the Pods and wait for the new Pod to start and enter the `Running` state.
    
    ```
    kubectl get pod -l app=nginx
    ```
    
3.  Check for the file in the `/data` path.
    
    For a new Pod named `oss-static-66fbb85b67-z****` with a mount path of `/data`:
    
    ```
    kubectl exec oss-static-66fbb85b67-z**** -- ls /data | grep tmpfile
    ```
    
    The output `tmpfile` confirms that the file still exists, indicating that the data is persisted.
    
    ```
    tmpfile
    ```
    

## Important considerations

-   **Data integrity risks**
    
    -   **Concurrent write consistency risk**: To improve write stability, we recommend [upgrading the CSI components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb) to v1.28 or later. However, for single-file concurrent write scenarios, OSS's "overwrite upload" feature can still lead to data being overwritten. You must ensure data consistency at the application layer.
        
    -   **Data synchronization and accidental deletion risk**: When a volume is mounted, any file deletions or modifications in the mount path on the application Pod or host node synchronize directly with the source files in the OSS Bucket. To prevent accidental data loss, we recommend enabling [Versioning](/help/en/oss/user-guide/overview-78/) for your OSS Bucket.
        
-   **Application stability risks**
    
    -   **Out of Memory (OOM) risk**: When performing a `readdir` operation (like the `ls` command in a shell script) on a large number of files for the first time (e.g., over 100,000, depending on node memory), ossfs may consume a large amount of memory by loading all metadata at once. This can trigger an Out of Memory (OOM) error, killing the process and making the mount point unavailable.
        
        It is recommended to mount a subdirectory of the OSS Bucket or optimize the directory structure to mitigate this risk.
        
    -   **Increased mount time**: Configuring `securityContext.fsgroup` in your application causes kubelet to recursively change file permissions (`chmod`/`chown`) when mounting the volume. If there is a large number of files, this significantly increases mount time and can cause severe Pod startup delays.
        
        If you need to configure this parameter and reduce mount time, see [Increased mount time for OSS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#section-hj8-ax9-t7i).
        
    -   **Key invalidation risk (AccessKey authentication)**: If the AccessKey becomes invalid or its permissions change, the application immediately loses access.
        
        To restore access, you must update the credentials in the Secret and restart the application Pod to force a remount, which will cause a service interruption. Perform this operation during a maintenance window. For details, see [Solutions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#54bf352b2bxja).
        
-   **Cost risks**
    
    -   **Part costs**: `ossfs` uploads files larger than 10 MB in parts. If an upload is unexpectedly interrupted (e.g., due to an application restart), you must [manually delete the parts](/help/en/oss/user-guide/delete-parts#concept-r3h-c1y-5db) or [delete them using lifecycle rules](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time#concept-y2g-szy-5db). This prevents incomplete parts from occupying storage space and incurring costs.
        

## Related documentation

-   You can manage OSS volumes through Container Network File System (CNFS) to improve performance and QoS control. For details, see [Manage the lifecycle of OSS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-the-lifecycle-of-oss-buckets).
    
-   To protect sensitive data at rest in OSS, we recommend enabling Server-Side Encryption. For details, see [Encrypt ossfs 1.0 volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/encrypt-an-oss-volume).
    
-   For frequently asked questions about ossfs and OSS, see [ossfs 1.0 (default)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs1-0/) and [ossfs 1.0 volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1).
    
-   Enable [container storage monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-plugin-to-monitor-storage-resources-at-the-node-side) and configure alerts to promptly detect volume anomalies or performance bottlenecks.
    
-   ossfs 1.0 provides more reliable data consistency for random and concurrent write scenarios than [ossfs 2.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-2-0/). However, ossfs 2.0 offers better performance for sequential read and write scenarios.
