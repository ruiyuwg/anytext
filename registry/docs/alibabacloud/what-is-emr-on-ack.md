Alibaba Cloud E-MapReduce (EMR) on ACK provides a new way to build a big data platform. It lets you deploy open source big data services on Alibaba Cloud Container Service for Kubernetes (ACK). The service deployment and container management features of ACK reduce the O&M of underlying cluster resources, which lets you focus on your big data tasks.

## Feature comparison

Alibaba Cloud EMR provides EMR on ECS and EMR on ACK to meet the needs of different users.

-   If you use EMR on ECS, you can create an EMR on ACK cluster to run Spark and Presto jobs. This setup allows different applications to share a single ACK cluster, and computing resources can be shared across zones.
    
-   If you already run big data jobs, such as Spark and Presto jobs, on ACK clusters, EMR on ACK automates cluster deployment and management. Combining EMR on ACK with EMR Shuffle Service significantly improves the performance of Spark jobs.
    

![ECS-on-ACK](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9470331671/p611648.png)

**Type**

**Description**

EMR on ECS

EMR deploys components of the open source Hadoop ecosystem on ECS instances and starts them as services. You can manage the cluster's ECS instances and services in the EMR console.

You submit your big data jobs to the EMR cluster.

EMR on ACK

First, deploy an ACK cluster. After the ACK cluster is ready, EMR deploys big data service components based on ACK resources and runs them in containers.

## Advantages of EMR on ACK

**Advantage**

**Description**

Cost-effective

You can run big data jobs on existing ACK clusters with simple configurations. This avoids the cost of purchasing separate ACK clusters for big data services.

You can reuse idle resources on an existing ACK cluster to run EMR jobs, such as Spark and Presto jobs, with a single click. Big data and online applications can share cluster resources.

In mixed-workload scenarios with both online and offline tasks, resources are fully utilized. Big data and online applications share cluster resources, which enables peak-load shifting.

Simplified O&M

A single O&M and cluster management system covers multiple services, including big data and online applications. This simplifies O&M.

Optimized user experience

The EMR platform supports two Infrastructure as a Service (IaaS) models: EMR on ECS and EMR on ACK. You can switch between the two models seamlessly.

The rapid resource delivery of ACK and Elastic Container Instance (ECI) shortens the time to get elastic computing resources. This helps you handle peak computing demands.

You can adjust the Spark version at the job level. This makes it easy to try new features and meet different business version requirements.

Deep integration

EMR on ACK uses a cloud-native data lake architecture. It uses Alibaba Cloud ACK for computing, which allows for unlimited scaling of computing resources. It uses Alibaba Cloud Object Storage Service (OSS) for storage, which separates storage from compute. It uses Data Lake Formation (DLF) for metadata to help you build your data lake.
