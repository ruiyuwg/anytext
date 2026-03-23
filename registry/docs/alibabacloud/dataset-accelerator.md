Dataset Accelerator (DatasetAcc) is a Platform as a Service (PaaS) offering by Alibaba Cloud that accelerates datasets for AI workloads in the cloud. In machine learning training scenarios, DatasetAcc pre-analyzes and processes your training datasets to provide a unified access acceleration solution for various cloud-native training engines, which improves overall training efficiency.

## Architecture

The following figure shows the architecture of Dataset Accelerator.![使用数据集加速器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2440467171/p575258.png)

## Limits

Before you use Dataset Accelerator, note the following limits.

-   Only datasets stored on Alibaba Cloud can be accelerated, such as datasets in Object Storage Service (OSS) or Cloud Parallel File System (CPFS).
    
-   The datasets must be unencrypted and stored on Alibaba Cloud.
    
-   Data in a dataset accelerator is read-only. Dynamic data writes are not supported.
    
-   A single dataset accelerator instance can accelerate datasets up to 100 TB in size.
    

## Billing

Dataset Accelerator is billed based on the purchased capacity and duration. For more information, see [Billing of Dataset Accelerator (DatasetAccelerator)](/help/en/pai/billing-of-dataset-accelerator#concept-2261909).

## Features

-   Optimized training for large numbers of small files.
    
    Dataset Accelerator improves performance in training scenarios that involve large numbers of small files, such as images, text, and videos. It pre-packages and processes data based on the model type and network structure used in deep learning training.
    
-   Fully managed and out-of-the-box.
    
    It is a fully managed cloud service that is simple to operate and ready to use after you enable it.
    
-   Elastic and scalable.
    
    It leverages the capabilities of the Infrastructure as a Service (IaaS) layer to provide rapid resource scaling and elasticity.
    
-   Shared access.
    
    Multiple training clusters can share datasets within Dataset Accelerator for training.
    
-   Secure multi-tenancy.
    
    It provides multi-tenant data isolation to ensure data security between different users.
    

## Terms

Before you use Dataset Accelerator, understand the following basic concepts.

-   Dataset accelerator instance (Instance)
    
    An instance is the billing and management unit for Dataset Accelerator. When you create a subscription instance, the system reserves the corresponding cloud resources and billing starts immediately. For pay-as-you-go instances, you are charged based on the usage of acceleration slots.
    
-   Acceleration slot (Slot)
    
    A slot is a service unit for a single dataset. You can create multiple acceleration slots in one dataset accelerator instance. Each slot accelerates one dataset. This allows multiple deep learning training tasks to use different datasets for simultaneous training.
    
-   Relationship between an instance and a slot
    
    You can create multiple dataset accelerator instances. For each instance, you can create multiple acceleration slots of different capacities. The ratio of an instance to its slots is 1:n. Each acceleration slot is attached to one dataset storage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3391613771/CAEQUxiBgMDVi.uL3hkiIGJiMWY2Yjg1MGE1NzRiN2ZiZWI1ZWY1NjcxZGQzMGRl3963382_20230830144006.372.svg)
    

## Procedure

The procedure for using Dataset Accelerator includes the following steps.

1.  [Create and manage dataset accelerator instances](/help/en/pai/user-guide/create-and-manage-a-dataset-accelerator#task-2256276)
    
    Create dataset accelerator instances based on your business needs, team size, training frequency, and dataset sizes. A single instance can support the acceleration of multiple datasets for different training tasks using multiple acceleration slots.
    
    Dataset Accelerator consumes additional cloud resources. To ensure that resources are available for accelerating important training tasks, we recommend that you use the subscription billing method to reserve resources for your dataset accelerator instances in advance.
    
2.  [Create and manage acceleration slots](/help/en/pai/user-guide/create-and-manage-a-slot#task-2256277)
    
    In a selected dataset accelerator instance, create an acceleration slot based on the size of the dataset used for training. An instance can contain multiple slots. The total storage of all slots cannot exceed the capacity of the instance.
    
    When you create a slot, the system pre-processes the associated dataset based on factors such as data type, data size, and the training framework and model. After the initialization is complete, Dataset Accelerator provides interfaces that your training tasks can use directly.
    
3.  [Use Dataset Accelerator on the PAI platform](/help/en/pai/use-cases/use-dataset-accelerator#main-2304351)
    
    When you create a dataset on the PAI platform, you can enable dataset acceleration. You can then use the accelerated dataset when you create a Data Science Workshop (DSW) instance or submit a DLC job to improve data read efficiency.
