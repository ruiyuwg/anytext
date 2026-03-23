BladeLLM is a high-performance inference engine designed for large language model (LLM) optimization and deployment. With its advanced technical architecture, user-friendly interface, and exceptional performance, BladeLLM addresses emerging opportunities and challenges in the LLM domain. This makes BladeLLM an ideal solution for enterprises seeking to deploy and operationalize LLMs for production inference workloads.

## Technical architecture

The following diagram illustrates the technical architecture of BladeLLM:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7350613771/CAEQMhiBgMD4j4PMoxkiIGMxYjY5MWZhZTBmMzRjMzBhNmRmYWQxYjUyMDYyNjZm4861099_20250107143119.325.svg)

### **Deployment platform**

BladeLLM is compatible with diverse GPU architectures, including NVIDIA, AMD, and other GPU platforms. It integrates deeply with Elastic Algorithm Service (EAS) for resource scheduling and management, delivering efficient and reliable end-to-end model deployment capabilities.

### **BladeLLM**

-   **Model computation**
    
    -   **High-performance operators and AI compilation:** BladeLLM features the flexible LLM operator library BlaDNN, which surpasses mainstream libraries in both feature coverage and performance. FlashNN, BladeLLM's AI-compiled operator library, enables automatic generation and extends across multiple hardware platforms while matching the performance of manually optimized operators.
        
    -   **Quantization compression:** As one of the most critical model optimization techniques for LLM inference, BladeLLM supports advanced quantization algorithms including GPTQ, AWQ, SmoothQuant, and SmoothQuant+. These methods significantly improve throughput and reduce latency.
        
    -   **Distributed inference:** BladeLLM supports multi-GPU distributed inference through tensor parallelism and pipeline parallelism strategies, with support for arbitrary degrees of parallelism to overcome GPU memory constraints inherent in LLMs.
        
-   **Generation engine**
    
    -   **Fully asynchronous runtime:** Beyond model computation optimizations, BladeLLM implements a fully asynchronous runtime specifically designed for LLM scenarios to handle high-concurrency service requests in production environments. User requests are asynchronously submitted to the batch scheduling module, forwarded to the generation engine, and processed through asynchronous decoding.
        
    -   **Continuous batching:** BladeLLM employs continuous batch processing to improve both throughput and first-token response latency.
        
    -   **Prompt Cache:** For repeated or similar queries, Prompt Cache enables BladeLLM to retrieve previously computed results from cache, significantly reducing response times.
        
    -   **Efficient decoding:** During decoding, BladeLLM utilizes advanced techniques such as speculative decoding and lookahead decoding to predict subsequent tokens in advance, accelerating token generation without compromising accuracy.
        
-   **Service framework**
    
    -   **Distributed scheduling and intelligent routing:** As model scale increases, single-instance resources become insufficient, necessitating multi-instance deployment. BladeLLM implements efficient distributed scheduling strategies combined with EAS intelligent LLM routing to achieve dynamic request distribution and balanced load allocation, maximizing cluster utilization.
        

### **Scenario**

BladeLLM supports diverse application scenarios including conversational AI, Retrieval-Augmented Generation (RAG), multimodal inference, and JSON mode, delivering efficient model deployment solutions across use cases.

## User experience

BladeLLM prioritizes user experience to simplify LLM deployment and operational workflows:

-   **Simple and convenient startup:** BladeLLM provides scenario-based deployment in EAS with pre-configured images, startup commands, and commonly used parameters. Users simply select an open-source or custom model and an appropriate instance type to achieve one-click model service deployment.
    
-   **Flexible and easy invocation:** BladeLLM supports both streaming and non-streaming response interfaces via HTTP Server-Sent Events (SSE). The interfaces are compatible with OpenAI API protocols, enabling seamless integration with existing business systems.
    
-   **Comprehensive model compatibility:** BladeLLM's model format aligns with community standards from Hugging Face and ModelScope, allowing users to directly utilize existing model weights without additional conversion steps.
    
-   **Out-of-the-box optimization options:** BladeLLM includes built-in optimization features such as quantization compression, speculative sampling, and prompt caching, all configurable through straightforward parameter settings.
    
-   **Production-ready stability:** BladeLLM delivers production-grade images alongside real-time monitoring and performance testing tools on EAS, ensuring stable and reliable operation for customer workloads.
    

## Performance comparison

The following benchmarks compare BladeLLM v0.8.0 performance against a mainstream open-source framework:

-   **TTFT-QPS curve:** BladeLLM significantly reduces Time To First Token (TTFT) by **2 to 3 times** under typical load scenarios and doubles queries per second (QPS) in scenarios with typical TTFT latency requirements.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0797537371/p901677.png)
    
-   **TBT-QPS curve:** BladeLLM reduces Time Between Tokens (TBT) by approximately **2 to 3.3 times** under typical load scenarios and increases QPS by **1.6 times** in scenarios with typical latency requirements.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0797537371/p901683.png)
