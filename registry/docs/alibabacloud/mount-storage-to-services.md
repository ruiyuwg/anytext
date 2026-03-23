EAS supports multiple storage mounting methods to attach model files, code files, or configuration files to service instances. This enables data sharing among multiple instances and direct file modification without rebuilding images, reducing development and O&M costs.

## **Mount different types of storage**

-   For unstructured data that is primarily read, such as models, images, and videos, use **OSS**.
    
-   If you frequently read and write small files, or if multiple service instances need to share a read/write directory, use a **General-purpose NAS file system**.
    
-   For high-performance computing (HPC) or AI training that requires extremely low latency and high throughput, use an **Extreme NAS file system** or **CPFS**.
    
-   For large-scale parallel computing or AI training frameworks, use **CPFS**.
    

**Note**

-   CPFS file systems can only be mounted when deploying EAS services using Lingjun resource quotas.
    
-   NAS supports mounting only from internal network addresses in the same region. Establish a direct network connection to the vSwitch where the NAS file system is located. For more information, see [Network access configuration](/help/en/pai/user-guide/configure-network-connectivity#multiTask1215).
    

### **OSS mount**

This is the most common storage mount method. The following figure shows the console configuration interface.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3829885571/p1000307.png)

The following code provides a JSON configuration example:

```
{
  "storage": [
        {
            "oss": {
                "path": "oss://bucket/path/",
                "readOnly": false
            },
            "mount_path": "/mnt/data/"
        }
    ]
}
```

Parameters:

**Parameter (Console)**

**Parameter (JSON)**

**Description**

**Uri**

**oss.path**

Path of the source OSS bucket. For more information about creating a bucket, see [Getting Started](/help/en/oss/user-guide/console-quick-start).

**Mount Path**

**mount\_path**

Destination path in the service instance to which storage is mounted. Use this path to read source files or data. Example: `/mnt/data`.

**Read-only**

**oss.readOnly**

Specifies whether to mount the storage in read-only mode.

### **NAS mount**

Mount a NAS file system, including a General-purpose NAS file system, an Extreme NAS file system, or CPFS, using an internal network address within the same region. Also establish a direct network connection to the vSwitch where the NAS file system is located. For more information, see [Network access configuration](/help/en/pai/user-guide/configure-network-connectivity#multiTask1215).

The following figure shows the console configuration interface.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7449638471/p947192.png)

The following code provides a JSON configuration example:

```
{
  "storage": [
        {
            "nfs": {
                "path": "/",
                "server": "06ba74****-a****.cn-hangzhou.nas.aliyuncs.com",
                "readOnly": false
            },
            "mount_path": "/mnt/data/"
        }
    ]
}
```

Parameters:

**Parameter (Console)**

**Parameter (JSON)**

**Description**

**Storage Permission Resource Group**

**nfs.resourceGroup**

Resource group to which the file system belongs. This parameter filters file systems by resource group. For more information about resource groups, see [Best practices for resource group design](/help/en/resource-management/resource-group/use-cases/best-practices-for-designing-resource-groups).

If **All Storage Permission Resource Groups** is selected, this parameter is not required in the JSON file.

**Select File System**

None

ID of the created NAS file system. Log on to the [NAS console](https://nas.console.alibabacloud.com/) to view the NAS file system ID in the corresponding region.

**File System Mount Target**

**nfs.server**

Address of the NAS mount target. EAS accesses the NAS file system through the mount target. For more information about viewing the address, see [View mount target addresses](/help/en/nas/user-guide/manage-mount-targets#ec9222e3a2aq9).

**Note**

After selecting a mount target in the console, the system automatically selects the virtual private cloud (VPC) that is associated with the mount target.

**File System Path**

**nfs.path**

Source path in the NAS file system to mount. This is the path within the NAS instance. Example: `/`. Ensure the path exists to avoid errors.

**Mount Path**

**mount\_path**

Destination path in the service instance to which storage is mounted. Use this path to read source files or data. Example: `/mnt/data`.

**Read-only**

**nfs.readOnly**

Specifies whether to mount the storage in read-only mode.

## **Mount a custom dataset**

Create a PAI [dataset](/help/en/pai/user-guide/create-and-manage-datasets) from data or configuration files and register it as a public AI Asset. This allows easy mounting and referencing of the dataset when deploying services.

**Note**

Only custom datasets that use Object Storage Service (OSS) can be mounted.

The following figure shows the console configuration interface.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7449638471/p947205.png)

The following code provides a JSON configuration example:

```
"storage": [
        {
            "dataset": {
                "id": "d-pcsah1t86bm8******",
                "version": "v1",
                "read_only": false
            },
            "mount_path": "/mnt/data/"
        }
    ]
```

Parameters:

**Parameter (Console)**

**Parameter (JSON)**

**Description**

**Custom Dataset**

**dataset.id**

Registered custom dataset of the Object Storage Service (OSS) type. For more information about creating a custom dataset and obtaining its ID, see [Create and manage datasets](/help/en/pai/user-guide/create-and-manage-datasets).

**Version**

**version**

Version of the dataset. Example: v1.

**Read-only**

**dataset.read\_only**

Specifies whether to mount the dataset in read-only mode.

**Mount Path**

**mount\_path**

Destination path in the service instance to which the dataset is mounted. Example: `/mnt/data/`.

## **Mount code**

-   **Git mount**: Mounts code from a Git repository to a service instance in read-only mode. The code is pulled when the instance starts. If code changes, restart the service instance for changes to take effect.
    
-   **Code configuration**: Create a PAI [code set](/help/en/pai/user-guide/code-builds) from a Git repository and register it as a public AI Asset. This allows easy mounting and referencing of the code set when deploying a service.
    

### **Git mount**

The following figure shows the console configuration interface.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7449638471/p947200.png)

The following code provides a JSON configuration example:

```
{
  "storage": [
        {
            "git": {
                "repo": "https://codeup.aliyun.com/xxx/eas/aitest.git",
                "branch": "master",
                "commit": "xxx",
                "username": "username",
                "password": "password or access token"
            },
            "mount_path": "/mnt/data/"
        }
    ]
}
```

Parameters:

**Parameter (Console)**

**Parameter (JSON)**

**Description**

**Git URL**

**git.repo**

HTTPS address of the Git repository to mount. The Git protocol is not supported.

**Branch**

**git.branch**

Branch of the Git repository to pull. The default value is master.

**Commit**

**git.commit**

Commit ID of the Git repository to pull.

**Username**

**git.username**

Username used to log on to the private Git repository.

**Access Token**

**git.password**

Password or access token used to log on to the private Git repository. For more information about obtaining a token, see [Appendix: Obtain a token for your GitHub account](/help/en/pai/user-guide/code-builds#title-mym-ylk-0w7).

**Mount Path**

**mount\_path**

Destination path in the service instance to which the repository is mounted. Example: `/mnt/data`.

### **Code configuration**

This method mounts the code set to a service instance in read-only mode.

The following figure shows the console configuration interface.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7449638471/p947202.png)

The following code provides a JSON configuration example:

```
"storage": [
        {
            "code": {
                "id": "code-4d3b42a1152****"
            },
            "mount_path": "/mnt/data/"
        }
    ]
```

Parameters:

**Parameter (Console)**

**Parameter (JSON)**

**Description**

**Code Configuration**

**code.id**

Registered code set. For more information about creating a code set and obtaining its ID, see [Code configuration](/help/en/pai/user-guide/code-builds#section-yvk-zwb-9qp).

**Mount Path**

**mount\_path**

Destination path in the service instance to which the code set is mounted. Example: `/data_image`.

## **Mount a PAI model**

Register the models that a service requires as public PAI AI Assets to centrally manage them in PAI. For more information, see [Register and manage models](/help/en/pai/user-guide/register-and-manage-models#task-2238482). Mount the models to service instances in read-only mode during service deployment.

The following figure shows the console configuration interface.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7449638471/p947197.png)

Parameters:

**Parameter (Console)**

**Description**

**PAI Model**

Registered PAI model. For more information about creating a model, see [Register and manage models](/help/en/pai/user-guide/register-and-manage-models).

**Mount Path**

Destination path in the service instance to which the model is mounted. Example: `/mnt/data/`.

## **Other mounts**

-   **Image mount**: This method does not mount a directory from a Docker image directly to a service instance. Instead, it first copies files from a specified directory in the source image to a local shared volume and then mounts the local shared volume at runtime. If the directory to mount contains a large amount of data, this process can consume significant local storage and increase instance startup time. Use this feature only when necessary.
    
-   **EmptyDir mount**: Use this method to allow an instance to read from and write to a local disk directory at runtime. This ensures that written content is not lost if the instance unexpectedly restarts.
    

### **Image mount**

-   Configuration method
    
    ```
    {
        "storage": [
            {
                "image": {
                    "image": "registry-vpc.cn-xxxx.aliyuncs.com/eas/image_name:v1",
                    "path": "/path/to/mount/"
                },
                "mount_path": "/data_image"
            }
        ]
    }
    ```
    
    **Note**
    
    Images can be mounted from an internal network address in the same region. If the image is private, use the dockerAuth parameter to specify authentication information for the image repository. For more information about using the dockerAuth parameter, see [Use a custom image](/help/en/pai/user-guide/deploy-a-model-service-by-using-a-custom-image#task-2086310).
    
-   Parameters
    
    **Parameter (JSON)**
    
    **Description**
    
    **image.image**
    
    Internal network address of the image repository to mount.
    
    **image.path**
    
    Path in the image to mount to the service instance.
    
    **mount\_path**
    
    Destination path in the service instance to which the image is mounted. Example: `/data_image`.
    

### **EmptyDir mount**

-   Configuration method
    
    ```
    {
        "name": "service_name",
        "storage": [
            {
                "empty_dir": {},
                "mount_path": "/data_image"
            }
        ]
    }
    ```
    
-   Parameters
    
    **Parameter (JSON)**
    
    **Description**
    
    **mount\_path**
    
    Destination path in the service instance.
    
    **empty\_dir**
    
    Indicates an EmptyDir type with an empty map value. This stores data on the local disk. Other properties cannot be configured.
    

#### **Configure shared memory**

If high storage performance is required, use the following configuration to enable shared memory.

```
{
    "storage": [
        {
            "empty_dir": {
              "medium": "memory",
              "size_limit": 20
            },
            "mount_path": "/dev/shm"
        }
    ]
}
```

Where:

**Parameter (JSON)**

**Description**

**medium**

Set this parameter to **memory**.

**mount\_path**

Set this parameter to `/dev/shm`.

**size\_limit**

Upper limit of the memory. Unit: GB.

## **Complete JSON configuration example**

The following code provides a complete configuration example. For more information, see [Deploy services using JSON](/help/en/pai/user-guide/parameters-of-model-services).

```
{
    "name": "service_name",
    "model_path": "http://path/to/model",
    "processor": "pmml",
    "storage": [
        {
            "oss": {
                "path": "oss://bucket/path/",
                "readOnly": false
            },
            "mount_path": "/mnt/data/"
        },
        {
            "nfs": {
                "path": "/",
                "server": "06ba74****-a****.cn-hangzhou.nas.aliyuncs.com",
                "readOnly": false
            },
            "mount_path": "/mnt/data/"
        },
        {
            "image": {
                "image": "registry-vpc.cn-shanghai.aliyuncs.com/eas/test_image:v1",
                "path": "/path/to/mount/"
            },
            "mount_path": "/data_image"
        },
        {
            "empty_dir": {
              "medium": "memory",
              "size_limit": 20
            },
            "mount_path": "/dev/shm"
        },
        {
            "git": {
                "repo": "https://codeup.aliyun.com/xxx/eas/aitest.git",
                "branch": "master",
                "commit": "xxx",
                "username": "username",
                "password": "password or access token"
            },
            "mount_path": "/mnt/data/"
        }
    ],
    "metadata": {
        "cpu": 1,
        "instance": 1,
        "resource": "eas-r-xxx"
    }
}
```

## **FAQ**

1.  **Why am I getting a "file not found" error after mounting an OSS bucket?**
    
    This error is usually caused by an incorrect path. Check mount configuration and access path.
    
    For example, if you mount `oss://my-bucket/` to `/mnt/data`, the file `oss://my-bucket/subfolder/myfile.txt` in OSS must be accessed using the path `/mnt/data/subfolder/myfile.txt` in the container, not `/mnt/data/myfile.txt`.
    
2.  **Can I use an FTP or SSH tool to connect to an instance to upload or download files?**
    
    No. EAS instances do not provide FTP or SSH access.
    
3.  **Can I mount an OSS bucket that is in a different region from my EAS service?**
    
    No. EAS cannot mount OSS buckets across regions. Use the [cross-region replication](/help/en/oss/user-guide/cross-region-replication-overview/#concept-zjp-31z-5db) feature of OSS to synchronize data to an OSS bucket in the same region as the EAS service.
    
4.  **If no storage is mounted, where are the files that I download to the instance stored?** Files are saved to the system disk of the instance. The system disk is cleared when the instance is restarted or updated, resulting in data loss. To make data persistent, mount storage.
