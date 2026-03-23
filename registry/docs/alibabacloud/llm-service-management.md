DataWorks large model services offer an all-in-one solution for efficient deployment, secure communication, and easy service invocation. You can deploy models using DataWorks serverless resource groups and call them directly in data development tasks. All traffic is transmitted through a private channel built with PrivateLink. This keeps your data within a private domain and ensures its security.

## **Supported models**

**Category**

**Model**

**Description**

**Large language model**

**Qwen3-32B**

Qwen3 is the latest generation of large language models in the Qwen series. It offers a full set of both dense and Mixture-of-Experts (MoE) models. Extensive training gives Qwen3 breakthrough capabilities in reasoning, instruction following, agent functions, and multilingual support. For more information about the model, see [Qwen3](/help/en/model-studio/models#94410dcf1al50).

**Important**

-   Deploying the `0.6B`, `1.7B`, `4B`, and `8B` models requires a minimum of `24 GB` of GPU memory.
    
-   Deploying the `14B` model requires a minimum of `48 GB` of GPU memory.
    
-   Deploying the `32B` model requires a minimum of `96 GB` of GPU memory.
    

**Qwen3-14B**

**Qwen3-8B**

**Qwen3-4B**

**Qwen3-1.7B**

**Qwen3-0.6B**

**Qwen3-Embedding-8B**

**Qwen3-Embedding-4B**

**Qwen3-Embedding-0.6B**

**DeepSeek-R1-0528-Qwen3-8B**

DeepSeek extensively uses reinforcement learning during its training phase. This significantly improves the model's inference capabilities, even with very little annotated data. For more information about the model, see [DeepSeek](/help/en/model-studio/models#935bd5ba5cg5d).

**DeepSeek-R1-Distill-Qwen-1.5B**

**DeepSeek-R1-Distill-Qwen-7B**

**DeepSeek-R1-Distill-Qwen-14B**

**Vector model**

**BGE-M3**

BGE-M3 is a general-purpose vector model. It supports dense retrieval, multi-vector retrieval, and sparse retrieval. It processes inputs ranging from short text to a maximum of 8,192 tokens and supports over 100 natural languages.

**BGE-Large-zh-v1.5**

BGE Embedding is a general-purpose vector model. The model is pre-trained using retromae and then trained on large-scale paired data using contrastive learning.

## **Features of large model services**

### **Fast deployment: Simplified online process**

A guided visual interface enables low-code deployment of pre-trained models. You do not need to write infrastructure code. You can create and publish model services with a few simple configurations. This lowers the barrier to bringing models online.

### **Secure internal communication: Guaranteed service isolation**

DataWorks large model services are deployed in a fully managed mode within DataWorks resource groups. They use [PrivateLink](/help/en/privatelink/what-is-a-private-network-connection) and [private zone](/help/en/dns/pvtz-what-is-intranet-domain-name-resolution) to establish cross-VPC internal communication and ensure network isolation. You can access the fully managed model from your VPC internal network. This ensures the security of the model service.

-   **Network-isolated communication**: PrivateLink establishes a dedicated connection channel between your VPC and the DataWorks resource group VPC. This ensures that traffic is not exposed to the internet and provides security isolation.
    
-   **Private domain name resolution**: A private zone deploys an internal DNS resolution service. This service automatically configures forwarding rules for private domain names. This lets you directly access the model service from within your VPC using a domain name.
    

### **Automated connection: Seamless service invocation**

When you deploy a model service in a DataWorks resource group or configure a VPC for it, the system automatically performs the following actions:

1.  Establish a cross-VPC connection: In your VPC (a VPC under your account that can connect to the DataWorks resource group), the system automatically creates a PrivateLink endpoint. It then establishes an encrypted communication channel with the PrivateLink service in the DataWorks resource group VPC.
    
2.  Configure a domain name resolution service: Domain name resolution rules are automatically configured in the VPC where the model service is configured. This automatically forwards domain name requests from within the VPC to the DataWorks model service.
    

## **Model invocation flow**

When you call a model service using a domain name:

1.  **Request parsing**: DNS requests within your VPC are resolved by a private zone to the private IP address of the DataWorks resource group VPC.
    
2.  **Traffic forwarding**: The request is securely transmitted from your VPC to the DataWorks resource group VPC through the dedicated channel established by PrivateLink.
    
3.  **Service response**: The request reaches the model instance within the DataWorks resource group VPC. The instance completes the inference and returns the result.
    

The entire process runs in a private network environment. No public IP address is exposed. This ensures the security and control of the model service.

## **Model deployment and usage**

In DataWorks, you can develop tasks by selecting and deploying the required models.

1.  [Deploy a model](/help/en/dataworks/user-guide/deploy-model).
    
2.  [Use a large model](/help/en/dataworks/user-guide/use-models).
