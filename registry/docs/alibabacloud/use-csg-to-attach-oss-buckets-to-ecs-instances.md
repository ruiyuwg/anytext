To allow multiple users to access data in an Object Storage Service (OSS) bucket in different locations by using different devices as they access local files, you can use Cloud Storage Gateway (CSG) to attach the OSS bucket to an Elastic Compute Service (ECS) instance and then map the bucket to a local directory. This way, you can manage OSS objects in the same manner as you manage local files and share objects.

## Prerequisites

-   CSG is activated and is granted access permissions on OSS, ECS, and Virtual Private Cloud (VPC). To activate CSG, go to the [CSG console](https://sgwnew.console.alibabacloud.com/).
    
-   Cloud Storage Gateway Service is supported only in [specific regions](/help/en/csg/product-overview/supported-regions).
    
-   A VPC and a vSwitch are created in the same region in which the bucket that you want to attach is located. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575) and [Create and manage vSwitches](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
    
-   An ECS instance is created in the same region in which the bucket that you want to attach is located. For more information about how to create an ECS instance, see [Create and manage an ECS instance by using the ECS console (express version)](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console#task-2480939).
    

## Usage notes

-   We recommend that you do not upload Archive, Cold Archive, and Deep Cold Archive objects to buckets after you attach the buckets to ECS instances by using CSG.
    
    When you upload objects to buckets that you attached to ECS instances by using CSG, CSG calls the CopyObject operation to modify the object metadata to configure the last modified time of the objects. Archive, Cold Archive, or Deep Cold Archive objects need to be restored during the CopyObject operation, which is time-consuming and affects the upload efficiency. In addition, objects may fail to be uploaded. If you do not need to modify an object for a long period of time after it is uploaded, you can set its storage class to Standard or infrequent access (IA), upload the object, and then change its storage class to Archive, Cold Archive, or Deep Cold Archive by configuring lifecycle rules. For more information, see [Lifecycle rules based on the last modified time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time).
    
-   When you access OSS by using CSG, you are charged based on the specifications, cache type, and public bandwidth of the gateway. You are also charged storage fees and API operation calling fees. For more information, see [Billing](/help/en/csg/product-overview/billing-1).
    

## Step 1: Configure CSG

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the desired bucket.
    
3.  In the left-side navigation tree, choose **Object Management** > **Attach OSS Bucket to ECS**. On the page that appears, click **Configure Gateway**.
    
4.  In the **Basic Information** step of the Create Gateway dialog box, configure the following parameters and click **Next**.
    
    **Parameter**
    
    **Description**
    
    **Edition**
    
    Select the specification of the gateway based on the capacity of the bucket that you want to attach and the bandwidth required for data transmission. For more information, see [File gateways](/help/en/csg/product-overview/specifications#section-os5-0i2-tpi).
    
    **VPC**
    
    Select the VPC in which the ECS instance to which you want to attach the bucket resides.
    
    **VSwitch**
    
    Select the vSwitch in the VPC where the ECS instance to which the bucket you want to attach resides.
    
5.  In the **Config Protocol** step, configure the following parameters and click **Next**.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    Specify a name for the gateway. The name must be no more than 60 characters in length, and can contain letters, digits, underscores (\_), hyphens (-), and periods (.). It must start with a letter.
    
    **Subdirectory**
    
    If you want to use CSG to attach a subdirectory of a bucket as a file system to an ECS instance, select Subdirectory next to **Bucket Name** and enter the subdirectory name.
    
    **Protocol**
    
    Select the protocol used by the file gateway.
    
    -   **NFS**: applicable to Linux systems.
        
    -   **SMB**: applicable to Windows systems.
        
    
    **Share Name**
    
    Specify the name of the network share used to access the attached bucket.
    
    The network share name can contain only letters, digits, `periods (.), underscores (_), and hyphens (-)`. The name must start with a letter. The name can be up to 32 characters in length.
    
    **User Mapping**
    
    Specify the user that is used to access the attached bucket from an NFS client. This parameter can be configured only when **Protocol** is set to **NFS**. Valid values:
    
    -   none: The NFS client user is not mapped to the nobody user on the NFS server.
        
    -   root\_squash: The NFS client that uses the root identity is mapped to the nobody user on the NFS server.
        
    -   all\_squash: The NFS client is mapped to the nobody user on the NFS server, regardless of the identity that the client uses.
        
    -   all\_anonymous: The NFS client is mapped to the anonymous user on the NFS server, regardless of the identity that the client uses.
        
    
    **Note**
    
    After the bucket is attached to the ECS instance by using CSG, all users have read, write, and execute permissions on objects in the bucket. You can configure **User Mapping** in one of the following ways based on your requirements:
    
    -   If you want to manage access permissions on objects in the attached bucket, set **User Mapping** to **none** and then manage the access permissions as the root user. For more information, see [Step 3: (Optional) Configure access permissions on objects](#section-tp2-ibu-pb7).
        
    -   If you do not need to manage access permissions on objects in the attached bucket, set User Mapping to a value except none.
        
    
    **Reverse Sync**
    
    Synchronize metadata from the OSS bucket to the gateway's cache disk to maintain consistency between the OSS bucket and gateway cache.
    
    Configure the **Reverse Sync Interval** with a minimum value of 15 seconds and maximum value of 36,000 seconds. We recommend that you set the interval above 3,600 seconds.
    
    **Important**
    
    If you enable Reverse Sync, all objects in the attached bucket are scanned, and you are charged API operation calling fees. For more information, see [API operation calling fees](/help/en/oss/api-operation-calling-fees#concept-2558398).
    
    **Cache Disk Type**
    
    Select the type of the cache disks. Valid values: Ultra Disk, Standard SSD, and ESSD Cloud Disk. The supported cache disk types may vary based on the region where the ECS instance resides. Select a cache disk type based on your business requirements.
    
    **Cache Capacity**
    
    Select the capacity of the data cache. Unit: GB. Valid values: \[100, 32768\].
    
    To ensure data access performance, CSG reserves storage space in the ECS instance equivalent to the size specified in this parameter to cache hot data.
    
6.  In the **Billing Information** step, select **Cloud Storage Gateway Service Agreement** and "The OSS service is independent of the CSG service. If you delete the OSS bucket, the gateway associated with the bucket will not be released. If you no longer use the gateway, go to CSG Console to release the gateway.", and then click **Finish**.
    
    **Note**
    
    By default, a pay-as-you-go gateway is created. You can change the billing method of the gateway to subscription, which is more cost-effective. For more information, see [Switch the billing method from pay-as-you-go to subscription](/help/en/csg/switch-the-billing-method-from-pay-as-you-go-to-subscription#concept-127484-zh).
    

## Step 2: Attach and access the bucket

After you purchase the gateway, you can attach the bucket to the ECS instance. In the following steps, a file gateway that uses the NFS protocol is used to attach the bucket. To use a gateway that uses the SMB protocol to attach the bucket, see [Access an SMB share](/help/en/csg/user-guide/access-an-smb-share#concept-108285-zh).

1.  In the left-side navigation tree, choose **Object Management** > **Attach OSS Bucket to ECS**.
    
2.  In the gateway list, check the value in the **Server Mount Target** column that corresponds to the gateway that you want to use.
    
3.  Log on to the ECS instance to which you want to attach the bucket. The ECS instance runs the Linux system and is in the same region as the gateway. For more information, see [Connect to an instance by using VNC](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc#concept-sdk-1jx-wdb).
    
4.  Run an NFS command to attach the bucket to the ECS instance.
    
    For example, if the value of Server Mount Target is `172.16.0.2:/test` and the local path to which the bucket is attached is `/mnt/nfs/`, you can run the following command to attach the bucket to the ECS instance:
    
    ```
    mount.nfs 172.16.0.2:/test /mnt/nfs/
    ```
    
5.  Access the attached bucket.
    
    The following examples show how to use an NFS command to access the attached bucket: Examples:
    
    -   List the objects in the root directory of the mounted bucket:
        
        ```
        ls mnt/nfs/
        ```
        
    -   Download an object named example.txt from the root directory of the attached bucket to the local root directory:
        
        ```
        cp mnt/nfs/example.txt  example.txt
        ```
        
    

## Step 3: (Optional) Configure access permissions on objects

1.  Log on to the NFS client as the root user.
    
2.  Configure access permissions on objects in the attached bucket.
    
    For example, you can perform the following steps to grant read-only permissions on an object named example.txt to the nfsnobody user. By default, the UID and GID of the nfsnobody user are both `429496****`.
    
    1.  Change the user group associated with example.txt to the nfsnobody user group:
        
        ```
        chgrp -R 429496**** example.txt
        ```
        
    2.  Grant read-only permissions on example.txt to the nfsnobody user group:
        
        ```
        chmod  444 example.txt
        ```
        
    
    **Note**
    
    After you configure access permissions on objects in the attached bucket, we recommend that you change the value of **User Mapping** to **root\_squash**, **all\_squash**, or **all\_anomnymous** to limit the permissions of the root user.
    
3.  **Optional:** Modify the value of User Mapping.
    
    1.  Log on to the .
        
    2.  In the left-side navigation pane, click **Gateways**. Then, click the gateway that is used to attach the bucket to the ECS instance.
        
    3.  Click **Settings** in the **Actions** column of the gateway.
        
    4.  In the **NFS Share Settings** dialog box, modify the value of **User Mapping** based on your requirements.
        
    5.  Click **OK**.
        

## FAQ

### What is the difference between attaching OSS by using CSG and attaching OSS by using ossfs?

The performance of attaching OSS by using CSG is better than attaching OSS by using ossfs. ossfs is not suitable for high concurrency and the upload and download of large objects. ossfs is suitable for managing small objects. For more information, see [ossfs](/help/en/oss/developer-reference/ossfs#concept-2407525).

### **Is a gateway released if I delete buckets attached by using the gateway?**

No, the gateway is not released. If you no longer need to use the gateway, go to the CSG console and delete it in a timely manner to prevent unnecessary fees.
