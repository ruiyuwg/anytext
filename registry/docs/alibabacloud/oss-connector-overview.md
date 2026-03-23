Object Storage Service (OSS) Connector for AI/ML is a Python library that is used to efficiently access and store OSS data in PyTorch training jobs.

## Benefits

**Item**

**Do not use OSS Connector for AI/ML**

**Use OSS Connector for AI/ML**

Performance

You must manually optimize performance, which may be inefficient.

OSS Connector for AI/ML automatically optimizes the performance of OSS data download and checkpoint storage.

Data loading method

You must download data in advance, which increases costs and management workloads.

OSS Connector for AI/ML supports stream load to reduce cost and management complexity.

Data access

You must read and write data by using adapters, which increases access complexity.

OSS Connector for AI/ML directly reads and writes data in OSS to simplify access.

Configuration difficulty

You must compile code, which makes configuration difficult.

OSS Connector for AI/ML provides simple configuration items to improve development efficiency.

## **How it works**

The following figure shows how OSS Connector for AI/ML runs PyTorch training jobs by using data in OSS.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3063333371/CAEQLhiBgICxvIC9kxkiIDQxODZjMWI2YmU3YTQ5OGI4ZGU0MWI4NzY3MDE1ZDcz4668501_20240909105025.238.svg)

## **Feature description**

The following table describes the main features of OSS Connector for AI/ML.

**Item**

**Feature**

**Class**

**Method**

Map-style dataset

Suitable for random access to facilitate quick access to specific data during training.

[OssMapDataset](/help/en/oss/developer-reference/ossmapdataset#5dd31ec043brt)

The [OssMapDataset](/help/en/oss/developer-reference/ossmapdataset#5dd31ec043brt) and [OssIterableDataset](/help/en/oss/developer-reference/ossiterabledataset#ed261c6c8erbs) classes provide the same methods to build a dataset.

-   from\_prefix()
    
    Use the OSS\_URI prefix to build a dataset. This method is suitable for scenarios in which the storage paths of OSS data have uniform rules.
    
-   from\_objects()
    
    Use the OSS\_URI list in OSS to build a dataset. This method is suitable for scenarios in which the storage paths of OSS data are clear but scattered.
    
-   from\_manifest\_file()
    
    Create a manifest file and use the manifest file to build a dataset. This method is suitable for scenarios in which the dataset that you want to create contains a large number of files, such as tens of millions, the dataset is frequently loaded, and [data indexing](/help/en/oss/user-guide/scalar-retrieval/) is enabled for the bucket.
    

Iterable-style dataset

Suitable for sequential streaming reading and allows you to efficiently process a large number of continuous data streams.

[OssIterableDataset](/help/en/oss/developer-reference/ossiterabledataset#ed261c6c8erbs)

Checkpoint API operations

Loads checkpoints from OSS during model training and saves checkpoints to OSS after periodic model training. This way, workflow is simplified.

[OssCheckpoint](/help/en/oss/developer-reference/checkpoint#1b5274a39272r)

-   OssCheckpoint()
    
    Initialize an OssCheckpoint object that is used to read and write checkpoints during model training.
    
-   reader()
    
    Read checkpoints from OSS.
    
-   writer()
    
    Write checkpoints to OSS.
    

## Procedure

-   Before you access and store data in OSS in a PyTorch training job, you must install and configure OSS Connector for AI/ML. For more information, see [Install OSS Connector for AI/ML](/help/en/oss/developer-reference/install-oss-connector) and [Configure OSS Connector for AI/ML](/help/en/oss/developer-reference/oss-connector-configuration).
    
-   After you install and configure OSS Connector for AI/ML, you can perform the following operations in Pytorch training jobs:
    
    -   Use OssMapDataset to build a map-style dataset suitable for random reading. For more information, see [Use data in OSS to build a map dataset suitable for random reading](/help/en/oss/developer-reference/ossmapdataset).
        
    -   Use OssIterableDataset to build an iterable-style dataset suitable for sequential streaming reading. For more information, see [Use data in OSS to build an iterable dataset suitable for sequential streaming reading](/help/en/oss/developer-reference/ossiterabledataset).
        
    -   Use OssCheckpoint to store and access checkpoints. For more information, see [Store and access checkpoints in OSS](/help/en/oss/developer-reference/checkpoint).
        
    -   **Note**
        
        Data in map-style and iterable-style datasets and checkpoints is of the same type. For more information about the supported methods of the data type, see [Data type in OSS Connector for AI/ML](/help/en/oss/developer-reference/dataobject).
        

## **Use cases**

-   If you want to quickly learn how to use OSS data to run a PyTorch training job and save the training results to OSS, we provide a demo that uses OSS Connector for AI/ML to train a handwritten digit recognition model. For more information, see [Get started with OSS Connector for AI/ML](/help/en/oss/user-guide/oss-connector-for-ai-ml-quick-start).
    
-   To further improve the performance of OSS Connector for AI/ML, we recommend that you use the accelerated endpoint of an OSS accelerator instead of the OSS internal endpoint. For more information about the performance comparison between OSS Connector for AI/ML that uses an OSS internal endpoint and OSS Connector for AI/ML that uses the accelerated endpoint of an OSS accelerator, see [Performance testing](/help/en/oss/developer-reference/performance-test).
    
-   If you want to use OSS Connector for AI/ML in a containerized environment, you can use a Docker image that contains an OSS Connector for AI/ML environment. For more information about how to build a Docker image, see [Build a Docker image that contains an OSS Connector for AI/ML environment](/help/en/oss/developer-reference/use-oss-connector-for-ai-ml-in-a-containerized-environment#2c57f14451l7w).
