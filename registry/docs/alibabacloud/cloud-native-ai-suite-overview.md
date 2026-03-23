The cloud-native AI suite is a Container Service for Kubernetes (ACK) solution powered by cloud-native AI technologies and products. The cloud-native AI suite can help you fully utilize cloud-native architectures and technologies to quickly develop an AI-assisted production system in ACK. The cloud-native AI suite also provides full-stack optimization for AI or machine learning applications and systems. This topic describes the architecture, key features, and use scenarios of the cloud-native AI suite. This topic also describes how to work with the cloud-native AI suite.

## **Architecture**

The cloud-native AI suite uses Container Service for Kubernetes (ACK) as the base. It centrally manages heterogeneous resources and provides standard Kubernetes clusters and APIs to run key components, manage and maintain resources, schedule and scale AI jobs, accelerate data access, orchestrate workflows, integrate big data services, manage the lifecycle of AI jobs, manage AI artifacts, and perform O&M tasks. The cloud-native AI suite also optimizes AI DevOps. It supports AI dataset management, and allows you to develop, train, and evaluate AI models and deploy models as inference services.

You can use key components through the CLI, SDKs for different programming languages, and the console. With the help of these components and tools, you can build, extend, or customize your AI production systems on demand. The cloud-native AI suite also allows you to integrate Alibaba Cloud AI services, open source AI frameworks, and third-party AI capabilities by using the same components and tools.

In addition, the cloud-native AI suite supports seamless integration with Platform for AI to help you develop a high-performance, elastic one-stop AI platform. You can use services such as Data Science Workshop (DSW), Deep Learning Containers (DLC), and Elastic Algorithm Service (EAS) provided by PAI. ACK can greatly improve the elasticity and efficiency of AI model development, training, and inference for the preceding services. The cloud-native AI suite also allows you to deploy Lightweight Platform for AI in ACK clusters with a few clicks to make AI development much easier. You can integrate algorithms and engines that are deeply optimized by PAI based on years of experience into containerized applications to greatly accelerate model training and inference. For more information about Platform for AI, see [What is PAI?](/help/en/pai/product-overview/what-is-machine-learning-platform-for-ai/)

The following figure shows the architecture of the cloud-native AI suite.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8333761471/CAEQLBiBgMCdy9m3hxkiIDE2YmI3N2IyMDNhMTRiNmU5YTQ5MWFjOGQzZWQ4YzM24106618_20231206181046.980.svg)

## **Key features**

The cloud-native AI suite uses Kubernetes as the base, and provides full-stack support and optimization for AI and machine learning applications and systems. The following table describes the key features provided by the cloud-native AI suite. The following table describes the key features provided by the cloud-native AI suite.

**Feature**

**Description**

**References**

Centralized management of heterogeneous resources

-   Support for heterogeneous resources: In addition to the resources supported by ACK, the cloud-native AI suite also supports heterogeneous resources such as NVIDIA GPUs, NPUs, FPGAs, VPUs, and RDMA. You can use the cloud-native AI suite to centrally schedule, manage, and maintain these resources.
    
-   Monitoring and maintenance: The cloud-native AI suite monitors GPUs in multiple dimensions and displays visualized information about the allocation, use, and health status of GPUs.
    
-   Resource utilization improvement: The cloud-native AI suite supports GPU sharing, GPU memory isolation, and topology-aware GPU scheduling to help you improve resource utilization.
    

-   [Overview of ACK clusters for heterogeneous computing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-5/)
    
-   [Enable GPU monitoring for an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-gpu-monitoring-for-a-cluster)
    
-   [GPU sharing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cgpu-overview/)
    

AI job scheduling

-   Multiple scheduling policies: The ACK scheduler extends the Kubernetes-native scheduling framework for batch jobs such as AI distributed training jobs. A variety of batch scheduling policies are supported, including gang scheduling (coscheduling), First In First Out (FIFO) scheduling, capacity scheduling, fair sharing, and bin packing and spread.
    
-   Job queues: The cloud-native AI suite provides priority-based job queues to allow you to customize the priorities of jobs and configure elastic quotas for tenants.
    
-   Workflow orchestration: You can integrate Kubeflow Pipelines or Argo Workflows to orchestrate workflows for complex AI jobs.
    

-   [GPU sharing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cgpu-overview/)
    
-   [Scheduling of AI workloads](/help/en/ack/cloud-native-ai-suite/user-guide/ai-workload-scheduling)
    

Elastic scheduling

Elastic scheduling for distributed deep learning jobs: The cloud-native AI suite dynamically scales the number of workers and the number of nodes without affecting the model training and model precision. The cloud-native AI suite adds workers to accelerate training when the cluster has idle resources and releases workers when the cluster cannot provide sufficient resources. This ensures that model training is not affected by resource shortages. This mode greatly improves the overall resource utilization of the cluster and helps avoid node failures. This mode also reduces the waiting time for launching jobs.

[Kubernetes-based elastic training](/help/en/ack/cloud-native-ai-suite/user-guide/using-horovod-for-elastic-training-based-on-kubernetes)

AI data orchestration and acceleration

Fluid: introduces the dataset concept. It provides training jobs with a data abstraction and provides a data orchestration and acceleration platform to help you manage datasets, enforce access control, and accelerate data access. ack-fluid can ingest data from different storage services and aggregate the data into the same dataset. You can also connect ack-fluid to on-cloud or on-premises storage services in a hybrid cloud environment to manage data and accelerate data access. In addition, ack-fluid can be extended to support a variety of distributed cache services. You can configure a cache service for each dataset and use features such as dataset warmup, cache capacity monitoring, and elastic scaling to greatly reduce the overheads of remotely ingesting data for training jobs and improve the efficiency of GPU computing.

-   [Elastic datasets](/help/en/ack/cloud-native-ai-suite/user-guide/overview-of-fluid/)
    
-   [Accelerate data access in serverless cloud computing](/help/en/ack/cloud-native-ai-suite/user-guide/overview-of-data-access-in-serverless-cloud-computing/)
    

AI job lifecycle management

-   Arena: simplified AI production process, covering key aspects such as data management, model development, training, and inference service deployment, while abstracting away the complex details of resource scheduling, environment configuration, and monitoring. Arena is compatible with mainstream AI technology stacks like TensorFlow and PyTorch. It also supports multi-language SDKs for further development. ack-arena is optimized to simplify operations in the job management tool Arena. You can install ack-arena in the Container Service for Kubernetes (ACK) console with a few clicks to deploy Arena in your ACK clusters in an efficient manner.
    
-   Visualized O&M: provides easy-to-use dashboards and a developer console to allow you to view the status of your cluster and quickly submit training jobs.
    

-   [Configure the Arena client](/help/en/ack/cloud-native-ai-suite/user-guide/install-arena)
    
-   [Access AI Dashboard](/help/en/ack/cloud-native-ai-suite/user-guide/access-ai-dashboard)
    
-   [Log on to AI Developer Console](/help/en/ack/cloud-native-ai-suite/user-guide/log-on-to-ai-developer-console)
    

## **Use scenarios**

The cloud-native AI suite is suitable for continuously improving the utilization of heterogeneous resources and efficiently handling heterogeneous workloads such as AI jobs.![使用场景..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0992759861/p675014.png)

### **Scenario 1: Continuously improve the utilization of heterogeneous resources**

The cloud-native AI suite provides an abstraction of heterogeneous resources in the cloud, including computing resources (such as CPUs, GPUs, NPUs, VPUs, and FPGAs), storage resources (OSS, NAS, CPFS, and HDFS), and network resources (TCP and RDMA). You can use the cloud-native AI suite to centrally manage, maintain, and allocate these resources, and continuously improve the resource utilization based on resource scaling and software/hardware optimization.

### **Scenario 2: Efficiently handle heterogeneous workloads such as AI jobs**

The cloud-native AI suite is compatible with mainstream open source engines such as TensorFlow, PyTorch, DeepSpeed, Horovod, Spark, Flink, Kubeflow, Kserve, vLLM, and Triton Inference Server, and also supports self-managed engines and runtimes. The cloud-native AI suite also continuously optimizes training jobs in terms of performance, efficiency, and costs, optimizes the user experience of development and maintenance, and improves the engineering efficiency. The cloud-native AI suite also continuously optimizes training jobs in terms of performance, efficiency, and costs, optimizes the user experience of development and maintenance, and improves the engineering efficiency.

## **User roles**

The cloud-native AI suite defines the following user roles.

**Role**

**Description**

O&M administrator

Responsible for building AI infrastructure and daily administration. For more information, see [Deploy the cloud-native AI suite](/help/en/ack/cloud-native-ai-suite/user-guide/deploy-the-cloud-native-ai-suite#section-2al-4w3-dpd), [Manage users](/help/en/ack/cloud-native-ai-suite/user-guide/user-management-11#task-2038866), [Manage elastic quota groups](/help/en/ack/cloud-native-ai-suite/user-guide/manage-elastic-quota-groups#task-2038871), and [Manage datasets](/help/en/ack/cloud-native-ai-suite/user-guide/manage-datasets#task-2038868).

Algorithm engineer and data scientist

Uses the cloud-native AI suite to manage jobs. For more information, see [Model training in Kubernetes clusters](https://www.alibabacloud.com/help/en/container-service-for-kubernetes/latest/model-training), [Manage models in MLflow Model Registry](/help/en/ack/cloud-native-ai-suite/user-guide/manage-models-in-mlflow-model-registry), and [Analyze and optimize models](/help/en/ack/cloud-native-ai-suite/user-guide/model-analysis-optimization).

## **Work with the cloud-native AI suite**

Follow the steps in the following figure to use the cloud-native AI suite based on the user role that you assume.

![使用流程..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0992759861/p675219.png)

**Step**

**Description**

**Console**

**1\. Preparations**

(O&M administrator)

**Create an Alibaba Cloud account**

Create an Alibaba Cloud account and complete real-name verification. For more information, see [Create an Alibaba Cloud account](/help/en/cloud-migration-guide-for-beginners/latest/create-an-alibaba-cloud-account).

[Alibaba Cloud signup page](https://account.alibabacloud.com/register/intl_register.htm)

**Create an ACK cluster**

Activate ACK and create an ACK cluster. We recommend that you use the following cluster configurations. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).

-   Cluster type: ACK Pro cluster, ACK Serverless Pro cluster, or ACK Edge Pro cluster.
    
-   Kubernetes version: 1.18 or later.
    
-   Region: the region in which you activated ACK.
    

[ACK console](https://cs.console.alibabacloud.com)

(Optional) **Configure cluster dependencies and create dependent cloud resources**

-   Install and configure AI Dashboard and AI Developer Console:
    
    -   Install the Prometheus agent and Logtail in the ACK cluster.
        
    -   Create a policy for the cluster in the Resource Access Management (RAM) console. For more information, see [Authorization](https://www.alibabacloud.com/help/en/container-service-for-kubernetes/latest/user-guide-for-kubernetes-clusters-authorization-management).
        
    -   If you want to use an internal domain name or a public domain name to access AI Dashboard and AI Developer Console, install the NGINX Ingress controller and enable internal access or Internet access for the controller.
        
    -   To use a pre-installed MySQL database as the storage, make sure that the nodes in the cluster are attached with Enterprise SSDs (ESSDs).
        
    -   To use an ApsaraDB RDS database as the storage, you need to purchase an ApsaraDB RDS instance and create a Secret named kubeai-rds in the kube-ai namespace.
        
    
    For more information, see [Install and configure AI Dashboard and AI Developer Console](/help/en/ack/cloud-native-ai-suite/user-guide/deploy-the-cloud-native-ai-suite#section-93j-4nk-ojr).
    
-   Install and configure Kubeflow Pipelines:
    
    -   To use pre-installed MinIO as the storage, make sure that the nodes in the cluster are attached with ESSDs. For more information, see [Install and configure Kubeflow Pipelines](/help/en/ack/cloud-native-ai-suite/user-guide/deploy-the-cloud-native-ai-suite#section-d10-34d-tmm).
        
    -   To use Object Storage Service (OSS) as the storage, you need to activate OSS, purchase an OSS bucket, and then create a Secret named kubeai-oss in the kube-ai namespace. For more information, see [Activate OSS](/help/en/oss/getting-started/activate-oss) and [Install and configure Kubeflow Pipelines](/help/en/ack/cloud-native-ai-suite/user-guide/deploy-the-cloud-native-ai-suite#section-d10-34d-tmm).
        

**2\. System and environment**

(O&M administrator)

**Activate and install the cloud-native AI suite**

1.  Go to the [activation page](https://common-buy-intl.alibabacloud.com/?commodityCode=csk_ai_public_intl) to activate the cloud-native AI suite.
    
2.  Install the cloud-native AI suite and relevant components. For more information, see [Deploy the cloud-native AI suite](/help/en/ack/cloud-native-ai-suite/user-guide/deploy-the-cloud-native-ai-suite). For more information about the components that are used to install the cloud-native AI suite, see [Component introduction and release notes](/help/en/ack/cloud-native-ai-suite/product-overview/component-introduction-and-release-note/#1cb58d40fd51z).
    

[ACK console](https://cs.console.alibabacloud.com)

**Manage users and quotas**

1.  Add quota nodes and set resource quotas.
    
2.  Create users and user groups, allocate resources, and associate quota groups.
    
    For more information, see [Manage users](/help/en/ack/cloud-native-ai-suite/user-guide/user-management-11), [Manage user groups](/help/en/ack/cloud-native-ai-suite/user-guide/manage-user-groups), and [Manage elastic quota groups](/help/en/ack/cloud-native-ai-suite/user-guide/manage-elastic-quota-groups).
    
3.  Generate a kubeconfig file and a logon token for a newly created user. For more information, see [Generate the kubeconfig file and logon token of the newly created user](/help/en/ack/cloud-native-ai-suite/user-guide/user-management-11#section-dra-f4n-nhg).
    

[AI Dashboard](/help/en/ack/cloud-native-ai-suite/user-guide/access-ai-dashboard) and kubectl

**Note**

The AI Console (including AI Dashboard and AI Developer Console) provided by Alibaba Cloud was gradually rolled out through a whitelist mechanism starting January 22, 2025.

-   **Existing deployments**: If you have already deployed AI Dashboard or AI Developer Console before this date, your current usage remains unaffected.
    
-   **New installations**: Users not whitelisted can install and configure the AI Console through the open-source community. For detailed open-source configuration instructions, see [Open-source AI Console](https://github.com/AliyunContainerService/data-on-ack).
    

**Prepare data**

1.  Create datasets.
    
2.  (Optional) Accelerate datasets. For more information, see [Elastic datasets](/help/en/ack/cloud-native-ai-suite/user-guide/overview-of-fluid/).
    

(Algorithm engineer and data scientist)

The cloud-native AI suite allows algorithm engineers and data scientists to use Arena, the web console, and AI Developer Console to develop models, train models, deploy inference services, and manage jobs.

-   **Use the CLI or console**
    
    Install the Arena CLI or AI Developer Console. For more information, see [Configure the Arena client](/help/en/ack/cloud-native-ai-suite/user-guide/install-arena) and [Install and configure AI Dashboard and AI Developer Console](/help/en/ack/cloud-native-ai-suite/user-guide/deploy-the-cloud-native-ai-suite#section-93j-4nk-ojr).
    
    **Note**
    
    The AI Console (including AI Dashboard and AI Developer Console) provided by Alibaba Cloud was gradually rolled out through a whitelist mechanism starting January 22, 2025.
    
    -   **Existing deployments**: If you have already deployed AI Dashboard or AI Developer Console before this date, your current usage remains unaffected.
        
    -   **New installations**: Users not whitelisted can install and configure the AI Console through the open-source community. For detailed open-source configuration instructions, see [Open-source AI Console](https://github.com/AliyunContainerService/data-on-ack).
        
    
-   **Use Lightweight** Platform for AI
    

[ACK console](https://cs.console.alibabacloud.com)

**3\. Model training and deployment**

(Algorithm engineer and data scientist)

When you use Arena or AI Developer Console, you can perform the following steps to train and deploy models:

**Develop models**

1.  Create and use a Jupyter notebook. For more information, see [Create and use a Jupyter notebook](/help/en/ack/cloud-native-ai-suite/user-guide/create-and-use-a-jupyter-notebook).
    
2.  Use the Jupyter notebook to develop and test a model.
    
3.  Use the Jupyter notebook to submit code to a Git repository.
    

**Train models**

1.  Use AI Developer Console or Arena to submit a training job.
    
2.  View the logs or TensorBoard data of the job.
    
    For more information, see [Model training](https://www.alibabacloud.com/help/en/container-service-for-kubernetes/latest/model-training).
    

**Manage models**

1.  Create a model and associate it with a training job.
    
2.  Use AI Developer Console or the Arena CLI to manage the model. For more information, see [Manage models in MLflow Model Registry](/help/en/ack/cloud-native-ai-suite/user-guide/manage-models-in-mlflow-model-registry).
    

**Deploy models**

Deploy a model as an inference service. For more information, see [Deploy AI services](https://www.alibabacloud.com/help/en/container-service-for-kubernetes/latest/model-based-reasoning).

[AI Developer Console](/help/en/ack/cloud-native-ai-suite/user-guide/log-on-to-ai-developer-console) and Arena

Use Lightweight Platform for AI to develop, train, and deploy models.

N/A

**4\. Monitoring and maintenance**

(O&M administrator)

**Monitor and maintain resources**

View the dashboards of various resources, including clusters, nodes, training jobs, and resource quotas. For more information, see [Work with cloud-native AI dashboards](/help/en/ack/cloud-native-ai-suite/user-guide/work-with-ai-dashboards).

[AI Dashboard](/help/en/ack/cloud-native-ai-suite/user-guide/access-ai-dashboard)

**Manage quotas**

-   Create, query, update, and delete quota groups and resources in quota groups.
    
-   Change resource types.
    
    For more information, see [Manage elastic quota groups](/help/en/ack/cloud-native-ai-suite/user-guide/manage-elastic-quota-groups).
    

**Manage users**

Create, query, update, and delete users or user groups. For more information, see [Manage users](/help/en/ack/cloud-native-ai-suite/user-guide/user-management-11) and [Manage user groups](/help/en/ack/cloud-native-ai-suite/user-guide/manage-user-groups).

**Manage datasets**

-   Create, query, update, and delete datasets and data. For more information, see [Manage datasets](/help/en/ack/cloud-native-ai-suite/user-guide/manage-datasets).
    
-   Accelerate datasets. For more information, see [Elastic datasets](/help/en/ack/cloud-native-ai-suite/user-guide/overview-of-fluid/).
    

**Manage elastic jobs**

View elastic jobs and job details. For more information, see [View elastic jobs](/help/en/ack/cloud-native-ai-suite/user-guide/view-elastic-jobs).

**5\. Billing and payments**

(O&M administrator)

**Starting** **00:00:00 (UTC+8)** on **June 6**, **2024**, the cloud-native AI suite is **free of charge**. For more information, see [Billing of the cloud-native AI suite](/help/en/ack/cloud-native-ai-suite/product-overview/cloud-native-ai-suite-free-open-instructions).

[Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview)

**Generate bills on a daily basis**

-   Query bills.
    
-   Query billing details.
    
-   Query resource usage details.
    
-   Query service usage and prices.
    
    For more information, see [Billing of the cloud-native AI suite](/help/en/ack/cloud-native-ai-suite/product-overview/cloud-native-ai-suite-free-open-instructions).
    

## **Billing rules**

For more information, see [Billing of the cloud-native AI suite](/help/en/ack/cloud-native-ai-suite/product-overview/cloud-native-ai-suite-free-open-instructions).

## **References**

**Reference**

**Description**

-   [Cloud-native AI suite developer guide](/help/en/ack/cloud-native-ai-suite/getting-started/cloud-native-ai-component-set-user-guide)
    
-   [Cloud-native AI Suite O&M guide](/help/en/ack/cloud-native-ai-suite/getting-started/cloud-native-ai-component-set-operations-and-maintenance-guide)
    

Helps you quickly apply the cloud-native AI suite to your development and O&M work through a few practices.

[Release notes](/help/en/ack/product-overview/release-notes)

Describes the release notes for the cloud-native AI suite.
