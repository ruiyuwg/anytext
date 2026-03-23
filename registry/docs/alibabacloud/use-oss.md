In Platform for AI (PAI) services, such as Deep Learning Containers (DLC) or Data Science Workshop (DSW), you can use the ossfs 2.0 client or the JindoFuse component provided by Alibaba Cloud EMR to mount an Object Storage Service (OSS) data source to a specified path in a container. You can also use the OSS Connector for AI/ML and the OSS software development kit (SDK) to read OSS data. You can select a method to read OSS data based on your scenario.

## **Background information**

During artificial intelligence (AI) development, source data is usually stored in Object Storage Service (OSS) and then downloaded to a training environment for model development and training. However, this method often has several drawbacks:

-   Long dataset download times cause GPUs to be idle.
    
-   The data must be re-downloaded for each training task.
    
-   Random data sampling requires the complete dataset to be downloaded to each training node.
    

To resolve these issues, consider the following suggestions for reading data from OSS:

**OSS data reading methods**

**Description**

**Recommended scenarios**

[JindoFuse](#3b49dc3cbfsnx)

You can use the JindoFuse component to mount an OSS dataset to a specified path in a container. This lets you read and write data directly.

-   You want to read OSS data as if it were a local dataset, and the dataset is small enough to benefit from the acceleration provided by the JindoFuse local cache.
    
-   The framework you use is not PyTorch.
    
-   You need to write data to OSS.
    

[ossfs 2.0](#a041f9b279add)

[ossfs 2.0](/help/en/oss/developer-reference/ossfs-2-0/) is a client designed for high-performance access to Object Storage Service (OSS) by mounting it as a local file system. It provides excellent sequential read and write capabilities and fully utilizes the high bandwidth of OSS.

ossfs 2.0 is suitable for scenarios with high requirements on storage access, such as AI training, inference, big data processing, autonomous driving, and other next-generation compute-intensive workloads. These workloads involve sequential and random reads and sequential (append-only) writes, and do not depend on complete POSIX semantics.

[OSS Connector for AI/ML](#87814229253hc)

PAI integrates the OSS Connector for AI/ML, which lets you stream and read OSS files directly within PyTorch code. This method provides simple and efficient data reading and has the following advantages:

-   Stream loading: You can stream data directly without downloading it to the training environment. This reduces GPU idle time and lowers costs.
    
-   PyTorch-native interface: The connector is compatible with the PyTorch Dataset interface, making it simple to use. It also provides better encapsulation than the OSS SDK, which makes it easier to customize and modify.
    
-   Efficient reading: The connector is optimized for high-performance data reading, providing more efficient data loading than the standard OSS SDK.
    

This method lets you read and write OSS data without mounting. It is recommended if you are training with PyTorch, need to read millions of small files, and have high throughput requirements. The OSS Connector for AI/ML can significantly accelerate dataset reading in these scenarios.

[OSS SDK](#39058b653awlr)

You can use OSS2 to stream data from OSS. OSS2 is a flexible and efficient solution that can significantly reduce data request latency and improve training efficiency.

This method is suitable if you need temporary access to OSS data without mounting, or to programmatically control data access based on your business logic. In these cases, you can use the OSS Python SDK or OSS Python API.

## **JindoFuse**

DLC and DSW support mounting OSS datasets or OSS paths to a specified path in a container using the JindoFuse component. This lets you directly read and write data stored in OSS during training.

### **Mounting methods**

## **Mount OSS in DLC**

You can mount an OSS dataset when you create a DLC job. Two mount types are supported. For more information, see [Create a training job](/help/en/pai/user-guide/create-a-training-task/).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5607912671/p1005361.png)

**Mount type**

**Description**

**Dataset**

Select a dataset of the **Object Storage Service (OSS)** type and configure the **Mount Path**. When you use a public dataset, only the read-only mount mode is supported.

**Direct Mount**

Directly mount an OSS bucket storage path.

> When you use a quota of Lingjun resources with local caching enabled, you can turn on the **Use Cache** switch to enable the caching feature.

## Mount OSS in DSW

You can mount an OSS dataset when you create a DSW instance. Two mount types are supported. For more information, see [Create a DSW instance](/help/en/pai/user-guide/create-and-manage-dsw-instances).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5607912671/p1005355.png)

**Mount type**

**Description**

**Mount Dataset**

Select a dataset of the **Object Storage Service (OSS)** type and configure the **Mount Path**. When you use a public dataset, only the read-only mount mode is supported.

**Mount Storage Path**

Directly mount an OSS bucket storage path.

### **Default configuration limits**

If the **Advanced Configuration** parameter is empty, the default configurations are used. The default configurations have the following limits:

-   To quickly read OSS files, metadata such as directory and file lists is cached when OSS is mounted.
    
    In a distributed task, if multiple nodes need to create the same directory and check if it exists, the metadata cache causes each node to attempt creation. Only one node can successfully create the directory, and the other nodes report an error.
    
-   By default, the OSS Multipart API is used to create files. While a file is being written, the object is not visible in OSS. You can view the object on the OSS page only after all write operations are complete.
    
-   Concurrent file writing and reading operations are not supported.
    
-   Random write operations on files are not supported.
    

### **Common JindoFuse configurations**

You can also customize JindoFuse parameters in the advanced configuration based on your scenario.

> This topic provides suggestions on how to configure JindoFuse in specific scenarios. These are not the optimal configurations for all scenarios. For more flexible configurations, see the [JindoFuse User Guide](/help/en/emr/emr-on-ecs/user-guide/user-guide-of-jindofuse).

-   **Quick Read/write**: ensures quick reads and writes. However, data inconsistency may occur during concurrent reads or writes. You can mount training data and models to the mount path of this mode. We recommend that you do not use the mount path of this mode as the working directory.
    
    ```
    {
      "fs.oss.download.thread.concurrency": "Twice the number of CPU cores",
      "fs.oss.upload.thread.concurrency": "Twice the number of CPU cores",
      "fs.jindo.args": "-oattr_timeout=3 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink"
    }
    ```
    
-   **Incremental Read/Write**: ensures data consistency during incremental writing. If original data is overwritten, data inconsistency may occur. The reading speed is slightly slow. You can use this mode to save the model weight files for training data.
    
    ```
    {
      "fs.oss.upload.thread.concurrency": "Twice the number of CPU cores",
      "fs.jindo.args": "-oattr_timeout=3 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink"
    }
    ```
    
-   **Consistent Read/write**: ensures data consistency during concurrent reads or writes and is suitable for scenarios that require high data consistency and do not require quick reads. You can use this mode to save the code of your projects.
    
    ```
    {
      "fs.jindo.args": "-oattr_timeout=0 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink"
    }
    ```
    
-   **Read-only**: allows only reads. You can use this mode to mount public datasets.
    
    ```
    {
      "fs.oss.download.thread.concurrency": "Twice the number of CPU cores",
      "fs.jindo.args": "-oro -oattr_timeout=7200 -oentry_timeout=7200 -onegative_timeout=7200 -okernel_cache -ono_symlink"
    }
    ```
    

In addition, common configuration operations include the following:

-   **Select different JindoFuse versions**:
    
    ```
    {
      "fs.jindo.fuse.pod.image.tag": "6.7.0"
    }
    ```
    
-   **Disable metadata cache**: When you run a distributed task and multiple nodes attempt to write to the same directory simultaneously, the cache may cause write operations on some nodes to fail. You can resolve this issue by modifying the JindoFuse command-line parameters and adding `-oattr_timeout=0-oentry_timeout=0-onegative_timeout=0`.
    
    ```
    {
      "fs.jindo.args": "-oattr_timeout=0-oentry_timeout=0-onegative_timeout=0"
    }
    ```
    
-   **Adjust the number of threads for uploading or downloading data**: You can configure the following parameters to adjust the thread count.
    
    ```
    {
      "fs.oss.upload.thread.concurrency": "32",
      "fs.oss.download.thread.concurrency": "32",
      "fs.oss.read.readahead.buffer.count": "64",
      "fs.oss.read.readahead.buffer.size": "4194304"
    }
    ```
    
-   **Mount OSS files using the AppendObject method**: All files that you create locally are created as objects (files) by calling the OSS AppendObject API. The final size of an object created using the AppendObject method cannot exceed 5 GB. For more information about the limits of AppendObject, see [AppendObject](/help/en/oss/developer-reference/appendobject). The following are sample configurations:
    
    ```
    {
      "fs.jindo.args": "-oattr_timeout=0 -oentry_timeout=0 -onegative_timeout=0",
      "fs.oss.append.enable": "true",
      "fs.oss.flush.interval.millisecond": "1000",
      "fs.oss.read.readahead.buffer.size": "4194304",
      "fs.oss.write.buffer.size": "262144"
    }
    ```
    
-   **Mount OSS-HDFS**: To enable OSS-HDFS, see [What is the OSS-HDFS service](/help/en/oss/user-guide/oss-hdfs-overview). For distributed training scenarios, we recommend that you add the following parameters:
    
    ```
    {
      "fs.jindo.args": "-oattr_timeout=0 -oentry_timeout=0 -onegative_timeout=0 -ono_symlink -ono_xattr -ono_flock -odirect_io",
      "fs.oss.flush.interval.millisecond": "10000",
      "fs.oss.randomwrite.sync.interval.millisecond": "10000"
    }
    ```
    
-   **Configure memory resources**: You can adjust memory resources by configuring the `fs.jindo.fuse.pod.mem.limit` parameter. The following is a sample configuration:
    
    ```
    {
      "fs.jindo.fuse.pod.mem.limit": "10Gi"
    }
    ```
    

**Use the Python SDK to modify JindoFuse parameters for a dataset**

You can also modify JindoFuse parameters using the Python SDK.

1.  Complete the following steps:
    
    1.  Install the workspace SDK.
        
        ```
        !pip install alibabacloud-aiworkspace20210204
        ```
        
    2.  Configure environment variables. For more information, see [Install the Credentials tool](/help/en/sdk/developer-reference/v2-manage-python-access-credentials#4df4d2604bkbx) and [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
        
2.  Modify the JindoFuse parameters.
    
    ## Fast read/write
    
    ```
    import json
    from alibabacloud_tea_openapi.models import Config
    from alibabacloud_credentials.client import Client as CredClient
    from alibabacloud_aiworkspace20210204.client import Client as AIWorkspaceClient
    from alibabacloud_aiworkspace20210204.models import UpdateDatasetRequest
    
    
    def change_config():
        # Use the region where the DLC job is located. For example, set region_id to 'cn-hangzhou' for China (Hangzhou).
        region_id = 'cn-hangzhou'
        # The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&M.
        # To prevent the leakage of your AccessKey pair, do not store the AccessKey ID and AccessKey secret in your project code.
        # This example shows how to use the default Credentials SDK to read the AccessKey pair from environment variables for identity verification. You must first install the Credentials tool and configure the environment variables.
        cred = CredClient()
        dataset_id = '** The ID of the dataset **'
    
        workspace_client = AIWorkspaceClient(
            config=Config(
                credential=cred,
                region_id=region_id,
                endpoint="aiworkspace.{}.aliyuncs.com".format(region_id),
            )
        )
        # 1. Get the content of the dataset.
        get_dataset_resp = workspace_client.get_dataset(dataset_id)
        options = json.loads(get_dataset_resp.body.options)
        # The recommended value is twice the number of CPU cores.
        options['fs.oss.download.thread.concurrency'] = 32
        options['fs.oss.upload.thread.concurrency'] = 32
        options['fs.jindo.args'] = '-oattr_timeout=3 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink'
    
        update_request = UpdateDatasetRequest(
            options=json.dumps(options)
        )
        # 2. Update the options.
        workspace_client.update_dataset(dataset_id, update_request)
        print('new options is: {}'.format(update_request.options))
    
    
    change_config()
    ```
    
    ## Incremental read/write
    
    ```
    import json
    from alibabacloud_tea_openapi.models import Config
    from alibabacloud_credentials.client import Client as CredClient
    from alibabacloud_aiworkspace20210204.client import Client as AIWorkspaceClient
    from alibabacloud_aiworkspace20210204.models import UpdateDatasetRequest
    
    
    def change_config():
        # Use the region where the DLC job is located. For example, set region_id to 'cn-hangzhou' for China (Hangzhou).
        region_id = 'cn-hangzhou'
        # The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&M.
        # To prevent the leakage of your AccessKey pair, do not store the AccessKey ID and AccessKey secret in your project code.
        # This example shows how to use the default Credentials SDK to read the AccessKey pair from environment variables for identity verification. You must first install the Credentials tool and configure the environment variables.
        cred = CredClient()
        dataset_id = '** The ID of the dataset **'
    
        workspace_client = AIWorkspaceClient(
            config=Config(
                credential=cred,
                region_id=region_id,
                endpoint="aiworkspace.{}.aliyuncs.com".format(region_id),
            )
        )
        # 1. Get the content of the dataset.
        get_dataset_resp = workspace_client.get_dataset(dataset_id)
        options = json.loads(get_dataset_resp.body.options)
        # The recommended value is twice the number of CPU cores.
        options['fs.oss.upload.thread.concurrency'] = 32
        options['fs.jindo.args'] = '-oattr_timeout=3 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink'
    
        update_request = UpdateDatasetRequest(
            options=json.dumps(options)
        )
        # 2. Update the options.
        workspace_client.update_dataset(dataset_id, update_request)
        print('new options is: {}'.format(update_request.options))
    
    
    change_config()
    ```
    
    ## Read/write consistency
    
    ```
    import json
    from alibabacloud_tea_openapi.models import Config
    from alibabacloud_credentials.client import Client as CredClient
    from alibabacloud_aiworkspace20210204.client import Client as AIWorkspaceClient
    from alibabacloud_aiworkspace20210204.models import UpdateDatasetRequest
    
    
    def change_config():
        # Use the region where the DLC job is located. For example, set region_id to 'cn-hangzhou' for China (Hangzhou).
        region_id = 'cn-hangzhou'
        # The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&M.
        # To prevent the leakage of your AccessKey pair, do not store the AccessKey ID and AccessKey secret in your project code.
        # This example shows how to use the default Credentials SDK to read the AccessKey pair from environment variables for identity verification. You must first install the Credentials tool and configure the environment variables.
        cred = CredClient()
        dataset_id = '** The ID of the dataset **'
    
        workspace_client = AIWorkspaceClient(
            config=Config(
                credential=cred,
                region_id=region_id,
                endpoint="aiworkspace.{}.aliyuncs.com".format(region_id),
            )
        )
        # 1. Get the content of the dataset.
        get_dataset_resp = workspace_client.get_dataset(dataset_id)
        options = json.loads(get_dataset_resp.body.options)
        options['fs.jindo.args'] = '-oattr_timeout=0 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink'
    
        update_request = UpdateDatasetRequest(
            options=json.dumps(options)
        )
        # 2. Update the options.
        workspace_client.update_dataset(dataset_id, update_request)
        print('new options is: {}'.format(update_request.options))
    
    
    change_config()
    ```
    
    ## Read-only
    
    ```
    import json
    from alibabacloud_tea_openapi.models import Config
    from alibabacloud_credentials.client import Client as CredClient
    from alibabacloud_aiworkspace20210204.client import Client as AIWorkspaceClient
    from alibabacloud_aiworkspace20210204.models import UpdateDatasetRequest
    
    
    def change_config():
        # Use the region where the DLC job is located. For example, set region_id to 'cn-hangzhou' for China (Hangzhou).
        region_id = 'cn-hangzhou'
        # The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&M.
        # To prevent the leakage of your AccessKey pair, do not store the AccessKey ID and AccessKey secret in your project code.
        # This example shows how to use the default Credentials SDK to read the AccessKey pair from environment variables for identity verification. You must first install the Credentials tool and configure the environment variables.
        cred = CredClient()
        dataset_id = '** The ID of the dataset **'
    
        workspace_client = AIWorkspaceClient(
            config=Config(
                credential=cred,
                region_id=region_id,
                endpoint="aiworkspace.{}.aliyuncs.com".format(region_id),
            )
        )
        # 1. Get the content of the dataset.
        get_dataset_resp = workspace_client.get_dataset(dataset_id)
        options = json.loads(get_dataset_resp.body.options)
        # The recommended value is twice the number of CPU cores.
        options['fs.oss.download.thread.concurrency'] = 32
        options['fs.jindo.args'] = '-oro -oattr_timeout=7200 -oentry_timeout=7200 -onegative_timeout=7200 -okernel_cache -ono_symlink'
    
        update_request = UpdateDatasetRequest(
            options=json.dumps(options)
        )
        # 2. Update the options.
        workspace_client.update_dataset(dataset_id, update_request)
        print('new options is: {}'.format(update_request.options))
    
    
    change_config()
    ```
    
    #### **Select different** JindoFuse **versions**
    
    The following is a sample code:
    
    ```
    import json
    from alibabacloud_tea_openapi.models import Config
    from alibabacloud_credentials.client import Client as CredClient
    from alibabacloud_aiworkspace20210204.client import Client as AIWorkspaceClient
    from alibabacloud_aiworkspace20210204.models import UpdateDatasetRequest
    
    
    def change_version():
        # Use the region where the DLC job is located. For example, set region_id to 'cn-hangzhou' for China (Hangzhou).
        region_id = 'cn-hangzhou'
        # The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&M.
        # To prevent the leakage of your AccessKey pair, do not store the AccessKey ID and AccessKey secret in your project code.
        # This example shows how to use the default Credentials SDK to read the AccessKey pair from environment variables for identity verification. You must first install the Credentials tool and configure the environment variables.
        cred = CredClient()
        dataset_id = '** The ID of the dataset **'
    
        workspace_client = AIWorkspaceClient(
            config=Config(
                credential=cred,
                region_id=region_id,
                endpoint="aiworkspace.{}.aliyuncs.com".format(region_id),
            )
        )
        # 1. Get the content of the dataset.
        get_dataset_resp = workspace_client.get_dataset(dataset_id)
        options = json.loads(get_dataset_resp.body.options)
        # Configure the jindo-fuse version. You can set it to 6.4.4, 6.7.0, or 6.6.0. For more information, see the release notes at https://aliyun.github.io/alibabacloud-jindodata/releases/.
        options['fs.jindo.fuse.pod.image.tag'] = "6.7.0"
    
        update_request = UpdateDatasetRequest(
            options=json.dumps(options)
        )
        # 2. Update the options.
        workspace_client.update_dataset(dataset_id, update_request)
        print('new options is: {}'.format(update_request.options))
    change_version()
    ```
    
    #### **Disable metadata cache**
    
    When you run a distributed task and multiple nodes attempt to write to the same directory simultaneously, the cache may cause write operations on some nodes to fail. You can resolve this issue by modifying the JindoFuse command-line parameters and adding `-oattr_timeout=0-oentry_timeout=0-onegative_timeout=0`. The following is a sample code:
    
    ```
    import json
    from alibabacloud_tea_openapi.models import Config
    from alibabacloud_credentials.client import Client as CredClient
    from alibabacloud_aiworkspace20210204.client import Client as AIWorkspaceClient
    from alibabacloud_aiworkspace20210204.models import UpdateDatasetRequest
    
    
    def turnOffMetaCache():
        region_id = 'cn-hangzhou'
        # The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&M.
        # To prevent the leakage of your AccessKey pair, do not store the AccessKey ID and AccessKey secret in your project code.
        # This example shows how to use the default Credentials SDK to read the AccessKey pair from environment variables for identity verification. You must first install the Credentials tool and configure the environment variables.
        cred = CredClient()
        dataset_id = '** The ID of the dataset **'
        workspace_client = AIWorkspaceClient(
          config=Config(
                credential=cred,
                region_id=region_id,
                endpoint="aiworkspace.{}.aliyuncs.com".format(region_id),
          )
        )
        # 1. Get the content of the dataset.
        get_dataset_resp = workspace_client.get_dataset(dataset_id)
        options = json.loads(get_dataset_resp.body.options)
    
        options['fs.jindo.args'] = '-oattr_timeout=0 -oentry_timeout=0 -onegative_timeout=0'
    
        update_request = UpdateDatasetRequest(
            options=json.dumps(options)
        )
        # 2. Update the options.
        workspace_client.update_dataset(dataset_id, update_request)
        print('new options is: {}'.format(update_request.options))
    
    
    turnOffMetaCache()
    ```
    
    #### **Adjust the number of threads for uploading or downloading data**
    
    You can configure the following parameters to adjust the thread count:
    
    -   `fs.oss.upload.thread.concurrency:32`
        
    -   `fs.oss.download.thread.concurrency:32`
        
    -   `fs.oss.read.readahead.buffer.count:64`
        
    -   `fs.oss.read.readahead.buffer.size:4194304`
        
    
    The following is a sample code:
    
    ```
    import json
    from alibabacloud_tea_openapi.models import Config
    from alibabacloud_credentials.client import Client as CredClient
    from alibabacloud_aiworkspace20210204.client import Client as AIWorkspaceClient
    from alibabacloud_aiworkspace20210204.models import UpdateDatasetRequest
    
    
    def adjustThreadNum():
        # Use the region where the DLC job is located. For example, set region_id to 'cn-hangzhou' for China (Hangzhou).
        region_id = 'cn-hangzhou'
        # The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&M.
        # To prevent the leakage of your AccessKey pair, do not store the AccessKey ID and AccessKey secret in your project code.
        # This example shows how to use the default Credentials SDK to read the AccessKey pair from environment variables for identity verification. You must first install the Credentials tool and configure the environment variables.
        cred = CredClient()
        dataset_id = '** The ID of the dataset **'
    
        workspace_client = AIWorkspaceClient(
            config=Config(
                credential=cred,
                region_id=region_id,
                endpoint="aiworkspace.{}.aliyuncs.com".format(region_id),
            )
        )
        # 1. Get the content of the dataset.
        get_dataset_resp = workspace_client.get_dataset(dataset_id)
        options = json.loads(get_dataset_resp.body.options)
    
        options['fs.oss.upload.thread.concurrency'] = 32
        options['fs.oss.download.thread.concurrency'] = 32
        options['fs.oss.read.readahead.buffer.count'] = 32
     
        update_request = UpdateDatasetRequest(
            options=json.dumps(options)
        )
        # 2. Update the options.
        workspace_client.update_dataset(dataset_id, update_request)
        print('new options is: {}'.format(update_request.options))
     
     
    adjustThreadNum()
    ```
    
    #### **Mount OSS files using AppendObject**
    
    All files created locally are created as OSS objects by calling the AppendObject operation. The size of an object created using AppendObject cannot exceed 5 GB. For more information about the limits of AppendObject, see [AppendObject](/help/en/oss/developer-reference/appendobject). The following is a sample code:
    
    ```
    import json
    from alibabacloud_tea_openapi.models import Config
    from alibabacloud_credentials.client import Client as CredClient
    from alibabacloud_aiworkspace20210204.client import Client as AIWorkspaceClient
    from alibabacloud_aiworkspace20210204.models import UpdateDatasetRequest
    
    
    def useAppendObject():
        # Use the region where the DLC job is located. For example, set region_id to 'cn-hangzhou' for China (Hangzhou).
        region_id = 'cn-hangzhou'
        # The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&M.
        # To prevent the leakage of your AccessKey pair, do not store the AccessKey ID and AccessKey secret in your project code.
        # This example shows how to use the default Credentials SDK to read the AccessKey pair from environment variables for identity verification. You must first install the Credentials tool and configure the environment variables.
        cred = CredClient()
        dataset_id = '** The ID of the dataset **'
    
        workspace_client = AIWorkspaceClient(
            config=Config(
                credential=cred,
                region_id=region_id,
                endpoint="aiworkspace.{}.aliyuncs.com".format(region_id),
            )
        )
        # 1. Get the content of the dataset.
        get_dataset_resp = workspace_client.get_dataset(dataset_id)
        options = json.loads(get_dataset_resp.body.options)
    
        options['fs.jindo.args'] = '-oattr_timeout=0 -oentry_timeout=0 -onegative_timeout=0'
        options['fs.oss.append.enable'] = "true"
        options['fs.oss.flush.interval.millisecond'] = "1000"
        options['fs.oss.read.buffer.size'] = "262144"
        options['fs.oss.write.buffer.size'] = "262144"
    
        update_request = UpdateDatasetRequest(
            options=json.dumps(options)
        )
        # 2. Update the options.
        workspace_client.update_dataset(dataset_id, update_request)
        print('new options is: {}'.format(update_request.options))
    
    
    useAppendObject()
    ```
    
    #### **Mount OSS-HDFS**
    
    For information about how to enable OSS-HDFS, see [What is OSS-HDFS](/help/en/oss/user-guide/oss-hdfs-overview). The following sample code shows how to use an OSS-HDFS endpoint to create a dataset:
    
    ```
    import json
    from alibabacloud_tea_openapi.models import Config
    from alibabacloud_credentials.client import Client as CredClient
    from alibabacloud_aiworkspace20210204.client import Client as AIWorkspaceClient
    from alibabacloud_aiworkspace20210204.models import CreateDatasetRequest
    
    
    def createOssHdfsDataset():
        # Use the region where the DLC job is located. For example, set region_id to 'cn-hangzhou' for China (Hangzhou).
        region_id = 'cn-hangzhou'
        # The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&M.
        # To prevent the leakage of your AccessKey pair, do not store the AccessKey ID and AccessKey secret in your project code.
        # This example shows how to use the default Credentials SDK to read the AccessKey pair from environment variables for identity verification. You must first install the Credentials tool and configure the environment variables.
        cred = CredClient()
        workspace_id = '** The ID of the workspace where the DLC job is located **'
    
        oss_bucket = '** The OSS bucket **'
        # Use the OSS-HDFS endpoint.
        oss_endpoint = f'{region_id}.oss-dls.aliyuncs.com'
        # The OSS-HDFS path to mount.
        oss_path = '/'
        # The local mount path.
        mount_path = '/mnt/data/'
    
        workspace_client = AIWorkspaceClient(
            config=Config(
                credential=cred,
                region_id=region_id,
                endpoint="aiworkspace.{}.aliyuncs.com".format(region_id),
            )
        )
    
        response = workspace_client.create_dataset(CreateDatasetRequest(
            workspace_id=workspace_id,
            name="** The name of the dataset **",
            data_type='COMMON',
            data_source_type='OSS',
            property='DIRECTORY',
            uri=f'oss://{oss_bucket}.{oss_endpoint}{oss_path}',
            accessibility='PRIVATE',
            source_type='USER',
            options=json.dumps({
                'mountPath': mount_path,
                # In distributed training scenarios, we recommend that you add the following parameters.
                'fs.jindo.args': '-oattr_timeout=0 -oentry_timeout=0 -onegative_timeout=0 -ono_symlink -ono_xattr -ono_flock -odirect_io',
                'fs.oss.flush.interval.millisecond': "10000",
                'fs.oss.randomwrite.sync.interval.millisecond': "10000",
            })
        ))
        print(f'datasetId: {response.body.dataset_id}')
    
    createOssHdfsDataset()
    
    ```
    
    #### **Configure memory resources**
    
    You can adjust memory resources by configuring the fs.jindo.fuse.pod.mem.limit parameter. The following is a sample code:
    
    ```
    import json
    from alibabacloud_tea_openapi.models import Config
    from alibabacloud_credentials.client import Client as CredClient
    from alibabacloud_aiworkspace20210204.client import Client as AIWorkspaceClient
    from alibabacloud_aiworkspace20210204.models import UpdateDatasetRequest
    
    
    def adjustResource():
        # Use the region where the DLC job is located. For example, set region_id to 'cn-hangzhou' for China (Hangzhou).
        region_id = 'cn-hangzhou'
        # The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&M.
        # To prevent the leakage of your AccessKey pair, do not store the AccessKey ID and AccessKey secret in your project code.
        # This example shows how to use the default Credentials SDK to read the AccessKey pair from environment variables for identity verification. You must first install the Credentials tool and configure the environment variables.
        cred = CredClient()
        dataset_id = '** The ID of the dataset **'
    
        workspace_client = AIWorkspaceClient(
            config=Config(
                credential=cred,
                region_id=region_id,
                endpoint="aiworkspace.{}.aliyuncs.com".format(region_id),
            )
        )
        # 1. Get the content of the dataset.
        get_dataset_resp = workspace_client.get_dataset(dataset_id)
        options = json.loads(get_dataset_resp.body.options)
        # The memory resources to configure.
        options['fs.jindo.fuse.pod.mem.limit'] = "10Gi"
    
        update_request = UpdateDatasetRequest(
            options=json.dumps(options)
        )
        # 2. Update the options.
        workspace_client.update_dataset(dataset_id, update_request)
        print('new options is: {}'.format(update_request.options))
    
    
    adjustResource()
    ```
    

## **ossfs 2.0**

When mounting an OSS data source, you can set `{"mountType":"ossfs"}` in **Advanced Configuration** to use the ossfs mount method.

### **Mounting methods**

## **Mount OSS in DLC**

You can mount an OSS dataset when you create a DLC job. Two mount types are supported. For more information about the configuration methods, see [Create a training job](/help/en/pai/user-guide/create-a-training-task/).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5607912671/p1005616.png)

**Mount type**

**Description**

**Dataset**

Select a dataset of the **Object Storage Service (OSS)** type and configure the **Mount Path**. When you use a public dataset, only the read-only mount mode is supported.

**Direct Mount**

Directly mount an OSS bucket storage path.

> When you use a quota of Lingjun resources with local caching enabled, you can turn on the **Use Cache** switch to enable the caching feature.

## Mount OSS in DSW

You can mount an OSS dataset when you create a DSW instance. Two mount types are supported. For more information about the configuration methods, see [Create a DSW instance](/help/en/pai/user-guide/create-and-manage-dsw-instances).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5607912671/p1005622.png)

**Mount type**

**Description**

**Mount Dataset**

Select a dataset of the **Object Storage Service (OSS)** type and configure the **Mount Path**. When you use a public dataset, only the read-only mount mode is supported.

**Mount Storage Path**

Directly mount an OSS bucket storage path.

### **Common ossfs configurations**

In **Advanced Configuration**, you can set advanced parameters using `fs.ossfs.args`. Separate multiple parameters with a comma `,`. For more information about advanced parameters, see [ossfs 2.0](/help/en/oss/developer-reference/ossfs-2-0/). The following examples describe common scenarios:

-   **Data source remains unchanged during the task**: If the files to be read will not be modified during the process, you can configure a longer cache time to reduce the number of metadata requests. A typical scenario is reading a batch of existing files and then generating a new batch of files after processing.
    
    ```
    {
        "mountType":"ossfs",
        "fs.ossfs.args": "-oattr_timeout=7200" 
    }
    ```
    
-   **Fast read/write**: You can use a shorter metadata cache time to balance caching efficiency and data timeliness.
    
    ```
    {
        "mountType":"ossfs",
        "fs.ossfs.args": "-oattr_timeout=3, -onegative_timeout=0"
    }
    ```
    
-   **Consistent read/write for distributed tasks**: By default, ossfs updates file data based on metadata caching. You can use the following configuration to achieve a synchronized view across multiple nodes.
    
    ```
    {   
        "mountType":"ossfs",
        "fs.ossfs.args": "-onegative_timeout=0, -oclose_to_open"
    }
    ```
    
-   **OOM due to too many open files in DLC/DSW scenarios**: In DLC or DSW scenarios, high task concurrency may cause many files to be opened simultaneously, which can lead to out-of-memory (OOM) issues. You can use the following configuration to alleviate memory pressure.
    
    ```
    {
        "mountType":"ossfs",
        "fs.ossfs.args": "-oreaddirplus=false, -oinode_cache_eviction_threshold=300000"
    }
    ```
    

## OSS Connector for AI/ML

[OSS Connector for AI/ML](/help/en/oss/developer-reference/oss-connector-overview/) is a client library developed by the Alibaba Cloud OSS team for AI and machine learning scenarios. It provides a convenient data loading experience for large-scale PyTorch training, significantly reduces data transmission time and complexity, and accelerates model training. This improves efficiency by preventing unnecessary operations and data loading bottlenecks. To optimize the user experience and accelerate data access, PAI integrates the OSS Connector for AI/ML. This integration lets you use PyTorch code to efficiently read OSS objects in streaming mode.

### **Limits**

-   Official image: You can use the OSS Connector for AI/ML module only with PyTorch 2.0 or later images in a DLC job or DSW instance.
    
-   Custom image: Only PyTorch 2.0 and later versions are supported. If you are using a custom image that meets this requirement, you can run the following command to install the OSS Connector for AI/ML module.
    
    ```
    pip install -i http://yum.tbsite.net/aliyun-pypi/simple/ --extra-index-url http://yum.tbsite.net/pypi/simple/ --trusted-host=yum.tbsite.net osstorchconnector
    ```
    
-   Python version: Only Python 3.8 to 3.12 are supported.
    

### **Preparations**

1.  Configure the credential file.
    
    You can configure the credential in one of the following ways:
    
    -   You can configure the credential file for password-free access to OSS for Deep Learning Containers (DLC) jobs. For more information, see [Configure a DLC RAM role](/help/en/pai/user-guide/configure-the-dlc-ram-role). After you configure the credential file, DLC jobs can obtain a temporary access credential from Security Token Service (STS). This allows secure access to OSS or other cloud resources without explicitly configuring authentication information, which reduces the risk of key leaks.
        
    -   Configure a credential file in your code project to manage authentication information. The following is a sample configuration:
        
        **Note**
        
        Configuring AccessKey information in plaintext poses a security risk. We recommend that you use a RAM role to automatically configure the credential within a DLC instance. For more information, see [Configure a DLC RAM role](/help/en/pai/user-guide/configure-the-dlc-ram-role).
        
        When you use the OSS Connector for AI/ML interface, you can specify the path of the credential file to automatically retrieve authentication information for OSS data requests.
        
        ```
        {
          "AccessKeyId": "<Access-key-id>",
          "AccessKeySecret": "<Access-key-secret>",
          "SecurityToken": "<Security-Token>",
          "Expiration": "2024-08-20T00:00:00Z"
        }
        ```
        
        The following table describes the configuration items.
        
        **Configuration item**
        
        **Required**
        
        **Description**
        
        **Example value**
        
        AccessKeyId
        
        Yes
        
        The AccessKey ID and AccessKey secret of an Alibaba Cloud account or a RAM user.
        
        **Note**
        
        When using a temporary access credential obtained from STS to access OSS, set this to the AccessKey ID and AccessKey secret of the temporary credential.
        
        NTS\*\*\*\*
        
        AccessKeySecret
        
        Yes
        
        7NR2\*\*\*\*
        
        SecurityToken
        
        No
        
        The temporary access token. When using a temporary access credential obtained from STS to access OSS, you must set this parameter.
        
        STS.6MC2\*\*\*\*
        
        Expiration
        
        No
        
        The expiration time of the authentication information. If Expiration is empty, the authentication information never expires. After the authentication information expires, the OSS Connector re-reads the authentication information.
        
        2024-08-20T00:00:00Z
        
2.  Configure the config.json file. The following is a sample configuration:
    
    You can configure the config.json file in your code project to manage core parameters, such as the number of concurrent processes and prefetch settings. You can also define the storage location of log files. When you use the OSS Connector for AI/ML interface, you can specify the path of the config.json file. The system then automatically retrieves the concurrent processing and prefetch values for reading and outputs the relevant logs for OSS data requests to the specified log file.
    
    ```
    {
        "logLevel": 1,
        "logPath": "/var/log/oss-connector/connector.log",
        "auditPath": "/var/log/oss-connector/audit.log",
        "datasetConfig": {
            "prefetchConcurrency": 24,
            "prefetchWorker": 2
        },
        "checkpointConfig": {
            "prefetchConcurrency": 24,
            "prefetchWorker": 4,
            "uploadConcurrency": 64
        }
    }
    ```
    
    The following table describes the configuration items.
    
    **Configuration item**
    
    **Required**
    
    **Description**
    
    Example value
    
    **logLevel**
    
    Yes
    
    The log record level. The default is INFO. Valid values:
    
    -   0: Debug
        
    -   1: INFO
        
    -   2: WARN
        
    -   3: ERROR
        
    
    1
    
    **logPath**
    
    Yes
    
    The connector log path. The default path is `/var/log/oss-connector/connector.log`.
    
    /var/log/oss-connector/connector.log
    
    **auditPath**
    
    Yes
    
    The audit log for connector I/O, which records read and write requests with a latency greater than 100 ms. The default path is `/var/log/oss-connector/audit.log`.
    
    /var/log/oss-connector/audit.log
    
    **DatasetConfig**
    
    **prefetchConcurrency**
    
    Yes
    
    The number of concurrent tasks when using a dataset to prefetch data from OSS. The default value is 24.
    
    24
    
    **prefetchWorker**
    
    Yes
    
    The number of vCPUs that can be used for prefetching data from OSS using a dataset. The default value is 4.
    
    2
    
    **checkpointConfig**
    
    **prefetchConcurrency**
    
    Yes
    
    The number of concurrent tasks when using checkpoint read to prefetch data from OSS. The default value is 24.
    
    24
    
    **prefetchWorker**
    
    Yes
    
    The number of vCPUs that can be used for prefetching data from OSS using checkpoint read. The default value is 4.
    
    4
    
    **uploadConcurrency**
    
    Yes
    
    The number of concurrent tasks when using checkpoint write to upload data. The default value is 64.
    
    64
    

### **Usage**

The OSS Connector for AI/ML provides two dataset access interfaces: OssMapDataset and OssIterableDataset. These are extensions of the PyTorch [Dataset](https://pytorch.org/docs/stable/data.html#torch.utils.data.Dataset) and [IterableDataset](https://pytorch.org/docs/stable/data.html#torch.utils.data.IterableDataset) interfaces, respectively. OssIterableDataset is optimized for prefetching, which results in higher training efficiency. In contrast, the data reading order of OssMapDataset is determined by the DataLoader and supports the shuffle operation. Therefore, you can choose a dataset access interface based on the following suggestions:

-   If you have limited memory or a large amount of data, require only sequential reading, and do not need significant parallel processing, use OssIterableDataset to build your dataset.
    
-   Conversely, if you have sufficient memory, a small amount of data, and require random operations and parallel processing, use OssMapDataset to build your dataset.
    

The OSS Connector for AI/ML also provides the OssCheckpoint interface for loading and saving models. Currently, the OssCheckpoint feature can be used only in a general computing resource environment.

The following content describes how to use these three interfaces:

#### **OssMapDataset**

It supports the following three dataset access modes:

-   **Access a folder based on an OSS path prefix**
    
    This method is simpler, more intuitive, and easier to maintain and expand because you only need to specify the folder name without configuring an index file. If your OSS folder structure is as follows, you can use this method to access the dataset:
    
    ```
    dataset_folder/
        ├── class1/
        │   ├── image1.JPEG
        │   └── ...
        ├── class2/
        │   ├── image2.JPEG
        │   └── ...
    ```
    
    When using this method, you need to specify the OSS path prefix and customize the parsing method for the file stream. The following is a method for parsing and transforming image files:
    
    ```
    def read_and_transform(data):
        normalize = transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                         std=[0.229, 0.224, 0.225])
        transform = transforms.Compose([
            transforms.RandomResizedCrop(224),
            transforms.RandomHorizontalFlip(),
            transforms.ToTensor(),
            normalize,
        ])
    
        try:
            img = accimage.Image((data.read()))
            val = transform(img)
            label = data.label # file name
        except Exception as e:
            print("read failed", e)
            return None, 0
        return val, label
    dataset = OssMapDataset.from_prefix("{oss_data_folder_uri}", endpoint="{oss_endpoint}", transform=read_and_transform, cred_path=cred_path, config_path=config_path)
    ```
    
-   **Access files based on a manifest\_file**
    
    This method supports accessing data from multiple OSS buckets and provides a more flexible data management approach. If your OSS folder structure is as follows and you have a manifest\_file that manages the relationship between file names and labels, you can use this method to access the dataset.
    
    ```
    dataset_folder/
        ├── class1/
        │   ├── image1.JPEG
        │   └── ...
        ├── class2/
        │   ├── image2.JPEG
        │   └── ...
        └── .manifest
    ```
    
    The format of the manifest\_file is as follows:
    
    ```
    {'data': {'source': 'oss://examplebucket.oss-cn-wulanchabu.aliyuncs.com/dataset_folder/class1/image1.JPEG'}}
    {'data': {'source': ''}}
    ```
    
    When using this method, you need to customize the parsing method for the manifest\_file. The following is a usage example:
    
    ```
    def transform_oss_path(input_path):
        pattern = r'oss://(.*?)\.(.*?)/(.*)'
        match = re.match(pattern, input_path)
        if match:
            return f'oss://{match.group(1)}/{match.group(3)}'
        else:
            return input_path
    
    
    def manifest_parser(reader: io.IOBase) -> Iterable[Tuple[str, str, int]]:
        lines = reader.read().decode("utf-8").strip().split("\n")
        data_list = []
        for i, line in enumerate(lines):
            data = json.loads(line)
            yield transform_oss_path(data["data"]["source"]), ""
    dataset = OssMapDataset.from_manifest_file("{manifest_file_path}", manifest_parser, "", endpoint=endpoint, transform=read_and_trans, cred_path=cred_path, config_path=config_path)
    ```
    
-   **Access files based on a list of OSS URIs**
    
    You only need to specify the OSS URI to access OSS files, without configuring an index file. The following is a usage example:
    
    ```
    uris =["oss://examplebucket.oss-cn-wulanchabu.aliyuncs.com/dataset_folder/class1/image1.JPEG", "oss://examplebucket.oss-cn-wulanchabu.aliyuncs.com/dataset_folder/class2/image2.JPEG"]
    dataset = OssMapDataset.from_objects(uris, endpoint=endpoint, transform=read_and_trans, cred_path=cred_path, config_path=config_path)
    ```
    

#### OssIterableDataset

OssIterableDataset supports the same three dataset access methods as OssMapDataset. The following examples show how to use these three methods:

-   Access a folder based on an OSS path prefix
    
    ```
    dataset = OssIterableDataset.from_prefix("{oss_data_folder_uri}", endpoint="{oss_endpoint}", transform=read_and_transform, cred_path=cred_path, config_path=config_path)
    ```
    
-   Access files based on a manifest\_file
    
    ```
    dataset = OssIterableDataset.from_manifest_file("{manifest_file_path}", manifest_parser, "", endpoint=endpoint, transform=read_and_trans, cred_path=cred_path, config_path=config_path)
    ```
    
-   Access files based on a list of OSS URIs
    
    ```
    dataset = OssIterableDataset.from_objects(uris, endpoint=endpoint, transform=read_and_trans, cred_path=cred_path, config_path=config_path)
    ```
    

#### OssCheckpoint

Currently, the OssCheckpoint feature can be used only in a general computing resource environment. The OSS Connector for AI/ML supports accessing OSS model files and saving model files to OSS through OssCheckpoint. The following example shows how to use the interface:

```
checkpoint = OssCheckpoint(endpoint="{oss_endpoint}", cred_path=cred_path, config_path=config_path)

checkpoint_read_uri = "{checkpoint_path}"
checkpoint_write_uri = "{checkpoint_path}"
with checkpoint.reader(checkpoint_read_uri) as reader:
    state_dict = torch.load(reader)
    model.load_state_dict(state_dict)
with checkpoint.writer(checkpoint_write_uri) as writer:
    torch.save(model.state_dict(), writer)
```

### **Code example**

The following is a sample code for the OSS Connector for AI/ML. You can use this sample code to access OSS data:

```
from osstorchconnector import OssMapDataset, OssCheckpoint
import torchvision.transforms as transforms
import accimage
import torchvision.models as models
import torch

cred_path = "/mnt/.alibabacloud/credentials"  # The default credential path after configuring role information for DLC jobs and DSW instances.
config_path = "config.json"
checkpoint = OssCheckpoint(endpoint="{oss_endpoint}", cred_path=cred_path, config_path=config_path)
model = models.__dict__["resnet18"]()

epochs = 100  # Specify the epoch
checkpoint_read_uri = "{checkpoint_path}"
checkpoint_write_uri = "{checkpoint_path}"
with checkpoint.reader(checkpoint_read_uri) as reader:
    state_dict = torch.load(reader)
    model.load_state_dict(state_dict)


def read_and_transform(data):
    normalize = transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                     std=[0.229, 0.224, 0.225])
    transform = transforms.Compose([
        transforms.RandomResizedCrop(224),
        transforms.RandomHorizontalFlip(),
        transforms.ToTensor(),
        normalize,
    ])

    try:
        img = accimage.Image((data.read()))
        value = transform(img)
    except Exception as e:
        print("read failed", e)
        return None, 0
    return value, 0
dataset = OssMapDataset.from_prefix("{oss_data_folder_uri}", endpoint="{oss_endpoint}", transform=read_and_transform, cred_path=cred_path, config_path=config_path)
data_loader = torch.utils.data.DataLoader(
    dataset, batch_size="{batch_size}",num_workers="{num_workers"}, pin_memory=True)

for epoch in range(args.epochs):
    for step, (images, target) in enumerate(data_loader):
        # batch processing
        # model training
    # save model
    with checkpoint.writer(checkpoint_write_uri) as writer:
        torch.save(model.state_dict(), writer)
```

The key steps in the preceding code are as follows:

-   Use OssMapDataset to build a dataset from the specified OSS URI. This dataset follows the standard PyTorch Dataloader usage paradigm.
    
-   Use this dataset to build a standard Torch Dataloader. Then, perform a standard training process by iterating through the dataloader to process each batch, train the model, and save the results.
    
-   This process does not require you to mount the dataset to the container environment or store the data locally in advance, which enables on-demand data loading.
    

## **OSS SDK**

### **OSS Python SDK**

You can use the OSS Python SDK to read and write data in OSS. The procedure is as follows:

1.  Install the OSS SDK for Python. For more information, see [Installation (Python SDK V1)](/help/en/oss/installation-14).
    
2.  Configure access credentials for the OSS SDK for Python. For more information, see [Configure access credentials using OSS SDK for Python 1.0](/help/en/oss/python-configuration-access-credentials).
    
3.  Read and write OSS data.
    
    ```
    # -*- coding: utf-8 -*-
    import oss2
    from oss2.credentials import EnvironmentVariableCredentialsProvider
    
    # Configure access credentials using the RAM user's AccessKey pair obtained from environment variables.
    auth = oss2.ProviderAuth(EnvironmentVariableCredentialsProvider())
    bucket = oss2.Bucket(auth, '<Endpoint>', '<your_bucket_name>')
    # Read a complete file.
    result = bucket.get_object('<your_file_path/your_file>')
    print(result.read())
    # Read data by range.
    result = bucket.get_object('<your_file_path/your_file>', byte_range=(0, 99))
    # Write data to OSS.
    bucket.put_object('<your_file_path/your_file>', '<your_object_content>')
    # Append to an Appendable file.
    result = bucket.append_object('<your_file_path/your_file>', 0, '<your_object_content>')
    result = bucket.append_object('<your_file_path/your_file>', result.next_position, '<your_object_content>')
    ```
    
    Modify the following configuration items as required:
    
    **Configuration item**
    
    **Description**
    
    <Endpoint>
    
    The endpoint of the region in which the bucket resides. For example, if the bucket resides in the China (Hangzhou) region, set this parameter to https://oss-cn-hangzhou.aliyuncs.com. For more information about how to obtain an endpoint, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
    <your\_bucket\_name>
    
    Enter the bucket name.
    
    <your\_file\_path/your\_file>
    
    The path of the file to be read or written. Enter the full path of the object, excluding the bucket name, such as `testfolder/exampleobject.txt`.
    
    <your\_object\_content>
    
    The content to be appended. Modify this as needed.
    

### **OSS Python API**

You can use the [OSS Python API](https://aliyun-oss-python-sdk.readthedocs.io/en/stable/oss2.html?spm=a2c4g.11186623.2.14.6296104cSHSn9T) to easily store training data and models in OSS. Before you begin, ensure that you have installed the OSS Python SDK and correctly configured the access credentials. For more information, see [Installation (Python SDK V1)](/help/en/oss/installation-14) and [Configure access credentials (Python SDK V1)](/help/en/oss/python-configuration-access-credentials).

-   Load training data
    
    You can store data in an OSS bucket and place the data paths and corresponding labels in an index file within the same bucket. By customizing the DataSet, you can use the `DataLoader` API in PyTorch to read data in parallel using multiple processes. The following code provides an example:
    
    ```
    import io
    import oss2
    from oss2.credentials import EnvironmentVariableCredentialsProvider
    import PIL
    import torch
    
    class OSSDataset(torch.utils.data.dataset.Dataset):
        def __init__(self, endpoint, bucket, auth, index_file):
            self._bucket = oss2.Bucket(auth, endpoint, bucket)
            self._indices = self._bucket.get_object(index_file).read().split(',')
    
        def __len__(self):
            return len(self._indices)
    
        def __getitem__(self, index):
            img_path, label = self._indices(index).strip().split(':')
            img_str = self._bucket.get_object(img_path)
            img_buf = io.BytesIO()
            img_buf.write(img_str.read())
            img_buf.seek(0)
            img = Image.open(img_buf).convert('RGB')
            img_buf.close()
            return img, label
    
    
    # Get access credentials from environment variables. Before running this code sample, make sure the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
    auth = oss2.ProviderAuth(EnvironmentVariableCredentialsProvider())
    dataset = OSSDataset(endpoint, bucket, auth, index_file)
    data_loader = torch.utils.data.DataLoader(
        dataset,
        batch_size=batch_size,
        num_workers=num_loaders,
        pin_memory=True)
    ```
    
    The key configuration items are described below:
    
    **Key configuration**
    
    **Description**
    
    **endpoint**
    
    The endpoint of the region in which the bucket resides. For example, if the bucket resides in the China (Hangzhou) region, set this parameter to https://oss-cn-hangzhou.aliyuncs.com. For more information about how to obtain an endpoint, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
    **bucket**
    
    Enter the bucket name.
    
    **index\_file**
    
    The path of the index file.
    
    **Note**
    
    In the example, each sample in the index file is separated by a comma (,), and the sample path and label are separated by a colon (:).
    
-   Save or load a model
    
    You can use the OSS Python API to save or load PyTorch models. For more information about how to save or load PyTorch models, see [PyTorch](https://pytorch.org/tutorials/beginner/saving_loading_models.html?spm=a2c4g.11186623.2.17.6296104cSHSn9T). The following are examples:
    
    -   Save a model
        
        ```
        from io import BytesIO
        import torch
        import oss2
        from oss2.credentials import EnvironmentVariableCredentialsProvider
        
        auth = oss2.ProviderAuth(EnvironmentVariableCredentialsProvider())
        # bucket_name
        bucket_name = "<your_bucket_name>"
        bucket = oss2.Bucket(auth, endpoint, bucket_name)
        buffer = BytesIO()
        torch.save(model.state_dict(), buffer)
        bucket.put_object("<your_model_path>", buffer.getvalue())
        ```
        
        Where:
        
        -   **endpoint** is the endpoint of the region where the bucket is located. For example, for China (Hangzhou), enter https://oss-cn-hangzhou.aliyuncs.com.
            
        -   **<your\_bucket\_name>** is the name of the OSS bucket. The name cannot start with **oss://**.
            
        -   **<your\_model\_path>** is the model path. Modify this path as required.
            
    -   Load a model
        
        ```
        from io import BytesIO
        import torch
        import oss2
        from oss2.credentials import EnvironmentVariableCredentialsProvider
        
        auth = oss2.ProviderAuth(EnvironmentVariableCredentialsProvider())
        bucket_name = "<your_bucket_name>"
        bucket = oss2.Bucket(auth, endpoint, bucket_name)
        buffer = BytesIO(bucket.get_object("<your_model_path>").read())
        model.load_state_dict(torch.load(buffer))
        ```
        
        Where:
        
        -   **endpoint** is the endpoint of the region where the bucket is located. For example, for China (Hangzhou), enter https://oss-cn-hangzhou.aliyuncs.com.
            
        -   **<your\_bucket\_name>** is the name of the OSS bucket. The name cannot start with **oss://**.
            
        -   **<your\_model\_path>** is the model path. Modify this path as required.
