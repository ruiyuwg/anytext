You can use datasets in nodes, such as Shell, Python, and Notebook nodes, to read and write data in Apsara File Storage NAS (NAS) or Object Storage Service (OSS). You can also use a dataset as storage when you create a personal development environment instance.

**Important**

For more information about how to create a dataset, see [Manage Datasets](/help/en/dataworks/user-guide/manage-datasets).

## **Background information**

When you need to read and write data stored in Object Storage Service (OSS) or Network Attached Storage (NAS) during data development in DataWorks, you can use the dataset feature of DataWorks. This feature lets you create and manage datasets and their multiple versions. Through dataset version management, you can track data versions and quickly switch to older versions when issues occur with new versions, ensuring smooth business operations.

## **Limits**

-   Datasets are supported only in the new version of [DataStudio](/help/en/dataworks/user-guide/overview-new-data-studio/).
    
-   **Resource group**: You can access datasets in data development nodes only using [Serverless resource groups](/help/en/dataworks/user-guide/using-serverless-resource-groups).
    
-   **Supported objects**: Datasets are supported only in [Shell nodes](/help/en/dataworks/user-guide/shell-node), [Python nodes](/help/en/dataworks/user-guide/python-for-new-diea), [Notebooks](/help/en/dataworks/user-guide/basic-notebook-development), and [personal development environments](/help/en/dataworks/user-guide/personal-development-environment/). You can mount a maximum of **5** datasets to each object.
    
-   **Storage class**: Datasets support **Object Storage Service (OSS)** and **Apsara File Storage NAS (NAS) that uses the NFS protocol**.
    
-   **Permissions**: If a dataset mount target is set to read-only, you cannot modify or delete the folders or files in the dataset. If you attempt to do so, a permission error is reported.
    

## **Use datasets in nodes**

This section provides an example of how to use a dataset in a node. In this example, an OSS dataset is created in DataWorks. The OSS path `oss://datasets-oss.oss-cn-shanghai.aliyuncs.com/dataset01/v1/` is mounted to the DataWorks dataset path `/mnt/data/dataset01`. Then, you can perform read and write operations on the dataset in the node.

### **Preparations: Create a dataset**

1.  [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4) or [create a file system](/help/en/nas/user-guide/create-a-file-system).
    
    This example uses an OSS dataset. A bucket named `datasets-oss` is created in the China (Shanghai) region, and the `/dataset01/v1` folder is created.
    
2.  [Create a dataset](/help/en/dataworks/user-guide/manage-datasets#47f3383ca9f81).
    
    In this example, an OSS dataset named `datasets-oss` is created. The OSS path `oss://datasets-oss.oss-cn-shanghai.aliyuncs.com/dataset01/v1/` is mounted to `/mnt/data/dataset01`.
    

### **1\. Configure a dataset for a node**

Configure the `datasets-oss` dataset in the **Debug Configurations** of a Shell or Python node.

**Important**

-   Before you publish, you must add and sync a dataset to the **Scheduling Configuration**.
    
-   You must allocate at least 0.5 computing units (CUs) to the node to use the dataset.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9174833571/p987654.png)

**Parameter**

**Description**

**Dataset**

Configure the dataset that can be accessed in the code of the current node.

-   For an OSS dataset, grant the DataWorks resource group permissions to access the configured OSS bucket the first time you read data from the dataset.
    
-   For a NAS dataset, make sure that the virtual private cloud (VPC) of the DataWorks resource group is connected to the VPC of the NAS mount target. For more information about the configuration, see [Overview of network connection solutions](/help/en/dataworks/user-guide/data-source-test-connectivity).
    

In this example, select the OSS dataset `datasets-oss` that is created in DataWorks and select the `V1` version.

**Mount Path**

Configure the path that the code on the current node uses to access the dataset. This field is automatically populated with the **Default Mount Path** from the dataset definition.

**Important**

The mount paths cannot be the same if you mount multiple datasets to the same node.

**Advanced Configuration**

Optional. You can specify the tools and parameters for reading and writing OSS data or specify the configurations for reading and writing NAS file systems in JSON format.

-   If you configure an OSS dataset, ossfs 2.0 is used by default to access the OSS data in your dataset path. You can specify other tools to read and write OSS data in the advanced configuration. For more information about the available tools, see [Advanced configuration examples](#9115bfc9bfvb0). The following code shows the default configurations.
    
    ```
    {"mountOssType":"ossfs", "upload_concurrency":64} 
    ```
    
-   If the added dataset is a NAS dataset, you can specify the configurations for accessing the NAS file system that uses the NFS protocol (nasOptions parameter). The following code shows the default configurations. You can also refer to [Manually mount an NFS file system](/help/en/nas/user-guide/mount-an-nfs-file-system-on-a-linux-ecs-instance#106fd8533c8ye) to customize parameter values.
    
    **Important**
    
    -   Only NAS file systems that use the NFS protocol can be mounted.
        
    -   The only advanced configuration parameter supported for NAS is `nasOptions`. To customize the parameters for mounting a NAS file system, set the advanced configuration to `{"nasOptions":"<ParameterName1=ParameterValue>,<ParameterName2=ParameterValue>,..."}`.
        
    
    ```
    {"nasOptions":"vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport"}
    ```
    

**Read-only**

By default, you can read and write data in the dataset on the current node. If the dataset is set to read-only for the current node, you cannot write data to the dataset mount folder in the code of the current node. If you perform a write operation in the code, a permission error is reported.

### **2\. Use the dataset in the node**

This section uses a Shell node as an example. After you attach an OSS dataset to a Shell node, you can manage the OSS data in the Shell node code in the same way that you manage local files. The following example shows how to use the default ossfs 2.0 tool to upload the `file01.txt` file to the mount path `/mnt/data/dataset01` of the `datasets-oss` dataset and write data to the file.

Sample code:

```
echo "Hello World" > /mnt/data/dataset01/file01.txt
ls -tl /mnt/data/dataset01
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9174833571/p987668.png)

**Note**

If the error message `Job Submit Failed! submit job failed directly! Caused by: execute task failed, exception: [103:ILLEGAL_TASK]:Task with dataset need 0.5cu at least!` is reported during runtime, it indicates that insufficient CUs are allocated to the task. Adjust the CUs of the resource group and allocate at least 0.5 CUs.

### **3\. Verify that data is written in OSS**

After the code in [2\. Use the dataset in the node](#07e83e4fd7z6r) is executed, the file is automatically written to the OSS storage path that corresponds to the dataset mount path. You can navigate to the OSS storage path to view the file written from the DataWorks node. In this example, the storage path that corresponds to the mount path `/mnt/data/dataset01` of the OSS dataset `datasets-oss` is `oss://datasets-oss.oss-cn-shanghai.aliyuncs.com/dataset01/v1/`. The following figure shows an example of the data written to the OSS path.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9174833571/p987672.png)

## **Use datasets in a personal development environment**

After you define a dataset, you can mount it to a personal development environment instance when you create or modify the instance. Then, you can directly read data from the dataset in the terminal or a Notebook in your personal folder.

### **Preparations: Create a dataset**

1.  [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4) or [create a file system](/help/en/nas/user-guide/create-a-file-system).
    
2.  [Create a dataset](/help/en/dataworks/user-guide/manage-datasets#47f3383ca9f81).
    
    This example uses a NAS dataset. A NAS dataset named `datasets-nas` is created in the China (Shanghai) region. The NAS path `nas://****.cn-shanghai.nas.aliyuncs.com/mnt/dataset02/v1/` is mounted to `/mnt/data/dataset02`.
    

### **1\. Configure a dataset for the personal development environment**

Create a [personal development environment instance](/help/en/dataworks/user-guide/personal-development-environment/) and select the `datasets-nas` NAS dataset that you created.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9174833571/p987818.png)

**Parameter**

**Description**

**Dataset**

Configure the dataset that can be accessed in the code of the current node. Make sure that the VPC selected for the personal development environment instance can connect to the NAS mount target.

In this example, select the NAS dataset `datasets-nas` that is created in DataWorks and select the `V1` version.

**Mount Path**

Configure the path to access the dataset in the code of the personal development environment instance.

In this example, the NAS dataset path `nas://****.cn-shanghai.nas.aliyuncs.com/mnt/dataset02/v1/` is mounted to `/mnt/data/dataset02`.

**Important**

The mount paths cannot be the same if you mount multiple datasets to the same personal development environment instance.

**Advanced Configuration**

Optional. You can specify the configurations for accessing the NAS file system that uses the NFS protocol (nasOptions parameter) in JSON format. The following code shows the default configurations. You can also refer to [Manually mount an NFS file system](/help/en/nas/user-guide/mount-an-nfs-file-system-on-a-linux-ecs-instance#106fd8533c8ye) to customize parameter values.

**Important**

-   Only NAS file systems that use the NFS protocol can be mounted.
    
-   The only advanced configuration parameter supported for NAS is `nasOptions`. To customize the parameters for mounting a NAS file system, set the advanced configuration to `{"nasOptions":"<ParameterName1=ParameterValue>,<ParameterName2=ParameterValue>,..."}`.
    

```
{"nasOptions":"vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport"}
```

**Read-only**

By default, you can read and write data in the dataset on the current node. If the dataset is set to read-only for the current node, you cannot write data to the dataset mount folder in the code of the current node. If you perform a write operation in the code, a permission error is reported.

### **2\. Read the dataset in a Notebook**

1.  At the top of the Data Development page, switch to the [personal development environment instance](/help/en/dataworks/user-guide/personal-development-environment/) and create a [Notebook](/help/en/dataworks/user-guide/basic-notebook-development).
    
2.  Configure the following content in the Notebook.
    
    1.  Write data to the specified path in the dataset.
        
        ```
        import os
        
        # Define the destination path and file name.
        file_path = "/mnt/data/dataset02/file02.txt"
        
        # Make sure that the folder exists. If the folder does not exist, create it.
        os.makedirs(os.path.dirname(file_path),exist_ok=True)
        
        # Write the content.
        content = "Hello World!"
        try:
            with open(file_path, "w", encoding="utf-8") as file:
                file.write(content)
            print(f"The file has been successfully written to: {file_path}")
        except Exception as e:
            print(f"Write failed: {str(e)}")
        ```
        
    2.  Read data from the specified path in the dataset.
        
        ```
        file_path = "/mnt/data/dataset02/file02.txt"
        with open(file_path, "r") as file:
            content = file.read()
        content
        ```
        
3.  Run the two Python code blocks separately.
    
    **Note**
    
    During runtime, you must [confirm the Python kernel](/help/en/dataworks/user-guide/basic-notebook-development#193fc11274sut). This example uses Python 3.11.9.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9174833571/p987856.png)
    

### **3\. Configure scheduling**

On the right side of the Notebook node, click **Scheduling Settings** and add the dataset-related options. The parameter configuration must be the same as the dataset parameters that you set when you created the personal developer environment instance.

## **Advanced configuration examples**

When you configure a dataset, you can set advanced configurations. You can customize related parameters in JSON format:

-   When you [configure a dataset for a node](#3e41f91e23yy9), you can use advanced configurations to specify the tools and parameters for reading and writing OSS data, or specify the configurations for reading and writing NAS file systems in JSON format.
    
-   When you [configure a dataset for a personal development environment](#72f26587ebyuk), you can set advanced parameters to specify the configurations for reading and writing NAS file systems in JSON format.
    

The following sections provide configuration examples:

### **Use ossfs 2.0 to mount and access OSS**

[ossfs 2.0](/help/en/oss/developer-reference/ossfs-2-0/) is a client designed for high-performance access to OSS by mounting. It provides excellent sequential read and write capabilities and can fully leverage the high bandwidth of OSS. It is suitable for scenarios that require high sequential read and write performance, such as AI training and compute-intensive applications such as data processing. These workload scenarios mainly involve sequential and random reads, sequential writes (append-only), and do not require full POSIX semantics.

In **Dataset** > **Advanced Configuration**, you can set advanced parameters. Separate multiple options with a comma (`,`). For more information about advanced parameters and other options, see [ossfs 2.0 mount options](/help/en/oss/developer-reference/description-of-mount-options). The following are examples of common scenarios:

-   **The data source remains unchanged during the task**: If none of the files to be read are modified during the read process, you can configure a long cache time to reduce the number of metadata requests. A typical scenario is reading a batch of existing files and generating a batch of new files after processing.
    
    ```
    {"mountOssType":"ossfs", "attr_timeout": "7200"}
    ```
    
-   **Fast read and write**: Use a short metadata cache time to balance cache efficiency and file data timeliness.
    
    ```
    {"mountOssType":"ossfs", "attr_timeout": "3", "negative_timeout":"0"}
    ```
    
-   **Read and write consistency for distributed tasks**: By default, ossfs updates file data based on metadata cache. Use the following configuration to achieve a synchronized view across multiple nodes.
    
    ```
    { "mountOssType":"ossfs","negative_timeout": "0", "close_to_open":"false"}
    ```
    
-   **Too many files are opened at the same time, causing an OOM error**: If the task concurrency is high and many files are opened at the same time, an out-of-memory (OOM) issue may occur. You can use the following configuration to relieve memory pressure.
    
    ```
    {"mountOssType":"ossfs","readdirplus": "false", "inode_cache_eviction_threshold":"300000"}
    ```
    

### **Use ossfs 1.0 to mount and access OSS**

[ossfs 1.0](/help/en/oss/developer-reference/common-options) lets you mount an OSS bucket as a local file system on a Linux system. Compared with ossfs 2.0, ossfs 1.0 provides more comprehensive file operation support. If you encounter file operation incompatibility issues after you mount a directory with ossfs 2.0, you can try using ossfs 1.0.

For more information about the parameters required for mounting with ossfs 1.0, see [ossfs 1.0 mount options](/help/en/oss/developer-reference/common-options).

### **Use JindoFuse to mount and access OSS**

You can use the [JindoFuse](/help/en/pai/user-guide/use-oss#cc3290cfc7zxy) component to mount an OSS dataset to a specified path in a container. This tool is suitable for the following scenarios:

-   You want to read OSS data as if it were a local dataset, or the dataset is small and can effectively use the local cache of JindoFuse for acceleration.
    
-   You need to write data to OSS.
    

In **Dataset** > **Advanced Configuration**, you can set advanced parameters. Use a comma (`,`) to separate multiple configurations. The following is an example configuration. For parameter descriptions and more parameter configurations, see [JindoFuse User Guide](/help/en/emr/emr-on-ecs/user-guide/user-guide-of-jindofuse) and [Using JindoFuse to mount and access data](/help/en/oss/user-guide/use-jindofuse-to-access-the-oss-hdfs-service).

**Note**

Currently, DataWorks only supports parameters in the `key=value` format.

```
{ 
  "mountOssType":"jindofuse",
  "fs.oss.download.thread.concurrency": "2 × number of CPU cores",
  "fs.oss.upload.thread.concurrency": "2 × number of CPU cores",
  "attr_timeout": 3,
  "entry_timeout": 0,
  "negative_timeout": 0
}
```

### **Use a NAS dataset**

If the dataset you added is a NAS dataset, you can specify the configurations for accessing the NAS file system that uses the NFS protocol (the nasOptions parameter). The following code shows the default configurations. To customize parameter values, see [Manually mount an NFS file system](/help/en/nas/user-guide/mount-an-nfs-file-system-on-a-linux-ecs-instance#106fd8533c8ye).

**Important**

-   Only NAS file systems that use the NFS protocol can be mounted.
    
-   The only advanced configuration parameter supported for NAS is `nasOptions`. To customize the parameters for mounting a NAS file system, set the advanced configuration to `{"nasOptions":"<ParameterName1=ParameterValue>,<ParameterName2=ParameterValue>,..."}`.
    

```
{"nasOptions":"vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport"}
```

## **References**

-   [Shell nodes](/help/en/dataworks/user-guide/shell-node)
    
-   [Python nodes](/help/en/dataworks/user-guide/python-for-new-diea)
    
-   [Notebook development](/help/en/dataworks/user-guide/basic-notebook-development)
    
-   [Personal development environments](/help/en/dataworks/user-guide/personal-development-environment/)
