This topic shows you how to use ossfs to mount an Object Storage Service (OSS) bucket as a local file system in Linux.

## Prerequisites

You have [installed](/help/en/oss/developer-reference/install-ossfs-1-0) and [configured](/help/en/oss/developer-reference/configurations-for-ossfs-1-0#b432e9050aya9) ossfs 1.0.

## **Mount command format**

-   **Command format**: `ossfs bucket_name /tmp/ossfs -o url=http://oss-cn-hangzhou.aliyuncs.com -o sigv4 -o region=cn-hangzhou`
    
-   **Parameter description**
    
    -   `ossfs`: The ossfs command.
        
    -   `bucket_name`: The name of the bucket to mount.
        
    -   `/tmp/ossfs`: The local directory where the bucket will be mounted (the mount point).
        
    -   `-o`: A flag that precedes a mount option.
        
    -   `url=http://oss-cn-hangzhou.aliyuncs.com`: The `url` mount option specifies the endpoint of the target bucket. The option value format is `http://Endpoint`.
        
        To view the endpoint of the target bucket, go to the [Bucket List](https://oss.console.alibabacloud.com/bucket) page, select the target bucket, and then click **Overview** in the navigation pane on the left. View the region of the target bucket in the **Access Points** section on the Overview page. In this example, a bucket in the China (Hangzhou) region is used.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102882471/p925075.png)
        
    -   `sigv4`: Enables signature version 4 for requests. ossfs uses signature version 1 by default.
        
    -   `region=cn-hangzhou`: The region identifier for OSS bucket requests. Add `-oregion=<region_id>` when mounting. The default value is empty. When using V4 signatures, you must add this option as the identifier of the region where the request is initiated.
        

## **Basic mounting**

### **Mount using configuration files**

1.  Create a mount directory.
    
    Run the following command to create custom empty directories `/tmp/ossfs-1` and `/tmp/ossfs-2` as mount directories for the target bucket.
    
    ```
    mkdir /tmp/ossfs-1 /tmp/ossfs-2
    ```
    
2.  Run the following commands.
    
    The following commands mount `bucket-test-1` and `bucket-test-2` to the `/tmp/ossfs-1` and `/tmp/ossfs-2` directories, respectively.
    
    ```
    ossfs bucket-test-1 /tmp/ossfs-1/ -o url=http://oss-cn-hangzhou.aliyuncs.com -o sigv4 -o region=cn-hangzhou
    ossfs bucket-test-2 /tmp/ossfs-2/ -o url=http://oss-cn-hangzhou.aliyuncs.com -o sigv4 -o region=cn-hangzhou
    ```
    
3.  The result should look like this:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6870879471/p967557.png)
    

### **Mount using an ECS RAM role**

1.  Create a mount directory.
    
    Run the following command to create an empty directory `/tmp/ossfs` as the mount directory for the target bucket.
    
    ```
    mkdir /tmp/ossfs
    ```
    
2.  Run the mount command.
    
    **Note**
    
    When using the instance metadata URL to mount ossfs, only **normal mode** access is supported. For information about metadata access modes, see [Metadata access modes](/help/en/ecs/user-guide/view-instance-metadata/#e5723dd15c22l).
    
    Run the following command to mount a bucket named `bucket1` to the local `/tmp/ossfs` directory.
    
    Note that when mounting with an ECS RAM role, specify the instance metadata URL using the `-o ram_role` parameter. `100.100.100.200` is the default IP address of the Alibaba Cloud ECS [instance metadata](/help/en/ecs/user-guide/view-instance-metadata/) service and does not need to be changed. `EcsRamRoleOssTest` is the name of the RAM role attached to your ECS instance. Replace it with your actual role name.
    
    ```
    ossfs bucket1 /tmp/ossfs -o url=http://oss-cn-hangzhou.aliyuncs.com -o ram_role=http://100.100.100.200/latest/meta-data/ram/security-credentials/EcsRamRoleOssTest -o sigv4 -o region=cn-hangzhou
    ```
    
3.  The result should look like this:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6870879471/p967571.png)
    

## **Scenario-based mounting**

Mount a specific sub-directory or use various [mount options](/help/en/oss/developer-reference/common-options#title-vwo-030-jef) for different scenarios. Make sure that the local directory is empty before you run the mount command.

### **Mount a specific directory**

Run the following command to mount the `folder` directory in `bucket-ossfs-test` to the local `/tmp/ossfs-folder` directory.

```
ossfs bucket-ossfs-test:/folder /tmp/ossfs-folder -o url=http://oss-cn-hangzhou.aliyuncs.com -o sigv4 -o region=cn-hangzhou
```

### **Mount using a specified configuration file**

-   **Mount option**: The [passwd\_file](/help/en/oss/developer-reference/common-options#55f28f5e93whr) mount option is used to specify the path of a non-default ossfs 1.0 configuration file during mounting. The permissions of the specified configuration file must be set to 600.
    
-   **Mount example**
    
    Run the following command to mount `bucket-test-3` configured in the specified configuration file to the local `/tmp/ossfs-3` directory.
    
    ```
    ossfs bucket-test-3 /tmp/ossfs-3 -o url=http://oss-cn-hangzhou.aliyuncs.com -o passwd_file=/etc/passwd-ossfs-3 -o sigv4 -o region=cn-hangzhou
    ```
    

### **Enable debug logs when mounting**

-   **Mount option**: The [dbglevel](/help/en/oss/developer-reference/common-options#55f28f5e93whr) option sets the log level. Supported levels are `critical`, `error`, `warn`, `info`, and `debug`. The default value is `critical`. Default log retention path: CentOS systems save logs in /var/log/messages, while Ubuntu systems save logs in /var/log/syslog. You can also specify the target log file path using the `logfile` mount option.
    
-   **Mount example 1**
    
    Run the following command to mount `bucket-ossfs-test-1` to the local `/tmp/ossfs-1` directory, enable `libfuse` debug logs using `-d`, and set the log information level to `debug` using the `dbglevel` mount option.
    
    ```
    ossfs bucket-ossfs-test-1 /tmp/ossfs-1 -d -o dbglevel=debug -o sigv4 -o region=cn-hangzhou
    ```
    
-   **Mount example 2**
    
    Run the following command to mount `bucket-ossfs-test-2` to the local `/tmp/ossfs-2` directory, set the log information level to `debug`, enable `libfuse` debug logs, and output the log information to the foreground terminal using the `-f` mount option.
    
    ```
    ossfs bucket-ossfs-test-2 /tmp/ossfs-2 -d -o dbglevel=debug -f -o sigv4 -o region=cn-hangzhou
    ```
    

### **Configure access permissions when mounting**

By default, the directory to which ossfs mounts the bucket can be accessed only by the owner of the mount point. The user who runs the mount command becomes the owner of the mount point. To modify the default permission configurations and allow other users or user groups to access the mount point, use the following options when you run ossfs:

**Mount option**

**Description**

allow\_other

Grants other users access to the mount point directory itself. Permissions for files within the directory must be managed separately. The permissions for files in the directory need to be set separately. Use the `chmod` command to modify permissions for individual files. To set uniform permissions for all files, configure the `umask` option.

uid

Specifies the user ID (UID) of the owner of the directory.

gid

Specifies the group ID (GID) of the owner of the directory.

umask

Specifies the permission mask of files and directories on the mount point. For example, to set the permissions of files on the mount point to 770, add \-o umask=007. To set the permissions of files on the mount point to 700, add \-o umask=077.

-   **Mount example 1**
    
    Run the following command to mount `bucket_name` to the local `mount_point` directory, and use the `allow_other` mount option to set the mount directory permissions to 777, allowing all users to access it.
    
    ```
    ossfs bucket_name mount_point -o url=endpoint -o allow_other -o sigv4 -o region=cn-hangzhou
    ```
    
-   **Mount example 2**
    
    Run the following command to mount `bucket_name` to the local `mount_point` directory, and use the `umask` mount option to set the mount directory and file permissions to 770, allowing only users in the same group to access.
    
    ```
    ossfs bucket_name mount_point -o url=endpoint -o umask=007 -o sigv4 -o region=cn-hangzhou
    ```
    
-   **Mount example 3**
    
    1.  Run the following command to obtain the UID, GID, and groups of a specified user. In this example, the www user is used.
        
        ```
        id www
        ```
        
        The command output is shown in the following figure.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8284745471/p946008.png)
        
    2.  Run the following command to mount `bucket_name` to the local `mount_point` directory, and use the `uid` and `gid` mount options to specify the user and group, allowing only users in the same group to access with permissions set to 770. The `uid` and `gid` information uses 1000 as an example. Replace them with the target user's `uid` and `gid` information before executing the mount command.
        
        ```
        ossfs bucket_name mount_point -o url=endpoint -o allow_other -o uid=1000 -o gid=1000 -o umask=007 -o sigv4 -o region=cn-hangzhou
        ```
        

## **Useful tips**

### **Enable automatic mounting upon startup**

After you manually mount a bucket, the bucket is not automatically remounted when the system restarts. To automatically mount the bucket on system startup, follow these steps. Before you enable automatic mounting upon startup, make sure that the preceding manual mount operation is successful. This prevents startup failures of the ECS instance. In the following example, automatic mounting upon startup is enabled after you use the AccessKey pair of the Alibaba Cloud account to mount a bucket to a local file system.

1.  Add your bucket name and credentials (AccessKey ID and AccessKey secret) to `/etc/passwd-ossfs` and set its permissions to 640.
    
    For configuration steps, see [Configure ossfs 1.0](/help/en/oss/developer-reference/configurations-for-ossfs-1-0#7a8419508f1c9).
    
2.  Enable automatic mounting upon startup.
    
    **Note**
    
    The following examples show how to enable automatic mounting upon startup for common distributions and versions. For other distributions and versions, refer to the relevant documents.
    
    ### **Automatic mounting through fstab for Ubuntu 14.04 or later and CentOS 6.5 or later**
    
    1.  Add the following command to /etc/fstab:
        
        ```
        ossfs#bucket_name mount_point fuse _netdev,url=url,allow_other 0 0
        ```
        
        Parameters:
        
        **Parameter**
        
        **Description**
        
        bucket\_name
        
        The name of the bucket to be mounted. Replace `bucket_name` with your actual OSS bucket name.
        
        mount\_point
        
        The local mount directory. Replace `mount_point` with your actual local mount directory path.
        
        url=url
        
        The endpoint of the region in which the bucket is located.
        
        0 0
        
        The options for the file system.
        
    2.  Save the /etc/fstab file. Run the `mount -a -t fuse` command. If no error is reported, the settings are correct.
        
    3.  After you complete the preceding steps, automatic mounting upon startup is enabled in Ubuntu 14.04. For CentOS 6.5, you must also run the following command:
        
        ```
        chkconfig netfs on
        ```
        
    
    ### **Automatic mounting through startup scripts for CentOS 7.0 or later**
    
    1.  Create a file named ossfs in the /etc/init.d/ directory and copy the following content to the new file. Replace the placeholder values (`your_bucket`, `your_mountpoint`, `your_url`) with your actual configuration.
        
        ```
        #! /bin/bash
        #
        # ossfs      Automount Aliyun OSS Bucket in the specified direcotry.
        #
        # chkconfig: 2345 90 10
        # description: Activates/Deactivates ossfs configured to start at boot time.
        
        ossfs your_bucket your_mountpoint -ourl=your_url -oallow_other
        ```
        
    2.  Grant executable permissions to the newly created ossfs script:
        
        ```
        chmod a+x /etc/init.d/ossfs
        ```
        
        After the preceding command is run, execute the script. If the content of the script is correct, the OSS bucket is mounted to the specified directory.
        
    3.  Set the ossfs startup script to start automatically with other services:
        
        ```
        chkconfig ossfs on
        ```
        
    4.  After you complete the preceding operations, automatic mount on startup is enabled for ossfs.
        
    
    **Important**
    
    `chkconfig` does not automatically restart ossfs if it exits abnormally. It only ensures that ossfs starts automatically when the system boots.
    

## **Unmount a bucket**

To unmount a bucket, use the umount command with the mount point path. For example, unmount the file system mounted to the `/tmp/ossfs` path.

```
umount /tmp/ossfs
```

## **References**

-   To mount an OSS bucket in Windows, use [Cloud Storage Gateway (CSG)](/help/en/csg/product-overview/what-is-csg#title-hhe-8bk-2nf). For more information, see [Use file gateways in the Alibaba Cloud Management Console](/help/en/csg/getting-started/manage-a-file-gateway-in-the-csg-console#title-960-ntv-ptz) and [Access SMB shared directories](/help/en/csg/user-guide/access-an-smb-share#title-1xu-68i-n2m).
    
-   Traffic is free when you use an ECS RAM role to mount a bucket via its internal endpoint. For more information, see [Traffic fees](/help/en/oss/traffic-fees).
    
-   To mount a bucket in a different region from your ECS instance, use a public endpoint or [configure cross-region access over the internal network](/help/en/cen/use-cases/use-enterprise-edition-transit-routers-to-enable-ecs-instances-to-access-oss-across-regions-over-vpc-connections#section-ql2-56s-26f).
    
-   If you want to build an IIS website through Cloud Storage Gateway and use OSS as data storage, see [How to build an IIS website using Alibaba Cloud Storage Gateway](/help/en/csg/use-cases/build-an-iis-website-based-on-csg).
    
-   To mount OSS on a Windows operating system, see [Rclone](/help/en/oss/developer-reference/mount-oss-buckets-to-local-file-systems-by-using-amazon-s3-protocols#yI0Ux).
    
-   For more information about mounting, permissions, and other related issues, see [FAQ](/help/en/oss/developer-reference/ossfs-faq).
