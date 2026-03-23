DSW is a cloud-based IDE supporting Notebook, VSCode, and Terminal environments with built-in PyTorch and TensorFlow images, heterogeneous computing resources, and OSS/NAS/CPFS dataset mounting.

## **Product overview**

DSW development environment:

![dsw3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4621325471/p944726.png)

## **Benefits**

-   **Flexible and easy to use**: Integrates multiple development environments and supports images for open-source frameworks like PyTorch and TensorFlow. Provides various heterogeneous computing resources, including public resources and dedicated resources (general-purpose computing resources or [Lingjun resources](/help/en/pai/user-guide/create-and-manage-intelligent-computing-lingjun-resources)).
    
-   **End-to-end platform**: Provides tools such as [PAI-DLC](/help/en/pai/user-guide/what-is-dlc) for distributed training and [PAI-EAS](/help/en/pai/user-guide/overview-2) for model online services. This covers the entire AI development lifecycle, from data processing and debugging to model training and deployment.
    
-   **Fine-grained management**: Supports lifecycle management configurations such as `scheduled shutdown` and `idle shutdown` to reduce costs. `Workspace` feature enables global resource allocation and reclamation.
    
-   **Practical, scenario-based examples**: Provides tutorials and examples in cutting-edge fields like LLM and AIGC for quick onboarding or as project foundations.
    

## Core features

### Create and manage

-   [Create a DSW instance](/help/en/pai/user-guide/create-and-manage-dsw-instances): Select instance resource type, mount datasets, and use custom images when creating DSW instances.
    
-   [Access and manage DSW instances from console](/help/en/pai/user-guide/access-dsw-instance): Access DSW features and perform common operations, such as stopping, releasing, or modifying instance configurations.
    
-   [Configure instance RAM role](/help/en/pai/user-guide/configure-dsw-instance-ram-roles): Associate RAM roles to access cloud resources using temporary STS credentials. Eliminates need for long-term `AccessKeys` and reduces key leakage risk.
    

### **Development environment**

-   [Manage third-party libraries](/help/en/pai/user-guide/manage-third-party-libraries): Manage and install third-party Python libraries and software.
    
-   [Visualize training with TensorBoard](/help/en/pai/user-guide/tensorboard-training-visualization): Use TensorBoard plugin to visualize metrics and logs during model training.
    
-   [Deploy a model as an online service](/help/en/pai/user-guide/model-deployment#ef1f6fe277aen): Deploy models as online services using PAI-EAS for application integration with auto scaling, version control, and resource monitoring.
    

### Data operations

-   [Mount a dataset, OSS, NAS, or CPFS](/help/en/pai/user-guide/read-and-write-dataset-data): Mount datasets or paths from OSS, NAS, or CPFS to expand storage, persist data, or access data files.
    
-   [Read and write data in OSS](/help/en/pai/user-guide/read-data-from-and-write-data-to-oss): Access OSS files within DSW instances using API or SDK.
    
-   [Upload and download files](/help/en/pai/user-guide/file-transfer-and-processing): Transfer data and models between local machines and instances.
    

### **Network configuration**

-   [Connect remotely via SSH](/help/en/pai/user-guide/dsw-direct-connection): Remote SSH connection provides local-like development experience while leveraging DSW computing resources.
    
-   [Improve internet access speed with Internet NAT Gateway](/help/en/pai/user-guide/configure-a-dsw-instance-to-access-the-internet-through-a-private-nat-gateway): Create Internet NAT gateway and bind EIP to VPC where instances reside to improve network speed.
    
-   [Access instance services over internet](/help/en/pai/user-guide/custom-services-access-configurations): Access services running on instances from within VPC or over internet for model testing and validation.
    
-   [Pull overseas models or container images across domains](/help/en/pai/user-guide/cross-domain-pull-overseas-model-or-container-image-in-dsw): Configure Global Accelerator for DSW to accelerate pulling container images or models from overseas sources, such as `docker.io` or `huggingface.co`.
    

## Billing

### **Compute instances**

Choose public resources or dedicated resources (general-purpose computing resources or Lingjun resources) for instance type. Each has different billing methods.

**Billable item**

**Pricing model**

**Billing entity**

**Billing rules**

**Termination rule**

Public resources

Pay-as-you-go

Duration of DSW instance service (duration for which public resources are occupied).

Public resource instances are billed based on service duration.

**Important**

DSW instances are charged per minute, and bills are generated hourly. Due to data aggregation and processing, bills may be delayed by 2–3 hours. Refer to final invoice for accurate information.

Stop or delete DSW instance.

**Important**

Stop instance manually or configure scheduled shutdown. For more information, see [Manage DSW instances](/help/en/pai/user-guide/manage-dsw-instances#351d186398laa).

Dedicated resources (general computing resources or Lingjun resources)

Subscription

Quantity and subscription duration of purchased node specifications.

Dedicated resources are purchased on subscription basis. Charges are based on quantity and subscription duration of purchased node specifications. For more information, see [Billing of AI computing resources](/help/en/pai/ai-computing-resource-billing-description).

Unsubscribe from resources.

### **System disks**

**Pricing model**

**Billable entity**

**Billing rules**

**Termination rule**

Pay-as-you-go

System disk capacity and usage duration.

Free quota is provided based on instance type and specifications. Capacity expansion is billed based on additional size and usage duration.

Delete DSW instance.

For more information about billing, see [Billing of DSW](/help/en/pai/dsw-billing-description#a0e985ec8byqz). To view billing information, see [View your bills](/help/en/pai/view-bills-and-usage-details#multiTask1462).

## **Getting started**

New users should start with [Build and train a model in DSW](/help/en/pai/getting-started/dsw-quickstart) tutorial, which uses MNIST handwritten digit recognition case study for quick onboarding.

## **Get help**

For issues such as instance startup or stop failures, billing questions, free trial issues, remote connection failures, slow download speeds, or problems accessing DSW over internet, see [FAQ about DSW](/help/en/pai/faq-about-dsw).
