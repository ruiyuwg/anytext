## **Product overview**

[PAI-LangStudio](https://pai.console.alibabacloud.com/?#/swi?path=/lang-studio) is a one-stop, enterprise-grade agent development platform built on Alibaba Cloud PAI, deeply integrated with Alibaba Cloud's full-stack capabilities. The platform supports both low-code (visual workflow orchestration) and high-code development modes, with built-in features including rich node components, knowledge bases, MCP, and tools to help developers efficiently build, debug, and iterate agent applications.

To meet enterprise requirements, PAI-LangStudio provides global multi-region deployment capabilities and enterprise-grade features such as development-production environment isolation, fine-grained RAM-based access control, dedicated VPCs and compute resources, an evaluation system, and full-link observability. These ensure secure, stable, and compliant business operations. Developers can quickly complete proof-of-concept (POC) validation and publish applications as production-grade, high-availability services with one click, streamlining the entire process from prototype design to business implementation.

## **Functional architecture**

LangStudio provides comprehensive capabilities for the entire agent application lifecycle, including rapid development, performance optimization, and enterprise-grade deployment.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1368569671/p1047107.png)

### **Rapid agent application development**

The platform supports both low-code (visual workflow orchestration) and high-code development modes, providing out-of-the-box components and templates, unified connection configurations, and Tracing Analysis to help developers efficiently build, debug, and iterate agent applications.

-   **Visual workflow orchestration**: Drag and drop nodes such as Large Language Models (LLMs), Python code, and tool calls on a graphical canvas to quickly build application flows.
    
-   **High-code development**: A complete IDE environment supports mainstream agent frameworks like AgentScope and LangGraph, enabling developers to implement complex business logic flexibly through code.
    

### **Application performance tuning**

To address common agent application challenges like hallucination, forgetting, and low accuracy, the platform offers multi-layered optimization capabilities, including memory optimization, context management, automatic planning, multimodal knowledge bases, performance evaluation, and model fine-tuning.

-   **Multimodal knowledge base**: Supports retrieval of multimodal data including files, images, and videos using enterprise-selected vector databases such as Hologres, OpenSearch, and Milvus. This ensures self-managed data assets and supports automatic index updates with incremental synchronization to keep knowledge bases current.
    
-   **Automatic planning**: Agents can independently break down steps and call tools and knowledge bases to complete complex tasks.
    
-   **Performance evaluation system**: Provides one-stop application evaluation capabilities where batch evaluations drive continuous iteration and optimization.
    

### **Enterprise-grade capabilities**

For enterprise production environments, the platform offers multi-region deployment, development-production environment isolation, fine-grained RAM-based access control, dedicated VPCs and compute resources, and full-link observability to ensure application security, stability, and compliance.

-   **Fine-grained access control**: Based on Alibaba Cloud RAM authentication, this feature supports resource-level permission isolation and PAI workspace RBAC authentication.
    
-   **VPC network isolation**: Supports deployment in dedicated user VPCs with dedicated compute resources to ensure secure data transmission and storage.
    
-   **Independent model deployment**: Integrates with PAI-EAS and Model Gallery to support rapid, independent deployment, ensuring performance and stability.
    
-   **Full-link observability**: Integrates with Alibaba Cloud's OpenTelemetry for tracing and Simple Log Service (SLS) to provide metric monitoring, alerting, call chain tracing, and log analysis capabilities.
    

## **Benefits**

-   **Quick launch and out-of-the-box use**: Built-in, high-quality application templates like DeepResearch, retrieval-augmented generation (RAG), and natural language to SQL (NL2SQL) are developed and continuously optimized based on internal business practices. These templates help developers launch applications quickly from scratch, reducing learning costs and development barriers.
    
-   **Seamless integration with the PAI ecosystem**: Provides a complete closed-loop process for the entire agent application lifecycle, including application debugging, model fine-tuning, Tracing Analysis, performance evaluation, online deployment, and full application observability. This fully supports the rapid transition of AI applications from POC validation to production deployment.
    
-   **Transparent process and self-managed data**: Data cleansing, sharding strategy, and index construction processes are transparent. Enterprises can customize search and vectorization solutions as needed, with complete control over all sensitive data including source data, processing logic, intermediate data, and indexes.
    
-   **Enterprise-grade security and stability**: Ensures high availability and security through VPC network isolation, role-based fine-grained access control, independent EAS deployment, and Content Moderation reviews.
    

## **Scenarios**

LangStudio is highly flexible. You can combine standard module features to fit your business scenarios. The following are common application scenarios:

**Scenario type**

**Scenario description**

**Core capabilities**

**Enterprise-grade RAG application**

Build retrieval-augmented generation applications that integrate with private enterprise knowledge bases to improve answer accuracy and timeliness in specialized domains.

Multimodal knowledge base, dynamic index updates, isolation, context management

**NL2SQL for smart BI**

Query databases using natural language. The system automatically generates SQL and outputs reports, lowering the barrier to data analytics.

Natural language understanding, SQL generation, database connection, automated reporting

**Multimodal chat agent**

Process multimodal inputs including text, voice, and images to enable complex interactive scenarios like intelligent customer service and content creation.

Multimodal understanding, state management, tool calling, task planning

**Intelligent voice assistant**

Integrate speech synthesis and recognition capabilities to build interactive voice response applications suitable for scenarios like in-vehicle systems and smart homes.

Speech recognition, speech synthesis, dialogue management, tool calling

**Intelligent design assistant**

Combine visual generation capabilities to assist designers with creative design and image editing tasks.

Visual generation, prompt engineering, creative optimization, multi-turn interaction

## **Region restrictions**

LangStudio is available in the following regions: China (Hangzhou), China (Shanghai), China (Beijing), China (Ulanqab), China (Shenzhen), China (Hong Kong), Singapore, Japan (Tokyo), Indonesia (Jakarta), Germany (Frankfurt), and the US (Virginia).

To reduce latency, select a region close to your business data source or target users.

## **Billing**

LangStudio platform features incur no additional service fees. You pay only for the underlying cloud resources used during development and operation, including Object Storage Service (OSS) for work files, OpenTelemetry for call chain tracing, Simple Log Service (SLS) for log collection, and PAI-EAS for service deployment. For more information, see [LangStudio billing](/help/en/pai/billing-of-langstudio).

## **Usage process**

The typical LangStudio usage process is as follows:

**Note**

To help you get started quickly, LangStudio provides detailed Quick Start documents: [Create a workflow application](/help/en/pai/user-guide/create-a-workflow-application) and [Create a code-based application](/help/en/pai/user-guide/create-a-code-based-application).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9866579671/CAEQUxiBgICM9d.X4BkiIDBkZDdlMTgzMTBhZjRjNWY4Mjg0MjVhZGYyYTFkYTVi4601464_20240820150037.846.svg)
